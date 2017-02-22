(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "a5b024348aaa05a95f794ef378d4a28f";

},{}],2:[function(require,module,exports){
function Journal(){	
  
}

Journal.prototype.getwordcount=function(entry){
	var wholetext=entry.split(" ");
	return wholetext.length;
};

Journal.prototype.getvowel=function(entry){
	var wholetext=entry.split(" ");
	var vowels=0;
	var consonants=0;
	for (var i = 0; i<wholetext.length; i++){
		for(var j = 0; j<wholetext[i].length; j++){
			var testing = wholetext[i].charAt(j);
			if (testing == 'a'||testing == 'e'||testing == 'i'||testing == 'o'||testing == 'u'||testing == 'A'||testing == 'E'||testing == 'I'||testing == 'O'||testing == 'U'){
				vowels++;
			}
			else{
				consonants++;
			}
		}
	}
	var vowncons=[];
	vowncons.push(vowels);
	vowncons.push(consonants);
	return vowncons;
};

Journal.prototype.getfsentence=function(entry){
	if (entry.search(".") >= 0){
		var wholetext=entry.split(".");
		var eightwords = wholetext[0].split(" ");
		if (eightwords.length<=8){
				console.log(eightwords);
				return eightwords;	
		}

		else{
			var slicewdots=eightwords.slice(0,8);
			return slicewdots;
		}
	}
	else {
		var wholtext=entry.split(" ");
		var textslice= wholtext.slice(0,8);
		return textslice;
	}
};
exports.journalModule = Journal;

},{}],3:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

Weather = function(){
}

Weather.prototype.getWeather = function(city, displayFunction) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    displayFunction(city, response.main.humidity);
  }).fail(function(error) {
    $('.showWeather').text(error.responseJSON.message);
  });
}

exports.weatherModule = Weather;
},{"./../.env":1}],4:[function(require,module,exports){
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
},{"./../js/journal.js":2,"./../js/weather.js":3}]},{},[4]);
