$(document).ready(function () {
	// Mobile Navigation
	$('#nav-icon').click(function () {
		$(this).toggleClass('open');
		$('.fullscreen-nav').toggleClass('open');
		$('li').toggleClass('open');
	});

	// Background Sideshow

	// Previous slide
	$('#prev').click(function () {

		$('#slide-text').animate({
			left: '510px',
			opacity: '0'
		}, 600);

		setTimeout(function () {
			$('#slide-text').css({
				left: "-510px",
				opacity: '0'
			});

			setTimeout(function () {
				$('#slide-text').css({
					left: "-510px",
					opacity: '0'
				}).animate({
					left: '0',
					opacity: '1'
				}, 600);

				if ($('#slide-text').text() === 'Identity') {
					$('#slide-text').text('Branding');
				} else if ($('#slide-text').text() === 'Branding') {
					$('#slide-text').text('Visions');
				} else if ($('#slide-text').text() === 'Visions') {
					$('#slide-text').text('Identity');
				}
			}, 390);
		}, 610);


		$('header').animate({
			left: '1920px',
			opacity: '0'
		}, 630);

		setTimeout(function () {
			$('header').css({
				left: "-1920px",
				opacity: '0'
			});
			$('header').animate({
				left: '0',
				opacity: '1'
			}, 660);

			if ($('header').hasClass('bg-1')) {
				$('header').removeClass('bg-1');
				$('header').addClass('bg-3');
			} else if ($('header').hasClass('bg-3')) {
				$('header').removeClass('bg-3');
				$('header').addClass('bg-2');
			} else if ($('header').hasClass('bg-2')) {
				$('header').removeClass('bg-2');
				$('header').addClass('bg-1');
			}
		}, 730);
	});


	//     Next slide
	$('#next').click(function () {

		$('#slide-text').animate({
			left: '-510px',
			opacity: '0'
		}, 600);

		setTimeout(function () {
			$('#slide-text').css({
				left: "510px",
				opacity: '0'
			});

			setTimeout(function () {
				$('#slide-text').css({
					left: "510px",
					opacity: '0'
				}).animate({
					left: '0',
					opacity: '1'
				}, 600);

				if ($('#slide-text').text() === 'Identity') {
					$('#slide-text').text('Visions');
				} else if ($('#slide-text').text() === 'Visions') {
					$('#slide-text').text('Branding');
				} else if ($('#slide-text').text() === 'Branding') {
					$('#slide-text').text('Identity');
				}
			}, 390);
		}, 610);

		$('header').animate({
			left: '-1920px',
			opacity: '0'
		}, 630);

		setTimeout(function () {
			$('header').css({
				left: "1920px",
				opacity: '0'
			});
			$('header').animate({
				left: '0',
				opacity: '1'
			}, 630);

			if ($('header').hasClass('bg-1')) {
				$('header').removeClass('bg-1');
				$('header').addClass('bg-2');
			} else if ($('header').hasClass('bg-2')) {
				$('header').removeClass('bg-2');
				$('header').addClass('bg-3');
			} else if ($('header').hasClass('bg-3')) {
				$('header').removeClass('bg-3');
				$('header').addClass('bg-1');
			}
		}, 730);
	});
});
