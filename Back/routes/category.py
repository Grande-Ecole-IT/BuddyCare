from fastapi import APIRouter
from sqlalchemy.orm import Session
from fastapi import Depends 
from config.database import get_db
from utils.createCategory import create_category
from schemas.category import CreateCategory
from schemas import category 
from models.Category import Category

CategoryRouter = APIRouter()

@CategoryRouter.post("/Categorys/",response_model=CreateCategory)
async def create_Category(cat: CreateCategory, db: Session = Depends(get_db)):
    return create_category(db,cat)

@CategoryRouter.get("/Category/{id}",response_model=category.Category)
def read_category(id:int,db:Session=Depends(get_db)):
    category = db.query(Category).filter(Category.id==id).first()
    return category.giveCategory()