self["webpackHotUpdate_N_E"]("pages/feedback",{

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
/* harmony export */   "parseDate": function() { return /* binding */ parseDate; },
/* harmony export */   "amountSpace": function() { return /* binding */ amountSpace; },
/* harmony export */   "thousandSeparator": function() { return /* binding */ thousandSeparator; },
/* harmony export */   "handleFocus": function() { return /* binding */ handleFocus; }
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
  var finalDate = addMonthtoDate(val);
  var dateparse = new Intl.DateTimeFormat('ru-Ru', {
    year: 'numeric',
    month: 'short',
    day: '2-digit'
  }).format(finalDate);
  return dateparse;
};
var amountSpace = function amountSpace(val) {
  if (val && val !== undefined) {
    val = val.replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/gm, ' ');
  } else {
    val = '';
  }

  return val;
};
var thousandSeparator = function thousandSeparator(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

var scrollToElement = __webpack_require__(/*! scroll-to-element */ "./node_modules/scroll-to-element/index.js");

var handleFocus = function handleFocus() {
  setTimeout(function () {
    scrollToElement('.text-danger', {
      offset: 0,
      align: 'middle',
      ease: 'outExpo',
      duration: 600
    });
  }, 500);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGVmYXVsdHMvZXh0cmFGdW5jdGlvbi5qcyJdLCJuYW1lcyI6WyJyZXBsYWNlRGF0ZSIsInZhbCIsIlN0cmluZyIsInJlcGxhY2UiLCJhZGRNb250aHRvRGF0ZSIsIm1vbnRoIiwiY3VycmVudERhdGUiLCJEYXRlIiwiZmluYWxEYXRlIiwic2V0TW9udGgiLCJnZXRNb250aCIsInBhcnNlRGF0ZSIsImRhdGVwYXJzZSIsIkludGwiLCJEYXRlVGltZUZvcm1hdCIsInllYXIiLCJkYXkiLCJmb3JtYXQiLCJhbW91bnRTcGFjZSIsInVuZGVmaW5lZCIsInRob3VzYW5kU2VwYXJhdG9yIiwieCIsInRvU3RyaW5nIiwic2Nyb2xsVG9FbGVtZW50IiwicmVxdWlyZSIsImhhbmRsZUZvY3VzIiwic2V0VGltZW91dCIsIm9mZnNldCIsImFsaWduIiwiZWFzZSIsImR1cmF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBT0EsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsR0FBRCxFQUFTO0FBQ25DLFNBQU9DLE1BQU0sQ0FBQ0QsR0FBRCxDQUFOLENBQVlFLE9BQVosQ0FBb0IsWUFBcEIsRUFBa0MsRUFBbEMsQ0FBUDtBQUNELENBRk07QUFJQSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUFDLEtBQUssRUFBSTtBQUNyQyxNQUFNQyxXQUFXLEdBQUcsSUFBSUMsSUFBSixFQUFwQjtBQUNBLE1BQU1DLFNBQVMsR0FBR0YsV0FBVyxDQUFDRyxRQUFaLENBQXFCSCxXQUFXLENBQUNJLFFBQVosS0FBeUJMLEtBQTlDLENBQWxCO0FBRUEsU0FBT0csU0FBUDtBQUNELENBTE07QUFNQSxJQUFNRyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDVixHQUFELEVBQVM7QUFDaEMsTUFBTU8sU0FBUyxHQUFHSixjQUFjLENBQUNILEdBQUQsQ0FBaEM7QUFDQSxNQUFNVyxTQUFTLEdBQUcsSUFBSUMsSUFBSSxDQUFDQyxjQUFULENBQXdCLE9BQXhCLEVBQWlDO0FBQUVDLFFBQUksRUFBRSxTQUFSO0FBQW1CVixTQUFLLEVBQUUsT0FBMUI7QUFBbUNXLE9BQUcsRUFBRTtBQUF4QyxHQUFqQyxFQUFzRkMsTUFBdEYsQ0FBNkZULFNBQTdGLENBQWxCO0FBQ0EsU0FBT0ksU0FBUDtBQUNELENBSk07QUFNQSxJQUFNTSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDakIsR0FBRCxFQUFTO0FBQ2xDLE1BQUdBLEdBQUcsSUFBSUEsR0FBRyxLQUFJa0IsU0FBakIsRUFBNEI7QUFDMUJsQixPQUFHLEdBQUdBLEdBQUcsQ0FBQ0UsT0FBSixDQUFZLCtCQUFaLEVBQTZDLEdBQTdDLENBQU47QUFDRCxHQUZELE1BRU07QUFDSkYsT0FBRyxHQUFHLEVBQU47QUFDRDs7QUFDRCxTQUFPQSxHQUFQO0FBQ0QsQ0FQTTtBQVVBLElBQU1tQixpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUFDLENBQUMsRUFBSTtBQUNwQyxTQUFPQSxDQUFDLENBQUNDLFFBQUYsR0FBYW5CLE9BQWIsQ0FBcUIsdUJBQXJCLEVBQThDLEdBQTlDLENBQVA7QUFDRCxDQUZNOztBQUlQLElBQUlvQixlQUFlLEdBQUdDLG1CQUFPLENBQUMsb0VBQUQsQ0FBN0I7O0FBR08sSUFBTUMsV0FBVyxHQUFFLFNBQWJBLFdBQWEsR0FBTTtBQUM5QkMsWUFBVSxDQUFDLFlBQU07QUFDZkgsbUJBQWUsQ0FBQyxjQUFELEVBQWlCO0FBQzlCSSxZQUFNLEVBQUUsQ0FEc0I7QUFFOUJDLFdBQUssRUFBRSxRQUZ1QjtBQUc5QkMsVUFBSSxFQUFFLFNBSHdCO0FBSTlCQyxjQUFRLEVBQUU7QUFKb0IsS0FBakIsQ0FBZjtBQU1ELEdBUFMsRUFPUixHQVBRLENBQVY7QUFRRCxDQVRNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ZlZWRiYWNrLmJlOWY5YTQ5ZDdhNjU1NWM2ZjEyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgIHJlcGxhY2VEYXRlID0gKHZhbCkgPT4ge1xyXG4gIHJldHVybiBTdHJpbmcodmFsKS5yZXBsYWNlKC9bXkEtWjAtOV0vZywgJycpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhZGRNb250aHRvRGF0ZSA9IG1vbnRoID0+IHtcclxuICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKClcclxuICBjb25zdCBmaW5hbERhdGUgPSBjdXJyZW50RGF0ZS5zZXRNb250aChjdXJyZW50RGF0ZS5nZXRNb250aCgpICsgbW9udGgpXHJcblxyXG4gIHJldHVybiBmaW5hbERhdGU7XHJcbn1cclxuZXhwb3J0IGNvbnN0IHBhcnNlRGF0ZSA9ICh2YWwpID0+IHtcclxuICBjb25zdCBmaW5hbERhdGUgPSBhZGRNb250aHRvRGF0ZSh2YWwpXHJcbiAgY29uc3QgZGF0ZXBhcnNlID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ3J1LVJ1JywgeyB5ZWFyOiAnbnVtZXJpYycsIG1vbnRoOiAnc2hvcnQnLCBkYXk6ICcyLWRpZ2l0JyB9KS5mb3JtYXQoZmluYWxEYXRlKVxyXG4gIHJldHVybiBkYXRlcGFyc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhbW91bnRTcGFjZSA9ICh2YWwpID0+IHtcclxuICBpZih2YWwgJiYgdmFsIT09IHVuZGVmaW5lZCkge1xyXG4gICAgdmFsID0gdmFsLnJlcGxhY2UoLyg/IV4pKD89KD86XFxkezN9KSsoPzpcXC58JCkpL2dtLCAnICcpXHJcbiAgfWVsc2Uge1xyXG4gICAgdmFsID0gJydcclxuICB9XHJcbiAgcmV0dXJuIHZhbFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHRob3VzYW5kU2VwYXJhdG9yID0geCA9PiB7XHJcbiAgcmV0dXJuIHgudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnICcpO1xyXG59XHJcblxyXG52YXIgc2Nyb2xsVG9FbGVtZW50ID0gcmVxdWlyZSgnc2Nyb2xsLXRvLWVsZW1lbnQnKTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgaGFuZGxlRm9jdXMgPSgpID0+IHtcclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIHNjcm9sbFRvRWxlbWVudCgnLnRleHQtZGFuZ2VyJywge1xyXG4gICAgICBvZmZzZXQ6IDAsXHJcbiAgICAgIGFsaWduOiAnbWlkZGxlJyxcclxuICAgICAgZWFzZTogJ291dEV4cG8nLFxyXG4gICAgICBkdXJhdGlvbjogNjAwXHJcbiAgICB9KTtcclxuICB9LDUwMClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=