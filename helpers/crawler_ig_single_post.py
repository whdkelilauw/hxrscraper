# helpers/crawler_ig_single_post.py
import json
import re
import time
import asyncio
from playwright.sync_api import sync_playwright
from typing import List, Dict
from helpers.ig_types import parse_ig_comment, parse_ig_comment_user, extract_ssr_comments
from helpers.crawler_ig import _enrich_users_parallel

import msvcrt
import threading

stop_crawling = False

COMMENTS_DOC_ID = "28082902984733691"
REPLIES_DOC_ID = "27823744063932558"
SHOW_MORE_REPLIES_DOC_ID = "27229753410037873"
COMMENTS_PANEL_SELECTOR = '.x5yr21d.xw2csxc.x1odjw0f.x1n2onr6'


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


def crawl_ig_single_post(post_url: str, auth: str, headless: bool = True, enrichment: bool = True) -> tuple:
    """
    Crawling komentar dari satu post Instagram.
    Mengambil komentar awal (SSR), lazy load (scroll), dan balasan (click).

    Parameter:
        post_url (str): URL post IG (e.g. https://www.instagram.com/p/SHORTCODE/)
        auth (str): Nama file cookies di folder auth/ (tanpa .json).
        headless (bool): Jalankan browser tanpa tampilan.

    Return: (comments, users)
    """
    global stop_crawling
    stop_crawling = False
    threading.Thread(target=listen_for_enter, daemon=True).start()

    comments: List[Dict] = []
    users: dict = {}
    comment_index = {}
    scroll_pause = 2
    scrolling_number = 0
    timeout_limit = 10
    timeout_count = 0
    max_timeout = 3
    comments_since_cooldown = 0

    def add_comment(node):
        nonlocal comments_since_cooldown
        comment_id = str(node.get("pk", ""))
        if not comment_id or comment_id in comment_index:
            return
        parsed = parse_ig_comment(node)
        parsed_user = parse_ig_comment_user(node)
        comment_index[comment_id] = len(comments)
        comments.append(parsed)
        comments_since_cooldown += 1
        user_id = parsed_user.get("user_id_str", "")
        if user_id != "-" and user_id not in users:
            users[user_id] = parsed_user

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
            try:
                if stop_crawling:
                    return
                if "graphql" not in response.url:
                    return
                post_data = response.request.post_data or ""
                if COMMENTS_DOC_ID not in post_data and REPLIES_DOC_ID not in post_data and SHOW_MORE_REPLIES_DOC_ID not in post_data:
                    return

                data = response.json()

                connection = data.get("data", {}).get(
                    "xdt_api__v1__media__media_id__comments__connection")
                if connection:
                    for edge in connection.get("edges", []):
                        node = edge.get("node", {})
                        if node:
                            add_comment(node)

                child_connection = data.get("data", {}).get(
                    "xdt_api__v1__media__media_id__comments__parent_comment_id__child_comments__connection")
                if child_connection:
                    for edge in child_connection.get("edges", []):
                        node = edge.get("node", {})
                        if node:
                            add_comment(node)

            except Exception:
                pass

        page.on("response", handle_response)
        print(f"\n[OK] Crawling IG comments: {post_url}")

        try:
            page.goto(post_url, wait_until="domcontentloaded", timeout=60000)
            page.wait_for_timeout(5000)
        except Exception as e:
            print(f"[WARNING] {e}")

        # === Fase 1: Parse komentar awal dari SSR (page source) ===
        html = page.content()
        ssr_nodes = extract_ssr_comments(html)
        for node in ssr_nodes:
            add_comment(node)

        print(f"[OK] SSR: {len(comments)} komentar awal tertangkap")

        # === Fase 2: Scroll panel komentar untuk lazy load ===
        try:
            while timeout_count < max_timeout and not stop_crawling:
                scrolling_number += 1
                comments_before = len(comments)

                page.evaluate(f"""
                    const panel = document.querySelector('{COMMENTS_PANEL_SELECTOR}');
                    if (panel) panel.scrollBy(0, 1000);
                """)
                page.wait_for_timeout(scroll_pause * 1000)

                comments_added = len(comments) - comments_before

                if stop_crawling:
                    break

                if comments_added > 0:
                    print(f"-- Scrolling... [{scrolling_number}/{timeout_limit}] (+{comments_added}) | Total: {len(comments)}")
                    scrolling_number = 0
                    timeout_count = 0
                    if comments_since_cooldown >= 200:
                        print("\n[COOLDOWN] Istirahat sejenak, cooldown 10 detik\n")
                        page.wait_for_timeout(10000)
                        comments_since_cooldown = 0
                else:
                    print(f"-- Scrolling... [{scrolling_number}/{timeout_limit}] (+0) | Total: {len(comments)}")
                    if scrolling_number >= timeout_limit:
                        timeout_count += 1
                        scrolling_number = 0
                        print(f"[WARNING] Timeout ({timeout_count}/{max_timeout})")
                        if timeout_count >= max_timeout:
                            break

        except Exception:
            pass

        # === Fase 3: Memuat balasan komentar ===
        if not stop_crawling:
            expected_replies = sum(c.get("reply_count", 0) for c in comments if c["relation_type"] == "comment")
            collected_replies = len([c for c in comments if c["relation_type"] == "reply"])

            if expected_replies > 0:
                print(f"\n[OK] Memuat balasan komentar ({collected_replies}/{expected_replies})...")

                page.evaluate(f"""
                    const panel = document.querySelector('{COMMENTS_PANEL_SELECTOR}');
                    if (panel) panel.scrollTop = 0;
                """)
                page.wait_for_timeout(1000)

                reply_pattern = re.compile(r'(View all|Lihat semua) \d+ (replies|reply|balasan)', re.IGNORECASE)
                reply_exact = re.compile(r'^(View all|Lihat semua) \d+ (replies|reply|balasan)$', re.IGNORECASE)
                more_pattern = re.compile(r'(Show more replies|Tampilkan lebih banyak balasan)', re.IGNORECASE)
                more_exact = re.compile(r'^(Show more replies|Tampilkan lebih banyak balasan)$', re.IGNORECASE)
                clicked = 0
                max_clicks = 300
                no_progress = 0
                max_no_progress = 5
                scroll_attempts = 0

                def find_button(pattern, exact):
                    buttons = page.get_by_text(pattern)
                    for i in range(min(buttons.count(), 10)):
                        candidate = buttons.nth(i)
                        candidate_text = (candidate.inner_text() or "").strip()
                        if exact.match(candidate_text):
                            return candidate, candidate_text
                    return None, ""

                def click_button(btn, btn_text):
                    nonlocal clicked, no_progress, collected_replies, comments_since_cooldown
                    comments_before = len(comments)
                    try:
                        page.evaluate(f"""(el) => {{
                            const panel = document.querySelector('{COMMENTS_PANEL_SELECTOR}');
                            if (panel && el) {{
                                const panelRect = panel.getBoundingClientRect();
                                const elRect = el.getBoundingClientRect();
                                panel.scrollTo({{
                                    top: panel.scrollTop + elRect.top - panelRect.top - panelRect.height / 2,
                                    behavior: 'instant'
                                }});
                            }}
                        }}""", btn.element_handle())
                        page.wait_for_timeout(500)
                        btn.click()
                        page.wait_for_timeout(2000)
                        clicked += 1
                        added = len(comments) - comments_before
                        collected_replies = len([c for c in comments if c["relation_type"] == "reply"])
                        if added > 0:
                            print(f"  [{clicked}] +{added} balasan ({collected_replies}/{expected_replies}) | Total: {len(comments)}")
                            no_progress = 0
                            if comments_since_cooldown >= 200:
                                print("\n[COOLDOWN] Istirahat sejenak, cooldown 10 detik\n")
                                page.wait_for_timeout(10000)
                                comments_since_cooldown = 0
                            return True
                        else:
                            print(f"  [{clicked}] +0 ({collected_replies}/{expected_replies}) | btn: '{btn_text[:60]}'")
                            no_progress += 1
                            return False
                    except Exception:
                        no_progress += 1
                        return False

                while clicked < max_clicks and no_progress < max_no_progress and not stop_crawling:
                    if collected_replies >= expected_replies:
                        break

                    btn, btn_text = find_button(reply_pattern, reply_exact)

                    if not btn:
                        page.evaluate(f"""
                            const panel = document.querySelector('{COMMENTS_PANEL_SELECTOR}');
                            if (panel) panel.scrollBy(0, 1500);
                        """)
                        page.wait_for_timeout(1000)
                        scroll_attempts += 1
                        if scroll_attempts >= 10:
                            break
                        continue

                    scroll_attempts = 0
                    click_button(btn, btn_text)

                    while clicked < max_clicks and no_progress < max_no_progress and not stop_crawling:
                        if collected_replies >= expected_replies:
                            break
                        more_btn, more_text = find_button(more_pattern, more_exact)
                        if not more_btn:
                            break
                        click_button(more_btn, more_text)

                print(f"  Balasan tertangkap: {collected_replies}/{expected_replies}")
            else:
                print(f"\n[OK] Tidak ada balasan komentar untuk dimuat")

        page.close()
        browser.close()

    total_comments = len([c for c in comments if c["relation_type"] == "comment"])
    total_replies = len([c for c in comments if c["relation_type"] == "reply"])
    print(f"\n[OK] Komentar: {len(comments)} total ({total_comments} komentar, {total_replies} balasan), {len(users)} users")

    # === Fase 4: User enrichment via GraphQL intercept ===
    user_list = list(users.values())
    total_users = len(user_list)
    if total_users > 0 and enrichment:
        import helpers.crawler_ig as _ig_mod
        _ig_mod.stop_crawling = False
        threading.Thread(target=_ig_mod.listen_for_enter, daemon=True).start()
        n_tabs = min(2, total_users)
        print(f"\n[OK] Enriching {total_users} users ({n_tabs} tab)...")
        asyncio.run(_enrich_users_parallel(auth, users, user_list, n_tabs, headless))

    return comments, list(users.values())
