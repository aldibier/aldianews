/**
 * @file
 */

(function ($) {
  Drupal.behaviors.aldia_news_advertising = {
    attach: function (context) {
      var width_publi = window.innerWidth;
      if (width_publi >= 768) {
        // ------ vista leadership
        $(
            ".view-id-leadership_sons.view-display-id-block_3 .block-fixed-block-content-small-vertical-advertising"
          )
          .once("leadership-small-news-advertising")
          .each(function () {
            setTimeout(function () {
              var leadership = 0;
              // doing async stuff
              if (
                $(
                  ".view-id-leadership_sons.view-display-id-block_3 .block-fixed-block-content-small-vertical-advertising"
                )
                .find(".content > div > div")
                .children().length > 0
              ) {
                leadership = 1;
                $(
                  ".view-id-leadership_sons.view-display-id-block_3 .view-content .card-more-category"
                ).each(function (index, value) {
                  if (index >= 6) {
                    $(value).hide();
                  }
                });
              }

              if (
                $(
                  ".view-id-leadership_sons.view-display-id-block_3 .block-fixed-block-contentbig-vertical-advertising"
                )
                .find(".content > div > div")
                .children().length > 0
              ) {
                $(
                  ".view-id-leadership_sons.view-display-id-block_3 .view-content .card-more-category"
                ).each(function (index, value) {
                  if (leadership) {
                    $(value).hide();
                  } else {
                    if (index >= 3) {
                      $(value).hide();
                    }
                  }
                });
              }
            }, 3000);
          });

        // ------ vista politics
        $(
            ".view-id-politics_sons.view-display-id-block_3 .block-fixed-block-content-small-vertical-advertising"
          )
          .once("politics-small-news-advertising")
          .each(function () {
            setTimeout(function () {
              var politics = 0;
              // doing async stuff
              if (
                $(
                  ".view-id-politics_sons.view-display-id-block_3 .block-fixed-block-content-small-vertical-advertising"
                )
                .find(".content > div > div")
                .children().length > 0
              ) {
                politics = 1;
                $(
                  ".view-id-politics_sons.view-display-id-block_3 .view-content .card-more-category"
                ).each(function (index, value) {
                  if (index >= 6) {
                    $(value).hide();
                  }
                });
              }

              if (
                $(
                  ".view-id-politics_sons.view-display-id-block_3 .block-fixed-block-contentbig-vertical-advertising"
                )
                .find(".content > div > div")
                .children().length > 0
              ) {
                $(
                  ".view-id-politics_sons.view-display-id-block_3 .view-content .card-more-category"
                ).each(function (index, value) {
                  if (politics) {
                    $(value).hide();
                  } else {
                    if (index >= 3) {
                      $(value).hide();
                    }
                  }
                });
              }
            }, 3000);
          });

        // ------ vista culture
        $(
            ".view-id-culture_sons.view-display-id-block_3 .block-fixed-block-content-small-vertical-advertising"
          )
          .once("culture-small-news-advertising")
          .each(function () {
            setTimeout(function () {
              var culture = 0;
              // doing async stuff
              if (
                $(
                  ".view-id-culture_sons.view-display-id-block_3 .block-fixed-block-content-small-vertical-advertising"
                )
                .find(".content > div > div")
                .children().length > 0
              ) {
                culture = 1;
                $(
                  ".view-id-culture_sons.view-display-id-block_3 .view-content .card-more-category"
                ).each(function (index, value) {
                  if (index >= 6) {
                    $(value).hide();
                  }
                });
              }

              if (
                $(
                  ".view-id-culture_sons.view-display-id-block_3 .block-fixed-block-contentbig-vertical-advertising"
                )
                .find(".content > div > div")
                .children().length > 0
              ) {
                $(
                  ".view-id-culture_sons.view-display-id-block_3 .view-content .card-more-category"
                ).each(function (index, value) {
                  if (culture) {
                    $(value).hide();
                  } else {
                    if (index >= 3) {
                      $(value).hide();
                    }
                  }
                });
              }
            }, 3000);
          });

        // ------ vista more in this section
        $(
            ".view-id-more_in_this_section_news.view-display-id-block_1 .view-content .settings-tray-editable"
          )
          .once("aldia-big-news-advertising")
          .each(function () {
            setTimeout(function () {
              // doing async stuff
              if (
                $(
                  ".view-id-more_in_this_section_news.view-display-id-block_1 .view-content .settings-tray-editable"
                )
                .find(".content > div > div")
                .children().length > 0
              ) {
                $(
                  ".view-id-more_in_this_section_news.view-display-id-block_1 .view-content .card-more-news"
                ).each(function (index, value) {
                  if (index >= 3) {
                    $(value).hide();
                  }
                });
              }
            }, 3000);
          });

        // ------ vista last news
        $(
            ".path-taxonomy .view-id-last_news.view-display-id-block_3 .view-content"
          )
          .once("last-news-small-news-advertising")
          .each(function () {
            var viewContent = $(this); 
            setTimeout(function () {
              // doing async stuff
              if (
                $(viewContent)
                .find(".block-advertising-top .block-fixed-block-content-small-vertical-advertising .content > div > div")
                .children().length > 0
              ) {
                $(viewContent)
                .find(".card-more-category")
                .each(function (index, value) {
                  if (index >= 3) {
                    $(value).hide();
                  }
                });
              }

              if (
                $(viewContent)
                .find(".block-advertising-complete .block-fixed-block-contentbig-vertical-advertising .content > div > div")
                .children().length > 0
              ) {
                console.log('block-advertising-complete');
                $(viewContent)
                .find(".card-more-category")
                .each(function (index, value) {
                  $(value).hide();
                });
              }

              if (
                $(viewContent)
                .find(".block-advertising-bottom .block-fixed-block-content-small-vertical-advertising .content > div > div")
                .children().length > 0
              ) {
                $(viewContent)
                .find(".card-more-category")
                .each(function (index, value) {
                  if (index >= 3) {
                    $(value).hide();
                  }
                });
              }
            }, 3000);
          });
      }
    }
  };
})(jQuery);
