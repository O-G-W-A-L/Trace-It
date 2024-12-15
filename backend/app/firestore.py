from firebase_admin import firestore

# Initialize Firestore client
db = firestore.client()

def get_user_role(uid):
    """
    Fetch the user's role from Firestore.
    :param uid: User ID
    :return: Role (str) or None if user doesn't exist
    """
    user_doc = db.collection("users").document(uid).get()
    if user_doc.exists:
        return user_doc.to_dict().get("role")
    return None

