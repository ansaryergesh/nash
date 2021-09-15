self["webpackHotUpdate_N_E"]("pages/dlya-fizicheskix-lic",{

/***/ "./components/getservice/SecondStep.js":
/*!*********************************************!*\
  !*** ./components/getservice/SecondStep.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _defaults_fizservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../defaults/fizservice */ "./defaults/fizservice.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var _defaults_listMfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../defaults/listMfo */ "./defaults/listMfo.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\job\\nashcompany\\components\\getservice\\SecondStep.js",
    _this = undefined,
    _s = $RefreshSig$();







 // import 'react-select/dist/react-select.css';

var SecondStep = function SecondStep(_ref) {
  _s();

  var setLoading = _ref.setLoading;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  var pathname = router.pathname; // const {id} = router.query

  var step = router.query.step;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {}, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "form_register",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "mfo_list",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: "\u041A\u043E\u043C\u0443 \u0434\u043E\u043B\u0436\u0435\u043D:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_select__WEBPACK_IMPORTED_MODULE_7__.default, {
          isMulti: true,
          name: "mfo",
          options: _defaults_listMfo__WEBPACK_IMPORTED_MODULE_6__.listMfo,
          className: "basic-multi-select",
          classNamePrefix: "select",
          placeholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043E\u0434\u0438\u043D \u0438\u043B\u0438 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u041C\u0424\u041E"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: "\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u0434\u043E\u043B\u0436\u0435\u043D:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "number",
          placeholder: "\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0441\u0443\u043C\u043C\u0443"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
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
  return [next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRzZXJ2aWNlL1NlY29uZFN0ZXAuanMiXSwibmFtZXMiOlsiU2Vjb25kU3RlcCIsInNldExvYWRpbmciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwYXRobmFtZSIsInN0ZXAiLCJxdWVyeSIsInVzZUVmZmVjdCIsImxpc3RNZm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUNBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQWtCO0FBQUE7O0FBQUEsTUFBaEJDLFVBQWdCLFFBQWhCQSxVQUFnQjtBQUNuQyxNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHRixNQUFNLENBQUNFLFFBQXhCLENBRm1DLENBR25DOztBQUhtQyxNQUk1QkMsSUFKNEIsR0FJcEJILE1BQU0sQ0FBQ0ksS0FKYSxDQUk1QkQsSUFKNEI7QUFPbkNFLGtEQUFTLENBQUMsWUFBTSxDQUdmLENBSFEsRUFHTixFQUhNLENBQVQ7QUFLQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUEsMkJBQ0U7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsVUFBZjtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUksOERBQUMsaURBQUQ7QUFDRSxpQkFBTyxNQURUO0FBRUUsY0FBSSxFQUFDLEtBRlA7QUFHRSxpQkFBTyxFQUFFQyxzREFIWDtBQUlFLG1CQUFTLEVBQUMsb0JBSlo7QUFLRSx5QkFBZSxFQUFDLFFBTGxCO0FBTUUscUJBQVcsRUFBQztBQU5kO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosZUFVRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFWRixlQVdFO0FBQU8sY0FBSSxFQUFDLFFBQVo7QUFBcUIscUJBQVcsRUFBQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFtQkQsQ0EvQkQ7O0dBQU1SLFU7VUFDV0csa0Q7OztLQURYSCxVO0FBaUNOLCtEQUFlQSxVQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RseWEtZml6aWNoZXNraXgtbGljLjRjYjlhMDNlYmU4ZTM5NjI3OTczLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQge2ZpenNlcnZpY2UsIGp1cnNlcnZpY2V9IGZyb20gXCIuLi8uLi9kZWZhdWx0cy9maXpzZXJ2aWNlXCJcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgUm91dGVyLCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQgU2VsZWN0IGZyb20gJ3JlYWN0LXNlbGVjdCc7XHJcbmltcG9ydCB7IGxpc3RNZm8gfSBmcm9tIFwiLi4vLi4vZGVmYXVsdHMvbGlzdE1mb1wiXHJcbi8vIGltcG9ydCAncmVhY3Qtc2VsZWN0L2Rpc3QvcmVhY3Qtc2VsZWN0LmNzcyc7XHJcbmNvbnN0IFNlY29uZFN0ZXAgPSAoe3NldExvYWRpbmd9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBwYXRobmFtZSA9IHJvdXRlci5wYXRobmFtZVxyXG4gIC8vIGNvbnN0IHtpZH0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCB7c3RlcH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgXHJcbiAgXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcblxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2Zvcm1fcmVnaXN0ZXInPlxyXG4gICAgICA8Zm9ybT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWZvX2xpc3QnPlxyXG4gICAgICAgICAgPHNwYW4+0JrQvtC80YMg0LTQvtC70LbQtdC9Ojwvc3Bhbj5cclxuICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgIGlzTXVsdGlcclxuICAgICAgICAgICAgICBuYW1lPVwibWZvXCJcclxuICAgICAgICAgICAgICBvcHRpb25zPXtsaXN0TWZvfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJhc2ljLW11bHRpLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lUHJlZml4PVwic2VsZWN0XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCS0YvQsdC10YDQuNGC0LUg0L7QtNC40L0g0LjQu9C4INC90LXRgdC60L7Qu9GM0LrQviDQnNCk0J5cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPHNwYW4+0KHQutC+0LvRjNC60L4g0LTQvtC70LbQtdC9Ojwvc3Bhbj5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCLQndCw0L/QuNGI0LjRgtC1INGB0YPQvNC80YNcIj48L2lucHV0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlY29uZFN0ZXAiXSwic291cmNlUm9vdCI6IiJ9