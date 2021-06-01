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
  var value = val.split(' ').join('');
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
      // error = 'check error'
      setTimeout(function () {
        if (parseInt(length) < 2) {}
      });
    }
  } // return length + `${falsy}`;


  return val;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGVmYXVsdHMvdmFsaWRhdGlvbnMuanMiXSwibmFtZXMiOlsiZW1haWxWYWxpZCIsInZhbCIsInZhbHVlIiwic3BsaXQiLCJqb2luIiwiZXJyb3IiLCJlbWFpbHZhbGlkIiwidGVzdCIsInJlcXVpcmVkIiwicGhvbmVDaGVjayIsIlBIT05FX09QRVJBVE9SUyIsImlkIiwicGhvbmUiLCJTdHJpbmciLCJyZXBsYWNlIiwiY29kZSIsIm1hdGNoIiwibGVuZ3RoIiwicGhvbmVfbnVtYmVyIiwicGhvbmVfb3BlcmF0b3IiLCJmaWx0ZXIiLCJpdGVtIiwicGhvbmVWYWxpZGF0aW9uIiwicGhvbmV2YWwiLCJwYXNzd29yZFZhbGlkIiwiY2hlY2tTdHJpbmdOYW1lIiwiYWNjZXB0Q2lycmlsaWMiLCJmYWxzeSIsInBhcnNlSW50Iiwic2V0VGltZW91dCIsImlpblZhbGlkYXRpb24iLCJiMSIsImIyIiwiYSIsImNvbnRyb2xsIiwiaSIsInN1YnN0cmluZyIsImFjY2VwdENpcnJpbGljT25seSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQUMsR0FBRyxFQUFJO0FBQy9CLE1BQU1DLEtBQUssR0FBR0QsR0FBRyxDQUFDRSxLQUFKLENBQVUsR0FBVixFQUFlQyxJQUFmLENBQW9CLEVBQXBCLENBQWQ7QUFDQSxNQUFJQyxLQUFKOztBQUNBLE1BQUksQ0FBQ0gsS0FBTCxFQUFZO0FBQ1ZHLFNBQUssR0FBRyx1Q0FBUjtBQUNEOztBQUNELE1BQUlILEtBQUosRUFBVztBQUNULFFBQUlJLFVBQVUsR0FBRyw0Q0FBNENDLElBQTVDLENBQWlETCxLQUFqRCxDQUFqQjs7QUFDQSxRQUFJLENBQUNJLFVBQUwsRUFBaUI7QUFDZkQsV0FBSyxHQUFHLG9CQUFSO0FBQ0Q7QUFDRjs7QUFDRCxTQUFPQSxLQUFQO0FBQ0QsQ0FiTTtBQWVBLElBQU1HLFFBQVEsR0FBRyxTQUFY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LENBQUQsR0FBT0osRUFBRSxDQUFDSSxDQUFELENBQXJCO0FBQ0Q7O0FBQ0hELFlBQVEsR0FBR0EsUUFBUSxHQUFHLEVBQXRCOztBQUNBLFFBQUlBLFFBQVEsSUFBSSxFQUFoQixFQUFvQjtBQUNsQkEsY0FBUSxHQUFHLENBQVg7O0FBQ0EsV0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEVBQXBCLEVBQXdCQSxDQUFDLEVBQXpCO0FBQ0VELGdCQUFRLElBQUlELENBQUMsQ0FBQ0UsQ0FBRCxDQUFELEdBQU9ILEVBQUUsQ0FBQ0csQ0FBRCxDQUFyQjtBQURGOztBQUVBRCxjQUFRLEdBQUdBLFFBQVEsR0FBRyxFQUF0QjtBQUNEOztBQUNELFFBQUlBLFFBQVEsSUFBSUQsQ0FBQyxDQUFDLEVBQUQsQ0FBakIsRUFBdUI7QUFDckI1QixXQUFLLEdBQUcsa0JBQVI7QUFDRDtBQUNGOztBQUVELFNBQU9BLEtBQVA7QUFFRCxDQTVETTtBQThEQSxJQUFNZ0Msa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFBcEMsR0FBRyxFQUFJO0FBQ3ZDLE1BQUkwQixLQUFLLEdBQUcsbUJBQW1CcEIsSUFBbkIsQ0FBd0JOLEdBQXhCLENBQVo7QUFDQSxNQUFJSSxLQUFKOztBQUNBLE1BQUlKLEdBQUosRUFBUztBQUNQLFFBQUkwQixLQUFLLEtBQUssSUFBZCxFQUFvQjtBQUNsQnRCLFdBQUssR0FBRyxtQ0FBUjtBQUNEO0FBQ0Y7O0FBQ0QsU0FBT0EsS0FBUDtBQUNELENBVE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvanVyc2VydmljZS5kZmU1YmQwMjY3N2RlYmQ3ZTM0Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGVtYWlsVmFsaWQgPSB2YWwgPT4ge1xyXG4gIGNvbnN0IHZhbHVlID0gdmFsLnNwbGl0KCcgJykuam9pbignJyk7XHJcbiAgbGV0IGVycm9yO1xyXG4gIGlmICghdmFsdWUpIHtcclxuICAgIGVycm9yID0gJ9Cf0L7Qu9C1IEVtYWlsINC+0LHRj9C30LDRgtC10LvRjNC90L4g0LTQu9GPINC30LDQv9C+0LvQvdC10L3QuNGPJ1xyXG4gIH1cclxuICBpZiAodmFsdWUpIHtcclxuICAgIGxldCBlbWFpbHZhbGlkID0gL15bQS1aMC05Ll8lKy1dK0BbQS1aMC05Li1dK1xcLltBLVpdezIsNH0kL2kudGVzdCh2YWx1ZSk7XHJcbiAgICBpZiAoIWVtYWlsdmFsaWQpIHtcclxuICAgICAgZXJyb3IgPSAn0J3QtdC/0YDQsNCy0LjQu9GM0L3Ri9C5IGVtYWlsJ1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gZXJyb3JcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlcXVpcmVkID0gdmFsID0+IHtcclxuICBsZXQgZXJyb3I7XHJcbiAgaWYgKCF2YWwpIHtcclxuICAgIGVycm9yID0gJ9Cf0L7Qu9C1INC+0LHRj9C30LDRgtC10LvRjNC90L4g0LTQu9GPINC30LDQv9C+0LvQvdC10L3QuNGPJ1xyXG4gIH1cclxuICByZXR1cm4gZXJyb3JcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHBob25lQ2hlY2sgPSAodmFsKSA9PiB7XHJcblxyXG4gIHZhciBQSE9ORV9PUEVSQVRPUlMgPSBbXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnNzcwMCdcclxuICAgIH0sIHtcclxuICAgICAgaWQ6ICc3NzAxJ1xyXG4gICAgfSwge1xyXG4gICAgICBpZDogJzc3MDInXHJcbiAgICB9LCB7XHJcbiAgICAgIGlkOiAnNzcwNSdcclxuICAgIH0sIHtcclxuICAgICAgaWQ6ICc3NzA2J1xyXG4gICAgfSwge1xyXG4gICAgICBpZDogJzc3MDcnXHJcbiAgICB9LCB7XHJcbiAgICAgIGlkOiAnNzcwOCdcclxuICAgIH0sIHtcclxuICAgICAgaWQ6ICc3NzQ3J1xyXG4gICAgfSwge1xyXG4gICAgICBpZDogJzc3NzEnXHJcbiAgICB9LCB7XHJcbiAgICAgIGlkOiAnNzc3NSdcclxuICAgIH0sIHtcclxuICAgICAgaWQ6ICc3Nzc2J1xyXG4gICAgfSwge1xyXG4gICAgICBpZDogJzc3NzcnXHJcbiAgICB9LCB7XHJcbiAgICAgIGlkOiAnNzc3OCdcclxuICAgIH1cclxuICBdO1xyXG4gIHZhciBwaG9uZSA9IFN0cmluZyh2YWwpLnJlcGxhY2UoL1teQS1aMC05XS9nLCAnJyksXHJcbiAgICBjb2RlID0gcGhvbmUubWF0Y2goL14oXFxkezR9KShcXGR7M30pKFxcZHs0fSkkLyk7XHJcbiAgaWYgKCFjb2RlIHx8IHBob25lLmxlbmd0aCAhPT0gMTEpIHtcclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuXHJcbiAgdmFyIHBob25lX251bWJlciA9IGNvZGVbMV07XHJcbiAgdmFyIHBob25lX29wZXJhdG9yID0gUEhPTkVfT1BFUkFUT1JTLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgcmV0dXJuIGl0ZW0uaWQgPT0gcGhvbmVfbnVtYmVyXHJcbiAgfSk7XHJcblxyXG4gIGlmIChwaG9uZV9vcGVyYXRvci5sZW5ndGggPiAwKSB7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcGhvbmVWYWxpZGF0aW9uID0gKHZhbCkgPT4ge1xyXG4gIGNvbnN0IHBob25ldmFsID0gdmFsLnJlcGxhY2UoLyAvZywgXCJcIik7XHJcblxyXG4gIGxldCBlcnJvclxyXG5cclxuICBpZiAocGhvbmV2YWwubGVuZ3RoID09PSAxNiAmJiBwaG9uZUNoZWNrKHZhbCkgPT09IHRydWUpIHtcclxuICAgIGVycm9yID0gJydcclxuICB9XHJcbiAgaWYgKHBob25ldmFsLmxlbmd0aCAhPT0gMTYpIHtcclxuICAgIGVycm9yID0gJ9Cd0LXQv9GA0LDQstC40LvRjNC90YvQuSDRgtC10LvQtdGE0L7QvSDQvdC+0LzQtdGAJ1xyXG4gIH1cclxuICBpZiAocGhvbmV2YWwubGVuZ3RoID09PSAxNiAmJiBwaG9uZUNoZWNrKHZhbCkgPT09IGZhbHNlKSB7XHJcbiAgICBlcnJvciA9ICfQndC10YIg0YHQvtC+0YLQstC10YLRgdGC0LLRg9GO0YnQtdCz0L4g0L7Qv9C10YDQsNGC0L7RgNCwJ1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGVycm9yXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwYXNzd29yZFZhbGlkID0gdmFsID0+IHtcclxuICBsZXQgZXJyb3I7XHJcbiAgaWYgKCF2YWwpIHtcclxuICAgIGVycm9yID0gJ9Cf0L7Qu9C1INC+0LHRj9C30LDRgtC10LvRjNC90L4g0LTQu9GPINC30LDQv9C+0LvQvdC10L3QuNGPJ1xyXG4gIH1cclxuICBpZiAodmFsICYmIHZhbC5sZW5ndGggPCA2KSB7XHJcbiAgICBlcnJvciA9ICfQvNC40L3QuNC80LDQu9GM0L3QsNGPINC00LvQuNC90LAg0L/QsNGA0L7Qu9GPINC00L7Qu9C20L3QsCDQsdGL0YLRjCDQvdC1INC80LXQvdC10LUgNiDRgdC40LzQstC+0LvQvtCyJ1xyXG4gIH1cclxuICByZXR1cm4gZXJyb3I7XHJcbn1cclxuXHJcbmNvbnN0IGNoZWNrU3RyaW5nTmFtZSA9IHZhbCA9PiB7XHJcbiAgaWYgKHZhbCAmJiB2YWwucmVwbGFjZSgvXFxzKyQvLCAnJykuc3BsaXQoL1xcVysvKS5sZW5ndGggIDwyKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfWVsc2Uge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYWNjZXB0Q2lycmlsaWMgPSB2YWwgPT4ge1xyXG4gIHZhciBmYWxzeSA9IC9bYS16QS1aMC05X1wiKi9dL2kudGVzdCh2YWwpXHJcbiAgbGV0IGVycm9yID0gJyc7XHJcbiAgbGV0IGxlbmd0aCA9IHZhbC5yZXBsYWNlKC9cXHMrJC8sICcnKS5zcGxpdCgvXFxXKy8pLmxlbmd0aDtcclxuICBpZiAoIXZhbCkge1xyXG4gICAgZXJyb3IgPSAn0J/QvtC70LUg0L7QsdGP0LfQsNGC0LXQu9GM0L3QviDQtNC70Y8g0LfQsNC/0L7Qu9C90LXQvdC40Y8nXHJcbiAgfVxyXG4gIGlmICh2YWwpIHtcclxuICAgIGlmKGZhbHN5ID09PXRydWUpIHtcclxuICAgICAgZXJyb3IgPSAn0JLQstC10LTQuNGC0LUg0YLQvtC70YzQutC+INC90LAg0LrQuNGA0YDQuNC70LjRhtC1J1xyXG4gICAgfVxyXG4gICAgaWYoZmFsc3k9PSBmYWxzZSAmJiBwYXJzZUludChsZW5ndGgpPDIpIHtcclxuICAgICAgLy8gZXJyb3IgPSAnY2hlY2sgZXJyb3InXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGlmKHBhcnNlSW50KGxlbmd0aCk8Mikge1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgfVxyXG5cclxuICAvLyByZXR1cm4gbGVuZ3RoICsgYCR7ZmFsc3l9YDtcclxuICByZXR1cm4gdmFsO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGlpblZhbGlkYXRpb24gPSAodmFsKSA9PiB7XHJcbiAgbGV0IGVycm9yID0gJyc7XHJcbiAgdmFyIGIxID0gW1xyXG4gICAgMSxcclxuICAgIDIsXHJcbiAgICAzLFxyXG4gICAgNCxcclxuICAgIDUsXHJcbiAgICA2LFxyXG4gICAgNyxcclxuICAgIDgsXHJcbiAgICA5LFxyXG4gICAgMTAsXHJcbiAgICAxMVxyXG4gIF07XHJcbiAgdmFyIGIyID0gW1xyXG4gICAgMyxcclxuICAgIDQsXHJcbiAgICA1LFxyXG4gICAgNixcclxuICAgIDcsXHJcbiAgICA4LFxyXG4gICAgOSxcclxuICAgIDEwLFxyXG4gICAgMTEsXHJcbiAgICAxLFxyXG4gICAgMlxyXG4gIF07XHJcbiAgdmFyIGEgPSBbXTtcclxuICBjb25zdCB2YWx1ZSA9IHZhbFxyXG4gICAgPyB2YWwucmVwbGFjZSgvIC9nLCBcIlwiKVxyXG4gICAgOiAnJ1xyXG4gIHZhciBjb250cm9sbCA9IDA7XHJcbiAgaWYgKCF2YWx1ZSkge1xyXG4gICAgZXJyb3IgPSAn0J/QvtC70LUg0L7QsdGP0LfQsNGC0LXQu9GM0L3QviDQtNC70Y8g0LfQsNC/0L7Qu9C90LXQvdC40Y8nXHJcbiAgfVxyXG4gIGlmICh2YWx1ZSAmJiB2YWx1ZS5sZW5ndGggIT09IDEyKSB7XHJcbiAgICBlcnJvciA9ICfQndC10L/RgNCw0LLQuNC70YzQvdGL0Lkg0JjQmNCdJztcclxuICB9XHJcblxyXG4gIGlmICh2YWx1ZSAmJiB2YWx1ZS5sZW5ndGggPT09IDEyKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDEyOyBpKyspIHtcclxuICAgICAgYVtpXSA9IHBhcnNlSW50KHZhbHVlLnN1YnN0cmluZyhpLCBpICsgMSkpO1xyXG4gICAgICBpZiAoaSA8IDExKSBcclxuICAgICAgICBjb250cm9sbCArPSBhW2ldICogYjFbaV07XHJcbiAgICAgIH1cclxuICAgIGNvbnRyb2xsID0gY29udHJvbGwgJSAxMTtcclxuICAgIGlmIChjb250cm9sbCA9PSAxMCkge1xyXG4gICAgICBjb250cm9sbCA9IDA7XHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTE7IGkrKykgXHJcbiAgICAgICAgY29udHJvbGwgKz0gYVtpXSAqIGIyW2ldO1xyXG4gICAgICBjb250cm9sbCA9IGNvbnRyb2xsICUgMTE7XHJcbiAgICB9XHJcbiAgICBpZiAoY29udHJvbGwgIT0gYVsxMV0pIHtcclxuICAgICAgZXJyb3IgPSAn0J3QtdC60L7RgNGA0LXQutGC0L3Ri9C5INCY0JjQnSc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZXJyb3I7XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYWNjZXB0Q2lycmlsaWNPbmx5ID0gdmFsID0+IHtcclxuICB2YXIgZmFsc3kgPSAvW2EtekEtWjAtOV9cIiovXS9pLnRlc3QodmFsKVxyXG4gIGxldCBlcnJvcjtcclxuICBpZiAodmFsKSB7XHJcbiAgICBpZiAoZmFsc3kgPT09IHRydWUpIHtcclxuICAgICAgZXJyb3IgPSAn0J3Rg9C20L3QviDQstCy0L7QtNC40YLRjCDRgtC+0LvRjNC60L4g0L3QsCDQutC40YDQuNC70LvQuNGG0LUnXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBlcnJvcjtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=