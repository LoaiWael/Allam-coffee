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

    const image = document.getElementsByTagName("img");
    image.setAttribute("draggable", "false");
    image.oncontextmenu = function () {
        return false
    }
})