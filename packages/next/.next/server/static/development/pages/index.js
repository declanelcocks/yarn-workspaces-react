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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/@8securities/ui/index.js":
/*!****************************************************************************************!*\
  !*** /Users/Declan/coding/yarn-workspaces-react/node_modules/@8securities/ui/index.js ***!
  \****************************************************************************************/
/*! exports provided: add, Badge, Block, Button, Card, Heading, Input, Label, Link, P, Select */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony import */ var _src_Badge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/Badge */ "../../node_modules/@8securities/ui/src/Badge/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Badge", function() { return _src_Badge__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _src_Block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/Block */ "../../node_modules/@8securities/ui/src/Block/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Block", function() { return _src_Block__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _src_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/Button */ "../../node_modules/@8securities/ui/src/Button/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _src_Button__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _src_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/Card */ "../../node_modules/@8securities/ui/src/Card/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return _src_Card__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _src_Heading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/Heading */ "../../node_modules/@8securities/ui/src/Heading/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Heading", function() { return _src_Heading__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _src_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/Input */ "../../node_modules/@8securities/ui/src/Input/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _src_Input__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _src_Label__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/Label */ "../../node_modules/@8securities/ui/src/Label/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return _src_Label__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _src_Link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/Link */ "../../node_modules/@8securities/ui/src/Link/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return _src_Link__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _src_P__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/P */ "../../node_modules/@8securities/ui/src/P/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "P", function() { return _src_P__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _src_Select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/Select */ "../../node_modules/@8securities/ui/src/Select/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return _src_Select__WEBPACK_IMPORTED_MODULE_9__["default"]; });

var add = function add(a, b) {
  return a + b;
};







 // export { default as Logo } from './src/Logo'




/***/ }),

/***/ "../../node_modules/@8securities/ui/src/Badge/index.js":
/*!**************************************************************************************************!*\
  !*** /Users/Declan/coding/yarn-workspaces-react/node_modules/@8securities/ui/src/Badge/index.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-theme */ "styled-theme");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_2__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: inline-flex;\n  font-size: 0.8125rem;\n  line-height: 1.5rem;\n  padding: 0 0.5rem;\n  color: ", ";\n  background-color: ", ";\n  border-radius: 0.25rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var Badge = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_2__["palette"])('grayscale', 0, true), Object(styled_theme__WEBPACK_IMPORTED_MODULE_2__["palette"])(3));
Badge.propTypes = {
  palette: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  reverse: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool
};
Badge.defaultProps = {
  palette: 'primary'
};
/* harmony default export */ __webpack_exports__["default"] = (Badge);

/***/ }),

/***/ "../../node_modules/@8securities/ui/src/Block/index.js":
/*!**************************************************************************************************!*\
  !*** /Users/Declan/coding/yarn-workspaces-react/node_modules/@8securities/ui/src/Block/index.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-theme */ "styled-theme");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-tools */ "styled-tools");
/* harmony import */ var styled_tools__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_tools__WEBPACK_IMPORTED_MODULE_3__);
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      display: inline-flex;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  color: ", ";\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var Block = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject(), Object(styled_tools__WEBPACK_IMPORTED_MODULE_3__["ifProp"])('opaque', Object(styled_theme__WEBPACK_IMPORTED_MODULE_2__["palette"])(0, true), 'transparent'), Object(styled_theme__WEBPACK_IMPORTED_MODULE_2__["palette"])({
  grayscale: 0
}, 3), Object(styled_tools__WEBPACK_IMPORTED_MODULE_3__["ifProp"])('inline', Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2())));
Block.propTypes = {
  palette: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  reverse: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  opaque: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool
};
Block.defaultProps = {
  palette: 'grayscale'
};
/* harmony default export */ __webpack_exports__["default"] = (Block);

/***/ }),

/***/ "../../node_modules/@8securities/ui/src/Button/index.js":
/*!***************************************************************************************************!*\
  !*** /Users/Declan/coding/yarn-workspaces-react/node_modules/@8securities/ui/src/Button/index.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-theme */ "styled-theme");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_tools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-tools */ "styled-tools");
/* harmony import */ var styled_tools__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_tools__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/Declan/coding/yarn-workspaces-react/node_modules/@8securities/ui/src/Button/index.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  font-size: 1rem;\n  line-height: ", ";\n  border: 0.0625rem solid\n    ", ";\n  padding: ", "\n    ", ";\n  margin-bottom: 1rem;\n  border-radius: 0.25rem;\n  align-items: center;\n  white-space: nowrap;\n  justify-content: center;\n  text-decoration: none;\n  cursor: ", ";\n  appearance: none;\n  box-sizing: border-box;\n  pointer-events: ", ";\n  transition: all 0.15s ease;\n  background-color: ", ";\n  color: ", ";\n\n  &:hover,\n  &:focus,\n  &:active {\n    transform: translateY(-1px);\n    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);\n    background-color: ", ";\n    color: ", ";\n  }\n\n  &:focus {\n    outline: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var backgroundColor = function backgroundColor(_ref) {
  var transparent = _ref.transparent,
      disabled = _ref.disabled;
  return transparent ? 'transparent' : Object(styled_theme__WEBPACK_IMPORTED_MODULE_3__["palette"])(disabled ? 5 : 3);
};

var foregroundColor = function foregroundColor(_ref2) {
  var transparent = _ref2.transparent,
      disabled = _ref2.disabled;
  return transparent ? Object(styled_theme__WEBPACK_IMPORTED_MODULE_3__["palette"])(disabled ? 5 : 3) : Object(styled_theme__WEBPACK_IMPORTED_MODULE_3__["palette"])('grayscale', 0, true);
};

var hoverBackgroundColor = function hoverBackgroundColor(_ref3) {
  var disabled = _ref3.disabled,
      transparent = _ref3.transparent;
  return !disabled && !transparent && Object(styled_theme__WEBPACK_IMPORTED_MODULE_3__["palette"])(2);
};

var hoverForegroundColor = function hoverForegroundColor(_ref4) {
  var disabled = _ref4.disabled,
      transparent = _ref4.transparent;
  return !disabled && transparent && Object(styled_theme__WEBPACK_IMPORTED_MODULE_3__["palette"])(2);
};

var styles = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject(), Object(styled_tools__WEBPACK_IMPORTED_MODULE_4__["ifProp"])('small', '1rem', '1.5rem'), Object(styled_tools__WEBPACK_IMPORTED_MODULE_4__["ifProp"])('transparent', 'currentcolor', 'transparent'), Object(styled_tools__WEBPACK_IMPORTED_MODULE_4__["ifProp"])('small', 'calc(0.25rem - 0.0625rem)', 'calc(0.5rem - 0.0625rem)'), Object(styled_tools__WEBPACK_IMPORTED_MODULE_4__["ifProp"])('small', '0.5rem', '1rem'), Object(styled_tools__WEBPACK_IMPORTED_MODULE_4__["ifProp"])('disabled', 'default', 'pointer'), Object(styled_tools__WEBPACK_IMPORTED_MODULE_4__["ifProp"])('disabled', 'none', 'auto'), backgroundColor, foregroundColor, hoverBackgroundColor, hoverForegroundColor);
var StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.button(_templateObject2(), styles);

var Button = function Button(_ref5) {
  var type = _ref5.type,
      props = _objectWithoutProperties(_ref5, ["type"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledButton, _extends({}, props, {
    type: type,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }));
};

Button.propTypes = {
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  palette: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  transparent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  reverse: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  to: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  href: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
Button.defaultProps = {
  palette: 'primary',
  type: 'button'
};
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "../../node_modules/@8securities/ui/src/Card/index.js":
/*!*************************************************************************************************!*\
  !*** /Users/Declan/coding/yarn-workspaces-react/node_modules/@8securities/ui/src/Card/index.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-theme */ "styled-theme");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_1__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: 1.5rem;\n  background: ", ";\n  box-shadow: 0 2px 4px rgba(50, 50, 93, 0.1);\n  border-radius: 0.125rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Card = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('white', 0));
/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "../../node_modules/@8securities/ui/src/Heading/index.js":
/*!****************************************************************************************************!*\
  !*** /Users/Declan/coding/yarn-workspaces-react/node_modules/@8securities/ui/src/Heading/index.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-theme */ "styled-theme");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_tools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-tools */ "styled-tools");
/* harmony import */ var styled_tools__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_tools__WEBPACK_IMPORTED_MODULE_4__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: ", ";\n  line-height: ", ";\n  margin-top: 1.5rem;\n  margin-bottom: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





 // Font size: 16px
// Line height: 1.5 (24px)
// Scale factor: 1.5 (2:3 Perfect fifth)

var styles = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_3__["palette"])({
  grayscale: 0
}, 3), Object(styled_tools__WEBPACK_IMPORTED_MODULE_4__["switchProp"])(Object(styled_tools__WEBPACK_IMPORTED_MODULE_4__["prop"])('level'), {
  1: '3.375rem',
  2: '2.25rem',
  3: '1.5rem',
  4: '1rem'
}), Object(styled_tools__WEBPACK_IMPORTED_MODULE_4__["switchProp"])(Object(styled_tools__WEBPACK_IMPORTED_MODULE_4__["prop"])('level'), {
  1: '4.5rem',
  2: '3rem',
  3: '3rem',
  4: '1.5rem'
}), Object(styled_tools__WEBPACK_IMPORTED_MODULE_4__["switchProp"])(Object(styled_tools__WEBPACK_IMPORTED_MODULE_4__["prop"])('level'), {
  1: '3rem',
  2: '1.5rem',
  3: '0',
  4: '0'
}));
var Heading = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(function (_ref) {
  var level = _ref.level,
      children = _ref.children,
      reverse = _ref.reverse,
      palette = _ref.palette,
      theme = _ref.theme,
      props = _objectWithoutProperties(_ref, ["level", "children", "reverse", "palette", "theme"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h".concat(level), props, children);
})(_templateObject2(), styles);
Heading.propTypes = {
  level: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  palette: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  reverse: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
Heading.defaultProps = {
  level: 1,
  palette: 'grayscale'
};
/* harmony default export */ __webpack_exports__["default"] = (Heading);

/***/ }),

/***/ "../../node_modules/@8securities/ui/src/Input/index.js":
/*!**************************************************************************************************!*\
  !*** /Users/Declan/coding/yarn-workspaces-react/node_modules/@8securities/ui/src/Input/index.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-theme */ "styled-theme");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_tools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-tools */ "styled-tools");
/* harmony import */ var styled_tools__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_tools__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/Declan/coding/yarn-workspaces-react/node_modules/@8securities/ui/src/Input/index.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      min-height: 6rem;\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      height: calc(2.625rem - 0.125rem);\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      height: auto;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  font-size: 1rem;\n  /* height */\n  ", ";\n  ", " padding: ", ";\n  box-sizing: border-box;\n  color: ", ";\n  background-color: ", ";\n  border: 0.0625rem solid\n    ", ";\n  border-radius: 2px;\n  outline: none;\n\n  &[type='checkbox'],\n  &[type='radio'] {\n    display: inline-block;\n    border: 0;\n    border-radius: 0;\n    width: auto;\n    height: auto;\n    margin: 0 0.5rem 0 0;\n  }\n\n  &::placeholder {\n    color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var styles = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject(), Object(styled_tools__WEBPACK_IMPORTED_MODULE_4__["ifProp"])({
  type: 'textarea'
}, Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject2()), Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject3())), Object(styled_tools__WEBPACK_IMPORTED_MODULE_4__["ifProp"])({
  type: 'textarea'
}, Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject4())), Object(styled_tools__WEBPACK_IMPORTED_MODULE_4__["ifProp"])({
  type: 'textarea'
}, '0.5rem', '0 0.5rem'), Object(styled_theme__WEBPACK_IMPORTED_MODULE_3__["palette"])('grayscale', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_3__["palette"])('grayscale', 0, true), Object(styled_tools__WEBPACK_IMPORTED_MODULE_4__["ifProp"])('invalid', Object(styled_theme__WEBPACK_IMPORTED_MODULE_3__["palette"])('danger', 3), Object(styled_theme__WEBPACK_IMPORTED_MODULE_3__["palette"])('grayscale', 4)), Object(styled_theme__WEBPACK_IMPORTED_MODULE_3__["palette"])('grayscale', 4));
var StyledTextarea = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.textarea(_templateObject5(), styles);
var StyledInput = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.input(_templateObject6(), styles);

var Input = function Input(_ref) {
  var props = _extends({}, _ref);

  if (props.type === 'textarea') return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTextarea, _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }));
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledInput, _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    }
  }));
};

Input.propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  reverse: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  invalid: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
Input.defaultProps = {
  type: 'text'
};
/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "../../node_modules/@8securities/ui/src/Label/index.js":
/*!**************************************************************************************************!*\
  !*** /Users/Declan/coding/yarn-workspaces-react/node_modules/@8securities/ui/src/Label/index.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-theme */ "styled-theme");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_2__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 0.8125rem; /* 13px */\n  line-height: 1rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var Label = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.label(_templateObject(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_2__["palette"])(3));
Label.propTypes = {
  palette: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
};
Label.defaultProps = {
  palette: 'grayscale'
};
/* harmony default export */ __webpack_exports__["default"] = (Label);

/***/ }),

/***/ "../../node_modules/@8securities/ui/src/Link/index.js":
/*!*************************************************************************************************!*\
  !*** /Users/Declan/coding/yarn-workspaces-react/node_modules/@8securities/ui/src/Link/index.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-theme */ "styled-theme");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_tools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-tools */ "styled-tools");
/* harmony import */ var styled_tools__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_tools__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/Declan/coding/yarn-workspaces-react/node_modules/@8securities/ui/src/Link/index.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  text-decoration: none;\n  color: ", ";\n  transition: all 0.1s ease;\n\n  &:hover,\n  &:focus {\n    color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





 // import NavLink from 'react-router-dom/NavLink'

var styles = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject(), Object(styled_tools__WEBPACK_IMPORTED_MODULE_4__["ifProp"])({
  palette: 'grayscale'
}, Object(styled_theme__WEBPACK_IMPORTED_MODULE_3__["palette"])(0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_3__["palette"])(3)), Object(styled_theme__WEBPACK_IMPORTED_MODULE_3__["palette"])(0)); // const StyledNavLink = styled(({ theme, reverse, palette, ...props }) => (
//   <NavLink {...props} />
// ))`
//   ${styles};
// `

var Anchor = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.a(_templateObject2(), styles);

var Link = function Link(_ref) {
  var props = _extends({}, _ref);

  if (props.to) {// return <StyledNavLink {...props} />
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Anchor, _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }));
};

Link.propTypes = {
  palette: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  reverse: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  to: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
Link.defaultProps = {
  palette: 'primary'
};
/* harmony default export */ __webpack_exports__["default"] = (Link);

/***/ }),

/***/ "../../node_modules/@8securities/ui/src/P/index.js":
/*!**********************************************************************************************!*\
  !*** /Users/Declan/coding/yarn-workspaces-react/node_modules/@8securities/ui/src/P/index.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-theme */ "styled-theme");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_2__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  margin-top: 0rem;\n  margin-bottom: 1.5rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var P = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p(_templateObject(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_2__["palette"])('grayscale', 0));
P.propTypes = {
  reverse: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (P);

/***/ }),

/***/ "../../node_modules/@8securities/ui/src/Select/index.js":
/*!***************************************************************************************************!*\
  !*** /Users/Declan/coding/yarn-workspaces-react/node_modules/@8securities/ui/src/Select/index.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/omit */ "lodash/omit");
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/isArray */ "lodash/isArray");
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_isArray__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/find */ "lodash/find");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-select */ "react-select");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_select_dist_react_select_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-select/dist/react-select.css */ "../../node_modules/react-select/dist/react-select.css");
/* harmony import */ var react_select_dist_react_select_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_select_dist_react_select_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-theme */ "styled-theme");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_tools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-tools */ "styled-tools");
/* harmony import */ var styled_tools__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_tools__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Badge */ "../../node_modules/@8securities/ui/src/Badge/index.js");
var _jsxFileName = "/Users/Declan/coding/yarn-workspaces-react/node_modules/@8securities/ui/src/Select/index.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  .Select-control {\n    box-shadow: none !important;\n    border-radius: 2px;\n    border: 0.0625rem solid\n      ", " !important;\n  }\n\n  &.is-focused .Select-control,\n  &.is-open .Select-control {\n    border-color: ", " !important;\n  }\n\n  .Select-multi-value-wrapper {\n    display: flex;\n    flex-flow: row wrap;\n    align-items: center;\n    padding: 0 0.5rem;\n\n    > *:not(:last-child) {\n      margin-right: 0.5rem;\n    }\n\n    .Select-input {\n      height: 2.375rem;\n      margin-left: 0;\n      padding-left: 0;\n\n      > input {\n        line-height: 2.375rem;\n        padding: 0;\n      }\n    }\n  }\n\n  .Select-placeholder {\n    color: ", ";\n    line-height: 2.375rem;\n    padding: 0 0.5rem;\n  }\n\n  .Select-menu-outer {\n    border: 0.0625rem solid\n      ", ";\n    border-top-color: ", ";\n\n    .Select-option.is-focused {\n      background-color: ", ";\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }












var StyledReactSelect = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(react_select__WEBPACK_IMPORTED_MODULE_6___default.a)(_templateObject(), Object(styled_tools__WEBPACK_IMPORTED_MODULE_9__["ifProp"])(['invalid', 'isDirty'], Object(styled_theme__WEBPACK_IMPORTED_MODULE_8__["palette"])('danger', 3), Object(styled_theme__WEBPACK_IMPORTED_MODULE_8__["palette"])('grayscale', 4)), Object(styled_tools__WEBPACK_IMPORTED_MODULE_9__["ifProp"])(['invalid', 'isDirty'], Object(styled_theme__WEBPACK_IMPORTED_MODULE_8__["palette"])('danger', 3), Object(styled_theme__WEBPACK_IMPORTED_MODULE_8__["palette"])('grayscale', 4)), Object(styled_theme__WEBPACK_IMPORTED_MODULE_8__["palette"])('grayscale', 4), Object(styled_tools__WEBPACK_IMPORTED_MODULE_9__["ifProp"])(['invalid', 'isDirty'], Object(styled_theme__WEBPACK_IMPORTED_MODULE_8__["palette"])('danger', 3), Object(styled_theme__WEBPACK_IMPORTED_MODULE_8__["palette"])('grayscale', 4)), Object(styled_theme__WEBPACK_IMPORTED_MODULE_8__["palette"])('grayscale', 5), Object(styled_theme__WEBPACK_IMPORTED_MODULE_8__["palette"])('primary', 7));

var SingleSelectValue = function SingleSelectValue(_ref) {
  var value = _ref.value,
      options = _ref.options;

  // RANGE type
  if (lodash_isArray__WEBPACK_IMPORTED_MODULE_4___default()(value)) {
    var selectedVal = lodash_find__WEBPACK_IMPORTED_MODULE_5___default()(options, function (o) {
      return o.value.join(',') === value.join(',');
    });
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      }
    }, selectedVal.label);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    }
  }, value.label);
};

SingleSelectValue.propTypes = {
  options: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool]),
    label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  })])
};

var MultiSelectValue = function MultiSelectValue(_ref2) {
  var id = _ref2.id,
      value = _ref2.value,
      disabled = _ref2.disabled,
      onRemove = _ref2.onRemove;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Badge__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: id,
    onClick: function onClick() {
      if (!disabled) onRemove(value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    }
  }, value.label);
};

MultiSelectValue.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onRemove: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

var singleSelectChangeHandler = function singleSelectChangeHandler(func) {
  return function (value) {
    return func(value ? value.value : '');
  };
};

var multiSelectChangeHandler = function multiSelectChangeHandler(func) {
  return function (values) {
    return func(values.map(function (value) {
      return value.value;
    }));
  };
};

var Select = function Select(_ref3) {
  var options = _ref3.options,
      input = _ref3.input,
      type = _ref3.type,
      invalid = _ref3.invalid,
      setIsDirty = _ref3.setIsDirty,
      props = _objectWithoutProperties(_ref3, ["options", "input", "type", "invalid", "setIsDirty"]);

  var multi = type === 'multi-select'; // https://github.com/erikras/redux-form/issues/2229
  // https://github.com/erikras/redux-form/issues/2805
  //
  // Making an initial or new selection works as expected. However, when clicking
  // the dropdown and clicking away instead of making a new selection, the previous
  // value disappears.
  //
  // Solution: ignore the onBlur passed down from Field

  var selectProps = lodash_omit__WEBPACK_IMPORTED_MODULE_3___default()(input, ['onBlur', 'onChange']);

  var SingleValue = function SingleValue(props) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SingleSelectValue, _extends({
      options: options
    }, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      }
    }));
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledReactSelect, _extends({
    className: "select",
    autoBlur: true,
    options: options,
    multi: multi,
    onChange: multi ? multiSelectChangeHandler(input.onChange) : singleSelectChangeHandler(input.onChange),
    valueComponent: multi ? MultiSelectValue : SingleValue,
    invalid: invalid
  }, selectProps, props, {
    onBlur: function onBlur(val) {
      setIsDirty(true);
      input.onBlur(val);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    }
  }));
};

Select.propTypes = {
  options: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  input: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  invalid: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  // Manually set dirty to allow us to correctly show our error/invalid
  // state as `react-select` doesn't handle it well enough
  setIsDirty: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Select);

/***/ }),

/***/ "../../node_modules/react-select/dist/react-select.css":
/*!**************************************************************************************************!*\
  !*** /Users/Declan/coding/yarn-workspaces-react/node_modules/react-select/dist/react-select.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/App.js":
/*!***************************!*\
  !*** ./components/App.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/Declan/coding/yarn-workspaces-react/packages/next/components/App.js";


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    className: "jsx-3354999716"
  }, children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3354999716",
    css: "*{font-family:Menlo,Monaco,'Lucida Console','Liberation Mono', 'DejaVu Sans Mono','Bitstream Vera Sans Mono','Courier New', monospace,serif;}body{margin:0;padding:25px 50px;}a{color:#22bad9;}p{font-size:14px;line-height:24px;}article{margin:0 auto;max-width:650px;}button{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#22bad9;border:0;color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:5px 7px;}button:active{background-color:#1b9db7;-webkit-transition:background-color 0.3s;transition:background-color 0.3s;}button:focus{outline:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUd1QixBQUsyQixBQUdULEFBSUssQUFHQyxBQUlELEFBSUssQUFRTSxBQUlaLFNBMUJLLElBMkJwQixDQXZCQSxBQU9rQixDQUpDLFVBZ0JnQixFQXRCbkMsR0FXQSxFQUpBLDZEQU8yQixNQVMzQixtQkFSVyxTQUNHLFdBcEJkLENBcUJlLDBFQUNHLGdCQUNsQiIsImZpbGUiOiJjb21wb25lbnRzL0FwcC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvRGVjbGFuL2NvZGluZy95YXJuLXdvcmtzcGFjZXMtcmVhY3QvcGFja2FnZXMvbmV4dCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPG1haW4+XG4gICAge2NoaWxkcmVufVxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAqIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IE1lbmxvLCBNb25hY28sICdMdWNpZGEgQ29uc29sZScsICdMaWJlcmF0aW9uIE1vbm8nLFxuICAgICAgICAgICdEZWphVnUgU2FucyBNb25vJywgJ0JpdHN0cmVhbSBWZXJhIFNhbnMgTW9ubycsICdDb3VyaWVyIE5ldycsXG4gICAgICAgICAgbW9ub3NwYWNlLCBzZXJpZjtcbiAgICAgIH1cbiAgICAgIGJvZHkge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDI1cHggNTBweDtcbiAgICAgIH1cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogIzIyYmFkOTtcbiAgICAgIH1cbiAgICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgfVxuICAgICAgYXJ0aWNsZSB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBtYXgtd2lkdGg6IDY1MHB4O1xuICAgICAgfVxuICAgICAgYnV0dG9uIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIyYmFkOTtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHBhZGRpbmc6IDVweCA3cHg7XG4gICAgICB9XG4gICAgICBidXR0b246YWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFiOWRiNztcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xuICAgICAgfVxuICAgICAgYnV0dG9uOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvbWFpbj5cbilcbiJdfQ== */\n/*@ sourceURL=components/App.js */"
  }));
});

/***/ }),

/***/ "./components/ErrorMessage.js":
/*!************************************!*\
  !*** ./components/ErrorMessage.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/Declan/coding/yarn-workspaces-react/packages/next/components/ErrorMessage.js";


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var message = _ref.message;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("aside", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    className: "jsx-160792485"
  }, message, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "160792485",
    css: "aside.jsx-160792485{padding:1.5em;font-size:14px;color:white;background-color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRXJyb3JNZXNzYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdnQixBQUd1QixjQUNDLGVBQ0gsWUFDUyxxQkFDdkIiLCJmaWxlIjoiY29tcG9uZW50cy9FcnJvck1lc3NhZ2UuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL0RlY2xhbi9jb2RpbmcveWFybi13b3Jrc3BhY2VzLXJlYWN0L3BhY2thZ2VzL25leHQiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoeyBtZXNzYWdlIH0pID0+IChcbiAgPGFzaWRlPlxuICAgIHttZXNzYWdlfVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGFzaWRlIHtcbiAgICAgICAgcGFkZGluZzogMS41ZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2FzaWRlPlxuKVxuIl19 */\n/*@ sourceURL=components/ErrorMessage.js */"
  }));
});

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/Declan/coding/yarn-workspaces-react/packages/next/components/Header.js";





var Header = function Header(_ref) {
  var pathname = _ref.router.pathname;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    className: "jsx-3970066506"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    prefetch: true,
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: "jsx-3970066506" + " " + ((pathname === '/' ? 'is-active' : '') || "")
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    prefetch: true,
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    className: "jsx-3970066506" + " " + ((pathname === '/about' ? 'is-active' : '') || "")
  }, "About")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3970066506",
    css: "header.jsx-3970066506{margin-bottom:25px;}a.jsx-3970066506{font-size:14px;margin-right:15px;-webkit-text-decoration:none;text-decoration:none;}.is-active.jsx-3970066506{-webkit-text-decoration:underline;text-decoration:underline;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdnQixBQUc0QixBQUdKLEFBS1csZUFKUixJQUhwQixjQUl1QiwyQkFJdkIsdUJBSEEiLCJmaWxlIjoiY29tcG9uZW50cy9IZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL0RlY2xhbi9jb2RpbmcveWFybi13b3Jrc3BhY2VzLXJlYWN0L3BhY2thZ2VzL25leHQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmNvbnN0IEhlYWRlciA9ICh7IHJvdXRlcjogeyBwYXRobmFtZSB9IH0pID0+IChcbiAgPGhlYWRlcj5cbiAgICA8TGluayBwcmVmZXRjaCBocmVmPScvJz5cbiAgICAgIDxhIGNsYXNzTmFtZT17cGF0aG5hbWUgPT09ICcvJyA/ICdpcy1hY3RpdmUnIDogJyd9PkhvbWU8L2E+XG4gICAgPC9MaW5rPlxuICAgIDxMaW5rIHByZWZldGNoIGhyZWY9Jy9hYm91dCc+XG4gICAgICA8YSBjbGFzc05hbWU9e3BhdGhuYW1lID09PSAnL2Fib3V0JyA/ICdpcy1hY3RpdmUnIDogJyd9PkFib3V0PC9hPlxuICAgIDwvTGluaz5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBoZWFkZXIge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgICAgfVxuICAgICAgYSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG4gICAgICAuaXMtYWN0aXZlIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2hlYWRlcj5cbilcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihIZWFkZXIpXG4iXX0= */\n/*@ sourceURL=components/Header.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Header));

/***/ }),

/***/ "./components/PostList.js":
/*!********************************!*\
  !*** ./components/PostList.js ***!
  \********************************/
/*! exports provided: allPosts, allPostsQueryVars, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allPosts", function() { return allPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allPostsQueryVars", function() { return allPostsQueryVars; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _PostUpvoter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PostUpvoter */ "./components/PostUpvoter.js");
var _jsxFileName = "/Users/Declan/coding/yarn-workspaces-react/packages/next/components/PostList.js";



function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query allPosts($first: Int!, $skip: Int!) {\n    allPosts(orderBy: createdAt_DESC, first: $first, skip: $skip) {\n      id\n      title\n      votes\n      url\n      createdAt\n    }\n    _allPostsMeta {\n      count\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var POSTS_PER_PAGE = 10;

function PostList(_ref) {
  var _ref$data = _ref.data,
      loading = _ref$data.loading,
      error = _ref$data.error,
      allPosts = _ref$data.allPosts,
      _allPostsMeta = _ref$data._allPostsMeta,
      loadMorePosts = _ref.loadMorePosts;
  if (error) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
    message: "Error loading posts.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  });

  if (allPosts && allPosts.length) {
    var areMorePosts = allPosts.length < _allPostsMeta.count;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      className: "jsx-2126052553"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      className: "jsx-2126052553"
    }, allPosts.map(function (post, index) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        key: post.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        className: "jsx-2126052553"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        className: "jsx-2126052553"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        className: "jsx-2126052553"
      }, index + 1, ". "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: post.url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        className: "jsx-2126052553"
      }, post.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PostUpvoter__WEBPACK_IMPORTED_MODULE_5__["default"], {
        id: post.id,
        votes: post.votes,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      })));
    })), areMorePosts ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      onClick: function onClick() {
        return loadMorePosts();
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      className: "jsx-2126052553"
    }, ' ', loading ? 'Loading...' : 'Show More', ' ') : '', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      styleId: "2126052553",
      css: "section.jsx-2126052553{padding-bottom:20px;}li.jsx-2126052553{display:block;margin-bottom:10px;}div.jsx-2126052553{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}a.jsx-2126052553{font-size:14px;margin-right:10px;-webkit-text-decoration:none;text-decoration:none;padding-bottom:0;border:0;}span.jsx-2126052553{font-size:14px;margin-right:5px;}ul.jsx-2126052553{margin:0;padding:0;}button.jsx-2126052553:before{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;border-style:solid;border-width:6px 4px 0 4px;border-color:#ffffff transparent transparent transparent;content:'';height:0;margin-right:5px;width:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdExpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUNvQixBQUdpQyxBQUdOLEFBSUssQUFJSixBQU9BLEFBSU4sQUFJUyxTQUhSLEtBbkJTLENBUUQsQUFPRCxJQUtuQixDQXZCQSxZQW1CQSxDQWZBLEFBUXVCLHNDQWNGLFlBYkYsT0FjVSxHQXBCZCxPQU9KLFNBQ1gsUUFhMkQsa0RBcEIzRCxPQXFCYSxXQUNGLFNBQ1EsaUJBQ1QsUUFDViIsImZpbGUiOiJjb21wb25lbnRzL1Bvc3RMaXN0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9EZWNsYW4vY29kaW5nL3lhcm4td29ya3NwYWNlcy1yZWFjdC9wYWNrYWdlcy9uZXh0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnXG5pbXBvcnQgRXJyb3JNZXNzYWdlIGZyb20gJy4vRXJyb3JNZXNzYWdlJ1xuaW1wb3J0IFBvc3RVcHZvdGVyIGZyb20gJy4vUG9zdFVwdm90ZXInXG5cbmNvbnN0IFBPU1RTX1BFUl9QQUdFID0gMTBcblxuZnVuY3Rpb24gUG9zdExpc3QgKHtcbiAgZGF0YTogeyBsb2FkaW5nLCBlcnJvciwgYWxsUG9zdHMsIF9hbGxQb3N0c01ldGEgfSxcbiAgbG9hZE1vcmVQb3N0c1xufSkge1xuICBpZiAoZXJyb3IpIHJldHVybiA8RXJyb3JNZXNzYWdlIG1lc3NhZ2U9J0Vycm9yIGxvYWRpbmcgcG9zdHMuJyAvPlxuICBpZiAoYWxsUG9zdHMgJiYgYWxsUG9zdHMubGVuZ3RoKSB7XG4gICAgY29uc3QgYXJlTW9yZVBvc3RzID0gYWxsUG9zdHMubGVuZ3RoIDwgX2FsbFBvc3RzTWV0YS5jb3VudFxuICAgIHJldHVybiAoXG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHthbGxQb3N0cy5tYXAoKHBvc3QsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtwb3N0LmlkfT5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57aW5kZXggKyAxfS4gPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e3Bvc3QudXJsfT57cG9zdC50aXRsZX08L2E+XG4gICAgICAgICAgICAgICAgPFBvc3RVcHZvdGVyIGlkPXtwb3N0LmlkfSB2b3Rlcz17cG9zdC52b3Rlc30gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgICB7YXJlTW9yZVBvc3RzID8gKFxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gbG9hZE1vcmVQb3N0cygpfT5cbiAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICB7bG9hZGluZyA/ICdMb2FkaW5nLi4uJyA6ICdTaG93IE1vcmUnfXsnICd9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgJydcbiAgICAgICAgKX1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICB1bCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBidXR0b246YmVmb3JlIHtcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDZweCA0cHggMCA0cHg7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICNmZmZmZmYgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgKVxuICB9XG4gIHJldHVybiA8ZGl2PkxvYWRpbmc8L2Rpdj5cbn1cblxuZXhwb3J0IGNvbnN0IGFsbFBvc3RzID0gZ3FsYFxuICBxdWVyeSBhbGxQb3N0cygkZmlyc3Q6IEludCEsICRza2lwOiBJbnQhKSB7XG4gICAgYWxsUG9zdHMob3JkZXJCeTogY3JlYXRlZEF0X0RFU0MsIGZpcnN0OiAkZmlyc3QsIHNraXA6ICRza2lwKSB7XG4gICAgICBpZFxuICAgICAgdGl0bGVcbiAgICAgIHZvdGVzXG4gICAgICB1cmxcbiAgICAgIGNyZWF0ZWRBdFxuICAgIH1cbiAgICBfYWxsUG9zdHNNZXRhIHtcbiAgICAgIGNvdW50XG4gICAgfVxuICB9XG5gXG5leHBvcnQgY29uc3QgYWxsUG9zdHNRdWVyeVZhcnMgPSB7XG4gIHNraXA6IDAsXG4gIGZpcnN0OiBQT1NUU19QRVJfUEFHRVxufVxuXG4vLyBUaGUgYGdyYXBocWxgIHdyYXBwZXIgZXhlY3V0ZXMgYSBHcmFwaFFMIHF1ZXJ5IGFuZCBtYWtlcyB0aGUgcmVzdWx0c1xuLy8gYXZhaWxhYmxlIG9uIHRoZSBgZGF0YWAgcHJvcCBvZiB0aGUgd3JhcHBlZCBjb21wb25lbnQgKFBvc3RMaXN0KVxuZXhwb3J0IGRlZmF1bHQgZ3JhcGhxbChhbGxQb3N0cywge1xuICBvcHRpb25zOiB7XG4gICAgdmFyaWFibGVzOiBhbGxQb3N0c1F1ZXJ5VmFyc1xuICB9LFxuICBwcm9wczogKHsgZGF0YSB9KSA9PiB7XG4gICAgcmV0dXJuICh7XG4gICAgICBkYXRhLFxuICAgICAgbG9hZE1vcmVQb3N0czogKCkgPT4ge1xuICAgICAgICByZXR1cm4gZGF0YS5mZXRjaE1vcmUoe1xuICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgc2tpcDogZGF0YS5hbGxQb3N0cy5sZW5ndGhcbiAgICAgICAgICB9LFxuICAgICAgICAgIHVwZGF0ZVF1ZXJ5OiAocHJldmlvdXNSZXN1bHQsIHsgZmV0Y2hNb3JlUmVzdWx0IH0pID0+IHtcbiAgICAgICAgICAgIGlmICghZmV0Y2hNb3JlUmVzdWx0KSB7XG4gICAgICAgICAgICAgIHJldHVybiBwcmV2aW91c1Jlc3VsdFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHByZXZpb3VzUmVzdWx0LCB7XG4gICAgICAgICAgICAgIC8vIEFwcGVuZCB0aGUgbmV3IHBvc3RzIHJlc3VsdHMgdG8gdGhlIG9sZCBvbmVcbiAgICAgICAgICAgICAgYWxsUG9zdHM6IFsuLi5wcmV2aW91c1Jlc3VsdC5hbGxQb3N0cywgLi4uZmV0Y2hNb3JlUmVzdWx0LmFsbFBvc3RzXVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxufSkoUG9zdExpc3QpXG4iXX0= */\n/*@ sourceURL=components/PostList.js */"
    }));
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    }
  }, "Loading");
}

var allPosts = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());
var allPostsQueryVars = {
  skip: 0,
  first: POSTS_PER_PAGE // The `graphql` wrapper executes a GraphQL query and makes the results
  // available on the `data` prop of the wrapped component (PostList)

};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["graphql"])(allPosts, {
  options: {
    variables: allPostsQueryVars
  },
  props: function props(_ref2) {
    var data = _ref2.data;
    return {
      data: data,
      loadMorePosts: function loadMorePosts() {
        return data.fetchMore({
          variables: {
            skip: data.allPosts.length
          },
          updateQuery: function updateQuery(previousResult, _ref3) {
            var fetchMoreResult = _ref3.fetchMoreResult;

            if (!fetchMoreResult) {
              return previousResult;
            }

            return Object.assign({}, previousResult, {
              // Append the new posts results to the old one
              allPosts: _toConsumableArray(previousResult.allPosts).concat(_toConsumableArray(fetchMoreResult.allPosts))
            });
          }
        });
      }
    };
  }
})(PostList));

/***/ }),

/***/ "./components/PostUpvoter.js":
/*!***********************************!*\
  !*** ./components/PostUpvoter.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/Declan/coding/yarn-workspaces-react/packages/next/components/PostUpvoter.js";


function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation updatePost($id: ID!, $votes: Int) {\n    updatePost(id: $id, votes: $votes) {\n      id\n      __typename\n      votes\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





function PostUpvoter(_ref) {
  var upvote = _ref.upvote,
      votes = _ref.votes,
      id = _ref.id;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: function onClick() {
      return upvote(id, votes + 1);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: "jsx-852540806"
  }, votes, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "852540806",
    css: "button.jsx-852540806{background-color:transparent;border:1px solid #e4e4e4;color:#000;}button.jsx-852540806:active{background-color:transparent;}button.jsx-852540806:before{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;border-color:transparent transparent #000000 transparent;border-style:solid;border-width:0 4px 6px 4px;content:'';height:0;margin-right:5px;width:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdFVwdm90ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUWtCLEFBR3dDLEFBS0EsQUFHWCw2QkFQTyxBQUszQix5QkFKYSxXQUNiLE1BTTJELHlEQUN0QyxtQkFDUSwyQkFDaEIsV0FDRixTQUNRLGlCQUNULFFBQ1YiLCJmaWxlIjoiY29tcG9uZW50cy9Qb3N0VXB2b3Rlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvRGVjbGFuL2NvZGluZy95YXJuLXdvcmtzcGFjZXMtcmVhY3QvcGFja2FnZXMvbmV4dCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGdyYXBocWwgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5pbXBvcnQgeyBncWwgfSBmcm9tICdhcG9sbG8tYm9vc3QnXG5cbmZ1bmN0aW9uIFBvc3RVcHZvdGVyICh7IHVwdm90ZSwgdm90ZXMsIGlkIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHVwdm90ZShpZCwgdm90ZXMgKyAxKX0+XG4gICAgICB7dm90ZXN9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U0ZTRlNDtcbiAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246YWN0aXZlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246YmVmb3JlIHtcbiAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjMDAwMDAwIHRyYW5zcGFyZW50O1xuICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgICAgYm9yZGVyLXdpZHRoOiAwIDRweCA2cHggNHB4O1xuICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvYnV0dG9uPlxuICApXG59XG5cbmNvbnN0IHVwdm90ZVBvc3QgPSBncWxgXG4gIG11dGF0aW9uIHVwZGF0ZVBvc3QoJGlkOiBJRCEsICR2b3RlczogSW50KSB7XG4gICAgdXBkYXRlUG9zdChpZDogJGlkLCB2b3RlczogJHZvdGVzKSB7XG4gICAgICBpZFxuICAgICAgX190eXBlbmFtZVxuICAgICAgdm90ZXNcbiAgICB9XG4gIH1cbmBcblxuZXhwb3J0IGRlZmF1bHQgZ3JhcGhxbCh1cHZvdGVQb3N0LCB7XG4gIHByb3BzOiAoeyBvd25Qcm9wcywgbXV0YXRlIH0pID0+ICh7XG4gICAgdXB2b3RlOiAoaWQsIHZvdGVzKSA9PlxuICAgICAgbXV0YXRlKHtcbiAgICAgICAgdmFyaWFibGVzOiB7IGlkLCB2b3RlcyB9LFxuICAgICAgICBvcHRpbWlzdGljUmVzcG9uc2U6IHtcbiAgICAgICAgICBfX3R5cGVuYW1lOiAnTXV0YXRpb24nLFxuICAgICAgICAgIHVwZGF0ZVBvc3Q6IHtcbiAgICAgICAgICAgIF9fdHlwZW5hbWU6ICdQb3N0JyxcbiAgICAgICAgICAgIGlkOiBvd25Qcm9wcy5pZCxcbiAgICAgICAgICAgIHZvdGVzOiBvd25Qcm9wcy52b3RlcyArIDFcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gIH0pXG59KShQb3N0VXB2b3RlcilcbiJdfQ== */\n/*@ sourceURL=components/PostUpvoter.js */"
  }));
}

var upvotePost = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_3__["gql"])(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["graphql"])(upvotePost, {
  props: function props(_ref2) {
    var ownProps = _ref2.ownProps,
        mutate = _ref2.mutate;
    return {
      upvote: function upvote(id, votes) {
        return mutate({
          variables: {
            id: id,
            votes: votes
          },
          optimisticResponse: {
            __typename: 'Mutation',
            updatePost: {
              __typename: 'Post',
              id: ownProps.id,
              votes: ownProps.votes + 1
            }
          }
        });
      }
    };
  }
})(PostUpvoter));

/***/ }),

/***/ "./components/Submit.js":
/*!******************************!*\
  !*** ./components/Submit.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _PostList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PostList */ "./components/PostList.js");
/* harmony import */ var _8securities_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @8securities/ui */ "../../node_modules/@8securities/ui/index.js");
var _jsxFileName = "/Users/Declan/coding/yarn-workspaces-react/packages/next/components/Submit.js";



function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation createPost($title: String!, $url: String!) {\n    createPost(title: $title, url: $url) {\n      id\n      title\n      votes\n      url\n      createdAt\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






function Submit(_ref) {
  var createPost = _ref.createPost;

  function handleSubmit(event) {
    event.preventDefault();
    var form = event.target;
    var formData = new window.FormData(form);
    createPost(formData.get('title'), formData.get('url'));
    form.reset();
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    className: "jsx-4286934451"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    className: "jsx-4286934451"
  }, "Submit"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    placeholder: "title",
    name: "title",
    type: "text",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    className: "jsx-4286934451"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    placeholder: "url",
    name: "url",
    type: "url",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    className: "jsx-4286934451"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_8securities_ui__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, "Submit"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "4286934451",
    css: "form.jsx-4286934451{border-bottom:1px solid #ececec;padding-bottom:20px;margin-bottom:20px;}h1.jsx-4286934451{font-size:20px;}input.jsx-4286934451{display:block;margin-bottom:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU3VibWl0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCa0IsQUFHMkMsQUFLakIsQUFHRCxjQUNLLENBSHJCLGlCQUxzQixDQVN0QixtQkFScUIsbUJBQ3JCIiwiZmlsZSI6ImNvbXBvbmVudHMvU3VibWl0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9EZWNsYW4vY29kaW5nL3lhcm4td29ya3NwYWNlcy1yZWFjdC9wYWNrYWdlcy9uZXh0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnXG5pbXBvcnQgeyBhbGxQb3N0cywgYWxsUG9zdHNRdWVyeVZhcnMgfSBmcm9tICcuL1Bvc3RMaXN0J1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQDhzZWN1cml0aWVzL3VpJ1xuXG5mdW5jdGlvbiBTdWJtaXQgKHsgY3JlYXRlUG9zdCB9KSB7XG4gIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdCAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBjb25zdCBmb3JtID0gZXZlbnQudGFyZ2V0XG5cbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyB3aW5kb3cuRm9ybURhdGEoZm9ybSlcbiAgICBjcmVhdGVQb3N0KGZvcm1EYXRhLmdldCgndGl0bGUnKSwgZm9ybURhdGEuZ2V0KCd1cmwnKSlcblxuICAgIGZvcm0ucmVzZXQoKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgIDxoMT5TdWJtaXQ8L2gxPlxuICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPSd0aXRsZScgbmFtZT0ndGl0bGUnIHR5cGU9J3RleHQnIHJlcXVpcmVkIC8+XG4gICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9J3VybCcgbmFtZT0ndXJsJyB0eXBlPSd1cmwnIHJlcXVpcmVkIC8+XG4gICAgICA8QnV0dG9uIHR5cGU9J3N1Ym1pdCc+U3VibWl0PC9CdXR0b24+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGZvcm0ge1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWNlY2VjO1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaDEge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZm9ybT5cbiAgKVxufVxuXG5jb25zdCBjcmVhdGVQb3N0ID0gZ3FsYFxuICBtdXRhdGlvbiBjcmVhdGVQb3N0KCR0aXRsZTogU3RyaW5nISwgJHVybDogU3RyaW5nISkge1xuICAgIGNyZWF0ZVBvc3QodGl0bGU6ICR0aXRsZSwgdXJsOiAkdXJsKSB7XG4gICAgICBpZFxuICAgICAgdGl0bGVcbiAgICAgIHZvdGVzXG4gICAgICB1cmxcbiAgICAgIGNyZWF0ZWRBdFxuICAgIH1cbiAgfVxuYFxuXG5leHBvcnQgZGVmYXVsdCBncmFwaHFsKGNyZWF0ZVBvc3QsIHtcbiAgcHJvcHM6ICh7IG11dGF0ZSB9KSA9PiAoe1xuICAgIGNyZWF0ZVBvc3Q6ICh0aXRsZSwgdXJsKSA9PlxuICAgICAgbXV0YXRlKHtcbiAgICAgICAgdmFyaWFibGVzOiB7IHRpdGxlLCB1cmwgfSxcbiAgICAgICAgdXBkYXRlOiAocHJveHksIHsgZGF0YTogeyBjcmVhdGVQb3N0IH0gfSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGRhdGEgPSBwcm94eS5yZWFkUXVlcnkoe1xuICAgICAgICAgICAgcXVlcnk6IGFsbFBvc3RzLFxuICAgICAgICAgICAgdmFyaWFibGVzOiBhbGxQb3N0c1F1ZXJ5VmFyc1xuICAgICAgICAgIH0pXG4gICAgICAgICAgcHJveHkud3JpdGVRdWVyeSh7XG4gICAgICAgICAgICBxdWVyeTogYWxsUG9zdHMsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgIC4uLmRhdGEsXG4gICAgICAgICAgICAgIGFsbFBvc3RzOiBbY3JlYXRlUG9zdCwgLi4uZGF0YS5hbGxQb3N0c11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2YXJpYWJsZXM6IGFsbFBvc3RzUXVlcnlWYXJzXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgfSlcbn0pKFN1Ym1pdClcbiJdfQ== */\n/*@ sourceURL=components/Submit.js */"
  }));
}

var createPost = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["graphql"])(createPost, {
  props: function props(_ref2) {
    var mutate = _ref2.mutate;
    return {
      createPost: function createPost(title, url) {
        return mutate({
          variables: {
            title: title,
            url: url
          },
          update: function update(proxy, _ref3) {
            var createPost = _ref3.data.createPost;
            var data = proxy.readQuery({
              query: _PostList__WEBPACK_IMPORTED_MODULE_4__["allPosts"],
              variables: _PostList__WEBPACK_IMPORTED_MODULE_4__["allPostsQueryVars"]
            });
            proxy.writeQuery({
              query: _PostList__WEBPACK_IMPORTED_MODULE_4__["allPosts"],
              data: _objectSpread({}, data, {
                allPosts: [createPost].concat(_toConsumableArray(data.allPosts))
              }),
              variables: _PostList__WEBPACK_IMPORTED_MODULE_4__["allPostsQueryVars"]
            });
          }
        });
      }
    };
  }
})(Submit));

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/App */ "./components/App.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Submit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Submit */ "./components/Submit.js");
/* harmony import */ var _components_PostList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PostList */ "./components/PostList.js");
var _jsxFileName = "/Users/Declan/coding/yarn-workspaces-react/packages/next/pages/index.js";





/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Submit__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PostList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }));
});

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "apollo-boost":
/*!*******************************!*\
  !*** external "apollo-boost" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "lodash/find":
/*!******************************!*\
  !*** external "lodash/find" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/find");

/***/ }),

/***/ "lodash/isArray":
/*!*********************************!*\
  !*** external "lodash/isArray" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/isArray");

/***/ }),

/***/ "lodash/omit":
/*!******************************!*\
  !*** external "lodash/omit" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/omit");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "react-select":
/*!*******************************!*\
  !*** external "react-select" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "styled-theme":
/*!*******************************!*\
  !*** external "styled-theme" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-theme");

/***/ }),

/***/ "styled-tools":
/*!*******************************!*\
  !*** external "styled-tools" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-tools");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map