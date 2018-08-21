webpackHotUpdate(4,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch__ = __webpack_require__("./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_MasterPage__ = __webpack_require__("./components/MasterPage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Price__ = __webpack_require__("./components/Price/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_News__ = __webpack_require__("./components/News/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Events__ = __webpack_require__("./components/Events/index.js");

var _jsxFileName = "/Users/fernandoguevaramarquez/Desktop/bitcoin-app/pages/index.js";


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }







var Index = function Index(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_MasterPage__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "col-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "Precio del Bitcoin"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Price__["a" /* default */], {
    price: props.priceBitcoin,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "col-md-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    className: "mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, "Noticias sobre Bitcoin"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_News__["a" /* default */], {
    news: props.news,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    className: "col-md-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, "Pr\xF3ximos Eventos Bitcoin"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_Events__["a" /* default */], {
    events: props.events,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }))));
};

Index.getInitialProps =
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
  var price, news, events, resPrice, resNews, resEvents;
  return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch___default()('https://api.coinmarketcap.com/v2/ticker/1/');

        case 2:
          price = _context.sent;
          _context.next = 5;
          return __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch___default()('https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=ed71b5000a284dab9f366e0dd103b290&language=es');

        case 5:
          news = _context.sent;
          _context.next = 8;
          return __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch___default()('https://www.eventbriteapi.com/v3/events/search/?q=Bitcoin&sort_by=date&location.address=Mexico&token=F7PEFH4RCAR2BORPH4ZU');

        case 8:
          events = _context.sent;
          _context.next = 11;
          return price.json();

        case 11:
          resPrice = _context.sent;
          _context.next = 14;
          return news.json();

        case 14:
          resNews = _context.sent;
          _context.next = 17;
          return events.json();

        case 17:
          resEvents = _context.sent;
          return _context.abrupt("return", {
            priceBitcoin: resPrice.data.quotes.USD,
            news: resNews.articles,
            events: resEvents.events
          });

        case 19:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}));
/* harmony default export */ __webpack_exports__["default"] = (Index);
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.7defdbe1c8714ccdfdae.hot-update.js.map