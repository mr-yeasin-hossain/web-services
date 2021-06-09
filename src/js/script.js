$(document).ready(function(){
	$('.fa-bars').click(function(){
		$(this).toggleClass('fa-times');
		$('nav').toggleClass('nav-toggle');
	});

	$('nav ul li a').click(function(){
		$('.fa-bars').toggleClass('fa-times');
		$('nav').toggleClass('nav-toggle');
	});

	$(window).on("load scroll", function(){
		if($(window).scrollTop() > 50){
			$("header").addClass("header-active");
		}else{
			$("header").removeClass("header-active");
		}
	});

	$(".accordion-header").click(function(){
		$(".accordion .accordion-body").slideUp();
		$(this).next(".accordion-body").slideDown();
		$('.accordion .accordion-header span').text('+');
		$(this).children('span').text('-');
	});
});