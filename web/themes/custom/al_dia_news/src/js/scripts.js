import "../../assets/libraries/selection-sharer/selection-sharer.css";
import SelectionSharer from "../../assets/libraries/selection-sharer/selection-sharer.js";
import initScrollMagic from "./scroll-magic";
import initMain from "./main.js";
import initSlick from "./slick.js";
import replaceToken from "./modules/replaceToken";

(function ($, Drupal) {
  // Selection share
  const sharer = new SelectionSharer();
  sharer.setElements("p,a,h1,h2,h3,blockquote,em,strong");

  // Replace key word by another value
  const headingTags = document.querySelectorAll("h1, h2, h3");
  const paragraphTags = document.querySelectorAll("p");
  const aldiaLogoStructure = `<span class="aldia-logo-in-text" title="AL DÍA">
                                <img alt="AL DÍA" src="${drupalSettings.path.baseUrl}themes/custom/al_dia_news/assets/img/aldia.svg">
                              </span>`;
  replaceToken("AL DÍA", aldiaLogoStructure, headingTags);
  replaceToken("{aldia}", aldiaLogoStructure, paragraphTags);

  var $window = $(window);
  var $videoWrap = $(
    ".page-node-type-news .content-news-internal-first .block-field-blocknodenewsfield-video"
  );
  var $video = $(
    ".page-node-type-news .content-news-internal-first .block-field-blocknodenewsfield-video .content"
  );
  var videoHeight = $video.outerHeight();

  if (!!document.querySelector(".page-node-type-news") && $video.length != 0) {
    $window.on("scroll", function () {
      var windowScrollTop = $window.scrollTop();
      var videoBottom = videoHeight + $videoWrap.offset().top;

      if (windowScrollTop > videoBottom) {
        $videoWrap.height(videoHeight);
        $video.addClass("stuck");
      } else {
        $videoWrap.height("auto");
        $video.removeClass("stuck");
      }
      $('.stuck button[name="close"]').click(function () {
        $video.addClass("disnone");
      });
    });
  }

  var $containerVideo = $(
    ".page-node-type-thought-leaders .block-field-blocknodethought-leadersfield-video"
  );
  var $videoThoughtLeaders = $(
    ".page-node-type-thought-leaders .block-field-blocknodethought-leadersfield-video .content"
  );

  var videoThoughtLeadersHeigth = $videoThoughtLeaders.outerHeight();

  if (
    !!document.querySelector(".page-node-type-thought-leaders") &&
    !!$videoThoughtLeaders
  ) {
    $window.on("scroll", function () {
      var windowScrollTop = $window.scrollTop();
      var videoBottom =
        videoThoughtLeadersHeigth + $containerVideo.offset().top;

      if (windowScrollTop > videoBottom) {
        $containerVideo.height(videoThoughtLeadersHeigth);
        $videoThoughtLeaders.addClass("stuck");
      } else {
        $containerVideo.height("auto");
        $videoThoughtLeaders.removeClass("stuck");
      }
      $('.stuck button[name="close"]').click(function () {
        $videoThoughtLeaders.addClass("disnone");
      });
    });
  }

  jQuery(document).ready(function () {
    if ($(".page-node-type-news .block-field-blocknodenewsfield-video iframe").length) {
      var url = ($(".page-node-type-news .block-field-blocknodenewsfield-video iframe")[0].src += "&mute=1");
      var video = url.replace("autoplay=0", "autoplay=1");

      $(".page-node-type-news .block-field-blocknodenewsfield-video iframe").attr("src",video);
    }

    if ($(".page-node-type-thought-leaders .block-field-blocknodethought-leadersfield-video iframe").length) {
      var url = ($(".page-node-type-thought-leaders .block-field-blocknodethought-leadersfield-video iframe")[0].src += "&mute=1");
      var video = url.replace("autoplay=0", "autoplay=1");

      $(".page-node-type-thought-leaders .block-field-blocknodethought-leadersfield-video iframe").attr("src",video);
    }

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

    //--------puopup-- login-----------//
    $(".user-logged-in #block-menuuseritem").click(function () {
      if ($(this).hasClass("open")) {
        $(this).removeClass("open");
        $(".user-logged-in #block-menuuseritem .item-list").removeClass("open");
      } else {
        $(".user-logged-in #block-menuuseritem .item-list").addClass("open");
        $(this).addClass("open");
      }
    });

    //--------puopup-- login - movil -----------//
    $(".user-logged-in #block-menuuseritem-2").click(function () {
      if (window.matchMedia("(max-width: 768px)").matches) {
        if ($(this).hasClass("open")) {
          $(this).removeClass("open");
          $(".user-logged-in #block-menuuseritem-2 .item-list").removeClass(
            "open"
          );
        } else {
          $(".user-logged-in #block-menuuseritem-2 .item-list").addClass(
            "open"
          );
          $(this).addClass("open");
        }
      }
    });

    $(".region-secondary-menu #block-al-dia-news-main-menu a").each(function () {
      var text = $(this).html();
      $(this).html(text.replace(/AL/g, "<br>AL"));
    });

    //--------- initialization --------------------//

    if (window.matchMedia("(min-width: 992px)").matches) {
      initScrollMagic($, Drupal);
    }

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
          triggerHook: 0,
          duration: time.offsetHeight
        }
      });

      new ScrollMagic.Scene({ triggerElement: menu })
        .setClassToggle(menu, "active") // add class toggle
        //.offset()
        .setPin(menu, { pushFollowers: false })
        .addTo(controller2);
      //.addIndicators();
    }

    $(
      '#block-fixed-block-content-horizontal-advertising-close  button[name="close"]'
    ).click(function () {
      $("#block-fixed-block-content-horizontal-advertising-close").addClass(
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
    if (!!document.querySelector('.page-node-type-news') || !!document.querySelector('.page-node-type-thought-leaders')) {
      $(window).on("scroll", function () {
        var watchLive = document.querySelector('.watch-live-video.open');
        const videoNews = document.querySelector('.block-field-blocknodenewsfield-video .content.stuck');
        const videoThoughtLeaders = document.querySelector('.block-field-blocknodethought-leadersfield-video .content.stuck ');
        (!!watchLive && !!videoNews) ? videoNews.classList.add('disnone') : videoNews.classList.remove('disnone');
        (!!watchLive && !!videoThoughtLeaders) ? videoThoughtLeaders.classList.add('disnone') : videoThoughtLeaders.classList.remove('disnone');
      });
    }

		

    ///// modal nominate interna eventos
    $(".banner-events a#nominee").click(function () {
      $(".modal-open .modal-apply-webform").addClass("open");
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
      $(".layout-main-wrapper.layout-container").addClass("color-mod");
    });

    initMain();
    initSlick($, Drupal);
  });

  Drupal.behaviors.form_checkbox = {
    attach: function (context, settings) {
      $(document).ready(function () {
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

        //// sumo select

        Array.from(document.querySelectorAll(".region-content select")).map(
          function (e) {
            if (e != null) {
              e.classList.add("testselect1");
              $(".testselect1").SumoSelect({
                forceCustomRendering: true,
                floatWidth: 300
              });
            }
          }
        );

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
      });
    }
  };
})(jQuery, Drupal);
