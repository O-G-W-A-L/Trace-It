from flask import Blueprint, jsonify, request
from app_files.auth import verify_token, require_role
from app_files.firestore import get_user_role, save_user_data

api_routes = Blueprint("api_routes", __name__)

@api_routes.route("/login", methods=["POST"])
@verify_token
def login_user():
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
    try:
        # Implement logic to retrieve all users from Firestore
        return jsonify({"message": "Admin access granted"}), 200
    except Exception as e:
        return jsonify({"error": "Failed to fetch users", "details": str(e)}), 500
