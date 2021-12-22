const commentsItems = $('.comments__item');
const arrowRight = $('.arrow-right');
const arrowLeft = $('.arrow-left');
let count = 0;
const minCount = 0;
const maxCount = commentsItems.length - 1;
let timer;
let sec = 1800;
const countdown = () => {
    let minutes =  Math.floor(sec / 60);
    let seconds = (sec % 60 < 10) ? `0${sec % 60}` : sec % 60;
    $('.timer').text(`${minutes}:${seconds}`);
    sec--;
    if( sec < 0) {
        clearTimeout(timer);
    } else {
        timer = setTimeout(countdown, 1000);
    }
}
$(function () {

    $('.form-item').focus(function() {
        $(this).next('.form-item--focus').css({'opacity': '1'});
    })

    $('#phone').bind("change keyup input click", function() {
        if (this.value.match(/[^0-9]/g)) {
            this.value = this.value.replace(/[^0-9]/g, '');
        }
    });

    countdown();
    $(commentsItems[count]).css({'opacity': '1'});

    $(arrowLeft).click(function() {
        count = (count > minCount) ? --count : maxCount;
        $(commentsItems[count]).css({'opacity': '1'});
        $(commentsItems[count]).siblings('.comments__item').css({'opacity': '0'});
    })

    $(arrowRight).click(function () {
        count = (count < maxCount) ? ++count : minCount;
        $(commentsItems[count]).css({'opacity': '1'});
        $(commentsItems[count]).siblings('.comments__item').css({'opacity': '0'});
    })
})
