# main.py
from helpers.crawler import crawl_tweets
from helpers.crawler_single_post import crawl_single_post
from helpers.saver import save_to_csv, save_users_to_csv
from version import banner
banner()

if __name__ == "__main__":
    # ======================================================
    # MODE 1: Crawling berdasarkan kata kunci (search mode)
    # ======================================================
    # Di bawah ini adalah parameter yang bisa kamu ubah sesuai kebutuhan.
    
    # Nama project **OPSIONAL**
    # Digunakan sebagai nama file hasil crawling
    project_name = ''
    project_name = (project_name or '').strip()
    
    # Tambahkan kata diawali dengan strip (-)
    # Contoh: -prabowo atau jika frasa persis -"analisis media"
    excluded = ''

    # Kata kunci pencarian — bisa kombinasikan dengan operator logika (AND, OR)
    keyword = ''

    # Rentang tanggal pencarian **OPSIONAL**
    # Format: 'since:YYYY-MM-DD' dan 'until:YYYY-MM-DD'
    # Contoh: since = 'since:2025-01-01', until = 'until:2026-01-31'
    since = ''
    until = ''

    # Filter bahasa **OPSIONAL**
    # Isi dengan kode bahasa seperti 'lang:id' untuk Bahasa Indonesia,
    # atau kosongkan ('') untuk semua bahasa.
    # Contoh: lang = 'lang:id'
    lang = ''

    # Batas jumlah tweet yang akan diambil
    # Sesuaikan agar tidak membebani server, misal 5000–20000.
    limit = 50000

    # Jalankan fungsi crawling berdasarkan parameter di atas
    tweets, users = crawl_tweets(keyword, excluded, since, until, lang, 'cookies', limit)

    # Simpan hasil ke file CSV
    if project_name:
        save_to_csv(tweets, project_name, f"{project_name}-tweets.csv")
        save_users_to_csv(users, project_name, f"{project_name}-users.csv")
    else:
        save_to_csv(tweets, 'default', "tweets.csv")
        save_users_to_csv(users, 'default', "users.csv")

    # ============================================================
    # MODE 2: Crawling satu postingan spesifik (single post mode)
    # ============================================================
    # Gunakan mode ini untuk mengambil seluruh thread dari satu URL tweet/post.
    # Cocok jika kamu ingin menganalisis percakapan dari satu topik atau akun tertentu.
    # Sebelum menggunakan mode ini, pastikan kamu sudah menonaktifkan MODE 1 dengan cara comment (CTRL + /)
    # Setelah itu kamu bisa uncomment (CTRL + /) baris kode di bawah

    # Contoh post_url "https://x.com/hax0r26/status/1511812169960419328"
    # post_url = ""
    # tweets, users = crawl_single_post(post_url)
    # save_to_csv(tweets, "single-tweets.csv")
    # save_users_to_csv(users, "users-single-tweets.csv")
