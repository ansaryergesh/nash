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
      aggrToken = _useState[0],
      setAggrToken = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      aggrId = _useState2[0],
      setAggrId = _useState2[1];

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
    console.log(token);
    setAggrToken(token);
  }, [token]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    if (pathname === '/aggrement') {
      axios__WEBPACK_IMPORTED_MODULE_2___default().get("".concat("https://crediter.kz/api", "/getDataSign?token=").concat(aggrToken)).then(function (res) {
        console.log(token);
        console.log(res);

        if (JSON.stringify(res.data) === '{}') {
          console.log('this');
          router.push('/');
        } else {
          setAggrId(res.data.id);
        }
      });
    }
  }, [aggrToken]);

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),
      summa = _useState3[0],
      setSumma = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),
      discount = _useState4[0],
      setDiscount = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      predoplata = _useState5[0],
      setOplata = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)((0,_defaults_extraFunction__WEBPACK_IMPORTED_MODULE_7__.parseDate)(1)),
      paymentDate = _useState6[0],
      setPaymentDate = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
    "doc1": true,
    "doc2": true,
    "doc3": true,
    "doc4": true
  }),
      docs = _useState7[0],
      setDocs = _useState7[1];

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('1'),
      srok = _useState8[0],
      setSrok = _useState8[1];

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
  }; // const dogovorobrabotka = () => {   if(pathname === '/aggrement') {     return
  // `/dogovorobrabotka?token=${token}`   }   if(pathname === '/cabinet/continue')
  // {     return `/dogovorobrabotka?id=${id}`   }   else {     return
  // '/dogovorobrabotka'   } }


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
          lineNumber: 202,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          className: "radiolabel",
          children: "\u041F\u043E\u0441\u0442\u043E\u043F\u043B\u0430\u0442\u0430"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 13
        }, _this)]), _jsxDEV2), void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 197,
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
          lineNumber: 211,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          className: "radiolabel",
          children: "\u041F\u0440\u0435\u0434\u043E\u043F\u043B\u0430\u0442\u0430"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 13
        }, _this)]), _jsxDEV3), void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 9
      }, _this), !predoplata && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "range",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "srok_month",
          children: "\u0421\u0440\u043E\u043A \u043E\u043F\u043B\u0430\u0442\u044B (\u043C\u0435\u0441\u044F\u0446)"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 218,
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
          lineNumber: 219,
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
            lineNumber: 229,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            onClick: function onClick() {
              return changeSrokBtn('2');
            },
            className: "range__opt ".concat(srok === '2' && 'active'),
            children: "2"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 232,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            onClick: function onClick() {
              return changeSrokBtn('3');
            },
            className: "range__opt ".concat(srok === '3' && 'active'),
            children: "3"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 235,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 25
      }, _this), !predoplata && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "payment_date",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
          children: ["\u0414\u0435\u043D\u044C \u043E\u043F\u043B\u0430\u0442\u044B \u0434\u043E ", paymentDate]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 251,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 25
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "payment_amount",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "\u0421\u0443\u043C\u043C\u0430 \u043E\u043F\u043B\u0430\u0442\u044B:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 262,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
            children: [(0,_defaults_extraFunction__WEBPACK_IMPORTED_MODULE_7__.amountSpace)("".concat(discount)), "\u0442\u0433"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 264,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            "class": "price--line-through",
            children: [(0,_defaults_extraFunction__WEBPACK_IMPORTED_MODULE_7__.amountSpace)("".concat(summa)), "\u0442\u0433"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 265,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 263,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "discount",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: ["-50%", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: "\u0421\u041A\u0418\u0414\u041A\u0410"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 270,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 269,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 267,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 261,
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
            lineNumber: 276,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            onClick: function onClick(e) {
              return checkDoc(e);
            },
            "data-name": "doc1",
            className: "checklabel"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 277,
            columnNumber: 13
          }, _this), token ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "/dogovorobrabotka?token=".concat(token),
            target: "__blank",
            children: "\u0417\u0430\u043F\u0440\u043E\u0441 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 279,
            columnNumber: 17
          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "/dogovorobrabotka",
            target: "__blank",
            children: "\u0417\u0430\u043F\u0440\u043E\u0441 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 280,
            columnNumber: 19
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 275,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "data-name": "postoplata",
          className: "check-group",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "checkbox",
            checked: docs.doc2
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 284,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            onClick: function onClick(e) {
              return checkDoc(e);
            },
            className: "checklabel",
            "data-name": "doc2"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 285,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "/\u041F\u0423\u0411\u041B\u0418\u0427\u041D\u0410\u042F \u041E\u0424\u0415\u0420\u0422\u0410.pdf",
            target: "__blank",
            children: "\u0414\u043E\u0433\u043E\u0432\u043E\u0440 \u043F\u0443\u0431\u043B\u0438\u0447\u043D\u043E\u0439 \u043E\u0444\u0435\u0440\u0442\u044B"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 287,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 283,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "data-name": "predoplata",
          className: "check-group",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "checkbox",
            checked: docs.doc4
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 291,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            onClick: function onClick(e) {
              return checkDoc(e);
            },
            className: "checklabel",
            "data-name": "doc4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 292,
            columnNumber: 13
          }, _this), token ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "/dogovor?paymentDate=".concat(paymentDate, "&period=").concat(srok, "&token=").concat(token),
            target: "__blank",
            children: "\u0414\u043E\u0433\u043E\u0432\u043E\u0440 \u043D\u0430 \u0437\u0430\u043A\u0430\u0437 \u043D\u0430\u0440\u044F\u0434"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 294,
            columnNumber: 17
          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "/dogovor?paymentDate=".concat(paymentDate, "&period=").concat(srok),
            target: "__blank",
            children: "\u0414\u043E\u0433\u043E\u0432\u043E\u0440 \u043D\u0430 \u0437\u0430\u043A\u0430\u0437 \u043D\u0430\u0440\u044F\u0434"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 297,
            columnNumber: 17
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 290,
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
          lineNumber: 304,
          columnNumber: 15
        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "submit",
          className: "button",
          value: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 310,
          columnNumber: 15
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 194,
    columnNumber: 5
  }, _this);
};

_s(ThirdStep, "asF4UfYAZ+GgH18AyWh9EMDtweM=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRzZXJ2aWNlL1RoaXJkU3RlcC5qcyJdLCJuYW1lcyI6WyJUaGlyZFN0ZXAiLCJzZXRMb2FkaW5nIiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJxdWVyeSIsInBhdGhuYW1lIiwiYW1vdW50IiwidG9rZW4iLCJsZWFkSUQiLCJ1c2VTdGF0ZSIsImFnZ3JUb2tlbiIsInNldEFnZ3JUb2tlbiIsImFnZ3JJZCIsInNldEFnZ3JJZCIsImZpbmFsSUQiLCJ1c2VFZmZlY3QiLCJzdW1tYSIsImNvb2tpZSIsInVuZGVmaW5lZCIsImZpbmFsU3VtbWEiLCJNYXRoIiwiZmxvb3IiLCJwYXJzZUludCIsImRpc2NvdW50U3VtbWEiLCJzZXRTdW1tYSIsInNldERpc2NvdW50IiwiY29uc29sZSIsImxvZyIsImF4aW9zIiwicHJvY2VzcyIsInRoZW4iLCJyZXMiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInB1c2giLCJkaXNjb3VudCIsInByZWRvcGxhdGEiLCJzZXRPcGxhdGEiLCJwYXJzZURhdGUiLCJwYXltZW50RGF0ZSIsInNldFBheW1lbnREYXRlIiwiZG9jcyIsInNldERvY3MiLCJzcm9rIiwic2V0U3JvayIsImNoZWNrRG9jIiwiZSIsIm5hbWUiLCJ0YXJnZXQiLCJkYXRhc2V0IiwiY2hhbmdlT3BsYXRhIiwiZ2V0QXR0cmlidXRlIiwiY2hhbmdlU3JvayIsIm1vbnRoIiwidmFsdWUiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsTGVmdCIsImNoYW5nZVNyb2tCdG4iLCJtb250aFZhbCIsInNjcm9sbFJpZ2h0IiwiYWdncmVtZW50U2JtdCIsInByZXZlbnREZWZhdWx0IiwicGFyYW1zIiwidHlwZVBheW1lbnQiLCJwZXJpb2QiLCJkYXRlX3BheW1lbnQiLCJhbW91bnRQYXltZW50Iiwic3RhdHVzIiwic3dhbCIsImVyciIsInN0ZXBUaGlyZCIsIm9iamVjdCIsInV0bV9zb3VyY2UiLCJjbGlja19pZCIsInN1Y2Nlc3MiLCJSb3V0ZXIiLCJmaW5hbFN1Ym1pdCIsImFtb3VudFNwYWNlIiwiZG9jMSIsImRvYzIiLCJkb2M0IiwiT2JqZWN0Iiwia2V5cyIsInNvbWUiLCJrIiwiaGFuZGxlRm9jdXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFrQjtBQUFBOztBQUFBOztBQUFBLE1BQWhCQyxVQUFnQixRQUFoQkEsVUFBZ0I7QUFDbEMsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQURrQyxNQUUzQkMsRUFGMkIsR0FFckJGLE1BQU0sQ0FBQ0csS0FGYyxDQUUzQkQsRUFGMkI7QUFHbEMsTUFBTUUsUUFBUSxHQUFHSixNQUFNLENBQUNJLFFBQXhCO0FBSGtDLE1BSTNCQyxNQUoyQixHQUlqQkwsTUFBTSxDQUFDRyxLQUpVLENBSTNCRSxNQUoyQjtBQUFBLE1BSzNCQyxLQUwyQixHQUtsQk4sTUFBTSxDQUFDRyxLQUxXLENBSzNCRyxLQUwyQjtBQUFBLE1BTTNCQyxNQU4yQixHQU1qQlAsTUFBTSxDQUFDRyxLQU5VLENBTTNCSSxNQU4yQjs7QUFBQSxrQkFPQUMsK0NBQVEsQ0FBQyxFQUFELENBUFI7QUFBQSxNQU8zQkMsU0FQMkI7QUFBQSxNQU9oQkMsWUFQZ0I7O0FBQUEsbUJBU25CRiwrQ0FBUSxDQUFDLEVBQUQsQ0FUVztBQUFBLE1BUTNCRyxNQVIyQjtBQUFBLE1BU2hDQyxTQVRnQzs7QUFVbEMsTUFBTUMsT0FBTyxHQUFHWCxFQUFFLElBQUlLLE1BQXRCO0FBQ0FPLGtEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLEtBQUssR0FBR0Msb0RBQUEsQ0FBVyxRQUFYLE1BQXlCQyxTQUF6QixHQUNWRCxvREFBQSxDQUFXLFFBQVgsQ0FEVSxHQUVWWCxNQUZKO0FBR0EsUUFBTWEsVUFBVSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsUUFBUSxDQUFDTixLQUFELENBQVIsR0FBa0IsR0FBN0IsQ0FBbkI7QUFDQSxRQUFNTyxhQUFhLEdBQUdILElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxRQUFRLENBQUNILFVBQUQsQ0FBUixHQUF1QixDQUFsQyxDQUF0Qjs7QUFDQSxRQUFJQSxVQUFVLEdBQUcsTUFBakIsRUFBeUI7QUFDdkJLLGNBQVEsQ0FBQ0wsVUFBRCxDQUFSO0FBQ0FNLGlCQUFXLENBQUNGLGFBQUQsQ0FBWDtBQUNELEtBSEQsTUFHTztBQUNMQyxjQUFRLENBQUMsTUFBRCxDQUFSO0FBQ0FDLGlCQUFXLENBQUMsTUFBRCxDQUFYO0FBQ0Q7O0FBQ0RDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZUixVQUFaO0FBQ0QsR0FkUSxFQWNOLENBQUNGLG9EQUFBLENBQVcsUUFBWCxDQUFELENBZE0sQ0FBVDtBQWlCQUYsa0RBQVMsQ0FBQyxZQUFNO0FBQ2RXLFdBQU8sQ0FBQ0MsR0FBUixDQUFZcEIsS0FBWjtBQUNBSSxnQkFBWSxDQUFDSixLQUFELENBQVo7QUFDRCxHQUhRLEVBR04sQ0FBQ0EsS0FBRCxDQUhNLENBQVQ7QUFJQVEsa0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSVYsUUFBUSxLQUFLLFlBQWpCLEVBQStCO0FBQzdCdUIsc0RBQUEsV0FDVUMseUJBRFYsZ0NBQ29EbkIsU0FEcEQsR0FFR29CLElBRkgsQ0FFUSxVQUFBQyxHQUFHLEVBQUk7QUFDWEwsZUFBTyxDQUFDQyxHQUFSLENBQVlwQixLQUFaO0FBQ0FtQixlQUFPLENBQUNDLEdBQVIsQ0FBWUksR0FBWjs7QUFDQSxZQUFJQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUYsR0FBRyxDQUFDRyxJQUFuQixNQUE2QixJQUFqQyxFQUF1QztBQUNyQ1IsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVo7QUFDQTFCLGdCQUFNLENBQUNrQyxJQUFQLENBQVksR0FBWjtBQUNELFNBSEQsTUFHTztBQUNMdEIsbUJBQVMsQ0FBQ2tCLEdBQUcsQ0FBQ0csSUFBSixDQUFTL0IsRUFBVixDQUFUO0FBQ0Q7QUFDRixPQVhIO0FBWUQ7QUFDRixHQWZRLEVBZU4sQ0FBQ08sU0FBRCxDQWZNLENBQVQ7O0FBaENrQyxtQkFrRHBCRCwrQ0FBUSxDQUFDLENBQUQsQ0FsRFk7QUFBQSxNQWlEM0JPLEtBakQyQjtBQUFBLE1Ba0RoQ1EsUUFsRGdDOztBQUFBLG1CQW9EakJmLCtDQUFRLENBQUMsQ0FBRCxDQXBEUztBQUFBLE1BbUQzQjJCLFFBbkQyQjtBQUFBLE1Bb0RoQ1gsV0FwRGdDOztBQUFBLG1CQXNEbkJoQiwrQ0FBUSxDQUFDLEtBQUQsQ0F0RFc7QUFBQSxNQXFEM0I0QixVQXJEMkI7QUFBQSxNQXNEaENDLFNBdERnQzs7QUFBQSxtQkF3RGQ3QiwrQ0FBUSxDQUFDOEIsa0VBQVMsQ0FBQyxDQUFELENBQVYsQ0F4RE07QUFBQSxNQXVEM0JDLFdBdkQyQjtBQUFBLE1Bd0RoQ0MsY0F4RGdDOztBQUFBLG1CQTBEckJoQywrQ0FBUSxDQUFDO0FBQUMsWUFBUSxJQUFUO0FBQWUsWUFBUSxJQUF2QjtBQUE2QixZQUFRLElBQXJDO0FBQTJDLFlBQVE7QUFBbkQsR0FBRCxDQTFEYTtBQUFBLE1BeUQzQmlDLElBekQyQjtBQUFBLE1BMERoQ0MsT0ExRGdDOztBQUFBLG1CQTREckJsQywrQ0FBUSxDQUFDLEdBQUQsQ0E1RGE7QUFBQSxNQTJEM0JtQyxJQTNEMkI7QUFBQSxNQTREaENDLE9BNURnQzs7QUE2RGxDLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLENBQUQsRUFBTztBQUN0QixRQUFNQyxJQUFJLEdBQUdELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxPQUFULENBQWlCRixJQUE5QixDQURzQixDQUV0Qjs7QUFDQUwsV0FBTyxpQ0FDRkQsSUFERSw0SEFFSk0sSUFGSSxFQUVHLENBQUNOLElBQUksQ0FBQ00sSUFBRCxDQUZSLEdBQVA7QUFJQXRCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZZSxJQUFaO0FBRUQsR0FURDs7QUFVQSxNQUFNUyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDSixDQUFELEVBQU87QUFDMUIsUUFBTUMsSUFBSSxHQUFHRCxDQUFDLENBQ1hFLE1BRFUsQ0FFVkcsWUFGVSxDQUVHLFdBRkgsQ0FBYjtBQUdBZCxhQUFTLENBQUMsQ0FBQ0QsVUFBRixDQUFUO0FBQ0QsR0FMRDs7QUFPQSxNQUFNZ0IsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQU4sQ0FBQyxFQUFJO0FBQ3RCLFFBQU1PLEtBQUssR0FBR2hDLFFBQVEsQ0FBQ3lCLENBQUMsQ0FBQ0UsTUFBRixDQUFTTSxLQUFWLENBQXRCO0FBQ0FWLFdBQU8sQ0FBQ0UsQ0FBQyxDQUFDRSxNQUFGLENBQVNNLEtBQVYsQ0FBUDtBQUNBZCxrQkFBYyxDQUFDRixrRUFBUyxDQUFDZSxLQUFELENBQVYsQ0FBZDs7QUFDQSxRQUFJUCxDQUFDLENBQUNFLE1BQUYsQ0FBU00sS0FBVCxHQUFpQixDQUFyQixFQUF3QjtBQUN0QixVQUFNQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixjQUF2QixDQUFoQjtBQUNBRixhQUFPLENBQUNHLFVBQVIsR0FBcUIsQ0FBQyxHQUF0QjtBQUNELEtBSEQsTUFHTztBQUNMLFVBQU1ILFFBQU8sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLGNBQXZCLENBQWhCOztBQUNBRixjQUFPLENBQUNHLFVBQVIsR0FBcUIsR0FBckI7QUFDRDtBQUNGLEdBWEQ7O0FBYUEsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDTixLQUFELEVBQVc7QUFDL0IsUUFBTU8sUUFBUSxHQUFHdkMsUUFBUSxDQUFDZ0MsS0FBRCxDQUF6QjtBQUNBVCxXQUFPLENBQUNTLEtBQUQsQ0FBUDtBQUNBYixrQkFBYyxDQUFDRixrRUFBUyxDQUFDc0IsUUFBRCxDQUFWLENBQWQ7O0FBQ0EsUUFBSUEsUUFBUSxHQUFHLENBQWYsRUFBa0I7QUFDaEIsVUFBTUwsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBaEI7QUFDQUYsYUFBTyxDQUFDRyxVQUFSLEdBQXFCLEdBQXJCO0FBQ0QsS0FIRCxNQUdPO0FBQ0wsVUFBTUgsU0FBTyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBaEI7O0FBQ0FGLGVBQU8sQ0FBQ00sV0FBUixHQUFzQixHQUF0QjtBQUNEO0FBQ0YsR0FYRDs7QUFhQSxNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUFoQixDQUFDLEVBQUk7QUFDekJBLEtBQUMsQ0FBQ2lCLGNBQUY7QUFDQWhFLGNBQVUsQ0FBQyxJQUFELENBQVY7QUFDQTRCLG9EQUFBLFdBQ1VDLHlCQURWLHNCQUNpRDtBQUMvQ29DLFlBQU0sRUFBRTtBQUNOOUQsVUFBRSxFQUFFUyxNQURFO0FBRU5zRCxtQkFBVyxFQUFFN0IsVUFBVSxHQUNuQixZQURtQixHQUVuQixZQUpFO0FBS044QixjQUFNLEVBQUV2QixJQUxGO0FBTU53QixvQkFBWSxFQUFFNUIsV0FOUjtBQU9ONkIscUJBQWEsRUFBRWpDO0FBUFQ7QUFEdUMsS0FEakQsRUFZR04sSUFaSCxDQVlRLFVBQUFDLEdBQUcsRUFBSTtBQUNYLFVBQUlBLEdBQUcsQ0FBQ3VDLE1BQUosS0FBZSxHQUFuQixFQUF3QjtBQUN0QkMseURBQUksQ0FBQyxVQUFELHVVQUF1RyxTQUF2RyxDQUFKLENBQXNIekMsSUFBdEgsQ0FBMkgsWUFBTTtBQUMvSDdCLGdCQUFNLENBQUNrQyxJQUFQLENBQVksR0FBWjtBQUNELFNBRkQ7QUFHRDs7QUFDRG5DLGdCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0QsS0FuQkgsV0FvQlMsVUFBQXdFLEdBQUcsRUFBSTtBQUNaeEUsZ0JBQVUsQ0FBQyxLQUFELENBQVY7QUFDRCxLQXRCSDtBQXVCRCxHQTFCRDs7QUE0QkEsTUFBTXlFLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUMxQixDQUFELEVBQU87QUFDdkJBLEtBQUMsQ0FBQ2lCLGNBQUY7QUFDQSxRQUFNVSxNQUFNLEdBQUc7QUFDYnZFLFFBQUUsRUFBRWMsb0RBQUEsQ0FBVyxTQUFYLE1BQTBCQyxTQUExQixHQUNBSixPQURBLEdBRUFHLG9EQUFBLENBQVcsU0FBWCxDQUhTO0FBSWJWLFdBQUssRUFBRVUsb0RBQUEsQ0FBVyxPQUFYLENBSk07QUFLYm9ELG1CQUFhLEVBQUVqQyxRQUxGO0FBTWJnQyxrQkFBWSxFQUFFNUIsV0FORDtBQU9iMkIsWUFBTSxFQUFFdkIsSUFQSztBQVFic0IsaUJBQVcsRUFBRTdCLFVBQVUsR0FDbkIsWUFEbUIsR0FFbkI7QUFWUyxLQUFmOztBQWFBLFFBQUlwQixvREFBQSxDQUFXLFlBQVgsTUFBNkJDLFNBQWpDLEVBQTRDO0FBQzFDd0QsWUFBTSxDQUFDQyxVQUFQLEdBQW9CMUQsb0RBQUEsQ0FBVyxZQUFYLENBQXBCO0FBQ0F5RCxZQUFNLENBQUNFLFFBQVAsR0FBa0IzRCxvREFBQSxDQUFXLFVBQVgsQ0FBbEIsQ0FGMEMsQ0FHMUM7QUFDRDs7QUFDRGpCLGNBQVUsQ0FBQyxJQUFELENBQVY7QUFDQTRCLG9EQUFBLFdBQ1VDLHlCQURWLGlCQUM0QztBQUFDb0MsWUFBTSxFQUFFUztBQUFULEtBRDVDLEVBRUc1QyxJQUZILENBRVEsVUFBQUMsR0FBRyxFQUFJO0FBQ1gvQixnQkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNBMEIsYUFBTyxDQUFDQyxHQUFSLENBQVlJLEdBQVo7O0FBQ0EsVUFBSUEsR0FBRyxDQUFDRyxJQUFKLENBQVMyQyxPQUFiLEVBQXNCO0FBQ3BCTix5REFBSSxDQUFDLFVBQUQsdVVBQXVHLFNBQXZHLENBQUosQ0FBc0h6QyxJQUF0SCxDQUEySCxZQUFNO0FBQy9IZ0QsaUVBQUEsQ0FBWSxtQkFBWjtBQUNBN0QsaUVBQUEsQ0FBYyxTQUFkO0FBQ0FBLGlFQUFBLENBQWMsTUFBZDtBQUNBQSxpRUFBQSxDQUFjLFlBQWQ7QUFDQUEsaUVBQUEsQ0FBYyxZQUFkO0FBQ0FBLGlFQUFBLENBQWMsY0FBZDtBQUNBQSxpRUFBQSxDQUFjLFVBQWQ7QUFDRCxTQVJEO0FBU0Q7QUFDRixLQWhCSDtBQWlCRCxHQXRDRDs7QUF3Q0EsTUFBTThELFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUFoQyxDQUFDLEVBQUk7QUFDdkIsUUFBSTFDLFFBQVEsS0FBSyxZQUFqQixFQUErQjtBQUM3QjBELG1CQUFhLENBQUNoQixDQUFELENBQWI7QUFDRCxLQUZELE1BRU87QUFDTDBCLGVBQVMsQ0FBQzFCLENBQUQsQ0FBVDtBQUNEO0FBQ0YsR0FORCxDQTVLa0MsQ0FvTGxDO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxzQkFFRTtBQUFLLGFBQVMsRUFBQyx5QkFBZjtBQUFBLDJCQUNFO0FBQU0sY0FBUSxFQUFFLGtCQUFDQSxDQUFEO0FBQUEsZUFBT2dDLFdBQVcsQ0FBQ2hDLENBQUQsQ0FBbEI7QUFBQSxPQUFoQjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxjQUFmO0FBQUEsZ0NBQ0U7QUFDRSxtQkFBUyxFQUFDLFlBRFo7QUFFRSx1QkFBVTtBQUZaLG1KQUdZLGFBSFoseUlBSVcsaUJBQUFBLENBQUM7QUFBQSxpQkFBSUksWUFBWSxDQUFDSixDQUFELENBQWhCO0FBQUEsU0FKWix3SkFLRTtBQUFPLGNBQUksRUFBQyxVQUFaO0FBQXVCLGlCQUFPLEVBQUVWLFVBQVUsS0FBSztBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGLGVBTUU7QUFBTyxtQkFBUyxFQUFDLFlBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFVRTtBQUNFLG1CQUFTLEVBQUMsWUFEWjtBQUVFLHVCQUFVO0FBRlosbUpBR1ksYUFIWix5SUFJVyxpQkFBQVUsQ0FBQztBQUFBLGlCQUFJSSxZQUFZLENBQUNKLENBQUQsQ0FBaEI7QUFBQSxTQUpaLHdKQUtFO0FBQU8sY0FBSSxFQUFDLFVBQVo7QUFBdUIsaUJBQU8sRUFBRVYsVUFBVSxLQUFLO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEYsZUFPRTtBQUFPLG1CQUFTLEVBQUMsWUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQXNCRyxDQUFDQSxVQUFELGlCQUFlO0FBQUssaUJBQVMsRUFBQyxPQUFmO0FBQUEsZ0NBQ2Q7QUFBRyxtQkFBUyxFQUFDLFlBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGMsZUFFZDtBQUNFLG1CQUFTLEVBQUMsY0FEWjtBQUVFLGNBQUksRUFBQyxPQUZQO0FBR0UsZUFBSyxFQUFFTyxJQUhUO0FBSUUsa0JBQVEsRUFBRSxrQkFBQUcsQ0FBQztBQUFBLG1CQUFJTSxVQUFVLENBQUNOLENBQUQsQ0FBZDtBQUFBLFdBSmI7QUFLRSxhQUFHLEVBQUMsR0FMTjtBQU1FLGFBQUcsRUFBQyxHQU5OO0FBT0UsY0FBSSxFQUFDLEdBUFA7QUFRRSxjQUFJLEVBQUM7QUFSUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZjLGVBV2Q7QUFBVSxtQkFBUyxFQUFDLGFBQXBCO0FBQWtDLFlBQUUsRUFBQyxRQUFyQztBQUFBLGtDQUNFO0FBQ0UsbUJBQU8sRUFBRTtBQUFBLHFCQUFNYSxhQUFhLENBQUMsR0FBRCxDQUFuQjtBQUFBLGFBRFg7QUFFRSxxQkFBUyw0QkFBcUJoQixJQUFJLEtBQUssR0FBVCxJQUFnQixRQUFyQyxDQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBSUU7QUFDRSxtQkFBTyxFQUFFO0FBQUEscUJBQU1nQixhQUFhLENBQUMsR0FBRCxDQUFuQjtBQUFBLGFBRFg7QUFFRSxxQkFBUyx1QkFBZ0JoQixJQUFJLEtBQUssR0FBVCxJQUFnQixRQUFoQyxDQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGLGVBT0U7QUFDRSxtQkFBTyxFQUFFO0FBQUEscUJBQU1nQixhQUFhLENBQUMsR0FBRCxDQUFuQjtBQUFBLGFBRFg7QUFFRSxxQkFBUyx1QkFBZ0JoQixJQUFJLEtBQUssR0FBVCxJQUFnQixRQUFoQyxDQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFYYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF0QmxCLEVBdURHLENBQUNQLFVBQUQsaUJBQWU7QUFBSyxpQkFBUyxFQUFDLGNBQWY7QUFBQSwrQkFDZDtBQUFBLG9HQUF3QkcsV0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRGM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXZEbEIsZUFrRUU7QUFBSyxpQkFBUyxFQUFDLGdCQUFmO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFBLGtDQUNFO0FBQUEsdUJBQVN3QyxvRUFBVyxXQUFJNUMsUUFBSixFQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFNLHFCQUFNLHFCQUFaO0FBQUEsdUJBQW1DNEMsb0VBQVcsV0FBSWhFLEtBQUosRUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQU1FO0FBQUssbUJBQVMsRUFBQyxVQUFmO0FBQUEsaUNBRUU7QUFBQSw0Q0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWxFRixlQStFRTtBQUFLLGlCQUFTLEVBQUMsY0FBZjtBQUFBLGdDQUNFO0FBQUssdUJBQVUsWUFBZjtBQUE0QixtQkFBUyxFQUFDLGFBQXRDO0FBQUEsa0NBQ0U7QUFBTyxnQkFBSSxFQUFDLFVBQVo7QUFBdUIsbUJBQU8sRUFBRTBCLElBQUksQ0FBQ3VDO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFPLG1CQUFPLEVBQUUsaUJBQUNsQyxDQUFEO0FBQUEscUJBQU9ELFFBQVEsQ0FBQ0MsQ0FBRCxDQUFmO0FBQUEsYUFBaEI7QUFBb0MseUJBQVUsTUFBOUM7QUFBcUQscUJBQVMsRUFBQztBQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLEVBR0d4QyxLQUFLLGdCQUNGO0FBQUcsZ0JBQUksb0NBQTZCQSxLQUE3QixDQUFQO0FBQTZDLGtCQUFNLEVBQUMsU0FBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREUsZ0JBRUE7QUFBRyxnQkFBSSxxQkFBUDtBQUE4QixrQkFBTSxFQUFDLFNBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQVNFO0FBQUssdUJBQVUsWUFBZjtBQUE0QixtQkFBUyxFQUFDLGFBQXRDO0FBQUEsa0NBQ0U7QUFBTyxnQkFBSSxFQUFDLFVBQVo7QUFBdUIsbUJBQU8sRUFBRW1DLElBQUksQ0FBQ3dDO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFPLG1CQUFPLEVBQUUsaUJBQUNuQyxDQUFEO0FBQUEscUJBQU9ELFFBQVEsQ0FBQ0MsQ0FBRCxDQUFmO0FBQUEsYUFBaEI7QUFBb0MscUJBQVMsRUFBQyxZQUE5QztBQUEyRCx5QkFBVTtBQUFyRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBSUU7QUFBRyxnQkFBSSxFQUFDLGtHQUFSO0FBQWdDLGtCQUFNLEVBQUMsU0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRGLGVBZ0JFO0FBQUssdUJBQVUsWUFBZjtBQUE0QixtQkFBUyxFQUFDLGFBQXRDO0FBQUEsa0NBQ0U7QUFBTyxnQkFBSSxFQUFDLFVBQVo7QUFBdUIsbUJBQU8sRUFBRUwsSUFBSSxDQUFDeUM7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQU8sbUJBQU8sRUFBRSxpQkFBQ3BDLENBQUQ7QUFBQSxxQkFBT0QsUUFBUSxDQUFDQyxDQUFELENBQWY7QUFBQSxhQUFoQjtBQUFvQyxxQkFBUyxFQUFDLFlBQTlDO0FBQTJELHlCQUFVO0FBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsRUFHR3hDLEtBQUssZ0JBQ0Y7QUFDRSxnQkFBSSxpQ0FBMEJpQyxXQUExQixxQkFBZ0RJLElBQWhELG9CQUE4RHJDLEtBQTlELENBRE47QUFFRSxrQkFBTSxFQUFDLFNBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREUsZ0JBSUY7QUFBRyxnQkFBSSxpQ0FBMEJpQyxXQUExQixxQkFBZ0RJLElBQWhELENBQVA7QUFBK0Qsa0JBQU0sRUFBQyxTQUF0RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBaEJGLEVBMkJHd0MsTUFBTSxDQUNKQyxJQURGLENBQ08zQyxJQURQLEVBRUU0QyxJQUZGLENBRU8sVUFBQUMsQ0FBQztBQUFBLGlCQUFJLENBQUM3QyxJQUFJLENBQUM2QyxDQUFELENBQVQ7QUFBQSxTQUZSLGlCQUdHO0FBQ0UsY0FBSSxFQUFDLFFBRFA7QUFFRSxrQkFBUSxFQUFFLElBRlo7QUFHRSxpQkFBTyxFQUFFO0FBQUEsbUJBQU1DLG9FQUFXLEVBQWpCO0FBQUEsV0FIWDtBQUlFLG1CQUFTLEVBQUMsd0JBSlo7QUFLRSxlQUFLLEVBQUM7QUFMUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhILGdCQVNHO0FBQU8sY0FBSSxFQUFDLFFBQVo7QUFBcUIsbUJBQVMsRUFBQyxRQUEvQjtBQUF3QyxlQUFLLEVBQUM7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFwQ047QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBL0VGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FGRjtBQTRIRCxDQXBURDs7R0FBTXpGLFM7VUFDV0csa0Q7OztLQURYSCxTO0FBc1ROLCtEQUFlQSxTQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FnZ3JlbWVudC5mMmZmNjk0MTNmMDM2ODM2MGQ4OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnXHJcbmltcG9ydCBSb3V0ZXIsIHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgc3dhbCBmcm9tICdzd2VldGFsZXJ0J1xyXG5pbXBvcnQge2Ftb3VudFNwYWNlLCBoYW5kbGVGb2N1cywgcGFyc2VEYXRlfSBmcm9tIFwiLi4vLi4vZGVmYXVsdHMvZXh0cmFGdW5jdGlvblwiXHJcblxyXG5jb25zdCBUaGlyZFN0ZXAgPSAoe3NldExvYWRpbmd9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCB7aWR9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IHBhdGhuYW1lID0gcm91dGVyLnBhdGhuYW1lXHJcbiAgY29uc3Qge2Ftb3VudH0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCB7dG9rZW59ID0gcm91dGVyLnF1ZXJ5XHJcbiAgY29uc3Qge2xlYWRJRH0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCBbYWdnclRva2VuLCBzZXRBZ2dyVG9rZW5dID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW2FnZ3JJZCxcclxuICAgIHNldEFnZ3JJZF0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBmaW5hbElEID0gaWQgfHwgbGVhZElEXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHN1bW1hID0gY29va2llLmdldCgnYW1vdW50JykgIT09IHVuZGVmaW5lZFxyXG4gICAgICA/IGNvb2tpZS5nZXQoJ2Ftb3VudCcpXHJcbiAgICAgIDogYW1vdW50XHJcbiAgICBjb25zdCBmaW5hbFN1bW1hID0gTWF0aC5mbG9vcihwYXJzZUludChzdW1tYSkgKiAwLjIpXHJcbiAgICBjb25zdCBkaXNjb3VudFN1bW1hID0gTWF0aC5mbG9vcihwYXJzZUludChmaW5hbFN1bW1hKSAvIDIpXHJcbiAgICBpZiAoZmluYWxTdW1tYSA+IDIwMDAwMCkge1xyXG4gICAgICBzZXRTdW1tYShmaW5hbFN1bW1hKVxyXG4gICAgICBzZXREaXNjb3VudChkaXNjb3VudFN1bW1hKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0U3VtbWEoMjAwMDAwKVxyXG4gICAgICBzZXREaXNjb3VudCgxMDAwMDApXHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhmaW5hbFN1bW1hKVxyXG4gIH0sIFtjb29raWUuZ2V0KCdhbW91bnQnKV0pXHJcblxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2codG9rZW4pXHJcbiAgICBzZXRBZ2dyVG9rZW4odG9rZW4pXHJcbiAgfSwgW3Rva2VuXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHBhdGhuYW1lID09PSAnL2FnZ3JlbWVudCcpIHtcclxuICAgICAgYXhpb3NcclxuICAgICAgICAuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9nZXREYXRhU2lnbj90b2tlbj0ke2FnZ3JUb2tlbn1gKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyh0b2tlbilcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgIGlmIChKU09OLnN0cmluZ2lmeShyZXMuZGF0YSkgPT09ICd7fScpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3RoaXMnKVxyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRBZ2dySWQocmVzLmRhdGEuaWQpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICB9LCBbYWdnclRva2VuXSlcclxuXHJcbiAgY29uc3QgW3N1bW1hLFxyXG4gICAgc2V0U3VtbWFdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbZGlzY291bnQsXHJcbiAgICBzZXREaXNjb3VudF0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFtwcmVkb3BsYXRhLFxyXG4gICAgc2V0T3BsYXRhXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtwYXltZW50RGF0ZSxcclxuICAgIHNldFBheW1lbnREYXRlXSA9IHVzZVN0YXRlKHBhcnNlRGF0ZSgxKSlcclxuICBjb25zdCBbZG9jcyxcclxuICAgIHNldERvY3NdID0gdXNlU3RhdGUoe1wiZG9jMVwiOiB0cnVlLCBcImRvYzJcIjogdHJ1ZSwgXCJkb2MzXCI6IHRydWUsIFwiZG9jNFwiOiB0cnVlfSlcclxuICBjb25zdCBbc3JvayxcclxuICAgIHNldFNyb2tdID0gdXNlU3RhdGUoJzEnKVxyXG4gIGNvbnN0IGNoZWNrRG9jID0gKGUpID0+IHtcclxuICAgIGNvbnN0IG5hbWUgPSBlLnRhcmdldC5kYXRhc2V0Lm5hbWVcclxuICAgIC8vIGNvbnNvbGUubG9nKGRvY3NbbmFtZV0pXHJcbiAgICBzZXREb2NzKHtcclxuICAgICAgLi4uZG9jcyxcclxuICAgICAgW25hbWVdOiAhZG9jc1tuYW1lXVxyXG4gICAgfSlcclxuICAgIGNvbnNvbGUubG9nKGRvY3MpXHJcblxyXG4gIH1cclxuICBjb25zdCBjaGFuZ2VPcGxhdGEgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgbmFtZSA9IGVcclxuICAgICAgLnRhcmdldFxyXG4gICAgICAuZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKVxyXG4gICAgc2V0T3BsYXRhKCFwcmVkb3BsYXRhKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2hhbmdlU3JvayA9IGUgPT4ge1xyXG4gICAgY29uc3QgbW9udGggPSBwYXJzZUludChlLnRhcmdldC52YWx1ZSlcclxuICAgIHNldFNyb2soZS50YXJnZXQudmFsdWUpXHJcbiAgICBzZXRQYXltZW50RGF0ZShwYXJzZURhdGUobW9udGgpKVxyXG4gICAgaWYgKGUudGFyZ2V0LnZhbHVlID4gMikge1xyXG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhbmdlX19saXN0JylcclxuICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0ID0gLTMwMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFuZ2VfX2xpc3QnKVxyXG4gICAgICBlbGVtZW50LnNjcm9sbExlZnQgPSAzMDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGFuZ2VTcm9rQnRuID0gKG1vbnRoKSA9PiB7XHJcbiAgICBjb25zdCBtb250aFZhbCA9IHBhcnNlSW50KG1vbnRoKVxyXG4gICAgc2V0U3Jvayhtb250aClcclxuICAgIHNldFBheW1lbnREYXRlKHBhcnNlRGF0ZShtb250aFZhbCkpXHJcbiAgICBpZiAobW9udGhWYWwgPiAzKSB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFuZ2VfX2xpc3QnKVxyXG4gICAgICBlbGVtZW50LnNjcm9sbExlZnQgPSAyMDA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhbmdlX19saXN0JylcclxuICAgICAgZWxlbWVudC5zY3JvbGxSaWdodCA9IDIwMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGFnZ3JlbWVudFNibXQgPSBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vcmVtb3ZlU2hvcnRVcmxgLCB7XHJcbiAgICAgIHBhcmFtczoge1xyXG4gICAgICAgIGlkOiBhZ2dySWQsXHJcbiAgICAgICAgdHlwZVBheW1lbnQ6IHByZWRvcGxhdGFcclxuICAgICAgICAgID8gJ9Cf0YDQtdC00L7Qv9C70LDRgtCwJ1xyXG4gICAgICAgICAgOiAn0J/QvtGB0YLQvtC/0LvQsNGC0LAnLFxyXG4gICAgICAgIHBlcmlvZDogc3JvayxcclxuICAgICAgICBkYXRlX3BheW1lbnQ6IHBheW1lbnREYXRlLFxyXG4gICAgICAgIGFtb3VudFBheW1lbnQ6IGRpc2NvdW50XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgc3dhbChcItCj0YHQv9C10YjQvdC+IVwiLCBg0JLQsNGI0LAg0LfQsNGP0LLQutCwINC+0YLQv9GA0LDQstC70LXQvdCwINCyIE5hc2ggQ29tcGFueS4g0JLQsNC8INGB0LXQudGH0LDRgSDQv9C10YDQtdC30LLQvtC90Y/RgiDRgSDQvdC+0LzQtdGA0LAgKzcoNzAwKTM1MC01MC0wMGAsIFwic3VjY2Vzc1wiKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IHN0ZXBUaGlyZCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGNvbnN0IG9iamVjdCA9IHtcclxuICAgICAgaWQ6IGNvb2tpZS5nZXQoJ2xlYWRfaWQnKSA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgPyBmaW5hbElEXHJcbiAgICAgICAgOiBjb29raWUuZ2V0KCdsZWFkX2lkJyksXHJcbiAgICAgIHRva2VuOiBjb29raWUuZ2V0KCd0b2tlbicpLFxyXG4gICAgICBhbW91bnRQYXltZW50OiBkaXNjb3VudCxcclxuICAgICAgZGF0ZV9wYXltZW50OiBwYXltZW50RGF0ZSxcclxuICAgICAgcGVyaW9kOiBzcm9rLFxyXG4gICAgICB0eXBlUGF5bWVudDogcHJlZG9wbGF0YVxyXG4gICAgICAgID8gJ9Cf0YDQtdC00L7Qv9C70LDRgtCwJ1xyXG4gICAgICAgIDogJ9Cf0L7RgdGC0L7Qv9C70LDRgtCwJ1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjb29raWUuZ2V0KCd1dG1fc291cmNlJykgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBvYmplY3QudXRtX3NvdXJjZSA9IGNvb2tpZS5nZXQoJ3V0bV9zb3VyY2UnKVxyXG4gICAgICBvYmplY3QuY2xpY2tfaWQgPSBjb29raWUuZ2V0KCdjbGlja19pZCcpXHJcbiAgICAgIC8vIG9iamVjdC53ZWJJRCA9IGNvb2tpZS5nZXQoJ3dlYl9pZCcpXHJcbiAgICB9XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9zdGVwVGhyZWVgLCB7cGFyYW1zOiBvYmplY3R9KVxyXG4gICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgIGlmIChyZXMuZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICBzd2FsKFwi0KPRgdC/0LXRiNC90L4hXCIsIGDQktCw0YjQsCDQt9Cw0Y/QstC60LAg0L7RgtC/0YDQsNCy0LvQtdC90LAg0LIgTmFzaCBDb21wYW55LiDQktCw0Lwg0YHQtdC50YfQsNGBINC/0LXRgNC10LfQstC+0L3Rj9GCINGBINC90L7QvNC10YDQsCArNyg3MDApMzUwLTUwLTAwYCwgXCJzdWNjZXNzXCIpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2NhYmluZXQvcmVxdWVzdHMnKVxyXG4gICAgICAgICAgICBjb29raWUucmVtb3ZlKCdsZWFkX2lkJylcclxuICAgICAgICAgICAgY29va2llLnJlbW92ZSgnc3RlcCcpXHJcbiAgICAgICAgICAgIGNvb2tpZS5yZW1vdmUoJ3V0bV9tZWRpdW0nKVxyXG4gICAgICAgICAgICBjb29raWUucmVtb3ZlKCd1dG1fc291cmNlJylcclxuICAgICAgICAgICAgY29va2llLnJlbW92ZSgndXRtX2NhbXBhaWduJylcclxuICAgICAgICAgICAgY29va2llLnJlbW92ZSgnY2xpY2tfaWQnKVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZmluYWxTdWJtaXQgPSBlID0+IHtcclxuICAgIGlmIChwYXRobmFtZSA9PT0gJy9hZ2dyZW1lbnQnKSB7XHJcbiAgICAgIGFnZ3JlbWVudFNibXQoZSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN0ZXBUaGlyZChlKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gY29uc3QgZG9nb3Zvcm9icmFib3RrYSA9ICgpID0+IHsgICBpZihwYXRobmFtZSA9PT0gJy9hZ2dyZW1lbnQnKSB7ICAgICByZXR1cm5cclxuICAvLyBgL2RvZ292b3JvYnJhYm90a2E/dG9rZW49JHt0b2tlbn1gICAgfSAgIGlmKHBhdGhuYW1lID09PSAnL2NhYmluZXQvY29udGludWUnKVxyXG4gIC8vIHsgICAgIHJldHVybiBgL2RvZ292b3JvYnJhYm90a2E/aWQ9JHtpZH1gICAgfSAgIGVsc2UgeyAgICAgcmV0dXJuXHJcbiAgLy8gJy9kb2dvdm9yb2JyYWJvdGthJyAgIH0gfVxyXG4gIHJldHVybiAoXHJcblxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2Zvcm1fcmVnaXN0ZXIgdGhpcmRzdGVwJz5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKSA9PiBmaW5hbFN1Ym1pdChlKX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JhZGlvX2dyb3Vwcyc+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0ncG9zdG9wbGF0YSdcclxuICAgICAgICAgICAgZGF0YS1uYW1lPSdwb3N0b3BsYXRhJ1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9J2NoZWNrLWdyb3VwJ1xyXG4gICAgICAgICAgICBvbkNsaWNrPXtlID0+IGNoYW5nZU9wbGF0YShlKX0+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdjaGVja2JveCcgY2hlY2tlZD17cHJlZG9wbGF0YSA9PT0gZmFsc2V9Lz5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0ncmFkaW9sYWJlbCc+0J/QvtGB0YLQvtC/0LvQsNGC0LA8L2xhYmVsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9J3ByZWRvcGxhdGEnXHJcbiAgICAgICAgICAgIGRhdGEtbmFtZT0ncHJlZG9wbGF0YSdcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdjaGVjay1ncm91cCdcclxuICAgICAgICAgICAgb25DbGljaz17ZSA9PiBjaGFuZ2VPcGxhdGEoZSl9PlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0nY2hlY2tib3gnIGNoZWNrZWQ9e3ByZWRvcGxhdGEgPT09IHRydWV9Lz5cclxuXHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J3JhZGlvbGFiZWwnPtCf0YDQtdC00L7Qv9C70LDRgtCwPC9sYWJlbD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7IXByZWRvcGxhdGEgJiYgPGRpdiBjbGFzc05hbWU9XCJyYW5nZVwiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSdzcm9rX21vbnRoJz7QodGA0L7QuiDQvtC/0LvQsNGC0YsgKNC80LXRgdGP0YYpPC9wPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJhbmdlX19pbnB1dFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtzcm9rfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBjaGFuZ2VTcm9rKGUpfVxyXG4gICAgICAgICAgICBtaW49XCIxXCJcclxuICAgICAgICAgICAgbWF4PVwiM1wiXHJcbiAgICAgICAgICAgIHN0ZXA9XCIxXCJcclxuICAgICAgICAgICAgbGlzdD1cIm51bWJlclwiLz5cclxuICAgICAgICAgIDxkYXRhbGlzdCBjbGFzc05hbWU9J3JhbmdlX19saXN0JyBpZD1cIm51bWJlclwiPlxyXG4gICAgICAgICAgICA8b3B0aW9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlU3Jva0J0bignMScpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHJhbmdlX19vcHQgb3B0MCAke3Nyb2sgPT09ICcxJyAmJiAnYWN0aXZlJ31gfT4xPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VTcm9rQnRuKCcyJyl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcmFuZ2VfX29wdCAke3Nyb2sgPT09ICcyJyAmJiAnYWN0aXZlJ31gfT4yPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VTcm9rQnRuKCczJyl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcmFuZ2VfX29wdCAke3Nyb2sgPT09ICczJyAmJiAnYWN0aXZlJ31gfT4zPC9vcHRpb24+XHJcbiAgICAgICAgICAgIHsvKiA8b3B0aW9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlU3Jva0J0bignNCcpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHJhbmdlX19vcHQgJHtzcm9rID09PSAnNCcgJiYgJ2FjdGl2ZSd9YH0+NDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlU3Jva0J0bignNScpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHJhbmdlX19vcHQgJHtzcm9rID09PSAnNScgJiYgJ2FjdGl2ZSd9YH0+NTwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlU3Jva0J0bignNicpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHJhbmdlX19vcHQgJHtzcm9rID09PSAnNicgJiYgJ2FjdGl2ZSd9YH0+Njwvb3B0aW9uPiAqL31cclxuICAgICAgICAgIDwvZGF0YWxpc3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbn1cclxuICAgICAgICB7IXByZWRvcGxhdGEgJiYgPGRpdiBjbGFzc05hbWU9J3BheW1lbnRfZGF0ZSc+XHJcbiAgICAgICAgICA8c3Ryb25nPtCU0LXQvdGMINC+0L/Qu9Cw0YLRiyDQtNC+IHtwYXltZW50RGF0ZX1cclxuICAgICAgICAgIDwvc3Ryb25nPlxyXG4gICAgICAgIDwvZGl2Pn1cclxuXHJcbiAgICAgICAgey8qIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT0nbnVtYmVyJ1xyXG4gICAgICAgICAgY2xhc3NOYW1lPSdzdW1tYSdcclxuICAgICAgICAgIHZhbHVlPXtzdW1tYX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFN1bW1hKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPSfQodGD0LzQvNCwINC+0L/Qu9Cw0YLRiycvPiAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGF5bWVudF9hbW91bnQnPlxyXG4gICAgICAgICAgPHA+0KHRg9C80LzQsCDQvtC/0LvQsNGC0Ys6PC9wPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHN0cm9uZz57YW1vdW50U3BhY2UoYCR7ZGlzY291bnR9YCl90YLQszwvc3Ryb25nPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByaWNlLS1saW5lLXRocm91Z2hcIj57YW1vdW50U3BhY2UoYCR7c3VtbWF9YCl90YLQszwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Rpc2NvdW50Jz5cclxuICAgICAgICAgICAgey8qIDxpbWcgc3JjPScvaW1nL2Rpc2NvdW50LnBuZycvPiAqL31cclxuICAgICAgICAgICAgPHA+LTUwJVxyXG4gICAgICAgICAgICAgIDxzcGFuPtCh0JrQmNCU0JrQkDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NoZWNrX2dyb3Vwcyc+XHJcbiAgICAgICAgICA8ZGl2IGRhdGEtbmFtZT0ncHJlZG9wbGF0YScgY2xhc3NOYW1lPSdjaGVjay1ncm91cCc+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdjaGVja2JveCcgY2hlY2tlZD17ZG9jcy5kb2MxfS8+XHJcbiAgICAgICAgICAgIDxsYWJlbCBvbkNsaWNrPXsoZSkgPT4gY2hlY2tEb2MoZSl9IGRhdGEtbmFtZT0nZG9jMScgY2xhc3NOYW1lPSdjaGVja2xhYmVsJz48L2xhYmVsPlxyXG4gICAgICAgICAgICB7dG9rZW5cclxuICAgICAgICAgICAgICA/IDxhIGhyZWY9e2AvZG9nb3Zvcm9icmFib3RrYT90b2tlbj0ke3Rva2VufWB9IHRhcmdldD0nX19ibGFuayc+0JfQsNC/0YDQvtGBINC90LAg0L7QsdGA0LDQsdC+0YLQutGDINC/0LXRgNGB0L7QvdCw0LvRjNC90YvRhSDQtNCw0L3QvdGL0YU8L2E+XHJcbiAgICAgICAgICAgICAgICA6IDxhIGhyZWY9e2AvZG9nb3Zvcm9icmFib3RrYWB9IHRhcmdldD0nX19ibGFuayc+0JfQsNC/0YDQvtGBINC90LAg0L7QsdGA0LDQsdC+0YLQutGDINC/0LXRgNGB0L7QvdCw0LvRjNC90YvRhSDQtNCw0L3QvdGL0YU8L2E+fVxyXG5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBkYXRhLW5hbWU9J3Bvc3RvcGxhdGEnIGNsYXNzTmFtZT0nY2hlY2stZ3JvdXAnPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0nY2hlY2tib3gnIGNoZWNrZWQ9e2RvY3MuZG9jMn0vPlxyXG4gICAgICAgICAgICA8bGFiZWwgb25DbGljaz17KGUpID0+IGNoZWNrRG9jKGUpfSBjbGFzc05hbWU9J2NoZWNrbGFiZWwnIGRhdGEtbmFtZT0nZG9jMic+PC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgIDxhIGhyZWY9Jy/Qn9Cj0JHQm9CY0KfQndCQ0K8g0J7QpNCV0KDQotCQLnBkZicgdGFyZ2V0PSdfX2JsYW5rJz7QlNC+0LPQvtCy0L7RgCDQv9GD0LHQu9C40YfQvdC+0Lkg0L7RhNC10YDRgtGLPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBkYXRhLW5hbWU9J3ByZWRvcGxhdGEnIGNsYXNzTmFtZT0nY2hlY2stZ3JvdXAnPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0nY2hlY2tib3gnIGNoZWNrZWQ9e2RvY3MuZG9jNH0vPlxyXG4gICAgICAgICAgICA8bGFiZWwgb25DbGljaz17KGUpID0+IGNoZWNrRG9jKGUpfSBjbGFzc05hbWU9J2NoZWNrbGFiZWwnIGRhdGEtbmFtZT0nZG9jNCc+PC9sYWJlbD5cclxuICAgICAgICAgICAge3Rva2VuXHJcbiAgICAgICAgICAgICAgPyA8YVxyXG4gICAgICAgICAgICAgICAgICBocmVmPXtgL2RvZ292b3I/cGF5bWVudERhdGU9JHtwYXltZW50RGF0ZX0mcGVyaW9kPSR7c3Jva30mdG9rZW49JHt0b2tlbn1gfVxyXG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9J19fYmxhbmsnPtCU0L7Qs9C+0LLQvtGAINC90LAg0LfQsNC60LDQtyDQvdCw0YDRj9C0PC9hPlxyXG4gICAgICAgICAgICAgIDogPGEgaHJlZj17YC9kb2dvdm9yP3BheW1lbnREYXRlPSR7cGF5bWVudERhdGV9JnBlcmlvZD0ke3Nyb2t9YH0gdGFyZ2V0PSdfX2JsYW5rJz7QlNC+0LPQvtCy0L7RgCDQvdCwINC30LDQutCw0Lcg0L3QsNGA0Y/QtDwvYT59XHJcblxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAge09iamVjdFxyXG4gICAgICAgICAgICAua2V5cyhkb2NzKVxyXG4gICAgICAgICAgICAuc29tZShrID0+ICFkb2NzW2tdKVxyXG4gICAgICAgICAgICA/IDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVGb2N1cygpfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdidXR0b24gYnV0dG9uX2xpZ2h0ZXN0J1xyXG4gICAgICAgICAgICAgICAgdmFsdWU9J9Cf0L7Qu9GD0YfQuNGC0Ywg0YDQtdC30YPQu9GM0YLQsNGCJy8+XHJcbiAgICAgICAgICAgIDogPGlucHV0IHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPSdidXR0b24nIHZhbHVlPSfQn9C+0LvRg9GH0LjRgtGMINGA0LXQt9GD0LvRjNGC0LDRgicvPlxyXG59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGhpcmRTdGVwIl0sInNvdXJjZVJvb3QiOiIifQ==