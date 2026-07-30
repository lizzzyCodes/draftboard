from pydantic import BaseModel
from app.schemas.teams import TeamResponse
from app.schemas.season_stats import SeasonStatResponse
from app.schemas.combine import CombineResponse

class PlayerResponse(BaseModel):
    id: int
    nba_player_id: int
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

class PlayerDetailResponse(PlayerResponse):
    team: TeamResponse | None = None
    season_stats: list[SeasonStatResponse] = []
    combine: CombineResponse | None = None