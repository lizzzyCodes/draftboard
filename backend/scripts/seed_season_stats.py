from app.models.season_stats import SeasonStat
from app.database import SessionLocal
from app.services.nba_client import get_player_season_stats
from app.constants import NBA_PLAYER_IDS

def seed_season_stats():
    db = SessionLocal()
    try:
        for nba_id in NBA_PLAYER_IDS:
            existing = (
                db.query(SeasonStat)
                .filter(SeasonStat.nba_player_id == nba_id)
                .first()
            )
            if existing:
                print(f"Skipping season stats for {nba_id}, already exist")
                continue

            rows = get_player_season_stats(nba_id)
            for row in rows:
                db.add(SeasonStat(**row))
            print(f"  {nba_id}: {len(rows)} season rows")

        db.commit()
        print("Successfully seeded season stats")
    except Exception as e:
        db.rollback()
        print(f"Error seeding season stats: {e}")
        raise
    finally:
        db.close()