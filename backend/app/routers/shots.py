from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import SessionLocal
from app.models.shots import Shot
from app.schemas.shots import ShotResponse

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/{nba_player_id}", response_model=list[ShotResponse])
def get_shots(nba_player_id: int, season: str | None = None, db: Session = Depends(get_db)):
    query = db.query(Shot).filter(Shot.nba_player_id == nba_player_id)
    if season:
        query = query.filter(Shot.season == season)
    return query.all()