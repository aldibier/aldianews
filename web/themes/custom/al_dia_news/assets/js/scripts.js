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

/***/ "./assets/libraries/selection-sharer/selection-sharer.css":
/*!****************************************************************!*\
  !*** ./assets/libraries/selection-sharer/selection-sharer.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/postcss-loader/src??ref--6-2!./selection-sharer.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./assets/libraries/selection-sharer/selection-sharer.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./assets/libraries/selection-sharer/selection-sharer.js":
/*!***************************************************************!*\
  !*** ./assets/libraries/selection-sharer/selection-sharer.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/*
 * selection-sharer: Medium like popover menu to share on Twitter or by email any text selected on the page
 *
 * -- Requires jQuery --
 * -- AMD compatible  --
 *
 * Author: Xavier Damman (@xdamman)
 * GIT: https://github.com/xdamman/share-selection
 * MIT License
 */
(function ($) {
  function attachClickHandlers(parentElement, handlers) {
    if (handlers && handlers.length < 0) {
      return;
    }

    handlers.forEach(function (h) {
      parentElement.find(h.query).click(h.action);
    });
  }

  function swapParaWithNewline(string) {
    return string.replace(/<p[^>]*>/gi, '\n').replace(/<\/p>| {2}/gi, '').trim();
  }

  function getURL2Share() {
    var ogpURL = $('meta[property="og:url"]').attr('content') || $('meta[property="og:url"]').attr('value');
    var currLocation = window.location.href;

    if (currLocation !== ogpURL) {
      return currLocation;
    }

    return ogpURL;
  }

  var SelectionSharer = function SelectionSharer(options) {
    var self = this;
    options = options || {};

    if (typeof options == 'string') {
      options = {
        elements: options
      };
    }

    this.sel = null;
    this.textSelection = '';
    this.htmlSelection = '';
    this.optionalShare = ['telegram'];
    this.url2share = getURL2Share();
    this.appId = $('meta[property="fb:app_id"]').attr('content') || $('meta[property="fb:app_id"]').attr('value');

    this.updateURL2Share = function () {
      this.url2share = getURL2Share();
    };

    this.getSelectionText = function (sel) {
      var html = '',
          text = '';
      sel = sel || window.getSelection();

      if (sel.rangeCount) {
        var container = document.createElement('div');

        for (var i = 0, len = sel.rangeCount; i < len; ++i) {
          container.appendChild(sel.getRangeAt(i).cloneContents());
        }

        text = container.textContent;
        html = container.innerHTML;
      }

      self.textSelection = text;
      self.htmlSelection = html || text;
      return text;
    };

    this.selectionDirection = function (selection) {
      var sel = selection || window.getSelection();
      var range = document.createRange();
      if (!sel.anchorNode) return 0;
      range.setStart(sel.anchorNode, sel.anchorOffset);
      range.setEnd(sel.focusNode, sel.focusOffset);
      var direction = range.collapsed ? 'backward' : 'forward';
      range.detach();
      return direction;
    };

    this.showPopunder = function () {
      self.popunder = self.popunder || document.getElementById('selectionSharerPopunder');
      var sel = window.getSelection();
      var selection = self.getSelectionText(sel);

      if (sel.isCollapsed || selection.length < 10 || !selection.match(/ /)) {
        return self.hidePopunder();
      }

      if (self.popunder.classList.contains('fixed')) {
        self.popunder.style.bottom = 0;
        return self.popunder.style.bottom;
      }

      var range = sel.getRangeAt(0);
      var node = range.endContainer.parentNode; // The <p> where the selection ends
      // If the popunder is currently displayed

      if (self.popunder.classList.contains('show')) {
        // If the popunder is already at the right place, we do nothing
        if (Math.ceil(self.popunder.getBoundingClientRect().top) == Math.ceil(node.getBoundingClientRect().bottom)) return; // Otherwise, we first hide it and the we try again

        return self.hidePopunder(self.showPopunder);
      }

      if (node.nextElementSibling) {
        // We need to push down all the following siblings
        self.pushSiblings(node);
      } else {
        // We need to append a new element to push all the content below
        if (!self.placeholder) {
          self.placeholder = document.createElement('div');
          self.placeholder.className = 'selectionSharerPlaceholder';
        } // If we add a div between two <p> that have a 1em margin, the space between them
        // will become 2x 1em. So we give the placeholder a negative margin to avoid that


        var margin = window.getComputedStyle(node).marginBottom;
        self.placeholder.style.height = margin;
        self.placeholder.style.marginBottom = -2 * parseInt(margin, 10) + 'px';
        node.parentNode.insertBefore(self.placeholder);
      } // scroll offset


      var offsetTop = window.pageYOffset + node.getBoundingClientRect().bottom;
      self.popunder.style.top = Math.ceil(offsetTop) + 'px';
      setTimeout(function () {
        if (self.placeholder) self.placeholder.classList.add('show');
        self.popunder.classList.add('show');
      }, 0);
    };

    this.pushSiblings = function (el) {
      while (el = el.nextElementSibling) {
        el.classList.add('selectionSharer');
        el.classList.add('moveDown');
      }
    };

    this.hidePopunder = function (cb) {
      cb = cb || function () {};

      if (self.popunder == 'fixed') {
        self.popunder.style.bottom = '-50px';
        return cb();
      }

      self.popunder.classList.remove('show');
      if (self.placeholder) self.placeholder.classList.remove('show'); // We need to push back up all the siblings

      var el;
      var els = document.getElementsByClassName('moveDown');

      while (el = els[0]) {
        el.classList.remove('moveDown');
      } // CSS3 transition takes 0.6s


      setTimeout(function () {
        if (self.placeholder) document.body.insertBefore(self.placeholder);
        cb();
      }, 600);
    };

    this.show = function (e) {
      this.updateURL2Share();
      setTimeout(function () {
        var sel = window.getSelection();
        var selection = self.getSelectionText(sel);

        if (!sel.isCollapsed && selection && selection.length > 10 && selection.match(/ /)) {
          var range = sel.getRangeAt(0);
          var topOffset = range.getBoundingClientRect().top - 5;
          var top = topOffset + self.getPosition().y - self.$popover.height();
          var left = 0;

          if (e) {
            left = e.pageX;
          } else {
            var obj = sel.anchorNode.parentNode;
            left += obj.offsetWidth / 2;

            do {
              left += obj.offsetLeft;
            } while (obj = obj.offsetParent);
          }

          switch (self.selectionDirection(sel)) {
            case 'forward':
              left -= self.$popover.width();
              break;

            case 'backward':
              left += self.$popover.width();
              break;

            default:
              return;
          }

          self.$popover.removeClass('anim').css('top', top + 10).css('left', Math.abs(left)).show();
          setTimeout(function () {
            self.$popover.addClass('anim').css('top', top);
          }, 0);
        }
      }, 10);
    };

    this.hide = function () {
      self.$popover.hide();
    };

    this.smart_truncate = function (str, n) {
      if (!str || !str.length) return str;
      var toLong = str.length > n,
          s_ = toLong ? str.substr(0, n - 1) : str;
      s_ = toLong ? s_.substr(0, s_.lastIndexOf(' ')) : s_;
      return toLong ? s_ + '...' : s_;
    };

    this.getRelatedTwitterAccounts = function () {
      var usernames = [];
      var creator = $('meta[name="twitter:creator"]').attr('content') || $('meta[name="twitter:creator"]').attr('value');
      if (creator) usernames.push(creator); // We scrape the page to find a link to http(s)://twitter.com/username

      var anchors = document.getElementsByTagName('a');

      for (var i = 0, len = anchors.length; i < len; i++) {
        if (anchors[i].attributes.href && typeof anchors[i].attributes.href.value == 'string') {
          var matches = anchors[i].attributes.href.value.match(/^https?:\/\/twitter\.com\/([a-z0-9_]{1,20})/i);
          if (matches && matches.length > 1 && ['widgets', 'intent'].indexOf(matches[1]) == -1) usernames.push(matches[1]);
        }
      }

      if (usernames.length > 0) return usernames.join(',');else return '';
    };

    this.shareTwitter = function (e) {
      e.preventDefault();
      var text = '“' + self.smart_truncate(self.textSelection.trim(), 114) + '”';
      var url = 'http://twitter.com/intent/tweet?text=' + encodeURIComponent(text) + '&related=' + self.getRelatedTwitterAccounts() + '&url=' + encodeURIComponent(self.url2share); // We only show the via @twitter:site if we have enough room

      if (self.viaTwitterAccount && text.length < 120 - 6 - self.viaTwitterAccount.length) url += '&via=' + self.viaTwitterAccount;
      var w = 640,
          h = 440;
      var left = screen.width / 2 - w / 2;
      var top = screen.height / 2 - h / 2 - 100;
      window.open(url, 'share_twitter', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
      self.hide();
      return false;
    };

    this.shareWhatsapp = function (e) {
      e.preventDefault();
      var text = '“' + self.smart_truncate(self.textSelection.trim(), 114) + '”';
      var url = 'https://api.whatsapp.com/send?text=' + encodeURIComponent(self.url2share) + '&text=' + encodeURIComponent(text);
      var w = 640,
          h = 440;
      var left = screen.width / 2 - w / 2;
      var top = screen.height / 2 - h / 2 - 100;
      window.open(url, 'share_whatsapp', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
    };

    this.shareFacebook = function (e) {
      e.preventDefault();
      var text = swapParaWithNewline(self.htmlSelection);
      var url = 'https://www.facebook.com/sharer/sharer.php?quote=' + encodeURIComponent(text) + '&u=' + encodeURIComponent(self.url2share);
      var w = 640,
          h = 440;
      var left = screen.width / 2 - w / 2;
      var top = screen.height / 2 - h / 2 - 100;
      window.open(url, 'share_facebook', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
    };

    this.shareLinkedIn = function (e) {
      e.preventDefault();
      var text = swapParaWithNewline(self.htmlSelection);
      var url = 'https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(self.url2share) + '&title=' + encodeURIComponent(text);
      var w = 640,
          h = 440;
      var left = screen.width / 2 - w / 2;
      var top = screen.height / 2 - h / 2 - 100;
      window.open(url, 'share_linkedin', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
    };

    this.shareReddit = function (e) {
      e.preventDefault();
      var text = swapParaWithNewline(self.htmlSelection);
      var url = 'https://www.reddit.com/submit?text=' + encodeURIComponent(self.url2share) + '&title=' + encodeURIComponent(text);
      var w = 640,
          h = 440;
      var left = screen.width / 2 - w / 2;
      var top = screen.height / 2 - h / 2 - 100;
      window.open(url, 'share_reddit', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
    };

    this.shareTelegram = function (e) {
      e.preventDefault();
      var text = swapParaWithNewline(self.htmlSelection);
      var url = 'https://www.telegram.me/share/share/?url=' + encodeURIComponent(self.url2share) + '&text=' + encodeURIComponent(text);
      var w = 640,
          h = 440;
      var left = screen.width / 2 - w / 2;
      var top = screen.height / 2 - h / 2 - 100;
      window.open(url, 'share_telegram', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
    };

    this.shareEmail = function () {
      var text = swapParaWithNewline(self.textSelection);
      var email = {};
      email.subject = encodeURIComponent('Quote from ' + document.title);
      email.body = encodeURIComponent('“' + text + '”') + '%0D%0A%0D%0AFrom: ' + document.title + '%0D%0A' + window.location.href;
      $(this).attr('href', 'mailto:?subject=' + email.subject + '&body=' + email.body);
      self.hide();
      return true;
    };

    this.render = function () {
      var getIconHTML = function getIconHTML(name) {
        var nameCapitalized = name.charAt(0).toUpperCase() + name.substring(1);
        return '<li><a class="action ' + name + '" href="" title="Share this selection on ' + nameCapitalized + '" target="_blank">' + nameCapitalized + '</a></li>';
      };

      var shareServices = {
        telegram: {
          icon: getIconHTML('telegram'),
          query: 'a.telegram',
          action: this.shareTelegram
        },
        whatsapp: {
          icon: getIconHTML('whatsapp'),
          query: 'a.whatsapp',
          action: this.shareWhatsapp
        }
      };
      var pickedServices = this.optionalShare.map(function (s) {
        return shareServices[s];
      });
      var pickedShareIcons = pickedServices.reduce(function (acc, p) {
        return acc.concat(p.icon).concat('\n');
      }, '');
      var shareIcons = '    <ul>' + '      <li class="ltweet"><a class="action tweet" href="" title="Share this selection on Twitter" target="_blank">Tweet</a></li>' + '      <li class="lfacebook"><a class="action facebook" href="" title="Share this selection on Facebook" target="_blank">Facebook</a></li>' + '      <li class="llinkedin"><a class="action linkedin" href="" title="Share this selection on LinkedIn" target="_blank">LinkedIn</a></li>' + '      <li class="lwst"><a class="action whatsapp" href="" title="Share this selection on Whatsapp" target="_blank">Whatsapp</a></li>' + '      <li class="lreddit"><a class="action reddit" href="" title="Share this selection on Reddit" target="_blank">Reddit</a></li>' + // pickedShareIcons +
      '      <li class="lemail"><a class="action email" href="" title="Share this selection by email" target="_blank"><svg width="20" height="20"><path stroke="%23FFF" stroke-width="6" d="m16,25h82v60H16zl37,37q4,3 8,0l37-37M16,85l30-30m22,0 30,30"/></svg></a></li>' + '    </ul>' + '  </div>';
      var popoverHTML = '<div class="selectionSharer" id="selectionSharerPopover" style="position:absolute;">' + '  <div id="selectionSharerPopover-inner">' + shareIcons + '  <div class="selectionSharerPopover-clip"><span class="selectionSharerPopover-arrow"></span></div>' + '</div>';
      var popunderHTML = '<div id="selectionSharerPopunder" class="selectionSharer">' + '  <div id="selectionSharerPopunder-inner">' + shareIcons + '  </div>' + '</div>';
      self.$popover = $(popoverHTML);
      self.$popunder = $(popunderHTML);
      var pickedHandlers = pickedServices.map(function (p) {
        return {
          query: p.query,
          action: p.action
        };
      });
      self.attachHandlers([self.$popover, self.$popunder], [{
        query: 'a.tweet',
        action: self.shareTwitter
      }, {
        query: 'a.facebook',
        action: self.shareFacebook
      }, {
        query: 'a.linkedin',
        action: self.shareLinkedIn
      }, {
        query: 'a.reddit',
        action: self.shareReddit
      }, {
        query: 'a.whatsapp',
        action: self.shareWhatsapp
      }, {
        query: 'a.email',
        action: self.shareEmail
      }].concat(pickedHandlers));
      $('body').append(self.$popover);
      $('body').append(self.$popunder);

      if (self.appId && self.url2share) {
        $('.selectionSharer a.facebook').css('display', 'inline-block');
      }
    };

    this.attachHandlers = function (parents, queryHandlers) {
      if (parents && parents.length < 0) {
        return;
      }

      parents.forEach(function (p) {
        attachClickHandlers(p, queryHandlers);
      });
    };

    this.setElements = function (elements) {
      if (typeof elements == 'string') elements = $(elements);
      self.$elements = elements instanceof $ ? elements : $(elements);
      self.$elements.mouseup(self.show.bind(this)).mousedown(self.hide).addClass('selectionShareable');
      self.$elements.bind('touchstart', function () {
        self.isMobile = true;
      });
      document.onselectionchange = self.selectionChanged;
    };

    this.selectionChanged = function (e) {
      if (!self.isMobile) return;

      if (self.lastSelectionChanged) {
        clearTimeout(self.lastSelectionChanged);
      }

      self.lastSelectionChanged = setTimeout(function () {
        self.showPopunder(e);
      }, 300);
    };

    this.getPosition = function () {
      var supportPageOffset = window.pageXOffset !== undefined;
      var isCSS1Compat = (document.compatMode || '') === 'CSS1Compat';
      var x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft;
      var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
      return {
        x: x,
        y: y
      };
    };

    this.render();

    if (options.elements) {
      this.setElements(options.elements);
    }
  }; // jQuery plugin
  // Usage: $( "p" ).selectionSharer();


  $.fn.selectionSharer = function () {
    var sharer = new SelectionSharer();
    sharer.setElements(this);
    return this;
  }; // For AMD / requirejs
  // Usage: require(["selection-sharer!"]);
  //     or require(["selection-sharer"], function(selectionSharer) { var sharer = new SelectionSharer('p'); });


  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      SelectionSharer.load = function (name, req, onLoad) {
        var sharer = new SelectionSharer();
        sharer.setElements('p');
        onLoad();
      };

      return SelectionSharer;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(jQuery);

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./assets/libraries/selection-sharer/selection-sharer.css":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./assets/libraries/selection-sharer/selection-sharer.css ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@-webkit-keyframes selectionSharerPopover-animation{0%{transform:matrix(.97,0,0,1,0,12);opacity:0}20%{transform:matrix(.99,0,0,1,0,2);opacity:.7}40%{transform:matrix(1,0,0,1,0,-1);opacity:1}100%,70%{transform:matrix(1,0,0,1,0,0);opacity:1}}@keyframes selectionSharerPopover-animation{0%{transform:matrix(.97,0,0,1,0,12);opacity:0}20%{transform:matrix(.99,0,0,1,0,2);opacity:.7}40%{transform:matrix(1,0,0,1,0,-1);opacity:1}100%,70%{transform:matrix(1,0,0,1,0,0);opacity:1}}#selectionSharerPopover{display:none;position:absolute;top:-100px;left:-100px;z-index:1}#selectionSharerPopover::after{content:'';display:block;position:absolute;bottom:-3px;left:50%;margin-left:-4px;width:8px;height:8px;transform:rotate(45deg);background:#262625;box-shadow:0 0 2px #262625}#selectionSharerPopover.anim{transition:top 75ms ease-out;animation:selectionSharerPopover-animation 180ms forwards linear;-webkit-animation:selectionSharerPopover-animation 180ms forwards linear}#selectionSharerPopover-inner{position:relative;overflow:hidden;border-radius:5px;border:1px solid;border-color:#262625 #1c1c1b #121211;box-shadow:0 1px 3px -1px rgba(0,0,0,.7),inset 0 0 1px rgba(255,255,255,.07),inset 0 0 2px rgba(255,255,255,.15);background-image:linear-gradient(to bottom,rgba(49,49,47,.97),#262625);background-repeat:repeat-x}#selectionSharerPopover .selectionSharerPopover-clip{position:absolute;bottom:-11px;display:block;left:50%;clip:rect(12px 24px 24px 0);margin-left:-12px;width:24px;height:24px;line-height:24px}#selectionSharerPopover .selectionSharerPopover-arrow{display:block;width:20px;height:20px;transform:rotate(45deg) scale(.5);background-color:#454543;border:2px solid #121211;box-sizing:content-box}.selectionSharer ul{padding:0;display:inline}.selectionSharer ul li{float:left;list-style:none;background:0 0;margin:0}.selectionSharer a.action{display:block;text-indent:-200px;margin:5px 7px;width:20px;height:20px;border:0}.selectionSharer a:hover{color:#ccc}.selectionSharer a.tweet{background:url(\"data:image/svg+xml;charset=utf8,%3csvg xmlns='http://www.w3.org/2000/svg' width='171' height='139'%3e%3cg transform='translate(-282.32053,-396.30734)'%3e%3cpath style='fill:white' d='m 453.82593,412.80619 c -6.3097,2.79897 -13.09189,4.68982 -20.20852,5.54049 7.26413,-4.35454 12.84406,-11.24992 15.47067,-19.46675 -6.79934,4.03295 -14.3293,6.96055 -22.34461,8.53841 -6.41775,-6.83879 -15.56243,-11.111 -25.68298,-11.111 -19.43159,0 -35.18696,15.75365 -35.18696,35.18525 0,2.75781 0.31128,5.44359 0.91155,8.01875 -29.24344,-1.46723 -55.16995,-15.47582 -72.52461,-36.76396 -3.02879,5.19662 -4.76443,11.24048 -4.76443,17.6891 0,12.20777 6.21194,22.97747 15.65332,29.28716 -5.76773,-0.18265 -11.19331,-1.76565 -15.93716,-4.40083 -0.004,0.14663 -0.004,0.29412 -0.004,0.44248 0,17.04767 12.12889,31.26806 28.22555,34.50266 -2.95247,0.80436 -6.06101,1.23398 -9.26989,1.23398 -2.2673,0 -4.47114,-0.22124 -6.62011,-0.63114 4.47801,13.97857 17.47214,24.15143 32.86992,24.43441 -12.04227,9.43796 -27.21366,15.06335 -43.69965,15.06335 -2.84014,0 -5.64082,-0.16722 -8.39349,-0.49223 15.57186,9.98421 34.06703,15.8094 53.93768,15.8094 64.72024,0 100.11301,-53.61524 100.11301,-100.11387 0,-1.52554 -0.0343,-3.04251 -0.10204,-4.55261 6.87394,-4.95995 12.83891,-11.15646 17.55618,-18.21305 z' /%3e%3c/g%3e%3c/svg%3e\") no-repeat;background-size:18px;background-position:2px 4px}.selectionSharer a.facebook{background:url(\"data:image/svg+xml;charset=utf8,%3csvg viewBox='0 0 33 33' width='25' height='25' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cg%3e%3cpath style='fill:white' d='M 17.996,32L 12,32 L 12,16 l-4,0 l0-5.514 l 4-0.002l-0.006-3.248C 11.993,2.737, 13.213,0, 18.512,0l 4.412,0 l0,5.515 l-2.757,0 c-2.063,0-2.163,0.77-2.163,2.209l-0.008,2.76l 4.959,0 l-0.585,5.514L 18,16L 17.996,32z'%3e%3c/path%3e%3c/g%3e%3c/svg%3e\") no-repeat;background-size:18px;background-position:0 2px;display:none}.selectionSharer a.linkedin{background:url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"300px\" height=\"300px\" viewBox=\"0 0 300 300\" enable-background=\"new 0 0 300 300\" xml:space=\"preserve\"><g transform=\"translate(0.000000,300.000000) scale(0.100000,-0.100000)\"><path fill=\"white\" d=\"M343.999,2812.002C222.998,2770,155,2672.002,155,2540c0-62.002,5-85,27.998-132.998 c108.003-219.004,459.004-206.001,560,21.997c16.001,36.001,18.003,60,15,125c-5,97.002-27.998,146.001-91.997,203.003 C586.001,2827.002,453.999,2850,343.999,2812.002z\"/> <path fill=\"white\" d=\"M2035.996,2052.998c-150.996-31.997-257.998-92.998-365-210l-68.994-75l-7.002,79.004 c-5,42.998-10.996,100.996-14.004,127.998l-5.996,50l-253.999,2.998L1067.998,2030l6.001-62.002c3.003-35,8.999-452.998,12.002-930 L1092.998,170h288.003H1670l2.002,597.998C1675,1365,1675,1365,1697.998,1410.996c34.004,70,87.002,125.005,150,156.006 c75,36.997,192.998,38.999,257.998,5c59.004-31.001,111.006-95,137.002-172.002c21.006-64.004,22.002-77.002,25-647.002 L2270.996,170h290h290l-3.994,642.998c-2.998,547.998-6.006,652.002-20,707.002c-42.998,172.998-97.002,280-187.998,371.001 C2494.004,2037.998,2257.002,2101.001,2035.996,2052.998z\"/><path fill=\"white\" d=\"M167.002,2022.998c-4.004-2.998-7.002-421.997-7.002-930V170h295h295l-2.002,927.998L745,2025 l-286.001,2.998C302.002,2028.999,171.001,2027.002,167.002,2022.998z\"/></g></svg>') 2px 4px/18px no-repeat;background-size:18px;background-position:0 2px}.selectionSharer a.telegram{background:url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path style=\"fill:white\" d=\"M22.05 1.577c-.393-.016-.784.08-1.117.235-.484.186-4.92 1.902-9.41 3.64-2.26.873-4.518 1.746-6.256 2.415-1.737.67-3.045 1.168-3.114 1.192-.46.16-1.082.362-1.61.984-.133.155-.267.354-.335.628s-.038.622.095.895c.265.547.714.773 1.244.976 1.76.564 3.58 1.102 5.087 1.608.556 1.96 1.09 3.927 1.618 5.89.174.394.553.54.944.544l-.002.02s.307.03.606-.042c.3-.07.677-.244 1.02-.565.377-.354 1.4-1.36 1.98-1.928l4.37 3.226.035.02s.484.34 1.192.388c.354.024.82-.044 1.22-.337.403-.294.67-.767.795-1.307.374-1.63 2.853-13.427 3.276-15.38l-.012.046c.296-1.1.187-2.108-.496-2.705-.342-.297-.736-.427-1.13-.444zm-.118 1.874c.027.025.025.025.002.027-.007-.002.08.118-.09.755l-.007.024-.005.022c-.432 1.997-2.936 13.9-3.27 15.356-.046.196-.065.182-.054.17-.1-.015-.285-.094-.3-.1l-7.48-5.525c2.562-2.467 5.182-4.7 7.827-7.08.468-.235.39-.96-.17-.972-.594.14-1.095.567-1.64.84-3.132 1.858-6.332 3.492-9.43 5.406-1.59-.553-3.177-1.012-4.643-1.467 1.272-.51 2.283-.886 3.278-1.27 1.738-.67 3.996-1.54 6.256-2.415 4.522-1.748 9.07-3.51 9.465-3.662l.032-.013.03-.013c.11-.05.173-.055.202-.057 0 0-.01-.033-.002-.026zM10.02 16.016l1.234.912c-.532.52-1.035 1.01-1.398 1.36z\" color=\"white\" /></svg>') no-repeat;background-size:18px;background-position:0 2px}.selectionSharer a.email{background:url(\"data:image/svg+xml;charset=utf8,%3csvg xmlns='http://www.w3.org/2000/svg' width='94' height='64'%3e%3cg transform='translate(-10, -10)' fill='transparent'%3e%3crect x='0' y='0' width='114' height='114'%3e%3c/rect%3e%3cpath d='M12,12 L102,12 L102,72 L12,72 L12,12 Z M16,12 L53,49 C55.6666667,51 58.3333333,51 61,49 L98,12 L16,12 Z M15,72 L45,42 L15,72 Z M69,42 L99,72 L69,42 Z' stroke='white' stroke-width='5'%3e%3c/path%3e%3c/g%3e%3c/svg%3e\") no-repeat;background-size:20px;background-position:0 4px}#selectionSharerPopunder.fixed{transition:bottom .5s ease-in-out;width:100%;position:fixed;left:0;bottom:-50px}.selectionSharer{}.selectionSharer.moveDown{-webkit-transform:translate3d(0,60px,0)}#selectionSharerPopunder{position:absolute;left:0;width:100%;height:0;transition:height .5s ease-in-out;background:#ccc;border:0;box-shadow:inset 0 10px 5px -10px rgba(0,0,0,.5),inset 0 -10px 5px -10px rgba(0,0,0,.5);border-radius:0;overflow:hidden}#selectionSharerPopunder.show{height:50px}.selectionSharerPlaceholder{height:1em;margin-bottom:-2em;transition:height .5s ease-in-out}.selectionSharerPlaceholder.show{height:50px!important}#selectionSharerPopunder-inner ul{overflow:hidden;margin:0;display:inline}#selectionSharerPopunder-inner ul li{padding:5px;overflow:hidden}#selectionSharerPopunder-inner label{color:#fff;font-weight:300;line-height:50px;margin:0 20px 0 10px}#selectionSharerPopunder-inner a{width:30px;height:30px;background-size:30px}#selectionSharerPopunder-inner a.tweet{background-position:0 2px}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var initMain = function initMain($, Drupal) {
  // js requeridos en register
  var city_input = document.querySelector('.webform-submission-register-form #edit-address-city');
  var city_label = document.querySelector('.webform-submission-register-form label[for="edit-address-city"]');
  var state_select = document.querySelector('.webform-submission-register-form #edit-address-state-province');
  var state_label = document.querySelector('.webform-submission-register-form label[for="edit-address-state-province"]');

  if (!!city_input && !!city_label && !!state_select && !!state_label) {
    city_input.setAttribute("required", "required");
    city_label.setAttribute("class", "form-required");
    state_select.setAttribute("required", "required");
    state_label.setAttribute("class", "form-required");
  } /// js scroll newsletter


  var container = document.querySelector('body');
  var elemento = document.getElementById('block-webform-2'); /// js newsletter

  var newsletter = document.querySelector('.newsletter'); /// close 

  if (!!document.querySelector('.newsletter .close-modal')) {
    var closeNewsletter = document.querySelector('.newsletter .close-modal');
    closeNewsletter.addEventListener('click', function () {
      newsletter.remove();

      if (!!document.querySelector('#video-container')) {
        document.querySelector('#video-container').classList.add('not-newsletter');
      }
    }, {
      once: true
    });
  } ///// js para caption en imagenes news


  if (!!document.querySelector(".page-node-type-news .block-field-blocknodenewsbody img")) {
    var images = document.querySelectorAll(".page-node-type-news .block-field-blocknodenewsbody img");
    images.forEach(function (img) {
      var caption = img.dataset.caption;
      if (typeof caption === 'undefined') return;
      img.insertAdjacentHTML("afterend", "<p class=\"image-caption\">".concat(caption, "</p>"));
    });
  } // blockquote para selection-sharer


  var allBlockquote = document.querySelectorAll('blockquote:not([class*="twitter"])');

  if (!!allBlockquote && allBlockquote.length) {
    allBlockquote.forEach(function (blockquote) {
      if (blockquote.firstElementChild.tagName === "P") {
        var text = blockquote.firstElementChild.textContent;
        blockquote.textContent = text;
      }
    });
  } //text summary para selection-sharer


  var containerSummary = document.querySelector(".content-news-internal-first .views-element-container");

  if (!!containerSummary) {
    var summary = containerSummary.querySelector(".summary-news");

    if (!!summary) {
      containerSummary.insertAdjacentElement("beforebegin", summary);
    }
  } // js video en interna


  var video_interna = document.querySelector(".block-field-blocknodenewsfield-video");
  var contenido_interna = document.querySelector(".content-news-internal-first");

  if (video_interna != null && contenido_interna != null) {
    contenido_interna.classList.add("video-present");
  } //add dots date events time


  if (!!document.querySelector(".card-event-date-hour")) {
    var timeMainEvent = document.querySelector(".card-event-date-hour");
    var time = timeMainEvent.innerText;
    var timetLength = time.length;
    timeMainEvent.innerText = "".concat(time.substring(0, timetLength - 1), ".").concat(time.substring(timetLength - 1), ".");
  } //add dots date comments


  if (!!document.querySelector(".comment--type-comments-content")) {
    var commentsDate = document.querySelectorAll(".comment--type-comments-content .field--name-comment-post-date");
    commentsDate.forEach(function (date) {
      var dateTxt = date.innerText;
      date.innerText = "".concat(dateTxt.substring(0, dateTxt.length - 3), " ").concat(dateTxt.charAt(dateTxt.length - 2), ".").concat(dateTxt.charAt(dateTxt.length - 1));
    });
  } //// js ajuste ancla en employed


  Array.from(document.querySelectorAll(".menu--i-am-an-employer-menu li a")).map(function (e) {
    e.addEventListener("click", function () {
      setTimeout(function () {
        var scroll_y = window.scrollY;
        window.scrollTo(0, scroll_y - 173);
      }, 20);
    });
  }); //// js validador de publicidad en landing jobs

  var block_ads = document.querySelector(".block-block-groupgroup-career-news-jobs .block-fixed-block-contentbig-vertical-advertising iframe");
  var view_career = document.querySelector(".block-views-blockcareer-news-block-1");

  if (block_ads === null && view_career != null) {
    view_career.classList.add("view-complete");
  } /// js boton back


  Array.from(document.querySelectorAll(".button-back")).map(function (e) {
    if (e != null) {
      e.addEventListener("click", function () {
        e.click();
        window.history.back();
      });
    }
  }); /// js login and register

  Array.from(document.querySelectorAll(".comment-forbidden a")).map(function (e) {
    if (e != null) {
      e.removeAttribute("href");
    }
  });
  Array.from(document.querySelectorAll(".comment-forbidden a:nth-child(1)")).map(function (e) {
    if (e != null) {
      var button_login = document.querySelector('.Login-Register-popup-link.Login-Register-popup-link a[href*="login"]');
      e.addEventListener("click", function () {
        button_login.click();
      });
    }
  });
  Array.from(document.querySelectorAll(".comment-forbidden a:nth-child(2)")).map(function (e) {
    if (e != null) {
      var button_regis = document.querySelector('.Login-Register-popup-link.Login-Register-popup-link a[href*="register"]');
      e.addEventListener("click", function () {
        button_regis.click();
      });
    }
  }); //// js modal landing videos

  if (!!document.querySelector(".path-videos")) {
    var resetIframe = function resetIframe(element) {
      if (!!element) {
        var iframe = element.querySelector('iframe');

        if (iframe.src.indexOf('?') > 0) {
          var srcEdit = iframe.src.split('?');
          iframe.src = "".concat(srcEdit[0], "?start=0&rel=0");
        } else {
          iframe.src = iframe.src;
        }

        iframe.classList.add("change-src");
        setTimeout(function () {
          return iframe.classList.remove("change-src");
        }, 800);
      }
    };

    document.body.addEventListener("click", function (event) {
      if (event.target.classList.contains('card-one-column')) {
        var _container = event.target.parentNode;
        var currentElement = event.target;
        var node = _container.firstElementChild;

        while (node) {
          if (node.classList.contains('.banner-scroll')) continue;
          if (event.target.closest(".modal-video")) return;

          if (node != currentElement && node.nodeType === Node.ELEMENT_NODE) {
            resetIframe(node);
            if (node.querySelector(".modal-video")) node.querySelector(".modal-video").classList.remove("show");
          } else {
            resetIframe(node);
            node.querySelector(".modal-video").classList.toggle("show");
          }

          node = node.nextElementSibling;
        }
      }

      var contentActive = event.target.closest(".card-one-column") || false;

      if (!contentActive && !!document.querySelector(".modal-video.show")) {
        var currentVideo = document.querySelector(".modal-video.show");
        var parentVideo = currentVideo.closest('.card-one-column') || false;
        document.querySelector(".modal-video.show").classList.remove("show");
        resetIframe(parentVideo);
      }

      if (event.target.classList.contains("close-video")) {
        var _currentVideo = document.querySelector(".modal-video.show");

        var _parentVideo = _currentVideo.closest('.card-one-column') || false;

        _currentVideo.classList.remove("show");

        resetIframe(_parentVideo);
      }
    });
  } //// js para slider de video en landing de video


  var itemsCarousel = document.querySelectorAll('.block-views-blockcarousel-videos-landing-block-2 .views-row');
  var itemsNews = document.querySelectorAll('.view-id-carousel_videos_landing.view-display-id-page_1 .views-row');
  var allIframes = document.querySelectorAll(".view-id-carousel_videos_landing.view-display-id-page_1  iframe");

  var resetAlliframes = function resetAlliframes(iframes) {
    iframes.forEach(function (iframe) {
      iframe.classList.add("change-src");

      if (iframe.src.indexOf('?') > 0) {
        var srcEdit = iframe.src.split('?');
        iframe.src = "".concat(srcEdit[0], "?start=0&rel=0");
      } else {
        iframe.src = iframe.src;
      }

      iframe.src = iframe.src;
      setTimeout(function () {
        return iframe.classList.remove("change-src");
      }, 800);
    });
  };

  var removeActiveElements = function removeActiveElements() {
    var list = document.querySelectorAll('.block-views-blockcarousel-videos-landing-block-2 .views-row');
    list.forEach(function (item) {
      if (item.classList.contains('active')) item.classList.remove('active');
    });
  };

  var toggleVideo = function toggleVideo(nid, list) {
    list.forEach(function (item) {
      var videoNid = item.dataset.nid;
      if (nid != videoNid) item.classList.remove('active');
      if (nid == videoNid) item.classList.add('active');
    });
  };

  if (document.body.classList.contains('path-videos')) {
    document.body.addEventListener('click', function (event) {
      var target = event.target;

      if (target.classList.contains('slick-slide')) {
        var nid = target.dataset.nid;
        var hasActive = target.parentElement.querySelector('.active');
        var activeNid = !!hasActive ? hasActive.dataset.nid : false;
        if (nid === activeNid) return;
        resetAlliframes(allIframes);
        removeActiveElements();
        target.classList.add('active');
        toggleVideo(nid, itemsNews);
      }
    });
  } // itemsCarousel.forEach(item => {
  //   item.addEventListener('click', () => {
  //     let nid = item.dataset.nid;
  //     let hasActive = item.parentElement.querySelector('.active');
  //     let activeNid = !!hasActive ? hasActive.dataset.nid : false;
  //     if (nid === activeNid) return;
  //     resetAlliframes(allIframes);
  //     removeActiveElements();
  //     item.classList.add('active');
  //     toggleVideo(nid, itemsNews);
  //   })
  // })
  //// js para controlar pop-up advertising


  if (!!document.querySelector(".path-advertising")) {
    var allButtonsApply = document.querySelectorAll(".button-apply");
    var allButtonsClose = document.querySelectorAll(".close-modal");

    var showModal = function showModal(event) {
      var parent = event.path.find(function (elementPath) {
        return elementPath.classList.contains("advertising-card");
      });
      var form = parent.querySelector(".modal-form");
      form.classList.add("show");
    };

    var hideModal = function hideModal(event) {
      var form = event.path.find(function (elementPath) {
        return elementPath.classList.contains("modal-form");
      });
      form.classList.remove("show");
    };

    allButtonsApply.forEach(function (buttonApply) {
      return buttonApply.addEventListener("click", showModal);
    });
    allButtonsClose.forEach(function (buttonClose) {
      return buttonClose.addEventListener("click", hideModal);
    });
  }

  if (!!document.querySelector(".path-about-al-dia-live")) {
    //// js pop-up about al dia live
    var buttonApply = document.querySelector(".path-about-al-dia-live .button-apply");
    var buttonClose = document.querySelector(".webform-about-al-dia-live .close-modal");
    var modalForm = document.querySelector(".modal-form");

    if (!!document.body.contains(buttonApply)) {
      buttonApply.addEventListener("click", function () {
        return modalForm.classList.add("show");
      });
      buttonClose.addEventListener("click", function () {
        return modalForm.classList.remove("show");
      }); //// js pop-up about al dia live

      var triggerVideo = document.querySelector(".block-views-blockabout-al-dia-live-block-1 .about-al-dia-live-container-video");
      var buttonCloseVideo = document.querySelector(".close-video");
      var video = document.querySelector(".modal-video");
      var iframe = document.querySelector('.about-al-dia-live-container-video iframe'); //reset src iframe

      if (!!iframe) {
        if (iframe.src.indexOf('?') > 0) {
          var srcEdit = iframe.src.split('?');
          iframe.src = "".concat(srcEdit[0], "?start=0&rel=0");
        }
      }

      if (!!triggerVideo) {
        triggerVideo.addEventListener("click", function () {
          video.classList.add("show");
        });
      }

      if (!!buttonCloseVideo) {
        buttonCloseVideo.addEventListener("click", function (event) {
          event.stopPropagation();
          video.classList.remove("show");
          iframe.src = iframe.src;
        });
      }
    }
  } //// js desplegable buscador y close modal


  var arrow = document.querySelector(".path-search-results .arrow");
  var blocks_search = document.querySelector("#block-exposedformsearch-results-al-dia-solrpage-1");

  if (arrow != null && blocks_search != null) {
    arrow.addEventListener("click", function () {
      blocks_search.classList.toggle("open");
      arrow.classList.toggle("rote");
    });
  }

  var close = document.querySelector('#block-exposedformsearch-results-al-dia-solrpage-1-2  button[name="close"]');

  if (!!close) {
    close.addEventListener("click", function () {
      if (close != null && close.parentElement.classList.contains("open")) {
        close.parentElement.classList.remove("open");
      }
    });
  } // js bloque login en comentarios


  var comments = document.querySelector(".block-field-blocknodenewsfield-comments .comment");
  var block_login_c = document.querySelector("#block-blockcommentanonymous");

  if (comments != null && block_login_c != null) {
    block_login_c.style.display = "none";
  } // bloque vacio en home


  var width_b = window.innerWidth;

  if (width_b <= 768) {
    Array.from(document.querySelectorAll(".view-more-category")).map(function (e) {
      if (e !== null && e.children.length === 2) {
        /* e.closest(".views-field.views-field-view-2").style.display = "none";
        e.closest(".mobile-free").style.border = "0px"; */
      }
    });
  } ///// js para select de categorias, subcategorias y subsubcategorias


  Array.from(document.querySelectorAll("#views-exposed-form-search-results-al-dia-solr-page-1 .form-item-field-category li label")).map(function (e) {
    if (e != null && !e.innerHTML.includes("-")) {
      e.classList.add("category");
    }
  }); //// publicidad horizontal cada 6 en more covers

  Array.from(document.querySelectorAll(".block-fixed-block-contenthorizontal-advertising")).map(function (e) {
    if (e != null) {
      Array.from(document.querySelectorAll(".view-more-covers-landing  .view-content .views-row:nth-child(7n)")).map(function (evt) {
        if (evt != null && !evt.nextElementSibling.classList.contains("block-fixed-block-contenthorizontal-advertising")) {
          evt.parentElement.insertBefore(e, evt);
        }
      });
    }
  }); ///// js indentificar de primer modo de vista en guest event

  var adversiting = document.querySelector(".three-content-event-advertising iframe");
  var first_element = document.querySelector(".view-block-guest  .views-row:nth-child(1) .views-field-field-style > div");

  if (adversiting != null && first_element != null) {
    if (!adversiting.closest('.section-event-wrapper')) {
      if (first_element.innerText == "one") {
        if (!!adversiting.parentElement.parentElement) adversiting.parentElement.parentElement.classList.add("maxim");
      } else {
        adversiting.classList.add("dis-none");
      }
    }
  } //js para eliminar publicidad two column events


  setTimeout(function () {
    var adversiting_two_col = document.querySelector(".view-id-block_guest .ads-two-col .block-gamw");
    var position_two_col = document.querySelector(".view-id-block_guest .mode-two");

    if (!!adversiting_two_col && !!position_two_col) {
      position_two_col.appendChild(adversiting_two_col);
      adversiting_two_col.classList.add("four-content-event-advertising", "ads");
    }
  }, 2500); //js para comment anonymous

  if (!!document.querySelector('.block-comments-anonymous')) {
    var blockAnonymus = document.querySelector('.block-comments-anonymous');
    var allTextMessage = blockAnonymus.querySelectorAll('.text-anonymous-comment');
    var login = blockAnonymus.querySelector('.login-anonymous-comment');
    var register = blockAnonymus.querySelector('.register-anonymous-comment');

    var _container2 = document.createElement('div');

    var message = document.createElement('div');

    _container2.classList.add('message-comments-container');

    message.classList.add('message-comments-links');
    message.appendChild(login);
    message.appendChild(allTextMessage[1]);
    message.appendChild(register);
    message.appendChild(allTextMessage[2]);

    _container2.appendChild(allTextMessage[0]);

    _container2.appendChild(message);

    blockAnonymus.querySelector('.content').insertAdjacentElement('afterend', _container2);
    blockAnonymus.addEventListener('click', function () {
      blockAnonymus.classList.add('show');
    }, {
      once: true
    });
  } //--------puopup-- login-----------//

  /* $(".user-logged-in #block-menuuseritem").click(function() {
  	if ($(this).hasClass("open")) {
  		$(this).removeClass("open");
  		$(".user-logged-in #block-menuuseritem .item-list").removeClass("open");
  	} else {
  		$(".user-logged-in #block-menuuseritem .item-list").addClass("open");
  		$(this).addClass("open");
  	}
  }); */

  /* var icon_menu = document.querySelector(".user-logged-in #block-menuuseritem");
  var list_menu = document.querySelector(".user-logged-in #block-menuuseritem .item-list");
  	if(!!icon_menu && !!list_menu){
  icon_menu.addEventListener('click', () => {
  	if(icon_menu.classList.contains("open")){
  		icon_menu.classList.remove("open");
  		list_menu.classList.remove("open");
  	} else{
  		list_menu.classList.add("open");
  		icon_menu.classList.add("open");
  	}
  	})
  } */


  if (!!document.querySelector(".user-logged-in #block-menuuseritem")) {
    document.querySelector(".user-logged-in #block-menuuseritem").addEventListener('click', function () {
      if (this.classList.contains('open')) {
        this.classList.remove('open');
        document.querySelector('.user-logged-in #block-menuuseritem .item-list').classList.remove('open');
      } else {
        document.querySelector('.user-logged-in #block-menuuseritem .item-list').classList.add('open');
        this.classList.add('open');
      }
    });
  } ///// js para modos de visualizacion de slider event


  Array.from(document.querySelectorAll(".view-slider-internal-event .views-field-field-slider-styl div")).map(function (e) {
    if (e != null) {
      if (e.innerText.trim() == "sone") {
        e.closest(".views-row").classList.add("slider-one");
      } else if (e.innerText.trim() == "stwo") {
        e.closest(".views-row").classList.add("slider-two");
      } else if (e.innerText.trim() == "sthree") {
        e.closest(".views-row").classList.add("slider-three");
      } else if (e.innerText.trim() == "smor") {
        e.closest(".views-row").classList.add("slider-more");
      }
    }
  }); ////// js para añadir el boton de respuesta en la lista

  Array.from(document.querySelectorAll(".al-dia-news-reply-comments input[value=REPLY]")).map(function (e) {
    var father_li = e.closest("ul").querySelector(".container-reply");

    if (!!e && !!father_li) {
      father_li.appendChild(e);
    }
  });
  Array.from(document.querySelectorAll(".al-dia-news-reply-comments input[value=RESPONDER]")).map(function (e) {
    var father_li = e.closest("ul").querySelector(".container-reply");

    if (!!e && !!father_li) {
      father_li.appendChild(e);
    }
  }); /////// js para añadir la cantidad de comentarios de respuesta 

  Array.from(document.querySelectorAll("section .comment")).map(function (e) {
    if (!e.nextElementSibling) return;

    if (!!e.nextElementSibling.classList.contains("indented")) {
      var count_children = _toConsumableArray(e.nextElementSibling.children).filter(function (ev) {
        if (ev.classList.contains("comment")) {
          return ev;
        }
      });

      e.querySelector(".container-show-hide .num").innerHTML = count_children.length;
    } else {
      e.classList.add("no-answer");
    }
  }); /////// js para añadir la cantidad de comentarios de desplegable

  Array.from(document.querySelectorAll("section .comment")).map(function (e) {
    if (!e.nextElementSibling) return;

    if (!!e.nextElementSibling.classList.contains("indented")) {
      e.querySelector(".container-show-hide").addEventListener("click", function () {
        e.querySelector(".container-show-hide").classList.toggle("active");
        e.nextElementSibling.classList.toggle("dis-block");
      });
    }
  }); /// js para dropdown podcast

  if (!!document.querySelector('.path-podcast') || !!document.querySelector('.path-taxonomy')) {
    var containerContainer = document.querySelector('.category-list');
    var buttonCategories = document.querySelector('.category-button-mobile');

    if (!!containerContainer) {
      buttonCategories.addEventListener('click', function () {
        containerContainer.classList.toggle('open');
        buttonCategories.classList.toggle('up');
      });
    }
  } // validador watchlive


  var watch_live_iframe = document.querySelector(".watch-live-video iframe");
  var watch_live_content = document.querySelector(".watch-live");

  if (watch_live_iframe == null && !!watch_live_content) {
    watch_live_content.classList.add("watch-dis-none");
  } // js para pagina premium, boton e video y comentarios


  var premium = document.querySelector(".node--view-mode-premium");

  if (!!premium) {
    premium.closest("body").classList.add("page-premium");
  }

  var video_premium = document.querySelector(".block-field-blocknodenewsfield-video.premium .close-modal");
  var content_premium = document.querySelector(".block-field-blocknodenewsfield-video.premium .content");

  if (!!video_premium && !!content_premium) {
    content_premium.prepend(video_premium);
  } // Js password strength color


  var inputPassword = document.querySelector(".form-item-pass-pass1 input");

  if (inputPassword) {
    inputPassword.addEventListener("keyup", function () {
      var LineKeyStrength = document.querySelector(".password-strength__indicator");
      var TextKeyStrength = document.querySelector(".password-strength__text");
      var colorLineKeyStrength = window.getComputedStyle(LineKeyStrength).getPropertyValue("background-color");
      TextKeyStrength.style.color = colorLineKeyStrength;
    });
  } //// js para sponsorchip budget


  var budget = document.querySelector(".webform-submission-sponsorship-upcoming-event-form .form-item-budget");
  var container_country = document.querySelector(".webform-submission-sponsorship-upcoming-event-form #edit-address--2--wrapper .fieldset-wrapper");

  if (!!budget && !!container_country) {
    container_country.appendChild(budget);
  } //// js fondo modal 


  var modal_welcome = document.querySelector(".pop-up-wellcome-aldia");
  var background_body = document.querySelector("body");

  if (!!modal_welcome && !!background_body) {
    var btn = modal_welcome.querySelector('.aldia-home-close');
    var btnPreload = modal_welcome.querySelector('.button-preload');
    if (!!btn) btn.addEventListener('click', function () {
      return location.reload();
    });
    if (!!btnPreload) btnPreload.addEventListener('click', function () {
      return location.reload();
    });
    background_body.classList.add("background-modal");
  } // traducion filtro videos


  var filterVideos = document.querySelector('#views-exposed-form-more-videos-in-landing-block-1');

  if (!!filterVideos) {
    var lang = document.documentElement.lang;
    var labelAny = filterVideos.querySelector('#edit-tid-all + label');

    if (lang == 'es') {
      labelAny.textContent = 'Cualquiera';
    }
  }

  var menuFooterSecondColumn = document.querySelector("#block-footer > div.content > ul > li:nth-child(2) > div > ul");

  if (!!menuFooterSecondColumn) {
    var copyr = document.querySelector('.copyr').cloneNode(true);
    var powerd = document.querySelector('.powerd').cloneNode(true);
    menuFooterSecondColumn.append(copyr, powerd);
  }

  var landingVideos = document.querySelector(".path-videos");

  if (!!landingVideos) {
    var _lang = document.documentElement.lang;
    var radioAllItem = document.querySelector('#edit-tid-all + label');

    if (_lang == 'es') {
      radioAllItem.textContent = 'TODOS';
    }
  }

  var url = window.location.href;
  var newUrl;

  if (url.indexOf('?') > 0 && url.indexOf('device=mobile') < 0) {
    newUrl = "".concat(url, "&device=mobile");
  } else if (url.charAt(url.length - 1) == '/' && url.indexOf('device=mobile') < 0) {
    newUrl = url.replace(/\/$/, '?');
    newUrl += 'device=mobile';
  } else if (url.indexOf('device=mobile') > 0) {
    newUrl = url;
  } else {
    newUrl = "".concat(url, "?device=mobile");
  }

  var initialWidth = window.innerWidth;
  var tablet = 1024;
  var mobile = 768;
  var device = 'desktop';

  if (initialWidth <= tablet) {
    device = 'tablet';
  }

  if (initialWidth <= mobile) {
    device = 'mobile';
  }

  window.addEventListener('resize', function () {
    var currentWidth = window.innerWidth;
    checkReloadPage(device, currentWidth);
  });

  function checkReloadPage(device, currentWidth) {
    if (device === 'desktop') {
      if (currentWidth < tablet) window.location.replace(newUrl);
    }

    if (device === 'tablet') {
      if (currentWidth > tablet) {
        var urlWithoutParam = removeParam(newUrl, 'device=mobile');
        window.location.replace(urlWithoutParam);
      }

      if (currentWidth < mobile) window.location.replace(newUrl);
    }

    if (device === 'mobile') {
      if (currentWidth > tablet) {
        var _urlWithoutParam = removeParam(newUrl, 'device=mobile');

        window.location.replace(_urlWithoutParam);
      } else if (currentWidth > mobile && currentWidth < tablet) {
        location.reload();
      }
    }
  }

  function removeParam(url, strParam) {
    var newUrl;

    if (url.indexOf("?".concat(strParam)) > 0) {
      newUrl = url.replaceAll("?".concat(strParam), '');
    }

    if (url.indexOf("&".concat(strParam)) > 0) {
      newUrl = url.replaceAll("&".concat(strParam), '');
    }

    return newUrl;
  }

  var queryString = window.location.search;
  var urlParams = new URLSearchParams(queryString);
  var deviceParam = urlParams.get('device');

  if (deviceParam == 'mobile') {
    var linksToAddParam = document.querySelectorAll('a:not(a.visually-hidden,a.use-ajax,a.menu-toggle,#block-socialmedia a,a[tabindex="-1"],#block-socialmedia-2 a,a[href*="aldianewsfound.org"],[id*="selectionSharerPopunder"] a,[id*="selectionSharerPopover"] a,.al-dia-podcast-social-media a,.addtoany_list a,.items-social-media-employer a,a[href*="mailto"])');
    var param = '?device=mobile';
    linksToAddParam.forEach(function (link) {
      var href = link.href;

      if (href.indexOf('device=mobile') < 0) {
        link.href = "".concat(href + param);
      }
    });
  } //js para galeria en interna de noticias


  var arrimages = document.querySelectorAll(".cke-ig img");

  if (arrimages.length != 0) {
    var arrcloneNav = Array.from(arrimages).map(function (item) {
      return item.cloneNode(true);
    });
    var arrcloneFor = Array.from(arrimages).map(function (item) {
      return item.cloneNode(true);
    });
    var popupgaleryNav = document.createElement("div");
    popupgaleryNav.classList.add("popupgalerycontainer-nav");
    var popupgaleryFor = document.createElement("div");
    popupgaleryFor.classList.add("popupgalerycontainer-for");
    arrcloneNav.forEach(function (element) {
      popupgaleryNav.appendChild(element);
    });
    arrcloneFor.forEach(function (element) {
      popupgaleryFor.appendChild(element);
    });
    document.body.append(popupgaleryNav, popupgaleryFor);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (initMain);

/***/ }),

/***/ "./src/js/modules/fixedCloseWebforms.js":
/*!**********************************************!*\
  !*** ./src/js/modules/fixedCloseWebforms.js ***!
  \**********************************************/
/*! exports provided: formApplyModified */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formApplyModified", function() { return formApplyModified; });
function formApplyModified(element, elementClass) {
  if (!!element) {
    var elementWidth = getSizeForm(element);
    var btn = element.querySelector(elementClass);
    if (!!btn) addSizeProperty(btn, elementWidth);
  }
}

function getSizeForm(element) {
  var elementSize = element.offsetWidth;
  return elementSize;
}

function addSizeProperty(element, elementWidth) {
  element.style.setProperty("--form-size", "".concat(elementWidth, "px"));
}



/***/ }),

/***/ "./src/js/modules/replaceToken.js":
/*!****************************************!*\
  !*** ./src/js/modules/replaceToken.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Reemplazar palabra clave o token por algún valor dado
 *
 * @param {String} regexToken Palabra o token como bandera para buscar y reemplazar
 * @param {String} value Texto o html para reemplazar el token
 * @param {Element} elements Colección de elementos HTML especificos en los que debera buscar el token
 */
var replaceToken = function replaceToken(regexToken, value) {
  var elements = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var search = new RegExp("".concat(regexToken), 'gim');

  if (elements.length) {
    Array.from(elements).forEach(function (element) {
      if (element instanceof Element) {
        element.innerHTML = element.innerHTML.replace(search, value);
      }
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (replaceToken);

/***/ }),

/***/ "./src/js/modules/state_and_city.js":
/*!******************************************!*\
  !*** ./src/js/modules/state_and_city.js ***!
  \******************************************/
/*! exports provided: validateFormSponsorship, unitedStateFirst */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateFormSponsorship", function() { return validateFormSponsorship; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unitedStateFirst", function() { return unitedStateFirst; });
var addStateAndCity = function addStateAndCity(state, city) {
  var sumoSelect = state.querySelector('.SumoSelect') || state.querySelector('select');
  var labelState = state.querySelector('label');
  var labelCity = city.querySelector('label');
  var selectState = state.querySelector('select');
  var inputCity = city.querySelector('input');
  sumoSelect.setAttribute('tabindex', '0');
  state.classList.remove('disabled');
  city.classList.remove('disabled');
  labelState.classList.add('js-form-required', 'form-required');
  selectState.classList.add('required');
  selectState.setAttribute('required', 'required');
  selectState.setAttribute('aria-required', 'true');
  selectState.removeAttribute('disabled');
  labelCity.classList.add('js-form-required', 'form-required');
  inputCity.classList.add('required');
  inputCity.setAttribute('required', 'required');
  inputCity.setAttribute('aria-required', 'true');
  inputCity.removeAttribute('disabled');
};

var removeStateAndCity = function removeStateAndCity(state, city) {
  var sumoSelect = state.querySelector('.SumoSelect') || state.querySelector('select');
  ;
  var labelState = state.querySelector('label');
  var labelCity = city.querySelector('label');
  var selectState = state.querySelector('select');
  var inputCity = city.querySelector('input');
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
  inputCity.setAttribute('disabled', 'disabled');
};

var validateFormSponsorship = function validateFormSponsorship(form) {
  if (!form) return;
  var selectCountry = form.querySelector('select[name="address[country]"]');
  var filedCountry = form.querySelector('.form-item-address-country');
  var fieldState = form.querySelector('.form-item-address-state-province');
  var fieldCity = form.querySelector('.form-item-address-city');
  var selectParent = selectCountry.parentElement;
  var countriesItems = selectParent.querySelectorAll('.opt');
  var contrySelected = selectCountry.value; //disabled at startup

  if (contrySelected.toLocaleLowerCase() != "united states" || contrySelected.toLocaleLowerCase() != "estados unidos") removeStateAndCity(fieldState, fieldCity); //reorder fields 

  filedCountry.insertAdjacentElement('afterend', fieldState);
  fieldState.insertAdjacentElement('afterend', fieldCity);

  if (form.classList.contains('webform-submission-sponsorship-upcoming-event-form')) {
    var budgetEvent = document.querySelector('.form-item-budget');
    fieldCity.insertAdjacentElement('afterend', budgetEvent);
  }

  countriesItems.forEach(function (item) {
    return item.addEventListener('click', function (event) {
      if (event.target.innerText.toLowerCase() === 'united states' || event.target.innerText.toLowerCase() === 'estados unidos') {
        addStateAndCity(fieldState, fieldCity);
      } else {
        removeStateAndCity(fieldState, fieldCity);
      }
    });
  });
};

var unitedStateFirst = function unitedStateFirst(form) {
  var selectCountry = form.querySelector('select[id*="edit-address-country"]');
  var sumoselectCountry = form.querySelector('div[class*="sumo_address[country]"]');
  var optionToMove = selectCountry.querySelector('option[value="United States"]');

  if (!optionToMove) {
    optionToMove = selectCountry.querySelector('option[value="Estados Unidos"]');
  }

  var optionFirst = selectCountry.firstElementChild;

  if (!!optionToMove) {
    optionFirst.insertAdjacentElement('afterend', optionToMove);
  }

  var formItems = sumoselectCountry.querySelectorAll('.opt');
  var formItemsText = sumoselectCountry.querySelectorAll('.opt label'); //reorder items

  formItems.forEach(function (item) {
    var label = item.querySelector('label');

    if (label.textContent == "United States" || label.textContent == "Estados Unidos") {
      formItems[0].insertAdjacentElement('afterend', item);
    }
  });

  if (!!formItems) {
    //add styles
    formItemsText.forEach(function (item) {
      if (item.textContent == "United States" || item.textContent == "Estados Unidos") {
        item.style.borderBottom = "3px solid #b1b1b1";
      }
    });
  }
};



/***/ }),

/***/ "./src/js/modules/video-pre-roll.js":
/*!******************************************!*\
  !*** ./src/js/modules/video-pre-roll.js ***!
  \******************************************/
/*! exports provided: videoSDK */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "videoSDK", function() { return videoSDK; });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function videoSDK() {
  // Elements container
  var videoContainer = document.querySelector("#video-container");
  var videoElement = document.querySelector("#video-element");
  var adContainer = document.querySelector("#ad-container");
  var adsProgressContainer = document.querySelector("#ads-progress-container");

  if (!!drupalSettings.vast && !!videoContainer) {
    var initializeIMA = function initializeIMA() {
      adDisplayContainer = new google.ima.AdDisplayContainer(adContainer, videoElement);
      adsLoader = new google.ima.AdsLoader(adDisplayContainer);
      adsLoader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, onAdsManagerLoaded, false);
      adsLoader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, onAdError, false);

      function onAdsManagerLoaded(adsManagerLoadedEvent) {
        console.log("onAdsManagerLoaded"); // Instanciar el AdsManager desde la respuesta de adsLoader y pasarle el elemento vídeo

        adsManager = adsManagerLoadedEvent.getAdsManager(videoElement);

        if (initialVast == false) {
          playAction.click();
        }

        if (initialVast) {
          playAction.click();
          initialVast = false;
        }

        if (adsMuted) {
          adsManager.setVolume(0);
        } else {
          adsManager.setVolume(1);
        }

        adsManager.addEventListener(google.ima.AdEvent.Type.LOADED, onAdLoaded);
        adsManager.addEventListener(google.ima.AdEvent.Type.COMPLETE, onAdComplete);
        adsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, onAdError);
      }

      function onAdLoaded(adEvent) {
        console.log("onAdLoaded");
        adsObj.ad = adEvent.getAd();
        adsObj.duration = adsObj.ad.getDuration();
        adsObj.linkDestiny = '';

        if (_typeof(adsObj.ad) == 'object') {
          adsObj.data = adsObj.ad[Object.keys(adsObj.ad)[0]];
          adsObj.linkDestiny = adsObj.data.clickThroughUrl;
        }

        adsObj.progress = 0;

        if (adsObj.linkDestiny) {
          adsLinkDestiny.style.display = "block";
          adsLinkDestiny.href = adsObj.linkDestiny;
        } else {
          adsLinkDestiny.style.display = "none";
        }

        adsObj.interval = setInterval(function () {
          progressAds(adsObj.progress++, adsObj.duration, adsProgressContainer);
          console.log('interval!');
        }, 1000);
        var minutes = Math.floor(adsObj.duration / 60);
        var seconds = Math.floor(adsObj.duration % 60);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        adsTimeTotal.innerHTML = "".concat(minutes, ":").concat(seconds);
      }

      function onAdComplete() {
        console.log('onAdComplete');

        if (lastAdComplete) {
          urlTag = getTagByPosition(vastTags, mapPositions[0]);
          managementPosition("initial");
          adsManager.destroy();
          actionRequest();
        } else {
          nextAction.click();
        }
      }

      function onAdError(adErrorEvent) {
        // Maneja el registro de errores.
        console.log('onAdError');
        var error = adErrorEvent.getError();
        var code = error.getErrorCode();
        managmentErrors(error, code);

        if (adsManager) {
          adsManager.destroy();
        }
      }
    };

    var actionRequest = function actionRequest() {
      var adsRequest = new google.ima.AdsRequest();
      var correlatorNumber = randomCorrelatorNumber();
      adsRequest.setAdWillAutoPlay(true);
      adsRequest.setAdWillPlayMuted(true);
      adsRequest.adTagUrl = "".concat(urlTag).concat(correlatorNumber); // Pasar la petición al adsLoader para solicitar anuncios

      adsLoader.requestAds(adsRequest);
      adsLoader.contentComplete();
    };

    var loadAds = function loadAds() {
      // Inicializar el contenedor. Debe hacerse mediante una acción del usuario en los dispositivos móviles.
      adDisplayContainer.initialize();
      var width = videoElement.clientWidth;
      var heigth = videoElement.clientHeight;

      try {
        adsManager.init(width, heigth, google.ima.ViewMode.NORMAL);
        adsManager.start();
        restartControls();
      } catch (adError) {
        // Reproducir el vídeo sin anuncios, si se produce un error
        console.log(adError);
        console.log("AdsManager could not be started"); //videoElement.play();
      }
    };

    var getTagByPosition = function getTagByPosition(arr, pos) {
      var tag = arr.filter(function (element) {
        if (element["pos"] == pos) {
          var _element$tag;

          return (_element$tag = element["tag"]) !== null && _element$tag !== void 0 ? _element$tag : '';
        }
      });
      if (!!tag && tag.length > 0) return tag[0].tag;
      return null;
    };

    var managementPosition = function managementPosition(option) {
      if (option == "initial") {
        vastPrev = null;
        vastCurrent = 0;
        vastNext = 1;
        previousAction.setAttribute("disabled", "disabled");
        previousAction.classList.add("disabled");

        if (nextAction.classList.contains("disabled") && lastVast > 0) {
          nextAction.removeAttribute("disabled", "disabled");
          nextAction.classList.remove("disabled");
        }

        if (lastVast == 0) {
          nextAction.setAttribute("disabled", "disabled");
          nextAction.classList.add("disabled");
          lastAdComplete = true;
        }
      }

      if (option == "next") {
        vastPrev = vastCurrent;
        vastCurrent = vastCurrent + 1;
        vastNext = vastCurrent + 1;

        if (vastNext == lastVast + 1) {
          nextAction.setAttribute("disabled", "disabled");
          nextAction.classList.add("disabled");
          lastAdComplete = true;
        }

        if (previousAction.classList.contains("disabled")) {
          previousAction.removeAttribute("disabled", "disabled");
          previousAction.classList.remove("disabled");
        }
      }

      if (option == "previous") {
        vastPrev = vastCurrent - 2;
        vastCurrent = vastCurrent - 1;
        vastNext = vastCurrent + 1;

        if (lastAdComplete) {
          lastAdComplete = false;
        }

        if (vastCurrent == 0) {
          previousAction.setAttribute("disabled", "disabled");
          previousAction.classList.add("disabled");
        }

        if (nextAction.classList.contains("disabled")) {
          nextAction.removeAttribute("disabled", "disabled");
          nextAction.classList.remove("disabled");
        }
      }

      previousAction.dataset.position = vastPrev;
      playAction.dataset.position = vastCurrent;
      nextAction.dataset.position = vastNext;
    };

    var progressAds = function progressAds(timeLeft, timeTotal, element) {
      var progressBarPos = Math.floor(timeLeft * element.offsetWidth / timeTotal);
      var minutes = Math.floor(timeLeft / 60);
      var seconds = Math.floor(timeLeft % 60);
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      adsBarProgress.style.width = "".concat(progressBarPos, "px");
      adsTimeLeft.innerHTML = "".concat(minutes, ":").concat(seconds);
      if (timeLeft >= timeTotal) clearInterval(adsObj.interval);
    };

    var restartControls = function restartControls() {
      if (videoContainer.classList.contains("paused")) {
        videoContainer.classList.remove("paused");
      }

      if (adsMuted) {
        videoContainer.classList.add("muted");
      } else {
        videoContainer.classList.remove("muted");
      }

      adsBarProgress.style.width = "0px";
      adsTimeLeft.innerHTML = "00:00";
      adsTimeTotal.innerHTML = "00:00";
      clearInterval(adsObj.interval);
    };

    var randomCorrelatorNumber = function randomCorrelatorNumber() {
      return Math.floor(Math.random() * (9999999 - 1 + 1)).toString();
    };

    var managmentErrors = function managmentErrors(error, code) {
      console.error('Vast code error : ' + code);

      switch (code) {
        case 1005:
          videoContainer.remove();
          console.error('The vast url has an incorrect format.');
          break;

        case 1009:
          videoContainer.remove();
          console.error('The VAST response document is empty.');
          break;

        case 402:
          videoContainer.remove();
          console.error('VAST media file loading reached a timeout of 8 seconds.');
          break;

        case 400:
          videoContainer.remove();
          console.error('There was an error playing the video ad.');
          break;

        case 303:
          videoContainer.remove();
          console.error('Empty VAST response returned.');
          break;

        case 301:
          videoContainer.remove();
          console.error('VAST redirection timeout has been reached.');

        default:
          videoContainer.remove();
          console.log(error);
      }
    };

    var vastTags = Object.values(drupalSettings.vast);
    var mapPositions = vastTags.map(function (tag) {
      return tag["pos"];
    });
    mapPositions.sort(function (a, b) {
      return a - b;
    });
    var vastPrev;
    var vastCurrent;
    var vastNext;
    var lastVast = vastTags.length - 1;
    var initialVast = true; // Elements ads

    var adDisplayContainer;
    var adsLoader;
    var adsManager;
    var adsObj = {}; // Elements actions

    var playAction = document.querySelector("#play-button");
    var nextAction = document.querySelector("#play-next");
    var playSwitch = document.querySelector("#play-switch");
    var previousAction = document.querySelector("#play-previous");
    var adsSound = document.querySelector("#ads-sound");
    var adsFullscreen = document.querySelector("#ads-fullscreen");
    var btnClosePreroll = document.querySelector("#btn-close-preroll");
    var adsBarProgress = document.querySelector("#ads-progress-container .bar");
    var adsTimeLeft = document.querySelector(".ads-time-left");
    var adsTimeTotal = document.querySelector(".ads-time-total");
    var adsLinkDestiny = document.querySelector(".ads-destiny-link");
    var urlTag = getTagByPosition(vastTags, mapPositions[0]);
    var adsMuted = true;
    var lastAdComplete = false;
    playAction.addEventListener("click", function () {
      loadAds();
    });
    playSwitch.addEventListener("click", function (e) {
      if (!videoContainer.classList.contains("paused")) {
        clearInterval(adsObj.interval);
        adsManager.pause();
        videoContainer.classList.add("paused");
      } else {
        adsObj.interval = setInterval(function () {
          progressAds(adsObj.progress++, adsObj.duration, adsProgressContainer);
        }, 1000);
        videoContainer.classList.remove("paused");
        adsManager.resume();
      }
    });
    previousAction.addEventListener("click", function () {
      var pos = this.dataset.position;
      urlTag = getTagByPosition(vastTags, mapPositions[pos]);
      adsManager.destroy();
      actionRequest();
      managementPosition("previous");
    });
    nextAction.addEventListener("click", function () {
      var pos = this.dataset.position;
      urlTag = getTagByPosition(vastTags, mapPositions[pos]);
      adsManager.destroy();
      actionRequest();
      managementPosition("next");
    });
    adsSound.addEventListener("click", function () {
      var volume = adsManager.getVolume();

      if (videoContainer.classList.contains("paused")) {
        return;
      }

      if (volume == 1) {
        adsManager.setVolume(0);
        videoContainer.classList.add("muted");
        videoElement.muted = true;
        adsMuted = true;
      } else {
        adsManager.setVolume(1);
        videoContainer.classList.remove("muted");
        videoElement.muted = false;
        adsMuted = false;
      }
    });
    adsFullscreen.addEventListener("click", function () {
      console.log('Fullscreen');

      if (videoContainer.requestFullscreen) {
        if (document.fullscreenElement) {
          document.exitFullscreen(); //document.webkitExitFullscreen() Safari prefixed

          videoContainer.classList.remove("fullscreen");
        } else {
          videoContainer.requestFullscreen(); //videoContainer.webkitRequestFullscreen() Safari prefixed

          videoContainer.classList.add("fullscreen");
        }
      } //Support safari fullscreen


      if (!document.body.classList.contains('safari')) return;

      if (!videoContainer.classList.contains('fullscreen')) {
        videoContainer.classList.add('fullscreen');
        document.body.classList.add('fullscreen-active');
      } else {
        videoContainer.classList.remove('fullscreen');
        document.body.classList.remove('fullscreen-active');
      }
    });
    document.addEventListener("fullscreenchange", function (event) {
      if (!document.fullscreenElement) {
        videoContainer.classList.remove("fullscreen");
      }
    });
    adsLinkDestiny.addEventListener("click", function () {
      playSwitch.click();
    });
    btnClosePreroll.addEventListener("click", function () {
      adsManager.destroy();
      adsLoader.destroy();
      videoContainer.remove();
    });
    managementPosition("initial");
    initializeIMA();
    actionRequest();
  } else {
    if (videoContainer) videoContainer.remove();
  }
}



/***/ }),

/***/ "./src/js/scripts.js":
/*!***************************!*\
  !*** ./src/js/scripts.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_libraries_selection_sharer_selection_sharer_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/libraries/selection-sharer/selection-sharer.css */ "./assets/libraries/selection-sharer/selection-sharer.css");
/* harmony import */ var _assets_libraries_selection_sharer_selection_sharer_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_libraries_selection_sharer_selection_sharer_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_libraries_selection_sharer_selection_sharer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/libraries/selection-sharer/selection-sharer.js */ "./assets/libraries/selection-sharer/selection-sharer.js");
/* harmony import */ var _assets_libraries_selection_sharer_selection_sharer_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_libraries_selection_sharer_selection_sharer_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scroll_magic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scroll-magic */ "./src/js/scroll-magic.js");
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main.js */ "./src/js/main.js");
/* harmony import */ var _slick_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slick.js */ "./src/js/slick.js");
/* harmony import */ var _modules_replaceToken__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/replaceToken */ "./src/js/modules/replaceToken.js");
/* harmony import */ var _modules_video_pre_roll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/video-pre-roll */ "./src/js/modules/video-pre-roll.js");
/* harmony import */ var _modules_state_and_city__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/state_and_city */ "./src/js/modules/state_and_city.js");
/* harmony import */ var _modules_fixedCloseWebforms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/fixedCloseWebforms */ "./src/js/modules/fixedCloseWebforms.js");










(function ($, Drupal) {
  // Selection share
  var sharer = new _assets_libraries_selection_sharer_selection_sharer_js__WEBPACK_IMPORTED_MODULE_1___default.a();
  sharer.setElements("p,h1,h2,h3,blockquote,em,strong,a:not(.selectionSharer a)"); // Replace key word by another value

  var aldiaLogoStructure = "<span class=\"aldia-logo-in-text\" alt=\"ALD\xCDA\">\n                                <img alt=\"ALD\xCDA\" src=\"".concat(drupalSettings.path.baseUrl, "themes/custom/al_dia_news/assets/img/aldia.svg\">\n                              </span>");
  var $window = $(window);
  var $videoWrap = $(".page-node-type-news .content-news-internal-first .block-field-blocknodenewsfield-video");
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
      var target = event.target;

      if (target.classList.contains('stuck') || target.closest('.stuck')) {
        $video.addClass("disnone");
      }
    });
  }

  $(document).ajaxComplete(function () {
    $(".popup-login .js-form-item-pass-pass1 input").blur(function () {
      var background = $(".popup-login .password-strength__indicator").css("background-color");
      $(".popup-login .password-strength__text").css("color", background);
    });
    $(".account-modal--password input").unbind();
    $(".edit-info-user input[type='submit']").unbind();
    $(".account-modal--register input[type='submit']").unbind();
    var email = $('input[type="email"]');
    $(email).attr("pattern", '[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}');
  });
  var email = $('input[type="email"]');
  $(email).attr("pattern", '[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}');
  var containerVideo = document.querySelector(".page-node-type-thought-leaders .block-field-blocknodethought-leadersfield-video");
  var videoThoughtLeaders = document.querySelector(".page-node-type-thought-leaders .block-field-blocknodethought-leadersfield-video .content");

  if (!!document.querySelector(".page-node-type-thought-leaders") && !!videoThoughtLeaders && !!containerVideo) {
    var videoThoughtLeadersHeigth = $(videoThoughtLeaders).outerHeight();
    $window.on("scroll", function () {
      var windowScrollTop = $window.scrollTop();
      var videoBottom = videoThoughtLeadersHeigth + $(containerVideo).offset().top;

      if (windowScrollTop > videoBottom) {
        $(containerVideo).height(videoThoughtLeadersHeigth);
        $(videoThoughtLeaders).addClass("stuck");
      } else {
        $(containerVideo).height("auto");
        $(videoThoughtLeaders).removeClass("stuck");
      }

      $('.block-field-blocknodethought-leadersfield-video .stuck button[name="close"]').click(function () {
        $(videoThoughtLeaders).addClass("disnone");
      });
    });
  }

  $(document).ready(function () {
    $('.node--type-news .block-field-blocknodenewsbody iframe[title="YouTube video player"]').parent().addClass("video-body-notice-embed"); //--------- initialization --------------------//

    if (window.matchMedia("(min-width: 992px)").matches) {
      Object(_scroll_magic__WEBPACK_IMPORTED_MODULE_2__["default"])($, Drupal);
    }
  });
  $(window).on("load", function () {
    Object(_modules_video_pre_roll__WEBPACK_IMPORTED_MODULE_6__["videoSDK"])();
    var headingTags = document.querySelectorAll("h1, h2, h3");
    var paragraphTags = document.querySelectorAll("p");
    Object(_modules_replaceToken__WEBPACK_IMPORTED_MODULE_5__["default"])("AL DÍA", aldiaLogoStructure, headingTags);
    Object(_modules_replaceToken__WEBPACK_IMPORTED_MODULE_5__["default"])("{aldia}", aldiaLogoStructure, paragraphTags);
    Object(_modules_replaceToken__WEBPACK_IMPORTED_MODULE_5__["default"])("AL DIA", aldiaLogoStructure, headingTags); //--------- menu--------------------//

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
    $(".page-node-type-webform .webform-confirmation-modal .button-back").click(function () {
      $(this).parents(".webform-confirmation-modal").css("display", "none");
      $(this).parents(".page-node-type-webform").find(".ui-widget-overlay").css("display", "none");
      $(this).attr("href", "#");
    }); //--------puopup-- login - movil -----------//

    $(".user-logged-in #block-menuuseritem-2").click(function () {
      if (window.matchMedia("(max-width: 768px)").matches) {
        if ($(this).hasClass("open")) {
          $(this).removeClass("open");
          $(".user-logged-in #block-menuuseritem-2 .item-list").removeClass("open");
          $(".region-secondary-menu").removeClass("open-user");
        } else {
          $(".user-logged-in #block-menuuseritem-2 .item-list").addClass("open");
          $(".region-secondary-menu").addClass("open-user");
          $(this).addClass("open");
        }
      }
    }); // $(".region-secondary-menu #block-al-dia-news-main-menu a").each(function () {
    // 	var text = $(this).html();
    // 	$(this).html(text.replace(/AL/g, "<br>AL"));
    // });
    //------------ scroll jobs --------------//

    var containermenu = document.querySelector("#block-system-menu-block-i-am-an-employer-menu");
    var menu = document.querySelector("#block-system-menu-block-i-am-an-employer-menu .menu");
    var time = document.querySelector("#block-system-main-block");

    if (!!containermenu && !!menu) {
      var controller2 = new ScrollMagic.Controller({
        globalSceneOptions: {
          triggerHook: 0.14 // duration: time.offsetHeight 

        }
      });
      new ScrollMagic.Scene({
        triggerElement: menu
      }).setClassToggle(menu, "active") // add class toggle
      //.offset()
      .setPin(menu, {
        pushFollowers: false
      }).addTo(controller2); //.addIndicators();
    }

    $('.block-fixed-block-content-horizontal-advertising-close  button[name="close"]').click(function () {
      $(".block-fixed-block-content-horizontal-advertising-close").addClass("dis-none");
    });
    $(".page-node-type-al-dia-vacancy .button-apply").click(function () {
      if ($(".page-node-type-al-dia-vacancy .block-webform-block").hasClass("open")) {
        $(".page-node-type-al-dia-vacancy .block-webform-block").removeClass("open");
      } else {
        $(".page-node-type-al-dia-vacancy .block-webform-block").addClass("open");
      }
    });
    $("#edit-close-window").click(function () {
      if ($(".page-node-type-al-dia-vacancy .block-webform-block").hasClass("open")) {
        $(".page-node-type-al-dia-vacancy .block-webform-block").removeClass("open");
      } else {
        $(".page-node-type-al-dia-vacancy .block-webform-block").addClass("open");
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
    }); //// modal watch live

    $(".watch-live-button").click(function () {
      $(".watch-live-video").addClass("open");
    });
    $('.watch-live-video button[name="close"]').click(function () {
      if ($(".watch-live-video ").hasClass("open")) {
        $(".watch-live-video ").removeClass("open");
      }
    });

    if (!!document.querySelector(".page-node-type-news") || !!document.querySelector(".page-node-type-thought-leaders")) {
      var $videoNews = $(".content-news-internal-first .block-field-blocknodenewsfield-video .content");
      var watchLive_button = document.querySelector(".watch-live-button");
      var watchLive_close = document.querySelector(".watch-live-video .close-modal");

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
    } ///// modal nominate interna eventos


    $(".banner-events a#nominee").click(function () {
      $(".form-nominee-events").parents(".modal-apply-webform").addClass("open");
      var form = document.querySelector('.webform-submission-nominate-form');
      Object(_modules_fixedCloseWebforms__WEBPACK_IMPORTED_MODULE_8__["formApplyModified"])(form, '.close-modal');
    });
    $(".banner-events a#register-here").click(function () {
      $(".form-register-events").parents(".modal-apply-webform").addClass("open");
    });
    $(".banner-events a#sponsorship").click(function () {
      $(".form-sponsorship-events").parents(".modal-apply-webform").addClass("open");
      var formSponsorshipEvent = document.querySelector('.webform-submission-sponsorship-upcoming-event-form');
      Object(_modules_fixedCloseWebforms__WEBPACK_IMPORTED_MODULE_8__["formApplyModified"])(formSponsorshipEvent, '.close-modal');
    });
    $('.modal-apply-webform  button[name="close"]').click(function () {
      if ($(".modal-open .modal-apply-webform").hasClass("open")) {
        $(".modal-open .modal-apply-webform").removeClass("open");
      }
    }); ///// modal employer

    $(".path-employer .button-apply").click(function () {
      if ($(this).parents(".views-row").find(".views-field-field-webform").hasClass("open")) {
        $(this).parents(".views-row").find(".views-field-field-webform").removeClass("open");
      } else {
        $(this).parents(".views-row").find(".views-field-field-webform").addClass("open");
      }
    });
    $(".path-employer form button").click(function () {
      if ($(this).parents(".views-row").find(".views-field-field-webform").hasClass("open")) {
        $(this).parents(".views-row").find(".views-field-field-webform").removeClass("open");
      } else {
        $(this).parents(".views-row").find(".views-field-field-webform").addClass("open");
      }
    }); /// modal header buscador

    $(".block-search input").click(function () {
      $("#block-exposedformsearch-results-al-dia-solrpage-1-2").addClass("open");
      $("#block-exposedformsearch-results-al-dia-solrpage-1-2 .form-item-token input").focus();
      $(".layout-main-wrapper.layout-container").addClass("color-mod");
    }); //modal subscribe

    $(".block-fixed-block-contentpop-up-cancel-form-subscribe button[name=no-stay]").click(function () {
      if ($(".block-fixed-block-contentpop-up-cancel-form-subscribe").hasClass("open")) {
        $(".block-fixed-block-contentpop-up-cancel-form-subscribe").removeClass("open");
      }
    });
    $(".commerce-checkout-flow-multistep-default .form-actions span.user-login").click(function () {
      if ($(".block-fixed-block-contentpop-up-cancel-form-subscribe").hasClass("open")) {
        $(".block-fixed-block-contentpop-up-cancel-form-subscribe").removeClass("open");
      } else {
        $(".block-fixed-block-contentpop-up-cancel-form-subscribe").addClass("open");
      }
    });
    $(document).ready(function () {
      $("#block-modalhomepassword a.button").click();
    });
    Object(_main_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
    Object(_slick_js__WEBPACK_IMPORTED_MODULE_4__["default"])($, Drupal); //// sumo select

    Array.from(document.querySelectorAll(".region-content select:not(.SumoSelect select")).map(function (element) {
      if (element != null) {
        $(element).SumoSelect({
          forceCustomRendering: true,
          floatWidth: 300
        });
      }
    });
    Array.from(document.querySelectorAll("form select:not(.SumoSelect select")).map(function (element) {
      if (element != null) {
        $(element).SumoSelect({
          forceCustomRendering: true,
          floatWidth: 300
        });
      }
    });

    if (!!document.querySelector('.webform-about-al-dia-live .webform-submission-sponsorship-form')) {
      var form = document.querySelector('.webform-about-al-dia-live .webform-submission-sponsorship-form');
      Object(_modules_state_and_city__WEBPACK_IMPORTED_MODULE_7__["validateFormSponsorship"])(form);
      Object(_modules_state_and_city__WEBPACK_IMPORTED_MODULE_7__["unitedStateFirst"])(form);
    }

    if (!!document.querySelector('.webform-submission-sponsorship-upcoming-event-form')) {
      var _form = document.querySelector('.webform-submission-sponsorship-upcoming-event-form');

      Object(_modules_state_and_city__WEBPACK_IMPORTED_MODULE_7__["validateFormSponsorship"])(_form);
      Object(_modules_state_and_city__WEBPACK_IMPORTED_MODULE_7__["unitedStateFirst"])(_form);
    }

    var formSponsorshipEvent = document.querySelector('.webform-submission-sponsorship-upcoming-event-form');
    Object(_modules_fixedCloseWebforms__WEBPACK_IMPORTED_MODULE_8__["formApplyModified"])(formSponsorshipEvent, '.close-modal');
    $(window).on('resize', function () {
      var formNominate = document.querySelector('.webform-submission-nominate-form');
      var formSponsorshipEvent = document.querySelector('.webform-submission-sponsorship-upcoming-event-form');
      var formRegisterEvent = document.querySelector('.registerhere-popup-event-landing .webform-submission-register-form');

      if (!!formNominate) {
        Object(_modules_fixedCloseWebforms__WEBPACK_IMPORTED_MODULE_8__["formApplyModified"])(formNominate, '.close-modal');
      }

      if (!!formSponsorshipEvent) {
        Object(_modules_fixedCloseWebforms__WEBPACK_IMPORTED_MODULE_8__["formApplyModified"])(formSponsorshipEvent, '.close-modal');
      }

      if (!!formRegisterEvent) {
        setTimeout(function () {
          Object(_modules_fixedCloseWebforms__WEBPACK_IMPORTED_MODULE_8__["formApplyModified"])(formRegisterEvent, '.close-modal');
        }, 0);
      }
    });
    var slider1 = document.querySelector(".popupgalerycontainer-nav ");
    var slider2 = document.querySelector(".popupgalerycontainer-for ");
    var currentDiv = document.querySelector(".site-footer");

    if (!!slider1 && !!slider2 && !!currentDiv) {
      var newDiv = document.createElement("div");
      newDiv.classList.add('slider-black-aldia');
      var newDivX = document.createElement("div");
      newDivX.classList.add('slider-black-x');
      var newContent = document.createTextNode("X");
      newDivX.appendChild(newContent);
      newDiv.appendChild(newDivX);
      currentDiv.appendChild(newDiv);
      newDiv.appendChild(slider1);
      newDiv.appendChild(slider2);
      showSlider();
    }

    function showSlider() {
      var slider2show = document.querySelector(".slider-black-aldia");
      var slider2close = document.querySelector(".slider-black-x");
      Array.from(document.querySelectorAll(".cke-ig .slick-slide")).map(function (e) {
        if (!!e && !!slider2show && !!slider2close) {
          e.addEventListener("click", function () {
            slider2show.classList.add('active');
          });
          slider2close.addEventListener("click", function () {
            slider2show.classList.remove('active');
          });
        }
      });
    }
  });
  Drupal.behaviors.aldia_news_sumoselect = {
    attach: function attach(context, settings) {
      //// sumo select
      var isDialog = false;
      var parentElementContext = context.parentElement;

      if (!!parentElementContext) {
        isDialog = parentElementContext.classList.contains('ui-front') || false;
      }

      if (!!isDialog) {
        var addSumoselect = function addSumoselect(select) {
          if (select != null) {
            $(select).SumoSelect({
              forceCustomRendering: true
            });
          }
        };

        Array.from(context.querySelectorAll("select:not(select.SumoUnder)")).forEach(function (select) {
          addSumoselect(select);
        });

        if (!!document.querySelector('.webform-submission-sponsorship-upcoming-event-form')) {
          var form = document.querySelector('.webform-submission-sponsorship-upcoming-event-form');
          Object(_modules_state_and_city__WEBPACK_IMPORTED_MODULE_7__["validateFormSponsorship"])(form);
          Object(_modules_state_and_city__WEBPACK_IMPORTED_MODULE_7__["unitedStateFirst"])(form);
        }
      }

      if (context.id == 'views-exposed-form-search-results-al-dia-solr-page-1') {
        Array.from(document.querySelectorAll("select.SumoUnder")).forEach(function (select) {
          $(select)[0].sumo.reload();
        });
      }
    }
  };
  Drupal.behaviors.form_checkbox = {
    attach: function attach(context, settings) {
      $(function () {
        //js para recargar
        Array.from(document.querySelectorAll(".button-preload")).map(function (e) {
          if (e != null) {
            e.addEventListener("click", function () {
              location.reload();
            });
          }
        }); ///// js para tag new

        Array.from(document.querySelectorAll(".block-field-blocknodenewsfield-type-of-content")).map(function (evt) {
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
        }); // Relacionando clase de selector al nombre de este archivo

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
        } // Pone clase activa cuando el radio está seleccionado


        $("." + currentClass, context).once("js-form-fake-checkbox").click(function () {
          var context = $(this);
          context.toggleClass("active-check");
        }); /// js para esrilos de boton de eliminar archivo

        var check_number = document.querySelectorAll(".form-managed-file .form-item").length;
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
        } //// elipsis para archivos


        Array.from(document.querySelectorAll("#edit-container .js-form-type-checkbox a")).map(function (e) {
          if (e != null) {
            if (e.innerText.length > 25) {
              var newt = e.innerText.substring(0, 25) + "...";
              e.innerHTML = newt;
            }
          }
        }); /// x que elimina archivos

        var firts_check = document.querySelector('.form-managed-file .form-item:nth-of-type(1) input[type*="checkbox"]');
        var second_check = document.querySelector('.form-managed-file .form-item:nth-of-type(2) input[type*="checkbox"]');
        var input_value = document.querySelector('input[name="upload_file[fids]"]');
        var cont_field = document.querySelector("#edit-container");

        if (!!firts_check && !!input_value && second_check === null) {
          firts_check.addEventListener("click", function () {
            input_value.setAttribute("value", "");
            firts_check.closest(".form-type-checkbox").remove();
          });
        }

        if (!!cont_field && !!firts_check && !!input_value && !!second_check) {
          firts_check.addEventListener("click", function (e) {
            e.stopImmediatePropagation();
            var atributo1 = input_value.getAttribute("value").split("").slice(4, 7).join("");
            input_value.setAttribute("value", atributo1);
            firts_check.closest(".form-type-checkbox").remove();
            cont_field.classList.remove("disable-button");
          });
          second_check.addEventListener("click", function (e) {
            e.stopImmediatePropagation();
            var logueado = document.querySelector(".user-logged-in");

            if (!!logueado && !!second_check.parentElement.previousElementSibling.classList.contains("form-item")) {
              var atributo = input_value.getAttribute("value").split("").slice(0, 3).join("");
              input_value.setAttribute("value", atributo);
              second_check.closest(".form-type-checkbox").remove();
              cont_field.classList.remove("disable-button");
            } else if (logueado === null && !!second_check.parentElement.previousElementSibling.previousElementSibling.classList.contains("form-item")) {
              var atributo = input_value.getAttribute("value").split("").slice(0, 3).join("");
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
          $("div.popup-class-restore-pwd.ui-widget.ui-corner-all:not(button) .close-button-modal").html('<a href="/">OK</a>');
          $(".popup-class-cancel-account.ui-widget.ui-corner-all:not(button) .close-button-modal").html('<a href="/">IR A NUESTRO ÚLTIMO CONTENIDO</a>'); //////

          var button_subscribe = document.querySelector('.link--previous[href*="/order_information"]');

          if (!!button_subscribe) {
            button_subscribe.innerHTML = "REGRESAR";
          } //////


          Array.from(document.querySelectorAll(".watch-live-button")).map(function (e) {
            if (!!e) e.innerHTML = "EN VIVO";
          }); //////

          var share = document.querySelector(".block-extra-field-blocknodenewsaddtoany h2");

          if (!!share) {
            share.innerHTML = "COMPARTE ESTE CONTENIDO:";
          }
        } else {
          $("div.popup-class-restore-pwd.ui-widget.ui-corner-all:not(button) .close-button-modal").html('<a href="/">OK</a>');
          $(".popup-class-cancel-account.ui-widget.ui-corner-all:not(button) .close-button-modal").html('<a href="/">GO TO OUR LATEST CONTENT</a>');
        }
      }); //fake click dialog modal

      if (!!context.querySelector('.close-modal')) {
        var closeFake = context.querySelector('.close-modal');

        if (!!closeFake) {
          closeFake.addEventListener('click', function () {
            var closeDialog = document.querySelector('.ui-dialog-titlebar button.ui-dialog-titlebar-close');
            if (!!closeDialog) closeDialog.click();
          });
        }
      }
    }
  };
  Drupal.behaviors.aldia_logo = {
    attach: function attach(context, settings) {
      var infiniteScroll = context.querySelector('.views-infinite-scroll-content-wrapper');

      if (!!infiniteScroll) {
        //Replace token
        var headingScrollTags = document.querySelectorAll("h1, h2, h3");
        var paragraphScrollTags = document.querySelectorAll("p");
        Object(_modules_replaceToken__WEBPACK_IMPORTED_MODULE_5__["default"])("AL DÍA", aldiaLogoStructure, headingScrollTags);
        Object(_modules_replaceToken__WEBPACK_IMPORTED_MODULE_5__["default"])("{aldia}", aldiaLogoStructure, paragraphScrollTags);
        Object(_modules_replaceToken__WEBPACK_IMPORTED_MODULE_5__["default"])("AL DIA", aldiaLogoStructure, headingScrollTags); //Selection sharer

        var _sharer = new _assets_libraries_selection_sharer_selection_sharer_js__WEBPACK_IMPORTED_MODULE_1___default.a();

        _sharer.setElements("p,h1,h2,h3,blockquote,em,strong,a:not(.selectionSharer a)");
      }
    }
  };
  Drupal.behaviors.titleFixed = {
    attach: function attach(context, settings) {
      setTimeout(function () {
        var formLogin = document.querySelector('.account-modal--login');
        var formSponsorshipEvent = context.querySelector('.webform-submission-sponsorship-upcoming-event-form');
        var formRegisterEvent = document.querySelector('.registerhere-popup-event-landing .webform-submission-register-form');

        if (!!formLogin) {
          Object(_modules_fixedCloseWebforms__WEBPACK_IMPORTED_MODULE_8__["formApplyModified"])(formLogin, '.ui-dialog-titlebar-close');
        }

        if (!!formSponsorshipEvent) {
          Object(_modules_fixedCloseWebforms__WEBPACK_IMPORTED_MODULE_8__["formApplyModified"])(formSponsorshipEvent, '.close-modal');
        }

        if (!!formRegisterEvent) {
          Object(_modules_fixedCloseWebforms__WEBPACK_IMPORTED_MODULE_8__["formApplyModified"])(formRegisterEvent, '.close-modal');
        }
      }, 100);
    }
  };
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
var initScrollMagic = function initScrollMagic($, Drupal) {
  var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: 1
    }
  }); //------------ scroll jobs --------------//

  var rigthPages = document.querySelector('.content-right-pages');
  var pautas = document.querySelector('.pautas');
  var leftContent = document.querySelector('.page-node-type-feature-employer .content-left-pages');

  if (!!rigthPages && !!pautas && !!leftContent) {
    var getDurationScene1 = function getDurationScene1() {
      return rigthPages.offsetHeight - pautas.offsetHeight - 20;
    }; //window.addEventListener("resize", () => resizeActivation(pautas, scene1));


    //------------ not sticky --------------//
    var limitHigh = 1940;
    if (rigthPages.offsetHeight === pautas.offsetHeight) return;
    if (leftContent.offsetHeight < limitHigh) return;
    var scene1 = new ScrollMagic.Scene({
      triggerElement: pautas,
      triggerHook: 1,
      duration: getDurationScene1
    }).addTo(new ScrollMagic.Controller()).offset(pautas.offsetHeight + 20).setPin(pautas, {
      pushFollowers: false
    });
  }

  var containerRigth = document.querySelector('.container-right');
  var containerLeft = document.querySelector('.content-news-internal-left');
  var noticias = document.querySelector('.block-views-blockmore-in-this-section-news-block-1'); //------------ scroll internas --------------//

  if (!!containerRigth && !!noticias) {
    /* setTimeout(()=>{
        const scene2 = new ScrollMagic.Scene({ triggerElement: containerRigth, duration: getDurationScene2 })
        .addTo(controller)
        .offset(noticias.offsetHeight + 20)
        .setPin(noticias, { pushFollowers: false })    
    },6000); */
    var getDurationScene2 = function getDurationScene2() {
      return containerRigth.offsetHeight - noticias.offsetHeight;
    }; //window.addEventListener("resize", () => resizeActivation(noticias, scene2));


    var _limitHigh = 1940; //------------ not sticky --------------//

    if (containerLeft.offsetHeight < _limitHigh) return;
    if (containerRigth.offsetHeight === noticias.offsetHeight) return;
    var scene2 = new ScrollMagic.Scene({
      triggerElement: containerRigth,
      duration: getDurationScene2
    }).addTo(controller).offset(noticias.offsetHeight + 20).setPin(noticias, {
      pushFollowers: false
    });
  }

  function resizeActivation(element, scene) {
    if (window.matchMedia("(min-width: 992px)").matches) {
      if (element) scene.setPin(element, {
        pushFollowers: false
      });
    } else {
      scene.removePin(element, true);
    }
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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initSlick = function initSlick($, Drupal) {
  jQuery(document).ready(function () {
    var categoriesMore = document.querySelectorAll(".view-categories-sons .view-more-category .view-content");
    var settings = {
      infinite: false,
      rows: 4,
      slidesToShow: 1,
      slidesToScroll: 1,
      mobileFirst: true,
      autoplay: false,
      dots: false,
      arrows: true,
      responsive: [{
        breakpoint: 768,
        settings: "unslick"
      }]
    }; //slide edit resize

    if (window.matchMedia("(max-width: 768px)").matches) {
      setTimeout(function () {
        categoriesMore.forEach(function (element) {
          if (!!element && element != null) $(element).not('.slick-initialized').slick(settings);
        });
      }, 2000);
    }

    window.addEventListener("resize", function () {
      if (window.matchMedia("(max-width: 768px)").matches) {
        setTimeout(function () {
          categoriesMore.forEach(function (element) {
            if (!!element && element != null) $(element).not('.slick-initialized').slick(settings);
          });
        }, 2000);
      }
    });
  }); /// Slider para thought leaders

  $('.block-views-blocktrending-google-home-block-1 .view-content').slick({
    infinite: false,
    rows: 5,
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    autoplay: false,
    dots: false,
    arrows: true
  }); /// Slider para interna de noticias

  console.log("hola");
  $('.cke-ig').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerPadding: "60px",
    centerMode: true,
    variableWidth: true,
    dots: true,
    mobileFirst: true,
    responsive: [{
      breakpoint: 1300,
      settings: "reInit"
    }, {
      breakpoint: 992,
      settings: "reInit"
    }, {
      breakpoint: 768,
      settings: "reInit"
    }]
  });
  $('.popupgalerycontainer-nav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    centerMode: true,
    asNavFor: '.popupgalerycontainer-for'
  });
  $('.popupgalerycontainer-for').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.popupgalerycontainer-nav',
    centerMode: true,
    focusOnSelect: true
  }); // slide landing jobs

  $(".block-views-blockcarousel-jobs-landing-block-1 .brands-carousel-wrapper .view-content").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }]
  }); // slide landing videos

  $(".block-views-blockcarousel-videos-landing-block-2 .view-id-carousel_videos_landing .view-content").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true
      }
    }]
  }); //slide about al dia events

  if ($(".about-al-dia-live-slider").length) {
    $(".about-al-dia-live-slider ul").slick({
      autoplay: true,
      autoplaySpeed: 3000,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      centerPadding: "60px",
      centerMode: true,
      variableWidth: true,
      dots: true,
      mobileFirst: true,
      responsive: [{
        breakpoint: 1300,
        settings: "reInit"
      }, {
        breakpoint: 992,
        settings: "reInit"
      }, {
        breakpoint: 768,
        settings: "reInit"
      }]
    });
  } //slide about al dia testimonial


  if ($(".block-views-blockabout-al-dia-live-block-4")) {
    $(".block-views-blockabout-al-dia-live-block-4 .view-content").slick({
      autoplay: true,
      autoplaySpeed: 10000,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true
    });
  } /// Slider para thought leaders


  if ($(".view-id-thought_leaders_home.view-display-id-block_1").length) {
    var settingThoughtLeaders = {
      infinite: false,
      variableWidth: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplaySpeed: 3000,
      mobileFirst: true,
      responsive: [{
        breakpoint: 1024,
        settings: "unslick"
      }]
    };
    /* 
    		const mobileWidth = 768;
    
    		const resizeObserver = new ResizeObserver(entries => {
    			for (let entry of entries) {
    				let currentWidth = entry.contentBoxSize[0].inlineSize;
    
    				if(currentWidth > mobileWidth) return;
    				if($(".view-id-thought_leaders_home.view-display-id-block_1 .view-content").hasClass("slick-initialized")) return;
    
    				if(currentWidth <= mobileWidth){   
    					$(".view-id-thought_leaders_home.view-display-id-block_1 .view-content").not('.slick-initialized').slick(settingThoughtLeaders);
    				}
    			}
    		});
    
    		resizeObserver.observe(document.querySelector('body')); */
    //slide edit resize 

    if (window.matchMedia("(max-width: 1024px)").matches) {
      $(".view-id-thought_leaders_home.view-display-id-block_1 .view-content").not('.slick-initialized').slick(settingThoughtLeaders);
    }

    window.addEventListener("resize", function () {
      if (window.matchMedia("(max-width: 1024px)").matches) {
        $(".view-id-thought_leaders_home.view-display-id-block_1 .view-content").not('.slick-initialized').slick(settingThoughtLeaders);
      }
    });
  } // slider interna eventos modo de vista


  var slider_general = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500 //variableWidth: true

  };

  var slider_one = _objectSpread(_objectSpread({}, slider_general), {}, {
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: false,
    responsive: [{
      breakpoint: 769,
      settings: {
        variableWidth: true
      }
    }]
  });

  var slider_two = _objectSpread(_objectSpread({}, slider_general), {}, {
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 769,
      settings: {
        variableWidth: true
      }
    }]
  });

  var slider_three = _objectSpread(_objectSpread({}, slider_general), {}, {
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 993,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 769,
      settings: {
        variableWidth: true
      }
    }]
  });

  var slider_more = _objectSpread(_objectSpread({}, slider_general), {}, {
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 993,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 769,
      settings: {
        variableWidth: true
      }
    }]
  });

  Array.from(document.querySelectorAll(".view-slider-internal-event .views-row")).map(function (e) {
    if (e != null) {
      var mode_slider = e.querySelector(".item-list ul");

      switch (e.className) {
        case "views-row slider-one":
          $(mode_slider).slick(slider_one);
          break;

        case "views-row slider-two":
          $(mode_slider).slick(slider_two);
          break;

        case "views-row slider-three":
          $(mode_slider).slick(slider_three);
          break;

        case "views-row slider-more":
          $(mode_slider).slick(slider_more);
          break;
      }
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

__webpack_require__(/*! /Users/seed/proyectos/4ld14-n3ws/web/themes/custom/al_dia_news/src/js/scripts.js */"./src/js/scripts.js");
module.exports = __webpack_require__(/*! /Users/seed/proyectos/4ld14-n3ws/web/themes/custom/al_dia_news/src/sass/styles.scss */"./src/sass/styles.scss");


/***/ })

/******/ });