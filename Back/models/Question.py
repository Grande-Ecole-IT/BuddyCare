from config.database import Base
from sqlalchemy import Column, Integer, String,ForeignKey
from sqlalchemy.orm import relationship


class Question(Base):
    __tablename__ = "Question"
    id = Column(Integer, primary_key=True, autoincrement=True)
    question = Column(String(255), nullable=False)
    response = Column(String(255), nullable=False)
    
    category_id = Column(Integer,ForeignKey('Category.id'))
    category = relationship('Category',back_populates="question")
    
    def giveQuestion(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}

