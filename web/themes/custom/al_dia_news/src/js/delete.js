const delete_ = () => {

    Array.from(
        document.querySelectorAll(
            ".mobile-free .mobile-plus .card-more:nth-child(1)"
        )
    ).map(function (e) {
        if (e != null) {
            e.remove();
        }
    });

    Array.from(
        document.querySelectorAll(
            ".mobile-free .mobile-plus .card-more:nth-child(2)"
        )
    ).map(function (evt) {
        if (evt != null) {
            evt.remove();
        }
    });

    /* js for advertising in news category blocks */
    if (!!document.querySelector(".block-views-blockhigh-impact-news-home-block-1")) {
        /* hidden last news home */
        const lastNewsHome = document.querySelector(
            ".block-block-grouplatest-categories-tending-block"
        );
        lastNewsHome.classList.add("not-show");
    } else {
        /* hidden high impact news home */
        const impactNewsHome = document.querySelector(
            ".block-block-grouphigh-impact-and-most-visited-news-home"
        );
        if (impactNewsHome != null) {
            impactNewsHome.classList.add("not-show");
        }
    }

    /* hidden header-category header-category */
    if (!!document.querySelector('.path-taxonomy')) {
        const headerCategory = document.querySelector('.header-category');
        const categoryFirstBlock = document.querySelector('.category-first-block');

        if (headerCategory.childElementCount === 0) headerCategory.classList.add('empty');
        if (categoryFirstBlock.childElementCount === 0) categoryFirstBlock.classList.add('empty');
    }


    /// js login and register
    Array.from(document.querySelectorAll(".comment-forbidden a")).map(function (
        e
    ) {
        if (e != null) {
            e.removeAttribute("href");
        }
    });

    // js bloque login en comentarios
    var comments = document.querySelector(
        ".block-field-blocknodenewsfield-comments .comment"
    );
    var block_login_c = document.querySelector("#block-blockcommentanonymous");
    if (comments != null && block_login_c != null) {
        block_login_c.style.display = "none";
    }

    // bloque vacio en home
    var width_b = window.innerWidth;
    if (width_b <= 768) {
        Array.from(document.querySelectorAll(".view-more-category")).map(function (
            e
        ) {
            var home = document.querySelector('.path-frontpage');
            if (!!e  && !!home && e.children.length === 2) {
                e.closest(".views-field.views-field-view-2").style.display = "none";
                e.closest(".mobile-free").style.border = "0px";
            }
        });
    }

    ///// js indentificar de primer modo de vista en guest event
    var adversiting = document.querySelector(
        ".three-content-event-advertising"
    );
    var first_element = document.querySelector(
        ".view-block-guest  .views-row:nth-child(1) .views-field-field-style > div"
    );
    if (adversiting != null && first_element != null) {
        if (first_element.innerText == "one") {
            adversiting.classList.add("maxim");
        } else {
            adversiting.classList.add("dis-none");
        }
    }
}

export default delete_;