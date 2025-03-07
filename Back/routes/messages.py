from fastapi import APIRouter
from sqlalchemy.orm import Session
from fastapi import Depends 
from config.database import get_db
from utils.createMessages import create_messages
from schemas.message import CreateMessage

messageRouter = APIRouter()

@messageRouter.post("/messages/",response_model=CreateMessage)
async def create_message(message: CreateMessage, db: Session = Depends(get_db)):
    return create_messages(db,message)