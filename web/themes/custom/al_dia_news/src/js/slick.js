const initSlick = ($, Drupal) => {

    let categoriesMore = document.querySelectorAll('.view-categories-sons .view-more-category .view-content');

    const settings = {
        infinite: false,
        rows: 3,
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        autoplay: false,
        dots: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: 'unslick'
            }
        ]
    }

    if (window.matchMedia("(max-width: 768px)").matches) {
        categoriesMore.forEach(element => $(element).slick(settings));
    }

    window.addEventListener("resize", () => {
        if (window.matchMedia("(max-width: 768px)").matches) {
            categoriesMore.forEach(element => $(element).slick(settings));
        }
    });
}

export default initSlick;