$(document).ready(function () {
    var currentItem = {title: 'Il Teatro', color:'orange-text'};
    $('#menu-title').html(currentItem.title).addClass(currentItem.color).hide();
    
    // === Navigation Affix
    var navPosition = $('.navbar').offset().top;
    $(window).scroll(function () {
        if ($(window).scrollTop() > navPosition) {
            $('.navbar').addClass("navbar-fixed-top");
        } else {
            $('.navbar').removeClass("navbar-fixed-top");
        }
    });
    
    // === Smooth Scrolling and Custom Menu
    $('body').on('click', '#scroll-down-link', function(event){
        $('.menu-teatro').click();
        event.preventDefault();
    });
    
    $('.navbar .navbar-nav li>a').bind({
        click: function (event) {
            var link            = $(this).attr('href');
            var posi            = $(link).offset();
            currentItem.title   = $(this).attr('title');
            currentItem.color   = $(this).data('color');
            $('#menu-title').removeClass().addClass(currentItem.color).html(currentItem.title);
            $('html, body').animate({scrollTop: posi.top}, 1000, 'easeInOutExpo');
            event.preventDefault();
        },
        mouseenter: function(){
            var title   = $(this).attr('title');
            var color   = $(this).data('color');
            $('#menu-title').removeClass().addClass(color).html(title).show();
        },
        mouseleave: function(){
            $('#menu-title').removeClass().addClass(currentItem.color).html(currentItem.title).hide();
        }
    });
});
