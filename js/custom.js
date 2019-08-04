
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

/*--------------------------------------------------------------------------------------------------*/

$(document).ready(function(){
	  $('.section-3 button.gadient-bg').click(function(){
		  $(".popup").toggle('popup-show');
		});
});

/*------------------------------------------- bx-slider -------------------------------------------------------*/
	
$(function(){
	$('.bxslider-destop').bxSlider({
		minSlides: 5,
		maxSlides: 50,
		moveSlides:1,
		slideWidth: 1000,
		slideMargin: 20,
		speed: 200,
		infiniteLoop: true,
        auto: true,
        autoStart: true,
        autoDirection: 'next',
		
	});		
});

$(function(){
	$('.bxslider-mobile').bxSlider({
		minSlides: 3,
		maxSlides: 3,
		moveSlides:1,
		slideWidth: 1000,
		slideMargin: 20,
		speed: 200,
		infiniteLoop: true,
        auto: true,
        autoStart: true,
        autoDirection: 'next',
		
	});		
});


/*--------------------------------------------- Banner Scroll Down Button ------------------------------------*/ 
 $(function() {
    $('.scroll-down1, .scroll-down2').click (function() {
      $('html, body').animate({scrollTop: $('.uber-dipay-title, .section-3').offset().top }, 'slow');
      return false;
    });
	
	$('.scroll-down2').click (function() {
      $('html, body').animate({scrollTop: $('.section-3').offset().top }, 'slow');
      return false;
    });
	$('.scroll-down3').click (function() {
      $('html, body').animate({scrollTop: $('.section-4').offset().top }, 'slow');
      return false;
    });
	$('.scroll-down4').click (function() {
      $('html, body').animate({scrollTop: $('.section-5').offset().top }, 'slow');
      return false;
    });
	
  });


/*--------------------------------------------- sticky header ------------------------------------*/ 
		$(window).scroll(function(){
    if ($(window).scrollTop() >= 50) {
        $('header').addClass('fixed-header');
    }
    else {
        $('header').removeClass('fixed-header');
    }
 });
 
/*--------------------------------------------- active menu ------------------------------------*/ 
 
 $(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active-menu');
        })
        $(this).addClass('active-menu');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.nav-links a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.nav-links a').removeClass("active-menu");
            currLink.addClass("active-menu");
        }
       /* else{
            currLink.removeClass("active");
        } */
    });
}


/*--------------------------------------------- remove home default active class ------------------------------------*/ 
$(document).ready(function(){
  $(".nav-links a").click(function(){
    $(".nav-links a").removeClass("text-active");
  });
});

$(window).scroll(function(){
    if ($(window).scrollTop() >= 50) {
        $(".nav-links a").removeClass("text-active");
    }
    //else {
       // $('header').removeClass('fixed-header');
   // }
 });