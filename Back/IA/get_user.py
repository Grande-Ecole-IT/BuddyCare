from sqlalchemy.orm import Session
from models.Category import Category
from models.User import User
from models.Profile import Profile
from models.Question import Question

def get_user_questions(user_id: int, db: Session):
    try:
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

        return question

    except Exception as e:
        print(f"Une erreur s'est produite: {e}")
        return None