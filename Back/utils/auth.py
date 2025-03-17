from sqlalchemy.orm import Session
from fastapi import HTTPException, status
from config.auth import verify_password, create_access_token
from models.User import User
from datetime import timedelta


def authenticate_user(db: Session, username: str, password: str):
    user = db.query(User).filter(User.username == username).first()
    if not user or not verify_password(password, user.password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Email ou mot de passe incorrect",
            headers={"WWW-Authenticate": "Bearer"},
        )
    return user


def login_user(db: Session, username: str, password: str):
    user = authenticate_user(db, username, password)
    access_token = create_access_token(
        data={"sub": user.username}, expires_delta=timedelta(minutes=30)
    )
    return {"access_token": access_token, "token_type": "bearer"}
