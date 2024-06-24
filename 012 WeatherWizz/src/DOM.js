// dom.js

export function createLogo() {
  const logo = document.createElement("div");
  logo.className = "logo";
  return logo;
}

export function createWeatherHeader(updateWeatherUnits) {
  const weatherHeader = document.createElement("div");
  weatherHeader.className = "weather__header";

  const searchForm = document.createElement("form");
  searchForm.className = "weather__search";

  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Search for a city...");
  input.className = "weather__searchform";

  const searchIcon = document.createElement("i");
  searchIcon.className = "fa-solid fa-magnifying-glass";

  searchForm.appendChild(input);
  searchForm.appendChild(searchIcon);

  const weatherUnits = document.createElement("div");
  weatherUnits.className = "weather__units";

  const unitCelsius = document.createElement("span");
  unitCelsius.className = "weather_unit_celsius active";
  unitCelsius.innerHTML = "&#176C";
  unitCelsius.addEventListener("click", () => updateWeatherUnits("metric"));

  const unitFahrenheit = document.createElement("span");
  unitFahrenheit.className = "weather_unit_farenheit";
  unitFahrenheit.innerHTML = "&#176F";
  unitFahrenheit.addEventListener("click", () =>
    updateWeatherUnits("imperial")
  );

  weatherUnits.appendChild(unitCelsius);
  weatherUnits.appendChild(unitFahrenheit);

  weatherHeader.appendChild(searchForm);
  weatherHeader.appendChild(weatherUnits);

  return weatherHeader;
}
