$("#form-temp").on('submit', function(e) {

	e.preventDefault();
	var tempC = $("#celsiusTemp").val();
	tempC = parseInt(tempC);
	console.log(tempC);
	var tempF = tempC * 9/5 + 32;
	console.log(tempF);
	$("#fahrenheitTemp").html(tempF);

});
