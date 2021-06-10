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

    if (paymentDate && period && lead_id) {
      axios__WEBPACK_IMPORTED_MODULE_7___default().get("".concat("https://crediter.kz/api", "/getData?id=").concat(lead_id)).then(function (res) {
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
        lineNumber: 89,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }, _this), loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_loader_Loader__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 19
    }, _this), type === 'Физ лицо' && !loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DogovorPor_FizDog__WEBPACK_IMPORTED_MODULE_6__.default, {
      priceWithDisc: priceWithDisc,
      name: name,
      todayParse: paymentDate,
      phone: phone,
      iin: iin
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 43
    }, _this), type !== 'Физ лицо' && !loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DogovorPor_JurDog__WEBPACK_IMPORTED_MODULE_5__.default, {
      priceWithDisc: priceWithDisc,
      companyName: companyName,
      todayParse: todayParse,
      phone: phone
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 43
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 85,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZG9nb3Zvci5qcyJdLCJuYW1lcyI6WyJEb2dvdm9yIiwicm91dGVyIiwidXNlUm91dGVyIiwicGF5bWVudERhdGUiLCJxdWVyeSIsInBlcmlvZCIsInVzZVN0YXRlIiwibmFtZSIsInNldE5hbWUiLCJ0eXBlIiwic2V0VHlwZSIsImlpbiIsInNldElpbiIsImNvbXBhbnlOYW1lIiwic2V0Q29tcGFueU5hbWUiLCJwcmljZVdpdGhEaXNjIiwic2V0UHJpY2UiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImNvZGUiLCJzZXRDb2RlIiwicGhvbmUiLCJzZXRQaG9uZSIsInRvZGF5IiwiRGF0ZSIsImRheSIsImdldERhdGUiLCJtb250aCIsImdldE1vbnRoIiwieWVhciIsImdldEZ1bGxZZWFyIiwicGFyc2VEYXkiLCJwYXJzZU1vbnRoIiwicGFyc2VJbnQiLCJ0b2RheVBhcnNlIiwidXNlRWZmZWN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwibWF0Y2giLCJ3aW5kb3ciLCJwcmludCIsImxlYWRfaWQiLCJjb29raWUiLCJheGlvcyIsInByb2Nlc3MiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJjbGllbnRfdHlwZSIsImZpbyIsImFtb3VudFBheW1lbnQiLCJwdXNoIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFDcEIsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQURvQixNQUViQyxXQUZhLEdBRUVGLE1BQU0sQ0FBQ0csS0FGVCxDQUViRCxXQUZhO0FBQUEsTUFHYkUsTUFIYSxHQUdISixNQUFNLENBQUNHLEtBSEosQ0FHYkMsTUFIYTs7QUFBQSxrQkFLUEMsK0NBQVEsQ0FBQyxF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LCtEQUFlQSxPQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RvZ292b3IuMDYzN2M4YzE1N2MwYTU0YzgyYzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSdcclxuLy8gaW1wb3J0IGpzUERGIGZyb20gJ2pzcGRmJyBpbXBvcnQgaHRtbDJjYW52YXMgZnJvbSAnaHRtbDJjYW52YXMnXHJcbmltcG9ydCBKdXJEb2cgZnJvbSAnLi4vY29tcG9uZW50cy9Eb2dvdm9yUG9yL0p1ckRvZydcclxuaW1wb3J0IEZpekRvZyBmcm9tICcuLi9jb21wb25lbnRzL0RvZ292b3JQb3IvRml6RG9nJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9sb2FkZXIvTG9hZGVyJ1xyXG5jb25zdCBEb2dvdm9yID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3Qge3BheW1lbnREYXRlfSA9IHJvdXRlci5xdWVyeTtcclxuICBjb25zdCB7cGVyaW9kfSA9IHJvdXRlci5xdWVyeTtcclxuICBjb25zdCBbbmFtZSxcclxuICAgIHNldE5hbWVdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW3R5cGUsXHJcbiAgICBzZXRUeXBlXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtpaW4sXHJcbiAgICBzZXRJaW5dID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW2NvbXBhbnlOYW1lLFxyXG4gICAgc2V0Q29tcGFueU5hbWVdID0gdXNlU3RhdGUoJ9Ca0L7QvNC/0LDQvdC40Y8nKVxyXG4gIGNvbnN0IFtwcmljZVdpdGhEaXNjLFxyXG4gICAgc2V0UHJpY2VdID0gdXNlU3RhdGUoMjAwMDAwKVxyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgY29uc3QgW2NvZGUsXHJcbiAgICBzZXRDb2RlXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtwaG9uZSxcclxuICAgIHNldFBob25lXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICBjb25zdCBkYXkgPSB0b2RheS5nZXREYXRlKClcclxuICBjb25zdCBtb250aCA9IHRvZGF5LmdldE1vbnRoKCkgKyAxXHJcbiAgY29uc3QgeWVhciA9IHRvZGF5LmdldEZ1bGxZZWFyKClcclxuXHJcbiAgY29uc3QgcGFyc2VEYXkgPSBkYXkgPCAxMFxyXG4gICAgPyBcIjBcIiArIGRheVxyXG4gICAgOiBkYXlcclxuICBjb25zdCBwYXJzZU1vbnRoID0gcGFyc2VJbnQobW9udGgpID4gMTBcclxuICAgID8gXCIwIFwiICsgbW9udGhcclxuICAgIDogXCIwXCIgKyBtb250aFxyXG5cclxuICBjb25zdCB0b2RheVBhcnNlID0gcGFyc2VEYXkgKyBcIi5cIiArIHBhcnNlTW9udGggKyBcIi5cIiArIHllYXIgKyBcItCzLlwiO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYobG9hZGluZyA9PT0gZmFsc2UpIHtcclxuICAgICAgaWYgKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goLyhpUGhvbmV8aVBvZHxpUGFkfEFuZHJvaWR8QmxhY2tCZXJyeXxJRU1vYmlsZSkvKSkge1xyXG4gICAgICAgIHdpbmRvdy5wcmludCgpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbbG9hZGluZ10pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHZhciBsZWFkX2lkID0gY29va2llLmdldCgnbGVhZF9pZCcpXHJcbiAgICBcclxuICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgIGlmIChwYXltZW50RGF0ZSAmJiBwZXJpb2QgJiYgbGVhZF9pZCkge1xyXG4gICAgICBheGlvc1xyXG4gICAgICAgIC5nZXQoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L2dldERhdGE/aWQ9JHtsZWFkX2lkfWApXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgICBpZiAocmVzLmRhdGEuY2xpZW50X3R5cGUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgc2V0TmFtZShyZXMuZGF0YS5maW8pXHJcbiAgICAgICAgICAgIHNldENvbXBhbnlOYW1lKHJlcy5kYXRhLmNvbXBhbnlOYW1lKVxyXG4gICAgICAgICAgICBzZXRJaW4ocmVzLmRhdGEuaWluKVxyXG4gICAgICAgICAgICBzZXRUeXBlKHJlcy5kYXRhLmNsaWVudF90eXBlKVxyXG4gICAgICAgICAgICBzZXRQcmljZShyZXMuZGF0YS5hbW91bnRQYXltZW50KVxyXG4gICAgICAgICAgICBzZXRQaG9uZShyZXMuZGF0YS5waG9uZSlcclxuICAgICAgICAgICAgc2V0Q29kZShyZXMuZGF0YS5jb2RlKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycj0+IHtcclxuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICB9LCBbXSlcclxuXHJcbiAgLy8gY29uc3Qgb25TYXZlID0gKCkgPT4geyAgIHZhciBwZGYgPSBuZXcganNQREYoJ3AnLCAncHQnLCAnYTQnKTtcclxuICAvLyB3aW5kb3cuaHRtbDJjYW52YXMgPSBodG1sMmNhbnZhcyAgICAgICBjb25zdCBkb2MgPVxyXG4gIC8vIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdkaXYnKVswXTsgICAgICAgaWYgKGRvYykgeyBjb25zb2xlLmxvZyhcImRpdiBpc1xyXG4gIC8vIFwiKTsgICAgICAgICAgIGNvbnNvbGUubG9nKGRvYyk7IGNvbnNvbGUubG9nKFwiaGVsbG93d3dcIik7XHJcbiAgLy8gcGRmLmh0bWwoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RvYycpLCB7ICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uXHJcbiAgLy8gKHBkZikgeyBwZGYuc2F2ZSgnRE9DLnBkZicpOyAgICAgICAgICAgICAgIH0gICAgICAgICAgIH0pICAgICAgfSB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG5cclxuICAgICAgey8qIDxidXR0b24gb25DbGljaz17KCkgPT4gb25TYXZlKCl9PlNhdmU8L2J1dHRvbj4gKi99XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD05NjBcIi8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAge2xvYWRpbmcgJiYgPExvYWRlciAvPn1cclxuICAgICAge3R5cGUgPT09ICfQpNC40Lcg0LvQuNGG0L4nICYmICFsb2FkaW5nICYmIDxGaXpEb2dcclxuICAgICAgICBwcmljZVdpdGhEaXNjPXtwcmljZVdpdGhEaXNjfVxyXG4gICAgICAgIG5hbWU9e25hbWV9XHJcbiAgICAgICAgdG9kYXlQYXJzZT17cGF5bWVudERhdGVcclxuICAgICAgICB9XHJcbiAgICAgICAgcGhvbmU9e3Bob25lfVxyXG4gICAgICAgIGlpbj17aWlufS8+fVxyXG4gICAgICB7dHlwZSAhPT0gJ9Ck0LjQtyDQu9C40YbQvicgJiYgIWxvYWRpbmcgJiYgPEp1ckRvZ1xyXG4gICAgICAgIHByaWNlV2l0aERpc2M9e3ByaWNlV2l0aERpc2N9XHJcbiAgICAgICAgY29tcGFueU5hbWU9e2NvbXBhbnlOYW1lfVxyXG4gICAgICAgIHRvZGF5UGFyc2U9e3RvZGF5UGFyc2V9XHJcbiAgICAgICAgcGhvbmU9e3Bob25lfS8+fVxyXG5cclxuICAgIDwvZGl2PlxyXG4gIClcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERvZ292b3IiXSwic291cmNlUm9vdCI6IiJ9