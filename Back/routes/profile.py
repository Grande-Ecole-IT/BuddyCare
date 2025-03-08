from fastapi import APIRouter
from sqlalchemy.orm import Session
from fastapi import Depends 
from config.database import get_db
from utils.createProfile import create_profile
from schemas.profile import CreateProfile
from schemas import profile
from models.Profile import Profile

profilRouter = APIRouter()

@profilRouter.post("/profils/",response_model=CreateProfile)
async def create_Profil(profil: CreateProfile, db: Session = Depends(get_db)):
    return create_profile(db,profil)

@profilRouter.get("/profil/{id}",response_model=profile.Profile)
def read_user(id:int,db:Session=Depends(get_db)):
    return db.query(Profile).filter(Profile.id==id).first()