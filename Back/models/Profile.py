from config.database import Base
from sqlalchemy import Column, Integer, Date


class Profile(Base):
    __tablename__ = "Profile"
    id = Column(Integer, primary_key=True, autoincrement=True)
    date = Column(Date, nullable=False)
