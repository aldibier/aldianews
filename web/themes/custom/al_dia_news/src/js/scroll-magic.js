const initScrollMagic = () => {

    // init controller

    const header = document.querySelector('.header');
    const newsInternalLeft = document.querySelector(".content-news-internal-left");
    const blockSticky = document.querySelector(".block-views-blockmore-in-this-section-news-block-1");
    
    if (document.body.contains(blockSticky)) {

        const controller = new ScrollMagic.Controller();

        const scene = new ScrollMagic.Scene({
            triggerElement: blockSticky,
            offset: `${blockSticky.offsetHeight + header.offsetHeight}`,
            triggerHook: 1,
            duration: getDuration
        }).addTo(controller);

        if (window.matchMedia("(min-width: 768px)").matches) {
            scene.setPin(blockSticky, { pushFollowers: false });
        }

        window.addEventListener("resize", () => {
            if (window.matchMedia("(min-width: 768px)").matches) {
                scene.setPin(blockSticky, { pushFollowers: false });
            } else {
                scene.removePin(blockSticky, true);
            }
        });

        function getDuration() {
            return newsInternalLeft.offsetHeight - blockSticky.offsetHeight;
        }
    }

}

export default initScrollMagic;