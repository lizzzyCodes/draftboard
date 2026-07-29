from sqlalchemy import Column, Integer, String
from .database import Base
from fastapi import FastAPI
from .routers import players


app = FastAPI()


app.include_router(
    players.router,
    prefix="/players"
)

class Player(Base):
    __tablename__ = "players"

    id = Column(Integer, primary_key=True)
    name = Column(String)
    team = Column(String)