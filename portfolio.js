$(document).ready(function(){
	$('#portfolio-button').click(function(){
		$('html,body').animate({
			scrollTop: $("#portfolio").offset().top,
		}, 1000);
	})
});
