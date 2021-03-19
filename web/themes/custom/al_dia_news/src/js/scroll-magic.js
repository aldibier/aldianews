const initScrollMagic = ($, Drupal) => {

    //------------ scroll jobs --------------//
    const controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 1,
        }
    });

    if ($('.content-right-pages').length && $('.pautas').length) {

        const rigthPages = $('.content-right-pages')[0];
        const pautas = $('.pautas')[0];

        const scene1 = new ScrollMagic.Scene({ triggerElement: $(rigthPages), duration: getDurationScene1 })
            .addTo(controller)
            .offset($(pautas).height())
            .setPin($(pautas), { pushFollowers: false });

        function getDurationScene1() {
            return $(rigthPages).height() - $(pautas).height();
        }
    }

    //------------ scroll internas --------------//
    if ($('.container-right').length && $('.block-views-blockmore-in-this-section-news-block-1').length) {

        const containerRigth = $('.container-right')[0];
        const noticias = $('.block-views-blockmore-in-this-section-news-block-1')[0];

        const scene2 = new ScrollMagic.Scene({ triggerElement: $(containerRigth)[0], duration: getDurationScene2 })
            .addTo(controller)
            .offset($(noticias).height())
            .setPin($(noticias)[0], { pushFollowers: false });

        function getDurationScene2() {
            return $(containerRigth).height() - $(noticias).height();
        }
    }
}

export default initScrollMagic;