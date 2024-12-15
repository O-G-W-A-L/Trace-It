from flask import Blueprint, jsonify, request
from app.auth import verify_token
from app.firestore import get_user_role

# Blueprint for API routes
api_routes = Blueprint("api_routes", __name__)

@api_routes.route("/hello", methods=["GET"])
def hello_world():
    """
    Test route to confirm API is working.
    """
    return jsonify({"message": "Hello, world! The backend is working."}), 200

@api_routes.route("/get_user_role", methods=["GET"])
@verify_token
def user_role():
    """
    Route to fetch the role of a user from Firestore.
    Requires a valid Firebase authentication token.
    """
    uid = request.user["uid"]  # Extract user ID from decoded token
    role = get_user_role(uid)
    if role:
        return jsonify({"role": role}), 200
    return jsonify({"error": "Role not found"}), 404

@api_routes.route("/protected", methods=["GET"])
@verify_token
def protected():
    """
    Example of a protected route that requires authentication.
    """
    user = request.user
    return jsonify({"message": f"Welcome, {user['email']}!", "uid": user["uid"]}), 200
