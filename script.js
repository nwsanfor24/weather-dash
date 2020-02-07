// $(document).ready(function () {

    var apikey = "945dc5fe55069a270dcc159ead1201ef";
    var city = "portsmouth";

    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + apikey;

    $.ajax({
        //$.curl({
        url: queryURL,
        method: "GET"
      }).done(function(response) {
        
        console.log(response);
        
        
        });
    
    // var ourRequest = new XMLHttpRequest();

    // ourRequest.open(
    //     "GET",
    //     "http://api.openweathermap.org/data/2.5/weather?q=" + 
    //     city + 
    //     "&APPID=" + apikey
    // );

    // ourRequest.onload = function() {
        
    //     var ourData = ourRequest.responseText;

    //     console.log(ourData);

    // }
// });

