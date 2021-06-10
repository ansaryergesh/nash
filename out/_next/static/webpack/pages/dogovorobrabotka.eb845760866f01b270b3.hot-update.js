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
    }, _this), !loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_dogovorPor_ObrabotkaDannih__WEBPACK_IMPORTED_MODULE_2__.default, {
      name: name,
      code: code,
      iin: iin,
      todayParse: todayParse
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 20
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZG9nb3Zvcm9icmFib3RrYS5qcyJdLCJuYW1lcyI6WyJQZGYiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzZXROYW1lIiwiaWluIiwic2V0SWluIiwiY29kZSIsInNldENvZGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInRvZGF5IiwiRGF0ZSIsImRheSIsImdldERhdGUiLCJtb250aCIsImdldE1vbnRoIiwieWVhciIsImdldEZ1bGxZZWFyIiwicGFyc2VEYXkiLCJwYXJzZU1vbnRoIiwicGFyc2VJbnQiLCJ0b2RheVBhcnNlIiwidXNlRWZmZWN0IiwibGVhZF9pZCIsImNvb2tpZSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIm1hdGNoIiwid2luZG93IiwicHJpbnQiLCJheGlvcyIsInByb2Nlc3MiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImNsaWVudF90eXBlIiwiZmlvIiwiUm91dGVyIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBTTtBQUFBOztBQUFBLGtCQUNPQywrQ0FBUSxDQUFDLEVBQUQsQ0FEZjtBQUFBLE1BQ1RDLElBRFM7QUFBQSxNQUNKQyxPQURJOztBQUFBLG1CQUVLRiwrQ0FBUSxDQUFDLEVBQUQsQ0FGYjtBQUFBLE1BRVRHLEdBRlM7QUFBQSxNQUVMQyxNQUZLOztBQUFBLG1CQUdPSiwrQ0FBUSxDQUFDLEVBQUQsQ0FIZjtBQUFBLE1BR1RLLElBSFM7QUFBQSxNQUdKQyxPQUhJOztBQUFBLG1CQUthTiwrQ0FBUSxDQUFDLEtBQUQsQ0FMckI7QUFBQSxNQUtUTyxPQUxTO0FBQUEsTUFLREMsVUFMQzs7QUFNaEIsTUFBTUMsS0FBSyxHQUFHLElBQUlDLElBQUosRUFBZDtBQUNBLE1BQU1DLEdBQUcsR0FBR0YsS0FBSyxDQUFDRyxPQUFOLEVBQVo7QUFDQSxNQUFNQyxLQUFLLEdBQUdKLEtBQUssQ0FBQ0ssUUFBTixLQUFtQixDQUFqQztBQUNBLE1BQU1DLElBQUksR0FBR04sS0FBSyxDQUFDTyxXQUFOLEVBQWI7QUFFQSxNQUFNQyxRQUFRLEdBQUdOLEdBQUcsR0FBRyxFQUFOLEdBQ2IsTUFBTUEsR0FETyxHQUViQSxHQUZKO0FBR0EsTUFBTU8sVUFBVSxHQUFHQyxRQUFRLENBQUNOLEtBQUQsQ0FBUixHQUFrQixFQUFsQixHQUNmLE9BQU9BLEtBRFEsR0FFZixNQUFNQSxLQUZWO0FBSUEsTUFBTU8sVUFBVSxHQUFHSCxRQUFRLEdBQUcsR0FBWCxHQUFpQkMsVUFBakIsR0FBOEIsR0FBOUIsR0FBb0NILElBQXZEO0FBQ0FNLGtEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlDLE9BQU8sR0FBR0Msb0RBQUEsQ0FBVyxTQUFYLENBQWQ7O0FBQ0EsUUFBSUMsU0FBUyxDQUFDQyxTQUFWLENBQW9CQyxLQUFwQixDQUEwQixnREFBMUIsQ0FBSixFQUFrRjtBQUNoRkMsWUFBTSxDQUFDQyxLQUFQO0FBQ0Q7O0FBQ0RwQixjQUFVLENBQUMsSUFBRCxDQUFWOztBQUNBLFFBQUdjLE9BQUgsRUFBWTtBQUNWTyx1REFBQSxXQUFjQyx5QkFBZCx5QkFBaURSLE9BQWpELEdBQ0dTLElBREgsQ0FDUSxVQUFDQyxHQUFELEVBQVM7QUFDYnhCLGtCQUFVLENBQUMsS0FBRCxDQUFWOztBQUNBLFlBQUd3QixHQUFHLENBQUNDLElBQUosQ0FBU0MsV0FBVCxLQUF3QixJQUEzQixFQUFpQztBQUMvQmhDLGlCQUFPLENBQUM4QixHQUFHLENBQUNDLElBQUosQ0FBU0UsR0FBVixDQUFQO0FBQ0EvQixnQkFBTSxDQUFDNEIsR0FBRyxDQUFDQyxJQUFKLENBQVM5QixHQUFWLENBQU47QUFDQUcsaUJBQU8sQ0FBQzBCLEdBQUcsQ0FBQ0MsSUFBSixDQUFTNUIsSUFBVixDQUFQO0FBQ0QsU0FKRCxNQUlNO0FBQ0orQixpRUFBQSxDQUFZLEdBQVo7QUFDRDtBQUNGLE9BVkgsV0FXUyxVQUFBQyxHQUFHLEVBQUc7QUFDWEQsK0RBQUEsQ0FBWSxHQUFaO0FBQ0QsT0FiSDtBQWNELEtBZkQsTUFlTTtBQUNKQSw2REFBQSxDQUFZLEdBQVo7QUFDRDtBQUNGLEdBeEJRLEVBd0JOLEVBeEJNLENBQVQ7QUF5QkEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBLDRCQUVFLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0U7QUFBTSxZQUFJLEVBQUMsVUFBWDtBQUFzQixlQUFPLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixFQUtHN0IsT0FBTyxpQkFBSSw4REFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTGQsRUFNRyxDQUFDQSxPQUFELGlCQUFZLDhEQUFDLDJFQUFEO0FBQVcsVUFBSSxFQUFFTixJQUFqQjtBQUF1QixVQUFJLEVBQUVJLElBQTdCO0FBQW1DLFNBQUcsRUFBRUYsR0FBeEM7QUFBNkMsZ0JBQVUsRUFBRWlCO0FBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFOZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVVELENBdEREOztHQUFNckIsRzs7S0FBQUEsRztBQXdETiwrREFBZUEsR0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kb2dvdm9yb2JyYWJvdGthLmViODQ1NzYwODY2ZjAxYjI3MGIzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBPYnJhYm90a2EgZnJvbSBcIi4uL2NvbXBvbmVudHMvZG9nb3ZvclBvci9PYnJhYm90a2FEYW5uaWhcIlxyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJ1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IExvYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9sb2FkZXIvTG9hZGVyXCJcclxuY29uc3QgUGRmID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtuYW1lLHNldE5hbWVdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW2lpbixzZXRJaW5dID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW2NvZGUsc2V0Q29kZV0gPSB1c2VTdGF0ZSgnJylcclxuXHJcbiAgY29uc3QgW2xvYWRpbmcsc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgY29uc3QgZGF5ID0gdG9kYXkuZ2V0RGF0ZSgpXHJcbiAgY29uc3QgbW9udGggPSB0b2RheS5nZXRNb250aCgpICsgMVxyXG4gIGNvbnN0IHllYXIgPSB0b2RheS5nZXRGdWxsWWVhcigpXHJcblxyXG4gIGNvbnN0IHBhcnNlRGF5ID0gZGF5IDwgMTBcclxuICAgID8gXCIwXCIgKyBkYXlcclxuICAgIDogZGF5XHJcbiAgY29uc3QgcGFyc2VNb250aCA9IHBhcnNlSW50KG1vbnRoKSA+IDEwXHJcbiAgICA/IFwiMCBcIiArIG1vbnRoXHJcbiAgICA6IFwiMFwiICsgbW9udGhcclxuXHJcbiAgY29uc3QgdG9kYXlQYXJzZSA9IHBhcnNlRGF5ICsgXCIuXCIgKyBwYXJzZU1vbnRoICsgXCIuXCIgKyB5ZWFyO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB2YXIgbGVhZF9pZCA9IGNvb2tpZS5nZXQoJ2xlYWRfaWQnKVxyXG4gICAgaWYgKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goLyhpUGhvbmV8aVBvZHxpUGFkfEFuZHJvaWR8QmxhY2tCZXJyeXxJRU1vYmlsZSkvKSkgIHtcclxuICAgICAgd2luZG93LnByaW50KClcclxuICAgIH1cclxuICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgIGlmKGxlYWRfaWQpIHtcclxuICAgICAgYXhpb3MucG9zdChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vZ2V0RGF0YT9pZD0ke2xlYWRfaWR9YClcclxuICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgICAgaWYocmVzLmRhdGEuY2xpZW50X3R5cGUhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBzZXROYW1lKHJlcy5kYXRhLmZpbylcclxuICAgICAgICAgICAgc2V0SWluKHJlcy5kYXRhLmlpbilcclxuICAgICAgICAgICAgc2V0Q29kZShyZXMuZGF0YS5jb2RlKVxyXG4gICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyPT4ge1xyXG4gICAgICAgICAgUm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgIH0pXHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgIFJvdXRlci5wdXNoKCcvJylcclxuICAgIH1cclxuICB9LCBbXSlcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcblxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9OTYwXCIvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIHtsb2FkaW5nICYmIDxMb2FkZXIgLz59XHJcbiAgICAgIHshbG9hZGluZyAmJiA8T2JyYWJvdGthIG5hbWU9e25hbWV9IGNvZGU9e2NvZGV9IGlpbj17aWlufSB0b2RheVBhcnNlPXt0b2RheVBhcnNlfS8+fVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQZGYiXSwic291cmNlUm9vdCI6IiJ9