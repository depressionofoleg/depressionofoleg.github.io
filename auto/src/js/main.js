$(document).ready(function () {

    $('.wwa-href').hover(function () {
        $(this).find('.wwa-hreef').fadeIn(100);
        },function () {
        $(this).find('.wwa-hreef').fadeOut(100);});


     $('.box-hover').hover(function () {
        $(this).find('.box-href').fadeIn(100);
        },function () {
        $(this).find('.box-href').fadeOut(100);});

     $('.wwd-slider').slick({
     	prevArrow: '<button type="button" class="wwd-slider-btn wwd-prev-btn"><img src="img/wwd/left.png" /></button>',
     	nextArrow: '<button type="button" class="wwd-slider-btn wwd-next-btn"><img src="img/wwd/right.png" /></button>', 
     });


});