from config.database import Base
from sqlalchemy import Column, Integer, String,ForeignKey
from sqlalchemy.orm import relationship


class Category(Base):
    __tablename__ = "Category"
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(255), nullable=False)
    
    profile_id = Column(Integer,ForeignKey("Profile.id"))
    profile = relationship('Profile',back_populates="category")
    
    question = relationship("Question",back_populates="category")
    
    
    def giveCategory(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}

