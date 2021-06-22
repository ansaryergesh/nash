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
    console.log(aggrToken);

    if (pathname === '/aggrement') {
      axios__WEBPACK_IMPORTED_MODULE_2___default().get("".concat("https://crediter.kz/api", "/getDataSign?token=").concat(aggrToken)).then(function (res) {
        console.log(token);
        console.log(res);

        if (!res.data.id) {// router.push('/')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRzZXJ2aWNlL1RoaXJkU3RlcC5qcyJdLCJuYW1lcyI6WyJUaGlyZFN0ZXAiLCJzZXRMb2FkaW5nIiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJxdWVyeSIsInBhdGhuYW1lIiwiYW1vdW50IiwidG9rZW4iLCJsZWFkSUQiLCJ1c2VTdGF0ZSIsImFnZ3JUb2tlbiIsInNldEFnZ3JUb2tlbiIsImFnZ3JJZCIsInNldEFnZ3JJZCIsImZpbmFsSUQiLCJ1c2VFZmZlY3QiLCJzdW1tYSIsImNvb2tpZSIsInVuZGVmaW5lZCIsImZpbmFsU3VtbWEiLCJNYXRoIiwiZmxvb3IiLCJwYXJzZUludCIsImRpc2NvdW50U3VtbWEiLCJzZXRTdW1tYSIsInNldERpc2NvdW50IiwiY29uc29sZSIsImxvZyIsImF4aW9zIiwicHJvY2VzcyIsInRoZW4iLCJyZXMiLCJkYXRhIiwiZGlzY291bnQiLCJwcmVkb3BsYXRhIiwic2V0T3BsYXRhIiwicGFyc2VEYXRlIiwicGF5bWVudERhdGUiLCJzZXRQYXltZW50RGF0ZSIsImRvY3MiLCJzZXREb2NzIiwic3JvayIsInNldFNyb2siLCJjaGVja0RvYyIsImUiLCJuYW1lIiwidGFyZ2V0IiwiZGF0YXNldCIsImNoYW5nZU9wbGF0YSIsImdldEF0dHJpYnV0ZSIsImNoYW5nZVNyb2siLCJtb250aCIsInZhbHVlIiwiZWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNjcm9sbExlZnQiLCJjaGFuZ2VTcm9rQnRuIiwibW9udGhWYWwiLCJzY3JvbGxSaWdodCIsImFnZ3JlbWVudFNibXQiLCJwcmV2ZW50RGVmYXVsdCIsInBhcmFtcyIsInR5cGVQYXltZW50IiwicGVyaW9kIiwiZGF0ZV9wYXltZW50IiwiYW1vdW50UGF5bWVudCIsInN0YXR1cyIsInN3YWwiLCJwdXNoIiwiZXJyIiwic3RlcFRoaXJkIiwib2JqZWN0IiwidXRtX3NvdXJjZSIsImNsaWNrX2lkIiwic3VjY2VzcyIsIlJvdXRlciIsImZpbmFsU3VibWl0IiwiYW1vdW50U3BhY2UiLCJkb2MxIiwiZG9jMiIsImRvYzQiLCJPYmplY3QiLCJrZXlzIiwic29tZSIsImsiLCJoYW5kbGVGb2N1cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQWtCO0FBQUE7O0FBQUE7O0FBQUEsTUFBaEJDLFVBQWdCLFFBQWhCQSxVQUFnQjtBQUNsQyxNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBRGtDLE1BRTNCQyxFQUYyQixHQUVyQkYsTUFBTSxDQUFDRyxLQUZjLENBRTNCRCxFQUYyQjtBQUdsQyxNQUFNRSxRQUFRLEdBQUdKLE1BQU0sQ0FBQ0ksUUFBeEI7QUFIa0MsTUFJM0JDLE1BSjJCLEdBSWpCTCxNQUFNLENBQUNHLEtBSlUsQ0FJM0JFLE1BSjJCO0FBQUEsTUFLM0JDLEtBTDJCLEdBS2xCTixNQUFNLENBQUNHLEtBTFcsQ0FLM0JHLEtBTDJCO0FBQUEsTUFNM0JDLE1BTjJCLEdBTWpCUCxNQUFNLENBQUNHLEtBTlUsQ0FNM0JJLE1BTjJCOztBQUFBLGtCQU9BQywrQ0FBUSxDQUFDLEVBQUQsQ0FQUjtBQUFBLE1BTzNCQyxTQVAyQjtBQUFBLE1BT2hCQyxZQVBnQjs7QUFBQSxtQkFTbkJGLCtDQUFRLENBQUMsRUFBRCxDQVRXO0FBQUEsTUFRM0JHLE1BUjJCO0FBQUEsTUFTaENDLFNBVGdDOztBQVVsQyxNQUFNQyxPQUFPLEdBQUdYLEVBQUUsSUFBSUssTUFBdEI7QUFDQU8sa0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsS0FBSyxHQUFHQyxvREFBQSxDQUFXLFFBQVgsTUFBeUJDLFNBQXpCLEdBQ1ZELG9EQUFBLENBQVcsUUFBWCxDQURVLEdBRVZYLE1BRko7QUFHQSxRQUFNYSxVQUFVLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFX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RUFHR3JDLEtBQUssZ0JBQ0Y7QUFDRSxnQkFBSSxpQ0FBMEI4QixXQUExQixxQkFBZ0RJLElBQWhELG9CQUE4RGxDLEtBQTlELENBRE47QUFFRSxrQkFBTSxFQUFDLFNBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREUsZ0JBSUY7QUFBRyxnQkFBSSxpQ0FBMEI4QixXQUExQixxQkFBZ0RJLElBQWhELENBQVA7QUFBK0Qsa0JBQU0sRUFBQyxTQUF0RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBaEJGLEVBMkJHeUMsTUFBTSxDQUNKQyxJQURGLENBQ081QyxJQURQLEVBRUU2QyxJQUZGLENBRU8sVUFBQUMsQ0FBQztBQUFBLGlCQUFJLENBQUM5QyxJQUFJLENBQUM4QyxDQUFELENBQVQ7QUFBQSxTQUZSLGlCQUdHO0FBQ0UsY0FBSSxFQUFDLFFBRFA7QUFFRSxrQkFBUSxFQUFFLElBRlo7QUFHRSxpQkFBTyxFQUFFO0FBQUEsbUJBQU1DLG9FQUFXLEVBQWpCO0FBQUEsV0FIWDtBQUlFLG1CQUFTLEVBQUMsd0JBSlo7QUFLRSxlQUFLLEVBQUM7QUFMUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhILGdCQVNHO0FBQU8sY0FBSSxFQUFDLFFBQVo7QUFBcUIsbUJBQVMsRUFBQyxRQUEvQjtBQUF3QyxlQUFLLEVBQUM7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFwQ047QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBL0VGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FGRjtBQTRIRCxDQXBURDs7R0FBTXZGLFM7VUFDV0csa0Q7OztLQURYSCxTO0FBc1ROLCtEQUFlQSxTQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FnZ3JlbWVudC4xYzFjODlhYTQ3OTM4OTNkMzg1MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnXHJcbmltcG9ydCBSb3V0ZXIsIHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgc3dhbCBmcm9tICdzd2VldGFsZXJ0J1xyXG5pbXBvcnQge2Ftb3VudFNwYWNlLCBoYW5kbGVGb2N1cywgcGFyc2VEYXRlfSBmcm9tIFwiLi4vLi4vZGVmYXVsdHMvZXh0cmFGdW5jdGlvblwiXHJcblxyXG5jb25zdCBUaGlyZFN0ZXAgPSAoe3NldExvYWRpbmd9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCB7aWR9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IHBhdGhuYW1lID0gcm91dGVyLnBhdGhuYW1lXHJcbiAgY29uc3Qge2Ftb3VudH0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCB7dG9rZW59ID0gcm91dGVyLnF1ZXJ5XHJcbiAgY29uc3Qge2xlYWRJRH0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCBbYWdnclRva2VuLCBzZXRBZ2dyVG9rZW5dID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW2FnZ3JJZCxcclxuICAgIHNldEFnZ3JJZF0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBmaW5hbElEID0gaWQgfHwgbGVhZElEXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHN1bW1hID0gY29va2llLmdldCgnYW1vdW50JykgIT09IHVuZGVmaW5lZFxyXG4gICAgICA/IGNvb2tpZS5nZXQoJ2Ftb3VudCcpXHJcbiAgICAgIDogYW1vdW50XHJcbiAgICBjb25zdCBmaW5hbFN1bW1hID0gTWF0aC5mbG9vcihwYXJzZUludChzdW1tYSkgKiAwLjIpXHJcbiAgICBjb25zdCBkaXNjb3VudFN1bW1hID0gTWF0aC5mbG9vcihwYXJzZUludChmaW5hbFN1bW1hKSAvIDIpXHJcbiAgICBpZiAoZmluYWxTdW1tYSA+IDIwMDAwMCkge1xyXG4gICAgICBzZXRTdW1tYShmaW5hbFN1bW1hKVxyXG4gICAgICBzZXREaXNjb3VudChkaXNjb3VudFN1bW1hKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0U3VtbWEoMjAwMDAwKVxyXG4gICAgICBzZXREaXNjb3VudCgxMDAwMDApXHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhmaW5hbFN1bW1hKVxyXG4gIH0sIFtjb29raWUuZ2V0KCdhbW91bnQnKV0pXHJcblxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2codG9rZW4pXHJcbiAgICBzZXRBZ2dyVG9rZW4odG9rZW4pXHJcbiAgfSwgW3Rva2VuXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coYWdnclRva2VuKVxyXG4gICAgaWYgKHBhdGhuYW1lID09PSAnL2FnZ3JlbWVudCcpIHtcclxuICAgICAgYXhpb3NcclxuICAgICAgICAuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9nZXREYXRhU2lnbj90b2tlbj0ke2FnZ3JUb2tlbn1gKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyh0b2tlbilcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgIGlmICghcmVzLmRhdGEuaWQpIHtcclxuICAgICAgICAgICAgLy8gcm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0QWdncklkKHJlcy5kYXRhLmlkKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSwgW2FnZ3JUb2tlbl0pXHJcblxyXG4gIGNvbnN0IFtzdW1tYSxcclxuICAgIHNldFN1bW1hXSA9IHVzZVN0YXRlKDApXHJcbiAgY29uc3QgW2Rpc2NvdW50LFxyXG4gICAgc2V0RGlzY291bnRdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbcHJlZG9wbGF0YSxcclxuICAgIHNldE9wbGF0YV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbcGF5bWVudERhdGUsXHJcbiAgICBzZXRQYXltZW50RGF0ZV0gPSB1c2VTdGF0ZShwYXJzZURhdGUoMSkpXHJcbiAgY29uc3QgW2RvY3MsXHJcbiAgICBzZXREb2NzXSA9IHVzZVN0YXRlKHtcImRvYzFcIjogdHJ1ZSwgXCJkb2MyXCI6IHRydWUsIFwiZG9jM1wiOiB0cnVlLCBcImRvYzRcIjogdHJ1ZX0pXHJcbiAgY29uc3QgW3Nyb2ssXHJcbiAgICBzZXRTcm9rXSA9IHVzZVN0YXRlKCcxJylcclxuICBjb25zdCBjaGVja0RvYyA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBuYW1lID0gZS50YXJnZXQuZGF0YXNldC5uYW1lXHJcbiAgICAvLyBjb25zb2xlLmxvZyhkb2NzW25hbWVdKVxyXG4gICAgc2V0RG9jcyh7XHJcbiAgICAgIC4uLmRvY3MsXHJcbiAgICAgIFtuYW1lXTogIWRvY3NbbmFtZV1cclxuICAgIH0pXHJcbiAgICBjb25zb2xlLmxvZyhkb2NzKVxyXG5cclxuICB9XHJcbiAgY29uc3QgY2hhbmdlT3BsYXRhID0gKGUpID0+IHtcclxuICAgIGNvbnN0IG5hbWUgPSBlXHJcbiAgICAgIC50YXJnZXRcclxuICAgICAgLmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJylcclxuICAgIHNldE9wbGF0YSghcHJlZG9wbGF0YSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGNoYW5nZVNyb2sgPSBlID0+IHtcclxuICAgIGNvbnN0IG1vbnRoID0gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUpXHJcbiAgICBzZXRTcm9rKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgc2V0UGF5bWVudERhdGUocGFyc2VEYXRlKG1vbnRoKSlcclxuICAgIGlmIChlLnRhcmdldC52YWx1ZSA+IDIpIHtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYW5nZV9fbGlzdCcpXHJcbiAgICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCA9IC0zMDA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhbmdlX19saXN0JylcclxuICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0ID0gMzAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2hhbmdlU3Jva0J0biA9IChtb250aCkgPT4ge1xyXG4gICAgY29uc3QgbW9udGhWYWwgPSBwYXJzZUludChtb250aClcclxuICAgIHNldFNyb2sobW9udGgpXHJcbiAgICBzZXRQYXltZW50RGF0ZShwYXJzZURhdGUobW9udGhWYWwpKVxyXG4gICAgaWYgKG1vbnRoVmFsID4gMykge1xyXG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhbmdlX19saXN0JylcclxuICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0ID0gMjAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYW5nZV9fbGlzdCcpXHJcbiAgICAgIGVsZW1lbnQuc2Nyb2xsUmlnaHQgPSAyMDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBhZ2dyZW1lbnRTYm10ID0gZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgIGF4aW9zXHJcbiAgICAgIC5nZXQoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L3JlbW92ZVNob3J0VXJsYCwge1xyXG4gICAgICBwYXJhbXM6IHtcclxuICAgICAgICBpZDogYWdncklkLFxyXG4gICAgICAgIHR5cGVQYXltZW50OiBwcmVkb3BsYXRhXHJcbiAgICAgICAgICA/ICfQn9GA0LXQtNC+0L/Qu9Cw0YLQsCdcclxuICAgICAgICAgIDogJ9Cf0L7RgdGC0L7Qv9C70LDRgtCwJyxcclxuICAgICAgICBwZXJpb2Q6IHNyb2ssXHJcbiAgICAgICAgZGF0ZV9wYXltZW50OiBwYXltZW50RGF0ZSxcclxuICAgICAgICBhbW91bnRQYXltZW50OiBkaXNjb3VudFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgIHN3YWwoXCLQo9GB0L/QtdGI0L3QviFcIiwgYNCS0LDRiNCwINC30LDRj9Cy0LrQsCDQvtGC0L/RgNCw0LLQu9C10L3QsCDQsiBOYXNoIENvbXBhbnkuINCS0LDQvCDRgdC10LnRh9Cw0YEg0L/QtdGA0LXQt9Cy0L7QvdGP0YIg0YEg0L3QvtC80LXRgNCwICs3KDcwMCkzNTAtNTAtMDBgLCBcInN1Y2Nlc3NcIikudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvJylcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBzdGVwVGhpcmQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBjb25zdCBvYmplY3QgPSB7XHJcbiAgICAgIGlkOiBjb29raWUuZ2V0KCdsZWFkX2lkJykgPT09IHVuZGVmaW5lZFxyXG4gICAgICAgID8gZmluYWxJRFxyXG4gICAgICAgIDogY29va2llLmdldCgnbGVhZF9pZCcpLFxyXG4gICAgICB0b2tlbjogY29va2llLmdldCgndG9rZW4nKSxcclxuICAgICAgYW1vdW50UGF5bWVudDogZGlzY291bnQsXHJcbiAgICAgIGRhdGVfcGF5bWVudDogcGF5bWVudERhdGUsXHJcbiAgICAgIHBlcmlvZDogc3JvayxcclxuICAgICAgdHlwZVBheW1lbnQ6IHByZWRvcGxhdGFcclxuICAgICAgICA/ICfQn9GA0LXQtNC+0L/Qu9Cw0YLQsCdcclxuICAgICAgICA6ICfQn9C+0YHRgtC+0L/Qu9Cw0YLQsCdcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY29va2llLmdldCgndXRtX3NvdXJjZScpICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgb2JqZWN0LnV0bV9zb3VyY2UgPSBjb29raWUuZ2V0KCd1dG1fc291cmNlJylcclxuICAgICAgb2JqZWN0LmNsaWNrX2lkID0gY29va2llLmdldCgnY2xpY2tfaWQnKVxyXG4gICAgICAvLyBvYmplY3Qud2ViSUQgPSBjb29raWUuZ2V0KCd3ZWJfaWQnKVxyXG4gICAgfVxyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vc3RlcFRocmVlYCwge3BhcmFtczogb2JqZWN0fSlcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICBpZiAocmVzLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgc3dhbChcItCj0YHQv9C10YjQvdC+IVwiLCBg0JLQsNGI0LAg0LfQsNGP0LLQutCwINC+0YLQv9GA0LDQstC70LXQvdCwINCyIE5hc2ggQ29tcGFueS4g0JLQsNC8INGB0LXQudGH0LDRgSDQv9C10YDQtdC30LLQvtC90Y/RgiDRgSDQvdC+0LzQtdGA0LAgKzcoNzAwKTM1MC01MC0wMGAsIFwic3VjY2Vzc1wiKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goJy9jYWJpbmV0L3JlcXVlc3RzJylcclxuICAgICAgICAgICAgY29va2llLnJlbW92ZSgnbGVhZF9pZCcpXHJcbiAgICAgICAgICAgIGNvb2tpZS5yZW1vdmUoJ3N0ZXAnKVxyXG4gICAgICAgICAgICBjb29raWUucmVtb3ZlKCd1dG1fbWVkaXVtJylcclxuICAgICAgICAgICAgY29va2llLnJlbW92ZSgndXRtX3NvdXJjZScpXHJcbiAgICAgICAgICAgIGNvb2tpZS5yZW1vdmUoJ3V0bV9jYW1wYWlnbicpXHJcbiAgICAgICAgICAgIGNvb2tpZS5yZW1vdmUoJ2NsaWNrX2lkJylcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGZpbmFsU3VibWl0ID0gZSA9PiB7XHJcbiAgICBpZiAocGF0aG5hbWUgPT09ICcvYWdncmVtZW50Jykge1xyXG4gICAgICBhZ2dyZW1lbnRTYm10KGUpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzdGVwVGhpcmQoZSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGNvbnN0IGRvZ292b3JvYnJhYm90a2EgPSAoKSA9PiB7ICAgaWYocGF0aG5hbWUgPT09ICcvYWdncmVtZW50JykgeyAgICAgcmV0dXJuXHJcbiAgLy8gYC9kb2dvdm9yb2JyYWJvdGthP3Rva2VuPSR7dG9rZW59YCAgIH0gICBpZihwYXRobmFtZSA9PT0gJy9jYWJpbmV0L2NvbnRpbnVlJylcclxuICAvLyB7ICAgICByZXR1cm4gYC9kb2dvdm9yb2JyYWJvdGthP2lkPSR7aWR9YCAgIH0gICBlbHNlIHsgICAgIHJldHVyblxyXG4gIC8vICcvZG9nb3Zvcm9icmFib3RrYScgICB9IH1cclxuICByZXR1cm4gKFxyXG5cclxuICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtX3JlZ2lzdGVyIHRoaXJkc3RlcCc+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSkgPT4gZmluYWxTdWJtaXQoZSl9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyYWRpb19ncm91cHMnPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9J3Bvc3RvcGxhdGEnXHJcbiAgICAgICAgICAgIGRhdGEtbmFtZT0ncG9zdG9wbGF0YSdcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdjaGVjay1ncm91cCdcclxuICAgICAgICAgICAgb25DbGljaz17ZSA9PiBjaGFuZ2VPcGxhdGEoZSl9PlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0nY2hlY2tib3gnIGNoZWNrZWQ9e3ByZWRvcGxhdGEgPT09IGZhbHNlfS8+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J3JhZGlvbGFiZWwnPtCf0L7RgdGC0L7Qv9C70LDRgtCwPC9sYWJlbD5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdwcmVkb3BsYXRhJ1xyXG4gICAgICAgICAgICBkYXRhLW5hbWU9J3ByZWRvcGxhdGEnXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nY2hlY2stZ3JvdXAnXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gY2hhbmdlT3BsYXRhKGUpfT5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J2NoZWNrYm94JyBjaGVja2VkPXtwcmVkb3BsYXRhID09PSB0cnVlfS8+XHJcblxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdyYWRpb2xhYmVsJz7Qn9GA0LXQtNC+0L/Qu9Cw0YLQsDwvbGFiZWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgeyFwcmVkb3BsYXRhICYmIDxkaXYgY2xhc3NOYW1lPVwicmFuZ2VcIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nc3Jva19tb250aCc+0KHRgNC+0Log0L7Qv9C70LDRgtGLICjQvNC10YHRj9GGKTwvcD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyYW5nZV9faW5wdXRcIlxyXG4gICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxyXG4gICAgICAgICAgICB2YWx1ZT17c3Jva31cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gY2hhbmdlU3JvayhlKX1cclxuICAgICAgICAgICAgbWluPVwiMVwiXHJcbiAgICAgICAgICAgIG1heD1cIjNcIlxyXG4gICAgICAgICAgICBzdGVwPVwiMVwiXHJcbiAgICAgICAgICAgIGxpc3Q9XCJudW1iZXJcIi8+XHJcbiAgICAgICAgICA8ZGF0YWxpc3QgY2xhc3NOYW1lPSdyYW5nZV9fbGlzdCcgaWQ9XCJudW1iZXJcIj5cclxuICAgICAgICAgICAgPG9wdGlvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZVNyb2tCdG4oJzEnKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2ByYW5nZV9fb3B0IG9wdDAgJHtzcm9rID09PSAnMScgJiYgJ2FjdGl2ZSd9YH0+MTwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlU3Jva0J0bignMicpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHJhbmdlX19vcHQgJHtzcm9rID09PSAnMicgJiYgJ2FjdGl2ZSd9YH0+Mjwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlU3Jva0J0bignMycpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHJhbmdlX19vcHQgJHtzcm9rID09PSAnMycgJiYgJ2FjdGl2ZSd9YH0+Mzwvb3B0aW9uPlxyXG4gICAgICAgICAgICB7LyogPG9wdGlvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZVNyb2tCdG4oJzQnKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2ByYW5nZV9fb3B0ICR7c3JvayA9PT0gJzQnICYmICdhY3RpdmUnfWB9PjQ8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZVNyb2tCdG4oJzUnKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2ByYW5nZV9fb3B0ICR7c3JvayA9PT0gJzUnICYmICdhY3RpdmUnfWB9PjU8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZVNyb2tCdG4oJzYnKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2ByYW5nZV9fb3B0ICR7c3JvayA9PT0gJzYnICYmICdhY3RpdmUnfWB9PjY8L29wdGlvbj4gKi99XHJcbiAgICAgICAgICA8L2RhdGFsaXN0PlxyXG4gICAgICAgIDwvZGl2PlxyXG59XHJcbiAgICAgICAgeyFwcmVkb3BsYXRhICYmIDxkaXYgY2xhc3NOYW1lPSdwYXltZW50X2RhdGUnPlxyXG4gICAgICAgICAgPHN0cm9uZz7QlNC10L3RjCDQvtC/0LvQsNGC0Ysg0LTQviB7cGF5bWVudERhdGV9XHJcbiAgICAgICAgICA8L3N0cm9uZz5cclxuICAgICAgICA8L2Rpdj59XHJcblxyXG4gICAgICAgIHsvKiA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9J251bWJlcidcclxuICAgICAgICAgIGNsYXNzTmFtZT0nc3VtbWEnXHJcbiAgICAgICAgICB2YWx1ZT17c3VtbWF9XHJcbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRTdW1tYShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj0n0KHRg9C80LzQsCDQvtC/0LvQsNGC0YsnLz4gKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BheW1lbnRfYW1vdW50Jz5cclxuICAgICAgICAgIDxwPtCh0YPQvNC80LAg0L7Qv9C70LDRgtGLOjwvcD5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzdHJvbmc+e2Ftb3VudFNwYWNlKGAke2Rpc2NvdW50fWApfdGC0LM8L3N0cm9uZz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcmljZS0tbGluZS10aHJvdWdoXCI+e2Ftb3VudFNwYWNlKGAke3N1bW1hfWApfdGC0LM8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXNjb3VudCc+XHJcbiAgICAgICAgICAgIHsvKiA8aW1nIHNyYz0nL2ltZy9kaXNjb3VudC5wbmcnLz4gKi99XHJcbiAgICAgICAgICAgIDxwPi01MCVcclxuICAgICAgICAgICAgICA8c3Bhbj7QodCa0JjQlNCa0JA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaGVja19ncm91cHMnPlxyXG4gICAgICAgICAgPGRpdiBkYXRhLW5hbWU9J3ByZWRvcGxhdGEnIGNsYXNzTmFtZT0nY2hlY2stZ3JvdXAnPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0nY2hlY2tib3gnIGNoZWNrZWQ9e2RvY3MuZG9jMX0vPlxyXG4gICAgICAgICAgICA8bGFiZWwgb25DbGljaz17KGUpID0+IGNoZWNrRG9jKGUpfSBkYXRhLW5hbWU9J2RvYzEnIGNsYXNzTmFtZT0nY2hlY2tsYWJlbCc+PC9sYWJlbD5cclxuICAgICAgICAgICAge3Rva2VuXHJcbiAgICAgICAgICAgICAgPyA8YSBocmVmPXtgL2RvZ292b3JvYnJhYm90a2E/dG9rZW49JHt0b2tlbn1gfSB0YXJnZXQ9J19fYmxhbmsnPtCX0LDQv9GA0L7RgSDQvdCwINC+0LHRgNCw0LHQvtGC0LrRgyDQv9C10YDRgdC+0L3QsNC70YzQvdGL0YUg0LTQsNC90L3Ri9GFPC9hPlxyXG4gICAgICAgICAgICAgICAgOiA8YSBocmVmPXtgL2RvZ292b3JvYnJhYm90a2FgfSB0YXJnZXQ9J19fYmxhbmsnPtCX0LDQv9GA0L7RgSDQvdCwINC+0LHRgNCw0LHQvtGC0LrRgyDQv9C10YDRgdC+0L3QsNC70YzQvdGL0YUg0LTQsNC90L3Ri9GFPC9hPn1cclxuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgZGF0YS1uYW1lPSdwb3N0b3BsYXRhJyBjbGFzc05hbWU9J2NoZWNrLWdyb3VwJz5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J2NoZWNrYm94JyBjaGVja2VkPXtkb2NzLmRvYzJ9Lz5cclxuICAgICAgICAgICAgPGxhYmVsIG9uQ2xpY2s9eyhlKSA9PiBjaGVja0RvYyhlKX0gY2xhc3NOYW1lPSdjaGVja2xhYmVsJyBkYXRhLW5hbWU9J2RvYzInPjwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICA8YSBocmVmPScv0J/Qo9CR0JvQmNCn0J3QkNCvINCe0KTQldCg0KLQkC5wZGYnIHRhcmdldD0nX19ibGFuayc+0JTQvtCz0L7QstC+0YAg0L/Rg9Cx0LvQuNGH0L3QvtC5INC+0YTQtdGA0YLRizwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgZGF0YS1uYW1lPSdwcmVkb3BsYXRhJyBjbGFzc05hbWU9J2NoZWNrLWdyb3VwJz5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J2NoZWNrYm94JyBjaGVja2VkPXtkb2NzLmRvYzR9Lz5cclxuICAgICAgICAgICAgPGxhYmVsIG9uQ2xpY2s9eyhlKSA9PiBjaGVja0RvYyhlKX0gY2xhc3NOYW1lPSdjaGVja2xhYmVsJyBkYXRhLW5hbWU9J2RvYzQnPjwvbGFiZWw+XHJcbiAgICAgICAgICAgIHt0b2tlblxyXG4gICAgICAgICAgICAgID8gPGFcclxuICAgICAgICAgICAgICAgICAgaHJlZj17YC9kb2dvdm9yP3BheW1lbnREYXRlPSR7cGF5bWVudERhdGV9JnBlcmlvZD0ke3Nyb2t9JnRva2VuPSR7dG9rZW59YH1cclxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfX2JsYW5rJz7QlNC+0LPQvtCy0L7RgCDQvdCwINC30LDQutCw0Lcg0L3QsNGA0Y/QtDwvYT5cclxuICAgICAgICAgICAgICA6IDxhIGhyZWY9e2AvZG9nb3Zvcj9wYXltZW50RGF0ZT0ke3BheW1lbnREYXRlfSZwZXJpb2Q9JHtzcm9rfWB9IHRhcmdldD0nX19ibGFuayc+0JTQvtCz0L7QstC+0YAg0L3QsCDQt9Cw0LrQsNC3INC90LDRgNGP0LQ8L2E+fVxyXG5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIHtPYmplY3RcclxuICAgICAgICAgICAgLmtleXMoZG9jcylcclxuICAgICAgICAgICAgLnNvbWUoayA9PiAhZG9jc1trXSlcclxuICAgICAgICAgICAgPyA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRm9jdXMoKX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYnV0dG9uIGJ1dHRvbl9saWdodGVzdCdcclxuICAgICAgICAgICAgICAgIHZhbHVlPSfQn9C+0LvRg9GH0LjRgtGMINGA0LXQt9GD0LvRjNGC0LDRgicvPlxyXG4gICAgICAgICAgICA6IDxpbnB1dCB0eXBlPSdzdWJtaXQnIGNsYXNzTmFtZT0nYnV0dG9uJyB2YWx1ZT0n0J/QvtC70YPRh9C40YLRjCDRgNC10LfRg9C70YzRgtCw0YInLz5cclxufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRoaXJkU3RlcCJdLCJzb3VyY2VSb290IjoiIn0=