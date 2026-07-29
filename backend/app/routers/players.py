from fastapi import APIRouter
from app.schemas.player import PlayerResponse


router = APIRouter()


@router.get("/")
def get_players():

    return [
        {
            "name": "Jayson Tatum"
        }
    ]

@router.get("/players/{id}", response_model=PlayerResponse)
def get_player(id: int):
    return player