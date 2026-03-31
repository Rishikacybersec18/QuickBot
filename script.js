function sendMessage() {
    let inputField = document.getElementById("user-input");
    let input = inputField.value.trim();
    let chatBox = document.getElementById("chat-box");

    if (input === "") return;

    // Show user message
    chatBox.innerHTML += `<p class="user">${input}</p>`;

    input = input.toLowerCase();
    let response = "";

    // 🔥 Improved conditions
    if (input.includes("hello") || input.includes("hi")) {
        response = "Hi! How can I help you?";
    } 
    else if (input.includes("how are you")) {
        response = "I'm doing great! 😊";
    } 
    else if (input.includes("name")) {
        response = "I am QuickBot 🤖";
    } 
    else if (input.includes("help")) {
        response = "I can answer basic questions!";
    } 
    else if (input.includes("project")) {
        response = "This is a chatbot built using JavaScript.";
    } 
    else if (input.includes("ai")) {
        response = "AI stands for Artificial Intelligence.";
    } 
    else if (input.includes("bye")) {
        response = "Goodbye! Have a great day!";
    } 
    else {
        response = "Sorry, I didn't understand that.";
    }

    // Delay for bot reply (cool effect)
    setTimeout(() => {
        chatBox.innerHTML += `<p class="bot">${response}</p>`;

        // Auto scroll
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 400);

    inputField.value = "";

    // Scroll for user message too
    chatBox.scrollTop = chatBox.scrollHeight;
}


// 🔥 Enter key support
document.getElementById("user-input").addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        e.preventDefault();
        sendMessage();
    }
});