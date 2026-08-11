# helpers/thread_types.py
import re
import pytz
from datetime import datetime


def parse_thread_post(post: dict, thread_id: str = None) -> dict:
    def safe(val, default="-"):
        if val is None or val == "" or val == []:
            return default
        return val

    JKT = pytz.timezone("Asia/Jakarta")

    post_id = safe(str(post.get("pk", "")))
    code = safe(post.get("code", ""))

    taken_at = post.get("taken_at")
    if taken_at:
        utc_time = datetime.utcfromtimestamp(taken_at).replace(tzinfo=pytz.utc)
        created_at = utc_time.astimezone(JKT).strftime("%a %b %d %H:%M:%S %z %Y")
    else:
        created_at = "-"

    user = post.get("user", {}) or {}
    user_id = safe(str(user.get("pk", "")))
    username = safe(user.get("username", ""))
    full_name = safe(user.get("full_name", ""))

    caption = post.get("caption", {}) or {}
    full_text = safe(caption.get("text", ""))

    if full_text == "-":
        text_info = post.get("text_post_app_info", {}) or {}
        fragments = text_info.get("text_fragments", {}) or {}
        parts = []
        for frag in fragments.get("fragments", []):
            if frag.get("plaintext"):
                parts.append(frag["plaintext"])
            elif frag.get("mention_fragment"):
                parts.append(f"@{frag['mention_fragment'].get('username', '')}")
        if parts:
            full_text = "".join(parts)

    if isinstance(full_text, str):
        full_text = full_text.replace("\r", "\n").strip()

    mentions = re.findall(r'@([\w.]+)', full_text) if isinstance(full_text, str) else []
    mentions_str = ";".join([f"@{m}" for m in mentions]) if mentions else "-"

    hashtags = re.findall(r'#(\w+)', full_text) if isinstance(full_text, str) else []
    hashtags_str = ";".join([f"#{h}" for h in hashtags]) if hashtags else "-"

    text_info = post.get("text_post_app_info", {}) or {}
    like_count = safe(post.get("like_count", 0), "0")
    reply_count = safe(text_info.get("direct_reply_count", 0), "0")
    repost_count = safe(text_info.get("repost_count", 0), "0")
    quote_count = safe(text_info.get("quote_count", 0), "0")
    share_count = safe(text_info.get("reshare_count", 0), "0")

    media_type = post.get("media_type", 0)
    media_type_str = {1: "image", 2: "video", 8: "carousel"}.get(media_type, "text")

    media_url = "-"
    image_versions = post.get("image_versions2", {}) or {}
    candidates = image_versions.get("candidates", [])
    if candidates:
        media_url = safe(candidates[0].get("url", ""))

    post_url = (
        f"https://www.threads.com/@{username}/post/{code}"
        if username != "-" and code != "-"
        else "-"
    )

    is_reply = text_info.get("is_reply", False)

    share_info = text_info.get("share_info", {}) or {}
    quoted_post = share_info.get("quoted_post")
    reposted_post = share_info.get("reposted_post")

    relation_type = "-"
    target_post_id = "-"
    target_username = "-"
    if reposted_post:
        relation_type = "reposted"
        target_post_id = safe(str(reposted_post.get("pk", "")))
        target_username = safe((reposted_post.get("user") or {}).get("username", ""))
    elif is_reply:
        relation_type = "replied"
        reply_to = text_info.get("reply_to_author", {}) or {}
        target_username = safe(reply_to.get("username", ""))
        if thread_id and str(thread_id) != post_id:
            target_post_id = str(thread_id)
    elif quoted_post:
        relation_type = "quoted"
        target_post_id = safe(str(quoted_post.get("pk", "")))
        target_username = safe((quoted_post.get("user") or {}).get("username", ""))

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
        "reply_count": reply_count,
        "repost_count": repost_count,
        "quote_count": quote_count,
        "share_count": share_count,
        "media_type": media_type_str,
        "media_url": media_url,
        "post_url": post_url,
        "relation_type": relation_type,
        "target_post_id_str": target_post_id,
        "target_username": target_username,
    }


def parse_thread_user(post: dict) -> dict:
    def safe(val, default="-"):
        if val is None or val == "" or val == []:
            return default
        return val

    user = post.get("user", {}) or {}

    return {
        "user_id_str": safe(str(user.get("pk", ""))),
        "username": safe(user.get("username", "")),
        "name": safe(user.get("full_name", "")),
        "is_verified": user.get("is_verified", False),
        "follower_count": 0,
        "biography": "-",
        "bio_link": "-",
        "view_count": 0,
        "profile_tag": "-",
        "profile_pic_url": safe(user.get("profile_pic_url", "")),
        "is_private": user.get("text_post_app_is_private", False),
        "account_url": f"https://www.threads.com/@{safe(user.get('username', ''))}",
    }


def parse_thread_user_profile(html: str) -> dict | None:
    """Extract user detail dari SSR script tag di profile page HTML."""
    match = re.search(r'"follower_count":(\d+)', html)
    if not match:
        return None

    result = {}

    def decode_unicode(s):
        try:
            return s.encode('utf-8').decode('unicode_escape').encode('utf-16', 'surrogatepass').decode('utf-16')
        except Exception:
            return s

    result["follower_count"] = int(match.group(1))

    m = re.search(r'"biography":"((?:[^"\\]|\\.)*)"', html)
    result["biography"] = decode_unicode(m.group(1)).strip() or "-" if m else "-"

    m = re.search(r'"full_name":"((?:[^"\\]|\\.)*)"', html)
    result["name"] = decode_unicode(m.group(1)).strip() or "-" if m else "-"

    m = re.search(r'"bio_links":\[(\{[^]]*\})\]', html)
    if m:
        url_match = re.search(r'"url":"((?:[^"\\]|\\.)*)"', m.group(1))
        result["bio_link"] = (url_match.group(1).strip() or "-") if url_match else "-"
    else:
        result["bio_link"] = "-"

    m = re.search(r'"is_verified":(true|false)', html)
    if m:
        result["is_verified"] = m.group(1) == "true"

    m = re.search(r'"text_post_app_public_view_count":"(\d+)"', html)
    result["view_count"] = int(m.group(1)) if m else 0

    m = re.search(r'"profile_tags":\{"edges":\[\{"node":\{"display_name":"([^"]+)"', html)
    result["profile_tag"] = m.group(1) if m else "-"

    return result
