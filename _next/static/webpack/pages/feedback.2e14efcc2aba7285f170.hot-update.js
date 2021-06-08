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
        lineNumber: 22,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_input_mask__WEBPACK_IMPORTED_MODULE_4___default()), {
        type: "tel",
        placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043B\u0435\u0444\u043E\u043D \u043D\u043E\u043C\u0435\u0440",
        name: "phone",
        mask: "+7(999)-999-9999",
        maskChar: null,
        value: date.phone,
        onChange: function onChange(e) {
          return _onChange(e);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
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
        lineNumber: 24,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", (_jsxDEV2 = {
        className: "singlebtn",
        type: "submit"
      }, (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_jsxDEV2, "className", "button"), (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_jsxDEV2, "value", "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"), _jsxDEV2), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, _this);
};

_s(FeedbackForm, "CzdLCkLv9WpvWnX+L5LReumFWZc=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mZWVkYmFjay9GZWVkYmFjay5qcyJdLCJuYW1lcyI6WyJGZWVkYmFja0Zvcm0iLCJ1c2VTdGF0ZSIsImZpbyIsInBob25lIiwiY29tbWVudCIsImlpbiIsImRhdGUiLCJzZXREYXRlIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJheGlvcyIsInByb2Nlc3MiLCJwYXJhbXMiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsIm9uQ2hhbmdlIiwibmFtZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFBQTs7QUFBQTs7QUFBQSxrQkFDRkMsK0NBQVEsQ0FBQztBQUFDQyxPQUFHLEVBQUUsRUFBTjtBQUFVQyxTQUFLLEVBQUUsRUFBakI7QUFBcUJDLFdBQU8sRUFBRSxFQUE5QjtBQUFrQ0MsT0FBRyxFQUFFO0FBQXZDLEdBQUQsQ0FETjtBQUFBLE1BQ2xCQyxJQURrQjtBQUFBLE1BQ2JDLE9BRGE7O0FBRXpCLE1BQU1DLFNBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLENBQUQsRUFBTztBQUN0QkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FDLG9EQUFBLFdBQWFDLHlCQUFiLG1CQUFpRDtBQUFDQyxZQUFNLEVBQUVQO0FBQVQsS0FBakQsRUFDR1EsSUFESCxDQUNRLFVBQUFDLEdBQUcsRUFBRztBQUNWQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNELEtBSEg7QUFJRCxHQU5EOztBQU9BLE1BQU1HLFNBQVEsR0FBQyxTQUFUQSxRQUFTLENBQUFULENBQUMsRUFBRztBQUNqQixRQUFNVSxJQUFJLEdBQUdWLENBQUMsQ0FBQ1csTUFBRixDQUFTRCxJQUF0QjtBQUNBWixXQUFPLGlDQUFLRCxJQUFMLDRIQUFZYSxJQUFaLEVBQW1CVixDQUFDLENBQUNXLE1BQUYsQ0FBU0MsS0FBNUIsR0FBUDtBQUNELEdBSEQ7O0FBSUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBLDJCQUNFO0FBQU0sY0FBUSxFQUFFLGtCQUFDWixDQUFEO0FBQUEsZUFBT0QsU0FBUSxDQUFDQyxDQUFELENBQWY7QUFBQSxPQUFoQjtBQUFBLDhCQUNFO0FBQU8sWUFBSSxFQUFDLEtBQVo7QUFBa0IsWUFBSSxFQUFDLE1BQXZCO0FBQThCLGlCQUFTLEVBQUMsWUFBeEM7QUFBcUQsYUFBSyxFQUFFSCxJQUFJLENBQUNKLEdBQWpFO0FBQXNFLGdCQUFRLEVBQUUsa0JBQUFPLENBQUM7QUFBQSxpQkFBRVMsU0FBUSxDQUFDVCxDQUFELENBQVY7QUFBQSxTQUFqRjtBQUFnRyxtQkFBVyxFQUFDO0FBQTVHO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLDhEQUFDLHlEQUFEO0FBQVcsWUFBSSxFQUFDLEtBQWhCO0FBQXNCLG1CQUFXLEVBQUMsc0hBQWxDO0FBQTBELFlBQUksRUFBQyxPQUEvRDtBQUF1RSxZQUFJLEVBQUMsa0JBQTVFO0FBQStGLGdCQUFRLEVBQUUsSUFBekc7QUFBK0csYUFBSyxFQUFFSCxJQUFJLENBQUNILEtBQTNIO0FBQWtJLGdCQUFRLEVBQUUsa0JBQUNNLENBQUQ7QUFBQSxpQkFBT1MsU0FBUSxDQUFDVCxDQUFELENBQWY7QUFBQTtBQUE1STtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFHRTtBQUFVLG1CQUFXLEVBQUMsZ0NBQXRCO0FBQThCLFlBQUksRUFBQyxTQUFuQztBQUE2QyxnQkFBUSxFQUFFLGtCQUFBQSxDQUFDO0FBQUEsaUJBQUVTLFNBQVEsQ0FBQ1QsQ0FBRCxDQUFWO0FBQUEsU0FBeEQ7QUFBdUUsYUFBSyxFQUFFSCxJQUFJLENBQUNGO0FBQW5GO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRixlQUlFO0FBQ0UsaUJBQVMsRUFBQyxXQURaO0FBRUUsWUFBSSxFQUFDO0FBRlAsaUpBR1ksUUFIWix1SUFJUSx3REFKUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBY0QsQ0EzQkQ7O0dBQU1KLFk7O0tBQUFBLFk7QUE2Qk4sK0RBQWVBLFlBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZmVlZGJhY2suMmUxNGVmY2MyYWJhNzI4NWYxNzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgSW5wdXRNYXNrIGZyb20gJ3JlYWN0LWlucHV0LW1hc2snXHJcbmltcG9ydCBQaG9uZU1hc2sgZnJvbSBcIi4uL01hc2tzL1Bob25lTWFza1wiO1xyXG5cclxuY29uc3QgRmVlZGJhY2tGb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtkYXRlLHNldERhdGVdID0gdXNlU3RhdGUoe2ZpbzogJycsIHBob25lOiAnJywgY29tbWVudDogJycsIGlpbjogJzAwMDAwMDAwMDAwMCd9KVxyXG4gIGNvbnN0IG9uU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9hZGRGZWVkYmFja2AsIHtwYXJhbXM6IGRhdGV9KVxyXG4gICAgICAudGhlbihyZXM9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICB9KVxyXG4gIH1cclxuICBjb25zdCBvbkNoYW5nZT1lPT4ge1xyXG4gICAgY29uc3QgbmFtZSA9IGUudGFyZ2V0Lm5hbWU7XHJcbiAgICBzZXREYXRlKHsuLi5kYXRlLCBbbmFtZV06IGUudGFyZ2V0LnZhbHVlfSlcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtX3JlZ2lzdGVyJz5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKSA9PiBvblN1Ym1pdChlKX0+XHJcbiAgICAgICAgPGlucHV0IG5hbWU9J2ZpbycgdHlwZT0ndGV4dCcgY2xhc3NOYW1lPSdjYXBpdGFsaXplJyB2YWx1ZT17ZGF0ZS5maW99IG9uQ2hhbmdlPXtlPT5vbkNoYW5nZShlKX0gcGxhY2Vob2xkZXI9J9CS0LDRiNC1INC40LzRjyc+PC9pbnB1dD5cclxuICAgICAgICA8SW5wdXRNYXNrIHR5cGU9J3RlbCcgcGxhY2Vob2xkZXI9J9CS0LLQtdC00LjRgtC1INGC0LXQu9C10YTQvtC9INC90L7QvNC10YAnIG5hbWU9J3Bob25lJyBtYXNrPVwiKzcoOTk5KS05OTktOTk5OVwiIG1hc2tDaGFyPXtudWxsfSB2YWx1ZT17ZGF0ZS5waG9uZX0gb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZShlKX0gLz5cclxuICAgICAgICA8dGV4dGFyZWEgcGxhY2Vob2xkZXI9J9Ce0YLQt9GL0LInIG5hbWU9J2NvbW1lbnQnIG9uQ2hhbmdlPXtlPT5vbkNoYW5nZShlKX0gdmFsdWU9e2RhdGUuY29tbWVudH0+PC90ZXh0YXJlYT5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGNsYXNzTmFtZT0nc2luZ2xlYnRuJ1xyXG4gICAgICAgICAgdHlwZT0nc3VibWl0J1xyXG4gICAgICAgICAgY2xhc3NOYW1lPSdidXR0b24nXHJcbiAgICAgICAgICB2YWx1ZT0n0J7RgtC/0YDQsNCy0LjRgtGMJy8+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmVlZGJhY2tGb3JtIl0sInNvdXJjZVJvb3QiOiIifQ==