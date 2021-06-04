self["webpackHotUpdate_N_E"]("pages/jurservice",{

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
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    var summa = js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get('amount');
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

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),
      summa = _useState[0],
      setSumma = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),
      discount = _useState2[0],
      setDiscount = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      predoplata = _useState3[0],
      setOplata = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)((0,_defaults_extraFunction__WEBPACK_IMPORTED_MODULE_7__.parseDate)(1)),
      paymentDate = _useState4[0],
      setPaymentDate = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
    "doc1": true,
    "doc2": true,
    "doc3": true,
    "doc4": true
  }),
      docs = _useState5[0],
      setDocs = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('1'),
      srok = _useState6[0],
      setSrok = _useState6[1];

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
  };

  var changeSrokBtn = function changeSrokBtn(month) {
    var monthVal = parseInt(month);
    setSrok(month);
    setPaymentDate((0,_defaults_extraFunction__WEBPACK_IMPORTED_MODULE_7__.parseDate)(monthVal));
  };

  var stepThird = function stepThird(e) {
    e.preventDefault();
    var object = {
      id: js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get('lead_id'),
      token: js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get('token'),
      // надо исправить
      amountPayment: '100000',
      srok: srok,
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
        sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Успешно!", "\u0412\u0430\u0448\u0430 \u0437\u0430\u044F\u0432\u043A\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430 \u0432 Nash Company. \u0416\u0434\u0438\u0442\u0435 \u0437\u0432\u043E\u043D\u043E\u043A \u043E\u0442 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0430", "success").then(function () {
          next_router__WEBPACK_IMPORTED_MODULE_5___default().push('/');
          js_cookie__WEBPACK_IMPORTED_MODULE_4___default().remove('lead_id');
          js_cookie__WEBPACK_IMPORTED_MODULE_4___default().remove('step');
          js_cookie__WEBPACK_IMPORTED_MODULE_4___default().remove('token');
        });
      }
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "form_register thirdstep",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      onSubmit: function onSubmit(e) {
        return stepThird(e);
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
          lineNumber: 110,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          className: "radiolabel",
          children: "\u041F\u043E\u0441\u0442\u043E\u043F\u043B\u0430\u0442\u0430"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 13
        }, _this)]), _jsxDEV2), void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 105,
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
          lineNumber: 119,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          className: "radiolabel",
          children: "\u041F\u0440\u0435\u0434\u043E\u043F\u043B\u0430\u0442\u0430"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 13
        }, _this)]), _jsxDEV3), void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }, _this), !predoplata && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "range",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "srok_month",
          children: "\u0421\u0440\u043E\u043A \u043E\u043F\u043B\u0430\u0442\u044B (\u043C\u0435\u0441\u044F\u0446)"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          className: "range__input",
          type: "range",
          value: srok,
          onChange: function onChange(e) {
            return changeSrok(e);
          },
          min: "1",
          max: "6",
          step: "1",
          list: "number"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
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
            lineNumber: 137,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            onClick: function onClick() {
              return changeSrokBtn('2');
            },
            className: "range__opt ".concat(srok === '2' && 'active'),
            children: "2"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            onClick: function onClick() {
              return changeSrokBtn('3');
            },
            className: "range__opt ".concat(srok === '3' && 'active'),
            children: "3"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            onClick: function onClick() {
              return changeSrokBtn('4');
            },
            className: "range__opt ".concat(srok === '4' && 'active'),
            children: "4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            onClick: function onClick() {
              return changeSrokBtn('5');
            },
            className: "range__opt ".concat(srok === '5' && 'active'),
            children: "5"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            onClick: function onClick() {
              return changeSrokBtn('6');
            },
            className: "range__opt ".concat(srok === '6' && 'active'),
            children: "6"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 25
      }, _this), !predoplata && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "payment_date",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
          children: ["\u0414\u0435\u043D\u044C \u043E\u043F\u043B\u0430\u0442\u044B \u0434\u043E ", paymentDate]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 25
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "payment_amount",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "\u0421\u0443\u043C\u043C\u0430 \u043E\u043F\u043B\u0430\u0442\u044B:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
            children: [(0,_defaults_extraFunction__WEBPACK_IMPORTED_MODULE_7__.amountSpace)("".concat(discount)), "\u0442\u0433"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            "class": "price--line-through",
            children: [(0,_defaults_extraFunction__WEBPACK_IMPORTED_MODULE_7__.amountSpace)("".concat(summa)), "\u0442\u0433"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "discount",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: ["-50%", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: "\u0421\u041A\u0418\u0414\u041A\u0410"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 178,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 169,
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
            lineNumber: 184,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            onClick: function onClick(e) {
              return checkDoc(e);
            },
            "data-name": "doc1",
            className: "checklabel",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "#",
              children: "\u0417\u0430\u043F\u0440\u043E\u0441 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 186,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 185,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "data-name": "postoplata",
          className: "check-group",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "checkbox",
            checked: docs.doc2
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            onClick: function onClick(e) {
              return checkDoc(e);
            },
            className: "checklabel",
            "data-name": "doc2",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "#",
              children: "\u0414\u043E\u0433\u043E\u0432\u043E\u0440 \u043F\u0443\u0431\u043B\u0438\u0447\u043D\u043E\u0439 \u043E\u0444\u0435\u0440\u0442\u044B"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 192,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 191,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "data-name": "predoplata",
          className: "check-group",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "checkbox",
            checked: docs.doc4
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            onClick: function onClick(e) {
              return checkDoc(e);
            },
            className: "checklabel",
            "data-name": "doc4",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "#",
              children: "\u0414\u043E\u0433\u043E\u0432\u043E\u0440 \u043D\u0430 \u0437\u0430\u043A\u0430\u0437 \u043D\u0430\u0440\u044F\u0434"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 199,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 198,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 196,
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
          lineNumber: 206,
          columnNumber: 15
        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "submit",
          className: "button",
          value: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 15
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 102,
    columnNumber: 5
  }, _this);
};

_s(ThirdStep, "ODaIJHhhTDYmdPRFsABRXVr+F6Q=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRzZXJ2aWNlL1RoaXJkU3RlcC5qcyJdLCJuYW1lcyI6WyJUaGlyZFN0ZXAiLCJzZXRMb2FkaW5nIiwidXNlRWZmZWN0Iiwic3VtbWEiLCJjb29raWUiLCJmaW5hbFN1bW1hIiwiTWF0aCIsImZsb29yIiwicGFyc2VJbnQiLCJkaXNjb3VudFN1bW1hIiwic2V0U3VtbWEiLCJzZXREaXNjb3VudCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VTdGF0ZSIsImRpc2NvdW50IiwicHJlZG9wbGF0YSIsInNldE9wbGF0YSIsInBhcnNlRGF0ZSIsInBheW1lbnREYXRlIiwic2V0UGF5bWVudERhdGUiLCJkb2NzIiwic2V0RG9jcyIsInNyb2siLCJzZXRTcm9rIiwiY2hlY2tEb2MiLCJlIiwibmFtZSIsInRhcmdldCIsImRhdGFzZXQiLCJjaGFuZ2VPcGxhdGEiLCJnZXRBdHRyaWJ1dGUiLCJjaGFuZ2VTcm9rIiwibW9udGgiLCJ2YWx1ZSIsImNoYW5nZVNyb2tCdG4iLCJtb250aFZhbCIsInN0ZXBUaGlyZCIsInByZXZlbnREZWZhdWx0Iiwib2JqZWN0IiwiaWQiLCJ0b2tlbiIsImFtb3VudFBheW1lbnQiLCJ0eXBlUGF5bWVudCIsInVuZGVmaW5lZCIsInV0bV9zb3VyY2UiLCJjbGlja19pZCIsImF4aW9zIiwicHJvY2VzcyIsInBhcmFtcyIsInRoZW4iLCJyZXMiLCJkYXRhIiwic3VjY2VzcyIsInN3YWwiLCJSb3V0ZXIiLCJhbW91bnRTcGFjZSIsImRvYzEiLCJkb2MyIiwiZG9jNCIsIk9iamVjdCIsImtleXMiLCJzb21lIiwiayIsImhhbmRsZUZvY3VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBa0I7QUFBQTs7QUFBQTs7QUFBQSxNQUFoQkMsVUFBZ0IsUUFBaEJBLFVBQWdCO0FBQ2xDQyxrREFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxLQUFLLEdBQUdDLG9EQUFBLENBQVcsUUFBWCxDQUFkO0FBQ0EsUUFBTUMsVUFBVSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsUUFBUSxDQUFDTCxLQUFELENBQVIsR0FBa0IsR0FBN0IsQ0FBbkI7QUFDQSxRQUFNTSxhQUFhLEdBQUdILElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxRQUFRLENBQUNILFVBQUQsQ0FBUixHQUF1QixDQUFsQyxDQUF0Qjs7QUFDQSxRQUFJQSxVQUFVLEdBQUcsTUFBakIsRUFBeUI7QUFDdkJLLGNBQVEsQ0FBQ0wsVUFBRCxDQUFSO0FBQ0FNLGlCQUFXLENBQUNGLGFBQUQsQ0FBWDtBQUNELEtBSEQsTUFHTztBQUNMQyxjQUFRLENBQUMsTUFBRCxDQUFSO0FBQ0FDLGlCQUFXLENBQUMsTUFBRCxDQUFYO0FBQ0Q7O0FBQ0RDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZUixVQUFaO0FBQ0QsR0FaUSxFQVlOLENBQUNELG9EQUFBLENBQVcsUUFBWCxDQUFELENBWk0sQ0FBVDs7QUFEa0Msa0JBaUJwQlUsK0NBQVEsQ0FBQyxDQUFELENBakJZO0FBQUEsTUFnQjNCWCxLQWhCMkI7QUFBQSxNQWlCaENPLFFBakJnQzs7QUFBQSxtQkFtQmpCSSwrQ0FBUSxDQUFDLENBQUQsQ0FuQlM7QUFBQSxNQWtCM0JDLFFBbEIyQjtBQUFBLE1BbUJoQ0osV0FuQmdDOztBQUFBLG1CQXFCbkJHLCtDQUFRLENBQUMsS0FBRCxDQXJCVztBQUFBLE1Bb0IzQkUsVUFwQjJCO0FBQUEsTUFxQmhDQyxTQXJCZ0M7O0FBQUEsbUJBdUJkSCwrQ0FBUSxDQUFDSSxrRUFBUyxDQUFDLENBQUQsQ0FBVixDQXZCTTtBQUFBLE1Bc0IzQkMsV0F0QjJCO0FBQUEsTUF1QmhDQyxjQXZCZ0M7O0FBQUEsbUJBeUJyQk4sK0NBQVEsQ0FBQztBQUFDLFlBQVEsSUFBVDtBQUFlLFlBQVEsSUFBdkI7QUFBNkIsWUFBUSxJQUFyQztBQUEyQyxZQUFRO0FBQW5ELEdBQUQsQ0F6QmE7QUFBQSxNQXdCM0JPLElBeEIyQjtBQUFBLE1BeUJoQ0MsT0F6QmdDOztBQUFBLG1CQTJCckJSLCtDQUFRLENBQUMsR0FBRCxDQTNCYTtBQUFBLE1BMEIzQlMsSUExQjJCO0FBQUEsTUEyQmhDQyxPQTNCZ0M7O0FBNEJsQyxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxDQUFELEVBQU87QUFDdEIsUUFBTUMsSUFBSSxHQUFHRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsT0FBVCxDQUFpQkYsSUFBOUIsQ0FEc0IsQ0FFdEI7O0FBQ0FMLFdBQU8saUNBQ0ZELElBREUsNEhBRUpNLElBRkksRUFFRyxDQUFDTixJQUFJLENBQUNNLElBQUQsQ0FGUixHQUFQO0FBSUFmLFdBQU8sQ0FBQ0MsR0FBUixDQUFZUSxJQUFaO0FBRUQsR0FURDs7QUFVQSxNQUFNUyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDSixDQUFELEVBQU87QUFDMUIsUUFBTUMsSUFBSSxHQUFHRCxDQUFDLENBQ1hFLE1BRFUsQ0FFVkcsWUFGVSxDQUVHLFdBRkgsQ0FBYjtBQUdBZCxhQUFTLENBQUMsQ0FBQ0QsVUFBRixDQUFUO0FBQ0QsR0FMRDs7QUFPQSxNQUFNZ0IsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQU4sQ0FBQyxFQUFJO0FBQ3RCLFFBQU1PLEtBQUssR0FBR3pCLFFBQVEsQ0FBQ2tCLENBQUMsQ0FBQ0UsTUFBRixDQUFTTSxLQUFWLENBQXRCO0FBQ0FWLFdBQU8sQ0FBQ0UsQ0FBQyxDQUFDRSxNQUFGLENBQVNNLEtBQVYsQ0FBUDtBQUNBZCxrQkFBYyxDQUFDRixrRUFBUyxDQUFDZSxLQUFELENBQVYsQ0FBZDtBQUNELEdBSkQ7O0FBTUEsTUFBTUUsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDRixLQUFELEVBQVc7QUFDL0IsUUFBTUcsUUFBUSxHQUFHNUIsUUFBUSxDQUFDeUIsS0FBRCxDQUF6QjtBQUNBVCxXQUFPLENBQUNTLEtBQUQsQ0FBUDtBQUNBYixrQkFBYyxDQUFDRixrRUFBUyxDQUFDa0IsUUFBRCxDQUFWLENBQWQ7QUFDRCxHQUpEOztBQU1BLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNYLENBQUQsRUFBTztBQUN2QkEsS0FBQyxDQUFDWSxjQUFGO0FBQ0EsUUFBTUMsTUFBTSxHQUFHO0FBQ2JDLFFBQUUsRUFBRXBDLG9EQUFBLENBQVcsU0FBWCxDQURTO0FBRWJxQyxXQUFLLEVBQUVyQyxvREFBQSxDQUFXLE9BQVgsQ0FGTTtBQUliO0FBQ0FzQyxtQkFBYSxFQUFFLFFBTEY7QUFNYm5CLFVBQUksRUFBRUEsSUFOTztBQU9ib0IsaUJBQVcsRUFBRTNCLFVBQVUsR0FDbkIsWUFEbUIsR0FFbkI7QUFUUyxLQUFmOztBQVlBLFFBQUlaLG9EQUFBLENBQVcsWUFBWCxNQUE2QndDLFNBQWpDLEVBQTRDO0FBQzFDTCxZQUFNLENBQUNNLFVBQVAsR0FBb0J6QyxvREFBQSxDQUFXLFlBQVgsQ0FBcEI7QUFDQW1DLFlBQU0sQ0FBQ08sUUFBUCxHQUFrQjFDLG9EQUFBLENBQVcsVUFBWCxDQUFsQixDQUYwQyxDQUcxQztBQUNEOztBQUNESCxjQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0E4QyxvREFBQSxXQUNVQyx5QkFEVixpQkFDNEM7QUFBQ0MsWUFBTSxFQUFFVjtBQUFULEtBRDVDLEVBRUdXLElBRkgsQ0FFUSxVQUFBQyxHQUFHLEVBQUk7QUFDWGxELGdCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0FXLGFBQU8sQ0FBQ0MsR0FBUixDQUFZc0MsR0FBWjs7QUFDQSxVQUFJQSxHQUFHLENBQUNDLElBQUosQ0FBU0MsT0FBYixFQUFzQjtBQUNwQkMseURBQUksQ0FBQyxVQUFELDZSQUFpRixTQUFqRixDQUFKLENBQWdHSixJQUFoRyxDQUFxRyxZQUFNO0FBQ3pHSyxpRUFBQSxDQUFZLEdBQVo7QUFDQW5ELGlFQUFBLENBQWMsU0FBZDtBQUNBQSxpRUFBQSxDQUFjLE1BQWQ7QUFDQUEsaUVBQUEsQ0FBYyxPQUFkO0FBQ0QsU0FMRDtBQU1EO0FBQ0YsS0FiSDtBQWNELEdBbENEOztBQW1DQSxzQkFFRTtBQUFLLGFBQVMsRUFBQyx5QkFBZjtBQUFBLDJCQUNFO0FBQU0sY0FBUSxFQUFFLGtCQUFDc0IsQ0FBRDtBQUFBLGVBQU9XLFNBQVMsQ0FBQ1gsQ0FBRCxDQUFoQjtBQUFBLE9BQWhCO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLGNBQWY7QUFBQSxnQ0FDRTtBQUNFLG1CQUFTLEVBQUMsWUFEWjtBQUVFLHVCQUFVO0FBRlosbUpBR1ksYUFIWix5SUFJVyxpQkFBQUEsQ0FBQztBQUFBLGlCQUFJSSxZQUFZLENBQUNKLENBQUQsQ0FBaEI7QUFBQSxTQUpaLHdKQUtFO0FBQU8sY0FBSSxFQUFDLFVBQVo7QUFBdUIsaUJBQU8sRUFBRVYsVUFBVSxLQUFLO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEYsZUFNRTtBQUFPLG1CQUFTLEVBQUMsWUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQVVFO0FBQ0UsbUJBQVMsRUFBQyxZQURaO0FBRUUsdUJBQVU7QUFGWixtSkFHWSxhQUhaLHlJQUlXLGlCQUFBVSxDQUFDO0FBQUEsaUJBQUlJLFlBQVksQ0FBQ0osQ0FBRCxDQUFoQjtBQUFBLFNBSlosd0pBS0U7QUFBTyxjQUFJLEVBQUMsVUFBWjtBQUF1QixpQkFBTyxFQUFFVixVQUFVLEtBQUs7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRixlQU9FO0FBQU8sbUJBQVMsRUFBQyxZQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLEVBc0JHLENBQUNBLFVBQUQsaUJBQWU7QUFBSyxpQkFBUyxFQUFDLE9BQWY7QUFBQSxnQ0FDZDtBQUFHLG1CQUFTLEVBQUMsWUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEYyxlQUVkO0FBQ0UsbUJBQVMsRUFBQyxjQURaO0FBRUUsY0FBSSxFQUFDLE9BRlA7QUFHRSxlQUFLLEVBQUVPLElBSFQ7QUFJRSxrQkFBUSxFQUFFLGtCQUFBRyxDQUFDO0FBQUEsbUJBQUlNLFVBQVUsQ0FBQ04sQ0FBRCxDQUFkO0FBQUEsV0FKYjtBQUtFLGFBQUcsRUFBQyxHQUxOO0FBTUUsYUFBRyxFQUFDLEdBTk47QUFPRSxjQUFJLEVBQUMsR0FQUDtBQVFFLGNBQUksRUFBQztBQVJQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRmMsZUFXZDtBQUFVLG1CQUFTLEVBQUMsYUFBcEI7QUFBa0MsWUFBRSxFQUFDLFFBQXJDO0FBQUEsa0NBQ0U7QUFDRSxtQkFBTyxFQUFFO0FBQUEscUJBQU1TLGFBQWEsQ0FBQyxHQUFELENBQW5CO0FBQUEsYUFEWDtBQUVFLHFCQUFTLDRCQUFxQlosSUFBSSxLQUFLLEdBQVQsSUFBZ0IsUUFBckMsQ0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUlFO0FBQ0UsbUJBQU8sRUFBRTtBQUFBLHFCQUFNWSxhQUFhLENBQUMsR0FBRCxDQUFuQjtBQUFBLGFBRFg7QUFFRSxxQkFBUyx1QkFBZ0JaLElBQUksS0FBSyxHQUFULElBQWdCLFFBQWhDLENBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkYsZUFPRTtBQUNFLG1CQUFPLEVBQUU7QUFBQSxxQkFBTVksYUFBYSxDQUFDLEdBQUQsQ0FBbkI7QUFBQSxhQURYO0FBRUUscUJBQVMsdUJBQWdCWixJQUFJLEtBQUssR0FBVCxJQUFnQixRQUFoQyxDQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBGLGVBVUU7QUFDRSxtQkFBTyxFQUFFO0FBQUEscUJBQU1ZLGFBQWEsQ0FBQyxHQUFELENBQW5CO0FBQUEsYUFEWDtBQUVFLHFCQUFTLHVCQUFnQlosSUFBSSxLQUFLLEdBQVQsSUFBZ0IsUUFBaEMsQ0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFWRixlQWFFO0FBQ0UsbUJBQU8sRUFBRTtBQUFBLHFCQUFNWSxhQUFhLENBQUMsR0FBRCxDQUFuQjtBQUFBLGFBRFg7QUFFRSxxQkFBUyx1QkFBZ0JaLElBQUksS0FBSyxHQUFULElBQWdCLFFBQWhDLENBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBYkYsZUFnQkU7QUFDRSxtQkFBTyxFQUFFO0FBQUEscUJBQU1ZLGFBQWEsQ0FBQyxHQUFELENBQW5CO0FBQUEsYUFEWDtBQUVFLHFCQUFTLHVCQUFnQlosSUFBSSxLQUFLLEdBQVQsSUFBZ0IsUUFBaEMsQ0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVhjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXRCbEIsRUF1REcsQ0FBQ1AsVUFBRCxpQkFBZTtBQUFLLGlCQUFTLEVBQUMsY0FBZjtBQUFBLCtCQUNkO0FBQUEsb0dBQXdCRyxXQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEYztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdkRsQixlQWtFRTtBQUFLLGlCQUFTLEVBQUMsZ0JBQWY7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUEsa0NBQ0U7QUFBQSx1QkFBU3FDLG9FQUFXLFdBQUl6QyxRQUFKLEVBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQU0scUJBQU0scUJBQVo7QUFBQSx1QkFBbUN5QyxvRUFBVyxXQUFJckQsS0FBSixFQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBTUU7QUFBSyxtQkFBUyxFQUFDLFVBQWY7QUFBQSxpQ0FFRTtBQUFBLDRDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBbEVGLGVBK0VFO0FBQUssaUJBQVMsRUFBQyxjQUFmO0FBQUEsZ0NBQ0U7QUFBSyx1QkFBVSxZQUFmO0FBQTRCLG1CQUFTLEVBQUMsYUFBdEM7QUFBQSxrQ0FDRTtBQUFPLGdCQUFJLEVBQUMsVUFBWjtBQUF1QixtQkFBTyxFQUFFa0IsSUFBSSxDQUFDb0M7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQU8sbUJBQU8sRUFBRSxpQkFBQy9CLENBQUQ7QUFBQSxxQkFBT0QsUUFBUSxDQUFDQyxDQUFELENBQWY7QUFBQSxhQUFoQjtBQUFvQyx5QkFBVSxNQUE5QztBQUFxRCxxQkFBUyxFQUFDLFlBQS9EO0FBQUEsbUNBQ0U7QUFBRyxrQkFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQU9FO0FBQUssdUJBQVUsWUFBZjtBQUE0QixtQkFBUyxFQUFDLGFBQXRDO0FBQUEsa0NBQ0U7QUFBTyxnQkFBSSxFQUFDLFVBQVo7QUFBdUIsbUJBQU8sRUFBRUwsSUFBSSxDQUFDcUM7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQU8sbUJBQU8sRUFBRSxpQkFBQ2hDLENBQUQ7QUFBQSxxQkFBT0QsUUFBUSxDQUFDQyxDQUFELENBQWY7QUFBQSxhQUFoQjtBQUFvQyxxQkFBUyxFQUFDLFlBQTlDO0FBQTJELHlCQUFVLE1BQXJFO0FBQUEsbUNBQ0U7QUFBRyxrQkFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRixlQWNFO0FBQUssdUJBQVUsWUFBZjtBQUE0QixtQkFBUyxFQUFDLGFBQXRDO0FBQUEsa0NBQ0U7QUFBTyxnQkFBSSxFQUFDLFVBQVo7QUFBdUIsbUJBQU8sRUFBRUwsSUFBSSxDQUFDc0M7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQU8sbUJBQU8sRUFBRSxpQkFBQ2pDLENBQUQ7QUFBQSxxQkFBT0QsUUFBUSxDQUFDQyxDQUFELENBQWY7QUFBQSxhQUFoQjtBQUFvQyxxQkFBUyxFQUFDLFlBQTlDO0FBQTJELHlCQUFVLE1BQXJFO0FBQUEsbUNBQ0U7QUFBRyxrQkFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFkRixFQXFCR2tDLE1BQU0sQ0FDSkMsSUFERixDQUNPeEMsSUFEUCxFQUVFeUMsSUFGRixDQUVPLFVBQUFDLENBQUM7QUFBQSxpQkFBSSxDQUFDMUMsSUFBSSxDQUFDMEMsQ0FBRCxDQUFUO0FBQUEsU0FGUixpQkFHRztBQUNFLGNBQUksRUFBQyxRQURQO0FBRUUsa0JBQVEsRUFBRSxJQUZaO0FBR0UsaUJBQU8sRUFBRTtBQUFBLG1CQUFNQyxvRUFBVyxFQUFqQjtBQUFBLFdBSFg7QUFJRSxtQkFBUyxFQUFDLHdCQUpaO0FBS0UsZUFBSyxFQUFDO0FBTFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFISCxnQkFTRztBQUNBLGNBQUksRUFBQyxRQURMO0FBRUEsbUJBQVMsRUFBQyxRQUZWO0FBR0EsZUFBSyxFQUFDO0FBSE47QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE5Qk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBL0VGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FGRjtBQXlIRCxDQXJORDs7R0FBTWhFLFM7O0tBQUFBLFM7QUF1Tk4sK0RBQWVBLFNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvanVyc2VydmljZS5mNmZiNWY1MjBlODAzMDJmMjE1OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBzd2FsIGZyb20gJ3N3ZWV0YWxlcnQnXHJcbmltcG9ydCB7YW1vdW50U3BhY2UsIGhhbmRsZUZvY3VzLCBwYXJzZURhdGV9IGZyb20gXCIuLi8uLi9kZWZhdWx0cy9leHRyYUZ1bmN0aW9uXCJcclxuXHJcbmNvbnN0IFRoaXJkU3RlcCA9ICh7c2V0TG9hZGluZ30pID0+IHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc3VtbWEgPSBjb29raWUuZ2V0KCdhbW91bnQnKVxyXG4gICAgY29uc3QgZmluYWxTdW1tYSA9IE1hdGguZmxvb3IocGFyc2VJbnQoc3VtbWEpICogMC4yKVxyXG4gICAgY29uc3QgZGlzY291bnRTdW1tYSA9IE1hdGguZmxvb3IocGFyc2VJbnQoZmluYWxTdW1tYSkgLyAyKVxyXG4gICAgaWYgKGZpbmFsU3VtbWEgPiAyMDAwMDApIHtcclxuICAgICAgc2V0U3VtbWEoZmluYWxTdW1tYSlcclxuICAgICAgc2V0RGlzY291bnQoZGlzY291bnRTdW1tYSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFN1bW1hKDIwMDAwMClcclxuICAgICAgc2V0RGlzY291bnQoMTAwMDAwKVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coZmluYWxTdW1tYSlcclxuICB9LCBbY29va2llLmdldCgnYW1vdW50JyldKVxyXG5cclxuXHJcbiAgY29uc3QgW3N1bW1hLFxyXG4gICAgc2V0U3VtbWFdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbZGlzY291bnQsXHJcbiAgICBzZXREaXNjb3VudF0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFtwcmVkb3BsYXRhLFxyXG4gICAgc2V0T3BsYXRhXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtwYXltZW50RGF0ZSxcclxuICAgIHNldFBheW1lbnREYXRlXSA9IHVzZVN0YXRlKHBhcnNlRGF0ZSgxKSlcclxuICBjb25zdCBbZG9jcyxcclxuICAgIHNldERvY3NdID0gdXNlU3RhdGUoe1wiZG9jMVwiOiB0cnVlLCBcImRvYzJcIjogdHJ1ZSwgXCJkb2MzXCI6IHRydWUsIFwiZG9jNFwiOiB0cnVlfSlcclxuICBjb25zdCBbc3JvayxcclxuICAgIHNldFNyb2tdID0gdXNlU3RhdGUoJzEnKVxyXG4gIGNvbnN0IGNoZWNrRG9jID0gKGUpID0+IHtcclxuICAgIGNvbnN0IG5hbWUgPSBlLnRhcmdldC5kYXRhc2V0Lm5hbWVcclxuICAgIC8vIGNvbnNvbGUubG9nKGRvY3NbbmFtZV0pXHJcbiAgICBzZXREb2NzKHtcclxuICAgICAgLi4uZG9jcyxcclxuICAgICAgW25hbWVdOiAhZG9jc1tuYW1lXVxyXG4gICAgfSlcclxuICAgIGNvbnNvbGUubG9nKGRvY3MpXHJcblxyXG4gIH1cclxuICBjb25zdCBjaGFuZ2VPcGxhdGEgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgbmFtZSA9IGVcclxuICAgICAgLnRhcmdldFxyXG4gICAgICAuZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKVxyXG4gICAgc2V0T3BsYXRhKCFwcmVkb3BsYXRhKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2hhbmdlU3JvayA9IGUgPT4ge1xyXG4gICAgY29uc3QgbW9udGggPSBwYXJzZUludChlLnRhcmdldC52YWx1ZSlcclxuICAgIHNldFNyb2soZS50YXJnZXQudmFsdWUpXHJcbiAgICBzZXRQYXltZW50RGF0ZShwYXJzZURhdGUobW9udGgpKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2hhbmdlU3Jva0J0biA9IChtb250aCkgPT4ge1xyXG4gICAgY29uc3QgbW9udGhWYWwgPSBwYXJzZUludChtb250aClcclxuICAgIHNldFNyb2sobW9udGgpXHJcbiAgICBzZXRQYXltZW50RGF0ZShwYXJzZURhdGUobW9udGhWYWwpKVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgc3RlcFRoaXJkID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgY29uc3Qgb2JqZWN0ID0ge1xyXG4gICAgICBpZDogY29va2llLmdldCgnbGVhZF9pZCcpLFxyXG4gICAgICB0b2tlbjogY29va2llLmdldCgndG9rZW4nKSxcclxuXHJcbiAgICAgIC8vINC90LDQtNC+INC40YHQv9GA0LDQstC40YLRjFxyXG4gICAgICBhbW91bnRQYXltZW50OiAnMTAwMDAwJyxcclxuICAgICAgc3Jvazogc3JvayxcclxuICAgICAgdHlwZVBheW1lbnQ6IHByZWRvcGxhdGFcclxuICAgICAgICA/ICfQn9GA0LXQtNC+0L/Qu9Cw0YLQsCdcclxuICAgICAgICA6ICfQn9C+0YHRgtC+0L/Qu9Cw0YLQsCdcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY29va2llLmdldCgndXRtX3NvdXJjZScpICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgb2JqZWN0LnV0bV9zb3VyY2UgPSBjb29raWUuZ2V0KCd1dG1fc291cmNlJylcclxuICAgICAgb2JqZWN0LmNsaWNrX2lkID0gY29va2llLmdldCgnY2xpY2tfaWQnKVxyXG4gICAgICAvLyBvYmplY3Qud2ViSUQgPSBjb29raWUuZ2V0KCd3ZWJfaWQnKVxyXG4gICAgfVxyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vc3RlcFRocmVlYCwge3BhcmFtczogb2JqZWN0fSlcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICBpZiAocmVzLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgc3dhbChcItCj0YHQv9C10YjQvdC+IVwiLCBg0JLQsNGI0LAg0LfQsNGP0LLQutCwINC+0YLQv9GA0LDQstC70LXQvdCwINCyIE5hc2ggQ29tcGFueS4g0JbQtNC40YLQtSDQt9Cy0L7QvdC+0Log0L7RgiDQvtC/0LXRgNCw0YLQvtGA0LBgLCBcInN1Y2Nlc3NcIikudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvJylcclxuICAgICAgICAgICAgY29va2llLnJlbW92ZSgnbGVhZF9pZCcpXHJcbiAgICAgICAgICAgIGNvb2tpZS5yZW1vdmUoJ3N0ZXAnKVxyXG4gICAgICAgICAgICBjb29raWUucmVtb3ZlKCd0b2tlbicpXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcblxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2Zvcm1fcmVnaXN0ZXIgdGhpcmRzdGVwJz5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKSA9PiBzdGVwVGhpcmQoZSl9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyYWRpb19ncm91cHMnPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9J3Bvc3RvcGxhdGEnXHJcbiAgICAgICAgICAgIGRhdGEtbmFtZT0ncG9zdG9wbGF0YSdcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdjaGVjay1ncm91cCdcclxuICAgICAgICAgICAgb25DbGljaz17ZSA9PiBjaGFuZ2VPcGxhdGEoZSl9PlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0nY2hlY2tib3gnIGNoZWNrZWQ9e3ByZWRvcGxhdGEgPT09IGZhbHNlfS8+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J3JhZGlvbGFiZWwnPtCf0L7RgdGC0L7Qv9C70LDRgtCwPC9sYWJlbD5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdwcmVkb3BsYXRhJ1xyXG4gICAgICAgICAgICBkYXRhLW5hbWU9J3ByZWRvcGxhdGEnXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nY2hlY2stZ3JvdXAnXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gY2hhbmdlT3BsYXRhKGUpfT5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J2NoZWNrYm94JyBjaGVja2VkPXtwcmVkb3BsYXRhID09PSB0cnVlfS8+XHJcblxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdyYWRpb2xhYmVsJz7Qn9GA0LXQtNC+0L/Qu9Cw0YLQsDwvbGFiZWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgeyFwcmVkb3BsYXRhICYmIDxkaXYgY2xhc3NOYW1lPVwicmFuZ2VcIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nc3Jva19tb250aCc+0KHRgNC+0Log0L7Qv9C70LDRgtGLICjQvNC10YHRj9GGKTwvcD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyYW5nZV9faW5wdXRcIlxyXG4gICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxyXG4gICAgICAgICAgICB2YWx1ZT17c3Jva31cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gY2hhbmdlU3JvayhlKX1cclxuICAgICAgICAgICAgbWluPVwiMVwiXHJcbiAgICAgICAgICAgIG1heD1cIjZcIlxyXG4gICAgICAgICAgICBzdGVwPVwiMVwiXHJcbiAgICAgICAgICAgIGxpc3Q9XCJudW1iZXJcIi8+XHJcbiAgICAgICAgICA8ZGF0YWxpc3QgY2xhc3NOYW1lPSdyYW5nZV9fbGlzdCcgaWQ9XCJudW1iZXJcIj5cclxuICAgICAgICAgICAgPG9wdGlvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZVNyb2tCdG4oJzEnKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2ByYW5nZV9fb3B0IG9wdDAgJHtzcm9rID09PSAnMScgJiYgJ2FjdGl2ZSd9YH0+MTwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlU3Jva0J0bignMicpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHJhbmdlX19vcHQgJHtzcm9rID09PSAnMicgJiYgJ2FjdGl2ZSd9YH0+Mjwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlU3Jva0J0bignMycpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHJhbmdlX19vcHQgJHtzcm9rID09PSAnMycgJiYgJ2FjdGl2ZSd9YH0+Mzwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlU3Jva0J0bignNCcpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHJhbmdlX19vcHQgJHtzcm9rID09PSAnNCcgJiYgJ2FjdGl2ZSd9YH0+NDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlU3Jva0J0bignNScpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHJhbmdlX19vcHQgJHtzcm9rID09PSAnNScgJiYgJ2FjdGl2ZSd9YH0+NTwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlU3Jva0J0bignNicpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHJhbmdlX19vcHQgJHtzcm9rID09PSAnNicgJiYgJ2FjdGl2ZSd9YH0+Njwvb3B0aW9uPlxyXG4gICAgICAgICAgPC9kYXRhbGlzdD5cclxuICAgICAgICA8L2Rpdj5cclxufVxyXG4gICAgICAgIHshcHJlZG9wbGF0YSAmJiA8ZGl2IGNsYXNzTmFtZT0ncGF5bWVudF9kYXRlJz5cclxuICAgICAgICAgIDxzdHJvbmc+0JTQtdC90Ywg0L7Qv9C70LDRgtGLINC00L4ge3BheW1lbnREYXRlfVxyXG4gICAgICAgICAgPC9zdHJvbmc+XHJcbiAgICAgICAgPC9kaXY+fVxyXG5cclxuICAgICAgICB7LyogPGlucHV0XHJcbiAgICAgICAgICB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICBjbGFzc05hbWU9J3N1bW1hJ1xyXG4gICAgICAgICAgdmFsdWU9e3N1bW1hfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0U3VtbWEoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J9Ch0YPQvNC80LAg0L7Qv9C70LDRgtGLJy8+ICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXltZW50X2Ftb3VudCc+XHJcbiAgICAgICAgICA8cD7QodGD0LzQvNCwINC+0L/Qu9Cw0YLRizo8L3A+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8c3Ryb25nPnthbW91bnRTcGFjZShgJHtkaXNjb3VudH1gKX3RgtCzPC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJpY2UtLWxpbmUtdGhyb3VnaFwiPnthbW91bnRTcGFjZShgJHtzdW1tYX1gKX3RgtCzPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGlzY291bnQnPlxyXG4gICAgICAgICAgICB7LyogPGltZyBzcmM9Jy9pbWcvZGlzY291bnQucG5nJy8+ICovfVxyXG4gICAgICAgICAgICA8cD4tNTAlXHJcbiAgICAgICAgICAgICAgPHNwYW4+0KHQmtCY0JTQmtCQPC9zcGFuPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2hlY2tfZ3JvdXBzJz5cclxuICAgICAgICAgIDxkaXYgZGF0YS1uYW1lPSdwcmVkb3BsYXRhJyBjbGFzc05hbWU9J2NoZWNrLWdyb3VwJz5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J2NoZWNrYm94JyBjaGVja2VkPXtkb2NzLmRvYzF9Lz5cclxuICAgICAgICAgICAgPGxhYmVsIG9uQ2xpY2s9eyhlKSA9PiBjaGVja0RvYyhlKX0gZGF0YS1uYW1lPSdkb2MxJyBjbGFzc05hbWU9J2NoZWNrbGFiZWwnPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9JyMnPtCX0LDQv9GA0L7RgSDQvdCwINC+0LHRgNCw0LHQvtGC0LrRgyDQv9C10YDRgdC+0L3QsNC70YzQvdGL0YUg0LTQsNC90L3Ri9GFPC9hPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGRhdGEtbmFtZT0ncG9zdG9wbGF0YScgY2xhc3NOYW1lPSdjaGVjay1ncm91cCc+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdjaGVja2JveCcgY2hlY2tlZD17ZG9jcy5kb2MyfS8+XHJcbiAgICAgICAgICAgIDxsYWJlbCBvbkNsaWNrPXsoZSkgPT4gY2hlY2tEb2MoZSl9IGNsYXNzTmFtZT0nY2hlY2tsYWJlbCcgZGF0YS1uYW1lPSdkb2MyJz5cclxuICAgICAgICAgICAgICA8YSBocmVmPScjJz7QlNC+0LPQvtCy0L7RgCDQv9GD0LHQu9C40YfQvdC+0Lkg0L7RhNC10YDRgtGLPC9hPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBkYXRhLW5hbWU9J3ByZWRvcGxhdGEnIGNsYXNzTmFtZT0nY2hlY2stZ3JvdXAnPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0nY2hlY2tib3gnIGNoZWNrZWQ9e2RvY3MuZG9jNH0vPlxyXG4gICAgICAgICAgICA8bGFiZWwgb25DbGljaz17KGUpID0+IGNoZWNrRG9jKGUpfSBjbGFzc05hbWU9J2NoZWNrbGFiZWwnIGRhdGEtbmFtZT0nZG9jNCc+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj0nIyc+0JTQvtCz0L7QstC+0YAg0L3QsCDQt9Cw0LrQsNC3INC90LDRgNGP0LQ8L2E+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICB7T2JqZWN0XHJcbiAgICAgICAgICAgIC5rZXlzKGRvY3MpXHJcbiAgICAgICAgICAgIC5zb21lKGsgPT4gIWRvY3Nba10pXHJcbiAgICAgICAgICAgID8gPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPSdzdWJtaXQnXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUZvY3VzKCl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2J1dHRvbiBidXR0b25fbGlnaHRlc3QnXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT0n0J/QvtC70YPRh9C40YLRjCDRgNC10LfRg9C70YzRgtCw0YInLz5cclxuICAgICAgICAgICAgOiA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPSdzdWJtaXQnXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdidXR0b24nXHJcbiAgICAgICAgICAgICAgdmFsdWU9J9Cf0L7Qu9GD0YfQuNGC0Ywg0YDQtdC30YPQu9GM0YLQsNGCJy8+XHJcbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaGlyZFN0ZXAiXSwic291cmNlUm9vdCI6IiJ9