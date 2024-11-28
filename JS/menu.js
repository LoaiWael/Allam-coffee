$(function () {
    $(".drink-info").slideUp();
    $(".menu-content figure").click(function (e) {
        $(this).find(".drink-info").slideToggle("fast");
    });

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

    const image = document.getElementsByTagName("img");
    image.setAttribute("draggable", "false");
    image.setAttribute("onecontextmenu", "false");
    image.oncontextmenu = function () {
        return false;
    }
})