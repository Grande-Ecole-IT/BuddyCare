from sqlalchemy.orm import Session
from models.Question import Question
from schemas.question import CreateQuestion

def create_question(db:Session,question:CreateQuestion):
    db_question = Question(
        question = question.question,
        response = question.response
    )
    
    db.add(db_question)
    db.commit()
    db.refresh(db_question)
    return db_question