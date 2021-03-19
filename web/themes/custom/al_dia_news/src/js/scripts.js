
import "../../assets/libraries/selection-sharer/selection-sharer.css";
import SelectionSharer from "../../assets/libraries/selection-sharer/selection-sharer.js";
import initSlick from "./slick.js";

(function ($, Drupal) {
    const sharer = new SelectionSharer();
    sharer.setElements('p')

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
            //initScrollMagic();


            const alto = $('.content-right-pages').height();
            const pautas = $('.pautas').height();
            const altoscroll = $(alto - pautas);
            console.log(altoscroll[0]);

            var controller1 = new ScrollMagic.Controller({globalSceneOptions: {
                triggerHook: 1,
                duration: altoscroll[0]
            }});

            var scene1 = new ScrollMagic.Scene({triggerElement: '.content-right-pages'})
            .setClassToggle(".pautas", "active")
            .setPin('.pautas', { pushFollowers: false })
            //.addIndicators()
            .addTo(controller1)
            .offset(pautas);


            //------------ scroll internas--------------//

            const altorigh = $('.container-right').height();
            const noticias = $('.block-views-blockmore-in-this-section-news-block-1').height();
            const altoscrolltotal = $(altorigh - noticias);
            console.log(altoscrolltotal[0]);

            var controller3 = new ScrollMagic.Controller({globalSceneOptions: {
                triggerHook: 1,
                duration: altoscrolltotal[0]
            }});

            var scene3 = new ScrollMagic.Scene({triggerElement: '.container-right'})
            .setClassToggle(".block-views-blockmore-in-this-section-news-block-1", "active")
            .setPin('.block-views-blockmore-in-this-section-news-block-1', { pushFollowers: false })
            .addIndicators()
            .addTo(controller3)
            .offset(noticias);

        }



        initSlick($, Drupal);

    });


})(jQuery, Drupal);
