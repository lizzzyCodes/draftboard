import os
from dotenv import load_dotenv
from sqlalchemy import create_engine


DATABASE_URL = os.getenv("DATABASE_URL")

engine = create_engine(
    DATABASE_URL,
    pool_pre_ping=True
)
print(DATABASE_URL)