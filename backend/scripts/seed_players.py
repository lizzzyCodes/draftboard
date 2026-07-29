# hard coded players for now
# future can get all NBA PLAYERS
import sys 
from sqlalchemy import delete
from app.models.players import Player

from app.database import SessionLocal
from app.services.nba_client import get_player_info

    

PRIMARY_SEASON = "2025-26"
FALLBACK_SEASONS = ["2024-25", "2023-24"] 

NBA_PLAYER_IDS = [
    2544,     # LeBron James
    201939,  # Stephen Curry
    203999,  # Nikola Jokić
]





def seed_players():

    db = SessionLocal()

    try:

        for nba_id in NBA_PLAYER_IDS:

            existing_player = (
                db.query(Player)
                .filter(Player.nba_player_id == nba_id)
                .first()
            )

            if existing_player:
                print(f"Skipping {nba_id}, already exists")
                continue


            player_info = get_player_info(nba_id)
            player = Player(**player_info)

            db.add(player) # db.add player is what saves it to postgres

        db.commit() # db.commit() without commit nothing  is written
        print("Successfully seeded players")

    except Exception as e:
        db.rollback()
        print(f"Error seeding players: {e}")
        raise
    
    finally:
        db.close()