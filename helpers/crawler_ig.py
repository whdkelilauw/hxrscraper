# helpers/crawler_ig.py
import json
import time
import asyncio
from playwright.sync_api import sync_playwright
from playwright.async_api import async_playwright as async_pw
from typing import List, Dict
from helpers.ig_types import parse_ig_post, parse_ig_user, parse_ig_user_profile

import msvcrt
import threading
import urllib.parse

stop_crawling = False

IG_PROFILE_DOC_ID = "38611279431804694"


def listen_for_enter():
    global stop_crawling
    while True:
        if msvcrt.kbhit():
            key = msvcrt.getch()
            if key == b'\r':
                print("\n[STOP] Enter ditekan di terminal, crawling dihentikan.\n")
                stop_crawling = True
                break
        time.sleep(0.2)


def crawl_ig(keyword: str, auth: str, limit: int = 50, headless: bool = True, enrichment: bool = True) -> tuple:
    """
    Crawling Instagram posts berdasarkan keyword.
    Menggunakan Playwright untuk intercept GraphQL search response.

    Parameter:
        keyword (str): Kata kunci pencarian.
        auth (str): Nama file cookies di folder auth/ (tanpa .json).
        limit (int): Batas jumlah post.
        headless (bool): Jalankan browser tanpa tampilan.

    Return: (posts, users)
    """

    global stop_crawling
    stop_crawling = False

    threading.Thread(target=listen_for_enter, daemon=True).start()

    encoded_kw = urllib.parse.quote(keyword)
    search_url = f"https://www.instagram.com/explore/search/keyword/?q={encoded_kw}"

    posts: List[Dict] = []
    users: dict = {}
    post_index = {}
    scroll_pause = 3
    scrolling_number = 0
    timeout_limit = 10
    timeout_count = 0
    max_timeout = 3
    new_posts_since_last_scroll = 0
    new_posts_since_last_cooldown = 0

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

        page.route("**/*.{png,jpg,jpeg,gif,webp,svg,mp4,webm,m3u8,ts}", lambda route: route.abort())
        page.route("**/instagram.*.fna.fbcdn.net/**", lambda route: route.abort())
        page.route("**/scontent.*.fna.fbcdn.net/**", lambda route: route.abort())

        def handle_response(response):
            nonlocal posts, users, new_posts_since_last_scroll, new_posts_since_last_cooldown
            try:
                if stop_crawling:
                    return
                url = response.url
                if "graphql" not in url:
                    return

                data = response.json()
                serp = data.get("data", {}).get("xdt_fbsearch__top_serp_graphql")
                if not serp:
                    return

                edges = serp.get("edges", [])
                for edge in edges:
                    node = edge.get("node", {})
                    if node.get("__typename") != "XDTTopSerpMediaGridUnit":
                        continue

                    items = node.get("items", [])
                    for item in items:
                        post = item.get("media") or item

                        post_id = str(post.get("pk", ""))
                        if not post_id or post_id in post_index:
                            continue

                        parsed_post = parse_ig_post(post)
                        parsed_user = parse_ig_user(post)

                        post_index[post_id] = len(posts)
                        posts.append(parsed_post)

                        user_id = parsed_user.get("user_id_str", "")
                        if user_id != "-" and user_id not in users:
                            users[user_id] = parsed_user

                        new_posts_since_last_scroll += 1
                        new_posts_since_last_cooldown += 1

            except Exception:
                pass

        page.on("response", handle_response)
        print(f"\n[OK] Crawling Instagram: {search_url}")

        try:
            page.goto(search_url, wait_until="domcontentloaded", timeout=60000)
            page.wait_for_timeout(5000)
        except Exception as e:
            print("[WARNING] ", e)

        if len(posts) > 0:
            print(f"[OK] Initial load: {len(posts)} post tertangkap")
        else:
            print(f"[WARNING] Initial load: 0 post tertangkap")

        try:
            while len(posts) < limit and timeout_count < max_timeout and not stop_crawling:
                scrolling_number += 1
                posts_before = len(posts)
                page.mouse.wheel(0, 5000)
                page.wait_for_timeout(scroll_pause * 1000)
                posts_added = len(posts) - posts_before

                if stop_crawling:
                    break

                if posts_added > 0:
                    print(f"-- Scrolling... [{scrolling_number}/{timeout_limit}] (+{posts_added}) | Total: {len(posts)}")
                    scrolling_number = 0
                    timeout_count = 0
                    new_posts_since_last_scroll = 0

                else:
                    print(f"-- Scrolling... [{scrolling_number}/{timeout_limit}] (+0) | Total: {len(posts)}")
                    if scrolling_number >= timeout_limit:
                        timeout_count += 1
                        scrolling_number = 0
                        print(f"[WARNING] Timeout ({timeout_count}/{max_timeout})\n")

                        if timeout_count >= max_timeout:
                            print(f"[WARNING] Timeout berjumlah {timeout_count} kali, crawling dihentikan.")
                            break

                if new_posts_since_last_cooldown >= 200:
                    print("\n[COOLDOWN] Istirahat sejenak, cooldown 10 detik\n")
                    time.sleep(10)
                    new_posts_since_last_cooldown = 0

        finally:
            page.close()
            browser.close()

    # === Phase 2: User enrichment via GraphQL intercept ===
    user_list = list(users.values())
    total_users = len(user_list)
    if total_users > 0 and enrichment:
        stop_crawling = False
        threading.Thread(target=listen_for_enter, daemon=True).start()
        n_tabs = min(2, total_users)
        print(f"\n[OK] Enriching {total_users} users ({n_tabs} tab)...")
        asyncio.run(_enrich_users_parallel(auth, users, user_list, n_tabs, headless))

    total_parsed = len(posts)
    if total_parsed == limit:
        final_result = posts[:limit]
    elif total_parsed > limit and total_parsed <= limit + 20:
        final_result = posts
    else:
        final_result = posts[:limit]

    return final_result, list(users.values())


async def _enrich_single_user(tab, username, user_id, users):
    if stop_crawling:
        return
    profile_data = {}
    data_received = asyncio.Event()

    async def on_response(response):
        nonlocal profile_data
        try:
            if "graphql" not in response.url:
                return
            post_data = response.request.post_data or ""
            if IG_PROFILE_DOC_ID not in post_data:
                return
            data = await response.json()
            parsed = parse_ig_user_profile(data)
            if parsed:
                profile_data = parsed
                data_received.set()
        except:
            pass

    tab.on("response", on_response)
    try:
        if stop_crawling:
            return
        await tab.goto(f"https://www.instagram.com/{username}/",
                       wait_until="domcontentloaded", timeout=15000)
        try:
            await asyncio.wait_for(data_received.wait(), timeout=5)
        except asyncio.TimeoutError:
            pass
    except Exception:
        pass
    finally:
        tab.remove_listener("response", on_response)

    if profile_data:
        users[user_id].update(profile_data)


async def _enrich_worker(tab, queue, users, counter, total_users, cooldown_event):
    consecutive_errors = 0
    max_consecutive_errors = 10

    while True:
        if stop_crawling:
            break

        await cooldown_event.wait()

        try:
            u = queue.get_nowait()
        except asyncio.QueueEmpty:
            break

        username = u.get("username", "")
        if username == "-":
            queue.task_done()
            continue
        user_id = u["user_id_str"]

        try:
            await _enrich_single_user(tab, username, user_id, users)
            counter["done"] += 1
            consecutive_errors = 0
            mc = users[user_id].get('media_count', '?')
            print(f"  [{counter['done']}/{total_users}] @{username} -> media: {mc}")
        except Exception as e:
            counter["done"] += 1
            consecutive_errors += 1
            print(f"  [{counter['done']}/{total_users}] @{username} -> error: {e}")

            if consecutive_errors >= max_consecutive_errors:
                print(f"\n  [STOP] {max_consecutive_errors} error berturut-turut, browser kemungkinan crash. Menghentikan worker.\n")
                break

        queue.task_done()

        if stop_crawling:
            break

        if counter["done"] % 20 == 0 and counter["done"] < total_users:
            cooldown_event.clear()
            pause = 5
            print(f"\n  [COOLDOWN] {counter['done']}/{total_users} selesai, istirahat {pause} detik...\n")
            for _ in range(pause * 2):
                if stop_crawling:
                    cooldown_event.set()
                    break
                await asyncio.sleep(0.5)
            cooldown_event.set()


async def _enrich_users_parallel(auth, users, user_list, n_tabs=2, headless=True):
    async with async_pw() as p:
        browser = await p.chromium.launch(headless=headless)
        context = await browser.new_context()

        with open(f"auth/{auth}.json", "r", encoding="utf-8") as f:
            cookies = json.load(f)
        for c in cookies:
            if 'sameSite' not in c or c['sameSite'] not in ['Strict', 'Lax', 'None']:
                c['sameSite'] = 'Lax'
        await context.add_cookies(cookies)

        tabs = []

        async def block_media(route):
            await route.abort()

        for _ in range(n_tabs):
            tab = await context.new_page()
            await tab.route("**/*.{png,jpg,jpeg,gif,webp,svg,mp4,webm,m3u8,ts}", block_media)
            await tab.route("**/instagram.*.fna.fbcdn.net/**", block_media)
            await tab.route("**/scontent.*.fna.fbcdn.net/**", block_media)
            tabs.append(tab)

        total_users = len(user_list)
        counter = {"done": 0}
        queue = asyncio.Queue()
        for u in user_list:
            queue.put_nowait(u)

        cooldown_event = asyncio.Event()
        cooldown_event.set()

        tasks = []
        for w in range(n_tabs):
            tasks.append(_enrich_worker(tabs[w], queue, users, counter, total_users, cooldown_event))

        await asyncio.gather(*tasks)

        try:
            for tab in tabs:
                await tab.close()
            await browser.close()
        except Exception:
            pass
