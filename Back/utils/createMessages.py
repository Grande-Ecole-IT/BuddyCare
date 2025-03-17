from sqlalchemy.orm import Session
from models.Message import Message
from schemas.message import CreateMessage

def create_messages(db:Session,message:CreateMessage):
    db_message = Message(
        history = message.history,
        begin_date = message.begin_date,
        end_date = message.end_date,
        user_id = message.user_id    
    )
    db.add(db_message)
    db.commit()
    db.refresh(db_message)
    return db_message