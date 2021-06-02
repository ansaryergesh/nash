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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
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

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    props.isOpen;
  }, [props.isOpen]);

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
        lineNumber: 20,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, _this);
  } else {
    return null;
  }
};

_s(Modal, "vQduR7x+OPXj6PSmJyFnf+hU7bg=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2RhbC9Nb2RhbC5qcyJdLCJuYW1lcyI6WyJNb2RhbCIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwiY2xvc2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJuYW1lIiwidGFyZ2V0IiwiZGF0YXNldCIsImNvbnNvbGUiLCJsb2ciLCJvbkNsb3NlIiwidXNlRWZmZWN0IiwiaXNPcGVuIiwicGF0aG5hbWUiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQ3ZCLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7O0FBQ0EsTUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ25CQSxLQUFDLENBQUNDLGNBQUY7QUFDQSxRQUFNQyxJQUFJLEdBQUdGLENBQUMsQ0FBQ0csTUFBRixDQUFTQyxPQUFULENBQWlCRixJQUE5QjtBQUNBRyxXQUFPLENBQUNDLEdBQVIsQ0FBWUosSUFBWjs7QUFDQSxRQUFJTixLQUFLLENBQUNXLE9BQU4sSUFBaUJMLElBQUksS0FBRyxlQUE1QixFQUE2QztBQUMzQ04sV0FBSyxDQUFDVyxPQUFOO0FBQ0Q7QUFDRixHQVBEOztBQVFBQyxrREFBUyxDQUFDLFlBQU07QUFDZFosU0FBSyxDQUFDYSxNQUFOO0FBQ0QsR0FGUSxFQUVOLENBQUNiLEtBQUssQ0FBQ2EsTUFBUCxDQUZNLENBQVQ7O0FBR0EsTUFBSWIsS0FBSyxDQUFDYSxNQUFOLEtBQWlCLElBQXJCLEVBQTJCO0FBQ3pCLHdCQUNFO0FBQUssbUJBQVUsZUFBZjtBQUErQixlQUFTLDBCQUFtQlosTUFBTSxDQUFDYSxRQUFQLEtBQW9CLGFBQXBCLElBQXFDLGNBQXhELENBQXhDO0FBQWtILGFBQU8sRUFBRSxpQkFBQVYsQ0FBQztBQUFBLGVBQUlELEtBQUssQ0FBQ0MsQ0FBRCxDQUFUO0FBQUEsT0FBNUg7QUFBQSw2QkFDRTtBQUFNLGlCQUFTLEVBQUMsY0FBaEI7QUFBQSxrQkFDR0osS0FBSyxDQUFDZTtBQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFPRCxHQVJELE1BUU87QUFDTCxXQUFPLElBQVA7QUFDRDtBQUNGLENBeEJEOztHQUFNaEIsSztVQUNXRyxrRDs7O0tBRFhILEs7QUEwQk4sK0RBQWVBLEtBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTRjZjM3MGQxOWFiY2IyOTk0MDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENTU1RyYW5zaXRpb24sIFRyYW5zaXRpb25Hcm91cCB9IGZyb20gXCJyZWFjdC10cmFuc2l0aW9uLWdyb3VwXCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmNvbnN0IE1vZGFsID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBjbG9zZSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGNvbnN0IG5hbWUgPSBlLnRhcmdldC5kYXRhc2V0Lm5hbWVcclxuICAgIGNvbnNvbGUubG9nKG5hbWUpXHJcbiAgICBpZiAocHJvcHMub25DbG9zZSAmJiBuYW1lPT09J21vZGFsa2FfYmxvY2snKSB7XHJcbiAgICAgIHByb3BzLm9uQ2xvc2UoKTtcclxuICAgIH1cclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHByb3BzLmlzT3BlblxyXG4gIH0sIFtwcm9wcy5pc09wZW5dKVxyXG4gIGlmIChwcm9wcy5pc09wZW4gPT09IHRydWUpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgZGF0YS1uYW1lPSdtb2RhbGthX2Jsb2NrJyBjbGFzc05hbWU9e2Btb2RhbGthX2Jsb2NrICR7cm91dGVyLnBhdGhuYW1lID09PSAnL2dldHNlcnZpY2UnICYmICdtb2RhbGthX2NvZGUnfWB9IG9uQ2xpY2s9e2UgPT4gY2xvc2UoZSl9PlxyXG4gICAgICAgIDxkaXYgIGNsYXNzTmFtZT0nbW9kYWxrYV9ib2R5Jz5cclxuICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RhbCJdLCJzb3VyY2VSb290IjoiIn0=