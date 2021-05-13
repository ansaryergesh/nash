self["webpackHotUpdate_N_E"]("pages/getservice",{

/***/ "./defaults/extraFunction.js":
/*!***********************************!*\
  !*** ./defaults/extraFunction.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "replaceDate": function() { return /* binding */ replaceDate; },
/* harmony export */   "addMonthtoDate": function() { return /* binding */ addMonthtoDate; },
/* harmony export */   "parseDate": function() { return /* binding */ parseDate; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var replaceDate = function replaceDate(val) {
  return String(val).replace(/[^A-Z0-9]/g, '');
};
var addMonthtoDate = function addMonthtoDate(month) {
  var currentDate = new Date();
  var finalDate = currentDate.setMonth(currentDate.getMonth() + month);
  return finalDate;
};
var parseDate = function parseDate(val) {
  var dateparse = new Intl.DateTimeFormat('ru-Ru', {
    year: 'numeric',
    month: 'short',
    day: '2-digit'
  }).format(val);
  return dateparse;
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGVmYXVsdHMvZXh0cmFGdW5jdGlvbi5qcyJdLCJuYW1lcyI6WyJyZXBsYWNlRGF0ZSIsInZhbCIsIlN0cmluZyIsInJlcGxhY2UiLCJhZGRNb250aHRvRGF0ZSIsIm1vbnRoIiwiY3VycmVudERhdGUiLCJEYXRlIiwiZmluYWxEYXRlIiwic2V0TW9udGgiLCJnZXRNb250aCIsInBhcnNlRGF0ZSIsImRhdGVwYXJzZSIsIkludGwiLCJEYXRlVGltZUZvcm1hdCIsInllYXIiLCJkYXkiLCJmb3JtYXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFPQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxHQUFELEVBQVM7QUFDbkMsU0FBT0MsTUFBTSxDQUFDRCxHQUFELENBQU4sQ0FBWUUsT0FBWixDQUFvQixZQUFwQixFQUFrQyxFQUFsQyxDQUFQO0FBQ0QsQ0FGTTtBQUlBLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQUMsS0FBSyxFQUFJO0FBQ3JDLE1BQU1DLFdBQVcsR0FBRyxJQUFJQyxJQUFKLEVBQXBCO0FBQ0EsTUFBTUMsU0FBUyxHQUFHRixXQUFXLENBQUNHLFFBQVosQ0FBcUJILFdBQVcsQ0FBQ0ksUUFBWixLQUF5QkwsS0FBOUMsQ0FBbEI7QUFFQSxTQUFPRyxTQUFQO0FBQ0QsQ0FMTTtBQU1BLElBQU1HLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNWLEdBQUQsRUFBUztBQUNoQyxNQUFNVyxTQUFTLEdBQUcsSUFBSUMsSUFBSSxDQUFDQyxjQUFULENBQXdCLE9BQXhCLEVBQWlDO0FBQUVDLFFBQUksRUFBRSxTQUFSO0FBQW1CVixTQUFLLEVBQUUsT0FBMUI7QUFBbUNXLE9BQUcsRUFBRTtBQUF4QyxHQUFqQyxFQUFzRkMsTUFBdEYsQ0FBNkZoQixHQUE3RixDQUFsQjtBQUNBLFNBQU9XLFNBQVA7QUFDRCxDQUhNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2dldHNlcnZpY2UuYjc2NjVjNzU2NWY1MTUzNDk0NTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCAgcmVwbGFjZURhdGUgPSAodmFsKSA9PiB7XHJcbiAgcmV0dXJuIFN0cmluZyh2YWwpLnJlcGxhY2UoL1teQS1aMC05XS9nLCAnJylcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFkZE1vbnRodG9EYXRlID0gbW9udGggPT4ge1xyXG4gIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKVxyXG4gIGNvbnN0IGZpbmFsRGF0ZSA9IGN1cnJlbnREYXRlLnNldE1vbnRoKGN1cnJlbnREYXRlLmdldE1vbnRoKCkgKyBtb250aClcclxuXHJcbiAgcmV0dXJuIGZpbmFsRGF0ZTtcclxufVxyXG5leHBvcnQgY29uc3QgcGFyc2VEYXRlID0gKHZhbCkgPT4ge1xyXG4gIGNvbnN0IGRhdGVwYXJzZSA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdydS1SdScsIHsgeWVhcjogJ251bWVyaWMnLCBtb250aDogJ3Nob3J0JywgZGF5OiAnMi1kaWdpdCcgfSkuZm9ybWF0KHZhbClcclxuICByZXR1cm4gZGF0ZXBhcnNlO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==