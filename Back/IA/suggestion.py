from sqlalchemy.orm import Session
from models.Category import Category
from models.User import User
from models.Profile import Profile
from models.Question import Question
import google.generativeai as genai
from fastapi import Depends
from config.database import sessionLocal

def get_gemini_text_suggestion(user_id: int, db: Session = Depends(sessionLocal)):
    try:
        model = genai.GenerativeModel("gemini-2.0-flash")

        # Récupérer le profil de l'utilisateur
        profile = db.query(Profile).filter(Profile.user_id == user_id).first()

        if not profile:
            return "Profil non trouvé"

        # Récupérer la catégorie du profil
        category = db.query(Category).filter(Category.id == profile.category_id).first()

        if not category:
            return "Catégorie non trouvée"

        # Récupérer la question de la catégorie
        question = db.query(Question).filter(Question.category_id == category.id).first()

        if not question:
            return "Question non trouvée"

        # Construire la chaîne d'informations à partir des questions
        info_string = f"{question.question}: {question.response}"

        prompt = f"""
        Tu es un expert en psychologie amical à l'écoute des besoins de ses patients.
        TU es là pour conseiller les étudiants dans leurs difficultés émotionnelles et physiques quotidiennes.
        Voici des informations sur un étudiant :
        {info_string}
        À partir de ces informations, génère une série de suggestions (environ 3) pour améliorer le bien-être mental et physique de l'étudiant.
        Exemple de réponse :
            - Conseil 1
            - Conseil 2
            - Conseil 3
        Réponds d'une façon concise, précise et simple.
        La réponse doit être en français.
        Ne donnes que les conseils et évites les phrases vagues.
        """
        result = model.generate_content(prompt)
        return result.text

    except Exception as e:
        print(f"Une erreur s'est produite : {e}")
        return "Une erreur s'est produite. Veuillez réessayer."