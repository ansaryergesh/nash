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
/* harmony export */   "required": function() { return /* binding */ required; },
/* harmony export */   "phoneCheck": function() { return /* binding */ phoneCheck; },
/* harmony export */   "phoneValidation": function() { return /* binding */ phoneValidation; },
/* harmony export */   "passwordValid": function() { return /* binding */ passwordValid; }
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
var phoneCheck = function phoneCheck(val) {
  var PHONE_OPERATORS = [{
    id: '7700'
  }, {
    id: '7701'
  }, {
    id: '7702'
  }, {
    id: '7705'
  }, {
    id: '7706'
  }, {
    id: '7707'
  }, {
    id: '7708'
  }, {
    id: '7747'
  }, {
    id: '7771'
  }, {
    id: '7775'
  }, {
    id: '7776'
  }, {
    id: '7777'
  }, {
    id: '7778'
  }];
  var phone = String(val).replace(/[^A-Z0-9]/g, ''),
      code = phone.match(/^(\d{4})(\d{3})(\d{4})$/);

  if (!code || phone.length !== 11) {
    return false;
  }

  var phone_number = code[1];
  var phone_operator = PHONE_OPERATORS.filter(function (item) {
    return item.id == phone_number;
  });

  if (phone_operator.length > 0) {
    return true;
  } else {
    return false;
  }
};
var phoneValidation = function phoneValidation(val) {
  var error;

  if (phoneCheck(val) === true) {
    error = '';
  } else {
    error = 'Нет соответствующего оператора';
  }

  return error;
};
var passwordValid = function passwordValid(val) {
  var error;

  if (!val) {
    error = 'Поле обязателен для заполнения';
  }

  if (val && val.length < 6) {
    error = 'минимальная длина пароля должна быть не менее 6 символов';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGVmYXVsdHMvdmFsaWRhdGlvbnMuanMiXSwibmFtZXMiOlsiZW1haWxWYWxpZCIsInZhbCIsImVycm9yIiwiZW1haWx2YWxpZCIsInRlc3QiLCJyZXF1aXJlZCIsInBob25lQ2hlY2siLCJQSE9ORV9PUEVSQVRPUlMiLCJpZCIsInBob25lIiwiU3RyaW5nIiwicmVwbGFjZSIsImNvZGUiLCJtYXRjaCIsImxlbmd0aCIsInBob25lX251bWJlciIsInBob25lX29wZXJhdG9yIiwiZmlsdGVyIiwiaXRlbSIsInBob25lVmFsaWRhdGlvbiIsInBhc3N3b3JkVmFsaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUFDLEdBQUcsRUFBSTtBQUMvQixNQUFJQyxLQUFKOztBQUNBLE1BQUksQ0FBQ0QsR0FBTCxFQUFVO0FBQ1JDLFNBQUssR0FBRyx1Q0FBUjtBQUNEOztBQUNELE1BQUlELEdBQUosRUFBUztBQUNQLFFBQUlFLFVBQVUsR0FBRyw0Q0FBNENDLElBQTVDLENBQWlESCxHQUFqRCxDQUFqQjs7QUFDQSxRQUFJLENBQUNFLFVBQUwsRUFBaUI7QUFDZkQsV0FBSyxHQUFHLG9CQUFSO0FBQ0Q7QUFDRjs7QUFDRCxTQUFPQSxLQUFQO0FBQ0QsQ0FaTTtBQWNBLElBQU1HLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUFKLEdBQUcsRUFBSTtBQUM3QixNQUFJQyxLQUFKOztBQUNBLE1BQUksQ0FBQ0QsR0FBTCxFQUFVO0FBQ1JDLFNBQUssR0FBRyxpQ0FBUjtBQUNEOztBQUNELFNBQU9BLEtBQVA7QUFDRCxDQU5NO0FBUUEsSUFBTUksVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0wsR0FBRCxFQUFTO0FBQ2pDLE1BQUlNLGVBQWUsR0FBRyxDQUNsQjtBQUFDQyxNQUFFLEVBQUU7QUFBTCxHQURrQixFQUVsQjtBQUFDQSxNQUFFLEVBQUU7QUFBTCxHQUZrQixFQUdsQjtBQUFDQSxNQUFFLEVBQUU7QUFBTCxHQUhrQixFQUlsQjtBQUFDQSxNQUFFLEVBQUU7QUFBTCxHQUprQixFQUtsQjtBQUFDQSxNQUFFLEVBQUU7QUFBTCxHQUxrQixFQU1sQjtBQUFDQSxNQUFFLEVBQUU7QUFBTCxHQU5rQixFQU9sQjtBQUFDQSxNQUFFLEVBQUU7QUFBTCxHQVBrQixFQVFsQjtBQUFDQSxNQUFFLEVBQUU7QUFBTCxHQVJrQixFQVNsQjtBQUFDQSxNQUFFLEVBQUU7QUFBTCxHQVRrQixFQVVsQjtBQUFDQSxNQUFFLEVBQUU7QUFBTCxHQVZrQixFQVdsQjtBQUFDQSxNQUFFLEVBQUU7QUFBTCxHQVhrQixFQVlsQjtBQUFDQSxNQUFFLEVBQUU7QUFBTCxHQVprQixFQWFsQjtBQUFDQSxNQUFFLEVBQUU7QUFBTCxHQWJrQixDQUF0QjtBQWVBLE1BQUlDLEtBQUssR0FBR0MsTUFBTSxDQUFDVCxHQUFELENBQU4sQ0FBWVUsT0FBWixDQUFvQixZQUFwQixFQUFrQyxFQUFsQyxDQUFaO0FBQUEsTUFDSUMsSUFBSSxHQUFHSCxLQUFLLENBQUNJLEtBQU4sQ0FBWSx5QkFBWixDQURYOztBQUVBLE1BQUksQ0FBQ0QsSUFBRCxJQUFTSCxLQUFLLENBQUNLLE1BQU4sS0FBaUIsRUFBOUIsRUFBa0M7QUFDOUIsV0FBTyxLQUFQO0FBQ0g7O0FBRUQsTUFBSUMsWUFBWSxHQUFHSCxJQUFJLENBQUMsQ0FBRCxDQUF2QjtBQUNBLE1BQUlJLGNBQWMsR0FBR1QsZUFBZSxDQUFDVSxNQUFoQixDQUF1QixVQUFTQyxJQUFULEVBQWU7QUFDdkQsV0FBT0EsSUFBSSxDQUFDVixFQUFMLElBQVdPLFlBQWxCO0FBQ0gsR0FGb0IsQ0FBckI7O0FBSUEsTUFBR0MsY0FBYyxDQUFDRixNQUFmLEdBQXVCLENBQTFCLEVBQTRCO0FBQ3hCLFdBQU8sSUFBUDtBQUNILEdBRkQsTUFFSztBQUNELFdBQU8sS0FBUDtBQUNIO0FBQ0YsQ0FoQ007QUFtQ0EsSUFBTUssZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDbEIsR0FBRCxFQUFTO0FBQ3RDLE1BQUlDLEtBQUo7O0FBQ0EsTUFBR0ksVUFBVSxDQUFDTCxHQUFELENBQVYsS0FBb0IsSUFBdkIsRUFBNkI7QUFDekJDLFNBQUssR0FBRyxFQUFSO0FBQ0gsR0FGRCxNQUVNO0FBQ0ZBLFNBQUssR0FBRyxnQ0FBUjtBQUNIOztBQUNELFNBQU9BLEtBQVA7QUFDRCxDQVJNO0FBV0EsSUFBTWtCLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQW5CLEdBQUcsRUFBSTtBQUNsQyxNQUFJQyxLQUFKOztBQUNBLE1BQUcsQ0FBQ0QsR0FBSixFQUFTO0FBQ1BDLFNBQUssR0FBRyxnQ0FBUjtBQUNEOztBQUNELE1BQUdELEdBQUcsSUFBSUEsR0FBRyxDQUFDYSxNQUFKLEdBQVcsQ0FBckIsRUFBd0I7QUFDdEJaLFNBQUssR0FBRywwREFBUjtBQUNEOztBQUNELFNBQU9BLEtBQVA7QUFDRCxDQVRNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2dldHNlcnZpY2UuZWRhMDBiMGNhMTZiZjllNzk2NzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBlbWFpbFZhbGlkID0gdmFsID0+IHtcclxuICBsZXQgZXJyb3I7XHJcbiAgaWYgKCF2YWwpIHtcclxuICAgIGVycm9yID0gJ9Cf0L7Qu9C1IEVtYWlsINC+0LHRj9C30LDRgtC10LvRjNC90L4g0LTQu9GPINC30LDQv9C+0LvQvdC10L3QuNGPJ1xyXG4gIH1cclxuICBpZiAodmFsKSB7XHJcbiAgICBsZXQgZW1haWx2YWxpZCA9IC9eW0EtWjAtOS5fJSstXStAW0EtWjAtOS4tXStcXC5bQS1aXXsyLDR9JC9pLnRlc3QodmFsKTtcclxuICAgIGlmICghZW1haWx2YWxpZCkge1xyXG4gICAgICBlcnJvciA9ICfQndC10L/RgNCw0LLQuNC70YzQvdGL0LkgZW1haWwnXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBlcnJvclxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVxdWlyZWQgPSB2YWwgPT4ge1xyXG4gIGxldCBlcnJvcjtcclxuICBpZiAoIXZhbCkge1xyXG4gICAgZXJyb3IgPSAn0J/QvtC70LUg0L7QsdGP0LfQsNGC0LXQu9GM0L3QviDQtNC70Y8g0LfQsNC/0L7Qu9C90LXQvdC40Y8nXHJcbiAgfVxyXG4gIHJldHVybiBlcnJvclxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcGhvbmVDaGVjayA9ICh2YWwpID0+IHtcclxuICB2YXIgUEhPTkVfT1BFUkFUT1JTID0gW1xyXG4gICAgICB7aWQ6ICc3NzAwJ30sXHJcbiAgICAgIHtpZDogJzc3MDEnfSxcclxuICAgICAge2lkOiAnNzcwMid9LFxyXG4gICAgICB7aWQ6ICc3NzA1J30sXHJcbiAgICAgIHtpZDogJzc3MDYnfSxcclxuICAgICAge2lkOiAnNzcwNyd9LFxyXG4gICAgICB7aWQ6ICc3NzA4J30sXHJcbiAgICAgIHtpZDogJzc3NDcnfSxcclxuICAgICAge2lkOiAnNzc3MSd9LFxyXG4gICAgICB7aWQ6ICc3Nzc1J30sXHJcbiAgICAgIHtpZDogJzc3NzYnfSxcclxuICAgICAge2lkOiAnNzc3Nyd9LFxyXG4gICAgICB7aWQ6ICc3Nzc4J30sXHJcbiAgXTtcclxuICB2YXIgcGhvbmUgPSBTdHJpbmcodmFsKS5yZXBsYWNlKC9bXkEtWjAtOV0vZywgJycpLFxyXG4gICAgICBjb2RlID0gcGhvbmUubWF0Y2goL14oXFxkezR9KShcXGR7M30pKFxcZHs0fSkkLyk7XHJcbiAgaWYgKCFjb2RlIHx8IHBob25lLmxlbmd0aCAhPT0gMTEpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG5cclxuICB2YXIgcGhvbmVfbnVtYmVyID0gY29kZVsxXTtcclxuICB2YXIgcGhvbmVfb3BlcmF0b3IgPSBQSE9ORV9PUEVSQVRPUlMuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgcmV0dXJuIGl0ZW0uaWQgPT0gcGhvbmVfbnVtYmVyXHJcbiAgfSk7XHJcblxyXG4gIGlmKHBob25lX29wZXJhdG9yLmxlbmd0aCA+MCl7XHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgfWVsc2V7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgcGhvbmVWYWxpZGF0aW9uID0gKHZhbCkgPT4ge1xyXG4gIGxldCBlcnJvclxyXG4gIGlmKHBob25lQ2hlY2sodmFsKSA9PT0gdHJ1ZSkge1xyXG4gICAgICBlcnJvciA9ICcnXHJcbiAgfWVsc2Uge1xyXG4gICAgICBlcnJvciA9ICfQndC10YIg0YHQvtC+0YLQstC10YLRgdGC0LLRg9GO0YnQtdCz0L4g0L7Qv9C10YDQsNGC0L7RgNCwJ1xyXG4gIH1cclxuICByZXR1cm4gZXJyb3JcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBwYXNzd29yZFZhbGlkID0gdmFsID0+IHtcclxuICBsZXQgZXJyb3I7XHJcbiAgaWYoIXZhbCkge1xyXG4gICAgZXJyb3IgPSAn0J/QvtC70LUg0L7QsdGP0LfQsNGC0LXQu9C10L0g0LTQu9GPINC30LDQv9C+0LvQvdC10L3QuNGPJ1xyXG4gIH1cclxuICBpZih2YWwgJiYgdmFsLmxlbmd0aDw2KSB7XHJcbiAgICBlcnJvciA9ICfQvNC40L3QuNC80LDQu9GM0L3QsNGPINC00LvQuNC90LAg0L/QsNGA0L7Qu9GPINC00L7Qu9C20L3QsCDQsdGL0YLRjCDQvdC1INC80LXQvdC10LUgNiDRgdC40LzQstC+0LvQvtCyJ1xyXG4gIH1cclxuICByZXR1cm4gZXJyb3I7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==