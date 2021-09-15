self["webpackHotUpdate_N_E"]("pages/dlya-fizicheskix-lic",{

/***/ "./components/getservice/SecondStep.js":
/*!*********************************************!*\
  !*** ./components/getservice/SecondStep.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defaults_fizservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../defaults/fizservice */ "./defaults/fizservice.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var _defaults_listMfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../defaults/listMfo */ "./defaults/listMfo.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "E:\\job\\nashcompany\\components\\getservice\\SecondStep.js",
    _this = undefined,
    _s = $RefreshSig$();







 // import 'react-select/dist/react-select.css';

var SecondStep = function SecondStep(_ref) {
  _s();

  var _jsxDEV2;

  var setLoading = _ref.setLoading;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
  var pathname = router.pathname; // const {id} = router.query

  var step = router.query.step;
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {}, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "form_register",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("form", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "mfo_list",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
          children: "\u041A\u043E\u043C\u0443 \u0434\u043E\u043B\u0436\u0435\u043D:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_select__WEBPACK_IMPORTED_MODULE_8__.default, {
          isMulti: true,
          name: "mfo",
          options: _defaults_listMfo__WEBPACK_IMPORTED_MODULE_7__.listMfo,
          className: "basic-multi-select",
          classNamePrefix: "select",
          placeholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043E\u0434\u0438\u043D \u0438\u043B\u0438 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u041C\u0424\u041E"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
          children: "\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u0434\u043E\u043B\u0436\u0435\u043D:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
          type: "number",
          placeholder: "\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0441\u0443\u043C\u043C\u0443"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "firststep_banner--button",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", (_jsxDEV2 = {
            className: "singlebtn",
            type: "submit"
          }, (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_jsxDEV2, "className", "button"), (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_jsxDEV2, "value", "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"), _jsxDEV2), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 19
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, _this);
};

_s(SecondStep, "vQduR7x+OPXj6PSmJyFnf+hU7bg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter];
});

_c = SecondStep;
/* harmony default export */ __webpack_exports__["default"] = (SecondStep);

var _c;

$RefreshReg$(_c, "SecondStep");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRzZXJ2aWNlL1NlY29uZFN0ZXAuanMiXSwibmFtZXMiOlsiU2Vjb25kU3RlcCIsInNldExvYWRpbmciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwYXRobmFtZSIsInN0ZXAiLCJxdWVyeSIsInVzZUVmZmVjdCIsImxpc3RNZm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBQ0EsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBa0I7QUFBQTs7QUFBQTs7QUFBQSxNQUFoQkMsVUFBZ0IsUUFBaEJBLFVBQWdCO0FBQ25DLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFDQSxNQUFNQyxRQUFRLEdBQUdGLE1BQU0sQ0FBQ0UsUUFBeEIsQ0FGbUMsQ0FHbkM7O0FBSG1DLE1BSTVCQyxJQUo0QixHQUlwQkgsTUFBTSxDQUFDSSxLQUphLENBSTVCRCxJQUo0QjtBQU9uQ0Usa0RBQVMsQ0FBQyxZQUFNLENBR2YsQ0FIUSxFQUdOLEVBSE0sQ0FBVDtBQUtBLHNCQUNFO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQSwyQkFDRTtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxVQUFmO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFSSw4REFBQyxpREFBRDtBQUNFLGlCQUFPLE1BRFQ7QUFFRSxjQUFJLEVBQUMsS0FGUDtBQUdFLGlCQUFPLEVBQUVDLHNEQUhYO0FBSUUsbUJBQVMsRUFBQyxvQkFKWjtBQUtFLHlCQUFlLEVBQUMsUUFMbEI7QUFNRSxxQkFBVyxFQUFDO0FBTmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSixlQVVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVkosZUFXRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFYRixlQVlFO0FBQU8sY0FBSSxFQUFDLFFBQVo7QUFBcUIscUJBQVcsRUFBQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVpGLGVBYUU7QUFBSyxtQkFBUyxFQUFDLDBCQUFmO0FBQUEsaUNBQ1E7QUFDRSxxQkFBUyxFQUFDLFdBRFo7QUFFRSxnQkFBSSxFQUFDO0FBRlAscUpBR1ksUUFIWix1SUFJUSx3REFKUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMkJELENBdkNEOztHQUFNUixVO1VBQ1dHLGtEOzs7S0FEWEgsVTtBQXlDTiwrREFBZUEsVUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kbHlhLWZpemljaGVza2l4LWxpYy41Nzc4ZWNhNTc3YjdkNjE3ZjkzOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHtmaXpzZXJ2aWNlLCBqdXJzZXJ2aWNlfSBmcm9tIFwiLi4vLi4vZGVmYXVsdHMvZml6c2VydmljZVwiXHJcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IFJvdXRlciwge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuaW1wb3J0IFNlbGVjdCBmcm9tICdyZWFjdC1zZWxlY3QnO1xyXG5pbXBvcnQgeyBsaXN0TWZvIH0gZnJvbSBcIi4uLy4uL2RlZmF1bHRzL2xpc3RNZm9cIlxyXG4vLyBpbXBvcnQgJ3JlYWN0LXNlbGVjdC9kaXN0L3JlYWN0LXNlbGVjdC5jc3MnO1xyXG5jb25zdCBTZWNvbmRTdGVwID0gKHtzZXRMb2FkaW5nfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgcGF0aG5hbWUgPSByb3V0ZXIucGF0aG5hbWVcclxuICAvLyBjb25zdCB7aWR9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgY29uc3Qge3N0ZXB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIFxyXG4gIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG5cclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtX3JlZ2lzdGVyJz5cclxuICAgICAgPGZvcm0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21mb19saXN0Jz5cclxuICAgICAgICAgIDxzcGFuPtCa0L7QvNGDINC00L7Qu9C20LXQvTo8L3NwYW4+XHJcbiAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICBpc011bHRpXHJcbiAgICAgICAgICAgICAgbmFtZT1cIm1mb1wiXHJcbiAgICAgICAgICAgICAgb3B0aW9ucz17bGlzdE1mb31cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiYXNpYy1tdWx0aS1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZVByZWZpeD1cInNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQktGL0LHQtdGA0LjRgtC1INC+0LTQuNC9INC40LvQuCDQvdC10YHQutC+0LvRjNC60L4g0JzQpNCeXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIDxzcGFuPtCh0LrQvtC70YzQutC+INC00L7Qu9C20LXQvTo8L3NwYW4+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwi0J3QsNC/0LjRiNC40YLQtSDRgdGD0LzQvNGDXCI+PC9pbnB1dD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaXJzdHN0ZXBfYmFubmVyLS1idXR0b24nPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NpbmdsZWJ0bidcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPSdzdWJtaXQnXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdidXR0b24nXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9J9Ce0YLQv9GA0LDQstC40YLRjCcvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2Vjb25kU3RlcCJdLCJzb3VyY2VSb290IjoiIn0=