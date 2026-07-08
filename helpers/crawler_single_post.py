# helpers/crawler_single_post.py
import json
import time
from playwright.sync_api import sync_playwright, TimeoutError as PlaywrightTimeoutError
from typing import List, Dict
from helpers.tweet_types import parse_tweet, parse_user, normalize_tweet_result
import msvcrt
import threading

stop_crawling = False

def listen_for_enter():
    """
    Thread pendengar tombol Enter di terminal.
    Jika pengguna menekan Enter, crawling akan dihentikan dengan aman.
    """
    global stop_crawling
    while True:
        if msvcrt.kbhit():
            key = msvcrt.getch()
            if key == b'\r':
                print("\n[STOP] Enter ditekan di terminal, crawling dihentikan.\n")
                stop_crawling = True
                break
        time.sleep(0.2)

def crawl_single_post(url: str, auth: str) -> List[Dict]:
    """
    Melakukan crawling terhadap satu postingan (tweet utama) dan seluruh reply-nya.
    Mengambil data tweet dan user secara real-time melalui intercept response Playwright.

    Parameter:
        url (str): URL tweet yang ingin di-crawl.
        auth (str): Nama file auth (tanpa ekstensi) di folder auth/. Default: 'cookies'.

    Return:
        (tweets, users):
            tweets -> daftar dictionary hasil parsing tweet.
            users  -> daftar dictionary hasil parsing user (unik berdasarkan user_id_str).
    """
    global stop_crawling
    stop_crawling = False

    # Jalankan listener Enter di thread terpisah
    threading.Thread(target=listen_for_enter, daemon=True).start()

    # Inisialisasi variabel utama
    tweets: List[Dict] = []
    users: dict = {}
    tweet_index = {}
    scroll_pause = 3              # jeda antar scroll (detik)
    scrolling_number = 0          # penghitung jumlah scroll
    timeout_limit = 10            # jumlah scroll tanpa hasil sebelum dianggap timeout
    timeout_count = 0             # penghitung jumlah timeout
    max_timeout = 3               # batas maksimum timeout sebelum crawling dihentikan
    new_tweets_since_last_scroll = 0
    new_tweets_since_last_cooldown = 0
    last_seen_created_at = None

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context()

        # Muat cookies autentikasi agar bisa akses tweet login-only
        with open(f"auth/{auth}.json", "r", encoding="utf-8") as f:
            cookies = json.load(f)

        # Perbaiki atribut sameSite jika tidak valid
        for c in cookies:
            if 'sameSite' not in c or c['sameSite'] not in ['Strict', 'Lax', 'None']:
                c['sameSite'] = 'Lax'

        context.add_cookies(cookies)
        page = context.new_page()

        def handle_response(response):
            """
            Fungsi callback yang dijalankan setiap kali ada response dari browser.
            Mendeteksi response TweetDetail untuk mengekstrak tweet dan user.
            """
            nonlocal tweets, users, tweet_index, new_tweets_since_last_scroll, new_tweets_since_last_cooldown, last_seen_created_at
            try:
                if stop_crawling:
                    return
                if "TweetDetail" in response.url:
                    try:
                        data = response.json()
                    except Exception as e:
                        print("[WARNING] JSON gagal dibaca:", e)
                        return

                    # Ambil ID tweet utama (focal)
                    focal_tweet_id = (
                        data.get("data", {})
                        .get("threaded_conversation_with_injections_v2", {})
                        .get("focalTweet", {})
                        .get("rest_id"))

                    # Ambil semua instruksi (daftar isi percakapan)
                    instructions = (
                        data.get("data", {})
                        .get("threaded_conversation_with_injections_v2", {})
                        .get("instructions", []))

                    for instr in instructions:
                        if instr.get("type") != "TimelineAddEntries":
                            continue

                        for entry in instr.get("entries", []):
                            content = entry.get("content", {})

                            # === Tweet utama ===
                            if content.get("entryType") == "TimelineTimelineItem":
                                item = content.get("itemContent", {})
                                if item.get("itemType") != "TimelineTweet":
                                    continue

                                tweet_res = item.get("tweet_results", {}).get("result", {})
                                if not tweet_res:
                                    continue
                                tweet_res = normalize_tweet_result(tweet_res)
                                if not tweet_res:
                                    continue

                                parsed_tweet = parse_tweet(tweet_res)
                                parsed_user = parse_user(tweet_res)
                                tweet_id = parsed_tweet.get("tweet_id_str")
                                user_id = parsed_user.get("user_id_str")

                                if tweet_id == "-" or tweet_id is None:
                                    continue

                                created_at = parsed_tweet.get("created_at")
                                if created_at and created_at != "-":
                                    last_seen_created_at = created_at

                                if tweet_id not in tweet_index:
                                    tweet_index[tweet_id] = len(tweets)
                                    if tweet_res.get("rest_id") == focal_tweet_id:
                                        tweets.insert(0, parsed_tweet)
                                    else:
                                        tweets.append(parsed_tweet)

                                    if user_id != "-" and user_id not in users:
                                        users[user_id] = parsed_user

                            # === Replies ===
                            elif content.get("entryType") == "TimelineTimelineModule":
                                items = content.get("items", [])
                                for itm in items:
                                    item_content = itm.get("item", {}).get("itemContent", {})
                                    if item_content.get("itemType") != "TimelineTweet":
                                        continue

                                    tweet_res = item_content.get("tweet_results", {}).get("result", {})
                                    if not tweet_res:
                                        continue
                                    tweet_res = normalize_tweet_result(tweet_res)
                                    if not tweet_res:
                                        continue

                                    parsed_tweet = parse_tweet(tweet_res)
                                    parsed_user = parse_user(tweet_res)
                                    tweet_id = parsed_tweet.get("tweet_id_str")
                                    user_id = parsed_user.get("user_id_str")

                                    if tweet_id == "-" or tweet_id is None:
                                        continue

                                    created_at = parsed_tweet.get("created_at")
                                    if created_at and created_at != "-":
                                        last_seen_created_at = created_at

                                    if tweet_id not in tweet_index:
                                        tweet_index[tweet_id] = len(tweets)
                                        tweets.append(parsed_tweet)
                                        new_tweets_since_last_scroll += 1
                                        new_tweets_since_last_cooldown += 1

                                        if user_id != "-" and user_id not in users:
                                            users[user_id] = parsed_user
            except Exception:
                pass

        # Pasang event listener ke browser page
        page.on("response", handle_response)
        print(f"\n[OK] Crawling post: {url}")

        try:
            page.goto(url, wait_until="domcontentloaded", timeout=60000)
            page.wait_for_selector("article", timeout=30000)
        except Exception as e:
            print("[WARNING] ", e)

        stop_crawling = False

        if len(tweets) > 0:
            print(f"[OK] Initial load: {len(tweets)} tweet tertangkap")
        else:
            print(f"[WARNING] Initial load: 0 tweet tertangkap")

        # === LOOP utama scrolling ===
        try:
            while timeout_count < max_timeout and not stop_crawling:
                scrolling_number += 1
                tweets_before = len(tweets)
                page.mouse.wheel(0, 5000)
                page.wait_for_timeout(scroll_pause * 1000)
                tweets_added = len(tweets) - tweets_before

                # Cek tombol Retry (rate limit atau koneksi lambat)
                try:
                    retry_attempts = 0

                    while True:
                        retry_button = page.locator("text=Retry").first

                        if not retry_button.is_visible() or stop_crawling:
                            break

                        retry_attempts += 1

                        if retry_attempts > 20:
                            print(f"[WARNING] Scroll limit terdeteksi melebihi 20 kali. Crawling dihentikan.")
                            stop_crawling = True
                            break

                        try:
                            retry_button.click()
                        except:
                            pass

                        page.wait_for_timeout(5000)

                        if page.locator("text=Retry").first.is_visible():
                            print(f"\n[WARNING] Scroll limit terdeteksi {retry_attempts} kali.")
                            print("[COOLDOWN] Istirahat sejenak, cooldown 1 menit")
                            time.sleep(55)
                        else:
                            print("\n[OK] Limit hilang, continue crawling\n")
                            break

                except PlaywrightTimeoutError:
                    pass
                except Exception as e:
                    print(f"[WARNING] Retry handler error: {e}")

                if stop_crawling and last_seen_created_at:
                    print(f"\n[INFO] Tweet terakhir terdeteksi pada: {last_seen_created_at}")
                    break

                # Jika ada tweet baru
                if tweets_added > 0:
                    print(f"-- Scrolling... [{scrolling_number}/{timeout_limit}] (+{tweets_added}) | Total: {len(tweets)}")
                    scrolling_number = 0
                    timeout_count = 0
                    new_tweets_since_last_scroll = 0

                # Jika tidak ada tweet baru selama beberapa scroll
                else:
                    print(f"-- Scrolling... [{scrolling_number}/{timeout_limit}] (+0) | Total: {len(tweets)}")
                    if scrolling_number >= timeout_limit:
                        timeout_count += 1
                        scrolling_number = 0
                        print(f"[WARNING] Timeout ({timeout_count}/{max_timeout})\n")

                        if timeout_count >= max_timeout:
                            print(f"[WARNING] Timeout berjumlah {timeout_count} kali, crawling dihentikan.")
                            if last_seen_created_at:
                                print(f"\n[INFO] Tweet terakhir terdeteksi pada: {last_seen_created_at}")
                            break

                # Cooldown tiap 400 tweet baru untuk menghindari rate limit
                if new_tweets_since_last_cooldown >= 400:
                    print("\n[COOLDOWN] Istirahat sejenak, cooldown 10 detik\n")
                    time.sleep(10)
                    new_tweets_since_last_cooldown = 0

        finally:
            browser.close()

    return tweets, list(users.values())
