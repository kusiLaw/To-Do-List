/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* reset settings for all browser */\\n*,\\n*::before,\\n*::after {\\n  box-sizing: border-box;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nbody {\\n  font-family: Lato, Helvetica, sans-serif;\\n  min-width: 32rem;\\n  background-color: #f6f6f6;\\n}\\n\\nhtml {\\n  font-size: 62.5%;\\n}\\n\\nheader {\\n  padding-top: 5rem;\\n  width: 100%;\\n  display: flex;\\n  justify-content: center;\\n}\\n\\nh1 {\\n  font-size: 2.5rem;\\n  color: darkgray;\\n}\\n\\nmain {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  width: 100%;\\n  font-size: 1.6rem;\\n}\\n\\n.list-container {\\n  background-color: white;\\n  color: darkgray;\\n  width: 80%;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\\n  margin-top: 3rem;\\n}\\n\\n@media (min-width: 768px) {\\n  .list-container {\\n    width: 50%;\\n  }\\n}\\n\\nh2 {\\n  font-weight: 500;\\n  color: darkgray;\\n}\\n\\n.heading-wrapper {\\n  display: flex;\\n  justify-content: space-between;\\n}\\n\\n.list-container > * {\\n  width: 99%;\\n  border-bottom: 1px solid gray;\\n  padding: 1.5rem;\\n}\\n\\nnone .list-container input[type=\\\"checkbox\\\"] {\\n  margin-right: 1.2rem;\\n  margin-left: 0.5rem;\\n}\\n\\n.list-container input {\\n  font-style: italic;\\n}\\n\\n.list-container input,\\n.list-container button,\\n.list-container input:hover,\\n.list-container button:hover,\\n.list-container input:active,\\n.list-container button:active {\\n  border: none;\\n  height: 100%;\\n  font-size: 2rem;\\n  color: rgb(49, 49, 49);\\n}\\n\\n.list-container button:hover {\\n  background-color: #e6e6e6;\\n}\\n\\n#list {\\n  display: none;\\n  flex-direction: column;\\n  list-style-type: none;\\n  color: rgb(49, 49, 49);\\n  padding: 0;\\n  width: 100%;\\n}\\n\\n#list li {\\n  width: 99%;\\n  border-bottom: 1px solid gray;\\n  color: rgb(49, 49, 49);\\n  padding: 2.5rem;\\n  display: flex;\\n  font-size: 1.8rem;\\n  flex-direction: row;\\n  align-items: center;\\n  justify-content: space-between;\\n}\\n\\n#list li.dragModeEffect {\\n  margin-bottom: 1rem;\\n  background: rgb(233, 230, 230);\\n}\\n\\n#list li span {\\n  height: auto;\\n  width: 3rem;\\n  display: inline-flex;\\n  justify-content: flex-end;\\n  align-items: center;\\n  font-size: larger;\\n  color: darkgray;\\n}\\n\\n#list li span.delete-icon {\\n  display: none;\\n  color: red;\\n}\\n\\n#list li .edit-input {\\n  display: none;\\n  border: 1px solid darkgray;\\n}\\n\\n.dragging {\\n  opacity: 0.6;\\n  border: 1px solid gray;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.js */ \"./src/main.js\");\n\n\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/index.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/storage.js */ \"./src/modules/storage.js\");\n/* harmony import */ var _modules_update_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/update.js */ \"./src/modules/update.js\");\n/* harmony import */ var _modules_addlist_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/addlist.js */ \"./src/modules/addlist.js\");\n/* harmony import */ var _modules_delete_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/delete.js */ \"./src/modules/delete.js\");\n/* harmony import */ var _modules_loadlist_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/loadlist.js */ \"./src/modules/loadlist.js\");\n/* harmony import */ var _modules_dragging_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/dragging.js */ \"./src/modules/dragging.js\");\n\n\n\n\n\n\n\nconst ul = document.getElementById('list');\nconst inp = document.getElementById('add-input');\nconst delComplete = document.getElementById('delete-complete');\n\nlet todo = [];\nlet dragItem = null;\n\nwindow.onload = () => {\n  todo = (0,_modules_storage_js__WEBPACK_IMPORTED_MODULE_0__.getLocalStorage)();\n  (0,_modules_loadlist_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(ul, todo);\n};\n\ninp.addEventListener('keypress', (event) => {\n  if (event.key === 'Enter') {\n    const val = event.target.value;\n    if (/\\w+\\s*/gi.test()) {\n      // input not empty\n      todo = (0,_modules_addlist_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(todo, val);\n      (0,_modules_storage_js__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)(todo);\n      ul.innerHTML = '';\n      event.preventDefault();\n      inp.value = '';\n      (0,_modules_loadlist_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(ul, todo);\n    }\n  }\n});\n\nul.addEventListener('click', (e) => {\n  /** for delete * */\n  if (/del-+\\w/gi.test(e.target.parentNode.id)) {\n    const val = e.target.parentNode.id.split('-');\n    todo = (0,_modules_delete_js__WEBPACK_IMPORTED_MODULE_3__.deleteItem)(todo, val[1]);\n    (0,_modules_update_js__WEBPACK_IMPORTED_MODULE_1__.updateIndex)(todo);\n    (0,_modules_storage_js__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)(todo);\n    ul.innerHTML = '';\n    (0,_modules_loadlist_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(ul, todo);\n    return;\n  }\n\n  /** for label* */\n  if (/label-+\\w/gi.test(e.target.id)) {\n    const val = e.target.id.split('-');\n    e.target.style.display = 'none';\n    const hold = document.getElementById(`edit-input-${val[1]}`);\n    hold.value = e.target.innerHTML;\n    hold.style.display = 'inline-flex';\n    return;\n  }\n\n  /** *\n   * is  for checkbox **\n   * mark list as completed or not\n   * ** */\n  if (/id-+\\w/gi.test(e.target.id)) {\n    const val = e.target.id.split('-');\n    if (e.target.checked) {\n      e.target.value = true;\n      document.getElementById(`label-${val[1]}`).style.textDecoration = 'line-through';\n      (0,_modules_update_js__WEBPACK_IMPORTED_MODULE_1__.updateList)(todo, val[1], e.target.value, 'completed');\n      (0,_modules_storage_js__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)(todo);\n    } else {\n      e.target.value = false;\n      document.getElementById(`label-${val[1]}`).style.textDecoration = 'none';\n      (0,_modules_update_js__WEBPACK_IMPORTED_MODULE_1__.updateList)(todo, val[1], e.target.value, 'completed');\n      (0,_modules_storage_js__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)(todo);\n    }\n  }\n});\n\nul.addEventListener('focusout', (e) => {\n  e.preventDefault();\n\n  /** for edit input* */\n  if (/[a-z]{4}-{1}[a-z]*/.test(e.target.id)) {\n    const val = e.target.id.split('-');\n    if (e.target.value !== '') {\n      (0,_modules_update_js__WEBPACK_IMPORTED_MODULE_1__.updateList)(todo, val[2], e.target.value, 'description');\n      (0,_modules_storage_js__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)(todo);\n    }\n    ul.innerHTML = '';\n    (0,_modules_loadlist_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(ul, todo);\n  }\n});\n\nul.onmouseover = (e) => {\n  /** *\n  * toggle between icon, del and collapse\n  ** */\n  if (/col-+\\w/gi.test(e.target.parentNode.id)) {\n    e.target.parentNode.style.display = 'none';\n    const val = e.target.parentNode.id.split('-');\n    document.getElementById(`del-${val[1]}`).style.display = 'inline';\n  }\n};\n\nul.onmouseout = (e) => {\n  if (/del-+\\w/gi.test(e.target.parentNode.id)) {\n    e.target.parentNode.style.display = 'none';\n    const val = e.target.parentNode.id.split('-');\n    document.getElementById(`col-${val[1]}`).style.display = 'inline';\n  }\n};\n\ndelComplete.onclick = (e) => {\n  e.preventDefault();\n  todo = (0,_modules_delete_js__WEBPACK_IMPORTED_MODULE_3__.deleteComplete)(todo);\n  (0,_modules_update_js__WEBPACK_IMPORTED_MODULE_1__.updateIndex)(todo);\n  (0,_modules_storage_js__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)(todo);\n  ul.innerHTML = '';\n  (0,_modules_loadlist_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(ul, todo);\n};\n\ndocument.addEventListener('dragstart', (event) => {\n  // make it half transparent\n  event.target.classList.add('dragging');\n  dragItem = event.target;\n});\n\ndocument.addEventListener('dragenter', (event) => {\n  if (event.target.className === 'list-item') {\n    event.target.style.backgroundColor = 'rgb(233, 230, 230)';\n  }\n});\n\ndocument.addEventListener('dragleave', (event) => {\n  if (event.target.className === 'list-item') {\n    event.target.style.backgroundColor = 'inherit';\n  }\n});\n\ndocument.addEventListener('dragover', (event) => {\n  // prevent default to allow drop\n  event.preventDefault();\n});\n\ndocument.addEventListener('drop', (event) => {\n  // prevent default action (open as link for some elements)\n  event.preventDefault();\n\n  // if dragItem is not same as valid place it dropping\n  if (dragItem !== event.target && event.target.className === 'list-item') {\n  // swap innerHTML\n    const temp = dragItem.innerHTML;\n    dragItem.innerHTML = event.target.innerHTML;\n    event.target.innerHTML = temp;\n    event.target.style.backgroundColor = 'inherit';\n\n    todo = (0,_modules_dragging_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(event);\n    (0,_modules_storage_js__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)(todo);\n    ul.innerHTML = '';\n    (0,_modules_loadlist_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(ul, todo);\n  }\n});\n\ndocument.addEventListener('dragend', (event) => {\n  // remove half transparent\n  event.target.classList.remove('dragging');\n});\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/main.js?");

/***/ }),

/***/ "./src/modules/addlist.js":
/*!********************************!*\
  !*** ./src/modules/addlist.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst addToList = (obj, text) => obj.concat({\n  index: obj.length,\n  description: text,\n  completed: false,\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addToList);\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/addlist.js?");

/***/ }),

/***/ "./src/modules/createElements.js":
/*!***************************************!*\
  !*** ./src/modules/createElements.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createMyElement = (el, cl = '', ids = '') => {\n  const doc = document.createElement(el);\n\n  if (ids !== '') {\n    doc.id = ids;\n  }\n\n  if (cl !== '') {\n    doc.className = cl;\n  }\n  return doc;\n};\n\nconst addListToPage = (ul, ob) => {\n  ob.forEach((obj) => {\n    const div = createMyElement('div');\n    const checkbox = createMyElement('input', '', `id-${obj.index}`);\n    checkbox.setAttribute('type', 'checkbox');\n    checkbox.setAttribute('name', 'checkbox');\n    checkbox.setAttribute('value', `${obj.completed}`);\n\n    const label = createMyElement('label', '', `label-${obj.index}`);\n    label.setAttribute('for', `id-${obj.index}`);\n    label.innerHTML = `${obj.description}`;\n\n    if (`${obj.completed}` === 'true') {\n      label.style.textDecoration = 'line-through';\n      checkbox.setAttribute('checked', true);\n    }\n\n    div.appendChild(checkbox);\n    div.innerHTML += `  <input type=\"text\" id=\"edit-input-${obj.index}\", class = \"edit-input\">\n  `;\n    div.appendChild(label);\n\n    const div2 = createMyElement('div');\n    div2.innerHTML += `\n   <span class=\"collapse\" id='col-${obj.index}'><i class=\"fa-solid fa-ellipsis-vertical\"></i></span>\n   <span class=\"delete-icon\"  id='del-${obj.index}'><i class=\"fa-solid fa-trash-can\"></i></span>\n   `;\n\n    const li = createMyElement('li', 'list-item');\n    li.appendChild(div);\n    li.appendChild(div2);\n    li.setAttribute('draggable', 'true');\n    ul.appendChild(li);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addListToPage);\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/createElements.js?");

/***/ }),

/***/ "./src/modules/delete.js":
/*!*******************************!*\
  !*** ./src/modules/delete.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deleteComplete\": () => (/* binding */ deleteComplete),\n/* harmony export */   \"deleteItem\": () => (/* binding */ deleteItem)\n/* harmony export */ });\nconst deleteItem = (obj, index) => obj.filter((list) => list.index !== parseInt(index, 10));\n\nconst deleteComplete = (obj) => obj.filter((list) => list.completed !== 'true');\n\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/delete.js?");

/***/ }),

/***/ "./src/modules/dragging.js":
/*!*********************************!*\
  !*** ./src/modules/dragging.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst handleDrop = (event) => {\n  let data = null;\n  let newDragList = [];\n\n  const node = event.target.parentNode.getElementsByClassName('list-item');\n\n  for (let i = 0; i < node.length; i += 1) {\n    data = {\n      index: i,\n      description: node[i].getElementsByTagName('label')[0].innerText,\n      completed: node[i].getElementsByTagName('input')[0].value,\n    };\n    newDragList = newDragList.concat(data);\n  }\n\n  return newDragList;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleDrop);\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/dragging.js?");

/***/ }),

/***/ "./src/modules/loadlist.js":
/*!*********************************!*\
  !*** ./src/modules/loadlist.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElements.js */ \"./src/modules/createElements.js\");\n\n\nconst loadList = (ul, obj) => {\n  ul.style.display = 'flex';\n  (0,_createElements_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(ul, obj);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadList);\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/loadlist.js?");

/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLocalStorage\": () => (/* binding */ getLocalStorage),\n/* harmony export */   \"setLocalStorage\": () => (/* binding */ setLocalStorage)\n/* harmony export */ });\nconst getLocalStorage = () => {\n  // Check if data is in storage and convert to js object\n  if (localStorage.getItem('to-do')) {\n    return JSON.parse(localStorage.getItem('to-do'));\n  }\n  return [];\n};\n\nconst setLocalStorage = (arr) => {\n  localStorage.setItem('to-do', JSON.stringify(arr));\n};\n\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/storage.js?");

/***/ }),

/***/ "./src/modules/update.js":
/*!*******************************!*\
  !*** ./src/modules/update.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"updateIndex\": () => (/* binding */ updateIndex),\n/* harmony export */   \"updateList\": () => (/* binding */ updateList)\n/* harmony export */ });\nconst updateIndex = (obj) => {\n  let index = 0;\n  obj.forEach((objs) => {\n    objs.index = index;\n    index += 1;\n  });\n};\n\nconst updateList = (obj, index, value, targetFiled) => {\n  // edit-input\n  obj.forEach((objs) => {\n    if (objs.index === parseInt(index, 10)) {\n      objs[targetFiled] = value;\n    }\n  });\n};\n\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/update.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;