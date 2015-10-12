$(document).ready(function () {

    $('.next').on('click', function (e) {
        e.preventDefault();
        $('.inner-carousel a:last').after($('.inner-carousel a:first'));

    });

    $('.previous').on('click', function (e) {
        e.preventDefault();
        $('.inner-carousel a:first').before($('.inner-carousel a:last'));
    });

});