document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("user-input");
    const chatHistory = document.getElementById("chat-history");
    const sendButton = document.getElementById("send-button");

    if (!inputField || !chatHistory || !sendButton) {
        console.error("Required elements not found. Please check the HTML IDs.");
        return;
    }

    // Function to dynamically adjust the chat layout based on screen size
    const adjustLayout = () => {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        // Adjust chat history height dynamically
        chatHistory.style.height = `${windowHeight * 0.7}px`;
        chatHistory.style.overflowY = "auto";

        // Adjust input field width for smaller screens
        if (windowWidth < 600) {
            inputField.style.width = "80%";
            sendButton.style.width = "18%";
        } else {
            inputField.style.width = "90%";
            sendButton.style.width = "8%";
        }
    };

    adjustLayout();
    window.addEventListener("resize", adjustLayout);

    const sendMessage = () => {
        const userMessage = inputField.value.trim();

        if (userMessage === "") {
            alert("Please type a message before sending.");
            return;
        }

        // Display user's message in the chat history
        const messageElement = document.createElement("div");
        messageElement.textContent = "User: " + userMessage;
        messageElement.classList.add("user-message");
        chatHistory.append(messageElement);

        // Scroll to the bottom of the chat history
        chatHistory.scrollTop = chatHistory.scrollHeight;

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

                chatHistory.scrollTop = chatHistory.scrollHeight;
            })
            .catch((err) => {
                const errorMessage = document.createElement("div");
                errorMessage.textContent = "Error: Unable to connect to the server.";
                errorMessage.classList.add("error-message");
                chatHistory.append(errorMessage);
                console.error(err);
            });

        inputField.value = "";
    };

    sendButton.addEventListener("click", sendMessage);

    inputField.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            sendMessage();
        }
    });
});
