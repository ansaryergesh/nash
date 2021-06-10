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
      paymentDate: paymentDate,
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
      paymentDate: paymentDate,
      phone: phone
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZG9nb3Zvci5qcyJdLCJuYW1lcyI6WyJEb2dvdm9yIiwicm91dGVyIiwidXNlUm91dGVyIiwicGF5bWVudERhdGUiLCJxdWVyeSIsInBlcmlvZCIsInVzZVN0YXRlIiwibmFtZSIsInNldE5hbWUiLCJ0eXBlIiwic2V0VHlwZSIsImlpbiIsInNldElpbiIsImNvbXBhbnlOYW1lIiwic2V0Q29tcGFueU5hbWUiLCJwcmljZVdpdGhEaXNjIiwic2V0UHJpY2UiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImNvZGUiLCJzZXRDb2RlIiwicGhvbmUiLCJzZXRQaG9uZSIsInRvZGF5IiwiRGF0ZSIsImRheSIsImdldERhdGUiLCJtb250aCIsImdldE1vbnRoIiwieWVhciIsImdldEZ1bGxZZWFyIiwicGFyc2VEYXkiLCJwYXJzZU1vbnRoIiwicGFyc2VJbnQiLCJ0b2RheVBhcnNlIiwidXNlRWZmZWN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwibWF0Y2giLCJ3aW5kb3ciLCJwcmludCIsImxlYWRfaWQiLCJjb29raWUiLCJheGlvcyIsInByb2Nlc3MiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJjbGllbnRfdHlwZSIsImZpbyIsImFtb3VudFBheW1lbnQiLCJwdXNoIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFDcEIsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQURvQixNQUViQyxXQUZhLEdBRUVGLE1BQU0sQ0FBQ0csS0FGVCxDQUViRCxXQUZhO0FBQUEsTUFHYkUsTUFIYSxHQUdISixNQUFNLENBQUNHLEtBSEosQ0FHYkMsTUFIYTs7QUFBQSxrQkFLUEMsK0NBQVEsQ0FBQyxF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QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTBCRCxDQXRHRDs7R0FBTXJCLE87VUFDV0Usa0Q7OztLQURYRixPO0FBd0dOLCtEQUFlQSxPQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RvZ292b3IuYWEyYzg5ZjM3M2U3MmE0ZjNhZTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSdcclxuLy8gaW1wb3J0IGpzUERGIGZyb20gJ2pzcGRmJyBpbXBvcnQgaHRtbDJjYW52YXMgZnJvbSAnaHRtbDJjYW52YXMnXHJcbmltcG9ydCBKdXJEb2cgZnJvbSAnLi4vY29tcG9uZW50cy9Eb2dvdm9yUG9yL0p1ckRvZydcclxuaW1wb3J0IEZpekRvZyBmcm9tICcuLi9jb21wb25lbnRzL0RvZ292b3JQb3IvRml6RG9nJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9sb2FkZXIvTG9hZGVyJ1xyXG5jb25zdCBEb2dvdm9yID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3Qge3BheW1lbnREYXRlfSA9IHJvdXRlci5xdWVyeTtcclxuICBjb25zdCB7cGVyaW9kfSA9IHJvdXRlci5xdWVyeTtcclxuICBjb25zdCBbbmFtZSxcclxuICAgIHNldE5hbWVdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW3R5cGUsXHJcbiAgICBzZXRUeXBlXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtpaW4sXHJcbiAgICBzZXRJaW5dID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW2NvbXBhbnlOYW1lLFxyXG4gICAgc2V0Q29tcGFueU5hbWVdID0gdXNlU3RhdGUoJ9Ca0L7QvNC/0LDQvdC40Y8nKVxyXG4gIGNvbnN0IFtwcmljZVdpdGhEaXNjLFxyXG4gICAgc2V0UHJpY2VdID0gdXNlU3RhdGUoMjAwMDAwKVxyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgY29uc3QgW2NvZGUsXHJcbiAgICBzZXRDb2RlXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtwaG9uZSxcclxuICAgIHNldFBob25lXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICBjb25zdCBkYXkgPSB0b2RheS5nZXREYXRlKClcclxuICBjb25zdCBtb250aCA9IHRvZGF5LmdldE1vbnRoKCkgKyAxXHJcbiAgY29uc3QgeWVhciA9IHRvZGF5LmdldEZ1bGxZZWFyKClcclxuXHJcbiAgY29uc3QgcGFyc2VEYXkgPSBkYXkgPCAxMFxyXG4gICAgPyBcIjBcIiArIGRheVxyXG4gICAgOiBkYXlcclxuICBjb25zdCBwYXJzZU1vbnRoID0gcGFyc2VJbnQobW9udGgpID4gMTBcclxuICAgID8gXCIwIFwiICsgbW9udGhcclxuICAgIDogXCIwXCIgKyBtb250aFxyXG5cclxuICBjb25zdCB0b2RheVBhcnNlID0gcGFyc2VEYXkgKyBcIi5cIiArIHBhcnNlTW9udGggKyBcIi5cIiArIHllYXIgKyBcItCzLlwiO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYobG9hZGluZyA9PT0gZmFsc2UpIHtcclxuICAgICAgaWYgKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goLyhpUGhvbmV8aVBvZHxpUGFkfEFuZHJvaWR8QmxhY2tCZXJyeXxJRU1vYmlsZSkvKSkge1xyXG4gICAgICAgIHdpbmRvdy5wcmludCgpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbbG9hZGluZ10pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHZhciBsZWFkX2lkID0gY29va2llLmdldCgnbGVhZF9pZCcpXHJcbiAgICBcclxuICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgIGlmIChsZWFkX2lkKSB7XHJcbiAgICAgIGF4aW9zXHJcbiAgICAgICAgLnBvc3QoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L2dldERhdGE/aWQ9JHtsZWFkX2lkfWApXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgICBpZiAocmVzLmRhdGEuY2xpZW50X3R5cGUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgc2V0TmFtZShyZXMuZGF0YS5maW8pXHJcbiAgICAgICAgICAgIHNldENvbXBhbnlOYW1lKHJlcy5kYXRhLmNvbXBhbnlOYW1lKVxyXG4gICAgICAgICAgICBzZXRJaW4ocmVzLmRhdGEuaWluKVxyXG4gICAgICAgICAgICBzZXRUeXBlKHJlcy5kYXRhLmNsaWVudF90eXBlKVxyXG4gICAgICAgICAgICBzZXRQcmljZShyZXMuZGF0YS5hbW91bnRQYXltZW50KVxyXG4gICAgICAgICAgICBzZXRQaG9uZShyZXMuZGF0YS5waG9uZSlcclxuICAgICAgICAgICAgc2V0Q29kZShyZXMuZGF0YS5jb2RlKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycj0+IHtcclxuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgfSlcclxuICAgIH1lbHNlIHtcclxuICAgICAgcm91dGVyLnB1c2goJy8nKVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG5cclxuICAvLyBjb25zdCBvblNhdmUgPSAoKSA9PiB7ICAgdmFyIHBkZiA9IG5ldyBqc1BERigncCcsICdwdCcsICdhNCcpO1xyXG4gIC8vIHdpbmRvdy5odG1sMmNhbnZhcyA9IGh0bWwyY2FudmFzICAgICAgIGNvbnN0IGRvYyA9XHJcbiAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2RpdicpWzBdOyAgICAgICBpZiAoZG9jKSB7IGNvbnNvbGUubG9nKFwiZGl2IGlzXHJcbiAgLy8gXCIpOyAgICAgICAgICAgY29uc29sZS5sb2coZG9jKTsgY29uc29sZS5sb2coXCJoZWxsb3d3d1wiKTtcclxuICAvLyBwZGYuaHRtbChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG9jJyksIHsgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb25cclxuICAvLyAocGRmKSB7IHBkZi5zYXZlKCdET0MucGRmJyk7ICAgICAgICAgICAgICAgfSAgICAgICAgICAgfSkgICAgICB9IH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcblxyXG4gICAgICB7LyogPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvblNhdmUoKX0+U2F2ZTwvYnV0dG9uPiAqL31cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPTk2MFwiLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICB7bG9hZGluZyAmJiA8TG9hZGVyIC8+fVxyXG4gICAgICB7dHlwZSA9PT0gJ9Ck0LjQtyDQu9C40YbQvicgJiYgIWxvYWRpbmcgJiYgPEZpekRvZ1xyXG4gICAgICAgIHByaWNlV2l0aERpc2M9e3ByaWNlV2l0aERpc2N9XHJcbiAgICAgICAgbmFtZT17bmFtZX1cclxuICAgICAgICB0b2RheVBhcnNlPXt0b2RheVBhcnNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBheW1lbnREYXRlPXtwYXltZW50RGF0ZX1cclxuICAgICAgICBwaG9uZT17cGhvbmV9XHJcbiAgICAgICAgaWluPXtpaW59Lz59XHJcbiAgICAgIHt0eXBlICE9PSAn0KTQuNC3INC70LjRhtC+JyAmJiAhbG9hZGluZyAmJiA8SnVyRG9nXHJcbiAgICAgICAgcHJpY2VXaXRoRGlzYz17cHJpY2VXaXRoRGlzY31cclxuICAgICAgICBjb21wYW55TmFtZT17Y29tcGFueU5hbWV9XHJcbiAgICAgICAgdG9kYXlQYXJzZT17dG9kYXlQYXJzZX1cclxuICAgICAgICBwYXltZW50RGF0ZSA9IHtwYXltZW50RGF0ZX1cclxuICAgICAgICBwaG9uZT17cGhvbmV9Lz59XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRG9nb3ZvciJdLCJzb3VyY2VSb290IjoiIn0=