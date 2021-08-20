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
              name: "phone",
              className: "form-control",
              placeholder: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D \u043D\u043E\u043C\u0435\u0440",
              type: "tel",
              validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_11__.phoneValidation,
              component: _Masks_PhoneMask__WEBPACK_IMPORTED_MODULE_17__.default
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 289,
              columnNumber: 15
            }, _this), errors.phone && touched.phone ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "text-danger",
              children: errors.phone
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 297,
              columnNumber: 19
            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 298,
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


/***/ }),

/***/ "./pages/jurservice.js":
/*!*****************************!*\
  !*** ./pages/jurservice.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_getservice_FirstStepJur__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/getservice/FirstStepJur */ "./components/getservice/FirstStepJur.js");
/* harmony import */ var _components_getservice_SecondStepJur__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/getservice/SecondStepJur */ "./components/getservice/SecondStepJur.js");
/* harmony import */ var _components_shared_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/shared/Nav */ "./components/shared/Nav.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_getservice_ThirdStep__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/getservice/ThirdStep */ "./components/getservice/ThirdStep.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_loader_Loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/loader/Loader */ "./components/loader/Loader.js");
/* harmony import */ var _components_shared_CodeModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/shared/CodeModal */ "./components/shared/CodeModal.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\job\\nashcompany\\pages\\jurservice.js",
    _this = undefined,
    _s = $RefreshSig$();












var GetService = function GetService() {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
  var step = router.query.step;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false),
      loading = _useState[0],
      setLoading = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(''),
      cookieStep = _useState2[0],
      setCookieStep = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(function () {
    setCookieStep(js_cookie__WEBPACK_IMPORTED_MODULE_7___default().get('stepjur'));
  }, [js_cookie__WEBPACK_IMPORTED_MODULE_7___default().get('stepjur')]);
  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(function () {// if(!cookie.get('stepjur')) {
    //   router.push('/jurservice')
    // }
    // if(cookie.get('stepjur') === '2') {
    //   router.push('/jurservice?step=2')
    // }
    // if(cookie.get('stepjur') === '3') {
    //   router.push('/jurservice?step=3')
    // }
  }, []); // useEffect(() => {
  //   if(cookie.get('stepjur') !== undefined && (cookie.get('lead_id')=== undefined || cookie.get('token') === undefined)){
  //     console.log('removed')
  //     cookie.remove('stepjur')
  //     cookie.remove('lead_id')
  //     cookie.remove('token')
  //     router.push('/dlya-fizicheskix-lic')
  //   }
  // },[])

  var headerClick = function headerClick(num) {
    js_cookie__WEBPACK_IMPORTED_MODULE_7___default().set("stepjur", num);
    router.push("?step=".concat(num));
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "getservice",
    children: [loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_loader_Loader__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 19
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0443\u0441\u043B\u0443\u0433\u0443 | \u042E\u0440. \u043B\u0438\u0446\u043E"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "header",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Nav__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "bg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "form_headings",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
          children: "\u0423\u0441\u043B\u0443\u0433\u0438 \u044E\u0440. \u043B\u0438\u0446\u0430\u043C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: ["\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, _this), "\u0443\u0441\u043B\u0443\u0433\u0443:"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "form_service ",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "form_header",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              onClick: function onClick() {
                return headerClick(1);
              },
              className: cookieStep === undefined ? 'active' : '',
              children: "1 \u0428\u0430\u0433"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              onCLick: function onCLick() {
                return headerClick(2);
              },
              className: cookieStep === '2' && step === '2' && 'active',
              children: "2 \u0428\u0430\u0433"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              onClick: function onClick() {
                return headerClick(3);
              },
              className: cookieStep === '3' && step === '3' && 'active',
              children: "3 \u0428\u0430\u0433"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "form_register",
          children: [js_cookie__WEBPACK_IMPORTED_MODULE_7___default().get('stepjur') === undefined && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_getservice_FirstStepJur__WEBPACK_IMPORTED_MODULE_1__.default, {
            setLoading: setLoading
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 49
          }, _this), js_cookie__WEBPACK_IMPORTED_MODULE_7___default().get('stepjur') === '2' && step === '2' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_getservice_SecondStepJur__WEBPACK_IMPORTED_MODULE_2__.default, {
            setLoading: setLoading
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 57
          }, _this), js_cookie__WEBPACK_IMPORTED_MODULE_7___default().get('stepjur') === '3' && step === '3' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_getservice_ThirdStep__WEBPACK_IMPORTED_MODULE_5__.default, {
            setLoading: setLoading
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 57
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, _this);
};

_s(GetService, "yydxgQGStowXFflCLwos08R82pU=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter];
});

_c = GetService;
/* harmony default export */ __webpack_exports__["default"] = (GetService);

var _c;

$RefreshReg$(_c, "GetService");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRzZXJ2aWNlL0ZpcnN0U3RlcEp1ci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvanVyc2VydmljZS5qcyJdLCJuYW1lcyI6WyJGaXJzdFN0ZXAiLCJzZXRMb2FkaW5nIiwidXNlVG9hc3RzIiwiYWRkVG9hc3QiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU3RhdGUiLCJlbWFpbCIsInBob25lIiwiZmlvIiwicGFzc3dvcmQiLCJ0eXBlIiwicG9zaXRpb24iLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwiY29kZUVycm9yIiwic2V0Q29kZUVycm9yIiwiYmluVmFsIiwic2V0QmluIiwidmFsdWUiLCJsb2FkaW5nIiwib3JnYW5pemF0aW9uIiwic2V0T3JnYW5pemF0aW9uIiwibW9kYWwiLCJzZXRNb2RhbCIsImNsb3NlTW9kYWwiLCJ1c2VFZmZlY3QiLCJmb3JtIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsSW50b1ZpZXciLCJibG9jayIsImJlaGF2aW9yIiwiYmluQ2hhbmdlIiwiZSIsInZhbCIsInRhcmdldCIsInJlcGxhY2UiLCJsZW5ndGgiLCJheGlvcyIsImhlYWRlcnMiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImNvbnRlbnQiLCJzZXRUaW1lb3V0IiwibmFtZSIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsImNvZGUiLCJzZXRDb2RlIiwiZ2V0SWRlbnRpZmljYXRpb24iLCJ2YWx1ZXMiLCJ2YWxpZGFnZSIsImlpbiIsInN3YWwiLCJmaXJzdFN0ZXAiLCJjb2RlVmFsIiwib2JqZWN0IiwicmVwbGFjZURhdGUiLCJjb21wYW55TmFtZSIsInNvdXJjZSIsImNvb2tpZSIsInVuZGVmaW5lZCIsInV0bV9zb3VyY2UiLCJjbGlja19pZCIsInByb2Nlc3MiLCJwYXJhbXMiLCJzdWNjZXNzIiwidG9rZW4iLCJleHBpcmVzIiwiaWQiLCJSb3V0ZXIiLCJwYXlsb2FkIiwibWVzc2FnZSIsImZpbmFsRXJyIiwiYXBwZWFyYW5jZSIsImF1dG9EaXNtaXNzIiwib25TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsIm9uQ2hhbmdlIiwidG91Y2hlZCIsIklpbk1hc2siLCJyZXF1aXJlZCIsInBvc2l0aW9ucyIsInAiLCJhY2NlcHRDaXJyaWxpYyIsInBob25lVmFsaWRhdGlvbiIsIlBob25lTWFzayIsImVtYWlsVmFsaWQiLCJwYXNzd29yZFZhbGlkIiwiaGFuZGxlRm9jdXMiLCJGaXJzdFJlZyIsIkdldFNlcnZpY2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzdGVwIiwicXVlcnkiLCJjb29raWVTdGVwIiwic2V0Q29va2llU3RlcCIsImhlYWRlckNsaWNrIiwibnVtIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQWtCO0FBQUE7O0FBQUEsTUFBaEJDLFVBQWdCLFFBQWhCQSxVQUFnQjs7QUFBQSxtQkFDZkMsb0VBQVMsRUFETTtBQUFBLE1BQzNCQyxRQUQyQixjQUMzQkEsUUFEMkI7O0FBRWxDLE1BQU1DLFFBQVEsR0FBR0MseURBQVcsRUFBNUI7O0FBRmtDLGtCQUlqQkMsK0NBQVEsQ0FBQztBQUN4QkMsU0FBSyxFQUFFLEVBRGlCO0FBRXhCQyxTQUFLLEVBQUUsRUFGaUI7QUFHeEJDLE9BQUcsRUFBRSxFQUhtQjtBQUl4QkMsWUFBUSxFQUFFLEVBSmM7QUFLeEJDLFFBQUksRUFBRSxTQUxrQjtBQU14QkMsWUFBUSxFQUFFO0FBTmMsR0FBRCxDQUpTO0FBQUEsTUFHM0JDLFFBSDJCO0FBQUEsTUFJaENDLFdBSmdDOztBQUFBLG1CQWFuQlIsK0NBQVEsQ0FBQztBQUFDQyxTQUFLLEVBQUUsRUFBUjtBQUFZQyxTQUFLLEVBQUUsRUFBbkI7QUFBdUJDLE9BQUcsRUFBRSxFQUE1QjtBQUFnQ0MsWUFBUSxFQUFFO0FBQTFDLEdBQUQsQ0FiVztBQUFBLE1BWTNCSyxNQVoyQjtBQUFBLE1BYWhDQyxTQWJnQzs7QUFBQSxtQkFlaEJWLCtDQUFRLENBQUMsRUFBRCxDQWZRO0FBQUEsTUFjM0JXLFNBZDJCO0FBQUEsTUFlaENDLFlBZmdDOztBQUFBLG1CQWlCdEJaLCtDQUFRLENBQUMsRUFBRCxDQWpCYztBQUFBLE1BZ0IzQmEsTUFoQjJCO0FBQUEsTUFpQmhDQyxNQWpCZ0M7O0FBQUEsbUJBbUJiZCwrQ0FBUSxDQUFDO0FBQUNlLFNBQUssRUFBRSxFQUFSO0FBQVlWLFFBQUksRUFBRSxLQUFsQjtBQUF5QlcsV0FBTyxFQUFFO0FBQWxDLEdBQUQsQ0FuQks7QUFBQSxNQWtCM0JDLFlBbEIyQjtBQUFBLE1BbUJoQ0MsZUFuQmdDOztBQUFBLG1CQXFCcEJsQiwrQ0FBUSxDQUFDLEtBQUQsQ0FyQlk7QUFBQSxNQW9CM0JtQixLQXBCMkI7QUFBQSxNQXFCaENDLFFBckJnQzs7QUF1QmxDLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDdkJELFlBQVEsQ0FBQyxLQUFELENBQVI7QUFDRCxHQUZEOztBQUlBRSxrREFBUyxDQUFDLFlBQU07QUFDZCxRQUFJQyxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixnQkFBdkIsQ0FBWDtBQUNBRixRQUFJLENBQUNHLGNBQUwsQ0FBb0I7QUFBQ0MsV0FBSyxFQUFFLFFBQVI7QUFBa0JDLGNBQVEsRUFBRTtBQUE1QixLQUFwQjtBQUNELEdBSFEsRUFHTixFQUhNLENBQVQ7O0FBS0EsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQUMsQ0FBQyxFQUFJO0FBQ3JCLFFBQU1DLEdBQUcsR0FBR0QsQ0FBQyxDQUFDRSxNQUFGLENBQVNqQixLQUFyQjtBQUNBLFFBQU1BLEtBQUssR0FBR2dCLEdBQUcsR0FDYkEsR0FBRyxDQUFDRSxPQUFKLENBQVksSUFBWixFQUFrQixFQUFsQixDQURhLEdBRWIsRUFGSjtBQUdBbkIsVUFBTSxDQUFDZ0IsQ0FBQyxDQUFDRSxNQUFGLENBQVNqQixLQUFWLENBQU4sQ0FMcUIsQ0FNckI7QUFDQTtBQUNBO0FBQ0QsR0FURDs7QUFXQU8sa0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTVAsS0FBSyxHQUFHRixNQUFNLEdBQ2hCQSxNQUFNLENBQUNvQixPQUFQLENBQWUsSUFBZixFQUFxQixFQUFyQixDQURnQixHQUVoQixFQUZKOztBQUdBLFFBQUlsQixLQUFLLENBQUNtQixNQUFOLEtBQWlCLEVBQXJCLEVBQXlCO0FBQ3ZCaEIscUJBQWUsaUNBQ1ZELFlBRFU7QUFFYlosWUFBSSxFQUFFLElBRk87QUFHYlUsYUFBSyxFQUFFLGFBSE07QUFJYkMsZUFBTyxFQUFFO0FBSkksU0FBZjtBQU1BbUIsc0RBQUEsdURBQ3NEcEIsS0FEdEQsR0FDK0Q7QUFDN0RxQixlQUFPLEVBQUU7QUFDUCx5Q0FBK0I7QUFEeEI7QUFEb0QsT0FEL0QsRUFNR0MsSUFOSCxDQU1RLFVBQUFDLEdBQUcsRUFBSTtBQUVYLFlBQUlBLEdBQUcsQ0FBQ0MsSUFBSixDQUFTQyxPQUFULENBQWlCTixNQUFqQixLQUE0QixDQUFoQyxFQUFtQztBQUNqQ08sb0JBQVUsQ0FBQyxZQUFNO0FBQ2Z2QiwyQkFBZSxDQUFDO0FBQUNILG1CQUFLLEVBQUUsbUNBQVI7QUFBNkNWLGtCQUFJLEVBQUUsS0FBbkQ7QUFBMERXLHFCQUFPLEVBQUU7QUFBbkUsYUFBRCxDQUFmO0FBQ0QsV0FGUyxFQUVQLElBRk8sQ0FBVjtBQUlELFNBTEQsTUFLTztBQUNMRSx5QkFBZSxDQUFDO0FBQUNILGlCQUFLLEVBQUV1QixHQUFHLENBQUNDLElBQUosQ0FBU0MsT0FBVCxDQUFpQixDQUFqQixFQUFvQkUsSUFBNUI7QUFBa0NyQyxnQkFBSSxFQUFFLElBQXhDO0FBQThDVyxtQkFBTyxFQUFFO0FBQXZELFdBQUQsQ0FBZjtBQUNEO0FBQ0YsT0FoQkgsV0FpQlMsVUFBQTJCLEdBQUcsRUFBSTtBQUNaQyxlQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjs7QUFDQSxZQUFJQSxHQUFHLENBQUNHLFFBQVIsRUFBa0IsQ0FBRTs7QUFDcEI1Qix1QkFBZSxDQUFDO0FBQUNILGVBQUssRUFBRSxtQ0FBUjtBQUE2Q1YsY0FBSSxFQUFFLEtBQW5EO0FBQTBEVyxpQkFBTyxFQUFFO0FBQW5FLFNBQUQsQ0FBZjtBQUNELE9BckJIO0FBc0JELEtBN0JELE1BNkJPO0FBQ0xFLHFCQUFlLENBQUM7QUFBQ0gsYUFBSyxFQUFFLEVBQVI7QUFBWVYsWUFBSSxFQUFFLEtBQWxCO0FBQXlCVyxlQUFPLEVBQUU7QUFBbEMsT0FBRCxDQUFmO0FBQ0Q7QUFDRixHQXBDUSxFQW9DTixDQUFDSCxNQUFELENBcENNLENBQVQ7O0FBM0NrQyxtQkFpRnJCYiwrQ0FBUSxDQUFDLEVBQUQsQ0FqRmE7QUFBQSxNQWdGM0IrQyxJQWhGMkI7QUFBQSxNQWlGaENDLE9BakZnQzs7QUFrRmxDLE1BQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsTUFBRCxFQUFZO0FBQ3BDLFFBQUksQ0FBQ0MsZ0VBQVEsQ0FBQ0QsTUFBTSxDQUFDRSxHQUFSLENBQWIsRUFBMkI7QUFDekJDLHdEQUFJLENBQUMsT0FBRCw4UkFBcUUsTUFBckUsQ0FBSjtBQUNEOztBQUNELFFBQUlwQyxZQUFZLENBQUNaLElBQWIsS0FBc0IsS0FBdEIsSUFBK0JRLE1BQU0sQ0FBQ3FCLE1BQVAsS0FBa0IsRUFBckQsRUFBeUQ7QUFDdkRoQixxQkFBZSxDQUFDO0FBQUNILGFBQUssRUFBRSxtQ0FBUjtBQUE2Q1YsWUFBSSxFQUFFO0FBQW5ELE9BQUQsQ0FBZjtBQUNEOztBQUNELFFBQUlZLFlBQVksQ0FBQ1osSUFBYixLQUFzQixJQUF0QixJQUE4QlksWUFBWSxDQUFDRixLQUEvQyxFQUFzRCxDQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRDtBQUVGLEdBN0NEOztBQStDQSxNQUFNdUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsT0FBRCxFQUFhO0FBQzdCNUQsY0FBVSxDQUFDLElBQUQsQ0FBVjtBQUNBLFFBQU02RCxNQUFNLEdBQUc7QUFDYnJELFNBQUcsRUFBRUksUUFBUSxDQUFDSixHQUREO0FBRWJELFdBQUssRUFBRXVELG9FQUFXLENBQUNsRCxRQUFRLENBQUNMLEtBQVYsQ0FGTDtBQUdiRCxXQUFLLEVBQUVNLFFBQVEsQ0FBQ04sS0FISDtBQUliRyxjQUFRLEVBQUVHLFFBQVEsQ0FBQ0gsUUFKTjtBQUtiQyxVQUFJLEVBQUVFLFFBQVEsQ0FBQ0YsSUFMRjtBQU1iMEMsVUFBSSxFQUFFUSxPQU5PO0FBT2JILFNBQUcsRUFBRXZDLE1BUFE7QUFRYjZDLGlCQUFXLEVBQUV6QyxZQUFZLENBQUNGLEtBUmI7QUFTYjRDLFlBQU0sRUFBRUMsb0RBQUEsQ0FBVyxZQUFYLElBQTJCLElBQTNCLElBQW1DLENBQWdCO0FBVDlDLEtBQWY7O0FBV0EsUUFBSUEsb0RBQUEsQ0FBVyxZQUFYLE1BQTZCQyxTQUFqQyxFQUE0QztBQUMxQ0wsWUFBTSxDQUFDTSxVQUFQLEdBQW9CRixvREFBQSxDQUFXLFlBQVgsSUFBMkIsSUFBL0M7QUFDQUosWUFBTSxDQUFDTyxRQUFQLEdBQWtCSCxvREFBQSxDQUFXLFVBQVgsQ0FBbEIsQ0FGMEMsQ0FHMUM7QUFDRDs7QUFDRHpCLG9EQUFBLFdBQ1U2Qix5QkFEVixlQUMwQztBQUFDQyxZQUFNLEVBQUVUO0FBQVQsS0FEMUMsRUFFR25CLElBRkgsQ0FFUSxVQUFBQyxHQUFHLEVBQUk7QUFDWDNDLGdCQUFVLENBQUMsS0FBRCxDQUFWOztBQUVBLFVBQUkyQyxHQUFHLENBQUNDLElBQUosQ0FBUzJCLE9BQWIsRUFBc0I7QUFDcEJOLDREQUFBLENBQVcsT0FBWCxFQUFvQnRCLEdBQUcsQ0FBQ0MsSUFBSixDQUFTNEIsS0FBN0IsRUFBb0M7QUFBQ0MsaUJBQU8sRUFBRTtBQUFWLFNBQXBDO0FBQ0FSLDREQUFBLENBQVcsU0FBWCxFQUFzQnRCLEdBQUcsQ0FBQ0MsSUFBSixDQUFTOEIsRUFBL0I7QUFDQVQsNERBQUEsQ0FBVyxTQUFYLEVBQXNCLENBQXRCO0FBQ0FVLGdFQUFBLENBQVksb0JBQVo7QUFDQXhFLGdCQUFRLENBQUM7QUFBQ08sY0FBSSxFQUFFO0FBQVAsU0FBRCxDQUFSO0FBQ0E4Qix5REFBQSxXQUFjNkIseUJBQWQsZUFBOEM7QUFBQ0csZUFBSyxFQUFFN0IsR0FBRyxDQUFDQyxJQUFKLENBQVM0QjtBQUFqQixTQUE5QyxFQUNHOUIsSUFESCxDQUNRLFVBQUFDLEdBQUcsRUFBRztBQUNWLGNBQUdBLEdBQUcsQ0FBQ0MsSUFBSixDQUFTMkIsT0FBWixFQUFxQjtBQUNuQnBFLG9CQUFRLENBQUM7QUFBQ08sa0JBQUksRUFBRSxrQkFBUDtBQUEyQmtFLHFCQUFPLEVBQUVqQyxHQUFHLENBQUNDO0FBQXhDLGFBQUQsQ0FBUjtBQUNEO0FBQ0YsU0FMSDtBQU1EOztBQUNELFVBQUksQ0FBQ0QsR0FBRyxDQUFDQyxJQUFKLENBQVMyQixPQUFkLEVBQXVCO0FBQ3JCdEQsb0JBQVksQ0FBQzBCLEdBQUcsQ0FBQ0MsSUFBSixDQUFTaUMsT0FBVixDQUFaO0FBQ0EzRSxnQkFBUSxDQUFDNEUsUUFBRCxFQUFXO0FBQ2pCQyxvQkFBVSxFQUFFLE9BREs7QUFFakJDLHFCQUFXLEVBQUU7QUFGSSxTQUFYLENBQVI7QUFJRDtBQUNGLEtBekJIO0FBMEJELEdBNUNEOztBQThDQSxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDOUMsQ0FBRCxFQUFPO0FBQ3RCQSxLQUFDLENBQUMrQyxjQUFGO0FBQ0FuRSxhQUFTLENBQUMsQ0FDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTFEsS0FBRCxDQUFULENBRnNCLENBVXRCO0FBQ0QsR0FYRDs7QUFhQSxNQUFNb0UsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ2hELENBQUQsRUFBTztBQUN0QixRQUFNWSxJQUFJLEdBQUdaLENBQUMsQ0FBQ0UsTUFBRixDQUFTVSxJQUF0QjtBQUNBbEMsZUFBVyxpQ0FDTkQsUUFETSw0SEFFUm1DLElBRlEsRUFFRFosQ0FBQyxDQUFDRSxNQUFGLENBQVNqQixLQUZSLEdBQVg7QUFJRCxHQU5EOztBQVFBLHNCQUNFO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsZUFBZjtBQUFBLDhCQUNFLDhEQUFDLDBDQUFEO0FBQ0UscUJBQWEsRUFBRTtBQUNmZCxlQUFLLEVBQUUsRUFEUTtBQUVmSyxrQkFBUSxFQUFFLEdBRks7QUFHZkosZUFBSyxFQUFFLEVBSFE7QUFJZkMsYUFBRyxFQUFFLEVBSlU7QUFLZkMsa0JBQVEsRUFBRSxFQUxLO0FBTWZDLGNBQUksRUFBRSxTQU5TO0FBT2YrQyxhQUFHLEVBQUU7QUFQVSxTQURqQjtBQVVFLGdCQUFRLEVBQUUsa0JBQUNGLE1BQUQsRUFBWTtBQUN0QkQsMkJBQWlCLENBQUNDLE1BQUQsQ0FBakI7QUFDRCxTQVpEO0FBQUEsa0JBYUc7QUFBQTs7QUFBQSxjQUFFekMsTUFBRixTQUFFQSxNQUFGO0FBQUEsY0FBVXNFLE9BQVYsU0FBVUEsT0FBVjtBQUFBLDhCQUNDLDhEQUFDLHdDQUFEO0FBQUEsb0NBQ0UsOERBQUMseUNBQUQ7QUFDRSxrQkFBSSxFQUFDLEtBRFA7QUFFRSx1QkFBUyxFQUFDLGNBRlo7QUFHRSx5QkFBVyxFQUFDLG9CQUhkO0FBSUUsa0JBQUksRUFBQyxLQUpQO0FBS0UsdUJBQVMsRUFBRUMsb0RBTGI7QUFNRSxzQkFBUSxFQUFFLGtCQUFBbEQsQ0FBQztBQUFBLHVCQUFJRCxTQUFTLENBQUNDLENBQUQsQ0FBYjtBQUFBLGVBTmI7QUFPRSxtQkFBSyxFQUFFakI7QUFQVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBU0UsOERBQUMseUNBQUQ7QUFDRSxrQkFBSSxFQUFDLE1BRFA7QUFFRSxzQkFBUSxNQUZWO0FBR0UsdUJBQVMsRUFBR0ksWUFBWSxDQUFDWixJQUFiLEtBQXNCLEtBQXRCLElBQStCWSxZQUFZLENBQUNGLEtBQTdDLElBQXVELDRCQUhwRTtBQUlFLG1CQUFLLEVBQUVFLFlBQVksQ0FBQ0YsS0FKdEI7QUFLRSxrQkFBSSxFQUFDLGFBTFA7QUFNRSx5QkFBVyxFQUFDO0FBTmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFURixvQkFnQkUsOERBQUMseUNBQUQ7QUFDRSxnQkFBRSxFQUFDLFFBREw7QUFFRSxrQkFBSSxFQUFDLE1BRlA7QUFHRSxrQkFBSSxFQUFDLFVBSFA7QUFJRSxzQkFBUSxFQUFFa0UsNERBSlo7QUFLRSx5QkFBVyxFQUFDLHFIQUxkO0FBTUUsMEJBQVksRUFBQyxLQU5mO0FBQUEsd0JBTXNCQyw4REFBQSxDQUFjLFVBQUFDLENBQUM7QUFBQSxvQ0FDakM7QUFBUSx1QkFBSyxFQUFFQSxDQUFDLENBQUNwRSxLQUFqQjtBQUFBLDRCQUF5Qm9FLENBQUMsQ0FBQ3pDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRGlDO0FBQUEsZUFBZjtBQU50QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWhCRixFQXlCSWpDLE1BQU0sQ0FBQ0gsUUFBUCxJQUFtQnlFLE9BQU8sQ0FBQ3pFLFFBQTVCLGdCQUNHO0FBQUcsdUJBQVMsRUFBQyxhQUFiO0FBQUEsd0JBQTRCRyxNQUFNLENBQUNIO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREgsZ0JBRUc7QUFBRyx1QkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkEzQk4sZUE2QkUsOERBQUMseUNBQUQ7QUFDRSxrQkFBSSxFQUFDLE1BRFA7QUFFRSxrQkFBSSxFQUFDLEtBRlA7QUFHRSxzQkFBUSxFQUFFOEUsa0VBSFo7QUFJRSx5QkFBVyxFQUFDLG9CQUpkO0FBS0UsdUJBQVMsRUFBQyxZQUxaO0FBTUUsMEJBQVksRUFBQztBQU5mO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBN0JGLE9BbUMyQjNFLE1BQU0sQ0FBQ04sR0FBUCxJQUFjNEUsT0FBTyxDQUFDNUUsR0FBdkIsZ0JBQ3BCO0FBQUcsdUJBQVMsRUFBQyxhQUFiO0FBQUEsd0JBQTRCTSxNQUFNLENBQUNOO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRG9CLGdCQUVwQjtBQUFHLHVCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXJDTixlQXVDRSw4REFBQyx5Q0FBRDtBQUNFLGtCQUFJLEVBQUMsT0FEUDtBQUVFLHVCQUFTLEVBQUMsY0FGWjtBQUdFLHlCQUFXLEVBQUMsMkVBSGQ7QUFJRSxrQkFBSSxFQUFDLEtBSlA7QUFLRSxzQkFBUSxFQUFFa0YsbUVBTFo7QUFNRSx1QkFBUyxFQUFFQyxzREFBU0E7QUFOdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkF2Q0YsRUE4Q0k3RSxNQUFNLENBQUNQLEtBQVAsSUFBZ0I2RSxPQUFPLENBQUM3RSxLQUF6QixnQkFDRztBQUFHLHVCQUFTLEVBQUMsYUFBYjtBQUFBLHdCQUE0Qk8sTUFBTSxDQUFDUDtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURILGdCQUVHO0FBQUcsdUJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBaEROLGVBa0RFLDhEQUFDLHlDQUFEO0FBQ0Usa0JBQUksRUFBQyxNQURQO0FBRUUsa0JBQUksRUFBQyxPQUZQO0FBR0Usc0JBQVEsRUFBRXFGLDhEQUhaO0FBSUUseUJBQVcsRUFBQyxPQUpkO0FBS0UsMEJBQVksRUFBQztBQUxmO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBbERGLE9BdUQyQjlFLE1BQU0sQ0FBQ1IsS0FBUCxJQUFnQjhFLE9BQU8sQ0FBQzlFLEtBQXpCLGdCQUNwQjtBQUFHLHVCQUFTLEVBQUMsYUFBYjtBQUFBLHdCQUE0QlEsTUFBTSxDQUFDUjtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURvQixnQkFFcEI7QUFBRyx1QkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkF6RE4sZUEyREUsOERBQUMseUNBQUQ7QUFDRSxrQkFBSSxFQUFDLFVBRFA7QUFFRSxrQkFBSSxFQUFDLFVBRlA7QUFHRSxzQkFBUSxFQUFFdUYsaUVBSFo7QUFJRSx5QkFBVyxFQUFDLG1HQUpkO0FBS0UsMEJBQVksRUFBQztBQUxmO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBM0RGLE9BZ0UyQi9FLE1BQU0sQ0FBQ0wsUUFBUCxJQUFtQjJFLE9BQU8sQ0FBQzNFLFFBQTVCLGdCQUNwQjtBQUFHLHVCQUFTLEVBQUMsYUFBYjtBQUFBLHdCQUE0QkssTUFBTSxDQUFDTDtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURvQixnQkFFcEI7QUFBRyx1QkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFsRU4sZUEyRUU7QUFBSyx1QkFBUyxFQUFDLGtCQUFmO0FBQUEsc0NBQ0U7QUFBSyx5QkFBUyxFQUFDLHVCQUFmO0FBQUEsdUNBQ0U7QUFBSyxxQkFBRyxFQUFDLE9BQVQ7QUFBaUIsMkJBQVMsRUFBQyxXQUEzQjtBQUF1QyxxQkFBRyxFQUFDO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBSUU7QUFBSyx5QkFBUyxFQUFDLDBCQUFmO0FBQUEsd0NBQ0U7QUFDRSwyQkFBUyxFQUFDLFdBRFo7QUFFRSxzQkFBSSxFQUFDO0FBRlAsMkpBR1ksUUFIWix5SUFJVztBQUFBLHlCQUFNcUYsb0VBQVcsRUFBakI7QUFBQSxpQkFKWCx1SUFLUSwrREFMUjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBT0U7QUFBQSx1SEFBZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBM0VGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERDtBQUFBO0FBYkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBNkdFLDhEQUFDLHNEQUFEO0FBQ0UsbUJBQVcsRUFBRXRFLEtBRGY7QUFFRSxrQkFBVSxFQUFFRSxVQUZkO0FBR0UsWUFBSSxFQUFFMEIsSUFIUjtBQUlFLGVBQU8sRUFBRUMsT0FKWDtBQUtFLG1CQUFXLEVBQUVNLFNBTGY7QUFNRSxhQUFLLEVBQUUzQyxTQU5UO0FBT0UseUJBQWlCLEVBQUVzQztBQVByQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBN0dGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTJIRCxDQS9URDs7R0FBTXZELFM7VUFDZUUsZ0UsRUFDRkcscUQ7OztLQUZiTCxTOztBQWlVTixJQUFNZ0csUUFBUSxHQUFHLFNBQVhBLFFBQVcsUUFBa0I7QUFBQSxNQUFoQi9GLFVBQWdCLFNBQWhCQSxVQUFnQjtBQUNqQyxzQkFDRSw4REFBQyxvRUFBRDtBQUFBLDJCQUNFLDhEQUFDLFNBQUQ7QUFBVyxnQkFBVSxFQUFFQTtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBS0QsQ0FORDs7TUFBTStGLFE7QUFRTiwrREFBZUEsUUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN1dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFBQTs7QUFDdkIsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUR1QixNQUVoQkMsSUFGZ0IsR0FFUkYsTUFBTSxDQUFDRyxLQUZDLENBRWhCRCxJQUZnQjs7QUFBQSxrQkFJTzlGLCtDQUFRLENBQUMsS0FBRCxDQUpmO0FBQUEsTUFJaEJnQixPQUpnQjtBQUFBLE1BSVByQixVQUpPOztBQUFBLG1CQUthSywrQ0FBUSxDQUFDLEVBQUQsQ0FMckI7QUFBQSxNQUtoQmdHLFVBTGdCO0FBQUEsTUFLSkMsYUFMSTs7QUFNdkIzRSxrREFBUyxDQUFDLFlBQU07QUFDZDJFLGlCQUFhLENBQUNyQyxvREFBQSxDQUFXLFNBQVgsQ0FBRCxDQUFiO0FBQ0QsR0FGUSxFQUVOLENBQUNBLG9EQUFBLENBQVcsU0FBWCxDQUFELENBRk0sQ0FBVDtBQUdBdEMsa0RBQVMsQ0FBQyxZQUFNLENBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0QsR0FWUSxFQVVQLEVBVk8sQ0FBVCxDQVR1QixDQXFCdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLE1BQU00RSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxHQUFELEVBQVM7QUFDM0J2Qyx3REFBQSxDQUFXLFNBQVgsRUFBc0J1QyxHQUF0QjtBQUNBUCxVQUFNLENBQUNRLElBQVAsaUJBQXFCRCxHQUFyQjtBQUNELEdBSEQ7O0FBSUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBLGVBQ0duRixPQUFPLGlCQUFJLDhEQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEZCxlQUVFLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFPRTtBQUFLLGVBQVMsRUFBQyxRQUFmO0FBQUEsOEJBQ0UsOERBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBSyxpQkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGLGVBWUU7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBLDhCQUdBO0FBQUssaUJBQVMsRUFBQyxlQUFmO0FBQUEsZ0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSTtBQUFBLHNGQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhBLGVBUUU7QUFBSyxpQkFBUyxFQUFDLGVBQWY7QUFBQSxnQ0FDQTtBQUFLLG1CQUFTLEVBQUMsYUFBZjtBQUFBLGlDQUNFO0FBQUEsb0NBQ0U7QUFBSSxxQkFBTyxFQUFFO0FBQUEsdUJBQU1rRixXQUFXLENBQUMsQ0FBRCxDQUFqQjtBQUFBLGVBQWI7QUFBbUMsdUJBQVMsRUFBRUYsVUFBVSxLQUFLbkMsU0FBZixHQUEyQixRQUEzQixHQUFzQyxFQUFwRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQUkscUJBQU8sRUFBRTtBQUFBLHVCQUFLcUMsV0FBVyxDQUFDLENBQUQsQ0FBaEI7QUFBQSxlQUFiO0FBQWtDLHVCQUFTLEVBQUVGLFVBQVUsS0FBSyxHQUFmLElBQXNCRixJQUFJLEtBQUcsR0FBN0IsSUFBb0MsUUFBakY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkYsZUFHRTtBQUFJLHFCQUFPLEVBQUU7QUFBQSx1QkFBTUksV0FBVyxDQUFDLENBQUQsQ0FBakI7QUFBQSxlQUFiO0FBQW1DLHVCQUFTLEVBQUVGLFVBQVUsS0FBSyxHQUFmLElBQXNCRixJQUFJLEtBQUcsR0FBN0IsSUFBb0MsUUFBbEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEQSxlQVFBO0FBQUssbUJBQVMsRUFBQyxlQUFmO0FBQUEscUJBQ0NsQyxvREFBQSxDQUFXLFNBQVgsTUFBMEJDLFNBQTFCLGlCQUF1Qyw4REFBQyx3RUFBRDtBQUFXLHNCQUFVLEVBQUVsRTtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUR4QyxFQUVDaUUsb0RBQUEsQ0FBVyxTQUFYLE1BQTBCLEdBQTFCLElBQWlDa0MsSUFBSSxLQUFHLEdBQXhDLGlCQUErQyw4REFBQyx5RUFBRDtBQUFZLHNCQUFVLEVBQUVuRztBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZoRCxFQUdDaUUsb0RBQUEsQ0FBVyxTQUFYLE1BQTBCLEdBQTFCLElBQWlDa0MsSUFBSSxLQUFHLEdBQXhDLGlCQUErQyw4REFBQyxxRUFBRDtBQUFXLHNCQUFVLEVBQUVuRztBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF5Q0QsQ0EzRUQ7O0dBQU1nRyxVO1VBQ1dFLGtEOzs7S0FEWEYsVTtBQTRFTiwrREFBZUEsVUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9qdXJzZXJ2aWNlLjYyNzgwM2FlMjZkMWVlOGYyOTE1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCBGaXJzdFN0ZXAgPSAoKSA9PiB7ICAgcmV0dXJuKCAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm1fcmVnaXN0ZXInPlxyXG4vLyA8Zm9ybT4gICAgICAgICA8aW5wdXQgdHlwZT0nbnVtYmVyJyBuYW1lPSdiaW4nIHBsYWNlaG9sZGVyPSfQkdCY0J0nIC8+IDxpbnB1dFxyXG4vLyB0eXBlPSd0ZXh0JyBkaXNhYmxlZCBuYW1lPSdvcmdhbml6YXRpb24nIHBsYWNlaG9sZGVyPScnIC8+IDxpbnB1dCB0eXBlPSd0ZXh0J1xyXG4vLyBuYW1lPSdwb3NpdGlvbicgcGxhY2Vob2xkZXI9J9CX0LDQvdC40LzQsNC10LzQsNGPINC00L7Qu9C20L3QvtGB0YLRjCcgLz4gICAgPGlucHV0IHR5cGU9J3RleHQnXHJcbi8vIG5hbWU9J2ZpbycgcGxhY2Vob2xkZXI9J9Ck0LDQvNC40LvQuNGPINCY0LzRjycgLz4gICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCdcclxuLy8gbmFtZT0ncGhvbmUnIHBsYWNlaG9sZGVyPSfQotC10LvQtdGE0L7QvScgLz4gICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgbmFtZT0nZW1haWwnXHJcbi8vIHBsYWNlaG9sZGVyPSdFbWFpbCcgLz4gICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdzaW5nbGVidG4nIHR5cGU9J2J1dHRvbidcclxuLy8gY2xhc3NOYW1lPSdidXR0b24nIHZhbHVlPSfQntGC0L/RgNCw0LLQuNGC0YwnIC8+ICAgICAgIDwvZm9ybT4gPC9kaXY+ICAgKSB9IGV4cG9ydFxyXG4vLyBkZWZhdWx0IEZpcnN0U3RlcFxyXG5cclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQ29kZU1vZGFsIGZyb20gJy4uL3NoYXJlZC9Db2RlTW9kYWwnXHJcbmltcG9ydCB7aGFuZGxlRm9jdXMsIHJlcGxhY2VEYXRlfSBmcm9tICcuLi8uLi9kZWZhdWx0cy9leHRyYUZ1bmN0aW9uJ1xyXG5pbXBvcnQge3Bvc2l0aW9uc30gZnJvbSAnLi4vLi4vZGVmYXVsdHMvcG9zaXRpb25zJ1xyXG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSdcclxuaW1wb3J0IHtUb2FzdFByb3ZpZGVyLCB1c2VUb2FzdHN9IGZyb20gJ3JlYWN0LXRvYXN0LW5vdGlmaWNhdGlvbnMnXHJcbmltcG9ydCB7Rm9ybWlrLCBGb3JtLCBGaWVsZH0gZnJvbSAnZm9ybWlrJztcclxuaW1wb3J0IHt1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQge1xyXG4gIGVtYWlsVmFsaWQsXHJcbiAgcmVxdWlyZWQsXHJcbiAgcGhvbmVWYWxpZGF0aW9uLFxyXG4gIHBhc3N3b3JkVmFsaWQsXHJcbiAgYWNjZXB0Q2lycmlsaWMsXHJcbiAgcGhvbmVDaGVjayxcclxuICBpaW5WYWxpZGF0aW9uXHJcbn0gZnJvbSAnLi4vLi4vZGVmYXVsdHMvdmFsaWRhdGlvbnMnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vbG9hZGVyL0xvYWRlcidcclxuaW1wb3J0IHt2YWxpZGFnZX0gZnJvbSAnLi4vLi4vZGVmYXVsdHMvaWluVmFsaWRBZ2UnXHJcbmltcG9ydCBzd2FsIGZyb20gJ3N3ZWV0YWxlcnQnXHJcbmltcG9ydCBMb2FkZXJUZXh0IGZyb20gJy4uL3NoYXJlZC9Mb2FkZXJUZXh0J1xyXG5pbXBvcnQgUGhvbmVNYXNrIGZyb20gJy4uL01hc2tzL1Bob25lTWFzaydcclxuaW1wb3J0IElpbk1hc2sgZnJvbSAnLi4vTWFza3MvSWluTWFzaydcclxuXHJcbmNvbnN0IEZpcnN0U3RlcCA9ICh7c2V0TG9hZGluZ30pID0+IHtcclxuICBjb25zdCB7YWRkVG9hc3R9ID0gdXNlVG9hc3RzKClcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICBjb25zdCBbZm9ybURhdGEsXHJcbiAgICBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBlbWFpbDogJycsXHJcbiAgICBwaG9uZTogJycsXHJcbiAgICBmaW86ICcnLFxyXG4gICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgdHlwZTogJ9Cu0YAg0LvQuNGG0L4nLFxyXG4gICAgcG9zaXRpb246ICcxJ1xyXG4gIH0pXHJcbiAgY29uc3QgW2Vycm9ycyxcclxuICAgIHNldEVycm9yc10gPSB1c2VTdGF0ZSh7ZW1haWw6ICcnLCBwaG9uZTogJycsIGZpbzogJycsIHBhc3N3b3JkOiAnJ30pXHJcbiAgY29uc3QgW2NvZGVFcnJvcixcclxuICAgIHNldENvZGVFcnJvcl0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbYmluVmFsLFxyXG4gICAgc2V0QmluXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtvcmdhbml6YXRpb24sXHJcbiAgICBzZXRPcmdhbml6YXRpb25dID0gdXNlU3RhdGUoe3ZhbHVlOiAnJywgdHlwZTogZmFsc2UsIGxvYWRpbmc6IGZhbHNlfSlcclxuICBjb25zdCBbbW9kYWwsXHJcbiAgICBzZXRNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcclxuICAgIHNldE1vZGFsKGZhbHNlKVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHZhciBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1fcmVnaXN0ZXInKTtcclxuICAgIGZvcm0uc2Nyb2xsSW50b1ZpZXcoe2Jsb2NrOiAnY2VudGVyJywgYmVoYXZpb3I6ICdzbW9vdGgnfSlcclxuICB9LCBbXSlcclxuXHJcbiAgY29uc3QgYmluQ2hhbmdlID0gZSA9PiB7XHJcbiAgICBjb25zdCB2YWwgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIGNvbnN0IHZhbHVlID0gdmFsXHJcbiAgICAgID8gdmFsLnJlcGxhY2UoLyAvZywgXCJcIilcclxuICAgICAgOiAnJ1xyXG4gICAgc2V0QmluKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgLy8gaWYodmFsdWUubGVuZ3RoID09PSAxMikge1xyXG4gICAgLy8gYXhpb3MuZ2V0KGBodHRwczovL2FwaS5tb25leS1tZW4ua3ovYXBpL3Rlc3RLb21wcmE/YmluPSR7dmFsdWV9YCkgLnRoZW4ocmVzPT5cclxuICAgIC8vIHsgICAgICAgc2V0T3JnYW5pemF0aW9uKHJlcy5kYXRhLmNvbnRlbnRbMF0ubmFtZSkgICAgIH0pIH1cclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGJpblZhbFxyXG4gICAgICA/IGJpblZhbC5yZXBsYWNlKC8gL2csIFwiXCIpXHJcbiAgICAgIDogJydcclxuICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDEyKSB7XHJcbiAgICAgIHNldE9yZ2FuaXphdGlvbih7XHJcbiAgICAgICAgLi4ub3JnYW5pemF0aW9uLFxyXG4gICAgICAgIHR5cGU6IHRydWUsXHJcbiAgICAgICAgdmFsdWU6ICfQl9Cw0LPRgNGD0LfQutCwLi4uJyxcclxuICAgICAgICBsb2FkaW5nOiB0cnVlXHJcbiAgICAgIH0pXHJcbiAgICAgIGF4aW9zXHJcbiAgICAgICAgLmdldChgaHR0cHM6Ly9hcGkubW9uZXktbWVuLmt6L2FwaS90ZXN0S29tcHJhP2Jpbj0ke3ZhbHVlfWAsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XHJcblxyXG4gICAgICAgICAgaWYgKHJlcy5kYXRhLmNvbnRlbnQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldE9yZ2FuaXphdGlvbih7dmFsdWU6ICfQn9C+0LbQsNC70YPQudGB0YLQsCDQstCy0LXQtNC40YLQtSDQv9GA0LDQstC40LvRjNC90YvQuSDQkdCY0J0nLCB0eXBlOiBmYWxzZSwgbG9hZGluZzogZmFsc2V9KVxyXG4gICAgICAgICAgICB9LCAxMDAwKVxyXG5cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldE9yZ2FuaXphdGlvbih7dmFsdWU6IHJlcy5kYXRhLmNvbnRlbnRbMF0ubmFtZSwgdHlwZTogdHJ1ZSwgbG9hZGluZzogZmFsc2V9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgICBpZiAoZXJyLnJlc3BvbnNlKSB7fVxyXG4gICAgICAgICAgc2V0T3JnYW5pemF0aW9uKHt2YWx1ZTogJ9Cf0L7QttCw0LvRg9C50YHRgtCwINCy0LLQtdC00LjRgtC1INC/0YDQsNCy0LjQu9GM0L3Ri9C5INCR0JjQnScsIHR5cGU6IGZhbHNlLCBsb2FkaW5nOiBmYWxzZX0pXHJcbiAgICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldE9yZ2FuaXphdGlvbih7dmFsdWU6ICcnLCB0eXBlOiBmYWxzZSwgbG9hZGluZzogZmFsc2V9KVxyXG4gICAgfVxyXG4gIH0sIFtiaW5WYWxdKVxyXG4gIGNvbnN0IFtjb2RlLFxyXG4gICAgc2V0Q29kZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgZ2V0SWRlbnRpZmljYXRpb24gPSAodmFsdWVzKSA9PiB7XHJcbiAgICBpZiAoIXZhbGlkYWdlKHZhbHVlcy5paW4pKSB7XHJcbiAgICAgIHN3YWwoXCJPb3BzIVwiLCBg0JjQt9Cy0LjQvdC40YLQtSwg0YPRgdC70YPQs9CwINC+0YHRg9GJ0LXRgdGC0LLQu9GP0LXRgtGB0Y8g0LvQuNGG0LDQvCDQtNC+0YHRgtC40LPRiNC40LUgMTgg0LvQtdGCLmAsIFwiaW5mb1wiKTtcclxuICAgIH1cclxuICAgIGlmIChvcmdhbml6YXRpb24udHlwZSA9PT0gZmFsc2UgJiYgYmluVmFsLmxlbmd0aCAhPT0gMTIpIHtcclxuICAgICAgc2V0T3JnYW5pemF0aW9uKHt2YWx1ZTogJ9Cf0L7QttCw0LvRg9C50YHRgtCwINCy0LLQtdC00LjRgtC1INC/0YDQsNCy0LjQu9GM0L3Ri9C5INCR0JjQnScsIHR5cGU6IGZhbHNlfSlcclxuICAgIH1cclxuICAgIGlmIChvcmdhbml6YXRpb24udHlwZSA9PT0gdHJ1ZSAmJiBvcmdhbml6YXRpb24udmFsdWUpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2codmFsdWVzKVxyXG4gICAgICAvLyBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICAgIC8vIHNldEZvcm1EYXRhKHZhbHVlcylcclxuICAgICAgLy8gYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9pZGVudGlmaWNhdGlvbmAsIHtcclxuICAgICAgLy8gICBwYXJhbXM6IHtcclxuICAgICAgLy8gICAgIGZpbzogdmFsdWVzLmZpbyxcclxuICAgICAgLy8gICAgIHBob25lOiByZXBsYWNlRGF0ZSh2YWx1ZXMucGhvbmUpLFxyXG4gICAgICAvLyAgICAgZW1haWw6IHZhbHVlcy5lbWFpbCxcclxuICAgICAgLy8gICAgIHBhc3N3b3JkOiB2YWx1ZXMucGFzc3dvcmQsXHJcbiAgICAgIC8vICAgICB0eXBlOiB2YWx1ZXMudHlwZSxcclxuICAgICAgLy8gICAgIGlpbjogYmluVmFsLFxyXG4gICAgICAvLyAgICAgc291cmNlOiAnbmFzaGNvbXBhbnkua3onXHJcbiAgICAgIC8vICAgfVxyXG4gICAgICAvLyB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgIC8vICAgc2V0TG9hZGluZyhmYWxzZSlcclxuXHJcbiAgICAgIC8vICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgLy8gICAgIHNldE1vZGFsKHRydWUpXHJcblxyXG4gICAgICAvLyAgIH1cclxuICAgICAgLy8gICBpZiAoIXJlcy5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgLy8gICAgIGFkZFRvYXN0KHJlcy5kYXRhLm1lc3NhZ2UsIHtcclxuICAgICAgLy8gICAgICAgYXBwZWFyYW5jZTogJ2Vycm9yJyxcclxuICAgICAgLy8gICAgICAgYXV0b0Rpc21pc3M6IHRydWVcclxuICAgICAgLy8gICAgIH0pXHJcbiAgICAgIC8vICAgfVxyXG4gICAgICAvLyB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAvLyAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgIC8vICAgaWYgKGVyci5yZXNwb25zZSkge1xyXG4gICAgICAvLyAgICAgYWRkVG9hc3QoZXJyLnJlc3BvbnNlLnN0YXR1cywge1xyXG4gICAgICAvLyAgICAgICBhcHBlYXJhbmNlOiAnZXJyb3InLFxyXG4gICAgICAvLyAgICAgICBhdXRvRGlzbWlzczogdHJ1ZVxyXG4gICAgICAvLyAgICAgfSlcclxuICAgICAgLy8gICB9XHJcbiAgICAgIC8vIH0pXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgY29uc3QgZmlyc3RTdGVwID0gKGNvZGVWYWwpID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgIGNvbnN0IG9iamVjdCA9IHtcclxuICAgICAgZmlvOiBmb3JtRGF0YS5maW8sXHJcbiAgICAgIHBob25lOiByZXBsYWNlRGF0ZShmb3JtRGF0YS5waG9uZSksXHJcbiAgICAgIGVtYWlsOiBmb3JtRGF0YS5lbWFpbCxcclxuICAgICAgcGFzc3dvcmQ6IGZvcm1EYXRhLnBhc3N3b3JkLFxyXG4gICAgICB0eXBlOiBmb3JtRGF0YS50eXBlLFxyXG4gICAgICBjb2RlOiBjb2RlVmFsLFxyXG4gICAgICBpaW46IGJpblZhbCxcclxuICAgICAgY29tcGFueU5hbWU6IG9yZ2FuaXphdGlvbi52YWx1ZSxcclxuICAgICAgc291cmNlOiBjb29raWUuZ2V0KCd1dG1fc291cmNlJykgKyAnXzEnIHx8ICduYXNoY29tcGFueS5reidcclxuICAgIH1cclxuICAgIGlmIChjb29raWUuZ2V0KCd1dG1fc291cmNlJykgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBvYmplY3QudXRtX3NvdXJjZSA9IGNvb2tpZS5nZXQoJ3V0bV9zb3VyY2UnKSArIFwiXzFcIlxyXG4gICAgICBvYmplY3QuY2xpY2tfaWQgPSBjb29raWUuZ2V0KCdjbGlja19pZCcpXHJcbiAgICAgIC8vIG9iamVjdC53ZWJJRCA9IGNvb2tpZS5nZXQoJ3dlYl9pZCcpXHJcbiAgICB9XHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9zdGVwT25lYCwge3BhcmFtczogb2JqZWN0fSlcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG5cclxuICAgICAgICBpZiAocmVzLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgY29va2llLnNldCgndG9rZW4nLCByZXMuZGF0YS50b2tlbiwge2V4cGlyZXM6IDEwMDB9KVxyXG4gICAgICAgICAgY29va2llLnNldCgnbGVhZF9pZCcsIHJlcy5kYXRhLmlkKVxyXG4gICAgICAgICAgY29va2llLnNldCgnc3RlcGp1cicsIDIpXHJcbiAgICAgICAgICBSb3V0ZXIucHVzaCgnL2p1cnNlcnZpY2U/c3RlcD0yJylcclxuICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnQVVUSEVOVElDQVRJTkdfVVNFUid9KVxyXG4gICAgICAgICAgYXhpb3MucG9zdChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vZ2V0RGF0YWAsIHt0b2tlbjogcmVzLmRhdGEudG9rZW59KVxyXG4gICAgICAgICAgICAudGhlbihyZXM9PiB7XHJcbiAgICAgICAgICAgICAgaWYocmVzLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdTRVRfQ1VSUkVOVF9VU0VSJywgcGF5bG9hZDogcmVzLmRhdGF9KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFyZXMuZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICBzZXRDb2RlRXJyb3IocmVzLmRhdGEubWVzc2FnZSlcclxuICAgICAgICAgIGFkZFRvYXN0KGZpbmFsRXJyLCB7XHJcbiAgICAgICAgICAgIGFwcGVhcmFuY2U6ICdlcnJvcicsXHJcbiAgICAgICAgICAgIGF1dG9EaXNtaXNzOiB0cnVlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgc2V0RXJyb3JzKHtcclxuICAgICAgLy8gLi4uZXJyb3JzLFxyXG4gICAgICAvLyBlbWFpbDogZW1haWxWYWxpZChmb3JtRGF0YS5lbWFpbCksXHJcbiAgICAgIC8vIGZpbzogcmVxdWlyZWQoZm9ybURhdGEuZmlvKSxcclxuICAgICAgLy8gcGhvbmU6IHBob25lVmFsaWRhdGlvbihmb3JtRGF0YS5waG9uZSksXHJcbiAgICAgIC8vIHBhc3N3b3JkOiBwYXNzd29yZFZhbGlkKGZvcm1EYXRhLnBhc3N3b3JkKVxyXG4gICAgfSlcclxuXHJcbiAgICAvLyBnZXRJZGVudGlmaWNhdGlvbigpXHJcbiAgfVxyXG5cclxuICBjb25zdCBvbkNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBuYW1lID0gZS50YXJnZXQubmFtZTtcclxuICAgIHNldEZvcm1EYXRhKHtcclxuICAgICAgLi4uZm9ybURhdGEsXHJcbiAgICAgIFtuYW1lXTogZS50YXJnZXQudmFsdWVcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm1fcmVnaXN0ZXInPlxyXG4gICAgICAgIDxGb3JtaWtcclxuICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcclxuICAgICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICAgIHBvc2l0aW9uOiAnMScsXHJcbiAgICAgICAgICBwaG9uZTogJycsXHJcbiAgICAgICAgICBmaW86ICcnLFxyXG4gICAgICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICAgICAgdHlwZTogJ9Cu0YAg0LvQuNGG0L4nLFxyXG4gICAgICAgICAgaWluOiAnJ1xyXG4gICAgICAgIH19XHJcbiAgICAgICAgICBvblN1Ym1pdD17KHZhbHVlcykgPT4ge1xyXG4gICAgICAgICAgZ2V0SWRlbnRpZmljYXRpb24odmFsdWVzKVxyXG4gICAgICAgIH19PlxyXG4gICAgICAgICAgeyh7ZXJyb3JzLCB0b3VjaGVkfSkgPT4gKFxyXG4gICAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgIG5hbWU9J2lpbidcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J9CR0JjQnSdcclxuICAgICAgICAgICAgICAgIHR5cGU9J3RlbCdcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17SWluTWFza31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IGJpbkNoYW5nZShlKX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtiaW5WYWx9Lz5cclxuICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsob3JnYW5pemF0aW9uLnR5cGUgPT09IGZhbHNlICYmIG9yZ2FuaXphdGlvbi52YWx1ZSkgJiYgJ2Rpc2FibGVkX2Vycm9yIHRleHQtZGFuZ2VyJ31cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtvcmdhbml6YXRpb24udmFsdWV9ICBcclxuICAgICAgICAgICAgICAgIG5hbWU9J2NvbXBhbnlOYW1lJ1xyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J9Cd0LDQt9Cy0LDQvdC40LUg0J7RgNCz0LDQvdC40LfQsNGG0LjQuCcvPiB7LyogPGlucHV0IHR5cGU9J3RleHQnIGNsYXNzTmFtZT17KG9yZ2FuaXphdGlvbi50eXBlID09PSBmYWxzZSAmJiBvcmdhbml6YXRpb24udmFsdWUpICYmICdkaXNhYmxlZF9lcnJvcid9IHZhbHVlPXtvcmdhbml6YXRpb24udmFsdWV9IGRpc2FibGVkIG5hbWU9J29yZ2FuaXphdGlvbicgcGxhY2Vob2xkZXI9J9Cd0LDQt9Cy0LDQvdC40LUg0J7RgNCz0LDQvdC40LfQsNGG0LjQuCcgLz4gKi99XHJcbiAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICBhcz0nc2VsZWN0J1xyXG4gICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgIG5hbWU9J3Bvc2l0aW9uJ1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU9e3JlcXVpcmVkfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J9CX0LDQvdC40LzQsNC10LzQsNGPINC00L7Qu9C20L3QvtGB0YLRjCdcclxuICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT0nb2ZmJz57cG9zaXRpb25zLm1hcChwID0+IChcclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17cC52YWx1ZX0+e3AubmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICkpfTwvRmllbGQ+XHJcbiAgICAgICAgICAgICAgeyhlcnJvcnMucG9zaXRpb24gJiYgdG91Y2hlZC5wb3NpdGlvbilcclxuICAgICAgICAgICAgICAgID8gPHAgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+e2Vycm9ycy5wb3NpdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICA6IDxwIGNsYXNzTmFtZT0nJz48L3A+fVxyXG5cclxuICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdmaW8nXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZT17YWNjZXB0Q2lycmlsaWN9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0n0KTQmNCeJ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjYXBpdGFsaXplJ1xyXG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPSdvZmYnLz4geyhlcnJvcnMuZmlvICYmIHRvdWNoZWQuZmlvKVxyXG4gICAgICAgICAgICAgICAgPyA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz57ZXJyb3JzLmZpb308L3A+XHJcbiAgICAgICAgICAgICAgICA6IDxwIGNsYXNzTmFtZT0nJz48L3A+fVxyXG5cclxuICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgIG5hbWU9J3Bob25lJ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0n0KLQtdC70LXRhNC+0L0g0L3QvtC80LXRgCdcclxuICAgICAgICAgICAgICAgIHR5cGU9J3RlbCdcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlPXtwaG9uZVZhbGlkYXRpb259XHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1Bob25lTWFza30+PC9GaWVsZD5cclxuICAgICAgICAgICAgICB7KGVycm9ycy5waG9uZSAmJiB0b3VjaGVkLnBob25lKVxyXG4gICAgICAgICAgICAgICAgPyA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz57ZXJyb3JzLnBob25lfTwvcD5cclxuICAgICAgICAgICAgICAgIDogPHAgY2xhc3NOYW1lPScnPjwvcD59XHJcblxyXG4gICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgIG5hbWU9J2VtYWlsJ1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU9e2VtYWlsVmFsaWR9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW1haWwnXHJcbiAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9J29mZicvPiB7KGVycm9ycy5lbWFpbCAmJiB0b3VjaGVkLmVtYWlsKVxyXG4gICAgICAgICAgICAgICAgPyA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz57ZXJyb3JzLmVtYWlsfTwvcD5cclxuICAgICAgICAgICAgICAgIDogPHAgY2xhc3NOYW1lPScnPjwvcD59XHJcblxyXG4gICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdwYXNzd29yZCdcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlPXtwYXNzd29yZFZhbGlkfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J9Cf0YDQuNC00YPQvNCw0LnRgtC1INC/0LDRgNC+0LvRjCdcclxuICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT0nb2ZmJy8+IHsoZXJyb3JzLnBhc3N3b3JkICYmIHRvdWNoZWQucGFzc3dvcmQpXHJcbiAgICAgICAgICAgICAgICA/IDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPntlcnJvcnMucGFzc3dvcmR9PC9wPlxyXG4gICAgICAgICAgICAgICAgOiA8cCBjbGFzc05hbWU9Jyc+PC9wPn1cclxuICAgICAgICAgICAgICB7LyogPEZpZWxkXHJcbiAgICAgICAgICAgICAgICB0eXBlPSdwYXNzd29yZCdcclxuICAgICAgICAgICAgICAgIG5hbWU9J3Bhc3N3b3JkJ1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU9e3Bhc3N3b3JkVmFsaWR9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0n0J/RgNC40LTRg9C80LDQudGC0LUg0L/QsNGA0L7Qu9GMJ1xyXG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPSdvZmYnLz5cclxuICAgICAgICAgICAgICAgICB7KGVycm9ycy5wYXNzd29yZCAmJiB0b3VjaGVkLnBhc3N3b3JkKSA/IDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPntlcnJvcnMucGFzc3dvcmR9PC9wPiA6ICA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz48L3A+fSAqL31cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpcnN0c3RlcF9iYW5uZXInPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpcnN0c3RlcF9iYW5uZXItLWltZyc+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PSdpbWFnZScgY2xhc3NOYW1lPSdmaXJzdHN0ZXAnIHNyYz0nL2ltZy9mb3JtL2ZpcnN0c3RlcC5zdmcnLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpcnN0c3RlcF9iYW5uZXItLWJ1dHRvbic+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2luZ2xlYnRuJ1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2J1dHRvbidcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVGb2N1cygpfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPSfQpdC+0YfRgyDRgdC60LjQtNC60LgnLz5cclxuICAgICAgICAgICAgICAgICAgPGI+0KHQu9C10LTRg9GO0YnQuNC5INGI0LDQszxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgINC00LDRgdGCIDUwJSDRgdC60LjQtNC60Lg8L2I+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Gb3JtaWs+XHJcbiAgICAgICAgPENvZGVNb2RhbFxyXG4gICAgICAgICAgaXNNb2RhbE9wZW49e21vZGFsfVxyXG4gICAgICAgICAgY2xvc2VNb2RhbD17Y2xvc2VNb2RhbH1cclxuICAgICAgICAgIGNvZGU9e2NvZGV9XHJcbiAgICAgICAgICBzZXRDb2RlPXtzZXRDb2RlfVxyXG4gICAgICAgICAgb25GaXJzdFN0ZXA9e2ZpcnN0U3RlcH1cclxuICAgICAgICAgIGVycm9yPXtjb2RlRXJyb3J9XHJcbiAgICAgICAgICBnZXRJZGVudGlmaWNhdGlvbj17Z2V0SWRlbnRpZmljYXRpb259Lz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBGaXJzdFJlZyA9ICh7c2V0TG9hZGluZ30pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFRvYXN0UHJvdmlkZXI+XHJcbiAgICAgIDxGaXJzdFN0ZXAgc2V0TG9hZGluZz17c2V0TG9hZGluZ30vPlxyXG4gICAgPC9Ub2FzdFByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlyc3RSZWciLCJpbXBvcnQgRmlyc3RTdGVwIGZyb20gXCIuLi9jb21wb25lbnRzL2dldHNlcnZpY2UvRmlyc3RTdGVwSnVyXCJcclxuaW1wb3J0IFNlY29uZFN0ZXAgZnJvbSBcIi4uL2NvbXBvbmVudHMvZ2V0c2VydmljZS9TZWNvbmRTdGVwSnVyXCJcclxuaW1wb3J0IE5hdiBmcm9tIFwiLi4vY29tcG9uZW50cy9zaGFyZWQvTmF2XCJcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgVGhpcmRTdGVwIGZyb20gXCIuLi9jb21wb25lbnRzL2dldHNlcnZpY2UvVGhpcmRTdGVwXCJcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSdcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBMb2FkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbG9hZGVyL0xvYWRlclwiXHJcbmltcG9ydCBDb2RlTW9kYWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvc2hhcmVkL0NvZGVNb2RhbFwiXHJcbmNvbnN0IEdldFNlcnZpY2UgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCB7c3RlcH0gPSByb3V0ZXIucXVlcnlcclxuXHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2Nvb2tpZVN0ZXAsIHNldENvb2tpZVN0ZXBdID0gdXNlU3RhdGUoJycpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldENvb2tpZVN0ZXAoY29va2llLmdldCgnc3RlcGp1cicpKVxyXG4gIH0sIFtjb29raWUuZ2V0KCdzdGVwanVyJyldKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBpZighY29va2llLmdldCgnc3RlcGp1cicpKSB7XHJcbiAgICAvLyAgIHJvdXRlci5wdXNoKCcvanVyc2VydmljZScpXHJcbiAgICAvLyB9XHJcbiAgICAvLyBpZihjb29raWUuZ2V0KCdzdGVwanVyJykgPT09ICcyJykge1xyXG4gICAgLy8gICByb3V0ZXIucHVzaCgnL2p1cnNlcnZpY2U/c3RlcD0yJylcclxuICAgIC8vIH1cclxuICAgIC8vIGlmKGNvb2tpZS5nZXQoJ3N0ZXBqdXInKSA9PT0gJzMnKSB7XHJcbiAgICAvLyAgIHJvdXRlci5wdXNoKCcvanVyc2VydmljZT9zdGVwPTMnKVxyXG4gICAgLy8gfVxyXG4gIH0sW10pXHJcblxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBpZihjb29raWUuZ2V0KCdzdGVwanVyJykgIT09IHVuZGVmaW5lZCAmJiAoY29va2llLmdldCgnbGVhZF9pZCcpPT09IHVuZGVmaW5lZCB8fCBjb29raWUuZ2V0KCd0b2tlbicpID09PSB1bmRlZmluZWQpKXtcclxuICAvLyAgICAgY29uc29sZS5sb2coJ3JlbW92ZWQnKVxyXG4gIC8vICAgICBjb29raWUucmVtb3ZlKCdzdGVwanVyJylcclxuICAvLyAgICAgY29va2llLnJlbW92ZSgnbGVhZF9pZCcpXHJcbiAgLy8gICAgIGNvb2tpZS5yZW1vdmUoJ3Rva2VuJylcclxuICAvLyAgICAgcm91dGVyLnB1c2goJy9kbHlhLWZpemljaGVza2l4LWxpYycpXHJcbiAgLy8gICB9XHJcbiAgLy8gfSxbXSlcclxuICBjb25zdCBoZWFkZXJDbGljayA9IChudW0pID0+IHtcclxuICAgIGNvb2tpZS5zZXQoXCJzdGVwanVyXCIsIG51bSk7XHJcbiAgICByb3V0ZXIucHVzaChgP3N0ZXA9JHtudW19YClcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdnZXRzZXJ2aWNlJz5cclxuICAgICAge2xvYWRpbmcgJiYgPExvYWRlciAvPn1cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlxyXG4gICAgICAgICAg0J/QvtC70YPRh9C40YLRjCDRg9GB0LvRg9Cz0YMgfCDQrtGALiDQu9C40YbQvlxyXG4gICAgICAgIDwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2hlYWRlcic+XHJcbiAgICAgICAgPE5hdi8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JnJz48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuICAgICBcclxuICAgICAgICBcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm1faGVhZGluZ3MnPlxyXG4gICAgICAgICAgPGI+0KPRgdC70YPQs9C4INGO0YAuINC70LjRhtCw0Lw8L2I+XHJcbiAgICAgICAgICA8aDI+0J/QvtC70YPRh9C40YLRjFxyXG4gICAgICAgICAgICA8YnI+PC9icj7Rg9GB0LvRg9Cz0YM6PC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybV9zZXJ2aWNlICc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm1faGVhZGVyJz5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IGhlYWRlckNsaWNrKDEpfSBjbGFzc05hbWU9e2Nvb2tpZVN0ZXAgPT09IHVuZGVmaW5lZCA/ICdhY3RpdmUnIDogJyd9PjEg0KjQsNCzPC9saT5cclxuICAgICAgICAgICAgPGxpIG9uQ0xpY2s9eygpPT4gaGVhZGVyQ2xpY2soMil9IGNsYXNzTmFtZT17Y29va2llU3RlcCA9PT0gJzInICYmIHN0ZXA9PT0nMicgJiYgJ2FjdGl2ZSd9PjIg0KjQsNCzPC9saT5cclxuICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IGhlYWRlckNsaWNrKDMpfSBjbGFzc05hbWU9e2Nvb2tpZVN0ZXAgPT09ICczJyAmJiBzdGVwPT09JzMnICYmICdhY3RpdmUnfT4zINCo0LDQszwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybV9yZWdpc3RlclwiPlxyXG4gICAgICAgIHtjb29raWUuZ2V0KCdzdGVwanVyJykgPT09IHVuZGVmaW5lZCAmJiA8Rmlyc3RTdGVwIHNldExvYWRpbmc9e3NldExvYWRpbmd9Lz59XHJcbiAgICAgICAge2Nvb2tpZS5nZXQoJ3N0ZXBqdXInKSA9PT0gJzInICYmIHN0ZXA9PT0nMicgJiYgPFNlY29uZFN0ZXAgc2V0TG9hZGluZz17c2V0TG9hZGluZ30vPn1cclxuICAgICAgICB7Y29va2llLmdldCgnc3RlcGp1cicpID09PSAnMycgJiYgc3RlcD09PSczJyAmJiA8VGhpcmRTdGVwIHNldExvYWRpbmc9e3NldExvYWRpbmd9Lz59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIDxTZWNvbmRTdGVwIC8+ICovfVxyXG4gICAgICAgIHsvKiA8VGhpcmRTdGVwIC8+ICovfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgIFxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEdldFNlcnZpY2UiXSwic291cmNlUm9vdCI6IiJ9