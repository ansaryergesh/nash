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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _defaults_validations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../defaults/validations */ "./defaults/validations.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _loader_Loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../loader/Loader */ "./components/loader/Loader.js");
/* harmony import */ var _defaults_iinValidAge__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../defaults/iinValidAge */ "./defaults/iinValidAge.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _shared_LoaderText__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../shared/LoaderText */ "./components/shared/LoaderText.js");
/* harmony import */ var _Masks_PhoneMask__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../Masks/PhoneMask */ "./components/Masks/PhoneMask.js");
/* harmony import */ var _Masks_IinMask__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../Masks/IinMask */ "./components/Masks/IinMask.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "E:\\job\\nashcompany\\components\\getservice\\FirstStepJur.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// const FirstStep = () => {   return(     <div className='form_register'>
// <form>         <input type='number' name='bin' placeholder='БИН' /> <input
// type='text' disabled name='organization' placeholder='' /> <input type='text'
// name='position' placeholder='Занимаемая должность' />    <input type='text'
// name='fio' placeholder='Фамилия Имя' />         <input type='text'
// name='phone' placeholder='Телефон' />         <input type='text' name='email'
// placeholder='Email' />         <input className='singlebtn' type='button'
// className='button' value='Отправить' />       </form> </div>   ) } export
// default FirstStep


















var FirstStep = function FirstStep(_ref) {
  _s();

  var setLoading = _ref.setLoading;

  var _useToasts = (0,react_toast_notifications__WEBPACK_IMPORTED_MODULE_8__.useToasts)(),
      addToast = _useToasts.addToast;

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useDispatch)();

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
    form.scrollIntoView({
      block: 'center',
      behavior: 'smooth'
    });
  }, []);

  var binChange = function binChange(e) {
    var val = e.target.value;
    var value = val ? val.replace(/ /g, "") : '';
    setBin(e.target.value); // if(value.length === 12) {
    // axios.get(`https://api.money-men.kz/api/testKompra?bin=${value}`) .then(res=>
    // {       setOrganization(res.data.content[0].name)     }) }
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

        if (err.response) {}

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
    if (!(0,_defaults_iinValidAge__WEBPACK_IMPORTED_MODULE_14__.validage)(values.iin)) {
      sweetalert__WEBPACK_IMPORTED_MODULE_15___default()("Oops!", "\u0418\u0437\u0432\u0438\u043D\u0438\u0442\u0435, \u0443\u0441\u043B\u0443\u0433\u0430 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043B\u0438\u0446\u0430\u043C \u0434\u043E\u0441\u0442\u0438\u0433\u0448\u0438\u0435 18 \u043B\u0435\u0442.", "info");
    }

    if (organization.type === false && binVal.length !== 12) {
      setOrganization({
        value: 'Пожалуйста введите правильный БИН',
        type: false
      });
    }

    if (organization.type === true && organization.value) {// console.log(values)
      // setLoading(true)
      // setFormData(values)
      // axios.get(`${process.env.BASE_URL}/identification`, {
      //   params: {
      //     fio: values.fio,
      //     phone: replaceDate(values.phone),
      //     email: values.email,
      //     password: values.password,
      //     type: values.type,
      //     iin: binVal,
      //     source: 'nashcompany.kz'
      //   }
      // }).then(res => {
      //   setLoading(false)
      //   if (res.data.success) {
      //     setModal(true)
      //   }
      //   if (!res.data.success) {
      //     addToast(res.data.message, {
      //       appearance: 'error',
      //       autoDismiss: true
      //     })
      //   }
      // }).catch(err => {
      //   setLoading(false)
      //   if (err.response) {
      //     addToast(err.response.status, {
      //       appearance: 'error',
      //       autoDismiss: true
      //     })
      //   }
      // })
    }
  };

  var firstStep = function firstStep(codeVal) {
    setLoading(true);
    var object = {
      fio: formData.fio,
      phone: (0,_defaults_extraFunction__WEBPACK_IMPORTED_MODULE_5__.replaceDate)(formData.phone),
      email: formData.email,
      password: formData.password,
      type: formData.type,
      code: codeVal,
      iin: binVal,
      companyName: organization.value,
      source: js_cookie__WEBPACK_IMPORTED_MODULE_7___default().get('utm_source') + '_1' || 0
    };

    if (js_cookie__WEBPACK_IMPORTED_MODULE_7___default().get('utm_source') !== undefined) {
      object.utm_source = js_cookie__WEBPACK_IMPORTED_MODULE_7___default().get('utm_source') + "_1";
      object.click_id = js_cookie__WEBPACK_IMPORTED_MODULE_7___default().get('click_id'); // object.webID = cookie.get('web_id')
    }

    axios__WEBPACK_IMPORTED_MODULE_2___default().get("".concat("https://crediter.kz/api", "/stepOne"), {
      params: object
    }).then(function (res) {
      setLoading(false);

      if (res.data.success) {
        js_cookie__WEBPACK_IMPORTED_MODULE_7___default().set('token', res.data.token, {
          expires: 1000
        });
        js_cookie__WEBPACK_IMPORTED_MODULE_7___default().set('lead_id', res.data.id);
        js_cookie__WEBPACK_IMPORTED_MODULE_7___default().set('stepjur', 2);
        next_router__WEBPACK_IMPORTED_MODULE_12___default().push('/jurservice?step=2');
        dispatch({
          type: 'AUTHENTICATING_USER'
        });
        axios__WEBPACK_IMPORTED_MODULE_2___default().post("".concat("https://crediter.kz/api", "/getData"), {
          token: res.data.token
        }).then(function (res) {
          if (res.data.success) {
            dispatch({
              type: 'SET_CURRENT_USER',
              payload: res.data
            });
          }
        });
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
    setErrors({// ...errors,
      // email: emailValid(formData.email),
      // fio: required(formData.fio),
      // phone: phoneValidation(formData.phone),
      // password: passwordValid(formData.password)
    }); // getIdentification()
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
              component: _Masks_IinMask__WEBPACK_IMPORTED_MODULE_18__.default,
              onChange: function onChange(e) {
                return binChange(e);
              },
              value: binVal
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 251,
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
              lineNumber: 259,
              columnNumber: 15
            }, _this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_9__.Field, {
              as: "select",
              type: "text",
              name: "position",
              validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_11__.required,
              placeholder: "\u0417\u0430\u043D\u0438\u043C\u0430\u0435\u043C\u0430\u044F \u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C",
              autocomplete: "off",
              children: _defaults_positions__WEBPACK_IMPORTED_MODULE_6__.positions.map(function (p) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                  value: p.value,
                  children: p.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 273,
                  columnNumber: 19
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 266,
              columnNumber: 15
            }, _this), errors.position && touched.position ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "text-danger",
              children: errors.position
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 276,
              columnNumber: 19
            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 277,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_9__.Field, {
              type: "text",
              name: "fio",
              validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_11__.acceptCirrilic,
              placeholder: "\u0424\u0418\u041E",
              className: "capitalize",
              autocomplete: "off"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 279,
              columnNumber: 15
            }, _this), " ", errors.fio && touched.fio ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "text-danger",
              children: errors.fio
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 286,
              columnNumber: 19
            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 287,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_9__.Field, {
              type: "text",
              name: "email",
              validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_11__.emailValid,
              placeholder: "Email",
              autocomplete: "off"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 300,
              columnNumber: 15
            }, _this), " ", errors.email && touched.email ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "text-danger",
              children: errors.email
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 306,
              columnNumber: 19
            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 307,
              columnNumber: 19
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_9__.Field, {
              type: "password",
              name: "password",
              validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_11__.passwordValid,
              placeholder: "\u041F\u0440\u0438\u0434\u0443\u043C\u0430\u0439\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C",
              autocomplete: "off"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 309,
              columnNumber: 15
            }, _this), " ", errors.password && touched.password ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "text-danger",
              children: errors.password
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 315,
              columnNumber: 19
            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 316,
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
                  lineNumber: 327,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 326,
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
                  lineNumber: 330,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                  children: ["\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0448\u0430\u0433", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 336,
                    columnNumber: 35
                  }, _this), "\u0434\u0430\u0441\u0442 50% \u0441\u043A\u0438\u0434\u043A\u0438"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 336,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 329,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 325,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 250,
            columnNumber: 13
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 236,
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
        lineNumber: 344,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 234,
    columnNumber: 5
  }, _this);
};

_s(FirstStep, "PbYb2nfwumoJmfGjO+4MzcCYHsE=", false, function () {
  return [react_toast_notifications__WEBPACK_IMPORTED_MODULE_8__.useToasts, react_redux__WEBPACK_IMPORTED_MODULE_10__.useDispatch];
});

_c = FirstStep;

var FirstReg = function FirstReg(_ref3) {
  var setLoading = _ref3.setLoading;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toast_notifications__WEBPACK_IMPORTED_MODULE_8__.ToastProvider, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FirstStep, {
      setLoading: setLoading
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 361,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 360,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRzZXJ2aWNlL0ZpcnN0U3RlcEp1ci5qcyJdLCJuYW1lcyI6WyJGaXJzdFN0ZXAiLCJzZXRMb2FkaW5nIiwidXNlVG9hc3RzIiwiYWRkVG9hc3QiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU3RhdGUiLCJlbWFpbCIsInBob25lIiwiZmlvIiwicGFzc3dvcmQiLCJ0eXBlIiwicG9zaXRpb24iLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwiY29kZUVycm9yIiwic2V0Q29kZUVycm9yIiwiYmluVmFsIiwic2V0QmluIiwidmFsdWUiLCJsb2FkaW5nIiwib3JnYW5pemF0aW9uIiwic2V0T3JnYW5pemF0aW9uIiwibW9kYWwiLCJzZXRNb2RhbCIsImNsb3NlTW9kYWwiLCJ1c2VFZmZlY3QiLCJmb3JtIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsSW50b1ZpZXciLCJibG9jayIsImJlaGF2aW9yIiwiYmluQ2hhbmdlIiwiZSIsInZhbCIsInRhcmdldCIsInJlcGxhY2UiLCJsZW5ndGgiLCJheGlvcyIsImhlYWRlcnMiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImNvbnRlbnQiLCJzZXRUaW1lb3V0IiwibmFtZSIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsImNvZGUiLCJzZXRDb2RlIiwiZ2V0SWRlbnRpZmljYXRpb24iLCJ2YWx1ZXMiLCJ2YWxpZGFnZSIsImlpbiIsInN3YWwiLCJmaXJzdFN0ZXAiLCJjb2RlVmFsIiwib2JqZWN0IiwicmVwbGFjZURhdGUiLCJjb21wYW55TmFtZSIsInNvdXJjZSIsImNvb2tpZSIsInVuZGVmaW5lZCIsInV0bV9zb3VyY2UiLCJjbGlja19pZCIsInByb2Nlc3MiLCJwYXJhbXMiLCJzdWNjZXNzIiwidG9rZW4iLCJleHBpcmVzIiwiaWQiLCJSb3V0ZXIiLCJwYXlsb2FkIiwibWVzc2FnZSIsImZpbmFsRXJyIiwiYXBwZWFyYW5jZSIsImF1dG9EaXNtaXNzIiwib25TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsIm9uQ2hhbmdlIiwidG91Y2hlZCIsIklpbk1hc2siLCJyZXF1aXJlZCIsInBvc2l0aW9ucyIsInAiLCJhY2NlcHRDaXJyaWxpYyIsImVtYWlsVmFsaWQiLCJwYXNzd29yZFZhbGlkIiwiaGFuZGxlRm9jdXMiLCJGaXJzdFJlZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQWtCO0FBQUE7O0FBQUEsTUFBaEJDLFVBQWdCLFFBQWhCQSxVQUFnQjs7QUFBQSxtQkFDZkMsb0VBQVMsRUFETTtBQUFBLE1BQzNCQyxRQUQyQixjQUMzQkEsUUFEMkI7O0FBRWxDLE1BQU1DLFFBQVEsR0FBR0MseURBQVcsRUFBNUI7O0FBRmtDLGtCQUlqQkMsK0NBQVEsQ0FBQztBQUN4QkMsU0FBSyxFQUFFLEVBRGlCO0FBRXhCQyxTQUFLLEVBQUUsRUFGaUI7QUFHeEJDLE9BQUcsRUFBRSxFQUhtQjtBQUl4QkMsWUFBUSxFQUFFLEVBSmM7QUFLeEJDLFFBQUksRUFBRSxTQUxrQjtBQU14QkMsWUFBUSxFQUFFO0FBTmMsR0FBRCxDQUpTO0FBQUEsTUFHM0JDLFFBSDJCO0FBQUEsTUFJaENDLFdBSmdDOztBQUFBLG1CQWFuQlIsK0NBQVEsQ0FBQztBQUFDQyxTQUFLLEVBQUUsRUFBUjtBQUFZQyxTQUFLLEVBQUUsRUFBbkI7QUFBdUJDLE9BQUcsRUFBRSxFQUE1QjtBQUFnQ0MsWUFBUSxFQUFFO0FBQTFDLEdBQUQsQ0FiVztBQUFBLE1BWTNCSyxNQVoyQjtB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QUtELENBTkQ7O01BQU02RixRO0FBUU4sK0RBQWVBLFFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvanVyc2VydmljZS45ZTE4ZTkyNTVjZWJkNmU0NDMzOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29uc3QgRmlyc3RTdGVwID0gKCkgPT4geyAgIHJldHVybiggICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtX3JlZ2lzdGVyJz5cclxuLy8gPGZvcm0+ICAgICAgICAgPGlucHV0IHR5cGU9J251bWJlcicgbmFtZT0nYmluJyBwbGFjZWhvbGRlcj0n0JHQmNCdJyAvPiA8aW5wdXRcclxuLy8gdHlwZT0ndGV4dCcgZGlzYWJsZWQgbmFtZT0nb3JnYW5pemF0aW9uJyBwbGFjZWhvbGRlcj0nJyAvPiA8aW5wdXQgdHlwZT0ndGV4dCdcclxuLy8gbmFtZT0ncG9zaXRpb24nIHBsYWNlaG9sZGVyPSfQl9Cw0L3QuNC80LDQtdC80LDRjyDQtNC+0LvQttC90L7RgdGC0YwnIC8+ICAgIDxpbnB1dCB0eXBlPSd0ZXh0J1xyXG4vLyBuYW1lPSdmaW8nIHBsYWNlaG9sZGVyPSfQpNCw0LzQuNC70LjRjyDQmNC80Y8nIC8+ICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnXHJcbi8vIG5hbWU9J3Bob25lJyBwbGFjZWhvbGRlcj0n0KLQtdC70LXRhNC+0L0nIC8+ICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIG5hbWU9J2VtYWlsJ1xyXG4vLyBwbGFjZWhvbGRlcj0nRW1haWwnIC8+ICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0nc2luZ2xlYnRuJyB0eXBlPSdidXR0b24nXHJcbi8vIGNsYXNzTmFtZT0nYnV0dG9uJyB2YWx1ZT0n0J7RgtC/0YDQsNCy0LjRgtGMJyAvPiAgICAgICA8L2Zvcm0+IDwvZGl2PiAgICkgfSBleHBvcnRcclxuLy8gZGVmYXVsdCBGaXJzdFN0ZXBcclxuXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENvZGVNb2RhbCBmcm9tICcuLi9zaGFyZWQvQ29kZU1vZGFsJ1xyXG5pbXBvcnQge2hhbmRsZUZvY3VzLCByZXBsYWNlRGF0ZX0gZnJvbSAnLi4vLi4vZGVmYXVsdHMvZXh0cmFGdW5jdGlvbidcclxuaW1wb3J0IHtwb3NpdGlvbnN9IGZyb20gJy4uLy4uL2RlZmF1bHRzL3Bvc2l0aW9ucydcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnXHJcbmltcG9ydCB7VG9hc3RQcm92aWRlciwgdXNlVG9hc3RzfSBmcm9tICdyZWFjdC10b2FzdC1ub3RpZmljYXRpb25zJ1xyXG5pbXBvcnQge0Zvcm1paywgRm9ybSwgRmllbGR9IGZyb20gJ2Zvcm1payc7XHJcbmltcG9ydCB7dXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHtcclxuICBlbWFpbFZhbGlkLFxyXG4gIHJlcXVpcmVkLFxyXG4gIHBob25lVmFsaWRhdGlvbixcclxuICBwYXNzd29yZFZhbGlkLFxyXG4gIGFjY2VwdENpcnJpbGljLFxyXG4gIHBob25lQ2hlY2ssXHJcbiAgaWluVmFsaWRhdGlvblxyXG59IGZyb20gJy4uLy4uL2RlZmF1bHRzL3ZhbGlkYXRpb25zJ1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL2xvYWRlci9Mb2FkZXInXHJcbmltcG9ydCB7dmFsaWRhZ2V9IGZyb20gJy4uLy4uL2RlZmF1bHRzL2lpblZhbGlkQWdlJ1xyXG5pbXBvcnQgc3dhbCBmcm9tICdzd2VldGFsZXJ0J1xyXG5pbXBvcnQgTG9hZGVyVGV4dCBmcm9tICcuLi9zaGFyZWQvTG9hZGVyVGV4dCdcclxuaW1wb3J0IFBob25lTWFzayBmcm9tICcuLi9NYXNrcy9QaG9uZU1hc2snXHJcbmltcG9ydCBJaW5NYXNrIGZyb20gJy4uL01hc2tzL0lpbk1hc2snXHJcblxyXG5jb25zdCBGaXJzdFN0ZXAgPSAoe3NldExvYWRpbmd9KSA9PiB7XHJcbiAgY29uc3Qge2FkZFRvYXN0fSA9IHVzZVRvYXN0cygpXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgY29uc3QgW2Zvcm1EYXRhLFxyXG4gICAgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgZW1haWw6ICcnLFxyXG4gICAgcGhvbmU6ICcnLFxyXG4gICAgZmlvOiAnJyxcclxuICAgIHBhc3N3b3JkOiAnJyxcclxuICAgIHR5cGU6ICfQrtGAINC70LjRhtC+JyxcclxuICAgIHBvc2l0aW9uOiAnMSdcclxuICB9KVxyXG4gIGNvbnN0IFtlcnJvcnMsXHJcbiAgICBzZXRFcnJvcnNdID0gdXNlU3RhdGUoe2VtYWlsOiAnJywgcGhvbmU6ICcnLCBmaW86ICcnLCBwYXNzd29yZDogJyd9KVxyXG4gIGNvbnN0IFtjb2RlRXJyb3IsXHJcbiAgICBzZXRDb2RlRXJyb3JdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW2JpblZhbCxcclxuICAgIHNldEJpbl0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbb3JnYW5pemF0aW9uLFxyXG4gICAgc2V0T3JnYW5pemF0aW9uXSA9IHVzZVN0YXRlKHt2YWx1ZTogJycsIHR5cGU6IGZhbHNlLCBsb2FkaW5nOiBmYWxzZX0pXHJcbiAgY29uc3QgW21vZGFsLFxyXG4gICAgc2V0TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRNb2RhbChmYWxzZSlcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB2YXIgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX3JlZ2lzdGVyJyk7XHJcbiAgICBmb3JtLnNjcm9sbEludG9WaWV3KHtibG9jazogJ2NlbnRlcicsIGJlaGF2aW9yOiAnc21vb3RoJ30pXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IGJpbkNoYW5nZSA9IGUgPT4ge1xyXG4gICAgY29uc3QgdmFsID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICBjb25zdCB2YWx1ZSA9IHZhbFxyXG4gICAgICA/IHZhbC5yZXBsYWNlKC8gL2csIFwiXCIpXHJcbiAgICAgIDogJydcclxuICAgIHNldEJpbihlLnRhcmdldC52YWx1ZSlcclxuICAgIC8vIGlmKHZhbHVlLmxlbmd0aCA9PT0gMTIpIHtcclxuICAgIC8vIGF4aW9zLmdldChgaHR0cHM6Ly9hcGkubW9uZXktbWVuLmt6L2FwaS90ZXN0S29tcHJhP2Jpbj0ke3ZhbHVlfWApIC50aGVuKHJlcz0+XHJcbiAgICAvLyB7ICAgICAgIHNldE9yZ2FuaXphdGlvbihyZXMuZGF0YS5jb250ZW50WzBdLm5hbWUpICAgICB9KSB9XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdmFsdWUgPSBiaW5WYWxcclxuICAgICAgPyBiaW5WYWwucmVwbGFjZSgvIC9nLCBcIlwiKVxyXG4gICAgICA6ICcnXHJcbiAgICBpZiAodmFsdWUubGVuZ3RoID09PSAxMikge1xyXG4gICAgICBzZXRPcmdhbml6YXRpb24oe1xyXG4gICAgICAgIC4uLm9yZ2FuaXphdGlvbixcclxuICAgICAgICB0eXBlOiB0cnVlLFxyXG4gICAgICAgIHZhbHVlOiAn0JfQsNCz0YDRg9C30LrQsC4uLicsXHJcbiAgICAgICAgbG9hZGluZzogdHJ1ZVxyXG4gICAgICB9KVxyXG4gICAgICBheGlvc1xyXG4gICAgICAgIC5nZXQoYGh0dHBzOi8vYXBpLm1vbmV5LW1lbi5rei9hcGkvdGVzdEtvbXByYT9iaW49JHt2YWx1ZX1gLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG5cclxuICAgICAgICAgIGlmIChyZXMuZGF0YS5jb250ZW50Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICBzZXRPcmdhbml6YXRpb24oe3ZhbHVlOiAn0J/QvtC20LDQu9GD0LnRgdGC0LAg0LLQstC10LTQuNGC0LUg0L/RgNCw0LLQuNC70YzQvdGL0Lkg0JHQmNCdJywgdHlwZTogZmFsc2UsIGxvYWRpbmc6IGZhbHNlfSlcclxuICAgICAgICAgICAgfSwgMTAwMClcclxuXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRPcmdhbml6YXRpb24oe3ZhbHVlOiByZXMuZGF0YS5jb250ZW50WzBdLm5hbWUsIHR5cGU6IHRydWUsIGxvYWRpbmc6IGZhbHNlfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgICAgaWYgKGVyci5yZXNwb25zZSkge31cclxuICAgICAgICAgIHNldE9yZ2FuaXphdGlvbih7dmFsdWU6ICfQn9C+0LbQsNC70YPQudGB0YLQsCDQstCy0LXQtNC40YLQtSDQv9GA0LDQstC40LvRjNC90YvQuSDQkdCY0J0nLCB0eXBlOiBmYWxzZSwgbG9hZGluZzogZmFsc2V9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRPcmdhbml6YXRpb24oe3ZhbHVlOiAnJywgdHlwZTogZmFsc2UsIGxvYWRpbmc6IGZhbHNlfSlcclxuICAgIH1cclxuICB9LCBbYmluVmFsXSlcclxuICBjb25zdCBbY29kZSxcclxuICAgIHNldENvZGVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IGdldElkZW50aWZpY2F0aW9uID0gKHZhbHVlcykgPT4ge1xyXG4gICAgaWYgKCF2YWxpZGFnZSh2YWx1ZXMuaWluKSkge1xyXG4gICAgICBzd2FsKFwiT29wcyFcIiwgYNCY0LfQstC40L3QuNGC0LUsINGD0YHQu9GD0LPQsCDQvtGB0YPRidC10YHRgtCy0LvRj9C10YLRgdGPINC70LjRhtCw0Lwg0LTQvtGB0YLQuNCz0YjQuNC1IDE4INC70LXRgi5gLCBcImluZm9cIik7XHJcbiAgICB9XHJcbiAgICBpZiAob3JnYW5pemF0aW9uLnR5cGUgPT09IGZhbHNlICYmIGJpblZhbC5sZW5ndGggIT09IDEyKSB7XHJcbiAgICAgIHNldE9yZ2FuaXphdGlvbih7dmFsdWU6ICfQn9C+0LbQsNC70YPQudGB0YLQsCDQstCy0LXQtNC40YLQtSDQv9GA0LDQstC40LvRjNC90YvQuSDQkdCY0J0nLCB0eXBlOiBmYWxzZX0pXHJcbiAgICB9XHJcbiAgICBpZiAob3JnYW5pemF0aW9uLnR5cGUgPT09IHRydWUgJiYgb3JnYW5pemF0aW9uLnZhbHVlKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlcylcclxuICAgICAgLy8gc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgICAvLyBzZXRGb3JtRGF0YSh2YWx1ZXMpXHJcbiAgICAgIC8vIGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vaWRlbnRpZmljYXRpb25gLCB7XHJcbiAgICAgIC8vICAgcGFyYW1zOiB7XHJcbiAgICAgIC8vICAgICBmaW86IHZhbHVlcy5maW8sXHJcbiAgICAgIC8vICAgICBwaG9uZTogcmVwbGFjZURhdGUodmFsdWVzLnBob25lKSxcclxuICAgICAgLy8gICAgIGVtYWlsOiB2YWx1ZXMuZW1haWwsXHJcbiAgICAgIC8vICAgICBwYXNzd29yZDogdmFsdWVzLnBhc3N3b3JkLFxyXG4gICAgICAvLyAgICAgdHlwZTogdmFsdWVzLnR5cGUsXHJcbiAgICAgIC8vICAgICBpaW46IGJpblZhbCxcclxuICAgICAgLy8gICAgIHNvdXJjZTogJ25hc2hjb21wYW55Lmt6J1xyXG4gICAgICAvLyAgIH1cclxuICAgICAgLy8gfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAvLyAgIHNldExvYWRpbmcoZmFsc2UpXHJcblxyXG4gICAgICAvLyAgIGlmIChyZXMuZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgIC8vICAgICBzZXRNb2RhbCh0cnVlKVxyXG5cclxuICAgICAgLy8gICB9XHJcbiAgICAgIC8vICAgaWYgKCFyZXMuZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgIC8vICAgICBhZGRUb2FzdChyZXMuZGF0YS5tZXNzYWdlLCB7XHJcbiAgICAgIC8vICAgICAgIGFwcGVhcmFuY2U6ICdlcnJvcicsXHJcbiAgICAgIC8vICAgICAgIGF1dG9EaXNtaXNzOiB0cnVlXHJcbiAgICAgIC8vICAgICB9KVxyXG4gICAgICAvLyAgIH1cclxuICAgICAgLy8gfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgLy8gICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAvLyAgIGlmIChlcnIucmVzcG9uc2UpIHtcclxuICAgICAgLy8gICAgIGFkZFRvYXN0KGVyci5yZXNwb25zZS5zdGF0dXMsIHtcclxuICAgICAgLy8gICAgICAgYXBwZWFyYW5jZTogJ2Vycm9yJyxcclxuICAgICAgLy8gICAgICAgYXV0b0Rpc21pc3M6IHRydWVcclxuICAgICAgLy8gICAgIH0pXHJcbiAgICAgIC8vICAgfVxyXG4gICAgICAvLyB9KVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGNvbnN0IGZpcnN0U3RlcCA9IChjb2RlVmFsKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICBjb25zdCBvYmplY3QgPSB7XHJcbiAgICAgIGZpbzogZm9ybURhdGEuZmlvLFxyXG4gICAgICBwaG9uZTogcmVwbGFjZURhdGUoZm9ybURhdGEucGhvbmUpLFxyXG4gICAgICBlbWFpbDogZm9ybURhdGEuZW1haWwsXHJcbiAgICAgIHBhc3N3b3JkOiBmb3JtRGF0YS5wYXNzd29yZCxcclxuICAgICAgdHlwZTogZm9ybURhdGEudHlwZSxcclxuICAgICAgY29kZTogY29kZVZhbCxcclxuICAgICAgaWluOiBiaW5WYWwsXHJcbiAgICAgIGNvbXBhbnlOYW1lOiBvcmdhbml6YXRpb24udmFsdWUsXHJcbiAgICAgIHNvdXJjZTogY29va2llLmdldCgndXRtX3NvdXJjZScpICsgJ18xJyB8fCAnbmFzaGNvbXBhbnkua3onXHJcbiAgICB9XHJcbiAgICBpZiAoY29va2llLmdldCgndXRtX3NvdXJjZScpICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgb2JqZWN0LnV0bV9zb3VyY2UgPSBjb29raWUuZ2V0KCd1dG1fc291cmNlJykgKyBcIl8xXCJcclxuICAgICAgb2JqZWN0LmNsaWNrX2lkID0gY29va2llLmdldCgnY2xpY2tfaWQnKVxyXG4gICAgICAvLyBvYmplY3Qud2ViSUQgPSBjb29raWUuZ2V0KCd3ZWJfaWQnKVxyXG4gICAgfVxyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vc3RlcE9uZWAsIHtwYXJhbXM6IG9iamVjdH0pXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuXHJcbiAgICAgICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgIGNvb2tpZS5zZXQoJ3Rva2VuJywgcmVzLmRhdGEudG9rZW4sIHtleHBpcmVzOiAxMDAwfSlcclxuICAgICAgICAgIGNvb2tpZS5zZXQoJ2xlYWRfaWQnLCByZXMuZGF0YS5pZClcclxuICAgICAgICAgIGNvb2tpZS5zZXQoJ3N0ZXBqdXInLCAyKVxyXG4gICAgICAgICAgUm91dGVyLnB1c2goJy9qdXJzZXJ2aWNlP3N0ZXA9MicpXHJcbiAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ0FVVEhFTlRJQ0FUSU5HX1VTRVInfSlcclxuICAgICAgICAgIGF4aW9zLnBvc3QoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L2dldERhdGFgLCB7dG9rZW46IHJlcy5kYXRhLnRva2VufSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzPT4ge1xyXG4gICAgICAgICAgICAgIGlmKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnU0VUX0NVUlJFTlRfVVNFUicsIHBheWxvYWQ6IHJlcy5kYXRhfSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcmVzLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgc2V0Q29kZUVycm9yKHJlcy5kYXRhLm1lc3NhZ2UpXHJcbiAgICAgICAgICBhZGRUb2FzdChmaW5hbEVyciwge1xyXG4gICAgICAgICAgICBhcHBlYXJhbmNlOiAnZXJyb3InLFxyXG4gICAgICAgICAgICBhdXRvRGlzbWlzczogdHJ1ZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHNldEVycm9ycyh7XHJcbiAgICAgIC8vIC4uLmVycm9ycyxcclxuICAgICAgLy8gZW1haWw6IGVtYWlsVmFsaWQoZm9ybURhdGEuZW1haWwpLFxyXG4gICAgICAvLyBmaW86IHJlcXVpcmVkKGZvcm1EYXRhLmZpbyksXHJcbiAgICAgIC8vIHBob25lOiBwaG9uZVZhbGlkYXRpb24oZm9ybURhdGEucGhvbmUpLFxyXG4gICAgICAvLyBwYXNzd29yZDogcGFzc3dvcmRWYWxpZChmb3JtRGF0YS5wYXNzd29yZClcclxuICAgIH0pXHJcblxyXG4gICAgLy8gZ2V0SWRlbnRpZmljYXRpb24oKVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25DaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgbmFtZSA9IGUudGFyZ2V0Lm5hbWU7XHJcbiAgICBzZXRGb3JtRGF0YSh7XHJcbiAgICAgIC4uLmZvcm1EYXRhLFxyXG4gICAgICBbbmFtZV06IGUudGFyZ2V0LnZhbHVlXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtX3JlZ2lzdGVyJz5cclxuICAgICAgICA8Rm9ybWlrXHJcbiAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7XHJcbiAgICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgICBwb3NpdGlvbjogJzEnLFxyXG4gICAgICAgICAgcGhvbmU6ICcnLFxyXG4gICAgICAgICAgZmlvOiAnJyxcclxuICAgICAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgICAgIHR5cGU6ICfQrtGAINC70LjRhtC+JyxcclxuICAgICAgICAgIGlpbjogJydcclxuICAgICAgICB9fVxyXG4gICAgICAgICAgb25TdWJtaXQ9eyh2YWx1ZXMpID0+IHtcclxuICAgICAgICAgIGdldElkZW50aWZpY2F0aW9uKHZhbHVlcylcclxuICAgICAgICB9fT5cclxuICAgICAgICAgIHsoe2Vycm9ycywgdG91Y2hlZH0pID0+IChcclxuICAgICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdpaW4nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSfQkdCY0J0nXHJcbiAgICAgICAgICAgICAgICB0eXBlPSd0ZWwnXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0lpbk1hc2t9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBiaW5DaGFuZ2UoZSl9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17YmluVmFsfS8+XHJcbiAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17KG9yZ2FuaXphdGlvbi50eXBlID09PSBmYWxzZSAmJiBvcmdhbml6YXRpb24udmFsdWUpICYmICdkaXNhYmxlZF9lcnJvciB0ZXh0LWRhbmdlcid9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17b3JnYW5pemF0aW9uLnZhbHVlfSAgXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdjb21wYW55TmFtZSdcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSfQndCw0LfQstCw0L3QuNC1INCe0YDQs9Cw0L3QuNC30LDRhtC40LgnLz4gey8qIDxpbnB1dCB0eXBlPSd0ZXh0JyBjbGFzc05hbWU9eyhvcmdhbml6YXRpb24udHlwZSA9PT0gZmFsc2UgJiYgb3JnYW5pemF0aW9uLnZhbHVlKSAmJiAnZGlzYWJsZWRfZXJyb3InfSB2YWx1ZT17b3JnYW5pemF0aW9uLnZhbHVlfSBkaXNhYmxlZCBuYW1lPSdvcmdhbml6YXRpb24nIHBsYWNlaG9sZGVyPSfQndCw0LfQstCw0L3QuNC1INCe0YDQs9Cw0L3QuNC30LDRhtC40LgnIC8+ICovfVxyXG4gICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgYXM9J3NlbGVjdCdcclxuICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdwb3NpdGlvbidcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlPXtyZXF1aXJlZH1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSfQl9Cw0L3QuNC80LDQtdC80LDRjyDQtNC+0LvQttC90L7RgdGC0YwnXHJcbiAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9J29mZic+e3Bvc2l0aW9ucy5tYXAocCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e3AudmFsdWV9PntwLm5hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICApKX08L0ZpZWxkPlxyXG4gICAgICAgICAgICAgIHsoZXJyb3JzLnBvc2l0aW9uICYmIHRvdWNoZWQucG9zaXRpb24pXHJcbiAgICAgICAgICAgICAgICA/IDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPntlcnJvcnMucG9zaXRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgOiA8cCBjbGFzc05hbWU9Jyc+PC9wPn1cclxuXHJcbiAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgbmFtZT0nZmlvJ1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU9e2FjY2VwdENpcnJpbGljfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J9Ck0JjQnidcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nY2FwaXRhbGl6ZSdcclxuICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT0nb2ZmJy8+IHsoZXJyb3JzLmZpbyAmJiB0b3VjaGVkLmZpbylcclxuICAgICAgICAgICAgICAgID8gPHAgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+e2Vycm9ycy5maW99PC9wPlxyXG4gICAgICAgICAgICAgICAgOiA8cCBjbGFzc05hbWU9Jyc+PC9wPn1cclxuXHJcbiAgICAgICAgICAgICAgey8qIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgbmFtZT0ncGhvbmUnXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSfQotC10LvQtdGE0L7QvSDQvdC+0LzQtdGAJ1xyXG4gICAgICAgICAgICAgICAgdHlwZT0ndGVsJ1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU9e3Bob25lVmFsaWRhdGlvbn1cclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17UGhvbmVNYXNrfT48L0ZpZWxkPlxyXG4gICAgICAgICAgICAgIHsoZXJyb3JzLnBob25lICYmIHRvdWNoZWQucGhvbmUpXHJcbiAgICAgICAgICAgICAgICA/IDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPntlcnJvcnMucGhvbmV9PC9wPlxyXG4gICAgICAgICAgICAgICAgOiA8cCBjbGFzc05hbWU9Jyc+PC9wPn0gKi99XHJcblxyXG4gICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgIG5hbWU9J2VtYWlsJ1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU9e2VtYWlsVmFsaWR9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW1haWwnXHJcbiAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9J29mZicvPiB7KGVycm9ycy5lbWFpbCAmJiB0b3VjaGVkLmVtYWlsKVxyXG4gICAgICAgICAgICAgICAgPyA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz57ZXJyb3JzLmVtYWlsfTwvcD5cclxuICAgICAgICAgICAgICAgIDogPHAgY2xhc3NOYW1lPScnPjwvcD59XHJcblxyXG4gICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdwYXNzd29yZCdcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlPXtwYXNzd29yZFZhbGlkfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J9Cf0YDQuNC00YPQvNCw0LnRgtC1INC/0LDRgNC+0LvRjCdcclxuICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT0nb2ZmJy8+IHsoZXJyb3JzLnBhc3N3b3JkICYmIHRvdWNoZWQucGFzc3dvcmQpXHJcbiAgICAgICAgICAgICAgICA/IDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPntlcnJvcnMucGFzc3dvcmR9PC9wPlxyXG4gICAgICAgICAgICAgICAgOiA8cCBjbGFzc05hbWU9Jyc+PC9wPn1cclxuICAgICAgICAgICAgICB7LyogPEZpZWxkXHJcbiAgICAgICAgICAgICAgICB0eXBlPSdwYXNzd29yZCdcclxuICAgICAgICAgICAgICAgIG5hbWU9J3Bhc3N3b3JkJ1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU9e3Bhc3N3b3JkVmFsaWR9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0n0J/RgNC40LTRg9C80LDQudGC0LUg0L/QsNGA0L7Qu9GMJ1xyXG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPSdvZmYnLz5cclxuICAgICAgICAgICAgICAgICB7KGVycm9ycy5wYXNzd29yZCAmJiB0b3VjaGVkLnBhc3N3b3JkKSA/IDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPntlcnJvcnMucGFzc3dvcmR9PC9wPiA6ICA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz48L3A+fSAqL31cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpcnN0c3RlcF9iYW5uZXInPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpcnN0c3RlcF9iYW5uZXItLWltZyc+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PSdpbWFnZScgY2xhc3NOYW1lPSdmaXJzdHN0ZXAnIHNyYz0nL2ltZy9mb3JtL2ZpcnN0c3RlcC5zdmcnLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpcnN0c3RlcF9iYW5uZXItLWJ1dHRvbic+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2luZ2xlYnRuJ1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2J1dHRvbidcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVGb2N1cygpfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPSfQpdC+0YfRgyDRgdC60LjQtNC60LgnLz5cclxuICAgICAgICAgICAgICAgICAgPGI+0KHQu9C10LTRg9GO0YnQuNC5INGI0LDQszxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgINC00LDRgdGCIDUwJSDRgdC60LjQtNC60Lg8L2I+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Gb3JtaWs+XHJcbiAgICAgICAgPENvZGVNb2RhbFxyXG4gICAgICAgICAgaXNNb2RhbE9wZW49e21vZGFsfVxyXG4gICAgICAgICAgY2xvc2VNb2RhbD17Y2xvc2VNb2RhbH1cclxuICAgICAgICAgIGNvZGU9e2NvZGV9XHJcbiAgICAgICAgICBzZXRDb2RlPXtzZXRDb2RlfVxyXG4gICAgICAgICAgb25GaXJzdFN0ZXA9e2ZpcnN0U3RlcH1cclxuICAgICAgICAgIGVycm9yPXtjb2RlRXJyb3J9XHJcbiAgICAgICAgICBnZXRJZGVudGlmaWNhdGlvbj17Z2V0SWRlbnRpZmljYXRpb259Lz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBGaXJzdFJlZyA9ICh7c2V0TG9hZGluZ30pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFRvYXN0UHJvdmlkZXI+XHJcbiAgICAgIDxGaXJzdFN0ZXAgc2V0TG9hZGluZz17c2V0TG9hZGluZ30vPlxyXG4gICAgPC9Ub2FzdFByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlyc3RSZWciXSwic291cmNlUm9vdCI6IiJ9