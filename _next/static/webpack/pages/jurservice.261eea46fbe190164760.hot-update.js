self["webpackHotUpdate_N_E"]("pages/jurservice",{

/***/ "./pages/jurservice.js":
/*!*****************************!*\
  !*** ./pages/jurservice.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_getservice_FirstStepJur__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/getservice/FirstStepJur */ "./components/getservice/FirstStepJur.js");
/* harmony import */ var _components_getservice_SecondStepJur__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/getservice/SecondStepJur */ "./components/getservice/SecondStepJur.js");
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


var _jsxFileName = "E:\\job\\nashcompany\\pages\\jurservice.js",
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
    setCookieStep(js_cookie__WEBPACK_IMPORTED_MODULE_7___default().get('stepjur'));
  }, [js_cookie__WEBPACK_IMPORTED_MODULE_7___default().get('stepjur')]);
  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(function () {// if(!cookie.get('stepjur')) {
    //   router.push('/jurservice')
    // }
    // if(cookie.get('stepjur') === '2') {
    //   router.push('/jurservice?step=2')
    // }
    // if(cookie.get('stepjur') === '3') {
    //   router.push('/jurservice?step=3')
    // }
  }, []); // useEffect(() => {
  //   if(cookie.get('stepjur') !== undefined && (cookie.get('lead_id')=== undefined || cookie.get('token') === undefined)){
  //     console.log('removed')
  //     cookie.remove('stepjur')
  //     cookie.remove('lead_id')
  //     cookie.remove('token')
  //     router.push('/dlya-fizicheskix-lic')
  //   }
  // },[])

  var headerClick = function headerClick(num) {
    if (num !== "1") {
      js_cookie__WEBPACK_IMPORTED_MODULE_7___default().set("stepjur", num);
      router.push("/jurservice?step=".concat(num));
    } else {
      router.push('/jurservice');
      js_cookie__WEBPACK_IMPORTED_MODULE_7___default().remove('stepjur');
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "getservice",
    children: [loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_loader_Loader__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 19
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0443\u0441\u043B\u0443\u0433\u0443 | \u042E\u0440. \u043B\u0438\u0446\u043E"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "header",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Nav__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "bg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "form_headings",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
          children: "\u0423\u0441\u043B\u0443\u0433\u0438 \u044E\u0440. \u043B\u0438\u0446\u0430\u043C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: ["\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, _this), "\u0443\u0441\u043B\u0443\u0433\u0443:"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "form_service ",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "form_header",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              onClick: function onClick() {
                return headerClick("1");
              },
              className: cookieStep === undefined || step === '1' ? 'active' : '',
              children: "1 \u0428\u0430\u0433"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              onCLick: function onCLick() {
                return headerClick("2");
              },
              className: cookieStep === '2' && step === '2' && 'active',
              children: "2 \u0428\u0430\u0433"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              onClick: function onClick() {
                return headerClick("3");
              },
              className: cookieStep === '3' && step === '3' && 'active',
              children: "3 \u0428\u0430\u0433"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "form_register",
          children: [js_cookie__WEBPACK_IMPORTED_MODULE_7___default().get('stepjur') === undefined && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_getservice_FirstStepJur__WEBPACK_IMPORTED_MODULE_1__.default, {
            setLoading: setLoading
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 49
          }, _this), js_cookie__WEBPACK_IMPORTED_MODULE_7___default().get('stepjur') === '2' && step === '2' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_getservice_SecondStepJur__WEBPACK_IMPORTED_MODULE_2__.default, {
            setLoading: setLoading
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 57
          }, _this), js_cookie__WEBPACK_IMPORTED_MODULE_7___default().get('stepjur') === '3' && step === '3' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_getservice_ThirdStep__WEBPACK_IMPORTED_MODULE_5__.default, {
            setLoading: setLoading
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 57
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvanVyc2VydmljZS5qcyJdLCJuYW1lcyI6WyJHZXRTZXJ2aWNlIiwicm91dGVyIiwidXNlUm91dGVyIiwic3RlcCIsInF1ZXJ5IiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImNvb2tpZVN0ZXAiLCJzZXRDb29raWVTdGVwIiwidXNlRWZmZWN0IiwiY29va2llIiwiaGVhZGVyQ2xpY2siLCJudW0iLCJwdXNoIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQ3ZCLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFEdUIsTUFFaEJDLElBRmdCLEdBRVJGLE1BQU0sQ0FBQ0csS0FGQyxDQUVoQkQsSUFGZ0I7O0FBQUEsa0JBSU9FLCtDQUFRLENBQUMsS0FBRCxDQUpmO0FBQUEsTUFJaEJDLE9BSmdCO0FBQUEsTUFJUEMsVUFKTzs7QUFBQSxtQkFLYUYsK0NBQVEsQ0FBQyxFQUFELENBTHJCO0FBQUEsTUFLaEJHLFVBTGdCO0FBQUEsTUFLSkMsYUFMSTs7QUFNdkJDLGtEQUFTLENBQUMsWUFBTTtBQUNkRCxpQkFBYSxDQUFDRSxvREFBQSxDQUFXLFNBQVgsQ0FBRCxDQUFiO0FBQ0QsR0FGUSxFQUVOLENBQUNBLG9EQUFBLENBQVcsU0FBWCxDQUFELENBRk0sQ0FBVDtBQUdBRCxrREFBUyxDQUFDLFlBQU0sQ0FDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRCxHQVZRLEVBVVAsRUFWTyxDQUFULENBVHVCLENBcUJ2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBTUUsV0FBVyxHQUFHLFNB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QUFBO0FBQUE7QUFBQSxpQkFSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXlDRCxDQWpGRDs7R0FBTVAsVTtVQUNXRSxrRDs7O0tBRFhGLFU7QUFrRk4sK0RBQWVBLFVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvanVyc2VydmljZS4yNjFlZWE0NmZiZTE5MDE2NDc2MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZpcnN0U3RlcCBmcm9tIFwiLi4vY29tcG9uZW50cy9nZXRzZXJ2aWNlL0ZpcnN0U3RlcEp1clwiXHJcbmltcG9ydCBTZWNvbmRTdGVwIGZyb20gXCIuLi9jb21wb25lbnRzL2dldHNlcnZpY2UvU2Vjb25kU3RlcEp1clwiXHJcbmltcG9ydCBOYXYgZnJvbSBcIi4uL2NvbXBvbmVudHMvc2hhcmVkL05hdlwiXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IFRoaXJkU3RlcCBmcm9tIFwiLi4vY29tcG9uZW50cy9nZXRzZXJ2aWNlL1RoaXJkU3RlcFwiXHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2xvYWRlci9Mb2FkZXJcIlxyXG5pbXBvcnQgQ29kZU1vZGFsIGZyb20gXCIuLi9jb21wb25lbnRzL3NoYXJlZC9Db2RlTW9kYWxcIlxyXG5jb25zdCBHZXRTZXJ2aWNlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3Qge3N0ZXB9ID0gcm91dGVyLnF1ZXJ5XHJcblxyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtjb29raWVTdGVwLCBzZXRDb29raWVTdGVwXSA9IHVzZVN0YXRlKCcnKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRDb29raWVTdGVwKGNvb2tpZS5nZXQoJ3N0ZXBqdXInKSlcclxuICB9LCBbY29va2llLmdldCgnc3RlcGp1cicpXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gaWYoIWNvb2tpZS5nZXQoJ3N0ZXBqdXInKSkge1xyXG4gICAgLy8gICByb3V0ZXIucHVzaCgnL2p1cnNlcnZpY2UnKVxyXG4gICAgLy8gfVxyXG4gICAgLy8gaWYoY29va2llLmdldCgnc3RlcGp1cicpID09PSAnMicpIHtcclxuICAgIC8vICAgcm91dGVyLnB1c2goJy9qdXJzZXJ2aWNlP3N0ZXA9MicpXHJcbiAgICAvLyB9XHJcbiAgICAvLyBpZihjb29raWUuZ2V0KCdzdGVwanVyJykgPT09ICczJykge1xyXG4gICAgLy8gICByb3V0ZXIucHVzaCgnL2p1cnNlcnZpY2U/c3RlcD0zJylcclxuICAgIC8vIH1cclxuICB9LFtdKVxyXG5cclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgaWYoY29va2llLmdldCgnc3RlcGp1cicpICE9PSB1bmRlZmluZWQgJiYgKGNvb2tpZS5nZXQoJ2xlYWRfaWQnKT09PSB1bmRlZmluZWQgfHwgY29va2llLmdldCgndG9rZW4nKSA9PT0gdW5kZWZpbmVkKSl7XHJcbiAgLy8gICAgIGNvbnNvbGUubG9nKCdyZW1vdmVkJylcclxuICAvLyAgICAgY29va2llLnJlbW92ZSgnc3RlcGp1cicpXHJcbiAgLy8gICAgIGNvb2tpZS5yZW1vdmUoJ2xlYWRfaWQnKVxyXG4gIC8vICAgICBjb29raWUucmVtb3ZlKCd0b2tlbicpXHJcbiAgLy8gICAgIHJvdXRlci5wdXNoKCcvZGx5YS1maXppY2hlc2tpeC1saWMnKVxyXG4gIC8vICAgfVxyXG4gIC8vIH0sW10pXHJcbiAgY29uc3QgaGVhZGVyQ2xpY2sgPSAobnVtKSA9PiB7XHJcbiAgICBpZihudW0gIT09IFwiMVwiKSB7XHJcblxyXG4gICAgICBjb29raWUuc2V0KFwic3RlcGp1clwiLCBudW0pO1xyXG4gICAgICByb3V0ZXIucHVzaChgL2p1cnNlcnZpY2U/c3RlcD0ke251bX1gKVxyXG4gICAgfWVsc2Uge1xyXG4gICAgICByb3V0ZXIucHVzaCgnL2p1cnNlcnZpY2UnKVxyXG4gICAgICBjb29raWUucmVtb3ZlKCdzdGVwanVyJylcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdnZXRzZXJ2aWNlJz5cclxuICAgICAge2xvYWRpbmcgJiYgPExvYWRlciAvPn1cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlxyXG4gICAgICAgICAg0J/QvtC70YPRh9C40YLRjCDRg9GB0LvRg9Cz0YMgfCDQrtGALiDQu9C40YbQvlxyXG4gICAgICAgIDwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2hlYWRlcic+XHJcbiAgICAgICAgPE5hdi8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JnJz48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuICAgICBcclxuICAgICAgICBcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm1faGVhZGluZ3MnPlxyXG4gICAgICAgICAgPGI+0KPRgdC70YPQs9C4INGO0YAuINC70LjRhtCw0Lw8L2I+XHJcbiAgICAgICAgICA8aDI+0J/QvtC70YPRh9C40YLRjFxyXG4gICAgICAgICAgICA8YnI+PC9icj7Rg9GB0LvRg9Cz0YM6PC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybV9zZXJ2aWNlICc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm1faGVhZGVyJz5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IGhlYWRlckNsaWNrKFwiMVwiKX0gY2xhc3NOYW1lPXtjb29raWVTdGVwID09PSB1bmRlZmluZWQgfHwgc3RlcD09PScxJyA/ICdhY3RpdmUnIDogJyd9PjEg0KjQsNCzPC9saT5cclxuICAgICAgICAgICAgPGxpIG9uQ0xpY2s9eygpPT4gaGVhZGVyQ2xpY2soXCIyXCIpfSBjbGFzc05hbWU9e2Nvb2tpZVN0ZXAgPT09ICcyJyAmJiBzdGVwPT09JzInICYmICdhY3RpdmUnfT4yINCo0LDQszwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiBoZWFkZXJDbGljayhcIjNcIil9IGNsYXNzTmFtZT17Y29va2llU3RlcCA9PT0gJzMnICYmIHN0ZXA9PT0nMycgJiYgJ2FjdGl2ZSd9PjMg0KjQsNCzPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtX3JlZ2lzdGVyXCI+XHJcbiAgICAgICAge2Nvb2tpZS5nZXQoJ3N0ZXBqdXInKSA9PT0gdW5kZWZpbmVkICYmIDxGaXJzdFN0ZXAgc2V0TG9hZGluZz17c2V0TG9hZGluZ30vPn1cclxuICAgICAgICB7Y29va2llLmdldCgnc3RlcGp1cicpID09PSAnMicgJiYgc3RlcD09PScyJyAmJiA8U2Vjb25kU3RlcCBzZXRMb2FkaW5nPXtzZXRMb2FkaW5nfS8+fVxyXG4gICAgICAgIHtjb29raWUuZ2V0KCdzdGVwanVyJykgPT09ICczJyAmJiBzdGVwPT09JzMnICYmIDxUaGlyZFN0ZXAgc2V0TG9hZGluZz17c2V0TG9hZGluZ30vPn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7LyogPFNlY29uZFN0ZXAgLz4gKi99XHJcbiAgICAgICAgey8qIDxUaGlyZFN0ZXAgLz4gKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgXHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgR2V0U2VydmljZSJdLCJzb3VyY2VSb290IjoiIn0=