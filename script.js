$(document).ready(function () {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://community-open-weather-map.p.rapidapi.com/forecast?q=portsmouth%252Cus",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
            "x-rapidapi-key": "9041144344mshc5be50f9856aa91p157bd6jsn4c15dd589353"
        }
    }
    
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
    
    //  .on("click") function associated with the clear button
    // $("#clear-all").on("click", clear);
});

