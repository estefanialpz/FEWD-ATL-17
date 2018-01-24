var total = 0;

$('#entry').submit(updateReceipt);

/* When someone submits this form, call this function. */


function updateReceipt(event) {
	event.preventDefault();

	var entry;
	var currency;

	entry = $('#newEntry').val(); /* get the value of the field.*/
	entry = parseFloat(entry); /*This makes the thing into a decimal. */

	currency = currencyFormat(entry);

	$('#entries').append('<tr><td></td><td>' + currency + '</td></tr>');

	total = total + entry;
	console.log(total);
	console.log(currencyFormat(total));

	$('#total').html(currencyFormat(total)); 

	$('#newEntry').val('');

}

function currencyFormat(number) {

	var convertedCurrency = parseFloat(number); /*turns it into a decimal again */
	convertedCurrency = convertedCurrency.toFixed(2); /*this rounds the number to two decimal points. */

	convertedCurrency = '$' + convertedCurrency; /* this adds a dollar sign */

	return convertedCurrency;
}

