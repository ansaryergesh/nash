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
              children: " \u0412\u0441\u0435 \u0440\u0430\u0441\u0445\u043E\u0434\u044B, \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0435 \u0434\u043B\u044F \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u044F, \u044F \u043E\u0431\u044F\u0437\u0443\u044E\u0441\u044C \u043E\u043F\u043B\u0430\u0447\u0438\u0432\u0430\u0442\u044C \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0438 1 (\u043E\u0434\u043D\u043E\u0433\u043E) \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u043D\u043E\u0433\u043E \u0434\u043D\u044F. "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: " \u042F \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u044E\u0441\u044C \u0441 \u0442\u0435\u043C, \u0447\u0442\u043E \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C \u043F\u0440\u0438\u0441\u0442\u0443\u043F\u0430\u0435\u0442 \u043A \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044E \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432 \u043F\u043E\u0441\u043B\u0435 \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u043E\u043F\u043B\u0430\u0442\u044B \u0440\u0430\u0441\u0445\u043E\u0434\u043E\u0432,  \u043F\u0440\u0435\u0434\u0443\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u043D\u044B\u0445 \u043F.1."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: [" \u042F \u043E\u0431\u044F\u0437\u0443\u044E\u0441\u044C \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0441\u0442\u0438 \u043E\u043F\u043B\u0430\u0442\u0443 \u0437\u0430 \u043E\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0435 \u0443\u0441\u043B\u0443\u0433\u0438 \u0432 \u0440\u0430\u0437\u043C\u0435\u0440\u0435 ", priceWithDisc, " \u0442\u0435\u043D\u0433\u0435 \u043D\u0435 \u043F\u043E\u0437\u0434\u043D\u0435\u0435 __.__.2021\u0433\u043E\u0434\u0430. "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: [" \u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u043D\u0430\u0440\u0443\u0448\u0435\u043D\u0438\u044F \u0441\u0440\u043E\u043A\u043E\u0432 \u043E\u043F\u043B\u0430\u0442\u044B \u0438\u043B\u0438 \u0440\u0430\u0441\u0442\u043E\u0440\u0436\u0435\u043D\u0438\u044F \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u0430 \u0432 \u043E\u0434\u043D\u043E\u0441\u0442\u043E\u0440\u043E\u043D\u043D\u0435\u043C \u043F\u043E\u0440\u044F\u0434\u043A\u0435, \u043E\u0431\u044F\u0437\u0443\u044E\u0441\u044C \u043E\u043F\u043B\u0430\u0442\u0438\u0442\u044C \u043F\u043E\u043B\u043D\u0443\u044E \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0443\u0441\u043B\u0443\u0433 \u0432 \u0440\u0430\u0437\u043C\u0435\u0440\u0435 ", priceWithDisc, " \u0442\u0435\u043D\u0433\u0435 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 10 \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u043D\u044B\u0445 \u0434\u043D\u0435\u0439 \u0441\u043E \u0434\u043D\u044F \u043D\u0430\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u044F \u0442\u0430\u043A\u043E\u0433\u043E \u0441\u043E\u0431\u044B\u0442\u0438\u044F."]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: " \u042F \u0434\u0430\u044E \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435, \u0447\u0442\u043E \u043B\u0438\u0448\u0430\u044E\u0441\u044C \u0441\u043A\u0438\u0434\u043A\u0438 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u043E\u0439 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u0435\u043C \u0432 \u0441\u043B\u0443\u0447\u0430\u0435 \u043F\u0440\u043E\u0441\u0440\u043E\u0447\u043A\u0438 \u043E\u043F\u043B\u0430\u0442\u044B \u0432 \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0439 \u0441\u0440\u043E\u043A \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0441\u043A\u0438\u0434\u043A\u0438 \u0438 \u043E\u0431\u044F\u0437\u0443\u044E\u0441\u044C \u043E\u043F\u043B\u0430\u0442\u0438\u0442\u044C \u0441\u043E\u0433\u043B\u0430\u0441\u043D\u043E \u0422\u0430\u0440\u0438\u0444\u0430\u043C \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044F. "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: "  \u042F \u0438\u043C\u0435\u044E \u043F\u0440\u0430\u0432\u043E \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043F\u0438\u0441\u044C\u043C\u0435\u043D\u043D\u044B\u0435 \u043E\u0431\u043E\u0441\u043D\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0437\u0430\u043C\u0435\u0447\u0430\u043D\u0438\u044F \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0438 1 (\u043E\u0434\u043D\u043E\u0433\u043E) \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u043D\u043E\u0433\u043E \u0434\u043D\u044F \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044E \u043F\u043E \u0432\u044B\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u043E\u043C\u0443 \u0410\u043A\u0442\u0443 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u044B\u0445 \u0440\u0430\u0431\u043E\u0442 \u0432 \u043B\u0438\u0447\u043D\u043E\u043C \u043A\u0430\u0431\u0438\u043D\u0435\u0442\u0435. "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: " \u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u043D\u0435 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043F\u0438\u0441\u044C\u043C\u0435\u043D\u043D\u044B\u0445 \u043E\u0431\u043E\u0441\u043D\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u0437\u0430\u043C\u0435\u0447\u0430\u043D\u0438\u0439 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0438 1 (\u043E\u0434\u043D\u043E\u0433\u043E) \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u043D\u043E\u0433\u043E \u0434\u043D\u044F \u043F\u043E \u0432\u044B\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u043E\u043C\u0443 \u0410\u043A\u0442\u0443 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u044B\u0445 \u0440\u0430\u0431\u043E\u0442 \u0432 \u043B\u0438\u0447\u043D\u043E\u043C \u043A\u0430\u0431\u0438\u043D\u0435\u0442\u0435 \u0443\u0441\u043B\u0443\u0433\u0438 \u0441\u0447\u0438\u0442\u0430\u044E\u0442\u0441\u044F \u043E\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u043C\u0438 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u0435\u043C, \u0430 \u0438\u0445 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u044F \u043E\u0431\u044F\u0437\u0443\u044E\u0441\u044C \u043E\u043F\u043B\u0430\u0442\u0438\u0442\u044C \u0432 \u043F\u043E\u043B\u043D\u043E\u043C \u043E\u0431\u044A\u0435\u043C\u0435."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: "  \u042F \u043E\u0431\u044F\u0437\u0443\u044E\u0441\u044C \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044E \u043D\u0430\u0434\u043B\u0435\u0436\u0430\u0449\u0438\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u0443\u044E \u0434\u043E\u0432\u0435\u0440\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0438 3 (\u0442\u0440\u0435\u0445) \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u043D\u044B\u0445 \u0434\u043D\u0435\u0439 \u0441\u043E \u0434\u043D\u044F \u0437\u0430\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u0430."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: "  \u042F \u043E\u0431\u044F\u0437\u0443\u044E\u0441\u044C \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0442\u044C \u0432\u0441\u044E \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u0443\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u0438 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B \u0434\u043B\u044F \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044F"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: " \u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u043D\u0435 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043C\u043D\u043E\u0439 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0438 5 \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u043D\u044B\u0445 \u0434\u043D\u0435\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432 \u0438 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u0434\u043B\u044F \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044F, \u0443\u0441\u043B\u0443\u0433\u0430 \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044F \u043E\u043A\u0430\u0437\u0430\u043D\u043D\u043E\u0439, \u0430 \u0438\u0445 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u044F \u043E\u0431\u044F\u0437\u0443\u044E\u0441\u044C \u043E\u043F\u043B\u0430\u0442\u0438\u0442\u044C \u0432 \u043F\u043E\u043B\u043D\u043E\u043C \u043E\u0431\u044A\u0435\u043C\u0435.  "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: "\u042F \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u044E, \u0447\u0442\u043E \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043C\u043D\u043E\u0439 \u0434\u0430\u043D\u043D\u043E\u0433\u043E \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u0430-\u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u044F \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0430\u043A\u0446\u0435\u043F\u0442\u043E\u043C \u041F\u0443\u0431\u043B\u0438\u0447\u043D\u043E\u0439 \u041E\u0444\u0435\u0440\u0442\u044B "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: ["\u042F \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u044E\u0441\u044C \u0441\u043E \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u043C\u0438 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u043C\u0438:", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ol", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: "\u041F\u043E\u0441\u043B\u0435 \u043F\u043E\u0434\u043F\u0438\u0441\u0430\u043D\u0438\u044F \u043C\u043D\u043E\u0439 \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u0430-\u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u044F, \u043E\u043D \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043D\u0430 \u0443\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044E. \u0415\u0441\u043B\u0438 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442 \u0437\u0430\u043A\u0430\u0437 \u043D\u0430 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u0445, \u043E\u0442\u0440\u0430\u0436\u0435\u043D\u043D\u044B\u0445 \u0432 \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u043E\u043C \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0435, \u043E\u043D \u043F\u0440\u0438\u0441\u0442\u0443\u043F\u0430\u0435\u0442 \u043A \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044E  \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u044D\u0442\u0430\u043F\u0430, \u043F\u0440\u0435\u0434\u0443\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u043D\u043E\u0433\u043E \u043F. 7.3.1. \u041E\u0444\u0435\u0440\u0442\u044B. "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 82,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: "\u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u043D\u0435\u0441\u043E\u0433\u043B\u0430\u0441\u0438\u044F \u0441 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u043C\u0438 \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u0430-\u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u044F, \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u0442 \u043D\u0430 \u043F\u043E\u0434\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043D\u043E\u0432\u044B\u0439 \u0414\u043E\u0433\u043E\u0432\u043E\u0440-\u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u044F \u0438\u043B\u0438 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u044F\u0435\u0442 \u043E\u0431 \u043E\u0442\u043A\u0430\u0437\u0435 \u043E\u0442 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0443\u0441\u043B\u0443\u0433."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: "\u041F\u0440\u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0438 \u043C\u043D\u043E\u0439 \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u0430-\u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u044F \u0441 \u0432\u043D\u0435\u0441\u0435\u043D\u043D\u044B\u043C\u0438 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u043A\u0430\u043C\u0438 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044F, \u044F \u043E\u0431\u044F\u0437\u0443\u044E\u0441\u044C \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u0438\u0442\u044C\u0441\u044F \u0441 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u043C\u0438 \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u0430-\u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u044F,  \u0432 \u0441\u043B\u0443\u0447\u0430\u0435 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u044F \u0441 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u043C\u0438, \u043E\u0442\u0440\u0430\u0436\u0435\u043D\u043D\u044B\u043C\u0438 \u0432 \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u0435-\u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u044F, \u044F \u043F\u043E\u0434\u043F\u0438\u0441\u044B\u0432\u0430\u044E \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442 \u043F\u043E\u0441\u0442\u0430\u0432\u0438\u0432 \u0433\u0430\u043B\u043E\u0447\u043A\u0443 \u0432 \u0433\u0440\u0430\u0444\u0435 \u201C\u2611\u201D. \u041F\u043E\u0441\u043B\u0435 \u0447\u0435\u0433\u043E, \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C \u043F\u0440\u0438\u0441\u0442\u0443\u043F\u0430\u0435\u0442 \u043A \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044E  \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u044D\u0442\u0430\u043F\u0430, \u043F\u0440\u0435\u0434\u0443\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u043D\u043E\u0433\u043E \u043F. 6.3.1. \u041E\u0444\u0435\u0440\u0442\u044B."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 84,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: "\u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u043C\u043D\u0435  \u0443\u0441\u043B\u0443\u0433\u0438 \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0438 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432, \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043D\u044B\u0445 \u043C\u043D\u043E\u0439 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044F \u0438\u043B\u0438 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0445 \u0437\u0430\u043A\u0430\u0437\u043D\u044B\u043C \u043F\u0438\u0441\u044C\u043C\u043E\u043C \u0441 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0435\u043C \u043E \u0432\u0440\u0443\u0447\u0435\u043D\u0438\u0438 \u043F\u043E \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u043E\u043C\u0443 \u0430\u0434\u0440\u0435\u0441\u0443 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044F. \u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u044F \u043E\u0442\u043C\u0435\u0442\u043A\u0438 \u043E \u0432\u0440\u0443\u0447\u0435\u043D\u0438\u0438 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044E, \u0442\u0430\u043A\u0438\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B \u043F\u0440\u0438\u0437\u043D\u0430\u044E\u0442\u0441\u044F \u043D\u0435 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u043C\u0438 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044E."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 85,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: "\u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439 \u0432 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445/\u0440\u0435\u043A\u0432\u0438\u0437\u0438\u0442\u0430\u0445, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u0438/\u0438\u043B\u0438 \u043C\u043E\u0436\u0435\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0434\u043B\u044F \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F (\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u043D\u043E \u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E, \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u0434\u043E\u043C\u0430\u0448\u043D\u0435\u0433\u043E \u0438\u043B\u0438 \u0440\u0430\u0431\u043E\u0447\u0435\u0433\u043E \u0430\u0434\u0440\u0435\u0441\u0430, \u043D\u043E\u043C\u0435\u0440\u0430 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u043E\u0433\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430, \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0433\u043E \u043F\u043E\u0447\u0442\u043E\u0432\u043E\u0433\u043E \u0430\u0434\u0440\u0435\u0441\u0430 \u0438 \u0442.\u0434.),  \u044F \u043E\u0431\u044F\u0437\u0443\u044E\u0441\u044C \u043D\u0435\u043C\u0435\u0434\u043B\u0435\u043D\u043D\u043E (\u043D\u0435 \u043F\u043E\u0437\u0434\u043D\u0435\u0435, \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0433\u043E \u0434\u043D\u044F, \u0441\u043E \u0434\u043D\u044F \u0442\u0430\u043A\u043E\u0433\u043E \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F) \u0443\u0432\u0435\u0434\u043E\u043C\u0438\u0442\u044C \u043E\u0431 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F\u0445 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044F. \u041F\u0440\u0438 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0438 \u043F\u0438\u0441\u044C\u043C\u0435\u043D\u043D\u043E\u0433\u043E \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F \u043E\u0431 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0438 \u0434\u0430\u043D\u043D\u044B\u0445, \u0440\u0430\u043D\u0435\u0435 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044F \u0430\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u043E\u0439 \u0438 \u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u043D\u043E\u0439."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 86,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZG9nb3Zvci5qcyJdLCJuYW1lcyI6WyJEb2dvdm9yIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJuYW1lIiwic2V0TmFtZSIsInR5cGUiLCJzZXRUeXBlIiwiY29tcGFueU5hbWUiLCJzZXRDb21wYW55TmFtZSIsInByaWNlV2l0aERpc2MiLCJzZXRQcmljZSIsInRvZGF5IiwiRGF0ZSIsImRheSIsImdldERhdGUiLCJtb250aCIsImdldE1vbnRoIiwieWVhciIsImdldEZ1bGxZZWFyIiwicGFyc2VEYXkiLCJwYXJzZU1vbnRoIiwicGFyc2VJbnQiLCJ0b2RheVBhcnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUNBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFDcEIsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4Qjs7QUFEb0Isa0JBR1BDLCtDQUFRLENBQUMsYUFBRCxDQUhEO0FBQUEsTUFFYkMsSUFGYTtBQUFBLE1BR2xCQyxPQUhrQjs7QUFBQSxtQkFLUEYsK0NBQVEsQ0FBQyxTQUFELENBTEQ7QUFBQSxNQUliRyxJQUphO0FBQUEsTUFLbEJDLE9BTGtCOztBQUFBLG1CQU9BSiwrQ0FBUSxDQUFDLFVBQUQsQ0FQUjtBQUFBLE1BTWJLLFdBTmE7QUFBQSxNQU9sQkMsY0FQa0I7O0FBQUEsbUJBU05OLCtDQUFRLENBQUMsTUFBRCxDQVRGO0FBQUEsTUFRYk8sYUFSYTtBQUFBLE1BU2xCQyxRQVRrQjs7QUFXcEIsTUFBTUMsS0FBSyxHQUFHLElBQUlDLElBQUosRUFBZDtBQUNBLE1BQU1DLEdBQUcsR0FBR0YsS0FBSyxDQUFDRyxPQUFOLEVBQVo7QUFDQSxNQUFNQyxLQUFLLEdBQUdKLEtBQUssQ0FBQ0ssUUFBTixLQUFtQixDQUFqQztBQUNBLE1BQU1DLElBQUksR0FBR04sS0FBSyxDQUFDTyxXQUFOLEVB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RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZGLGVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSEYsZUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFKRixlQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBWkYsZUFzQkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkF0QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFnRkQsQ0F6R0Q7O0dBQU1WLE87VUFDV0Usa0Q7OztLQURYRixPO0FBMkdOLCtEQUFlQSxPQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RvZ292b3IuNDI5YTkxM2JlNzM1MmU0NDA2NmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuY29uc3QgRG9nb3ZvciA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IFtuYW1lLFxyXG4gICAgc2V0TmFtZV0gPSB1c2VTdGF0ZSgn0KTQsNC80LjQu9C40Y8g0JjQvNGPJylcclxuICBjb25zdCBbdHlwZSxcclxuICAgIHNldFR5cGVdID0gdXNlU3RhdGUoJ9Cu0YAg0LvQuNGG0L4nKVxyXG4gIGNvbnN0IFtjb21wYW55TmFtZSxcclxuICAgIHNldENvbXBhbnlOYW1lXSA9IHVzZVN0YXRlKCfQmtC+0LzQv9Cw0L3QuNGPJylcclxuICBjb25zdCBbcHJpY2VXaXRoRGlzYyxcclxuICAgIHNldFByaWNlXSA9IHVzZVN0YXRlKDIwMDAwMClcclxuXHJcbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gIGNvbnN0IGRheSA9IHRvZGF5LmdldERhdGUoKVxyXG4gIGNvbnN0IG1vbnRoID0gdG9kYXkuZ2V0TW9udGgoKSArIDFcclxuICBjb25zdCB5ZWFyID0gdG9kYXkuZ2V0RnVsbFllYXIoKVxyXG5cclxuICBjb25zdCBwYXJzZURheSA9IGRheSA8IDEwXHJcbiAgICA/IFwiMFwiICsgZGF5XHJcbiAgICA6IGRheVxyXG4gIGNvbnN0IHBhcnNlTW9udGggPSBwYXJzZUludChtb250aCkgPiAxMFxyXG4gICAgPyBcIjAgXCIgKyBtb250aFxyXG4gICAgOiBcIjBcIiArIG1vbnRoXHJcblxyXG4gIGNvbnN0IHRvZGF5UGFyc2UgPSBwYXJzZURheSArIFwiLlwiICsgcGFyc2VNb250aCArIFwiLlwiICsgeWVhciArIFwi0LMuXCI7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPTk2MFwiLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZG9nb3Zvcic+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdkb2dvdm9yX19oZWFkZXInPlxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSd0b3AnPlxyXG4gICAgICAgICAgICA8cD7QlNC+0LPQvtCy0L7RgC3Qv9C+0YDRg9GH0LXQvdC40Y8g4oSWPC9wPlxyXG4gICAgICAgICAgICA8cD7QmiDQn9Cj0JHQm9CY0KfQndCe0JzQoy3QlNCe0JPQntCS0J7QoNCjINCe0KTQldCg0KLQqyDihJY8L3A+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2JvdHRvbSc+XHJcbiAgICAgICAgICAgIDxiPtCzLiDQkNC70LzQsNGC0Ys8L2I+XHJcbiAgICAgICAgICAgIDxwPnt0b2RheVBhcnNlfTwvcD5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nZG9nb3Zvcl9fYm9keSc+XHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgICAgICAgICA8cD7QryB7bmFtZX0sINC00LXQudGB0YLQstGD0Y7RidC40Lko0LDRjykg0LIg0LjQvdGC0LXRgNC10YHQsNGFIHtjb21wYW55TmFtZX0sINC00LXQudGB0YLQstGD0Y7RidC40Lkg0L3QsCDQvtGB0L3QvtCy0LDQvdC40Lgg0LTQvtCy0LXRgNC10L3QvdC+0YHRgtC4L9C/0YDQuNC60LDQt9CwINC00LDQu9C10LUg0LjQvNC10L3Rg9C10LzRi9C5XHJcbtCX0LDQutCw0LfRh9C40Log0L/QvtGA0YPRh9Cw0Y4sINCwINCi0J7QniDCq05BU0ggQ29tcGFuecK7INCyINC00LDQu9GM0L3QtdC50YjQtdC8INCY0YHQv9C+0LvQvdC40YLQtdC70Ywg0L/RgNC40L3QuNC80LDQtdGCINC90LBcclxu0YHQtdCx0Y8g0L7QsdGP0LfQsNGC0LXQu9GM0YHRgtCy0L4g0L7QutCw0LfRi9Cy0LDRgtGMINGO0YDQuNC00LjRh9C10YHQutC40LUg0YPRgdC70YPQs9C4INCyINC+0LHRitC10LzQtSDQuCDQvdCwINGD0YHQu9C+0LLQuNGP0YUsXHJcbtC/0YDQtdC00YPRgdC80L7RgtGA0LXQvdC90YvRhSDQvdCw0YHRgtC+0Y/RidC40Lwg0LTQvtCz0L7QstC+0YDQvtC8IOKAkyDQv9C+0YDRg9GH0LXQvdC40Y87PC9wPlxyXG4gICAgICAgICAgICA8cD7QryB7bmFtZX0sINC+0LHRj9C30YPRjtGB0Ywg0L/QvtC00YLQstC10YDQtNC40YLRjCDQv9C+0LvQvdC+0LzQvtGH0LjRjyDQsiDRgtC10YfQtdC90LjQuCA1INC60LDQu9C10L3QtNCw0YDQvdGL0YUg0LTQvdC10LkuINCSINGB0LvRg9GH0LDQtVxyXG7QvdC10L/QvtC00YLQstC10YDQttC00LXQvdC40Y8g0L/QvtC70L3QvtC80L7Rh9C40LksINGPINC/0YDQuNC90LjQvNCw0Y4g0L3QsCDRgdC10LHRjyDQstGB0LUg0YTQuNC90LDQvdGB0L7QstGL0LUg0L7QsdGP0LfQsNGC0LXQu9GM0YHRgtCy0LAg0L/QvlxyXG7QvdCw0YHRgtC+0Y/RidC10LzRgyDQlNC+0LPQvtCy0L7RgNGDINC4INC+0LHRj9C30YPRjtGB0Ywg0YHQstC+0LXQstGA0LXQvNC10L3QvdC+INC+0L/Qu9Cw0YLQuNGC0Ywg0LjRhS48L3A+XHJcbiAgICAgICAgICAgIDxwPtCd0LDRgdGC0L7Rj9GJ0LjQvCwg0L/QvtC00YLQstC10YDQttC00LDRjiDRgdCy0L7QuCDQv9C+0LvQvdC+0LzQvtGH0LjRjyDQv9C+INC30LDQutC70Y7Rh9C10L3QuNGOINC90LDRgdGC0L7Rj9GJ0LXQs9C+INCU0L7Qs9C+0LLQvtGA0LAuPC9wPlxyXG4gICAgICAgICAgICA8cD7QryDQvtC30L3QsNC60L7QvNC70LXQvSjQsCkg0Lgg0YHQvtCz0LvQsNGB0LXQvSjQsCkg0YEg0YPRgdC70L7QstC40Y/QvNC4INCe0YTQtdGA0YLRiyDQuCDQotCw0YDQuNGE0LDQvNC4INCY0YHQv9C+0LvQvdC40YLQtdC70Y8uPC9wPlxyXG4gICAgICAgICAgICA8cD7Qn9C+0YDRg9GH0LDRjiDQvtC60LDQt9Cw0YLRjCDRjtGA0LjQtNC40YfQtdGB0LrQuNC1INGD0YHQu9GD0LPQuCDQmNGB0L/QvtC70L3QuNGC0LXQu9GOOiBUT08gTkFTSCBDT01QQU5ZXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHA+0JjRgdC/0L7Qu9C90LjRgtC10LvRjiDQl9Cw0LrQsNC30YfQuNC60L7QvCDQv9C+0YDRg9GH0LXQvdC+INC+0LrQsNC30LDRgtGMINGD0YHQu9GD0LPQuCDQv9C+INGB0YLQvtC40LzQvtGB0YLQuCDRg9C60LDQt9Cw0L3QvdC+0Lkg0LJcclxuICAgICAgICAgICAgICDQvdC40LbQtdGB0LvQtdC00YPRjtGJ0LXQuSDRgtCw0LHQu9C40YbQtTo8L3A+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0ndGFibGVfcHJpY2UnPlxyXG5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgICAgICAgICA8b2wgdHlwZT0nMSc+XHJcbiAgICAgICAgICAgICAgPGxpPlx00JLRgdC1INGA0LDRgdGF0L7QtNGLLCDQvdC10L7QsdGF0L7QtNC40LzRi9C1INC00LvRjyDQuNGB0L/QvtC70L3QtdC90LjRjyDQv9C+0YDRg9GH0LXQvdC40Y8sINGPINC+0LHRj9C30YPRjtGB0Ywg0L7Qv9C70LDRh9C40LLQsNGC0Ywg0LIg0YLQtdGH0LXQvdC40LggMSAo0L7QtNC90L7Qs9C+KSDQutCw0LvQtdC90LTQsNGA0L3QvtCz0L4g0LTQvdGPLiA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cdNCvINGB0L7Qs9C70LDRiNCw0Y7RgdGMINGBINGC0LXQvCwg0YfRgtC+INCY0YHQv9C+0LvQvdC40YLQtdC70Ywg0L/RgNC40YHRgtGD0L/QsNC10YIg0Log0LjRgdC/0L7Qu9C90LXQvdC40Y4g0L7QsdGP0LfQsNGC0LXQu9GM0YHRgtCyINC/0L7RgdC70LUg0L/RgNC+0LjQt9Cy0LXQtNC10L3QuNGPINC+0L/Qu9Cw0YLRiyDRgNCw0YHRhdC+0LTQvtCyLCAg0L/RgNC10LTRg9GB0LzQvtGC0YDQtdC90L3Ri9GFINC/LjEuPC9saT5cclxuICAgICAgICAgICAgICA8bGk+XHTQryDQvtCx0Y/Qt9GD0Y7RgdGMINC/0YDQvtC40LfQstC10YHRgtC4INC+0L/Qu9Cw0YLRgyDQt9CwINC+0LrQsNC30LDQvdC90YvQtSDRg9GB0LvRg9Cz0Lgg0LIg0YDQsNC30LzQtdGA0LUge3ByaWNlV2l0aERpc2N9INGC0LXQvdCz0LUg0L3QtSDQv9C+0LfQtNC90LXQtSBfXy5fXy4yMDIx0LPQvtC00LAuIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlx00JIg0YHQu9GD0YfQsNC1INC90LDRgNGD0YjQtdC90LjRjyDRgdGA0L7QutC+0LIg0L7Qv9C70LDRgtGLINC40LvQuCDRgNCw0YHRgtC+0YDQttC10L3QuNGPINCU0L7Qs9C+0LLQvtGA0LAg0LIg0L7QtNC90L7RgdGC0L7RgNC+0L3QvdC10Lwg0L/QvtGA0Y/QtNC60LUsINC+0LHRj9C30YPRjtGB0Ywg0L7Qv9C70LDRgtC40YLRjCDQv9C+0LvQvdGD0Y4g0YHRgtC+0LjQvNC+0YHRgtGMINGD0YHQu9GD0LMg0LIg0YDQsNC30LzQtdGA0LUge3ByaWNlV2l0aERpc2N9INGC0LXQvdCz0LUg0LIg0YLQtdGH0LXQvdC40LUgMTAg0LrQsNC70LXQvdC00LDRgNC90YvRhSDQtNC90LXQuSDRgdC+INC00L3RjyDQvdCw0YHRgtGD0L/Qu9C10L3QuNGPINGC0LDQutC+0LPQviDRgdC+0LHRi9GC0LjRjy48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cdNCvINC00LDRjiDRgdC+0LPQu9Cw0YHQuNC1LCDRh9GC0L4g0LvQuNGI0LDRjtGB0Ywg0YHQutC40LTQutC4INC/0YDQtdC00L7RgdGC0LDQstC70LXQvdC90L7QuSDQmNGB0L/QvtC70L3QuNGC0LXQu9C10Lwg0LIg0YHQu9GD0YfQsNC1INC/0YDQvtGB0YDQvtGH0LrQuCDQvtC/0LvQsNGC0Ysg0LIg0YPQutCw0LfQsNC90L3Ri9C5INGB0YDQvtC6INC00LXQudGB0YLQstC40Y8g0YHQutC40LTQutC4INC4INC+0LHRj9C30YPRjtGB0Ywg0L7Qv9C70LDRgtC40YLRjCDRgdC+0LPQu9Cw0YHQvdC+INCi0LDRgNC40YTQsNC8INCY0YHQv9C+0LvQvdC40YLQtdC70Y8uIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPiAg0K8g0LjQvNC10Y4g0L/RgNCw0LLQviDQv9GA0LXQtNC+0YHRgtCw0LLQuNGC0Ywg0L/QuNGB0YzQvNC10L3QvdGL0LUg0L7QsdC+0YHQvdC+0LLQsNC90L3Ri9C1INC30LDQvNC10YfQsNC90LjRjyDQsiDRgtC10YfQtdC90LjQuCAxICjQvtC00L3QvtCz0L4pINC60LDQu9C10L3QtNCw0YDQvdC+0LPQviDQtNC90Y8g0JjRgdC/0L7Qu9C90LjRgtC10LvRjiDQv9C+INCy0YvRgdGC0LDQstC70LXQvdC90L7QvNGDINCQ0LrRgtGDINCy0YvQv9C+0LvQvdC10L3QvdGL0YUg0YDQsNCx0L7RgiDQsiDQu9C40YfQvdC+0Lwg0LrQsNCx0LjQvdC10YLQtS4gPC9saT5cclxuICAgICAgICAgICAgICA8bGk+XHTQkiDRgdC70YPRh9Cw0LUg0L3QtSDQv9GA0LXQtNC+0YHRgtCw0LLQu9C10L3QuNGPINC/0LjRgdGM0LzQtdC90L3Ri9GFINC+0LHQvtGB0L3QvtCy0LDQvdC90YvRhSDQt9Cw0LzQtdGH0LDQvdC40Lkg0LIg0YLQtdGH0LXQvdC40LggMSAo0L7QtNC90L7Qs9C+KSDQutCw0LvQtdC90LTQsNGA0L3QvtCz0L4g0LTQvdGPINC/0L4g0LLRi9GB0YLQsNCy0LvQtdC90L3QvtC80YMg0JDQutGC0YMg0LLRi9C/0L7Qu9C90LXQvdC90YvRhSDRgNCw0LHQvtGCINCyINC70LjRh9C90L7QvCDQutCw0LHQuNC90LXRgtC1INGD0YHQu9GD0LPQuCDRgdGH0LjRgtCw0Y7RgtGB0Y8g0L7QutCw0LfQsNC90L3Ri9C80Lgg0JjRgdC/0L7Qu9C90LjRgtC10LvQtdC8LCDQsCDQuNGFINGB0YLQvtC40LzQvtGB0YLRjCDRjyDQvtCx0Y/Qt9GD0Y7RgdGMINC+0L/Qu9Cw0YLQuNGC0Ywg0LIg0L/QvtC70L3QvtC8INC+0LHRitC10LzQtS48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT4gINCvINC+0LHRj9C30YPRjtGB0Ywg0L/RgNC10LTQvtGB0YLQsNCy0LjRgtGMINCY0YHQv9C+0LvQvdC40YLQtdC70Y4g0L3QsNC00LvQtdC20LDRidC40Lwg0L7QsdGA0LDQt9C+0Lwg0L7RhNC+0YDQvNC70LXQvdC90YPRjiDQtNC+0LLQtdGA0LXQvdC90L7RgdGC0Ywg0LIg0YLQtdGH0LXQvdC40LggMyAo0YLRgNC10YUpINC60LDQu9C10L3QtNCw0YDQvdGL0YUg0LTQvdC10Lkg0YHQviDQtNC90Y8g0LfQsNC60LvRjtGH0LXQvdC40Y8g0JTQvtCz0L7QstC+0YDQsC48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT4gXHTQryDQvtCx0Y/Qt9GD0Y7RgdGMINC/0YDQtdC00L7RgdGC0LDQstC70Y/RgtGMINCy0YHRjiDQvdC10L7QsdGF0L7QtNC40LzRg9GOINC40L3RhNC+0YDQvNCw0YbQuNGOINC4INC00L7QutGD0LzQtdC90YLRiyDQtNC70Y8g0JjRgdC/0L7Qu9C90LjRgtC10LvRjzwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPiDQkiDRgdC70YPRh9Cw0LUg0L3QtSDQv9GA0LXQtNC+0YHRgtCw0LLQu9C10L3QuNGPINC80L3QvtC5INCyINGC0LXRh9C10L3QuNC4IDUg0LrQsNC70LXQvdC00LDRgNC90YvRhSDQtNC90LXQuSDQtNC+0LrRg9C80LXQvdGC0L7QsiDQuCDQuNC90YTQvtGA0LzQsNGG0LjQuCDQtNC70Y8g0JjRgdC/0L7Qu9C90LjRgtC10LvRjywg0YPRgdC70YPQs9CwINGB0YfQuNGC0LDQtdGC0YHRjyDQvtC60LDQt9Cw0L3QvdC+0LksINCwINC40YUg0YHRgtC+0LjQvNC+0YHRgtGMINGPINC+0LHRj9C30YPRjtGB0Ywg0L7Qv9C70LDRgtC40YLRjCDQsiDQv9C+0LvQvdC+0Lwg0L7QsdGK0LXQvNC1LiAgPC9saT5cclxuICAgICAgICAgICAgICA8bGk+0K8g0L/QvtC00YLQstC10YDQttC00LDRjiwg0YfRgtC+INC90LDQv9GA0LDQstC70LXQvdC40LUg0LzQvdC+0Lkg0LTQsNC90L3QvtCz0L4g0JTQvtCz0L7QstC+0YDQsC3Qv9C+0YDRg9GH0LXQvdC40Y8g0Y/QstC70Y/QtdGC0YHRjyDQsNC60YbQtdC/0YLQvtC8INCf0YPQsdC70LjRh9C90L7QuSDQntGE0LXRgNGC0YsgPC9saT5cclxuICAgICAgICAgICAgICA8bGk+0K8g0YHQvtCz0LvQsNGI0LDRjtGB0Ywg0YHQviDRgdC70LXQtNGD0Y7RidC40LzQuCDRg9GB0LvQvtCy0LjRj9C80Lg6XHJcbiAgICAgICAgICAgICAgICA8b2w+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT7Qn9C+0YHQu9C1INC/0L7QtNC/0LjRgdCw0L3QuNGPINC80L3QvtC5INCU0L7Qs9C+0LLQvtGA0LAt0L/QvtGA0YPRh9C10L3QuNGPLCDQvtC9INC90LDQv9GA0LDQstC70Y/QtdGC0YHRjyDQvdCwINGD0YLQstC10YDQttC00LXQvdC40LUg0JjRgdC/0L7Qu9C90LjRgtC10LvRji4g0JXRgdC70Lgg0JjRgdC/0L7Qu9C90LjRgtC10LvRjCDQv9GA0LjQvdC40LzQsNC10YIg0LfQsNC60LDQtyDQvdCwINGD0YHQu9C+0LLQuNGP0YUsINC+0YLRgNCw0LbQtdC90L3Ri9GFINCyINGD0LrQsNC30LDQvdC90L7QvCDQtNC+0LrRg9C80LXQvdGC0LUsINC+0L0g0L/RgNC40YHRgtGD0L/QsNC10YIg0Log0LjRgdC/0L7Qu9C90LXQvdC40Y4gINC/0LXRgNCy0L7Qs9C+INGN0YLQsNC/0LAsINC/0YDQtdC00YPRgdC80L7RgtGA0LXQvdC90L7Qs9C+INC/LiA3LjMuMS4g0J7RhNC10YDRgtGLLiA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+0JIg0YHQu9GD0YfQsNC1INC90LXRgdC+0LPQu9Cw0YHQuNGPINGBINGD0YHQu9C+0LLQuNGP0LzQuCDQlNC+0LPQvtCy0L7RgNCwLdC/0L7RgNGD0YfQtdC90LjRjywg0JjRgdC/0L7Qu9C90LjRgtC10LvRjCDQvdCw0L/RgNCw0LLQu9GP0LXRgiDQvdCwINC/0L7QtNC/0LjRgdCw0L3QuNC1INC90L7QstGL0Lkg0JTQvtCz0L7QstC+0YAt0L/QvtGA0YPRh9C10L3QuNGPINC40LvQuCDRg9Cy0LXQtNC+0LzQu9GP0LXRgiDQvtCxINC+0YLQutCw0LfQtSDQvtGCINC/0YDQtdC00L7RgdGC0LDQstC70LXQvdC40Y8g0YPRgdC70YPQsy48L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+0J/RgNC4INC/0L7Qu9GD0YfQtdC90LjQuCDQvNC90L7QuSDQlNC+0LPQvtCy0L7RgNCwLdC/0L7RgNGD0YfQtdC90LjRjyDRgSDQstC90LXRgdC10L3QvdGL0LzQuCDQutC+0YDRgNC10LrRgtC40YDQvtCy0LrQsNC80Lgg0JjRgdC/0L7Qu9C90LjRgtC10LvRjywg0Y8g0L7QsdGP0LfRg9GO0YHRjCDQvtC30L3QsNC60L7QvNC40YLRjNGB0Y8g0YEg0YPRgdC70L7QstC40Y/QvNC4INCU0L7Qs9C+0LLQvtGA0LAt0L/QvtGA0YPRh9C10L3QuNGPLCAg0LIg0YHQu9GD0YfQsNC1INGB0L7Qs9C70LDRgdC40Y8g0YEg0YPRgdC70L7QstC40Y/QvNC4LCDQvtGC0YDQsNC20LXQvdC90YvQvNC4INCyINCU0L7Qs9C+0LLQvtGA0LUt0L/QvtGA0YPRh9C10L3QuNGPLCDRjyDQv9C+0LTQv9C40YHRi9Cy0LDRjiDRg9C60LDQt9Cw0L3QvdGL0Lkg0LTQvtC60YPQvNC10L3RgiDQv9C+0YHRgtCw0LLQuNCyINCz0LDQu9C+0YfQutGDINCyINCz0YDQsNGE0LUg4oCc4piR4oCdLiDQn9C+0YHQu9C1INGH0LXQs9C+LCDQmNGB0L/QvtC70L3QuNGC0LXQu9GMINC/0YDQuNGB0YLRg9C/0LDQtdGCINC6INC40YHQv9C+0LvQvdC10L3QuNGOICDQv9C10YDQstC+0LPQviDRjdGC0LDQv9CwLCDQv9GA0LXQtNGD0YHQvNC+0YLRgNC10L3QvdC+0LPQviDQvy4gNi4zLjEuINCe0YTQtdGA0YLRiy48L2xpPiAgXHJcbiAgICAgICAgICAgICAgICAgIDxsaT7QmNGB0L/QvtC70L3QuNGC0LXQu9GMINC/0YDQtdC00L7RgdGC0LDQstC70Y/QtdGCINC80L3QtSAg0YPRgdC70YPQs9C4INC90LAg0L7RgdC90L7QstCw0L3QuNC4INC00L7QutGD0LzQtdC90YLQvtCyLCDRgdCw0LzQvtGB0YLQvtGP0YLQtdC70YzQvdC+INC30LDQs9GA0YPQttC10L3QvdGL0YUg0LzQvdC+0Lkg0L3QsCDRgdCw0LnRgtC1INCY0YHQv9C+0LvQvdC40YLQtdC70Y8g0LjQu9C4INC90LDQv9GA0LDQstC70LXQvdC90YvRhSDQt9Cw0LrQsNC30L3Ri9C8INC/0LjRgdGM0LzQvtC8INGBINGD0LLQtdC00L7QvNC70LXQvdC40LXQvCDQviDQstGA0YPRh9C10L3QuNC4INC/0L4g0Y7RgNC40LTQuNGH0LXRgdC60L7QvNGDINCw0LTRgNC10YHRgyDQmNGB0L/QvtC70L3QuNGC0LXQu9GPLiDQkiDRgdC70YPRh9Cw0LUg0L7RgtGB0YPRgtGB0YLQstC40Y8g0L7RgtC80LXRgtC60Lgg0L4g0LLRgNGD0YfQtdC90LjQuCDQmNGB0L/QvtC70L3QuNGC0LXQu9GOLCDRgtCw0LrQuNC1INC00L7QutGD0LzQtdC90YLRiyDQv9GA0LjQt9C90LDRjtGC0YHRjyDQvdC1INC90LDQv9GA0LDQstC70LXQvdC90YvQvNC4INCY0YHQv9C+0LvQvdC40YLQtdC70Y4uPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPtCSINGB0LvRg9GH0LDQtSDQuNC30LzQtdC90LXQvdC40Lkg0LIg0LrQvtC90YLQsNC60YLQvdGL0YUg0LTQsNC90L3Ri9GFL9GA0LXQutCy0LjQt9C40YLQsNGFLCDQutC+0YLQvtGA0YvQtSDQmNGB0L/QvtC70L3QuNGC0LXQu9GMINC40YHQv9C+0LvRjNC30YPQtdGCINC4L9C40LvQuCDQvNC+0LbQtdGCINC40YHQv9C+0LvRjNC30L7QstCw0YLRjCDQtNC70Y8g0L7RgtC/0YDQsNCy0LrQuCDRg9Cy0LXQtNC+0LzQu9C10L3QuNGPICjQvdCw0L/RgNC40LzQtdGALCDQvdC+INC90LUg0YLQvtC70YzQutC+LCDQuNC30LzQtdC90LXQvdC40LUg0LTQvtC80LDRiNC90LXQs9C+INC40LvQuCDRgNCw0LHQvtGH0LXQs9C+INCw0LTRgNC10YHQsCwg0L3QvtC80LXRgNCwINC80L7QsdC40LvRjNC90L7Qs9C+INGC0LXQu9C10YTQvtC90LAsINGN0LvQtdC60YLRgNC+0L3QvdC+0LPQviDQv9C+0YfRgtC+0LLQvtCz0L4g0LDQtNGA0LXRgdCwINC4INGCLtC0LiksICDRjyDQvtCx0Y/Qt9GD0Y7RgdGMINC90LXQvNC10LTQu9C10L3QvdC+ICjQvdC1INC/0L7Qt9C00L3QtdC1LCDRgdC70LXQtNGD0Y7RidC10LPQviDQtNC90Y8sINGB0L4g0LTQvdGPINGC0LDQutC+0LPQviDQuNC30LzQtdC90LXQvdC40Y8pINGD0LLQtdC00L7QvNC40YLRjCDQvtCxINC40LfQvNC10L3QtdC90LjRj9GFINCY0YHQv9C+0LvQvdC40YLQtdC70Y8uINCf0YDQuCDQvtGC0YHRg9GC0YHRgtCy0LjQuCDQv9C40YHRjNC80LXQvdC90L7Qs9C+INGD0LLQtdC00L7QvNC70LXQvdC40Y8g0L7QsSDQuNC30LzQtdC90LXQvdC40Lgg0LTQsNC90L3Ri9GFLCDRgNCw0L3QtdC1INC/0YDQtdC00L7RgdGC0LDQstC70LXQvdC90LDRjyDQuNC90YTQvtGA0LzQsNGG0LjRjyDRgdGH0LjRgtCw0LXRgtGB0Y8g0LDQutGC0YPQsNC70YzQvdC+0Lkg0Lgg0LTQvtGB0YLQvtCy0LXRgNC90L7QuS48L2xpPiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvb2w+XHJcblxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9saT5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9vbD5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRG9nb3ZvciJdLCJzb3VyY2VSb290IjoiIn0=