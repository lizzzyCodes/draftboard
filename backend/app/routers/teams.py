from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import SessionLocal
from app.models.teams import Team
from app.schemas.teams import TeamResponse
from app.schemas.shots import ShotResponse


router = APIRouter()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.get("/", response_model=list[TeamResponse])         
def get_teams(db: Session = Depends(get_db)):
    return db.query(Team).all()


@router.get("/{abbreviation}", response_model=TeamResponse)  
def get_team(abbreviation: str, db: Session = Depends(get_db)):
    return (
        db.query(Team)
        .filter(Team.abbreviation == abbreviation.upper())
        .first()
    )

@router.get("/", response_model=list[ShotResponse])
def get_shots(
    player_id: int,
    season: str | None = None,
    db: Session = Depends(get_db),
):
    query = db.query(Shot).filter(Shot.nba_player_id == player_id)
    if season:
        query = query.filter(Shot.season == season)
    return query.all()