webpackHotUpdate(4,{

/***/ "./components/Event/index.js":
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Events/Events.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Event__ = __webpack_require__("./components/Event/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Event___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Event__);
var _jsxFileName = "/Users/fernandoguevaramarquez/Desktop/bitcoin-app/components/Events/Events.js";



var Events = function Events(props) {
  var eventsId = Object.keys(props.events);
  console.log(props.events);
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "list-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, eventsId.map(function (key) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Event___default.a, {
      key: key,
      info: props.events[key],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    });
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Events);

/***/ })

})
//# sourceMappingURL=4.47bace59524ed5a40351.hot-update.js.map