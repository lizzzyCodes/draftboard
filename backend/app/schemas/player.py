from pydantic import BaseModel

class PlayerResponse(BaseModel):
    id: int
    first_name: str
    last_name: str
    height: str
    weight: str
    birthday: str
    jersey: int
    position: str
    team_name: str
    team_abbrv: str
    draft_year: int

    class Config:
        from_attributes = True