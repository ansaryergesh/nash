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
  }

  if (phoneval.length === 16 && phoneCheck(val) === false) {
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
  var value = val ? val.replace(/ /g, "") : '';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGVmYXVsdHMvdmFsaWRhdGlvbnMuanMiXSwibmFtZXMiOlsiZW1haWxWYWxpZCIsInZhbCIsImVycm9yIiwiZW1haWx2YWxpZCIsInRlc3QiLCJyZXF1aXJlZCIsInBob25lQ2hlY2siLCJQSE9ORV9PUEVSQVRPUlMiLCJpZCIsInBob25lIiwiU3RyaW5nIiwicmVwbGFjZSIsImNvZGUiLCJtYXRjaCIsImxlbmd0aCIsInBob25lX251bWJlciIsInBob25lX29wZXJhdG9yIiwiZmlsdGVyIiwiaXRlbSIsInBob25lVmFsaWRhdGlvbiIsInBob25ldmFsIiwicGFzc3dvcmRWYWxpZCIsImFjY2VwdENpcnJpbGljIiwiZmFsc3kiLCJ2YWx1ZSIsImlpblZhbGlkYXRpb24iLCJiMSIsImIyIiwiYSIsImNvbnRyb2xsIiwiaSIsInBhcnNlSW50Iiwic3Vic3RyaW5nIiwiYWNjZXB0Q2lycmlsaWNPbmx5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFBQyxHQUFHLEVBQUk7QUFDL0IsTUFBSUMsS0FBSjs7QUFDQSxNQUFJLENBQUNELEdBQUwsRUFBVTtBQUNSQyxTQUFLLEdBQUcsdUNBQVI7QUFDRDs7QUFDRCxNQUFJRCxHQUFKLEVBQVM7QUFDUCxRQUFJRSxVQUFVLEdBQUcsNENBQTRDQyxJQUE1QyxDQUFpREgsR0FBakQsQ0FBakI7O0FBQ0EsUUFBSSxDQUFDRSxVQUFMLEVBQWlCO0FBQ2ZELFdBQUssR0FBRyxvQkFBUjtBQUNEO0FBQ0Y7O0FBQ0QsU0FBT0EsS0FBUDtBQUNELENBWk07QUFjQSxJQUFNRyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFBSixHQUFHLEVBQUk7QUFDN0IsTUFBSUMsS0FBSjs7QUFDQSxNQUFJLENBQUNELEdBQUwsRUFBVTtBQUNSQyxTQUFLLEdBQUcsaUNBQVI7QUFDRDs7QUFDRCxTQUFPQSxLQUFQO0FBQ0QsQ0FOTTtB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UTtBQUNOLFFBQUdzQixLQUFLLEtBQUssSUFBYixFQUFtQjtBQUNqQnJCLFdBQUssR0FBRyxtQ0FBUjtBQUNEO0FBQ0Y7O0FBQ0QsU0FBT0EsS0FBUDtBQUNDLENBVE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ2V0c2VydmljZS5mZWVlMTQ2NTljOTgwNTI2YTUxNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGVtYWlsVmFsaWQgPSB2YWwgPT4ge1xyXG4gIGxldCBlcnJvcjtcclxuICBpZiAoIXZhbCkge1xyXG4gICAgZXJyb3IgPSAn0J/QvtC70LUgRW1haWwg0L7QsdGP0LfQsNGC0LXQu9GM0L3QviDQtNC70Y8g0LfQsNC/0L7Qu9C90LXQvdC40Y8nXHJcbiAgfVxyXG4gIGlmICh2YWwpIHtcclxuICAgIGxldCBlbWFpbHZhbGlkID0gL15bQS1aMC05Ll8lKy1dK0BbQS1aMC05Li1dK1xcLltBLVpdezIsNH0kL2kudGVzdCh2YWwpO1xyXG4gICAgaWYgKCFlbWFpbHZhbGlkKSB7XHJcbiAgICAgIGVycm9yID0gJ9Cd0LXQv9GA0LDQstC40LvRjNC90YvQuSBlbWFpbCdcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGVycm9yXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZXF1aXJlZCA9IHZhbCA9PiB7XHJcbiAgbGV0IGVycm9yO1xyXG4gIGlmICghdmFsKSB7XHJcbiAgICBlcnJvciA9ICfQn9C+0LvQtSDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+INC00LvRjyDQt9Cw0L/QvtC70L3QtdC90LjRjydcclxuICB9XHJcbiAgcmV0dXJuIGVycm9yXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwaG9uZUNoZWNrID0gKHZhbCkgPT4ge1xyXG5cclxuXHJcbiAgdmFyIFBIT05FX09QRVJBVE9SUyA9IFtcclxuICAgIHtcclxuICAgICAgaWQ6ICc3NzAwJ1xyXG4gICAgfSwge1xyXG4gICAgICBpZDogJzc3MDEnXHJcbiAgICB9LCB7XHJcbiAgICAgIGlkOiAnNzcwMidcclxuICAgIH0sIHtcclxuICAgICAgaWQ6ICc3NzA1J1xyXG4gICAgfSwge1xyXG4gICAgICBpZDogJzc3MDYnXHJcbiAgICB9LCB7XHJcbiAgICAgIGlkOiAnNzcwNydcclxuICAgIH0sIHtcclxuICAgICAgaWQ6ICc3NzA4J1xyXG4gICAgfSwge1xyXG4gICAgICBpZDogJzc3NDcnXHJcbiAgICB9LCB7XHJcbiAgICAgIGlkOiAnNzc3MSdcclxuICAgIH0sIHtcclxuICAgICAgaWQ6ICc3Nzc1J1xyXG4gICAgfSwge1xyXG4gICAgICBpZDogJzc3NzYnXHJcbiAgICB9LCB7XHJcbiAgICAgIGlkOiAnNzc3NydcclxuICAgIH0sIHtcclxuICAgICAgaWQ6ICc3Nzc4J1xyXG4gICAgfVxyXG4gIF07XHJcbiAgdmFyIHBob25lID0gU3RyaW5nKHZhbCkucmVwbGFjZSgvW15BLVowLTldL2csICcnKSxcclxuICAgIGNvZGUgPSBwaG9uZS5tYXRjaCgvXihcXGR7NH0pKFxcZHszfSkoXFxkezR9KSQvKTtcclxuICBpZiAoIWNvZGUgfHwgcGhvbmUubGVuZ3RoICE9PSAxMSkge1xyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG5cclxuICB2YXIgcGhvbmVfbnVtYmVyID0gY29kZVsxXTtcclxuICB2YXIgcGhvbmVfb3BlcmF0b3IgPSBQSE9ORV9PUEVSQVRPUlMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICByZXR1cm4gaXRlbS5pZCA9PSBwaG9uZV9udW1iZXJcclxuICB9KTtcclxuXHJcbiAgaWYgKHBob25lX29wZXJhdG9yLmxlbmd0aCA+IDApIHtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwaG9uZVZhbGlkYXRpb24gPSAodmFsKSA9PiB7XHJcbiAgY29uc3QgcGhvbmV2YWwgPSB2YWwucmVwbGFjZSgvIC9nLFwiXCIpO1xyXG5cclxuICBsZXQgZXJyb3JcclxuICBcclxuICBcclxuICBpZiAocGhvbmV2YWwubGVuZ3RoID09PSAxNiAmJiBwaG9uZUNoZWNrKHZhbCkgPT09IHRydWUpIHtcclxuICAgIGVycm9yID0gJydcclxuICB9IFxyXG4gIGlmKHBob25ldmFsLmxlbmd0aCAhPT0gMTYpIHtcclxuICAgIGVycm9yID0gJ9CX0LDQv9C+0LvQvdC40YLQtSDQstGB0LUg0L/QvtC70Y8nXHJcbiAgfVxyXG4gIGlmKHBob25ldmFsLmxlbmd0aCA9PT0xNiAmJiBwaG9uZUNoZWNrKHZhbCkgPT09IGZhbHNlKSB7XHJcbiAgICBlcnJvciA9ICfQndC10YIg0YHQvtC+0YLQstC10YLRgdGC0LLRg9GO0YnQtdCz0L4g0L7Qv9C10YDQsNGC0L7RgNCwJ1xyXG4gIH1cclxuICBcclxuICByZXR1cm4gZXJyb3JcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHBhc3N3b3JkVmFsaWQgPSB2YWwgPT4ge1xyXG4gIGxldCBlcnJvcjtcclxuICBpZiAoIXZhbCkge1xyXG4gICAgZXJyb3IgPSAn0J/QvtC70LUg0L7QsdGP0LfQsNGC0LXQu9C10L0g0LTQu9GPINC30LDQv9C+0LvQvdC10L3QuNGPJ1xyXG4gIH1cclxuICBpZiAodmFsICYmIHZhbC5sZW5ndGggPCA2KSB7XHJcbiAgICBlcnJvciA9ICfQvNC40L3QuNC80LDQu9GM0L3QsNGPINC00LvQuNC90LAg0L/QsNGA0L7Qu9GPINC00L7Qu9C20L3QsCDQsdGL0YLRjCDQvdC1INC80LXQvdC10LUgNiDRgdC40LzQstC+0LvQvtCyJ1xyXG4gIH1cclxuICByZXR1cm4gZXJyb3I7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhY2NlcHRDaXJyaWxpYyA9IHZhbCA9PiB7XHJcbiAgdmFyIGZhbHN5ID0gL1thLXpBLVowLTlfXCIqL10vaS50ZXN0KHZhbClcclxuICBsZXQgZXJyb3I7XHJcbiAgY29uc3QgdmFsdWUgPSB2YWwucmVwbGFjZSgvIC9nLFwiXCIpXHJcbiAgaWYgKCF2YWx1ZSkge1xyXG4gICAgZXJyb3IgPSAn0J/QvtC70LUg0L7QsdGP0LfQsNGC0LXQu9GM0L3QviDQtNC70Y8g0LfQsNC/0L7Qu9C90LXQvdC40Y8nXHJcbiAgfVxyXG4gIGlmICh2YWx1ZSkge1xyXG4gICAgaWYgKGZhbHN5ID09PSB0cnVlKSB7XHJcbiAgICAgIGVycm9yID0gJ9Cd0YPQttC90L4g0LLQstC+0LTQuNGC0Ywg0YLQvtC70YzQutC+INC90LAg0LrQuNGA0LjQu9C70LjRhtC1J1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGVycm9yO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaWluVmFsaWRhdGlvbiA9ICh2YWwpID0+ICB7XHJcbiAgbGV0IGVycm9yID0gJyc7XHJcbiAgdmFyIGIxID0gWyAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEgXTtcclxuICB2YXIgYjIgPSBbIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSwgMSwgMiBdO1xyXG4gIHZhciBhID0gW107XHJcbiAgY29uc3QgdmFsdWUgPSB2YWwgPyB2YWwucmVwbGFjZSgvIC9nLFwiXCIpIDogJydcclxuICB2YXIgY29udHJvbGwgPSAwO1xyXG4gIGlmKCF2YWx1ZSkge1xyXG4gICAgZXJyb3IgPSAn0J/QvtC70LUg0L7QsdGP0LfQsNGC0LXQu9C10L0g0LTQu9GPINC30LDQv9C+0LvQvdC10L3QuNGPJ1xyXG4gIH1cclxuICBpZih2YWx1ZSAmJiB2YWx1ZS5sZW5ndGghPT0xMikge1xyXG4gICAgZXJyb3IgPSAn0JfQsNC/0L7Qu9C90LjRgtC1INCy0YHQtSDQv9C+0LvRjyc7XHJcbiAgfVxyXG4gIFxyXG4gICAgaWYodmFsdWUgJiYgdmFsdWUubGVuZ3RoID09PSAxMikge1xyXG4gICAgICBmb3IodmFyIGk9MDsgaTwxMjsgaSsrKXtcclxuICAgICAgICAgIGFbaV0gPSBwYXJzZUludCh2YWx1ZS5zdWJzdHJpbmcoaSwgaSsxKSk7XHJcbiAgICAgICAgICBpZihpPDExKSBjb250cm9sbCArPSBhW2ldKmIxW2ldO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnRyb2xsID0gY29udHJvbGwgJSAxMTtcclxuICAgICAgaWYoY29udHJvbGw9PTEwKSB7XHJcbiAgICAgICAgICBjb250cm9sbCA9IDA7XHJcbiAgICAgICAgICBmb3IodmFyIGk9MDsgaTwxMTsgaSsrKVxyXG4gICAgICAgICAgY29udHJvbGwgKz0gYVtpXSpiMltpXTtcclxuICAgICAgICAgIGNvbnRyb2xsID0gY29udHJvbGwgJSAxMTtcclxuICAgICAgfVxyXG4gICAgICBpZihjb250cm9sbCE9YVsxMV0pICB7XHJcbiAgICAgICAgZXJyb3IgPSAn0J3QtdC60L7RgNGA0LXQutGC0L3Ri9C5INCY0JjQnSc7XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIFxyXG4gIHJldHVybiBlcnJvcjtcclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgYWNjZXB0Q2lycmlsaWNPbmx5ID0gdmFsID0+IHtcclxudmFyIGZhbHN5ID0gL1thLXpBLVowLTlfXCIqL10vaS50ZXN0KHZhbClcclxubGV0IGVycm9yO1xyXG5pZih2YWwpIHtcclxuICBpZihmYWxzeSA9PT0gdHJ1ZSkge1xyXG4gICAgZXJyb3IgPSAn0J3Rg9C20L3QviDQstCy0L7QtNC40YLRjCDRgtC+0LvRjNC60L4g0L3QsCDQutC40YDQuNC70LvQuNGG0LUnXHJcbiAgfVxyXG59XHJcbnJldHVybiBlcnJvcjtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=