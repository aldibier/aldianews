import "../../assets/libraries/selection-sharer/selection-sharer.css";
import SelectionSharer from "../../assets/libraries/selection-sharer/selection-sharer.js";
import initScrollMagic from "./scroll-magic";
import initSlick from "./slick.js";
import initMain from "./main.js";

(function($, Drupal) {
  const sharer = new SelectionSharer();
  sharer.setElements("p");

  jQuery(document).ready(function() {
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

    initSlick($, Drupal);
  });
})(jQuery, Drupal);
