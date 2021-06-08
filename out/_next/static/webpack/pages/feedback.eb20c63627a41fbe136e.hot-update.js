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
/* harmony import */ var _loader_Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../loader/Loader */ "./components/loader/Loader.js");
/* harmony import */ var _Masks_PhoneMask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Masks/PhoneMask */ "./components/Masks/PhoneMask.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "E:\\job\\nashcompany\\components\\feedback\\Feedback.js",
    _this = undefined,
    _s2 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var FeedbackForm = function FeedbackForm() {
  _s2();

  var _s = $RefreshSig$(),
      _jsxDEV2;

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

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      loading = _useState3[0],
      setLoading = _useState3[1];

  var _onSubmit = function onSubmit(e) {
    _s();

    (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);
    e.preventDefault();
    axios__WEBPACK_IMPORTED_MODULE_2___default().get("".concat("https://crediter.kz/api", "/addFeedback"), {
      params: date
    }).then(function (res) {
      setLoading(false);
      console.log(res);

      if (res.data.success) {
        sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Спасибо за ваш отзыв", "\u0412\u0430\u0448 \u043E\u0442\u0437\u044B\u0432 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D", "success").then(function () {
          Router.push('/');
        });
      } else {
        setError(res.data.message);
      }
    })["catch"](function (err) {
      console.log(err);
      setLoading(false);
    });
  };

  _s(_onSubmit, "6J2wAdZ2kjF0faG/fj33ZXGxstA=");

  var _onChange = function onChange(e) {
    var name = e.target.name;
    setDate(_objectSpread(_objectSpread({}, date), {}, (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, name, e.target.value)));
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "form_register",
    children: [loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_loader_Loader__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 19
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      onSubmit: function onSubmit(e) {
        return _onSubmit(e);
      },
      children: [error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "alert-error text-danger",
        children: error
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
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
        lineNumber: 40,
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
        lineNumber: 41,
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
        lineNumber: 42,
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
        lineNumber: 43,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", (_jsxDEV2 = {
        className: "singlebtn",
        type: "submit"
      }, (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_jsxDEV2, "className", "button"), (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_jsxDEV2, "value", "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"), _jsxDEV2), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, _this);
};

_s2(FeedbackForm, "mIEzRbyjUBc0/6sMQ0AF6UQyCzE=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mZWVkYmFjay9GZWVkYmFjay5qcyJdLCJuYW1lcyI6WyJGZWVkYmFja0Zvcm0iLCJ1c2VTdGF0ZSIsImZpbyIsInBob25lIiwiY29tbWVudCIsImlpbiIsImRhdGUiLCJzZXREYXRlIiwiZXJyb3IiLCJzZXRFcnJvciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJheGlvcyIsInByb2Nlc3MiLCJwYXJhbXMiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJzdWNjZXNzIiwic3dhbCIsIlJvdXRlciIsInB1c2giLCJtZXNzYWdlIiwiZXJyIiwib25DaGFuZ2UiLCJuYW1lIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFBQTs7QUFBQTtBQUFBOztBQUFBLGtCQUNGQywrQ0FBUSxDQUFDO0FBQUNDLE9BQUcsRUFBRSxFQUFOO0FBQVVDLFNBQUssRUFBRSxFQUFqQjtBQUFxQkMsV0FBTyxFQUFFLEVBQTlCO0FBQWtDQyxPQUFHLEVBQUU7QUFBdkMsR0FBRCxDQUROO0FBQUEsTUFDbEJDLElBRGtCO0FBQUEsTUFDYkMsT0FEYTs7QUFBQSxtQkFFQU4sK0NBQVEsQ0FBQyxFQUFELENBRlI7QUFBQSxNQUVsQk8sS0FGa0I7QUFBQSxNQUVaQyxRQUZZOztBQUFBLG1CQUdJUiwrQ0FBUSxDQUFDLEtBQUQsQ0FIWjtBQUFBLE1BR2xCUyxPQUhrQjtBQUFBLE1BR1ZDLFVBSFU7O0FBSXpCLE1BQU1DLFNBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLENBQUQsRUFBTztBQUFBOztBQUN0QlosbURBQVEsQ0FBQyxJQUFELENBQVI7QUFDQVksS0FBQyxD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QSxDQUFDO0FBQUEsaUJBQUVnQixTQUFRLENBQUNoQixDQUFELENBQVY7QUFBQSxTQUF4RDtBQUF1RSxhQUFLLEVBQUVQLElBQUksQ0FBQ0Y7QUFBbkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGLGVBTUU7QUFDRSxpQkFBUyxFQUFDLFdBRFo7QUFFRSxZQUFJLEVBQUM7QUFGUCxpSkFHWSxRQUhaLHVJQUlRLHdEQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWlCRCxDQTVDRDs7SUFBTUosWTs7S0FBQUEsWTtBQThDTiwrREFBZUEsWUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9mZWVkYmFjay5lYjIwYzYzNjI3YTQxZmJlMTM2ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBJbnB1dE1hc2sgZnJvbSAncmVhY3QtaW5wdXQtbWFzaydcclxuaW1wb3J0IHN3YWwgZnJvbSBcInN3ZWV0YWxlcnRcIjtcclxuaW1wb3J0IExvYWRlciBmcm9tIFwiLi4vbG9hZGVyL0xvYWRlclwiO1xyXG5pbXBvcnQgUGhvbmVNYXNrIGZyb20gXCIuLi9NYXNrcy9QaG9uZU1hc2tcIjtcclxuXHJcbmNvbnN0IEZlZWRiYWNrRm9ybSA9ICgpID0+IHtcclxuICBjb25zdCBbZGF0ZSxzZXREYXRlXSA9IHVzZVN0YXRlKHtmaW86ICcnLCBwaG9uZTogJycsIGNvbW1lbnQ6ICcnLCBpaW46ICcwMDAwMDAwMDAwMDAnfSlcclxuICBjb25zdCBbZXJyb3Isc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW2xvYWRpbmcsc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBvblN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICB1c2VTdGF0ZSh0cnVlKVxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L2FkZEZlZWRiYWNrYCwge3BhcmFtczogZGF0ZX0pXHJcbiAgICAgIC50aGVuKHJlcz0+IHtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICBpZihyZXMuZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICBzd2FsKFwi0KHQv9Cw0YHQuNCx0L4g0LfQsCDQstCw0Ygg0L7RgtC30YvQslwiLCBg0JLQsNGIINC+0YLQt9GL0LIg0YPRgdC/0LXRiNC90L4g0L7RgtC/0YDQsNCy0LvQtdC9YCwgXCJzdWNjZXNzXCIpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnLycpfSlcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICBzZXRFcnJvcihyZXMuZGF0YS5tZXNzYWdlKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgfSlcclxuICB9XHJcbiAgY29uc3Qgb25DaGFuZ2U9ZT0+IHtcclxuICAgIGNvbnN0IG5hbWUgPSBlLnRhcmdldC5uYW1lO1xyXG4gICAgc2V0RGF0ZSh7Li4uZGF0ZSwgW25hbWVdOiBlLnRhcmdldC52YWx1ZX0pXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybV9yZWdpc3Rlcic+XHJcbiAgICAgIHtsb2FkaW5nICYmIDxMb2FkZXIgLz59XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSkgPT4gb25TdWJtaXQoZSl9PlxyXG4gICAgICAgIHtlcnJvciAmJiA8ZGl2IGNsYXNzTmFtZT0nYWxlcnQtZXJyb3IgdGV4dC1kYW5nZXInPntlcnJvcn08L2Rpdj59XHJcbiAgICAgICAgPGlucHV0IG5hbWU9J2ZpbycgdHlwZT0ndGV4dCcgY2xhc3NOYW1lPSdjYXBpdGFsaXplJyB2YWx1ZT17ZGF0ZS5maW99IG9uQ2hhbmdlPXtlPT5vbkNoYW5nZShlKX0gcGxhY2Vob2xkZXI9J9CS0LDRiNC1INC40LzRjyc+PC9pbnB1dD5cclxuICAgICAgICA8SW5wdXRNYXNrIHR5cGU9J3RlbCcgcGxhY2Vob2xkZXI9J9CS0LLQtdC00LjRgtC1INCY0JjQnScgbmFtZT0naWluJyBtYXNrPVwiOTk5OTk5OTk5OTk5XCIgbWFza0NoYXI9e251bGx9IHZhbHVlPXtkYXRlLmlpbn0gb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZShlKX0gLz5cclxuICAgICAgICA8SW5wdXRNYXNrIHR5cGU9J3RlbCcgcGxhY2Vob2xkZXI9J9CS0LLQtdC00LjRgtC1INGC0LXQu9C10YTQvtC9INC90L7QvNC10YAnIG5hbWU9J3Bob25lJyBtYXNrPVwiKzcoOTk5KS05OTktOTk5OVwiIG1hc2tDaGFyPXtudWxsfSB2YWx1ZT17ZGF0ZS5waG9uZX0gb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZShlKX0gLz5cclxuICAgICAgICA8dGV4dGFyZWEgcGxhY2Vob2xkZXI9J9Ce0YLQt9GL0LInIG5hbWU9J2NvbW1lbnQnIG9uQ2hhbmdlPXtlPT5vbkNoYW5nZShlKX0gdmFsdWU9e2RhdGUuY29tbWVudH0+PC90ZXh0YXJlYT5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGNsYXNzTmFtZT0nc2luZ2xlYnRuJ1xyXG4gICAgICAgICAgdHlwZT0nc3VibWl0J1xyXG4gICAgICAgICAgY2xhc3NOYW1lPSdidXR0b24nXHJcbiAgICAgICAgICB2YWx1ZT0n0J7RgtC/0YDQsNCy0LjRgtGMJy8+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmVlZGJhY2tGb3JtIl0sInNvdXJjZVJvb3QiOiIifQ==