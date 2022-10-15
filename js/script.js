$(function () {
  'use strict'

  //About Video palyer start

  $('.venobox').venobox({
    spinner: 'cube-grid',
    spinColor: '#e23e38'
  });

  //About Video player End

  //testymonial slider
  $('.testymonial_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    speed: 1000,
    responsive: [

      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 2000,
          speed: 1000,
        }
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          speed: 1000,
        }
      },
      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          speed: 1000,
        }
      }
    ]
  });

  // Counter Start
  $('.counter').counterUp({
    delay: 10,
    time: 2000
  });
  // Counter End

  //manu fixed
  var map = $('#manu').offset().top;

  //worker slider
  $('.worker_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    speed: 1000,
    responsive: [

      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          autoplay: true,
          autoplaySpeed: 2000,
          speed: 1000,
        }
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          speed: 1000,
        }
      },
      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          speed: 1000,
        }
      }
    ]
  });

  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();

    if (scrolling > map) {
      $('#manu').addClass('menu_fix');
    } else {
      $('#manu').removeClass('menu_fix');
    }

  });



















  //scroll button start
  $('.button_scroll').click(function () {
    $('html,body').animate({
      scrollTop: 0,
    }, 2000);
  });

  $(window).scroll(function () {
    var buttonscroll = $(this).scrollTop();

    if (buttonscroll > 150) {
      $('.button_scroll').fadeIn();
    } else {
      $('.button_scroll').fadeOut();
    }
  });

});