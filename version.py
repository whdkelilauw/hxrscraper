__title__ = "hxrscraper"
__description__ = "A multi-platform social media crawling tool for academic and non-commercial purposes"
__version__ = "0.3.0"
__license__ = "HXRscraper License | Custom MIT Variant"
__author__ = "whdkelilauw"
__main_file__ = "main.py"
__created__ = "2025-09-12"
__updated__ = "2026-08-12"

VALID_PLATFORMS = {'x', 'threads', 'ig', 'all'}
VALID_MODES = {'search', 'single'}
SINGLE_PLATFORMS = {'x', 'ig'}

def parse_platform(raw: str) -> set:
    platforms = {p.strip() for p in raw.lower().split(',')}
    invalid = platforms - VALID_PLATFORMS
    if invalid:
        print(f"[ERROR] Platform tidak dikenali: {', '.join(invalid)}")
        print(f"        Platform yang tersedia: x, threads, ig, all")
        exit(1)
    return platforms

def parse_mode(mode: str, platforms: set):
    mode = mode.strip().lower()
    if mode not in VALID_MODES:
        print(f"[ERROR] Mode tidak dikenali: '{mode}'")
        print(f"        Mode yang tersedia: search, single")
        exit(1)
    if mode == 'single':
        if 'all' in platforms or len(platforms) > 1:
            print(f"[ERROR] Mode 'single' hanya bisa untuk satu platform")
            print(f"        Pilih salah satu: {', '.join(SINGLE_PLATFORMS)}")
            exit(1)
        platform = next(iter(platforms))
        if platform not in SINGLE_PLATFORMS:
            print(f"[ERROR] Mode 'single' belum tersedia untuk platform '{platform}'")
            print(f"        Platform yang mendukung single: {', '.join(SINGLE_PLATFORMS)}")
            exit(1)
    return mode

def get_version_info() -> str:
    return f"{__title__} v{__version__} — {__description__}"

def banner():
    print("=" * 70)
    print(f"{__license__}")
    print(f"HXRscraper v{__version__} Running")
    print(f"Developed by {__author__}")
    print(f"{__description__}")
    print("=" * 70)