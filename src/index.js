function formatDate(now) {
  let date = now.getDate();
  if (date < 10) {
    date = `0${date}`;
  }
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let years = now.getFullYear();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[now.getDay()];
  let months = now.getMonth() + 1;
  if (months < 10) {
    months = `0${months}`;
  }
  return `${day}, ${months}/${date}/${years}, ${hours}:${minutes}`;
}

let now = new Date();
let dateTime = document.querySelector("#current-date");
dateTime.innerHTML = formatDate(now);

function searchCity(event) {
  event.preventDefault();
  let city = document.querySelector("#present-city");
  let inputCity = document.querySelector("#cityInput");
  city.innerHTML = inputCity.value;

  let searchCity = document.querySelector("#cityInput");
  let apiKey = "e4ed7896f0b74bd1c1058cf4259ba869";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity.value}&appid=${apiKey}&units=metric`;

  function displayTemp(response) {
    let presentCity = response.data.name;
    let currentTemp = Math.round(response.data.main.temp);
    let cityElement = document.querySelector("#present-city");
    let tempElement = document.querySelector("#current-temp");
    let descriptionElement = document.querySelector("#description");
    let precipitationElement = document.querySelector("#current-precipitation");
    let humidityElement = document.querySelector("#current-humidity");
    let windElement = document.querySelector("#current-windspeed");
    let iconElement = document.querySelector("#weather-icon");

    celsiusTemperature = Math.round(response.data.main.temp);

    cityElement.innerHTML = presentCity;
    tempElement.innerHTML = `${currentTemp}°C`;
    descriptionElement.innerHTML = response.data.weather[0].description;
    precipitationElement.innerHTML = response.data.main.precipitation;
    humidityElement.innerHTML = response.data.main.humidity;
    windElement.innerHTML = Math.round(response.data.wind.speed);
    iconElement.setAttribute(
      "src",
      `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
    iconElement.setAttribute("alt", response.data.weather[0].description);
  }
  axios.get(apiUrl).then(displayTemp);
}

let form = document.querySelector("#cityInput");
form.addEventListener("submit", searchCity);

function displayLocation(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "e4ed7896f0b74bd1c1058cf4259ba869";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemp);
}

function getCurrentPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(displayLocation);
}

function displayFahrenheitTemp(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#degree-temp");
  celsius.classList.remove("active");
  fahrenheit.classList.add("active");
  let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}

function displayCelsiusTemp(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#degree-temp");
  celsius.classList.add("active");
  fahrenheit.classList.remove("active");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

let celsiusTemperature = null;

let button = document.querySelector("#current-button");
button.addEventListener("click", getCurrentPosition);

let fahrenheitLink = document.querySelector("#fahrenheit");
fahrenheitLink.addEventListener("click", displayFahrenheitTemp);

let celsiusLink = document.querySelector("#celsius-active");
celsiusLink.addEventListener("click", displayCelsiusTemp);

searchCity("Enugu");
