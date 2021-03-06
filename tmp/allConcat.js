var Journal = require('./../js/journal.js').journalModule;
$(document).ready(function() {
  $('#jentry').submit(function(event) {
    event.preventDefault();   
    var trial = new Journal();
    var entry = $('#entry').val();
    var count = trial.getvowel(entry);
    $('#jentry').append("<p> Vowel Count:" +count[0] + "</p>");
    $('#jentry').append("<p> Consonant Count:" +count[1] + "</p>");
    var first = trial.getfsentence(entry);
    $('#jentry').append("<p> First 8 words:" +first + "</p>");
    var wordcount=trial.getwordcount(entry);
    $('#jentry').append("<p> Word count:" + wordcount + "</p>");
  });
});
$(document).ready(function(){
  $('#time').text(moment());
});
var Weather = require('./../js/weather.js').weatherModule;

var displayHumidity = function(city, humidityData) {
  $('.showWeather').text("The humidity in " + city + " is " + humidityData + "%");
}

$(document).ready(function() {
  var currentWeatherObject = new Weather();
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    currentWeatherObject.getWeather(city, displayHumidity);
  });
});