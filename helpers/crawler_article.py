# helpers/crawler_article.py
import time
import asyncio
from datetime import datetime
import random
import urllib.parse
from pathlib import Path
from playwright.sync_api import sync_playwright
from playwright.async_api import async_playwright as async_pw
from typing import List, Dict
from helpers.parsers.article_extractor import extract_article

import msvcrt
import threading

CHROME_PROFILE = Path(__file__).resolve().parent.parent / "__chrome_profile"
EXTENSION_DIR = Path(__file__).resolve().parent.parent / "__extensions" / "adguard"

stop_crawling = False


def _fmt_until(date_str):
    try:
        dt = datetime.strptime(date_str, "%a %b %d %H:%M:%S %z %Y")
        return dt.strftime("%Y-%m-%d_%H:%M:%S_WIB")
    except Exception:
        return date_str


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


SERP_EXTRACT_JS = """
(() => {
    const results = [];
    const container = document.querySelector('#search') || document.querySelector('#rso') || document.body;
    const links = container.querySelectorAll('a[href]');
    const seen = new Set();
    for (const a of links) {
        let href = a.href;
        if (!href || !href.startsWith('http')) continue;
        try {
            const u = new URL(href);
            if (u.hostname.includes('google.com') || u.hostname.includes('google.co.')) continue;
            if (u.hostname.includes('youtube.com') || u.hostname.includes('youtu.be')) continue;
            if (u.hostname.includes('accounts.google') || u.hostname.includes('support.google')) continue;
        } catch(e) { continue; }
        if (seen.has(href)) continue;
        seen.add(href);
        const heading = a.querySelector('[role="heading"]');
        const title = heading ? heading.textContent.trim() : '';
        if (!title || title.length < 5) continue;
        results.push({ url: href, title: title });
    }
    return results;
})()
"""


def crawl_articles(keyword: str, since: str = '', until: str = '', limit: int = 50, headless: bool = True, sort: str = 'recent') -> List[Dict]:
    """
    Crawling artikel berita dari Google Search News tab.

    Fase 1: Mengumpulkan URL artikel dari SERP Google News (Chrome profile).
    Fase 2: Mengekstrak metadata dan konten dari setiap URL.

    Parameter:
        keyword (str): Kata kunci pencarian (mendukung operator Google).
        since (str): Tanggal mulai format YYYY-MM-DD (opsional).
        until (str): Tanggal akhir format YYYY-MM-DD (opsional).
        limit (int): Batas jumlah artikel.
        headless (bool): Jalankan browser tanpa tampilan.
        sort (str): Urutan hasil: 'recent' (terbaru) atau 'top' (relevansi).

    Return: list of article dicts
    """
    global stop_crawling
    stop_crawling = False
    threading.Thread(target=listen_for_enter, daemon=True).start()

    if not CHROME_PROFILE.exists() or not any(CHROME_PROFILE.iterdir()):
        print(f"\n[ERROR] Chrome profile belum di-setup: {CHROME_PROFILE}")
        print("[INFO] Jalankan: npm run setup_browser")
        return []

    query = keyword

    # === Phase 1: SERP Collection ===
    print(f"\n{'=' * 60}")
    print(f"  [PHASE 1] Mengumpulkan URL artikel dari Google News SERP")
    print(f"{'=' * 60}")

    serp_results = []
    seen_urls = set()
    page_num = 0
    max_pages = (limit // 10) + 5

    with sync_playwright() as p:
        context = p.chromium.launch_persistent_context(
            user_data_dir=str(CHROME_PROFILE),
            headless=headless,
            args=[
                "--no-first-run",
                "--no-default-browser-check",
                "--disable-blink-features=AutomationControlled",
                f"--disable-extensions-except={EXTENSION_DIR}",
                f"--load-extension={EXTENSION_DIR}",
            ],
        )

        page = context.new_page()

        while len(serp_results) < limit and page_num < max_pages and not stop_crawling:
            start = page_num * 10
            encoded = urllib.parse.quote(query)

            tbs_parts = []
            if sort == 'recent':
                tbs_parts.append("sbd:1")
            if since or until:
                tbs_parts.append("cdr:1")
                if since:
                    tbs_parts.append(f"cd_min:{since.split('_')[0]}")
                if until:
                    tbs_parts.append(f"cd_max:{until.split('_')[0]}")

            tbs_param = f"&tbs={','.join(tbs_parts)}" if tbs_parts else ""
            search_url = f"https://www.google.com/search?q={encoded}&tbm=nws{tbs_param}&start={start}"

            if page_num == 0:
                print(f"\n[OK] Search: {query}")
                print(f"[OK] URL: {search_url}")

            try:
                page.goto(search_url, wait_until="domcontentloaded", timeout=30000)
                page.wait_for_timeout(2000)
            except Exception as e:
                print(f"[WARNING] {e}")
                break

            try:
                new_results = page.evaluate(SERP_EXTRACT_JS)
            except Exception:
                new_results = []

            if not new_results:
                if page_num == 0:
                    print(f"[WARNING] Tidak ada hasil ditemukan untuk keyword ini.")
                else:
                    print(f"[INFO] Tidak ada hasil di page {page_num + 1}. SERP selesai.")
                break

            added = 0
            for r in new_results:
                url = r["url"]
                if url not in seen_urls:
                    seen_urls.add(url)
                    serp_results.append({
                        "url": url,
                        "serp_title": r["title"],
                        "serp_position": len(serp_results) + 1,
                    })
                    added += 1

            print(f"  Page {page_num + 1}: +{added} artikel | Total: {len(serp_results)}")
            page_num += 1

            if len(serp_results) >= limit:
                break

            delay = random.randint(2000, 4000)
            page.wait_for_timeout(delay)

        page.close()
        context.close()

    serp_results = serp_results[:limit]
    print(f"\n[OK] SERP selesai: {len(serp_results)} URL artikel terkumpul")

    if not serp_results or stop_crawling:
        return []

    # === Phase 2: Article Extraction ===
    print(f"\n{'=' * 60}")
    print(f"  [PHASE 2] Mengekstrak konten dari {len(serp_results)} artikel")
    print(f"{'=' * 60}")

    stop_crawling = False
    threading.Thread(target=listen_for_enter, daemon=True).start()

    n_tabs = min(3, len(serp_results))
    articles = asyncio.run(_extract_articles_batch(serp_results, n_tabs, headless))

    print(f"\n[OK] Extraction selesai: {len(articles)} artikel berhasil diekstrak")

    if articles:
        valid_dates = []
        for a in articles:
            d = a.get("published_at", "")
            if d and d != "-":
                try:
                    valid_dates.append(datetime.strptime(d, "%a %b %d %H:%M:%S %z %Y"))
                except Exception:
                    pass
        if valid_dates:
            oldest = min(valid_dates)
            last = oldest.strftime("%a %b %d %H:%M:%S %z %Y")
            print(f"[INFO] Artikel terakhir terdeteksi pada: {last} -> UNTIL: {_fmt_until(last)}")

    return articles


CHALLENGE_MARKERS = ["just a moment", "checking your browser", "attention required", "access denied", "please wait", "verify you are human", "bot verification"]


def _is_challenge_page(html):
    lower = html[:3000].lower()
    return any(m in lower for m in CHALLENGE_MARKERS)


async def _wait_for_challenge(tab, max_wait=15):
    for _ in range(max_wait):
        await asyncio.sleep(1)
        html = await tab.content()
        if not _is_challenge_page(html):
            return html
    return await tab.content()


async def _extract_single_article(tab, article_data, articles, counter, total):
    if stop_crawling:
        return
    url = article_data["url"]
    try:
        await tab.goto(url, wait_until="domcontentloaded", timeout=30000)
        await asyncio.sleep(1.5)
        try:
            html = await tab.content()
        except Exception:
            await tab.wait_for_load_state("domcontentloaded", timeout=10000)
            html = await tab.content()

        if _is_challenge_page(html):
            html = await _wait_for_challenge(tab)

        if _is_challenge_page(html):
            counter["done"] += 1
            print(f"  [{counter['done']}/{total}] {url[:50]} -> BLOCKED (challenge page)")
            return

        extracted = extract_article(html, url)
        extracted["serp_position"] = article_data.get("serp_position", 0)

        if extracted["title"] == "-" and article_data.get("serp_title"):
            extracted["title"] = article_data["serp_title"]

        blocked_titles = ["bot verification", "access denied", "just a moment", "attention required"]
        if extracted["title"].lower().strip() in blocked_titles:
            counter["done"] += 1
            print(f"  [{counter['done']}/{total}] {url[:50]} -> BLOCKED ({extracted['title']})")
            return

        articles.append(extracted)
        counter["done"] += 1
        title_preview = extracted["title"][:50]
        print(f"  [{counter['done']}/{total}] {extracted['source']} -> {title_preview}")
    except Exception as e:
        counter["done"] += 1
        err_msg = str(e)[:60]
        print(f"  [{counter['done']}/{total}] {url[:50]} -> error: {err_msg}")


async def _extract_worker(tab, queue, articles, counter, total, cooldown_event):
    consecutive_errors = 0
    max_consecutive_errors = 10

    while True:
        if stop_crawling:
            break

        await cooldown_event.wait()

        try:
            article_data = queue.get_nowait()
        except asyncio.QueueEmpty:
            break

        try:
            await _extract_single_article(tab, article_data, articles, counter, total)
            consecutive_errors = 0
        except Exception as e:
            counter["done"] += 1
            consecutive_errors += 1
            print(f"  [{counter['done']}/{total}] error: {e}")

            if consecutive_errors >= max_consecutive_errors:
                print(f"\n  [STOP] {max_consecutive_errors} error berturut-turut. Menghentikan worker.\n")
                break

        queue.task_done()

        if stop_crawling:
            break

        if counter["done"] % 20 == 0 and counter["done"] < total:
            cooldown_event.clear()
            pause = 3
            print(f"\n  [COOLDOWN] {counter['done']}/{total} selesai, istirahat {pause} detik...\n")
            for _ in range(pause * 2):
                if stop_crawling:
                    cooldown_event.set()
                    break
                await asyncio.sleep(0.5)
            cooldown_event.set()


async def _extract_articles_batch(serp_results, n_tabs=3, headless=True):
    articles = []

    async with async_pw() as p:
        context = await p.chromium.launch_persistent_context(
            user_data_dir=str(CHROME_PROFILE),
            headless=headless,
            args=[
                "--no-first-run",
                "--no-default-browser-check",
                "--disable-blink-features=AutomationControlled",
                f"--disable-extensions-except={EXTENSION_DIR}",
                f"--load-extension={EXTENSION_DIR}",
            ],
        )

        async def block_heavy(route):
            if route.request.resource_type in ("image", "media", "font", "stylesheet"):
                await route.abort()
            else:
                await route.continue_()

        tabs = []
        for _ in range(n_tabs):
            tab = await context.new_page()
            await tab.route("**/*", block_heavy)
            tabs.append(tab)

        total = len(serp_results)
        counter = {"done": 0}
        queue = asyncio.Queue()
        for item in serp_results:
            queue.put_nowait(item)

        cooldown_event = asyncio.Event()
        cooldown_event.set()

        tasks = []
        for w in range(n_tabs):
            tasks.append(_extract_worker(tabs[w], queue, articles, counter, total, cooldown_event))

        await asyncio.gather(*tasks)

        try:
            for tab in tabs:
                await tab.close()
            await context.close()
        except Exception:
            pass

    return articles
