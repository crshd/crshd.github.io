$(document).ready(function() {

	/*
	 * Fixed navigation
	 */
	var navOffset = $('nav').offset().top;

	$(window).scroll(function() {
		if($(window).scrollTop() > navOffset) {
			$('nav').addClass('fixed');
            $('#to-top').fadeIn();
		} else {
			$('nav').removeClass('fixed');
            $('#to-top').fadeOut();
		}
	});

    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 400);
                return false;
            }
        }
    });
});
