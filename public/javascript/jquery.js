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

  $(".fulltext").click(function () {
    $(this).siblings(".posttext").slideToggle(600);
    // $(this).children(".readpost").replaceWith("Hide Full Post").toggle();
      if ($(this).siblings(".posttext").is(":visible")) {
        $(this).children(".readpost").replaceWith("Show Full Post");
      };
      else {
        $(this).children(".readpost").replaceWith("Hide Full Post");
      };
  });


  //  $(".posttext").hide();
  //  $(".readpost").show();
  //   $(this).children(".readpost").toggle(function(){
  //     $(".readpost").text("Read Full Post");
  //     $(".posttext").slideDown();
  //   },function(){
  //     $(".readpost").text("Hide Full Post");
  //     $(".posttext").slideUp();
  //   });


  // $(".readpost").click(function () {
  //   $(this).clildren(".")replaceWith("Hide Full Text").Toggle();
  // });
  // $(".fulltext").on("click", function() {
  //   var el = $(this);
  //   if (el.text() == el.data("Hide Full Text")) {
  //     el.text(el.data("Show Full Text"));
  //   } else {
  //     el.data("Show Full Text", el.text());
  //     el.text(el.data("Hide Full Text"));
  //   }
  // });
  //
  // $(".readpost").on("click", function() {
  //   var el = $(this);
  //   el.text() == el.data("Hide Full Text")
  //     ? el.text(el.data("Show Full Text"))
  //     : el.text(el.data("Hide Full Text"));
  // });

});
