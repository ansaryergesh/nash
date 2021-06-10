self["webpackHotUpdate_N_E"]("pages/dogovorobrabotka",{

/***/ "./pages/dogovorobrabotka.js":
/*!***********************************!*\
  !*** ./pages/dogovorobrabotka.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_dogovorPor_ObrabotkaDannih__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/dogovorPor/ObrabotkaDannih */ "./components/dogovorPor/ObrabotkaDannih.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\job\\nashcompany\\pages\\dogovorobrabotka.js",
    _this = undefined,
    _s = $RefreshSig$();





var Pdf = function Pdf() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      name = _useState[0],
      setName = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      iin = _useState2[0],
      setIin = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      code = _useState3[0],
      setCode = _useState3[1];

  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth() + 1;
  var year = today.getFullYear();
  var parseDay = day < 10 ? "0" + day : day;
  var parseMonth = parseInt(month) > 10 ? "0 " + month : "0" + month;
  var todayParse = parseDay + "." + parseMonth + "." + year + "г.";
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/)) {
      window.print();
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "container",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "viewport",
        content: "width=960"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_dogovorPor_ObrabotkaDannih__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, _this);
};

_s(Pdf, "FrAe2vXnNH7/fpr9w29vDlISbeo=");

_c = Pdf;
/* harmony default export */ __webpack_exports__["default"] = (Pdf);

var _c;

$RefreshReg$(_c, "Pdf");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZG9nb3Zvcm9icmFib3RrYS5qcyJdLCJuYW1lcyI6WyJQZGYiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzZXROYW1lIiwiaWluIiwic2V0SWluIiwiY29kZSIsInNldENvZGUiLCJ0b2RheSIsIkRhdGUiLCJkYXkiLCJnZXREYXRlIiwibW9udGgiLCJnZXRNb250aCIsInllYXIiLCJnZXRGdWxsWWVhciIsInBhcnNlRGF5IiwicGFyc2VNb250aCIsInBhcnNlSW50IiwidG9kYXlQYXJzZSIsInVzZUVmZmVjdCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIm1hdGNoIiwid2luZG93IiwicHJpbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxHQUFNO0FBQUE7O0FBQUEsa0JBQ09DLCtDQUFRLENBQUMsRUFBRCxDQURmO0FBQUEsTUFDVEMsSUFEUztBQUFBLE1BQ0pDLE9BREk7O0FBQUEsbUJBRUtGLCtDQUFRLENBQUMsRUFBRCxDQUZiO0FBQUEsTUFFVEcsR0FGUztBQUFBLE1BRUxDLE1BRks7O0FBQUEsbUJBR09KLCtDQUFRLENBQUMsRUFBRCxDQUhmO0FBQUEsTUFHVEssSUFIUztBQUFBLE1BR0pDLE9BSEk7O0FBTWhCLE1BQU1DLEtBQUssR0FBRyxJQUFJQyxJQUFKLEVBQWQ7QUFDQSxNQUFNQyxHQUFHLEdBQUdGLEtBQUssQ0FBQ0csT0FBTixFQUFaO0FBQ0EsTUFBTUMsS0FBSyxHQUFHSixLQUFLLENBQUNLLFFBQU4sS0FBbUIsQ0FBakM7QUFDQSxNQUFNQyxJQUFJLEdBQUdOLEtBQUssQ0FBQ08sV0FBTixFQUFiO0FBRUEsTUFBTUMsUUFBUSxHQUFHTixHQUFHLEdBQUcsRUFBTixHQUNiLE1BQU1BLEdBRE8sR0FFYkEsR0FGSjtBQUdBLE1BQU1PLFVBQVUsR0FBR0MsUUFBUSxDQUFDTixLQUFELENBQVIsR0FBa0IsRUFBbEIsR0FDZixPQUFPQSxLQURRLEdBRWYsTUFBTUEsS0FGVjtBQUlBLE1BQU1PLFVBQVUsR0FBR0gsUUFBUSxHQUFHLEdBQVgsR0FBaUJDLFVBQWpCLEdBQThCLEdBQTlCLEdBQW9DSCxJQUFwQyxHQUEyQyxJQUE5RDtBQUNBTSxrREFBUyxDQUFDLFlBQU07QUFDZCxRQUFJQyxTQUFTLENBQUNDLFNBQVYsQ0FBb0JDLEtBQXBCLENBQTBCLGdEQUExQixDQUFKLEVBQWtGO0FBQ2hGQyxZQUFNLENBQUNDLEtBQVA7QUFDRDtBQUdGLEdBTlEsRUFNTixFQU5NLENBQVQ7QUFPQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw2QkFDRTtBQUFNLFlBQUksRUFBQyxVQUFYO0FBQXNCLGVBQU8sRUFBQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBSUUsOERBQUMsMkVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBUUQsQ0FsQ0Q7O0dBQU16QixHOztLQUFBQSxHO0FBb0NOLCtEQUFlQSxHQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RvZ292b3JvYnJhYm90a2EuM2FhM2Y5ODA5NjMyODViMTI5YTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IE9icmFib3RrYSBmcm9tIFwiLi4vY29tcG9uZW50cy9kb2dvdm9yUG9yL09icmFib3RrYURhbm5paFwiXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuY29uc3QgUGRmID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtuYW1lLHNldE5hbWVdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW2lpbixzZXRJaW5dID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW2NvZGUsc2V0Q29kZV0gPSB1c2VTdGF0ZSgnJylcclxuXHJcblxyXG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICBjb25zdCBkYXkgPSB0b2RheS5nZXREYXRlKClcclxuICBjb25zdCBtb250aCA9IHRvZGF5LmdldE1vbnRoKCkgKyAxXHJcbiAgY29uc3QgeWVhciA9IHRvZGF5LmdldEZ1bGxZZWFyKClcclxuXHJcbiAgY29uc3QgcGFyc2VEYXkgPSBkYXkgPCAxMFxyXG4gICAgPyBcIjBcIiArIGRheVxyXG4gICAgOiBkYXlcclxuICBjb25zdCBwYXJzZU1vbnRoID0gcGFyc2VJbnQobW9udGgpID4gMTBcclxuICAgID8gXCIwIFwiICsgbW9udGhcclxuICAgIDogXCIwXCIgKyBtb250aFxyXG5cclxuICBjb25zdCB0b2RheVBhcnNlID0gcGFyc2VEYXkgKyBcIi5cIiArIHBhcnNlTW9udGggKyBcIi5cIiArIHllYXIgKyBcItCzLlwiO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvKGlQaG9uZXxpUG9kfGlQYWR8QW5kcm9pZHxCbGFja0JlcnJ5fElFTW9iaWxlKS8pKSAge1xyXG4gICAgICB3aW5kb3cucHJpbnQoKVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gIH0sIFtdKVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPTk2MFwiLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8T2JyYWJvdGthLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGRmIl0sInNvdXJjZVJvb3QiOiIifQ==