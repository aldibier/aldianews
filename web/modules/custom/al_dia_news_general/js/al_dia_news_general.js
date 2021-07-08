/**
 * @file
 */

(function($) {
  Drupal.behaviors.aldia_news_advertising = {
    attach: function(context) {
      var width_publi = window.innerWidth;
      if (width_publi >= 768) {
        // ------ vista leadership
        $(
          ".view-id-leadership_sons.view-display-id-block_3 .block-fixed-block-content-small-vertical-advertising"
        )
          .once("leadership-small-news-advertising")
          .each(function() {
            setTimeout(function() {
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
                ).each(function(index, value) {
                  if (index >= 6) {
                    /* $(value).hide(); */
                    $(value).addClass("hidden-per-advertising");
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
                ).each(function(index, value) {
                  if (leadership) {
                    $(value).addClass("hidden-per-advertising");
                  } else {
                    if (index >= 3) {
                      $(value).addClass("hidden-per-advertising");
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
          .each(function() {
            setTimeout(function() {
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
                ).each(function(index, value) {
                  if (index >= 6) {
                    $(value).addClass("hidden-per-advertising");
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
                ).each(function(index, value) {
                  if (politics) {
                    $(value).addClass("hidden-per-advertising");
                  } else {
                    if (index >= 3) {
                      $(value).addClass("hidden-per-advertising");
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
          .each(function() {
            setTimeout(function() {
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
                ).each(function(index, value) {
                  if (index >= 6) {
                    $(value).addClass("hidden-per-advertising");
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
                ).each(function(index, value) {
                  if (culture) {
                    $(value).addClass("hidden-per-advertising");
                  } else {
                    if (index >= 3) {
                      $(value).addClass("hidden-per-advertising");
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
          .each(function() {
            setTimeout(function() {
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
                ).each(function(index, value) {
                  if (index >= 3) {
                    $(value).addClass("hidden-per-advertising");
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
          .each(function() {
            var viewContent = $(this);
            setTimeout(function() {
              // doing async stuff
              if (
                $(viewContent)
                  .find(
                    ".block-advertising-top .block-fixed-block-content-small-vertical-advertising .content > div > div"
                  )
                  .children().length > 0
              ) {
                $(viewContent)
                  .find(".card-more-category")
                  .each(function(index, value) {
                    if (index >= 3) {
                      $(value).addClass("hidden-per-advertising");
                    }
                  });
              }

              if (
                $(viewContent)
                  .find(
                    ".block-advertising-complete .block-fixed-block-contentbig-vertical-advertising .content > div > div"
                  )
                  .children().length > 0
              ) {
                console.log("block-advertising-complete");
                $(viewContent)
                  .find(".card-more-category")
                  .each(function(index, value) {
                    $(value).addClass("hidden-per-advertising");
                  });
              }

              if (
                $(viewContent)
                  .find(
                    ".block-advertising-bottom .block-fixed-block-content-small-vertical-advertising .content > div > div"
                  )
                  .children().length > 0
              ) {
                $(viewContent)
                  .find(".card-more-category")
                  .each(function(index, value) {
                    if (index >= 3) {
                      $(value).addClass("hidden-per-advertising");
                    }
                  });
              }
            }, 3000);
          });
      }

      //js para eliminar publicidad vacia
      setTimeout(() => {
        Array.from(document.querySelectorAll(".block-gamw")).map(function(e) {
          if (e != null) {
            var iframe_gamw = e.querySelector("iframe");

            if (iframe_gamw == null) {
              var ads = e.closest(".ads");

              if (!!ads) {
                if (!!ads.parentElement)
                  ads.parentElement.classList.add("non-adversiting");
                ads.remove();
              } else {
                if (!!e.parentElement)
                  e.parentElement.classList.add("non-adversiting");
                e.remove();
              }
            }
          }
        });
      }, 6000);
    }
  };
})(jQuery);
