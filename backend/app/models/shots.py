from sqlalchemy import Column, Integer, String, Boolean
from app.database import Base


class Shot(Base):
    __tablename__ = "shots"

    id = Column(Integer, primary_key=True)
    nba_player_id = Column(Integer, index=True)   # links to Player.nba_player_id
    season = Column(String, index=True)           # "2025-26"

    loc_x = Column(Integer)                        # court x (tenths of a foot)
    loc_y = Column(Integer)                        # court y
    made = Column(Boolean)                         # SHOT_MADE_FLAG -> True/False

    shot_type = Column(String)                     # "2PT Field Goal" / "3PT Field Goal"
    shot_zone_basic = Column(String)
    shot_zone_area = Column(String)
    shot_zone_range = Column(String)
    shot_distance = Column(Integer)
    action_type = Column(String)                   # "Jump Shot", "Dunk"...
    period = Column(Integer)
    game_date = Column(String)