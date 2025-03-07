from typing import Optional
from pydantic import BaseModel
from datetime import date


class User(BaseModel):
    """User model"""

    id: int
    username: str
    password: str
    birthday: date
    study: str
    sex: str


class UserCreate(BaseModel):
    username: str
    password: str
    birthday: date
    study: str
    sex: str


class UserUpdate(BaseModel):
    username: Optional[str] = None
    password: Optional[str] = None
    birthday: Optional[date] = None
    study: Optional[str] = None
    sex: Optional[str] = None


class UserLogin(BaseModel):
    username: str
    password: str
