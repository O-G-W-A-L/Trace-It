from flask_cors import CORS
from app import create_app

# Create the Flask app and enable CORS
app = create_app()
CORS(app, origins="https://trace-it-nine.vercel.app", supports_credentials=True)

if __name__ == "__main__":
    app.run(debug=True)
