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
          ".block-views-blockmore-in-this-section-news-block-1 .view-display-id-block_1 .view-content"
        )
          .once("aldia-big-news-advertising")
          .each(function() {
            setTimeout(function() {
              // doing async stuff
              if (
                $(
                  ".view-id-more_in_this_section_news.view-display-id-block_1 .view-content .block-gamw"
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
        const allBlocksGamw = document.querySelectorAll(".block-gamw");
        allBlocksGamw.forEach(function(e) {
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

        //js para agregar padres de publicdad jobs --------------------------------///
        /* var block_jobs = document.querySelector(
          ".block-block-groupadvertising-blocks-in-job-landing-pages .non-adversiting"
        );
        var jobs_container = document.querySelector(
          "#block-block-group-contenido-jobs > .content"
        );

        if (!!block_jobs && !!jobs_container) {
          jobs_container.classList.add("non-ads-father");
        } */

        //js para agregar padres de publicdad work with al dia --------------------------------///
        /* var block_work = document.querySelector(
          ".node--view-mode-work-whit-al-dia .content-page-node .non-adversiting"
        );
        var work_container = document.querySelector(
          ".node--view-mode-work-whit-al-dia .content-page-node"
        );

        if (!!block_work && !!work_container) {
          work_container.classList.add("non-ads-father");
        } */

        //js para agregar padres de publicidad interna de more covers --------------------------------///
        /* var block_cover = document.querySelector(
          ".node--type-more-covers .pautas .non-adversiting"
        );
        var cover_container = document.querySelector(
          ".node--type-more-covers .content-page-node"
        );

        if (!!block_cover && !!cover_container) {
          cover_container.classList.add("non-ads-father");
        } */

        //js para agregar padres de publicidad interna de more covers --------------------------------///
        /* var block_employer = document.querySelector(
          ".node--type-feature-employer .pautas .non-adversiting"
        );
        var employer_container = document.querySelector(
          ".node--type-feature-employer .content-page-node"
        );

        if (!!block_employer && !!employer_container) {
          employer_container.classList.add("non-ads-father");
        } */

        //js para agregar padres de publicidad interna de jobs --------------------------------///
       /*  var block_int_jobs = document.querySelector(
          ".node--type-job .pautas .non-adversiting"
        );
        var int_jobs_container = document.querySelector(
          ".node--type-job .content-page-node"
        );

        if (!!block_int_jobs && !!int_jobs_container) {
          int_jobs_container.classList.add("non-ads-father");
        } */

        //js para agregar padres de publicidad about us --------------------------------///
        /* var block_about_us = document.querySelector(
          ".node--view-mode-basic-page-about-us .pautas .non-adversiting"
        );
        var about_us_container = document.querySelector(
          ".node--view-mode-basic-page-about-us .content-page-node"
        );

        if (!!block_about_us && !!about_us_container) {
          about_us_container.classList.add("non-ads-father");
        } */

        //js para agregar padres de publicidad contact us --------------------------------///
        /* var block_contact_us = document.querySelector(
          ".node--view-mode-contact-us .non-adversiting"
        );
        var contact_us_container = document.querySelector(
          ".node--view-mode-contact-us .content-page-node"
        );

        if (!!block_contact_us && !!contact_us_container) {
          contact_us_container.classList.add("non-ads-father");
        } */

        //js para agregar padres de publicidad term services --------------------------------///
        /* var block_term_services = document.querySelector(
          'article[about="/terms-of-service"] .non-adversiting'
        );
        var term_services_container = document.querySelector(
          'article[about="/terms-of-service"] .content-page-node'
        );

        if (!!block_term_services && !!term_services_container) {
          term_services_container.classList.add("non-ads-father");
        } */
      }, 8000);
    }
  };
})(jQuery);
