document.getElementById("send-button").addEventListener("click", function() {
    sendMessage();
  });
  
  document.getElementById("user-message").addEventListener("keydown", function(e) {
    if (e.code === "Enter") {
      sendMessage();
    }
  });
  
  function sendMessage() {
    var messageInput = document.getElementById("user-message");
    var message = messageInput.value;
  
    if (message.trim() !== "") {
      var messageElement = document.createElement("div");
      messageElement.innerText = "Usuario: " + message;
      document.getElementById("messages").appendChild(messageElement);
  
      messageInput.value = "";
    }
  }