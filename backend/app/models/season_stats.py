from sqlalchemy import Column, Integer, String, Float
from app.database import Base


class SeasonStat(Base):
    __tablename__ = "season_stats"

    id = Column(Integer, primary_key=True)
    nba_player_id = Column(Integer, index=True)
    season = Column(String, index=True)          # "2023-24"
    season_type = Column(String, index=True)     # "Regular Season" | "Playoffs"
    team = Column(String)                         # team abbreviation

    gp = Column(Integer)

    # totals
    pts = Column(Integer)
    reb = Column(Integer)
    ast = Column(Integer)
    stl = Column(Integer)
    blk = Column(Integer)

    # shooting
    fgm = Column(Integer)
    fga = Column(Integer)
    fg_pct = Column(Float)
    fg3m = Column(Integer)
    fg3a = Column(Integer)
    fg3_pct = Column(Float)
    ftm = Column(Integer)
    fta = Column(Integer)
    ft_pct = Column(Float)

    # per-game (computed)
    ppg = Column(Float)
    rpg = Column(Float)
    apg = Column(Float)