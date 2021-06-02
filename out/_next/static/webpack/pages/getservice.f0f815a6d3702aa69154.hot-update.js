self["webpackHotUpdate_N_E"]("pages/getservice",{

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
          lineNumber: 108,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          className: "radiolabel",
          children: "\u041F\u043E\u0441\u0442\u043E\u043F\u043B\u0430\u0442\u0430"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 13
        }, _this)]), _jsxDEV2), void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 103,
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
          lineNumber: 117,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          className: "radiolabel",
          children: "\u041F\u0440\u0435\u0434\u043E\u043F\u043B\u0430\u0442\u0430"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 13
        }, _this)]), _jsxDEV3), void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 9
      }, _this), !predoplata && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "range",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
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
          lineNumber: 124,
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
            lineNumber: 134,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            onClick: function onClick() {
              return changeSrokBtn('2');
            },
            className: "range__opt ".concat(srok === '2' && 'active'),
            children: "2"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            onClick: function onClick() {
              return changeSrokBtn('3');
            },
            className: "range__opt ".concat(srok === '3' && 'active'),
            children: "3"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            onClick: function onClick() {
              return changeSrokBtn('4');
            },
            className: "range__opt ".concat(srok === '4' && 'active'),
            children: "4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            onClick: function onClick() {
              return changeSrokBtn('5');
            },
            className: "range__opt ".concat(srok === '5' && 'active'),
            children: "5"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            onClick: function onClick() {
              return changeSrokBtn('6');
            },
            className: "range__opt ".concat(srok === '6' && 'active'),
            children: "6"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 25
      }, _this), !predoplata && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "payment_date",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
          children: ["\u0414\u0435\u043D\u044C \u043E\u043F\u043B\u0430\u0442\u044B \u0434\u043E ", paymentDate]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 25
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "payment_amount",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "\u0421\u0443\u043C\u043C\u0430 \u043E\u043F\u043B\u0430\u0442\u044B:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
            children: [(0,_defaults_extraFunction__WEBPACK_IMPORTED_MODULE_7__.amountSpace)("".concat(discount)), "\u0442\u0433"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            "class": "price--line-through",
            children: [(0,_defaults_extraFunction__WEBPACK_IMPORTED_MODULE_7__.amountSpace)("".concat(summa)), "\u0442\u0433"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "discount",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: ["-50%", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: "\u0421\u041A\u0418\u0414\u041A\u0410"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 175,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 166,
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
            lineNumber: 181,
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
              lineNumber: 183,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "data-name": "postoplata",
          className: "check-group",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "checkbox",
            checked: docs.doc2
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 187,
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
              lineNumber: 189,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 188,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "data-name": "predoplata",
          className: "check-group",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "checkbox",
            checked: docs.doc4
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 194,
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
              lineNumber: 196,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 11
        }, _this), Object.keys(docs).some(function (k) {
          return !docs[k];
        }) ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "submit",
          disabled: true,
          className: "button button_lightest",
          value: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 15
        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "submit",
          className: "button",
          value: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 15
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 100,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRzZXJ2aWNlL1RoaXJkU3RlcC5qcyJdLCJuYW1lcyI6WyJUaGlyZFN0ZXAiLCJzZXRMb2FkaW5nIiwidXNlRWZmZWN0Iiwic3VtbWEiLCJjb29raWUiLCJmaW5hbFN1bW1hIiwiTWF0aCIsImZsb29yIiwicGFyc2VJbnQiLCJkaXNjb3VudFN1bW1hIiwic2V0U3VtbWEiLCJzZXREaXNjb3VudCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VTdGF0ZSIsImRpc2NvdW50IiwicHJlZG9wbGF0YSIsInNldE9wbGF0YSIsInBhcnNlRGF0ZSIsInBheW1lbnREYXRlIiwic2V0UGF5bWVudERhdGUiLCJkb2NzIiwic2V0RG9jcyIsInNyb2siLCJzZXRTcm9rIiwiY2hlY2tEb2MiLCJlIiwibmFtZSIsInRhcmdldCIsImRhdGFzZXQiLCJjaGFuZ2VPcGxhdGEiLCJnZXRBdHRyaWJ1dGUiLCJjaGFuZ2VTcm9rIiwibW9udGgiLCJ2YWx1ZSIsImNoYW5nZVNyb2tCdG4iLCJtb250aFZhbCIsInN0ZXBUaGlyZCIsInByZXZlbnREZWZhdWx0Iiwib2JqZWN0IiwiaWQiLCJ0b2tlbiIsImFtb3VudFBheW1lbnQiLCJ0eXBlUGF5bWVudCIsInVuZGVmaW5lZCIsInV0bV9zb3VyY2UiLCJjbGlja19pZCIsImF4aW9zIiwicHJvY2VzcyIsInBhcmFtcyIsInRoZW4iLCJyZXMiLCJkYXRhIiwic3VjY2VzcyIsInN3YWwiLCJSb3V0ZXIiLCJhbW91bnRTcGFjZSIsImRvYzEiLCJkb2MyIiwiZG9jNCIsIk9iamVjdCIsImtleXMiLCJzb21lIiwiayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQWtCO0FBQUE7O0FBQUE7O0FBQUEsTUFBaEJDLFVBQWdCLFFBQWhCQSxVQUFn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QkFBTyxFQUFFLGlCQUFDakMsQ0FBRDtBQUFBLHFCQUFPRCxRQUFRLENBQUNDLENBQUQsQ0FBZjtBQUFBLGFBQWhCO0FBQW9DLHFCQUFTLEVBQUMsWUFBOUM7QUFBMkQseUJBQVUsTUFBckU7QUFBQSxtQ0FDRTtBQUFHLGtCQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWRGLEVBcUJHa0MsTUFBTSxDQUNKQyxJQURGLENBQ094QyxJQURQLEVBRUV5QyxJQUZGLENBRU8sVUFBQUMsQ0FBQztBQUFBLGlCQUFJLENBQUMxQyxJQUFJLENBQUMwQyxDQUFELENBQVQ7QUFBQSxTQUZSLGlCQUdHO0FBQ0UsY0FBSSxFQUFDLFFBRFA7QUFFRSxrQkFBUSxFQUFFLElBRlo7QUFHRSxtQkFBUyxFQUFDLHdCQUhaO0FBSUUsZUFBSyxFQUFDO0FBSlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFISCxnQkFRRztBQUNBLGNBQUksRUFBQyxRQURMO0FBRUEsbUJBQVMsRUFBQyxRQUZWO0FBR0EsZUFBSyxFQUFDO0FBSE47QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE3Qk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBOUVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FGRjtBQXVIRCxDQWpORDs7R0FBTS9ELFM7O0tBQUFBLFM7QUFtTk4sK0RBQWVBLFNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ2V0c2VydmljZS5mMGY4MTVhNmQzNzAyYWE2OTE1NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBzd2FsIGZyb20gJ3N3ZWV0YWxlcnQnXHJcbmltcG9ydCB7YW1vdW50U3BhY2UsIHBhcnNlRGF0ZX0gZnJvbSBcIi4uLy4uL2RlZmF1bHRzL2V4dHJhRnVuY3Rpb25cIlxyXG5cclxuY29uc3QgVGhpcmRTdGVwID0gKHtzZXRMb2FkaW5nfSkgPT4ge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdW1tYSA9IGNvb2tpZS5nZXQoJ2Ftb3VudCcpXHJcbiAgICBjb25zdCBmaW5hbFN1bW1hID0gTWF0aC5mbG9vcihwYXJzZUludChzdW1tYSkgKiAwLjIpXHJcbiAgICBjb25zdCBkaXNjb3VudFN1bW1hID0gTWF0aC5mbG9vcihwYXJzZUludChmaW5hbFN1bW1hKSAvIDIpXHJcbiAgICBpZiAoZmluYWxTdW1tYSA+IDIwMDAwMCkge1xyXG4gICAgICBzZXRTdW1tYShmaW5hbFN1bW1hKVxyXG4gICAgICBzZXREaXNjb3VudChkaXNjb3VudFN1bW1hKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0U3VtbWEoMjAwMDAwKVxyXG4gICAgICBzZXREaXNjb3VudCgxMDAwMDApXHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhmaW5hbFN1bW1hKVxyXG4gIH0sIFtjb29raWUuZ2V0KCdhbW91bnQnKV0pXHJcbiAgY29uc3QgW3N1bW1hLFxyXG4gICAgc2V0U3VtbWFdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbZGlzY291bnQsXHJcbiAgICBzZXREaXNjb3VudF0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFtwcmVkb3BsYXRhLFxyXG4gICAgc2V0T3BsYXRhXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtwYXltZW50RGF0ZSxcclxuICAgIHNldFBheW1lbnREYXRlXSA9IHVzZVN0YXRlKHBhcnNlRGF0ZSgxKSlcclxuICBjb25zdCBbZG9jcyxcclxuICAgIHNldERvY3NdID0gdXNlU3RhdGUoe1wiZG9jMVwiOiB0cnVlLCBcImRvYzJcIjogdHJ1ZSwgXCJkb2MzXCI6IHRydWUsIFwiZG9jNFwiOiB0cnVlfSlcclxuICBjb25zdCBbc3JvayxcclxuICAgIHNldFNyb2tdID0gdXNlU3RhdGUoJzEnKVxyXG4gIGNvbnN0IGNoZWNrRG9jID0gKGUpID0+IHtcclxuICAgIGNvbnN0IG5hbWUgPSBlLnRhcmdldC5kYXRhc2V0Lm5hbWVcclxuICAgIC8vIGNvbnNvbGUubG9nKGRvY3NbbmFtZV0pXHJcbiAgICBzZXREb2NzKHtcclxuICAgICAgLi4uZG9jcyxcclxuICAgICAgW25hbWVdOiAhZG9jc1tuYW1lXVxyXG4gICAgfSlcclxuICAgIGNvbnNvbGUubG9nKGRvY3MpXHJcblxyXG4gIH1cclxuICBjb25zdCBjaGFuZ2VPcGxhdGEgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgbmFtZSA9IGVcclxuICAgICAgLnRhcmdldFxyXG4gICAgICAuZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKVxyXG4gICAgc2V0T3BsYXRhKCFwcmVkb3BsYXRhKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2hhbmdlU3JvayA9IGUgPT4ge1xyXG4gICAgY29uc3QgbW9udGggPSBwYXJzZUludChlLnRhcmdldC52YWx1ZSlcclxuICAgIHNldFNyb2soZS50YXJnZXQudmFsdWUpXHJcbiAgICBzZXRQYXltZW50RGF0ZShwYXJzZURhdGUobW9udGgpKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2hhbmdlU3Jva0J0biA9IChtb250aCkgPT4ge1xyXG4gICAgY29uc3QgbW9udGhWYWwgPSBwYXJzZUludChtb250aClcclxuICAgIHNldFNyb2sobW9udGgpXHJcbiAgICBzZXRQYXltZW50RGF0ZShwYXJzZURhdGUobW9udGhWYWwpKVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgc3RlcFRoaXJkID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgY29uc3Qgb2JqZWN0ID0ge1xyXG4gICAgICBpZDogY29va2llLmdldCgnbGVhZF9pZCcpLFxyXG4gICAgICB0b2tlbjogY29va2llLmdldCgndG9rZW4nKSxcclxuXHJcbiAgICAgIC8vINC90LDQtNC+INC40YHQv9GA0LDQstC40YLRjFxyXG4gICAgICBhbW91bnRQYXltZW50OiAnMTAwMDAwJyxcclxuICAgICAgc3Jvazogc3JvayxcclxuICAgICAgdHlwZVBheW1lbnQ6IHByZWRvcGxhdGFcclxuICAgICAgICA/ICfQn9GA0LXQtNC+0L/Qu9Cw0YLQsCdcclxuICAgICAgICA6ICfQn9C+0YHRgtC+0L/Qu9Cw0YLQsCdcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY29va2llLmdldCgndXRtX3NvdXJjZScpICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgb2JqZWN0LnV0bV9zb3VyY2UgPSBjb29raWUuZ2V0KCd1dG1fc291cmNlJylcclxuICAgICAgb2JqZWN0LmNsaWNrX2lkID0gY29va2llLmdldCgnY2xpY2tfaWQnKVxyXG4gICAgICAvLyBvYmplY3Qud2ViSUQgPSBjb29raWUuZ2V0KCd3ZWJfaWQnKVxyXG4gICAgfVxyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vc3RlcFRocmVlYCwge3BhcmFtczogb2JqZWN0fSlcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICBpZiAocmVzLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgc3dhbChcItCj0YHQv9C10YjQvdC+IVwiLCBg0JLQsNGI0LAg0LfQsNGP0LLQutCwINC+0YLQv9GA0LDQstC70LXQvdCwINCyIE5hc2ggQ29tcGFueS4g0JbQtNC40YLQtSDQt9Cy0L7QvdC+0Log0L7RgiDQvtC/0LXRgNCw0YLQvtGA0LBgLCBcInN1Y2Nlc3NcIikudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvJylcclxuICAgICAgICAgICAgY29va2llLnJlbW92ZSgnbGVhZF9pZCcpXHJcbiAgICAgICAgICAgIGNvb2tpZS5yZW1vdmUoJ3N0ZXAnKVxyXG4gICAgICAgICAgICBjb29raWUucmVtb3ZlKCd0b2tlbicpXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcblxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2Zvcm1fcmVnaXN0ZXIgdGhpcmRzdGVwJz5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKSA9PiBzdGVwVGhpcmQoZSl9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyYWRpb19ncm91cHMnPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9J3Bvc3RvcGxhdGEnXHJcbiAgICAgICAgICAgIGRhdGEtbmFtZT0ncG9zdG9wbGF0YSdcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdjaGVjay1ncm91cCdcclxuICAgICAgICAgICAgb25DbGljaz17ZSA9PiBjaGFuZ2VPcGxhdGEoZSl9PlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0nY2hlY2tib3gnIGNoZWNrZWQ9e3ByZWRvcGxhdGEgPT09IGZhbHNlfS8+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J3JhZGlvbGFiZWwnPtCf0L7RgdGC0L7Qv9C70LDRgtCwPC9sYWJlbD5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdwcmVkb3BsYXRhJ1xyXG4gICAgICAgICAgICBkYXRhLW5hbWU9J3ByZWRvcGxhdGEnXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nY2hlY2stZ3JvdXAnXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gY2hhbmdlT3BsYXRhKGUpfT5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J2NoZWNrYm94JyBjaGVja2VkPXtwcmVkb3BsYXRhID09PSB0cnVlfS8+XHJcblxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdyYWRpb2xhYmVsJz7Qn9GA0LXQtNC+0L/Qu9Cw0YLQsDwvbGFiZWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgeyFwcmVkb3BsYXRhICYmIDxkaXYgY2xhc3NOYW1lPVwicmFuZ2VcIj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyYW5nZV9faW5wdXRcIlxyXG4gICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxyXG4gICAgICAgICAgICB2YWx1ZT17c3Jva31cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gY2hhbmdlU3JvayhlKX1cclxuICAgICAgICAgICAgbWluPVwiMVwiXHJcbiAgICAgICAgICAgIG1heD1cIjZcIlxyXG4gICAgICAgICAgICBzdGVwPVwiMVwiXHJcbiAgICAgICAgICAgIGxpc3Q9XCJudW1iZXJcIi8+XHJcbiAgICAgICAgICA8ZGF0YWxpc3QgY2xhc3NOYW1lPSdyYW5nZV9fbGlzdCcgaWQ9XCJudW1iZXJcIj5cclxuICAgICAgICAgICAgPG9wdGlvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZVNyb2tCdG4oJzEnKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2ByYW5nZV9fb3B0IG9wdDAgJHtzcm9rID09PSAnMScgJiYgJ2FjdGl2ZSd9YH0+MTwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlU3Jva0J0bignMicpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHJhbmdlX19vcHQgJHtzcm9rID09PSAnMicgJiYgJ2FjdGl2ZSd9YH0+Mjwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlU3Jva0J0bignMycpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHJhbmdlX19vcHQgJHtzcm9rID09PSAnMycgJiYgJ2FjdGl2ZSd9YH0+Mzwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlU3Jva0J0bignNCcpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHJhbmdlX19vcHQgJHtzcm9rID09PSAnNCcgJiYgJ2FjdGl2ZSd9YH0+NDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlU3Jva0J0bignNScpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHJhbmdlX19vcHQgJHtzcm9rID09PSAnNScgJiYgJ2FjdGl2ZSd9YH0+NTwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlU3Jva0J0bignNicpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHJhbmdlX19vcHQgJHtzcm9rID09PSAnNicgJiYgJ2FjdGl2ZSd9YH0+Njwvb3B0aW9uPlxyXG4gICAgICAgICAgPC9kYXRhbGlzdD5cclxuICAgICAgICA8L2Rpdj5cclxufVxyXG4gICAgICAgIHshcHJlZG9wbGF0YSAmJiA8ZGl2IGNsYXNzTmFtZT0ncGF5bWVudF9kYXRlJz5cclxuICAgICAgICAgIDxzdHJvbmc+0JTQtdC90Ywg0L7Qv9C70LDRgtGLINC00L4ge3BheW1lbnREYXRlfVxyXG4gICAgICAgICAgPC9zdHJvbmc+XHJcbiAgICAgICAgPC9kaXY+fVxyXG5cclxuICAgICAgICB7LyogPGlucHV0XHJcbiAgICAgICAgICB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICBjbGFzc05hbWU9J3N1bW1hJ1xyXG4gICAgICAgICAgdmFsdWU9e3N1bW1hfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0U3VtbWEoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J9Ch0YPQvNC80LAg0L7Qv9C70LDRgtGLJy8+ICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYXltZW50X2Ftb3VudCc+XHJcbiAgICAgICAgICA8cD7QodGD0LzQvNCwINC+0L/Qu9Cw0YLRizo8L3A+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8c3Ryb25nPnthbW91bnRTcGFjZShgJHtkaXNjb3VudH1gKX3RgtCzPC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJpY2UtLWxpbmUtdGhyb3VnaFwiPnthbW91bnRTcGFjZShgJHtzdW1tYX1gKX3RgtCzPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGlzY291bnQnPlxyXG4gICAgICAgICAgICB7LyogPGltZyBzcmM9Jy9pbWcvZGlzY291bnQucG5nJy8+ICovfVxyXG4gICAgICAgICAgICA8cD4tNTAlXHJcbiAgICAgICAgICAgICAgPHNwYW4+0KHQmtCY0JTQmtCQPC9zcGFuPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2hlY2tfZ3JvdXBzJz5cclxuICAgICAgICAgIDxkaXYgZGF0YS1uYW1lPSdwcmVkb3BsYXRhJyBjbGFzc05hbWU9J2NoZWNrLWdyb3VwJz5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J2NoZWNrYm94JyBjaGVja2VkPXtkb2NzLmRvYzF9Lz5cclxuICAgICAgICAgICAgPGxhYmVsIG9uQ2xpY2s9eyhlKSA9PiBjaGVja0RvYyhlKX0gZGF0YS1uYW1lPSdkb2MxJyBjbGFzc05hbWU9J2NoZWNrbGFiZWwnPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9JyMnPtCX0LDQv9GA0L7RgSDQvdCwINC+0LHRgNCw0LHQvtGC0LrRgyDQv9C10YDRgdC+0L3QsNC70YzQvdGL0YUg0LTQsNC90L3Ri9GFPC9hPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGRhdGEtbmFtZT0ncG9zdG9wbGF0YScgY2xhc3NOYW1lPSdjaGVjay1ncm91cCc+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdjaGVja2JveCcgY2hlY2tlZD17ZG9jcy5kb2MyfS8+XHJcbiAgICAgICAgICAgIDxsYWJlbCBvbkNsaWNrPXsoZSkgPT4gY2hlY2tEb2MoZSl9IGNsYXNzTmFtZT0nY2hlY2tsYWJlbCcgZGF0YS1uYW1lPSdkb2MyJz5cclxuICAgICAgICAgICAgICA8YSBocmVmPScjJz7QlNC+0LPQvtCy0L7RgCDQv9GD0LHQu9C40YfQvdC+0Lkg0L7RhNC10YDRgtGLPC9hPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBkYXRhLW5hbWU9J3ByZWRvcGxhdGEnIGNsYXNzTmFtZT0nY2hlY2stZ3JvdXAnPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0nY2hlY2tib3gnIGNoZWNrZWQ9e2RvY3MuZG9jNH0vPlxyXG4gICAgICAgICAgICA8bGFiZWwgb25DbGljaz17KGUpID0+IGNoZWNrRG9jKGUpfSBjbGFzc05hbWU9J2NoZWNrbGFiZWwnIGRhdGEtbmFtZT0nZG9jNCc+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj0nIyc+0JTQvtCz0L7QstC+0YAg0L3QsCDQt9Cw0LrQsNC3INC90LDRgNGP0LQ8L2E+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICB7T2JqZWN0XHJcbiAgICAgICAgICAgIC5rZXlzKGRvY3MpXHJcbiAgICAgICAgICAgIC5zb21lKGsgPT4gIWRvY3Nba10pXHJcbiAgICAgICAgICAgID8gPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPSdzdWJtaXQnXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYnV0dG9uIGJ1dHRvbl9saWdodGVzdCdcclxuICAgICAgICAgICAgICAgIHZhbHVlPSfQn9C+0LvRg9GH0LjRgtGMINGA0LXQt9GD0LvRjNGC0LDRgicvPlxyXG4gICAgICAgICAgICA6IDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9J2J1dHRvbidcclxuICAgICAgICAgICAgICB2YWx1ZT0n0J/QvtC70YPRh9C40YLRjCDRgNC10LfRg9C70YzRgtCw0YInLz5cclxufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRoaXJkU3RlcCJdLCJzb3VyY2VSb290IjoiIn0=