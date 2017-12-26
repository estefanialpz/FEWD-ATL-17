$(document).ready(function() {
	$('.readmore').click(showText);
	$('.readmore').click(hideReadMore);
	$('.readmore').click(showReadLess);
	$('.readless').click(hideText);
	$('.readless').click(hideReadLess);
	$('.readless').click(showReadMore);
	$('.learnmore').click(showLearnMoreText);
	$('.learnmore').click(hideLearnMore);

	function showText(event) {
		event.preventDefault();
		$('#show-this-on-click').slideDown();
	}

	function showReadLess(event) {
		event.preventDefault;
		$('.readless').show();
	}

	function hideReadMore(event) {
		event.preventDefault();
		$('.readmore').hide();
	}

	function hideText(event) {
		event.preventDefault();
		$('#show-this-on-click').slideUp();
	}

	function showLearnMoreText(event) {
		event.preventDefault();
		$('#learnmoretext').slideDown();
	}

	function hideLearnMore(event) {
		event.preventDefault();
		$('.learnmore').hide();
	}

	function hideReadLess(event) {
		event.preventDefault();
		$('.readless').hide();
	}

	function showReadMore(event) {
		event.preventDefault();
		$('.readmore').show();
	}
});
