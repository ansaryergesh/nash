self["webpackHotUpdate_N_E"]("pages/getservice",{

/***/ "./components/getservice/FirstStep.js":
/*!********************************************!*\
  !*** ./components/getservice/FirstStep.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var E_job_nashcompany_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-input-mask */ "./node_modules/react-input-mask/index.js");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_CodeModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/CodeModal */ "./components/shared/CodeModal.js");
/* harmony import */ var _defaults_extraFunction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../defaults/extraFunction */ "./defaults/extraFunction.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var disable_scroll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! disable-scroll */ "./node_modules/disable-scroll/esm/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _defaults_validations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../defaults/validations */ "./defaults/validations.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _loader_Loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../loader/Loader */ "./components/loader/Loader.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "E:\\job\\nashcompany\\components\\getservice\\FirstStep.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }













var PhoneMask = function PhoneMask(_ref) {
  var field = _ref.field,
      form = _ref.form,
      props = (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.default)(_ref, ["field", "form"]);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react_input_mask__WEBPACK_IMPORTED_MODULE_5___default()), _objectSpread(_objectSpread({
    mask: "+7(999)-999-9999",
    maskChar: " ",
    className: "my-input"
  }, field), props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 49
  }, _this);
};

_c = PhoneMask;

var IinMask = function IinMask(_ref2) {
  var field = _ref2.field,
      form = _ref2.form,
      props = (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.default)(_ref2, ["field", "form"]);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react_input_mask__WEBPACK_IMPORTED_MODULE_5___default()), _objectSpread(_objectSpread({
    mask: "999999999999",
    maskChar: " ",
    className: "my-input"
  }, field), props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 47
  }, _this);
};

_c2 = IinMask;

var FirstStep = function FirstStep(_ref3) {
  _s();

  var setLoading = _ref3.setLoading;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({
    email: '',
    phone: '',
    fio: '',
    password: '',
    type: 'Физ лицо'
  }),
      formData = _useState[0],
      setFormData = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({
    email: '',
    phone: '',
    fio: '',
    password: ''
  }),
      errors = _useState2[0],
      setErrors = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true),
      modal = _useState3[0],
      setModal = _useState3[1];

  var closeModal = function closeModal() {
    setModal(false);
  };

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      code = _useState4[0],
      setCode = _useState4[1];

  var getIdentification = function getIdentification() {
    setLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_3___default().get("".concat("https://crediter.kz/api", "/identification"), {
      params: {
        fio: formData.fio,
        phone: (0,_defaults_extraFunction__WEBPACK_IMPORTED_MODULE_7__.replaceDate)(formData.phone),
        email: formData.email,
        password: formData.password,
        type: formData.type
      }
    }).then(function (res) {
      setLoading(false);

      if (res.data.success) {
        setModal(true); // disableScroll.on();
      }
    });
  };

  var firstStep = function firstStep() {
    setLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_3___default().get("".concat("https://crediter.kz/api", "/stepOne"), {
      params: {
        fio: formData.fio,
        phone: (0,_defaults_extraFunction__WEBPACK_IMPORTED_MODULE_7__.replaceDate)(formData.phone),
        email: formData.email,
        password: formData.password,
        type: formData.type,
        code: code
      }
    }).then(function (res) {
      setLoading(false);

      if (res.data.success) {
        js_cookie__WEBPACK_IMPORTED_MODULE_8___default().set('token', res.data.token);
        js_cookie__WEBPACK_IMPORTED_MODULE_8___default().set('lead_id', res.data.id);
        js_cookie__WEBPACK_IMPORTED_MODULE_8___default().set('step', 2);
        next_router__WEBPACK_IMPORTED_MODULE_12___default().push('/getservice?step=2');
      }
    });
  };

  var onSubmit = function onSubmit(e) {
    e.preventDefault();
    setErrors(_objectSpread(_objectSpread({}, errors), {}, {
      email: (0,_defaults_validations__WEBPACK_IMPORTED_MODULE_11__.emailValid)(formData.email),
      fio: (0,_defaults_validations__WEBPACK_IMPORTED_MODULE_11__.required)(formData.fio),
      phone: (0,_defaults_validations__WEBPACK_IMPORTED_MODULE_11__.phoneValidation)(formData.phone),
      password: (0,_defaults_validations__WEBPACK_IMPORTED_MODULE_11__.passwordValid)(formData.password)
    }));
    getIdentification();
  };

  var onChange = function onChange(e) {
    var name = e.target.name;
    setFormData(_objectSpread(_objectSpread({}, formData), {}, (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, name, e.target.value)));
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "form_register",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_10__.Formik, {
        initialValues: {
          email: '',
          phone: '',
          fio: '',
          password: '',
          type: 'Физ лицо'
        },
        onSubmit: function onSubmit(values) {},
        children: function children(_ref4) {
          var errors = _ref4.errors,
              touched = _ref4.touched;
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_10__.Form, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_10__.Field, {
              type: "text",
              name: "fio",
              validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_11__.acceptCirrilic,
              placeholder: "\u0424\u0418\u041E",
              autocomplete: "off"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 15
            }, _this), errors.fio && touched.fio && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              className: "text-danger",
              children: errors.fio
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 45
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_10__.Field, {
              name: "phone",
              className: "form-control",
              placeholder: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D \u043D\u043E\u043C\u0435\u0440",
              type: "tel",
              validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_11__.phoneCheck,
              component: PhoneMask
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 13
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_shared_CodeModal__WEBPACK_IMPORTED_MODULE_6__.default, {
        isModalOpen: modal,
        closeModal: closeModal,
        code: code,
        setCode: setCode,
        onFirstStep: firstStep,
        getIdentification: getIdentification
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 105,
    columnNumber: 5
  }, _this);
};

_s(FirstStep, "eo8mZQYi0APEUlliWeXyB1u4YoE=");

_c3 = FirstStep;
/* harmony default export */ __webpack_exports__["default"] = (FirstStep);

var _c, _c2, _c3;

$RefreshReg$(_c, "PhoneMask");
$RefreshReg$(_c2, "IinMask");
$RefreshReg$(_c3, "FirstStep");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRzZXJ2aWNlL0ZpcnN0U3RlcC5qcyJdLCJuYW1lcyI6WyJQaG9uZU1hc2siLCJmaWVsZCIsImZvcm0iLCJwcm9wcyIsIklpbk1hc2siLCJGaXJzdFN0ZXAiLCJzZXRMb2FkaW5nIiwidXNlU3RhdGUiLCJlbWFpbCIsInBob25lIiwiZmlvIiwicGFzc3dvcmQiLCJ0eXBlIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsImVycm9ycyIsInNldEVycm9ycyIsIm1vZGFsIiwic2V0TW9kYWwiLCJjbG9zZU1vZGFsIiwiY29kZSIsInNldENvZGUiLCJnZXRJZGVudGlmaWNhdGlvbiIsImF4aW9zIiwicHJvY2VzcyIsInBhcmFtcyIsInJlcGxhY2VEYXRlIiwidGhlbiIsInJlcyIsImRhdGEiLCJzdWNjZXNzIiwiZmlyc3RTdGVwIiwiY29va2llIiwidG9rZW4iLCJpZCIsIlJvdXRlciIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZW1haWxWYWxpZCIsInJlcXVpcmVkIiwicGhvbmVWYWxpZGF0aW9uIiwicGFzc3dvcmRWYWxpZCIsIm9uQ2hhbmdlIiwibmFtZSIsInRhcmdldCIsInZhbHVlIiwidmFsdWVzIiwidG91Y2hlZCIsImFjY2VwdENpcnJpbGljIiwicGhvbmVDaGVjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVk7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxJQUFWLFFBQVVBLElBQVY7QUFBQSxNQUFtQkMsS0FBbkI7O0FBQUEsc0JBQThCLDhEQUFDLHlEQUFEO0FBQ2hELFFBQUksRUFBQyxrQkFEMkM7QUFFOUMsWUFBUSxFQUFFLEdBRm9DO0FB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QTdEO0FBQW1FLGVBQU8sRUFBRUMsT0FBNUU7QUFBcUYsbUJBQVcsRUFBRVUsU0FBbEc7QUFBNkcseUJBQWlCLEVBQUVUO0FBQWhJO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE3QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBa0ZELENBOUpEOztHQUFNakIsUzs7TUFBQUEsUztBQWdLTiwrREFBZUEsU0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9nZXRzZXJ2aWNlLjUzYWUxMDk4ZjUwMDU2MDRhNWEwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSW5wdXRNYXNrIGZyb20gJ3JlYWN0LWlucHV0LW1hc2snXHJcbmltcG9ydCBDb2RlTW9kYWwgZnJvbSAnLi4vc2hhcmVkL0NvZGVNb2RhbCdcclxuaW1wb3J0IHsgcmVwbGFjZURhdGUgfSBmcm9tICcuLi8uLi9kZWZhdWx0cy9leHRyYUZ1bmN0aW9uJ1xyXG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSdcclxuaW1wb3J0IGRpc2FibGVTY3JvbGwgZnJvbSAnZGlzYWJsZS1zY3JvbGwnO1xyXG5pbXBvcnQgeyBGb3JtaWssIEZvcm0sICBGaWVsZCAgfSBmcm9tICdmb3JtaWsnO1xyXG5pbXBvcnQge2VtYWlsVmFsaWQsIHJlcXVpcmVkLCBwaG9uZVZhbGlkYXRpb24sIHBhc3N3b3JkVmFsaWQsIGFjY2VwdENpcnJpbGljLCBwaG9uZUNoZWNrfSBmcm9tICcuLi8uLi9kZWZhdWx0cy92YWxpZGF0aW9ucydcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi9sb2FkZXIvTG9hZGVyJ1xyXG5cclxuY29uc3QgUGhvbmVNYXNrID0gKHsgZmllbGQsIGZvcm0sIC4uLnByb3BzfSkgPT4gPElucHV0TWFzayBcclxubWFzaz1cIis3KDk5OSktOTk5LTk5OTlcIlxyXG4gIG1hc2tDaGFyPSBcIiBcIlxyXG4gIGNsYXNzTmFtZT1cIm15LWlucHV0XCJcclxuICB7Li4uZmllbGR9XHJcbiAgey4uLnByb3BzfSAvPlxyXG5cclxuY29uc3QgSWluTWFzayA9ICh7IGZpZWxkLCBmb3JtLCAuLi5wcm9wc30pID0+IDxJbnB1dE1hc2sgXHJcbiAgbWFzaz1cIjk5OTk5OTk5OTk5OVwiXHJcbiAgICBtYXNrQ2hhcj0gXCIgXCJcclxuICAgIGNsYXNzTmFtZT1cIm15LWlucHV0XCJcclxuICAgIHsuLi5maWVsZH1cclxuICAgIHsuLi5wcm9wc30gLz5cclxuXHJcblxyXG5jb25zdCBGaXJzdFN0ZXAgPSAoe3NldExvYWRpbmd9KSA9PiB7XHJcbiAgY29uc3QgW2Zvcm1EYXRhLFxyXG4gICAgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe2VtYWlsOiAnJywgcGhvbmU6ICcnLCBmaW86ICcnLCBwYXNzd29yZDogJycsIHR5cGU6ICfQpNC40Lcg0LvQuNGG0L4nfSlcclxuICBjb25zdCBbZXJyb3JzLFxyXG4gICAgc2V0RXJyb3JzXSA9IHVzZVN0YXRlKHtlbWFpbDogJycsIHBob25lOiAnJywgZmlvOiAnJywgcGFzc3dvcmQ6ICcnfSlcclxuICBcclxuICBjb25zdCBbbW9kYWwsIHNldE1vZGFsXSA9IHVzZVN0YXRlKHRydWUpXHJcblxyXG4gIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRNb2RhbChmYWxzZSlcclxuICB9XHJcblxyXG4gIGNvbnN0IFtjb2RlLHNldENvZGVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IGdldElkZW50aWZpY2F0aW9uID0gKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9pZGVudGlmaWNhdGlvbmAsIHtcclxuICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgZmlvOiBmb3JtRGF0YS5maW8sXHJcbiAgICAgICAgcGhvbmU6IHJlcGxhY2VEYXRlKGZvcm1EYXRhLnBob25lKSxcclxuICAgICAgICBlbWFpbDogZm9ybURhdGEuZW1haWwsXHJcbiAgICAgICAgcGFzc3dvcmQ6IGZvcm1EYXRhLnBhc3N3b3JkLFxyXG4gICAgICAgIHR5cGU6IGZvcm1EYXRhLnR5cGVcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgICAgLnRoZW4ocmVzPT4ge1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgaWYocmVzLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgc2V0TW9kYWwodHJ1ZSlcclxuICAgICAgICAgIC8vIGRpc2FibGVTY3JvbGwub24oKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBmaXJzdFN0ZXAgPSAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L3N0ZXBPbmVgLCB7XHJcbiAgICAgIHBhcmFtczoge1xyXG4gICAgICAgIGZpbzogZm9ybURhdGEuZmlvLFxyXG4gICAgICAgIHBob25lOiByZXBsYWNlRGF0ZShmb3JtRGF0YS5waG9uZSksXHJcbiAgICAgICAgZW1haWw6IGZvcm1EYXRhLmVtYWlsLFxyXG4gICAgICAgIHBhc3N3b3JkOiBmb3JtRGF0YS5wYXNzd29yZCxcclxuICAgICAgICB0eXBlOiBmb3JtRGF0YS50eXBlLFxyXG4gICAgICAgIGNvZGU6IGNvZGUsXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAgIC50aGVuKHJlcz0+IHtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgIGlmKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgIGNvb2tpZS5zZXQoJ3Rva2VuJywgcmVzLmRhdGEudG9rZW4pXHJcbiAgICAgICAgICBjb29raWUuc2V0KCdsZWFkX2lkJywgcmVzLmRhdGEuaWQpXHJcbiAgICAgICAgICBjb29raWUuc2V0KCdzdGVwJywyKVxyXG4gICAgICAgICAgUm91dGVyLnB1c2goJy9nZXRzZXJ2aWNlP3N0ZXA9MicpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBzZXRFcnJvcnMoe1xyXG4gICAgICAuLi5lcnJvcnMsXHJcbiAgICAgIGVtYWlsOiBlbWFpbFZhbGlkKGZvcm1EYXRhLmVtYWlsKSxcclxuICAgICAgZmlvOiByZXF1aXJlZChmb3JtRGF0YS5maW8pLFxyXG4gICAgICBwaG9uZTogcGhvbmVWYWxpZGF0aW9uKGZvcm1EYXRhLnBob25lKSxcclxuICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkVmFsaWQoZm9ybURhdGEucGFzc3dvcmQpXHJcbiAgICB9KVxyXG5cclxuICAgIGdldElkZW50aWZpY2F0aW9uKClcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IG5hbWUgPSBlLnRhcmdldC5uYW1lO1xyXG4gICAgc2V0Rm9ybURhdGEoe1xyXG4gICAgICAuLi5mb3JtRGF0YSxcclxuICAgICAgW25hbWVdOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgfSlcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybV9yZWdpc3Rlcic+XHJcbiAgICAgIDxGb3JtaWtcclxuICAgICAgICBpbml0aWFsVmFsdWVzPXt7XHJcbiAgICAgICAgICBlbWFpbDonJyxcclxuICAgICAgICAgIHBob25lOiAnJyxcclxuICAgICAgICAgIGZpbzogJycsXHJcbiAgICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgICAgICB0eXBlOiAn0KTQuNC3INC70LjRhtC+J1xyXG4gICAgICAgIH19XHJcbiAgICAgICAgb25TdWJtaXQ9eyh2YWx1ZXMpID0+e1xyXG5cclxuICAgICAgICB9fT5cclxuICAgICAgICAgIHsoeyBlcnJvcnMsIHRvdWNoZWR9KSA9PiAoXHJcbiAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgIDxGaWVsZCB0eXBlPSd0ZXh0JyBuYW1lPSdmaW8nIHZhbGlkYXRlPXthY2NlcHRDaXJyaWxpY30gcGxhY2Vob2xkZXI9J9Ck0JjQnicgYXV0b2NvbXBsZXRlPSdvZmYnLz5cclxuICAgICAgICAgICAgICB7ZXJyb3JzLmZpbyAmJiB0b3VjaGVkLmZpbyAmJiA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz57ZXJyb3JzLmZpb308L3A+fVxyXG5cclxuICAgICAgICAgICAgICA8RmllbGQgXHJcbiAgICAgICAgICAgICAgbmFtZT0ncGhvbmUnXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J9Ci0LXQu9C10YTQvtC9INC90L7QvNC10YAnXHJcbiAgICAgICAgICAgICAgdHlwZT0ndGVsJ1xyXG4gICAgICAgICAgICAgIHZhbGlkYXRlPXtwaG9uZUNoZWNrfVxyXG4gICAgICAgICAgICAgIGNvbXBvbmVudCA9IHtQaG9uZU1hc2t9XHJcbiAgICAgICAgICAgID48L0ZpZWxkPlxyXG5cclxuICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgPC9Gb3JtaWs+XHJcbiAgICA8Q29kZU1vZGFsIGlzTW9kYWxPcGVuPXttb2RhbH0gY2xvc2VNb2RhbD17Y2xvc2VNb2RhbH0gY29kZT17Y29kZX0gc2V0Q29kZT17c2V0Q29kZX0gb25GaXJzdFN0ZXA9e2ZpcnN0U3RlcH0gZ2V0SWRlbnRpZmljYXRpb249e2dldElkZW50aWZpY2F0aW9ufSAvPlxyXG4gICAgICB7LyogPGZvcm0gb25TdWJtaXQ9eyhlKSA9PiBvblN1Ym1pdChlKX0+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgbmFtZT0nZmlvJ1xyXG4gICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmZpb31cclxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IG9uQ2hhbmdlKGUpfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J9Ck0LDQvNC40LvQuNGPINCY0LzRjycvPiBcclxuICAgICAgICA8SW5wdXRNYXNrXHJcbiAgICAgICAgICBtYXNrPVwiKzcoOTk5KS05OTktOTk5OVwiXHJcbiAgICAgICAgICBtYXNrQ2hhcj1cIiBcIlxyXG4gICAgICAgICAgbmFtZT0ncGhvbmUnXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj0n0KLQtdC70LXRhNC+0L0g0L3QvtC80LXRgCdcclxuICAgICAgICAgIHR5cGU9J3RlbCdcclxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IG9uQ2hhbmdlKGUpfVxyXG4gICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLnBob25lfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibXktaW5wdXRcIi8+XHJcbiAgICAgICAgPElucHV0TWFza1xyXG4gICAgICAgICAgbWFzaz1cIjk5OTk5OTk5OTk5OVwiXHJcbiAgICAgICAgICBtYXNrQ2hhcj1cIiBcIlxyXG4gICAgICAgICAgbmFtZT0naWluJ1xyXG4gICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmlpbn1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IG9uQ2hhbmdlKGUpfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J9CY0JjQnSdcclxuICAgICAgICAgIHR5cGU9J3RlbCdcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm15LWlucHV0XCIvPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgIG5hbWU9J2VtYWlsJ1xyXG4gICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmVtYWlsfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gb25DaGFuZ2UoZSl9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj0nRW1haWwnLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9J3Bhc3N3b3JkJ1xyXG4gICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLnBhc3N3b3JkfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gb25DaGFuZ2UoZSl9XHJcbiAgICAgICAgICBuYW1lPSdwYXNzd29yZCdcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPSfQn9GA0LjQtNGD0LzQsNC50YLQtSDQv9Cw0YDQvtC70YwnLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGNsYXNzTmFtZT0nc2luZ2xlYnRuJ1xyXG4gICAgICAgICAgdHlwZT0nc3VibWl0J1xyXG4gICAgICAgICAgY2xhc3NOYW1lPSdidXR0b24nXHJcbiAgICAgICAgICB2YWx1ZT0n0J7RgtC/0YDQsNCy0LjRgtGMJy8+XHJcbiAgICAgICAgXHJcbiAgICAgIDwvZm9ybT4gKi99XHJcbiAgIFxyXG4gICAgPC9kaXY+XHJcbiAgICBcclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlyc3RTdGVwIl0sInNvdXJjZVJvb3QiOiIifQ==