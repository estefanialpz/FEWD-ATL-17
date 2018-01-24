var total = 0;

$('#entry').submit(function (event) {
	event.preventDefault();

	var entry;
	var currency;

	entry = $('#newEntry').val(); /* whaaaat?! */
	entry = parseFloat(entry); /*This makes the thing into a decimal. */


	currency = function (number) {

		var convertedCurrency = parseFloat(number); /*turns it into a decimal again */
		convertedCurrency = convertedCurrency.toFixed(2); /*this rounds the number to two decimal points. */

		convertedCurrency = '$' + convertedCurrency; /* this adds a dollar sign */

		return convertedCurrency;
};


	$('#entries').append('<tr><td></td><td>' + currency(entry) + '</td></tr>');

	total = total + entry;

	$('#total').html(currency(total)); 

	$('#newEntry').val('');

});

/* When someone submits this form, call this function. */





