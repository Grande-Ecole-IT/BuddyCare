import os 
from sqlalchemy import create_engine,MetaData
from dotenv import load_dotenv
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

load_dotenv()

DATABASE_HOST = os.getenv("DATABASE_HOST")
DATABASE_DATABASE = os.getenv("DATABASE_DATABASE")
DATABASE_USER = os.getenv("DATABASE_USER")
DATABASE_PASSWORD = os.getenv("DATABASE_PASSWORD")
DATABASE_PORT = os.getenv('DATABASE_PORT')


meta = MetaData()

DATABASE_URL = f"mysql+mysqlconnector://{DATABASE_USER}:{DATABASE_PASSWORD}@{DATABASE_HOST}:{DATABASE_PORT}/{DATABASE_DATABASE}?charset=utf8mb4&collation=utf8mb4_general_ci"

# Database engine
engine = create_engine(DATABASE_URL)
sessionLocal = sessionmaker(autocommit=False,autoflush=False,bind=engine)

# Database class
Base = declarative_base()

def get_db():
    db = sessionLocal()
    try:
        yield db
    finally:
        db.close()

