# helpers/crawler_threads.py
import json
import time
import asyncio
from playwright.sync_api import sync_playwright, TimeoutError as PlaywrightTimeoutError
from playwright.async_api import async_playwright as async_pw
from typing import List, Dict
from helpers.thread_types import parse_thread_post, parse_thread_user, parse_thread_user_profile

import msvcrt
import threading
import urllib.parse

stop_crawling = False

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


def crawl_threads(keyword: str, auth: str, after_date: str = '', before_date: str = '', limit: int = 50, headless: bool = True) -> tuple:
    """
    Crawling Threads posts berdasarkan keyword.
    Menggunakan Playwright untuk intercept GraphQL search response.

    Parameter:
        keyword (str): Kata kunci pencarian.
        auth (str): Nama file cookies di folder auth/ (tanpa .json).
        after_date (str): Tanggal mulai format YYYY-MM-DD (opsional).
        before_date (str): Tanggal akhir format YYYY-MM-DD (opsional).
        limit (int): Batas jumlah post.

    Return: (posts, users)
    """

    global stop_crawling
    stop_crawling = False

    threading.Thread(target=listen_for_enter, daemon=True).start()

    params = {'q': keyword, 'serp_type': 'default', 'filter': 'recent'}
    if after_date:
        params['after_date'] = after_date
    if before_date:
        params['before_date'] = before_date
    search_url = f"https://www.threads.com/search?{urllib.parse.urlencode(params)}"

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
                if "/graphql/query" not in url and "/api/graphql" not in url:
                    return

                data = response.json()
                search_results = data.get("data", {}).get("searchResults")
                if not search_results:
                    return

                edges = search_results.get("edges", [])
                for edge in edges:
                    node = edge.get("node", {})
                    thread = node.get("thread", {})
                    thread_id = thread.get("id")
                    thread_items = thread.get("thread_items", [])

                    for item in thread_items:
                        post = item.get("post", {})
                        if not post:
                            continue

                        post_id = str(post.get("pk", ""))
                        if not post_id or post_id in post_index:
                            continue

                        parsed_post = parse_thread_post(post, thread_id)
                        parsed_user = parse_thread_user(post)

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
        print(f"\n[OK] Crawling Threads: {search_url}")

        try:
            page.goto(search_url, wait_until="domcontentloaded", timeout=60000)
            page.wait_for_timeout(5000)
        except Exception as e:
            print("[WARNING] ", e)

        if len(posts) > 0:
            print(f"[OK] Initial load: {len(posts)} post tertangkap")
        else:
            print(f"[WARNING] Initial load: 0 post tertangkap")

        # === LOOP utama scrolling ===
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

                if new_posts_since_last_cooldown >= 400:
                    print("\n[COOLDOWN] Istirahat sejenak, cooldown 10 detik\n")
                    time.sleep(10)
                    new_posts_since_last_cooldown = 0

        finally:
            page.close()
            browser.close()

    # === Phase 2: User enrichment dengan async Playwright (1 tab) ===
    user_list = list(users.values())
    total_users = len(user_list)
    if total_users > 0 and not stop_crawling:
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
    await tab.goto(f"https://www.threads.com/@{username}",
                   wait_until="domcontentloaded", timeout=15000)
    html = await tab.content()
    profile_data = parse_thread_user_profile(html)
    if profile_data:
        users[user_id].update(profile_data)


async def _enrich_worker(tab, queue, users, counter, total_users, cooldown_event):
    while True:
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
            fc = users[user_id].get('follower_count', '?')
            print(f"  [{counter['done']}/{total_users}] @{username} -> followers: {fc}")
        except Exception as e:
            counter["done"] += 1
            print(f"  [{counter['done']}/{total_users}] @{username} -> error: {e}")

        queue.task_done()

        if counter["done"] % 20 == 0 and counter["done"] < total_users:
            cooldown_event.clear()
            pause = 5
            print(f"\n  [COOLDOWN] {counter['done']}/{total_users} selesai, istirahat {pause} detik...\n")
            await asyncio.sleep(pause)
            cooldown_event.set()


async def _enrich_users_parallel(auth, users, user_list, n_tabs=3, headless=True):
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

        for tab in tabs:
            await tab.close()
        await browser.close()
