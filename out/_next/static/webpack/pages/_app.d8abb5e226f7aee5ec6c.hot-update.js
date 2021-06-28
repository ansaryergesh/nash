self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/partner/Partner.js":
/*!***************************************!*\
  !*** ./components/partner/Partner.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\job\\nashcompany\\components\\partner\\Partner.js",
    _this = undefined,
    _s = $RefreshSig$();



var Partner = function Partner() {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  var pathname = router.pathname;

  var isTruePath = function isTruePath() {
    if (pathname === '/' || pathname === '/about' || pathname === '/uslugi') {
      return true;
    } else {
      return false;
    }
  };

  var x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: isTruePath() ? "partners_block container" : 'd-none',
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      children: "\u041D\u0430\u0448\u0438 \u043A\u043B\u0438\u0435\u043D\u0442\u044B"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "partners",
      children: x.map(function (x, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "partner",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/img/clients/".concat(index + 1, ".png")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 9
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, _this);
};

_s(Partner, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];
});

_c = Partner;
/* harmony default export */ __webpack_exports__["default"] = (Partner);

var _c;

$RefreshReg$(_c, "Partner");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYXJ0bmVyL1BhcnRuZXIuanMiXSwibmFtZXMiOlsiUGFydG5lciIsInJvdXRlciIsInVzZVJvdXRlciIsInBhdGhuYW1lIiwiaXNUcnVlUGF0aCIsIngiLCJtYXAiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0EsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUNwQixNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHRixNQUFNLENBQUNFLFFBQXhCOztBQUVBLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDdkIsUUFBR0QsUUFBUSxLQUFLLEdBQWIsSUFBb0JBLFFBQVEsS0FBRyxRQUEvQixJQUEyQ0EsUUFBUSxLQUFHLFNBQXpELEVBQW9FO0FBQ2xFLGFBQU8sSUFBUDtBQUNELEtBRkQsTUFFTTtBQUNKLGFBQU8sS0FBUDtBQUNEO0FBQ0YsR0FORDs7QUFPQSxNQUFJRSxDQUFDLEdBQUcsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixFQUE1QixFQUNOLEVBRE0sRUFDRixFQURFLEVBQ0UsRUFERixFQUNNLEVBRE4sRUFDVSxFQURWLEVBQ2MsRUFEZCxFQUNrQixFQURsQixFQUNzQixFQUR0QixFQUMwQixFQUQxQixFQUM4QixFQUQ5QixDQUFSO0FBRUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUVELFVBQVUsa0NBQWtDLFFBQTVEO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVBO0FBQUssZUFBUyxFQUFDLFVBQWY7QUFBQSxnQkFDR0MsQ0FBQyxDQUFDQyxHQUFGLENBQU0sVUFBQ0QsQ0FBRCxFQUFHRSxLQUFIO0FBQUEsNEJBQ0w7QUFBSyxtQkFBUyxFQUFDLFNBQWY7QUFBQSxpQ0FDRTtBQUFLLGVBQUcseUJBQWtCQSxLQUFLLEdBQUMsQ0FBeEI7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESztBQUFBLE9BQU47QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFZRCxDQXpCRDs7R0FBTVAsTztVQUNXRSxrRDs7O0tBRFhGLE87QUEyQk4sK0RBQWVBLE9BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5kOGFiYjVlMjI2ZjdhZWU1ZWM2Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5jb25zdCBQYXJ0bmVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgcGF0aG5hbWUgPSByb3V0ZXIucGF0aG5hbWU7XHJcblxyXG4gIGNvbnN0IGlzVHJ1ZVBhdGggPSAoKSA9PiB7XHJcbiAgICBpZihwYXRobmFtZSA9PT0gJy8nIHx8IHBhdGhuYW1lPT09Jy9hYm91dCcgfHwgcGF0aG5hbWU9PT0nL3VzbHVnaScpIHtcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1lbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgfVxyXG4gIHZhciB4ID0gWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLFxyXG4gICAgMTEsIDEyLCAxMywgMTQsIDE1LCAxNiwgMTcsIDE4LCAxOSwgMjBdO1xyXG4gIHJldHVybihcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtpc1RydWVQYXRoKCkgPyBgcGFydG5lcnNfYmxvY2sgY29udGFpbmVyYCA6ICdkLW5vbmUnfT5cclxuICAgICAgPGgyPtCd0LDRiNC4INC60LvQuNC10L3RgtGLPC9oMj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPSdwYXJ0bmVycyc+XHJcbiAgICAgIHt4Lm1hcCgoeCxpbmRleCkgPT4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXJ0bmVyJz5cclxuICAgICAgICAgIDxpbWcgc3JjPXtgL2ltZy9jbGllbnRzLyR7aW5kZXgrMX0ucG5nYH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFydG5lcjsiXSwic291cmNlUm9vdCI6IiJ9