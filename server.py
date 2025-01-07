from flask import Flask, jsonify, request
from flask_cors import CORS  # Import CORS to allow cross-origin requests

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

def generate_bot_reply(user_message):
    if user_message.lower() == "hello":
        return "Hi there! How can I help you?"
    return "Sorry, I don't understand."

@app.route('/chat', methods=["POST"])
def chat():
    data = request.json
    if not data or 'msg' not in data:
        return jsonify({"error": "Message missing!"}), 400

    user_message = data.get("msg")
    bot_reply = generate_bot_reply(user_message)

    return jsonify({"reply": bot_reply})

if __name__ == "__main__":
    app.run(host="localhost", port=5000, debug=True)
