var Weather = require("./../js/weather.js").weatherModule;


$(function() {
  var currentWeatherObject = new Weather();
  $("#humidity").click(function() {
    var city = $("#city").val();
    $("#city").val("");
    currentWeatherObject.getHumidity(city);
  });

  $("#temp").click(function() {
    var city = $("#city").val();
    $("#city").val("");
    currentWeatherObject.getTemp(city);
  });
});
