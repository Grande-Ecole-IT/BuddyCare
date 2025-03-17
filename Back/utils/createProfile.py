from sqlalchemy.orm import Session
from models.Profile import Profile
from schemas.profile import CreateProfile

def create_profile(db:Session,profil:CreateProfile):
    db_profile = Profile(
        date = profil.date, 
        user_id = profil.user_id
           
    )
    db.add(db_profile)
    db.commit()
    db.refresh(db_profile)
    return db_profile