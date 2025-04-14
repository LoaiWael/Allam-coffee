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

    fetch("src/data.json").then(res => res.json()).then(data => {
        let mostOrdered = '';
        data.forEach(drink => {
            if (drink.mostOrdered === true) {
                let price = '';
                for (let i = 0; i < drink.prices.length; i++) {
                    price += `${drink.prices[i].price}`;
                    if (drink.prices[i + 1] != undefined)
                        price += ' / ';
                }
                mostOrdered += `<figure>
                <img src="${drink.image}" alt="${drink.drinkName}">
                <figcaption>${drink.drinkName}</figcaption>
                <span>${price}</span>
                </figure>`;
            }
        });
        document.querySelector('.most-orderd .content').innerHTML = mostOrdered;

        // let hotDrinks = [];
        // data.forEach(drink => {
        //     if (data.drinkCategory === 'hot-drinks')
        //         hotDrinks.push(drink);
        // });
    });
})