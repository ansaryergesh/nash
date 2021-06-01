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
  var value = String(val).replace(/[^A-Z0-9]/g, '');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGVmYXVsdHMvdmFsaWRhdGlvbnMuanMiXSwibmFtZXMiOlsiZW1haWxWYWxpZCIsInZhbCIsInZhbHVlIiwiU3RyaW5nIiwicmVwbGFjZSIsImVycm9yIiwiZW1haWx2YWxpZCIsInRlc3QiLCJyZXF1aXJlZCIsInBob25lQ2hlY2siLCJQSE9ORV9PUEVSQVRPUlMiLCJpZCIsInBob25lIiwiY29kZSIsIm1hdGNoIiwibGVuZ3RoIiwicGhvbmVfbnVtYmVyIiwicGhvbmVfb3BlcmF0b3IiLCJmaWx0ZXIiLCJpdGVtIiwicGhvbmVWYWxpZGF0aW9uIiwicGhvbmV2YWwiLCJwYXNzd29yZFZhbGlkIiwiY2hlY2tTdHJpbmdOYW1lIiwic3BsaXQiLCJhY2NlcHRDaXJyaWxpYyIsImZhbHN5IiwiaWluVmFsaWRhdGlvbiIsImIxIiwiYjIiLCJhIiwiY29udHJvbGwiLCJpIiwicGFyc2VJbnQiLCJzdWJzdHJpbmciLCJhY2NlcHRDaXJyaWxpY09ubHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUFDLEdBQUcsRUFBSTtBQUMvQixNQUFNQyxLQUFLLEdBQUdDLE1BQU0sQ0FBQ0YsR0FBRCxDQUFOLENBQVlHLE9BQVosQ0FBb0IsWUFBcEIsRUFBa0MsRUFBbEMsQ0FBZDtBQUNBLE1BQUlDLEtBQUo7O0FBQ0EsTUFBSSxDQUFDSCxLQUFMLEVBQVk7QUFDVkcsU0FBSyxHQUFHLHVDQUFSO0FBQ0Q7O0FBQ0QsTUFBSUgsS0FBSixFQUFXO0FBQ1QsUUFBSUksVUFBVSxHQUFHLDRDQUE0Q0MsSUFBNUMsQ0FBaUROLEdBQWpELENBQWpCOztBQUNBLFFBQUksQ0FBQ0ssVUFBTCxFQUFpQjtBQUNmRCxXQUFLLEdBQUcsb0JBQVI7QUFDRDtBQUNGOztBQUNELFNBQU9BLEtBQVA7QUFDRCxDQWJNO0FBZUEsSUFBTUcsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQVAs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RixDQUFoQixFQUFtQkEsQ0FBQyxHQUFHLENBQXZCLENBQUQsQ0FBZjtBQUNBLFVBQUlBLENBQUMsR0FBRyxFQUFSLEVBQ0VELFFBQVEsSUFBSUQsQ0FBQyxDQUFDRSxDQUFELENBQUQsR0FBT0osRUFBRSxDQUFDSSxDQUFELENBQXJCO0FBQ0Q7O0FBQ0hELFlBQVEsR0FBR0EsUUFBUSxHQUFHLEVBQXRCOztBQUNBLFFBQUlBLFFBQVEsSUFBSSxFQUFoQixFQUFvQjtBQUNsQkEsY0FBUSxHQUFHLENBQVg7O0FBQ0EsV0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEVBQXBCLEVBQXdCQSxDQUFDLEVBQXpCO0FBQ0VELGdCQUFRLElBQUlELENBQUMsQ0FBQ0UsQ0FBRCxDQUFELEdBQU9ILEVBQUUsQ0FBQ0csQ0FBRCxDQUFyQjtBQURGOztBQUVBRCxjQUFRLEdBQUdBLFFBQVEsR0FBRyxFQUF0QjtBQUNEOztBQUNELFFBQUlBLFFBQVEsSUFBSUQsQ0FBQyxDQUFDLEVBQUQsQ0FBakIsRUFBdUI7QUFDckJ6QixXQUFLLEdBQUcsa0JBQVI7QUFDRDtBQUNGOztBQUVELFNBQU9BLEtBQVA7QUFFRCxDQTVETTtBQThEQSxJQUFNOEIsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFBbEMsR0FBRyxFQUFJO0FBQ3ZDLE1BQUl5QixLQUFLLEdBQUcsbUJBQW1CbkIsSUFBbkIsQ0FBd0JOLEdBQXhCLENBQVo7QUFDQSxNQUFJSSxLQUFKOztBQUNBLE1BQUlKLEdBQUosRUFBUztBQUNQLFFBQUl5QixLQUFLLEtBQUssSUFBZCxFQUFvQjtBQUNsQnJCLFdBQUssR0FBRyxtQ0FBUjtBQUNEO0FBQ0Y7O0FBQ0QsU0FBT0EsS0FBUDtBQUNELENBVE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvanVyc2VydmljZS42NmU3NzQ1MGRjYzI1ZDM3NmZlZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGVtYWlsVmFsaWQgPSB2YWwgPT4ge1xyXG4gIGNvbnN0IHZhbHVlID0gU3RyaW5nKHZhbCkucmVwbGFjZSgvW15BLVowLTldL2csICcnKVxyXG4gIGxldCBlcnJvcjtcclxuICBpZiAoIXZhbHVlKSB7XHJcbiAgICBlcnJvciA9ICfQn9C+0LvQtSBFbWFpbCDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+INC00LvRjyDQt9Cw0L/QvtC70L3QtdC90LjRjydcclxuICB9XHJcbiAgaWYgKHZhbHVlKSB7XHJcbiAgICBsZXQgZW1haWx2YWxpZCA9IC9eW0EtWjAtOS5fJSstXStAW0EtWjAtOS4tXStcXC5bQS1aXXsyLDR9JC9pLnRlc3QodmFsKTtcclxuICAgIGlmICghZW1haWx2YWxpZCkge1xyXG4gICAgICBlcnJvciA9ICfQndC10L/RgNCw0LLQuNC70YzQvdGL0LkgZW1haWwnXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBlcnJvclxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVxdWlyZWQgPSB2YWwgPT4ge1xyXG4gIGxldCBlcnJvcjtcclxuICBpZiAoIXZhbCkge1xyXG4gICAgZXJyb3IgPSAn0J/QvtC70LUg0L7QsdGP0LfQsNGC0LXQu9GM0L3QviDQtNC70Y8g0LfQsNC/0L7Qu9C90LXQvdC40Y8nXHJcbiAgfVxyXG4gIHJldHVybiBlcnJvclxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcGhvbmVDaGVjayA9ICh2YWwpID0+IHtcclxuXHJcbiAgdmFyIFBIT05FX09QRVJBVE9SUyA9IFtcclxuICAgIHtcclxuICAgICAgaWQ6ICc3NzAwJ1xyXG4gICAgfSwge1xyXG4gICAgICBpZDogJzc3MDEnXHJcbiAgICB9LCB7XHJcbiAgICAgIGlkOiAnNzcwMidcclxuICAgIH0sIHtcclxuICAgICAgaWQ6ICc3NzA1J1xyXG4gICAgfSwge1xyXG4gICAgICBpZDogJzc3MDYnXHJcbiAgICB9LCB7XHJcbiAgICAgIGlkOiAnNzcwNydcclxuICAgIH0sIHtcclxuICAgICAgaWQ6ICc3NzA4J1xyXG4gICAgfSwge1xyXG4gICAgICBpZDogJzc3NDcnXHJcbiAgICB9LCB7XHJcbiAgICAgIGlkOiAnNzc3MSdcclxuICAgIH0sIHtcclxuICAgICAgaWQ6ICc3Nzc1J1xyXG4gICAgfSwge1xyXG4gICAgICBpZDogJzc3NzYnXHJcbiAgICB9LCB7XHJcbiAgICAgIGlkOiAnNzc3NydcclxuICAgIH0sIHtcclxuICAgICAgaWQ6ICc3Nzc4J1xyXG4gICAgfVxyXG4gIF07XHJcbiAgdmFyIHBob25lID0gU3RyaW5nKHZhbCkucmVwbGFjZSgvW15BLVowLTldL2csICcnKSxcclxuICAgIGNvZGUgPSBwaG9uZS5tYXRjaCgvXihcXGR7NH0pKFxcZHszfSkoXFxkezR9KSQvKTtcclxuICBpZiAoIWNvZGUgfHwgcGhvbmUubGVuZ3RoICE9PSAxMSkge1xyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG5cclxuICB2YXIgcGhvbmVfbnVtYmVyID0gY29kZVsxXTtcclxuICB2YXIgcGhvbmVfb3BlcmF0b3IgPSBQSE9ORV9PUEVSQVRPUlMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICByZXR1cm4gaXRlbS5pZCA9PSBwaG9uZV9udW1iZXJcclxuICB9KTtcclxuXHJcbiAgaWYgKHBob25lX29wZXJhdG9yLmxlbmd0aCA+IDApIHtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwaG9uZVZhbGlkYXRpb24gPSAodmFsKSA9PiB7XHJcbiAgY29uc3QgcGhvbmV2YWwgPSB2YWwucmVwbGFjZSgvIC9nLCBcIlwiKTtcclxuXHJcbiAgbGV0IGVycm9yXHJcblxyXG4gIGlmIChwaG9uZXZhbC5sZW5ndGggPT09IDE2ICYmIHBob25lQ2hlY2sodmFsKSA9PT0gdHJ1ZSkge1xyXG4gICAgZXJyb3IgPSAnJ1xyXG4gIH1cclxuICBpZiAocGhvbmV2YWwubGVuZ3RoICE9PSAxNikge1xyXG4gICAgZXJyb3IgPSAn0J3QtdC/0YDQsNCy0LjQu9GM0L3Ri9C5INGC0LXQu9C10YTQvtC9INC90L7QvNC10YAnXHJcbiAgfVxyXG4gIGlmIChwaG9uZXZhbC5sZW5ndGggPT09IDE2ICYmIHBob25lQ2hlY2sodmFsKSA9PT0gZmFsc2UpIHtcclxuICAgIGVycm9yID0gJ9Cd0LXRgiDRgdC+0L7RgtCy0LXRgtGB0YLQstGD0Y7RidC10LPQviDQvtC/0LXRgNCw0YLQvtGA0LAnXHJcbiAgfVxyXG5cclxuICByZXR1cm4gZXJyb3JcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHBhc3N3b3JkVmFsaWQgPSB2YWwgPT4ge1xyXG4gIGxldCBlcnJvcjtcclxuICBpZiAoIXZhbCkge1xyXG4gICAgZXJyb3IgPSAn0J/QvtC70LUg0L7QsdGP0LfQsNGC0LXQu9GM0L3QviDQtNC70Y8g0LfQsNC/0L7Qu9C90LXQvdC40Y8nXHJcbiAgfVxyXG4gIGlmICh2YWwgJiYgdmFsLmxlbmd0aCA8IDYpIHtcclxuICAgIGVycm9yID0gJ9C80LjQvdC40LzQsNC70YzQvdCw0Y8g0LTQu9C40L3QsCDQv9Cw0YDQvtC70Y8g0LTQvtC70LbQvdCwINCx0YvRgtGMINC90LUg0LzQtdC90LXQtSA2INGB0LjQvNCy0L7Qu9C+0LInXHJcbiAgfVxyXG4gIHJldHVybiBlcnJvcjtcclxufVxyXG5cclxuY29uc3QgY2hlY2tTdHJpbmdOYW1lID0gdmFsID0+IHtcclxuICBpZiAodmFsICYmIHZhbC5yZXBsYWNlKC9cXHMrJC8sICcnKS5zcGxpdCgvXFxXKy8pLmxlbmd0aCA+IDEpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhY2NlcHRDaXJyaWxpYyA9IHZhbCA9PiB7XHJcbiAgdmFyIGZhbHN5ID0gL1thLXpBLVowLTlfXCIqL10vaS50ZXN0KHZhbClcclxuICBsZXQgZXJyb3IgPSAnJztcclxuICBpZiAoIXZhbCkge1xyXG4gICAgZXJyb3IgPSAn0J/QvtC70LUg0L7QsdGP0LfQsNGC0LXQu9GM0L3QviDQtNC70Y8g0LfQsNC/0L7Qu9C90LXQvdC40Y8nXHJcbiAgfVxyXG4gIGlmICh2YWwpIHtcclxuICAgIGlmKGNoZWNrU3RyaW5nTmFtZSh2YWwpID09PSBmYWxzZSkge1xyXG4gICAgICBpZihmYWxzeT09PSB0cnVlKSB7XHJcbiAgICAgICAgZXJyb3IgPSAn0J3Rg9C20L3QviDQstCy0L7QtNC40YLRjCDRgtC+0LvRjNC60L4g0L3QsCDQutC40YDQuNC70LvQuNGG0LUnXHJcbiAgICAgIH1cclxuICAgIH1pZihjaGVja1N0cmluZ05hbWUodmFsKSA9PT0gdHJ1ZSkge1xyXG4gICAgICBpZihmYWxzeSA9PT0gZmFsc2UpIHtcclxuICAgICAgICBlcnJvciA9ICcnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmKGNoZWNrU3RyaW5nTmFtZSh2YWwpID09PSBmYWxzZSkge1xyXG4gICAgICBpZihmYWxzeSA9PT0gZmFsc2UpIHtcclxuICAgICAgICBlcnJvciA9ICfQpNCw0LzQuNC70LjRjyDQuCDQmNC80Y8g0L7QsdGP0LfQsNGC0LXQu9GM0L3RiyDQtNC70Y8g0LfQsNC/0L7Qu9C90LXQvdC40Y8gKNCe0YLRh9C10YHRgtCy0L4g0L3QtdC+0LHRj9C30LDRgtC10LvRjNC90L4pJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZihjaGVja1N0cmluZ05hbWUodmFsKSA9PT0gdHJ1ZSkge1xyXG4gICAgICBpZihmYWxzeSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIGVycm9yID0gJ9Cd0YPQttC90L4g0LLQstC+0LTQuNGC0Ywg0YLQvtC70YzQutC+INC90LAg0LrQuNGA0LjQu9C70LjRhtC1J1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZXJyb3I7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgaWluVmFsaWRhdGlvbiA9ICh2YWwpID0+IHtcclxuICBsZXQgZXJyb3IgPSAnJztcclxuICB2YXIgYjEgPSBbXHJcbiAgICAxLFxyXG4gICAgMixcclxuICAgIDMsXHJcbiAgICA0LFxyXG4gICAgNSxcclxuICAgIDYsXHJcbiAgICA3LFxyXG4gICAgOCxcclxuICAgIDksXHJcbiAgICAxMCxcclxuICAgIDExXHJcbiAgXTtcclxuICB2YXIgYjIgPSBbXHJcbiAgICAzLFxyXG4gICAgNCxcclxuICAgIDUsXHJcbiAgICA2LFxyXG4gICAgNyxcclxuICAgIDgsXHJcbiAgICA5LFxyXG4gICAgMTAsXHJcbiAgICAxMSxcclxuICAgIDEsXHJcbiAgICAyXHJcbiAgXTtcclxuICB2YXIgYSA9IFtdO1xyXG4gIGNvbnN0IHZhbHVlID0gdmFsXHJcbiAgICA/IHZhbC5yZXBsYWNlKC8gL2csIFwiXCIpXHJcbiAgICA6ICcnXHJcbiAgdmFyIGNvbnRyb2xsID0gMDtcclxuICBpZiAoIXZhbHVlKSB7XHJcbiAgICBlcnJvciA9ICfQn9C+0LvQtSDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+INC00LvRjyDQt9Cw0L/QvtC70L3QtdC90LjRjydcclxuICB9XHJcbiAgaWYgKHZhbHVlICYmIHZhbHVlLmxlbmd0aCAhPT0gMTIpIHtcclxuICAgIGVycm9yID0gJ9Cd0LXQv9GA0LDQstC40LvRjNC90YvQuSDQmNCY0J0nO1xyXG4gIH1cclxuXHJcbiAgaWYgKHZhbHVlICYmIHZhbHVlLmxlbmd0aCA9PT0gMTIpIHtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTI7IGkrKykge1xyXG4gICAgICBhW2ldID0gcGFyc2VJbnQodmFsdWUuc3Vic3RyaW5nKGksIGkgKyAxKSk7XHJcbiAgICAgIGlmIChpIDwgMTEpIFxyXG4gICAgICAgIGNvbnRyb2xsICs9IGFbaV0gKiBiMVtpXTtcclxuICAgICAgfVxyXG4gICAgY29udHJvbGwgPSBjb250cm9sbCAlIDExO1xyXG4gICAgaWYgKGNvbnRyb2xsID09IDEwKSB7XHJcbiAgICAgIGNvbnRyb2xsID0gMDtcclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxMTsgaSsrKSBcclxuICAgICAgICBjb250cm9sbCArPSBhW2ldICogYjJbaV07XHJcbiAgICAgIGNvbnRyb2xsID0gY29udHJvbGwgJSAxMTtcclxuICAgIH1cclxuICAgIGlmIChjb250cm9sbCAhPSBhWzExXSkge1xyXG4gICAgICBlcnJvciA9ICfQndC10LrQvtGA0YDQtdC60YLQvdGL0Lkg0JjQmNCdJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBlcnJvcjtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhY2NlcHRDaXJyaWxpY09ubHkgPSB2YWwgPT4ge1xyXG4gIHZhciBmYWxzeSA9IC9bYS16QS1aMC05X1wiKi9dL2kudGVzdCh2YWwpXHJcbiAgbGV0IGVycm9yO1xyXG4gIGlmICh2YWwpIHtcclxuICAgIGlmIChmYWxzeSA9PT0gdHJ1ZSkge1xyXG4gICAgICBlcnJvciA9ICfQndGD0LbQvdC+INCy0LLQvtC00LjRgtGMINGC0L7Qu9GM0LrQviDQvdCwINC60LjRgNC40LvQu9C40YbQtSdcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGVycm9yO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==