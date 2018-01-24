$(document).ready(function() {


	$('#form').submit(convertTemp);



	function convertTemp(event) {
		event.preventDefault();
		var tempC = $('#celcius').val(); 
		tempC = parseInt(tempC);
		console.log(tempC);
		var tempF = tempC * 1.8 + 32;
		console.log(tempF);
		$()
	}




});