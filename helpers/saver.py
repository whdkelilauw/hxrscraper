# helpers/saver.py
import csv
import os
from typing import List, Dict
from datetime import datetime, timezone

def save_to_csv(tweets: List[Dict], filename: str):
    """
    Menyimpan hasil scraping tweet ke file CSV di folder 'result'.
    Jika file dengan nama sama sudah ada, otomatis akan ditambahkan angka di belakangnya.
    """

    # Pastikan folder 'result' sudah tersedia
    os.makedirs("result", exist_ok=True)
    filepath = os.path.join("result", filename)

    # Cegah overwrite file lama dengan menambahkan penomoran otomatis
    base, ext = os.path.splitext(filename)
    counter = 1
    while os.path.exists(filepath):
        filepath = os.path.join("result", f"{base}_{counter}{ext}")
        counter += 1

    # Konversi kolom 'created_at' ke datetime agar bisa diurutkan dengan benar
    def parse_date(t):
        try:
            return datetime.strptime(t.get("created_at", ""), "%a %b %d %H:%M:%S %z %Y")
        except Exception:
            return datetime.min.replace(tzinfo=timezone.utc)  

    # Urutkan tweet berdasarkan waktu (dari paling lama)
    tweets_sorted = sorted(tweets, key=parse_date, reverse=True)

    # Kalau tidak ada data sama sekali, jangan buat file kosong
    if not tweets_sorted:
        print("[WARNING] Tidak ada data tweet untuk disimpan. File CSV tidak dibuat.")
        return

    # Mulai tulis data tweet ke file CSV
    with open(filepath, "w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)

        # Header kolom, disesuaikan dengan struktur hasil parsing tweet
        writer.writerow([
            "tweet_id_str",
            "created_at",
            "user_id_str",
            "username",
            "name",
            "full_text",
            "user_mentions",
            "hashtags",
            "location",
            "lang",
            "quote_count",
            "views_count",
            "favorite_count",
            "reply_count",
            "retweet_count",
            "bookmark_count",
            "media_url_https",
            "tweet_url",
            "relation_type",
            "target_tweet_id_str",
            "target_username",
        ])

        # Loop dan tulis isi tiap tweet ke baris CSV
        for t in tweets_sorted:
            writer.writerow([
                t.get("tweet_id_str", "-"),
                t.get("created_at", "-"),
                t.get("user_id_str", "-"),
                t.get("username", "-"),
                t.get("name", "-"),
                t.get("full_text", "-").replace("\r", " ").replace("\n", " "),  # hapus newline agar CSV rapi
                t.get("user_mentions", "-"),
                t.get("hashtags", "-"),
                t.get("location", "-"),
                t.get("lang", "-"),
                t.get("quote_count", 0),
                t.get("views_count", 0),
                t.get("favorite_count", 0),
                t.get("reply_count", 0),
                t.get("retweet_count", 0),
                t.get("bookmark_count", 0),
                t.get("media_url_https", "-"),
                t.get("tweet_url", "-"),
                t.get("relation_type", "-"),
                t.get("target_tweet_id_str", "-"),
                t.get("target_username", "-")
            ])

    # Info ringkas hasil penyimpanan
    rows_saved = len(tweets_sorted)
    print(f"[OK] {rows_saved} Data tweet tersimpan di: {filepath}")


def save_users_to_csv(users: list, filename: str):
    """
    Menyimpan data pengguna (user) ke dalam file CSV.
    Digunakan untuk hasil scraping user detail atau relasi antar akun.
    """

    import csv, os
    os.makedirs("result", exist_ok=True)
    filepath = os.path.join("result", filename)

    # Sama seperti save_to_csv, tambahkan angka jika nama file sudah dipakai
    base, ext = os.path.splitext(filename)
    counter = 1
    while os.path.exists(filepath):
        filepath = os.path.join("result", f"{base}_{counter}{ext}")
        counter += 1

    # Kalau data kosong, tampilkan peringatan dan batal simpan
    if not users:
        print("[WARNING] Tidak ada user untuk disimpan. File CSV tidak dibuat.")
        return

    # Simpan data user ke file CSV
    with open(filepath, "w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        writer.writerow([
            "created_at","user_id_str","username","name",
            "fast_followers_count","favourites_count","followers_count",
            "following_count","listed_count","media_count",
            "normal_followers_count","statuses_count","url",
            "location","image_url","account_url"
        ])
        for u in users:
            writer.writerow([
                u.get("created_at","-"),
                u.get("user_id_str","-"),
                u.get("username","-"),
                u.get("name","-"),
                u.get("fast_followers_count",0),
                u.get("favourites_count",0),
                u.get("followers_count",0),
                u.get("following_count",0),
                u.get("listed_count",0),
                u.get("media_count",0),
                u.get("normal_followers_count",0),
                u.get("statuses_count",0),
                u.get("url","-"),
                u.get("location","-"),
                u.get("image_url","-"),
                u.get("account_url","-")
            ])
    print(f"[OK] {len(users)} User tersimpan di: {filepath}")
