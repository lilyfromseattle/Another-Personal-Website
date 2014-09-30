$(document).click(function() {
    // Adding the conditional will only fire when the element has the class available
    if( $('.nav.active').hasClass("active") ) {
      $('.nav.active').removeClass("active");
      // console.log('Triggered');
    }
});

$(".nav").click(function(event) {
    $(this).toggleClass("active");
    event.stopPropagation();
});
