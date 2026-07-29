from nba_api.stats.endpoints import commonplayerinfo


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