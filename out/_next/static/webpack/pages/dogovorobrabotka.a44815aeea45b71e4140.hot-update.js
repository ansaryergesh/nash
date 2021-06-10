self["webpackHotUpdate_N_E"]("pages/dogovorobrabotka",{

/***/ "./components/loader/Loader.js":
/*!*************************************!*\
  !*** ./components/loader/Loader.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\job\\nashcompany\\components\\loader\\Loader.js",
    _this = undefined;

var Loader = function Loader() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "loader",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "loader--content",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        alt: "image",
        className: "logo",
        src: "/img/logo/logoSmall.svg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 5,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, _this);
};

_c = Loader;
/* harmony default export */ __webpack_exports__["default"] = (Loader);

var _c;

$RefreshReg$(_c, "Loader");

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


/***/ }),

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
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_loader_Loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/loader/Loader */ "./components/loader/Loader.js");
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

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth() + 1;
  var year = today.getFullYear();
  var parseDay = day < 10 ? "0" + day : day;
  var parseMonth = parseInt(month) > 10 ? "0 " + month : "0" + month;
  var todayParse = parseDay + "." + parseMonth + "." + year;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var lead_id = js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get('lead_id');

    if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/)) {
      window.print();
    }

    setLoading(true);

    if (lead_id) {
      axios__WEBPACK_IMPORTED_MODULE_6___default().post("".concat("https://crediter.kz/api", "/getData?id=").concat(lead_id)).then(function (res) {
        setLoading(false);

        if (res.data.client_type !== null) {
          setName(res.data.fio);
          setIin(res.data.iin);
          setCode(res.data.code);
        } else {
          next_router__WEBPACK_IMPORTED_MODULE_5___default().push('/');
        }
      })["catch"](function (err) {
        next_router__WEBPACK_IMPORTED_MODULE_5___default().push('/');
      });
    } else {
      next_router__WEBPACK_IMPORTED_MODULE_5___default().push('/');
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
        lineNumber: 56,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, _this), loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_loader_Loader__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 19
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_dogovorPor_ObrabotkaDannih__WEBPACK_IMPORTED_MODULE_2__.default, {
      name: name,
      code: code,
      iin: iin,
      todayParse: todayParse
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 5
  }, _this);
};

_s(Pdf, "bw15CN6Jh+t7D48/JOB1h6nXoKY=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sb2FkZXIvTG9hZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9kb2dvdm9yb2JyYWJvdGthLmpzIl0sIm5hbWVzIjpbIkxvYWRlciIsIlBkZiIsInVzZVN0YXRlIiwibmFtZSIsInNldE5hbWUiLCJpaW4iLCJzZXRJaW4iLCJjb2RlIiwic2V0Q29kZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidG9kYXkiLCJEYXRlIiwiZGF5IiwiZ2V0RGF0ZSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJwYXJzZURheSIsInBhcnNlTW9udGgiLCJwYXJzZUludCIsInRvZGF5UGFyc2UiLCJ1c2VFZmZlY3QiLCJsZWFkX2lkIiwiY29va2llIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwibWF0Y2giLCJ3aW5kb3ciLCJwcmludCIsImF4aW9zIiwicHJvY2VzcyIsInRoZW4iLCJyZXMiLCJkYXRhIiwiY2xpZW50X3R5cGUiLCJmaW8iLCJSb3V0ZXIiLCJlcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDbkIsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsUUFBZjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLGlCQUFmO0FBQUEsOEJBQ0U7QUFBSyxXQUFHLEVBQUMsT0FBVDtBQUFpQixpQkFBUyxFQUFDLE1BQTNCO0FBQWtDLFdBQUcsRUFBQztBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVFELENBVEQ7O0tBQU1BLE07QUFXTiwrREFBZUEsTUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFVLEVBQUVpQjtBQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFVRCxDQXRERDs7R0FBTXJCLEc7O0tBQUFBLEc7QUF3RE4sK0RBQWVBLEdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZG9nb3Zvcm9icmFib3RrYS5hNDQ4MTVhZWVhNDViNzFlNDE0MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgTG9hZGVyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nbG9hZGVyJz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2xvYWRlci0tY29udGVudCc+XHJcbiAgICAgICAgPGltZyBhbHQ9J2ltYWdlJyBjbGFzc05hbWU9J2xvZ28nIHNyYz0nL2ltZy9sb2dvL2xvZ29TbWFsbC5zdmcnLz5cclxuICAgICAgICA8cD7Ql9Cw0LPRgNGD0LfQutCwLi4uPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyOyIsImltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IE9icmFib3RrYSBmcm9tIFwiLi4vY29tcG9uZW50cy9kb2dvdm9yUG9yL09icmFib3RrYURhbm5paFwiXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2xvYWRlci9Mb2FkZXJcIlxyXG5jb25zdCBQZGYgPSAoKSA9PiB7XHJcbiAgY29uc3QgW25hbWUsc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbaWluLHNldElpbl0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbY29kZSxzZXRDb2RlXSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuICBjb25zdCBbbG9hZGluZyxzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICBjb25zdCBkYXkgPSB0b2RheS5nZXREYXRlKClcclxuICBjb25zdCBtb250aCA9IHRvZGF5LmdldE1vbnRoKCkgKyAxXHJcbiAgY29uc3QgeWVhciA9IHRvZGF5LmdldEZ1bGxZZWFyKClcclxuXHJcbiAgY29uc3QgcGFyc2VEYXkgPSBkYXkgPCAxMFxyXG4gICAgPyBcIjBcIiArIGRheVxyXG4gICAgOiBkYXlcclxuICBjb25zdCBwYXJzZU1vbnRoID0gcGFyc2VJbnQobW9udGgpID4gMTBcclxuICAgID8gXCIwIFwiICsgbW9udGhcclxuICAgIDogXCIwXCIgKyBtb250aFxyXG5cclxuICBjb25zdCB0b2RheVBhcnNlID0gcGFyc2VEYXkgKyBcIi5cIiArIHBhcnNlTW9udGggKyBcIi5cIiArIHllYXI7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHZhciBsZWFkX2lkID0gY29va2llLmdldCgnbGVhZF9pZCcpXHJcbiAgICBpZiAobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvKGlQaG9uZXxpUG9kfGlQYWR8QW5kcm9pZHxCbGFja0JlcnJ5fElFTW9iaWxlKS8pKSAge1xyXG4gICAgICB3aW5kb3cucHJpbnQoKVxyXG4gICAgfVxyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgaWYobGVhZF9pZCkge1xyXG4gICAgICBheGlvcy5wb3N0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9nZXREYXRhP2lkPSR7bGVhZF9pZH1gKVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgICBpZihyZXMuZGF0YS5jbGllbnRfdHlwZSE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHNldE5hbWUocmVzLmRhdGEuZmlvKVxyXG4gICAgICAgICAgICBzZXRJaW4ocmVzLmRhdGEuaWluKVxyXG4gICAgICAgICAgICBzZXRDb2RlKHJlcy5kYXRhLmNvZGUpXHJcbiAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvJylcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnI9PiB7XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgICAgfSlcclxuICAgIH1lbHNlIHtcclxuICAgICAgUm91dGVyLnB1c2goJy8nKVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuXHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD05NjBcIi8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAge2xvYWRpbmcgJiYgPExvYWRlciAvPn1cclxuICAgICAgPE9icmFib3RrYSBuYW1lPXtuYW1lfSBjb2RlPXtjb2RlfSBpaW49e2lpbn0gdG9kYXlQYXJzZT17dG9kYXlQYXJzZX0vPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQZGYiXSwic291cmNlUm9vdCI6IiJ9