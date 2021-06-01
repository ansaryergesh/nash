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
        companyName: organization,
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
              component: _Masks_IinMask__WEBPACK_IMPORTED_MODULE_17__.default,
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
                  className: "firststep",
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


/***/ }),

/***/ "./components/getservice/SecondStep.js":
/*!*********************************************!*\
  !*** ./components/getservice/SecondStep.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defaults_fizservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../defaults/fizservice */ "./defaults/fizservice.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _defaults_validations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../defaults/validations */ "./defaults/validations.js");
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-dropzone */ "./node_modules/react-dropzone/dist/es/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "E:\\job\\nashcompany\\components\\getservice\\SecondStep.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var SecondStep = function SecondStep() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      fileNames = _useState[0],
      setFileNames = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    id: js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get('lead_id'),
    token: js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get('token'),
    description: '',
    sphere: '1',
    amount: ''
  }),
      formData = _useState2[0],
      setFormData = _useState2[1];

  var onChange = function onChange(e) {
    var name = e.target.name;
    setFormData(_objectSpread(_objectSpread({}, formData), {}, (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, name, e.target.value)));
  };

  var handleDrop = function handleDrop(acceptedFiles) {
    return setFileNames(acceptedFiles.map(function (file) {
      return file.name;
    }));
  };

  var stepSecond = function stepSecond(values) {
    axios__WEBPACK_IMPORTED_MODULE_5___default().get("".concat("https://crediter.kz/api", "/stepTwo"), {
      params: {
        id: values.id,
        token: values.token,
        description: values.description,
        sphere: values.sphere,
        amount: values.amount
      }
    }).then(function (res) {
      // console.log(res)
      if (res.data.success) {
        next_router__WEBPACK_IMPORTED_MODULE_6___default().push('/getservice?step=3');
        js_cookie__WEBPACK_IMPORTED_MODULE_4___default().set('step', 3);
        js_cookie__WEBPACK_IMPORTED_MODULE_4___default().set('amount', formData.amount);
      }

      if (!res.data.success) {}
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "form_register",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_7__.Formik, {
      initialValues: {
        id: js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get('lead_id'),
        token: js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get('token'),
        description: '',
        sphere: '1',
        amount: ''
      },
      onSubmit: function onSubmit(values) {
        stepSecond(values);
      },
      children: function children(_ref) {
        var _jsxDEV2;

        var errors = _ref.errors,
            touched = _ref.touched;
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_7__.Form, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_7__.Field, {
            as: "select",
            validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_8__.required,
            name: "sphere",
            className: "form_select",
            children: _defaults_fizservice__WEBPACK_IMPORTED_MODULE_3__.fizservice.map(function (fiz, index) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                "data-img": "/img/uslugi/".concat(index + 1, ".svg"),
                value: index + 1,
                children: fiz.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 17
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 13
          }, _this), errors.sphere && touched.sphere ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "text-danger",
            children: errors.sphere
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 17
          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "text-danger"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 17
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_7__.Field, {
            as: "textarea",
            name: "description",
            validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_8__.required,
            placeholder: "\u041E\u043F\u0438\u0448\u0438\u0442\u0435 \u0432\u0430\u0448\u0443 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044E"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, _this), errors.description && touched.description ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "text-danger",
            children: errors.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 17
          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "text-danger"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 17
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_7__.Field, {
            type: "number",
            validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_8__.required,
            name: "amount",
            placeholder: "\u0421\u0443\u043C\u043C\u0430 \u0438\u0441\u043A\u0430"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, _this), errors.amount && touched.amount ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "text-danger",
            children: errors.amount
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 17
          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "text-danger"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 17
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "dropfiles",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_dropzone__WEBPACK_IMPORTED_MODULE_9__.default, {
              onDrop: handleDrop,
              children: function children(_ref2) {
                var getRootProps = _ref2.getRootProps,
                    getInputProps = _ref2.getInputProps;
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", _objectSpread(_objectSpread({}, getRootProps({
                  className: "dropzone"
                })), {}, {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread({}, getInputProps()), void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 91,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                    children: "\u041F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0444\u0430\u0439\u043B\u044B \u0438\u043B\u0438 \u0449\u0435\u043B\u043A\u043D\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u0444\u0430\u0439\u043B\u044B"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 92,
                    columnNumber: 21
                  }, _this)]
                }), void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 19
                }, _this);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
                children: "\u0424\u0430\u0439\u043B\u044B:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                children: fileNames.map(function (fileName) {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: fileName
                  }, fileName, false, {
                    fileName: _jsxFileName,
                    lineNumber: 100,
                    columnNumber: 21
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "firststep_banner",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "firststep_banner--img",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                className: "secondstep",
                src: "/img/form/secondstep.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "firststep_banner--button",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", (_jsxDEV2 = {
                className: "singlebtn",
                type: "submit"
              }, (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_jsxDEV2, "className", "button"), (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_jsxDEV2, "value", "\u0414\u0430\u043B\u0435\u0435"), _jsxDEV2), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                children: ["\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 115,
                  columnNumber: 39
                }, _this), "\u043F\u043E\u0442\u043E\u043C \u043E\u043F\u043B\u0430\u0442\u0430"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, _this);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 5
  }, _this);
};

_s(SecondStep, "MC0dx5XPyF5djP9HbVIHbcND+hU=");

_c = SecondStep;
/* harmony default export */ __webpack_exports__["default"] = (SecondStep);

var _c;

$RefreshReg$(_c, "SecondStep");

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


/***/ }),

/***/ "./defaults/validations.js":
/*!*********************************!*\
  !*** ./defaults/validations.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "emailValid": function() { return /* binding */ emailValid; },
/* harmony export */   "required": function() { return /* binding */ required; },
/* harmony export */   "phoneCheck": function() { return /* binding */ phoneCheck; },
/* harmony export */   "phoneValidation": function() { return /* binding */ phoneValidation; },
/* harmony export */   "passwordValid": function() { return /* binding */ passwordValid; },
/* harmony export */   "acceptCirrilic": function() { return /* binding */ acceptCirrilic; },
/* harmony export */   "iinValidation": function() { return /* binding */ iinValidation; },
/* harmony export */   "acceptCirrilicOnly": function() { return /* binding */ acceptCirrilicOnly; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var emailValid = function emailValid(val) {
  var value = val.split(' ').join('');
  var error;

  if (!value) {
    error = 'Поле Email обязательно для заполнения';
  }

  if (value) {
    var emailvalid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);

    if (!emailvalid) {
      error = 'Неправильный email';
    }
  }

  return error;
};
var required = function required(val) {
  var error;

  if (!val) {
    error = 'Поле обязательно для заполнения';
  }

  return error;
};
var phoneCheck = function phoneCheck(val) {
  var PHONE_OPERATORS = [{
    id: '7700'
  }, {
    id: '7701'
  }, {
    id: '7702'
  }, {
    id: '7705'
  }, {
    id: '7706'
  }, {
    id: '7707'
  }, {
    id: '7708'
  }, {
    id: '7747'
  }, {
    id: '7771'
  }, {
    id: '7775'
  }, {
    id: '7776'
  }, {
    id: '7777'
  }, {
    id: '7778'
  }];
  var phone = String(val).replace(/[^A-Z0-9]/g, ''),
      code = phone.match(/^(\d{4})(\d{3})(\d{4})$/);

  if (!code || phone.length !== 11) {
    return false;
  }

  var phone_number = code[1];
  var phone_operator = PHONE_OPERATORS.filter(function (item) {
    return item.id == phone_number;
  });

  if (phone_operator.length > 0) {
    return true;
  } else {
    return false;
  }
};
var phoneValidation = function phoneValidation(val) {
  var phoneval = val.replace(/ /g, "");
  var error;

  if (phoneval.length === 16 && phoneCheck(val) === true) {
    error = '';
  }

  if (phoneval.length !== 16) {
    error = 'Неправильный телефон номер';
  }

  if (phoneval.length === 16 && phoneCheck(val) === false) {
    error = 'Нет соответствующего оператора';
  }

  return error;
};
var passwordValid = function passwordValid(val) {
  var error;

  if (!val) {
    error = 'Поле обязательно для заполнения';
  }

  if (val && val.length < 6) {
    error = 'минимальная длина пароля должна быть не менее 6 символов';
  }

  return error;
};

var checkStringName = function checkStringName(val) {
  if (val && val.replace(/\s+$/, '').split(/\W+/).length < 2) {
    return false;
  } else {
    return true;
  }
};

var acceptCirrilic = function acceptCirrilic(val) {
  var falsy = /[a-zA-Z0-9_"*/]/i.test(val);
  var error = '';
  var length = val.replace(/\s+$/, '').split(/\W+/).length;

  if (!val) {
    error = 'Поле обязательно для заполнения';
  }

  if (val) {
    if (falsy === true) {
      error = length + "".concat(falsy);
    }

    if (falsy === false && length > 2) {
      error = 'check error';
    }
  }

  return error;
};
var iinValidation = function iinValidation(val) {
  var error = '';
  var b1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  var b2 = [3, 4, 5, 6, 7, 8, 9, 10, 11, 1, 2];
  var a = [];
  var value = val ? val.replace(/ /g, "") : '';
  var controll = 0;

  if (!value) {
    error = 'Поле обязательно для заполнения';
  }

  if (value && value.length !== 12) {
    error = 'Неправильный ИИН';
  }

  if (value && value.length === 12) {
    for (var i = 0; i < 12; i++) {
      a[i] = parseInt(value.substring(i, i + 1));
      if (i < 11) controll += a[i] * b1[i];
    }

    controll = controll % 11;

    if (controll == 10) {
      controll = 0;

      for (var i = 0; i < 11; i++) {
        controll += a[i] * b2[i];
      }

      controll = controll % 11;
    }

    if (controll != a[11]) {
      error = 'Некорректный ИИН';
    }
  }

  return error;
};
var acceptCirrilicOnly = function acceptCirrilicOnly(val) {
  var falsy = /[a-zA-Z0-9_"*/]/i.test(val);
  var error;

  if (val) {
    if (falsy === true) {
      error = 'Нужно вводить только на кириллице';
    }
  }

  return error;
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRzZXJ2aWNlL0ZpcnN0U3RlcEp1ci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRzZXJ2aWNlL1NlY29uZFN0ZXAuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2RlZmF1bHRzL3ZhbGlkYXRpb25zLmpzIl0sIm5hbWVzIjpbIkZpcnN0U3RlcCIsInNldExvYWRpbmciLCJ1c2VUb2FzdHMiLCJhZGRUb2FzdCIsInVzZVN0YXRlIiwiZW1haWwiLCJwaG9uZSIsImZpbyIsInBhc3N3b3JkIiwidHlwZSIsInBvc2l0aW9uIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsImVycm9ycyIsInNldEVycm9ycyIsImNvZGVFcnJvciIsInNldENvZGVFcnJvciIsImJpblZhbCIsInNldEJpbiIsInZhbHVlIiwibG9hZGluZyIsIm9yZ2FuaXphdGlvbiIsInNldE9yZ2FuaXphdGlvbiIsIm1vZGFsIiwic2V0TW9kYWwiLCJjbG9zZU1vZGFsIiwiYmluQ2hhbmdlIiwiZSIsInZhbCIsInRhcmdldCIsInJlcGxhY2UiLCJ1c2VFZmZlY3QiLCJsZW5ndGgiLCJheGlvcyIsImhlYWRlcnMiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJjb250ZW50Iiwic2V0VGltZW91dCIsIm5hbWUiLCJlcnIiLCJyZXNwb25zZSIsInN0YXR1cyIsImNvZGUiLCJzZXRDb2RlIiwiZ2V0SWRlbnRpZmljYXRpb24iLCJ2YWx1ZXMiLCJ2YWxpZGFnZSIsImlpbiIsInN3YWwiLCJwcm9jZXNzIiwicGFyYW1zIiwicmVwbGFjZURhdGUiLCJzb3VyY2UiLCJzdWNjZXNzIiwibWVzc2FnZSIsImFwcGVhcmFuY2UiLCJhdXRvRGlzbWlzcyIsImZpcnN0U3RlcCIsImNvZGVWYWwiLCJjb21wYW55TmFtZSIsImNvb2tpZSIsInRva2VuIiwiaWQiLCJSb3V0ZXIiLCJmaW5hbEVyciIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJlbWFpbFZhbGlkIiwicmVxdWlyZWQiLCJwaG9uZVZhbGlkYXRpb24iLCJwYXNzd29yZFZhbGlkIiwib25DaGFuZ2UiLCJiaW4iLCJ0b3VjaGVkIiwiSWluTWFzayIsInBvc2l0aW9ucyIsInAiLCJhY2NlcHRDaXJyaWxpYyIsIlBob25lTWFzayIsIkZpcnN0UmVnIiwiU2Vjb25kU3RlcCIsImZpbGVOYW1lcyIsInNldEZpbGVOYW1lcyIsImRlc2NyaXB0aW9uIiwic3BoZXJlIiwiYW1vdW50IiwiaGFuZGxlRHJvcCIsImFjY2VwdGVkRmlsZXMiLCJtYXAiLCJmaWxlIiwic3RlcFNlY29uZCIsImZpenNlcnZpY2UiLCJmaXoiLCJpbmRleCIsImdldFJvb3RQcm9wcyIsImdldElucHV0UHJvcHMiLCJjbGFzc05hbWUiLCJmaWxlTmFtZSIsInNwbGl0Iiwiam9pbiIsImVycm9yIiwiZW1haWx2YWxpZCIsInRlc3QiLCJwaG9uZUNoZWNrIiwiUEhPTkVfT1BFUkFUT1JTIiwiU3RyaW5nIiwibWF0Y2giLCJwaG9uZV9udW1iZXIiLCJwaG9uZV9vcGVyYXRvciIsImZpbHRlciIsIml0ZW0iLCJwaG9uZXZhbCIsImNoZWNrU3RyaW5nTmFtZSIsImZhbHN5IiwiaWluVmFsaWRhdGlvbiIsImIxIiwiYjIiLCJhIiwiY29udHJvbGwiLCJpIiwicGFyc2VJbnQiLCJzdWJzdHJpbmciLCJhY2NlcHRDaXJyaWxpY09ubHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFrQjtBQUFBOztBQUFBLE1BQWhCQyxVQUFnQixRQUFoQkEsVUFBZ0I7O0FBQUEs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UUFBSUEsUUFBUSxJQUFJRCxDQUFDLENBQUMsRUFBRCxDQUFqQixFQUF1QjtBQUNyQmpCLFdBQUssR0FBRyxrQkFBUjtBQUNEO0FBQ0Y7O0FBRUQsU0FBT0EsS0FBUDtBQUVELENBNURNO0FBOERBLElBQU1zQixrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUFsRyxHQUFHLEVBQUk7QUFDdkMsTUFBSXlGLEtBQUssR0FBRyxtQkFBbUJYLElBQW5CLENBQXdCOUUsR0FBeEIsQ0FBWjtBQUNBLE1BQUk0RSxLQUFKOztBQUNBLE1BQUk1RSxHQUFKLEVBQVM7QUFDUCxRQUFJeUYsS0FBSyxLQUFLLElBQWQsRUFBb0I7QUFDbEJiLFdBQUssR0FBRyxtQ0FBUjtBQUNEO0FBQ0Y7O0FBQ0QsU0FBT0EsS0FBUDtBQUNELENBVE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvanVyc2VydmljZS42NmU3YmJhNzkxY2M1MDY5N2Y2Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29uc3QgRmlyc3RTdGVwID0gKCkgPT4geyAgIHJldHVybiggICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtX3JlZ2lzdGVyJz5cclxuLy8gPGZvcm0+ICAgICAgICAgPGlucHV0IHR5cGU9J251bWJlcicgbmFtZT0nYmluJyBwbGFjZWhvbGRlcj0n0JHQmNCdJyAvPlxyXG4vLyA8aW5wdXQgdHlwZT0ndGV4dCcgZGlzYWJsZWQgbmFtZT0nb3JnYW5pemF0aW9uJyBwbGFjZWhvbGRlcj0nJyAvPlxyXG4vLyA8aW5wdXQgdHlwZT0ndGV4dCcgbmFtZT0ncG9zaXRpb24nIHBsYWNlaG9sZGVyPSfQl9Cw0L3QuNC80LDQtdC80LDRjyDQtNC+0LvQttC90L7RgdGC0YwnIC8+XHJcbi8vICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBuYW1lPSdmaW8nIHBsYWNlaG9sZGVyPSfQpNCw0LzQuNC70LjRjyDQmNC80Y8nIC8+ICAgICAgICAgPGlucHV0XHJcbi8vIHR5cGU9J3RleHQnIG5hbWU9J3Bob25lJyBwbGFjZWhvbGRlcj0n0KLQtdC70LXRhNC+0L0nIC8+ICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnXHJcbi8vIG5hbWU9J2VtYWlsJyBwbGFjZWhvbGRlcj0nRW1haWwnIC8+ICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0nc2luZ2xlYnRuJ1xyXG4vLyB0eXBlPSdidXR0b24nIGNsYXNzTmFtZT0nYnV0dG9uJyB2YWx1ZT0n0J7RgtC/0YDQsNCy0LjRgtGMJyAvPiAgICAgICA8L2Zvcm0+XHJcbi8vIDwvZGl2PiAgICkgfSBleHBvcnQgZGVmYXVsdCBGaXJzdFN0ZXBcclxuXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENvZGVNb2RhbCBmcm9tICcuLi9zaGFyZWQvQ29kZU1vZGFsJ1xyXG5pbXBvcnQge3JlcGxhY2VEYXRlfSBmcm9tICcuLi8uLi9kZWZhdWx0cy9leHRyYUZ1bmN0aW9uJ1xyXG5pbXBvcnQge3Bvc2l0aW9uc30gZnJvbSAnLi4vLi4vZGVmYXVsdHMvcG9zaXRpb25zJ1xyXG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSdcclxuaW1wb3J0IHtUb2FzdFByb3ZpZGVyLCB1c2VUb2FzdHN9IGZyb20gJ3JlYWN0LXRvYXN0LW5vdGlmaWNhdGlvbnMnXHJcbmltcG9ydCB7Rm9ybWlrLCBGb3JtLCBGaWVsZH0gZnJvbSAnZm9ybWlrJztcclxuaW1wb3J0IHtcclxuICBlbWFpbFZhbGlkLFxyXG4gIHJlcXVpcmVkLFxyXG4gIHBob25lVmFsaWRhdGlvbixcclxuICBwYXNzd29yZFZhbGlkLFxyXG4gIGFjY2VwdENpcnJpbGljLFxyXG4gIHBob25lQ2hlY2ssXHJcbiAgaWluVmFsaWRhdGlvblxyXG59IGZyb20gJy4uLy4uL2RlZmF1bHRzL3ZhbGlkYXRpb25zJ1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL2xvYWRlci9Mb2FkZXInXHJcbmltcG9ydCB7dmFsaWRhZ2V9IGZyb20gJy4uLy4uL2RlZmF1bHRzL2lpblZhbGlkQWdlJ1xyXG5pbXBvcnQgc3dhbCBmcm9tICdzd2VldGFsZXJ0J1xyXG5pbXBvcnQgTG9hZGVyVGV4dCBmcm9tICcuLi9zaGFyZWQvTG9hZGVyVGV4dCdcclxuaW1wb3J0IFBob25lTWFzayBmcm9tICcuLi9NYXNrcy9QaG9uZU1hc2snXHJcbmltcG9ydCBJaW5NYXNrIGZyb20gJy4uL01hc2tzL0lpbk1hc2snXHJcblxyXG5jb25zdCBGaXJzdFN0ZXAgPSAoe3NldExvYWRpbmd9KSA9PiB7XHJcbiAgY29uc3Qge2FkZFRvYXN0fSA9IHVzZVRvYXN0cygpXHJcbiAgY29uc3QgW2Zvcm1EYXRhLFxyXG4gICAgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgZW1haWw6ICcnLFxyXG4gICAgcGhvbmU6ICcnLFxyXG4gICAgZmlvOiAnJyxcclxuICAgIHBhc3N3b3JkOiAnJyxcclxuICAgIHR5cGU6ICfQrtGAINC70LjRhtC+JyxcclxuICAgIHBvc2l0aW9uOiAnMSdcclxuICB9KVxyXG4gIGNvbnN0IFtlcnJvcnMsXHJcbiAgICBzZXRFcnJvcnNdID0gdXNlU3RhdGUoe2VtYWlsOiAnJywgcGhvbmU6ICcnLCBmaW86ICcnLCBwYXNzd29yZDogJyd9KVxyXG4gIGNvbnN0IFtjb2RlRXJyb3IsXHJcbiAgICBzZXRDb2RlRXJyb3JdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW2JpblZhbCxcclxuICAgIHNldEJpbl0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbb3JnYW5pemF0aW9uLFxyXG4gICAgc2V0T3JnYW5pemF0aW9uXSA9IHVzZVN0YXRlKHt2YWx1ZTogJycsIHR5cGU6IGZhbHNlLCBsb2FkaW5nOiBmYWxzZX0pXHJcbiAgY29uc3QgW21vZGFsLFxyXG4gICAgc2V0TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRNb2RhbChmYWxzZSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGJpbkNoYW5nZSA9IGUgPT4ge1xyXG4gICAgY29uc3QgdmFsID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICBjb25zdCB2YWx1ZSA9IHZhbFxyXG4gICAgICA/IHZhbC5yZXBsYWNlKC8gL2csIFwiXCIpXHJcbiAgICAgIDogJydcclxuICAgIHNldEJpbihlLnRhcmdldC52YWx1ZSlcclxuICAgIC8vIGlmKHZhbHVlLmxlbmd0aCA9PT0gMTIpIHtcclxuICAgIC8vIGF4aW9zLmdldChgaHR0cHM6Ly9hcGkubW9uZXktbWVuLmt6L2FwaS90ZXN0S29tcHJhP2Jpbj0ke3ZhbHVlfWApXHJcbiAgICAvLyAudGhlbihyZXM9PiB7ICAgICAgIHNldE9yZ2FuaXphdGlvbihyZXMuZGF0YS5jb250ZW50WzBdLm5hbWUpICAgICB9KSB9XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdmFsdWUgPSBiaW5WYWxcclxuICAgICAgPyBiaW5WYWwucmVwbGFjZSgvIC9nLCBcIlwiKVxyXG4gICAgICA6ICcnXHJcbiAgICBpZiAodmFsdWUubGVuZ3RoID09PSAxMikge1xyXG4gICAgICBzZXRPcmdhbml6YXRpb24oe1xyXG4gICAgICAgIC4uLm9yZ2FuaXphdGlvbixcclxuICAgICAgICB0eXBlOiB0cnVlLFxyXG4gICAgICAgIHZhbHVlOiAn0JfQsNCz0YDRg9C30LrQsC4uLicsXHJcbiAgICAgICAgbG9hZGluZzogdHJ1ZVxyXG4gICAgICB9KVxyXG4gICAgICBheGlvc1xyXG4gICAgICAgIC5nZXQoYGh0dHBzOi8vYXBpLm1vbmV5LW1lbi5rei9hcGkvdGVzdEtvbXByYT9iaW49JHt2YWx1ZX1gLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgaWYgKHJlcy5kYXRhLmNvbnRlbnQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldE9yZ2FuaXphdGlvbih7dmFsdWU6ICfQn9C+0LbQsNC70YPQudGB0YLQsCDQstCy0LXQtNC40YLQtSDQv9GA0LDQstC40LvRjNC90YvQuSDQkdCY0J0nLCB0eXBlOiBmYWxzZSwgbG9hZGluZzogZmFsc2V9KVxyXG4gICAgICAgICAgICB9LCAxMDAwKVxyXG5cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldE9yZ2FuaXphdGlvbih7dmFsdWU6IHJlcy5kYXRhLmNvbnRlbnRbMF0ubmFtZSwgdHlwZTogdHJ1ZSwgbG9hZGluZzogZmFsc2V9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgICBpZiAoZXJyLnJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZS5zdGF0dXMpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzZXRPcmdhbml6YXRpb24oe3ZhbHVlOiAn0J/QvtC20LDQu9GD0LnRgdGC0LAg0LLQstC10LTQuNGC0LUg0L/RgNCw0LLQuNC70YzQvdGL0Lkg0JHQmNCdJywgdHlwZTogZmFsc2UsIGxvYWRpbmc6IGZhbHNlfSlcclxuICAgICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0T3JnYW5pemF0aW9uKHt2YWx1ZTogJycsIHR5cGU6IGZhbHNlLCBsb2FkaW5nOiBmYWxzZX0pXHJcbiAgICB9XHJcbiAgfSwgW2JpblZhbF0pXHJcbiAgY29uc3QgW2NvZGUsXHJcbiAgICBzZXRDb2RlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBnZXRJZGVudGlmaWNhdGlvbiA9ICh2YWx1ZXMpID0+IHtcclxuICAgIGlmICghdmFsaWRhZ2UodmFsdWVzLmlpbikpIHtcclxuICAgICAgc3dhbChcIk9vcHMhXCIsIGDQmNC30LLQuNC90LjRgtC1LCDRg9GB0LvRg9Cz0LAg0L7RgdGD0YnQtdGB0YLQstC70Y/QtdGC0YHRjyDQu9C40YbQsNC8INC00L7RgdGC0LjQs9GI0LjQtSAxOCDQu9C10YIuYCwgXCJpbmZvXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgICAgc2V0Rm9ybURhdGEodmFsdWVzKVxyXG4gICAgICBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L2lkZW50aWZpY2F0aW9uYCwge1xyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgZmlvOiB2YWx1ZXMuZmlvLFxyXG4gICAgICAgICAgcGhvbmU6IHJlcGxhY2VEYXRlKHZhbHVlcy5waG9uZSksXHJcbiAgICAgICAgICBlbWFpbDogdmFsdWVzLmVtYWlsLFxyXG4gICAgICAgICAgcGFzc3dvcmQ6IHZhbHVlcy5wYXNzd29yZCxcclxuICAgICAgICAgIHR5cGU6IHZhbHVlcy50eXBlLFxyXG4gICAgICAgICAgc291cmNlOiAnbmFzaGNvbXBhbnkua3onXHJcbiAgICAgICAgfVxyXG4gICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgc2V0Rm9ybURhdGEoKVxyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgIGlmIChyZXMuZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICBzZXRNb2RhbCh0cnVlKVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFyZXMuZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICBhZGRUb2FzdChyZXMuZGF0YS5tZXNzYWdlLCB7XHJcbiAgICAgICAgICAgIGFwcGVhcmFuY2U6ICdlcnJvcicsXHJcbiAgICAgICAgICAgIGF1dG9EaXNtaXNzOiB0cnVlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgIGlmIChlcnIucmVzcG9uc2UpIHtcclxuICAgICAgICAgIGFkZFRvYXN0KGVyci5yZXNwb25zZS5zdGF0dXMsIHtcclxuICAgICAgICAgICAgYXBwZWFyYW5jZTogJ2Vycm9yJyxcclxuICAgICAgICAgICAgYXV0b0Rpc21pc3M6IHRydWVcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGNvbnN0IGZpcnN0U3RlcCA9IChjb2RlVmFsKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L3N0ZXBPbmVgLCB7XHJcbiAgICAgIHBhcmFtczoge1xyXG4gICAgICAgIGZpbzogZm9ybURhdGEuZmlvLFxyXG4gICAgICAgIHBob25lOiByZXBsYWNlRGF0ZShmb3JtRGF0YS5waG9uZSksXHJcbiAgICAgICAgZW1haWw6IGZvcm1EYXRhLmVtYWlsLFxyXG4gICAgICAgIHBhc3N3b3JkOiBmb3JtRGF0YS5wYXNzd29yZCxcclxuICAgICAgICB0eXBlOiBmb3JtRGF0YS50eXBlLFxyXG4gICAgICAgIGNvZGU6IGNvZGVWYWwsXHJcbiAgICAgICAgaWluOiBmb3JtRGF0YS5paW4sXHJcbiAgICAgICAgY29tcGFueU5hbWU6IG9yZ2FuaXphdGlvbixcclxuICAgICAgICBzb3VyY2U6IGNvb2tpZS5nZXQoJ3V0bV9zb3VyY2UnKSArICdfMScgfHwgJ25hc2hjb21wYW55Lmt6J1xyXG4gICAgICB9XHJcbiAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICBjb29raWUuc2V0KCd0b2tlbicsIHJlcy5kYXRhLnRva2VuKVxyXG4gICAgICAgIGNvb2tpZS5zZXQoJ2xlYWRfaWQnLCByZXMuZGF0YS5pZClcclxuICAgICAgICBjb29raWUuc2V0KCdzdGVwJywgMilcclxuICAgICAgICBSb3V0ZXIucHVzaCgnL2p1cnNlcnZpY2U/c3RlcD0yJylcclxuICAgICAgfVxyXG4gICAgICBpZiAoIXJlcy5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICBzZXRDb2RlRXJyb3IocmVzLmRhdGEubWVzc2FnZSlcclxuICAgICAgICBhZGRUb2FzdChmaW5hbEVyciwge1xyXG4gICAgICAgICAgYXBwZWFyYW5jZTogJ2Vycm9yJyxcclxuICAgICAgICAgIGF1dG9EaXNtaXNzOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgc2V0RXJyb3JzKHtcclxuICAgICAgLi4uZXJyb3JzLFxyXG4gICAgICBlbWFpbDogZW1haWxWYWxpZChmb3JtRGF0YS5lbWFpbCksXHJcbiAgICAgIGZpbzogcmVxdWlyZWQoZm9ybURhdGEuZmlvKSxcclxuICAgICAgcGhvbmU6IHBob25lVmFsaWRhdGlvbihmb3JtRGF0YS5waG9uZSksXHJcbiAgICAgIHBhc3N3b3JkOiBwYXNzd29yZFZhbGlkKGZvcm1EYXRhLnBhc3N3b3JkKVxyXG4gICAgfSlcclxuXHJcbiAgICBnZXRJZGVudGlmaWNhdGlvbigpXHJcbiAgfVxyXG5cclxuICBjb25zdCBvbkNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBuYW1lID0gZS50YXJnZXQubmFtZTtcclxuICAgIHNldEZvcm1EYXRhKHtcclxuICAgICAgLi4uZm9ybURhdGEsXHJcbiAgICAgIFtuYW1lXTogZS50YXJnZXQudmFsdWVcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm1fcmVnaXN0ZXInPlxyXG4gICAgICAgIDxGb3JtaWtcclxuICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcclxuICAgICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICAgIGJpbjogJycsXHJcbiAgICAgICAgICBwb3NpdGlvbjogJzEnLFxyXG4gICAgICAgICAgcGhvbmU6ICcnLFxyXG4gICAgICAgICAgZmlvOiAnJyxcclxuICAgICAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgICAgIHR5cGU6ICfQrtGAINC70LjRhtC+JyxcclxuICAgICAgICAgIGlpbjogJydcclxuICAgICAgICB9fVxyXG4gICAgICAgICAgb25TdWJtaXQ9eyh2YWx1ZXMpID0+IHtcclxuICAgICAgICAgIGdldElkZW50aWZpY2F0aW9uKHZhbHVlcylcclxuICAgICAgICB9fT5cclxuICAgICAgICAgIHsoe2Vycm9ycywgdG91Y2hlZH0pID0+IChcclxuICAgICAgICAgICAgPEZvcm0+XHJcblxyXG4gICAgICAgICAgICAgIDxGaWVsZCBuYW1lPSdpaW4nIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJyBwbGFjZWhvbGRlcj0n0JHQmNCdJyB0eXBlPSd0ZWwnIGNvbXBvbmVudD17SWluTWFza30gb25DaGFuZ2U9e2UgPT4gYmluQ2hhbmdlKGUpfSB2YWx1ZT17YmluVmFsfSAgLz4gXHJcbiAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17KG9yZ2FuaXphdGlvbi50eXBlID09PSBmYWxzZSAmJiBvcmdhbml6YXRpb24udmFsdWUpICYmICdkaXNhYmxlZF9lcnJvcid9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17b3JnYW5pemF0aW9uLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgbmFtZT0nY29tcGFueU5hbWUnXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0n0J3QsNC30LLQsNC90LjQtSDQntGA0LPQsNC90LjQt9Cw0YbQuNC4Jy8+IHsvKiA8aW5wdXQgdHlwZT0ndGV4dCcgY2xhc3NOYW1lPXsob3JnYW5pemF0aW9uLnR5cGUgPT09IGZhbHNlICYmIG9yZ2FuaXphdGlvbi52YWx1ZSkgJiYgJ2Rpc2FibGVkX2Vycm9yJ30gdmFsdWU9e29yZ2FuaXphdGlvbi52YWx1ZX0gZGlzYWJsZWQgbmFtZT0nb3JnYW5pemF0aW9uJyBwbGFjZWhvbGRlcj0n0J3QsNC30LLQsNC90LjQtSDQntGA0LPQsNC90LjQt9Cw0YbQuNC4JyAvPiAqL31cclxuICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgIGFzPSdzZWxlY3QnXHJcbiAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgbmFtZT0ncG9zaXRpb24nXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZT17cmVxdWlyZWR9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0n0JfQsNC90LjQvNCw0LXQvNCw0Y8g0LTQvtC70LbQvdC+0YHRgtGMJ1xyXG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPSdvZmYnPntwb3NpdGlvbnMubWFwKHAgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtwLnZhbHVlfT57cC5uYW1lfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgKSl9PC9GaWVsZD5cclxuICAgICAgICAgICAgICB7KGVycm9ycy5wb3NpdGlvbiAmJiB0b3VjaGVkLnBvc2l0aW9uKVxyXG4gICAgICAgICAgICAgICAgPyA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz57ZXJyb3JzLnBvc2l0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgIDogPHAgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+PC9wPn1cclxuXHJcbiAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgbmFtZT0nZmlvJ1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU9e2FjY2VwdENpcnJpbGljfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J9Ck0JjQnidcclxuICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT0nb2ZmJy8+IHsoZXJyb3JzLmZpbyAmJiB0b3VjaGVkLmZpbylcclxuICAgICAgICAgICAgICAgID8gPHAgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+e2Vycm9ycy5maW99PC9wPlxyXG4gICAgICAgICAgICAgICAgOiA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz48L3A+fVxyXG5cclxuICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgIG5hbWU9J3Bob25lJ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0n0KLQtdC70LXRhNC+0L0g0L3QvtC80LXRgCdcclxuICAgICAgICAgICAgICAgIHR5cGU9J3RlbCdcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlPXtwaG9uZVZhbGlkYXRpb259XHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1Bob25lTWFza30+PC9GaWVsZD5cclxuICAgICAgICAgICAgICB7KGVycm9ycy5waG9uZSAmJiB0b3VjaGVkLnBob25lKVxyXG4gICAgICAgICAgICAgICAgPyA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz57ZXJyb3JzLnBob25lfTwvcD5cclxuICAgICAgICAgICAgICAgIDogPHAgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+PC9wPn1cclxuXHJcbiAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgbmFtZT0nZW1haWwnXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZT17ZW1haWxWYWxpZH1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbWFpbCdcclxuICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT0nb2ZmJy8+IHsoZXJyb3JzLmVtYWlsICYmIHRvdWNoZWQuZW1haWwpXHJcbiAgICAgICAgICAgICAgICA/IDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPntlcnJvcnMuZW1haWx9PC9wPlxyXG4gICAgICAgICAgICAgICAgOiA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz48L3A+fVxyXG5cclxuICAgICAgICAgICAgICB7LyogPEZpZWxkXHJcbiAgICAgICAgICAgICAgICB0eXBlPSdwYXNzd29yZCdcclxuICAgICAgICAgICAgICAgIG5hbWU9J3Bhc3N3b3JkJ1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU9e3Bhc3N3b3JkVmFsaWR9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0n0J/RgNC40LTRg9C80LDQudGC0LUg0L/QsNGA0L7Qu9GMJ1xyXG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPSdvZmYnLz5cclxuICAgICAgICAgICAgICAgICB7KGVycm9ycy5wYXNzd29yZCAmJiB0b3VjaGVkLnBhc3N3b3JkKSA/IDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPntlcnJvcnMucGFzc3dvcmR9PC9wPiA6ICA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz48L3A+fSAqL31cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpcnN0c3RlcF9iYW5uZXInPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpcnN0c3RlcF9iYW5uZXItLWltZyc+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdmaXJzdHN0ZXAnIHNyYz0nL2ltZy9mb3JtL2ZpcnN0c3RlcC5zdmcnLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpcnN0c3RlcF9iYW5uZXItLWJ1dHRvbic+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2luZ2xlYnRuJ1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2J1dHRvbidcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT0n0KXQvtGH0YMg0YHQutC40LTQutC4Jy8+XHJcbiAgICAgICAgICAgICAgICAgIDxiPtCh0LvQtdC00YPRjtGJ0LjQuSDRiNCw0LM8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICDQtNCw0YHRgiA1MCUg0YHQutC40LTQutC4PC9iPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvRm9ybWlrPlxyXG4gICAgICAgIDxDb2RlTW9kYWxcclxuICAgICAgICAgIGlzTW9kYWxPcGVuPXttb2RhbH1cclxuICAgICAgICAgIGNsb3NlTW9kYWw9e2Nsb3NlTW9kYWx9XHJcbiAgICAgICAgICBjb2RlPXtjb2RlfVxyXG4gICAgICAgICAgc2V0Q29kZT17c2V0Q29kZX1cclxuICAgICAgICAgIG9uRmlyc3RTdGVwPXtmaXJzdFN0ZXB9XHJcbiAgICAgICAgICBlcnJvcj17Y29kZUVycm9yfVxyXG4gICAgICAgICAgZ2V0SWRlbnRpZmljYXRpb249e2dldElkZW50aWZpY2F0aW9ufS8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgRmlyc3RSZWcgPSAoe3NldExvYWRpbmd9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxUb2FzdFByb3ZpZGVyPlxyXG4gICAgICA8Rmlyc3RTdGVwIHNldExvYWRpbmc9e3NldExvYWRpbmd9Lz5cclxuICAgIDwvVG9hc3RQcm92aWRlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpcnN0UmVnIiwiaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHtmaXpzZXJ2aWNlfSBmcm9tIFwiLi4vLi4vZGVmYXVsdHMvZml6c2VydmljZVwiXHJcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQge0Zvcm1paywgRm9ybSwgRmllbGR9IGZyb20gJ2Zvcm1payc7XHJcbmltcG9ydCB7cmVxdWlyZWR9IGZyb20gXCIuLi8uLi9kZWZhdWx0cy92YWxpZGF0aW9uc1wiXHJcbmltcG9ydCBEcm9wem9uZSBmcm9tIFwicmVhY3QtZHJvcHpvbmVcIjtcclxuXHJcbmNvbnN0IFNlY29uZFN0ZXAgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2ZpbGVOYW1lcyxcclxuICAgIHNldEZpbGVOYW1lc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2Zvcm1EYXRhLFxyXG4gICAgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgaWQ6IGNvb2tpZS5nZXQoJ2xlYWRfaWQnKSxcclxuICAgIHRva2VuOiBjb29raWUuZ2V0KCd0b2tlbicpLFxyXG4gICAgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgc3BoZXJlOiAnMScsXHJcbiAgICBhbW91bnQ6ICcnXHJcbiAgfSlcclxuICBjb25zdCBvbkNoYW5nZSA9IGUgPT4ge1xyXG4gICAgY29uc3QgbmFtZSA9IGUudGFyZ2V0Lm5hbWVcclxuICAgIHNldEZvcm1EYXRhKHtcclxuICAgICAgLi4uZm9ybURhdGEsXHJcbiAgICAgIFtuYW1lXTogZS50YXJnZXQudmFsdWVcclxuICAgIH0pXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZURyb3AgPSBhY2NlcHRlZEZpbGVzID0+IHNldEZpbGVOYW1lcyhhY2NlcHRlZEZpbGVzLm1hcChmaWxlID0+IGZpbGUubmFtZSkpO1xyXG5cclxuICBjb25zdCBzdGVwU2Vjb25kID0gKHZhbHVlcykgPT4ge1xyXG5cclxuXHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9zdGVwVHdvYCwge1xyXG4gICAgICBwYXJhbXM6IHtcclxuICAgICAgICBpZDogdmFsdWVzLmlkLFxyXG4gICAgICAgIHRva2VuOiB2YWx1ZXMudG9rZW4sXHJcbiAgICAgICAgZGVzY3JpcHRpb246IHZhbHVlcy5kZXNjcmlwdGlvbixcclxuICAgICAgICBzcGhlcmU6IHZhbHVlcy5zcGhlcmUsXHJcbiAgICAgICAgYW1vdW50OiB2YWx1ZXMuYW1vdW50XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgIGlmIChyZXMuZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaCgnL2dldHNlcnZpY2U/c3RlcD0zJylcclxuICAgICAgICAgIGNvb2tpZS5zZXQoJ3N0ZXAnLCAzKVxyXG4gICAgICAgICAgY29va2llLnNldCgnYW1vdW50JywgZm9ybURhdGEuYW1vdW50KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXJlcy5kYXRhLnN1Y2Nlc3MpIHt9XHJcbiAgICAgIH0pXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybV9yZWdpc3Rlcic+XHJcbiAgICAgIDxGb3JtaWtcclxuICAgICAgICBpbml0aWFsVmFsdWVzPXt7XHJcbiAgICAgICAgaWQ6IGNvb2tpZS5nZXQoJ2xlYWRfaWQnKSxcclxuICAgICAgICB0b2tlbjogY29va2llLmdldCgndG9rZW4nKSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJycsXHJcbiAgICAgICAgc3BoZXJlOiAnMScsXHJcbiAgICAgICAgYW1vdW50OiAnJ1xyXG4gICAgICB9fVxyXG4gICAgICAgIG9uU3VibWl0PVxyXG4gICAgICAgIHsodmFsdWVzKSA9PiB7c3RlcFNlY29uZCh2YWx1ZXMpfX0+XHJcbiAgICAgICAgeyh7ZXJyb3JzLCB0b3VjaGVkfSkgPT4gKFxyXG4gICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgIDxGaWVsZCBhcz0nc2VsZWN0JyB2YWxpZGF0ZT17cmVxdWlyZWR9IG5hbWU9J3NwaGVyZScgY2xhc3NOYW1lPSdmb3JtX3NlbGVjdCc+XHJcbiAgICAgICAgICAgICAge2ZpenNlcnZpY2UubWFwKChmaXosIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIGRhdGEtaW1nPXtgL2ltZy91c2x1Z2kvJHtpbmRleCsxfS5zdmdgfSB2YWx1ZT17aW5kZXggKyAxfT57Zml6Lm5hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvRmllbGQ+XHJcbiAgICAgICAgICAgIHsoZXJyb3JzLnNwaGVyZSAmJiB0b3VjaGVkLnNwaGVyZSlcclxuICAgICAgICAgICAgICA/IDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPntlcnJvcnMuc3BoZXJlfTwvcD5cclxuICAgICAgICAgICAgICA6IDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPjwvcD59XHJcbiAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgIGFzPSd0ZXh0YXJlYSdcclxuICAgICAgICAgICAgICBuYW1lPSdkZXNjcmlwdGlvbidcclxuICAgICAgICAgICAgICB2YWxpZGF0ZT17cmVxdWlyZWR9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J9Ce0L/QuNGI0LjRgtC1INCy0LDRiNGDINGB0LjRgtGD0LDRhtC40Y4nPjwvRmllbGQ+XHJcbiAgICAgICAgICAgIHsoZXJyb3JzLmRlc2NyaXB0aW9uICYmIHRvdWNoZWQuZGVzY3JpcHRpb24pXHJcbiAgICAgICAgICAgICAgPyA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz57ZXJyb3JzLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICA6IDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPjwvcD59XHJcbiAgICAgICAgICAgIDxGaWVsZCB0eXBlPSdudW1iZXInIHZhbGlkYXRlPXtyZXF1aXJlZH0gbmFtZT0nYW1vdW50JyBwbGFjZWhvbGRlcj0n0KHRg9C80LzQsCDQuNGB0LrQsCc+PC9GaWVsZD5cclxuICAgICAgICAgICAgeyhlcnJvcnMuYW1vdW50ICYmIHRvdWNoZWQuYW1vdW50KVxyXG4gICAgICAgICAgICAgID8gPHAgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+e2Vycm9ycy5hbW91bnR9PC9wPlxyXG4gICAgICAgICAgICAgIDogPHAgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+PC9wPn1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Ryb3BmaWxlcyc+XHJcbiAgICAgICAgICAgICAgPERyb3B6b25lIG9uRHJvcD17aGFuZGxlRHJvcH0+XHJcbiAgICAgICAgICAgICAgICB7KHtnZXRSb290UHJvcHMsIGdldElucHV0UHJvcHN9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgey4uLmdldFJvb3RQcm9wcyh7IGNsYXNzTmFtZTogXCJkcm9wem9uZVwiIH0pfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgey4uLmdldElucHV0UHJvcHMoKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPtCf0LXRgNC10YLQsNGJ0LjRgtC1INGE0LDQudC70Ysg0LjQu9C4INGJ0LXQu9C60L3QuNGC0LUsINGH0YLQvtCx0Ysg0LLRi9Cx0YDQsNGC0Ywg0YTQsNC50LvRizwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvRHJvcHpvbmU+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+0KTQsNC50LvRizo8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAge2ZpbGVOYW1lcy5tYXAoZmlsZU5hbWUgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2ZpbGVOYW1lfT57ZmlsZU5hbWV9PC9saT5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpcnN0c3RlcF9iYW5uZXInPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpcnN0c3RlcF9iYW5uZXItLWltZyc+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdzZWNvbmRzdGVwJyBzcmM9Jy9pbWcvZm9ybS9zZWNvbmRzdGVwLnBuZycvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmlyc3RzdGVwX2Jhbm5lci0tYnV0dG9uJz5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzaW5nbGVidG4nXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYnV0dG9uJ1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPSfQlNCw0LvQtdC1Jy8+XHJcbiAgICAgICAgICAgICAgICAgIDxiPtCh0L3QsNGH0LDQu9CwINGA0LXQt9GD0LvRjNGC0LDRgjxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgINC/0L7RgtC+0Lwg0L7Qv9C70LDRgtCwPC9iPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICA8L0Zvcm1paz5cclxuICAgICAgey8qIDxmb3JtIG9uU3VibWl0PXsoZSkgPT4gc3RlcFNlY29uZChlKX0+XHJcbiAgICAgICAgPHNlbGVjdCBvbkNoYW5nZT17ZT0+IG9uQ2hhbmdlKGUpfSB2YWx1ZT17Zm9ybURhdGEuc3BoZXJlfSBuYW1lPSdzcGhlcmUnIGNsYXNzTmFtZT0nZm9ybV9zZWxlY3QnPlxyXG4gICAgICAgICAge2ZpenNlcnZpY2UubWFwKChmaXosaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17aW5kZXgrMX0+e2Zpei5uYW1lfTwvb3B0aW9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPHRleHRhcmVhIG5hbWU9J2Rlc2NyaXB0aW9uJyB2YWx1ZT17Zm9ybURhdGEuZGVzY3JpcHRpb259IG9uQ2hhbmdlPXtlPT5vbkNoYW5nZShlKX0gcGxhY2Vob2xkZXI9J9Ce0L/QuNGI0LjRgtC1INCy0LDRiNGDINGB0LjRgtGD0LDRhtC40Y4nPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9J251bWJlcicgb25DaGFuZ2U9e2U9Pm9uQ2hhbmdlKGUpfSB2YWx1ZT17Zm9ybURhdGEuYW1vdW50fSBuYW1lPSdhbW91bnQnIHBsYWNlaG9sZGVyPSfQodGD0LzQvNCwINC40YHQutCwJyAvPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPSdmaWxlJyAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtX2J1dHRvbnMnPlxyXG4gICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0ndHJhbnNwYXJlbnRidG4gYnV0dG9uJyB0eXBlPSdidXR0b24nIHZhbHVlPSfQktC10YDQvdGD0YLRjNGB0Y8g0L3QsNC30LDQtCcvPlxyXG4gICAgICAgICAgPGlucHV0ICBjbGFzc05hbWU9J2J1dHRvbicgdHlwZT0nc3VibWl0JyB2YWx1ZT0n0JTQsNC70LXQtScgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPiAqL31cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2Vjb25kU3RlcCIsImV4cG9ydCBjb25zdCBlbWFpbFZhbGlkID0gdmFsID0+IHtcclxuICBjb25zdCB2YWx1ZSA9IHZhbC5zcGxpdCgnICcpLmpvaW4oJycpO1xyXG4gIGxldCBlcnJvcjtcclxuICBpZiAoIXZhbHVlKSB7XHJcbiAgICBlcnJvciA9ICfQn9C+0LvQtSBFbWFpbCDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+INC00LvRjyDQt9Cw0L/QvtC70L3QtdC90LjRjydcclxuICB9XHJcbiAgaWYgKHZhbHVlKSB7XHJcbiAgICBsZXQgZW1haWx2YWxpZCA9IC9eW0EtWjAtOS5fJSstXStAW0EtWjAtOS4tXStcXC5bQS1aXXsyLDR9JC9pLnRlc3QodmFsdWUpO1xyXG4gICAgaWYgKCFlbWFpbHZhbGlkKSB7XHJcbiAgICAgIGVycm9yID0gJ9Cd0LXQv9GA0LDQstC40LvRjNC90YvQuSBlbWFpbCdcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGVycm9yXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZXF1aXJlZCA9IHZhbCA9PiB7XHJcbiAgbGV0IGVycm9yO1xyXG4gIGlmICghdmFsKSB7XHJcbiAgICBlcnJvciA9ICfQn9C+0LvQtSDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+INC00LvRjyDQt9Cw0L/QvtC70L3QtdC90LjRjydcclxuICB9XHJcbiAgcmV0dXJuIGVycm9yXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwaG9uZUNoZWNrID0gKHZhbCkgPT4ge1xyXG5cclxuICB2YXIgUEhPTkVfT1BFUkFUT1JTID0gW1xyXG4gICAge1xyXG4gICAgICBpZDogJzc3MDAnXHJcbiAgICB9LCB7XHJcbiAgICAgIGlkOiAnNzcwMSdcclxuICAgIH0sIHtcclxuICAgICAgaWQ6ICc3NzAyJ1xyXG4gICAgfSwge1xyXG4gICAgICBpZDogJzc3MDUnXHJcbiAgICB9LCB7XHJcbiAgICAgIGlkOiAnNzcwNidcclxuICAgIH0sIHtcclxuICAgICAgaWQ6ICc3NzA3J1xyXG4gICAgfSwge1xyXG4gICAgICBpZDogJzc3MDgnXHJcbiAgICB9LCB7XHJcbiAgICAgIGlkOiAnNzc0NydcclxuICAgIH0sIHtcclxuICAgICAgaWQ6ICc3NzcxJ1xyXG4gICAgfSwge1xyXG4gICAgICBpZDogJzc3NzUnXHJcbiAgICB9LCB7XHJcbiAgICAgIGlkOiAnNzc3NidcclxuICAgIH0sIHtcclxuICAgICAgaWQ6ICc3Nzc3J1xyXG4gICAgfSwge1xyXG4gICAgICBpZDogJzc3NzgnXHJcbiAgICB9XHJcbiAgXTtcclxuICB2YXIgcGhvbmUgPSBTdHJpbmcodmFsKS5yZXBsYWNlKC9bXkEtWjAtOV0vZywgJycpLFxyXG4gICAgY29kZSA9IHBob25lLm1hdGNoKC9eKFxcZHs0fSkoXFxkezN9KShcXGR7NH0pJC8pO1xyXG4gIGlmICghY29kZSB8fCBwaG9uZS5sZW5ndGggIT09IDExKSB7XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcblxyXG4gIHZhciBwaG9uZV9udW1iZXIgPSBjb2RlWzFdO1xyXG4gIHZhciBwaG9uZV9vcGVyYXRvciA9IFBIT05FX09QRVJBVE9SUy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgIHJldHVybiBpdGVtLmlkID09IHBob25lX251bWJlclxyXG4gIH0pO1xyXG5cclxuICBpZiAocGhvbmVfb3BlcmF0b3IubGVuZ3RoID4gMCkge1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHBob25lVmFsaWRhdGlvbiA9ICh2YWwpID0+IHtcclxuICBjb25zdCBwaG9uZXZhbCA9IHZhbC5yZXBsYWNlKC8gL2csIFwiXCIpO1xyXG5cclxuICBsZXQgZXJyb3JcclxuXHJcbiAgaWYgKHBob25ldmFsLmxlbmd0aCA9PT0gMTYgJiYgcGhvbmVDaGVjayh2YWwpID09PSB0cnVlKSB7XHJcbiAgICBlcnJvciA9ICcnXHJcbiAgfVxyXG4gIGlmIChwaG9uZXZhbC5sZW5ndGggIT09IDE2KSB7XHJcbiAgICBlcnJvciA9ICfQndC10L/RgNCw0LLQuNC70YzQvdGL0Lkg0YLQtdC70LXRhNC+0L0g0L3QvtC80LXRgCdcclxuICB9XHJcbiAgaWYgKHBob25ldmFsLmxlbmd0aCA9PT0gMTYgJiYgcGhvbmVDaGVjayh2YWwpID09PSBmYWxzZSkge1xyXG4gICAgZXJyb3IgPSAn0J3QtdGCINGB0L7QvtGC0LLQtdGC0YHRgtCy0YPRjtGJ0LXQs9C+INC+0L/QtdGA0LDRgtC+0YDQsCdcclxuICB9XHJcblxyXG4gIHJldHVybiBlcnJvclxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcGFzc3dvcmRWYWxpZCA9IHZhbCA9PiB7XHJcbiAgbGV0IGVycm9yO1xyXG4gIGlmICghdmFsKSB7XHJcbiAgICBlcnJvciA9ICfQn9C+0LvQtSDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+INC00LvRjyDQt9Cw0L/QvtC70L3QtdC90LjRjydcclxuICB9XHJcbiAgaWYgKHZhbCAmJiB2YWwubGVuZ3RoIDwgNikge1xyXG4gICAgZXJyb3IgPSAn0LzQuNC90LjQvNCw0LvRjNC90LDRjyDQtNC70LjQvdCwINC/0LDRgNC+0LvRjyDQtNC+0LvQttC90LAg0LHRi9GC0Ywg0L3QtSDQvNC10L3QtdC1IDYg0YHQuNC80LLQvtC70L7QsidcclxuICB9XHJcbiAgcmV0dXJuIGVycm9yO1xyXG59XHJcblxyXG5jb25zdCBjaGVja1N0cmluZ05hbWUgPSB2YWwgPT4ge1xyXG4gIGlmICh2YWwgJiYgdmFsLnJlcGxhY2UoL1xccyskLywgJycpLnNwbGl0KC9cXFcrLykubGVuZ3RoICA8Mikge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1lbHNlIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFjY2VwdENpcnJpbGljID0gdmFsID0+IHtcclxuICB2YXIgZmFsc3kgPSAvW2EtekEtWjAtOV9cIiovXS9pLnRlc3QodmFsKVxyXG4gIGxldCBlcnJvciA9ICcnO1xyXG4gIGxldCBsZW5ndGggPSB2YWwucmVwbGFjZSgvXFxzKyQvLCAnJykuc3BsaXQoL1xcVysvKS5sZW5ndGg7XHJcbiAgaWYgKCF2YWwpIHtcclxuICAgIGVycm9yID0gJ9Cf0L7Qu9C1INC+0LHRj9C30LDRgtC10LvRjNC90L4g0LTQu9GPINC30LDQv9C+0LvQvdC10L3QuNGPJ1xyXG4gIH1cclxuICBpZiAodmFsKSB7XHJcbiAgICBpZihmYWxzeSA9PT10cnVlKSB7XHJcbiAgICAgIGVycm9yID0gbGVuZ3RoICsgYCR7ZmFsc3l9YFxyXG4gICAgfVxyXG4gICAgaWYoZmFsc3k9PT0gZmFsc2UgJiZsZW5ndGg+Mikge1xyXG4gICAgICBlcnJvciA9ICdjaGVjayBlcnJvcidcclxuICAgIH1cclxuICAgIFxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGVycm9yO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGlpblZhbGlkYXRpb24gPSAodmFsKSA9PiB7XHJcbiAgbGV0IGVycm9yID0gJyc7XHJcbiAgdmFyIGIxID0gW1xyXG4gICAgMSxcclxuICAgIDIsXHJcbiAgICAzLFxyXG4gICAgNCxcclxuICAgIDUsXHJcbiAgICA2LFxyXG4gICAgNyxcclxuICAgIDgsXHJcbiAgICA5LFxyXG4gICAgMTAsXHJcbiAgICAxMVxyXG4gIF07XHJcbiAgdmFyIGIyID0gW1xyXG4gICAgMyxcclxuICAgIDQsXHJcbiAgICA1LFxyXG4gICAgNixcclxuICAgIDcsXHJcbiAgICA4LFxyXG4gICAgOSxcclxuICAgIDEwLFxyXG4gICAgMTEsXHJcbiAgICAxLFxyXG4gICAgMlxyXG4gIF07XHJcbiAgdmFyIGEgPSBbXTtcclxuICBjb25zdCB2YWx1ZSA9IHZhbFxyXG4gICAgPyB2YWwucmVwbGFjZSgvIC9nLCBcIlwiKVxyXG4gICAgOiAnJ1xyXG4gIHZhciBjb250cm9sbCA9IDA7XHJcbiAgaWYgKCF2YWx1ZSkge1xyXG4gICAgZXJyb3IgPSAn0J/QvtC70LUg0L7QsdGP0LfQsNGC0LXQu9GM0L3QviDQtNC70Y8g0LfQsNC/0L7Qu9C90LXQvdC40Y8nXHJcbiAgfVxyXG4gIGlmICh2YWx1ZSAmJiB2YWx1ZS5sZW5ndGggIT09IDEyKSB7XHJcbiAgICBlcnJvciA9ICfQndC10L/RgNCw0LLQuNC70YzQvdGL0Lkg0JjQmNCdJztcclxuICB9XHJcblxyXG4gIGlmICh2YWx1ZSAmJiB2YWx1ZS5sZW5ndGggPT09IDEyKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDEyOyBpKyspIHtcclxuICAgICAgYVtpXSA9IHBhcnNlSW50KHZhbHVlLnN1YnN0cmluZyhpLCBpICsgMSkpO1xyXG4gICAgICBpZiAoaSA8IDExKSBcclxuICAgICAgICBjb250cm9sbCArPSBhW2ldICogYjFbaV07XHJcbiAgICAgIH1cclxuICAgIGNvbnRyb2xsID0gY29udHJvbGwgJSAxMTtcclxuICAgIGlmIChjb250cm9sbCA9PSAxMCkge1xyXG4gICAgICBjb250cm9sbCA9IDA7XHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTE7IGkrKykgXHJcbiAgICAgICAgY29udHJvbGwgKz0gYVtpXSAqIGIyW2ldO1xyXG4gICAgICBjb250cm9sbCA9IGNvbnRyb2xsICUgMTE7XHJcbiAgICB9XHJcbiAgICBpZiAoY29udHJvbGwgIT0gYVsxMV0pIHtcclxuICAgICAgZXJyb3IgPSAn0J3QtdC60L7RgNGA0LXQutGC0L3Ri9C5INCY0JjQnSc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZXJyb3I7XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYWNjZXB0Q2lycmlsaWNPbmx5ID0gdmFsID0+IHtcclxuICB2YXIgZmFsc3kgPSAvW2EtekEtWjAtOV9cIiovXS9pLnRlc3QodmFsKVxyXG4gIGxldCBlcnJvcjtcclxuICBpZiAodmFsKSB7XHJcbiAgICBpZiAoZmFsc3kgPT09IHRydWUpIHtcclxuICAgICAgZXJyb3IgPSAn0J3Rg9C20L3QviDQstCy0L7QtNC40YLRjCDRgtC+0LvRjNC60L4g0L3QsCDQutC40YDQuNC70LvQuNGG0LUnXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBlcnJvcjtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=