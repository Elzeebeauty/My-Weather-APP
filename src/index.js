//Week 5 homework

function enterCity(event) {
  event.preventDefault();
  let input = document.querySelector("#cityInput");

  let apiKey = "e4ed7896f0b74bd1c1058cf4259ba869";
  let city = `${input.value}`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemperature);
}
let searchForm = document.querySelector("#search-city");
searchForm.addEventListener("submit", enterCity);

function displayTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let temp = document.querySelector("#current-temp");
  temp.innerHTML = `${temperature}℃`;
  let cityElement = document.querySelector("#present-city");
  cityElement.innerHTML = response.data.name;
}

//Wk 5 Bonus

function showPosition(position) {
  let currentButton = document.querySelectorAll("#preciseButton");
  currentButton.innerHTML = `your latitude is ${position.coords.latitude}, 
  longitude is ${position.coords.longtitude}`;

  let apiKey = "e4ed7896f0b74bd1c1058cf4259ba869";
  let latitude = `${position.coords.latitude}`;
  let longitude = `${position.coords.longitude}`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemperature);
}

function showPrecisePosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let button = document.querySelector("#current-button");
button.addEventListener("click", showPrecisePosition);

// Week 4 HomeWork

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
// #1

let currentHours = currentTime.getHours();
if (currentHours < 10) {
  currentHours = `0${currentHours}`;
}
let currentMinutes = currentTime.getMinutes();
if (currentMinutes < 10) {
  currentMinutes = `0${currentMinutes}`;
}
let currentDay = days[currentTime.getDay()];
let currentMonth = months[currentTime.getMonth()];
let currentYear = currentTime.getFullYear();

let cTime = document.querySelector("#current-time");
cTime.innerHTML = `${currentDay} ${currentMonth}, ${currentYear} ${currentHours}:${currentMinutes}`;

// #2
// function enterCity(event) {
//event.preventDefault();
//let input = document.querySelector("#cityInput");
//let presentCity = document.querySelector("#present-city");
//presentCity.innerHTML = input.value;

//}

//let searchForm = document.querySelector("#search-city");
//searchForm.addEventListener("submit", enterCity);

// Bonus

function convertCtoF(event) {
  event.preventDefault();
  let cTemp = document.querySelector("#current-temp");
  cTemp.innerHTML = 42;
}
let celsuisDegree = document.querySelector("#celsuis");
celsuisDegree.addEventListener("click", convertCtoF);

function displayFahrenheit(response) {
  console.log(response);
  document.querySelector("current-temp").innerHTML = Math.round(
    response.data.main.temp
  );
}

function callFahrenheit(event) {
  event.preventDefault();
  let apiKey = "e4ed7896f0b74bd1c1058cf4259ba869";
  let city = document.querySelector("#present-city").value;
  let apiUrl = `https:api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayFahrenheit);
}

let actualFahrenheit = document.querySelector("#fahrenheit");
actualFahrenheit.addEventListener("click", callFahrenheit);

//function convertFtoC(event) {
//event.preventDefault();
//let cTemp = document.querySelector("#current-temp");
//cTemp.innerHTML = 17;
//}
//let fahrenheit = document.querySelector("#fahrenheit");
//fahrenheit.addEventListener("click", convertFtoC);
