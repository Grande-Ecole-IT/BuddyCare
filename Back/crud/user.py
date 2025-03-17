from sqlalchemy.orm import Session
from models.User import User
import schemas.user as userSchema
from passlib.context import CryptContext
from fastapi import HTTPException

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def get_user(db: Session, user_id: int):
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="Utilisateur non trouvé")
    return user.giveUser()


def get_users(db: Session):
    return db.query(User).all()


def create_user(db: Session, user: userSchema.UserCreate):
    hashed_password = pwd_context.hash(user.password)

    user_data = User(
        username=user.username,
        password=hashed_password,
        birthday=user.birthday,
        study=user.study,
        sex=user.sex,
    )
    db.add(user_data)
    db.commit()
    db.refresh(user_data)
    return user_data


def delete_user(db: Session, user_id: int):
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="Utilisateur non trouvé")

    db.delete(user)
    db.commit()
    return {"message": "Utilisateur supprimé avec succès"}
