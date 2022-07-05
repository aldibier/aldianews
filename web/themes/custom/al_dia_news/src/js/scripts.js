import "../../assets/libraries/selection-sharer/selection-sharer.css";
import SelectionSharer from "../../assets/libraries/selection-sharer/selection-sharer.js";
import initScrollMagic from "./scroll-magic";
import initMain from "./main.js";
import initSlick from "./slick.js";
import replaceToken from "./modules/replaceToken";
import { videoSDK } from "./modules/video-pre-roll";
import { validateFormSponsorship, unitedStateFirst } from './modules/state_and_city';
import { formApplyModified } from './modules/fixedCloseWebforms';

(function ($, Drupal) {
    // Selection share
	const sharer = new SelectionSharer();
	sharer.setElements(
		"p,h1,h2,h3,blockquote,em,strong,a:not(.selectionSharer a)"
	);

	// Replace key word by another value
	const aldiaLogoStructure = `<span class="aldia-logo-in-text" alt="ALDÍA">
                                <img alt="ALDÍA" src="${drupalSettings.path.baseUrl}themes/custom/al_dia_news/assets/img/aldia.svg">
                              </span>`;

	var $window = $(window);
	var $videoWrap = $(
		".page-node-type-news .content-news-internal-first .block-field-blocknodenewsfield-video"
	);
	var $video = $(".page-node-type-news .content-news-internal-first .block-field-blocknodenewsfield-video .content");

	if (!!document.querySelector(".page-node-type-news") && $video.length != 0) {
		$window.on("scroll", function () {
			var headerHeigth = $('#header').outerHeight();
			var windowScrollTop = $window.scrollTop() + headerHeigth;
			var videoHeight = $video.outerHeight();
			var videoBottom = videoHeight + $videoWrap.offset().top;

			if (windowScrollTop > videoBottom) {
				if ($video.hasClass('stuck')) return;
				$videoWrap.height(videoHeight);
				$video.addClass("stuck");
			}

			if (windowScrollTop <= videoBottom) {
				$videoWrap.height("auto");
				$video.removeClass("stuck");
			}
		});

		$('.block-field-blocknodenewsfield-video').click(function (event) {
			const target = event.target;

			if (target.classList.contains('stuck') || target.closest('.stuck')) {
				$video.addClass("disnone");
			}

		});

	}

	$(document).ajaxComplete(function () {
		$(".popup-login .js-form-item-pass-pass1 input").blur(function () {
			var background = $(".popup-login .password-strength__indicator").css(
				"background-color"
			);
			$(".popup-login .password-strength__text").css("color", background);
		});

		$(".account-modal--password input").unbind();

		$(".edit-info-user input[type='submit']").unbind();

		$(".account-modal--register input[type='submit']").unbind();

		let email = $('input[type="email"]');
		$(email).attr("pattern", '[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}');
	});

	let email = $('input[type="email"]');
	$(email).attr("pattern", '[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}');

	const containerVideo = document.querySelector(
		".page-node-type-thought-leaders .block-field-blocknodethought-leadersfield-video"
	);
	const videoThoughtLeaders = document.querySelector(
		".page-node-type-thought-leaders .block-field-blocknodethought-leadersfield-video .content"
	);

	if (
		!!document.querySelector(".page-node-type-thought-leaders") &&
		!!videoThoughtLeaders &&
		!!containerVideo
	) {
		const videoThoughtLeadersHeigth = $(videoThoughtLeaders).outerHeight();

		$window.on("scroll", function () {
			var windowScrollTop = $window.scrollTop();
			var videoBottom =
				videoThoughtLeadersHeigth + $(containerVideo).offset().top;

			if (windowScrollTop > videoBottom) {
				$(containerVideo).height(videoThoughtLeadersHeigth);
				$(videoThoughtLeaders).addClass("stuck");
			} else {
				$(containerVideo).height("auto");
				$(videoThoughtLeaders).removeClass("stuck");
			}
			$(
				'.block-field-blocknodethought-leadersfield-video .stuck button[name="close"]'
			).click(function () {
				$(videoThoughtLeaders).addClass("disnone");
			});
		});
	}

	$(document).ready(function () {
		$(
			'.node--type-news .block-field-blocknodenewsbody iframe[title="YouTube video player"]'
		)
			.parent()
			.addClass("video-body-notice-embed");

		//--------- initialization --------------------//
		if (window.matchMedia("(min-width: 992px)").matches) {
			initScrollMagic($, Drupal);
		}
	});

	$(window).on("load", function () {


		videoSDK();

		const headingTags = document.querySelectorAll("h1, h2, h3");
		const paragraphTags = document.querySelectorAll("p");

		replaceToken("AL DÍA", aldiaLogoStructure, headingTags);
		replaceToken("{aldia}", aldiaLogoStructure, paragraphTags);
		replaceToken("AL DIA", aldiaLogoStructure, headingTags);

		//--------- menu--------------------//
		$(".region-header #block-blockheader").click(function () {
			if ($(".region-secondary-menu").hasClass("open-menu")) {
				$(".region-secondary-menu").removeClass("open-menu");
				$("body").removeClass("open-menu");
			} else {
				$(".region-secondary-menu").addClass("open-menu");
				$("body").addClass("open-menu");
			}
		});

		$("#block-blockpreheader").click(function () {
			$(".region-secondary-menu").removeClass("open-menu");
			$("body").removeClass("open-menu");
		});

		$(".page-node-type-webform .webform-confirmation-modal .button-back").click(
			function () {
				$(this)
					.parents(".webform-confirmation-modal")
					.css("display", "none");
				$(this)
					.parents(".page-node-type-webform")
					.find(".ui-widget-overlay")
					.css("display", "none");
				$(this).attr("href", "#");
			}
		);

		//--------puopup-- login - movil -----------//
		$(".user-logged-in #block-menuuseritem-2").click(function () {
			if (window.matchMedia("(max-width: 768px)").matches) {
				if ($(this).hasClass("open")) {
					$(this).removeClass("open");
					$(".user-logged-in #block-menuuseritem-2 .item-list").removeClass(
						"open"
					);
					$(".region-secondary-menu").removeClass("open-user");
				} else {
					$(".user-logged-in #block-menuuseritem-2 .item-list").addClass(
						"open"
					);
					$(".region-secondary-menu").addClass("open-user");
					$(this).addClass("open");
				}
			}
		});

		// $(".region-secondary-menu #block-al-dia-news-main-menu a").each(function () {
		// 	var text = $(this).html();
		// 	$(this).html(text.replace(/AL/g, "<br>AL"));
		// });

		//------------ scroll jobs --------------//
		const containermenu = document.querySelector(
			"#block-system-menu-block-i-am-an-employer-menu"
		);
		const menu = document.querySelector(
			"#block-system-menu-block-i-am-an-employer-menu .menu"
		);
		const time = document.querySelector("#block-system-main-block");

		if (!!containermenu && !!menu) {
			var controller2 = new ScrollMagic.Controller({
				globalSceneOptions: {
					triggerHook: 0.14,
					// duration: time.offsetHeight 
				}
			});

			new ScrollMagic.Scene({
				triggerElement: menu
			})
				.setClassToggle(menu, "active") // add class toggle
				//.offset()
				.setPin(menu, {
					pushFollowers: false
				})
				.addTo(controller2);
			//.addIndicators();
		}

		$(
			'.block-fixed-block-content-horizontal-advertising-close  button[name="close"]'
		).click(function () {
			$(".block-fixed-block-content-horizontal-advertising-close").addClass(
				"dis-none"
			);
		});

		$(".page-node-type-al-dia-vacancy .button-apply").click(function () {
			if (
				$(".page-node-type-al-dia-vacancy .block-webform-block").hasClass(
					"open"
				)
			) {
				$(".page-node-type-al-dia-vacancy .block-webform-block").removeClass(
					"open"
				);
			} else {
				$(".page-node-type-al-dia-vacancy .block-webform-block").addClass(
					"open"
				);
			}
		});

		$("#edit-close-window").click(function () {
			if (
				$(".page-node-type-al-dia-vacancy .block-webform-block").hasClass(
					"open"
				)
			) {
				$(".page-node-type-al-dia-vacancy .block-webform-block").removeClass(
					"open"
				);
			} else {
				$(".page-node-type-al-dia-vacancy .block-webform-block").addClass(
					"open"
				);
			}
		});

		$('.views-field-field-webform  button[name="close"]').click(function () {
			if ($(".path-employer .views-field-field-webform").hasClass("open")) {
				$(".path-employer .views-field-field-webform").removeClass("open");
			}
		});

		$(".style-jobs .button-apply").click(function () {
			$(".style-jobs .modal-apply-webform").addClass("open");
		});

		$('.modal-apply-webform  button[name="close"]').click(function () {
			if ($(".style-jobs .modal-apply-webform").hasClass("open")) {
				$(".style-jobs .modal-apply-webform").removeClass("open");
			}
		});

		//// modal watch live
		$(".watch-live-button").click(function () {
			$(".watch-live-video").addClass("open");
		});

		$('.watch-live-video button[name="close"]').click(function () {
			if ($(".watch-live-video ").hasClass("open")) {
				$(".watch-live-video ").removeClass("open");
			}
		});

		if (
			!!document.querySelector(".page-node-type-news") ||
			!!document.querySelector(".page-node-type-thought-leaders")
		) {
			var $videoNews = $(
				".content-news-internal-first .block-field-blocknodenewsfield-video .content"
			);
			var watchLive_button = document.querySelector(".watch-live-button");
			var watchLive_close = document.querySelector(
				".watch-live-video .close-modal"
			);

			if (!!watchLive_close && !!watchLive_button && !!$videoNews) {
				$(watchLive_button).click(function () {
					$videoNews.addClass("dis-none-obligate");
				});
				$(watchLive_close).click(function () {
					if ($videoNews.hasClass("dis-none-obligate")) {
						$videoNews.removeClass("dis-none-obligate");
					}
				});
			}
		}

		///// modal nominate interna eventos
		$(".banner-events a#nominee").click(function () {
			$(".form-nominee-events")
				.parents(".modal-apply-webform")
				.addClass("open");
			const form = document.querySelector('.webform-submission-nominate-form');
			formApplyModified(form, '.close-modal');
		});

		$(".banner-events a#register-here").click(function () {
			$(".form-register-events")
				.parents(".modal-apply-webform")
				.addClass("open");
		});

		$(".banner-events a#sponsorship").click(function () {
			$(".form-sponsorship-events")
				.parents(".modal-apply-webform")
				.addClass("open");
			const formSponsorshipEvent = document.querySelector('.webform-submission-sponsorship-upcoming-event-form');
			formApplyModified(formSponsorshipEvent, '.close-modal');
		});

		$('.modal-apply-webform  button[name="close"]').click(function () {
			if ($(".modal-open .modal-apply-webform").hasClass("open")) {
				$(".modal-open .modal-apply-webform").removeClass("open");
			}
		});

		///// modal employer

		$(".path-employer .button-apply").click(function () {
			if (
				$(this)
					.parents(".views-row")
					.find(".views-field-field-webform")
					.hasClass("open")
			) {
				$(this)
					.parents(".views-row")
					.find(".views-field-field-webform")
					.removeClass("open");
			} else {
				$(this)
					.parents(".views-row")
					.find(".views-field-field-webform")
					.addClass("open");
			}
		});

		$(".path-employer form button").click(function () {
			if (
				$(this)
					.parents(".views-row")
					.find(".views-field-field-webform")
					.hasClass("open")
			) {
				$(this)
					.parents(".views-row")
					.find(".views-field-field-webform")
					.removeClass("open");
			} else {
				$(this)
					.parents(".views-row")
					.find(".views-field-field-webform")
					.addClass("open");
			}
		});

		/// modal header buscador

		$(".block-search input").click(function () {
			$("#block-exposedformsearch-results-al-dia-solrpage-1-2").addClass(
				"open"
			);
			$("#block-exposedformsearch-results-al-dia-solrpage-1-2 .form-item-token input").focus();
			$(".layout-main-wrapper.layout-container").addClass("color-mod");
		});

		//modal subscribe

		$(
			".block-fixed-block-contentpop-up-cancel-form-subscribe button[name=no-stay]"
		).click(function () {
			if (
				$(".block-fixed-block-contentpop-up-cancel-form-subscribe").hasClass(
					"open"
				)
			) {
				$(".block-fixed-block-contentpop-up-cancel-form-subscribe").removeClass(
					"open"
				);
			}
		});

		$(
			".commerce-checkout-flow-multistep-default .form-actions span.user-login"
		).click(function () {
			if (
				$(".block-fixed-block-contentpop-up-cancel-form-subscribe").hasClass(
					"open"
				)
			) {
				$(".block-fixed-block-contentpop-up-cancel-form-subscribe").removeClass(
					"open"
				);
			} else {
				$(".block-fixed-block-contentpop-up-cancel-form-subscribe").addClass(
					"open"
				);
			}
		});

		$(document).ready(function () {
			$("#block-modalhomepassword a.button").click();
		});

		initMain();

		//js para galeria en interna de noticias
		let allSlidersCKEIG = document.querySelectorAll('.cke-ig');
		if (allSlidersCKEIG) {
			allSlidersCKEIG.forEach((slider) => {
				let arrImage = slider.querySelectorAll('img');
				if (arrImage.length != 0) {
					let arrcloneNav = Array.from(arrImage).map(item => {
						//creo contenedor adicional para retornar imagen y texto en  un solo div:
						let containerImageTitle = document.createElement('div');
						containerImageTitle.classList.add('container-item-galery');
						//obtengo el value del atributo title de la imagen para mostrarlo en un p
						let titleImage = document.createElement('p');
						titleImage.textContent = item.getAttribute('title');
						//creo un nuevo contenedor para poner solo la imagen
						let containerImage = document.createElement('div');
						containerImage.classList.add('container-image'); 
						containerImage.append(item.cloneNode(true));
						//agrego imagen y title en el div creado:
						containerImageTitle.append(containerImage, titleImage ); 
						//retorno  el div con title e imagen :
						return containerImageTitle;
					});

					let arrcloneFor = Array.from(arrImage).map(item => {
						return item.cloneNode(true);
					});
					let popupgaleryNav = document.createElement("div")
					popupgaleryNav.classList.add("popupgalerycontainer-nav")

					let popupgaleryFor = document.createElement("div")
					popupgaleryFor.classList.add("popupgalerycontainer-for")

					arrcloneNav.forEach(element => {
						popupgaleryNav.appendChild(element)
					})

					arrcloneFor.forEach(element => {
						popupgaleryFor.appendChild(element)

					});
					let containerPopupSlider = document.createElement("div");
					containerPopupSlider.classList.add('slider-black-aldia');

					let closeDivX = document.createElement("div");
					closeDivX.classList.add('slider-black-x');
					let newContent = document.createTextNode("X");
					closeDivX.append(newContent);
					containerPopupSlider.append(closeDivX, popupgaleryNav, popupgaleryFor);
					slider.insertAdjacentElement('afterend', containerPopupSlider);
				}
			})
		}

		initSlick($, Drupal);

		var viewportHeight = window.innerHeight;
		var calcHeight = ((viewportHeight * 60.62) / 100).toFixed(2); 

		if (window.matchMedia("(min-width: 1440px)").matches) {
			calcHeight = ((viewportHeight * 74.6) / 100).toFixed(2);
		}

		let allSlider = document.querySelectorAll('.cke-ig img');
		allSlider.forEach((slide) => {
			slide.addEventListener('click', (e) => {
				let popupSlider = e.target.closest('.cke-ig').nextElementSibling;
				popupSlider.classList.add('active');
				$('#header').addClass('hide');
				$('.popupgalerycontainer-nav').slick('refresh');
				$('.popupgalerycontainer-for').slick("refresh");
				 
				if (window.matchMedia("(min-width: 767px)").matches) {
					$('.popupgalerycontainer-nav img' ).css('height' , calcHeight  );
					console.log('asfsaddsfsasdsd');
				}	
			});
		})
		//cerrar modal slider
		let sliderBlackClose = document.querySelectorAll('.slider-black-x');
		if (sliderBlackClose) {
			sliderBlackClose.forEach( close => {
				close.addEventListener('click' , (e) => {
					e.target.parentElement.classList.remove('active');
					$('#header').removeClass('hide');
				} )
			} )
		}

		//// sumo select

		Array.from(document.querySelectorAll(".region-content select:not(.SumoSelect select")).map(
			function (element) {
				if (element != null) {
					$(element).SumoSelect({
						forceCustomRendering: true,
						floatWidth: 300
					});
				}
			}
		);

		Array.from(document.querySelectorAll("form select:not(.SumoSelect select")).map(
			function (element) {
				if (element != null) {
					$(element).SumoSelect({
						forceCustomRendering: true,
						floatWidth: 300
					});
				}
			}
		);

		if (!!document.querySelector('.webform-about-al-dia-live .webform-submission-sponsorship-form')) {
			const form = document.querySelector('.webform-about-al-dia-live .webform-submission-sponsorship-form');
			validateFormSponsorship(form);
			unitedStateFirst(form);
		}

		if (!!document.querySelector('.webform-submission-sponsorship-upcoming-event-form')) {
			const form = document.querySelector('.webform-submission-sponsorship-upcoming-event-form');
			validateFormSponsorship(form);
			unitedStateFirst(form);
		}

		const formSponsorshipEvent = document.querySelector('.webform-submission-sponsorship-upcoming-event-form');
		formApplyModified(formSponsorshipEvent, '.close-modal');

		$(window).on('resize', function () {
			const formNominate = document.querySelector('.webform-submission-nominate-form');
			const formSponsorshipEvent = document.querySelector('.webform-submission-sponsorship-upcoming-event-form');
			const formRegisterEvent = document.querySelector('.registerhere-popup-event-landing .webform-submission-register-form');

			if (!!formNominate) {
				formApplyModified(formNominate, '.close-modal');
			}

			if (!!formSponsorshipEvent) {
				formApplyModified(formSponsorshipEvent, '.close-modal');
			}


			if (!!formRegisterEvent) {
				setTimeout(() => {
					formApplyModified(formRegisterEvent, '.close-modal');
				}, 0)
			}

		})
	});

	Drupal.behaviors.aldia_news_sumoselect = {
		attach: function (context, settings) {
			//// sumo select
			let isDialog = false;
			const parentElementContext = context.parentElement;

			if (!!parentElementContext) {
				isDialog = parentElementContext.classList.contains('ui-front') || false;
			}

			if (!!isDialog) {
				const addSumoselect = (select) => {
					if (select != null) {
						$(select).SumoSelect({
							forceCustomRendering: true
						});
					}
				}

				Array.from(context.querySelectorAll("select:not(select.SumoUnder)")).forEach(select => {
					addSumoselect(select)
				});

				if (!!document.querySelector('.webform-submission-sponsorship-upcoming-event-form')) {
					const form = document.querySelector('.webform-submission-sponsorship-upcoming-event-form');
					validateFormSponsorship(form);
					unitedStateFirst(form);
				}

			}

			if (context.id == 'views-exposed-form-search-results-al-dia-solr-page-1') {
				Array.from(document.querySelectorAll("select.SumoUnder")).forEach(select => {
					$(select)[0].sumo.reload();
				});
			}
		}
	}

	Drupal.behaviors.form_checkbox = {
		attach: function (context, settings) {
			$(function () {
				//js para recargar
				Array.from(document.querySelectorAll(".button-preload")).map(function (
					e
				) {
					if (e != null) {
						e.addEventListener("click", () => {
							location.reload();
						});
					}
				});

				///// js para tag new
				Array.from(
					document.querySelectorAll(
						".block-field-blocknodenewsfield-type-of-content"
					)
				).map(function (evt) {
					if (evt != null) {
						var shape = evt.querySelector(".field--name-field-type-of-content");
						if (shape != null) {
							if (shape.innerText == "Podcast") {
								shape.classList.add("logo-podcast");
							} else if (shape.innerText == "Article") {
								shape.classList.add("logo-none");
							}
						}
					}
				});

				// Relacionando clase de selector al nombre de este archivo
				var currentClass = "js-form-fake-checkbox";

				if ($(".form-checkbox").length) {
					$(".form-checkbox").addClass(currentClass);
					if (!$(".fake-checkbox").length) {
						$('<div class="fake-checkbox" />').insertAfter(".form-checkbox");
					}

					$(".form-checkbox").each(function () {
						var context = $(this);
						if (context.prop("checked") == true) {
							context.addClass("active-check");
						}
					});
				}

				// Pone clase activa cuando el radio está seleccionado
				$("." + currentClass, context)
					.once("js-form-fake-checkbox")
					.click(function () {
						var context = $(this);
						context.toggleClass("active-check");
					});

				/// js para esrilos de boton de eliminar archivo
				var check_number = document.querySelectorAll(
					".form-managed-file .form-item"
				).length;
				var mng_field = document.querySelector(".form-managed-file");
				var container_field = document.querySelector("#edit-container");
				if (!!container_field && !!mng_field && !!check_number) {
					if (check_number >= 1) {
						mng_field.classList.add("action-button");
					} else {
						mng_field.classList.remove("action-button");
					}
					if (check_number === 2) {
						container_field.classList.add("disable-button");
					}
				}

				//// elipsis para archivos
				Array.from(
					document.querySelectorAll("#edit-container .js-form-type-checkbox a")
				).map(function (e) {
					if (e != null) {
						if (e.innerText.length > 25) {
							var newt = e.innerText.substring(0, 25) + "...";
							e.innerHTML = newt;
						}
					}
				});

				/// x que elimina archivos
				var firts_check = document.querySelector(
					'.form-managed-file .form-item:nth-of-type(1) input[type*="checkbox"]'
				);
				var second_check = document.querySelector(
					'.form-managed-file .form-item:nth-of-type(2) input[type*="checkbox"]'
				);
				var input_value = document.querySelector(
					'input[name="upload_file[fids]"]'
				);
				var cont_field = document.querySelector("#edit-container");

				if (!!firts_check && !!input_value && second_check === null) {
					firts_check.addEventListener("click", () => {
						input_value.setAttribute("value", "");
						firts_check.closest(".form-type-checkbox").remove();
					});
				}

				if (!!cont_field && !!firts_check && !!input_value && !!second_check) {
					firts_check.addEventListener("click", e => {
						e.stopImmediatePropagation();
						var atributo1 = input_value
							.getAttribute("value")
							.split("")
							.slice(4, 7)
							.join("");
						input_value.setAttribute("value", atributo1);
						firts_check.closest(".form-type-checkbox").remove();
						cont_field.classList.remove("disable-button");
					});

					second_check.addEventListener("click", e => {
						e.stopImmediatePropagation();
						var logueado = document.querySelector(".user-logged-in");

						if (
							!!logueado &&
							!!second_check.parentElement.previousElementSibling.classList.contains(
								"form-item"
							)
						) {
							var atributo = input_value
								.getAttribute("value")
								.split("")
								.slice(0, 3)
								.join("");
							input_value.setAttribute("value", atributo);
							second_check.closest(".form-type-checkbox").remove();
							cont_field.classList.remove("disable-button");
						} else if (
							logueado === null &&
							!!second_check.parentElement.previousElementSibling.previousElementSibling.classList.contains(
								"form-item"
							)
						) {
							var atributo = input_value
								.getAttribute("value")
								.split("")
								.slice(0, 3)
								.join("");
							input_value.setAttribute("value", atributo);
							second_check.closest(".form-type-checkbox").remove();
							cont_field.classList.remove("disable-button");
						} else {
							input_value.setAttribute("value", "");
							second_check.closest(".form-type-checkbox").remove();
							cont_field.classList.remove("disable-button");
						}
					});
				}
				var esp = document.querySelector('html[lang="es"]');
				if (!!esp) {
					$(
						"div.popup-class-restore-pwd.ui-widget.ui-corner-all:not(button) .close-button-modal"
					).html('<a href="/">OK</a>');
					$(
						".popup-class-cancel-account.ui-widget.ui-corner-all:not(button) .close-button-modal"
					).html('<a href="/">IR A NUESTRO ÚLTIMO CONTENIDO</a>');
					//////
					var button_subscribe = document.querySelector(
						'.link--previous[href*="/order_information"]'
					);
					if (!!button_subscribe) {
						button_subscribe.innerHTML = "REGRESAR";
					}
					//////
					Array.from(document.querySelectorAll(".watch-live-button")).map(
						function (e) {
							if (!!e) e.innerHTML = "EN VIVO";
						}
					);
					//////
					var share = document.querySelector(
						".block-extra-field-blocknodenewsaddtoany h2"
					);
					if (!!share) {
						share.innerHTML = "COMPARTE ESTE CONTENIDO:";
					}
				} else {
					$(
						"div.popup-class-restore-pwd.ui-widget.ui-corner-all:not(button) .close-button-modal"
					).html('<a href="/">OK</a>');
					$(
						".popup-class-cancel-account.ui-widget.ui-corner-all:not(button) .close-button-modal"
					).html('<a href="/">GO TO OUR LATEST CONTENT</a>');
				}
			});

			//fake click dialog modal
			if (!!context.querySelector('.close-modal')) {
				let closeFake = context.querySelector('.close-modal');

				if (!!closeFake) {
					closeFake.addEventListener('click', () => {
						let closeDialog = document.querySelector('.ui-dialog-titlebar button.ui-dialog-titlebar-close');

						if (!!closeDialog) closeDialog.click();
					})
				}
			}
		}
	};

	Drupal.behaviors.aldia_logo = {
		attach: function (context, settings) {

			let infiniteScroll = context.querySelector('.views-infinite-scroll-content-wrapper');

			if (!!infiniteScroll) {
				//Replace token
				const headingScrollTags = document.querySelectorAll("h1, h2, h3");
				const paragraphScrollTags = document.querySelectorAll("p");

				replaceToken("AL DÍA", aldiaLogoStructure, headingScrollTags);
				replaceToken("{aldia}", aldiaLogoStructure, paragraphScrollTags);
				replaceToken("AL DIA", aldiaLogoStructure, headingScrollTags);

				//Selection sharer
				const sharer = new SelectionSharer();
				sharer.setElements(
					"p,h1,h2,h3,blockquote,em,strong,a:not(.selectionSharer a)"
				);
			}
		}
	};

	Drupal.behaviors.titleFixed = {
		attach: function (context, settings) {

			setTimeout(() => {
				const formLogin = document.querySelector('.account-modal--login');
				const formSponsorshipEvent = context.querySelector('.webform-submission-sponsorship-upcoming-event-form');
				const formRegisterEvent = document.querySelector('.registerhere-popup-event-landing .webform-submission-register-form');

				if (!!formLogin) {
					formApplyModified(formLogin, '.ui-dialog-titlebar-close');
				}

				if (!!formSponsorshipEvent) {
					formApplyModified(formSponsorshipEvent, '.close-modal');
				}

				if (!!formRegisterEvent) {
					formApplyModified(formRegisterEvent, '.close-modal');
				}

			}, 100)
		}
	}

})(jQuery, Drupal);