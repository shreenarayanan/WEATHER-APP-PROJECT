const apiKey = 'YOUR_API_KEY'; // Replace this with your API key from the weather service provider

document.getElementById('searchButton').addEventListener('click', () => {
  const cityInput = document.getElementById('cityInput').value;
  getWeatherData(cityInput);
});

async function getWeatherData(city) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
    const data = await response.json();
    displayWeatherData(data);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    alert('Error fetching weather data. Please try again later.');
  }
}

function displayWeatherData(data) {
  const cityName = document.getElementById('cityName');
  const temperature = document.getElementById('temperature');
  const description = document.getElementById('description');

  cityName.textContent = data.name;
  temperature.textContent = `${Math.round(data.main.temp)}°C`;
  description.textContent = data.weather[0].description;
}

