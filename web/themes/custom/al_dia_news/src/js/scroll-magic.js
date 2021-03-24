const initScrollMagic = ($, Drupal) => {

    const controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 1,
        }
    });

    //------------ scroll jobs --------------//
    const rigthPages = document.querySelector('.content-right-pages');
    const pautas = document.querySelector('.pautas');

    if (!!rigthPages && !!pautas) {
        //------------ not sticky --------------//
        if (rigthPages.offsetHeight === pautas.offsetHeight) return;

        const scene1 = new ScrollMagic.Scene({ triggerElement: rigthPages, duration: getDurationScene1 })
            .addTo(controller)
            .offset(pautas.offsetHeight + 20)
            .setPin(pautas, { pushFollowers: false });

        function getDurationScene1() {
            return rigthPages.offsetHeight - pautas.offsetHeight;
        }

        //window.addEventListener("resize", () => resizeActivation(pautas, scene1));
    }


    const containerRigth = document.querySelector('.container-right');
    const noticias = document.querySelector('.block-views-blockmore-in-this-section-news-block-1');

    //------------ scroll internas --------------//
    if (!!containerRigth && !!noticias) {
        //------------ not sticky --------------//
        if (containerRigth.offsetHeight === noticias.offsetHeight) return;

        const scene2 = new ScrollMagic.Scene({ triggerElement: containerRigth, duration: getDurationScene2 })
            .addTo(controller)
            .offset(noticias.offsetHeight + 20)
            .setPin(noticias, { pushFollowers: false })

        function getDurationScene2() {
            return containerRigth.offsetHeight - noticias.offsetHeight;
        }

        //window.addEventListener("resize", () => resizeActivation(noticias, scene2));
    }

    function resizeActivation(element, scene) {
        if (window.matchMedia("(min-width: 992px)").matches) {
            if (element) scene.setPin(element, { pushFollowers: false });
        } else {
            scene.removePin(element, true);
        }
    }
}

export default initScrollMagic;