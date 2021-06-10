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
/* harmony import */ var _components_DogovorPor_FizDog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/DogovorPor/FizDog */ "./components/DogovorPor/FizDog.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_loader_Loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/loader/Loader */ "./components/loader/Loader.js");
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

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
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
    var lead_id = cookie.get('lead_id');

    if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/)) {
      window.print();
    }

    setLoading(true);

    if (paymentDate && period && lead_id) {
      axios__WEBPACK_IMPORTED_MODULE_6___default().get("".concat("https://crediter.kz/api", "/getData?id=").concat(lead_id)).then(function (res) {
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
        lineNumber: 82,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, _this), loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_loader_Loader__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 19
    }, _this), type === 'Физ лицо' && !loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DogovorPor_FizDog__WEBPACK_IMPORTED_MODULE_5__.default, {
      priceWithDisc: priceWithDisc,
      name: name,
      todayParse: paymentDate,
      phone: phone,
      iin: iin
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 43
    }, _this), type !== 'Физ лицо' && !loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DogovorPor_JurDog__WEBPACK_IMPORTED_MODULE_4__.default, {
      priceWithDisc: priceWithDisc,
      companyName: companyName,
      todayParse: todayParse,
      phone: phone
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 43
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 5
  }, _this);
};

_s(Dogovor, "pV6I9ab8hDo5ytxkLJnBesPv1Q0=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZG9nb3Zvci5qcyJdLCJuYW1lcyI6WyJEb2dvdm9yIiwicm91dGVyIiwidXNlUm91dGVyIiwicGF5bWVudERhdGUiLCJxdWVyeSIsInBlcmlvZCIsInVzZVN0YXRlIiwibmFtZSIsInNldE5hbWUiLCJ0eXBlIiwic2V0VHlwZSIsImlpbiIsInNldElpbiIsImNvbXBhbnlOYW1lIiwic2V0Q29tcGFueU5hbWUiLCJwcmljZVdpdGhEaXNjIiwic2V0UHJpY2UiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImNvZGUiLCJzZXRDb2RlIiwicGhvbmUiLCJzZXRQaG9uZSIsInRvZGF5IiwiRGF0ZSIsImRheSIsImdldERhdGUiLCJtb250aCIsImdldE1vbnRoIiwieWVhciIsImdldEZ1bGxZZWFyIiwicGFyc2VEYXkiLCJwYXJzZU1vbnRoIiwicGFyc2VJbnQiLCJ0b2RheVBhcnNlIiwidXNlRWZmZWN0IiwibGVhZF9pZCIsImNvb2tpZSIsImdldCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIm1hdGNoIiwid2luZG93IiwicHJpbnQiLCJheGlvcyIsInByb2Nlc3MiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImNsaWVudF90eXBlIiwiZmlvIiwiYW1vdW50UGF5bWVudCIsInB1c2giLCJlcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQ3BCLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFEb0IsTUFFYkMsV0FGYSxHQUVFRixNQUFNLENBQUNHLEtBRlQsQ0FFYkQsV0FGYTtBQUFBLE1BR2JFLE1BSGEsR0FHSEosTUFBTSxDQUFDRyxLQUhKLENBR2JDLE1BSGE7O0FBQUEsa0JBS1BDLCtDQUFRLENBQUMsRUFBRCxDQUxEO0FBQUEsTUFJ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RCxDQUFWO0FBQ0QsT0FsQkg7QUFtQkQ7QUFDRixHQTNCUSxFQTJCTixFQTNCTSxDQUFULENBakNvQixDQThEcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLHNCQUNFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQSw0QkFHRSw4REFBQyxrREFBRDtBQUFBLDZCQUNFO0FBQU0sWUFBSSxFQUFDLFVBQVg7QUFBc0IsZUFBTyxFQUFDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEYsRUFNR0QsT0FBTyxpQkFBSSw4REFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTmQsRUFPR1IsSUFBSSxLQUFLLFVBQVQsSUFBdUIsQ0FBQ1EsT0FBeEIsaUJBQW1DLDhEQUFDLGtFQUFEO0FBQ2xDLG1CQUFhLEVBQUVGLGFBRG1CO0FBRWxDLFVBQUksRUFBRVIsSUFGNEI7QUFHbEMsZ0JBQVUsRUFBRUosV0FIc0I7QUFLbEMsV0FBSyxFQUFFa0IsS0FMMkI7QUFNbEMsU0FBRyxFQUFFVjtBQU42QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUHRDLEVBY0dGLElBQUksS0FBSyxVQUFULElBQXVCLENBQUNRLE9BQXhCLGlCQUFtQyw4REFBQyxrRUFBRDtBQUNsQyxtQkFBYSxFQUFFRixhQURtQjtBQUVsQyxpQkFBVyxFQUFFRixXQUZxQjtBQUdsQyxnQkFBVSxFQUFFcUIsVUFIc0I7QUFJbEMsV0FBSyxFQUFFYjtBQUoyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBZHRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBd0JELENBNUZEOztHQUFNckIsTztVQUNXRSxrRDs7O0tBRFhGLE87QUE4Rk4sK0RBQWVBLE9BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZG9nb3Zvci5jMzNiNmZmZGY5MDAwMjM0MzI1Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbi8vIGltcG9ydCBqc1BERiBmcm9tICdqc3BkZicgaW1wb3J0IGh0bWwyY2FudmFzIGZyb20gJ2h0bWwyY2FudmFzJ1xyXG5pbXBvcnQgSnVyRG9nIGZyb20gJy4uL2NvbXBvbmVudHMvRG9nb3ZvclBvci9KdXJEb2cnXHJcbmltcG9ydCBGaXpEb2cgZnJvbSAnLi4vY29tcG9uZW50cy9Eb2dvdm9yUG9yL0ZpekRvZydcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvbG9hZGVyL0xvYWRlcidcclxuY29uc3QgRG9nb3ZvciA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHtwYXltZW50RGF0ZX0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3Qge3BlcmlvZH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3QgW25hbWUsXHJcbiAgICBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFt0eXBlLFxyXG4gICAgc2V0VHlwZV0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbaWluLFxyXG4gICAgc2V0SWluXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtjb21wYW55TmFtZSxcclxuICAgIHNldENvbXBhbnlOYW1lXSA9IHVzZVN0YXRlKCfQmtC+0LzQv9Cw0L3QuNGPJylcclxuICBjb25zdCBbcHJpY2VXaXRoRGlzYyxcclxuICAgIHNldFByaWNlXSA9IHVzZVN0YXRlKDIwMDAwMClcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbY29kZSxcclxuICAgIHNldENvZGVdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW3Bob25lLFxyXG4gICAgc2V0UGhvbmVdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gIGNvbnN0IGRheSA9IHRvZGF5LmdldERhdGUoKVxyXG4gIGNvbnN0IG1vbnRoID0gdG9kYXkuZ2V0TW9udGgoKSArIDFcclxuICBjb25zdCB5ZWFyID0gdG9kYXkuZ2V0RnVsbFllYXIoKVxyXG5cclxuICBjb25zdCBwYXJzZURheSA9IGRheSA8IDEwXHJcbiAgICA/IFwiMFwiICsgZGF5XHJcbiAgICA6IGRheVxyXG4gIGNvbnN0IHBhcnNlTW9udGggPSBwYXJzZUludChtb250aCkgPiAxMFxyXG4gICAgPyBcIjAgXCIgKyBtb250aFxyXG4gICAgOiBcIjBcIiArIG1vbnRoXHJcblxyXG4gIGNvbnN0IHRvZGF5UGFyc2UgPSBwYXJzZURheSArIFwiLlwiICsgcGFyc2VNb250aCArIFwiLlwiICsgeWVhciArIFwi0LMuXCI7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB2YXIgbGVhZF9pZCA9IGNvb2tpZS5nZXQoJ2xlYWRfaWQnKVxyXG4gICAgaWYgKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goLyhpUGhvbmV8aVBvZHxpUGFkfEFuZHJvaWR8QmxhY2tCZXJyeXxJRU1vYmlsZSkvKSkge1xyXG4gICAgICB3aW5kb3cucHJpbnQoKVxyXG4gICAgfVxyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgaWYgKHBheW1lbnREYXRlICYmIHBlcmlvZCAmJiBsZWFkX2lkKSB7XHJcbiAgICAgIGF4aW9zXHJcbiAgICAgICAgLmdldChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vZ2V0RGF0YT9pZD0ke2xlYWRfaWR9YClcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICAgIGlmIChyZXMuZGF0YS5jbGllbnRfdHlwZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBzZXROYW1lKHJlcy5kYXRhLmZpbylcclxuICAgICAgICAgICAgc2V0Q29tcGFueU5hbWUocmVzLmRhdGEuY29tcGFueU5hbWUpXHJcbiAgICAgICAgICAgIHNldElpbihyZXMuZGF0YS5paW4pXHJcbiAgICAgICAgICAgIHNldFR5cGUocmVzLmRhdGEuY2xpZW50X3R5cGUpXHJcbiAgICAgICAgICAgIHNldFByaWNlKHJlcy5kYXRhLmFtb3VudFBheW1lbnQpXHJcbiAgICAgICAgICAgIHNldFBob25lKHJlcy5kYXRhLnBob25lKVxyXG4gICAgICAgICAgICBzZXRDb2RlKHJlcy5kYXRhLmNvZGUpXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyPT4ge1xyXG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG5cclxuICAvLyBjb25zdCBvblNhdmUgPSAoKSA9PiB7ICAgdmFyIHBkZiA9IG5ldyBqc1BERigncCcsICdwdCcsICdhNCcpO1xyXG4gIC8vIHdpbmRvdy5odG1sMmNhbnZhcyA9IGh0bWwyY2FudmFzICAgICAgIGNvbnN0IGRvYyA9XHJcbiAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2RpdicpWzBdOyAgICAgICBpZiAoZG9jKSB7IGNvbnNvbGUubG9nKFwiZGl2IGlzXHJcbiAgLy8gXCIpOyAgICAgICAgICAgY29uc29sZS5sb2coZG9jKTsgY29uc29sZS5sb2coXCJoZWxsb3d3d1wiKTtcclxuICAvLyBwZGYuaHRtbChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG9jJyksIHsgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb25cclxuICAvLyAocGRmKSB7IHBkZi5zYXZlKCdET0MucGRmJyk7ICAgICAgICAgICAgICAgfSAgICAgICAgICAgfSkgICAgICB9IH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcblxyXG4gICAgICB7LyogPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvblNhdmUoKX0+U2F2ZTwvYnV0dG9uPiAqL31cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPTk2MFwiLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICB7bG9hZGluZyAmJiA8TG9hZGVyIC8+fVxyXG4gICAgICB7dHlwZSA9PT0gJ9Ck0LjQtyDQu9C40YbQvicgJiYgIWxvYWRpbmcgJiYgPEZpekRvZ1xyXG4gICAgICAgIHByaWNlV2l0aERpc2M9e3ByaWNlV2l0aERpc2N9XHJcbiAgICAgICAgbmFtZT17bmFtZX1cclxuICAgICAgICB0b2RheVBhcnNlPXtwYXltZW50RGF0ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBwaG9uZT17cGhvbmV9XHJcbiAgICAgICAgaWluPXtpaW59Lz59XHJcbiAgICAgIHt0eXBlICE9PSAn0KTQuNC3INC70LjRhtC+JyAmJiAhbG9hZGluZyAmJiA8SnVyRG9nXHJcbiAgICAgICAgcHJpY2VXaXRoRGlzYz17cHJpY2VXaXRoRGlzY31cclxuICAgICAgICBjb21wYW55TmFtZT17Y29tcGFueU5hbWV9XHJcbiAgICAgICAgdG9kYXlQYXJzZT17dG9kYXlQYXJzZX1cclxuICAgICAgICBwaG9uZT17cGhvbmV9Lz59XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRG9nb3ZvciJdLCJzb3VyY2VSb290IjoiIn0=