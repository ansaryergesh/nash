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
    if (!(0,_defaults_iinValidAge__WEBPACK_IMPORTED_MODULE_13__.validage)(values.iin)) {
      sweetalert__WEBPACK_IMPORTED_MODULE_14___default()("Oops!", "\u0418\u0437\u0432\u0438\u043D\u0438\u0442\u0435, \u0443\u0441\u043B\u0443\u0433\u0430 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043B\u0438\u0446\u0430\u043C \u0434\u043E\u0441\u0442\u0438\u0433\u0448\u0438\u0435 18 \u043B\u0435\u0442.", "info");
    }

    if (organization.type === false && binVal.length !== 12) {
      setOrganization({
        value: 'Пожалуйста введите правильный БИН',
        type: false
      });
    }

    if (organization.type === true && organization.value) {
      console.log(values);
      setLoading(true);
      setFormData(values);
      axios__WEBPACK_IMPORTED_MODULE_2___default().get("".concat("https://crediter.kz/api", "/identification"), {
        params: {
          fio: values.fio,
          phone: (0,_defaults_extraFunction__WEBPACK_IMPORTED_MODULE_5__.replaceDate)(values.phone),
          email: values.email,
          password: values.password,
          type: values.type,
          iin: binVal,
          source: 'nashcompany.kz'
        }
      }).then(function (res) {
        setLoading(false);

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
      object.utm_source = js_cookie__WEBPACK_IMPORTED_MODULE_7___default().get('utm_source');
      object.click_id = js_cookie__WEBPACK_IMPORTED_MODULE_7___default().get('click_id'); // object.webID = cookie.get('web_id')
    }

    axios__WEBPACK_IMPORTED_MODULE_2___default().get("".concat("https://crediter.kz/api", "/stepOne"), {
      params: object
    }).then(function (res) {
      setLoading(false);

      if (res.data.success) {
        js_cookie__WEBPACK_IMPORTED_MODULE_7___default().set('token', res.data.token);
        js_cookie__WEBPACK_IMPORTED_MODULE_7___default().set('lead_id', res.data.id);
        js_cookie__WEBPACK_IMPORTED_MODULE_7___default().set('stepjur', 2);
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
              lineNumber: 242,
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
              lineNumber: 250,
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
                  lineNumber: 264,
                  columnNumber: 19
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 257,
              columnNumber: 15
            }, _this), errors.position && touched.position ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "text-danger",
              children: errors.position
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 267,
              columnNumber: 19
            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 268,
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
              lineNumber: 270,
              columnNumber: 15
            }, _this), " ", errors.fio && touched.fio ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "text-danger",
              children: errors.fio
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 277,
              columnNumber: 19
            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 278,
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
              lineNumber: 280,
              columnNumber: 15
            }, _this), errors.phone && touched.phone ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "text-danger",
              children: errors.phone
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
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_9__.Field, {
              type: "text",
              name: "email",
              validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_10__.emailValid,
              placeholder: "Email",
              autocomplete: "off"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 291,
              columnNumber: 15
            }, _this), " ", errors.email && touched.email ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "text-danger",
              children: errors.email
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
              type: "password",
              name: "password",
              validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_10__.passwordValid,
              placeholder: "\u041F\u0440\u0438\u0434\u0443\u043C\u0430\u0439\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C",
              autocomplete: "off"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 300,
              columnNumber: 15
            }, _this), " ", errors.password && touched.password ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "text-danger",
              children: errors.password
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
                  lineNumber: 318,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 317,
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
                  lineNumber: 321,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                  children: ["\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0448\u0430\u0433", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 327,
                    columnNumber: 35
                  }, _this), "\u0434\u0430\u0441\u0442 50% \u0441\u043A\u0438\u0434\u043A\u0438"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 327,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 320,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 316,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 241,
            columnNumber: 13
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 227,
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
        lineNumber: 335,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 225,
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
      lineNumber: 352,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 351,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRzZXJ2aWNlL0ZpcnN0U3RlcEp1ci5qcyJdLCJuYW1lcyI6WyJGaXJzdFN0ZXAiLCJzZXRMb2FkaW5nIiwidXNlVG9hc3RzIiwiYWRkVG9hc3QiLCJ1c2VTdGF0ZSIsImVtYWlsIiwicGhvbmUiLCJmaW8iLCJwYXNzd29yZCIsInR5cGUiLCJwb3NpdGlvbiIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJjb2RlRXJyb3IiLCJzZXRDb2RlRXJyb3IiLCJiaW5WYWwiLCJzZXRCaW4iLCJ2YWx1ZSIsImxvYWRpbmciLCJvcmdhbml6YXRpb24iLCJzZXRPcmdhbml6YXRpb24iLCJtb2RhbCIsInNldE1vZGFsIiwiY2xvc2VNb2RhbCIsInVzZUVmZmVjdCIsImZvcm0iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzY3JvbGxJbnRvVmlldyIsImJsb2NrIiwiYmVoYXZpb3IiLCJiaW5DaGFuZ2UiLCJlIiwidmFsIiwidGFyZ2V0IiwicmVwbGFjZSIsImxlbmd0aCIsImF4aW9zIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJkYXRhIiwiY29udGVudCIsInNldFRpbWVvdXQiLCJuYW1lIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwiY29kZSIsInNldENvZGUiLCJnZXRJZGVudGlmaWNhdGlvbiIsInZhbHVlcyIsInZhbGlkYWdlIiwiaWluIiwic3dhbCIsInByb2Nlc3MiLCJwYXJhbXMiLCJyZXBsYWNlRGF0ZSIsInNvdXJjZSIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwiYXBwZWFyYW5jZSIsImF1dG9EaXNtaXNzIiwic3RhdHVzIiwiZmlyc3RTdGVwIiwiY29kZVZhbCIsIm9iamVjdCIsImNvbXBhbnlOYW1lIiwiY29va2llIiwidW5kZWZpbmVkIiwidXRtX3NvdXJjZSIsImNsaWNrX2lkIiwidG9rZW4iLCJpZCIsIlJvdXRlciIsImZpbmFsRXJyIiwib25TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImVtYWlsVmFsaWQiLCJyZXF1aXJlZCIsInBob25lVmFsaWRhdGlvbiIsInBhc3N3b3JkVmFsaWQiLCJvbkNoYW5nZSIsInRvdWNoZWQiLCJJaW5NYXNrIiwicG9zaXRpb25zIiwicCIsImFjY2VwdENpcnJpbGljIiwiUGhvbmVNYXNrIiwiaGFuZGxlRm9jdXMiLCJGaXJzdFJlZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQWtCO0FBQUE7O0FBQUEsTUFBaEJDLFVBQWdCLFFBQWhCQSxVQUFnQjs7QUFBQSxtQkFDZkMsb0VBQVMsRUFETTtBQUFBLE1BQzNCQyxRQUQyQixjQUMzQkEsUUFEMkI7O0FBQUEsa0JBR2pCQywrQ0FBUSxDQUFDO0FBQ3hCQyxTQUFLLEVBQUUsRUFEaUI7QUFFeEJDLFNBQUssRUFBRSxFQUZpQjtBQUd4QkMsT0FBRyxFQUFFLEVBSG1CO0FBSXhCQyxZQUFRLEVBQUUsRUFKYztBQUt4QkMsUUFBSSxFQUFFLFNBTGtCO0FBTXhCQyxZQUFRLEVBQUU7QUFOYyxHQUFELENBSFM7QUFBQSxNQUUzQkMsUUFGMkI7QUFBQSxNQUdoQ0MsV0FIZ0M7O0FBQUEsbUJBWW5CUiwrQ0FBUSxDQUFDO0FBQUNDLFNBQUssRUFBRSxFQUFSO0FBQVlDLFNBQUssRUFBRSxFQUFuQjtBQUF1QkMsT0FBRyxFQUFFLEVBQTVCO0FBQWdDQyxZQUFRLEVBQUU7QUFBMUMsR0FBRCxDQVpXO0FBQUEsTUFXM0JLLE1BWDJCO0FBQUEsTUFZaENDLFNBWmdDOztBQUFBLG1CQWNoQlYsK0NBQVEsQ0FBQyxFQUFELENB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QURGO0FBS0QsQ0FORDs7TUFBTTRGLFE7QUFRTiwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9qdXJzZXJ2aWNlLjcwYjZhOGFmYjQ0MGMxNzE4NzQwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCBGaXJzdFN0ZXAgPSAoKSA9PiB7ICAgcmV0dXJuKCAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm1fcmVnaXN0ZXInPlxyXG4vLyA8Zm9ybT4gICAgICAgICA8aW5wdXQgdHlwZT0nbnVtYmVyJyBuYW1lPSdiaW4nIHBsYWNlaG9sZGVyPSfQkdCY0J0nIC8+IDxpbnB1dFxyXG4vLyB0eXBlPSd0ZXh0JyBkaXNhYmxlZCBuYW1lPSdvcmdhbml6YXRpb24nIHBsYWNlaG9sZGVyPScnIC8+IDxpbnB1dCB0eXBlPSd0ZXh0J1xyXG4vLyBuYW1lPSdwb3NpdGlvbicgcGxhY2Vob2xkZXI9J9CX0LDQvdC40LzQsNC10LzQsNGPINC00L7Qu9C20L3QvtGB0YLRjCcgLz4gICAgPGlucHV0IHR5cGU9J3RleHQnXHJcbi8vIG5hbWU9J2ZpbycgcGxhY2Vob2xkZXI9J9Ck0LDQvNC40LvQuNGPINCY0LzRjycgLz4gICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCdcclxuLy8gbmFtZT0ncGhvbmUnIHBsYWNlaG9sZGVyPSfQotC10LvQtdGE0L7QvScgLz4gICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgbmFtZT0nZW1haWwnXHJcbi8vIHBsYWNlaG9sZGVyPSdFbWFpbCcgLz4gICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdzaW5nbGVidG4nIHR5cGU9J2J1dHRvbidcclxuLy8gY2xhc3NOYW1lPSdidXR0b24nIHZhbHVlPSfQntGC0L/RgNCw0LLQuNGC0YwnIC8+ICAgICAgIDwvZm9ybT4gPC9kaXY+ICAgKSB9IGV4cG9ydFxyXG4vLyBkZWZhdWx0IEZpcnN0U3RlcFxyXG5cclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQ29kZU1vZGFsIGZyb20gJy4uL3NoYXJlZC9Db2RlTW9kYWwnXHJcbmltcG9ydCB7aGFuZGxlRm9jdXMsIHJlcGxhY2VEYXRlfSBmcm9tICcuLi8uLi9kZWZhdWx0cy9leHRyYUZ1bmN0aW9uJ1xyXG5pbXBvcnQge3Bvc2l0aW9uc30gZnJvbSAnLi4vLi4vZGVmYXVsdHMvcG9zaXRpb25zJ1xyXG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSdcclxuaW1wb3J0IHtUb2FzdFByb3ZpZGVyLCB1c2VUb2FzdHN9IGZyb20gJ3JlYWN0LXRvYXN0LW5vdGlmaWNhdGlvbnMnXHJcbmltcG9ydCB7Rm9ybWlrLCBGb3JtLCBGaWVsZH0gZnJvbSAnZm9ybWlrJztcclxuaW1wb3J0IHtcclxuICBlbWFpbFZhbGlkLFxyXG4gIHJlcXVpcmVkLFxyXG4gIHBob25lVmFsaWRhdGlvbixcclxuICBwYXNzd29yZFZhbGlkLFxyXG4gIGFjY2VwdENpcnJpbGljLFxyXG4gIHBob25lQ2hlY2ssXHJcbiAgaWluVmFsaWRhdGlvblxyXG59IGZyb20gJy4uLy4uL2RlZmF1bHRzL3ZhbGlkYXRpb25zJ1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL2xvYWRlci9Mb2FkZXInXHJcbmltcG9ydCB7dmFsaWRhZ2V9IGZyb20gJy4uLy4uL2RlZmF1bHRzL2lpblZhbGlkQWdlJ1xyXG5pbXBvcnQgc3dhbCBmcm9tICdzd2VldGFsZXJ0J1xyXG5pbXBvcnQgTG9hZGVyVGV4dCBmcm9tICcuLi9zaGFyZWQvTG9hZGVyVGV4dCdcclxuaW1wb3J0IFBob25lTWFzayBmcm9tICcuLi9NYXNrcy9QaG9uZU1hc2snXHJcbmltcG9ydCBJaW5NYXNrIGZyb20gJy4uL01hc2tzL0lpbk1hc2snXHJcblxyXG5jb25zdCBGaXJzdFN0ZXAgPSAoe3NldExvYWRpbmd9KSA9PiB7XHJcbiAgY29uc3Qge2FkZFRvYXN0fSA9IHVzZVRvYXN0cygpXHJcbiAgY29uc3QgW2Zvcm1EYXRhLFxyXG4gICAgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgZW1haWw6ICcnLFxyXG4gICAgcGhvbmU6ICcnLFxyXG4gICAgZmlvOiAnJyxcclxuICAgIHBhc3N3b3JkOiAnJyxcclxuICAgIHR5cGU6ICfQrtGAINC70LjRhtC+JyxcclxuICAgIHBvc2l0aW9uOiAnMSdcclxuICB9KVxyXG4gIGNvbnN0IFtlcnJvcnMsXHJcbiAgICBzZXRFcnJvcnNdID0gdXNlU3RhdGUoe2VtYWlsOiAnJywgcGhvbmU6ICcnLCBmaW86ICcnLCBwYXNzd29yZDogJyd9KVxyXG4gIGNvbnN0IFtjb2RlRXJyb3IsXHJcbiAgICBzZXRDb2RlRXJyb3JdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW2JpblZhbCxcclxuICAgIHNldEJpbl0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbb3JnYW5pemF0aW9uLFxyXG4gICAgc2V0T3JnYW5pemF0aW9uXSA9IHVzZVN0YXRlKHt2YWx1ZTogJycsIHR5cGU6IGZhbHNlLCBsb2FkaW5nOiBmYWxzZX0pXHJcbiAgY29uc3QgW21vZGFsLFxyXG4gICAgc2V0TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRNb2RhbChmYWxzZSlcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB2YXIgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX3JlZ2lzdGVyJyk7XHJcbiAgICBmb3JtLnNjcm9sbEludG9WaWV3KHtibG9jazogJ2NlbnRlcicsIGJlaGF2aW9yOiAnc21vb3RoJ30pXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IGJpbkNoYW5nZSA9IGUgPT4ge1xyXG4gICAgY29uc3QgdmFsID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICBjb25zdCB2YWx1ZSA9IHZhbFxyXG4gICAgICA/IHZhbC5yZXBsYWNlKC8gL2csIFwiXCIpXHJcbiAgICAgIDogJydcclxuICAgIHNldEJpbihlLnRhcmdldC52YWx1ZSlcclxuICAgIC8vIGlmKHZhbHVlLmxlbmd0aCA9PT0gMTIpIHtcclxuICAgIC8vIGF4aW9zLmdldChgaHR0cHM6Ly9hcGkubW9uZXktbWVuLmt6L2FwaS90ZXN0S29tcHJhP2Jpbj0ke3ZhbHVlfWApIC50aGVuKHJlcz0+XHJcbiAgICAvLyB7ICAgICAgIHNldE9yZ2FuaXphdGlvbihyZXMuZGF0YS5jb250ZW50WzBdLm5hbWUpICAgICB9KSB9XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdmFsdWUgPSBiaW5WYWxcclxuICAgICAgPyBiaW5WYWwucmVwbGFjZSgvIC9nLCBcIlwiKVxyXG4gICAgICA6ICcnXHJcbiAgICBpZiAodmFsdWUubGVuZ3RoID09PSAxMikge1xyXG4gICAgICBzZXRPcmdhbml6YXRpb24oe1xyXG4gICAgICAgIC4uLm9yZ2FuaXphdGlvbixcclxuICAgICAgICB0eXBlOiB0cnVlLFxyXG4gICAgICAgIHZhbHVlOiAn0JfQsNCz0YDRg9C30LrQsC4uLicsXHJcbiAgICAgICAgbG9hZGluZzogdHJ1ZVxyXG4gICAgICB9KVxyXG4gICAgICBheGlvc1xyXG4gICAgICAgIC5nZXQoYGh0dHBzOi8vYXBpLm1vbmV5LW1lbi5rei9hcGkvdGVzdEtvbXByYT9iaW49JHt2YWx1ZX1gLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG5cclxuICAgICAgICAgIGlmIChyZXMuZGF0YS5jb250ZW50Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICBzZXRPcmdhbml6YXRpb24oe3ZhbHVlOiAn0J/QvtC20LDQu9GD0LnRgdGC0LAg0LLQstC10LTQuNGC0LUg0L/RgNCw0LLQuNC70YzQvdGL0Lkg0JHQmNCdJywgdHlwZTogZmFsc2UsIGxvYWRpbmc6IGZhbHNlfSlcclxuICAgICAgICAgICAgfSwgMTAwMClcclxuXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRPcmdhbml6YXRpb24oe3ZhbHVlOiByZXMuZGF0YS5jb250ZW50WzBdLm5hbWUsIHR5cGU6IHRydWUsIGxvYWRpbmc6IGZhbHNlfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgICAgaWYgKGVyci5yZXNwb25zZSkge31cclxuICAgICAgICAgIHNldE9yZ2FuaXphdGlvbih7dmFsdWU6ICfQn9C+0LbQsNC70YPQudGB0YLQsCDQstCy0LXQtNC40YLQtSDQv9GA0LDQstC40LvRjNC90YvQuSDQkdCY0J0nLCB0eXBlOiBmYWxzZSwgbG9hZGluZzogZmFsc2V9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRPcmdhbml6YXRpb24oe3ZhbHVlOiAnJywgdHlwZTogZmFsc2UsIGxvYWRpbmc6IGZhbHNlfSlcclxuICAgIH1cclxuICB9LCBbYmluVmFsXSlcclxuICBjb25zdCBbY29kZSxcclxuICAgIHNldENvZGVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IGdldElkZW50aWZpY2F0aW9uID0gKHZhbHVlcykgPT4ge1xyXG4gICAgaWYgKCF2YWxpZGFnZSh2YWx1ZXMuaWluKSkge1xyXG4gICAgICBzd2FsKFwiT29wcyFcIiwgYNCY0LfQstC40L3QuNGC0LUsINGD0YHQu9GD0LPQsCDQvtGB0YPRidC10YHRgtCy0LvRj9C10YLRgdGPINC70LjRhtCw0Lwg0LTQvtGB0YLQuNCz0YjQuNC1IDE4INC70LXRgi5gLCBcImluZm9cIik7XHJcbiAgICB9XHJcbiAgICBpZiAob3JnYW5pemF0aW9uLnR5cGUgPT09IGZhbHNlICYmIGJpblZhbC5sZW5ndGggIT09IDEyKSB7XHJcbiAgICAgIHNldE9yZ2FuaXphdGlvbih7dmFsdWU6ICfQn9C+0LbQsNC70YPQudGB0YLQsCDQstCy0LXQtNC40YLQtSDQv9GA0LDQstC40LvRjNC90YvQuSDQkdCY0J0nLCB0eXBlOiBmYWxzZX0pXHJcbiAgICB9XHJcbiAgICBpZiAob3JnYW5pemF0aW9uLnR5cGUgPT09IHRydWUgJiYgb3JnYW5pemF0aW9uLnZhbHVlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHZhbHVlcylcclxuICAgICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgICBzZXRGb3JtRGF0YSh2YWx1ZXMpXHJcbiAgICAgIGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vaWRlbnRpZmljYXRpb25gLCB7XHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICBmaW86IHZhbHVlcy5maW8sXHJcbiAgICAgICAgICBwaG9uZTogcmVwbGFjZURhdGUodmFsdWVzLnBob25lKSxcclxuICAgICAgICAgIGVtYWlsOiB2YWx1ZXMuZW1haWwsXHJcbiAgICAgICAgICBwYXNzd29yZDogdmFsdWVzLnBhc3N3b3JkLFxyXG4gICAgICAgICAgdHlwZTogdmFsdWVzLnR5cGUsXHJcbiAgICAgICAgICBpaW46IGJpblZhbCxcclxuICAgICAgICAgIHNvdXJjZTogJ25hc2hjb21wYW55Lmt6J1xyXG4gICAgICAgIH1cclxuICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcblxyXG4gICAgICAgIGlmIChyZXMuZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICBzZXRNb2RhbCh0cnVlKVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFyZXMuZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICBhZGRUb2FzdChyZXMuZGF0YS5tZXNzYWdlLCB7XHJcbiAgICAgICAgICAgIGFwcGVhcmFuY2U6ICdlcnJvcicsXHJcbiAgICAgICAgICAgIGF1dG9EaXNtaXNzOiB0cnVlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgIGlmIChlcnIucmVzcG9uc2UpIHtcclxuICAgICAgICAgIGFkZFRvYXN0KGVyci5yZXNwb25zZS5zdGF0dXMsIHtcclxuICAgICAgICAgICAgYXBwZWFyYW5jZTogJ2Vycm9yJyxcclxuICAgICAgICAgICAgYXV0b0Rpc21pc3M6IHRydWVcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGNvbnN0IGZpcnN0U3RlcCA9IChjb2RlVmFsKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICBjb25zdCBvYmplY3QgPSB7XHJcbiAgICAgIGZpbzogZm9ybURhdGEuZmlvLFxyXG4gICAgICBwaG9uZTogcmVwbGFjZURhdGUoZm9ybURhdGEucGhvbmUpLFxyXG4gICAgICBlbWFpbDogZm9ybURhdGEuZW1haWwsXHJcbiAgICAgIHBhc3N3b3JkOiBmb3JtRGF0YS5wYXNzd29yZCxcclxuICAgICAgdHlwZTogZm9ybURhdGEudHlwZSxcclxuICAgICAgY29kZTogY29kZVZhbCxcclxuICAgICAgaWluOiBiaW5WYWwsXHJcbiAgICAgIGNvbXBhbnlOYW1lOiBvcmdhbml6YXRpb24udmFsdWUsXHJcbiAgICAgIHNvdXJjZTogY29va2llLmdldCgndXRtX3NvdXJjZScpICsgJ18xJyB8fCAnbmFzaGNvbXBhbnkua3onXHJcbiAgICB9XHJcbiAgICBpZiAoY29va2llLmdldCgndXRtX3NvdXJjZScpICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgb2JqZWN0LnV0bV9zb3VyY2UgPSBjb29raWUuZ2V0KCd1dG1fc291cmNlJylcclxuICAgICAgb2JqZWN0LmNsaWNrX2lkID0gY29va2llLmdldCgnY2xpY2tfaWQnKVxyXG4gICAgICAvLyBvYmplY3Qud2ViSUQgPSBjb29raWUuZ2V0KCd3ZWJfaWQnKVxyXG4gICAgfVxyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vc3RlcE9uZWAsIHtwYXJhbXM6IG9iamVjdH0pXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuXHJcbiAgICAgICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgIGNvb2tpZS5zZXQoJ3Rva2VuJywgcmVzLmRhdGEudG9rZW4pXHJcbiAgICAgICAgICBjb29raWUuc2V0KCdsZWFkX2lkJywgcmVzLmRhdGEuaWQpXHJcbiAgICAgICAgICBjb29raWUuc2V0KCdzdGVwanVyJywgMilcclxuICAgICAgICAgIFJvdXRlci5wdXNoKCcvanVyc2VydmljZT9zdGVwPTInKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXJlcy5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgIHNldENvZGVFcnJvcihyZXMuZGF0YS5tZXNzYWdlKVxyXG4gICAgICAgICAgYWRkVG9hc3QoZmluYWxFcnIsIHtcclxuICAgICAgICAgICAgYXBwZWFyYW5jZTogJ2Vycm9yJyxcclxuICAgICAgICAgICAgYXV0b0Rpc21pc3M6IHRydWVcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBzZXRFcnJvcnMoe1xyXG4gICAgICAuLi5lcnJvcnMsXHJcbiAgICAgIGVtYWlsOiBlbWFpbFZhbGlkKGZvcm1EYXRhLmVtYWlsKSxcclxuICAgICAgZmlvOiByZXF1aXJlZChmb3JtRGF0YS5maW8pLFxyXG4gICAgICBwaG9uZTogcGhvbmVWYWxpZGF0aW9uKGZvcm1EYXRhLnBob25lKSxcclxuICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkVmFsaWQoZm9ybURhdGEucGFzc3dvcmQpXHJcbiAgICB9KVxyXG5cclxuICAgIGdldElkZW50aWZpY2F0aW9uKClcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IG5hbWUgPSBlLnRhcmdldC5uYW1lO1xyXG4gICAgc2V0Rm9ybURhdGEoe1xyXG4gICAgICAuLi5mb3JtRGF0YSxcclxuICAgICAgW25hbWVdOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybV9yZWdpc3Rlcic+XHJcbiAgICAgICAgPEZvcm1pa1xyXG4gICAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xyXG4gICAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgICAgcG9zaXRpb246ICcxJyxcclxuICAgICAgICAgIHBob25lOiAnJyxcclxuICAgICAgICAgIGZpbzogJycsXHJcbiAgICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgICAgICB0eXBlOiAn0K7RgCDQu9C40YbQvicsXHJcbiAgICAgICAgICBpaW46ICcnXHJcbiAgICAgICAgfX1cclxuICAgICAgICAgIG9uU3VibWl0PXsodmFsdWVzKSA9PiB7XHJcbiAgICAgICAgICBnZXRJZGVudGlmaWNhdGlvbih2YWx1ZXMpXHJcbiAgICAgICAgfX0+XHJcbiAgICAgICAgICB7KHtlcnJvcnMsIHRvdWNoZWR9KSA9PiAoXHJcbiAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgbmFtZT0naWluJ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0n0JHQmNCdJ1xyXG4gICAgICAgICAgICAgICAgdHlwZT0ndGVsJ1xyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtJaW5NYXNrfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gYmluQ2hhbmdlKGUpfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2JpblZhbH0vPlxyXG4gICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyhvcmdhbml6YXRpb24udHlwZSA9PT0gZmFsc2UgJiYgb3JnYW5pemF0aW9uLnZhbHVlKSAmJiAnZGlzYWJsZWRfZXJyb3IgdGV4dC1kYW5nZXInfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e29yZ2FuaXphdGlvbi52YWx1ZX1cclxuICAgICAgICAgICAgICAgIG5hbWU9J2NvbXBhbnlOYW1lJ1xyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J9Cd0LDQt9Cy0LDQvdC40LUg0J7RgNCz0LDQvdC40LfQsNGG0LjQuCcvPiB7LyogPGlucHV0IHR5cGU9J3RleHQnIGNsYXNzTmFtZT17KG9yZ2FuaXphdGlvbi50eXBlID09PSBmYWxzZSAmJiBvcmdhbml6YXRpb24udmFsdWUpICYmICdkaXNhYmxlZF9lcnJvcid9IHZhbHVlPXtvcmdhbml6YXRpb24udmFsdWV9IGRpc2FibGVkIG5hbWU9J29yZ2FuaXphdGlvbicgcGxhY2Vob2xkZXI9J9Cd0LDQt9Cy0LDQvdC40LUg0J7RgNCz0LDQvdC40LfQsNGG0LjQuCcgLz4gKi99XHJcbiAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICBhcz0nc2VsZWN0J1xyXG4gICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgIG5hbWU9J3Bvc2l0aW9uJ1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU9e3JlcXVpcmVkfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J9CX0LDQvdC40LzQsNC10LzQsNGPINC00L7Qu9C20L3QvtGB0YLRjCdcclxuICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT0nb2ZmJz57cG9zaXRpb25zLm1hcChwID0+IChcclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17cC52YWx1ZX0+e3AubmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICkpfTwvRmllbGQ+XHJcbiAgICAgICAgICAgICAgeyhlcnJvcnMucG9zaXRpb24gJiYgdG91Y2hlZC5wb3NpdGlvbilcclxuICAgICAgICAgICAgICAgID8gPHAgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+e2Vycm9ycy5wb3NpdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICA6IDxwIGNsYXNzTmFtZT0nJz48L3A+fVxyXG5cclxuICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdmaW8nXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZT17YWNjZXB0Q2lycmlsaWN9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0n0KTQmNCeJ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjYXBpdGFsaXplJ1xyXG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPSdvZmYnLz4geyhlcnJvcnMuZmlvICYmIHRvdWNoZWQuZmlvKVxyXG4gICAgICAgICAgICAgICAgPyA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz57ZXJyb3JzLmZpb308L3A+XHJcbiAgICAgICAgICAgICAgICA6IDxwIGNsYXNzTmFtZT0nJz48L3A+fVxyXG5cclxuICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgIG5hbWU9J3Bob25lJ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0n0KLQtdC70LXRhNC+0L0g0L3QvtC80LXRgCdcclxuICAgICAgICAgICAgICAgIHR5cGU9J3RlbCdcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlPXtwaG9uZVZhbGlkYXRpb259XHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1Bob25lTWFza30+PC9GaWVsZD5cclxuICAgICAgICAgICAgICB7KGVycm9ycy5waG9uZSAmJiB0b3VjaGVkLnBob25lKVxyXG4gICAgICAgICAgICAgICAgPyA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz57ZXJyb3JzLnBob25lfTwvcD5cclxuICAgICAgICAgICAgICAgIDogPHAgY2xhc3NOYW1lPScnPjwvcD59XHJcblxyXG4gICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgIG5hbWU9J2VtYWlsJ1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU9e2VtYWlsVmFsaWR9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW1haWwnXHJcbiAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9J29mZicvPiB7KGVycm9ycy5lbWFpbCAmJiB0b3VjaGVkLmVtYWlsKVxyXG4gICAgICAgICAgICAgICAgPyA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz57ZXJyb3JzLmVtYWlsfTwvcD5cclxuICAgICAgICAgICAgICAgIDogPHAgY2xhc3NOYW1lPScnPjwvcD59XHJcblxyXG4gICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdwYXNzd29yZCdcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlPXtwYXNzd29yZFZhbGlkfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J9Cf0YDQuNC00YPQvNCw0LnRgtC1INC/0LDRgNC+0LvRjCdcclxuICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT0nb2ZmJy8+IHsoZXJyb3JzLnBhc3N3b3JkICYmIHRvdWNoZWQucGFzc3dvcmQpXHJcbiAgICAgICAgICAgICAgICA/IDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPntlcnJvcnMucGFzc3dvcmR9PC9wPlxyXG4gICAgICAgICAgICAgICAgOiA8cCBjbGFzc05hbWU9Jyc+PC9wPn1cclxuICAgICAgICAgICAgICB7LyogPEZpZWxkXHJcbiAgICAgICAgICAgICAgICB0eXBlPSdwYXNzd29yZCdcclxuICAgICAgICAgICAgICAgIG5hbWU9J3Bhc3N3b3JkJ1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU9e3Bhc3N3b3JkVmFsaWR9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0n0J/RgNC40LTRg9C80LDQudGC0LUg0L/QsNGA0L7Qu9GMJ1xyXG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPSdvZmYnLz5cclxuICAgICAgICAgICAgICAgICB7KGVycm9ycy5wYXNzd29yZCAmJiB0b3VjaGVkLnBhc3N3b3JkKSA/IDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPntlcnJvcnMucGFzc3dvcmR9PC9wPiA6ICA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz48L3A+fSAqL31cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpcnN0c3RlcF9iYW5uZXInPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpcnN0c3RlcF9iYW5uZXItLWltZyc+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PSdpbWFnZScgY2xhc3NOYW1lPSdmaXJzdHN0ZXAnIHNyYz0nL2ltZy9mb3JtL2ZpcnN0c3RlcC5zdmcnLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpcnN0c3RlcF9iYW5uZXItLWJ1dHRvbic+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2luZ2xlYnRuJ1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2J1dHRvbidcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVGb2N1cygpfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPSfQpdC+0YfRgyDRgdC60LjQtNC60LgnLz5cclxuICAgICAgICAgICAgICAgICAgPGI+0KHQu9C10LTRg9GO0YnQuNC5INGI0LDQszxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgINC00LDRgdGCIDUwJSDRgdC60LjQtNC60Lg8L2I+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Gb3JtaWs+XHJcbiAgICAgICAgPENvZGVNb2RhbFxyXG4gICAgICAgICAgaXNNb2RhbE9wZW49e21vZGFsfVxyXG4gICAgICAgICAgY2xvc2VNb2RhbD17Y2xvc2VNb2RhbH1cclxuICAgICAgICAgIGNvZGU9e2NvZGV9XHJcbiAgICAgICAgICBzZXRDb2RlPXtzZXRDb2RlfVxyXG4gICAgICAgICAgb25GaXJzdFN0ZXA9e2ZpcnN0U3RlcH1cclxuICAgICAgICAgIGVycm9yPXtjb2RlRXJyb3J9XHJcbiAgICAgICAgICBnZXRJZGVudGlmaWNhdGlvbj17Z2V0SWRlbnRpZmljYXRpb259Lz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBGaXJzdFJlZyA9ICh7c2V0TG9hZGluZ30pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFRvYXN0UHJvdmlkZXI+XHJcbiAgICAgIDxGaXJzdFN0ZXAgc2V0TG9hZGluZz17c2V0TG9hZGluZ30vPlxyXG4gICAgPC9Ub2FzdFByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlyc3RSZWciXSwic291cmNlUm9vdCI6IiJ9