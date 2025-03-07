from config.database import Base
from sqlalchemy import Column, Integer, String, DateTime


class Message(Base):
    __tablename__ = "Messages"
    id = Column(Integer, primary_key=True, unique=True, autoincrement=True)
    history = Column(String)
    begin_date = Column(DateTime, nullable=False)
    end_date = Column(DateTime, nullable=False)
