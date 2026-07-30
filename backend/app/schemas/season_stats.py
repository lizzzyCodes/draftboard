from pydantic import BaseModel

class SeasonStatResponse(BaseModel):
    id: int
    nba_player_id: int
    season: str
    season_type: str
    team: str | None = None

    gp: int | None = None

    pts: int | None = None
    reb: int | None = None
    ast: int | None = None
    stl: int | None = None
    blk: int | None = None

    fgm: int | None = None
    fga: int | None = None
    fg_pct: float | None = None
    fg3m: int | None = None
    fg3a: int | None = None
    fg3_pct: float | None = None
    ftm: int | None = None
    fta: int | None = None
    ft_pct: float | None = None

    ppg: float | None = None
    rpg: float | None = None
    apg: float | None = None

    class Config:
        from_attributes = True