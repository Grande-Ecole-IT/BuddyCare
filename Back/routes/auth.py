from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from schemas.auth import LoginRequest, TokenResponse
from utils.auth import login_user
from config.database import get_db

router = APIRouter(prefix="/auth", tags=["auth"])


@router.post("/login", response_model=TokenResponse)
def login(credentials: LoginRequest, db: Session = Depends(get_db)):
    return login_user(db, credentials.email, credentials.password)
