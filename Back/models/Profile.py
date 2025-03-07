from config.database import Base
from sqlalchemy import Column, Integer, Date,ForeignKey
from sqlalchemy.orm import relationship


class Profile(Base):
    __tablename__ = "Profile"
    id = Column(Integer, primary_key=True, autoincrement=True)
    date = Column(Date, nullable=False)
    user = relationship('User')
    user_id = Column(Integer,ForeignKey('users.id'))
