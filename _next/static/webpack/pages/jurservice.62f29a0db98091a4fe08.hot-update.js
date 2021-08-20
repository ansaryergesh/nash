self["webpackHotUpdate_N_E"]("pages/jurservice",{

/***/ "./components/getservice/ThirdStepJur.js":
/*!***********************************************!*\
  !*** ./components/getservice/ThirdStepJur.js ***!
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



var _jsxFileName = "E:\\job\\nashcompany\\components\\getservice\\ThirdStepJur.js",
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

  var openCodeModal = function openCodeModal(e) {// e.preventDefault()
    // console.log(loggedIn)
    // if (cookie.get('token') === undefined && phone === null) {
    //   cookie.remove('step')
    //   router.push('/')
    // }
    // if (pathname === '/aggrement' && phone) {
    //   onModal(phone)
    // }
    // if (pathname !== '/aggrement' && loggedIn) {
    //   onModal(user.phone)
    // }
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
        setModal(false);
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
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "password",
        placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "payment_amount",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "\u0421\u0443\u043C\u043C\u0430 \u043E\u043F\u043B\u0430\u0442\u044B:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 371,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
            children: [(0,_defaults_extraFunction__WEBPACK_IMPORTED_MODULE_7__.amountSpace)("".concat(discount)), "\u0442\u0433"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 373,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            "class": "price--line-through",
            children: [(0,_defaults_extraFunction__WEBPACK_IMPORTED_MODULE_7__.amountSpace)("".concat(summa)), "\u0442\u0433"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 374,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 372,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "discount",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: ["-50%", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: "\u0421\u041A\u0418\u0414\u041A\u0410"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 379,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 378,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 376,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 370,
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
            lineNumber: 385,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            onClick: function onClick(e) {
              return checkDoc(e);
            },
            "data-name": "doc1",
            className: "checklabel"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 386,
            columnNumber: 13
          }, _this), token ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "/dogovorobrabotka?token=".concat(token),
            target: "__blank",
            children: "\u0421\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430 \u0441\u0431\u043E\u0440 \u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 388,
            columnNumber: 17
          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "/dogovorobrabotka",
            target: "__blank",
            children: "\u0417\u0430\u043F\u0440\u043E\u0441 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 389,
            columnNumber: 17
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 384,
          columnNumber: 11
        }, _this), docs.doc1 === true ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
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
        lineNumber: 383,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 303,
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
    lineNumber: 302,
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
/* harmony import */ var _components_getservice_ThirdStepJur__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/getservice/ThirdStepJur */ "./components/getservice/ThirdStepJur.js");
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
    if (num !== "1") {
      js_cookie__WEBPACK_IMPORTED_MODULE_7___default().set("stepjur", num);
      router.push("/jurservice?step=".concat(num));
    } else {
      router.push('/jurservice');
      js_cookie__WEBPACK_IMPORTED_MODULE_7___default().remove('stepjur');
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "getservice",
    children: [loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_loader_Loader__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 19
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0443\u0441\u043B\u0443\u0433\u0443 | \u042E\u0440. \u043B\u0438\u0446\u043E"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "header",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Nav__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "bg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "form_headings",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
          children: "\u0423\u0441\u043B\u0443\u0433\u0438 \u044E\u0440. \u043B\u0438\u0446\u0430\u043C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: ["\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, _this), "\u0443\u0441\u043B\u0443\u0433\u0443:"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "form_service ",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "form_header",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              onClick: function onClick() {
                return headerClick("1");
              },
              className: cookieStep === undefined || step === '1' ? 'active' : '',
              children: "1 \u0428\u0430\u0433"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              onClick: function onClick() {
                return headerClick("2");
              },
              className: cookieStep === '2' && step === '2' && 'active',
              children: "2 \u0428\u0430\u0433"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              onClick: function onClick() {
                return headerClick("3");
              },
              className: cookieStep === '3' && step === '3' && 'active',
              children: "3 \u0428\u0430\u0433"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "form_register",
          children: [js_cookie__WEBPACK_IMPORTED_MODULE_7___default().get('stepjur') === undefined && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_getservice_FirstStepJur__WEBPACK_IMPORTED_MODULE_1__.default, {
            setLoading: setLoading
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 49
          }, _this), step === '2' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_getservice_SecondStepJur__WEBPACK_IMPORTED_MODULE_2__.default, {
            setLoading: setLoading
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 24
          }, _this), step === '3' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_getservice_ThirdStepJur__WEBPACK_IMPORTED_MODULE_5__.default, {
            setLoading: setLoading
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 24
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRzZXJ2aWNlL1RoaXJkU3RlcEp1ci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvanVyc2VydmljZS5qcyJdLCJuYW1lcyI6WyJtYXBTdGF0ZVRvUHJvcHMiLCJ1c2VyUmVkdWNlciIsInVzZXIiLCJsb2dnZWRJbiIsIlRoaXJkU3RlcCIsInNldExvYWRpbmciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwicGF0aG5hbWUiLCJ0b2tlbiIsImFtb3VudCIsInVzZVN0YXRlIiwiYW1vdW50VmFsIiwic2V0QW1vdW50IiwibGVhZElEIiwiYWdnclRva2VuIiwic2V0QWdnclRva2VuIiwiZmluYWxBbW91bnQiLCJhZ2dySWQiLCJzZXRBZ2dySWQiLCJwaG9uZSIsInNldFBob25lIiwibW9kYWwiLCJzZXRNb2RhbCIsImNvZGUiLCJzZXRDb2RlIiwiZmluYWxJRCIsInVzZUVmZmVjdCIsInN1bW1hIiwiY29va2llIiwidW5kZWZpbmVkIiwiZmluYWxTdW1tYSIsIk1hdGgiLCJmbG9vciIsInBhcnNlSW50IiwiZGlzY291bnRTdW1tYSIsInNldFN1bW1hIiwic2V0RGlzY291bnQiLCJjb25zb2xlIiwibG9nIiwiYXhpb3MiLCJwcm9jZXNzIiwidGhlbiIsInJlcyIsImRhdGEiLCJwdXNoIiwiZGlzY291bnQiLCJwcmVkb3BsYXRhIiwic2V0T3BsYXRhIiwicGFyc2VEYXRlIiwicGF5bWVudERhdGUiLCJzZXRQYXltZW50RGF0ZSIsImVycm9yQ29kZSIsInNldEVycm9yIiwiZG9jcyIsInNldERvY3MiLCJzcm9rIiwic2V0U3JvayIsImNoZWNrRG9jIiwiZSIsIm5hbWUiLCJ0YXJnZXQiLCJkYXRhc2V0IiwiY2hhbmdlT3BsYXRhIiwiZ2V0QXR0cmlidXRlIiwiY2hhbmdlU3JvayIsIm1vbnRoIiwidmFsdWUiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsTGVmdCIsImNoYW5nZVNyb2tCdG4iLCJtb250aFZhbCIsInNjcm9sbFJpZ2h0IiwiYWdncmVtZW50U2JtdCIsInBhcmFtcyIsInR5cGVQYXltZW50IiwicGVyaW9kIiwiZGF0ZV9wYXltZW50IiwiYW1vdW50UGF5bWVudCIsInN0YXR1cyIsInN3YWwiLCJlcnIiLCJzdGVwVGhpcmQiLCJvYmplY3QiLCJ1dG1fc291cmNlIiwiY2xpY2tfaWQiLCJzdWNjZXNzIiwiUm91dGVyIiwiZmluYWxTdWJtaXQiLCJjbG9zZU1vZGFsIiwib25Nb2RhbCIsInBhcmFtIiwib3BlbkNvZGVNb2RhbCIsInJlcGVhdENvZGUiLCJjaGVja0NvZGUiLCJjb2RlVmFsIiwibWVzc2FnZSIsInNlbmRDb2RlQ2hlY2siLCJhbW91bnRTcGFjZSIsImRvYzEiLCJoYW5kbGVGb2N1cyIsImNvbm5lY3QiLCJHZXRTZXJ2aWNlIiwic3RlcCIsImxvYWRpbmciLCJjb29raWVTdGVwIiwic2V0Q29va2llU3RlcCIsImhlYWRlckNsaWNrIiwibnVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQjtBQUFBLDhCQUN0QkMsV0FEc0I7QUFBQSxNQUVwQkMsSUFGb0Isb0JBRXBCQSxJQUZvQjtBQUFBLE1BR3BCQyxRQUhvQixvQkFHcEJBLFFBSG9CO0FBQUEsU0FLakI7QUFBQ0QsUUFBSSxFQUFKQSxJQUFEO0FBQU9DLFlBQVEsRUFBUkE7QUFBUCxHQUxpQjtBQUFBLENBQXhCOztBQU9BLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLFFBRVo7QUFBQTs7QUFBQSxNQURKQyxVQUNJLFNBREpBLFVBQ0k7QUFBQSxNQURRSCxJQUNSLFNBRFFBLElBQ1I7QUFBQSxNQURhQyxRQUNiLFNBRGFBLFFBQ2I7QUFDSixNQUFNRyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FB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RyxHQUFQLGlCQUFjLDhEQUFDLHdFQUFEO0FBQVcsc0JBQVUsRUFBRXRHO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBeUNELENBakZEOztHQUFNcUcsVTtVQUNXbkcsa0Q7OztLQURYbUcsVTtBQWtGTiwrREFBZUEsVUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9qdXJzZXJ2aWNlLjYyZjI5YTBkYjk4MDkxYTRmZTA4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSdcclxuaW1wb3J0IFJvdXRlciwge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBzd2FsIGZyb20gJ3N3ZWV0YWxlcnQnXHJcbmltcG9ydCB7YW1vdW50U3BhY2UsIGhhbmRsZUZvY3VzLCBwYXJzZURhdGV9IGZyb20gXCIuLi8uLi9kZWZhdWx0cy9leHRyYUZ1bmN0aW9uXCJcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG5pbXBvcnQgQ29kZU1vZGFsIGZyb20gJy4uL3NoYXJlZC9Db2RlTW9kYWwnXHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoe1xyXG4gIHVzZXJSZWR1Y2VyOiB7XHJcbiAgICB1c2VyLFxyXG4gICAgbG9nZ2VkSW5cclxuICB9XHJcbn0pID0+ICh7dXNlciwgbG9nZ2VkSW59KTtcclxuXHJcbmNvbnN0IFRoaXJkU3RlcCA9ICh7XHJcbiAgc2V0TG9hZGluZywgdXNlcixsb2dnZWRJblxyXG59KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCB7aWR9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IHBhdGhuYW1lID0gcm91dGVyLnBhdGhuYW1lXHJcbiAgY29uc3Qge3Rva2VufSA9IHJvdXRlci5xdWVyeVxyXG4gIGNvbnN0IHthbW91bnR9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgY29uc3QgW2Ftb3VudFZhbCxcclxuICAgIHNldEFtb3VudF0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IHtsZWFkSUR9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgY29uc3QgW2FnZ3JUb2tlbixcclxuICAgIHNldEFnZ3JUb2tlbl0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBmaW5hbEFtb3VudCA9IGFtb3VudFxyXG4gICAgPyBhbW91bnRcclxuICAgIDogYW1vdW50VmFsXHJcbiAgY29uc3QgW2FnZ3JJZCxcclxuICAgIHNldEFnZ3JJZF0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbcGhvbmUsXHJcbiAgICBzZXRQaG9uZV0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFttb2RhbCxcclxuICAgIHNldE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtjb2RlLFxyXG4gICAgc2V0Q29kZV0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBmaW5hbElEID0gaWQgfHwgbGVhZElEXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHN1bW1hID0gY29va2llLmdldCgnYW1vdW50JykgIT09IHVuZGVmaW5lZFxyXG4gICAgICA/IGNvb2tpZS5nZXQoJ2Ftb3VudCcpXHJcbiAgICAgIDogZmluYWxBbW91bnRcclxuICAgIGNvbnN0IGZpbmFsU3VtbWEgPSBNYXRoLmZsb29yKHBhcnNlSW50KHN1bW1hKSAqIDAuMilcclxuICAgIGNvbnN0IGRpc2NvdW50U3VtbWEgPSBNYXRoLmZsb29yKHBhcnNlSW50KGZpbmFsU3VtbWEpIC8gMilcclxuICAgIGlmIChmaW5hbFN1bW1hID4gMjAwMDAwKSB7XHJcbiAgICAgIHNldFN1bW1hKGZpbmFsU3VtbWEpXHJcbiAgICAgIHNldERpc2NvdW50KGRpc2NvdW50U3VtbWEpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRTdW1tYSgyMDAwMDApXHJcbiAgICAgIHNldERpc2NvdW50KDEwMDAwMClcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKGZpbmFsU3VtbWEpXHJcbiAgfSwgW2Nvb2tpZS5nZXQoJ2Ftb3VudCcpXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICBzZXRBZ2dyVG9rZW4odG9rZW4pXHJcbiAgICB9XHJcblxyXG4gIH0sIFt0b2tlbl0pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChwYXRobmFtZSA9PT0gJy9hZ2dyZW1lbnQnICYmIGFnZ3JUb2tlbikge1xyXG4gICAgICBjb25zb2xlLmxvZygneWVzJylcclxuICAgICAgYXhpb3NcclxuICAgICAgICAuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9nZXREYXRhU2lnbj90b2tlbj0ke2FnZ3JUb2tlbn1gKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhhZ2dyVG9rZW4pXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICBpZiAoIXJlcy5kYXRhLmlkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGlzJylcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0UGhvbmUocmVzLmRhdGEucGhvbmUpXHJcbiAgICAgICAgICAgIHNldEFnZ3JJZChyZXMuZGF0YS5pZClcclxuICAgICAgICAgICAgc2V0QW1vdW50KHBhcnNlSW50KHJlcy5kYXRhLmFtb3VudCkpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICB9LCBbYWdnclRva2VuXSlcclxuXHJcbiAgY29uc3QgW3N1bW1hLFxyXG4gICAgc2V0U3VtbWFdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbZGlzY291bnQsXHJcbiAgICBzZXREaXNjb3VudF0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFtwcmVkb3BsYXRhLFxyXG4gICAgc2V0T3BsYXRhXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtwYXltZW50RGF0ZSxcclxuICAgIHNldFBheW1lbnREYXRlXSA9IHVzZVN0YXRlKHBhcnNlRGF0ZSgxKSlcclxuICBjb25zdCBbZXJyb3JDb2RlLHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtkb2NzLFxyXG4gICAgc2V0RG9jc10gPSB1c2VTdGF0ZSh7XCJkb2MxXCI6IHRydWUsIFwiZG9jMlwiOiB0cnVlLCBcImRvYzNcIjogdHJ1ZSwgXCJkb2M0XCI6IHRydWV9KVxyXG4gIGNvbnN0IFtzcm9rLFxyXG4gICAgc2V0U3Jva10gPSB1c2VTdGF0ZSgnMScpXHJcbiAgY29uc3QgY2hlY2tEb2MgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgbmFtZSA9IGUudGFyZ2V0LmRhdGFzZXQubmFtZVxyXG4gICAgLy8gY29uc29sZS5sb2coZG9jc1tuYW1lXSlcclxuICAgIHNldERvY3Moe1xyXG4gICAgICAuLi5kb2NzLFxyXG4gICAgICBbbmFtZV06ICFkb2NzW25hbWVdXHJcbiAgICB9KVxyXG4gICAgY29uc29sZS5sb2coZG9jcylcclxuXHJcbiAgfVxyXG4gIGNvbnN0IGNoYW5nZU9wbGF0YSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBuYW1lID0gZVxyXG4gICAgICAudGFyZ2V0XHJcbiAgICAgIC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpXHJcbiAgICBzZXRPcGxhdGEoIXByZWRvcGxhdGEpXHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGFuZ2VTcm9rID0gZSA9PiB7XHJcbiAgICBjb25zdCBtb250aCA9IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgc2V0U3JvayhlLnRhcmdldC52YWx1ZSlcclxuICAgIHNldFBheW1lbnREYXRlKHBhcnNlRGF0ZShtb250aCkpXHJcbiAgICBpZiAoZS50YXJnZXQudmFsdWUgPiAyKSB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFuZ2VfX2xpc3QnKVxyXG4gICAgICBlbGVtZW50LnNjcm9sbExlZnQgPSAtMzAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYW5nZV9fbGlzdCcpXHJcbiAgICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCA9IDMwMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGNoYW5nZVNyb2tCdG4gPSAobW9udGgpID0+IHtcclxuICAgIGNvbnN0IG1vbnRoVmFsID0gcGFyc2VJbnQobW9udGgpXHJcbiAgICBzZXRTcm9rKG1vbnRoKVxyXG4gICAgc2V0UGF5bWVudERhdGUocGFyc2VEYXRlKG1vbnRoVmFsKSlcclxuICAgIGlmIChtb250aFZhbCA+IDMpIHtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYW5nZV9fbGlzdCcpXHJcbiAgICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCA9IDIwMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFuZ2VfX2xpc3QnKVxyXG4gICAgICBlbGVtZW50LnNjcm9sbFJpZ2h0ID0gMjAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgYWdncmVtZW50U2JtdCA9ICgpID0+IHtcclxuICAgIC8vIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vcmVtb3ZlU2hvcnRVcmxgLCB7XHJcbiAgICAgIHBhcmFtczoge1xyXG4gICAgICAgIGlkOiBhZ2dySWQsXHJcbiAgICAgICAgdHlwZVBheW1lbnQ6IHByZWRvcGxhdGFcclxuICAgICAgICAgID8gJ9Cf0YDQtdC00L7Qv9C70LDRgtCwJ1xyXG4gICAgICAgICAgOiAn0J/QvtGB0YLQvtC/0LvQsNGC0LAnLFxyXG4gICAgICAgIHBlcmlvZDogc3JvayxcclxuICAgICAgICBkYXRlX3BheW1lbnQ6IHBheW1lbnREYXRlLFxyXG4gICAgICAgIGFtb3VudFBheW1lbnQ6IGRpc2NvdW50XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgc3dhbChcItCj0YHQv9C10YjQvdC+IVwiLCBg0JLQsNGI0LAg0LfQsNGP0LLQutCwINC+0YLQv9GA0LDQstC70LXQvdCwINCyIE5hc2ggQ29tcGFueS4g0JLQsNC8INGB0LXQudGH0LDRgSDQv9C10YDQtdC30LLQvtC90Y/RgiDRgSDQvdC+0LzQtdGA0LAgKzcoNzAwKTM1MC01MC0wMGAsIFwic3VjY2Vzc1wiKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgfSlcclxuICB9XHJcbiAgXHJcbiAgY29uc3Qgc3RlcFRoaXJkID0gKCkgPT4ge1xyXG4gICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBjb25zdCBvYmplY3QgPSB7XHJcbiAgICAgIGlkOiBjb29raWUuZ2V0KCdsZWFkX2lkJykgPT09IHVuZGVmaW5lZFxyXG4gICAgICAgID8gZmluYWxJRFxyXG4gICAgICAgIDogY29va2llLmdldCgnbGVhZF9pZCcpLFxyXG4gICAgICB0b2tlbjogY29va2llLmdldCgndG9rZW4nKSxcclxuICAgICAgYW1vdW50UGF5bWVudDogZGlzY291bnQsXHJcbiAgICAgIGRhdGVfcGF5bWVudDogcGF5bWVudERhdGUsXHJcbiAgICAgIHBlcmlvZDogc3JvayxcclxuICAgICAgdHlwZVBheW1lbnQ6IHByZWRvcGxhdGFcclxuICAgICAgICA/ICfQn9GA0LXQtNC+0L/Qu9Cw0YLQsCdcclxuICAgICAgICA6ICfQn9C+0YHRgtC+0L/Qu9Cw0YLQsCdcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY29va2llLmdldCgndXRtX3NvdXJjZScpICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgb2JqZWN0LnV0bV9zb3VyY2UgPSBjb29raWUuZ2V0KCd1dG1fc291cmNlJylcclxuICAgICAgb2JqZWN0LmNsaWNrX2lkID0gY29va2llLmdldCgnY2xpY2tfaWQnKVxyXG4gICAgICAvLyBvYmplY3Qud2ViSUQgPSBjb29raWUuZ2V0KCd3ZWJfaWQnKVxyXG4gICAgfVxyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vc3RlcFRocmVlYCwge3BhcmFtczogb2JqZWN0fSlcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICBpZiAocmVzLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgc3dhbChcItCj0YHQv9C10YjQvdC+IVwiLCBg0JLQsNGI0LAg0LfQsNGP0LLQutCwINC+0YLQv9GA0LDQstC70LXQvdCwINCyIE5hc2ggQ29tcGFueS4g0JLQsNC8INGB0LXQudGH0LDRgSDQv9C10YDQtdC30LLQvtC90Y/RgiDRgSDQvdC+0LzQtdGA0LAgKzcoNzAwKTM1MC01MC0wMGAsIFwic3VjY2Vzc1wiKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goJy9jYWJpbmV0L3JlcXVlc3RzJylcclxuICAgICAgICAgICAgY29va2llLnJlbW92ZSgnbGVhZF9pZCcpXHJcbiAgICAgICAgICAgIGNvb2tpZS5yZW1vdmUoJ3N0ZXAnKVxyXG4gICAgICAgICAgICBjb29raWUucmVtb3ZlKCd1dG1fbWVkaXVtJylcclxuICAgICAgICAgICAgY29va2llLnJlbW92ZSgndXRtX3NvdXJjZScpXHJcbiAgICAgICAgICAgIGNvb2tpZS5yZW1vdmUoJ3V0bV9jYW1wYWlnbicpXHJcbiAgICAgICAgICAgIGNvb2tpZS5yZW1vdmUoJ2NsaWNrX2lkJylcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGZpbmFsU3VibWl0ID0gKCk9PiB7XHJcbiAgICBpZiAocGF0aG5hbWUgPT09ICcvYWdncmVtZW50Jykge1xyXG4gICAgICBhZ2dyZW1lbnRTYm10KClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN0ZXBUaGlyZCgpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0Q29kZSgnJylcclxuICAgIHNldEVycm9yKCcnKVxyXG4gICAgc2V0TW9kYWwoZmFsc2UpXHJcbiAgfVxyXG5cclxuICBjb25zdCBvbk1vZGFsID0gKHBhcmFtKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICBzZXRNb2RhbChmYWxzZSlcclxuICAgIHNldEVycm9yKCcnKVxyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vZm91cnRoU3RhZ2U/cGhvbmU9JHtwYXJhbX1gKVxyXG4gICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgIHNldE1vZGFsKHRydWUpXHJcbiAgICAgICAgfSBlbHNlIHt9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgc2V0TW9kYWwoZmFsc2UpXHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBvcGVuQ29kZU1vZGFsID0gKGUpID0+IHtcclxuXHJcbiAgICAvLyBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIC8vIGNvbnNvbGUubG9nKGxvZ2dlZEluKVxyXG4gICAgLy8gaWYgKGNvb2tpZS5nZXQoJ3Rva2VuJykgPT09IHVuZGVmaW5lZCAmJiBwaG9uZSA9PT0gbnVsbCkge1xyXG4gICAgLy8gICBjb29raWUucmVtb3ZlKCdzdGVwJylcclxuICAgIC8vICAgcm91dGVyLnB1c2goJy8nKVxyXG4gICAgLy8gfVxyXG4gICAgLy8gaWYgKHBhdGhuYW1lID09PSAnL2FnZ3JlbWVudCcgJiYgcGhvbmUpIHtcclxuICAgIC8vICAgb25Nb2RhbChwaG9uZSlcclxuICAgIC8vIH1cclxuICAgIC8vIGlmIChwYXRobmFtZSAhPT0gJy9hZ2dyZW1lbnQnICYmIGxvZ2dlZEluKSB7XHJcbiAgICAvLyAgIG9uTW9kYWwodXNlci5waG9uZSlcclxuICAgIC8vIH1cclxuICB9XHJcbiAgY29uc3QgcmVwZWF0Q29kZSA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGxvZ2dlZEluKVxyXG4gICAgaWYgKGNvb2tpZS5nZXQoJ3Rva2VuJykgPT09IHVuZGVmaW5lZCAmJiBwaG9uZSA9PT0gbnVsbCkge1xyXG4gICAgICBjb29raWUucmVtb3ZlKCdzdGVwJylcclxuICAgICAgcm91dGVyLnB1c2goJy8nKVxyXG4gICAgfVxyXG4gICAgaWYgKHBhdGhuYW1lID09PSAnL2FnZ3JlbWVudCcgJiYgcGhvbmUpIHtcclxuICAgICAgb25Nb2RhbChwaG9uZSlcclxuICAgIH1cclxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9hZ2dyZW1lbnQnICYmIGxvZ2dlZEluKSB7XHJcbiAgICAgIG9uTW9kYWwodXNlci5waG9uZSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGNoZWNrQ29kZSA9IChwYXJhbSwgY29kZVZhbCkgPT4ge1xyXG4gICAgc2V0RXJyb3IoJycpXHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9jaGVja0NvZGU/cGhvbmU9JHtwYXJhbX0mY29kZT0ke2NvZGVWYWx9YClcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgaWYocmVzLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgc2V0TW9kYWwoZmFsc2UpXHJcbiAgICAgICAgICBmaW5hbFN1Ym1pdCgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgc2V0RXJyb3IocmVzLmRhdGEubWVzc2FnZSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnI9PiB7XHJcbiAgICAgICAgc2V0RXJyb3IoJ9Cn0YLQviDRgtC+INC/0L7Qu9GI0L4g0L3QtSDRgtCw0LonKVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2VuZENvZGVDaGVjayA9IChjb2RlVmFsKSA9PiB7XHJcbiAgICBpZiAocGF0aG5hbWUgPT09ICcvYWdncmVtZW50JyAmJiBwaG9uZSkge1xyXG4gICAgICBjaGVja0NvZGUocGhvbmUsIGNvZGVWYWwpXHJcbiAgICB9XHJcbiAgICBpZiAocGF0aG5hbWUgIT09ICcvYWdncmVtZW50JyAmJiBsb2dnZWRJbikge1xyXG4gICAgICBjaGVja0NvZGUodXNlci5waG9uZSwgY29kZVZhbClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGNvbnN0IGRvZ292b3JvYnJhYm90a2EgPSAoKSA9PiB7ICAgaWYocGF0aG5hbWUgPT09ICcvYWdncmVtZW50JykgeyAgICAgcmV0dXJuXHJcbiAgLy8gYC9kb2dvdm9yb2JyYWJvdGthP3Rva2VuPSR7dG9rZW59YCAgIH0gICBpZihwYXRobmFtZSA9PT1cclxuICAvLyAnL2NhYmluZXQvY29udGludWUnKSB7ICAgICByZXR1cm4gYC9kb2dvdm9yb2JyYWJvdGthP2lkPSR7aWR9YCAgIH0gICBlbHNlIHtcclxuICAvLyAgIHJldHVybiAnL2RvZ292b3JvYnJhYm90a2EnICAgfSB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtX3JlZ2lzdGVyIHRoaXJkc3RlcCc+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSkgPT4gb3BlbkNvZGVNb2RhbChlKX0+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwi0JLQstC10LTQuNGC0LUg0L/QsNGA0L7Qu9GMXCIgLz5cclxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9J3JhZGlvX2dyb3Vwcyc+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0ncG9zdG9wbGF0YSdcclxuICAgICAgICAgICAgZGF0YS1uYW1lPSdwb3N0b3BsYXRhJ1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9J2NoZWNrLWdyb3VwJ1xyXG4gICAgICAgICAgICBvbkNsaWNrPXtlID0+IGNoYW5nZU9wbGF0YShlKX0+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdjaGVja2JveCcgY2hlY2tlZD17cHJlZG9wbGF0YSA9PT0gZmFsc2V9Lz5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0ncmFkaW9sYWJlbCc+0J/QvtGB0YLQvtC/0LvQsNGC0LA8L2xhYmVsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9J3ByZWRvcGxhdGEnXHJcbiAgICAgICAgICAgIGRhdGEtbmFtZT0ncHJlZG9wbGF0YSdcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdjaGVjay1ncm91cCdcclxuICAgICAgICAgICAgb25DbGljaz17ZSA9PiBjaGFuZ2VPcGxhdGEoZSl9PlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0nY2hlY2tib3gnIGNoZWNrZWQ9e3ByZWRvcGxhdGEgPT09IHRydWV9Lz5cclxuXHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J3JhZGlvbGFiZWwnPtCf0YDQtdC00L7Qv9C70LDRgtCwPC9sYWJlbD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PiAqL31cclxuXHJcbiAgICAgICAgey8qIHshcHJlZG9wbGF0YSAmJiA8ZGl2IGNsYXNzTmFtZT1cInJhbmdlXCI+ICovfVxyXG4gICAgICAgICAgey8qIDxwIGNsYXNzTmFtZT0nc3Jva19tb250aCc+0KHRgNC+0Log0L7Qv9C70LDRgtGLICjQvNC10YHRj9GGKTwvcD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyYW5nZV9faW5wdXRcIlxyXG4gICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxyXG4gICAgICAgICAgICB2YWx1ZT17c3Jva31cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gY2hhbmdlU3JvayhlKX1cclxuICAgICAgICAgICAgbWluPVwiMVwiXHJcbiAgICAgICAgICAgIG1heD1cIjNcIlxyXG4gICAgICAgICAgICBzdGVwPVwiMVwiXHJcbiAgICAgICAgICAgIGxpc3Q9XCJudW1iZXJcIi8+ICovfVxyXG4gICAgICAgICAgey8qIDxkYXRhbGlzdCBjbGFzc05hbWU9J3JhbmdlX19saXN0JyBpZD1cIm51bWJlclwiPlxyXG4gICAgICAgICAgICA8b3B0aW9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlU3Jva0J0bignMScpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHJhbmdlX19vcHQgb3B0MCAke3Nyb2sgPT09ICcxJyAmJiAnYWN0aXZlJ31gfT4xPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VTcm9rQnRuKCcyJyl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcmFuZ2VfX29wdCAke3Nyb2sgPT09ICcyJyAmJiAnYWN0aXZlJ31gfT4yPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VTcm9rQnRuKCczJyl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcmFuZ2VfX29wdCAke3Nyb2sgPT09ICczJyAmJiAnYWN0aXZlJ31gfT4zPC9vcHRpb24+ICovfVxyXG4gICAgICAgICAgICB7LyogPG9wdGlvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZVNyb2tCdG4oJzQnKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2ByYW5nZV9fb3B0ICR7c3JvayA9PT0gJzQnICYmICdhY3RpdmUnfWB9PjQ8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZVNyb2tCdG4oJzUnKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2ByYW5nZV9fb3B0ICR7c3JvayA9PT0gJzUnICYmICdhY3RpdmUnfWB9PjU8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZVNyb2tCdG4oJzYnKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2ByYW5nZV9fb3B0ICR7c3JvayA9PT0gJzYnICYmICdhY3RpdmUnfWB9PjY8L29wdGlvbj4gKi99XHJcbiAgICAgICAgICB7LyogPC9kYXRhbGlzdD4gKi99XHJcbiAgICAgICAgey8qIDwvZGl2PiAqL31cclxuey8qIH0gKi99XHJcbiAgICAgICAgey8qIHshcHJlZG9wbGF0YSAmJiA8ZGl2IGNsYXNzTmFtZT0ncGF5bWVudF9kYXRlJz5cclxuICAgICAgICAgIDxzdHJvbmc+0JTQtdC90Ywg0L7Qv9C70LDRgtGLINC00L4ge3BheW1lbnREYXRlfVxyXG4gICAgICAgICAgPC9zdHJvbmc+XHJcbiAgICAgICAgPC9kaXY+fSAqL31cclxuXHJcbiAgICAgICAgey8qIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT0nbnVtYmVyJ1xyXG4gICAgICAgICAgY2xhc3NOYW1lPSdzdW1tYSdcclxuICAgICAgICAgIHZhbHVlPXtzdW1tYX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFN1bW1hKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPSfQodGD0LzQvNCwINC+0L/Qu9Cw0YLRiycvPiAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5bWVudF9hbW91bnQnPlxyXG4gICAgICAgICAgPHA+0KHRg9C80LzQsCDQvtC/0LvQsNGC0Ys6PC9wPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHN0cm9uZz57YW1vdW50U3BhY2UoYCR7ZGlzY291bnR9YCl90YLQszwvc3Ryb25nPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByaWNlLS1saW5lLXRocm91Z2hcIj57YW1vdW50U3BhY2UoYCR7c3VtbWF9YCl90YLQszwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Rpc2NvdW50Jz5cclxuICAgICAgICAgICAgey8qIDxpbWcgc3JjPScvaW1nL2Rpc2NvdW50LnBuZycvPiAqL31cclxuICAgICAgICAgICAgPHA+LTUwJVxyXG4gICAgICAgICAgICAgIDxzcGFuPtCh0JrQmNCU0JrQkDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NoZWNrX2dyb3Vwcyc+XHJcbiAgICAgICAgICA8ZGl2IGRhdGEtbmFtZT0ncHJlZG9wbGF0YScgY2xhc3NOYW1lPSdjaGVjay1ncm91cCc+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdjaGVja2JveCcgY2hlY2tlZD17ZG9jcy5kb2MxfS8+XHJcbiAgICAgICAgICAgIDxsYWJlbCBvbkNsaWNrPXsoZSkgPT4gY2hlY2tEb2MoZSl9IGRhdGEtbmFtZT0nZG9jMScgY2xhc3NOYW1lPSdjaGVja2xhYmVsJz48L2xhYmVsPlxyXG4gICAgICAgICAgICB7dG9rZW5cclxuICAgICAgICAgICAgICA/IDxhIGhyZWY9e2AvZG9nb3Zvcm9icmFib3RrYT90b2tlbj0ke3Rva2VufWB9IHRhcmdldD0nX19ibGFuayc+0KHQvtCz0LvQsNGB0LjQtSDQvdCwINGB0LHQvtGAINC4INC+0LHRgNCw0LHQvtGC0LrRgyDQuNC90YTQvtGA0LzQsNGG0LjQuDwvYT5cclxuICAgICAgICAgICAgICA6IDxhIGhyZWY9e2AvZG9nb3Zvcm9icmFib3RrYWB9IHRhcmdldD0nX19ibGFuayc+0JfQsNC/0YDQvtGBINC90LAg0L7QsdGA0LDQsdC+0YLQutGDINC/0LXRgNGB0L7QvdCw0LvRjNC90YvRhSDQtNCw0L3QvdGL0YU8L2E+fVxyXG5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIDxkaXYgZGF0YS1uYW1lPSdwb3N0b3BsYXRhJyBjbGFzc05hbWU9J2NoZWNrLWdyb3VwJz5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J2NoZWNrYm94JyBjaGVja2VkPXtkb2NzLmRvYzJ9Lz5cclxuICAgICAgICAgICAgPGxhYmVsIG9uQ2xpY2s9eyhlKSA9PiBjaGVja0RvYyhlKX0gY2xhc3NOYW1lPSdjaGVja2xhYmVsJyBkYXRhLW5hbWU9J2RvYzInPjwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICA8YSBocmVmPScv0J/Qo9CR0JvQmNCn0J3QkNCvINCe0KTQldCg0KLQkC5wZGYnIHRhcmdldD0nX19ibGFuayc+0JTQvtCz0L7QstC+0YAg0L/Rg9Cx0LvQuNGH0L3QvtC5INC+0YTQtdGA0YLRizwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgZGF0YS1uYW1lPSdwcmVkb3BsYXRhJyBjbGFzc05hbWU9J2NoZWNrLWdyb3VwJz5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J2NoZWNrYm94JyBjaGVja2VkPXtkb2NzLmRvYzR9Lz5cclxuICAgICAgICAgICAgPGxhYmVsIG9uQ2xpY2s9eyhlKSA9PiBjaGVja0RvYyhlKX0gY2xhc3NOYW1lPSdjaGVja2xhYmVsJyBkYXRhLW5hbWU9J2RvYzQnPjwvbGFiZWw+XHJcbiAgICAgICAgICAgIHt0b2tlblxyXG4gICAgICAgICAgICAgID8gPGFcclxuICAgICAgICAgICAgICAgICAgaHJlZj17YC9kb2dvdm9yP3BheW1lbnREYXRlPSR7cGF5bWVudERhdGV9JnBlcmlvZD0ke3Nyb2t9JnRva2VuPSR7dG9rZW59YH1cclxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfX2JsYW5rJz7QlNC+0LPQvtCy0L7RgCDQvdCwINC30LDQutCw0Lcg0L3QsNGA0Y/QtDwvYT5cclxuICAgICAgICAgICAgICA6IDxhIGhyZWY9e2AvZG9nb3Zvcj9wYXltZW50RGF0ZT0ke3BheW1lbnREYXRlfSZwZXJpb2Q9JHtzcm9rfWB9IHRhcmdldD0nX19ibGFuayc+0JTQvtCz0L7QstC+0YAg0L3QsCDQt9Cw0LrQsNC3INC90LDRgNGP0LQ8L2E+fVxyXG5cclxuICAgICAgICAgIDwvZGl2PiAqL31cclxuXHJcbiAgICAgICAgICB7ZG9jcy5kb2MxID09PSB0cnVlXHJcbiAgICAgICAgICAgID8gPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPSdzdWJtaXQnXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUZvY3VzKCl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2J1dHRvbiBidXR0b25fbGlnaHRlc3QnXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT0n0J/QvtC70YPRh9C40YLRjCDRgNC10LfRg9C70YzRgtCw0YInLz5cclxuICAgICAgICAgICAgOiA8aW5wdXQgdHlwZT0nc3VibWl0JyBjbGFzc05hbWU9J2J1dHRvbicgdmFsdWU9J9Cf0L7Qu9GD0YfQuNGC0Ywg0YDQtdC30YPQu9GM0YLQsNGCJy8+XHJcbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgPENvZGVNb2RhbFxyXG4gICAgICAgIGlzTW9kYWxPcGVuPXttb2RhbH1cclxuICAgICAgICBjbG9zZU1vZGFsPXtjbG9zZU1vZGFsfVxyXG4gICAgICAgIGNvZGU9e2NvZGV9XHJcbiAgICAgICAgc2V0Q29kZT17c2V0Q29kZX1cclxuICAgICAgICBvbkZpcnN0U3RlcD17c2VuZENvZGVDaGVja31cclxuICAgICAgICBnZXRJZGVudGlmaWNhdGlvbj17cmVwZWF0Q29kZX1cclxuICAgICAgICBlcnJvcj17ZXJyb3JDb2RlfS8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0KGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBudWxsKShUaGlyZFN0ZXApKSIsImltcG9ydCBGaXJzdFN0ZXAgZnJvbSBcIi4uL2NvbXBvbmVudHMvZ2V0c2VydmljZS9GaXJzdFN0ZXBKdXJcIlxyXG5pbXBvcnQgU2Vjb25kU3RlcCBmcm9tIFwiLi4vY29tcG9uZW50cy9nZXRzZXJ2aWNlL1NlY29uZFN0ZXBKdXJcIlxyXG5pbXBvcnQgTmF2IGZyb20gXCIuLi9jb21wb25lbnRzL3NoYXJlZC9OYXZcIlxyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBUaGlyZFN0ZXAgZnJvbSBcIi4uL2NvbXBvbmVudHMvZ2V0c2VydmljZS9UaGlyZFN0ZXBKdXJcIlxyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IExvYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9sb2FkZXIvTG9hZGVyXCJcclxuaW1wb3J0IENvZGVNb2RhbCBmcm9tIFwiLi4vY29tcG9uZW50cy9zaGFyZWQvQ29kZU1vZGFsXCJcclxuY29uc3QgR2V0U2VydmljZSA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHtzdGVwfSA9IHJvdXRlci5xdWVyeVxyXG5cclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbY29va2llU3RlcCwgc2V0Q29va2llU3RlcF0gPSB1c2VTdGF0ZSgnJylcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0Q29va2llU3RlcChjb29raWUuZ2V0KCdzdGVwanVyJykpXHJcbiAgfSwgW2Nvb2tpZS5nZXQoJ3N0ZXBqdXInKV0pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIGlmKCFjb29raWUuZ2V0KCdzdGVwanVyJykpIHtcclxuICAgIC8vICAgcm91dGVyLnB1c2goJy9qdXJzZXJ2aWNlJylcclxuICAgIC8vIH1cclxuICAgIC8vIGlmKGNvb2tpZS5nZXQoJ3N0ZXBqdXInKSA9PT0gJzInKSB7XHJcbiAgICAvLyAgIHJvdXRlci5wdXNoKCcvanVyc2VydmljZT9zdGVwPTInKVxyXG4gICAgLy8gfVxyXG4gICAgLy8gaWYoY29va2llLmdldCgnc3RlcGp1cicpID09PSAnMycpIHtcclxuICAgIC8vICAgcm91dGVyLnB1c2goJy9qdXJzZXJ2aWNlP3N0ZXA9MycpXHJcbiAgICAvLyB9XHJcbiAgfSxbXSlcclxuXHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIGlmKGNvb2tpZS5nZXQoJ3N0ZXBqdXInKSAhPT0gdW5kZWZpbmVkICYmIChjb29raWUuZ2V0KCdsZWFkX2lkJyk9PT0gdW5kZWZpbmVkIHx8IGNvb2tpZS5nZXQoJ3Rva2VuJykgPT09IHVuZGVmaW5lZCkpe1xyXG4gIC8vICAgICBjb25zb2xlLmxvZygncmVtb3ZlZCcpXHJcbiAgLy8gICAgIGNvb2tpZS5yZW1vdmUoJ3N0ZXBqdXInKVxyXG4gIC8vICAgICBjb29raWUucmVtb3ZlKCdsZWFkX2lkJylcclxuICAvLyAgICAgY29va2llLnJlbW92ZSgndG9rZW4nKVxyXG4gIC8vICAgICByb3V0ZXIucHVzaCgnL2RseWEtZml6aWNoZXNraXgtbGljJylcclxuICAvLyAgIH1cclxuICAvLyB9LFtdKVxyXG4gIGNvbnN0IGhlYWRlckNsaWNrID0gKG51bSkgPT4ge1xyXG4gICAgaWYobnVtICE9PSBcIjFcIikge1xyXG5cclxuICAgICAgY29va2llLnNldChcInN0ZXBqdXJcIiwgbnVtKTtcclxuICAgICAgcm91dGVyLnB1c2goYC9qdXJzZXJ2aWNlP3N0ZXA9JHtudW19YClcclxuICAgIH1lbHNlIHtcclxuICAgICAgcm91dGVyLnB1c2goJy9qdXJzZXJ2aWNlJylcclxuICAgICAgY29va2llLnJlbW92ZSgnc3RlcGp1cicpXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZ2V0c2VydmljZSc+XHJcbiAgICAgIHtsb2FkaW5nICYmIDxMb2FkZXIgLz59XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5cclxuICAgICAgICAgINCf0L7Qu9GD0YfQuNGC0Ywg0YPRgdC70YPQs9GDIHwg0K7RgC4g0LvQuNGG0L5cclxuICAgICAgICA8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXInPlxyXG4gICAgICAgIDxOYXYvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZyc+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcbiAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtX2hlYWRpbmdzJz5cclxuICAgICAgICAgIDxiPtCj0YHQu9GD0LPQuCDRjtGALiDQu9C40YbQsNC8PC9iPlxyXG4gICAgICAgICAgPGgyPtCf0L7Qu9GD0YfQuNGC0YxcclxuICAgICAgICAgICAgPGJyPjwvYnI+0YPRgdC70YPQs9GDOjwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm1fc2VydmljZSAnPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtX2hlYWRlcic+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiBoZWFkZXJDbGljayhcIjFcIil9IGNsYXNzTmFtZT17Y29va2llU3RlcCA9PT0gdW5kZWZpbmVkIHx8IHN0ZXA9PT0nMScgPyAnYWN0aXZlJyA6ICcnfT4xINCo0LDQszwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKT0+IGhlYWRlckNsaWNrKFwiMlwiKX0gY2xhc3NOYW1lPXtjb29raWVTdGVwID09PSAnMicgJiYgc3RlcD09PScyJyAmJiAnYWN0aXZlJ30+MiDQqNCw0LM8L2xpPlxyXG4gICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gaGVhZGVyQ2xpY2soXCIzXCIpfSBjbGFzc05hbWU9e2Nvb2tpZVN0ZXAgPT09ICczJyAmJiBzdGVwPT09JzMnICYmICdhY3RpdmUnfT4zINCo0LDQszwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybV9yZWdpc3RlclwiPlxyXG4gICAgICAgIHtjb29raWUuZ2V0KCdzdGVwanVyJykgPT09IHVuZGVmaW5lZCAmJiA8Rmlyc3RTdGVwIHNldExvYWRpbmc9e3NldExvYWRpbmd9Lz59XHJcbiAgICAgICAge3N0ZXA9PT0nMicgJiYgPFNlY29uZFN0ZXAgc2V0TG9hZGluZz17c2V0TG9hZGluZ30vPn1cclxuICAgICAgICB7c3RlcD09PSczJyAmJiA8VGhpcmRTdGVwIHNldExvYWRpbmc9e3NldExvYWRpbmd9Lz59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIDxTZWNvbmRTdGVwIC8+ICovfVxyXG4gICAgICAgIHsvKiA8VGhpcmRTdGVwIC8+ICovfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgIFxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEdldFNlcnZpY2UiXSwic291cmNlUm9vdCI6IiJ9