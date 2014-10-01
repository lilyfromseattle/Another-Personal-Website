$(document).ready(function() {

  $("#content").hover(function () {
    $("#mobilenav").css("left", "-150")
  });

  $("#menu-icon").hover(function () {
    $("#mobilenav").css("left", "0")
  });

  $(".links").click(function () {
    $("#mobilenav").css("left", "-150")
  });

});
