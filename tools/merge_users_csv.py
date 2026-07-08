# tools/merge_users_csv.py
import os
import glob
import pandas as pd

def merge_csv(input_folder, output_file, date_column):
    """
    Menggabungkan banyak file CSV menjadi satu file besar.
    Biasanya dipakai setelah scraping batch untuk menggabungkan hasil data user dari beberapa sesi.
    """

    # Ambil semua file CSV dari folder input
    all_files = glob.glob(os.path.join(input_folder, "*.csv"))
    if not all_files:
        print("[WARNING] Tidak ada file CSV di folder:", input_folder)
        return

    print(f"[OK] Found {len(all_files)} CSV files. Merging...")

    dfs = []
    for file in all_files:
        try:
            # Baca tiap CSV dan masukkan ke list dataframe
            df = pd.read_csv(file)
            dfs.append(df)
            print(f"[OK] Loaded {file} ({len(df)} rows)")
        except Exception as e:
            print(f"[WARNING] Error reading {file}: {e}")

    # Gabungkan semua dataframe jadi satu
    merged_df = pd.concat(dfs, ignore_index=True)

    # Jika kolom 'user_id_str' ada, hapus duplikat berdasarkan ID unik
    if "user_id_str" in merged_df.columns:
        before = len(merged_df)
        merged_df = merged_df.drop_duplicates(subset=["user_id_str"], keep="first")
        after = len(merged_df)
        print(f"[OK] Removed {before - after} duplicate users based on user_id_str (kept first).")
    else:
        print("[WARNING] Kolom 'user_id_str' tidak ditemukan — skip deduplication.")

    try:
        # Urutkan data berdasarkan kolom tanggal (biasanya 'created_at')
        temp_sort = pd.to_datetime(
            merged_df[date_column],
            format="%a %b %d %H:%M:%S %z %Y",
            errors="coerce"
        )
        merged_df = merged_df.loc[temp_sort.sort_values().index].reset_index(drop=True)
    except Exception as e:
        print(f"[WARNING] Gagal mengurutkan berdasarkan {date_column}: {e}")

    # Simpan hasil gabungan ke file CSV baru
    merged_df.to_csv(output_file, index=False, encoding="utf-8")
    print(f"[OK] Saved merged file to {output_file} with {len(merged_df)} rows.")


if __name__ == "__main__":
    # Folder tempat menyimpan semua file CSV yang mau digabung
    merge_csv(
        input_folder="result/pasal_33_uud/users",          # Folder input
        output_file="result/pasal_33_uud/users/merged.csv",# Nama file hasil gabungan
        date_column="created_at"             # Kolom tanggal untuk sortir (saat ini 'created_at')
    )
