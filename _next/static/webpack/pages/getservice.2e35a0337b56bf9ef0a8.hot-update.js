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

  var getIdentification = function getIdentification(values) {
    setLoading(true);
    setFormData([values]);
    axios__WEBPACK_IMPORTED_MODULE_3___default().get("".concat("https://crediter.kz/api", "/identification"), {
      params: {
        fio: values.fio,
        phone: (0,_defaults_extraFunction__WEBPACK_IMPORTED_MODULE_7__.replaceDate)(values.phone),
        email: values.email,
        password: values.password,
        type: values.type
      }
    }).then(function (res) {
      setLoading(false);
      console.log(res);

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
      console.log(res);

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
        onSubmit: function onSubmit(values) {
          getIdentification(values);
        },
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
              lineNumber: 137,
              columnNumber: 15
            }, _this), errors.fio && touched.fio ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              className: "text-danger",
              children: errors.fio
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 47
            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              className: "text-danger"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 94
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_10__.Field, {
              name: "phone",
              className: "form-control",
              placeholder: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D \u043D\u043E\u043C\u0435\u0440",
              type: "tel",
              validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_11__.phoneValidation,
              component: PhoneMask
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 15
            }, _this), errors.phone && touched.phone ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              className: "text-danger",
              children: errors.phone
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 53
            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              className: "text-danger"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 102
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_10__.Field, {
              name: "iin",
              className: "form-control",
              placeholder: "\u0418\u0418\u041D",
              type: "tel",
              validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_11__.iinValidation,
              component: IinMask
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 15
            }, _this), errors.iin && touched.iin ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              className: "text-danger",
              children: errors.iin
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 161,
              columnNumber: 49
            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              className: "text-danger"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 161,
              columnNumber: 96
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_10__.Field, {
              type: "text",
              name: "email",
              validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_11__.emailValid,
              placeholder: "Email",
              autocomplete: "off"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 15
            }, _this), errors.email && touched.email ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              className: "text-danger",
              children: errors.email
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 169,
              columnNumber: 53
            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              className: "text-danger"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 169,
              columnNumber: 102
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_10__.Field, {
              type: "password",
              name: "password",
              validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_11__.passwordValid,
              placeholder: "\u041F\u0440\u0438\u0434\u0443\u043C\u0430\u0439\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C",
              autocomplete: "off"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 15
            }, _this), errors.password && touched.password ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              className: "text-danger",
              children: errors.password
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 177,
              columnNumber: 59
            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              className: "text-danger"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 177,
              columnNumber: 111
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", (_jsxDEV2 = {
              className: "singlebtn",
              type: "submit"
            }, (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_jsxDEV2, "className", "button"), (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_jsxDEV2, "value", "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"), _jsxDEV2), void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 179,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 13
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
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
        lineNumber: 187,
        columnNumber: 9
      }, _this), " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 124,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRzZXJ2aWNlL0ZpcnN0U3RlcC5qcyJdLCJuYW1lcyI6WyJQaG9uZU1hc2siLCJmaWVsZCIsImZvcm0iLCJwcm9wcyIsIklpbk1hc2siLCJGaXJzdFN0ZXAiLCJzZXRMb2FkaW5nIiwidXNlU3RhdGUiLCJlbWFpbCIsInBob25lIiwiZmlvIiwicGFzc3dvcmQiLCJ0eXBlIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsImVycm9ycyIsInNldEVycm9ycyIsIm1vZGFsIiwic2V0TW9kYWwiLCJjbG9zZU1vZGFsIiwiY29kZSIsInNldENvZGUiLCJnZXRJZGVudGlmaWNhdGlvbiIsInZhbHVlcyIsImF4aW9zIiwicHJvY2VzcyIsInBhcmFtcyIsInJlcGxhY2VEYXRlIiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwic3VjY2VzcyIsImZpcnN0U3RlcCIsImNvb2tpZSIsInRva2VuIiwiaWQiLCJSb3V0ZXIiLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImVtYWlsVmFsaWQiLCJyZXF1aXJlZCIsInBob25lVmFsaWRhdGlvbiIsInBhc3N3b3JkVmFsaWQiLCJvbkNoYW5nZSIsIm5hbWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRvdWNoZWQiLCJhY2NlcHRDaXJyaWxpYyIsImlpblZhbGlkYXRpb24iLCJpaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFTQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsTUFDaEJDLEtBRGdCLFFBQ2hCQSxLQURnQjtBQUFBLE1BRWhCQyxJQUZnQixRQUVoQkEsSUFGZ0I7QUFBQSxNQUdiQyxLQUhhOztBQUFBLHNCQUlaLDhEQUFDLHlEQUFEO0FBQ0osUUFBSSxFQUFDLGtC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ZWYwYTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBJbnB1dE1hc2sgZnJvbSAncmVhY3QtaW5wdXQtbWFzaydcclxuaW1wb3J0IENvZGVNb2RhbCBmcm9tICcuLi9zaGFyZWQvQ29kZU1vZGFsJ1xyXG5pbXBvcnQge3JlcGxhY2VEYXRlfSBmcm9tICcuLi8uLi9kZWZhdWx0cy9leHRyYUZ1bmN0aW9uJ1xyXG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSdcclxuaW1wb3J0IGRpc2FibGVTY3JvbGwgZnJvbSAnZGlzYWJsZS1zY3JvbGwnO1xyXG5pbXBvcnQge0Zvcm1paywgRm9ybSwgRmllbGR9IGZyb20gJ2Zvcm1payc7XHJcbmltcG9ydCB7XHJcbiAgZW1haWxWYWxpZCxcclxuICByZXF1aXJlZCxcclxuICBwaG9uZVZhbGlkYXRpb24sXHJcbiAgcGFzc3dvcmRWYWxpZCxcclxuICBhY2NlcHRDaXJyaWxpYyxcclxuICBwaG9uZUNoZWNrLFxyXG4gIGlpblZhbGlkYXRpb25cclxufSBmcm9tICcuLi8uLi9kZWZhdWx0cy92YWxpZGF0aW9ucydcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi9sb2FkZXIvTG9hZGVyJ1xyXG5cclxuY29uc3QgUGhvbmVNYXNrID0gKHtcclxuICBmaWVsZCxcclxuICBmb3JtLFxyXG4gIC4uLnByb3BzXHJcbn0pID0+IDxJbnB1dE1hc2tcclxuICBtYXNrPVwiKzcoOTk5KS05OTktOTk5OVwiXHJcbiAgbWFza0NoYXI9XCIgXCJcclxuICBjbGFzc05hbWU9XCJteS1pbnB1dFwiXHJcbiAgey4uLmZpZWxkfVxyXG4gIHsuLi5wcm9wc30vPlxyXG5cclxuY29uc3QgSWluTWFzayA9ICh7XHJcbiAgZmllbGQsXHJcbiAgZm9ybSxcclxuICAuLi5wcm9wc1xyXG59KSA9PiA8SW5wdXRNYXNrXHJcbiAgbWFzaz1cIjk5OTk5OTk5OTk5OVwiXHJcbiAgbWFza0NoYXI9XCIgXCJcclxuICBjbGFzc05hbWU9XCJteS1pbnB1dFwiXHJcbiAgey4uLmZpZWxkfVxyXG4gIHsuLi5wcm9wc30vPlxyXG5cclxuY29uc3QgRmlyc3RTdGVwID0gKHtzZXRMb2FkaW5nfSkgPT4ge1xyXG4gIGNvbnN0IFtmb3JtRGF0YSxcclxuICAgIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtlbWFpbDogJycsIHBob25lOiAnJywgZmlvOiAnJywgcGFzc3dvcmQ6ICcnLCB0eXBlOiAn0KTQuNC3INC70LjRhtC+J30pXHJcbiAgY29uc3QgW2Vycm9ycyxcclxuICAgIHNldEVycm9yc10gPSB1c2VTdGF0ZSh7ZW1haWw6ICcnLCBwaG9uZTogJycsIGZpbzogJycsIHBhc3N3b3JkOiAnJ30pXHJcblxyXG4gIGNvbnN0IFttb2RhbCxcclxuICAgIHNldE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICBjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0TW9kYWwoZmFsc2UpXHJcbiAgfVxyXG5cclxuICBjb25zdCBbY29kZSxcclxuICAgIHNldENvZGVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IGdldElkZW50aWZpY2F0aW9uID0gKHZhbHVlcykgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgc2V0Rm9ybURhdGEoW3ZhbHVlc10pXHJcbiAgICBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L2lkZW50aWZpY2F0aW9uYCwge1xyXG4gICAgICBwYXJhbXM6IHtcclxuICAgICAgICBmaW86IHZhbHVlcy5maW8sXHJcbiAgICAgICAgcGhvbmU6IHJlcGxhY2VEYXRlKHZhbHVlcy5waG9uZSksXHJcbiAgICAgICAgZW1haWw6IHZhbHVlcy5lbWFpbCxcclxuICAgICAgICBwYXNzd29yZDogdmFsdWVzLnBhc3N3b3JkLFxyXG4gICAgICAgIHR5cGU6IHZhbHVlcy50eXBlXHJcbiAgICAgIH1cclxuICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICBpZiAocmVzLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgIHNldE1vZGFsKHRydWUpXHJcbiAgICAgICAgLy8gZGlzYWJsZVNjcm9sbC5vbigpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZmlyc3RTdGVwID0gKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9zdGVwT25lYCwge1xyXG4gICAgICBwYXJhbXM6IHtcclxuICAgICAgICBmaW86IGZvcm1EYXRhLmZpbyxcclxuICAgICAgICBwaG9uZTogcmVwbGFjZURhdGUoZm9ybURhdGEucGhvbmUpLFxyXG4gICAgICAgIGVtYWlsOiBmb3JtRGF0YS5lbWFpbCxcclxuICAgICAgICBwYXNzd29yZDogZm9ybURhdGEucGFzc3dvcmQsXHJcbiAgICAgICAgdHlwZTogZm9ybURhdGEudHlwZSxcclxuICAgICAgICBjb2RlOiBjb2RlXHJcbiAgICAgIH1cclxuICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICBpZiAocmVzLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvb2tpZS5zZXQoJ3Rva2VuJywgcmVzLmRhdGEudG9rZW4pXHJcbiAgICAgICAgY29va2llLnNldCgnbGVhZF9pZCcsIHJlcy5kYXRhLmlkKVxyXG4gICAgICAgIGNvb2tpZS5zZXQoJ3N0ZXAnLCAyKVxyXG4gICAgICAgIFJvdXRlci5wdXNoKCcvZ2V0c2VydmljZT9zdGVwPTInKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBzZXRFcnJvcnMoe1xyXG4gICAgICAuLi5lcnJvcnMsXHJcbiAgICAgIGVtYWlsOiBlbWFpbFZhbGlkKGZvcm1EYXRhLmVtYWlsKSxcclxuICAgICAgZmlvOiByZXF1aXJlZChmb3JtRGF0YS5maW8pLFxyXG4gICAgICBwaG9uZTogcGhvbmVWYWxpZGF0aW9uKGZvcm1EYXRhLnBob25lKSxcclxuICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkVmFsaWQoZm9ybURhdGEucGFzc3dvcmQpXHJcbiAgICB9KVxyXG5cclxuICAgIGdldElkZW50aWZpY2F0aW9uKClcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IG5hbWUgPSBlLnRhcmdldC5uYW1lO1xyXG4gICAgc2V0Rm9ybURhdGEoe1xyXG4gICAgICAuLi5mb3JtRGF0YSxcclxuICAgICAgW25hbWVdOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgfSlcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtX3JlZ2lzdGVyJz5cclxuICAgICAgICA8Rm9ybWlrXHJcbiAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7XHJcbiAgICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgICBwaG9uZTogJycsXHJcbiAgICAgICAgICBmaW86ICcnLFxyXG4gICAgICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICAgICAgdHlwZTogJ9Ck0LjQtyDQu9C40YbQvidcclxuICAgICAgICB9fVxyXG4gICAgICAgICAgb25TdWJtaXQ9eyh2YWx1ZXMpID0+IHtnZXRJZGVudGlmaWNhdGlvbih2YWx1ZXMpfX0+XHJcbiAgICAgICAgICB7KHtlcnJvcnMsIHRvdWNoZWR9KSA9PiAoXHJcbiAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgIG5hbWU9J2ZpbydcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlPXthY2NlcHRDaXJyaWxpY31cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSfQpNCY0J4nXHJcbiAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9J29mZicvPlxyXG4gICAgICAgICAgICAgICB7KGVycm9ycy5maW8gJiYgdG91Y2hlZC5maW8pID8gPHAgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+e2Vycm9ycy5maW99PC9wPiA6ICA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz48L3A+fVxyXG5cclxuICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgIG5hbWU9J3Bob25lJ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0n0KLQtdC70LXRhNC+0L0g0L3QvtC80LXRgCdcclxuICAgICAgICAgICAgICAgIHR5cGU9J3RlbCdcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlPXtwaG9uZVZhbGlkYXRpb259XHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1Bob25lTWFza30+PC9GaWVsZD5cclxuICAgICAgICAgICAgICAgICB7KGVycm9ycy5waG9uZSAmJiB0b3VjaGVkLnBob25lKSA/IDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPntlcnJvcnMucGhvbmV9PC9wPiA6ICA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz48L3A+fVxyXG5cclxuICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgIG5hbWU9J2lpbidcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J9CY0JjQnSdcclxuICAgICAgICAgICAgICAgIHR5cGU9J3RlbCdcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlPXtpaW5WYWxpZGF0aW9ufVxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtJaW5NYXNrfT48L0ZpZWxkPlxyXG4gICAgICAgICAgICAgICAgIHsoZXJyb3JzLmlpbiAmJiB0b3VjaGVkLmlpbikgPyA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz57ZXJyb3JzLmlpbn08L3A+IDogIDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPjwvcD59XHJcblxyXG4gICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgIG5hbWU9J2VtYWlsJ1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU9e2VtYWlsVmFsaWR9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW1haWwnXHJcbiAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9J29mZicvPlxyXG4gICAgICAgICAgICAgICAgIHsoZXJyb3JzLmVtYWlsICYmIHRvdWNoZWQuZW1haWwpID8gPHAgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+e2Vycm9ycy5lbWFpbH08L3A+IDogIDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPjwvcD59XHJcblxyXG4gICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdwYXNzd29yZCdcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlPXtwYXNzd29yZFZhbGlkfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J9Cf0YDQuNC00YPQvNCw0LnRgtC1INC/0LDRgNC+0LvRjCdcclxuICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT0nb2ZmJy8+IFxyXG4gICAgICAgICAgICAgICAgIHsoZXJyb3JzLnBhc3N3b3JkICYmIHRvdWNoZWQucGFzc3dvcmQpID8gPHAgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+e2Vycm9ycy5wYXNzd29yZH08L3A+IDogIDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPjwvcD59XHJcblxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzaW5nbGVidG4nXHJcbiAgICAgICAgICAgICAgICB0eXBlPSdzdWJtaXQnXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2J1dHRvbidcclxuICAgICAgICAgICAgICAgIHZhbHVlPSfQntGC0L/RgNCw0LLQuNGC0YwnLz5cclxuICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0Zvcm1paz5cclxuICAgICAgICA8Q29kZU1vZGFsXHJcbiAgICAgICAgICBpc01vZGFsT3Blbj17bW9kYWx9XHJcbiAgICAgICAgICBjbG9zZU1vZGFsPXtjbG9zZU1vZGFsfVxyXG4gICAgICAgICAgY29kZT17Y29kZX1cclxuICAgICAgICAgIHNldENvZGU9e3NldENvZGV9XHJcbiAgICAgICAgICBvbkZpcnN0U3RlcD17Zmlyc3RTdGVwfVxyXG4gICAgICAgICAgZ2V0SWRlbnRpZmljYXRpb249e2dldElkZW50aWZpY2F0aW9ufS8+IHsvKiA8Zm9ybSBvblN1Ym1pdD17KGUpID0+IG9uU3VibWl0KGUpfT5cclxuXHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgbmFtZT0nZmlvJ1xyXG4gICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmZpb31cclxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IG9uQ2hhbmdlKGUpfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J9Ck0LDQvNC40LvQuNGPINCY0LzRjycvPlxyXG4gICAgICAgIDxJbnB1dE1hc2tcclxuICAgICAgICAgIG1hc2s9XCIrNyg5OTkpLTk5OS05OTk5XCJcclxuICAgICAgICAgIG1hc2tDaGFyPVwiIFwiXHJcbiAgICAgICAgICBuYW1lPSdwaG9uZSdcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPSfQotC10LvQtdGE0L7QvSDQvdC+0LzQtdGAJ1xyXG4gICAgICAgICAgdHlwZT0ndGVsJ1xyXG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gb25DaGFuZ2UoZSl9XHJcbiAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEucGhvbmV9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJteS1pbnB1dFwiLz5cclxuICAgICAgICA8SW5wdXRNYXNrXHJcbiAgICAgICAgICBtYXNrPVwiOTk5OTk5OTk5OTk5XCJcclxuICAgICAgICAgIG1hc2tDaGFyPVwiIFwiXHJcbiAgICAgICAgICBuYW1lPSdpaW4nXHJcbiAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuaWlufVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gb25DaGFuZ2UoZSl9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj0n0JjQmNCdJ1xyXG4gICAgICAgICAgdHlwZT0ndGVsJ1xyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibXktaW5wdXRcIi8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgbmFtZT0nZW1haWwnXHJcbiAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuZW1haWx9XHJcbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBvbkNoYW5nZShlKX1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbWFpbCcvPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXHJcbiAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEucGFzc3dvcmR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBvbkNoYW5nZShlKX1cclxuICAgICAgICAgIG5hbWU9J3Bhc3N3b3JkJ1xyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J9Cf0YDQuNC00YPQvNCw0LnRgtC1INC/0LDRgNC+0LvRjCcvPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgY2xhc3NOYW1lPSdzaW5nbGVidG4nXHJcbiAgICAgICAgICB0eXBlPSdzdWJtaXQnXHJcbiAgICAgICAgICBjbGFzc05hbWU9J2J1dHRvbidcclxuICAgICAgICAgIHZhbHVlPSfQntGC0L/RgNCw0LLQuNGC0YwnLz5cclxuXHJcbiAgICAgIDwvZm9ybT4gKi99XHJcblxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpcnN0U3RlcCJdLCJzb3VyY2VSb290IjoiIn0=