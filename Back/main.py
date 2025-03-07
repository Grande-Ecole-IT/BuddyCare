from fastapi import FastAPI
from config.database import engine,Base

app = FastAPI(title='backia')

#Database creation 
Base.metadata.create_all(bind=engine)


@app.get("/")
async def root():
    return {"message": "Hello World"}
