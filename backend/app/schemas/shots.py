from pydantic import BaseModel

class ShotResponse(BaseModel):
    id: int
    nba_player_id: int
    season: str

    loc_x: int
    loc_y: int
    made: bool

    shot_type: str | None = None
    shot_zone_basic: str | None = None
    shot_zone_area: str | None = None
    shot_zone_range: str | None = None
    shot_distance: int | None = None
    action_type: str | None = None
    period: int | None = None
    game_date: str | None = None

    class Config:
        from_attributes = True