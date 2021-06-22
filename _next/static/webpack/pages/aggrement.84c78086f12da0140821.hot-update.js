self["webpackHotUpdate_N_E"]("pages/aggrement",{

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
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "E:\\job\\nashcompany\\components\\getservice\\ThirdStep.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var ThirdStep = function ThirdStep(_ref) {
  _s();

  var _jsxDEV2, _jsxDEV3;

  var setLoading = _ref.setLoading;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  var id = router.query.id;
  var pathname = router.pathname;
  var amount = router.query.amount;
  var token = router.query.token;
  var leadID = router.query.leadID;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      aggrId = _useState[0],
      setAggrId = _useState[1];

  var finalID = id || leadID;
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    var summa = js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get('amount') !== undefined ? js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get('amount') : amount;
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
    if (pathname === '/aggrement') {
      axios__WEBPACK_IMPORTED_MODULE_2___default().get("".concat("https://crediter.kz/api", "/getDataSign?token=").concat(token)).then(function (res) {
        if (JSON.stringify(res.data) === '{}') {
          // console.log('true')
          router.push('/');
        } else {
          console.log('false');
        }
      });
    }
  }, []);

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),
      summa = _useState2[0],
      setSumma = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),
      discount = _useState3[0],
      setDiscount = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      predoplata = _useState4[0],
      setOplata = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)((0,_defaults_extraFunction__WEBPACK_IMPORTED_MODULE_7__.parseDate)(1)),
      paymentDate = _useState5[0],
      setPaymentDate = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
    "doc1": true,
    "doc2": true,
    "doc3": true,
    "doc4": true
  }),
      docs = _useState6[0],
      setDocs = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('1'),
      srok = _useState7[0],
      setSrok = _useState7[1];

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
        id: finalID,
        typePayment: predoplata ? 'Предоплата' : 'Постоплата',
        period: srok,
        date_payment: paymentDate,
        amountPayment: discount
      }
    }).then(function (res) {
      console.log(res);
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
  }; // const dogovorobrabotka = () => {
  //   if(pathname === '/aggrement') {
  //     return `/dogovorobrabotka?token=${token}`
  //   }
  //   if(pathname === '/cabinet/continue') {
  //     return `/dogovorobrabotka?id=${id}`
  //   }
  //   else {
  //     return '/dogovorobrabotka'
  //   }
  // }


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "form_register thirdstep",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      onSubmit: function onSubmit(e) {
        return finalSubmit(e);
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
          lineNumber: 190,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          className: "radiolabel",
          children: "\u041F\u043E\u0441\u0442\u043E\u043F\u043B\u0430\u0442\u0430"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 13
        }, _this)]), _jsxDEV2), void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 185,
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
          lineNumber: 199,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          className: "radiolabel",
          children: "\u041F\u0440\u0435\u0434\u043E\u043F\u043B\u0430\u0442\u0430"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 13
        }, _this)]), _jsxDEV3), void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 9
      }, _this), !predoplata && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "range",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "srok_month",
          children: "\u0421\u0440\u043E\u043A \u043E\u043F\u043B\u0430\u0442\u044B (\u043C\u0435\u0441\u044F\u0446)"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 206,
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
          lineNumber: 207,
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
            lineNumber: 217,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            onClick: function onClick() {
              return changeSrokBtn('2');
            },
            className: "range__opt ".concat(srok === '2' && 'active'),
            children: "2"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 220,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            onClick: function onClick() {
              return changeSrokBtn('3');
            },
            className: "range__opt ".concat(srok === '3' && 'active'),
            children: "3"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 223,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 25
      }, _this), !predoplata && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "payment_date",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
          children: ["\u0414\u0435\u043D\u044C \u043E\u043F\u043B\u0430\u0442\u044B \u0434\u043E ", paymentDate]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 239,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 25
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "payment_amount",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "\u0421\u0443\u043C\u043C\u0430 \u043E\u043F\u043B\u0430\u0442\u044B:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 250,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
            children: [(0,_defaults_extraFunction__WEBPACK_IMPORTED_MODULE_7__.amountSpace)("".concat(discount)), "\u0442\u0433"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 252,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            "class": "price--line-through",
            children: [(0,_defaults_extraFunction__WEBPACK_IMPORTED_MODULE_7__.amountSpace)("".concat(summa)), "\u0442\u0433"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 253,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 251,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "discount",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: ["-50%", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: "\u0421\u041A\u0418\u0414\u041A\u0410"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 258,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 257,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 255,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 249,
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
            lineNumber: 264,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            onClick: function onClick(e) {
              return checkDoc(e);
            },
            "data-name": "doc1",
            className: "checklabel"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 265,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "/dogovorobrabotka?token=".concat(token),
            target: "__blank",
            children: "\u0417\u0430\u043F\u0440\u043E\u0441 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 268,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 263,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "data-name": "postoplata",
          className: "check-group",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "checkbox",
            checked: docs.doc2
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 271,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            onClick: function onClick(e) {
              return checkDoc(e);
            },
            className: "checklabel",
            "data-name": "doc2"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 272,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "/\u041F\u0423\u0411\u041B\u0418\u0427\u041D\u0410\u042F \u041E\u0424\u0415\u0420\u0422\u0410.pdf",
            target: "__blank",
            children: "\u0414\u043E\u0433\u043E\u0432\u043E\u0440 \u043F\u0443\u0431\u043B\u0438\u0447\u043D\u043E\u0439 \u043E\u0444\u0435\u0440\u0442\u044B"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 275,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 270,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "data-name": "predoplata",
          className: "check-group",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "checkbox",
            checked: docs.doc4
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 279,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            onClick: function onClick(e) {
              return checkDoc(e);
            },
            className: "checklabel",
            "data-name": "doc4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 280,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "/dogovor?paymentDate=".concat(paymentDate, "&period=").concat(srok),
            target: "__blank",
            children: "\u0414\u043E\u0433\u043E\u0432\u043E\u0440 \u043D\u0430 \u0437\u0430\u043A\u0430\u0437 \u043D\u0430\u0440\u044F\u0434"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 283,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 278,
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
          lineNumber: 289,
          columnNumber: 15
        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "submit",
          className: "button",
          value: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 295,
          columnNumber: 15
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 182,
    columnNumber: 5
  }, _this);
};

_s(ThirdStep, "KkDMhq99FsI7H9fx7qQMLgUU6PY=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter];
});

_c = ThirdStep;
/* harmony default export */ __webpack_exports__["default"] = (ThirdStep);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRzZXJ2aWNlL1RoaXJkU3RlcC5qcyJdLCJuYW1lcyI6WyJUaGlyZFN0ZXAiLCJzZXRMb2FkaW5nIiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJxdWVyeSIsInBhdGhuYW1lIiwiYW1vdW50IiwidG9rZW4iLCJsZWFkSUQiLCJ1c2VTdGF0ZSIsImFnZ3JJZCIsInNldEFnZ3JJZCIsImZpbmFsSUQiLCJ1c2VFZmZlY3QiLCJzdW1tYSIsImNvb2tpZSIsInVuZGVmaW5lZCIsImZpbmFsU3VtbWEiLCJNYXRoIiwiZmxvb3IiLCJwYXJzZUludCIsImRpc2NvdW50U3VtbWEiLCJzZXRTdW1tYSIsInNldERpc2NvdW50IiwiY29uc29sZSIsImxvZyIsImF4aW9zIiwicHJvY2VzcyIsInRoZW4iLCJyZXMiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInB1c2giLCJkaXNjb3VudCIsInByZWRvcGxhdGEiLCJzZXRPcGxhdGEiLCJwYXJzZURhdGUiLCJwYXltZW50RGF0ZSIsInNldFBheW1lbnREYXRlIiwiZG9jcyIsInNldERvY3MiLCJzcm9rIiwic2V0U3JvayIsImNoZWNrRG9jIiwiZSIsIm5hbWUiLCJ0YXJnZXQiLCJkYXRhc2V0IiwiY2hhbmdlT3BsYXRhIiwiZ2V0QXR0cmlidXRlIiwiY2hhbmdlU3JvayIsIm1vbnRoIiwidmFsdWUiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsTGVmdCIsImNoYW5nZVNyb2tCdG4iLCJtb250aFZhbCIsInNjcm9sbFJpZ2h0IiwiYWdncmVtZW50U2JtdCIsInByZXZlbnREZWZhdWx0IiwicGFyYW1zIiwidHlwZVBheW1lbnQiLCJwZXJpb2QiLCJkYXRlX3BheW1lbnQiLCJhbW91bnRQYXltZW50Iiwic3RlcFRoaXJkIiwib2JqZWN0IiwidXRtX3NvdXJjZSIsImNsaWNrX2lkIiwic3VjY2VzcyIsInN3YWwiLCJSb3V0ZXIiLCJmaW5hbFN1Ym1pdCIsImFtb3VudFNwYWNlIiwiZG9jMSIsImRvYzIiLCJkb2M0IiwiT2JqZWN0Iiwia2V5cyIsInNvbWUiLCJrIiwiaGFuZGxlRm9jdXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFrQjtBQUFBOztBQUFBOztBQUFBLE1BQWhCQyxVQUFnQixRQUFoQkEsVUFBZ0I7QUFDbEMsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQURrQyxNQUUzQkMsRUFGMkIsR0FFckJGLE1BQU0sQ0FBQ0csS0FGYyxDQUUzQkQsRUFGMkI7QUFHbEMsTUFBTUUsUUFBUSxHQUFHSixNQUFNLENBQUNJLFFBQXhCO0FBSGtDLE1BSTNCQyxNQUoyQixHQUlqQkwsTUFBTSxDQUFDRyxLQUpVLENBSTNCRSxNQUoyQjtBQUFBLE1BSzNCQyxLQUwyQixHQUtsQk4sTUFBTSxDQUFDRyxLQUxXLENBSzNCRyxLQUwyQjtBQUFBLE1BTTNCQyxNQU4yQixHQU1qQlAsTUFBTSxDQUFDRyxLQU5VLENBTTNCSSxNQU4yQjs7QUFBQSxrQkFPTkMsK0NBQVEsQ0FBQyxFQUFELENBUEY7QUFBQSxNQU8zQkMsTUFQMkI7QUFBQSxNQU9uQkMsU0FQbUI7O0FBUWxDLE1BQU1DLE9BQU8sR0FBR1QsRUFBRSxJQUFJSyxNQUF0QjtBQUNBSyxrREFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxLQUFLLEdBQUdDLG9EQUFBLENBQVcsUUFBWCxNQUF5QkMsU0FBekIsR0FBcUNELG9EQUFBLENBQVcsUUFBWCxDQUFyQyxHQUE0RFQsTUFBMUU7QUFDQSxRQUFNVyxVQUFVLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxRQUFRLENBQUNOLEtBQUQsQ0FBUixHQUFrQixHQUE3QixDQUFuQjtBQUNBLFFBQU1PLGFBQWEsR0FBR0gsSUFBSSxDQUFDQyxLQUFMLENBQVdDLFFBQVEs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LGVBL0VGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FGRjtBQTRIRCxDQXhTRDs7R0FBTXJGLFM7VUFDV0csa0Q7OztLQURYSCxTO0FBMFNOLCtEQUFlQSxTQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FnZ3JlbWVudC44NGM3ODA4NmYxMmRhMDE0MDgyMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnXHJcbmltcG9ydCBSb3V0ZXIse3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBzd2FsIGZyb20gJ3N3ZWV0YWxlcnQnXHJcbmltcG9ydCB7YW1vdW50U3BhY2UsIGhhbmRsZUZvY3VzLCBwYXJzZURhdGV9IGZyb20gXCIuLi8uLi9kZWZhdWx0cy9leHRyYUZ1bmN0aW9uXCJcclxuXHJcbmNvbnN0IFRoaXJkU3RlcCA9ICh7c2V0TG9hZGluZ30pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHtpZH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3QgcGF0aG5hbWUgPSByb3V0ZXIucGF0aG5hbWVcclxuICBjb25zdCB7YW1vdW50fSA9IHJvdXRlci5xdWVyeVxyXG4gIGNvbnN0IHt0b2tlbn0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCB7bGVhZElEfSA9IHJvdXRlci5xdWVyeVxyXG4gIGNvbnN0IFthZ2dySWQsIHNldEFnZ3JJZF0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBmaW5hbElEID0gaWQgfHwgbGVhZElEXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHN1bW1hID0gY29va2llLmdldCgnYW1vdW50JykgIT09IHVuZGVmaW5lZCA/IGNvb2tpZS5nZXQoJ2Ftb3VudCcpIDogYW1vdW50XHJcbiAgICBjb25zdCBmaW5hbFN1bW1hID0gTWF0aC5mbG9vcihwYXJzZUludChzdW1tYSkgKiAwLjIpXHJcbiAgICBjb25zdCBkaXNjb3VudFN1bW1hID0gTWF0aC5mbG9vcihwYXJzZUludChmaW5hbFN1bW1hKSAvIDIpXHJcbiAgICBpZiAoZmluYWxTdW1tYSA+IDIwMDAwMCkge1xyXG4gICAgICBzZXRTdW1tYShmaW5hbFN1bW1hKVxyXG4gICAgICBzZXREaXNjb3VudChkaXNjb3VudFN1bW1hKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0U3VtbWEoMjAwMDAwKVxyXG4gICAgICBzZXREaXNjb3VudCgxMDAwMDApXHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhmaW5hbFN1bW1hKVxyXG4gIH0sIFtjb29raWUuZ2V0KCdhbW91bnQnKV0pXHJcblxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYocGF0aG5hbWUgPT09ICcvYWdncmVtZW50Jykge1xyXG4gICAgICBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L2dldERhdGFTaWduP3Rva2VuPSR7dG9rZW59YClcclxuICAgICAgICAudGhlbihyZXM9PiB7XHJcbiAgICAgICAgICBpZihKU09OLnN0cmluZ2lmeShyZXMuZGF0YSkgPT09ICd7fScpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3RydWUnKVxyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmYWxzZScpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gIH0sW10pXHJcblxyXG4gIGNvbnN0IFtzdW1tYSxcclxuICAgIHNldFN1bW1hXSA9IHVzZVN0YXRlKDApXHJcbiAgY29uc3QgW2Rpc2NvdW50LFxyXG4gICAgc2V0RGlzY291bnRdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbcHJlZG9wbGF0YSxcclxuICAgIHNldE9wbGF0YV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbcGF5bWVudERhdGUsXHJcbiAgICBzZXRQYXltZW50RGF0ZV0gPSB1c2VTdGF0ZShwYXJzZURhdGUoMSkpXHJcbiAgY29uc3QgW2RvY3MsXHJcbiAgICBzZXREb2NzXSA9IHVzZVN0YXRlKHtcImRvYzFcIjogdHJ1ZSwgXCJkb2MyXCI6IHRydWUsIFwiZG9jM1wiOiB0cnVlLCBcImRvYzRcIjogdHJ1ZX0pXHJcbiAgY29uc3QgW3Nyb2ssXHJcbiAgICBzZXRTcm9rXSA9IHVzZVN0YXRlKCcxJylcclxuICBjb25zdCBjaGVja0RvYyA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBuYW1lID0gZS50YXJnZXQuZGF0YXNldC5uYW1lXHJcbiAgICAvLyBjb25zb2xlLmxvZyhkb2NzW25hbWVdKVxyXG4gICAgc2V0RG9jcyh7XHJcbiAgICAgIC4uLmRvY3MsXHJcbiAgICAgIFtuYW1lXTogIWRvY3NbbmFtZV1cclxuICAgIH0pXHJcbiAgICBjb25zb2xlLmxvZyhkb2NzKVxyXG5cclxuICB9XHJcbiAgY29uc3QgY2hhbmdlT3BsYXRhID0gKGUpID0+IHtcclxuICAgIGNvbnN0IG5hbWUgPSBlXHJcbiAgICAgIC50YXJnZXRcclxuICAgICAgLmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJylcclxuICAgIHNldE9wbGF0YSghcHJlZG9wbGF0YSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGNoYW5nZVNyb2sgPSBlID0+IHtcclxuICAgIGNvbnN0IG1vbnRoID0gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUpXHJcbiAgICBzZXRTcm9rKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgc2V0UGF5bWVudERhdGUocGFyc2VEYXRlKG1vbnRoKSlcclxuICAgIGlmKGUudGFyZ2V0LnZhbHVlPjIpIHtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYW5nZV9fbGlzdCcpXHJcbiAgICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCA9IC0zMDA7XHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFuZ2VfX2xpc3QnKVxyXG4gICAgICBlbGVtZW50LnNjcm9sbExlZnQgPSAzMDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGFuZ2VTcm9rQnRuID0gKG1vbnRoKSA9PiB7XHJcbiAgICBjb25zdCBtb250aFZhbCA9IHBhcnNlSW50KG1vbnRoKVxyXG4gICAgc2V0U3Jvayhtb250aClcclxuICAgIHNldFBheW1lbnREYXRlKHBhcnNlRGF0ZShtb250aFZhbCkpXHJcbiAgICBpZihtb250aFZhbD4zKSB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFuZ2VfX2xpc3QnKVxyXG4gICAgICBlbGVtZW50LnNjcm9sbExlZnQgPSAyMDA7XHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFuZ2VfX2xpc3QnKVxyXG4gICAgICBlbGVtZW50LnNjcm9sbFJpZ2h0ID0gMjAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgYWdncmVtZW50U2JtdCA9IGUgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L3JlbW92ZVNob3J0VXJsYCwge3BhcmFtczoge1xyXG4gICAgICBpZDogZmluYWxJRCxcclxuICAgICAgdHlwZVBheW1lbnQ6IHByZWRvcGxhdGFcclxuICAgICAgPyAn0J/RgNC10LTQvtC/0LvQsNGC0LAnXHJcbiAgICAgIDogJ9Cf0L7RgdGC0L7Qv9C70LDRgtCwJyxcclxuICAgICAgcGVyaW9kOiBzcm9rLFxyXG4gICAgICBkYXRlX3BheW1lbnQ6IHBheW1lbnREYXRlLFxyXG4gICAgICBhbW91bnRQYXltZW50OiBkaXNjb3VudCxcclxuICAgIH19KVxyXG4gICAgICAudGhlbihyZXM9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuIFxyXG4gIGNvbnN0IHN0ZXBUaGlyZCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGNvbnN0IG9iamVjdCA9IHtcclxuICAgICAgaWQ6IGNvb2tpZS5nZXQoJ2xlYWRfaWQnKSA9PT0gdW5kZWZpbmVkID8gZmluYWxJRCA6IGNvb2tpZS5nZXQoJ2xlYWRfaWQnKSxcclxuICAgICAgdG9rZW46IGNvb2tpZS5nZXQoJ3Rva2VuJyksXHJcbiAgICAgIGFtb3VudFBheW1lbnQ6IGRpc2NvdW50LFxyXG4gICAgICBkYXRlX3BheW1lbnQ6IHBheW1lbnREYXRlLFxyXG4gICAgICBwZXJpb2Q6IHNyb2ssXHJcbiAgICAgIHR5cGVQYXltZW50OiBwcmVkb3BsYXRhXHJcbiAgICAgICAgPyAn0J/RgNC10LTQvtC/0LvQsNGC0LAnXHJcbiAgICAgICAgOiAn0J/QvtGB0YLQvtC/0LvQsNGC0LAnXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNvb2tpZS5nZXQoJ3V0bV9zb3VyY2UnKSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIG9iamVjdC51dG1fc291cmNlID0gY29va2llLmdldCgndXRtX3NvdXJjZScpXHJcbiAgICAgIG9iamVjdC5jbGlja19pZCA9IGNvb2tpZS5nZXQoJ2NsaWNrX2lkJylcclxuICAgICAgLy8gb2JqZWN0LndlYklEID0gY29va2llLmdldCgnd2ViX2lkJylcclxuICAgIH1cclxuICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgIGF4aW9zXHJcbiAgICAgIC5nZXQoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L3N0ZXBUaHJlZWAsIHtwYXJhbXM6IG9iamVjdH0pXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgIHN3YWwoXCLQo9GB0L/QtdGI0L3QviFcIiwgYNCS0LDRiNCwINC30LDRj9Cy0LrQsCDQvtGC0L/RgNCw0LLQu9C10L3QsCDQsiBOYXNoIENvbXBhbnkuINCS0LDQvCDRgdC10LnRh9Cw0YEg0L/QtdGA0LXQt9Cy0L7QvdGP0YIg0YEg0L3QvtC80LXRgNCwICs3KDcwMCkzNTAtNTAtMDBgLCBcInN1Y2Nlc3NcIikudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvY2FiaW5ldC9yZXF1ZXN0cycpXHJcbiAgICAgICAgICAgIGNvb2tpZS5yZW1vdmUoJ2xlYWRfaWQnKVxyXG4gICAgICAgICAgICBjb29raWUucmVtb3ZlKCdzdGVwJylcclxuICAgICAgICAgICAgY29va2llLnJlbW92ZSgndXRtX21lZGl1bScpXHJcbiAgICAgICAgICAgIGNvb2tpZS5yZW1vdmUoJ3V0bV9zb3VyY2UnKVxyXG4gICAgICAgICAgICBjb29raWUucmVtb3ZlKCd1dG1fY2FtcGFpZ24nKVxyXG4gICAgICAgICAgICBjb29raWUucmVtb3ZlKCdjbGlja19pZCcpXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBmaW5hbFN1Ym1pdCA9IGUgPT4ge1xyXG4gICAgaWYocGF0aG5hbWUgPT09ICcvYWdncmVtZW50Jykge1xyXG4gICAgICBhZ2dyZW1lbnRTYm10KGUpXHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgIHN0ZXBUaGlyZChlKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgXHJcblxyXG4gIC8vIGNvbnN0IGRvZ292b3JvYnJhYm90a2EgPSAoKSA9PiB7XHJcbiAgLy8gICBpZihwYXRobmFtZSA9PT0gJy9hZ2dyZW1lbnQnKSB7XHJcbiAgLy8gICAgIHJldHVybiBgL2RvZ292b3JvYnJhYm90a2E/dG9rZW49JHt0b2tlbn1gXHJcbiAgLy8gICB9XHJcbiAgLy8gICBpZihwYXRobmFtZSA9PT0gJy9jYWJpbmV0L2NvbnRpbnVlJykge1xyXG4gIC8vICAgICByZXR1cm4gYC9kb2dvdm9yb2JyYWJvdGthP2lkPSR7aWR9YFxyXG4gIC8vICAgfVxyXG4gIC8vICAgZWxzZSB7XHJcbiAgLy8gICAgIHJldHVybiAnL2RvZ292b3JvYnJhYm90a2EnXHJcbiAgLy8gICB9XHJcbiAgLy8gfVxyXG4gIHJldHVybiAoXHJcblxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2Zvcm1fcmVnaXN0ZXIgdGhpcmRzdGVwJz5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKSA9PiBmaW5hbFN1Ym1pdChlKX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JhZGlvX2dyb3Vwcyc+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0ncG9zdG9wbGF0YSdcclxuICAgICAgICAgICAgZGF0YS1uYW1lPSdwb3N0b3BsYXRhJ1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9J2NoZWNrLWdyb3VwJ1xyXG4gICAgICAgICAgICBvbkNsaWNrPXtlID0+IGNoYW5nZU9wbGF0YShlKX0+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdjaGVja2JveCcgY2hlY2tlZD17cHJlZG9wbGF0YSA9PT0gZmFsc2V9Lz5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0ncmFkaW9sYWJlbCc+0J/QvtGB0YLQvtC/0LvQsNGC0LA8L2xhYmVsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9J3ByZWRvcGxhdGEnXHJcbiAgICAgICAgICAgIGRhdGEtbmFtZT0ncHJlZG9wbGF0YSdcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdjaGVjay1ncm91cCdcclxuICAgICAgICAgICAgb25DbGljaz17ZSA9PiBjaGFuZ2VPcGxhdGEoZSl9PlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0nY2hlY2tib3gnIGNoZWNrZWQ9e3ByZWRvcGxhdGEgPT09IHRydWV9Lz5cclxuXHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J3JhZGlvbGFiZWwnPtCf0YDQtdC00L7Qv9C70LDRgtCwPC9sYWJlbD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7IXByZWRvcGxhdGEgJiYgPGRpdiBjbGFzc05hbWU9XCJyYW5nZVwiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSdzcm9rX21vbnRoJz7QodGA0L7QuiDQvtC/0LvQsNGC0YsgKNC80LXRgdGP0YYpPC9wPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJhbmdlX19pbnB1dFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtzcm9rfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBjaGFuZ2VTcm9rKGUpfVxyXG4gICAgICAgICAgICBtaW49XCIxXCJcclxuICAgICAgICAgICAgbWF4PVwiM1wiXHJcbiAgICAgICAgICAgIHN0ZXA9XCIxXCJcclxuICAgICAgICAgICAgbGlzdD1cIm51bWJlclwiLz5cclxuICAgICAgICAgIDxkYXRhbGlzdCBjbGFzc05hbWU9J3JhbmdlX19saXN0JyBpZD1cIm51bWJlclwiPlxyXG4gICAgICAgICAgICA8b3B0aW9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlU3Jva0J0bignMScpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHJhbmdlX19vcHQgb3B0MCAke3Nyb2sgPT09ICcxJyAmJiAnYWN0aXZlJ31gfT4xPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VTcm9rQnRuKCcyJyl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcmFuZ2VfX29wdCAke3Nyb2sgPT09ICcyJyAmJiAnYWN0aXZlJ31gfT4yPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VTcm9rQnRuKCczJyl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcmFuZ2VfX29wdCAke3Nyb2sgPT09ICczJyAmJiAnYWN0aXZlJ31gfT4zPC9vcHRpb24+XHJcbiAgICAgICAgICAgIHsvKiA8b3B0aW9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlU3Jva0J0bignNCcpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHJhbmdlX19vcHQgJHtzcm9rID09PSAnNCcgJiYgJ2FjdGl2ZSd9YH0+NDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlU3Jva0J0bignNScpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHJhbmdlX19vcHQgJHtzcm9rID09PSAnNScgJiYgJ2FjdGl2ZSd9YH0+NTwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlU3Jva0J0bignNicpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHJhbmdlX19vcHQgJHtzcm9rID09PSAnNicgJiYgJ2FjdGl2ZSd9YH0+Njwvb3B0aW9uPiAqL31cclxuICAgICAgICAgIDwvZGF0YWxpc3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbn1cclxuICAgICAgICB7IXByZWRvcGxhdGEgJiYgPGRpdiBjbGFzc05hbWU9J3BheW1lbnRfZGF0ZSc+XHJcbiAgICAgICAgICA8c3Ryb25nPtCU0LXQvdGMINC+0L/Qu9Cw0YLRiyDQtNC+IHtwYXltZW50RGF0ZX1cclxuICAgICAgICAgIDwvc3Ryb25nPlxyXG4gICAgICAgIDwvZGl2Pn1cclxuXHJcbiAgICAgICAgey8qIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT0nbnVtYmVyJ1xyXG4gICAgICAgICAgY2xhc3NOYW1lPSdzdW1tYSdcclxuICAgICAgICAgIHZhbHVlPXtzdW1tYX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFN1bW1hKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPSfQodGD0LzQvNCwINC+0L/Qu9Cw0YLRiycvPiAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5bWVudF9hbW91bnQnPlxyXG4gICAgICAgICAgPHA+0KHRg9C80LzQsCDQvtC/0LvQsNGC0Ys6PC9wPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHN0cm9uZz57YW1vdW50U3BhY2UoYCR7ZGlzY291bnR9YCl90YLQszwvc3Ryb25nPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByaWNlLS1saW5lLXRocm91Z2hcIj57YW1vdW50U3BhY2UoYCR7c3VtbWF9YCl90YLQszwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Rpc2NvdW50Jz5cclxuICAgICAgICAgICAgey8qIDxpbWcgc3JjPScvaW1nL2Rpc2NvdW50LnBuZycvPiAqL31cclxuICAgICAgICAgICAgPHA+LTUwJVxyXG4gICAgICAgICAgICAgIDxzcGFuPtCh0JrQmNCU0JrQkDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NoZWNrX2dyb3Vwcyc+XHJcbiAgICAgICAgICA8ZGl2IGRhdGEtbmFtZT0ncHJlZG9wbGF0YScgY2xhc3NOYW1lPSdjaGVjay1ncm91cCc+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdjaGVja2JveCcgY2hlY2tlZD17ZG9jcy5kb2MxfS8+XHJcbiAgICAgICAgICAgIDxsYWJlbCBvbkNsaWNrPXsoZSkgPT4gY2hlY2tEb2MoZSl9IGRhdGEtbmFtZT0nZG9jMScgY2xhc3NOYW1lPSdjaGVja2xhYmVsJz5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxhIGhyZWY9e2AvZG9nb3Zvcm9icmFib3RrYT90b2tlbj0ke3Rva2VufWB9ICB0YXJnZXQ9J19fYmxhbmsnPtCX0LDQv9GA0L7RgSDQvdCwINC+0LHRgNCw0LHQvtGC0LrRgyDQv9C10YDRgdC+0L3QsNC70YzQvdGL0YUg0LTQsNC90L3Ri9GFPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGRhdGEtbmFtZT0ncG9zdG9wbGF0YScgY2xhc3NOYW1lPSdjaGVjay1ncm91cCc+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdjaGVja2JveCcgY2hlY2tlZD17ZG9jcy5kb2MyfS8+XHJcbiAgICAgICAgICAgIDxsYWJlbCBvbkNsaWNrPXsoZSkgPT4gY2hlY2tEb2MoZSl9IGNsYXNzTmFtZT0nY2hlY2tsYWJlbCcgZGF0YS1uYW1lPSdkb2MyJz5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxhIGhyZWY9Jy/Qn9Cj0JHQm9CY0KfQndCQ0K8g0J7QpNCV0KDQotCQLnBkZicgdGFyZ2V0PSdfX2JsYW5rJz7QlNC+0LPQvtCy0L7RgCDQv9GD0LHQu9C40YfQvdC+0Lkg0L7RhNC10YDRgtGLPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBkYXRhLW5hbWU9J3ByZWRvcGxhdGEnIGNsYXNzTmFtZT0nY2hlY2stZ3JvdXAnPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0nY2hlY2tib3gnIGNoZWNrZWQ9e2RvY3MuZG9jNH0vPlxyXG4gICAgICAgICAgICA8bGFiZWwgb25DbGljaz17KGUpID0+IGNoZWNrRG9jKGUpfSBjbGFzc05hbWU9J2NoZWNrbGFiZWwnIGRhdGEtbmFtZT0nZG9jNCc+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8YSBocmVmPXtgL2RvZ292b3I/cGF5bWVudERhdGU9JHtwYXltZW50RGF0ZX0mcGVyaW9kPSR7c3Jva31gfSB0YXJnZXQ9J19fYmxhbmsnPtCU0L7Qs9C+0LLQvtGAINC90LAg0LfQsNC60LDQtyDQvdCw0YDRj9C0PC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAge09iamVjdFxyXG4gICAgICAgICAgICAua2V5cyhkb2NzKVxyXG4gICAgICAgICAgICAuc29tZShrID0+ICFkb2NzW2tdKVxyXG4gICAgICAgICAgICA/IDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVGb2N1cygpfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdidXR0b24gYnV0dG9uX2xpZ2h0ZXN0J1xyXG4gICAgICAgICAgICAgICAgdmFsdWU9J9Cf0L7Qu9GD0YfQuNGC0Ywg0YDQtdC30YPQu9GM0YLQsNGCJy8+XHJcbiAgICAgICAgICAgIDogPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nYnV0dG9uJ1xyXG4gICAgICAgICAgICAgIHZhbHVlPSfQn9C+0LvRg9GH0LjRgtGMINGA0LXQt9GD0LvRjNGC0LDRgicvPlxyXG59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGhpcmRTdGVwIl0sInNvdXJjZVJvb3QiOiIifQ==