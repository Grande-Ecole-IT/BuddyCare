from pydantic import BaseModel
from datetime import date

class User(BaseModel):
    """User model"""
    id:int
    username:str
    password:str
    birthday : date
    study : str
    sex : str

class UserCreate(BaseModel):
    username:str
    password:str
    birthday : date
    study : str
    sex : str
    