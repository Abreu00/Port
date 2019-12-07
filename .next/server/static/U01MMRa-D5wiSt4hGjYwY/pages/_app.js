module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+oT+":
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__("eVuF");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__("8Bbg");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");

// EXTERNAL MODULE: ./Globals/mediaQueries.js
var mediaQueries = __webpack_require__("ctGH");

// CONCATENATED MODULE: ./Globals/styles.js


/* harmony default export */ var styles = (external_styled_components_["createGlobalStyle"]`
  @import url('https://fonts.googleapis.com/css?family=Courgette|Lato&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body,
  #root {
    height: 100%;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Lato', sans-serif;
    color: ${props => props.theme.font.color};
    background: ${props => props.theme.color.primary};
  }

  a {
    color: inherit;
  }

  @media (max-width: ${mediaQueries["a" /* default */].width.pc.smaller}) {
    body {
      overflow-x: hidden;
    }
  }

  @media (max-width: ${mediaQueries["a" /* default */].width.phone}) {
    /* 600px */
    html {
      font-size: 45%;
    }
  }

  @media (max-width: ${mediaQueries["a" /* default */].width.tablet.portrait}) {
    /* 900px */
    html {
      font-size: 50%;
    }
  }

  @media (max-width: ${mediaQueries["a" /* default */].width.tablet.landscape}) {
    /* 1200px */
    html {
      font-size: 55%;
    }
  }

  @media (min-width: ${mediaQueries["a" /* default */].width.large}) {
    /* 1800px */
    html {
      font-size: 75%;
    }
  }


  

`);
// EXTERNAL MODULE: ./Globals/theme.js
var theme = __webpack_require__("baMr");

// EXTERNAL MODULE: ./context.js + 2 modules
var context = __webpack_require__("HbWr");

// CONCATENATED MODULE: ./pages/_app.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _app_App; });
var __jsx = external_react_default.a.createElement;






class _app_App extends app_default.a {
  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return __jsx(external_styled_components_["ThemeProvider"], {
      theme: theme["a" /* default */]
    }, __jsx(styles, null), __jsx(context["b" /* Provider */], null, __jsx(Component, pageProps)));
  }

}

/***/ }),

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


/***/ }),

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("g/15");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

function appGetInitialProps(_x) {
  return _appGetInitialProps.apply(this, arguments);
}

function _appGetInitialProps() {
  _appGetInitialProps = (0, _asyncToGenerator2.default)(function* (_ref) {
    var {
      Component,
      ctx
    } = _ref;
    var pageProps = yield (0, _utils.loadGetInitialProps)(Component, ctx);
    return {
      pageProps
    };
  });
  return _appGetInitialProps.apply(this, arguments);
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps
    } = this.props;
    var url = createUrl(router);
    return _react.default.createElement(Component, (0, _extends2.default)({}, pageProps, {
      url: url
    }));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "HbWr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./assets/translations/pt.js
/* harmony default export */ var pt = ({
  projects: [{
    title: "Directa viewer",
    desc: [`O Directa Viewer é uma Single-Page application para mostrar dados, como qualidade e desempenho, sobre maquinas de uma dada fabrica. A aplicação consiste de diversos displays com informações sobre uma até oito maquinas e obviamente enquanto o numero de maquinas na tela vai aumentando o numero de informações sobre cada vai diminuindo, mantendo as informações mais relevantes.`, `Alguns fatos interesantes sobre esse projeto é que foi minha primeira vez utilizando css-in-js com a biblioteca Styled componentes, além disso o projeto marcou minha transição de componentes de classes para React Hooks.`]
  }, {
    title: "Meu portfolio",
    desc: [`My portfolio is the cool website you're looking at! Besides the interface, you can take a look at the code on Github as well since I have made this project open-source.`, `A funcionalidade de tradução foi implementada usando a API de contexto do React, que é otima.Entretando, acredito que eu deveria ter utilizado Redux nesse projeto, não para as traduções em ci mas para gerenciar o estado geral da aplicação.`]
  }, {
    title: "Directa helpchain",
    desc: []
  }, {
    title: "Matermind app",
    desc: []
  }],
  projectBtn: "Ver projeto",
  header: {
    home: "Home",
    about: "Sobre mim",
    xp: "Experiencia",
    all: "Todos"
  },
  textPages: {
    about: {
      title: "Sobre min",
      text: [`Ola! Meu nome é Fábio de Abreu, sou natural de Florianópolis/SC e 
        hoje faço parte do time de desenvolvimento da empresa Directa Automação,
        trabalhando com desenvolvimento web Front-end. Ainda assim, desenvolvendo
        meus próprios projetos e para terceiros.`, `Minha jornada apreendendo programação comeceu com 16 anos, parecia
        um caminho natural para alguém apaixonado por tecnologia. Mais tarde, ganhei
        experiência com educação formal, estudando Ciências da Computação na UFSC.
        Apesar disso, eu acredito que o melhor jeito de apreender é trabalhando em
        projetos reais e desenvolvendo software que pode realmente ajudar pessoas.`]
    },
    experience: {
      title: "Experience",
      text: [`Escrevi minha primeira linha de código usando Ruby, apesar disso nunca o explorei muito e fui me
        aprofundar mesmo na linguagem Javascript trabalhando, por grande parte, com Front-end.`, `Trabalhando na Directa Automação, desenvolvi interfaces web que ajudam o setor industrial
        brasileiro, usando Javascript vanilla e também a biblioteca do facebook React que se tornou
        minha principal ferramenta para desenvolvimento de websites como esse que você está navegando.`]
    }
  },
  footer: "2019 Desenvolvido por Fábio Oliveira de Abreu",
  copyMsg: "Copiado"
});
// CONCATENATED MODULE: ./assets/translations/en.js
/* harmony default export */ var en = ({
  projects: [{
    title: "Directa viewer",
    desc: [`Directa Viewer consists of a Single-page application to display data, such as quality and performance, from machines of a given factory. It has several different screens ranging from information about one machine up to eight, of course, while the number of machines on the screen goes up the information displayed about each decrease, leaving the most relevant information.`, `Some cool things about this project are that it was my first time using css-in-js with the Styled components library and also marked my transition from class-based components to React hooks.`]
  }, {
    title: "My portfolio",
    desc: [`My portfolio is the cool website you're looking at! Besides the interface, you can take a look at the code on Github as well since I have made this project open-source. For the interface design, I took some inspiration from Jonas schmedtmann advanced CSS course and my poor brain web portfolio.`, `The translation functionality was implemented using React's context API which is great. However, I believe I should have used Redux in this project, not for the translations itself, but for managing the general state of the application.`]
  }, {
    title: "Directa helpchain",
    desc: []
  }, {
    title: "Matermind app",
    desc: []
  }],
  projectBtn: "View project",
  header: {
    home: "Home",
    about: "About me",
    xp: "Experience",
    all: "All"
  },
  textPages: {
    about: {
      title: "About me",
      text: [`Hi! My name is Fábio de Abreu, I was born in Florianópolis/SC Brazil,
      and I'm currently part of Directa Automação team, working with
      Front-end development. Nevertheless, also developing projects for
      myself and others.`, `My journey to learn programming started when I was 16 years old, it
      felt like the natural thing to do for someone passionate about
      technology. Later, I had some experience with formal education,
      studying Computer Science at UFSC. However, I believe that the best
      way to learn is through working on real projects and creating software
      that helps people.`]
    },
    experience: {
      title: "Experience",
      text: [`My first-ever line of code was written in Ruby, although I never explored it much, 
        the language I dove deeper into was Javascript working for the most part with Front-end.`, `While working with Directa Automação, I have created web interfaces that help the 
        Brazilian industrial sector, using vanilla JS and also facebook React library which has become 
        my go-to tool for developing web sites like this one you are browsing.`]
    }
  },
  footer: "2019 Developed by Fábio Oliveira de Abreu",
  copyMsg: "Copied"
});
// CONCATENATED MODULE: ./context.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Provider; });
var __jsx = external_react_default.a.createElement;



const Context = external_react_default.a.createContext();
const Provider = props => {
  const {
    0: lang,
    1: setLang
  } = Object(external_react_["useState"])("en");

  function handleLangChange(lang) {
    setLang(lang);
  }

  return __jsx(Context.Provider, {
    value: {
      translation: lang === "pt" ? pt : en,
      lang,
      changeLang: handleLangChange
    }
  }, props.children);
};

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

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

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

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

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__("pLtp");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  if (false) {} // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "htGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__("UXZV");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ })

/******/ });