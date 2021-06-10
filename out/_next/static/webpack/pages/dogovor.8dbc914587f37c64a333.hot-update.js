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
/* harmony import */ var _components_DogovorPor_JurDog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/DogovorPor/JurDog */ "./components/DogovorPor/JurDog.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\job\\nashcompany\\pages\\dogovor.js",
    _this = undefined,
    _s = $RefreshSig$();



 // import jsPDF from 'jspdf'
// import html2canvas from 'html2canvas'



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
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/)) {
      window.print();
    }
  }, []); // const onSave = () => {   var pdf = new jsPDF('p', 'pt', 'a4');
  // window.html2canvas = html2canvas       const doc =
  // document.getElementsByTagName('div')[0];       if (doc) {
  // console.log("div is ");           console.log(doc);
  // console.log("hellowww");           pdf.html(document.getElementById('doc'), {
  //               callback: function (pdf) {
  // pdf.save('DOC.pdf');               }           })      } }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "container",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "viewport",
        content: "width=960"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DogovorPor_JurDog__WEBPACK_IMPORTED_MODULE_4__.default, {
      priceWithDisc: priceWithDisc,
      companyName: companyName,
      todayParse: todayParse
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }, _this);
};

_s(Dogovor, "+K5PjhDqPC1XmNZJnt3Zr2XR2bI=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZG9nb3Zvci5qcyJdLCJuYW1lcyI6WyJEb2dvdm9yIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJuYW1lIiwic2V0TmFtZSIsInR5cGUiLCJzZXRUeXBlIiwiY29tcGFueU5hbWUiLCJzZXRDb21wYW55TmFtZSIsInByaWNlV2l0aERpc2MiLCJzZXRQcmljZSIsInRvZGF5IiwiRGF0ZSIsImRheSIsImdldERhdGUiLCJtb250aCIsImdldE1vbnRoIiwieWVhciIsImdldEZ1bGxZZWFyIiwicGFyc2VEYXkiLCJwYXJzZU1vbnRoIiwicGFyc2VJbnQiLCJ0b2RheVBhcnNlIiwidXNlRWZmZWN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwibWF0Y2giLCJ3aW5kb3ciLCJwcmludCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7QUFDQTs7QUFDQTs7QUFDQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQ3BCLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7O0FBRG9CLGtCQUdQQywrQ0FBUSxDQUFDLGFBQUQsQ0FIRDtBQUFBLE1BRWJDLElBRmE7QUFBQSxNQUdsQkMsT0FIa0I7O0FBQUEsbUJBS1BGLCtDQUFRLENBQUMsU0FBRCxDQUxEO0FBQUEsTUFJYkcsSUFKYTtBQUFBLE1BS2xCQyxPQUxrQjs7QUFBQSxtQkFPQUosK0NBQVEsQ0FBQyxVQUFELENBUFI7QUFBQSxNQU1iSyxXQU5hO0FBQUEsTUFPbEJDLGNBUGtCOztBQUFBLG1CQVNOTiwrQ0FBUSxDQUFDLE1BQUQsQ0FURjtBQUFBLE1BUWJPLGFBUmE7QUFBQSxNQVNsQkMsUUFUa0I7O0FBV3BCLE1BQU1DLEtBQUssR0FBRyxJQUFJQyxJQUFKLEVBQWQ7QUFDQSxNQUFNQyxHQUFHLEdBQUdGLEtBQUssQ0FBQ0csT0FBTixFQUFaO0FBQ0EsTUFBTUMsS0FBSyxHQUFHSixLQUFLLENBQUNLLFFBQU4sS0FBbUIsQ0FBakM7QUFDQSxNQUFNQyxJQUFJLEdBQUdOLEtBQUssQ0FBQ08sV0FBTixFQUFiO0FBRUEsTUFBTUMsUUFBUSxHQUFHTixHQUFHLEdBQUcsRUFBTixHQUNiLE1BQU1BLEdBRE8sR0FFYkEsR0FGSjtBQUdBLE1BQU1PLFVBQVUsR0FBR0MsUUFBUSxDQUFDTixLQUFELENBQVIsR0FBa0IsRUFBbEIsR0FDZixPQUFPQSxLQURRLEdBRWYsTUFBTUEsS0FGVjtBQUlBLE1BQU1PLFVBQVUsR0FBR0gsUUFBUSxHQUFHLEdBQVgsR0FBaUJDLFVBQWpCLEdBQThCLEdBQTlCLEdBQW9DSCxJQUFwQyxHQUEyQyxJQUE5RDtBQUVBTSxrREFBUyxDQUFDLFlBQU07QUFDZCxRQUFJQyxTQUFTLENBQUNDLFNBQVYsQ0FBb0JDLEtBQXBCLENBQTBCLGdEQUExQixDQUFKLEVBQWtGO0FBQ2hGQyxZQUFNLENBQUNDLEtBQVA7QUFDRDtBQUVGLEdBTFEsRUFLTixFQUxNLENBQVQsQ0F6Qm9CLENBZ0NwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUEsNEJBR0UsOERBQUMsa0RBQUQ7QUFBQSw2QkFDRTtBQUFNLFlBQUksRUFBQyxVQUFYO0FBQXNCLGVBQU8sRUFBQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGLGVBTUUsOERBQUMsa0VBQUQ7QUFDRSxtQkFBYSxFQUFFbkIsYUFEakI7QUFFRSxpQkFBVyxFQUFFRixXQUZmO0FBR0UsZ0JBQVUsRUFBRWU7QUFIZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFlRCxDQXRERDs7R0FBTXZCLE87VUFDV0Usa0Q7OztLQURYRixPO0FBd0ROLCtEQUFlQSxPQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RvZ292b3IuOGRiYzkxNDU4N2YzN2M2NGEzMzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG4vLyBpbXBvcnQganNQREYgZnJvbSAnanNwZGYnXHJcbi8vIGltcG9ydCBodG1sMmNhbnZhcyBmcm9tICdodG1sMmNhbnZhcydcclxuaW1wb3J0IEp1ckRvZyBmcm9tICcuLi9jb21wb25lbnRzL0RvZ292b3JQb3IvSnVyRG9nJ1xyXG5jb25zdCBEb2dvdm9yID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgW25hbWUsXHJcbiAgICBzZXROYW1lXSA9IHVzZVN0YXRlKCfQpNCw0LzQuNC70LjRjyDQmNC80Y8nKVxyXG4gIGNvbnN0IFt0eXBlLFxyXG4gICAgc2V0VHlwZV0gPSB1c2VTdGF0ZSgn0K7RgCDQu9C40YbQvicpXHJcbiAgY29uc3QgW2NvbXBhbnlOYW1lLFxyXG4gICAgc2V0Q29tcGFueU5hbWVdID0gdXNlU3RhdGUoJ9Ca0L7QvNC/0LDQvdC40Y8nKVxyXG4gIGNvbnN0IFtwcmljZVdpdGhEaXNjLFxyXG4gICAgc2V0UHJpY2VdID0gdXNlU3RhdGUoMjAwMDAwKVxyXG5cclxuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgY29uc3QgZGF5ID0gdG9kYXkuZ2V0RGF0ZSgpXHJcbiAgY29uc3QgbW9udGggPSB0b2RheS5nZXRNb250aCgpICsgMVxyXG4gIGNvbnN0IHllYXIgPSB0b2RheS5nZXRGdWxsWWVhcigpXHJcblxyXG4gIGNvbnN0IHBhcnNlRGF5ID0gZGF5IDwgMTBcclxuICAgID8gXCIwXCIgKyBkYXlcclxuICAgIDogZGF5XHJcbiAgY29uc3QgcGFyc2VNb250aCA9IHBhcnNlSW50KG1vbnRoKSA+IDEwXHJcbiAgICA/IFwiMCBcIiArIG1vbnRoXHJcbiAgICA6IFwiMFwiICsgbW9udGhcclxuXHJcbiAgY29uc3QgdG9kYXlQYXJzZSA9IHBhcnNlRGF5ICsgXCIuXCIgKyBwYXJzZU1vbnRoICsgXCIuXCIgKyB5ZWFyICsgXCLQsy5cIjtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC8oaVBob25lfGlQb2R8aVBhZHxBbmRyb2lkfEJsYWNrQmVycnl8SUVNb2JpbGUpLykpICB7XHJcbiAgICAgIHdpbmRvdy5wcmludCgpXHJcbiAgICB9XHJcblxyXG4gIH0sIFtdKVxyXG5cclxuICAvLyBjb25zdCBvblNhdmUgPSAoKSA9PiB7ICAgdmFyIHBkZiA9IG5ldyBqc1BERigncCcsICdwdCcsICdhNCcpO1xyXG4gIC8vIHdpbmRvdy5odG1sMmNhbnZhcyA9IGh0bWwyY2FudmFzICAgICAgIGNvbnN0IGRvYyA9XHJcbiAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2RpdicpWzBdOyAgICAgICBpZiAoZG9jKSB7XHJcbiAgLy8gY29uc29sZS5sb2coXCJkaXYgaXMgXCIpOyAgICAgICAgICAgY29uc29sZS5sb2coZG9jKTtcclxuICAvLyBjb25zb2xlLmxvZyhcImhlbGxvd3d3XCIpOyAgICAgICAgICAgcGRmLmh0bWwoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RvYycpLCB7XHJcbiAgLy8gICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKHBkZikge1xyXG4gIC8vIHBkZi5zYXZlKCdET0MucGRmJyk7ICAgICAgICAgICAgICAgfSAgICAgICAgICAgfSkgICAgICB9IH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcbiAgICAgXHJcbiAgICAgIHsvKiA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uU2F2ZSgpfT5TYXZlPC9idXR0b24+ICovfVxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9OTYwXCIvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxKdXJEb2dcclxuICAgICAgICBwcmljZVdpdGhEaXNjPXtwcmljZVdpdGhEaXNjfVxyXG4gICAgICAgIGNvbXBhbnlOYW1lPXtjb21wYW55TmFtZX1cclxuICAgICAgICB0b2RheVBhcnNlPXt0b2RheVBhcnNlfS8+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRG9nb3ZvciJdLCJzb3VyY2VSb290IjoiIn0=