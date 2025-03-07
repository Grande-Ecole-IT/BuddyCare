from config.database import Base
from sqlalchemy import Column, Integer, String


class Question(Base):
    __tablename__ = "Question"
    id = Column(Integer, primary_key=True, autoincrement=True)
    question = Column(String(255), nullable=False)
    response = Column(String(255), nullable=False)
