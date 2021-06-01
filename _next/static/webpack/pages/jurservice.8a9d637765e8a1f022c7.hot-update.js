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
    type: 'Юр лицо',
    position: '1',
    code: ''
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

_s(FirstStep, "TJvXqU+rEbKRMG72ukb1swEDiwI=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRzZXJ2aWNlL0ZpcnN0U3RlcEp1ci5qcyJdLCJuYW1lcyI6WyJGaXJzdFN0ZXAiLCJzZXRMb2FkaW5nIiwidXNlVG9hc3RzIiwiYWRkVG9hc3QiLCJ1c2VTdGF0ZSIsImVtYWlsIiwicGhvbmUiLCJmaW8iLCJwYXNzd29yZCIsInR5cGUiLCJwb3NpdGlvbiIsImNvZGUiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwiY29kZUVycm9yIiwic2V0Q29kZUVycm9yIiwiYmluVmFsIiwic2V0QmluIiwidmFsdWUiLCJsb2FkaW5nIiwib3JnYW5pemF0aW9uIiwic2V0T3JnYW5pemF0aW9uIiwibW9kYWwiLCJzZXRNb2RhbCIsImNsb3NlTW9kYWwiLCJiaW5DaGFuZ2UiLCJlIiwidmFsIiwidGFyZ2V0IiwicmVwbGFjZSIsInVzZUVmZmVjdCIsImxlbmd0aCIsImF4aW9zIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImNvbnRlbnQiLCJzZXRUaW1lb3V0IiwibmFtZSIsImVyciIsInJlc3BvbnNlIiwic3RhdHVzIiwic2V0Q29kZSIsImdldElkZW50aWZpY2F0aW9uIiwidmFsdWVzIiwidmFsaWRhZ2UiLCJpaW4iLCJzd2FsIiwicHJvY2VzcyIsInBhcmFtcyIsInJlcGxhY2VEYXRlIiwic291cmNlIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJhcHBlYXJhbmNlIiwiYXV0b0Rpc21pc3MiLCJmaXJzdFN0ZXAiLCJjb2RlVmFsIiwiY29va2llIiwidG9rZW4iLCJpZCIsIlJvdXRlciIsImZpbmFsRXJyIiwib25TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImVtYWlsVmFsaWQiLCJyZXF1aXJlZCIsInBob25lVmFsaWRhdGlvbiIsInBhc3N3b3JkVmFsaWQiLCJvbkNoYW5nZSIsImJpbiIsInRvdWNoZWQiLCJJaW5NYXNrIiwicG9zaXRpb25zIiwicCIsImFjY2VwdENpcnJpbGljIiwiUGhvbmVNYXNrIiwiaWluVmFsaWRhdGlvbiIsIkZpcnN0UmVnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFrQjtBQUFBOztBQUFBLE1BQWhCQyxVQUFnQixRQUFoQkEsVUFBZ0I7O0FBQUEsbUJBQ2JDLG9FQUFTLEVBREk7QUFBQSxNQUMxQkMsUUFEMEIsY0FDMUJBLFFBRDBCOztBQUFBLGtCQUdqQkMsK0NBQVEsQ0FBQztBQUFDQyxTQUFLLEVBQUUsRUFBUjtBQUFZQyxTQUFLLEVBQUUsRUFBbkI7QUFBdUJDLE9BQUcsRUFBRSxFQUE1QjtBQUFnQ0MsWUFBUSxFQUFFLEVBQTFDO0FBQThDQyxRQUFJLEVBQUUsU0FBcEQ7QUFBK0RDLFlBQVEsRUFBRSxHQUF6RTtBQUE4RUMsUUFBSSxFQUFFO0FBQXBGLEdBQUQsQ0FIUztBQUFBLE1BRTNCQyxRQUYyQjtBQUFBLE1BR2hDQyxXQUhnQzs7QUFBQSxtQkFLbkJULCtDQUFRLENBQUM7QUFBQ0MsU0FBSyxFQUFFLEVBQVI7QUFBWUMsU0FBSyxFQUFFLEVBQW5CO0FBQXVCQyxPQUFHLEVBQUUsRUFBNUI7QUFBZ0NDLFlBQVEsRUFBRTtBQUExQyxHQUFELENBTFc7QUFBQSxNQUkzQk0sTUFKMkI7QUFBQSxNQUtoQ0MsU0FMZ0M7O0FBQUEsbUJBTUFYLCtDQUFRLENBQUMsRUFBRCxDQU5SO0FBQUEsTUFNM0JZLFNBTjJCO0FBQUEsTUFNaEJDLFlBTmdCOztBQUFBLG1CQU9WYiwrQ0FBUSxDQUFDLEVB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ZXJ2aWNlLjhhOWQ2Mzc3NjVlOGExZjAyMmM3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCBGaXJzdFN0ZXAgPSAoKSA9PiB7XHJcbi8vICAgcmV0dXJuKFxyXG4vLyAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm1fcmVnaXN0ZXInPlxyXG4vLyAgICAgICA8Zm9ybT5cclxuLy8gICAgICAgICA8aW5wdXQgdHlwZT0nbnVtYmVyJyBuYW1lPSdiaW4nIHBsYWNlaG9sZGVyPSfQkdCY0J0nIC8+XHJcbi8vICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIGRpc2FibGVkIG5hbWU9J29yZ2FuaXphdGlvbicgcGxhY2Vob2xkZXI9JycgLz5cclxuLy8gICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgbmFtZT0ncG9zaXRpb24nIHBsYWNlaG9sZGVyPSfQl9Cw0L3QuNC80LDQtdC80LDRjyDQtNC+0LvQttC90L7RgdGC0YwnIC8+XHJcbi8vICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIG5hbWU9J2ZpbycgcGxhY2Vob2xkZXI9J9Ck0LDQvNC40LvQuNGPINCY0LzRjycgLz5cclxuLy8gICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgbmFtZT0ncGhvbmUnIHBsYWNlaG9sZGVyPSfQotC10LvQtdGE0L7QvScgLz5cclxuLy8gICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgbmFtZT0nZW1haWwnIHBsYWNlaG9sZGVyPSdFbWFpbCcgLz5cclxuICAgICAgICBcclxuLy8gICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdzaW5nbGVidG4nIHR5cGU9J2J1dHRvbicgY2xhc3NOYW1lPSdidXR0b24nIHZhbHVlPSfQntGC0L/RgNCw0LLQuNGC0YwnIC8+XHJcbi8vICAgICAgIDwvZm9ybT5cclxuLy8gICAgIDwvZGl2PlxyXG4vLyAgIClcclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgRmlyc3RTdGVwXHJcblxyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDb2RlTW9kYWwgZnJvbSAnLi4vc2hhcmVkL0NvZGVNb2RhbCdcclxuaW1wb3J0IHtyZXBsYWNlRGF0ZX0gZnJvbSAnLi4vLi4vZGVmYXVsdHMvZXh0cmFGdW5jdGlvbidcclxuaW1wb3J0IHtwb3NpdGlvbnN9IGZyb20gJy4uLy4uL2RlZmF1bHRzL3Bvc2l0aW9ucydcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnXHJcbmltcG9ydCB7IFRvYXN0UHJvdmlkZXIsIHVzZVRvYXN0cyB9IGZyb20gJ3JlYWN0LXRvYXN0LW5vdGlmaWNhdGlvbnMnXHJcbmltcG9ydCB7Rm9ybWlrLCBGb3JtLCBGaWVsZH0gZnJvbSAnZm9ybWlrJztcclxuaW1wb3J0IHtcclxuICBlbWFpbFZhbGlkLFxyXG4gIHJlcXVpcmVkLFxyXG4gIHBob25lVmFsaWRhdGlvbixcclxuICBwYXNzd29yZFZhbGlkLFxyXG4gIGFjY2VwdENpcnJpbGljLFxyXG4gIHBob25lQ2hlY2ssXHJcbiAgaWluVmFsaWRhdGlvblxyXG59IGZyb20gJy4uLy4uL2RlZmF1bHRzL3ZhbGlkYXRpb25zJ1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL2xvYWRlci9Mb2FkZXInXHJcbmltcG9ydCB7IHZhbGlkYWdlIH0gZnJvbSAnLi4vLi4vZGVmYXVsdHMvaWluVmFsaWRBZ2UnXHJcbmltcG9ydCBzd2FsIGZyb20gJ3N3ZWV0YWxlcnQnXHJcbmltcG9ydCBMb2FkZXJUZXh0IGZyb20gJy4uL3NoYXJlZC9Mb2FkZXJUZXh0J1xyXG5pbXBvcnQgUGhvbmVNYXNrIGZyb20gJy4uL01hc2tzL1Bob25lTWFzaydcclxuaW1wb3J0IElpbk1hc2sgZnJvbSAnLi4vTWFza3MvSWluTWFzaydcclxuXHJcblxyXG5jb25zdCBGaXJzdFN0ZXAgPSAoe3NldExvYWRpbmd9KSA9PiB7XHJcbiAgY29uc3QgeyBhZGRUb2FzdCB9ID0gdXNlVG9hc3RzKClcclxuICBjb25zdCBbZm9ybURhdGEsXHJcbiAgICBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7ZW1haWw6ICcnLCBwaG9uZTogJycsIGZpbzogJycsIHBhc3N3b3JkOiAnJywgdHlwZTogJ9Cu0YAg0LvQuNGG0L4nLCBwb3NpdGlvbjogJzEnLCBjb2RlOiAnJywgfSlcclxuICBjb25zdCBbZXJyb3JzLFxyXG4gICAgc2V0RXJyb3JzXSA9IHVzZVN0YXRlKHtlbWFpbDogJycsIHBob25lOiAnJywgZmlvOiAnJywgcGFzc3dvcmQ6ICcnfSlcclxuICBjb25zdCBbY29kZUVycm9yLCBzZXRDb2RlRXJyb3JdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW2JpblZhbCxzZXRCaW5dID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW29yZ2FuaXphdGlvbixzZXRPcmdhbml6YXRpb25dID0gdXNlU3RhdGUoe3ZhbHVlOiAnJywgdHlwZTogZmFsc2UsIGxvYWRpbmc6ZmFsc2V9KVxyXG4gIGNvbnN0IFttb2RhbCxcclxuICAgIHNldE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICBjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0TW9kYWwoZmFsc2UpXHJcbiAgfVxyXG5cclxuXHJcbiAgY29uc3QgYmluQ2hhbmdlID0gZSA9PiB7XHJcbiAgICBjb25zdCB2YWwgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIGNvbnN0IHZhbHVlID0gdmFsID8gdmFsLnJlcGxhY2UoLyAvZywgXCJcIikgOiAnJ1xyXG4gICAgc2V0QmluKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgLy8gaWYodmFsdWUubGVuZ3RoID09PSAxMikge1xyXG4gICAgLy8gICBheGlvcy5nZXQoYGh0dHBzOi8vYXBpLm1vbmV5LW1lbi5rei9hcGkvdGVzdEtvbXByYT9iaW49JHt2YWx1ZX1gKVxyXG4gICAgLy8gICAgIC50aGVuKHJlcz0+IHtcclxuICAgIC8vICAgICAgIHNldE9yZ2FuaXphdGlvbihyZXMuZGF0YS5jb250ZW50WzBdLm5hbWUpXHJcbiAgICAvLyAgICAgfSlcclxuICAgIC8vIH1cclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGJpblZhbCA/IGJpblZhbC5yZXBsYWNlKC8gL2csIFwiXCIpIDogJydcclxuICAgIGlmKHZhbHVlLmxlbmd0aCA9PT0gMTIpIHtcclxuICAgICAgc2V0T3JnYW5pemF0aW9uKHsuLi5vcmdhbml6YXRpb24sdHlwZTogdHJ1ZSx2YWx1ZTon0JfQsNCz0YDRg9C30LrQsC4uLicsIGxvYWRpbmc6IHRydWV9KVxyXG4gICAgICBheGlvcy5nZXQoYGh0dHBzOi8vYXBpLm1vbmV5LW1lbi5rei9hcGkvdGVzdEtvbXByYT9iaW49JHt2YWx1ZX1gLCB7aGVhZGVyczoge1xyXG4gICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKidcclxuICAgICAgfX0pXHJcbiAgICAgICAgLnRoZW4ocmVzPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgaWYocmVzLmRhdGEuY29udGVudC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0T3JnYW5pemF0aW9uKHt2YWx1ZTogJ9Cf0L7QttCw0LvRg9C50YHRgtCwINCy0LLQtdC00LjRgtC1INC/0YDQsNCy0LjQu9GM0L3Ri9C5INCR0JjQnScsIHR5cGU6IGZhbHNlLCBsb2FkaW5nOiBmYWxzZX0pXHJcbiAgICAgICAgICAgIH0sIDEwMDApXHJcbiAgICAgICBcclxuICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgc2V0T3JnYW5pemF0aW9uKHt2YWx1ZTogcmVzLmRhdGEuY29udGVudFswXS5uYW1lLCB0eXBlOiB0cnVlLCBsb2FkaW5nOiBmYWxzZX0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgICAgaWYoZXJyLnJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZS5zdGF0dXMpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzZXRPcmdhbml6YXRpb24oe3ZhbHVlOiAn0J/QvtC20LDQu9GD0LnRgdGC0LAg0LLQstC10LTQuNGC0LUg0L/RgNCw0LLQuNC70YzQvdGL0Lkg0JHQmNCdJywgdHlwZTogZmFsc2UsIGxvYWRpbmc6IGZhbHNlfSlcclxuICAgICAgICB9KVxyXG4gICAgfWVsc2Uge1xyXG4gICAgICBzZXRPcmdhbml6YXRpb24oe3ZhbHVlOiAnJywgdHlwZTogZmFsc2UsIGxvYWRpbmc6IGZhbHNlfSlcclxuICAgIH1cclxuICB9LCBbYmluVmFsXSlcclxuICBjb25zdCBbY29kZSxcclxuICAgIHNldENvZGVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IGdldElkZW50aWZpY2F0aW9uID0gKHZhbHVlcykgPT4ge1xyXG4gICAgaWYoIXZhbGlkYWdlKHZhbHVlcy5paW4pKSB7XHJcbiAgICAgIHN3YWwoXCJPb3BzIVwiLCBg0JjQt9Cy0LjQvdC40YLQtSwg0YPRgdC70YPQs9CwINC+0YHRg9GJ0LXRgdGC0LLQu9GP0LXRgtGB0Y8g0LvQuNGG0LDQvCDQtNC+0YHRgtC40LPRiNC40LUgMTgg0LvQtdGCLmAsIFwiaW5mb1wiKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICAgIHNldEZvcm1EYXRhKHZhbHVlcylcclxuICAgICAgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9pZGVudGlmaWNhdGlvbmAsIHtcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIGZpbzogdmFsdWVzLmZpbyxcclxuICAgICAgICAgIHBob25lOiByZXBsYWNlRGF0ZSh2YWx1ZXMucGhvbmUpLFxyXG4gICAgICAgICAgZW1haWw6IHZhbHVlcy5lbWFpbCxcclxuICAgICAgICAgIHBhc3N3b3JkOiB2YWx1ZXMucGFzc3dvcmQsXHJcbiAgICAgICAgICB0eXBlOiB2YWx1ZXMudHlwZSxcclxuICAgICAgICAgIHNvdXJjZTogJ25hc2hjb21wYW55Lmt6J1xyXG4gICAgICAgIH1cclxuICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIHNldEZvcm1EYXRhKClcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICBpZiAocmVzLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgc2V0TW9kYWwodHJ1ZSlcclxuICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIXJlcy5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgIGFkZFRvYXN0KHJlcy5kYXRhLm1lc3NhZ2UsIHtcclxuICAgICAgICAgICAgYXBwZWFyYW5jZTogJ2Vycm9yJyxcclxuICAgICAgICAgICAgYXV0b0Rpc21pc3M6IHRydWUsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycj0+IHtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgIGlmKGVyci5yZXNwb25zZSkge1xyXG4gICAgICAgICAgYWRkVG9hc3QoZXJyLnJlc3BvbnNlLnN0YXR1cywge1xyXG4gICAgICAgICAgICBhcHBlYXJhbmNlOiAnZXJyb3InLFxyXG4gICAgICAgICAgICBhdXRvRGlzbWlzczogdHJ1ZSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICBcclxuICB9XHJcblxyXG4gIGNvbnN0IGZpcnN0U3RlcCA9IChjb2RlVmFsKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L3N0ZXBPbmVgLCB7XHJcbiAgICAgIHBhcmFtczoge1xyXG4gICAgICAgIGZpbzogZm9ybURhdGEuZmlvLFxyXG4gICAgICAgIHBob25lOiByZXBsYWNlRGF0ZShmb3JtRGF0YS5waG9uZSksXHJcbiAgICAgICAgZW1haWw6IGZvcm1EYXRhLmVtYWlsLFxyXG4gICAgICAgIHBhc3N3b3JkOiBmb3JtRGF0YS5wYXNzd29yZCxcclxuICAgICAgICB0eXBlOiBmb3JtRGF0YS50eXBlLFxyXG4gICAgICAgIGNvZGU6IGNvZGVWYWwsXHJcbiAgICAgICAgc291cmNlOiBjb29raWUuZ2V0KCd1dG1fc291cmNlJykgKyAnXzEnIHx8ICduYXNoY29tcGFueS5reidcclxuICAgICAgfVxyXG4gICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgIGlmIChyZXMuZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgY29va2llLnNldCgndG9rZW4nLCByZXMuZGF0YS50b2tlbilcclxuICAgICAgICBjb29raWUuc2V0KCdsZWFkX2lkJywgcmVzLmRhdGEuaWQpXHJcbiAgICAgICAgY29va2llLnNldCgnc3RlcCcsIDIpXHJcbiAgICAgICAgUm91dGVyLnB1c2goJy9qdXJzZXJ2aWNlP3N0ZXA9MicpXHJcbiAgICAgIH1cclxuICAgICAgaWYoIXJlcy5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICBzZXRDb2RlRXJyb3IocmVzLmRhdGEubWVzc2FnZSlcclxuICAgICAgICBhZGRUb2FzdChmaW5hbEVyciwge1xyXG4gICAgICAgICAgYXBwZWFyYW5jZTogJ2Vycm9yJyxcclxuICAgICAgICAgIGF1dG9EaXNtaXNzOiB0cnVlLFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHNldEVycm9ycyh7XHJcbiAgICAgIC4uLmVycm9ycyxcclxuICAgICAgZW1haWw6IGVtYWlsVmFsaWQoZm9ybURhdGEuZW1haWwpLFxyXG4gICAgICBmaW86IHJlcXVpcmVkKGZvcm1EYXRhLmZpbyksXHJcbiAgICAgIHBob25lOiBwaG9uZVZhbGlkYXRpb24oZm9ybURhdGEucGhvbmUpLFxyXG4gICAgICBwYXNzd29yZDogcGFzc3dvcmRWYWxpZChmb3JtRGF0YS5wYXNzd29yZClcclxuICAgIH0pXHJcblxyXG4gICAgZ2V0SWRlbnRpZmljYXRpb24oKVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25DaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgbmFtZSA9IGUudGFyZ2V0Lm5hbWU7XHJcbiAgICBzZXRGb3JtRGF0YSh7XHJcbiAgICAgIC4uLmZvcm1EYXRhLFxyXG4gICAgICBbbmFtZV06IGUudGFyZ2V0LnZhbHVlXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtX3JlZ2lzdGVyJz5cclxuICAgICAgICA8Rm9ybWlrXHJcbiAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7XHJcbiAgICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgICBiaW46ICcnLFxyXG4gICAgICAgICAgcG9zaXRpb246ICcxJyxcclxuICAgICAgICAgIHBob25lOiAnJyxcclxuICAgICAgICAgIGZpbzogJycsXHJcbiAgICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgICAgICB0eXBlOiAn0K7RgCDQu9C40YbQvicsXHJcbiAgICAgICAgICBpaW46ICcnLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgICBvblN1Ym1pdD17KHZhbHVlcykgPT4ge2dldElkZW50aWZpY2F0aW9uKHZhbHVlcyl9fT5cclxuICAgICAgICAgIHsoe2Vycm9ycywgdG91Y2hlZH0pID0+IChcclxuICAgICAgICAgICAgPEZvcm0+XHJcblxyXG4gICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgbmFtZT0nYmluJ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0n0JHQmNCdJ1xyXG4gICAgICAgICAgICAgICAgdHlwZT0ndGVsJ1xyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2U9PmJpbkNoYW5nZShlKX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtiaW5WYWx9XHJcbiAgICAgICAgICAgICAgICAvLyB2YWxpZGF0ZT17aWluVmFsaWRhdGlvbn1cclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17SWluTWFza30+PC9GaWVsZD5cclxuICAgICAgICAgICAgICAgICB7LyogeyhlcnJvcnMuaWluICYmIHRvdWNoZWQuaWluKSA/IDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPntlcnJvcnMuaWlufTwvcD4gOiAgPHAgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+PC9wPn0gKi99XHJcbiAgICAgICAgICAgICAgICAgey8qIHshb3JnYW5pemF0aW9uLmxvYWRpbmcgJiYgPHAgY2xhc3NOYW1lPXshb3JnYW5pemF0aW9uLnR5cGUgPyAndGV4dC1kYW5nZXInIDogJ3RleHQtaW5mbyd9Pntvcmdhbml6YXRpb24udmFsdWV9PC9wPn1cclxuICAgICAgICAgICAgICAgICB7b3JnYW5pemF0aW9uLmxvYWRpbmcgJiYgPExvYWRlclRleHQgLz59ICovfVxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBjbGFzc05hbWU9eyhvcmdhbml6YXRpb24udHlwZSA9PT0gZmFsc2UgJiYgb3JnYW5pemF0aW9uLnZhbHVlKSAmJiAnZGlzYWJsZWRfZXJyb3InfSB2YWx1ZT17b3JnYW5pemF0aW9uLnZhbHVlfSBkaXNhYmxlZCBuYW1lPSdvcmdhbml6YXRpb24nIHBsYWNlaG9sZGVyPSfQndCw0LfQstCw0L3QuNC1INCe0YDQs9Cw0L3QuNC30LDRhtC40LgnIC8+XHJcbiAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICBhcz0nc2VsZWN0J1xyXG4gICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgIG5hbWU9J3Bvc2l0aW9uJ1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU9e3JlcXVpcmVkfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J9CX0LDQvdC40LzQsNC10LzQsNGPINC00L7Qu9C20L3QvtGB0YLRjCdcclxuICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT0nb2ZmJz57cG9zaXRpb25zLm1hcChwPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtwLnZhbHVlfT57cC5uYW1lfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgKSl9PC9GaWVsZD5cclxuICAgICAgICAgICAgICAgeyhlcnJvcnMucG9zaXRpb24gJiYgdG91Y2hlZC5wb3NpdGlvbikgPyA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz57ZXJyb3JzLnBvc2l0aW9ufTwvcD4gOiAgPHAgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+PC9wPn1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdmaW8nXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZT17YWNjZXB0Q2lycmlsaWN9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0n0KTQmNCeJ1xyXG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPSdvZmYnLz5cclxuICAgICAgICAgICAgICAgeyhlcnJvcnMuZmlvICYmIHRvdWNoZWQuZmlvKSA/IDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPntlcnJvcnMuZmlvfTwvcD4gOiAgPHAgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+PC9wPn1cclxuXHJcbiAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdwaG9uZSdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J9Ci0LXQu9C10YTQvtC9INC90L7QvNC10YAnXHJcbiAgICAgICAgICAgICAgICB0eXBlPSd0ZWwnXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZT17cGhvbmVWYWxpZGF0aW9ufVxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtQaG9uZU1hc2t9PjwvRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgeyhlcnJvcnMucGhvbmUgJiYgdG91Y2hlZC5waG9uZSkgPyA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz57ZXJyb3JzLnBob25lfTwvcD4gOiAgPHAgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+PC9wPn1cclxuXHJcbiAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdpaW4nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSfQmNCY0J0nXHJcbiAgICAgICAgICAgICAgICB0eXBlPSd0ZWwnXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZT17aWluVmFsaWRhdGlvbn1cclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17SWluTWFza30+PC9GaWVsZD5cclxuICAgICAgICAgICAgICAgICB7KGVycm9ycy5paW4gJiYgdG91Y2hlZC5paW4pID8gPHAgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+e2Vycm9ycy5paW59PC9wPiA6ICA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz48L3A+fVxyXG5cclxuICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdlbWFpbCdcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlPXtlbWFpbFZhbGlkfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VtYWlsJ1xyXG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPSdvZmYnLz5cclxuICAgICAgICAgICAgICAgICB7KGVycm9ycy5lbWFpbCAmJiB0b3VjaGVkLmVtYWlsKSA/IDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPntlcnJvcnMuZW1haWx9PC9wPiA6ICA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz48L3A+fVxyXG5cclxuICAgICAgICAgICAgICB7LyogPEZpZWxkXHJcbiAgICAgICAgICAgICAgICB0eXBlPSdwYXNzd29yZCdcclxuICAgICAgICAgICAgICAgIG5hbWU9J3Bhc3N3b3JkJ1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU9e3Bhc3N3b3JkVmFsaWR9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0n0J/RgNC40LTRg9C80LDQudGC0LUg0L/QsNGA0L7Qu9GMJ1xyXG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPSdvZmYnLz4gXHJcbiAgICAgICAgICAgICAgICAgeyhlcnJvcnMucGFzc3dvcmQgJiYgdG91Y2hlZC5wYXNzd29yZCkgPyA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz57ZXJyb3JzLnBhc3N3b3JkfTwvcD4gOiAgPHAgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+PC9wPn0gKi99XHJcblxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzaW5nbGVidG4nXHJcbiAgICAgICAgICAgICAgICB0eXBlPSdzdWJtaXQnXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2J1dHRvbidcclxuICAgICAgICAgICAgICAgIHZhbHVlPSfQntGC0L/RgNCw0LLQuNGC0YwnLz5cclxuICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0Zvcm1paz5cclxuICAgICAgICA8Q29kZU1vZGFsXHJcbiAgICAgICAgICBpc01vZGFsT3Blbj17bW9kYWx9XHJcbiAgICAgICAgICBjbG9zZU1vZGFsPXtjbG9zZU1vZGFsfVxyXG4gICAgICAgICAgY29kZT17Y29kZX1cclxuICAgICAgICAgIHNldENvZGU9e3NldENvZGV9XHJcbiAgICAgICAgICBvbkZpcnN0U3RlcD17Zmlyc3RTdGVwfVxyXG4gICAgICAgICAgZXJyb3I9e2NvZGVFcnJvcn1cclxuICAgICAgICAgIGdldElkZW50aWZpY2F0aW9uPXtnZXRJZGVudGlmaWNhdGlvbn0vPiBcclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBGaXJzdFJlZyA9ICh7c2V0TG9hZGluZ30pID0+IHtcclxuICByZXR1cm4oXHJcbiAgICA8VG9hc3RQcm92aWRlcj5cclxuICAgICAgPEZpcnN0U3RlcCBzZXRMb2FkaW5nPXtzZXRMb2FkaW5nfS8+XHJcbiAgICA8L1RvYXN0UHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaXJzdFJlZyJdLCJzb3VyY2VSb290IjoiIn0=