/* pseudocode:
	on click, get user input.
	when user input is "nyc", change background.
	when user input is "austin", change background.
	when user input is "la", change background.
	when user input is "sydney", change background.
	when user input is "sf", change background.
*/


$(document).ready(function() {
$('#submit-btn').click(getUserInput);

var submitForm = $('user-city').submit();
var entry = $('#city-type').val();

function getUserInput (event) {
	event.preventDefault();
	var submitForm = $('user-city').submit();
	var entry = $('#city-type').val();
	if (entry == 'NYC' || entry == 'New York City' || entry == 'New York') {
		$('body').addClass('nyc');
	} else if (entry == 'Austin' || entry == 'ATX') {
		$('body').addClass('austin');
	} else if (entry == 'SF' || entry == 'San Francisco' || entry == 'Bay Area') {
		$('body').addClass('sf');
	} else if (entry == 'LA' || entry == 'LAX' || entry == 'Los Angeles') {
		$('body').addClass('la');
	} else if (entry == 'SYD' || entry == 'Sydney') {
		$('body').addClass('sydney');
	}
}



});