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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var __ = window.wp.i18n.__;
var registerBlockType = window.wp.blocks.registerBlockType;
var Fragment = window.wp.element.Fragment;
var _window$wp$editor = window.wp.editor,
    InspectorControls = _window$wp$editor.InspectorControls,
    PanelColorSettings = _window$wp$editor.PanelColorSettings,
    RichText = _window$wp$editor.RichText;
registerBlockType('jsforwp/callout-block', {
  title: 'Callout Block',
  icon: 'megaphone',
  category: 'common',
  attributes: {
    content: {
      source: 'html',
      selector: 'h2'
    },
    backgroundColor: {
      type: 'string',
      default: '#900900'
    },
    textColor: {
      type: 'string',
      default: '#ffffff'
    }
  },
  edit: function edit(props) {
    var _props$attributes = props.attributes,
        backgroundColor = _props$attributes.backgroundColor,
        textColor = _props$attributes.textColor,
        content = _props$attributes.content,
        setAttributes = props.setAttributes,
        className = props.className;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelColorSettings, {
      title: __('Color Settings', 'jsforwp'),
      colorSettings: [{
        label: __('Background Color', 'jsforwp'),
        value: backgroundColor,
        onChange: function onChange(newBackgroundColor) {
          setAttributes({
            backgroundColor: newBackgroundColor
          });
        }
      }, {
        label: __('Text Color', 'jsforwp'),
        value: textColor,
        onChange: function onChange(newColor) {
          setAttributes({
            textColor: newColor
          });
        }
      }]
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      tagName: "h2",
      className: className,
      value: content,
      style: {
        backgroundColor: backgroundColor,
        color: textColor
      },
      onChange: function onChange(newContent) {
        setAttributes({
          content: newContent
        });
      }
    }));
  },
  save: function save(props) {
    var _props$attributes2 = props.attributes,
        backgroundColor = _props$attributes2.backgroundColor,
        textColor = _props$attributes2.textColor,
        content = _props$attributes2.content,
        className = props.className;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
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

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map