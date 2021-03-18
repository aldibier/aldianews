const initScrollMagic = () => {

    // init controller

    const header = document.querySelector('.header');
    const newsInternalLeft = document.querySelector(".content-news-internal-left , .content-right-pages");
    const blockSticky = document.querySelector(".block-views-blockmore-in-this-section-news-block-1 , .pautas");
    const footer = document.querySelector(".site-footer");
    
    if (document.body.contains(blockSticky)) {

        const controller = new ScrollMagic.Controller({/*addIndicators: true*/});

        const scene = new ScrollMagic.Scene({
            triggerElement: blockSticky,
            offset: `${blockSticky.offsetHeight + header.offsetHeight}`,
            triggerHook: 1,
            duration: getDuration
        })
        .addTo(controller)
        //.addIndicators({name: "pin scene", colorEnd: "#FFFFFF"});

        if (window.matchMedia("(min-width: 992px)").matches) {
            scene.setPin(blockSticky, { pushFollowers: false });
        }

        window.addEventListener("resize", () => {
            if (window.matchMedia("(min-width: 992px)").matches) {
                scene.setPin(blockSticky, { pushFollowers: false });
            } else {
                scene.removePin(blockSticky, true);
            }
        });

        function getDuration() {
            return newsInternalLeft.offsetHeight + header.offsetHeight - footer.offsetHeight;
        }
    }

}

export default initScrollMagic;