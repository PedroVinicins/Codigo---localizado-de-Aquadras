
    // Inicializa o mapa
    const map = L.map('map').setView([-1.366005,-48.355368], 6); // Substitua com a latitude e longitude iniciais

    // Adiciona uma camada de mapa base
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Função para carregar o arquivo GeoJSON convertido
    fetch('norte-latest.geojson')
        .then(response => response.json())
        .then(data => {
            L.geoJSON(data).addTo(map);  // Adiciona os dados ao mapa
        })
        .catch(error => console.error("Erro ao carregar os dados:", error));
