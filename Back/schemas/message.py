from pydantic import BaseModel
from datetime import datetime
from typing import Optional


class Message(BaseModel):
    """Message model"""

    id: int
    history: str
    begin_date: datetime
    end_date: datetime
    user_id: Optional[int] = None


class CreateMessage(BaseModel):
    history: str
    begin_date: datetime
    end_date: datetime
    user_id: Optional[int] = None
