self["webpackHotUpdate_N_E"]("pages/getservice",{

/***/ "./components/getservice/SecondStep.js":
/*!*********************************************!*\
  !*** ./components/getservice/SecondStep.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defaults_fizservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../defaults/fizservice */ "./defaults/fizservice.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "E:\\job\\nashcompany\\components\\getservice\\SecondStep.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var SecondStep = function SecondStep() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    id: js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get('lead_id'),
    token: js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get('token'),
    description: '',
    sphere: '1',
    amount: ''
  }),
      formData = _useState[0],
      setFormData = _useState[1];

  var _onChange = function onChange(e) {
    var name = e.target.name;
    setFormData(_objectSpread(_objectSpread({}, formData), {}, (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, name, e.target.value)));
  };

  var stepSecond = function stepSecond(e) {
    e.preventDefault();
    axios__WEBPACK_IMPORTED_MODULE_5___default().get("".concat("https://crediter.kz/api", "/stepTwo"), {
      params: {
        id: formData.id,
        token: formData.token,
        description: formData.description,
        sphere: formData.sphere,
        amount: formData.amount
      }
    }).then(function (res) {
      // console.log(res)
      if (res.data.success) {
        next_router__WEBPACK_IMPORTED_MODULE_6___default().push('/getservice?step=3');
        js_cookie__WEBPACK_IMPORTED_MODULE_4___default().set('step', 3);
      }

      if (!res.data.success) {}
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "form_register",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      onSubmit: function onSubmit(e) {
        return stepSecond(e);
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
        onChange: function onChange(e) {
          return _onChange(e);
        },
        value: formData.sphere,
        name: "sphere",
        className: "form_select",
        children: _defaults_fizservice__WEBPACK_IMPORTED_MODULE_3__.fizservice.map(function (fiz, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            value: index + 1,
            children: fiz.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("textarea", {
        name: "description",
        value: formData.description,
        onChange: function onChange(e) {
          return _onChange(e);
        },
        placeholder: "\u041E\u043F\u0438\u0448\u0438\u0442\u0435 \u0432\u0430\u0448\u0443 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044E"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "number",
        onChange: function onChange(e) {
          return _onChange(e);
        },
        value: formData.amount,
        name: "amount",
        placeholder: "\u0421\u0443\u043C\u043C\u0430 \u0438\u0441\u043A\u0430"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "form_buttons",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          className: "transparentbtn button",
          type: "button",
          value: "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043D\u0430\u0437\u0430\u0434"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          className: "button",
          type: "submit",
          value: "\u0414\u0430\u043B\u0435\u0435"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, _this);
};

_s(SecondStep, "by+HfneIS9PdVFICxLnh9v5Lpls=");

_c = SecondStep;
/* harmony default export */ __webpack_exports__["default"] = (SecondStep);

var _c;

$RefreshReg$(_c, "SecondStep");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRzZXJ2aWNlL1NlY29uZFN0ZXAuanMiXSwibmFtZXMiOlsiU2Vjb25kU3RlcCIsInVzZVN0YXRlIiwiaWQiLCJjb29raWUiLCJ0b2tlbiIsImRlc2NyaXB0aW9uIiwic3BoZXJlIiwiYW1vdW50IiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsIm9uQ2hhbmdlIiwiZSIsIm5hbWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInN0ZXBTZWNvbmQiLCJwcmV2ZW50RGVmYXVsdCIsImF4aW9zIiwicHJvY2VzcyIsInBhcmFtcyIsInRoZW4iLCJyZXMiLCJkYXRhIiwic3VjY2VzcyIsIlJvdXRlciIsImZpenNlcnZpY2UiLCJmaXoiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUFBOztBQUFBLGtCQUNRQywrQ0FBUSxDQUFDO0FBQ3RDQyxNQUFFLEVBQUVDLG9EQUFBLENBQVcsU0FBWCxDQURrQztBQUV0Q0MsU0FBSyxFQUFFRCxvREFBQSxDQUFXLE9BQVgsQ0FGK0I7QUFHdENFLGVBQVcsRUFBRSxFQUh5QjtBQUl0Q0MsVUFBTSxFQUFFLEdBSjhCO0FBS3RDQyxVQUFNLEVBQUU7QUFMOEIsR0FBRCxDQURoQjtBQUFBLE1BQ2hCQyxRQURnQjtBQUFBLE1BQ1BDLFdBRE87O0FBUXZCLE1BQU1DLFNBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUFDLENBQUMsRUFBSTtBQUNwQixRQUFNQyxJQUFJLEdBQUdELENBQUMsQ0FBQ0UsTUFBRixDQUFTRCxJQUF0QjtBQUNBSCxlQUFXLGlDQUFLRCxRQUFMLDRIQUFnQkksSUFBaEIsRUFBdUJELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFoQyxHQUFYO0FBQ0QsR0FIRDs7QUFLQSxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDSixDQUFELEVBQU87QUFDeEJBLEtBQUMsQ0FBQ0ssY0FBRjtBQUVBQyxvREFBQSxXQUFhQyx5QkFBYixlQUE2QztBQUFDQyxZQUFNLEVBQUU7QUFDcERqQixVQUFFLEVBQUVNLFFBQVEsQ0FBQ04sRUFEdUM7QUFFcERFLGFBQUssRUFBRUksUUFBUSxDQUFDSixLQUZvQztBQUdwREMsbUJBQVcsRUFBRUcsUUFBUSxDQUFDSCxXQUg4QjtBQUlwREMsY0FBTSxFQUFFRSxRQUFRLENBQUNGLE1BSm1DO0FBS3BEQyxjQUFNLEVBQUVDLFFBQVEsQ0FBQ0Q7QUFMbUM7QUFBVCxLQUE3QyxFQU9HYSxJQVBILENBT1EsVUFBQUMsR0FBRyxFQUFHO0FBQ1Y7QUFDQSxVQUFHQSxHQUFHLENBQUNDLElBQUosQ0FBU0MsT0FBWixFQUFxQjtBQUNuQkMsK0RBQUEsQ0FBWSxvQkFBWjtBQUNBckIsNERBQUEsQ0FBVyxNQUFYLEVBQWtCLENBQWxCO0FBQ0Q7O0FBQ0QsVUFBRyxDQUFDa0IsR0FBRyxDQUFDQyxJQUFKLENBQVNDLE9BQWIsRUFBc0IsQ0FFckI7QUFDRixLQWhCSDtBQWlCRCxHQXBCRDs7QUFxQkEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBLDJCQUNFO0FBQU0sY0FBUSxFQUFFLGtCQUFDWixDQUFEO0FBQUEsZUFBT0ksVUFBVSxDQUFDSixDQUFELENBQWpCO0FBQUEsT0FBaEI7QUFBQSw4QkFDRTtBQUFRLGdCQUFRLEVBQUUsa0JBQUFBLENBQUM7QUFBQSxpQkFBR0QsU0FBUSxDQUFDQyxDQUFELENBQVg7QUFBQSxTQUFuQjtBQUFtQyxhQUFLLEVBQUVILFFBQVEsQ0FBQ0YsTUFBbkQ7QUFBMkQsWUFBSSxFQUFDLFFBQWhFO0FBQXlFLGlCQUFTLEVBQUMsYUFBbkY7QUFBQSxrQkFDR21CLGdFQUFBLENBQWUsVUFBQ0MsR0FBRCxFQUFLQyxLQUFMO0FBQUEsOEJBQ2Q7QUFBUSxpQkFBSyxFQUFFQSxLQUFLLEdBQUMsQ0FBckI7QUFBQSxzQkFBeUJELEdBQUcsQ0FBQ2Q7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEYztBQUFBLFNBQWY7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFNRTtBQUFVLFlBQUksRUFBQyxhQUFmO0FBQTZCLGFBQUssRUFBRUosUUFBUSxDQUFDSCxXQUE3QztBQUEwRCxnQkFBUSxFQUFFLGtCQUFBTSxDQUFDO0FBQUEsaUJBQUVELFNBQVEsQ0FBQ0MsQ0FBRCxDQUFWO0FBQUEsU0FBckU7QUFBb0YsbUJBQVcsRUFBQztBQUFoRztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkYsZUFPRTtBQUFPLFlBQUksRUFBQyxRQUFaO0FBQXFCLGdCQUFRLEVBQUUsa0JBQUFBLENBQUM7QUFBQSxpQkFBRUQsU0FBUSxDQUFDQyxDQUFELENBQVY7QUFBQSxTQUFoQztBQUErQyxhQUFLLEVBQUVILFFBQVEsQ0FBQ0QsTUFBL0Q7QUFBdUUsWUFBSSxFQUFDLFFBQTVFO0FBQXFGLG1CQUFXLEVBQUM7QUFBakc7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBGLGVBU0U7QUFBSyxpQkFBUyxFQUFDLGNBQWY7QUFBQSxnQ0FDRTtBQUFPLG1CQUFTLEVBQUMsdUJBQWpCO0FBQXlDLGNBQUksRUFBQyxRQUE5QztBQUF1RCxlQUFLLEVBQUM7QUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQVEsbUJBQVMsRUFBQyxRQUFsQjtBQUEyQixjQUFJLEVBQUMsUUFBaEM7QUFBeUMsZUFBSyxFQUFDO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBa0JELENBcEREOztHQUFNUCxVOztLQUFBQSxVO0FBc0ROLCtEQUFlQSxVQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2dldHNlcnZpY2UuYmMwMDc3NjhkODFkODk3ZDkxODcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgZml6c2VydmljZSB9IGZyb20gXCIuLi8uLi9kZWZhdWx0cy9maXpzZXJ2aWNlXCJcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCB7Rm9ybWlrLCBGb3JtLCBGaWVsZH0gZnJvbSAnZm9ybWlrJztcclxuY29uc3QgU2Vjb25kU3RlcCA9ICgpID0+IHtcclxuICBjb25zdCBbZm9ybURhdGEsc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgaWQ6IGNvb2tpZS5nZXQoJ2xlYWRfaWQnKSxcclxuICAgIHRva2VuOiBjb29raWUuZ2V0KCd0b2tlbicpLFxyXG4gICAgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgc3BoZXJlOiAnMScsXHJcbiAgICBhbW91bnQ6ICcnLFxyXG4gIH0pXHJcbiAgY29uc3Qgb25DaGFuZ2UgPSBlID0+IHtcclxuICAgIGNvbnN0IG5hbWUgPSBlLnRhcmdldC5uYW1lXHJcbiAgICBzZXRGb3JtRGF0YSh7Li4uZm9ybURhdGEsIFtuYW1lXTogZS50YXJnZXQudmFsdWV9KVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgc3RlcFNlY29uZCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L3N0ZXBUd29gLCB7cGFyYW1zOiB7XHJcbiAgICAgIGlkOiBmb3JtRGF0YS5pZCxcclxuICAgICAgdG9rZW46IGZvcm1EYXRhLnRva2VuLFxyXG4gICAgICBkZXNjcmlwdGlvbjogZm9ybURhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgIHNwaGVyZTogZm9ybURhdGEuc3BoZXJlLFxyXG4gICAgICBhbW91bnQ6IGZvcm1EYXRhLmFtb3VudFxyXG4gICAgfX0pXHJcbiAgICAgIC50aGVuKHJlcz0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgaWYocmVzLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgUm91dGVyLnB1c2goJy9nZXRzZXJ2aWNlP3N0ZXA9MycpXHJcbiAgICAgICAgICBjb29raWUuc2V0KCdzdGVwJywzKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZighcmVzLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gIH1cclxuICByZXR1cm4oXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybV9yZWdpc3Rlcic+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSkgPT4gc3RlcFNlY29uZChlKX0+XHJcbiAgICAgICAgPHNlbGVjdCBvbkNoYW5nZT17ZT0+IG9uQ2hhbmdlKGUpfSB2YWx1ZT17Zm9ybURhdGEuc3BoZXJlfSBuYW1lPSdzcGhlcmUnIGNsYXNzTmFtZT0nZm9ybV9zZWxlY3QnPlxyXG4gICAgICAgICAge2ZpenNlcnZpY2UubWFwKChmaXosaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17aW5kZXgrMX0+e2Zpei5uYW1lfTwvb3B0aW9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPHRleHRhcmVhIG5hbWU9J2Rlc2NyaXB0aW9uJyB2YWx1ZT17Zm9ybURhdGEuZGVzY3JpcHRpb259IG9uQ2hhbmdlPXtlPT5vbkNoYW5nZShlKX0gcGxhY2Vob2xkZXI9J9Ce0L/QuNGI0LjRgtC1INCy0LDRiNGDINGB0LjRgtGD0LDRhtC40Y4nPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9J251bWJlcicgb25DaGFuZ2U9e2U9Pm9uQ2hhbmdlKGUpfSB2YWx1ZT17Zm9ybURhdGEuYW1vdW50fSBuYW1lPSdhbW91bnQnIHBsYWNlaG9sZGVyPSfQodGD0LzQvNCwINC40YHQutCwJyAvPlxyXG4gICAgICAgIHsvKiA8aW5wdXQgdHlwZT0nZmlsZScgLz4gKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm1fYnV0dG9ucyc+XHJcbiAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSd0cmFuc3BhcmVudGJ0biBidXR0b24nIHR5cGU9J2J1dHRvbicgdmFsdWU9J9CS0LXRgNC90YPRgtGM0YHRjyDQvdCw0LfQsNC0Jy8+XHJcbiAgICAgICAgICA8aW5wdXQgIGNsYXNzTmFtZT0nYnV0dG9uJyB0eXBlPSdzdWJtaXQnIHZhbHVlPSfQlNCw0LvQtdC1JyAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlY29uZFN0ZXAiXSwic291cmNlUm9vdCI6IiJ9