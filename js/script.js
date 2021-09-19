$('.header__menu-link').on('click', function(){
	$('.header__navigation').toggleClass('active-menu');
	$('.header__menu-link').toggleClass('toggle-menu');
	if($(".header__navigation").hasClass("active-menu")) {
		$('body').addClass('fixed-position');
	} else {
		$('body').removeClass('fixed-position');
	}
});

var lastScrollTop = 0;
$(document).ready(function(){
	$(window).scroll(function(){
		let scroll = $(this).scrollTop();

		if (scroll > lastScrollTop && $(window).width() > 1024) {		
			$(".header").addClass('scrolled-header');
			$(".header__logo-img").addClass('scrolled-logo');
		}
		else if (scroll == 0){
			$(".header").removeClass('scrolled-header');	
			$(".header__logo-img").removeClass('scrolled-logo');
		}
		lastScrollTop = scroll;	
	})	
})

var height = 600;
$(document).ready(function(){
	$(window).scroll(function(){
        let scroll = $(this).scrollTop();

        if(scroll >= height -400) {
            $('.education__box').addClass("active-box");          
        } else {
            $('.education__box').removeClass("active-box");  
        }

        if(scroll >= height) {
            $('.work__box').addClass("active-box");          
        } else {
            $('.work__box').removeClass("active-box");  
        }
        if(scroll >= height + 250) {
            $('.box--2').addClass("active-box");          
        } else {
            $('.box--2').removeClass("active-box");  
        }
        if(scroll >= height + 500) {
            $('.box--3').addClass("active-box");          
        } else {
            $('.box--3').removeClass("active-box");  
        }
        if(scroll >= height + 750) {
            $('.box--4').addClass("active-box");          
        } else {
            $('.box--4').removeClass("active-box");  
        }
        if(scroll >= height + 1000) {
            $('.box--5').addClass("active-box");          
        } else {
            $('.box--5').removeClass("active-box");  
        }
        if(scroll >= height + 1200) {
            $('.box--6').addClass("active-box");          
        } else {
            $('.box--6').removeClass("active-box");  
        }

        if(scroll <= height - 550 && $(window).width() > 1024) {
            $('.skills__box').removeClass("active-box");
        }
         else {
            $('.skills__box').addClass("active-box");
        }
    })	
})