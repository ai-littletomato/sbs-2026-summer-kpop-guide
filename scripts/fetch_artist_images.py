#!/usr/bin/env python3
import html
import json
import os
import re
import shutil
import subprocess
import sys
import tempfile
import time
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
APP_JS = ROOT / "app.js"
ASSETS = ROOT / "assets" / "artists"
SOURCE_LOG = ASSETS / "image-sources.json"
POSTER = "assets/sbs-2026-summer-poster.jpg"

HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
        "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36"
    ),
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
}

GROUP_SLUGS = {
    "Picheolin": None,
    "Wonpil": None,
    "TAEYONG": None,
    "TEN": None,
    "BOL4": None,
    "BIBI": None,
    "YENA": None,
    "EVAN": None,
    "Stray Kids": "Stray-Kids",
    "ATEEZ": "ATEEZ",
    "xikers": "xikers",
    "ZEROBASEONE": "ZEROBASEONE",
    "RIIZE": "RIIZE",
    "NCT WISH": "NCT-WISH",
    "NEXZ": "NEXZ",
    "KickFlip": "KickFlip",
    "AxMxP": "AxMxP",
    "ALPHA DRIVE ONE": "ALPHA-DRIVE-ONE",
    "AND2BLE": "AND2BLE",
    "KISS OF LIFE": "KISS-OF-LIFE",
    "BABYMONSTER": "BABYMONSTER",
    "MEOVV": "MEOVV",
    "izna": "izna",
    "Hearts2Hearts": "Hearts2Hearts",
    "ALLDAY PROJECT": "ALLDAY-PROJECT",
    "Baby DONT Cry": "Baby-DONT-Cry",
    "IDID": "IDID",
}

SOLO_SLUGS = {
    "Picheolin": "Dino",
    "Wonpil": "Wonpil",
    "TAEYONG": "Taeyong",
    "TEN": "Ten",
    "BOL4": "Ahn-Ji-young",
    "BIBI": "BIBI",
    "YENA": "Choi-Yena",
    "EVAN": "Heeseung",
}

MEMBER_SLUG_OVERRIDES = {
    "I.N": "IN",
    "Ahn Ji-young": "Ahn-Ji-young",
    "Ha Yoo-joon": "Ha-Yoo-Joon",
    "Haru": "Haru9",
    "Han Yu-jin": "Han-Yu-Jin",
    "Hyunjin": "Hyunjin2",
    "Jang Yong-hoon": "Jang-Yong-Hoon",
    "Jeong Sae-bi": "Jeong-Saebi",
    "Jeong Se-min": "Jeong-Se-Min",
    "Kim Ji-woong": "Kim-Jiwoong",
    "Kim Gyu-vin": "Kim-Gyu-Vin",
    "Kim Min-jae": "Kim-Min-Jae",
    "Kim Tae-rae": "Kim-Tae-Rae",
    "Minje": "Minje-KickFlip",
    "Park Gun-wook": "Park-Gun-Wook",
    "Park Seong-hyeon": "Park-Seong-Hyeon",
    "Park Won-bin": "Park-Won-Bin",
    "Ryu Sa-rang": "Ryu-Sarang",
    "Sohee": "Sohee9",
    "Sung Han-bin": "Sung-Hanbin",
    "Chu Yoo-chan": "Chu-Yoo-Chan",
    "Baek Jun-hyuk": "Baek-Jun-Hyuk",
    "TAEYONG": "Taeyong",
    "TEN": "Ten",
    "EVAN": "Heeseung",
    "Ian": "Ian5",
    "Jiwoo": "Jiwoo10",
    "Yoo Seung-eon": "Yoo-Seung-Eon",
    "YENA": "Choi-Yena",
    "Yechan": "Yechan4",
    "Yuki": "Yuki5",
    "A-na": "A-na",
    "Bang Jee-min": "Bang-Jeemin",
    "Choi Jung-eun": "Choi-Jungeun",
}

MANUAL_IMAGE_URLS = {
    ("axmxp", "member", "Ha Yoo-joon"): "https://pic3.iqiyipic.com/image/20250604/57/1a/p_2293893512340805_m_601_600_600.jpg",
    ("kickflip", "member", "Minje"): "https://dispatch.cdnser.be/cms-content/uploads/2025/01/06/cf45bcda-b559-4edc-bfd2-ffb419e0e8b4.jpg",
    ("stray-kids", "member", "I.N"): "https://media.vogue.co.jp/photos/681c50df939006f8b163ebca/master/w_1600%2Cc_limit/01-0182.jpg",
    ("xikers", "member", "Sumin"): "https://xikers-official.jp/s3/skiyaki/uploads/artist_photo/image/26420/03_%E1%84%89%E1%85%AE%E1%84%86%E1%85%B5%E1%86%AB__SUMIN_.jpg",
    ("xikers", "member", "Seeun"): "https://xikers-official.jp/s3/skiyaki/uploads/artist_photo/image/26428/07_%E1%84%89%E1%85%A6%E1%84%8B%E1%85%B3%E1%86%AB__SEEUN_.jpg",
}


def slugify(value):
    return re.sub(r"(^-|-$)", "", re.sub(r"[^a-z0-9]+", "-", value.lower()))

def kpopping_slug(value):
    return MEMBER_SLUG_OVERRIDES.get(value, re.sub(r"(^-|-$)", "", re.sub(r"[^A-Za-z0-9]+", "-", value)))


def read_artists():
    text = APP_JS.read_text(encoding="utf-8")
    blocks = re.findall(r"\{\n\s+id: \"([^\"]+)\",\n\s+name: \"([^\"]+)\".*?members: makeMembers\(\"[^\"]+\", \[(.*?)\]\)", text, re.S)
    artists = []
    for artist_id, name, member_blob in blocks:
        members = re.findall(r"\"([^\"]+)\"", member_blob)
        artists.append({"id": artist_id, "name": name, "members": members})
    return artists


def bing_image_urls(query, limit=16):
    url = "https://www.bing.com/images/search?q=" + urllib.parse.quote(query) + "&form=HDRSC2&first=1"
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=25) as res:
        body = res.read().decode("utf-8", errors="ignore")

    urls = []
    patterns = [
        r'"murl"\s*:\s*"([^"]+)"',
        r"murl&quot;\s*:\s*&quot;([^&]+)&quot;",
        r"mediaurl=([^&\"']+)",
    ]
    for pattern in patterns:
        for match in re.findall(pattern, body):
            candidate = html.unescape(urllib.parse.unquote(match)).replace("\\/", "/")
            if candidate.startswith("http") and candidate not in urls:
                urls.append(candidate)
            if len(urls) >= limit:
                return urls
    return urls


def download(url, destination):
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=30) as res:
        content_type = res.headers.get("Content-Type", "")
        data = res.read()
    if not content_type.startswith("image/") and len(data) < 2000:
        raise ValueError(f"not an image: {content_type}")

    destination.parent.mkdir(parents=True, exist_ok=True)
    with tempfile.NamedTemporaryFile(delete=False) as tmp:
        tmp.write(data)
        tmp_path = Path(tmp.name)

    try:
        result = subprocess.run(
            ["sips", "-s", "format", "jpeg", str(tmp_path), "--out", str(destination)],
            cwd=ROOT,
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
            check=False,
        )
        if result.returncode != 0 or not destination.exists() or destination.stat().st_size < 2000:
            shutil.copyfile(tmp_path, destination)
        if not destination.exists() or destination.stat().st_size < 15000:
            try:
                destination.unlink()
            except OSError:
                pass
            raise ValueError("downloaded image is too small")
    finally:
        try:
            tmp_path.unlink()
        except OSError:
            pass

def first_decoded_image_url(page_html, contains):
    seen = []
    for match in re.findall(r"url=([^&\"']+)(?:&amp;|&)w=", page_html):
        candidate = html.unescape(urllib.parse.unquote(match))
        if contains in candidate and candidate not in seen:
            seen.append(candidate)
    return seen[0] if seen else None


def kpopping_image_url(artist, kind, member=None):
    name = artist["name"]
    if kind == "cover":
        group_slug = GROUP_SLUGS.get(name)
        if group_slug:
            page_url = f"https://kpopping.com/profiles/group/{group_slug}"
            contains = f"/groups/{group_slug}/profile"
        else:
            idol_slug = SOLO_SLUGS.get(name) or kpopping_slug(name)
            page_url = f"https://kpopping.com/profiles/idol/{idol_slug}"
            contains = f"/idols/{idol_slug}/profile"
    else:
        idol_slug = kpopping_slug(member)
        page_url = f"https://kpopping.com/profiles/idol/{idol_slug}"
        contains = f"/idols/{idol_slug}/profile"

    req = urllib.request.Request(page_url, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=25) as res:
        page_html = res.read().decode("utf-8", errors="ignore")
    return first_decoded_image_url(page_html, contains)


def fetch_one(kind, artist, member=None, force=False):
    artist_id = artist["id"]
    name = artist["name"]
    if kind == "cover":
        destination = ASSETS / artist_id / "cover.jpg"
        queries = [
            f"{name} official group photo 2026 concept photo",
            f"{name} latest official group photo Kpop",
            f"{name} profile photo group Kpop",
        ]
    else:
        destination = ASSETS / artist_id / "members" / f"{slugify(member)}.jpg"
        queries = [
            f"{member} {name} official profile photo 2026",
            f"{member} {name} concept photo Kpop",
            f"{member} {name} profile image",
        ]

    if destination.exists() and not force:
        return {"path": str(destination.relative_to(ROOT)), "status": "exists"}

    manual_url = MANUAL_IMAGE_URLS.get((artist_id, kind, member or ""))
    if manual_url:
        download(manual_url, destination)
        return {
            "path": str(destination.relative_to(ROOT)),
            "status": "downloaded",
            "query": "manual official/profile source",
            "source": manual_url,
        }

    try:
        url = kpopping_image_url(artist, kind, member)
        if url:
            download(url, destination)
            return {
                "path": str(destination.relative_to(ROOT)),
                "status": "downloaded",
                "query": "kpopping profile",
                "source": url,
            }
    except Exception:
        pass

    for query in queries:
        try:
            urls = bing_image_urls(query)
        except Exception as exc:
            last_error = f"search failed: {exc}"
            continue

        for url in urls:
            lower = url.lower()
            if any(blocked in lower for blocked in ["youtube.com", "ytimg.com", "logo", "sprite", "favicon"]):
                continue
            try:
                download(url, destination)
                return {
                    "path": str(destination.relative_to(ROOT)),
                    "status": "downloaded",
                    "query": query,
                    "source": url,
                }
            except Exception as exc:
                last_error = f"download failed: {exc}"
                continue
        time.sleep(0.35)

    return {"path": str(destination.relative_to(ROOT)), "status": "missing", "error": locals().get("last_error", "no image candidates")}


def main():
    force = "--force" in sys.argv
    artists = read_artists()
    ASSETS.mkdir(parents=True, exist_ok=True)
    log = {"generatedAt": time.strftime("%Y-%m-%dT%H:%M:%S"), "images": []}

    for artist in artists:
        print(f"cover {artist['name']}", flush=True)
        log["images"].append({"artist": artist["name"], "kind": "cover", **fetch_one("cover", artist, force=force)})
        for member in artist["members"]:
            print(f"member {artist['name']} / {member}", flush=True)
            log["images"].append({"artist": artist["name"], "member": member, "kind": "member", **fetch_one("member", artist, member, force=force)})

    SOURCE_LOG.write_text(json.dumps(log, ensure_ascii=False, indent=2), encoding="utf-8")
    missing = [item for item in log["images"] if item["status"] == "missing"]
    print(f"done: {len(log['images']) - len(missing)} ok, {len(missing)} missing")


if __name__ == "__main__":
    main()
