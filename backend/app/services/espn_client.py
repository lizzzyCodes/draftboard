import requests

ESPN_TEAMS_URL = (
    "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams"
)


def _hex(value: str | None) -> str | None:
    if not value:
        return None
    return f"#{value.lstrip('#').upper()}"


def fetch_teams() -> list[dict]:
    resp = requests.get(ESPN_TEAMS_URL, timeout=15)
    resp.raise_for_status()
    data = resp.json()

    teams_raw = data["sports"][0]["leagues"][0]["teams"]
    teams = []
    for entry in teams_raw:
        t = entry["team"]
        logos = t.get("logos") or []
        teams.append({
            "espn_id": t.get("id"),
            "abbreviation": t.get("abbreviation"),
            "name": t.get("displayName"),
            "color": _hex(t.get("color")),
            "alternate_color": _hex(t.get("altepsrnateColor")),
            "logo_url": logos[0]["href"] if logos else None,
        })
    return teams