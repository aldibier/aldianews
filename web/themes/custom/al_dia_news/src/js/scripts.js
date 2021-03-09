// $(function () { // wait for document ready
//     // init controller
//     var controller = new ScrollMagic.Controller({loglevel: 3});

//     // build scene
//     var scene = new ScrollMagic.Scene({triggerElement: ".container-right", duration: 300, loglevel: 3})
//         .setPin(".block-views-blockmore-in-this-section-news-block-1")
//         .addTo(controller)
//         .addIndicators({name: "pin scene", colorEnd: "#0000"});
// });

(function ($, Drupal) {
    jQuery( document ).ready(function() {

        $('.region-header #block-blockheader').click(function () {
            if ($('.region-secondary-menu').hasClass('open-menu')) {
                $('.region-secondary-menu').removeClass('open-menu');
            }
            else {  
                $('.region-secondary-menu').addClass('open-menu');
            }
        });
    });
})(jQuery, Drupal);