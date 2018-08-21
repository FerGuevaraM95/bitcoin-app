webpackHotUpdate(4,{

/***/ "./components/Event/Event.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/fernandoguevaramarquez/Desktop/bitcoin-app/components/Event/Event.js";


var Event = function Event(props) {
  var _props$info = props.info,
      name = _props$info.name,
      url = _props$info.url,
      description = _props$info.description;
  var title = name.text;

  if (title.length > 100) {
    title = title.substr(0, 100) + '...';
  }

  var desc = description.text;

  if (desc) {
    desc = desc.substr(0, 250) + '...';
  }

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "desde evento");
};

/* harmony default export */ __webpack_exports__["a"] = (Event);

/***/ })

})
//# sourceMappingURL=4.55404ba30887f7a48419.hot-update.js.map