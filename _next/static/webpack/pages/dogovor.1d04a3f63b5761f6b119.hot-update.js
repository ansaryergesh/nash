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
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: "1. \u0412\u0441\u0435 \u0440\u0430\u0441\u0445\u043E\u0434\u044B, \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0435 \u0434\u043B\u044F \u0438\u0441\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u044F, \u044F \u043E\u0431\u044F\u0437\u0443\u044E\u0441\u044C \u043E\u043F\u043B\u0430\u0447\u0438\u0432\u0430\u0442\u044C \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0438 1 (\u043E\u0434\u043D\u043E\u0433\u043E) \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u043D\u043E\u0433\u043E \u0434\u043D\u044F. "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZG9nb3Zvci5qcyJdLCJuYW1lcyI6WyJEb2dvdm9yIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJuYW1lIiwic2V0TmFtZSIsInR5cGUiLCJzZXRUeXBlIiwiY29tcGFueU5hbWUiLCJzZXRDb21wYW55TmFtZSIsInByaWNlV2l0aERpc2MiLCJzZXRQcmljZSIsInRvZGF5IiwiRGF0ZSIsImRheSIsImdldERhdGUiLCJtb250aCIsImdldE1vbnRoIiwieWVhciIsImdldEZ1bGxZZWFyIiwicGFyc2VEYXkiLCJwYXJzZU1vbnRoIiwicGFyc2VJbnQiLCJ0b2RheVBhcnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUNBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFDcEIsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4Qjs7QUFEb0Isa0JBR1BDLCtDQUFRLENBQUMsYUFBRCxDQUhEO0FBQUEsTUFFYkMsSUFGYTtBQUFBLE1BR2xCQyxPQUhrQjs7QUFBQSxtQkFLUEYsK0NBQVEsQ0FBQyxTQUFELENBTEQ7QUFBQSxNQUliRyxJQUphO0FBQUEsTUFLbEJDLE9BTGtCOztBQUFBLG1CQU9BSiwrQ0FBUSxDQUFDLFVBQUQsQ0FQUjtBQUFBLE1BTWJLLFdBTmE7QUFBQSxNQU9sQkMsY0FQa0I7O0FBQUEsbUJBU05OLCtDQUFRLENBQUMsTUFBRCxDQVRGO0FBQUEsTUFRYk8sYUFSYTtBQUFBLE1BU2xCQyxRQVRrQjs7QUFXcEIsTUFBTUMsS0FBSyxHQUFHLElBQUlDLElBQUosRUFBZDtBQUNBLE1BQU1DLEdBQUcsR0FBR0YsS0FBSyxDQUFDRyxPQUFOLEVBQVo7QUFDQSxNQUFNQyxLQUFLLEdBQUdKLEtBQUssQ0FBQ0ssUUFBTixLQUFtQixDQUFqQztBQUNBLE1BQU1DLElBQUksR0FBR04sS0FBSyxDQUFDTyxXQUFOLEVBQWI7QUFFQSxNQUFNQyxRQUFRLEdBQUdOLEdBQUcsR0FBRyxFQUFOLEdBQ2IsTUFBTUEsR0FETyxHQUViQSxHQUZKO0FBR0EsTUFBTU8sVUFBVSxHQUFHQyxRQUFRLENBQUNOLEtBQUQsQ0FBUixHQUFrQixFQUFsQixHQUNmLE9BQU9BLEtBRFEsR0FFZixNQUFNQSxLQUZWO0FBSUEsTUFBTU8sVUFBVSxHQUFHSCxRQUFRLEdBQUcsR0FBWCxHQUFpQkMsVUFBakIsR0FBOEIsR0FBOUIsR0FBb0NILElBQXBDLEdBQTJDLElBQTlEO0FBRUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0U7QUFBTSxZQUFJLEVBQUMsVUFBWDtBQUFzQixlQUFPLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUlFO0FBQUssZUFBUyxFQUFDLFNBQWY7QUFBQSw4QkFDRTtBQUFTLGlCQUFTLEVBQUMsaUJBQW5CO0FBQUEsZ0NBQ0U7QUFBUyxtQkFBUyxFQUFDLEtBQW5CO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFLRTtBQUFTLG1CQUFTLEVBQUMsUUFBbkI7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUEsc0JBQUlLO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFZRTtBQUFTLGlCQUFTLEVBQUMsZUFBbkI7QUFBQSxnQ0FDRTtBQUFTLG1CQUFTLEVBQUMsU0FBbkI7QUFBQSxrQ0FDRTtBQUFBLGtDQUFNbkIsSUFBTix1SkFBMENJLFdBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUtFO0FBQUEsa0NBQU1KLElBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGLGVBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUkYsZUFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFURixlQVVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVZGLGVBWUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBaUJFO0FBQVMsbUJBQVMsRUFBQztBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWpCRixlQXFCRTtBQUFTLG1CQUFTLEVBQUMsU0FBbkI7QUFBQSxpQ0FDRTtBQUFJLGdCQUFJLEVBQUMsR0FBVDtBQUFBLG1DQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBckJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZ0RELENBekVEOztHQUFNSixPO1VBQ1dFLGtEOzs7S0FEWEYsTztBQTJFTiwrREFBZUEsT0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kb2dvdm9yLjFkMDRhM2Y2M2I1NzYxZjZiMTE5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmNvbnN0IERvZ292b3IgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBbbmFtZSxcclxuICAgIHNldE5hbWVdID0gdXNlU3RhdGUoJ9Ck0LDQvNC40LvQuNGPINCY0LzRjycpXHJcbiAgY29uc3QgW3R5cGUsXHJcbiAgICBzZXRUeXBlXSA9IHVzZVN0YXRlKCfQrtGAINC70LjRhtC+JylcclxuICBjb25zdCBbY29tcGFueU5hbWUsXHJcbiAgICBzZXRDb21wYW55TmFtZV0gPSB1c2VTdGF0ZSgn0JrQvtC80L/QsNC90LjRjycpXHJcbiAgY29uc3QgW3ByaWNlV2l0aERpc2MsXHJcbiAgICBzZXRQcmljZV0gPSB1c2VTdGF0ZSgyMDAwMDApXHJcblxyXG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICBjb25zdCBkYXkgPSB0b2RheS5nZXREYXRlKClcclxuICBjb25zdCBtb250aCA9IHRvZGF5LmdldE1vbnRoKCkgKyAxXHJcbiAgY29uc3QgeWVhciA9IHRvZGF5LmdldEZ1bGxZZWFyKClcclxuXHJcbiAgY29uc3QgcGFyc2VEYXkgPSBkYXkgPCAxMFxyXG4gICAgPyBcIjBcIiArIGRheVxyXG4gICAgOiBkYXlcclxuICBjb25zdCBwYXJzZU1vbnRoID0gcGFyc2VJbnQobW9udGgpID4gMTBcclxuICAgID8gXCIwIFwiICsgbW9udGhcclxuICAgIDogXCIwXCIgKyBtb250aFxyXG5cclxuICBjb25zdCB0b2RheVBhcnNlID0gcGFyc2VEYXkgKyBcIi5cIiArIHBhcnNlTW9udGggKyBcIi5cIiArIHllYXIgKyBcItCzLlwiO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD05NjBcIi8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2RvZ292b3InPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nZG9nb3Zvcl9faGVhZGVyJz5cclxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0ndG9wJz5cclxuICAgICAgICAgICAgPHA+0JTQvtCz0L7QstC+0YAt0L/QvtGA0YPRh9C10L3QuNGPIOKEljwvcD5cclxuICAgICAgICAgICAgPHA+0Jog0J/Qo9CR0JvQmNCn0J3QntCc0KMt0JTQntCT0J7QktCe0KDQoyDQntCk0JXQoNCi0Ksg4oSWPC9wPlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdib3R0b20nPlxyXG4gICAgICAgICAgICA8Yj7Qsy4g0JDQu9C80LDRgtGLPC9iPlxyXG4gICAgICAgICAgICA8cD57dG9kYXlQYXJzZX08L3A+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2RvZ292b3JfX2JvZHknPlxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgICAgICAgICAgPHA+0K8ge25hbWV9LCDQtNC10LnRgdGC0LLRg9GO0YnQuNC5KNCw0Y8pINCyINC40L3RgtC10YDQtdGB0LDRhSB7Y29tcGFueU5hbWV9LCDQtNC10LnRgdGC0LLRg9GO0YnQuNC5INC90LAg0L7RgdC90L7QstCw0L3QuNC4INC00L7QstC10YDQtdC90L3QvtGB0YLQuC/Qv9GA0LjQutCw0LfQsCDQtNCw0LvQtdC1INC40LzQtdC90YPQtdC80YvQuVxyXG7Ql9Cw0LrQsNC30YfQuNC6INC/0L7RgNGD0YfQsNGOLCDQsCDQotCe0J4gwqtOQVNIIENvbXBhbnnCuyDQsiDQtNCw0LvRjNC90LXQudGI0LXQvCDQmNGB0L/QvtC70L3QuNGC0LXQu9GMINC/0YDQuNC90LjQvNCw0LXRgiDQvdCwXHJcbtGB0LXQsdGPINC+0LHRj9C30LDRgtC10LvRjNGB0YLQstC+INC+0LrQsNC30YvQstCw0YLRjCDRjtGA0LjQtNC40YfQtdGB0LrQuNC1INGD0YHQu9GD0LPQuCDQsiDQvtCx0YrQtdC80LUg0Lgg0L3QsCDRg9GB0LvQvtCy0LjRj9GFLFxyXG7Qv9GA0LXQtNGD0YHQvNC+0YLRgNC10L3QvdGL0YUg0L3QsNGB0YLQvtGP0YnQuNC8INC00L7Qs9C+0LLQvtGA0L7QvCDigJMg0L/QvtGA0YPRh9C10L3QuNGPOzwvcD5cclxuICAgICAgICAgICAgPHA+0K8ge25hbWV9LCDQvtCx0Y/Qt9GD0Y7RgdGMINC/0L7QtNGC0LLQtdGA0LTQuNGC0Ywg0L/QvtC70L3QvtC80L7Rh9C40Y8g0LIg0YLQtdGH0LXQvdC40LggNSDQutCw0LvQtdC90LTQsNGA0L3Ri9GFINC00L3QtdC5LiDQkiDRgdC70YPRh9Cw0LVcclxu0L3QtdC/0L7QtNGC0LLQtdGA0LbQtNC10L3QuNGPINC/0L7Qu9C90L7QvNC+0YfQuNC5LCDRjyDQv9GA0LjQvdC40LzQsNGOINC90LAg0YHQtdCx0Y8g0LLRgdC1INGE0LjQvdCw0L3RgdC+0LLRi9C1INC+0LHRj9C30LDRgtC10LvRjNGB0YLQstCwINC/0L5cclxu0L3QsNGB0YLQvtGP0YnQtdC80YMg0JTQvtCz0L7QstC+0YDRgyDQuCDQvtCx0Y/Qt9GD0Y7RgdGMINGB0LLQvtC10LLRgNC10LzQtdC90L3QviDQvtC/0LvQsNGC0LjRgtGMINC40YUuPC9wPlxyXG4gICAgICAgICAgICA8cD7QndCw0YHRgtC+0Y/RidC40LwsINC/0L7QtNGC0LLQtdGA0LbQtNCw0Y4g0YHQstC+0Lgg0L/QvtC70L3QvtC80L7Rh9C40Y8g0L/QviDQt9Cw0LrQu9GO0YfQtdC90LjRjiDQvdCw0YHRgtC+0Y/RidC10LPQviDQlNC+0LPQvtCy0L7RgNCwLjwvcD5cclxuICAgICAgICAgICAgPHA+0K8g0L7Qt9C90LDQutC+0LzQu9C10L0o0LApINC4INGB0L7Qs9C70LDRgdC10L0o0LApINGBINGD0YHQu9C+0LLQuNGP0LzQuCDQntGE0LXRgNGC0Ysg0Lgg0KLQsNGA0LjRhNCw0LzQuCDQmNGB0L/QvtC70L3QuNGC0LXQu9GPLjwvcD5cclxuICAgICAgICAgICAgPHA+0J/QvtGA0YPRh9Cw0Y4g0L7QutCw0LfQsNGC0Ywg0Y7RgNC40LTQuNGH0LXRgdC60LjQtSDRg9GB0LvRg9Cz0Lgg0JjRgdC/0L7Qu9C90LjRgtC10LvRjjogVE9PIE5BU0ggQ09NUEFOWVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwPtCY0YHQv9C+0LvQvdC40YLQtdC70Y4g0JfQsNC60LDQt9GH0LjQutC+0Lwg0L/QvtGA0YPRh9C10L3QviDQvtC60LDQt9Cw0YLRjCDRg9GB0LvRg9Cz0Lgg0L/QviDRgdGC0L7QuNC80L7RgdGC0Lgg0YPQutCw0LfQsNC90L3QvtC5INCyXHJcbiAgICAgICAgICAgICAg0L3QuNC20LXRgdC70LXQtNGD0Y7RidC10Lkg0YLQsNCx0LvQuNGG0LU6PC9wPlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3RhYmxlX3ByaWNlJz5cclxuXHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgICAgICAgICAgPG9sIHR5cGU9JzEnPlxyXG4gICAgICAgICAgICAgIDxsaT4xLlx00JLRgdC1INGA0LDRgdGF0L7QtNGLLCDQvdC10L7QsdGF0L7QtNC40LzRi9C1INC00LvRjyDQuNGB0L/QvtC70L3QtdC90LjRjyDQv9C+0YDRg9GH0LXQvdC40Y8sINGPINC+0LHRj9C30YPRjtGB0Ywg0L7Qv9C70LDRh9C40LLQsNGC0Ywg0LIg0YLQtdGH0LXQvdC40LggMSAo0L7QtNC90L7Qs9C+KSDQutCw0LvQtdC90LTQsNGA0L3QvtCz0L4g0LTQvdGPLiA8L2xpPlxyXG4gICAgICAgICAgICA8L29sPlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEb2dvdm9yIl0sInNvdXJjZVJvb3QiOiIifQ==