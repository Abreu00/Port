module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("juaj");


/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "baMr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const theme = {
  color: {
    primary: "#FAFAFA",
    secondary: "#eee",
    danger: "#DD2C00"
  },
  font: {
    color: "#616161",
    colorBold: "#212121",
    colorLight: "#9E9E9E"
  },
  header: {
    height: "20rem"
  },
  sidebar: {
    width: "8rem"
  }
};
/* harmony default export */ __webpack_exports__["a"] = (theme);

/***/ }),

/***/ "ctGH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  width: {
    pc: {
      smaller: "40em",
      small: "53.125em"
    },
    phone: "37.5em",
    tablet: {
      portrait: "56.25em",
      landscape: "75em"
    },
    large: "112.5em"
  }
});

/***/ }),

/***/ "juaj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Row", function() { return Row; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Globals_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("baMr");
/* harmony import */ var _Globals_mediaQueries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ctGH");



const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  padding: 0 calc(${_Globals_theme__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].sidebar.width} + 3rem) 0 3rem;
  font-size: 1.8rem;
  text-align: justify;

  p:not(:last-child) {
    margin-bottom: 1em;
  }

  @media (max-width: ${_Globals_mediaQueries__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].width.pc.smaller}) {
    padding: 0 2rem;
  }
`;
const Row = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;

  @media (max-width: ${_Globals_mediaQueries__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].width.pc.smaller}) {
    flex-direction: column;

    > :last-child {
      bottom: 15%;
      transform: translateY(-50%);
      position: fixed;
    }
  }
`;
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1`
  font-size: 5rem;
  padding-left: 2rem;
  text-align: left;
  font-weight: bold;
  color: ${props => props.theme.font.colorBold};

  @media (max-width: ${_Globals_mediaQueries__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].width.pc.smaller}) {
    & {
      text-align: center;
      padding-left: 2rem;
    }
  }
`;
const Image = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img`
  width: ${props => props.width};
  height: ${props => props.height};
  min-height: ${props => props.minHeight};
  min-width: ${props => props.minWidth};
  float: left;
  margin: -0.6rem 1.4rem 0.4rem 0rem;
  transform: scale(0.9);
  box-shadow: 0 1rem 1.25rem 0 rgba(33, 33, 33, 0.25),
    0 0 0 -0.4rem ${props => props.theme.font.colorBold};
  border-radius: 0.5rem;
  transition: transform 0.5s, box-shadow 0.5s;
  user-select: none;
  &:hover {
    transform: scale(1);
    box-shadow: 0 1rem 1.25rem 0 rgba(33, 33, 33, 0.25), 0 0 0 1rem transparent;
  }

  @media (max-width: ${_Globals_mediaQueries__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].width.pc.smaller}) {
    & {
      height: auto;
      width: 100vw;
      max-width: 100vw;
      margin: 0 calc(-50vw + 50%);
      margin-bottom: 2rem;
      transform: scale(1);
      object-fit: cover;
      object-position: top;
      border-radius: 0;
      float: none;
      box-shadow: none;
      box-shadow: 0 0.5rem 1.25rem 0 rgba(33, 33, 33, 0.15);
    }

    &:hover {
      transform: scale(1);
      box-shadow: 0 0.5rem 1.25rem 0 rgba(33, 33, 33, 0.1);
    }
  }
`;

/***/ })

/******/ });