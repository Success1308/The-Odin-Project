// weatherAPI.js
const API_KEY = "b1089ba324104bd3a0d145553242006";
const API_URL = "https://api.weatherapi.com/v1";

export async function fetchWeatherData(city) {
  const url = `${API_URL}/current.json?key=${API_KEY}&q=${city}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Weather data not available");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    alert("Please ensure the city name is correct.");
    return null;
  }
}
