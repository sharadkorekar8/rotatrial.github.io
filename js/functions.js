jQuery(function ($) {

  //#main-slider
  $(function () {
    $('#main-slider.carousel').carousel({
      interval: 8000
    });
  });


  //Initiat WOW JS
  new WOW().init();

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });
  $('.scrollup').click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
    return false;
  });

  // club filter
  $(window).load(function () {
    'use strict';
    var $club_selectors = $('.club-filter >li>a');
    var $club = $('.club-items');
    $club.isotope({
      itemSelector: '.club-item',
      layoutMode: 'fitRows'
    });

    $club_selectors.on('click', function () {
      $club_selectors.removeClass('active');
      $(this).addClass('active');
      var selector = $(this).attr('data-filter');
      $club.isotope({ filter: selector });
      return false;
    });
  });


  //Pretty Photo
  $("a[rel^='prettyPhoto']").prettyPhoto({
    social_tools: false
  });

});
