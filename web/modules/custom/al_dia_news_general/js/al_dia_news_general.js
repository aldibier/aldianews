/**
 * @file
 */



(function($) {


  Drupal.behaviors.aldia_news_advertising = {
    attach: function(context) {

      $(window).on("load",function(){

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
            }, 1500);
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
            }, 1500);
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
            }, 1500);
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
                  ".block-views-blockmore-in-this-section-news-block-1 .view-display-id-block_1 .margin-top .block-gamw"
                )
                  .find(".content > div > div")
                  .children().length > 0
              ) {
                $(
                  ".block-views-blockmore-in-this-section-news-block-1 .view-display-id-block_1 .card-more"
                ).each(function(index, value) {
                  if (index >= 3) {
                    $(value).addClass("hidden-per-advertising");
                  }
                });
              }
            }, 1500);
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
                    if (index == 2 && $(value).closest('.block-advertising-top')) {
                      $(value).addClass("not-show-line");
                    }
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
            }, 1500);
          });
      }
      
      //js para eliminar publicidad vacia
      setTimeout(() => {
        

        Array.from(
          document.querySelectorAll(".block-gamw")
        ).map(function (element) {
            if (element != null) {
              var iframe_gamw = element.querySelector("iframe");
              if (iframe_gamw == null) {
                var ads = element.closest(".ads");
  
                if (!!ads) {
                  if (!!ads.parentElement)
                    ads.parentElement.classList.add("non-adversiting");
                    ads.remove();
                } else {
                  if (!!element.parentElement)
                  element.parentElement.classList.add("non-adversiting");
                  element.remove();
                }
              }
            }
          
        });

        //js para agregar padres de publicdad jobs --------------------------------///
        var block_jobs = document.querySelector(
          ".block-block-groupadvertising-blocks-in-job-landing-pages .non-adversiting"
        );
        var jobs_container = document.querySelector(
          "#block-block-group-contenido-jobs > .content"
        );

        if (!!block_jobs && !!jobs_container) {
          jobs_container.classList.add("non-ads-father");
        } 

        //js para agregar padres de publicdad work with al dia --------------------------------///
         var block_work = document.querySelector(
          ".node--view-mode-work-whit-al-dia .content-page-node .non-adversiting"
        );
        var work_container = document.querySelector(
          ".node--view-mode-work-whit-al-dia .content-page-node"
        );

        if (!!block_work && !!work_container) {
          work_container.classList.add("non-ads-father");
        } 

        //js para agregar padres de publicidad interna de more covers --------------------------------///
        var block_cover = document.querySelector(
          ".node--type-more-covers .pautas .non-adversiting"
        );
        var cover_container = document.querySelector(
          ".node--type-more-covers .content-page-node"
        );

        if (!!block_cover && !!cover_container) {
          cover_container.classList.add("non-ads-father");
        }

        //js para agregar padres de publicidad interna de more covers --------------------------------///
         var block_employer = document.querySelector(
          ".node--type-feature-employer .pautas .non-adversiting"
        );
        var employer_container = document.querySelector(
          ".node--type-feature-employer .content-page-node"
        );

        if (!!block_employer && !!employer_container) {
          employer_container.classList.add("non-ads-father");
        }

        //js para agregar padres de publicidad interna de jobs --------------------------------///
       var block_int_jobs = document.querySelector(
          ".node--type-job .pautas .non-adversiting"
        );
        var int_jobs_container = document.querySelector(
          ".node--type-job .content-page-node"
        );

        if (!!block_int_jobs && !!int_jobs_container) {
          int_jobs_container.classList.add("non-ads-father");
        } 

        //js para agregar padres de publicidad about us --------------------------------///
        var block_about_us = document.querySelector(
          ".node--view-mode-basic-page-about-us .pautas .non-adversiting"
        );
        var about_us_container = document.querySelector(
          ".node--view-mode-basic-page-about-us .content-page-node"
        );

        if (!!block_about_us && !!about_us_container) {
          about_us_container.classList.add("non-ads-father");
        }

        //js para agregar padres de publicidad contact us --------------------------------///
        var block_contact_us = document.querySelector(
          ".node--view-mode-contact-us .non-adversiting"
        );
        var contact_us_container = document.querySelector(
          ".node--view-mode-contact-us .content-page-node"
        );

        if (!!block_contact_us && !!contact_us_container) {
          contact_us_container.classList.add("non-ads-father");
        } 

        //js para agregar padres de publicidad term services --------------------------------///
        var block_term_services = document.querySelector(
          'article[about="/terms-of-service"] .pautas .non-adversiting'
        );
        var term_services_container = document.querySelector(
          'article[about="/terms-of-service"] .content-page-node'
        );

        if (!!block_term_services && !!term_services_container) {
          term_services_container.classList.add("non-ads-father");
        } 

        //js para agregar padres de publicidad term services --------------------------------///
        var block_term_events = document.querySelector(
          '.node--type-event .body-lateral-section-advertising .non-adversiting'
        );
        var term_events_container = document.querySelector(
          '.node--type-event .container-content'
        );

        if (!!block_term_events && !!term_events_container) {
          term_events_container.classList.add("non-ads-father");
        } 

      }, 1500);
    });
    }
  };

  Drupal.behaviors.aldia_news_sumoselect = {
    attach: function(context) {
      //// sumo select

      const addSumoselect = (select) => {
        if (select!= null) {
          select.classList.add("testselect1");
          $(".testselect1").SumoSelect({
            forceCustomRendering: true,
            floatWidth: 300
          });
        }
      }

      Array.from(document.querySelectorAll(".region-content select")).map(select => {
        addSumoselect(select)
      });

      Array.from(document.querySelectorAll("form select")).map(select => {
        addSumoselect(select)
      });
    }
  }

  Drupal.behaviors.aldia_news_state_and_city = {
    attach: function(context) {
        const addStateAndCity = (state, city) => {
          let sumoSelect = state.querySelector('.SumoSelect');
          let labelState = state.querySelector('label');
          let labelCity = city.querySelector('label');
          let selectState = state.querySelector('select');
          let inputCity = city.querySelector('input');
    
          sumoSelect.setAttribute('tabindex', '0');
          state.classList.remove('disabled');
          city.classList.remove('disabled');
    
          labelState.classList.add('js-form-required', 'form-required');
          selectState.classList.add('required');
          selectState.setAttribute('required', 'required')
          selectState.setAttribute('aria-required', 'true');
          selectState.removeAttribute('disabled')
    
          labelCity.classList.add('js-form-required', 'form-required')
          inputCity.classList.add('required');
          inputCity.setAttribute('required', 'required')
          inputCity.setAttribute('aria-required', 'true');
          inputCity.removeAttribute('disabled');
        }

        const removeStateAndCity = (state, city) => {
          let sumoSelect = state.querySelector('.SumoSelect');
          let labelState = state.querySelector('label');
          let labelCity = city.querySelector('label');
          let selectState = state.querySelector('select');
          let inputCity = city.querySelector('input');
        
          if (state.classList.contains('disabled') || city.classList.contains('disabled')) return;
        
          sumoSelect.setAttribute('tabindex', '-1');
          state.classList.add('disabled');
          city.classList.add('disabled');
        
          labelState.classList.remove('js-form-required', 'form-required');
          selectState.classList.remove('required');
          selectState.removeAttribute('required');
          selectState.removeAttribute('aria-required');
          selectState.setAttribute('disabled', 'disabled');
        
          labelCity.classList.remove('js-form-required', 'form-required');
          inputCity.classList.remove('required');
          inputCity.removeAttribute('required');
          inputCity.removeAttribute('aria-required');
          inputCity.setAttribute('disabled', 'disabled')
        }

        const validateFormSponsorship = (form) => {
          if(!form) return;

          const selectCountry = form.querySelector('select[name="address[country]"]');
          const filedCountry = form.querySelector('.form-item-address-country');
          const fieldState = form.querySelector('.form-item-address-state-province');
          const fieldCity = form.querySelector('.form-item-address-city');
          const selectParent = selectCountry.parentElement;
          const countriesItems = selectParent.querySelectorAll('.opt');

          const contrySelected = selectCountry.value;
			    //disabled at startup
			    if(contrySelected.toLocaleLowerCase() != "united states" ) removeStateAndCity(fieldState, fieldCity);

          //reorder fields 
          filedCountry.insertAdjacentElement('afterend', fieldState);
          fieldState.insertAdjacentElement('afterend', fieldCity);

          if(form.classList.contains('webform-submission-sponsorship-upcoming-event-form')){
            const budgetEvent = document.querySelector('.form-item-budget');
            fieldCity.insertAdjacentElement('afterend', budgetEvent)
          } 

          countriesItems.forEach(item => item.addEventListener('click', (event) => {
            if (event.target.innerText.toLowerCase() === 'united states') {
              addStateAndCity(fieldState, fieldCity);
            } else {
              removeStateAndCity(fieldState, fieldCity);
            }
          }));
        }

        if (!!document.querySelector('.webform-about-al-dia-live .webform-submission-sponsorship-form')) {
          const form = document.querySelector('.webform-about-al-dia-live .webform-submission-sponsorship-form');
          validateFormSponsorship(form);
        }

        if(!!document.querySelector('.webform-submission-sponsorship-upcoming-event-form')){
          const form = document.querySelector('.webform-submission-sponsorship-upcoming-event-form');
          validateFormSponsorship(form);
        }
    }
  }

  let flag = 1;
  let control = [];
  control[0] = 0;

  Drupal.behaviors.progress_indicator = {
    attach: function (context, settings) {

      let hasInfiniteScroll = context.querySelector('.views-infinite-scroll-content-wrapper');

      if(!!hasInfiniteScroll){

        Drupal.Ajax.prototype.setProgressIndicatorFullscreen = function () {
          this.progress.element = $('<span class="ajax-progress ajax-progress-fullscreen">&nbsp;</span>');
          $('.views-infinite-scroll-content-wrapper').append(this.progress.element);
        };
      }
    }
  };
})(jQuery);
