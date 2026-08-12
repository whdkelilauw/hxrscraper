# SETUP:

Ikuti panduan berikut dari awal agar sistem bisa berjalan dengan lancar:

---

### 1. Install Python 3.10.11
- **Download:**  
  [Python 3.10.11 link download](https://www.python.org/ftp/python/3.10.11/python-3.10.11-amd64.exe)

- **Tutorial:**  
  [Tonton di YouTube (mulai 2:19)](https://youtu.be/nmOjkTnovHg?t=139)

---

### 2. Install Node.js v22.16.0
- **Download:**  
  [Node.js v22.16.0 link download](https://nodejs.org/dist/v22.16.0/node-v22.16.0-x64.msi)

- **Tutorial:**  
  [Tonton di YouTube (mulai 1:09)](https://youtu.be/sI6UJ-UEZAA?t=69)

---

### 3. Install Visual Studio Code (VSCode)
- **Download:**  
  [VSCode link download](https://code.visualstudio.com/)

---

### 4. Extract Project
Extract file 'hxrscraper.zip' ke lokasi yang diinginkan, lalu buka folder hasil extract-nya di VSCode.

---

### 5. Buat Virtual Environment
Buka terminal di VSCode, lalu jalankan:

    python -m venv .venv

---

### 6. Aktifkan Virtual Environment
Di terminal VSCode, jalankan:

    .venv\Scripts\activate

---

### 7. Install Dependencies
Masih di terminal (setelah venv aktif), jalankan:

    playwright install
    pip install -r requirements.txt

---

### 8. Install Extension Cookie Editor
- **Download:**  
  [Cookie Editor link download](https://chromewebstore.google.com/detail/cookie-editor/hlkenndednhfkekhgcdicdfddnkalmdm)

- **Tutorial:**  
  [Tonton di YouTube dari awal](https://youtu.be/xTOK_40bXsk)

---

### 9. Export Cookies Akun
- Export cookies dari akun **X (Twitter)**, **Threads**, dan/atau **Instagram** menggunakan Cookie Editor.
- Simpan file `.json` ke folder `auth/` dengan nama yang mudah dikenali (contoh: `akun1.json`).

- **Tutorial:**  
  [Tonton di YouTube (mulai 1:01)](https://youtu.be/xTOK_40bXsk?t=61)

---

### 10. Konfigurasi di main.py
Buka file `main.py` dan sesuaikan:
- `AUTH` — nama file cookies di folder `auth/` (tanpa `.json`)
- `PROJECT_NAME` — nama project untuk folder hasil
- `MODE` — pilih `'search'` atau `'single'`
- `PLATFORM` — kombinasi bebas: `'x'`, `'threads'`, `'ig'`, `'all'` (single: satu platform saja)
- `ENRICHMENT` — `True` untuk enrichment user detail, `False` untuk skip
- `LIMIT` — batas jumlah post yang diambil
- Keyword dan/atau URL post untuk masing-masing platform

---

### 11. Jalankan Program
Setelah semuanya siap, jalankan perintah berikut di terminal:

    npm run start

---

### 12. Tombol Enter di Terminal
Tekan tombol enter di terminal kapan saja untuk menghentikan crawling.


# PLATFORM YANG DIDUKUNG

| Platform | Crawl Posts | Crawl Users | Single Post | User Enrichment |
|----------|-----------|-------------|-------------|-----------------|
| X (Twitter) | Ya | Ya | Ya | Tidak |
| Threads | Ya | Ya | Belum | Ya |
| Instagram | Ya | Ya | Ya (Comments) | Ya |


# STRUKTUR PROJECT:
    1. analyze/     Berisi program untuk text preprocessing dan analisis sentimen.

    2. auth/        Menyimpan file cookies.json untuk autentikasi akun. Jangan dibagikan ke siapa pun!

    3. helpers/     Berisi file inti untuk crawling data:
                    - crawler_x.py              Crawler utama X (Twitter)
                    - crawler_x_single_post.py  Crawler single post X
                    - crawler_threads.py        Crawler utama Threads
                    - crawler_ig.py             Crawler utama Instagram
                    - crawler_ig_single_post.py Crawler single post IG (comments)
                    - x_types.py                Parser data X
                    - thread_types.py           Parser data Threads
                    - ig_types.py               Parser data Instagram
                    - saver.py                  Simpan hasil ke CSV

    4. result/      Tempat penyimpanan hasil crawling. Aman dari ketimpa data karena
                    penamaan file otomatis (tweets_1.csv, tweets_2.csv, dst).
                    Struktur folder: result/{project}/{platform}/{tipe}/

    5. tools/       Berisi alat bantu untuk mengelola hasil crawling:
                    - merge_data_csv.py   Gabung beberapa file CSV jadi satu (semua platform & tipe data)
                    - data_cutter.py      Potong data berdasarkan rentang tanggal

## Cara pakai tools:

### Merge data (gabung file CSV):
    npm run merge

    Ikuti menu interaktif: pilih project → pilih folder data → otomatis merge.
    Mendukung semua tipe: tweets, posts, comments, users (semua platform).
    Duplikat otomatis dihapus berdasarkan kolom ID masing-masing tipe data.
    Hasil: merged.csv di folder yang dipilih.

### Data cutter (potong by tanggal):
    npm run cut

    Ikuti menu interaktif: pilih project → pilih folder → pilih file → masukkan rentang tanggal.
    Hasil: cut_{nama_file}_{since}_{until}.csv di folder yang sama.


# CATATAN TAMBAHAN
1. Pastikan venv aktif setiap kali kamu menjalankan perintah berbasis Python.
2. Jika npm run start tidak jalan, pastikan Node.js sudah terinstal dan package.json berada di direktori utama project.
3. File cookies.json bisa menyebabkan akun kamu logout jika salah digunakan — simpan dengan aman.
4. Untuk Threads dan Instagram, gunakan cookies dari akun Instagram yang sudah login.
5. Hindari penggunaan terlalu agresif (limit tinggi, tanpa jeda) untuk menghindari action-block dari platform.

# AUTHOR & CREDITS
HXRscraper is a tool developed by whdkelilauw

> Project ini dibagikan bukan untuk dijual, tapi untuk dipelajari.  
> Non-commercial, open for knowledge, silakan pakai, ubah, sebarkan.  
> Thanks for keeping the license included.