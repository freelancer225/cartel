$(document).ready(function () {

    $(window).scroll(function(){
        var stick = $('nav'),
        scrollUp = $('.scrollUp'),
        scroll = $(window).scrollTop();
       if (scroll >= 120){
           stick.addClass('sticky');
           scrollUp.addClass('active');
           
       }else{
           stick.removeClass('sticky');
           stick.removeAttr("style"); //slideDown adds the style="block" which needs to be removed so that next time slideDown will work
           scrollUp.removeClass('active');
        }
       
       
        
        
    });


  /*   $(function () {
        $('a[href*="#"]:not([href="#"])').click(function(){
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname){
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length){
                    $('html, body').animate({
                        scrollTop: target.offset().top
                      }, 10);
                      return false;
                }
            }
        })
    }) */


    /* Scoll on buttons */
    /* $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({scrollTop: $()})
    }) */

    /* window.scroll({
        top: 2500, 
        left: 0, 
        behavior: 'smooth'
      });
      
      // Scroll certain amounts from current position 
      window.scrollBy({ 
        top: 100, // could be negative value
        left: 0, 
        behavior: 'smooth' 
      });
      
      // Scroll to a certain element
      document.querySelector('.hello').scrollIntoView({ 
        behavior: 'smooth' 
      }); */

      /* Navigation animate */
      

      $('.js--wp-hero').waypoint(function(direction){
        $('.js--wp-hero').addClass('animated animate__fadeInLeft');
        },{
            offset: '50%'
        });

        $('.js--wp-hero-1').waypoint(function(direction){
            $('.js--wp-hero-1').addClass('animated animate__fadeInDown');
            },{
                offset: '50%'
            });

        $('.js--scroll-to-start').waypoint(function(direction){
            $('.js--scroll-to-start').addClass('animated animate__fadeInUp');
            },{
                offset: '50%'
            });
        
      /* Mobile nav */
      $('.js--nav-icon').click(function(){
          
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        nav.slideToggle(200);

        if(icon.hasClass('ion-android-menu')){
            icon.addClass('ion-android-close');
            icon.removeClass('ion-android-menu');
        }else{
            icon.addClass('ion-android-menu');
            icon.removeClass('ion-android-close')
        }


      })

      

          
    /* $('a.scroll-link').click(function(e){
        e.preventDefault();
        $id = $(this).attr('href');
        $('body,html').animate({
            scrollTop: $($id).offset().top -20
        }, 750);
    }); */

    // vars
'use strict'
var	testim = document.getElementById("testim"),
		testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
    testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
    testimLeftArrow = document.getElementById("left-arrow"),
    testimRightArrow = document.getElementById("right-arrow"),
    testimSpeed = 4500,
    currentSlide = 0,
    currentActive = 0,
    testimTimer,
		touchStartPos,
		touchEndPos,
		touchPosDiff,
		ignoreTouch = 30;
;

window.onload = function() {

    // Testim Script
    function playSlide(slide) {
        for (var k = 0; k < testimDots.length; k++) {
            testimContent[k].classList.remove("active");
            testimContent[k].classList.remove("inactive");
            testimDots[k].classList.remove("active");
        }

        if (slide < 0) {
            slide = currentSlide = testimContent.length-1;
        }

        if (slide > testimContent.length - 1) {
            slide = currentSlide = 0;
        }

        if (currentActive != currentSlide) {
            testimContent[currentActive].classList.add("inactive");            
        }
        testimContent[slide].classList.add("active");
        testimDots[slide].classList.add("active");

        currentActive = currentSlide;
    
        clearTimeout(testimTimer);
        testimTimer = setTimeout(function() {
            playSlide(currentSlide += 1);
        }, testimSpeed)
    }

    testimLeftArrow.addEventListener("click", function() {
        playSlide(currentSlide -= 1);
    })

    testimRightArrow.addEventListener("click", function() {
        playSlide(currentSlide += 1);
    })    

    for (var l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener("click", function() {
            playSlide(currentSlide = testimDots.indexOf(this));
        })
    }

    playSlide(currentSlide);

    // keyboard shortcuts
    document.addEventListener("keyup", function(e) {
        switch (e.keyCode) {
            case 37:
                testimLeftArrow.click();
                break;
                
            case 39:
                testimRightArrow.click();
                break;

            case 39:
                testimRightArrow.click();
                break;

            default:
                break;
        }
    })
		
		testim.addEventListener("touchstart", function(e) {
				touchStartPos = e.changedTouches[0].clientX;
		})
	
		testim.addEventListener("touchend", function(e) {
				touchEndPos = e.changedTouches[0].clientX;
			
				touchPosDiff = touchStartPos - touchEndPos;
			
				console.log(touchPosDiff);
				console.log(touchStartPos);	
				console.log(touchEndPos);	

			
				if (touchPosDiff > 0 + ignoreTouch) {
						testimLeftArrow.click();
				} else if (touchPosDiff < 0 - ignoreTouch) {
						testimRightArrow.click();
				} else {
					return;
				}
			
        })
        
        
}



    
})