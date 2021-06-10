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
    console.log(utm_source);

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
    lineNumber: 46,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VdG0vVXRtLmpzIl0sIm5hbWVzIjpbIlV0bSIsInJvdXRlciIsInVzZVJvdXRlciIsInYiLCJxdWVyeSIsInV0bV9zb3VyY2UiLCJ1dG1fbWVkaXVtIiwidXRtX2NhbXBhaWduIiwidHJhbnNhY3Rpb25faWQiLCJjbGlja19pZCIsImNoZWNrVXRtIiwiY2hlY2tMZW5ndGgiLCJjaGVja2VyVXRtIiwiY2hlY2tTb3VyY2UiLCJjbGlja2lkIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImNvb2tpZSIsImV4cGlyZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBTTtBQUFBOztBQUNoQixNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBRGdCLE1BRVRDLENBRlMsR0FFSkYsTUFBTSxDQUFDRyxLQUZILENBRVRELENBRlM7QUFBQSxNQUdURSxVQUhTLEdBR0tKLE1BQU0sQ0FBQ0csS0FIWixDQUdUQyxVQUhTO0FBQUEsTUFJVEMsVUFKUyxHQUlLTCxNQUFNLENBQUNHLEtBSlosQ0FJVEUsVUFKUztBQUFBLE1BS1RDLFlBTFMsR0FLT04sTUFBTSxDQUFDRyxLQUxkLENBS1RHLFlBTFM7QUFBQSxNQU1UQyxjQU5TLEdBTVNQLE1BQU0sQ0FBQ0csS0FOaEIsQ0FNVEksY0FOUyxFQU9oQjs7QUFQZ0IsTUFRVEMsUUFSUyxHQVFHUixNQUFNLENBQUNHLEtBUlYsQ0FRVEssUUFSUzs7QUFVaEIsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQixRQUFHTCxVQUFVLEtBQUssV0FBZixJQUNEQSxVQUFVLEtBQUssT0FEZCxJQUN5QkMsVUFBVSxLQUFHLFNBRHpDLEVBRUM7QUFDQyxhQUFPLElBQVA7QUFDRCxLQUpELE1BSU07QUFDSixhQUFPLEtBQVA7QUFDRDtBQUNGLEdBUkQ7O0FBU0EsTUFBTUssV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QixRQUFHTCxVQUFVLEtBQUssU0FBbEIsRUFBNkI7QUFDM0IsYUFBT0EsVUFBUDtBQUNELEtBRkQsTUFFTTtBQUNKLGFBQU9ELFVBQVA7QUFDRDtBQUNGLEdBTkQ7O0FBT0EsTUFBTU8sVUFBVSxHQUFHRixRQUFRLEVBQTNCO0FBQ0EsTUFBTUcsV0FBVyxHQUFHRixXQUFXLEVBQS9CO0FBQ0EsTUFBTUcsT0FBTyxHQUFHWCxDQUFDLElBQUlNLFFBQUwsSUFBaUJELGNBQWpDO0FBRUFPLGtEQUFTLENBQUMsWUFBTTtBQUNkQyxXQUFPLENBQUNDLEdBQVIsQ0FBWVosVUFBWjs7QUFDQSxRQUFHTyxVQUFILEVBQWU7QUFDYk0sMERBQUEsQ0FBVyxVQUFYLEVBQXVCSixPQUF2QixFQUFnQztBQUFDSyxlQUFPLEVBQUU7QUFBVixPQUFoQztBQUNBRCwwREFBQSxDQUFXLFlBQVgsRUFBeUJMLFdBQXpCLEVBQXNDO0FBQUNNLGVBQU8sRUFBRTtBQUFWLE9BQXRDO0FBQ0FELDBEQUFBLENBQVcsWUFBWCxFQUF5QlosVUFBekIsRUFBc0M7QUFBQ2EsZUFBTyxFQUFFO0FBQVYsT0FBdEM7QUFDQUQsMERBQUEsQ0FBVyxjQUFYLEVBQTJCWCxZQUFZLElBQUlELFVBQTNDLEVBQXVEO0FBQUNhLGVBQU8sRUFBRTtBQUFWLE9BQXZELEVBSmEsQ0FLYjtBQUNEO0FBQ0YsR0FUUSxFQVNQLENBQUNkLFVBQUQsQ0FUTyxDQUFUO0FBV0Esc0JBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBSUQsQ0E3Q0Q7O0dBQU1MLEc7VUFDV0Usa0Q7OztLQURYRixHO0FBK0NOLCtEQUFlQSxHQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNTIzM2Y1ZDFlZmZiY2UwODRmNDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJ1xyXG5jb25zdCBVdG0gPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCB7dn0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCB7dXRtX3NvdXJjZX0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCB7dXRtX21lZGl1bX0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCB7dXRtX2NhbXBhaWdufSA9IHJvdXRlci5xdWVyeVxyXG4gIGNvbnN0IHt0cmFuc2FjdGlvbl9pZH0gPSByb3V0ZXIucXVlcnlcclxuICAvLyBjb25zdCB7d2ViX2lkfSA9IHJvdXRlci5xdWVyeVxyXG4gIGNvbnN0IHtjbGlja19pZH0gPSByb3V0ZXIucXVlcnlcclxuICBcclxuICBjb25zdCBjaGVja1V0bSA9ICgpID0+IHtcclxuICAgIGlmKHV0bV9zb3VyY2UgPT09ICdndXJ1bGVhZHMnIHx8XHJcbiAgICAgIHV0bV9zb3VyY2UgPT09ICdkb2FmZicgfHwgdXRtX21lZGl1bT09PSdsZWFkZ2lkJyBcclxuICAgICl7XHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBjaGVja0xlbmd0aCA9ICgpID0+IHtcclxuICAgIGlmKHV0bV9tZWRpdW0gPT09ICdsZWFkZ2lkJykge1xyXG4gICAgICByZXR1cm4gdXRtX21lZGl1bVxyXG4gICAgfWVsc2Uge1xyXG4gICAgICByZXR1cm4gdXRtX3NvdXJjZVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBjaGVja2VyVXRtID0gY2hlY2tVdG0oKVxyXG4gIGNvbnN0IGNoZWNrU291cmNlID0gY2hlY2tMZW5ndGgoKVxyXG4gIGNvbnN0IGNsaWNraWQgPSB2IHx8IGNsaWNrX2lkIHx8IHRyYW5zYWN0aW9uX2lkXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyh1dG1fc291cmNlKVxyXG4gICAgaWYoY2hlY2tlclV0bSkge1xyXG4gICAgICBjb29raWUuc2V0KCdjbGlja19pZCcsIGNsaWNraWQsIHtleHBpcmVzOiAzMH0pXHJcbiAgICAgIGNvb2tpZS5zZXQoJ3V0bV9zb3VyY2UnLCBjaGVja1NvdXJjZSwge2V4cGlyZXM6IDMwfSlcclxuICAgICAgY29va2llLnNldCgndXRtX21lZGl1bScsIHV0bV9tZWRpdW0sICB7ZXhwaXJlczogMzB9KVxyXG4gICAgICBjb29raWUuc2V0KCd1dG1fY2FtcGFpZ24nLCB1dG1fY2FtcGFpZ24gfHwgdXRtX21lZGl1bSwge2V4cGlyZXM6IDMwfSlcclxuICAgICAgLy8gY29va2llLnNldCgnd2ViX2lkJywgd2ViX2lkLCAge2V4cGlyZXM6IDMwfSlcclxuICAgIH1cclxuICB9LFt1dG1fc291cmNlXSlcclxuXHJcbiAgcmV0dXJuKFxyXG4gICAgPGRpdj48L2Rpdj5cclxuICApXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVdG0iXSwic291cmNlUm9vdCI6IiJ9