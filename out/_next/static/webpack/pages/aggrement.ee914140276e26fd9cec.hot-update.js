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
      axios__WEBPACK_IMPORTED_MODULE_2___default().get("".concat("https://crediter.kz/api", "/getDataSign?token=").concat(token));
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
          lineNumber: 181,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          className: "radiolabel",
          children: "\u041F\u043E\u0441\u0442\u043E\u043F\u043B\u0430\u0442\u0430"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 13
        }, _this)]), _jsxDEV2), void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 176,
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
          lineNumber: 190,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          className: "radiolabel",
          children: "\u041F\u0440\u0435\u0434\u043E\u043F\u043B\u0430\u0442\u0430"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 13
        }, _this)]), _jsxDEV3), void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 9
      }, _this), !predoplata && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "range",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "srok_month",
          children: "\u0421\u0440\u043E\u043A \u043E\u043F\u043B\u0430\u0442\u044B (\u043C\u0435\u0441\u044F\u0446)"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 197,
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
          lineNumber: 198,
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
            lineNumber: 208,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            onClick: function onClick() {
              return changeSrokBtn('2');
            },
            className: "range__opt ".concat(srok === '2' && 'active'),
            children: "2"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 211,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            onClick: function onClick() {
              return changeSrokBtn('3');
            },
            className: "range__opt ".concat(srok === '3' && 'active'),
            children: "3"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 214,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 25
      }, _this), !predoplata && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "payment_date",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
          children: ["\u0414\u0435\u043D\u044C \u043E\u043F\u043B\u0430\u0442\u044B \u0434\u043E ", paymentDate]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 25
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "payment_amount",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "\u0421\u0443\u043C\u043C\u0430 \u043E\u043F\u043B\u0430\u0442\u044B:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 241,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
            children: [(0,_defaults_extraFunction__WEBPACK_IMPORTED_MODULE_7__.amountSpace)("".concat(discount)), "\u0442\u0433"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 243,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            "class": "price--line-through",
            children: [(0,_defaults_extraFunction__WEBPACK_IMPORTED_MODULE_7__.amountSpace)("".concat(summa)), "\u0442\u0433"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 244,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 242,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "discount",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: ["-50%", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: "\u0421\u041A\u0418\u0414\u041A\u0410"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 249,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 248,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 246,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 240,
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
            lineNumber: 255,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            onClick: function onClick(e) {
              return checkDoc(e);
            },
            "data-name": "doc1",
            className: "checklabel"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 256,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "/dogovorobrabotka?token=".concat(token),
            target: "__blank",
            children: "\u0417\u0430\u043F\u0440\u043E\u0441 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 259,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 254,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "data-name": "postoplata",
          className: "check-group",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "checkbox",
            checked: docs.doc2
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 262,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            onClick: function onClick(e) {
              return checkDoc(e);
            },
            className: "checklabel",
            "data-name": "doc2"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 263,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "/\u041F\u0423\u0411\u041B\u0418\u0427\u041D\u0410\u042F \u041E\u0424\u0415\u0420\u0422\u0410.pdf",
            target: "__blank",
            children: "\u0414\u043E\u0433\u043E\u0432\u043E\u0440 \u043F\u0443\u0431\u043B\u0438\u0447\u043D\u043E\u0439 \u043E\u0444\u0435\u0440\u0442\u044B"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 266,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 261,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "data-name": "predoplata",
          className: "check-group",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "checkbox",
            checked: docs.doc4
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 270,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            onClick: function onClick(e) {
              return checkDoc(e);
            },
            className: "checklabel",
            "data-name": "doc4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 271,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "/dogovor?paymentDate=".concat(paymentDate, "&period=").concat(srok),
            target: "__blank",
            children: "\u0414\u043E\u0433\u043E\u0432\u043E\u0440 \u043D\u0430 \u0437\u0430\u043A\u0430\u0437 \u043D\u0430\u0440\u044F\u0434"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 274,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 269,
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
          lineNumber: 280,
          columnNumber: 15
        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "submit",
          className: "button",
          value: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 286,
          columnNumber: 15
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 173,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRzZXJ2aWNlL1RoaXJkU3RlcC5qcyJdLCJuYW1lcyI6WyJUaGlyZFN0ZXAiLCJzZXRMb2FkaW5nIiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJxdWVyeSIsInBhdGhuYW1lIiwiYW1vdW50IiwidG9rZW4iLCJsZWFkSUQiLCJ1c2VTdGF0ZSIsImFnZ3JJZCIsInNldEFnZ3JJZCIsImZpbmFsSUQiLCJ1c2VFZmZlY3QiLCJzdW1tYSIsImNvb2tpZSIsInVuZGVmaW5lZCIsImZpbmFsU3VtbWEiLCJNYXRoIiwiZmxvb3IiLCJwYXJzZUludCIsImRpc2NvdW50U3VtbWEiLCJzZXRTdW1tYSIsInNldERpc2NvdW50IiwiY29uc29sZSIsImxvZyIsImF4aW9zIiwicHJvY2VzcyIsImRpc2NvdW50IiwicHJlZG9wbGF0YSIsInNldE9wbGF0YSIsInBhcnNlRGF0ZSIsInBheW1lbnREYXRlIiwic2V0UGF5bWVudERhdGUiLCJkb2NzIiwic2V0RG9jcyIsInNyb2siLCJzZXRTcm9rIiwiY2hlY2tEb2MiLCJlIiwibmFtZSIsInRhcmdldCIsImRhdGFzZXQiLCJjaGFuZ2VPcGxhdGEiLCJnZXRBdHRyaWJ1dGUiLCJjaGFuZ2VTcm9rIiwibW9udGgiLCJ2YWx1ZSIsImVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzY3JvbGxMZWZ0IiwiY2hhbmdlU3Jva0J0biIsIm1vbnRoVmFsIiwic2Nyb2xsUmlnaHQiLCJhZ2dyZW1lbnRTYm10IiwicHJldmVudERlZmF1bHQiLCJwYXJhbXMiLCJ0eXBlUGF5bWVudCIsInBlcmlvZCIsImRhdGVfcGF5bWVudCIsImFtb3VudFBheW1lbnQiLCJ0aGVuIiwicmVzIiwic3RlcFRoaXJkIiwib2JqZWN0IiwidXRtX3NvdXJjZSIsImNsaWNrX2lkIiwiZGF0YSIsInN1Y2Nlc3MiLCJzd2FsIiwiUm91dGVyIiwiZmluYWxTdWJtaXQiLCJhbW91bnRTcGFjZSIs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LEVBQUUsaUJBQUNyQyxDQUFEO0FBQUEscUJBQU9ELFFBQVEsQ0FBQ0MsQ0FBRCxDQUFmO0FBQUEsYUFBaEI7QUFBb0MscUJBQVMsRUFBQyxZQUE5QztBQUEyRCx5QkFBVTtBQUFyRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBS0U7QUFBRyxnQkFBSSxpQ0FBMEJQLFdBQTFCLHFCQUFnREksSUFBaEQsQ0FBUDtBQUErRCxrQkFBTSxFQUFDLFNBQXRFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoQkYsRUF3Qkd5QyxNQUFNLENBQ0pDLElBREYsQ0FDTzVDLElBRFAsRUFFRTZDLElBRkYsQ0FFTyxVQUFBQyxDQUFDO0FBQUEsaUJBQUksQ0FBQzlDLElBQUksQ0FBQzhDLENBQUQsQ0FBVDtBQUFBLFNBRlIsaUJBR0c7QUFDRSxjQUFJLEVBQUMsUUFEUDtBQUVFLGtCQUFRLEVBQUUsSUFGWjtBQUdFLGlCQUFPLEVBQUU7QUFBQSxtQkFBTUMsb0VBQVcsRUFBakI7QUFBQSxXQUhYO0FBSUUsbUJBQVMsRUFBQyx3QkFKWjtBQUtFLGVBQUssRUFBQztBQUxSO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEgsZ0JBU0c7QUFDQSxjQUFJLEVBQUMsUUFETDtBQUVBLG1CQUFTLEVBQUMsUUFGVjtBQUdBLGVBQUssRUFBQztBQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBakNOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQS9FRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRkY7QUE0SEQsQ0EvUkQ7O0dBQU1sRixTO1VBQ1dHLGtEOzs7S0FEWEgsUztBQWlTTiwrREFBZUEsU0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZ2dyZW1lbnQuZWU5MTQxNDAyNzZlMjZmZDljZWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJ1xyXG5pbXBvcnQgUm91dGVyLHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgc3dhbCBmcm9tICdzd2VldGFsZXJ0J1xyXG5pbXBvcnQge2Ftb3VudFNwYWNlLCBoYW5kbGVGb2N1cywgcGFyc2VEYXRlfSBmcm9tIFwiLi4vLi4vZGVmYXVsdHMvZXh0cmFGdW5jdGlvblwiXHJcblxyXG5jb25zdCBUaGlyZFN0ZXAgPSAoe3NldExvYWRpbmd9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCB7aWR9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IHBhdGhuYW1lID0gcm91dGVyLnBhdGhuYW1lXHJcbiAgY29uc3Qge2Ftb3VudH0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCB7dG9rZW59ID0gcm91dGVyLnF1ZXJ5XHJcbiAgY29uc3Qge2xlYWRJRH0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCBbYWdncklkLCBzZXRBZ2dySWRdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgZmluYWxJRCA9IGlkIHx8IGxlYWRJRFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdW1tYSA9IGNvb2tpZS5nZXQoJ2Ftb3VudCcpICE9PSB1bmRlZmluZWQgPyBjb29raWUuZ2V0KCdhbW91bnQnKSA6IGFtb3VudFxyXG4gICAgY29uc3QgZmluYWxTdW1tYSA9IE1hdGguZmxvb3IocGFyc2VJbnQoc3VtbWEpICogMC4yKVxyXG4gICAgY29uc3QgZGlzY291bnRTdW1tYSA9IE1hdGguZmxvb3IocGFyc2VJbnQoZmluYWxTdW1tYSkgLyAyKVxyXG4gICAgaWYgKGZpbmFsU3VtbWEgPiAyMDAwMDApIHtcclxuICAgICAgc2V0U3VtbWEoZmluYWxTdW1tYSlcclxuICAgICAgc2V0RGlzY291bnQoZGlzY291bnRTdW1tYSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFN1bW1hKDIwMDAwMClcclxuICAgICAgc2V0RGlzY291bnQoMTAwMDAwKVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coZmluYWxTdW1tYSlcclxuICB9LCBbY29va2llLmdldCgnYW1vdW50JyldKVxyXG5cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmKHBhdGhuYW1lID09PSAnL2FnZ3JlbWVudCcpIHtcclxuICAgICAgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9nZXREYXRhU2lnbj90b2tlbj0ke3Rva2VufWApXHJcbiAgICB9XHJcbiAgfSxbXSlcclxuXHJcbiAgY29uc3QgW3N1bW1hLFxyXG4gICAgc2V0U3VtbWFdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbZGlzY291bnQsXHJcbiAgICBzZXREaXNjb3VudF0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFtwcmVkb3BsYXRhLFxyXG4gICAgc2V0T3BsYXRhXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtwYXltZW50RGF0ZSxcclxuICAgIHNldFBheW1lbnREYXRlXSA9IHVzZVN0YXRlKHBhcnNlRGF0ZSgxKSlcclxuICBjb25zdCBbZG9jcyxcclxuICAgIHNldERvY3NdID0gdXNlU3RhdGUoe1wiZG9jMVwiOiB0cnVlLCBcImRvYzJcIjogdHJ1ZSwgXCJkb2MzXCI6IHRydWUsIFwiZG9jNFwiOiB0cnVlfSlcclxuICBjb25zdCBbc3JvayxcclxuICAgIHNldFNyb2tdID0gdXNlU3RhdGUoJzEnKVxyXG4gIGNvbnN0IGNoZWNrRG9jID0gKGUpID0+IHtcclxuICAgIGNvbnN0IG5hbWUgPSBlLnRhcmdldC5kYXRhc2V0Lm5hbWVcclxuICAgIC8vIGNvbnNvbGUubG9nKGRvY3NbbmFtZV0pXHJcbiAgICBzZXREb2NzKHtcclxuICAgICAgLi4uZG9jcyxcclxuICAgICAgW25hbWVdOiAhZG9jc1tuYW1lXVxyXG4gICAgfSlcclxuICAgIGNvbnNvbGUubG9nKGRvY3MpXHJcblxyXG4gIH1cclxuICBjb25zdCBjaGFuZ2VPcGxhdGEgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgbmFtZSA9IGVcclxuICAgICAgLnRhcmdldFxyXG4gICAgICAuZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKVxyXG4gICAgc2V0T3BsYXRhKCFwcmVkb3BsYXRhKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2hhbmdlU3JvayA9IGUgPT4ge1xyXG4gICAgY29uc3QgbW9udGggPSBwYXJzZUludChlLnRhcmdldC52YWx1ZSlcclxuICAgIHNldFNyb2soZS50YXJnZXQudmFsdWUpXHJcbiAgICBzZXRQYXltZW50RGF0ZShwYXJzZURhdGUobW9udGgpKVxyXG4gICAgaWYoZS50YXJnZXQudmFsdWU+Mikge1xyXG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhbmdlX19saXN0JylcclxuICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0ID0gLTMwMDtcclxuICAgIH1lbHNlIHtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYW5nZV9fbGlzdCcpXHJcbiAgICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCA9IDMwMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGNoYW5nZVNyb2tCdG4gPSAobW9udGgpID0+IHtcclxuICAgIGNvbnN0IG1vbnRoVmFsID0gcGFyc2VJbnQobW9udGgpXHJcbiAgICBzZXRTcm9rKG1vbnRoKVxyXG4gICAgc2V0UGF5bWVudERhdGUocGFyc2VEYXRlKG1vbnRoVmFsKSlcclxuICAgIGlmKG1vbnRoVmFsPjMpIHtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYW5nZV9fbGlzdCcpXHJcbiAgICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCA9IDIwMDtcclxuICAgIH1lbHNlIHtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYW5nZV9fbGlzdCcpXHJcbiAgICAgIGVsZW1lbnQuc2Nyb2xsUmlnaHQgPSAyMDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBhZ2dyZW1lbnRTYm10ID0gZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgIGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vcmVtb3ZlU2hvcnRVcmxgLCB7cGFyYW1zOiB7XHJcbiAgICAgIGlkOiBmaW5hbElELFxyXG4gICAgICB0eXBlUGF5bWVudDogcHJlZG9wbGF0YVxyXG4gICAgICA/ICfQn9GA0LXQtNC+0L/Qu9Cw0YLQsCdcclxuICAgICAgOiAn0J/QvtGB0YLQvtC/0LvQsNGC0LAnLFxyXG4gICAgICBwZXJpb2Q6IHNyb2ssXHJcbiAgICAgIGRhdGVfcGF5bWVudDogcGF5bWVudERhdGUsXHJcbiAgICAgIGFtb3VudFBheW1lbnQ6IGRpc2NvdW50LFxyXG4gICAgfX0pXHJcbiAgICAgIC50aGVuKHJlcz0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gXHJcbiAgY29uc3Qgc3RlcFRoaXJkID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgY29uc3Qgb2JqZWN0ID0ge1xyXG4gICAgICBpZDogY29va2llLmdldCgnbGVhZF9pZCcpID09PSB1bmRlZmluZWQgPyBmaW5hbElEIDogY29va2llLmdldCgnbGVhZF9pZCcpLFxyXG4gICAgICB0b2tlbjogY29va2llLmdldCgndG9rZW4nKSxcclxuICAgICAgYW1vdW50UGF5bWVudDogZGlzY291bnQsXHJcbiAgICAgIGRhdGVfcGF5bWVudDogcGF5bWVudERhdGUsXHJcbiAgICAgIHBlcmlvZDogc3JvayxcclxuICAgICAgdHlwZVBheW1lbnQ6IHByZWRvcGxhdGFcclxuICAgICAgICA/ICfQn9GA0LXQtNC+0L/Qu9Cw0YLQsCdcclxuICAgICAgICA6ICfQn9C+0YHRgtC+0L/Qu9Cw0YLQsCdcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY29va2llLmdldCgndXRtX3NvdXJjZScpICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgb2JqZWN0LnV0bV9zb3VyY2UgPSBjb29raWUuZ2V0KCd1dG1fc291cmNlJylcclxuICAgICAgb2JqZWN0LmNsaWNrX2lkID0gY29va2llLmdldCgnY2xpY2tfaWQnKVxyXG4gICAgICAvLyBvYmplY3Qud2ViSUQgPSBjb29raWUuZ2V0KCd3ZWJfaWQnKVxyXG4gICAgfVxyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vc3RlcFRocmVlYCwge3BhcmFtczogb2JqZWN0fSlcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICBpZiAocmVzLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgc3dhbChcItCj0YHQv9C10YjQvdC+IVwiLCBg0JLQsNGI0LAg0LfQsNGP0LLQutCwINC+0YLQv9GA0LDQstC70LXQvdCwINCyIE5hc2ggQ29tcGFueS4g0JLQsNC8INGB0LXQudGH0LDRgSDQv9C10YDQtdC30LLQvtC90Y/RgiDRgSDQvdC+0LzQtdGA0LAgKzcoNzAwKTM1MC01MC0wMGAsIFwic3VjY2Vzc1wiKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goJy9jYWJpbmV0L3JlcXVlc3RzJylcclxuICAgICAgICAgICAgY29va2llLnJlbW92ZSgnbGVhZF9pZCcpXHJcbiAgICAgICAgICAgIGNvb2tpZS5yZW1vdmUoJ3N0ZXAnKVxyXG4gICAgICAgICAgICBjb29raWUucmVtb3ZlKCd1dG1fbWVkaXVtJylcclxuICAgICAgICAgICAgY29va2llLnJlbW92ZSgndXRtX3NvdXJjZScpXHJcbiAgICAgICAgICAgIGNvb2tpZS5yZW1vdmUoJ3V0bV9jYW1wYWlnbicpXHJcbiAgICAgICAgICAgIGNvb2tpZS5yZW1vdmUoJ2NsaWNrX2lkJylcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGZpbmFsU3VibWl0ID0gZSA9PiB7XHJcbiAgICBpZihwYXRobmFtZSA9PT0gJy9hZ2dyZW1lbnQnKSB7XHJcbiAgICAgIGFnZ3JlbWVudFNibXQoZSlcclxuICAgIH1lbHNlIHtcclxuICAgICAgc3RlcFRoaXJkKGUpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBcclxuXHJcbiAgLy8gY29uc3QgZG9nb3Zvcm9icmFib3RrYSA9ICgpID0+IHtcclxuICAvLyAgIGlmKHBhdGhuYW1lID09PSAnL2FnZ3JlbWVudCcpIHtcclxuICAvLyAgICAgcmV0dXJuIGAvZG9nb3Zvcm9icmFib3RrYT90b2tlbj0ke3Rva2VufWBcclxuICAvLyAgIH1cclxuICAvLyAgIGlmKHBhdGhuYW1lID09PSAnL2NhYmluZXQvY29udGludWUnKSB7XHJcbiAgLy8gICAgIHJldHVybiBgL2RvZ292b3JvYnJhYm90a2E/aWQ9JHtpZH1gXHJcbiAgLy8gICB9XHJcbiAgLy8gICBlbHNlIHtcclxuICAvLyAgICAgcmV0dXJuICcvZG9nb3Zvcm9icmFib3RrYSdcclxuICAvLyAgIH1cclxuICAvLyB9XHJcbiAgcmV0dXJuIChcclxuXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybV9yZWdpc3RlciB0aGlyZHN0ZXAnPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpID0+IGZpbmFsU3VibWl0KGUpfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmFkaW9fZ3JvdXBzJz5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdwb3N0b3BsYXRhJ1xyXG4gICAgICAgICAgICBkYXRhLW5hbWU9J3Bvc3RvcGxhdGEnXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nY2hlY2stZ3JvdXAnXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gY2hhbmdlT3BsYXRhKGUpfT5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J2NoZWNrYm94JyBjaGVja2VkPXtwcmVkb3BsYXRhID09PSBmYWxzZX0vPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdyYWRpb2xhYmVsJz7Qn9C+0YHRgtC+0L/Qu9Cw0YLQsDwvbGFiZWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0ncHJlZG9wbGF0YSdcclxuICAgICAgICAgICAgZGF0YS1uYW1lPSdwcmVkb3BsYXRhJ1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9J2NoZWNrLWdyb3VwJ1xyXG4gICAgICAgICAgICBvbkNsaWNrPXtlID0+IGNoYW5nZU9wbGF0YShlKX0+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdjaGVja2JveCcgY2hlY2tlZD17cHJlZG9wbGF0YSA9PT0gdHJ1ZX0vPlxyXG5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0ncmFkaW9sYWJlbCc+0J/RgNC10LTQvtC/0LvQsNGC0LA8L2xhYmVsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHshcHJlZG9wbGF0YSAmJiA8ZGl2IGNsYXNzTmFtZT1cInJhbmdlXCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9J3Nyb2tfbW9udGgnPtCh0YDQvtC6INC+0L/Qu9Cw0YLRiyAo0LzQtdGB0Y/Rhik8L3A+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicmFuZ2VfX2lucHV0XCJcclxuICAgICAgICAgICAgdHlwZT1cInJhbmdlXCJcclxuICAgICAgICAgICAgdmFsdWU9e3Nyb2t9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IGNoYW5nZVNyb2soZSl9XHJcbiAgICAgICAgICAgIG1pbj1cIjFcIlxyXG4gICAgICAgICAgICBtYXg9XCIzXCJcclxuICAgICAgICAgICAgc3RlcD1cIjFcIlxyXG4gICAgICAgICAgICBsaXN0PVwibnVtYmVyXCIvPlxyXG4gICAgICAgICAgPGRhdGFsaXN0IGNsYXNzTmFtZT0ncmFuZ2VfX2xpc3QnIGlkPVwibnVtYmVyXCI+XHJcbiAgICAgICAgICAgIDxvcHRpb25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VTcm9rQnRuKCcxJyl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcmFuZ2VfX29wdCBvcHQwICR7c3JvayA9PT0gJzEnICYmICdhY3RpdmUnfWB9PjE8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZVNyb2tCdG4oJzInKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2ByYW5nZV9fb3B0ICR7c3JvayA9PT0gJzInICYmICdhY3RpdmUnfWB9PjI8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZVNyb2tCdG4oJzMnKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2ByYW5nZV9fb3B0ICR7c3JvayA9PT0gJzMnICYmICdhY3RpdmUnfWB9PjM8L29wdGlvbj5cclxuICAgICAgICAgICAgey8qIDxvcHRpb25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VTcm9rQnRuKCc0Jyl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcmFuZ2VfX29wdCAke3Nyb2sgPT09ICc0JyAmJiAnYWN0aXZlJ31gfT40PC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VTcm9rQnRuKCc1Jyl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcmFuZ2VfX29wdCAke3Nyb2sgPT09ICc1JyAmJiAnYWN0aXZlJ31gfT41PC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VTcm9rQnRuKCc2Jyl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcmFuZ2VfX29wdCAke3Nyb2sgPT09ICc2JyAmJiAnYWN0aXZlJ31gfT42PC9vcHRpb24+ICovfVxyXG4gICAgICAgICAgPC9kYXRhbGlzdD5cclxuICAgICAgICA8L2Rpdj5cclxufVxyXG4gICAgICAgIHshcHJlZG9wbGF0YSAmJiA8ZGl2IGNsYXNzTmFtZT0ncGF5bWVudF9kYXRlJz5cclxuICAgICAgICAgIDxzdHJvbmc+0JTQtdC90Ywg0L7Qv9C70LDRgtGLINC00L4ge3BheW1lbnREYXRlfVxyXG4gICAgICAgICAgPC9zdHJvbmc+XHJcbiAgICAgICAgPC9kaXY+fVxyXG5cclxuICAgICAgICB7LyogPGlucHV0XHJcbiAgICAgICAgICB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICBjbGFzc05hbWU9J3N1bW1hJ1xyXG4gICAgICAgICAgdmFsdWU9e3N1bW1hfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0U3VtbWEoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J9Ch0YPQvNC80LAg0L7Qv9C70LDRgtGLJy8+ICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXltZW50X2Ftb3VudCc+XHJcbiAgICAgICAgICA8cD7QodGD0LzQvNCwINC+0L/Qu9Cw0YLRizo8L3A+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8c3Ryb25nPnthbW91bnRTcGFjZShgJHtkaXNjb3VudH1gKX3RgtCzPC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJpY2UtLWxpbmUtdGhyb3VnaFwiPnthbW91bnRTcGFjZShgJHtzdW1tYX1gKX3RgtCzPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGlzY291bnQnPlxyXG4gICAgICAgICAgICB7LyogPGltZyBzcmM9Jy9pbWcvZGlzY291bnQucG5nJy8+ICovfVxyXG4gICAgICAgICAgICA8cD4tNTAlXHJcbiAgICAgICAgICAgICAgPHNwYW4+0KHQmtCY0JTQmtCQPC9zcGFuPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2hlY2tfZ3JvdXBzJz5cclxuICAgICAgICAgIDxkaXYgZGF0YS1uYW1lPSdwcmVkb3BsYXRhJyBjbGFzc05hbWU9J2NoZWNrLWdyb3VwJz5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J2NoZWNrYm94JyBjaGVja2VkPXtkb2NzLmRvYzF9Lz5cclxuICAgICAgICAgICAgPGxhYmVsIG9uQ2xpY2s9eyhlKSA9PiBjaGVja0RvYyhlKX0gZGF0YS1uYW1lPSdkb2MxJyBjbGFzc05hbWU9J2NoZWNrbGFiZWwnPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGEgaHJlZj17YC9kb2dvdm9yb2JyYWJvdGthP3Rva2VuPSR7dG9rZW59YH0gIHRhcmdldD0nX19ibGFuayc+0JfQsNC/0YDQvtGBINC90LAg0L7QsdGA0LDQsdC+0YLQutGDINC/0LXRgNGB0L7QvdCw0LvRjNC90YvRhSDQtNCw0L3QvdGL0YU8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgZGF0YS1uYW1lPSdwb3N0b3BsYXRhJyBjbGFzc05hbWU9J2NoZWNrLWdyb3VwJz5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J2NoZWNrYm94JyBjaGVja2VkPXtkb2NzLmRvYzJ9Lz5cclxuICAgICAgICAgICAgPGxhYmVsIG9uQ2xpY2s9eyhlKSA9PiBjaGVja0RvYyhlKX0gY2xhc3NOYW1lPSdjaGVja2xhYmVsJyBkYXRhLW5hbWU9J2RvYzInPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGEgaHJlZj0nL9Cf0KPQkdCb0JjQp9Cd0JDQryDQntCk0JXQoNCi0JAucGRmJyB0YXJnZXQ9J19fYmxhbmsnPtCU0L7Qs9C+0LLQvtGAINC/0YPQsdC70LjRh9C90L7QuSDQvtGE0LXRgNGC0Ys8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGRhdGEtbmFtZT0ncHJlZG9wbGF0YScgY2xhc3NOYW1lPSdjaGVjay1ncm91cCc+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdjaGVja2JveCcgY2hlY2tlZD17ZG9jcy5kb2M0fS8+XHJcbiAgICAgICAgICAgIDxsYWJlbCBvbkNsaWNrPXsoZSkgPT4gY2hlY2tEb2MoZSl9IGNsYXNzTmFtZT0nY2hlY2tsYWJlbCcgZGF0YS1uYW1lPSdkb2M0Jz5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxhIGhyZWY9e2AvZG9nb3Zvcj9wYXltZW50RGF0ZT0ke3BheW1lbnREYXRlfSZwZXJpb2Q9JHtzcm9rfWB9IHRhcmdldD0nX19ibGFuayc+0JTQvtCz0L7QstC+0YAg0L3QsCDQt9Cw0LrQsNC3INC90LDRgNGP0LQ8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICB7T2JqZWN0XHJcbiAgICAgICAgICAgIC5rZXlzKGRvY3MpXHJcbiAgICAgICAgICAgIC5zb21lKGsgPT4gIWRvY3Nba10pXHJcbiAgICAgICAgICAgID8gPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPSdzdWJtaXQnXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUZvY3VzKCl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2J1dHRvbiBidXR0b25fbGlnaHRlc3QnXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT0n0J/QvtC70YPRh9C40YLRjCDRgNC10LfRg9C70YzRgtCw0YInLz5cclxuICAgICAgICAgICAgOiA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPSdzdWJtaXQnXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdidXR0b24nXHJcbiAgICAgICAgICAgICAgdmFsdWU9J9Cf0L7Qu9GD0YfQuNGC0Ywg0YDQtdC30YPQu9GM0YLQsNGCJy8+XHJcbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaGlyZFN0ZXAiXSwic291cmNlUm9vdCI6IiJ9