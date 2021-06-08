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
        className: "text-danger",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mZWVkYmFjay9GZWVkYmFjay5qcyJdLCJuYW1lcyI6WyJGZWVkYmFja0Zvcm0iLCJ1c2VTdGF0ZSIsImZpbyIsInBob25lIiwiY29tbWVudCIsImlpbiIsImRhdGUiLCJzZXREYXRlIiwiZXJyb3IiLCJzZXRFcnJvciIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiYXhpb3MiLCJwcm9jZXNzIiwicGFyYW1zIiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwic3VjY2VzcyIsInN3YWwiLCJSb3V0ZXIiLCJwdXNoIiwibWVzc2FnZSIsIm9uQ2hhbmdlIiwibmFtZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0ZDLCtDQUFRLENBQUM7QUFBQ0MsT0FBRyxFQUFFLEVBQU47QUFBVUMsU0FBSyxFQUFFLEVBQWpCO0FBQXFCQyxXQUFPLEVBQUUsRUFBOUI7QUFBa0NDLE9BQUcsRUFBRTtBQUF2QyxHQUFELENBRE47QUFBQSxNQUNsQkMsSUFEa0I7QUFBQSxNQUNiQyxPQURhOztBQUFBLG1CQUVBTiwrQ0FBUSxDQUFDLEVBQUQsQ0FGUjtBQUFBLE1BRWxCTyxLQUZrQjtBQUFBLE1BRVpDLFFBRlk7O0FBR3pCLE1BQU1DLFNBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLENBQUQsRUFBTztBQUN0QkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FDLG9EQUFBLFdBQWFDLHlCQUFiLG1CQUFpRDtBQUFDQyxZQUFNLEVBQUVUO0FBQVQsS0FBakQsRUFDR1UsSUFESCxDQUNRLFVBQUFDLEdBQUcsRUFBRztBQUNWQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjs7QUFDQSxV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OGFkYTBlNjE5NTJiMDdkYzZkZDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgSW5wdXRNYXNrIGZyb20gJ3JlYWN0LWlucHV0LW1hc2snXHJcbmltcG9ydCBzd2FsIGZyb20gXCJzd2VldGFsZXJ0XCI7XHJcbmltcG9ydCBQaG9uZU1hc2sgZnJvbSBcIi4uL01hc2tzL1Bob25lTWFza1wiO1xyXG5cclxuY29uc3QgRmVlZGJhY2tGb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtkYXRlLHNldERhdGVdID0gdXNlU3RhdGUoe2ZpbzogJycsIHBob25lOiAnJywgY29tbWVudDogJycsIGlpbjogJzAwMDAwMDAwMDAwMCd9KVxyXG4gIGNvbnN0IFtlcnJvcixzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBvblN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vYWRkRmVlZGJhY2tgLCB7cGFyYW1zOiBkYXRlfSlcclxuICAgICAgLnRoZW4ocmVzPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICBpZihyZXMuZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICBzd2FsKFwi0KHQv9Cw0YHQuNCx0L4g0LfQsCDQstCw0Ygg0L7RgtC30YvQslwiLCBg0JLQsNGIINC+0YLQt9GL0LIg0YPRgdC/0LXRiNC90L4g0L7RgtC/0YDQsNCy0LvQtdC9YCwgXCJzdWNjZXNzXCIpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnLycpfSlcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICBzZXRFcnJvcihyZXMuZGF0YS5tZXNzYWdlKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICB9XHJcbiAgY29uc3Qgb25DaGFuZ2U9ZT0+IHtcclxuICAgIGNvbnN0IG5hbWUgPSBlLnRhcmdldC5uYW1lO1xyXG4gICAgc2V0RGF0ZSh7Li4uZGF0ZSwgW25hbWVdOiBlLnRhcmdldC52YWx1ZX0pXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybV9yZWdpc3Rlcic+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSkgPT4gb25TdWJtaXQoZSl9PlxyXG4gICAgICAgIHtlcnJvciAmJiA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPntlcnJvcn08L2Rpdj59XHJcbiAgICAgICAgPGlucHV0IG5hbWU9J2ZpbycgdHlwZT0ndGV4dCcgY2xhc3NOYW1lPSdjYXBpdGFsaXplJyB2YWx1ZT17ZGF0ZS5maW99IG9uQ2hhbmdlPXtlPT5vbkNoYW5nZShlKX0gcGxhY2Vob2xkZXI9J9CS0LDRiNC1INC40LzRjyc+PC9pbnB1dD5cclxuICAgICAgICA8SW5wdXRNYXNrIHR5cGU9J3RlbCcgcGxhY2Vob2xkZXI9J9CS0LLQtdC00LjRgtC1INCY0JjQnScgbmFtZT0naWluJyBtYXNrPVwiOTk5OTk5OTk5OTk5XCIgbWFza0NoYXI9e251bGx9IHZhbHVlPXtkYXRlLmlpbn0gb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZShlKX0gLz5cclxuICAgICAgICA8SW5wdXRNYXNrIHR5cGU9J3RlbCcgcGxhY2Vob2xkZXI9J9CS0LLQtdC00LjRgtC1INGC0LXQu9C10YTQvtC9INC90L7QvNC10YAnIG5hbWU9J3Bob25lJyBtYXNrPVwiKzcoOTk5KS05OTktOTk5OVwiIG1hc2tDaGFyPXtudWxsfSB2YWx1ZT17ZGF0ZS5waG9uZX0gb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZShlKX0gLz5cclxuICAgICAgICA8dGV4dGFyZWEgcGxhY2Vob2xkZXI9J9Ce0YLQt9GL0LInIG5hbWU9J2NvbW1lbnQnIG9uQ2hhbmdlPXtlPT5vbkNoYW5nZShlKX0gdmFsdWU9e2RhdGUuY29tbWVudH0+PC90ZXh0YXJlYT5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGNsYXNzTmFtZT0nc2luZ2xlYnRuJ1xyXG4gICAgICAgICAgdHlwZT0nc3VibWl0J1xyXG4gICAgICAgICAgY2xhc3NOYW1lPSdidXR0b24nXHJcbiAgICAgICAgICB2YWx1ZT0n0J7RgtC/0YDQsNCy0LjRgtGMJy8+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmVlZGJhY2tGb3JtIl0sInNvdXJjZVJvb3QiOiIifQ==