self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/partner/Partner.js":
/*!***************************************!*\
  !*** ./components/partner/Partner.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\job\\nashcompany\\components\\partner\\Partner.js",
    _this = undefined;

var Partner = function Partner() {
  var x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "partners_block container",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      children: "\u041D\u0430\u0448\u0438 \u043A\u043B\u0438\u0435\u043D\u0442\u044B"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "partners",
      children: x.map(function (x, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "partner",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/img/clients/".concat(index + 1, ".png")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 9
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, _this);
};

_c = Partner;
/* harmony default export */ __webpack_exports__["default"] = (Partner);

var _c;

$RefreshReg$(_c, "Partner");

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


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var E_job_nashcompany_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var E_job_nashcompany_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var E_job_nashcompany_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var E_job_nashcompany_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var E_job_nashcompany_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/globals.scss */ "./styles/globals.scss");
/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var font_awesome_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! font-awesome/css/font-awesome.css */ "./node_modules/font-awesome/css/font-awesome.css");
/* harmony import */ var font_awesome_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(font_awesome_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_shared_Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/shared/Footer */ "./components/shared/Footer.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_Utm_Utm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Utm/Utm */ "./components/Utm/Utm.js");
/* harmony import */ var _components_shared_FixedBtn__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/shared/FixedBtn */ "./components/shared/FixedBtn.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../store/store */ "./store/store.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _store_actions_userAction__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../store/actions/userAction */ "./store/actions/userAction.js");
/* harmony import */ var _components_partner_Partner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/partner/Partner */ "./components/partner/Partner.js");
/* module decorator */ module = __webpack_require__.hmd(module);







var _jsxFileName = "E:\\job\\nashcompany\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
















var MyApp = /*#__PURE__*/function (_App) {
  (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(MyApp, _App);

  var _super = _createSuper(MyApp);

  function MyApp() {
    (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.default)(this, MyApp);

    return _super.apply(this, arguments);
  }

  (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(MyApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      next_router__WEBPACK_IMPORTED_MODULE_11___default().events.on('routeChangeComplete', function () {
        document.body.style.overflowY = 'unset';
        document.documentElement.style.height = 'inherit';

        if ((next_router__WEBPACK_IMPORTED_MODULE_11___default().pathname) !== '/dlya-fizicheskix-lic' || (next_router__WEBPACK_IMPORTED_MODULE_11___default().pathname) !== '/jurservice') {
          window.scrollTo(0, 0);
        }
      });

      if (js_cookie__WEBPACK_IMPORTED_MODULE_17___default().get('token') && !this.props.loggedIn) {
        this.props.fetchCurrentUser();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_14__.Provider, {
        store: _store_store__WEBPACK_IMPORTED_MODULE_15__.default,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_shared_Footer__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_partner_Partner__WEBPACK_IMPORTED_MODULE_19__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Utm_Utm__WEBPACK_IMPORTED_MODULE_12__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_shared_FixedBtn__WEBPACK_IMPORTED_MODULE_13__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 7
      }, this);
    }
  }]);

  return MyApp;
}((next_app__WEBPACK_IMPORTED_MODULE_9___default()));

var makeStore = function makeStore() {
  return _store_store__WEBPACK_IMPORTED_MODULE_15__.default;
};

var wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_16__.createWrapper)(makeStore);

var mapStateToProps = function mapStateToProps(state) {
  return {
    loggedIn: state.userReducer.loggedIn
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchCurrentUser: function fetchCurrentUser() {
      return dispatch((0,_store_actions_userAction__WEBPACK_IMPORTED_MODULE_18__.fetchCurrentUser)());
    }
  };
};

MyApp = (0,react_redux__WEBPACK_IMPORTED_MODULE_14__.connect)(mapStateToProps, mapDispatchToProps)(MyApp);
/* harmony default export */ __webpack_exports__["default"] = (_c = wrapper.withRedux(MyApp));

var _c;

$RefreshReg$(_c, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYXJ0bmVyL1BhcnRuZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanMiXSwibmFtZXMiOlsiUGFydG5lciIsIngiLCJtYXAiLCJpbmRleCIsIk15QXBwIiwiUm91dGVyIiwiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJvdmVyZmxvd1kiLCJkb2N1bWVudEVsZW1lbnQiLCJoZWlnaHQiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsImNvb2tpZSIsInByb3BzIiwibG9nZ2VkSW4iLCJmZXRjaEN1cnJlbnRVc2VyIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic3RvcmUiLCJBcHAiLCJtYWtlU3RvcmUiLCJ3cmFwcGVyIiwiY3JlYXRlV3JhcHBlciIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwidXNlclJlZHVjZXIiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImNvbm5lY3QiLCJ3aXRoUmVkdXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFDcEIsTUFBSUMsQ0FBQyxHQUFHLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsRUFBNUIsRUFDTixFQURNLEVBQ0YsRUFERSxFQUNFLEVBREYsRUFDTSxFQUROLEVBQ1UsRUFEVixFQUNjLEVBRGQsRUFDa0IsRUFEbEIsRUFDc0IsRUFEdEIsRUFDMEIsRUFEMUIsRUFDOEIsRUFEOUIsQ0FBUjtBQUVBLHNCQUNFO0FBQUssYUFBUyxFQUFDLDBCQUFmO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVBO0FBQUssZUFBUyxFQUFDLFVBQWY7QUFBQSxnQkFDR0EsQ0FBQyxDQUFDQyxHQUFGLENBQU0sVUFBQ0QsQ0FBRCxFQUFHRSxLQUFIO0FBQUEsNEJBQ0w7QUFBSyxtQkFBUyxFQUFDLFNBQWY7QUFBQSxpQ0FDRTtBQUFLLGVBQUcseUJBQWtCQSxLQUFLLEdBQUMsQ0FBeEI7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESztBQUFBLE9BQU47QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFZRCxDQWZEOztLQUFNSCxPO0FBaUJOLCtEQUFlQSxPQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUNNSSxLOzs7Ozs7Ozs7Ozs7O3dDQUNnQjtBQUNsQkMsbUVBQUEsQ0FBaUIscUJBQWpCLEVBQXdDLFlBQU07QUFFNUNDLGdCQUFRLENBQUNDLElBQVQsQ0FBY0MsS0FBZCxDQUFvQkMsU0FBcEIsR0FBK0IsT0FBL0I7QUFDQUgsZ0JBQVEsQ0FBQ0ksZUFBVCxDQUF5QkYsS0FBekIsQ0FBK0JHLE1BQS9CLEdBQXVDLFNBQXZDOztBQUNBLFlBQUdOLDhEQUFBLEtBQW9CLHVCQUFwQixJQUErQ0EsOERBQUEsS0FBb0IsYUFBdEUsRUFBcUY7QUFFbkZPLGdCQUFNLENBQUNDLFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBa0IsQ0FBbEI7QUFDRDtBQUNGLE9BUkQ7O0FBVUEsVUFBR0MscURBQUEsQ0FBVyxPQUFYLEtBQXVCLENBQUMsS0FBS0MsS0FBTCxDQUFXQyxRQUF0QyxFQUFnRDtBQUM5QyxhQUFLRCxLQUFMLENBQVdFLGdCQUFYO0FBQ0Q7QUFFRjs7OzZCQUNRO0FBQUEsd0JBQ3dCLEtBQUtGLEtBRDdCO0FBQUEsVUFDQUcsU0FEQSxlQUNBQSxTQURBO0FBQUEsVUFDV0MsU0FEWCxlQUNXQSxTQURYO0FBRVAsMEJBQ0UsOERBQUMsa0RBQUQ7QUFBVSxhQUFLLEVBQUVDLGtEQUFqQjtBQUFBLGdDQUVFLDhEQUFDLFNBQUQsb0JBQWVELFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixlQUdFLDhEQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEYsZUFJRSw4REFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGLGVBS0UsOERBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMRixlQU1FLDhEQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREY7QUFVRDs7OztFQTdCaUJFLGlEOztBQW1DcEIsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVk7QUFBQSxTQUFNRixrREFBTjtBQUFBLENBQWxCOztBQUNBLElBQU1HLE9BQU8sR0FBR0Msa0VBQWEsQ0FBQ0YsU0FBRCxDQUE3Qjs7QUFDQSxJQUFNRyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUFDLEtBQUs7QUFBQSxTQUFLO0FBQ2hDVixZQUFRLEVBQUVVLEtBQUssQ0FBQ0MsV0FBTixDQUFrQlg7QUFESSxHQUFMO0FBQUEsQ0FBN0I7O0FBSUEsSUFBTVksa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFELEVBQWM7QUFDdkMsU0FBTztBQUNMWixvQkFBZ0IsRUFBRTtBQUFBLGFBQU1ZLFFBQVEsQ0FBQ1osNEVBQWdCLEVBQWpCLENBQWQ7QUFBQTtBQURiLEdBQVA7QUFHRCxDQUpEOztBQVFBYixLQUFLLEdBQUcwQixxREFBTyxDQUFDTCxlQUFELEVBQWlCRyxrQkFBakIsQ0FBUCxDQUE0Q3hCLEtBQTVDLENBQVI7QUFFQSwrREFBZSxLQUFBbUIsT0FBTyxDQUFDUSxTQUFSLENBQWtCM0IsS0FBbEIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmM4OWZhNjM3YjhhYWU5ZWU5OTg0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBQYXJ0bmVyID0gKCkgPT4ge1xyXG4gIHZhciB4ID0gWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLFxyXG4gICAgMTEsIDEyLCAxMywgMTQsIDE1LCAxNiwgMTcsIDE4LCAxOSwgMjBdO1xyXG4gIHJldHVybihcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdwYXJ0bmVyc19ibG9jayBjb250YWluZXInPlxyXG4gICAgICA8aDI+0J3QsNGI0Lgg0LrQu9C40LXQvdGC0Ys8L2gyPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9J3BhcnRuZXJzJz5cclxuICAgICAge3gubWFwKCh4LGluZGV4KSA9PiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BhcnRuZXInPlxyXG4gICAgICAgICAgPGltZyBzcmM9e2AvaW1nL2NsaWVudHMvJHtpbmRleCsxfS5wbmdgfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXJ0bmVyOyIsImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuc2NzcydcbmltcG9ydCAnZm9udC1hd2Vzb21lL2Nzcy9mb250LWF3ZXNvbWUuY3NzJztcbmltcG9ydCBBcHAgZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvc2hhcmVkL0Zvb3Rlcic7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IFV0bSBmcm9tICcuLi9jb21wb25lbnRzL1V0bS9VdG0nO1xuaW1wb3J0IEZpeGVkQnRuIGZyb20gJy4uL2NvbXBvbmVudHMvc2hhcmVkL0ZpeGVkQnRuJztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vc3RvcmUvc3RvcmUnXG5pbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSdcbmltcG9ydCB7ZmV0Y2hDdXJyZW50VXNlcn0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy91c2VyQWN0aW9uJ1xuaW1wb3J0IFBhcnRuZXIgZnJvbSAnLi4vY29tcG9uZW50cy9wYXJ0bmVyL1BhcnRuZXInXG5jbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIFJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCAoKSA9PiB7XG4gICAgICBcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3dZPSAndW5zZXQnO1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLmhlaWdodD0gJ2luaGVyaXQnO1xuICAgICAgaWYoUm91dGVyLnBhdGhuYW1lICE9PSAnL2RseWEtZml6aWNoZXNraXgtbGljJyB8fCBSb3V0ZXIucGF0aG5hbWUgIT09ICcvanVyc2VydmljZScpIHtcblxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwwKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZihjb29raWUuZ2V0KCd0b2tlbicpICYmICF0aGlzLnByb3BzLmxvZ2dlZEluKSB7XG4gICAgICB0aGlzLnByb3BzLmZldGNoQ3VycmVudFVzZXIoKVxuICAgIH1cblxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7Q29tcG9uZW50LCBwYWdlUHJvcHN9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4oXG4gICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgey8qIDxOYXYgLz4gKi99XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30vPlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDxQYXJ0bmVyIC8+XG4gICAgICAgIDxVdG0gLz5cbiAgICAgICAgPEZpeGVkQnRuIC8+XG4gICAgICA8L1Byb3ZpZGVyPlxuICAgIClcbiAgfVxufVxuXG5cblxuXG5jb25zdCBtYWtlU3RvcmU9ICAoKSA9PiBzdG9yZTtcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKG1ha2VTdG9yZSlcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIGxvZ2dlZEluOiBzdGF0ZS51c2VyUmVkdWNlci5sb2dnZWRJblxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICByZXR1cm4ge1xuICAgIGZldGNoQ3VycmVudFVzZXI6ICgpID0+IGRpc3BhdGNoKGZldGNoQ3VycmVudFVzZXIoKSlcbiAgfVxufVxuXG5cblxuTXlBcHAgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxtYXBEaXNwYXRjaFRvUHJvcHMpKE15QXBwKVxuXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChNeUFwcCk7XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=