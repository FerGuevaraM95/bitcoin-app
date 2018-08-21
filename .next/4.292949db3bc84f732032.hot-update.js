webpackHotUpdate(4,{

/***/ "./components/Event/Event.js":
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Event/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Event__ = __webpack_require__("./components/Event/Event.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Event___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Event__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Event___default.a; });


/***/ }),

/***/ "./components/Events/Events.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Event__ = __webpack_require__("./components/Event/index.js");
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
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Event__["a" /* default */], {
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
//# sourceMappingURL=4.292949db3bc84f732032.hot-update.js.map