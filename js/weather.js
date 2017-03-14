var apiKey = require("./../.env").apiKey;

function Weather() {
}

Weather.prototype.getTemp = function(city) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey)
  .then(function(response) {
    $('#output').text("The temperature in " + city + " is " + (response.main.temp - 273.15).toFixed(0) + "°C and " + ((response.main.temp * 9/5 - 459.67).toFixed(0)) + "°F.");
  }).fail(function(error) {
    $('#output').text(error.responseJSON.message);
  });
};

Weather.prototype.getHumidity = function(city) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey)
  .then(function(response) {
    $('#output').text("The humidity in " + city + " is " + response.main.humidity + "%");
  }).fail(function(error) {
    $('#output').text(error.responseJSON.message);
  });
};

exports.weatherModule = Weather;
