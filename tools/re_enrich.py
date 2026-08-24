# tools/re_enrich.py
import os
import sys
import json
import asyncio
import threading
import pandas as pd

sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))

RESULT_DIR = "result"

IG_INDICATOR_COLS = ["follower_count", "following_count", "media_count", "category", "biography"]
THREADS_INDICATOR_COLS = ["follower_count", "view_count", "profile_tag", "biography"]
FB_INDICATOR_COLS = ["follower_count", "following_count", "friend_count", "category", "biography"]


def scan_projects():
    if not os.path.exists(RESULT_DIR):
        return []
    return sorted([d for d in os.listdir(RESULT_DIR)
                   if os.path.isdir(os.path.join(RESULT_DIR, d))])


def scan_user_files(project):
    project_dir = os.path.join(RESULT_DIR, project)
    files = []
    for root, dirs, filenames in os.walk(project_dir):
        rel_root = os.path.relpath(root, project_dir)
        if rel_root.startswith("x"):
            continue
        for f in filenames:
            if f.endswith(".csv") and "user" in f.lower():
                full_path = os.path.join(root, f)
                rel_path = os.path.relpath(full_path, project_dir)
                files.append(rel_path)
    return sorted(files)


def detect_platform(df):
    cols = set(df.columns)
    if "friend_count" in cols:
        return "fb"
    if "view_count" in cols or "profile_tag" in cols:
        return "threads"
    if "media_count" in cols or "category" in cols:
        return "ig"
    return None


def is_failed(row, indicator_cols):
    for col in indicator_cols:
        if col not in row.index:
            continue
        val = row[col]
        if pd.isna(val):
            continue
        val_str = str(val).strip()
        if val_str not in ("0", "-", "", "0.0", "False"):
            return False
    return True


def prompt_choice(label, options, allow_back=False):
    print()
    for i, opt in enumerate(options, 1):
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


def prompt_auth():
    auth_dir = "auth"
    if not os.path.exists(auth_dir):
        print("[WARNING] Folder auth/ tidak ditemukan.")
        return None
    auth_files = [f.replace(".json", "") for f in os.listdir(auth_dir) if f.endswith(".json")]
    if not auth_files:
        print("[WARNING] Tidak ada file cookies di folder auth/.")
        return None
    print("\nPilih akun cookies:")
    idx = prompt_choice("Auth", auth_files, allow_back=True)
    if idx is None:
        return None
    return auth_files[idx]


if __name__ == "__main__":
    print("=" * 50)
    print("  RE-ENRICH USERS")
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

            user_files = scan_user_files(project)
            if not user_files:
                print(f"  [!] Tidak ada file users CSV di project '{project}'.")
                continue
            step = 2

        if step == 2:
            print(f"\nFile users di project '{project}':")
            idx = prompt_choice("File", user_files, allow_back=True)
            if idx is None:
                step = 1
                continue

            selected_file = user_files[idx]
            csv_path = os.path.join(RESULT_DIR, project, selected_file)

            df = pd.read_csv(csv_path, dtype={"user_id_str": str})
            platform = detect_platform(df)

            if not platform:
                print("  [!] Tidak bisa mendeteksi platform (bukan IG/Threads/FB users). Pilih file lain.")
                continue

            if platform == "ig":
                indicator_cols = IG_INDICATOR_COLS
            elif platform == "threads":
                indicator_cols = THREADS_INDICATOR_COLS
            else:
                indicator_cols = FB_INDICATOR_COLS

            failed_mask = df.apply(lambda row: is_failed(row, indicator_cols), axis=1)
            failed_df = df[failed_mask]
            total_failed = len(failed_df)

            if total_failed == 0:
                print(f"\n[OK] Semua {len(df)} users sudah ter-enrich. Tidak ada yang perlu di-retry.")
                continue

            platform_label = {"ig": "Instagram", "threads": "Threads", "fb": "Facebook"}[platform]
            print(f"\n[OK] Platform: {platform_label}")
            print(f"[OK] Total users: {len(df)}")
            print(f"[OK] Gagal enrich: {total_failed}")
            print(f"[OK] Kolom indikator: {', '.join(indicator_cols)}")
            step = 3

        if step == 3:
            auth = prompt_auth()
            if auth is None:
                step = 2
                continue
            step = 4

        if step == 4:
            print("\nMode browser:")
            mode_idx = prompt_choice("Mode", ["Headless (tanpa tampilan browser)", "Visible (tampilkan browser)"], allow_back=True)
            if mode_idx is None:
                step = 3
                continue
            headless = (mode_idx == 0)

            print(f"\n[OK] Re-enriching {total_failed} users dengan akun '{auth}' ({'headless' if headless else 'visible'})...\n")

            failed_users = {}
            for _, row in failed_df.iterrows():
                uid = str(int(row.get("user_id_str", 0)))
                if uid and uid != "-" and uid != "0":
                    row_dict = dict(row)
                    row_dict["user_id_str"] = uid
                    failed_users[uid] = row_dict

            user_list = list(failed_users.values())

            if platform == "ig":
                import helpers.crawler_ig as _crawler
                from helpers.crawler_ig import _enrich_users_parallel as enrich_fn
            elif platform == "threads":
                import helpers.crawler_threads as _crawler
                from helpers.crawler_threads import _enrich_users_parallel as enrich_fn
            else:
                import helpers.crawler_fb as _crawler
                from helpers.crawler_fb import _enrich_users_parallel as enrich_fn

            _crawler.stop_crawling = False
            threading.Thread(target=_crawler.listen_for_enter, daemon=True).start()

            n_tabs = min(2, len(user_list))
            asyncio.run(enrich_fn(auth, failed_users, user_list, n_tabs, headless=headless))

            updated_count = 0
            for uid, enriched_data in failed_users.items():
                mask = df["user_id_str"].astype(str) == uid
                if not mask.any():
                    continue
                if not is_failed(pd.Series(enriched_data), indicator_cols):
                    for col, val in enriched_data.items():
                        if col in df.columns:
                            df.loc[mask, col] = val
                    updated_count += 1

            df.to_csv(csv_path, index=False, encoding="utf-8")
            print(f"\n[OK] {updated_count}/{total_failed} users berhasil di-enrich ulang.")
            print(f"[OK] File diperbarui: {csv_path}")
            break
