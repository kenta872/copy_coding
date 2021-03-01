$(function(){
  $("#lovepiano-ql li label").on("click",function(){
    $(this).next().stop().slideToggle();
  });
});
