(function($) {
  $(function () {
    $('#nav_toggle').on('click', function() {
      $('#togglemenu_wrapper').toggleClass('open');
      $('#logo').toggleClass('logoop');
    });
  });
})(jQuery);

var swiper1 = new Swiper('.slide1', {
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


$(function() {
    //swiper 980以下で起動
    var swiper2;
    $(window).on('load resize', function(){
        var w = $(window).width();
        if (w <= 980) {
            if (swiper2) {
                return;
            } else {
                swiper2 = new Swiper('.slide2', {
                  pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                  },
                  speed: 1000,
                });
            }
        } else {
            if (swiper2) {
                swiper2.destroy();
                swiper2 = undefined;
            }
        }
    });
});




$(function() {
    //swiper 980以下で起動
    var swiper3;
    $(window).on('load resize', function(){
        var w = $(window).width();
        if (w <= 980) {
            if (swiper3) {
                return;
            } else {
                swiper3 = new Swiper('.slide3', {
                  slidesPerView: 2,
                  spaceBetween: 40,
                  pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                  },
                  speed: 1000,
                });
            }
        } else {
            if (swiper3) {
                swiper3.destroy();
                swiper3 = undefined;
            }
        }
    });
});


var swiper4 = new Swiper('.slide4', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  loop:true,
  speed: 1000,
  slidesPerView: 1.5,
  centeredSlides : true,
  spaceBetween: 32,
  breakpoints: {
    980: {
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
        nextEl: '.swiper-button-next', //「次へボタン」要素の指定
        prevEl: '.swiper-button-prev', //「前へボタン」要素の指定
      },
    }
  },
});





var swipertest = new Swiper('.slidetest', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  loop:true,
  speed: 1000,
  slidesPerView: 3,
  centeredSlides : true,
  spaceBetween: 32,
});

$(function(){
  $("#question_list li label").on("click",function(){
    $(this).next().stop().slideToggle(300);
  });
});
