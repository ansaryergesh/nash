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
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_dropFileDoc_dropFileDoc__WEBPACK_IMPORTED_MODULE_10__.default, {
        setFiles: setFiles,
        inputContent: "\u041F\u0438\u0441\u044C\u043C\u043E \u0432\u0437\u044B\u0441\u043A\u0430\u0442\u0435\u043B\u044E (\u0421\u043F\u043E\u0440\u043D\u0430\u044F \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044F)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 308,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_dropFile_DropFile__WEBPACK_IMPORTED_MODULE_11__.default, {
        setFiles: setFiles,
        inputContent: "\u041F\u0438\u0441\u044C\u043C\u043E \u0432\u043E\u0437\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u041D\u043E\u0442\u0430\u0440\u0438\u0443\u0441\u0443 (\u0435\u0441\u043B\u0438 \u0435\u0441\u0442\u044C \u0438\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u043D\u0430\u0434\u043F\u0438\u0441\u044C)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 309,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_dropFile_DropFile__WEBPACK_IMPORTED_MODULE_11__.default, {
        setFiles: setFiles,
        inputContent: "\u041F\u0438\u0441\u044C\u043C\u043E \u0432\u0437\u044B\u0441\u043A\u0430\u0442\u0435\u043B\u044E \u0438 \u0427\u0421\u0418 (\u0418\u041B)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 310,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "check_groups",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "submit",
          className: "button",
          value: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 416,
          columnNumber: 7
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 390,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 307,
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
      lineNumber: 421,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 306,
    columnNumber: 5
  }, _this);
};

_s(FourthStep, "Z2xtCl7QDq8QDDYLWg1DkrLnLWw=", false, function () {
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


/***/ }),

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
        lineNumber: 305,
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
            lineNumber: 386,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            onClick: function onClick(e) {
              return checkDoc(e);
            },
            "data-name": "doc1",
            className: "checklabel"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 387,
            columnNumber: 13
          }, _this), token ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "/dogovorobrabotka?token=".concat(token),
            target: "__blank",
            children: "\u0421\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430 \u0441\u0431\u043E\u0440 \u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 389,
            columnNumber: 17
          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "/dogovorobrabotka",
            target: "__blank",
            children: "\u0417\u0430\u043F\u0440\u043E\u0441 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 390,
            columnNumber: 17
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 385,
          columnNumber: 11
        }, _this), docs.doc1 === false ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "submit",
          disabled: true,
          onClick: function onClick() {
            return (0,_defaults_extraFunction__WEBPACK_IMPORTED_MODULE_7__.handleFocus)();
          },
          className: "button button_lightest",
          value: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 412,
          columnNumber: 15
        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "submit",
          className: "button",
          value: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 418,
          columnNumber: 15
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 384,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 304,
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
      lineNumber: 423,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 303,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRzZXJ2aWNlL0ZvdXJ0aFN0ZXAuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2V0c2VydmljZS9UaGlyZFN0ZXAuanMiXSwibmFtZXMiOlsibWFwU3RhdGVUb1Byb3BzIiwidXNlclJlZHVjZXIiLCJ1c2VyIiwibG9nZ2VkSW4iLCJGb3VydGhTdGVwIiwic2V0TG9hZGluZyIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicXVlcnkiLCJwYXRobmFtZSIsInRva2VuIiwiYW1vdW50IiwidXNlU3RhdGUiLCJhbW91bnRWYWwiLCJzZXRBbW91bnQiLCJsZWFkSUQiLCJhZ2dyVG9rZW4iLCJzZXRBZ2dyVG9rZW4iLCJmaW5hbEFtb3VudCIsImFnZ3JJZCIsInNldEFnZ3JJZCIsInBob25lIiwic2V0UGhvbmUiLCJtb2RhbCIsInNldE1vZGFsIiwiY29kZSIsInNldENvZGUiLCJmaW5hbElEIiwidXNlRWZmZWN0Iiwic3VtbWEiLCJjb29raWUiLCJ1bmRlZmluZWQiLCJmaW5hbFN1bW1hIiwiTWF0aCIsImZsb29yIiwicGFyc2VJbnQiLCJkaXNjb3VudFN1bW1hIiwic2V0U3VtbWEiLCJzZXREaXNjb3VudCIsImNvbnNvbGUiLCJsb2ciLCJheGlvcyIsInByb2Nlc3MiLCJ0aGVuIiwicmVzIiwiZGF0YSIsInB1c2giLCJmaWxlcyIsInNldEZpbGVzIiwiZGlzY291bnQiLCJwcmVkb3BsYXRhIiwic2V0T3BsYXRhIiwicGFyc2VEYXRlIiwicGF5bWVudERhdGUiLCJzZXRQYXltZW50RGF0ZSIsImVycm9yQ29kZSIsInNldEVycm9yIiwiZG9jcyIsInNldERvY3MiLCJzcm9rIiwic2V0U3JvayIsImNoZWNrRG9jIiwiZSIsIm5hbWUiLCJ0YXJnZXQiLCJkYXRhc2V0IiwiY2hhbmdlT3BsYXRhIiwiZ2V0QXR0cmlidXRlIiwiY2hhbmdlU3JvayIsIm1vbnRoIiwidmFsdWUiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsTGVmdCIsImNoYW5nZVNyb2tCdG4iLCJtb250aFZhbCIsInNjcm9sbFJpZ2h0IiwiYWdncmVtZW50U2JtdCIsInBhcmFtcyIsInR5cGVQYXltZW50IiwicGVyaW9kIiwiZGF0ZV9wYXltZW50IiwiYW1vdW50UGF5bWVudCIsInN0YXR1cyIsInN3YWwiLCJlcnIiLCJzdGVwVGhpcmQiLCJvYmplY3QiLCJ1dG1fc291cmNlIiwiY2xpY2tfaWQiLCJzdWNjZXNzIiwiUm91dGVyIiwiZmluYWxTdWJtaXQiLCJjbG9zZU1vZGFsIiwib25Nb2RhbCIsInBhcmFtIiwib3BlbkNvZGVNb2RhbCIsInJlcGVhdENvZGUiLCJjaGVja0NvZGUiLCJjb2RlVmFsIiwibWVzc2FnZSIsInNlbmRDb2RlQ2hlY2siLCJjb25uZWN0IiwiVGhpcmRTdGVwIiwiZG9jMSIsImhhbmRsZUZvY3VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQjtBQUFBLDhCQUN0QkMsV0FEc0I7QUFBQSxNQUVwQkMsSUFGb0Isb0JBRXBCQSxJQUZvQjtBQUFBLE1BR3BCQyxRQUhvQixvQkFHcEJBLFFBSG9CO0FBQUEsU0FLakI7QUFBQ0QsUUFBSSxFQUFKQSxJQUFEO0FBQU9DLFlBQVEsRUFBUkE7QUFBUCxHQUxpQjtBQUFBLENBQXhCOztBQU9BLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLFFBRWI7QUFBQTs7QUFBQSxNQURKQyxVQUNJLFNBREpBLFVBQ0k7QUFBQSxNQURRSCxJQUNSLFNBRFFBLElBQ1I7QUFBQSxNQURhQyxRQUNiLFNBRGFBLFFBQ2I7QUFDSixNQUFNRyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBREksTUFFR0MsRUFGSCxHQUVTRixNQUFNLENBQUNHLEtBRmhC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LEtBQWQsZ0JBQ0c7QUFDRSxjQUFJLEVBQUMsUUFEUDtBQUVFLGtCQUFRLEVBQUUsSUFGWjtBQUdFLGlCQUFPLEVBQUU7QUFBQSxtQkFBTUMsb0VBQVcsRUFBakI7QUFBQSxXQUhYO0FBSUUsbUJBQVMsRUFBQyx3QkFKWjtBQUtFLGVBQUssRUFBQztBQUxSO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREgsZ0JBT0c7QUFBTyxjQUFJLEVBQUMsUUFBWjtBQUFxQixtQkFBUyxFQUFDLFFBQS9CO0FBQXdDLGVBQUssRUFBQztBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWxDTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFoRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUF3SEUsOERBQUMsc0RBQUQ7QUFDRSxpQkFBVyxFQUFFbkYsS0FEZjtBQUVFLGdCQUFVLEVBQUV1RSxVQUZkO0FBR0UsVUFBSSxFQUFFckUsSUFIUjtBQUlFLGFBQU8sRUFBRUMsT0FKWDtBQUtFLGlCQUFXLEVBQUU0RSxhQUxmO0FBTUUsdUJBQWlCLEVBQUVKLFVBTnJCO0FBT0UsV0FBSyxFQUFFM0M7QUFQVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBeEhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBbUlELENBaGFEOztHQUFNaUQsUztVQUdXbEcsa0Q7OztLQUhYa0csUztBQWthTiwrREFBZUQsb0RBQU8sQ0FBQ3hHLGVBQUQsRUFBa0IsSUFBbEIsQ0FBUCxDQUErQnlHLFNBQS9CLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGx5YS1maXppY2hlc2tpeC1saWMuMGQxN2IxNmMyZWNhZTAxM2JhMWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJ1xyXG5pbXBvcnQgUm91dGVyLCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHN3YWwgZnJvbSAnc3dlZXRhbGVydCdcclxuaW1wb3J0IHthbW91bnRTcGFjZSwgaGFuZGxlRm9jdXMsIHBhcnNlRGF0ZX0gZnJvbSBcIi4uLy4uL2RlZmF1bHRzL2V4dHJhRnVuY3Rpb25cIlxyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiXHJcbmltcG9ydCBDb2RlTW9kYWwgZnJvbSAnLi4vc2hhcmVkL0NvZGVNb2RhbCdcclxuaW1wb3J0IERyb3BGaWxlRG9jIGZyb20gXCIuLi9kcm9wRmlsZURvYy9kcm9wRmlsZURvY1wiXHJcbmltcG9ydCBEcm9wRmlsZSBmcm9tIFwiLi4vZHJvcEZpbGUvRHJvcEZpbGVcIlxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHtcclxuICB1c2VyUmVkdWNlcjoge1xyXG4gICAgdXNlcixcclxuICAgIGxvZ2dlZEluXHJcbiAgfVxyXG59KSA9PiAoe3VzZXIsIGxvZ2dlZElufSk7XHJcblxyXG5jb25zdCBGb3VydGhTdGVwID0gKHtcclxuICBzZXRMb2FkaW5nLCB1c2VyLGxvZ2dlZEluXHJcbn0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHtpZH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3QgcGF0aG5hbWUgPSByb3V0ZXIucGF0aG5hbWVcclxuICBjb25zdCB7dG9rZW59ID0gcm91dGVyLnF1ZXJ5XHJcbiAgY29uc3Qge2Ftb3VudH0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCBbYW1vdW50VmFsLFxyXG4gICAgc2V0QW1vdW50XSA9IHVzZVN0YXRlKDApXHJcbiAgY29uc3Qge2xlYWRJRH0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCBbYWdnclRva2VuLFxyXG4gICAgc2V0QWdnclRva2VuXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IGZpbmFsQW1vdW50ID0gYW1vdW50XHJcbiAgICA/IGFtb3VudFxyXG4gICAgOiBhbW91bnRWYWxcclxuICBjb25zdCBbYWdncklkLFxyXG4gICAgc2V0QWdncklkXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtwaG9uZSxcclxuICAgIHNldFBob25lXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW21vZGFsLFxyXG4gICAgc2V0TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2NvZGUsXHJcbiAgICBzZXRDb2RlXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IGZpbmFsSUQgPSBpZCB8fCBsZWFkSURcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc3VtbWEgPSBjb29raWUuZ2V0KCdhbW91bnQnKSAhPT0gdW5kZWZpbmVkXHJcbiAgICAgID8gY29va2llLmdldCgnYW1vdW50JylcclxuICAgICAgOiBmaW5hbEFtb3VudFxyXG4gICAgY29uc3QgZmluYWxTdW1tYSA9IE1hdGguZmxvb3IocGFyc2VJbnQoc3VtbWEpICogMC4yKVxyXG4gICAgY29uc3QgZGlzY291bnRTdW1tYSA9IE1hdGguZmxvb3IocGFyc2VJbnQoZmluYWxTdW1tYSkgLyAyKVxyXG4gICAgaWYgKGZpbmFsU3VtbWEgPiAyMDAwMDApIHtcclxuICAgICAgc2V0U3VtbWEoZmluYWxTdW1tYSlcclxuICAgICAgc2V0RGlzY291bnQoZGlzY291bnRTdW1tYSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFN1bW1hKDIwMDAwMClcclxuICAgICAgc2V0RGlzY291bnQoMTAwMDAwKVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coZmluYWxTdW1tYSlcclxuICB9LCBbY29va2llLmdldCgnYW1vdW50JyldKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHRva2VuKSB7XHJcbiAgICAgIHNldEFnZ3JUb2tlbih0b2tlbilcclxuICAgIH1cclxuXHJcbiAgfSwgW3Rva2VuXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHBhdGhuYW1lID09PSAnL2FnZ3JlbWVudCcgJiYgYWdnclRva2VuKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCd5ZXMnKVxyXG4gICAgICBheGlvc1xyXG4gICAgICAgIC5nZXQoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L2dldERhdGFTaWduP3Rva2VuPSR7YWdnclRva2VufWApXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGFnZ3JUb2tlbilcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgIGlmICghcmVzLmRhdGEuaWQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3RoaXMnKVxyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRQaG9uZShyZXMuZGF0YS5waG9uZSlcclxuICAgICAgICAgICAgc2V0QWdncklkKHJlcy5kYXRhLmlkKVxyXG4gICAgICAgICAgICBzZXRBbW91bnQocGFyc2VJbnQocmVzLmRhdGEuYW1vdW50KSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gIH0sIFthZ2dyVG9rZW5dKVxyXG5cclxuICBjb25zdCBbc3VtbWEsXHJcbiAgICBzZXRTdW1tYV0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgW2ZpbGVzLFxyXG4gICAgICBzZXRGaWxlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2Rpc2NvdW50LFxyXG4gICAgc2V0RGlzY291bnRdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbcHJlZG9wbGF0YSxcclxuICAgIHNldE9wbGF0YV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbcGF5bWVudERhdGUsXHJcbiAgICBzZXRQYXltZW50RGF0ZV0gPSB1c2VTdGF0ZShwYXJzZURhdGUoMSkpXHJcbiAgY29uc3QgW2Vycm9yQ29kZSxzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbZG9jcyxcclxuICAgIHNldERvY3NdID0gdXNlU3RhdGUoe1wiZG9jMVwiOiB0cnVlLCBcImRvYzJcIjogdHJ1ZSwgXCJkb2MzXCI6IHRydWUsIFwiZG9jNFwiOiB0cnVlfSlcclxuICBjb25zdCBbc3JvayxcclxuICAgIHNldFNyb2tdID0gdXNlU3RhdGUoJzEnKVxyXG4gIGNvbnN0IGNoZWNrRG9jID0gKGUpID0+IHtcclxuICAgIGNvbnN0IG5hbWUgPSBlLnRhcmdldC5kYXRhc2V0Lm5hbWVcclxuICAgIC8vIGNvbnNvbGUubG9nKGRvY3NbbmFtZV0pXHJcbiAgICBzZXREb2NzKHtcclxuICAgICAgLi4uZG9jcyxcclxuICAgICAgW25hbWVdOiAhZG9jc1tuYW1lXVxyXG4gICAgfSlcclxuICAgIGNvbnNvbGUubG9nKGRvY3MpXHJcblxyXG4gIH1cclxuICBjb25zdCBjaGFuZ2VPcGxhdGEgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgbmFtZSA9IGVcclxuICAgICAgLnRhcmdldFxyXG4gICAgICAuZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKVxyXG4gICAgc2V0T3BsYXRhKCFwcmVkb3BsYXRhKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2hhbmdlU3JvayA9IGUgPT4ge1xyXG4gICAgY29uc3QgbW9udGggPSBwYXJzZUludChlLnRhcmdldC52YWx1ZSlcclxuICAgIHNldFNyb2soZS50YXJnZXQudmFsdWUpXHJcbiAgICBzZXRQYXltZW50RGF0ZShwYXJzZURhdGUobW9udGgpKVxyXG4gICAgaWYgKGUudGFyZ2V0LnZhbHVlID4gMikge1xyXG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhbmdlX19saXN0JylcclxuICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0ID0gLTMwMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFuZ2VfX2xpc3QnKVxyXG4gICAgICBlbGVtZW50LnNjcm9sbExlZnQgPSAzMDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGFuZ2VTcm9rQnRuID0gKG1vbnRoKSA9PiB7XHJcbiAgICBjb25zdCBtb250aFZhbCA9IHBhcnNlSW50KG1vbnRoKVxyXG4gICAgc2V0U3Jvayhtb250aClcclxuICAgIHNldFBheW1lbnREYXRlKHBhcnNlRGF0ZShtb250aFZhbCkpXHJcbiAgICBpZiAobW9udGhWYWwgPiAzKSB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFuZ2VfX2xpc3QnKVxyXG4gICAgICBlbGVtZW50LnNjcm9sbExlZnQgPSAyMDA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhbmdlX19saXN0JylcclxuICAgICAgZWxlbWVudC5zY3JvbGxSaWdodCA9IDIwMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGFnZ3JlbWVudFNibXQgPSAoKSA9PiB7XHJcbiAgICAvLyBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgIGF4aW9zXHJcbiAgICAgIC5nZXQoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L3JlbW92ZVNob3J0VXJsYCwge1xyXG4gICAgICBwYXJhbXM6IHtcclxuICAgICAgICBpZDogYWdncklkLFxyXG4gICAgICAgIHR5cGVQYXltZW50OiBwcmVkb3BsYXRhXHJcbiAgICAgICAgICA/ICfQn9GA0LXQtNC+0L/Qu9Cw0YLQsCdcclxuICAgICAgICAgIDogJ9Cf0L7RgdGC0L7Qv9C70LDRgtCwJyxcclxuICAgICAgICBwZXJpb2Q6IHNyb2ssXHJcbiAgICAgICAgZGF0ZV9wYXltZW50OiBwYXltZW50RGF0ZSxcclxuICAgICAgICBhbW91bnRQYXltZW50OiBkaXNjb3VudFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgIHN3YWwoXCLQo9GB0L/QtdGI0L3QviFcIiwgYNCS0LDRiNCwINC30LDRj9Cy0LrQsCDQvtGC0L/RgNCw0LLQu9C10L3QsCDQsiBOYXNoIENvbXBhbnkuINCS0LDQvCDRgdC10LnRh9Cw0YEg0L/QtdGA0LXQt9Cy0L7QvdGP0YIg0YEg0L3QvtC80LXRgNCwICs3KDcwMCkzNTAtNTAtMDBgLCBcInN1Y2Nlc3NcIikudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvJylcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgIH0pXHJcbiAgfVxyXG4gIFxyXG4gIGNvbnN0IHN0ZXBUaGlyZCA9ICgpID0+IHtcclxuICAgIC8vIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgY29uc3Qgb2JqZWN0ID0ge1xyXG4gICAgICBpZDogY29va2llLmdldCgnbGVhZF9pZCcpID09PSB1bmRlZmluZWRcclxuICAgICAgICA/IGZpbmFsSURcclxuICAgICAgICA6IGNvb2tpZS5nZXQoJ2xlYWRfaWQnKSxcclxuICAgICAgdG9rZW46IGNvb2tpZS5nZXQoJ3Rva2VuJyksXHJcbiAgICAgIGFtb3VudFBheW1lbnQ6IGRpc2NvdW50LFxyXG4gICAgICBkYXRlX3BheW1lbnQ6IHBheW1lbnREYXRlLFxyXG4gICAgICBwZXJpb2Q6IHNyb2ssXHJcbiAgICAgIHR5cGVQYXltZW50OiBwcmVkb3BsYXRhXHJcbiAgICAgICAgPyAn0J/RgNC10LTQvtC/0LvQsNGC0LAnXHJcbiAgICAgICAgOiAn0J/QvtGB0YLQvtC/0LvQsNGC0LAnXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNvb2tpZS5nZXQoJ3V0bV9zb3VyY2UnKSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIG9iamVjdC51dG1fc291cmNlID0gY29va2llLmdldCgndXRtX3NvdXJjZScpXHJcbiAgICAgIG9iamVjdC5jbGlja19pZCA9IGNvb2tpZS5nZXQoJ2NsaWNrX2lkJylcclxuICAgICAgLy8gb2JqZWN0LndlYklEID0gY29va2llLmdldCgnd2ViX2lkJylcclxuICAgIH1cclxuICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgIGF4aW9zXHJcbiAgICAgIC5nZXQoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L3N0ZXBUaHJlZWAsIHtwYXJhbXM6IG9iamVjdH0pXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgIHN3YWwoXCLQo9GB0L/QtdGI0L3QviFcIiwgYNCS0LDRiNCwINC30LDRj9Cy0LrQsCDQvtGC0L/RgNCw0LLQu9C10L3QsCDQsiBOYXNoIENvbXBhbnkuINCS0LDQvCDRgdC10LnRh9Cw0YEg0L/QtdGA0LXQt9Cy0L7QvdGP0YIg0YEg0L3QvtC80LXRgNCwICs3KDcwMCkzNTAtNTAtMDBgLCBcInN1Y2Nlc3NcIikudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvY2FiaW5ldC9yZXF1ZXN0cycpXHJcbiAgICAgICAgICAgIGNvb2tpZS5yZW1vdmUoJ2xlYWRfaWQnKVxyXG4gICAgICAgICAgICBjb29raWUucmVtb3ZlKCdzdGVwJylcclxuICAgICAgICAgICAgY29va2llLnJlbW92ZSgndXRtX21lZGl1bScpXHJcbiAgICAgICAgICAgIGNvb2tpZS5yZW1vdmUoJ3V0bV9zb3VyY2UnKVxyXG4gICAgICAgICAgICBjb29raWUucmVtb3ZlKCd1dG1fY2FtcGFpZ24nKVxyXG4gICAgICAgICAgICBjb29raWUucmVtb3ZlKCdjbGlja19pZCcpXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBmaW5hbFN1Ym1pdCA9ICgpPT4ge1xyXG4gICAgaWYgKHBhdGhuYW1lID09PSAnL2FnZ3JlbWVudCcpIHtcclxuICAgICAgYWdncmVtZW50U2JtdCgpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzdGVwVGhpcmQoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcclxuICAgIHNldENvZGUoJycpXHJcbiAgICBzZXRFcnJvcignJylcclxuICAgIHNldE1vZGFsKGZhbHNlKVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25Nb2RhbCA9IChwYXJhbSkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgc2V0TW9kYWwoZmFsc2UpXHJcbiAgICBzZXRFcnJvcignJylcclxuICAgIGF4aW9zXHJcbiAgICAgIC5nZXQoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L2ZvdXJ0aFN0YWdlP3Bob25lPSR7cGFyYW19YClcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgIGlmIChyZXMuZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICBzZXRNb2RhbCh0cnVlKVxyXG4gICAgICAgIH0gZWxzZSB7fVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgIHNldE1vZGFsKGZhbHNlKVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb3BlbkNvZGVNb2RhbCA9IChlKSA9PiB7XHJcblxyXG4gICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAvLyBjb25zb2xlLmxvZyhsb2dnZWRJbilcclxuICAgIC8vIGlmIChjb29raWUuZ2V0KCd0b2tlbicpID09PSB1bmRlZmluZWQgJiYgcGhvbmUgPT09IG51bGwpIHtcclxuICAgIC8vICAgY29va2llLnJlbW92ZSgnc3RlcCcpXHJcbiAgICAvLyAgIHJvdXRlci5wdXNoKCcvJylcclxuICAgIC8vIH1cclxuICAgIC8vIGlmIChwYXRobmFtZSA9PT0gJy9hZ2dyZW1lbnQnICYmIHBob25lKSB7XHJcbiAgICAvLyAgIG9uTW9kYWwocGhvbmUpXHJcbiAgICAvLyB9XHJcbiAgICAvLyBpZiAocGF0aG5hbWUgIT09ICcvYWdncmVtZW50JyAmJiBsb2dnZWRJbikge1xyXG4gICAgLy8gICBvbk1vZGFsKHVzZXIucGhvbmUpXHJcbiAgICAvLyB9XHJcbiAgfVxyXG4gIGNvbnN0IHJlcGVhdENvZGUgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhsb2dnZWRJbilcclxuICAgIGlmIChjb29raWUuZ2V0KCd0b2tlbicpID09PSB1bmRlZmluZWQgJiYgcGhvbmUgPT09IG51bGwpIHtcclxuICAgICAgY29va2llLnJlbW92ZSgnc3RlcCcpXHJcbiAgICAgIHJvdXRlci5wdXNoKCcvJylcclxuICAgIH1cclxuICAgIGlmIChwYXRobmFtZSA9PT0gJy9hZ2dyZW1lbnQnICYmIHBob25lKSB7XHJcbiAgICAgIG9uTW9kYWwocGhvbmUpXHJcbiAgICB9XHJcbiAgICBpZiAocGF0aG5hbWUgIT09ICcvYWdncmVtZW50JyAmJiBsb2dnZWRJbikge1xyXG4gICAgICBvbk1vZGFsKHVzZXIucGhvbmUpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGVja0NvZGUgPSAocGFyYW0sIGNvZGVWYWwpID0+IHtcclxuICAgIHNldEVycm9yKCcnKVxyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vY2hlY2tDb2RlP3Bob25lPSR7cGFyYW19JmNvZGU9JHtjb2RlVmFsfWApXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgIGlmKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgIHNldE1vZGFsKGZhbHNlKVxyXG4gICAgICAgICAgZmluYWxTdWJtaXQoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIHNldEVycm9yKHJlcy5kYXRhLm1lc3NhZ2UpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyPT4ge1xyXG4gICAgICAgIHNldEVycm9yKCfQp9GC0L4g0YLQviDQv9C+0LvRiNC+INC90LUg0YLQsNC6JylcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IHNlbmRDb2RlQ2hlY2sgPSAoY29kZVZhbCkgPT4ge1xyXG4gICAgaWYgKHBhdGhuYW1lID09PSAnL2FnZ3JlbWVudCcgJiYgcGhvbmUpIHtcclxuICAgICAgY2hlY2tDb2RlKHBob25lLCBjb2RlVmFsKVxyXG4gICAgfVxyXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL2FnZ3JlbWVudCcgJiYgbG9nZ2VkSW4pIHtcclxuICAgICAgY2hlY2tDb2RlKHVzZXIucGhvbmUsIGNvZGVWYWwpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBjb25zdCBkb2dvdm9yb2JyYWJvdGthID0gKCkgPT4geyAgIGlmKHBhdGhuYW1lID09PSAnL2FnZ3JlbWVudCcpIHsgICAgIHJldHVyblxyXG4gIC8vIGAvZG9nb3Zvcm9icmFib3RrYT90b2tlbj0ke3Rva2VufWAgICB9ICAgaWYocGF0aG5hbWUgPT09XHJcbiAgLy8gJy9jYWJpbmV0L2NvbnRpbnVlJykgeyAgICAgcmV0dXJuIGAvZG9nb3Zvcm9icmFib3RrYT9pZD0ke2lkfWAgICB9ICAgZWxzZSB7XHJcbiAgLy8gICByZXR1cm4gJy9kb2dvdm9yb2JyYWJvdGthJyAgIH0gfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybV9yZWdpc3RlciB0aGlyZHN0ZXAnPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpID0+IG9wZW5Db2RlTW9kYWwoZSl9PlxyXG4gICAgICAgIDxEcm9wRmlsZURvYyBzZXRGaWxlcz17c2V0RmlsZXN9IGlucHV0Q29udGVudD1cItCf0LjRgdGM0LzQviDQstC30YvRgdC60LDRgtC10LvRjiAo0KHQv9C+0YDQvdCw0Y8g0YHQuNGC0YPQsNGG0LjRjylcIiAvPlxyXG4gICAgICAgIDxEcm9wRmlsZSBzZXRGaWxlcz17c2V0RmlsZXN9IGlucHV0Q29udGVudD1cItCf0LjRgdGM0LzQviDQstC+0LfRgNCw0LbQtdC90LjQtSDQndC+0YLQsNGA0LjRg9GB0YMgKNC10YHQu9C4INC10YHRgtGMINC40YHQv9C+0LvQvdC40YLQtdC70YzQvdCw0Y8g0L3QsNC00L/QuNGB0YwpXCIgLz5cclxuICAgICAgICA8RHJvcEZpbGUgc2V0RmlsZXM9e3NldEZpbGVzfSBpbnB1dENvbnRlbnQ9XCLQn9C40YHRjNC80L4g0LLQt9GL0YHQutCw0YLQtdC70Y4g0Lgg0KfQodCYICjQmNCbKVwiIC8+XHJcbiAgICAgICAgey8qIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cItCS0LLQtdC00LjRgtC1INC/0LDRgNC+0LvRjFwiIC8+ICovfVxyXG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0ncmFkaW9fZ3JvdXBzJz5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdwb3N0b3BsYXRhJ1xyXG4gICAgICAgICAgICBkYXRhLW5hbWU9J3Bvc3RvcGxhdGEnXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nY2hlY2stZ3JvdXAnXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gY2hhbmdlT3BsYXRhKGUpfT5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J2NoZWNrYm94JyBjaGVja2VkPXtwcmVkb3BsYXRhID09PSBmYWxzZX0vPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdyYWRpb2xhYmVsJz7Qn9C+0YHRgtC+0L/Qu9Cw0YLQsDwvbGFiZWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0ncHJlZG9wbGF0YSdcclxuICAgICAgICAgICAgZGF0YS1uYW1lPSdwcmVkb3BsYXRhJ1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9J2NoZWNrLWdyb3VwJ1xyXG4gICAgICAgICAgICBvbkNsaWNrPXtlID0+IGNoYW5nZU9wbGF0YShlKX0+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdjaGVja2JveCcgY2hlY2tlZD17cHJlZG9wbGF0YSA9PT0gdHJ1ZX0vPlxyXG5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0ncmFkaW9sYWJlbCc+0J/RgNC10LTQvtC/0LvQsNGC0LA8L2xhYmVsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+ICovfVxyXG5cclxuICAgICAgICB7LyogeyFwcmVkb3BsYXRhICYmIDxkaXYgY2xhc3NOYW1lPVwicmFuZ2VcIj4gKi99XHJcbiAgICAgICAgICB7LyogPHAgY2xhc3NOYW1lPSdzcm9rX21vbnRoJz7QodGA0L7QuiDQvtC/0LvQsNGC0YsgKNC80LXRgdGP0YYpPC9wPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJhbmdlX19pbnB1dFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtzcm9rfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBjaGFuZ2VTcm9rKGUpfVxyXG4gICAgICAgICAgICBtaW49XCIxXCJcclxuICAgICAgICAgICAgbWF4PVwiM1wiXHJcbiAgICAgICAgICAgIHN0ZXA9XCIxXCJcclxuICAgICAgICAgICAgbGlzdD1cIm51bWJlclwiLz4gKi99XHJcbiAgICAgICAgICB7LyogPGRhdGFsaXN0IGNsYXNzTmFtZT0ncmFuZ2VfX2xpc3QnIGlkPVwibnVtYmVyXCI+XHJcbiAgICAgICAgICAgIDxvcHRpb25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VTcm9rQnRuKCcxJyl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcmFuZ2VfX29wdCBvcHQwICR7c3JvayA9PT0gJzEnICYmICdhY3RpdmUnfWB9PjE8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZVNyb2tCdG4oJzInKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2ByYW5nZV9fb3B0ICR7c3JvayA9PT0gJzInICYmICdhY3RpdmUnfWB9PjI8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZVNyb2tCdG4oJzMnKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2ByYW5nZV9fb3B0ICR7c3JvayA9PT0gJzMnICYmICdhY3RpdmUnfWB9PjM8L29wdGlvbj4gKi99XHJcbiAgICAgICAgICAgIHsvKiA8b3B0aW9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlU3Jva0J0bignNCcpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHJhbmdlX19vcHQgJHtzcm9rID09PSAnNCcgJiYgJ2FjdGl2ZSd9YH0+NDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlU3Jva0J0bignNScpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHJhbmdlX19vcHQgJHtzcm9rID09PSAnNScgJiYgJ2FjdGl2ZSd9YH0+NTwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlU3Jva0J0bignNicpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHJhbmdlX19vcHQgJHtzcm9rID09PSAnNicgJiYgJ2FjdGl2ZSd9YH0+Njwvb3B0aW9uPiAqL31cclxuICAgICAgICAgIHsvKiA8L2RhdGFsaXN0PiAqL31cclxuICAgICAgICB7LyogPC9kaXY+ICovfVxyXG57LyogfSAqL31cclxuICAgICAgICB7LyogeyFwcmVkb3BsYXRhICYmIDxkaXYgY2xhc3NOYW1lPSdwYXltZW50X2RhdGUnPlxyXG4gICAgICAgICAgPHN0cm9uZz7QlNC10L3RjCDQvtC/0LvQsNGC0Ysg0LTQviB7cGF5bWVudERhdGV9XHJcbiAgICAgICAgICA8L3N0cm9uZz5cclxuICAgICAgICA8L2Rpdj59ICovfVxyXG5cclxuICAgICAgICB7LyogPGlucHV0XHJcbiAgICAgICAgICB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICBjbGFzc05hbWU9J3N1bW1hJ1xyXG4gICAgICAgICAgdmFsdWU9e3N1bW1hfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0U3VtbWEoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J9Ch0YPQvNC80LAg0L7Qv9C70LDRgtGLJy8+ICovfVxyXG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0ncGF5bWVudF9hbW91bnQnPiAqL31cclxuICAgICAgICAgIHsvKiA8cD7QodGD0LzQvNCwINC+0L/Qu9Cw0YLRizo8L3A+ICovfVxyXG4gICAgICAgICAgey8qIDxkaXY+ICovfVxyXG4gICAgICAgICAgICB7LyogPHN0cm9uZz57YW1vdW50U3BhY2UoYCR7ZGlzY291bnR9YCl90YLQszwvc3Ryb25nPiAqL31cclxuICAgICAgICAgICAgey8qIDxzcGFuIGNsYXNzPVwicHJpY2UtLWxpbmUtdGhyb3VnaFwiPnthbW91bnRTcGFjZShgJHtzdW1tYX1gKX3RgtCzPC9zcGFuPiAqL31cclxuICAgICAgICAgIHsvKiA8L2Rpdj4gKi99XHJcbiAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9J2Rpc2NvdW50Jz4gKi99XHJcbiAgICAgICAgICAgIHsvKiA8aW1nIHNyYz0nL2ltZy9kaXNjb3VudC5wbmcnLz4gKi99XHJcbiAgICAgICAgICAgIHsvKiA8cD4tNTAlICovfVxyXG4gICAgICAgICAgICAgIHsvKiA8c3Bhbj7QodCa0JjQlNCa0JA8L3NwYW4+ICovfVxyXG4gICAgICAgICAgICB7LyogPC9wPiAqL31cclxuICAgICAgICAgIHsvKiA8L2Rpdj4gKi99XHJcbiAgICAgICAgey8qIDwvZGl2PiAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2hlY2tfZ3JvdXBzJz5cclxuICAgICAgICAgIHsvKiA8ZGl2IGRhdGEtbmFtZT0ncHJlZG9wbGF0YScgY2xhc3NOYW1lPSdjaGVjay1ncm91cCc+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdjaGVja2JveCcgY2hlY2tlZD17ZG9jcy5kb2MxfS8+XHJcbiAgICAgICAgICAgIDxsYWJlbCBvbkNsaWNrPXsoZSkgPT4gY2hlY2tEb2MoZSl9IGRhdGEtbmFtZT0nZG9jMScgY2xhc3NOYW1lPSdjaGVja2xhYmVsJz48L2xhYmVsPlxyXG4gICAgICAgICAgICB7dG9rZW5cclxuICAgICAgICAgICAgICA/IDxhIGhyZWY9e2AvZG9nb3Zvcm9icmFib3RrYT90b2tlbj0ke3Rva2VufWB9IHRhcmdldD0nX19ibGFuayc+0KHQvtCz0LvQsNGB0LjQtSDQvdCwINGB0LHQvtGAINC4INC+0LHRgNCw0LHQvtGC0LrRgyDQuNC90YTQvtGA0LzQsNGG0LjQuDwvYT5cclxuICAgICAgICAgICAgICA6IDxhIGhyZWY9e2AvZG9nb3Zvcm9icmFib3RrYWB9IHRhcmdldD0nX19ibGFuayc+0JfQsNC/0YDQvtGBINC90LAg0L7QsdGA0LDQsdC+0YLQutGDINC/0LXRgNGB0L7QvdCw0LvRjNC90YvRhSDQtNCw0L3QvdGL0YU8L2E+fVxyXG5cclxuICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgIHsvKiA8ZGl2IGRhdGEtbmFtZT0ncG9zdG9wbGF0YScgY2xhc3NOYW1lPSdjaGVjay1ncm91cCc+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdjaGVja2JveCcgY2hlY2tlZD17ZG9jcy5kb2MyfS8+XHJcbiAgICAgICAgICAgIDxsYWJlbCBvbkNsaWNrPXsoZSkgPT4gY2hlY2tEb2MoZSl9IGNsYXNzTmFtZT0nY2hlY2tsYWJlbCcgZGF0YS1uYW1lPSdkb2MyJz48L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgPGEgaHJlZj0nL9Cf0KPQkdCb0JjQp9Cd0JDQryDQntCk0JXQoNCi0JAucGRmJyB0YXJnZXQ9J19fYmxhbmsnPtCU0L7Qs9C+0LLQvtGAINC/0YPQsdC70LjRh9C90L7QuSDQvtGE0LXRgNGC0Ys8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGRhdGEtbmFtZT0ncHJlZG9wbGF0YScgY2xhc3NOYW1lPSdjaGVjay1ncm91cCc+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdjaGVja2JveCcgY2hlY2tlZD17ZG9jcy5kb2M0fS8+XHJcbiAgICAgICAgICAgIDxsYWJlbCBvbkNsaWNrPXsoZSkgPT4gY2hlY2tEb2MoZSl9IGNsYXNzTmFtZT0nY2hlY2tsYWJlbCcgZGF0YS1uYW1lPSdkb2M0Jz48L2xhYmVsPlxyXG4gICAgICAgICAgICB7dG9rZW5cclxuICAgICAgICAgICAgICA/IDxhXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9e2AvZG9nb3Zvcj9wYXltZW50RGF0ZT0ke3BheW1lbnREYXRlfSZwZXJpb2Q9JHtzcm9rfSZ0b2tlbj0ke3Rva2VufWB9XHJcbiAgICAgICAgICAgICAgICAgIHRhcmdldD0nX19ibGFuayc+0JTQvtCz0L7QstC+0YAg0L3QsCDQt9Cw0LrQsNC3INC90LDRgNGP0LQ8L2E+XHJcbiAgICAgICAgICAgICAgOiA8YSBocmVmPXtgL2RvZ292b3I/cGF5bWVudERhdGU9JHtwYXltZW50RGF0ZX0mcGVyaW9kPSR7c3Jva31gfSB0YXJnZXQ9J19fYmxhbmsnPtCU0L7Qs9C+0LLQvtGAINC90LAg0LfQsNC60LDQtyDQvdCw0YDRj9C0PC9hPn1cclxuXHJcbiAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgIDxpbnB1dCB0eXBlPSdzdWJtaXQnIGNsYXNzTmFtZT0nYnV0dG9uJyB2YWx1ZT0n0J/QvtC70YPRh9C40YLRjCDRgNC10LfRg9C70YzRgtCw0YInLz5cclxuICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgIDxDb2RlTW9kYWxcclxuICAgICAgICBpc01vZGFsT3Blbj17bW9kYWx9XHJcbiAgICAgICAgY2xvc2VNb2RhbD17Y2xvc2VNb2RhbH1cclxuICAgICAgICBjb2RlPXtjb2RlfVxyXG4gICAgICAgIHNldENvZGU9e3NldENvZGV9XHJcbiAgICAgICAgb25GaXJzdFN0ZXA9e3NlbmRDb2RlQ2hlY2t9XHJcbiAgICAgICAgZ2V0SWRlbnRpZmljYXRpb249e3JlcGVhdENvZGV9XHJcbiAgICAgICAgZXJyb3I9e2Vycm9yQ29kZX0vPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdChjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbnVsbCkoRm91cnRoU3RlcCkpIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnXHJcbmltcG9ydCBSb3V0ZXIsIHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgc3dhbCBmcm9tICdzd2VldGFsZXJ0J1xyXG5pbXBvcnQge2Ftb3VudFNwYWNlLCBoYW5kbGVGb2N1cywgcGFyc2VEYXRlfSBmcm9tIFwiLi4vLi4vZGVmYXVsdHMvZXh0cmFGdW5jdGlvblwiXHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuaW1wb3J0IENvZGVNb2RhbCBmcm9tICcuLi9zaGFyZWQvQ29kZU1vZGFsJ1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHtcclxuICB1c2VyUmVkdWNlcjoge1xyXG4gICAgdXNlcixcclxuICAgIGxvZ2dlZEluXHJcbiAgfVxyXG59KSA9PiAoe3VzZXIsIGxvZ2dlZElufSk7XHJcblxyXG5jb25zdCBUaGlyZFN0ZXAgPSAoe1xyXG4gIHNldExvYWRpbmcsIHVzZXIsbG9nZ2VkSW5cclxufSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3Qge2lkfSA9IHJvdXRlci5xdWVyeTtcclxuICBjb25zdCBwYXRobmFtZSA9IHJvdXRlci5wYXRobmFtZVxyXG4gIGNvbnN0IHt0b2tlbn0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCB7YW1vdW50fSA9IHJvdXRlci5xdWVyeVxyXG4gIGNvbnN0IFthbW91bnRWYWwsXHJcbiAgICBzZXRBbW91bnRdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCB7bGVhZElEfSA9IHJvdXRlci5xdWVyeVxyXG4gIGNvbnN0IFthZ2dyVG9rZW4sXHJcbiAgICBzZXRBZ2dyVG9rZW5dID0gdXNlU3RhdGUoJycpXHJcbiAgICBcclxuICBjb25zdCBmaW5hbEFtb3VudCA9IGFtb3VudFxyXG4gICAgPyBhbW91bnRcclxuICAgIDogYW1vdW50VmFsXHJcbiAgY29uc3QgW2FnZ3JJZCxcclxuICAgIHNldEFnZ3JJZF0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbcGhvbmUsXHJcbiAgICBzZXRQaG9uZV0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFttb2RhbCxcclxuICAgIHNldE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtjb2RlLFxyXG4gICAgc2V0Q29kZV0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBmaW5hbElEID0gaWQgfHwgbGVhZElEXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHN1bW1hID0gY29va2llLmdldCgnYW1vdW50JykgIT09IHVuZGVmaW5lZFxyXG4gICAgICA/IGNvb2tpZS5nZXQoJ2Ftb3VudCcpXHJcbiAgICAgIDogZmluYWxBbW91bnRcclxuICAgIGNvbnN0IGZpbmFsU3VtbWEgPSBNYXRoLmZsb29yKHBhcnNlSW50KHN1bW1hKSAqIDAuMilcclxuICAgIGNvbnN0IGRpc2NvdW50U3VtbWEgPSBNYXRoLmZsb29yKHBhcnNlSW50KGZpbmFsU3VtbWEpIC8gMilcclxuICAgIGlmIChmaW5hbFN1bW1hID4gMjAwMDAwKSB7XHJcbiAgICAgIHNldFN1bW1hKGZpbmFsU3VtbWEpXHJcbiAgICAgIHNldERpc2NvdW50KGRpc2NvdW50U3VtbWEpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRTdW1tYSgyMDAwMDApXHJcbiAgICAgIHNldERpc2NvdW50KDEwMDAwMClcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKGZpbmFsU3VtbWEpXHJcbiAgfSwgW2Nvb2tpZS5nZXQoJ2Ftb3VudCcpXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICBzZXRBZ2dyVG9rZW4odG9rZW4pXHJcbiAgICB9XHJcblxyXG4gIH0sIFt0b2tlbl0pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChwYXRobmFtZSA9PT0gJy9hZ2dyZW1lbnQnICYmIGFnZ3JUb2tlbikge1xyXG4gICAgICBjb25zb2xlLmxvZygneWVzJylcclxuICAgICAgYXhpb3NcclxuICAgICAgICAuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9nZXREYXRhU2lnbj90b2tlbj0ke2FnZ3JUb2tlbn1gKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhhZ2dyVG9rZW4pXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICBpZiAoIXJlcy5kYXRhLmlkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGlzJylcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0UGhvbmUocmVzLmRhdGEucGhvbmUpXHJcbiAgICAgICAgICAgIHNldEFnZ3JJZChyZXMuZGF0YS5pZClcclxuICAgICAgICAgICAgc2V0QW1vdW50KHBhcnNlSW50KHJlcy5kYXRhLmFtb3VudCkpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICB9LCBbYWdnclRva2VuXSlcclxuXHJcbiAgY29uc3QgW3N1bW1hLFxyXG4gICAgc2V0U3VtbWFdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbZGlzY291bnQsXHJcbiAgICBzZXREaXNjb3VudF0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFtwcmVkb3BsYXRhLFxyXG4gICAgc2V0T3BsYXRhXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtwYXltZW50RGF0ZSxcclxuICAgIHNldFBheW1lbnREYXRlXSA9IHVzZVN0YXRlKHBhcnNlRGF0ZSgxKSlcclxuICBjb25zdCBbZXJyb3JDb2RlLHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtkb2NzLFxyXG4gICAgc2V0RG9jc10gPSB1c2VTdGF0ZSh7XCJkb2MxXCI6IHRydWUsIFwiZG9jMlwiOiB0cnVlLCBcImRvYzNcIjogdHJ1ZSwgXCJkb2M0XCI6IHRydWV9KVxyXG4gIGNvbnN0IFtzcm9rLFxyXG4gICAgc2V0U3Jva10gPSB1c2VTdGF0ZSgnMScpXHJcbiAgY29uc3QgY2hlY2tEb2MgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgbmFtZSA9IGUudGFyZ2V0LmRhdGFzZXQubmFtZVxyXG4gICAgLy8gY29uc29sZS5sb2coZG9jc1tuYW1lXSlcclxuICAgIHNldERvY3Moe1xyXG4gICAgICAuLi5kb2NzLFxyXG4gICAgICBbbmFtZV06ICFkb2NzW25hbWVdXHJcbiAgICB9KVxyXG4gICAgY29uc29sZS5sb2coZG9jcylcclxuXHJcbiAgfVxyXG4gIGNvbnN0IGNoYW5nZU9wbGF0YSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBuYW1lID0gZVxyXG4gICAgICAudGFyZ2V0XHJcbiAgICAgIC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpXHJcbiAgICBzZXRPcGxhdGEoIXByZWRvcGxhdGEpXHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGFuZ2VTcm9rID0gZSA9PiB7XHJcbiAgICBjb25zdCBtb250aCA9IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgc2V0U3JvayhlLnRhcmdldC52YWx1ZSlcclxuICAgIHNldFBheW1lbnREYXRlKHBhcnNlRGF0ZShtb250aCkpXHJcbiAgICBpZiAoZS50YXJnZXQudmFsdWUgPiAyKSB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFuZ2VfX2xpc3QnKVxyXG4gICAgICBlbGVtZW50LnNjcm9sbExlZnQgPSAtMzAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYW5nZV9fbGlzdCcpXHJcbiAgICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCA9IDMwMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGNoYW5nZVNyb2tCdG4gPSAobW9udGgpID0+IHtcclxuICAgIGNvbnN0IG1vbnRoVmFsID0gcGFyc2VJbnQobW9udGgpXHJcbiAgICBzZXRTcm9rKG1vbnRoKVxyXG4gICAgc2V0UGF5bWVudERhdGUocGFyc2VEYXRlKG1vbnRoVmFsKSlcclxuICAgIGlmIChtb250aFZhbCA+IDMpIHtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYW5nZV9fbGlzdCcpXHJcbiAgICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCA9IDIwMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFuZ2VfX2xpc3QnKVxyXG4gICAgICBlbGVtZW50LnNjcm9sbFJpZ2h0ID0gMjAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgYWdncmVtZW50U2JtdCA9ICgpID0+IHtcclxuICAgIC8vIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vcmVtb3ZlU2hvcnRVcmxgLCB7XHJcbiAgICAgIHBhcmFtczoge1xyXG4gICAgICAgIGlkOiBhZ2dySWQsXHJcbiAgICAgICAgdHlwZVBheW1lbnQ6IHByZWRvcGxhdGFcclxuICAgICAgICAgID8gJ9Cf0YDQtdC00L7Qv9C70LDRgtCwJ1xyXG4gICAgICAgICAgOiAn0J/QvtGB0YLQvtC/0LvQsNGC0LAnLFxyXG4gICAgICAgIHBlcmlvZDogc3JvayxcclxuICAgICAgICBkYXRlX3BheW1lbnQ6IHBheW1lbnREYXRlLFxyXG4gICAgICAgIGFtb3VudFBheW1lbnQ6IGRpc2NvdW50XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgc3dhbChcItCj0YHQv9C10YjQvdC+IVwiLCBg0JLQsNGI0LAg0LfQsNGP0LLQutCwINC+0YLQv9GA0LDQstC70LXQvdCwINCyIE5hc2ggQ29tcGFueS4g0JLQsNC8INGB0LXQudGH0LDRgSDQv9C10YDQtdC30LLQvtC90Y/RgiDRgSDQvdC+0LzQtdGA0LAgKzcoNzAwKTM1MC01MC0wMGAsIFwic3VjY2Vzc1wiKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgfSlcclxuICB9XHJcbiAgXHJcbiAgY29uc3Qgc3RlcFRoaXJkID0gKCkgPT4ge1xyXG4gICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBjb25zdCBvYmplY3QgPSB7XHJcbiAgICAgIGlkOiBjb29raWUuZ2V0KCdsZWFkX2lkJykgPT09IHVuZGVmaW5lZFxyXG4gICAgICAgID8gZmluYWxJRFxyXG4gICAgICAgIDogY29va2llLmdldCgnbGVhZF9pZCcpLFxyXG4gICAgICB0b2tlbjogY29va2llLmdldCgndG9rZW4nKSxcclxuICAgICAgYW1vdW50UGF5bWVudDogZGlzY291bnQsXHJcbiAgICAgIGRhdGVfcGF5bWVudDogcGF5bWVudERhdGUsXHJcbiAgICAgIHBlcmlvZDogc3JvayxcclxuICAgICAgdHlwZVBheW1lbnQ6IHByZWRvcGxhdGFcclxuICAgICAgICA/ICfQn9GA0LXQtNC+0L/Qu9Cw0YLQsCdcclxuICAgICAgICA6ICfQn9C+0YHRgtC+0L/Qu9Cw0YLQsCdcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY29va2llLmdldCgndXRtX3NvdXJjZScpICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgb2JqZWN0LnV0bV9zb3VyY2UgPSBjb29raWUuZ2V0KCd1dG1fc291cmNlJylcclxuICAgICAgb2JqZWN0LmNsaWNrX2lkID0gY29va2llLmdldCgnY2xpY2tfaWQnKVxyXG4gICAgICAvLyBvYmplY3Qud2ViSUQgPSBjb29raWUuZ2V0KCd3ZWJfaWQnKVxyXG4gICAgfVxyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vc3RlcFRocmVlYCwge3BhcmFtczogb2JqZWN0fSlcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICBpZiAocmVzLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgc3dhbChcItCj0YHQv9C10YjQvdC+IVwiLCBg0JLQsNGI0LAg0LfQsNGP0LLQutCwINC+0YLQv9GA0LDQstC70LXQvdCwINCyIE5hc2ggQ29tcGFueS4g0JLQsNC8INGB0LXQudGH0LDRgSDQv9C10YDQtdC30LLQvtC90Y/RgiDRgSDQvdC+0LzQtdGA0LAgKzcoNzAwKTM1MC01MC0wMGAsIFwic3VjY2Vzc1wiKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goJy9jYWJpbmV0L3JlcXVlc3RzJylcclxuICAgICAgICAgICAgY29va2llLnJlbW92ZSgnbGVhZF9pZCcpXHJcbiAgICAgICAgICAgIGNvb2tpZS5yZW1vdmUoJ3N0ZXAnKVxyXG4gICAgICAgICAgICBjb29raWUucmVtb3ZlKCd1dG1fbWVkaXVtJylcclxuICAgICAgICAgICAgY29va2llLnJlbW92ZSgndXRtX3NvdXJjZScpXHJcbiAgICAgICAgICAgIGNvb2tpZS5yZW1vdmUoJ3V0bV9jYW1wYWlnbicpXHJcbiAgICAgICAgICAgIGNvb2tpZS5yZW1vdmUoJ2NsaWNrX2lkJylcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGZpbmFsU3VibWl0ID0gKCk9PiB7XHJcbiAgICBpZiAocGF0aG5hbWUgPT09ICcvYWdncmVtZW50Jykge1xyXG4gICAgICBhZ2dyZW1lbnRTYm10KClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN0ZXBUaGlyZCgpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0Q29kZSgnJylcclxuICAgIHNldEVycm9yKCcnKVxyXG4gICAgc2V0TW9kYWwoZmFsc2UpXHJcbiAgfVxyXG5cclxuICBjb25zdCBvbk1vZGFsID0gKHBhcmFtKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICBzZXRNb2RhbChmYWxzZSlcclxuICAgIHNldEVycm9yKCcnKVxyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vZm91cnRoU3RhZ2U/cGhvbmU9JHtwYXJhbX1gKVxyXG4gICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgIHNldE1vZGFsKHRydWUpXHJcbiAgICAgICAgfSBlbHNlIHt9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgc2V0TW9kYWwoZmFsc2UpXHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBvcGVuQ29kZU1vZGFsID0gKGUpID0+IHtcclxuXHJcbiAgICAvLyBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIC8vIGNvbnNvbGUubG9nKGxvZ2dlZEluKVxyXG4gICAgLy8gaWYgKGNvb2tpZS5nZXQoJ3Rva2VuJykgPT09IHVuZGVmaW5lZCAmJiBwaG9uZSA9PT0gbnVsbCkge1xyXG4gICAgLy8gICBjb29raWUucmVtb3ZlKCdzdGVwJylcclxuICAgIC8vICAgcm91dGVyLnB1c2goJy8nKVxyXG4gICAgLy8gfVxyXG4gICAgLy8gaWYgKHBhdGhuYW1lID09PSAnL2FnZ3JlbWVudCcgJiYgcGhvbmUpIHtcclxuICAgIC8vICAgb25Nb2RhbChwaG9uZSlcclxuICAgIC8vIH1cclxuICAgIC8vIGlmIChwYXRobmFtZSAhPT0gJy9hZ2dyZW1lbnQnICYmIGxvZ2dlZEluKSB7XHJcbiAgICAvLyAgIG9uTW9kYWwodXNlci5waG9uZSlcclxuICAgIC8vIH1cclxuICB9XHJcbiAgY29uc3QgcmVwZWF0Q29kZSA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGxvZ2dlZEluKVxyXG4gICAgaWYgKGNvb2tpZS5nZXQoJ3Rva2VuJykgPT09IHVuZGVmaW5lZCAmJiBwaG9uZSA9PT0gbnVsbCkge1xyXG4gICAgICBjb29raWUucmVtb3ZlKCdzdGVwJylcclxuICAgICAgcm91dGVyLnB1c2goJy8nKVxyXG4gICAgfVxyXG4gICAgaWYgKHBhdGhuYW1lID09PSAnL2FnZ3JlbWVudCcgJiYgcGhvbmUpIHtcclxuICAgICAgb25Nb2RhbChwaG9uZSlcclxuICAgIH1cclxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9hZ2dyZW1lbnQnICYmIGxvZ2dlZEluKSB7XHJcbiAgICAgIG9uTW9kYWwodXNlci5waG9uZSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGNoZWNrQ29kZSA9IChwYXJhbSwgY29kZVZhbCkgPT4ge1xyXG4gICAgc2V0RXJyb3IoJycpXHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9jaGVja0NvZGU/cGhvbmU9JHtwYXJhbX0mY29kZT0ke2NvZGVWYWx9YClcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgaWYocmVzLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgc2V0TW9kYWwoZmFsc2UpXHJcbiAgICAgICAgICBmaW5hbFN1Ym1pdCgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgc2V0RXJyb3IocmVzLmRhdGEubWVzc2FnZSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnI9PiB7XHJcbiAgICAgICAgc2V0RXJyb3IoJ9Cn0YLQviDRgtC+INC/0L7Qu9GI0L4g0L3QtSDRgtCw0LonKVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2VuZENvZGVDaGVjayA9IChjb2RlVmFsKSA9PiB7XHJcbiAgICBpZiAocGF0aG5hbWUgPT09ICcvYWdncmVtZW50JyAmJiBwaG9uZSkge1xyXG4gICAgICBjaGVja0NvZGUocGhvbmUsIGNvZGVWYWwpXHJcbiAgICB9XHJcbiAgICBpZiAocGF0aG5hbWUgIT09ICcvYWdncmVtZW50JyAmJiBsb2dnZWRJbikge1xyXG4gICAgICBjaGVja0NvZGUodXNlci5waG9uZSwgY29kZVZhbClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGNvbnN0IGRvZ292b3JvYnJhYm90a2EgPSAoKSA9PiB7ICAgaWYocGF0aG5hbWUgPT09ICcvYWdncmVtZW50JykgeyAgICAgcmV0dXJuXHJcbiAgLy8gYC9kb2dvdm9yb2JyYWJvdGthP3Rva2VuPSR7dG9rZW59YCAgIH0gICBpZihwYXRobmFtZSA9PT1cclxuICAvLyAnL2NhYmluZXQvY29udGludWUnKSB7ICAgICByZXR1cm4gYC9kb2dvdm9yb2JyYWJvdGthP2lkPSR7aWR9YCAgIH0gICBlbHNlIHtcclxuICAvLyAgIHJldHVybiAnL2RvZ292b3JvYnJhYm90a2EnICAgfSB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtX3JlZ2lzdGVyIHRoaXJkc3RlcCc+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSkgPT4gb3BlbkNvZGVNb2RhbChlKX0+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwi0JLQstC10LTQuNGC0LUg0L/QsNGA0L7Qu9GMXCIgLz5cclxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9J3JhZGlvX2dyb3Vwcyc+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0ncG9zdG9wbGF0YSdcclxuICAgICAgICAgICAgZGF0YS1uYW1lPSdwb3N0b3BsYXRhJ1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9J2NoZWNrLWdyb3VwJ1xyXG4gICAgICAgICAgICBvbkNsaWNrPXtlID0+IGNoYW5nZU9wbGF0YShlKX0+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdjaGVja2JveCcgY2hlY2tlZD17cHJlZG9wbGF0YSA9PT0gZmFsc2V9Lz5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0ncmFkaW9sYWJlbCc+0J/QvtGB0YLQvtC/0LvQsNGC0LA8L2xhYmVsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9J3ByZWRvcGxhdGEnXHJcbiAgICAgICAgICAgIGRhdGEtbmFtZT0ncHJlZG9wbGF0YSdcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdjaGVjay1ncm91cCdcclxuICAgICAgICAgICAgb25DbGljaz17ZSA9PiBjaGFuZ2VPcGxhdGEoZSl9PlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0nY2hlY2tib3gnIGNoZWNrZWQ9e3ByZWRvcGxhdGEgPT09IHRydWV9Lz5cclxuXHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J3JhZGlvbGFiZWwnPtCf0YDQtdC00L7Qv9C70LDRgtCwPC9sYWJlbD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PiAqL31cclxuXHJcbiAgICAgICAgey8qIHshcHJlZG9wbGF0YSAmJiA8ZGl2IGNsYXNzTmFtZT1cInJhbmdlXCI+ICovfVxyXG4gICAgICAgICAgey8qIDxwIGNsYXNzTmFtZT0nc3Jva19tb250aCc+0KHRgNC+0Log0L7Qv9C70LDRgtGLICjQvNC10YHRj9GGKTwvcD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyYW5nZV9faW5wdXRcIlxyXG4gICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxyXG4gICAgICAgICAgICB2YWx1ZT17c3Jva31cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gY2hhbmdlU3JvayhlKX1cclxuICAgICAgICAgICAgbWluPVwiMVwiXHJcbiAgICAgICAgICAgIG1heD1cIjNcIlxyXG4gICAgICAgICAgICBzdGVwPVwiMVwiXHJcbiAgICAgICAgICAgIGxpc3Q9XCJudW1iZXJcIi8+ICovfVxyXG4gICAgICAgICAgey8qIDxkYXRhbGlzdCBjbGFzc05hbWU9J3JhbmdlX19saXN0JyBpZD1cIm51bWJlclwiPlxyXG4gICAgICAgICAgICA8b3B0aW9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlU3Jva0J0bignMScpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHJhbmdlX19vcHQgb3B0MCAke3Nyb2sgPT09ICcxJyAmJiAnYWN0aXZlJ31gfT4xPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VTcm9rQnRuKCcyJyl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcmFuZ2VfX29wdCAke3Nyb2sgPT09ICcyJyAmJiAnYWN0aXZlJ31gfT4yPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VTcm9rQnRuKCczJyl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcmFuZ2VfX29wdCAke3Nyb2sgPT09ICczJyAmJiAnYWN0aXZlJ31gfT4zPC9vcHRpb24+ICovfVxyXG4gICAgICAgICAgICB7LyogPG9wdGlvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZVNyb2tCdG4oJzQnKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2ByYW5nZV9fb3B0ICR7c3JvayA9PT0gJzQnICYmICdhY3RpdmUnfWB9PjQ8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZVNyb2tCdG4oJzUnKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2ByYW5nZV9fb3B0ICR7c3JvayA9PT0gJzUnICYmICdhY3RpdmUnfWB9PjU8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZVNyb2tCdG4oJzYnKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2ByYW5nZV9fb3B0ICR7c3JvayA9PT0gJzYnICYmICdhY3RpdmUnfWB9PjY8L29wdGlvbj4gKi99XHJcbiAgICAgICAgICB7LyogPC9kYXRhbGlzdD4gKi99XHJcbiAgICAgICAgey8qIDwvZGl2PiAqL31cclxuey8qIH0gKi99XHJcbiAgICAgICAgey8qIHshcHJlZG9wbGF0YSAmJiA8ZGl2IGNsYXNzTmFtZT0ncGF5bWVudF9kYXRlJz5cclxuICAgICAgICAgIDxzdHJvbmc+0JTQtdC90Ywg0L7Qv9C70LDRgtGLINC00L4ge3BheW1lbnREYXRlfVxyXG4gICAgICAgICAgPC9zdHJvbmc+XHJcbiAgICAgICAgPC9kaXY+fSAqL31cclxuXHJcbiAgICAgICAgey8qIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT0nbnVtYmVyJ1xyXG4gICAgICAgICAgY2xhc3NOYW1lPSdzdW1tYSdcclxuICAgICAgICAgIHZhbHVlPXtzdW1tYX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFN1bW1hKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPSfQodGD0LzQvNCwINC+0L/Qu9Cw0YLRiycvPiAqL31cclxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9J3BheW1lbnRfYW1vdW50Jz4gKi99XHJcbiAgICAgICAgICB7LyogPHA+0KHRg9C80LzQsCDQvtC/0LvQsNGC0Ys6PC9wPiAqL31cclxuICAgICAgICAgIHsvKiA8ZGl2PiAqL31cclxuICAgICAgICAgICAgey8qIDxzdHJvbmc+e2Ftb3VudFNwYWNlKGAke2Rpc2NvdW50fWApfdGC0LM8L3N0cm9uZz4gKi99XHJcbiAgICAgICAgICAgIHsvKiA8c3BhbiBjbGFzcz1cInByaWNlLS1saW5lLXRocm91Z2hcIj57YW1vdW50U3BhY2UoYCR7c3VtbWF9YCl90YLQszwvc3Bhbj4gKi99XHJcbiAgICAgICAgICB7LyogPC9kaXY+ICovfVxyXG4gICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPSdkaXNjb3VudCc+ICovfVxyXG4gICAgICAgICAgICB7LyogPGltZyBzcmM9Jy9pbWcvZGlzY291bnQucG5nJy8+ICovfVxyXG4gICAgICAgICAgICB7LyogPHA+LTUwJSAqL31cclxuICAgICAgICAgICAgICB7LyogPHNwYW4+0KHQmtCY0JTQmtCQPC9zcGFuPiAqL31cclxuICAgICAgICAgICAgey8qIDwvcD4gKi99XHJcbiAgICAgICAgICB7LyogPC9kaXY+ICovfVxyXG4gICAgICAgIHsvKiA8L2Rpdj4gKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NoZWNrX2dyb3Vwcyc+XHJcbiAgICAgICAgICA8ZGl2IGRhdGEtbmFtZT0ncHJlZG9wbGF0YScgY2xhc3NOYW1lPSdjaGVjay1ncm91cCc+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdjaGVja2JveCcgY2hlY2tlZD17ZG9jcy5kb2MxfS8+XHJcbiAgICAgICAgICAgIDxsYWJlbCBvbkNsaWNrPXsoZSkgPT4gY2hlY2tEb2MoZSl9IGRhdGEtbmFtZT0nZG9jMScgY2xhc3NOYW1lPSdjaGVja2xhYmVsJz48L2xhYmVsPlxyXG4gICAgICAgICAgICB7dG9rZW5cclxuICAgICAgICAgICAgICA/IDxhIGhyZWY9e2AvZG9nb3Zvcm9icmFib3RrYT90b2tlbj0ke3Rva2VufWB9IHRhcmdldD0nX19ibGFuayc+0KHQvtCz0LvQsNGB0LjQtSDQvdCwINGB0LHQvtGAINC4INC+0LHRgNCw0LHQvtGC0LrRgyDQuNC90YTQvtGA0LzQsNGG0LjQuDwvYT5cclxuICAgICAgICAgICAgICA6IDxhIGhyZWY9e2AvZG9nb3Zvcm9icmFib3RrYWB9IHRhcmdldD0nX19ibGFuayc+0JfQsNC/0YDQvtGBINC90LAg0L7QsdGA0LDQsdC+0YLQutGDINC/0LXRgNGB0L7QvdCw0LvRjNC90YvRhSDQtNCw0L3QvdGL0YU8L2E+fVxyXG5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIDxkaXYgZGF0YS1uYW1lPSdwb3N0b3BsYXRhJyBjbGFzc05hbWU9J2NoZWNrLWdyb3VwJz5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J2NoZWNrYm94JyBjaGVja2VkPXtkb2NzLmRvYzJ9Lz5cclxuICAgICAgICAgICAgPGxhYmVsIG9uQ2xpY2s9eyhlKSA9PiBjaGVja0RvYyhlKX0gY2xhc3NOYW1lPSdjaGVja2xhYmVsJyBkYXRhLW5hbWU9J2RvYzInPjwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICA8YSBocmVmPScv0J/Qo9CR0JvQmNCn0J3QkNCvINCe0KTQldCg0KLQkC5wZGYnIHRhcmdldD0nX19ibGFuayc+0JTQvtCz0L7QstC+0YAg0L/Rg9Cx0LvQuNGH0L3QvtC5INC+0YTQtdGA0YLRizwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgZGF0YS1uYW1lPSdwcmVkb3BsYXRhJyBjbGFzc05hbWU9J2NoZWNrLWdyb3VwJz5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J2NoZWNrYm94JyBjaGVja2VkPXtkb2NzLmRvYzR9Lz5cclxuICAgICAgICAgICAgPGxhYmVsIG9uQ2xpY2s9eyhlKSA9PiBjaGVja0RvYyhlKX0gY2xhc3NOYW1lPSdjaGVja2xhYmVsJyBkYXRhLW5hbWU9J2RvYzQnPjwvbGFiZWw+XHJcbiAgICAgICAgICAgIHt0b2tlblxyXG4gICAgICAgICAgICAgID8gPGFcclxuICAgICAgICAgICAgICAgICAgaHJlZj17YC9kb2dvdm9yP3BheW1lbnREYXRlPSR7cGF5bWVudERhdGV9JnBlcmlvZD0ke3Nyb2t9JnRva2VuPSR7dG9rZW59YH1cclxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfX2JsYW5rJz7QlNC+0LPQvtCy0L7RgCDQvdCwINC30LDQutCw0Lcg0L3QsNGA0Y/QtDwvYT5cclxuICAgICAgICAgICAgICA6IDxhIGhyZWY9e2AvZG9nb3Zvcj9wYXltZW50RGF0ZT0ke3BheW1lbnREYXRlfSZwZXJpb2Q9JHtzcm9rfWB9IHRhcmdldD0nX19ibGFuayc+0JTQvtCz0L7QstC+0YAg0L3QsCDQt9Cw0LrQsNC3INC90LDRgNGP0LQ8L2E+fVxyXG5cclxuICAgICAgICAgIDwvZGl2PiAqL31cclxuXHJcbiAgICAgICAgICB7ZG9jcy5kb2MxID09PSBmYWxzZVxyXG4gICAgICAgICAgICA/IDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVGb2N1cygpfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdidXR0b24gYnV0dG9uX2xpZ2h0ZXN0J1xyXG4gICAgICAgICAgICAgICAgdmFsdWU9J9Cf0L7Qu9GD0YfQuNGC0Ywg0YDQtdC30YPQu9GM0YLQsNGCJy8+XHJcbiAgICAgICAgICAgIDogPGlucHV0IHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPSdidXR0b24nIHZhbHVlPSfQn9C+0LvRg9GH0LjRgtGMINGA0LXQt9GD0LvRjNGC0LDRgicvPlxyXG59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgIDxDb2RlTW9kYWxcclxuICAgICAgICBpc01vZGFsT3Blbj17bW9kYWx9XHJcbiAgICAgICAgY2xvc2VNb2RhbD17Y2xvc2VNb2RhbH1cclxuICAgICAgICBjb2RlPXtjb2RlfVxyXG4gICAgICAgIHNldENvZGU9e3NldENvZGV9XHJcbiAgICAgICAgb25GaXJzdFN0ZXA9e3NlbmRDb2RlQ2hlY2t9XHJcbiAgICAgICAgZ2V0SWRlbnRpZmljYXRpb249e3JlcGVhdENvZGV9XHJcbiAgICAgICAgZXJyb3I9e2Vycm9yQ29kZX0vPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdChjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbnVsbCkoVGhpcmRTdGVwKSkiXSwic291cmNlUm9vdCI6IiJ9