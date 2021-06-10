self["webpackHotUpdate_N_E"]("pages/dlya-fizicheskix-lic",{

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
    if (props.isOpen) {
      document.documentElement.style.height = '100%';
      document.body.style.overflowY = 'hidden';
      console.log('true');
    }

    if (!props.isOpen) {
      document.body.style.overflowY = 'unset';
      console.log('false');
    }

    document.body.style.overflowX = 'hidden';
  }, [props.isOpen]);

  if (props.isOpen === true) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      "data-name": "modalka_block",
      className: "modalka_block ".concat(router.pathname === '/dlya-fizicheskix-lic' && 'modalka_code'),
      onClick: function onClick(e) {
        return close(e);
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "modalka_body",
        children: props.children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2RhbC9Nb2RhbC5qcyJdLCJuYW1lcyI6WyJNb2RhbCIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwiY2xvc2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJuYW1lIiwidGFyZ2V0IiwiZGF0YXNldCIsImNvbnNvbGUiLCJsb2ciLCJvbkNsb3NlIiwidXNlRWZmZWN0IiwiaXNPcGVuIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzdHlsZSIsImhlaWdodCIsImJvZHkiLCJvdmVyZmxvd1kiLCJvdmVyZmxvd1giLCJwYXRobmFtZSIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDdkIsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4Qjs7QUFDQSxNQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxDQUFELEVBQU87QUFDbkJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBLFFBQU1DLElBQUksR0FBR0YsQ0FBQyxDQUFDRyxNQUFGLENBQVNDLE9BQVQsQ0FBaUJGLElBQTlCO0FBQ0FHLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSixJQUFaOztBQUNBLFFBQUlOLEtBQUssQ0FBQ1csT0FBTixJQUFpQkwsSUFBSSxLQUFHLGVBQTVCLEVBQTZDO0FBQzNDTixXQUFLLENBQUNXLE9BQU47QUFDRDtBQUNGLEdBUEQ7O0FBUUFDLGtEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUdaLEtBQUssQ0FBQ2EsTUFBVCxFQUFpQjtBQUNmQyxjQUFRLENBQUNDLGVBQVQsQ0FBeUJDLEtBQXpCLENBQStCQyxNQUEvQixHQUF1QyxNQUF2QztBQUNBSCxjQUFRLENBQUNJLElBQVQsQ0FBY0YsS0FBZCxDQUFvQkcsU0FBcEIsR0FBK0IsUUFBL0I7QUFDQVYsYUFBTyxDQUFDQyxHQUFSLENBQVksTUFBWjtBQUNEOztBQUNELFFBQUcsQ0FBQ1YsS0FBSyxDQUFDYSxNQUFWLEVBQWtCO0FBQ2hCQyxjQUFRLENBQUNJLElBQVQsQ0FBY0YsS0FBZCxDQUFvQkcsU0FBcEIsR0FBK0IsT0FBL0I7QUFDQVYsYUFBTyxDQUFDQyxHQUFSLENBQVksT0FBWjtBQUNEOztBQUVESSxZQUFRLENBQUNJLElBQVQsQ0FBY0YsS0FBZCxDQUFvQkksU0FBcEIsR0FBK0IsUUFBL0I7QUFDRCxHQVpRLEVBWU4sQ0FBQ3BCLEtBQUssQ0FBQ2EsTUFBUCxDQVpNLENBQVQ7O0FBYUEsTUFBSWIsS0FBSyxDQUFDYSxNQUFOLEtBQWlCLElBQXJCLEVBQTJCO0FBQ3pCLHdCQUNFO0FBQUssbUJBQVUsZUFBZjtBQUErQixlQUFTLDBCQUFtQlosTUFBTSxDQUFDb0IsUUFBUCxLQUFvQix1QkFBcEIsSUFBK0MsY0FBbEUsQ0FBeEM7QUFBNEgsYUFBTyxFQUFFLGlCQUFBakIsQ0FBQztBQUFBLGVBQUlELEtBQUssQ0FBQ0MsQ0FBRCxDQUFUO0FBQUEsT0FBdEk7QUFBQSw2QkFDRTtBQUFNLGlCQUFTLEVBQUMsY0FBaEI7QUFBQSxrQkFDR0osS0FBSyxDQUFDc0I7QUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBT0QsR0FSRCxNQVFPO0FBQ0wsV0FBTyxJQUFQO0FBQ0Q7QUFDRixDQWxDRDs7R0FBTXZCLEs7VUFDV0csa0Q7OztLQURYSCxLO0FBb0NOLCtEQUFlQSxLQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RseWEtZml6aWNoZXNraXgtbGljLmJkYjJjMTk4NjgxZTIzYTUzMGEyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDU1NUcmFuc2l0aW9uLCBUcmFuc2l0aW9uR3JvdXAgfSBmcm9tIFwicmVhY3QtdHJhbnNpdGlvbi1ncm91cFwiO1xyXG5pbXBvcnQge1JvdXRlciwgdXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmNvbnN0IE1vZGFsID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBjbG9zZSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGNvbnN0IG5hbWUgPSBlLnRhcmdldC5kYXRhc2V0Lm5hbWVcclxuICAgIGNvbnNvbGUubG9nKG5hbWUpXHJcbiAgICBpZiAocHJvcHMub25DbG9zZSAmJiBuYW1lPT09J21vZGFsa2FfYmxvY2snKSB7XHJcbiAgICAgIHByb3BzLm9uQ2xvc2UoKTtcclxuICAgIH1cclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmKHByb3BzLmlzT3Blbikge1xyXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuaGVpZ2h0PSAnMTAwJSc7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3dZPSAnaGlkZGVuJztcclxuICAgICAgY29uc29sZS5sb2coJ3RydWUnKVxyXG4gICAgfVxyXG4gICAgaWYoIXByb3BzLmlzT3Blbikge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WT0gJ3Vuc2V0JztcclxuICAgICAgY29uc29sZS5sb2coJ2ZhbHNlJylcclxuICAgIH1cclxuICAgIFxyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1g9ICdoaWRkZW4nO1xyXG4gIH0sIFtwcm9wcy5pc09wZW5dKVxyXG4gIGlmIChwcm9wcy5pc09wZW4gPT09IHRydWUpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgZGF0YS1uYW1lPSdtb2RhbGthX2Jsb2NrJyBjbGFzc05hbWU9e2Btb2RhbGthX2Jsb2NrICR7cm91dGVyLnBhdGhuYW1lID09PSAnL2RseWEtZml6aWNoZXNraXgtbGljJyAmJiAnbW9kYWxrYV9jb2RlJ31gfSBvbkNsaWNrPXtlID0+IGNsb3NlKGUpfT5cclxuICAgICAgICA8ZGl2ICBjbGFzc05hbWU9J21vZGFsa2FfYm9keSc+XHJcbiAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWwiXSwic291cmNlUm9vdCI6IiJ9