import "../../assets/libraries/selection-sharer/selection-sharer.css";
import SelectionSharer from "../../assets/libraries/selection-sharer/selection-sharer.js";
import initScrollMagic from "./scroll-magic";
import initSlick from "./slick.js";
import replaceToken from "./modules/replaceToken";
import initMain from "./main.js";

(function($, Drupal) {
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
  var $videoWrap = $(".page-node-type-news .content-news-internal-first .block-field-blocknodenewsfield-video");
  var $video = $(".page-node-type-news .content-news-internal-first .block-field-blocknodenewsfield-video .content");
  var videoHeight = $video.outerHeight();
  
  if(!!document.querySelector('.page-node-type-news') && !!$video){
    $window.on('scroll',  function() {
      var windowScrollTop = $window.scrollTop();
      var videoBottom = videoHeight + $videoWrap.offset().top;
      
      if (windowScrollTop > videoBottom) {
        $videoWrap.height(videoHeight);
        $video.addClass('stuck');
      } else {
        $videoWrap.height('auto');
        $video.removeClass('stuck');
      }
    });
  }
      

  jQuery(document).ready(function() {
    if($(".page-node-type-news .video-embed-field-responsive-video iframe").length){
      var url =  $(".page-node-type-news .video-embed-field-responsive-video iframe")[0].src += "&mute=1"; 
      var video = url.replace('autoplay=0', 'autoplay=1');
      $(".page-node-type-news .video-embed-field-responsive-video iframe").attr("src",video);
    }

    //--------- menu--------------------//
    $(".region-header #block-blockheader").click(function() {
      if ($(".region-secondary-menu").hasClass("open-menu")) {
        $(".region-secondary-menu").removeClass("open-menu");
        $("body").removeClass("open-menu");
      } else {
        $(".region-secondary-menu").addClass("open-menu");
        $("body").addClass("open-menu");
      }
    });

    $("#block-blockpreheader").click(function() {
      $(".region-secondary-menu").removeClass("open-menu");
      $("body").removeClass("open-menu");
    });

    //--------puopup-- login-----------//
    $(".user-logged-in #block-loginformpopup").click(function() {
      if ($(this).hasClass("open")) {
        $(this).removeClass("open");
        $(".user-logged-in #block-al-dia-news-account-menu").removeClass(
          "open"
        );
      } else {
        $(".user-logged-in #block-al-dia-news-account-menu").addClass("open");
        $(this).addClass("open");
      }
    });

    $(".region-secondary-menu #block-al-dia-news-main-menu a").each(function() {
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

    $(".page-node-type-al-dia-vacancy .button-apply").click(function() {
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

    $("#edit-close-window").click(function() {
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

    $('.views-field-field-webform  button[name="close"]').click(function() {
      if ($(".path-employer .views-field-field-webform").hasClass("open")) {
        $(".path-employer .views-field-field-webform").removeClass("open");
      }
    });

    $(".style-jobs .button-apply").click(function() {
      $(".style-jobs .modal-apply-webform").addClass("open");
    });

    $('.modal-apply-webform  button[name="close"]').click(function() {
      if ($(".style-jobs .modal-apply-webform").hasClass("open")) {
        $(".style-jobs .modal-apply-webform").removeClass("open");
      }
    });

    $(".path-employer .button-apply").click(function() {
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

    $(".path-employer form button").click(function() {
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

    $(".block-search input").click(function() {
      $("#block-exposedformsearch-results-al-dia-solrpage-1-2").addClass(
        "open"
      );
      $(".layout-main-wrapper.layout-container").addClass("color-mod");
    });

    

    initSlick($, Drupal);
  });
})(jQuery, Drupal);
