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

  var aggrementSbmt = function aggrementSbmt(e) {
    e.preventDefault();
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

  var stepThird = function stepThird(e) {
    e.preventDefault();
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

  var finalSubmit = function finalSubmit(e) {
    if (pathname === '/aggrement') {
      aggrementSbmt(e);
    } else {
      stepThird(e);
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

  var checkCode = function checkCode(param) {
    setError('');
    axios__WEBPACK_IMPORTED_MODULE_2___default().get("".concat("https://crediter.kz/api", "/checkCode?phone=").concat(param, "&code=").concat(code)).then(function (res) {
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

  var sendCodeCheck = function sendCodeCheck() {
    if (pathname === '/aggrement' && phone) {
      checkCode(phone);
    }

    if (pathname !== '/aggrement' && loggedIn) {
      checkCode(user.phone);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRzZXJ2aWNlL1RoaXJkU3RlcC5qcyJdLCJuYW1lcyI6WyJtYXBTdGF0ZVRvUHJvcHMiLCJ1c2VyUmVkdWNlciIsInVzZXIiLCJsb2dnZWRJbiIsIlRoaXJkU3RlcCIsInNldExvYWRpbmciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwicGF0aG5hbWUiLCJ0b2tlbiIsImFtb3VudCIsInVzZVN0YXRlIiwiYW1vdW50VmFsIiwic2V0QW1vdW50IiwibGVhZElEIiwiYWdnclRva2VuIiwic2V0QWdnclRva2VuIiwiZmluYWxBbW91bnQiLCJhZ2dySWQiLCJzZXRBZ2dySWQiLCJwaG9uZSIsInNldFBob25lIiwibW9kYWwiLCJzZXRNb2RhbCIsImNvZGUiLCJzZXRDb2RlIiwiZmluYWxJRCIsInVzZUVmZmVjdCIsInN1bW1hIiwiY29va2llIiwidW5kZWZpbmVkIiwiZmluYWxTdW1tYSIsIk1hdGgiLCJmbG9vciIsInBhcnNlSW50IiwiZGlzY291bnRTdW1tYSIsInNldFN1bW1hIiwic2V0RGlzY291bnQiLCJjb25zb2xlIiwibG9nIiwiYXhpb3MiLCJwcm9jZXNzIiwidGhlbiIsInJlcyIsImRhdGEiLCJwdXNoIiwiZGlzY291bnQiLCJwcmVkb3BsYXRhIiwic2V0T3BsYXRhIiwicGFyc2VEYXRlIiwicGF5bWVudERhdGUiLCJzZXRQYXltZW50RGF0ZSIsImVycm9yQ29kZSIsInNldEVycm9yIiwiZG9jcyIsInNldERvY3MiLCJzcm9rIiwic2V0U3JvayIsImNoZWNrRG9jIiwiZSIsIm5hbWUiLCJ0YXJnZXQiLCJkYXRhc2V0IiwiY2hhbmdlT3BsYXRhIiwiZ2V0QXR0cmlidXRlIiwiY2hhbmdlU3JvayIsIm1vbnRoIiwidmFsdWUiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsTGVmdCIsImNoYW5nZVNyb2tCdG4iLCJtb250aFZhbCIsInNjcm9sbFJpZ2h0IiwiYWdncmVtZW50U2JtdCIsInByZXZlbnREZWZhdWx0IiwicGFyYW1zIiwidHlwZVBheW1lbnQiLCJwZXJpb2QiLCJkYXRlX3BheW1lbnQiLCJhbW91bnRQYXltZW50Iiwic3RhdHVzIiwic3dhbCIsImVyciIsInN0ZXBUaGlyZCIsIm9iamVjdCIsInV0bV9zb3VyY2UiLCJjbGlja19pZCIsInN1Y2Nlc3MiLCJSb3V0ZXIiLCJmaW5hbFN1Ym1pdCIsImNsb3NlTW9kYWwiLCJvbk1vZGFsIiwicGFyYW0iLCJvcGVuQ29kZU1vZGFsIiwicmVwZWF0Q29kZSIsImNoZWNrQ29kZSIsIm1lc3NhZ2UiLCJzZW5kQ29kZUNoZWNrIiwiYW1vdW50U3BhY2UiLCJkb2MxIiwiZG9jMiIsImRvYzQiLCJPYmplY3QiLCJrZXlzIiwic29tZSIsImsiLCJoYW5kbGVGb2N1cyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCO0FBQUEsOEJBQ3RCQyxXQURzQjtBQUFBLE1BRXBCQyxJQUZvQixvQkFFcEJBLElBRm9CO0FBQUEsTUFHcEJDLFFBSG9CLG9CQUdwQkEsUUFIb0I7QUFBQSxTQUtqQjtBQUFDRCxRQUFJLEVBQUpBLElBQUQ7QUFBT0MsWUFBUSxFQUFSQTtBQUFQLEdBTGlCO0FBQUEsQ0FBeEI7O0FBT0EsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksUUFFWjtBQUFBOztBQUFBOztBQUFBLE1BREpDLFVBQ0ksU0FESkEsVUFDSTtBQUFBLE1BRFFILElBQ1IsU0FEUUEsSUFDUjtBQUFBLE1BRGFDLFFBQ2IsU0FEYUEsUUFDYjtBQUNKLE1BQU1HLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFESSxNQUVHQyxFQUZILEdBRVNGLE1BQU0sQ0FBQ0csS0FGaEIsQ0FFR0QsRUFGSDtBQUdKLE1BQU1FLFFBQVEsR0FB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V0FIWDtBQUlFLG1CQUFTLEVBQUMsd0JBSlo7QUFLRSxlQUFLLEVBQUM7QUFMUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhILGdCQVNHO0FBQU8sY0FBSSxFQUFDLFFBQVo7QUFBcUIsbUJBQVMsRUFBQyxRQUEvQjtBQUF3QyxlQUFLLEVBQUM7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFwQ047QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBL0VGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBeUhFLDhEQUFDLHNEQUFEO0FBQ0UsaUJBQVcsRUFBRXRGLEtBRGY7QUFFRSxnQkFBVSxFQUFFc0UsVUFGZDtBQUdFLFVBQUksRUFBRXBFLElBSFI7QUFJRSxhQUFPLEVBQUVDLE9BSlg7QUFLRSxpQkFBVyxFQUFFMEUsYUFMZjtBQU1FLHVCQUFpQixFQUFFSCxVQU5yQjtBQU9FLFdBQUssRUFBRTVDO0FBUFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXpIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FGRjtBQXFJRCxDQS9aRDs7R0FBTWxELFM7VUFHV0csa0Q7OztLQUhYSCxTO0FBaWFOLCtEQUFlMkcsb0RBQU8sQ0FBQy9HLGVBQUQsRUFBa0IsSUFBbEIsQ0FBUCxDQUErQkksU0FBL0IsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kbHlhLWZpemljaGVza2l4LWxpYy5kYmI0YmI0NDZkMWFiYzNkNTQ3Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnXHJcbmltcG9ydCBSb3V0ZXIsIHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgc3dhbCBmcm9tICdzd2VldGFsZXJ0J1xyXG5pbXBvcnQge2Ftb3VudFNwYWNlLCBoYW5kbGVGb2N1cywgcGFyc2VEYXRlfSBmcm9tIFwiLi4vLi4vZGVmYXVsdHMvZXh0cmFGdW5jdGlvblwiXHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuaW1wb3J0IENvZGVNb2RhbCBmcm9tICcuLi9zaGFyZWQvQ29kZU1vZGFsJ1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHtcclxuICB1c2VyUmVkdWNlcjoge1xyXG4gICAgdXNlcixcclxuICAgIGxvZ2dlZEluXHJcbiAgfVxyXG59KSA9PiAoe3VzZXIsIGxvZ2dlZElufSk7XHJcblxyXG5jb25zdCBUaGlyZFN0ZXAgPSAoe1xyXG4gIHNldExvYWRpbmcsIHVzZXIsbG9nZ2VkSW5cclxufSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3Qge2lkfSA9IHJvdXRlci5xdWVyeTtcclxuICBjb25zdCBwYXRobmFtZSA9IHJvdXRlci5wYXRobmFtZVxyXG4gIGNvbnN0IHt0b2tlbn0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCB7YW1vdW50fSA9IHJvdXRlci5xdWVyeVxyXG4gIGNvbnN0IFthbW91bnRWYWwsXHJcbiAgICBzZXRBbW91bnRdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCB7bGVhZElEfSA9IHJvdXRlci5xdWVyeVxyXG4gIGNvbnN0IFthZ2dyVG9rZW4sXHJcbiAgICBzZXRBZ2dyVG9rZW5dID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgZmluYWxBbW91bnQgPSBhbW91bnRcclxuICAgID8gYW1vdW50XHJcbiAgICA6IGFtb3VudFZhbFxyXG4gIGNvbnN0IFthZ2dySWQsXHJcbiAgICBzZXRBZ2dySWRdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW3Bob25lLFxyXG4gICAgc2V0UGhvbmVdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbbW9kYWwsXHJcbiAgICBzZXRNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbY29kZSxcclxuICAgIHNldENvZGVdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgZmluYWxJRCA9IGlkIHx8IGxlYWRJRFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdW1tYSA9IGNvb2tpZS5nZXQoJ2Ftb3VudCcpICE9PSB1bmRlZmluZWRcclxuICAgICAgPyBjb29raWUuZ2V0KCdhbW91bnQnKVxyXG4gICAgICA6IGZpbmFsQW1vdW50XHJcbiAgICBjb25zdCBmaW5hbFN1bW1hID0gTWF0aC5mbG9vcihwYXJzZUludChzdW1tYSkgKiAwLjIpXHJcbiAgICBjb25zdCBkaXNjb3VudFN1bW1hID0gTWF0aC5mbG9vcihwYXJzZUludChmaW5hbFN1bW1hKSAvIDIpXHJcbiAgICBpZiAoZmluYWxTdW1tYSA+IDIwMDAwMCkge1xyXG4gICAgICBzZXRTdW1tYShmaW5hbFN1bW1hKVxyXG4gICAgICBzZXREaXNjb3VudChkaXNjb3VudFN1bW1hKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0U3VtbWEoMjAwMDAwKVxyXG4gICAgICBzZXREaXNjb3VudCgxMDAwMDApXHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhmaW5hbFN1bW1hKVxyXG4gIH0sIFtjb29raWUuZ2V0KCdhbW91bnQnKV0pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodG9rZW4pIHtcclxuICAgICAgc2V0QWdnclRva2VuKHRva2VuKVxyXG4gICAgfVxyXG5cclxuICB9LCBbdG9rZW5dKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocGF0aG5hbWUgPT09ICcvYWdncmVtZW50JyAmJiBhZ2dyVG9rZW4pIHtcclxuICAgICAgY29uc29sZS5sb2coJ3llcycpXHJcbiAgICAgIGF4aW9zXHJcbiAgICAgICAgLmdldChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vZ2V0RGF0YVNpZ24/dG9rZW49JHthZ2dyVG9rZW59YClcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coYWdnclRva2VuKVxyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgaWYgKCFyZXMuZGF0YS5pZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndGhpcycpXHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvJylcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFBob25lKHJlcy5kYXRhLnBob25lKVxyXG4gICAgICAgICAgICBzZXRBZ2dySWQocmVzLmRhdGEuaWQpXHJcbiAgICAgICAgICAgIHNldEFtb3VudChwYXJzZUludChyZXMuZGF0YS5hbW91bnQpKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSwgW2FnZ3JUb2tlbl0pXHJcblxyXG4gIGNvbnN0IFtzdW1tYSxcclxuICAgIHNldFN1bW1hXSA9IHVzZVN0YXRlKDApXHJcbiAgY29uc3QgW2Rpc2NvdW50LFxyXG4gICAgc2V0RGlzY291bnRdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbcHJlZG9wbGF0YSxcclxuICAgIHNldE9wbGF0YV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbcGF5bWVudERhdGUsXHJcbiAgICBzZXRQYXltZW50RGF0ZV0gPSB1c2VTdGF0ZShwYXJzZURhdGUoMSkpXHJcbiAgY29uc3QgW2Vycm9yQ29kZSxzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbZG9jcyxcclxuICAgIHNldERvY3NdID0gdXNlU3RhdGUoe1wiZG9jMVwiOiB0cnVlLCBcImRvYzJcIjogdHJ1ZSwgXCJkb2MzXCI6IHRydWUsIFwiZG9jNFwiOiB0cnVlfSlcclxuICBjb25zdCBbc3JvayxcclxuICAgIHNldFNyb2tdID0gdXNlU3RhdGUoJzEnKVxyXG4gIGNvbnN0IGNoZWNrRG9jID0gKGUpID0+IHtcclxuICAgIGNvbnN0IG5hbWUgPSBlLnRhcmdldC5kYXRhc2V0Lm5hbWVcclxuICAgIC8vIGNvbnNvbGUubG9nKGRvY3NbbmFtZV0pXHJcbiAgICBzZXREb2NzKHtcclxuICAgICAgLi4uZG9jcyxcclxuICAgICAgW25hbWVdOiAhZG9jc1tuYW1lXVxyXG4gICAgfSlcclxuICAgIGNvbnNvbGUubG9nKGRvY3MpXHJcblxyXG4gIH1cclxuICBjb25zdCBjaGFuZ2VPcGxhdGEgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgbmFtZSA9IGVcclxuICAgICAgLnRhcmdldFxyXG4gICAgICAuZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKVxyXG4gICAgc2V0T3BsYXRhKCFwcmVkb3BsYXRhKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2hhbmdlU3JvayA9IGUgPT4ge1xyXG4gICAgY29uc3QgbW9udGggPSBwYXJzZUludChlLnRhcmdldC52YWx1ZSlcclxuICAgIHNldFNyb2soZS50YXJnZXQudmFsdWUpXHJcbiAgICBzZXRQYXltZW50RGF0ZShwYXJzZURhdGUobW9udGgpKVxyXG4gICAgaWYgKGUudGFyZ2V0LnZhbHVlID4gMikge1xyXG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhbmdlX19saXN0JylcclxuICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0ID0gLTMwMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFuZ2VfX2xpc3QnKVxyXG4gICAgICBlbGVtZW50LnNjcm9sbExlZnQgPSAzMDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGFuZ2VTcm9rQnRuID0gKG1vbnRoKSA9PiB7XHJcbiAgICBjb25zdCBtb250aFZhbCA9IHBhcnNlSW50KG1vbnRoKVxyXG4gICAgc2V0U3Jvayhtb250aClcclxuICAgIHNldFBheW1lbnREYXRlKHBhcnNlRGF0ZShtb250aFZhbCkpXHJcbiAgICBpZiAobW9udGhWYWwgPiAzKSB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFuZ2VfX2xpc3QnKVxyXG4gICAgICBlbGVtZW50LnNjcm9sbExlZnQgPSAyMDA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhbmdlX19saXN0JylcclxuICAgICAgZWxlbWVudC5zY3JvbGxSaWdodCA9IDIwMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGFnZ3JlbWVudFNibXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9yZW1vdmVTaG9ydFVybGAsIHtcclxuICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgaWQ6IGFnZ3JJZCxcclxuICAgICAgICB0eXBlUGF5bWVudDogcHJlZG9wbGF0YVxyXG4gICAgICAgICAgPyAn0J/RgNC10LTQvtC/0LvQsNGC0LAnXHJcbiAgICAgICAgICA6ICfQn9C+0YHRgtC+0L/Qu9Cw0YLQsCcsXHJcbiAgICAgICAgcGVyaW9kOiBzcm9rLFxyXG4gICAgICAgIGRhdGVfcGF5bWVudDogcGF5bWVudERhdGUsXHJcbiAgICAgICAgYW1vdW50UGF5bWVudDogZGlzY291bnRcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICBzd2FsKFwi0KPRgdC/0LXRiNC90L4hXCIsIGDQktCw0YjQsCDQt9Cw0Y/QstC60LAg0L7RgtC/0YDQsNCy0LvQtdC90LAg0LIgTmFzaCBDb21wYW55LiDQktCw0Lwg0YHQtdC50YfQsNGBINC/0LXRgNC10LfQstC+0L3Rj9GCINGBINC90L7QvNC10YDQsCArNyg3MDApMzUwLTUwLTAwYCwgXCJzdWNjZXNzXCIpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgc3RlcFRoaXJkID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgY29uc3Qgb2JqZWN0ID0ge1xyXG4gICAgICBpZDogY29va2llLmdldCgnbGVhZF9pZCcpID09PSB1bmRlZmluZWRcclxuICAgICAgICA/IGZpbmFsSURcclxuICAgICAgICA6IGNvb2tpZS5nZXQoJ2xlYWRfaWQnKSxcclxuICAgICAgdG9rZW46IGNvb2tpZS5nZXQoJ3Rva2VuJyksXHJcbiAgICAgIGFtb3VudFBheW1lbnQ6IGRpc2NvdW50LFxyXG4gICAgICBkYXRlX3BheW1lbnQ6IHBheW1lbnREYXRlLFxyXG4gICAgICBwZXJpb2Q6IHNyb2ssXHJcbiAgICAgIHR5cGVQYXltZW50OiBwcmVkb3BsYXRhXHJcbiAgICAgICAgPyAn0J/RgNC10LTQvtC/0LvQsNGC0LAnXHJcbiAgICAgICAgOiAn0J/QvtGB0YLQvtC/0LvQsNGC0LAnXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNvb2tpZS5nZXQoJ3V0bV9zb3VyY2UnKSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIG9iamVjdC51dG1fc291cmNlID0gY29va2llLmdldCgndXRtX3NvdXJjZScpXHJcbiAgICAgIG9iamVjdC5jbGlja19pZCA9IGNvb2tpZS5nZXQoJ2NsaWNrX2lkJylcclxuICAgICAgLy8gb2JqZWN0LndlYklEID0gY29va2llLmdldCgnd2ViX2lkJylcclxuICAgIH1cclxuICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgIGF4aW9zXHJcbiAgICAgIC5nZXQoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L3N0ZXBUaHJlZWAsIHtwYXJhbXM6IG9iamVjdH0pXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgIHN3YWwoXCLQo9GB0L/QtdGI0L3QviFcIiwgYNCS0LDRiNCwINC30LDRj9Cy0LrQsCDQvtGC0L/RgNCw0LLQu9C10L3QsCDQsiBOYXNoIENvbXBhbnkuINCS0LDQvCDRgdC10LnRh9Cw0YEg0L/QtdGA0LXQt9Cy0L7QvdGP0YIg0YEg0L3QvtC80LXRgNCwICs3KDcwMCkzNTAtNTAtMDBgLCBcInN1Y2Nlc3NcIikudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvY2FiaW5ldC9yZXF1ZXN0cycpXHJcbiAgICAgICAgICAgIGNvb2tpZS5yZW1vdmUoJ2xlYWRfaWQnKVxyXG4gICAgICAgICAgICBjb29raWUucmVtb3ZlKCdzdGVwJylcclxuICAgICAgICAgICAgY29va2llLnJlbW92ZSgndXRtX21lZGl1bScpXHJcbiAgICAgICAgICAgIGNvb2tpZS5yZW1vdmUoJ3V0bV9zb3VyY2UnKVxyXG4gICAgICAgICAgICBjb29raWUucmVtb3ZlKCd1dG1fY2FtcGFpZ24nKVxyXG4gICAgICAgICAgICBjb29raWUucmVtb3ZlKCdjbGlja19pZCcpXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBmaW5hbFN1Ym1pdCA9IChlKT0+IHtcclxuICAgIGlmIChwYXRobmFtZSA9PT0gJy9hZ2dyZW1lbnQnKSB7XHJcbiAgICAgIGFnZ3JlbWVudFNibXQoZSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN0ZXBUaGlyZChlKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcclxuICAgIHNldENvZGUoJycpXHJcbiAgICBzZXRFcnJvcignJylcclxuICAgIHNldE1vZGFsKGZhbHNlKVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25Nb2RhbCA9IChwYXJhbSkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgc2V0TW9kYWwoZmFsc2UpXHJcbiAgICBzZXRFcnJvcignJylcclxuICAgIGF4aW9zXHJcbiAgICAgIC5nZXQoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L2ZvdXJ0aFN0YWdlP3Bob25lPSR7cGFyYW19YClcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgIGlmIChyZXMuZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICBzZXRNb2RhbCh0cnVlKVxyXG4gICAgICAgIH0gZWxzZSB7fVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgIHNldE1vZGFsKGZhbHNlKVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb3BlbkNvZGVNb2RhbCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGNvbnNvbGUubG9nKGxvZ2dlZEluKVxyXG4gICAgaWYgKGNvb2tpZS5nZXQoJ3Rva2VuJykgPT09IHVuZGVmaW5lZCAmJiBwaG9uZSA9PT0gbnVsbCkge1xyXG4gICAgICBjb29raWUucmVtb3ZlKCdzdGVwJylcclxuICAgICAgcm91dGVyLnB1c2goJy8nKVxyXG4gICAgfVxyXG4gICAgaWYgKHBhdGhuYW1lID09PSAnL2FnZ3JlbWVudCcgJiYgcGhvbmUpIHtcclxuICAgICAgb25Nb2RhbChwaG9uZSlcclxuICAgIH1cclxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9hZ2dyZW1lbnQnICYmIGxvZ2dlZEluKSB7XHJcbiAgICAgIG9uTW9kYWwodXNlci5waG9uZSlcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgcmVwZWF0Q29kZSA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGxvZ2dlZEluKVxyXG4gICAgaWYgKGNvb2tpZS5nZXQoJ3Rva2VuJykgPT09IHVuZGVmaW5lZCAmJiBwaG9uZSA9PT0gbnVsbCkge1xyXG4gICAgICBjb29raWUucmVtb3ZlKCdzdGVwJylcclxuICAgICAgcm91dGVyLnB1c2goJy8nKVxyXG4gICAgfVxyXG4gICAgaWYgKHBhdGhuYW1lID09PSAnL2FnZ3JlbWVudCcgJiYgcGhvbmUpIHtcclxuICAgICAgb25Nb2RhbChwaG9uZSlcclxuICAgIH1cclxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9hZ2dyZW1lbnQnICYmIGxvZ2dlZEluKSB7XHJcbiAgICAgIG9uTW9kYWwodXNlci5waG9uZSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGNoZWNrQ29kZSA9IChwYXJhbSkgPT4ge1xyXG4gICAgc2V0RXJyb3IoJycpXHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9jaGVja0NvZGU/cGhvbmU9JHtwYXJhbX0mY29kZT0ke2NvZGV9YClcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgaWYocmVzLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgZmluYWxTdWJtaXQoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIHNldEVycm9yKHJlcy5kYXRhLm1lc3NhZ2UpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyPT4ge1xyXG4gICAgICAgIHNldEVycm9yKCfQp9GC0L4g0YLQviDQv9C+0LvRiNC+INC90LUg0YLQsNC6JylcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IHNlbmRDb2RlQ2hlY2sgPSAoKSA9PiB7XHJcbiAgICBpZiAocGF0aG5hbWUgPT09ICcvYWdncmVtZW50JyAmJiBwaG9uZSkge1xyXG4gICAgICBjaGVja0NvZGUocGhvbmUpXHJcbiAgICB9XHJcbiAgICBpZiAocGF0aG5hbWUgIT09ICcvYWdncmVtZW50JyAmJiBsb2dnZWRJbikge1xyXG4gICAgICBjaGVja0NvZGUodXNlci5waG9uZSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGNvbnN0IGRvZ292b3JvYnJhYm90a2EgPSAoKSA9PiB7ICAgaWYocGF0aG5hbWUgPT09ICcvYWdncmVtZW50JykgeyAgICAgcmV0dXJuXHJcbiAgLy8gYC9kb2dvdm9yb2JyYWJvdGthP3Rva2VuPSR7dG9rZW59YCAgIH0gICBpZihwYXRobmFtZSA9PT1cclxuICAvLyAnL2NhYmluZXQvY29udGludWUnKSB7ICAgICByZXR1cm4gYC9kb2dvdm9yb2JyYWJvdGthP2lkPSR7aWR9YCAgIH0gICBlbHNlIHtcclxuICAvLyAgIHJldHVybiAnL2RvZ292b3JvYnJhYm90a2EnICAgfSB9XHJcbiAgcmV0dXJuIChcclxuXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybV9yZWdpc3RlciB0aGlyZHN0ZXAnPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpID0+IG9wZW5Db2RlTW9kYWwoZSl9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyYWRpb19ncm91cHMnPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9J3Bvc3RvcGxhdGEnXHJcbiAgICAgICAgICAgIGRhdGEtbmFtZT0ncG9zdG9wbGF0YSdcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdjaGVjay1ncm91cCdcclxuICAgICAgICAgICAgb25DbGljaz17ZSA9PiBjaGFuZ2VPcGxhdGEoZSl9PlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0nY2hlY2tib3gnIGNoZWNrZWQ9e3ByZWRvcGxhdGEgPT09IGZhbHNlfS8+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J3JhZGlvbGFiZWwnPtCf0L7RgdGC0L7Qv9C70LDRgtCwPC9sYWJlbD5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdwcmVkb3BsYXRhJ1xyXG4gICAgICAgICAgICBkYXRhLW5hbWU9J3ByZWRvcGxhdGEnXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nY2hlY2stZ3JvdXAnXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gY2hhbmdlT3BsYXRhKGUpfT5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J2NoZWNrYm94JyBjaGVja2VkPXtwcmVkb3BsYXRhID09PSB0cnVlfS8+XHJcblxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdyYWRpb2xhYmVsJz7Qn9GA0LXQtNC+0L/Qu9Cw0YLQsDwvbGFiZWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgeyFwcmVkb3BsYXRhICYmIDxkaXYgY2xhc3NOYW1lPVwicmFuZ2VcIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nc3Jva19tb250aCc+0KHRgNC+0Log0L7Qv9C70LDRgtGLICjQvNC10YHRj9GGKTwvcD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyYW5nZV9faW5wdXRcIlxyXG4gICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxyXG4gICAgICAgICAgICB2YWx1ZT17c3Jva31cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gY2hhbmdlU3JvayhlKX1cclxuICAgICAgICAgICAgbWluPVwiMVwiXHJcbiAgICAgICAgICAgIG1heD1cIjNcIlxyXG4gICAgICAgICAgICBzdGVwPVwiMVwiXHJcbiAgICAgICAgICAgIGxpc3Q9XCJudW1iZXJcIi8+XHJcbiAgICAgICAgICA8ZGF0YWxpc3QgY2xhc3NOYW1lPSdyYW5nZV9fbGlzdCcgaWQ9XCJudW1iZXJcIj5cclxuICAgICAgICAgICAgPG9wdGlvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZVNyb2tCdG4oJzEnKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2ByYW5nZV9fb3B0IG9wdDAgJHtzcm9rID09PSAnMScgJiYgJ2FjdGl2ZSd9YH0+MTwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlU3Jva0J0bignMicpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHJhbmdlX19vcHQgJHtzcm9rID09PSAnMicgJiYgJ2FjdGl2ZSd9YH0+Mjwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlU3Jva0J0bignMycpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHJhbmdlX19vcHQgJHtzcm9rID09PSAnMycgJiYgJ2FjdGl2ZSd9YH0+Mzwvb3B0aW9uPlxyXG4gICAgICAgICAgICB7LyogPG9wdGlvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZVNyb2tCdG4oJzQnKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2ByYW5nZV9fb3B0ICR7c3JvayA9PT0gJzQnICYmICdhY3RpdmUnfWB9PjQ8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZVNyb2tCdG4oJzUnKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2ByYW5nZV9fb3B0ICR7c3JvayA9PT0gJzUnICYmICdhY3RpdmUnfWB9PjU8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZVNyb2tCdG4oJzYnKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2ByYW5nZV9fb3B0ICR7c3JvayA9PT0gJzYnICYmICdhY3RpdmUnfWB9PjY8L29wdGlvbj4gKi99XHJcbiAgICAgICAgICA8L2RhdGFsaXN0PlxyXG4gICAgICAgIDwvZGl2PlxyXG59XHJcbiAgICAgICAgeyFwcmVkb3BsYXRhICYmIDxkaXYgY2xhc3NOYW1lPSdwYXltZW50X2RhdGUnPlxyXG4gICAgICAgICAgPHN0cm9uZz7QlNC10L3RjCDQvtC/0LvQsNGC0Ysg0LTQviB7cGF5bWVudERhdGV9XHJcbiAgICAgICAgICA8L3N0cm9uZz5cclxuICAgICAgICA8L2Rpdj59XHJcblxyXG4gICAgICAgIHsvKiA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9J251bWJlcidcclxuICAgICAgICAgIGNsYXNzTmFtZT0nc3VtbWEnXHJcbiAgICAgICAgICB2YWx1ZT17c3VtbWF9XHJcbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRTdW1tYShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj0n0KHRg9C80LzQsCDQvtC/0LvQsNGC0YsnLz4gKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BheW1lbnRfYW1vdW50Jz5cclxuICAgICAgICAgIDxwPtCh0YPQvNC80LAg0L7Qv9C70LDRgtGLOjwvcD5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzdHJvbmc+e2Ftb3VudFNwYWNlKGAke2Rpc2NvdW50fWApfdGC0LM8L3N0cm9uZz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcmljZS0tbGluZS10aHJvdWdoXCI+e2Ftb3VudFNwYWNlKGAke3N1bW1hfWApfdGC0LM8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXNjb3VudCc+XHJcbiAgICAgICAgICAgIHsvKiA8aW1nIHNyYz0nL2ltZy9kaXNjb3VudC5wbmcnLz4gKi99XHJcbiAgICAgICAgICAgIDxwPi01MCVcclxuICAgICAgICAgICAgICA8c3Bhbj7QodCa0JjQlNCa0JA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaGVja19ncm91cHMnPlxyXG4gICAgICAgICAgPGRpdiBkYXRhLW5hbWU9J3ByZWRvcGxhdGEnIGNsYXNzTmFtZT0nY2hlY2stZ3JvdXAnPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0nY2hlY2tib3gnIGNoZWNrZWQ9e2RvY3MuZG9jMX0vPlxyXG4gICAgICAgICAgICA8bGFiZWwgb25DbGljaz17KGUpID0+IGNoZWNrRG9jKGUpfSBkYXRhLW5hbWU9J2RvYzEnIGNsYXNzTmFtZT0nY2hlY2tsYWJlbCc+PC9sYWJlbD5cclxuICAgICAgICAgICAge3Rva2VuXHJcbiAgICAgICAgICAgICAgPyA8YSBocmVmPXtgL2RvZ292b3JvYnJhYm90a2E/dG9rZW49JHt0b2tlbn1gfSB0YXJnZXQ9J19fYmxhbmsnPtCX0LDQv9GA0L7RgSDQvdCwINC+0LHRgNCw0LHQvtGC0LrRgyDQv9C10YDRgdC+0L3QsNC70YzQvdGL0YUg0LTQsNC90L3Ri9GFPC9hPlxyXG4gICAgICAgICAgICAgIDogPGEgaHJlZj17YC9kb2dvdm9yb2JyYWJvdGthYH0gdGFyZ2V0PSdfX2JsYW5rJz7Ql9Cw0L/RgNC+0YEg0L3QsCDQvtCx0YDQsNCx0L7RgtC60YMg0L/QtdGA0YHQvtC90LDQu9GM0L3Ri9GFINC00LDQvdC90YvRhTwvYT59XHJcblxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGRhdGEtbmFtZT0ncG9zdG9wbGF0YScgY2xhc3NOYW1lPSdjaGVjay1ncm91cCc+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdjaGVja2JveCcgY2hlY2tlZD17ZG9jcy5kb2MyfS8+XHJcbiAgICAgICAgICAgIDxsYWJlbCBvbkNsaWNrPXsoZSkgPT4gY2hlY2tEb2MoZSl9IGNsYXNzTmFtZT0nY2hlY2tsYWJlbCcgZGF0YS1uYW1lPSdkb2MyJz48L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgPGEgaHJlZj0nL9Cf0KPQkdCb0JjQp9Cd0JDQryDQntCk0JXQoNCi0JAucGRmJyB0YXJnZXQ9J19fYmxhbmsnPtCU0L7Qs9C+0LLQvtGAINC/0YPQsdC70LjRh9C90L7QuSDQvtGE0LXRgNGC0Ys8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGRhdGEtbmFtZT0ncHJlZG9wbGF0YScgY2xhc3NOYW1lPSdjaGVjay1ncm91cCc+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdjaGVja2JveCcgY2hlY2tlZD17ZG9jcy5kb2M0fS8+XHJcbiAgICAgICAgICAgIDxsYWJlbCBvbkNsaWNrPXsoZSkgPT4gY2hlY2tEb2MoZSl9IGNsYXNzTmFtZT0nY2hlY2tsYWJlbCcgZGF0YS1uYW1lPSdkb2M0Jz48L2xhYmVsPlxyXG4gICAgICAgICAgICB7dG9rZW5cclxuICAgICAgICAgICAgICA/IDxhXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9e2AvZG9nb3Zvcj9wYXltZW50RGF0ZT0ke3BheW1lbnREYXRlfSZwZXJpb2Q9JHtzcm9rfSZ0b2tlbj0ke3Rva2VufWB9XHJcbiAgICAgICAgICAgICAgICAgIHRhcmdldD0nX19ibGFuayc+0JTQvtCz0L7QstC+0YAg0L3QsCDQt9Cw0LrQsNC3INC90LDRgNGP0LQ8L2E+XHJcbiAgICAgICAgICAgICAgOiA8YSBocmVmPXtgL2RvZ292b3I/cGF5bWVudERhdGU9JHtwYXltZW50RGF0ZX0mcGVyaW9kPSR7c3Jva31gfSB0YXJnZXQ9J19fYmxhbmsnPtCU0L7Qs9C+0LLQvtGAINC90LAg0LfQsNC60LDQtyDQvdCw0YDRj9C0PC9hPn1cclxuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICB7T2JqZWN0XHJcbiAgICAgICAgICAgIC5rZXlzKGRvY3MpXHJcbiAgICAgICAgICAgIC5zb21lKGsgPT4gIWRvY3Nba10pXHJcbiAgICAgICAgICAgID8gPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPSdzdWJtaXQnXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUZvY3VzKCl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2J1dHRvbiBidXR0b25fbGlnaHRlc3QnXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT0n0J/QvtC70YPRh9C40YLRjCDRgNC10LfRg9C70YzRgtCw0YInLz5cclxuICAgICAgICAgICAgOiA8aW5wdXQgdHlwZT0nc3VibWl0JyBjbGFzc05hbWU9J2J1dHRvbicgdmFsdWU9J9Cf0L7Qu9GD0YfQuNGC0Ywg0YDQtdC30YPQu9GM0YLQsNGCJy8+XHJcbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgPENvZGVNb2RhbFxyXG4gICAgICAgIGlzTW9kYWxPcGVuPXttb2RhbH1cclxuICAgICAgICBjbG9zZU1vZGFsPXtjbG9zZU1vZGFsfVxyXG4gICAgICAgIGNvZGU9e2NvZGV9XHJcbiAgICAgICAgc2V0Q29kZT17c2V0Q29kZX1cclxuICAgICAgICBvbkZpcnN0U3RlcD17c2VuZENvZGVDaGVja31cclxuICAgICAgICBnZXRJZGVudGlmaWNhdGlvbj17cmVwZWF0Q29kZX1cclxuICAgICAgICBlcnJvcj17ZXJyb3JDb2RlfS8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0KGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBudWxsKShUaGlyZFN0ZXApKSJdLCJzb3VyY2VSb290IjoiIn0=