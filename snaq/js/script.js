(function($) {
  $(function () {
    $('#nav_toggle').on('click', function() {
      $('#togglemenu_wrapper').toggleClass('open');
      $('#logo').toggleClass('logoop');
    });
  });
})(jQuery);
