from flask import Flask, jsonify
from flask_cors import CORS

def create_app():
    """
    Factory function to create and configure the Flask app.
    """
    app = Flask(__name__)

    # Enable CORS for both localhost and Vercel frontend URLs
    CORS(app, resources={
        r"/*": {
            "origins": ["http://localhost:5173", "https://trace-it-tau.vercel.app"],
            "supports_credentials": True
        }
    })

    # Import and register blueprints locally to avoid circular imports
    from app_files.routes import api_routes
    app.register_blueprint(api_routes, url_prefix="/api")

    # Error handler for 404
    @app.errorhandler(404)
    def not_found_error(error):
        return jsonify({"error": "Not Found"}), 404

    # Error handler for general exceptions
    @app.errorhandler(Exception)
    def internal_server_error(error):
        return jsonify({"error": "Internal Server Error", "details": str(error)}), 500

    return app
