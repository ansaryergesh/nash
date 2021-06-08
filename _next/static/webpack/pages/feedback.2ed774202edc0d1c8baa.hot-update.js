self["webpackHotUpdate_N_E"]("pages/feedback",{

/***/ "./components/feedback/Feedback.js":
/*!*****************************************!*\
  !*** ./components/feedback/Feedback.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-input-mask */ "./node_modules/react-input-mask/index.js");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Masks_PhoneMask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Masks/PhoneMask */ "./components/Masks/PhoneMask.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "E:\\job\\nashcompany\\components\\feedback\\Feedback.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var FeedbackForm = function FeedbackForm() {
  _s();

  var _jsxDEV2;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    fio: '',
    phone: ''
  }),
      date = _useState[0],
      setDate = _useState[1];

  var _onChange = function onChange(e) {
    var name = e.target.name;
    setDate(_objectSpread(_objectSpread({}, date), {}, (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, name, e.target.value)));
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "form_register",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        name: "fio",
        type: "text",
        className: "capitalize",
        value: date.fio,
        onChange: function onChange(e) {
          return _onChange(e);
        },
        placeholder: "\u0412\u0430\u0448\u0435 \u0438\u043C\u044F"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_input_mask__WEBPACK_IMPORTED_MODULE_3___default()), {
        type: "tel",
        name: "phone",
        mask: "+7(999)-999-9999",
        maskChar: null,
        value: date.phone,
        onChange: function onChange(e) {
          return _onChange(e);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("textarea", {
        placeholder: "\u041E\u0442\u0437\u044B\u0432"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", (_jsxDEV2 = {
        className: "singlebtn",
        type: "submit"
      }, (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_jsxDEV2, "className", "button"), (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_jsxDEV2, "value", "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"), _jsxDEV2), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, _this);
};

_s(FeedbackForm, "GA993yXhY9I1lIWMcXq6DLyUN78=");

_c = FeedbackForm;
/* harmony default export */ __webpack_exports__["default"] = (FeedbackForm);

var _c;

$RefreshReg$(_c, "FeedbackForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mZWVkYmFjay9GZWVkYmFjay5qcyJdLCJuYW1lcyI6WyJGZWVkYmFja0Zvcm0iLCJ1c2VTdGF0ZSIsImZpbyIsInBob25lIiwiZGF0ZSIsInNldERhdGUiLCJvbkNoYW5nZSIsImUiLCJuYW1lIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0ZDLCtDQUFRLENBQUM7QUFBQ0MsT0FBRyxFQUFFLEVBQU47QUFBVUMsU0FBSyxFQUFFO0FBQWpCLEdBQUQsQ0FETjtBQUFBLE1BQ2xCQyxJQURrQjtBQUFBLE1BQ2JDLE9BRGE7O0FBR3pCLE1BQU1DLFNBQVEsR0FBQyxTQUFUQSxRQUFTLENBQUFDLENBQUMsRUFBRztBQUNqQixRQUFNQyxJQUFJLEdBQUdELENBQUMsQ0FBQ0UsTUFBRixDQUFTRCxJQUF0QjtBQUNBSCxXQUFPLGlDQUFLRCxJQUFMLDRIQUFZSSxJQUFaLEVBQW1CRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsS0FBNUIsR0FBUDtBQUNELEdBSEQ7O0FBSUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBLDJCQUNFO0FBQUEsOEJBQ0U7QUFBTyxZQUFJLEVBQUMsS0FBWjtBQUFrQixZQUFJLEVBQUMsTUFBdkI7QUFBOEIsaUJBQVMsRUFBQyxZQUF4QztBQUFxRCxhQUFLLEVBQUVOLElBQUksQ0FBQ0YsR0FBakU7QUFBc0UsZ0JBQVEsRUFBRSxrQkFBQUssQ0FBQztBQUFBLGlCQUFFRCxTQUFRLENBQUNDLENBQUQsQ0FBVjtBQUFBLFNBQWpGO0FBQWdHLG1CQUFXLEVBQUM7QUFBNUc7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUUsOERBQUMseURBQUQ7QUFBVyxZQUFJLEVBQUMsS0FBaEI7QUFBc0IsWUFBSSxFQUFDLE9BQTNCO0FBQW1DLFlBQUksRUFBQyxrQkFBeEM7QUFBMkQsZ0JBQVEsRUFBRSxJQUFyRTtBQUEyRSxhQUFLLEVBQUVILElBQUksQ0FBQ0QsS0FBdkY7QUFBOEYsZ0JBQVEsRUFBRSxrQkFBQ0ksQ0FBRDtBQUFBLGlCQUFPRCxTQUFRLENBQUNDLENBQUQsQ0FBZjtBQUFBO0FBQXhHO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQUdFO0FBQVUsbUJBQVcsRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEYsZUFJRTtBQUNFLGlCQUFTLEVBQUMsV0FEWjtBQUVFLFlBQUksRUFBQztBQUZQLGlKQUdZLFFBSFosdUlBSVEsd0RBSlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWNELENBckJEOztHQUFNUCxZOztLQUFBQSxZO0FBdUJOLCtEQUFlQSxZQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ZlZWRiYWNrLjJlZDc3NDIwMmVkYzBkMWM4YmFhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBJbnB1dE1hc2sgZnJvbSAncmVhY3QtaW5wdXQtbWFzaydcclxuaW1wb3J0IFBob25lTWFzayBmcm9tIFwiLi4vTWFza3MvUGhvbmVNYXNrXCI7XHJcblxyXG5jb25zdCBGZWVkYmFja0Zvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgW2RhdGUsc2V0RGF0ZV0gPSB1c2VTdGF0ZSh7ZmlvOiAnJywgcGhvbmU6ICcnfSlcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2U9ZT0+IHtcclxuICAgIGNvbnN0IG5hbWUgPSBlLnRhcmdldC5uYW1lO1xyXG4gICAgc2V0RGF0ZSh7Li4uZGF0ZSwgW25hbWVdOiBlLnRhcmdldC52YWx1ZX0pXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybV9yZWdpc3Rlcic+XHJcbiAgICAgIDxmb3JtPlxyXG4gICAgICAgIDxpbnB1dCBuYW1lPSdmaW8nIHR5cGU9J3RleHQnIGNsYXNzTmFtZT0nY2FwaXRhbGl6ZScgdmFsdWU9e2RhdGUuZmlvfSBvbkNoYW5nZT17ZT0+b25DaGFuZ2UoZSl9IHBsYWNlaG9sZGVyPSfQktCw0YjQtSDQuNC80Y8nPjwvaW5wdXQ+XHJcbiAgICAgICAgPElucHV0TWFzayB0eXBlPSd0ZWwnIG5hbWU9J3Bob25lJyBtYXNrPVwiKzcoOTk5KS05OTktOTk5OVwiIG1hc2tDaGFyPXtudWxsfSB2YWx1ZT17ZGF0ZS5waG9uZX0gb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZShlKX0gLz5cclxuICAgICAgICA8dGV4dGFyZWEgcGxhY2Vob2xkZXI9J9Ce0YLQt9GL0LInPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9J3NpbmdsZWJ0bidcclxuICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcclxuICAgICAgICAgIGNsYXNzTmFtZT0nYnV0dG9uJ1xyXG4gICAgICAgICAgdmFsdWU9J9Ce0YLQv9GA0LDQstC40YLRjCcvPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZlZWRiYWNrRm9ybSJdLCJzb3VyY2VSb290IjoiIn0=