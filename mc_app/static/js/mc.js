$(document).ready(function(){
	var hero = $(".hero");
		hero.fadeIn(3000);
	var menu = $(".menu");
	menu.click(function(){
		$(".menu-div").toggleClass('h-full ');
		$('.nav-div').toggleClass("mt-0");
		$('.bars').toggleClass("fa-xmark");
	});
	//End Hero Button Click...
	
	var main_hero = $(".main-hero");
	var window_height = $(window).height();
	main_hero.height(window_height);
	
	$('.responsive').slick({
		
		  dots:false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  responsive: [
		    {
		      breakpoint: 1124,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1,
		        infinite: true,
		        dots: true
		      }
		    },
		    {
		      breakpoint: 720,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  ]
		});
		
		
		  AOS.init();
		
});

