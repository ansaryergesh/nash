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
        console.log(res);

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
          lineNumber: 191,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          className: "radiolabel",
          children: "\u041F\u043E\u0441\u0442\u043E\u043F\u043B\u0430\u0442\u0430"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 13
        }, _this)]), _jsxDEV2), void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 186,
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
          lineNumber: 200,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          className: "radiolabel",
          children: "\u041F\u0440\u0435\u0434\u043E\u043F\u043B\u0430\u0442\u0430"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 13
        }, _this)]), _jsxDEV3), void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 9
      }, _this), !predoplata && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "range",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "srok_month",
          children: "\u0421\u0440\u043E\u043A \u043E\u043F\u043B\u0430\u0442\u044B (\u043C\u0435\u0441\u044F\u0446)"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 207,
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
          lineNumber: 208,
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
            lineNumber: 218,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            onClick: function onClick() {
              return changeSrokBtn('2');
            },
            className: "range__opt ".concat(srok === '2' && 'active'),
            children: "2"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 221,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            onClick: function onClick() {
              return changeSrokBtn('3');
            },
            className: "range__opt ".concat(srok === '3' && 'active'),
            children: "3"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 224,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 25
      }, _this), !predoplata && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "payment_date",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
          children: ["\u0414\u0435\u043D\u044C \u043E\u043F\u043B\u0430\u0442\u044B \u0434\u043E ", paymentDate]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 240,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 25
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "payment_amount",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "\u0421\u0443\u043C\u043C\u0430 \u043E\u043F\u043B\u0430\u0442\u044B:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 251,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
            children: [(0,_defaults_extraFunction__WEBPACK_IMPORTED_MODULE_7__.amountSpace)("".concat(discount)), "\u0442\u0433"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 253,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            "class": "price--line-through",
            children: [(0,_defaults_extraFunction__WEBPACK_IMPORTED_MODULE_7__.amountSpace)("".concat(summa)), "\u0442\u0433"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 254,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 252,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "discount",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: ["-50%", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: "\u0421\u041A\u0418\u0414\u041A\u0410"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 259,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 258,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 256,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 250,
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
            lineNumber: 265,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            onClick: function onClick(e) {
              return checkDoc(e);
            },
            "data-name": "doc1",
            className: "checklabel"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 266,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "/dogovorobrabotka?token=".concat(token),
            target: "__blank",
            children: "\u0417\u0430\u043F\u0440\u043E\u0441 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 269,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 264,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "data-name": "postoplata",
          className: "check-group",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "checkbox",
            checked: docs.doc2
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 272,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            onClick: function onClick(e) {
              return checkDoc(e);
            },
            className: "checklabel",
            "data-name": "doc2"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 273,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "/\u041F\u0423\u0411\u041B\u0418\u0427\u041D\u0410\u042F \u041E\u0424\u0415\u0420\u0422\u0410.pdf",
            target: "__blank",
            children: "\u0414\u043E\u0433\u043E\u0432\u043E\u0440 \u043F\u0443\u0431\u043B\u0438\u0447\u043D\u043E\u0439 \u043E\u0444\u0435\u0440\u0442\u044B"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 276,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 271,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "data-name": "predoplata",
          className: "check-group",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "checkbox",
            checked: docs.doc4
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 280,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            onClick: function onClick(e) {
              return checkDoc(e);
            },
            className: "checklabel",
            "data-name": "doc4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 281,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "/dogovor?paymentDate=".concat(paymentDate, "&period=").concat(srok),
            target: "__blank",
            children: "\u0414\u043E\u0433\u043E\u0432\u043E\u0440 \u043D\u0430 \u0437\u0430\u043A\u0430\u0437 \u043D\u0430\u0440\u044F\u0434"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 284,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 279,
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
          lineNumber: 290,
          columnNumber: 15
        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "submit",
          className: "button",
          value: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 296,
          columnNumber: 15
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 183,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRzZXJ2aWNlL1RoaXJkU3RlcC5qcyJdLCJuYW1lcyI6WyJUaGlyZFN0ZXAiLCJzZXRMb2FkaW5nIiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJxdWVyeSIsInBhdGhuYW1lIiwiYW1vdW50IiwidG9rZW4iLCJsZWFkSUQiLCJ1c2VTdGF0ZSIsImFnZ3JJZCIsInNldEFnZ3JJZCIsImZpbmFsSUQiLCJ1c2VFZmZlY3QiLCJzdW1tYSIsImNvb2tpZSIsInVuZGVmaW5lZCIsImZpbmFsU3VtbWEiLCJNYXRoIiwiZmxvb3IiLCJwYXJzZUludCIsImRpc2NvdW50U3VtbWEiLCJzZXRTdW1tYSIsInNldERpc2NvdW50IiwiY29uc29sZSIsImxvZyIsImF4aW9zIiwicHJvY2VzcyIsInRoZW4iLCJyZXMiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInB1c2giLCJkaXNjb3VudCIsInByZWRvcGxhdGEiLCJzZXRPcGxhdGEiLCJwYXJzZURhdGUiLCJwYXltZW50RGF0ZSIsInNldFBheW1lbnREYXRlIiwiZG9jcyIsInNldERvY3MiLCJzcm9rIiwic2V0U3JvayIsImNoZWNrRG9jIiwiZSIsIm5hbWUiLCJ0YXJnZXQiLCJkYXRhc2V0IiwiY2hhbmdlT3BsYXRhIiwiZ2V0QXR0cmlidXRlIiwiY2hhbmdlU3JvayIsIm1vbnRoIiwidmFsdWUiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsTGVmdCIsImNoYW5nZVNyb2tCdG4iLCJtb250aFZhbCIsInNjcm9sbFJpZ2h0IiwiYWdncmVtZW50U2JtdCIsInByZXZlbnREZWZhdWx0IiwicGFyYW1zIiwidHlwZVBheW1lbnQiLCJwZXJpb2QiLCJkYXRlX3BheW1lbnQiLCJhbW91bnRQYXltZW50Iiwic3RlcFRoaXJkIiwib2JqZWN0IiwidXRtX3NvdXJjZSIsImNsaWNrX2lkIiwic3VjY2VzcyIsInN3YWwiLCJSb3V0ZXIiLCJmaW5hbFN1Ym1pdCIsImFtb3VudFNwYWNlIiwiZG9jMSIsImRvYzIiLCJkb2M0IiwiT2JqZWN0Iiwia2V5cyIsInNvbWUiLCJrIiwiaGFuZGxlRm9jdXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFrQjtBQUFBOztBQUFBOztBQUFBLE1BQWhCQyxVQUFnQixRQUFoQkEsVUFBZ0I7QUFDbEMsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQURrQyxNQUUzQkMsRUFGMkIsR0FFckJGLE1BQU0sQ0FBQ0csS0FGYyxDQUUzQkQsRUFGMkI7QUFHbEMsTUFBTUUsUUFBUSxHQUFHSixNQUFNLENBQUNJLFFBQXhCO0FBSGtDLE1BSTNCQyxNQUoyQixHQUlqQkwsTUFBTSxDQUFDRyxLQUpVLENBSTNCRSxNQUoyQjtBQUFBLE1BSzNCQyxLQUwyQixHQUtsQk4sTUFBTSxDQUFDRyxLQUxXLENBSzNCRyxLQUwyQjtBQUFBLE1BTTNCQyxNQU4yQixHQU1qQlAsTUFBTSxDQUFDRyxLQU5VLENBTTNCSSxNQU4yQjs7QUFBQSxrQkFPTkMsK0NBQVEsQ0FBQyxFQUFELENBUEY7QUFBQSxNQU8zQkMsTUFQMkI7QUFBQSxNQU9uQkMsU0FQbUI7O0FBUWxDLE1BQU1DLE9BQU8sR0FBR1QsRUFBRSxJQUFJSyxNQUF0QjtBQUNBSyxrREFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxLQUFLLEdBQUdDLG9EQUFBLENBQVcsUUFBWCxNQUF5QkMsU0FBekIsR0FBcUNELG9EQUFBLENBQVcsUUFBWCxDQUFyQyxHQUE0RFQsTUFBMUU7QUFDQSxRQUFNVyxVQUFVLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxRQUFRLENBQUNOLEtBQUQsQ0FBUixHQUFrQixHQUE3QixDQUFuQjtBQUNBLFFBQU1PLGFBQWEsR0FBR0gsSUFBSSxDQUFDQyxLQUFMLENBQVdDLFFBQVEs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QUEsaUJBakNOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQS9FRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRkY7QUE0SEQsQ0F6U0Q7O0dBQU1yRixTO1VBQ1dHLGtEOzs7S0FEWEgsUztBQTJTTiwrREFBZUEsU0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZ2dyZW1lbnQuNDBhZDlkYmVmM2E3MGM2Zjg5YWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJ1xyXG5pbXBvcnQgUm91dGVyLHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgc3dhbCBmcm9tICdzd2VldGFsZXJ0J1xyXG5pbXBvcnQge2Ftb3VudFNwYWNlLCBoYW5kbGVGb2N1cywgcGFyc2VEYXRlfSBmcm9tIFwiLi4vLi4vZGVmYXVsdHMvZXh0cmFGdW5jdGlvblwiXHJcblxyXG5jb25zdCBUaGlyZFN0ZXAgPSAoe3NldExvYWRpbmd9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCB7aWR9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IHBhdGhuYW1lID0gcm91dGVyLnBhdGhuYW1lXHJcbiAgY29uc3Qge2Ftb3VudH0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCB7dG9rZW59ID0gcm91dGVyLnF1ZXJ5XHJcbiAgY29uc3Qge2xlYWRJRH0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCBbYWdncklkLCBzZXRBZ2dySWRdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgZmluYWxJRCA9IGlkIHx8IGxlYWRJRFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdW1tYSA9IGNvb2tpZS5nZXQoJ2Ftb3VudCcpICE9PSB1bmRlZmluZWQgPyBjb29raWUuZ2V0KCdhbW91bnQnKSA6IGFtb3VudFxyXG4gICAgY29uc3QgZmluYWxTdW1tYSA9IE1hdGguZmxvb3IocGFyc2VJbnQoc3VtbWEpICogMC4yKVxyXG4gICAgY29uc3QgZGlzY291bnRTdW1tYSA9IE1hdGguZmxvb3IocGFyc2VJbnQoZmluYWxTdW1tYSkgLyAyKVxyXG4gICAgaWYgKGZpbmFsU3VtbWEgPiAyMDAwMDApIHtcclxuICAgICAgc2V0U3VtbWEoZmluYWxTdW1tYSlcclxuICAgICAgc2V0RGlzY291bnQoZGlzY291bnRTdW1tYSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFN1bW1hKDIwMDAwMClcclxuICAgICAgc2V0RGlzY291bnQoMTAwMDAwKVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coZmluYWxTdW1tYSlcclxuICB9LCBbY29va2llLmdldCgnYW1vdW50JyldKVxyXG5cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmKHBhdGhuYW1lID09PSAnL2FnZ3JlbWVudCcpIHtcclxuICAgICAgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9nZXREYXRhU2lnbj90b2tlbj0ke3Rva2VufWApXHJcbiAgICAgICAgLnRoZW4ocmVzPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgaWYoSlNPTi5zdHJpbmdpZnkocmVzLmRhdGEpID09PSAne30nKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd0cnVlJylcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZmFsc2UnKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICB9LFtdKVxyXG5cclxuICBjb25zdCBbc3VtbWEsXHJcbiAgICBzZXRTdW1tYV0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFtkaXNjb3VudCxcclxuICAgIHNldERpc2NvdW50XSA9IHVzZVN0YXRlKDApXHJcbiAgY29uc3QgW3ByZWRvcGxhdGEsXHJcbiAgICBzZXRPcGxhdGFdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW3BheW1lbnREYXRlLFxyXG4gICAgc2V0UGF5bWVudERhdGVdID0gdXNlU3RhdGUocGFyc2VEYXRlKDEpKVxyXG4gIGNvbnN0IFtkb2NzLFxyXG4gICAgc2V0RG9jc10gPSB1c2VTdGF0ZSh7XCJkb2MxXCI6IHRydWUsIFwiZG9jMlwiOiB0cnVlLCBcImRvYzNcIjogdHJ1ZSwgXCJkb2M0XCI6IHRydWV9KVxyXG4gIGNvbnN0IFtzcm9rLFxyXG4gICAgc2V0U3Jva10gPSB1c2VTdGF0ZSgnMScpXHJcbiAgY29uc3QgY2hlY2tEb2MgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgbmFtZSA9IGUudGFyZ2V0LmRhdGFzZXQubmFtZVxyXG4gICAgLy8gY29uc29sZS5sb2coZG9jc1tuYW1lXSlcclxuICAgIHNldERvY3Moe1xyXG4gICAgICAuLi5kb2NzLFxyXG4gICAgICBbbmFtZV06ICFkb2NzW25hbWVdXHJcbiAgICB9KVxyXG4gICAgY29uc29sZS5sb2coZG9jcylcclxuXHJcbiAgfVxyXG4gIGNvbnN0IGNoYW5nZU9wbGF0YSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBuYW1lID0gZVxyXG4gICAgICAudGFyZ2V0XHJcbiAgICAgIC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpXHJcbiAgICBzZXRPcGxhdGEoIXByZWRvcGxhdGEpXHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGFuZ2VTcm9rID0gZSA9PiB7XHJcbiAgICBjb25zdCBtb250aCA9IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgc2V0U3JvayhlLnRhcmdldC52YWx1ZSlcclxuICAgIHNldFBheW1lbnREYXRlKHBhcnNlRGF0ZShtb250aCkpXHJcbiAgICBpZihlLnRhcmdldC52YWx1ZT4yKSB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFuZ2VfX2xpc3QnKVxyXG4gICAgICBlbGVtZW50LnNjcm9sbExlZnQgPSAtMzAwO1xyXG4gICAgfWVsc2Uge1xyXG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhbmdlX19saXN0JylcclxuICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0ID0gMzAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2hhbmdlU3Jva0J0biA9IChtb250aCkgPT4ge1xyXG4gICAgY29uc3QgbW9udGhWYWwgPSBwYXJzZUludChtb250aClcclxuICAgIHNldFNyb2sobW9udGgpXHJcbiAgICBzZXRQYXltZW50RGF0ZShwYXJzZURhdGUobW9udGhWYWwpKVxyXG4gICAgaWYobW9udGhWYWw+Mykge1xyXG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhbmdlX19saXN0JylcclxuICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0ID0gMjAwO1xyXG4gICAgfWVsc2Uge1xyXG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhbmdlX19saXN0JylcclxuICAgICAgZWxlbWVudC5zY3JvbGxSaWdodCA9IDIwMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGFnZ3JlbWVudFNibXQgPSBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9yZW1vdmVTaG9ydFVybGAsIHtwYXJhbXM6IHtcclxuICAgICAgaWQ6IGZpbmFsSUQsXHJcbiAgICAgIHR5cGVQYXltZW50OiBwcmVkb3BsYXRhXHJcbiAgICAgID8gJ9Cf0YDQtdC00L7Qv9C70LDRgtCwJ1xyXG4gICAgICA6ICfQn9C+0YHRgtC+0L/Qu9Cw0YLQsCcsXHJcbiAgICAgIHBlcmlvZDogc3JvayxcclxuICAgICAgZGF0ZV9wYXltZW50OiBwYXltZW50RGF0ZSxcclxuICAgICAgYW1vdW50UGF5bWVudDogZGlzY291bnQsXHJcbiAgICB9fSlcclxuICAgICAgLnRoZW4ocmVzPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiBcclxuICBjb25zdCBzdGVwVGhpcmQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBjb25zdCBvYmplY3QgPSB7XHJcbiAgICAgIGlkOiBjb29raWUuZ2V0KCdsZWFkX2lkJykgPT09IHVuZGVmaW5lZCA/IGZpbmFsSUQgOiBjb29raWUuZ2V0KCdsZWFkX2lkJyksXHJcbiAgICAgIHRva2VuOiBjb29raWUuZ2V0KCd0b2tlbicpLFxyXG4gICAgICBhbW91bnRQYXltZW50OiBkaXNjb3VudCxcclxuICAgICAgZGF0ZV9wYXltZW50OiBwYXltZW50RGF0ZSxcclxuICAgICAgcGVyaW9kOiBzcm9rLFxyXG4gICAgICB0eXBlUGF5bWVudDogcHJlZG9wbGF0YVxyXG4gICAgICAgID8gJ9Cf0YDQtdC00L7Qv9C70LDRgtCwJ1xyXG4gICAgICAgIDogJ9Cf0L7RgdGC0L7Qv9C70LDRgtCwJ1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjb29raWUuZ2V0KCd1dG1fc291cmNlJykgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBvYmplY3QudXRtX3NvdXJjZSA9IGNvb2tpZS5nZXQoJ3V0bV9zb3VyY2UnKVxyXG4gICAgICBvYmplY3QuY2xpY2tfaWQgPSBjb29raWUuZ2V0KCdjbGlja19pZCcpXHJcbiAgICAgIC8vIG9iamVjdC53ZWJJRCA9IGNvb2tpZS5nZXQoJ3dlYl9pZCcpXHJcbiAgICB9XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9zdGVwVGhyZWVgLCB7cGFyYW1zOiBvYmplY3R9KVxyXG4gICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgIGlmIChyZXMuZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICBzd2FsKFwi0KPRgdC/0LXRiNC90L4hXCIsIGDQktCw0YjQsCDQt9Cw0Y/QstC60LAg0L7RgtC/0YDQsNCy0LvQtdC90LAg0LIgTmFzaCBDb21wYW55LiDQktCw0Lwg0YHQtdC50YfQsNGBINC/0LXRgNC10LfQstC+0L3Rj9GCINGBINC90L7QvNC10YDQsCArNyg3MDApMzUwLTUwLTAwYCwgXCJzdWNjZXNzXCIpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2NhYmluZXQvcmVxdWVzdHMnKVxyXG4gICAgICAgICAgICBjb29raWUucmVtb3ZlKCdsZWFkX2lkJylcclxuICAgICAgICAgICAgY29va2llLnJlbW92ZSgnc3RlcCcpXHJcbiAgICAgICAgICAgIGNvb2tpZS5yZW1vdmUoJ3V0bV9tZWRpdW0nKVxyXG4gICAgICAgICAgICBjb29raWUucmVtb3ZlKCd1dG1fc291cmNlJylcclxuICAgICAgICAgICAgY29va2llLnJlbW92ZSgndXRtX2NhbXBhaWduJylcclxuICAgICAgICAgICAgY29va2llLnJlbW92ZSgnY2xpY2tfaWQnKVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZmluYWxTdWJtaXQgPSBlID0+IHtcclxuICAgIGlmKHBhdGhuYW1lID09PSAnL2FnZ3JlbWVudCcpIHtcclxuICAgICAgYWdncmVtZW50U2JtdChlKVxyXG4gICAgfWVsc2Uge1xyXG4gICAgICBzdGVwVGhpcmQoZSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIFxyXG5cclxuICAvLyBjb25zdCBkb2dvdm9yb2JyYWJvdGthID0gKCkgPT4ge1xyXG4gIC8vICAgaWYocGF0aG5hbWUgPT09ICcvYWdncmVtZW50Jykge1xyXG4gIC8vICAgICByZXR1cm4gYC9kb2dvdm9yb2JyYWJvdGthP3Rva2VuPSR7dG9rZW59YFxyXG4gIC8vICAgfVxyXG4gIC8vICAgaWYocGF0aG5hbWUgPT09ICcvY2FiaW5ldC9jb250aW51ZScpIHtcclxuICAvLyAgICAgcmV0dXJuIGAvZG9nb3Zvcm9icmFib3RrYT9pZD0ke2lkfWBcclxuICAvLyAgIH1cclxuICAvLyAgIGVsc2Uge1xyXG4gIC8vICAgICByZXR1cm4gJy9kb2dvdm9yb2JyYWJvdGthJ1xyXG4gIC8vICAgfVxyXG4gIC8vIH1cclxuICByZXR1cm4gKFxyXG5cclxuICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtX3JlZ2lzdGVyIHRoaXJkc3RlcCc+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSkgPT4gZmluYWxTdWJtaXQoZSl9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyYWRpb19ncm91cHMnPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9J3Bvc3RvcGxhdGEnXHJcbiAgICAgICAgICAgIGRhdGEtbmFtZT0ncG9zdG9wbGF0YSdcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdjaGVjay1ncm91cCdcclxuICAgICAgICAgICAgb25DbGljaz17ZSA9PiBjaGFuZ2VPcGxhdGEoZSl9PlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0nY2hlY2tib3gnIGNoZWNrZWQ9e3ByZWRvcGxhdGEgPT09IGZhbHNlfS8+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J3JhZGlvbGFiZWwnPtCf0L7RgdGC0L7Qv9C70LDRgtCwPC9sYWJlbD5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdwcmVkb3BsYXRhJ1xyXG4gICAgICAgICAgICBkYXRhLW5hbWU9J3ByZWRvcGxhdGEnXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nY2hlY2stZ3JvdXAnXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gY2hhbmdlT3BsYXRhKGUpfT5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J2NoZWNrYm94JyBjaGVja2VkPXtwcmVkb3BsYXRhID09PSB0cnVlfS8+XHJcblxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdyYWRpb2xhYmVsJz7Qn9GA0LXQtNC+0L/Qu9Cw0YLQsDwvbGFiZWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgeyFwcmVkb3BsYXRhICYmIDxkaXYgY2xhc3NOYW1lPVwicmFuZ2VcIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nc3Jva19tb250aCc+0KHRgNC+0Log0L7Qv9C70LDRgtGLICjQvNC10YHRj9GGKTwvcD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyYW5nZV9faW5wdXRcIlxyXG4gICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxyXG4gICAgICAgICAgICB2YWx1ZT17c3Jva31cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gY2hhbmdlU3JvayhlKX1cclxuICAgICAgICAgICAgbWluPVwiMVwiXHJcbiAgICAgICAgICAgIG1heD1cIjNcIlxyXG4gICAgICAgICAgICBzdGVwPVwiMVwiXHJcbiAgICAgICAgICAgIGxpc3Q9XCJudW1iZXJcIi8+XHJcbiAgICAgICAgICA8ZGF0YWxpc3QgY2xhc3NOYW1lPSdyYW5nZV9fbGlzdCcgaWQ9XCJudW1iZXJcIj5cclxuICAgICAgICAgICAgPG9wdGlvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZVNyb2tCdG4oJzEnKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2ByYW5nZV9fb3B0IG9wdDAgJHtzcm9rID09PSAnMScgJiYgJ2FjdGl2ZSd9YH0+MTwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlU3Jva0J0bignMicpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHJhbmdlX19vcHQgJHtzcm9rID09PSAnMicgJiYgJ2FjdGl2ZSd9YH0+Mjwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlU3Jva0J0bignMycpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHJhbmdlX19vcHQgJHtzcm9rID09PSAnMycgJiYgJ2FjdGl2ZSd9YH0+Mzwvb3B0aW9uPlxyXG4gICAgICAgICAgICB7LyogPG9wdGlvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZVNyb2tCdG4oJzQnKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2ByYW5nZV9fb3B0ICR7c3JvayA9PT0gJzQnICYmICdhY3RpdmUnfWB9PjQ8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZVNyb2tCdG4oJzUnKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2ByYW5nZV9fb3B0ICR7c3JvayA9PT0gJzUnICYmICdhY3RpdmUnfWB9PjU8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZVNyb2tCdG4oJzYnKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2ByYW5nZV9fb3B0ICR7c3JvayA9PT0gJzYnICYmICdhY3RpdmUnfWB9PjY8L29wdGlvbj4gKi99XHJcbiAgICAgICAgICA8L2RhdGFsaXN0PlxyXG4gICAgICAgIDwvZGl2PlxyXG59XHJcbiAgICAgICAgeyFwcmVkb3BsYXRhICYmIDxkaXYgY2xhc3NOYW1lPSdwYXltZW50X2RhdGUnPlxyXG4gICAgICAgICAgPHN0cm9uZz7QlNC10L3RjCDQvtC/0LvQsNGC0Ysg0LTQviB7cGF5bWVudERhdGV9XHJcbiAgICAgICAgICA8L3N0cm9uZz5cclxuICAgICAgICA8L2Rpdj59XHJcblxyXG4gICAgICAgIHsvKiA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9J251bWJlcidcclxuICAgICAgICAgIGNsYXNzTmFtZT0nc3VtbWEnXHJcbiAgICAgICAgICB2YWx1ZT17c3VtbWF9XHJcbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRTdW1tYShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj0n0KHRg9C80LzQsCDQvtC/0LvQsNGC0YsnLz4gKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BheW1lbnRfYW1vdW50Jz5cclxuICAgICAgICAgIDxwPtCh0YPQvNC80LAg0L7Qv9C70LDRgtGLOjwvcD5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzdHJvbmc+e2Ftb3VudFNwYWNlKGAke2Rpc2NvdW50fWApfdGC0LM8L3N0cm9uZz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcmljZS0tbGluZS10aHJvdWdoXCI+e2Ftb3VudFNwYWNlKGAke3N1bW1hfWApfdGC0LM8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXNjb3VudCc+XHJcbiAgICAgICAgICAgIHsvKiA8aW1nIHNyYz0nL2ltZy9kaXNjb3VudC5wbmcnLz4gKi99XHJcbiAgICAgICAgICAgIDxwPi01MCVcclxuICAgICAgICAgICAgICA8c3Bhbj7QodCa0JjQlNCa0JA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaGVja19ncm91cHMnPlxyXG4gICAgICAgICAgPGRpdiBkYXRhLW5hbWU9J3ByZWRvcGxhdGEnIGNsYXNzTmFtZT0nY2hlY2stZ3JvdXAnPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0nY2hlY2tib3gnIGNoZWNrZWQ9e2RvY3MuZG9jMX0vPlxyXG4gICAgICAgICAgICA8bGFiZWwgb25DbGljaz17KGUpID0+IGNoZWNrRG9jKGUpfSBkYXRhLW5hbWU9J2RvYzEnIGNsYXNzTmFtZT0nY2hlY2tsYWJlbCc+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8YSBocmVmPXtgL2RvZ292b3JvYnJhYm90a2E/dG9rZW49JHt0b2tlbn1gfSAgdGFyZ2V0PSdfX2JsYW5rJz7Ql9Cw0L/RgNC+0YEg0L3QsCDQvtCx0YDQsNCx0L7RgtC60YMg0L/QtdGA0YHQvtC90LDQu9GM0L3Ri9GFINC00LDQvdC90YvRhTwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBkYXRhLW5hbWU9J3Bvc3RvcGxhdGEnIGNsYXNzTmFtZT0nY2hlY2stZ3JvdXAnPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0nY2hlY2tib3gnIGNoZWNrZWQ9e2RvY3MuZG9jMn0vPlxyXG4gICAgICAgICAgICA8bGFiZWwgb25DbGljaz17KGUpID0+IGNoZWNrRG9jKGUpfSBjbGFzc05hbWU9J2NoZWNrbGFiZWwnIGRhdGEtbmFtZT0nZG9jMic+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8YSBocmVmPScv0J/Qo9CR0JvQmNCn0J3QkNCvINCe0KTQldCg0KLQkC5wZGYnIHRhcmdldD0nX19ibGFuayc+0JTQvtCz0L7QstC+0YAg0L/Rg9Cx0LvQuNGH0L3QvtC5INC+0YTQtdGA0YLRizwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgZGF0YS1uYW1lPSdwcmVkb3BsYXRhJyBjbGFzc05hbWU9J2NoZWNrLWdyb3VwJz5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J2NoZWNrYm94JyBjaGVja2VkPXtkb2NzLmRvYzR9Lz5cclxuICAgICAgICAgICAgPGxhYmVsIG9uQ2xpY2s9eyhlKSA9PiBjaGVja0RvYyhlKX0gY2xhc3NOYW1lPSdjaGVja2xhYmVsJyBkYXRhLW5hbWU9J2RvYzQnPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGEgaHJlZj17YC9kb2dvdm9yP3BheW1lbnREYXRlPSR7cGF5bWVudERhdGV9JnBlcmlvZD0ke3Nyb2t9YH0gdGFyZ2V0PSdfX2JsYW5rJz7QlNC+0LPQvtCy0L7RgCDQvdCwINC30LDQutCw0Lcg0L3QsNGA0Y/QtDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIHtPYmplY3RcclxuICAgICAgICAgICAgLmtleXMoZG9jcylcclxuICAgICAgICAgICAgLnNvbWUoayA9PiAhZG9jc1trXSlcclxuICAgICAgICAgICAgPyA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRm9jdXMoKX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYnV0dG9uIGJ1dHRvbl9saWdodGVzdCdcclxuICAgICAgICAgICAgICAgIHZhbHVlPSfQn9C+0LvRg9GH0LjRgtGMINGA0LXQt9GD0LvRjNGC0LDRgicvPlxyXG4gICAgICAgICAgICA6IDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9J2J1dHRvbidcclxuICAgICAgICAgICAgICB2YWx1ZT0n0J/QvtC70YPRh9C40YLRjCDRgNC10LfRg9C70YzRgtCw0YInLz5cclxufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRoaXJkU3RlcCJdLCJzb3VyY2VSb290IjoiIn0=