from app.models.shots import Shot
from app.database import SessionLocal
from app.services.nba_client import get_player_shots
from app.constants import NBA_PLAYER_IDS, PRIMARY_SEASON, FALLBACK_SEASONS

def fetch_with_fallback(nba_id):
    """Return (season_used, shots). Falls back if the primary season is empty."""
    for season in [PRIMARY_SEASON, *FALLBACK_SEASONS]:
        shots = get_player_shots(nba_id, season)
        if shots:
            return season, shots
        print(f"  no shots for {nba_id} in {season}, trying next...")
    return PRIMARY_SEASON, []


def seed_shots():
    db = SessionLocal()
    try:
        for nba_id in NBA_PLAYER_IDS:
            existing = (
                db.query(Shot)
                .filter(Shot.nba_player_id == nba_id)
                .first()
            )
            if existing:
                print(f"Skipping shots for {nba_id}, already exist")
                continue

            season_used, shots = fetch_with_fallback(nba_id)
            for s in shots:
                db.add(Shot(**s))
            print(f"  {nba_id}: {len(shots)} shots ({season_used})")

        db.commit()
        print("Successfully seeded shots")

    except Exception as e:
        db.rollback()
        print(f"Error seeding shots: {e}")
        raise

    finally:
        db.close()