/* pseudocode:
	on click, show dropdown.
	get user's input
	match city input to city background
	display background
*/

var cities = ['NYC', 'SF', 'LA', 'ATX', 'SYD'];

for (var i=0; i < cities.length; i++) {
	$('#userCity').append("<option>"+cities[i]+"</option>");
}

$('#form-city').change(function(e) {
	e.preventDefault();
	var cityPic = $('#userCity').val();

	if (cityPic === 'SF') {
		$('body').attr('class', 'sf');
	} else if (cityPic === 'NYC') {
		$('body').attr('class', 'nyc');
	} else if (cityPic === 'ATX') {
		$('body').attr('class', 'austin');
	} else if (cityPic ==='SYD') {
		$('body').attr('class', 'sydney');
	} else if (cityPic === 'LA') {
		$('body').attr('class', 'la');
	}

})