jQuery(document).ready(($) => {


  // Smooth scroll for the menu and links with .scrollto classes
  $('.smothscroll').on('click', function (e) {
    e.preventDefault();
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      var offset_topvalue
      if ($(window).width() < 960) {
        offset_topvalue = 0
      } else {
        offset_topvalue = 62
      }
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - offset_topvalue
        }, 1500, 'easeInOutExpo');
      }
    }
  });
});