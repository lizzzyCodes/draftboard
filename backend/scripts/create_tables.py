from app.database import engine
from app.models.players import Player
from app.database import Base


print("Creating tables...")

Base.metadata.create_all(bind=engine)

print("Done!")