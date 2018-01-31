$(document).ready(function() {


$('#form').submit(convertTemp);


function convertTemp(event) {
	event.preventDefault();
	var tempC = $('#celcius').val();
	tempC = parseInt(tempC);
	var tempF = tempC * 1.8 + 32;
	$("#fahrenheit").html(tempF);
}





});