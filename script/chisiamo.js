$(document).ready(function () {
    $('body').on('click touchstart', '.polaroid', function(){
        var name    = $(this).find('h1').html();
        var bio     = $(this).find('.bio').html();
        var picture = $(this).find('img').attr('src');
        var role    = $(this).find('h4').html();
        $('.modal-title .name').html(name);
        $('.modal-title .role').html(" - " + role);
        $('.modal-body figure img').attr('src', picture);
        $('.modal-body .modal_bio').html(bio);
        $('#modal').modal('show');
    });
});