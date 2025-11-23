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

### 9. Export Cookies Akun X
- **Tutorial:**  
  [Tonton di YouTube (mulai 1:01)](https://youtu.be/xTOK_40bXsk?t=61)

---

### 10. Sesuaikan Keyword
Buka file main.py dan ubah bagian keyword sesuai topik atau kata kunci yang ingin di-crawl.

---

### 11. Jalankan Program
Setelah semuanya siap, jalankan perintah berikut di terminal:

    npm run start

---

### 12. Tombol Enter di Terminal
Tekan tombol enter di terminal kapan saja untuk menghentikan crawling.


# STRUKTUR PROJECT:
    1. analyze/     Berisi program untuk analisis sentimen dan Social Network Analysis (SNA).

    2. auth/        Menyimpan file cookies.json untuk autentikasi akun X. Jangan dibagikan ke siapa pun!

    3. helpers/     Berisi file inti untuk crawling data. Tidak perlu diubah kecuali terjadi error fatal.

    4. result/      Tempat penyimpanan hasil crawling (tweets dan users). Aman dari ketimpa data karena
                    penamaan file otomatis (tweets_1.csv, tweets_2.csv, dst).

    5. tools/       Berisi alat bantu untuk menggabungkan hasil crawling dari beberapa file. *Jika punya banyak file hasil crawling*

## Cara gabung file:
    1) Pindahkan file hasil crawling dari folder result/ ke:
            tools/tweets/   → untuk file tweets.csv, tweets_1.csv, dst
            tools/users/    → untuk file users.csv, users_1.csv, dst
  
    2) Jalankan perintah berikut di terminal:
            py tools/merge_tweets_csv.py      → Untuk menggabungkan file tweets:
            py tools/merge_users_csv.py       → Untuk menggabungkan file users:
  
    3) Hasil gabungan akan muncul di masing-masing folder dengan nama: merged.csv


# CATATAN TAMBAHAN
1. Pastikan venv aktif setiap kali kamu menjalankan perintah berbasis Python.
2. Jika npm run start tidak jalan, pastikan Node.js sudah terinstal dan package.json berada di direktori utama project.
3. File cookies.json bisa menyebabkan akun kamu logout jika salah digunakan — simpan dengan aman.

# AUTHOR & CREDITS
HXRscraper is a tool developed by whdkelilauw

"Scraping bukan sekadar ambil data, tapi memahami denyut digital masyarakat" ~ Hax0r Team