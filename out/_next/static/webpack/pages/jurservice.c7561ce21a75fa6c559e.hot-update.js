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
    } else {
      setOrganization({
        value: '',
        type: false
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
              lineNumber: 224,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              className: !organization.type ? 'text-danger' : 'text-info',
              children: organization.value
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 234,
              columnNumber: 18
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_11__.Field, {
              type: "text",
              name: "fio",
              validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_12__.acceptCirrilic,
              placeholder: "\u0424\u0418\u041E",
              autocomplete: "off"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 236,
              columnNumber: 15
            }, _this), errors.fio && touched.fio ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              className: "text-danger",
              children: errors.fio
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 242,
              columnNumber: 47
            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              className: "text-danger"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 242,
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
              lineNumber: 244,
              columnNumber: 15
            }, _this), errors.phone && touched.phone ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              className: "text-danger",
              children: errors.phone
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 251,
              columnNumber: 53
            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              className: "text-danger"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 251,
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
              lineNumber: 253,
              columnNumber: 15
            }, _this), errors.iin && touched.iin ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              className: "text-danger",
              children: errors.iin
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 260,
              columnNumber: 49
            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              className: "text-danger"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 260,
              columnNumber: 96
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_11__.Field, {
              type: "text",
              name: "email",
              validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_12__.emailValid,
              placeholder: "Email",
              autocomplete: "off"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 262,
              columnNumber: 15
            }, _this), errors.email && touched.email ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              className: "text-danger",
              children: errors.email
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 268,
              columnNumber: 53
            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              className: "text-danger"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 268,
              columnNumber: 102
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", (_jsxDEV2 = {
              className: "singlebtn",
              type: "submit"
            }, (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_jsxDEV2, "className", "button"), (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_jsxDEV2, "value", "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"), _jsxDEV2), void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 278,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 222,
            columnNumber: 13
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 209,
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
        lineNumber: 286,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 207,
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
      lineNumber: 303,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 302,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRzZXJ2aWNlL0ZpcnN0U3RlcEp1ci5qcyJdLCJuYW1lcyI6WyJQaG9uZU1hc2siLCJmaWVsZCIsImZvcm0iLCJwcm9wcyIsIklpbk1hc2siLCJGaXJzdFN0ZXAiLCJzZXRMb2FkaW5nIiwidXNlVG9hc3RzIiwiYWRkVG9hc3QiLCJ1c2VTdGF0ZSIsImVtYWlsIiwicGhvbmUiLCJmaW8iLCJwYXNzd29yZCIsInR5cGUiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwiY29kZUVycm9yIiwic2V0Q29kZUVycm9yIiwiYmluVmFsIiwic2V0QmluIiwidmFsdWUiLCJvcmdhbml6YXRpb24iLCJzZXRPcmdhbml6YXRpb24iLCJtb2RhbCIsInNldE1vZGFsIiwiY2xvc2VNb2RhbCIsImJpbkNoYW5nZSIsImUiLCJ2YWwiLCJ0YXJnZXQiLCJyZXBsYWNlIiwidXNlRWZmZWN0IiwibGVuZ3RoIiwiYXhpb3MiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJjb250ZW50IiwibmFtZSIsImNvZGUiLCJzZXRDb2RlIiwiZ2V0SWRlbnRpZmljYXRpb24iLCJ2YWx1ZXMiLCJ2YWxpZGFnZSIsImlpbiIsInN3YWwiLCJwcm9jZXNzIiwicGFyYW1zIiwicmVwbGFjZURhdGUiLCJzdWNjZXNzIiwibWVzc2FnZSIsImFwcGVhcmFuY2UiLCJhdXRvRGlzbWlzcyIsImVyciIsInJlc3BvbnNlIiwic3RhdHVzIiwiZmlyc3RTdGVwIiwiY29kZVZhbCIsImNvb2tpZSIsInRva2VuIiwiaWQiLCJSb3V0ZXIiLCJmaW5hbEVyciIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJlbWFpbFZhbGlkIiwicmVxdWlyZWQiLCJwaG9uZVZhbGlkYXRpb24iLCJwYXNzd29yZFZhbGlkIiwib25DaGFuZ2UiLCJiaW4iLCJwb3NpdGlvbiIsInRvdWNoZWQiLCJhY2NlcHRDaXJyaWxp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ZWJwYWNrL3BhZ2VzL2p1cnNlcnZpY2UuYzc1NjFjZTIxYTc1ZmE2YzU1OWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IEZpcnN0U3RlcCA9ICgpID0+IHtcclxuLy8gICByZXR1cm4oXHJcbi8vICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybV9yZWdpc3Rlcic+XHJcbi8vICAgICAgIDxmb3JtPlxyXG4vLyAgICAgICAgIDxpbnB1dCB0eXBlPSdudW1iZXInIG5hbWU9J2JpbicgcGxhY2Vob2xkZXI9J9CR0JjQnScgLz5cclxuLy8gICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgZGlzYWJsZWQgbmFtZT0nb3JnYW5pemF0aW9uJyBwbGFjZWhvbGRlcj0nJyAvPlxyXG4vLyAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBuYW1lPSdwb3NpdGlvbicgcGxhY2Vob2xkZXI9J9CX0LDQvdC40LzQsNC10LzQsNGPINC00L7Qu9C20L3QvtGB0YLRjCcgLz5cclxuLy8gICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgbmFtZT0nZmlvJyBwbGFjZWhvbGRlcj0n0KTQsNC80LjQu9C40Y8g0JjQvNGPJyAvPlxyXG4vLyAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBuYW1lPSdwaG9uZScgcGxhY2Vob2xkZXI9J9Ci0LXQu9C10YTQvtC9JyAvPlxyXG4vLyAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBuYW1lPSdlbWFpbCcgcGxhY2Vob2xkZXI9J0VtYWlsJyAvPlxyXG4gICAgICAgIFxyXG4vLyAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J3NpbmdsZWJ0bicgdHlwZT0nYnV0dG9uJyBjbGFzc05hbWU9J2J1dHRvbicgdmFsdWU9J9Ce0YLQv9GA0LDQstC40YLRjCcgLz5cclxuLy8gICAgICAgPC9mb3JtPlxyXG4vLyAgICAgPC9kaXY+XHJcbi8vICAgKVxyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBGaXJzdFN0ZXBcclxuXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IElucHV0TWFzayBmcm9tICdyZWFjdC1pbnB1dC1tYXNrJ1xyXG5pbXBvcnQgQ29kZU1vZGFsIGZyb20gJy4uL3NoYXJlZC9Db2RlTW9kYWwnXHJcbmltcG9ydCB7cmVwbGFjZURhdGV9IGZyb20gJy4uLy4uL2RlZmF1bHRzL2V4dHJhRnVuY3Rpb24nXHJcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJ1xyXG5pbXBvcnQgZGlzYWJsZVNjcm9sbCBmcm9tICdkaXNhYmxlLXNjcm9sbCc7XHJcbmltcG9ydCB7IFRvYXN0UHJvdmlkZXIsIHVzZVRvYXN0cyB9IGZyb20gJ3JlYWN0LXRvYXN0LW5vdGlmaWNhdGlvbnMnXHJcbmltcG9ydCB7Rm9ybWlrLCBGb3JtLCBGaWVsZH0gZnJvbSAnZm9ybWlrJztcclxuaW1wb3J0IHtcclxuICBlbWFpbFZhbGlkLFxyXG4gIHJlcXVpcmVkLFxyXG4gIHBob25lVmFsaWRhdGlvbixcclxuICBwYXNzd29yZFZhbGlkLFxyXG4gIGFjY2VwdENpcnJpbGljLFxyXG4gIHBob25lQ2hlY2ssXHJcbiAgaWluVmFsaWRhdGlvblxyXG59IGZyb20gJy4uLy4uL2RlZmF1bHRzL3ZhbGlkYXRpb25zJ1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL2xvYWRlci9Mb2FkZXInXHJcbmltcG9ydCB7IHZhbGlkYWdlIH0gZnJvbSAnLi4vLi4vZGVmYXVsdHMvaWluVmFsaWRBZ2UnXHJcbmltcG9ydCBzd2FsIGZyb20gJ3N3ZWV0YWxlcnQnXHJcblxyXG5jb25zdCBQaG9uZU1hc2sgPSAoe1xyXG4gIGZpZWxkLFxyXG4gIGZvcm0sXHJcbiAgLi4ucHJvcHNcclxufSkgPT4gPElucHV0TWFza1xyXG4gIG1hc2s9XCIrNyg5OTkpLTk5OS05OTk5XCJcclxuICBtYXNrQ2hhcj1cIiBcIlxyXG4gIGNsYXNzTmFtZT1cIm15LWlucHV0XCJcclxuICB7Li4uZmllbGR9XHJcbiAgey4uLnByb3BzfS8+XHJcblxyXG5jb25zdCBJaW5NYXNrID0gKHtcclxuICBmaWVsZCxcclxuICBmb3JtLFxyXG4gIC4uLnByb3BzXHJcbn0pID0+IDxJbnB1dE1hc2tcclxuICBtYXNrPVwiOTk5OTk5OTk5OTk5XCJcclxuICBtYXNrQ2hhcj1cIiBcIlxyXG4gIGNsYXNzTmFtZT1cIm15LWlucHV0XCJcclxuICB7Li4uZmllbGR9XHJcbiAgey4uLnByb3BzfS8+XHJcblxyXG5jb25zdCBGaXJzdFN0ZXAgPSAoe3NldExvYWRpbmd9KSA9PiB7XHJcbiAgY29uc3QgeyBhZGRUb2FzdCB9ID0gdXNlVG9hc3RzKClcclxuICBjb25zdCBbZm9ybURhdGEsXHJcbiAgICBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7ZW1haWw6ICcnLCBwaG9uZTogJycsIGZpbzogJycsIHBhc3N3b3JkOiAnJywgdHlwZTogJ9Ck0LjQtyDQu9C40YbQvid9KVxyXG4gIGNvbnN0IFtlcnJvcnMsXHJcbiAgICBzZXRFcnJvcnNdID0gdXNlU3RhdGUoe2VtYWlsOiAnJywgcGhvbmU6ICcnLCBmaW86ICcnLCBwYXNzd29yZDogJyd9KVxyXG4gIGNvbnN0IFtjb2RlRXJyb3IsIHNldENvZGVFcnJvcl0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbYmluVmFsLHNldEJpbl0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbb3JnYW5pemF0aW9uLHNldE9yZ2FuaXphdGlvbl0gPSB1c2VTdGF0ZSh7dmFsdWU6ICcnLCB0eXBlOiBmYWxzZX0pXHJcbiAgY29uc3QgW21vZGFsLFxyXG4gICAgc2V0TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRNb2RhbChmYWxzZSlcclxuICB9XHJcblxyXG5cclxuICBjb25zdCBiaW5DaGFuZ2UgPSBlID0+IHtcclxuICAgIGNvbnN0IHZhbCA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgY29uc3QgdmFsdWUgPSB2YWwgPyB2YWwucmVwbGFjZSgvIC9nLCBcIlwiKSA6ICcnXHJcbiAgICBzZXRCaW4oZS50YXJnZXQudmFsdWUpXHJcbiAgICAvLyBpZih2YWx1ZS5sZW5ndGggPT09IDEyKSB7XHJcbiAgICAvLyAgIGF4aW9zLmdldChgaHR0cHM6Ly9hcGkubW9uZXktbWVuLmt6L2FwaS90ZXN0S29tcHJhP2Jpbj0ke3ZhbHVlfWApXHJcbiAgICAvLyAgICAgLnRoZW4ocmVzPT4ge1xyXG4gICAgLy8gICAgICAgc2V0T3JnYW5pemF0aW9uKHJlcy5kYXRhLmNvbnRlbnRbMF0ubmFtZSlcclxuICAgIC8vICAgICB9KVxyXG4gICAgLy8gfVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHZhbHVlID0gYmluVmFsID8gYmluVmFsLnJlcGxhY2UoLyAvZywgXCJcIikgOiAnJ1xyXG4gICAgaWYodmFsdWUubGVuZ3RoID09PSAxMikge1xyXG4gICAgICBheGlvcy5nZXQoYGh0dHBzOi8vYXBpLm1vbmV5LW1lbi5rei9hcGkvdGVzdEtvbXByYT9iaW49JHt2YWx1ZX1gKVxyXG4gICAgICAgIC50aGVuKHJlcz0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgIGlmKHJlcy5kYXRhLmNvbnRlbnQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHNldE9yZ2FuaXphdGlvbih7dmFsdWU6ICfQn9C+0LbQsNC70YPQudGB0YLQsCDQstCy0LXQtNC40YLQtSDQv9GA0LDQstC40LvRjNC90YvQuSDQkdCY0J0nLCB0eXBlOiBmYWxzZX0pXHJcbiAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIHNldE9yZ2FuaXphdGlvbih7dmFsdWU6IHJlcy5kYXRhLmNvbnRlbnRbMF0ubmFtZSwgdHlwZTogdHJ1ZX0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1lbHNlIHtcclxuICAgICAgc2V0T3JnYW5pemF0aW9uKHt2YWx1ZTogJycsIHR5cGU6IGZhbHNlfSlcclxuICAgIH1cclxuICB9LCBbYmluVmFsXSlcclxuICBjb25zdCBbY29kZSxcclxuICAgIHNldENvZGVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IGdldElkZW50aWZpY2F0aW9uID0gKHZhbHVlcykgPT4ge1xyXG4gICAgaWYoIXZhbGlkYWdlKHZhbHVlcy5paW4pKSB7XHJcbiAgICAgIHN3YWwoXCJPb3BzIVwiLCBg0JjQt9Cy0LjQvdC40YLQtSwg0YPRgdC70YPQs9CwINC+0YHRg9GJ0LXRgdGC0LLQu9GP0LXRgtGB0Y8g0LvQuNGG0LDQvCDQtNC+0YHRgtC40LPRiNC40LUgMTgg0LvQtdGCLmAsIFwiaW5mb1wiKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICAgIHNldEZvcm1EYXRhKHZhbHVlcylcclxuICAgICAgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9pZGVudGlmaWNhdGlvbmAsIHtcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIGZpbzogdmFsdWVzLmZpbyxcclxuICAgICAgICAgIHBob25lOiByZXBsYWNlRGF0ZSh2YWx1ZXMucGhvbmUpLFxyXG4gICAgICAgICAgZW1haWw6IHZhbHVlcy5lbWFpbCxcclxuICAgICAgICAgIHBhc3N3b3JkOiB2YWx1ZXMucGFzc3dvcmQsXHJcbiAgICAgICAgICB0eXBlOiB2YWx1ZXMudHlwZSxcclxuICAgICAgICB9XHJcbiAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICBpZiAocmVzLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgc2V0TW9kYWwodHJ1ZSlcclxuICAgICAgICBcclxuICAgICAgICAgIC8vIGRpc2FibGVTY3JvbGwub24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIXJlcy5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgIGFkZFRvYXN0KHJlcy5kYXRhLm1lc3NhZ2UsIHtcclxuICAgICAgICAgICAgYXBwZWFyYW5jZTogJ2Vycm9yJyxcclxuICAgICAgICAgICAgYXV0b0Rpc21pc3M6IHRydWUsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycj0+IHtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgIGlmKGVyci5yZXNwb25zZSkge1xyXG4gICAgICAgICAgYWRkVG9hc3QoZXJyLnJlc3BvbnNlLnN0YXR1cywge1xyXG4gICAgICAgICAgICBhcHBlYXJhbmNlOiAnZXJyb3InLFxyXG4gICAgICAgICAgICBhdXRvRGlzbWlzczogdHJ1ZSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICBcclxuICB9XHJcblxyXG4gIGNvbnN0IGZpcnN0U3RlcCA9IChjb2RlVmFsKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L3N0ZXBPbmVgLCB7XHJcbiAgICAgIHBhcmFtczoge1xyXG4gICAgICAgIGZpbzogZm9ybURhdGEuZmlvLFxyXG4gICAgICAgIHBob25lOiByZXBsYWNlRGF0ZShmb3JtRGF0YS5waG9uZSksXHJcbiAgICAgICAgZW1haWw6IGZvcm1EYXRhLmVtYWlsLFxyXG4gICAgICAgIHBhc3N3b3JkOiBmb3JtRGF0YS5wYXNzd29yZCxcclxuICAgICAgICB0eXBlOiBmb3JtRGF0YS50eXBlLFxyXG4gICAgICAgIGNvZGU6IGNvZGVWYWxcclxuICAgICAgfVxyXG4gICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgIGlmIChyZXMuZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgY29va2llLnNldCgndG9rZW4nLCByZXMuZGF0YS50b2tlbilcclxuICAgICAgICBjb29raWUuc2V0KCdsZWFkX2lkJywgcmVzLmRhdGEuaWQpXHJcbiAgICAgICAgY29va2llLnNldCgnc3RlcCcsIDIpXHJcbiAgICAgICAgUm91dGVyLnB1c2goJy9nZXRzZXJ2aWNlP3N0ZXA9MicpXHJcbiAgICAgIH1cclxuICAgICAgaWYoIXJlcy5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICBzZXRDb2RlRXJyb3IocmVzLmRhdGEubWVzc2FnZSlcclxuICAgICAgICBhZGRUb2FzdChmaW5hbEVyciwge1xyXG4gICAgICAgICAgYXBwZWFyYW5jZTogJ2Vycm9yJyxcclxuICAgICAgICAgIGF1dG9EaXNtaXNzOiB0cnVlLFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHNldEVycm9ycyh7XHJcbiAgICAgIC4uLmVycm9ycyxcclxuICAgICAgZW1haWw6IGVtYWlsVmFsaWQoZm9ybURhdGEuZW1haWwpLFxyXG4gICAgICBmaW86IHJlcXVpcmVkKGZvcm1EYXRhLmZpbyksXHJcbiAgICAgIHBob25lOiBwaG9uZVZhbGlkYXRpb24oZm9ybURhdGEucGhvbmUpLFxyXG4gICAgICBwYXNzd29yZDogcGFzc3dvcmRWYWxpZChmb3JtRGF0YS5wYXNzd29yZClcclxuICAgIH0pXHJcblxyXG4gICAgZ2V0SWRlbnRpZmljYXRpb24oKVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25DaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgbmFtZSA9IGUudGFyZ2V0Lm5hbWU7XHJcbiAgICBzZXRGb3JtRGF0YSh7XHJcbiAgICAgIC4uLmZvcm1EYXRhLFxyXG4gICAgICBbbmFtZV06IGUudGFyZ2V0LnZhbHVlXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtX3JlZ2lzdGVyJz5cclxuICAgICAgICA8Rm9ybWlrXHJcbiAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7XHJcbiAgICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgICBiaW46ICcnLFxyXG4gICAgICAgICAgcG9zaXRpb246ICcnLFxyXG4gICAgICAgICAgcGhvbmU6ICcnLFxyXG4gICAgICAgICAgZmlvOiAnJyxcclxuICAgICAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgICAgIHR5cGU6ICfQpNC40Lcg0LvQuNGG0L4nLFxyXG4gICAgICAgICAgaWluOiAnJyxcclxuICAgICAgICB9fVxyXG4gICAgICAgICAgb25TdWJtaXQ9eyh2YWx1ZXMpID0+IHtnZXRJZGVudGlmaWNhdGlvbih2YWx1ZXMpfX0+XHJcbiAgICAgICAgICB7KHtlcnJvcnMsIHRvdWNoZWR9KSA9PiAoXHJcbiAgICAgICAgICAgIDxGb3JtPlxyXG5cclxuICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgIG5hbWU9J2JpbidcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J9CR0JjQnSdcclxuICAgICAgICAgICAgICAgIHR5cGU9J3RlbCdcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlPT5iaW5DaGFuZ2UoZSl9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17YmluVmFsfVxyXG4gICAgICAgICAgICAgICAgLy8gdmFsaWRhdGU9e2lpblZhbGlkYXRpb259XHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0lpbk1hc2t9PjwvRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgey8qIHsoZXJyb3JzLmlpbiAmJiB0b3VjaGVkLmlpbikgPyA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz57ZXJyb3JzLmlpbn08L3A+IDogIDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPjwvcD59ICovfVxyXG4gICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17IW9yZ2FuaXphdGlvbi50eXBlID8gJ3RleHQtZGFuZ2VyJyA6ICd0ZXh0LWluZm8nfT57b3JnYW5pemF0aW9uLnZhbHVlfTwvcD5cclxuICAgICAgICAgICAgICB7LyogPGlucHV0IHR5cGU9J3RleHQnIHZhbHVlPXtvcmdhbml6YXRpb259IGRpc2FibGVkIG5hbWU9J29yZ2FuaXphdGlvbicgcGxhY2Vob2xkZXI9JycgLz4gKi99XHJcbiAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgbmFtZT0nZmlvJ1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU9e2FjY2VwdENpcnJpbGljfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J9Ck0JjQnidcclxuICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT0nb2ZmJy8+XHJcbiAgICAgICAgICAgICAgIHsoZXJyb3JzLmZpbyAmJiB0b3VjaGVkLmZpbykgPyA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz57ZXJyb3JzLmZpb308L3A+IDogIDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPjwvcD59XHJcblxyXG4gICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgbmFtZT0ncGhvbmUnXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSfQotC10LvQtdGE0L7QvSDQvdC+0LzQtdGAJ1xyXG4gICAgICAgICAgICAgICAgdHlwZT0ndGVsJ1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU9e3Bob25lVmFsaWRhdGlvbn1cclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17UGhvbmVNYXNrfT48L0ZpZWxkPlxyXG4gICAgICAgICAgICAgICAgIHsoZXJyb3JzLnBob25lICYmIHRvdWNoZWQucGhvbmUpID8gPHAgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+e2Vycm9ycy5waG9uZX08L3A+IDogIDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPjwvcD59XHJcblxyXG4gICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgbmFtZT0naWluJ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0n0JjQmNCdJ1xyXG4gICAgICAgICAgICAgICAgdHlwZT0ndGVsJ1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU9e2lpblZhbGlkYXRpb259XHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0lpbk1hc2t9PjwvRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgeyhlcnJvcnMuaWluICYmIHRvdWNoZWQuaWluKSA/IDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPntlcnJvcnMuaWlufTwvcD4gOiAgPHAgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+PC9wPn1cclxuXHJcbiAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgbmFtZT0nZW1haWwnXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZT17ZW1haWxWYWxpZH1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbWFpbCdcclxuICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT0nb2ZmJy8+XHJcbiAgICAgICAgICAgICAgICAgeyhlcnJvcnMuZW1haWwgJiYgdG91Y2hlZC5lbWFpbCkgPyA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz57ZXJyb3JzLmVtYWlsfTwvcD4gOiAgPHAgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+PC9wPn1cclxuXHJcbiAgICAgICAgICAgICAgey8qIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdwYXNzd29yZCdcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlPXtwYXNzd29yZFZhbGlkfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J9Cf0YDQuNC00YPQvNCw0LnRgtC1INC/0LDRgNC+0LvRjCdcclxuICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT0nb2ZmJy8+IFxyXG4gICAgICAgICAgICAgICAgIHsoZXJyb3JzLnBhc3N3b3JkICYmIHRvdWNoZWQucGFzc3dvcmQpID8gPHAgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+e2Vycm9ycy5wYXNzd29yZH08L3A+IDogIDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPjwvcD59ICovfVxyXG5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2luZ2xlYnRuJ1xyXG4gICAgICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdidXR0b24nXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT0n0J7RgtC/0YDQsNCy0LjRgtGMJy8+XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Gb3JtaWs+XHJcbiAgICAgICAgPENvZGVNb2RhbFxyXG4gICAgICAgICAgaXNNb2RhbE9wZW49e21vZGFsfVxyXG4gICAgICAgICAgY2xvc2VNb2RhbD17Y2xvc2VNb2RhbH1cclxuICAgICAgICAgIGNvZGU9e2NvZGV9XHJcbiAgICAgICAgICBzZXRDb2RlPXtzZXRDb2RlfVxyXG4gICAgICAgICAgb25GaXJzdFN0ZXA9e2ZpcnN0U3RlcH1cclxuICAgICAgICAgIGVycm9yPXtjb2RlRXJyb3J9XHJcbiAgICAgICAgICBnZXRJZGVudGlmaWNhdGlvbj17Z2V0SWRlbnRpZmljYXRpb259Lz4gXHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgRmlyc3RSZWcgPSAoe3NldExvYWRpbmd9KSA9PiB7XHJcbiAgcmV0dXJuKFxyXG4gICAgPFRvYXN0UHJvdmlkZXI+XHJcbiAgICAgIDxGaXJzdFN0ZXAgc2V0TG9hZGluZz17c2V0TG9hZGluZ30vPlxyXG4gICAgPC9Ub2FzdFByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlyc3RSZWciXSwic291cmNlUm9vdCI6IiJ9