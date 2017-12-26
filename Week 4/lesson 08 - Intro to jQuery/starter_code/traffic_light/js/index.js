//Implement the red light using jQuery. Don't forget to add the script tags.

$(document).ready(function() {
	alert('Hi buddy!');
	//The "alert" command is basic JS, but can still be used in jQuery.// 

	$('#stopButton').click(illuminateRed);
	$('#slowButton').click(illuminateYellow);
	$('#goButton').click(illuminateGreen);

	function illuminateRed() {
		clearLight();
		$('#stopLight').css('background-color', 'red');
	}

	function illuminateYellow() {
		clearLight();
		$('#slowLight').css('background-color', 'yellow');
	}

	function illuminateGreen() {
		clearLight();
		$('#goLight').css('background-color', 'green');
	}


	function clearLight() {
		$('#traffic-light div').css('background-color', 'black');
	}

});
