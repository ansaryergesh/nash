self["webpackHotUpdate_N_E"]("pages/getservice",{

/***/ "./pages/getservice.js":
/*!*****************************!*\
  !*** ./pages/getservice.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_getservice_FirstStep__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/getservice/FirstStep */ "./components/getservice/FirstStep.js");
/* harmony import */ var _components_getservice_SecondStep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/getservice/SecondStep */ "./components/getservice/SecondStep.js");
/* harmony import */ var _components_shared_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/shared/Nav */ "./components/shared/Nav.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_getservice_ThirdStep__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/getservice/ThirdStep */ "./components/getservice/ThirdStep.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_loader_Loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/loader/Loader */ "./components/loader/Loader.js");
/* harmony import */ var _components_shared_CodeModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/shared/CodeModal */ "./components/shared/CodeModal.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\job\\nashcompany\\pages\\getservice.js",
    _this = undefined,
    _s = $RefreshSig$();












var GetService = function GetService() {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
  var step = router.query.step;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false),
      loading = _useState[0],
      setLoading = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(''),
      cookieStep = _useState2[0],
      setCookieStep = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(function () {
    setCookieStep(js_cookie__WEBPACK_IMPORTED_MODULE_7___default().get('step'));
  }, [js_cookie__WEBPACK_IMPORTED_MODULE_7___default().get('step')]);
  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(function () {
    if (!js_cookie__WEBPACK_IMPORTED_MODULE_7___default().get('step')) {
      router.push('/getservice');
    }

    if (js_cookie__WEBPACK_IMPORTED_MODULE_7___default().get('step') === '2') {
      router.push('/getservice?step=2');
    }

    if (js_cookie__WEBPACK_IMPORTED_MODULE_7___default().get('step') === '3') {
      router.push('/getservice?step=3');
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "getservice",
    children: [loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_loader_Loader__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 19
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0443\u0441\u043B\u0443\u0433\u0443 | \u0424\u0438\u0437. \u043B\u0438\u0446\u043E"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "header",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Nav__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "bg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "form_headings",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: "\u0423\u0441\u043B\u0443\u0433\u0438 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u043B\u0438\u0446\u0430\u043C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: ["\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, _this), "\u0443\u0441\u043B\u0443\u0433\u0443:"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "form_service ",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "form_header",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: cookieStep === undefined ? 'active' : '',
              children: "1 \u0428\u0430\u0433"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: cookieStep === '2' && step === '2' && 'active',
              children: "2 \u0428\u0430\u0433"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: cookieStep === '3' && step === '3' && 'active',
              children: "3 \u0428\u0430\u0433"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_getservice_ThirdStep__WEBPACK_IMPORTED_MODULE_5__.default, {
          setLoading: setLoading
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }, _this);
};

_s(GetService, "yydxgQGStowXFflCLwos08R82pU=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter];
});

_c = GetService;
/* harmony default export */ __webpack_exports__["default"] = (GetService);

var _c;

$RefreshReg$(_c, "GetService");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2V0c2VydmljZS5qcyJdLCJuYW1lcyI6WyJHZXRTZXJ2aWNlIiwicm91dGVyIiwidXNlUm91dGVyIiwic3RlcCIsInF1ZXJ5IiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImNvb2tpZVN0ZXAiLCJzZXRDb29raWVTdGVwIiwidXNlRWZmZWN0IiwiY29va2llIiwicHVzaCIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUFBOztBQUN2QixNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBRHVCLE1BRWhCQyxJQUZnQixHQUVSRixNQUFNLENBQUNHLEtBRkMsQ0FFaEJELElBRmdCOztBQUFBLGtCQUlPRSwrQ0FBUSxDQUFDLEtBQUQsQ0FKZjtBQUFBLE1BSWhCQyxPQUpnQjtBQUFBLE1BSVBDLFVBSk87O0FBQUEsbUJBS2FGLCtDQUFRLENBQUMsRUFBRCxDQUxyQjtBQUFBLE1BS2hCRyxVQUxnQjtBQUFBLE1BS0pDLGFBTEk7O0FBTXZCQyxrREFBUyxDQUFDLFlBQU07QUFDZEQsaUJBQWEsQ0FBQ0Usb0RBQUEsQ0FBVyxNQUFYLENBQUQsQ0FBYjtBQUNELEdBRlEsRUFFTixDQUFDQSxvREFBQSxDQUFXLE1BQVgsQ0FBRCxDQUZNLENBQVQ7QUFHQUQsa0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBRyxDQUFDQyxvREFBQSxDQUFXLE1BQVgsQ0FBSixFQUF3QjtBQUN0QlYsWUFBTSxDQUFDVyxJQUFQLENBQVksYUFBWjtBQUNEOztBQUNELFFBQUdELG9EQUFBLENBQVcsTUFBWCxNQUF1QixHQUExQixFQUErQjtBQUM3QlYsWUFBTSxDQUFDVyxJQUFQLENBQVksb0JBQVo7QUFDRDs7QUFDRCxRQUFHRCxvREFBQSxDQUFXLE1BQVgsTUFBdUIsR0FBMUIsRUFBK0I7QUFDN0JWLFlBQU0sQ0FBQ1csSUFBUCxDQUFZLG9CQUFaO0FBQ0Q7QUFHRixHQVpRLEVBWVAsRUFaTyxDQUFUO0FBaUJBLHNCQUNFO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQSxlQUVHTixPQUFPLGlCQUFJLDhEQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGZCxlQUdFLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEYsZUFRRTtBQUFLLGVBQVMsRUFBQyxRQUFmO0FBQUEsOEJBQ0UsOERBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBSyxpQkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJGLGVBYUU7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBLDhCQUVFO0FBQUssaUJBQVMsRUFBQyxlQUFmO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFBLHNGQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBT0U7QUFBSyxpQkFBUyxFQUFDLGVBQWY7QUFBQSxnQ0FDQTtBQUFLLG1CQUFTLEVBQUMsYUFBZjtBQUFBLGlDQUNFO0FBQUEsb0NBQ0U7QUFBSSx1QkFBUyxFQUFFRSxVQUFVLEtBQUtLLFNBQWYsR0FBMkIsUUFBM0IsR0FBc0MsRUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFJLHVCQUFTLEVBQUVMLFVBQVUsS0FBSyxHQUFmLElBQXNCTCxJQUFJLEtBQUcsR0FBN0IsSUFBb0MsUUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkYsZUFHRTtBQUFJLHVCQUFTLEVBQUVLLFVBQVUsS0FBSyxHQUFmLElBQXNCTCxJQUFJLEtBQUcsR0FBN0IsSUFBb0MsUUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEQSxlQVlBLDhEQUFDLHFFQUFEO0FBQVcsb0JBQVUsRUFBRUk7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFaQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWdERCxDQTFFRDs7R0FBTVAsVTtVQUNXRSxrRDs7O0tBRFhGLFU7QUEyRU4sK0RBQWVBLFVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ2V0c2VydmljZS4zMzdjYWE0NjRlNDliZjFhZTcxZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZpcnN0U3RlcCBmcm9tIFwiLi4vY29tcG9uZW50cy9nZXRzZXJ2aWNlL0ZpcnN0U3RlcFwiXHJcbmltcG9ydCBTZWNvbmRTdGVwIGZyb20gXCIuLi9jb21wb25lbnRzL2dldHNlcnZpY2UvU2Vjb25kU3RlcFwiXHJcbmltcG9ydCBOYXYgZnJvbSBcIi4uL2NvbXBvbmVudHMvc2hhcmVkL05hdlwiXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IFRoaXJkU3RlcCBmcm9tIFwiLi4vY29tcG9uZW50cy9nZXRzZXJ2aWNlL1RoaXJkU3RlcFwiXHJcbmltcG9ydCB7Um91dGVyLCB1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSdcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBMb2FkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbG9hZGVyL0xvYWRlclwiXHJcbmltcG9ydCBDb2RlTW9kYWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvc2hhcmVkL0NvZGVNb2RhbFwiXHJcbmNvbnN0IEdldFNlcnZpY2UgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCB7c3RlcH0gPSByb3V0ZXIucXVlcnlcclxuXHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2Nvb2tpZVN0ZXAsIHNldENvb2tpZVN0ZXBdID0gdXNlU3RhdGUoJycpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldENvb2tpZVN0ZXAoY29va2llLmdldCgnc3RlcCcpKVxyXG4gIH0sIFtjb29raWUuZ2V0KCdzdGVwJyldKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZighY29va2llLmdldCgnc3RlcCcpKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKCcvZ2V0c2VydmljZScpXHJcbiAgICB9XHJcbiAgICBpZihjb29raWUuZ2V0KCdzdGVwJykgPT09ICcyJykge1xyXG4gICAgICByb3V0ZXIucHVzaCgnL2dldHNlcnZpY2U/c3RlcD0yJylcclxuICAgIH1cclxuICAgIGlmKGNvb2tpZS5nZXQoJ3N0ZXAnKSA9PT0gJzMnKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKCcvZ2V0c2VydmljZT9zdGVwPTMnKVxyXG4gICAgfVxyXG5cclxuIFxyXG4gIH0sW10pXHJcblxyXG5cclxuIFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2dldHNlcnZpY2UnPlxyXG4gICAgICBcclxuICAgICAge2xvYWRpbmcgJiYgPExvYWRlciAvPn1cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlxyXG4gICAgICAgICAg0J/QvtC70YPRh9C40YLRjCDRg9GB0LvRg9Cz0YMgfCDQpNC40LcuINC70LjRhtC+XHJcbiAgICAgICAgPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0naGVhZGVyJz5cclxuICAgICAgICA8TmF2Lz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmcnPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG4gICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtX2hlYWRpbmdzJz5cclxuICAgICAgICAgIDxoMT7Qo9GB0LvRg9Cz0Lgg0YTQuNC30LjRh9C10YHQutC40Lwg0LvQuNGG0LDQvDwvaDE+XHJcbiAgICAgICAgICA8aDI+0J/QvtC70YPRh9C40YLRjFxyXG4gICAgICAgICAgICA8YnI+PC9icj7Rg9GB0LvRg9Cz0YM6PC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybV9zZXJ2aWNlICc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm1faGVhZGVyJz5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y29va2llU3RlcCA9PT0gdW5kZWZpbmVkID8gJ2FjdGl2ZScgOiAnJ30+MSDQqNCw0LM8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjb29raWVTdGVwID09PSAnMicgJiYgc3RlcD09PScyJyAmJiAnYWN0aXZlJ30+MiDQqNCw0LM8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjb29raWVTdGVwID09PSAnMycgJiYgc3RlcD09PSczJyAmJiAnYWN0aXZlJ30+MyDQqNCw0LM8L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICB7Lyoge2Nvb2tpZS5nZXQoJ3N0ZXAnKSA9PT0gdW5kZWZpbmVkICYmIDxGaXJzdFN0ZXAgc2V0TG9hZGluZz17c2V0TG9hZGluZ30vPn1cclxuICAgICAgICB7Y29va2llLmdldCgnc3RlcCcpID09PSAnMicgJiYgc3RlcD09PScyJyAmJiA8U2Vjb25kU3RlcCBzZXRMb2FkaW5nPXtzZXRMb2FkaW5nfS8+fVxyXG4gICAgICAgIHtjb29raWUuZ2V0KCdzdGVwJykgPT09ICczJyAmJiBzdGVwPT09JzMnICYmIDxUaGlyZFN0ZXAgc2V0TG9hZGluZz17c2V0TG9hZGluZ30gLz59ICovfVxyXG4gICAgICAgIDxUaGlyZFN0ZXAgc2V0TG9hZGluZz17c2V0TG9hZGluZ30gLz5cclxuICAgICAgICB7LyogPFNlY29uZFN0ZXAgLz4gKi99XHJcbiAgICAgICAgey8qIDxUaGlyZFN0ZXAgLz4gKi99XHJcbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPSdmb3JtX2hlYWRlcic+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiBjaGVja2luZygpfSBjbGFzc05hbWU9e2Nvb2tpZVN0ZXAgPT09IHVuZGVmaW5lZCA/ICdhY3RpdmUnIDogJyd9PjEg0KjQsNCzPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y29va2llU3RlcCA9PT0gJzInICYmIHN0ZXA9PT0nMicgJiYgJ2FjdGl2ZSd9PjIg0KjQsNCzPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y29va2llU3RlcCA9PT0gJzMnICYmIHN0ZXA9PT0nMycgJiYgJ2FjdGl2ZSd9PjMg0KjQsNCzPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgIFxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEdldFNlcnZpY2UiXSwic291cmNlUm9vdCI6IiJ9