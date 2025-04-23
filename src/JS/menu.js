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
    let currentCateg = '';
    let figGenerator = '';
    data.forEach(drink => {
        if (drink.mostOrdered === true) {
            let price = '';
            for (let i = 0; i < drink.prices.length; i++) {
                price += `${drink.prices[i].price}`;
                if (drink.prices[i + 1] != undefined)
                    price += ' / ';
            }
            mostOrdered += `<figure>
            <img src="${drink.image}" alt="${drink.drinkName}" draggable="false">
            <figcaption>${drink.drinkName}</figcaption>
            <span>${price}</span>
            </figure>`;
        }
        if (currentCateg === '') {
            currentCateg = drink.drinkCategory;
        }
        else if (currentCateg != drink.drinkCategory) {
            document.querySelector(`#${currentCateg} .menu-content`).innerHTML = figGenerator;
            figGenerator = '';
            currentCateg = drink.drinkCategory;
        }
        generator(drink)
    });
    document.querySelector(`#${currentCateg} .menu-content`).innerHTML = figGenerator;
    document.querySelector('.most-orderd .content').innerHTML = mostOrdered;

    function generator(drink) {
        if (drink.drinkCategory === 'additions') {
            figGenerator += `<figure>
                        <img loading="lazy" src="${drink.image}" alt="${drink.drinkName}" draggable="false">
                        <figcaption>${drink.drinkName}</figcaption>
                        <div class="drink-info">
                            <hr>
                            <div class="price-info">
                                <div class="col1"><span>Price:</span></div>
                                <div class="col2"><span>${drink.price}</span></div>
                            </div>
                        </div>
                    </figure>`;
        } else {
            let secondSize = '';
            let secondPrice = '';
            if (drink.prices[1]) {
                secondSize = `<span>${drink.prices[1].size}:</span>`;
                secondPrice = `<span>${drink.prices[1].price}</span>`;
            }

            figGenerator += `<figure>
                <img loading="lazy" src="${drink.image}" alt="${drink.drinkName}" draggable="false">
                <figcaption>${drink.drinkName}</figcaption>
                <div class="drink-info">
                    <hr>
                    <div class="price-info">
                        <div class="col1"><span>${drink.prices[0].size}:</span>${secondSize}</div>
                        <div class="col2"><span>${drink.prices[0].price}</span>${secondPrice}</div>
                    </div>
                    <p>${drink.ingredients || 'معلومات عن المشروب مثل مكوناته'}</p>
                </div>
            </figure>`;
        }
    }

    $(".drink-info").slideUp();
    $(".menu-content figure").click(function (e) {
        $(this).find(".drink-info").slideToggle("fast");
    });
    $('.loading-warpper').fadeOut('slow');
    $('html').css('overflow', 'auto');
});