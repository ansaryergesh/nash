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

    if (e.target.value > 3) {
      var element = document.querySelector('.range__list');
      element.scrollLeft = 200;
    } else {
      var _element = document.querySelector('.range__list');

      _element.scrollRight = 200;
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
          lineNumber: 124,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          className: "radiolabel",
          children: "\u041F\u043E\u0441\u0442\u043E\u043F\u043B\u0430\u0442\u0430"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 13
        }, _this)]), _jsxDEV2), void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 119,
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
          lineNumber: 133,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          className: "radiolabel",
          children: "\u041F\u0440\u0435\u0434\u043E\u043F\u043B\u0430\u0442\u0430"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 13
        }, _this)]), _jsxDEV3), void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 9
      }, _this), !predoplata && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "range",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "srok_month",
          children: "\u0421\u0440\u043E\u043A \u043E\u043F\u043B\u0430\u0442\u044B (\u043C\u0435\u0441\u044F\u0446)"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
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
          lineNumber: 141,
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
            lineNumber: 151,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            onClick: function onClick() {
              return changeSrokBtn('2');
            },
            className: "range__opt ".concat(srok === '2' && 'active'),
            children: "2"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            onClick: function onClick() {
              return changeSrokBtn('3');
            },
            className: "range__opt ".concat(srok === '3' && 'active'),
            children: "3"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            onClick: function onClick() {
              return changeSrokBtn('4');
            },
            className: "range__opt ".concat(srok === '4' && 'active'),
            children: "4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            onClick: function onClick() {
              return changeSrokBtn('5');
            },
            className: "range__opt ".concat(srok === '5' && 'active'),
            children: "5"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            onClick: function onClick() {
              return changeSrokBtn('6');
            },
            className: "range__opt ".concat(srok === '6' && 'active'),
            children: "6"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 25
      }, _this), !predoplata && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "payment_date",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
          children: ["\u0414\u0435\u043D\u044C \u043E\u043F\u043B\u0430\u0442\u044B \u0434\u043E ", paymentDate]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 25
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "payment_amount",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "\u0421\u0443\u043C\u043C\u0430 \u043E\u043F\u043B\u0430\u0442\u044B:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
            children: [(0,_defaults_extraFunction__WEBPACK_IMPORTED_MODULE_7__.amountSpace)("".concat(discount)), "\u0442\u0433"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            "class": "price--line-through",
            children: [(0,_defaults_extraFunction__WEBPACK_IMPORTED_MODULE_7__.amountSpace)("".concat(summa)), "\u0442\u0433"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 187,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "discount",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: ["-50%", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: "\u0421\u041A\u0418\u0414\u041A\u0410"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 192,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 191,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 183,
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
            lineNumber: 198,
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
              lineNumber: 200,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 199,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "data-name": "postoplata",
          className: "check-group",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "checkbox",
            checked: docs.doc2
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 204,
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
              lineNumber: 206,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "data-name": "predoplata",
          className: "check-group",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "checkbox",
            checked: docs.doc4
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 211,
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
              lineNumber: 213,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 212,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 210,
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
          lineNumber: 220,
          columnNumber: 15
        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "submit",
          className: "button",
          value: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 226,
          columnNumber: 15
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 116,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRzZXJ2aWNlL1RoaXJkU3RlcC5qcyJdLCJuYW1lcyI6WyJUaGlyZFN0ZXAiLCJzZXRMb2FkaW5nIiwidXNlRWZmZWN0Iiwic3VtbWEiLCJjb29raWUiLCJmaW5hbFN1bW1hIiwiTWF0aCIsImZsb29yIiwicGFyc2VJbnQiLCJkaXNjb3VudFN1bW1hIiwic2V0U3VtbWEiLCJzZXREaXNjb3VudCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VTdGF0ZSIsImRpc2NvdW50IiwicHJlZG9wbGF0YSIsInNldE9wbGF0YSIsInBhcnNlRGF0ZSIsInBheW1lbnREYXRlIiwic2V0UGF5bWVudERhdGUiLCJkb2NzIiwic2V0RG9jcyIsInNyb2siLCJzZXRTcm9rIiwiY2hlY2tEb2MiLCJlIiwibmFtZSIsInRhcmdldCIsImRhdGFzZXQiLCJjaGFuZ2VPcGxhdGEiLCJnZXRBdHRyaWJ1dGUiLCJjaGFuZ2VTcm9rIiwibW9udGgiLCJ2YWx1ZSIsImVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzY3JvbGxMZWZ0Iiwic2Nyb2xsUmlnaHQiLCJjaGFuZ2VTcm9rQnRuIiwibW9udGhWYWwiLCJzdGVwVGhpcmQiLCJwcmV2ZW50RGVmYXVsdCIsIm9iamVjdCIsImlkIiwidG9rZW4iLCJhbW91bnRQYXltZW50IiwidHlwZVBheW1lbnQiLCJ1bmRlZmluZWQiLCJ1dG1fc291cmNlIiwiY2xpY2tfaWQiLCJheGlvcyIsInByb2Nlc3MiLCJwYXJhbXMiLCJ0aGVuIiwicmVzIiwiZGF0YSIsInN1Y2Nlc3MiLCJzd2FsIiwiUm91dGVyIiwiYW1vdW50U3BhY2UiLCJkb2MxIiwiZG9jMiIsImRvYzQiLCJPYmplY3QiLCJrZXlzIiwic29tZSIsImsiLCJoYW5kbGVGb2N1cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztB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SkMsSUFERixDQUNPN0MsSUFEUCxFQUVFOEMsSUFGRixDQUVPLFVBQUFDLENBQUM7QUFBQSxpQkFBSSxDQUFDL0MsSUFBSSxDQUFDK0MsQ0FBRCxDQUFUO0FBQUEsU0FGUixpQkFHRztBQUNFLGNBQUksRUFBQyxRQURQO0FBRUUsa0JBQVEsRUFBRSxJQUZaO0FBR0UsaUJBQU8sRUFBRTtBQUFBLG1CQUFNQyxvRUFBVyxFQUFqQjtBQUFBLFdBSFg7QUFJRSxtQkFBUyxFQUFDLHdCQUpaO0FBS0UsZUFBSyxFQUFDO0FBTFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFISCxnQkFTRztBQUNBLGNBQUksRUFBQyxRQURMO0FBRUEsbUJBQVMsRUFBQyxRQUZWO0FBR0EsZUFBSyxFQUFDO0FBSE47QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE5Qk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBL0VGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FGRjtBQXlIRCxDQW5PRDs7R0FBTXJFLFM7O0tBQUFBLFM7QUFxT04sK0RBQWVBLFNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvanVyc2VydmljZS5iNWM1OGM0NzJmMGE2NTYzNmQ1OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBzd2FsIGZyb20gJ3N3ZWV0YWxlcnQnXHJcbmltcG9ydCB7YW1vdW50U3BhY2UsIGhhbmRsZUZvY3VzLCBwYXJzZURhdGV9IGZyb20gXCIuLi8uLi9kZWZhdWx0cy9leHRyYUZ1bmN0aW9uXCJcclxuXHJcbmNvbnN0IFRoaXJkU3RlcCA9ICh7c2V0TG9hZGluZ30pID0+IHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc3VtbWEgPSBjb29raWUuZ2V0KCdhbW91bnQnKVxyXG4gICAgY29uc3QgZmluYWxTdW1tYSA9IE1hdGguZmxvb3IocGFyc2VJbnQoc3VtbWEpICogMC4yKVxyXG4gICAgY29uc3QgZGlzY291bnRTdW1tYSA9IE1hdGguZmxvb3IocGFyc2VJbnQoZmluYWxTdW1tYSkgLyAyKVxyXG4gICAgaWYgKGZpbmFsU3VtbWEgPiAyMDAwMDApIHtcclxuICAgICAgc2V0U3VtbWEoZmluYWxTdW1tYSlcclxuICAgICAgc2V0RGlzY291bnQoZGlzY291bnRTdW1tYSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFN1bW1hKDIwMDAwMClcclxuICAgICAgc2V0RGlzY291bnQoMTAwMDAwKVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coZmluYWxTdW1tYSlcclxuICB9LCBbY29va2llLmdldCgnYW1vdW50JyldKVxyXG5cclxuXHJcbiAgY29uc3QgW3N1bW1hLFxyXG4gICAgc2V0U3VtbWFdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbZGlzY291bnQsXHJcbiAgICBzZXREaXNjb3VudF0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFtwcmVkb3BsYXRhLFxyXG4gICAgc2V0T3BsYXRhXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtwYXltZW50RGF0ZSxcclxuICAgIHNldFBheW1lbnREYXRlXSA9IHVzZVN0YXRlKHBhcnNlRGF0ZSgxKSlcclxuICBjb25zdCBbZG9jcyxcclxuICAgIHNldERvY3NdID0gdXNlU3RhdGUoe1wiZG9jMVwiOiB0cnVlLCBcImRvYzJcIjogdHJ1ZSwgXCJkb2MzXCI6IHRydWUsIFwiZG9jNFwiOiB0cnVlfSlcclxuICBjb25zdCBbc3JvayxcclxuICAgIHNldFNyb2tdID0gdXNlU3RhdGUoJzEnKVxyXG4gIGNvbnN0IGNoZWNrRG9jID0gKGUpID0+IHtcclxuICAgIGNvbnN0IG5hbWUgPSBlLnRhcmdldC5kYXRhc2V0Lm5hbWVcclxuICAgIC8vIGNvbnNvbGUubG9nKGRvY3NbbmFtZV0pXHJcbiAgICBzZXREb2NzKHtcclxuICAgICAgLi4uZG9jcyxcclxuICAgICAgW25hbWVdOiAhZG9jc1tuYW1lXVxyXG4gICAgfSlcclxuICAgIGNvbnNvbGUubG9nKGRvY3MpXHJcblxyXG4gIH1cclxuICBjb25zdCBjaGFuZ2VPcGxhdGEgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgbmFtZSA9IGVcclxuICAgICAgLnRhcmdldFxyXG4gICAgICAuZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKVxyXG4gICAgc2V0T3BsYXRhKCFwcmVkb3BsYXRhKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2hhbmdlU3JvayA9IGUgPT4ge1xyXG4gICAgY29uc3QgbW9udGggPSBwYXJzZUludChlLnRhcmdldC52YWx1ZSlcclxuICAgIHNldFNyb2soZS50YXJnZXQudmFsdWUpXHJcbiAgICBzZXRQYXltZW50RGF0ZShwYXJzZURhdGUobW9udGgpKVxyXG4gICAgaWYoZS50YXJnZXQudmFsdWU+Mykge1xyXG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhbmdlX19saXN0JylcclxuICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0ID0gMjAwO1xyXG4gICAgfWVsc2Uge1xyXG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhbmdlX19saXN0JylcclxuICAgICAgZWxlbWVudC5zY3JvbGxSaWdodCA9IDIwMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGNoYW5nZVNyb2tCdG4gPSAobW9udGgpID0+IHtcclxuICAgIGNvbnN0IG1vbnRoVmFsID0gcGFyc2VJbnQobW9udGgpXHJcbiAgICBzZXRTcm9rKG1vbnRoKVxyXG4gICAgc2V0UGF5bWVudERhdGUocGFyc2VEYXRlKG1vbnRoVmFsKSlcclxuICAgIGlmKG1vbnRoVmFsPjMpIHtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYW5nZV9fbGlzdCcpXHJcbiAgICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCA9IDIwMDtcclxuICAgIH1lbHNlIHtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYW5nZV9fbGlzdCcpXHJcbiAgICAgIGVsZW1lbnQuc2Nyb2xsUmlnaHQgPSAyMDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBzdGVwVGhpcmQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBjb25zdCBvYmplY3QgPSB7XHJcbiAgICAgIGlkOiBjb29raWUuZ2V0KCdsZWFkX2lkJyksXHJcbiAgICAgIHRva2VuOiBjb29raWUuZ2V0KCd0b2tlbicpLFxyXG5cclxuICAgICAgLy8g0L3QsNC00L4g0LjRgdC/0YDQsNCy0LjRgtGMXHJcbiAgICAgIGFtb3VudFBheW1lbnQ6ICcxMDAwMDAnLFxyXG4gICAgICBzcm9rOiBzcm9rLFxyXG4gICAgICB0eXBlUGF5bWVudDogcHJlZG9wbGF0YVxyXG4gICAgICAgID8gJ9Cf0YDQtdC00L7Qv9C70LDRgtCwJ1xyXG4gICAgICAgIDogJ9Cf0L7RgdGC0L7Qv9C70LDRgtCwJ1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjb29raWUuZ2V0KCd1dG1fc291cmNlJykgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBvYmplY3QudXRtX3NvdXJjZSA9IGNvb2tpZS5nZXQoJ3V0bV9zb3VyY2UnKVxyXG4gICAgICBvYmplY3QuY2xpY2tfaWQgPSBjb29raWUuZ2V0KCdjbGlja19pZCcpXHJcbiAgICAgIC8vIG9iamVjdC53ZWJJRCA9IGNvb2tpZS5nZXQoJ3dlYl9pZCcpXHJcbiAgICB9XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9zdGVwVGhyZWVgLCB7cGFyYW1zOiBvYmplY3R9KVxyXG4gICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgIGlmIChyZXMuZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICBzd2FsKFwi0KPRgdC/0LXRiNC90L4hXCIsIGDQktCw0YjQsCDQt9Cw0Y/QstC60LAg0L7RgtC/0YDQsNCy0LvQtdC90LAg0LIgTmFzaCBDb21wYW55LiDQltC00LjRgtC1INC30LLQvtC90L7QuiDQvtGCINC+0L/QtdGA0LDRgtC+0YDQsGAsIFwic3VjY2Vzc1wiKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgICAgICBjb29raWUucmVtb3ZlKCdsZWFkX2lkJylcclxuICAgICAgICAgICAgY29va2llLnJlbW92ZSgnc3RlcCcpXHJcbiAgICAgICAgICAgIGNvb2tpZS5yZW1vdmUoJ3Rva2VuJylcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICB9XHJcbiAgcmV0dXJuIChcclxuXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybV9yZWdpc3RlciB0aGlyZHN0ZXAnPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpID0+IHN0ZXBUaGlyZChlKX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JhZGlvX2dyb3Vwcyc+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0ncG9zdG9wbGF0YSdcclxuICAgICAgICAgICAgZGF0YS1uYW1lPSdwb3N0b3BsYXRhJ1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9J2NoZWNrLWdyb3VwJ1xyXG4gICAgICAgICAgICBvbkNsaWNrPXtlID0+IGNoYW5nZU9wbGF0YShlKX0+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdjaGVja2JveCcgY2hlY2tlZD17cHJlZG9wbGF0YSA9PT0gZmFsc2V9Lz5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0ncmFkaW9sYWJlbCc+0J/QvtGB0YLQvtC/0LvQsNGC0LA8L2xhYmVsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9J3ByZWRvcGxhdGEnXHJcbiAgICAgICAgICAgIGRhdGEtbmFtZT0ncHJlZG9wbGF0YSdcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdjaGVjay1ncm91cCdcclxuICAgICAgICAgICAgb25DbGljaz17ZSA9PiBjaGFuZ2VPcGxhdGEoZSl9PlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0nY2hlY2tib3gnIGNoZWNrZWQ9e3ByZWRvcGxhdGEgPT09IHRydWV9Lz5cclxuXHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J3JhZGlvbGFiZWwnPtCf0YDQtdC00L7Qv9C70LDRgtCwPC9sYWJlbD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7IXByZWRvcGxhdGEgJiYgPGRpdiBjbGFzc05hbWU9XCJyYW5nZVwiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSdzcm9rX21vbnRoJz7QodGA0L7QuiDQvtC/0LvQsNGC0YsgKNC80LXRgdGP0YYpPC9wPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJhbmdlX19pbnB1dFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtzcm9rfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBjaGFuZ2VTcm9rKGUpfVxyXG4gICAgICAgICAgICBtaW49XCIxXCJcclxuICAgICAgICAgICAgbWF4PVwiNlwiXHJcbiAgICAgICAgICAgIHN0ZXA9XCIxXCJcclxuICAgICAgICAgICAgbGlzdD1cIm51bWJlclwiLz5cclxuICAgICAgICAgIDxkYXRhbGlzdCBjbGFzc05hbWU9J3JhbmdlX19saXN0JyBpZD1cIm51bWJlclwiPlxyXG4gICAgICAgICAgICA8b3B0aW9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlU3Jva0J0bignMScpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHJhbmdlX19vcHQgb3B0MCAke3Nyb2sgPT09ICcxJyAmJiAnYWN0aXZlJ31gfT4xPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VTcm9rQnRuKCcyJyl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcmFuZ2VfX29wdCAke3Nyb2sgPT09ICcyJyAmJiAnYWN0aXZlJ31gfT4yPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VTcm9rQnRuKCczJyl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcmFuZ2VfX29wdCAke3Nyb2sgPT09ICczJyAmJiAnYWN0aXZlJ31gfT4zPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VTcm9rQnRuKCc0Jyl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcmFuZ2VfX29wdCAke3Nyb2sgPT09ICc0JyAmJiAnYWN0aXZlJ31gfT40PC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VTcm9rQnRuKCc1Jyl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcmFuZ2VfX29wdCAke3Nyb2sgPT09ICc1JyAmJiAnYWN0aXZlJ31gfT41PC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VTcm9rQnRuKCc2Jyl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcmFuZ2VfX29wdCAke3Nyb2sgPT09ICc2JyAmJiAnYWN0aXZlJ31gfT42PC9vcHRpb24+XHJcbiAgICAgICAgICA8L2RhdGFsaXN0PlxyXG4gICAgICAgIDwvZGl2PlxyXG59XHJcbiAgICAgICAgeyFwcmVkb3BsYXRhICYmIDxkaXYgY2xhc3NOYW1lPSdwYXltZW50X2RhdGUnPlxyXG4gICAgICAgICAgPHN0cm9uZz7QlNC10L3RjCDQvtC/0LvQsNGC0Ysg0LTQviB7cGF5bWVudERhdGV9XHJcbiAgICAgICAgICA8L3N0cm9uZz5cclxuICAgICAgICA8L2Rpdj59XHJcblxyXG4gICAgICAgIHsvKiA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9J251bWJlcidcclxuICAgICAgICAgIGNsYXNzTmFtZT0nc3VtbWEnXHJcbiAgICAgICAgICB2YWx1ZT17c3VtbWF9XHJcbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRTdW1tYShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj0n0KHRg9C80LzQsCDQvtC/0LvQsNGC0YsnLz4gKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BheW1lbnRfYW1vdW50Jz5cclxuICAgICAgICAgIDxwPtCh0YPQvNC80LAg0L7Qv9C70LDRgtGLOjwvcD5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzdHJvbmc+e2Ftb3VudFNwYWNlKGAke2Rpc2NvdW50fWApfdGC0LM8L3N0cm9uZz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcmljZS0tbGluZS10aHJvdWdoXCI+e2Ftb3VudFNwYWNlKGAke3N1bW1hfWApfdGC0LM8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXNjb3VudCc+XHJcbiAgICAgICAgICAgIHsvKiA8aW1nIHNyYz0nL2ltZy9kaXNjb3VudC5wbmcnLz4gKi99XHJcbiAgICAgICAgICAgIDxwPi01MCVcclxuICAgICAgICAgICAgICA8c3Bhbj7QodCa0JjQlNCa0JA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaGVja19ncm91cHMnPlxyXG4gICAgICAgICAgPGRpdiBkYXRhLW5hbWU9J3ByZWRvcGxhdGEnIGNsYXNzTmFtZT0nY2hlY2stZ3JvdXAnPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0nY2hlY2tib3gnIGNoZWNrZWQ9e2RvY3MuZG9jMX0vPlxyXG4gICAgICAgICAgICA8bGFiZWwgb25DbGljaz17KGUpID0+IGNoZWNrRG9jKGUpfSBkYXRhLW5hbWU9J2RvYzEnIGNsYXNzTmFtZT0nY2hlY2tsYWJlbCc+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj0nIyc+0JfQsNC/0YDQvtGBINC90LAg0L7QsdGA0LDQsdC+0YLQutGDINC/0LXRgNGB0L7QvdCw0LvRjNC90YvRhSDQtNCw0L3QvdGL0YU8L2E+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgZGF0YS1uYW1lPSdwb3N0b3BsYXRhJyBjbGFzc05hbWU9J2NoZWNrLWdyb3VwJz5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J2NoZWNrYm94JyBjaGVja2VkPXtkb2NzLmRvYzJ9Lz5cclxuICAgICAgICAgICAgPGxhYmVsIG9uQ2xpY2s9eyhlKSA9PiBjaGVja0RvYyhlKX0gY2xhc3NOYW1lPSdjaGVja2xhYmVsJyBkYXRhLW5hbWU9J2RvYzInPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9JyMnPtCU0L7Qs9C+0LLQvtGAINC/0YPQsdC70LjRh9C90L7QuSDQvtGE0LXRgNGC0Ys8L2E+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGRhdGEtbmFtZT0ncHJlZG9wbGF0YScgY2xhc3NOYW1lPSdjaGVjay1ncm91cCc+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdjaGVja2JveCcgY2hlY2tlZD17ZG9jcy5kb2M0fS8+XHJcbiAgICAgICAgICAgIDxsYWJlbCBvbkNsaWNrPXsoZSkgPT4gY2hlY2tEb2MoZSl9IGNsYXNzTmFtZT0nY2hlY2tsYWJlbCcgZGF0YS1uYW1lPSdkb2M0Jz5cclxuICAgICAgICAgICAgICA8YSBocmVmPScjJz7QlNC+0LPQvtCy0L7RgCDQvdCwINC30LDQutCw0Lcg0L3QsNGA0Y/QtDwvYT5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIHtPYmplY3RcclxuICAgICAgICAgICAgLmtleXMoZG9jcylcclxuICAgICAgICAgICAgLnNvbWUoayA9PiAhZG9jc1trXSlcclxuICAgICAgICAgICAgPyA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRm9jdXMoKX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYnV0dG9uIGJ1dHRvbl9saWdodGVzdCdcclxuICAgICAgICAgICAgICAgIHZhbHVlPSfQn9C+0LvRg9GH0LjRgtGMINGA0LXQt9GD0LvRjNGC0LDRgicvPlxyXG4gICAgICAgICAgICA6IDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9J2J1dHRvbidcclxuICAgICAgICAgICAgICB2YWx1ZT0n0J/QvtC70YPRh9C40YLRjCDRgNC10LfRg9C70YzRgtCw0YInLz5cclxufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRoaXJkU3RlcCJdLCJzb3VyY2VSb290IjoiIn0=