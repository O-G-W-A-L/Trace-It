from flask import Blueprint, jsonify, request
from app.auth import verify_token, require_role
from app.firestore import get_user_role, save_user_data

api_routes = Blueprint("api_routes", __name__)

@api_routes.route("/hello", methods=["GET"])
def hello():
    return jsonify({"message": "Hello from the backend!"}), 200


@api_routes.route("/login", methods=["POST"])
@verify_token
def login_user():
    """
    Endpoint to handle user login.
    Validates the Firebase ID token and returns the user's role.
    """
    try:
        user = request.user
        user_id = user["uid"]

        # Retrieve the user's role from Firestore
        role = get_user_role(user_id)
        if not role:
            return jsonify({"error": "User role not found"}), 404

        return jsonify({"message": "Login successful", "role": role}), 200
    except Exception as e:
        return jsonify({"error": "Login failed", "details": str(e)}), 500

@api_routes.route("/register", methods=["POST"])
@verify_token
def register_user():
    """
    Endpoint to handle user registration.
    Saves user data to Firestore.
    """
    try:
        data = request.get_json()
        uid = data.get("uid")
        user_data = data.get("userData")

        if not uid or not user_data:
            return jsonify({"error": "Invalid input"}), 400

        success = save_user_data(uid, user_data)
        if not success:
            return jsonify({"error": "Failed to save user data"}), 500

        return jsonify({"message": "User registered successfully"}), 200
    except Exception as e:
        return jsonify({"error": "Registration failed", "details": str(e)}), 500

@api_routes.route("/admin/users", methods=["GET"])
@verify_token
@require_role("admin")
def get_users():
    """
    Admin-only route to fetch all users.
    """
    # Implement logic to retrieve all users from Firestore
    return jsonify({"message": "Admin access granted"}), 200
