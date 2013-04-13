/*global define */
define(['jquery', 'layout'], function ($) {
    'use strict';
    $('.btn-img').hover(function(event) {
        var code = $(event.target).prop('class').replace('invertible btn-img ','');
        $('.content').addClass(code);
    }, function(event)  {
        var code = $(event.target).prop('class').replace('invertible btn-img ','');
        $('.content').removeClass(code);
    });
    $('.space').click(function() {
        $('.invertible').each(function(index, target)  {
            if ($(target).hasClass('invert')) {
                $(target).removeClass('invert');
            } else {
                $(target).addClass('invert');
            }
        });
    });
});