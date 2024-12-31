from flask_cors import CORS
from app import create_app

# Create the Flask app and enable CORS for specific origins
app = create_app()

# Enable CORS for both localhost and Vercel URLs
CORS(app, origins=["http://localhost:5173", "https://trace-it-nine.vercel.app"], supports_credentials=True)

if __name__ == "__main__":
    app.run(debug=True)
