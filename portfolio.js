$(document).ready(function(){
	
	var introFadeIn = function(){
		$('.intro-box').fadeIn(1000);
	}

	$(window).load(setTimeout(introFadeIn, 700))
	

	$('#portfolio-button').click(function(){
		$('html,body').animate({
			scrollTop: $("#portfolio").offset().top,
		}, 1000);
	})
	
});
