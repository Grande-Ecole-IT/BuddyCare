from pydantic import BaseModel


class Question(BaseModel):
    """Question model"""

    id: int
    question: str
    response: str
    category_id: int


class CreateQuestion(BaseModel):
    question: str
    response: str
    category_id: int
