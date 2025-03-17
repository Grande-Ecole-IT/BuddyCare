from pydantic import BaseModel
from datetime import date


class Profile(BaseModel):
    """Profile model"""

    id: int
    date: date
    user_id: int


class CreateProfile(BaseModel):
    date: date
    user_id: int
