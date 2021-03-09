import initScrollMagic from "./scroll-magic.js";

(function ($, Drupal) {
    jQuery( document ).ready(function() {
        

        //--------- initialization --------------------//
        initScrollMagic();
        console.log('4582');

        //--------- menu--------------------//
        $('.region-header #block-blockheader').click(function () {
            if ($('.region-secondary-menu').hasClass('open-menu')) {
                $('.region-secondary-menu').removeClass('open-menu');
                $('body').removeClass('open-menu');
            }
            else {  
                $('.region-secondary-menu').addClass('open-menu');
                $('body').addClass('open-menu');
            }
        });

        $('#block-blockpreheader').click(function () {
            $('.region-secondary-menu').removeClass('open-menu');
            $('body').removeClass('open-menu');
        });

        //--------puopup-- login-----------//
        $('.user-logged-in #block-loginformpopup').click(function () {
            if ($(this).hasClass('open')) {
                $(this).removeClass('open');
                $('.user-logged-in #block-al-dia-news-account-menu').removeClass('open');
            }
            else {  
                $('.user-logged-in #block-al-dia-news-account-menu').addClass('open');
                $(this).addClass('open');
            }
        });
    });
})(jQuery, Drupal);