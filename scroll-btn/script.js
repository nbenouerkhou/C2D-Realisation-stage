$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 20) {
        $('#scrollBtn').fadeIn();
        } else {
        $('#scrollBtn').fadeOut();
        }
      });
        
      $('#scrollBtn').click(function() {
          $("html, body").animate({
          scrollTop: 0
          }, 1000);
          return false;
      });
});