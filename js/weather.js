var apiKey = require("./../.env").apiKey;

function Weather() {
}

Weather.prototype.getTemp = function(city) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    $("#output").text("The temperature in Fahrenheit in " + city + " is " + (response.main.temp * 9/5 - 459.67).toFixed(0) + "°F. The temperature in Celcius is " + (response.main.temp - 273.15).toFixed(0) + "°C.");
  }).fail(function(error) {
    $('#output').text(error.responseJSON.message);
  });
};

Weather.prototype.getHumidity = function(city) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey)
  .then(function(response) {
    $("#output").text("The humidity in " + city + " is " + response.main.humidity + "%.");
  }).fail(function(error) {
    $('#output').text(error.responseJSON.message);
  });
};

Weather.prototype.compareTemps = function(city1, city2) {

  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city1 + '&appid=' + apiKey).then(function(response) {
    var tempCity1 = response.main.temp;

    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city2 + '&appid=' + apiKey).then(function(response2) {
      var tempCity2 = response2.main.temp;

      if(tempCity1 > tempCity2) {
        $("#output").text(city1 + " is warmer than " + city2 + ".");
      } else {
        $("#output").text(city1 + " is cooler than " + city2 + ".");
      }
    });
  });
};

exports.weatherModule = Weather;
