$(document).ready(function () {
    $('body').on('click touchstart', '.polaroid', function(){
        var name    = $(this).find('h1').html();
        var bio     = $(this).find('.bio').html();
        var picture = $(this).find('img').attr('src');
        $('.modal-title').html(name);
        $('.modal-body figure img').attr('src', picture);
        $('.modal-body .modal_bio').html(bio);
        $('#modal').modal('show');
    });
});