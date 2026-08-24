# helpers/fb_types.py
import re
import pytz
from datetime import datetime


def parse_fb_post(story: dict) -> dict:
    def safe(val, default="-"):
        if val is None or val == "" or val == []:
            return default
        return val

    JKT = pytz.timezone("Asia/Jakarta")

    post_id = safe(str(story.get("post_id", "")))

    creation_time = story.get("creation_time")
    if creation_time:
        utc_time = datetime.utcfromtimestamp(creation_time).replace(tzinfo=pytz.utc)
        created_at = utc_time.astimezone(JKT).strftime("%a %b %d %H:%M:%S %z %Y")
    else:
        created_at = "-"

    actors = story.get("actors", [])
    actor = actors[0] if actors else {}
    user_id = safe(str(actor.get("id", "")))
    name = safe(actor.get("name", ""))
    profile_url = safe(actor.get("url", ""))

    username = _derive_username(profile_url)

    text = "-"
    try:
        cs = story.get("comet_sections", {})
        content = cs.get("content", {})
        inner_story = content.get("story", {})
        inner_cs = inner_story.get("comet_sections", {})
        msg_section = inner_cs.get("message", {})
        msg_story = msg_section.get("story", {})
        message = msg_story.get("message", {})
        text = safe(message.get("text", ""))
    except Exception:
        pass

    if isinstance(text, str):
        text = text.replace("\r", "\n").strip()

    mentions = re.findall(r'@([\w.]+)', text) if isinstance(text, str) and text != "-" else []
    mentions_str = ";".join([f"@{m}" for m in mentions]) if mentions else "-"

    hashtags = re.findall(r'#(\w+)', text) if isinstance(text, str) and text != "-" else []
    hashtags_str = ";".join([f"#{h}" for h in hashtags]) if hashtags else "-"

    reaction_count = 0
    like_count = 0
    love_count = 0
    haha_count = 0
    wow_count = 0
    sad_count = 0
    angry_count = 0
    care_count = 0
    comment_count = 0
    share_count = 0
    try:
        cs = story.get("comet_sections", {})
        fb_sec = cs.get("feedback", {})
        fb_story = fb_sec.get("story", {})
        ufi_container = fb_story.get("story_ufi_container", {})
        ufi_story = ufi_container.get("story", {})
        fb_ctx = ufi_story.get("feedback_context", {})
        ftc = fb_ctx.get("feedback_target_with_context", {})
        summary = ftc.get("comet_ufi_summary_and_actions_renderer", {})
        feedback = summary.get("feedback", {})

        rc = feedback.get("reaction_count", {})
        reaction_count = rc.get("count", 0) if isinstance(rc, dict) else 0

        tr = feedback.get("top_reactions", {})
        reaction_map = {"Like": 0, "Love": 0, "Haha": 0, "Wow": 0, "Sad": 0, "Angry": 0, "Care": 0}
        for e in tr.get("edges", []):
            rname = e.get("node", {}).get("localized_name", "")
            rcount = e.get("reaction_count", 0)
            if rname in reaction_map:
                reaction_map[rname] = rcount
        like_count = reaction_map["Like"]
        love_count = reaction_map["Love"]
        haha_count = reaction_map["Haha"]
        wow_count = reaction_map["Wow"]
        sad_count = reaction_map["Sad"]
        angry_count = reaction_map["Angry"]
        care_count = reaction_map["Care"]

        sc = feedback.get("share_count", {})
        share_count = sc.get("count", 0) if isinstance(sc, dict) else 0

        cri = feedback.get("comment_rendering_instance", {})
        if cri:
            comments = cri.get("comments", {})
            comment_count = comments.get("total_count", 0)
    except Exception:
        pass

    media_type = "text"
    media_url = "-"
    image_caption = "-"
    try:
        attachments = story.get("attachments", [])
        if attachments:
            first_att = attachments[0]
            media = first_att.get("media", {})
            mt = media.get("__typename", "")
            media_type = {"Photo": "image", "Video": "video"}.get(mt, "text")

            styles = first_att.get("styles", {})
            if styles:
                inner_att = styles.get("attachment", {})
                if inner_att:
                    inner_media = inner_att.get("media", {})
                    if inner_media:
                        photo_image = inner_media.get("photo_image", {})
                        if photo_image:
                            media_url = safe(photo_image.get("uri", ""))
                        image_caption = safe(inner_media.get("accessibility_caption", ""))
    except Exception:
        pass

    permalink = safe(story.get("permalink_url", ""))

    return {
        "post_id_str": post_id,
        "created_at": created_at,
        "user_id_str": user_id,
        "username": username,
        "name": name,
        "full_text": text,
        "user_mentions": mentions_str,
        "hashtags": hashtags_str,
        "reaction_count": reaction_count,
        "like_count": like_count,
        "love_count": love_count,
        "haha_count": haha_count,
        "wow_count": wow_count,
        "sad_count": sad_count,
        "angry_count": angry_count,
        "care_count": care_count,
        "comment_count": comment_count,
        "share_count": share_count,
        "media_type": media_type,
        "media_url": media_url,
        "image_caption": image_caption,
        "post_url": permalink,
    }


def parse_fb_user(story: dict) -> dict:
    def safe(val, default="-"):
        if val is None or val == "" or val == []:
            return default
        return val

    actors = story.get("actors", [])
    actor = actors[0] if actors else {}

    user_id = safe(str(actor.get("id", "")))
    name = safe(actor.get("name", ""))
    profile_url = safe(actor.get("url", ""))

    username = _derive_username(profile_url)

    return {
        "user_id_str": user_id,
        "username": username,
        "name": name,
        "follower_count": 0,
        "following_count": 0,
        "friend_count": 0,
        "category": "-",
        "biography": "-",
        "is_verified": False,
        "profile_pic_url": "-",
        "account_url": profile_url,
    }


def _parse_display_number(text: str) -> int:
    text = text.strip().replace(',', '')
    multipliers = {'K': 1_000, 'M': 1_000_000, 'B': 1_000_000_000}
    for suffix, mult in multipliers.items():
        if text.upper().endswith(suffix):
            try:
                return int(float(text[:-1]) * mult)
            except ValueError:
                return 0
    try:
        return int(float(text))
    except ValueError:
        return 0


def parse_fb_user_profile(html: str) -> dict | None:
    result = {}

    def decode_unicode(s):
        try:
            return s.encode('utf-8').decode('unicode_escape').encode('utf-16', 'surrogatepass').decode('utf-16')
        except Exception:
            return s

    # Followers — "10K followers" / "pengikut"
    m = re.search(r'"text":"([\d,.]+[KMB]?)\s+followers?"', html, re.IGNORECASE)
    if not m:
        m = re.search(r'"text":"([\d,.]+[KMB]?)\s+pengikut"', html, re.IGNORECASE)
    result["follower_count"] = _parse_display_number(m.group(1)) if m else 0

    # Following — "2.5K following" / "mengikuti"
    m = re.search(r'"text":"([\d,.]+[KMB]?)\s+following"', html, re.IGNORECASE)
    if not m:
        m = re.search(r'"text":"([\d,.]+[KMB]?)\s+mengikuti"', html, re.IGNORECASE)
    result["following_count"] = _parse_display_number(m.group(1)) if m else 0

    # Friends — "1,234 friends" / "teman"
    m = re.search(r'"text":"([\d,.]+[KMB]?)\s+friends?"', html, re.IGNORECASE)
    if not m:
        m = re.search(r'"text":"([\d,.]+[KMB]?)\s+teman"', html, re.IGNORECASE)
    result["friend_count"] = _parse_display_number(m.group(1)) if m else 0

    # Facebook Pages — "X people like this" / "X likes" / "X orang menyukai"
    if result["follower_count"] == 0:
        m = re.search(r'"text":"([\d,.]+[KMB]?)\s+(?:people like this|likes?|orang menyukai)"', html, re.IGNORECASE)
        if m:
            result["follower_count"] = _parse_display_number(m.group(1))

    # Category — "Digital creator", etc.
    m = re.search(r'"profile_field_type":"category".*?"text":"((?:[^"\\]|\\.)*)"', html)
    if m:
        result["category"] = decode_unicode(m.group(1)).strip() or "-"

    # Biography
    m = re.search(r'"bio_text":\{"text":"((?:[^"\\]|\\.)*)"', html)
    if m:
        result["biography"] = decode_unicode(m.group(1)).strip() or "-"
    else:
        result["biography"] = "-"

    # Name — hanya dari konteks profil user
    m = re.search(r'"__isProfile":"User","name":"((?:[^"\\]|\\.)*)"', html)
    if m:
        result["name"] = decode_unicode(m.group(1)).strip() or "-"

    # Verified
    m = re.search(r'"show_verified_badge_on_profile":(true|false)', html)
    if not m:
        m = re.search(r'"is_verified":(true|false)', html)
    if m:
        result["is_verified"] = m.group(1) == "true"

    # Profile pic
    m = re.search(r'"profilePicLarge":\{"uri":"((?:[^"\\]|\\.)*)"', html)
    if m:
        result["profile_pic_url"] = m.group(1).replace("\\/", "/")

    if all(v in (0, "-", False) for v in result.values()):
        return None

    return result


def _derive_username(profile_url: str) -> str:
    if not profile_url or profile_url == "-":
        return "-"
    if "profile.php?id=" in profile_url:
        m = re.search(r'id=(\d+)', profile_url)
        return m.group(1) if m else "-"
    parts = profile_url.rstrip("/").split("/")
    return parts[-1] if parts else "-"
