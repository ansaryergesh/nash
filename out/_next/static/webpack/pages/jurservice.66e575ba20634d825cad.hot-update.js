self["webpackHotUpdate_N_E"]("pages/jurservice",{

/***/ "./components/getservice/FirstStepJur.js":
/*!***********************************************!*\
  !*** ./components/getservice/FirstStepJur.js ***!
  \***********************************************/
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
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-toast-notifications */ "./node_modules/react-toast-notifications/dist/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _defaults_validations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../defaults/validations */ "./defaults/validations.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _loader_Loader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../loader/Loader */ "./components/loader/Loader.js");
/* harmony import */ var _defaults_iinValidAge__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../defaults/iinValidAge */ "./defaults/iinValidAge.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_16__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "E:\\job\\nashcompany\\components\\getservice\\FirstStepJur.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// const FirstStep = () => {
//   return(
//     <div className='form_register'>
//       <form>
//         <input type='number' name='bin' placeholder='БИН' />
//         <input type='text' disabled name='organization' placeholder='' />
//         <input type='text' name='position' placeholder='Занимаемая должность' />
//         <input type='text' name='fio' placeholder='Фамилия Имя' />
//         <input type='text' name='phone' placeholder='Телефон' />
//         <input type='text' name='email' placeholder='Email' />
//         <input className='singlebtn' type='button' className='button' value='Отправить' />
//       </form>
//     </div>
//   )
// }
// export default FirstStep















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
    lineNumber: 47,
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
    lineNumber: 58,
    columnNumber: 7
  }, _this);
};

_c2 = IinMask;

var FirstStep = function FirstStep(_ref3) {
  _s();

  var setLoading = _ref3.setLoading;

  var _useToasts = (0,react_toast_notifications__WEBPACK_IMPORTED_MODULE_10__.useToasts)(),
      addToast = _useToasts.addToast;

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

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      codeError = _useState3[0],
      setCodeError = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      binVal = _useState4[0],
      setBin = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({
    value: '',
    type: false
  }),
      organization = _useState5[0],
      setOrganization = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      modal = _useState6[0],
      setModal = _useState6[1];

  var closeModal = function closeModal() {
    setModal(false);
  };

  var binChange = function binChange(e) {
    var val = e.target.value;
    var value = val ? val.replace(/ /g, "") : '';
    setBin(e.target.value); // if(value.length === 12) {
    //   axios.get(`https://api.money-men.kz/api/testKompra?bin=${value}`)
    //     .then(res=> {
    //       setOrganization(res.data.content[0].name)
    //     })
    // }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    var value = binVal ? binVal.replace(/ /g, "") : '';

    if (value.length === 12) {
      axios__WEBPACK_IMPORTED_MODULE_3___default().get("https://api.money-men.kz/api/testKompra?bin=".concat(value)).then(function (res) {
        console.log(res);

        if (res.data.content.length === 0) {
          setOrganization({
            value: 'Пожалуйста введите правильный БИН',
            type: false
          });
        } else {
          setOrganization({
            value: res.data.content[0].name,
            type: true
          });
        }
      });
    }
  }, [binVal]);

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      code = _useState7[0],
      setCode = _useState7[1];

  var getIdentification = function getIdentification(values) {
    if (!(0,_defaults_iinValidAge__WEBPACK_IMPORTED_MODULE_15__.validage)(values.iin)) {
      sweetalert__WEBPACK_IMPORTED_MODULE_16___default()("Oops!", "\u0418\u0437\u0432\u0438\u043D\u0438\u0442\u0435, \u0443\u0441\u043B\u0443\u0433\u0430 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043B\u0438\u0446\u0430\u043C \u0434\u043E\u0441\u0442\u0438\u0433\u0448\u0438\u0435 18 \u043B\u0435\u0442.", "info");
    } else {
      setLoading(true);
      setFormData(values);
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
    axios__WEBPACK_IMPORTED_MODULE_3___default().get("".concat("https://crediter.kz/api", "/stepOne"), {
      params: {
        fio: formData.fio,
        phone: (0,_defaults_extraFunction__WEBPACK_IMPORTED_MODULE_7__.replaceDate)(formData.phone),
        email: formData.email,
        password: formData.password,
        type: formData.type,
        code: codeVal
      }
    }).then(function (res) {
      setLoading(false);
      console.log(res);

      if (res.data.success) {
        js_cookie__WEBPACK_IMPORTED_MODULE_8___default().set('token', res.data.token);
        js_cookie__WEBPACK_IMPORTED_MODULE_8___default().set('lead_id', res.data.id);
        js_cookie__WEBPACK_IMPORTED_MODULE_8___default().set('step', 2);
        next_router__WEBPACK_IMPORTED_MODULE_13___default().push('/getservice?step=2');
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
      email: (0,_defaults_validations__WEBPACK_IMPORTED_MODULE_12__.emailValid)(formData.email),
      fio: (0,_defaults_validations__WEBPACK_IMPORTED_MODULE_12__.required)(formData.fio),
      phone: (0,_defaults_validations__WEBPACK_IMPORTED_MODULE_12__.phoneValidation)(formData.phone),
      password: (0,_defaults_validations__WEBPACK_IMPORTED_MODULE_12__.passwordValid)(formData.password)
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
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_11__.Formik, {
        initialValues: {
          email: '',
          bin: '',
          position: '',
          phone: '',
          fio: '',
          password: '',
          type: 'Физ лицо',
          iin: ''
        },
        onSubmit: function onSubmit(values) {
          getIdentification(values);
        },
        children: function children(_ref4) {
          var _jsxDEV2;

          var errors = _ref4.errors,
              touched = _ref4.touched;
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_11__.Form, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_11__.Field, {
              name: "bin",
              className: "form-control",
              placeholder: "\u0411\u0418\u041D",
              type: "tel",
              onChange: function onChange(e) {
                return binChange(e);
              },
              value: binVal // validate={iinValidation}
              ,
              component: IinMask
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 222,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              className: !organization.type ? 'text-danger' : 'text-info',
              children: organization.value
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 232,
              columnNumber: 18
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_11__.Field, {
              type: "text",
              name: "fio",
              validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_12__.acceptCirrilic,
              placeholder: "\u0424\u0418\u041E",
              autocomplete: "off"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 234,
              columnNumber: 15
            }, _this), errors.fio && touched.fio ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              className: "text-danger",
              children: errors.fio
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 240,
              columnNumber: 47
            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              className: "text-danger"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 240,
              columnNumber: 94
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_11__.Field, {
              name: "phone",
              className: "form-control",
              placeholder: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D \u043D\u043E\u043C\u0435\u0440",
              type: "tel",
              validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_12__.phoneValidation,
              component: PhoneMask
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 242,
              columnNumber: 15
            }, _this), errors.phone && touched.phone ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              className: "text-danger",
              children: errors.phone
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 249,
              columnNumber: 53
            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              className: "text-danger"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 249,
              columnNumber: 102
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_11__.Field, {
              name: "iin",
              className: "form-control",
              placeholder: "\u0418\u0418\u041D",
              type: "tel",
              validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_12__.iinValidation,
              component: IinMask
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 251,
              columnNumber: 15
            }, _this), errors.iin && touched.iin ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              className: "text-danger",
              children: errors.iin
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 258,
              columnNumber: 49
            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              className: "text-danger"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 258,
              columnNumber: 96
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_11__.Field, {
              type: "text",
              name: "email",
              validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_12__.emailValid,
              placeholder: "Email",
              autocomplete: "off"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 260,
              columnNumber: 15
            }, _this), errors.email && touched.email ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              className: "text-danger",
              children: errors.email
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 266,
              columnNumber: 53
            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              className: "text-danger"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 266,
              columnNumber: 102
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", (_jsxDEV2 = {
              className: "singlebtn",
              type: "submit"
            }, (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_jsxDEV2, "className", "button"), (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_jsxDEV2, "value", "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"), _jsxDEV2), void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 276,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 220,
            columnNumber: 13
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_shared_CodeModal__WEBPACK_IMPORTED_MODULE_6__.default, {
        isModalOpen: modal,
        closeModal: closeModal,
        code: code,
        setCode: setCode,
        onFirstStep: firstStep,
        error: codeError,
        getIdentification: getIdentification
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 284,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 205,
    columnNumber: 5
  }, _this);
};

_s(FirstStep, "e7j/x+Nozms7zX2NqeyZNniHjic=", false, function () {
  return [react_toast_notifications__WEBPACK_IMPORTED_MODULE_10__.useToasts];
});

_c3 = FirstStep;

var FirstReg = function FirstReg(_ref5) {
  var setLoading = _ref5.setLoading;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_toast_notifications__WEBPACK_IMPORTED_MODULE_10__.ToastProvider, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(FirstStep, {
      setLoading: setLoading
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 300,
    columnNumber: 5
  }, _this);
};

_c4 = FirstReg;
/* harmony default export */ __webpack_exports__["default"] = (FirstReg);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "PhoneMask");
$RefreshReg$(_c2, "IinMask");
$RefreshReg$(_c3, "FirstStep");
$RefreshReg$(_c4, "FirstReg");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRzZXJ2aWNlL0ZpcnN0U3RlcEp1ci5qcyJdLCJuYW1lcyI6WyJQaG9uZU1hc2siLCJmaWVsZCIsImZvcm0iLCJwcm9wcyIsIklpbk1hc2siLCJGaXJzdFN0ZXAiLCJzZXRMb2FkaW5nIiwidXNlVG9hc3RzIiwiYWRkVG9hc3QiLCJ1c2VTdGF0ZSIsImVtYWlsIiwicGhvbmUiLCJmaW8iLCJwYXNzd29yZCIsInR5cGUiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwiY29kZUVycm9yIiwic2V0Q29kZUVycm9yIiwiYmluVmFsIiwic2V0QmluIiwidmFsdWUiLCJvcmdhbml6YXRpb24iLCJzZXRPcmdhbml6YXRpb24iLCJtb2RhbCIsInNldE1vZGFsIiwiY2xvc2VNb2RhbCIsImJpbkNoYW5nZSIsImUiLCJ2YWwiLCJ0YXJnZXQiLCJyZXBsYWNlIiwidXNlRWZmZWN0IiwibGVuZ3RoIiwiYXhpb3MiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJjb250ZW50IiwibmFtZSIsImNvZGUiLCJzZXRDb2RlIiwiZ2V0SWRlbnRpZmljYXRpb24iLCJ2YWx1ZXMiLCJ2YWxpZGFnZSIsImlpbiIsInN3YWwiLCJwcm9jZXNzIiwicGFyYW1zIiwicmVwbGFjZURhdGUiLCJzdWNjZXNzIiwibWVzc2FnZSIsImFwcGVhcmFuY2UiLCJhdXRvRGlzbWlzcyIsImVyciIsInJlc3BvbnNlIiwic3RhdHVzIiwiZmlyc3RTdGVwIiwiY29kZVZhbCIsImNvb2tpZSIsInRva2VuIiwiaWQiLCJSb3V0ZXIiLCJmaW5hbEVyciIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJlbWFpbFZhbGlkIiwicmVxdWlyZWQiLCJwaG9uZVZhbGlkYXRpb24iLCJwYXNzd29yZFZhbGlkIiwib25DaGFuZ2UiLCJiaW4iLCJwb3NpdGlvbiIsInRvdWNoZWQiLCJhY2NlcHRDaXJyaWxpYyIsImlpblZhbGlkYXRpb24iLCJGaXJzdFJlZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVk7QUFBQSxNQUNoQkMsS0FEZ0IsUUFDaEJBLEtBRGdCO0FBQUEsTUFFaEJDLElBRmdCLFFBRWhCQSxJQUZnQjtBQUFBLE1BR2JDLEtBSGE7O0FBQUEsc0JBSVosOERBQUMseURBQUQ7QUFDSixRQUFJLEVBQUMsa0JBREQ7QUFFSixZQUFRLEVBQUMsR0FGTDtBQUdKLGFBQVMsRUFBQztBQUhOLEtBSUFGLEtBSkEsR0FLQUUsS0FMQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBSlk7QUFBQSxDQUFsQjs7S0FBTUgsUzs7QUFXTixJQUFNSSxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLE1BQ2RILEtBRGMsU0FDZEEsS0FEYztBQUFBLE1BRWRDLElBRmMsU0FFZEEsSUFGYztBQUFBLE1BR1hDLEtBSFc7O0FBQUEsc0JBSVYsOERBQUMseURBQUQ7QUFDSixRQUFJLEVBQUMsY0FERDtBQUVKLFlBQVEsRUFBQyxHQUZMO0FBR0osYUFBUyxFQUFDO0FBSE4sS0FJQUYsS0FKQSxHQUtBRSxLQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FKVTtBQUFBLENBQWhCOztNQUFNQyxPOztBQVdOLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLFFBQWtCO0FBQUE7O0FBQUEsTUFBaEJDLFVBQWdCLFNBQWhCQSxVQUFnQjs7QUFBQSxtQkFDYkMscUVBQVMsRUFESTtBQUFBLE1BQzFCQyxRQUQwQixjQUMxQkEsUUFEMEI7O0FBQUEsa0JBR2pCQywrQ0FBUSxDQUFDO0FBQUNDLFNBQUssRUFBRSxFQUFSO0FBQVlDLFNBQUssRUFBRSxFQUFuQjtBQUF1QkMsT0FBRyxFQUFFLEVBQTVCO0FBQWdDQyxZQUFRLEVBQUUsRUFBMUM7QUFBOENDLFFBQUksRUFBRTtBQUFwRCxHQUFELENBSFM7QUFBQSxNQUUzQkMsUUFGMkI7QUFBQSxNQUdoQ0MsV0FIZ0M7O0FBQUEsbUJBS25CUCwrQ0FBUSxDQUFDO0FBQUNDLFNBQUssRUFBRSxFQUFSO0FBQVlDLFNBQUssRUFBRSxFQUFuQjtBQUF1QkMsT0FBRyxFQUFFLEVBQTVCO0FBQWdDQyxZQUFRLEVBQUU7QUFBMUMsR0FBRCxDQUxXO0FBQUEsTUFJM0JJLE1BSjJCO0FBQUEsTUFLaENDLFNBTGdDOztBQUFBLG1CQU1BVCwrQ0FBUSxDQUFDLEVBQUQsQ0FOUjtBQUFBLE1BTTNCVSxTQU4yQjtBQUFBLE1BTWhCQyxZQU5nQjs7QUFBQSxtQkFPVlgsK0NBQVEsQ0FBQyxFQUFELENBUEU7QUFBQSxNQU8zQlksTUFQMkI7QUFBQSxNQU9wQkMsTUFQb0I7O0FBQUEsbUJBUUtiLCtDQUFRLENBQUM7QUFBQ2MsU0FBSyxFQUFFLEVBQVI7QUFBWVQsUUFBSSxFQUFFO0FBQWxCLEdBQUQsQ0FSYjtBQUFBLE1BUTNCVSxZQVIyQjtBQUFBLE1BUWRDLGVBUmM7O0FBQUEsbUJBVXBCaEIsK0NBQVEsQ0FBQyxLQUFELENBVlk7QUFBQSxNQVMzQmlCLEtBVDJCO0FBQUEsTUFVaENDLFFBVmdDOztBQVlsQyxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3ZCRCxZQUFRLENBQUMsS0FBRCxDQUFSO0FBQ0QsR0FGRDs7QUFLQSxNQUFNRSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFBQyxDQUFDLEVBQUk7QUFDckIsUUFBTUMsR0FBRyxHQUFHRCxDQUFDLENBQUNFLE1BQUYsQ0FBU1QsS0FBckI7QUFDQSxRQUFNQSxLQUFLLEdBQUdRLEdBQUcsR0FBR0EsR0FBRyxDQUFDRSxPQUFKLENBQVksSUFBWixFQUFrQixFQUFsQixDQUFILEdBQTJCLEVBQTVDO0FBQ0FYLFVBQU0sQ0FBQ1EsQ0FBQyxDQUFDRSxNQUFGLENBQVNULEtBQVYsQ0FBTixDQUhxQixDQUlyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRCxHQVZEOztBQVlBVyxrREFBUyxDQUFDLFlBQU07QUFDZCxRQUFNWCxLQUFLLEdBQUdGLE1BQU0sR0FBR0EsTUFBTSxDQUFDWSxPQUFQLENBQWUsSUFBZixFQUFxQixFQUFyQixDQUFILEdBQThCLEVBQWxEOztBQUNBLFFBQUdWLEtBQUssQ0FBQ1ksTUFBTixLQUFpQixFQUFwQixFQUF3QjtBQUN0QkMsc0RBQUEsdURBQXlEYixLQUF6RCxHQUNHYyxJQURILENBQ1EsVUFBQUMsR0FBRyxFQUFHO0FBQ1ZDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaOztBQUNBLFlBQUdBLEdBQUcsQ0FBQ0csSUFBSixDQUFTQyxPQUFULENBQWlCUCxNQUFqQixLQUE0QixDQUEvQixFQUFrQztBQUNoQ1YseUJBQWUsQ0FBQztBQUFDRixpQkFBSyxFQUFFLG1DQUFSO0FBQTZDVCxnQkFBSSxFQUFFO0FBQW5ELFdBQUQsQ0FBZjtBQUNELFNBRkQsTUFFTTtBQUNKVyx5QkFBZSxDQUFDO0FBQUNGLGlCQUFLLEVBQUVlLEdBQUcsQ0FBQ0csSUFBSixDQUFTQyxPQUFULENBQWlCLENBQWpCLEVBQW9CQyxJQUE1QjtBQUFrQzdCLGdCQUFJLEVBQUU7QUFBeEMsV0FBRCxDQUFmO0FBQ0Q7QUFDRixPQVJIO0FBU0Q7QUFDRixHQWJRLEVBYU4sQ0FBQ08sTUFBRCxDQWJNLENBQVQ7O0FBN0JrQyxtQkE0Q3JCWiwrQ0FBUSxDQUFDLEVBQUQsQ0E1Q2E7QUFBQSxNQTJDM0JtQyxJQTNDMkI7QUFBQSxNQTRDaENDLE9BNUNnQzs7QUE2Q2xDLE1BQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsTUFBRCxFQUFZO0FBQ3BDLFFBQUcsQ0FBQ0MsZ0VBQVEsQ0FBQ0QsTUFBTSxDQUFDRSxHQUFSLENBQVosRUFBMEI7QUFDeEJDLHdEQUFJLENBQUMsT0FBRCw4UkFBcUUsTUFBckUsQ0FBSjtBQUNELEtBRkQsTUFHSztBQUNINUMsZ0JBQVUsQ0FBQyxJQUFELENBQVY7QUFDQVUsaUJBQVcsQ0FBQytCLE1BQUQsQ0FBWDtBQUNBWCxzREFBQSxXQUFhZSx5QkFBYixzQkFBb0Q7QUFDbERDLGNBQU0sRUFBRTtBQUNOeEMsYUFBRyxFQUFFbUMsTUFBTSxDQUFDbkMsR0FETjtBQUVORCxlQUFLLEVBQUUwQyxvRUFBVyxDQUFDTixNQUFNLENBQUNwQyxLQUFSLENBRlo7QUFHTkQsZUFBSyxFQUFFcUMsTUFBTSxDQUFDckMsS0FIUjtBQUlORyxrQkFBUSxFQUFFa0MsTUFBTSxDQUFDbEMsUUFKWDtBQUtOQyxjQUFJLEVBQUVpQyxNQUFNLENBQUNqQztBQUxQO0FBRDBDLE9BQXBELEVBUUd1QixJQVJILENBUVEsVUFBQUMsR0FBRyxFQUFJO0FBQ2JoQyxrQkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNBaUMsZUFBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7O0FBQ0EsWUFBSUEsR0FBRyxDQUFDRyxJQUFKLENBQVNhLE9BQWIsRUFBc0I7QUFDcEIzQixrQkFBUSxDQUFDLElBQUQsQ0FBUixDQURvQixDQUdwQjtBQUNEOztBQUNELFlBQUcsQ0FBQ1csR0FBRyxDQUFDRyxJQUFKLENBQVNhLE9BQWIsRUFBc0I7QUFDcEI5QyxrQkFBUSxDQUFDOEIsR0FBRyxDQUFDRyxJQUFKLENBQVNjLE9BQVYsRUFBbUI7QUFDekJDLHNCQUFVLEVBQUUsT0FEYTtBQUV6QkMsdUJBQVcsRUFBRTtBQUZZLFdBQW5CLENBQVI7QUFJRDtBQUNGLE9BdEJELFdBdUJPLFVBQUFDLEdBQUcsRUFBRztBQUNYcEQsa0JBQVUsQ0FBQyxLQUFELENBQVY7O0FBQ0EsWUFBR29ELEdBQUcsQ0FBQ0MsUUFBUCxFQUFpQjtBQUNmbkQsa0JBQVEsQ0FBQ2tELEdBQUcsQ0FBQ0MsUUFBSixDQUFhQyxNQUFkLEVBQXNCO0FBQzVCSixzQkFBVSxFQUFFLE9BRGdCO0FBRTVCQyx1QkFBVyxFQUFFO0FBRmUsV0FBdEIsQ0FBUjtBQUlEO0FBQ0YsT0EvQkQ7QUFnQ0Q7QUFFRixHQXpDRDs7QUEyQ0EsTUFBTUksU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsT0FBRCxFQUFhO0FBQzdCeEQsY0FBVSxDQUFDLElBQUQsQ0FBVjtBQUNBOEIsb0RBQUEsV0FBYWUseUJBQWIsZUFBNkM7QUFDM0NDLFlBQU0sRUFBRTtBQUNOeEMsV0FBRyxFQUFFRyxRQUFRLENBQUNILEdBRFI7QUFFTkQsYUFBSyxFQUFFMEMsb0VBQVcsQ0FBQ3RDLFFBQVEsQ0FBQ0osS0FBVixDQUZaO0FBR05ELGFBQUssRUFBRUssUUFBUSxDQUFDTCxLQUhWO0FBSU5HLGdCQUFRLEVBQUVFLFFBQVEsQ0FBQ0YsUUFKYjtBQUtOQyxZQUFJLEVBQUVDLFFBQVEsQ0FBQ0QsSUFMVDtBQU1OOEIsWUFBSSxFQUFFa0I7QUFOQTtBQURtQyxLQUE3QyxFQVNHekIsSUFUSCxDQVNRLFVBQUFDLEdBQUcsRUFBSTtBQUNiaEMsZ0JBQVUsQ0FBQyxLQUFELENBQVY7QUFDQWlDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaOztBQUNBLFVBQUlBLEdBQUcsQ0FBQ0csSUFBSixDQUFTYSxPQUFiLEVBQXNCO0FBQ3BCUyw0REFBQSxDQUFXLE9BQVgsRUFBb0J6QixHQUFHLENBQUNHLElBQUosQ0FBU3VCLEtBQTdCO0FBQ0FELDREQUFBLENBQVcsU0FBWCxFQUFzQnpCLEdBQUcsQ0FBQ0csSUFBSixDQUFTd0IsRUFBL0I7QUFDQUYsNERBQUEsQ0FBVyxNQUFYLEVBQW1CLENBQW5CO0FBQ0FHLGdFQUFBLENBQVksb0JBQVo7QUFDRDs7QUFDRCxVQUFHLENBQUM1QixHQUFHLENBQUNHLElBQUosQ0FBU2EsT0FBYixFQUFzQjtBQUNwQmxDLG9CQUFZLENBQUNrQixHQUFHLENBQUNHLElBQUosQ0FBU2MsT0FBVixDQUFaO0FBQ0EvQyxnQkFBUSxDQUFDMkQsUUFBRCxFQUFXO0FBQ2pCWCxvQkFBVSxFQUFFLE9BREs7QUFFakJDLHFCQUFXLEVBQUU7QUFGSSxTQUFYLENBQVI7QUFJRDtBQUNGLEtBekJEO0FBMEJELEdBNUJEOztBQThCQSxNQUFNVyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDdEMsQ0FBRCxFQUFPO0FBQ3RCQSxLQUFDLENBQUN1QyxjQUFGO0FBQ0FuRCxhQUFTLGlDQUNKRCxNQURJO0FBRVBQLFdBQUssRUFBRTRELGtFQUFVLENBQUN2RCxRQUFRLENBQUNMLEtBQVYsQ0FGVjtBQUdQRSxTQUFHLEVBQUUyRCxnRUFBUSxDQUFDeEQsUUFBUSxDQUFDSCxHQUFWLENBSE47QUFJUEQsV0FBSyxFQUFFNkQsdUVBQWUsQ0FBQ3pELFFBQVEsQ0FBQ0osS0FBVixDQUpmO0FBS1BFLGNBQVEsRUFBRTRELHFFQUFhLENBQUMxRCxRQUFRLENBQUNGLFFBQVY7QUFMaEIsT0FBVDtBQVFBaUMscUJBQWlCO0FBQ2xCLEdBWEQ7O0FBYUEsTUFBTTRCLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUM1QyxDQUFELEVBQU87QUFDdEIsUUFBTWEsSUFBSSxHQUFHYixDQUFDLENBQUNFLE1BQUYsQ0FBU1csSUFBdEI7QUFDQTNCLGVBQVcsaUNBQ05ELFFBRE0sNEhBRVI0QixJQUZRLEVBRURiLENBQUMsQ0FBQ0UsTUFBRixDQUFTVCxLQUZSLEdBQVg7QUFJRCxHQU5EOztBQVFBLHNCQUNFO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsZUFBZjtBQUFBLDhCQUNFLDhEQUFDLDJDQUFEO0FBQ0UscUJBQWEsRUFBRTtBQUNmYixlQUFLLEVBQUUsRUFEUTtBQUVmaUUsYUFBRyxFQUFFLEVBRlU7QUFHZkMsa0JBQVEsRUFBRSxFQUhLO0FBSWZqRSxlQUFLLEVBQUUsRUFKUTtBQUtmQyxhQUFHLEVBQUUsRUFMVTtBQU1mQyxrQkFBUSxFQUFFLEVBTks7QUFPZkMsY0FBSSxFQUFFLFVBUFM7QUFRZm1DLGFBQUcsRUFBRTtBQVJVLFNBRGpCO0FBV0UsZ0JBQVEsRUFBRSxrQkFBQ0YsTUFBRCxFQUFZO0FBQUNELDJCQUFpQixDQUFDQyxNQUFELENBQWpCO0FBQTBCLFNBWG5EO0FBQUEsa0JBWUc7QUFBQTs7QUFBQSxjQUFFOUIsTUFBRixTQUFFQSxNQUFGO0FBQUEsY0FBVTRELE9BQVYsU0FBVUEsT0FBVjtBQUFBLDhCQUNDLDhEQUFDLHlDQUFEO0FBQUEsb0NBRUUsOERBQUMsMENBQUQ7QUFDRSxrQkFBSSxFQUFDLEtBRFA7QUFFRSx1QkFBUyxFQUFDLGNBRlo7QUFHRSx5QkFBVyxFQUFDLG9CQUhkO0FBSUUsa0JBQUksRUFBQyxLQUpQO0FBS0Usc0JBQVEsRUFBRSxrQkFBQS9DLENBQUM7QUFBQSx1QkFBRUQsU0FBUyxDQUFDQyxDQUFELENBQVg7QUFBQSxlQUxiO0FBTUUsbUJBQUssRUFBRVQsTUFOVCxDQU9FO0FBUEY7QUFRRSx1QkFBUyxFQUFFakI7QUFSYjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGLGVBWUs7QUFBRyx1QkFBUyxFQUFFLENBQUNvQixZQUFZLENBQUNWLElBQWQsR0FBcUIsYUFBckIsR0FBcUMsV0FBbkQ7QUFBQSx3QkFBaUVVLFlBQVksQ0FBQ0Q7QUFBOUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFaTCxlQWNFLDhEQUFDLDBDQUFEO0FBQ0Usa0JBQUksRUFBQyxNQURQO0FBRUUsa0JBQUksRUFBQyxLQUZQO0FBR0Usc0JBQVEsRUFBRXVELGtFQUhaO0FBSUUseUJBQVcsRUFBQyxvQkFKZDtBQUtFLDBCQUFZLEVBQUM7QUFMZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWRGLEVBb0JLN0QsTUFBTSxDQUFDTCxHQUFQLElBQWNpRSxPQUFPLENBQUNqRSxHQUF2QixnQkFBOEI7QUFBRyx1QkFBUyxFQUFDLGFBQWI7QUFBQSx3QkFBNEJLLE1BQU0sQ0FBQ0w7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBOUIsZ0JBQTZFO0FBQUcsdUJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBcEJqRixlQXNCRSw4REFBQywwQ0FBRDtBQUNFLGtCQUFJLEVBQUMsT0FEUDtBQUVFLHVCQUFTLEVBQUMsY0FGWjtBQUdFLHlCQUFXLEVBQUMsMkVBSGQ7QUFJRSxrQkFBSSxFQUFDLEtBSlA7QUFLRSxzQkFBUSxFQUFFNEQsbUVBTFo7QUFNRSx1QkFBUyxFQUFFeEU7QUFOYjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXRCRixFQTZCT2lCLE1BQU0sQ0FBQ04sS0FBUCxJQUFnQmtFLE9BQU8sQ0FBQ2xFLEtBQXpCLGdCQUFrQztBQUFHLHVCQUFTLEVBQUMsYUFBYjtBQUFBLHdCQUE0Qk0sTUFBTSxDQUFDTjtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFsQyxnQkFBbUY7QUFBRyx1QkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkE3QnpGLGVBK0JFLDhEQUFDLDBDQUFEO0FBQ0Usa0JBQUksRUFBQyxLQURQO0FBRUUsdUJBQVMsRUFBQyxjQUZaO0FBR0UseUJBQVcsRUFBQyxvQkFIZDtBQUlFLGtCQUFJLEVBQUMsS0FKUDtBQUtFLHNCQUFRLEVBQUVvRSxpRUFMWjtBQU1FLHVCQUFTLEVBQUUzRTtBQU5iO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBL0JGLEVBc0NPYSxNQUFNLENBQUNnQyxHQUFQLElBQWM0QixPQUFPLENBQUM1QixHQUF2QixnQkFBOEI7QUFBRyx1QkFBUyxFQUFDLGFBQWI7QUFBQSx3QkFBNEJoQyxNQUFNLENBQUNnQztBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUE5QixnQkFBNkU7QUFBRyx1QkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkF0Q25GLGVBd0NFLDhEQUFDLDBDQUFEO0FBQ0Usa0JBQUksRUFBQyxNQURQO0FBRUUsa0JBQUksRUFBQyxPQUZQO0FBR0Usc0JBQVEsRUFBRXFCLDhEQUhaO0FBSUUseUJBQVcsRUFBQyxPQUpkO0FBS0UsMEJBQVksRUFBQztBQUxmO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBeENGLEVBOENPckQsTUFBTSxDQUFDUCxLQUFQLElBQWdCbUUsT0FBTyxDQUFDbkUsS0FBekIsZ0JBQWtDO0FBQUcsdUJBQVMsRUFBQyxhQUFiO0FBQUEsd0JBQTRCTyxNQUFNLENBQUNQO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQWxDLGdCQUFtRjtBQUFHLHVCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQTlDekYsZUF3REU7QUFDRSx1QkFBUyxFQUFDLFdBRFo7QUFFRSxrQkFBSSxFQUFDO0FBRlAsdUpBR1ksUUFIWix1SUFJUSx3REFKUjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXhERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREQ7QUFBQTtBQVpIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQThFRSw4REFBQyxzREFBRDtBQUNFLG1CQUFXLEVBQUVnQixLQURmO0FBRUUsa0JBQVUsRUFBRUUsVUFGZDtBQUdFLFlBQUksRUFBRWdCLElBSFI7QUFJRSxlQUFPLEVBQUVDLE9BSlg7QUFLRSxtQkFBVyxFQUFFZ0IsU0FMZjtBQU1FLGFBQUssRUFBRTFDLFNBTlQ7QUFPRSx5QkFBaUIsRUFBRTJCO0FBUHJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE5RUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNEZELENBdk9EOztHQUFNekMsUztVQUNpQkUsaUU7OztNQURqQkYsUzs7QUF5T04sSUFBTTJFLFFBQVEsR0FBRyxTQUFYQSxRQUFXLFFBQWtCO0FBQUEsTUFBaEIxRSxVQUFnQixTQUFoQkEsVUFBZ0I7QUFDakMsc0JBQ0UsOERBQUMscUVBQUQ7QUFBQSwyQkFDRSw4REFBQyxTQUFEO0FBQVcsZ0JBQVUsRUFBRUE7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUtELENBTkQ7O01BQU0wRSxRO0FBUU4sK0RBQWVBLFFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvanVyc2VydmljZS42NmU1NzViYTIwNjM0ZDgyNWNhZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29uc3QgRmlyc3RTdGVwID0gKCkgPT4ge1xyXG4vLyAgIHJldHVybihcclxuLy8gICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtX3JlZ2lzdGVyJz5cclxuLy8gICAgICAgPGZvcm0+XHJcbi8vICAgICAgICAgPGlucHV0IHR5cGU9J251bWJlcicgbmFtZT0nYmluJyBwbGFjZWhvbGRlcj0n0JHQmNCdJyAvPlxyXG4vLyAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBkaXNhYmxlZCBuYW1lPSdvcmdhbml6YXRpb24nIHBsYWNlaG9sZGVyPScnIC8+XHJcbi8vICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIG5hbWU9J3Bvc2l0aW9uJyBwbGFjZWhvbGRlcj0n0JfQsNC90LjQvNCw0LXQvNCw0Y8g0LTQvtC70LbQvdC+0YHRgtGMJyAvPlxyXG4vLyAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBuYW1lPSdmaW8nIHBsYWNlaG9sZGVyPSfQpNCw0LzQuNC70LjRjyDQmNC80Y8nIC8+XHJcbi8vICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIG5hbWU9J3Bob25lJyBwbGFjZWhvbGRlcj0n0KLQtdC70LXRhNC+0L0nIC8+XHJcbi8vICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIG5hbWU9J2VtYWlsJyBwbGFjZWhvbGRlcj0nRW1haWwnIC8+XHJcbiAgICAgICAgXHJcbi8vICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0nc2luZ2xlYnRuJyB0eXBlPSdidXR0b24nIGNsYXNzTmFtZT0nYnV0dG9uJyB2YWx1ZT0n0J7RgtC/0YDQsNCy0LjRgtGMJyAvPlxyXG4vLyAgICAgICA8L2Zvcm0+XHJcbi8vICAgICA8L2Rpdj5cclxuLy8gICApXHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IEZpcnN0U3RlcFxyXG5cclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSW5wdXRNYXNrIGZyb20gJ3JlYWN0LWlucHV0LW1hc2snXHJcbmltcG9ydCBDb2RlTW9kYWwgZnJvbSAnLi4vc2hhcmVkL0NvZGVNb2RhbCdcclxuaW1wb3J0IHtyZXBsYWNlRGF0ZX0gZnJvbSAnLi4vLi4vZGVmYXVsdHMvZXh0cmFGdW5jdGlvbidcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnXHJcbmltcG9ydCBkaXNhYmxlU2Nyb2xsIGZyb20gJ2Rpc2FibGUtc2Nyb2xsJztcclxuaW1wb3J0IHsgVG9hc3RQcm92aWRlciwgdXNlVG9hc3RzIH0gZnJvbSAncmVhY3QtdG9hc3Qtbm90aWZpY2F0aW9ucydcclxuaW1wb3J0IHtGb3JtaWssIEZvcm0sIEZpZWxkfSBmcm9tICdmb3JtaWsnO1xyXG5pbXBvcnQge1xyXG4gIGVtYWlsVmFsaWQsXHJcbiAgcmVxdWlyZWQsXHJcbiAgcGhvbmVWYWxpZGF0aW9uLFxyXG4gIHBhc3N3b3JkVmFsaWQsXHJcbiAgYWNjZXB0Q2lycmlsaWMsXHJcbiAgcGhvbmVDaGVjayxcclxuICBpaW5WYWxpZGF0aW9uXHJcbn0gZnJvbSAnLi4vLi4vZGVmYXVsdHMvdmFsaWRhdGlvbnMnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vbG9hZGVyL0xvYWRlcidcclxuaW1wb3J0IHsgdmFsaWRhZ2UgfSBmcm9tICcuLi8uLi9kZWZhdWx0cy9paW5WYWxpZEFnZSdcclxuaW1wb3J0IHN3YWwgZnJvbSAnc3dlZXRhbGVydCdcclxuXHJcbmNvbnN0IFBob25lTWFzayA9ICh7XHJcbiAgZmllbGQsXHJcbiAgZm9ybSxcclxuICAuLi5wcm9wc1xyXG59KSA9PiA8SW5wdXRNYXNrXHJcbiAgbWFzaz1cIis3KDk5OSktOTk5LTk5OTlcIlxyXG4gIG1hc2tDaGFyPVwiIFwiXHJcbiAgY2xhc3NOYW1lPVwibXktaW5wdXRcIlxyXG4gIHsuLi5maWVsZH1cclxuICB7Li4ucHJvcHN9Lz5cclxuXHJcbmNvbnN0IElpbk1hc2sgPSAoe1xyXG4gIGZpZWxkLFxyXG4gIGZvcm0sXHJcbiAgLi4ucHJvcHNcclxufSkgPT4gPElucHV0TWFza1xyXG4gIG1hc2s9XCI5OTk5OTk5OTk5OTlcIlxyXG4gIG1hc2tDaGFyPVwiIFwiXHJcbiAgY2xhc3NOYW1lPVwibXktaW5wdXRcIlxyXG4gIHsuLi5maWVsZH1cclxuICB7Li4ucHJvcHN9Lz5cclxuXHJcbmNvbnN0IEZpcnN0U3RlcCA9ICh7c2V0TG9hZGluZ30pID0+IHtcclxuICBjb25zdCB7IGFkZFRvYXN0IH0gPSB1c2VUb2FzdHMoKVxyXG4gIGNvbnN0IFtmb3JtRGF0YSxcclxuICAgIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtlbWFpbDogJycsIHBob25lOiAnJywgZmlvOiAnJywgcGFzc3dvcmQ6ICcnLCB0eXBlOiAn0KTQuNC3INC70LjRhtC+J30pXHJcbiAgY29uc3QgW2Vycm9ycyxcclxuICAgIHNldEVycm9yc10gPSB1c2VTdGF0ZSh7ZW1haWw6ICcnLCBwaG9uZTogJycsIGZpbzogJycsIHBhc3N3b3JkOiAnJ30pXHJcbiAgY29uc3QgW2NvZGVFcnJvciwgc2V0Q29kZUVycm9yXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtiaW5WYWwsc2V0QmluXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtvcmdhbml6YXRpb24sc2V0T3JnYW5pemF0aW9uXSA9IHVzZVN0YXRlKHt2YWx1ZTogJycsIHR5cGU6IGZhbHNlfSlcclxuICBjb25zdCBbbW9kYWwsXHJcbiAgICBzZXRNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcclxuICAgIHNldE1vZGFsKGZhbHNlKVxyXG4gIH1cclxuXHJcblxyXG4gIGNvbnN0IGJpbkNoYW5nZSA9IGUgPT4ge1xyXG4gICAgY29uc3QgdmFsID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICBjb25zdCB2YWx1ZSA9IHZhbCA/IHZhbC5yZXBsYWNlKC8gL2csIFwiXCIpIDogJydcclxuICAgIHNldEJpbihlLnRhcmdldC52YWx1ZSlcclxuICAgIC8vIGlmKHZhbHVlLmxlbmd0aCA9PT0gMTIpIHtcclxuICAgIC8vICAgYXhpb3MuZ2V0KGBodHRwczovL2FwaS5tb25leS1tZW4ua3ovYXBpL3Rlc3RLb21wcmE/YmluPSR7dmFsdWV9YClcclxuICAgIC8vICAgICAudGhlbihyZXM9PiB7XHJcbiAgICAvLyAgICAgICBzZXRPcmdhbml6YXRpb24ocmVzLmRhdGEuY29udGVudFswXS5uYW1lKVxyXG4gICAgLy8gICAgIH0pXHJcbiAgICAvLyB9XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdmFsdWUgPSBiaW5WYWwgPyBiaW5WYWwucmVwbGFjZSgvIC9nLCBcIlwiKSA6ICcnXHJcbiAgICBpZih2YWx1ZS5sZW5ndGggPT09IDEyKSB7XHJcbiAgICAgIGF4aW9zLmdldChgaHR0cHM6Ly9hcGkubW9uZXktbWVuLmt6L2FwaS90ZXN0S29tcHJhP2Jpbj0ke3ZhbHVlfWApXHJcbiAgICAgICAgLnRoZW4ocmVzPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgaWYocmVzLmRhdGEuY29udGVudC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgc2V0T3JnYW5pemF0aW9uKHt2YWx1ZTogJ9Cf0L7QttCw0LvRg9C50YHRgtCwINCy0LLQtdC00LjRgtC1INC/0YDQsNCy0LjQu9GM0L3Ri9C5INCR0JjQnScsIHR5cGU6IGZhbHNlfSlcclxuICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgc2V0T3JnYW5pemF0aW9uKHt2YWx1ZTogcmVzLmRhdGEuY29udGVudFswXS5uYW1lLCB0eXBlOiB0cnVlfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gIH0sIFtiaW5WYWxdKVxyXG4gIGNvbnN0IFtjb2RlLFxyXG4gICAgc2V0Q29kZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgZ2V0SWRlbnRpZmljYXRpb24gPSAodmFsdWVzKSA9PiB7XHJcbiAgICBpZighdmFsaWRhZ2UodmFsdWVzLmlpbikpIHtcclxuICAgICAgc3dhbChcIk9vcHMhXCIsIGDQmNC30LLQuNC90LjRgtC1LCDRg9GB0LvRg9Cz0LAg0L7RgdGD0YnQtdGB0YLQstC70Y/QtdGC0YHRjyDQu9C40YbQsNC8INC00L7RgdGC0LjQs9GI0LjQtSAxOCDQu9C10YIuYCwgXCJpbmZvXCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgICAgc2V0Rm9ybURhdGEodmFsdWVzKVxyXG4gICAgICBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L2lkZW50aWZpY2F0aW9uYCwge1xyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgZmlvOiB2YWx1ZXMuZmlvLFxyXG4gICAgICAgICAgcGhvbmU6IHJlcGxhY2VEYXRlKHZhbHVlcy5waG9uZSksXHJcbiAgICAgICAgICBlbWFpbDogdmFsdWVzLmVtYWlsLFxyXG4gICAgICAgICAgcGFzc3dvcmQ6IHZhbHVlcy5wYXNzd29yZCxcclxuICAgICAgICAgIHR5cGU6IHZhbHVlcy50eXBlLFxyXG4gICAgICAgIH1cclxuICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgIGlmIChyZXMuZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICBzZXRNb2RhbCh0cnVlKVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgLy8gZGlzYWJsZVNjcm9sbC5vbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZighcmVzLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgYWRkVG9hc3QocmVzLmRhdGEubWVzc2FnZSwge1xyXG4gICAgICAgICAgICBhcHBlYXJhbmNlOiAnZXJyb3InLFxyXG4gICAgICAgICAgICBhdXRvRGlzbWlzczogdHJ1ZSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyPT4ge1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgaWYoZXJyLnJlc3BvbnNlKSB7XHJcbiAgICAgICAgICBhZGRUb2FzdChlcnIucmVzcG9uc2Uuc3RhdHVzLCB7XHJcbiAgICAgICAgICAgIGFwcGVhcmFuY2U6ICdlcnJvcicsXHJcbiAgICAgICAgICAgIGF1dG9EaXNtaXNzOiB0cnVlLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgIFxyXG4gIH1cclxuXHJcbiAgY29uc3QgZmlyc3RTdGVwID0gKGNvZGVWYWwpID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgIGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vc3RlcE9uZWAsIHtcclxuICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgZmlvOiBmb3JtRGF0YS5maW8sXHJcbiAgICAgICAgcGhvbmU6IHJlcGxhY2VEYXRlKGZvcm1EYXRhLnBob25lKSxcclxuICAgICAgICBlbWFpbDogZm9ybURhdGEuZW1haWwsXHJcbiAgICAgICAgcGFzc3dvcmQ6IGZvcm1EYXRhLnBhc3N3b3JkLFxyXG4gICAgICAgIHR5cGU6IGZvcm1EYXRhLnR5cGUsXHJcbiAgICAgICAgY29kZTogY29kZVZhbFxyXG4gICAgICB9XHJcbiAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICBjb29raWUuc2V0KCd0b2tlbicsIHJlcy5kYXRhLnRva2VuKVxyXG4gICAgICAgIGNvb2tpZS5zZXQoJ2xlYWRfaWQnLCByZXMuZGF0YS5pZClcclxuICAgICAgICBjb29raWUuc2V0KCdzdGVwJywgMilcclxuICAgICAgICBSb3V0ZXIucHVzaCgnL2dldHNlcnZpY2U/c3RlcD0yJylcclxuICAgICAgfVxyXG4gICAgICBpZighcmVzLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgIHNldENvZGVFcnJvcihyZXMuZGF0YS5tZXNzYWdlKVxyXG4gICAgICAgIGFkZFRvYXN0KGZpbmFsRXJyLCB7XHJcbiAgICAgICAgICBhcHBlYXJhbmNlOiAnZXJyb3InLFxyXG4gICAgICAgICAgYXV0b0Rpc21pc3M6IHRydWUsXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgc2V0RXJyb3JzKHtcclxuICAgICAgLi4uZXJyb3JzLFxyXG4gICAgICBlbWFpbDogZW1haWxWYWxpZChmb3JtRGF0YS5lbWFpbCksXHJcbiAgICAgIGZpbzogcmVxdWlyZWQoZm9ybURhdGEuZmlvKSxcclxuICAgICAgcGhvbmU6IHBob25lVmFsaWRhdGlvbihmb3JtRGF0YS5waG9uZSksXHJcbiAgICAgIHBhc3N3b3JkOiBwYXNzd29yZFZhbGlkKGZvcm1EYXRhLnBhc3N3b3JkKVxyXG4gICAgfSlcclxuXHJcbiAgICBnZXRJZGVudGlmaWNhdGlvbigpXHJcbiAgfVxyXG5cclxuICBjb25zdCBvbkNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBuYW1lID0gZS50YXJnZXQubmFtZTtcclxuICAgIHNldEZvcm1EYXRhKHtcclxuICAgICAgLi4uZm9ybURhdGEsXHJcbiAgICAgIFtuYW1lXTogZS50YXJnZXQudmFsdWVcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm1fcmVnaXN0ZXInPlxyXG4gICAgICAgIDxGb3JtaWtcclxuICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcclxuICAgICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICAgIGJpbjogJycsXHJcbiAgICAgICAgICBwb3NpdGlvbjogJycsXHJcbiAgICAgICAgICBwaG9uZTogJycsXHJcbiAgICAgICAgICBmaW86ICcnLFxyXG4gICAgICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICAgICAgdHlwZTogJ9Ck0LjQtyDQu9C40YbQvicsXHJcbiAgICAgICAgICBpaW46ICcnLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgICBvblN1Ym1pdD17KHZhbHVlcykgPT4ge2dldElkZW50aWZpY2F0aW9uKHZhbHVlcyl9fT5cclxuICAgICAgICAgIHsoe2Vycm9ycywgdG91Y2hlZH0pID0+IChcclxuICAgICAgICAgICAgPEZvcm0+XHJcblxyXG4gICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgbmFtZT0nYmluJ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0n0JHQmNCdJ1xyXG4gICAgICAgICAgICAgICAgdHlwZT0ndGVsJ1xyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2U9PmJpbkNoYW5nZShlKX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtiaW5WYWx9XHJcbiAgICAgICAgICAgICAgICAvLyB2YWxpZGF0ZT17aWluVmFsaWRhdGlvbn1cclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17SWluTWFza30+PC9GaWVsZD5cclxuICAgICAgICAgICAgICAgICB7LyogeyhlcnJvcnMuaWluICYmIHRvdWNoZWQuaWluKSA/IDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPntlcnJvcnMuaWlufTwvcD4gOiAgPHAgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+PC9wPn0gKi99XHJcbiAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXshb3JnYW5pemF0aW9uLnR5cGUgPyAndGV4dC1kYW5nZXInIDogJ3RleHQtaW5mbyd9Pntvcmdhbml6YXRpb24udmFsdWV9PC9wPlxyXG4gICAgICAgICAgICAgIHsvKiA8aW5wdXQgdHlwZT0ndGV4dCcgdmFsdWU9e29yZ2FuaXphdGlvbn0gZGlzYWJsZWQgbmFtZT0nb3JnYW5pemF0aW9uJyBwbGFjZWhvbGRlcj0nJyAvPiAqL31cclxuICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdmaW8nXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZT17YWNjZXB0Q2lycmlsaWN9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0n0KTQmNCeJ1xyXG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPSdvZmYnLz5cclxuICAgICAgICAgICAgICAgeyhlcnJvcnMuZmlvICYmIHRvdWNoZWQuZmlvKSA/IDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPntlcnJvcnMuZmlvfTwvcD4gOiAgPHAgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+PC9wPn1cclxuXHJcbiAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdwaG9uZSdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J9Ci0LXQu9C10YTQvtC9INC90L7QvNC10YAnXHJcbiAgICAgICAgICAgICAgICB0eXBlPSd0ZWwnXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZT17cGhvbmVWYWxpZGF0aW9ufVxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtQaG9uZU1hc2t9PjwvRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgeyhlcnJvcnMucGhvbmUgJiYgdG91Y2hlZC5waG9uZSkgPyA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz57ZXJyb3JzLnBob25lfTwvcD4gOiAgPHAgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+PC9wPn1cclxuXHJcbiAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdpaW4nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSfQmNCY0J0nXHJcbiAgICAgICAgICAgICAgICB0eXBlPSd0ZWwnXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZT17aWluVmFsaWRhdGlvbn1cclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17SWluTWFza30+PC9GaWVsZD5cclxuICAgICAgICAgICAgICAgICB7KGVycm9ycy5paW4gJiYgdG91Y2hlZC5paW4pID8gPHAgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+e2Vycm9ycy5paW59PC9wPiA6ICA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz48L3A+fVxyXG5cclxuICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdlbWFpbCdcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlPXtlbWFpbFZhbGlkfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VtYWlsJ1xyXG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPSdvZmYnLz5cclxuICAgICAgICAgICAgICAgICB7KGVycm9ycy5lbWFpbCAmJiB0b3VjaGVkLmVtYWlsKSA/IDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPntlcnJvcnMuZW1haWx9PC9wPiA6ICA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz48L3A+fVxyXG5cclxuICAgICAgICAgICAgICB7LyogPEZpZWxkXHJcbiAgICAgICAgICAgICAgICB0eXBlPSdwYXNzd29yZCdcclxuICAgICAgICAgICAgICAgIG5hbWU9J3Bhc3N3b3JkJ1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU9e3Bhc3N3b3JkVmFsaWR9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0n0J/RgNC40LTRg9C80LDQudGC0LUg0L/QsNGA0L7Qu9GMJ1xyXG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPSdvZmYnLz4gXHJcbiAgICAgICAgICAgICAgICAgeyhlcnJvcnMucGFzc3dvcmQgJiYgdG91Y2hlZC5wYXNzd29yZCkgPyA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz57ZXJyb3JzLnBhc3N3b3JkfTwvcD4gOiAgPHAgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+PC9wPn0gKi99XHJcblxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzaW5nbGVidG4nXHJcbiAgICAgICAgICAgICAgICB0eXBlPSdzdWJtaXQnXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2J1dHRvbidcclxuICAgICAgICAgICAgICAgIHZhbHVlPSfQntGC0L/RgNCw0LLQuNGC0YwnLz5cclxuICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0Zvcm1paz5cclxuICAgICAgICA8Q29kZU1vZGFsXHJcbiAgICAgICAgICBpc01vZGFsT3Blbj17bW9kYWx9XHJcbiAgICAgICAgICBjbG9zZU1vZGFsPXtjbG9zZU1vZGFsfVxyXG4gICAgICAgICAgY29kZT17Y29kZX1cclxuICAgICAgICAgIHNldENvZGU9e3NldENvZGV9XHJcbiAgICAgICAgICBvbkZpcnN0U3RlcD17Zmlyc3RTdGVwfVxyXG4gICAgICAgICAgZXJyb3I9e2NvZGVFcnJvcn1cclxuICAgICAgICAgIGdldElkZW50aWZpY2F0aW9uPXtnZXRJZGVudGlmaWNhdGlvbn0vPiBcclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBGaXJzdFJlZyA9ICh7c2V0TG9hZGluZ30pID0+IHtcclxuICByZXR1cm4oXHJcbiAgICA8VG9hc3RQcm92aWRlcj5cclxuICAgICAgPEZpcnN0U3RlcCBzZXRMb2FkaW5nPXtzZXRMb2FkaW5nfS8+XHJcbiAgICA8L1RvYXN0UHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaXJzdFJlZyJdLCJzb3VyY2VSb290IjoiIn0=