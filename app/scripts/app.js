/*global define */
define(['jquery', 'layout'], function ($) {
    'use strict';
    $('.show-gif').click(function(event) {
        var code = $(event.target).prop('class').replace('invertible show-gif btn-img ','');
        $('.content').removeClass().addClass('invertible content').addClass(code);
        return false;
    });
    $('body').click(function() {
        $('.content').removeClass().addClass('invertible content introduce');
        if ($('body').hasClass('invert')) {
            $('.content').addClass('invert');
        }
    });
    $('.invert-trigger').click(function() {
        $('.invertible').each(function(index, target)  {
            if ($(target).hasClass('invert')) {
                $(target).removeClass('invert');
            } else {
                $(target).addClass('invert');
            }
        });
    });
});
