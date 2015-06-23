var currentItem = {title: 'Il Teatro', color: 'orange-text'};
$(document).ready(function () {
    $('#menu-title').html(currentItem.title).addClass(currentItem.color).hide();

    // === Navigation Affix
    var navPosition = $('.navbar').offset().top;
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= navPosition) {
            $('.navbar').addClass("navbar-fixed-top");
            $('.section').each(function (i) {
                if (Math.floor($(this).offset().top) <= scroll + 100) {
                    $('#navbar li.active').removeClass('active');
                    var activeli = $('#navbar ul li').eq(i);
                    currentItem.title = activeli.find('a').attr('title');
                    currentItem.color = activeli.find('a').data('color');
                    activeli.addClass('active');
                    $('#menu-title').removeClass().addClass(currentItem.color).html(currentItem.title).show();
                }
            });
        } else {
            $('.navbar').removeClass("navbar-fixed-top");
            $('#navbar li.active').removeClass('active');
            $('#menu-title').removeClass().addClass(currentItem.color).html(currentItem.title).hide();
        }
    });

    // === Smooth Scrolling and Custom Menu
    $('body').on('click touchstart', '#scroll-down-link', function (event) {
        var link = $('.menu-teatro');
        var section = $('#teatro');
        var posi = section.offset();
        currentItem.title = link.attr('title');
        currentItem.color = link.data('color');
        $('#menu-title').removeClass().addClass(currentItem.color).html(currentItem.title).show();
        $('html, body').animate({scrollTop: posi.top - 100}, 1000, 'easeInOutExpo');
        event.preventDefault();
    });

    $('.navbar .navbar-nav li>a').bind({
        click: function (event) {
            var link = $(this).attr('href');
            var posi = $(link).offset();
            currentItem.title = $(this).attr('title');
            currentItem.color = $(this).data('color');
            $('#menu-title').removeClass().addClass(currentItem.color).html(currentItem.title).show();
            $('html, body').animate({scrollTop: posi.top}, 1000, 'easeInOutExpo');
            event.preventDefault();
        },
        touchstart: function (event) {
            var link = $(this).attr('href');
            var posi = $(link).offset();
            currentItem.title = $(this).attr('title');
            currentItem.color = $(this).data('color');
            $('#menu-title').removeClass().addClass(currentItem.color).html(currentItem.title).show();
            $('html, body').animate({scrollTop: posi.top}, 1000, 'easeInOutExpo');
            event.preventDefault();
        },
        mouseenter: function () {
            var title = $(this).attr('title');
            var color = $(this).data('color');
            $('#menu-title').removeClass().addClass(color).html(title).show();
        },
        mouseleave: function () {
            $('#menu-title').removeClass().addClass(currentItem.color).html(currentItem.title).hide();
        }
    });
});