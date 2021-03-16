/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/scripts.js":
/*!***************************!*\
  !*** ./src/js/scripts.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scroll_magic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scroll-magic.js */ "./src/js/scroll-magic.js");
/* harmony import */ var _slick_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slick.js */ "./src/js/slick.js");



(function ($, Drupal) {
  jQuery(document).ready(function () {
    //--------- menu--------------------//
    $('.region-header #block-blockheader').click(function () {
      if ($('.region-secondary-menu').hasClass('open-menu')) {
        $('.region-secondary-menu').removeClass('open-menu');
        $('body').removeClass('open-menu');
      } else {
        $('.region-secondary-menu').addClass('open-menu');
        $('body').addClass('open-menu');
      }
    });
    $('#block-blockpreheader').click(function () {
      $('.region-secondary-menu').removeClass('open-menu');
      $('body').removeClass('open-menu');
    }); //--------puopup-- login-----------//

    $('.user-logged-in #block-loginformpopup').click(function () {
      if ($(this).hasClass('open')) {
        $(this).removeClass('open');
        $('.user-logged-in #block-al-dia-news-account-menu').removeClass('open');
      } else {
        $('.user-logged-in #block-al-dia-news-account-menu').addClass('open');
        $(this).addClass('open');
      }
    });
    $(".region-secondary-menu #block-al-dia-news-main-menu a").each(function () {
      var text = $(this).html();
      $(this).html(text.replace(/AL/g, '<br>AL'));
    }); //--------- initialization --------------------//

    if (window.matchMedia("(min-width: 768px)").matches) {
      Object(_scroll_magic_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    }

    Object(_slick_js__WEBPACK_IMPORTED_MODULE_1__["default"])($, Drupal);
  });
})(jQuery, Drupal);

/***/ }),

/***/ "./src/js/scroll-magic.js":
/*!********************************!*\
  !*** ./src/js/scroll-magic.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var initScrollMagic = function initScrollMagic() {
  // init controller
  var header = document.querySelector('.header');
  var newsInternalLeft = document.querySelector(".content-news-internal-left");
  var blockSticky = document.querySelector(".block-views-blockmore-in-this-section-news-block-1");

  if (document.body.contains(blockSticky)) {
    var getDuration = function getDuration() {
      return newsInternalLeft.offsetHeight - blockSticky.offsetHeight;
    };

    var controller = new ScrollMagic.Controller({
      /*addIndicators: true*/
    });
    var scene = new ScrollMagic.Scene({
      triggerElement: blockSticky,
      offset: "".concat(blockSticky.offsetHeight + header.offsetHeight),
      triggerHook: 1,
      duration: getDuration
    }).addTo(controller); //.addIndicators({name: "pin scene", colorEnd: "#FFFFFF"});

    if (window.matchMedia("(min-width: 992px)").matches) {
      scene.setPin(blockSticky, {
        pushFollowers: false
      });
    }

    window.addEventListener("resize", function () {
      if (window.matchMedia("(min-width: 992px)").matches) {
        scene.setPin(blockSticky, {
          pushFollowers: false
        });
      } else {
        scene.removePin(blockSticky, true);
      }
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (initScrollMagic);

/***/ }),

/***/ "./src/js/slick.js":
/*!*************************!*\
  !*** ./src/js/slick.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var initSlick = function initSlick($, Drupal) {
  var categoriesMore = document.querySelectorAll('.view-categories-sons .view-more-category .view-content');
  var settings = {
    infinite: false,
    rows: 3,
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    autoplay: false,
    dots: false,
    arrows: true,
    responsive: [{
      breakpoint: 768,
      settings: 'unslick'
    }]
  };

  if (window.matchMedia("(max-width: 768px)").matches) {
    categoriesMore.forEach(function (element) {
      return $(element).slick(settings);
    });
  }

  window.addEventListener("resize", function () {
    if (window.matchMedia("(max-width: 768px)").matches) {
      categoriesMore.forEach(function (element) {
        return $(element).slick(settings);
      });
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (initSlick);

/***/ }),

/***/ "./src/sass/styles.scss":
/*!******************************!*\
  !*** ./src/sass/styles.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!********************************************************!*\
  !*** multi ./src/js/scripts.js ./src/sass/styles.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /usr/share/nginx/html/raiz/aldianews/web/themes/custom/al_dia_news/src/js/scripts.js */"./src/js/scripts.js");
module.exports = __webpack_require__(/*! /usr/share/nginx/html/raiz/aldianews/web/themes/custom/al_dia_news/src/sass/styles.scss */"./src/sass/styles.scss");


/***/ })

/******/ });