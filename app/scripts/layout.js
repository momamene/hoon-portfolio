/*global define */
define(['jquery'], function ($) {
    'use strict';
    var resizeLayout = function() {
        var imgWidth = $('.btn-img').width(),
        imgHeight = $('.btn-img').height();
        var topImgList = $('.vertical-top').find('.btn-img'),
        widthGap = ($(window).width() - imgWidth) / (topImgList.length - 1),
        heightGap = ($(window).height() - imgHeight) / (3 - 1);
        for (var i = 0 ; i < topImgList.length ; i++)   {
            $(topImgList[i]).css('left', widthGap * i);
        }
        var middleImgList = $('.vertical-middle').find('.btn-img');
        var sideMargin = $(window).width() >= 1200 ? 30 : 0;
        $(middleImgList[0]).css({
            top: heightGap,
            left: sideMargin
        });
        $(middleImgList[1]).css({
            top: heightGap,
            left: ($(window).width() - imgWidth - sideMargin)
        });
        var bottomImgList = $('.vertical-bottom').find('.btn-img');
        $(bottomImgList[0]).css({
            bottom: 0,
            left: sideMargin
        });
        $(bottomImgList[1]).css({
            bottom: 0,
            left: ($(window).width() - imgWidth - sideMargin)
        });
        $('.content').css({
            left: ( $(window).width() - $('.content').width() )/ 2,
            top: imgHeight + ($(window).height() - $('.content').height() - imgHeight) / 2
        });
    };
    $(window).resize(resizeLayout);
    resizeLayout();
});
