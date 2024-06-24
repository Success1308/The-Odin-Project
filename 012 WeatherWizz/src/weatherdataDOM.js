// weatherdataDOM.js

import { updateCurrentWeatherIcon } from "./weatherIcons";

export function createWeatherCard(data, unit) {
  const weatherCard = document.createElement("div");
  weatherCard.className = "cardContainer";

  const card = document.createElement("div");
  card.className = "card";

  const city = document.createElement("p");
  city.className = "city";
  city.textContent = `${data.location.name} `;
  card.appendChild(city);

  const weather = document.createElement("p");
  weather.className = "weather";
  weather.textContent = data.current.condition.text.toUpperCase();
  card.appendChild(weather);

  const icon = document.createElement("img");

  const iconUrl = updateCurrentWeatherIcon(data);
  icon.src = iconUrl;
  icon.alt = data.current.condition.text;

  card.appendChild(icon);

  const temp = document.createElement("p");
  temp.className = "temp";
  if (unit === "metric") {
    temp.textContent = `${Math.round(data.current.temp_c)}°C`;
  } else {
    temp.textContent = `${Math.round(data.current.temp_f)}°F`;
  }
  card.appendChild(temp);

  weatherCard.appendChild(card);

  return weatherCard;
}

export function createWeatherInfo(data, unit) {
  const weatherInfo = document.createElement("div");
  weatherInfo.className = "weather__info";

  const realFeel = createWeatherInfoCard(
    "fa-temperature-full",
    "Feels Like",
    unit === "metric"
      ? `${Math.round(data.current.feelslike_c)}°C`
      : `${Math.round(data.current.feelslike_f)}°F`
  );
  weatherInfo.appendChild(realFeel);

  const humidity = createWeatherInfoCard(
    "fa-droplet",
    "Humidity",
    `${data.current.humidity}%`
  );
  weatherInfo.appendChild(humidity);

  const wind = createWeatherInfoCard(
    "fa-wind",
    "Wind",
    unit === "metric"
      ? `${data.current.wind_kph} kph`
      : `${data.current.wind_mph} mph`
  );
  weatherInfo.appendChild(wind);

  const pressure = createWeatherInfoCard(
    "fa-gauge-high",
    "Pressure",
    `${data.current.pressure_mb} hPa`
  );
  weatherInfo.appendChild(pressure);

  return weatherInfo;
}

function createWeatherInfoCard(iconClass, label, value) {
  const card = document.createElement("div");
  card.className = "weather__card";

  const icon = document.createElement("i");
  icon.className = `fa-solid ${iconClass}`;
  card.appendChild(icon);

  const textContainer = document.createElement("div");
  const labelElem = document.createElement("p");
  labelElem.textContent = label;
  const valueElem = document.createElement("p");
  valueElem.className = `weather__${label.toLowerCase().replace(" ", "")}`;
  valueElem.innerHTML = value;
  textContainer.appendChild(labelElem);
  textContainer.appendChild(valueElem);

  card.appendChild(textContainer);
  return card;
}
