from firebase_admin import firestore

db = firestore.client()

def get_user_role(uid):
    """
    Retrieve the user's role from Firestore.
    """
    try:
        user_doc = db.collection("users").document(uid).get()
        if user_doc.exists:
            return user_doc.to_dict().get("role")
    except Exception as e:
        print(f"Error fetching user role: {e}")
    return None

def save_user_data(uid, user_data):
    """
    Save user data to Firestore.
    """
    try:
        db.collection("users").document(uid).set(user_data)
        return True
    except Exception as e:
        print(f"Error saving user data: {e}")
        return False

def update_user_role(uid, new_role):
    """
    Update the user's role in Firestore.
    """
    try:
        db.collection("users").document(uid).update({"role": new_role})
        return True
    except Exception as e:
        print(f"Error updating user role: {e}")
        return False