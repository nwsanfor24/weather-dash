// $(document).ready(function () {

var apikey = "945dc5fe55069a270dcc159ead1201ef";
var city = "portsmouth,us";

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + apikey;
var queryURL2 = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "APPID=" + apikey;

$.ajax({
  url: queryURL,
  method: "GET"
}).done(function (response) {

  console.log(response);

  var name = response.name;
  console.log(name);
  $("#title").append(name);

  var temp = response.main.temp;
  console.log("temperature: " + temp);
  $("#temp").append(temp);

  var humidity = response.main.humidity;
  console.log("humidity: " + humidity);
  $("#humid").append(humidity);

  var windSpeed = response.wind.speed;
  console.log("wind speed: " + windSpeed);
  $("#wind").append(windSpeed);

});

$.ajax({
  url: queryURL2,
  method: "GET"
}).done(function (response) {
  console.log(response);
})

