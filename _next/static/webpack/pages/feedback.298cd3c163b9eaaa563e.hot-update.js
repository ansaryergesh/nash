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
        setError('');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mZWVkYmFjay9GZWVkYmFjay5qcyJdLCJuYW1lcyI6WyJGZWVkYmFja0Zvcm0iLCJ1c2VTdGF0ZSIsImZpbyIsInBob25lIiwiY29tbWVudCIsImlpbiIsImRhdGUiLCJzZXREYXRlIiwiZXJyb3IiLCJzZXRFcnJvciIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiYXhpb3MiLCJwcm9jZXNzIiwicGFyYW1zIiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwic3VjY2VzcyIsInN3YWwiLCJSb3V0ZXIiLCJwdXNoIiwib25DaGFuZ2UiLCJuYW1lIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFBQTs7QUFBQTs7QUFBQSxrQkFDRkMsK0NBQVEsQ0FBQztBQUFDQyxPQUFHLEVBQUUsRUFBTjtBQUFVQyxTQUFLLEVBQUUsRUFBakI7QUFBcUJDLFdBQU8sRUFBRSxFQUE5QjtBQUFrQ0MsT0FBRyxFQUFFO0FBQXZDLEdBQUQsQ0FETjtBQUFBLE1BQ2xCQyxJQURrQjtBQUFBLE1BQ2JDLE9BRGE7O0FBQUEsbUJBRUFOLCtDQUFRLENBQUMsRUFBRCxDQUZSO0FBQUEsTUFFbEJPLEtBRmtCO0FBQUEsTUFFWkMsUUFGWTs7QUFHekIsTUFBTUMsU0FBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3RCQSxLQUFDLENBQUNDLGNBQUY7QUFDQUMsb0RBQUEsV0FBYUMseUJBQWIsbUJBQWlEO0FBQUNDLFlBQU0sRUFBRVQ7QUFBVCxLQUFqRCxFQUNHVSxJQURILENBQ1EsVUFBQUMsR0FBRyxFQUFHO0FBQ1ZDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaOztBQUNBLFVBQUdBLEdBQUcsQ0FBQ0csSUFBSixDQUFTQyxPQUFaLEVBQXFCO0FBQ25CQyx5REFBSSxDQUFDLHNCQUFELHlKQUF3RCxTQUF4RCxDQUFKLENBQXVFTixJQUF2RSxDQUE0RSxZQUFNO0FBQ2hGTyxnQkFBTSxDQUFDQyxJQUFQLENBQVksR0FBWjtBQUFpQixTQURuQjtBQUVELE9BSEQsTUFHTTtBQUNKZixnQkFBUSxDQUFDLEVBQUQsQ0FBUjtBQUNEO0FBQ0YsS0FUSDtBQVVELEdBWkQ7O0FBYUEsTUFBTWdCLFNBQVEsR0FBQyxTQUFUQSxRQUFTLENBQUFkLENBQUMsRUFBRztBQUNqQixRQUFNZSxJQUFJLEdBQUdmLENBQUMsQ0FBQ2dCLE1BQUYsQ0FBU0QsSUFBdEI7QUFDQW5CLFdBQU8saUNBQUtELElBQUwsNEhBQVlvQixJQUFaLEVBQW1CZixDQUFDLENBQUNnQixNQUFGLENBQVNDLEtBQTVCLEdBQVA7QUFDRCxHQUhEOztBQUlBLHNCQUNFO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQSwyQkFDRTtBQUFNLGNBQVEsRUFBRSxrQkFBQ2pCLENBQUQ7QUFBQSxlQUFPRCxTQUFRLENBQUNDLENBQUQsQ0FBZjtBQUFBLE9BQWhCO0FBQUEsaUJBQ0dILEtBQUssaUJBQUk7QUFBSyxpQkFBUyxFQUFDLGFBQWY7QUFBQSxrQkFBOEJBO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEWixlQUVFO0FBQU8sWUFBSSxFQUFDLEtBQVo7QUFBa0IsWUFBSSxFQUFDLE1BQXZCO0FBQThCLGlCQUFTLEVBQUMsWUFBeEM7QUFBcUQsYUFBSyxFQUFFRixJQUFJLENBQUNKLEdBQWpFO0FBQXNFLGdCQUFRLEVBQUUsa0JBQUFTLENBQUM7QUFBQSxpQkFBRWMsU0FBUSxDQUFDZCxDQUFELENBQVY7QUFBQSxTQUFqRjtBQUFnRyxtQkFBVyxFQUFDO0FBQTVHO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQUdFLDhEQUFDLHlEQUFEO0FBQVcsWUFBSSxFQUFDLEtBQWhCO0FBQXNCLG1CQUFXLEVBQUMsK0RBQWxDO0FBQWdELFlBQUksRUFBQyxLQUFyRDtBQUEyRCxZQUFJLEVBQUMsY0FBaEU7QUFBK0UsZ0JBQVEsRUFBRSxJQUF6RjtBQUErRixhQUFLLEVBQUVMLElBQUksQ0FBQ0QsR0FBM0c7QUFBZ0gsZ0JBQVEsRUFBRSxrQkFBQ00sQ0FBRDtBQUFBLGlCQUFPYyxTQUFRLENBQUNkLENBQUQsQ0FBZjtBQUFBO0FBQTFIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRixlQUlFLDhEQUFDLHlEQUFEO0FBQVcsWUFBSSxFQUFDLEtBQWhCO0FBQXNCLG1CQUFXLEVBQUMsc0hBQWxDO0FBQTBELFlBQUksRUFBQyxPQUEvRDtBQUF1RSxZQUFJLEVBQUMsa0JBQTVFO0FBQStGLGdCQUFRLEVBQUUsSUFBekc7QUFBK0csYUFBSyxFQUFFTCxJQUFJLENBQUNILEtBQTNIO0FBQWtJLGdCQUFRLEVBQUUsa0JBQUNRLENBQUQ7QUFBQSxpQkFBT2MsU0FBUSxDQUFDZCxDQUFELENBQWY7QUFBQTtBQUE1STtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkYsZUFLRTtBQUFVLG1CQUFXLEVBQUMsZ0NBQXRCO0FBQThCLFlBQUksRUFBQyxTQUFuQztBQUE2QyxnQkFBUSxFQUFFLGtCQUFBQSxDQUFDO0FBQUEsaUJBQUVjLFNBQVEsQ0FBQ2QsQ0FBRCxDQUFWO0FBQUEsU0FBeEQ7QUFBdUUsYUFBSyxFQUFFTCxJQUFJLENBQUNGO0FBQW5GO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRixlQU1FO0FBQ0UsaUJBQVMsRUFBQyxXQURaO0FBRUUsWUFBSSxFQUFDO0FBRlAsaUpBR1ksUUFIWix1SUFJUSx3REFKUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZ0JELENBcENEOztHQUFNSixZOztLQUFBQSxZO0FBc0NOLCtEQUFlQSxZQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ZlZWRiYWNrLjI5OGNkM2MxNjNiOWVhYWE1NjNlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IElucHV0TWFzayBmcm9tICdyZWFjdC1pbnB1dC1tYXNrJ1xyXG5pbXBvcnQgc3dhbCBmcm9tIFwic3dlZXRhbGVydFwiO1xyXG5pbXBvcnQgUGhvbmVNYXNrIGZyb20gXCIuLi9NYXNrcy9QaG9uZU1hc2tcIjtcclxuXHJcbmNvbnN0IEZlZWRiYWNrRm9ybSA9ICgpID0+IHtcclxuICBjb25zdCBbZGF0ZSxzZXREYXRlXSA9IHVzZVN0YXRlKHtmaW86ICcnLCBwaG9uZTogJycsIGNvbW1lbnQ6ICcnLCBpaW46ICcwMDAwMDAwMDAwMDAnfSlcclxuICBjb25zdCBbZXJyb3Isc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3Qgb25TdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L2FkZEZlZWRiYWNrYCwge3BhcmFtczogZGF0ZX0pXHJcbiAgICAgIC50aGVuKHJlcz0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgaWYocmVzLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgc3dhbChcItCh0L/QsNGB0LjQsdC+INC30LAg0LLQsNGIINC+0YLQt9GL0LJcIiwgYNCS0LDRiCDQvtGC0LfRi9CyINGD0YHQv9C10YjQvdC+INC+0YLQv9GA0LDQstC70LXQvWAsIFwic3VjY2Vzc1wiKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goJy8nKX0pXHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgc2V0RXJyb3IoJycpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gIH1cclxuICBjb25zdCBvbkNoYW5nZT1lPT4ge1xyXG4gICAgY29uc3QgbmFtZSA9IGUudGFyZ2V0Lm5hbWU7XHJcbiAgICBzZXREYXRlKHsuLi5kYXRlLCBbbmFtZV06IGUudGFyZ2V0LnZhbHVlfSlcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtX3JlZ2lzdGVyJz5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKSA9PiBvblN1Ym1pdChlKX0+XHJcbiAgICAgICAge2Vycm9yICYmIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+e2Vycm9yfTwvZGl2Pn1cclxuICAgICAgICA8aW5wdXQgbmFtZT0nZmlvJyB0eXBlPSd0ZXh0JyBjbGFzc05hbWU9J2NhcGl0YWxpemUnIHZhbHVlPXtkYXRlLmZpb30gb25DaGFuZ2U9e2U9Pm9uQ2hhbmdlKGUpfSBwbGFjZWhvbGRlcj0n0JLQsNGI0LUg0LjQvNGPJz48L2lucHV0PlxyXG4gICAgICAgIDxJbnB1dE1hc2sgdHlwZT0ndGVsJyBwbGFjZWhvbGRlcj0n0JLQstC10LTQuNGC0LUg0JjQmNCdJyBuYW1lPSdpaW4nIG1hc2s9XCI5OTk5OTk5OTk5OTlcIiBtYXNrQ2hhcj17bnVsbH0gdmFsdWU9e2RhdGUuaWlufSBvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlKGUpfSAvPlxyXG4gICAgICAgIDxJbnB1dE1hc2sgdHlwZT0ndGVsJyBwbGFjZWhvbGRlcj0n0JLQstC10LTQuNGC0LUg0YLQtdC70LXRhNC+0L0g0L3QvtC80LXRgCcgbmFtZT0ncGhvbmUnIG1hc2s9XCIrNyg5OTkpLTk5OS05OTk5XCIgbWFza0NoYXI9e251bGx9IHZhbHVlPXtkYXRlLnBob25lfSBvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlKGUpfSAvPlxyXG4gICAgICAgIDx0ZXh0YXJlYSBwbGFjZWhvbGRlcj0n0J7RgtC30YvQsicgbmFtZT0nY29tbWVudCcgb25DaGFuZ2U9e2U9Pm9uQ2hhbmdlKGUpfSB2YWx1ZT17ZGF0ZS5jb21tZW50fT48L3RleHRhcmVhPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgY2xhc3NOYW1lPSdzaW5nbGVidG4nXHJcbiAgICAgICAgICB0eXBlPSdzdWJtaXQnXHJcbiAgICAgICAgICBjbGFzc05hbWU9J2J1dHRvbidcclxuICAgICAgICAgIHZhbHVlPSfQntGC0L/RgNCw0LLQuNGC0YwnLz5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGZWVkYmFja0Zvcm0iXSwic291cmNlUm9vdCI6IiJ9