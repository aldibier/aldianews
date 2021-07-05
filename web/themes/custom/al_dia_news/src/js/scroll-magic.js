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

        const scene1 = new ScrollMagic.Scene({ triggerElement: pautas,triggerHook:1,duration: getDurationScene1})
            .addTo(new ScrollMagic.Controller())
            .offset(pautas.offsetHeight + 20)
            .setPin(pautas, { pushFollowers: false })
            .addIndicators({ name: "1" });

        function getDurationScene1() {
            return rigthPages.offsetHeight - pautas.offsetHeight - 20;
        }

        //window.addEventListener("resize", () => resizeActivation(pautas, scene1));
    }


    const containerRigth = document.querySelector('.container-right');
    const noticias = document.querySelector('.block-views-blockmore-in-this-section-news-block-1');

    //------------ scroll internas --------------//
    if (!!containerRigth && !!noticias) {
        debugger;
        //------------ not sticky --------------//
        console.log(`Right : ${containerRigth.offsetHeight}`);
        console.log(`Left : ${noticias.offsetHeight}`);
        if (containerRigth.offsetHeight < noticias.offsetHeight) return;
        if (containerRigth.offsetHeight === noticias.offsetHeight) return;

        const scene2 = new ScrollMagic.Scene({ triggerElement: containerRigth, duration: getDurationScene2 })
            .addTo(controller)
            .offset(noticias.offsetHeight + 20)
            .setPin(noticias, { pushFollowers: false })  

        /* setTimeout(()=>{
            const scene2 = new ScrollMagic.Scene({ triggerElement: containerRigth, duration: getDurationScene2 })
            .addTo(controller)
            .offset(noticias.offsetHeight + 20)
            .setPin(noticias, { pushFollowers: false })    
        },6000); */

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