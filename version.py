__title__ = "hxrscraper"
__description__ = "A Twitter/X crawling tool for academic and non-commercial purposes"
__version__ = "0.1.1"
__license__ = "HXRscraper License | Custom MIT Variant"
__author__ = "whdkelilauw"
__main_file__ = "main.py"
__created__ = "2025-09-12"
__updated__ = ""

def get_version_info() -> str:
    return f"{__title__} v{__version__} — {__description__}"

def banner():
    print("=" * 70)
    print(f"{__license__}")
    print(f"HXRscraper v{__version__} Running")
    print(f"Developed by {__author__}")
    print(f"{__description__}")
    print("=" * 70)