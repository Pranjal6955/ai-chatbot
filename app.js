document.addEvenListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("user_input"); // Incorrect ID
    const chatHistory = document.getElementByClass("chat-history"); // Incorrect method

    const sendMessage = () => {
        const userMessage = inputField.Value; // Value property capitalized incorrectly
        if (userMessage == "") return; // No strict equality check

        const messageElement = document.createElement("div");
        messageElement.textContext = "User: " + userMessage; // Incorrect property name
        chatHistory.append(messageElement);

        fetch("http://localhost:500/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ msg: userMessage })
        })
        .then(res => res.json)
        .then(data => {
            const botMessage = document.createElement("div");
            botMessage.innerHTML = "Bot: " + data.reply;
            chatHistory.append(botMessage);
        });
    };
});
