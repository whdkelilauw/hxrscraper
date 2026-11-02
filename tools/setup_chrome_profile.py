# tools/setup_chrome_profile.py
from pathlib import Path
from playwright.sync_api import sync_playwright

CHROME_PROFILE = Path(__file__).resolve().parent.parent / "__chrome_profile"
EXTENSION_DIR = Path(__file__).resolve().parent.parent / "__extensions" / "adguard"


def main():
    print("=" * 50)
    print("  SETUP CHROME PROFILE")
    print("=" * 50)
    print(f"\n[INFO] Chrome profile: {CHROME_PROFILE}")
    print("[INFO] Browser akan terbuka. Login ke Google account kamu.")
    print("[INFO] Setelah selesai, tekan Enter di terminal untuk menyimpan profile.\n")

    with sync_playwright() as p:
        context = p.chromium.launch_persistent_context(
            user_data_dir=str(CHROME_PROFILE),
            headless=False,
            args=[
                "--no-first-run",
                "--no-default-browser-check",
                "--disable-blink-features=AutomationControlled",
                f"--disable-extensions-except={EXTENSION_DIR}",
                f"--load-extension={EXTENSION_DIR}",
            ],
        )

        page = context.new_page()
        page.goto("https://accounts.google.com", wait_until="domcontentloaded")

        input("[OK] Tekan Enter di terminal setelah selesai login...")

        context.close()

    print(f"\n[OK] Chrome profile tersimpan di: {CHROME_PROFILE}")
    print("[OK] Sekarang kamu bisa jalankan article scraper.")


if __name__ == "__main__":
    main()
