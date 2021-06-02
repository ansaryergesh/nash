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
  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(function () {
    var form = document.querySelector('.form_register');
    console.log(form);
    form.scrollIntoView({
      block: 'center',
      behavior: 'smooth'
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "getservice",
    children: [loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_loader_Loader__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 19
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0443\u0441\u043B\u0443\u0433\u0443 | \u0424\u0438\u0437. \u043B\u0438\u0446\u043E"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "header",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Nav__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "bg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "form_headings",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
          children: "\u0423\u0441\u043B\u0443\u0433\u0438 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u043B\u0438\u0446\u0430\u043C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: ["\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, _this), "\u0443\u0441\u043B\u0443\u0433\u0443:"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
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
              lineNumber: 65,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: cookieStep === '2' && step === '2' && 'active',
              children: "2 \u0428\u0430\u0433"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: cookieStep === '3' && step === '3' && 'active',
              children: "3 \u0428\u0430\u0433"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 9
        }, _this), js_cookie__WEBPACK_IMPORTED_MODULE_7___default().get('step') === undefined && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_getservice_FirstStep__WEBPACK_IMPORTED_MODULE_1__.default, {
          setLoading: setLoading
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 46
        }, _this), js_cookie__WEBPACK_IMPORTED_MODULE_7___default().get('step') === '2' && step === '2' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_getservice_SecondStep__WEBPACK_IMPORTED_MODULE_2__.default, {
          setLoading: setLoading
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 54
        }, _this), js_cookie__WEBPACK_IMPORTED_MODULE_7___default().get('step') === '3' && step === '3' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_getservice_ThirdStep__WEBPACK_IMPORTED_MODULE_5__.default, {
          setLoading: setLoading
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 54
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, _this);
};

_s(GetService, "SUIGHc2HMiO6LNNWWvHtV8TbwGQ=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2V0c2VydmljZS5qcyJdLCJuYW1lcyI6WyJHZXRTZXJ2aWNlIiwicm91dGVyIiwidXNlUm91dGVyIiwic3RlcCIsInF1ZXJ5IiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImNvb2tpZVN0ZXAiLCJzZXRDb29raWVTdGVwIiwidXNlRWZmZWN0IiwiY29va2llIiwicHVzaCIsImZvcm0iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjb25zb2xlIiwibG9nIiwic2Nyb2xsSW50b1ZpZXciLCJibG9jayIsImJlaGF2aW9yIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQ3ZCLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFEdUIsTUFFaEJDLElBRmdCLEdBRVJGLE1BQU0sQ0FBQ0csS0FGQyxDQUVoQkQsSUFGZ0I7O0FBQUEsa0JBSU9FLCtDQUFRLENBQUMsS0FBRCxDQUpmO0FBQUEsTUFJaEJDLE9BSmdCO0FBQUEsTUFJUEMsVUFKTzs7QUFBQSxtQkFLYUYsK0NBQVEsQ0FBQyxFQUFELENBTHJCO0FBQUEsTUFLaEJHLFVBTGdCO0FBQUEsTUFLSkMsYUFMSTs7QUFNdkJDLGtEQUFTLENBQUMsWUFBTTtBQUNkRCxpQkFBYSxDQUFDRSxvREFBQSxDQUFXLE1BQVgsQ0FBRCxDQUFiO0FBQ0QsR0FGUSxFQUVOLENBQUNBLG9EQUFBLENBQVcsTUFBWCxDQUFELENBRk0sQ0FBVDtBQUdBRCxrREFBUyxDQUFDLFlBQU07QUFDZCxRQUFHLENBQUNDLG9EQUFBLENBQVcsTUFBWCxDQUFKLEVBQXdCO0FBQ3RCVixZQUFNLENBQUNXLElBQVAsQ0FBWSxhQUFaO0FBQ0Q7O0FBQ0QsUUFBR0Qsb0RBQUEsQ0FBVyxNQUFYLE1BQXVCLEdBQTFCLEVBQStCO0FBQzdCVixZQUFNLENBQUNXLElBQVAsQ0FBWSxvQkFBWjtBQUNEOztBQUNELFFBQUdELG9EQUFBLENBQVcsTUFBWCxNQUF1QixHQUExQixFQUErQjtBQUM3QlYsWUFBTSxDQUFDVyxJQUFQLENBQVksb0JBQVo7QUFDRDtBQUdGLEdBWlEsRUFZUCxFQVpPLENBQVQ7QUFhQUYsa0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSUcsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZ0JBQXZCLENBQVg7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlKLElBQVo7QUFDQUEsUUFBSSxDQUFDSyxjQUFMLENBQW9CO0FBQUNDLFdBQUssRUFBRSxRQUFSO0FBQWtCQyxjQUFRLEVBQUU7QUFBNUIsS0FBcEI7QUFDRCxHQUpRLEVBSVAsRUFKTyxDQUFUO0FBUUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBLGVBRUdkLE9BQU8saUJBQUksOERBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZkLGVBR0UsOERBQUMsa0RBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRixlQVFFO0FBQUssZUFBUyxFQUFDLFFBQWY7QUFBQSw4QkFDRSw4REFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFLLGlCQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUkYsZUFhRTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsOEJBRUU7QUFBSyxpQkFBUyxFQUFDLGVBQWY7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUEsc0ZBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFPRTtBQUFLLGlCQUFTLEVBQUMsZUFBZjtBQUFBLGdDQUNBO0FBQUssbUJBQVMsRUFBQyxhQUFmO0FBQUEsaUNBQ0U7QUFBQSxvQ0FDRTtBQUFJLHVCQUFTLEVBQUVFLFVBQVUsS0FBS2EsU0FBZixHQUEyQixRQUEzQixHQUFzQyxFQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQUksdUJBQVMsRUFBRWIsVUFBVSxLQUFLLEdBQWYsSUFBc0JMLElBQUksS0FBRyxHQUE3QixJQUFvQyxRQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRixlQUdFO0FBQUksdUJBQVMsRUFBRUssVUFBVSxLQUFLLEdBQWYsSUFBc0JMLElBQUksS0FBRyxHQUE3QixJQUFvQyxRQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURBLEVBU0NRLG9EQUFBLENBQVcsTUFBWCxNQUF1QlUsU0FBdkIsaUJBQW9DLDhEQUFDLHFFQUFEO0FBQVcsb0JBQVUsRUFBRWQ7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFUckMsRUFVQ0ksb0RBQUEsQ0FBVyxNQUFYLE1BQXVCLEdBQXZCLElBQThCUixJQUFJLEtBQUcsR0FBckMsaUJBQTRDLDhEQUFDLHNFQUFEO0FBQVksb0JBQVUsRUFBRUk7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFWN0MsRUFXQ0ksb0RBQUEsQ0FBVyxNQUFYLE1BQXVCLEdBQXZCLElBQThCUixJQUFJLEtBQUcsR0FBckMsaUJBQTRDLDhEQUFDLHFFQUFEO0FBQVcsb0JBQVUsRUFBRUk7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFYN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFnREQsQ0E5RUQ7O0dBQU1QLFU7VUFDV0Usa0Q7OztLQURYRixVO0FBK0VOLCtEQUFlQSxVQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2dldHNlcnZpY2UuMjlhMTA4MWExNDNhNjcyMDFjOTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGaXJzdFN0ZXAgZnJvbSBcIi4uL2NvbXBvbmVudHMvZ2V0c2VydmljZS9GaXJzdFN0ZXBcIlxyXG5pbXBvcnQgU2Vjb25kU3RlcCBmcm9tIFwiLi4vY29tcG9uZW50cy9nZXRzZXJ2aWNlL1NlY29uZFN0ZXBcIlxyXG5pbXBvcnQgTmF2IGZyb20gXCIuLi9jb21wb25lbnRzL3NoYXJlZC9OYXZcIlxyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBUaGlyZFN0ZXAgZnJvbSBcIi4uL2NvbXBvbmVudHMvZ2V0c2VydmljZS9UaGlyZFN0ZXBcIlxyXG5pbXBvcnQge1JvdXRlciwgdXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2xvYWRlci9Mb2FkZXJcIlxyXG5pbXBvcnQgQ29kZU1vZGFsIGZyb20gXCIuLi9jb21wb25lbnRzL3NoYXJlZC9Db2RlTW9kYWxcIlxyXG5jb25zdCBHZXRTZXJ2aWNlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3Qge3N0ZXB9ID0gcm91dGVyLnF1ZXJ5XHJcblxyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtjb29raWVTdGVwLCBzZXRDb29raWVTdGVwXSA9IHVzZVN0YXRlKCcnKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRDb29raWVTdGVwKGNvb2tpZS5nZXQoJ3N0ZXAnKSlcclxuICB9LCBbY29va2llLmdldCgnc3RlcCcpXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYoIWNvb2tpZS5nZXQoJ3N0ZXAnKSkge1xyXG4gICAgICByb3V0ZXIucHVzaCgnL2dldHNlcnZpY2UnKVxyXG4gICAgfVxyXG4gICAgaWYoY29va2llLmdldCgnc3RlcCcpID09PSAnMicpIHtcclxuICAgICAgcm91dGVyLnB1c2goJy9nZXRzZXJ2aWNlP3N0ZXA9MicpXHJcbiAgICB9XHJcbiAgICBpZihjb29raWUuZ2V0KCdzdGVwJykgPT09ICczJykge1xyXG4gICAgICByb3V0ZXIucHVzaCgnL2dldHNlcnZpY2U/c3RlcD0zJylcclxuICAgIH1cclxuXHJcbiBcclxuICB9LFtdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB2YXIgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX3JlZ2lzdGVyJyk7XHJcbiAgICBjb25zb2xlLmxvZyhmb3JtKVxyXG4gICAgZm9ybS5zY3JvbGxJbnRvVmlldyh7YmxvY2s6ICdjZW50ZXInLCBiZWhhdmlvcjogJ3Ntb290aCd9KVxyXG4gIH0sW10pXHJcblxyXG4gXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZ2V0c2VydmljZSc+XHJcbiAgICAgIFxyXG4gICAgICB7bG9hZGluZyAmJiA8TG9hZGVyIC8+fVxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+XHJcbiAgICAgICAgICDQn9C+0LvRg9GH0LjRgtGMINGD0YHQu9GD0LPRgyB8INCk0LjQty4g0LvQuNGG0L5cclxuICAgICAgICA8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXInPlxyXG4gICAgICAgIDxOYXYvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZyc+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcbiAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm1faGVhZGluZ3MnPlxyXG4gICAgICAgICAgPGI+0KPRgdC70YPQs9C4INGE0LjQt9C40YfQtdGB0LrQuNC8INC70LjRhtCw0Lw8L2I+XHJcbiAgICAgICAgICA8aDI+0J/QvtC70YPRh9C40YLRjFxyXG4gICAgICAgICAgICA8YnI+PC9icj7Rg9GB0LvRg9Cz0YM6PC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybV9zZXJ2aWNlICc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm1faGVhZGVyJz5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y29va2llU3RlcCA9PT0gdW5kZWZpbmVkID8gJ2FjdGl2ZScgOiAnJ30+MSDQqNCw0LM8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjb29raWVTdGVwID09PSAnMicgJiYgc3RlcD09PScyJyAmJiAnYWN0aXZlJ30+MiDQqNCw0LM8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjb29raWVTdGVwID09PSAnMycgJiYgc3RlcD09PSczJyAmJiAnYWN0aXZlJ30+MyDQqNCw0LM8L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICB7Y29va2llLmdldCgnc3RlcCcpID09PSB1bmRlZmluZWQgJiYgPEZpcnN0U3RlcCBzZXRMb2FkaW5nPXtzZXRMb2FkaW5nfS8+fVxyXG4gICAgICAgIHtjb29raWUuZ2V0KCdzdGVwJykgPT09ICcyJyAmJiBzdGVwPT09JzInICYmIDxTZWNvbmRTdGVwIHNldExvYWRpbmc9e3NldExvYWRpbmd9Lz59XHJcbiAgICAgICAge2Nvb2tpZS5nZXQoJ3N0ZXAnKSA9PT0gJzMnICYmIHN0ZXA9PT0nMycgJiYgPFRoaXJkU3RlcCBzZXRMb2FkaW5nPXtzZXRMb2FkaW5nfSAvPn1cclxuICAgICAgICBcclxuICAgICAgICB7LyogPFNlY29uZFN0ZXAgLz4gKi99XHJcbiAgICAgICAgey8qIDxUaGlyZFN0ZXAgLz4gKi99XHJcbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPSdmb3JtX2hlYWRlcic+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiBjaGVja2luZygpfSBjbGFzc05hbWU9e2Nvb2tpZVN0ZXAgPT09IHVuZGVmaW5lZCA/ICdhY3RpdmUnIDogJyd9PjEg0KjQsNCzPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y29va2llU3RlcCA9PT0gJzInICYmIHN0ZXA9PT0nMicgJiYgJ2FjdGl2ZSd9PjIg0KjQsNCzPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y29va2llU3RlcCA9PT0gJzMnICYmIHN0ZXA9PT0nMycgJiYgJ2FjdGl2ZSd9PjMg0KjQsNCzPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgIFxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEdldFNlcnZpY2UiXSwic291cmNlUm9vdCI6IiJ9