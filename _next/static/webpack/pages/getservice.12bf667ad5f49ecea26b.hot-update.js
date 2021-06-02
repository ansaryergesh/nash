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
      lineNumber: 39,
      columnNumber: 19
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0443\u0441\u043B\u0443\u0433\u0443 | \u0424\u0438\u0437. \u043B\u0438\u0446\u043E"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "header",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Nav__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "bg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "form_headings",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
          children: "\u0423\u0441\u043B\u0443\u0433\u0438 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u043B\u0438\u0446\u0430\u043C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: ["\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, _this), "\u0443\u0441\u043B\u0443\u0433\u0443:"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
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
              lineNumber: 60,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: cookieStep === '2' && step === '2' && 'active',
              children: "2 \u0428\u0430\u0433"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: cookieStep === '3' && step === '3' && 'active',
              children: "3 \u0428\u0430\u0433"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 9
        }, _this), js_cookie__WEBPACK_IMPORTED_MODULE_7___default().get('step') === undefined && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_getservice_FirstStep__WEBPACK_IMPORTED_MODULE_1__.default, {
          setLoading: setLoading
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 46
        }, _this), js_cookie__WEBPACK_IMPORTED_MODULE_7___default().get('step') === '2' && step === '2' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_getservice_SecondStep__WEBPACK_IMPORTED_MODULE_2__.default, {
          setLoading: setLoading
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 54
        }, _this), js_cookie__WEBPACK_IMPORTED_MODULE_7___default().get('step') === '3' && step === '3' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_getservice_ThirdStep__WEBPACK_IMPORTED_MODULE_5__.default, {
          setLoading: setLoading
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 54
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2V0c2VydmljZS5qcyJdLCJuYW1lcyI6WyJHZXRTZXJ2aWNlIiwicm91dGVyIiwidXNlUm91dGVyIiwic3RlcCIsInF1ZXJ5IiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImNvb2tpZVN0ZXAiLCJzZXRDb29raWVTdGVwIiwidXNlRWZmZWN0IiwiY29va2llIiwicHVzaCIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUFBOztBQUN2QixNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBRHVCLE1BRWhCQyxJQUZnQixHQUVSRixNQUFNLENBQUNHLEtBRkMsQ0FFaEJELElBRmdCOztBQUFBLGtCQUlPRSwrQ0FBUSxDQUFDLEtBQUQsQ0FKZjtBQUFBLE1BSWhCQyxPQUpnQjtBQUFBLE1BSVBDLFVBSk87O0FBQUEsbUJBS2FGLCtDQUFRLENBQUMsRUFBRCxDQUxyQjtBQUFBLE1BS2hCRyxVQUxnQjtBQUFBLE1BS0pDLGFBTEk7O0FBTXZCQyxrREFBUyxDQUFDLFlBQU07QUFDZEQsaUJBQWEsQ0FBQ0Usb0RBQUEsQ0FBVyxNQUFYLENBQUQsQ0FBYjtBQUNELEdBRlEsRUFFTixDQUFDQSxvREFBQSxDQUFXLE1BQVgsQ0FBRCxDQUZNLENBQVQ7QUFHQUQsa0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBRyxDQUFDQyxvREFBQSxDQUFXLE1BQVgsQ0FBSixFQUF3QjtBQUN0QlYsWUFBTSxDQUFDVyxJQUFQLENBQVksYUFBWjtBQUNEOztBQUNELFFBQUdELG9EQUFBLENBQVcsTUFBWCxNQUF1QixHQUExQixFQUErQjtBQUM3QlYsWUFBTSxDQUFDVyxJQUFQLENBQVksb0JBQVo7QUFDRDs7QUFDRCxRQUFHRCxvREFBQSxDQUFXLE1BQVgsTUFBdUIsR0FBMUIsRUFBK0I7QUFDN0JWLFlBQU0sQ0FBQ1csSUFBUCxDQUFZLG9CQUFaO0FBQ0Q7QUFHRixHQVpRLEVBWVAsRUFaTyxDQUFUO0FBZ0JBLHNCQUNFO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQSxlQUVHTixPQUFPLGlCQUFJLDhEQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGZCxlQUdFLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEYsZUFRRTtBQUFLLGVBQVMsRUFBQyxRQUFmO0FBQUEsOEJBQ0UsOERBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBSyxpQkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJGLGVBYUU7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBLDhCQUVFO0FBQUssaUJBQVMsRUFBQyxlQUFmO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFBLHNGQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBT0U7QUFBSyxpQkFBUyxFQUFDLGVBQWY7QUFBQSxnQ0FDQTtBQUFLLG1CQUFTLEVBQUMsYUFBZjtBQUFBLGlDQUNFO0FBQUEsb0NBQ0U7QUFBSSx1QkFBUyxFQUFFRSxVQUFVLEtBQUtLLFNBQWYsR0FBMkIsUUFBM0IsR0FBc0MsRUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFJLHVCQUFTLEVBQUVMLFVBQVUsS0FBSyxHQUFmLElBQXNCTCxJQUFJLEtBQUcsR0FBN0IsSUFBb0MsUUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkYsZUFHRTtBQUFJLHVCQUFTLEVBQUVLLFVBQVUsS0FBSyxHQUFmLElBQXNCTCxJQUFJLEtBQUcsR0FBN0IsSUFBb0MsUUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEQSxFQVNDUSxvREFBQSxDQUFXLE1BQVgsTUFBdUJFLFNBQXZCLGlCQUFvQyw4REFBQyxxRUFBRDtBQUFXLG9CQUFVLEVBQUVOO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVHJDLEVBVUNJLG9EQUFBLENBQVcsTUFBWCxNQUF1QixHQUF2QixJQUE4QlIsSUFBSSxLQUFHLEdBQXJDLGlCQUE0Qyw4REFBQyxzRUFBRDtBQUFZLG9CQUFVLEVBQUVJO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVjdDLEVBV0NJLG9EQUFBLENBQVcsTUFBWCxNQUF1QixHQUF2QixJQUE4QlIsSUFBSSxLQUFHLEdBQXJDLGlCQUE0Qyw4REFBQyxxRUFBRDtBQUFXLG9CQUFVLEVBQUVJO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWDdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZ0RELENBekVEOztHQUFNUCxVO1VBQ1dFLGtEOzs7S0FEWEYsVTtBQTBFTiwrREFBZUEsVUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9nZXRzZXJ2aWNlLjEyYmY2NjdhZDVmNDllY2VhMjZiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRmlyc3RTdGVwIGZyb20gXCIuLi9jb21wb25lbnRzL2dldHNlcnZpY2UvRmlyc3RTdGVwXCJcclxuaW1wb3J0IFNlY29uZFN0ZXAgZnJvbSBcIi4uL2NvbXBvbmVudHMvZ2V0c2VydmljZS9TZWNvbmRTdGVwXCJcclxuaW1wb3J0IE5hdiBmcm9tIFwiLi4vY29tcG9uZW50cy9zaGFyZWQvTmF2XCJcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgVGhpcmRTdGVwIGZyb20gXCIuLi9jb21wb25lbnRzL2dldHNlcnZpY2UvVGhpcmRTdGVwXCJcclxuaW1wb3J0IHtSb3V0ZXIsIHVzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IExvYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9sb2FkZXIvTG9hZGVyXCJcclxuaW1wb3J0IENvZGVNb2RhbCBmcm9tIFwiLi4vY29tcG9uZW50cy9zaGFyZWQvQ29kZU1vZGFsXCJcclxuY29uc3QgR2V0U2VydmljZSA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHtzdGVwfSA9IHJvdXRlci5xdWVyeVxyXG5cclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbY29va2llU3RlcCwgc2V0Q29va2llU3RlcF0gPSB1c2VTdGF0ZSgnJylcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0Q29va2llU3RlcChjb29raWUuZ2V0KCdzdGVwJykpXHJcbiAgfSwgW2Nvb2tpZS5nZXQoJ3N0ZXAnKV0pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmKCFjb29raWUuZ2V0KCdzdGVwJykpIHtcclxuICAgICAgcm91dGVyLnB1c2goJy9nZXRzZXJ2aWNlJylcclxuICAgIH1cclxuICAgIGlmKGNvb2tpZS5nZXQoJ3N0ZXAnKSA9PT0gJzInKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKCcvZ2V0c2VydmljZT9zdGVwPTInKVxyXG4gICAgfVxyXG4gICAgaWYoY29va2llLmdldCgnc3RlcCcpID09PSAnMycpIHtcclxuICAgICAgcm91dGVyLnB1c2goJy9nZXRzZXJ2aWNlP3N0ZXA9MycpXHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgfSxbXSlcclxuXHJcbiBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdnZXRzZXJ2aWNlJz5cclxuICAgICAgXHJcbiAgICAgIHtsb2FkaW5nICYmIDxMb2FkZXIgLz59XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5cclxuICAgICAgICAgINCf0L7Qu9GD0YfQuNGC0Ywg0YPRgdC70YPQs9GDIHwg0KTQuNC3LiDQu9C40YbQvlxyXG4gICAgICAgIDwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2hlYWRlcic+XHJcbiAgICAgICAgPE5hdi8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JnJz48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybV9oZWFkaW5ncyc+XHJcbiAgICAgICAgICA8Yj7Qo9GB0LvRg9Cz0Lgg0YTQuNC30LjRh9C10YHQutC40Lwg0LvQuNGG0LDQvDwvYj5cclxuICAgICAgICAgIDxoMj7Qn9C+0LvRg9GH0LjRgtGMXHJcbiAgICAgICAgICAgIDxicj48L2JyPtGD0YHQu9GD0LPRgzo8L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtX3NlcnZpY2UgJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybV9oZWFkZXInPlxyXG4gICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjb29raWVTdGVwID09PSB1bmRlZmluZWQgPyAnYWN0aXZlJyA6ICcnfT4xINCo0LDQszwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2Nvb2tpZVN0ZXAgPT09ICcyJyAmJiBzdGVwPT09JzInICYmICdhY3RpdmUnfT4yINCo0LDQszwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2Nvb2tpZVN0ZXAgPT09ICczJyAmJiBzdGVwPT09JzMnICYmICdhY3RpdmUnfT4zINCo0LDQszwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIHtjb29raWUuZ2V0KCdzdGVwJykgPT09IHVuZGVmaW5lZCAmJiA8Rmlyc3RTdGVwIHNldExvYWRpbmc9e3NldExvYWRpbmd9Lz59XHJcbiAgICAgICAge2Nvb2tpZS5nZXQoJ3N0ZXAnKSA9PT0gJzInICYmIHN0ZXA9PT0nMicgJiYgPFNlY29uZFN0ZXAgc2V0TG9hZGluZz17c2V0TG9hZGluZ30vPn1cclxuICAgICAgICB7Y29va2llLmdldCgnc3RlcCcpID09PSAnMycgJiYgc3RlcD09PSczJyAmJiA8VGhpcmRTdGVwIHNldExvYWRpbmc9e3NldExvYWRpbmd9IC8+fVxyXG4gICAgICAgIFxyXG4gICAgICAgIHsvKiA8U2Vjb25kU3RlcCAvPiAqL31cclxuICAgICAgICB7LyogPFRoaXJkU3RlcCAvPiAqL31cclxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9J2Zvcm1faGVhZGVyJz5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IGNoZWNraW5nKCl9IGNsYXNzTmFtZT17Y29va2llU3RlcCA9PT0gdW5kZWZpbmVkID8gJ2FjdGl2ZScgOiAnJ30+MSDQqNCw0LM8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjb29raWVTdGVwID09PSAnMicgJiYgc3RlcD09PScyJyAmJiAnYWN0aXZlJ30+MiDQqNCw0LM8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjb29raWVTdGVwID09PSAnMycgJiYgc3RlcD09PSczJyAmJiAnYWN0aXZlJ30+MyDQqNCw0LM8L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgXHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgR2V0U2VydmljZSJdLCJzb3VyY2VSb290IjoiIn0=