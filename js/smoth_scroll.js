jQuery(document).ready(($) => {


  // Smooth scroll for the menu and links with .scrollto classes
  $('.smothscroll').on('click', function (e) {
    e.preventDefault();
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      var screenwidth
      if ($(window).width() < 960) {
        screenwidth = 0
      } else {
        screenwidth = 62
      }
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - screenwidth
        }, 1500, 'easeInOutExpo');
      }
    }
  });
});