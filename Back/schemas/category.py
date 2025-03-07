from pydantic import BaseModel


class Category(BaseModel):
    """Category model"""

    id: int
    name: str
    profile_id: int


class CreateCategory(BaseModel):
    name: str
    profile_id: int
