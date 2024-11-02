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

// Função para buscar o endereço
async function searchEndereco(searchId) {
  const endereco = document.getElementById(searchId).value;
  const errorMessage = document.getElementById("error-message");

  // Limpa a mensagem de erro
  errorMessage.classList.remove("show");

  if (!endereco) {
      showErrorMessage("Digite um endereço para buscar.");
      return;
  }

  // Solicitação para Nominatim
  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(endereco)}`;
  try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.length === 0) {
          return;
      }

      // Exibir o primeiro resultado
      const resultado = data[0];
      const lat = parseFloat(resultado.lat);
      const lon = parseFloat(resultado.lon);

      // Atualizar o mapa para o local
      map.setView([lat, lon], 15);

      // Adicionar marcador
      L.marker([lat, lon]).addTo(map)
          .bindPopup(`<b>${resultado.display_name}</b>`)
          .openPopup();
  } catch (error) {
      console.error("Erro ao buscar o endereço:", error);
  }
}

// Função para exibir mensagens de erro
function showErrorMessage(message) {
  const errorMessage = document.getElementById("error-message");
  errorMessage.textContent = message;
  errorMessage.classList.add("show");

  // Oculta a mensagem após 3 segundos
  setTimeout(() => {
      errorMessage.classList.remove("show");
  }, 3000); 
}
