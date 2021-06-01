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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGVmYXVsdHMvdmFsaWRhdGlvbnMuanMiXSwibmFtZXMiOlsiZW1haWxWYWxpZCIsInZhbCIsInZhbHVlIiwidHJpbSIsImVycm9yIiwiZW1haWx2YWxpZCIsInRlc3QiLCJyZXF1aXJlZCIsInBob25lQ2hlY2siLCJQSE9ORV9PUEVSQVRPUlMiLCJpZCIsInBob25lIiwiU3RyaW5nIiwicmVwbGFjZSIsImNvZGUiLCJtYXRjaCIsImxlbmd0aCIsInBob25lX251bWJlciIsInBob25lX29wZXJhdG9yIiwiZmlsdGVyIiwiaXRlbSIsInBob25lVmFsaWRhdGlvbiIsInBob25ldmFsIiwicGFzc3dvcmRWYWxpZCIsImNoZWNrU3RyaW5nTmFtZSIsInNwbGl0IiwiYWNjZXB0Q2lycmlsaWMiLCJmYWxzeSIsInBhcnNlSW50Iiwic2V0VGltZW91dCIsImlpblZhbGlkYXRpb24iLCJiMSIsImIyIiwiYSIsImNvbnRyb2xsIiwiaSIsInN1YnN0cmluZyIsImFjY2VwdENpcnJpbGljT25seSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQUMsR0FBRyxFQUFJO0FBQy9CO0FBQ0EsTUFBTUMsS0FBSyxHQUFHRCxHQUFHLENBQUNFLElBQUosRUFBZDtBQUNBLE1BQUlDLEtBQUo7O0FBQ0EsTUFBSSxDQUFDRixLQUFMLEVBQVk7QUFDVkUsU0FBSyxHQUFHLHVDQUFSO0FBQ0Q7O0FBQ0QsTUFBSUYsS0FBSixFQUFXO0FBQ1QsUUFBSUcsVUFBVSxHQUFHLDRDQUE0Q0MsSUFBNUMsQ0FBaURKLEtBQWpELENBQWpCOztBQUNBLFFBQUksQ0FBQ0csVUFBTCxFQUFpQjtBQUNmRCxXQUFLLEdBQUcsb0JBQVI7QUFDRDtBQUNGOztBQUNELFNBQU9BLEtBQVA7QUFDRCxDQWRNO0FBZ0JBLElBQU1HLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUFOLEdBQUcsRUFBSTtBQUM3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ckI7QUFDRDs7QUFDSEQsWUFBUSxHQUFHQSxRQUFRLEdBQUcsRUFBdEI7O0FBQ0EsUUFBSUEsUUFBUSxJQUFJLEVBQWhCLEVBQW9CO0FBQ2xCQSxjQUFRLEdBQUcsQ0FBWDs7QUFDQSxXQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsRUFBcEIsRUFBd0JBLENBQUMsRUFBekI7QUFDRUQsZ0JBQVEsSUFBSUQsQ0FBQyxDQUFDRSxDQUFELENBQUQsR0FBT0gsRUFBRSxDQUFDRyxDQUFELENBQXJCO0FBREY7O0FBRUFELGNBQVEsR0FBR0EsUUFBUSxHQUFHLEVBQXRCO0FBQ0Q7O0FBQ0QsUUFBSUEsUUFBUSxJQUFJRCxDQUFDLENBQUMsRUFBRCxDQUFqQixFQUF1QjtBQUNyQjdCLFdBQUssR0FBRyxrQkFBUjtBQUNEO0FBQ0Y7O0FBRUQsU0FBT0EsS0FBUDtBQUVELENBNURNO0FBOERBLElBQU1pQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUFwQyxHQUFHLEVBQUk7QUFDdkMsTUFBSTBCLEtBQUssR0FBRyxtQkFBbUJyQixJQUFuQixDQUF3QkwsR0FBeEIsQ0FBWjtBQUNBLE1BQUlHLEtBQUo7O0FBQ0EsTUFBSUgsR0FBSixFQUFTO0FBQ1AsUUFBSTBCLEtBQUssS0FBSyxJQUFkLEVBQW9CO0FBQ2xCdkIsV0FBSyxHQUFHLG1DQUFSO0FBQ0Q7QUFDRjs7QUFDRCxTQUFPQSxLQUFQO0FBQ0QsQ0FUTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9nZXRzZXJ2aWNlLmQ4MmUzNTVkM2VhZTQxNmIwYTU3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZW1haWxWYWxpZCA9IHZhbCA9PiB7XHJcbiAgLy8gY29uc3QgdmFsdWUgPSB2YWwuc3BsaXQoJyAnKS5qb2luKCcnKTtcclxuICBjb25zdCB2YWx1ZSA9IHZhbC50cmltKClcclxuICBsZXQgZXJyb3I7XHJcbiAgaWYgKCF2YWx1ZSkge1xyXG4gICAgZXJyb3IgPSAn0J/QvtC70LUgRW1haWwg0L7QsdGP0LfQsNGC0LXQu9GM0L3QviDQtNC70Y8g0LfQsNC/0L7Qu9C90LXQvdC40Y8nXHJcbiAgfVxyXG4gIGlmICh2YWx1ZSkge1xyXG4gICAgbGV0IGVtYWlsdmFsaWQgPSAvXltBLVowLTkuXyUrLV0rQFtBLVowLTkuLV0rXFwuW0EtWl17Miw0fSQvaS50ZXN0KHZhbHVlKTtcclxuICAgIGlmICghZW1haWx2YWxpZCkge1xyXG4gICAgICBlcnJvciA9ICfQndC10L/RgNCw0LLQuNC70YzQvdGL0LkgZW1haWwnXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBlcnJvclxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVxdWlyZWQgPSB2YWwgPT4ge1xyXG4gIGxldCBlcnJvcjtcclxuICBpZiAoIXZhbCkge1xyXG4gICAgZXJyb3IgPSAn0J/QvtC70LUg0L7QsdGP0LfQsNGC0LXQu9GM0L3QviDQtNC70Y8g0LfQsNC/0L7Qu9C90LXQvdC40Y8nXHJcbiAgfVxyXG4gIHJldHVybiBlcnJvclxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcGhvbmVDaGVjayA9ICh2YWwpID0+IHtcclxuXHJcbiAgdmFyIFBIT05FX09QRVJBVE9SUyA9IFtcclxuICAgIHtcclxuICAgICAgaWQ6ICc3NzAwJ1xyXG4gICAgfSwge1xyXG4gICAgICBpZDogJzc3MDEnXHJcbiAgICB9LCB7XHJcbiAgICAgIGlkOiAnNzcwMidcclxuICAgIH0sIHtcclxuICAgICAgaWQ6ICc3NzA1J1xyXG4gICAgfSwge1xyXG4gICAgICBpZDogJzc3MDYnXHJcbiAgICB9LCB7XHJcbiAgICAgIGlkOiAnNzcwNydcclxuICAgIH0sIHtcclxuICAgICAgaWQ6ICc3NzA4J1xyXG4gICAgfSwge1xyXG4gICAgICBpZDogJzc3NDcnXHJcbiAgICB9LCB7XHJcbiAgICAgIGlkOiAnNzc3MSdcclxuICAgIH0sIHtcclxuICAgICAgaWQ6ICc3Nzc1J1xyXG4gICAgfSwge1xyXG4gICAgICBpZDogJzc3NzYnXHJcbiAgICB9LCB7XHJcbiAgICAgIGlkOiAnNzc3NydcclxuICAgIH0sIHtcclxuICAgICAgaWQ6ICc3Nzc4J1xyXG4gICAgfVxyXG4gIF07XHJcbiAgdmFyIHBob25lID0gU3RyaW5nKHZhbCkucmVwbGFjZSgvW15BLVowLTldL2csICcnKSxcclxuICAgIGNvZGUgPSBwaG9uZS5tYXRjaCgvXihcXGR7NH0pKFxcZHszfSkoXFxkezR9KSQvKTtcclxuICBpZiAoIWNvZGUgfHwgcGhvbmUubGVuZ3RoICE9PSAxMSkge1xyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG5cclxuICB2YXIgcGhvbmVfbnVtYmVyID0gY29kZVsxXTtcclxuICB2YXIgcGhvbmVfb3BlcmF0b3IgPSBQSE9ORV9PUEVSQVRPUlMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICByZXR1cm4gaXRlbS5pZCA9PSBwaG9uZV9udW1iZXJcclxuICB9KTtcclxuXHJcbiAgaWYgKHBob25lX29wZXJhdG9yLmxlbmd0aCA+IDApIHtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwaG9uZVZhbGlkYXRpb24gPSAodmFsKSA9PiB7XHJcbiAgY29uc3QgcGhvbmV2YWwgPSB2YWwucmVwbGFjZSgvIC9nLCBcIlwiKTtcclxuXHJcbiAgbGV0IGVycm9yXHJcblxyXG4gIGlmIChwaG9uZXZhbC5sZW5ndGggPT09IDE2ICYmIHBob25lQ2hlY2sodmFsKSA9PT0gdHJ1ZSkge1xyXG4gICAgZXJyb3IgPSAnJ1xyXG4gIH1cclxuICBpZiAocGhvbmV2YWwubGVuZ3RoICE9PSAxNikge1xyXG4gICAgZXJyb3IgPSAn0J3QtdC/0YDQsNCy0LjQu9GM0L3Ri9C5INGC0LXQu9C10YTQvtC9INC90L7QvNC10YAnXHJcbiAgfVxyXG4gIGlmIChwaG9uZXZhbC5sZW5ndGggPT09IDE2ICYmIHBob25lQ2hlY2sodmFsKSA9PT0gZmFsc2UpIHtcclxuICAgIGVycm9yID0gJ9Cd0LXRgiDRgdC+0L7RgtCy0LXRgtGB0YLQstGD0Y7RidC10LPQviDQvtC/0LXRgNCw0YLQvtGA0LAnXHJcbiAgfVxyXG5cclxuICByZXR1cm4gZXJyb3JcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHBhc3N3b3JkVmFsaWQgPSB2YWwgPT4ge1xyXG4gIGxldCBlcnJvcjtcclxuICBpZiAoIXZhbCkge1xyXG4gICAgZXJyb3IgPSAn0J/QvtC70LUg0L7QsdGP0LfQsNGC0LXQu9GM0L3QviDQtNC70Y8g0LfQsNC/0L7Qu9C90LXQvdC40Y8nXHJcbiAgfVxyXG4gIGlmICh2YWwgJiYgdmFsLmxlbmd0aCA8IDYpIHtcclxuICAgIGVycm9yID0gJ9C80LjQvdC40LzQsNC70YzQvdCw0Y8g0LTQu9C40L3QsCDQv9Cw0YDQvtC70Y8g0LTQvtC70LbQvdCwINCx0YvRgtGMINC90LUg0LzQtdC90LXQtSA2INGB0LjQvNCy0L7Qu9C+0LInXHJcbiAgfVxyXG4gIHJldHVybiBlcnJvcjtcclxufVxyXG5cclxuY29uc3QgY2hlY2tTdHJpbmdOYW1lID0gdmFsID0+IHtcclxuICBpZiAodmFsICYmIHZhbC5yZXBsYWNlKC9cXHMrJC8sICcnKS5zcGxpdCgvXFxXKy8pLmxlbmd0aCAgPDIpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9ZWxzZSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhY2NlcHRDaXJyaWxpYyA9IHZhbCA9PiB7XHJcbiAgdmFyIGZhbHN5ID0gL1thLXpBLVowLTlfXCIqL10vaS50ZXN0KHZhbClcclxuICBsZXQgZXJyb3IgPSAnJztcclxuICBsZXQgbGVuZ3RoID0gdmFsLnJlcGxhY2UoL1xccyskLywgJycpLnNwbGl0KC9cXFcrLykubGVuZ3RoO1xyXG4gIGlmICghdmFsKSB7XHJcbiAgICBlcnJvciA9ICfQn9C+0LvQtSDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+INC00LvRjyDQt9Cw0L/QvtC70L3QtdC90LjRjydcclxuICB9XHJcbiAgaWYgKHZhbCkge1xyXG4gICAgaWYoZmFsc3kgPT09dHJ1ZSkge1xyXG4gICAgICBlcnJvciA9ICfQktCy0LXQtNC40YLQtSDRgtC+0LvRjNC60L4g0L3QsCDQutC40YDRgNC40LvQuNGG0LUnXHJcbiAgICB9XHJcbiAgICBpZihmYWxzeT09IGZhbHNlICYmIHBhcnNlSW50KGxlbmd0aCk8Mikge1xyXG4gICAgICAvLyBlcnJvciA9ICdjaGVjayBlcnJvcidcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgaWYocGFyc2VJbnQobGVuZ3RoKTwyKSB7XHJcbiAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBcclxuICB9XHJcblxyXG4gIC8vIHJldHVybiBsZW5ndGggKyBgJHtmYWxzeX1gO1xyXG4gIHJldHVybiBlcnJvcjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBpaW5WYWxpZGF0aW9uID0gKHZhbCkgPT4ge1xyXG4gIGxldCBlcnJvciA9ICcnO1xyXG4gIHZhciBiMSA9IFtcclxuICAgIDEsXHJcbiAgICAyLFxyXG4gICAgMyxcclxuICAgIDQsXHJcbiAgICA1LFxyXG4gICAgNixcclxuICAgIDcsXHJcbiAgICA4LFxyXG4gICAgOSxcclxuICAgIDEwLFxyXG4gICAgMTFcclxuICBdO1xyXG4gIHZhciBiMiA9IFtcclxuICAgIDMsXHJcbiAgICA0LFxyXG4gICAgNSxcclxuICAgIDYsXHJcbiAgICA3LFxyXG4gICAgOCxcclxuICAgIDksXHJcbiAgICAxMCxcclxuICAgIDExLFxyXG4gICAgMSxcclxuICAgIDJcclxuICBdO1xyXG4gIHZhciBhID0gW107XHJcbiAgY29uc3QgdmFsdWUgPSB2YWxcclxuICAgID8gdmFsLnJlcGxhY2UoLyAvZywgXCJcIilcclxuICAgIDogJydcclxuICB2YXIgY29udHJvbGwgPSAwO1xyXG4gIGlmICghdmFsdWUpIHtcclxuICAgIGVycm9yID0gJ9Cf0L7Qu9C1INC+0LHRj9C30LDRgtC10LvRjNC90L4g0LTQu9GPINC30LDQv9C+0LvQvdC10L3QuNGPJ1xyXG4gIH1cclxuICBpZiAodmFsdWUgJiYgdmFsdWUubGVuZ3RoICE9PSAxMikge1xyXG4gICAgZXJyb3IgPSAn0J3QtdC/0YDQsNCy0LjQu9GM0L3Ri9C5INCY0JjQnSc7XHJcbiAgfVxyXG5cclxuICBpZiAodmFsdWUgJiYgdmFsdWUubGVuZ3RoID09PSAxMikge1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxMjsgaSsrKSB7XHJcbiAgICAgIGFbaV0gPSBwYXJzZUludCh2YWx1ZS5zdWJzdHJpbmcoaSwgaSArIDEpKTtcclxuICAgICAgaWYgKGkgPCAxMSkgXHJcbiAgICAgICAgY29udHJvbGwgKz0gYVtpXSAqIGIxW2ldO1xyXG4gICAgICB9XHJcbiAgICBjb250cm9sbCA9IGNvbnRyb2xsICUgMTE7XHJcbiAgICBpZiAoY29udHJvbGwgPT0gMTApIHtcclxuICAgICAgY29udHJvbGwgPSAwO1xyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDExOyBpKyspIFxyXG4gICAgICAgIGNvbnRyb2xsICs9IGFbaV0gKiBiMltpXTtcclxuICAgICAgY29udHJvbGwgPSBjb250cm9sbCAlIDExO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbnRyb2xsICE9IGFbMTFdKSB7XHJcbiAgICAgIGVycm9yID0gJ9Cd0LXQutC+0YDRgNC10LrRgtC90YvQuSDQmNCY0J0nO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGVycm9yO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFjY2VwdENpcnJpbGljT25seSA9IHZhbCA9PiB7XHJcbiAgdmFyIGZhbHN5ID0gL1thLXpBLVowLTlfXCIqL10vaS50ZXN0KHZhbClcclxuICBsZXQgZXJyb3I7XHJcbiAgaWYgKHZhbCkge1xyXG4gICAgaWYgKGZhbHN5ID09PSB0cnVlKSB7XHJcbiAgICAgIGVycm9yID0gJ9Cd0YPQttC90L4g0LLQstC+0LTQuNGC0Ywg0YLQvtC70YzQutC+INC90LAg0LrQuNGA0LjQu9C70LjRhtC1J1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gZXJyb3I7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9