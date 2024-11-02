const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');

// Exibir mensagens recebidas no chat
socket.addEventListener('message', (event) => {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', 'received');
  messageElement.textContent = event.data;
  chatMessages.appendChild(messageElement);
  chatMessages.scrollTop = chatMessages.scrollHeight;
});

// Função para enviar mensagens
function sendMessage() {
  const message = chatInput.value;
  if (message.trim() === '') return;

  // Exibir mensagem enviada no chat
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', 'sent');
  messageElement.textContent = message;
  chatMessages.appendChild(messageElement);

  // Enviar mensagem pelo WebSocket
  socket.send(message);
  chatInput.value = '';
  chatMessages.scrollTop = chatMessages.scrollHeight;
}