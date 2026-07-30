"""
# dont think this is needed
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import SessionLocal
from app.models.season_stats import SeasonStat
from app.schemas.season_stats import SeasonStatResponse


router = APIRouter()


def get_db():

    db = SessionLocal()

    try:
        yield db

    finally:
        db.close()



@router.get("/", response_model=list[SeasonStatResponse])
def get_season_stats(db: Session = Depends(get_db)):

    season_stats = db.query(SeasonStat).all()

    return season_stats 
"""