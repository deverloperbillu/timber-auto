(function ($) {
    /****---- Sticky Header Start ----****/
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
    
        if (scroll >= 124) {
          $(".header").addClass("fixed");
        } else {
          $(".header").removeClass("fixed");
        }
      });
    /****---- Sticky Header End ----****/


    $('.all-faqs .faq-box h4').click(function(e){
      e.preventDefault();
      $('.all-faqs .acrd').removeClass('active');
      $(this).closest('.faq-box').find('.acrd').addClass('active');
      $('.drop-acrd').slideUp();	
      $(this).closest('.faq-box').find('.drop-acrd').slideDown();			
    });
  
  })(window.jQuery);