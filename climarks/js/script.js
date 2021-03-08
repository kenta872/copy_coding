$(function(){
  var navCheck = false;
  $("#test").click(function(){
    if(navCheck == false) {
      navCheck=true;
      $("#nav-list").animate({"right":0},300);
      $("#all-position").animate({"right":"265px"},300);
      $("#nav-list").show();
    }else {
      navCheck=false;
      $("#nav-list").animate({"right":"-100%"},300);
      $("#all-position").animate({"right":0},300);
      setTimeout(function(){
        $("#nav-list").hide();
      },300);
    }

  });
});
$(function(){
  var serviceCheck = false;
  $("#serviceOpen").click(function(){
    if (serviceCheck == false) {
      serviceCheck=true;
      $("#serviceList").css({"display":"block"});
    } else {
      serviceCheck=false;
      $("#serviceList").css({"display":"none"});
    }
    return false;
  });
});
$(function(){
  var serviceCheck = false;
  $("#creativeOpen").click(function(){
    if (serviceCheck == false) {
      serviceCheck=true;
      $("#creativeList").css({"display":"block"});
    } else {
      serviceCheck=false;
      $("#creativeList").css({"display":"none"});
    }
    return false;
  });
});
$(function(){
  var serviceCheck = false;
  $("#companyOpen").click(function(){
    if (serviceCheck == false) {
      serviceCheck=true;
      $("#companyList").css({"display":"block"});
    } else {
      serviceCheck=false;
      $("#companyList").css({"display":"none"});
    }
    return false;
  });
});
$(function(){
  var serviceCheck = false;
  $("#reqruitOpen").click(function(){
    if (serviceCheck == false) {
      serviceCheck=true;
      $("#reqruitList").css({"display":"block"});
    } else {
      serviceCheck=false;
      $("#reqruitList").css({"display":"none"});
    }
    return false;
  });
});

$(window).resize(function(){
  var w = $(window).width();
  var limit = 980;
  if (w>=limit) {
    $("#serviceList").css({"display":""});
  }
});
