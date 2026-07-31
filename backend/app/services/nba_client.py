from nba_api.stats.endpoints import draftcombinestats, draftcombineplayeranthro, shotchartdetail, commonplayerinfo, playercareerstats

def get_player_info(player_id):

    response = commonplayerinfo.CommonPlayerInfo(
        player_id=player_id
    )
    player = response.get_normalized_dict()["CommonPlayerInfo"][0] 
    print(player, 'player here?')


    return {
    "nba_player_id": player["PERSON_ID"],
    "first_name": player["FIRST_NAME"],
    "last_name": player["LAST_NAME"],
    "height": player["HEIGHT"],
    "weight": player["WEIGHT"],
    "college": player["SCHOOL"],
    "birthday": player["BIRTHDATE"],
    "jersey": int(player["JERSEY"]) if player["JERSEY"] else None,
    "position": player["POSITION"],
    "team_name": player["TEAM_NAME"],
    "team_abbrv": player["TEAM_ABBREVIATION"],
    "draft_year": int(player["DRAFT_YEAR"]) if player["DRAFT_YEAR"] else None,
}

def get_player_season_stats(nba_player_id):
    response = playercareerstats.PlayerCareerStats(player_id=nba_player_id)
    data = response.get_normalized_dict()

    result_sets = {
        "Regular Season": data.get("SeasonTotalsRegularSeason", []),
        "Playoffs": data.get("SeasonTotalsPostSeason", []),
    }

    rows = []
    for season_type, seasons in result_sets.items():
        for r in seasons:
            gp = r.get("GP") or 0
            per = (lambda v: round((v or 0) / gp, 1) if gp else None)
            rows.append({
                "nba_player_id": nba_player_id,
                "season": r.get("SEASON_ID"),
                "season_type": season_type,
                "team": r.get("TEAM_ABBREVIATION"),
                "gp": gp,
                "pts": r.get("PTS"),
                "reb": r.get("REB"),
                "ast": r.get("AST"),
                "stl": r.get("STL"),
                "blk": r.get("BLK"),
                "fgm": r.get("FGM"),
                "fga": r.get("FGA"),
                "fg_pct": r.get("FG_PCT"),
                "fg3m": r.get("FG3M"),
                "fg3a": r.get("FG3A"),
                "fg3_pct": r.get("FG3_PCT"),
                "ftm": r.get("FTM"),
                "fta": r.get("FTA"),
                "ft_pct": r.get("FT_PCT"),
                "ppg": per(r.get("PTS")),
                "rpg": per(r.get("REB")),
                "apg": per(r.get("AST")),
            })
    return rows
    
def get_player_combine(nba_player_id, draft_year):
    if not draft_year or draft_year in ("", "Undrafted"):
        return None

    stats = draftcombinestats.DraftCombineStats(
        season_all_time=draft_year
    ).get_normalized_dict().get("Results", [])
    anthro = draftcombineplayeranthro.DraftCombinePlayerAnthro(
        season_year=draft_year
    ).get_normalized_dict().get("Results", [])

    s = next((r for r in stats if r.get("PLAYER_ID") == nba_player_id), {})
    a = next((r for r in anthro if r.get("PLAYER_ID") == nba_player_id), {})

    if not s and not a:
        return None   # this player has no combine data

    return {
        "nba_player_id": nba_player_id,
        "draft_year": draft_year,
        "max_vertical": s.get("MAX_VERTICAL_LEAP"),
        "standing_vertical": s.get("STANDING_VERTICAL_LEAP"),
        "lane_agility": s.get("LANE_AGILITY_TIME"),
        "sprint": s.get("THREE_QUARTER_SPRINT"),
        "bench_press": s.get("BENCH_PRESS"),
        "wingspan": a.get("WINGSPAN"),
        "standing_reach": a.get("STANDING_REACH"),
        "height_w_shoes": a.get("HEIGHT_W_SHOES"),
        "weight": a.get("WEIGHT"),
    }

def get_player_shots(nba_player_id, season):
    response = shotchartdetail.ShotChartDetail(
        player_id=nba_player_id,
        team_id=0,
        season_nullable=season,
        season_type_all_star="Regular Season",
        context_measure_simple="FGA",   # FGA = makes AND misses
    )
    rows = response.get_normalized_dict()["Shot_Chart_Detail"]

    shots = []
    for r in rows:
        shots.append({
            "nba_player_id": nba_player_id,
            "season": season,
            "loc_x": r["LOC_X"],
            "loc_y": r["LOC_Y"],
            "made": bool(r["SHOT_MADE_FLAG"]),
            "shot_type": r.get("SHOT_TYPE"),
            "shot_zone_basic": r.get("SHOT_ZONE_BASIC"),
            "shot_zone_area": r.get("SHOT_ZONE_AREA"),
            "shot_zone_range": r.get("SHOT_ZONE_RANGE"),
            "shot_distance": r.get("SHOT_DISTANCE"),
            "action_type": r.get("ACTION_TYPE"),
            "period": r.get("PERIOD"),
            "game_date": r.get("GAME_DATE"),
        })
    return shots