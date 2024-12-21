from app import create_app

# Entry point for the Flask app
app = create_app()

if __name__ == "__main__":
    app.run(debug=True, port=5000, host="0.0.0.0")  # Expose the app on all interfaces
