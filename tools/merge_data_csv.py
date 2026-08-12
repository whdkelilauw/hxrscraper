# tools/merge_data_csv.py
import os
import glob
import pandas as pd

RESULT_DIR = "result"
DATE_FORMAT = "%a %b %d %H:%M:%S %z %Y"
ID_COLUMNS = ["tweet_id_str", "post_id_str", "comment_id_str", "user_id_str"]


def scan_projects():
    if not os.path.exists(RESULT_DIR):
        return []
    return sorted([d for d in os.listdir(RESULT_DIR)
                   if os.path.isdir(os.path.join(RESULT_DIR, d))])


def scan_data_folders(project):
    project_dir = os.path.join(RESULT_DIR, project)
    folders = []
    for root, dirs, files in os.walk(project_dir):
        csv_files = [f for f in files if f.endswith(".csv") and not f.startswith("merged")]
        if csv_files:
            rel_path = os.path.relpath(root, project_dir)
            folders.append((rel_path, len(csv_files)))
    return sorted(folders)


def detect_id_column(df):
    for col in ID_COLUMNS:
        if col in df.columns:
            return col
    return None


def prompt_choice(label, options, allow_back=False):
    print()
    for i, opt in enumerate(options, 1):
        if isinstance(opt, tuple):
            print(f"  [{i}] {opt[0]}  ({opt[1]} file)")
        else:
            print(f"  [{i}] {opt}")
    if allow_back:
        print(f"  [<] Kembali")
    print(f"  [0] Keluar")
    while True:
        raw = input(f"\n{label}: ").strip()
        if raw == "<" and allow_back:
            return None
        try:
            choice = int(raw)
            if choice == 0:
                print("\n[OK] Dibatalkan.")
                exit(0)
            if 1 <= choice <= len(options):
                return choice - 1
            print(f"  Pilih antara 0-{len(options)}")
        except (ValueError, EOFError):
            print(f"  Masukkan angka 0-{len(options)}{' atau <' if allow_back else ''}")


def merge_csv(input_folder):
    all_files = glob.glob(os.path.join(input_folder, "*.csv"))
    all_files = [f for f in all_files if not os.path.basename(f).startswith("merged")]

    if not all_files:
        print("[WARNING] Tidak ada file CSV di folder:", input_folder)
        return

    print(f"\n[OK] Ditemukan {len(all_files)} file CSV. Menggabungkan...")

    dfs = []
    for file in all_files:
        try:
            df = pd.read_csv(file)
            dfs.append(df)
            print(f"  [+] {os.path.basename(file)} ({len(df)} baris)")
        except Exception as e:
            print(f"  [!] Error membaca {os.path.basename(file)}: {e}")

    if not dfs:
        print("[WARNING] Tidak ada data yang berhasil dibaca.")
        return

    merged_df = pd.concat(dfs, ignore_index=True)

    id_col = detect_id_column(merged_df)
    if id_col:
        before = len(merged_df)
        merged_df = merged_df[
            merged_df[id_col].notna() &
            (merged_df[id_col].astype(str).str.strip() != "") &
            (merged_df[id_col].astype(str).str.strip() != "-")
        ]
        merged_df = merged_df.drop_duplicates(subset=id_col, keep="first")
        removed = before - len(merged_df)
        if removed > 0:
            print(f"[OK] {removed} baris duplikat/kosong dihapus (kolom: {id_col})")

    if "created_at" in merged_df.columns:
        try:
            temp_sort = pd.to_datetime(
                merged_df["created_at"], format=DATE_FORMAT, errors="coerce"
            )
            if temp_sort.notna().sum() > 0:
                merged_df = merged_df.loc[
                    temp_sort.sort_values(ascending=False).index
                ].reset_index(drop=True)
                print(f"[OK] Diurutkan berdasarkan created_at (terbaru di atas)")
        except Exception:
            pass

    output_file = os.path.join(input_folder, "merged.csv")
    base, ext = os.path.splitext(output_file)
    counter = 1
    while os.path.exists(output_file):
        output_file = f"{base}_{counter}{ext}"
        counter += 1

    merged_df.to_csv(output_file, index=False, encoding="utf-8")
    print(f"\n[OK] Tersimpan: {output_file} ({len(merged_df)} baris)")


if __name__ == "__main__":
    print("=" * 50)
    print("  MERGE DATA CSV")
    print("=" * 50)

    projects = scan_projects()
    if not projects:
        print("[WARNING] Folder result/ kosong atau tidak ditemukan.")
        exit(1)

    step = 1
    while True:
        if step == 1:
            print("\nPilih project:")
            idx = prompt_choice("Project", projects)
            project = projects[idx]

            folders = scan_data_folders(project)
            if not folders:
                print(f"  [!] Tidak ada file CSV di project '{project}'.")
                continue
            step = 2

        if step == 2:
            print(f"\nData tersedia di project '{project}':")
            idx = prompt_choice("Data", folders, allow_back=True)
            if idx is None:
                step = 1
                continue

            rel_path = folders[idx][0]
            input_folder = os.path.join(RESULT_DIR, project, rel_path)
            merge_csv(input_folder)
            break
