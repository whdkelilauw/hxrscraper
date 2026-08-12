# tools/data_cutter.py
import os
import pandas as pd

RESULT_DIR = "result"
DATE_FORMAT = "%a %b %d %H:%M:%S %z %Y"


def scan_projects():
    if not os.path.exists(RESULT_DIR):
        return []
    return sorted([d for d in os.listdir(RESULT_DIR)
                   if os.path.isdir(os.path.join(RESULT_DIR, d))])


def scan_data_folders(project):
    project_dir = os.path.join(RESULT_DIR, project)
    folders = []
    for root, dirs, files in os.walk(project_dir):
        csv_files = [f for f in files if f.endswith(".csv")]
        if csv_files:
            rel_path = os.path.relpath(root, project_dir)
            folders.append((rel_path, len(csv_files)))
    return sorted(folders)


def scan_csv_files(folder):
    files = [f for f in os.listdir(folder) if f.endswith(".csv")]
    return sorted(files)


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


def cut_csv_by_date(input_file, output_file, since, until):
    if not os.path.exists(input_file):
        print("[WARNING] File tidak ditemukan:", input_file)
        return

    print(f"\n[OK] Memuat: {os.path.basename(input_file)}")
    df = pd.read_csv(input_file)
    print(f"[OK] {len(df)} baris dimuat")

    if "created_at" not in df.columns:
        print("[WARNING] Kolom 'created_at' tidak ditemukan — tidak bisa potong by tanggal.")
        return

    df["_dt"] = pd.to_datetime(df["created_at"], format=DATE_FORMAT, errors="coerce")

    since_dt = pd.to_datetime(since).date() if since else None
    until_dt = pd.to_datetime(until).date() if until else None

    if since_dt and until_dt and since_dt > until_dt:
        print("[WARNING] Tanggal 'since' lebih besar dari 'until'.")
        return

    mask = pd.Series(True, index=df.index)
    if since_dt:
        mask &= df["_dt"].dt.date >= since_dt
    if until_dt:
        mask &= df["_dt"].dt.date <= until_dt

    cut_df = df.loc[mask].drop(columns=["_dt"])

    label_since = since or "awal"
    label_until = until or "akhir"
    print(f"[OK] Hasil: {len(cut_df)} baris ({label_since} → {label_until})")

    cut_df.to_csv(output_file, index=False, encoding="utf-8")
    print(f"[OK] Tersimpan: {output_file}")


if __name__ == "__main__":
    print("=" * 50)
    print("  DATA CUTTER (POTONG BY TANGGAL)")
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
            print(f"\nFolder data di project '{project}':")
            idx = prompt_choice("Folder", folders, allow_back=True)
            if idx is None:
                step = 1
                continue

            rel_path = folders[idx][0]
            folder_path = os.path.join(RESULT_DIR, project, rel_path)
            csv_files = scan_csv_files(folder_path)
            if not csv_files:
                print("  [!] Tidak ada file CSV di folder ini.")
                continue
            step = 3

        if step == 3:
            print(f"\nFile CSV di {rel_path}:")
            idx = prompt_choice("File", csv_files, allow_back=True)
            if idx is None:
                step = 2
                continue

            selected_file = csv_files[idx]
            input_path = os.path.join(folder_path, selected_file)
            step = 4

        if step == 4:
            go_back = False
            while True:
                print("\nRentang tanggal (format: YYYY-MM-DD)")
                print("Kosongkan jika tidak ingin filter. Ketik '<' untuk kembali, '0' untuk keluar.")
                since = input("  Since: ").strip()
                if since == "<":
                    go_back = True
                    break
                if since == "0":
                    print("\n[OK] Dibatalkan.")
                    exit(0)
                until = input("  Until: ").strip()
                if until == "<":
                    go_back = True
                    break
                if until == "0":
                    print("\n[OK] Dibatalkan.")
                    exit(0)

                if not since and not until:
                    print("  [!] Minimal isi salah satu tanggal.")
                    continue

                valid = True
                if since:
                    try:
                        pd.to_datetime(since)
                    except Exception:
                        print(f"  [!] Format since tidak valid: '{since}' (gunakan YYYY-MM-DD)")
                        valid = False
                if until:
                    try:
                        pd.to_datetime(until)
                    except Exception:
                        print(f"  [!] Format until tidak valid: '{until}' (gunakan YYYY-MM-DD)")
                        valid = False

                if valid and since and until:
                    if pd.to_datetime(since).date() > pd.to_datetime(until).date():
                        print("  [!] Since lebih besar dari until.")
                        valid = False

                if valid:
                    break

            if go_back:
                step = 3
                continue

            name, ext = os.path.splitext(selected_file)
            date_key = f"{since or 'start'}_{until or 'end'}"
            output_path = os.path.join(folder_path, f"cut_{name}_{date_key}{ext}")
            base, ext = os.path.splitext(output_path)
            counter = 1
            while os.path.exists(output_path):
                output_path = f"{base}_{counter}{ext}"
                counter += 1

            cut_csv_by_date(input_path, output_path, since, until)
            break
