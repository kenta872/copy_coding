// ハンバーガーメニュー
$(function () {
  $('#nav_toggle>label').on('click', function() {
    $('#navmenu').toggleClass('nav_open');
  });
});

// 郵便番号変換
$('.ajaxzip3').on('click', function(){
    AjaxZip3.zip2addr('address','','pref','addr1','addr2');
    //成功時に実行する処理
    AjaxZip3.onSuccess = function() {
        $('.addr2').focus();
    };
    //失敗時に実行する処理
    AjaxZip3.onFailure = function() {
        alert('郵便番号に該当する住所が見つかりません');
    };
    return false;
});


// コンタクトリンク
$('.contact_link>img').on('click',function() {
  $("html,body").animate({scrollTop:$('#contact').offset().top});
});
$('#contact_now').on('click',function() {
  $("html,body").animate({scrollTop:$('#contact').offset().top});
});



// スワイパー
var swiper1 = new Swiper('.slide1', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  loop:true,
  speed: 1000,
  slidesPerView: 1,
  centeredSlides : true,
  spaceBetween: 32,
  navigation: {
    nextEl: '.swiper-button-next', //「次へボタン」要素の指定
    prevEl: '.swiper-button-prev', //「前へボタン」要素の指定
  },
  breakpoints: {
    480: {
      slidesPerView: 3,
      spaceBetween: 12,
    }
  },
});


// スクロールフェードイン（下から出現）
$(function () {
  $(window).scroll(function () {
    $(".effect-fade-vertical").each(function () {
      var elemPos = $(this).offset().top; /* 要素の位置を取得 */
      var scroll = $(window).scrollTop(); /* スクロール位置を取得 */
      var windowHeight = $(window).height(); /* 画面幅を取得（画面の下側に入ったときに動作させるため） */
      if (scroll > elemPos - windowHeight) {
        /* 要素位置までスクロール出来たときに動作する */
        $(this).addClass("effect-scroll-vertical");
      }
    });
  });
  jQuery(window).scroll();
});


// ナビゲーション固定
var navElement;
var navRect;
var nav_y;
// ナビゲーションメニューの位置情報取得
window.addEventListener( 'resize', function() {
  // リサイズ時に行う処理
  $('#navmenu').removeClass('navfixed');
  navElement = document.getElementById( "navmenu" ) ;
  navRect = navElement.getBoundingClientRect();
  nav_y = window.pageYOffset + navRect.top ;
}, false );
window.addEventListener( 'load', function() {
  // リサイズ時に行う処理
  $('#navmenu').removeClass('navfixed');
  navElement = document.getElementById( "navmenu" ) ;
  navRect = navElement.getBoundingClientRect();
  nav_y = window.pageYOffset + navRect.top ;
}, false );
// ナビゲーションメニューが画面トップに行った場合fixed
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= nav_y){
    $('#navmenu').addClass('navfixed');
  }else{
    $('#navmenu').removeClass('navfixed');
  }
});



// お問い合わせリンク
var contactlinkElement;
var contactlinkRect;
var contactlink_y;
var contactElement;
var contactRect;
var contact_y;
var imgHeight;
var windowHeighttest;
// お問い合わせリンクの位置情報取得
window.addEventListener( 'resize', function() {
  // リサイズ時に行う処理
  $('#contact_now').removeClass('contactfixed');
  contactlinkElement = document.getElementById( "contact_now" ) ;
  contactlinkRect = contactlinkElement.getBoundingClientRect();
  contactlink_y = window.pageYOffset + contactlinkRect.top ;
  contactElement = document.getElementById( "contact" ) ;
  contactRect = contactElement.getBoundingClientRect();
  contact_y = window.pageYOffset + contactRect.top ;
  imgHeight = $('#contact_now').innerHeight();
  windowHeighttest = $(window).height();
}, false );
window.addEventListener( 'load', function() {
  // リサイズ時に行う処理
  $('#contact_now').removeClass('contactfixed');
  contactlinkElement = document.getElementById( "contact_now" ) ;
  contactlinkRect = contactlinkElement.getBoundingClientRect();
  contactlink_y = window.pageYOffset + contactlinkRect.top ;
  contactElement = document.getElementById( "contact" ) ;
  contactRect = contactElement.getBoundingClientRect();
  contact_y = window.pageYOffset + contactRect.top ;
  imgHeight = $('#contact_now').innerHeight();
  windowHeighttest = $(window).height();
}, false );
// お問い合わせリンクが画面トップに行った場合fixed
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if(scroll + windowHeighttest - imgHeight >= contact_y){
    $('#contact_now').removeClass('contactfixed');
    $('#contact_now').css({
      'top':contact_y,
      'opacity':'1'
    });
  }else if (scroll < contact_y & scroll + windowHeighttest - imgHeight >= contactlink_y){
    $('#contact_now').addClass('contactfixed');
    $('#contact_now').css({
      'top':windowHeighttest - imgHeight
    });
  }else  {
    $('#contact_now').removeClass('contactfixed');
    $('#contact_now').css({
      'top':'auto'
    });
  }
});





// メール送信メソッド確認必要
jQuery(function($){

  //エラーを表示する関数（error クラスの p 要素を追加して表示）
  function show_error(message, this$) {
    text = this$.parent().find('label').text() + message;
    this$.parent().append("<p class='error'>" + text + "</p>")
  }

  //フォームが送信される際のイベントハンドラの設定
  $("#main_contact").submit(function(){
    //エラー表示の初期化
    $("p.error").remove();
    $("div").removeClass("error");
    var text = "";
    $("#errorDispaly").remove();

    //メールアドレスの検証
    var email =  $.trim($("#email").val());
    if(email && !(/^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/gi).test(email)){
      $("#email").after("<p class='error'>メールアドレスの形式が異なります</p>")
    }
    //確認用メールアドレスの検証
    var email_check =  $.trim($("#email_check").val());
    if(email_check && email_check != $.trim($("input[name="+$("#email_check").attr("name").replace(/^(.+)_check$/, "$1")+"]").val())){
      show_error("が異なります", $("#email_check"));
    }
    //電話番号の検証
    var tel = $.trim($("#tel").val());
    if(tel && !(/^\(?\d{2,5}\)?[-(\.\s]{0,2}\d{1,4}[-)\.\s]{0,2}\d{3,4}$/gi).test(tel)){
      $("#tel").after("<p class='error'>電話番号の形式が異なります（半角英数字でご入力ください）</p>")
    }

    //1行テキスト入力フォームとテキストエリアの検証
    $(":text,textarea").filter(".validate").each(function(){
      //必須項目の検証
      $(this).filter(".required").each(function(){
        if($(this).val()==""){
          show_error(" は必須項目です", $(this));
        }
      })
      //文字数の検証
      $(this).filter(".max30").each(function(){
        if($(this).val().length > 30){
          show_error(" は30文字以内です", $(this));
        }
      })
      $(this).filter(".max50").each(function(){
        if($(this).val().length > 50){
          show_error(" は50文字以内です", $(this));
        }
      })
      $(this).filter(".max100").each(function(){
        if($(this).val().length > 100){
          show_error(" は100文字以内です", $(this));
        }
      })
      $(this).filter(".max1000").each(function(){
        if($(this).val().length > 1000){
          show_error(" は1000文字以内でお願いします", $(this));
        }
      })
    })

    //error クラスの追加の処理
    if($("p.error").length > 0){
      $("p.error").parent().addClass("error");
      $('html,body').animate({ scrollTop: $("p.error:first").offset().top-180 }, 'slow');
      return false;
    }
  })

  //テキストエリアに入力された文字数を表示
  $("textarea").on('keydown keyup change', function() {
    var count = $(this).val().length;
    $("#count").text(count);
    if(count > 1000) {
      $("#count").css({color: 'red', fontWeight: 'bold'});
    }else{
      $("#count").css({color: '#333', fontWeight: 'normal'});
    }
  });
})
