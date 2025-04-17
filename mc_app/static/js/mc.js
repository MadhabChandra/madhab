	if (window.history.replaceState){
		window.history.replaceState(null,null,window.location.href);
	}
	

$(document).ready(function(){
	AOS.init({once: true});
	var hero = $(".hero");
		hero.fadeIn(3000);
	var menu = $(".menu");
	
	menu.click(function(){
		$(".menu-div").toggleClass('h-full ');
		$('.nav-div').toggleClass("mt-0");
		$('.bars').toggleClass("fa-xmark");
	});
	
	var menu_nav = $('.menu_nav');
	menu_nav.click(function(){
		$(".menu-div").toggleClass('h-full ');
		$('.nav-div').toggleClass("mt-0");
		$('.bars').toggleClass("fa-xmark");
	});
	//End Hero Button Click...
	
	var main_hero = $(".main-hero");
	var window_height = $(window).height();
	main_hero.height(window_height);
	
	$('.responsive').each(function () {
  		var $slider = $(this);
  		var slideCount = $slider.find('.slide-item').length;
  		
	var sts = 0;
	var sts1 = 2;
	var slide_items =slideCount; //$('.responsive .slide-item').length;
	if (slide_items == 1){sts = 1, sts1 = 1}
	else if (slide_items == 2){sts=2}
	else{sts=3}
	
	
	$slider.slick({
		
		  dots:false,
		  infinite: true,
		  speed: 700,
		  slidesToShow: sts,
		  slidesToScroll: 1,
		    autoplay: true,
  			autoplaySpeed: 1500,
		  responsive: [
		    {
		      breakpoint: 1124,
		      settings: {
		        slidesToShow: sts1,
		        slidesToScroll: 1,
		        infinite: true,
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
		
		});
		
		
		$('.responsive1').each(function () {
  		var $slider = $(this);
  		var slideCount = $slider.find('.slide-item').length;

	
	$slider.slick({
		
		  dots:false,
		  infinite: true,
		  speed: 1000,
		  slidesToShow: 2,
		  slidesToScroll: 1,
		  autoplay: true,
  		  autoplaySpeed: 3000,
		  responsive: [
		    {
		      breakpoint: 1124,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        infinite: true,
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
		
		});
		
		
		  
		  
		  
		  $('.scroll-link').on('click', function (e) {
			  e.preventDefault();
			
			  var targetId = $(this).attr('href');
			  var $target = $(targetId);
			
			  if ($target.length) {
			    var targetOffset = $target.offset().top;
			    var windowHeight = $(window).height();
			    var elementHeight = $target.outerHeight();
			    
			    // Center the element vertically in the screen
			    var scrollTo = targetOffset - ((windowHeight / 2) - (elementHeight / 2));
			
			    $('html, body').animate({
			      scrollTop: scrollTo
			    }, 800); // Adjust time (ms) for speed
			  }
			});
			
			$('.slide-item1').on('mouseenter', function () {
		    $(this).find('.view_button').removeClass('hidden');
			}).on('mouseleave', function () {
			    $(this).find('.view_button').addClass('hidden');
			});
			
			//Image Button
			var img_div = $('.image_div');
			var img_button = $(".image_button");
			
			img_button.click(function(){
				img_div.fadeIn(1000);
				var bg_img_url = $(this).closest(".bg_img").css('background-image');
				var bg_img = bg_img_url.replace('url("','').replace('")', '');
				var img_show = $('.image_div').find(".img_show");
				img_show.attr("src", bg_img);
				setTimeout(function () { $("body").addClass("overflow-hidden");}, 1500);
			});
			
			var close=$(".close_btn");
			close.click(function(){
				img_div.fadeOut(1000);
				$('.body').removeClass('overflow-hidden');
			});
					
});

function getDivAtViewportMiddle() {
    let viewportMiddle = $(window).scrollTop() + ($(window).height() / 2);
    let selectedDiv = null;

    $('.section').each(function() {
      let divTop = $(this).offset().top;
      let divBottom = divTop + $(this).outerHeight();

      if (divTop <= viewportMiddle && divBottom >= viewportMiddle) {
        selectedDiv = this;
        return false; // stop loop when found
      }
    });

    if (selectedDiv) {
		var firstClass = $(selectedDiv).attr('class')?.split(' ')[0];
		$('.scroll-link').removeClass('shadow-bw');
		$('.scroll-link').find('hr').addClass('border-div')
		$('.' + firstClass+'_nav').find('hr').removeClass('border-div');
		$('.' + firstClass+'_nav').addClass('shadow-bw');
		
  		//console.log('First class of this div:', firstClass);
      //console.log('Div at middle:', $(selectedDiv).text());
      // Example: highlight it
      //$('.section').css('border', 'none');
      //$(selectedDiv).css('border', '4px solid yellow');
    }

  }

  $(window).on('scroll resize', getDivAtViewportMiddle);
  $(document).ready(getDivAtViewportMiddle);
  
  function is20PercentVisible(elem) {
    let rect = elem.get(0).getBoundingClientRect();
    let windowHeight = window.innerHeight || $(window).height();
    
    let visibleHeight = Math.max(0, Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0));
    let totalHeight = rect.height;

    let visibilityPercent = (visibleHeight / totalHeight) * 100;

    return visibilityPercent >= 30;}
    
$(window).on('scroll load resize', function () {
    if (is20PercentVisible($('.python'))) {$('.python').addClass('w-[75%] '); }
    if (is20PercentVisible($('.django'))) {$('.django').addClass('w-[85%] '); }
    if (is20PercentVisible($('.flet'))) {$('.flet').addClass('w-[55%] '); }
    if (is20PercentVisible($('.jquery'))) {$('.jquery').addClass('w-[80%] '); }
    if (is20PercentVisible($('.css'))) {$('.css').addClass('w-[95%] '); }
    if (is20PercentVisible($('.tailwind'))) {$('.tailwind').addClass('w-[85%] '); }
    if (is20PercentVisible($('.javascript'))) {$('.javascript').addClass('w-[65%] '); }
    if (is20PercentVisible($('.html'))) {$('.html').addClass('w-[95%] '); }
    
});



