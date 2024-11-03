async function searchEndereco(searchId) {
  const endereco = document.getElementById(searchId).value;

  if (!endereco) {
    showErrorMessage("Digite um endereço para buscar.");
    return;
  }
  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(endereco)}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.length === 0) {
      return;
    }

    const resultado = data[0];
    const lat = parseFloat(resultado.lat);
    const lon = parseFloat(resultado.lon);

    map.setView([lat, lon], 15);

    L.marker([lat, lon], { icon: customIcon }) 
      .addTo(map)
      .bindPopup(`<b>${resultado.display_name}</b>`)
      .openPopup();
  } catch (error) {
    showErrorMessage("Erro ao buscar o endereço. Tente novamente.");
    //console.error("Erro ao buscar o endereço:", error); 
  }
}

