from datetime import datetime
from sqlalchemy.orm import Session
from config.database import SessionLocal
from models.Message import Message
import google.generativeai as genai
from models.User import User

def get_gemini_text_messages(db: Session, user_id: int, input_prompt: str):
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        return "Utilisateur non trouvé."

    # Récupérer l'historique des messages de l'utilisateur
    history = "\n".join([msg.history for msg in user.messages]) if user.messages else ""

    prompt = f"""
    Tu es un expert en psychologie amical et empathique qui est à l'écoute des besoins des patients.
    Si l'utilisateur présente des signes de dépression grave pouvant mener au suicide, réponds :
    "Je suis désolé, ce qui se passe est au-dessus de mes compétences. Je vous conseille d'appeler un proche et de ne pas rester seul(e)."
    
    Historique de conversation :
    {history}

    Utilisateur : {input_prompt}
    
    Réponds d'une façon concise et précise.
    """

    try:
        model = genai.GenerativeModel("gemini-2.0-flash")
        result = model.generate_content(prompt)
        chatbot_response = result.text if result else "Je n'ai pas compris."

        # Sauvegarde du message dans MariaDB
        new_message = Message(
            history=f"Utilisateur: {input_prompt}\nChatbot: {chatbot_response}",
            begin_date=datetime,
            user_id=user_id
        )
        db.add(new_message)
        db.commit()

        return chatbot_response
    except Exception as e:
        print(f"Erreur Gemini : {e}")
        return "Une erreur est survenue."