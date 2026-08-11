# helpers/crawler_x.py
import json
import time
from playwright.sync_api import sync_playwright, TimeoutError as PlaywrightTimeoutError
from typing import List, Dict
from helpers.x_types import parse_tweet, parse_user, normalize_tweet_result
import msvcrt
import threading
import urllib.parse

stop_crawling = False

def listen_for_enter():
    """
    Thread pendengar tombol Enter di terminal.
    Jika pengguna menekan Enter, proses crawling akan dihentikan dengan aman.
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


def crawl_tweets(keyword: str, excluded: str, since: str, until: str, lang: str, auth: str, limit: int = 50, headless: bool = True) -> List[Dict]:
    """
    Melakukan crawling tweet berdasarkan kata kunci, rentang tanggal, bahasa, dan batas jumlah.
    Menggunakan Playwright untuk mengakses X (Twitter) versi web, kemudian menangkap response JSON 
    berisi data timeline tweet (SearchTimeline) dan mem-parsing hasilnya menjadi format dictionary.

    Parameter:
        keyword (str): Kata kunci pencarian (misalnya "IKN" atau "pemilu").
        since (str): Tanggal mulai dalam format YYYY-MM-DD (contoh: "2024-01-01").
        until (str): Tanggal akhir dalam format YYYY-MM-DD (contoh: "2024-02-01").
        lang (str): Kode bahasa (misalnya "id" untuk Bahasa Indonesia, "en" untuk Inggris).
        limit (int): Batas maksimum jumlah tweet yang akan dikumpulkan.

    Return:
        (tweets, users):
            tweets -> daftar tweet hasil scraping.
            users  -> daftar unik pengguna yang ditemukan di timeline.
    """

    global stop_crawling
    stop_crawling = False

    # Jalankan thread untuk mendeteksi tombol Enter agar crawling bisa dihentikan kapan saja
    threading.Thread(target=listen_for_enter, daemon=True).start()
    
    # Susun query pencarian dari parameter yang diberikan
    parts = [keyword, excluded, since, until, lang]
    query = " ".join(part for part in parts if part).strip()
    encoded = urllib.parse.quote(query)
    search_url = f"https://x.com/search?q={encoded}%20include%3Anativeretweets&src=typed_query&f=live"

    # Inisialisasi variabel
    tweets: List[Dict] = []
    users: dict = {}
    tweet_index = {}
    scroll_pause = 3              # jeda antar scroll (detik)
    scrolling_number = 0          # jumlah scroll berturut-turut
    timeout_limit = 10            # batas scroll tanpa hasil sebelum timeout
    timeout_count = 0             # jumlah timeout yang sudah terjadi
    max_timeout = 3               # batas maksimum timeout
    new_tweets_since_last_scroll = 0
    new_tweets_since_last_cooldown = 0
    last_seen_created_at = None

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=headless)
        context = browser.new_context()

        # Muat cookies autentikasi agar bisa akses hasil pencarian penuh
        with open(f"auth/{auth}.json", "r", encoding="utf-8") as f:
            cookies = json.load(f)

        # Pastikan properti sameSite selalu valid
        for c in cookies:
            if 'sameSite' not in c or c['sameSite'] not in ['Strict', 'Lax', 'None']:
                c['sameSite'] = 'Lax'
                
        context.add_cookies(cookies)
        page = context.new_page()

        # Block media requests agar browser lebih ringan (pengganti Data Saver)
        page.route("**/*.{png,jpg,jpeg,gif,webp,svg,mp4,webm,m3u8,ts}", lambda route: route.abort())
        page.route("**/pbs.twimg.com/**", lambda route: route.abort())
        page.route("**/video.twimg.com/**", lambda route: route.abort())

        def handle_response(response):
            """
            Fungsi event listener untuk menangani setiap response yang masuk dari browser.
            Jika response mengandung data "SearchTimeline", maka data tweet dan user akan di-parse.
            """
            nonlocal tweets, users, new_tweets_since_last_scroll, new_tweets_since_last_cooldown, last_seen_created_at
            try:
                if stop_crawling:
                    return
                if "SearchTimeline" in response.url:
                    data = response.json()

                    # Ambil struktur timeline dari berbagai kemungkinan lokasi key JSON
                    search_data = (
                        data.get("data", {}).get("search_by_raw_query", {}).get("search_timeline")
                        or data.get("data", {}).get("search_timeline")
                        or data.get("data", {}).get("search", {}).get("search_timeline")
                    )

                    if not search_data:
                        # print("[WARNING] search_data not found in response keys:", list(data.get("data", {}).keys()))
                        return
                    
                    timeline = search_data.get("timeline", {})
                    instructions = timeline.get("instructions", [])

                    for instr in instructions:
                        if instr.get("type") != "TimelineAddEntries":
                            continue
                        
                        for entry in instr.get("entries", []):
                            content = entry.get("content", {}).get("itemContent", {})
                            if content.get("itemType") != "TimelineTweet":
                                continue
                            
                            tweet_res = content.get("tweet_results", {}).get("result", {})
                            if not tweet_res:
                                continue

                            # Normalize (handle TweetWithVisibilityResults)
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

                            # Simpan tweet baru, skip duplikat
                            if tweet_id not in tweet_index:
                                tweet_index[tweet_id] = len(tweets)
                                tweets.append(parsed_tweet)

                                if user_id != "-" and user_id not in users:
                                    users[user_id] = parsed_user

                                new_tweets_since_last_scroll += 1
                                new_tweets_since_last_cooldown += 1

            except Exception:
                pass

        # Pasang listener response
        page.on("response", handle_response)
        print(f"\n[OK] Crawling URL: {search_url}")

        # Buka halaman pencarian
        try:
            page.goto(search_url, wait_until="domcontentloaded", timeout=60000)
            page.wait_for_selector("article", timeout=30000)
        except Exception as e:
            print("[WARNING] ",e)

        if len(tweets) > 0:
            print(f"[OK] Initial load: {len(tweets)} tweet tertangkap")
        else:
            print(f"[WARNING] Initial load: 0 tweet tertangkap")

        # === LOOP utama scrolling ===
        try:
            while len(tweets) < limit and timeout_count < max_timeout and not stop_crawling:
                scrolling_number += 1
                tweets_before = len(tweets)
                page.mouse.wheel(0, 5000)
                page.wait_for_timeout(scroll_pause * 1000)
                tweets_added = len(tweets) - tweets_before

                # Cek apakah ada tombol "Retry" (rate-limit)
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

                # Jika berhasil menambah tweet baru
                if tweets_added > 0:
                    print(f"-- Scrolling... [{scrolling_number}/{timeout_limit}] (+{tweets_added}) | Total: {len(tweets)}")
                    scrolling_number = 0
                    timeout_count = 0     
                    new_tweets_since_last_scroll = 0

                # Jika tidak ada tweet baru dalam beberapa scroll
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

                # Cooldown tiap 200 tweet baru
                if new_tweets_since_last_cooldown >= 400:
                    print("\n[COOLDOWN] Istirahat sejenak, cooldown 10 detik\n")
                    time.sleep(10)
                    new_tweets_since_last_cooldown = 0

        finally:
            browser.close()

    # Batasi hasil akhir agar tidak melebihi limit
    total_parsed = len(tweets)
    if total_parsed == limit:
        final_result = tweets[:limit]
    elif total_parsed > limit and total_parsed <= limit + 20:
        final_result = tweets
    else:
        final_result = tweets[:limit]
    
    return final_result, list(users.values())
