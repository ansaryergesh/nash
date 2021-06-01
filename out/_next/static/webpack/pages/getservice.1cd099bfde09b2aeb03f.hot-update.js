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
/* harmony import */ var _shared_CodeModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/CodeModal */ "./components/shared/CodeModal.js");
/* harmony import */ var _defaults_extraFunction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../defaults/extraFunction */ "./defaults/extraFunction.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toast-notifications */ "./node_modules/react-toast-notifications/dist/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _defaults_validations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../defaults/validations */ "./defaults/validations.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _loader_Loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../loader/Loader */ "./components/loader/Loader.js");
/* harmony import */ var _defaults_iinValidAge__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../defaults/iinValidAge */ "./defaults/iinValidAge.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _Masks_PhoneMask__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Masks/PhoneMask */ "./components/Masks/PhoneMask.js");
/* harmony import */ var _Masks_IinMask__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Masks/IinMask */ "./components/Masks/IinMask.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "E:\\job\\nashcompany\\components\\getservice\\FirstStep.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
















var FirstStep = function FirstStep(_ref) {
  _s();

  var setLoading = _ref.setLoading;

  var _useToasts = (0,react_toast_notifications__WEBPACK_IMPORTED_MODULE_7__.useToasts)(),
      addToast = _useToasts.addToast;

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

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      codeError = _useState3[0],
      setCodeError = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      modal = _useState4[0],
      setModal = _useState4[1];

  var closeModal = function closeModal() {
    setModal(false);
  };

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      code = _useState5[0],
      setCode = _useState5[1];

  var getIdentification = function getIdentification(values) {
    if (!(0,_defaults_iinValidAge__WEBPACK_IMPORTED_MODULE_12__.validage)(values.iin)) {
      sweetalert__WEBPACK_IMPORTED_MODULE_13___default()("Oops!", "\u0418\u0437\u0432\u0438\u043D\u0438\u0442\u0435, \u0443\u0441\u043B\u0443\u0433\u0430 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043B\u0438\u0446\u0430\u043C \u0434\u043E\u0441\u0442\u0438\u0433\u0448\u0438\u0435 18 \u043B\u0435\u0442.", "info");
    } else {
      setLoading(true);
      setFormData(values);
      axios__WEBPACK_IMPORTED_MODULE_2___default().get("".concat("https://crediter.kz/api", "/identification"), {
        params: {
          fio: values.fio,
          phone: (0,_defaults_extraFunction__WEBPACK_IMPORTED_MODULE_5__.replaceDate)(values.phone),
          email: values.email,
          password: values.password,
          type: values.type,
          source: 'nashcompany.kz'
        }
      }).then(function (res) {
        setLoading(false);
        console.log(res);

        if (res.data.success) {
          setModal(true); // disableScroll.on();
        }

        if (!res.data.success) {
          addToast(res.data.message, {
            appearance: 'error',
            autoDismiss: true
          });
        }
      })["catch"](function (err) {
        setLoading(false);

        if (err.response) {
          addToast(err.response.status, {
            appearance: 'error',
            autoDismiss: true
          });
        }
      });
    }
  };

  var firstStep = function firstStep(codeVal) {
    setLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_2___default().get("".concat("https://crediter.kz/api", "/stepOne"), {
      params: {
        fio: formData.fio,
        iin: formData.iin,
        phone: (0,_defaults_extraFunction__WEBPACK_IMPORTED_MODULE_5__.replaceDate)(formData.phone),
        email: formData.email,
        password: formData.password,
        type: formData.type,
        code: codeVal,
        source: js_cookie__WEBPACK_IMPORTED_MODULE_6___default().get('utm_source') + "_1" || 0
      }
    }).then(function (res) {
      setLoading(false);
      console.log(res);

      if (res.data.success) {
        js_cookie__WEBPACK_IMPORTED_MODULE_6___default().set('token', res.data.token);
        js_cookie__WEBPACK_IMPORTED_MODULE_6___default().set('lead_id', res.data.id);
        js_cookie__WEBPACK_IMPORTED_MODULE_6___default().set('step', 2);
        next_router__WEBPACK_IMPORTED_MODULE_10___default().push('/getservice?step=2');
      }

      if (!res.data.success) {
        setCodeError(res.data.message);
        addToast(finalErr, {
          appearance: 'error',
          autoDismiss: true
        });
      }
    });
  };

  var onSubmit = function onSubmit(e) {
    e.preventDefault();
    setErrors(_objectSpread(_objectSpread({}, errors), {}, {
      email: (0,_defaults_validations__WEBPACK_IMPORTED_MODULE_9__.emailValid)(formData.email),
      fio: (0,_defaults_validations__WEBPACK_IMPORTED_MODULE_9__.required)(formData.fio),
      phone: (0,_defaults_validations__WEBPACK_IMPORTED_MODULE_9__.phoneValidation)(formData.phone),
      password: (0,_defaults_validations__WEBPACK_IMPORTED_MODULE_9__.passwordValid)(formData.password)
    }));
    getIdentification();
  };

  var onChange = function onChange(e) {
    var name = e.target.name;
    setFormData(_objectSpread(_objectSpread({}, formData), {}, (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, name, normaliseNumber(e.target.value))));
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "form_register",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_8__.Formik, {
        initialValues: {
          email: '',
          phone: '',
          fio: '',
          password: '',
          type: 'Физ лицо',
          iin: ''
        },
        onSubmit: function onSubmit(values) {
          getIdentification(values);
        },
        children: function children(_ref2) {
          var _jsxDEV2;

          var errors = _ref2.errors,
              touched = _ref2.touched;
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_8__.Form, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_8__.Field, {
              type: "text",
              name: "fio",
              validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_9__.acceptCirrilic,
              placeholder: "\u0424\u0418\u041E",
              autocomplete: "off"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 15
            }, _this), " ", errors.fio && touched.fio ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "text-danger",
              children: errors.fio
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 19
            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "text-danger"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 161,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_8__.Field, {
              name: "phone",
              className: "form-control",
              placeholder: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D \u043D\u043E\u043C\u0435\u0440",
              type: "tel",
              validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_9__.phoneValidation,
              component: _Masks_PhoneMask__WEBPACK_IMPORTED_MODULE_14__.default
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 162,
              columnNumber: 15
            }, _this), errors.phone && touched.phone ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "text-danger",
              children: errors.phone
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 170,
              columnNumber: 19
            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "text-danger"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_8__.Field, {
              name: "iin",
              className: "form-control",
              placeholder: "\u0418\u0418\u041D",
              type: "tel",
              validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_9__.iinValidation,
              component: _Masks_IinMask__WEBPACK_IMPORTED_MODULE_15__.default
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 15
            }, _this), errors.iin && touched.iin ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "text-danger",
              children: errors.iin
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 181,
              columnNumber: 19
            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "text-danger"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 182,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_8__.Field, {
              type: "text",
              name: "email",
              validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_9__.emailValid,
              placeholder: "Email",
              autocomplete: "off"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 184,
              columnNumber: 15
            }, _this), " ", errors.email && touched.email ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "text-danger",
              children: errors.email
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 190,
              columnNumber: 19
            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "text-danger"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 191,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_8__.Field, {
              type: "password",
              name: "password",
              validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_9__.passwordValid,
              placeholder: "\u041F\u0440\u0438\u0434\u0443\u043C\u0430\u0439\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C",
              autocomplete: "off"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 193,
              columnNumber: 15
            }, _this), " ", errors.password && touched.password ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "text-danger",
              children: errors.password
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 199,
              columnNumber: 19
            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "text-danger"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 200,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "firststep_banner",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "firststep_banner--img",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                  src: "/img/form/firststep.svg"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 204,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 203,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", (_jsxDEV2 = {
                className: "singlebtn",
                type: "submit"
              }, (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_jsxDEV2, "className", "button"), (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_jsxDEV2, "value", "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"), _jsxDEV2), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 206,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 202,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 13
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_CodeModal__WEBPACK_IMPORTED_MODULE_4__.default, {
        isModalOpen: modal,
        closeModal: closeModal,
        code: code,
        setCode: setCode,
        onFirstStep: firstStep,
        error: codeError,
        getIdentification: getIdentification
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 9
      }, _this), " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 138,
    columnNumber: 5
  }, _this);
};

_s(FirstStep, "+HFIzpLbo8aFymBRlUlmjSxSaE4=", false, function () {
  return [react_toast_notifications__WEBPACK_IMPORTED_MODULE_7__.useToasts];
});

_c = FirstStep;

var FirstReg = function FirstReg(_ref3) {
  var setLoading = _ref3.setLoading;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toast_notifications__WEBPACK_IMPORTED_MODULE_7__.ToastProvider, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FirstStep, {
      setLoading: setLoading
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 278,
    columnNumber: 5
  }, _this);
};

_c2 = FirstReg;
/* harmony default export */ __webpack_exports__["default"] = (FirstReg);

var _c, _c2;

$RefreshReg$(_c, "FirstStep");
$RefreshReg$(_c2, "FirstReg");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRzZXJ2aWNlL0ZpcnN0U3RlcC5qcyJdLCJuYW1lcyI6WyJGaXJzdFN0ZXAiLCJzZXRMb2FkaW5nIiwidXNlVG9hc3RzIiwiYWRkVG9hc3QiLCJ1c2VTdGF0ZSIsImVtYWlsIiwicGhvbmUiLCJmaW8iLCJwYXNzd29yZCIsInR5cGUiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwiY29kZUVycm9yIiwic2V0Q29kZUVycm9yIiwibW9kYWwiLCJzZXRNb2RhbCIsImNsb3NlTW9kYWwiLCJjb2RlIiwic2V0Q29kZSIsImdldElkZW50aWZpY2F0aW9uIiwidmFsdWVzIiwidmFsaWRhZ2UiLCJpaW4iLCJzd2FsIiwiYXhpb3MiLCJwcm9jZXNzIiwicGFyYW1zIiwicmVwbGFjZURhdGUiLCJzb3VyY2UiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJzdWNjZXNzIiwibWVzc2FnZSIsImFwcGVhcmFuY2UiLCJhdXRvRGlzbWlzcyIsImVyciIsInJlc3BvbnNlIiwic3RhdHVzIiwiZmlyc3RTdGVwIiwiY29kZVZhbCIsImNvb2tpZSIsInRva2VuIiwiaWQiLCJSb3V0ZXIiLCJmaW5hbEVyciIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZW1haWxWYWxpZCIsInJlcXVpcmVkIiwicGhvbmVWYWxpZGF0aW9uIiwicGFzc3dvcmRWYWxpZCIsIm9uQ2hhbmdlIiwibmFtZSIsInRhcmdldCIsIm5vcm1hbGlzZU51bWJlciIsInZhbHVlIiwidG91Y2hlZCIsImFjY2VwdENpcnJpbGljIiwiUGhvbmVNYXNrIiwiaWluVmFsaWRhdGlvbiIsIklpbk1hc2siLCJGaXJzdFJlZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q0UsOERBQUMsU0FBRDtBQUFXLGdCQUFVLEVBQUVBO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFLRCxDQU5EOztNQUFNa0UsUTtBQVFOLCtEQUFlQSxRQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2dldHNlcnZpY2UuMWNkMDk5YmZkZTA5YjJhZWIwM2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDb2RlTW9kYWwgZnJvbSAnLi4vc2hhcmVkL0NvZGVNb2RhbCdcclxuaW1wb3J0IHtyZXBsYWNlRGF0ZX0gZnJvbSAnLi4vLi4vZGVmYXVsdHMvZXh0cmFGdW5jdGlvbidcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnXHJcbmltcG9ydCB7VG9hc3RQcm92aWRlciwgdXNlVG9hc3RzfSBmcm9tICdyZWFjdC10b2FzdC1ub3RpZmljYXRpb25zJ1xyXG5pbXBvcnQge0Zvcm1paywgRm9ybSwgRmllbGR9IGZyb20gJ2Zvcm1payc7XHJcbmltcG9ydCB7XHJcbiAgZW1haWxWYWxpZCxcclxuICByZXF1aXJlZCxcclxuICBwaG9uZVZhbGlkYXRpb24sXHJcbiAgcGFzc3dvcmRWYWxpZCxcclxuICBhY2NlcHRDaXJyaWxpYyxcclxuICBwaG9uZUNoZWNrLFxyXG4gIGlpblZhbGlkYXRpb25cclxufSBmcm9tICcuLi8uLi9kZWZhdWx0cy92YWxpZGF0aW9ucydcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi9sb2FkZXIvTG9hZGVyJ1xyXG5pbXBvcnQge3ZhbGlkYWdlfSBmcm9tICcuLi8uLi9kZWZhdWx0cy9paW5WYWxpZEFnZSdcclxuaW1wb3J0IHN3YWwgZnJvbSAnc3dlZXRhbGVydCdcclxuaW1wb3J0IFBob25lTWFzayBmcm9tICcuLi9NYXNrcy9QaG9uZU1hc2snXHJcbmltcG9ydCBJaW5NYXNrIGZyb20gJy4uL01hc2tzL0lpbk1hc2snXHJcblxyXG5jb25zdCBGaXJzdFN0ZXAgPSAoe3NldExvYWRpbmd9KSA9PiB7XHJcbiAgY29uc3Qge2FkZFRvYXN0fSA9IHVzZVRvYXN0cygpXHJcbiAgY29uc3QgW2Zvcm1EYXRhLFxyXG4gICAgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe2VtYWlsOiAnJywgcGhvbmU6ICcnLCBmaW86ICcnLCBwYXNzd29yZDogJycsIHR5cGU6ICfQpNC40Lcg0LvQuNGG0L4nfSlcclxuXHJcbiAgY29uc3QgW2Vycm9ycyxcclxuICAgIHNldEVycm9yc10gPSB1c2VTdGF0ZSh7ZW1haWw6ICcnLCBwaG9uZTogJycsIGZpbzogJycsIHBhc3N3b3JkOiAnJ30pXHJcbiAgY29uc3QgW2NvZGVFcnJvcixcclxuICAgIHNldENvZGVFcnJvcl0gPSB1c2VTdGF0ZSgnJylcclxuXHJcbiAgY29uc3QgW21vZGFsLFxyXG4gICAgc2V0TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRNb2RhbChmYWxzZSlcclxuICB9XHJcblxyXG4gIGNvbnN0IFtjb2RlLFxyXG4gICAgc2V0Q29kZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgZ2V0SWRlbnRpZmljYXRpb24gPSAodmFsdWVzKSA9PiB7XHJcbiAgICBpZiAoIXZhbGlkYWdlKHZhbHVlcy5paW4pKSB7XHJcbiAgICAgIHN3YWwoXCJPb3BzIVwiLCBg0JjQt9Cy0LjQvdC40YLQtSwg0YPRgdC70YPQs9CwINC+0YHRg9GJ0LXRgdGC0LLQu9GP0LXRgtGB0Y8g0LvQuNGG0LDQvCDQtNC+0YHRgtC40LPRiNC40LUgMTgg0LvQtdGCLmAsIFwiaW5mb1wiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgICAgc2V0Rm9ybURhdGEodmFsdWVzKVxyXG4gICAgICBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L2lkZW50aWZpY2F0aW9uYCwge1xyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgZmlvOiB2YWx1ZXMuZmlvLFxyXG4gICAgICAgICAgcGhvbmU6IHJlcGxhY2VEYXRlKHZhbHVlcy5waG9uZSksXHJcbiAgICAgICAgICBlbWFpbDogdmFsdWVzLmVtYWlsLFxyXG4gICAgICAgICAgcGFzc3dvcmQ6IHZhbHVlcy5wYXNzd29yZCxcclxuICAgICAgICAgIHR5cGU6IHZhbHVlcy50eXBlLFxyXG4gICAgICAgICAgc291cmNlOiAnbmFzaGNvbXBhbnkua3onXHJcbiAgICAgICAgfVxyXG4gICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgIHNldE1vZGFsKHRydWUpXHJcblxyXG4gICAgICAgICAgLy8gZGlzYWJsZVNjcm9sbC5vbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXJlcy5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgIGFkZFRvYXN0KHJlcy5kYXRhLm1lc3NhZ2UsIHtcclxuICAgICAgICAgICAgYXBwZWFyYW5jZTogJ2Vycm9yJyxcclxuICAgICAgICAgICAgYXV0b0Rpc21pc3M6IHRydWVcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgaWYgKGVyci5yZXNwb25zZSkge1xyXG4gICAgICAgICAgYWRkVG9hc3QoZXJyLnJlc3BvbnNlLnN0YXR1cywge1xyXG4gICAgICAgICAgICBhcHBlYXJhbmNlOiAnZXJyb3InLFxyXG4gICAgICAgICAgICBhdXRvRGlzbWlzczogdHJ1ZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgY29uc3QgZmlyc3RTdGVwID0gKGNvZGVWYWwpID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgIGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vc3RlcE9uZWAsIHtcclxuICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgZmlvOiBmb3JtRGF0YS5maW8sXHJcbiAgICAgICAgaWluOiBmb3JtRGF0YS5paW4sXHJcbiAgICAgICAgcGhvbmU6IHJlcGxhY2VEYXRlKGZvcm1EYXRhLnBob25lKSxcclxuICAgICAgICBlbWFpbDogZm9ybURhdGEuZW1haWwsXHJcbiAgICAgICAgcGFzc3dvcmQ6IGZvcm1EYXRhLnBhc3N3b3JkLFxyXG4gICAgICAgIHR5cGU6IGZvcm1EYXRhLnR5cGUsXHJcbiAgICAgICAgY29kZTogY29kZVZhbCxcclxuICAgICAgICBzb3VyY2U6IGNvb2tpZS5nZXQoJ3V0bV9zb3VyY2UnKSArIFwiXzFcIiB8fCAnbmFzaGNvbXBhbnkua3onXHJcbiAgICAgIH1cclxuICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICBpZiAocmVzLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgIGNvb2tpZS5zZXQoJ3Rva2VuJywgcmVzLmRhdGEudG9rZW4pXHJcbiAgICAgICAgY29va2llLnNldCgnbGVhZF9pZCcsIHJlcy5kYXRhLmlkKVxyXG4gICAgICAgIGNvb2tpZS5zZXQoJ3N0ZXAnLCAyKVxyXG4gICAgICAgIFJvdXRlci5wdXNoKCcvZ2V0c2VydmljZT9zdGVwPTInKVxyXG4gICAgICB9XHJcbiAgICAgIGlmICghcmVzLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgIHNldENvZGVFcnJvcihyZXMuZGF0YS5tZXNzYWdlKVxyXG4gICAgICAgIGFkZFRvYXN0KGZpbmFsRXJyLCB7XHJcbiAgICAgICAgICBhcHBlYXJhbmNlOiAnZXJyb3InLFxyXG4gICAgICAgICAgYXV0b0Rpc21pc3M6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBzZXRFcnJvcnMoe1xyXG4gICAgICAuLi5lcnJvcnMsXHJcbiAgICAgIGVtYWlsOiBlbWFpbFZhbGlkKGZvcm1EYXRhLmVtYWlsKSxcclxuICAgICAgZmlvOiByZXF1aXJlZChmb3JtRGF0YS5maW8pLFxyXG4gICAgICBwaG9uZTogcGhvbmVWYWxpZGF0aW9uKGZvcm1EYXRhLnBob25lKSxcclxuICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkVmFsaWQoZm9ybURhdGEucGFzc3dvcmQpXHJcbiAgICB9KVxyXG5cclxuICAgIGdldElkZW50aWZpY2F0aW9uKClcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IG5hbWUgPSBlLnRhcmdldC5uYW1lO1xyXG4gICAgc2V0Rm9ybURhdGEoe1xyXG4gICAgICAuLi5mb3JtRGF0YSxcclxuICAgICAgW25hbWVdOiBub3JtYWxpc2VOdW1iZXIoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9KVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm1fcmVnaXN0ZXInPlxyXG4gICAgICAgIDxGb3JtaWtcclxuICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcclxuICAgICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICAgIHBob25lOiAnJyxcclxuICAgICAgICAgIGZpbzogJycsXHJcbiAgICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgICAgICB0eXBlOiAn0KTQuNC3INC70LjRhtC+JyxcclxuICAgICAgICAgIGlpbjogJydcclxuICAgICAgICB9fVxyXG4gICAgICAgICAgb25TdWJtaXQ9eyh2YWx1ZXMpID0+IHtcclxuICAgICAgICAgIGdldElkZW50aWZpY2F0aW9uKHZhbHVlcylcclxuICAgICAgICB9fT5cclxuICAgICAgICAgIHsoe2Vycm9ycywgdG91Y2hlZH0pID0+IChcclxuICAgICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgbmFtZT0nZmlvJ1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU9e2FjY2VwdENpcnJpbGljfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J9Ck0JjQnidcclxuICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT0nb2ZmJy8+IHsoZXJyb3JzLmZpbyAmJiB0b3VjaGVkLmZpbylcclxuICAgICAgICAgICAgICAgID8gPHAgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+e2Vycm9ycy5maW99PC9wPlxyXG4gICAgICAgICAgICAgICAgOiA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz48L3A+fVxyXG4gICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgbmFtZT0ncGhvbmUnXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSfQotC10LvQtdGE0L7QvSDQvdC+0LzQtdGAJ1xyXG4gICAgICAgICAgICAgICAgdHlwZT0ndGVsJ1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU9e3Bob25lVmFsaWRhdGlvbn1cclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17UGhvbmVNYXNrfT48L0ZpZWxkPlxyXG4gICAgICAgICAgICAgIHsoZXJyb3JzLnBob25lICYmIHRvdWNoZWQucGhvbmUpXHJcbiAgICAgICAgICAgICAgICA/IDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPntlcnJvcnMucGhvbmV9PC9wPlxyXG4gICAgICAgICAgICAgICAgOiA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz48L3A+fVxyXG5cclxuICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgIG5hbWU9J2lpbidcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J9CY0JjQnSdcclxuICAgICAgICAgICAgICAgIHR5cGU9J3RlbCdcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlPXtpaW5WYWxpZGF0aW9ufVxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtJaW5NYXNrfT48L0ZpZWxkPlxyXG4gICAgICAgICAgICAgIHsoZXJyb3JzLmlpbiAmJiB0b3VjaGVkLmlpbilcclxuICAgICAgICAgICAgICAgID8gPHAgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+e2Vycm9ycy5paW59PC9wPlxyXG4gICAgICAgICAgICAgICAgOiA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz48L3A+fVxyXG5cclxuICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdlbWFpbCdcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlPXtlbWFpbFZhbGlkfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VtYWlsJ1xyXG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPSdvZmYnLz4geyhlcnJvcnMuZW1haWwgJiYgdG91Y2hlZC5lbWFpbClcclxuICAgICAgICAgICAgICAgID8gPHAgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+e2Vycm9ycy5lbWFpbH08L3A+XHJcbiAgICAgICAgICAgICAgICA6IDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPjwvcD59XHJcblxyXG4gICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdwYXNzd29yZCdcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlPXtwYXNzd29yZFZhbGlkfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J9Cf0YDQuNC00YPQvNCw0LnRgtC1INC/0LDRgNC+0LvRjCdcclxuICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT0nb2ZmJy8+IHsoZXJyb3JzLnBhc3N3b3JkICYmIHRvdWNoZWQucGFzc3dvcmQpXHJcbiAgICAgICAgICAgICAgICA/IDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPntlcnJvcnMucGFzc3dvcmR9PC9wPlxyXG4gICAgICAgICAgICAgICAgOiA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz48L3A+fVxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmlyc3RzdGVwX2Jhbm5lcic+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmlyc3RzdGVwX2Jhbm5lci0taW1nJz5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Jy9pbWcvZm9ybS9maXJzdHN0ZXAuc3ZnJyAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzaW5nbGVidG4nXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdidXR0b24nXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPSfQntGC0L/RgNCw0LLQuNGC0YwnLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Gb3JtaWs+XHJcblxyXG4gICAgICAgIDxDb2RlTW9kYWxcclxuICAgICAgICAgIGlzTW9kYWxPcGVuPXttb2RhbH1cclxuICAgICAgICAgIGNsb3NlTW9kYWw9e2Nsb3NlTW9kYWx9XHJcbiAgICAgICAgICBjb2RlPXtjb2RlfVxyXG4gICAgICAgICAgc2V0Q29kZT17c2V0Q29kZX1cclxuICAgICAgICAgIG9uRmlyc3RTdGVwPXtmaXJzdFN0ZXB9XHJcbiAgICAgICAgICBlcnJvcj17Y29kZUVycm9yfVxyXG4gICAgICAgICAgZ2V0SWRlbnRpZmljYXRpb249e2dldElkZW50aWZpY2F0aW9ufS8+IHsvKiA8Zm9ybSBvblN1Ym1pdD17KGUpID0+IG9uU3VibWl0KGUpfT5cclxuXHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgbmFtZT0nZmlvJ1xyXG4gICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmZpb31cclxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IG9uQ2hhbmdlKGUpfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J9Ck0LDQvNC40LvQuNGPINCY0LzRjycvPlxyXG4gICAgICAgIDxJbnB1dE1hc2tcclxuICAgICAgICAgIG1hc2s9XCIrNyg5OTkpLTk5OS05OTk5XCJcclxuICAgICAgICAgIG1hc2tDaGFyPVwiIFwiXHJcbiAgICAgICAgICBuYW1lPSdwaG9uZSdcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPSfQotC10LvQtdGE0L7QvSDQvdC+0LzQtdGAJ1xyXG4gICAgICAgICAgdHlwZT0ndGVsJ1xyXG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gb25DaGFuZ2UoZSl9XHJcbiAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEucGhvbmV9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJteS1pbnB1dFwiLz5cclxuICAgICAgICA8SW5wdXRNYXNrXHJcbiAgICAgICAgICBtYXNrPVwiOTk5OTk5OTk5OTk5XCJcclxuICAgICAgICAgIG1hc2tDaGFyPVwiIFwiXHJcbiAgICAgICAgICBuYW1lPSdpaW4nXHJcbiAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuaWlufVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gb25DaGFuZ2UoZSl9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj0n0JjQmNCdJ1xyXG4gICAgICAgICAgdHlwZT0ndGVsJ1xyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibXktaW5wdXRcIi8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgbmFtZT0nZW1haWwnXHJcbiAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuZW1haWx9XHJcbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBvbkNoYW5nZShlKX1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbWFpbCcvPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXHJcbiAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEucGFzc3dvcmR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBvbkNoYW5nZShlKX1cclxuICAgICAgICAgIG5hbWU9J3Bhc3N3b3JkJ1xyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J9Cf0YDQuNC00YPQvNCw0LnRgtC1INC/0LDRgNC+0LvRjCcvPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgY2xhc3NOYW1lPSdzaW5nbGVidG4nXHJcbiAgICAgICAgICB0eXBlPSdzdWJtaXQnXHJcbiAgICAgICAgICBjbGFzc05hbWU9J2J1dHRvbidcclxuICAgICAgICAgIHZhbHVlPSfQntGC0L/RgNCw0LLQuNGC0YwnLz5cclxuXHJcbiAgICAgIDwvZm9ybT4gKi99XHJcblxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IEZpcnN0UmVnID0gKHtzZXRMb2FkaW5nfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8VG9hc3RQcm92aWRlcj5cclxuICAgICAgPEZpcnN0U3RlcCBzZXRMb2FkaW5nPXtzZXRMb2FkaW5nfS8+XHJcbiAgICA8L1RvYXN0UHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaXJzdFJlZyJdLCJzb3VyY2VSb290IjoiIn0=