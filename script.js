// $(document).ready(function () {

var apikey = "e43f64ee98be9268f7a7f49e34aecfdf";
let CITY = "portsmouth,us";

const currentLocation = $(".weather-content_overview")[0];
const currentTemp = $(".weather-content_temp")[0];
const forecast = $(".component-forecast-box")[0];

function getWeather() {
  const URL = "https://api.openweathermap.org/data/2.5/forecast/daily?q=" + CITY + "&cnt=7&units=imperial&APPID=" + apikey;
  const headers = new Headers();

  return fetch(URL, {
    method: 'GET',
    headers: headers
  }).then(data => {
    return data.json();
  });
}

function applyIcon(icon) {
  let selectedIcon;
  switch (icon) {
    case '01d':
      selectedIcon = "wi-day-sunny"
      break;
    case '01n':
      selectedIcon = "wi-night-clear"
      break;
    case '02d':
    case '02n':
      selectedIcon = "wi-clody"
      break;
    case '03d':
    case '03n':
    case '04d':
    case '04n':
      selectedIcon = "wi-night-cloudy"
      break;
    case '10d':
    case '10n':
      selectedIcon = "wi-rain"
      break;
    case '11d':
    case '11n':
      selectedIcon = "wi-thunderstorm"
      break;
    case '13d':
    case '13n':
      selectedIcon = "wi-snow"
      break;
    case '50d':
    case '50n':
      selectedIcon = "wi-fog"
      break;
    default:
      selectedIcon = "wi-meteor"
  }
  return selectedIcon;
}

getWeather().then(weatherData => {
  let city = weatherData.city.name;
  let dailyForecast = weatherData.list;

  renderData(city, dailyForecast);
})

renderData = (location, forecast) => {
  const currentWeather = forecast[0].weather[0];
  const widgetHeader = `<h1>${location}</h1><small>${currentWeather.description}</small>`;

  currentTemp.innerHTML = `<i class="wi ${applyIcon(currentWeather.icon)}"></i>
  ${Math.round(forecast[0].temp.day)} <i class="wi wi-degrees"></i>`;

  currentLocation.innerHTML = widgetHeader;

  //daily forecast
  forecast.forEach(day => {
    let date = new Date(day.dt * 1000);
    let days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    let name = days[date.getDay()];
    let dayBlock = document.createElement("div");
    dayBlock.className = 'forecast_item';
    dayBlock.innerHTML = 
    `<div class="forecast-item_heading">${name}</div>
    <div class="forecast-item_info>
    <i class="wi ${applyIcon(days.weather[0].icon)}"></i>
    <span class="degrees">${Math.round(days.temp.day)}
    <i class="wi wi-degrees"></i></span></div>`;
  forecast.appendChild(dayblock);
  });
}

if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    const coordinates = `lat=${position.coords.latitude}&lon=${position.coords.longitude}`;

    getWeather(coordinates).then(weatherData => {
      const city = weatherData.city;
      const dailyForecast = weatherData.list;

      renderData(city, dailyForecast);
    });
  }, e => console.log(e));
} else {
  console.log('Unable to retrieve location from browser')
}









// $.ajax({
//   url: queryURL,
//   method: "GET"
// }).done(function (response) {

//   console.log(response);

//   var name = response.city.name;
//   console.log(name);
//   $("#title").append(name);

//   var temp = response.list[0].main.temp;
//   console.log("temperature: " + temp);
//   $("#temp").append(temp);

//   var humidity = response.list[0].main.humidity;
//   console.log("humidity: " + humidity);
//   $("#humid").append(humidity);

//   var windSpeed = response.list[0].wind.speed;
//   console.log("wind speed: " + windSpeed);
//   $("#wind").append(windSpeed);

// });






// //Get date
// const startdate = [];

// const startWeek = moment().format('LL'); 

// console.log(startWeek);

// const endWeek = moment().day(10).format('LL'); 
// console.log(endWeek);

// $("#date1").append(startWeek);
