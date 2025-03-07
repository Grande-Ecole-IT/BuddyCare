from pydantic import BaseModel
from datetime import datetime


class Message(BaseModel):
    """Message model"""

    id: int
    history: str
    begin_date: datetime
    end_date: datetime
    user_id: int


class CreateMessage(BaseModel):
    history: str
    begin_date: datetime
    end_date: datetime
    user_id: int
