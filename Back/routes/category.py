from fastapi import APIRouter
from sqlalchemy.orm import Session
from fastapi import Depends 
from config.database import get_db
from utils.createCategory import create_category
from schemas.category import CreateCategory
from models.Category import Category

CategoryRouter = APIRouter()

@CategoryRouter.post("/Categorys/",response_model=CreateCategory)
async def create_Category(Category: CreateCategory, db: Session = Depends(get_db)):
    return create_category(db,Category)

@CategoryRouter.get("/Category/{id}",response_model=CreateCategory)
def read_user(id:int,db:Session=Depends(get_db)):
    return db.query(Category).filter(Category.id==id).first()