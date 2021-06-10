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
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_DogovorPor_JurDog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/DogovorPor/JurDog */ "./components/DogovorPor/JurDog.js");
/* harmony import */ var _components_DogovorPor_FizDog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/DogovorPor/FizDog */ "./components/DogovorPor/FizDog.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_loader_Loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/loader/Loader */ "./components/loader/Loader.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\job\\nashcompany\\pages\\dogovor.js",
    _this = undefined,
    _s = $RefreshSig$();




 // import jsPDF from 'jspdf' import html2canvas from 'html2canvas'






var Dogovor = function Dogovor() {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  var paymentDate = router.query.paymentDate;
  var period = router.query.period;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      name = _useState[0],
      setName = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      type = _useState2[0],
      setType = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      iin = _useState3[0],
      setIin = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('Компания'),
      companyName = _useState4[0],
      setCompanyName = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(200000),
      priceWithDisc = _useState5[0],
      setPrice = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),
      loading = _useState6[0],
      setLoading = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      code = _useState7[0],
      setCode = _useState7[1];

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      phone = _useState8[0],
      setPhone = _useState8[1];

  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth() + 1;
  var year = today.getFullYear();
  var parseDay = day < 10 ? "0" + day : day;
  var parseMonth = parseInt(month) > 10 ? "0 " + month : "0" + month;
  var todayParse = parseDay + "." + parseMonth + "." + year + "г.";
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (loading === false) {
      if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/)) {
        window.print();
      }
    }
  }, [loading]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var lead_id = js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get('lead_id');
    setLoading(true);

    if (lead_id) {
      axios__WEBPACK_IMPORTED_MODULE_7___default().post("".concat("https://crediter.kz/api", "/getData?id=").concat(lead_id)).then(function (res) {
        console.log(res);
        setLoading(false);

        if (res.data.client_type !== null) {
          setName(res.data.fio);
          setCompanyName(res.data.companyName);
          setIin(res.data.iin);
          setType(res.data.client_type);
          setPrice(res.data.amountPayment);
          setPhone(res.data.phone);
          setCode(res.data.code);
        } else {
          router.push('/');
        }
      })["catch"](function (err) {
        setLoading(false);
      });
    } else {
      router.push('/');
    }
  }, []); // const onSave = () => {   var pdf = new jsPDF('p', 'pt', 'a4');
  // window.html2canvas = html2canvas       const doc =
  // document.getElementsByTagName('div')[0];       if (doc) { console.log("div is
  // ");           console.log(doc); console.log("hellowww");
  // pdf.html(document.getElementById('doc'), {               callback: function
  // (pdf) { pdf.save('DOC.pdf');               }           })      } }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "container",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "viewport",
        content: "width=960"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }, _this), loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_loader_Loader__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 19
    }, _this), type === 'Физ лицо' && !loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DogovorPor_FizDog__WEBPACK_IMPORTED_MODULE_6__.default, {
      priceWithDisc: priceWithDisc,
      name: name,
      todayParse: todayParse,
      phone: phone,
      iin: iin
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 43
    }, _this), type !== 'Физ лицо' && !loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DogovorPor_JurDog__WEBPACK_IMPORTED_MODULE_5__.default, {
      priceWithDisc: priceWithDisc,
      companyName: companyName,
      todayParse: todayParse,
      phone: phone
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 43
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 87,
    columnNumber: 5
  }, _this);
};

_s(Dogovor, "OfPNRx6lqWDNAeu6RxX+PoI5mBk=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZG9nb3Zvci5qcyJdLCJuYW1lcyI6WyJEb2dvdm9yIiwicm91dGVyIiwidXNlUm91dGVyIiwicGF5bWVudERhdGUiLCJxdWVyeSIsInBlcmlvZCIsInVzZVN0YXRlIiwibmFtZSIsInNldE5hbWUiLCJ0eXBlIiwic2V0VHlwZSIsImlpbiIsInNldElpbiIsImNvbXBhbnlOYW1lIiwic2V0Q29tcGFueU5hbWUiLCJwcmljZVdpdGhEaXNjIiwic2V0UHJpY2UiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImNvZGUiLCJzZXRDb2RlIiwicGhvbmUiLCJzZXRQaG9uZSIsInRvZGF5IiwiRGF0ZSIsImRheSIsImdldERhdGUiLCJtb250aCIsImdldE1vbnRoIiwieWVhciIsImdldEZ1bGxZZWFyIiwicGFyc2VEYXkiLCJwYXJzZU1vbnRoIiwicGFyc2VJbnQiLCJ0b2RheVBhcnNlIiwidXNlRWZmZWN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwibWF0Y2giLCJ3aW5kb3ciLCJwcmludCIsImxlYWRfaWQiLCJjb29raWUiLCJheGlvcyIsInByb2Nlc3MiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJjbGllbnRfdHlwZSIsImZpbyIsImFtb3VudFBheW1lbnQiLCJwdXNoIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFDcEIsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQURvQixNQUViQyxXQUZhLEdBRUVGLE1BQU0sQ0FBQ0csS0FGVCxDQUViRCxXQUZhO0FBQUEsTUFHYkUsTUFIYSxHQUdISixNQUFNLENBQUNHLEtBSEosQ0FHYkMsTUFIYTs7QUFBQSxrQkFLUEMsK0NBQVEsQ0FBQyxF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TztVQUNXRSxrRDs7O0tBRFhGLE87QUFzR04sK0RBQWVBLE9BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZG9nb3Zvci5mOGE5OTM2ZWYxYWM0ZWVjZmE4MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJ1xyXG4vLyBpbXBvcnQganNQREYgZnJvbSAnanNwZGYnIGltcG9ydCBodG1sMmNhbnZhcyBmcm9tICdodG1sMmNhbnZhcydcclxuaW1wb3J0IEp1ckRvZyBmcm9tICcuLi9jb21wb25lbnRzL0RvZ292b3JQb3IvSnVyRG9nJ1xyXG5pbXBvcnQgRml6RG9nIGZyb20gJy4uL2NvbXBvbmVudHMvRG9nb3ZvclBvci9GaXpEb2cnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2xvYWRlci9Mb2FkZXInXHJcbmNvbnN0IERvZ292b3IgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCB7cGF5bWVudERhdGV9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IHtwZXJpb2R9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IFtuYW1lLFxyXG4gICAgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbdHlwZSxcclxuICAgIHNldFR5cGVdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW2lpbixcclxuICAgIHNldElpbl0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbY29tcGFueU5hbWUsXHJcbiAgICBzZXRDb21wYW55TmFtZV0gPSB1c2VTdGF0ZSgn0JrQvtC80L/QsNC90LjRjycpXHJcbiAgY29uc3QgW3ByaWNlV2l0aERpc2MsXHJcbiAgICBzZXRQcmljZV0gPSB1c2VTdGF0ZSgyMDAwMDApXHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcclxuICBjb25zdCBbY29kZSxcclxuICAgIHNldENvZGVdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW3Bob25lLFxyXG4gICAgc2V0UGhvbmVdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gIGNvbnN0IGRheSA9IHRvZGF5LmdldERhdGUoKVxyXG4gIGNvbnN0IG1vbnRoID0gdG9kYXkuZ2V0TW9udGgoKSArIDFcclxuICBjb25zdCB5ZWFyID0gdG9kYXkuZ2V0RnVsbFllYXIoKVxyXG5cclxuICBjb25zdCBwYXJzZURheSA9IGRheSA8IDEwXHJcbiAgICA/IFwiMFwiICsgZGF5XHJcbiAgICA6IGRheVxyXG4gIGNvbnN0IHBhcnNlTW9udGggPSBwYXJzZUludChtb250aCkgPiAxMFxyXG4gICAgPyBcIjAgXCIgKyBtb250aFxyXG4gICAgOiBcIjBcIiArIG1vbnRoXHJcblxyXG4gIGNvbnN0IHRvZGF5UGFyc2UgPSBwYXJzZURheSArIFwiLlwiICsgcGFyc2VNb250aCArIFwiLlwiICsgeWVhciArIFwi0LMuXCI7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZihsb2FkaW5nID09PSBmYWxzZSkge1xyXG4gICAgICBpZiAobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvKGlQaG9uZXxpUG9kfGlQYWR8QW5kcm9pZHxCbGFja0JlcnJ5fElFTW9iaWxlKS8pKSB7XHJcbiAgICAgICAgd2luZG93LnByaW50KClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFtsb2FkaW5nXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgdmFyIGxlYWRfaWQgPSBjb29raWUuZ2V0KCdsZWFkX2lkJylcclxuICAgIFxyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgaWYgKGxlYWRfaWQpIHtcclxuICAgICAgYXhpb3NcclxuICAgICAgICAucG9zdChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vZ2V0RGF0YT9pZD0ke2xlYWRfaWR9YClcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICAgIGlmIChyZXMuZGF0YS5jbGllbnRfdHlwZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBzZXROYW1lKHJlcy5kYXRhLmZpbylcclxuICAgICAgICAgICAgc2V0Q29tcGFueU5hbWUocmVzLmRhdGEuY29tcGFueU5hbWUpXHJcbiAgICAgICAgICAgIHNldElpbihyZXMuZGF0YS5paW4pXHJcbiAgICAgICAgICAgIHNldFR5cGUocmVzLmRhdGEuY2xpZW50X3R5cGUpXHJcbiAgICAgICAgICAgIHNldFByaWNlKHJlcy5kYXRhLmFtb3VudFBheW1lbnQpXHJcbiAgICAgICAgICAgIHNldFBob25lKHJlcy5kYXRhLnBob25lKVxyXG4gICAgICAgICAgICBzZXRDb2RlKHJlcy5kYXRhLmNvZGUpXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyPT4ge1xyXG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICB9KVxyXG4gICAgfWVsc2Uge1xyXG4gICAgICByb3V0ZXIucHVzaCgnLycpXHJcbiAgICB9XHJcbiAgfSwgW10pXHJcblxyXG4gIC8vIGNvbnN0IG9uU2F2ZSA9ICgpID0+IHsgICB2YXIgcGRmID0gbmV3IGpzUERGKCdwJywgJ3B0JywgJ2E0Jyk7XHJcbiAgLy8gd2luZG93Lmh0bWwyY2FudmFzID0gaHRtbDJjYW52YXMgICAgICAgY29uc3QgZG9jID1cclxuICAvLyBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZGl2JylbMF07ICAgICAgIGlmIChkb2MpIHsgY29uc29sZS5sb2coXCJkaXYgaXNcclxuICAvLyBcIik7ICAgICAgICAgICBjb25zb2xlLmxvZyhkb2MpOyBjb25zb2xlLmxvZyhcImhlbGxvd3d3XCIpO1xyXG4gIC8vIHBkZi5odG1sKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkb2MnKSwgeyAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvblxyXG4gIC8vIChwZGYpIHsgcGRmLnNhdmUoJ0RPQy5wZGYnKTsgICAgICAgICAgICAgICB9ICAgICAgICAgICB9KSAgICAgIH0gfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuXHJcbiAgICAgIHsvKiA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uU2F2ZSgpfT5TYXZlPC9idXR0b24+ICovfVxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9OTYwXCIvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIHtsb2FkaW5nICYmIDxMb2FkZXIgLz59XHJcbiAgICAgIHt0eXBlID09PSAn0KTQuNC3INC70LjRhtC+JyAmJiAhbG9hZGluZyAmJiA8Rml6RG9nXHJcbiAgICAgICAgcHJpY2VXaXRoRGlzYz17cHJpY2VXaXRoRGlzY31cclxuICAgICAgICBuYW1lPXtuYW1lfVxyXG4gICAgICAgIHRvZGF5UGFyc2U9e3RvZGF5UGFyc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgcGhvbmU9e3Bob25lfVxyXG4gICAgICAgIGlpbj17aWlufS8+fVxyXG4gICAgICB7dHlwZSAhPT0gJ9Ck0LjQtyDQu9C40YbQvicgJiYgIWxvYWRpbmcgJiYgPEp1ckRvZ1xyXG4gICAgICAgIHByaWNlV2l0aERpc2M9e3ByaWNlV2l0aERpc2N9XHJcbiAgICAgICAgY29tcGFueU5hbWU9e2NvbXBhbnlOYW1lfVxyXG4gICAgICAgIHRvZGF5UGFyc2U9e3RvZGF5UGFyc2V9XHJcbiAgICAgICAgcGhvbmU9e3Bob25lfS8+fVxyXG5cclxuICAgIDwvZGl2PlxyXG4gIClcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERvZ292b3IiXSwic291cmNlUm9vdCI6IiJ9