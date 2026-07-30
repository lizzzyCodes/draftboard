from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import SessionLocal
from app.models.players import Player
from app.models.teams import Team
from app.models.season_stats import SeasonStat
from app.models.shots import Shot
from app.models.combine_stats import CombineStat
from app.schemas.player import PlayerResponse, PlayerDetailResponse
from app.schemas.combine import CombineResponse
from app.schemas.teams import TeamResponse
from app.schemas.season_stats import SeasonStatResponse
from app.schemas.shots import ShotResponse


router = APIRouter()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.get("/", response_model=list[PlayerResponse])

def get_players(db: Session = Depends(get_db)):
    return db.query(Player).all()


@router.get("/{nba_player_id}", response_model=PlayerDetailResponse)
def get_player(nba_player_id: int, db: Session = Depends(get_db)):
    player = db.query(Player).filter(Player.nba_player_id == nba_player_id).first()
    if not player:
        raise HTTPException(status_code=404, detail="Player not found")

    pid = player.nba_player_id

    team = db.query(Team).filter(Team.abbreviation == player.team_abbrv).first()
    seasons = db.query(SeasonStat).filter(SeasonStat.nba_player_id == pid).all()
    combine = db.query(CombineStat).filter(CombineStat.nba_player_id == pid).first()

    return PlayerDetailResponse(
        **PlayerResponse.model_validate(player).model_dump(),
        team=TeamResponse.model_validate(team) if team else None,
        season_stats=[SeasonStatResponse.model_validate(s) for s in seasons],
        combine=CombineResponse.model_validate(combine) if combine else None,
    )
    player = db.query(Player).filter(Player.id == player_id).first()
    if not player:
        raise HTTPException(status_code=404, detail="Player not found")

    pid = player.nba_player_id

    team = (
        db.query(Team)
        .filter(Team.abbreviation == player.team_abbrv)
        .first()
    )
    seasons = (
        db.query(SeasonStat)
        .filter(SeasonStat.nba_player_id == pid)
        .all()
    )
    shots = (
        db.query(Shot)
        .filter(Shot.nba_player_id == pid)
        .all()
    )
    combine = (
        db.query(CombineStat)
        .filter(CombineStat.nba_player_id == pid)
        .first()
    )

    return PlayerDetailResponse(
        **PlayerResponse.model_validate(player).model_dump(),
        team=TeamResponse.model_validate(team) if team else None,
        season_stats=[SeasonStatResponse.model_validate(s) for s in seasons],
        shots=[ShotResponse.model_validate(s) for s in shots],
        combine=CombineResponse.model_validate(combine) if combine else None,
    )