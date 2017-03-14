var apiKey = require("./..//env").apiKey;
var Weather = require("./../js/weather.js").weatherModule;
var displayHumidity = function(city, humidityData) {
  $("#output").text("<p>The humidity in " + city + " is " + humidity + "%.");
};
var displayTemp = function(city, tempData) {
  $("#output").text("<p>The temperature in " + city + " is " + temp + "°.");
};

$(function() {
  $("#humidity").click(function() {
    var city = $("#city").val();
    $("#city").val("");
  });

  $("#temperature").click(function() {
    var city = $("#city").val();
    $("#city").val("");
  });
});
