from fastapi import APIRouter


router = APIRouter()


@router.get("/")
def get_players():

    return [
        {
            "name": "Jayson Tatum"
        }
    ]