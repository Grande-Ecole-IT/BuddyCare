from config.database import Base
from sqlalchemy import Column,Integer,String,DateTime,ForeignKey
from sqlalchemy.orm import relationship

class Message(Base):
    __tablename__ = "Message"
    id = Column(Integer, primary_key=True, unique=True, autoincrement=True)
    history = Column(String(1000))
    begin_date = Column(DateTime,nullable=False)
    end_date = Column(DateTime,nullable=False)
    
    user_id = Column(Integer,ForeignKey("User.id"),default=None,nullable=True)
    user = relationship("User",back_populates="messages")
  
    
    
