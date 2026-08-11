# Changelog
Semua perubahan penting pada proyek **HXRscraper** akan didokumentasikan di file ini.

Format file ini mengikuti pedoman [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)
dan sistem penomoran versi mengikuti [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [0.1.0] - 2025-09-12
### Added
- Scraping data tweets dan users
- Scraping by post_url (single post mode)
- Scraping by keyword (search mode)
- Parser data tweet dan user
- Simpan hasil ke file CSV
- Fitur gabung/merge file CSV
- Fitur preprocessing dan analisis sentimen menggunakan IndoBERT
- Fitur ekstrak data node edges
- File konfigurasi versi `version.py`
- Integrasi dengan `package.json`

### Note
Versi ini merupakan **rilis pertama HXRscraper**.

---

## [0.1.1] - 2025-11-21
### Added
- urllib.parse di crawler.py untuk convert keyword to url
- Project name 
- Project name sekarang ada pada file CSV
- File hasil scraping sekarang terfolder project name
- Trend tweet monthly graph
- Convert time zone +0000 to +0700 `tweet_types.py`
- Convert time zone +0000 to +0700 `preprocessing.ipynb`

### Changed
- Alur loop Retry dengan klik-dulu lalu validasi ulang.
- Scroll limit terdeteksi -> waktu cooldown 1 menit

### Fixed
- Trend tweet daily graph

---

## [0.2.0] - 2026-08-11
### Added
- Dukungan platform **Threads** (crawling posts dan users)
- `crawler_threads.py` — crawler Threads dengan GraphQL intercept dan async user enrichment
- `thread_types.py` — parser post dan user Threads, termasuk SSR profile parsing
- `save_threads_to_csv()` dan `save_threads_users_to_csv()` di `saver.py`
- Konfigurasi multi-platform di `main.py` (`PLATFORM = 'x' | 'threads' | 'both'`)
- Block media (gambar/video) pada Threads crawler untuk hemat bandwidth
- Cooldown otomatis setiap 20 user pada enrichment

### Changed
- Rename `crawler.py` -> `crawler_x.py`
- Rename `crawler_single_post.py` -> `crawler_x_single_post.py`
- Rename `tweet_types.py` -> `x_types.py`
- Deskripsi project diperbarui: multi-platform social media crawling tool
- Enrichment Threads menggunakan SSR-only (tanpa modal interaction) untuk keamanan akun
- Enrichment Threads menggunakan 2 tab parallel

---