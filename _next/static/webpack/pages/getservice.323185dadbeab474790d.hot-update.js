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
/* harmony import */ var _shared_CodeModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/CodeModal */ "./components/shared/CodeModal.js");
/* harmony import */ var _defaults_extraFunction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../defaults/extraFunction */ "./defaults/extraFunction.js");
/* harmony import */ var _defaults_validations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../defaults/validations */ "./defaults/validations.js");
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

  var closeModal = function closeModal() {
    setModal(false);
  };

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      code = _useState4[0],
      setCode = _useState4[1];

  var getIdentification = function getIdentification() {
    axios__WEBPACK_IMPORTED_MODULE_2___default().get("".concat("https://crediter.kz/api", "/identification"), {
      params: {
        fio: formData.fio,
        phone: (0,_defaults_extraFunction__WEBPACK_IMPORTED_MODULE_6__.replaceDate)(formData.phone),
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

  var firstStep = function firstStep() {
    axios__WEBPACK_IMPORTED_MODULE_2___default().get("".concat("https://crediter.kz/api", "/stepOne"), {
      params: {
        fio: formData.fio,
        phone: (0,_defaults_extraFunction__WEBPACK_IMPORTED_MODULE_6__.replaceDate)(formData.phone),
        email: formData.email,
        password: formData.password,
        type: formData.type
      }
    }).then(function (res) {
      console.log(res);
    });
  };

  var _onSubmit = function onSubmit(e) {
    e.preventDefault();
    setErrors(_objectSpread(_objectSpread({}, errors), {}, {
      email: (0,_defaults_validations__WEBPACK_IMPORTED_MODULE_7__.emailValid)(formData.email),
      fio: (0,_defaults_validations__WEBPACK_IMPORTED_MODULE_7__.required)(formData.fio),
      phone: (0,_defaults_validations__WEBPACK_IMPORTED_MODULE_7__.phoneValidation)(formData.phone),
      password: (0,_defaults_validations__WEBPACK_IMPORTED_MODULE_7__.passwordValid)(formData.password)
    }));
    getIdentification();
  };

  var _onChange = function onChange(e) {
    var name = e.target.name;
    setFormData(_objectSpread(_objectSpread({}, formData), {}, (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, name, e.target.value)));
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "form_register",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_CodeModal__WEBPACK_IMPORTED_MODULE_5__.default, {
        isModalOpen: modal,
        closeModal: closeModal,
        code: code,
        setCode: setCode,
        onFirstStep: firstStep
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
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
          lineNumber: 78,
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
          lineNumber: 84,
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
          lineNumber: 93,
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
          lineNumber: 102,
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
          lineNumber: 108,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", (_jsxDEV2 = {
          className: "singlebtn",
          type: "submit"
        }, (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_jsxDEV2, "className", "button"), (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_jsxDEV2, "value", "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"), _jsxDEV2), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 5
  }, _this);
};

_s(FirstStep, "yDxpe5aQyLbArq3naPvQEH/qmaI=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRzZXJ2aWNlL0ZpcnN0U3RlcC5qcyJdLCJuYW1lcyI6WyJGaXJzdFN0ZXAiLCJ1c2VTdGF0ZSIsImVtYWlsIiwicGhvbmUiLCJmaW8iLCJwYXNzd29yZCIsInR5cGUiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwibW9kYWwiLCJzZXRNb2RhbCIsImNsb3NlTW9kYWwiLCJjb2RlIiwic2V0Q29kZSIsImdldElkZW50aWZpY2F0aW9uIiwiYXhpb3MiLCJwcm9jZXNzIiwicGFyYW1zIiwicmVwbGFjZURhdGUiLCJ0aGVuIiwicmVzIiwiZGF0YSIsInN1Y2Nlc3MiLCJmaXJzdFN0ZXAiLCJjb25zb2xlIiwibG9nIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJlbWFpbFZhbGlkIiwicmVxdWlyZWQiLCJwaG9uZVZhbGlkYXRpb24iLCJwYXNzd29yZFZhbGlkIiwib25DaGFuZ2UiLCJuYW1lIiwidGFyZ2V0IiwidmFsdWUiLCJpaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUFBOztBQUFBLGtCQUVMQywrQ0FBUSxDQUFDO0FBQUNDLFNBQUssRUFBRSxFQUFSO0FBQVlDLFNBQUssRUFBRSxFQUFuQjtBQUF1QkMsT0FBRyxFQUFFLEVBQTVCO0FBQWdDQyxZQUFRLEVBQUUsRUFBMUM7QUFBOENDLFFBQUksRUFBRTtBQUFwRCxHQUFELENBRkg7QUFBQSxNQUNmQyxRQURlO0FBQUEsTUFFcEJDLFdBRm9COztBQUFBLG1CQUlQUCwrQ0FBUSxDQUFDO0FBQUNDLFNBQUssRUFBRSxFQUFSO0FBQVlDLFNBQUssRUFBRSxFQUFuQjtBQUF1QkMsT0FBRyxFQUFFLEVBQTVCO0FBQWdDQyxZQUFRLEVBQUU7QUFBMUMsR0FBRCxDQUpEO0FBQUEsTUFHZkksTUFIZTtBQUFBLE1BSXBCQyxTQUpvQjs7QUFBQSxtQkFNSVQsK0NBQVEsQ0FBQyxLQUFELENBTlo7QUFBQSxNQU1mVSxLQU5lO0FBQUEsTUFNUkMsUUFOUTs7QUFRdEIsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2QkQsWUFBUSxDQUFDLEtBQUQsQ0FBUjtBQUNELEdBRkQ7O0FBUnNCLG1CQVlDWCwrQ0FBUSxDQUFDLEVBQUQsQ0FaVDtBQUFBLE1BWWZhLElBWmU7QUFBQSxNQVlWQyxPQVpVOztBQWF0QixNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFDOUJDLG9EQUFBLFdBQWFDLHlCQUFiLHNCQUFvRDtBQUNsREMsWUFBTSxFQUFFO0FBQ05mLFdBQUcsRUFBRUcsUUFBUSxDQUFDSCxHQURSO0FBRU5ELGFBQUssRUFBRWlCLG9FQUFXLENBQUNiLFFBQVEsQ0FBQ0osS0FBVixDQUZaO0FBR05ELGFBQUssRUFBRUssUUFBUSxDQUFDTCxLQUhWO0FBSU5HLGdCQUFRLEVBQUVFLFFBQVEsQ0FBQ0YsUUFKYjtBQUtOQyxZQUFJLEVBQUVDLFFBQVEsQ0FBQ0Q7QUFMVDtBQUQwQyxLQUFwRCxFQVNHZSxJQVRILENBU1EsVUFBQUMsR0FBRyxFQUFHO0FBQ1YsVUFBR0EsR0FBRyxDQUFDQyxJQUFKLENBQVNDLE9BQVosRUFBcUI7QUFDbkJaLGdCQUFRLENBQUMsSUFBRCxDQUFSO0FBQ0Q7QUFDRixLQWJIO0FBY0QsR0FmRDs7QUFpQkEsTUFBTWEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUN0QlIsb0RBQUEsV0FBYUMseUJBQWIsZUFBNkM7QUFDM0NDLFlBQU0sRUFBRTtBQUNOZixXQUFHLEVBQUVHLFFBQVEsQ0FBQ0gsR0FEUjtBQUVORCxhQUFLLEVBQUVpQixvRUFBVyxDQUFDYixRQUFRLENBQUNKLEtBQVYsQ0FGWjtBQUdORCxhQUFLLEVBQUVLLFFBQVEsQ0FBQ0wsS0FIVjtBQUlORyxnQkFBUSxFQUFFRSxRQUFRLENBQUNGLFFBSmI7QUFLTkMsWUFBSSxFQUFFQyxRQUFRLENBQUNEO0FBTFQ7QUFEbUMsS0FBN0MsRUFTR2UsSUFUSCxDQVNRLFVBQUFDLEdBQUcsRUFBRztBQUNWSSxhQUFPLENBQUNDLEdBQVIsQ0FBWUwsR0FBWjtBQUNELEtBWEg7QUFZRCxHQWJEOztBQWVBLE1BQU1NLFNBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLENBQUQsRUFBTztBQUN0QkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FwQixhQUFTLGlDQUNKRCxNQURJO0FBRVBQLFdBQUssRUFBRTZCLGlFQUFVLENBQUN4QixRQUFRLENBQUNMLEtBQVYsQ0FGVjtBQUdQRSxTQUFHLEVBQUU0QiwrREFBUSxDQUFDekIsUUFBUSxDQUFDSCxHQUFWLENBSE47QUFJUEQsV0FBSyxFQUFFOEIsc0VBQWUsQ0FBQzFCLFFBQVEsQ0FBQ0osS0FBVixDQUpmO0FBS1BFLGNBQVEsRUFBRTZCLG9FQUFhLENBQUMzQixRQUFRLENBQUNGLFFBQVY7QUFMaEIsT0FBVDtBQVFBVyxxQkFBaUI7QUFDbEIsR0FYRDs7QUFhQSxNQUFNbUIsU0FBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ04sQ0FBRCxFQUFPO0FBQ3RCLFFBQU1PLElBQUksR0FBR1AsQ0FBQyxDQUFDUSxNQUFGLENBQVNELElBQXRCO0FBQ0E1QixlQUFXLGlDQUNORCxRQURNLDRIQUVSNkIsSUFGUSxFQUVEUCxDQUFDLENBQUNRLE1BQUYsQ0FBU0MsS0FGUixHQUFYO0FBSUQsR0FORDs7QUFPQSxzQkFDRTtBQUFBLDJCQUNBO0FBQUssZUFBUyxFQUFDLGVBQWY7QUFBQSw4QkFDRSw4REFBQyxzREFBRDtBQUFXLG1CQUFXLEVBQUUzQixLQUF4QjtBQUErQixrQkFBVSxFQUFFRSxVQUEzQztBQUF1RCxZQUFJLEVBQUVDLElBQTdEO0FBQW1FLGVBQU8sRUFBRUMsT0FBNUU7QUFBcUYsbUJBQVcsRUFBRVU7QUFBbEc7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBTSxnQkFBUSxFQUFFLGtCQUFDSSxDQUFEO0FBQUEsaUJBQU9ELFNBQVEsQ0FBQ0MsQ0FBRCxDQUFmO0FBQUEsU0FBaEI7QUFBQSxnQ0FFRTtBQUNFLGNBQUksRUFBQyxNQURQO0FBRUUsY0FBSSxFQUFDLEtBRlA7QUFHRSxlQUFLLEVBQUV0QixRQUFRLENBQUNILEdBSGxCO0FBSUUsa0JBQVEsRUFBRSxrQkFBQXlCLENBQUM7QUFBQSxtQkFBSU0sU0FBUSxDQUFDTixDQUFELENBQVo7QUFBQSxXQUpiO0FBS0UscUJBQVcsRUFBQztBQUxkO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsb0JBUUUsOERBQUMseURBQUQ7QUFDRSxjQUFJLEVBQUMsa0JBRFA7QUFFRSxrQkFBUSxFQUFDLEdBRlg7QUFHRSxjQUFJLEVBQUMsT0FIUDtBQUlFLHFCQUFXLEVBQUMsMkVBSmQ7QUFLRSxjQUFJLEVBQUMsS0FMUDtBQU1FLGtCQUFRLEVBQUUsa0JBQUFBLENBQUM7QUFBQSxtQkFBSU0sU0FBUSxDQUFDTixDQUFELENBQVo7QUFBQSxXQU5iO0FBT0UsZUFBSyxFQUFFdEIsUUFBUSxDQUFDSixLQVBsQjtBQVFFLG1CQUFTLEVBQUM7QUFSWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJGLGVBaUJFLDhEQUFDLHlEQUFEO0FBQ0UsY0FBSSxFQUFDLGNBRFA7QUFFRSxrQkFBUSxFQUFDLEdBRlg7QUFHRSxjQUFJLEVBQUMsS0FIUDtBQUlFLGVBQUssRUFBRUksUUFBUSxDQUFDZ0MsR0FKbEI7QUFLRSxrQkFBUSxFQUFFLGtCQUFBVixDQUFDO0FBQUEsbUJBQUlNLFNBQVEsQ0FBQ04sQ0FBRCxDQUFaO0FBQUEsV0FMYjtBQU1FLHFCQUFXLEVBQUMsb0JBTmQ7QUFPRSxjQUFJLEVBQUMsS0FQUDtBQVFFLG1CQUFTLEVBQUM7QUFSWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWpCRixlQTBCRTtBQUNFLGNBQUksRUFBQyxNQURQO0FBRUUsY0FBSSxFQUFDLE9BRlA7QUFHRSxlQUFLLEVBQUV0QixRQUFRLENBQUNMLEtBSGxCO0FBSUUsa0JBQVEsRUFBRSxrQkFBQTJCLENBQUM7QUFBQSxtQkFBSU0sU0FBUSxDQUFDTixDQUFELENBQVo7QUFBQSxXQUpiO0FBS0UscUJBQVcsRUFBQztBQUxkO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBMUJGLGVBZ0NFO0FBQ0UsY0FBSSxFQUFDLFVBRFA7QUFFRSxlQUFLLEVBQUV0QixRQUFRLENBQUNGLFFBRmxCO0FBR0Usa0JBQVEsRUFBRSxrQkFBQXdCLENBQUM7QUFBQSxtQkFBSU0sU0FBUSxDQUFDTixDQUFELENBQVo7QUFBQSxXQUhiO0FBSUUsY0FBSSxFQUFDLFVBSlA7QUFLRSxxQkFBVyxFQUFDO0FBTGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoQ0YsZUFzQ0U7QUFDRSxtQkFBUyxFQUFDLFdBRFo7QUFFRSxjQUFJLEVBQUM7QUFGUCxtSkFHWSxRQUhaLHVJQUlRLHdEQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBdENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXFERCxDQXRIRDs7R0FBTTdCLFM7O0tBQUFBLFM7QUF3SE4sK0RBQWVBLFNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ2V0c2VydmljZS4zMjMxODVkYWRiZWFiNDc0NzkwZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IElucHV0TWFzayBmcm9tICdyZWFjdC1pbnB1dC1tYXNrJ1xyXG5pbXBvcnQgQ29kZU1vZGFsIGZyb20gJy4uL3NoYXJlZC9Db2RlTW9kYWwnXHJcbmltcG9ydCB7IHJlcGxhY2VEYXRlIH0gZnJvbSAnLi4vLi4vZGVmYXVsdHMvZXh0cmFGdW5jdGlvbidcclxuaW1wb3J0IHtlbWFpbFZhbGlkLCByZXF1aXJlZCwgcGhvbmVWYWxpZGF0aW9uLCBwYXNzd29yZFZhbGlkfSBmcm9tICcuLi8uLi9kZWZhdWx0cy92YWxpZGF0aW9ucydcclxuY29uc3QgRmlyc3RTdGVwID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtmb3JtRGF0YSxcclxuICAgIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtlbWFpbDogJycsIHBob25lOiAnJywgZmlvOiAnJywgcGFzc3dvcmQ6ICcnLCB0eXBlOiAn0KTQuNC3INC70LjRhtC+J30pXHJcbiAgY29uc3QgW2Vycm9ycyxcclxuICAgIHNldEVycm9yc10gPSB1c2VTdGF0ZSh7ZW1haWw6ICcnLCBwaG9uZTogJycsIGZpbzogJycsIHBhc3N3b3JkOiAnJ30pXHJcbiAgXHJcbiAgY29uc3QgW21vZGFsLCBzZXRNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBcclxuICBjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0TW9kYWwoZmFsc2UpXHJcbiAgfVxyXG5cclxuICBjb25zdCBbY29kZSxzZXRDb2RlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBnZXRJZGVudGlmaWNhdGlvbiA9ICgpID0+IHtcclxuICAgIGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vaWRlbnRpZmljYXRpb25gLCB7XHJcbiAgICAgIHBhcmFtczoge1xyXG4gICAgICAgIGZpbzogZm9ybURhdGEuZmlvLFxyXG4gICAgICAgIHBob25lOiByZXBsYWNlRGF0ZShmb3JtRGF0YS5waG9uZSksXHJcbiAgICAgICAgZW1haWw6IGZvcm1EYXRhLmVtYWlsLFxyXG4gICAgICAgIHBhc3N3b3JkOiBmb3JtRGF0YS5wYXNzd29yZCxcclxuICAgICAgICB0eXBlOiBmb3JtRGF0YS50eXBlXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAgIC50aGVuKHJlcz0+IHtcclxuICAgICAgICBpZihyZXMuZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICBzZXRNb2RhbCh0cnVlKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGZpcnN0U3RlcCA9ICgpID0+IHtcclxuICAgIGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vc3RlcE9uZWAsIHtcclxuICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgZmlvOiBmb3JtRGF0YS5maW8sXHJcbiAgICAgICAgcGhvbmU6IHJlcGxhY2VEYXRlKGZvcm1EYXRhLnBob25lKSxcclxuICAgICAgICBlbWFpbDogZm9ybURhdGEuZW1haWwsXHJcbiAgICAgICAgcGFzc3dvcmQ6IGZvcm1EYXRhLnBhc3N3b3JkLFxyXG4gICAgICAgIHR5cGU6IGZvcm1EYXRhLnR5cGVcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgICAgLnRoZW4ocmVzPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgc2V0RXJyb3JzKHtcclxuICAgICAgLi4uZXJyb3JzLFxyXG4gICAgICBlbWFpbDogZW1haWxWYWxpZChmb3JtRGF0YS5lbWFpbCksXHJcbiAgICAgIGZpbzogcmVxdWlyZWQoZm9ybURhdGEuZmlvKSxcclxuICAgICAgcGhvbmU6IHBob25lVmFsaWRhdGlvbihmb3JtRGF0YS5waG9uZSksXHJcbiAgICAgIHBhc3N3b3JkOiBwYXNzd29yZFZhbGlkKGZvcm1EYXRhLnBhc3N3b3JkKVxyXG4gICAgfSlcclxuXHJcbiAgICBnZXRJZGVudGlmaWNhdGlvbigpXHJcbiAgfVxyXG5cclxuICBjb25zdCBvbkNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBuYW1lID0gZS50YXJnZXQubmFtZTtcclxuICAgIHNldEZvcm1EYXRhKHtcclxuICAgICAgLi4uZm9ybURhdGEsXHJcbiAgICAgIFtuYW1lXTogZS50YXJnZXQudmFsdWVcclxuICAgIH0pXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2Zvcm1fcmVnaXN0ZXInPlxyXG4gICAgICA8Q29kZU1vZGFsIGlzTW9kYWxPcGVuPXttb2RhbH0gY2xvc2VNb2RhbD17Y2xvc2VNb2RhbH0gY29kZT17Y29kZX0gc2V0Q29kZT17c2V0Q29kZX0gb25GaXJzdFN0ZXA9e2ZpcnN0U3RlcH0gLz5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKSA9PiBvblN1Ym1pdChlKX0+XHJcbiAgICAgICAgey8qIDxpbnB1dCB0eXBlPSd0ZXh0JyBuYW1lPSdvcmdhbml6YXRpb24nIHBsYWNlaG9sZGVyPSfQndCw0LjQvNC10L3QvtCy0LDQvdC40LUg0L7RgNCz0LDQvdC40LfQsNGG0LjQuCcgLz4gKi99XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgbmFtZT0nZmlvJ1xyXG4gICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmZpb31cclxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IG9uQ2hhbmdlKGUpfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J9Ck0LDQvNC40LvQuNGPINCY0LzRjycvPiB7LyogPGlucHV0IHR5cGU9J3RleHQnIG5hbWU9J3Bvc2l0aW9uJyBwbGFjZWhvbGRlcj0n0JfQsNC90LjQvNCw0LXQvNCw0Y8g0LTQvtC70LbQvdC+0YHRgtGMJyAvPiAqL31cclxuICAgICAgICA8SW5wdXRNYXNrXHJcbiAgICAgICAgICBtYXNrPVwiKzcoOTk5KS05OTktOTk5OVwiXHJcbiAgICAgICAgICBtYXNrQ2hhcj1cIiBcIlxyXG4gICAgICAgICAgbmFtZT0ncGhvbmUnXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj0n0KLQtdC70LXRhNC+0L0g0L3QvtC80LXRgCdcclxuICAgICAgICAgIHR5cGU9J3RlbCdcclxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IG9uQ2hhbmdlKGUpfVxyXG4gICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLnBob25lfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibXktaW5wdXRcIi8+XHJcbiAgICAgICAgPElucHV0TWFza1xyXG4gICAgICAgICAgbWFzaz1cIjk5OTk5OTk5OTk5OVwiXHJcbiAgICAgICAgICBtYXNrQ2hhcj1cIiBcIlxyXG4gICAgICAgICAgbmFtZT0naWluJ1xyXG4gICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmlpbn1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IG9uQ2hhbmdlKGUpfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J9CY0JjQnSdcclxuICAgICAgICAgIHR5cGU9J3RlbCdcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm15LWlucHV0XCIvPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgIG5hbWU9J2VtYWlsJ1xyXG4gICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmVtYWlsfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gb25DaGFuZ2UoZSl9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj0nRW1haWwnLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9J3Bhc3N3b3JkJ1xyXG4gICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLnBhc3N3b3JkfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gb25DaGFuZ2UoZSl9XHJcbiAgICAgICAgICBuYW1lPSdwYXNzd29yZCdcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPSfQn9GA0LjQtNGD0LzQsNC50YLQtSDQv9Cw0YDQvtC70YwnLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGNsYXNzTmFtZT0nc2luZ2xlYnRuJ1xyXG4gICAgICAgICAgdHlwZT0nc3VibWl0J1xyXG4gICAgICAgICAgY2xhc3NOYW1lPSdidXR0b24nXHJcbiAgICAgICAgICB2YWx1ZT0n0J7RgtC/0YDQsNCy0LjRgtGMJy8+XHJcbiAgICAgICAgXHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpcnN0U3RlcCJdLCJzb3VyY2VSb290IjoiIn0=