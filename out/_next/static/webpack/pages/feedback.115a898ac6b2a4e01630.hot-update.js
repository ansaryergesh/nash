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
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Masks_PhoneMask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Masks/PhoneMask */ "./components/Masks/PhoneMask.js");
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

      if (res.data.success) {
        sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Спасибо за ваш отзыв", "\u0412\u0430\u0448 \u043E\u0442\u0437\u044B\u0432 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D", "success").then(function () {
          Router.push('/');
        });
      } else {
        setError(res.data.message);
      }
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
        className: "alert-error text-danger",
        children: error
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
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
        lineNumber: 31,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_input_mask__WEBPACK_IMPORTED_MODULE_4___default()), {
        type: "tel",
        placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0418\u0418\u041D",
        name: "iin",
        mask: "999999999999",
        maskChar: null,
        value: date.iin,
        onChange: function onChange(e) {
          return _onChange(e);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
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
        lineNumber: 33,
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
        lineNumber: 34,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", (_jsxDEV2 = {
        className: "singlebtn",
        type: "submit"
      }, (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_jsxDEV2, "className", "button"), (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_jsxDEV2, "value", "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"), _jsxDEV2), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mZWVkYmFjay9GZWVkYmFjay5qcyJdLCJuYW1lcyI6WyJGZWVkYmFja0Zvcm0iLCJ1c2VTdGF0ZSIsImZpbyIsInBob25lIiwiY29tbWVudCIsImlpbiIsImRhdGUiLCJzZXREYXRlIiwiZXJyb3IiLCJzZXRFcnJvciIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiYXhpb3MiLCJwcm9jZXNzIiwicGFyYW1zIiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwic3VjY2VzcyIsInN3YWwiLCJSb3V0ZXIiLCJwdXNoIiwibWVzc2FnZSIsIm9uQ2hhbmdlIiwibmFtZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0ZDLCtDQUFRLENBQUM7QUFBQ0MsT0FBRyxFQUFFLEVBQU47QUFBVUMsU0FBSyxFQUFFLEVBQWpCO0FBQXFCQyxXQUFPLEVBQUUsRUFBOUI7QUFBa0NDLE9BQUcsRUFBRTtBQUF2QyxHQUFELENBRE47QUFBQSxNQUNsQkMsSUFEa0I7QUFBQSxNQUNiQyxPQURhOztBQUFBLG1CQUVBTiwrQ0FBUSxDQUFDLEVBQUQsQ0FGUjtBQUFBLE1BRWxCTyxLQUZrQjtBQUFBLE1BRVpDLFFBRlk7O0FBR3pCLE1BQU1DLFNBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLENBQUQsRUFBTztBQUN0QkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FDLG9EQUFBLFdBQWFDLHlCQUFiLG1CQUFpRDtBQUFDQyxZQUFNLEVBQUVUO0FBQVQsS0FBakQsRUFDR1UsSUFESCxDQUNRLFVBQUFDLEdBQUcsRUFBRztBQUNWQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjs7QUFDQSxV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LjExNWE4OThhYzZiMmE0ZTAxNjMwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IElucHV0TWFzayBmcm9tICdyZWFjdC1pbnB1dC1tYXNrJ1xyXG5pbXBvcnQgc3dhbCBmcm9tIFwic3dlZXRhbGVydFwiO1xyXG5pbXBvcnQgUGhvbmVNYXNrIGZyb20gXCIuLi9NYXNrcy9QaG9uZU1hc2tcIjtcclxuXHJcbmNvbnN0IEZlZWRiYWNrRm9ybSA9ICgpID0+IHtcclxuICBjb25zdCBbZGF0ZSxzZXREYXRlXSA9IHVzZVN0YXRlKHtmaW86ICcnLCBwaG9uZTogJycsIGNvbW1lbnQ6ICcnLCBpaW46ICcwMDAwMDAwMDAwMDAnfSlcclxuICBjb25zdCBbZXJyb3Isc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3Qgb25TdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L2FkZEZlZWRiYWNrYCwge3BhcmFtczogZGF0ZX0pXHJcbiAgICAgIC50aGVuKHJlcz0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgaWYocmVzLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgc3dhbChcItCh0L/QsNGB0LjQsdC+INC30LAg0LLQsNGIINC+0YLQt9GL0LJcIiwgYNCS0LDRiCDQvtGC0LfRi9CyINGD0YHQv9C10YjQvdC+INC+0YLQv9GA0LDQstC70LXQvWAsIFwic3VjY2Vzc1wiKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goJy8nKX0pXHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgc2V0RXJyb3IocmVzLmRhdGEubWVzc2FnZSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgfVxyXG4gIGNvbnN0IG9uQ2hhbmdlPWU9PiB7XHJcbiAgICBjb25zdCBuYW1lID0gZS50YXJnZXQubmFtZTtcclxuICAgIHNldERhdGUoey4uLmRhdGUsIFtuYW1lXTogZS50YXJnZXQudmFsdWV9KVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2Zvcm1fcmVnaXN0ZXInPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpID0+IG9uU3VibWl0KGUpfT5cclxuICAgICAgICB7ZXJyb3IgJiYgPGRpdiBjbGFzc05hbWU9J2FsZXJ0LWVycm9yIHRleHQtZGFuZ2VyJz57ZXJyb3J9PC9kaXY+fVxyXG4gICAgICAgIDxpbnB1dCBuYW1lPSdmaW8nIHR5cGU9J3RleHQnIGNsYXNzTmFtZT0nY2FwaXRhbGl6ZScgdmFsdWU9e2RhdGUuZmlvfSBvbkNoYW5nZT17ZT0+b25DaGFuZ2UoZSl9IHBsYWNlaG9sZGVyPSfQktCw0YjQtSDQuNC80Y8nPjwvaW5wdXQ+XHJcbiAgICAgICAgPElucHV0TWFzayB0eXBlPSd0ZWwnIHBsYWNlaG9sZGVyPSfQktCy0LXQtNC40YLQtSDQmNCY0J0nIG5hbWU9J2lpbicgbWFzaz1cIjk5OTk5OTk5OTk5OVwiIG1hc2tDaGFyPXtudWxsfSB2YWx1ZT17ZGF0ZS5paW59IG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2UoZSl9IC8+XHJcbiAgICAgICAgPElucHV0TWFzayB0eXBlPSd0ZWwnIHBsYWNlaG9sZGVyPSfQktCy0LXQtNC40YLQtSDRgtC10LvQtdGE0L7QvSDQvdC+0LzQtdGAJyBuYW1lPSdwaG9uZScgbWFzaz1cIis3KDk5OSktOTk5LTk5OTlcIiBtYXNrQ2hhcj17bnVsbH0gdmFsdWU9e2RhdGUucGhvbmV9IG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2UoZSl9IC8+XHJcbiAgICAgICAgPHRleHRhcmVhIHBsYWNlaG9sZGVyPSfQntGC0LfRi9CyJyBuYW1lPSdjb21tZW50JyBvbkNoYW5nZT17ZT0+b25DaGFuZ2UoZSl9IHZhbHVlPXtkYXRlLmNvbW1lbnR9PjwvdGV4dGFyZWE+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9J3NpbmdsZWJ0bidcclxuICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcclxuICAgICAgICAgIGNsYXNzTmFtZT0nYnV0dG9uJ1xyXG4gICAgICAgICAgdmFsdWU9J9Ce0YLQv9GA0LDQstC40YLRjCcvPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZlZWRiYWNrRm9ybSJdLCJzb3VyY2VSb290IjoiIn0=