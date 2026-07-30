# all tables get created here
from app.database import engine
from app.models.players import Player
from app.database import Base
from app.models.teams import Team 
from app.models.season_stats import SeasonStat
from app.models.combine_stats import CombineStat
from app.models.shots import Shot 

print("Creating tables...")

Base.metadata.create_all(bind=engine)

print("Done!")