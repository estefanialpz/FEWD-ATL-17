$(document).ready(function() {



$('body').css('display', 'none');
$('body').fadeIn(2000);
$('h1').css('display', 'none');
$('h1').fadeIn(8000);

$('.show-phone').click(showPhone);
$('.show-mail').click(showMail);

function showPhone(event) {
    event.preventDefault();
    $('#phone').slideDown();
}

function showMail(event) {
    event.preventDefault();
    $('#mail').slideDown();
}

});

