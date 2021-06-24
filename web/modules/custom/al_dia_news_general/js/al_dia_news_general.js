/**
 * @file
 */

(function ($) {

  Drupal.behaviors.aldia_news_advertising = {
    attach: function (context) {

      $('.block-scroll .block-fixed-block-content-small-vertical-advertising').once("aldia-small-news-advertising").each(function () {
        setTimeout(function () {
          // doing async stuff
          if ($('.block-scroll .block-fixed-block-content-small-vertical-advertising').find('.content > div > div').length >= 1) {
            $('.view-id-more_in_this_section_news .view-content .card-more-news').each(function (index, value) {
              if (index >= 3) {
                $(value).hide();
              }
            });
          }
        }, 2000);
      });

      $('.view-footer .block-fixed-block-contentbig-vertical-advertising').once("aldia-big-news-advertising").each(function () {
        setTimeout(function () {
          // doing async stuff
          if ($('.block-scroll .block-fixed-block-content-small-vertical-advertising').find('.content > div > div').length >= 1) {
            $('.view-id-more_in_this_section_news .view-content > div').each(function (index, value) {
              $(value).hide();
            });
          }
          console.log($('.block-scroll .block-fixed-block-contentbig-vertical-advertising').find('.content > div > div').length);
        }, 2000);
      });

    }
  }
})(jQuery);
