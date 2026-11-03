# main.py
from helpers.crawler_x import crawl_tweets
from helpers.crawler_x_single_post import crawl_single_post
from helpers.crawler_threads import crawl_threads
from helpers.crawler_ig import crawl_ig
from helpers.crawler_ig_single_post import crawl_ig_single_post
from helpers.crawler_fb import crawl_fb
from helpers.crawler_article import crawl_articles
from helpers.saver import save_to_csv, save_users_to_csv, save_threads_to_csv, save_threads_users_to_csv, save_ig_to_csv, save_ig_users_to_csv, save_ig_comments_to_csv, save_ig_comment_users_to_csv, save_fb_to_csv, save_fb_users_to_csv, save_articles_to_csv
from version import banner, parse_platform, parse_mode
banner()

# ======================================================
# KONFIGURASI GLOBAL
# ======================================================
# Nama file cookies di folder auth/ (tanpa .json)
# Contoh: AUTH = 'akun1' → akan membaca auth/akun1.json
AUTH = 'ali'
PROJECT_NAME = 'pilkada_tidak_langsung'

# Mode: 'search' (crawl berdasarkan keyword) atau 'single' (crawl satu post)
MODE = 'search'
# Urutan hasil pencarian: 'recent' (terbaru) atau 'top' (teratas)
# Berlaku untuk X, Threads, dan Facebook. Tidak berlaku untuk IG.
SORT = 'recent'

# Kombinasi bebas, pisahkan dengan koma: 'x', 'threads', 'ig', 'fb', 'article', 'all'
# Contoh: 'ig', 'x, threads', 'ig, fb', 'article', 'all'
# Catatan: 'all' mencakup semua platform termasuk article
# Untuk mode single: pilih satu platform saja ('x' atau 'ig')
PLATFORM = 'article'

# Rentang tanggal — OPSIONAL, mode search (X, Threads, dan Article. IG tidak support)
# Format: 'YYYY-MM-DD' atau kosongkan '' jika tidak ingin filter tanggal
# X juga mendukung format waktu persis: 'YYYY-MM-DD_HH:MM:SS_WIB'
SINCE = ''
UNTIL = ''

LIMIT = 50000
HEADLESS = False
ENRICHMENT = True

if __name__ == "__main__":
    project = (PROJECT_NAME or 'default').strip()
    platforms = parse_platform(PLATFORM)
    mode = parse_mode(MODE, platforms)

    # ======================================================
    # CONFIG X / Twitter
    # ======================================================
    # Kata kunci — bisa kombinasikan dengan operator logika (AND, OR, exact phrase)
    x_keyword = '(pilkada OR "pemilihan kepala daerah") (tidak OR tak) langsung'

    # Kata yang dikecualikan, diawali strip (-)
    x_excluded = '-vcs -lesbi -"prank ojol"'

    # Sertakan retweet dalam hasil pencarian (True/False)
    x_retweets = True

    # Filter bahasa — OPSIONAL ('lang:id', 'lang:en', atau '' untuk semua)
    x_lang = ''

    # URL single post X
    x_post_url = ""

    # ======================================================
    # CONFIG Threads
    # ======================================================
    # Kata kunci — hanya keyword sederhana belum support operator
    threads_keyword = 'pilkada tidak langsung'
    # pilkada tidak langsung
    # pilkada tak langsung
    # pemilihan kepala daerah tidak langsung
    # pemilihan kepala daerah tak langsung

    # ======================================================
    # CONFIG Instagram
    # ======================================================
    # Kata kunci — keyword sederhana
    ig_keyword = 'pilkada tidak langsung'
    # pilkada tidak langsung
    # pilkada tak langsung
    # pemilihan kepala daerah tidak langsung
    # pemilihan kepala daerah tak langsung

    # URL single post IG
    ig_post_url = ""

    # ======================================================
    # CONFIG Facebook
    # ======================================================
    # Kata kunci — keyword sederhana
    fb_keyword = ''

    # Filter tahun — OPSIONAL, kosongkan '' jika tidak ingin filter tahun
    fb_year = ''

    # ======================================================
    # CONFIG Article (Google News)
    # ======================================================
    # Membutuhkan Chrome profile — jalankan `npm run setup_browser` terlebih dahulu.
    # Jumlah halaman SERP yang tersedia bergantung pada akun Google yang digunakan.
    # Jika hasil terbatas, coba setup ulang dengan akun Google berbeda.
    # Kata kunci — bisa kombinasikan dengan operator ("exact phrase", site:, intitle:, -exclude, | (OR))
    article_keyword = '("pemilihan kepala daerah" | pilkada) (tidak | tak) langsung'

    # ======================================================
    # EKSEKUSI
    # ======================================================

    if mode == 'search':
        if 'x' in platforms or 'all' in platforms:
            x_since = f'since:{SINCE}' if SINCE else ''
            x_until = f'until:{UNTIL}' if UNTIL else ''
            tweets, users = crawl_tweets(x_keyword, x_excluded, x_since, x_until, x_lang, AUTH, LIMIT, HEADLESS, SORT, x_retweets)
            save_to_csv(tweets, project, f"{project}-tweets.csv")
            save_users_to_csv(users, project, f"{project}-users.csv")

        if 'threads' in platforms or 'all' in platforms:
            posts, thread_users = crawl_threads(threads_keyword, AUTH, SINCE, UNTIL, LIMIT, HEADLESS, ENRICHMENT, SORT)
            save_threads_to_csv(posts, project, f"{project}-threads-posts.csv")
            save_threads_users_to_csv(thread_users, project, f"{project}-threads-users.csv", ENRICHMENT)

        if 'ig' in platforms or 'all' in platforms:
            ig_posts, ig_users = crawl_ig(ig_keyword, AUTH, LIMIT, HEADLESS, ENRICHMENT)
            save_ig_to_csv(ig_posts, project, f"{project}-ig-posts.csv")
            save_ig_users_to_csv(ig_users, project, f"{project}-ig-users.csv", ENRICHMENT)

        if 'fb' in platforms or 'all' in platforms:
            fb_posts, fb_users = crawl_fb(fb_keyword, AUTH, fb_year, LIMIT, HEADLESS, ENRICHMENT, SORT)
            save_fb_to_csv(fb_posts, project, f"{project}-fb-posts.csv")
            save_fb_users_to_csv(fb_users, project, f"{project}-fb-users.csv", ENRICHMENT)

        if 'article' in platforms or 'all' in platforms:
            articles = crawl_articles(article_keyword, SINCE, UNTIL, LIMIT, HEADLESS, SORT)
            save_articles_to_csv(articles, project, f"{project}-articles.csv")

    elif mode == 'single':
        if 'x' in platforms:
            tweets, users = crawl_single_post(x_post_url, AUTH, HEADLESS)
            save_to_csv(tweets, project, f"{project}-single-tweets.csv")
            save_users_to_csv(users, project, f"{project}-single-users.csv")

        if 'ig' in platforms:
            ig_comments, ig_comment_users = crawl_ig_single_post(ig_post_url, AUTH, HEADLESS, ENRICHMENT)
            save_ig_comments_to_csv(ig_comments, project, f"{project}-ig-comments.csv")
            save_ig_comment_users_to_csv(ig_comment_users, project, f"{project}-ig-comment-users.csv", ENRICHMENT)
