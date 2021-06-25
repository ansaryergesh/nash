self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Utm/Utm.js":
/*!*******************************!*\
  !*** ./components/Utm/Utm.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\job\\nashcompany\\components\\Utm\\Utm.js",
    _this = undefined,
    _s = $RefreshSig$();





var Utm = function Utm() {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  var v = router.query.v;
  var utm_source = router.query.utm_source;
  var utm_medium = router.query.utm_medium;
  var utm_campaign = router.query.utm_campaign;
  var transaction_id = router.query.transaction_id;
  var clickid = router.query.clickid;
  var token = router.query.token;
  var click_code = router.query.click_code; // const {web_id} = router.query

  var click_id = router.query.click_id;
  var leadID = router.query.leadID;

  var checkUtm = function checkUtm() {
    if (utm_source === 'guruleads' || utm_source === 'doaff' || utm_medium === 'leadgid' || utm_medium === 'own_sms_traffic' || utm_source === 'cpamarket') {
      return true;
    } else {
      return false;
    }
  };

  var checkLength = function checkLength() {
    if (utm_medium === 'leadgid') {
      return utm_medium;
    } else {
      return utm_source;
    }
  };

  var checkerUtm = checkUtm();
  var checkSource = checkLength();
  var finalclick = v || click_id || clickid || transaction_id || click_code || '';
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    console.log(utm_source);

    if (checkerUtm) {
      js_cookie__WEBPACK_IMPORTED_MODULE_3___default().set('click_id', finalclick, {
        expires: 60
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_3___default().set('utm_source', checkSource, {
        expires: 60
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_3___default().set('utm_medium', utm_medium, {
        expires: 60
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_3___default().set('utm_campaign', utm_campaign || utm_medium, {
        expires: 60
      }); // cookie.set('web_id', web_id,  {expires: 30})
    }
  }, [utm_source]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {// if(token && !leadID) {
    //   cookie.set('token', token, {expires: 3600})
    //   setTimeout(() => {
    //     router.push('/cabinet/requests')
    //   })
    // }
  }, [token]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 5
  }, _this);
};

_s(Utm, "TvQOAa6MuxS5wkANqefpxaThEc4=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];
});

_c = Utm;
/* harmony default export */ __webpack_exports__["default"] = (Utm);

var _c;

$RefreshReg$(_c, "Utm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VdG0vVXRtLmpzIl0sIm5hbWVzIjpbIlV0bSIsInJvdXRlciIsInVzZVJvdXRlciIsInYiLCJxdWVyeSIsInV0bV9zb3VyY2UiLCJ1dG1fbWVkaXVtIiwidXRtX2NhbXBhaWduIiwidHJhbnNhY3Rpb25faWQiLCJjbGlja2lkIiwidG9rZW4iLCJjbGlja19jb2RlIiwiY2xpY2tfaWQiLCJsZWFkSUQiLCJjaGVja1V0bSIsImNoZWNrTGVuZ3RoIiwiY2hlY2tlclV0bSIsImNoZWNrU291cmNlIiwiZmluYWxjbGljayIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJjb29raWUiLCJleHBpcmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUNBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLEdBQU07QUFBQTs7QUFDaEIsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQURnQixNQUVUQyxDQUZTLEdBRUpGLE1BQU0sQ0FBQ0csS0FGSCxDQUVURCxDQUZTO0FBQUEsTUFHVEUsVUFIUyxHQUdLSixNQUFNLENBQUNHLEtBSFosQ0FHVEMsVUFIUztBQUFBLE1BSVRDLFVBSlMsR0FJS0wsTUFBTSxDQUFDRyxLQUpaLENBSVRFLFVBSlM7QUFBQSxNQUtUQyxZQUxTLEdBS09OLE1BQU0sQ0FBQ0csS0FMZCxDQUtURyxZQUxTO0FBQUEsTUFNVEMsY0FOUyxHQU1TUCxNQUFNLENBQUNHLEtBTmhCLENBTVRJLGNBTlM7QUFBQSxNQU9UQyxPQVBTLEdBT0VSLE1BQU0sQ0FBQ0csS0FQVCxDQU9USyxPQVBTO0FBQUEsTUFRUkMsS0FSUSxHQVFDVCxNQUFNLENBQUNHLEtBUlIsQ0FRUk0sS0FSUTtBQUFBLE1BU1RDLFVBVFMsR0FTS1YsTUFBTSxDQUFDRyxLQVRaLENBU1RPLFVBVFMsRUFVaEI7O0FBVmdCLE1BV1RDLFFBWFMsR0FXR1gsTUFBTSxDQUFDRyxLQVhWLENBV1RRLFFBWFM7QUFBQSxNQVlUQyxNQVpTLEdBWUNaLE1BQU0sQ0FBQ0csS0FaUixDQVlUUyxNQVpTOztBQWFoQixNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBRXJCLFFBQUdULFVBQVUsS0FBSyxXQUFmLElBQ0RBLFVBQVUsS0FBSyxPQURkLElBQ3lCQyxVQUFVLEtBQUcsU0FEdEMsSUFDbURBLFVBQVUsS0FBSyxpQkFEbEUsSUFFREQsVUFBVSxLQUFLLFdBRmpCLEVBR0M7QUFDQyxhQUFPLElBQVA7QUFDRCxLQUxELE1BS007QUFDSixhQUFPLEtBQVA7QUFDRDtBQUNGLEdBVkQ7O0FBV0EsTUFBTVUsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QixRQUFHVCxVQUFVLEtBQUssU0FBbEIsRUFBNkI7QUFDM0IsYUFBT0EsVUFBUDtBQUNELEtBRkQsTUFFTTtBQUNKLGFBQU9ELFVBQVA7QUFDRDtBQUNGLEdBTkQ7O0FBT0EsTUFBTVcsVUFBVSxHQUFHRixRQUFRLEVBQTNCO0FBQ0EsTUFBTUcsV0FBVyxHQUFHRixXQUFXLEVBQS9CO0FBQ0EsTUFBTUcsVUFBVSxHQUFHZixDQUFDLElBQUlTLFFBQUwsSUFBaUJILE9BQWpCLElBQTRCRCxjQUE1QixJQUE4Q0csVUFBOUMsSUFBNEQsRUFBL0U7QUFFQVEsa0RBQVMsQ0FBQyxZQUFNO0FBQ2RDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZaEIsVUFBWjs7QUFDQSxRQUFHVyxVQUFILEVBQWU7QUFDYk0sMERBQUEsQ0FBVyxVQUFYLEVBQXVCSixVQUF2QixFQUFtQztBQUFDSyxlQUFPLEVBQUU7QUFBVixPQUFuQztBQUNBRCwwREFBQSxDQUFXLFlBQVgsRUFBeUJMLFdBQXpCLEVBQXNDO0FBQUNNLGVBQU8sRUFBRTtBQUFWLE9BQXRDO0FBQ0FELDBEQUFBLENBQVcsWUFBWCxFQUF5QmhCLFVBQXpCLEVBQXNDO0FBQUNpQixlQUFPLEVBQUU7QUFBVixPQUF0QztBQUNBRCwwREFBQSxDQUFXLGNBQVgsRUFBMkJmLFlBQVksSUFBSUQsVUFBM0MsRUFBdUQ7QUFBQ2lCLGVBQU8sRUFBRTtBQUFWLE9BQXZELEVBSmEsQ0FLYjtBQUNEO0FBRUYsR0FWUSxFQVVQLENBQUNsQixVQUFELENBVk8sQ0FBVDtBQVlBYyxrREFBUyxDQUFDLFlBQU0sQ0FDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRCxHQVBRLEVBT04sQ0FBQ1QsS0FBRCxDQVBNLENBQVQ7QUFRQSxzQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFJRCxDQTNERDs7R0FBTVYsRztVQUNXRSxrRDs7O0tBRFhGLEc7QUE2RE4sK0RBQWVBLEdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4wODI1ZTZmNTBlNjhiMTM1NzA0ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnXHJcbmNvbnN0IFV0bSA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHt2fSA9IHJvdXRlci5xdWVyeVxyXG4gIGNvbnN0IHt1dG1fc291cmNlfSA9IHJvdXRlci5xdWVyeVxyXG4gIGNvbnN0IHt1dG1fbWVkaXVtfSA9IHJvdXRlci5xdWVyeVxyXG4gIGNvbnN0IHt1dG1fY2FtcGFpZ259ID0gcm91dGVyLnF1ZXJ5XHJcbiAgY29uc3Qge3RyYW5zYWN0aW9uX2lkfSA9IHJvdXRlci5xdWVyeVxyXG4gIGNvbnN0IHtjbGlja2lkfSA9IHJvdXRlci5xdWVyeVxyXG4gIGNvbnN0ICB7dG9rZW59ID0gcm91dGVyLnF1ZXJ5XHJcbiAgY29uc3Qge2NsaWNrX2NvZGV9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgLy8gY29uc3Qge3dlYl9pZH0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCB7Y2xpY2tfaWR9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgY29uc3Qge2xlYWRJRH0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCBjaGVja1V0bSA9ICgpID0+IHtcclxuICAgIFxyXG4gICAgaWYodXRtX3NvdXJjZSA9PT0gJ2d1cnVsZWFkcycgfHxcclxuICAgICAgdXRtX3NvdXJjZSA9PT0gJ2RvYWZmJyB8fCB1dG1fbWVkaXVtPT09J2xlYWRnaWQnIHx8IHV0bV9tZWRpdW0gPT09ICdvd25fc21zX3RyYWZmaWMnIHx8XHJcbiAgICAgIHV0bV9zb3VyY2UgPT09ICdjcGFtYXJrZXQnXHJcbiAgICApe1xyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfWVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgY2hlY2tMZW5ndGggPSAoKSA9PiB7XHJcbiAgICBpZih1dG1fbWVkaXVtID09PSAnbGVhZGdpZCcpIHtcclxuICAgICAgcmV0dXJuIHV0bV9tZWRpdW1cclxuICAgIH1lbHNlIHtcclxuICAgICAgcmV0dXJuIHV0bV9zb3VyY2VcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgY2hlY2tlclV0bSA9IGNoZWNrVXRtKClcclxuICBjb25zdCBjaGVja1NvdXJjZSA9IGNoZWNrTGVuZ3RoKClcclxuICBjb25zdCBmaW5hbGNsaWNrID0gdiB8fCBjbGlja19pZCB8fCBjbGlja2lkIHx8IHRyYW5zYWN0aW9uX2lkIHx8IGNsaWNrX2NvZGUgfHwgJydcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHV0bV9zb3VyY2UpXHJcbiAgICBpZihjaGVja2VyVXRtKSB7XHJcbiAgICAgIGNvb2tpZS5zZXQoJ2NsaWNrX2lkJywgZmluYWxjbGljaywge2V4cGlyZXM6IDYwfSlcclxuICAgICAgY29va2llLnNldCgndXRtX3NvdXJjZScsIGNoZWNrU291cmNlLCB7ZXhwaXJlczogNjB9KVxyXG4gICAgICBjb29raWUuc2V0KCd1dG1fbWVkaXVtJywgdXRtX21lZGl1bSwgIHtleHBpcmVzOiA2MH0pXHJcbiAgICAgIGNvb2tpZS5zZXQoJ3V0bV9jYW1wYWlnbicsIHV0bV9jYW1wYWlnbiB8fCB1dG1fbWVkaXVtLCB7ZXhwaXJlczogNjB9KVxyXG4gICAgICAvLyBjb29raWUuc2V0KCd3ZWJfaWQnLCB3ZWJfaWQsICB7ZXhwaXJlczogMzB9KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgfSxbdXRtX3NvdXJjZV0pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBpZih0b2tlbiAmJiAhbGVhZElEKSB7XHJcbiAgICAvLyAgIGNvb2tpZS5zZXQoJ3Rva2VuJywgdG9rZW4sIHtleHBpcmVzOiAzNjAwfSlcclxuICAgIC8vICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAvLyAgICAgcm91dGVyLnB1c2goJy9jYWJpbmV0L3JlcXVlc3RzJylcclxuICAgIC8vICAgfSlcclxuICAgIC8vIH1cclxuICB9LCBbdG9rZW5dKVxyXG4gIHJldHVybihcclxuICAgIDxkaXY+PC9kaXY+XHJcbiAgKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXRtIl0sInNvdXJjZVJvb3QiOiIifQ==