# tools/data_cutter.py
import os
import pandas as pd

project_name = "sawit"   # SESUAIKAN NAMA PROJECT (JIKA TIDAK ADA NAMA PROJECT ISI DENGAN "default")
# FORMAT: YYYY-MM-DD
since = "2026-01-01"              # SESUAIKAN TANGGAL AWAL
until = ""              # SESUAIKAN TANGGAL AKHIR

file_name = f"{project_name}-tweets.csv"
base_folder = f"result/{project_name}/tweets"

def cut_csv_by_date(input_file, output_file, date_column, since, until):
    """
    Memotong data CSV berdasarkan rentang tanggal (inklusif).
    Tidak mengubah isi data, hanya memilih baris.
    """

    if not os.path.exists(input_file):
        print("[WARNING] File tidak ditemukan:", input_file)
        return

    print(f"[OK] Loading CSV: {input_file}")
    df = pd.read_csv(input_file)
    print(f"[OK] Loaded {len(df)} rows")

    if date_column not in df.columns:
        print(f"[WARNING] Kolom '{date_column}' tidak ditemukan")
        return

    # Parse created_at (format Twitter)
    df["_created_at_dt"] = pd.to_datetime(
        df[date_column],
        format="%a %b %d %H:%M:%S %z %Y",
        errors="coerce"
    )

        # Konversi input tanggal
    since_dt = pd.to_datetime(since).date() if since else None
    until_dt = pd.to_datetime(until).date() if until else None

    if since_dt and until_dt and since_dt > until_dt:
        print("[WARNING] since lebih besar dari until")
        return

    # Filter range
    mask = pd.Series(True, index=df.index)

    if since_dt:
        mask &= df["_created_at_dt"].dt.date >= since_dt

    if until_dt:
        mask &= df["_created_at_dt"].dt.date <= until_dt

    cut_df = df.loc[mask].copy()

    # Hapus kolom bantu agar struktur tetap sama
    cut_df = cut_df.drop(columns=["_created_at_dt"])

    print(f"[OK] Cut result: {len(cut_df)} rows (timeframe: {since or 'sebelumnya'} → {until or 'terkini'})")

    # Simpan ke CSV baru
    cut_df.to_csv(output_file, index=False, encoding="utf-8")
    print(f"[OK] Saved cut file to {output_file}")

if __name__ == "__main__":
    cut_csv_by_date(
        input_file=f"{base_folder}/{file_name}",
        output_file=f"{base_folder}/cut_{file_name}",
        date_column="created_at",
        since=since,
        until=until
    )
