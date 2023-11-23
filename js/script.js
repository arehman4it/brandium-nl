(function($){
    var progress = 0;
    var scrolled=0;
    var pageHeight = (jQuery(document).height() - jQuery(window).height());
    $(document).on("scroll", function(){


      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var totalscrolled = (winScroll / height) * 100;
      // document.getElementById("myBar").style.width = totalscrolled + "%";



      var pixels = jQuery(document).scrollTop();
      scrolled=pixels;
      
      progress = (winScroll / height) * 100;

      progress = ( progress * .7 ) + 40;

      // progress = 60;

      jQuery('.shello').text(progress);
      
      jQuery(".mask .fill").css("background-color", "#d9ff06").css("clip", "rect(0px, "+progress+"px, 150px, 0px)");

      jQuery(".a-scrollIndicator__text").css("transform", "translate(-50%,-50%) rotate("+progress/10+"turn)");
    })


    jQuery(".a-scrollIndicator__container").on("click" ,function(){
        scrolled=scrolled+1000;
           jQuery("html, body").animate({
             scrollTop:  scrolled
        }, { duration: 'slow', easing: 'easeOutQuad' });
      });
})(jQuery)