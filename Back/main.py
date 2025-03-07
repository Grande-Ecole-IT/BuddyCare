from fastapi import FastAPI
from config.database import init_db
from routes.messages import messageRouter
from contextlib import asynccontextmanager
from routes.question import QuestionRouter
from routes.category import CategoryRouter
from routes.profile import profilRouter
from routes.user import userRoute


@asynccontextmanager
async def appLifeSpan(app: FastAPI):
    await init_db()
    yield


app = FastAPI(title="backia", lifespan=appLifeSpan)


app.include_router(userRoute, tags=["User creation"])
app.include_router(messageRouter, tags=["Message router"])
app.include_router(QuestionRouter, tags=["Question router"])
app.include_router(CategoryRouter, tags=["Category router"])
app.include_router(profilRouter, tags=["Profil routeur"])
