# helpers/tweet_types.py
import pytz
from datetime import datetime

def normalize_tweet_result(result: dict) -> dict:
    """
    Menormalkan GraphQL tweet result:
    - Tweet normal
    - TweetWithVisibilityResults
    - Selain itu → {}
    """
    if not isinstance(result, dict):
        return {}

    # Tweet normal
    if "legacy" in result and "core" in result:
        return result

    # Visibility wrapper
    if result.get("__typename") == "TweetWithVisibilityResults":
        return result.get("tweet", {})

    return {}

def get_child_tweets(tweet_result: dict):
    children = []

    if not tweet_result:
        return children

    legacy = tweet_result.get("legacy", {})

    # Retweet
    rt = normalize_tweet_result(
        legacy.get("retweeted_status_result", {}).get("result")
    )
    if rt:
        children.append(("retweeted", rt))

    # Quote
    qt = normalize_tweet_result(
        tweet_result.get("quoted_status_result", {}).get("result")
    )
    if qt:
        children.append(("quoted", qt))

    return children

def extract_all_tweet_blocks_recursive(
    tweet_result: dict,
    source_id: str = None,
    relation: str = "main",
    blocks=None,
    depth=0,
    max_depth=3
):
    if blocks is None:
        blocks = []

    if not tweet_result or depth > max_depth:
        return blocks

    tweet_id = tweet_result.get("rest_id")

    blocks.append({
        "block": tweet_result,
        "relation": relation,
        "source_tweet_id": source_id
    })

    for rel, child in get_child_tweets(tweet_result):
        extract_all_tweet_blocks_recursive(
            child,
            source_id=tweet_id,
            relation=rel,
            blocks=blocks,
            depth=depth + 1,
            max_depth=max_depth
        )

    return blocks


def parse_tweet(tweet: dict) -> dict:
    """
    Mengekstrak dan merapikan data mentah tweet hasil scraping Playwright.
    Mengambil field penting seperti teks, user, relasi antar tweet (reply, quote, retweet), 
    serta informasi tambahan seperti media, hashtag, dan jumlah interaksi.
    """

    legacy = tweet.get("legacy", {})

    # Fungsi memastikan nilai tidak kosong / None
    def safe(val, default="-"):
        if val is None or val == "" or val == []:
            return default
        return val
    
    # Fungsi convert timezone to jakarta
    JKT = pytz.timezone("Asia/Jakarta")
    def to_wib(created_at: str) -> str:
        if not created_at:
            return "-"
        utc_time = datetime.strptime(created_at, "%a %b %d %H:%M:%S %z %Y")
        return utc_time.astimezone(JKT).strftime("%a %b %d %H:%M:%S %z %Y")
    
    # Extract full_text atau note_tweet (tweet dengan text panjang)
    def extract_full_text(tweet_block: dict) -> str:
        note = (
            tweet_block.get("note_tweet", {})
            .get("note_tweet_results", {})
            .get("result", {})
        )
        if note:
            text = note.get("text", "")
        else:
            text = tweet_block.get("legacy", {}).get("full_text", "")
        return text.replace("\r", "\n").strip()
    
    # Extract entities dari legacy atau note_tweet
    def extract_entities(tweet_block: dict):
        note = (
            tweet_block.get("note_tweet", {})
            .get("note_tweet_results", {})
            .get("result", {})
        )

        if note:
            return note.get("entity_set", {})
        return tweet_block.get("legacy", {}).get("entities", {})


    # Ambil ID dan waktu pembuatan tweet
    tweet_id = safe(tweet.get("rest_id"))
    created_at = safe(to_wib(legacy.get("created_at")))

    # Ambil full_text
    full_text = safe(extract_full_text(tweet))
    
    # Ambil info dasar pengguna dari blok 'core'
    core_user = (
        tweet.get("core", {})
        .get("user_results", {})
        .get("result", {})
        .get("core", {})
    )

    user_id = safe(legacy.get("user_id_str"))
    username = safe(core_user.get("screen_name"))
    name = safe(core_user.get("name"))

    # Lokasi pengguna
    location = (
        tweet.get("core", {})
        .get("user_results", {})
        .get("result", {})
        .get("location", {})
    )
    user_location = safe(location.get("location"))
    
    # Bahasa tweet
    user_language = safe(legacy.get("lang", ""))
    
    # Kumpulan mention dalam tweet
    mentions = []
    entities_used = extract_entities(tweet)
    user_mentions = entities_used.get("user_mentions", [])
    mentions = [safe(f"@{m.get('screen_name', '')}") for m in user_mentions]

    # Kumpulan hashtag dalam tweet
    tags = []
    hashtags = entities_used.get("hashtags", [])
    tags = [safe(f"#{m.get('text', '')}") for m in hashtags]

    # Statistik interaksi tweet
    quote_count = safe(legacy.get("quote_count", 0), "0")
    favorite_count = safe(legacy.get("favorite_count", 0), "0")
    reply_count = safe(legacy.get("reply_count", 0), "0")
    retweet_count = safe(legacy.get("retweet_count", 0), "0")
    bookmark_count = safe(legacy.get("bookmark_count", 0), "0")

    # Jumlah tayangan (views)
    views = tweet.get("views", {})
    views_count = safe(views.get("count", 0), "0")

    # Ambil media (gambar/video) kalau ada
    media_entities  = legacy.get("entities", {})
    media = media_entities.get("media", [])
    media_url = "-"
    if media:
        media_url = safe(media[0].get("media_url_https"))

    # Bangun URL tweet berdasarkan username dan ID
    tweet_url = (
        f"https://x.com/{username}/status/{tweet_id}"
        if username != "-" and tweet_id != "-"
        else "-"
    )

    # Fungsi bantu untuk ambil username target dari blok nested
    def extract_target_screen_name(block):
        return(
            block.get("core", {})
            .get("user_results", {})
            .get("result", {})
            .get("core", {})
            .get("screen_name", "")
        )

    # Deteksi jenis relasi antar tweet (reply, quote, retweet)
    replied = legacy.get("in_reply_to_status_id_str", "")
    quoted = normalize_tweet_result(tweet.get("quoted_status_result", {}).get("result", {}))
    retweeted = legacy.get("retweeted_status_result", {}).get("result", {})

    relation_type = "-"
    target_tweet_id_str = "-"
    target_username = "-"
    if retweeted:
        relation_type = "retweeted"
        target_tweet_id_str = retweeted.get("rest_id", "")
        target_username = extract_target_screen_name(retweeted)

        rt_text = extract_full_text(retweeted)
        full_text = safe(f"RT @{target_username}: {rt_text}")
        
    elif replied:
        relation_type = "replied"
        target_tweet_id_str = replied
        target_username = legacy.get("in_reply_to_screen_name", "")

    elif quoted:
        relation_type = "quoted"
        target_tweet_id_str = quoted.get("rest_id", "")
        target_username = extract_target_screen_name(quoted)

    # Kembalikan data tweet dalam format dictionary yang rapi
    return {
        "tweet_id_str": tweet_id,
        "created_at": created_at,
        "user_id_str": user_id,
        "username": username,
        "name": name,
        "full_text": full_text,
        "user_mentions": ";".join(mentions) if mentions else "-",
        "hashtags": ";".join(tags) if tags else "-",
        "location": user_location,
        "lang": user_language,
        "quote_count": quote_count,
        "views_count": views_count,
        "favorite_count": favorite_count,
        "reply_count": reply_count,
        "retweet_count": retweet_count,
        "bookmark_count": bookmark_count,
        "media_url_https": media_url,
        "tweet_url": tweet_url,
        "relation_type": relation_type,
        "target_tweet_id_str": target_tweet_id_str,
        "target_username": target_username,
    }


def parse_user(tweet: dict) -> dict:
    """
    Mengekstrak informasi detail pengguna dari objek tweet.
    Biasanya digunakan untuk menyimpan data user unik dalam file CSV terpisah.
    """

    def safe(val, default="-"):
        if val is None or val == "" or val == []:
            return default
        return val
    
    legacy = tweet.get("legacy", {})
    
    # Ambil data inti pengguna (ID, nama, username)
    core_user = (
        tweet.get("core", {})
        .get("user_results", {})
        .get("result", {})
        .get("core", {})
    )

    # Ambil avatar / foto profil
    avatar_user = (
        tweet.get("core", {})
        .get("user_results", {})
        .get("result", {})
        .get("avatar", {})
    )

    # Ambil statistik dan data umum pengguna
    legacy_user = (
        tweet.get("core", {})
        .get("user_results", {})
        .get("result", {})
        .get("legacy", {})
    )
    
    # Lokasi pengguna (jika tersedia)
    location_user = (
        tweet.get("core", {})
        .get("user_results", {})
        .get("result", {})
        .get("location", {})
    )

    # Bangun URL akun pengguna (link ke profil X/Twitter)
    account_url = (
        f"https://x.com/{safe(core_user.get('screen_name'))}"
    )
    
    # Kembalikan data user dalam bentuk dictionary
    return {
        "created_at": safe(core_user.get("created_at")),
        "user_id_str": safe(legacy.get("user_id_str")),
        "username": safe(core_user.get("screen_name")),
        "name": safe(core_user.get("name")),
        "fast_followers_count": safe(legacy_user.get("fast_followers_count", 0), "0"),
        "favourites_count": safe(legacy_user.get("favourites_count", 0), "0"),
        "followers_count": safe(legacy_user.get("followers_count", 0), "0"),
        "following_count": safe(legacy_user.get("friends_count", 0), "0"),
        "listed_count": safe(legacy_user.get("listed_count", 0), "0"),
        "media_count": safe(legacy_user.get("media_count", 0), "0"),
        "normal_followers_count": safe(legacy_user.get("normal_followers_count", 0), "0"),
        "statuses_count": safe(legacy_user.get("statuses_count", 0), "0"),
        "url": safe(legacy_user.get("url")),
        "location": safe(location_user.get("location")),
        "image_url": safe(avatar_user.get("image_url")),
        "account_url": account_url
    }
