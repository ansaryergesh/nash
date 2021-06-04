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

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    var form = document.querySelector('.form_register');
    console.log(form);
    form.scrollIntoView({
      block: 'center',
      behavior: 'smooth'
    });
  }, []);

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
    console.log(organization);

    if (organization.type === true && organization.value) {
      setLoading(true); // axios.get(`${process.env.BASE_URL}/stepOne`, {
      //   params: {
      //     fio: formData.fio,
      //     phone: replaceDate(formData.phone),
      //     email: formData.email,
      //     password: formData.password,
      //     type: formData.type,
      //     code: codeVal,
      //     iin: formData.iin,
      //     companyName: organization,
      //     source: cookie.get('utm_source') + '_1' || 'nashcompany.kz'
      //   }
      // }).then(res => {
      //   setLoading(false)
      //   console.log(res)
      //   if (res.data.success) {
      //     cookie.set('token', res.data.token)
      //     cookie.set('lead_id', res.data.id)
      //     cookie.set('stepjur', 2)
      //     Router.push('/jurservice?step=2')
      //   }
      //   if (!res.data.success) {
      //     setCodeError(res.data.message)
      //     addToast(finalErr, {
      //       appearance: 'error',
      //       autoDismiss: true
      //     })
      //   }
      // })
    }
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
              lineNumber: 240,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_9__.Field, {
              type: "text",
              disabled: true,
              className: organization.type === false && organization.value && 'disabled_error text-danger',
              value: organization.value,
              name: "companyName",
              placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 241,
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
                  lineNumber: 255,
                  columnNumber: 19
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 248,
              columnNumber: 15
            }, _this), errors.position && touched.position ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "text-danger",
              children: errors.position
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 258,
              columnNumber: 19
            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 259,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_9__.Field, {
              type: "text",
              name: "fio",
              validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_10__.acceptCirrilic,
              placeholder: "\u0424\u0418\u041E",
              className: "capitalize",
              autocomplete: "off"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 261,
              columnNumber: 15
            }, _this), " ", errors.fio && touched.fio ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "text-danger",
              children: errors.fio
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 268,
              columnNumber: 19
            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 269,
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
              lineNumber: 271,
              columnNumber: 15
            }, _this), errors.phone && touched.phone ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "text-danger",
              children: errors.phone
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 279,
              columnNumber: 19
            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 280,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_9__.Field, {
              type: "text",
              name: "email",
              validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_10__.emailValid,
              placeholder: "Email",
              autocomplete: "off"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 282,
              columnNumber: 15
            }, _this), " ", errors.email && touched.email ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "text-danger",
              children: errors.email
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 288,
              columnNumber: 19
            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 289,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "firststep_banner",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "firststep_banner--img",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                  alt: "image",
                  className: "firststep",
                  src: "/img/form/firststep.svg"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 301,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 300,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "firststep_banner--button",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", (_jsxDEV2 = {
                  className: "singlebtn",
                  type: "submit"
                }, (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_jsxDEV2, "className", "button"), (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_jsxDEV2, "onClick", function onClick() {
                  return (0,_defaults_extraFunction__WEBPACK_IMPORTED_MODULE_5__.handleFocus)();
                }), (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_jsxDEV2, "value", "\u0425\u043E\u0447\u0443 \u0441\u043A\u0438\u0434\u043A\u0438"), _jsxDEV2), void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 304,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                  children: ["\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0448\u0430\u0433", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 310,
                    columnNumber: 35
                  }, _this), "\u0434\u0430\u0441\u0442 50% \u0441\u043A\u0438\u0434\u043A\u0438"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 310,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 303,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 299,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 238,
            columnNumber: 13
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 223,
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
        lineNumber: 318,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 221,
    columnNumber: 5
  }, _this);
};

_s(FirstStep, "5jSALdOl35R/anc6X+PFEC+KMwM=", false, function () {
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
      lineNumber: 335,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 334,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRzZXJ2aWNlL0ZpcnN0U3RlcEp1ci5qcyJdLCJuYW1lcyI6WyJGaXJzdFN0ZXAiLCJzZXRMb2FkaW5nIiwidXNlVG9hc3RzIiwiYWRkVG9hc3QiLCJ1c2VTdGF0ZSIsImVtYWlsIiwicGhvbmUiLCJmaW8iLCJwYXNzd29yZCIsInR5cGUiLCJwb3NpdGlvbiIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJjb2RlRXJyb3IiLCJzZXRDb2RlRXJyb3IiLCJiaW5WYWwiLCJzZXRCaW4iLCJ2YWx1ZSIsImxvYWRpbmciLCJvcmdhbml6YXRpb24iLCJzZXRPcmdhbml6YXRpb24iLCJtb2RhbCIsInNldE1vZGFsIiwiY2xvc2VNb2RhbCIsInVzZUVmZmVjdCIsImZvcm0iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjb25zb2xlIiwibG9nIiwic2Nyb2xsSW50b1ZpZXciLCJibG9jayIsImJlaGF2aW9yIiwiYmluQ2hhbmdlIiwiZSIsInZhbCIsInRhcmdldCIsInJlcGxhY2UiLCJsZW5ndGgiLCJheGlvcyIsImhlYWRlcnMiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImNvbnRlbnQiLCJzZXRUaW1lb3V0IiwibmFtZSIsImVyciIsInJlc3BvbnNlIiwic3RhdHVzIiwiY29kZSIsInNldENvZGUiLCJnZXRJZGVudGlmaWNhdGlvbiIsInZhbHVlcyIsInZhbGlkYWdlIiwiaWluIiwic3dhbCIsInByb2Nlc3MiLCJwYXJhbXMiLCJyZXBsYWNlRGF0ZSIsInNvdXJjZSIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwiYXBwZWFyYW5jZSIsImF1dG9EaXNtaXNzIiwiZmlyc3RTdGVwIiwiY29kZVZhbCIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJlbWFpbFZhbGlkIiwicmVxdWlyZWQiLCJwaG9uZVZhbGlkYXRpb24iLCJwYXNzd29yZFZhbGlkIiwib25DaGFuZ2UiLCJiaW4iLCJ0b3VjaGVkIiwiSWluTWFzayIsInBvc2l0aW9ucyIsInAiLCJhY2NlcHRDaXJyaWxpYyIsIlBob25lTWFzayIsImhhbmRsZUZvY3VzIiwiRmlyc3RSZWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFrQjtBQUFBOztBQUFBLE1BQWhCQyxVQUFnQixRQUFoQkEsVUFBZ0I7O0FBQUEsbUJBQ2ZDLG9FQUFTLEVBRE07QUFBQSxNQUMzQkMsUUFEMkIsY0FDM0JBLFFBRDJCOztBQUFBLGtCQUdqQkMsK0NBQVEsQ0FBQztBQUN4QkMsU0FBSyxFQUFFLEVBRGlCO0FBRXhCQyxTQUFLLEVBQUUsRUFGaUI7QUFHeEJDLE9BQUcsRUFBRSxFQUhtQjtBQUl4QkMsWUFBUSxFQUFFLEVBSmM7QUFLeEJDLFFBQUksRUFBRSxTQUxrQjtBQU14QkMsWUFBUSxFQUFFO0FBTmMsR0FBRCxDQUhTO0FBQUEsTUFFM0JDLFFBRjJCO0FBQUEsTUFHaENDLFdBSGdDOztBQUFBLG1CQVluQlIsK0NBQVEsQ0FBQztBQUFDQyxTQUFLLEVBQUUsRUFBUjtBQUFZQyxTQUFLLEVBQUUsRUFBbkI7QUFBdUJDLE9BQUcsRUFBRSxFQUE1QjtBQUFnQ0MsWUFBUSxFQUFFO0FBQTFDLEdBQUQsQ0FaVztBQUFBLE1BVzNCSyxNQVgyQjtBQUFBLE1BWWhDQyxTQVpnQzs7QUFBQSxtQkFjaEJWLCtDQUFRLENBQUMsRUFBRCxDQWRRO0FBQUEsTUFhM0JXLFNBYjJCO0FBQUEsTUFjaENDLFlBZGdDOztBQUFBLG1CQWdCdEJaLCtDQUFRLENBQUMsRUFBRCxDQWhCYztBQUFBLE1BZTNCYSxNQWYyQjtBQUFBLE1BZ0JoQ0MsTUFoQmdDOztBQUFBLG1CQWtCYmQsK0NBQVEsQ0FBQztBQUFDZSxTQUFLLEVBQUUsRUFBUjtBQUFZVixRQUFJLEVBQUUsS0FBbEI7QUFBeUJXLFdBQU8sRUFBRTtBQUFsQyxHQUFELENBbEJLO0FBQUEsTUFpQjNCQyxZQWpCMkI7QUFBQSxNQWtCaENDLGVBbEJnQzs7QUFBQSxtQkFvQnBCbEIsK0NBQVEsQ0FBQyxLQUFELENBcEJZO0FBQUEsTUFtQjNCbUIsS0FuQjJCO0FBQUEsTUFvQmhDQyxRQXBCZ0M7O0FBc0JsQyxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3ZCRCxZQUFRLENBQUMsS0FBRCxDQUFSO0FBQ0QsR0FGRDs7QUFJQUUsa0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSUMsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZ0JBQXZCLENBQVg7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlKLElBQVo7QUFDQUEsUUFBSSxDQUFDSyxjQUFMLENBQW9CO0FBQUNDLFdBQUssRUFBRSxRQUFSO0FBQWtCQyxjQUFRLEVBQUU7QUFBNUIsS0FBcEI7QUFDRCxHQUpRLEVBSVAsRUFKTyxDQUFUOztBQU1BLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUFDLENBQUMsRUFBSTtBQUNyQixRQUFNQyxHQUFHLEdBQUdELENBQUMsQ0FBQ0UsTUFBRixDQUFTbkIsS0FBckI7QUFDQSxRQUFNQSxLQUFLLEdBQUdrQixHQUFHLEdBQ2JBLEdBQUcsQ0FBQ0UsT0FBSixDQUFZLElBQVosRUFBa0IsRUFBbEIsQ0FEYSxHQUViLEVBRko7QUFHQXJCLFVBQU0sQ0FBQ2tCLENBQUMsQ0FBQ0UsTUFBRixDQUFTbkIsS0FBVixDQUFOLENBTHFCLENBTXJCO0FBQ0E7QUFDQTtBQUNELEdBVEQ7O0FBV0FPLGtEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1QLEtBQUssR0FBR0YsTUFBTSxHQUNoQkEsTUFBTSxDQUFDc0IsT0FBUCxDQUFlLElBQWYsRUFBcUIsRUFBckIsQ0FEZ0IsR0FFaEIsRUFGSjs7QUFHQSxRQUFJcEIsS0FBSyxDQUFDcUIsTUFBTixLQUFpQixFQUFyQixFQUF5QjtBQUN2QmxCLHFCQUFlLGlDQUNWRCxZQURVO0FBRWJaLFlBQUksRUFBRSxJQUZPO0FBR2JVLGFBQUssRUFBRSxhQUhNO0FBSWJDLGVBQU8sRUFBRTtBQUpJLFNBQWY7QUFNQXFCLHNEQUFBLHVEQUNzRHRCLEtBRHRELEdBQytEO0FBQzdEdUIsZUFBTyxFQUFFO0FBQ1AseUNBQStCO0FBRHhCO0FBRG9ELE9BRC9ELEVBTUdDLElBTkgsQ0FNUSxVQUFBQyxHQUFHLEVBQUk7QUFDWGQsZUFBTyxDQUFDQyxHQUFSLENBQVlhLEdBQVo7O0FBQ0EsWUFBSUEsR0FBRyxDQUFDQyxJQUFKLENBQVNDLE9BQVQsQ0FBaUJOLE1BQWpCLEtBQTRCLENBQWhDLEVBQW1DO0FBQ2pDTyxvQkFBVSxDQUFDLFlBQU07QUFDZnpCLDJCQUFlLENBQUM7QUFBQ0gsbUJBQUssRUFBRSxtQ0FBUjtBQUE2Q1Ysa0JBQUksRUFBRSxLQUFuRDtBQUEwRFcscUJBQU8sRUFBRTtBQUFuRSxhQUFELENBQWY7QUFDRCxXQUZTLEVBRVAsSUFGTyxDQUFWO0FBSUQsU0FMRCxNQUtPO0FBQ0xFLHlCQUFlLENBQUM7QUFBQ0gsaUJBQUssRUFBRXlCLEdBQUcsQ0FBQ0MsSUFBSixDQUFTQyxPQUFULENBQWlCLENBQWpCLEVBQW9CRSxJQUE1QjtBQUFrQ3ZDLGdCQUFJLEVBQUUsSUFBeEM7QUFBOENXLG1CQUFPLEVBQUU7QUFBdkQsV0FBRCxDQUFmO0FBQ0Q7QUFDRixPQWhCSCxXQWlCUyxVQUFBNkIsR0FBRyxFQUFJO0FBQ1puQixlQUFPLENBQUNDLEdBQVIsQ0FBWWtCLEdBQVo7O0FBQ0EsWUFBSUEsR0FBRyxDQUFDQyxRQUFSLEVBQWtCO0FBQ2hCcEIsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZa0IsR0FBRyxDQUFDQyxRQUFKLENBQWFDLE1BQXpCO0FBQ0Q7O0FBQ0Q3Qix1QkFBZSxDQUFDO0FBQUNILGVBQUssRUFBRSxtQ0FBUjtBQUE2Q1YsY0FBSSxFQUFFLEtBQW5EO0FBQTBEVyxpQkFBTyxFQUFFO0FBQW5FLFNBQUQsQ0FBZjtBQUNELE9BdkJIO0FBd0JELEtBL0JELE1BK0JPO0FBQ0xFLHFCQUFlLENBQUM7QUFBQ0gsYUFBSyxFQUFFLEVBQVI7QUFBWVYsWUFBSSxFQUFFLEtBQWxCO0FBQXlCVyxlQUFPLEVBQUU7QUFBbEMsT0FBRCxDQUFmO0FBQ0Q7QUFDRixHQXRDUSxFQXNDTixDQUFDSCxNQUFELENBdENNLENBQVQ7O0FBM0NrQyxtQkFtRnJCYiwrQ0FBUSxDQUFDLEVBQUQsQ0FuRmE7QUFBQSxNQWtGM0JnRCxJQWxGMkI7QUFBQSxNQW1GaENDLE9BbkZnQzs7QUFvRmxDLE1BQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsTUFBRCxFQUFZO0FBQ3BDLFFBQUksQ0FBQ0MsZ0VBQVEsQ0FBQ0QsTUFBTSxDQUFDRSxHQUFSLENBQWIsRUFBMkI7QUFDekJDLHdEQUFJLENBQUMsT0FBRCw4UkFBcUUsTUFBckUsQ0FBSjtBQUNELEtBRkQsTUFFTztBQUVMekQsZ0JBQVUsQ0FBQyxJQUFELENBQVY7QUFDQVcsaUJBQVcsQ0FBQzJDLE1BQUQsQ0FBWDtBQUNBZCxzREFBQSxXQUFha0IseUJBQWIsc0JBQW9EO0FBQ2xEQyxjQUFNLEVBQUU7QUFDTnJELGFBQUcsRUFBRWdELE1BQU0sQ0FBQ2hELEdBRE47QUFFTkQsZUFBSyxFQUFFdUQsb0VBQVcsQ0FBQ04sTUFBTSxDQUFDakQsS0FBUixDQUZaO0FBR05ELGVBQUssRUFBRWtELE1BQU0sQ0FBQ2xELEtBSFI7QUFJTkcsa0JBQVEsRUFBRStDLE1BQU0sQ0FBQy9DLFFBSlg7QUFLTkMsY0FBSSxFQUFFOEMsTUFBTSxDQUFDOUMsSUFMUDtBQU1OcUQsZ0JBQU0sRUFBRTtBQU5GO0FBRDBDLE9BQXBELEVBU0duQixJQVRILENBU1EsVUFBQUMsR0FBRyxFQUFJO0FBQ2JoQyxtQkFBVztBQUNYWCxrQkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNBNkIsZUFBTyxDQUFDQyxHQUFSLENBQVlhLEdBQVo7O0FBQ0EsWUFBSUEsR0FBRyxDQUFDQyxJQUFKLENBQVNrQixPQUFiLEVBQXNCO0FBQ3BCdkMsa0JBQVEsQ0FBQyxJQUFELENBQVI7QUFFRDs7QUFDRCxZQUFJLENBQUNvQixHQUFHLENBQUNDLElBQUosQ0FBU2tCLE9BQWQsRUFBdUI7QUFDckI1RCxrQkFBUSxDQUFDeUMsR0FBRyxDQUFDQyxJQUFKLENBQVNtQixPQUFWLEVBQW1CO0FBQ3pCQyxzQkFBVSxFQUFFLE9BRGE7QUFFekJDLHVCQUFXLEVBQUU7QUFGWSxXQUFuQixDQUFSO0FBSUQ7QUFDRixPQXZCRCxXQXVCUyxVQUFBakIsR0FBRyxFQUFJO0FBQ2RoRCxrQkFBVSxDQUFDLEtBQUQsQ0FBVjs7QUFDQSxZQUFJZ0QsR0FBRyxDQUFDQyxRQUFSLEVBQWtCO0FBQ2hCL0Msa0JBQVEsQ0FBQzhDLEdBQUcsQ0FBQ0MsUUFBSixDQUFhQyxNQUFkLEVBQXNCO0FBQzVCYyxzQkFBVSxFQUFFLE9BRGdCO0FBRTVCQyx1QkFBVyxFQUFFO0FBRmUsV0FBdEIsQ0FBUjtBQUlEO0FBQ0YsT0EvQkQ7QUFnQ0Q7QUFFRixHQXpDRDs7QUEyQ0EsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsT0FBRCxFQUFhO0FBQzdCdEMsV0FBTyxDQUFDQyxHQUFSLENBQVlWLFlBQVo7O0FBQ0EsUUFBR0EsWUFBWSxDQUFDWixJQUFiLEtBQXNCLElBQXRCLElBQThCWSxZQUFZLENBQUNGLEtBQTlDLEVBQXFEO0FBQ25EbEIsZ0JBQVUsQ0FBQyxJQUFELENBQVYsQ0FEbUQsQ0FFbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEO0FBQ0YsR0FsQ0Q7O0FBb0NBLE1BQU1vRSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDakMsQ0FBRCxFQUFPO0FBQ3RCQSxLQUFDLENBQUNrQyxjQUFGO0FBQ0F4RCxhQUFTLGlDQUNKRCxNQURJO0FBRVBSLFdBQUssRUFBRWtFLGtFQUFVLENBQUM1RCxRQUFRLENBQUNOLEtBQVYsQ0FGVjtBQUdQRSxTQUFHLEVBQUVpRSxnRUFBUSxDQUFDN0QsUUFBUSxDQUFDSixHQUFWLENBSE47QUFJUEQsV0FBSyxFQUFFbUUsdUVBQWUsQ0FBQzlELFFBQVEsQ0FBQ0wsS0FBVixDQUpmO0FBS1BFLGNBQVEsRUFBRWtFLHFFQUFhLENBQUMvRCxRQUFRLENBQUNILFFBQVY7QUFMaEIsT0FBVDtBQVFBOEMscUJBQWlCO0FBQ2xCLEdBWEQ7O0FBYUEsTUFBTXFCLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUN2QyxDQUFELEVBQU87QUFDdEIsUUFBTVksSUFBSSxHQUFHWixDQUFDLENBQUNFLE1BQUYsQ0FBU1UsSUFBdEI7QUFDQXBDLGVBQVcsaUNBQ05ELFFBRE0sNEhBRVJxQyxJQUZRLEVBRURaLENBQUMsQ0FBQ0UsTUFBRixDQUFTbkIsS0FGUixHQUFYO0FBSUQsR0FORDs7QUFRQSxzQkFDRTtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLGVBQWY7QUFBQSw4QkFDRSw4REFBQywwQ0FBRDtBQUNFLHFCQUFhLEVBQUU7QUFDZmQsZUFBSyxFQUFFLEVBRFE7QUFFZnVFLGFBQUcsRUFBRSxFQUZVO0FBR2ZsRSxrQkFBUSxFQUFFLEdBSEs7QUFJZkosZUFBSyxFQUFFLEVBSlE7QUFLZkMsYUFBRyxFQUFFLEVBTFU7QUFNZkMsa0JBQVEsRUFBRSxFQU5LO0FBT2ZDLGNBQUksRUFBRSxTQVBTO0FBUWZnRCxhQUFHLEVBQUU7QUFSVSxTQURqQjtBQVdFLGdCQUFRLEVBQUUsa0JBQUNGLE1BQUQsRUFBWTtBQUN0QkQsMkJBQWlCLENBQUNDLE1BQUQsQ0FBakI7QUFDRCxTQWJEO0FBQUEsa0JBY0c7QUFBQTs7QUFBQSxjQUFFMUMsTUFBRixTQUFFQSxNQUFGO0FBQUEsY0FBVWdFLE9BQVYsU0FBVUEsT0FBVjtBQUFBLDhCQUNDLDhEQUFDLHdDQUFEO0FBQUEsb0NBRUUsOERBQUMseUNBQUQ7QUFBTyxrQkFBSSxFQUFDLEtBQVo7QUFBa0IsdUJBQVMsRUFBQyxjQUE1QjtBQUEyQyx5QkFBVyxFQUFDLG9CQUF2RDtBQUE2RCxrQkFBSSxFQUFDLEtBQWxFO0FBQXdFLHVCQUFTLEVBQUVDLG9EQUFuRjtBQUE0RixzQkFBUSxFQUFFLGtCQUFBMUMsQ0FBQztBQUFBLHVCQUFJRCxTQUFTLENBQUNDLENBQUQsQ0FBYjtBQUFBLGVBQXZHO0FBQXlILG1CQUFLLEVBQUVuQjtBQUFoSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGLGVBR0UsOERBQUMseUNBQUQ7QUFDRSxrQkFBSSxFQUFDLE1BRFA7QUFFRSxzQkFBUSxNQUZWO0FBR0UsdUJBQVMsRUFBR0ksWUFBWSxDQUFDWixJQUFiLEtBQXNCLEtBQXRCLElBQStCWSxZQUFZLENBQUNGLEtBQTdDLElBQXVELDRCQUhwRTtBQUlFLG1CQUFLLEVBQUVFLFlBQVksQ0FBQ0YsS0FKdEI7QUFLRSxrQkFBSSxFQUFDLGFBTFA7QUFNRSx5QkFBVyxFQUFDO0FBTmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIRixvQkFVRSw4REFBQyx5Q0FBRDtBQUNFLGdCQUFFLEVBQUMsUUFETDtBQUVFLGtCQUFJLEVBQUMsTUFGUDtBQUdFLGtCQUFJLEVBQUMsVUFIUDtBQUlFLHNCQUFRLEVBQUVxRCw0REFKWjtBQUtFLHlCQUFXLEVBQUMscUhBTGQ7QUFNRSwwQkFBWSxFQUFDLEtBTmY7QUFBQSx3QkFNc0JPLDhEQUFBLENBQWMsVUFBQUMsQ0FBQztBQUFBLG9DQUNqQztBQUFRLHVCQUFLLEVBQUVBLENBQUMsQ0FBQzdELEtBQWpCO0FBQUEsNEJBQXlCNkQsQ0FBQyxDQUFDaEM7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFEaUM7QUFBQSxlQUFmO0FBTnRCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVkYsRUFtQkluQyxNQUFNLENBQUNILFFBQVAsSUFBbUJtRSxPQUFPLENBQUNuRSxRQUE1QixnQkFDRztBQUFHLHVCQUFTLEVBQUMsYUFBYjtBQUFBLHdCQUE0QkcsTUFBTSxDQUFDSDtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURILGdCQUVHO0FBQUcsdUJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBckJOLGVBdUJFLDhEQUFDLHlDQUFEO0FBQ0Usa0JBQUksRUFBQyxNQURQO0FBRUUsa0JBQUksRUFBQyxLQUZQO0FBR0Usc0JBQVEsRUFBRXVFLGtFQUhaO0FBSUUseUJBQVcsRUFBQyxvQkFKZDtBQUtFLHVCQUFTLEVBQUMsWUFMWjtBQU1FLDBCQUFZLEVBQUM7QUFOZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXZCRixPQTZCMkJwRSxNQUFNLENBQUNOLEdBQVAsSUFBY3NFLE9BQU8sQ0FBQ3RFLEdBQXZCLGdCQUNwQjtBQUFHLHVCQUFTLEVBQUMsYUFBYjtBQUFBLHdCQUE0Qk0sTUFBTSxDQUFDTjtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURvQixnQkFFcEI7QUFBRyx1QkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkEvQk4sZUFpQ0UsOERBQUMseUNBQUQ7QUFDRSxrQkFBSSxFQUFDLE9BRFA7QUFFRSx1QkFBUyxFQUFDLGNBRlo7QUFHRSx5QkFBVyxFQUFDLDJFQUhkO0FBSUUsa0JBQUksRUFBQyxLQUpQO0FBS0Usc0JBQVEsRUFBRWtFLG1FQUxaO0FBTUUsdUJBQVMsRUFBRVMsc0RBQVNBO0FBTnRCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBakNGLEVBd0NJckUsTUFBTSxDQUFDUCxLQUFQLElBQWdCdUUsT0FBTyxDQUFDdkUsS0FBekIsZ0JBQ0c7QUFBRyx1QkFBUyxFQUFDLGFBQWI7QUFBQSx3QkFBNEJPLE1BQU0sQ0FBQ1A7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESCxnQkFFRztBQUFHLHVCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQTFDTixlQTRDRSw4REFBQyx5Q0FBRDtBQUNFLGtCQUFJLEVBQUMsTUFEUDtBQUVFLGtCQUFJLEVBQUMsT0FGUDtBQUdFLHNCQUFRLEVBQUVpRSw4REFIWjtBQUlFLHlCQUFXLEVBQUMsT0FKZDtBQUtFLDBCQUFZLEVBQUM7QUFMZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQTVDRixPQWlEMkIxRCxNQUFNLENBQUNSLEtBQVAsSUFBZ0J3RSxPQUFPLENBQUN4RSxLQUF6QixnQkFDcEI7QUFBRyx1QkFBUyxFQUFDLGFBQWI7QUFBQSx3QkFBNEJRLE1BQU0sQ0FBQ1I7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEb0IsZ0JBRXBCO0FBQUcsdUJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBbkROLGVBNkRFO0FBQUssdUJBQVMsRUFBQyxrQkFBZjtBQUFBLHNDQUNFO0FBQUsseUJBQVMsRUFBQyx1QkFBZjtBQUFBLHVDQUNFO0FBQUsscUJBQUcsRUFBQyxPQUFUO0FBQWlCLDJCQUFTLEVBQUMsV0FBM0I7QUFBdUMscUJBQUcsRUFBQztBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUlFO0FBQUsseUJBQVMsRUFBQywwQkFBZjtBQUFBLHdDQUNFO0FBQ0UsMkJBQVMsRUFBQyxXQURaO0FBRUUsc0JBQUksRUFBQztBQUZQLDJKQUdZLFFBSFoseUlBSVc7QUFBQSx5QkFBTThFLG9FQUFXLEVBQWpCO0FBQUEsaUJBSlgsdUlBS1EsK0RBTFI7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixlQU9FO0FBQUEsdUhBQWdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQTdERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREQ7QUFBQTtBQWRIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQWdHRSw4REFBQyxzREFBRDtBQUNFLG1CQUFXLEVBQUU1RCxLQURmO0FBRUUsa0JBQVUsRUFBRUUsVUFGZDtBQUdFLFlBQUksRUFBRTJCLElBSFI7QUFJRSxlQUFPLEVBQUVDLE9BSlg7QUFLRSxtQkFBVyxFQUFFYyxTQUxmO0FBTUUsYUFBSyxFQUFFcEQsU0FOVDtBQU9FLHlCQUFpQixFQUFFdUM7QUFQckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWhHRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE4R0QsQ0F0U0Q7O0dBQU10RCxTO1VBQ2VFLGdFOzs7S0FEZkYsUzs7QUF3U04sSUFBTW9GLFFBQVEsR0FBRyxTQUFYQSxRQUFXLFFBQWtCO0FBQUEsTUFBaEJuRixVQUFnQixTQUFoQkEsVUFBZ0I7QUFDakMsc0JBQ0UsOERBQUMsb0VBQUQ7QUFBQSwyQkFDRSw4REFBQyxTQUFEO0FBQVcsZ0JBQVUsRUFBRUE7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUtELENBTkQ7O01BQU1tRixRO0FBUU4sK0RBQWVBLFFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvanVyc2VydmljZS40YmYzZThkODMyZTNiZjY5ZmJkYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29uc3QgRmlyc3RTdGVwID0gKCkgPT4geyAgIHJldHVybiggICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtX3JlZ2lzdGVyJz5cclxuLy8gPGZvcm0+ICAgICAgICAgPGlucHV0IHR5cGU9J251bWJlcicgbmFtZT0nYmluJyBwbGFjZWhvbGRlcj0n0JHQmNCdJyAvPlxyXG4vLyA8aW5wdXQgdHlwZT0ndGV4dCcgZGlzYWJsZWQgbmFtZT0nb3JnYW5pemF0aW9uJyBwbGFjZWhvbGRlcj0nJyAvPlxyXG4vLyA8aW5wdXQgdHlwZT0ndGV4dCcgbmFtZT0ncG9zaXRpb24nIHBsYWNlaG9sZGVyPSfQl9Cw0L3QuNC80LDQtdC80LDRjyDQtNC+0LvQttC90L7RgdGC0YwnIC8+XHJcbi8vICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBuYW1lPSdmaW8nIHBsYWNlaG9sZGVyPSfQpNCw0LzQuNC70LjRjyDQmNC80Y8nIC8+ICAgICAgICAgPGlucHV0XHJcbi8vIHR5cGU9J3RleHQnIG5hbWU9J3Bob25lJyBwbGFjZWhvbGRlcj0n0KLQtdC70LXRhNC+0L0nIC8+ICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnXHJcbi8vIG5hbWU9J2VtYWlsJyBwbGFjZWhvbGRlcj0nRW1haWwnIC8+ICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0nc2luZ2xlYnRuJ1xyXG4vLyB0eXBlPSdidXR0b24nIGNsYXNzTmFtZT0nYnV0dG9uJyB2YWx1ZT0n0J7RgtC/0YDQsNCy0LjRgtGMJyAvPiAgICAgICA8L2Zvcm0+XHJcbi8vIDwvZGl2PiAgICkgfSBleHBvcnQgZGVmYXVsdCBGaXJzdFN0ZXBcclxuXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENvZGVNb2RhbCBmcm9tICcuLi9zaGFyZWQvQ29kZU1vZGFsJ1xyXG5pbXBvcnQge2hhbmRsZUZvY3VzLCByZXBsYWNlRGF0ZX0gZnJvbSAnLi4vLi4vZGVmYXVsdHMvZXh0cmFGdW5jdGlvbidcclxuaW1wb3J0IHtwb3NpdGlvbnN9IGZyb20gJy4uLy4uL2RlZmF1bHRzL3Bvc2l0aW9ucydcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnXHJcbmltcG9ydCB7VG9hc3RQcm92aWRlciwgdXNlVG9hc3RzfSBmcm9tICdyZWFjdC10b2FzdC1ub3RpZmljYXRpb25zJ1xyXG5pbXBvcnQge0Zvcm1paywgRm9ybSwgRmllbGR9IGZyb20gJ2Zvcm1payc7XHJcbmltcG9ydCB7XHJcbiAgZW1haWxWYWxpZCxcclxuICByZXF1aXJlZCxcclxuICBwaG9uZVZhbGlkYXRpb24sXHJcbiAgcGFzc3dvcmRWYWxpZCxcclxuICBhY2NlcHRDaXJyaWxpYyxcclxuICBwaG9uZUNoZWNrLFxyXG4gIGlpblZhbGlkYXRpb25cclxufSBmcm9tICcuLi8uLi9kZWZhdWx0cy92YWxpZGF0aW9ucydcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi9sb2FkZXIvTG9hZGVyJ1xyXG5pbXBvcnQge3ZhbGlkYWdlfSBmcm9tICcuLi8uLi9kZWZhdWx0cy9paW5WYWxpZEFnZSdcclxuaW1wb3J0IHN3YWwgZnJvbSAnc3dlZXRhbGVydCdcclxuaW1wb3J0IExvYWRlclRleHQgZnJvbSAnLi4vc2hhcmVkL0xvYWRlclRleHQnXHJcbmltcG9ydCBQaG9uZU1hc2sgZnJvbSAnLi4vTWFza3MvUGhvbmVNYXNrJ1xyXG5pbXBvcnQgSWluTWFzayBmcm9tICcuLi9NYXNrcy9JaW5NYXNrJ1xyXG5cclxuY29uc3QgRmlyc3RTdGVwID0gKHtzZXRMb2FkaW5nfSkgPT4ge1xyXG4gIGNvbnN0IHthZGRUb2FzdH0gPSB1c2VUb2FzdHMoKVxyXG4gIGNvbnN0IFtmb3JtRGF0YSxcclxuICAgIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgIGVtYWlsOiAnJyxcclxuICAgIHBob25lOiAnJyxcclxuICAgIGZpbzogJycsXHJcbiAgICBwYXNzd29yZDogJycsXHJcbiAgICB0eXBlOiAn0K7RgCDQu9C40YbQvicsXHJcbiAgICBwb3NpdGlvbjogJzEnXHJcbiAgfSlcclxuICBjb25zdCBbZXJyb3JzLFxyXG4gICAgc2V0RXJyb3JzXSA9IHVzZVN0YXRlKHtlbWFpbDogJycsIHBob25lOiAnJywgZmlvOiAnJywgcGFzc3dvcmQ6ICcnfSlcclxuICBjb25zdCBbY29kZUVycm9yLFxyXG4gICAgc2V0Q29kZUVycm9yXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtiaW5WYWwsXHJcbiAgICBzZXRCaW5dID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW29yZ2FuaXphdGlvbixcclxuICAgIHNldE9yZ2FuaXphdGlvbl0gPSB1c2VTdGF0ZSh7dmFsdWU6ICcnLCB0eXBlOiBmYWxzZSwgbG9hZGluZzogZmFsc2V9KVxyXG4gIGNvbnN0IFttb2RhbCxcclxuICAgIHNldE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICBjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0TW9kYWwoZmFsc2UpXHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgdmFyIGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybV9yZWdpc3RlcicpO1xyXG4gICAgY29uc29sZS5sb2coZm9ybSlcclxuICAgIGZvcm0uc2Nyb2xsSW50b1ZpZXcoe2Jsb2NrOiAnY2VudGVyJywgYmVoYXZpb3I6ICdzbW9vdGgnfSlcclxuICB9LFtdKVxyXG5cclxuICBjb25zdCBiaW5DaGFuZ2UgPSBlID0+IHtcclxuICAgIGNvbnN0IHZhbCA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgY29uc3QgdmFsdWUgPSB2YWxcclxuICAgICAgPyB2YWwucmVwbGFjZSgvIC9nLCBcIlwiKVxyXG4gICAgICA6ICcnXHJcbiAgICBzZXRCaW4oZS50YXJnZXQudmFsdWUpXHJcbiAgICAvLyBpZih2YWx1ZS5sZW5ndGggPT09IDEyKSB7XHJcbiAgICAvLyBheGlvcy5nZXQoYGh0dHBzOi8vYXBpLm1vbmV5LW1lbi5rei9hcGkvdGVzdEtvbXByYT9iaW49JHt2YWx1ZX1gKVxyXG4gICAgLy8gLnRoZW4ocmVzPT4geyAgICAgICBzZXRPcmdhbml6YXRpb24ocmVzLmRhdGEuY29udGVudFswXS5uYW1lKSAgICAgfSkgfVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHZhbHVlID0gYmluVmFsXHJcbiAgICAgID8gYmluVmFsLnJlcGxhY2UoLyAvZywgXCJcIilcclxuICAgICAgOiAnJ1xyXG4gICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMTIpIHtcclxuICAgICAgc2V0T3JnYW5pemF0aW9uKHtcclxuICAgICAgICAuLi5vcmdhbml6YXRpb24sXHJcbiAgICAgICAgdHlwZTogdHJ1ZSxcclxuICAgICAgICB2YWx1ZTogJ9CX0LDQs9GA0YPQt9C60LAuLi4nLFxyXG4gICAgICAgIGxvYWRpbmc6IHRydWVcclxuICAgICAgfSlcclxuICAgICAgYXhpb3NcclxuICAgICAgICAuZ2V0KGBodHRwczovL2FwaS5tb25leS1tZW4ua3ovYXBpL3Rlc3RLb21wcmE/YmluPSR7dmFsdWV9YCwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKidcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgIGlmIChyZXMuZGF0YS5jb250ZW50Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICBzZXRPcmdhbml6YXRpb24oe3ZhbHVlOiAn0J/QvtC20LDQu9GD0LnRgdGC0LAg0LLQstC10LTQuNGC0LUg0L/RgNCw0LLQuNC70YzQvdGL0Lkg0JHQmNCdJywgdHlwZTogZmFsc2UsIGxvYWRpbmc6IGZhbHNlfSlcclxuICAgICAgICAgICAgfSwgMTAwMClcclxuXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRPcmdhbml6YXRpb24oe3ZhbHVlOiByZXMuZGF0YS5jb250ZW50WzBdLm5hbWUsIHR5cGU6IHRydWUsIGxvYWRpbmc6IGZhbHNlfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgICAgaWYgKGVyci5yZXNwb25zZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2Uuc3RhdHVzKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc2V0T3JnYW5pemF0aW9uKHt2YWx1ZTogJ9Cf0L7QttCw0LvRg9C50YHRgtCwINCy0LLQtdC00LjRgtC1INC/0YDQsNCy0LjQu9GM0L3Ri9C5INCR0JjQnScsIHR5cGU6IGZhbHNlLCBsb2FkaW5nOiBmYWxzZX0pXHJcbiAgICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldE9yZ2FuaXphdGlvbih7dmFsdWU6ICcnLCB0eXBlOiBmYWxzZSwgbG9hZGluZzogZmFsc2V9KVxyXG4gICAgfVxyXG4gIH0sIFtiaW5WYWxdKVxyXG4gIGNvbnN0IFtjb2RlLFxyXG4gICAgc2V0Q29kZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgZ2V0SWRlbnRpZmljYXRpb24gPSAodmFsdWVzKSA9PiB7XHJcbiAgICBpZiAoIXZhbGlkYWdlKHZhbHVlcy5paW4pKSB7XHJcbiAgICAgIHN3YWwoXCJPb3BzIVwiLCBg0JjQt9Cy0LjQvdC40YLQtSwg0YPRgdC70YPQs9CwINC+0YHRg9GJ0LXRgdGC0LLQu9GP0LXRgtGB0Y8g0LvQuNGG0LDQvCDQtNC+0YHRgtC40LPRiNC40LUgMTgg0LvQtdGCLmAsIFwiaW5mb1wiKTtcclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICAgIHNldEZvcm1EYXRhKHZhbHVlcylcclxuICAgICAgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9pZGVudGlmaWNhdGlvbmAsIHtcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIGZpbzogdmFsdWVzLmZpbyxcclxuICAgICAgICAgIHBob25lOiByZXBsYWNlRGF0ZSh2YWx1ZXMucGhvbmUpLFxyXG4gICAgICAgICAgZW1haWw6IHZhbHVlcy5lbWFpbCxcclxuICAgICAgICAgIHBhc3N3b3JkOiB2YWx1ZXMucGFzc3dvcmQsXHJcbiAgICAgICAgICB0eXBlOiB2YWx1ZXMudHlwZSxcclxuICAgICAgICAgIHNvdXJjZTogJ25hc2hjb21wYW55Lmt6J1xyXG4gICAgICAgIH1cclxuICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIHNldEZvcm1EYXRhKClcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICBpZiAocmVzLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgc2V0TW9kYWwodHJ1ZSlcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcmVzLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgYWRkVG9hc3QocmVzLmRhdGEubWVzc2FnZSwge1xyXG4gICAgICAgICAgICBhcHBlYXJhbmNlOiAnZXJyb3InLFxyXG4gICAgICAgICAgICBhdXRvRGlzbWlzczogdHJ1ZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICBpZiAoZXJyLnJlc3BvbnNlKSB7XHJcbiAgICAgICAgICBhZGRUb2FzdChlcnIucmVzcG9uc2Uuc3RhdHVzLCB7XHJcbiAgICAgICAgICAgIGFwcGVhcmFuY2U6ICdlcnJvcicsXHJcbiAgICAgICAgICAgIGF1dG9EaXNtaXNzOiB0cnVlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBjb25zdCBmaXJzdFN0ZXAgPSAoY29kZVZhbCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2cob3JnYW5pemF0aW9uKVxyXG4gICAgaWYob3JnYW5pemF0aW9uLnR5cGUgPT09IHRydWUgJiYgb3JnYW5pemF0aW9uLnZhbHVlKSB7XHJcbiAgICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgICAgLy8gYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9zdGVwT25lYCwge1xyXG4gICAgICAvLyAgIHBhcmFtczoge1xyXG4gICAgICAvLyAgICAgZmlvOiBmb3JtRGF0YS5maW8sXHJcbiAgICAgIC8vICAgICBwaG9uZTogcmVwbGFjZURhdGUoZm9ybURhdGEucGhvbmUpLFxyXG4gICAgICAvLyAgICAgZW1haWw6IGZvcm1EYXRhLmVtYWlsLFxyXG4gICAgICAvLyAgICAgcGFzc3dvcmQ6IGZvcm1EYXRhLnBhc3N3b3JkLFxyXG4gICAgICAvLyAgICAgdHlwZTogZm9ybURhdGEudHlwZSxcclxuICAgICAgLy8gICAgIGNvZGU6IGNvZGVWYWwsXHJcbiAgICAgIC8vICAgICBpaW46IGZvcm1EYXRhLmlpbixcclxuICAgICAgLy8gICAgIGNvbXBhbnlOYW1lOiBvcmdhbml6YXRpb24sXHJcbiAgICAgIC8vICAgICBzb3VyY2U6IGNvb2tpZS5nZXQoJ3V0bV9zb3VyY2UnKSArICdfMScgfHwgJ25hc2hjb21wYW55Lmt6J1xyXG4gICAgICAvLyAgIH1cclxuICAgICAgLy8gfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAvLyAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgIC8vICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAvLyAgIGlmIChyZXMuZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgIC8vICAgICBjb29raWUuc2V0KCd0b2tlbicsIHJlcy5kYXRhLnRva2VuKVxyXG4gICAgICAvLyAgICAgY29va2llLnNldCgnbGVhZF9pZCcsIHJlcy5kYXRhLmlkKVxyXG4gICAgICAvLyAgICAgY29va2llLnNldCgnc3RlcGp1cicsIDIpXHJcbiAgICAgIC8vICAgICBSb3V0ZXIucHVzaCgnL2p1cnNlcnZpY2U/c3RlcD0yJylcclxuICAgICAgLy8gICB9XHJcbiAgICAgIC8vICAgaWYgKCFyZXMuZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgIC8vICAgICBzZXRDb2RlRXJyb3IocmVzLmRhdGEubWVzc2FnZSlcclxuICAgICAgLy8gICAgIGFkZFRvYXN0KGZpbmFsRXJyLCB7XHJcbiAgICAgIC8vICAgICAgIGFwcGVhcmFuY2U6ICdlcnJvcicsXHJcbiAgICAgIC8vICAgICAgIGF1dG9EaXNtaXNzOiB0cnVlXHJcbiAgICAgIC8vICAgICB9KVxyXG4gICAgICAvLyAgIH1cclxuICAgICAgLy8gfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgc2V0RXJyb3JzKHtcclxuICAgICAgLi4uZXJyb3JzLFxyXG4gICAgICBlbWFpbDogZW1haWxWYWxpZChmb3JtRGF0YS5lbWFpbCksXHJcbiAgICAgIGZpbzogcmVxdWlyZWQoZm9ybURhdGEuZmlvKSxcclxuICAgICAgcGhvbmU6IHBob25lVmFsaWRhdGlvbihmb3JtRGF0YS5waG9uZSksXHJcbiAgICAgIHBhc3N3b3JkOiBwYXNzd29yZFZhbGlkKGZvcm1EYXRhLnBhc3N3b3JkKVxyXG4gICAgfSlcclxuXHJcbiAgICBnZXRJZGVudGlmaWNhdGlvbigpXHJcbiAgfVxyXG5cclxuICBjb25zdCBvbkNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBuYW1lID0gZS50YXJnZXQubmFtZTtcclxuICAgIHNldEZvcm1EYXRhKHtcclxuICAgICAgLi4uZm9ybURhdGEsXHJcbiAgICAgIFtuYW1lXTogZS50YXJnZXQudmFsdWVcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm1fcmVnaXN0ZXInPlxyXG4gICAgICAgIDxGb3JtaWtcclxuICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcclxuICAgICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICAgIGJpbjogJycsXHJcbiAgICAgICAgICBwb3NpdGlvbjogJzEnLFxyXG4gICAgICAgICAgcGhvbmU6ICcnLFxyXG4gICAgICAgICAgZmlvOiAnJyxcclxuICAgICAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgICAgIHR5cGU6ICfQrtGAINC70LjRhtC+JyxcclxuICAgICAgICAgIGlpbjogJydcclxuICAgICAgICB9fVxyXG4gICAgICAgICAgb25TdWJtaXQ9eyh2YWx1ZXMpID0+IHtcclxuICAgICAgICAgIGdldElkZW50aWZpY2F0aW9uKHZhbHVlcylcclxuICAgICAgICB9fT5cclxuICAgICAgICAgIHsoe2Vycm9ycywgdG91Y2hlZH0pID0+IChcclxuICAgICAgICAgICAgPEZvcm0+XHJcblxyXG4gICAgICAgICAgICAgIDxGaWVsZCBuYW1lPSdpaW4nIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJyBwbGFjZWhvbGRlcj0n0JHQmNCdJyB0eXBlPSd0ZWwnIGNvbXBvbmVudD17SWluTWFza30gb25DaGFuZ2U9e2UgPT4gYmluQ2hhbmdlKGUpfSB2YWx1ZT17YmluVmFsfSAgLz4gXHJcbiAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17KG9yZ2FuaXphdGlvbi50eXBlID09PSBmYWxzZSAmJiBvcmdhbml6YXRpb24udmFsdWUpICYmICdkaXNhYmxlZF9lcnJvciB0ZXh0LWRhbmdlcid9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17b3JnYW5pemF0aW9uLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgbmFtZT0nY29tcGFueU5hbWUnXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0n0J3QsNC30LLQsNC90LjQtSDQntGA0LPQsNC90LjQt9Cw0YbQuNC4Jy8+IHsvKiA8aW5wdXQgdHlwZT0ndGV4dCcgY2xhc3NOYW1lPXsob3JnYW5pemF0aW9uLnR5cGUgPT09IGZhbHNlICYmIG9yZ2FuaXphdGlvbi52YWx1ZSkgJiYgJ2Rpc2FibGVkX2Vycm9yJ30gdmFsdWU9e29yZ2FuaXphdGlvbi52YWx1ZX0gZGlzYWJsZWQgbmFtZT0nb3JnYW5pemF0aW9uJyBwbGFjZWhvbGRlcj0n0J3QsNC30LLQsNC90LjQtSDQntGA0LPQsNC90LjQt9Cw0YbQuNC4JyAvPiAqL31cclxuICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgIGFzPSdzZWxlY3QnXHJcbiAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgbmFtZT0ncG9zaXRpb24nXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZT17cmVxdWlyZWR9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0n0JfQsNC90LjQvNCw0LXQvNCw0Y8g0LTQvtC70LbQvdC+0YHRgtGMJ1xyXG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPSdvZmYnPntwb3NpdGlvbnMubWFwKHAgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtwLnZhbHVlfT57cC5uYW1lfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgKSl9PC9GaWVsZD5cclxuICAgICAgICAgICAgICB7KGVycm9ycy5wb3NpdGlvbiAmJiB0b3VjaGVkLnBvc2l0aW9uKVxyXG4gICAgICAgICAgICAgICAgPyA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz57ZXJyb3JzLnBvc2l0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgIDogPHAgY2xhc3NOYW1lPScnPjwvcD59XHJcblxyXG4gICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgIG5hbWU9J2ZpbydcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlPXthY2NlcHRDaXJyaWxpY31cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSfQpNCY0J4nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2NhcGl0YWxpemUnXHJcbiAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9J29mZicvPiB7KGVycm9ycy5maW8gJiYgdG91Y2hlZC5maW8pXHJcbiAgICAgICAgICAgICAgICA/IDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPntlcnJvcnMuZmlvfTwvcD5cclxuICAgICAgICAgICAgICAgIDogPHAgY2xhc3NOYW1lPScnPjwvcD59XHJcblxyXG4gICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgbmFtZT0ncGhvbmUnXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSfQotC10LvQtdGE0L7QvSDQvdC+0LzQtdGAJ1xyXG4gICAgICAgICAgICAgICAgdHlwZT0ndGVsJ1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU9e3Bob25lVmFsaWRhdGlvbn1cclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17UGhvbmVNYXNrfT48L0ZpZWxkPlxyXG4gICAgICAgICAgICAgIHsoZXJyb3JzLnBob25lICYmIHRvdWNoZWQucGhvbmUpXHJcbiAgICAgICAgICAgICAgICA/IDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPntlcnJvcnMucGhvbmV9PC9wPlxyXG4gICAgICAgICAgICAgICAgOiA8cCBjbGFzc05hbWU9Jyc+PC9wPn1cclxuXHJcbiAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgbmFtZT0nZW1haWwnXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZT17ZW1haWxWYWxpZH1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbWFpbCdcclxuICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT0nb2ZmJy8+IHsoZXJyb3JzLmVtYWlsICYmIHRvdWNoZWQuZW1haWwpXHJcbiAgICAgICAgICAgICAgICA/IDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPntlcnJvcnMuZW1haWx9PC9wPlxyXG4gICAgICAgICAgICAgICAgOiA8cCBjbGFzc05hbWU9Jyc+PC9wPn1cclxuXHJcbiAgICAgICAgICAgICAgey8qIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdwYXNzd29yZCdcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlPXtwYXNzd29yZFZhbGlkfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J9Cf0YDQuNC00YPQvNCw0LnRgtC1INC/0LDRgNC+0LvRjCdcclxuICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT0nb2ZmJy8+XHJcbiAgICAgICAgICAgICAgICAgeyhlcnJvcnMucGFzc3dvcmQgJiYgdG91Y2hlZC5wYXNzd29yZCkgPyA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz57ZXJyb3JzLnBhc3N3b3JkfTwvcD4gOiAgPHAgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+PC9wPn0gKi99XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaXJzdHN0ZXBfYmFubmVyJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaXJzdHN0ZXBfYmFubmVyLS1pbWcnPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIGFsdD0naW1hZ2UnIGNsYXNzTmFtZT0nZmlyc3RzdGVwJyBzcmM9Jy9pbWcvZm9ybS9maXJzdHN0ZXAuc3ZnJy8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaXJzdHN0ZXBfYmFubmVyLS1idXR0b24nPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NpbmdsZWJ0bidcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPSdzdWJtaXQnXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdidXR0b24nXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRm9jdXMoKX1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT0n0KXQvtGH0YMg0YHQutC40LTQutC4Jy8+XHJcbiAgICAgICAgICAgICAgICAgIDxiPtCh0LvQtdC00YPRjtGJ0LjQuSDRiNCw0LM8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICDQtNCw0YHRgiA1MCUg0YHQutC40LTQutC4PC9iPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvRm9ybWlrPlxyXG4gICAgICAgIDxDb2RlTW9kYWxcclxuICAgICAgICAgIGlzTW9kYWxPcGVuPXttb2RhbH1cclxuICAgICAgICAgIGNsb3NlTW9kYWw9e2Nsb3NlTW9kYWx9XHJcbiAgICAgICAgICBjb2RlPXtjb2RlfVxyXG4gICAgICAgICAgc2V0Q29kZT17c2V0Q29kZX1cclxuICAgICAgICAgIG9uRmlyc3RTdGVwPXtmaXJzdFN0ZXB9XHJcbiAgICAgICAgICBlcnJvcj17Y29kZUVycm9yfVxyXG4gICAgICAgICAgZ2V0SWRlbnRpZmljYXRpb249e2dldElkZW50aWZpY2F0aW9ufS8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgRmlyc3RSZWcgPSAoe3NldExvYWRpbmd9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxUb2FzdFByb3ZpZGVyPlxyXG4gICAgICA8Rmlyc3RTdGVwIHNldExvYWRpbmc9e3NldExvYWRpbmd9Lz5cclxuICAgIDwvVG9hc3RQcm92aWRlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpcnN0UmVnIl0sInNvdXJjZVJvb3QiOiIifQ==