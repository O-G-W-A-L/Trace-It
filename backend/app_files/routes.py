from flask import Blueprint, jsonify, request, make_response
from app_files.auth import verify_token, require_role
from app_files.firestore import get_user_role, save_user_data
import google.auth
from google.auth.transport.requests import Request

api_routes = Blueprint("api_routes", __name__)

# Handle preflight for CORS requests
@api_routes.route("/<path:path>", methods=["OPTIONS"])
def handle_preflight(path):
    response = make_response()
    response.headers["Access-Control-Allow-Origin"] = request.headers.get("Origin")
    response.headers["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS"
    response.headers["Access-Control-Allow-Headers"] = "Authorization, Content-Type, Accept"
    response.headers["Access-Control-Allow-Credentials"] = "true"
    return response

# Login route for Firebase Auth users
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

# Google login route
@api_routes.route("/google-login", methods=["POST"])
def google_login_user():
    try:
        # Get the Google OAuth access token from the request
        token = request.headers.get("Authorization", "").replace("Bearer ", "")
        if not token:
            return jsonify({"error": "Token missing"}), 401

        # Verify the token using Google's API
        credentials, project = google.auth.default()
        credentials = credentials.with_access_token(token)
        credentials.refresh(Request())

        # Decode the Google token to get user info
        user_info = credentials.id_token
        if not user_info:
            return jsonify({"error": "Invalid token"}), 400

        user_id = user_info.get("sub")  # Google user ID

        # Fetch the user's role from Firestore
        role = get_user_role(user_id)
        if not role:
            return jsonify({"error": "User role not found"}), 404

        # Return the role to the frontend
        return jsonify({"message": "Google login successful", "role": role}), 200
    except Exception as e:
        return jsonify({"error": "Google login failed", "details": str(e)}), 500

# Register route for new users
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

# Admin route to fetch all users
@api_routes.route("/admin/users", methods=["GET"])
@verify_token
@require_role("admin")
def get_users():
    try:
        # Implement logic to retrieve all users from Firestore
        return jsonify({"message": "Admin access granted"}), 200
    except Exception as e:
        return jsonify({"error": "Failed to fetch users", "details": str(e)}), 500
