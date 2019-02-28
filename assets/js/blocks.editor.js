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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__callout_block__ = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_css__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_css__);
var __ = wp.i18n.__;
var _wp$editor = wp.editor,
    RichText = _wp$editor.RichText,
    InspectorControls = _wp$editor.InspectorControls,
    PanelColorSettings = _wp$editor.PanelColorSettings;
var Fragment = wp.element.Fragment;
var registerBlockType = wp.blocks.registerBlockType;




wp.blocks.registerBlockType("jsforwp/callout-block", {
  title: "Callout Block",

  icon: "megaphone",

  category: "common",

  attributes: {
    content: {
      source: "html",
      selector: "h2"
    },
    backgroundColor: {
      type: "string",
      default: "#900900"
    },
    textColor: {
      type: "string",
      default: "#ffffff"
    }
  },

  edit: function edit(props) {
    var _props$attributes = props.attributes,
        backgroundColor = _props$attributes.backgroundColor,
        content = _props$attributes.content,
        textColor = _props$attributes.textColor,
        setAttributes = props.setAttributes,
        className = props.className;

    return wp.element.createElement(
      Fragment,
      null,
      wp.element.createElement(
        InspectorControls,
        null,
        wp.element.createElement(PanelColorSettings, {
          title: __("Color Settings", "jsforwp"),
          colorSettings: [{
            label: __("Background Color", "jsforwp"),
            value: backgroundColor,
            onChange: function onChange(backgroundColor) {
              return setAttributes({ backgroundColor: backgroundColor });
            }
          }, {
            label: __("Text Color", "jsforwp"),
            value: textColor,
            onChange: function onChange(textColor) {
              return setAttributes({ textColor: textColor });
            }
          }]
        })
      ),
      wp.element.createElement(RichText, {
        tagName: "h2",
        className: className,
        value: content,
        style: {
          backgroundColor: backgroundColor,
          color: textColor
        },
        onChange: function onChange(content) {
          return setAttributes({ content: content });
        }
      })
    );
  },

  save: function save(props) {
    var _props$attributes2 = props.attributes,
        backgroundColor = _props$attributes2.backgroundColor,
        content = _props$attributes2.content,
        textColor = _props$attributes2.textColor,
        className = props.className;

    return wp.element.createElement(RichText.Content, {
      tagName: "h2",
      className: className,
      value: content,
      style: {
        backgroundColor: backgroundColor,
        color: textColor
      }
    });
  }
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=blocks.editor.js.map