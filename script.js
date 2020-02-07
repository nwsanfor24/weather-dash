// $(document).ready(function () {

var apikey = "945dc5fe55069a270dcc159ead1201ef";
var city = "portsmouth,us";

var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&APPID=" + apikey;


$.ajax({
  url: queryURL,
  method: "GET"
}).done(function (response) {

  console.log(response);

  var name = response.city.name;
  console.log(name);
  $("#title").append(name);

  var temp = response.list[0].main.temp;
  console.log("temperature: " + temp);
  $("#temp").append(temp);

  var humidity = response.list[0].main.humidity;
  console.log("humidity: " + humidity);
  $("#humid").append(humidity);

  var windSpeed = response.list[0].wind.speed;
  console.log("wind speed: " + windSpeed);
  $("#wind").append(windSpeed);

});

const startWeek = moment().day(5).format('LL'); 
console.log(startWeek);

const endWeek = moment().day(10).format('LL'); 
console.log(endWeek);

// let calendar = []
// for (var week = startWeek; week<endWeek; week++) {
//   calendar.push({
//     week:week,
//     days: Array(5).fill(0).map((n, i) => moment.week(week).startOf('week').clone().add(n + i, 'day'))
//   });
// }

$("#date1").append(startWeek);
