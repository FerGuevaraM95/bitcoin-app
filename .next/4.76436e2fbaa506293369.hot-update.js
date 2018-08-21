webpackHotUpdate(4,{

/***/ "./components/Price/Price.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/fernandoguevaramarquez/Desktop/bitcoin-app/components/Price/Price.js";


var Price = function Price(props) {
  console.log(props);
  var price = props.price,
      percent_change_1h = props.percent_change_1h,
      percent_change_24h = props.percent_change_24h,
      percent_change_7d = props.percent_change_7d;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "card text-withe bg-success mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "card-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "Precio al instante"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "card-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
    className: "card-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "Precio Actual: $", price.price), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "d-md-flex justify-content-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (Price);

/***/ })

})
//# sourceMappingURL=4.76436e2fbaa506293369.hot-update.js.map