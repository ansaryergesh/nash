self["webpackHotUpdate_N_E"]("pages/dlya-fizicheskix-lic",{

/***/ "./components/getservice/FourthStep.js":
/*!*********************************************!*\
  !*** ./components/getservice/FourthStep.js ***!
  \*********************************************/
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
/* harmony import */ var _dropFileDoc_dropFileDoc__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../dropFileDoc/dropFileDoc */ "./components/dropFileDoc/dropFileDoc.js");
/* harmony import */ var _dropFile_DropFile__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../dropFile/DropFile */ "./components/dropFile/DropFile.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "E:\\job\\nashcompany\\components\\getservice\\FourthStep.js",
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

var FourthStep = function FourthStep(_ref2) {
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

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      files = _useState8[0],
      setFiles = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),
      discount = _useState9[0],
      setDiscount = _useState9[1];

  var _useState10 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      predoplata = _useState10[0],
      setOplata = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)((0,_defaults_extraFunction__WEBPACK_IMPORTED_MODULE_7__.parseDate)(1)),
      paymentDate = _useState11[0],
      setPaymentDate = _useState11[1];

  var _useState12 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      errorCode = _useState12[0],
      setError = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
    "doc1": true,
    "doc2": true,
    "doc3": true,
    "doc4": true
  }),
      docs = _useState13[0],
      setDocs = _useState13[1];

  var _useState14 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('1'),
      srok = _useState14[0],
      setSrok = _useState14[1];

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

  var openCodeModal = function openCodeModal(e) {// e.preventDefault() console.log(loggedIn) if (cookie.get('token') ===
    // undefined && phone === null) {   cookie.remove('step')   router.push('/') }
    // if (pathname === '/aggrement' && phone) {   onModal(phone) } if (pathname !==
    // '/aggrement' && loggedIn) {   onModal(user.phone) }
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
  // `/dogovorobrabotka?token=${token}`   }   if(pathname === '/cabinet/continue')
  // {     return `/dogovorobrabotka?id=${id}`   }   else {   return
  // '/dogovorobrabotka'   } }


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      "class": "wrapper",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        "class": "table basic",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "class": "price-section",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            "class": "price-area",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              "class": "inner-area",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                "class": "text",
                children: "\u0442\u0433"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 302,
                columnNumber: 24
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                "class": "price",
                children: "00"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 304,
                columnNumber: 24
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 301,
              columnNumber: 20
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 300,
            columnNumber: 16
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 299,
          columnNumber: 12
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "class": "package-name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 308,
          columnNumber: 12
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "class": "features",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              "class": "list-name",
              children: "One Selected Template"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 313,
              columnNumber: 20
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              "class": "icon check",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                "class": "fas fa-check-circle"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 314,
                columnNumber: 45
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 314,
              columnNumber: 20
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 312,
            columnNumber: 16
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              "class": "list-name",
              children: "100% Responsive Design"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 317,
              columnNumber: 20
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              "class": "icon check",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                "class": "fas fa-check-circle"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 318,
                columnNumber: 45
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 318,
              columnNumber: 20
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 316,
            columnNumber: 16
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              "class": "list-name",
              children: "Credit Remove Permission"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 321,
              columnNumber: 20
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              "class": "icon cross",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                "class": "far fa-times-circle"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 322,
                columnNumber: 45
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 322,
              columnNumber: 20
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 320,
            columnNumber: 16
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              "class": "list-name",
              children: "Lifetime Template Updates"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 325,
              columnNumber: 20
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              "class": "icon cross",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                "class": "far fa-times-circle"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 326,
                columnNumber: 45
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 326,
              columnNumber: 20
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 324,
            columnNumber: 16
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            "class": "btn",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              children: "Purchase"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 328,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 328,
            columnNumber: 16
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 311,
          columnNumber: 12
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 298,
        columnNumber: 8
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        "class": "table Ultimate",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "class": "price-section",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            "class": "price-area",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              "class": "inner-area",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                "class": "text",
                children: "\u0442\u0433"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 336,
                columnNumber: 24
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                "class": "price",
                children: "20000"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 339,
                columnNumber: 24
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 335,
              columnNumber: 20
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 334,
            columnNumber: 16
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 333,
          columnNumber: 12
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "class": "package-name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 343,
          columnNumber: 12
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "class": "features",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              "class": "list-name",
              children: "All Existing Template"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 348,
              columnNumber: 20
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              "class": "icon check",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                "class": "fas fa-check-circle"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 349,
                columnNumber: 45
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 349,
              columnNumber: 20
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 347,
            columnNumber: 16
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              "class": "list-name",
              children: "100% Responsive Design"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 352,
              columnNumber: 20
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              "class": "icon check",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                "class": "fas fa-check-circle"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 353,
                columnNumber: 45
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 353,
              columnNumber: 20
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 351,
            columnNumber: 16
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              "class": "list-name",
              children: "Credit Remove Permission"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 356,
              columnNumber: 20
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              "class": "icon check",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                "class": "fas fa-check-circle"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 357,
                columnNumber: 45
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 357,
              columnNumber: 20
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 355,
            columnNumber: 16
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              "class": "list-name",
              children: "Lifetime Template Updates"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 360,
              columnNumber: 20
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              "class": "icon check",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                "class": "fas fa-check-circle"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 361,
                columnNumber: 45
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 361,
              columnNumber: 20
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 359,
            columnNumber: 16
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            "class": "btn",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              children: "Purchase"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 363,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 363,
            columnNumber: 16
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 346,
          columnNumber: 12
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 332,
        columnNumber: 8
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 296,
    columnNumber: 5
  }, _this);
};

_s(FourthStep, "kB8mKLyALQw6e33y5uD73rzz/ig=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter];
});

_c = FourthStep;
/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_8__.connect)(mapStateToProps, null)(FourthStep));

var _c;

$RefreshReg$(_c, "FourthStep");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRzZXJ2aWNlL0ZvdXJ0aFN0ZXAuanMiXSwibmFtZXMiOlsibWFwU3RhdGVUb1Byb3BzIiwidXNlclJlZHVjZXIiLCJ1c2VyIiwibG9nZ2VkSW4iLCJGb3VydGhTdGVwIiwic2V0TG9hZGluZyIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicXVlcnkiLCJwYXRobmFtZSIsInRva2VuIiwiYW1vdW50IiwidXNlU3RhdGUiLCJhbW91bnRWYWwiLCJzZXRBbW91bnQiLCJsZWFkSUQiLCJhZ2dyVG9rZW4iLCJzZXRBZ2dyVG9rZW4iLCJmaW5hbEFtb3VudCIsImFnZ3JJZCIsInNldEFnZ3JJZCIsInBob25lIiwic2V0UGhvbmUiLCJtb2RhbCIsInNldE1vZGFsIiwiY29kZSIsInNldENvZGUiLCJmaW5hbElEIiwidXNlRWZmZWN0Iiwic3VtbWEiLCJjb29raWUiLCJ1bmRlZmluZWQiLCJmaW5hbFN1bW1hIiwiTWF0aCIsImZsb29yIiwicGFyc2VJbnQiLCJkaXNjb3VudFN1bW1hIiwic2V0U3VtbWEiLCJzZXREaXNjb3VudCIsImNvbnNvbGUiLCJsb2ciLCJheGlvcyIsInByb2Nlc3MiLCJ0aGVuIiwicmVzIiwiZGF0YSIsInB1c2giLCJmaWxlcyIsInNldEZpbGVzIiwiZGlzY291bnQiLCJwcmVkb3BsYXRhIiwic2V0T3BsYXRhIiwicGFyc2VEYXRlIiwicGF5bWVudERhdGUiLCJzZXRQYXltZW50RGF0ZSIsImVycm9yQ29kZSIsInNldEVycm9yIiwiZG9jcyIsInNldERvY3MiLCJzcm9rIiwic2V0U3JvayIsImNoZWNrRG9jIiwiZSIsIm5hbWUiLCJ0YXJnZXQiLCJkYXRhc2V0IiwiY2hhbmdlT3BsYXRhIiwiZ2V0QXR0cmlidXRlIiwiY2hhbmdlU3JvayIsIm1vbnRoIiwidmFsdWUiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsTGVmdCIsImNoYW5nZVNyb2tCdG4iLCJtb250aFZhbCIsInNjcm9sbFJpZ2h0IiwiYWdncmVtZW50U2JtdCIsInBhcmFtcyIsInR5cGVQYXltZW50IiwicGVyaW9kIiwiZGF0ZV9wYXltZW50IiwiYW1vdW50UGF5bWVudCIsInN0YXR1cyIsInN3YWwiLCJlcnIiLCJzdGVwVGhpcmQiLCJvYmplY3QiLCJ1dG1fc291cmNlIiwiY2xpY2tfaWQiLCJzdWNjZXNzIiwiUm91dGVyIiwiZmluYWxTdWJtaXQiLCJjbG9zZU1vZGFsIiwib25Nb2RhbCIsInBhcmFtIiwib3BlbkNvZGVNb2RhbCIsInJlcGVhdENvZGUiLCJjaGVja0NvZGUiLCJjb2RlVmFsIiwibWVzc2FnZSIsInNlbmRDb2RlQ2hlY2siLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQjtBQUFBLDhCQUN0QkMsV0FEc0I7QUFBQSxNQUVwQkMsSUFGb0Isb0JBRXBCQSxJQUZvQjtBQUFBLE1BR3BCQyxRQUhvQixvQkFHcEJBLFFBSG9CO0FBQUEsU0FLakI7QUFBQ0QsUUFBSSxFQUFKQSxJQUFEO0FBQU9DLFlBQVEsRUFBUkE7QUFBUCxHQUxpQjtBQUFBLENBQXhCOztBQU9BLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLFFBQWtDO0FBQUE7O0FBQUEsTUFBaENDLFVBQWdDLFNBQWhDQSxVQUFnQztBQUFBLE1BQXBCSCxJQUFvQixTQUFwQkEsSUFBb0I7QUFBQSxNQUFkQyxRQUFjLFNBQWRBLFFBQWM7QUFDbkQsTUFBTUcsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQURtRCxNQUU1Q0MsRUFGNEMsR0FFdENGLE1BQU0sQ0FBQ0csS0FGK0IsQ0FFNUNELEVBRjRDO0FBR25ELE1BQU1FLFFBQVEsR0FBR0osTUFBTSxDQUFDSSxRQUF4QjtBQUhtRCxNQUk1Q0MsS0FKNEMs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dUJBQU0sWUFBWjtBQUFBLHFDQUF5QjtBQUFHLHlCQUFNO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFiSixlQWlCSTtBQUFLLHFCQUFNLEtBQVg7QUFBQSxtQ0FBaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFqQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQW5DQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEwRUQsQ0E5VkQ7O0dBQU1qRyxVO1VBQ1dHLGtEOzs7S0FEWEgsVTtBQWdXTiwrREFBZW9HLG9EQUFPLENBQUN4RyxlQUFELEVBQWtCLElBQWxCLENBQVAsQ0FBK0JJLFVBQS9CLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGx5YS1maXppY2hlc2tpeC1saWMuMWU4YjYyMjU3YmNjMDdjNTJlNmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJ1xyXG5pbXBvcnQgUm91dGVyLCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHN3YWwgZnJvbSAnc3dlZXRhbGVydCdcclxuaW1wb3J0IHthbW91bnRTcGFjZSwgaGFuZGxlRm9jdXMsIHBhcnNlRGF0ZX0gZnJvbSBcIi4uLy4uL2RlZmF1bHRzL2V4dHJhRnVuY3Rpb25cIlxyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiXHJcbmltcG9ydCBDb2RlTW9kYWwgZnJvbSAnLi4vc2hhcmVkL0NvZGVNb2RhbCdcclxuaW1wb3J0IERyb3BGaWxlRG9jIGZyb20gXCIuLi9kcm9wRmlsZURvYy9kcm9wRmlsZURvY1wiXHJcbmltcG9ydCBEcm9wRmlsZSBmcm9tIFwiLi4vZHJvcEZpbGUvRHJvcEZpbGVcIlxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHtcclxuICB1c2VyUmVkdWNlcjoge1xyXG4gICAgdXNlcixcclxuICAgIGxvZ2dlZEluXHJcbiAgfVxyXG59KSA9PiAoe3VzZXIsIGxvZ2dlZElufSk7XHJcblxyXG5jb25zdCBGb3VydGhTdGVwID0gKHtzZXRMb2FkaW5nLCB1c2VyLCBsb2dnZWRJbn0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHtpZH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3QgcGF0aG5hbWUgPSByb3V0ZXIucGF0aG5hbWVcclxuICBjb25zdCB7dG9rZW59ID0gcm91dGVyLnF1ZXJ5XHJcbiAgY29uc3Qge2Ftb3VudH0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCBbYW1vdW50VmFsLFxyXG4gICAgc2V0QW1vdW50XSA9IHVzZVN0YXRlKDApXHJcbiAgY29uc3Qge2xlYWRJRH0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCBbYWdnclRva2VuLFxyXG4gICAgc2V0QWdnclRva2VuXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IGZpbmFsQW1vdW50ID0gYW1vdW50XHJcbiAgICA/IGFtb3VudFxyXG4gICAgOiBhbW91bnRWYWxcclxuICBjb25zdCBbYWdncklkLFxyXG4gICAgc2V0QWdncklkXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtwaG9uZSxcclxuICAgIHNldFBob25lXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW21vZGFsLFxyXG4gICAgc2V0TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2NvZGUsXHJcbiAgICBzZXRDb2RlXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IGZpbmFsSUQgPSBpZCB8fCBsZWFkSURcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc3VtbWEgPSBjb29raWUuZ2V0KCdhbW91bnQnKSAhPT0gdW5kZWZpbmVkXHJcbiAgICAgID8gY29va2llLmdldCgnYW1vdW50JylcclxuICAgICAgOiBmaW5hbEFtb3VudFxyXG4gICAgY29uc3QgZmluYWxTdW1tYSA9IE1hdGguZmxvb3IocGFyc2VJbnQoc3VtbWEpICogMC4yKVxyXG4gICAgY29uc3QgZGlzY291bnRTdW1tYSA9IE1hdGguZmxvb3IocGFyc2VJbnQoZmluYWxTdW1tYSkgLyAyKVxyXG4gICAgaWYgKGZpbmFsU3VtbWEgPiAyMDAwMDApIHtcclxuICAgICAgc2V0U3VtbWEoZmluYWxTdW1tYSlcclxuICAgICAgc2V0RGlzY291bnQoZGlzY291bnRTdW1tYSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFN1bW1hKDIwMDAwMClcclxuICAgICAgc2V0RGlzY291bnQoMTAwMDAwKVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coZmluYWxTdW1tYSlcclxuICB9LCBbY29va2llLmdldCgnYW1vdW50JyldKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHRva2VuKSB7XHJcbiAgICAgIHNldEFnZ3JUb2tlbih0b2tlbilcclxuICAgIH1cclxuXHJcbiAgfSwgW3Rva2VuXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHBhdGhuYW1lID09PSAnL2FnZ3JlbWVudCcgJiYgYWdnclRva2VuKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCd5ZXMnKVxyXG4gICAgICBheGlvc1xyXG4gICAgICAgIC5nZXQoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L2dldERhdGFTaWduP3Rva2VuPSR7YWdnclRva2VufWApXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGFnZ3JUb2tlbilcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgIGlmICghcmVzLmRhdGEuaWQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3RoaXMnKVxyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRQaG9uZShyZXMuZGF0YS5waG9uZSlcclxuICAgICAgICAgICAgc2V0QWdncklkKHJlcy5kYXRhLmlkKVxyXG4gICAgICAgICAgICBzZXRBbW91bnQocGFyc2VJbnQocmVzLmRhdGEuYW1vdW50KSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gIH0sIFthZ2dyVG9rZW5dKVxyXG5cclxuICBjb25zdCBbc3VtbWEsXHJcbiAgICBzZXRTdW1tYV0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFtmaWxlcyxcclxuICAgIHNldEZpbGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZGlzY291bnQsXHJcbiAgICBzZXREaXNjb3VudF0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFtwcmVkb3BsYXRhLFxyXG4gICAgc2V0T3BsYXRhXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtwYXltZW50RGF0ZSxcclxuICAgIHNldFBheW1lbnREYXRlXSA9IHVzZVN0YXRlKHBhcnNlRGF0ZSgxKSlcclxuICBjb25zdCBbZXJyb3JDb2RlLFxyXG4gICAgc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW2RvY3MsXHJcbiAgICBzZXREb2NzXSA9IHVzZVN0YXRlKHtcImRvYzFcIjogdHJ1ZSwgXCJkb2MyXCI6IHRydWUsIFwiZG9jM1wiOiB0cnVlLCBcImRvYzRcIjogdHJ1ZX0pXHJcbiAgY29uc3QgW3Nyb2ssXHJcbiAgICBzZXRTcm9rXSA9IHVzZVN0YXRlKCcxJylcclxuICBjb25zdCBjaGVja0RvYyA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBuYW1lID0gZS50YXJnZXQuZGF0YXNldC5uYW1lXHJcbiAgICAvLyBjb25zb2xlLmxvZyhkb2NzW25hbWVdKVxyXG4gICAgc2V0RG9jcyh7XHJcbiAgICAgIC4uLmRvY3MsXHJcbiAgICAgIFtuYW1lXTogIWRvY3NbbmFtZV1cclxuICAgIH0pXHJcbiAgICBjb25zb2xlLmxvZyhkb2NzKVxyXG5cclxuICB9XHJcbiAgY29uc3QgY2hhbmdlT3BsYXRhID0gKGUpID0+IHtcclxuICAgIGNvbnN0IG5hbWUgPSBlXHJcbiAgICAgIC50YXJnZXRcclxuICAgICAgLmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJylcclxuICAgIHNldE9wbGF0YSghcHJlZG9wbGF0YSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGNoYW5nZVNyb2sgPSBlID0+IHtcclxuICAgIGNvbnN0IG1vbnRoID0gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUpXHJcbiAgICBzZXRTcm9rKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgc2V0UGF5bWVudERhdGUocGFyc2VEYXRlKG1vbnRoKSlcclxuICAgIGlmIChlLnRhcmdldC52YWx1ZSA+IDIpIHtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYW5nZV9fbGlzdCcpXHJcbiAgICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCA9IC0zMDA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhbmdlX19saXN0JylcclxuICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0ID0gMzAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2hhbmdlU3Jva0J0biA9IChtb250aCkgPT4ge1xyXG4gICAgY29uc3QgbW9udGhWYWwgPSBwYXJzZUludChtb250aClcclxuICAgIHNldFNyb2sobW9udGgpXHJcbiAgICBzZXRQYXltZW50RGF0ZShwYXJzZURhdGUobW9udGhWYWwpKVxyXG4gICAgaWYgKG1vbnRoVmFsID4gMykge1xyXG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhbmdlX19saXN0JylcclxuICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0ID0gMjAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYW5nZV9fbGlzdCcpXHJcbiAgICAgIGVsZW1lbnQuc2Nyb2xsUmlnaHQgPSAyMDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBhZ2dyZW1lbnRTYm10ID0gKCkgPT4ge1xyXG4gICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9yZW1vdmVTaG9ydFVybGAsIHtcclxuICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgaWQ6IGFnZ3JJZCxcclxuICAgICAgICB0eXBlUGF5bWVudDogcHJlZG9wbGF0YVxyXG4gICAgICAgICAgPyAn0J/RgNC10LTQvtC/0LvQsNGC0LAnXHJcbiAgICAgICAgICA6ICfQn9C+0YHRgtC+0L/Qu9Cw0YLQsCcsXHJcbiAgICAgICAgcGVyaW9kOiBzcm9rLFxyXG4gICAgICAgIGRhdGVfcGF5bWVudDogcGF5bWVudERhdGUsXHJcbiAgICAgICAgYW1vdW50UGF5bWVudDogZGlzY291bnRcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICBzd2FsKFwi0KPRgdC/0LXRiNC90L4hXCIsIGDQktCw0YjQsCDQt9Cw0Y/QstC60LAg0L7RgtC/0YDQsNCy0LvQtdC90LAg0LIgTmFzaCBDb21wYW55LiDQktCw0Lwg0YHQtdC50YfQsNGBINC/0LXRgNC10LfQstC+0L3Rj9GCINGBINC90L7QvNC10YDQsCArNyg3MDApMzUwLTUwLTAwYCwgXCJzdWNjZXNzXCIpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgc3RlcFRoaXJkID0gKCkgPT4ge1xyXG4gICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBjb25zdCBvYmplY3QgPSB7XHJcbiAgICAgIGlkOiBjb29raWUuZ2V0KCdsZWFkX2lkJykgPT09IHVuZGVmaW5lZFxyXG4gICAgICAgID8gZmluYWxJRFxyXG4gICAgICAgIDogY29va2llLmdldCgnbGVhZF9pZCcpLFxyXG4gICAgICB0b2tlbjogY29va2llLmdldCgndG9rZW4nKSxcclxuICAgICAgYW1vdW50UGF5bWVudDogZGlzY291bnQsXHJcbiAgICAgIGRhdGVfcGF5bWVudDogcGF5bWVudERhdGUsXHJcbiAgICAgIHBlcmlvZDogc3JvayxcclxuICAgICAgdHlwZVBheW1lbnQ6IHByZWRvcGxhdGFcclxuICAgICAgICA/ICfQn9GA0LXQtNC+0L/Qu9Cw0YLQsCdcclxuICAgICAgICA6ICfQn9C+0YHRgtC+0L/Qu9Cw0YLQsCdcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY29va2llLmdldCgndXRtX3NvdXJjZScpICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgb2JqZWN0LnV0bV9zb3VyY2UgPSBjb29raWUuZ2V0KCd1dG1fc291cmNlJylcclxuICAgICAgb2JqZWN0LmNsaWNrX2lkID0gY29va2llLmdldCgnY2xpY2tfaWQnKVxyXG4gICAgICAvLyBvYmplY3Qud2ViSUQgPSBjb29raWUuZ2V0KCd3ZWJfaWQnKVxyXG4gICAgfVxyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vc3RlcFRocmVlYCwge3BhcmFtczogb2JqZWN0fSlcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICBpZiAocmVzLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgc3dhbChcItCj0YHQv9C10YjQvdC+IVwiLCBg0JLQsNGI0LAg0LfQsNGP0LLQutCwINC+0YLQv9GA0LDQstC70LXQvdCwINCyIE5hc2ggQ29tcGFueS4g0JLQsNC8INGB0LXQudGH0LDRgSDQv9C10YDQtdC30LLQvtC90Y/RgiDRgSDQvdC+0LzQtdGA0LAgKzcoNzAwKTM1MC01MC0wMGAsIFwic3VjY2Vzc1wiKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goJy9jYWJpbmV0L3JlcXVlc3RzJylcclxuICAgICAgICAgICAgY29va2llLnJlbW92ZSgnbGVhZF9pZCcpXHJcbiAgICAgICAgICAgIGNvb2tpZS5yZW1vdmUoJ3N0ZXAnKVxyXG4gICAgICAgICAgICBjb29raWUucmVtb3ZlKCd1dG1fbWVkaXVtJylcclxuICAgICAgICAgICAgY29va2llLnJlbW92ZSgndXRtX3NvdXJjZScpXHJcbiAgICAgICAgICAgIGNvb2tpZS5yZW1vdmUoJ3V0bV9jYW1wYWlnbicpXHJcbiAgICAgICAgICAgIGNvb2tpZS5yZW1vdmUoJ2NsaWNrX2lkJylcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGZpbmFsU3VibWl0ID0gKCkgPT4ge1xyXG4gICAgaWYgKHBhdGhuYW1lID09PSAnL2FnZ3JlbWVudCcpIHtcclxuICAgICAgYWdncmVtZW50U2JtdCgpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzdGVwVGhpcmQoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcclxuICAgIHNldENvZGUoJycpXHJcbiAgICBzZXRFcnJvcignJylcclxuICAgIHNldE1vZGFsKGZhbHNlKVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25Nb2RhbCA9IChwYXJhbSkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgc2V0TW9kYWwoZmFsc2UpXHJcbiAgICBzZXRFcnJvcignJylcclxuICAgIGF4aW9zXHJcbiAgICAgIC5nZXQoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L2ZvdXJ0aFN0YWdlP3Bob25lPSR7cGFyYW19YClcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgIGlmIChyZXMuZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICBzZXRNb2RhbCh0cnVlKVxyXG4gICAgICAgIH0gZWxzZSB7fVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgIHNldE1vZGFsKGZhbHNlKVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb3BlbkNvZGVNb2RhbCA9IChlKSA9PiB7XHJcblxyXG4gICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpIGNvbnNvbGUubG9nKGxvZ2dlZEluKSBpZiAoY29va2llLmdldCgndG9rZW4nKSA9PT1cclxuICAgIC8vIHVuZGVmaW5lZCAmJiBwaG9uZSA9PT0gbnVsbCkgeyAgIGNvb2tpZS5yZW1vdmUoJ3N0ZXAnKSAgIHJvdXRlci5wdXNoKCcvJykgfVxyXG4gICAgLy8gaWYgKHBhdGhuYW1lID09PSAnL2FnZ3JlbWVudCcgJiYgcGhvbmUpIHsgICBvbk1vZGFsKHBob25lKSB9IGlmIChwYXRobmFtZSAhPT1cclxuICAgIC8vICcvYWdncmVtZW50JyAmJiBsb2dnZWRJbikgeyAgIG9uTW9kYWwodXNlci5waG9uZSkgfVxyXG4gIH1cclxuICBjb25zdCByZXBlYXRDb2RlID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2cobG9nZ2VkSW4pXHJcbiAgICBpZiAoY29va2llLmdldCgndG9rZW4nKSA9PT0gdW5kZWZpbmVkICYmIHBob25lID09PSBudWxsKSB7XHJcbiAgICAgIGNvb2tpZS5yZW1vdmUoJ3N0ZXAnKVxyXG4gICAgICByb3V0ZXIucHVzaCgnLycpXHJcbiAgICB9XHJcbiAgICBpZiAocGF0aG5hbWUgPT09ICcvYWdncmVtZW50JyAmJiBwaG9uZSkge1xyXG4gICAgICBvbk1vZGFsKHBob25lKVxyXG4gICAgfVxyXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL2FnZ3JlbWVudCcgJiYgbG9nZ2VkSW4pIHtcclxuICAgICAgb25Nb2RhbCh1c2VyLnBob25lKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2hlY2tDb2RlID0gKHBhcmFtLCBjb2RlVmFsKSA9PiB7XHJcbiAgICBzZXRFcnJvcignJylcclxuICAgIGF4aW9zXHJcbiAgICAgIC5nZXQoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L2NoZWNrQ29kZT9waG9uZT0ke3BhcmFtfSZjb2RlPSR7Y29kZVZhbH1gKVxyXG4gICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICBpZiAocmVzLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgc2V0TW9kYWwoZmFsc2UpXHJcbiAgICAgICAgICBmaW5hbFN1Ym1pdCgpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNldEVycm9yKHJlcy5kYXRhLm1lc3NhZ2UpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICBzZXRFcnJvcign0KfRgtC+INGC0L4g0L/QvtC70YjQviDQvdC1INGC0LDQuicpXHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBzZW5kQ29kZUNoZWNrID0gKGNvZGVWYWwpID0+IHtcclxuICAgIGlmIChwYXRobmFtZSA9PT0gJy9hZ2dyZW1lbnQnICYmIHBob25lKSB7XHJcbiAgICAgIGNoZWNrQ29kZShwaG9uZSwgY29kZVZhbClcclxuICAgIH1cclxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9hZ2dyZW1lbnQnICYmIGxvZ2dlZEluKSB7XHJcbiAgICAgIGNoZWNrQ29kZSh1c2VyLnBob25lLCBjb2RlVmFsKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gY29uc3QgZG9nb3Zvcm9icmFib3RrYSA9ICgpID0+IHsgICBpZihwYXRobmFtZSA9PT0gJy9hZ2dyZW1lbnQnKSB7ICAgICByZXR1cm5cclxuICAvLyBgL2RvZ292b3JvYnJhYm90a2E/dG9rZW49JHt0b2tlbn1gICAgfSAgIGlmKHBhdGhuYW1lID09PSAnL2NhYmluZXQvY29udGludWUnKVxyXG4gIC8vIHsgICAgIHJldHVybiBgL2RvZ292b3JvYnJhYm90a2E/aWQ9JHtpZH1gICAgfSAgIGVsc2UgeyAgIHJldHVyblxyXG4gIC8vICcvZG9nb3Zvcm9icmFib3RrYScgICB9IH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwid3JhcHBlclwiPlxyXG4gICAgICAgPGRpdiBjbGFzcz1cInRhYmxlIGJhc2ljXCI+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzcz1cInByaWNlLXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByaWNlLWFyZWFcIj5cclxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lci1hcmVhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0XCI+0YLQs1xyXG4gICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByaWNlXCI+MDA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhY2thZ2UtbmFtZVwiPlxyXG4gICAgXHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzcz1cImZlYXR1cmVzXCI+XHJcbiAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGlzdC1uYW1lXCI+T25lIFNlbGVjdGVkIFRlbXBsYXRlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGNoZWNrXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hlY2stY2lyY2xlXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaXN0LW5hbWVcIj4xMDAlIFJlc3BvbnNpdmUgRGVzaWduPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGNoZWNrXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hlY2stY2lyY2xlXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaXN0LW5hbWVcIj5DcmVkaXQgUmVtb3ZlIFBlcm1pc3Npb248L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gY3Jvc3NcIj48aSBjbGFzcz1cImZhciBmYS10aW1lcy1jaXJjbGVcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpc3QtbmFtZVwiPkxpZmV0aW1lIFRlbXBsYXRlIFVwZGF0ZXM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gY3Jvc3NcIj48aSBjbGFzcz1cImZhciBmYS10aW1lcy1jaXJjbGVcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuXCI+PGJ1dHRvbj5QdXJjaGFzZTwvYnV0dG9uPjwvZGl2PlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZSBVbHRpbWF0ZVwiPlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmljZS1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmljZS1hcmVhXCI+XHJcbiAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXItYXJlYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgINGC0LNcclxuICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcmljZVwiPjIwMDAwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWNrYWdlLW5hbWVcIj5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzcz1cImZlYXR1cmVzXCI+XHJcbiAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGlzdC1uYW1lXCI+QWxsIEV4aXN0aW5nIFRlbXBsYXRlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGNoZWNrXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hlY2stY2lyY2xlXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaXN0LW5hbWVcIj4xMDAlIFJlc3BvbnNpdmUgRGVzaWduPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGNoZWNrXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hlY2stY2lyY2xlXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaXN0LW5hbWVcIj5DcmVkaXQgUmVtb3ZlIFBlcm1pc3Npb248L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gY2hlY2tcIj48aSBjbGFzcz1cImZhcyBmYS1jaGVjay1jaXJjbGVcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpc3QtbmFtZVwiPkxpZmV0aW1lIFRlbXBsYXRlIFVwZGF0ZXM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gY2hlY2tcIj48aSBjbGFzcz1cImZhcyBmYS1jaGVjay1jaXJjbGVcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuXCI+PGJ1dHRvbj5QdXJjaGFzZTwvYnV0dG9uPjwvZGl2PlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgPC9kaXY+XHJcbiAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdChjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbnVsbCkoRm91cnRoU3RlcCkpIl0sInNvdXJjZVJvb3QiOiIifQ==