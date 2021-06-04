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
  var transaction_id = router.query.transaction_id; // const {web_id} = router.query

  var click_id = router.query.click_id;

  var checkUtm = function checkUtm() {
    if (utm_source === 'guruleads' || utm_source === 'doaff' || utm_medium === 'leadgid') {
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
  var clickid = v || click_id || transaction_id;
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (checkerUtm) {
      js_cookie__WEBPACK_IMPORTED_MODULE_3___default().set('click_id', clickid, {
        expires: 30
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_3___default().set('utm_source', checkSource, {
        expires: 30
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_3___default().set('utm_medium', utm_medium, {
        expires: 30
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_3___default().set('utm_campaign', utm_campaign || utm_medium, {
        expires: 30
      }); // cookie.set('web_id', web_id,  {expires: 30})
    }
  }, [utm_source]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 5
  }, _this);
};

_s(Utm, "vQduR7x+OPXj6PSmJyFnf+hU7bg=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VdG0vVXRtLmpzIl0sIm5hbWVzIjpbIlV0bSIsInJvdXRlciIsInVzZVJvdXRlciIsInYiLCJxdWVyeSIsInV0bV9zb3VyY2UiLCJ1dG1fbWVkaXVtIiwidXRtX2NhbXBhaWduIiwidHJhbnNhY3Rpb25faWQiLCJjbGlja19pZCIsImNoZWNrVXRtIiwiY2hlY2tMZW5ndGgiLCJjaGVja2VyVXRtIiwiY2hlY2tTb3VyY2UiLCJjbGlja2lkIiwidXNlRWZmZWN0IiwiY29va2llIiwiZXhwaXJlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxHQUFNO0FBQUE7O0FBQ2hCLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFEZ0IsTUFFVEMsQ0FGUyxHQUVKRixNQUFNLENBQUNHLEtBRkgsQ0FFVEQsQ0FGUztBQUFBLE1BR1RFLFVBSFMsR0FHS0osTUFBTSxDQUFDRyxLQUhaLENBR1RDLFVBSFM7QUFBQSxNQUlUQyxVQUpTLEdBSUtMLE1BQU0sQ0FBQ0csS0FKWixDQUlURSxVQUpTO0FBQUEsTUFLVEMsWUFMUyxHQUtPTixNQUFNLENBQUNHLEtBTGQsQ0FLVEcsWUFMUztBQUFBLE1BTVRDLGNBTlMsR0FNU1AsTUFBTSxDQUFDRyxLQU5oQixDQU1USSxjQU5TLEVBT2hCOztBQVBnQixNQVFUQyxRQVJTLEdBUUdSLE1BQU0sQ0FBQ0csS0FSVixDQVFUSyxRQVJTOztBQVVoQixNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ3JCLFFBQUdMLFVBQVUsS0FBSyxXQUFmLElBQ0RBLFVBQVUsS0FBSyxPQURkLElBQ3lCQyxVQUFVLEtBQUcsU0FEekMsRUFFQztBQUNDLGFBQU8sSUFBUDtBQUNELEtBSkQsTUFJTTtBQUNKLGFBQU8sS0FBUDtBQUNEO0FBQ0YsR0FSRDs7QUFTQSxNQUFNSyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCLFFBQUdMLFVBQVUsS0FBSyxTQUFsQixFQUE2QjtBQUMzQixhQUFPQSxVQUFQO0FBQ0QsS0FGRCxNQUVNO0FBQ0osYUFBT0QsVUFBUDtBQUNEO0FBQ0YsR0FORDs7QUFPQSxNQUFNTyxVQUFVLEdBQUdGLFFBQVEsRUFBM0I7QUFDQSxNQUFNRyxXQUFXLEdBQUdGLFdBQVcsRUFBL0I7QUFDQSxNQUFNRyxPQUFPLEdBQUdYLENBQUMsSUFBSU0sUUFBTCxJQUFpQkQsY0FBakM7QUFFQU8sa0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBR0gsVUFBSCxFQUFlO0FBQ2JJLDBEQUFBLENBQVcsVUFBWCxFQUF1QkYsT0FBdkIsRUFBZ0M7QUFBQ0csZUFBTyxFQUFFO0FBQVYsT0FBaEM7QUFDQUQsMERBQUEsQ0FBVyxZQUFYLEVBQXlCSCxXQUF6QixFQUFzQztBQUFDSSxlQUFPLEVBQUU7QUFBVixPQUF0QztBQUNBRCwwREFBQSxDQUFXLFlBQVgsRUFBeUJWLFVBQXpCLEVBQXNDO0FBQUNXLGVBQU8sRUFBRTtBQUFWLE9BQXRDO0FBQ0FELDBEQUFBLENBQVcsY0FBWCxFQUEyQlQsWUFBWSxJQUFJRCxVQUEzQyxFQUF1RDtBQUFDVyxlQUFPLEVBQUU7QUFBVixPQUF2RCxFQUphLENBS2I7QUFDRDtBQUNGLEdBUlEsRUFRUCxDQUFDWixVQUFELENBUk8sQ0FBVDtBQVVBLHNCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUlELENBNUNEOztHQUFNTCxHO1VBQ1dFLGtEOzs7S0FEWEYsRztBQThDTiwrREFBZUEsR0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjkzNmU0ZjRjY2I4YzE2MmI3YTZiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSdcclxuY29uc3QgVXRtID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3Qge3Z9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgY29uc3Qge3V0bV9zb3VyY2V9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgY29uc3Qge3V0bV9tZWRpdW19ID0gcm91dGVyLnF1ZXJ5XHJcbiAgY29uc3Qge3V0bV9jYW1wYWlnbn0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCB7dHJhbnNhY3Rpb25faWR9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgLy8gY29uc3Qge3dlYl9pZH0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCB7Y2xpY2tfaWR9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgXHJcbiAgY29uc3QgY2hlY2tVdG0gPSAoKSA9PiB7XHJcbiAgICBpZih1dG1fc291cmNlID09PSAnZ3VydWxlYWRzJyB8fFxyXG4gICAgICB1dG1fc291cmNlID09PSAnZG9hZmYnIHx8IHV0bV9tZWRpdW09PT0nbGVhZGdpZCdcclxuICAgICl7XHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBjaGVja0xlbmd0aCA9ICgpID0+IHtcclxuICAgIGlmKHV0bV9tZWRpdW0gPT09ICdsZWFkZ2lkJykge1xyXG4gICAgICByZXR1cm4gdXRtX21lZGl1bVxyXG4gICAgfWVsc2Uge1xyXG4gICAgICByZXR1cm4gdXRtX3NvdXJjZVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBjaGVja2VyVXRtID0gY2hlY2tVdG0oKVxyXG4gIGNvbnN0IGNoZWNrU291cmNlID0gY2hlY2tMZW5ndGgoKVxyXG4gIGNvbnN0IGNsaWNraWQgPSB2IHx8IGNsaWNrX2lkIHx8IHRyYW5zYWN0aW9uX2lkXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZihjaGVja2VyVXRtKSB7XHJcbiAgICAgIGNvb2tpZS5zZXQoJ2NsaWNrX2lkJywgY2xpY2tpZCwge2V4cGlyZXM6IDMwfSlcclxuICAgICAgY29va2llLnNldCgndXRtX3NvdXJjZScsIGNoZWNrU291cmNlLCB7ZXhwaXJlczogMzB9KVxyXG4gICAgICBjb29raWUuc2V0KCd1dG1fbWVkaXVtJywgdXRtX21lZGl1bSwgIHtleHBpcmVzOiAzMH0pXHJcbiAgICAgIGNvb2tpZS5zZXQoJ3V0bV9jYW1wYWlnbicsIHV0bV9jYW1wYWlnbiB8fCB1dG1fbWVkaXVtLCB7ZXhwaXJlczogMzB9KVxyXG4gICAgICAvLyBjb29raWUuc2V0KCd3ZWJfaWQnLCB3ZWJfaWQsICB7ZXhwaXJlczogMzB9KVxyXG4gICAgfVxyXG4gIH0sW3V0bV9zb3VyY2VdKVxyXG5cclxuICByZXR1cm4oXHJcbiAgICA8ZGl2PjwvZGl2PlxyXG4gIClcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFV0bSJdLCJzb3VyY2VSb290IjoiIn0=