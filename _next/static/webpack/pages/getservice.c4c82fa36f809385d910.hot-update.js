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
  var value = val.replace();
  var error;

  if (!value) {
    error = 'Поле Email обязательно для заполнения';
  }

  if (value) {
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
    error = 'Неправильный телефон номер';
  }

  if (phoneval.length === 16 && phoneCheck(val) === false) {
    error = 'Нет соответствующего оператора';
  }

  return error;
};
var passwordValid = function passwordValid(val) {
  var error;

  if (!val) {
    error = 'Поле обязательно для заполнения';
  }

  if (val && val.length < 6) {
    error = 'минимальная длина пароля должна быть не менее 6 символов';
  }

  return error;
};

var checkStringName = function checkStringName(val) {
  if (val && val.replace(/\s+$/, '').split(/\W+/).length > 1) {
    return true;
  }

  return false;
};

var acceptCirrilic = function acceptCirrilic(val) {
  var falsy = /[a-zA-Z0-9_"*/]/i.test(val);
  var error = '';

  if (!val) {
    error = 'Поле обязательно для заполнения';
  }

  if (val) {
    if (checkStringName(val) === false) {
      if (falsy === true) {
        error = 'Нужно вводить только на кириллице';
      }
    }

    if (checkStringName(val) === true) {
      if (falsy === false) {
        error = '';
      }
    }

    if (checkStringName(val) === false) {
      if (falsy === false) {
        error = 'Фамилия и Имя обязательны для заполнения (Отчество необязательно)';
      }
    }

    if (checkStringName(val) === true) {
      if (falsy === true) {
        error = 'Нужно вводить только на кириллице';
      }
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
    error = 'Поле обязательно для заполнения';
  }

  if (value && value.length !== 12) {
    error = 'Неправильный ИИН';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGVmYXVsdHMvdmFsaWRhdGlvbnMuanMiXSwibmFtZXMiOlsiZW1haWxWYWxpZCIsInZhbCIsInZhbHVlIiwicmVwbGFjZSIsImVycm9yIiwiZW1haWx2YWxpZCIsInRlc3QiLCJyZXF1aXJlZCIsInBob25lQ2hlY2siLCJQSE9ORV9PUEVSQVRPUlMiLCJpZCIsInBob25lIiwiU3RyaW5nIiwiY29kZSIsIm1hdGNoIiwibGVuZ3RoIiwicGhvbmVfbnVtYmVyIiwicGhvbmVfb3BlcmF0b3IiLCJmaWx0ZXIiLCJpdGVtIiwicGhvbmVWYWxpZGF0aW9uIiwicGhvbmV2YWwiLCJwYXNzd29yZFZhbGlkIiwiY2hlY2tTdHJpbmdOYW1lIiwic3BsaXQiLCJhY2NlcHRDaXJyaWxpYyIsImZhbHN5IiwiaWluVmFsaWRhdGlvbiIsImIxIiwiYjIiLCJhIiwiY29udHJvbGwiLCJpIiwicGFyc2VJbnQiLCJzdWJzdHJpbmciLCJhY2NlcHRDaXJyaWxpY09ubHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUFDLEdBQUcsRUFBSTtBQUMvQixNQUFNQyxLQUFLLEdBQUdELEdBQUcsQ0FBQ0UsT0FBSixFQUFkO0FBQ0EsTUFBSUMsS0FBSjs7QUFDQSxNQUFJLENBQUNGLEtBQUwsRUFBWTtBQUNWRSxTQUFLLEdBQUcsdUNBQVI7QUFDRDs7QUFDRCxNQUFJRixLQUFKLEVBQVc7QUFDVCxRQUFJRyxVQUFVLEdBQUcsNENBQTRDQyxJQUE1QyxDQUFpREwsR0FBakQsQ0FBakI7O0FBQ0EsUUFBSSxDQUFDSSxVQUFMLEVBQWlCO0FBQ2ZELFdBQUssR0FBRyxvQkFBUjtBQUNEO0FBQ0Y7O0FBQ0QsU0FBT0EsS0FBUDtBQUNELENBYk07QUFlQSxJQUFNRyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFBTixHQUFHLEVBQUk7QUFDN0IsTUFBSUcsS0FBSjs7QUFDQSxNQUFJLENB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O0FBQ0EsVUFBSUEsQ0FBQyxHQUFHLEVBQVIsRUFDRUQsUUFBUSxJQUFJRCxDQUFDLENBQUNFLENBQUQsQ0FBRCxHQUFPSixFQUFFLENBQUNJLENBQUQsQ0FBckI7QUFDRDs7QUFDSEQsWUFBUSxHQUFHQSxRQUFRLEdBQUcsRUFBdEI7O0FBQ0EsUUFBSUEsUUFBUSxJQUFJLEVBQWhCLEVBQW9CO0FBQ2xCQSxjQUFRLEdBQUcsQ0FBWDs7QUFDQSxXQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsRUFBcEIsRUFBd0JBLENBQUMsRUFBekI7QUFDRUQsZ0JBQVEsSUFBSUQsQ0FBQyxDQUFDRSxDQUFELENBQUQsR0FBT0gsRUFBRSxDQUFDRyxDQUFELENBQXJCO0FBREY7O0FBRUFELGNBQVEsR0FBR0EsUUFBUSxHQUFHLEVBQXRCO0FBQ0Q7O0FBQ0QsUUFBSUEsUUFBUSxJQUFJRCxDQUFDLENBQUMsRUFBRCxDQUFqQixFQUF1QjtBQUNyQjFCLFdBQUssR0FBRyxrQkFBUjtBQUNEO0FBQ0Y7O0FBRUQsU0FBT0EsS0FBUDtBQUVELENBNURNO0FBOERBLElBQU0rQixrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUFsQyxHQUFHLEVBQUk7QUFDdkMsTUFBSXlCLEtBQUssR0FBRyxtQkFBbUJwQixJQUFuQixDQUF3QkwsR0FBeEIsQ0FBWjtBQUNBLE1BQUlHLEtBQUo7O0FBQ0EsTUFBSUgsR0FBSixFQUFTO0FBQ1AsUUFBSXlCLEtBQUssS0FBSyxJQUFkLEVBQW9CO0FBQ2xCdEIsV0FBSyxHQUFHLG1DQUFSO0FBQ0Q7QUFDRjs7QUFDRCxTQUFPQSxLQUFQO0FBQ0QsQ0FUTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9nZXRzZXJ2aWNlLmM0YzgyZmEzNmY4MDkzODVkOTEwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZW1haWxWYWxpZCA9IHZhbCA9PiB7XHJcbiAgY29uc3QgdmFsdWUgPSB2YWwucmVwbGFjZSgpXHJcbiAgbGV0IGVycm9yO1xyXG4gIGlmICghdmFsdWUpIHtcclxuICAgIGVycm9yID0gJ9Cf0L7Qu9C1IEVtYWlsINC+0LHRj9C30LDRgtC10LvRjNC90L4g0LTQu9GPINC30LDQv9C+0LvQvdC10L3QuNGPJ1xyXG4gIH1cclxuICBpZiAodmFsdWUpIHtcclxuICAgIGxldCBlbWFpbHZhbGlkID0gL15bQS1aMC05Ll8lKy1dK0BbQS1aMC05Li1dK1xcLltBLVpdezIsNH0kL2kudGVzdCh2YWwpO1xyXG4gICAgaWYgKCFlbWFpbHZhbGlkKSB7XHJcbiAgICAgIGVycm9yID0gJ9Cd0LXQv9GA0LDQstC40LvRjNC90YvQuSBlbWFpbCdcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGVycm9yXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZXF1aXJlZCA9IHZhbCA9PiB7XHJcbiAgbGV0IGVycm9yO1xyXG4gIGlmICghdmFsKSB7XHJcbiAgICBlcnJvciA9ICfQn9C+0LvQtSDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+INC00LvRjyDQt9Cw0L/QvtC70L3QtdC90LjRjydcclxuICB9XHJcbiAgcmV0dXJuIGVycm9yXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwaG9uZUNoZWNrID0gKHZhbCkgPT4ge1xyXG5cclxuICB2YXIgUEhPTkVfT1BFUkFUT1JTID0gW1xyXG4gICAge1xyXG4gICAgICBpZDogJzc3MDAnXHJcbiAgICB9LCB7XHJcbiAgICAgIGlkOiAnNzcwMSdcclxuICAgIH0sIHtcclxuICAgICAgaWQ6ICc3NzAyJ1xyXG4gICAgfSwge1xyXG4gICAgICBpZDogJzc3MDUnXHJcbiAgICB9LCB7XHJcbiAgICAgIGlkOiAnNzcwNidcclxuICAgIH0sIHtcclxuICAgICAgaWQ6ICc3NzA3J1xyXG4gICAgfSwge1xyXG4gICAgICBpZDogJzc3MDgnXHJcbiAgICB9LCB7XHJcbiAgICAgIGlkOiAnNzc0NydcclxuICAgIH0sIHtcclxuICAgICAgaWQ6ICc3NzcxJ1xyXG4gICAgfSwge1xyXG4gICAgICBpZDogJzc3NzUnXHJcbiAgICB9LCB7XHJcbiAgICAgIGlkOiAnNzc3NidcclxuICAgIH0sIHtcclxuICAgICAgaWQ6ICc3Nzc3J1xyXG4gICAgfSwge1xyXG4gICAgICBpZDogJzc3NzgnXHJcbiAgICB9XHJcbiAgXTtcclxuICB2YXIgcGhvbmUgPSBTdHJpbmcodmFsKS5yZXBsYWNlKC9bXkEtWjAtOV0vZywgJycpLFxyXG4gICAgY29kZSA9IHBob25lLm1hdGNoKC9eKFxcZHs0fSkoXFxkezN9KShcXGR7NH0pJC8pO1xyXG4gIGlmICghY29kZSB8fCBwaG9uZS5sZW5ndGggIT09IDExKSB7XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcblxyXG4gIHZhciBwaG9uZV9udW1iZXIgPSBjb2RlWzFdO1xyXG4gIHZhciBwaG9uZV9vcGVyYXRvciA9IFBIT05FX09QRVJBVE9SUy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgIHJldHVybiBpdGVtLmlkID09IHBob25lX251bWJlclxyXG4gIH0pO1xyXG5cclxuICBpZiAocGhvbmVfb3BlcmF0b3IubGVuZ3RoID4gMCkge1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHBob25lVmFsaWRhdGlvbiA9ICh2YWwpID0+IHtcclxuICBjb25zdCBwaG9uZXZhbCA9IHZhbC5yZXBsYWNlKC8gL2csIFwiXCIpO1xyXG5cclxuICBsZXQgZXJyb3JcclxuXHJcbiAgaWYgKHBob25ldmFsLmxlbmd0aCA9PT0gMTYgJiYgcGhvbmVDaGVjayh2YWwpID09PSB0cnVlKSB7XHJcbiAgICBlcnJvciA9ICcnXHJcbiAgfVxyXG4gIGlmIChwaG9uZXZhbC5sZW5ndGggIT09IDE2KSB7XHJcbiAgICBlcnJvciA9ICfQndC10L/RgNCw0LLQuNC70YzQvdGL0Lkg0YLQtdC70LXRhNC+0L0g0L3QvtC80LXRgCdcclxuICB9XHJcbiAgaWYgKHBob25ldmFsLmxlbmd0aCA9PT0gMTYgJiYgcGhvbmVDaGVjayh2YWwpID09PSBmYWxzZSkge1xyXG4gICAgZXJyb3IgPSAn0J3QtdGCINGB0L7QvtGC0LLQtdGC0YHRgtCy0YPRjtGJ0LXQs9C+INC+0L/QtdGA0LDRgtC+0YDQsCdcclxuICB9XHJcblxyXG4gIHJldHVybiBlcnJvclxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcGFzc3dvcmRWYWxpZCA9IHZhbCA9PiB7XHJcbiAgbGV0IGVycm9yO1xyXG4gIGlmICghdmFsKSB7XHJcbiAgICBlcnJvciA9ICfQn9C+0LvQtSDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+INC00LvRjyDQt9Cw0L/QvtC70L3QtdC90LjRjydcclxuICB9XHJcbiAgaWYgKHZhbCAmJiB2YWwubGVuZ3RoIDwgNikge1xyXG4gICAgZXJyb3IgPSAn0LzQuNC90LjQvNCw0LvRjNC90LDRjyDQtNC70LjQvdCwINC/0LDRgNC+0LvRjyDQtNC+0LvQttC90LAg0LHRi9GC0Ywg0L3QtSDQvNC10L3QtdC1IDYg0YHQuNC80LLQvtC70L7QsidcclxuICB9XHJcbiAgcmV0dXJuIGVycm9yO1xyXG59XHJcblxyXG5jb25zdCBjaGVja1N0cmluZ05hbWUgPSB2YWwgPT4ge1xyXG4gIGlmICh2YWwgJiYgdmFsLnJlcGxhY2UoL1xccyskLywgJycpLnNwbGl0KC9cXFcrLykubGVuZ3RoID4gMSkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFjY2VwdENpcnJpbGljID0gdmFsID0+IHtcclxuICB2YXIgZmFsc3kgPSAvW2EtekEtWjAtOV9cIiovXS9pLnRlc3QodmFsKVxyXG4gIGxldCBlcnJvciA9ICcnO1xyXG4gIGlmICghdmFsKSB7XHJcbiAgICBlcnJvciA9ICfQn9C+0LvQtSDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+INC00LvRjyDQt9Cw0L/QvtC70L3QtdC90LjRjydcclxuICB9XHJcbiAgaWYgKHZhbCkge1xyXG4gICAgaWYoY2hlY2tTdHJpbmdOYW1lKHZhbCkgPT09IGZhbHNlKSB7XHJcbiAgICAgIGlmKGZhbHN5PT09IHRydWUpIHtcclxuICAgICAgICBlcnJvciA9ICfQndGD0LbQvdC+INCy0LLQvtC00LjRgtGMINGC0L7Qu9GM0LrQviDQvdCwINC60LjRgNC40LvQu9C40YbQtSdcclxuICAgICAgfVxyXG4gICAgfWlmKGNoZWNrU3RyaW5nTmFtZSh2YWwpID09PSB0cnVlKSB7XHJcbiAgICAgIGlmKGZhbHN5ID09PSBmYWxzZSkge1xyXG4gICAgICAgIGVycm9yID0gJydcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYoY2hlY2tTdHJpbmdOYW1lKHZhbCkgPT09IGZhbHNlKSB7XHJcbiAgICAgIGlmKGZhbHN5ID09PSBmYWxzZSkge1xyXG4gICAgICAgIGVycm9yID0gJ9Ck0LDQvNC40LvQuNGPINC4INCY0LzRjyDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdGLINC00LvRjyDQt9Cw0L/QvtC70L3QtdC90LjRjyAo0J7RgtGH0LXRgdGC0LLQviDQvdC10L7QsdGP0LfQsNGC0LXQu9GM0L3QviknXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmKGNoZWNrU3RyaW5nTmFtZSh2YWwpID09PSB0cnVlKSB7XHJcbiAgICAgIGlmKGZhbHN5ID09PSB0cnVlKSB7XHJcbiAgICAgICAgZXJyb3IgPSAn0J3Rg9C20L3QviDQstCy0L7QtNC40YLRjCDRgtC+0LvRjNC60L4g0L3QsCDQutC40YDQuNC70LvQuNGG0LUnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBlcnJvcjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBpaW5WYWxpZGF0aW9uID0gKHZhbCkgPT4ge1xyXG4gIGxldCBlcnJvciA9ICcnO1xyXG4gIHZhciBiMSA9IFtcclxuICAgIDEsXHJcbiAgICAyLFxyXG4gICAgMyxcclxuICAgIDQsXHJcbiAgICA1LFxyXG4gICAgNixcclxuICAgIDcsXHJcbiAgICA4LFxyXG4gICAgOSxcclxuICAgIDEwLFxyXG4gICAgMTFcclxuICBdO1xyXG4gIHZhciBiMiA9IFtcclxuICAgIDMsXHJcbiAgICA0LFxyXG4gICAgNSxcclxuICAgIDYsXHJcbiAgICA3LFxyXG4gICAgOCxcclxuICAgIDksXHJcbiAgICAxMCxcclxuICAgIDExLFxyXG4gICAgMSxcclxuICAgIDJcclxuICBdO1xyXG4gIHZhciBhID0gW107XHJcbiAgY29uc3QgdmFsdWUgPSB2YWxcclxuICAgID8gdmFsLnJlcGxhY2UoLyAvZywgXCJcIilcclxuICAgIDogJydcclxuICB2YXIgY29udHJvbGwgPSAwO1xyXG4gIGlmICghdmFsdWUpIHtcclxuICAgIGVycm9yID0gJ9Cf0L7Qu9C1INC+0LHRj9C30LDRgtC10LvRjNC90L4g0LTQu9GPINC30LDQv9C+0LvQvdC10L3QuNGPJ1xyXG4gIH1cclxuICBpZiAodmFsdWUgJiYgdmFsdWUubGVuZ3RoICE9PSAxMikge1xyXG4gICAgZXJyb3IgPSAn0J3QtdC/0YDQsNCy0LjQu9GM0L3Ri9C5INCY0JjQnSc7XHJcbiAgfVxyXG5cclxuICBpZiAodmFsdWUgJiYgdmFsdWUubGVuZ3RoID09PSAxMikge1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxMjsgaSsrKSB7XHJcbiAgICAgIGFbaV0gPSBwYXJzZUludCh2YWx1ZS5zdWJzdHJpbmcoaSwgaSArIDEpKTtcclxuICAgICAgaWYgKGkgPCAxMSkgXHJcbiAgICAgICAgY29udHJvbGwgKz0gYVtpXSAqIGIxW2ldO1xyXG4gICAgICB9XHJcbiAgICBjb250cm9sbCA9IGNvbnRyb2xsICUgMTE7XHJcbiAgICBpZiAoY29udHJvbGwgPT0gMTApIHtcclxuICAgICAgY29udHJvbGwgPSAwO1xyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDExOyBpKyspIFxyXG4gICAgICAgIGNvbnRyb2xsICs9IGFbaV0gKiBiMltpXTtcclxuICAgICAgY29udHJvbGwgPSBjb250cm9sbCAlIDExO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbnRyb2xsICE9IGFbMTFdKSB7XHJcbiAgICAgIGVycm9yID0gJ9Cd0LXQutC+0YDRgNC10LrRgtC90YvQuSDQmNCY0J0nO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGVycm9yO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFjY2VwdENpcnJpbGljT25seSA9IHZhbCA9PiB7XHJcbiAgdmFyIGZhbHN5ID0gL1thLXpBLVowLTlfXCIqL10vaS50ZXN0KHZhbClcclxuICBsZXQgZXJyb3I7XHJcbiAgaWYgKHZhbCkge1xyXG4gICAgaWYgKGZhbHN5ID09PSB0cnVlKSB7XHJcbiAgICAgIGVycm9yID0gJ9Cd0YPQttC90L4g0LLQstC+0LTQuNGC0Ywg0YLQvtC70YzQutC+INC90LAg0LrQuNGA0LjQu9C70LjRhtC1J1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gZXJyb3I7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9