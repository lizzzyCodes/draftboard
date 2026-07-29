from pydantic import BaseModel


class PlayerResponse(BaseModel):

    id: int
    name: str
    team: str
    position: str
