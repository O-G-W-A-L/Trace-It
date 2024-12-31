import firebase_admin
from firebase_admin import credentials, auth
from flask import jsonify, request
from functools import wraps
import os

# Initialize Firebase Admin SDK
if not firebase_admin._apps:
    cred_path = os.path.abspath("config/service.json")
    cred = credentials.Certificate(cred_path)
    firebase_admin.initialize_app(cred)

def verify_token(func):
    """
    Decorator to verify Firebase authentication token.
    """
    @wraps(func)
    def wrapper(*args, **kwargs):
        token = request.headers.get("Authorization", "").replace("Bearer ", "")
        if not token:
            return jsonify({"error": "Token missing"}), 401
        try:
            decoded_token = auth.verify_id_token(token)
            request.user = decoded_token  # Attach user data to request object
        except Exception as e:
            return jsonify({"error": "Authentication failed", "details": str(e)}), 401
        return func(*args, **kwargs)
    return wrapper

def require_role(*roles):
    """
    Decorator to enforce role-based access control.
    """
    def decorator(func):
        @wraps(func)
        def wrapped(*args, **kwargs):
            if not hasattr(request, "user"):
                return jsonify({"error": "User not authenticated"}), 401
            user_role = request.user.get("role")
            if user_role not in roles:
                return jsonify({"error": "Access forbidden for this role"}), 403
            return func(*args, **kwargs)
        return wrapped
    return decorator
