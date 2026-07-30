# hard coded players for now
# future can get all NBA PLAYERS
from app.models.players import Player
from app.database import SessionLocal
from app.services.nba_client import get_player_info
from app.constants import NBA_PLAYER_IDS

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