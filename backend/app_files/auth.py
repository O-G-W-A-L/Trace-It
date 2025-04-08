import firebase_admin
from firebase_admin import credentials, auth
from flask import jsonify, request
from functools import wraps
import os
import logging

# Set up logging
logging.basicConfig(level=logging.DEBUG, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

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
            logger.error("Token missing in request headers")
            return jsonify({"error": "Token missing"}), 401
        
        try:
            logger.info("Attempting to verify token...")
            decoded_token = auth.verify_id_token(token)
            logger.info(f"Token verified successfully. User ID: {decoded_token.get('uid')}")
            request.user = decoded_token  # Attach user data to request object
        except Exception as e:
            logger.error(f"Authentication failed: {str(e)}")
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
                logger.warning("User not authenticated")
                return jsonify({"error": "User not authenticated"}), 401
            
            user_role = request.user.get("role")
            if user_role not in roles:
                logger.warning(f"Access forbidden for role: {user_role}")
                return jsonify({"error": "Access forbidden for this role"}), 403
            
            logger.info(f"User with role {user_role} granted access")
            return func(*args, **kwargs)
        return wrapped
    return decorator
