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
      var field = this.field;
      var form = this.form;
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_input_mask__WEBPACK_IMPORTED_MODULE_8___default()), _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({
        maskChar: null,
        name: "phone"
      }, props), this.state), {}, {
        onChange: this.onChange
      }, field), form), {}, {
        className: "my-input"
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYXNrcy9QaG9uZU1hc2suanMiXSwibmFtZXMiOlsibm9ybWFsaXNlTnVtYmVyIiwidmFsdWUiLCJyZXBsYWNlIiwiZ2V0Q3JlZGl0Q2FyZE1hc2siLCJkZWZhdWx0TWFzayIsInJ1bGVTZXQiLCJwYXR0ZXJuIiwibWFzayIsInJ1bGUiLCJmaW5kIiwidGVzdCIsIlBob25lTWFzayIsImV2ZW50IiwidGFyZ2V0Iiwic2V0U3RhdGUiLCJwcm9wcyIsImZpZWxkIiwiZm9ybSIsInN0YXRlIiwib25DaGFuZ2UiLCJSZWFjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFDQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLE9BQU4sQ0FBYyxTQUFkLEVBQXlCLEVBQXpCLENBQUo7QUFBQSxDQUE3Qjs7QUFDQSxJQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUFGLEtBQUssRUFBSTtBQUNqQyxNQUFNRyxXQUFXLEdBQUcsa0JBQXBCO0FBRUEsTUFBTUMsT0FBTyxHQUFHLENBQ2Q7QUFDRTtBQUNBQyxXQUFPLEVBQUUseUNBRlg7QUFHRUMsUUFBSSxFQUFFO0FBSFIsR0FEYyxFQU1kO0FBQ0U7QUFDQUQsV0FBTyxFQUFFLElBRlg7QUFHRUMsUUFBSSxFQUFFO0FBSFIsR0FOYyxFQVdkO0FBQ0U7QUFDQUQsV0FBTyxFQUFFLFVBRlg7QUFHRUMsUUFBSSxFQUFFO0FBSFIsR0FYYyxFQWdCZDtBQUNFO0FBQ0FELFdBQU8sRUFBRSxpREFGWDtBQUdFQyxRQUFJLEVBQUU7QUFIUixHQWhCYyxFQXFCZDtBQUNFO0FBQ0FELFdBQU8sRUFBRSxTQUZYO0FBR0VDLFFBQUksRUFBRTtBQUhSLEdBckJjLENBMEJkO0FBQ0E7QUFDQTtBQUNBO0FBN0JjLEdBQWhCOztBQWdDQSxNQUFJLENBQUNOLEtBQUwsRUFBWTtBQUNWLFdBQU9HLFdBQVA7QUFDRDs7QUFFRCxNQUFNSSxJQUFJLEdBQUdILE9BQU8sQ0FBQ0ksSUFBUixDQUFhLGdCQUF1QjtBQUFBLFFBQXBCSCxPQUFvQixRQUFwQkEsT0FBb0I7QUFBQSxRQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDL0MsV0FBT0QsT0FBTyxDQUFDSSxJQUFSLENBQWFWLGVBQWUsQ0FBQ0MsS0FBRCxDQUE1QixDQUFQO0FBQ0QsR0FGWSxDQUFiO0FBSUEsU0FBUU8sSUFBSSxJQUFJQSxJQUFJLENBQUNELElBQWQsSUFBdUJILFdBQTlCO0FBQ0QsQ0E1Q0Q7O0lBOENNTyxTOzs7Ozs7Ozs7Ozs7Ozs7OzhQQUNJO0FBQ05WLFdBQUssRUFBRSxFQUREO0FBRU5NLFVBQUksRUFBRUosaUJBQWlCO0FBRmpCLEs7O2lRQUtHLFVBQUFTLEtBQUssRUFBSTtBQUNsQixVQUFJWCxLQUFLLEdBQUdXLEtBQUssQ0FBQ0MsTUFBTixDQUFhWixLQUF6Qjs7QUFFQSxZQUFLYSxRQUFMLENBQWM7QUFDWlAsWUFBSSxFQUFFSixpQkFBaUIsQ0FBQ0YsS0FBRCxDQURYO0FBRVpBLGFBQUssRUFBRUE7QUFGSyxPQUFkO0FBSUQsSzs7Ozs7Ozs2QkFFUTtBQUFBLFVBQ0NjLEtBREQsR0FDVyxJQURYLENBQ0NBLEtBREQ7QUFBQSxVQUVBQyxLQUZBLEdBRVMsSUFGVCxDQUVBQSxLQUZBO0FBQUEsVUFHQUMsSUFIQSxHQUdRLElBSFIsQ0FHQUEsSUFIQTtBQUlQLDBCQUNFLDhEQUFDLHlEQUFEO0FBQ0UsZ0JBQVEsRUFBRSxJQURaO0FBRUUsWUFBSSxFQUFDO0FBRlAsU0FHTUYsS0FITixHQUlNLEtBQUtHLEtBSlg7QUFLRSxnQkFBUSxFQUFFLEtBQUtDO0FBTGpCLFNBTU1ILEtBTk4sR0FPTUMsSUFQTjtBQVFFLGlCQUFTLEVBQUM7QUFSWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREY7QUFZRDs7OztFQS9CcUJHLHdEOztBQWtDeEIsK0RBQWVULFNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ2V0c2VydmljZS4zZjA0Y2Q4NzEyYTNkYmI2OGRmMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElucHV0TWFzayBmcm9tIFwicmVhY3QtaW5wdXQtbWFza1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmNvbnN0IG5vcm1hbGlzZU51bWJlciA9IHZhbHVlID0+IHZhbHVlLnJlcGxhY2UoL1teMC05XS9nLCBcIlwiKTtcclxuY29uc3QgZ2V0Q3JlZGl0Q2FyZE1hc2sgPSB2YWx1ZSA9PiB7XHJcbiAgY29uc3QgZGVmYXVsdE1hc2sgPSBcIis3KDk5OSktOTk5LTk5OTlcIjtcclxuXHJcbiAgY29uc3QgcnVsZVNldCA9IFtcclxuICAgIHtcclxuICAgICAgLy8gVmlzYSBFbGVjdHJvblxyXG4gICAgICBwYXR0ZXJuOiAvXig0MDI2fDQxNzUwMHw0NDA1fDQ1MDh8NDg0NHw0OTEzfDQ5MTcpLyxcclxuICAgICAgbWFzazogXCI5OTk5IDk5OTkgOTk5OSA5OTk5XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIC8vIFZpc2EgKGluY2wuIFZQYXkpXHJcbiAgICAgIHBhdHRlcm46IC9eNC8sXHJcbiAgICAgIG1hc2s6IFwiOTk5OSA5OTk5IDk5OTkgOTk5OTk5OVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAvLyBBbWVyaWNhbiBFeHByZXNzXHJcbiAgICAgIHBhdHRlcm46IC9eKDM0fDM3KS8sXHJcbiAgICAgIG1hc2s6IFwiOTk5OSA5OTk5OTkgOTk5OTlcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgLy8gbWFlc3RybyAxNitcclxuICAgICAgcGF0dGVybjogL14oNTBbMC0xXXs0fXw1KDZ8OClbMC05XXs0fXw2WzAtMV17NX0pWzAtOV17MTB9LyxcclxuICAgICAgbWFzazogXCI5OTk5IDk5OTkgOTk5OSA5OTk5IDk5OVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAvLyBNYXN0ZXJjYXJkXHJcbiAgICAgIHBhdHRlcm46IC9eNVsxLTVdLyxcclxuICAgICAgbWFzazogXCI5OTk5IDk5OTkgOTk5OSA5OTk5XCJcclxuICAgIH1cclxuICAgIC8vIHsgLy8gQ2hpbmEgVW5pb25QYXkgKDE4KVxyXG4gICAgLy8gICBwYXR0ZXJuOiAvXjYyKFswLTldezE0LH0pLyxcclxuICAgIC8vICAgbWFzazogJzk5OTk5OSA5OTk5OTk5OTk5OTk5J1xyXG4gICAgLy8gfSxcclxuICBdO1xyXG5cclxuICBpZiAoIXZhbHVlKSB7XHJcbiAgICByZXR1cm4gZGVmYXVsdE1hc2s7XHJcbiAgfVxyXG5cclxuICBjb25zdCBydWxlID0gcnVsZVNldC5maW5kKCh7IHBhdHRlcm4sIG1hc2sgfSkgPT4ge1xyXG4gICAgcmV0dXJuIHBhdHRlcm4udGVzdChub3JtYWxpc2VOdW1iZXIodmFsdWUpKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChydWxlICYmIHJ1bGUubWFzaykgfHwgZGVmYXVsdE1hc2s7XHJcbn07XHJcblxyXG5jbGFzcyBQaG9uZU1hc2sgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgdmFsdWU6IFwiXCIsXHJcbiAgICBtYXNrOiBnZXRDcmVkaXRDYXJkTWFzaygpXHJcbiAgfTtcclxuXHJcbiAgb25DaGFuZ2UgPSBldmVudCA9PiB7XHJcbiAgICB2YXIgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIG1hc2s6IGdldENyZWRpdENhcmRNYXNrKHZhbHVlKSxcclxuICAgICAgdmFsdWU6IHZhbHVlXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IHByb3BzIH0gPSB0aGlzO1xyXG4gICAgY29uc3Qge2ZpZWxkfSA9IHRoaXM7XHJcbiAgICBjb25zdCB7Zm9ybX0gPSB0aGlzXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8SW5wdXRNYXNrXHJcbiAgICAgICAgbWFza0NoYXI9e251bGx9XHJcbiAgICAgICAgbmFtZT0ncGhvbmUnXHJcbiAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAgIHsuLi50aGlzLnN0YXRlfVxyXG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxyXG4gICAgICAgIHsuLi5maWVsZH1cclxuICAgICAgICB7Li4uZm9ybX1cclxuICAgICAgICBjbGFzc05hbWU9J215LWlucHV0J1xyXG4gICAgICAvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBob25lTWFzayJdLCJzb3VyY2VSb290IjoiIn0=