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
    lineNumber: 25,
    columnNumber: 7
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
    lineNumber: 36,
    columnNumber: 7
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

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
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
          var _jsxDEV2;

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
              lineNumber: 133,
              columnNumber: 15
            }, _this), " ", errors.fio && touched.fio && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              className: "text-danger",
              children: errors.fio
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 68
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_10__.Field, {
              name: "phone",
              className: "form-control",
              placeholder: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D \u043D\u043E\u043C\u0435\u0440",
              type: "tel",
              validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_11__.phoneValidation,
              component: PhoneMask
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 15
            }, _this), errors.phone && touched.phone && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              className: "text-danger",
              children: errors.phone
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 49
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_10__.Field, {
              name: "iin",
              className: "form-control",
              placeholder: "\u0418\u0418\u041D",
              type: "tel",
              validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_11__.iinValidation,
              component: IinMask
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 15
            }, _this), errors.iin && touched.iin && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              className: "text-danger",
              children: errors.iin
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 156,
              columnNumber: 45
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_10__.Field, {
              type: "text",
              name: "email",
              validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_11__.emailValid,
              placeholder: "Email",
              autocomplete: "off"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 15
            }, _this), " ", errors.email && touched.email && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              className: "text-danger",
              children: errors.email
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 72
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", (_jsxDEV2 = {
              className: "singlebtn",
              type: "submit"
            }, (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_jsxDEV2, "className", "button"), (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_jsxDEV2, "value", "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"), _jsxDEV2), void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 165,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 13
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_shared_CodeModal__WEBPACK_IMPORTED_MODULE_6__.default, {
        isModalOpen: modal,
        closeModal: closeModal,
        code: code,
        setCode: setCode,
        onFirstStep: firstStep,
        getIdentification: getIdentification
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 9
      }, _this), " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 120,
    columnNumber: 5
  }, _this);
};

_s(FirstStep, "2D/q/WbJEXJsbrN8IbGyZ6g5DOM=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRzZXJ2aWNlL0ZpcnN0U3RlcC5qcyJdLCJuYW1lcyI6WyJQaG9uZU1hc2siLCJmaWVsZCIsImZvcm0iLCJwcm9wcyIsIklpbk1hc2siLCJGaXJzdFN0ZXAiLCJzZXRMb2FkaW5nIiwidXNlU3RhdGUiLCJlbWFpbCIsInBob25lIiwiZmlvIiwicGFzc3dvcmQiLCJ0eXBlIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsImVycm9ycyIsInNldEVycm9ycyIsIm1vZGFsIiwic2V0TW9kYWwiLCJjbG9zZU1vZGFsIiwiY29kZSIsInNldENvZGUiLCJnZXRJZGVudGlmaWNhdGlvbiIsImF4aW9zIiwicHJvY2VzcyIsInBhcmFtcyIsInJlcGxhY2VEYXRlIiwidGhlbiIsInJlcyIsImRhdGEiLCJzdWNjZXNzIiwiZmlyc3RTdGVwIiwiY29va2llIiwidG9rZW4iLCJpZCIsIlJvdXRlciIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZW1haWxWYWxpZCIsInJlcXVpcmVkIiwicGhvbmVWYWxpZGF0aW9uIiwicGFzc3dvcmRWYWxpZCIsIm9uQ2hhbmdlIiwibmFtZSIsInRhcmdldCIsInZhbHVlIiwidmFsdWVzIiwidG91Y2hlZCIsImFjY2VwdENpcnJpbGljIiwiaWluVmFsaWRhdGlvbiIsImlpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVk7QUFBQSxNQUNoQkMsS0FEZ0IsUUFDaEJBLEtBRGdCO0FBQUEsTUFFaEJDLElBRmdCLFFBRWhCQSxJQUZnQjtBQUFBLE1BR2JDLEtBSGE7O0FBQUEsc0JBSVosOERBQUMseURBQUQ7QUFDSixRQUFJLEVBQUMsa0JBREQ7QUFFSixZQUFRLEVB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O0FBQUEsZUFwREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBOEdELENBMUxEOztHQUFNakIsUzs7TUFBQUEsUztBQTRMTiwrREFBZUEsU0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9nZXRzZXJ2aWNlLjU5MTc2YTAzZTAxZDBkZjY5OWUyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSW5wdXRNYXNrIGZyb20gJ3JlYWN0LWlucHV0LW1hc2snXHJcbmltcG9ydCBDb2RlTW9kYWwgZnJvbSAnLi4vc2hhcmVkL0NvZGVNb2RhbCdcclxuaW1wb3J0IHtyZXBsYWNlRGF0ZX0gZnJvbSAnLi4vLi4vZGVmYXVsdHMvZXh0cmFGdW5jdGlvbidcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnXHJcbmltcG9ydCBkaXNhYmxlU2Nyb2xsIGZyb20gJ2Rpc2FibGUtc2Nyb2xsJztcclxuaW1wb3J0IHtGb3JtaWssIEZvcm0sIEZpZWxkfSBmcm9tICdmb3JtaWsnO1xyXG5pbXBvcnQge1xyXG4gIGVtYWlsVmFsaWQsXHJcbiAgcmVxdWlyZWQsXHJcbiAgcGhvbmVWYWxpZGF0aW9uLFxyXG4gIHBhc3N3b3JkVmFsaWQsXHJcbiAgYWNjZXB0Q2lycmlsaWMsXHJcbiAgcGhvbmVDaGVjayxcclxuICBpaW5WYWxpZGF0aW9uXHJcbn0gZnJvbSAnLi4vLi4vZGVmYXVsdHMvdmFsaWRhdGlvbnMnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vbG9hZGVyL0xvYWRlcidcclxuXHJcbmNvbnN0IFBob25lTWFzayA9ICh7XHJcbiAgZmllbGQsXHJcbiAgZm9ybSxcclxuICAuLi5wcm9wc1xyXG59KSA9PiA8SW5wdXRNYXNrXHJcbiAgbWFzaz1cIis3KDk5OSktOTk5LTk5OTlcIlxyXG4gIG1hc2tDaGFyPVwiIFwiXHJcbiAgY2xhc3NOYW1lPVwibXktaW5wdXRcIlxyXG4gIHsuLi5maWVsZH1cclxuICB7Li4ucHJvcHN9Lz5cclxuXHJcbmNvbnN0IElpbk1hc2sgPSAoe1xyXG4gIGZpZWxkLFxyXG4gIGZvcm0sXHJcbiAgLi4ucHJvcHNcclxufSkgPT4gPElucHV0TWFza1xyXG4gIG1hc2s9XCI5OTk5OTk5OTk5OTlcIlxyXG4gIG1hc2tDaGFyPVwiIFwiXHJcbiAgY2xhc3NOYW1lPVwibXktaW5wdXRcIlxyXG4gIHsuLi5maWVsZH1cclxuICB7Li4ucHJvcHN9Lz5cclxuXHJcbmNvbnN0IEZpcnN0U3RlcCA9ICh7c2V0TG9hZGluZ30pID0+IHtcclxuICBjb25zdCBbZm9ybURhdGEsXHJcbiAgICBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7ZW1haWw6ICcnLCBwaG9uZTogJycsIGZpbzogJycsIHBhc3N3b3JkOiAnJywgdHlwZTogJ9Ck0LjQtyDQu9C40YbQvid9KVxyXG4gIGNvbnN0IFtlcnJvcnMsXHJcbiAgICBzZXRFcnJvcnNdID0gdXNlU3RhdGUoe2VtYWlsOiAnJywgcGhvbmU6ICcnLCBmaW86ICcnLCBwYXNzd29yZDogJyd9KVxyXG5cclxuICBjb25zdCBbbW9kYWwsXHJcbiAgICBzZXRNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcclxuICAgIHNldE1vZGFsKGZhbHNlKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgW2NvZGUsXHJcbiAgICBzZXRDb2RlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBnZXRJZGVudGlmaWNhdGlvbiA9ICgpID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgIGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vaWRlbnRpZmljYXRpb25gLCB7XHJcbiAgICAgIHBhcmFtczoge1xyXG4gICAgICAgIGZpbzogZm9ybURhdGEuZmlvLFxyXG4gICAgICAgIHBob25lOiByZXBsYWNlRGF0ZShmb3JtRGF0YS5waG9uZSksXHJcbiAgICAgICAgZW1haWw6IGZvcm1EYXRhLmVtYWlsLFxyXG4gICAgICAgIHBhc3N3b3JkOiBmb3JtRGF0YS5wYXNzd29yZCxcclxuICAgICAgICB0eXBlOiBmb3JtRGF0YS50eXBlXHJcbiAgICAgIH1cclxuICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICBzZXRNb2RhbCh0cnVlKVxyXG4gICAgICAgIC8vIGRpc2FibGVTY3JvbGwub24oKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGZpcnN0U3RlcCA9ICgpID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgIGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vc3RlcE9uZWAsIHtcclxuICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgZmlvOiBmb3JtRGF0YS5maW8sXHJcbiAgICAgICAgcGhvbmU6IHJlcGxhY2VEYXRlKGZvcm1EYXRhLnBob25lKSxcclxuICAgICAgICBlbWFpbDogZm9ybURhdGEuZW1haWwsXHJcbiAgICAgICAgcGFzc3dvcmQ6IGZvcm1EYXRhLnBhc3N3b3JkLFxyXG4gICAgICAgIHR5cGU6IGZvcm1EYXRhLnR5cGUsXHJcbiAgICAgICAgY29kZTogY29kZVxyXG4gICAgICB9XHJcbiAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgIGlmIChyZXMuZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgY29va2llLnNldCgndG9rZW4nLCByZXMuZGF0YS50b2tlbilcclxuICAgICAgICBjb29raWUuc2V0KCdsZWFkX2lkJywgcmVzLmRhdGEuaWQpXHJcbiAgICAgICAgY29va2llLnNldCgnc3RlcCcsIDIpXHJcbiAgICAgICAgUm91dGVyLnB1c2goJy9nZXRzZXJ2aWNlP3N0ZXA9MicpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHNldEVycm9ycyh7XHJcbiAgICAgIC4uLmVycm9ycyxcclxuICAgICAgZW1haWw6IGVtYWlsVmFsaWQoZm9ybURhdGEuZW1haWwpLFxyXG4gICAgICBmaW86IHJlcXVpcmVkKGZvcm1EYXRhLmZpbyksXHJcbiAgICAgIHBob25lOiBwaG9uZVZhbGlkYXRpb24oZm9ybURhdGEucGhvbmUpLFxyXG4gICAgICBwYXNzd29yZDogcGFzc3dvcmRWYWxpZChmb3JtRGF0YS5wYXNzd29yZClcclxuICAgIH0pXHJcblxyXG4gICAgZ2V0SWRlbnRpZmljYXRpb24oKVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25DaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgbmFtZSA9IGUudGFyZ2V0Lm5hbWU7XHJcbiAgICBzZXRGb3JtRGF0YSh7XHJcbiAgICAgIC4uLmZvcm1EYXRhLFxyXG4gICAgICBbbmFtZV06IGUudGFyZ2V0LnZhbHVlXHJcbiAgICB9KVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm1fcmVnaXN0ZXInPlxyXG4gICAgICAgIDxGb3JtaWtcclxuICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcclxuICAgICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICAgIHBob25lOiAnJyxcclxuICAgICAgICAgIGZpbzogJycsXHJcbiAgICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgICAgICB0eXBlOiAn0KTQuNC3INC70LjRhtC+J1xyXG4gICAgICAgIH19XHJcbiAgICAgICAgICBvblN1Ym1pdD17KHZhbHVlcykgPT4ge319PlxyXG4gICAgICAgICAgeyh7ZXJyb3JzLCB0b3VjaGVkfSkgPT4gKFxyXG4gICAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdmaW8nXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZT17YWNjZXB0Q2lycmlsaWN9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0n0KTQmNCeJ1xyXG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPSdvZmYnLz4ge2Vycm9ycy5maW8gJiYgdG91Y2hlZC5maW8gJiYgPHAgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+e2Vycm9ycy5maW99PC9wPn1cclxuXHJcbiAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdwaG9uZSdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J9Ci0LXQu9C10YTQvtC9INC90L7QvNC10YAnXHJcbiAgICAgICAgICAgICAgICB0eXBlPSd0ZWwnXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZT17cGhvbmVWYWxpZGF0aW9ufVxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtQaG9uZU1hc2t9PjwvRmllbGQ+XHJcbiAgICAgICAgICAgICAge2Vycm9ycy5waG9uZSAmJiB0b3VjaGVkLnBob25lICYmIDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPntlcnJvcnMucGhvbmV9PC9wPn1cclxuXHJcbiAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdpaW4nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSfQmNCY0J0nXHJcbiAgICAgICAgICAgICAgICB0eXBlPSd0ZWwnXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZT17aWluVmFsaWRhdGlvbn1cclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17SWluTWFza30+PC9GaWVsZD5cclxuICAgICAgICAgICAgICB7ZXJyb3JzLmlpbiAmJiB0b3VjaGVkLmlpbiAmJiA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz57ZXJyb3JzLmlpbn08L3A+fVxyXG5cclxuICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdlbWFpbCdcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlPXtlbWFpbFZhbGlkfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VtYWlsJ1xyXG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPSdvZmYnLz4ge2Vycm9ycy5lbWFpbCAmJiB0b3VjaGVkLmVtYWlsICYmIDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPntlcnJvcnMuZW1haWx9PC9wPn1cclxuXHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NpbmdsZWJ0bidcclxuICAgICAgICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYnV0dG9uJ1xyXG4gICAgICAgICAgICAgICAgdmFsdWU9J9Ce0YLQv9GA0LDQstC40YLRjCcvPlxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvRm9ybWlrPlxyXG4gICAgICAgIDxDb2RlTW9kYWxcclxuICAgICAgICAgIGlzTW9kYWxPcGVuPXttb2RhbH1cclxuICAgICAgICAgIGNsb3NlTW9kYWw9e2Nsb3NlTW9kYWx9XHJcbiAgICAgICAgICBjb2RlPXtjb2RlfVxyXG4gICAgICAgICAgc2V0Q29kZT17c2V0Q29kZX1cclxuICAgICAgICAgIG9uRmlyc3RTdGVwPXtmaXJzdFN0ZXB9XHJcbiAgICAgICAgICBnZXRJZGVudGlmaWNhdGlvbj17Z2V0SWRlbnRpZmljYXRpb259Lz4gey8qIDxmb3JtIG9uU3VibWl0PXsoZSkgPT4gb25TdWJtaXQoZSl9PlxyXG5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICBuYW1lPSdmaW8nXHJcbiAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuZmlvfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gb25DaGFuZ2UoZSl9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj0n0KTQsNC80LjQu9C40Y8g0JjQvNGPJy8+XHJcbiAgICAgICAgPElucHV0TWFza1xyXG4gICAgICAgICAgbWFzaz1cIis3KDk5OSktOTk5LTk5OTlcIlxyXG4gICAgICAgICAgbWFza0NoYXI9XCIgXCJcclxuICAgICAgICAgIG5hbWU9J3Bob25lJ1xyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J9Ci0LXQu9C10YTQvtC9INC90L7QvNC10YAnXHJcbiAgICAgICAgICB0eXBlPSd0ZWwnXHJcbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBvbkNoYW5nZShlKX1cclxuICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5waG9uZX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm15LWlucHV0XCIvPlxyXG4gICAgICAgIDxJbnB1dE1hc2tcclxuICAgICAgICAgIG1hc2s9XCI5OTk5OTk5OTk5OTlcIlxyXG4gICAgICAgICAgbWFza0NoYXI9XCIgXCJcclxuICAgICAgICAgIG5hbWU9J2lpbidcclxuICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5paW59XHJcbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBvbkNoYW5nZShlKX1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPSfQmNCY0J0nXHJcbiAgICAgICAgICB0eXBlPSd0ZWwnXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJteS1pbnB1dFwiLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICBuYW1lPSdlbWFpbCdcclxuICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5lbWFpbH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IG9uQ2hhbmdlKGUpfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J0VtYWlsJy8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPSdwYXNzd29yZCdcclxuICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5wYXNzd29yZH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IG9uQ2hhbmdlKGUpfVxyXG4gICAgICAgICAgbmFtZT0ncGFzc3dvcmQnXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj0n0J/RgNC40LTRg9C80LDQudGC0LUg0L/QsNGA0L7Qu9GMJy8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9J3NpbmdsZWJ0bidcclxuICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcclxuICAgICAgICAgIGNsYXNzTmFtZT0nYnV0dG9uJ1xyXG4gICAgICAgICAgdmFsdWU9J9Ce0YLQv9GA0LDQstC40YLRjCcvPlxyXG5cclxuICAgICAgPC9mb3JtPiAqL31cclxuXHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlyc3RTdGVwIl0sInNvdXJjZVJvb3QiOiIifQ==