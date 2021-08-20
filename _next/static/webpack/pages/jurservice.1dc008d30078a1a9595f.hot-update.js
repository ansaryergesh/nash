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
          children: [js_cookie__WEBPACK_IMPORTED_MODULE_7___default().get('stepjur') === undefined && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FirsSetStep, {
            setLoading: setLoading
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 49
          }, _this), step === '2' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_getservice_SecondStepJur__WEBPACK_IMPORTED_MODULE_2__.default, {
            setLoading: setLoading
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 24
          }, _this), step === '3' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_getservice_ThirdStep__WEBPACK_IMPORTED_MODULE_5__.default, {
            setLoading: setLoading
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 24
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvanVyc2VydmljZS5qcyJdLCJuYW1lcyI6WyJHZXRTZXJ2aWNlIiwicm91dGVyIiwidXNlUm91dGVyIiwic3RlcCIsInF1ZXJ5IiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImNvb2tpZVN0ZXAiLCJzZXRDb29raWVTdGVwIiwidXNlRWZmZWN0IiwiY29va2llIiwiaGVhZGVyQ2xpY2siLCJudW0iLCJwdXNoIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQ3ZCLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFEdUIsTUFFaEJDLElBRmdCLEdBRVJGLE1BQU0sQ0FBQ0csS0FGQyxDQUVoQkQsSUFGZ0I7O0FBQUEsa0JBSU9FLCtDQUFRLENBQUMsS0FBRCxDQUpmO0FBQUEsTUFJaEJDLE9BSmdCO0FBQUEsTUFJUEMsVUFKTzs7QUFBQSxtQkFLYUYsK0NBQVEsQ0FBQyxFQUFELENBTHJCO0FBQUEsTUFLaEJHLFVBTGdCO0FBQUEsTUFLSkMsYUFMSTs7QUFNdkJDLGtEQUFTLENBQUMsWUFBTTtBQUNkRCxpQkFBYSxDQUFDRSxvREFBQSxDQUFXLFNBQVgsQ0FBRCxDQUFiO0FBQ0QsR0FGUSxFQUVOLENBQUNBLG9EQUFBLENBQVcsU0FBWCxDQUFELENBRk0sQ0FBVDtBQUdBRCxrREFBUyxDQUFDLFlBQU0sQ0FDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRCxHQVZRLEVBVVAsRUFWTyxDQUFULENBVHVCLENBcUJ2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBTUUsV0FBVyxHQUFHLFNB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WkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF5Q0QsQ0FqRkQ7O0dBQU1QLFU7VUFDV0Usa0Q7OztLQURYRixVO0FBa0ZOLCtEQUFlQSxVQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2p1cnNlcnZpY2UuMWRjMDA4ZDMwMDc4YTFhOTU5NWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGaXJzdFN0ZXAgZnJvbSBcIi4uL2NvbXBvbmVudHMvZ2V0c2VydmljZS9GaXJzdFN0ZXBKdXJcIlxyXG5pbXBvcnQgU2Vjb25kU3RlcCBmcm9tIFwiLi4vY29tcG9uZW50cy9nZXRzZXJ2aWNlL1NlY29uZFN0ZXBKdXJcIlxyXG5pbXBvcnQgTmF2IGZyb20gXCIuLi9jb21wb25lbnRzL3NoYXJlZC9OYXZcIlxyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBUaGlyZFN0ZXAgZnJvbSBcIi4uL2NvbXBvbmVudHMvZ2V0c2VydmljZS9UaGlyZFN0ZXBcIlxyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IExvYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9sb2FkZXIvTG9hZGVyXCJcclxuaW1wb3J0IENvZGVNb2RhbCBmcm9tIFwiLi4vY29tcG9uZW50cy9zaGFyZWQvQ29kZU1vZGFsXCJcclxuY29uc3QgR2V0U2VydmljZSA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHtzdGVwfSA9IHJvdXRlci5xdWVyeVxyXG5cclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbY29va2llU3RlcCwgc2V0Q29va2llU3RlcF0gPSB1c2VTdGF0ZSgnJylcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0Q29va2llU3RlcChjb29raWUuZ2V0KCdzdGVwanVyJykpXHJcbiAgfSwgW2Nvb2tpZS5nZXQoJ3N0ZXBqdXInKV0pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIGlmKCFjb29raWUuZ2V0KCdzdGVwanVyJykpIHtcclxuICAgIC8vICAgcm91dGVyLnB1c2goJy9qdXJzZXJ2aWNlJylcclxuICAgIC8vIH1cclxuICAgIC8vIGlmKGNvb2tpZS5nZXQoJ3N0ZXBqdXInKSA9PT0gJzInKSB7XHJcbiAgICAvLyAgIHJvdXRlci5wdXNoKCcvanVyc2VydmljZT9zdGVwPTInKVxyXG4gICAgLy8gfVxyXG4gICAgLy8gaWYoY29va2llLmdldCgnc3RlcGp1cicpID09PSAnMycpIHtcclxuICAgIC8vICAgcm91dGVyLnB1c2goJy9qdXJzZXJ2aWNlP3N0ZXA9MycpXHJcbiAgICAvLyB9XHJcbiAgfSxbXSlcclxuXHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIGlmKGNvb2tpZS5nZXQoJ3N0ZXBqdXInKSAhPT0gdW5kZWZpbmVkICYmIChjb29raWUuZ2V0KCdsZWFkX2lkJyk9PT0gdW5kZWZpbmVkIHx8IGNvb2tpZS5nZXQoJ3Rva2VuJykgPT09IHVuZGVmaW5lZCkpe1xyXG4gIC8vICAgICBjb25zb2xlLmxvZygncmVtb3ZlZCcpXHJcbiAgLy8gICAgIGNvb2tpZS5yZW1vdmUoJ3N0ZXBqdXInKVxyXG4gIC8vICAgICBjb29raWUucmVtb3ZlKCdsZWFkX2lkJylcclxuICAvLyAgICAgY29va2llLnJlbW92ZSgndG9rZW4nKVxyXG4gIC8vICAgICByb3V0ZXIucHVzaCgnL2RseWEtZml6aWNoZXNraXgtbGljJylcclxuICAvLyAgIH1cclxuICAvLyB9LFtdKVxyXG4gIGNvbnN0IGhlYWRlckNsaWNrID0gKG51bSkgPT4ge1xyXG4gICAgaWYobnVtICE9PSBcIjFcIikge1xyXG5cclxuICAgICAgY29va2llLnNldChcInN0ZXBqdXJcIiwgbnVtKTtcclxuICAgICAgcm91dGVyLnB1c2goYC9qdXJzZXJ2aWNlP3N0ZXA9JHtudW19YClcclxuICAgIH1lbHNlIHtcclxuICAgICAgcm91dGVyLnB1c2goJy9qdXJzZXJ2aWNlJylcclxuICAgICAgY29va2llLnJlbW92ZSgnc3RlcGp1cicpXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZ2V0c2VydmljZSc+XHJcbiAgICAgIHtsb2FkaW5nICYmIDxMb2FkZXIgLz59XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5cclxuICAgICAgICAgINCf0L7Qu9GD0YfQuNGC0Ywg0YPRgdC70YPQs9GDIHwg0K7RgC4g0LvQuNGG0L5cclxuICAgICAgICA8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXInPlxyXG4gICAgICAgIDxOYXYvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZyc+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcbiAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtX2hlYWRpbmdzJz5cclxuICAgICAgICAgIDxiPtCj0YHQu9GD0LPQuCDRjtGALiDQu9C40YbQsNC8PC9iPlxyXG4gICAgICAgICAgPGgyPtCf0L7Qu9GD0YfQuNGC0YxcclxuICAgICAgICAgICAgPGJyPjwvYnI+0YPRgdC70YPQs9GDOjwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm1fc2VydmljZSAnPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtX2hlYWRlcic+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiBoZWFkZXJDbGljayhcIjFcIil9IGNsYXNzTmFtZT17Y29va2llU3RlcCA9PT0gdW5kZWZpbmVkIHx8IHN0ZXA9PT0nMScgPyAnYWN0aXZlJyA6ICcnfT4xINCo0LDQszwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBvbkNMaWNrPXsoKT0+IGhlYWRlckNsaWNrKFwiMlwiKX0gY2xhc3NOYW1lPXtjb29raWVTdGVwID09PSAnMicgJiYgc3RlcD09PScyJyAmJiAnYWN0aXZlJ30+MiDQqNCw0LM8L2xpPlxyXG4gICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gaGVhZGVyQ2xpY2soXCIzXCIpfSBjbGFzc05hbWU9e2Nvb2tpZVN0ZXAgPT09ICczJyAmJiBzdGVwPT09JzMnICYmICdhY3RpdmUnfT4zINCo0LDQszwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybV9yZWdpc3RlclwiPlxyXG4gICAgICAgIHtjb29raWUuZ2V0KCdzdGVwanVyJykgPT09IHVuZGVmaW5lZCAmJiA8Rmlyc1NldFN0ZXAgc2V0TG9hZGluZz17c2V0TG9hZGluZ30vPn1cclxuICAgICAgICB7c3RlcD09PScyJyAmJiA8U2Vjb25kU3RlcCBzZXRMb2FkaW5nPXtzZXRMb2FkaW5nfS8+fVxyXG4gICAgICAgIHtzdGVwPT09JzMnICYmIDxUaGlyZFN0ZXAgc2V0TG9hZGluZz17c2V0TG9hZGluZ30vPn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7LyogPFNlY29uZFN0ZXAgLz4gKi99XHJcbiAgICAgICAgey8qIDxUaGlyZFN0ZXAgLz4gKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgXHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgR2V0U2VydmljZSJdLCJzb3VyY2VSb290IjoiIn0=