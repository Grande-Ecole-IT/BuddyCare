from fastapi import HTTPException
from sqlalchemy.orm import Session
from models.Category import Category
from schemas.category import CreateCategory
from models.Profile import Profile

def create_category(db: Session, category: CreateCategory):
    # Récupérer l'instance de Profile correspondant à profile_id
    db_profile = db.query(Profile).filter(Profile.id == category.profile_id).first()
    if not db_profile:
        raise HTTPException(status_code=404, detail="Profile not found")

    # Créer la Category avec l'instance de Profile
    db_category = Category(
        name=category.name,
        profile=db_profile  # Assigner l'instance de Profile
    )
    db.add(db_category)
    db.commit()
    db.refresh(db_category)
    return db_category