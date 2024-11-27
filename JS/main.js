$(function () {
    let isVisible = true
    $(".humburger").click(function (e) {
        if (isVisible) {
            $("#menu").animate({ right: "146px" }, 500)
        } else {
            $("#menu").animate({ right: "0" }, 500)
        }
        isVisible = !isVisible;
    });
})