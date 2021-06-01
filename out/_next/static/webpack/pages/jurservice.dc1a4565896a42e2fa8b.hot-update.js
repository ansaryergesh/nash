self["webpackHotUpdate_N_E"]("pages/jurservice",{

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
  // const value = val.split(' ').join('');
  var value = val.trim();
  var error;

  if (!value) {
    error = 'Поле Email обязательно для заполнения';
  }

  if (value) {
    var emailvalid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);

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
  if (val && val.replace(/\s+$/, '').split(/\W+/).length < 2) {
    return false;
  } else {
    return true;
  }
};

var acceptCirrilic = function acceptCirrilic(val) {
  var falsy = /[a-zA-Z0-9_"*/]/i.test(val);
  var error = '';
  var length = val.replace(/\s+$/, '').split(/\W+/).length;

  if (!val) {
    error = 'Поле обязательно для заполнения';
  }

  if (val) {
    if (falsy === true) {
      error = 'Введите только на киррилице';
    }

    if (falsy == false && parseInt(length) < 2) {
      error = 'check error';
    }
  } // return length + `${falsy}`;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGVmYXVsdHMvdmFsaWRhdGlvbnMuanMiXSwibmFtZXMiOlsiZW1haWxWYWxpZCIsInZhbCIsInZhbHVlIiwidHJpbSIsImVycm9yIiwiZW1haWx2YWxpZCIsInRlc3QiLCJyZXF1aXJlZCIsInBob25lQ2hlY2siLCJQSE9ORV9PUEVSQVRPUlMiLCJpZCIsInBob25lIiwiU3RyaW5nIiwicmVwbGFjZSIsImNvZGUiLCJtYXRjaCIsImxlbmd0aCIsInBob25lX251bWJlciIsInBob25lX29wZXJhdG9yIiwiZmlsdGVyIiwiaXRlbSIsInBob25lVmFsaWRhdGlvbiIsInBob25ldmFsIiwicGFzc3dvcmRWYWxpZCIsImNoZWNrU3RyaW5nTmFtZSIsInNwbGl0IiwiYWNjZXB0Q2lycmlsaWMiLCJmYWxzeSIsInBhcnNlSW50IiwiaWluVmFsaWRhdGlvbiIsImIxIiwiYjIiLCJhIiwiY29udHJvbGwiLCJpIiwic3Vic3RyaW5nIiwiYWNjZXB0Q2lycmlsaWNPbmx5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFBQyxHQUFHLEVBQUk7QUFDL0I7QUFDQSxNQUFNQyxLQUFLLEdBQUdELEdBQUcsQ0FBQ0UsSUFBSixFQUFkO0FBQ0EsTUFBSUMsS0FBSjs7QUFDQSxNQUFJLENBQUNGLEtBQUwsRUFBWTtBQUNWRSxTQUFLLEdBQUcsdUNBQVI7QUFDRDs7QUFDRCxNQUFJRixLQUFKLEVBQVc7QUFDVCxRQUFJRyxVQUFVLEdBQUcsNENBQTRDQyxJQUE1QyxDQUFpREosS0FBakQsQ0FBakI7O0FBQ0EsUUFBSSxDQUFDRyxVQUFMLEVBQWlCO0FBQ2ZELFdBQUssR0FBRyxvQkFBUjtBQUNEO0FBQ0Y7O0FBQ0QsU0FBT0EsS0FBUDtBQUNELENBZE07QUFnQkEsSUFBTUcsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQU4sR0FBRyxFQUFJO0FBQzdCLE1BQUlHLEtBQUo7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RyxDQUFYOztBQUNBLFdBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxFQUFwQixFQUF3QkEsQ0FBQyxFQUF6QjtBQUNFRCxnQkFBUSxJQUFJRCxDQUFDLENBQUNFLENBQUQsQ0FBRCxHQUFPSCxFQUFFLENBQUNHLENBQUQsQ0FBckI7QUFERjs7QUFFQUQsY0FBUSxHQUFHQSxRQUFRLEdBQUcsRUFBdEI7QUFDRDs7QUFDRCxRQUFJQSxRQUFRLElBQUlELENBQUMsQ0FBQyxFQUFELENBQWpCLEVBQXVCO0FBQ3JCNUIsV0FBSyxHQUFHLGtCQUFSO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPQSxLQUFQO0FBRUQsQ0E1RE07QUE4REEsSUFBTWdDLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQW5DLEdBQUcsRUFBSTtBQUN2QyxNQUFJMEIsS0FBSyxHQUFHLG1CQUFtQnJCLElBQW5CLENBQXdCTCxHQUF4QixDQUFaO0FBQ0EsTUFBSUcsS0FBSjs7QUFDQSxNQUFJSCxHQUFKLEVBQVM7QUFDUCxRQUFJMEIsS0FBSyxLQUFLLElBQWQsRUFBb0I7QUFDbEJ2QixXQUFLLEdBQUcsbUNBQVI7QUFDRDtBQUNGOztBQUNELFNBQU9BLEtBQVA7QUFDRCxDQVRNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2p1cnNlcnZpY2UuZGMxYTQ1NjU4OTZhNDJlMmZhOGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBlbWFpbFZhbGlkID0gdmFsID0+IHtcclxuICAvLyBjb25zdCB2YWx1ZSA9IHZhbC5zcGxpdCgnICcpLmpvaW4oJycpO1xyXG4gIGNvbnN0IHZhbHVlID0gdmFsLnRyaW0oKVxyXG4gIGxldCBlcnJvcjtcclxuICBpZiAoIXZhbHVlKSB7XHJcbiAgICBlcnJvciA9ICfQn9C+0LvQtSBFbWFpbCDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+INC00LvRjyDQt9Cw0L/QvtC70L3QtdC90LjRjydcclxuICB9XHJcbiAgaWYgKHZhbHVlKSB7XHJcbiAgICBsZXQgZW1haWx2YWxpZCA9IC9eW0EtWjAtOS5fJSstXStAW0EtWjAtOS4tXStcXC5bQS1aXXsyLDR9JC9pLnRlc3QodmFsdWUpO1xyXG4gICAgaWYgKCFlbWFpbHZhbGlkKSB7XHJcbiAgICAgIGVycm9yID0gJ9Cd0LXQv9GA0LDQstC40LvRjNC90YvQuSBlbWFpbCdcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGVycm9yXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZXF1aXJlZCA9IHZhbCA9PiB7XHJcbiAgbGV0IGVycm9yO1xyXG4gIGlmICghdmFsKSB7XHJcbiAgICBlcnJvciA9ICfQn9C+0LvQtSDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+INC00LvRjyDQt9Cw0L/QvtC70L3QtdC90LjRjydcclxuICB9XHJcbiAgcmV0dXJuIGVycm9yXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwaG9uZUNoZWNrID0gKHZhbCkgPT4ge1xyXG5cclxuICB2YXIgUEhPTkVfT1BFUkFUT1JTID0gW1xyXG4gICAge1xyXG4gICAgICBpZDogJzc3MDAnXHJcbiAgICB9LCB7XHJcbiAgICAgIGlkOiAnNzcwMSdcclxuICAgIH0sIHtcclxuICAgICAgaWQ6ICc3NzAyJ1xyXG4gICAgfSwge1xyXG4gICAgICBpZDogJzc3MDUnXHJcbiAgICB9LCB7XHJcbiAgICAgIGlkOiAnNzcwNidcclxuICAgIH0sIHtcclxuICAgICAgaWQ6ICc3NzA3J1xyXG4gICAgfSwge1xyXG4gICAgICBpZDogJzc3MDgnXHJcbiAgICB9LCB7XHJcbiAgICAgIGlkOiAnNzc0NydcclxuICAgIH0sIHtcclxuICAgICAgaWQ6ICc3NzcxJ1xyXG4gICAgfSwge1xyXG4gICAgICBpZDogJzc3NzUnXHJcbiAgICB9LCB7XHJcbiAgICAgIGlkOiAnNzc3NidcclxuICAgIH0sIHtcclxuICAgICAgaWQ6ICc3Nzc3J1xyXG4gICAgfSwge1xyXG4gICAgICBpZDogJzc3NzgnXHJcbiAgICB9XHJcbiAgXTtcclxuICB2YXIgcGhvbmUgPSBTdHJpbmcodmFsKS5yZXBsYWNlKC9bXkEtWjAtOV0vZywgJycpLFxyXG4gICAgY29kZSA9IHBob25lLm1hdGNoKC9eKFxcZHs0fSkoXFxkezN9KShcXGR7NH0pJC8pO1xyXG4gIGlmICghY29kZSB8fCBwaG9uZS5sZW5ndGggIT09IDExKSB7XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcblxyXG4gIHZhciBwaG9uZV9udW1iZXIgPSBjb2RlWzFdO1xyXG4gIHZhciBwaG9uZV9vcGVyYXRvciA9IFBIT05FX09QRVJBVE9SUy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgIHJldHVybiBpdGVtLmlkID09IHBob25lX251bWJlclxyXG4gIH0pO1xyXG5cclxuICBpZiAocGhvbmVfb3BlcmF0b3IubGVuZ3RoID4gMCkge1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHBob25lVmFsaWRhdGlvbiA9ICh2YWwpID0+IHtcclxuICBjb25zdCBwaG9uZXZhbCA9IHZhbC5yZXBsYWNlKC8gL2csIFwiXCIpO1xyXG5cclxuICBsZXQgZXJyb3JcclxuXHJcbiAgaWYgKHBob25ldmFsLmxlbmd0aCA9PT0gMTYgJiYgcGhvbmVDaGVjayh2YWwpID09PSB0cnVlKSB7XHJcbiAgICBlcnJvciA9ICcnXHJcbiAgfVxyXG4gIGlmIChwaG9uZXZhbC5sZW5ndGggIT09IDE2KSB7XHJcbiAgICBlcnJvciA9ICfQndC10L/RgNCw0LLQuNC70YzQvdGL0Lkg0YLQtdC70LXRhNC+0L0g0L3QvtC80LXRgCdcclxuICB9XHJcbiAgaWYgKHBob25ldmFsLmxlbmd0aCA9PT0gMTYgJiYgcGhvbmVDaGVjayh2YWwpID09PSBmYWxzZSkge1xyXG4gICAgZXJyb3IgPSAn0J3QtdGCINGB0L7QvtGC0LLQtdGC0YHRgtCy0YPRjtGJ0LXQs9C+INC+0L/QtdGA0LDRgtC+0YDQsCdcclxuICB9XHJcblxyXG4gIHJldHVybiBlcnJvclxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcGFzc3dvcmRWYWxpZCA9IHZhbCA9PiB7XHJcbiAgbGV0IGVycm9yO1xyXG4gIGlmICghdmFsKSB7XHJcbiAgICBlcnJvciA9ICfQn9C+0LvQtSDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+INC00LvRjyDQt9Cw0L/QvtC70L3QtdC90LjRjydcclxuICB9XHJcbiAgaWYgKHZhbCAmJiB2YWwubGVuZ3RoIDwgNikge1xyXG4gICAgZXJyb3IgPSAn0LzQuNC90LjQvNCw0LvRjNC90LDRjyDQtNC70LjQvdCwINC/0LDRgNC+0LvRjyDQtNC+0LvQttC90LAg0LHRi9GC0Ywg0L3QtSDQvNC10L3QtdC1IDYg0YHQuNC80LLQvtC70L7QsidcclxuICB9XHJcbiAgcmV0dXJuIGVycm9yO1xyXG59XHJcblxyXG5jb25zdCBjaGVja1N0cmluZ05hbWUgPSB2YWwgPT4ge1xyXG4gIGlmICh2YWwgJiYgdmFsLnJlcGxhY2UoL1xccyskLywgJycpLnNwbGl0KC9cXFcrLykubGVuZ3RoICA8Mikge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1lbHNlIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFjY2VwdENpcnJpbGljID0gdmFsID0+IHtcclxuICB2YXIgZmFsc3kgPSAvW2EtekEtWjAtOV9cIiovXS9pLnRlc3QodmFsKVxyXG4gIGxldCBlcnJvciA9ICcnO1xyXG4gIGxldCBsZW5ndGggPSB2YWwucmVwbGFjZSgvXFxzKyQvLCAnJykuc3BsaXQoL1xcVysvKS5sZW5ndGg7XHJcbiAgaWYgKCF2YWwpIHtcclxuICAgIGVycm9yID0gJ9Cf0L7Qu9C1INC+0LHRj9C30LDRgtC10LvRjNC90L4g0LTQu9GPINC30LDQv9C+0LvQvdC10L3QuNGPJ1xyXG4gIH1cclxuICBpZiAodmFsKSB7XHJcbiAgICBpZihmYWxzeSA9PT10cnVlKSB7XHJcbiAgICAgIGVycm9yID0gJ9CS0LLQtdC00LjRgtC1INGC0L7Qu9GM0LrQviDQvdCwINC60LjRgNGA0LjQu9C40YbQtSdcclxuICAgIH1cclxuICAgIGlmKGZhbHN5PT0gZmFsc2UgJiYgcGFyc2VJbnQobGVuZ3RoKTwyKSB7XHJcbiAgICAgIGVycm9yID0gJ2NoZWNrIGVycm9yJ1xyXG4gICAgfVxyXG4gICAgXHJcbiAgfVxyXG5cclxuICAvLyByZXR1cm4gbGVuZ3RoICsgYCR7ZmFsc3l9YDtcclxuICByZXR1cm4gZXJyb3I7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgaWluVmFsaWRhdGlvbiA9ICh2YWwpID0+IHtcclxuICBsZXQgZXJyb3IgPSAnJztcclxuICB2YXIgYjEgPSBbXHJcbiAgICAxLFxyXG4gICAgMixcclxuICAgIDMsXHJcbiAgICA0LFxyXG4gICAgNSxcclxuICAgIDYsXHJcbiAgICA3LFxyXG4gICAgOCxcclxuICAgIDksXHJcbiAgICAxMCxcclxuICAgIDExXHJcbiAgXTtcclxuICB2YXIgYjIgPSBbXHJcbiAgICAzLFxyXG4gICAgNCxcclxuICAgIDUsXHJcbiAgICA2LFxyXG4gICAgNyxcclxuICAgIDgsXHJcbiAgICA5LFxyXG4gICAgMTAsXHJcbiAgICAxMSxcclxuICAgIDEsXHJcbiAgICAyXHJcbiAgXTtcclxuICB2YXIgYSA9IFtdO1xyXG4gIGNvbnN0IHZhbHVlID0gdmFsXHJcbiAgICA/IHZhbC5yZXBsYWNlKC8gL2csIFwiXCIpXHJcbiAgICA6ICcnXHJcbiAgdmFyIGNvbnRyb2xsID0gMDtcclxuICBpZiAoIXZhbHVlKSB7XHJcbiAgICBlcnJvciA9ICfQn9C+0LvQtSDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+INC00LvRjyDQt9Cw0L/QvtC70L3QtdC90LjRjydcclxuICB9XHJcbiAgaWYgKHZhbHVlICYmIHZhbHVlLmxlbmd0aCAhPT0gMTIpIHtcclxuICAgIGVycm9yID0gJ9Cd0LXQv9GA0LDQstC40LvRjNC90YvQuSDQmNCY0J0nO1xyXG4gIH1cclxuXHJcbiAgaWYgKHZhbHVlICYmIHZhbHVlLmxlbmd0aCA9PT0gMTIpIHtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTI7IGkrKykge1xyXG4gICAgICBhW2ldID0gcGFyc2VJbnQodmFsdWUuc3Vic3RyaW5nKGksIGkgKyAxKSk7XHJcbiAgICAgIGlmIChpIDwgMTEpIFxyXG4gICAgICAgIGNvbnRyb2xsICs9IGFbaV0gKiBiMVtpXTtcclxuICAgICAgfVxyXG4gICAgY29udHJvbGwgPSBjb250cm9sbCAlIDExO1xyXG4gICAgaWYgKGNvbnRyb2xsID09IDEwKSB7XHJcbiAgICAgIGNvbnRyb2xsID0gMDtcclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxMTsgaSsrKSBcclxuICAgICAgICBjb250cm9sbCArPSBhW2ldICogYjJbaV07XHJcbiAgICAgIGNvbnRyb2xsID0gY29udHJvbGwgJSAxMTtcclxuICAgIH1cclxuICAgIGlmIChjb250cm9sbCAhPSBhWzExXSkge1xyXG4gICAgICBlcnJvciA9ICfQndC10LrQvtGA0YDQtdC60YLQvdGL0Lkg0JjQmNCdJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBlcnJvcjtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhY2NlcHRDaXJyaWxpY09ubHkgPSB2YWwgPT4ge1xyXG4gIHZhciBmYWxzeSA9IC9bYS16QS1aMC05X1wiKi9dL2kudGVzdCh2YWwpXHJcbiAgbGV0IGVycm9yO1xyXG4gIGlmICh2YWwpIHtcclxuICAgIGlmIChmYWxzeSA9PT0gdHJ1ZSkge1xyXG4gICAgICBlcnJvciA9ICfQndGD0LbQvdC+INCy0LLQvtC00LjRgtGMINGC0L7Qu9GM0LrQviDQvdCwINC60LjRgNC40LvQu9C40YbQtSdcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGVycm9yO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==