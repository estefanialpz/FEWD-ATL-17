$(document).ready(function() {
	$('.readmore').click(showText);
	$('.readless').click(hideText);
	$('.readless').click(hideReadLess);
	$('.readless').click(showReadMore);
	$('.learnmore').click(showLearnMoreText);
	$('.learnmore').click(hideLearnMore);
	$('.learnmore').click(showLearnLess);
	$('.learnless').click(hideLearnLess);
	$('.learnless').click(hideLearnMoreText);
	$('.learnless').click(showLearnMore)

	function showText(event) {
		event.preventDefault();
		$('#show-this-on-click').slideDown();
		$('.readless').show();
		$('.readmore').hide();
	}

	function hideText(event) {
		event.preventDefault();
		$('#show-this-on-click').slideUp();
	}

	function showLearnMoreText(event) {
		event.preventDefault();
		$('#learnmoretext').slideDown();
		$('.learnmore').hide();
		$('.readless').hide();
	}

	function showReadMore(event) {
		event.preventDefault();
		$('.readmore').show();
	}

	function showLearnLess(event) {
		event.preventDefault();
		$('.learnless').show();
	}

	function hideLearnLess(event) {
		event.preventDefault();
		$('.learnless').hide();
	}

	function hideLearnMoreText(event) {
		event.preventDefault();
		$('#learnmoretext').slideUp();
	}

	function showLearnMore(event) {
		$('.learnmore').show();
	}
});
