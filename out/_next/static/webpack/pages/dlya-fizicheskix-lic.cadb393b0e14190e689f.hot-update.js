self["webpackHotUpdate_N_E"]("pages/dlya-fizicheskix-lic",{

/***/ "./pages/dlya-fizicheskix-lic.js":
/*!***************************************!*\
  !*** ./pages/dlya-fizicheskix-lic.js ***!
  \***************************************/
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


var _jsxFileName = "E:\\job\\nashcompany\\pages\\dlya-fizicheskix-lic.js",
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
      router.push('/dlya-fizicheskix-lic');
    }

    if (js_cookie__WEBPACK_IMPORTED_MODULE_7___default().get('step') === '2') {
      router.push('/dlya-fizicheskix-lic?step=2');
    }

    if (js_cookie__WEBPACK_IMPORTED_MODULE_7___default().get('step') === '3') {
      router.push('/dlya-fizicheskix-lic?step=3');
    }
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(function () {
    if (js_cookie__WEBPACK_IMPORTED_MODULE_7___default().get('step') !== undefined && (js_cookie__WEBPACK_IMPORTED_MODULE_7___default().get('lead_id') === undefined || js_cookie__WEBPACK_IMPORTED_MODULE_7___default().get('token') === undefined)) {
      console.log('removed');
      js_cookie__WEBPACK_IMPORTED_MODULE_7___default().remove('step');
      js_cookie__WEBPACK_IMPORTED_MODULE_7___default().remove('lead_id');
      js_cookie__WEBPACK_IMPORTED_MODULE_7___default().remove('token');
      router.push('/');
    }
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "getservice",
    children: [loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_loader_Loader__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 19
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0443\u0441\u043B\u0443\u0433\u0443 | \u0424\u0438\u0437. \u043B\u0438\u0446\u043E"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "header",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Nav__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "bg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "form_headings",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: "\u0423\u0441\u043B\u0443\u0433\u0438 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u043B\u0438\u0446\u0430\u043C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: ["\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, _this), "\u0443\u0441\u043B\u0443\u0433\u0443:"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
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
              lineNumber: 71,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: cookieStep === '2' && step === '2' && 'active',
              children: "2 \u0428\u0430\u0433"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: cookieStep === '3' && step === '3' && 'active',
              children: "3 \u0428\u0430\u0433"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 9
        }, _this), js_cookie__WEBPACK_IMPORTED_MODULE_7___default().get('step') === undefined && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_getservice_FirstStep__WEBPACK_IMPORTED_MODULE_1__.default, {
          setLoading: setLoading
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 46
        }, _this), js_cookie__WEBPACK_IMPORTED_MODULE_7___default().get('step') === '2' && step === '2' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_getservice_SecondStep__WEBPACK_IMPORTED_MODULE_2__.default, {
          setLoading: setLoading
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 54
        }, _this), js_cookie__WEBPACK_IMPORTED_MODULE_7___default().get('step') === '3' && step === '3' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_getservice_ThirdStep__WEBPACK_IMPORTED_MODULE_5__.default, {
          setLoading: setLoading
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 54
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGx5YS1maXppY2hlc2tpeC1saWMuanMiXSwibmFtZXMiOlsiR2V0U2VydmljZSIsInJvdXRlciIsInVzZVJvdXRlciIsInN0ZXAiLCJxdWVyeSIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJjb29raWVTdGVwIiwic2V0Q29va2llU3RlcCIsInVzZUVmZmVjdCIsImNvb2tpZSIsInB1c2giLCJ1bmRlZmluZWQiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQ3ZCLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFEdUIsTUFFaEJDLElBRmdCLEdBRVJGLE1BQU0sQ0FBQ0csS0FGQyxDQUVoQkQsSUFGZ0I7O0FBQUEsa0JBSU9FLCtDQUFRLENBQUMsS0FBRCxDQUpmO0FBQUEsTUFJaEJDLE9BSmdCO0FBQUEsTUFJUEMsVUFKTzs7QUFBQSxtQkFLYUYsK0NBQVEsQ0FBQyxFQUFELENBTHJCO0FBQUEsTUFLaEJHLFVBTGdCO0FBQUEsTUFLSkMsYUFMSTs7QUFNdkJDLGtEQUFTLENBQUMsWUFBTTtBQUNkRCxpQkFBYSxDQUFDRSxvREFBQSxDQUFXLE1BQVgsQ0FBRCxDQUFiO0FBQ0QsR0FGUSxFQUVOLENBQUNBLG9EQUFBLENBQVcsTUFBWCxDQUFELENBRk0sQ0FBVDtBQUdBRCxrREFBUyxDQUFDLFlBQU07QUFDZCxRQUFHLENBQUNDLG9EQUFBLENBQVcsTUFBWCxDQUFKLEVBQXdCO0FBQ3RCVixZQUFNLENBQUNXLElBQVAsQ0FBWSx1QkFBWjtBQUNEOztBQUNELFFBQUdELG9EQUFBLENBQVcsTUFBWCxNQUF1QixHQUExQixFQUErQjtBQUM3QlYsWUFBTSxD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RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWlERCxDQXJGRDs7R0FBTVAsVTtVQUNXRSxrRDs7O0tBRFhGLFU7QUFzRk4sK0RBQWVBLFVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGx5YS1maXppY2hlc2tpeC1saWMuY2FkYjM5M2IwZTE0MTkwZTY4OWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGaXJzdFN0ZXAgZnJvbSBcIi4uL2NvbXBvbmVudHMvZ2V0c2VydmljZS9GaXJzdFN0ZXBcIlxyXG5pbXBvcnQgU2Vjb25kU3RlcCBmcm9tIFwiLi4vY29tcG9uZW50cy9nZXRzZXJ2aWNlL1NlY29uZFN0ZXBcIlxyXG5pbXBvcnQgTmF2IGZyb20gXCIuLi9jb21wb25lbnRzL3NoYXJlZC9OYXZcIlxyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBUaGlyZFN0ZXAgZnJvbSBcIi4uL2NvbXBvbmVudHMvZ2V0c2VydmljZS9UaGlyZFN0ZXBcIlxyXG5pbXBvcnQge1JvdXRlciwgdXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2xvYWRlci9Mb2FkZXJcIlxyXG5pbXBvcnQgQ29kZU1vZGFsIGZyb20gXCIuLi9jb21wb25lbnRzL3NoYXJlZC9Db2RlTW9kYWxcIlxyXG5jb25zdCBHZXRTZXJ2aWNlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3Qge3N0ZXB9ID0gcm91dGVyLnF1ZXJ5XHJcblxyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtjb29raWVTdGVwLCBzZXRDb29raWVTdGVwXSA9IHVzZVN0YXRlKCcnKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRDb29raWVTdGVwKGNvb2tpZS5nZXQoJ3N0ZXAnKSlcclxuICB9LCBbY29va2llLmdldCgnc3RlcCcpXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYoIWNvb2tpZS5nZXQoJ3N0ZXAnKSkge1xyXG4gICAgICByb3V0ZXIucHVzaCgnL2RseWEtZml6aWNoZXNraXgtbGljJylcclxuICAgIH1cclxuICAgIGlmKGNvb2tpZS5nZXQoJ3N0ZXAnKSA9PT0gJzInKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKCcvZGx5YS1maXppY2hlc2tpeC1saWM/c3RlcD0yJylcclxuICAgIH1cclxuICAgIGlmKGNvb2tpZS5nZXQoJ3N0ZXAnKSA9PT0gJzMnKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKCcvZGx5YS1maXppY2hlc2tpeC1saWM/c3RlcD0zJylcclxuICAgIH1cclxuXHJcbiBcclxuICB9LFtdKVxyXG5cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmKGNvb2tpZS5nZXQoJ3N0ZXAnKSAhPT0gdW5kZWZpbmVkICYmIChjb29raWUuZ2V0KCdsZWFkX2lkJyk9PT0gdW5kZWZpbmVkIHx8IGNvb2tpZS5nZXQoJ3Rva2VuJykgPT09IHVuZGVmaW5lZCkpe1xyXG4gICAgICBjb25zb2xlLmxvZygncmVtb3ZlZCcpXHJcbiAgICAgIGNvb2tpZS5yZW1vdmUoJ3N0ZXAnKVxyXG4gICAgICBjb29raWUucmVtb3ZlKCdsZWFkX2lkJylcclxuICAgICAgY29va2llLnJlbW92ZSgndG9rZW4nKVxyXG4gICAgICByb3V0ZXIucHVzaCgnLycpXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdnZXRzZXJ2aWNlJz5cclxuICAgICAgXHJcbiAgICAgIHtsb2FkaW5nICYmIDxMb2FkZXIgLz59XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5cclxuICAgICAgICAgINCf0L7Qu9GD0YfQuNGC0Ywg0YPRgdC70YPQs9GDIHwg0KTQuNC3LiDQu9C40YbQvlxyXG4gICAgICAgIDwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2hlYWRlcic+XHJcbiAgICAgICAgPE5hdi8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JnJz48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybV9oZWFkaW5ncyc+XHJcbiAgICAgICAgICA8aDE+0KPRgdC70YPQs9C4INGE0LjQt9C40YfQtdGB0LrQuNC8INC70LjRhtCw0Lw8L2gxPlxyXG4gICAgICAgICAgPGgyPtCf0L7Qu9GD0YfQuNGC0YxcclxuICAgICAgICAgICAgPGJyPjwvYnI+0YPRgdC70YPQs9GDOjwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm1fc2VydmljZSAnPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtX2hlYWRlcic+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2Nvb2tpZVN0ZXAgPT09IHVuZGVmaW5lZCA/ICdhY3RpdmUnIDogJyd9PjEg0KjQsNCzPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y29va2llU3RlcCA9PT0gJzInICYmIHN0ZXA9PT0nMicgJiYgJ2FjdGl2ZSd9PjIg0KjQsNCzPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y29va2llU3RlcCA9PT0gJzMnICYmIHN0ZXA9PT0nMycgJiYgJ2FjdGl2ZSd9PjMg0KjQsNCzPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAge2Nvb2tpZS5nZXQoJ3N0ZXAnKSA9PT0gdW5kZWZpbmVkICYmIDxGaXJzdFN0ZXAgc2V0TG9hZGluZz17c2V0TG9hZGluZ30vPn1cclxuICAgICAgICB7Y29va2llLmdldCgnc3RlcCcpID09PSAnMicgJiYgc3RlcD09PScyJyAmJiA8U2Vjb25kU3RlcCBzZXRMb2FkaW5nPXtzZXRMb2FkaW5nfS8+fVxyXG4gICAgICAgIHtjb29raWUuZ2V0KCdzdGVwJykgPT09ICczJyAmJiBzdGVwPT09JzMnICYmIDxUaGlyZFN0ZXAgc2V0TG9hZGluZz17c2V0TG9hZGluZ30gLz59XHJcbiAgICAgICAgey8qIDxTZWNvbmRTdGVwIHNldExvYWRpbmc9e3NldExvYWRpbmd9IC8+ICovfVxyXG4gICAgICAgIHsvKiA8VGhpcmRTdGVwIHNldExvYWRpbmc9e3NldExvYWRpbmd9IC8+ICovfVxyXG4gICAgICAgIHsvKiA8U2Vjb25kU3RlcCAvPiAqL31cclxuICAgICAgICB7LyogPFRoaXJkU3RlcCAvPiAqL31cclxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9J2Zvcm1faGVhZGVyJz5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IGNoZWNraW5nKCl9IGNsYXNzTmFtZT17Y29va2llU3RlcCA9PT0gdW5kZWZpbmVkID8gJ2FjdGl2ZScgOiAnJ30+MSDQqNCw0LM8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjb29raWVTdGVwID09PSAnMicgJiYgc3RlcD09PScyJyAmJiAnYWN0aXZlJ30+MiDQqNCw0LM8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjb29raWVTdGVwID09PSAnMycgJiYgc3RlcD09PSczJyAmJiAnYWN0aXZlJ30+MyDQqNCw0LM8L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgXHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgR2V0U2VydmljZSJdLCJzb3VyY2VSb290IjoiIn0=