window.onload = function () {
  $('.loading-warpper').fadeOut('slow');
  $('html').css('overflow', 'auto');
};

$(".nav-buttons-small").slideUp();
$("nav .humburger").click(function (e) {
  $(".nav-buttons-small").css("visibility", "visible");
  $(".nav-buttons-small").slideToggle(300);
});

$(".fast-scroll-links").slideToggle();
$("#fast-scroll-button").click(function (e) {
  $(".fast-scroll-links").css("visibility", "visible");
  $(".fast-scroll-links").slideToggle("fast");
});