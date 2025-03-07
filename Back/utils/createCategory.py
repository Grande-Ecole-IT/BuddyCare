from sqlalchemy.orm import Session
from models.Category import Category
from schemas.category import CreateCategory

def create_category(db:Session,category:CreateCategory):
    db_category = Category(
        name= category.name,   
        profile = category.profile_id     
    )
    db.add(db_category)
    db.commit()
    db.refresh(db_category)
    return db_category