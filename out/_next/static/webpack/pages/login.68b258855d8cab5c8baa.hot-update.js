self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _components_shared_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/shared/Nav */ "./components/shared/Nav.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_loader_Loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/loader/Loader */ "./components/loader/Loader.js");
/* harmony import */ var _components_cabinet_LoginForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/cabinet/LoginForm */ "./components/cabinet/LoginForm.js");
/* harmony import */ var _store_actions_userAction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store/actions/userAction */ "./store/actions/userAction.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _defaults_extraFunction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../defaults/extraFunction */ "./defaults/extraFunction.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "E:\\job\\nashcompany\\pages\\login.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












var Login = function Login(_ref) {
  _s();

  var authenticatingUser = _ref.authenticatingUser,
      failedLogin = _ref.failedLogin,
      loggedIn = _ref.loggedIn,
      loginUser = _ref.loginUser;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)({
    iin: '',
    password: ''
  }),
      date = _useState[0],
      setDate = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''),
      error = _useState2[0],
      setError = _useState2[1];

  var onSubmit = function onSubmit(e) {
    e.preventDefault();
    loginUser(date, setError);
  };

  var onChange = function onChange(e) {
    var name = e.target.name;
    setDate(_objectSpread(_objectSpread({}, date), {}, (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, name, e.target.value)));
  };

  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {
    if (js_cookie__WEBPACK_IMPORTED_MODULE_5___default().get('token') && loggedIn) {
      next_router__WEBPACK_IMPORTED_MODULE_4___default().push('/cabinet');
    }
  }, [loggedIn]);
  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {
    if (js_cookie__WEBPACK_IMPORTED_MODULE_5___default().get('token') && loggedIn) {
      next_router__WEBPACK_IMPORTED_MODULE_4___default().push('/');
    }
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {
    if (error) {
      (0,_defaults_extraFunction__WEBPACK_IMPORTED_MODULE_11__.handleFocus)();
    }
  }, [error]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "getservice",
    children: [authenticatingUser && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_loader_Loader__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 30
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "\u041B\u043E\u0433\u0438\u043D"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "header",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Nav__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "bg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "form_headings"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "form_service ",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cabinet_LoginForm__WEBPACK_IMPORTED_MODULE_8__.default, {
          authenticatingUser: authenticatingUser,
          onChange: onChange,
          onSubmit: onSubmit,
          date: date,
          error: error
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 5
  }, _this);
};

_s(Login, "loOov4PJ301pf7tvDMSECCqxLek=");

_c = Login;

var mapStateToProps = function mapStateToProps(_ref2) {
  var _ref2$userReducer = _ref2.userReducer,
      authenticatingUser = _ref2$userReducer.authenticatingUser,
      failedLogin = _ref2$userReducer.failedLogin,
      loggedIn = _ref2$userReducer.loggedIn;
  return {
    authenticatingUser: authenticatingUser,
    failedLogin: failedLogin,
    loggedIn: loggedIn
  };
};

/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_10__.connect)(mapStateToProps, {
  loginUser: _store_actions_userAction__WEBPACK_IMPORTED_MODULE_9__.loginUser,
  fetchCurrentUser: _store_actions_userAction__WEBPACK_IMPORTED_MODULE_9__.fetchCurrentUser
})(Login));

var _c;

$RefreshReg$(_c, "Login");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOlsiTG9naW4iLCJhdXRoZW50aWNhdGluZ1VzZXIiLCJmYWlsZWRMb2dpbiIsImxvZ2dlZEluIiwibG9naW5Vc2VyIiwidXNlU3RhdGUiLCJpaW4iLCJwYXNzd29yZCIsImRhdGUiLCJzZXREYXRlIiwiZXJyb3IiLCJzZXRFcnJvciIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0Iiwib25DaGFuZ2UiLCJuYW1lIiwidGFyZ2V0IiwidmFsdWUiLCJ1c2VFZmZlY3QiLCJjb29raWUiLCJSb3V0ZXIiLCJoYW5kbGVGb2N1cyIsIm1hcFN0YXRlVG9Qcm9wcyIsInVzZXJSZWR1Y2VyIiwiY29ubmVjdCIsImZldGNoQ3VycmVudFVzZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQTREO0FBQUE7O0FBQUEsTUFBMURDLGtCQUEwRCxRQUExREEsa0JBQTBEO0FBQUEsTUFBdENDLFdBQXNDLFFBQXRDQSxXQUFzQztBQUFBLE1BQXpCQyxRQUF5QixRQUF6QkEsUUFBeUI7QUFBQSxNQUFmQyxTQUFlLFFBQWZBLFNBQWU7O0FBQUEsa0JBRTNEQywrQ0FBUSxDQUFDO0FBQUNDLE9BQUcsRUFBRSxFQUFOO0FBQVVDLFlBQVEsRUFBRTtBQUFwQixHQUFELENBRm1EO0FBQUEsTUFDakVDLElBRGlFO0FBQUEsTUFFdEVDLE9BRnNFOztBQUFBLG1CQUkxREosK0NBQVEsQ0FBQyxFQUFELENBSmtEO0FBQUEsTUFHakVLLEtBSGlFO0FBQUEsTUFJdEVDLFFBSnNFOztBQU14RSxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxDQUFELEVBQU87QUFDdEJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBVixhQUFTLENBQUNJLElBQUQsRUFBT0csUUFBUCxDQUFUO0FBQ0QsR0FIRDs7QUFJQSxNQUFNSSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFBRixDQUFDLEVBQUk7QUFDcEIsUUFBTUcsSUFBSSxHQUFHSCxDQUFDLENBQUNJLE1BQUYsQ0FBU0QsSUFBdEI7QUFDQVAsV0FBTyxpQ0FDRkQsSUFERSw0SEFFSlEsSUFGSSxFQUVHSCxDQUFDLENBQUNJLE1BQUYsQ0FBU0MsS0FGWixHQUFQO0FBSUQsR0FORDs7QUFRQUMsa0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSUMsb0RBQUEsQ0FBVyxPQUFYLEtBQXVCakIsUUFBM0IsRUFBcUM7QUFDbkNrQiw2REFBQSxDQUFZLFVBQVo7QUFDRDtBQUNGLEdBSlEsRUFJTixDQUFDbEIsUUFBRCxDQUpNLENBQVQ7QUFNQWdCLGtEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlDLG9EQUFBLENBQVcsT0FBWCxLQUF1QmpCLFFBQTNCLEVBQXFDO0FBQ25Da0IsNkRBQUEsQ0FBWSxHQUFaO0FBQ0Q7QUFDRixHQUpRLEVBSU4sRUFKTSxDQUFUO0FBTUFGLGtEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlULEtBQUosRUFBVztBQUNUWSwyRUFBVztBQUNaO0FBQ0YsR0FKUSxFQUlOLENBQUNaLEtBQUQsQ0FKTSxDQUFUO0FBS0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBLGVBQ0dULGtCQUFrQixpQkFBSSw4REFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRHpCLGVBRUUsOERBQUMsa0RBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQU9FO0FBQUssZUFBUyxFQUFDLFFBQWY7QUFBQSw4QkFDRSw4REFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFLLGlCQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEYsZUFZRTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsOEJBRUU7QUFBSyxpQkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBR0U7QUFBSyxpQkFBUyxFQUFDLGVBQWY7QUFBQSwrQkFFRSw4REFBQyxrRUFBRDtBQUNFLDRCQUFrQixFQUFFQSxrQkFEdEI7QUFFRSxrQkFBUSxFQUFFYyxRQUZaO0FBR0Usa0JBQVEsRUFBRUgsUUFIWjtBQUlFLGNBQUksRUFBRUosSUFKUjtBQUtFLGVBQUssRUFBRUU7QUFMVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBOEJELENBakVEOztHQUFNVixLOztLQUFBQSxLOztBQW1FTixJQUFNdUIsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQjtBQUFBLGdDQUN0QkMsV0FEc0I7QUFBQSxNQUVwQnZCLGtCQUZvQixxQkFFcEJBLGtCQUZvQjtBQUFBLE1BR3BCQyxXQUhvQixxQkFHcEJBLFdBSG9CO0FBQUEsTUFJcEJDLFFBSm9CLHFCQUlwQkEsUUFKb0I7QUFBQSxTQU1qQjtBQUFDRixzQkFBa0IsRUFBbEJBLGtCQUFEO0FBQXFCQyxlQUFXLEVBQVhBLFdBQXJCO0FBQWtDQyxZQUFRLEVBQVJBO0FBQWxDLEdBTmlCO0FBQUEsQ0FBeEI7O0FBUUEsK0RBQWVzQixxREFBTyxDQUFDRixlQUFELEVBQWtCO0FBQUNuQixXQUFTLEVBQVRBLGdFQUFEO0FBQVlzQixrQkFBZ0IsRUFBaEJBLHVFQUFnQkE7QUFBNUIsQ0FBbEIsQ0FBUCxDQUF3RDFCLEtBQXhELENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uNjhiMjU4ODU1ZDhjYWI1YzhiYWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXYgZnJvbSBcIi4uL2NvbXBvbmVudHMvc2hhcmVkL05hdlwiXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnXHJcbmltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBMb2FkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbG9hZGVyL0xvYWRlclwiXHJcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvY2FiaW5ldC9Mb2dpbkZvcm1cIlxyXG5pbXBvcnQge2xvZ2luVXNlciwgZmV0Y2hDdXJyZW50VXNlcn0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy91c2VyQWN0aW9uJ1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQge2hhbmRsZUZvY3VzfSBmcm9tIFwiLi4vZGVmYXVsdHMvZXh0cmFGdW5jdGlvblwiXHJcblxyXG5jb25zdCBMb2dpbiA9ICh7YXV0aGVudGljYXRpbmdVc2VyLCBmYWlsZWRMb2dpbiwgbG9nZ2VkSW4sIGxvZ2luVXNlcn0pID0+IHtcclxuICBjb25zdCBbZGF0ZSxcclxuICAgIHNldERhdGVdID0gdXNlU3RhdGUoe2lpbjogJycsIHBhc3N3b3JkOiAnJ30pXHJcbiAgY29uc3QgW2Vycm9yLFxyXG4gICAgc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpXHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgbG9naW5Vc2VyKGRhdGUsIHNldEVycm9yKVxyXG4gIH1cclxuICBjb25zdCBvbkNoYW5nZSA9IGUgPT4ge1xyXG4gICAgY29uc3QgbmFtZSA9IGUudGFyZ2V0Lm5hbWU7XHJcbiAgICBzZXREYXRlKHtcclxuICAgICAgLi4uZGF0ZSxcclxuICAgICAgW25hbWVdOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoY29va2llLmdldCgndG9rZW4nKSAmJiBsb2dnZWRJbikge1xyXG4gICAgICBSb3V0ZXIucHVzaCgnL2NhYmluZXQnKVxyXG4gICAgfVxyXG4gIH0sIFtsb2dnZWRJbl0pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoY29va2llLmdldCgndG9rZW4nKSAmJiBsb2dnZWRJbikge1xyXG4gICAgICBSb3V0ZXIucHVzaCgnLycpXHJcbiAgICB9XHJcbiAgfSwgW10pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgaGFuZGxlRm9jdXMoKVxyXG4gICAgfVxyXG4gIH0sIFtlcnJvcl0pXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdnZXRzZXJ2aWNlJz5cclxuICAgICAge2F1dGhlbnRpY2F0aW5nVXNlciAmJiA8TG9hZGVyLz59XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5cclxuICAgICAgICAgINCb0L7Qs9C40L1cclxuICAgICAgICA8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXInPlxyXG4gICAgICAgIDxOYXYvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZyc+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtX2hlYWRpbmdzJz48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybV9zZXJ2aWNlICc+XHJcblxyXG4gICAgICAgICAgPExvZ2luRm9ybVxyXG4gICAgICAgICAgICBhdXRoZW50aWNhdGluZ1VzZXI9e2F1dGhlbnRpY2F0aW5nVXNlcn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICBvblN1Ym1pdD17b25TdWJtaXR9XHJcbiAgICAgICAgICAgIGRhdGU9e2RhdGV9XHJcbiAgICAgICAgICAgIGVycm9yPXtlcnJvcn0vPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoe1xyXG4gIHVzZXJSZWR1Y2VyOiB7XHJcbiAgICBhdXRoZW50aWNhdGluZ1VzZXIsXHJcbiAgICBmYWlsZWRMb2dpbixcclxuICAgIGxvZ2dlZEluXHJcbiAgfVxyXG59KSA9PiAoe2F1dGhlbnRpY2F0aW5nVXNlciwgZmFpbGVkTG9naW4sIGxvZ2dlZElufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywge2xvZ2luVXNlciwgZmV0Y2hDdXJyZW50VXNlcn0pKExvZ2luKTsiXSwic291cmNlUm9vdCI6IiJ9