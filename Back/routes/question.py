from fastapi import APIRouter
from sqlalchemy.orm import Session
from fastapi import Depends 
from config.database import get_db
from utils.createQuestion import create_question
from schemas.question import CreateQuestion
from models.Question import Question

QuestionRouter = APIRouter()

@QuestionRouter.post("/Questions/",response_model=CreateQuestion)
async def create_Question(QUestion: CreateQuestion, db: Session = Depends(get_db)):
    return create_question(db,QUestion)

@QuestionRouter.get("/Question/{id}",response_model=CreateQuestion)
def read_user(id:int,db:Session=Depends(get_db)):
    return db.query(Question).filter(Question.id==id).first()