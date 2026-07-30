from pydantic import BaseModel

class CombineResponse(BaseModel):
    id: int
    nba_player_id: int
    draft_year: str | None = None

    max_vertical: float | None = None
    standing_vertical: float | None = None
    lane_agility: float | None = None
    sprint: float | None = None
    bench_press: int | None = None

    wingspan: float | None = None
    standing_reach: float | None = None
    height_w_shoes: float | None = None
    weight: float | None = None

    class Config:
        from_attributes = True