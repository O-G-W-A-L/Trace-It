from flask_cors import CORS
from app_files import create_app

# Create the Flask app and enable CORS for specific origins
app = create_app()

# Enable CORS for both localhost and Vercel URLs, and ensure all necessary headers and methods are allowed
CORS(app, resources={
    r"/*": {
        "origins": [
            "http://localhost:5173",
            "https://trace-it-tau.vercel.app",
            "https://accounts.google.com",
            "https://www.googleapis.com",
            "https://securetoken.google.com",
        ],
        "supports_credentials": True,
        "allow_headers": ["Authorization", "Content-Type"],
        "allow_methods": ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        "expose_headers": ["Content-Type", "Authorization"]
    }
})

# Add Cross-Origin-Opener-Policy headers and ensure the proper handling of CORS headers on all responses
@app.after_request
def apply_cors_headers(response):
    response.headers["Cross-Origin-Opener-Policy"] = "same-origin-allow-popups"
    response.headers["Cross-Origin-Embedder-Policy"] = "require-corp"
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Headers"] = "Content-Type,Authorization"
    response.headers["Access-Control-Allow-Methods"] = "GET,POST,PUT,DELETE,OPTIONS"
    response.headers["Access-Control-Allow-Credentials"] = "true"
    return response

if __name__ == "__main__":
    app.run(debug=True)
