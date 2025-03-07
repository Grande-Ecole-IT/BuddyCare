from datetime import datetime
from sqlalchemy.orm import Session
from config.database import SessionLocal
from models.Message import Message
import google.generativeai as genai

def get_gemini_text_messages(input_prompt, user_id=None):
    db = SessionLocal()

    try:
        model = genai.GenerativeModel("gemini-2.0-flash")
        history = ""

        if user_id:
            messages = db.query(Message).filter(Message.user_id == user_id).order_by(Message.begin_date).all()
            for message in messages:
                # Utiliser l'historique tel quel, car il contient déjà les deux parties
                history += f"{message.history}\n"

        prompt = f"""
        Tu es un expert en psychologie amical et empathique qui est à l'écoute des besoins de ses patients .
        TU es là pour aider et accompagner les gens dans leurs difficultés émotionnelles.
        Si l'utilisateur présente des signes de dépression grave pouvant emmener aux suicide: réponds : 
        "Je suis désolé, ce qui se passe est en dessus de mes compétences. Je suis là que pour vous assister.Je vous conseille d'appeler un proche et de ne pas réster seul(e)."
        {history}
        {input_prompt}
        Réponds d'une façon concise et précise.
        Le dialogue doit être en français.
        """
        result = model.generate_content(prompt)
        response_text = result.text

        # Combiner le prompt et la réponse pour l'historique
        combined_message = f"Utilisateur: {input_prompt}\nIA: {response_text}"

        message = Message(
            history=combined_message,
            begin_date=datetime.now(),
            end_date=datetime.now(),
            user_id=user_id
        )
        db.add(message)
        db.commit()

        return response_text

    except Exception as e:
        print(f"Une erreur s'est produite: {e}")
        return "Une erreur s'est produite. Veuillez réessayer."

    finally:
        db.close()