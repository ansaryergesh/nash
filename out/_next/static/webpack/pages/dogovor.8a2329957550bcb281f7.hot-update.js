self["webpackHotUpdate_N_E"]("pages/dogovor",{

/***/ "./pages/dogovor.js":
/*!**************************!*\
  !*** ./pages/dogovor.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\job\\nashcompany\\pages\\dogovor.js",
    _this = undefined,
    _s = $RefreshSig$();





var Dogovor = function Dogovor() {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('Фамилия Имя'),
      name = _useState[0],
      setName = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('Юр лицо'),
      type = _useState2[0],
      setType = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('Компания'),
      companyName = _useState3[0],
      setCompanyName = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(200000),
      priceWithDisc = _useState4[0],
      setPrice = _useState4[1];

  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth() + 1;
  var year = today.getFullYear();
  var parseDay = day < 10 ? "0" + day : day;
  var parseMonth = parseInt(month) > 10 ? "0 " + month : "0" + month;
  var todayParse = parseDay + "." + parseMonth + "." + year + "г.";
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "container",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "viewport",
        content: "width=960"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "dogovor",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
        className: "dogovor__header",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
          className: "top",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "\u0414\u043E\u0433\u043E\u0432\u043E\u0440-\u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u044F \u2116"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "\u041A \u041F\u0423\u0411\u041B\u0418\u0427\u041D\u041E\u041C\u0423-\u0414\u041E\u0413\u041E\u0412\u041E\u0420\u0423 \u041E\u0424\u0415\u0420\u0422\u042B \u2116"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
          className: "bottom",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
            children: "\u0433. \u0410\u043B\u043C\u0430\u0442\u044B"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: todayParse
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
        className: "dogovor__body",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
          className: "content",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: ["\u042F ", name, ", \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0439(\u0430\u044F) \u0432 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0430\u0445 ", companyName, ", \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0439 \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0438 \u0434\u043E\u0432\u0435\u0440\u0435\u043D\u043D\u043E\u0441\u0442\u0438/\u043F\u0440\u0438\u043A\u0430\u0437\u0430 \u0434\u0430\u043B\u0435\u0435 \u0438\u043C\u0435\u043D\u0443\u0435\u043C\u044B\u0439 \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A \u043F\u043E\u0440\u0443\u0447\u0430\u044E, \u0430 \u0422\u041E\u041E \xABNASH Company\xBB \u0432 \u0434\u0430\u043B\u044C\u043D\u0435\u0439\u0448\u0435\u043C \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442 \u043D\u0430 \u0441\u0435\u0431\u044F \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E \u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0443\u0441\u043B\u0443\u0433\u0438 \u0432 \u043E\u0431\u044A\u0435\u043C\u0435 \u0438 \u043D\u0430 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u0445, \u043F\u0440\u0435\u0434\u0443\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u043D\u044B\u0445 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u043C \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u043E\u043C \u2013 \u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u044F;"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: ["\u042F ", name, ", \u043E\u0431\u044F\u0437\u0443\u044E\u0441\u044C \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C \u043F\u043E\u043B\u043D\u043E\u043C\u043E\u0447\u0438\u044F \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0438 5 \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u043D\u044B\u0445 \u0434\u043D\u0435\u0439. \u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u043D\u0435\u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F \u043F\u043E\u043B\u043D\u043E\u043C\u043E\u0447\u0438\u0439, \u044F \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u044E \u043D\u0430 \u0441\u0435\u0431\u044F \u0432\u0441\u0435 \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u044B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430 \u043F\u043E \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u043C\u0443 \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u0443 \u0438 \u043E\u0431\u044F\u0437\u0443\u044E\u0441\u044C \u0441\u0432\u043E\u0435\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E \u043E\u043F\u043B\u0430\u0442\u0438\u0442\u044C \u0438\u0445."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "\u041D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u043C, \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u044E \u0441\u0432\u043E\u0438 \u043F\u043E\u043B\u043D\u043E\u043C\u043E\u0447\u0438\u044F \u043F\u043E \u0437\u0430\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044E \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0433\u043E \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u0430."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "\u042F \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u043B\u0435\u043D(\u0430) \u0438 \u0441\u043E\u0433\u043B\u0430\u0441\u0435\u043D(\u0430) \u0441 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u043C\u0438 \u041E\u0444\u0435\u0440\u0442\u044B \u0438 \u0422\u0430\u0440\u0438\u0444\u0430\u043C\u0438 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044F."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "\u041F\u043E\u0440\u0443\u0447\u0430\u044E \u043E\u043A\u0430\u0437\u0430\u0442\u044C \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0443\u0441\u043B\u0443\u0433\u0438 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044E: TOO NASH COMPANY"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "\u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044E \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u043E\u043C \u043F\u043E\u0440\u0443\u0447\u0435\u043D\u043E \u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0443\u0441\u043B\u0443\u0433\u0438 \u043F\u043E \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438 \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u043E\u0439 \u0432 \u043D\u0438\u0436\u0435\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0439 \u0442\u0430\u0431\u043B\u0438\u0446\u0435:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
          className: "table_price",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                  children: "\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0443\u0441\u043B\u0443\u0433"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                  children: "\u0422\u0430\u0440\u0438\u0444\u044B \u0431\u0435\u0437 \u0441\u043A\u0438\u0434\u043A\u0438 (\u0442\u0435\u043D\u0433\u0435)"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                  children: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0441\u043E \u0441\u043A\u0438\u0434\u043A\u043E\u0439 (\u0442\u0435\u043D\u0433\u0435)"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 70,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                  children: "\u0421\u0440\u043E\u043A\u0438 \u043E\u043F\u043B\u0430\u0442\u044B"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 72,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                  children: "1. \u042E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044F."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 78,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                  children: ["1. ", priceWithDisc * 0.1]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 81,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                  children: ["1. ", priceWithDisc * 0.1 * 2]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 82,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                  children: "\u041D\u0430 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u0445 \u043F\u0440\u0435\u0434\u043E\u043F\u043B\u0430\u0442\u044B. \u041E\u043F\u043B\u0430\u0442\u0430 \u0434\u043E 6 \u043C\u0435\u0441\u044F\u0446\u0435\u0432"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                  children: "2. \u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 88,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                  children: ["2. ", priceWithDisc * 0.25]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                  children: ["2. ", priceWithDisc * 0.25 * 2]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 92,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 93,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                  children: "2. \u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 97,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                  children: ["2. ", priceWithDisc * 0.25]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 100,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                  children: ["2. ", priceWithDisc * 0.25 * 2]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 101,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 102,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                  children: "2. \u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                  children: ["2. ", priceWithDisc * 0.25]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 109,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                  children: ["2. ", priceWithDisc * 0.25 * 2]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 110,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 111,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                  children: "2. \u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 115,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                  children: ["2. ", priceWithDisc * 0.25]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 118,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                  children: ["2. ", priceWithDisc * 0.25 * 2]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 119,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 120,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                  children: "2. \u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 124,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                  children: ["2. ", priceWithDisc * 0.25]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 127,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                  children: ["2. ", priceWithDisc * 0.25 * 2]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 128,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 129,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                  children: "2. \u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                  children: ["2. ", priceWithDisc * 0.25]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 136,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                  children: ["2. ", priceWithDisc * 0.25 * 2]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 137,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 138,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
          className: "content",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ol", {
            type: "1",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: "\u0412\u0441\u0435 \u0440\u0430\u0441\u0445\u043E\u0434\u044B, \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0435 \u0434\u043B\u044F \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u044F, \u044F \u043E\u0431\u044F\u0437\u0443\u044E\u0441\u044C \u043E\u043F\u043B\u0430\u0447\u0438\u0432\u0430\u0442\u044C \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0438 1 (\u043E\u0434\u043D\u043E\u0433\u043E) \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u043D\u043E\u0433\u043E \u0434\u043D\u044F."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: "\u042F \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u044E\u0441\u044C \u0441 \u0442\u0435\u043C, \u0447\u0442\u043E \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C \u043F\u0440\u0438\u0441\u0442\u0443\u043F\u0430\u0435\u0442 \u043A \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044E \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432 \u043F\u043E\u0441\u043B\u0435 \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u043E\u043F\u043B\u0430\u0442\u044B \u0440\u0430\u0441\u0445\u043E\u0434\u043E\u0432, \u043F\u0440\u0435\u0434\u0443\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u043D\u044B\u0445 \u043F.1."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: ["\u042F \u043E\u0431\u044F\u0437\u0443\u044E\u0441\u044C \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0441\u0442\u0438 \u043E\u043F\u043B\u0430\u0442\u0443 \u0437\u0430 \u043E\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0435 \u0443\u0441\u043B\u0443\u0433\u0438 \u0432 \u0440\u0430\u0437\u043C\u0435\u0440\u0435 ", priceWithDisc, "\u0442\u0435\u043D\u0433\u0435 \u043D\u0435 \u043F\u043E\u0437\u0434\u043D\u0435\u0435 __.__.2021\u0433\u043E\u0434\u0430."]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: ["\u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u043D\u0430\u0440\u0443\u0448\u0435\u043D\u0438\u044F \u0441\u0440\u043E\u043A\u043E\u0432 \u043E\u043F\u043B\u0430\u0442\u044B \u0438\u043B\u0438 \u0440\u0430\u0441\u0442\u043E\u0440\u0436\u0435\u043D\u0438\u044F \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u0430 \u0432 \u043E\u0434\u043D\u043E\u0441\u0442\u043E\u0440\u043E\u043D\u043D\u0435\u043C \u043F\u043E\u0440\u044F\u0434\u043A\u0435, \u043E\u0431\u044F\u0437\u0443\u044E\u0441\u044C \u043E\u043F\u043B\u0430\u0442\u0438\u0442\u044C \u043F\u043E\u043B\u043D\u0443\u044E \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0443\u0441\u043B\u0443\u0433 \u0432 \u0440\u0430\u0437\u043C\u0435\u0440\u0435 ", priceWithDisc, "\u0442\u0435\u043D\u0433\u0435 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 10 \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u043D\u044B\u0445 \u0434\u043D\u0435\u0439 \u0441\u043E \u0434\u043D\u044F \u043D\u0430\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u044F \u0442\u0430\u043A\u043E\u0433\u043E \u0441\u043E\u0431\u044B\u0442\u0438\u044F."]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: "\u042F \u0434\u0430\u044E \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435, \u0447\u0442\u043E \u043B\u0438\u0448\u0430\u044E\u0441\u044C \u0441\u043A\u0438\u0434\u043A\u0438 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u043E\u0439 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u0435\u043C \u0432 \u0441\u043B\u0443\u0447\u0430\u0435 \u043F\u0440\u043E\u0441\u0440\u043E\u0447\u043A\u0438 \u043E\u043F\u043B\u0430\u0442\u044B \u0432 \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0439 \u0441\u0440\u043E\u043A \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0441\u043A\u0438\u0434\u043A\u0438 \u0438 \u043E\u0431\u044F\u0437\u0443\u044E\u0441\u044C \u043E\u043F\u043B\u0430\u0442\u0438\u0442\u044C \u0441\u043E\u0433\u043B\u0430\u0441\u043D\u043E \u0422\u0430\u0440\u0438\u0444\u0430\u043C \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044F."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 162,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: "\u042F \u0438\u043C\u0435\u044E \u043F\u0440\u0430\u0432\u043E \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043F\u0438\u0441\u044C\u043C\u0435\u043D\u043D\u044B\u0435 \u043E\u0431\u043E\u0441\u043D\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0437\u0430\u043C\u0435\u0447\u0430\u043D\u0438\u044F \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0438 1 (\u043E\u0434\u043D\u043E\u0433\u043E) \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u043D\u043E\u0433\u043E \u0434\u043D\u044F \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044E \u043F\u043E \u0432\u044B\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u043E\u043C\u0443 \u0410\u043A\u0442\u0443 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u044B\u0445 \u0440\u0430\u0431\u043E\u0442 \u0432 \u043B\u0438\u0447\u043D\u043E\u043C \u043A\u0430\u0431\u0438\u043D\u0435\u0442\u0435."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 167,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: "\u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u043D\u0435 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043F\u0438\u0441\u044C\u043C\u0435\u043D\u043D\u044B\u0445 \u043E\u0431\u043E\u0441\u043D\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u0437\u0430\u043C\u0435\u0447\u0430\u043D\u0438\u0439 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0438 1 (\u043E\u0434\u043D\u043E\u0433\u043E) \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u043D\u043E\u0433\u043E \u0434\u043D\u044F \u043F\u043E \u0432\u044B\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u043E\u043C\u0443 \u0410\u043A\u0442\u0443 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u044B\u0445 \u0440\u0430\u0431\u043E\u0442 \u0432 \u043B\u0438\u0447\u043D\u043E\u043C \u043A\u0430\u0431\u0438\u043D\u0435\u0442\u0435 \u0443\u0441\u043B\u0443\u0433\u0438 \u0441\u0447\u0438\u0442\u0430\u044E\u0442\u0441\u044F \u043E\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u043C\u0438 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u0435\u043C, \u0430 \u0438\u0445 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u044F \u043E\u0431\u044F\u0437\u0443\u044E\u0441\u044C \u043E\u043F\u043B\u0430\u0442\u0438\u0442\u044C \u0432 \u043F\u043E\u043B\u043D\u043E\u043C \u043E\u0431\u044A\u0435\u043C\u0435."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: "\u042F \u043E\u0431\u044F\u0437\u0443\u044E\u0441\u044C \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044E \u043D\u0430\u0434\u043B\u0435\u0436\u0430\u0449\u0438\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u0443\u044E \u0434\u043E\u0432\u0435\u0440\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0438 3 (\u0442\u0440\u0435\u0445) \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u043D\u044B\u0445 \u0434\u043D\u0435\u0439 \u0441\u043E \u0434\u043D\u044F \u0437\u0430\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u0430."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 177,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: "\u042F \u043E\u0431\u044F\u0437\u0443\u044E\u0441\u044C \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0442\u044C \u0432\u0441\u044E \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u0443\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u0438 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B \u0434\u043B\u044F \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044F"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 180,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: "\u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u043D\u0435 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043C\u043D\u043E\u0439 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0438 5 \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u043D\u044B\u0445 \u0434\u043D\u0435\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432 \u0438 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u0434\u043B\u044F \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044F, \u0443\u0441\u043B\u0443\u0433\u0430 \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044F \u043E\u043A\u0430\u0437\u0430\u043D\u043D\u043E\u0439, \u0430 \u0438\u0445 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u044F \u043E\u0431\u044F\u0437\u0443\u044E\u0441\u044C \u043E\u043F\u043B\u0430\u0442\u0438\u0442\u044C \u0432 \u043F\u043E\u043B\u043D\u043E\u043C \u043E\u0431\u044A\u0435\u043C\u0435."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 182,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: "\u042F \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u044E, \u0447\u0442\u043E \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043C\u043D\u043E\u0439 \u0434\u0430\u043D\u043D\u043E\u0433\u043E \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u0430-\u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u044F \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0430\u043A\u0446\u0435\u043F\u0442\u043E\u043C \u041F\u0443\u0431\u043B\u0438\u0447\u043D\u043E\u0439 \u041E\u0444\u0435\u0440\u0442\u044B"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 187,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: ["\u042F \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u044E\u0441\u044C \u0441\u043E \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u043C\u0438 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u043C\u0438:", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ol", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: "\u041F\u043E\u0441\u043B\u0435 \u043F\u043E\u0434\u043F\u0438\u0441\u0430\u043D\u0438\u044F \u043C\u043D\u043E\u0439 \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u0430-\u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u044F, \u043E\u043D \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043D\u0430 \u0443\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044E. \u0415\u0441\u043B\u0438 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442 \u0437\u0430\u043A\u0430\u0437 \u043D\u0430 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u0445, \u043E\u0442\u0440\u0430\u0436\u0435\u043D\u043D\u044B\u0445 \u0432 \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u043E\u043C \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0435, \u043E\u043D \u043F\u0440\u0438\u0441\u0442\u0443\u043F\u0430\u0435\u0442 \u043A \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044E \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u044D\u0442\u0430\u043F\u0430, \u043F\u0440\u0435\u0434\u0443\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u043D\u043E\u0433\u043E \u043F. 7.3.1. \u041E\u0444\u0435\u0440\u0442\u044B."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 192,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: "\u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u043D\u0435\u0441\u043E\u0433\u043B\u0430\u0441\u0438\u044F \u0441 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u043C\u0438 \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u0430-\u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u044F, \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u0442 \u043D\u0430 \u043F\u043E\u0434\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043D\u043E\u0432\u044B\u0439 \u0414\u043E\u0433\u043E\u0432\u043E\u0440-\u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u044F \u0438\u043B\u0438 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u044F\u0435\u0442 \u043E\u0431 \u043E\u0442\u043A\u0430\u0437\u0435 \u043E\u0442 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0443\u0441\u043B\u0443\u0433."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 197,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: "\u041F\u0440\u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0438 \u043C\u043D\u043E\u0439 \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u0430-\u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u044F \u0441 \u0432\u043D\u0435\u0441\u0435\u043D\u043D\u044B\u043C\u0438 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u043A\u0430\u043C\u0438 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044F, \u044F \u043E\u0431\u044F\u0437\u0443\u044E\u0441\u044C \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u0438\u0442\u044C\u0441\u044F \u0441 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u043C\u0438 \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u0430-\u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u044F, \u0432 \u0441\u043B\u0443\u0447\u0430\u0435 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u044F \u0441 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u043C\u0438, \u043E\u0442\u0440\u0430\u0436\u0435\u043D\u043D\u044B\u043C\u0438 \u0432 \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u0435-\u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u044F, \u044F \u043F\u043E\u0434\u043F\u0438\u0441\u044B\u0432\u0430\u044E \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442 \u043F\u043E\u0441\u0442\u0430\u0432\u0438\u0432 \u0433\u0430\u043B\u043E\u0447\u043A\u0443 \u0432 \u0433\u0440\u0430\u0444\u0435 \u201C\u2611\u201D. \u041F\u043E\u0441\u043B\u0435 \u0447\u0435\u0433\u043E, \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C \u043F\u0440\u0438\u0441\u0442\u0443\u043F\u0430\u0435\u0442 \u043A \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044E \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u044D\u0442\u0430\u043F\u0430, \u043F\u0440\u0435\u0434\u0443\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u043D\u043E\u0433\u043E \u043F. 6.3.1. \u041E\u0444\u0435\u0440\u0442\u044B."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 200,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: "\u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u043C\u043D\u0435 \u0443\u0441\u043B\u0443\u0433\u0438 \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0438 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432, \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043D\u044B\u0445 \u043C\u043D\u043E\u0439 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044F \u0438\u043B\u0438 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0445 \u0437\u0430\u043A\u0430\u0437\u043D\u044B\u043C \u043F\u0438\u0441\u044C\u043C\u043E\u043C \u0441 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0435\u043C \u043E \u0432\u0440\u0443\u0447\u0435\u043D\u0438\u0438 \u043F\u043E \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u043E\u043C\u0443 \u0430\u0434\u0440\u0435\u0441\u0443 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044F. \u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u044F \u043E\u0442\u043C\u0435\u0442\u043A\u0438 \u043E \u0432\u0440\u0443\u0447\u0435\u043D\u0438\u0438 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044E, \u0442\u0430\u043A\u0438\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B \u043F\u0440\u0438\u0437\u043D\u0430\u044E\u0442\u0441\u044F \u043D\u0435 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u043C\u0438 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044E."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 205,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: "\u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439 \u0432 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445/\u0440\u0435\u043A\u0432\u0438\u0437\u0438\u0442\u0430\u0445, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u0438/\u0438\u043B\u0438 \u043C\u043E\u0436\u0435\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0434\u043B\u044F \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F (\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u043D\u043E \u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E, \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u0434\u043E\u043C\u0430\u0448\u043D\u0435\u0433\u043E \u0438\u043B\u0438 \u0440\u0430\u0431\u043E\u0447\u0435\u0433\u043E \u0430\u0434\u0440\u0435\u0441\u0430, \u043D\u043E\u043C\u0435\u0440\u0430 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u043E\u0433\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430, \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0433\u043E \u043F\u043E\u0447\u0442\u043E\u0432\u043E\u0433\u043E \u0430\u0434\u0440\u0435\u0441\u0430 \u0438 \u0442.\u0434.), \u044F \u043E\u0431\u044F\u0437\u0443\u044E\u0441\u044C \u043D\u0435\u043C\u0435\u0434\u043B\u0435\u043D\u043D\u043E (\u043D\u0435 \u043F\u043E\u0437\u0434\u043D\u0435\u0435, \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0433\u043E \u0434\u043D\u044F, \u0441\u043E \u0434\u043D\u044F \u0442\u0430\u043A\u043E\u0433\u043E \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F) \u0443\u0432\u0435\u0434\u043E\u043C\u0438\u0442\u044C \u043E\u0431 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F\u0445 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044F. \u041F\u0440\u0438 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0438 \u043F\u0438\u0441\u044C\u043C\u0435\u043D\u043D\u043E\u0433\u043E \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F \u043E\u0431 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0438 \u0434\u0430\u043D\u043D\u044B\u0445, \u0440\u0430\u043D\u0435\u0435 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044F \u0430\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u043E\u0439 \u0438 \u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u043D\u043E\u0439."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 210,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 191,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 190,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: "\u042F \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u043B\u0435\u043D(\u0430), \u0447\u0442\u043E \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u043F\u0443\u043D\u043A\u0442\u0430\u043C\u0438 1-1, 3 \u0441\u0442\u0430\u0442\u044C\u0438 152 \u0413\u0440\u0430\u0436\u0434\u0430\u043D\u0441\u043A\u043E\u0433\u043E \u041A\u043E\u0434\u0435\u043A\u0441\u0430 \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0438 \u041A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D \u041F\u0438\u0441\u044C\u043C\u0435\u043D\u043D\u0430\u044F \u0444\u043E\u0440\u043C\u0430 \u0441\u0434\u0435\u043B\u043A\u0438 \u0441\u043E\u0432\u0435\u0440\u0448\u0430\u0435\u0442\u0441\u044F \u043D\u0430 \u0431\u0443\u043C\u0430\u0436\u043D\u043E\u043C \u043D\u043E\u0441\u0438\u0442\u0435\u043B\u0435 \u0438\u043B\u0438 \u0432 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u0444\u043E\u0440\u043C\u0435. \u041A \u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044E \u0441\u0434\u0435\u043B\u043A\u0438 \u0432 \u043F\u0438\u0441\u044C\u043C\u0435\u043D\u043D\u043E\u0439 \u0444\u043E\u0440\u043C\u0435 \u043F\u0440\u0438\u0440\u0430\u0432\u043D\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u043E\u0431\u043C\u0435\u043D \u043F\u0438\u0441\u044C\u043C\u0430\u043C\u0438, \u0442\u0435\u043B\u0435\u0433\u0440\u0430\u043C\u043C\u0430\u043C\u0438, \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u043E\u0433\u0440\u0430\u043C\u043C\u0430\u043C\u0438, \u0442\u0435\u043B\u0435\u0442\u0430\u0439\u043F\u043E\u0433\u0440\u0430\u043C\u043C\u0430\u043C\u0438, \u0444\u0430\u043A\u0441\u0430\u043C\u0438, \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u043C\u0438 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u043C\u0438, \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u043C\u0438 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F\u043C\u0438 \u0438\u043B\u0438 \u0438\u043D\u044B\u043C\u0438 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u043C\u0438, \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u044E\u0449\u0438\u043C\u0438 \u0441\u0443\u0431\u044A\u0435\u043A\u0442\u043E\u0432 \u0438 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u0435 \u0438\u0445 \u0432\u043E\u043B\u0435\u0438\u0437\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u044F."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 220,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: "\u041F\u043E\u0434\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u0430-\u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u044F \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u043F.1-1 \u0441\u0442.152 \u0413\u041A \u0420\u041A \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u0435\u043C \u0441\u0434\u0435\u043B\u043A\u0438 \u0432 \u043F\u0438\u0441\u044C\u043C\u0435\u043D\u043D\u043E\u0439 \u0444\u043E\u0440\u043C\u0435. \u0414\u043E\u0433\u043E\u0432\u043E\u0440-\u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u044F \u043F\u043E\u0434\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u043F\u0443\u0442\u0435\u043C \u043F\u0440\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0433\u0430\u043B\u043E\u0447\u043A\u0438 \u0432 \u0433\u0440\u0430\u0444\u0435 \u201C\u2611\u201D \u0438 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0421\u041C\u0421-\u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F \u0441 \u0447\u0435\u0442\u044B\u0440\u0435\u0445\u0437\u043D\u0430\u0447\u043D\u044B\u043C \u043A\u043E\u0434\u043E\u043C \u043D\u0430 \u043D\u043E\u043C\u0435\u0440"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 228,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
        className: "dogovor__footer",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "left_side",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
            children: "\u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 240,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
            children: "\u0414\u0435\u0439\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0439 \u0432 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0430\u0445:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 242,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C \u0424\u0418\u041E"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 244,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "\u041F\u043E\u0434\u043F\u0438\u0441\u044C"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 245,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 239,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "right_side",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
            children: "\u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 249,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
            children: "\u0422\u041E\u041E \xABNASH Company\xBB"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 251,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "\u0411\u0418\u041D: 100740009653"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 252,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "\u0410\u0434\u0440\u0435\u0441: \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u041A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D,"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 253,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "\u0433. \u0410\u043B\u043C\u0430\u0442\u044B, \u0443\u043B. \u0422\u043E\u043B\u0435 \u0431\u0438 101"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 255,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "\u0422\u0435\u043B: +7 (727) 2501-500"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 256,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "\u0420/\u0441\u0447 KZ728560000004207818"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 257,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "\u0412 \u0410\u041E \xAB\u0411\u0430\u043D\u043A \u0426\u0435\u043D\u0442\u0440 \u041A\u0440\u0435\u0434\u0438\u0442\xBB"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 259,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "\u0411\u0418\u041A KCJBKZKX"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 260,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, _this);
};

_s(Dogovor, "cO2VAvkviOCInH6eOAl2WiKa3tg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];
});

_c = Dogovor;
/* harmony default export */ __webpack_exports__["default"] = (Dogovor);

var _c;

$RefreshReg$(_c, "Dogovor");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZG9nb3Zvci5qcyJdLCJuYW1lcyI6WyJEb2dvdm9yIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJuYW1lIiwic2V0TmFtZSIsInR5cGUiLCJzZXRUeXBlIiwiY29tcGFueU5hbWUiLCJzZXRDb21wYW55TmFtZSIsInByaWNlV2l0aERpc2MiLCJzZXRQcmljZSIsInRvZGF5IiwiRGF0ZSIsImRheSIsImdldERhdGUiLCJtb250aCIsImdldE1vbnRoIiwieWVhciIsImdldEZ1bGxZZWFyIiwicGFyc2VEYXkiLCJwYXJzZU1vbnRoIiwicGFyc2VJbnQiLCJ0b2RheVBhcnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUNBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFDcEIsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4Qjs7QUFEb0Isa0JBR1BDLCtDQUFRLENBQUMsYUFBRCxDQUhEO0FBQUEsTUFFYkMsSUFGYTtBQUFBLE1BR2xCQyxPQUhrQjs7QUFBQSxtQkFLUEYsK0NBQVEsQ0FBQyxTQUFELENBTEQ7QUFBQSxNQUliRyxJQUphO0FBQUEsTUFLbEJDLE9BTGtCOztBQUFBLG1CQU9BSiwrQ0FBUSxDQUFDLFVBQUQsQ0FQUjtBQUFBLE1BTWJLLFdBTmE7QUFBQSxNQU9sQkMsY0FQa0I7O0FBQUEsbUJBU05OLCtDQUFRLENBQUMsTUFBRCxDQVRGO0FBQUEsTUFRYk8sYUFSYTtBQUFBLE1BU2xCQyxRQVRrQjs7QUFXcEIsTUFBTUMsS0FBSyxHQUFHLElBQUlDLElBQUosRUFBZDtBQUNBLE1BQU1DLEdBQUcsR0FBR0YsS0FBSyxDQUFDRyxPQUFOLEVBQVo7QUFDQSxNQUFNQyxLQUFLLEdBQUdKLEtBQUssQ0FBQ0ssUUFBTixLQUFtQixDQUFqQztBQUNBLE1BQU1DLElBQUksR0FBR04sS0FBSyxDQUFDTyxXQUFOLEVBQWI7QUFFQSxNQUFNQyxRQUFRLEdBQUdOLEdBQUcsR0FBRyxFQUFOLEdBQ2IsTUFBTUEsR0FETyxHQUViQSxHQUZKO0FBR0EsTUFBTU8sVUFBVSxHQUFHQyxRQUFRLENBQUNOLEtBQUQsQ0FBUixHQUFrQixFQUFsQixHQUNmLE9BQU9BLEtBRFEsR0FFZixNQUFNQSxLQUZWO0FBSUEsTUFBTU8sVUFBVSxHQUFHSCxRQUFRLEdBQUcsR0FBWCxHQUFpQkMsVUFBakIsR0FBOEIsR0FBOUIsR0FBb0NILElBQXBDLEdBQTJDLElBQTlEO0FBRUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0U7QUFBTSxZQUFJLEVBQUMsVUFBWDtBQUFzQixlQUFPLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUlFO0FBQUssZUFBUyxFQUFDLFNBQWY7QUFBQSw4QkFDRTtBQUFTLGlCQUFTLEVBQUMsaUJBQW5CO0FBQUEsZ0NBQ0U7QUFBUyxtQkFBUyxFQUFDLEtBQW5CO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFLRTtBQUFTLG1CQUFTLEVBQUMsUUFBbkI7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUEsc0JBQUlLO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFZRTtBQUFTLGlCQUFTLEVBQUMsZUFBbkI7QUFBQSxnQ0FDRTtBQUFTLG1CQUFTLEVBQUMsU0FBbkI7QUFBQSxrQ0FDRTtBQUFBLGtDQUFNbkIsSUFBTix1SkFBMENJLFdBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUtFO0FBQUEsa0NBQU1KLElBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGLGVBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUkYsZUFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFURixlQVVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVZGLGVBWUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBaUJFO0FBQVMsbUJBQVMsRUFBQyxhQUFuQjtBQUFBLGlDQUNFO0FBQUEsb0NBQ0U7QUFBQSxxQ0FDRTtBQUFBLHdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRkYsZUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFKRixlQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFZRTtBQUFBLHNDQUNFO0FBQUEsd0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFJRTtBQUFBLG9DQUFRTSxhQUFhLEdBQUcsR0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUpGLGVBS0U7QUFBQSxvQ0FBUUEsYUFBYSxHQUFHLEdBQWhCLEdBQXNCLENBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFMRixlQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQVdFO0FBQUEsd0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFJRTtBQUFBLG9DQUFRQSxhQUFhLEdBQUcsSUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUpGLGVBS0U7QUFBQSxvQ0FBUUEsYUFBYSxHQUFHLElBQWhCLEdBQXVCLENBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFMRixlQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVhGLGVBb0JFO0FBQUEsd0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFJRTtBQUFBLG9DQUFRQSxhQUFhLEdBQUcsSUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUpGLGVBS0U7QUFBQSxvQ0FBUUEsYUFBYSxHQUFHLElBQWhCLEdBQXVCLENBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFMRixlQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQXBCRixlQTZCRTtBQUFBLHdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBSUU7QUFBQSxvQ0FBUUEsYUFBYSxHQUFHLElBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFKRixlQUtFO0FBQUEsb0NBQVFBLGFBQWEsR0FBRyxJQUFoQixHQUF1QixDQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBTEYsZUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkE3QkYsZUFzQ0U7QUFBQSx3Q0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixlQUlFO0FBQUEsb0NBQVFBLGFBQWEsR0FBRyxJQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSkYsZUFLRTtBQUFBLG9DQUFRQSxhQUFhLEdBQUcsSUFBaEIsR0FBdUIsQ0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUxGLGVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBdENGLGVBK0NFO0FBQUEsd0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFJRTtBQUFBLG9DQUFRQSxhQUFhLEdBQUcsSUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUpGLGVBS0U7QUFBQSxvQ0FBUUEsYUFBYSxHQUFHLElBQWhCLEdBQXVCLENBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFMRixlQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQS9DRixlQXdERTtBQUFBLHdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBSUU7QUFBQSxvQ0FBUUEsYUFBYSxHQUFHLElBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFKRixlQUtFO0FBQUEsb0NBQVFBLGFBQWEsR0FBRyxJQUFoQixHQUF1QixDQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBTEYsZUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkF4REY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBakJGLGVBbUdFO0FBQVMsbUJBQVMsRUFBQyxTQUFuQjtBQUFBLGlDQUNFO0FBQUksZ0JBQUksRUFBQyxHQUFUO0FBQUEsb0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFMRixlQVFFO0FBQUEsa1ZBQzhEQSxhQUQ5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUkYsZUFZRTtBQUFBLGt1QkFFK0RBLGFBRi9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFaRixlQWdCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFoQkYsZUFxQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBckJGLGVBMEJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQTFCRixlQStCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkEvQkYsZUFrQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBbENGLGVBb0NFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXBDRixlQXlDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkF6Q0YsZUE0Q0U7QUFBQSwrT0FDRTtBQUFBLHdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBTkYsZUFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFURixlQWNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQWRGLGVBbUJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQTVDRixlQTBFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkExRUYsZUFrRkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBbEZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBbkdGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVpGLGVBNE1FO0FBQVMsaUJBQVMsRUFBQyxpQkFBbkI7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUMsV0FBZjtBQUFBLGtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEYsZUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMRixlQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQVVFO0FBQUssbUJBQVMsRUFBQyxZQUFmO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRixlQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGLGVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEYsZUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQRixlQVFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJGLGVBU0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVEYsZUFXRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFYRixlQVlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE1TUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUErT0QsQ0F4UUQ7O0dBQU1WLE87VUFDV0Usa0Q7OztLQURYRixPO0FBMFFOLCtEQUFlQSxPQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RvZ292b3IuOGEyMzI5OTU3NTUwYmNiMjgxZjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuY29uc3QgRG9nb3ZvciA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IFtuYW1lLFxyXG4gICAgc2V0TmFtZV0gPSB1c2VTdGF0ZSgn0KTQsNC80LjQu9C40Y8g0JjQvNGPJylcclxuICBjb25zdCBbdHlwZSxcclxuICAgIHNldFR5cGVdID0gdXNlU3RhdGUoJ9Cu0YAg0LvQuNGG0L4nKVxyXG4gIGNvbnN0IFtjb21wYW55TmFtZSxcclxuICAgIHNldENvbXBhbnlOYW1lXSA9IHVzZVN0YXRlKCfQmtC+0LzQv9Cw0L3QuNGPJylcclxuICBjb25zdCBbcHJpY2VXaXRoRGlzYyxcclxuICAgIHNldFByaWNlXSA9IHVzZVN0YXRlKDIwMDAwMClcclxuXHJcbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gIGNvbnN0IGRheSA9IHRvZGF5LmdldERhdGUoKVxyXG4gIGNvbnN0IG1vbnRoID0gdG9kYXkuZ2V0TW9udGgoKSArIDFcclxuICBjb25zdCB5ZWFyID0gdG9kYXkuZ2V0RnVsbFllYXIoKVxyXG5cclxuICBjb25zdCBwYXJzZURheSA9IGRheSA8IDEwXHJcbiAgICA/IFwiMFwiICsgZGF5XHJcbiAgICA6IGRheVxyXG4gIGNvbnN0IHBhcnNlTW9udGggPSBwYXJzZUludChtb250aCkgPiAxMFxyXG4gICAgPyBcIjAgXCIgKyBtb250aFxyXG4gICAgOiBcIjBcIiArIG1vbnRoXHJcblxyXG4gIGNvbnN0IHRvZGF5UGFyc2UgPSBwYXJzZURheSArIFwiLlwiICsgcGFyc2VNb250aCArIFwiLlwiICsgeWVhciArIFwi0LMuXCI7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPTk2MFwiLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZG9nb3Zvcic+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdkb2dvdm9yX19oZWFkZXInPlxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSd0b3AnPlxyXG4gICAgICAgICAgICA8cD7QlNC+0LPQvtCy0L7RgC3Qv9C+0YDRg9GH0LXQvdC40Y8g4oSWPC9wPlxyXG4gICAgICAgICAgICA8cD7QmiDQn9Cj0JHQm9CY0KfQndCe0JzQoy3QlNCe0JPQntCS0J7QoNCjINCe0KTQldCg0KLQqyDihJY8L3A+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2JvdHRvbSc+XHJcbiAgICAgICAgICAgIDxiPtCzLiDQkNC70LzQsNGC0Ys8L2I+XHJcbiAgICAgICAgICAgIDxwPnt0b2RheVBhcnNlfTwvcD5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nZG9nb3Zvcl9fYm9keSc+XHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgICAgICAgICA8cD7QryB7bmFtZX0sINC00LXQudGB0YLQstGD0Y7RidC40Lko0LDRjykg0LIg0LjQvdGC0LXRgNC10YHQsNGFIHtjb21wYW55TmFtZX0sINC00LXQudGB0YLQstGD0Y7RidC40Lkg0L3QsCDQvtGB0L3QvtCy0LDQvdC40Lgg0LTQvtCy0LXRgNC10L3QvdC+0YHRgtC4L9C/0YDQuNC60LDQt9CwINC00LDQu9C10LUg0LjQvNC10L3Rg9C10LzRi9C5XHJcbtCX0LDQutCw0LfRh9C40Log0L/QvtGA0YPRh9Cw0Y4sINCwINCi0J7QniDCq05BU0ggQ29tcGFuecK7INCyINC00LDQu9GM0L3QtdC50YjQtdC8INCY0YHQv9C+0LvQvdC40YLQtdC70Ywg0L/RgNC40L3QuNC80LDQtdGCINC90LBcclxu0YHQtdCx0Y8g0L7QsdGP0LfQsNGC0LXQu9GM0YHRgtCy0L4g0L7QutCw0LfRi9Cy0LDRgtGMINGO0YDQuNC00LjRh9C10YHQutC40LUg0YPRgdC70YPQs9C4INCyINC+0LHRitC10LzQtSDQuCDQvdCwINGD0YHQu9C+0LLQuNGP0YUsXHJcbtC/0YDQtdC00YPRgdC80L7RgtGA0LXQvdC90YvRhSDQvdCw0YHRgtC+0Y/RidC40Lwg0LTQvtCz0L7QstC+0YDQvtC8IOKAkyDQv9C+0YDRg9GH0LXQvdC40Y87PC9wPlxyXG4gICAgICAgICAgICA8cD7QryB7bmFtZX0sINC+0LHRj9C30YPRjtGB0Ywg0L/QvtC00YLQstC10YDQtNC40YLRjCDQv9C+0LvQvdC+0LzQvtGH0LjRjyDQsiDRgtC10YfQtdC90LjQuCA1INC60LDQu9C10L3QtNCw0YDQvdGL0YUg0LTQvdC10LkuINCSINGB0LvRg9GH0LDQtVxyXG7QvdC10L/QvtC00YLQstC10YDQttC00LXQvdC40Y8g0L/QvtC70L3QvtC80L7Rh9C40LksINGPINC/0YDQuNC90LjQvNCw0Y4g0L3QsCDRgdC10LHRjyDQstGB0LUg0YTQuNC90LDQvdGB0L7QstGL0LUg0L7QsdGP0LfQsNGC0LXQu9GM0YHRgtCy0LAg0L/QvlxyXG7QvdCw0YHRgtC+0Y/RidC10LzRgyDQlNC+0LPQvtCy0L7RgNGDINC4INC+0LHRj9C30YPRjtGB0Ywg0YHQstC+0LXQstGA0LXQvNC10L3QvdC+INC+0L/Qu9Cw0YLQuNGC0Ywg0LjRhS48L3A+XHJcbiAgICAgICAgICAgIDxwPtCd0LDRgdGC0L7Rj9GJ0LjQvCwg0L/QvtC00YLQstC10YDQttC00LDRjiDRgdCy0L7QuCDQv9C+0LvQvdC+0LzQvtGH0LjRjyDQv9C+INC30LDQutC70Y7Rh9C10L3QuNGOINC90LDRgdGC0L7Rj9GJ0LXQs9C+INCU0L7Qs9C+0LLQvtGA0LAuPC9wPlxyXG4gICAgICAgICAgICA8cD7QryDQvtC30L3QsNC60L7QvNC70LXQvSjQsCkg0Lgg0YHQvtCz0LvQsNGB0LXQvSjQsCkg0YEg0YPRgdC70L7QstC40Y/QvNC4INCe0YTQtdGA0YLRiyDQuCDQotCw0YDQuNGE0LDQvNC4INCY0YHQv9C+0LvQvdC40YLQtdC70Y8uPC9wPlxyXG4gICAgICAgICAgICA8cD7Qn9C+0YDRg9GH0LDRjiDQvtC60LDQt9Cw0YLRjCDRjtGA0LjQtNC40YfQtdGB0LrQuNC1INGD0YHQu9GD0LPQuCDQmNGB0L/QvtC70L3QuNGC0LXQu9GOOiBUT08gTkFTSCBDT01QQU5ZXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHA+0JjRgdC/0L7Qu9C90LjRgtC10LvRjiDQl9Cw0LrQsNC30YfQuNC60L7QvCDQv9C+0YDRg9GH0LXQvdC+INC+0LrQsNC30LDRgtGMINGD0YHQu9GD0LPQuCDQv9C+INGB0YLQvtC40LzQvtGB0YLQuCDRg9C60LDQt9Cw0L3QvdC+0Lkg0LJcclxuICAgICAgICAgICAgICDQvdC40LbQtdGB0LvQtdC00YPRjtGJ0LXQuSDRgtCw0LHQu9C40YbQtTo8L3A+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSd0YWJsZV9wcmljZSc+XHJcbiAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0aD7QndCw0LjQvNC10L3QvtCy0LDQvdC40LUg0YPRgdC70YPQszwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aD7QotCw0YDQuNGE0Ysg0LHQtdC3INGB0LrQuNC00LrQuCAo0YLQtdC90LPQtSlcclxuICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgPHRoPtCh0YLQvtC40LzQvtGB0YLRjCDRgdC+INGB0LrQuNC00LrQvtC5ICjRgtC10L3Qs9C1KVxyXG4gICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGg+0KHRgNC+0LrQuCDQvtC/0LvQsNGC0Ys8L3RoPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuXHJcbiAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0aD5cclxuICAgICAgICAgICAgICAgICAgICAxLiDQrtGA0LjQtNC40YfQtdGB0LrQsNGPINC60L7QvdGB0YPQu9GM0YLQsNGG0LjRjy5cclxuICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgPHRoPjEuIHtwcmljZVdpdGhEaXNjICogMC4xfTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aD4xLiB7cHJpY2VXaXRoRGlzYyAqIDAuMSAqIDJ9PC90aD5cclxuICAgICAgICAgICAgICAgICAgPHRoPtCd0LAg0YPRgdC70L7QstC40Y/RhSDQv9GA0LXQtNC+0L/Qu9Cw0YLRiy4g0J7Qv9C70LDRgtCwINC00L4gNiDQvNC10YHRj9GG0LXQslxyXG4gICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuXHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0aD5cclxuICAgICAgICAgICAgICAgICAgMi5cdNCf0L7QtNCz0L7RgtC+0LLQutCwINC80LDRgtC10YDQuNCw0LvQvtCyXHJcbiAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aD4yLiB7cHJpY2VXaXRoRGlzYyAqIDAuMjV9PC90aD5cclxuICAgICAgICAgICAgICAgICAgPHRoPjIuIHtwcmljZVdpdGhEaXNjICogMC4yNSAqIDJ9PC90aD5cclxuICAgICAgICAgICAgICAgICAgPHRoPlxyXG4gICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgPHRoPlxyXG4gICAgICAgICAgICAgICAgICAyLlx00J/QvtC00LPQvtGC0L7QstC60LAg0LzQsNGC0LXRgNC40LDQu9C+0LJcclxuICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgPHRoPjIuIHtwcmljZVdpdGhEaXNjICogMC4yNX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGg+Mi4ge3ByaWNlV2l0aERpc2MgKiAwLjI1ICogMn08L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGg+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICA8dGg+XHJcbiAgICAgICAgICAgICAgICAgIDIuXHTQn9C+0LTQs9C+0YLQvtCy0LrQsCDQvNCw0YLQtdGA0LjQsNC70L7QslxyXG4gICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGg+Mi4ge3ByaWNlV2l0aERpc2MgKiAwLjI1fTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aD4yLiB7cHJpY2VXaXRoRGlzYyAqIDAuMjUgKiAyfTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aD5cclxuICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0aD5cclxuICAgICAgICAgICAgICAgICAgMi5cdNCf0L7QtNCz0L7RgtC+0LLQutCwINC80LDRgtC10YDQuNCw0LvQvtCyXHJcbiAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aD4yLiB7cHJpY2VXaXRoRGlzYyAqIDAuMjV9PC90aD5cclxuICAgICAgICAgICAgICAgICAgPHRoPjIuIHtwcmljZVdpdGhEaXNjICogMC4yNSAqIDJ9PC90aD5cclxuICAgICAgICAgICAgICAgICAgPHRoPlxyXG4gICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgPHRoPlxyXG4gICAgICAgICAgICAgICAgICAyLlx00J/QvtC00LPQvtGC0L7QstC60LAg0LzQsNGC0LXRgNC40LDQu9C+0LJcclxuICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgPHRoPjIuIHtwcmljZVdpdGhEaXNjICogMC4yNX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGg+Mi4ge3ByaWNlV2l0aERpc2MgKiAwLjI1ICogMn08L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGg+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICA8dGg+XHJcbiAgICAgICAgICAgICAgICAgIDIuXHTQn9C+0LTQs9C+0YLQvtCy0LrQsCDQvNCw0YLQtdGA0LjQsNC70L7QslxyXG4gICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGg+Mi4ge3ByaWNlV2l0aERpc2MgKiAwLjI1fTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aD4yLiB7cHJpY2VXaXRoRGlzYyAqIDAuMjUgKiAyfTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aD5cclxuICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgICAgICAgICA8b2wgdHlwZT0nMSc+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAg0JLRgdC1INGA0LDRgdGF0L7QtNGLLCDQvdC10L7QsdGF0L7QtNC40LzRi9C1INC00LvRjyDQuNGB0L/QvtC70L3QtdC90LjRjyDQv9C+0YDRg9GH0LXQvdC40Y8sINGPINC+0LHRj9C30YPRjtGB0Ywg0L7Qv9C70LDRh9C40LLQsNGC0Ywg0LJcclxuICAgICAgICAgICAgICAgINGC0LXRh9C10L3QuNC4IDEgKNC+0LTQvdC+0LPQvikg0LrQsNC70LXQvdC00LDRgNC90L7Qs9C+INC00L3Rjy5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgINCvINGB0L7Qs9C70LDRiNCw0Y7RgdGMINGBINGC0LXQvCwg0YfRgtC+INCY0YHQv9C+0LvQvdC40YLQtdC70Ywg0L/RgNC40YHRgtGD0L/QsNC10YIg0Log0LjRgdC/0L7Qu9C90LXQvdC40Y4g0L7QsdGP0LfQsNGC0LXQu9GM0YHRgtCyINC/0L7RgdC70LVcclxuICAgICAgICAgICAgICAgINC/0YDQvtC40LfQstC10LTQtdC90LjRjyDQvtC/0LvQsNGC0Ysg0YDQsNGB0YXQvtC00L7Qsiwg0L/RgNC10LTRg9GB0LzQvtGC0YDQtdC90L3Ri9GFINC/LjEuPC9saT5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICDQryDQvtCx0Y/Qt9GD0Y7RgdGMINC/0YDQvtC40LfQstC10YHRgtC4INC+0L/Qu9Cw0YLRgyDQt9CwINC+0LrQsNC30LDQvdC90YvQtSDRg9GB0LvRg9Cz0Lgg0LIg0YDQsNC30LzQtdGA0LUge3ByaWNlV2l0aERpc2N9XHJcbiAgICAgICAgICAgICAgICDRgtC10L3Qs9C1INC90LUg0L/QvtC30LTQvdC10LUgX18uX18uMjAyMdCz0L7QtNCwLlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAg0JIg0YHQu9GD0YfQsNC1INC90LDRgNGD0YjQtdC90LjRjyDRgdGA0L7QutC+0LIg0L7Qv9C70LDRgtGLINC40LvQuCDRgNCw0YHRgtC+0YDQttC10L3QuNGPINCU0L7Qs9C+0LLQvtGA0LAg0LIg0L7QtNC90L7RgdGC0L7RgNC+0L3QvdC10LxcclxuICAgICAgICAgICAgICAgINC/0L7RgNGP0LTQutC1LCDQvtCx0Y/Qt9GD0Y7RgdGMINC+0L/Qu9Cw0YLQuNGC0Ywg0L/QvtC70L3Rg9GOINGB0YLQvtC40LzQvtGB0YLRjCDRg9GB0LvRg9CzINCyINGA0LDQt9C80LXRgNC1IHtwcmljZVdpdGhEaXNjfVxyXG4gICAgICAgICAgICAgICAg0YLQtdC90LPQtSDQsiDRgtC10YfQtdC90LjQtSAxMCDQutCw0LvQtdC90LTQsNGA0L3Ri9GFINC00L3QtdC5INGB0L4g0LTQvdGPINC90LDRgdGC0YPQv9C70LXQvdC40Y8g0YLQsNC60L7Qs9C+INGB0L7QsdGL0YLQuNGPLjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAg0K8g0LTQsNGOINGB0L7Qs9C70LDRgdC40LUsINGH0YLQviDQu9C40YjQsNGO0YHRjCDRgdC60LjQtNC60Lgg0L/RgNC10LTQvtGB0YLQsNCy0LvQtdC90L3QvtC5INCY0YHQv9C+0LvQvdC40YLQtdC70LXQvCDQsiDRgdC70YPRh9Cw0LVcclxuICAgICAgICAgICAgICAgINC/0YDQvtGB0YDQvtGH0LrQuCDQvtC/0LvQsNGC0Ysg0LIg0YPQutCw0LfQsNC90L3Ri9C5INGB0YDQvtC6INC00LXQudGB0YLQstC40Y8g0YHQutC40LTQutC4INC4INC+0LHRj9C30YPRjtGB0Ywg0L7Qv9C70LDRgtC40YLRjCDRgdC+0LPQu9Cw0YHQvdC+XHJcbiAgICAgICAgICAgICAgICDQotCw0YDQuNGE0LDQvCDQmNGB0L/QvtC70L3QuNGC0LXQu9GPLlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAg0K8g0LjQvNC10Y4g0L/RgNCw0LLQviDQv9GA0LXQtNC+0YHRgtCw0LLQuNGC0Ywg0L/QuNGB0YzQvNC10L3QvdGL0LUg0L7QsdC+0YHQvdC+0LLQsNC90L3Ri9C1INC30LDQvNC10YfQsNC90LjRjyDQsiDRgtC10YfQtdC90LjQuCAxICjQvtC00L3QvtCz0L4pXHJcbiAgICAgICAgICAgICAgICDQutCw0LvQtdC90LTQsNGA0L3QvtCz0L4g0LTQvdGPINCY0YHQv9C+0LvQvdC40YLQtdC70Y4g0L/QviDQstGL0YHRgtCw0LLQu9C10L3QvdC+0LzRgyDQkNC60YLRgyDQstGL0L/QvtC70L3QtdC90L3Ri9GFINGA0LDQsdC+0YIg0LIg0LvQuNGH0L3QvtC8XHJcbiAgICAgICAgICAgICAgICDQutCw0LHQuNC90LXRgtC1LlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAg0JIg0YHQu9GD0YfQsNC1INC90LUg0L/RgNC10LTQvtGB0YLQsNCy0LvQtdC90LjRjyDQv9C40YHRjNC80LXQvdC90YvRhSDQvtCx0L7RgdC90L7QstCw0L3QvdGL0YUg0LfQsNC80LXRh9Cw0L3QuNC5INCyINGC0LXRh9C10L3QuNC4IDFcclxuICAgICAgICAgICAgICAgICjQvtC00L3QvtCz0L4pINC60LDQu9C10L3QtNCw0YDQvdC+0LPQviDQtNC90Y8g0L/QviDQstGL0YHRgtCw0LLQu9C10L3QvdC+0LzRgyDQkNC60YLRgyDQstGL0L/QvtC70L3QtdC90L3Ri9GFINGA0LDQsdC+0YIg0LIg0LvQuNGH0L3QvtC8XHJcbiAgICAgICAgICAgICAgICDQutCw0LHQuNC90LXRgtC1INGD0YHQu9GD0LPQuCDRgdGH0LjRgtCw0Y7RgtGB0Y8g0L7QutCw0LfQsNC90L3Ri9C80Lgg0JjRgdC/0L7Qu9C90LjRgtC10LvQtdC8LCDQsCDQuNGFINGB0YLQvtC40LzQvtGB0YLRjCDRjyDQvtCx0Y/Qt9GD0Y7RgdGMXHJcbiAgICAgICAgICAgICAgICDQvtC/0LvQsNGC0LjRgtGMINCyINC/0L7Qu9C90L7QvCDQvtCx0YrQtdC80LUuPC9saT5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICDQryDQvtCx0Y/Qt9GD0Y7RgdGMINC/0YDQtdC00L7RgdGC0LDQstC40YLRjCDQmNGB0L/QvtC70L3QuNGC0LXQu9GOINC90LDQtNC70LXQttCw0YnQuNC8INC+0LHRgNCw0LfQvtC8INC+0YTQvtGA0LzQu9C10L3QvdGD0Y4g0LTQvtCy0LXRgNC10L3QvdC+0YHRgtGMXHJcbiAgICAgICAgICAgICAgICDQsiDRgtC10YfQtdC90LjQuCAzICjRgtGA0LXRhSkg0LrQsNC70LXQvdC00LDRgNC90YvRhSDQtNC90LXQuSDRgdC+INC00L3RjyDQt9Cw0LrQu9GO0YfQtdC90LjRjyDQlNC+0LPQvtCy0L7RgNCwLjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAg0K8g0L7QsdGP0LfRg9GO0YHRjCDQv9GA0LXQtNC+0YHRgtCw0LLQu9GP0YLRjCDQstGB0Y4g0L3QtdC+0LHRhdC+0LTQuNC80YPRjiDQuNC90YTQvtGA0LzQsNGG0LjRjiDQuCDQtNC+0LrRg9C80LXQvdGC0Ysg0LTQu9GPINCY0YHQv9C+0LvQvdC40YLQtdC70Y88L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgINCSINGB0LvRg9GH0LDQtSDQvdC1INC/0YDQtdC00L7RgdGC0LDQstC70LXQvdC40Y8g0LzQvdC+0Lkg0LIg0YLQtdGH0LXQvdC40LggNSDQutCw0LvQtdC90LTQsNGA0L3Ri9GFINC00L3QtdC5INC00L7QutGD0LzQtdC90YLQvtCyINC4XHJcbiAgICAgICAgICAgICAgICDQuNC90YTQvtGA0LzQsNGG0LjQuCDQtNC70Y8g0JjRgdC/0L7Qu9C90LjRgtC10LvRjywg0YPRgdC70YPQs9CwINGB0YfQuNGC0LDQtdGC0YHRjyDQvtC60LDQt9Cw0L3QvdC+0LksINCwINC40YUg0YHRgtC+0LjQvNC+0YHRgtGMINGPXHJcbiAgICAgICAgICAgICAgICDQvtCx0Y/Qt9GD0Y7RgdGMINC+0L/Qu9Cw0YLQuNGC0Ywg0LIg0L/QvtC70L3QvtC8INC+0LHRitC10LzQtS5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT7QryDQv9C+0LTRgtCy0LXRgNC20LTQsNGOLCDRh9GC0L4g0L3QsNC/0YDQsNCy0LvQtdC90LjQtSDQvNC90L7QuSDQtNCw0L3QvdC+0LPQviDQlNC+0LPQvtCy0L7RgNCwLdC/0L7RgNGD0YfQtdC90LjRjyDRj9Cy0LvRj9C10YLRgdGPXHJcbiAgICAgICAgICAgICAgICDQsNC60YbQtdC/0YLQvtC8INCf0YPQsdC70LjRh9C90L7QuSDQntGE0LXRgNGC0YtcclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT7QryDRgdC+0LPQu9Cw0YjQsNGO0YHRjCDRgdC+INGB0LvQtdC00YPRjtGJ0LjQvNC4INGD0YHQu9C+0LLQuNGP0LzQuDpcclxuICAgICAgICAgICAgICAgIDxvbD5cclxuICAgICAgICAgICAgICAgICAgPGxpPtCf0L7RgdC70LUg0L/QvtC00L/QuNGB0LDQvdC40Y8g0LzQvdC+0Lkg0JTQvtCz0L7QstC+0YDQsC3Qv9C+0YDRg9GH0LXQvdC40Y8sINC+0L0g0L3QsNC/0YDQsNCy0LvRj9C10YLRgdGPINC90LAg0YPRgtCy0LXRgNC20LTQtdC90LjQtVxyXG4gICAgICAgICAgICAgICAgICAgINCY0YHQv9C+0LvQvdC40YLQtdC70Y4uINCV0YHQu9C4INCY0YHQv9C+0LvQvdC40YLQtdC70Ywg0L/RgNC40L3QuNC80LDQtdGCINC30LDQutCw0Lcg0L3QsCDRg9GB0LvQvtCy0LjRj9GFLCDQvtGC0YDQsNC20LXQvdC90YvRhSDQslxyXG4gICAgICAgICAgICAgICAgICAgINGD0LrQsNC30LDQvdC90L7QvCDQtNC+0LrRg9C80LXQvdGC0LUsINC+0L0g0L/RgNC40YHRgtGD0L/QsNC10YIg0Log0LjRgdC/0L7Qu9C90LXQvdC40Y4g0L/QtdGA0LLQvtCz0L4g0Y3RgtCw0L/QsCwg0L/RgNC10LTRg9GB0LzQvtGC0YDQtdC90L3QvtCz0L5cclxuICAgICAgICAgICAgICAgICAgICDQvy4gNy4zLjEuINCe0YTQtdGA0YLRiy5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPtCSINGB0LvRg9GH0LDQtSDQvdC10YHQvtCz0LvQsNGB0LjRjyDRgSDRg9GB0LvQvtCy0LjRj9C80Lgg0JTQvtCz0L7QstC+0YDQsC3Qv9C+0YDRg9GH0LXQvdC40Y8sINCY0YHQv9C+0LvQvdC40YLQtdC70Ywg0L3QsNC/0YDQsNCy0LvRj9C10YJcclxuICAgICAgICAgICAgICAgICAgICDQvdCwINC/0L7QtNC/0LjRgdCw0L3QuNC1INC90L7QstGL0Lkg0JTQvtCz0L7QstC+0YAt0L/QvtGA0YPRh9C10L3QuNGPINC40LvQuCDRg9Cy0LXQtNC+0LzQu9GP0LXRgiDQvtCxINC+0YLQutCw0LfQtSDQvtGCINC/0YDQtdC00L7RgdGC0LDQstC70LXQvdC40Y9cclxuICAgICAgICAgICAgICAgICAgICDRg9GB0LvRg9CzLjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT7Qn9GA0Lgg0L/QvtC70YPRh9C10L3QuNC4INC80L3QvtC5INCU0L7Qs9C+0LLQvtGA0LAt0L/QvtGA0YPRh9C10L3QuNGPINGBINCy0L3QtdGB0LXQvdC90YvQvNC4INC60L7RgNGA0LXQutGC0LjRgNC+0LLQutCw0LzQuFxyXG4gICAgICAgICAgICAgICAgICAgINCY0YHQv9C+0LvQvdC40YLQtdC70Y8sINGPINC+0LHRj9C30YPRjtGB0Ywg0L7Qt9C90LDQutC+0LzQuNGC0YzRgdGPINGBINGD0YHQu9C+0LLQuNGP0LzQuCDQlNC+0LPQvtCy0L7RgNCwLdC/0L7RgNGD0YfQtdC90LjRjywg0LIg0YHQu9GD0YfQsNC1XHJcbiAgICAgICAgICAgICAgICAgICAg0YHQvtCz0LvQsNGB0LjRjyDRgSDRg9GB0LvQvtCy0LjRj9C80LgsINC+0YLRgNCw0LbQtdC90L3Ri9C80Lgg0LIg0JTQvtCz0L7QstC+0YDQtS3Qv9C+0YDRg9GH0LXQvdC40Y8sINGPINC/0L7QtNC/0LjRgdGL0LLQsNGOINGD0LrQsNC30LDQvdC90YvQuVxyXG4gICAgICAgICAgICAgICAgICAgINC00L7QutGD0LzQtdC90YIg0L/QvtGB0YLQsNCy0LjQsiDQs9Cw0LvQvtGH0LrRgyDQsiDQs9GA0LDRhNC1IOKAnOKYkeKAnS4g0J/QvtGB0LvQtSDRh9C10LPQviwg0JjRgdC/0L7Qu9C90LjRgtC10LvRjCDQv9GA0LjRgdGC0YPQv9Cw0LXRgiDQulxyXG4gICAgICAgICAgICAgICAgICAgINC40YHQv9C+0LvQvdC10L3QuNGOINC/0LXRgNCy0L7Qs9C+INGN0YLQsNC/0LAsINC/0YDQtdC00YPRgdC80L7RgtGA0LXQvdC90L7Qs9C+INC/LiA2LjMuMS4g0J7RhNC10YDRgtGLLjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT7QmNGB0L/QvtC70L3QuNGC0LXQu9GMINC/0YDQtdC00L7RgdGC0LDQstC70Y/QtdGCINC80L3QtSDRg9GB0LvRg9Cz0Lgg0L3QsCDQvtGB0L3QvtCy0LDQvdC40Lgg0LTQvtC60YPQvNC10L3RgtC+0LIsINGB0LDQvNC+0YHRgtC+0Y/RgtC10LvRjNC90L5cclxuICAgICAgICAgICAgICAgICAgICDQt9Cw0LPRgNGD0LbQtdC90L3Ri9GFINC80L3QvtC5INC90LAg0YHQsNC50YLQtSDQmNGB0L/QvtC70L3QuNGC0LXQu9GPINC40LvQuCDQvdCw0L/RgNCw0LLQu9C10L3QvdGL0YUg0LfQsNC60LDQt9C90YvQvCDQv9C40YHRjNC80L7QvCDRgVxyXG4gICAgICAgICAgICAgICAgICAgINGD0LLQtdC00L7QvNC70LXQvdC40LXQvCDQviDQstGA0YPRh9C10L3QuNC4INC/0L4g0Y7RgNC40LTQuNGH0LXRgdC60L7QvNGDINCw0LTRgNC10YHRgyDQmNGB0L/QvtC70L3QuNGC0LXQu9GPLiDQkiDRgdC70YPRh9Cw0LUg0L7RgtGB0YPRgtGB0YLQstC40Y9cclxuICAgICAgICAgICAgICAgICAgICDQvtGC0LzQtdGC0LrQuCDQviDQstGA0YPRh9C10L3QuNC4INCY0YHQv9C+0LvQvdC40YLQtdC70Y4sINGC0LDQutC40LUg0LTQvtC60YPQvNC10L3RgtGLINC/0YDQuNC30L3QsNGO0YLRgdGPINC90LUg0L3QsNC/0YDQsNCy0LvQtdC90L3Ri9C80LhcclxuICAgICAgICAgICAgICAgICAgICDQmNGB0L/QvtC70L3QuNGC0LXQu9GOLjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT7QkiDRgdC70YPRh9Cw0LUg0LjQt9C80LXQvdC10L3QuNC5INCyINC60L7QvdGC0LDQutGC0L3Ri9GFINC00LDQvdC90YvRhS/RgNC10LrQstC40LfQuNGC0LDRhSwg0LrQvtGC0L7RgNGL0LUg0JjRgdC/0L7Qu9C90LjRgtC10LvRjFxyXG4gICAgICAgICAgICAgICAgICAgINC40YHQv9C+0LvRjNC30YPQtdGCINC4L9C40LvQuCDQvNC+0LbQtdGCINC40YHQv9C+0LvRjNC30L7QstCw0YLRjCDQtNC70Y8g0L7RgtC/0YDQsNCy0LrQuCDRg9Cy0LXQtNC+0LzQu9C10L3QuNGPICjQvdCw0L/RgNC40LzQtdGALCDQvdC+INC90LVcclxuICAgICAgICAgICAgICAgICAgICDRgtC+0LvRjNC60L4sINC40LfQvNC10L3QtdC90LjQtSDQtNC+0LzQsNGI0L3QtdCz0L4g0LjQu9C4INGA0LDQsdC+0YfQtdCz0L4g0LDQtNGA0LXRgdCwLCDQvdC+0LzQtdGA0LAg0LzQvtCx0LjQu9GM0L3QvtCz0L4g0YLQtdC70LXRhNC+0L3QsCxcclxuICAgICAgICAgICAgICAgICAgICDRjdC70LXQutGC0YDQvtC90L3QvtCz0L4g0L/QvtGH0YLQvtCy0L7Qs9C+INCw0LTRgNC10YHQsCDQuCDRgi7QtC4pLCDRjyDQvtCx0Y/Qt9GD0Y7RgdGMINC90LXQvNC10LTQu9C10L3QvdC+ICjQvdC1INC/0L7Qt9C00L3QtdC1LFxyXG4gICAgICAgICAgICAgICAgICAgINGB0LvQtdC00YPRjtGJ0LXQs9C+INC00L3Rjywg0YHQviDQtNC90Y8g0YLQsNC60L7Qs9C+INC40LfQvNC10L3QtdC90LjRjykg0YPQstC10LTQvtC80LjRgtGMINC+0LEg0LjQt9C80LXQvdC10L3QuNGP0YUg0JjRgdC/0L7Qu9C90LjRgtC10LvRjy5cclxuICAgICAgICAgICAgICAgICAgICDQn9GA0Lgg0L7RgtGB0YPRgtGB0YLQstC40Lgg0L/QuNGB0YzQvNC10L3QvdC+0LPQviDRg9Cy0LXQtNC+0LzQu9C10L3QuNGPINC+0LEg0LjQt9C80LXQvdC10L3QuNC4INC00LDQvdC90YvRhSwg0YDQsNC90LXQtVxyXG4gICAgICAgICAgICAgICAgICAgINC/0YDQtdC00L7RgdGC0LDQstC70LXQvdC90LDRjyDQuNC90YTQvtGA0LzQsNGG0LjRjyDRgdGH0LjRgtCw0LXRgtGB0Y8g0LDQutGC0YPQsNC70YzQvdC+0Lkg0Lgg0LTQvtGB0YLQvtCy0LXRgNC90L7QuS48L2xpPlxyXG4gICAgICAgICAgICAgICAgPC9vbD5cclxuXHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICDQryDQvtC30L3QsNC60L7QvNC70LXQvSjQsCksINGH0YLQviDQsiDRgdC+0L7RgtCy0LXRgtGB0YLQstC40Lgg0YEg0L/Rg9C90LrRgtCw0LzQuCAxLTEsIDMg0YHRgtCw0YLRjNC4IDE1MiDQk9GA0LDQttC00LDQvdGB0LrQvtCz0L5cclxuICAgICAgICAgICAgICAgINCa0L7QtNC10LrRgdCwINCg0LXRgdC/0YPQsdC70LjQutC4INCa0LDQt9Cw0YXRgdGC0LDQvSDQn9C40YHRjNC80LXQvdC90LDRjyDRhNC+0YDQvNCwINGB0LTQtdC70LrQuCDRgdC+0LLQtdGA0YjQsNC10YLRgdGPINC90LAg0LHRg9C80LDQttC90L7QvFxyXG4gICAgICAgICAgICAgICAg0L3QvtGB0LjRgtC10LvQtSDQuNC70Lgg0LIg0Y3Qu9C10LrRgtGA0L7QvdC90L7QuSDRhNC+0YDQvNC1LiDQmiDRgdC+0LLQtdGA0YjQtdC90LjRjiDRgdC00LXQu9C60Lgg0LIg0L/QuNGB0YzQvNC10L3QvdC+0Lkg0YTQvtGA0LzQtVxyXG4gICAgICAgICAgICAgICAg0L/RgNC40YDQsNCy0L3QuNCy0LDQtdGC0YHRjyDQvtCx0LzQtdC9INC/0LjRgdGM0LzQsNC80LgsINGC0LXQu9C10LPRgNCw0LzQvNCw0LzQuCwg0YLQtdC70LXRhNC+0L3QvtCz0YDQsNC80LzQsNC80LgsXHJcbiAgICAgICAgICAgICAgICDRgtC10LvQtdGC0LDQudC/0L7Qs9GA0LDQvNC80LDQvNC4LCDRhNCw0LrRgdCw0LzQuCwg0Y3Qu9C10LrRgtGA0L7QvdC90YvQvNC4INC00L7QutGD0LzQtdC90YLQsNC80LgsINGN0LvQtdC60YLRgNC+0L3QvdGL0LzQuCDRgdC+0L7QsdGJ0LXQvdC40Y/QvNC4XHJcbiAgICAgICAgICAgICAgICDQuNC70Lgg0LjQvdGL0LzQuCDQtNC+0LrRg9C80LXQvdGC0LDQvNC4LCDQvtC/0YDQtdC00LXQu9GP0Y7RidC40LzQuCDRgdGD0LHRitC10LrRgtC+0LIg0Lgg0YHQvtC00LXRgNC20LDQvdC40LUg0LjRhSDQstC+0LvQtdC40LfRitGP0LLQu9C10L3QuNGPLlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAg0J/QvtC00L/QuNGB0LDQvdC40LUg0JTQvtCz0L7QstC+0YDQsC3Qv9C+0YDRg9GH0LXQvdC40Y8g0LIg0YHQvtC+0YLQstC10YLRgdGC0LLQuNC4INGBINC/LjEtMSDRgdGCLjE1MiDQk9CaINCg0Jog0Y/QstC70Y/QtdGC0YHRj1xyXG4gICAgICAgICAgICAgICAg0YHQvtCy0LXRgNGI0LXQvdC40LXQvCDRgdC00LXQu9C60Lgg0LIg0L/QuNGB0YzQvNC10L3QvdC+0Lkg0YTQvtGA0LzQtS4g0JTQvtCz0L7QstC+0YAt0L/QvtGA0YPRh9C10L3QuNGPINC/0L7QtNC/0LjRgdGL0LLQsNC10YLRgdGPINC/0YPRgtC10LxcclxuICAgICAgICAgICAgICAgINC/0YDQvtGB0YLQsNCy0LvQtdC90LjRjyDQs9Cw0LvQvtGH0LrQuCDQsiDQs9GA0LDRhNC1IOKAnOKYkeKAnSDQuCDQvdCw0L/RgNCw0LLQu9C10L3QuNGPINCh0JzQoS3RgdC+0L7QsdGJ0LXQvdC40Y8g0YEg0YfQtdGC0YvRgNC10YXQt9C90LDRh9C90YvQvFxyXG4gICAgICAgICAgICAgICAg0LrQvtC00L7QvCDQvdCwINC90L7QvNC10YBcclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L29sPlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdkb2dvdm9yX19mb290ZXInPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xlZnRfc2lkZSc+XHJcbiAgICAgICAgICAgIDxiPtCX0LDQutCw0LfRh9C40Lo6PC9iPlxyXG5cclxuICAgICAgICAgICAgPGI+0JTQtdC50YHRgtCy0YPRjtGJ0LjQuSDQsiDQuNC90YLQtdGA0LXRgdCw0YU6PC9iPlxyXG5cclxuICAgICAgICAgICAgPHA+0JTQvtC70LbQvdC+0YHRgtGMINCk0JjQnjwvcD5cclxuICAgICAgICAgICAgPHA+0J/QvtC00L/QuNGB0Yw8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmlnaHRfc2lkZSc+XHJcbiAgICAgICAgICAgIDxiPtCY0YHQv9C+0LvQvdC40YLQtdC70Yw6XHJcbiAgICAgICAgICAgIDwvYj5cclxuICAgICAgICAgICAgPGI+0KLQntCeIMKrTkFTSCBDb21wYW55wrs8L2I+XHJcbiAgICAgICAgICAgIDxwPtCR0JjQnTogMTAwNzQwMDA5NjUzPC9wPlxyXG4gICAgICAgICAgICA8cD7QkNC00YDQtdGBOiDQoNC10YHQv9GD0LHQu9C40LrQsCDQmtCw0LfQsNGF0YHRgtCw0L0sXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHA+0LMuINCQ0LvQvNCw0YLRiywg0YPQuy4g0KLQvtC70LUg0LHQuCAxMDE8L3A+XHJcbiAgICAgICAgICAgIDxwPtCi0LXQuzogKzcgKDcyNykgMjUwMS01MDA8L3A+XHJcbiAgICAgICAgICAgIDxwPtCgL9GB0YcgS1o3Mjg1NjAwMDAwMDQyMDc4MThcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cD7QkiDQkNCeIMKr0JHQsNC90Log0KbQtdC90YLRgCDQmtGA0LXQtNC40YLCuzwvcD5cclxuICAgICAgICAgICAgPHA+0JHQmNCaIEtDSkJLWktYXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEb2dvdm9yIl0sInNvdXJjZVJvb3QiOiIifQ==