webpackHotUpdate(4,{

/***/ "./components/New/New.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/fernandoguevaramarquez/Desktop/bitcoin-app/components/New/New.js";


var New = function New(props) {
  var _props$notice = props.notice,
      urlToImage = _props$notice.urlToImage,
      url = _props$notice.url,
      title = _props$notice.title,
      description = _props$notice.description,
      source = _props$notice.source;
  var image;

  if (urlToImage !== '') {
    image = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
      src: urlToImage,
      alt: title,
      className: "card-img-top",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    });
  } else {
    image = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
      className: "text-center my-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    }, "Imagen No Disponible");
  }

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "col-md-6 col-12 mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "card-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, image), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "card-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    className: "card-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    className: "card-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, description), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    className: "card-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, source.name), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: url,
    target: "_blank",
    className: "btn btn-success d-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, "Leer Noticia"))));
};

/* harmony default export */ __webpack_exports__["a"] = (New);

/***/ })

})
//# sourceMappingURL=4.4061b3749dbe22f16510.hot-update.js.map