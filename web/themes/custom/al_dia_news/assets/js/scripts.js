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
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/aplle/Desktop/AlDia/code/web/themes/custom/al_dia_news/src/js/scripts.js: Unexpected token, expected \",\" (59:2)\n\n\u001b[0m \u001b[90m 57 |\u001b[39m     }\u001b[0m\n\u001b[0m \u001b[90m 58 |\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 59 |\u001b[39m   jQuery(document)\u001b[33m.\u001b[39mready(\u001b[36mfunction\u001b[39m() {\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m   \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 60 |\u001b[39m     \u001b[36mif\u001b[39m (\u001b[0m\n\u001b[0m \u001b[90m 61 |\u001b[39m       $(\u001b[32m\".page-node-type-news .video-embed-field-responsive-video iframe\"\u001b[39m)\u001b[0m\n\u001b[0m \u001b[90m 62 |\u001b[39m         \u001b[33m.\u001b[39mlength\u001b[0m\n    at Parser._raise (/Users/aplle/Desktop/AlDia/code/web/themes/custom/al_dia_news/node_modules/@babel/parser/lib/index.js:775:17)\n    at Parser.raiseWithData (/Users/aplle/Desktop/AlDia/code/web/themes/custom/al_dia_news/node_modules/@babel/parser/lib/index.js:768:17)\n    at Parser.raise (/Users/aplle/Desktop/AlDia/code/web/themes/custom/al_dia_news/node_modules/@babel/parser/lib/index.js:736:17)\n    at Parser.unexpected (/Users/aplle/Desktop/AlDia/code/web/themes/custom/al_dia_news/node_modules/@babel/parser/lib/index.js:9699:16)\n    at Parser.expect (/Users/aplle/Desktop/AlDia/code/web/themes/custom/al_dia_news/node_modules/@babel/parser/lib/index.js:9685:28)\n    at Parser.parseCallExpressionArguments (/Users/aplle/Desktop/AlDia/code/web/themes/custom/al_dia_news/node_modules/@babel/parser/lib/index.js:10850:14)\n    at Parser.parseCoverCallAndAsyncArrowHead (/Users/aplle/Desktop/AlDia/code/web/themes/custom/al_dia_news/node_modules/@babel/parser/lib/index.js:10776:29)\n    at Parser.parseSubscript (/Users/aplle/Desktop/AlDia/code/web/themes/custom/al_dia_news/node_modules/@babel/parser/lib/index.js:10712:19)\n    at Parser.parseSubscripts (/Users/aplle/Desktop/AlDia/code/web/themes/custom/al_dia_news/node_modules/@babel/parser/lib/index.js:10685:19)\n    at Parser.parseExprSubscripts (/Users/aplle/Desktop/AlDia/code/web/themes/custom/al_dia_news/node_modules/@babel/parser/lib/index.js:10674:17)\n    at Parser.parseUpdate (/Users/aplle/Desktop/AlDia/code/web/themes/custom/al_dia_news/node_modules/@babel/parser/lib/index.js:10648:21)\n    at Parser.parseMaybeUnary (/Users/aplle/Desktop/AlDia/code/web/themes/custom/al_dia_news/node_modules/@babel/parser/lib/index.js:10626:23)\n    at Parser.parseExprOps (/Users/aplle/Desktop/AlDia/code/web/themes/custom/al_dia_news/node_modules/@babel/parser/lib/index.js:10487:23)\n    at Parser.parseMaybeConditional (/Users/aplle/Desktop/AlDia/code/web/themes/custom/al_dia_news/node_modules/@babel/parser/lib/index.js:10461:23)\n    at Parser.parseMaybeAssign (/Users/aplle/Desktop/AlDia/code/web/themes/custom/al_dia_news/node_modules/@babel/parser/lib/index.js:10424:21)\n    at Parser.parseExpressionBase (/Users/aplle/Desktop/AlDia/code/web/themes/custom/al_dia_news/node_modules/@babel/parser/lib/index.js:10369:23)\n    at allowInAnd (/Users/aplle/Desktop/AlDia/code/web/themes/custom/al_dia_news/node_modules/@babel/parser/lib/index.js:10363:39)\n    at Parser.allowInAnd (/Users/aplle/Desktop/AlDia/code/web/themes/custom/al_dia_news/node_modules/@babel/parser/lib/index.js:12058:16)\n    at Parser.parseExpression (/Users/aplle/Desktop/AlDia/code/web/themes/custom/al_dia_news/node_modules/@babel/parser/lib/index.js:10363:17)\n    at Parser.parseStatementContent (/Users/aplle/Desktop/AlDia/code/web/themes/custom/al_dia_news/node_modules/@babel/parser/lib/index.js:12346:23)\n    at Parser.parseStatement (/Users/aplle/Desktop/AlDia/code/web/themes/custom/al_dia_news/node_modules/@babel/parser/lib/index.js:12215:17)\n    at Parser.parseBlockOrModuleBlockBody (/Users/aplle/Desktop/AlDia/code/web/themes/custom/al_dia_news/node_modules/@babel/parser/lib/index.js:12795:25)\n    at Parser.parseBlockBody (/Users/aplle/Desktop/AlDia/code/web/themes/custom/al_dia_news/node_modules/@babel/parser/lib/index.js:12786:10)\n    at Parser.parseBlock (/Users/aplle/Desktop/AlDia/code/web/themes/custom/al_dia_news/node_modules/@babel/parser/lib/index.js:12770:10)\n    at Parser.parseFunctionBody (/Users/aplle/Desktop/AlDia/code/web/themes/custom/al_dia_news/node_modules/@babel/parser/lib/index.js:11737:24)\n    at Parser.parseFunctionBodyAndFinish (/Users/aplle/Desktop/AlDia/code/web/themes/custom/al_dia_news/node_modules/@babel/parser/lib/index.js:11721:10)\n    at withTopicForbiddingContext (/Users/aplle/Desktop/AlDia/code/web/themes/custom/al_dia_news/node_modules/@babel/parser/lib/index.js:12928:12)\n    at Parser.withTopicForbiddingContext (/Users/aplle/Desktop/AlDia/code/web/themes/custom/al_dia_news/node_modules/@babel/parser/lib/index.js:12033:14)\n    at Parser.parseFunction (/Users/aplle/Desktop/AlDia/code/web/themes/custom/al_dia_news/node_modules/@babel/parser/lib/index.js:12927:10)\n    at Parser.parseFunctionOrFunctionSent (/Users/aplle/Desktop/AlDia/code/web/themes/custom/al_dia_news/node_modules/@babel/parser/lib/index.js:11175:17)\n    at Parser.parseExprAtom (/Users/aplle/Desktop/AlDia/code/web/themes/custom/al_dia_news/node_modules/@babel/parser/lib/index.js:11011:21)\n    at Parser.parseExprSubscripts (/Users/aplle/Desktop/AlDia/code/web/themes/custom/al_dia_news/node_modules/@babel/parser/lib/index.js:10668:23)\n    at Parser.parseUpdate (/Users/aplle/Desktop/AlDia/code/web/themes/custom/al_dia_news/node_modules/@babel/parser/lib/index.js:10648:21)\n    at Parser.parseMaybeUnary (/Users/aplle/Desktop/AlDia/code/web/themes/custom/al_dia_news/node_modules/@babel/parser/lib/index.js:10626:23)\n    at Parser.parseExprOps (/Users/aplle/Desktop/AlDia/code/web/themes/custom/al_dia_news/node_modules/@babel/parser/lib/index.js:10487:23)\n    at Parser.parseMaybeConditional (/Users/aplle/Desktop/AlDia/code/web/themes/custom/al_dia_news/node_modules/@babel/parser/lib/index.js:10461:23)");

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

__webpack_require__(/*! /Users/aplle/Desktop/AlDia/code/web/themes/custom/al_dia_news/src/js/scripts.js */"./src/js/scripts.js");
module.exports = __webpack_require__(/*! /Users/aplle/Desktop/AlDia/code/web/themes/custom/al_dia_news/src/sass/styles.scss */"./src/sass/styles.scss");


/***/ })

/******/ });