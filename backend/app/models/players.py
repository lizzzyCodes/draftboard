from sqlalchemy import Column, Integer, String
from app.database import Base

class Player(Base):
    __tablename__ = "players"

    id = Column(Integer, primary_key=True)
    nba_player_id = Column(Integer, unique=True)

    first_name = Column(String)
    last_name = Column(String)
    height = Column(String)
    weight = Column(String)
    college = Column(String)
    birthday = Column(String)
    jersey = Column(Integer)
    position = Column(String)
    team_name = Column(String)
    team_abbrv = Column(String)
    draft_year = Column(Integer)
               
