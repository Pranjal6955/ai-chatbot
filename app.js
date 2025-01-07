document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("user-input");
    const chatHistory = document.getElementById("chat-history");
    const sendButton = document.getElementById("send-button");

    if (!inputField || !chatHistory || !sendButton) {
        console.error("Required elements not found. Please check the HTML IDs.");
        return;
    }

    const sendMessage = () => {
        const userMessage = inputField.value.trim();
        
        if (userMessage === "") {
            console.warn("Empty message: Please type something.");
            return;
        }

        // Display user's message in the chat history
        const messageElement = document.createElement("div");
        messageElement.textContent = "User: " + userMessage;
        messageElement.classList.add("user-message");
        chatHistory.append(messageElement);

        // Send the user's message to the backend (Flask API)
        fetch("http://localhost:5000/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ msg: userMessage }),
        })
        .then((res) => res.json())
        .then((data) => {
            const botMessage = document.createElement("div");
            botMessage.textContent = "Bot: " + (data.reply || "No reply received");
            botMessage.classList.add("bot-message");
            chatHistory.append(botMessage);
        })
        .catch((err) => {
            const errorMessage = document.createElement("div");
            errorMessage.textContent = "Error: Unable to connect to the server.";
            errorMessage.classList.add("error-message");
            chatHistory.append(errorMessage);
            console.error(err);
        });

        // Clear the input field after sending
        inputField.value = "";
    };

    // Event listener for the send button
    sendButton.addEventListener("click", sendMessage);

    // Optional: Add event listener for pressing Enter key to send the message
    inputField.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            sendMessage();
        }
    });
});
