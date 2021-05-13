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
  var value = val.replace(/ /g, "");

  if (!value) {
    error = 'Поле обязательно для заполнения';
  }

  if (value) {
    if (falsy === true) {
      error = 'Нужно вводить только на кириллице';
    }
  }

  return error;
};
var iinValidation = function iinValidation(val) {
  var error = '';
  var b1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  var b2 = [3, 4, 5, 6, 7, 8, 9, 10, 11, 1, 2];
  var a = [];
  var value = val.replace(/ /g, "");
  var controll = 0;

  if (!val) {
    error = 'Поле обязателен для заполнения';
  }

  if (val && val.length !== 12) {
    error = 'Заполните все поля';
  }

  if (val && val.length === 12) {
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

    if (controll != a[11]) {
      error = 'Некорректный ИИН';
    }
  }

  return error;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGVmYXVsdHMvdmFsaWRhdGlvbnMuanMiXSwibmFtZXMiOlsiZW1haWxWYWxpZCIsInZhbCIsImVycm9yIiwiZW1haWx2YWxpZCIsInRlc3QiLCJyZXF1aXJlZCIsInBob25lQ2hlY2siLCJQSE9ORV9PUEVSQVRPUlMiLCJpZCIsInBob25lIiwiU3RyaW5nIiwicmVwbGFjZSIsImNvZGUiLCJtYXRjaCIsImxlbmd0aCIsInBob25lX251bWJlciIsInBob25lX29wZXJhdG9yIiwiZmlsdGVyIiwiaXRlbSIsInBob25lVmFsaWRhdGlvbiIsInBhc3N3b3JkVmFsaWQiLCJhY2NlcHRDaXJyaWxpYyIsImZhbHN5IiwidmFsdWUiLCJpaW5WYWxpZGF0aW9uIiwiYjEiLCJiMiIsImEiLCJjb250cm9sbCIsImkiLCJwYXJzZUludCIsInN1YnN0cmluZyIsImFjY2VwdENpcnJpbGljT25seSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQUMsR0FBRyxFQUFJO0FBQy9CLE1BQUlDLEtBQUo7O0FBQ0EsTUFBSSxDQUFDRCxHQUFMLEVBQVU7QUFDUkMsU0FBSyxHQUFHLHVDQUFSO0FBQ0Q7O0FBQ0QsTUFBSUQsR0FBSixFQUFTO0FBQ1AsUUFBSUUsVUFBVSxHQUFHLDRDQUE0Q0MsSUFBNUMsQ0FBaURILEdBQWpELENBQWpCOztBQUNBLFFBQUksQ0FBQ0UsVUFBTCxFQUFpQjtBQUNmRCxXQUFLLEdBQUcsb0JBQVI7QUFDRDtBQUNGOztBQUNELFNBQU9BLEtBQVA7QUFDRCxDQVpNO0FBY0EsSUFBTUcsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQUosR0FBRyxFQUFJO0FBQzdCLE1BQUlDLEtBQUo7O0FBQ0EsTUFBSSxDQUFDRCxHQUFMLEVBQVU7QUFDUkMsU0FBSyxHQUFHLGlDQUFSO0FBQ0Q7O0FBQ0QsU0FBT0EsS0FBUDtBQUNELENBTk07QUFRQSxJQUFNSSxV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QUwsRUFBU0QsUUFBUSxJQUFJRCxDQUFDLENBQUNFLENBQUQsQ0FBRCxHQUFLSixFQUFFLENBQUNJLENBQUQsQ0FBbkI7QUFDWjs7QUFDREQsWUFBUSxHQUFHQSxRQUFRLEdBQUcsRUFBdEI7O0FBQ0EsUUFBR0EsUUFBUSxJQUFFLEVBQWIsRUFBaUI7QUFDYkEsY0FBUSxHQUFHLENBQVg7O0FBQ0EsV0FBSSxJQUFJQyxDQUFDLEdBQUMsQ0FBVixFQUFhQSxDQUFDLEdBQUMsRUFBZixFQUFtQkEsQ0FBQyxFQUFwQjtBQUNBRCxnQkFBUSxJQUFJRCxDQUFDLENBQUNFLENBQUQsQ0FBRCxHQUFLSCxFQUFFLENBQUNHLENBQUQsQ0FBbkI7QUFEQTs7QUFFQUQsY0FBUSxHQUFHQSxRQUFRLEdBQUcsRUFBdEI7QUFDSDs7QUFDRCxRQUFHQSxRQUFRLElBQUVELENBQUMsQ0FBQyxFQUFELENBQWQsRUFBcUI7QUFDbkJ6QixXQUFLLEdBQUcsa0JBQVI7QUFDRDtBQUNKOztBQUdELFNBQU9BLEtBQVA7QUFFRCxDQWxDTTtBQXFDQSxJQUFNOEIsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFBL0IsR0FBRyxFQUFJO0FBQ3pDLE1BQUlxQixLQUFLLEdBQUcsbUJBQW1CbEIsSUFBbkIsQ0FBd0JILEdBQXhCLENBQVo7QUFDQSxNQUFJQyxLQUFKOztBQUNBLE1BQUdELEdBQUgsRUFBUTtBQUNOLFFBQUdxQixLQUFLLEtBQUssSUFBYixFQUFtQjtBQUNqQnBCLFdBQUssR0FBRyxtQ0FBUjtBQUNEO0FBQ0Y7O0FBQ0QsU0FBT0EsS0FBUDtBQUNDLENBVE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ2V0c2VydmljZS5jMzU3ZGViNWMwYWI4ZTY5ZmZmNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGVtYWlsVmFsaWQgPSB2YWwgPT4ge1xyXG4gIGxldCBlcnJvcjtcclxuICBpZiAoIXZhbCkge1xyXG4gICAgZXJyb3IgPSAn0J/QvtC70LUgRW1haWwg0L7QsdGP0LfQsNGC0LXQu9GM0L3QviDQtNC70Y8g0LfQsNC/0L7Qu9C90LXQvdC40Y8nXHJcbiAgfVxyXG4gIGlmICh2YWwpIHtcclxuICAgIGxldCBlbWFpbHZhbGlkID0gL15bQS1aMC05Ll8lKy1dK0BbQS1aMC05Li1dK1xcLltBLVpdezIsNH0kL2kudGVzdCh2YWwpO1xyXG4gICAgaWYgKCFlbWFpbHZhbGlkKSB7XHJcbiAgICAgIGVycm9yID0gJ9Cd0LXQv9GA0LDQstC40LvRjNC90YvQuSBlbWFpbCdcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGVycm9yXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZXF1aXJlZCA9IHZhbCA9PiB7XHJcbiAgbGV0IGVycm9yO1xyXG4gIGlmICghdmFsKSB7XHJcbiAgICBlcnJvciA9ICfQn9C+0LvQtSDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+INC00LvRjyDQt9Cw0L/QvtC70L3QtdC90LjRjydcclxuICB9XHJcbiAgcmV0dXJuIGVycm9yXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwaG9uZUNoZWNrID0gKHZhbCkgPT4ge1xyXG4gIHZhciBQSE9ORV9PUEVSQVRPUlMgPSBbXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnNzcwMCdcclxuICAgIH0sIHtcclxuICAgICAgaWQ6ICc3NzAxJ1xyXG4gICAgfSwge1xyXG4gICAgICBpZDogJzc3MDInXHJcbiAgICB9LCB7XHJcbiAgICAgIGlkOiAnNzcwNSdcclxuICAgIH0sIHtcclxuICAgICAgaWQ6ICc3NzA2J1xyXG4gICAgfSwge1xyXG4gICAgICBpZDogJzc3MDcnXHJcbiAgICB9LCB7XHJcbiAgICAgIGlkOiAnNzcwOCdcclxuICAgIH0sIHtcclxuICAgICAgaWQ6ICc3NzQ3J1xyXG4gICAgfSwge1xyXG4gICAgICBpZDogJzc3NzEnXHJcbiAgICB9LCB7XHJcbiAgICAgIGlkOiAnNzc3NSdcclxuICAgIH0sIHtcclxuICAgICAgaWQ6ICc3Nzc2J1xyXG4gICAgfSwge1xyXG4gICAgICBpZDogJzc3NzcnXHJcbiAgICB9LCB7XHJcbiAgICAgIGlkOiAnNzc3OCdcclxuICAgIH1cclxuICBdO1xyXG4gIHZhciBwaG9uZSA9IFN0cmluZyh2YWwpLnJlcGxhY2UoL1teQS1aMC05XS9nLCAnJyksXHJcbiAgICBjb2RlID0gcGhvbmUubWF0Y2goL14oXFxkezR9KShcXGR7M30pKFxcZHs0fSkkLyk7XHJcbiAgaWYgKCFjb2RlIHx8IHBob25lLmxlbmd0aCAhPT0gMTEpIHtcclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuXHJcbiAgdmFyIHBob25lX251bWJlciA9IGNvZGVbMV07XHJcbiAgdmFyIHBob25lX29wZXJhdG9yID0gUEhPTkVfT1BFUkFUT1JTLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgcmV0dXJuIGl0ZW0uaWQgPT0gcGhvbmVfbnVtYmVyXHJcbiAgfSk7XHJcblxyXG4gIGlmIChwaG9uZV9vcGVyYXRvci5sZW5ndGggPiAwKSB7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcGhvbmVWYWxpZGF0aW9uID0gKHZhbCkgPT4ge1xyXG4gIGxldCBlcnJvclxyXG4gIGlmIChwaG9uZUNoZWNrKHZhbCkgPT09IHRydWUpIHtcclxuICAgIGVycm9yID0gJydcclxuICB9IGVsc2Uge1xyXG4gICAgZXJyb3IgPSAn0J3QtdGCINGB0L7QvtGC0LLQtdGC0YHRgtCy0YPRjtGJ0LXQs9C+INC+0L/QtdGA0LDRgtC+0YDQsCdcclxuICB9XHJcbiAgcmV0dXJuIGVycm9yXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwYXNzd29yZFZhbGlkID0gdmFsID0+IHtcclxuICBsZXQgZXJyb3I7XHJcbiAgaWYgKCF2YWwpIHtcclxuICAgIGVycm9yID0gJ9Cf0L7Qu9C1INC+0LHRj9C30LDRgtC10LvQtdC9INC00LvRjyDQt9Cw0L/QvtC70L3QtdC90LjRjydcclxuICB9XHJcbiAgaWYgKHZhbCAmJiB2YWwubGVuZ3RoIDwgNikge1xyXG4gICAgZXJyb3IgPSAn0LzQuNC90LjQvNCw0LvRjNC90LDRjyDQtNC70LjQvdCwINC/0LDRgNC+0LvRjyDQtNC+0LvQttC90LAg0LHRi9GC0Ywg0L3QtSDQvNC10L3QtdC1IDYg0YHQuNC80LLQvtC70L7QsidcclxuICB9XHJcbiAgcmV0dXJuIGVycm9yO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYWNjZXB0Q2lycmlsaWMgPSB2YWwgPT4ge1xyXG4gIHZhciBmYWxzeSA9IC9bYS16QS1aMC05X1wiKi9dL2kudGVzdCh2YWwpXHJcbiAgbGV0IGVycm9yO1xyXG4gIGNvbnN0IHZhbHVlID0gdmFsLnJlcGxhY2UoLyAvZyxcIlwiKVxyXG4gIGlmICghdmFsdWUpIHtcclxuICAgIGVycm9yID0gJ9Cf0L7Qu9C1INC+0LHRj9C30LDRgtC10LvRjNC90L4g0LTQu9GPINC30LDQv9C+0LvQvdC10L3QuNGPJ1xyXG4gIH1cclxuICBpZiAodmFsdWUpIHtcclxuICAgIGlmIChmYWxzeSA9PT0gdHJ1ZSkge1xyXG4gICAgICBlcnJvciA9ICfQndGD0LbQvdC+INCy0LLQvtC00LjRgtGMINGC0L7Qu9GM0LrQviDQvdCwINC60LjRgNC40LvQu9C40YbQtSdcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBlcnJvcjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGlpblZhbGlkYXRpb24gPSAodmFsKSA9PiAge1xyXG4gIGxldCBlcnJvciA9ICcnO1xyXG4gIHZhciBiMSA9IFsgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExIF07XHJcbiAgdmFyIGIyID0gWyAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEsIDIgXTtcclxuICB2YXIgYSA9IFtdO1xyXG4gIGNvbnN0IHZhbHVlID0gdmFsLnJlcGxhY2UoLyAvZyxcIlwiKVxyXG4gIHZhciBjb250cm9sbCA9IDA7XHJcbiAgaWYoIXZhbCkge1xyXG4gICAgZXJyb3IgPSAn0J/QvtC70LUg0L7QsdGP0LfQsNGC0LXQu9C10L0g0LTQu9GPINC30LDQv9C+0LvQvdC10L3QuNGPJ1xyXG4gIH1cclxuICBpZih2YWwgJiYgdmFsLmxlbmd0aCE9PTEyKSB7XHJcbiAgICBlcnJvciA9ICfQl9Cw0L/QvtC70L3QuNGC0LUg0LLRgdC1INC/0L7Qu9GPJztcclxuICB9XHJcbiAgXHJcbiAgICBpZih2YWwgJiYgdmFsLmxlbmd0aCA9PT0gMTIpIHtcclxuICAgICAgZm9yKHZhciBpPTA7IGk8MTI7IGkrKyl7XHJcbiAgICAgICAgICBhW2ldID0gcGFyc2VJbnQodmFsLnN1YnN0cmluZyhpLCBpKzEpKTtcclxuICAgICAgICAgIGlmKGk8MTEpIGNvbnRyb2xsICs9IGFbaV0qYjFbaV07XHJcbiAgICAgIH1cclxuICAgICAgY29udHJvbGwgPSBjb250cm9sbCAlIDExO1xyXG4gICAgICBpZihjb250cm9sbD09MTApIHtcclxuICAgICAgICAgIGNvbnRyb2xsID0gMDtcclxuICAgICAgICAgIGZvcih2YXIgaT0wOyBpPDExOyBpKyspXHJcbiAgICAgICAgICBjb250cm9sbCArPSBhW2ldKmIyW2ldO1xyXG4gICAgICAgICAgY29udHJvbGwgPSBjb250cm9sbCAlIDExO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKGNvbnRyb2xsIT1hWzExXSkgIHtcclxuICAgICAgICBlcnJvciA9ICfQndC10LrQvtGA0YDQtdC60YLQvdGL0Lkg0JjQmNCdJztcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgXHJcbiAgcmV0dXJuIGVycm9yO1xyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBhY2NlcHRDaXJyaWxpY09ubHkgPSB2YWwgPT4ge1xyXG52YXIgZmFsc3kgPSAvW2EtekEtWjAtOV9cIiovXS9pLnRlc3QodmFsKVxyXG5sZXQgZXJyb3I7XHJcbmlmKHZhbCkge1xyXG4gIGlmKGZhbHN5ID09PSB0cnVlKSB7XHJcbiAgICBlcnJvciA9ICfQndGD0LbQvdC+INCy0LLQvtC00LjRgtGMINGC0L7Qu9GM0LrQviDQvdCwINC60LjRgNC40LvQu9C40YbQtSdcclxuICB9XHJcbn1cclxucmV0dXJuIGVycm9yO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==