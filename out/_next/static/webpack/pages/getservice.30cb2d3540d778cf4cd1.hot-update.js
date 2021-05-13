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
  var phoneval = val.replace(/ /g, "");
  var error;

  if (phoneval.length === 16 && phoneCheck(val) === true) {
    error = '';
  }

  if (phoneval.length !== 16) {
    error = 'Заполните все поля';
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

  if (!value) {
    error = 'Поле обязателен для заполнения';
  }

  if (value && value.length !== 12) {
    error = 'Заполните все поля';
  }

  if (value && value.length === 12) {
    for (var i = 0; i < 12; i++) {
      a[i] = parseInt(value.substring(i, i + 1));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGVmYXVsdHMvdmFsaWRhdGlvbnMuanMiXSwibmFtZXMiOlsiZW1haWxWYWxpZCIsInZhbCIsImVycm9yIiwiZW1haWx2YWxpZCIsInRlc3QiLCJyZXF1aXJlZCIsInBob25lQ2hlY2siLCJQSE9ORV9PUEVSQVRPUlMiLCJpZCIsInBob25lIiwiU3RyaW5nIiwicmVwbGFjZSIsImNvZGUiLCJtYXRjaCIsImxlbmd0aCIsInBob25lX251bWJlciIsInBob25lX29wZXJhdG9yIiwiZmlsdGVyIiwiaXRlbSIsInBob25lVmFsaWRhdGlvbiIsInBob25ldmFsIiwicGFzc3dvcmRWYWxpZCIsImFjY2VwdENpcnJpbGljIiwiZmFsc3kiLCJ2YWx1ZSIsImlpblZhbGlkYXRpb24iLCJiMSIsImIyIiwiYSIsImNvbnRyb2xsIiwiaSIsInBhcnNlSW50Iiwic3Vic3RyaW5nIiwiYWNjZXB0Q2lycmlsaWNPbmx5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFBQyxHQUFHLEVBQUk7QUFDL0IsTUFBSUMsS0FBSjs7QUFDQSxNQUFJLENBQUNELEdBQUwsRUFBVTtBQUNSQyxTQUFLLEdBQUcsdUNBQVI7QUFDRDs7QUFDRCxNQUFJRCxHQUFKLEVBQVM7QUFDUCxRQUFJRSxVQUFVLEdBQUcsNENBQTRDQyxJQUE1QyxDQUFpREgsR0FBakQsQ0FBakI7O0FBQ0EsUUFBSSxDQUFDRSxVQUFMLEVBQWlCO0FBQ2ZELFdBQUssR0FBRyxvQkFBUjtBQUNEO0FBQ0Y7O0FBQ0QsU0FBT0EsS0FBUDtBQUNELENBWk07QUFjQSxJQUFNRyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFBSixHQUFHLEVBQUk7QUFDN0IsTUFBSUMsS0FBSjs7QUFDQSxNQUFJLENBQUNELEdBQUwsRUFBVTtBQUNSQyxTQUFLLEdBQUcsaUNBQVI7QUFDRDs7QUFDRCxTQUFPQSxLQUFQO0FBQ0QsQ0FOTTtB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ZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2dldHNlcnZpY2UuMzBjYjJkMzU0MGQ3NzhjZjRjZDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBlbWFpbFZhbGlkID0gdmFsID0+IHtcclxuICBsZXQgZXJyb3I7XHJcbiAgaWYgKCF2YWwpIHtcclxuICAgIGVycm9yID0gJ9Cf0L7Qu9C1IEVtYWlsINC+0LHRj9C30LDRgtC10LvRjNC90L4g0LTQu9GPINC30LDQv9C+0LvQvdC10L3QuNGPJ1xyXG4gIH1cclxuICBpZiAodmFsKSB7XHJcbiAgICBsZXQgZW1haWx2YWxpZCA9IC9eW0EtWjAtOS5fJSstXStAW0EtWjAtOS4tXStcXC5bQS1aXXsyLDR9JC9pLnRlc3QodmFsKTtcclxuICAgIGlmICghZW1haWx2YWxpZCkge1xyXG4gICAgICBlcnJvciA9ICfQndC10L/RgNCw0LLQuNC70YzQvdGL0LkgZW1haWwnXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBlcnJvclxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVxdWlyZWQgPSB2YWwgPT4ge1xyXG4gIGxldCBlcnJvcjtcclxuICBpZiAoIXZhbCkge1xyXG4gICAgZXJyb3IgPSAn0J/QvtC70LUg0L7QsdGP0LfQsNGC0LXQu9GM0L3QviDQtNC70Y8g0LfQsNC/0L7Qu9C90LXQvdC40Y8nXHJcbiAgfVxyXG4gIHJldHVybiBlcnJvclxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcGhvbmVDaGVjayA9ICh2YWwpID0+IHtcclxuXHJcblxyXG4gIHZhciBQSE9ORV9PUEVSQVRPUlMgPSBbXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnNzcwMCdcclxuICAgIH0sIHtcclxuICAgICAgaWQ6ICc3NzAxJ1xyXG4gICAgfSwge1xyXG4gICAgICBpZDogJzc3MDInXHJcbiAgICB9LCB7XHJcbiAgICAgIGlkOiAnNzcwNSdcclxuICAgIH0sIHtcclxuICAgICAgaWQ6ICc3NzA2J1xyXG4gICAgfSwge1xyXG4gICAgICBpZDogJzc3MDcnXHJcbiAgICB9LCB7XHJcbiAgICAgIGlkOiAnNzcwOCdcclxuICAgIH0sIHtcclxuICAgICAgaWQ6ICc3NzQ3J1xyXG4gICAgfSwge1xyXG4gICAgICBpZDogJzc3NzEnXHJcbiAgICB9LCB7XHJcbiAgICAgIGlkOiAnNzc3NSdcclxuICAgIH0sIHtcclxuICAgICAgaWQ6ICc3Nzc2J1xyXG4gICAgfSwge1xyXG4gICAgICBpZDogJzc3NzcnXHJcbiAgICB9LCB7XHJcbiAgICAgIGlkOiAnNzc3OCdcclxuICAgIH1cclxuICBdO1xyXG4gIHZhciBwaG9uZSA9IFN0cmluZyh2YWwpLnJlcGxhY2UoL1teQS1aMC05XS9nLCAnJyksXHJcbiAgICBjb2RlID0gcGhvbmUubWF0Y2goL14oXFxkezR9KShcXGR7M30pKFxcZHs0fSkkLyk7XHJcbiAgaWYgKCFjb2RlIHx8IHBob25lLmxlbmd0aCAhPT0gMTEpIHtcclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuXHJcbiAgdmFyIHBob25lX251bWJlciA9IGNvZGVbMV07XHJcbiAgdmFyIHBob25lX29wZXJhdG9yID0gUEhPTkVfT1BFUkFUT1JTLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgcmV0dXJuIGl0ZW0uaWQgPT0gcGhvbmVfbnVtYmVyXHJcbiAgfSk7XHJcblxyXG4gIGlmIChwaG9uZV9vcGVyYXRvci5sZW5ndGggPiAwKSB7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcGhvbmVWYWxpZGF0aW9uID0gKHZhbCkgPT4ge1xyXG4gIGNvbnN0IHBob25ldmFsID0gdmFsLnJlcGxhY2UoLyAvZyxcIlwiKTtcclxuXHJcbiAgbGV0IGVycm9yXHJcbiAgXHJcbiAgXHJcbiAgaWYgKHBob25ldmFsLmxlbmd0aCA9PT0gMTYgJiYgcGhvbmVDaGVjayh2YWwpID09PSB0cnVlKSB7XHJcbiAgICBlcnJvciA9ICcnXHJcbiAgfSBcclxuICBpZihwaG9uZXZhbC5sZW5ndGggIT09IDE2KSB7XHJcbiAgICBlcnJvciA9ICfQl9Cw0L/QvtC70L3QuNGC0LUg0LLRgdC1INC/0L7Qu9GPJ1xyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIGVycm9yID0gJ9Cd0LXRgiDRgdC+0L7RgtCy0LXRgtGB0YLQstGD0Y7RidC10LPQviDQvtC/0LXRgNCw0YLQvtGA0LAnXHJcbiAgfVxyXG4gIHJldHVybiBlcnJvclxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcGFzc3dvcmRWYWxpZCA9IHZhbCA9PiB7XHJcbiAgbGV0IGVycm9yO1xyXG4gIGlmICghdmFsKSB7XHJcbiAgICBlcnJvciA9ICfQn9C+0LvQtSDQvtCx0Y/Qt9Cw0YLQtdC70LXQvSDQtNC70Y8g0LfQsNC/0L7Qu9C90LXQvdC40Y8nXHJcbiAgfVxyXG4gIGlmICh2YWwgJiYgdmFsLmxlbmd0aCA8IDYpIHtcclxuICAgIGVycm9yID0gJ9C80LjQvdC40LzQsNC70YzQvdCw0Y8g0LTQu9C40L3QsCDQv9Cw0YDQvtC70Y8g0LTQvtC70LbQvdCwINCx0YvRgtGMINC90LUg0LzQtdC90LXQtSA2INGB0LjQvNCy0L7Qu9C+0LInXHJcbiAgfVxyXG4gIHJldHVybiBlcnJvcjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFjY2VwdENpcnJpbGljID0gdmFsID0+IHtcclxuICB2YXIgZmFsc3kgPSAvW2EtekEtWjAtOV9cIiovXS9pLnRlc3QodmFsKVxyXG4gIGxldCBlcnJvcjtcclxuICBjb25zdCB2YWx1ZSA9IHZhbC5yZXBsYWNlKC8gL2csXCJcIilcclxuICBpZiAoIXZhbHVlKSB7XHJcbiAgICBlcnJvciA9ICfQn9C+0LvQtSDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+INC00LvRjyDQt9Cw0L/QvtC70L3QtdC90LjRjydcclxuICB9XHJcbiAgaWYgKHZhbHVlKSB7XHJcbiAgICBpZiAoZmFsc3kgPT09IHRydWUpIHtcclxuICAgICAgZXJyb3IgPSAn0J3Rg9C20L3QviDQstCy0L7QtNC40YLRjCDRgtC+0LvRjNC60L4g0L3QsCDQutC40YDQuNC70LvQuNGG0LUnXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZXJyb3I7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpaW5WYWxpZGF0aW9uID0gKHZhbCkgPT4gIHtcclxuICBsZXQgZXJyb3IgPSAnJztcclxuICB2YXIgYjEgPSBbIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSBdO1xyXG4gIHZhciBiMiA9IFsgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExLCAxLCAyIF07XHJcbiAgdmFyIGEgPSBbXTtcclxuICBjb25zdCB2YWx1ZSA9IHZhbC5yZXBsYWNlKC8gL2csXCJcIilcclxuICB2YXIgY29udHJvbGwgPSAwO1xyXG4gIGlmKCF2YWx1ZSkge1xyXG4gICAgZXJyb3IgPSAn0J/QvtC70LUg0L7QsdGP0LfQsNGC0LXQu9C10L0g0LTQu9GPINC30LDQv9C+0LvQvdC10L3QuNGPJ1xyXG4gIH1cclxuICBpZih2YWx1ZSAmJiB2YWx1ZS5sZW5ndGghPT0xMikge1xyXG4gICAgZXJyb3IgPSAn0JfQsNC/0L7Qu9C90LjRgtC1INCy0YHQtSDQv9C+0LvRjyc7XHJcbiAgfVxyXG4gIFxyXG4gICAgaWYodmFsdWUgJiYgdmFsdWUubGVuZ3RoID09PSAxMikge1xyXG4gICAgICBmb3IodmFyIGk9MDsgaTwxMjsgaSsrKXtcclxuICAgICAgICAgIGFbaV0gPSBwYXJzZUludCh2YWx1ZS5zdWJzdHJpbmcoaSwgaSsxKSk7XHJcbiAgICAgICAgICBpZihpPDExKSBjb250cm9sbCArPSBhW2ldKmIxW2ldO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnRyb2xsID0gY29udHJvbGwgJSAxMTtcclxuICAgICAgaWYoY29udHJvbGw9PTEwKSB7XHJcbiAgICAgICAgICBjb250cm9sbCA9IDA7XHJcbiAgICAgICAgICBmb3IodmFyIGk9MDsgaTwxMTsgaSsrKVxyXG4gICAgICAgICAgY29udHJvbGwgKz0gYVtpXSpiMltpXTtcclxuICAgICAgICAgIGNvbnRyb2xsID0gY29udHJvbGwgJSAxMTtcclxuICAgICAgfVxyXG4gICAgICBpZihjb250cm9sbCE9YVsxMV0pICB7XHJcbiAgICAgICAgZXJyb3IgPSAn0J3QtdC60L7RgNGA0LXQutGC0L3Ri9C5INCY0JjQnSc7XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIFxyXG4gIHJldHVybiBlcnJvcjtcclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgYWNjZXB0Q2lycmlsaWNPbmx5ID0gdmFsID0+IHtcclxudmFyIGZhbHN5ID0gL1thLXpBLVowLTlfXCIqL10vaS50ZXN0KHZhbClcclxubGV0IGVycm9yO1xyXG5pZih2YWwpIHtcclxuICBpZihmYWxzeSA9PT0gdHJ1ZSkge1xyXG4gICAgZXJyb3IgPSAn0J3Rg9C20L3QviDQstCy0L7QtNC40YLRjCDRgtC+0LvRjNC60L4g0L3QsCDQutC40YDQuNC70LvQuNGG0LUnXHJcbiAgfVxyXG59XHJcbnJldHVybiBlcnJvcjtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=