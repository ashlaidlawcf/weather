var Weather = require("./../js/weather.js").weatherModule;

$(function() {
  var currentWeatherObject = new Weather();

  $("#temp").click(function() {
    var city = $("#city").val();
    $("#city").val("");
    currentWeatherObject.getTemp(city);
  });

  $("#humidity").click(function() {
    var city = $("#city").val();
    $("#city").val("");
    currentWeatherObject.getHumidity(city);
  });

  $("#compare").click(function() {
    var city1 = $("#city1").val();
    var city2 = $("#city2").val();
    $("#city1").val("");
    $("#city2").val("");
    currentWeatherObject.compareTemps(city1, city2);
  });
});
