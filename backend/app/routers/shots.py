from app.models.players import Player
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



@router.get("/", response_model=list[ShotResponse])
def get_players(db: Session = Depends(get_db)):

    players = db.query(Shot).all()

    return players