from sqlalchemy import Column, Integer, String, Float
from app.database import Base


class CombineStat(Base):
    __tablename__ = "combine_stats"

    id = Column(Integer, primary_key=True)
    nba_player_id = Column(Integer, index=True)
    draft_year = Column(String)

    max_vertical = Column(Float)        # inches
    standing_vertical = Column(Float)
    lane_agility = Column(Float)        # seconds
    sprint = Column(Float)              # three-quarter sprint, seconds
    bench_press = Column(Integer)       # reps

    wingspan = Column(Float)            # inches
    standing_reach = Column(Float)
    height_w_shoes = Column(Float)
    weight = Column(Float)