$(document).ready(function () {
    // === Cover Image
    var navPosition = $('.navbar').offset().top;
    $(window).scroll(function () {
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
