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

// const FirstStep = () => {   return(     <div className='form_register'>
// <form>         <input type='number' name='bin' placeholder='БИН' />
// <input type='text' disabled name='organization' placeholder='' />
// <input type='text' name='position' placeholder='Занимаемая должность' />
//    <input type='text' name='fio' placeholder='Фамилия Имя' />         <input
// type='text' name='phone' placeholder='Телефон' />         <input type='text'
// name='email' placeholder='Email' />         <input className='singlebtn'
// type='button' className='button' value='Отправить' />       </form>
// </div>   ) } export default FirstStep

















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
    // axios.get(`https://api.money-men.kz/api/testKompra?bin=${value}`)
    // .then(res=> {       setOrganization(res.data.content[0].name)     }) }
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
        iin: formData.iin,
        companyName: formData.companyName,
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
              name: "iin",
              className: "form-control",
              placeholder: "\u0411\u0418\u041D",
              type: "tel",
              onChange: function onChange(e) {
                return binChange(e);
              },
              value: binVal
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 231,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_9__.Field, {
              type: "text",
              disabled: true,
              className: organization.type === false && organization.value && 'disabled_error',
              value: organization.value,
              name: "companyName",
              placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 232,
              columnNumber: 15
            }, _this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_9__.Field, {
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
                  lineNumber: 246,
                  columnNumber: 19
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 239,
              columnNumber: 15
            }, _this), errors.position && touched.position ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "text-danger",
              children: errors.position
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 249,
              columnNumber: 19
            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "text-danger"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 250,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_9__.Field, {
              type: "text",
              name: "fio",
              validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_10__.acceptCirrilic,
              placeholder: "\u0424\u0418\u041E",
              autocomplete: "off"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 252,
              columnNumber: 15
            }, _this), " ", errors.fio && touched.fio ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "text-danger",
              children: errors.fio
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 258,
              columnNumber: 19
            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "text-danger"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 259,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_9__.Field, {
              name: "phone",
              className: "form-control",
              placeholder: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D \u043D\u043E\u043C\u0435\u0440",
              type: "tel",
              validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_10__.phoneValidation,
              component: _Masks_PhoneMask__WEBPACK_IMPORTED_MODULE_16__.default
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 261,
              columnNumber: 15
            }, _this), errors.phone && touched.phone ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "text-danger",
              children: errors.phone
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 269,
              columnNumber: 19
            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "text-danger"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 270,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_9__.Field, {
              type: "text",
              name: "email",
              validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_10__.emailValid,
              placeholder: "Email",
              autocomplete: "off"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 272,
              columnNumber: 15
            }, _this), " ", errors.email && touched.email ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "text-danger",
              children: errors.email
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 278,
              columnNumber: 19
            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "text-danger"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 279,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "firststep_banner",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "firststep_banner--img",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                  src: "/img/form/firststep.svg"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 291,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 290,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "firststep_banner--button",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", (_jsxDEV2 = {
                  className: "singlebtn",
                  type: "submit"
                }, (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_jsxDEV2, "className", "button"), (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_jsxDEV2, "value", "\u0425\u043E\u0447\u0443 \u0441\u043A\u0438\u0434\u043A\u0438"), _jsxDEV2), void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 294,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                  children: ["\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0448\u0430\u0433", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 299,
                    columnNumber: 35
                  }, _this), "\u0434\u0430\u0441\u0442 50% \u0441\u043A\u0438\u0434\u043A\u0438"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 299,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 293,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 289,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 229,
            columnNumber: 13
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 214,
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
        lineNumber: 307,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 212,
    columnNumber: 5
  }, _this);
};

_s(FirstStep, "e9hFwu71f83zzxupq5lvALsA/tQ=", false, function () {
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
      lineNumber: 324,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 323,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRzZXJ2aWNlL0ZpcnN0U3RlcEp1ci5qcyJdLCJuYW1lcyI6WyJGaXJzdFN0ZXAiLCJzZXRMb2FkaW5nIiwidXNlVG9hc3RzIiwiYWRkVG9hc3QiLCJ1c2VTdGF0ZSIsImVtYWlsIiwicGhvbmUiLCJmaW8iLCJwYXNzd29yZCIsInR5cGUiLCJwb3NpdGlvbiIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJjb2RlRXJyb3IiLCJzZXRDb2RlRXJyb3IiLCJiaW5WYWwiLCJzZXRCaW4iLCJ2YWx1ZSIsImxvYWRpbmciLCJvcmdhbml6YXRpb24iLCJzZXRPcmdhbml6YXRpb24iLCJtb2RhbCIsInNldE1vZGFsIiwiY2xvc2VNb2RhbCIsImJpbkNoYW5nZSIsImUiLCJ2YWwiLCJ0YXJnZXQiLCJyZXBsYWNlIiwidXNlRWZmZWN0IiwibGVuZ3RoIiwiYXhpb3MiLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiY29udGVudCIsInNldFRpbWVvdXQiLCJuYW1lIiwiZXJyIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJjb2RlIiwic2V0Q29kZSIsImdldElkZW50aWZpY2F0aW9uIiwidmFsdWVzIiwidmFsaWRhZ2UiLCJpaW4iLCJzd2FsIiwicHJvY2VzcyIsInBhcmFtcyIsInJlcGxhY2VEYXRlIiwic291cmNlIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJhcHBlYXJhbmNlIiwiYXV0b0Rpc21pc3MiLCJmaXJzdFN0ZXAiLCJjb2RlVmFsIiwiY29tcGFueU5hbWUiLCJjb29raWUiLCJ0b2tlbiIsImlkIiwiUm91dGVyIiwiZmluYWxFcnIiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiZW1haWxWYWxpZCIsInJlcXVpcmVkIiwicGhvbmVWYWxpZGF0aW9uIiwicGFzc3dvcmRWYWxpZCIsIm9uQ2hhbmdlIiwiYmluIiwidG91Y2hlZCIsInBv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QUhaLHVJQUlRLCtEQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFNRTtBQUFBLHVIQUFnQjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkE1REY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUREO0FBQUE7QUFkSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUE4RkUsOERBQUMsc0RBQUQ7QUFDRSxtQkFBVyxFQUFFa0IsS0FEZjtBQUVFLGtCQUFVLEVBQUVFLFVBRmQ7QUFHRSxZQUFJLEVBQUVxQixJQUhSO0FBSUUsZUFBTyxFQUFFQyxPQUpYO0FBS0UsbUJBQVcsRUFBRWMsU0FMZjtBQU1FLGFBQUssRUFBRTlDLFNBTlQ7QUFPRSx5QkFBaUIsRUFBRWlDO0FBUHJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE5RkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNEdELENBM1JEOztHQUFNaEQsUztVQUNlRSxnRTs7O0tBRGZGLFM7O0FBNlJOLElBQU1rRixRQUFRLEdBQUcsU0FBWEEsUUFBVyxRQUFrQjtBQUFBLE1BQWhCakYsVUFBZ0IsU0FBaEJBLFVBQWdCO0FBQ2pDLHNCQUNFLDhEQUFDLG9FQUFEO0FBQUEsMkJBQ0UsOERBQUMsU0FBRDtBQUFXLGdCQUFVLEVBQUVBO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFLRCxDQU5EOztNQUFNaUYsUTtBQVFOLCtEQUFlQSxRQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2p1cnNlcnZpY2UuZGZiOGYxMDJjNmE5OWMwOTUxZDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IEZpcnN0U3RlcCA9ICgpID0+IHsgICByZXR1cm4oICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybV9yZWdpc3Rlcic+XHJcbi8vIDxmb3JtPiAgICAgICAgIDxpbnB1dCB0eXBlPSdudW1iZXInIG5hbWU9J2JpbicgcGxhY2Vob2xkZXI9J9CR0JjQnScgLz5cclxuLy8gPGlucHV0IHR5cGU9J3RleHQnIGRpc2FibGVkIG5hbWU9J29yZ2FuaXphdGlvbicgcGxhY2Vob2xkZXI9JycgLz5cclxuLy8gPGlucHV0IHR5cGU9J3RleHQnIG5hbWU9J3Bvc2l0aW9uJyBwbGFjZWhvbGRlcj0n0JfQsNC90LjQvNCw0LXQvNCw0Y8g0LTQvtC70LbQvdC+0YHRgtGMJyAvPlxyXG4vLyAgICA8aW5wdXQgdHlwZT0ndGV4dCcgbmFtZT0nZmlvJyBwbGFjZWhvbGRlcj0n0KTQsNC80LjQu9C40Y8g0JjQvNGPJyAvPiAgICAgICAgIDxpbnB1dFxyXG4vLyB0eXBlPSd0ZXh0JyBuYW1lPSdwaG9uZScgcGxhY2Vob2xkZXI9J9Ci0LXQu9C10YTQvtC9JyAvPiAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0J1xyXG4vLyBuYW1lPSdlbWFpbCcgcGxhY2Vob2xkZXI9J0VtYWlsJyAvPiAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J3NpbmdsZWJ0bidcclxuLy8gdHlwZT0nYnV0dG9uJyBjbGFzc05hbWU9J2J1dHRvbicgdmFsdWU9J9Ce0YLQv9GA0LDQstC40YLRjCcgLz4gICAgICAgPC9mb3JtPlxyXG4vLyA8L2Rpdj4gICApIH0gZXhwb3J0IGRlZmF1bHQgRmlyc3RTdGVwXHJcblxyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDb2RlTW9kYWwgZnJvbSAnLi4vc2hhcmVkL0NvZGVNb2RhbCdcclxuaW1wb3J0IHtyZXBsYWNlRGF0ZX0gZnJvbSAnLi4vLi4vZGVmYXVsdHMvZXh0cmFGdW5jdGlvbidcclxuaW1wb3J0IHtwb3NpdGlvbnN9IGZyb20gJy4uLy4uL2RlZmF1bHRzL3Bvc2l0aW9ucydcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnXHJcbmltcG9ydCB7VG9hc3RQcm92aWRlciwgdXNlVG9hc3RzfSBmcm9tICdyZWFjdC10b2FzdC1ub3RpZmljYXRpb25zJ1xyXG5pbXBvcnQge0Zvcm1paywgRm9ybSwgRmllbGR9IGZyb20gJ2Zvcm1payc7XHJcbmltcG9ydCB7XHJcbiAgZW1haWxWYWxpZCxcclxuICByZXF1aXJlZCxcclxuICBwaG9uZVZhbGlkYXRpb24sXHJcbiAgcGFzc3dvcmRWYWxpZCxcclxuICBhY2NlcHRDaXJyaWxpYyxcclxuICBwaG9uZUNoZWNrLFxyXG4gIGlpblZhbGlkYXRpb25cclxufSBmcm9tICcuLi8uLi9kZWZhdWx0cy92YWxpZGF0aW9ucydcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi9sb2FkZXIvTG9hZGVyJ1xyXG5pbXBvcnQge3ZhbGlkYWdlfSBmcm9tICcuLi8uLi9kZWZhdWx0cy9paW5WYWxpZEFnZSdcclxuaW1wb3J0IHN3YWwgZnJvbSAnc3dlZXRhbGVydCdcclxuaW1wb3J0IExvYWRlclRleHQgZnJvbSAnLi4vc2hhcmVkL0xvYWRlclRleHQnXHJcbmltcG9ydCBQaG9uZU1hc2sgZnJvbSAnLi4vTWFza3MvUGhvbmVNYXNrJ1xyXG5pbXBvcnQgSWluTWFzayBmcm9tICcuLi9NYXNrcy9JaW5NYXNrJ1xyXG5cclxuY29uc3QgRmlyc3RTdGVwID0gKHtzZXRMb2FkaW5nfSkgPT4ge1xyXG4gIGNvbnN0IHthZGRUb2FzdH0gPSB1c2VUb2FzdHMoKVxyXG4gIGNvbnN0IFtmb3JtRGF0YSxcclxuICAgIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgIGVtYWlsOiAnJyxcclxuICAgIHBob25lOiAnJyxcclxuICAgIGZpbzogJycsXHJcbiAgICBwYXNzd29yZDogJycsXHJcbiAgICB0eXBlOiAn0K7RgCDQu9C40YbQvicsXHJcbiAgICBwb3NpdGlvbjogJzEnXHJcbiAgfSlcclxuICBjb25zdCBbZXJyb3JzLFxyXG4gICAgc2V0RXJyb3JzXSA9IHVzZVN0YXRlKHtlbWFpbDogJycsIHBob25lOiAnJywgZmlvOiAnJywgcGFzc3dvcmQ6ICcnfSlcclxuICBjb25zdCBbY29kZUVycm9yLFxyXG4gICAgc2V0Q29kZUVycm9yXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtiaW5WYWwsXHJcbiAgICBzZXRCaW5dID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW29yZ2FuaXphdGlvbixcclxuICAgIHNldE9yZ2FuaXphdGlvbl0gPSB1c2VTdGF0ZSh7dmFsdWU6ICcnLCB0eXBlOiBmYWxzZSwgbG9hZGluZzogZmFsc2V9KVxyXG4gIGNvbnN0IFttb2RhbCxcclxuICAgIHNldE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICBjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0TW9kYWwoZmFsc2UpXHJcbiAgfVxyXG5cclxuICBjb25zdCBiaW5DaGFuZ2UgPSBlID0+IHtcclxuICAgIGNvbnN0IHZhbCA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgY29uc3QgdmFsdWUgPSB2YWxcclxuICAgICAgPyB2YWwucmVwbGFjZSgvIC9nLCBcIlwiKVxyXG4gICAgICA6ICcnXHJcbiAgICBzZXRCaW4oZS50YXJnZXQudmFsdWUpXHJcbiAgICAvLyBpZih2YWx1ZS5sZW5ndGggPT09IDEyKSB7XHJcbiAgICAvLyBheGlvcy5nZXQoYGh0dHBzOi8vYXBpLm1vbmV5LW1lbi5rei9hcGkvdGVzdEtvbXByYT9iaW49JHt2YWx1ZX1gKVxyXG4gICAgLy8gLnRoZW4ocmVzPT4geyAgICAgICBzZXRPcmdhbml6YXRpb24ocmVzLmRhdGEuY29udGVudFswXS5uYW1lKSAgICAgfSkgfVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHZhbHVlID0gYmluVmFsXHJcbiAgICAgID8gYmluVmFsLnJlcGxhY2UoLyAvZywgXCJcIilcclxuICAgICAgOiAnJ1xyXG4gICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMTIpIHtcclxuICAgICAgc2V0T3JnYW5pemF0aW9uKHtcclxuICAgICAgICAuLi5vcmdhbml6YXRpb24sXHJcbiAgICAgICAgdHlwZTogdHJ1ZSxcclxuICAgICAgICB2YWx1ZTogJ9CX0LDQs9GA0YPQt9C60LAuLi4nLFxyXG4gICAgICAgIGxvYWRpbmc6IHRydWVcclxuICAgICAgfSlcclxuICAgICAgYXhpb3NcclxuICAgICAgICAuZ2V0KGBodHRwczovL2FwaS5tb25leS1tZW4ua3ovYXBpL3Rlc3RLb21wcmE/YmluPSR7dmFsdWV9YCwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKidcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgIGlmIChyZXMuZGF0YS5jb250ZW50Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICBzZXRPcmdhbml6YXRpb24oe3ZhbHVlOiAn0J/QvtC20LDQu9GD0LnRgdGC0LAg0LLQstC10LTQuNGC0LUg0L/RgNCw0LLQuNC70YzQvdGL0Lkg0JHQmNCdJywgdHlwZTogZmFsc2UsIGxvYWRpbmc6IGZhbHNlfSlcclxuICAgICAgICAgICAgfSwgMTAwMClcclxuXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRPcmdhbml6YXRpb24oe3ZhbHVlOiByZXMuZGF0YS5jb250ZW50WzBdLm5hbWUsIHR5cGU6IHRydWUsIGxvYWRpbmc6IGZhbHNlfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgICAgaWYgKGVyci5yZXNwb25zZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2Uuc3RhdHVzKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc2V0T3JnYW5pemF0aW9uKHt2YWx1ZTogJ9Cf0L7QttCw0LvRg9C50YHRgtCwINCy0LLQtdC00LjRgtC1INC/0YDQsNCy0LjQu9GM0L3Ri9C5INCR0JjQnScsIHR5cGU6IGZhbHNlLCBsb2FkaW5nOiBmYWxzZX0pXHJcbiAgICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldE9yZ2FuaXphdGlvbih7dmFsdWU6ICcnLCB0eXBlOiBmYWxzZSwgbG9hZGluZzogZmFsc2V9KVxyXG4gICAgfVxyXG4gIH0sIFtiaW5WYWxdKVxyXG4gIGNvbnN0IFtjb2RlLFxyXG4gICAgc2V0Q29kZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgZ2V0SWRlbnRpZmljYXRpb24gPSAodmFsdWVzKSA9PiB7XHJcbiAgICBpZiAoIXZhbGlkYWdlKHZhbHVlcy5paW4pKSB7XHJcbiAgICAgIHN3YWwoXCJPb3BzIVwiLCBg0JjQt9Cy0LjQvdC40YLQtSwg0YPRgdC70YPQs9CwINC+0YHRg9GJ0LXRgdGC0LLQu9GP0LXRgtGB0Y8g0LvQuNGG0LDQvCDQtNC+0YHRgtC40LPRiNC40LUgMTgg0LvQtdGCLmAsIFwiaW5mb1wiKTtcclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICAgIHNldEZvcm1EYXRhKHZhbHVlcylcclxuICAgICAgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9pZGVudGlmaWNhdGlvbmAsIHtcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIGZpbzogdmFsdWVzLmZpbyxcclxuICAgICAgICAgIHBob25lOiByZXBsYWNlRGF0ZSh2YWx1ZXMucGhvbmUpLFxyXG4gICAgICAgICAgZW1haWw6IHZhbHVlcy5lbWFpbCxcclxuICAgICAgICAgIHBhc3N3b3JkOiB2YWx1ZXMucGFzc3dvcmQsXHJcbiAgICAgICAgICB0eXBlOiB2YWx1ZXMudHlwZSxcclxuICAgICAgICAgIHNvdXJjZTogJ25hc2hjb21wYW55Lmt6J1xyXG4gICAgICAgIH1cclxuICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIHNldEZvcm1EYXRhKClcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICBpZiAocmVzLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgc2V0TW9kYWwodHJ1ZSlcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcmVzLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgYWRkVG9hc3QocmVzLmRhdGEubWVzc2FnZSwge1xyXG4gICAgICAgICAgICBhcHBlYXJhbmNlOiAnZXJyb3InLFxyXG4gICAgICAgICAgICBhdXRvRGlzbWlzczogdHJ1ZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICBpZiAoZXJyLnJlc3BvbnNlKSB7XHJcbiAgICAgICAgICBhZGRUb2FzdChlcnIucmVzcG9uc2Uuc3RhdHVzLCB7XHJcbiAgICAgICAgICAgIGFwcGVhcmFuY2U6ICdlcnJvcicsXHJcbiAgICAgICAgICAgIGF1dG9EaXNtaXNzOiB0cnVlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBjb25zdCBmaXJzdFN0ZXAgPSAoY29kZVZhbCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9zdGVwT25lYCwge1xyXG4gICAgICBwYXJhbXM6IHtcclxuICAgICAgICBmaW86IGZvcm1EYXRhLmZpbyxcclxuICAgICAgICBwaG9uZTogcmVwbGFjZURhdGUoZm9ybURhdGEucGhvbmUpLFxyXG4gICAgICAgIGVtYWlsOiBmb3JtRGF0YS5lbWFpbCxcclxuICAgICAgICBwYXNzd29yZDogZm9ybURhdGEucGFzc3dvcmQsXHJcbiAgICAgICAgdHlwZTogZm9ybURhdGEudHlwZSxcclxuICAgICAgICBjb2RlOiBjb2RlVmFsLFxyXG4gICAgICAgIGlpbjogZm9ybURhdGEuaWluLFxyXG4gICAgICAgIGNvbXBhbnlOYW1lOiBmb3JtRGF0YS5jb21wYW55TmFtZSxcclxuICAgICAgICBzb3VyY2U6IGNvb2tpZS5nZXQoJ3V0bV9zb3VyY2UnKSArICdfMScgfHwgJ25hc2hjb21wYW55Lmt6J1xyXG4gICAgICB9XHJcbiAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICBjb29raWUuc2V0KCd0b2tlbicsIHJlcy5kYXRhLnRva2VuKVxyXG4gICAgICAgIGNvb2tpZS5zZXQoJ2xlYWRfaWQnLCByZXMuZGF0YS5pZClcclxuICAgICAgICBjb29raWUuc2V0KCdzdGVwJywgMilcclxuICAgICAgICBSb3V0ZXIucHVzaCgnL2p1cnNlcnZpY2U/c3RlcD0yJylcclxuICAgICAgfVxyXG4gICAgICBpZiAoIXJlcy5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICBzZXRDb2RlRXJyb3IocmVzLmRhdGEubWVzc2FnZSlcclxuICAgICAgICBhZGRUb2FzdChmaW5hbEVyciwge1xyXG4gICAgICAgICAgYXBwZWFyYW5jZTogJ2Vycm9yJyxcclxuICAgICAgICAgIGF1dG9EaXNtaXNzOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgc2V0RXJyb3JzKHtcclxuICAgICAgLi4uZXJyb3JzLFxyXG4gICAgICBlbWFpbDogZW1haWxWYWxpZChmb3JtRGF0YS5lbWFpbCksXHJcbiAgICAgIGZpbzogcmVxdWlyZWQoZm9ybURhdGEuZmlvKSxcclxuICAgICAgcGhvbmU6IHBob25lVmFsaWRhdGlvbihmb3JtRGF0YS5waG9uZSksXHJcbiAgICAgIHBhc3N3b3JkOiBwYXNzd29yZFZhbGlkKGZvcm1EYXRhLnBhc3N3b3JkKVxyXG4gICAgfSlcclxuXHJcbiAgICBnZXRJZGVudGlmaWNhdGlvbigpXHJcbiAgfVxyXG5cclxuICBjb25zdCBvbkNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBuYW1lID0gZS50YXJnZXQubmFtZTtcclxuICAgIHNldEZvcm1EYXRhKHtcclxuICAgICAgLi4uZm9ybURhdGEsXHJcbiAgICAgIFtuYW1lXTogZS50YXJnZXQudmFsdWVcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm1fcmVnaXN0ZXInPlxyXG4gICAgICAgIDxGb3JtaWtcclxuICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcclxuICAgICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICAgIGJpbjogJycsXHJcbiAgICAgICAgICBwb3NpdGlvbjogJzEnLFxyXG4gICAgICAgICAgcGhvbmU6ICcnLFxyXG4gICAgICAgICAgZmlvOiAnJyxcclxuICAgICAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgICAgIHR5cGU6ICfQrtGAINC70LjRhtC+JyxcclxuICAgICAgICAgIGlpbjogJydcclxuICAgICAgICB9fVxyXG4gICAgICAgICAgb25TdWJtaXQ9eyh2YWx1ZXMpID0+IHtcclxuICAgICAgICAgIGdldElkZW50aWZpY2F0aW9uKHZhbHVlcylcclxuICAgICAgICB9fT5cclxuICAgICAgICAgIHsoe2Vycm9ycywgdG91Y2hlZH0pID0+IChcclxuICAgICAgICAgICAgPEZvcm0+XHJcblxyXG4gICAgICAgICAgICAgIDxGaWVsZCBuYW1lPSdpaW4nIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJyBwbGFjZWhvbGRlcj0n0JHQmNCdJyB0eXBlPSd0ZWwnIG9uQ2hhbmdlPXtlID0+IGJpbkNoYW5nZShlKX0gdmFsdWU9e2JpblZhbH0gIC8+IFxyXG4gICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyhvcmdhbml6YXRpb24udHlwZSA9PT0gZmFsc2UgJiYgb3JnYW5pemF0aW9uLnZhbHVlKSAmJiAnZGlzYWJsZWRfZXJyb3InfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e29yZ2FuaXphdGlvbi52YWx1ZX1cclxuICAgICAgICAgICAgICAgIG5hbWU9J2NvbXBhbnlOYW1lJ1xyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J9Cd0LDQt9Cy0LDQvdC40LUg0J7RgNCz0LDQvdC40LfQsNGG0LjQuCcvPiB7LyogPGlucHV0IHR5cGU9J3RleHQnIGNsYXNzTmFtZT17KG9yZ2FuaXphdGlvbi50eXBlID09PSBmYWxzZSAmJiBvcmdhbml6YXRpb24udmFsdWUpICYmICdkaXNhYmxlZF9lcnJvcid9IHZhbHVlPXtvcmdhbml6YXRpb24udmFsdWV9IGRpc2FibGVkIG5hbWU9J29yZ2FuaXphdGlvbicgcGxhY2Vob2xkZXI9J9Cd0LDQt9Cy0LDQvdC40LUg0J7RgNCz0LDQvdC40LfQsNGG0LjQuCcgLz4gKi99XHJcbiAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICBhcz0nc2VsZWN0J1xyXG4gICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgIG5hbWU9J3Bvc2l0aW9uJ1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU9e3JlcXVpcmVkfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J9CX0LDQvdC40LzQsNC10LzQsNGPINC00L7Qu9C20L3QvtGB0YLRjCdcclxuICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT0nb2ZmJz57cG9zaXRpb25zLm1hcChwID0+IChcclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17cC52YWx1ZX0+e3AubmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICkpfTwvRmllbGQ+XHJcbiAgICAgICAgICAgICAgeyhlcnJvcnMucG9zaXRpb24gJiYgdG91Y2hlZC5wb3NpdGlvbilcclxuICAgICAgICAgICAgICAgID8gPHAgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+e2Vycm9ycy5wb3NpdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICA6IDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPjwvcD59XHJcblxyXG4gICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgIG5hbWU9J2ZpbydcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlPXthY2NlcHRDaXJyaWxpY31cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSfQpNCY0J4nXHJcbiAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9J29mZicvPiB7KGVycm9ycy5maW8gJiYgdG91Y2hlZC5maW8pXHJcbiAgICAgICAgICAgICAgICA/IDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPntlcnJvcnMuZmlvfTwvcD5cclxuICAgICAgICAgICAgICAgIDogPHAgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+PC9wPn1cclxuXHJcbiAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdwaG9uZSdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J9Ci0LXQu9C10YTQvtC9INC90L7QvNC10YAnXHJcbiAgICAgICAgICAgICAgICB0eXBlPSd0ZWwnXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZT17cGhvbmVWYWxpZGF0aW9ufVxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtQaG9uZU1hc2t9PjwvRmllbGQ+XHJcbiAgICAgICAgICAgICAgeyhlcnJvcnMucGhvbmUgJiYgdG91Y2hlZC5waG9uZSlcclxuICAgICAgICAgICAgICAgID8gPHAgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+e2Vycm9ycy5waG9uZX08L3A+XHJcbiAgICAgICAgICAgICAgICA6IDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPjwvcD59XHJcblxyXG4gICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgIG5hbWU9J2VtYWlsJ1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU9e2VtYWlsVmFsaWR9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW1haWwnXHJcbiAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9J29mZicvPiB7KGVycm9ycy5lbWFpbCAmJiB0b3VjaGVkLmVtYWlsKVxyXG4gICAgICAgICAgICAgICAgPyA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz57ZXJyb3JzLmVtYWlsfTwvcD5cclxuICAgICAgICAgICAgICAgIDogPHAgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+PC9wPn1cclxuXHJcbiAgICAgICAgICAgICAgey8qIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdwYXNzd29yZCdcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlPXtwYXNzd29yZFZhbGlkfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J9Cf0YDQuNC00YPQvNCw0LnRgtC1INC/0LDRgNC+0LvRjCdcclxuICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT0nb2ZmJy8+XHJcbiAgICAgICAgICAgICAgICAgeyhlcnJvcnMucGFzc3dvcmQgJiYgdG91Y2hlZC5wYXNzd29yZCkgPyA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz57ZXJyb3JzLnBhc3N3b3JkfTwvcD4gOiAgPHAgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+PC9wPn0gKi99XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaXJzdHN0ZXBfYmFubmVyJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaXJzdHN0ZXBfYmFubmVyLS1pbWcnPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nL2ltZy9mb3JtL2ZpcnN0c3RlcC5zdmcnLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpcnN0c3RlcF9iYW5uZXItLWJ1dHRvbic+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2luZ2xlYnRuJ1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2J1dHRvbidcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT0n0KXQvtGH0YMg0YHQutC40LTQutC4Jy8+XHJcbiAgICAgICAgICAgICAgICAgIDxiPtCh0LvQtdC00YPRjtGJ0LjQuSDRiNCw0LM8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICDQtNCw0YHRgiA1MCUg0YHQutC40LTQutC4PC9iPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvRm9ybWlrPlxyXG4gICAgICAgIDxDb2RlTW9kYWxcclxuICAgICAgICAgIGlzTW9kYWxPcGVuPXttb2RhbH1cclxuICAgICAgICAgIGNsb3NlTW9kYWw9e2Nsb3NlTW9kYWx9XHJcbiAgICAgICAgICBjb2RlPXtjb2RlfVxyXG4gICAgICAgICAgc2V0Q29kZT17c2V0Q29kZX1cclxuICAgICAgICAgIG9uRmlyc3RTdGVwPXtmaXJzdFN0ZXB9XHJcbiAgICAgICAgICBlcnJvcj17Y29kZUVycm9yfVxyXG4gICAgICAgICAgZ2V0SWRlbnRpZmljYXRpb249e2dldElkZW50aWZpY2F0aW9ufS8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgRmlyc3RSZWcgPSAoe3NldExvYWRpbmd9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxUb2FzdFByb3ZpZGVyPlxyXG4gICAgICA8Rmlyc3RTdGVwIHNldExvYWRpbmc9e3NldExvYWRpbmd9Lz5cclxuICAgIDwvVG9hc3RQcm92aWRlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpcnN0UmVnIl0sInNvdXJjZVJvb3QiOiIifQ==