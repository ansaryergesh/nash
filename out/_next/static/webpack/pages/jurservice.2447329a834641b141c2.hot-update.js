self["webpackHotUpdate_N_E"]("pages/jurservice",{

/***/ "./components/getservice/FirstStepJur.js":
/*!***********************************************!*\
  !*** ./components/getservice/FirstStepJur.js ***!
  \***********************************************/
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
/* harmony import */ var _defaults_positions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../defaults/positions */ "./defaults/positions.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-toast-notifications */ "./node_modules/react-toast-notifications/dist/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _defaults_validations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../defaults/validations */ "./defaults/validations.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _loader_Loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../loader/Loader */ "./components/loader/Loader.js");
/* harmony import */ var _defaults_iinValidAge__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../defaults/iinValidAge */ "./defaults/iinValidAge.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _shared_LoaderText__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/LoaderText */ "./components/shared/LoaderText.js");
/* harmony import */ var _Masks_PhoneMask__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Masks/PhoneMask */ "./components/Masks/PhoneMask.js");
/* harmony import */ var _Masks_IinMask__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../Masks/IinMask */ "./components/Masks/IinMask.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "E:\\job\\nashcompany\\components\\getservice\\FirstStepJur.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

















var FirstStep = function FirstStep(_ref) {
  _s();

  var setLoading = _ref.setLoading;

  var _useToasts = (0,react_toast_notifications__WEBPACK_IMPORTED_MODULE_8__.useToasts)(),
      addToast = _useToasts.addToast;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
    email: '',
    phone: '',
    fio: '',
    password: '',
    type: 'Юр лицо'
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

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      binVal = _useState4[0],
      setBin = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
    value: '',
    type: false,
    loading: false
  }),
      organization = _useState5[0],
      setOrganization = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
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

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    var value = binVal ? binVal.replace(/ /g, "") : '';

    if (value.length === 12) {
      setOrganization(_objectSpread(_objectSpread({}, organization), {}, {
        type: true,
        value: 'Загрузка...',
        loading: true
      }));
      axios__WEBPACK_IMPORTED_MODULE_2___default().get("https://api.money-men.kz/api/testKompra?bin=".concat(value), {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      }).then(function (res) {
        console.log(res);

        if (res.data.content.length === 0) {
          setTimeout(function () {
            setOrganization({
              value: 'Пожалуйста введите правильный БИН',
              type: false,
              loading: false
            });
          }, 1000);
        } else {
          setOrganization({
            value: res.data.content[0].name,
            type: true,
            loading: false
          });
        }
      })["catch"](function (err) {
        console.log(err);

        if (err.response) {
          console.log(err.response.status);
        }

        setOrganization({
          value: 'Пожалуйста введите правильный БИН',
          type: false,
          loading: false
        });
      });
    } else {
      setOrganization({
        value: '',
        type: false,
        loading: false
      });
    }
  }, [binVal]);

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      code = _useState7[0],
      setCode = _useState7[1];

  var getIdentification = function getIdentification(values) {
    if (!(0,_defaults_iinValidAge__WEBPACK_IMPORTED_MODULE_13__.validage)(values.iin)) {
      sweetalert__WEBPACK_IMPORTED_MODULE_14___default()("Oops!", "\u0418\u0437\u0432\u0438\u043D\u0438\u0442\u0435, \u0443\u0441\u043B\u0443\u0433\u0430 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043B\u0438\u0446\u0430\u043C \u0434\u043E\u0441\u0442\u0438\u0433\u0448\u0438\u0435 18 \u043B\u0435\u0442.", "info");
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
        setFormData();
        setLoading(false);
        console.log(res);

        if (res.data.success) {
          setModal(true);
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
        phone: (0,_defaults_extraFunction__WEBPACK_IMPORTED_MODULE_5__.replaceDate)(formData.phone),
        email: formData.email,
        password: formData.password,
        type: formData.type,
        code: codeVal,
        source: js_cookie__WEBPACK_IMPORTED_MODULE_7___default().get('utm_source') + '_1' || 0
      }
    }).then(function (res) {
      setLoading(false);
      console.log(res);

      if (res.data.success) {
        js_cookie__WEBPACK_IMPORTED_MODULE_7___default().set('token', res.data.token);
        js_cookie__WEBPACK_IMPORTED_MODULE_7___default().set('lead_id', res.data.id);
        js_cookie__WEBPACK_IMPORTED_MODULE_7___default().set('step', 2);
        next_router__WEBPACK_IMPORTED_MODULE_11___default().push('/jurservice?step=2');
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
      email: (0,_defaults_validations__WEBPACK_IMPORTED_MODULE_10__.emailValid)(formData.email),
      fio: (0,_defaults_validations__WEBPACK_IMPORTED_MODULE_10__.required)(formData.fio),
      phone: (0,_defaults_validations__WEBPACK_IMPORTED_MODULE_10__.phoneValidation)(formData.phone),
      password: (0,_defaults_validations__WEBPACK_IMPORTED_MODULE_10__.passwordValid)(formData.password)
    }));
    getIdentification();
  };

  var onChange = function onChange(e) {
    var name = e.target.name;
    setFormData(_objectSpread(_objectSpread({}, formData), {}, (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, name, e.target.value)));
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "form_register",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_9__.Formik, {
        initialValues: {
          email: '',
          bin: '',
          position: '1',
          phone: '',
          fio: '',
          password: '',
          type: 'Юр лицо',
          iin: ''
        },
        onSubmit: function onSubmit(values) {
          getIdentification(values);
        },
        children: function children(_ref2) {
          var _jsxDEV2;

          var errors = _ref2.errors,
              touched = _ref2.touched;
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_9__.Form, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_9__.Field, {
              name: "bin",
              className: "form-control",
              placeholder: "\u0411\u0418\u041D",
              type: "tel",
              onChange: function onChange(e) {
                return binChange(e);
              },
              value: binVal // validate={iinValidation}
              ,
              component: _Masks_IinMask__WEBPACK_IMPORTED_MODULE_17__.default
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 220,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              type: "text",
              className: organization.type === false && organization.value && 'disabled_error',
              value: organization.value,
              disabled: true,
              name: "organization",
              placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 232,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_9__.Field, {
              as: "select",
              type: "text",
              name: "position",
              validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_10__.required,
              placeholder: "\u0417\u0430\u043D\u0438\u043C\u0430\u0435\u043C\u0430\u044F \u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C",
              autocomplete: "off",
              children: _defaults_positions__WEBPACK_IMPORTED_MODULE_6__.positions.map(function (p) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                  value: p.value,
                  children: p.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 240,
                  columnNumber: 19
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 233,
              columnNumber: 15
            }, _this), errors.position && touched.position ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "text-danger",
              children: errors.position
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 242,
              columnNumber: 57
            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "text-danger"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 242,
              columnNumber: 109
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_9__.Field, {
              type: "text",
              name: "fio",
              validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_10__.acceptCirrilic,
              placeholder: "\u0424\u0418\u041E",
              autocomplete: "off"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 244,
              columnNumber: 15
            }, _this), errors.fio && touched.fio ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "text-danger",
              children: errors.fio
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 250,
              columnNumber: 47
            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "text-danger"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 250,
              columnNumber: 94
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_9__.Field, {
              name: "phone",
              className: "form-control",
              placeholder: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D \u043D\u043E\u043C\u0435\u0440",
              type: "tel",
              validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_10__.phoneValidation,
              component: _Masks_PhoneMask__WEBPACK_IMPORTED_MODULE_16__.default
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 252,
              columnNumber: 15
            }, _this), errors.phone && touched.phone ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "text-danger",
              children: errors.phone
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 259,
              columnNumber: 53
            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "text-danger"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 259,
              columnNumber: 102
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_9__.Field, {
              name: "iin",
              className: "form-control",
              placeholder: "\u0418\u0418\u041D",
              type: "tel",
              validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_10__.iinValidation,
              component: _Masks_IinMask__WEBPACK_IMPORTED_MODULE_17__.default
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 261,
              columnNumber: 15
            }, _this), errors.iin && touched.iin ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "text-danger",
              children: errors.iin
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 268,
              columnNumber: 49
            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "text-danger"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 268,
              columnNumber: 96
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_9__.Field, {
              type: "text",
              name: "email",
              validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_10__.emailValid,
              placeholder: "Email",
              autocomplete: "off"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 270,
              columnNumber: 15
            }, _this), errors.email && touched.email ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "text-danger",
              children: errors.email
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 276,
              columnNumber: 53
            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "text-danger"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 276,
              columnNumber: 102
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", (_jsxDEV2 = {
              className: "singlebtn",
              type: "submit"
            }, (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_jsxDEV2, "className", "button"), (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_jsxDEV2, "value", "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"), _jsxDEV2), void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 286,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 218,
            columnNumber: 13
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 205,
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
        lineNumber: 294,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 203,
    columnNumber: 5
  }, _this);
};

_s(FirstStep, "O2euLtvu9bKVBLmasLLzbAFDdYM=", false, function () {
  return [react_toast_notifications__WEBPACK_IMPORTED_MODULE_8__.useToasts];
});

_c = FirstStep;

var FirstReg = function FirstReg(_ref3) {
  var setLoading = _ref3.setLoading;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toast_notifications__WEBPACK_IMPORTED_MODULE_8__.ToastProvider, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FirstStep, {
      setLoading: setLoading
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 310,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRzZXJ2aWNlL0ZpcnN0U3RlcEp1ci5qcyJdLCJuYW1lcyI6WyJGaXJzdFN0ZXAiLCJzZXRMb2FkaW5nIiwidXNlVG9hc3RzIiwiYWRkVG9hc3QiLCJ1c2VTdGF0ZSIsImVtYWlsIiwicGhvbmUiLCJmaW8iLCJwYXNzd29yZCIsInR5cGUiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwiY29kZUVycm9yIiwic2V0Q29kZUVycm9yIiwiYmluVmFsIiwic2V0QmluIiwidmFsdWUiLCJsb2FkaW5nIiwib3JnYW5pemF0aW9uIiwic2V0T3JnYW5pemF0aW9uIiwibW9kYWwiLCJzZXRNb2RhbCIsImNsb3NlTW9kYWwiLCJiaW5DaGFuZ2UiLCJlIiwidmFsIiwidGFyZ2V0IiwicmVwbGFjZSIsInVzZUVmZmVjdCIsImxlbmd0aCIsImF4aW9zIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImNvbnRlbnQiLCJzZXRUaW1lb3V0IiwibmFtZSIsImVyciIsInJlc3BvbnNlIiwic3RhdHVzIiwiY29kZSIsInNldENvZGUiLCJnZXRJZGVudGlmaWNhdGlvbiIsInZhbHVlcyIsInZhbGlkYWdlIiwiaWluIiwic3dhbCIsInByb2Nlc3MiLCJwYXJhbXMiLCJyZXBsYWNlRGF0ZSIsInNvdXJjZSIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwiYXBwZWFyYW5jZSIsImF1dG9EaXNtaXNzIiwiZmlyc3RTdGVwIiwiY29kZVZhbCIsImNvb2tpZSIsInRva2VuIiwiaWQiLCJSb3V0ZXIiLCJmaW5hbEVyciIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJlbWFpbFZhbGlkIiwicmVxdWlyZWQiLCJwaG9uZVZhbGlkYXRpb24iLCJwYXNzd29yZFZhbGlkIiwib25DaGFuZ2UiLCJiaW4iLCJwb3NpdGlvbiIsInRvdWNoZWQiLCJJaW5NYXNrIiwicG9zaXRpb25zIiwicCIsImFjY2VwdENpcnJpbGljIiwiUGhvbmVNYXNrIiwiaWluVmFsaWRhdGlvbiIsIkZpcnN0UmVnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFrQjtBQUFBOztBQUFBLE1BQWhCQyxVQUFnQixRQUFoQkEsVUFBZ0I7O0FBQUEsbUJBQ2JDLG9FQUFTLEVBREk7QUFBQSxNQUMxQkMsUUFEMEIsY0FDMUJBLFFBRDBCOztBQUFBLGtCQUdqQkMsK0NBQVEsQ0FBQztBQUFDQyxTQUFLLEVBQUUsRUFBUjtBQUFZQyxTQUFLLEVBQUUsRUFBbkI7QUFBdUJDLE9BQUcsRUFBRSxFQUE1QjtBQUFnQ0MsWUFBUSxFQUFFLEVBQTFDO0FBQThDQyxRQUFJLEVBQUU7QUFBcEQsR0FBRCxDQUhTO0FBQUEsTUFFM0JDLFFBRjJCO0FBQUEsTUFHaENDLFdBSGdDOztBQUFBLG1CQUtuQlAsK0NBQVEsQ0FBQztBQUFDQyxTQUFLLEVBQUUsRUFBUjtBQUFZQyxTQUFLLEVBQUUsRUFBbkI7QUFBdUJDLE9BQUcsRUFBRSxFQUE1QjtBQUFnQ0MsWUFBUSxFQUFFO0FBQTFDLEdBQUQsQ0FMVztBQUFBLE1BSTNCSSxNQUoyQjtBQUFBLE1BS2hDQyxTQUxnQzs7QUFBQSxtQkFNQVQsK0NBQVEsQ0FBQyxFQUFELENBTlI7QUFBQSxNQU0zQlUsU0FOMkI7QUFBQSxNQU1oQkMsWUFOZ0I7O0FBQUEsbUJBT1ZYLCtDQUFRLENBQUMsRUFBRCxDQVBFO0FBQUEsTUFPM0JZLE1BUDJCO0FBQUEsTUFPcEJDLE1BUG9COztB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dUJBQVMsRUFBQyxhQUFiO0FBQUEsd0JBQTRCTyxNQUFNLENBQUNQO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQWxDLGdCQUFtRjtBQUFHLHVCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQTFEekYsZUFvRUU7QUFDRSx1QkFBUyxFQUFDLFdBRFo7QUFFRSxrQkFBSSxFQUFDO0FBRlAsdUpBR1ksUUFIWix1SUFJUSx3REFKUjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXBFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREQ7QUFBQTtBQVpIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQTBGRSw4REFBQyxzREFBRDtBQUNFLG1CQUFXLEVBQUVpQixLQURmO0FBRUUsa0JBQVUsRUFBRUUsVUFGZDtBQUdFLFlBQUksRUFBRXFCLElBSFI7QUFJRSxlQUFPLEVBQUVDLE9BSlg7QUFLRSxtQkFBVyxFQUFFYyxTQUxmO0FBTUUsYUFBSyxFQUFFOUMsU0FOVDtBQU9FLHlCQUFpQixFQUFFaUM7QUFQckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF3R0QsQ0FwUUQ7O0dBQU0vQyxTO1VBQ2lCRSxnRTs7O0tBRGpCRixTOztBQXNRTixJQUFNbUYsUUFBUSxHQUFHLFNBQVhBLFFBQVcsUUFBa0I7QUFBQSxNQUFoQmxGLFVBQWdCLFNBQWhCQSxVQUFnQjtBQUNqQyxzQkFDRSw4REFBQyxvRUFBRDtBQUFBLDJCQUNFLDhEQUFDLFNBQUQ7QUFBVyxnQkFBVSxFQUFFQTtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBS0QsQ0FORDs7TUFBTWtGLFE7QUFRTiwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9qdXJzZXJ2aWNlLjI0NDczMjlhODM0NjQxYjE0MWMyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCBGaXJzdFN0ZXAgPSAoKSA9PiB7XHJcbi8vICAgcmV0dXJuKFxyXG4vLyAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm1fcmVnaXN0ZXInPlxyXG4vLyAgICAgICA8Zm9ybT5cclxuLy8gICAgICAgICA8aW5wdXQgdHlwZT0nbnVtYmVyJyBuYW1lPSdiaW4nIHBsYWNlaG9sZGVyPSfQkdCY0J0nIC8+XHJcbi8vICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGRpc2FibGVkIG5hbWU9J29yZ2FuaXphdGlvbicgcGxhY2Vob2xkZXI9JycgLz5cclxuLy8gICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgbmFtZT0ncG9zaXRpb24nIHBsYWNlaG9sZGVyPSfQl9Cw0L3QuNC80LDQtdC80LDRjyDQtNC+0LvQttC90L7RgdGC0YwnIC8+XHJcbi8vICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIG5hbWU9J2ZpbycgcGxhY2Vob2xkZXI9J9Ck0LDQvNC40LvQuNGPINCY0LzRjycgLz5cclxuLy8gICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgbmFtZT0ncGhvbmUnIHBsYWNlaG9sZGVyPSfQotC10LvQtdGE0L7QvScgLz5cclxuLy8gICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgbmFtZT0nZW1haWwnIHBsYWNlaG9sZGVyPSdFbWFpbCcgLz5cclxuICAgICAgICBcclxuLy8gICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdzaW5nbGVidG4nIHR5cGU9J2J1dHRvbicgY2xhc3NOYW1lPSdidXR0b24nIHZhbHVlPSfQntGC0L/RgNCw0LLQuNGC0YwnIC8+XHJcbi8vICAgICAgIDwvZm9ybT5cclxuLy8gICAgIDwvZGl2PlxyXG4vLyAgIClcclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgRmlyc3RTdGVwXHJcblxyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDb2RlTW9kYWwgZnJvbSAnLi4vc2hhcmVkL0NvZGVNb2RhbCdcclxuaW1wb3J0IHtyZXBsYWNlRGF0ZX0gZnJvbSAnLi4vLi4vZGVmYXVsdHMvZXh0cmFGdW5jdGlvbidcclxuaW1wb3J0IHtwb3NpdGlvbnN9IGZyb20gJy4uLy4uL2RlZmF1bHRzL3Bvc2l0aW9ucydcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnXHJcbmltcG9ydCB7IFRvYXN0UHJvdmlkZXIsIHVzZVRvYXN0cyB9IGZyb20gJ3JlYWN0LXRvYXN0LW5vdGlmaWNhdGlvbnMnXHJcbmltcG9ydCB7Rm9ybWlrLCBGb3JtLCBGaWVsZH0gZnJvbSAnZm9ybWlrJztcclxuaW1wb3J0IHtcclxuICBlbWFpbFZhbGlkLFxyXG4gIHJlcXVpcmVkLFxyXG4gIHBob25lVmFsaWRhdGlvbixcclxuICBwYXNzd29yZFZhbGlkLFxyXG4gIGFjY2VwdENpcnJpbGljLFxyXG4gIHBob25lQ2hlY2ssXHJcbiAgaWluVmFsaWRhdGlvblxyXG59IGZyb20gJy4uLy4uL2RlZmF1bHRzL3ZhbGlkYXRpb25zJ1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL2xvYWRlci9Mb2FkZXInXHJcbmltcG9ydCB7IHZhbGlkYWdlIH0gZnJvbSAnLi4vLi4vZGVmYXVsdHMvaWluVmFsaWRBZ2UnXHJcbmltcG9ydCBzd2FsIGZyb20gJ3N3ZWV0YWxlcnQnXHJcbmltcG9ydCBMb2FkZXJUZXh0IGZyb20gJy4uL3NoYXJlZC9Mb2FkZXJUZXh0J1xyXG5pbXBvcnQgUGhvbmVNYXNrIGZyb20gJy4uL01hc2tzL1Bob25lTWFzaydcclxuaW1wb3J0IElpbk1hc2sgZnJvbSAnLi4vTWFza3MvSWluTWFzaydcclxuXHJcblxyXG5jb25zdCBGaXJzdFN0ZXAgPSAoe3NldExvYWRpbmd9KSA9PiB7XHJcbiAgY29uc3QgeyBhZGRUb2FzdCB9ID0gdXNlVG9hc3RzKClcclxuICBjb25zdCBbZm9ybURhdGEsXHJcbiAgICBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7ZW1haWw6ICcnLCBwaG9uZTogJycsIGZpbzogJycsIHBhc3N3b3JkOiAnJywgdHlwZTogJ9Cu0YAg0LvQuNGG0L4nLCB9KVxyXG4gIGNvbnN0IFtlcnJvcnMsXHJcbiAgICBzZXRFcnJvcnNdID0gdXNlU3RhdGUoe2VtYWlsOiAnJywgcGhvbmU6ICcnLCBmaW86ICcnLCBwYXNzd29yZDogJyd9KVxyXG4gIGNvbnN0IFtjb2RlRXJyb3IsIHNldENvZGVFcnJvcl0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbYmluVmFsLHNldEJpbl0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbb3JnYW5pemF0aW9uLHNldE9yZ2FuaXphdGlvbl0gPSB1c2VTdGF0ZSh7dmFsdWU6ICcnLCB0eXBlOiBmYWxzZSwgbG9hZGluZzpmYWxzZX0pXHJcbiAgY29uc3QgW21vZGFsLFxyXG4gICAgc2V0TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRNb2RhbChmYWxzZSlcclxuICB9XHJcblxyXG5cclxuICBjb25zdCBiaW5DaGFuZ2UgPSBlID0+IHtcclxuICAgIGNvbnN0IHZhbCA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgY29uc3QgdmFsdWUgPSB2YWwgPyB2YWwucmVwbGFjZSgvIC9nLCBcIlwiKSA6ICcnXHJcbiAgICBzZXRCaW4oZS50YXJnZXQudmFsdWUpXHJcbiAgICAvLyBpZih2YWx1ZS5sZW5ndGggPT09IDEyKSB7XHJcbiAgICAvLyAgIGF4aW9zLmdldChgaHR0cHM6Ly9hcGkubW9uZXktbWVuLmt6L2FwaS90ZXN0S29tcHJhP2Jpbj0ke3ZhbHVlfWApXHJcbiAgICAvLyAgICAgLnRoZW4ocmVzPT4ge1xyXG4gICAgLy8gICAgICAgc2V0T3JnYW5pemF0aW9uKHJlcy5kYXRhLmNvbnRlbnRbMF0ubmFtZSlcclxuICAgIC8vICAgICB9KVxyXG4gICAgLy8gfVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHZhbHVlID0gYmluVmFsID8gYmluVmFsLnJlcGxhY2UoLyAvZywgXCJcIikgOiAnJ1xyXG4gICAgaWYodmFsdWUubGVuZ3RoID09PSAxMikge1xyXG4gICAgICBzZXRPcmdhbml6YXRpb24oey4uLm9yZ2FuaXphdGlvbix0eXBlOiB0cnVlLHZhbHVlOifQl9Cw0LPRgNGD0LfQutCwLi4uJywgbG9hZGluZzogdHJ1ZX0pXHJcbiAgICAgIGF4aW9zLmdldChgaHR0cHM6Ly9hcGkubW9uZXktbWVuLmt6L2FwaS90ZXN0S29tcHJhP2Jpbj0ke3ZhbHVlfWAsIHtoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJ1xyXG4gICAgICB9fSlcclxuICAgICAgICAudGhlbihyZXM9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICBpZihyZXMuZGF0YS5jb250ZW50Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICBzZXRPcmdhbml6YXRpb24oe3ZhbHVlOiAn0J/QvtC20LDQu9GD0LnRgdGC0LAg0LLQstC10LTQuNGC0LUg0L/RgNCw0LLQuNC70YzQvdGL0Lkg0JHQmNCdJywgdHlwZTogZmFsc2UsIGxvYWRpbmc6IGZhbHNlfSlcclxuICAgICAgICAgICAgfSwgMTAwMClcclxuICAgICAgIFxyXG4gICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICBzZXRPcmdhbml6YXRpb24oe3ZhbHVlOiByZXMuZGF0YS5jb250ZW50WzBdLm5hbWUsIHR5cGU6IHRydWUsIGxvYWRpbmc6IGZhbHNlfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnI9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgICBpZihlcnIucmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlLnN0YXR1cylcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNldE9yZ2FuaXphdGlvbih7dmFsdWU6ICfQn9C+0LbQsNC70YPQudGB0YLQsCDQstCy0LXQtNC40YLQtSDQv9GA0LDQstC40LvRjNC90YvQuSDQkdCY0J0nLCB0eXBlOiBmYWxzZSwgbG9hZGluZzogZmFsc2V9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgIHNldE9yZ2FuaXphdGlvbih7dmFsdWU6ICcnLCB0eXBlOiBmYWxzZSwgbG9hZGluZzogZmFsc2V9KVxyXG4gICAgfVxyXG4gIH0sIFtiaW5WYWxdKVxyXG4gIGNvbnN0IFtjb2RlLFxyXG4gICAgc2V0Q29kZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgZ2V0SWRlbnRpZmljYXRpb24gPSAodmFsdWVzKSA9PiB7XHJcbiAgICBpZighdmFsaWRhZ2UodmFsdWVzLmlpbikpIHtcclxuICAgICAgc3dhbChcIk9vcHMhXCIsIGDQmNC30LLQuNC90LjRgtC1LCDRg9GB0LvRg9Cz0LAg0L7RgdGD0YnQtdGB0YLQstC70Y/QtdGC0YHRjyDQu9C40YbQsNC8INC00L7RgdGC0LjQs9GI0LjQtSAxOCDQu9C10YIuYCwgXCJpbmZvXCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgICAgc2V0Rm9ybURhdGEodmFsdWVzKVxyXG4gICAgICBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L2lkZW50aWZpY2F0aW9uYCwge1xyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgZmlvOiB2YWx1ZXMuZmlvLFxyXG4gICAgICAgICAgcGhvbmU6IHJlcGxhY2VEYXRlKHZhbHVlcy5waG9uZSksXHJcbiAgICAgICAgICBlbWFpbDogdmFsdWVzLmVtYWlsLFxyXG4gICAgICAgICAgcGFzc3dvcmQ6IHZhbHVlcy5wYXNzd29yZCxcclxuICAgICAgICAgIHR5cGU6IHZhbHVlcy50eXBlLFxyXG4gICAgICAgICAgc291cmNlOiAnbmFzaGNvbXBhbnkua3onXHJcbiAgICAgICAgfVxyXG4gICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgc2V0Rm9ybURhdGEoKVxyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgIGlmIChyZXMuZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICBzZXRNb2RhbCh0cnVlKVxyXG4gICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZighcmVzLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgYWRkVG9hc3QocmVzLmRhdGEubWVzc2FnZSwge1xyXG4gICAgICAgICAgICBhcHBlYXJhbmNlOiAnZXJyb3InLFxyXG4gICAgICAgICAgICBhdXRvRGlzbWlzczogdHJ1ZSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyPT4ge1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgaWYoZXJyLnJlc3BvbnNlKSB7XHJcbiAgICAgICAgICBhZGRUb2FzdChlcnIucmVzcG9uc2Uuc3RhdHVzLCB7XHJcbiAgICAgICAgICAgIGFwcGVhcmFuY2U6ICdlcnJvcicsXHJcbiAgICAgICAgICAgIGF1dG9EaXNtaXNzOiB0cnVlLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgIFxyXG4gIH1cclxuXHJcbiAgY29uc3QgZmlyc3RTdGVwID0gKGNvZGVWYWwpID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgIGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vc3RlcE9uZWAsIHtcclxuICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgZmlvOiBmb3JtRGF0YS5maW8sXHJcbiAgICAgICAgcGhvbmU6IHJlcGxhY2VEYXRlKGZvcm1EYXRhLnBob25lKSxcclxuICAgICAgICBlbWFpbDogZm9ybURhdGEuZW1haWwsXHJcbiAgICAgICAgcGFzc3dvcmQ6IGZvcm1EYXRhLnBhc3N3b3JkLFxyXG4gICAgICAgIHR5cGU6IGZvcm1EYXRhLnR5cGUsXHJcbiAgICAgICAgY29kZTogY29kZVZhbCxcclxuICAgICAgICBzb3VyY2U6IGNvb2tpZS5nZXQoJ3V0bV9zb3VyY2UnKSArICdfMScgfHwgJ25hc2hjb21wYW55Lmt6J1xyXG4gICAgICB9XHJcbiAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICBjb29raWUuc2V0KCd0b2tlbicsIHJlcy5kYXRhLnRva2VuKVxyXG4gICAgICAgIGNvb2tpZS5zZXQoJ2xlYWRfaWQnLCByZXMuZGF0YS5pZClcclxuICAgICAgICBjb29raWUuc2V0KCdzdGVwJywgMilcclxuICAgICAgICBSb3V0ZXIucHVzaCgnL2p1cnNlcnZpY2U/c3RlcD0yJylcclxuICAgICAgfVxyXG4gICAgICBpZighcmVzLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgIHNldENvZGVFcnJvcihyZXMuZGF0YS5tZXNzYWdlKVxyXG4gICAgICAgIGFkZFRvYXN0KGZpbmFsRXJyLCB7XHJcbiAgICAgICAgICBhcHBlYXJhbmNlOiAnZXJyb3InLFxyXG4gICAgICAgICAgYXV0b0Rpc21pc3M6IHRydWUsXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgc2V0RXJyb3JzKHtcclxuICAgICAgLi4uZXJyb3JzLFxyXG4gICAgICBlbWFpbDogZW1haWxWYWxpZChmb3JtRGF0YS5lbWFpbCksXHJcbiAgICAgIGZpbzogcmVxdWlyZWQoZm9ybURhdGEuZmlvKSxcclxuICAgICAgcGhvbmU6IHBob25lVmFsaWRhdGlvbihmb3JtRGF0YS5waG9uZSksXHJcbiAgICAgIHBhc3N3b3JkOiBwYXNzd29yZFZhbGlkKGZvcm1EYXRhLnBhc3N3b3JkKVxyXG4gICAgfSlcclxuXHJcbiAgICBnZXRJZGVudGlmaWNhdGlvbigpXHJcbiAgfVxyXG5cclxuICBjb25zdCBvbkNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBuYW1lID0gZS50YXJnZXQubmFtZTtcclxuICAgIHNldEZvcm1EYXRhKHtcclxuICAgICAgLi4uZm9ybURhdGEsXHJcbiAgICAgIFtuYW1lXTogZS50YXJnZXQudmFsdWVcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm1fcmVnaXN0ZXInPlxyXG4gICAgICAgIDxGb3JtaWtcclxuICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcclxuICAgICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICAgIGJpbjogJycsXHJcbiAgICAgICAgICBwb3NpdGlvbjogJzEnLFxyXG4gICAgICAgICAgcGhvbmU6ICcnLFxyXG4gICAgICAgICAgZmlvOiAnJyxcclxuICAgICAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgICAgIHR5cGU6ICfQrtGAINC70LjRhtC+JyxcclxuICAgICAgICAgIGlpbjogJycsXHJcbiAgICAgICAgfX1cclxuICAgICAgICAgIG9uU3VibWl0PXsodmFsdWVzKSA9PiB7Z2V0SWRlbnRpZmljYXRpb24odmFsdWVzKX19PlxyXG4gICAgICAgICAgeyh7ZXJyb3JzLCB0b3VjaGVkfSkgPT4gKFxyXG4gICAgICAgICAgICA8Rm9ybT5cclxuXHJcbiAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdiaW4nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSfQkdCY0J0nXHJcbiAgICAgICAgICAgICAgICB0eXBlPSd0ZWwnXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZT0+YmluQ2hhbmdlKGUpfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2JpblZhbH1cclxuICAgICAgICAgICAgICAgIC8vIHZhbGlkYXRlPXtpaW5WYWxpZGF0aW9ufVxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtJaW5NYXNrfT48L0ZpZWxkPlxyXG4gICAgICAgICAgICAgICAgIHsvKiB7KGVycm9ycy5paW4gJiYgdG91Y2hlZC5paW4pID8gPHAgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+e2Vycm9ycy5paW59PC9wPiA6ICA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz48L3A+fSAqL31cclxuICAgICAgICAgICAgICAgICB7LyogeyFvcmdhbml6YXRpb24ubG9hZGluZyAmJiA8cCBjbGFzc05hbWU9eyFvcmdhbml6YXRpb24udHlwZSA/ICd0ZXh0LWRhbmdlcicgOiAndGV4dC1pbmZvJ30+e29yZ2FuaXphdGlvbi52YWx1ZX08L3A+fVxyXG4gICAgICAgICAgICAgICAgIHtvcmdhbml6YXRpb24ubG9hZGluZyAmJiA8TG9hZGVyVGV4dCAvPn0gKi99XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGNsYXNzTmFtZT17KG9yZ2FuaXphdGlvbi50eXBlID09PSBmYWxzZSAmJiBvcmdhbml6YXRpb24udmFsdWUpICYmICdkaXNhYmxlZF9lcnJvcid9IHZhbHVlPXtvcmdhbml6YXRpb24udmFsdWV9IGRpc2FibGVkIG5hbWU9J29yZ2FuaXphdGlvbicgcGxhY2Vob2xkZXI9J9Cd0LDQt9Cy0LDQvdC40LUg0J7RgNCz0LDQvdC40LfQsNGG0LjQuCcgLz5cclxuICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgIGFzPSdzZWxlY3QnXHJcbiAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgbmFtZT0ncG9zaXRpb24nXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZT17cmVxdWlyZWR9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0n0JfQsNC90LjQvNCw0LXQvNCw0Y8g0LTQvtC70LbQvdC+0YHRgtGMJ1xyXG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPSdvZmYnPntwb3NpdGlvbnMubWFwKHA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e3AudmFsdWV9PntwLm5hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICApKX08L0ZpZWxkPlxyXG4gICAgICAgICAgICAgICB7KGVycm9ycy5wb3NpdGlvbiAmJiB0b3VjaGVkLnBvc2l0aW9uKSA/IDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPntlcnJvcnMucG9zaXRpb259PC9wPiA6ICA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz48L3A+fVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgIG5hbWU9J2ZpbydcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlPXthY2NlcHRDaXJyaWxpY31cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSfQpNCY0J4nXHJcbiAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9J29mZicvPlxyXG4gICAgICAgICAgICAgICB7KGVycm9ycy5maW8gJiYgdG91Y2hlZC5maW8pID8gPHAgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+e2Vycm9ycy5maW99PC9wPiA6ICA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz48L3A+fVxyXG5cclxuICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgIG5hbWU9J3Bob25lJ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0n0KLQtdC70LXRhNC+0L0g0L3QvtC80LXRgCdcclxuICAgICAgICAgICAgICAgIHR5cGU9J3RlbCdcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlPXtwaG9uZVZhbGlkYXRpb259XHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1Bob25lTWFza30+PC9GaWVsZD5cclxuICAgICAgICAgICAgICAgICB7KGVycm9ycy5waG9uZSAmJiB0b3VjaGVkLnBob25lKSA/IDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPntlcnJvcnMucGhvbmV9PC9wPiA6ICA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz48L3A+fVxyXG5cclxuICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgIG5hbWU9J2lpbidcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J9CY0JjQnSdcclxuICAgICAgICAgICAgICAgIHR5cGU9J3RlbCdcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlPXtpaW5WYWxpZGF0aW9ufVxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtJaW5NYXNrfT48L0ZpZWxkPlxyXG4gICAgICAgICAgICAgICAgIHsoZXJyb3JzLmlpbiAmJiB0b3VjaGVkLmlpbikgPyA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz57ZXJyb3JzLmlpbn08L3A+IDogIDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPjwvcD59XHJcblxyXG4gICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgIG5hbWU9J2VtYWlsJ1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU9e2VtYWlsVmFsaWR9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW1haWwnXHJcbiAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9J29mZicvPlxyXG4gICAgICAgICAgICAgICAgIHsoZXJyb3JzLmVtYWlsICYmIHRvdWNoZWQuZW1haWwpID8gPHAgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+e2Vycm9ycy5lbWFpbH08L3A+IDogIDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPjwvcD59XHJcblxyXG4gICAgICAgICAgICAgIHsvKiA8RmllbGRcclxuICAgICAgICAgICAgICAgIHR5cGU9J3Bhc3N3b3JkJ1xyXG4gICAgICAgICAgICAgICAgbmFtZT0ncGFzc3dvcmQnXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZT17cGFzc3dvcmRWYWxpZH1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSfQn9GA0LjQtNGD0LzQsNC50YLQtSDQv9Cw0YDQvtC70YwnXHJcbiAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9J29mZicvPiBcclxuICAgICAgICAgICAgICAgICB7KGVycm9ycy5wYXNzd29yZCAmJiB0b3VjaGVkLnBhc3N3b3JkKSA/IDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPntlcnJvcnMucGFzc3dvcmR9PC9wPiA6ICA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz48L3A+fSAqL31cclxuXHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NpbmdsZWJ0bidcclxuICAgICAgICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYnV0dG9uJ1xyXG4gICAgICAgICAgICAgICAgdmFsdWU9J9Ce0YLQv9GA0LDQstC40YLRjCcvPlxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvRm9ybWlrPlxyXG4gICAgICAgIDxDb2RlTW9kYWxcclxuICAgICAgICAgIGlzTW9kYWxPcGVuPXttb2RhbH1cclxuICAgICAgICAgIGNsb3NlTW9kYWw9e2Nsb3NlTW9kYWx9XHJcbiAgICAgICAgICBjb2RlPXtjb2RlfVxyXG4gICAgICAgICAgc2V0Q29kZT17c2V0Q29kZX1cclxuICAgICAgICAgIG9uRmlyc3RTdGVwPXtmaXJzdFN0ZXB9XHJcbiAgICAgICAgICBlcnJvcj17Y29kZUVycm9yfVxyXG4gICAgICAgICAgZ2V0SWRlbnRpZmljYXRpb249e2dldElkZW50aWZpY2F0aW9ufS8+IFxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IEZpcnN0UmVnID0gKHtzZXRMb2FkaW5nfSkgPT4ge1xyXG4gIHJldHVybihcclxuICAgIDxUb2FzdFByb3ZpZGVyPlxyXG4gICAgICA8Rmlyc3RTdGVwIHNldExvYWRpbmc9e3NldExvYWRpbmd9Lz5cclxuICAgIDwvVG9hc3RQcm92aWRlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpcnN0UmVnIl0sInNvdXJjZVJvb3QiOiIifQ==