import { resetAlliframes } from '../js/functions.js';

const modal_ = () => {
    /* js modal landing videos */
    if (!!document.querySelector(".path-videos")) {
        const allCardVideos = document.querySelectorAll(".card-one-column");
        const allIframes = document.querySelectorAll(".card-one-column iframe");

        allCardVideos.forEach(cardVideo =>
            cardVideo.addEventListener("click", event => {
                if (event.target.nodeName == "A") return;

                let node = event.currentTarget.parentNode.firstElementChild;

                while (node) {
                    if (
                        node !== event.currentTarget &&
                        node.nodeType === Node.ELEMENT_NODE
                    ) {
                        if (event.target.closest(".modal-video")) return;
                        node.querySelector(".modal-video").classList.remove("show");
                        resetAlliframes(allIframes);
                    } else {
                        if (event.target.closest(".wrapper-popup")) return;
                        node.querySelector(".modal-video").classList.toggle("show");
                        resetAlliframes(allIframes);
                    }
                    node = node.nextElementSibling;
                }
            })
        );

        document.body.addEventListener("click", event => {
            const contentActive = event.target.closest(".card-one-column") || false;
            const closeButton = event.target.classList.contains("close-video") || false;

            if (!document.querySelector(".modal-video.show")) return;

            if (!contentActive || closeButton) {
                document.querySelector(".modal-video.show").classList.remove("show");
                resetAlliframes(allIframes);
            }
        });
    }

    /* js to control pop-up advertising */
    if (!!document.querySelector(".path-advertising")) {
        const allButtonsApply = document.querySelectorAll(".button-apply");
        const allButtonsClose = document.querySelectorAll(".close-modal");

        const showModal = event => {
            const parent = event.path.find(elementPath =>
                elementPath.classList.contains("advertising-card")
            );
            const form = parent.querySelector(".modal-form");
            form.classList.add("show");
        };

        const hideModal = event => {
            const form = event.path.find(elementPath =>
                elementPath.classList.contains("modal-form")
            );
            form.classList.remove("show");
        };

        allButtonsApply.forEach(buttonApply =>
            buttonApply.addEventListener("click", showModal)
        );
        allButtonsClose.forEach(buttonClose =>
            buttonClose.addEventListener("click", hideModal)
        );
    }

    /* js pop-up about al dia live */
    if (!!document.querySelector(".path-about-al-dia-live")) {
        /* modal form */
        const buttonApply = document.querySelector(
            ".path-about-al-dia-live .button-apply"
        );
        const buttonClose = document.querySelector(".close-modal");
        const modalForm = document.querySelector(".modal-form");

        if (!document.body.contains(buttonApply)) return;

        buttonApply.addEventListener("click", () =>
            modalForm.classList.add("show")
        );
        buttonClose.addEventListener("click", () =>
            modalForm.classList.remove("show")
        );

        /* modal video */
        const triggerVideo = document.querySelector(
            ".block-views-blockabout-al-dia-live-block-1 .about-al-dia-live-container-video"
        );
        const buttonCloseVideo = document.querySelector(".close-video");
        const video = document.querySelector(".modal-video");
        const iframe = document.querySelector('.about-al-dia-live-container-video iframe');

        //reset src iframe
        if (iframe.src.indexOf('?') > 0) {
            const srcEdit = iframe.src.split('?');
            iframe.src = `${srcEdit[0]}?start=0&rel=0`;
        }

        triggerVideo.addEventListener("click", () => {
            video.classList.add("show");
        });

        buttonCloseVideo.addEventListener("click", event => {
            event.stopPropagation();
            video.classList.remove("show");
            iframe.src = iframe.src;
        });
    }

    //// js desplegable buscador y close modal
    var close = document.querySelector(
        '#block-exposedformsearch-results-al-dia-solrpage-1-2  button[name="close"]'
    );

    close.addEventListener("click", () => {
        if (close != null && close.parentElement.classList.contains("open")) {
            close.parentElement.classList.remove("open");
        }
    });
}

export default modal_;