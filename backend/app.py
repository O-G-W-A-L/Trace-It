from app import create_app

# Entry point for the Flask app
app = create_app()

# Adding a simple test route
@app.route('/api/test', methods=['GET'])
def test():
    return "Test route is working!"

if __name__ == "__main__":
    app.run(debug=True)
