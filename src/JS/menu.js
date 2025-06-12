import drinks from './../data.js'

window.onload = function () {
	$(".drink-info").slideUp();
	$(".menu-content figure").click(function (e) {
		$(this).find(".drink-info").slideToggle("fast");
	});
	$('.loading-warpper').fadeOut('slow');
	$('html').css('overflow', 'auto');
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
}

drinks.forEach(drink => {
	document.querySelector('.most-orderd .content').insertAdjacentHTML('beforeend', drink.generateMostOrder());
	document.querySelector('#hot-drinks .menu-content').insertAdjacentHTML('beforeend', drink.generateFigure('hot-drinks'));
	document.querySelector('#smoothie .menu-content').insertAdjacentHTML('beforeend', drink.generateFigure('smoothie'));
	document.querySelector('#frappe .menu-content').insertAdjacentHTML('beforeend', drink.generateFigure('frappe'));
	document.querySelector('#mojito .menu-content').insertAdjacentHTML('beforeend', drink.generateFigure('mojito'));
	document.querySelector('#ice-coffee .menu-content').insertAdjacentHTML('beforeend', drink.generateFigure('ice-coffee'));
	document.querySelector('#additions .menu-content').insertAdjacentHTML('beforeend', drink.generateFigure('additions'));
	console.log(drink.generateFigure('additions'))
});