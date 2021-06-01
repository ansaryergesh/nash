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
  var str = val;
  str = str.replace(/(^\s*)|(\s*$)/gi, "");
  str = str.replace(/[ ]{2,}/gi, " ");
  str = str.replace(/\n /, "\n");
  var length = val ? str.split(' ').length : 0;

  if (!val) {
    error = 'Поле обязательно для заполнения';
  }

  if (val) {
    if (falsy === true) {
      error = 'Введите только на киррилице';
    }

    if (falsy == false && parseInt(length) < 2) {
      error = 'Введите полное имя( Например: Абаев Абылай)';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGVmYXVsdHMvdmFsaWRhdGlvbnMuanMiXSwibmFtZXMiOlsiZW1haWxWYWxpZCIsInZhbCIsInZhbHVlIiwidHJpbSIsImVycm9yIiwiZW1haWx2YWxpZCIsInRlc3QiLCJyZXF1aXJlZCIsInBob25lQ2hlY2siLCJQSE9ORV9PUEVSQVRPUlMiLCJpZCIsInBob25lIiwiU3RyaW5nIiwicmVwbGFjZSIsImNvZGUiLCJtYXRjaCIsImxlbmd0aCIsInBob25lX251bWJlciIsInBob25lX29wZXJhdG9yIiwiZmlsdGVyIiwiaXRlbSIsInBob25lVmFsaWRhdGlvbiIsInBob25ldmFsIiwicGFzc3dvcmRWYWxpZCIsImNoZWNrU3RyaW5nTmFtZSIsInNwbGl0IiwiYWNjZXB0Q2lycmlsaWMiLCJmYWxzeSIsInN0ciIsInBhcnNlSW50IiwiaWluVmFsaWRhdGlvbiIsImIxIiwiYjIiLCJhIiwiY29udHJvbGwiLCJpIiwic3Vic3RyaW5nIiwiYWNjZXB0Q2lycmlsaWNPbmx5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFBQyxHQUFHLEVBQUk7QUFDL0I7QUFDQSxNQUFNQyxLQUFLLEdBQUdELEdBQUcsQ0FBQ0UsSUFBSixFQUFkO0FBQ0EsTUFBSUMsS0FBSjs7QUFDQSxNQUFJLENBQUNGLEtBQUwsRUFBWTtBQUNWRSxTQUFLLEdBQUcsdUNBQVI7QUFDRDs7QUFDRCxNQUFJRixLQUFKLEVBQVc7QUFDVCxRQUFJRyxVQUFVLEdBQUcsNENBQTRDQyxJQUE1QyxDQUFpREosS0FBakQsQ0FBakI7O0FBQ0EsUUFBSSxDQUFDRyxVQUFMLEVBQWlCO0FBQ2ZELFdBQUssR0FBRyxvQkFBUjtBQUNEO0FBQ0Y7O0FBQ0QsU0FBT0EsS0FBUDtBQUNELENBZE07QUFnQkEsSUFBTUcsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQU4sR0FBRyxFQUFJO0FBQzdCLE1BQUlH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QUFDLEdBQUcsQ0FBdkIsQ0FBRCxDQUFmO0FBQ0EsVUFBSUEsQ0FBQyxHQUFHLEVBQVIsRUFDRUQsUUFBUSxJQUFJRCxDQUFDLENBQUNFLENBQUQsQ0FBRCxHQUFPSixFQUFFLENBQUNJLENBQUQsQ0FBckI7QUFDRDs7QUFDSEQsWUFBUSxHQUFHQSxRQUFRLEdBQUcsRUFBdEI7O0FBQ0EsUUFBSUEsUUFBUSxJQUFJLEVBQWhCLEVBQW9CO0FBQ2xCQSxjQUFRLEdBQUcsQ0FBWDs7QUFDQSxXQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsRUFBcEIsRUFBd0JBLENBQUMsRUFBekI7QUFDRUQsZ0JBQVEsSUFBSUQsQ0FBQyxDQUFDRSxDQUFELENBQUQsR0FBT0gsRUFBRSxDQUFDRyxDQUFELENBQXJCO0FBREY7O0FBRUFELGNBQVEsR0FBR0EsUUFBUSxHQUFHLEVBQXRCO0FBQ0Q7O0FBQ0QsUUFBSUEsUUFBUSxJQUFJRCxDQUFDLENBQUMsRUFBRCxDQUFqQixFQUF1QjtBQUNyQjdCLFdBQUssR0FBRyxrQkFBUjtBQUNEO0FBQ0Y7O0FBRUQsU0FBT0EsS0FBUDtBQUVELENBNURNO0FBOERBLElBQU1pQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUFwQyxHQUFHLEVBQUk7QUFDdkMsTUFBSTBCLEtBQUssR0FBRyxtQkFBbUJyQixJQUFuQixDQUF3QkwsR0FBeEIsQ0FBWjtBQUNBLE1BQUlHLEtBQUo7O0FBQ0EsTUFBSUgsR0FBSixFQUFTO0FBQ1AsUUFBSTBCLEtBQUssS0FBSyxJQUFkLEVBQW9CO0FBQ2xCdkIsV0FBSyxHQUFHLG1DQUFSO0FBQ0Q7QUFDRjs7QUFDRCxTQUFPQSxLQUFQO0FBQ0QsQ0FUTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9nZXRzZXJ2aWNlLjc0ODNkOWMzM2RhOGE1NjcyMGFkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZW1haWxWYWxpZCA9IHZhbCA9PiB7XHJcbiAgLy8gY29uc3QgdmFsdWUgPSB2YWwuc3BsaXQoJyAnKS5qb2luKCcnKTtcclxuICBjb25zdCB2YWx1ZSA9IHZhbC50cmltKClcclxuICBsZXQgZXJyb3I7XHJcbiAgaWYgKCF2YWx1ZSkge1xyXG4gICAgZXJyb3IgPSAn0J/QvtC70LUgRW1haWwg0L7QsdGP0LfQsNGC0LXQu9GM0L3QviDQtNC70Y8g0LfQsNC/0L7Qu9C90LXQvdC40Y8nXHJcbiAgfVxyXG4gIGlmICh2YWx1ZSkge1xyXG4gICAgbGV0IGVtYWlsdmFsaWQgPSAvXltBLVowLTkuXyUrLV0rQFtBLVowLTkuLV0rXFwuW0EtWl17Miw0fSQvaS50ZXN0KHZhbHVlKTtcclxuICAgIGlmICghZW1haWx2YWxpZCkge1xyXG4gICAgICBlcnJvciA9ICfQndC10L/RgNCw0LLQuNC70YzQvdGL0LkgZW1haWwnXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBlcnJvclxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVxdWlyZWQgPSB2YWwgPT4ge1xyXG4gIGxldCBlcnJvcjtcclxuICBpZiAoIXZhbCkge1xyXG4gICAgZXJyb3IgPSAn0J/QvtC70LUg0L7QsdGP0LfQsNGC0LXQu9GM0L3QviDQtNC70Y8g0LfQsNC/0L7Qu9C90LXQvdC40Y8nXHJcbiAgfVxyXG4gIHJldHVybiBlcnJvclxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcGhvbmVDaGVjayA9ICh2YWwpID0+IHtcclxuXHJcbiAgdmFyIFBIT05FX09QRVJBVE9SUyA9IFtcclxuICAgIHtcclxuICAgICAgaWQ6ICc3NzAwJ1xyXG4gICAgfSwge1xyXG4gICAgICBpZDogJzc3MDEnXHJcbiAgICB9LCB7XHJcbiAgICAgIGlkOiAnNzcwMidcclxuICAgIH0sIHtcclxuICAgICAgaWQ6ICc3NzA1J1xyXG4gICAgfSwge1xyXG4gICAgICBpZDogJzc3MDYnXHJcbiAgICB9LCB7XHJcbiAgICAgIGlkOiAnNzcwNydcclxuICAgIH0sIHtcclxuICAgICAgaWQ6ICc3NzA4J1xyXG4gICAgfSwge1xyXG4gICAgICBpZDogJzc3NDcnXHJcbiAgICB9LCB7XHJcbiAgICAgIGlkOiAnNzc3MSdcclxuICAgIH0sIHtcclxuICAgICAgaWQ6ICc3Nzc1J1xyXG4gICAgfSwge1xyXG4gICAgICBpZDogJzc3NzYnXHJcbiAgICB9LCB7XHJcbiAgICAgIGlkOiAnNzc3NydcclxuICAgIH0sIHtcclxuICAgICAgaWQ6ICc3Nzc4J1xyXG4gICAgfVxyXG4gIF07XHJcbiAgdmFyIHBob25lID0gU3RyaW5nKHZhbCkucmVwbGFjZSgvW15BLVowLTldL2csICcnKSxcclxuICAgIGNvZGUgPSBwaG9uZS5tYXRjaCgvXihcXGR7NH0pKFxcZHszfSkoXFxkezR9KSQvKTtcclxuICBpZiAoIWNvZGUgfHwgcGhvbmUubGVuZ3RoICE9PSAxMSkge1xyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG5cclxuICB2YXIgcGhvbmVfbnVtYmVyID0gY29kZVsxXTtcclxuICB2YXIgcGhvbmVfb3BlcmF0b3IgPSBQSE9ORV9PUEVSQVRPUlMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICByZXR1cm4gaXRlbS5pZCA9PSBwaG9uZV9udW1iZXJcclxuICB9KTtcclxuXHJcbiAgaWYgKHBob25lX29wZXJhdG9yLmxlbmd0aCA+IDApIHtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwaG9uZVZhbGlkYXRpb24gPSAodmFsKSA9PiB7XHJcbiAgY29uc3QgcGhvbmV2YWwgPSB2YWwucmVwbGFjZSgvIC9nLCBcIlwiKTtcclxuXHJcbiAgbGV0IGVycm9yXHJcblxyXG4gIGlmIChwaG9uZXZhbC5sZW5ndGggPT09IDE2ICYmIHBob25lQ2hlY2sodmFsKSA9PT0gdHJ1ZSkge1xyXG4gICAgZXJyb3IgPSAnJ1xyXG4gIH1cclxuICBpZiAocGhvbmV2YWwubGVuZ3RoICE9PSAxNikge1xyXG4gICAgZXJyb3IgPSAn0J3QtdC/0YDQsNCy0LjQu9GM0L3Ri9C5INGC0LXQu9C10YTQvtC9INC90L7QvNC10YAnXHJcbiAgfVxyXG4gIGlmIChwaG9uZXZhbC5sZW5ndGggPT09IDE2ICYmIHBob25lQ2hlY2sodmFsKSA9PT0gZmFsc2UpIHtcclxuICAgIGVycm9yID0gJ9Cd0LXRgiDRgdC+0L7RgtCy0LXRgtGB0YLQstGD0Y7RidC10LPQviDQvtC/0LXRgNCw0YLQvtGA0LAnXHJcbiAgfVxyXG5cclxuICByZXR1cm4gZXJyb3JcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHBhc3N3b3JkVmFsaWQgPSB2YWwgPT4ge1xyXG4gIGxldCBlcnJvcjtcclxuICBpZiAoIXZhbCkge1xyXG4gICAgZXJyb3IgPSAn0J/QvtC70LUg0L7QsdGP0LfQsNGC0LXQu9GM0L3QviDQtNC70Y8g0LfQsNC/0L7Qu9C90LXQvdC40Y8nXHJcbiAgfVxyXG4gIGlmICh2YWwgJiYgdmFsLmxlbmd0aCA8IDYpIHtcclxuICAgIGVycm9yID0gJ9C80LjQvdC40LzQsNC70YzQvdCw0Y8g0LTQu9C40L3QsCDQv9Cw0YDQvtC70Y8g0LTQvtC70LbQvdCwINCx0YvRgtGMINC90LUg0LzQtdC90LXQtSA2INGB0LjQvNCy0L7Qu9C+0LInXHJcbiAgfVxyXG4gIHJldHVybiBlcnJvcjtcclxufVxyXG5cclxuY29uc3QgY2hlY2tTdHJpbmdOYW1lID0gdmFsID0+IHtcclxuICBpZiAodmFsICYmIHZhbC5yZXBsYWNlKC9cXHMrJC8sICcnKS5zcGxpdCgvXFxXKy8pLmxlbmd0aCAgPDIpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9ZWxzZSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhY2NlcHRDaXJyaWxpYyA9IHZhbCA9PiB7XHJcbiAgdmFyIGZhbHN5ID0gL1thLXpBLVowLTlfXCIqL10vaS50ZXN0KHZhbClcclxuICBsZXQgZXJyb3IgPSAnJztcclxuICB2YXIgc3RyID0gdmFsO1xyXG4gIHN0ciA9IHN0ci5yZXBsYWNlKC8oXlxccyopfChcXHMqJCkvZ2ksXCJcIik7XHJcbiAgc3RyID0gc3RyLnJlcGxhY2UoL1sgXXsyLH0vZ2ksXCIgXCIpO1xyXG4gIHN0ciA9IHN0ci5yZXBsYWNlKC9cXG4gLyxcIlxcblwiKTtcclxuICBsZXQgbGVuZ3RoID0gdmFsID8gc3RyLnNwbGl0KCcgJykubGVuZ3RoIDogMDtcclxuICBpZiAoIXZhbCkge1xyXG4gICAgZXJyb3IgPSAn0J/QvtC70LUg0L7QsdGP0LfQsNGC0LXQu9GM0L3QviDQtNC70Y8g0LfQsNC/0L7Qu9C90LXQvdC40Y8nXHJcbiAgfVxyXG4gIGlmICh2YWwpIHtcclxuICAgIGlmKGZhbHN5ID09PXRydWUpIHtcclxuICAgICAgZXJyb3IgPSAn0JLQstC10LTQuNGC0LUg0YLQvtC70YzQutC+INC90LAg0LrQuNGA0YDQuNC70LjRhtC1J1xyXG4gICAgfVxyXG4gICAgaWYoZmFsc3k9PSBmYWxzZSAmJiBwYXJzZUludChsZW5ndGgpPDIpIHtcclxuICAgICAgZXJyb3IgPSAn0JLQstC10LTQuNGC0LUg0L/QvtC70L3QvtC1INC40LzRjygg0J3QsNC/0YDQuNC80LXRgDog0JDQsdCw0LXQsiDQkNCx0YvQu9Cw0LkpJ1xyXG4gICAgfVxyXG4gICAgXHJcbiAgfVxyXG5cclxuICAvLyByZXR1cm4gbGVuZ3RoICsgYCR7ZmFsc3l9YDtcclxuICByZXR1cm4gZXJyb3I7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgaWluVmFsaWRhdGlvbiA9ICh2YWwpID0+IHtcclxuICBsZXQgZXJyb3IgPSAnJztcclxuICB2YXIgYjEgPSBbXHJcbiAgICAxLFxyXG4gICAgMixcclxuICAgIDMsXHJcbiAgICA0LFxyXG4gICAgNSxcclxuICAgIDYsXHJcbiAgICA3LFxyXG4gICAgOCxcclxuICAgIDksXHJcbiAgICAxMCxcclxuICAgIDExXHJcbiAgXTtcclxuICB2YXIgYjIgPSBbXHJcbiAgICAzLFxyXG4gICAgNCxcclxuICAgIDUsXHJcbiAgICA2LFxyXG4gICAgNyxcclxuICAgIDgsXHJcbiAgICA5LFxyXG4gICAgMTAsXHJcbiAgICAxMSxcclxuICAgIDEsXHJcbiAgICAyXHJcbiAgXTtcclxuICB2YXIgYSA9IFtdO1xyXG4gIGNvbnN0IHZhbHVlID0gdmFsXHJcbiAgICA/IHZhbC5yZXBsYWNlKC8gL2csIFwiXCIpXHJcbiAgICA6ICcnXHJcbiAgdmFyIGNvbnRyb2xsID0gMDtcclxuICBpZiAoIXZhbHVlKSB7XHJcbiAgICBlcnJvciA9ICfQn9C+0LvQtSDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+INC00LvRjyDQt9Cw0L/QvtC70L3QtdC90LjRjydcclxuICB9XHJcbiAgaWYgKHZhbHVlICYmIHZhbHVlLmxlbmd0aCAhPT0gMTIpIHtcclxuICAgIGVycm9yID0gJ9Cd0LXQv9GA0LDQstC40LvRjNC90YvQuSDQmNCY0J0nO1xyXG4gIH1cclxuXHJcbiAgaWYgKHZhbHVlICYmIHZhbHVlLmxlbmd0aCA9PT0gMTIpIHtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTI7IGkrKykge1xyXG4gICAgICBhW2ldID0gcGFyc2VJbnQodmFsdWUuc3Vic3RyaW5nKGksIGkgKyAxKSk7XHJcbiAgICAgIGlmIChpIDwgMTEpIFxyXG4gICAgICAgIGNvbnRyb2xsICs9IGFbaV0gKiBiMVtpXTtcclxuICAgICAgfVxyXG4gICAgY29udHJvbGwgPSBjb250cm9sbCAlIDExO1xyXG4gICAgaWYgKGNvbnRyb2xsID09IDEwKSB7XHJcbiAgICAgIGNvbnRyb2xsID0gMDtcclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxMTsgaSsrKSBcclxuICAgICAgICBjb250cm9sbCArPSBhW2ldICogYjJbaV07XHJcbiAgICAgIGNvbnRyb2xsID0gY29udHJvbGwgJSAxMTtcclxuICAgIH1cclxuICAgIGlmIChjb250cm9sbCAhPSBhWzExXSkge1xyXG4gICAgICBlcnJvciA9ICfQndC10LrQvtGA0YDQtdC60YLQvdGL0Lkg0JjQmNCdJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBlcnJvcjtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhY2NlcHRDaXJyaWxpY09ubHkgPSB2YWwgPT4ge1xyXG4gIHZhciBmYWxzeSA9IC9bYS16QS1aMC05X1wiKi9dL2kudGVzdCh2YWwpXHJcbiAgbGV0IGVycm9yO1xyXG4gIGlmICh2YWwpIHtcclxuICAgIGlmIChmYWxzeSA9PT0gdHJ1ZSkge1xyXG4gICAgICBlcnJvciA9ICfQndGD0LbQvdC+INCy0LLQvtC00LjRgtGMINGC0L7Qu9GM0LrQviDQvdCwINC60LjRgNC40LvQu9C40YbQtSdcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGVycm9yO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==