import initScrollMagic from "./scroll-magic.js";
import initSlick from "./slick.js";

(function ($, Drupal) {
    jQuery( document ).ready(function() {

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

        $(".region-secondary-menu #block-al-dia-news-main-menu a").each(function(){
            var text = $(this).html();
            $(this).html(text.replace(/AL/g,'<br>AL'));
        });

        //--------- initialization --------------------//

        if (window.matchMedia("(min-width: 768px)").matches) {
            initScrollMagic();

           
            const alto = $('.content-right-pages').height();
            const pautas = $('.pautas').height();
            console.log(pautas);

            var controller1 = new ScrollMagic.Controller({globalSceneOptions: {
                duration: alto,
                triggerHook: 1
            }});

            new ScrollMagic.Scene({
                triggerElement: '.pautas'
            })
            .setClassToggle(".pautas", "active")
            .addIndicators({name: "pin scene", colorEnd: "#0000"})
            .addTo(controller1)
            .offset(pautas);

            
        }

       
       
        initSlick($, Drupal);
        
    });
})(jQuery, Drupal);