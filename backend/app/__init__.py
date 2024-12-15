from flask import Flask
from flask_cors import CORS
from app.routes import api_routes

def create_app():
    """
    Factory function to create and configure the Flask app.
    """
    app = Flask(__name__)
    CORS(app)  # Enable CORS for all routes

    # Register blueprints
    app.register_blueprint(api_routes, url_prefix="/api")

    # Root route
    @app.route("/", methods=["GET"])
    def home():
        return {"message": "Welcome to the Trace-It backend!"}, 200

    return app
