from app.models.teams import Team
from app.database import SessionLocal
from app.services.espn_client import fetch_teams

def seed_teams():
    db = SessionLocal()
    try:
        teams = fetch_teams()
        for t in teams:
            existing = (
                db.query(Team)
                .filter(Team.abbreviation == t["abbreviation"])
                .first()
            )
            if existing:
                print(f"Skipping {t['abbreviation']}, already exists")
                continue

            db.add(Team(**t))

        db.commit()
        print("Successfully seeded teams")
    except Exception as e:
        db.rollback()
        print(f"Error seeding teams: {e}")
        raise
    finally:
        db.close()