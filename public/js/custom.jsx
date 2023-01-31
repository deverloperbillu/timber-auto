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
  
  })(window.jQuery);