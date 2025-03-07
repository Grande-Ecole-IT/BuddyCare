from fastapi import FastAPI
from config.database import engine,Base,init_db
from routes.messages import messageRouter
from contextlib import asynccontextmanager

@asynccontextmanager
async def appLifeSpan(app:FastAPI):
    await init_db()
    yield
    

app = FastAPI(title='backia',lifespan=appLifeSpan)




app.include_router(messageRouter,tags=["Message router"])