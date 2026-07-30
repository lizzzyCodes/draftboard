from fastapi import FastAPI
from .routers import players, teams, shots

app = FastAPI()

app.include_router(players.router, prefix="/players")
app.include_router(teams.router, prefix="/teams")
app.include_router(shots.router, prefix="/shots")