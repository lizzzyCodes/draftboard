from app.models.combine_stats import CombineStat
from app.models.players import Player
from app.database import SessionLocal
from app.services.nba_client import get_player_combine


def seed_combine():
    db = SessionLocal()
    try:
        players = db.query(Player).all()
        for p in players:
            existing = (
                db.query(CombineStat)
                .filter(CombineStat.nba_player_id == p.nba_player_id)
                .first()
            )
            if existing:
                print(f"Skipping combine for {p.nba_player_id}, already exists")
                continue

            combine = get_player_combine(p.nba_player_id, str(p.draft_year))
            if combine is None:
                print(f"  no combine data for {p.first_name} {p.last_name}")
                continue

            db.add(CombineStat(**combine))
            print(f"  seeded combine for {p.first_name} {p.last_name}")

        db.commit()
        print("Successfully seeded combine stats")
    except Exception as e:
        db.rollback()
        print(f"Error seeding combine: {e}")
        raise
    finally:
        db.close()