from app.database import engine

with engine.connect() as connection:
    print("Connected to Supabase PostgreSQL!")