from config.database import Base
from sqlalchemy import Column, Integer, String, Date
from sqlalchemy.orm import relationship


class User(Base):
    __tablename__ = "User"
    id = Column(Integer, primary_key=True, unique=True, autoincrement=True)
    username = Column(String(255), nullable=False, default="User")
    password = Column(String(255), nullable=False)
    birthday = Column(Date, nullable=False)
    study = Column(String(255), nullable=False)
    sex = Column(String(10), nullable=False)

    messages = relationship("Message", back_populates="user")

    profil = relationship("Profile", back_populates="user")

    def giveUser(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}
