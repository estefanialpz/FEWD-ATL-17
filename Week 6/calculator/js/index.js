$('#form-calc').on('submit', function(e) {

	e.preventDefault();
	var num1 = $("#numberA").val();
	var num2 = $("#numberB").val();
	var sign = $('#opSign').val();

	num1 = parseInt(num1);
	num2 = parseInt(num2);
 
	
	if (sign === "plus") {
		var sum = num1 + num2;
		$('#result').html(sum);
	} else if (sign === "minus") {
		var difference = num1 - num2;
		 $('#result').html(difference);
	} else if (sign === "times") {
		var product = num1 * num2;
		$('#result').html(product);
	} else if (sign === "divide") {
		var quotient = num1 / num2;
		$('#result').html(quotient);
	};

});