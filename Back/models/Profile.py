from config.database import Base
from sqlalchemy import Column, Integer, Date,ForeignKey
from sqlalchemy.orm import relationship


class Profile(Base):
    __tablename__ = "Profile"
    id = Column(Integer, primary_key=True, autoincrement=True)
    date = Column(Date, nullable=False)
    user_id = Column(Integer,ForeignKey('User.id'))
    user = relationship('User',back_populates='profil')
    category = relationship("Category",back_populates='profile')
