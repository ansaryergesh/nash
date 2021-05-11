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
/* harmony export */   "phoneValidation": function() { return /* binding */ phoneValidation; }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGVmYXVsdHMvdmFsaWRhdGlvbnMuanMiXSwibmFtZXMiOlsiZW1haWxWYWxpZCIsInZhbCIsImVycm9yIiwiZW1haWx2YWxpZCIsInRlc3QiLCJyZXF1aXJlZCIsInBob25lQ2hlY2siLCJQSE9ORV9PUEVSQVRPUlMiLCJpZCIsInBob25lIiwiU3RyaW5nIiwicmVwbGFjZSIsImNvZGUiLCJtYXRjaCIsImxlbmd0aCIsInBob25lX251bWJlciIsInBob25lX29wZXJhdG9yIiwiZmlsdGVyIiwiaXRlbSIsInBob25lVmFsaWRhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFBQyxHQUFHLEVBQUk7QUFDL0IsTUFBSUMsS0FBSjs7QUFDQSxNQUFJLENBQUNELEdBQUwsRUFBVTtBQUNSQyxTQUFLLEdBQUcsdUNBQVI7QUFDRDs7QUFDRCxNQUFJRCxHQUFKLEVBQVM7QUFDUCxRQUFJRSxVQUFVLEdBQUcsNENBQTRDQyxJQUE1QyxDQUFpREgsR0FBakQsQ0FBakI7O0FBQ0EsUUFBSSxDQUFDRSxVQUFMLEVBQWlCO0FBQ2ZELFdBQUssR0FBRyxvQkFBUjtBQUNEO0FBQ0Y7O0FBQ0QsU0FBT0EsS0FBUDtBQUNELENBWk07QUFjQSxJQUFNRyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFBSixHQUFHLEVBQUk7QUFDN0IsTUFBSUMsS0FBSjs7QUFDQSxNQUFJLENBQUNELEdBQUwsRUFBVTtBQUNSQyxTQUFLLEdBQUcsaUNBQVI7QUFDRDs7QUFDRCxTQUFPQSxLQUFQO0FBQ0QsQ0FOTTtBQVFBLElBQU1JLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNMLEdBQUQsRUFBUztBQUNqQyxNQUFJTSxlQUFlLEdBQUcsQ0FDbEI7QUFBQ0MsTUFBRSxFQUFFO0FBQUwsR0FEa0IsRUFFbEI7QUFBQ0EsTUFBRSxFQUFFO0FBQUwsR0FGa0IsRUFHbEI7QUFBQ0EsTUFBRSxFQUFFO0FBQUwsR0FIa0IsRUFJbEI7QUFBQ0EsTUFBRSxFQUFFO0FBQUwsR0FKa0IsRUFLbEI7QUFBQ0EsTUFBRSxFQUFFO0FBQUwsR0FMa0IsRUFNbEI7QUFBQ0EsTUFBRSxFQUFFO0FBQUwsR0FOa0IsRUFPbEI7QUFBQ0EsTUFBRSxFQUFFO0FBQUwsR0FQa0IsRUFRbEI7QUFBQ0EsTUFBRSxFQUFFO0FBQUwsR0FSa0IsRUFTbEI7QUFBQ0EsTUFBRSxFQUFFO0FBQUwsR0FUa0IsRUFVbEI7QUFBQ0EsTUFBRSxFQUFFO0FBQUwsR0FWa0IsRUFXbEI7QUFBQ0EsTUFBRSxFQUFFO0FBQUwsR0FYa0IsRUFZbEI7QUFBQ0EsTUFBRSxFQUFFO0FBQUwsR0Faa0IsRUFhbEI7QUFBQ0EsTUFBRSxFQUFFO0FBQUwsR0Fia0IsQ0FBdEI7QUFlQSxNQUFJQyxLQUFLLEdBQUdDLE1BQU0sQ0FBQ1QsR0FBRCxDQUFOLENBQVlVLE9BQVosQ0FBb0IsWUFBcEIsRUFBa0MsRUFBbEMsQ0FBWjtBQUFBLE1BQ0lDLElBQUksR0FBR0gsS0FBSyxDQUFDSSxLQUFOLENBQVkseUJBQVosQ0FEWDs7QUFFQSxNQUFJLENBQUNELElBQUQsSUFBU0gsS0FBSyxDQUFDSyxNQUFOLEtBQWlCLEVBQTlCLEVBQWtDO0FBQzlCLFdBQU8sS0FBUDtBQUNIOztBQUVELE1BQUlDLFlBQVksR0FBR0gsSUFBSSxDQUFDLENBQUQsQ0FBdkI7QUFDQSxNQUFJSSxjQUFjLEdBQUdULGVBQWUsQ0FBQ1UsTUFBaEIsQ0FBdUIsVUFBU0MsSUFBVCxFQUFlO0FBQ3ZELFdBQU9BLElBQUksQ0FBQ1YsRUFBTCxJQUFXTyxZQUFsQjtBQUNILEdBRm9CLENBQXJCOztBQUlBLE1BQUdDLGNBQWMsQ0FBQ0YsTUFBZixHQUF1QixDQUExQixFQUE0QjtBQUN4QixXQUFPLElBQVA7QUFDSCxHQUZELE1BRUs7QUFDRCxXQUFPLEtBQVA7QUFDSDtBQUNGLENBaENNO0FBbUNBLElBQU1LLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ2xCLEdBQUQsRUFBUztBQUN0QyxNQUFJQyxLQUFKOztBQUNBLE1BQUdJLFVBQVUsQ0FBQ0wsR0FBRCxDQUFWLEtBQW9CLElBQXZCLEVBQTZCO0FBQ3pCQyxTQUFLLEdBQUcsRUFBUjtBQUNILEdBRkQsTUFFTTtBQUNGQSxTQUFLLEdBQUcsZ0NBQVI7QUFDSDs7QUFDRCxTQUFPQSxLQUFQO0FBQ0QsQ0FSTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9nZXRzZXJ2aWNlLmE1MTk3YzIyZDZkNDlkMWJjMWUzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZW1haWxWYWxpZCA9IHZhbCA9PiB7XHJcbiAgbGV0IGVycm9yO1xyXG4gIGlmICghdmFsKSB7XHJcbiAgICBlcnJvciA9ICfQn9C+0LvQtSBFbWFpbCDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+INC00LvRjyDQt9Cw0L/QvtC70L3QtdC90LjRjydcclxuICB9XHJcbiAgaWYgKHZhbCkge1xyXG4gICAgbGV0IGVtYWlsdmFsaWQgPSAvXltBLVowLTkuXyUrLV0rQFtBLVowLTkuLV0rXFwuW0EtWl17Miw0fSQvaS50ZXN0KHZhbCk7XHJcbiAgICBpZiAoIWVtYWlsdmFsaWQpIHtcclxuICAgICAgZXJyb3IgPSAn0J3QtdC/0YDQsNCy0LjQu9GM0L3Ri9C5IGVtYWlsJ1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gZXJyb3JcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlcXVpcmVkID0gdmFsID0+IHtcclxuICBsZXQgZXJyb3I7XHJcbiAgaWYgKCF2YWwpIHtcclxuICAgIGVycm9yID0gJ9Cf0L7Qu9C1INC+0LHRj9C30LDRgtC10LvRjNC90L4g0LTQu9GPINC30LDQv9C+0LvQvdC10L3QuNGPJ1xyXG4gIH1cclxuICByZXR1cm4gZXJyb3JcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHBob25lQ2hlY2sgPSAodmFsKSA9PiB7XHJcbiAgdmFyIFBIT05FX09QRVJBVE9SUyA9IFtcclxuICAgICAge2lkOiAnNzcwMCd9LFxyXG4gICAgICB7aWQ6ICc3NzAxJ30sXHJcbiAgICAgIHtpZDogJzc3MDInfSxcclxuICAgICAge2lkOiAnNzcwNSd9LFxyXG4gICAgICB7aWQ6ICc3NzA2J30sXHJcbiAgICAgIHtpZDogJzc3MDcnfSxcclxuICAgICAge2lkOiAnNzcwOCd9LFxyXG4gICAgICB7aWQ6ICc3NzQ3J30sXHJcbiAgICAgIHtpZDogJzc3NzEnfSxcclxuICAgICAge2lkOiAnNzc3NSd9LFxyXG4gICAgICB7aWQ6ICc3Nzc2J30sXHJcbiAgICAgIHtpZDogJzc3NzcnfSxcclxuICAgICAge2lkOiAnNzc3OCd9LFxyXG4gIF07XHJcbiAgdmFyIHBob25lID0gU3RyaW5nKHZhbCkucmVwbGFjZSgvW15BLVowLTldL2csICcnKSxcclxuICAgICAgY29kZSA9IHBob25lLm1hdGNoKC9eKFxcZHs0fSkoXFxkezN9KShcXGR7NH0pJC8pO1xyXG4gIGlmICghY29kZSB8fCBwaG9uZS5sZW5ndGggIT09IDExKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuXHJcbiAgdmFyIHBob25lX251bWJlciA9IGNvZGVbMV07XHJcbiAgdmFyIHBob25lX29wZXJhdG9yID0gUEhPTkVfT1BFUkFUT1JTLmZpbHRlcihmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgIHJldHVybiBpdGVtLmlkID09IHBob25lX251bWJlclxyXG4gIH0pO1xyXG5cclxuICBpZihwaG9uZV9vcGVyYXRvci5sZW5ndGggPjApe1xyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gIH1lbHNle1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHBob25lVmFsaWRhdGlvbiA9ICh2YWwpID0+IHtcclxuICBsZXQgZXJyb3JcclxuICBpZihwaG9uZUNoZWNrKHZhbCkgPT09IHRydWUpIHtcclxuICAgICAgZXJyb3IgPSAnJ1xyXG4gIH1lbHNlIHtcclxuICAgICAgZXJyb3IgPSAn0J3QtdGCINGB0L7QvtGC0LLQtdGC0YHRgtCy0YPRjtGJ0LXQs9C+INC+0L/QtdGA0LDRgtC+0YDQsCdcclxuICB9XHJcbiAgcmV0dXJuIGVycm9yXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==