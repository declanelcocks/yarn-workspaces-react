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
/*!*********************************************************************************************!*\
  !*** /Users/declonelcocks/code/yarn-workspaces-react/node_modules/@8securities/ui/index.js ***!
  \*********************************************************************************************/
/*! exports provided: add, Anchor, Badge, Block, Button, Card, Field, Heading, Icon, IconButton, Input, Label, Menu, Modal, P, Select */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony import */ var _src_Anchor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/Anchor */ "../../node_modules/@8securities/ui/src/Anchor/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Anchor", function() { return _src_Anchor__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _src_Badge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/Badge */ "../../node_modules/@8securities/ui/src/Badge/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Badge", function() { return _src_Badge__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _src_Block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/Block */ "../../node_modules/@8securities/ui/src/Block/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Block", function() { return _src_Block__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _src_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/Button */ "../../node_modules/@8securities/ui/src/Button/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _src_Button__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _src_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/Card */ "../../node_modules/@8securities/ui/src/Card/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return _src_Card__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _src_Field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/Field */ "../../node_modules/@8securities/ui/src/Field/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Field", function() { return _src_Field__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _src_Heading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/Heading */ "../../node_modules/@8securities/ui/src/Heading/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Heading", function() { return _src_Heading__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _src_Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/Icon */ "../../node_modules/@8securities/ui/src/Icon/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return _src_Icon__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _src_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/IconButton */ "../../node_modules/@8securities/ui/src/IconButton/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconButton", function() { return _src_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _src_Input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/Input */ "../../node_modules/@8securities/ui/src/Input/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _src_Input__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _src_Label__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/Label */ "../../node_modules/@8securities/ui/src/Label/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return _src_Label__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _src_Menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./src/Menu */ "../../node_modules/@8securities/ui/src/Menu/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return _src_Menu__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _src_Modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./src/Modal */ "../../node_modules/@8securities/ui/src/Modal/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return _src_Modal__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _src_P__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./src/P */ "../../node_modules/@8securities/ui/src/P/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "P", function() { return _src_P__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _src_Select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./src/Select */ "../../node_modules/@8securities/ui/src/Select/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return _src_Select__WEBPACK_IMPORTED_MODULE_14__["default"]; });

var add = function add(a, b) {
  return a + b;
};
















/***/ }),

/***/ "../../node_modules/@8securities/ui/src/Anchor/index.js":
/*!********************************************************************************************************!*\
  !*** /Users/declonelcocks/code/yarn-workspaces-react/node_modules/@8securities/ui/src/Anchor/index.js ***!
  \********************************************************************************************************/
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
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  text-decoration: none;\n  color: ", ";\n  transition: all 0.1s ease;\n\n  &:hover,\n  &:focus {\n    color: ", ";\n    cursor: pointer;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var Anchor = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.a(_templateObject(), Object(styled_tools__WEBPACK_IMPORTED_MODULE_4__["ifProp"])({
  palette: 'grayscale'
}, Object(styled_theme__WEBPACK_IMPORTED_MODULE_3__["palette"])(0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_3__["palette"])(3)), Object(styled_theme__WEBPACK_IMPORTED_MODULE_3__["palette"])(0));
Anchor.propTypes = {
  palette: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  reverse: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  href: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
Anchor.defaultProps = {
  palette: 'primary'
};
/* harmony default export */ __webpack_exports__["default"] = (Anchor);

/***/ }),

/***/ "../../node_modules/@8securities/ui/src/Badge/index.js":
/*!*******************************************************************************************************!*\
  !*** /Users/declonelcocks/code/yarn-workspaces-react/node_modules/@8securities/ui/src/Badge/index.js ***!
  \*******************************************************************************************************/
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
/*!*******************************************************************************************************!*\
  !*** /Users/declonelcocks/code/yarn-workspaces-react/node_modules/@8securities/ui/src/Block/index.js ***!
  \*******************************************************************************************************/
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
/*!********************************************************************************************************!*\
  !*** /Users/declonelcocks/code/yarn-workspaces-react/node_modules/@8securities/ui/src/Button/index.js ***!
  \********************************************************************************************************/
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
var _jsxFileName = "/Users/declonelcocks/code/yarn-workspaces-react/node_modules/@8securities/ui/src/Button/index.js";

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
/*!******************************************************************************************************!*\
  !*** /Users/declonelcocks/code/yarn-workspaces-react/node_modules/@8securities/ui/src/Card/index.js ***!
  \******************************************************************************************************/
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

/***/ "../../node_modules/@8securities/ui/src/Field/index.js":
/*!*******************************************************************************************************!*\
  !*** /Users/declonelcocks/code/yarn-workspaces-react/node_modules/@8securities/ui/src/Field/index.js ***!
  \*******************************************************************************************************/
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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recompose */ "recompose");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recompose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Block__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Block */ "../../node_modules/@8securities/ui/src/Block/index.js");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Label */ "../../node_modules/@8securities/ui/src/Label/index.js");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Input */ "../../node_modules/@8securities/ui/src/Input/index.js");
/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Select */ "../../node_modules/@8securities/ui/src/Select/index.js");
var _jsxFileName = "/Users/declonelcocks/code/yarn-workspaces-react/node_modules/@8securities/ui/src/Field/index.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-size: 0.8125rem; /* 13px */\n  min-height: 1.5rem;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  label {\n    margin-bottom: 1rem;\n\n    input[type='checkbox'],\n    input[type='radio'] {\n      margin-right: 0.5rem;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }










var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject());
var Error = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_Block__WEBPACK_IMPORTED_MODULE_5__["default"])(_templateObject2());

var renderInput = function renderInput(_ref, invalid) {
  var isDirty = _ref.isDirty,
      setIsDirty = _ref.setIsDirty,
      props = _objectWithoutProperties(_ref, ["isDirty", "setIsDirty"]);

  var type = props.type,
      input = props.input;

  switch (type) {
    case 'select':
      {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Select__WEBPACK_IMPORTED_MODULE_8__["default"], _extends({
          invalid: invalid,
          isDirty: isDirty,
          setIsDirty: setIsDirty
        }, props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        }));
      }

    case 'multi-select':
      {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Select__WEBPACK_IMPORTED_MODULE_8__["default"], _extends({
          invalid: invalid,
          isDirty: isDirty,
          setIsDirty: setIsDirty
        }, props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        }));
      }

    default:
      {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Input__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({
          invalid: invalid
        }, input, props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          }
        }));
      }
  }
};

var Field = function Field(props) {
  var type = props.type,
      label = props.label,
      input = props.input,
      meta = props.meta,
      isDirty = props.isDirty;
  var renderInputFirst = type === 'checkbox' || type === 'radio';
  var invalid = meta.touched && !!meta.error; // react-select does not set `meta.touched` to `true` after selecting an option
  // instead, it does set `meta.active` to `true` after choosing an option
  // it never sets this back to `false`, so we'll treat it as react-select's
  // `touched` value

  if (type === 'select' || type === 'multi-select') {
    invalid = !!meta.error;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    }
  }, renderInputFirst && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Input__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({
    type: type,
    invalid: invalid
  }, input, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  })), label && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Label__WEBPACK_IMPORTED_MODULE_6__["default"], {
    htmlFor: input.id,
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
      active: meta.active
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    }
  }, label), !renderInputFirst && renderInput(props, invalid), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Error, {
    id: "".concat(input.name, "Error"),
    role: "alert",
    palette: "danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    }
  }, type === 'select' || type === 'multi-select' ? invalid && meta.error && isDirty && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    }
  }, meta.error) : invalid && meta.error && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    }
  }, meta.error)));
};

var conditionPropType = function conditionPropType(condition, passType, failType) {
  return function (props, propName, componentName) {
    var propTypes = _defineProperty({}, propName, condition(props) ? passType : failType);

    return prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.checkPropTypes(propTypes, props, 'prop', componentName);
  };
};

Field.propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  input: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
    onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
  }),
  meta: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    error: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  }),
  options: conditionPropType(function (props) {
    return props.type === 'select';
  }, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array),
  // Used by select/multi-select to manually set dirty after a
  // blur event. `react-select` doesn't handle it well enough to
  // handle showing our error messages and setting the invalid state
  isDirty: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  setIsDirty: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
Field.defaultProps = {
  type: 'text'
};
/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_4__["compose"])(Object(recompose__WEBPACK_IMPORTED_MODULE_4__["withState"])('isDirty', 'setIsDirty', false))(Field));

/***/ }),

/***/ "../../node_modules/@8securities/ui/src/Heading/index.js":
/*!*********************************************************************************************************!*\
  !*** /Users/declonelcocks/code/yarn-workspaces-react/node_modules/@8securities/ui/src/Heading/index.js ***!
  \*********************************************************************************************************/
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

/***/ "../../node_modules/@8securities/ui/src/Icon/icons sync recursive ./!../../node_modules/raw-loader/index.js!./ ^\\.\\/.*\\.svg$":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** /Users/declonelcocks/code/yarn-workspaces-react/node_modules/@8securities/ui/src/Icon/icons sync /Users/declonelcocks/code/yarn-workspaces-react/node_modules/raw-loader ^\.\/.*\.svg$ ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./arrow-down.svg": "../../node_modules/raw-loader/index.js!../../node_modules/@8securities/ui/src/Icon/icons/arrow-down.svg",
	"./basket.svg": "../../node_modules/raw-loader/index.js!../../node_modules/@8securities/ui/src/Icon/icons/basket.svg",
	"./bell.svg": "../../node_modules/raw-loader/index.js!../../node_modules/@8securities/ui/src/Icon/icons/bell.svg",
	"./cart.svg": "../../node_modules/raw-loader/index.js!../../node_modules/@8securities/ui/src/Icon/icons/cart.svg",
	"./close.svg": "../../node_modules/raw-loader/index.js!../../node_modules/@8securities/ui/src/Icon/icons/close.svg",
	"./copy.svg": "../../node_modules/raw-loader/index.js!../../node_modules/@8securities/ui/src/Icon/icons/copy.svg",
	"./docs.svg": "../../node_modules/raw-loader/index.js!../../node_modules/@8securities/ui/src/Icon/icons/docs.svg",
	"./facebook-f.svg": "../../node_modules/raw-loader/index.js!../../node_modules/@8securities/ui/src/Icon/icons/facebook-f.svg",
	"./facebook.svg": "../../node_modules/raw-loader/index.js!../../node_modules/@8securities/ui/src/Icon/icons/facebook.svg",
	"./github.svg": "../../node_modules/raw-loader/index.js!../../node_modules/@8securities/ui/src/Icon/icons/github.svg",
	"./heart.svg": "../../node_modules/raw-loader/index.js!../../node_modules/@8securities/ui/src/Icon/icons/heart.svg",
	"./info.svg": "../../node_modules/raw-loader/index.js!../../node_modules/@8securities/ui/src/Icon/icons/info.svg",
	"./linkedin.svg": "../../node_modules/raw-loader/index.js!../../node_modules/@8securities/ui/src/Icon/icons/linkedin.svg",
	"./logo.svg": "../../node_modules/raw-loader/index.js!../../node_modules/@8securities/ui/src/Icon/icons/logo.svg",
	"./twitter.svg": "../../node_modules/raw-loader/index.js!../../node_modules/@8securities/ui/src/Icon/icons/twitter.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../node_modules/@8securities/ui/src/Icon/icons sync recursive ./!../../node_modules/raw-loader/index.js!./ ^\\.\\/.*\\.svg$";

/***/ }),

/***/ "../../node_modules/@8securities/ui/src/Icon/index.js":
/*!******************************************************************************************************!*\
  !*** /Users/declonelcocks/code/yarn-workspaces-react/node_modules/@8securities/ui/src/Icon/index.js ***!
  \******************************************************************************************************/
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
var _jsxFileName = "/Users/declonelcocks/code/yarn-workspaces-react/node_modules/@8securities/ui/src/Icon/index.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n      &:hover > svg {\n        fill: ", ";\n        stroke: ", ";\n        ", ";\n        ", ";\n        ", ";\n      }\n    "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  display: inline-block;\n  color: ", ";\n  height: ", ";\n  width: ", ";\n\n  & > svg {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    fill: currentcolor;\n    stroke: currentcolor;\n    ", ";\n  }\n\n  ", ";\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n      .filled {\n        fill: none;\n        stroke: none;\n      }\n      .unfilled {\n        fill: ", ";\n        stroke: ", ";\n      }\n    "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n      .filled {\n        fill: ", ";\n        stroke: ", ";\n      }\n      .unfilled {\n        fill: none;\n        stroke: none;\n      }\n    "]);

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
  var data = _taggedTemplateLiteral(["\n        .filled {\n          fill: ", ";\n          stroke: ", ";\n        }\n      "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      .filled {\n        fill: currentcolor;\n        stroke: currentcolor;\n      }\n      .unfilled {\n        fill: none;\n        stroke: none;\n      }\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  .filled {\n    fill: none;\n    stroke: none;\n  }\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var fillStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject(), Object(styled_tools__WEBPACK_IMPORTED_MODULE_4__["ifProp"])('filled', Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject2())));
var fillHover = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject3(), Object(styled_tools__WEBPACK_IMPORTED_MODULE_4__["ifProp"])('filled', Object(styled_tools__WEBPACK_IMPORTED_MODULE_4__["ifProp"])('unfillOnHover', null, Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject4(), function (_ref) {
  var hoverPalette = _ref.hoverPalette;
  return Object(styled_theme__WEBPACK_IMPORTED_MODULE_3__["palette"])(hoverPalette, hoverPalette === 'grayscale' ? 0 : 3);
}, function (_ref2) {
  var hoverPalette = _ref2.hoverPalette;
  return Object(styled_theme__WEBPACK_IMPORTED_MODULE_3__["palette"])(hoverPalette, hoverPalette === 'grayscale' ? 0 : 3);
}))));
var fillOnHover = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject5(), Object(styled_tools__WEBPACK_IMPORTED_MODULE_4__["ifProp"])('fillOnHover', Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject6(), function (_ref3) {
  var hoverPalette = _ref3.hoverPalette;
  return Object(styled_theme__WEBPACK_IMPORTED_MODULE_3__["palette"])(hoverPalette, hoverPalette === 'grayscale' ? 0 : 3);
}, function (_ref4) {
  var hoverPalette = _ref4.hoverPalette;
  return Object(styled_theme__WEBPACK_IMPORTED_MODULE_3__["palette"])(hoverPalette, hoverPalette === 'grayscale' ? 0 : 3);
})));
var unfillOnHover = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject7(), Object(styled_tools__WEBPACK_IMPORTED_MODULE_4__["ifProp"])('unfillOnHover', Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject8(), function (_ref5) {
  var hoverPalette = _ref5.hoverPalette;
  return Object(styled_theme__WEBPACK_IMPORTED_MODULE_3__["palette"])(hoverPalette, hoverPalette === 'grayscale' ? 0 : 3);
}, function (_ref6) {
  var hoverPalette = _ref6.hoverPalette;
  return Object(styled_theme__WEBPACK_IMPORTED_MODULE_3__["palette"])(hoverPalette, hoverPalette === 'grayscale' ? 0 : 3);
})));
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.span(_templateObject9(), Object(styled_tools__WEBPACK_IMPORTED_MODULE_4__["ifProp"])('palette', Object(styled_tools__WEBPACK_IMPORTED_MODULE_4__["ifProp"])({
  palette: 'white'
}, Object(styled_theme__WEBPACK_IMPORTED_MODULE_3__["palette"])({
  grayscale: 0
}, 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_3__["palette"])({
  grayscale: 0
}, 3)), 'currentcolor'), function (_ref7) {
  var height = _ref7.height;
  return "".concat(height, "rem");
}, function (_ref8) {
  var height = _ref8.height;
  return "".concat(height, "rem");
}, fillStyle, Object(styled_tools__WEBPACK_IMPORTED_MODULE_4__["ifProp"])('hoverPalette', Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject10(), function (_ref9) {
  var hoverPalette = _ref9.hoverPalette;
  return Object(styled_theme__WEBPACK_IMPORTED_MODULE_3__["palette"])(hoverPalette, hoverPalette === 'grayscale' ? 0 : 3);
}, function (_ref10) {
  var hoverPalette = _ref10.hoverPalette;
  return Object(styled_theme__WEBPACK_IMPORTED_MODULE_3__["palette"])(hoverPalette, hoverPalette === 'grayscale' ? 0 : 3);
}, unfillOnHover, fillOnHover, fillHover)));

var Icon = function Icon(_ref11) {
  var icon = _ref11.icon,
      props = _objectWithoutProperties(_ref11, ["icon"]);

  var svg = __webpack_require__("../../node_modules/@8securities/ui/src/Icon/icons sync recursive ./!../../node_modules/raw-loader/index.js!./ ^\\.\\/.*\\.svg$")("./".concat(icon, ".svg"));

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, _extends({}, props, {
    dangerouslySetInnerHTML: {
      __html: svg
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    }
  }));
};

Icon.propTypes = {
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  height: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  hoverPalette: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  palette: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  reverse: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
Icon.defaultProps = {
  height: '1.5'
};
/* harmony default export */ __webpack_exports__["default"] = (Icon);

/***/ }),

/***/ "../../node_modules/@8securities/ui/src/IconButton/index.js":
/*!************************************************************************************************************!*\
  !*** /Users/declonelcocks/code/yarn-workspaces-react/node_modules/@8securities/ui/src/IconButton/index.js ***!
  \************************************************************************************************************/
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
/* harmony import */ var styled_tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-tools */ "styled-tools");
/* harmony import */ var styled_tools__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_tools__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Icon */ "../../node_modules/@8securities/ui/src/Icon/index.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Button */ "../../node_modules/@8securities/ui/src/Button/index.js");
var _jsxFileName = "/Users/declonelcocks/code/yarn-workspaces-react/node_modules/@8securities/ui/src/IconButton/index.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  flex: none;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  padding: 0.4375rem;\n\n  @media screen and (max-width: ", "px) {\n    display: ", ";\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      @media screen and (max-width: ", "px) {\n        width: auto;\n      }\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  max-width: 100%;\n  width: ", ";\n  min-height: 2.5rem;\n  padding: ", ";\n  box-sizing: border-box;\n\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_Button__WEBPACK_IMPORTED_MODULE_5__["default"])(_templateObject(), Object(styled_tools__WEBPACK_IMPORTED_MODULE_3__["ifProp"])('hasText', 'auto', '2.5rem'), Object(styled_tools__WEBPACK_IMPORTED_MODULE_3__["ifProp"])('hasText', '0 0.4375rem', 0), Object(styled_tools__WEBPACK_IMPORTED_MODULE_3__["ifProp"])('responsive', Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject2(), Object(styled_tools__WEBPACK_IMPORTED_MODULE_3__["prop"])('breakpoint'))));
var Text = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.span(_templateObject3(), Object(styled_tools__WEBPACK_IMPORTED_MODULE_3__["prop"])('breakpoint'), Object(styled_tools__WEBPACK_IMPORTED_MODULE_3__["ifProp"])('responsive', 'none !important'));
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject4());
var StyledIcon = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_Icon__WEBPACK_IMPORTED_MODULE_4__["default"])(_templateObject5());

var IconButton = function IconButton(_ref) {
  var icon = _ref.icon,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["icon", "children"]);

  var breakpoint = props.breakpoint,
      right = props.right,
      responsive = props.responsive;
  var iconElement = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledIcon, {
    icon: icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledButton, _extends({
    hasText: !!children
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }, right || iconElement, children && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Text, {
    className: "text",
    responsive: responsive,
    breakpoint: breakpoint,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }, children), right && iconElement));
};

IconButton.propTypes = {
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  responsive: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  breakpoint: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  right: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};
IconButton.defaultProps = {
  breakpoint: 420
};
/* harmony default export */ __webpack_exports__["default"] = (IconButton);

/***/ }),

/***/ "../../node_modules/@8securities/ui/src/Input/index.js":
/*!*******************************************************************************************************!*\
  !*** /Users/declonelcocks/code/yarn-workspaces-react/node_modules/@8securities/ui/src/Input/index.js ***!
  \*******************************************************************************************************/
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
var _jsxFileName = "/Users/declonelcocks/code/yarn-workspaces-react/node_modules/@8securities/ui/src/Input/index.js";

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
/*!*******************************************************************************************************!*\
  !*** /Users/declonelcocks/code/yarn-workspaces-react/node_modules/@8securities/ui/src/Label/index.js ***!
  \*******************************************************************************************************/
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

/***/ "../../node_modules/@8securities/ui/src/Menu/index.js":
/*!******************************************************************************************************!*\
  !*** /Users/declonelcocks/code/yarn-workspaces-react/node_modules/@8securities/ui/src/Menu/index.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-theme */ "styled-theme");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Anchor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Anchor */ "../../node_modules/@8securities/ui/src/Anchor/index.js");
var _jsxFileName = "/Users/declonelcocks/code/yarn-workspaces-react/node_modules/@8securities/ui/src/Menu/index.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n  margin: 0.75rem 0;\n  padding: 0 2rem;\n  text-align: left;\n\n  li {\n    display: inline-flex;\n    margin: 0;\n\n    &:not(:last-child) {\n      margin-right: 1rem;\n    }\n\n    a {\n      position: relative;\n      padding: 0.75rem 0;\n\n      &:before {\n        content: '';\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        width: 100%;\n        height: 1px;\n        background-color: transparent;\n        transition: all 0.1s ease;\n      }\n\n      &:focus,\n      &:hover {\n        &:before {\n          background-color: ", ";\n        }\n      }\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var MenuWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());
var List = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.ul(_templateObject2(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_2__["palette"])('grayscale', 0));

var MenuLink = function MenuLink(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Anchor__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
    palette: "grayscale"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }));
};

function Menu() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(List, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuLink, {
    to: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    }
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuLink, {
    to: "/counter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }, "Counter")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuLink, {
    to: "/posts",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }, "Posts")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuLink, {
    to: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }, "About"))));
}

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "../../node_modules/@8securities/ui/src/Modal/index.js":
/*!*******************************************************************************************************!*\
  !*** /Users/declonelcocks/code/yarn-workspaces-react/node_modules/@8securities/ui/src/Modal/index.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recompose */ "recompose");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recompose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-modal */ "react-modal");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-theme */ "styled-theme");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Heading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Heading */ "../../node_modules/@8securities/ui/src/Heading/index.js");
/* harmony import */ var _IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../IconButton */ "../../node_modules/@8securities/ui/src/IconButton/index.js");
var _jsxFileName = "/Users/declonelcocks/code/yarn-workspaces-react/node_modules/@8securities/ui/src/Modal/index.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  overflow: auto;\n  padding: 0 1rem;\n  margin-bottom: 1rem;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  margin: 0 1rem 0 0;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  padding: 1rem;\n\n  > *:first-child {\n    flex: 1;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  font-size: 1rem;\n  background-color: ", ";\n  border-radius: 0.125em;\n  color: ", ";\n  top: calc(50% - 1rem);\n  left: calc(50% - 1rem);\n  right: auto;\n  bottom: auto;\n  margin: 1rem calc(-50% + 1rem) 1rem 1rem;\n  transform: translate(-50%, 100%);\n  transition: transform 250ms ease-in-out;\n  outline: none;\n  box-sizing: border-box;\n  min-width: 320px;\n  max-width: calc(640px - 1rem);\n  max-height: calc(100% - 1rem);\n  padding-top: ", ";\n\n  @media screen and (max-width: 640px) {\n    width: calc(100% - 1rem);\n    min-width: 0;\n  }\n\n  &[class*='after-open'] {\n    transform: translate(-50%, -50%);\n  }\n\n  &[class*='before-close'] {\n    transform: translate(-50%, 100%);\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: fixed;\n  background-color: rgba(0, 0, 0, 0.5);\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  z-index: 9999;\n  transition: opacity 250ms ease-in-out;\n  opacity: 0;\n\n  &[class*='after-open'] {\n    opacity: 1;\n  }\n\n  &[class*='before-close'] {\n    opacity: 0;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  body.ReactModal__Body--open {\n    overflow: hidden;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["injectGlobal"])(_templateObject());
var overlayStyles = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject2());
var enhance = Object(recompose__WEBPACK_IMPORTED_MODULE_2__["compose"])(Object(recompose__WEBPACK_IMPORTED_MODULE_2__["lifecycle"])({
  componentWillMount: function componentWillMount() {
    react_modal__WEBPACK_IMPORTED_MODULE_4___default.a.setAppElement('body');
  }
}));
var ModalBox = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(enhance(react_modal__WEBPACK_IMPORTED_MODULE_4___default.a))(_templateObject3(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_5__["palette"])('grayscale', 0, true), Object(styled_theme__WEBPACK_IMPORTED_MODULE_5__["palette"])('grayscale', 0), function (_ref) {
  var hasHeader = _ref.hasHeader;
  return hasHeader ? 0 : '1rem';
});
var Header = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.header(_templateObject4());
var StyledHeading = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_Heading__WEBPACK_IMPORTED_MODULE_6__["default"])(_templateObject5());
var Content = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject6());
var StyledReactModal = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(function (_ref2) {
  var className = _ref2.className,
      props = _objectWithoutProperties(_ref2, ["className"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ModalBox, _extends({
    overlayClassName: className,
    closeTimeoutMS: 250
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    }
  }));
})(_templateObject7(), overlayStyles);

var Modal = function Modal(_ref3) {
  var children = _ref3.children,
      title = _ref3.title,
      closeable = _ref3.closeable,
      onClose = _ref3.onClose,
      props = _objectWithoutProperties(_ref3, ["children", "title", "closeable", "onClose"]);

  var hasHeader = title || closeable;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledReactModal, _extends({
    contentLabel: title || 'Modal',
    aria: {
      describedby: 'modal__description'
    },
    onRequestClose: onClose,
    hasHeader: hasHeader
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    }
  }), hasHeader && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledHeading, {
    level: 2,
    reverse: props.reverse,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    }
  }, title), closeable && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
    icon: "close",
    onClick: onClose,
    palette: "white",
    reverse: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, {
    id: "modal__description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    }
  }, children));
};

Modal.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  closeable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  reverse: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "../../node_modules/@8securities/ui/src/P/index.js":
/*!***************************************************************************************************!*\
  !*** /Users/declonelcocks/code/yarn-workspaces-react/node_modules/@8securities/ui/src/P/index.js ***!
  \***************************************************************************************************/
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
/*!********************************************************************************************************!*\
  !*** /Users/declonelcocks/code/yarn-workspaces-react/node_modules/@8securities/ui/src/Select/index.js ***!
  \********************************************************************************************************/
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
var _jsxFileName = "/Users/declonelcocks/code/yarn-workspaces-react/node_modules/@8securities/ui/src/Select/index.js";

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

/***/ "../../node_modules/raw-loader/index.js!../../node_modules/@8securities/ui/src/Icon/icons/arrow-down.svg":
/*!******************************************************************************************************************************************************************************************!*\
  !*** /Users/declonelcocks/code/yarn-workspaces-react/node_modules/raw-loader!/Users/declonelcocks/code/yarn-workspaces-react/node_modules/@8securities/ui/src/Icon/icons/arrow-down.svg ***!
  \******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 512\"><path d=\"M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z\"/></svg>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../node_modules/@8securities/ui/src/Icon/icons/basket.svg":
/*!**************************************************************************************************************************************************************************************!*\
  !*** /Users/declonelcocks/code/yarn-workspaces-react/node_modules/raw-loader!/Users/declonelcocks/code/yarn-workspaces-react/node_modules/@8securities/ui/src/Icon/icons/basket.svg ***!
  \**************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\"><path d=\"M576 216v16c0 13.255-10.745 24-24 24h-8l-26.113 182.788C514.509 462.435 494.257 480 470.37 480H105.63c-23.887 0-44.139-17.565-47.518-41.212L32 256h-8c-13.255 0-24-10.745-24-24v-16c0-13.255 10.745-24 24-24h67.341l106.78-146.821c10.395-14.292 30.407-17.453 44.701-7.058 14.293 10.395 17.453 30.408 7.058 44.701L170.477 192h235.046L326.12 82.821c-10.395-14.292-7.234-34.306 7.059-44.701 14.291-10.395 34.306-7.235 44.701 7.058L484.659 192H552c13.255 0 24 10.745 24 24zM312 392V280c0-13.255-10.745-24-24-24s-24 10.745-24 24v112c0 13.255 10.745 24 24 24s24-10.745 24-24zm112 0V280c0-13.255-10.745-24-24-24s-24 10.745-24 24v112c0 13.255 10.745 24 24 24s24-10.745 24-24zm-224 0V280c0-13.255-10.745-24-24-24s-24 10.745-24 24v112c0 13.255 10.745 24 24 24s24-10.745 24-24z\"/></svg>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../node_modules/@8securities/ui/src/Icon/icons/bell.svg":
/*!************************************************************************************************************************************************************************************!*\
  !*** /Users/declonelcocks/code/yarn-workspaces-react/node_modules/raw-loader!/Users/declonelcocks/code/yarn-workspaces-react/node_modules/@8securities/ui/src/Icon/icons/bell.svg ***!
  \************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\">\n  <path d=\"M425.403 330.939c-16.989-16.785-34.546-34.143-34.546-116.083 0-83.026-60.958-152.074-140.467-164.762A31.843 31.843 0 0 0 256 32c0-17.673-14.327-32-32-32s-32 14.327-32 32a31.848 31.848 0 0 0 5.609 18.095C118.101 62.783 57.143 131.831 57.143 214.857c0 81.933-17.551 99.292-34.543 116.078C-25.496 378.441 9.726 448 66.919 448H160c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64h93.08c57.19 0 92.415-69.583 44.323-117.061zM224 472c-13.234 0-24-10.766-24-24h48c0 13.234-10.766 24-24 24zm157.092-72H66.9c-16.762 0-25.135-20.39-13.334-32.191 28.585-28.585 51.577-55.724 51.577-152.952C105.143 149.319 158.462 96 224 96s118.857 53.319 118.857 118.857c0 97.65 23.221 124.574 51.568 152.952C406.278 379.661 397.783 400 381.092 400z\"/>\n</svg>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../node_modules/@8securities/ui/src/Icon/icons/cart.svg":
/*!************************************************************************************************************************************************************************************!*\
  !*** /Users/declonelcocks/code/yarn-workspaces-react/node_modules/raw-loader!/Users/declonelcocks/code/yarn-workspaces-react/node_modules/@8securities/ui/src/Icon/icons/cart.svg ***!
  \************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\"><path d=\"M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z\"/></svg>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../node_modules/@8securities/ui/src/Icon/icons/close.svg":
/*!*************************************************************************************************************************************************************************************!*\
  !*** /Users/declonelcocks/code/yarn-workspaces-react/node_modules/raw-loader!/Users/declonelcocks/code/yarn-workspaces-react/node_modules/@8securities/ui/src/Icon/icons/close.svg ***!
  \*************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg x=\"0px\" y=\"0px\" viewBox=\"0 0 32 32\" style=\"enable-background:new 0 0 32 32\" fill=\"none\">\n  <line style=\"stroke-width:2;stroke-miterlimit:10\" x1=\"8\" y1=\"8\" x2=\"24\" y2=\"24\" fill=\"none\"/>\n  <line style=\"stroke-width:2;stroke-miterlimit:10\" x1=\"24\" y1=\"8\" x2=\"8\" y2=\"24\" fill=\"none\"/>\n</svg>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../node_modules/@8securities/ui/src/Icon/icons/copy.svg":
/*!************************************************************************************************************************************************************************************!*\
  !*** /Users/declonelcocks/code/yarn-workspaces-react/node_modules/raw-loader!/Users/declonelcocks/code/yarn-workspaces-react/node_modules/@8securities/ui/src/Icon/icons/copy.svg ***!
  \************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 18.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.0//EN\" \"http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd\">\n<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.0\" id=\"Layer_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 24 24\" enable-background=\"new 0 0 24 24\" xml:space=\"preserve\">\n<g stroke=\"none\">\n\t<path d=\"M18,8v12H9V8H18 M18,6H9C7.9,6,7,6.9,7,8v12c0,1.1,0.9,2,2,2h9c1.1,0,2-0.9,2-2V8C20,6.9,19.1,6,18,6L18,6z\" stroke=\"none\"/>\n</g>\n<path d=\"M5,17V4h10V2H5C3.9,2,3,2.9,3,4v13H5z\" stroke=\"none\"/>\n</svg>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../node_modules/@8securities/ui/src/Icon/icons/docs.svg":
/*!************************************************************************************************************************************************************************************!*\
  !*** /Users/declonelcocks/code/yarn-workspaces-react/node_modules/raw-loader!/Users/declonelcocks/code/yarn-workspaces-react/node_modules/@8securities/ui/src/Icon/icons/docs.svg ***!
  \************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg aria-hidden=\"true\" version=\"1.1\" viewBox=\"0 0 16 16\">\n<path fill-rule=\"evenodd\" d=\"M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z\" stroke=\"none\"/>\n</svg>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../node_modules/@8securities/ui/src/Icon/icons/facebook-f.svg":
/*!******************************************************************************************************************************************************************************************!*\
  !*** /Users/declonelcocks/code/yarn-workspaces-react/node_modules/raw-loader!/Users/declonelcocks/code/yarn-workspaces-react/node_modules/@8securities/ui/src/Icon/icons/facebook-f.svg ***!
  \******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 264 512\"><path d=\"M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229\"/></svg>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../node_modules/@8securities/ui/src/Icon/icons/facebook.svg":
/*!****************************************************************************************************************************************************************************************!*\
  !*** /Users/declonelcocks/code/yarn-workspaces-react/node_modules/raw-loader!/Users/declonelcocks/code/yarn-workspaces-react/node_modules/@8securities/ui/src/Icon/icons/facebook.svg ***!
  \****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><path d=\"M448 80v352c0 26.5-21.5 48-48 48h-85.3V302.8h60.6l8.7-67.6h-69.3V192c0-19.6 5.4-32.9 33.5-32.9H384V98.7c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9H184v67.6h60.9V480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48z\"/></svg>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../node_modules/@8securities/ui/src/Icon/icons/github.svg":
/*!**************************************************************************************************************************************************************************************!*\
  !*** /Users/declonelcocks/code/yarn-workspaces-react/node_modules/raw-loader!/Users/declonelcocks/code/yarn-workspaces-react/node_modules/@8securities/ui/src/Icon/icons/github.svg ***!
  \**************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Layer_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 50 50\" enable-background=\"new 0 0 50 50\" xml:space=\"preserve\" stroke=\"none\">\n<path d=\"M25,1C11.8,1,1,11.8,1,25c0,10.2,6.4,18.9,15.3,22.4c0.9-0.2,1.7-1,1.7-2V41h-2.6c-1.9,0-3.5-0.9-4.3-2.3  c-0.2-0.4-0.4-0.9-0.6-1.4c-0.4-1.1-0.9-2.3-1.9-3C8.2,34,8,33.4,8.1,32.9c0.2-0.5,0.7-0.9,1.6-0.8c1,0.1,2.5,1.2,3.4,2.4  c0.8,1,1.4,1.6,2.6,1.6h0.3c0.9,0,3.1,0,3.5-0.4l0,0c0.3-0.4,0.5-0.7,0.8-1c-6-1.2-9.4-4.7-9.4-10c0-1.8,0.5-3.6,1.6-5.2  c-0.4-1.5-1.3-5.4,0.6-7.1l0.3-0.3h0.4c2.6,0,4.5,1.1,5.7,2c3.5-1.3,7.5-1.3,11,0c1.1-0.9,3-2,5.7-2h0.4l0.3,0.3  c1.9,1.8,1,5.6,0.6,7.1c1,1.6,1.6,3.4,1.6,5.2c0,5.3-3.4,8.8-9.3,10c1.5,1.6,2.3,4,2.3,5.9v4.9c0,1,0.7,1.8,1.7,2  C42.6,43.9,49,35.2,49,25C49,11.8,38.2,1,25,1z\" stroke=\"none\"/>\n</svg>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../node_modules/@8securities/ui/src/Icon/icons/heart.svg":
/*!*************************************************************************************************************************************************************************************!*\
  !*** /Users/declonelcocks/code/yarn-workspaces-react/node_modules/raw-loader!/Users/declonelcocks/code/yarn-workspaces-react/node_modules/@8securities/ui/src/Icon/icons/heart.svg ***!
  \*************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">\n  <path class=\"filled\" d=\"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z\"/>\n  <path class=\"unfilled\" d=\"M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z\"/>\n</svg>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../node_modules/@8securities/ui/src/Icon/icons/info.svg":
/*!************************************************************************************************************************************************************************************!*\
  !*** /Users/declonelcocks/code/yarn-workspaces-react/node_modules/raw-loader!/Users/declonelcocks/code/yarn-workspaces-react/node_modules/@8securities/ui/src/Icon/icons/info.svg ***!
  \************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"iso-8859-1\"?>\r\n<!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r\n<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 111.577 111.577\">\r\n<g>\r\n\t<path d=\"M78.962,99.536l-1.559,6.373c-4.677,1.846-8.413,3.251-11.195,4.217c-2.785,0.969-6.021,1.451-9.708,1.451\r\n\t\tc-5.662,0-10.066-1.387-13.207-4.142c-3.141-2.766-4.712-6.271-4.712-10.523c0-1.646,0.114-3.339,0.351-5.064\r\n\t\tc0.239-1.727,0.619-3.672,1.139-5.846l5.845-20.688c0.52-1.981,0.962-3.858,1.316-5.633c0.359-1.764,0.532-3.387,0.532-4.848\r\n\t\tc0-2.642-0.547-4.49-1.636-5.529c-1.089-1.036-3.167-1.562-6.252-1.562c-1.511,0-3.064,0.242-4.647,0.71\r\n\t\tc-1.59,0.47-2.949,0.924-4.09,1.346l1.563-6.378c3.829-1.559,7.489-2.894,10.99-4.002c3.501-1.111,6.809-1.667,9.938-1.667\r\n\t\tc5.623,0,9.962,1.359,13.009,4.077c3.047,2.72,4.57,6.246,4.57,10.591c0,0.899-0.1,2.483-0.315,4.747\r\n\t\tc-0.21,2.269-0.601,4.348-1.171,6.239l-5.82,20.605c-0.477,1.655-0.906,3.547-1.279,5.676c-0.385,2.115-0.569,3.731-0.569,4.815\r\n\t\tc0,2.736,0.61,4.604,1.833,5.597c1.232,0.993,3.354,1.487,6.368,1.487c1.415,0,3.025-0.251,4.814-0.744\r\n\t\tC76.854,100.348,78.155,99.915,78.962,99.536z M80.438,13.03c0,3.59-1.353,6.656-4.072,9.177c-2.712,2.53-5.98,3.796-9.803,3.796\r\n\t\tc-3.835,0-7.111-1.266-9.854-3.796c-2.738-2.522-4.11-5.587-4.11-9.177c0-3.583,1.372-6.654,4.11-9.207\r\n\t\tC59.447,1.274,62.729,0,66.563,0c3.822,0,7.091,1.277,9.803,3.823C79.087,6.376,80.438,9.448,80.438,13.03z\"/>\r\n</svg>\r\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../node_modules/@8securities/ui/src/Icon/icons/linkedin.svg":
/*!****************************************************************************************************************************************************************************************!*\
  !*** /Users/declonelcocks/code/yarn-workspaces-react/node_modules/raw-loader!/Users/declonelcocks/code/yarn-workspaces-react/node_modules/@8securities/ui/src/Icon/icons/linkedin.svg ***!
  \****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><path d=\"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z\"/></svg>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../node_modules/@8securities/ui/src/Icon/icons/logo.svg":
/*!************************************************************************************************************************************************************************************!*\
  !*** /Users/declonelcocks/code/yarn-workspaces-react/node_modules/raw-loader!/Users/declonelcocks/code/yarn-workspaces-react/node_modules/@8securities/ui/src/Icon/icons/logo.svg ***!
  \************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 152.34 272.43\">\n  <defs>\n    <style>\n      .a{fill:#006efb;}\n      .b{fill:#004195;}\n      .c{fill:#0058c8;}\n      .d{fill:#0058c8;}\n      .e{fill:#2f8aff;}\n      .f{fill:#004195;}\n      .g{fill:#2f8aff;}\n    </style>\n  </defs>\n  <path class=\"a\" d=\"M85.24,5.45c-.41-3.27.31-3.46,1.6-.43l63.8,150.43c1.29,3-.35,5.44-3.65,5.35l-36.44-1.07a7.25,7.25,0,0,1-6.74-6.13Z\"/>\n  <path class=\"b\" d=\"M117.71,252.83l33.18-94.19c.43-1.44.88-1.19-.23-3.16l-41.93,2.57c-1.88.1-11.14,1-10.93,2.68l14.81,93.2C113,257.05,116.63,255.81,117.71,252.83Z\"/>\n  <path class=\"c\" d=\"M64.39,267.22c-.62,1.53.17,2.42,1.76,2L115,255.68a3.72,3.72,0,0,0,2.61-3.79l-8.89-93.84a0,0,0,0,0,0,0Z\"/>\n  <path class=\"d\" d=\"M1.81,178.87,83.34,3.4a1.49,1.49,0,0,1,2.83.74L65.39,267.79c.43,1.42-.38,2-1.33.78L2,180.35A1.49,1.49,0,0,1,1.81,178.87Z\"/>\n  <path class=\"e\" d=\"M85.6,2.88,96,83.6l15.74-20.39L86.24,3.58C86.14,3.34,85.57,2.62,85.6,2.88Z\"/>\n  <path class=\"f\" d=\"M83.3,4.09a1.86,1.86,0,0,1,.8-1.38,1.37,1.37,0,0,1,.76-.17,1.42,1.42,0,0,1,1.33,1.25L108.73,158a.11.11,0,0,1,0,0l-42.66,108-1.23,3.1\"/>\n  <path class=\"g\" d=\"M73.19,149.41l3.33-48.32a.27.27,0,0,0-.3-.3l-41.11,6.83Z\"/>\n  <polygon class=\"c\" points=\"64.83 269.2 65.53 267.43 65.96 269.25 65.21 269.22 65.14 269.24 65.06 269.25 64.95 269.25 64.83 269.2\"/>\n</svg>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!../../node_modules/@8securities/ui/src/Icon/icons/twitter.svg":
/*!***************************************************************************************************************************************************************************************!*\
  !*** /Users/declonelcocks/code/yarn-workspaces-react/node_modules/raw-loader!/Users/declonelcocks/code/yarn-workspaces-react/node_modules/@8securities/ui/src/Icon/icons/twitter.svg ***!
  \***************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"/></svg>"

/***/ }),

/***/ "../../node_modules/react-select/dist/react-select.css":
/*!*******************************************************************************************************!*\
  !*** /Users/declonelcocks/code/yarn-workspaces-react/node_modules/react-select/dist/react-select.css ***!
  \*******************************************************************************************************/
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
var _jsxFileName = "/Users/declonelcocks/code/yarn-workspaces-react/packages/next/components/App.js";


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
    css: "*{font-family:Menlo,Monaco,'Lucida Console','Liberation Mono', 'DejaVu Sans Mono','Bitstream Vera Sans Mono','Courier New', monospace,serif;}body{margin:0;padding:25px 50px;}a{color:#22bad9;}p{font-size:14px;line-height:24px;}article{margin:0 auto;max-width:650px;}button{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#22bad9;border:0;color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:5px 7px;}button:active{background-color:#1b9db7;-webkit-transition:background-color 0.3s;transition:background-color 0.3s;}button:focus{outline:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUd1QixBQUsyQixBQUdULEFBSUssQUFHQyxBQUlELEFBSUssQUFRTSxBQUlaLFNBMUJLLElBMkJwQixDQXZCQSxBQU9rQixDQUpDLFVBZ0JnQixFQXRCbkMsR0FXQSxFQUpBLDZEQU8yQixNQVMzQixtQkFSVyxTQUNHLFdBcEJkLENBcUJlLDBFQUNHLGdCQUNsQiIsImZpbGUiOiJjb21wb25lbnRzL0FwcC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZGVjbG9uZWxjb2Nrcy9jb2RlL3lhcm4td29ya3NwYWNlcy1yZWFjdC9wYWNrYWdlcy9uZXh0Iiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8bWFpbj5cbiAgICB7Y2hpbGRyZW59XG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICoge1xuICAgICAgICBmb250LWZhbWlseTogTWVubG8sIE1vbmFjbywgJ0x1Y2lkYSBDb25zb2xlJywgJ0xpYmVyYXRpb24gTW9ubycsXG4gICAgICAgICAgJ0RlamFWdSBTYW5zIE1vbm8nLCAnQml0c3RyZWFtIFZlcmEgU2FucyBNb25vJywgJ0NvdXJpZXIgTmV3JyxcbiAgICAgICAgICBtb25vc3BhY2UsIHNlcmlmO1xuICAgICAgfVxuICAgICAgYm9keSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMjVweCA1MHB4O1xuICAgICAgfVxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiAjMjJiYWQ5O1xuICAgICAgfVxuICAgICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICB9XG4gICAgICBhcnRpY2xlIHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIG1heC13aWR0aDogNjUwcHg7XG4gICAgICB9XG4gICAgICBidXR0b24ge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjJiYWQ5O1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgcGFkZGluZzogNXB4IDdweDtcbiAgICAgIH1cbiAgICAgIGJ1dHRvbjphY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWI5ZGI3O1xuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XG4gICAgICB9XG4gICAgICBidXR0b246Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9tYWluPlxuKVxuIl19 */\n/*@ sourceURL=components/App.js */"
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
var _jsxFileName = "/Users/declonelcocks/code/yarn-workspaces-react/packages/next/components/ErrorMessage.js";


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
    css: "aside.jsx-160792485{padding:1.5em;font-size:14px;color:white;background-color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRXJyb3JNZXNzYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdnQixBQUd1QixjQUNDLGVBQ0gsWUFDUyxxQkFDdkIiLCJmaWxlIjoiY29tcG9uZW50cy9FcnJvck1lc3NhZ2UuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RlY2xvbmVsY29ja3MvY29kZS95YXJuLXdvcmtzcGFjZXMtcmVhY3QvcGFja2FnZXMvbmV4dCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICh7IG1lc3NhZ2UgfSkgPT4gKFxuICA8YXNpZGU+XG4gICAge21lc3NhZ2V9XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgYXNpZGUge1xuICAgICAgICBwYWRkaW5nOiAxLjVlbTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvYXNpZGU+XG4pXG4iXX0= */\n/*@ sourceURL=components/ErrorMessage.js */"
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
var _jsxFileName = "/Users/declonelcocks/code/yarn-workspaces-react/packages/next/components/Header.js";





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
    css: "header.jsx-3970066506{margin-bottom:25px;}a.jsx-3970066506{font-size:14px;margin-right:15px;-webkit-text-decoration:none;text-decoration:none;}.is-active.jsx-3970066506{-webkit-text-decoration:underline;text-decoration:underline;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdnQixBQUc0QixBQUdKLEFBS1csZUFKUixJQUhwQixjQUl1QiwyQkFJdkIsdUJBSEEiLCJmaWxlIjoiY29tcG9uZW50cy9IZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RlY2xvbmVsY29ja3MvY29kZS95YXJuLXdvcmtzcGFjZXMtcmVhY3QvcGFja2FnZXMvbmV4dCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuY29uc3QgSGVhZGVyID0gKHsgcm91dGVyOiB7IHBhdGhuYW1lIH0gfSkgPT4gKFxuICA8aGVhZGVyPlxuICAgIDxMaW5rIHByZWZldGNoIGhyZWY9Jy8nPlxuICAgICAgPGEgY2xhc3NOYW1lPXtwYXRobmFtZSA9PT0gJy8nID8gJ2lzLWFjdGl2ZScgOiAnJ30+SG9tZTwvYT5cbiAgICA8L0xpbms+XG4gICAgPExpbmsgcHJlZmV0Y2ggaHJlZj0nL2Fib3V0Jz5cbiAgICAgIDxhIGNsYXNzTmFtZT17cGF0aG5hbWUgPT09ICcvYWJvdXQnID8gJ2lzLWFjdGl2ZScgOiAnJ30+QWJvdXQ8L2E+XG4gICAgPC9MaW5rPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGhlYWRlciB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgICB9XG4gICAgICBhIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICAgIC5pcy1hY3RpdmUge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvaGVhZGVyPlxuKVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEhlYWRlcilcbiJdfQ== */\n/*@ sourceURL=components/Header.js */"
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
var _jsxFileName = "/Users/declonelcocks/code/yarn-workspaces-react/packages/next/components/PostList.js";



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
      css: "section.jsx-2126052553{padding-bottom:20px;}li.jsx-2126052553{display:block;margin-bottom:10px;}div.jsx-2126052553{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}a.jsx-2126052553{font-size:14px;margin-right:10px;-webkit-text-decoration:none;text-decoration:none;padding-bottom:0;border:0;}span.jsx-2126052553{font-size:14px;margin-right:5px;}ul.jsx-2126052553{margin:0;padding:0;}button.jsx-2126052553:before{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;border-style:solid;border-width:6px 4px 0 4px;border-color:#ffffff transparent transparent transparent;content:'';height:0;margin-right:5px;width:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdExpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUNvQixBQUdpQyxBQUdOLEFBSUssQUFJSixBQU9BLEFBSU4sQUFJUyxTQUhSLEtBbkJTLENBUUQsQUFPRCxJQUtuQixDQXZCQSxZQW1CQSxDQWZBLEFBUXVCLHNDQWNGLFlBYkYsT0FjVSxHQXBCZCxPQU9KLFNBQ1gsUUFhMkQsa0RBcEIzRCxPQXFCYSxXQUNGLFNBQ1EsaUJBQ1QsUUFDViIsImZpbGUiOiJjb21wb25lbnRzL1Bvc3RMaXN0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kZWNsb25lbGNvY2tzL2NvZGUveWFybi13b3Jrc3BhY2VzLXJlYWN0L3BhY2thZ2VzL25leHQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncmFwaHFsIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZydcbmltcG9ydCBFcnJvck1lc3NhZ2UgZnJvbSAnLi9FcnJvck1lc3NhZ2UnXG5pbXBvcnQgUG9zdFVwdm90ZXIgZnJvbSAnLi9Qb3N0VXB2b3RlcidcblxuY29uc3QgUE9TVFNfUEVSX1BBR0UgPSAxMFxuXG5mdW5jdGlvbiBQb3N0TGlzdCAoe1xuICBkYXRhOiB7IGxvYWRpbmcsIGVycm9yLCBhbGxQb3N0cywgX2FsbFBvc3RzTWV0YSB9LFxuICBsb2FkTW9yZVBvc3RzXG59KSB7XG4gIGlmIChlcnJvcikgcmV0dXJuIDxFcnJvck1lc3NhZ2UgbWVzc2FnZT0nRXJyb3IgbG9hZGluZyBwb3N0cy4nIC8+XG4gIGlmIChhbGxQb3N0cyAmJiBhbGxQb3N0cy5sZW5ndGgpIHtcbiAgICBjb25zdCBhcmVNb3JlUG9zdHMgPSBhbGxQb3N0cy5sZW5ndGggPCBfYWxsUG9zdHNNZXRhLmNvdW50XG4gICAgcmV0dXJuIChcbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8dWw+XG4gICAgICAgICAge2FsbFBvc3RzLm1hcCgocG9zdCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e3Bvc3QuaWR9PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuPntpbmRleCArIDF9LiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17cG9zdC51cmx9Pntwb3N0LnRpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICA8UG9zdFVwdm90ZXIgaWQ9e3Bvc3QuaWR9IHZvdGVzPXtwb3N0LnZvdGVzfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIHthcmVNb3JlUG9zdHMgPyAoXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBsb2FkTW9yZVBvc3RzKCl9PlxuICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgIHtsb2FkaW5nID8gJ0xvYWRpbmcuLi4nIDogJ1Nob3cgTW9yZSd9eycgJ31cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICAnJ1xuICAgICAgICApfVxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgc2VjdGlvbiB7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGkge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJ1dHRvbjpiZWZvcmUge1xuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogNnB4IDRweCAwIDRweDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2ZmZmZmZiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApXG4gIH1cbiAgcmV0dXJuIDxkaXY+TG9hZGluZzwvZGl2PlxufVxuXG5leHBvcnQgY29uc3QgYWxsUG9zdHMgPSBncWxgXG4gIHF1ZXJ5IGFsbFBvc3RzKCRmaXJzdDogSW50ISwgJHNraXA6IEludCEpIHtcbiAgICBhbGxQb3N0cyhvcmRlckJ5OiBjcmVhdGVkQXRfREVTQywgZmlyc3Q6ICRmaXJzdCwgc2tpcDogJHNraXApIHtcbiAgICAgIGlkXG4gICAgICB0aXRsZVxuICAgICAgdm90ZXNcbiAgICAgIHVybFxuICAgICAgY3JlYXRlZEF0XG4gICAgfVxuICAgIF9hbGxQb3N0c01ldGEge1xuICAgICAgY291bnRcbiAgICB9XG4gIH1cbmBcbmV4cG9ydCBjb25zdCBhbGxQb3N0c1F1ZXJ5VmFycyA9IHtcbiAgc2tpcDogMCxcbiAgZmlyc3Q6IFBPU1RTX1BFUl9QQUdFXG59XG5cbi8vIFRoZSBgZ3JhcGhxbGAgd3JhcHBlciBleGVjdXRlcyBhIEdyYXBoUUwgcXVlcnkgYW5kIG1ha2VzIHRoZSByZXN1bHRzXG4vLyBhdmFpbGFibGUgb24gdGhlIGBkYXRhYCBwcm9wIG9mIHRoZSB3cmFwcGVkIGNvbXBvbmVudCAoUG9zdExpc3QpXG5leHBvcnQgZGVmYXVsdCBncmFwaHFsKGFsbFBvc3RzLCB7XG4gIG9wdGlvbnM6IHtcbiAgICB2YXJpYWJsZXM6IGFsbFBvc3RzUXVlcnlWYXJzXG4gIH0sXG4gIHByb3BzOiAoeyBkYXRhIH0pID0+IHtcbiAgICByZXR1cm4gKHtcbiAgICAgIGRhdGEsXG4gICAgICBsb2FkTW9yZVBvc3RzOiAoKSA9PiB7XG4gICAgICAgIHJldHVybiBkYXRhLmZldGNoTW9yZSh7XG4gICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICBza2lwOiBkYXRhLmFsbFBvc3RzLmxlbmd0aFxuICAgICAgICAgIH0sXG4gICAgICAgICAgdXBkYXRlUXVlcnk6IChwcmV2aW91c1Jlc3VsdCwgeyBmZXRjaE1vcmVSZXN1bHQgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFmZXRjaE1vcmVSZXN1bHQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzUmVzdWx0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcHJldmlvdXNSZXN1bHQsIHtcbiAgICAgICAgICAgICAgLy8gQXBwZW5kIHRoZSBuZXcgcG9zdHMgcmVzdWx0cyB0byB0aGUgb2xkIG9uZVxuICAgICAgICAgICAgICBhbGxQb3N0czogWy4uLnByZXZpb3VzUmVzdWx0LmFsbFBvc3RzLCAuLi5mZXRjaE1vcmVSZXN1bHQuYWxsUG9zdHNdXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59KShQb3N0TGlzdClcbiJdfQ== */\n/*@ sourceURL=components/PostList.js */"
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
var _jsxFileName = "/Users/declonelcocks/code/yarn-workspaces-react/packages/next/components/PostUpvoter.js";


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
    css: "button.jsx-852540806{background-color:transparent;border:1px solid #e4e4e4;color:#000;}button.jsx-852540806:active{background-color:transparent;}button.jsx-852540806:before{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;border-color:transparent transparent #000000 transparent;border-style:solid;border-width:0 4px 6px 4px;content:'';height:0;margin-right:5px;width:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdFVwdm90ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUWtCLEFBR3dDLEFBS0EsQUFHWCw2QkFQTyxBQUszQix5QkFKYSxXQUNiLE1BTTJELHlEQUN0QyxtQkFDUSwyQkFDaEIsV0FDRixTQUNRLGlCQUNULFFBQ1YiLCJmaWxlIjoiY29tcG9uZW50cy9Qb3N0VXB2b3Rlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZGVjbG9uZWxjb2Nrcy9jb2RlL3lhcm4td29ya3NwYWNlcy1yZWFjdC9wYWNrYWdlcy9uZXh0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCB7IGdxbCB9IGZyb20gJ2Fwb2xsby1ib29zdCdcblxuZnVuY3Rpb24gUG9zdFVwdm90ZXIgKHsgdXB2b3RlLCB2b3RlcywgaWQgfSkge1xuICByZXR1cm4gKFxuICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdXB2b3RlKGlkLCB2b3RlcyArIDEpfT5cbiAgICAgIHt2b3Rlc31cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTRlNGU0O1xuICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjphY3RpdmUge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjpiZWZvcmUge1xuICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICMwMDAwMDAgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICBib3JkZXItd2lkdGg6IDAgNHB4IDZweCA0cHg7XG4gICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9idXR0b24+XG4gIClcbn1cblxuY29uc3QgdXB2b3RlUG9zdCA9IGdxbGBcbiAgbXV0YXRpb24gdXBkYXRlUG9zdCgkaWQ6IElEISwgJHZvdGVzOiBJbnQpIHtcbiAgICB1cGRhdGVQb3N0KGlkOiAkaWQsIHZvdGVzOiAkdm90ZXMpIHtcbiAgICAgIGlkXG4gICAgICBfX3R5cGVuYW1lXG4gICAgICB2b3Rlc1xuICAgIH1cbiAgfVxuYFxuXG5leHBvcnQgZGVmYXVsdCBncmFwaHFsKHVwdm90ZVBvc3QsIHtcbiAgcHJvcHM6ICh7IG93blByb3BzLCBtdXRhdGUgfSkgPT4gKHtcbiAgICB1cHZvdGU6IChpZCwgdm90ZXMpID0+XG4gICAgICBtdXRhdGUoe1xuICAgICAgICB2YXJpYWJsZXM6IHsgaWQsIHZvdGVzIH0sXG4gICAgICAgIG9wdGltaXN0aWNSZXNwb25zZToge1xuICAgICAgICAgIF9fdHlwZW5hbWU6ICdNdXRhdGlvbicsXG4gICAgICAgICAgdXBkYXRlUG9zdDoge1xuICAgICAgICAgICAgX190eXBlbmFtZTogJ1Bvc3QnLFxuICAgICAgICAgICAgaWQ6IG93blByb3BzLmlkLFxuICAgICAgICAgICAgdm90ZXM6IG93blByb3BzLnZvdGVzICsgMVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgfSlcbn0pKFBvc3RVcHZvdGVyKVxuIl19 */\n/*@ sourceURL=components/PostUpvoter.js */"
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
var _jsxFileName = "/Users/declonelcocks/code/yarn-workspaces-react/packages/next/components/Submit.js";



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
    css: "form.jsx-4286934451{border-bottom:1px solid #ececec;padding-bottom:20px;margin-bottom:20px;}h1.jsx-4286934451{font-size:20px;}input.jsx-4286934451{display:block;margin-bottom:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU3VibWl0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCa0IsQUFHMkMsQUFLakIsQUFHRCxjQUNLLENBSHJCLGlCQUxzQixDQVN0QixtQkFScUIsbUJBQ3JCIiwiZmlsZSI6ImNvbXBvbmVudHMvU3VibWl0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kZWNsb25lbGNvY2tzL2NvZGUveWFybi13b3Jrc3BhY2VzLXJlYWN0L3BhY2thZ2VzL25leHQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncmFwaHFsIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZydcbmltcG9ydCB7IGFsbFBvc3RzLCBhbGxQb3N0c1F1ZXJ5VmFycyB9IGZyb20gJy4vUG9zdExpc3QnXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAOHNlY3VyaXRpZXMvdWknXG5cbmZ1bmN0aW9uIFN1Ym1pdCAoeyBjcmVhdGVQb3N0IH0pIHtcbiAgZnVuY3Rpb24gaGFuZGxlU3VibWl0IChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgIGNvbnN0IGZvcm0gPSBldmVudC50YXJnZXRcblxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IHdpbmRvdy5Gb3JtRGF0YShmb3JtKVxuICAgIGNyZWF0ZVBvc3QoZm9ybURhdGEuZ2V0KCd0aXRsZScpLCBmb3JtRGF0YS5nZXQoJ3VybCcpKVxuXG4gICAgZm9ybS5yZXNldCgpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgPGgxPlN1Ym1pdDwvaDE+XG4gICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9J3RpdGxlJyBuYW1lPSd0aXRsZScgdHlwZT0ndGV4dCcgcmVxdWlyZWQgLz5cbiAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj0ndXJsJyBuYW1lPSd1cmwnIHR5cGU9J3VybCcgcmVxdWlyZWQgLz5cbiAgICAgIDxCdXR0b24gdHlwZT0nc3VibWl0Jz5TdWJtaXQ8L0J1dHRvbj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgZm9ybSB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlY2VjZWM7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgfVxuICAgICAgICBoMSB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9mb3JtPlxuICApXG59XG5cbmNvbnN0IGNyZWF0ZVBvc3QgPSBncWxgXG4gIG11dGF0aW9uIGNyZWF0ZVBvc3QoJHRpdGxlOiBTdHJpbmchLCAkdXJsOiBTdHJpbmchKSB7XG4gICAgY3JlYXRlUG9zdCh0aXRsZTogJHRpdGxlLCB1cmw6ICR1cmwpIHtcbiAgICAgIGlkXG4gICAgICB0aXRsZVxuICAgICAgdm90ZXNcbiAgICAgIHVybFxuICAgICAgY3JlYXRlZEF0XG4gICAgfVxuICB9XG5gXG5cbmV4cG9ydCBkZWZhdWx0IGdyYXBocWwoY3JlYXRlUG9zdCwge1xuICBwcm9wczogKHsgbXV0YXRlIH0pID0+ICh7XG4gICAgY3JlYXRlUG9zdDogKHRpdGxlLCB1cmwpID0+XG4gICAgICBtdXRhdGUoe1xuICAgICAgICB2YXJpYWJsZXM6IHsgdGl0bGUsIHVybCB9LFxuICAgICAgICB1cGRhdGU6IChwcm94eSwgeyBkYXRhOiB7IGNyZWF0ZVBvc3QgfSB9KSA9PiB7XG4gICAgICAgICAgY29uc3QgZGF0YSA9IHByb3h5LnJlYWRRdWVyeSh7XG4gICAgICAgICAgICBxdWVyeTogYWxsUG9zdHMsXG4gICAgICAgICAgICB2YXJpYWJsZXM6IGFsbFBvc3RzUXVlcnlWYXJzXG4gICAgICAgICAgfSlcbiAgICAgICAgICBwcm94eS53cml0ZVF1ZXJ5KHtcbiAgICAgICAgICAgIHF1ZXJ5OiBhbGxQb3N0cyxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgICAgICAgYWxsUG9zdHM6IFtjcmVhdGVQb3N0LCAuLi5kYXRhLmFsbFBvc3RzXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHZhcmlhYmxlczogYWxsUG9zdHNRdWVyeVZhcnNcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICB9KVxufSkoU3VibWl0KVxuIl19 */\n/*@ sourceURL=components/Submit.js */"
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
var _jsxFileName = "/Users/declonelcocks/code/yarn-workspaces-react/packages/next/pages/index.js";





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

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

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

/***/ "react-modal":
/*!******************************!*\
  !*** external "react-modal" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-modal");

/***/ }),

/***/ "react-select":
/*!*******************************!*\
  !*** external "react-select" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),

/***/ "recompose":
/*!****************************!*\
  !*** external "recompose" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("recompose");

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