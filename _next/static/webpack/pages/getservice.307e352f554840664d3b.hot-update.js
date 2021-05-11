self["webpackHotUpdate_N_E"]("pages/getservice",{

/***/ "./components/getservice/FirstStep.js":
/*!********************************************!*\
  !*** ./components/getservice/FirstStep.js ***!
  \********************************************/
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
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "E:\\job\\nashcompany\\components\\getservice\\FirstStep.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var FirstStep = function FirstStep() {
  _s();

  var _jsxDEV2;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
    email: '',
    phone: '',
    fio: '',
    password: '',
    type: 'Физ лицо'
  }),
      formData = _useState[0],
      setFormData = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
    email: '',
    phone: '',
    fio: '',
    password: '',
    type: 'Физ лицо'
  }),
      errors = _useState2[0],
      setErrors = _useState2[1];

  var onSubmit = function onSubmit() {
    if (fio === '') {
      setErrors(_objectSpread(_objectSpread({}, errors), {}, {
        fio: 'Поле ФИО обязательно для заполнения'
      }));
    }

    if (phone) {
      setErrors(_objectSpread(_objectSpread({}, errors), {}, {
        phone: 'Поле телефон номер обязательно для заполнения'
      }));
    }

    axios__WEBPACK_IMPORTED_MODULE_2___default().get("".concat("https://crediter.kz/api", "/identification"), {
      params: {
        fio: fio,
        phone: phone,
        email: email,
        password: password,
        type: type
      }
    });
  };

  var _onChange = function onChange(e) {
    var name = e.target.name;
    setFormData(_objectSpread(_objectSpread({}, formData), {}, (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, name, e.target.value)));
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "form_register",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "text",
        name: "fio",
        value: formData.fio,
        onChange: function onChange(e) {
          return _onChange(e);
        },
        placeholder: "\u0424\u0430\u043C\u0438\u043B\u0438\u044F \u0418\u043C\u044F"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, _this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_input_mask__WEBPACK_IMPORTED_MODULE_4___default()), {
        mask: "+7(999)-999-9999",
        maskChar: " ",
        name: "phone",
        placeholder: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D \u043D\u043E\u043C\u0435\u0440",
        type: "tel",
        onChange: function onChange(e) {
          return _onChange(e);
        },
        value: formData.phone,
        className: "my-input"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_input_mask__WEBPACK_IMPORTED_MODULE_4___default()), {
        mask: "999999999999",
        maskChar: " ",
        name: "iin",
        value: formData.iin,
        onChange: function onChange(e) {
          return _onChange(e);
        },
        placeholder: "\u0418\u0418\u041D",
        type: "tel",
        className: "my-input"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "text",
        name: "email",
        value: formData.email,
        onChange: function onChange(e) {
          return _onChange(e);
        },
        placeholder: "Email"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "password",
        value: formData.password,
        onChange: function onChange(e) {
          return _onChange(e);
        },
        name: "password",
        placeholder: "\u041F\u0440\u0438\u0434\u0443\u043C\u0430\u0439\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", (_jsxDEV2 = {
        className: "singlebtn",
        type: "submit"
      }, (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_jsxDEV2, "className", "button"), (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_jsxDEV2, "value", "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"), _jsxDEV2), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }, _this);
};

_s(FirstStep, "bxhe9sOBiVvZlNTEXW6Sgmk60gI=");

_c = FirstStep;
/* harmony default export */ __webpack_exports__["default"] = (FirstStep);

var _c;

$RefreshReg$(_c, "FirstStep");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRzZXJ2aWNlL0ZpcnN0U3RlcC5qcyJdLCJuYW1lcyI6WyJGaXJzdFN0ZXAiLCJ1c2VTdGF0ZSIsImVtYWlsIiwicGhvbmUiLCJmaW8iLCJwYXNzd29yZCIsInR5cGUiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwib25TdWJtaXQiLCJheGlvcyIsInByb2Nlc3MiLCJwYXJhbXMiLCJvbkNoYW5nZSIsImUiLCJuYW1lIiwidGFyZ2V0IiwidmFsdWUiLCJpaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUFBOztBQUFBLGtCQUVMQywrQ0FBUSxDQUFDO0FBQUNDLFNBQUssRUFBRSxFQUFSO0FBQVlDLFNBQUssRUFBRSxFQUFuQjtBQUF1QkMsT0FBRyxFQUFFLEVBQTVCO0FBQWdDQyxZQUFRLEVBQUUsRUFBMUM7QUFBOENDLFFBQUksRUFBRTtBQUFwRCxHQUFELENBRkg7QUFBQSxNQUNmQyxRQURlO0FBQUEsTUFFcEJDLFdBRm9COztBQUFBLG1CQUlQUCwrQ0FBUSxDQUFDO0FBQUNDLFNBQUssRUFBRSxFQUFSO0FBQVlDLFNBQUssRUFBRSxFQUFuQjtBQUF1QkMsT0FBRyxFQUFFLEVBQTVCO0FBQWdDQyxZQUFRLEVBQUUsRUFBMUM7QUFBOENDLFFBQUksRUFBRTtBQUFwRCxHQUFELENBSkQ7QUFBQSxNQUdmRyxNQUhlO0FBQUEsTUFJcEJDLFNBSm9COztBQUt0QixNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ3JCLFFBQUlQLEdBQUcsS0FBSyxFQUFaLEVBQWdCO0FBQ2RNLGVBQVMsaUNBQUtELE1BQUw7QUFBYUwsV0FBRyxFQUFFO0FBQWxCLFNBQVQ7QUFDRDs7QUFDRCxRQUFHRCxLQUFILEVBQVU7QUFDUk8sZUFBUyxpQ0FBS0QsTUFBTDtBQUFhTixhQUFLLEVBQUU7QUFBcEIsU0FBVDtBQUNEOztBQUNDUyxvREFBQSxXQUFhQyx5QkFBYixzQkFBb0Q7QUFDbERDLFlBQU0sRUFBRTtBQUNOVixXQUFHLEVBQUhBLEdBRE07QUFFTkQsYUFBSyxFQUFMQSxLQUZNO0FBR05ELGFBQUssRUFBTEEsS0FITTtBQUlORyxnQkFBUSxFQUFSQSxRQUpNO0FBS05DLFlBQUksRUFBSkE7QUFMTTtBQUQwQyxLQUFwRDtBQVNILEdBaEJEOztBQWtCQSxNQUFNUyxTQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxDQUFELEVBQU87QUFDdEIsUUFBTUMsSUFBSSxHQUFHRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0QsSUFBdEI7QUFDQVQsZUFBVyxpQ0FDTkQsUUFETSw0SEFFUlUsSUFGUSxFQUVERCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsS0FGUixHQUFYO0FBSUQsR0FORDs7QUFPQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUEsMkJBQ0U7QUFBQSw4QkFFRTtBQUNFLFlBQUksRUFBQyxNQURQO0FBRUUsWUFBSSxFQUFDLEtBRlA7QUFHRSxhQUFLLEVBQUVaLFFBQVEsQ0FBQ0gsR0FIbEI7QUFJRSxnQkFBUSxFQUFFLGtCQUFBWSxDQUFDO0FBQUEsaUJBQUlELFNBQVEsQ0FBQ0MsQ0FBRCxDQUFaO0FBQUEsU0FKYjtBQUtFLG1CQUFXLEVBQUM7QUFMZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsb0JBUUUsOERBQUMseURBQUQ7QUFDRSxZQUFJLEVBQUMsa0JBRFA7QUFFRSxnQkFBUSxFQUFDLEdBRlg7QUFHRSxZQUFJLEVBQUMsT0FIUDtBQUlFLG1CQUFXLEVBQUMsMkVBSmQ7QUFLRSxZQUFJLEVBQUMsS0FMUDtBQU1FLGdCQUFRLEVBQUUsa0JBQUFBLENBQUM7QUFBQSxpQkFBSUQsU0FBUSxDQUFDQyxDQUFELENBQVo7QUFBQSxTQU5iO0FBT0UsYUFBSyxFQUFFVCxRQUFRLENBQUNKLEtBUGxCO0FBUUUsaUJBQVMsRUFBQztBQVJaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSRixlQWlCRSw4REFBQyx5REFBRDtBQUNFLFlBQUksRUFBQyxjQURQO0FBRUUsZ0JBQVEsRUFBQyxHQUZYO0FBR0UsWUFBSSxFQUFDLEtBSFA7QUFJRSxhQUFLLEVBQUVJLFFBQVEsQ0FBQ2EsR0FKbEI7QUFLRSxnQkFBUSxFQUFFLGtCQUFBSixDQUFDO0FBQUEsaUJBQUlELFNBQVEsQ0FBQ0MsQ0FBRCxDQUFaO0FBQUEsU0FMYjtBQU1FLG1CQUFXLEVBQUMsb0JBTmQ7QUFPRSxZQUFJLEVBQUMsS0FQUDtBQVFFLGlCQUFTLEVBQUM7QUFSWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBakJGLGVBMEJFO0FBQ0UsWUFBSSxFQUFDLE1BRFA7QUFFRSxZQUFJLEVBQUMsT0FGUDtBQUdFLGFBQUssRUFBRVQsUUFBUSxDQUFDTCxLQUhsQjtBQUlFLGdCQUFRLEVBQUUsa0JBQUFjLENBQUM7QUFBQSxpQkFBSUQsU0FBUSxDQUFDQyxDQUFELENBQVo7QUFBQSxTQUpiO0FBS0UsbUJBQVcsRUFBQztBQUxkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUExQkYsZUFnQ0U7QUFDRSxZQUFJLEVBQUMsVUFEUDtBQUVFLGFBQUssRUFBRVQsUUFBUSxDQUFDRixRQUZsQjtBQUdFLGdCQUFRLEVBQUUsa0JBQUFXLENBQUM7QUFBQSxpQkFBSUQsU0FBUSxDQUFDQyxDQUFELENBQVo7QUFBQSxTQUhiO0FBSUUsWUFBSSxFQUFDLFVBSlA7QUFLRSxtQkFBVyxFQUFDO0FBTGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWhDRixlQXNDRTtBQUNFLGlCQUFTLEVBQUMsV0FEWjtBQUVFLFlBQUksRUFBQztBQUZQLGlKQUdZLFFBSFosdUlBSVEsd0RBSlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXRDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFnREQsQ0E5RUQ7O0dBQU1oQixTOztLQUFBQSxTO0FBZ0ZOLCtEQUFlQSxTQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2dldHNlcnZpY2UuMzA3ZTM1MmY1NTQ4NDA2NjRkM2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBJbnB1dE1hc2sgZnJvbSAncmVhY3QtaW5wdXQtbWFzaydcclxuY29uc3QgRmlyc3RTdGVwID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtmb3JtRGF0YSxcclxuICAgIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtlbWFpbDogJycsIHBob25lOiAnJywgZmlvOiAnJywgcGFzc3dvcmQ6ICcnLCB0eXBlOiAn0KTQuNC3INC70LjRhtC+J30pXHJcbiAgY29uc3QgW2Vycm9ycyxcclxuICAgIHNldEVycm9yc10gPSB1c2VTdGF0ZSh7ZW1haWw6ICcnLCBwaG9uZTogJycsIGZpbzogJycsIHBhc3N3b3JkOiAnJywgdHlwZTogJ9Ck0LjQtyDQu9C40YbQvid9KVxyXG4gIGNvbnN0IG9uU3VibWl0ID0gKCkgPT4ge1xyXG4gICAgaWYgKGZpbyA9PT0gJycpIHtcclxuICAgICAgc2V0RXJyb3JzKHsuLi5lcnJvcnMsIGZpbzogJ9Cf0L7Qu9C1INCk0JjQniDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+INC00LvRjyDQt9Cw0L/QvtC70L3QtdC90LjRjyd9KVxyXG4gICAgfVxyXG4gICAgaWYocGhvbmUpIHtcclxuICAgICAgc2V0RXJyb3JzKHsuLi5lcnJvcnMsIHBob25lOiAn0J/QvtC70LUg0YLQtdC70LXRhNC+0L0g0L3QvtC80LXRgCDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+INC00LvRjyDQt9Cw0L/QvtC70L3QtdC90LjRjyd9KVxyXG4gICAgfVxyXG4gICAgICBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L2lkZW50aWZpY2F0aW9uYCwge1xyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgZmlvLFxyXG4gICAgICAgICAgcGhvbmUsXHJcbiAgICAgICAgICBlbWFpbCxcclxuICAgICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICAgICAgdHlwZVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IG5hbWUgPSBlLnRhcmdldC5uYW1lO1xyXG4gICAgc2V0Rm9ybURhdGEoe1xyXG4gICAgICAuLi5mb3JtRGF0YSxcclxuICAgICAgW25hbWVdOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgfSlcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtX3JlZ2lzdGVyJz5cclxuICAgICAgPGZvcm0+XHJcbiAgICAgICAgey8qIDxpbnB1dCB0eXBlPSd0ZXh0JyBuYW1lPSdvcmdhbml6YXRpb24nIHBsYWNlaG9sZGVyPSfQndCw0LjQvNC10L3QvtCy0LDQvdC40LUg0L7RgNCz0LDQvdC40LfQsNGG0LjQuCcgLz4gKi99XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgbmFtZT0nZmlvJ1xyXG4gICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmZpb31cclxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IG9uQ2hhbmdlKGUpfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J9Ck0LDQvNC40LvQuNGPINCY0LzRjycvPiB7LyogPGlucHV0IHR5cGU9J3RleHQnIG5hbWU9J3Bvc2l0aW9uJyBwbGFjZWhvbGRlcj0n0JfQsNC90LjQvNCw0LXQvNCw0Y8g0LTQvtC70LbQvdC+0YHRgtGMJyAvPiAqL31cclxuICAgICAgICA8SW5wdXRNYXNrXHJcbiAgICAgICAgICBtYXNrPVwiKzcoOTk5KS05OTktOTk5OVwiXHJcbiAgICAgICAgICBtYXNrQ2hhcj1cIiBcIlxyXG4gICAgICAgICAgbmFtZT0ncGhvbmUnXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj0n0KLQtdC70LXRhNC+0L0g0L3QvtC80LXRgCdcclxuICAgICAgICAgIHR5cGU9J3RlbCdcclxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IG9uQ2hhbmdlKGUpfVxyXG4gICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLnBob25lfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibXktaW5wdXRcIi8+XHJcbiAgICAgICAgPElucHV0TWFza1xyXG4gICAgICAgICAgbWFzaz1cIjk5OTk5OTk5OTk5OVwiXHJcbiAgICAgICAgICBtYXNrQ2hhcj1cIiBcIlxyXG4gICAgICAgICAgbmFtZT0naWluJ1xyXG4gICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmlpbn1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IG9uQ2hhbmdlKGUpfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J9CY0JjQnSdcclxuICAgICAgICAgIHR5cGU9J3RlbCdcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm15LWlucHV0XCIvPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgIG5hbWU9J2VtYWlsJ1xyXG4gICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmVtYWlsfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gb25DaGFuZ2UoZSl9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj0nRW1haWwnLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9J3Bhc3N3b3JkJ1xyXG4gICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLnBhc3N3b3JkfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gb25DaGFuZ2UoZSl9XHJcbiAgICAgICAgICBuYW1lPSdwYXNzd29yZCdcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPSfQn9GA0LjQtNGD0LzQsNC50YLQtSDQv9Cw0YDQvtC70YwnLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGNsYXNzTmFtZT0nc2luZ2xlYnRuJ1xyXG4gICAgICAgICAgdHlwZT0nc3VibWl0J1xyXG4gICAgICAgICAgY2xhc3NOYW1lPSdidXR0b24nXHJcbiAgICAgICAgICB2YWx1ZT0n0J7RgtC/0YDQsNCy0LjRgtGMJy8+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlyc3RTdGVwIl0sInNvdXJjZVJvb3QiOiIifQ==