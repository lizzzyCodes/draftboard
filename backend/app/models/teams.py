from sqlalchemy import String
from sqlalchemy.orm import Mapped, mapped_column
from app.database import Base   # wherever your Base lives

class Team(Base):
    __tablename__ = "teams"

    abbreviation: Mapped[str] = mapped_column(String, primary_key=True)  # "DEN"
    espn_id: Mapped[str | None] = mapped_column(String, nullable=True)
    name: Mapped[str | None] = mapped_column(String, nullable=True)
    color: Mapped[str | None] = mapped_column(String, nullable=True)            # "#0E2240"
    alternate_color: Mapped[str | None] = mapped_column(String, nullable=True)  # "#FEC524"
    logo_url: Mapped[str | None] = mapped_column(String, nullable=True)