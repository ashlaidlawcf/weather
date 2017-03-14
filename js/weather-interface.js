$(function() {
  $("#humidity").click(function() {
    var city = $("#city").val();
    $("#city").val("");
    $("#output").text("<p>The humidity in " + city + " is " + humidity + "%.");
  });

  $("#temperature").click(function() {
    var city = $("#city").val();
    $("#city").val("");
    $("#output").text("<p>The temperature in " + city + " is " + temp + "°.");
  });
});
