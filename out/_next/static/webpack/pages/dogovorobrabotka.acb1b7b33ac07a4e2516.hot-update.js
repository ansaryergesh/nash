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
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  var token = router.query.token;
  var id = router.query.id;
  var leadID = router.query.leadID;
  var finalID = id || leadID;
  var parseDay = day < 10 ? "0" + day : day;
  var parseMonth = parseInt(month) > 10 ? "0 " + month : "0" + month;
  var todayParse = parseDay + "." + parseMonth + "." + year;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/)) {
      window.print();
    }

    setLoading(true);

    if (finalID) {
      axios__WEBPACK_IMPORTED_MODULE_6___default().post("".concat("https://crediter.kz/api", "/getData?id=").concat(finalID)).then(function (res) {
        setLoading(false);

        if (res.data.client_type !== null) {
          setName(res.data.fio);
          setIin(res.data.iin);
          setCode(res.data.code);
        } else {// Router.push('/')
        }
      })["catch"](function (err) {
        next_router__WEBPACK_IMPORTED_MODULE_5___default().push('/');
      });
    }

    if (!finalID && !token && js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get('token')) {
      axios__WEBPACK_IMPORTED_MODULE_6___default().post("".concat("https://crediter.kz/api", "/getData?id=").concat(js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get('token'))).then(function (res) {
        setLoading(false);

        if (res.data.client_type !== null) {
          setName(res.data.fio);
          setIin(res.data.iin);
          setCode(res.data.code);
        } else {// Router.push('/')
        }
      })["catch"](function (err) {
        next_router__WEBPACK_IMPORTED_MODULE_5___default().push('/');
      });
    }

    if (token) {
      axios__WEBPACK_IMPORTED_MODULE_6___default().get("".concat("https://crediter.kz/api", "/getDataSign?token=").concat(token)).then(function (res) {
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
        lineNumber: 94,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }, _this), loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_loader_Loader__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 19
    }, _this), !loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_dogovorPor_ObrabotkaDannih__WEBPACK_IMPORTED_MODULE_2__.default, {
      name: name,
      code: code,
      iin: iin,
      todayParse: todayParse
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 20
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 5
  }, _this);
};

_s(Pdf, "6/1rke1vJs5kY1/aiEeG3WKLGqM=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZG9nb3Zvcm9icmFib3RrYS5qcyJdLCJuYW1lcyI6WyJQZGYiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzZXROYW1lIiwiaWluIiwic2V0SWluIiwiY29kZSIsInNldENvZGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInRvZGF5IiwiRGF0ZSIsImRheSIsImdldERhdGUiLCJtb250aCIsImdldE1vbnRoIiwieWVhciIsImdldEZ1bGxZZWFyIiwicm91dGVyIiwidXNlUm91dGVyIiwidG9rZW4iLCJxdWVyeSIsImlkIiwibGVhZElEIiwiZmluYWxJRCIsInBhcnNlRGF5IiwicGFyc2VNb250aCIsInBhcnNlSW50IiwidG9kYXlQYXJzZSIsInVzZUVmZmVjdCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIm1hdGNoIiwid2luZG93IiwicHJpbnQiLCJheGlvcyIsInByb2Nlc3MiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImNsaWVudF90eXBlIiwiZmlvIiwiZXJyIiwiUm91dGVyIiwiY29va2llIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBTTtBQUFBOztBQUFBLGtCQUNPQywrQ0FBUSxDQUFDLEVBQUQsQ0FEZjtBQUFBLE1BQ1RDLElBRFM7QUFBQSxNQUNKQyxPQURJOztBQUFBLG1CQUVLRiwrQ0FBUSxDQUFDLEVBQUQsQ0FGYjtBQUFBLE1BRVRHLEdBRlM7QUFBQSxNQUVMQyxNQUZLOztBQUFBLG1CQUdPSiwrQ0FBUSxDQUFDLEVBQUQsQ0FIZjtBQUFBLE1BR1RLLElBSFM7QUFBQSxNQUdKQyxPQUhJOztBQUFBLG1CQUthTiwrQ0FBUSxDQUFDLEtBQUQsQ0FMckI7QUFBQSxNQUtUTyxPQUxTO0FBQUEsTUFLREMsVUFMQzs7QUFNaEIsTUFBTUMsS0FBSyxHQUFH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YWMwN2E0ZTI1MTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IE9icmFib3RrYSBmcm9tIFwiLi4vY29tcG9uZW50cy9kb2dvdm9yUG9yL09icmFib3RrYURhbm5paFwiXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnXHJcbmltcG9ydCBSb3V0ZXIse3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2xvYWRlci9Mb2FkZXJcIlxyXG5jb25zdCBQZGYgPSAoKSA9PiB7XHJcbiAgY29uc3QgW25hbWUsc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbaWluLHNldElpbl0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbY29kZSxzZXRDb2RlXSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuICBjb25zdCBbbG9hZGluZyxzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICBjb25zdCBkYXkgPSB0b2RheS5nZXREYXRlKClcclxuICBjb25zdCBtb250aCA9IHRvZGF5LmdldE1vbnRoKCkgKyAxXHJcbiAgY29uc3QgeWVhciA9IHRvZGF5LmdldEZ1bGxZZWFyKClcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHt0b2tlbn0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCB7aWR9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgY29uc3Qge2xlYWRJRH0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCBmaW5hbElEID0gaWQgfHwgbGVhZElEXHJcbiAgY29uc3QgcGFyc2VEYXkgPSBkYXkgPCAxMFxyXG4gICAgPyBcIjBcIiArIGRheVxyXG4gICAgOiBkYXlcclxuICBjb25zdCBwYXJzZU1vbnRoID0gcGFyc2VJbnQobW9udGgpID4gMTBcclxuICAgID8gXCIwIFwiICsgbW9udGhcclxuICAgIDogXCIwXCIgKyBtb250aFxyXG5cclxuICBjb25zdCB0b2RheVBhcnNlID0gcGFyc2VEYXkgKyBcIi5cIiArIHBhcnNlTW9udGggKyBcIi5cIiArIHllYXI7XHJcblxyXG5cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC8oaVBob25lfGlQb2R8aVBhZHxBbmRyb2lkfEJsYWNrQmVycnl8SUVNb2JpbGUpLykpICB7XHJcbiAgICAgIHdpbmRvdy5wcmludCgpXHJcbiAgICB9XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICBpZihmaW5hbElEKSB7XHJcbiAgICAgIGF4aW9zLnBvc3QoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L2dldERhdGE/aWQ9JHtmaW5hbElEfWApXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICAgIGlmKHJlcy5kYXRhLmNsaWVudF90eXBlIT09IG51bGwpIHtcclxuICAgICAgICAgICAgc2V0TmFtZShyZXMuZGF0YS5maW8pXHJcbiAgICAgICAgICAgIHNldElpbihyZXMuZGF0YS5paW4pXHJcbiAgICAgICAgICAgIHNldENvZGUocmVzLmRhdGEuY29kZSlcclxuICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgLy8gUm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycj0+IHtcclxuICAgICAgICAgIFJvdXRlci5wdXNoKCcvJylcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgaWYoIWZpbmFsSUQgJiYgIXRva2VuICYmIGNvb2tpZS5nZXQoJ3Rva2VuJykpIHtcclxuICAgICAgYXhpb3MucG9zdChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vZ2V0RGF0YT9pZD0ke2Nvb2tpZS5nZXQoJ3Rva2VuJyl9YClcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgaWYocmVzLmRhdGEuY2xpZW50X3R5cGUhPT0gbnVsbCkge1xyXG4gICAgICAgICAgc2V0TmFtZShyZXMuZGF0YS5maW8pXHJcbiAgICAgICAgICBzZXRJaW4ocmVzLmRhdGEuaWluKVxyXG4gICAgICAgICAgc2V0Q29kZShyZXMuZGF0YS5jb2RlKVxyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgIC8vIFJvdXRlci5wdXNoKCcvJylcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnI9PiB7XHJcbiAgICAgICAgUm91dGVyLnB1c2goJy8nKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgaWYodG9rZW4pIHtcclxuICAgICAgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9nZXREYXRhU2lnbj90b2tlbj0ke3Rva2VufWApXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgIGlmKHJlcy5kYXRhLmNsaWVudF90eXBlIT09IG51bGwpIHtcclxuICAgICAgICAgIHNldE5hbWUocmVzLmRhdGEuZmlvKVxyXG4gICAgICAgICAgc2V0SWluKHJlcy5kYXRhLmlpbilcclxuICAgICAgICAgIHNldENvZGUocmVzLmRhdGEuY29kZSlcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyPT4ge1xyXG4gICAgICAgIFJvdXRlci5wdXNoKCcvJylcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBSb3V0ZXIucHVzaCgnLycpXHJcbiAgICB9XHJcbiAgfSwgW10pXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9OTYwXCIvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIHtsb2FkaW5nICYmIDxMb2FkZXIgLz59XHJcbiAgICAgIHshbG9hZGluZyAmJiA8T2JyYWJvdGthIG5hbWU9e25hbWV9IGNvZGU9e2NvZGV9IGlpbj17aWlufSB0b2RheVBhcnNlPXt0b2RheVBhcnNlfS8+fVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQZGYiXSwic291cmNlUm9vdCI6IiJ9