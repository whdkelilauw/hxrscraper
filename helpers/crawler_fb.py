# helpers/crawler_fb.py
import json
import time
import asyncio
from playwright.sync_api import sync_playwright
from playwright.async_api import async_playwright as async_pw
from typing import List, Dict
from helpers.fb_types import parse_fb_post, parse_fb_user, parse_fb_user_profile

import msvcrt
import threading
import urllib.parse
import base64

stop_crawling = False


def _build_fb_filters(year: str = '') -> str:
    _d = lambda obj: json.dumps(obj, separators=(',', ':'))
    filters = {
        'recent_posts:0': _d({"name": "recent_posts", "args": ""})
    }
    if year:
        filters['rp_creation_time:0'] = _d({
            "name": "creation_time",
            "args": _d({
                "start_year": year,
                "start_month": f"{year}-1",
                "end_year": year,
                "end_month": f"{year}-12",
                "start_day": f"{year}-1-1",
                "end_day": f"{year}-12-31",
            })
        })
    return base64.b64encode(_d(filters).encode()).decode()


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


def crawl_fb(keyword: str, auth: str, year: str = '', limit: int = 50, headless: bool = True, enrichment: bool = True) -> tuple:
    global stop_crawling
    stop_crawling = False

    threading.Thread(target=listen_for_enter, daemon=True).start()

    encoded_kw = urllib.parse.quote(keyword)
    fb_filters = _build_fb_filters(year)
    search_url = f"https://www.facebook.com/search/top?q={encoded_kw}&filters={fb_filters}"

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
            if c.get('sameSite') == 'no_restriction':
                c['sameSite'] = 'None'
            elif 'sameSite' not in c or c['sameSite'] not in ['Strict', 'Lax', 'None']:
                c['sameSite'] = 'Lax'

        context.add_cookies(cookies)
        page = context.new_page()

        page.route("**/*.{png,jpg,jpeg,gif,webp,svg,mp4,webm,m3u8,ts}", lambda route: route.abort())
        page.route("**/scontent.*.fna.fbcdn.net/**", lambda route: route.abort())
        page.route("**/video.*.fna.fbcdn.net/**", lambda route: route.abort())

        def _process_serp(serp):
            nonlocal posts, users, new_posts_since_last_scroll, new_posts_since_last_cooldown
            results = serp.get("results", {})
            edges = results.get("edges", [])
            for edge in edges:
                rs = edge.get("rendering_strategy", {})
                if not rs or rs.get("__typename") != "SearchRichPostRenderingStrategy":
                    continue
                vm = rs.get("view_model", {})
                cm = vm.get("click_model", {})
                story = cm.get("story", {})
                if not story:
                    continue
                post_id = str(story.get("post_id", ""))
                if not post_id or post_id in post_index:
                    continue
                parsed_post = parse_fb_post(story)
                parsed_user = parse_fb_user(story)
                post_index[post_id] = len(posts)
                posts.append(parsed_post)
                user_id = parsed_user.get("user_id_str", "")
                if user_id != "-" and user_id not in users:
                    users[user_id] = parsed_user
                new_posts_since_last_scroll += 1
                new_posts_since_last_cooldown += 1

        def _find_serp_recursive(obj):
            """Recursively search for serpResponse in nested data."""
            if isinstance(obj, dict):
                if "serpResponse" in obj:
                    _process_serp(obj["serpResponse"])
                    return
                serp = obj.get("data", {}).get("serpResponse") if isinstance(obj.get("data"), dict) else None
                if serp:
                    _process_serp(serp)
                    return
                for v in obj.values():
                    _find_serp_recursive(v)
            elif isinstance(obj, list):
                for item in obj:
                    _find_serp_recursive(item)

        initial_html_holder = []

        def handle_response(response):
            try:
                if stop_crawling:
                    return

                if response.request.resource_type == "document":
                    try:
                        initial_html_holder.append(response.text())
                    except Exception:
                        pass
                    return

                url = response.url
                if "/api/graphql" not in url:
                    return

                body = response.text()
                if body.startswith("for (;;);"):
                    body = body[len("for (;;);"):]

                for line in body.split("\n"):
                    line = line.strip()
                    if not line:
                        continue
                    try:
                        data = json.loads(line)
                        _find_serp_recursive(data)
                    except (json.JSONDecodeError, ValueError):
                        continue

            except Exception:
                pass

        page.on("response", handle_response)
        print(f"\n[OK] Crawling Facebook: {search_url}")

        try:
            page.goto(search_url, wait_until="domcontentloaded", timeout=60000)
            page.wait_for_timeout(5000)
        except Exception as e:
            print("[WARNING] ", e)

        # Parse SSR dari raw HTML (sebelum JS hapus <script data-sjs>)
        graphql_count = len(posts)
        raw_html = initial_html_holder[0] if initial_html_holder else ""
        if raw_html:
            try:
                _parse_initial_posts(raw_html, posts, users, post_index)
            except Exception:
                pass
        if len(posts) == graphql_count:
            try:
                _parse_initial_posts(page.content(), posts, users, post_index)
            except Exception:
                pass
        ssr_extra = len(posts) - graphql_count

        if len(posts) > 0:
            msg = f"[OK] Initial load: {len(posts)} post tertangkap"
            if ssr_extra > 0:
                msg += f" (GraphQL: {graphql_count}, SSR: +{ssr_extra})"
            print(msg)
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

    # === Phase 2: User enrichment ===
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


def _parse_initial_posts(html, posts, users, post_index):
    """Fallback: parse posts from Facebook page source embedded JSON."""
    import re

    for m in re.finditer(r'<script[^>]*data-sjs[^>]*>(.*?)</script>', html, re.DOTALL):
        script_content = m.group(1)
        if '"serpResponse"' not in script_content:
            continue
        try:
            data = json.loads(script_content)
            _extract_from_require(data, posts, users, post_index)
            break
        except Exception:
            continue


def _extract_from_require(data, posts, users, post_index):
    """Recursively find serpResponse edges in ScheduledServerJS require structure."""
    if isinstance(data, dict):
        if "serpResponse" in data:
            serp = data["serpResponse"]
            results = serp.get("results", {})
            edges = results.get("edges", [])
            for edge in edges:
                rs = edge.get("rendering_strategy", {})
                if not rs or rs.get("__typename") != "SearchRichPostRenderingStrategy":
                    continue
                vm = rs.get("view_model", {})
                cm = vm.get("click_model", {})
                story = cm.get("story", {})
                if not story:
                    continue
                post_id = str(story.get("post_id", ""))
                if not post_id or post_id in post_index:
                    continue
                parsed_post = parse_fb_post(story)
                parsed_user = parse_fb_user(story)
                post_index[post_id] = len(posts)
                posts.append(parsed_post)
                user_id = parsed_user.get("user_id_str", "")
                if user_id != "-" and user_id not in users:
                    users[user_id] = parsed_user
            return
        for v in data.values():
            _extract_from_require(v, posts, users, post_index)
    elif isinstance(data, list):
        for item in data:
            _extract_from_require(item, posts, users, post_index)


async def _enrich_single_user(tab, username, user_id, users):
    if stop_crawling:
        return
    raw_html = {}
    data_received = asyncio.Event()

    async def on_response(response):
        try:
            if response.request.resource_type == "document":
                body = await response.text()
                if "profile_social_context" in body or "profilePicLarge" in body:
                    raw_html["doc"] = body
                    data_received.set()
        except Exception:
            pass

    tab.on("response", on_response)
    try:
        if "profile.php" in users[user_id].get("account_url", "") or username.isdigit():
            url = f"https://www.facebook.com/profile.php?id={username}"
        else:
            url = f"https://www.facebook.com/{username}"
        await tab.goto(url, wait_until="domcontentloaded", timeout=20000)
        try:
            await asyncio.wait_for(data_received.wait(), timeout=5)
        except asyncio.TimeoutError:
            pass
    except Exception:
        pass
    finally:
        tab.remove_listener("response", on_response)

    if stop_crawling:
        return

    html = raw_html.get("doc", "")
    if not html:
        try:
            html = await tab.content()
        except Exception:
            return

    profile_data = parse_fb_user_profile(html)
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
            fc = users[user_id].get('follower_count', '?')
            print(f"  [{counter['done']}/{total_users}] {users[user_id].get('name', username)} -> followers: {fc}")
        except Exception as e:
            counter["done"] += 1
            consecutive_errors += 1
            print(f"  [{counter['done']}/{total_users}] {username} -> error: {e}")

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
            if c.get('sameSite') == 'no_restriction':
                c['sameSite'] = 'None'
            elif 'sameSite' not in c or c['sameSite'] not in ['Strict', 'Lax', 'None']:
                c['sameSite'] = 'Lax'
        await context.add_cookies(cookies)

        tabs = []

        async def block_media(route):
            url = route.request.url
            if "facebook.com/" in url and ("/profile" in url or "/people/" in url):
                await route.continue_()
                return
            await route.abort()

        for _ in range(n_tabs):
            tab = await context.new_page()
            await tab.route("**/*.{png,jpg,jpeg,gif,webp,svg,mp4,webm,m3u8,ts}", block_media)
            await tab.route("**/scontent.*.fna.fbcdn.net/**", block_media)
            await tab.route("**/video.*.fna.fbcdn.net/**", block_media)
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
