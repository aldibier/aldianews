const initSlick = ($, Drupal) => {
  let categoriesMore = document.querySelectorAll(
    ".view-categories-sons .view-more-category .view-content"
  );

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
        settings: "unslick"
      }
    ]
  };

  if (window.matchMedia("(max-width: 768px)").matches) {
    categoriesMore.forEach(element => $(element).slick(settings));
  }

  window.addEventListener("resize", () => {
    if (window.matchMedia("(max-width: 768px)").matches) {
      categoriesMore.forEach(element => $(element).slick(settings));
    }
  });

  // slide landing jobs
  $(document).ready(function() {
    $(
      ".block-views-blockcarousel-jobs-landing-block-1 .brands-carousel-wrapper .view-content"
    ).slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 2000
    });
  });
};

export default initSlick;
