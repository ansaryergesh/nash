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
  var phoneval = val.replace(/ /g, "");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGVmYXVsdHMvdmFsaWRhdGlvbnMuanMiXSwibmFtZXMiOlsiZW1haWxWYWxpZCIsInZhbCIsImVycm9yIiwiZW1haWx2YWxpZCIsInRlc3QiLCJyZXF1aXJlZCIsInBob25lQ2hlY2siLCJwaG9uZXZhbCIsInJlcGxhY2UiLCJQSE9ORV9PUEVSQVRPUlMiLCJpZCIsInBob25lIiwiU3RyaW5nIiwiY29kZSIsIm1hdGNoIiwibGVuZ3RoIiwicGhvbmVfbnVtYmVyIiwicGhvbmVfb3BlcmF0b3IiLCJmaWx0ZXIiLCJpdGVtIiwicGhvbmVWYWxpZGF0aW9uIiwicGFzc3dvcmRWYWxpZCIsImFjY2VwdENpcnJpbGljIiwiZmFsc3kiLCJ2YWx1ZSIsImlpblZhbGlkYXRpb24iLCJiMSIsImIyIiwiYSIsImNvbnRyb2xsIiwiaSIsInBhcnNlSW50Iiwic3Vic3RyaW5nIiwiYWNjZXB0Q2lycmlsaWNPbmx5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFBQyxHQUFHLEVBQUk7QUFDL0IsTUFBSUMsS0FBSjs7QUFDQSxNQUFJLENBQUNELEdBQUwsRUFBVTtBQUNSQyxTQUFLLEdBQUcsdUNBQVI7QUFDRDs7QUFDRCxNQUFJRCxHQUFKLEVBQVM7QUFDUCxRQUFJRSxVQUFVLEdBQUcsNENBQTRDQyxJQUE1QyxDQUFpREgsR0FBakQsQ0FBakI7O0FBQ0EsUUFBSSxDQUFDRSxVQUFMLEVBQWlCO0FBQ2ZELFdBQUssR0FBRyxvQkFBUjtBQUNEO0FBQ0Y7O0FBQ0QsU0FBT0EsS0FBUDtBQUNELENBWk07QUFjQSxJQUFNRyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFBSixHQUFHLEVBQUk7QUFDN0IsTUFBSUMsS0FBSjs7QUFDQSxNQUFJLENBQUNELEdBQUwsRUFBVTtBQUNSQyxTQUFLLEdBQUcsaUNBQVI7QUFDRDs7QUFDRCxTQUFPQSxLQUFQO0FBQ0QsQ0FOTTtB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LENBQUNRLFNBQU4sQ0FBZ0JGLENBQWhCLEVBQW1CQSxDQUFDLEdBQUMsQ0FBckIsQ0FBRCxDQUFmO0FBQ0EsVUFBR0EsQ0FBQyxHQUFDLEVBQUwsRUFBU0QsUUFBUSxJQUFJRCxDQUFDLENBQUNFLENBQUQsQ0FBRCxHQUFLSixFQUFFLENBQUNJLENBQUQsQ0FBbkI7QUFDWjs7QUFDREQsWUFBUSxHQUFHQSxRQUFRLEdBQUcsRUFBdEI7O0FBQ0EsUUFBR0EsUUFBUSxJQUFFLEVBQWIsRUFBaUI7QUFDYkEsY0FBUSxHQUFHLENBQVg7O0FBQ0EsV0FBSSxJQUFJQyxDQUFDLEdBQUMsQ0FBVixFQUFhQSxDQUFDLEdBQUMsRUFBZixFQUFtQkEsQ0FBQyxFQUFwQjtBQUNBRCxnQkFBUSxJQUFJRCxDQUFDLENBQUNFLENBQUQsQ0FBRCxHQUFLSCxFQUFFLENBQUNHLENBQUQsQ0FBbkI7QUFEQTs7QUFFQUQsY0FBUSxHQUFHQSxRQUFRLEdBQUcsRUFBdEI7QUFDSDs7QUFDRCxRQUFHQSxRQUFRLElBQUVELENBQUMsQ0FBQyxFQUFELENBQWQsRUFBcUI7QUFDbkIxQixXQUFLLEdBQUcsa0JBQVI7QUFDRDtBQUNKOztBQUdELFNBQU9BLEtBQVA7QUFFRCxDQWxDTTtBQXFDQSxJQUFNK0Isa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFBaEMsR0FBRyxFQUFJO0FBQ3pDLE1BQUlzQixLQUFLLEdBQUcsbUJBQW1CbkIsSUFBbkIsQ0FBd0JILEdBQXhCLENBQVo7QUFDQSxNQUFJQyxLQUFKOztBQUNBLE1BQUdELEdBQUgsRUFBUTtBQUNOLFFBQUdzQixLQUFLLEtBQUssSUFBYixFQUFtQjtBQUNqQnJCLFdBQUssR0FBRyxtQ0FBUjtBQUNEO0FBQ0Y7O0FBQ0QsU0FBT0EsS0FBUDtBQUNDLENBVE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ2V0c2VydmljZS5lZjA1N2M2OTMyNTE5NDZkZjIxOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGVtYWlsVmFsaWQgPSB2YWwgPT4ge1xyXG4gIGxldCBlcnJvcjtcclxuICBpZiAoIXZhbCkge1xyXG4gICAgZXJyb3IgPSAn0J/QvtC70LUgRW1haWwg0L7QsdGP0LfQsNGC0LXQu9GM0L3QviDQtNC70Y8g0LfQsNC/0L7Qu9C90LXQvdC40Y8nXHJcbiAgfVxyXG4gIGlmICh2YWwpIHtcclxuICAgIGxldCBlbWFpbHZhbGlkID0gL15bQS1aMC05Ll8lKy1dK0BbQS1aMC05Li1dK1xcLltBLVpdezIsNH0kL2kudGVzdCh2YWwpO1xyXG4gICAgaWYgKCFlbWFpbHZhbGlkKSB7XHJcbiAgICAgIGVycm9yID0gJ9Cd0LXQv9GA0LDQstC40LvRjNC90YvQuSBlbWFpbCdcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGVycm9yXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZXF1aXJlZCA9IHZhbCA9PiB7XHJcbiAgbGV0IGVycm9yO1xyXG4gIGlmICghdmFsKSB7XHJcbiAgICBlcnJvciA9ICfQn9C+0LvQtSDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+INC00LvRjyDQt9Cw0L/QvtC70L3QtdC90LjRjydcclxuICB9XHJcbiAgcmV0dXJuIGVycm9yXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwaG9uZUNoZWNrID0gKHZhbCkgPT4ge1xyXG4gIGNvbnN0IHBob25ldmFsID0gdmFsLnJlcGxhY2UoLyAvZyxcIlwiKTtcclxuICB2YXIgUEhPTkVfT1BFUkFUT1JTID0gW1xyXG4gICAge1xyXG4gICAgICBpZDogJzc3MDAnXHJcbiAgICB9LCB7XHJcbiAgICAgIGlkOiAnNzcwMSdcclxuICAgIH0sIHtcclxuICAgICAgaWQ6ICc3NzAyJ1xyXG4gICAgfSwge1xyXG4gICAgICBpZDogJzc3MDUnXHJcbiAgICB9LCB7XHJcbiAgICAgIGlkOiAnNzcwNidcclxuICAgIH0sIHtcclxuICAgICAgaWQ6ICc3NzA3J1xyXG4gICAgfSwge1xyXG4gICAgICBpZDogJzc3MDgnXHJcbiAgICB9LCB7XHJcbiAgICAgIGlkOiAnNzc0NydcclxuICAgIH0sIHtcclxuICAgICAgaWQ6ICc3NzcxJ1xyXG4gICAgfSwge1xyXG4gICAgICBpZDogJzc3NzUnXHJcbiAgICB9LCB7XHJcbiAgICAgIGlkOiAnNzc3NidcclxuICAgIH0sIHtcclxuICAgICAgaWQ6ICc3Nzc3J1xyXG4gICAgfSwge1xyXG4gICAgICBpZDogJzc3NzgnXHJcbiAgICB9XHJcbiAgXTtcclxuICB2YXIgcGhvbmUgPSBTdHJpbmcodmFsKS5yZXBsYWNlKC9bXkEtWjAtOV0vZywgJycpLFxyXG4gICAgY29kZSA9IHBob25lLm1hdGNoKC9eKFxcZHs0fSkoXFxkezN9KShcXGR7NH0pJC8pO1xyXG4gIGlmICghY29kZSB8fCBwaG9uZS5sZW5ndGggIT09IDExKSB7XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcblxyXG4gIHZhciBwaG9uZV9udW1iZXIgPSBjb2RlWzFdO1xyXG4gIHZhciBwaG9uZV9vcGVyYXRvciA9IFBIT05FX09QRVJBVE9SUy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgIHJldHVybiBpdGVtLmlkID09IHBob25lX251bWJlclxyXG4gIH0pO1xyXG5cclxuICBpZiAocGhvbmVfb3BlcmF0b3IubGVuZ3RoID4gMCkge1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHBob25lVmFsaWRhdGlvbiA9ICh2YWwpID0+IHtcclxuICBsZXQgZXJyb3JcclxuICBpZiAocGhvbmVDaGVjayh2YWwpID09PSB0cnVlKSB7XHJcbiAgICBlcnJvciA9ICcnXHJcbiAgfSBlbHNlIHtcclxuICAgIGVycm9yID0gJ9Cd0LXRgiDRgdC+0L7RgtCy0LXRgtGB0YLQstGD0Y7RidC10LPQviDQvtC/0LXRgNCw0YLQvtGA0LAnXHJcbiAgfVxyXG4gIHJldHVybiBlcnJvclxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcGFzc3dvcmRWYWxpZCA9IHZhbCA9PiB7XHJcbiAgbGV0IGVycm9yO1xyXG4gIGlmICghdmFsKSB7XHJcbiAgICBlcnJvciA9ICfQn9C+0LvQtSDQvtCx0Y/Qt9Cw0YLQtdC70LXQvSDQtNC70Y8g0LfQsNC/0L7Qu9C90LXQvdC40Y8nXHJcbiAgfVxyXG4gIGlmICh2YWwgJiYgdmFsLmxlbmd0aCA8IDYpIHtcclxuICAgIGVycm9yID0gJ9C80LjQvdC40LzQsNC70YzQvdCw0Y8g0LTQu9C40L3QsCDQv9Cw0YDQvtC70Y8g0LTQvtC70LbQvdCwINCx0YvRgtGMINC90LUg0LzQtdC90LXQtSA2INGB0LjQvNCy0L7Qu9C+0LInXHJcbiAgfVxyXG4gIHJldHVybiBlcnJvcjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFjY2VwdENpcnJpbGljID0gdmFsID0+IHtcclxuICB2YXIgZmFsc3kgPSAvW2EtekEtWjAtOV9cIiovXS9pLnRlc3QodmFsKVxyXG4gIGxldCBlcnJvcjtcclxuICBjb25zdCB2YWx1ZSA9IHZhbC5yZXBsYWNlKC8gL2csXCJcIilcclxuICBpZiAoIXZhbHVlKSB7XHJcbiAgICBlcnJvciA9ICfQn9C+0LvQtSDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+INC00LvRjyDQt9Cw0L/QvtC70L3QtdC90LjRjydcclxuICB9XHJcbiAgaWYgKHZhbHVlKSB7XHJcbiAgICBpZiAoZmFsc3kgPT09IHRydWUpIHtcclxuICAgICAgZXJyb3IgPSAn0J3Rg9C20L3QviDQstCy0L7QtNC40YLRjCDRgtC+0LvRjNC60L4g0L3QsCDQutC40YDQuNC70LvQuNGG0LUnXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZXJyb3I7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpaW5WYWxpZGF0aW9uID0gKHZhbCkgPT4gIHtcclxuICBsZXQgZXJyb3IgPSAnJztcclxuICB2YXIgYjEgPSBbIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSBdO1xyXG4gIHZhciBiMiA9IFsgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExLCAxLCAyIF07XHJcbiAgdmFyIGEgPSBbXTtcclxuICBjb25zdCB2YWx1ZSA9IHZhbC5yZXBsYWNlKC8gL2csXCJcIilcclxuICB2YXIgY29udHJvbGwgPSAwO1xyXG4gIGlmKCF2YWx1ZSkge1xyXG4gICAgZXJyb3IgPSAn0J/QvtC70LUg0L7QsdGP0LfQsNGC0LXQu9C10L0g0LTQu9GPINC30LDQv9C+0LvQvdC10L3QuNGPJ1xyXG4gIH1cclxuICBpZih2YWx1ZSAmJiB2YWx1ZS5sZW5ndGghPT0xMikge1xyXG4gICAgZXJyb3IgPSAn0JfQsNC/0L7Qu9C90LjRgtC1INCy0YHQtSDQv9C+0LvRjyc7XHJcbiAgfVxyXG4gIFxyXG4gICAgaWYodmFsdWUgJiYgdmFsdWUubGVuZ3RoID09PSAxMikge1xyXG4gICAgICBmb3IodmFyIGk9MDsgaTwxMjsgaSsrKXtcclxuICAgICAgICAgIGFbaV0gPSBwYXJzZUludCh2YWx1ZS5zdWJzdHJpbmcoaSwgaSsxKSk7XHJcbiAgICAgICAgICBpZihpPDExKSBjb250cm9sbCArPSBhW2ldKmIxW2ldO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnRyb2xsID0gY29udHJvbGwgJSAxMTtcclxuICAgICAgaWYoY29udHJvbGw9PTEwKSB7XHJcbiAgICAgICAgICBjb250cm9sbCA9IDA7XHJcbiAgICAgICAgICBmb3IodmFyIGk9MDsgaTwxMTsgaSsrKVxyXG4gICAgICAgICAgY29udHJvbGwgKz0gYVtpXSpiMltpXTtcclxuICAgICAgICAgIGNvbnRyb2xsID0gY29udHJvbGwgJSAxMTtcclxuICAgICAgfVxyXG4gICAgICBpZihjb250cm9sbCE9YVsxMV0pICB7XHJcbiAgICAgICAgZXJyb3IgPSAn0J3QtdC60L7RgNGA0LXQutGC0L3Ri9C5INCY0JjQnSc7XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIFxyXG4gIHJldHVybiBlcnJvcjtcclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgYWNjZXB0Q2lycmlsaWNPbmx5ID0gdmFsID0+IHtcclxudmFyIGZhbHN5ID0gL1thLXpBLVowLTlfXCIqL10vaS50ZXN0KHZhbClcclxubGV0IGVycm9yO1xyXG5pZih2YWwpIHtcclxuICBpZihmYWxzeSA9PT0gdHJ1ZSkge1xyXG4gICAgZXJyb3IgPSAn0J3Rg9C20L3QviDQstCy0L7QtNC40YLRjCDRgtC+0LvRjNC60L4g0L3QsCDQutC40YDQuNC70LvQuNGG0LUnXHJcbiAgfVxyXG59XHJcbnJldHVybiBlcnJvcjtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=