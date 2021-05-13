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
/* harmony export */   "passwordValid": function() { return /* binding */ passwordValid; },
/* harmony export */   "acceptCirrilic": function() { return /* binding */ acceptCirrilic; },
/* harmony export */   "iinValidation": function() { return /* binding */ iinValidation; },
/* harmony export */   "acceptCirrilicOnly": function() { return /* binding */ acceptCirrilicOnly; }
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
var acceptCirrilic = function acceptCirrilic(val) {
  var falsy = /[a-zA-Z0-9_"*/]/i.test(val);
  var error;

  if (!val) {
    error = 'Поле обязательно для заполнения';
  }

  if (val) {
    if (falsy === true) {
      error = 'Нужно вводить только на кириллице';
    }
  }

  return error;
};
var iinValidation = function iinValidation(val) {
  var error;
  if (val && val.length !== 12) error = 'Заполните все поля';
  var b1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  var b2 = [3, 4, 5, 6, 7, 8, 9, 10, 11, 1, 2];
  var a = [];
  var controll = 0;

  if (val) {
    for (var i = 0; i < 12; i++) {
      a[i] = parseInt(val.substring(i, i + 1));
      if (i < 11) controll += a[i] * b1[i];
    }

    controll = controll % 11;

    if (controll == 10) {
      controll = 0;

      for (var i = 0; i < 11; i++) {
        controll += a[i] * b2[i];
      }

      controll = controll % 11;
    }

    if (controll != a[11]) error = 'Некорректный ИИН';
    return error;
  }
};
var acceptCirrilicOnly = function acceptCirrilicOnly(val) {
  var falsy = /[a-zA-Z0-9_"*/]/i.test(val);
  var error;

  if (val) {
    if (falsy === true) {
      error = 'Нужно вводить только на кириллице';
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGVmYXVsdHMvdmFsaWRhdGlvbnMuanMiXSwibmFtZXMiOlsiZW1haWxWYWxpZCIsInZhbCIsImVycm9yIiwiZW1haWx2YWxpZCIsInRlc3QiLCJyZXF1aXJlZCIsInBob25lQ2hlY2siLCJQSE9ORV9PUEVSQVRPUlMiLCJpZCIsInBob25lIiwiU3RyaW5nIiwicmVwbGFjZSIsImNvZGUiLCJtYXRjaCIsImxlbmd0aCIsInBob25lX251bWJlciIsInBob25lX29wZXJhdG9yIiwiZmlsdGVyIiwiaXRlbSIsInBob25lVmFsaWRhdGlvbiIsInBhc3N3b3JkVmFsaWQiLCJhY2NlcHRDaXJyaWxpYyIsImZhbHN5IiwiaWluVmFsaWRhdGlvbiIsImIxIiwiYjIiLCJhIiwiY29udHJvbGwiLCJpIiwicGFyc2VJbnQiLCJzdWJzdHJpbmciLCJhY2NlcHRDaXJyaWxpY09ubHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUFDLEdBQUcsRUFBSTtBQUMvQixNQUFJQyxLQUFKOztBQUNBLE1BQUksQ0FBQ0QsR0FBTCxFQUFVO0FBQ1JDLFNBQUssR0FBRyx1Q0FBUjtBQUNEOztBQUNELE1BQUlELEdBQUosRUFBUztBQUNQLFFBQUlFLFVBQVUsR0FBRyw0Q0FBNENDLElBQTVDLENBQWlESCxHQUFqRCxDQUFqQjs7QUFDQSxRQUFJLENBQUNFLFVBQUwsRUFBaUI7QUFDZkQsV0FBSyxHQUFHLG9CQUFSO0FBQ0Q7QUFDRjs7QUFDRCxTQUFPQSxLQUFQO0FBQ0QsQ0FaTTtBQWNBLElBQU1HLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUFKLEdBQUcsRUFBSTtBQUM3QixNQUFJQyxLQUFKOztBQUNBLE1BQUksQ0FBQ0QsR0FBTCxFQUFVO0FBQ1JDLFNBQUssR0FBRyxpQ0FBUjtBQUNEOztBQUNELFNBQU9BLEtBQVA7QUFDRCxDQU5NO0FBUUEsSUFBTUksVUFBVSxHQUFH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QUMsQ0FBQ0UsQ0FBRCxDQUFELEdBQUtILEVBQUUsQ0FBQ0csQ0FBRCxDQUFuQjtBQURBOztBQUVBRCxjQUFRLEdBQUdBLFFBQVEsR0FBRyxFQUF0QjtBQUNIOztBQUNELFFBQUdBLFFBQVEsSUFBRUQsQ0FBQyxDQUFDLEVBQUQsQ0FBZCxFQUFvQnhCLEtBQUssR0FBRyxrQkFBUjtBQUNwQixXQUFPQSxLQUFQO0FBQ0g7QUFFRixDQXZCTTtBQTBCQSxJQUFNNkIsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFBOUIsR0FBRyxFQUFJO0FBQ3pDLE1BQUlxQixLQUFLLEdBQUcsbUJBQW1CbEIsSUFBbkIsQ0FBd0JILEdBQXhCLENBQVo7QUFDQSxNQUFJQyxLQUFKOztBQUNBLE1BQUdELEdBQUgsRUFBUTtBQUNOLFFBQUdxQixLQUFLLEtBQUssSUFBYixFQUFtQjtBQUNqQnBCLFdBQUssR0FBRyxtQ0FBUjtBQUNEO0FBQ0Y7O0FBQ0QsU0FBT0EsS0FBUDtBQUNDLENBVE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ2V0c2VydmljZS4xYzg3Y2RjNGI1NDJiNDM5NjNjOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGVtYWlsVmFsaWQgPSB2YWwgPT4ge1xyXG4gIGxldCBlcnJvcjtcclxuICBpZiAoIXZhbCkge1xyXG4gICAgZXJyb3IgPSAn0J/QvtC70LUgRW1haWwg0L7QsdGP0LfQsNGC0LXQu9GM0L3QviDQtNC70Y8g0LfQsNC/0L7Qu9C90LXQvdC40Y8nXHJcbiAgfVxyXG4gIGlmICh2YWwpIHtcclxuICAgIGxldCBlbWFpbHZhbGlkID0gL15bQS1aMC05Ll8lKy1dK0BbQS1aMC05Li1dK1xcLltBLVpdezIsNH0kL2kudGVzdCh2YWwpO1xyXG4gICAgaWYgKCFlbWFpbHZhbGlkKSB7XHJcbiAgICAgIGVycm9yID0gJ9Cd0LXQv9GA0LDQstC40LvRjNC90YvQuSBlbWFpbCdcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGVycm9yXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZXF1aXJlZCA9IHZhbCA9PiB7XHJcbiAgbGV0IGVycm9yO1xyXG4gIGlmICghdmFsKSB7XHJcbiAgICBlcnJvciA9ICfQn9C+0LvQtSDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+INC00LvRjyDQt9Cw0L/QvtC70L3QtdC90LjRjydcclxuICB9XHJcbiAgcmV0dXJuIGVycm9yXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwaG9uZUNoZWNrID0gKHZhbCkgPT4ge1xyXG4gIHZhciBQSE9ORV9PUEVSQVRPUlMgPSBbXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnNzcwMCdcclxuICAgIH0sIHtcclxuICAgICAgaWQ6ICc3NzAxJ1xyXG4gICAgfSwge1xyXG4gICAgICBpZDogJzc3MDInXHJcbiAgICB9LCB7XHJcbiAgICAgIGlkOiAnNzcwNSdcclxuICAgIH0sIHtcclxuICAgICAgaWQ6ICc3NzA2J1xyXG4gICAgfSwge1xyXG4gICAgICBpZDogJzc3MDcnXHJcbiAgICB9LCB7XHJcbiAgICAgIGlkOiAnNzcwOCdcclxuICAgIH0sIHtcclxuICAgICAgaWQ6ICc3NzQ3J1xyXG4gICAgfSwge1xyXG4gICAgICBpZDogJzc3NzEnXHJcbiAgICB9LCB7XHJcbiAgICAgIGlkOiAnNzc3NSdcclxuICAgIH0sIHtcclxuICAgICAgaWQ6ICc3Nzc2J1xyXG4gICAgfSwge1xyXG4gICAgICBpZDogJzc3NzcnXHJcbiAgICB9LCB7XHJcbiAgICAgIGlkOiAnNzc3OCdcclxuICAgIH1cclxuICBdO1xyXG4gIHZhciBwaG9uZSA9IFN0cmluZyh2YWwpLnJlcGxhY2UoL1teQS1aMC05XS9nLCAnJyksXHJcbiAgICBjb2RlID0gcGhvbmUubWF0Y2goL14oXFxkezR9KShcXGR7M30pKFxcZHs0fSkkLyk7XHJcbiAgaWYgKCFjb2RlIHx8IHBob25lLmxlbmd0aCAhPT0gMTEpIHtcclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuXHJcbiAgdmFyIHBob25lX251bWJlciA9IGNvZGVbMV07XHJcbiAgdmFyIHBob25lX29wZXJhdG9yID0gUEhPTkVfT1BFUkFUT1JTLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgcmV0dXJuIGl0ZW0uaWQgPT0gcGhvbmVfbnVtYmVyXHJcbiAgfSk7XHJcblxyXG4gIGlmIChwaG9uZV9vcGVyYXRvci5sZW5ndGggPiAwKSB7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcGhvbmVWYWxpZGF0aW9uID0gKHZhbCkgPT4ge1xyXG4gIGxldCBlcnJvclxyXG4gIGlmIChwaG9uZUNoZWNrKHZhbCkgPT09IHRydWUpIHtcclxuICAgIGVycm9yID0gJydcclxuICB9IGVsc2Uge1xyXG4gICAgZXJyb3IgPSAn0J3QtdGCINGB0L7QvtGC0LLQtdGC0YHRgtCy0YPRjtGJ0LXQs9C+INC+0L/QtdGA0LDRgtC+0YDQsCdcclxuICB9XHJcbiAgcmV0dXJuIGVycm9yXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwYXNzd29yZFZhbGlkID0gdmFsID0+IHtcclxuICBsZXQgZXJyb3I7XHJcbiAgaWYgKCF2YWwpIHtcclxuICAgIGVycm9yID0gJ9Cf0L7Qu9C1INC+0LHRj9C30LDRgtC10LvQtdC9INC00LvRjyDQt9Cw0L/QvtC70L3QtdC90LjRjydcclxuICB9XHJcbiAgaWYgKHZhbCAmJiB2YWwubGVuZ3RoIDwgNikge1xyXG4gICAgZXJyb3IgPSAn0LzQuNC90LjQvNCw0LvRjNC90LDRjyDQtNC70LjQvdCwINC/0LDRgNC+0LvRjyDQtNC+0LvQttC90LAg0LHRi9GC0Ywg0L3QtSDQvNC10L3QtdC1IDYg0YHQuNC80LLQvtC70L7QsidcclxuICB9XHJcbiAgcmV0dXJuIGVycm9yO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYWNjZXB0Q2lycmlsaWMgPSB2YWwgPT4ge1xyXG4gIHZhciBmYWxzeSA9IC9bYS16QS1aMC05X1wiKi9dL2kudGVzdCh2YWwpXHJcbiAgbGV0IGVycm9yO1xyXG4gIGlmICghdmFsKSB7XHJcbiAgICBlcnJvciA9ICfQn9C+0LvQtSDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+INC00LvRjyDQt9Cw0L/QvtC70L3QtdC90LjRjydcclxuICB9XHJcbiAgaWYgKHZhbCkge1xyXG4gICAgaWYgKGZhbHN5ID09PSB0cnVlKSB7XHJcbiAgICAgIGVycm9yID0gJ9Cd0YPQttC90L4g0LLQstC+0LTQuNGC0Ywg0YLQvtC70YzQutC+INC90LAg0LrQuNGA0LjQu9C70LjRhtC1J1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGVycm9yO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaWluVmFsaWRhdGlvbiA9ICh2YWwpID0+ICB7XHJcbiAgbGV0IGVycm9yO1xyXG4gIGlmKHZhbCAmJiB2YWwubGVuZ3RoIT09MTIpIGVycm9yID0gJ9CX0LDQv9C+0LvQvdC40YLQtSDQstGB0LUg0L/QvtC70Y8nO1xyXG4gICAgdmFyIGIxID0gWyAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEgXTtcclxuICAgIHZhciBiMiA9IFsgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExLCAxLCAyIF07XHJcbiAgICB2YXIgYSA9IFtdO1xyXG4gICAgdmFyIGNvbnRyb2xsID0gMDtcclxuICAgIGlmKHZhbCkge1xyXG4gICAgICBmb3IodmFyIGk9MDsgaTwxMjsgaSsrKXtcclxuICAgICAgICAgIGFbaV0gPSBwYXJzZUludCh2YWwuc3Vic3RyaW5nKGksIGkrMSkpO1xyXG4gICAgICAgICAgaWYoaTwxMSkgY29udHJvbGwgKz0gYVtpXSpiMVtpXTtcclxuICAgICAgfVxyXG4gICAgICBjb250cm9sbCA9IGNvbnRyb2xsICUgMTE7XHJcbiAgICAgIGlmKGNvbnRyb2xsPT0xMCkge1xyXG4gICAgICAgICAgY29udHJvbGwgPSAwO1xyXG4gICAgICAgICAgZm9yKHZhciBpPTA7IGk8MTE7IGkrKylcclxuICAgICAgICAgIGNvbnRyb2xsICs9IGFbaV0qYjJbaV07XHJcbiAgICAgICAgICBjb250cm9sbCA9IGNvbnRyb2xsICUgMTE7XHJcbiAgICAgIH1cclxuICAgICAgaWYoY29udHJvbGwhPWFbMTFdKSBlcnJvciA9ICfQndC10LrQvtGA0YDQtdC60YLQvdGL0Lkg0JjQmNCdJztcclxuICAgICAgcmV0dXJuIGVycm9yO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgYWNjZXB0Q2lycmlsaWNPbmx5ID0gdmFsID0+IHtcclxudmFyIGZhbHN5ID0gL1thLXpBLVowLTlfXCIqL10vaS50ZXN0KHZhbClcclxubGV0IGVycm9yO1xyXG5pZih2YWwpIHtcclxuICBpZihmYWxzeSA9PT0gdHJ1ZSkge1xyXG4gICAgZXJyb3IgPSAn0J3Rg9C20L3QviDQstCy0L7QtNC40YLRjCDRgtC+0LvRjNC60L4g0L3QsCDQutC40YDQuNC70LvQuNGG0LUnXHJcbiAgfVxyXG59XHJcbnJldHVybiBlcnJvcjtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=