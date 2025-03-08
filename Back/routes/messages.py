from fastapi import APIRouter
from sqlalchemy.orm import Session
from fastapi import Depends 
from config.database import get_db
from utils.createMessages import create_messages
from schemas.message import CreateMessage
from schemas import message
from models.Message import Message

messageRouter = APIRouter()

@messageRouter.post("/messages/",response_model=CreateMessage)
async def create_Message(message: CreateMessage, db: Session = Depends(get_db)):
    return create_messages(db,message)

@messageRouter.get("/message/{id}",response_model=message.Message)
def read_user(id:int,db:Session=Depends(get_db)):
    message = db.query(Message).filter(Message.id==id).first()
    return message