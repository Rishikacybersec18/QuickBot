function sendMessage() {
    let input = document.getElementById("user-input").value;
    let chatBox = document.getElementById("chat-box");

    // Show user message
    chatBox.innerHTML += "<p><b>You:</b> " + input + "</p>";

    input = input.toLowerCase();
    let response = "";

    if (input.includes("hello")||input.includes("hi")) {
        response = "Hi! How can I help you?";
    } 
    else if (input.includes("how are you")) {
        response = "I'm doing great!";
    } 
    else if (input.includes("ai")) {
        response = "AI stands for Artificial Intelligence.";
    } 
    else if (input.includes("bye")) {
        response = "Goodbye!";
    } 
    else {
        response = "Sorry, I didn't understand that.";
    }

    // Show bot response
    chatBox.innerHTML += "<p><b>Bot:</b> " + response + "</p>";

    // Clear input
    document.getElementById("user-input").value = "";
}