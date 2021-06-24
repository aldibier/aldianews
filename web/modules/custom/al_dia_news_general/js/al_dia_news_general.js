/**
 * @file
 */

(function ($) {

  Drupal.behaviors.aldia_news_advertising = {
    attach: function (context) {

      $('.view-id-leadership_sons.view-display-id-block_3 .view-header .block-fixed-block-content-small-vertical-advertising').once("leadership-small-news-advertising").each(function () {
        setTimeout(function () {
          // doing async stuff
          if ($('.view-id-leadership_sons.view-display-id-block_3 .view-header .block-fixed-block-content-small-vertical-advertising').find('.content > div > div').html().length >= 1) {
            $('.view-id-leadership_sons.view-display-id-block_3 .view-content .card-more-category').each(function (index, value) {
              if (index >= 6) {
                $(value).hide();
              }
            });
          }
        }, 1500);
      });

      $('.view-id-leadership_sons.view-display-id-block_3 .view-footer .block-fixed-block-contentbig-vertical-advertising').once("leadership-big-news-advertising").each(function () {
        setTimeout(function () {
          // doing async stuff
          if ($('.view-id-leadership_sons.view-display-id-block_3 .view-footer .block-fixed-block-contentbig-vertical-advertising').find('.content > div > div').html().length >= 1) {
            $('.view-id-leadership_sons.view-display-id-block_3 .view-content .card-more-category').each(function (index, value) {
              if (index >= 3) {
                $(value).hide();
              }
            });
          }
        }, 1500);
      });

      $('.view-id-politics_sons.view-display-id-block_3 .view-header .block-fixed-block-content-small-vertical-advertising').once("politics-small-news-advertising").each(function () {
        setTimeout(function () {
          // doing async stuff
          if ($('.view-id-politics_sons.view-display-id-block_3 .view-header .block-fixed-block-content-small-vertical-advertising').find('.content > div > div').html().length >= 1) {
            $('.view-id-politics_sons.view-display-id-block_3 .view-content .card-more-category').each(function (index, value) {
              if (index >= 6) {
                $(value).hide();
              }
            });
          }
        }, 1500);
      });

      $('.view-id-politics_sons.view-display-id-block_3 .view-footer .block-fixed-block-contentbig-vertical-advertising').once("politics-big-news-advertising").each(function () {
        setTimeout(function () {
          // doing async stuff
          if ($('.view-id-politics_sons.view-display-id-block_3 .view-footer .block-fixed-block-contentbig-vertical-advertising').find('.content > div > div').html().length >= 1) {
            $('.view-id-politics_sons.view-display-id-block_3 .view-content .card-more-category').each(function (index, value) {
              if (index >= 3) {
                $(value).hide();
              }
            });
          }
        }, 1500);
      });

      $('.view-footer .block-fixed-block-contentbig-vertical-advertising').once("aldia-big-news-advertising").each(function () {
        setTimeout(function () {
          // doing async stuff
          if ($('.block-scroll .block-fixed-block-content-small-vertical-advertising').find('.content > div > div').html().length >= 1) {
            $('.view-id-more_in_this_section_news .view-content .card-more-news').each(function (index, value) {
              $(value).hide();
            });
          }
        }, 2000);
      });

    }
  }
})(jQuery);
