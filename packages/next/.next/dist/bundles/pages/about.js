module.exports =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/App.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/declonelcocks/code/yarn-workspaces-react/packages/next/components/App.js";


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var children = _ref.children;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    className: "jsx-3354999716"
  }, children, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "3354999716",
    css: "*{font-family:Menlo,Monaco,'Lucida Console','Liberation Mono', 'DejaVu Sans Mono','Bitstream Vera Sans Mono','Courier New', monospace,serif;}body{margin:0;padding:25px 50px;}a{color:#22bad9;}p{font-size:14px;line-height:24px;}article{margin:0 auto;max-width:650px;}button{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#22bad9;border:0;color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:5px 7px;}button:active{background-color:#1b9db7;-webkit-transition:background-color 0.3s;transition:background-color 0.3s;}button:focus{outline:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUd1QixBQUsyQixBQUdULEFBSUssQUFHQyxBQUlELEFBSUssQUFRTSxBQUlaLFNBMUJLLElBMkJwQixDQXZCQSxBQU9rQixDQUpDLFVBZ0JnQixFQXRCbkMsR0FXQSxFQUpBLDZEQU8yQixNQVMzQixtQkFSVyxTQUNHLFdBcEJkLENBcUJlLDBFQUNHLGdCQUNsQiIsImZpbGUiOiJjb21wb25lbnRzL0FwcC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZGVjbG9uZWxjb2Nrcy9jb2RlL3lhcm4td29ya3NwYWNlcy1yZWFjdC9wYWNrYWdlcy9uZXh0Iiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8bWFpbj5cbiAgICB7Y2hpbGRyZW59XG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICoge1xuICAgICAgICBmb250LWZhbWlseTogTWVubG8sIE1vbmFjbywgJ0x1Y2lkYSBDb25zb2xlJywgJ0xpYmVyYXRpb24gTW9ubycsXG4gICAgICAgICAgJ0RlamFWdSBTYW5zIE1vbm8nLCAnQml0c3RyZWFtIFZlcmEgU2FucyBNb25vJywgJ0NvdXJpZXIgTmV3JyxcbiAgICAgICAgICBtb25vc3BhY2UsIHNlcmlmO1xuICAgICAgfVxuICAgICAgYm9keSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMjVweCA1MHB4O1xuICAgICAgfVxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiAjMjJiYWQ5O1xuICAgICAgfVxuICAgICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICB9XG4gICAgICBhcnRpY2xlIHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIG1heC13aWR0aDogNjUwcHg7XG4gICAgICB9XG4gICAgICBidXR0b24ge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjJiYWQ5O1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgcGFkZGluZzogNXB4IDdweDtcbiAgICAgIH1cbiAgICAgIGJ1dHRvbjphY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWI5ZGI3O1xuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XG4gICAgICB9XG4gICAgICBidXR0b246Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9tYWluPlxuKVxuIl19 */\n/*@ sourceURL=components/App.js */"
  }));
});

/***/ }),

/***/ "./components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_router__);
var _jsxFileName = "/Users/declonelcocks/code/yarn-workspaces-react/packages/next/components/Header.js";





var Header = function Header(_ref) {
  var pathname = _ref.router.pathname;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    className: "jsx-3970066506"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    prefetch: true,
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: "jsx-3970066506" + " " + ((pathname === '/' ? 'is-active' : '') || "")
  }, "Home")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    prefetch: true,
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    className: "jsx-3970066506" + " " + ((pathname === '/about' ? 'is-active' : '') || "")
  }, "About")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "3970066506",
    css: "header.jsx-3970066506{margin-bottom:25px;}a.jsx-3970066506{font-size:14px;margin-right:15px;-webkit-text-decoration:none;text-decoration:none;}.is-active.jsx-3970066506{-webkit-text-decoration:underline;text-decoration:underline;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdnQixBQUc0QixBQUdKLEFBS1csZUFKUixJQUhwQixjQUl1QiwyQkFJdkIsdUJBSEEiLCJmaWxlIjoiY29tcG9uZW50cy9IZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RlY2xvbmVsY29ja3MvY29kZS95YXJuLXdvcmtzcGFjZXMtcmVhY3QvcGFja2FnZXMvbmV4dCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuY29uc3QgSGVhZGVyID0gKHsgcm91dGVyOiB7IHBhdGhuYW1lIH0gfSkgPT4gKFxuICA8aGVhZGVyPlxuICAgIDxMaW5rIHByZWZldGNoIGhyZWY9Jy8nPlxuICAgICAgPGEgY2xhc3NOYW1lPXtwYXRobmFtZSA9PT0gJy8nID8gJ2lzLWFjdGl2ZScgOiAnJ30+SG9tZTwvYT5cbiAgICA8L0xpbms+XG4gICAgPExpbmsgcHJlZmV0Y2ggaHJlZj0nL2Fib3V0Jz5cbiAgICAgIDxhIGNsYXNzTmFtZT17cGF0aG5hbWUgPT09ICcvYWJvdXQnID8gJ2lzLWFjdGl2ZScgOiAnJ30+QWJvdXQ8L2E+XG4gICAgPC9MaW5rPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGhlYWRlciB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgICB9XG4gICAgICBhIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICAgIC5pcy1hY3RpdmUge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvaGVhZGVyPlxuKVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEhlYWRlcilcbiJdfQ== */\n/*@ sourceURL=components/Header.js */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3_next_router__["withRouter"])(Header));

/***/ }),

/***/ "./pages/about.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_App__ = __webpack_require__("./components/App.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Header__ = __webpack_require__("./components/Header.js");
var _jsxFileName = "/Users/declonelcocks/code/yarn-workspaces-react/packages/next/pages/about.js";



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_App__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Header__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("article", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "The Idea Behind This Example"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "https://www.apollographql.com/client/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "Apollo"), " is a GraphQL client that allows you to easily query the exact data you need from a GraphQL server. In addition to fetching and mutating data, Apollo analyzes your queries and their results to construct a client-side cache of your data, which is kept up to date as further queries and mutations are run, fetching more results from the server."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, "In this simple example, we integrate Apollo seamlessly with", ' ', __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "https://github.com/zeit/next.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, "Next"), " by wrapping our pages inside a", ' ', __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "https://facebook.github.io/react/docs/higher-order-components.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, "higher-order component (HOC)"), ". Using the HOC pattern we're able to pass down a central store of query result data created by Apollo into our React component hierarchy defined inside each page of our Next application."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, "On initial page load, while on the server and inside getInitialProps, we invoke the Apollo method,", ' ', __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "https://www.apollographql.com/docs/react/features/server-side-rendering.html#getDataFromTree",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, "getDataFromTree"), ". This method returns a promise; at the point in which the promise resolves, our Apollo Client store is completely initialized."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, "This example relies on ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "http://graph.cool",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, "graph.cool"), " for its GraphQL backend.")));
});

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/about.js");


/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=about.js.map