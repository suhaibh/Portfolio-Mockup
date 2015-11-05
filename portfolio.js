$(document).ready(function(){
	$('#portfolio-button').click(function(){
		$('html,body').animate({
			scrollTop: $("#portfolio").offset().top,
		}, 1000);
	})

	$(window).scroll(function(){
		$('.fadeInScroll').each(function(){
			var bottom_of_object = $(this).offset().top + $(this).outerHeight();
			var bottom_of_window = $(window).scrollTop() + $(window).height();

			if (bottom_of_window > bottom_of_object){
				$(this).animate({opacity: 1}, 1500);	
		}

		})

		
		
	})
	
});
