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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-input-mask */ "./node_modules/react-input-mask/index.js");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Masks_PhoneMask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Masks/PhoneMask */ "./components/Masks/PhoneMask.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "E:\\job\\nashcompany\\components\\feedback\\Feedback.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var FeedbackForm = function FeedbackForm() {
  _s();

  var _jsxDEV2;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
    fio: '',
    phone: '',
    comment: '',
    iin: '000000000000'
  }),
      date = _useState[0],
      setDate = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      error = _useState2[0],
      setError = _useState2[1];

  var _onSubmit = function onSubmit(e) {
    e.preventDefault();
    axios__WEBPACK_IMPORTED_MODULE_2___default().get("".concat("https://crediter.kz/api", "/addFeedback"), {
      params: date
    }).then(function (res) {
      console.log(res);
    });
  };

  var _onChange = function onChange(e) {
    var name = e.target.name;
    setDate(_objectSpread(_objectSpread({}, date), {}, (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, name, e.target.value)));
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "form_register",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      onSubmit: function onSubmit(e) {
        return _onSubmit(e);
      },
      children: [error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "text-danger",
        children: error
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 19
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
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
        lineNumber: 24,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_input_mask__WEBPACK_IMPORTED_MODULE_4___default()), {
        type: "tel",
        placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043B\u0435\u0444\u043E\u043D \u043D\u043E\u043C\u0435\u0440",
        name: "iin",
        mask: "999999999999",
        maskChar: null,
        value: date.phone,
        onChange: function onChange(e) {
          return _onChange(e);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_input_mask__WEBPACK_IMPORTED_MODULE_4___default()), {
        type: "tel",
        placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0418\u0418\u041D",
        name: "phone",
        mask: "+7(999)-999-9999",
        maskChar: null,
        value: date.phone,
        onChange: function onChange(e) {
          return _onChange(e);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("textarea", {
        placeholder: "\u041E\u0442\u0437\u044B\u0432",
        name: "comment",
        onChange: function onChange(e) {
          return _onChange(e);
        },
        value: date.comment
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", (_jsxDEV2 = {
        className: "singlebtn",
        type: "submit"
      }, (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_jsxDEV2, "className", "button"), (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_jsxDEV2, "value", "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"), _jsxDEV2), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, _this);
};

_s(FeedbackForm, "8ZiwK+Q8Z90gaxiiDQhsnsmXwis=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mZWVkYmFjay9GZWVkYmFjay5qcyJdLCJuYW1lcyI6WyJGZWVkYmFja0Zvcm0iLCJ1c2VTdGF0ZSIsImZpbyIsInBob25lIiwiY29tbWVudCIsImlpbiIsImRhdGUiLCJzZXREYXRlIiwiZXJyb3IiLCJzZXRFcnJvciIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiYXhpb3MiLCJwcm9jZXNzIiwicGFyYW1zIiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJvbkNoYW5nZSIsIm5hbWUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0ZDLCtDQUFRLENBQUM7QUFBQ0MsT0FBRyxFQUFFLEVBQU47QUFBVUMsU0FBSyxFQUFFLEVBQWpCO0FBQXFCQyxXQUFPLEVBQUUsRUFBOUI7QUFBa0NDLE9BQUcsRUFBRTtBQUF2QyxHQUFELENBRE47QUFBQSxNQUNsQkMsSUFEa0I7QUFBQSxNQUNiQyxPQURhOztBQUFBLG1CQUVBTiwrQ0FBUSxDQUFDLEVBQUQsQ0FGUjtBQUFBLE1BRWxCTyxLQUZrQjtBQUFBLE1BRVpDLFFBRlk7O0FBR3pCLE1BQU1DLFNBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLENBQUQsRUFBTztBQUN0QkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FDLG9EQUFBLFdBQWFDLHlCQUFiLG1CQUFpRDtBQUFDQyxZQUFNLEVBQUVUO0FBQVQsS0FBakQsRUFDR1UsSUFESCxDQUNRLFVBQUFDLEdBQUcsRUFBRztBQUNWQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNELEtBSEg7QUFJRCxHQU5EOztBQU9BLE1BQU1HLFNBQVEsR0FBQyxTQUFUQSxRQUFTLENBQUFULENBQUMsRUFBRztBQUNqQixRQUFNVSxJQUFJLEdBQUdWLENBQUMsQ0FBQ1csTUFBRixDQUFTRCxJQUF0QjtBQUNBZCxXQUFPLGlDQUFLRCxJQUFMLDRIQUFZZSxJQUFaLEVBQW1CVixDQUFDLENBQUNXLE1BQUYsQ0FBU0MsS0FBNUIsR0FBUDtBQUNELEdBSEQ7O0FBSUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBLDJCQUNFO0FBQU0sY0FBUSxFQUFFLGtCQUFDWixDQUFEO0FBQUEsZUFBT0QsU0FBUSxDQUFDQyxDQUFELENBQWY7QUFBQSxPQUFoQjtBQUFBLGlCQUNHSCxLQUFLLGlCQUFJO0FBQUssaUJBQVMsRUFBQyxhQUFmO0FBQUEsa0JBQThCQTtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFosZUFFRTtBQUFPLFlBQUksRUFBQyxLQUFaO0FBQWtCLFlBQUksRUFBQyxNQUF2QjtBQUE4QixpQkFBUyxFQUFDLFlBQXhDO0FBQXFELGFBQUssRUFBRUYsSUFBSSxDQUFDSixHQUFqRTtBQUFzRSxnQkFBUSxFQUFFLGtCQUFBUyxDQUFDO0FBQUEsaUJBQUVTLFNBQVEsQ0FBQ1QsQ0FBRCxDQUFWO0FBQUEsU0FBakY7QUFBZ0csbUJBQVcsRUFBQztBQUE1RztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFHRSw4REFBQyx5REFBRDtBQUFXLFlBQUksRUFBQyxLQUFoQjtBQUFzQixtQkFBVyxFQUFDLHNIQUFsQztBQUEwRCxZQUFJLEVBQUMsS0FBL0Q7QUFBcUUsWUFBSSxFQUFDLGNBQTFFO0FBQXlGLGdCQUFRLEVBQUUsSUFBbkc7QUFBeUcsYUFBSyxFQUFFTCxJQUFJLENBQUNILEtBQXJIO0FBQTRILGdCQUFRLEVBQUUsa0JBQUNRLENBQUQ7QUFBQSxpQkFBT1MsU0FBUSxDQUFDVCxDQUFELENBQWY7QUFBQTtBQUF0STtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEYsZUFJRSw4REFBQyx5REFBRDtBQUFXLFlBQUksRUFBQyxLQUFoQjtBQUFzQixtQkFBVyxFQUFDLCtEQUFsQztBQUFnRCxZQUFJLEVBQUMsT0FBckQ7QUFBNkQsWUFBSSxFQUFDLGtCQUFsRTtBQUFxRixnQkFBUSxFQUFFLElBQS9GO0FBQXFHLGFBQUssRUFBRUwsSUFBSSxDQUFDSCxLQUFqSDtBQUF3SCxnQkFBUSxFQUFFLGtCQUFDUSxDQUFEO0FBQUEsaUJBQU9TLFNBQVEsQ0FBQ1QsQ0FBRCxDQUFmO0FBQUE7QUFBbEk7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGLGVBS0U7QUFBVSxtQkFBVyxFQUFDLGdDQUF0QjtBQUE4QixZQUFJLEVBQUMsU0FBbkM7QUFBNkMsZ0JBQVEsRUFBRSxrQkFBQUEsQ0FBQztBQUFBLGlCQUFFUyxTQUFRLENBQUNULENBQUQsQ0FBVjtBQUFBLFNBQXhEO0FBQXVFLGFBQUssRUFBRUwsSUFBSSxDQUFDRjtBQUFuRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEYsZUFNRTtBQUNFLGlCQUFTLEVBQUMsV0FEWjtBQUVFLFlBQUksRUFBQztBQUZQLGlKQUdZLFFBSFosdUlBSVEsd0RBSlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWdCRCxDQTlCRDs7R0FBTUosWTs7S0FBQUEsWTtBQWdDTiwrREFBZUEsWUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9mZWVkYmFjay5hYzM0N2E4YmE4ZjA4MTBjNThlNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBJbnB1dE1hc2sgZnJvbSAncmVhY3QtaW5wdXQtbWFzaydcclxuaW1wb3J0IFBob25lTWFzayBmcm9tIFwiLi4vTWFza3MvUGhvbmVNYXNrXCI7XHJcblxyXG5jb25zdCBGZWVkYmFja0Zvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgW2RhdGUsc2V0RGF0ZV0gPSB1c2VTdGF0ZSh7ZmlvOiAnJywgcGhvbmU6ICcnLCBjb21tZW50OiAnJywgaWluOiAnMDAwMDAwMDAwMDAwJ30pXHJcbiAgY29uc3QgW2Vycm9yLHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IG9uU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9hZGRGZWVkYmFja2AsIHtwYXJhbXM6IGRhdGV9KVxyXG4gICAgICAudGhlbihyZXM9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICB9KVxyXG4gIH1cclxuICBjb25zdCBvbkNoYW5nZT1lPT4ge1xyXG4gICAgY29uc3QgbmFtZSA9IGUudGFyZ2V0Lm5hbWU7XHJcbiAgICBzZXREYXRlKHsuLi5kYXRlLCBbbmFtZV06IGUudGFyZ2V0LnZhbHVlfSlcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtX3JlZ2lzdGVyJz5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKSA9PiBvblN1Ym1pdChlKX0+XHJcbiAgICAgICAge2Vycm9yICYmIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+e2Vycm9yfTwvZGl2Pn1cclxuICAgICAgICA8aW5wdXQgbmFtZT0nZmlvJyB0eXBlPSd0ZXh0JyBjbGFzc05hbWU9J2NhcGl0YWxpemUnIHZhbHVlPXtkYXRlLmZpb30gb25DaGFuZ2U9e2U9Pm9uQ2hhbmdlKGUpfSBwbGFjZWhvbGRlcj0n0JLQsNGI0LUg0LjQvNGPJz48L2lucHV0PlxyXG4gICAgICAgIDxJbnB1dE1hc2sgdHlwZT0ndGVsJyBwbGFjZWhvbGRlcj0n0JLQstC10LTQuNGC0LUg0YLQtdC70LXRhNC+0L0g0L3QvtC80LXRgCcgbmFtZT0naWluJyBtYXNrPVwiOTk5OTk5OTk5OTk5XCIgbWFza0NoYXI9e251bGx9IHZhbHVlPXtkYXRlLnBob25lfSBvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlKGUpfSAvPlxyXG4gICAgICAgIDxJbnB1dE1hc2sgdHlwZT0ndGVsJyBwbGFjZWhvbGRlcj0n0JLQstC10LTQuNGC0LUg0JjQmNCdJyBuYW1lPSdwaG9uZScgbWFzaz1cIis3KDk5OSktOTk5LTk5OTlcIiBtYXNrQ2hhcj17bnVsbH0gdmFsdWU9e2RhdGUucGhvbmV9IG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2UoZSl9IC8+XHJcbiAgICAgICAgPHRleHRhcmVhIHBsYWNlaG9sZGVyPSfQntGC0LfRi9CyJyBuYW1lPSdjb21tZW50JyBvbkNoYW5nZT17ZT0+b25DaGFuZ2UoZSl9IHZhbHVlPXtkYXRlLmNvbW1lbnR9PjwvdGV4dGFyZWE+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9J3NpbmdsZWJ0bidcclxuICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcclxuICAgICAgICAgIGNsYXNzTmFtZT0nYnV0dG9uJ1xyXG4gICAgICAgICAgdmFsdWU9J9Ce0YLQv9GA0LDQstC40YLRjCcvPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZlZWRiYWNrRm9ybSJdLCJzb3VyY2VSb290IjoiIn0=