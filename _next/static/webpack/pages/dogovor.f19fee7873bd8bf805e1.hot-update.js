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
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: ["\u042F ", name, ", \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0439(\u0430\u044F) \u0432 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0430\u0445 ", companyName, ", \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0439 \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0438 \u0434\u043E\u0432\u0435\u0440\u0435\u043D\u043D\u043E\u0441\u0442\u0438/\u043F\u0440\u0438\u043A\u0430\u0437\u0430 \u0434\u0430\u043B\u0435\u0435 \u0438\u043C\u0435\u043D\u0443\u0435\u043C\u044B\u0439 \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A \u043F\u043E\u0440\u0443\u0447\u0430\u044E, \u0430 \u0422\u041E\u041E \xABNASH Company\xBB \u0432 \u0434\u0430\u043B\u044C\u043D\u0435\u0439\u0448\u0435\u043C \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442 \u043D\u0430 \u0441\u0435\u0431\u044F \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E \u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0443\u0441\u043B\u0443\u0433\u0438 \u0432 \u043E\u0431\u044A\u0435\u043C\u0435 \u0438 \u043D\u0430 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u0445, \u043F\u0440\u0435\u0434\u0443\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u043D\u044B\u0445 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u043C \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u043E\u043C \u2013 \u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u044F;"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: ["\u042F ", name, ", \u043E\u0431\u044F\u0437\u0443\u044E\u0441\u044C \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C \u043F\u043E\u043B\u043D\u043E\u043C\u043E\u0447\u0438\u044F \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0438 5 \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u043D\u044B\u0445 \u0434\u043D\u0435\u0439. \u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u043D\u0435\u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F \u043F\u043E\u043B\u043D\u043E\u043C\u043E\u0447\u0438\u0439, \u044F \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u044E \u043D\u0430 \u0441\u0435\u0431\u044F \u0432\u0441\u0435 \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u044B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430 \u043F\u043E \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u043C\u0443 \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u0443 \u0438 \u043E\u0431\u044F\u0437\u0443\u044E\u0441\u044C \u0441\u0432\u043E\u0435\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E \u043E\u043F\u043B\u0430\u0442\u0438\u0442\u044C \u0438\u0445."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "\u041D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u043C, \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u044E \u0441\u0432\u043E\u0438 \u043F\u043E\u043B\u043D\u043E\u043C\u043E\u0447\u0438\u044F \u043F\u043E \u0437\u0430\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044E  \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0433\u043E \u0414\u043E\u0433\u043E\u0432\u043E\u0440\u0430."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "\u042F \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u043B\u0435\u043D(\u0430) \u0438 \u0441\u043E\u0433\u043B\u0430\u0441\u0435\u043D(\u0430) \u0441 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u043C\u0438 \u041E\u0444\u0435\u0440\u0442\u044B \u0438 \u0422\u0430\u0440\u0438\u0444\u0430\u043C\u0438 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044F."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "\u041F\u043E\u0440\u0443\u0447\u0430\u044E \u043E\u043A\u0430\u0437\u0430\u0442\u044C \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0443\u0441\u043B\u0443\u0433\u0438 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044E: TOO NASH COMPANY "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "\u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044E \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u043E\u043C \u043F\u043E\u0440\u0443\u0447\u0435\u043D\u043E \u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0443\u0441\u043B\u0443\u0433\u0438 \u043F\u043E \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438 \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u043E\u0439 \u0432 \u043D\u0438\u0436\u0435\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0439 \u0442\u0430\u0431\u043B\u0438\u0446\u0435:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 13
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZG9nb3Zvci5qcyJdLCJuYW1lcyI6WyJEb2dvdm9yIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJuYW1lIiwic2V0TmFtZSIsInR5cGUiLCJzZXRUeXBlIiwiY29tcGFueU5hbWUiLCJzZXRDb21wYW55TmFtZSIsInByaWNlV2l0aERpc2MiLCJzZXRQcmljZSIsInRvZGF5IiwiRGF0ZSIsImRheSIsImdldERhdGUiLCJtb250aCIsImdldE1vbnRoIiwieWVhciIsImdldEZ1bGxZZWFyIiwicGFyc2VEYXkiLCJwYXJzZU1vbnRoIiwicGFyc2VJbnQiLCJ0b2RheVBhcnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUNBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFDcEIsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4Qjs7QUFEb0Isa0JBR1BDLCtDQUFRLENBQUMsYUFBRCxDQUhEO0FBQUEsTUFFYkMsSUFGYTtBQUFBLE1BR2xCQyxPQUhrQjs7QUFBQSxtQkFLUEYsK0NBQVEsQ0FBQyxTQUFELENBTEQ7QUFBQSxNQUliRyxJQUphO0FBQUEsTUFLbEJDLE9BTGtCOztBQUFBLG1CQU9BSiwrQ0FBUSxDQUFDLFVBQUQsQ0FQUjtBQUFBLE1BTWJLLFdBTmE7QUFBQSxNQU9sQkMsY0FQa0I7O0FBQUEsbUJBU05OLCtDQUFRLENBQUMsTUFBRCxDQVRGO0FBQUEsTUFRYk8sYUFSYTtBQUFBLE1BU2xCQyxRQVRrQjs7QUFXcEIsTUFBTUMsS0FBSyxHQUFHLElBQUlDLElBQUosRUFBZDtBQUNBLE1BQU1DLEdBQUcsR0FBR0YsS0FBSyxDQUFDRyxPQUFOLEVBQVo7QUFDQSxNQUFNQyxLQUFLLEdBQUdKLEtBQUssQ0FBQ0ssUUFBTixLQUFtQixDQUFqQztBQUNBLE1BQU1DLElBQUksR0FBR04sS0FBSyxDQUFDTyxXQUFOLEVBQWI7QUFFQSxNQUFNQyxRQUFRLEdBQUdOLEdBQUcsR0FBRyxFQUFOLEdBQ2IsTUFBTUEsR0FETyxHQUViQSxHQUZKO0FBR0EsTUFBTU8sVUFBVSxHQUFHQyxRQUFRLENBQUNOLEtBQUQsQ0FBUixHQUFrQixFQUFsQixHQUNmLE9BQU9BLEtBRFEsR0FFZixNQUFNQSxLQUZWO0FBSUEsTUFBTU8sVUFBVSxHQUFHSCxRQUFRLEdBQUcsR0FBWCxHQUFpQkMsVUFBakIsR0FBOEIsR0FBOUIsR0FBb0NILElBQXBDLEdBQTJDLElBQTlEO0FBRUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0U7QUFBTSxZQUFJLEVBQUMsVUFBWDtBQUFzQixlQUFPLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUlFO0FBQUssZUFBUyxFQUFDLFNBQWY7QUFBQSw4QkFDRTtBQUFTLGlCQUFTLEVBQUMsaUJBQW5CO0FBQUEsZ0NBQ0U7QUFBUyxtQkFBUyxFQUFDLEtBQW5CO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFLRTtBQUFTLG1CQUFTLEVBQUMsUUFBbkI7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUEsc0JBQUlLO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFZRTtBQUFTLGlCQUFTLEVBQUMsZUFBbkI7QUFBQSxnQ0FDRTtBQUFBLGdDQUFNbkIsSUFBTix1SkFBMENJLFdBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUtFO0FBQUEsZ0NBQU1KLElBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGLGVBUUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUkosZUFTSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFUSixlQVVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVZKLGVBV0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFrQ0QsQ0EzREQ7O0dBQU1KLE87VUFDV0Usa0Q7OztLQURYRixPO0FBNkROLCtEQUFlQSxPQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RvZ292b3IuZjE5ZmVlNzg3M2JkOGJmODA1ZTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuY29uc3QgRG9nb3ZvciA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IFtuYW1lLFxyXG4gICAgc2V0TmFtZV0gPSB1c2VTdGF0ZSgn0KTQsNC80LjQu9C40Y8g0JjQvNGPJylcclxuICBjb25zdCBbdHlwZSxcclxuICAgIHNldFR5cGVdID0gdXNlU3RhdGUoJ9Cu0YAg0LvQuNGG0L4nKVxyXG4gIGNvbnN0IFtjb21wYW55TmFtZSxcclxuICAgIHNldENvbXBhbnlOYW1lXSA9IHVzZVN0YXRlKCfQmtC+0LzQv9Cw0L3QuNGPJylcclxuICBjb25zdCBbcHJpY2VXaXRoRGlzYyxcclxuICAgIHNldFByaWNlXSA9IHVzZVN0YXRlKDIwMDAwMClcclxuXHJcbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gIGNvbnN0IGRheSA9IHRvZGF5LmdldERhdGUoKVxyXG4gIGNvbnN0IG1vbnRoID0gdG9kYXkuZ2V0TW9udGgoKSArIDFcclxuICBjb25zdCB5ZWFyID0gdG9kYXkuZ2V0RnVsbFllYXIoKVxyXG5cclxuICBjb25zdCBwYXJzZURheSA9IGRheSA8IDEwXHJcbiAgICA/IFwiMFwiICsgZGF5XHJcbiAgICA6IGRheVxyXG4gIGNvbnN0IHBhcnNlTW9udGggPSBwYXJzZUludChtb250aCkgPiAxMFxyXG4gICAgPyBcIjAgXCIgKyBtb250aFxyXG4gICAgOiBcIjBcIiArIG1vbnRoXHJcblxyXG4gIGNvbnN0IHRvZGF5UGFyc2UgPSBwYXJzZURheSArIFwiLlwiICsgcGFyc2VNb250aCArIFwiLlwiICsgeWVhciArIFwi0LMuXCI7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPTk2MFwiLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZG9nb3Zvcic+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdkb2dvdm9yX19oZWFkZXInPlxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSd0b3AnPlxyXG4gICAgICAgICAgICA8cD7QlNC+0LPQvtCy0L7RgC3Qv9C+0YDRg9GH0LXQvdC40Y8g4oSWPC9wPlxyXG4gICAgICAgICAgICA8cD7QmiDQn9Cj0JHQm9CY0KfQndCe0JzQoy3QlNCe0JPQntCS0J7QoNCjINCe0KTQldCg0KLQqyDihJY8L3A+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2JvdHRvbSc+XHJcbiAgICAgICAgICAgIDxiPtCzLiDQkNC70LzQsNGC0Ys8L2I+XHJcbiAgICAgICAgICAgIDxwPnt0b2RheVBhcnNlfTwvcD5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nZG9nb3Zvcl9fYm9keSc+XHJcbiAgICAgICAgICA8cD7QryB7bmFtZX0sINC00LXQudGB0YLQstGD0Y7RidC40Lko0LDRjykg0LIg0LjQvdGC0LXRgNC10YHQsNGFIHtjb21wYW55TmFtZX0sINC00LXQudGB0YLQstGD0Y7RidC40Lkg0L3QsCDQvtGB0L3QvtCy0LDQvdC40Lgg0LTQvtCy0LXRgNC10L3QvdC+0YHRgtC4L9C/0YDQuNC60LDQt9CwINC00LDQu9C10LUg0LjQvNC10L3Rg9C10LzRi9C5XHJcbtCX0LDQutCw0LfRh9C40Log0L/QvtGA0YPRh9Cw0Y4sINCwINCi0J7QniDCq05BU0ggQ29tcGFuecK7INCyINC00LDQu9GM0L3QtdC50YjQtdC8INCY0YHQv9C+0LvQvdC40YLQtdC70Ywg0L/RgNC40L3QuNC80LDQtdGCINC90LBcclxu0YHQtdCx0Y8g0L7QsdGP0LfQsNGC0LXQu9GM0YHRgtCy0L4g0L7QutCw0LfRi9Cy0LDRgtGMINGO0YDQuNC00LjRh9C10YHQutC40LUg0YPRgdC70YPQs9C4INCyINC+0LHRitC10LzQtSDQuCDQvdCwINGD0YHQu9C+0LLQuNGP0YUsXHJcbtC/0YDQtdC00YPRgdC80L7RgtGA0LXQvdC90YvRhSDQvdCw0YHRgtC+0Y/RidC40Lwg0LTQvtCz0L7QstC+0YDQvtC8IOKAkyDQv9C+0YDRg9GH0LXQvdC40Y87PC9wPlxyXG4gICAgICAgICAgPHA+0K8ge25hbWV9LCDQvtCx0Y/Qt9GD0Y7RgdGMINC/0L7QtNGC0LLQtdGA0LTQuNGC0Ywg0L/QvtC70L3QvtC80L7Rh9C40Y8g0LIg0YLQtdGH0LXQvdC40LggNSDQutCw0LvQtdC90LTQsNGA0L3Ri9GFINC00L3QtdC5LiDQkiDRgdC70YPRh9Cw0LVcclxuICAgICAgICAgICAg0L3QtdC/0L7QtNGC0LLQtdGA0LbQtNC10L3QuNGPINC/0L7Qu9C90L7QvNC+0YfQuNC5LCDRjyDQv9GA0LjQvdC40LzQsNGOINC90LAg0YHQtdCx0Y8g0LLRgdC1INGE0LjQvdCw0L3RgdC+0LLRi9C1INC+0LHRj9C30LDRgtC10LvRjNGB0YLQstCwINC/0L5cclxuICAgICAgICAgICAg0L3QsNGB0YLQvtGP0YnQtdC80YMg0JTQvtCz0L7QstC+0YDRgyDQuCDQvtCx0Y/Qt9GD0Y7RgdGMINGB0LLQvtC10LLRgNC10LzQtdC90L3QviDQvtC/0LvQsNGC0LjRgtGMINC40YUuPC9wPlxyXG4gICAgICAgICAgICA8cD7QndCw0YHRgtC+0Y/RidC40LwsINC/0L7QtNGC0LLQtdGA0LbQtNCw0Y4g0YHQstC+0Lgg0L/QvtC70L3QvtC80L7Rh9C40Y8g0L/QviDQt9Cw0LrQu9GO0YfQtdC90LjRjiAg0L3QsNGB0YLQvtGP0YnQtdCz0L4g0JTQvtCz0L7QstC+0YDQsC48L3A+XHJcbiAgICAgICAgICAgIDxwPtCvINC+0LfQvdCw0LrQvtC80LvQtdC9KNCwKSDQuCDRgdC+0LPQu9Cw0YHQtdC9KNCwKSDRgSDRg9GB0LvQvtCy0LjRj9C80Lgg0J7RhNC10YDRgtGLINC4INCi0LDRgNC40YTQsNC80Lgg0JjRgdC/0L7Qu9C90LjRgtC10LvRjy48L3A+XHJcbiAgICAgICAgICAgIDxwPtCf0L7RgNGD0YfQsNGOINC+0LrQsNC30LDRgtGMINGO0YDQuNC00LjRh9C10YHQutC40LUg0YPRgdC70YPQs9C4INCY0YHQv9C+0LvQvdC40YLQtdC70Y46IFRPTyBOQVNIIENPTVBBTlkgPC9wPlxyXG4gICAgICAgICAgICA8cD7QmNGB0L/QvtC70L3QuNGC0LXQu9GOINCX0LDQutCw0LfRh9C40LrQvtC8INC/0L7RgNGD0YfQtdC90L4g0L7QutCw0LfQsNGC0Ywg0YPRgdC70YPQs9C4INC/0L4g0YHRgtC+0LjQvNC+0YHRgtC4INGD0LrQsNC30LDQvdC90L7QuSDQsiDQvdC40LbQtdGB0LvQtdC00YPRjtGJ0LXQuSDRgtCw0LHQu9C40YbQtTo8L3A+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERvZ292b3IiXSwic291cmNlUm9vdCI6IiJ9