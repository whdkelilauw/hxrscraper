# helpers/parsers/article_extractor.py
import json
import re
import hashlib
import html as html_mod
from datetime import datetime, timezone, timedelta
from urllib.parse import urlparse

try:
    import trafilatura
except ImportError:
    trafilatura = None
    print("[WARNING] trafilatura belum terinstall. Jalankan: pip install trafilatura")

WIB = timezone(timedelta(hours=7))


def _normalize_url(url):
    parsed = urlparse(url)
    host = parsed.netloc.lower()
    for prefix in ("m.", "amp.", "mobile."):
        if host.startswith(prefix):
            host = host[len(prefix):]
            break
    return parsed._replace(netloc=host).geturl()


def generate_article_id(url):
    normalized = _normalize_url(url)
    return str(int(hashlib.sha256(normalized.encode()).hexdigest()[:16], 16))


def _find_meta(html, attr_type, attr_name):
    patterns = [
        rf'<meta[^>]+{attr_type}=["\']{ re.escape(attr_name)}["\'][^>]+content=["\']([^"\']*)["\']',
        rf'<meta[^>]+content=["\']([^"\']*)["\'][^>]+{attr_type}=["\']{ re.escape(attr_name)}["\']',
    ]
    for pattern in patterns:
        m = re.search(pattern, html, re.IGNORECASE)
        if m:
            return m.group(1).strip()
    return ""


def _extract_json_ld(html):
    result = {}
    try:
        matches = re.findall(
            r'<script[^>]*type=["\']application/ld\+json["\'][^>]*>(.*?)</script>',
            html, re.DOTALL | re.IGNORECASE
        )
        for match in matches:
            try:
                data = json.loads(match)
                article_types = (
                    "NewsArticle", "Article", "ReportageNewsArticle",
                    "BlogPosting", "WebPage"
                )

                if isinstance(data, list):
                    for item in data:
                        if isinstance(item, dict) and item.get("@type") in article_types:
                            data = item
                            break
                    else:
                        continue
                elif isinstance(data, dict) and "@graph" in data:
                    for item in data["@graph"]:
                        if isinstance(item, dict) and item.get("@type") in article_types:
                            data = item
                            break
                    else:
                        continue

                if not isinstance(data, dict):
                    continue
                if data.get("@type") not in article_types and "@type" in data:
                    continue

                if not result.get("title"):
                    result["title"] = data.get("headline") or data.get("name") or ""

                if not result.get("author"):
                    author = data.get("author")
                    if isinstance(author, dict):
                        result["author"] = author.get("name", "")
                    elif isinstance(author, list) and author:
                        names = [a.get("name", "") if isinstance(a, dict) else str(a) for a in author]
                        result["author"] = "; ".join(n for n in names if n)
                    elif isinstance(author, str):
                        result["author"] = author

                if not result.get("published_at"):
                    result["published_at"] = data.get("datePublished") or data.get("dateCreated") or ""

                if not result.get("description"):
                    result["description"] = data.get("description") or ""

                if not result.get("image_url"):
                    image = data.get("image")
                    if isinstance(image, dict):
                        result["image_url"] = image.get("url", "")
                    elif isinstance(image, list) and image:
                        first = image[0]
                        result["image_url"] = first.get("url", "") if isinstance(first, dict) else str(first)
                    elif isinstance(image, str):
                        result["image_url"] = image

                if not result.get("source"):
                    publisher = data.get("publisher")
                    if isinstance(publisher, dict):
                        result["source"] = publisher.get("name", "")

                if not result.get("tags"):
                    keywords = data.get("keywords")
                    if isinstance(keywords, list):
                        result["tags"] = "; ".join(str(k) for k in keywords if k)
                    elif isinstance(keywords, str):
                        result["tags"] = "; ".join(t.strip() for t in keywords.split(",") if t.strip())

            except (json.JSONDecodeError, TypeError):
                continue
    except Exception:
        pass
    return result


def _extract_og_meta(html):
    result = {}

    val = _find_meta(html, "property", "og:title")
    if val:
        result["title"] = val

    val = _find_meta(html, "property", "og:description")
    if val:
        result["description"] = val

    val = _find_meta(html, "property", "og:image")
    if val:
        result["image_url"] = val

    val = _find_meta(html, "property", "og:site_name")
    if val:
        result["source"] = val

    val = _find_meta(html, "property", "article:published_time")
    if val:
        result["published_at"] = val

    val = _find_meta(html, "property", "article:author") or _find_meta(html, "name", "author")
    if val:
        result["author"] = val

    if "description" not in result:
        val = _find_meta(html, "name", "description")
        if val:
            result["description"] = val

    if "title" not in result:
        m = re.search(r'<title[^>]*>([^<]+)</title>', html, re.IGNORECASE)
        if m:
            result["title"] = m.group(1).strip()

    tags = []
    for pattern in [
        r'<meta[^>]+property=["\']article:tag["\'][^>]+content=["\']([^"\']*)["\']',
        r'<meta[^>]+content=["\']([^"\']*)["\'][^>]+property=["\']article:tag["\']',
    ]:
        tags.extend(re.findall(pattern, html, re.IGNORECASE))
    if tags:
        result["tags"] = "; ".join(t.strip() for t in tags if t.strip())

    if "tags" not in result:
        val = _find_meta(html, "name", "keywords")
        if val:
            result["tags"] = "; ".join(t.strip() for t in val.split(",") if t.strip())

    return result


def _normalize_date(date_str):
    if not date_str or date_str == "-":
        return "-"

    date_str = date_str.strip()
    date_str = re.sub(r'(\+\d{2}):(\d{2})$', r'\1\2', date_str)

    formats = [
        "%Y-%m-%dT%H:%M:%S%z",
        "%Y-%m-%dT%H:%M:%SZ",
        "%Y-%m-%dT%H:%M:%S.%f%z",
        "%Y-%m-%dT%H:%M:%S.%fZ",
        "%Y-%m-%d %H:%M:%S%z",
        "%Y-%m-%d %H:%M:%S",
        "%Y-%m-%d",
        "%d/%m/%Y %H:%M:%S",
        "%d/%m/%Y",
        "%B %d, %Y",
        "%b %d, %Y",
        "%d %B %Y",
        "%d %b %Y",
    ]

    for fmt in formats:
        try:
            dt = datetime.strptime(date_str, fmt)
            if dt.tzinfo is None:
                dt = dt.replace(tzinfo=timezone.utc)
            wib_dt = dt.astimezone(WIB)
            return wib_dt.strftime("%a %b %d %H:%M:%S %z %Y")
        except ValueError:
            continue

    return "-"


def _is_dirty_source(source):
    low = source.lower()
    if any(x in low for x in ["copyright", "©", "all rights reserved", "powered by"]):
        return True
    if source.startswith("http://") or source.startswith("https://"):
        return True
    if len(source) > 60:
        return True
    return False


def extract_article(html, url):
    json_ld = _extract_json_ld(html)
    og_meta = _extract_og_meta(html)

    full_text = ""
    traf_meta = {}
    if trafilatura:
        try:
            extracted = trafilatura.extract(html, include_comments=False, include_tables=True, output_format="txt")
            if extracted:
                full_text = extracted.strip()
        except Exception:
            pass

        try:
            metadata = trafilatura.extract_metadata(html)
            if metadata:
                traf_meta = {
                    "title": getattr(metadata, "title", "") or "",
                    "author": getattr(metadata, "author", "") or "",
                    "description": getattr(metadata, "description", "") or "",
                    "source": getattr(metadata, "sitename", "") or "",
                    "published_at": getattr(metadata, "date", "") or "",
                    "image_url": getattr(metadata, "image", "") or "",
                }
        except Exception:
            pass

    def pick(field):
        val = json_ld.get(field) or og_meta.get(field) or traf_meta.get(field) or ""
        if isinstance(val, list):
            val = val[0] if val else ""
            if isinstance(val, dict):
                val = val.get("name", "") or val.get("url", "") or ""
        if not isinstance(val, str):
            val = str(val)
        return html_mod.unescape(val.strip())

    domain = urlparse(url).netloc.replace("www.", "")

    source = pick("source") or domain
    if _is_dirty_source(source):
        source = domain

    return {
        "article_id_str": generate_article_id(url),
        "url": url,
        "title": pick("title") or "-",
        "source": source,
        "author": pick("author") or "-",
        "published_at": _normalize_date(pick("published_at")),
        "description": pick("description") or "-",
        "full_text": full_text or "-",
        "image_url": pick("image_url") or "-",
        "tags": pick("tags") or "-",
    }
