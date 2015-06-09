$(document).ready(function () {
    // === Cover Image
    var navPosition = $('.navbar').offset().top;
    console.log(navPosition);
    $(window).scroll(function () {
        console.log($(window).scrollTop());
        if ($(window).scrollTop() >= navPosition) {
            $('.navbar').addClass("navbar-fixed-top");
        } else {
            $('.navbar').removeClass("navbar-fixed-top");
        }
    });
    // === Smooth Scrolling
    $('.navbar .navbar-nav li>a').bind('click', function (event) {
        var link = $(this).attr('href');
        var posi = $(link).offset().top;
        $('body,html').animate({scrollTop: posi}, 1000, 'easeInOutExpo');
        event.preventDefault();
    });
});
