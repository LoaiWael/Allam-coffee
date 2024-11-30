$(function () {
    let isVisible = true
    $(".humburger").click(function (e) {
        if (isVisible) {
            $("#menu-nav").animate({ right: "146px" }, 500)
        } else {
            $("#menu-nav").animate({ right: "0" }, 500)
        }
        isVisible = !isVisible;
    });
    $('#first-button').click(function (e) {
        window.location.href = './../Allam-coffee/menu.html';
    });
    $("#sec-button").click(function (e) {
        window.location.href = './../Allam-coffee/aboutAllam.html#contacts';
    });
})