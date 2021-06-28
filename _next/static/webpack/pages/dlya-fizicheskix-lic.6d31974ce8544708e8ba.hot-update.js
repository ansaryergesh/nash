self["webpackHotUpdate_N_E"]("pages/dlya-fizicheskix-lic",{

/***/ "./components/getservice/ThirdStep.js":
/*!********************************************!*\
  !*** ./components/getservice/ThirdStep.js ***!
  \********************************************/
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
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _defaults_extraFunction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../defaults/extraFunction */ "./defaults/extraFunction.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _shared_CodeModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/CodeModal */ "./components/shared/CodeModal.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "E:\\job\\nashcompany\\components\\getservice\\ThirdStep.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var mapStateToProps = function mapStateToProps(_ref) {
  var _ref$userReducer = _ref.userReducer,
      user = _ref$userReducer.user,
      loggedIn = _ref$userReducer.loggedIn;
  return {
    user: user,
    loggedIn: loggedIn
  };
};

var ThirdStep = function ThirdStep(_ref2) {
  _s();

  var _jsxDEV2, _jsxDEV3;

  var setLoading = _ref2.setLoading,
      user = _ref2.user,
      loggedIn = _ref2.loggedIn;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  var id = router.query.id;
  var pathname = router.pathname;
  var token = router.query.token;
  var amount = router.query.amount;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),
      amountVal = _useState[0],
      setAmount = _useState[1];

  var leadID = router.query.leadID;

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      aggrToken = _useState2[0],
      setAggrToken = _useState2[1];

  var finalAmount = amount ? amount : amountVal;

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      aggrId = _useState3[0],
      setAggrId = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),
      phone = _useState4[0],
      setPhone = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      modal = _useState5[0],
      setModal = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      code = _useState6[0],
      setCode = _useState6[1];

  var finalID = id || leadID;
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    var summa = js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get('amount') !== undefined ? js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get('amount') : finalAmount;
    var finalSumma = Math.floor(parseInt(summa) * 0.2);
    var discountSumma = Math.floor(parseInt(finalSumma) / 2);

    if (finalSumma > 200000) {
      setSumma(finalSumma);
      setDiscount(discountSumma);
    } else {
      setSumma(200000);
      setDiscount(100000);
    }

    console.log(finalSumma);
  }, [js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get('amount')]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    if (token) {
      setAggrToken(token);
    }
  }, [token]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    if (pathname === '/aggrement' && aggrToken) {
      console.log('yes');
      axios__WEBPACK_IMPORTED_MODULE_2___default().get("".concat("https://crediter.kz/api", "/getDataSign?token=").concat(aggrToken)).then(function (res) {
        console.log(aggrToken);
        console.log(res);

        if (!res.data.id) {
          console.log('this');
          router.push('/');
        } else {
          setPhone(res.data.phone);
          setAggrId(res.data.id);
          setAmount(parseInt(res.data.amount));
        }
      });
    }
  }, [aggrToken]);

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),
      summa = _useState7[0],
      setSumma = _useState7[1];

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),
      discount = _useState8[0],
      setDiscount = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      predoplata = _useState9[0],
      setOplata = _useState9[1];

  var _useState10 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)((0,_defaults_extraFunction__WEBPACK_IMPORTED_MODULE_7__.parseDate)(1)),
      paymentDate = _useState10[0],
      setPaymentDate = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      errorCode = _useState11[0],
      setError = _useState11[1];

  var _useState12 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
    "doc1": true,
    "doc2": true,
    "doc3": true,
    "doc4": true
  }),
      docs = _useState12[0],
      setDocs = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('1'),
      srok = _useState13[0],
      setSrok = _useState13[1];

  var checkDoc = function checkDoc(e) {
    var name = e.target.dataset.name; // console.log(docs[name])

    setDocs(_objectSpread(_objectSpread({}, docs), {}, (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, name, !docs[name])));
    console.log(docs);
  };

  var changeOplata = function changeOplata(e) {
    var name = e.target.getAttribute('data-name');
    setOplata(!predoplata);
  };

  var changeSrok = function changeSrok(e) {
    var month = parseInt(e.target.value);
    setSrok(e.target.value);
    setPaymentDate((0,_defaults_extraFunction__WEBPACK_IMPORTED_MODULE_7__.parseDate)(month));

    if (e.target.value > 2) {
      var element = document.querySelector('.range__list');
      element.scrollLeft = -300;
    } else {
      var _element = document.querySelector('.range__list');

      _element.scrollLeft = 300;
    }
  };

  var changeSrokBtn = function changeSrokBtn(month) {
    var monthVal = parseInt(month);
    setSrok(month);
    setPaymentDate((0,_defaults_extraFunction__WEBPACK_IMPORTED_MODULE_7__.parseDate)(monthVal));

    if (monthVal > 3) {
      var element = document.querySelector('.range__list');
      element.scrollLeft = 200;
    } else {
      var _element2 = document.querySelector('.range__list');

      _element2.scrollRight = 200;
    }
  };

  var aggrementSbmt = function aggrementSbmt() {
    // e.preventDefault()
    setLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_2___default().get("".concat("https://crediter.kz/api", "/removeShortUrl"), {
      params: {
        id: aggrId,
        typePayment: predoplata ? 'Предоплата' : 'Постоплата',
        period: srok,
        date_payment: paymentDate,
        amountPayment: discount
      }
    }).then(function (res) {
      if (res.status === 200) {
        sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Успешно!", "\u0412\u0430\u0448\u0430 \u0437\u0430\u044F\u0432\u043A\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430 \u0432 Nash Company. \u0412\u0430\u043C \u0441\u0435\u0439\u0447\u0430\u0441 \u043F\u0435\u0440\u0435\u0437\u0432\u043E\u043D\u044F\u0442 \u0441 \u043D\u043E\u043C\u0435\u0440\u0430 +7(700)350-50-00", "success").then(function () {
          router.push('/');
        });
      }

      setLoading(false);
    })["catch"](function (err) {
      setLoading(false);
    });
  };

  var stepThird = function stepThird() {
    // e.preventDefault()
    var object = {
      id: js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get('lead_id') === undefined ? finalID : js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get('lead_id'),
      token: js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get('token'),
      amountPayment: discount,
      date_payment: paymentDate,
      period: srok,
      typePayment: predoplata ? 'Предоплата' : 'Постоплата'
    };

    if (js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get('utm_source') !== undefined) {
      object.utm_source = js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get('utm_source');
      object.click_id = js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get('click_id'); // object.webID = cookie.get('web_id')
    }

    setLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_2___default().get("".concat("https://crediter.kz/api", "/stepThree"), {
      params: object
    }).then(function (res) {
      setLoading(false);
      console.log(res);

      if (res.data.success) {
        sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Успешно!", "\u0412\u0430\u0448\u0430 \u0437\u0430\u044F\u0432\u043A\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430 \u0432 Nash Company. \u0412\u0430\u043C \u0441\u0435\u0439\u0447\u0430\u0441 \u043F\u0435\u0440\u0435\u0437\u0432\u043E\u043D\u044F\u0442 \u0441 \u043D\u043E\u043C\u0435\u0440\u0430 +7(700)350-50-00", "success").then(function () {
          next_router__WEBPACK_IMPORTED_MODULE_5___default().push('/cabinet/requests');
          js_cookie__WEBPACK_IMPORTED_MODULE_4___default().remove('lead_id');
          js_cookie__WEBPACK_IMPORTED_MODULE_4___default().remove('step');
          js_cookie__WEBPACK_IMPORTED_MODULE_4___default().remove('utm_medium');
          js_cookie__WEBPACK_IMPORTED_MODULE_4___default().remove('utm_source');
          js_cookie__WEBPACK_IMPORTED_MODULE_4___default().remove('utm_campaign');
          js_cookie__WEBPACK_IMPORTED_MODULE_4___default().remove('click_id');
        });
      }
    });
  };

  var finalSubmit = function finalSubmit() {
    if (pathname === '/aggrement') {
      aggrementSbmt();
    } else {
      stepThird();
    }
  };

  var closeModal = function closeModal() {
    setCode('');
    setError('');
    setModal(false);
  };

  var onModal = function onModal(param) {
    setLoading(true);
    setModal(false);
    setError('');
    axios__WEBPACK_IMPORTED_MODULE_2___default().get("".concat("https://crediter.kz/api", "/fourthStage?phone=").concat(param)).then(function (res) {
      setLoading(false);

      if (res.data.success) {
        setModal(true);
      } else {}
    })["catch"](function (err) {
      setLoading(false);
      setModal(false);
    });
  };

  var openCodeModal = function openCodeModal(e) {
    e.preventDefault();
    console.log(loggedIn);

    if (js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get('token') === undefined && phone === null) {
      js_cookie__WEBPACK_IMPORTED_MODULE_4___default().remove('step');
      router.push('/');
    }

    if (pathname === '/aggrement' && phone) {
      onModal(phone);
    }

    if (pathname !== '/aggrement' && loggedIn) {
      onModal(user.phone);
    }
  };

  var repeatCode = function repeatCode() {
    console.log(loggedIn);

    if (js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get('token') === undefined && phone === null) {
      js_cookie__WEBPACK_IMPORTED_MODULE_4___default().remove('step');
      router.push('/');
    }

    if (pathname === '/aggrement' && phone) {
      onModal(phone);
    }

    if (pathname !== '/aggrement' && loggedIn) {
      onModal(user.phone);
    }
  };

  var checkCode = function checkCode(param, codeVal) {
    setError('');
    axios__WEBPACK_IMPORTED_MODULE_2___default().get("".concat("https://crediter.kz/api", "/checkCode?phone=").concat(param, "&code=").concat(codeVal)).then(function (res) {
      console.log(res);

      if (res.data.success) {
        finalSubmit();
      } else {
        setError(res.data.message);
      }
    })["catch"](function (err) {
      setError('Что то полшо не так');
    });
  };

  var sendCodeCheck = function sendCodeCheck(codeVal) {
    if (pathname === '/aggrement' && phone) {
      checkCode(phone, codeVal);
    }

    if (pathname !== '/aggrement' && loggedIn) {
      checkCode(user.phone, codeVal);
    }
  }; // const dogovorobrabotka = () => {   if(pathname === '/aggrement') {     return
  // `/dogovorobrabotka?token=${token}`   }   if(pathname ===
  // '/cabinet/continue') {     return `/dogovorobrabotka?id=${id}`   }   else {
  //   return '/dogovorobrabotka'   } }


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "form_register thirdstep",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      onSubmit: function onSubmit(e) {
        return openCodeModal(e);
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "radio_groups",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", (_jsxDEV2 = {
          className: "postoplata",
          "data-name": "postoplata"
        }, (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_jsxDEV2, "className", "check-group"), (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_jsxDEV2, "onClick", function onClick(e) {
          return changeOplata(e);
        }), (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_jsxDEV2, "children", [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "checkbox",
          checked: predoplata === false
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 309,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          className: "radiolabel",
          children: "\u041F\u043E\u0441\u0442\u043E\u043F\u043B\u0430\u0442\u0430"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 310,
          columnNumber: 13
        }, _this)]), _jsxDEV2), void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 304,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", (_jsxDEV3 = {
          className: "predoplata",
          "data-name": "predoplata"
        }, (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_jsxDEV3, "className", "check-group"), (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_jsxDEV3, "onClick", function onClick(e) {
          return changeOplata(e);
        }), (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_jsxDEV3, "children", [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "checkbox",
          checked: predoplata === true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 318,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          className: "radiolabel",
          children: "\u041F\u0440\u0435\u0434\u043E\u043F\u043B\u0430\u0442\u0430"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 320,
          columnNumber: 13
        }, _this)]), _jsxDEV3), void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 313,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 303,
        columnNumber: 9
      }, _this), !predoplata && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "range",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "srok_month",
          children: "\u0421\u0440\u043E\u043A \u043E\u043F\u043B\u0430\u0442\u044B (\u043C\u0435\u0441\u044F\u0446)"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 325,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          className: "range__input",
          type: "range",
          value: srok,
          onChange: function onChange(e) {
            return changeSrok(e);
          },
          min: "1",
          max: "3",
          step: "1",
          list: "number"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 326,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("datalist", {
          className: "range__list",
          id: "number",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            onClick: function onClick() {
              return changeSrokBtn('1');
            },
            className: "range__opt opt0 ".concat(srok === '1' && 'active'),
            children: "1"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 336,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            onClick: function onClick() {
              return changeSrokBtn('2');
            },
            className: "range__opt ".concat(srok === '2' && 'active'),
            children: "2"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 339,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            onClick: function onClick() {
              return changeSrokBtn('3');
            },
            className: "range__opt ".concat(srok === '3' && 'active'),
            children: "3"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 342,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 335,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 324,
        columnNumber: 25
      }, _this), !predoplata && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "payment_date",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
          children: ["\u0414\u0435\u043D\u044C \u043E\u043F\u043B\u0430\u0442\u044B \u0434\u043E ", paymentDate]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 358,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 357,
        columnNumber: 25
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "payment_amount",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "\u0421\u0443\u043C\u043C\u0430 \u043E\u043F\u043B\u0430\u0442\u044B:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 369,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
            children: [(0,_defaults_extraFunction__WEBPACK_IMPORTED_MODULE_7__.amountSpace)("".concat(discount)), "\u0442\u0433"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 371,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            "class": "price--line-through",
            children: [(0,_defaults_extraFunction__WEBPACK_IMPORTED_MODULE_7__.amountSpace)("".concat(summa)), "\u0442\u0433"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 372,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 370,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "discount",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: ["-50%", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: "\u0421\u041A\u0418\u0414\u041A\u0410"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 377,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 376,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 374,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 368,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "check_groups",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "data-name": "predoplata",
          className: "check-group",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "checkbox",
            checked: docs.doc1
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 383,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            onClick: function onClick(e) {
              return checkDoc(e);
            },
            "data-name": "doc1",
            className: "checklabel"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 384,
            columnNumber: 13
          }, _this), token ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "/dogovorobrabotka?token=".concat(token),
            target: "__blank",
            children: "\u0417\u0430\u043F\u0440\u043E\u0441 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 386,
            columnNumber: 17
          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "/dogovorobrabotka",
            target: "__blank",
            children: "\u0417\u0430\u043F\u0440\u043E\u0441 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 387,
            columnNumber: 17
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 382,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "data-name": "postoplata",
          className: "check-group",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "checkbox",
            checked: docs.doc2
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 391,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            onClick: function onClick(e) {
              return checkDoc(e);
            },
            className: "checklabel",
            "data-name": "doc2"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 392,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "/\u041F\u0423\u0411\u041B\u0418\u0427\u041D\u0410\u042F \u041E\u0424\u0415\u0420\u0422\u0410.pdf",
            target: "__blank",
            children: "\u0414\u043E\u0433\u043E\u0432\u043E\u0440 \u043F\u0443\u0431\u043B\u0438\u0447\u043D\u043E\u0439 \u043E\u0444\u0435\u0440\u0442\u044B"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 394,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 390,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "data-name": "predoplata",
          className: "check-group",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "checkbox",
            checked: docs.doc4
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 398,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            onClick: function onClick(e) {
              return checkDoc(e);
            },
            className: "checklabel",
            "data-name": "doc4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 399,
            columnNumber: 13
          }, _this), token ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "/dogovor?paymentDate=".concat(paymentDate, "&period=").concat(srok, "&token=").concat(token),
            target: "__blank",
            children: "\u0414\u043E\u0433\u043E\u0432\u043E\u0440 \u043D\u0430 \u0437\u0430\u043A\u0430\u0437 \u043D\u0430\u0440\u044F\u0434"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 401,
            columnNumber: 17
          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "/dogovor?paymentDate=".concat(paymentDate, "&period=").concat(srok),
            target: "__blank",
            children: "\u0414\u043E\u0433\u043E\u0432\u043E\u0440 \u043D\u0430 \u0437\u0430\u043A\u0430\u0437 \u043D\u0430\u0440\u044F\u0434"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 404,
            columnNumber: 17
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 397,
          columnNumber: 11
        }, _this), Object.keys(docs).some(function (k) {
          return !docs[k];
        }) ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "submit",
          disabled: true,
          onClick: function onClick() {
            return (0,_defaults_extraFunction__WEBPACK_IMPORTED_MODULE_7__.handleFocus)();
          },
          className: "button button_lightest",
          value: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 411,
          columnNumber: 15
        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "submit",
          className: "button",
          value: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 417,
          columnNumber: 15
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 381,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_CodeModal__WEBPACK_IMPORTED_MODULE_9__.default, {
      isModalOpen: modal,
      closeModal: closeModal,
      code: code,
      setCode: setCode,
      onFirstStep: sendCodeCheck,
      getIdentification: repeatCode,
      error: errorCode
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 422,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 301,
    columnNumber: 5
  }, _this);
};

_s(ThirdStep, "kTOToj+EMswOm1zQTnrd6OgiPZU=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter];
});

_c = ThirdStep;
/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_8__.connect)(mapStateToProps, null)(ThirdStep));

var _c;

$RefreshReg$(_c, "ThirdStep");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRzZXJ2aWNlL1RoaXJkU3RlcC5qcyJdLCJuYW1lcyI6WyJtYXBTdGF0ZVRvUHJvcHMiLCJ1c2VyUmVkdWNlciIsInVzZXIiLCJsb2dnZWRJbiIsIlRoaXJkU3RlcCIsInNldExvYWRpbmciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwicGF0aG5hbWUiLCJ0b2tlbiIsImFtb3VudCIsInVzZVN0YXRlIiwiYW1vdW50VmFsIiwic2V0QW1vdW50IiwibGVhZElEIiwiYWdnclRva2VuIiwic2V0QWdnclRva2VuIiwiZmluYWxBbW91bnQiLCJhZ2dySWQiLCJzZXRBZ2dySWQiLCJwaG9uZSIsInNldFBob25lIiwibW9kYWwiLCJzZXRNb2RhbCIsImNvZGUiLCJzZXRDb2RlIiwiZmluYWxJRCIsInVzZUVmZmVjdCIsInN1bW1hIiwiY29va2llIiwidW5kZWZpbmVkIiwiZmluYWxTdW1tYSIsIk1hdGgiLCJmbG9vciIsInBhcnNlSW50IiwiZGlzY291bnRTdW1tYSIsInNldFN1bW1hIiwic2V0RGlzY291bnQiLCJjb25zb2xlIiwibG9nIiwiYXhpb3MiLCJwcm9jZXNzIiwidGhlbiIsInJlcyIsImRhdGEiLCJwdXNoIiwiZGlzY291bnQiLCJwcmVkb3BsYXRhIiwic2V0T3BsYXRhIiwicGFyc2VEYXRlIiwicGF5bWVudERhdGUiLCJzZXRQYXltZW50RGF0ZSIsImVycm9yQ29kZSIsInNldEVycm9yIiwiZG9jcyIsInNldERvY3MiLCJzcm9rIiwic2V0U3JvayIsImNoZWNrRG9jIiwiZSIsIm5hbWUiLCJ0YXJnZXQiLCJkYXRhc2V0IiwiY2hhbmdlT3BsYXRhIiwiZ2V0QXR0cmlidXRlIiwiY2hhbmdlU3JvayIsIm1vbnRoIiwidmFsdWUiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsTGVmdCIsImNoYW5nZVNyb2tCdG4iLCJtb250aFZhbCIsInNjcm9sbFJpZ2h0IiwiYWdncmVtZW50U2JtdCIsInBhcmFtcyIsInR5cGVQYXltZW50IiwicGVyaW9kIiwiZGF0ZV9wYXltZW50IiwiYW1vdW50UGF5bWVudCIsInN0YXR1cyIsInN3YWwiLCJlcnIiLCJzdGVwVGhpcmQiLCJvYmplY3QiLCJ1dG1fc291cmNlIiwiY2xpY2tfaWQiLCJzdWNjZXNzIiwiUm91dGVyIiwiZmluYWxTdWJtaXQiLCJjbG9zZU1vZGFsIiwib25Nb2RhbCIsInBhcmFtIiwib3BlbkNvZGVNb2RhbCIsInByZXZlbnREZWZhdWx0IiwicmVwZWF0Q29kZSIsImNoZWNrQ29kZSIsImNvZGVWYWwiLCJtZXNzYWdlIiwic2VuZENvZGVDaGVjayIsImFtb3VudFNwYWNlIiwiZG9jMSIsImRvYzIiLCJkb2M0IiwiT2JqZWN0Iiwia2V5cyIsInNvbWUiLCJrIiwiaGFuZGxlRm9jdXMiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQjtBQUFBLDhCQUN0QkMsV0FEc0I7QUFBQSxNQUVwQkMsSUFGb0Isb0JBRXBCQSxJQUZvQjtBQUFBLE1BR3BCQyxRQUhvQixvQkFHcEJBLFFBSG9CO0FBQUEsU0FLakI7QUFBQ0QsUUFBSSxFQUFKQSxJQUFEO0FBQU9DLFlBQVEsRUFBUkE7QUFBUCxHQUxpQjtBQUFBLENBQXhCOztBQU9BLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLFFBRVo7QUFBQTs7QUFBQTs7QUFBQSxNQURKQyxVQUNJLFNBREpBLFVBQ0k7QUFBQSxNQURRSCxJQUNSLFNBRFFBLElBQ1I7QUFBQSxNQURhQyxRQUNiLFNBRGFBLFFBQ2I7QUFDSixNQUFNRyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBREksTUFFR0MsRUFGSCxHQUVTRixNQUFNLENBQUNHLEtBRmhCLENBRUdELEVBRkg7QUFHSixNQUFN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QTtBQUFBO0FBQUE7QUFBQSxpQkFISCxnQkFTRztBQUFPLGNBQUksRUFBQyxRQUFaO0FBQXFCLG1CQUFTLEVBQUMsUUFBL0I7QUFBd0MsZUFBSyxFQUFDO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBcENOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQS9FRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQXlIRSw4REFBQyxzREFBRDtBQUNFLGlCQUFXLEVBQUV2RixLQURmO0FBRUUsZ0JBQVUsRUFBRXFFLFVBRmQ7QUFHRSxVQUFJLEVBQUVuRSxJQUhSO0FBSUUsYUFBTyxFQUFFQyxPQUpYO0FBS0UsaUJBQVcsRUFBRTJFLGFBTGY7QUFNRSx1QkFBaUIsRUFBRUosVUFOckI7QUFPRSxXQUFLLEVBQUU1QztBQVBUO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF6SEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRkY7QUFxSUQsQ0EvWkQ7O0dBQU1sRCxTO1VBR1dHLGtEOzs7S0FIWEgsUztBQWlhTiwrREFBZTRHLG9EQUFPLENBQUNoSCxlQUFELEVBQWtCLElBQWxCLENBQVAsQ0FBK0JJLFNBQS9CLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGx5YS1maXppY2hlc2tpeC1saWMuNmQzMTk3NGNlODU0NDcwOGU4YmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJ1xyXG5pbXBvcnQgUm91dGVyLCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHN3YWwgZnJvbSAnc3dlZXRhbGVydCdcclxuaW1wb3J0IHthbW91bnRTcGFjZSwgaGFuZGxlRm9jdXMsIHBhcnNlRGF0ZX0gZnJvbSBcIi4uLy4uL2RlZmF1bHRzL2V4dHJhRnVuY3Rpb25cIlxyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiXHJcbmltcG9ydCBDb2RlTW9kYWwgZnJvbSAnLi4vc2hhcmVkL0NvZGVNb2RhbCdcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7XHJcbiAgdXNlclJlZHVjZXI6IHtcclxuICAgIHVzZXIsXHJcbiAgICBsb2dnZWRJblxyXG4gIH1cclxufSkgPT4gKHt1c2VyLCBsb2dnZWRJbn0pO1xyXG5cclxuY29uc3QgVGhpcmRTdGVwID0gKHtcclxuICBzZXRMb2FkaW5nLCB1c2VyLGxvZ2dlZEluXHJcbn0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHtpZH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3QgcGF0aG5hbWUgPSByb3V0ZXIucGF0aG5hbWVcclxuICBjb25zdCB7dG9rZW59ID0gcm91dGVyLnF1ZXJ5XHJcbiAgY29uc3Qge2Ftb3VudH0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCBbYW1vdW50VmFsLFxyXG4gICAgc2V0QW1vdW50XSA9IHVzZVN0YXRlKDApXHJcbiAgY29uc3Qge2xlYWRJRH0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCBbYWdnclRva2VuLFxyXG4gICAgc2V0QWdnclRva2VuXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IGZpbmFsQW1vdW50ID0gYW1vdW50XHJcbiAgICA/IGFtb3VudFxyXG4gICAgOiBhbW91bnRWYWxcclxuICBjb25zdCBbYWdncklkLFxyXG4gICAgc2V0QWdncklkXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtwaG9uZSxcclxuICAgIHNldFBob25lXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW21vZGFsLFxyXG4gICAgc2V0TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2NvZGUsXHJcbiAgICBzZXRDb2RlXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IGZpbmFsSUQgPSBpZCB8fCBsZWFkSURcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc3VtbWEgPSBjb29raWUuZ2V0KCdhbW91bnQnKSAhPT0gdW5kZWZpbmVkXHJcbiAgICAgID8gY29va2llLmdldCgnYW1vdW50JylcclxuICAgICAgOiBmaW5hbEFtb3VudFxyXG4gICAgY29uc3QgZmluYWxTdW1tYSA9IE1hdGguZmxvb3IocGFyc2VJbnQoc3VtbWEpICogMC4yKVxyXG4gICAgY29uc3QgZGlzY291bnRTdW1tYSA9IE1hdGguZmxvb3IocGFyc2VJbnQoZmluYWxTdW1tYSkgLyAyKVxyXG4gICAgaWYgKGZpbmFsU3VtbWEgPiAyMDAwMDApIHtcclxuICAgICAgc2V0U3VtbWEoZmluYWxTdW1tYSlcclxuICAgICAgc2V0RGlzY291bnQoZGlzY291bnRTdW1tYSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFN1bW1hKDIwMDAwMClcclxuICAgICAgc2V0RGlzY291bnQoMTAwMDAwKVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coZmluYWxTdW1tYSlcclxuICB9LCBbY29va2llLmdldCgnYW1vdW50JyldKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHRva2VuKSB7XHJcbiAgICAgIHNldEFnZ3JUb2tlbih0b2tlbilcclxuICAgIH1cclxuXHJcbiAgfSwgW3Rva2VuXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHBhdGhuYW1lID09PSAnL2FnZ3JlbWVudCcgJiYgYWdnclRva2VuKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCd5ZXMnKVxyXG4gICAgICBheGlvc1xyXG4gICAgICAgIC5nZXQoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L2dldERhdGFTaWduP3Rva2VuPSR7YWdnclRva2VufWApXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGFnZ3JUb2tlbilcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgIGlmICghcmVzLmRhdGEuaWQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3RoaXMnKVxyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRQaG9uZShyZXMuZGF0YS5waG9uZSlcclxuICAgICAgICAgICAgc2V0QWdncklkKHJlcy5kYXRhLmlkKVxyXG4gICAgICAgICAgICBzZXRBbW91bnQocGFyc2VJbnQocmVzLmRhdGEuYW1vdW50KSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gIH0sIFthZ2dyVG9rZW5dKVxyXG5cclxuICBjb25zdCBbc3VtbWEsXHJcbiAgICBzZXRTdW1tYV0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFtkaXNjb3VudCxcclxuICAgIHNldERpc2NvdW50XSA9IHVzZVN0YXRlKDApXHJcbiAgY29uc3QgW3ByZWRvcGxhdGEsXHJcbiAgICBzZXRPcGxhdGFdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW3BheW1lbnREYXRlLFxyXG4gICAgc2V0UGF5bWVudERhdGVdID0gdXNlU3RhdGUocGFyc2VEYXRlKDEpKVxyXG4gIGNvbnN0IFtlcnJvckNvZGUsc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW2RvY3MsXHJcbiAgICBzZXREb2NzXSA9IHVzZVN0YXRlKHtcImRvYzFcIjogdHJ1ZSwgXCJkb2MyXCI6IHRydWUsIFwiZG9jM1wiOiB0cnVlLCBcImRvYzRcIjogdHJ1ZX0pXHJcbiAgY29uc3QgW3Nyb2ssXHJcbiAgICBzZXRTcm9rXSA9IHVzZVN0YXRlKCcxJylcclxuICBjb25zdCBjaGVja0RvYyA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBuYW1lID0gZS50YXJnZXQuZGF0YXNldC5uYW1lXHJcbiAgICAvLyBjb25zb2xlLmxvZyhkb2NzW25hbWVdKVxyXG4gICAgc2V0RG9jcyh7XHJcbiAgICAgIC4uLmRvY3MsXHJcbiAgICAgIFtuYW1lXTogIWRvY3NbbmFtZV1cclxuICAgIH0pXHJcbiAgICBjb25zb2xlLmxvZyhkb2NzKVxyXG5cclxuICB9XHJcbiAgY29uc3QgY2hhbmdlT3BsYXRhID0gKGUpID0+IHtcclxuICAgIGNvbnN0IG5hbWUgPSBlXHJcbiAgICAgIC50YXJnZXRcclxuICAgICAgLmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJylcclxuICAgIHNldE9wbGF0YSghcHJlZG9wbGF0YSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGNoYW5nZVNyb2sgPSBlID0+IHtcclxuICAgIGNvbnN0IG1vbnRoID0gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUpXHJcbiAgICBzZXRTcm9rKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgc2V0UGF5bWVudERhdGUocGFyc2VEYXRlKG1vbnRoKSlcclxuICAgIGlmIChlLnRhcmdldC52YWx1ZSA+IDIpIHtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYW5nZV9fbGlzdCcpXHJcbiAgICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCA9IC0zMDA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhbmdlX19saXN0JylcclxuICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0ID0gMzAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2hhbmdlU3Jva0J0biA9IChtb250aCkgPT4ge1xyXG4gICAgY29uc3QgbW9udGhWYWwgPSBwYXJzZUludChtb250aClcclxuICAgIHNldFNyb2sobW9udGgpXHJcbiAgICBzZXRQYXltZW50RGF0ZShwYXJzZURhdGUobW9udGhWYWwpKVxyXG4gICAgaWYgKG1vbnRoVmFsID4gMykge1xyXG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhbmdlX19saXN0JylcclxuICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0ID0gMjAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYW5nZV9fbGlzdCcpXHJcbiAgICAgIGVsZW1lbnQuc2Nyb2xsUmlnaHQgPSAyMDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBhZ2dyZW1lbnRTYm10ID0gKCkgPT4ge1xyXG4gICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9yZW1vdmVTaG9ydFVybGAsIHtcclxuICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgaWQ6IGFnZ3JJZCxcclxuICAgICAgICB0eXBlUGF5bWVudDogcHJlZG9wbGF0YVxyXG4gICAgICAgICAgPyAn0J/RgNC10LTQvtC/0LvQsNGC0LAnXHJcbiAgICAgICAgICA6ICfQn9C+0YHRgtC+0L/Qu9Cw0YLQsCcsXHJcbiAgICAgICAgcGVyaW9kOiBzcm9rLFxyXG4gICAgICAgIGRhdGVfcGF5bWVudDogcGF5bWVudERhdGUsXHJcbiAgICAgICAgYW1vdW50UGF5bWVudDogZGlzY291bnRcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICBzd2FsKFwi0KPRgdC/0LXRiNC90L4hXCIsIGDQktCw0YjQsCDQt9Cw0Y/QstC60LAg0L7RgtC/0YDQsNCy0LvQtdC90LAg0LIgTmFzaCBDb21wYW55LiDQktCw0Lwg0YHQtdC50YfQsNGBINC/0LXRgNC10LfQstC+0L3Rj9GCINGBINC90L7QvNC10YDQsCArNyg3MDApMzUwLTUwLTAwYCwgXCJzdWNjZXNzXCIpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgc3RlcFRoaXJkID0gKCkgPT4ge1xyXG4gICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBjb25zdCBvYmplY3QgPSB7XHJcbiAgICAgIGlkOiBjb29raWUuZ2V0KCdsZWFkX2lkJykgPT09IHVuZGVmaW5lZFxyXG4gICAgICAgID8gZmluYWxJRFxyXG4gICAgICAgIDogY29va2llLmdldCgnbGVhZF9pZCcpLFxyXG4gICAgICB0b2tlbjogY29va2llLmdldCgndG9rZW4nKSxcclxuICAgICAgYW1vdW50UGF5bWVudDogZGlzY291bnQsXHJcbiAgICAgIGRhdGVfcGF5bWVudDogcGF5bWVudERhdGUsXHJcbiAgICAgIHBlcmlvZDogc3JvayxcclxuICAgICAgdHlwZVBheW1lbnQ6IHByZWRvcGxhdGFcclxuICAgICAgICA/ICfQn9GA0LXQtNC+0L/Qu9Cw0YLQsCdcclxuICAgICAgICA6ICfQn9C+0YHRgtC+0L/Qu9Cw0YLQsCdcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY29va2llLmdldCgndXRtX3NvdXJjZScpICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgb2JqZWN0LnV0bV9zb3VyY2UgPSBjb29raWUuZ2V0KCd1dG1fc291cmNlJylcclxuICAgICAgb2JqZWN0LmNsaWNrX2lkID0gY29va2llLmdldCgnY2xpY2tfaWQnKVxyXG4gICAgICAvLyBvYmplY3Qud2ViSUQgPSBjb29raWUuZ2V0KCd3ZWJfaWQnKVxyXG4gICAgfVxyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vc3RlcFRocmVlYCwge3BhcmFtczogb2JqZWN0fSlcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICBpZiAocmVzLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgc3dhbChcItCj0YHQv9C10YjQvdC+IVwiLCBg0JLQsNGI0LAg0LfQsNGP0LLQutCwINC+0YLQv9GA0LDQstC70LXQvdCwINCyIE5hc2ggQ29tcGFueS4g0JLQsNC8INGB0LXQudGH0LDRgSDQv9C10YDQtdC30LLQvtC90Y/RgiDRgSDQvdC+0LzQtdGA0LAgKzcoNzAwKTM1MC01MC0wMGAsIFwic3VjY2Vzc1wiKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goJy9jYWJpbmV0L3JlcXVlc3RzJylcclxuICAgICAgICAgICAgY29va2llLnJlbW92ZSgnbGVhZF9pZCcpXHJcbiAgICAgICAgICAgIGNvb2tpZS5yZW1vdmUoJ3N0ZXAnKVxyXG4gICAgICAgICAgICBjb29raWUucmVtb3ZlKCd1dG1fbWVkaXVtJylcclxuICAgICAgICAgICAgY29va2llLnJlbW92ZSgndXRtX3NvdXJjZScpXHJcbiAgICAgICAgICAgIGNvb2tpZS5yZW1vdmUoJ3V0bV9jYW1wYWlnbicpXHJcbiAgICAgICAgICAgIGNvb2tpZS5yZW1vdmUoJ2NsaWNrX2lkJylcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGZpbmFsU3VibWl0ID0gKCk9PiB7XHJcbiAgICBpZiAocGF0aG5hbWUgPT09ICcvYWdncmVtZW50Jykge1xyXG4gICAgICBhZ2dyZW1lbnRTYm10KClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN0ZXBUaGlyZCgpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0Q29kZSgnJylcclxuICAgIHNldEVycm9yKCcnKVxyXG4gICAgc2V0TW9kYWwoZmFsc2UpXHJcbiAgfVxyXG5cclxuICBjb25zdCBvbk1vZGFsID0gKHBhcmFtKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICBzZXRNb2RhbChmYWxzZSlcclxuICAgIHNldEVycm9yKCcnKVxyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vZm91cnRoU3RhZ2U/cGhvbmU9JHtwYXJhbX1gKVxyXG4gICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgIHNldE1vZGFsKHRydWUpXHJcbiAgICAgICAgfSBlbHNlIHt9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgc2V0TW9kYWwoZmFsc2UpXHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBvcGVuQ29kZU1vZGFsID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgY29uc29sZS5sb2cobG9nZ2VkSW4pXHJcbiAgICBpZiAoY29va2llLmdldCgndG9rZW4nKSA9PT0gdW5kZWZpbmVkICYmIHBob25lID09PSBudWxsKSB7XHJcbiAgICAgIGNvb2tpZS5yZW1vdmUoJ3N0ZXAnKVxyXG4gICAgICByb3V0ZXIucHVzaCgnLycpXHJcbiAgICB9XHJcbiAgICBpZiAocGF0aG5hbWUgPT09ICcvYWdncmVtZW50JyAmJiBwaG9uZSkge1xyXG4gICAgICBvbk1vZGFsKHBob25lKVxyXG4gICAgfVxyXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL2FnZ3JlbWVudCcgJiYgbG9nZ2VkSW4pIHtcclxuICAgICAgb25Nb2RhbCh1c2VyLnBob25lKVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCByZXBlYXRDb2RlID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2cobG9nZ2VkSW4pXHJcbiAgICBpZiAoY29va2llLmdldCgndG9rZW4nKSA9PT0gdW5kZWZpbmVkICYmIHBob25lID09PSBudWxsKSB7XHJcbiAgICAgIGNvb2tpZS5yZW1vdmUoJ3N0ZXAnKVxyXG4gICAgICByb3V0ZXIucHVzaCgnLycpXHJcbiAgICB9XHJcbiAgICBpZiAocGF0aG5hbWUgPT09ICcvYWdncmVtZW50JyAmJiBwaG9uZSkge1xyXG4gICAgICBvbk1vZGFsKHBob25lKVxyXG4gICAgfVxyXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL2FnZ3JlbWVudCcgJiYgbG9nZ2VkSW4pIHtcclxuICAgICAgb25Nb2RhbCh1c2VyLnBob25lKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2hlY2tDb2RlID0gKHBhcmFtLCBjb2RlVmFsKSA9PiB7XHJcbiAgICBzZXRFcnJvcignJylcclxuICAgIGF4aW9zXHJcbiAgICAgIC5nZXQoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L2NoZWNrQ29kZT9waG9uZT0ke3BhcmFtfSZjb2RlPSR7Y29kZVZhbH1gKVxyXG4gICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICBpZihyZXMuZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICBmaW5hbFN1Ym1pdCgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgc2V0RXJyb3IocmVzLmRhdGEubWVzc2FnZSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnI9PiB7XHJcbiAgICAgICAgc2V0RXJyb3IoJ9Cn0YLQviDRgtC+INC/0L7Qu9GI0L4g0L3QtSDRgtCw0LonKVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2VuZENvZGVDaGVjayA9IChjb2RlVmFsKSA9PiB7XHJcbiAgICBpZiAocGF0aG5hbWUgPT09ICcvYWdncmVtZW50JyAmJiBwaG9uZSkge1xyXG4gICAgICBjaGVja0NvZGUocGhvbmUsIGNvZGVWYWwpXHJcbiAgICB9XHJcbiAgICBpZiAocGF0aG5hbWUgIT09ICcvYWdncmVtZW50JyAmJiBsb2dnZWRJbikge1xyXG4gICAgICBjaGVja0NvZGUodXNlci5waG9uZSwgY29kZVZhbClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGNvbnN0IGRvZ292b3JvYnJhYm90a2EgPSAoKSA9PiB7ICAgaWYocGF0aG5hbWUgPT09ICcvYWdncmVtZW50JykgeyAgICAgcmV0dXJuXHJcbiAgLy8gYC9kb2dvdm9yb2JyYWJvdGthP3Rva2VuPSR7dG9rZW59YCAgIH0gICBpZihwYXRobmFtZSA9PT1cclxuICAvLyAnL2NhYmluZXQvY29udGludWUnKSB7ICAgICByZXR1cm4gYC9kb2dvdm9yb2JyYWJvdGthP2lkPSR7aWR9YCAgIH0gICBlbHNlIHtcclxuICAvLyAgIHJldHVybiAnL2RvZ292b3JvYnJhYm90a2EnICAgfSB9XHJcbiAgcmV0dXJuIChcclxuXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybV9yZWdpc3RlciB0aGlyZHN0ZXAnPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpID0+IG9wZW5Db2RlTW9kYWwoZSl9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyYWRpb19ncm91cHMnPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9J3Bvc3RvcGxhdGEnXHJcbiAgICAgICAgICAgIGRhdGEtbmFtZT0ncG9zdG9wbGF0YSdcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdjaGVjay1ncm91cCdcclxuICAgICAgICAgICAgb25DbGljaz17ZSA9PiBjaGFuZ2VPcGxhdGEoZSl9PlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0nY2hlY2tib3gnIGNoZWNrZWQ9e3ByZWRvcGxhdGEgPT09IGZhbHNlfS8+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J3JhZGlvbGFiZWwnPtCf0L7RgdGC0L7Qv9C70LDRgtCwPC9sYWJlbD5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdwcmVkb3BsYXRhJ1xyXG4gICAgICAgICAgICBkYXRhLW5hbWU9J3ByZWRvcGxhdGEnXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nY2hlY2stZ3JvdXAnXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gY2hhbmdlT3BsYXRhKGUpfT5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J2NoZWNrYm94JyBjaGVja2VkPXtwcmVkb3BsYXRhID09PSB0cnVlfS8+XHJcblxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdyYWRpb2xhYmVsJz7Qn9GA0LXQtNC+0L/Qu9Cw0YLQsDwvbGFiZWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgeyFwcmVkb3BsYXRhICYmIDxkaXYgY2xhc3NOYW1lPVwicmFuZ2VcIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nc3Jva19tb250aCc+0KHRgNC+0Log0L7Qv9C70LDRgtGLICjQvNC10YHRj9GGKTwvcD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyYW5nZV9faW5wdXRcIlxyXG4gICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxyXG4gICAgICAgICAgICB2YWx1ZT17c3Jva31cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gY2hhbmdlU3JvayhlKX1cclxuICAgICAgICAgICAgbWluPVwiMVwiXHJcbiAgICAgICAgICAgIG1heD1cIjNcIlxyXG4gICAgICAgICAgICBzdGVwPVwiMVwiXHJcbiAgICAgICAgICAgIGxpc3Q9XCJudW1iZXJcIi8+XHJcbiAgICAgICAgICA8ZGF0YWxpc3QgY2xhc3NOYW1lPSdyYW5nZV9fbGlzdCcgaWQ9XCJudW1iZXJcIj5cclxuICAgICAgICAgICAgPG9wdGlvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZVNyb2tCdG4oJzEnKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2ByYW5nZV9fb3B0IG9wdDAgJHtzcm9rID09PSAnMScgJiYgJ2FjdGl2ZSd9YH0+MTwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlU3Jva0J0bignMicpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHJhbmdlX19vcHQgJHtzcm9rID09PSAnMicgJiYgJ2FjdGl2ZSd9YH0+Mjwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlU3Jva0J0bignMycpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHJhbmdlX19vcHQgJHtzcm9rID09PSAnMycgJiYgJ2FjdGl2ZSd9YH0+Mzwvb3B0aW9uPlxyXG4gICAgICAgICAgICB7LyogPG9wdGlvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZVNyb2tCdG4oJzQnKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2ByYW5nZV9fb3B0ICR7c3JvayA9PT0gJzQnICYmICdhY3RpdmUnfWB9PjQ8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZVNyb2tCdG4oJzUnKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2ByYW5nZV9fb3B0ICR7c3JvayA9PT0gJzUnICYmICdhY3RpdmUnfWB9PjU8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZVNyb2tCdG4oJzYnKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2ByYW5nZV9fb3B0ICR7c3JvayA9PT0gJzYnICYmICdhY3RpdmUnfWB9PjY8L29wdGlvbj4gKi99XHJcbiAgICAgICAgICA8L2RhdGFsaXN0PlxyXG4gICAgICAgIDwvZGl2PlxyXG59XHJcbiAgICAgICAgeyFwcmVkb3BsYXRhICYmIDxkaXYgY2xhc3NOYW1lPSdwYXltZW50X2RhdGUnPlxyXG4gICAgICAgICAgPHN0cm9uZz7QlNC10L3RjCDQvtC/0LvQsNGC0Ysg0LTQviB7cGF5bWVudERhdGV9XHJcbiAgICAgICAgICA8L3N0cm9uZz5cclxuICAgICAgICA8L2Rpdj59XHJcblxyXG4gICAgICAgIHsvKiA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9J251bWJlcidcclxuICAgICAgICAgIGNsYXNzTmFtZT0nc3VtbWEnXHJcbiAgICAgICAgICB2YWx1ZT17c3VtbWF9XHJcbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRTdW1tYShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj0n0KHRg9C80LzQsCDQvtC/0LvQsNGC0YsnLz4gKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BheW1lbnRfYW1vdW50Jz5cclxuICAgICAgICAgIDxwPtCh0YPQvNC80LAg0L7Qv9C70LDRgtGLOjwvcD5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzdHJvbmc+e2Ftb3VudFNwYWNlKGAke2Rpc2NvdW50fWApfdGC0LM8L3N0cm9uZz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcmljZS0tbGluZS10aHJvdWdoXCI+e2Ftb3VudFNwYWNlKGAke3N1bW1hfWApfdGC0LM8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXNjb3VudCc+XHJcbiAgICAgICAgICAgIHsvKiA8aW1nIHNyYz0nL2ltZy9kaXNjb3VudC5wbmcnLz4gKi99XHJcbiAgICAgICAgICAgIDxwPi01MCVcclxuICAgICAgICAgICAgICA8c3Bhbj7QodCa0JjQlNCa0JA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaGVja19ncm91cHMnPlxyXG4gICAgICAgICAgPGRpdiBkYXRhLW5hbWU9J3ByZWRvcGxhdGEnIGNsYXNzTmFtZT0nY2hlY2stZ3JvdXAnPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0nY2hlY2tib3gnIGNoZWNrZWQ9e2RvY3MuZG9jMX0vPlxyXG4gICAgICAgICAgICA8bGFiZWwgb25DbGljaz17KGUpID0+IGNoZWNrRG9jKGUpfSBkYXRhLW5hbWU9J2RvYzEnIGNsYXNzTmFtZT0nY2hlY2tsYWJlbCc+PC9sYWJlbD5cclxuICAgICAgICAgICAge3Rva2VuXHJcbiAgICAgICAgICAgICAgPyA8YSBocmVmPXtgL2RvZ292b3JvYnJhYm90a2E/dG9rZW49JHt0b2tlbn1gfSB0YXJnZXQ9J19fYmxhbmsnPtCX0LDQv9GA0L7RgSDQvdCwINC+0LHRgNCw0LHQvtGC0LrRgyDQv9C10YDRgdC+0L3QsNC70YzQvdGL0YUg0LTQsNC90L3Ri9GFPC9hPlxyXG4gICAgICAgICAgICAgIDogPGEgaHJlZj17YC9kb2dvdm9yb2JyYWJvdGthYH0gdGFyZ2V0PSdfX2JsYW5rJz7Ql9Cw0L/RgNC+0YEg0L3QsCDQvtCx0YDQsNCx0L7RgtC60YMg0L/QtdGA0YHQvtC90LDQu9GM0L3Ri9GFINC00LDQvdC90YvRhTwvYT59XHJcblxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGRhdGEtbmFtZT0ncG9zdG9wbGF0YScgY2xhc3NOYW1lPSdjaGVjay1ncm91cCc+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdjaGVja2JveCcgY2hlY2tlZD17ZG9jcy5kb2MyfS8+XHJcbiAgICAgICAgICAgIDxsYWJlbCBvbkNsaWNrPXsoZSkgPT4gY2hlY2tEb2MoZSl9IGNsYXNzTmFtZT0nY2hlY2tsYWJlbCcgZGF0YS1uYW1lPSdkb2MyJz48L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgPGEgaHJlZj0nL9Cf0KPQkdCb0JjQp9Cd0JDQryDQntCk0JXQoNCi0JAucGRmJyB0YXJnZXQ9J19fYmxhbmsnPtCU0L7Qs9C+0LLQvtGAINC/0YPQsdC70LjRh9C90L7QuSDQvtGE0LXRgNGC0Ys8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGRhdGEtbmFtZT0ncHJlZG9wbGF0YScgY2xhc3NOYW1lPSdjaGVjay1ncm91cCc+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdjaGVja2JveCcgY2hlY2tlZD17ZG9jcy5kb2M0fS8+XHJcbiAgICAgICAgICAgIDxsYWJlbCBvbkNsaWNrPXsoZSkgPT4gY2hlY2tEb2MoZSl9IGNsYXNzTmFtZT0nY2hlY2tsYWJlbCcgZGF0YS1uYW1lPSdkb2M0Jz48L2xhYmVsPlxyXG4gICAgICAgICAgICB7dG9rZW5cclxuICAgICAgICAgICAgICA/IDxhXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9e2AvZG9nb3Zvcj9wYXltZW50RGF0ZT0ke3BheW1lbnREYXRlfSZwZXJpb2Q9JHtzcm9rfSZ0b2tlbj0ke3Rva2VufWB9XHJcbiAgICAgICAgICAgICAgICAgIHRhcmdldD0nX19ibGFuayc+0JTQvtCz0L7QstC+0YAg0L3QsCDQt9Cw0LrQsNC3INC90LDRgNGP0LQ8L2E+XHJcbiAgICAgICAgICAgICAgOiA8YSBocmVmPXtgL2RvZ292b3I/cGF5bWVudERhdGU9JHtwYXltZW50RGF0ZX0mcGVyaW9kPSR7c3Jva31gfSB0YXJnZXQ9J19fYmxhbmsnPtCU0L7Qs9C+0LLQvtGAINC90LAg0LfQsNC60LDQtyDQvdCw0YDRj9C0PC9hPn1cclxuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICB7T2JqZWN0XHJcbiAgICAgICAgICAgIC5rZXlzKGRvY3MpXHJcbiAgICAgICAgICAgIC5zb21lKGsgPT4gIWRvY3Nba10pXHJcbiAgICAgICAgICAgID8gPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPSdzdWJtaXQnXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUZvY3VzKCl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2J1dHRvbiBidXR0b25fbGlnaHRlc3QnXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT0n0J/QvtC70YPRh9C40YLRjCDRgNC10LfRg9C70YzRgtCw0YInLz5cclxuICAgICAgICAgICAgOiA8aW5wdXQgdHlwZT0nc3VibWl0JyBjbGFzc05hbWU9J2J1dHRvbicgdmFsdWU9J9Cf0L7Qu9GD0YfQuNGC0Ywg0YDQtdC30YPQu9GM0YLQsNGCJy8+XHJcbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgPENvZGVNb2RhbFxyXG4gICAgICAgIGlzTW9kYWxPcGVuPXttb2RhbH1cclxuICAgICAgICBjbG9zZU1vZGFsPXtjbG9zZU1vZGFsfVxyXG4gICAgICAgIGNvZGU9e2NvZGV9XHJcbiAgICAgICAgc2V0Q29kZT17c2V0Q29kZX1cclxuICAgICAgICBvbkZpcnN0U3RlcD17c2VuZENvZGVDaGVja31cclxuICAgICAgICBnZXRJZGVudGlmaWNhdGlvbj17cmVwZWF0Q29kZX1cclxuICAgICAgICBlcnJvcj17ZXJyb3JDb2RlfS8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0KGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBudWxsKShUaGlyZFN0ZXApKSJdLCJzb3VyY2VSb290IjoiIn0=