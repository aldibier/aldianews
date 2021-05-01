import "../../assets/libraries/selection-sharer/selection-sharer.css";
import SelectionSharer from "../../assets/libraries/selection-sharer/selection-sharer.js";
import replaceToken from "./modules/replaceToken";
import initScrollMagic from "./scroll-magic";

import modify_ from '../js/modify.js';
import add_ from '../js/add.js';
import delete_ from '../js/delete.js';
import modal_ from '../js/modals.js';
import initSlick from "./slick.js";
import app from "./app.js";
import behaviors from "./behaviors.js";
import dropdown_ from "./dropdown.js";

(function($, Drupal) {
window.onload = () => {

  //init 
  modify_();
  add_();
  delete_();
  modal_();
  dropdown_();
  initSlick($, Drupal);
  app($, Drupal);
  behaviors($, Drupal);

   // Scroll magic
  if (window.matchMedia("(min-width: 992px)").matches) {
    initScrollMagic($, Drupal);
  }

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

  // Regresar comentarios
  Array.from(document.querySelectorAll(".cbutton-back")).map(function (e) {
    if (e != null) {
      e.addEventListener("click", () => {
        window.history.back();
      });
    }
  });

  //Click para modal en comentarios
  Array.from(
    document.querySelectorAll(".comment-forbidden a:nth-child(1)")
  ).map(function (e) {
    if (e != null) {
      var button_login = document.querySelector(
        '.Login-Register-popup-link.Login-Register-popup-link a[href*="login"]'
      );
      e.addEventListener("click", () => {
        button_login.click();
      });
    }
  });

  //Click para modal en comentarios
  Array.from(
    document.querySelectorAll(".comment-forbidden a:nth-child(2)")
  ).map(function (e) {
    if (e != null) {
      var button_regis = document.querySelector(
        '.Login-Register-popup-link.Login-Register-popup-link a[href*="register"]'
      );
      e.addEventListener("click", () => {
        button_regis.click();
      });
    }
  })
}
})(jQuery, Drupal);
