$(function () {
    "use strict";
    $('.j-files-footer-link').on('click', function(e) {
    e.preventDefault();
    var $filesToggleButton = $(this);
    var targetId = $filesToggleButton.data('target-id');
    var $files = $('#j-files-' + targetId);
    if($files.hasClass('show')) {
        $files.removeClass('show'); setTimeout(function() {
        $filesToggleButton.text('Смотреть все (16)');
}, 500);
     }  
    else {
        $files.addClass('show'); setTimeout(function() {
        $filesToggleButton.text('Свернуть');
}, 500);
     }    
    });
    $(window).on('scroll', function () {
    if ($(window).scrollTop() > 0) {
        $('.j-up-button').addClass('visible');
    } else {
        $('.j-up-button').removeClass('visible');
    }
});
    $('.j-up-button').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 'normal');
});
});