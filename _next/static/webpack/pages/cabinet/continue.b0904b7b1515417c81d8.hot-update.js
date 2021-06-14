self["webpackHotUpdate_N_E"]("pages/cabinet/continue",{

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _classCallCheck; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _createClass; }
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _getPrototypeOf; }
/* harmony export */ });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _inherits; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/setPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) (0,_babel_runtime_helpers_esm_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__.default)(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _possibleConstructorReturn; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && ((0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__.default)(call) === "object" || typeof call === "function")) {
    return call;
  }

  return (0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _setPrototypeOf; }
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _typeof; }
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./hocs/withAuth.js":
/*!**************************!*\
  !*** ./hocs/withAuth.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_job_nashcompany_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var E_job_nashcompany_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var E_job_nashcompany_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var E_job_nashcompany_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var E_job_nashcompany_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _store_actions_userAction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store/actions/userAction */ "./store/actions/userAction.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_loader_Loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/loader/Loader */ "./components/loader/Loader.js");
/* harmony import */ var _components_shared_Nav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/shared/Nav */ "./components/shared/Nav.js");
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "E:\\job\\nashcompany\\hocs\\withAuth.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









var withAuth = function withAuth(WrappedComponent) {
  var AuthorizedComponent = /*#__PURE__*/function (_React$Component) {
    (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.default)(AuthorizedComponent, _React$Component);

    var _super = _createSuper(AuthorizedComponent);

    function AuthorizedComponent() {
      (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, AuthorizedComponent);

      return _super.apply(this, arguments);
    }

    (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(AuthorizedComponent, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        if (js_cookie__WEBPACK_IMPORTED_MODULE_10___default().get('token') && !this.props.loggedIn) {
          this.props.fetchCurrentUser();
        }

        if (!js_cookie__WEBPACK_IMPORTED_MODULE_10___default().get('token')) {
          next_router__WEBPACK_IMPORTED_MODULE_8___default().push('/login');
        }
      }
    }, {
      key: "render",
      value: function render() {
        if (js_cookie__WEBPACK_IMPORTED_MODULE_10___default().get('token') && this.props.loggedIn) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(WrappedComponent, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 16
          }, this);
        }

        if (js_cookie__WEBPACK_IMPORTED_MODULE_10___default().get('token') && (this.props.authenticatingUser || !this.props.loggedIn)) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "otherPages",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Nav__WEBPACK_IMPORTED_MODULE_12__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 11
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "pd-5 pt-5"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 11
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_loader_Loader__WEBPACK_IMPORTED_MODULE_11__.default, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 11
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 16
          }, this);
        }

        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "otherPages",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Nav__WEBPACK_IMPORTED_MODULE_12__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 9
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_loader_Loader__WEBPACK_IMPORTED_MODULE_11__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 9
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: "text-center pt-5",
            children: "\u0412\u044B \u0432\u044B\u0448\u043B\u0438 \u0441 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430 \u0438\u043B\u0438 \u0412\u0440\u0435\u043C\u044F \u0432\u0430\u0448\u0435\u0433\u043E \u0441\u0435\u0430\u043D\u0441\u0430 \u0438\u0441\u0442\u0435\u043A\u043B\u043E"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 9
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 14
        }, this);
        return null;
      }
    }]);

    return AuthorizedComponent;
  }((react__WEBPACK_IMPORTED_MODULE_6___default().Component));

  var mapStateToProps = function mapStateToProps(reduxStoreState) {
    return {
      loggedIn: reduxStoreState.userReducer.loggedIn,
      authenticatingUser: reduxStoreState.userReducer.authenticatingUser
    };
  };

  var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
      fetchCurrentUser: function fetchCurrentUser() {
        return dispatch(_store_actions_userAction__WEBPACK_IMPORTED_MODULE_9__.fetchCurrentUser());
      }
    };
  };

  return (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.connect)(mapStateToProps, _store_actions_userAction__WEBPACK_IMPORTED_MODULE_9__)(AuthorizedComponent);
};

/* harmony default export */ __webpack_exports__["default"] = (withAuth);

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

/***/ "./pages/cabinet/continue.js":
/*!***********************************!*\
  !*** ./pages/cabinet/continue.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_getservice_FirstStep__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/getservice/FirstStep */ "./components/getservice/FirstStep.js");
/* harmony import */ var _components_getservice_SecondStep__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/getservice/SecondStep */ "./components/getservice/SecondStep.js");
/* harmony import */ var _components_getservice_ThirdStep__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/getservice/ThirdStep */ "./components/getservice/ThirdStep.js");
/* harmony import */ var _components_loader_Loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/loader/Loader */ "./components/loader/Loader.js");
/* harmony import */ var _components_shared_Nav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/shared/Nav */ "./components/shared/Nav.js");
/* harmony import */ var _hocs_withAuth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hocs/withAuth */ "./hocs/withAuth.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\job\\nashcompany\\pages\\cabinet\\continue.js",
    _this = undefined,
    _s = $RefreshSig$();











var Continue = function Continue() {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  var id = router.query.id;
  var step = router.query.step;
  var type = router.query.type;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      loading = _useState[0],
      setLoading = _useState[1]; // useEffect(() => {   if(!id || !step) {     router.push('/cabinet/requests') }
  // }, [])


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "getservice",
    children: [loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_loader_Loader__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 19
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: ["\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0443\u0441\u043B\u0443\u0433\u0443 | ", type === 'Физ лицо' ? 'Физ лицам' : 'Юр лицам']
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "header",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Nav__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "bg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "form_headings",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: ["\u0423\u0441\u043B\u0443\u0433\u0438 ", type === 'Физ лицо' ? 'Физ лицам' : 'Юр лицам']
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: ["\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0435\u043D\u0438\u0435", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, _this), "\u0430\u043D\u043A\u0435\u0442\u044B:"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "form_service ",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "form_header",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: step === '1' ? 'active' : '',
              children: "1 \u0428\u0430\u0433"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: step === '2' && 'active',
              children: "2 \u0428\u0430\u0433"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: step === '3' && 'active',
              children: "3 \u0428\u0430\u0433"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, _this), step === '1' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_getservice_FirstStep__WEBPACK_IMPORTED_MODULE_4__.default, {
          setLoading: setLoading
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 28
        }, _this), step === '2' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_getservice_SecondStep__WEBPACK_IMPORTED_MODULE_5__.default, {
          setLoading: setLoading
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 28
        }, _this), step === '3' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_getservice_ThirdStep__WEBPACK_IMPORTED_MODULE_6__.default, {
          setLoading: setLoading
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 28
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, _this);
};

_s(Continue, "yTvN5XKE5Y2BBCXg7Q8ZVtplr1A=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];
});

_c = Continue;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = (0,_hocs_withAuth__WEBPACK_IMPORTED_MODULE_9__.default)(Continue));

var _c, _c2;

$RefreshReg$(_c, "Continue");
$RefreshReg$(_c2, "%default%");

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

/***/ "./store/actions/userAction.js":
/*!*************************************!*\
  !*** ./store/actions/userAction.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authenticatingUser": function() { return /* binding */ authenticatingUser; },
/* harmony export */   "setCurrentUser": function() { return /* binding */ setCurrentUser; },
/* harmony export */   "logoutUser": function() { return /* binding */ logoutUser; },
/* harmony export */   "logOutAction": function() { return /* binding */ logOutAction; },
/* harmony export */   "loginUser": function() { return /* binding */ loginUser; },
/* harmony export */   "fetchCurrentUser": function() { return /* binding */ fetchCurrentUser; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);



var authenticatingUser = function authenticatingUser() {
  return {
    type: 'AUTHENTICATING_USER'
  };
};
var setCurrentUser = function setCurrentUser(userData) {
  return {
    type: 'SET_CURRENT_USER',
    payload: userData
  };
};
var logoutUser = function logoutUser() {
  return {
    type: 'LOGOUT_USER'
  };
};
var logOutAction = function logOutAction() {
  return function (dispatch) {
    dispatch(logoutUser());
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default().remove('token');
    next_router__WEBPACK_IMPORTED_MODULE_2___default().push('/login');
  };
};
var loginUser = function loginUser(values, setError) {
  return function (dispatch) {
    dispatch(authenticatingUser());
    axios__WEBPACK_IMPORTED_MODULE_0___default().post("".concat("https://crediter.kz/api", "/signIn"), values).then(function (res) {
      console.log(res);

      if (!res.data.success) {
        setError(res.data.message);
        dispatch({
          type: 'FAILED_LOGIN'
        });
      } else {
        js_cookie__WEBPACK_IMPORTED_MODULE_1___default().set('token', res.data.token, {
          expires: 60
        });
        axios__WEBPACK_IMPORTED_MODULE_0___default().post("".concat("https://crediter.kz/api", "/getData"), {
          token: res.data.token
        }).then(function (res) {
          if (res.data.success) {
            dispatch(setCurrentUser(res.data));
            next_router__WEBPACK_IMPORTED_MODULE_2___default().push('/cabinet');
          } else {
            dispatch({
              type: 'FAILED_LOGIN'
            });
            js_cookie__WEBPACK_IMPORTED_MODULE_1___default().remove('token');
            next_router__WEBPACK_IMPORTED_MODULE_2___default().push('/login');
          }
        })["catch"](function (err) {
          dispatch({
            type: 'FAILED_LOGIN'
          });
          js_cookie__WEBPACK_IMPORTED_MODULE_1___default().remove('token');
          next_router__WEBPACK_IMPORTED_MODULE_2___default().push('/login');
        });
      }
    });
  };
};
var fetchCurrentUser = function fetchCurrentUser() {
  return function (dispatch) {
    dispatch(authenticatingUser());
    axios__WEBPACK_IMPORTED_MODULE_0___default().post("".concat("https://crediter.kz/api", "/getData"), {
      token: js_cookie__WEBPACK_IMPORTED_MODULE_1___default().get('token')
    }).then(function (res) {
      if (res.data.success) {
        dispatch(setCurrentUser(res.data));
      } else {
        dispatch(logoutUser);
        js_cookie__WEBPACK_IMPORTED_MODULE_1___default().remove('token');
        next_router__WEBPACK_IMPORTED_MODULE_2___default().push('/login');
      }
    })["catch"](function (err) {
      dispatch(logoutUser);
      js_cookie__WEBPACK_IMPORTED_MODULE_1___default().remove('token');
      next_router__WEBPACK_IMPORTED_MODULE_2___default().push('/');
    });
  };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwid2VicGFjazovL19OX0UvLi9ob2NzL3dpdGhBdXRoLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9jYWJpbmV0L2NvbnRpbnVlLmpzIiwid2VicGFjazovL19OX0UvLi9zdG9yZS9hY3Rpb25zL3VzZXJBY3Rpb24uanMiXSwibmFtZXMiOlsid2l0aEF1dGgiLCJXcmFwcGVkQ29tcG9uZW50IiwiQXV0aG9yaXplZENvbXBvbmVudCIsImNvb2tpZSIsInByb3BzIiwibG9nZ2VkSW4iLCJmZXRjaEN1cnJlbnRVc2VyIiwiUm91dGVyIiwiYXV0aGVudGljYXRpbmdVc2VyIiwiUmVhY3QiLCJtYXBTdGF0ZVRvUHJvcHMiLCJyZWR1eFN0b3JlU3RhdGUiLCJ1c2VyUmVkdWNlciIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiYWN0aW9ucyIsImNvbm5lY3QiLCJDb250aW51ZSIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicXVlcnkiLCJzdGVwIiwidHlwZSIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzZXRDdXJyZW50VXNlciIsInVzZXJEYXRhIiwicGF5bG9hZCIsImxvZ291dFVzZXIiLCJsb2dPdXRBY3Rpb24iLCJsb2dpblVzZXIiLCJ2YWx1ZXMiLCJzZXRFcnJvciIsImF4aW9zIiwicHJvY2VzcyIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwidG9rZW4iLCJleHBpcmVzIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7QUNkZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7OztBQ0x1RTtBQUN4RDtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsa0JBQWtCLGtGQUFjO0FBQ2hDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZHdEO0FBQzZCO0FBQ3RFO0FBQ2YsZUFBZSwwRUFBTztBQUN0QjtBQUNBOztBQUVBLFNBQVMseUZBQXFCO0FBQzlCLEM7Ozs7Ozs7Ozs7Ozs7OztBQ1JlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7QUNQZTtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QTNCLDZEQUFBLENBQWMsT0FBZDtBQUNBSSw2REFBQSxDQUFZLEdBQVo7QUFDRCxLQWRIO0FBZUQsR0FqQitCO0FBQUEsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FiaW5ldC9jb250aW51ZS5iMDkwNGI3YjE1MTU0MTdjODFkOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn0iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufSIsImltcG9ydCBzZXRQcm90b3R5cGVPZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2V0UHJvdG90eXBlT2ZcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgYXNzZXJ0VGhpc0luaXRpYWxpemVkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL3VzZXJBY3Rpb24nXHJcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2xvYWRlci9Mb2FkZXInO1xyXG5pbXBvcnQgTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvc2hhcmVkL05hdidcclxuY29uc3Qgd2l0aEF1dGggPSBXcmFwcGVkQ29tcG9uZW50ID0+IHtcclxuICBjbGFzcyBBdXRob3JpemVkQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICBpZihjb29raWUuZ2V0KCd0b2tlbicpICYmICF0aGlzLnByb3BzLmxvZ2dlZEluKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5mZXRjaEN1cnJlbnRVc2VyKCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYoIWNvb2tpZS5nZXQoJ3Rva2VuJykpIHtcclxuICAgICAgICBSb3V0ZXIucHVzaCgnL2xvZ2luJylcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgaWYgKGNvb2tpZS5nZXQoJ3Rva2VuJykgJiYgdGhpcy5wcm9wcy5sb2dnZWRJbikge1xyXG4gICAgICAgIHJldHVybiA8V3JhcHBlZENvbXBvbmVudCAvPjtcclxuICAgICAgfSBpZiAoY29va2llLmdldCgndG9rZW4nKSAmJiAodGhpcy5wcm9wcy5hdXRoZW50aWNhdGluZ1VzZXIgfHwgIXRoaXMucHJvcHMubG9nZ2VkSW4pKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwib3RoZXJQYWdlc1wiPlxyXG4gICAgICAgICAgPE5hdiAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BkLTUgcHQtNSc+PC9kaXY+XHJcbiAgICAgICAgICA8TG9hZGVyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdvdGhlclBhZ2VzJz5cclxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJtb2RlbExvYWRlclwiPjwvZGl2PiAqL31cclxuICAgICAgICA8TmF2IC8+XHJcbiAgICAgICAgPExvYWRlciAvPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQtY2VudGVyIHB0LTUnPtCS0Ysg0LLRi9GI0LvQuCDRgSDQsNC60LrQsNGD0L3RgtCwINC40LvQuCDQktGA0LXQvNGPINCy0LDRiNC10LPQviDRgdC10LDQvdGB0LAg0LjRgdGC0LXQutC70L48L2gyPlxyXG4gICAgICA8L2Rpdj47XHJcbiAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSByZWR1eFN0b3JlU3RhdGUgPT4gKHtcclxuICAgIGxvZ2dlZEluOiByZWR1eFN0b3JlU3RhdGUudXNlclJlZHVjZXIubG9nZ2VkSW4sXHJcbiAgICBhdXRoZW50aWNhdGluZ1VzZXI6IHJlZHV4U3RvcmVTdGF0ZS51c2VyUmVkdWNlci5hdXRoZW50aWNhdGluZ1VzZXIsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XHJcbiAgICBmZXRjaEN1cnJlbnRVc2VyOiAoKSA9PiBkaXNwYXRjaChhY3Rpb25zLmZldGNoQ3VycmVudFVzZXIoKSksXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBjb25uZWN0KFxyXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gICAgYWN0aW9ucyxcclxuICApKEF1dGhvcml6ZWRDb21wb25lbnQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXV0aDtcclxuXHJcblxyXG4iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEZpcnN0UmVnIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZ2V0c2VydmljZS9GaXJzdFN0ZXAnXHJcbmltcG9ydCBTZWNvbmRTdGVwIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZ2V0c2VydmljZS9TZWNvbmRTdGVwJ1xyXG5pbXBvcnQgVGhpcmRTdGVwIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZ2V0c2VydmljZS9UaGlyZFN0ZXAnXHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sb2FkZXIvTG9hZGVyJ1xyXG5pbXBvcnQgTmF2IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvc2hhcmVkL05hdidcclxuaW1wb3J0IHdpdGhBdXRoIGZyb20gJy4uLy4uL2hvY3Mvd2l0aEF1dGgnXHJcbmNvbnN0IENvbnRpbnVlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3Qge2lkfSA9IHJvdXRlci5xdWVyeVxyXG4gIGNvbnN0IHtzdGVwfSA9IHJvdXRlci5xdWVyeVxyXG4gIGNvbnN0IHt0eXBlfSA9IHJvdXRlci5xdWVyeVxyXG4gIGNvbnN0IFtsb2FkaW5nLHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHsgICBpZighaWQgfHwgIXN0ZXApIHsgICAgIHJvdXRlci5wdXNoKCcvY2FiaW5ldC9yZXF1ZXN0cycpIH1cclxuICAvLyB9LCBbXSlcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2dldHNlcnZpY2UnPlxyXG4gICAgICB7bG9hZGluZyAmJiA8TG9hZGVyIC8+fVxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+XHJcbiAgICAgICAgICDQn9C+0LvRg9GH0LjRgtGMINGD0YHQu9GD0LPRgyB8IHt0eXBlID09PSAn0KTQuNC3INC70LjRhtC+J1xyXG4gICAgICAgICAgICA/ICfQpNC40Lcg0LvQuNGG0LDQvCdcclxuICAgICAgICAgICAgOiAn0K7RgCDQu9C40YbQsNC8J31cclxuICAgICAgICA8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXInPlxyXG4gICAgICAgIDxOYXYvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZyc+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybV9oZWFkaW5ncyc+XHJcbiAgICAgICAgICA8aDE+0KPRgdC70YPQs9C4IHt0eXBlID09PSAn0KTQuNC3INC70LjRhtC+J1xyXG4gICAgICAgICAgICAgID8gJ9Ck0LjQtyDQu9C40YbQsNC8J1xyXG4gICAgICAgICAgICAgIDogJ9Cu0YAg0LvQuNGG0LDQvCd9PC9oMT5cclxuICAgICAgICAgIDxoMj7Qn9GA0L7QtNC+0LvQttC10L3QuNC1XHJcbiAgICAgICAgICAgIDxicj48L2JyPtCw0L3QutC10YLRizo8L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtX3NlcnZpY2UgJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtX2hlYWRlcic+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0ZXAgPT09ICcxJyA/ICdhY3RpdmUnIDogJyd9PjEg0KjQsNCzPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3RlcCA9PT0gJzInJiYgJ2FjdGl2ZSd9PjIg0KjQsNCzPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3RlcCA9PT0gJzMnICYmICdhY3RpdmUnfT4zINCo0LDQszwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAge3N0ZXAgPT09ICcxJyAmJiA8Rmlyc3RSZWcgIHNldExvYWRpbmc9e3NldExvYWRpbmd9Lz59XHJcbiAgICAgICAgICB7c3RlcCA9PT0gJzInICYmIDxTZWNvbmRTdGVwIHNldExvYWRpbmc9e3NldExvYWRpbmd9IC8+fVxyXG4gICAgICAgICAge3N0ZXAgPT09ICczJyAmJiA8VGhpcmRTdGVwIHNldExvYWRpbmc9e3NldExvYWRpbmd9IC8+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGgoQ29udGludWUpIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSdcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuZXhwb3J0IGNvbnN0IGF1dGhlbnRpY2F0aW5nVXNlciA9ICgpID0+ICh7IHR5cGU6ICdBVVRIRU5USUNBVElOR19VU0VSJyB9KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRDdXJyZW50VXNlciA9IHVzZXJEYXRhID0+ICh7XHJcbiAgdHlwZTogJ1NFVF9DVVJSRU5UX1VTRVInLFxyXG4gIHBheWxvYWQ6IHVzZXJEYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRVc2VyID0gKCkgPT4gKHtcclxuICB0eXBlOiAnTE9HT1VUX1VTRVInLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dPdXRBY3Rpb24gPSAoKSA9PiBkaXNwYXRjaD0+IHtcclxuICBkaXNwYXRjaChsb2dvdXRVc2VyKCkpXHJcbiAgY29va2llLnJlbW92ZSgndG9rZW4nKVxyXG4gIFJvdXRlci5wdXNoKCcvbG9naW4nKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5Vc2VyID0gKHZhbHVlcywgc2V0RXJyb3IpID0+IGRpc3BhdGNoID0+IHtcclxuICBkaXNwYXRjaChhdXRoZW50aWNhdGluZ1VzZXIoKSlcclxuICBheGlvcy5wb3N0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9zaWduSW5gLCB2YWx1ZXMpXHJcbiAgICAudGhlbihyZXM9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgaWYoIXJlcy5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICBzZXRFcnJvcihyZXMuZGF0YS5tZXNzYWdlKVxyXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnRkFJTEVEX0xPR0lOJ30pXHJcbiAgICAgIH1lbHNlIHtcclxuICAgICAgICBjb29raWUuc2V0KCd0b2tlbicsIHJlcy5kYXRhLnRva2VuLCB7ZXhwaXJlczogNjB9KVxyXG5cclxuICAgICAgICBheGlvcy5wb3N0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9nZXREYXRhYCwge3Rva2VuOiByZXMuZGF0YS50b2tlbn0pXHJcbiAgICAgICAgICAudGhlbihyZXM9PiB7XHJcbiAgICAgICAgICAgIGlmKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICBkaXNwYXRjaChzZXRDdXJyZW50VXNlcihyZXMuZGF0YSkpXHJcbiAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9jYWJpbmV0JylcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnRkFJTEVEX0xPR0lOJ30pXHJcbiAgICAgICAgICAgICAgY29va2llLnJlbW92ZSgndG9rZW4nKVxyXG4gICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKGVycj0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdGQUlMRURfTE9HSU4nfSlcclxuICAgICAgICAgICAgY29va2llLnJlbW92ZSgndG9rZW4nKVxyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2xvZ2luJylcclxuICAgICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuZXhwb3J0IGNvbnN0IGZldGNoQ3VycmVudFVzZXIgPSAoKSA9PiBkaXNwYXRjaCA9PiB7XHJcbiAgZGlzcGF0Y2goYXV0aGVudGljYXRpbmdVc2VyKCkpO1xyXG4gIGF4aW9zLnBvc3QoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L2dldERhdGFgLCB7dG9rZW46IGNvb2tpZS5nZXQoJ3Rva2VuJyl9KVxyXG4gICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgaWYocmVzLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgIGRpc3BhdGNoKHNldEN1cnJlbnRVc2VyKHJlcy5kYXRhKSlcclxuICAgICAgfWVsc2Uge1xyXG4gICAgICAgIGRpc3BhdGNoKGxvZ291dFVzZXIpXHJcbiAgICAgICAgY29va2llLnJlbW92ZSgndG9rZW4nKVxyXG4gICAgICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKGxvZ291dFVzZXIpXHJcbiAgICAgIGNvb2tpZS5yZW1vdmUoJ3Rva2VuJylcclxuICAgICAgUm91dGVyLnB1c2goJy8nKVxyXG4gICAgfSlcclxufSJdLCJzb3VyY2VSb290IjoiIn0=