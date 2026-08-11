# main.py
from helpers.crawler_x import crawl_tweets
from helpers.crawler_x_single_post import crawl_single_post
from helpers.crawler_threads import crawl_threads
from helpers.saver import save_to_csv, save_users_to_csv, save_threads_to_csv, save_threads_users_to_csv
from version import banner
banner()

# ======================================================
# KONFIGURASI GLOBAL
# ======================================================
AUTH = ''
PROJECT_NAME = ''

# 'x', 'threads', 'both'
PLATFORM = 'threads'

# Rentang tanggal — OPSIONAL, digunakan oleh semua platform
# Format: 'YYYY-MM-DD' atau kosongkan '' jika tidak ingin filter tanggal
# X juga mendukung format waktu persis: 'YYYY-MM-DD_HH:MM:SS_WIB'
SINCE = ''
UNTIL = ''

LIMIT = 10
HEADLESS = False

if __name__ == "__main__":
    project = (PROJECT_NAME or 'default').strip()

    # ======================================================
    # CONFIG X / Twitter
    # ======================================================
    # Kata kunci — bisa kombinasikan dengan operator logika (AND, OR, exact phrase)
    x_keyword = '(((surpres OR "surat presiden") (kapolri OR "Kepala Kepolisian Negara Republik Indonesia")) OR ("pergantian kapolri" OR "penggantian kapolri" OR "pencopotan kapolri" OR "pemberhentian kapolri" OR "kapolri diganti" OR "kapolri di ganti" OR "kapolri dicopot" OR "kapolri diberhentikan" OR "kapolri di berhentikan"))'

    # Kata yang dikecualikan, diawali strip (-)
    x_excluded = '-tabrak -curanmor -pencurian -kecelakaan'

    # Filter bahasa — OPSIONAL ('lang:id', 'lang:en', atau '' untuk semua)
    x_lang = ''

    # ======================================================
    # CONFIG Threads
    # ======================================================
    # Kata kunci — hanya keyword sederhana belum support operator
    threads_keyword = 'kapolri'

    # ======================================================
    # EKSEKUSI
    # ======================================================

    if PLATFORM in ('x', 'both'):
        x_since = f'since:{SINCE}' if SINCE else ''
        x_until = f'until:{UNTIL}' if UNTIL else ''
        tweets, users = crawl_tweets(x_keyword, x_excluded, x_since, x_until, x_lang, AUTH, LIMIT, HEADLESS)
        save_to_csv(tweets, project, f"{project}-tweets.csv")
        save_users_to_csv(users, project, f"{project}-users.csv")

    if PLATFORM in ('threads', 'both'):
        posts, thread_users = crawl_threads(threads_keyword, AUTH, SINCE, UNTIL, LIMIT, HEADLESS)
        save_threads_to_csv(posts, project, f"{project}-threads-posts.csv")
        save_threads_users_to_csv(thread_users, project, f"{project}-threads-users.csv")

    # ============================================================
    # MODE KHUSUS: Crawling satu postingan spesifik (single post)
    # ============================================================
    # Untuk mengambil seluruh thread dari satu URL tweet/post.
    # Comment semua MODE di atas, lalu uncomment di bawah.

    # post_url = "https://x.com/hax0r26/status/1511812169960419328"
    # tweets, users = crawl_single_post(post_url, AUTH, HEADLESS)
    # save_to_csv(tweets, project, f"{project}-single-tweets.csv")
    # save_users_to_csv(users, project, f"{project}-single-users.csv")
