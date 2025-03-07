from fastapi import FastAPI,WebSocket,Depends,HTTPException
from sqlalchemy.orm import Session
from config.database import init_db
from routes.messages import messageRouter
from contextlib import asynccontextmanager
from routes.question import QuestionRouter
from routes.category import CategoryRouter
from routes.profile import profilRouter
from routes.user import userRoute
from Back.IA.chatbot import get_gemini_text_messages
from Back.IA.suggestion import get_gemini_text_suggestion


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


@app.websocket("/ws/{user_id}")
async def websocket_endpoint(websocket: WebSocket, user_id: int, db: Session = Depends(get_db)):
    await websocket.accept()
    try:
        while True:
            data = await websocket.receive_text()
            response = get_gemini_text_messages(data, user_id)
            await websocket.send_text(response)
    except Exception as e:
        print(f"WebSocket error: {e}")
    finally:
        print(f"WebSocket connection closed for user {user_id}")
        
        
@app.get("/generate_suggestion")
async def generate_suggestion():
    
    try:
        result = get_gemini_text_suggestion()
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    

