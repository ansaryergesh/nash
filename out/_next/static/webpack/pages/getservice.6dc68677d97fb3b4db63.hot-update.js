self["webpackHotUpdate_N_E"]("pages/getservice",{

/***/ "./components/Masks/PhoneMask.js":
/*!***************************************!*\
  !*** ./components/Masks/PhoneMask.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_job_nashcompany_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var E_job_nashcompany_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var E_job_nashcompany_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var E_job_nashcompany_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var E_job_nashcompany_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var E_job_nashcompany_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-input-mask */ "./node_modules/react-input-mask/index.js");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* module decorator */ module = __webpack_require__.hmd(module);








var _jsxFileName = "E:\\job\\nashcompany\\components\\Masks\\PhoneMask.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var normaliseNumber = function normaliseNumber(value) {
  return value.replace(/[^0-9]/g, "");
};

var getCreditCardMask = function getCreditCardMask(value) {
  var defaultMask = "+7(999)-999-9999";
  var ruleSet = [{
    // Visa Electron
    pattern: /^(4026|417500|4405|4508|4844|4913|4917)/,
    mask: "9999 9999 9999 9999"
  }, {
    // Visa (incl. VPay)
    pattern: /^4/,
    mask: "9999 9999 9999 9999999"
  }, {
    // American Express
    pattern: /^(34|37)/,
    mask: "9999 999999 99999"
  }, {
    // maestro 16+
    pattern: /^(50[0-1]{4}|5(6|8)[0-9]{4}|6[0-1]{5})[0-9]{10}/,
    mask: "9999 9999 9999 9999 999"
  }, {
    // Mastercard
    pattern: /^5[1-5]/,
    mask: "9999 9999 9999 9999"
  } // { // China UnionPay (18)
  //   pattern: /^62([0-9]{14,})/,
  //   mask: '999999 9999999999999'
  // },
  ];

  if (!value) {
    return defaultMask;
  }

  var rule = ruleSet.find(function (_ref) {
    var pattern = _ref.pattern,
        mask = _ref.mask;
    return pattern.test(normaliseNumber(value));
  });
  return rule && rule.mask || defaultMask;
};

var PhoneMask = /*#__PURE__*/function (_React$Component) {
  (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(PhoneMask, _React$Component);

  var _super = _createSuper(PhoneMask);

  function PhoneMask() {
    var _this;

    (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, PhoneMask);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this), "state", {
      value: "",
      mask: getCreditCardMask()
    });

    (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this), "onChange", function (event) {
      var value = event.target.value;

      _this.setState({
        mask: getCreditCardMask(value),
        value: value
      });
    });

    return _this;
  }

  (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(PhoneMask, [{
    key: "render",
    value: function render() {
      var props = this.props;
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_input_mask__WEBPACK_IMPORTED_MODULE_8___default()), _objectSpread(_objectSpread(_objectSpread({
        maskChar: null
      }, props), this.state), {}, {
        onChange: this.onChange,
        className: "my-input"
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 7
      }, this);
    }
  }]);

  return PhoneMask;
}((react__WEBPACK_IMPORTED_MODULE_9___default().Component));

/* harmony default export */ __webpack_exports__["default"] = (PhoneMask);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYXNrcy9QaG9uZU1hc2suanMiXSwibmFtZXMiOlsibm9ybWFsaXNlTnVtYmVyIiwidmFsdWUiLCJyZXBsYWNlIiwiZ2V0Q3JlZGl0Q2FyZE1hc2siLCJkZWZhdWx0TWFzayIsInJ1bGVTZXQiLCJwYXR0ZXJuIiwibWFzayIsInJ1bGUiLCJmaW5kIiwidGVzdCIsIlBob25lTWFzayIsImV2ZW50IiwidGFyZ2V0Iiwic2V0U3RhdGUiLCJwcm9wcyIsInN0YXRlIiwib25DaGFuZ2UiLCJSZWFjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFDQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLE9BQU4sQ0FBYyxTQUFkLEVBQXlCLEVBQXpCLENBQUo7QUFBQSxDQUE3Qjs7QUFDQSxJQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUFGLEtBQUssRUFBSTtBQUNqQyxNQUFNRyxXQUFXLEdBQUcsa0JBQXBCO0FBRUEsTUFBTUMsT0FBTyxHQUFHLENBQ2Q7QUFDRTtBQUNBQyxXQUFPLEVBQUUseUNBRlg7QUFHRUMsUUFBSSxFQUFFO0FBSFIsR0FEYyxFQU1kO0FBQ0U7QUFDQUQsV0FBTyxFQUFFLElBRlg7QUFHRUMsUUFBSSxFQUFFO0FBSFIsR0FOYyxFQVdkO0FBQ0U7QUFDQUQsV0FBTyxFQUFFLFVBRlg7QUFHRUMsUUFBSSxFQUFFO0FBSFIsR0FYYyxFQWdCZDtBQUNFO0FBQ0FELFdBQU8sRUFBRSxpREFGWDtBQUdFQyxRQUFJLEVBQUU7QUFIUixHQWhCYyxFQXFCZDtBQUNFO0FBQ0FELFdBQU8sRUFBRSxTQUZYO0FBR0VDLFFBQUksRUFBRTtBQUhSLEdBckJjLENBMEJkO0FBQ0E7QUFDQTtBQUNBO0FBN0JjLEdBQWhCOztBQWdDQSxNQUFJLENBQUNOLEtBQUwsRUFBWTtBQUNWLFdBQU9HLFdBQVA7QUFDRDs7QUFFRCxNQUFNSSxJQUFJLEdBQUdILE9BQU8sQ0FBQ0ksSUFBUixDQUFhLGdCQUF1QjtBQUFBLFFBQXBCSCxPQUFvQixRQUFwQkEsT0FBb0I7QUFBQSxRQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDL0MsV0FBT0QsT0FBTyxDQUFDSSxJQUFSLENBQWFWLGVBQWUsQ0FBQ0MsS0FBRCxDQUE1QixDQUFQO0FBQ0QsR0FGWSxDQUFiO0FBSUEsU0FBUU8sSUFBSSxJQUFJQSxJQUFJLENBQUNELElBQWQsSUFBdUJILFdBQTlCO0FBQ0QsQ0E1Q0Q7O0lBOENNTyxTOzs7Ozs7Ozs7Ozs7Ozs7OzhQQUNJO0FBQ05WLFdBQUssRUFBRSxFQUREO0FBRU5NLFVBQUksRUFBRUosaUJBQWlCO0FBRmpCLEs7O2lRQUtHLFVBQUFTLEtBQUssRUFBSTtBQUNsQixVQUFJWCxLQUFLLEdBQUdXLEtBQUssQ0FBQ0MsTUFBTixDQUFhWixLQUF6Qjs7QUFFQSxZQUFLYSxRQUFMLENBQWM7QUFDWlAsWUFBSSxFQUFFSixpQkFBaUIsQ0FBQ0YsS0FBRCxDQURYO0FBRVpBLGFBQUssRUFBRUE7QUFGSyxPQUFkO0FBSUQsSzs7Ozs7Ozs2QkFFUTtBQUFBLFVBQ0NjLEtBREQsR0FDVyxJQURYLENBQ0NBLEtBREQ7QUFFUCwwQkFDRSw4REFBQyx5REFBRDtBQUNFLGdCQUFRLEVBQUU7QUFEWixTQUVNQSxLQUZOLEdBR00sS0FBS0MsS0FIWDtBQUlFLGdCQUFRLEVBQUUsS0FBS0MsUUFKakI7QUFLRSxpQkFBUyxFQUFDO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBU0Q7Ozs7RUExQnFCQyx3RDs7QUE2QnhCLCtEQUFlUCxTQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2dldHNlcnZpY2UuNmRjNjg2NzdkOTdmYjNiNGRiNjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbnB1dE1hc2sgZnJvbSBcInJlYWN0LWlucHV0LW1hc2tcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5jb25zdCBub3JtYWxpc2VOdW1iZXIgPSB2YWx1ZSA9PiB2YWx1ZS5yZXBsYWNlKC9bXjAtOV0vZywgXCJcIik7XHJcbmNvbnN0IGdldENyZWRpdENhcmRNYXNrID0gdmFsdWUgPT4ge1xyXG4gIGNvbnN0IGRlZmF1bHRNYXNrID0gXCIrNyg5OTkpLTk5OS05OTk5XCI7XHJcblxyXG4gIGNvbnN0IHJ1bGVTZXQgPSBbXHJcbiAgICB7XHJcbiAgICAgIC8vIFZpc2EgRWxlY3Ryb25cclxuICAgICAgcGF0dGVybjogL14oNDAyNnw0MTc1MDB8NDQwNXw0NTA4fDQ4NDR8NDkxM3w0OTE3KS8sXHJcbiAgICAgIG1hc2s6IFwiOTk5OSA5OTk5IDk5OTkgOTk5OVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAvLyBWaXNhIChpbmNsLiBWUGF5KVxyXG4gICAgICBwYXR0ZXJuOiAvXjQvLFxyXG4gICAgICBtYXNrOiBcIjk5OTkgOTk5OSA5OTk5IDk5OTk5OTlcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgLy8gQW1lcmljYW4gRXhwcmVzc1xyXG4gICAgICBwYXR0ZXJuOiAvXigzNHwzNykvLFxyXG4gICAgICBtYXNrOiBcIjk5OTkgOTk5OTk5IDk5OTk5XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIC8vIG1hZXN0cm8gMTYrXHJcbiAgICAgIHBhdHRlcm46IC9eKDUwWzAtMV17NH18NSg2fDgpWzAtOV17NH18NlswLTFdezV9KVswLTldezEwfS8sXHJcbiAgICAgIG1hc2s6IFwiOTk5OSA5OTk5IDk5OTkgOTk5OSA5OTlcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgLy8gTWFzdGVyY2FyZFxyXG4gICAgICBwYXR0ZXJuOiAvXjVbMS01XS8sXHJcbiAgICAgIG1hc2s6IFwiOTk5OSA5OTk5IDk5OTkgOTk5OVwiXHJcbiAgICB9XHJcbiAgICAvLyB7IC8vIENoaW5hIFVuaW9uUGF5ICgxOClcclxuICAgIC8vICAgcGF0dGVybjogL142MihbMC05XXsxNCx9KS8sXHJcbiAgICAvLyAgIG1hc2s6ICc5OTk5OTkgOTk5OTk5OTk5OTk5OSdcclxuICAgIC8vIH0sXHJcbiAgXTtcclxuXHJcbiAgaWYgKCF2YWx1ZSkge1xyXG4gICAgcmV0dXJuIGRlZmF1bHRNYXNrO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcnVsZSA9IHJ1bGVTZXQuZmluZCgoeyBwYXR0ZXJuLCBtYXNrIH0pID0+IHtcclxuICAgIHJldHVybiBwYXR0ZXJuLnRlc3Qobm9ybWFsaXNlTnVtYmVyKHZhbHVlKSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAocnVsZSAmJiBydWxlLm1hc2spIHx8IGRlZmF1bHRNYXNrO1xyXG59O1xyXG5cclxuY2xhc3MgUGhvbmVNYXNrIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgbWFzazogZ2V0Q3JlZGl0Q2FyZE1hc2soKVxyXG4gIH07XHJcblxyXG4gIG9uQ2hhbmdlID0gZXZlbnQgPT4ge1xyXG4gICAgdmFyIHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBtYXNrOiBnZXRDcmVkaXRDYXJkTWFzayh2YWx1ZSksXHJcbiAgICAgIHZhbHVlOiB2YWx1ZVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBwcm9wcyB9ID0gdGhpcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxJbnB1dE1hc2tcclxuICAgICAgICBtYXNrQ2hhcj17bnVsbH1cclxuICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgICAgey4uLnRoaXMuc3RhdGV9XHJcbiAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XHJcbiAgICAgICAgY2xhc3NOYW1lPSdteS1pbnB1dCdcclxuICAgICAgLz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQaG9uZU1hc2siXSwic291cmNlUm9vdCI6IiJ9