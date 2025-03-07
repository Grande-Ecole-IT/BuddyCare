from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class MessageBase(BaseModel):
    history: Optional[str] = None
    begin_date: datetime
    end_date: datetime
    user_id: int