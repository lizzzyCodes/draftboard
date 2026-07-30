from pydantic import BaseModel


class TeamResponse(BaseModel):
    abbreviation: str
    espn_id: str | None = None
    name: str | None = None
    color: str | None = None
    alternate_color: str | None = None
    logo_url: str | None = None

    class Config:
        from_attributes = True