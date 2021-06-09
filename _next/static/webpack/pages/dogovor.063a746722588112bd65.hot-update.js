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
          className: "table_price"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
          className: "content",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ol", {
            type: "1",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: "1. \u0412\u0441\u0435 \u0440\u0430\u0441\u0445\u043E\u0434\u044B, \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0435 \u0434\u043B\u044F \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u044F, \u044F \u043E\u0431\u044F\u0437\u0443\u044E\u0441\u044C \u043E\u043F\u043B\u0430\u0447\u0438\u0432\u0430\u0442\u044C \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0438 1 (\u043E\u0434\u043D\u043E\u0433\u043E) \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u043D\u043E\u0433\u043E \u0434\u043D\u044F. "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: "2. \u042F \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u044E\u0441\u044C \u0441 \u0442\u0435\u043C, \u0447\u0442\u043E \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C \u043F\u0440\u0438\u0441\u0442\u0443\u043F\u0430\u0435\u0442 \u043A \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044E \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432 \u043F\u043E\u0441\u043B\u0435 \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u043E\u043F\u043B\u0430\u0442\u044B \u0440\u0430\u0441\u0445\u043E\u0434\u043E\u0432,  \u043F\u0440\u0435\u0434\u0443\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u043D\u044B\u0445 \u043F.1."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: ["3. \u042F \u043E\u0431\u044F\u0437\u0443\u044E\u0441\u044C \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0441\u0442\u0438 \u043E\u043F\u043B\u0430\u0442\u0443 \u0437\u0430 \u043E\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0435 \u0443\u0441\u043B\u0443\u0433\u0438 \u0432 \u0440\u0430\u0437\u043C\u0435\u0440\u0435 ", priceWithDisc, " \u0442\u0435\u043D\u0433\u0435 \u043D\u0435 \u043F\u043E\u0437\u0434\u043D\u0435\u0435 __.__.2021\u0433\u043E\u0434\u0430. "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: ["4. \u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u043D\u0430\u0440\u0443\u0448\u0435\u043D\u0438\u044F \u0441\u0440\u043E\u043A\u043E\u0432 \u043E\u043F\u043B\u0430\u0442\u044B \u0438\u043B\u0438 \u0440\u0430\u0441\u0442\u043E\u0440\u0436\u0435\u043D\u0438\u044F \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u0430 \u0432 \u043E\u0434\u043D\u043E\u0441\u0442\u043E\u0440\u043E\u043D\u043D\u0435\u043C \u043F\u043E\u0440\u044F\u0434\u043A\u0435, \u043E\u0431\u044F\u0437\u0443\u044E\u0441\u044C \u043E\u043F\u043B\u0430\u0442\u0438\u0442\u044C \u043F\u043E\u043B\u043D\u0443\u044E \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0443\u0441\u043B\u0443\u0433 \u0432 \u0440\u0430\u0437\u043C\u0435\u0440\u0435 ", priceWithDisc, " \u0442\u0435\u043D\u0433\u0435 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 10 \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u043D\u044B\u0445 \u0434\u043D\u0435\u0439 \u0441\u043E \u0434\u043D\u044F \u043D\u0430\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u044F \u0442\u0430\u043A\u043E\u0433\u043E \u0441\u043E\u0431\u044B\u0442\u0438\u044F."]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: "5. \u042F \u0434\u0430\u044E \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435, \u0447\u0442\u043E \u043B\u0438\u0448\u0430\u044E\u0441\u044C \u0441\u043A\u0438\u0434\u043A\u0438 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u043E\u0439 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u0435\u043C \u0432 \u0441\u043B\u0443\u0447\u0430\u0435 \u043F\u0440\u043E\u0441\u0440\u043E\u0447\u043A\u0438 \u043E\u043F\u043B\u0430\u0442\u044B \u0432 \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0439 \u0441\u0440\u043E\u043A \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0441\u043A\u0438\u0434\u043A\u0438 \u0438 \u043E\u0431\u044F\u0437\u0443\u044E\u0441\u044C \u043E\u043F\u043B\u0430\u0442\u0438\u0442\u044C \u0441\u043E\u0433\u043B\u0430\u0441\u043D\u043E \u0422\u0430\u0440\u0438\u0444\u0430\u043C \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044F. "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: "6.  \u042F \u0438\u043C\u0435\u044E \u043F\u0440\u0430\u0432\u043E \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043F\u0438\u0441\u044C\u043C\u0435\u043D\u043D\u044B\u0435 \u043E\u0431\u043E\u0441\u043D\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0437\u0430\u043C\u0435\u0447\u0430\u043D\u0438\u044F \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0438 1 (\u043E\u0434\u043D\u043E\u0433\u043E) \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u043D\u043E\u0433\u043E \u0434\u043D\u044F \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044E \u043F\u043E \u0432\u044B\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u043E\u043C\u0443 \u0410\u043A\u0442\u0443 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u044B\u0445 \u0440\u0430\u0431\u043E\u0442 \u0432 \u043B\u0438\u0447\u043D\u043E\u043C \u043A\u0430\u0431\u0438\u043D\u0435\u0442\u0435. "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: "7. \u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u043D\u0435 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043F\u0438\u0441\u044C\u043C\u0435\u043D\u043D\u044B\u0445 \u043E\u0431\u043E\u0441\u043D\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u0437\u0430\u043C\u0435\u0447\u0430\u043D\u0438\u0439 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0438 1 (\u043E\u0434\u043D\u043E\u0433\u043E) \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u043D\u043E\u0433\u043E \u0434\u043D\u044F \u043F\u043E \u0432\u044B\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u043E\u043C\u0443 \u0410\u043A\u0442\u0443 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u044B\u0445 \u0440\u0430\u0431\u043E\u0442 \u0432 \u043B\u0438\u0447\u043D\u043E\u043C \u043A\u0430\u0431\u0438\u043D\u0435\u0442\u0435 \u0443\u0441\u043B\u0443\u0433\u0438 \u0441\u0447\u0438\u0442\u0430\u044E\u0442\u0441\u044F \u043E\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u043C\u0438 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u0435\u043C, \u0430 \u0438\u0445 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u044F \u043E\u0431\u044F\u0437\u0443\u044E\u0441\u044C \u043E\u043F\u043B\u0430\u0442\u0438\u0442\u044C \u0432 \u043F\u043E\u043B\u043D\u043E\u043C \u043E\u0431\u044A\u0435\u043C\u0435."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: "8.  \u042F \u043E\u0431\u044F\u0437\u0443\u044E\u0441\u044C \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044E \u043D\u0430\u0434\u043B\u0435\u0436\u0430\u0449\u0438\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u0443\u044E \u0434\u043E\u0432\u0435\u0440\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0438 3 (\u0442\u0440\u0435\u0445) \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u043D\u044B\u0445 \u0434\u043D\u0435\u0439 \u0441\u043E \u0434\u043D\u044F \u0437\u0430\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u0430."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: "9.  \u042F \u043E\u0431\u044F\u0437\u0443\u044E\u0441\u044C \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0442\u044C \u0432\u0441\u044E \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u0443\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u0438 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B \u0434\u043B\u044F \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044F"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: "10."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZG9nb3Zvci5qcyJdLCJuYW1lcyI6WyJEb2dvdm9yIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJuYW1lIiwic2V0TmFtZSIsInR5cGUiLCJzZXRUeXBlIiwiY29tcGFueU5hbWUiLCJzZXRDb21wYW55TmFtZSIsInByaWNlV2l0aERpc2MiLCJzZXRQcmljZSIsInRvZGF5IiwiRGF0ZSIsImRheSIsImdldERhdGUiLCJtb250aCIsImdldE1vbnRoIiwieWVhciIsImdldEZ1bGxZZWFyIiwicGFyc2VEYXkiLCJwYXJzZU1vbnRoIiwicGFyc2VJbnQiLCJ0b2RheVBhcnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUNBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFDcEIsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4Qjs7QUFEb0Isa0JBR1BDLCtDQUFRLENBQUMsYUFBRCxDQUhEO0FBQUEsTUFFYkMsSUFGYTtBQUFBLE1BR2xCQyxPQUhrQjs7QUFBQSxtQkFLUEYsK0NBQVEsQ0FBQyxTQUFELENBTEQ7QUFBQSxNQUliRyxJQUphO0FBQUEsTUFLbEJDLE9BTGtCOztBQUFBLG1CQU9BSiwrQ0FBUSxDQUFDLFVBQUQsQ0FQUjtBQUFBLE1BTWJLLFdBTmE7QUFBQSxNQU9sQkMsY0FQa0I7O0FBQUEsbUJBU05OLCtDQUFRLENBQUMsTUFBRCxDQVRGO0FBQUEsTUFRYk8sYUFSYTtBQUFBLE1BU2xCQyxRQVRrQjs7QUFXcEIsTUFBTUMsS0FBSyxHQUFHLElBQUlDLElBQUosRUFBZDtBQUNBLE1BQU1DLEdBQUcsR0FBR0YsS0FBSyxDQUFDRyxPQUFOLEVBQVo7QUFDQSxNQUFNQyxLQUFLLEdBQUdKLEtBQUssQ0FBQ0ssUUFBTixLQUFtQixDQUFqQztBQUNBLE1BQU1DLElBQUksR0FBR04sS0FBSyxDQUFDTyxXQUFOLEVBQWI7QUFFQSxNQUFNQyxRQUFRLEdBQUdOLEdBQUcsR0FBRyxFQUFOLEdBQ2IsTUFBTUEsR0FETyxHQUViQSxHQUZKO0FBR0EsTUFBTU8sVUFBVSxHQUFHQyxRQUFRLENBQUNOLEtBQUQsQ0FBUixHQUFrQixFQUFsQixHQUNmLE9BQU9BLEtBRFEsR0FFZixNQUFNQSxLQUZWO0FBSUEsTUFBTU8sVUFBVSxHQUFHSCxRQUFRLEdBQUcsR0FBWCxHQUFpQkMsVUFBakIsR0FBOEIsR0FBOUIsR0FBb0NILElBQXBDLEdBQTJDLElBQTlEO0FBRUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0U7QUFBTSxZQUFJLEVBQUMsVUFBWDtBQUFzQixlQUFPLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUlFO0FBQUssZUFBUyxFQUFDLFNBQWY7QUFBQSw4QkFDRTtBQUFTLGlCQUFTLEVBQUMsaUJBQW5CO0FBQUEsZ0NBQ0U7QUFBUyxtQkFBUyxFQUFDLEtBQW5CO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFLRTtBQUFTLG1CQUFTLEVBQUMsUUFBbkI7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUEsc0JBQUlLO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFZRTtBQUFTLGlCQUFTLEVBQUMsZUFBbkI7QUFBQSxnQ0FDRTtBQUFTLG1CQUFTLEVBQUMsU0FBbkI7QUFBQSxrQ0FDRTtBQUFBLGtDQUFNbkIsSUFBTix1SkFBMENJLFdBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUtFO0FBQUEsa0NBQU1KLElBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGLGVBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUkYsZUFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFURixlQVVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVZGLGVBWUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBaUJFO0FBQVMsbUJBQVMsRUFBQztBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWpCRixlQXFCRTtBQUFTLG1CQUFTLEVBQUMsU0FBbkI7QUFBQSxpQ0FDRTtBQUFJLGdCQUFJLEVBQUMsR0FBVDtBQUFBLG9DQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkYsZUFHRTtBQUFBLHFWQUFtRU0sYUFBbkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhGLGVBSUU7QUFBQSxxdUJBQThJQSxhQUE5STtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkYsZUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFMRixlQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQU5GLGVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUEYsZUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFSRixlQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVRGLGVBVUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFvRUQsQ0E3RkQ7O0dBQU1WLE87VUFDV0Usa0Q7OztLQURYRixPO0FBK0ZOLCtEQUFlQSxPQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RvZ292b3IuMDYzYTc0NjcyMjU4ODExMmJkNjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuY29uc3QgRG9nb3ZvciA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IFtuYW1lLFxyXG4gICAgc2V0TmFtZV0gPSB1c2VTdGF0ZSgn0KTQsNC80LjQu9C40Y8g0JjQvNGPJylcclxuICBjb25zdCBbdHlwZSxcclxuICAgIHNldFR5cGVdID0gdXNlU3RhdGUoJ9Cu0YAg0LvQuNGG0L4nKVxyXG4gIGNvbnN0IFtjb21wYW55TmFtZSxcclxuICAgIHNldENvbXBhbnlOYW1lXSA9IHVzZVN0YXRlKCfQmtC+0LzQv9Cw0L3QuNGPJylcclxuICBjb25zdCBbcHJpY2VXaXRoRGlzYyxcclxuICAgIHNldFByaWNlXSA9IHVzZVN0YXRlKDIwMDAwMClcclxuXHJcbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gIGNvbnN0IGRheSA9IHRvZGF5LmdldERhdGUoKVxyXG4gIGNvbnN0IG1vbnRoID0gdG9kYXkuZ2V0TW9udGgoKSArIDFcclxuICBjb25zdCB5ZWFyID0gdG9kYXkuZ2V0RnVsbFllYXIoKVxyXG5cclxuICBjb25zdCBwYXJzZURheSA9IGRheSA8IDEwXHJcbiAgICA/IFwiMFwiICsgZGF5XHJcbiAgICA6IGRheVxyXG4gIGNvbnN0IHBhcnNlTW9udGggPSBwYXJzZUludChtb250aCkgPiAxMFxyXG4gICAgPyBcIjAgXCIgKyBtb250aFxyXG4gICAgOiBcIjBcIiArIG1vbnRoXHJcblxyXG4gIGNvbnN0IHRvZGF5UGFyc2UgPSBwYXJzZURheSArIFwiLlwiICsgcGFyc2VNb250aCArIFwiLlwiICsgeWVhciArIFwi0LMuXCI7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPTk2MFwiLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZG9nb3Zvcic+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdkb2dvdm9yX19oZWFkZXInPlxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSd0b3AnPlxyXG4gICAgICAgICAgICA8cD7QlNC+0LPQvtCy0L7RgC3Qv9C+0YDRg9GH0LXQvdC40Y8g4oSWPC9wPlxyXG4gICAgICAgICAgICA8cD7QmiDQn9Cj0JHQm9CY0KfQndCe0JzQoy3QlNCe0JPQntCS0J7QoNCjINCe0KTQldCg0KLQqyDihJY8L3A+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2JvdHRvbSc+XHJcbiAgICAgICAgICAgIDxiPtCzLiDQkNC70LzQsNGC0Ys8L2I+XHJcbiAgICAgICAgICAgIDxwPnt0b2RheVBhcnNlfTwvcD5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nZG9nb3Zvcl9fYm9keSc+XHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgICAgICAgICA8cD7QryB7bmFtZX0sINC00LXQudGB0YLQstGD0Y7RidC40Lko0LDRjykg0LIg0LjQvdGC0LXRgNC10YHQsNGFIHtjb21wYW55TmFtZX0sINC00LXQudGB0YLQstGD0Y7RidC40Lkg0L3QsCDQvtGB0L3QvtCy0LDQvdC40Lgg0LTQvtCy0LXRgNC10L3QvdC+0YHRgtC4L9C/0YDQuNC60LDQt9CwINC00LDQu9C10LUg0LjQvNC10L3Rg9C10LzRi9C5XHJcbtCX0LDQutCw0LfRh9C40Log0L/QvtGA0YPRh9Cw0Y4sINCwINCi0J7QniDCq05BU0ggQ29tcGFuecK7INCyINC00LDQu9GM0L3QtdC50YjQtdC8INCY0YHQv9C+0LvQvdC40YLQtdC70Ywg0L/RgNC40L3QuNC80LDQtdGCINC90LBcclxu0YHQtdCx0Y8g0L7QsdGP0LfQsNGC0LXQu9GM0YHRgtCy0L4g0L7QutCw0LfRi9Cy0LDRgtGMINGO0YDQuNC00LjRh9C10YHQutC40LUg0YPRgdC70YPQs9C4INCyINC+0LHRitC10LzQtSDQuCDQvdCwINGD0YHQu9C+0LLQuNGP0YUsXHJcbtC/0YDQtdC00YPRgdC80L7RgtGA0LXQvdC90YvRhSDQvdCw0YHRgtC+0Y/RidC40Lwg0LTQvtCz0L7QstC+0YDQvtC8IOKAkyDQv9C+0YDRg9GH0LXQvdC40Y87PC9wPlxyXG4gICAgICAgICAgICA8cD7QryB7bmFtZX0sINC+0LHRj9C30YPRjtGB0Ywg0L/QvtC00YLQstC10YDQtNC40YLRjCDQv9C+0LvQvdC+0LzQvtGH0LjRjyDQsiDRgtC10YfQtdC90LjQuCA1INC60LDQu9C10L3QtNCw0YDQvdGL0YUg0LTQvdC10LkuINCSINGB0LvRg9GH0LDQtVxyXG7QvdC10L/QvtC00YLQstC10YDQttC00LXQvdC40Y8g0L/QvtC70L3QvtC80L7Rh9C40LksINGPINC/0YDQuNC90LjQvNCw0Y4g0L3QsCDRgdC10LHRjyDQstGB0LUg0YTQuNC90LDQvdGB0L7QstGL0LUg0L7QsdGP0LfQsNGC0LXQu9GM0YHRgtCy0LAg0L/QvlxyXG7QvdCw0YHRgtC+0Y/RidC10LzRgyDQlNC+0LPQvtCy0L7RgNGDINC4INC+0LHRj9C30YPRjtGB0Ywg0YHQstC+0LXQstGA0LXQvNC10L3QvdC+INC+0L/Qu9Cw0YLQuNGC0Ywg0LjRhS48L3A+XHJcbiAgICAgICAgICAgIDxwPtCd0LDRgdGC0L7Rj9GJ0LjQvCwg0L/QvtC00YLQstC10YDQttC00LDRjiDRgdCy0L7QuCDQv9C+0LvQvdC+0LzQvtGH0LjRjyDQv9C+INC30LDQutC70Y7Rh9C10L3QuNGOINC90LDRgdGC0L7Rj9GJ0LXQs9C+INCU0L7Qs9C+0LLQvtGA0LAuPC9wPlxyXG4gICAgICAgICAgICA8cD7QryDQvtC30L3QsNC60L7QvNC70LXQvSjQsCkg0Lgg0YHQvtCz0LvQsNGB0LXQvSjQsCkg0YEg0YPRgdC70L7QstC40Y/QvNC4INCe0YTQtdGA0YLRiyDQuCDQotCw0YDQuNGE0LDQvNC4INCY0YHQv9C+0LvQvdC40YLQtdC70Y8uPC9wPlxyXG4gICAgICAgICAgICA8cD7Qn9C+0YDRg9GH0LDRjiDQvtC60LDQt9Cw0YLRjCDRjtGA0LjQtNC40YfQtdGB0LrQuNC1INGD0YHQu9GD0LPQuCDQmNGB0L/QvtC70L3QuNGC0LXQu9GOOiBUT08gTkFTSCBDT01QQU5ZXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHA+0JjRgdC/0L7Qu9C90LjRgtC10LvRjiDQl9Cw0LrQsNC30YfQuNC60L7QvCDQv9C+0YDRg9GH0LXQvdC+INC+0LrQsNC30LDRgtGMINGD0YHQu9GD0LPQuCDQv9C+INGB0YLQvtC40LzQvtGB0YLQuCDRg9C60LDQt9Cw0L3QvdC+0Lkg0LJcclxuICAgICAgICAgICAgICDQvdC40LbQtdGB0LvQtdC00YPRjtGJ0LXQuSDRgtCw0LHQu9C40YbQtTo8L3A+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0ndGFibGVfcHJpY2UnPlxyXG5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgICAgICAgICA8b2wgdHlwZT0nMSc+XHJcbiAgICAgICAgICAgICAgPGxpPjEuXHTQktGB0LUg0YDQsNGB0YXQvtC00YssINC90LXQvtCx0YXQvtC00LjQvNGL0LUg0LTQu9GPINC40YHQv9C+0LvQvdC10L3QuNGPINC/0L7RgNGD0YfQtdC90LjRjywg0Y8g0L7QsdGP0LfRg9GO0YHRjCDQvtC/0LvQsNGH0LjQstCw0YLRjCDQsiDRgtC10YfQtdC90LjQuCAxICjQvtC00L3QvtCz0L4pINC60LDQu9C10L3QtNCw0YDQvdC+0LPQviDQtNC90Y8uIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPjIuXHTQryDRgdC+0LPQu9Cw0YjQsNGO0YHRjCDRgSDRgtC10LwsINGH0YLQviDQmNGB0L/QvtC70L3QuNGC0LXQu9GMINC/0YDQuNGB0YLRg9C/0LDQtdGCINC6INC40YHQv9C+0LvQvdC10L3QuNGOINC+0LHRj9C30LDRgtC10LvRjNGB0YLQsiDQv9C+0YHQu9C1INC/0YDQvtC40LfQstC10LTQtdC90LjRjyDQvtC/0LvQsNGC0Ysg0YDQsNGB0YXQvtC00L7QsiwgINC/0YDQtdC00YPRgdC80L7RgtGA0LXQvdC90YvRhSDQvy4xLjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPjMuXHTQryDQvtCx0Y/Qt9GD0Y7RgdGMINC/0YDQvtC40LfQstC10YHRgtC4INC+0L/Qu9Cw0YLRgyDQt9CwINC+0LrQsNC30LDQvdC90YvQtSDRg9GB0LvRg9Cz0Lgg0LIg0YDQsNC30LzQtdGA0LUge3ByaWNlV2l0aERpc2N9INGC0LXQvdCz0LUg0L3QtSDQv9C+0LfQtNC90LXQtSBfXy5fXy4yMDIx0LPQvtC00LAuIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPjQuXHTQkiDRgdC70YPRh9Cw0LUg0L3QsNGA0YPRiNC10L3QuNGPINGB0YDQvtC60L7QsiDQvtC/0LvQsNGC0Ysg0LjQu9C4INGA0LDRgdGC0L7RgNC20LXQvdC40Y8g0JTQvtCz0L7QstC+0YDQsCDQsiDQvtC00L3QvtGB0YLQvtGA0L7QvdC90LXQvCDQv9C+0YDRj9C00LrQtSwg0L7QsdGP0LfRg9GO0YHRjCDQvtC/0LvQsNGC0LjRgtGMINC/0L7Qu9C90YPRjiDRgdGC0L7QuNC80L7RgdGC0Ywg0YPRgdC70YPQsyDQsiDRgNCw0LfQvNC10YDQtSB7cHJpY2VXaXRoRGlzY30g0YLQtdC90LPQtSDQsiDRgtC10YfQtdC90LjQtSAxMCDQutCw0LvQtdC90LTQsNGA0L3Ri9GFINC00L3QtdC5INGB0L4g0LTQvdGPINC90LDRgdGC0YPQv9C70LXQvdC40Y8g0YLQsNC60L7Qs9C+INGB0L7QsdGL0YLQuNGPLjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPjUuXHTQryDQtNCw0Y4g0YHQvtCz0LvQsNGB0LjQtSwg0YfRgtC+INC70LjRiNCw0Y7RgdGMINGB0LrQuNC00LrQuCDQv9GA0LXQtNC+0YHRgtCw0LLQu9C10L3QvdC+0Lkg0JjRgdC/0L7Qu9C90LjRgtC10LvQtdC8INCyINGB0LvRg9GH0LDQtSDQv9GA0L7RgdGA0L7Rh9C60Lgg0L7Qv9C70LDRgtGLINCyINGD0LrQsNC30LDQvdC90YvQuSDRgdGA0L7QuiDQtNC10LnRgdGC0LLQuNGPINGB0LrQuNC00LrQuCDQuCDQvtCx0Y/Qt9GD0Y7RgdGMINC+0L/Qu9Cw0YLQuNGC0Ywg0YHQvtCz0LvQsNGB0L3QviDQotCw0YDQuNGE0LDQvCDQmNGB0L/QvtC70L3QuNGC0LXQu9GPLiA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT42LiAg0K8g0LjQvNC10Y4g0L/RgNCw0LLQviDQv9GA0LXQtNC+0YHRgtCw0LLQuNGC0Ywg0L/QuNGB0YzQvNC10L3QvdGL0LUg0L7QsdC+0YHQvdC+0LLQsNC90L3Ri9C1INC30LDQvNC10YfQsNC90LjRjyDQsiDRgtC10YfQtdC90LjQuCAxICjQvtC00L3QvtCz0L4pINC60LDQu9C10L3QtNCw0YDQvdC+0LPQviDQtNC90Y8g0JjRgdC/0L7Qu9C90LjRgtC10LvRjiDQv9C+INCy0YvRgdGC0LDQstC70LXQvdC90L7QvNGDINCQ0LrRgtGDINCy0YvQv9C+0LvQvdC10L3QvdGL0YUg0YDQsNCx0L7RgiDQsiDQu9C40YfQvdC+0Lwg0LrQsNCx0LjQvdC10YLQtS4gPC9saT5cclxuICAgICAgICAgICAgICA8bGk+Ny5cdNCSINGB0LvRg9GH0LDQtSDQvdC1INC/0YDQtdC00L7RgdGC0LDQstC70LXQvdC40Y8g0L/QuNGB0YzQvNC10L3QvdGL0YUg0L7QsdC+0YHQvdC+0LLQsNC90L3Ri9GFINC30LDQvNC10YfQsNC90LjQuSDQsiDRgtC10YfQtdC90LjQuCAxICjQvtC00L3QvtCz0L4pINC60LDQu9C10L3QtNCw0YDQvdC+0LPQviDQtNC90Y8g0L/QviDQstGL0YHRgtCw0LLQu9C10L3QvdC+0LzRgyDQkNC60YLRgyDQstGL0L/QvtC70L3QtdC90L3Ri9GFINGA0LDQsdC+0YIg0LIg0LvQuNGH0L3QvtC8INC60LDQsdC40L3QtdGC0LUg0YPRgdC70YPQs9C4INGB0YfQuNGC0LDRjtGC0YHRjyDQvtC60LDQt9Cw0L3QvdGL0LzQuCDQmNGB0L/QvtC70L3QuNGC0LXQu9C10LwsINCwINC40YUg0YHRgtC+0LjQvNC+0YHRgtGMINGPINC+0LHRj9C30YPRjtGB0Ywg0L7Qv9C70LDRgtC40YLRjCDQsiDQv9C+0LvQvdC+0Lwg0L7QsdGK0LXQvNC1LjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPjguICDQryDQvtCx0Y/Qt9GD0Y7RgdGMINC/0YDQtdC00L7RgdGC0LDQstC40YLRjCDQmNGB0L/QvtC70L3QuNGC0LXQu9GOINC90LDQtNC70LXQttCw0YnQuNC8INC+0LHRgNCw0LfQvtC8INC+0YTQvtGA0LzQu9C10L3QvdGD0Y4g0LTQvtCy0LXRgNC10L3QvdC+0YHRgtGMINCyINGC0LXRh9C10L3QuNC4IDMgKNGC0YDQtdGFKSDQutCw0LvQtdC90LTQsNGA0L3Ri9GFINC00L3QtdC5INGB0L4g0LTQvdGPINC30LDQutC70Y7Rh9C10L3QuNGPINCU0L7Qs9C+0LLQvtGA0LAuPC9saT5cclxuICAgICAgICAgICAgICA8bGk+OS4gXHTQryDQvtCx0Y/Qt9GD0Y7RgdGMINC/0YDQtdC00L7RgdGC0LDQstC70Y/RgtGMINCy0YHRjiDQvdC10L7QsdGF0L7QtNC40LzRg9GOINC40L3RhNC+0YDQvNCw0YbQuNGOINC4INC00L7QutGD0LzQtdC90YLRiyDQtNC70Y8g0JjRgdC/0L7Qu9C90LjRgtC10LvRjzwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPjEwLjwvbGk+XHJcbiAgICAgICAgICAgIFxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgPC9vbD5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRG9nb3ZvciJdLCJzb3VyY2VSb290IjoiIn0=