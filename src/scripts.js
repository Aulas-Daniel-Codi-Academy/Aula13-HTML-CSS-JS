// Substitua pela sua chave da API do OpenWeatherMap
const apiKey = "43240b1aab369620e5a467547f42d6ce";

// Pegando os elementos da página
const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");

// Função para buscar o clima
async function buscarClima() {
  const city = cityInput.value;

  // Verifica se o campo está vazio
  if (!city) return alert("Por favor, digite uma cidade.");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=pt_br&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Cidade não encontrada.");
    const data = await response.json();

    document.getElementById("cityName").innerText = data.name;
    document.getElementById("temperature").innerText = Math.round(
      data.main.temp
    );
    document.getElementById("condition").innerText =
      data.weather[0].description;

    document.getElementById("weatherResult").classList.remove("hidden");
  } catch (error) {
    alert("Erro: " + error.message);
  }
}

// Evento de clique no botão
searchBtn.addEventListener("click", buscarClima);

// Evento de pressionar tecla no input
cityInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    buscarClima(); // Chama a função se for a tecla Enter
  }
});
