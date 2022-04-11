function enterCity(event) {
  event.preventDefault();
  let input = document.querySelector("#cityInput");

  let apiKey = "1ff53d14457d338c4cac955b957c";
  let city = `${input.value}`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=metric`;

  function displayTemperature(response) {
    let temperature = Math.round(response.data.main.temp);
    let temp = document.querySelector("#current-time");
    temp.innerHTML = `${temperature}℃`;
  }
  axios.get(`${apiUrl}&APPID=${apiKey}`).then(displayTemperature);
}
let searchForm = document.querySelector("#search-city");
searchForm.addEventListener("submit", enterCity);

function showPosition(position) {
  let currentButton = document.querySelectorAll("#preciseButton");
  currentButton.innerHTML = `your latitude is ${position.coords.latitude}, 
  longitude is ${position.coords.longtitude}`;

  let apiKey = `1ff53d14457d338c4cac955b957c`;
  let latitude = `${position.coords.latitude}`;
  let longtitude = `${position.coords.longtitude}`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longtitude}&appid=${apiKey}`;

  function displayPosition(response) {
    let temperature = Math.round(response.data.main.temp);
    let currentTemp = document.querySelector("#current-temp");
    currentTemp.innerHTML = `${temperature}℃`;
  }

  axios.get(`${apiUrl}&APPID=${apiKey}`).then(displayPosition);
}

function showPrecisePosition() {
  navigator.geolocation.getPrecisePosition(showPosition);
}

let button = document.querySelector("#current-button");
button.addEventListener("click", showPrecisePosition);

let currentTime = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let currentHours = currentTime.getHours();
if (currentHours < 12) {
  currentHours = `0${currentHours}`;
}
let currentMinutes = currentTime.getMinutes();
if (currentMinutes < 12) {
  currentMinutes = `0${currentMinutes}`;
}
let currentDay = days[currentTime.getDay()];
let currentMonth = months[currentTime.getMonth()];
let currentYear = currentTime.getFullYear();

let cTime = document.querySelector("#current-time");
cTime.innerHTML = `${currentDay} ${currentMonth}, ${currentYear} ${currentHours}:${currentMinutes}`;

// function enterCity(event) {
//event.preventDefault();
//let input = document.querySelector("#cityInput");
//let presentCity = document.querySelector("#present-city");
//presentCity.innerHTML = input.value;

//}

//let searchForm = document.querySelector("#search-city");
//searchForm.addEventListener("submit", enterCity);

//function convertCtoF(event) {
//event.preventDefault();
//let cTemp = document.querySelector("#current-temp");
//cTemp.innerHTML = 42;
//}
//let celsuisDegree = document.querySelector("#celsuis");
//celsuisDegree.addEventListener("click", convertCtoF);

//function convertFtoC(event) {
//event.preventDefault();
//let cTemp = document.querySelector("#current-temp");
//cTemp.innerHTML = 17;
//}
//let fahrenheit = document.querySelector("#fahrenheit");
//fahrenheit.addEventListener("click", convertFtoC);
