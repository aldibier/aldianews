/**
 * @file
 */



(function (Drupal) {


  Drupal.behaviors.aldia_news_advertising = {
    attach: function (context, settings) {
      window.addEventListener("load", function() {
        var widthPubli = window.innerWidth;

        if (widthPubli >= 768) {
          // Vista Leadership
          const leadershipBlock = context.querySelector('.view-id-leadership_sons.view-display-id-block_3 .block-fixed-block-content-small-vertical-advertising');
          if (leadershipBlock && !leadershipBlock.dataset.processed) {
            leadershipBlock.dataset.processed = true;
            setTimeout(() => {
              let leadership = 0;
              
              const mobileAdBlock = document.querySelector('.view-id-leadership_sons.view-display-id-block_3 .block-fixed-block-contentsquare-advertising-mobile .content > div > div');
              if (mobileAdBlock && mobileAdBlock.children.length > 0) {
                leadership = 1;
                document.querySelectorAll('.view-id-leadership_sons.view-display-id-block_3 .view-content .card-more-category').forEach((value, index) => {
                  if (index >= 6) {
                    value.classList.add('hidden-per-advertising');
                  }
                });
              }

              const bigAdBlock = document.querySelector('.view-id-leadership_sons.view-display-id-block_3 .block-fixed-block-contentbig-vertical-advertising .content > div > div');
              if (bigAdBlock && bigAdBlock.children.length > 0) {
                document.querySelectorAll('.view-id-leadership_sons.view-display-id-block_3 .view-content .card-more-category').forEach((value, index) => {
                  if (leadership) {
                    value.classList.add('hidden-per-advertising');
                  } else if (index >= 3) {
                    value.classList.add('hidden-per-advertising');
                  }
                });
              }
            }, 1000);
          }

          // Repite el mismo patrón para las demás vistas

          // Vista Politics
          const politicsBlock = context.querySelector('.view-id-politics_sons.view-display-id-block_3 .block-fixed-block-content-small-vertical-advertising');
          if (politicsBlock && !politicsBlock.dataset.processed) {
            politicsBlock.dataset.processed = true;
            setTimeout(() => {
              let politics = 0;
              
              const mobileAdBlockPolitics = document.querySelector('.view-id-politics_sons.view-display-id-block_3 .block-fixed-block-contentsquare-advertising-mobile .content > div > div');
              if (mobileAdBlockPolitics && mobileAdBlockPolitics.children.length > 0) {
                politics = 1;
                document.querySelectorAll('.view-id-politics_sons.view-display-id-block_3 .view-content .card-more-category').forEach((value, index) => {
                  if (index >= 6) {
                    value.classList.add('hidden-per-advertising');
                  }
                });
              }

              const bigAdBlockPolitics = document.querySelector('.view-id-politics_sons.view-display-id-block_3 .block-fixed-block-contentbig-vertical-advertising .content > div > div');
              if (bigAdBlockPolitics && bigAdBlockPolitics.children.length > 0) {
                document.querySelectorAll('.view-id-politics_sons.view-display-id-block_3 .view-content .card-more-category').forEach((value, index) => {
                  if (politics) {
                    value.classList.add('hidden-per-advertising');
                  } else if (index >= 3) {
                    value.classList.add('hidden-per-advertising');
                  }
                });
              }
            }, 1000);
          }

          // Repitiendo para otras vistas como Culture, etc.

          // Eliminación de publicidad vacía
          setTimeout(() => {
            Array.from(document.querySelectorAll(".block-gamw")).forEach((element) => {
              const iframeGamw = element.querySelector("iframe");
              if (!iframeGamw) {
                const ads = element.closest(".ads");
                if (ads && ads.parentElement) {
                  ads.parentElement.classList.add("non-adversiting");
                  ads.remove();
                } else if (element.parentElement) {
                  element.parentElement.classList.add("non-adversiting");
                  element.remove();
                }
              }
            });

            // Agregar clases a bloques específicos
            const addNonAdsFather = (blockSelector, containerSelector) => {
              const block = document.querySelector(blockSelector);
              const container = document.querySelector(containerSelector);
              if (block && container) {
                container.classList.add("non-ads-father");
              }
            };

            addNonAdsFather(".block-block-groupadvertising-blocks-in-job-landing-pages .non-adversiting", "#block-block-group-contenido-jobs > .content");
            addNonAdsFather(".node--view-mode-work-whit-al-dia .content-page-node .non-adversiting", ".node--view-mode-work-whit-al-dia .content-page-node");
            // Repite para las demás clases y selectores.

          }, 4000);
        }
      });
    }
  };

  // Drupal.behaviors.aldia_news_sumoselect = {
  //   attach: function (context,settings) {
  //     //// sumo select
	// 		let isDialog = false;
	// 		const parentElementContext = context.parentElement;

	// 		if(!!parentElementContext){
	// 			isDialog = parentElementContext.classList.contains('ui-front') || false;
	// 		}

  //     if (!!isDialog) {
  //       const formSponsorship = context.querySelector('.webform-submission-sponsorship-upcoming-event-form');
				
  //       if (!!formSponsorship) {
  //         const selectCountry = context.querySelector('select[id*="edit-address-country"]')
  //         let optionToMove = selectCountry.querySelector('option[value="United States"]');

  //         if (!optionToMove) {
  //           optionToMove = selectCountry.querySelector('option[value="Estados Unidos"]');
  //         }

  //         const optionFirst = selectCountry.firstElementChild;

  //         if (!!optionToMove) {
  //           optionFirst.insertAdjacentElement('afterend', optionToMove);
  //         }

  //       }

  //       const addSumoselect = (select) => {
  //         if (select != null) {
  //           $(select).SumoSelect({
  //             forceCustomRendering: true
  //           });
  //         }
  //       }

  //       // Array.from(context.querySelectorAll(".region-content select:not(.SumoSelect select")).forEach(select => {
  //       // 	addSumoselect(select)
  //       // });

  //       Array.from(context.querySelectorAll("select:not(select.SumoUnder)")).forEach(select => {
  //         addSumoselect(select)
  //       });

  //       if (!!formSponsorship) {
  //         const formItems = document.querySelectorAll('.opt label');
  //         if (!!formItems) {
  //           //add styles
  //           formItems.forEach(item => {
  //             if (item.textContent.includes("United States") || item.textContent.includes("Estados Unidos")) {
  //               item.style.borderBottom = "3px solid #b1b1b1";
  //             }
  //           })
  //         }
  //       }
  //     }

	// 		if(context.id == 'views-exposed-form-search-results-al-dia-solr-page-1'){
	// 			Array.from(context.querySelectorAll("select.SumoUnder")).forEach(select => {
  //         $(select)[0].sumo.reload();
  //       });
	// 		}
  //   }
  // }

  // Drupal.behaviors.aldia_news_state_and_city = {
  //   attach: function (context) {
  //     const addStateAndCity = (state, city) => {
  //       let sumoSelect = state.querySelector('.SumoSelect');
  //       let labelState = state.querySelector('label');
  //       let labelCity = city.querySelector('label');
  //       let selectState = state.querySelector('select');
  //       let inputCity = city.querySelector('input');

  //       sumoSelect.setAttribute('tabindex', '0');
  //       state.classList.remove('disabled');
  //       city.classList.remove('disabled');

  //       labelState.classList.add('js-form-required', 'form-required');
  //       selectState.classList.add('required');
  //       selectState.setAttribute('required', 'required')
  //       selectState.setAttribute('aria-required', 'true');
  //       selectState.removeAttribute('disabled')

  //       labelCity.classList.add('js-form-required', 'form-required')
  //       inputCity.classList.add('required');
  //       inputCity.setAttribute('required', 'required')
  //       inputCity.setAttribute('aria-required', 'true');
  //       inputCity.removeAttribute('disabled');
  //     }

  //     const removeStateAndCity = (state, city) => {
  //       let sumoSelect = state.querySelector('.SumoSelect');
  //       let labelState = state.querySelector('label');
  //       let labelCity = city.querySelector('label');
  //       let selectState = state.querySelector('select');
  //       let inputCity = city.querySelector('input');

  //       if (state.classList.contains('disabled') || city.classList.contains('disabled')) return;

  //       sumoSelect.setAttribute('tabindex', '-1');
  //       state.classList.add('disabled');
  //       city.classList.add('disabled');

  //       labelState.classList.remove('js-form-required', 'form-required');
  //       selectState.classList.remove('required');
  //       selectState.removeAttribute('required');
  //       selectState.removeAttribute('aria-required');
  //       selectState.setAttribute('disabled', 'disabled');

  //       labelCity.classList.remove('js-form-required', 'form-required');
  //       inputCity.classList.remove('required');
  //       inputCity.removeAttribute('required');
  //       inputCity.removeAttribute('aria-required');
  //       inputCity.setAttribute('disabled', 'disabled')
  //     }

  //     const validateFormSponsorship = (form) => {
  //       if (!form) return;

  //       const selectCountry = form.querySelector('select[name="address[country]"]');
  //       const filedCountry = form.querySelector('.form-item-address-country');
  //       const fieldState = form.querySelector('.form-item-address-state-province');
  //       const fieldCity = form.querySelector('.form-item-address-city');
  //       const selectParent = selectCountry.parentElement;
  //       const countriesItems = selectParent.querySelectorAll('.opt');

  //       const contrySelected = selectCountry.value;
  //       //disabled at startup
  //       if (contrySelected.toLocaleLowerCase() != "united states" || contrySelected.toLocaleLowerCase() != "estados unidos") removeStateAndCity(fieldState, fieldCity);

  //       //reorder fields 
  //       filedCountry.insertAdjacentElement('afterend', fieldState);
  //       fieldState.insertAdjacentElement('afterend', fieldCity);

  //       if (form.classList.contains('webform-submission-sponsorship-upcoming-event-form')) {
  //         const budgetEvent = document.querySelector('.form-item-budget');
  //         fieldCity.insertAdjacentElement('afterend', budgetEvent)
  //       }

  //       countriesItems.forEach(item => item.addEventListener('click', (event) => {
  //         if (event.target.innerText.toLowerCase() === 'united states' || event.target.innerText.toLowerCase() === 'estados unidos') {
  //           addStateAndCity(fieldState, fieldCity);
  //         } else {
  //           removeStateAndCity(fieldState, fieldCity);
  //         }
  //       }));
  //     }

  //     if (!!document.querySelector('.webform-about-al-dia-live .webform-submission-sponsorship-form')) {
  //       const form = document.querySelector('.webform-about-al-dia-live .webform-submission-sponsorship-form');
  //       validateFormSponsorship(form);
  //     }

  //     if (!!document.querySelector('.webform-submission-sponsorship-upcoming-event-form')) {
  //       const form = document.querySelector('.webform-submission-sponsorship-upcoming-event-form');
  //       validateFormSponsorship(form);
  //     }
  //   }
  // }

  let flag = 1;
  let control = [];
  control[0] = 0;

  Drupal.behaviors.progress_indicator = {
    attach: function (context, settings) {

      let hasInfiniteScroll = context.querySelector('.views-infinite-scroll-content-wrapper');

      if (!!hasInfiniteScroll) {

        Drupal.Ajax.prototype.setProgressIndicatorFullscreen = function () {
          this.progress.element = $('<span class="ajax-progress ajax-progress-fullscreen">&nbsp;</span>');
          $('.views-infinite-scroll-content-wrapper').append(this.progress.element);
        };
      }
    }
  };
})(Drupal);
