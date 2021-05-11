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
/* harmony import */ var _defaults_extraFunction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../defaults/extraFunction */ "./defaults/extraFunction.js");
/* harmony import */ var _defaults_validations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../defaults/validations */ "./defaults/validations.js");
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
    password: ''
  }),
      errors = _useState2[0],
      setErrors = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      modal = _useState3[0],
      setModal = _useState3[1];

  var sendIdentifiaction = function sendIdentifiaction() {
    axios__WEBPACK_IMPORTED_MODULE_2___default().get("".concat("https://crediter.kz/api", "/identification"), {
      params: {
        fio: formData.fio,
        phone: (0,_defaults_extraFunction__WEBPACK_IMPORTED_MODULE_5__.replaceDate)(formData.phone),
        email: formData.email,
        password: formData.password,
        type: formData.type
      }
    }).then(function (res) {
      if (res.data.success) {
        setModal(true);
      }
    });
  };

  var _onSubmit = function onSubmit(e) {
    e.preventDefault();
    setErrors(_objectSpread(_objectSpread({}, errors), {}, {
      email: (0,_defaults_validations__WEBPACK_IMPORTED_MODULE_6__.emailValid)(formData.email),
      fio: (0,_defaults_validations__WEBPACK_IMPORTED_MODULE_6__.required)(formData.fio),
      phone: (0,_defaults_validations__WEBPACK_IMPORTED_MODULE_6__.phoneValidation)(formData.phone),
      password: (0,_defaults_validations__WEBPACK_IMPORTED_MODULE_6__.passwordValid)(formData.password)
    }));
    sendIdentifiaction();
  };

  var _onChange = function onChange(e) {
    var name = e.target.name;
    setFormData(_objectSpread(_objectSpread({}, formData), {}, (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, name, e.target.value)));
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "form_register",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      onSubmit: function onSubmit(e) {
        return _onSubmit(e);
      },
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
        lineNumber: 53,
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
        lineNumber: 59,
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
        lineNumber: 68,
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
        lineNumber: 77,
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
        lineNumber: 83,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", (_jsxDEV2 = {
        className: "singlebtn",
        type: "submit"
      }, (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_jsxDEV2, "className", "button"), (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_jsxDEV2, "value", "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"), _jsxDEV2), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 5
  }, _this);
};

_s(FirstStep, "b/zH8eCtUD10oyeQp5KCubdN1Mk=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRzZXJ2aWNlL0ZpcnN0U3RlcC5qcyJdLCJuYW1lcyI6WyJGaXJzdFN0ZXAiLCJ1c2VTdGF0ZSIsImVtYWlsIiwicGhvbmUiLCJmaW8iLCJwYXNzd29yZCIsInR5cGUiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwibW9kYWwiLCJzZXRNb2RhbCIsInNlbmRJZGVudGlmaWFjdGlvbiIsImF4aW9zIiwicHJvY2VzcyIsInBhcmFtcyIsInJlcGxhY2VEYXRlIiwidGhlbiIsInJlcyIsImRhdGEiLCJzdWNjZXNzIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJlbWFpbFZhbGlkIiwicmVxdWlyZWQiLCJwaG9uZVZhbGlkYXRpb24iLCJwYXNzd29yZFZhbGlkIiwib25DaGFuZ2UiLCJuYW1lIiwidGFyZ2V0IiwidmFsdWUiLCJpaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUFBOztBQUFBLGtCQUVMQywrQ0FBUSxDQUFDO0FBQUNDLFNBQUssRUFBRSxFQUFSO0FBQVlDLFNBQUssRUFBRSxFQUFuQjtBQUF1QkMsT0FBRyxFQUFFLEVBQTVCO0FBQWdDQyxZQUFRLEVBQUUsRUFBMUM7QUFBOENDLFFBQUksRUFBRTtBQUFwRCxHQUFELENBRkg7QUFBQSxNQUNmQyxRQURlO0FBQUEsTUFFcEJDLFdBRm9COztBQUFBLG1CQUlQUCwrQ0FBUSxDQUFDO0FBQUNDLFNBQUssRUFBRSxFQUFSO0FBQVlDLFNBQUssRUFBRSxFQUFuQjtBQUF1QkMsT0FBRyxFQUFFLEVBQTVCO0FBQWdDQyxZQUFRLEVBQUU7QUFBMUMsR0FBRCxDQUpEO0FBQUEsTUFHZkksTUFIZTtBQUFBLE1BSXBCQyxTQUpvQjs7QUFB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QUFJLEVBQUMsS0FQUDtBQVFFLGlCQUFTLEVBQUM7QUFSWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBakJGLGVBMEJFO0FBQ0UsWUFBSSxFQUFDLE1BRFA7QUFFRSxZQUFJLEVBQUMsT0FGUDtBQUdFLGFBQUssRUFBRWhCLFFBQVEsQ0FBQ0wsS0FIbEI7QUFJRSxnQkFBUSxFQUFFLGtCQUFBcUIsQ0FBQztBQUFBLGlCQUFJTSxTQUFRLENBQUNOLENBQUQsQ0FBWjtBQUFBLFNBSmI7QUFLRSxtQkFBVyxFQUFDO0FBTGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTFCRixlQWdDRTtBQUNFLFlBQUksRUFBQyxVQURQO0FBRUUsYUFBSyxFQUFFaEIsUUFBUSxDQUFDRixRQUZsQjtBQUdFLGdCQUFRLEVBQUUsa0JBQUFrQixDQUFDO0FBQUEsaUJBQUlNLFNBQVEsQ0FBQ04sQ0FBRCxDQUFaO0FBQUEsU0FIYjtBQUlFLFlBQUksRUFBQyxVQUpQO0FBS0UsbUJBQVcsRUFBQztBQUxkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFoQ0YsZUFzQ0U7QUFDRSxpQkFBUyxFQUFDLFdBRFo7QUFFRSxZQUFJLEVBQUM7QUFGUCxpSkFHWSxRQUhaLHVJQUlRLHdEQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF0Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZ0RELENBM0ZEOztHQUFNdkIsUzs7S0FBQUEsUztBQTZGTiwrREFBZUEsU0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9nZXRzZXJ2aWNlLjUxZTRlYmQ5ZTc5OTcxZTI1YTg4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSW5wdXRNYXNrIGZyb20gJ3JlYWN0LWlucHV0LW1hc2snXHJcbmltcG9ydCB7IHJlcGxhY2VEYXRlIH0gZnJvbSAnLi4vLi4vZGVmYXVsdHMvZXh0cmFGdW5jdGlvbidcclxuaW1wb3J0IHtlbWFpbFZhbGlkLCByZXF1aXJlZCwgcGhvbmVWYWxpZGF0aW9uLCBwYXNzd29yZFZhbGlkfSBmcm9tICcuLi8uLi9kZWZhdWx0cy92YWxpZGF0aW9ucydcclxuY29uc3QgRmlyc3RTdGVwID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtmb3JtRGF0YSxcclxuICAgIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtlbWFpbDogJycsIHBob25lOiAnJywgZmlvOiAnJywgcGFzc3dvcmQ6ICcnLCB0eXBlOiAn0KTQuNC3INC70LjRhtC+J30pXHJcbiAgY29uc3QgW2Vycm9ycyxcclxuICAgIHNldEVycm9yc10gPSB1c2VTdGF0ZSh7ZW1haWw6ICcnLCBwaG9uZTogJycsIGZpbzogJycsIHBhc3N3b3JkOiAnJ30pXHJcbiAgY29uc3QgW21vZGFsLCBzZXRNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgY29uc3Qgc2VuZElkZW50aWZpYWN0aW9uID0gKCkgPT4ge1xyXG4gICAgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9pZGVudGlmaWNhdGlvbmAsIHtcclxuICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgZmlvOiBmb3JtRGF0YS5maW8sXHJcbiAgICAgICAgcGhvbmU6IHJlcGxhY2VEYXRlKGZvcm1EYXRhLnBob25lKSxcclxuICAgICAgICBlbWFpbDogZm9ybURhdGEuZW1haWwsXHJcbiAgICAgICAgcGFzc3dvcmQ6IGZvcm1EYXRhLnBhc3N3b3JkLFxyXG4gICAgICAgIHR5cGU6IGZvcm1EYXRhLnR5cGVcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgICAgLnRoZW4ocmVzPT4ge1xyXG4gICAgICAgIGlmKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgIHNldE1vZGFsKHRydWUpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gIH1cclxuICBjb25zdCBvblN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHNldEVycm9ycyh7XHJcbiAgICAgIC4uLmVycm9ycyxcclxuICAgICAgZW1haWw6IGVtYWlsVmFsaWQoZm9ybURhdGEuZW1haWwpLFxyXG4gICAgICBmaW86IHJlcXVpcmVkKGZvcm1EYXRhLmZpbyksXHJcbiAgICAgIHBob25lOiBwaG9uZVZhbGlkYXRpb24oZm9ybURhdGEucGhvbmUpLFxyXG4gICAgICBwYXNzd29yZDogcGFzc3dvcmRWYWxpZChmb3JtRGF0YS5wYXNzd29yZClcclxuICAgIH0pXHJcbiAgICBcclxuICAgIHNlbmRJZGVudGlmaWFjdGlvbigpXHJcbiAgfVxyXG5cclxuICBjb25zdCBvbkNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBuYW1lID0gZS50YXJnZXQubmFtZTtcclxuICAgIHNldEZvcm1EYXRhKHtcclxuICAgICAgLi4uZm9ybURhdGEsXHJcbiAgICAgIFtuYW1lXTogZS50YXJnZXQudmFsdWVcclxuICAgIH0pXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybV9yZWdpc3Rlcic+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSkgPT4gb25TdWJtaXQoZSl9PlxyXG4gICAgICAgIHsvKiA8aW5wdXQgdHlwZT0ndGV4dCcgbmFtZT0nb3JnYW5pemF0aW9uJyBwbGFjZWhvbGRlcj0n0J3QsNC40LzQtdC90L7QstCw0L3QuNC1INC+0YDQs9Cw0L3QuNC30LDRhtC40LgnIC8+ICovfVxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgIG5hbWU9J2ZpbydcclxuICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5maW99XHJcbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBvbkNoYW5nZShlKX1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPSfQpNCw0LzQuNC70LjRjyDQmNC80Y8nLz4gey8qIDxpbnB1dCB0eXBlPSd0ZXh0JyBuYW1lPSdwb3NpdGlvbicgcGxhY2Vob2xkZXI9J9CX0LDQvdC40LzQsNC10LzQsNGPINC00L7Qu9C20L3QvtGB0YLRjCcgLz4gKi99XHJcbiAgICAgICAgPElucHV0TWFza1xyXG4gICAgICAgICAgbWFzaz1cIis3KDk5OSktOTk5LTk5OTlcIlxyXG4gICAgICAgICAgbWFza0NoYXI9XCIgXCJcclxuICAgICAgICAgIG5hbWU9J3Bob25lJ1xyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J9Ci0LXQu9C10YTQvtC9INC90L7QvNC10YAnXHJcbiAgICAgICAgICB0eXBlPSd0ZWwnXHJcbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBvbkNoYW5nZShlKX1cclxuICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5waG9uZX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm15LWlucHV0XCIvPlxyXG4gICAgICAgIDxJbnB1dE1hc2tcclxuICAgICAgICAgIG1hc2s9XCI5OTk5OTk5OTk5OTlcIlxyXG4gICAgICAgICAgbWFza0NoYXI9XCIgXCJcclxuICAgICAgICAgIG5hbWU9J2lpbidcclxuICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5paW59XHJcbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBvbkNoYW5nZShlKX1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPSfQmNCY0J0nXHJcbiAgICAgICAgICB0eXBlPSd0ZWwnXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJteS1pbnB1dFwiLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICBuYW1lPSdlbWFpbCdcclxuICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5lbWFpbH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IG9uQ2hhbmdlKGUpfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J0VtYWlsJy8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPSdwYXNzd29yZCdcclxuICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5wYXNzd29yZH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IG9uQ2hhbmdlKGUpfVxyXG4gICAgICAgICAgbmFtZT0ncGFzc3dvcmQnXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj0n0J/RgNC40LTRg9C80LDQudGC0LUg0L/QsNGA0L7Qu9GMJy8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9J3NpbmdsZWJ0bidcclxuICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcclxuICAgICAgICAgIGNsYXNzTmFtZT0nYnV0dG9uJ1xyXG4gICAgICAgICAgdmFsdWU9J9Ce0YLQv9GA0LDQstC40YLRjCcvPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpcnN0U3RlcCJdLCJzb3VyY2VSb290IjoiIn0=