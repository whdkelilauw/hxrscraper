# helpers/crawler_single_post.py
import json
import time
from playwright.sync_api import sync_playwright, TimeoutError as PlaywrightTimeoutError
from typing import List, Dict
from helpers.tweet_types import parse_tweet, parse_user
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

def crawl_single_post(url: str) -> List[Dict]:
    """
    Melakukan crawling terhadap satu postingan (tweet utama) dan seluruh reply-nya.
    Mengambil data tweet dan user secara real-time melalui intercept response Playwright.

    Parameter:
        url (str): URL tweet yang ingin di-crawl.
    
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
    scroll_pause = 3              # jeda antar scroll (detik)
    scrolling_number = 0          # penghitung jumlah scroll
    timeout_limit = 10            # jumlah scroll tanpa hasil sebelum dianggap timeout
    timeout_count = 0             # penghitung jumlah timeout
    max_timeout = 3               # batas maksimum timeout sebelum crawling dihentikan
    new_tweets_since_last_scroll = 0
    new_tweets_since_last_cooldown = 0

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context()

        # Muat cookies autentikasi agar bisa akses tweet login-only
        with open("auth/cookies.json", "r", encoding="utf-8") as f:
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
            nonlocal tweets, users, new_tweets_since_last_scroll, new_tweets_since_last_cooldown
            try:
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
                                if tweet_res:
                                    parsed_tweet = parse_tweet(tweet_res)
                                    parsed_user = parse_user(tweet_res)
                                    user_id = parsed_user.get("user_id_str")
                                    
                                    if parsed_tweet and parsed_tweet not in tweets:
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
                                    if tweet_res:
                                        parsed_tweet = parse_tweet(tweet_res)
                                        parsed_user = parse_user(tweet_res)
                                        user_id = parsed_user.get("user_id_str")

                                        if parsed_tweet and parsed_tweet not in tweets:
                                            tweets.append(parsed_tweet)
                                            new_tweets_since_last_scroll += 1
                                            new_tweets_since_last_cooldown += 1

                                        if user_id != "-" and user_id not in users:
                                            users[user_id] = parsed_user
            except:
                pass

        # Pasang event listener ke browser page
        page.on("response", handle_response)
        print(f"\n[OK] Crawling post: {url}")
        page.goto(url, wait_until="networkidle")
        stop_crawling = False

        # === LOOP utama scrolling ===
        while timeout_count < max_timeout and not stop_crawling:
            scrolling_number += 1
            tweets_before = len(tweets)
            page.mouse.wheel(0, 5000)
            page.wait_for_timeout(scroll_pause * 1000)
            tweets_added = len(tweets) - tweets_before

            # Cek tombol Retry (rate limit atau koneksi lambat)
            try:
                retry_button = page.locator("text=Retry").first
                retry_attempts = 0

                while retry_button.is_visible():
                    if stop_crawling:
                        break
                    
                    retry_attempts += 1
                    if retry_attempts > 10:
                        print(f"[WARNING] Scroll limit terdeteksi melebihi 10 kali. crawling dihentikan.")
                        stop_crawling = True
                        break

                    print(f"\n[WARNING] Scroll limit terdeteksi {retry_attempts} kali.")
                    print("[COOLDOWN] Istirahat sejenak, cooldown 2 menit\n")
                    time.sleep(120)

                    retry_button.click()
                    page.wait_for_timeout(5000)
                    retry_button = page.locator("text=Retry").first

                    if retry_button.is_visible():
                        continue
                    else:
                        print("[OK] Limit hilang, continue crawling\n")
                        break

            except PlaywrightTimeoutError:
                pass
            except Exception:
                pass

            if stop_crawling:
                break

            # Jika ada tweet baru
            if tweets_added > 0:
                print(f"-- Scrolling... [{scrolling_number}/{timeout_limit}] (+{tweets_added} tweet). Total parsed tweets: {len(tweets)}")
                scrolling_number = 0
                timeout_count = 0
                new_tweets_since_last_scroll = 0
            
            # Jika tidak ada tweet baru selama beberapa scroll
            else:
                print(f"-- Scrolling... [{scrolling_number}/{timeout_limit}] (0 tweet)")
                if scrolling_number >= timeout_limit:
                    timeout_count += 1
                    scrolling_number = 0
                    print(f"[WARNING] Timeout ({timeout_count}/{max_timeout}) \n")
                    
                    if timeout_count >= max_timeout:
                        print(f"[WARNING] Timeout berjumlah {timeout_count} kali, crawling dihentikan.")
                        break

            # Cooldown tiap 100 tweet baru untuk menghindari rate limit
            if new_tweets_since_last_cooldown >= 100:
                print("\n[COOLDOWN] Istirahat sejenak, cooldown 10 detik\n")
                time.sleep(5)
                new_tweets_since_last_cooldown = 0

        browser.close()

    return tweets, list(users.values())
