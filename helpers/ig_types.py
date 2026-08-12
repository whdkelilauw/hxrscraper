# helpers/ig_types.py
import re
import pytz
from datetime import datetime


def parse_ig_post(node: dict) -> dict:
    def safe(val, default="-"):
        if val is None or val == "" or val == []:
            return default
        return val

    JKT = pytz.timezone("Asia/Jakarta")

    post_id = safe(str(node.get("pk", "")))
    code = safe(node.get("code", ""))

    taken_at = node.get("taken_at")
    if taken_at:
        utc_time = datetime.utcfromtimestamp(taken_at).replace(tzinfo=pytz.utc)
        created_at = utc_time.astimezone(JKT).strftime("%a %b %d %H:%M:%S %z %Y")
    else:
        created_at = "-"

    user = node.get("user", {}) or {}
    user_id = safe(str(user.get("pk", "")))
    username = safe(user.get("username", ""))
    full_name = safe(user.get("full_name", ""))

    caption = node.get("caption", {}) or {}
    full_text = safe(caption.get("text", ""))

    if isinstance(full_text, str):
        full_text = full_text.replace("\r", "\n").strip()

    mentions = re.findall(r'@([\w.]+)', full_text) if isinstance(full_text, str) else []
    mentions_str = ";".join([f"@{m}" for m in mentions]) if mentions else "-"

    hashtags = re.findall(r'#(\w+)', full_text) if isinstance(full_text, str) else []
    hashtags_str = ";".join([f"#{h}" for h in hashtags]) if hashtags else "-"

    like_count = safe(node.get("like_count", 0), "0")
    comment_count = safe(node.get("comment_count", 0), "0")

    media_type = node.get("media_type", 0)
    media_type_str = {1: "image", 2: "video", 8: "carousel"}.get(media_type, "unknown")

    media_url = "-"
    image_versions = node.get("image_versions2", {}) or {}
    candidates = image_versions.get("candidates", [])
    if candidates:
        media_url = safe(candidates[0].get("url", ""))

    post_url = (
        f"https://www.instagram.com/p/{code}/"
        if code != "-"
        else "-"
    )

    return {
        "post_id_str": post_id,
        "created_at": created_at,
        "user_id_str": user_id,
        "username": username,
        "name": full_name,
        "full_text": full_text,
        "user_mentions": mentions_str,
        "hashtags": hashtags_str,
        "like_count": like_count,
        "comment_count": comment_count,
        "media_type": media_type_str,
        "media_url": media_url,
        "post_url": post_url,
    }


def parse_ig_user(node: dict) -> dict:
    def safe(val, default="-"):
        if val is None or val == "" or val == []:
            return default
        return val

    user = node.get("user", {}) or {}

    return {
        "user_id_str": safe(str(user.get("pk", ""))),
        "username": safe(user.get("username", "")),
        "name": safe(user.get("full_name", "")),
        "is_verified": user.get("is_verified", False),
        "is_private": user.get("is_private", False),
        "follower_count": 0,
        "following_count": 0,
        "media_count": 0,
        "biography": "-",
        "bio_link": "-",
        "category": "-",
        "profile_pic_url": safe(user.get("profile_pic_url", "")),
        "account_url": f"https://www.instagram.com/{safe(user.get('username', ''))}/",
    }


def parse_ig_user_profile(data: dict) -> dict | None:
    user = data.get("data", {}).get("user")
    if not user:
        return None

    def safe(val, default="-"):
        if val is None or val == "" or val == []:
            return default
        return val

    bio_links = user.get("bio_links", []) or []
    bio_link = "-"
    if bio_links:
        bio_link = safe(bio_links[0].get("url", ""))
    if bio_link == "-":
        bio_link = safe(user.get("external_url", ""))

    return {
        "follower_count": user.get("follower_count", 0),
        "following_count": user.get("following_count", 0),
        "media_count": user.get("media_count", 0),
        "name": safe(user.get("full_name", "")),
        "biography": safe(user.get("biography", "")),
        "bio_link": bio_link,
        "is_verified": user.get("is_verified", False),
        "is_private": user.get("is_private", False),
        "category": safe(user.get("category", "")),
    }


def parse_ig_comment(node: dict) -> dict:
    def safe(val, default="-"):
        if val is None or val == "" or val == []:
            return default
        return val

    JKT = pytz.timezone("Asia/Jakarta")

    comment_id = safe(str(node.get("pk", "")))

    created_at_ts = node.get("created_at")
    if created_at_ts:
        utc_time = datetime.utcfromtimestamp(created_at_ts).replace(tzinfo=pytz.utc)
        created_at = utc_time.astimezone(JKT).strftime("%a %b %d %H:%M:%S %z %Y")
    else:
        created_at = "-"

    user = node.get("user", {}) or {}
    user_id = safe(str(user.get("pk", "")))
    username = safe(user.get("username", ""))

    full_text = safe(node.get("text", ""))
    if isinstance(full_text, str):
        full_text = full_text.replace("\r", "\n").strip()

    giphy = node.get("giphy_media_info")
    if giphy and (not full_text or full_text == "-"):
        gif_url = "-"
        images = giphy.get("images") or giphy.get("first_party_cdn_proxied_images") or {}
        fixed = images.get("fixed_height") or {}
        gif_url = fixed.get("url", "-")
        full_text = f"[GIF] {gif_url}" if gif_url != "-" else "[GIF]"

    mentions = re.findall(r'@([\w.]+)', full_text) if isinstance(full_text, str) else []
    mentions_str = ";".join([f"@{m}" for m in mentions]) if mentions else "-"

    hashtags = re.findall(r'#(\w+)', full_text) if isinstance(full_text, str) else []
    hashtags_str = ";".join([f"#{h}" for h in hashtags]) if hashtags else "-"

    parent_comment_id = node.get("parent_comment_id")
    relation_type = "reply" if parent_comment_id else "comment"
    parent_id_str = str(parent_comment_id) if parent_comment_id else "-"

    return {
        "comment_id_str": comment_id,
        "created_at": created_at,
        "user_id_str": user_id,
        "username": username,
        "full_text": full_text,
        "user_mentions": mentions_str,
        "hashtags": hashtags_str,
        "comment_like_count": node.get("comment_like_count", 0),
        "reply_count": node.get("child_comment_count") or 0,
        "parent_comment_id_str": parent_id_str,
        "relation_type": relation_type,
    }


def parse_ig_comment_user(node: dict) -> dict:
    def safe(val, default="-"):
        if val is None or val == "" or val == []:
            return default
        return val

    user = node.get("user", {}) or {}
    username = safe(user.get("username", ""))
    return {
        "user_id_str": safe(str(user.get("pk", ""))),
        "username": username,
        "name": "-",
        "is_verified": user.get("is_verified", False),
        "is_private": False,
        "follower_count": 0,
        "following_count": 0,
        "media_count": 0,
        "biography": "-",
        "bio_link": "-",
        "category": "-",
        "profile_pic_url": safe(user.get("profile_pic_url", "")),
        "account_url": f"https://www.instagram.com/{username}/" if username != "-" else "-",
    }


def _find_key(obj, target_key):
    if isinstance(obj, dict):
        if target_key in obj:
            return obj[target_key]
        for v in obj.values():
            result = _find_key(v, target_key)
            if result is not None:
                return result
    elif isinstance(obj, list):
        for item in obj:
            result = _find_key(item, target_key)
            if result is not None:
                return result
    return None


def extract_ssr_comments(html: str) -> list:
    import json as _json

    comments = []
    pattern = r'<script[^>]*data-sjs[^>]*>(.*?)</script>'
    matches = re.findall(pattern, html, re.DOTALL)

    for match in matches:
        if 'xdt_api__v1__media__media_id__comments__connection' not in match:
            continue
        try:
            data = _json.loads(match)
            connection = _find_key(data, 'xdt_api__v1__media__media_id__comments__connection')
            if connection:
                edges = connection.get('edges', [])
                for edge in edges:
                    node = edge.get('node', {})
                    if node:
                        comments.append(node)
                break
        except Exception:
            continue

    return comments
