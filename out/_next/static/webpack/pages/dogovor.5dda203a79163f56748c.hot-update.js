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
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                  children: "1. \u042E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044F."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 78,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 81,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
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
              lineNumber: 89,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: "\u042F \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u044E\u0441\u044C \u0441 \u0442\u0435\u043C, \u0447\u0442\u043E \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C \u043F\u0440\u0438\u0441\u0442\u0443\u043F\u0430\u0435\u0442 \u043A \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044E \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432 \u043F\u043E\u0441\u043B\u0435 \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u043E\u043F\u043B\u0430\u0442\u044B \u0440\u0430\u0441\u0445\u043E\u0434\u043E\u0432, \u043F\u0440\u0435\u0434\u0443\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u043D\u044B\u0445 \u043F.1."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: ["\u042F \u043E\u0431\u044F\u0437\u0443\u044E\u0441\u044C \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0441\u0442\u0438 \u043E\u043F\u043B\u0430\u0442\u0443 \u0437\u0430 \u043E\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0435 \u0443\u0441\u043B\u0443\u0433\u0438 \u0432 \u0440\u0430\u0437\u043C\u0435\u0440\u0435 ", priceWithDisc, "\u0442\u0435\u043D\u0433\u0435 \u043D\u0435 \u043F\u043E\u0437\u0434\u043D\u0435\u0435 __.__.2021\u0433\u043E\u0434\u0430."]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: ["\u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u043D\u0430\u0440\u0443\u0448\u0435\u043D\u0438\u044F \u0441\u0440\u043E\u043A\u043E\u0432 \u043E\u043F\u043B\u0430\u0442\u044B \u0438\u043B\u0438 \u0440\u0430\u0441\u0442\u043E\u0440\u0436\u0435\u043D\u0438\u044F \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u0430 \u0432 \u043E\u0434\u043D\u043E\u0441\u0442\u043E\u0440\u043E\u043D\u043D\u0435\u043C \u043F\u043E\u0440\u044F\u0434\u043A\u0435, \u043E\u0431\u044F\u0437\u0443\u044E\u0441\u044C \u043E\u043F\u043B\u0430\u0442\u0438\u0442\u044C \u043F\u043E\u043B\u043D\u0443\u044E \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0443\u0441\u043B\u0443\u0433 \u0432 \u0440\u0430\u0437\u043C\u0435\u0440\u0435 ", priceWithDisc, "\u0442\u0435\u043D\u0433\u0435 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 10 \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u043D\u044B\u0445 \u0434\u043D\u0435\u0439 \u0441\u043E \u0434\u043D\u044F \u043D\u0430\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u044F \u0442\u0430\u043A\u043E\u0433\u043E \u0441\u043E\u0431\u044B\u0442\u0438\u044F."]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: "\u042F \u0434\u0430\u044E \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435, \u0447\u0442\u043E \u043B\u0438\u0448\u0430\u044E\u0441\u044C \u0441\u043A\u0438\u0434\u043A\u0438 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u043E\u0439 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u0435\u043C \u0432 \u0441\u043B\u0443\u0447\u0430\u0435 \u043F\u0440\u043E\u0441\u0440\u043E\u0447\u043A\u0438 \u043E\u043F\u043B\u0430\u0442\u044B \u0432 \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0439 \u0441\u0440\u043E\u043A \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0441\u043A\u0438\u0434\u043A\u0438 \u0438 \u043E\u0431\u044F\u0437\u0443\u044E\u0441\u044C \u043E\u043F\u043B\u0430\u0442\u0438\u0442\u044C \u0441\u043E\u0433\u043B\u0430\u0441\u043D\u043E \u0422\u0430\u0440\u0438\u0444\u0430\u043C \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044F."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: "\u042F \u0438\u043C\u0435\u044E \u043F\u0440\u0430\u0432\u043E \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043F\u0438\u0441\u044C\u043C\u0435\u043D\u043D\u044B\u0435 \u043E\u0431\u043E\u0441\u043D\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0437\u0430\u043C\u0435\u0447\u0430\u043D\u0438\u044F \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0438 1 (\u043E\u0434\u043D\u043E\u0433\u043E) \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u043D\u043E\u0433\u043E \u0434\u043D\u044F \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044E \u043F\u043E \u0432\u044B\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u043E\u043C\u0443 \u0410\u043A\u0442\u0443 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u044B\u0445 \u0440\u0430\u0431\u043E\u0442 \u0432 \u043B\u0438\u0447\u043D\u043E\u043C \u043A\u0430\u0431\u0438\u043D\u0435\u0442\u0435."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: "\u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u043D\u0435 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043F\u0438\u0441\u044C\u043C\u0435\u043D\u043D\u044B\u0445 \u043E\u0431\u043E\u0441\u043D\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u0437\u0430\u043C\u0435\u0447\u0430\u043D\u0438\u0439 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0438 1 (\u043E\u0434\u043D\u043E\u0433\u043E) \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u043D\u043E\u0433\u043E \u0434\u043D\u044F \u043F\u043E \u0432\u044B\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u043E\u043C\u0443 \u0410\u043A\u0442\u0443 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u044B\u0445 \u0440\u0430\u0431\u043E\u0442 \u0432 \u043B\u0438\u0447\u043D\u043E\u043C \u043A\u0430\u0431\u0438\u043D\u0435\u0442\u0435 \u0443\u0441\u043B\u0443\u0433\u0438 \u0441\u0447\u0438\u0442\u0430\u044E\u0442\u0441\u044F \u043E\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u043C\u0438 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u0435\u043C, \u0430 \u0438\u0445 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u044F \u043E\u0431\u044F\u0437\u0443\u044E\u0441\u044C \u043E\u043F\u043B\u0430\u0442\u0438\u0442\u044C \u0432 \u043F\u043E\u043B\u043D\u043E\u043C \u043E\u0431\u044A\u0435\u043C\u0435."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: "\u042F \u043E\u0431\u044F\u0437\u0443\u044E\u0441\u044C \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044E \u043D\u0430\u0434\u043B\u0435\u0436\u0430\u0449\u0438\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u0443\u044E \u0434\u043E\u0432\u0435\u0440\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0438 3 (\u0442\u0440\u0435\u0445) \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u043D\u044B\u0445 \u0434\u043D\u0435\u0439 \u0441\u043E \u0434\u043D\u044F \u0437\u0430\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u0430."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: "\u042F \u043E\u0431\u044F\u0437\u0443\u044E\u0441\u044C \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0442\u044C \u0432\u0441\u044E \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u0443\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u0438 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B \u0434\u043B\u044F \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044F"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: "\u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u043D\u0435 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043C\u043D\u043E\u0439 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0438 5 \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u043D\u044B\u0445 \u0434\u043D\u0435\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432 \u0438 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u0434\u043B\u044F \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044F, \u0443\u0441\u043B\u0443\u0433\u0430 \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044F \u043E\u043A\u0430\u0437\u0430\u043D\u043D\u043E\u0439, \u0430 \u0438\u0445 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u044F \u043E\u0431\u044F\u0437\u0443\u044E\u0441\u044C \u043E\u043F\u043B\u0430\u0442\u0438\u0442\u044C \u0432 \u043F\u043E\u043B\u043D\u043E\u043C \u043E\u0431\u044A\u0435\u043C\u0435."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: "\u042F \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u044E, \u0447\u0442\u043E \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043C\u043D\u043E\u0439 \u0434\u0430\u043D\u043D\u043E\u0433\u043E \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u0430-\u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u044F \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0430\u043A\u0446\u0435\u043F\u0442\u043E\u043C \u041F\u0443\u0431\u043B\u0438\u0447\u043D\u043E\u0439 \u041E\u0444\u0435\u0440\u0442\u044B"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: ["\u042F \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u044E\u0441\u044C \u0441\u043E \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u043C\u0438 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u043C\u0438:", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ol", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: "\u041F\u043E\u0441\u043B\u0435 \u043F\u043E\u0434\u043F\u0438\u0441\u0430\u043D\u0438\u044F \u043C\u043D\u043E\u0439 \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u0430-\u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u044F, \u043E\u043D \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043D\u0430 \u0443\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044E. \u0415\u0441\u043B\u0438 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442 \u0437\u0430\u043A\u0430\u0437 \u043D\u0430 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u0445, \u043E\u0442\u0440\u0430\u0436\u0435\u043D\u043D\u044B\u0445 \u0432 \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u043E\u043C \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0435, \u043E\u043D \u043F\u0440\u0438\u0441\u0442\u0443\u043F\u0430\u0435\u0442 \u043A \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044E \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u044D\u0442\u0430\u043F\u0430, \u043F\u0440\u0435\u0434\u0443\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u043D\u043E\u0433\u043E \u043F. 7.3.1. \u041E\u0444\u0435\u0440\u0442\u044B."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 134,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: "\u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u043D\u0435\u0441\u043E\u0433\u043B\u0430\u0441\u0438\u044F \u0441 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u043C\u0438 \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u0430-\u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u044F, \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u0442 \u043D\u0430 \u043F\u043E\u0434\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043D\u043E\u0432\u044B\u0439 \u0414\u043E\u0433\u043E\u0432\u043E\u0440-\u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u044F \u0438\u043B\u0438 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u044F\u0435\u0442 \u043E\u0431 \u043E\u0442\u043A\u0430\u0437\u0435 \u043E\u0442 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0443\u0441\u043B\u0443\u0433."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 139,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: "\u041F\u0440\u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0438 \u043C\u043D\u043E\u0439 \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u0430-\u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u044F \u0441 \u0432\u043D\u0435\u0441\u0435\u043D\u043D\u044B\u043C\u0438 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u043A\u0430\u043C\u0438 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044F, \u044F \u043E\u0431\u044F\u0437\u0443\u044E\u0441\u044C \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u0438\u0442\u044C\u0441\u044F \u0441 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u043C\u0438 \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u0430-\u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u044F, \u0432 \u0441\u043B\u0443\u0447\u0430\u0435 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u044F \u0441 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u043C\u0438, \u043E\u0442\u0440\u0430\u0436\u0435\u043D\u043D\u044B\u043C\u0438 \u0432 \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u0435-\u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u044F, \u044F \u043F\u043E\u0434\u043F\u0438\u0441\u044B\u0432\u0430\u044E \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442 \u043F\u043E\u0441\u0442\u0430\u0432\u0438\u0432 \u0433\u0430\u043B\u043E\u0447\u043A\u0443 \u0432 \u0433\u0440\u0430\u0444\u0435 \u201C\u2611\u201D. \u041F\u043E\u0441\u043B\u0435 \u0447\u0435\u0433\u043E, \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C \u043F\u0440\u0438\u0441\u0442\u0443\u043F\u0430\u0435\u0442 \u043A \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044E \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u044D\u0442\u0430\u043F\u0430, \u043F\u0440\u0435\u0434\u0443\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u043D\u043E\u0433\u043E \u043F. 6.3.1. \u041E\u0444\u0435\u0440\u0442\u044B."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 142,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: "\u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u043C\u043D\u0435 \u0443\u0441\u043B\u0443\u0433\u0438 \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0438 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432, \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043D\u044B\u0445 \u043C\u043D\u043E\u0439 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044F \u0438\u043B\u0438 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0445 \u0437\u0430\u043A\u0430\u0437\u043D\u044B\u043C \u043F\u0438\u0441\u044C\u043C\u043E\u043C \u0441 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0435\u043C \u043E \u0432\u0440\u0443\u0447\u0435\u043D\u0438\u0438 \u043F\u043E \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u043E\u043C\u0443 \u0430\u0434\u0440\u0435\u0441\u0443 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044F. \u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u044F \u043E\u0442\u043C\u0435\u0442\u043A\u0438 \u043E \u0432\u0440\u0443\u0447\u0435\u043D\u0438\u0438 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044E, \u0442\u0430\u043A\u0438\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B \u043F\u0440\u0438\u0437\u043D\u0430\u044E\u0442\u0441\u044F \u043D\u0435 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u043C\u0438 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044E."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 147,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: "\u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439 \u0432 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445/\u0440\u0435\u043A\u0432\u0438\u0437\u0438\u0442\u0430\u0445, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u0438/\u0438\u043B\u0438 \u043C\u043E\u0436\u0435\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0434\u043B\u044F \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F (\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u043D\u043E \u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E, \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u0434\u043E\u043C\u0430\u0448\u043D\u0435\u0433\u043E \u0438\u043B\u0438 \u0440\u0430\u0431\u043E\u0447\u0435\u0433\u043E \u0430\u0434\u0440\u0435\u0441\u0430, \u043D\u043E\u043C\u0435\u0440\u0430 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u043E\u0433\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430, \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0433\u043E \u043F\u043E\u0447\u0442\u043E\u0432\u043E\u0433\u043E \u0430\u0434\u0440\u0435\u0441\u0430 \u0438 \u0442.\u0434.), \u044F \u043E\u0431\u044F\u0437\u0443\u044E\u0441\u044C \u043D\u0435\u043C\u0435\u0434\u043B\u0435\u043D\u043D\u043E (\u043D\u0435 \u043F\u043E\u0437\u0434\u043D\u0435\u0435, \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0433\u043E \u0434\u043D\u044F, \u0441\u043E \u0434\u043D\u044F \u0442\u0430\u043A\u043E\u0433\u043E \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F) \u0443\u0432\u0435\u0434\u043E\u043C\u0438\u0442\u044C \u043E\u0431 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F\u0445 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044F. \u041F\u0440\u0438 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0438 \u043F\u0438\u0441\u044C\u043C\u0435\u043D\u043D\u043E\u0433\u043E \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F \u043E\u0431 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0438 \u0434\u0430\u043D\u043D\u044B\u0445, \u0440\u0430\u043D\u0435\u0435 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044F \u0430\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u043E\u0439 \u0438 \u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u043D\u043E\u0439."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 152,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 133,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: "\u042F \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u043B\u0435\u043D(\u0430), \u0447\u0442\u043E \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u043F\u0443\u043D\u043A\u0442\u0430\u043C\u0438 1-1, 3 \u0441\u0442\u0430\u0442\u044C\u0438 152 \u0413\u0440\u0430\u0436\u0434\u0430\u043D\u0441\u043A\u043E\u0433\u043E \u041A\u043E\u0434\u0435\u043A\u0441\u0430 \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0438 \u041A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D \u041F\u0438\u0441\u044C\u043C\u0435\u043D\u043D\u0430\u044F \u0444\u043E\u0440\u043C\u0430 \u0441\u0434\u0435\u043B\u043A\u0438 \u0441\u043E\u0432\u0435\u0440\u0448\u0430\u0435\u0442\u0441\u044F \u043D\u0430 \u0431\u0443\u043C\u0430\u0436\u043D\u043E\u043C \u043D\u043E\u0441\u0438\u0442\u0435\u043B\u0435 \u0438\u043B\u0438 \u0432 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u0444\u043E\u0440\u043C\u0435. \u041A \u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044E \u0441\u0434\u0435\u043B\u043A\u0438 \u0432 \u043F\u0438\u0441\u044C\u043C\u0435\u043D\u043D\u043E\u0439 \u0444\u043E\u0440\u043C\u0435 \u043F\u0440\u0438\u0440\u0430\u0432\u043D\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u043E\u0431\u043C\u0435\u043D \u043F\u0438\u0441\u044C\u043C\u0430\u043C\u0438, \u0442\u0435\u043B\u0435\u0433\u0440\u0430\u043C\u043C\u0430\u043C\u0438, \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u043E\u0433\u0440\u0430\u043C\u043C\u0430\u043C\u0438, \u0442\u0435\u043B\u0435\u0442\u0430\u0439\u043F\u043E\u0433\u0440\u0430\u043C\u043C\u0430\u043C\u0438, \u0444\u0430\u043A\u0441\u0430\u043C\u0438, \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u043C\u0438 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u043C\u0438, \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u043C\u0438 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F\u043C\u0438 \u0438\u043B\u0438 \u0438\u043D\u044B\u043C\u0438 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u043C\u0438, \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u044E\u0449\u0438\u043C\u0438 \u0441\u0443\u0431\u044A\u0435\u043A\u0442\u043E\u0432 \u0438 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u0435 \u0438\u0445 \u0432\u043E\u043B\u0435\u0438\u0437\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u044F."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 162,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: "\u041F\u043E\u0434\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u0430-\u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u044F \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u043F.1-1 \u0441\u0442.152 \u0413\u041A \u0420\u041A \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u0435\u043C \u0441\u0434\u0435\u043B\u043A\u0438 \u0432 \u043F\u0438\u0441\u044C\u043C\u0435\u043D\u043D\u043E\u0439 \u0444\u043E\u0440\u043C\u0435. \u0414\u043E\u0433\u043E\u0432\u043E\u0440-\u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u044F \u043F\u043E\u0434\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u043F\u0443\u0442\u0435\u043C \u043F\u0440\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0433\u0430\u043B\u043E\u0447\u043A\u0438 \u0432 \u0433\u0440\u0430\u0444\u0435 \u201C\u2611\u201D \u0438 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0421\u041C\u0421-\u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F \u0441 \u0447\u0435\u0442\u044B\u0440\u0435\u0445\u0437\u043D\u0430\u0447\u043D\u044B\u043C \u043A\u043E\u0434\u043E\u043C \u043D\u0430 \u043D\u043E\u043C\u0435\u0440"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 170,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
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
            lineNumber: 182,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
            children: "\u0414\u0435\u0439\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0439 \u0432 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0430\u0445:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C \u0424\u0418\u041E"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "\u041F\u043E\u0434\u043F\u0438\u0441\u044C"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 187,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "right_side",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
            children: "\u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 191,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
            children: "\u0422\u041E\u041E \xABNASH Company\xBB"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 193,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "\u0411\u0418\u041D: 100740009653"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "\u0410\u0434\u0440\u0435\u0441: \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u041A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D,"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "\u0433. \u0410\u043B\u043C\u0430\u0442\u044B, \u0443\u043B. \u0422\u043E\u043B\u0435 \u0431\u0438 101"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "\u0422\u0435\u043B: +7 (727) 2501-500"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 198,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "\u0420/\u0441\u0447 KZ728560000004207818"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 199,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "\u0412 \u0410\u041E \xAB\u0411\u0430\u043D\u043A \u0426\u0435\u043D\u0442\u0440 \u041A\u0440\u0435\u0434\u0438\u0442\xBB"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "\u0411\u0418\u041A KCJBKZKX"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 202,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 180,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZG9nb3Zvci5qcyJdLCJuYW1lcyI6WyJEb2dvdm9yIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJuYW1lIiwic2V0TmFtZSIsInR5cGUiLCJzZXRUeXBlIiwiY29tcGFueU5hbWUiLCJzZXRDb21wYW55TmFtZSIsInByaWNlV2l0aERpc2MiLCJzZXRQcmljZSIsInRvZGF5IiwiRGF0ZSIsImRheSIsImdldERhdGUiLCJtb250aCIsImdldE1vbnRoIiwieWVhciIsImdldEZ1bGxZZWFyIiwicGFyc2VEYXkiLCJwYXJzZU1vbnRoIiwicGFyc2VJbnQiLCJ0b2RheVBhcnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUNBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFDcEIsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4Qjs7QUFEb0Isa0JBR1BDLCtDQUFRLENBQUMsYUFBRCxDQUhEO0FBQUEsTUFFYkMsSUFGYTtBQUFBLE1BR2xCQyxPQUhrQjs7QUFBQSxtQkFLUEYsK0NBQVEsQ0FBQyxTQUFELENBTEQ7QUFBQSxNQUliRyxJQUphO0FBQUEsTUFLbEJDLE9BTGtCOztBQUFBLG1CQU9BSiwrQ0FBUSxDQUFDLFVBQUQsQ0FQUjtBQUFBLE1BTWJLLFdBTmE7QUFBQSxNQU9sQkMsY0FQa0I7O0FBQUEsbUJBU05OLCtDQUFRLENBQUMsTUFBRCxDQVRGO0FBQUEsTUFRYk8sYUFSYTtBQUFBLE1BU2xCQyxRQVRrQjs7QUFXcEIsTUFBTUMsS0FBSyxHQUFHLElBQUlDLElBQUosRUFBZDtBQUNBLE1BQU1DLEdBQUcsR0FBR0YsS0FBSyxDQUFDRyxPQUFOLEVBQVo7QUFDQSxNQUFNQyxLQUFLLEdBQUdKLEtBQUssQ0FBQ0ssUUFBTixLQUFtQixDQUFqQztBQUNBLE1BQU1DLElBQUksR0FBR04sS0FBSyxDQUFDTyxXQUFOLEVB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dXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5jb25zdCBEb2dvdm9yID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgW25hbWUsXHJcbiAgICBzZXROYW1lXSA9IHVzZVN0YXRlKCfQpNCw0LzQuNC70LjRjyDQmNC80Y8nKVxyXG4gIGNvbnN0IFt0eXBlLFxyXG4gICAgc2V0VHlwZV0gPSB1c2VTdGF0ZSgn0K7RgCDQu9C40YbQvicpXHJcbiAgY29uc3QgW2NvbXBhbnlOYW1lLFxyXG4gICAgc2V0Q29tcGFueU5hbWVdID0gdXNlU3RhdGUoJ9Ca0L7QvNC/0LDQvdC40Y8nKVxyXG4gIGNvbnN0IFtwcmljZVdpdGhEaXNjLFxyXG4gICAgc2V0UHJpY2VdID0gdXNlU3RhdGUoMjAwMDAwKVxyXG5cclxuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgY29uc3QgZGF5ID0gdG9kYXkuZ2V0RGF0ZSgpXHJcbiAgY29uc3QgbW9udGggPSB0b2RheS5nZXRNb250aCgpICsgMVxyXG4gIGNvbnN0IHllYXIgPSB0b2RheS5nZXRGdWxsWWVhcigpXHJcblxyXG4gIGNvbnN0IHBhcnNlRGF5ID0gZGF5IDwgMTBcclxuICAgID8gXCIwXCIgKyBkYXlcclxuICAgIDogZGF5XHJcbiAgY29uc3QgcGFyc2VNb250aCA9IHBhcnNlSW50KG1vbnRoKSA+IDEwXHJcbiAgICA/IFwiMCBcIiArIG1vbnRoXHJcbiAgICA6IFwiMFwiICsgbW9udGhcclxuXHJcbiAgY29uc3QgdG9kYXlQYXJzZSA9IHBhcnNlRGF5ICsgXCIuXCIgKyBwYXJzZU1vbnRoICsgXCIuXCIgKyB5ZWFyICsgXCLQsy5cIjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9OTYwXCIvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdkb2dvdm9yJz5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2RvZ292b3JfX2hlYWRlcic+XHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3RvcCc+XHJcbiAgICAgICAgICAgIDxwPtCU0L7Qs9C+0LLQvtGALdC/0L7RgNGD0YfQtdC90LjRjyDihJY8L3A+XHJcbiAgICAgICAgICAgIDxwPtCaINCf0KPQkdCb0JjQp9Cd0J7QnNCjLdCU0J7Qk9Ce0JLQntCg0KMg0J7QpNCV0KDQotCrIOKEljwvcD5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nYm90dG9tJz5cclxuICAgICAgICAgICAgPGI+0LMuINCQ0LvQvNCw0YLRizwvYj5cclxuICAgICAgICAgICAgPHA+e3RvZGF5UGFyc2V9PC9wPlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdkb2dvdm9yX19ib2R5Jz5cclxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICAgICAgICAgIDxwPtCvIHtuYW1lfSwg0LTQtdC50YHRgtCy0YPRjtGJ0LjQuSjQsNGPKSDQsiDQuNC90YLQtdGA0LXRgdCw0YUge2NvbXBhbnlOYW1lfSwg0LTQtdC50YHRgtCy0YPRjtGJ0LjQuSDQvdCwINC+0YHQvdC+0LLQsNC90LjQuCDQtNC+0LLQtdGA0LXQvdC90L7RgdGC0Lgv0L/RgNC40LrQsNC30LAg0LTQsNC70LXQtSDQuNC80LXQvdGD0LXQvNGL0Llcclxu0JfQsNC60LDQt9GH0LjQuiDQv9C+0YDRg9GH0LDRjiwg0LAg0KLQntCeIMKrTkFTSCBDb21wYW55wrsg0LIg0LTQsNC70YzQvdC10LnRiNC10Lwg0JjRgdC/0L7Qu9C90LjRgtC10LvRjCDQv9GA0LjQvdC40LzQsNC10YIg0L3QsFxyXG7RgdC10LHRjyDQvtCx0Y/Qt9Cw0YLQtdC70YzRgdGC0LLQviDQvtC60LDQt9GL0LLQsNGC0Ywg0Y7RgNC40LTQuNGH0LXRgdC60LjQtSDRg9GB0LvRg9Cz0Lgg0LIg0L7QsdGK0LXQvNC1INC4INC90LAg0YPRgdC70L7QstC40Y/RhSxcclxu0L/RgNC10LTRg9GB0LzQvtGC0YDQtdC90L3Ri9GFINC90LDRgdGC0L7Rj9GJ0LjQvCDQtNC+0LPQvtCy0L7RgNC+0Lwg4oCTINC/0L7RgNGD0YfQtdC90LjRjzs8L3A+XHJcbiAgICAgICAgICAgIDxwPtCvIHtuYW1lfSwg0L7QsdGP0LfRg9GO0YHRjCDQv9C+0LTRgtCy0LXRgNC00LjRgtGMINC/0L7Qu9C90L7QvNC+0YfQuNGPINCyINGC0LXRh9C10L3QuNC4IDUg0LrQsNC70LXQvdC00LDRgNC90YvRhSDQtNC90LXQuS4g0JIg0YHQu9GD0YfQsNC1XHJcbtC90LXQv9C+0LTRgtCy0LXRgNC20LTQtdC90LjRjyDQv9C+0LvQvdC+0LzQvtGH0LjQuSwg0Y8g0L/RgNC40L3QuNC80LDRjiDQvdCwINGB0LXQsdGPINCy0YHQtSDRhNC40L3QsNC90YHQvtCy0YvQtSDQvtCx0Y/Qt9Cw0YLQtdC70YzRgdGC0LLQsCDQv9C+XHJcbtC90LDRgdGC0L7Rj9GJ0LXQvNGDINCU0L7Qs9C+0LLQvtGA0YMg0Lgg0L7QsdGP0LfRg9GO0YHRjCDRgdCy0L7QtdCy0YDQtdC80LXQvdC90L4g0L7Qv9C70LDRgtC40YLRjCDQuNGFLjwvcD5cclxuICAgICAgICAgICAgPHA+0J3QsNGB0YLQvtGP0YnQuNC8LCDQv9C+0LTRgtCy0LXRgNC20LTQsNGOINGB0LLQvtC4INC/0L7Qu9C90L7QvNC+0YfQuNGPINC/0L4g0LfQsNC60LvRjtGH0LXQvdC40Y4g0L3QsNGB0YLQvtGP0YnQtdCz0L4g0JTQvtCz0L7QstC+0YDQsC48L3A+XHJcbiAgICAgICAgICAgIDxwPtCvINC+0LfQvdCw0LrQvtC80LvQtdC9KNCwKSDQuCDRgdC+0LPQu9Cw0YHQtdC9KNCwKSDRgSDRg9GB0LvQvtCy0LjRj9C80Lgg0J7RhNC10YDRgtGLINC4INCi0LDRgNC40YTQsNC80Lgg0JjRgdC/0L7Qu9C90LjRgtC10LvRjy48L3A+XHJcbiAgICAgICAgICAgIDxwPtCf0L7RgNGD0YfQsNGOINC+0LrQsNC30LDRgtGMINGO0YDQuNC00LjRh9C10YHQutC40LUg0YPRgdC70YPQs9C4INCY0YHQv9C+0LvQvdC40YLQtdC70Y46IFRPTyBOQVNIIENPTVBBTllcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cD7QmNGB0L/QvtC70L3QuNGC0LXQu9GOINCX0LDQutCw0LfRh9C40LrQvtC8INC/0L7RgNGD0YfQtdC90L4g0L7QutCw0LfQsNGC0Ywg0YPRgdC70YPQs9C4INC/0L4g0YHRgtC+0LjQvNC+0YHRgtC4INGD0LrQsNC30LDQvdC90L7QuSDQslxyXG4gICAgICAgICAgICAgINC90LjQttC10YHQu9C10LTRg9GO0YnQtdC5INGC0LDQsdC70LjRhtC1OjwvcD5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3RhYmxlX3ByaWNlJz5cclxuICAgICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgPHRoPtCd0LDQuNC80LXQvdC+0LLQsNC90LjQtSDRg9GB0LvRg9CzPC90aD5cclxuICAgICAgICAgICAgICAgICAgPHRoPtCi0LDRgNC40YTRiyDQsdC10Lcg0YHQutC40LTQutC4ICjRgtC10L3Qs9C1KVxyXG4gICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGg+0KHRgtC+0LjQvNC+0YHRgtGMINGB0L4g0YHQutC40LTQutC+0LkgKNGC0LXQvdCz0LUpXHJcbiAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aD7QodGA0L7QutC4INC+0L/Qu9Cw0YLRizwvdGg+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG5cclxuICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgPHRoPlxyXG4gICAgICAgICAgICAgICAgICAxLlx00K7RgNC40LTQuNGH0LXRgdC60LDRjyDQutC+0L3RgdGD0LvRjNGC0LDRhtC40Y8uICAgXHJcbiAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICAgICAgICAgIDxvbCB0eXBlPScxJz5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICDQktGB0LUg0YDQsNGB0YXQvtC00YssINC90LXQvtCx0YXQvtC00LjQvNGL0LUg0LTQu9GPINC40YHQv9C+0LvQvdC10L3QuNGPINC/0L7RgNGD0YfQtdC90LjRjywg0Y8g0L7QsdGP0LfRg9GO0YHRjCDQvtC/0LvQsNGH0LjQstCw0YLRjCDQslxyXG4gICAgICAgICAgICAgICAg0YLQtdGH0LXQvdC40LggMSAo0L7QtNC90L7Qs9C+KSDQutCw0LvQtdC90LTQsNGA0L3QvtCz0L4g0LTQvdGPLlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAg0K8g0YHQvtCz0LvQsNGI0LDRjtGB0Ywg0YEg0YLQtdC8LCDRh9GC0L4g0JjRgdC/0L7Qu9C90LjRgtC10LvRjCDQv9GA0LjRgdGC0YPQv9Cw0LXRgiDQuiDQuNGB0L/QvtC70L3QtdC90LjRjiDQvtCx0Y/Qt9Cw0YLQtdC70YzRgdGC0LIg0L/QvtGB0LvQtVxyXG4gICAgICAgICAgICAgICAg0L/RgNC+0LjQt9Cy0LXQtNC10L3QuNGPINC+0L/Qu9Cw0YLRiyDRgNCw0YHRhdC+0LTQvtCyLCDQv9GA0LXQtNGD0YHQvNC+0YLRgNC10L3QvdGL0YUg0L8uMS48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgINCvINC+0LHRj9C30YPRjtGB0Ywg0L/RgNC+0LjQt9Cy0LXRgdGC0Lgg0L7Qv9C70LDRgtGDINC30LAg0L7QutCw0LfQsNC90L3Ri9C1INGD0YHQu9GD0LPQuCDQsiDRgNCw0LfQvNC10YDQtSB7cHJpY2VXaXRoRGlzY31cclxuICAgICAgICAgICAgICAgINGC0LXQvdCz0LUg0L3QtSDQv9C+0LfQtNC90LXQtSBfXy5fXy4yMDIx0LPQvtC00LAuXHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICDQkiDRgdC70YPRh9Cw0LUg0L3QsNGA0YPRiNC10L3QuNGPINGB0YDQvtC60L7QsiDQvtC/0LvQsNGC0Ysg0LjQu9C4INGA0LDRgdGC0L7RgNC20LXQvdC40Y8g0JTQvtCz0L7QstC+0YDQsCDQsiDQvtC00L3QvtGB0YLQvtGA0L7QvdC90LXQvFxyXG4gICAgICAgICAgICAgICAg0L/QvtGA0Y/QtNC60LUsINC+0LHRj9C30YPRjtGB0Ywg0L7Qv9C70LDRgtC40YLRjCDQv9C+0LvQvdGD0Y4g0YHRgtC+0LjQvNC+0YHRgtGMINGD0YHQu9GD0LMg0LIg0YDQsNC30LzQtdGA0LUge3ByaWNlV2l0aERpc2N9XHJcbiAgICAgICAgICAgICAgICDRgtC10L3Qs9C1INCyINGC0LXRh9C10L3QuNC1IDEwINC60LDQu9C10L3QtNCw0YDQvdGL0YUg0LTQvdC10Lkg0YHQviDQtNC90Y8g0L3QsNGB0YLRg9C/0LvQtdC90LjRjyDRgtCw0LrQvtCz0L4g0YHQvtCx0YvRgtC40Y8uPC9saT5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICDQryDQtNCw0Y4g0YHQvtCz0LvQsNGB0LjQtSwg0YfRgtC+INC70LjRiNCw0Y7RgdGMINGB0LrQuNC00LrQuCDQv9GA0LXQtNC+0YHRgtCw0LLQu9C10L3QvdC+0Lkg0JjRgdC/0L7Qu9C90LjRgtC10LvQtdC8INCyINGB0LvRg9GH0LDQtVxyXG4gICAgICAgICAgICAgICAg0L/RgNC+0YHRgNC+0YfQutC4INC+0L/Qu9Cw0YLRiyDQsiDRg9C60LDQt9Cw0L3QvdGL0Lkg0YHRgNC+0Log0LTQtdC50YHRgtCy0LjRjyDRgdC60LjQtNC60Lgg0Lgg0L7QsdGP0LfRg9GO0YHRjCDQvtC/0LvQsNGC0LjRgtGMINGB0L7Qs9C70LDRgdC90L5cclxuICAgICAgICAgICAgICAgINCi0LDRgNC40YTQsNC8INCY0YHQv9C+0LvQvdC40YLQtdC70Y8uXHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICDQryDQuNC80LXRjiDQv9GA0LDQstC+INC/0YDQtdC00L7RgdGC0LDQstC40YLRjCDQv9C40YHRjNC80LXQvdC90YvQtSDQvtCx0L7RgdC90L7QstCw0L3QvdGL0LUg0LfQsNC80LXRh9Cw0L3QuNGPINCyINGC0LXRh9C10L3QuNC4IDEgKNC+0LTQvdC+0LPQvilcclxuICAgICAgICAgICAgICAgINC60LDQu9C10L3QtNCw0YDQvdC+0LPQviDQtNC90Y8g0JjRgdC/0L7Qu9C90LjRgtC10LvRjiDQv9C+INCy0YvRgdGC0LDQstC70LXQvdC90L7QvNGDINCQ0LrRgtGDINCy0YvQv9C+0LvQvdC10L3QvdGL0YUg0YDQsNCx0L7RgiDQsiDQu9C40YfQvdC+0LxcclxuICAgICAgICAgICAgICAgINC60LDQsdC40L3QtdGC0LUuXHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICDQkiDRgdC70YPRh9Cw0LUg0L3QtSDQv9GA0LXQtNC+0YHRgtCw0LLQu9C10L3QuNGPINC/0LjRgdGM0LzQtdC90L3Ri9GFINC+0LHQvtGB0L3QvtCy0LDQvdC90YvRhSDQt9Cw0LzQtdGH0LDQvdC40Lkg0LIg0YLQtdGH0LXQvdC40LggMVxyXG4gICAgICAgICAgICAgICAgKNC+0LTQvdC+0LPQvikg0LrQsNC70LXQvdC00LDRgNC90L7Qs9C+INC00L3RjyDQv9C+INCy0YvRgdGC0LDQstC70LXQvdC90L7QvNGDINCQ0LrRgtGDINCy0YvQv9C+0LvQvdC10L3QvdGL0YUg0YDQsNCx0L7RgiDQsiDQu9C40YfQvdC+0LxcclxuICAgICAgICAgICAgICAgINC60LDQsdC40L3QtdGC0LUg0YPRgdC70YPQs9C4INGB0YfQuNGC0LDRjtGC0YHRjyDQvtC60LDQt9Cw0L3QvdGL0LzQuCDQmNGB0L/QvtC70L3QuNGC0LXQu9C10LwsINCwINC40YUg0YHRgtC+0LjQvNC+0YHRgtGMINGPINC+0LHRj9C30YPRjtGB0YxcclxuICAgICAgICAgICAgICAgINC+0L/Qu9Cw0YLQuNGC0Ywg0LIg0L/QvtC70L3QvtC8INC+0LHRitC10LzQtS48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgINCvINC+0LHRj9C30YPRjtGB0Ywg0L/RgNC10LTQvtGB0YLQsNCy0LjRgtGMINCY0YHQv9C+0LvQvdC40YLQtdC70Y4g0L3QsNC00LvQtdC20LDRidC40Lwg0L7QsdGA0LDQt9C+0Lwg0L7RhNC+0YDQvNC70LXQvdC90YPRjiDQtNC+0LLQtdGA0LXQvdC90L7RgdGC0YxcclxuICAgICAgICAgICAgICAgINCyINGC0LXRh9C10L3QuNC4IDMgKNGC0YDQtdGFKSDQutCw0LvQtdC90LTQsNGA0L3Ri9GFINC00L3QtdC5INGB0L4g0LTQvdGPINC30LDQutC70Y7Rh9C10L3QuNGPINCU0L7Qs9C+0LLQvtGA0LAuPC9saT5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICDQryDQvtCx0Y/Qt9GD0Y7RgdGMINC/0YDQtdC00L7RgdGC0LDQstC70Y/RgtGMINCy0YHRjiDQvdC10L7QsdGF0L7QtNC40LzRg9GOINC40L3RhNC+0YDQvNCw0YbQuNGOINC4INC00L7QutGD0LzQtdC90YLRiyDQtNC70Y8g0JjRgdC/0L7Qu9C90LjRgtC10LvRjzwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAg0JIg0YHQu9GD0YfQsNC1INC90LUg0L/RgNC10LTQvtGB0YLQsNCy0LvQtdC90LjRjyDQvNC90L7QuSDQsiDRgtC10YfQtdC90LjQuCA1INC60LDQu9C10L3QtNCw0YDQvdGL0YUg0LTQvdC10Lkg0LTQvtC60YPQvNC10L3RgtC+0LIg0LhcclxuICAgICAgICAgICAgICAgINC40L3RhNC+0YDQvNCw0YbQuNC4INC00LvRjyDQmNGB0L/QvtC70L3QuNGC0LXQu9GPLCDRg9GB0LvRg9Cz0LAg0YHRh9C40YLQsNC10YLRgdGPINC+0LrQsNC30LDQvdC90L7QuSwg0LAg0LjRhSDRgdGC0L7QuNC80L7RgdGC0Ywg0Y9cclxuICAgICAgICAgICAgICAgINC+0LHRj9C30YPRjtGB0Ywg0L7Qv9C70LDRgtC40YLRjCDQsiDQv9C+0LvQvdC+0Lwg0L7QsdGK0LXQvNC1LlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPtCvINC/0L7QtNGC0LLQtdGA0LbQtNCw0Y4sINGH0YLQviDQvdCw0L/RgNCw0LLQu9C10L3QuNC1INC80L3QvtC5INC00LDQvdC90L7Qs9C+INCU0L7Qs9C+0LLQvtGA0LAt0L/QvtGA0YPRh9C10L3QuNGPINGP0LLQu9GP0LXRgtGB0Y9cclxuICAgICAgICAgICAgICAgINCw0LrRhtC10L/RgtC+0Lwg0J/Rg9Cx0LvQuNGH0L3QvtC5INCe0YTQtdGA0YLRi1xyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPtCvINGB0L7Qs9C70LDRiNCw0Y7RgdGMINGB0L4g0YHQu9C10LTRg9GO0YnQuNC80Lgg0YPRgdC70L7QstC40Y/QvNC4OlxyXG4gICAgICAgICAgICAgICAgPG9sPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+0J/QvtGB0LvQtSDQv9C+0LTQv9C40YHQsNC90LjRjyDQvNC90L7QuSDQlNC+0LPQvtCy0L7RgNCwLdC/0L7RgNGD0YfQtdC90LjRjywg0L7QvSDQvdCw0L/RgNCw0LLQu9GP0LXRgtGB0Y8g0L3QsCDRg9GC0LLQtdGA0LbQtNC10L3QuNC1XHJcbiAgICAgICAgICAgICAgICAgICAg0JjRgdC/0L7Qu9C90LjRgtC10LvRji4g0JXRgdC70Lgg0JjRgdC/0L7Qu9C90LjRgtC10LvRjCDQv9GA0LjQvdC40LzQsNC10YIg0LfQsNC60LDQtyDQvdCwINGD0YHQu9C+0LLQuNGP0YUsINC+0YLRgNCw0LbQtdC90L3Ri9GFINCyXHJcbiAgICAgICAgICAgICAgICAgICAg0YPQutCw0LfQsNC90L3QvtC8INC00L7QutGD0LzQtdC90YLQtSwg0L7QvSDQv9GA0LjRgdGC0YPQv9Cw0LXRgiDQuiDQuNGB0L/QvtC70L3QtdC90LjRjiDQv9C10YDQstC+0LPQviDRjdGC0LDQv9CwLCDQv9GA0LXQtNGD0YHQvNC+0YLRgNC10L3QvdC+0LPQvlxyXG4gICAgICAgICAgICAgICAgICAgINC/LiA3LjMuMS4g0J7RhNC10YDRgtGLLlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+0JIg0YHQu9GD0YfQsNC1INC90LXRgdC+0LPQu9Cw0YHQuNGPINGBINGD0YHQu9C+0LLQuNGP0LzQuCDQlNC+0LPQvtCy0L7RgNCwLdC/0L7RgNGD0YfQtdC90LjRjywg0JjRgdC/0L7Qu9C90LjRgtC10LvRjCDQvdCw0L/RgNCw0LLQu9GP0LXRglxyXG4gICAgICAgICAgICAgICAgICAgINC90LAg0L/QvtC00L/QuNGB0LDQvdC40LUg0L3QvtCy0YvQuSDQlNC+0LPQvtCy0L7RgC3Qv9C+0YDRg9GH0LXQvdC40Y8g0LjQu9C4INGD0LLQtdC00L7QvNC70Y/QtdGCINC+0LEg0L7RgtC60LDQt9C1INC+0YIg0L/RgNC10LTQvtGB0YLQsNCy0LvQtdC90LjRj1xyXG4gICAgICAgICAgICAgICAgICAgINGD0YHQu9GD0LMuPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPtCf0YDQuCDQv9C+0LvRg9GH0LXQvdC40Lgg0LzQvdC+0Lkg0JTQvtCz0L7QstC+0YDQsC3Qv9C+0YDRg9GH0LXQvdC40Y8g0YEg0LLQvdC10YHQtdC90L3Ri9C80Lgg0LrQvtGA0YDQtdC60YLQuNGA0L7QstC60LDQvNC4XHJcbiAgICAgICAgICAgICAgICAgICAg0JjRgdC/0L7Qu9C90LjRgtC10LvRjywg0Y8g0L7QsdGP0LfRg9GO0YHRjCDQvtC30L3QsNC60L7QvNC40YLRjNGB0Y8g0YEg0YPRgdC70L7QstC40Y/QvNC4INCU0L7Qs9C+0LLQvtGA0LAt0L/QvtGA0YPRh9C10L3QuNGPLCDQsiDRgdC70YPRh9Cw0LVcclxuICAgICAgICAgICAgICAgICAgICDRgdC+0LPQu9Cw0YHQuNGPINGBINGD0YHQu9C+0LLQuNGP0LzQuCwg0L7RgtGA0LDQttC10L3QvdGL0LzQuCDQsiDQlNC+0LPQvtCy0L7RgNC1LdC/0L7RgNGD0YfQtdC90LjRjywg0Y8g0L/QvtC00L/QuNGB0YvQstCw0Y4g0YPQutCw0LfQsNC90L3Ri9C5XHJcbiAgICAgICAgICAgICAgICAgICAg0LTQvtC60YPQvNC10L3RgiDQv9C+0YHRgtCw0LLQuNCyINCz0LDQu9C+0YfQutGDINCyINCz0YDQsNGE0LUg4oCc4piR4oCdLiDQn9C+0YHQu9C1INGH0LXQs9C+LCDQmNGB0L/QvtC70L3QuNGC0LXQu9GMINC/0YDQuNGB0YLRg9C/0LDQtdGCINC6XHJcbiAgICAgICAgICAgICAgICAgICAg0LjRgdC/0L7Qu9C90LXQvdC40Y4g0L/QtdGA0LLQvtCz0L4g0Y3RgtCw0L/QsCwg0L/RgNC10LTRg9GB0LzQvtGC0YDQtdC90L3QvtCz0L4g0L8uIDYuMy4xLiDQntGE0LXRgNGC0YsuPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPtCY0YHQv9C+0LvQvdC40YLQtdC70Ywg0L/RgNC10LTQvtGB0YLQsNCy0LvRj9C10YIg0LzQvdC1INGD0YHQu9GD0LPQuCDQvdCwINC+0YHQvdC+0LLQsNC90LjQuCDQtNC+0LrRg9C80LXQvdGC0L7Qsiwg0YHQsNC80L7RgdGC0L7Rj9GC0LXQu9GM0L3QvlxyXG4gICAgICAgICAgICAgICAgICAgINC30LDQs9GA0YPQttC10L3QvdGL0YUg0LzQvdC+0Lkg0L3QsCDRgdCw0LnRgtC1INCY0YHQv9C+0LvQvdC40YLQtdC70Y8g0LjQu9C4INC90LDQv9GA0LDQstC70LXQvdC90YvRhSDQt9Cw0LrQsNC30L3Ri9C8INC/0LjRgdGM0LzQvtC8INGBXHJcbiAgICAgICAgICAgICAgICAgICAg0YPQstC10LTQvtC80LvQtdC90LjQtdC8INC+INCy0YDRg9GH0LXQvdC40Lgg0L/QviDRjtGA0LjQtNC40YfQtdGB0LrQvtC80YMg0LDQtNGA0LXRgdGDINCY0YHQv9C+0LvQvdC40YLQtdC70Y8uINCSINGB0LvRg9GH0LDQtSDQvtGC0YHRg9GC0YHRgtCy0LjRj1xyXG4gICAgICAgICAgICAgICAgICAgINC+0YLQvNC10YLQutC4INC+INCy0YDRg9GH0LXQvdC40Lgg0JjRgdC/0L7Qu9C90LjRgtC10LvRjiwg0YLQsNC60LjQtSDQtNC+0LrRg9C80LXQvdGC0Ysg0L/RgNC40LfQvdCw0Y7RgtGB0Y8g0L3QtSDQvdCw0L/RgNCw0LLQu9C10L3QvdGL0LzQuFxyXG4gICAgICAgICAgICAgICAgICAgINCY0YHQv9C+0LvQvdC40YLQtdC70Y4uPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPtCSINGB0LvRg9GH0LDQtSDQuNC30LzQtdC90LXQvdC40Lkg0LIg0LrQvtC90YLQsNC60YLQvdGL0YUg0LTQsNC90L3Ri9GFL9GA0LXQutCy0LjQt9C40YLQsNGFLCDQutC+0YLQvtGA0YvQtSDQmNGB0L/QvtC70L3QuNGC0LXQu9GMXHJcbiAgICAgICAgICAgICAgICAgICAg0LjRgdC/0L7Qu9GM0LfRg9C10YIg0Lgv0LjQu9C4INC80L7QttC10YIg0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMINC00LvRjyDQvtGC0L/RgNCw0LLQutC4INGD0LLQtdC00L7QvNC70LXQvdC40Y8gKNC90LDQv9GA0LjQvNC10YAsINC90L4g0L3QtVxyXG4gICAgICAgICAgICAgICAgICAgINGC0L7Qu9GM0LrQviwg0LjQt9C80LXQvdC10L3QuNC1INC00L7QvNCw0YjQvdC10LPQviDQuNC70Lgg0YDQsNCx0L7Rh9C10LPQviDQsNC00YDQtdGB0LAsINC90L7QvNC10YDQsCDQvNC+0LHQuNC70YzQvdC+0LPQviDRgtC10LvQtdGE0L7QvdCwLFxyXG4gICAgICAgICAgICAgICAgICAgINGN0LvQtdC60YLRgNC+0L3QvdC+0LPQviDQv9C+0YfRgtC+0LLQvtCz0L4g0LDQtNGA0LXRgdCwINC4INGCLtC0LiksINGPINC+0LHRj9C30YPRjtGB0Ywg0L3QtdC80LXQtNC70LXQvdC90L4gKNC90LUg0L/QvtC30LTQvdC10LUsXHJcbiAgICAgICAgICAgICAgICAgICAg0YHQu9C10LTRg9GO0YnQtdCz0L4g0LTQvdGPLCDRgdC+INC00L3RjyDRgtCw0LrQvtCz0L4g0LjQt9C80LXQvdC10L3QuNGPKSDRg9Cy0LXQtNC+0LzQuNGC0Ywg0L7QsSDQuNC30LzQtdC90LXQvdC40Y/RhSDQmNGB0L/QvtC70L3QuNGC0LXQu9GPLlxyXG4gICAgICAgICAgICAgICAgICAgINCf0YDQuCDQvtGC0YHRg9GC0YHRgtCy0LjQuCDQv9C40YHRjNC80LXQvdC90L7Qs9C+INGD0LLQtdC00L7QvNC70LXQvdC40Y8g0L7QsSDQuNC30LzQtdC90LXQvdC40Lgg0LTQsNC90L3Ri9GFLCDRgNCw0L3QtdC1XHJcbiAgICAgICAgICAgICAgICAgICAg0L/RgNC10LTQvtGB0YLQsNCy0LvQtdC90L3QsNGPINC40L3RhNC+0YDQvNCw0YbQuNGPINGB0YfQuNGC0LDQtdGC0YHRjyDQsNC60YLRg9Cw0LvRjNC90L7QuSDQuCDQtNC+0YHRgtC+0LLQtdGA0L3QvtC5LjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L29sPlxyXG5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgINCvINC+0LfQvdCw0LrQvtC80LvQtdC9KNCwKSwg0YfRgtC+INCyINGB0L7QvtGC0LLQtdGC0YHRgtCy0LjQuCDRgSDQv9GD0L3QutGC0LDQvNC4IDEtMSwgMyDRgdGC0LDRgtGM0LggMTUyINCT0YDQsNC20LTQsNC90YHQutC+0LPQvlxyXG4gICAgICAgICAgICAgICAg0JrQvtC00LXQutGB0LAg0KDQtdGB0L/Rg9Cx0LvQuNC60Lgg0JrQsNC30LDRhdGB0YLQsNC9INCf0LjRgdGM0LzQtdC90L3QsNGPINGE0L7RgNC80LAg0YHQtNC10LvQutC4INGB0L7QstC10YDRiNCw0LXRgtGB0Y8g0L3QsCDQsdGD0LzQsNC20L3QvtC8XHJcbiAgICAgICAgICAgICAgICDQvdC+0YHQuNGC0LXQu9C1INC40LvQuCDQsiDRjdC70LXQutGC0YDQvtC90L3QvtC5INGE0L7RgNC80LUuINCaINGB0L7QstC10YDRiNC10L3QuNGOINGB0LTQtdC70LrQuCDQsiDQv9C40YHRjNC80LXQvdC90L7QuSDRhNC+0YDQvNC1XHJcbiAgICAgICAgICAgICAgICDQv9GA0LjRgNCw0LLQvdC40LLQsNC10YLRgdGPINC+0LHQvNC10L0g0L/QuNGB0YzQvNCw0LzQuCwg0YLQtdC70LXQs9GA0LDQvNC80LDQvNC4LCDRgtC10LvQtdGE0L7QvdC+0LPRgNCw0LzQvNCw0LzQuCxcclxuICAgICAgICAgICAgICAgINGC0LXQu9C10YLQsNC50L/QvtCz0YDQsNC80LzQsNC80LgsINGE0LDQutGB0LDQvNC4LCDRjdC70LXQutGC0YDQvtC90L3Ri9C80Lgg0LTQvtC60YPQvNC10L3RgtCw0LzQuCwg0Y3Qu9C10LrRgtGA0L7QvdC90YvQvNC4INGB0L7QvtCx0YnQtdC90LjRj9C80LhcclxuICAgICAgICAgICAgICAgINC40LvQuCDQuNC90YvQvNC4INC00L7QutGD0LzQtdC90YLQsNC80LgsINC+0L/RgNC10LTQtdC70Y/RjtGJ0LjQvNC4INGB0YPQsdGK0LXQutGC0L7QsiDQuCDRgdC+0LTQtdGA0LbQsNC90LjQtSDQuNGFINCy0L7Qu9C10LjQt9GK0Y/QstC70LXQvdC40Y8uXHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICDQn9C+0LTQv9C40YHQsNC90LjQtSDQlNC+0LPQvtCy0L7RgNCwLdC/0L7RgNGD0YfQtdC90LjRjyDQsiDRgdC+0L7RgtCy0LXRgtGB0YLQstC40Lgg0YEg0L8uMS0xINGB0YIuMTUyINCT0Jog0KDQmiDRj9Cy0LvRj9C10YLRgdGPXHJcbiAgICAgICAgICAgICAgICDRgdC+0LLQtdGA0YjQtdC90LjQtdC8INGB0LTQtdC70LrQuCDQsiDQv9C40YHRjNC80LXQvdC90L7QuSDRhNC+0YDQvNC1LiDQlNC+0LPQvtCy0L7RgC3Qv9C+0YDRg9GH0LXQvdC40Y8g0L/QvtC00L/QuNGB0YvQstCw0LXRgtGB0Y8g0L/Rg9GC0LXQvFxyXG4gICAgICAgICAgICAgICAg0L/RgNC+0YHRgtCw0LLQu9C10L3QuNGPINCz0LDQu9C+0YfQutC4INCyINCz0YDQsNGE0LUg4oCc4piR4oCdINC4INC90LDQv9GA0LDQstC70LXQvdC40Y8g0KHQnNChLdGB0L7QvtCx0YnQtdC90LjRjyDRgSDRh9C10YLRi9GA0LXRhdC30L3QsNGH0L3Ri9C8XHJcbiAgICAgICAgICAgICAgICDQutC+0LTQvtC8INC90LAg0L3QvtC80LXRgFxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvb2w+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2RvZ292b3JfX2Zvb3Rlcic+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGVmdF9zaWRlJz5cclxuICAgICAgICAgICAgPGI+0JfQsNC60LDQt9GH0LjQujo8L2I+XHJcblxyXG4gICAgICAgICAgICA8Yj7QlNC10LnRgdGC0LLRg9GO0YnQuNC5INCyINC40L3RgtC10YDQtdGB0LDRhTo8L2I+XHJcblxyXG4gICAgICAgICAgICA8cD7QlNC+0LvQttC90L7RgdGC0Ywg0KTQmNCePC9wPlxyXG4gICAgICAgICAgICA8cD7Qn9C+0LTQv9C40YHRjDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyaWdodF9zaWRlJz5cclxuICAgICAgICAgICAgPGI+0JjRgdC/0L7Qu9C90LjRgtC10LvRjDpcclxuICAgICAgICAgICAgPC9iPlxyXG4gICAgICAgICAgICA8Yj7QotCe0J4gwqtOQVNIIENvbXBhbnnCuzwvYj5cclxuICAgICAgICAgICAgPHA+0JHQmNCdOiAxMDA3NDAwMDk2NTM8L3A+XHJcbiAgICAgICAgICAgIDxwPtCQ0LTRgNC10YE6INCg0LXRgdC/0YPQsdC70LjQutCwINCa0LDQt9Cw0YXRgdGC0LDQvSxcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cD7Qsy4g0JDQu9C80LDRgtGLLCDRg9C7LiDQotC+0LvQtSDQsdC4IDEwMTwvcD5cclxuICAgICAgICAgICAgPHA+0KLQtdC7OiArNyAoNzI3KSAyNTAxLTUwMDwvcD5cclxuICAgICAgICAgICAgPHA+0KAv0YHRhyBLWjcyODU2MDAwMDAwNDIwNzgxOFxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwPtCSINCQ0J4gwqvQkdCw0L3QuiDQptC10L3RgtGAINCa0YDQtdC00LjRgsK7PC9wPlxyXG4gICAgICAgICAgICA8cD7QkdCY0JogS0NKQktaS1hcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERvZ292b3IiXSwic291cmNlUm9vdCI6IiJ9