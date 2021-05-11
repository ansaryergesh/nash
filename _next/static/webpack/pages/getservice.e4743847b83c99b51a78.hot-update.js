self["webpackHotUpdate_N_E"]("pages/getservice",{

/***/ "./defaults/validations.js":
/*!*********************************!*\
  !*** ./defaults/validations.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "emailValid": function() { return /* binding */ emailValid; },
/* harmony export */   "required": function() { return /* binding */ required; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var emailValid = function emailValid(val) {
  var error;

  if (!val) {
    error = 'Поле Email обязательно для заполнения';
  }

  if (val) {
    var emailvalid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

    if (!emailvalid) {
      error = 'Неправильный email';
    }
  }

  return error;
};
var required = function required(val) {
  var error;

  if (!val) {
    error = 'Поле обязательно для заполнения';
  }

  return error;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGVmYXVsdHMvdmFsaWRhdGlvbnMuanMiXSwibmFtZXMiOlsiZW1haWxWYWxpZCIsInZhbCIsImVycm9yIiwiZW1haWx2YWxpZCIsInRlc3QiLCJyZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQUMsR0FBRyxFQUFJO0FBQy9CLE1BQUlDLEtBQUo7O0FBQ0EsTUFBSSxDQUFDRCxHQUFMLEVBQVU7QUFDUkMsU0FBSyxHQUFHLHVDQUFSO0FBQ0Q7O0FBQ0QsTUFBSUQsR0FBSixFQUFTO0FBQ1AsUUFBSUUsVUFBVSxHQUFHLDRDQUE0Q0MsSUFBNUMsQ0FBaURILEdBQWpELENBQWpCOztBQUNBLFFBQUksQ0FBQ0UsVUFBTCxFQUFpQjtBQUNmRCxXQUFLLEdBQUcsb0JBQVI7QUFDRDtBQUNGOztBQUNELFNBQU9BLEtBQVA7QUFDRCxDQVpNO0FBY0EsSUFBTUcsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQUosR0FBRyxFQUFJO0FBQzdCLE1BQUlDLEtBQUo7O0FBQ0EsTUFBSSxDQUFDRCxHQUFMLEVBQVU7QUFDUkMsU0FBSyxHQUFHLGlDQUFSO0FBQ0Q7O0FBQ0QsU0FBT0EsS0FBUDtBQUNELENBTk0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ2V0c2VydmljZS5lNDc0Mzg0N2I4M2M5OWI1MWE3OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGVtYWlsVmFsaWQgPSB2YWwgPT4ge1xyXG4gIGxldCBlcnJvcjtcclxuICBpZiAoIXZhbCkge1xyXG4gICAgZXJyb3IgPSAn0J/QvtC70LUgRW1haWwg0L7QsdGP0LfQsNGC0LXQu9GM0L3QviDQtNC70Y8g0LfQsNC/0L7Qu9C90LXQvdC40Y8nXHJcbiAgfVxyXG4gIGlmICh2YWwpIHtcclxuICAgIGxldCBlbWFpbHZhbGlkID0gL15bQS1aMC05Ll8lKy1dK0BbQS1aMC05Li1dK1xcLltBLVpdezIsNH0kL2kudGVzdCh2YWwpO1xyXG4gICAgaWYgKCFlbWFpbHZhbGlkKSB7XHJcbiAgICAgIGVycm9yID0gJ9Cd0LXQv9GA0LDQstC40LvRjNC90YvQuSBlbWFpbCdcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGVycm9yXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZXF1aXJlZCA9IHZhbCA9PiB7XHJcbiAgbGV0IGVycm9yO1xyXG4gIGlmICghdmFsKSB7XHJcbiAgICBlcnJvciA9ICfQn9C+0LvQtSDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+INC00LvRjyDQt9Cw0L/QvtC70L3QtdC90LjRjydcclxuICB9XHJcbiAgcmV0dXJuIGVycm9yXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9