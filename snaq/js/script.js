(function($) {
  $(function () {
    $('#nav_toggle').on('click', function() {
      $('#togglemenu_wrapper').toggleClass('open');
      $('#logo').toggleClass('logoop');
    });
  });
})(jQuery);

var swiper = new Swiper('.slide1', {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  loop:true,
  effect: 'fade',
  speed: 1000,
});

var swiper = new Swiper('.slide2', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  speed: 1000,
});

var swiper = new Swiper('.slide3', {
  slidesPerView: 2,
  spaceBetween: 40,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  speed: 1000,
});

var swiper = new Swiper('.slide4', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  loop:true,
  speed: 1000,
  slidesPerView: 1.5,
  centeredSlides : true,
  spaceBetween: 32,
});


$(function(){
  $("#question_list li label").on("click",function(){
    $(this).next().stop().slideToggle(300);
  });
});
