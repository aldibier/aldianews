const initSlick = ($, Drupal) => {
  let enterMobile = 0;
  let enterTablet = 0;
  let enterDesktop = 0;

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

  //slide edit resize
  if (window.matchMedia("(max-width: 768px)").matches) {
    categoriesMore.forEach(element => $(element).slick(settings));
  }

  window.addEventListener("resize", () => {
    if (window.matchMedia("(max-width: 768px)").matches) {
      categoriesMore.forEach(element => $(element).slick(settings));
    }
  });

  // slide landing jobs
  $(
    ".block-views-blockcarousel-jobs-landing-block-1 .brands-carousel-wrapper .view-content"
  ).slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });

  // slide landing videos
  $(
    ".block-views-blockcarousel-videos-landing-block-2 .view-id-carousel_videos_landing .view-content"
  ).slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });

  //slide about al dia events
  if ($(".about-al-dia-live-slider").length) {
    $(".about-al-dia-live-slider ul").slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      centerPadding: "60px",
      centerMode: true,
      variableWidth: true,
      dots: true,
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 1300,
          settings: "reInit"
        },
        {
          breakpoint: 992,
          settings: "reInit"
        },
        {
          breakpoint: 768,
          settings: "reInit"
        }
      ]
    });
  }

  //slide about al dia testimonial
  if ($(".block-views-blockabout-al-dia-live-block-4")) {
    $(".block-views-blockabout-al-dia-live-block-4 .view-content").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true
    });
  }

  /// Slider para thought leaders
  var width_h = window.innerWidth;
  if (width_h <= 580) {
    if ($(".view-id-thought_leaders_home.view-display-id-block_1")) {
      $(
        ".view-id-thought_leaders_home.view-display-id-block_1 .view-content"
      ).slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
      });
    }
  }
};

export default initSlick;
