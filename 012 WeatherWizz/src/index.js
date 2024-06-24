// index.js

import "./style.css";
import { createLogo, createWeatherHeader } from "./DOM.js";
import { fetchWeatherData } from "./weatherAPI.js";
import { createWeatherCard, createWeatherInfo } from "./weatherdataDOM.js";

const mainContainer = document.querySelector(".main-container");
const subContainer = document.createElement("div");
subContainer.className = "container";

let currentCity = "new york";
let currentUnit = "metric";

document.addEventListener("DOMContentLoaded", initializeApp);

async function initializeApp() {
  subContainer.appendChild(createLogo());
  subContainer.appendChild(createWeatherHeader(updateWeatherUnits));
  mainContainer.appendChild(subContainer);

  setupEventListeners();

  const storedCity = localStorage.getItem("weatherAppCity");
  if (storedCity) {
    currentCity = storedCity;
  }

  if (currentCity) {
    await updateWeather(currentCity, currentUnit);
  }
}

function setupEventListeners() {
  const searchForm = document.querySelector(".weather__search");
  searchForm.addEventListener("submit", handleSearch);

  const searchInput = document.querySelector(".weather__searchform");
  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch(event);
    }
  });
}

async function updateWeather(city, unit) {
  try {
    const data = await fetchWeatherData(city);
    if (data) {
      updateWeatherUI(data, unit);
      toggleUnitActiveClass(unit);
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

async function handleSearch(event) {
  event.preventDefault();
  const searchInput = document.querySelector(".weather__searchform");
  const city = searchInput.value.trim();
  searchInput.value = "";

  if (city) {
    currentCity = city;
    await updateWeather(city, currentUnit);
  }
  localStorage.setItem("weatherAppCity", currentCity);
}

async function updateWeatherUnits(unit) {
  currentUnit = unit;
  await updateWeather(currentCity, unit);
}

function updateWeatherUI(data, unit) {
  clearExistingWeatherElements();

  const weatherCard = createWeatherCard(data, unit);
  const weatherInfo = createWeatherInfo(data, unit);

  subContainer.appendChild(weatherCard);
  subContainer.appendChild(weatherInfo);
}

function clearExistingWeatherElements() {
  const existingWeatherCard = subContainer.querySelector(".cardContainer");
  const existingWeatherInfo = subContainer.querySelector(".weather__info");

  if (existingWeatherCard) subContainer.removeChild(existingWeatherCard);
  if (existingWeatherInfo) subContainer.removeChild(existingWeatherInfo);
}

function toggleUnitActiveClass(unit) {
  const unitCelsius = document.querySelector(".weather_unit_celsius");
  const unitFahrenheit = document.querySelector(".weather_unit_farenheit");

  if (unit === "metric") {
    unitCelsius.classList.add("active");
    unitFahrenheit.classList.remove("active");
  } else {
    unitCelsius.classList.remove("active");
    unitFahrenheit.classList.add("active");
  }
}
