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
    position: '1'
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

_s(FirstStep, "v3+a/NR7BcY7NDFM5o2GzmQLWe4=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRzZXJ2aWNlL0ZpcnN0U3RlcEp1ci5qcyJdLCJuYW1lcyI6WyJGaXJzdFN0ZXAiLCJzZXRMb2FkaW5nIiwidXNlVG9hc3RzIiwiYWRkVG9hc3QiLCJ1c2VTdGF0ZSIsImVtYWlsIiwicGhvbmUiLCJmaW8iLCJwYXNzd29yZCIsInR5cGUiLCJwb3NpdGlvbiIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJjb2RlRXJyb3IiLCJzZXRDb2RlRXJyb3IiLCJiaW5WYWwiLCJzZXRCaW4iLCJ2YWx1ZSIsImxvYWRpbmciLCJvcmdhbml6YXRpb24iLCJzZXRPcmdhbml6YXRpb24iLCJtb2RhbCIsInNldE1vZGFsIiwiY2xvc2VNb2RhbCIsImJpbkNoYW5nZSIsImUiLCJ2YWwiLCJ0YXJnZXQiLCJyZXBsYWNlIiwidXNlRWZmZWN0IiwibGVuZ3RoIiwiYXhpb3MiLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiY29udGVudCIsInNldFRpbWVvdXQiLCJuYW1lIiwiZXJyIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJjb2RlIiwic2V0Q29kZSIsImdldElkZW50aWZpY2F0aW9uIiwidmFsdWVzIiwidmFsaWRhZ2UiLCJpaW4iLCJzd2FsIiwicHJvY2VzcyIsInBhcmFtcyIsInJlcGxhY2VEYXRlIiwic291cmNlIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJhcHBlYXJhbmNlIiwiYXV0b0Rpc21pc3MiLCJmaXJzdFN0ZXAiLCJjb2RlVmFsIiwiY29va2llIiwidG9rZW4iLCJpZCIsIlJvdXRlciIsImZpbmFsRXJyIiwib25TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImVtYWlsVmFsaWQiLCJyZXF1aXJlZCIsInBob25lVmFsaWRhdGlvbiIsInBhc3N3b3JkVmFsaWQiLCJvbkNoYW5nZSIsImJpbiIsInRvdWNoZWQiLCJJaW5NYXNrIiwicG9zaXRpb25zIiwicCIsImFjY2VwdENpcnJpbGljIiwiUGhvbmVNYXNrIiwiaWluVmFsaWRhdGlvbiIsIkZpcnN0UmVnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFrQjtBQUFBOztBQUFBLE1BQWhCQyxVQUFnQixRQUFoQkEsVUFBZ0I7O0FBQUEsbUJBQ2JDLG9FQUFTLEVBREk7QUFBQSxNQUMxQkMsUUFEMEIsY0FDMUJBLFFBRDBCOztBQUFBLGtCQUdqQkMsK0NBQVEsQ0FBQztBQUFDQyxTQUFLLEVBQUUsRUFBUjtBQUFZQyxTQUFLLEVBQUUsRUFBbkI7QUFBdUJDLE9BQUcsRUFBRSxFQUE1QjtBQUFnQ0MsWUFBUSxFQUFFLEVBQTFDO0FBQThDQyxRQUFJLEVBQUUsU0FBcEQ7QUFBK0RDLFlBQVEsRUFBRTtBQUF6RSxHQUFELENBSFM7QUFBQSxNQUUzQkMsUUFGMkI7QUFBQSxNQUdoQ0MsV0FIZ0M7O0FBQUEsbUJBS25CUiwrQ0FBUSxDQUFDO0FBQUNDLFNBQUssRUFBRSxFQUFSO0FBQVlDLFNBQUssRUFBRSxFQUFuQjtBQUF1QkMsT0FBRyxFQUFFLEVBQTVCO0FBQWdDQyxZQUFRLEVBQUU7QUFBMUMsR0FBRCxDQUxXO0FBQUEsTUFJM0JLLE1BSjJCO0FBQUEsTUFLaENDLFNBTGdDOztBQUFBLG1CQU1BViwrQ0FBUSxDQUFDLEVBQUQsQ0FOUjtBQUFBLE1BTTNCVyxTQU4yQjtBQUFBLE1BTWhCQyxZQU5nQjs7QUFBQSxtQkFPVlosK0NBQVEsQ0FBQyxFQUFELENBUEU7QUFBQSxNQU8zQmEsTUFQ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MWZhYTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IEZpcnN0U3RlcCA9ICgpID0+IHtcclxuLy8gICByZXR1cm4oXHJcbi8vICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybV9yZWdpc3Rlcic+XHJcbi8vICAgICAgIDxmb3JtPlxyXG4vLyAgICAgICAgIDxpbnB1dCB0eXBlPSdudW1iZXInIG5hbWU9J2JpbicgcGxhY2Vob2xkZXI9J9CR0JjQnScgLz5cclxuLy8gICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgZGlzYWJsZWQgbmFtZT0nb3JnYW5pemF0aW9uJyBwbGFjZWhvbGRlcj0nJyAvPlxyXG4vLyAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBuYW1lPSdwb3NpdGlvbicgcGxhY2Vob2xkZXI9J9CX0LDQvdC40LzQsNC10LzQsNGPINC00L7Qu9C20L3QvtGB0YLRjCcgLz5cclxuLy8gICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgbmFtZT0nZmlvJyBwbGFjZWhvbGRlcj0n0KTQsNC80LjQu9C40Y8g0JjQvNGPJyAvPlxyXG4vLyAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBuYW1lPSdwaG9uZScgcGxhY2Vob2xkZXI9J9Ci0LXQu9C10YTQvtC9JyAvPlxyXG4vLyAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBuYW1lPSdlbWFpbCcgcGxhY2Vob2xkZXI9J0VtYWlsJyAvPlxyXG4gICAgICAgIFxyXG4vLyAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J3NpbmdsZWJ0bicgdHlwZT0nYnV0dG9uJyBjbGFzc05hbWU9J2J1dHRvbicgdmFsdWU9J9Ce0YLQv9GA0LDQstC40YLRjCcgLz5cclxuLy8gICAgICAgPC9mb3JtPlxyXG4vLyAgICAgPC9kaXY+XHJcbi8vICAgKVxyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBGaXJzdFN0ZXBcclxuXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENvZGVNb2RhbCBmcm9tICcuLi9zaGFyZWQvQ29kZU1vZGFsJ1xyXG5pbXBvcnQge3JlcGxhY2VEYXRlfSBmcm9tICcuLi8uLi9kZWZhdWx0cy9leHRyYUZ1bmN0aW9uJ1xyXG5pbXBvcnQge3Bvc2l0aW9uc30gZnJvbSAnLi4vLi4vZGVmYXVsdHMvcG9zaXRpb25zJ1xyXG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSdcclxuaW1wb3J0IHsgVG9hc3RQcm92aWRlciwgdXNlVG9hc3RzIH0gZnJvbSAncmVhY3QtdG9hc3Qtbm90aWZpY2F0aW9ucydcclxuaW1wb3J0IHtGb3JtaWssIEZvcm0sIEZpZWxkfSBmcm9tICdmb3JtaWsnO1xyXG5pbXBvcnQge1xyXG4gIGVtYWlsVmFsaWQsXHJcbiAgcmVxdWlyZWQsXHJcbiAgcGhvbmVWYWxpZGF0aW9uLFxyXG4gIHBhc3N3b3JkVmFsaWQsXHJcbiAgYWNjZXB0Q2lycmlsaWMsXHJcbiAgcGhvbmVDaGVjayxcclxuICBpaW5WYWxpZGF0aW9uXHJcbn0gZnJvbSAnLi4vLi4vZGVmYXVsdHMvdmFsaWRhdGlvbnMnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vbG9hZGVyL0xvYWRlcidcclxuaW1wb3J0IHsgdmFsaWRhZ2UgfSBmcm9tICcuLi8uLi9kZWZhdWx0cy9paW5WYWxpZEFnZSdcclxuaW1wb3J0IHN3YWwgZnJvbSAnc3dlZXRhbGVydCdcclxuaW1wb3J0IExvYWRlclRleHQgZnJvbSAnLi4vc2hhcmVkL0xvYWRlclRleHQnXHJcbmltcG9ydCBQaG9uZU1hc2sgZnJvbSAnLi4vTWFza3MvUGhvbmVNYXNrJ1xyXG5pbXBvcnQgSWluTWFzayBmcm9tICcuLi9NYXNrcy9JaW5NYXNrJ1xyXG5cclxuXHJcbmNvbnN0IEZpcnN0U3RlcCA9ICh7c2V0TG9hZGluZ30pID0+IHtcclxuICBjb25zdCB7IGFkZFRvYXN0IH0gPSB1c2VUb2FzdHMoKVxyXG4gIGNvbnN0IFtmb3JtRGF0YSxcclxuICAgIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtlbWFpbDogJycsIHBob25lOiAnJywgZmlvOiAnJywgcGFzc3dvcmQ6ICcnLCB0eXBlOiAn0K7RgCDQu9C40YbQvicsIHBvc2l0aW9uOiAnMScsIH0pXHJcbiAgY29uc3QgW2Vycm9ycyxcclxuICAgIHNldEVycm9yc10gPSB1c2VTdGF0ZSh7ZW1haWw6ICcnLCBwaG9uZTogJycsIGZpbzogJycsIHBhc3N3b3JkOiAnJ30pXHJcbiAgY29uc3QgW2NvZGVFcnJvciwgc2V0Q29kZUVycm9yXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtiaW5WYWwsc2V0QmluXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtvcmdhbml6YXRpb24sc2V0T3JnYW5pemF0aW9uXSA9IHVzZVN0YXRlKHt2YWx1ZTogJycsIHR5cGU6IGZhbHNlLCBsb2FkaW5nOmZhbHNlfSlcclxuICBjb25zdCBbbW9kYWwsXHJcbiAgICBzZXRNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcclxuICAgIHNldE1vZGFsKGZhbHNlKVxyXG4gIH1cclxuXHJcblxyXG4gIGNvbnN0IGJpbkNoYW5nZSA9IGUgPT4ge1xyXG4gICAgY29uc3QgdmFsID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICBjb25zdCB2YWx1ZSA9IHZhbCA/IHZhbC5yZXBsYWNlKC8gL2csIFwiXCIpIDogJydcclxuICAgIHNldEJpbihlLnRhcmdldC52YWx1ZSlcclxuICAgIC8vIGlmKHZhbHVlLmxlbmd0aCA9PT0gMTIpIHtcclxuICAgIC8vICAgYXhpb3MuZ2V0KGBodHRwczovL2FwaS5tb25leS1tZW4ua3ovYXBpL3Rlc3RLb21wcmE/YmluPSR7dmFsdWV9YClcclxuICAgIC8vICAgICAudGhlbihyZXM9PiB7XHJcbiAgICAvLyAgICAgICBzZXRPcmdhbml6YXRpb24ocmVzLmRhdGEuY29udGVudFswXS5uYW1lKVxyXG4gICAgLy8gICAgIH0pXHJcbiAgICAvLyB9XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdmFsdWUgPSBiaW5WYWwgPyBiaW5WYWwucmVwbGFjZSgvIC9nLCBcIlwiKSA6ICcnXHJcbiAgICBpZih2YWx1ZS5sZW5ndGggPT09IDEyKSB7XHJcbiAgICAgIHNldE9yZ2FuaXphdGlvbih7Li4ub3JnYW5pemF0aW9uLHR5cGU6IHRydWUsdmFsdWU6J9CX0LDQs9GA0YPQt9C60LAuLi4nLCBsb2FkaW5nOiB0cnVlfSlcclxuICAgICAgYXhpb3MuZ2V0KGBodHRwczovL2FwaS5tb25leS1tZW4ua3ovYXBpL3Rlc3RLb21wcmE/YmluPSR7dmFsdWV9YCwge2hlYWRlcnM6IHtcclxuICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonXHJcbiAgICAgIH19KVxyXG4gICAgICAgIC50aGVuKHJlcz0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgIGlmKHJlcy5kYXRhLmNvbnRlbnQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldE9yZ2FuaXphdGlvbih7dmFsdWU6ICfQn9C+0LbQsNC70YPQudGB0YLQsCDQstCy0LXQtNC40YLQtSDQv9GA0LDQstC40LvRjNC90YvQuSDQkdCY0J0nLCB0eXBlOiBmYWxzZSwgbG9hZGluZzogZmFsc2V9KVxyXG4gICAgICAgICAgICB9LCAxMDAwKVxyXG4gICAgICAgXHJcbiAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIHNldE9yZ2FuaXphdGlvbih7dmFsdWU6IHJlcy5kYXRhLmNvbnRlbnRbMF0ubmFtZSwgdHlwZTogdHJ1ZSwgbG9hZGluZzogZmFsc2V9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycj0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICAgIGlmKGVyci5yZXNwb25zZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2Uuc3RhdHVzKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc2V0T3JnYW5pemF0aW9uKHt2YWx1ZTogJ9Cf0L7QttCw0LvRg9C50YHRgtCwINCy0LLQtdC00LjRgtC1INC/0YDQsNCy0LjQu9GM0L3Ri9C5INCR0JjQnScsIHR5cGU6IGZhbHNlLCBsb2FkaW5nOiBmYWxzZX0pXHJcbiAgICAgICAgfSlcclxuICAgIH1lbHNlIHtcclxuICAgICAgc2V0T3JnYW5pemF0aW9uKHt2YWx1ZTogJycsIHR5cGU6IGZhbHNlLCBsb2FkaW5nOiBmYWxzZX0pXHJcbiAgICB9XHJcbiAgfSwgW2JpblZhbF0pXHJcbiAgY29uc3QgW2NvZGUsXHJcbiAgICBzZXRDb2RlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBnZXRJZGVudGlmaWNhdGlvbiA9ICh2YWx1ZXMpID0+IHtcclxuICAgIGlmKCF2YWxpZGFnZSh2YWx1ZXMuaWluKSkge1xyXG4gICAgICBzd2FsKFwiT29wcyFcIiwgYNCY0LfQstC40L3QuNGC0LUsINGD0YHQu9GD0LPQsCDQvtGB0YPRidC10YHRgtCy0LvRj9C10YLRgdGPINC70LjRhtCw0Lwg0LTQvtGB0YLQuNCz0YjQuNC1IDE4INC70LXRgi5gLCBcImluZm9cIik7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgICBzZXRGb3JtRGF0YSh2YWx1ZXMpXHJcbiAgICAgIGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vaWRlbnRpZmljYXRpb25gLCB7XHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICBmaW86IHZhbHVlcy5maW8sXHJcbiAgICAgICAgICBwaG9uZTogcmVwbGFjZURhdGUodmFsdWVzLnBob25lKSxcclxuICAgICAgICAgIGVtYWlsOiB2YWx1ZXMuZW1haWwsXHJcbiAgICAgICAgICBwYXNzd29yZDogdmFsdWVzLnBhc3N3b3JkLFxyXG4gICAgICAgICAgdHlwZTogdmFsdWVzLnR5cGUsXHJcbiAgICAgICAgICBzb3VyY2U6ICduYXNoY29tcGFueS5reidcclxuICAgICAgICB9XHJcbiAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBzZXRGb3JtRGF0YSgpXHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgIHNldE1vZGFsKHRydWUpXHJcbiAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCFyZXMuZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICBhZGRUb2FzdChyZXMuZGF0YS5tZXNzYWdlLCB7XHJcbiAgICAgICAgICAgIGFwcGVhcmFuY2U6ICdlcnJvcicsXHJcbiAgICAgICAgICAgIGF1dG9EaXNtaXNzOiB0cnVlLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnI9PiB7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICBpZihlcnIucmVzcG9uc2UpIHtcclxuICAgICAgICAgIGFkZFRvYXN0KGVyci5yZXNwb25zZS5zdGF0dXMsIHtcclxuICAgICAgICAgICAgYXBwZWFyYW5jZTogJ2Vycm9yJyxcclxuICAgICAgICAgICAgYXV0b0Rpc21pc3M6IHRydWUsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICAgXHJcbiAgfVxyXG5cclxuICBjb25zdCBmaXJzdFN0ZXAgPSAoY29kZVZhbCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9zdGVwT25lYCwge1xyXG4gICAgICBwYXJhbXM6IHtcclxuICAgICAgICBmaW86IGZvcm1EYXRhLmZpbyxcclxuICAgICAgICBwaG9uZTogcmVwbGFjZURhdGUoZm9ybURhdGEucGhvbmUpLFxyXG4gICAgICAgIGVtYWlsOiBmb3JtRGF0YS5lbWFpbCxcclxuICAgICAgICBwYXNzd29yZDogZm9ybURhdGEucGFzc3dvcmQsXHJcbiAgICAgICAgdHlwZTogZm9ybURhdGEudHlwZSxcclxuICAgICAgICBjb2RlOiBjb2RlVmFsLFxyXG4gICAgICAgIHNvdXJjZTogY29va2llLmdldCgndXRtX3NvdXJjZScpICsgJ18xJyB8fCAnbmFzaGNvbXBhbnkua3onXHJcbiAgICAgIH1cclxuICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICBpZiAocmVzLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgIGNvb2tpZS5zZXQoJ3Rva2VuJywgcmVzLmRhdGEudG9rZW4pXHJcbiAgICAgICAgY29va2llLnNldCgnbGVhZF9pZCcsIHJlcy5kYXRhLmlkKVxyXG4gICAgICAgIGNvb2tpZS5zZXQoJ3N0ZXAnLCAyKVxyXG4gICAgICAgIFJvdXRlci5wdXNoKCcvanVyc2VydmljZT9zdGVwPTInKVxyXG4gICAgICB9XHJcbiAgICAgIGlmKCFyZXMuZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgc2V0Q29kZUVycm9yKHJlcy5kYXRhLm1lc3NhZ2UpXHJcbiAgICAgICAgYWRkVG9hc3QoZmluYWxFcnIsIHtcclxuICAgICAgICAgIGFwcGVhcmFuY2U6ICdlcnJvcicsXHJcbiAgICAgICAgICBhdXRvRGlzbWlzczogdHJ1ZSxcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBzZXRFcnJvcnMoe1xyXG4gICAgICAuLi5lcnJvcnMsXHJcbiAgICAgIGVtYWlsOiBlbWFpbFZhbGlkKGZvcm1EYXRhLmVtYWlsKSxcclxuICAgICAgZmlvOiByZXF1aXJlZChmb3JtRGF0YS5maW8pLFxyXG4gICAgICBwaG9uZTogcGhvbmVWYWxpZGF0aW9uKGZvcm1EYXRhLnBob25lKSxcclxuICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkVmFsaWQoZm9ybURhdGEucGFzc3dvcmQpXHJcbiAgICB9KVxyXG5cclxuICAgIGdldElkZW50aWZpY2F0aW9uKClcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IG5hbWUgPSBlLnRhcmdldC5uYW1lO1xyXG4gICAgc2V0Rm9ybURhdGEoe1xyXG4gICAgICAuLi5mb3JtRGF0YSxcclxuICAgICAgW25hbWVdOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybV9yZWdpc3Rlcic+XHJcbiAgICAgICAgPEZvcm1pa1xyXG4gICAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xyXG4gICAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgICAgYmluOiAnJyxcclxuICAgICAgICAgIHBvc2l0aW9uOiAnMScsXHJcbiAgICAgICAgICBwaG9uZTogJycsXHJcbiAgICAgICAgICBmaW86ICcnLFxyXG4gICAgICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICAgICAgdHlwZTogJ9Cu0YAg0LvQuNGG0L4nLFxyXG4gICAgICAgICAgaWluOiAnJyxcclxuICAgICAgICB9fVxyXG4gICAgICAgICAgb25TdWJtaXQ9eyh2YWx1ZXMpID0+IHtnZXRJZGVudGlmaWNhdGlvbih2YWx1ZXMpfX0+XHJcbiAgICAgICAgICB7KHtlcnJvcnMsIHRvdWNoZWR9KSA9PiAoXHJcbiAgICAgICAgICAgIDxGb3JtPlxyXG5cclxuICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgIG5hbWU9J2JpbidcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J9CR0JjQnSdcclxuICAgICAgICAgICAgICAgIHR5cGU9J3RlbCdcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlPT5iaW5DaGFuZ2UoZSl9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17YmluVmFsfVxyXG4gICAgICAgICAgICAgICAgLy8gdmFsaWRhdGU9e2lpblZhbGlkYXRpb259XHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0lpbk1hc2t9PjwvRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgey8qIHsoZXJyb3JzLmlpbiAmJiB0b3VjaGVkLmlpbikgPyA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz57ZXJyb3JzLmlpbn08L3A+IDogIDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPjwvcD59ICovfVxyXG4gICAgICAgICAgICAgICAgIHsvKiB7IW9yZ2FuaXphdGlvbi5sb2FkaW5nICYmIDxwIGNsYXNzTmFtZT17IW9yZ2FuaXphdGlvbi50eXBlID8gJ3RleHQtZGFuZ2VyJyA6ICd0ZXh0LWluZm8nfT57b3JnYW5pemF0aW9uLnZhbHVlfTwvcD59XHJcbiAgICAgICAgICAgICAgICAge29yZ2FuaXphdGlvbi5sb2FkaW5nICYmIDxMb2FkZXJUZXh0IC8+fSAqL31cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgY2xhc3NOYW1lPXsob3JnYW5pemF0aW9uLnR5cGUgPT09IGZhbHNlICYmIG9yZ2FuaXphdGlvbi52YWx1ZSkgJiYgJ2Rpc2FibGVkX2Vycm9yJ30gdmFsdWU9e29yZ2FuaXphdGlvbi52YWx1ZX0gZGlzYWJsZWQgbmFtZT0nb3JnYW5pemF0aW9uJyBwbGFjZWhvbGRlcj0n0J3QsNC30LLQsNC90LjQtSDQntGA0LPQsNC90LjQt9Cw0YbQuNC4JyAvPlxyXG4gICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgYXM9J3NlbGVjdCdcclxuICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdwb3NpdGlvbidcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlPXtyZXF1aXJlZH1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSfQl9Cw0L3QuNC80LDQtdC80LDRjyDQtNC+0LvQttC90L7RgdGC0YwnXHJcbiAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9J29mZic+e3Bvc2l0aW9ucy5tYXAocD0+IChcclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17cC52YWx1ZX0+e3AubmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICkpfTwvRmllbGQ+XHJcbiAgICAgICAgICAgICAgIHsoZXJyb3JzLnBvc2l0aW9uICYmIHRvdWNoZWQucG9zaXRpb24pID8gPHAgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+e2Vycm9ycy5wb3NpdGlvbn08L3A+IDogIDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPjwvcD59XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgbmFtZT0nZmlvJ1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU9e2FjY2VwdENpcnJpbGljfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J9Ck0JjQnidcclxuICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT0nb2ZmJy8+XHJcbiAgICAgICAgICAgICAgIHsoZXJyb3JzLmZpbyAmJiB0b3VjaGVkLmZpbykgPyA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz57ZXJyb3JzLmZpb308L3A+IDogIDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPjwvcD59XHJcblxyXG4gICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgbmFtZT0ncGhvbmUnXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSfQotC10LvQtdGE0L7QvSDQvdC+0LzQtdGAJ1xyXG4gICAgICAgICAgICAgICAgdHlwZT0ndGVsJ1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU9e3Bob25lVmFsaWRhdGlvbn1cclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17UGhvbmVNYXNrfT48L0ZpZWxkPlxyXG4gICAgICAgICAgICAgICAgIHsoZXJyb3JzLnBob25lICYmIHRvdWNoZWQucGhvbmUpID8gPHAgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+e2Vycm9ycy5waG9uZX08L3A+IDogIDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPjwvcD59XHJcblxyXG4gICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgbmFtZT0naWluJ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0n0JjQmNCdJ1xyXG4gICAgICAgICAgICAgICAgdHlwZT0ndGVsJ1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU9e2lpblZhbGlkYXRpb259XHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0lpbk1hc2t9PjwvRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgeyhlcnJvcnMuaWluICYmIHRvdWNoZWQuaWluKSA/IDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPntlcnJvcnMuaWlufTwvcD4gOiAgPHAgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+PC9wPn1cclxuXHJcbiAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgbmFtZT0nZW1haWwnXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZT17ZW1haWxWYWxpZH1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbWFpbCdcclxuICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT0nb2ZmJy8+XHJcbiAgICAgICAgICAgICAgICAgeyhlcnJvcnMuZW1haWwgJiYgdG91Y2hlZC5lbWFpbCkgPyA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz57ZXJyb3JzLmVtYWlsfTwvcD4gOiAgPHAgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+PC9wPn1cclxuXHJcbiAgICAgICAgICAgICAgey8qIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdwYXNzd29yZCdcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlPXtwYXNzd29yZFZhbGlkfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J9Cf0YDQuNC00YPQvNCw0LnRgtC1INC/0LDRgNC+0LvRjCdcclxuICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT0nb2ZmJy8+IFxyXG4gICAgICAgICAgICAgICAgIHsoZXJyb3JzLnBhc3N3b3JkICYmIHRvdWNoZWQucGFzc3dvcmQpID8gPHAgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+e2Vycm9ycy5wYXNzd29yZH08L3A+IDogIDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPjwvcD59ICovfVxyXG5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2luZ2xlYnRuJ1xyXG4gICAgICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdidXR0b24nXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT0n0J7RgtC/0YDQsNCy0LjRgtGMJy8+XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Gb3JtaWs+XHJcbiAgICAgICAgPENvZGVNb2RhbFxyXG4gICAgICAgICAgaXNNb2RhbE9wZW49e21vZGFsfVxyXG4gICAgICAgICAgY2xvc2VNb2RhbD17Y2xvc2VNb2RhbH1cclxuICAgICAgICAgIGNvZGU9e2NvZGV9XHJcbiAgICAgICAgICBzZXRDb2RlPXtzZXRDb2RlfVxyXG4gICAgICAgICAgb25GaXJzdFN0ZXA9e2ZpcnN0U3RlcH1cclxuICAgICAgICAgIGVycm9yPXtjb2RlRXJyb3J9XHJcbiAgICAgICAgICBnZXRJZGVudGlmaWNhdGlvbj17Z2V0SWRlbnRpZmljYXRpb259Lz4gXHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgRmlyc3RSZWcgPSAoe3NldExvYWRpbmd9KSA9PiB7XHJcbiAgcmV0dXJuKFxyXG4gICAgPFRvYXN0UHJvdmlkZXI+XHJcbiAgICAgIDxGaXJzdFN0ZXAgc2V0TG9hZGluZz17c2V0TG9hZGluZ30vPlxyXG4gICAgPC9Ub2FzdFByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlyc3RSZWciXSwic291cmNlUm9vdCI6IiJ9