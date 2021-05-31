self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/modal/Modal.js":
/*!***********************************!*\
  !*** ./components/modal/Modal.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\job\\nashcompany\\components\\modal\\Modal.js",
    _this = undefined,
    _s = $RefreshSig$();




var Modal = function Modal(props) {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();

  var close = function close(e) {
    e.preventDefault();
    var name = e.target.dataset.name;
    console.log(name);

    if (props.onClose && name === 'modalka_block') {
      props.onClose();
    }
  };

  if (props.isOpen === true) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      "data-name": "modalka_block",
      className: "modalka_block ".concat(router.pathname === '/getservice' && 'modalka_code'),
      onClick: function onClick(e) {
        return close(e);
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "modalka_body",
        children: props.children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, _this);
  } else {
    return null;
  }
};

_s(Modal, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];
});

_c = Modal;
/* harmony default export */ __webpack_exports__["default"] = (Modal);

var _c;

$RefreshReg$(_c, "Modal");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2RhbC9Nb2RhbC5qcyJdLCJuYW1lcyI6WyJNb2RhbCIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwiY2xvc2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJuYW1lIiwidGFyZ2V0IiwiZGF0YXNldCIsImNvbnNvbGUiLCJsb2ciLCJvbkNsb3NlIiwiaXNPcGVuIiwicGF0aG5hbWUiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFDQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDdkIsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4Qjs7QUFDQSxNQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxDQUFELEVBQU87QUFDbkJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBLFFBQU1DLElBQUksR0FBR0YsQ0FBQyxDQUFDRyxNQUFGLENBQVNDLE9BQVQsQ0FBaUJGLElBQTlCO0FBQ0FHLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSixJQUFaOztBQUNBLFFBQUlOLEtBQUssQ0FBQ1csT0FBTixJQUFpQkwsSUFBSSxLQUFHLGVBQTVCLEVBQTZDO0FBQzNDTixXQUFLLENBQUNXLE9BQU47QUFDRDtBQUNGLEdBUEQ7O0FBUUEsTUFBSVgsS0FBSyxDQUFDWSxNQUFOLEtBQWlCLElBQXJCLEVBQTJCO0FBQ3pCLHdCQUNFO0FBQUssbUJBQVUsZUFBZjtBQUErQixlQUFTLDBCQUFtQlgsTUFBTSxDQUFDWSxRQUFQLEtBQW9CLGFBQXBCLElBQXFDLGNBQXhELENBQXhDO0FBQWtILGFBQU8sRUFBRSxpQkFBQVQsQ0FBQztBQUFBLGVBQUlELEtBQUssQ0FBQ0MsQ0FBRCxDQUFUO0FBQUEsT0FBNUg7QUFBQSw2QkFDRTtBQUFNLGlCQUFTLEVBQUMsY0FBaEI7QUFBQSxrQkFDR0osS0FBSyxDQUFDYztBQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFPRCxHQVJELE1BUU87QUFDTCxXQUFPLElBQVA7QUFDRDtBQUNGLENBckJEOztHQUFNZixLO1VBQ1dHLGtEOzs7S0FEWEgsSztBQXVCTiwrREFBZUEsS0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45MjMyODY5MjVhYmI1NmY2ZGQ2OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ1NTVHJhbnNpdGlvbiwgVHJhbnNpdGlvbkdyb3VwIH0gZnJvbSBcInJlYWN0LXRyYW5zaXRpb24tZ3JvdXBcIjtcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5jb25zdCBNb2RhbCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgY2xvc2UgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBjb25zdCBuYW1lID0gZS50YXJnZXQuZGF0YXNldC5uYW1lXHJcbiAgICBjb25zb2xlLmxvZyhuYW1lKVxyXG4gICAgaWYgKHByb3BzLm9uQ2xvc2UgJiYgbmFtZT09PSdtb2RhbGthX2Jsb2NrJykge1xyXG4gICAgICBwcm9wcy5vbkNsb3NlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmIChwcm9wcy5pc09wZW4gPT09IHRydWUpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgZGF0YS1uYW1lPSdtb2RhbGthX2Jsb2NrJyBjbGFzc05hbWU9e2Btb2RhbGthX2Jsb2NrICR7cm91dGVyLnBhdGhuYW1lID09PSAnL2dldHNlcnZpY2UnICYmICdtb2RhbGthX2NvZGUnfWB9IG9uQ2xpY2s9e2UgPT4gY2xvc2UoZSl9PlxyXG4gICAgICAgIDxkaXYgIGNsYXNzTmFtZT0nbW9kYWxrYV9ib2R5Jz5cclxuICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RhbCJdLCJzb3VyY2VSb290IjoiIn0=