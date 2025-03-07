from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from config import database
from models.User import User
from schemas import user as userSchema
from crud import user as userCrud
from utils.auth import authenticate_user
from config.auth import create_access_token
from datetime import timedelta


userRoute = APIRouter()


@userRoute.get("/users")
def read_users(skip: int = 0, limit: int = 10, db: Session = Depends(database.get_db)):
    return userCrud.get_users(db, skip, limit)


@userRoute.get("/users/{user_id}")
def read_user(user_id: int, db: Session = Depends(database.get_db)):
    return userCrud.get_user(db, user_id)


@userRoute.post("/user", response_model=userSchema.UserCreate)
def create_user(user: userSchema.UserCreate, db: Session = Depends(database.get_db)):
    return userCrud.create_user(db=db, user=user)


@userRoute.put("/users/{user_id}")
def update_user(
    user_id: int, user: userSchema.UserUpdate, db: Session = Depends(database.get_db)
):
    return userCrud.update_user(db, user_id, user)


@userRoute.delete("/users/{user_id}")
def delete_user(user_id: int, db: Session = Depends(database.get_db)):
    return userCrud.delete_user(db, user_id)


@userRoute.post("/login")
def login(user: userSchema.UserLogin, db: Session = Depends(database.get_db)):
    """
    Vérifie les identifiants de l'utilisateur et retourne un token JWT s'ils sont valides.
    """
    user_auth = authenticate_user(db, user.username, user.password)
    if not user_auth:
        raise HTTPException(
            status_code=401, detail="Nom d'utilisateur ou mot de passe incorrect"
        )

    access_token = create_access_token(
        data={"sub": user_auth.username}, expires_delta=timedelta(minutes=60)
    )

    return {"access_token": access_token, "token_type": "bearer"}
