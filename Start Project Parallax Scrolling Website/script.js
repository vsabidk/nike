let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px'
    leaf.style.top = value * -1.5 + 'px'
    leaf.style.left = value * 1.5 + 'px'
    hill5.style.left = value * 1.5 + 'px'
    hill4.style.left = value * -1.5 + 'px'

    

})

var path = document.querySelector('path.nike');
var length = path.getTotalLength();
console.log(length)





$(function () {
    var slider = '.content__slider';
    var sliderOuter = '.content__sliderWrapper';

    var sliderItem = '.content__sliderItem';
    var sliderItemOuter = '.content__sliderItemOuter';

    var sliderNext = '.content__sliderNext';
    var sliderPrev = '.content__sliderPrev';


    // set width and height
    $(window).on('load resize', function () {
        $(sliderItemOuter).width($(window).width());
        $(sliderOuter).width($(window).width()).height($(sliderItem).height());
        $(slider).width($(window).width() * $(sliderItemOuter).length);
    });


    // next button
    $(sliderNext).on('click', function (e) {

        // index of slide
        var slideIndex = $(e.currentTarget).parents(sliderItemOuter).index() + 1;

			  // check end
        if ((slideIndex) < $(sliderItemOuter).length) {
            $(slider).css({
                'transform': 'translateX(-' + $(window).width() * (slideIndex) + 'px)',
                '-webkit-transform': 'translateX(-' + $(window).width() * (slideIndex) + 'px)'
            });
        }
    });
    
    // previous button
    $(sliderPrev).on('click', function (e) {

        // index of slide
        var slideIndex = $(e.currentTarget).parents(sliderItemOuter).index() - 1;

				// check start
        if (slideIndex > -1) {
            $(slider).css({
                'transform': 'translateX(-' + $(window).width() * (slideIndex) + 'px)',
                '-webkit-transform': 'translateX(-' + $(window).width() * (slideIndex) + 'px)'
            });
        }
    });
});



