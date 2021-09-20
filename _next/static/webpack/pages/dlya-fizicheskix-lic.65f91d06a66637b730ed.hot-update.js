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
          "class": "price-section"
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
              children: " \u041E\u0442\u0433\u0440\u0430\u0434\u0438\u043C \u043E\u0442 \u043D\u0435\u0437\u0430\u043A\u043E\u043D\u043D\u044B\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 \u041C\u0424\u041E"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 313,
              columnNumber: 20
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              "class": "icon check",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                "class": "fas fa-check"
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
              children: " \u041E\u0442\u0433\u0440\u0430\u0434\u0438\u043C \u043E\u0442 \u043D\u0435\u0437\u0430\u043A\u043E\u043D\u043D\u044B\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 \u041A\u043E\u043B\u043B\u0435\u043A\u0442\u043E\u0440\u043E\u0432"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 317,
              columnNumber: 20
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              "class": "icon check",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                "class": "fas fa-check"
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
              children: "\u041E\u0442\u0433\u0440\u0430\u0434\u0438\u043C \u043E\u0442 \u043D\u0435\u0437\u0430\u043A\u043E\u043D\u043D\u044B\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 \u0427\u0421\u0418"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 321,
              columnNumber: 20
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              "class": "icon cross",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                "class": "fas fa-check"
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
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            "class": "btn",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              children: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C"
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
          "class": "price-section"
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
          children: ["\u041F\u0438\u0441\u044C\u043C\u043E \u0432 \u042E\u0441\u0442\u0438\u0446\u0438\u044E \u041F\u0438\u0441\u044C\u043C\u043E \u0432 \u043F\u0430\u043B\u0430\u0442\u0443 \u0427\u0421\u0418 \u0421\u0443\u0434 \u0441 \u041C\u0424\u041E", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              "class": "list-name",
              children: "\u041E\u0442\u043C\u0435\u043D\u0438\u043C \u0438\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043B\u0438\u0441\u0442/\u043D\u0430\u0434\u043F\u0438\u0441\u044C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 354,
              columnNumber: 20
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              "class": "icon check",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                "class": "fas fa-check-circle"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 355,
                columnNumber: 45
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 355,
              columnNumber: 20
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 353,
            columnNumber: 16
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              "class": "list-name",
              children: "\u0423\u043B\u0443\u0447\u0448\u0430\u0435\u043C \u043A\u0440\u0435\u0434\u0438\u0442\u043D\u0443\u044E \u0438\u0441\u0442\u043E\u0440\u0438\u044E"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 358,
              columnNumber: 20
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              "class": "icon check",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                "class": "fas fa-check-circle"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 359,
                columnNumber: 45
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 359,
              columnNumber: 20
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 357,
            columnNumber: 16
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              "class": "list-name",
              children: "\u041F\u0438\u0441\u044C\u043C\u043E \u043E \u043D\u0430\u0440\u0443\u0448\u0435\u043D\u0438\u0438 \u0417\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430 \u0420\u041A \u0432 \u0410\u0424\u0424\u0420"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 362,
              columnNumber: 20
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              "class": "icon check",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                "class": "fas fa-check-circle"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 363,
                columnNumber: 45
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 363,
              columnNumber: 20
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 361,
            columnNumber: 16
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              "class": "list-name",
              children: "\u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u043C \u0418\u0421\u041A"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 366,
              columnNumber: 20
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              "class": "icon check",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                "class": "fas fa-check-circle"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 367,
                columnNumber: 45
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 367,
              columnNumber: 20
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 365,
            columnNumber: 16
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            "class": "btn",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              children: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 369,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 369,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRzZXJ2aWNlL0ZvdXJ0aFN0ZXAuanMiXSwibmFtZXMiOlsibWFwU3RhdGVUb1Byb3BzIiwidXNlclJlZHVjZXIiLCJ1c2VyIiwibG9nZ2VkSW4iLCJGb3VydGhTdGVwIiwic2V0TG9hZGluZyIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicXVlcnkiLCJwYXRobmFtZSIsInRva2VuIiwiYW1vdW50IiwidXNlU3RhdGUiLCJhbW91bnRWYWwiLCJzZXRBbW91bnQiLCJsZWFkSUQiLCJhZ2dyVG9rZW4iLCJzZXRBZ2dyVG9rZW4iLCJmaW5hbEFtb3VudCIsImFnZ3JJZCIsInNldEFnZ3JJZCIsInBob25lIiwic2V0UGhvbmUiLCJtb2RhbCIsInNldE1vZGFsIiwiY29kZSIsInNldENvZGUiLCJmaW5hbElEIiwidXNlRWZmZWN0Iiwic3VtbWEiLCJjb29raWUiLCJ1bmRlZmluZWQiLCJmaW5hbFN1bW1hIiwiTWF0aCIsImZsb29yIiwicGFyc2VJbnQiLCJkaXNjb3VudFN1bW1hIiwic2V0U3VtbWEiLCJzZXREaXNjb3VudCIsImNvbnNvbGUiLCJsb2ciLCJheGlvcyIsInByb2Nlc3MiLCJ0aGVuIiwicmVzIiwiZGF0YSIsInB1c2giLCJmaWxlcyIsInNldEZpbGVzIiwiZGlzY291bnQiLCJwcmVkb3BsYXRhIiwic2V0T3BsYXRhIiwicGFyc2VEYXRlIiwicGF5bWVudERhdGUiLCJzZXRQYXltZW50RGF0ZSIsImVycm9yQ29kZSIsInNldEVycm9yIiwiZG9jcyIsInNldERvY3MiLCJzcm9rIiwic2V0U3JvayIsImNoZWNrRG9jIiwiZSIsIm5hbWUiLCJ0YXJnZXQiLCJkYXRhc2V0IiwiY2hhbmdlT3BsYXRhIiwiZ2V0QXR0cmlidXRlIiwiY2hhbmdlU3JvayIsIm1vbnRoIiwidmFsdWUiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsTGVmdCIsImNoYW5nZVNyb2tCdG4iLCJtb250aFZhbCIsInNjcm9sbFJpZ2h0IiwiYWdncmVtZW50U2JtdCIsInBhcmFtcyIsInR5cGVQYXltZW50IiwicGVyaW9kIiwiZGF0ZV9wYXltZW50IiwiYW1vdW50UGF5bWVudCIsInN0YXR1cyIsInN3YWwiLCJlcnIiLCJzdGVwVGhpcmQiLCJvYmplY3QiLCJ1dG1fc291cmNlIiwiY2xpY2tfaWQiLCJzdWNjZXNzIiwiUm91dGVyIiwiZmluYWxTdWJtaXQiLCJjbG9zZU1vZGFsIiwib25Nb2RhbCIsInBhcmFtIiwib3BlbkNvZGVNb2RhbCIsInJlcGVhdENvZGUiLCJjaGVja0NvZGUiLCJjb2RlVmFsIiwibWVzc2FnZSIsInNlbmRDb2RlQ2hlY2siLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQjtBQUFBLDhCQUN0QkMsV0FEc0I7QUFBQSxNQUVwQkMsSUFGb0Isb0JBRXBCQSxJQUZvQjtBQUFBLE1BR3BCQyxRQUhvQixvQkFHcEJBLFFBSG9CO0FBQUEsU0FLakI7QUFBQ0QsUUFBSSxFQUFKQSxJQUFEO0FBQU9DLFlBQVEsRUFBUkE7QUFBUCxHQUxpQjtBQUFBLENBQXhCOztBQU9BLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLFFBQWtDO0FBQUE7O0FBQUEsTUFBaENDLFVBQWdDLFNBQWhDQSxVQUFnQztBQUFBLE1BQXBCSCxJQUFvQixTQUFwQkEsSUFBb0I7QUFBQSxNQUFkQyxRQUFjLFNBQWRBLFFBQWM7QUFDbkQsTUFBTUcsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQURtRCxNQUU1Q0MsRUFGNEMsR0FFdENGLE1BQU0sQ0FBQ0csS0FGK0IsQ0FFNUNELEVBRjRDO0FBR25ELE1BQU1FLFFBQVEsR0FBR0osTUFBTSxDQUFDSSxRQUF4QjtBQUhtRCxNQUk1Q0MsS0FKNEMs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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUVJO0FBQU0sdUJBQU0sWUFBWjtBQUFBLHFDQUF5QjtBQUFHLHlCQUFNO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFmSixlQW1CSTtBQUFBLG9DQUNJO0FBQU0sdUJBQU0sV0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUVJO0FBQU0sdUJBQU0sWUFBWjtBQUFBLHFDQUF5QjtBQUFHLHlCQUFNO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFuQkosZUF1Qkk7QUFBSyxxQkFBTSxLQUFYO0FBQUEsbUNBQWlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBdkJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFkSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFuQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZ0ZELENBcFdEOztHQUFNakcsVTtVQUNXRyxrRDs7O0tBRFhILFU7QUFzV04sK0RBQWVvRyxvREFBTyxDQUFDeEcsZUFBRCxFQUFrQixJQUFsQixDQUFQLENBQStCSSxVQUEvQixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RseWEtZml6aWNoZXNraXgtbGljLjY1ZjkxZDA2YTY2NjM3YjczMGVkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSdcclxuaW1wb3J0IFJvdXRlciwge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBzd2FsIGZyb20gJ3N3ZWV0YWxlcnQnXHJcbmltcG9ydCB7YW1vdW50U3BhY2UsIGhhbmRsZUZvY3VzLCBwYXJzZURhdGV9IGZyb20gXCIuLi8uLi9kZWZhdWx0cy9leHRyYUZ1bmN0aW9uXCJcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG5pbXBvcnQgQ29kZU1vZGFsIGZyb20gJy4uL3NoYXJlZC9Db2RlTW9kYWwnXHJcbmltcG9ydCBEcm9wRmlsZURvYyBmcm9tIFwiLi4vZHJvcEZpbGVEb2MvZHJvcEZpbGVEb2NcIlxyXG5pbXBvcnQgRHJvcEZpbGUgZnJvbSBcIi4uL2Ryb3BGaWxlL0Ryb3BGaWxlXCJcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7XHJcbiAgdXNlclJlZHVjZXI6IHtcclxuICAgIHVzZXIsXHJcbiAgICBsb2dnZWRJblxyXG4gIH1cclxufSkgPT4gKHt1c2VyLCBsb2dnZWRJbn0pO1xyXG5cclxuY29uc3QgRm91cnRoU3RlcCA9ICh7c2V0TG9hZGluZywgdXNlciwgbG9nZ2VkSW59KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCB7aWR9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IHBhdGhuYW1lID0gcm91dGVyLnBhdGhuYW1lXHJcbiAgY29uc3Qge3Rva2VufSA9IHJvdXRlci5xdWVyeVxyXG4gIGNvbnN0IHthbW91bnR9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgY29uc3QgW2Ftb3VudFZhbCxcclxuICAgIHNldEFtb3VudF0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IHtsZWFkSUR9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgY29uc3QgW2FnZ3JUb2tlbixcclxuICAgIHNldEFnZ3JUb2tlbl0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBmaW5hbEFtb3VudCA9IGFtb3VudFxyXG4gICAgPyBhbW91bnRcclxuICAgIDogYW1vdW50VmFsXHJcbiAgY29uc3QgW2FnZ3JJZCxcclxuICAgIHNldEFnZ3JJZF0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbcGhvbmUsXHJcbiAgICBzZXRQaG9uZV0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFttb2RhbCxcclxuICAgIHNldE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtjb2RlLFxyXG4gICAgc2V0Q29kZV0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBmaW5hbElEID0gaWQgfHwgbGVhZElEXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHN1bW1hID0gY29va2llLmdldCgnYW1vdW50JykgIT09IHVuZGVmaW5lZFxyXG4gICAgICA/IGNvb2tpZS5nZXQoJ2Ftb3VudCcpXHJcbiAgICAgIDogZmluYWxBbW91bnRcclxuICAgIGNvbnN0IGZpbmFsU3VtbWEgPSBNYXRoLmZsb29yKHBhcnNlSW50KHN1bW1hKSAqIDAuMilcclxuICAgIGNvbnN0IGRpc2NvdW50U3VtbWEgPSBNYXRoLmZsb29yKHBhcnNlSW50KGZpbmFsU3VtbWEpIC8gMilcclxuICAgIGlmIChmaW5hbFN1bW1hID4gMjAwMDAwKSB7XHJcbiAgICAgIHNldFN1bW1hKGZpbmFsU3VtbWEpXHJcbiAgICAgIHNldERpc2NvdW50KGRpc2NvdW50U3VtbWEpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRTdW1tYSgyMDAwMDApXHJcbiAgICAgIHNldERpc2NvdW50KDEwMDAwMClcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKGZpbmFsU3VtbWEpXHJcbiAgfSwgW2Nvb2tpZS5nZXQoJ2Ftb3VudCcpXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICBzZXRBZ2dyVG9rZW4odG9rZW4pXHJcbiAgICB9XHJcblxyXG4gIH0sIFt0b2tlbl0pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChwYXRobmFtZSA9PT0gJy9hZ2dyZW1lbnQnICYmIGFnZ3JUb2tlbikge1xyXG4gICAgICBjb25zb2xlLmxvZygneWVzJylcclxuICAgICAgYXhpb3NcclxuICAgICAgICAuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9nZXREYXRhU2lnbj90b2tlbj0ke2FnZ3JUb2tlbn1gKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhhZ2dyVG9rZW4pXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICBpZiAoIXJlcy5kYXRhLmlkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGlzJylcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0UGhvbmUocmVzLmRhdGEucGhvbmUpXHJcbiAgICAgICAgICAgIHNldEFnZ3JJZChyZXMuZGF0YS5pZClcclxuICAgICAgICAgICAgc2V0QW1vdW50KHBhcnNlSW50KHJlcy5kYXRhLmFtb3VudCkpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICB9LCBbYWdnclRva2VuXSlcclxuXHJcbiAgY29uc3QgW3N1bW1hLFxyXG4gICAgc2V0U3VtbWFdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbZmlsZXMsXHJcbiAgICBzZXRGaWxlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2Rpc2NvdW50LFxyXG4gICAgc2V0RGlzY291bnRdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbcHJlZG9wbGF0YSxcclxuICAgIHNldE9wbGF0YV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbcGF5bWVudERhdGUsXHJcbiAgICBzZXRQYXltZW50RGF0ZV0gPSB1c2VTdGF0ZShwYXJzZURhdGUoMSkpXHJcbiAgY29uc3QgW2Vycm9yQ29kZSxcclxuICAgIHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtkb2NzLFxyXG4gICAgc2V0RG9jc10gPSB1c2VTdGF0ZSh7XCJkb2MxXCI6IHRydWUsIFwiZG9jMlwiOiB0cnVlLCBcImRvYzNcIjogdHJ1ZSwgXCJkb2M0XCI6IHRydWV9KVxyXG4gIGNvbnN0IFtzcm9rLFxyXG4gICAgc2V0U3Jva10gPSB1c2VTdGF0ZSgnMScpXHJcbiAgY29uc3QgY2hlY2tEb2MgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgbmFtZSA9IGUudGFyZ2V0LmRhdGFzZXQubmFtZVxyXG4gICAgLy8gY29uc29sZS5sb2coZG9jc1tuYW1lXSlcclxuICAgIHNldERvY3Moe1xyXG4gICAgICAuLi5kb2NzLFxyXG4gICAgICBbbmFtZV06ICFkb2NzW25hbWVdXHJcbiAgICB9KVxyXG4gICAgY29uc29sZS5sb2coZG9jcylcclxuXHJcbiAgfVxyXG4gIGNvbnN0IGNoYW5nZU9wbGF0YSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBuYW1lID0gZVxyXG4gICAgICAudGFyZ2V0XHJcbiAgICAgIC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpXHJcbiAgICBzZXRPcGxhdGEoIXByZWRvcGxhdGEpXHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGFuZ2VTcm9rID0gZSA9PiB7XHJcbiAgICBjb25zdCBtb250aCA9IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgc2V0U3JvayhlLnRhcmdldC52YWx1ZSlcclxuICAgIHNldFBheW1lbnREYXRlKHBhcnNlRGF0ZShtb250aCkpXHJcbiAgICBpZiAoZS50YXJnZXQudmFsdWUgPiAyKSB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFuZ2VfX2xpc3QnKVxyXG4gICAgICBlbGVtZW50LnNjcm9sbExlZnQgPSAtMzAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYW5nZV9fbGlzdCcpXHJcbiAgICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCA9IDMwMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGNoYW5nZVNyb2tCdG4gPSAobW9udGgpID0+IHtcclxuICAgIGNvbnN0IG1vbnRoVmFsID0gcGFyc2VJbnQobW9udGgpXHJcbiAgICBzZXRTcm9rKG1vbnRoKVxyXG4gICAgc2V0UGF5bWVudERhdGUocGFyc2VEYXRlKG1vbnRoVmFsKSlcclxuICAgIGlmIChtb250aFZhbCA+IDMpIHtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYW5nZV9fbGlzdCcpXHJcbiAgICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCA9IDIwMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFuZ2VfX2xpc3QnKVxyXG4gICAgICBlbGVtZW50LnNjcm9sbFJpZ2h0ID0gMjAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgYWdncmVtZW50U2JtdCA9ICgpID0+IHtcclxuICAgIC8vIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vcmVtb3ZlU2hvcnRVcmxgLCB7XHJcbiAgICAgIHBhcmFtczoge1xyXG4gICAgICAgIGlkOiBhZ2dySWQsXHJcbiAgICAgICAgdHlwZVBheW1lbnQ6IHByZWRvcGxhdGFcclxuICAgICAgICAgID8gJ9Cf0YDQtdC00L7Qv9C70LDRgtCwJ1xyXG4gICAgICAgICAgOiAn0J/QvtGB0YLQvtC/0LvQsNGC0LAnLFxyXG4gICAgICAgIHBlcmlvZDogc3JvayxcclxuICAgICAgICBkYXRlX3BheW1lbnQ6IHBheW1lbnREYXRlLFxyXG4gICAgICAgIGFtb3VudFBheW1lbnQ6IGRpc2NvdW50XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgc3dhbChcItCj0YHQv9C10YjQvdC+IVwiLCBg0JLQsNGI0LAg0LfQsNGP0LLQutCwINC+0YLQv9GA0LDQstC70LXQvdCwINCyIE5hc2ggQ29tcGFueS4g0JLQsNC8INGB0LXQudGH0LDRgSDQv9C10YDQtdC30LLQvtC90Y/RgiDRgSDQvdC+0LzQtdGA0LAgKzcoNzAwKTM1MC01MC0wMGAsIFwic3VjY2Vzc1wiKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IHN0ZXBUaGlyZCA9ICgpID0+IHtcclxuICAgIC8vIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgY29uc3Qgb2JqZWN0ID0ge1xyXG4gICAgICBpZDogY29va2llLmdldCgnbGVhZF9pZCcpID09PSB1bmRlZmluZWRcclxuICAgICAgICA/IGZpbmFsSURcclxuICAgICAgICA6IGNvb2tpZS5nZXQoJ2xlYWRfaWQnKSxcclxuICAgICAgdG9rZW46IGNvb2tpZS5nZXQoJ3Rva2VuJyksXHJcbiAgICAgIGFtb3VudFBheW1lbnQ6IGRpc2NvdW50LFxyXG4gICAgICBkYXRlX3BheW1lbnQ6IHBheW1lbnREYXRlLFxyXG4gICAgICBwZXJpb2Q6IHNyb2ssXHJcbiAgICAgIHR5cGVQYXltZW50OiBwcmVkb3BsYXRhXHJcbiAgICAgICAgPyAn0J/RgNC10LTQvtC/0LvQsNGC0LAnXHJcbiAgICAgICAgOiAn0J/QvtGB0YLQvtC/0LvQsNGC0LAnXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNvb2tpZS5nZXQoJ3V0bV9zb3VyY2UnKSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIG9iamVjdC51dG1fc291cmNlID0gY29va2llLmdldCgndXRtX3NvdXJjZScpXHJcbiAgICAgIG9iamVjdC5jbGlja19pZCA9IGNvb2tpZS5nZXQoJ2NsaWNrX2lkJylcclxuICAgICAgLy8gb2JqZWN0LndlYklEID0gY29va2llLmdldCgnd2ViX2lkJylcclxuICAgIH1cclxuICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgIGF4aW9zXHJcbiAgICAgIC5nZXQoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L3N0ZXBUaHJlZWAsIHtwYXJhbXM6IG9iamVjdH0pXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgIHN3YWwoXCLQo9GB0L/QtdGI0L3QviFcIiwgYNCS0LDRiNCwINC30LDRj9Cy0LrQsCDQvtGC0L/RgNCw0LLQu9C10L3QsCDQsiBOYXNoIENvbXBhbnkuINCS0LDQvCDRgdC10LnRh9Cw0YEg0L/QtdGA0LXQt9Cy0L7QvdGP0YIg0YEg0L3QvtC80LXRgNCwICs3KDcwMCkzNTAtNTAtMDBgLCBcInN1Y2Nlc3NcIikudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvY2FiaW5ldC9yZXF1ZXN0cycpXHJcbiAgICAgICAgICAgIGNvb2tpZS5yZW1vdmUoJ2xlYWRfaWQnKVxyXG4gICAgICAgICAgICBjb29raWUucmVtb3ZlKCdzdGVwJylcclxuICAgICAgICAgICAgY29va2llLnJlbW92ZSgndXRtX21lZGl1bScpXHJcbiAgICAgICAgICAgIGNvb2tpZS5yZW1vdmUoJ3V0bV9zb3VyY2UnKVxyXG4gICAgICAgICAgICBjb29raWUucmVtb3ZlKCd1dG1fY2FtcGFpZ24nKVxyXG4gICAgICAgICAgICBjb29raWUucmVtb3ZlKCdjbGlja19pZCcpXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBmaW5hbFN1Ym1pdCA9ICgpID0+IHtcclxuICAgIGlmIChwYXRobmFtZSA9PT0gJy9hZ2dyZW1lbnQnKSB7XHJcbiAgICAgIGFnZ3JlbWVudFNibXQoKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3RlcFRoaXJkKClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRDb2RlKCcnKVxyXG4gICAgc2V0RXJyb3IoJycpXHJcbiAgICBzZXRNb2RhbChmYWxzZSlcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uTW9kYWwgPSAocGFyYW0pID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgIHNldE1vZGFsKGZhbHNlKVxyXG4gICAgc2V0RXJyb3IoJycpXHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9mb3VydGhTdGFnZT9waG9uZT0ke3BhcmFtfWApXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICBpZiAocmVzLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgc2V0TW9kYWwodHJ1ZSlcclxuICAgICAgICB9IGVsc2Uge31cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICBzZXRNb2RhbChmYWxzZSlcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IG9wZW5Db2RlTW9kYWwgPSAoZSkgPT4ge1xyXG5cclxuICAgIC8vIGUucHJldmVudERlZmF1bHQoKSBjb25zb2xlLmxvZyhsb2dnZWRJbikgaWYgKGNvb2tpZS5nZXQoJ3Rva2VuJykgPT09XHJcbiAgICAvLyB1bmRlZmluZWQgJiYgcGhvbmUgPT09IG51bGwpIHsgICBjb29raWUucmVtb3ZlKCdzdGVwJykgICByb3V0ZXIucHVzaCgnLycpIH1cclxuICAgIC8vIGlmIChwYXRobmFtZSA9PT0gJy9hZ2dyZW1lbnQnICYmIHBob25lKSB7ICAgb25Nb2RhbChwaG9uZSkgfSBpZiAocGF0aG5hbWUgIT09XHJcbiAgICAvLyAnL2FnZ3JlbWVudCcgJiYgbG9nZ2VkSW4pIHsgICBvbk1vZGFsKHVzZXIucGhvbmUpIH1cclxuICB9XHJcbiAgY29uc3QgcmVwZWF0Q29kZSA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGxvZ2dlZEluKVxyXG4gICAgaWYgKGNvb2tpZS5nZXQoJ3Rva2VuJykgPT09IHVuZGVmaW5lZCAmJiBwaG9uZSA9PT0gbnVsbCkge1xyXG4gICAgICBjb29raWUucmVtb3ZlKCdzdGVwJylcclxuICAgICAgcm91dGVyLnB1c2goJy8nKVxyXG4gICAgfVxyXG4gICAgaWYgKHBhdGhuYW1lID09PSAnL2FnZ3JlbWVudCcgJiYgcGhvbmUpIHtcclxuICAgICAgb25Nb2RhbChwaG9uZSlcclxuICAgIH1cclxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9hZ2dyZW1lbnQnICYmIGxvZ2dlZEluKSB7XHJcbiAgICAgIG9uTW9kYWwodXNlci5waG9uZSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGNoZWNrQ29kZSA9IChwYXJhbSwgY29kZVZhbCkgPT4ge1xyXG4gICAgc2V0RXJyb3IoJycpXHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9jaGVja0NvZGU/cGhvbmU9JHtwYXJhbX0mY29kZT0ke2NvZGVWYWx9YClcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgIHNldE1vZGFsKGZhbHNlKVxyXG4gICAgICAgICAgZmluYWxTdWJtaXQoKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzZXRFcnJvcihyZXMuZGF0YS5tZXNzYWdlKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgc2V0RXJyb3IoJ9Cn0YLQviDRgtC+INC/0L7Qu9GI0L4g0L3QtSDRgtCw0LonKVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2VuZENvZGVDaGVjayA9IChjb2RlVmFsKSA9PiB7XHJcbiAgICBpZiAocGF0aG5hbWUgPT09ICcvYWdncmVtZW50JyAmJiBwaG9uZSkge1xyXG4gICAgICBjaGVja0NvZGUocGhvbmUsIGNvZGVWYWwpXHJcbiAgICB9XHJcbiAgICBpZiAocGF0aG5hbWUgIT09ICcvYWdncmVtZW50JyAmJiBsb2dnZWRJbikge1xyXG4gICAgICBjaGVja0NvZGUodXNlci5waG9uZSwgY29kZVZhbClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGNvbnN0IGRvZ292b3JvYnJhYm90a2EgPSAoKSA9PiB7ICAgaWYocGF0aG5hbWUgPT09ICcvYWdncmVtZW50JykgeyAgICAgcmV0dXJuXHJcbiAgLy8gYC9kb2dvdm9yb2JyYWJvdGthP3Rva2VuPSR7dG9rZW59YCAgIH0gICBpZihwYXRobmFtZSA9PT0gJy9jYWJpbmV0L2NvbnRpbnVlJylcclxuICAvLyB7ICAgICByZXR1cm4gYC9kb2dvdm9yb2JyYWJvdGthP2lkPSR7aWR9YCAgIH0gICBlbHNlIHsgICByZXR1cm5cclxuICAvLyAnL2RvZ292b3JvYnJhYm90a2EnICAgfSB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIndyYXBwZXJcIj5cclxuICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZSBiYXNpY1wiPlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmljZS1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzPVwicHJpY2UtYXJlYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyLWFyZWFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHRcIj7RgtCzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJpY2VcIj4wMDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhY2thZ2UtbmFtZVwiPlxyXG4gICAgXHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzcz1cImZlYXR1cmVzXCI+XHJcbiAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGlzdC1uYW1lXCI+INCe0YLQs9GA0LDQtNC40Lwg0L7RgiDQvdC10LfQsNC60L7QvdC90YvRhSDQtNC10LnRgdGC0LLQuNC5INCc0KTQnjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBjaGVja1wiPjxpIGNsYXNzPVwiZmFzIGZhLWNoZWNrXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaXN0LW5hbWVcIj4g0J7RgtCz0YDQsNC00LjQvCDQvtGCINC90LXQt9Cw0LrQvtC90L3Ri9GFINC00LXQudGB0YLQstC40Lkg0JrQvtC70LvQtdC60YLQvtGA0L7Qsjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBjaGVja1wiPjxpIGNsYXNzPVwiZmFzIGZhLWNoZWNrXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaXN0LW5hbWVcIj7QntGC0LPRgNCw0LTQuNC8INC+0YIg0L3QtdC30LDQutC+0L3QvdGL0YUg0LTQtdC50YHRgtCy0LjQuSDQp9Ch0Jg8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gY3Jvc3NcIj48aSBjbGFzcz1cImZhcyBmYS1jaGVja1wiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgIHsvKiA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpc3QtbmFtZVwiPkxpZmV0aW1lIFRlbXBsYXRlIFVwZGF0ZXM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gY3Jvc3NcIj48aSBjbGFzcz1cImZhciBmYS10aW1lcy1jaXJjbGVcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICA8L2xpPiAqL31cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ0blwiPjxidXR0b24+0J/QvtC70YPRh9C40YLRjDwvYnV0dG9uPjwvZGl2PlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZSBVbHRpbWF0ZVwiPlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmljZS1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzPVwicHJpY2UtYXJlYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyLWFyZWFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICDRgtCzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJpY2VcIj4yMDAwMDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhY2thZ2UtbmFtZVwiPlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmVhdHVyZXNcIj5cclxuICAgICAgICAgICBcclxuXHJcblxyXG7Qn9C40YHRjNC80L4g0LIg0K7RgdGC0LjRhtC40Y5cclxu0J/QuNGB0YzQvNC+INCyINC/0LDQu9Cw0YLRgyDQp9Ch0Jhcclxu0KHRg9C0INGBINCc0KTQnlxyXG4gICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpc3QtbmFtZVwiPtCe0YLQvNC10L3QuNC8INC40YHQv9C+0LvQvdC40YLQtdC70YzQvdGL0Lkg0LvQuNGB0YIv0L3QsNC00L/QuNGB0Yw8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gY2hlY2tcIj48aSBjbGFzcz1cImZhcyBmYS1jaGVjay1jaXJjbGVcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpc3QtbmFtZVwiPtCj0LvRg9GH0YjQsNC10Lwg0LrRgNC10LTQuNGC0L3Rg9GOINC40YHRgtC+0YDQuNGOPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGNoZWNrXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hlY2stY2lyY2xlXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaXN0LW5hbWVcIj7Qn9C40YHRjNC80L4g0L4g0L3QsNGA0YPRiNC10L3QuNC4INCX0LDQutC+0L3QvtC00LDRgtC10LvRjNGB0YLQstCwINCg0Jog0LIg0JDQpNCk0KA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gY2hlY2tcIj48aSBjbGFzcz1cImZhcyBmYS1jaGVjay1jaXJjbGVcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpc3QtbmFtZVwiPtCf0L7QtNCz0L7RgtC+0LLQuNC8INCY0KHQmjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBjaGVja1wiPjxpIGNsYXNzPVwiZmFzIGZhLWNoZWNrLWNpcmNsZVwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG5cIj48YnV0dG9uPtCf0L7Qu9GD0YfQuNGC0Yw8L2J1dHRvbj48L2Rpdj5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgIDwvZGl2PlxyXG4gICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQoY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG51bGwpKEZvdXJ0aFN0ZXApKSJdLCJzb3VyY2VSb290IjoiIn0=