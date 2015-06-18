$(document).ready(function () {
    var currentItem = {title: 'Il Teatro', color:'orange-text'};
    $('#menu-title').html(currentItem.title).addClass(currentItem.color).hide();
    
    // === Navigation Affix
    var navPosition = $('.navbar').offset().top;
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > navPosition) {
            $('.navbar').addClass("navbar-fixed-top");
            $('.section').each(function(i) {
//                console.log(i + '.' + Math.floor($(this).offset().top) + ' - ' + (scroll) + ' d=' + (scroll - Math.floor($(this).offset().top) ));
                if (Math.floor($(this).offset().top) <= scroll+100) {
                    $('#navbar li.active').removeClass('active');
                    $('#navbar ul li').eq(i).addClass('active');
                }
            });
        } else {
            $('.navbar').removeClass("navbar-fixed-top");
            $('#navbar li.active').removeClass('active');
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

//$(window).scroll(function() {
//    var windscroll = $(window).scrollTop();
//    if (windscroll >= 100){
//        $('.wrapper section').each(function(i) {
//            if ($(this).position().top <= windscroll - 100) {
//                $('nav a.active').removeClass('active');
//                $('nav a').eq(i).addClass('active');
//            }
//        });
//    }else{
//        $('nav').removeClass('fixed');
//        $('nav a.active').removeClass('active');
//        $('nav a:first').addClass('active');
//    }
//});