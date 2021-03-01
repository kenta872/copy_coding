$(function(){
  var navCheck = false;
  $("#test").click(function(){
    if(navCheck == false) {
      navCheck=true;
      $("#nav-list").animate({"right":0},500);
      $("#all-position").animate({"right":"265px"},500);
      $("#nav-list").show();
    }else {
      navCheck=false;
      $("#nav-list").animate({"right":"-100%"},500);
      $("#all-position").animate({"right":0},500);
      setTimeout(function(){
        $("#nav-list").hide();
      },500);
    }

  });
});
$(function(){
  var w = $(window).width();
  var limit = 980;
  var serviceCheck=false;
  $("#serviceOpen").click(function(){
    if(w<=limit) {
      $("#service").addClass("serviceOP");
      if(serviceCheck==false) {
        serviceCheck=true;
        $(".serviceOP").css({"display":"block"});
      }else {
        serviceCheck=false;
        $(".serviceOP").css({"display":"none"});
      }
    }else {
      $("#service").removeClass("serviceOP");
    }
    return false;
  });
});
