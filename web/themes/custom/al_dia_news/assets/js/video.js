(function (Drupal, $) {
    Drupal.behaviors.videoLibrary = {
      attach: function (context, settings) {
        if (document.body.classList.contains('path-videos')) {
            document.body.addEventListener('click', (event) => {
                const target = event.target.closest('.slick-slide');
                
                if (target) {

                    const href = target.querySelector('a')
                    if (href) window.location.href = href+"#block-views-block-carousel-videos-landing-block-1";

                }
            }); 
        }

        // slide landing videos
        $(
          ".block-views-blockcarousel-videos-landing-block-2 .view-id-carousel_videos_landing .view-content"
        ).slick({
          infinite: true,
          slidesToShow: 5,
          slidesToScroll: 1,
          autoplay: false,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                variableWidth: true
              }
            },
          ]
        });
      },
    };

    
})(Drupal, jQuery);
  
