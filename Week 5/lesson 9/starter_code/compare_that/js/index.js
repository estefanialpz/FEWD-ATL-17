/*  
	1. get comparison 
	2. when button "compare" is clicked:
		- get value A
		- get value B
	3. Is value A greater than value B?
		- If so, set comparison to ">".
	4. Is value A less than value B?
		- If so, set comparison to "<".
	5. Is value A equal to value B?
		- If so, set comparison to "==". */

$(document).ready(function() {


	$('#submit').click(compare);

	function compare() {
		var comparison;
		var a = $("#a").val();
		var b = $("#b").val();

		if (a > b) {
			comparison = ">";
		} else if (a < b) {
			comparison = "<";
		} else if (a === b) {
			comparison = "===";
		} else {
			comparison = "N/A";
		}

	$('#comparison').html(comparison);

	}


});