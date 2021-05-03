const one = () => {
    Array.from(
        document.querySelectorAll(
            ".block-views-blockcarousel-videos-landing-block-2"
        )
    ).map(function (e) {
        var p = e.querySelector(".select-video");
        var c = e.querySelector(".video-present");
        if (p != null && c != null) {
            p.classList.remove("select-video");
            c.classList.remove("video-present");
        }
    });
}

const two = () => {
    Array.from(
        document.querySelectorAll(
            ".view-id-carousel_videos_landing.view-display-id-page_1"
        )
    ).map(function (ev) {
        var a = ev.querySelector(".show-video");
        var b = ev.querySelector(".video-present");
        if (a != null && b != null) {
            a.classList.remove("show-video");
            b.classList.remove("video-present");
        }
    });
}

const resetAlliframes = (iframes) => {
    iframes.forEach(iframe => {
        iframe.classList.add("change-src");
        iframe.src = iframe.src;
        setTimeout(() => iframe.classList.remove("change-src"), 800);
    });
};

export { one, two, resetAlliframes };