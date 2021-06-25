/**
 * @file
 */

(function ($) {

  Drupal.behaviors.aldia_news_advertising = {
    attach: function (context) {
      $('.view-id-leadership_sons.view-display-id-block_3 .view-header .block-fixed-block-content-small-vertical-advertising').once("leadership-small-news-advertising").each(function () {
        setTimeout(function () {
          var leadership = 0;
          // doing async stuff
          if ($('.view-id-leadership_sons.view-display-id-block_3 .view-header .block-fixed-block-content-small-vertical-advertising').find('.content > div > div').html().length >= 1) {
            leadership = 1;
            $('.view-id-leadership_sons.view-display-id-block_3 .view-content .card-more-category').each(function (index, value) {
              if (index >= 6) {
                $(value).hide();
              }
            });
          }

          if ($('.view-id-leadership_sons.view-display-id-block_3 .view-footer .block-fixed-block-contentbig-vertical-advertising').find('.content > div > div').html().length >= 1) {
            $('.view-id-leadership_sons.view-display-id-block_3 .view-content .card-more-category').each(function (index, value) {
              if (leadership) {
                $(value).hide();
              }
              else {
                if (index >= 3) {
                  $(value).hide();
                }
              }
            });
          }
        }, 2000);
      });

      $('.view-id-politics_sons.view-display-id-block_3 .view-header .block-fixed-block-content-small-vertical-advertising').once("politics-small-news-advertising").each(function () {
        setTimeout(function () {
          var politics = 0;
          // doing async stuff
          if ($('.view-id-politics_sons.view-display-id-block_3 .view-header .block-fixed-block-content-small-vertical-advertising').find('.content > div > div').html().length >= 1) {
            politics = 1;
            $('.view-id-politics_sons.view-display-id-block_3 .view-content .card-more-category').each(function (index, value) {
              if (index >= 6) {
                $(value).hide();
              }
            });
          }

          if ($('.view-id-politics_sons.view-display-id-block_3 .view-footer .block-fixed-block-contentbig-vertical-advertising').find('.content > div > div').html().length >= 1) {
            $('.view-id-politics_sons.view-display-id-block_3 .view-content .card-more-category').each(function (index, value) {
              if (politics) {
                $(value).hide();
              }
              else {
                if (index >= 3) {
                  $(value).hide();
                }
              }
            });
          }
        }, 2000);
      });

      $('.view-id-politics_sons.view-display-id-block_3 .view-footer .block-fixed-block-contentbig-vertical-advertising').once("politics-big-news-advertising").each(function () {
        setTimeout(function () {
          // doing async stuff

        }, 2000);
      });

      $('.view-id-more_in_this_section_news.view-display-id-block_1 .view-footer .settings-tray-editable').once("aldia-big-news-advertising").each(function () {
        setTimeout(function () {
          // doing async stuff
          if ($('.view-id-more_in_this_section_news.view-display-id-block_1 .view-footer .settings-tray-editable').find('.content > div > div').html().length >= 1) {
            $('.view-id-more_in_this_section_news.view-display-id-block_1 .view-content .card-more-news').each(function (index, value) {
              if (index >= 3) {
                $(value).hide();
              }
            });
          }
        }, 2000);
      });

    }
  }
})(jQuery);
