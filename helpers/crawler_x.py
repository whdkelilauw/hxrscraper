# helpers/crawler_x.py
import json
import time
from datetime import datetime, timezone, timedelta
from playwright.sync_api import sync_playwright, TimeoutError as PlaywrightTimeoutError
from typing import List, Dict
from helpers.x_types import parse_tweet, parse_user, normalize_tweet_result
import msvcrt
import threading
import urllib.parse

WIB = timezone(timedelta(hours=7))


def _parse_created_at(date_str):
    try:
        return datetime.strptime(date_str, "%a %b %d %H:%M:%S %z %Y")
    except Exception:
        return None


def _fmt_until(date_str):
    dt = _parse_created_at(date_str)
    return dt.astimezone(WIB).strftime("%Y-%m-%d_%H:%M:%S_WIB") if dt else date_str


def _to_until_param(created_at_str):
    dt = datetime.strptime(created_at_str, "%a %b %d %H:%M:%S %z %Y")
    wib_dt = dt.astimezone(WIB)
    return f"until:{wib_dt.strftime('%Y-%m-%d_%H:%M:%S')}_WIB"

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


def crawl_tweets(keyword: str, excluded: str, since: str, until: str, lang: str, auth: str, limit: int = 50, headless: bool = True, sort: str = 'recent', retweets: bool = True) -> List[Dict]:
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

    threading.Thread(target=listen_for_enter, daemon=True).start()

    tweets: List[Dict] = []
    users: dict = {}
    tweet_index = {}
    max_retries = 3
    retry_count = 0
    current_until = until
    overall_oldest = None
    overall_oldest_dt = None

    while retry_count <= max_retries:
        if stop_crawling:
            break

        if retry_count > 0:
            print(f"\n{'=' * 50}")
            print(f"  [RETRY] Percobaan {retry_count}/{max_retries}")
            print(f"  [RETRY] Until diset ke: {current_until}")
            print(f"{'=' * 50}")

        parts = [keyword, excluded, since, current_until, lang]
        query = " ".join(part for part in parts if part).strip()
        encoded = urllib.parse.quote(query)
        sort_param = "&f=live" if sort == 'recent' else ""
        rt_param = "%20include%3Anativeretweets" if retweets else ""
        search_url = f"https://x.com/search?q={encoded}{rt_param}&src=typed_query{sort_param}"

        scroll_pause = 3
        scrolling_number = 0
        timeout_limit = 10
        timeout_count = 0
        max_timeout = 3
        new_tweets_since_last_scroll = 0
        new_tweets_since_last_cooldown = 0
        last_seen_created_at = None
        timed_out = False
        tweets_before_attempt = len(tweets)

        with sync_playwright() as p:
            browser = p.chromium.launch(headless=headless)
            context = browser.new_context()

            with open(f"auth/{auth}.json", "r", encoding="utf-8") as f:
                cookies = json.load(f)

            for c in cookies:
                if 'sameSite' not in c or c['sameSite'] not in ['Strict', 'Lax', 'None']:
                    c['sameSite'] = 'Lax'

            context.add_cookies(cookies)
            page = context.new_page()

            page.route("**/*", lambda route: route.abort() if route.request.resource_type in ("image", "media") else route.continue_())

            def handle_response(response):
                nonlocal tweets, users, new_tweets_since_last_scroll, new_tweets_since_last_cooldown, last_seen_created_at
                try:
                    if stop_crawling:
                        return
                    if "SearchTimeline" in response.url:
                        data = response.json()

                        search_data = (
                            data.get("data", {}).get("search_by_raw_query", {}).get("search_timeline")
                            or data.get("data", {}).get("search_timeline")
                            or data.get("data", {}).get("search", {}).get("search_timeline")
                        )

                        if not search_data:
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

                                    if user_id != "-" and user_id not in users:
                                        users[user_id] = parsed_user

                                    new_tweets_since_last_scroll += 1
                                    new_tweets_since_last_cooldown += 1

                except Exception:
                    pass

            page.on("response", handle_response)
            print(f"\n[OK] Crawling URL: {search_url}")

            try:
                page.goto(search_url, wait_until="domcontentloaded", timeout=60000)
                page.wait_for_selector("article", timeout=30000)
            except Exception as e:
                print("[WARNING] ", e)

            try:
                retry_attempts = 0
                retry_locator = page.locator("text=/^(Retry|Coba lagi)$/i").first

                while True:
                    if not retry_locator.is_visible() or stop_crawling:
                        break

                    retry_attempts += 1

                    if retry_attempts > 20:
                        print(f"[WARNING] Scroll limit terdeteksi melebihi 20 kali. Crawling dihentikan.")
                        stop_crawling = True
                        break

                    try:
                        retry_locator.click()
                    except:
                        pass

                    page.wait_for_timeout(5000)

                    if retry_locator.is_visible():
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

            if len(tweets) > tweets_before_attempt:
                print(f"[OK] Initial load: {len(tweets) - tweets_before_attempt} tweet tertangkap")
            else:
                print(f"[WARNING] Initial load: 0 tweet tertangkap")

            try:
                while len(tweets) < limit and timeout_count < max_timeout and not stop_crawling:
                    scrolling_number += 1
                    tweets_before = len(tweets)
                    page.mouse.wheel(0, 5000)
                    page.wait_for_timeout(scroll_pause * 1000)
                    tweets_added = len(tweets) - tweets_before

                    try:
                        retry_attempts = 0
                        retry_locator = page.locator("text=/^(Retry|Coba lagi)$/i").first

                        while True:
                            if not retry_locator.is_visible() or stop_crawling:
                                break

                            retry_attempts += 1

                            if retry_attempts > 20:
                                print(f"[WARNING] Scroll limit terdeteksi melebihi 20 kali. Crawling dihentikan.")
                                stop_crawling = True
                                break

                            try:
                                retry_locator.click()
                            except:
                                pass

                            page.wait_for_timeout(5000)

                            if retry_locator.is_visible():
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
                        print(f"\n[INFO] Tweet tertua terdeteksi pada: {last_seen_created_at} -> UNTIL: {_fmt_until(last_seen_created_at)}")
                        break

                    if tweets_added > 0:
                        print(f"-- Scrolling... [{scrolling_number}/{timeout_limit}] (+{tweets_added}) | Total: {len(tweets)}")
                        scrolling_number = 0
                        timeout_count = 0
                        new_tweets_since_last_scroll = 0

                    else:
                        print(f"-- Scrolling... [{scrolling_number}/{timeout_limit}] (+0) | Total: {len(tweets)}")
                        if scrolling_number >= timeout_limit:
                            timeout_count += 1
                            scrolling_number = 0
                            print(f"[WARNING] Timeout ({timeout_count}/{max_timeout})\n")

                            if timeout_count >= max_timeout:
                                print(f"[WARNING] Timeout berjumlah {timeout_count} kali, crawling dihentikan.")
                                if last_seen_created_at:
                                    print(f"\n[INFO] Tweet tertua terdeteksi pada: {last_seen_created_at} -> UNTIL: {_fmt_until(last_seen_created_at)}")
                                timed_out = True
                                break

                    if new_tweets_since_last_cooldown >= 200:
                        print("\n[COOLDOWN] Istirahat sejenak, cooldown 10 detik\n")
                        time.sleep(10)
                        new_tweets_since_last_cooldown = 0

            finally:
                browser.close()

        tweets_this_attempt = len(tweets) - tweets_before_attempt

        # Simpan yang tertua lintas percobaan, bukan nilai percobaan terakhir.
        if last_seen_created_at:
            dt = _parse_created_at(last_seen_created_at)
            if dt and (overall_oldest_dt is None or dt < overall_oldest_dt):
                overall_oldest_dt = dt
                overall_oldest = last_seen_created_at

        if stop_crawling:
            break

        if not timed_out:
            break

        if tweets_this_attempt == 0:
            print(f"\n[INFO] Retry menghasilkan 0 tweet baru, dihentikan.")
            break

        if not last_seen_created_at:
            break

        if tweets_this_attempt > 0:
            retry_count = 0
        retry_count += 1

        if retry_count > max_retries:
            break

        # Anchor ke yang tertua lintas percobaan supaya retry selalu maju mundur
        # ke rentang baru, bukan mengulang rentang yang sudah ter-crawl.
        current_until = _to_until_param(overall_oldest or last_seen_created_at)

    if overall_oldest:
        print(f"\n[INFO] Tweet tertua terdeteksi pada: {overall_oldest} -> UNTIL: {_fmt_until(overall_oldest)}")

    total_parsed = len(tweets)
    if total_parsed == limit:
        final_result = tweets[:limit]
    elif total_parsed > limit and total_parsed <= limit + 20:
        final_result = tweets
    else:
        final_result = tweets[:limit]

    return final_result, list(users.values())
