const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');

socket.addEventListener('message', (event) => {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', 'received');
  messageElement.textContent = event.data;
  chatMessages.appendChild(messageElement);
  chatMessages.scrollTop = chatMessages.scrollHeight;
});

function sendMessage() {
  const message = chatInput.value;
  if (message.trim() === '') return;

  const messageElement = document.createElement('div');
  messageElement.classList.add('message', 'sent');
  messageElement.textContent = message;
  chatMessages.appendChild(messageElement);

  socket.send(message);
  chatInput.value = '';
  chatMessages.scrollTop = chatMessages.scrollHeight;
}
