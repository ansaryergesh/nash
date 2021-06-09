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
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                children: "\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u0443\u0441\u043B\u0443\u0433"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                children: "Contact"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                children: "Country"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
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
              lineNumber: 75,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: "\u042F \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u044E\u0441\u044C \u0441 \u0442\u0435\u043C, \u0447\u0442\u043E \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C \u043F\u0440\u0438\u0441\u0442\u0443\u043F\u0430\u0435\u0442 \u043A \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044E \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432 \u043F\u043E\u0441\u043B\u0435 \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u043E\u043F\u043B\u0430\u0442\u044B \u0440\u0430\u0441\u0445\u043E\u0434\u043E\u0432, \u043F\u0440\u0435\u0434\u0443\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u043D\u044B\u0445 \u043F.1."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: ["\u042F \u043E\u0431\u044F\u0437\u0443\u044E\u0441\u044C \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0441\u0442\u0438 \u043E\u043F\u043B\u0430\u0442\u0443 \u0437\u0430 \u043E\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0435 \u0443\u0441\u043B\u0443\u0433\u0438 \u0432 \u0440\u0430\u0437\u043C\u0435\u0440\u0435 ", priceWithDisc, "\u0442\u0435\u043D\u0433\u0435 \u043D\u0435 \u043F\u043E\u0437\u0434\u043D\u0435\u0435 __.__.2021\u0433\u043E\u0434\u0430."]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: ["\u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u043D\u0430\u0440\u0443\u0448\u0435\u043D\u0438\u044F \u0441\u0440\u043E\u043A\u043E\u0432 \u043E\u043F\u043B\u0430\u0442\u044B \u0438\u043B\u0438 \u0440\u0430\u0441\u0442\u043E\u0440\u0436\u0435\u043D\u0438\u044F \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u0430 \u0432 \u043E\u0434\u043D\u043E\u0441\u0442\u043E\u0440\u043E\u043D\u043D\u0435\u043C \u043F\u043E\u0440\u044F\u0434\u043A\u0435, \u043E\u0431\u044F\u0437\u0443\u044E\u0441\u044C \u043E\u043F\u043B\u0430\u0442\u0438\u0442\u044C \u043F\u043E\u043B\u043D\u0443\u044E \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0443\u0441\u043B\u0443\u0433 \u0432 \u0440\u0430\u0437\u043C\u0435\u0440\u0435 ", priceWithDisc, "\u0442\u0435\u043D\u0433\u0435 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 10 \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u043D\u044B\u0445 \u0434\u043D\u0435\u0439 \u0441\u043E \u0434\u043D\u044F \u043D\u0430\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u044F \u0442\u0430\u043A\u043E\u0433\u043E \u0441\u043E\u0431\u044B\u0442\u0438\u044F."]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: "\u042F \u0434\u0430\u044E \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435, \u0447\u0442\u043E \u043B\u0438\u0448\u0430\u044E\u0441\u044C \u0441\u043A\u0438\u0434\u043A\u0438 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u043E\u0439 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u0435\u043C \u0432 \u0441\u043B\u0443\u0447\u0430\u0435 \u043F\u0440\u043E\u0441\u0440\u043E\u0447\u043A\u0438 \u043E\u043F\u043B\u0430\u0442\u044B \u0432 \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0439 \u0441\u0440\u043E\u043A \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0441\u043A\u0438\u0434\u043A\u0438 \u0438 \u043E\u0431\u044F\u0437\u0443\u044E\u0441\u044C \u043E\u043F\u043B\u0430\u0442\u0438\u0442\u044C \u0441\u043E\u0433\u043B\u0430\u0441\u043D\u043E \u0422\u0430\u0440\u0438\u0444\u0430\u043C \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044F."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: "\u042F \u0438\u043C\u0435\u044E \u043F\u0440\u0430\u0432\u043E \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043F\u0438\u0441\u044C\u043C\u0435\u043D\u043D\u044B\u0435 \u043E\u0431\u043E\u0441\u043D\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0437\u0430\u043C\u0435\u0447\u0430\u043D\u0438\u044F \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0438 1 (\u043E\u0434\u043D\u043E\u0433\u043E) \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u043D\u043E\u0433\u043E \u0434\u043D\u044F \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044E \u043F\u043E \u0432\u044B\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u043E\u043C\u0443 \u0410\u043A\u0442\u0443 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u044B\u0445 \u0440\u0430\u0431\u043E\u0442 \u0432 \u043B\u0438\u0447\u043D\u043E\u043C \u043A\u0430\u0431\u0438\u043D\u0435\u0442\u0435."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: "\u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u043D\u0435 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043F\u0438\u0441\u044C\u043C\u0435\u043D\u043D\u044B\u0445 \u043E\u0431\u043E\u0441\u043D\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u0437\u0430\u043C\u0435\u0447\u0430\u043D\u0438\u0439 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0438 1 (\u043E\u0434\u043D\u043E\u0433\u043E) \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u043D\u043E\u0433\u043E \u0434\u043D\u044F \u043F\u043E \u0432\u044B\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u043E\u043C\u0443 \u0410\u043A\u0442\u0443 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u044B\u0445 \u0440\u0430\u0431\u043E\u0442 \u0432 \u043B\u0438\u0447\u043D\u043E\u043C \u043A\u0430\u0431\u0438\u043D\u0435\u0442\u0435 \u0443\u0441\u043B\u0443\u0433\u0438 \u0441\u0447\u0438\u0442\u0430\u044E\u0442\u0441\u044F \u043E\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u043C\u0438 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u0435\u043C, \u0430 \u0438\u0445 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u044F \u043E\u0431\u044F\u0437\u0443\u044E\u0441\u044C \u043E\u043F\u043B\u0430\u0442\u0438\u0442\u044C \u0432 \u043F\u043E\u043B\u043D\u043E\u043C \u043E\u0431\u044A\u0435\u043C\u0435."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: "\u042F \u043E\u0431\u044F\u0437\u0443\u044E\u0441\u044C \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044E \u043D\u0430\u0434\u043B\u0435\u0436\u0430\u0449\u0438\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u0443\u044E \u0434\u043E\u0432\u0435\u0440\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0438 3 (\u0442\u0440\u0435\u0445) \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u043D\u044B\u0445 \u0434\u043D\u0435\u0439 \u0441\u043E \u0434\u043D\u044F \u0437\u0430\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u0430."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: "\u042F \u043E\u0431\u044F\u0437\u0443\u044E\u0441\u044C \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0442\u044C \u0432\u0441\u044E \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u0443\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u0438 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B \u0434\u043B\u044F \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044F"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: "\u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u043D\u0435 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043C\u043D\u043E\u0439 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0438 5 \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u043D\u044B\u0445 \u0434\u043D\u0435\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432 \u0438 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u0434\u043B\u044F \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044F, \u0443\u0441\u043B\u0443\u0433\u0430 \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044F \u043E\u043A\u0430\u0437\u0430\u043D\u043D\u043E\u0439, \u0430 \u0438\u0445 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u044F \u043E\u0431\u044F\u0437\u0443\u044E\u0441\u044C \u043E\u043F\u043B\u0430\u0442\u0438\u0442\u044C \u0432 \u043F\u043E\u043B\u043D\u043E\u043C \u043E\u0431\u044A\u0435\u043C\u0435."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: "\u042F \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u044E, \u0447\u0442\u043E \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043C\u043D\u043E\u0439 \u0434\u0430\u043D\u043D\u043E\u0433\u043E \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u0430-\u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u044F \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0430\u043A\u0446\u0435\u043F\u0442\u043E\u043C \u041F\u0443\u0431\u043B\u0438\u0447\u043D\u043E\u0439 \u041E\u0444\u0435\u0440\u0442\u044B"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: ["\u042F \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u044E\u0441\u044C \u0441\u043E \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u043C\u0438 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u043C\u0438:", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ol", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: "\u041F\u043E\u0441\u043B\u0435 \u043F\u043E\u0434\u043F\u0438\u0441\u0430\u043D\u0438\u044F \u043C\u043D\u043E\u0439 \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u0430-\u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u044F, \u043E\u043D \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043D\u0430 \u0443\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044E. \u0415\u0441\u043B\u0438 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442 \u0437\u0430\u043A\u0430\u0437 \u043D\u0430 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u0445, \u043E\u0442\u0440\u0430\u0436\u0435\u043D\u043D\u044B\u0445 \u0432 \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u043E\u043C \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0435, \u043E\u043D \u043F\u0440\u0438\u0441\u0442\u0443\u043F\u0430\u0435\u0442 \u043A \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044E \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u044D\u0442\u0430\u043F\u0430, \u043F\u0440\u0435\u0434\u0443\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u043D\u043E\u0433\u043E \u043F. 7.3.1. \u041E\u0444\u0435\u0440\u0442\u044B."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 120,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: "\u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u043D\u0435\u0441\u043E\u0433\u043B\u0430\u0441\u0438\u044F \u0441 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u043C\u0438 \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u0430-\u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u044F, \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u0442 \u043D\u0430 \u043F\u043E\u0434\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043D\u043E\u0432\u044B\u0439 \u0414\u043E\u0433\u043E\u0432\u043E\u0440-\u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u044F \u0438\u043B\u0438 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u044F\u0435\u0442 \u043E\u0431 \u043E\u0442\u043A\u0430\u0437\u0435 \u043E\u0442 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0443\u0441\u043B\u0443\u0433."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 125,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: "\u041F\u0440\u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0438 \u043C\u043D\u043E\u0439 \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u0430-\u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u044F \u0441 \u0432\u043D\u0435\u0441\u0435\u043D\u043D\u044B\u043C\u0438 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u043A\u0430\u043C\u0438 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044F, \u044F \u043E\u0431\u044F\u0437\u0443\u044E\u0441\u044C \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u0438\u0442\u044C\u0441\u044F \u0441 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u043C\u0438 \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u0430-\u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u044F, \u0432 \u0441\u043B\u0443\u0447\u0430\u0435 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u044F \u0441 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u043C\u0438, \u043E\u0442\u0440\u0430\u0436\u0435\u043D\u043D\u044B\u043C\u0438 \u0432 \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u0435-\u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u044F, \u044F \u043F\u043E\u0434\u043F\u0438\u0441\u044B\u0432\u0430\u044E \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442 \u043F\u043E\u0441\u0442\u0430\u0432\u0438\u0432 \u0433\u0430\u043B\u043E\u0447\u043A\u0443 \u0432 \u0433\u0440\u0430\u0444\u0435 \u201C\u2611\u201D. \u041F\u043E\u0441\u043B\u0435 \u0447\u0435\u0433\u043E, \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C \u043F\u0440\u0438\u0441\u0442\u0443\u043F\u0430\u0435\u0442 \u043A \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044E \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u044D\u0442\u0430\u043F\u0430, \u043F\u0440\u0435\u0434\u0443\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u043D\u043E\u0433\u043E \u043F. 6.3.1. \u041E\u0444\u0435\u0440\u0442\u044B."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 128,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: "\u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u043C\u043D\u0435 \u0443\u0441\u043B\u0443\u0433\u0438 \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0438 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432, \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043D\u044B\u0445 \u043C\u043D\u043E\u0439 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044F \u0438\u043B\u0438 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0445 \u0437\u0430\u043A\u0430\u0437\u043D\u044B\u043C \u043F\u0438\u0441\u044C\u043C\u043E\u043C \u0441 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0435\u043C \u043E \u0432\u0440\u0443\u0447\u0435\u043D\u0438\u0438 \u043F\u043E \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u043E\u043C\u0443 \u0430\u0434\u0440\u0435\u0441\u0443 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044F. \u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u044F \u043E\u0442\u043C\u0435\u0442\u043A\u0438 \u043E \u0432\u0440\u0443\u0447\u0435\u043D\u0438\u0438 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044E, \u0442\u0430\u043A\u0438\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B \u043F\u0440\u0438\u0437\u043D\u0430\u044E\u0442\u0441\u044F \u043D\u0435 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u043C\u0438 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044E."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: "\u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439 \u0432 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445/\u0440\u0435\u043A\u0432\u0438\u0437\u0438\u0442\u0430\u0445, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u0438/\u0438\u043B\u0438 \u043C\u043E\u0436\u0435\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0434\u043B\u044F \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F (\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u043D\u043E \u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E, \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u0434\u043E\u043C\u0430\u0448\u043D\u0435\u0433\u043E \u0438\u043B\u0438 \u0440\u0430\u0431\u043E\u0447\u0435\u0433\u043E \u0430\u0434\u0440\u0435\u0441\u0430, \u043D\u043E\u043C\u0435\u0440\u0430 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u043E\u0433\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430, \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0433\u043E \u043F\u043E\u0447\u0442\u043E\u0432\u043E\u0433\u043E \u0430\u0434\u0440\u0435\u0441\u0430 \u0438 \u0442.\u0434.), \u044F \u043E\u0431\u044F\u0437\u0443\u044E\u0441\u044C \u043D\u0435\u043C\u0435\u0434\u043B\u0435\u043D\u043D\u043E (\u043D\u0435 \u043F\u043E\u0437\u0434\u043D\u0435\u0435, \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0433\u043E \u0434\u043D\u044F, \u0441\u043E \u0434\u043D\u044F \u0442\u0430\u043A\u043E\u0433\u043E \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F) \u0443\u0432\u0435\u0434\u043E\u043C\u0438\u0442\u044C \u043E\u0431 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F\u0445 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044F. \u041F\u0440\u0438 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0438 \u043F\u0438\u0441\u044C\u043C\u0435\u043D\u043D\u043E\u0433\u043E \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F \u043E\u0431 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0438 \u0434\u0430\u043D\u043D\u044B\u0445, \u0440\u0430\u043D\u0435\u0435 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044F \u0430\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u043E\u0439 \u0438 \u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u043D\u043E\u0439."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 138,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: "\u042F \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u043B\u0435\u043D(\u0430), \u0447\u0442\u043E \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u043F\u0443\u043D\u043A\u0442\u0430\u043C\u0438 1-1, 3 \u0441\u0442\u0430\u0442\u044C\u0438 152 \u0413\u0440\u0430\u0436\u0434\u0430\u043D\u0441\u043A\u043E\u0433\u043E \u041A\u043E\u0434\u0435\u043A\u0441\u0430 \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0438 \u041A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D \u041F\u0438\u0441\u044C\u043C\u0435\u043D\u043D\u0430\u044F \u0444\u043E\u0440\u043C\u0430 \u0441\u0434\u0435\u043B\u043A\u0438 \u0441\u043E\u0432\u0435\u0440\u0448\u0430\u0435\u0442\u0441\u044F \u043D\u0430 \u0431\u0443\u043C\u0430\u0436\u043D\u043E\u043C \u043D\u043E\u0441\u0438\u0442\u0435\u043B\u0435 \u0438\u043B\u0438 \u0432 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u0444\u043E\u0440\u043C\u0435. \u041A \u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044E \u0441\u0434\u0435\u043B\u043A\u0438 \u0432 \u043F\u0438\u0441\u044C\u043C\u0435\u043D\u043D\u043E\u0439 \u0444\u043E\u0440\u043C\u0435 \u043F\u0440\u0438\u0440\u0430\u0432\u043D\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u043E\u0431\u043C\u0435\u043D \u043F\u0438\u0441\u044C\u043C\u0430\u043C\u0438, \u0442\u0435\u043B\u0435\u0433\u0440\u0430\u043C\u043C\u0430\u043C\u0438, \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u043E\u0433\u0440\u0430\u043C\u043C\u0430\u043C\u0438, \u0442\u0435\u043B\u0435\u0442\u0430\u0439\u043F\u043E\u0433\u0440\u0430\u043C\u043C\u0430\u043C\u0438, \u0444\u0430\u043A\u0441\u0430\u043C\u0438, \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u043C\u0438 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u043C\u0438, \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u043C\u0438 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F\u043C\u0438 \u0438\u043B\u0438 \u0438\u043D\u044B\u043C\u0438 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u043C\u0438, \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u044E\u0449\u0438\u043C\u0438 \u0441\u0443\u0431\u044A\u0435\u043A\u0442\u043E\u0432 \u0438 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u0435 \u0438\u0445 \u0432\u043E\u043B\u0435\u0438\u0437\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u044F."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 148,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: "\u041F\u043E\u0434\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u0430-\u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u044F \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u043F.1-1 \u0441\u0442.152 \u0413\u041A \u0420\u041A \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u0435\u043C \u0441\u0434\u0435\u043B\u043A\u0438 \u0432 \u043F\u0438\u0441\u044C\u043C\u0435\u043D\u043D\u043E\u0439 \u0444\u043E\u0440\u043C\u0435. \u0414\u043E\u0433\u043E\u0432\u043E\u0440-\u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u044F \u043F\u043E\u0434\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u043F\u0443\u0442\u0435\u043C \u043F\u0440\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0433\u0430\u043B\u043E\u0447\u043A\u0438 \u0432 \u0433\u0440\u0430\u0444\u0435 \u201C\u2611\u201D \u0438 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0421\u041C\u0421-\u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F \u0441 \u0447\u0435\u0442\u044B\u0440\u0435\u0445\u0437\u043D\u0430\u0447\u043D\u044B\u043C \u043A\u043E\u0434\u043E\u043C \u043D\u0430 \u043D\u043E\u043C\u0435\u0440"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 156,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
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
            lineNumber: 168,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
            children: "\u0414\u0435\u0439\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0439 \u0432 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0430\u0445:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C \u0424\u0418\u041E"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "\u041F\u043E\u0434\u043F\u0438\u0441\u044C"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "right_side",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
            children: "\u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
            children: "\u0422\u041E\u041E \xABNASH Company\xBB"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "\u0411\u0418\u041D: 100740009653"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "\u0410\u0434\u0440\u0435\u0441: \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u041A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D,"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "\u0433. \u0410\u043B\u043C\u0430\u0442\u044B, \u0443\u043B. \u0422\u043E\u043B\u0435 \u0431\u0438 101"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "\u0422\u0435\u043B: +7 (727) 2501-500"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "\u0420/\u0441\u0447 KZ728560000004207818"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 185,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "\u0412 \u0410\u041E \xAB\u0411\u0430\u043D\u043A \u0426\u0435\u043D\u0442\u0440 \u041A\u0440\u0435\u0434\u0438\u0442\xBB"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 187,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "\u0411\u0418\u041A KCJBKZKX"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 188,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 166,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZG9nb3Zvci5qcyJdLCJuYW1lcyI6WyJEb2dvdm9yIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJuYW1lIiwic2V0TmFtZSIsInR5cGUiLCJzZXRUeXBlIiwiY29tcGFueU5hbWUiLCJzZXRDb21wYW55TmFtZSIsInByaWNlV2l0aERpc2MiLCJzZXRQcmljZSIsInRvZGF5IiwiRGF0ZSIsImRheSIsImdldERhdGUiLCJtb250aCIsImdldE1vbnRoIiwieWVhciIsImdldEZ1bGxZZWFyIiwicGFyc2VEYXkiLCJwYXJzZU1vbnRoIiwicGFyc2VJbnQiLCJ0b2RheVBhcnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUNBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFDcEIsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4Qjs7QUFEb0Isa0JBR1BDLCtDQUFRLENBQUMsYUFBRCxDQUhEO0FBQUEsTUFFYkMsSUFGYTtBQUFBLE1BR2xCQyxPQUhrQjs7QUFBQSxtQkFLUEYsK0NBQVEsQ0FBQyxTQUFELENBTEQ7QUFBQSxNQUliRyxJQUphO0FBQUEsTUFLbEJDLE9BTGtCOztBQUFBLG1CQU9BSiwrQ0FBUSxDQUFDLFVBQUQsQ0FQUjtBQUFBLE1BTWJLLFdBTmE7QUFBQSxNQU9sQkMsY0FQa0I7O0FBQUEsbUJBU05OLCtDQUFRLENBQUMsTUFBRCxDQVRGO0FBQUEsTUFRYk8sYUFSYTtBQUFBLE1BU2xCQyxRQVRrQjs7QUFXcEIsTUFBTUMsS0FBSyxHQUFHLElBQUlDLElBQUosRUFBZDtBQUNBLE1BQU1DLEdBQUcsR0FBR0YsS0FBSyxDQUFDRyxPQUFOLEVBQVo7QUFDQSxNQUFNQyxLQUFLLEdBQUdKLEtBQUssQ0FBQ0ssUUFBTixLQUFtQixDQUFqQztBQUNBLE1BQU1DLElBQUksR0FBR04sS0FBSyxDQUFDTyxXQUFOLEVBQWI7QUFFQSxNQUFNQyxRQUFRLEdBQUdOLEdBQUcsR0FBRyxFQUFOLEdBQ2IsTUFBTUEsR0FETyxHQUViQSxHQUZKO0FBR0EsTUFBTU8sVUFBVSxHQUFHQyxRQUFRLENBQUNOLEtBQUQsQ0FBUixHQUFrQixFQUFsQixHQUNmLE9BQU9BLEtBRFEsR0FFZixNQUFNQSxLQUZWO0FBSUEsTUFBTU8sVUFBVSxHQUFHSCxRQUFRLEdBQUcsR0FBWCxHQUFpQkMsVUFBakIsR0FBOEIsR0FBOUIsR0FBb0NILElBQXBDLEdBQTJDLElBQTlEO0FBRUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0U7QUFBTSxZQUFJLEVBQUMsVUFBWDtBQUFzQixlQUFPLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUlFO0FBQUssZUFBUyxFQUFDLFNBQWY7QUFBQSw4QkFDRTtBQUFTLGlCQUFTLEVBQUMsaUJBQW5CO0FBQUEsZ0NBQ0U7QUFBUyxtQkFBUyxFQUFDLEtBQW5CO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFLRTtBQUFTLG1CQUFTLEVBQUMsUUFBbkI7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUEsc0JBQUlLO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFZRTtBQUFTLGlCQUFTLEVBQUMsZUFBbkI7QUFBQSxnQ0FDRTtBQUFTLG1CQUFTLEVBQUMsU0FBbkI7QUFBQSxrQ0FDRTtBQUFBLGtDQUFNbkIsSUFBTix1SkFBMENJLFdBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUtFO0FBQUEsa0NBQU1KLElBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGLGVBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUkYsZUFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFURixlQVVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVZGLGVBWUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBaUJFO0FBQVMsbUJBQVMsRUFBQyxhQUFuQjtBQUFBLGlDQUNFO0FBQUEsbUNBQ0U7QUFBQSxzQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGLGVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBakJGLGVBMkJFO0FBQVMsbUJBQVMsRUFBQyxTQUFuQjtBQUFBLGlDQUNFO0FBQUksZ0JBQUksRUFBQyxHQUFUO0FBQUEsb0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFMRixlQVFFO0FBQUEsa1ZBQzhETSxhQUQ5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUkYsZUFZRTtBQUFBLGt1QkFFK0RBLGFBRi9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFaRixlQWdCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFoQkYsZUFxQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBckJGLGVBMEJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQTFCRixlQStCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkEvQkYsZUFrQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBbENGLGVBb0NFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXBDRixlQXlDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkF6Q0YsZUE0Q0U7QUFBQSwrT0FDRTtBQUFBLHdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBTkYsZUFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFURixlQWNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQWRGLGVBbUJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQTVDRixlQTBFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkExRUYsZUFrRkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBbEZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBM0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVpGLGVBb0lFO0FBQVMsaUJBQVMsRUFBQyxpQkFBbkI7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUMsV0FBZjtBQUFBLGtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEYsZUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMRixlQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQVVFO0FBQUssbUJBQVMsRUFBQyxZQUFmO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRixlQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGLGVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEYsZUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQRixlQVFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJGLGVBU0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVEYsZUFXRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFYRixlQVlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFwSUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF1S0QsQ0FoTUQ7O0dBQU1WLE87VUFDV0Usa0Q7OztLQURYRixPO0FBa01OLCtEQUFlQSxPQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RvZ292b3IuNmRkYTZjYTU2ZmI3MzUzZmFiOGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuY29uc3QgRG9nb3ZvciA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IFtuYW1lLFxyXG4gICAgc2V0TmFtZV0gPSB1c2VTdGF0ZSgn0KTQsNC80LjQu9C40Y8g0JjQvNGPJylcclxuICBjb25zdCBbdHlwZSxcclxuICAgIHNldFR5cGVdID0gdXNlU3RhdGUoJ9Cu0YAg0LvQuNGG0L4nKVxyXG4gIGNvbnN0IFtjb21wYW55TmFtZSxcclxuICAgIHNldENvbXBhbnlOYW1lXSA9IHVzZVN0YXRlKCfQmtC+0LzQv9Cw0L3QuNGPJylcclxuICBjb25zdCBbcHJpY2VXaXRoRGlzYyxcclxuICAgIHNldFByaWNlXSA9IHVzZVN0YXRlKDIwMDAwMClcclxuXHJcbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gIGNvbnN0IGRheSA9IHRvZGF5LmdldERhdGUoKVxyXG4gIGNvbnN0IG1vbnRoID0gdG9kYXkuZ2V0TW9udGgoKSArIDFcclxuICBjb25zdCB5ZWFyID0gdG9kYXkuZ2V0RnVsbFllYXIoKVxyXG5cclxuICBjb25zdCBwYXJzZURheSA9IGRheSA8IDEwXHJcbiAgICA/IFwiMFwiICsgZGF5XHJcbiAgICA6IGRheVxyXG4gIGNvbnN0IHBhcnNlTW9udGggPSBwYXJzZUludChtb250aCkgPiAxMFxyXG4gICAgPyBcIjAgXCIgKyBtb250aFxyXG4gICAgOiBcIjBcIiArIG1vbnRoXHJcblxyXG4gIGNvbnN0IHRvZGF5UGFyc2UgPSBwYXJzZURheSArIFwiLlwiICsgcGFyc2VNb250aCArIFwiLlwiICsgeWVhciArIFwi0LMuXCI7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPTk2MFwiLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZG9nb3Zvcic+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdkb2dvdm9yX19oZWFkZXInPlxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSd0b3AnPlxyXG4gICAgICAgICAgICA8cD7QlNC+0LPQvtCy0L7RgC3Qv9C+0YDRg9GH0LXQvdC40Y8g4oSWPC9wPlxyXG4gICAgICAgICAgICA8cD7QmiDQn9Cj0JHQm9CY0KfQndCe0JzQoy3QlNCe0JPQntCS0J7QoNCjINCe0KTQldCg0KLQqyDihJY8L3A+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2JvdHRvbSc+XHJcbiAgICAgICAgICAgIDxiPtCzLiDQkNC70LzQsNGC0Ys8L2I+XHJcbiAgICAgICAgICAgIDxwPnt0b2RheVBhcnNlfTwvcD5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nZG9nb3Zvcl9fYm9keSc+XHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgICAgICAgICA8cD7QryB7bmFtZX0sINC00LXQudGB0YLQstGD0Y7RidC40Lko0LDRjykg0LIg0LjQvdGC0LXRgNC10YHQsNGFIHtjb21wYW55TmFtZX0sINC00LXQudGB0YLQstGD0Y7RidC40Lkg0L3QsCDQvtGB0L3QvtCy0LDQvdC40Lgg0LTQvtCy0LXRgNC10L3QvdC+0YHRgtC4L9C/0YDQuNC60LDQt9CwINC00LDQu9C10LUg0LjQvNC10L3Rg9C10LzRi9C5XHJcbtCX0LDQutCw0LfRh9C40Log0L/QvtGA0YPRh9Cw0Y4sINCwINCi0J7QniDCq05BU0ggQ29tcGFuecK7INCyINC00LDQu9GM0L3QtdC50YjQtdC8INCY0YHQv9C+0LvQvdC40YLQtdC70Ywg0L/RgNC40L3QuNC80LDQtdGCINC90LBcclxu0YHQtdCx0Y8g0L7QsdGP0LfQsNGC0LXQu9GM0YHRgtCy0L4g0L7QutCw0LfRi9Cy0LDRgtGMINGO0YDQuNC00LjRh9C10YHQutC40LUg0YPRgdC70YPQs9C4INCyINC+0LHRitC10LzQtSDQuCDQvdCwINGD0YHQu9C+0LLQuNGP0YUsXHJcbtC/0YDQtdC00YPRgdC80L7RgtGA0LXQvdC90YvRhSDQvdCw0YHRgtC+0Y/RidC40Lwg0LTQvtCz0L7QstC+0YDQvtC8IOKAkyDQv9C+0YDRg9GH0LXQvdC40Y87PC9wPlxyXG4gICAgICAgICAgICA8cD7QryB7bmFtZX0sINC+0LHRj9C30YPRjtGB0Ywg0L/QvtC00YLQstC10YDQtNC40YLRjCDQv9C+0LvQvdC+0LzQvtGH0LjRjyDQsiDRgtC10YfQtdC90LjQuCA1INC60LDQu9C10L3QtNCw0YDQvdGL0YUg0LTQvdC10LkuINCSINGB0LvRg9GH0LDQtVxyXG7QvdC10L/QvtC00YLQstC10YDQttC00LXQvdC40Y8g0L/QvtC70L3QvtC80L7Rh9C40LksINGPINC/0YDQuNC90LjQvNCw0Y4g0L3QsCDRgdC10LHRjyDQstGB0LUg0YTQuNC90LDQvdGB0L7QstGL0LUg0L7QsdGP0LfQsNGC0LXQu9GM0YHRgtCy0LAg0L/QvlxyXG7QvdCw0YHRgtC+0Y/RidC10LzRgyDQlNC+0LPQvtCy0L7RgNGDINC4INC+0LHRj9C30YPRjtGB0Ywg0YHQstC+0LXQstGA0LXQvNC10L3QvdC+INC+0L/Qu9Cw0YLQuNGC0Ywg0LjRhS48L3A+XHJcbiAgICAgICAgICAgIDxwPtCd0LDRgdGC0L7Rj9GJ0LjQvCwg0L/QvtC00YLQstC10YDQttC00LDRjiDRgdCy0L7QuCDQv9C+0LvQvdC+0LzQvtGH0LjRjyDQv9C+INC30LDQutC70Y7Rh9C10L3QuNGOINC90LDRgdGC0L7Rj9GJ0LXQs9C+INCU0L7Qs9C+0LLQvtGA0LAuPC9wPlxyXG4gICAgICAgICAgICA8cD7QryDQvtC30L3QsNC60L7QvNC70LXQvSjQsCkg0Lgg0YHQvtCz0LvQsNGB0LXQvSjQsCkg0YEg0YPRgdC70L7QstC40Y/QvNC4INCe0YTQtdGA0YLRiyDQuCDQotCw0YDQuNGE0LDQvNC4INCY0YHQv9C+0LvQvdC40YLQtdC70Y8uPC9wPlxyXG4gICAgICAgICAgICA8cD7Qn9C+0YDRg9GH0LDRjiDQvtC60LDQt9Cw0YLRjCDRjtGA0LjQtNC40YfQtdGB0LrQuNC1INGD0YHQu9GD0LPQuCDQmNGB0L/QvtC70L3QuNGC0LXQu9GOOiBUT08gTkFTSCBDT01QQU5ZXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHA+0JjRgdC/0L7Qu9C90LjRgtC10LvRjiDQl9Cw0LrQsNC30YfQuNC60L7QvCDQv9C+0YDRg9GH0LXQvdC+INC+0LrQsNC30LDRgtGMINGD0YHQu9GD0LPQuCDQv9C+INGB0YLQvtC40LzQvtGB0YLQuCDRg9C60LDQt9Cw0L3QvdC+0Lkg0LJcclxuICAgICAgICAgICAgICDQvdC40LbQtdGB0LvQtdC00YPRjtGJ0LXQuSDRgtCw0LHQu9C40YbQtTo8L3A+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSd0YWJsZV9wcmljZSc+XHJcbiAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGg+0J3QsNC40LzQtdC90L7QstCw0L3QuNC1INGD0YHQu9GD0LM8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoPkNvbnRhY3Q8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoPkNvdW50cnk8L3RoPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgICAgICAgICAgPG9sIHR5cGU9JzEnPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgINCS0YHQtSDRgNCw0YHRhdC+0LTRiywg0L3QtdC+0LHRhdC+0LTQuNC80YvQtSDQtNC70Y8g0LjRgdC/0L7Qu9C90LXQvdC40Y8g0L/QvtGA0YPRh9C10L3QuNGPLCDRjyDQvtCx0Y/Qt9GD0Y7RgdGMINC+0L/Qu9Cw0YfQuNCy0LDRgtGMINCyXHJcbiAgICAgICAgICAgICAgICDRgtC10YfQtdC90LjQuCAxICjQvtC00L3QvtCz0L4pINC60LDQu9C10L3QtNCw0YDQvdC+0LPQviDQtNC90Y8uXHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICDQryDRgdC+0LPQu9Cw0YjQsNGO0YHRjCDRgSDRgtC10LwsINGH0YLQviDQmNGB0L/QvtC70L3QuNGC0LXQu9GMINC/0YDQuNGB0YLRg9C/0LDQtdGCINC6INC40YHQv9C+0LvQvdC10L3QuNGOINC+0LHRj9C30LDRgtC10LvRjNGB0YLQsiDQv9C+0YHQu9C1XHJcbiAgICAgICAgICAgICAgICDQv9GA0L7QuNC30LLQtdC00LXQvdC40Y8g0L7Qv9C70LDRgtGLINGA0LDRgdGF0L7QtNC+0LIsINC/0YDQtdC00YPRgdC80L7RgtGA0LXQvdC90YvRhSDQvy4xLjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAg0K8g0L7QsdGP0LfRg9GO0YHRjCDQv9GA0L7QuNC30LLQtdGB0YLQuCDQvtC/0LvQsNGC0YMg0LfQsCDQvtC60LDQt9Cw0L3QvdGL0LUg0YPRgdC70YPQs9C4INCyINGA0LDQt9C80LXRgNC1IHtwcmljZVdpdGhEaXNjfVxyXG4gICAgICAgICAgICAgICAg0YLQtdC90LPQtSDQvdC1INC/0L7Qt9C00L3QtdC1IF9fLl9fLjIwMjHQs9C+0LTQsC5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgINCSINGB0LvRg9GH0LDQtSDQvdCw0YDRg9GI0LXQvdC40Y8g0YHRgNC+0LrQvtCyINC+0L/Qu9Cw0YLRiyDQuNC70Lgg0YDQsNGB0YLQvtGA0LbQtdC90LjRjyDQlNC+0LPQvtCy0L7RgNCwINCyINC+0LTQvdC+0YHRgtC+0YDQvtC90L3QtdC8XHJcbiAgICAgICAgICAgICAgICDQv9C+0YDRj9C00LrQtSwg0L7QsdGP0LfRg9GO0YHRjCDQvtC/0LvQsNGC0LjRgtGMINC/0L7Qu9C90YPRjiDRgdGC0L7QuNC80L7RgdGC0Ywg0YPRgdC70YPQsyDQsiDRgNCw0LfQvNC10YDQtSB7cHJpY2VXaXRoRGlzY31cclxuICAgICAgICAgICAgICAgINGC0LXQvdCz0LUg0LIg0YLQtdGH0LXQvdC40LUgMTAg0LrQsNC70LXQvdC00LDRgNC90YvRhSDQtNC90LXQuSDRgdC+INC00L3RjyDQvdCw0YHRgtGD0L/Qu9C10L3QuNGPINGC0LDQutC+0LPQviDRgdC+0LHRi9GC0LjRjy48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgINCvINC00LDRjiDRgdC+0LPQu9Cw0YHQuNC1LCDRh9GC0L4g0LvQuNGI0LDRjtGB0Ywg0YHQutC40LTQutC4INC/0YDQtdC00L7RgdGC0LDQstC70LXQvdC90L7QuSDQmNGB0L/QvtC70L3QuNGC0LXQu9C10Lwg0LIg0YHQu9GD0YfQsNC1XHJcbiAgICAgICAgICAgICAgICDQv9GA0L7RgdGA0L7Rh9C60Lgg0L7Qv9C70LDRgtGLINCyINGD0LrQsNC30LDQvdC90YvQuSDRgdGA0L7QuiDQtNC10LnRgdGC0LLQuNGPINGB0LrQuNC00LrQuCDQuCDQvtCx0Y/Qt9GD0Y7RgdGMINC+0L/Qu9Cw0YLQuNGC0Ywg0YHQvtCz0LvQsNGB0L3QvlxyXG4gICAgICAgICAgICAgICAg0KLQsNGA0LjRhNCw0Lwg0JjRgdC/0L7Qu9C90LjRgtC10LvRjy5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgINCvINC40LzQtdGOINC/0YDQsNCy0L4g0L/RgNC10LTQvtGB0YLQsNCy0LjRgtGMINC/0LjRgdGM0LzQtdC90L3Ri9C1INC+0LHQvtGB0L3QvtCy0LDQvdC90YvQtSDQt9Cw0LzQtdGH0LDQvdC40Y8g0LIg0YLQtdGH0LXQvdC40LggMSAo0L7QtNC90L7Qs9C+KVxyXG4gICAgICAgICAgICAgICAg0LrQsNC70LXQvdC00LDRgNC90L7Qs9C+INC00L3RjyDQmNGB0L/QvtC70L3QuNGC0LXQu9GOINC/0L4g0LLRi9GB0YLQsNCy0LvQtdC90L3QvtC80YMg0JDQutGC0YMg0LLRi9C/0L7Qu9C90LXQvdC90YvRhSDRgNCw0LHQvtGCINCyINC70LjRh9C90L7QvFxyXG4gICAgICAgICAgICAgICAg0LrQsNCx0LjQvdC10YLQtS5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgINCSINGB0LvRg9GH0LDQtSDQvdC1INC/0YDQtdC00L7RgdGC0LDQstC70LXQvdC40Y8g0L/QuNGB0YzQvNC10L3QvdGL0YUg0L7QsdC+0YHQvdC+0LLQsNC90L3Ri9GFINC30LDQvNC10YfQsNC90LjQuSDQsiDRgtC10YfQtdC90LjQuCAxXHJcbiAgICAgICAgICAgICAgICAo0L7QtNC90L7Qs9C+KSDQutCw0LvQtdC90LTQsNGA0L3QvtCz0L4g0LTQvdGPINC/0L4g0LLRi9GB0YLQsNCy0LvQtdC90L3QvtC80YMg0JDQutGC0YMg0LLRi9C/0L7Qu9C90LXQvdC90YvRhSDRgNCw0LHQvtGCINCyINC70LjRh9C90L7QvFxyXG4gICAgICAgICAgICAgICAg0LrQsNCx0LjQvdC10YLQtSDRg9GB0LvRg9Cz0Lgg0YHRh9C40YLQsNGO0YLRgdGPINC+0LrQsNC30LDQvdC90YvQvNC4INCY0YHQv9C+0LvQvdC40YLQtdC70LXQvCwg0LAg0LjRhSDRgdGC0L7QuNC80L7RgdGC0Ywg0Y8g0L7QsdGP0LfRg9GO0YHRjFxyXG4gICAgICAgICAgICAgICAg0L7Qv9C70LDRgtC40YLRjCDQsiDQv9C+0LvQvdC+0Lwg0L7QsdGK0LXQvNC1LjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAg0K8g0L7QsdGP0LfRg9GO0YHRjCDQv9GA0LXQtNC+0YHRgtCw0LLQuNGC0Ywg0JjRgdC/0L7Qu9C90LjRgtC10LvRjiDQvdCw0LTQu9C10LbQsNGJ0LjQvCDQvtCx0YDQsNC30L7QvCDQvtGE0L7RgNC80LvQtdC90L3Rg9GOINC00L7QstC10YDQtdC90L3QvtGB0YLRjFxyXG4gICAgICAgICAgICAgICAg0LIg0YLQtdGH0LXQvdC40LggMyAo0YLRgNC10YUpINC60LDQu9C10L3QtNCw0YDQvdGL0YUg0LTQvdC10Lkg0YHQviDQtNC90Y8g0LfQsNC60LvRjtGH0LXQvdC40Y8g0JTQvtCz0L7QstC+0YDQsC48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgINCvINC+0LHRj9C30YPRjtGB0Ywg0L/RgNC10LTQvtGB0YLQsNCy0LvRj9GC0Ywg0LLRgdGOINC90LXQvtCx0YXQvtC00LjQvNGD0Y4g0LjQvdGE0L7RgNC80LDRhtC40Y4g0Lgg0LTQvtC60YPQvNC10L3RgtGLINC00LvRjyDQmNGB0L/QvtC70L3QuNGC0LXQu9GPPC9saT5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICDQkiDRgdC70YPRh9Cw0LUg0L3QtSDQv9GA0LXQtNC+0YHRgtCw0LLQu9C10L3QuNGPINC80L3QvtC5INCyINGC0LXRh9C10L3QuNC4IDUg0LrQsNC70LXQvdC00LDRgNC90YvRhSDQtNC90LXQuSDQtNC+0LrRg9C80LXQvdGC0L7QsiDQuFxyXG4gICAgICAgICAgICAgICAg0LjQvdGE0L7RgNC80LDRhtC40Lgg0LTQu9GPINCY0YHQv9C+0LvQvdC40YLQtdC70Y8sINGD0YHQu9GD0LPQsCDRgdGH0LjRgtCw0LXRgtGB0Y8g0L7QutCw0LfQsNC90L3QvtC5LCDQsCDQuNGFINGB0YLQvtC40LzQvtGB0YLRjCDRj1xyXG4gICAgICAgICAgICAgICAg0L7QsdGP0LfRg9GO0YHRjCDQvtC/0LvQsNGC0LjRgtGMINCyINC/0L7Qu9C90L7QvCDQvtCx0YrQtdC80LUuXHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGk+0K8g0L/QvtC00YLQstC10YDQttC00LDRjiwg0YfRgtC+INC90LDQv9GA0LDQstC70LXQvdC40LUg0LzQvdC+0Lkg0LTQsNC90L3QvtCz0L4g0JTQvtCz0L7QstC+0YDQsC3Qv9C+0YDRg9GH0LXQvdC40Y8g0Y/QstC70Y/QtdGC0YHRj1xyXG4gICAgICAgICAgICAgICAg0LDQutGG0LXQv9GC0L7QvCDQn9GD0LHQu9C40YfQvdC+0Lkg0J7RhNC10YDRgtGLXHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGk+0K8g0YHQvtCz0LvQsNGI0LDRjtGB0Ywg0YHQviDRgdC70LXQtNGD0Y7RidC40LzQuCDRg9GB0LvQvtCy0LjRj9C80Lg6XHJcbiAgICAgICAgICAgICAgICA8b2w+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT7Qn9C+0YHQu9C1INC/0L7QtNC/0LjRgdCw0L3QuNGPINC80L3QvtC5INCU0L7Qs9C+0LLQvtGA0LAt0L/QvtGA0YPRh9C10L3QuNGPLCDQvtC9INC90LDQv9GA0LDQstC70Y/QtdGC0YHRjyDQvdCwINGD0YLQstC10YDQttC00LXQvdC40LVcclxuICAgICAgICAgICAgICAgICAgICDQmNGB0L/QvtC70L3QuNGC0LXQu9GOLiDQldGB0LvQuCDQmNGB0L/QvtC70L3QuNGC0LXQu9GMINC/0YDQuNC90LjQvNCw0LXRgiDQt9Cw0LrQsNC3INC90LAg0YPRgdC70L7QstC40Y/RhSwg0L7RgtGA0LDQttC10L3QvdGL0YUg0LJcclxuICAgICAgICAgICAgICAgICAgICDRg9C60LDQt9Cw0L3QvdC+0Lwg0LTQvtC60YPQvNC10L3RgtC1LCDQvtC9INC/0YDQuNGB0YLRg9C/0LDQtdGCINC6INC40YHQv9C+0LvQvdC10L3QuNGOINC/0LXRgNCy0L7Qs9C+INGN0YLQsNC/0LAsINC/0YDQtdC00YPRgdC80L7RgtGA0LXQvdC90L7Qs9C+XHJcbiAgICAgICAgICAgICAgICAgICAg0L8uIDcuMy4xLiDQntGE0LXRgNGC0YsuXHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT7QkiDRgdC70YPRh9Cw0LUg0L3QtdGB0L7Qs9C70LDRgdC40Y8g0YEg0YPRgdC70L7QstC40Y/QvNC4INCU0L7Qs9C+0LLQvtGA0LAt0L/QvtGA0YPRh9C10L3QuNGPLCDQmNGB0L/QvtC70L3QuNGC0LXQu9GMINC90LDQv9GA0LDQstC70Y/QtdGCXHJcbiAgICAgICAgICAgICAgICAgICAg0L3QsCDQv9C+0LTQv9C40YHQsNC90LjQtSDQvdC+0LLRi9C5INCU0L7Qs9C+0LLQvtGALdC/0L7RgNGD0YfQtdC90LjRjyDQuNC70Lgg0YPQstC10LTQvtC80LvRj9C10YIg0L7QsSDQvtGC0LrQsNC30LUg0L7RgiDQv9GA0LXQtNC+0YHRgtCw0LLQu9C10L3QuNGPXHJcbiAgICAgICAgICAgICAgICAgICAg0YPRgdC70YPQsy48L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+0J/RgNC4INC/0L7Qu9GD0YfQtdC90LjQuCDQvNC90L7QuSDQlNC+0LPQvtCy0L7RgNCwLdC/0L7RgNGD0YfQtdC90LjRjyDRgSDQstC90LXRgdC10L3QvdGL0LzQuCDQutC+0YDRgNC10LrRgtC40YDQvtCy0LrQsNC80LhcclxuICAgICAgICAgICAgICAgICAgICDQmNGB0L/QvtC70L3QuNGC0LXQu9GPLCDRjyDQvtCx0Y/Qt9GD0Y7RgdGMINC+0LfQvdCw0LrQvtC80LjRgtGM0YHRjyDRgSDRg9GB0LvQvtCy0LjRj9C80Lgg0JTQvtCz0L7QstC+0YDQsC3Qv9C+0YDRg9GH0LXQvdC40Y8sINCyINGB0LvRg9GH0LDQtVxyXG4gICAgICAgICAgICAgICAgICAgINGB0L7Qs9C70LDRgdC40Y8g0YEg0YPRgdC70L7QstC40Y/QvNC4LCDQvtGC0YDQsNC20LXQvdC90YvQvNC4INCyINCU0L7Qs9C+0LLQvtGA0LUt0L/QvtGA0YPRh9C10L3QuNGPLCDRjyDQv9C+0LTQv9C40YHRi9Cy0LDRjiDRg9C60LDQt9Cw0L3QvdGL0LlcclxuICAgICAgICAgICAgICAgICAgICDQtNC+0LrRg9C80LXQvdGCINC/0L7RgdGC0LDQstC40LIg0LPQsNC70L7Rh9C60YMg0LIg0LPRgNCw0YTQtSDigJzimJHigJ0uINCf0L7RgdC70LUg0YfQtdCz0L4sINCY0YHQv9C+0LvQvdC40YLQtdC70Ywg0L/RgNC40YHRgtGD0L/QsNC10YIg0LpcclxuICAgICAgICAgICAgICAgICAgICDQuNGB0L/QvtC70L3QtdC90LjRjiDQv9C10YDQstC+0LPQviDRjdGC0LDQv9CwLCDQv9GA0LXQtNGD0YHQvNC+0YLRgNC10L3QvdC+0LPQviDQvy4gNi4zLjEuINCe0YTQtdGA0YLRiy48L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+0JjRgdC/0L7Qu9C90LjRgtC10LvRjCDQv9GA0LXQtNC+0YHRgtCw0LLQu9GP0LXRgiDQvNC90LUg0YPRgdC70YPQs9C4INC90LAg0L7RgdC90L7QstCw0L3QuNC4INC00L7QutGD0LzQtdC90YLQvtCyLCDRgdCw0LzQvtGB0YLQvtGP0YLQtdC70YzQvdC+XHJcbiAgICAgICAgICAgICAgICAgICAg0LfQsNCz0YDRg9C20LXQvdC90YvRhSDQvNC90L7QuSDQvdCwINGB0LDQudGC0LUg0JjRgdC/0L7Qu9C90LjRgtC10LvRjyDQuNC70Lgg0L3QsNC/0YDQsNCy0LvQtdC90L3Ri9GFINC30LDQutCw0LfQvdGL0Lwg0L/QuNGB0YzQvNC+0Lwg0YFcclxuICAgICAgICAgICAgICAgICAgICDRg9Cy0LXQtNC+0LzQu9C10L3QuNC10Lwg0L4g0LLRgNGD0YfQtdC90LjQuCDQv9C+INGO0YDQuNC00LjRh9C10YHQutC+0LzRgyDQsNC00YDQtdGB0YMg0JjRgdC/0L7Qu9C90LjRgtC10LvRjy4g0JIg0YHQu9GD0YfQsNC1INC+0YLRgdGD0YLRgdGC0LLQuNGPXHJcbiAgICAgICAgICAgICAgICAgICAg0L7RgtC80LXRgtC60Lgg0L4g0LLRgNGD0YfQtdC90LjQuCDQmNGB0L/QvtC70L3QuNGC0LXQu9GOLCDRgtCw0LrQuNC1INC00L7QutGD0LzQtdC90YLRiyDQv9GA0LjQt9C90LDRjtGC0YHRjyDQvdC1INC90LDQv9GA0LDQstC70LXQvdC90YvQvNC4XHJcbiAgICAgICAgICAgICAgICAgICAg0JjRgdC/0L7Qu9C90LjRgtC10LvRji48L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+0JIg0YHQu9GD0YfQsNC1INC40LfQvNC10L3QtdC90LjQuSDQsiDQutC+0L3RgtCw0LrRgtC90YvRhSDQtNCw0L3QvdGL0YUv0YDQtdC60LLQuNC30LjRgtCw0YUsINC60L7RgtC+0YDRi9C1INCY0YHQv9C+0LvQvdC40YLQtdC70YxcclxuICAgICAgICAgICAgICAgICAgICDQuNGB0L/QvtC70YzQt9GD0LXRgiDQuC/QuNC70Lgg0LzQvtC20LXRgiDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0LTQu9GPINC+0YLQv9GA0LDQstC60Lgg0YPQstC10LTQvtC80LvQtdC90LjRjyAo0L3QsNC/0YDQuNC80LXRgCwg0L3QviDQvdC1XHJcbiAgICAgICAgICAgICAgICAgICAg0YLQvtC70YzQutC+LCDQuNC30LzQtdC90LXQvdC40LUg0LTQvtC80LDRiNC90LXQs9C+INC40LvQuCDRgNCw0LHQvtGH0LXQs9C+INCw0LTRgNC10YHQsCwg0L3QvtC80LXRgNCwINC80L7QsdC40LvRjNC90L7Qs9C+INGC0LXQu9C10YTQvtC90LAsXHJcbiAgICAgICAgICAgICAgICAgICAg0Y3Qu9C10LrRgtGA0L7QvdC90L7Qs9C+INC/0L7Rh9GC0L7QstC+0LPQviDQsNC00YDQtdGB0LAg0Lgg0YIu0LQuKSwg0Y8g0L7QsdGP0LfRg9GO0YHRjCDQvdC10LzQtdC00LvQtdC90L3QviAo0L3QtSDQv9C+0LfQtNC90LXQtSxcclxuICAgICAgICAgICAgICAgICAgICDRgdC70LXQtNGD0Y7RidC10LPQviDQtNC90Y8sINGB0L4g0LTQvdGPINGC0LDQutC+0LPQviDQuNC30LzQtdC90LXQvdC40Y8pINGD0LLQtdC00L7QvNC40YLRjCDQvtCxINC40LfQvNC10L3QtdC90LjRj9GFINCY0YHQv9C+0LvQvdC40YLQtdC70Y8uXHJcbiAgICAgICAgICAgICAgICAgICAg0J/RgNC4INC+0YLRgdGD0YLRgdGC0LLQuNC4INC/0LjRgdGM0LzQtdC90L3QvtCz0L4g0YPQstC10LTQvtC80LvQtdC90LjRjyDQvtCxINC40LfQvNC10L3QtdC90LjQuCDQtNCw0L3QvdGL0YUsINGA0LDQvdC10LVcclxuICAgICAgICAgICAgICAgICAgICDQv9GA0LXQtNC+0YHRgtCw0LLQu9C10L3QvdCw0Y8g0LjQvdGE0L7RgNC80LDRhtC40Y8g0YHRh9C40YLQsNC10YLRgdGPINCw0LrRgtGD0LDQu9GM0L3QvtC5INC4INC00L7RgdGC0L7QstC10YDQvdC+0LkuPC9saT5cclxuICAgICAgICAgICAgICAgIDwvb2w+XHJcblxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAg0K8g0L7Qt9C90LDQutC+0LzQu9C10L0o0LApLCDRh9GC0L4g0LIg0YHQvtC+0YLQstC10YLRgdGC0LLQuNC4INGBINC/0YPQvdC60YLQsNC80LggMS0xLCAzINGB0YLQsNGC0YzQuCAxNTIg0JPRgNCw0LbQtNCw0L3RgdC60L7Qs9C+XHJcbiAgICAgICAgICAgICAgICDQmtC+0LTQtdC60YHQsCDQoNC10YHQv9GD0LHQu9C40LrQuCDQmtCw0LfQsNGF0YHRgtCw0L0g0J/QuNGB0YzQvNC10L3QvdCw0Y8g0YTQvtGA0LzQsCDRgdC00LXQu9C60Lgg0YHQvtCy0LXRgNGI0LDQtdGC0YHRjyDQvdCwINCx0YPQvNCw0LbQvdC+0LxcclxuICAgICAgICAgICAgICAgINC90L7RgdC40YLQtdC70LUg0LjQu9C4INCyINGN0LvQtdC60YLRgNC+0L3QvdC+0Lkg0YTQvtGA0LzQtS4g0Jog0YHQvtCy0LXRgNGI0LXQvdC40Y4g0YHQtNC10LvQutC4INCyINC/0LjRgdGM0LzQtdC90L3QvtC5INGE0L7RgNC80LVcclxuICAgICAgICAgICAgICAgINC/0YDQuNGA0LDQstC90LjQstCw0LXRgtGB0Y8g0L7QsdC80LXQvSDQv9C40YHRjNC80LDQvNC4LCDRgtC10LvQtdCz0YDQsNC80LzQsNC80LgsINGC0LXQu9C10YTQvtC90L7Qs9GA0LDQvNC80LDQvNC4LFxyXG4gICAgICAgICAgICAgICAg0YLQtdC70LXRgtCw0LnQv9C+0LPRgNCw0LzQvNCw0LzQuCwg0YTQsNC60YHQsNC80LgsINGN0LvQtdC60YLRgNC+0L3QvdGL0LzQuCDQtNC+0LrRg9C80LXQvdGC0LDQvNC4LCDRjdC70LXQutGC0YDQvtC90L3Ri9C80Lgg0YHQvtC+0LHRidC10L3QuNGP0LzQuFxyXG4gICAgICAgICAgICAgICAg0LjQu9C4INC40L3Ri9C80Lgg0LTQvtC60YPQvNC10L3RgtCw0LzQuCwg0L7Qv9GA0LXQtNC10LvRj9GO0YnQuNC80Lgg0YHRg9Cx0YrQtdC60YLQvtCyINC4INGB0L7QtNC10YDQttCw0L3QuNC1INC40YUg0LLQvtC70LXQuNC30YrRj9Cy0LvQtdC90LjRjy5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgINCf0L7QtNC/0LjRgdCw0L3QuNC1INCU0L7Qs9C+0LLQvtGA0LAt0L/QvtGA0YPRh9C10L3QuNGPINCyINGB0L7QvtGC0LLQtdGC0YHRgtCy0LjQuCDRgSDQvy4xLTEg0YHRgi4xNTIg0JPQmiDQoNCaINGP0LLQu9GP0LXRgtGB0Y9cclxuICAgICAgICAgICAgICAgINGB0L7QstC10YDRiNC10L3QuNC10Lwg0YHQtNC10LvQutC4INCyINC/0LjRgdGM0LzQtdC90L3QvtC5INGE0L7RgNC80LUuINCU0L7Qs9C+0LLQvtGALdC/0L7RgNGD0YfQtdC90LjRjyDQv9C+0LTQv9C40YHRi9Cy0LDQtdGC0YHRjyDQv9GD0YLQtdC8XHJcbiAgICAgICAgICAgICAgICDQv9GA0L7RgdGC0LDQstC70LXQvdC40Y8g0LPQsNC70L7Rh9C60Lgg0LIg0LPRgNCw0YTQtSDigJzimJHigJ0g0Lgg0L3QsNC/0YDQsNCy0LvQtdC90LjRjyDQodCc0KEt0YHQvtC+0LHRidC10L3QuNGPINGBINGH0LXRgtGL0YDQtdGF0LfQvdCw0YfQvdGL0LxcclxuICAgICAgICAgICAgICAgINC60L7QtNC+0Lwg0L3QsCDQvdC+0LzQtdGAXHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC9vbD5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nZG9nb3Zvcl9fZm9vdGVyJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsZWZ0X3NpZGUnPlxyXG4gICAgICAgICAgICA8Yj7Ql9Cw0LrQsNC30YfQuNC6OjwvYj5cclxuXHJcbiAgICAgICAgICAgIDxiPtCU0LXQudGB0YLQstGD0Y7RidC40Lkg0LIg0LjQvdGC0LXRgNC10YHQsNGFOjwvYj5cclxuXHJcbiAgICAgICAgICAgIDxwPtCU0L7Qu9C20L3QvtGB0YLRjCDQpNCY0J48L3A+XHJcbiAgICAgICAgICAgIDxwPtCf0L7QtNC/0LjRgdGMPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JpZ2h0X3NpZGUnPlxyXG4gICAgICAgICAgICA8Yj7QmNGB0L/QvtC70L3QuNGC0LXQu9GMOlxyXG4gICAgICAgICAgICA8L2I+XHJcbiAgICAgICAgICAgIDxiPtCi0J7QniDCq05BU0ggQ29tcGFuecK7PC9iPlxyXG4gICAgICAgICAgICA8cD7QkdCY0J06IDEwMDc0MDAwOTY1MzwvcD5cclxuICAgICAgICAgICAgPHA+0JDQtNGA0LXRgTog0KDQtdGB0L/Rg9Cx0LvQuNC60LAg0JrQsNC30LDRhdGB0YLQsNC9LFxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwPtCzLiDQkNC70LzQsNGC0YssINGD0LsuINCi0L7Qu9C1INCx0LggMTAxPC9wPlxyXG4gICAgICAgICAgICA8cD7QotC10Ls6ICs3ICg3MjcpIDI1MDEtNTAwPC9wPlxyXG4gICAgICAgICAgICA8cD7QoC/RgdGHIEtaNzI4NTYwMDAwMDA0MjA3ODE4XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHA+0JIg0JDQniDCq9CR0LDQvdC6INCm0LXQvdGC0YAg0JrRgNC10LTQuNGCwrs8L3A+XHJcbiAgICAgICAgICAgIDxwPtCR0JjQmiBLQ0pCS1pLWFxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRG9nb3ZvciJdLCJzb3VyY2VSb290IjoiIn0=