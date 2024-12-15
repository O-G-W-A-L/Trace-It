import firebase_admin
from firebase_admin import credentials, auth
from flask import jsonify, request
from functools import wraps

# Initialize Firebase Admin SDK
cred = credentials.Certificate("path_to_service_account.json")  # Replace with your Firebase key path
firebase_admin.initialize_app(cred)

def verify_token(func):
    """
    Decorator to verify Firebase authentication token.
    Adds the decoded user token to `request.user` if valid.
    """
    @wraps(func)
    def wrapper(*args, **kwargs):
        token = request.headers.get("Authorization", "").replace("Bearer ", "")
        if not token:
            return jsonify({"error": "Authorization token is missing"}), 401
        try:
            decoded_token = auth.verify_id_token(token)
            request.user = decoded_token
        except Exception as e:
            return jsonify({"error": "Unauthorized", "details": str(e)}), 401
        return func(*args, **kwargs)
    return wrapper
