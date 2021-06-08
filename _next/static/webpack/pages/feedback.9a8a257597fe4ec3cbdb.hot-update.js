self["webpackHotUpdate_N_E"]("pages/feedback",{

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _objectWithoutProperties; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__.default)(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _objectWithoutPropertiesLoose; }
/* harmony export */ });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./components/Masks/PhoneMask.js":
/*!***************************************!*\
  !*** ./components/Masks/PhoneMask.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var E_job_nashcompany_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-input-mask */ "./node_modules/react-input-mask/index.js");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "E:\\job\\nashcompany\\components\\Masks\\PhoneMask.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var PhoneMask = function PhoneMask(_ref) {
  _s();

  var field = _ref.field,
      form = _ref.form,
      props = (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.default)(_ref, ["field", "form"]);

  var getPhone = function getPhone(value) {
    var defaultMask = "+7(999)-999-9999";
    return defaultMask;
  };

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
    value: '',
    mask: getPhone()
  }),
      items = _useState[0],
      setItems = _useState[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react_input_mask__WEBPACK_IMPORTED_MODULE_4___default()), _objectSpread(_objectSpread(_objectSpread({}, items), {}, {
    maskChar: null,
    className: "my-input"
  }, field), props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 3
  }, _this);
};

_s(PhoneMask, "/ag2wCkC71hC+JBrV2pqnhHVbIY=");

_c = PhoneMask;
/* harmony default export */ __webpack_exports__["default"] = (PhoneMask);

var _c;

$RefreshReg$(_c, "PhoneMask");

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

/***/ "./components/feedback/Feedback.js":
/*!*****************************************!*\
  !*** ./components/feedback/Feedback.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-input-mask */ "./node_modules/react-input-mask/index.js");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Masks_PhoneMask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Masks/PhoneMask */ "./components/Masks/PhoneMask.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "E:\\job\\nashcompany\\components\\feedback\\Feedback.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var FeedbackForm = function FeedbackForm() {
  _s();

  var _jsxDEV2;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    fio: '',
    phone: '',
    comment: ''
  }),
      date = _useState[0],
      setDate = _useState[1];

  var _onChange = function onChange(e) {
    var name = e.target.name;
    setDate(_objectSpread(_objectSpread({}, date), {}, (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, name, e.target.value)));
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "form_register",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        name: "fio",
        type: "text",
        className: "capitalize",
        value: date.fio,
        onChange: function onChange(e) {
          return _onChange(e);
        },
        placeholder: "\u0412\u0430\u0448\u0435 \u0438\u043C\u044F"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_input_mask__WEBPACK_IMPORTED_MODULE_3___default()), {
        type: "tel",
        placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043B\u0435\u0444\u043E\u043D \u043D\u043E\u043C\u0435\u0440",
        name: "phone",
        mask: "+7(999)-999-9999",
        maskChar: null,
        value: date.phone,
        onChange: function onChange(e) {
          return _onChange(e);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("textarea", {
        placeholder: "\u041E\u0442\u0437\u044B\u0432",
        name: "comment",
        onChange: function onChange(e) {
          return _onChange(e);
        },
        value: date.comment
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", (_jsxDEV2 = {
        className: "singlebtn",
        type: "submit"
      }, (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_jsxDEV2, "className", "button"), (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_jsxDEV2, "value", "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"), _jsxDEV2), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, _this);
};

_s(FeedbackForm, "bzam4RVxY0JXd5WxOE1jr1gqhuU=");

_c = FeedbackForm;
/* harmony default export */ __webpack_exports__["default"] = (FeedbackForm);

var _c;

$RefreshReg$(_c, "FeedbackForm");

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

/***/ "./pages/feedback.js":
/*!***************************!*\
  !*** ./pages/feedback.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_shared_Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/shared/Nav */ "./components/shared/Nav.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_loader_Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/loader/Loader */ "./components/loader/Loader.js");
/* harmony import */ var _components_feedback_Feedback__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/feedback/Feedback */ "./components/feedback/Feedback.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\job\\nashcompany\\pages\\feedback.js",
    _this = undefined,
    _s = $RefreshSig$();









var Feedback = function Feedback() {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      loading = _useState[0],
      setLoading = _useState[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "getservice",
    children: [loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_loader_Loader__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 19
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043E\u0442\u0437\u044B\u0432"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "header",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Nav__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "bg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "form_headings",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043E\u0442\u0437\u044B\u0432"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "form_service ",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_feedback_Feedback__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, _this);
};

_s(Feedback, "OeGW3YQfIEwiDdtbkZtE38+y0P4=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];
});

_c = Feedback;
/* harmony default export */ __webpack_exports__["default"] = (Feedback);

var _c;

$RefreshReg$(_c, "Feedback");

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

/***/ "./node_modules/invariant/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/invariant/browser.js ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (true) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "./node_modules/react-input-mask/index.js":
/*!************************************************!*\
  !*** ./node_modules/react-input-mask/index.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

if (false) {} else {
  module.exports = __webpack_require__(/*! ./lib/react-input-mask.development.js */ "./node_modules/react-input-mask/lib/react-input-mask.development.js");
}


/***/ }),

/***/ "./node_modules/react-input-mask/lib/react-input-mask.development.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-input-mask/lib/react-input-mask.development.js ***!
  \***************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
var invariant = _interopDefault(__webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js"));
var warning = _interopDefault(__webpack_require__(/*! warning */ "./node_modules/warning/warning.js"));

function _defaults2(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _defaults2(subClass, superClass);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function setInputSelection(input, start, end) {
  if ('selectionStart' in input && 'selectionEnd' in input) {
    input.selectionStart = start;
    input.selectionEnd = end;
  } else {
    var range = input.createTextRange();
    range.collapse(true);
    range.moveStart('character', start);
    range.moveEnd('character', end - start);
    range.select();
  }
}
function getInputSelection(input) {
  var start = 0;
  var end = 0;

  if ('selectionStart' in input && 'selectionEnd' in input) {
    start = input.selectionStart;
    end = input.selectionEnd;
  } else {
    var range = document.selection.createRange();

    if (range.parentElement() === input) {
      start = -range.moveStart('character', -input.value.length);
      end = -range.moveEnd('character', -input.value.length);
    }
  }

  return {
    start: start,
    end: end,
    length: end - start
  };
}

var defaultFormatChars = {
  '9': '[0-9]',
  'a': '[A-Za-z]',
  '*': '[A-Za-z0-9]'
};
var defaultMaskChar = '_';

function parseMask (mask, maskChar, formatChars) {
  var parsedMaskString = '';
  var prefix = '';
  var lastEditablePosition = null;
  var permanents = [];

  if (maskChar === undefined) {
    maskChar = defaultMaskChar;
  }

  if (formatChars == null) {
    formatChars = defaultFormatChars;
  }

  if (!mask || typeof mask !== 'string') {
    return {
      maskChar: maskChar,
      formatChars: formatChars,
      mask: null,
      prefix: null,
      lastEditablePosition: null,
      permanents: []
    };
  }

  var isPermanent = false;
  mask.split('').forEach(function (character) {
    if (!isPermanent && character === '\\') {
      isPermanent = true;
    } else {
      if (isPermanent || !formatChars[character]) {
        permanents.push(parsedMaskString.length);

        if (parsedMaskString.length === permanents.length - 1) {
          prefix += character;
        }
      } else {
        lastEditablePosition = parsedMaskString.length + 1;
      }

      parsedMaskString += character;
      isPermanent = false;
    }
  });
  return {
    maskChar: maskChar,
    formatChars: formatChars,
    prefix: prefix,
    mask: parsedMaskString,
    lastEditablePosition: lastEditablePosition,
    permanents: permanents
  };
}

/* eslint no-use-before-define: ["error", { functions: false }] */
function isPermanentCharacter(maskOptions, pos) {
  return maskOptions.permanents.indexOf(pos) !== -1;
}
function isAllowedCharacter(maskOptions, pos, character) {
  var mask = maskOptions.mask,
      formatChars = maskOptions.formatChars;

  if (!character) {
    return false;
  }

  if (isPermanentCharacter(maskOptions, pos)) {
    return mask[pos] === character;
  }

  var ruleChar = mask[pos];
  var charRule = formatChars[ruleChar];
  return new RegExp(charRule).test(character);
}
function isEmpty(maskOptions, value) {
  return value.split('').every(function (character, i) {
    return isPermanentCharacter(maskOptions, i) || !isAllowedCharacter(maskOptions, i, character);
  });
}
function getFilledLength(maskOptions, value) {
  var maskChar = maskOptions.maskChar,
      prefix = maskOptions.prefix;

  if (!maskChar) {
    while (value.length > prefix.length && isPermanentCharacter(maskOptions, value.length - 1)) {
      value = value.slice(0, value.length - 1);
    }

    return value.length;
  }

  var filledLength = prefix.length;

  for (var i = value.length; i >= prefix.length; i--) {
    var character = value[i];
    var isEnteredCharacter = !isPermanentCharacter(maskOptions, i) && isAllowedCharacter(maskOptions, i, character);

    if (isEnteredCharacter) {
      filledLength = i + 1;
      break;
    }
  }

  return filledLength;
}
function isFilled(maskOptions, value) {
  return getFilledLength(maskOptions, value) === maskOptions.mask.length;
}
function formatValue(maskOptions, value) {
  var maskChar = maskOptions.maskChar,
      mask = maskOptions.mask,
      prefix = maskOptions.prefix;

  if (!maskChar) {
    value = insertString(maskOptions, '', value, 0);

    if (value.length < prefix.length) {
      value = prefix;
    }

    while (value.length < mask.length && isPermanentCharacter(maskOptions, value.length)) {
      value += mask[value.length];
    }

    return value;
  }

  if (value) {
    var emptyValue = formatValue(maskOptions, '');
    return insertString(maskOptions, emptyValue, value, 0);
  }

  for (var i = 0; i < mask.length; i++) {
    if (isPermanentCharacter(maskOptions, i)) {
      value += mask[i];
    } else {
      value += maskChar;
    }
  }

  return value;
}
function clearRange(maskOptions, value, start, len) {
  var end = start + len;
  var maskChar = maskOptions.maskChar,
      mask = maskOptions.mask,
      prefix = maskOptions.prefix;
  var arrayValue = value.split('');

  if (!maskChar) {
    // remove any permanent chars after clear range, they will be added back by formatValue
    for (var i = end; i < arrayValue.length; i++) {
      if (isPermanentCharacter(maskOptions, i)) {
        arrayValue[i] = '';
      }
    }

    start = Math.max(prefix.length, start);
    arrayValue.splice(start, end - start);
    value = arrayValue.join('');
    return formatValue(maskOptions, value);
  }

  return arrayValue.map(function (character, i) {
    if (i < start || i >= end) {
      return character;
    }

    if (isPermanentCharacter(maskOptions, i)) {
      return mask[i];
    }

    return maskChar;
  }).join('');
}
function insertString(maskOptions, value, insertStr, insertPosition) {
  var mask = maskOptions.mask,
      maskChar = maskOptions.maskChar,
      prefix = maskOptions.prefix;
  var arrayInsertStr = insertStr.split('');
  var isInputFilled = isFilled(maskOptions, value);

  var isUsablePosition = function isUsablePosition(pos, character) {
    return !isPermanentCharacter(maskOptions, pos) || character === mask[pos];
  };

  var isUsableCharacter = function isUsableCharacter(character, pos) {
    return !maskChar || !isPermanentCharacter(maskOptions, pos) || character !== maskChar;
  };

  if (!maskChar && insertPosition > value.length) {
    value += mask.slice(value.length, insertPosition);
  }

  arrayInsertStr.every(function (insertCharacter) {
    while (!isUsablePosition(insertPosition, insertCharacter)) {
      if (insertPosition >= value.length) {
        value += mask[insertPosition];
      }

      if (!isUsableCharacter(insertCharacter, insertPosition)) {
        return true;
      }

      insertPosition++; // stop iteration if maximum value length reached

      if (insertPosition >= mask.length) {
        return false;
      }
    }

    var isAllowed = isAllowedCharacter(maskOptions, insertPosition, insertCharacter) || insertCharacter === maskChar;

    if (!isAllowed) {
      return true;
    }

    if (insertPosition < value.length) {
      if (maskChar || isInputFilled || insertPosition < prefix.length) {
        value = value.slice(0, insertPosition) + insertCharacter + value.slice(insertPosition + 1);
      } else {
        value = value.slice(0, insertPosition) + insertCharacter + value.slice(insertPosition);
        value = formatValue(maskOptions, value);
      }
    } else if (!maskChar) {
      value += insertCharacter;
    }

    insertPosition++; // stop iteration if maximum value length reached

    return insertPosition < mask.length;
  });
  return value;
}
function getInsertStringLength(maskOptions, value, insertStr, insertPosition) {
  var mask = maskOptions.mask,
      maskChar = maskOptions.maskChar;
  var arrayInsertStr = insertStr.split('');
  var initialInsertPosition = insertPosition;

  var isUsablePosition = function isUsablePosition(pos, character) {
    return !isPermanentCharacter(maskOptions, pos) || character === mask[pos];
  };

  arrayInsertStr.every(function (insertCharacter) {
    while (!isUsablePosition(insertPosition, insertCharacter)) {
      insertPosition++; // stop iteration if maximum value length reached

      if (insertPosition >= mask.length) {
        return false;
      }
    }

    var isAllowed = isAllowedCharacter(maskOptions, insertPosition, insertCharacter) || insertCharacter === maskChar;

    if (isAllowed) {
      insertPosition++;
    } // stop iteration if maximum value length reached


    return insertPosition < mask.length;
  });
  return insertPosition - initialInsertPosition;
}
function getLeftEditablePosition(maskOptions, pos) {
  for (var i = pos; i >= 0; --i) {
    if (!isPermanentCharacter(maskOptions, i)) {
      return i;
    }
  }

  return null;
}
function getRightEditablePosition(maskOptions, pos) {
  var mask = maskOptions.mask;

  for (var i = pos; i < mask.length; ++i) {
    if (!isPermanentCharacter(maskOptions, i)) {
      return i;
    }
  }

  return null;
}
function getStringValue(value) {
  return !value && value !== 0 ? '' : value + '';
}

function processChange(maskOptions, value, selection, previousValue, previousSelection) {
  var mask = maskOptions.mask,
      prefix = maskOptions.prefix,
      lastEditablePosition = maskOptions.lastEditablePosition;
  var newValue = value;
  var enteredString = '';
  var formattedEnteredStringLength = 0;
  var removedLength = 0;
  var cursorPosition = Math.min(previousSelection.start, selection.start);

  if (selection.end > previousSelection.start) {
    enteredString = newValue.slice(previousSelection.start, selection.end);
    formattedEnteredStringLength = getInsertStringLength(maskOptions, previousValue, enteredString, cursorPosition);

    if (!formattedEnteredStringLength) {
      removedLength = 0;
    } else {
      removedLength = previousSelection.length;
    }
  } else if (newValue.length < previousValue.length) {
    removedLength = previousValue.length - newValue.length;
  }

  newValue = previousValue;

  if (removedLength) {
    if (removedLength === 1 && !previousSelection.length) {
      var deleteFromRight = previousSelection.start === selection.start;
      cursorPosition = deleteFromRight ? getRightEditablePosition(maskOptions, selection.start) : getLeftEditablePosition(maskOptions, selection.start);
    }

    newValue = clearRange(maskOptions, newValue, cursorPosition, removedLength);
  }

  newValue = insertString(maskOptions, newValue, enteredString, cursorPosition);
  cursorPosition = cursorPosition + formattedEnteredStringLength;

  if (cursorPosition >= mask.length) {
    cursorPosition = mask.length;
  } else if (cursorPosition < prefix.length && !formattedEnteredStringLength) {
    cursorPosition = prefix.length;
  } else if (cursorPosition >= prefix.length && cursorPosition < lastEditablePosition && formattedEnteredStringLength) {
    cursorPosition = getRightEditablePosition(maskOptions, cursorPosition);
  }

  newValue = formatValue(maskOptions, newValue);

  if (!enteredString) {
    enteredString = null;
  }

  return {
    value: newValue,
    enteredString: enteredString,
    selection: {
      start: cursorPosition,
      end: cursorPosition
    }
  };
}

function isWindowsPhoneBrowser() {
  var windows = new RegExp('windows', 'i');
  var phone = new RegExp('phone', 'i');
  var ua = navigator.userAgent;
  return windows.test(ua) && phone.test(ua);
}

function isFunction(value) {
  return typeof value === 'function';
}

function getRequestAnimationFrame() {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
}

function getCancelAnimationFrame() {
  return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame;
}

function defer(fn) {
  var hasCancelAnimationFrame = !!getCancelAnimationFrame();
  var deferFn;

  if (hasCancelAnimationFrame) {
    deferFn = getRequestAnimationFrame();
  } else {
    deferFn = function deferFn() {
      return setTimeout(fn, 1000 / 60);
    };
  }

  return deferFn(fn);
}
function cancelDefer(deferId) {
  var cancelFn = getCancelAnimationFrame() || clearTimeout;
  cancelFn(deferId);
}

var InputElement =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(InputElement, _React$Component);

  function InputElement(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.focused = false;
    _this.mounted = false;
    _this.previousSelection = null;
    _this.selectionDeferId = null;
    _this.saveSelectionLoopDeferId = null;

    _this.saveSelectionLoop = function () {
      _this.previousSelection = _this.getSelection();
      _this.saveSelectionLoopDeferId = defer(_this.saveSelectionLoop);
    };

    _this.runSaveSelectionLoop = function () {
      if (_this.saveSelectionLoopDeferId === null) {
        _this.saveSelectionLoop();
      }
    };

    _this.stopSaveSelectionLoop = function () {
      if (_this.saveSelectionLoopDeferId !== null) {
        cancelDefer(_this.saveSelectionLoopDeferId);
        _this.saveSelectionLoopDeferId = null;
        _this.previousSelection = null;
      }
    };

    _this.getInputDOMNode = function () {
      if (!_this.mounted) {
        return null;
      }

      var input = reactDom.findDOMNode(_assertThisInitialized(_assertThisInitialized(_this)));
      var isDOMNode = typeof window !== 'undefined' && input instanceof window.Element; // workaround for react-test-renderer
      // https://github.com/sanniassin/react-input-mask/issues/147

      if (input && !isDOMNode) {
        return null;
      }

      if (input.nodeName !== 'INPUT') {
        input = input.querySelector('input');
      }

      if (!input) {
        throw new Error('react-input-mask: inputComponent doesn\'t contain input node');
      }

      return input;
    };

    _this.getInputValue = function () {
      var input = _this.getInputDOMNode();

      if (!input) {
        return null;
      }

      return input.value;
    };

    _this.setInputValue = function (value) {
      var input = _this.getInputDOMNode();

      if (!input) {
        return;
      }

      _this.value = value;
      input.value = value;
    };

    _this.setCursorToEnd = function () {
      var filledLength = getFilledLength(_this.maskOptions, _this.value);
      var pos = getRightEditablePosition(_this.maskOptions, filledLength);

      if (pos !== null) {
        _this.setCursorPosition(pos);
      }
    };

    _this.setSelection = function (start, end, options) {
      if (options === void 0) {
        options = {};
      }

      var input = _this.getInputDOMNode();

      var isFocused = _this.isFocused(); // don't change selection on unfocused input
      // because Safari sets focus on selection change (#154)


      if (!input || !isFocused) {
        return;
      }

      var _options = options,
          deferred = _options.deferred;

      if (!deferred) {
        setInputSelection(input, start, end);
      }

      if (_this.selectionDeferId !== null) {
        cancelDefer(_this.selectionDeferId);
      } // deferred selection update is required for pre-Lollipop Android browser,
      // but for consistent behavior we do it for all browsers


      _this.selectionDeferId = defer(function () {
        _this.selectionDeferId = null;
        setInputSelection(input, start, end);
      });
      _this.previousSelection = {
        start: start,
        end: end,
        length: Math.abs(end - start)
      };
    };

    _this.getSelection = function () {
      var input = _this.getInputDOMNode();

      return getInputSelection(input);
    };

    _this.getCursorPosition = function () {
      return _this.getSelection().start;
    };

    _this.setCursorPosition = function (pos) {
      _this.setSelection(pos, pos);
    };

    _this.isFocused = function () {
      return _this.focused;
    };

    _this.getBeforeMaskedValueChangeConfig = function () {
      var _this$maskOptions = _this.maskOptions,
          mask = _this$maskOptions.mask,
          maskChar = _this$maskOptions.maskChar,
          permanents = _this$maskOptions.permanents,
          formatChars = _this$maskOptions.formatChars;
      var alwaysShowMask = _this.props.alwaysShowMask;
      return {
        mask: mask,
        maskChar: maskChar,
        permanents: permanents,
        alwaysShowMask: !!alwaysShowMask,
        formatChars: formatChars
      };
    };

    _this.isInputAutofilled = function (value, selection, previousValue, previousSelection) {
      var input = _this.getInputDOMNode(); // only check for positive match because it will be false negative
      // in case of autofill simulation in tests
      //
      // input.matches throws an exception if selector isn't supported


      try {
        if (input.matches(':-webkit-autofill')) {
          return true;
        }
      } catch (e) {} // if input isn't focused then change event must have been triggered
      // either by autofill or event simulation in tests


      if (!_this.focused) {
        return true;
      } // if cursor has moved to the end while previousSelection forbids it
      // then it must be autofill


      return previousSelection.end < previousValue.length && selection.end === value.length;
    };

    _this.onChange = function (event) {
      var _assertThisInitialize = _assertThisInitialized(_assertThisInitialized(_this)),
          beforePasteState = _assertThisInitialize.beforePasteState;

      var _assertThisInitialize2 = _assertThisInitialized(_assertThisInitialized(_this)),
          previousSelection = _assertThisInitialize2.previousSelection;

      var beforeMaskedValueChange = _this.props.beforeMaskedValueChange;

      var value = _this.getInputValue();

      var previousValue = _this.value;

      var selection = _this.getSelection(); // autofill replaces entire value, ignore old one
      // https://github.com/sanniassin/react-input-mask/issues/113


      if (_this.isInputAutofilled(value, selection, previousValue, previousSelection)) {
        previousValue = formatValue(_this.maskOptions, '');
        previousSelection = {
          start: 0,
          end: 0,
          length: 0
        };
      } // set value and selection as if we haven't
      // cleared input in onPaste handler


      if (beforePasteState) {
        previousSelection = beforePasteState.selection;
        previousValue = beforePasteState.value;
        selection = {
          start: previousSelection.start + value.length,
          end: previousSelection.start + value.length,
          length: 0
        };
        value = previousValue.slice(0, previousSelection.start) + value + previousValue.slice(previousSelection.end);
        _this.beforePasteState = null;
      }

      var changedState = processChange(_this.maskOptions, value, selection, previousValue, previousSelection);
      var enteredString = changedState.enteredString;
      var newSelection = changedState.selection;
      var newValue = changedState.value;

      if (isFunction(beforeMaskedValueChange)) {
        var modifiedValue = beforeMaskedValueChange({
          value: newValue,
          selection: newSelection
        }, {
          value: previousValue,
          selection: previousSelection
        }, enteredString, _this.getBeforeMaskedValueChangeConfig());
        newValue = modifiedValue.value;
        newSelection = modifiedValue.selection;
      }

      _this.setInputValue(newValue);

      if (isFunction(_this.props.onChange)) {
        _this.props.onChange(event);
      }

      if (_this.isWindowsPhoneBrowser) {
        _this.setSelection(newSelection.start, newSelection.end, {
          deferred: true
        });
      } else {
        _this.setSelection(newSelection.start, newSelection.end);
      }
    };

    _this.onFocus = function (event) {
      var beforeMaskedValueChange = _this.props.beforeMaskedValueChange;
      var _this$maskOptions2 = _this.maskOptions,
          mask = _this$maskOptions2.mask,
          prefix = _this$maskOptions2.prefix;
      _this.focused = true; // if autoFocus is set, onFocus triggers before componentDidMount

      _this.mounted = true;

      if (mask) {
        if (!_this.value) {
          var emptyValue = formatValue(_this.maskOptions, prefix);
          var newValue = formatValue(_this.maskOptions, emptyValue);
          var filledLength = getFilledLength(_this.maskOptions, newValue);
          var cursorPosition = getRightEditablePosition(_this.maskOptions, filledLength);
          var newSelection = {
            start: cursorPosition,
            end: cursorPosition
          };

          if (isFunction(beforeMaskedValueChange)) {
            var modifiedValue = beforeMaskedValueChange({
              value: newValue,
              selection: newSelection
            }, {
              value: _this.value,
              selection: null
            }, null, _this.getBeforeMaskedValueChangeConfig());
            newValue = modifiedValue.value;
            newSelection = modifiedValue.selection;
          }

          var isInputValueChanged = newValue !== _this.getInputValue();

          if (isInputValueChanged) {
            _this.setInputValue(newValue);
          }

          if (isInputValueChanged && isFunction(_this.props.onChange)) {
            _this.props.onChange(event);
          }

          _this.setSelection(newSelection.start, newSelection.end);
        } else if (getFilledLength(_this.maskOptions, _this.value) < _this.maskOptions.mask.length) {
          _this.setCursorToEnd();
        }

        _this.runSaveSelectionLoop();
      }

      if (isFunction(_this.props.onFocus)) {
        _this.props.onFocus(event);
      }
    };

    _this.onBlur = function (event) {
      var beforeMaskedValueChange = _this.props.beforeMaskedValueChange;
      var mask = _this.maskOptions.mask;

      _this.stopSaveSelectionLoop();

      _this.focused = false;

      if (mask && !_this.props.alwaysShowMask && isEmpty(_this.maskOptions, _this.value)) {
        var newValue = '';

        if (isFunction(beforeMaskedValueChange)) {
          var modifiedValue = beforeMaskedValueChange({
            value: newValue,
            selection: null
          }, {
            value: _this.value,
            selection: _this.previousSelection
          }, null, _this.getBeforeMaskedValueChangeConfig());
          newValue = modifiedValue.value;
        }

        var isInputValueChanged = newValue !== _this.getInputValue();

        if (isInputValueChanged) {
          _this.setInputValue(newValue);
        }

        if (isInputValueChanged && isFunction(_this.props.onChange)) {
          _this.props.onChange(event);
        }
      }

      if (isFunction(_this.props.onBlur)) {
        _this.props.onBlur(event);
      }
    };

    _this.onMouseDown = function (event) {
      // tiny unintentional mouse movements can break cursor
      // position on focus, so we have to restore it in that case
      //
      // https://github.com/sanniassin/react-input-mask/issues/108
      if (!_this.focused && document.addEventListener) {
        _this.mouseDownX = event.clientX;
        _this.mouseDownY = event.clientY;
        _this.mouseDownTime = new Date().getTime();

        var mouseUpHandler = function mouseUpHandler(mouseUpEvent) {
          document.removeEventListener('mouseup', mouseUpHandler);

          if (!_this.focused) {
            return;
          }

          var deltaX = Math.abs(mouseUpEvent.clientX - _this.mouseDownX);
          var deltaY = Math.abs(mouseUpEvent.clientY - _this.mouseDownY);
          var axisDelta = Math.max(deltaX, deltaY);

          var timeDelta = new Date().getTime() - _this.mouseDownTime;

          if (axisDelta <= 10 && timeDelta <= 200 || axisDelta <= 5 && timeDelta <= 300) {
            _this.setCursorToEnd();
          }
        };

        document.addEventListener('mouseup', mouseUpHandler);
      }

      if (isFunction(_this.props.onMouseDown)) {
        _this.props.onMouseDown(event);
      }
    };

    _this.onPaste = function (event) {
      if (isFunction(_this.props.onPaste)) {
        _this.props.onPaste(event);
      } // event.clipboardData might not work in Android browser
      // cleaning input to get raw text inside onChange handler


      if (!event.defaultPrevented) {
        _this.beforePasteState = {
          value: _this.getInputValue(),
          selection: _this.getSelection()
        };

        _this.setInputValue('');
      }
    };

    _this.handleRef = function (ref) {
      if (_this.props.children == null && isFunction(_this.props.inputRef)) {
        _this.props.inputRef(ref);
      }
    };

    var _mask = props.mask,
        _maskChar = props.maskChar,
        _formatChars = props.formatChars,
        _alwaysShowMask = props.alwaysShowMask,
        _beforeMaskedValueChange = props.beforeMaskedValueChange;
    var defaultValue = props.defaultValue,
        _value = props.value;
    _this.maskOptions = parseMask(_mask, _maskChar, _formatChars);

    if (defaultValue == null) {
      defaultValue = '';
    }

    if (_value == null) {
      _value = defaultValue;
    }

    var _newValue = getStringValue(_value);

    if (_this.maskOptions.mask && (_alwaysShowMask || _newValue)) {
      _newValue = formatValue(_this.maskOptions, _newValue);

      if (isFunction(_beforeMaskedValueChange)) {
        var oldValue = props.value;

        if (props.value == null) {
          oldValue = defaultValue;
        }

        oldValue = getStringValue(oldValue);

        var modifiedValue = _beforeMaskedValueChange({
          value: _newValue,
          selection: null
        }, {
          value: oldValue,
          selection: null
        }, null, _this.getBeforeMaskedValueChangeConfig());

        _newValue = modifiedValue.value;
      }
    }

    _this.value = _newValue;
    return _this;
  }

  var _proto = InputElement.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true; // workaround for react-test-renderer
    // https://github.com/sanniassin/react-input-mask/issues/147

    if (!this.getInputDOMNode()) {
      return;
    }

    this.isWindowsPhoneBrowser = isWindowsPhoneBrowser();

    if (this.maskOptions.mask && this.getInputValue() !== this.value) {
      this.setInputValue(this.value);
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    var previousSelection = this.previousSelection;
    var _this$props = this.props,
        beforeMaskedValueChange = _this$props.beforeMaskedValueChange,
        alwaysShowMask = _this$props.alwaysShowMask,
        mask = _this$props.mask,
        maskChar = _this$props.maskChar,
        formatChars = _this$props.formatChars;
    var previousMaskOptions = this.maskOptions;
    var showEmpty = alwaysShowMask || this.isFocused();
    var hasValue = this.props.value != null;
    var newValue = hasValue ? getStringValue(this.props.value) : this.value;
    var cursorPosition = previousSelection ? previousSelection.start : null;
    this.maskOptions = parseMask(mask, maskChar, formatChars);

    if (!this.maskOptions.mask) {
      if (previousMaskOptions.mask) {
        this.stopSaveSelectionLoop(); // render depends on this.maskOptions and this.value,
        // call forceUpdate to keep it in sync

        this.forceUpdate();
      }

      return;
    } else if (!previousMaskOptions.mask && this.isFocused()) {
      this.runSaveSelectionLoop();
    }

    var isMaskChanged = this.maskOptions.mask && this.maskOptions.mask !== previousMaskOptions.mask;

    if (!previousMaskOptions.mask && !hasValue) {
      newValue = this.getInputValue();
    }

    if (isMaskChanged || this.maskOptions.mask && (newValue || showEmpty)) {
      newValue = formatValue(this.maskOptions, newValue);
    }

    if (isMaskChanged) {
      var filledLength = getFilledLength(this.maskOptions, newValue);

      if (cursorPosition === null || filledLength < cursorPosition) {
        if (isFilled(this.maskOptions, newValue)) {
          cursorPosition = filledLength;
        } else {
          cursorPosition = getRightEditablePosition(this.maskOptions, filledLength);
        }
      }
    }

    if (this.maskOptions.mask && isEmpty(this.maskOptions, newValue) && !showEmpty && (!hasValue || !this.props.value)) {
      newValue = '';
    }

    var newSelection = {
      start: cursorPosition,
      end: cursorPosition
    };

    if (isFunction(beforeMaskedValueChange)) {
      var modifiedValue = beforeMaskedValueChange({
        value: newValue,
        selection: newSelection
      }, {
        value: this.value,
        selection: this.previousSelection
      }, null, this.getBeforeMaskedValueChangeConfig());
      newValue = modifiedValue.value;
      newSelection = modifiedValue.selection;
    }

    this.value = newValue;
    var isValueChanged = this.getInputValue() !== this.value; // render depends on this.maskOptions and this.value,
    // call forceUpdate to keep it in sync

    if (isValueChanged) {
      this.setInputValue(this.value);
      this.forceUpdate();
    } else if (isMaskChanged) {
      this.forceUpdate();
    }

    var isSelectionChanged = false;

    if (newSelection.start != null && newSelection.end != null) {
      isSelectionChanged = !previousSelection || previousSelection.start !== newSelection.start || previousSelection.end !== newSelection.end;
    }

    if (isSelectionChanged || isValueChanged) {
      this.setSelection(newSelection.start, newSelection.end);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;

    if (this.selectionDeferId !== null) {
      cancelDefer(this.selectionDeferId);
    }

    this.stopSaveSelectionLoop();
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        mask = _this$props2.mask,
        alwaysShowMask = _this$props2.alwaysShowMask,
        maskChar = _this$props2.maskChar,
        formatChars = _this$props2.formatChars,
        inputRef = _this$props2.inputRef,
        beforeMaskedValueChange = _this$props2.beforeMaskedValueChange,
        children = _this$props2.children,
        restProps = _objectWithoutPropertiesLoose(_this$props2, ["mask", "alwaysShowMask", "maskChar", "formatChars", "inputRef", "beforeMaskedValueChange", "children"]);

    var inputElement;
     true ? warning( // parse mask to test against actual mask prop as this.maskOptions
    // will be updated later in componentDidUpdate
    !restProps.maxLength || !parseMask(mask, maskChar, formatChars).mask, 'react-input-mask: maxLength property shouldn\'t be passed to the masked input. It breaks masking and unnecessary because length is limited by the mask length.') : 0;

    if (children) {
      !isFunction(children) ?  true ? invariant(false, 'react-input-mask: children must be a function') : 0 : void 0;
      var controlledProps = ['onChange', 'onPaste', 'onMouseDown', 'onFocus', 'onBlur', 'value', 'disabled', 'readOnly'];

      var childrenProps = _extends({}, restProps);

      controlledProps.forEach(function (propId) {
        return delete childrenProps[propId];
      });
      inputElement = children(childrenProps);
      var conflictProps = controlledProps.filter(function (propId) {
        return inputElement.props[propId] != null && inputElement.props[propId] !== restProps[propId];
      });
      !!conflictProps.length ?  true ? invariant(false, "react-input-mask: the following props should be passed to the react-input-mask's component and should not be altered in children's function: " + conflictProps.join(', ')) : 0 : void 0;
       true ? warning(!inputRef, 'react-input-mask: inputRef is ignored when children is passed, attach ref to the children instead') : 0;
    } else {
      inputElement = React.createElement("input", _extends({
        ref: this.handleRef
      }, restProps));
    }

    var changedProps = {
      onFocus: this.onFocus,
      onBlur: this.onBlur
    };

    if (this.maskOptions.mask) {
      if (!restProps.disabled && !restProps.readOnly) {
        changedProps.onChange = this.onChange;
        changedProps.onPaste = this.onPaste;
        changedProps.onMouseDown = this.onMouseDown;
      }

      if (restProps.value != null) {
        changedProps.value = this.value;
      }
    }

    inputElement = React.cloneElement(inputElement, changedProps);
    return inputElement;
  };

  return InputElement;
}(React.Component);

module.exports = InputElement;


/***/ }),

/***/ "./node_modules/warning/warning.js":
/*!*****************************************!*\
  !*** ./node_modules/warning/warning.js ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "development" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYXNrcy9QaG9uZU1hc2suanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZmVlZGJhY2svRmVlZGJhY2suanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2ZlZWRiYWNrLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvaW52YXJpYW50L2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1pbnB1dC1tYXNrL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtaW5wdXQtbWFzay9saWIvcmVhY3QtaW5wdXQtbWFzay5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dhcm5pbmcvd2FybmluZy5qcyJdLCJuYW1lcyI6WyJQaG9uZU1hc2siLCJmaWVsZCIsImZvcm0iLCJwcm9wcyIsImdldFBob25lIiwidmFsdWUiLCJkZWZhdWx0TWFzayIsInVzZVN0YXRlIiwibWFzayIsIml0ZW1zIiwic2V0SXRlbXMiLCJGZWVkYmFja0Zvcm0iLCJmaW8iLCJwaG9uZSIsImNvbW1lbnQiLCJkYXRlIiwic2V0RGF0ZSIsIm9uQ2hhbmdlIiwiZSIsIm5hbWUiLCJ0YXJnZXQiLCJGZWVkYmFjayIsInJvdXRlciIsInVzZVJvdXRlciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFtRztBQUNwRjtBQUNmO0FBQ0EsZUFBZSxnR0FB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QUFDSDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsUUFBUTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1RkFBdUY7QUFDdkY7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsd0NBQXdDO0FBQ3hDOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGFBQWE7QUFDcEI7OztBQUdBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsMkNBQTJDO0FBQzNDOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjs7QUFFM0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esd0JBQXdCO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkRBQTZEO0FBQzdEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxLQUFxQztBQUN6QztBQUNBLDhPQUE4TyxDQUFNOztBQUVwUDtBQUNBLDhCQUE4QixLQUFxQyx1RUFBdUUsQ0FBZ0I7QUFDMUo7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCwrQkFBK0IsS0FBcUMsa01BQWtNLENBQWdCO0FBQ3RSLE1BQU0sS0FBcUMsNkhBQTZILENBQU07QUFDOUssS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7OztBQ3JtQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLGFBQW9COztBQUVsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixXQUFXO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixXQUFXO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ZlZWRiYWNrLjlhOGEyNTc1OTdmZTRlYzNjYmRiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSBvYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpO1xuICB2YXIga2V5LCBpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTtcbiAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW5wdXRNYXNrIGZyb20gJ3JlYWN0LWlucHV0LW1hc2snXHJcblxyXG5jb25zdCBQaG9uZU1hc2sgPSAoe1xyXG4gIGZpZWxkLFxyXG4gIGZvcm0sXHJcbiAgLi4ucHJvcHNcclxufSkgPT4ge1xyXG5cclxuICBjb25zdCBnZXRQaG9uZSA9IHZhbHVlID0+IHtcclxuICAgIGNvbnN0IGRlZmF1bHRNYXNrID0gXCIrNyg5OTkpLTk5OS05OTk5XCI7XHJcbiAgICByZXR1cm4gZGVmYXVsdE1hc2tcclxuICB9XHJcbiAgY29uc3QgW2l0ZW1zLHNldEl0ZW1zXSA9IHVzZVN0YXRlKHtcclxuICAgIHZhbHVlOiAnJyxcclxuICAgIG1hc2s6IGdldFBob25lKClcclxuICB9KVxyXG5cclxuICByZXR1cm4oXHJcbiAgPElucHV0TWFza1xyXG4gICAgey4uLml0ZW1zfVxyXG4gICAgbWFza0NoYXI9e251bGx9XHJcbiAgICBjbGFzc05hbWU9XCJteS1pbnB1dFwiXHJcbiAgICB7Li4uZmllbGR9XHJcbiAgICB7Li4ucHJvcHN9Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBob25lTWFzayIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IElucHV0TWFzayBmcm9tICdyZWFjdC1pbnB1dC1tYXNrJ1xyXG5pbXBvcnQgUGhvbmVNYXNrIGZyb20gXCIuLi9NYXNrcy9QaG9uZU1hc2tcIjtcclxuXHJcbmNvbnN0IEZlZWRiYWNrRm9ybSA9ICgpID0+IHtcclxuICBjb25zdCBbZGF0ZSxzZXREYXRlXSA9IHVzZVN0YXRlKHtmaW86ICcnLCBwaG9uZTogJycsIGNvbW1lbnQ6ICcnfSlcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2U9ZT0+IHtcclxuICAgIGNvbnN0IG5hbWUgPSBlLnRhcmdldC5uYW1lO1xyXG4gICAgc2V0RGF0ZSh7Li4uZGF0ZSwgW25hbWVdOiBlLnRhcmdldC52YWx1ZX0pXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybV9yZWdpc3Rlcic+XHJcbiAgICAgIDxmb3JtPlxyXG4gICAgICAgIDxpbnB1dCBuYW1lPSdmaW8nIHR5cGU9J3RleHQnIGNsYXNzTmFtZT0nY2FwaXRhbGl6ZScgdmFsdWU9e2RhdGUuZmlvfSBvbkNoYW5nZT17ZT0+b25DaGFuZ2UoZSl9IHBsYWNlaG9sZGVyPSfQktCw0YjQtSDQuNC80Y8nPjwvaW5wdXQ+XHJcbiAgICAgICAgPElucHV0TWFzayB0eXBlPSd0ZWwnIHBsYWNlaG9sZGVyPSfQktCy0LXQtNC40YLQtSDRgtC10LvQtdGE0L7QvSDQvdC+0LzQtdGAJyBuYW1lPSdwaG9uZScgbWFzaz1cIis3KDk5OSktOTk5LTk5OTlcIiBtYXNrQ2hhcj17bnVsbH0gdmFsdWU9e2RhdGUucGhvbmV9IG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2UoZSl9IC8+XHJcbiAgICAgICAgPHRleHRhcmVhIHBsYWNlaG9sZGVyPSfQntGC0LfRi9CyJyBuYW1lPSdjb21tZW50JyBvbkNoYW5nZT17ZT0+b25DaGFuZ2UoZSl9IHZhbHVlPXtkYXRlLmNvbW1lbnR9PjwvdGV4dGFyZWE+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9J3NpbmdsZWJ0bidcclxuICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcclxuICAgICAgICAgIGNsYXNzTmFtZT0nYnV0dG9uJ1xyXG4gICAgICAgICAgdmFsdWU9J9Ce0YLQv9GA0LDQstC40YLRjCcvPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZlZWRiYWNrRm9ybSIsIlxyXG5pbXBvcnQgTmF2IGZyb20gXCIuLi9jb21wb25lbnRzL3NoYXJlZC9OYXZcIlxyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2xvYWRlci9Mb2FkZXJcIlxyXG5pbXBvcnQgRmVlZGJhY2tGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL2ZlZWRiYWNrL0ZlZWRiYWNrXCJcclxuY29uc3QgRmVlZGJhY2sgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2dldHNlcnZpY2UnPlxyXG4gICAgICB7bG9hZGluZyAmJiA8TG9hZGVyIC8+fVxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+XHJcbiAgICAgICAgICDQntGB0YLQsNCy0LjRgtGMINC+0YLQt9GL0LJcclxuICAgICAgICA8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXInPlxyXG4gICAgICAgIDxOYXYvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZyc+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcbiAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtX2hlYWRpbmdzJz5cclxuICAgICAgICAgIDxoMj7QntGB0YLQsNCy0LjRgtGMINC+0YLQt9GL0LI8L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtX3NlcnZpY2UgJz5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPEZlZWRiYWNrRm9ybSAvPlxyXG4gICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgey8qIDxTZWNvbmRTdGVwIC8+ICovfVxyXG4gICAgICAgIHsvKiA8VGhpcmRTdGVwIC8+ICovfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgIFxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEZlZWRiYWNrIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuICpcbiAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG4gKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcbiAqIGV4cGVjdGluZy5cbiAqXG4gKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuICogd2lsbCByZW1haW4gdG8gZW5zdXJlIGxvZ2ljIGRvZXMgbm90IGRpZmZlciBpbiBwcm9kdWN0aW9uLlxuICovXG5cbnZhciBpbnZhcmlhbnQgPSBmdW5jdGlvbihjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQgcmVxdWlyZXMgYW4gZXJyb3IgbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgICdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICtcbiAgICAgICAgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJ1xuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107IH0pXG4gICAgICApO1xuICAgICAgZXJyb3IubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB9XG5cbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaW52YXJpYW50O1xuIiwiaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9yZWFjdC1pbnB1dC1tYXNrLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL3JlYWN0LWlucHV0LW1hc2suZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gX2ludGVyb3BEZWZhdWx0IChleCkgeyByZXR1cm4gKGV4ICYmICh0eXBlb2YgZXggPT09ICdvYmplY3QnKSAmJiAnZGVmYXVsdCcgaW4gZXgpID8gZXhbJ2RlZmF1bHQnXSA6IGV4OyB9XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wRGVmYXVsdChyZXF1aXJlKCdyZWFjdCcpKTtcbnZhciByZWFjdERvbSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xudmFyIGludmFyaWFudCA9IF9pbnRlcm9wRGVmYXVsdChyZXF1aXJlKCdpbnZhcmlhbnQnKSk7XG52YXIgd2FybmluZyA9IF9pbnRlcm9wRGVmYXVsdChyZXF1aXJlKCd3YXJuaW5nJykpO1xuXG5mdW5jdGlvbiBfZGVmYXVsdHMyKG9iaiwgZGVmYXVsdHMpIHsgdmFyIGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhkZWZhdWx0cyk7IGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykgeyB2YXIga2V5ID0ga2V5c1tpXTsgdmFyIHZhbHVlID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihkZWZhdWx0cywga2V5KTsgaWYgKHZhbHVlICYmIHZhbHVlLmNvbmZpZ3VyYWJsZSAmJiBvYmpba2V5XSA9PT0gdW5kZWZpbmVkKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpOyB9IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTtcbiAgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7XG5cbiAgX2RlZmF1bHRzMihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5mdW5jdGlvbiBzZXRJbnB1dFNlbGVjdGlvbihpbnB1dCwgc3RhcnQsIGVuZCkge1xuICBpZiAoJ3NlbGVjdGlvblN0YXJ0JyBpbiBpbnB1dCAmJiAnc2VsZWN0aW9uRW5kJyBpbiBpbnB1dCkge1xuICAgIGlucHV0LnNlbGVjdGlvblN0YXJ0ID0gc3RhcnQ7XG4gICAgaW5wdXQuc2VsZWN0aW9uRW5kID0gZW5kO1xuICB9IGVsc2Uge1xuICAgIHZhciByYW5nZSA9IGlucHV0LmNyZWF0ZVRleHRSYW5nZSgpO1xuICAgIHJhbmdlLmNvbGxhcHNlKHRydWUpO1xuICAgIHJhbmdlLm1vdmVTdGFydCgnY2hhcmFjdGVyJywgc3RhcnQpO1xuICAgIHJhbmdlLm1vdmVFbmQoJ2NoYXJhY3RlcicsIGVuZCAtIHN0YXJ0KTtcbiAgICByYW5nZS5zZWxlY3QoKTtcbiAgfVxufVxuZnVuY3Rpb24gZ2V0SW5wdXRTZWxlY3Rpb24oaW5wdXQpIHtcbiAgdmFyIHN0YXJ0ID0gMDtcbiAgdmFyIGVuZCA9IDA7XG5cbiAgaWYgKCdzZWxlY3Rpb25TdGFydCcgaW4gaW5wdXQgJiYgJ3NlbGVjdGlvbkVuZCcgaW4gaW5wdXQpIHtcbiAgICBzdGFydCA9IGlucHV0LnNlbGVjdGlvblN0YXJ0O1xuICAgIGVuZCA9IGlucHV0LnNlbGVjdGlvbkVuZDtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcmFuZ2UgPSBkb2N1bWVudC5zZWxlY3Rpb24uY3JlYXRlUmFuZ2UoKTtcblxuICAgIGlmIChyYW5nZS5wYXJlbnRFbGVtZW50KCkgPT09IGlucHV0KSB7XG4gICAgICBzdGFydCA9IC1yYW5nZS5tb3ZlU3RhcnQoJ2NoYXJhY3RlcicsIC1pbnB1dC52YWx1ZS5sZW5ndGgpO1xuICAgICAgZW5kID0gLXJhbmdlLm1vdmVFbmQoJ2NoYXJhY3RlcicsIC1pbnB1dC52YWx1ZS5sZW5ndGgpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc3RhcnQ6IHN0YXJ0LFxuICAgIGVuZDogZW5kLFxuICAgIGxlbmd0aDogZW5kIC0gc3RhcnRcbiAgfTtcbn1cblxudmFyIGRlZmF1bHRGb3JtYXRDaGFycyA9IHtcbiAgJzknOiAnWzAtOV0nLFxuICAnYSc6ICdbQS1aYS16XScsXG4gICcqJzogJ1tBLVphLXowLTldJ1xufTtcbnZhciBkZWZhdWx0TWFza0NoYXIgPSAnXyc7XG5cbmZ1bmN0aW9uIHBhcnNlTWFzayAobWFzaywgbWFza0NoYXIsIGZvcm1hdENoYXJzKSB7XG4gIHZhciBwYXJzZWRNYXNrU3RyaW5nID0gJyc7XG4gIHZhciBwcmVmaXggPSAnJztcbiAgdmFyIGxhc3RFZGl0YWJsZVBvc2l0aW9uID0gbnVsbDtcbiAgdmFyIHBlcm1hbmVudHMgPSBbXTtcblxuICBpZiAobWFza0NoYXIgPT09IHVuZGVmaW5lZCkge1xuICAgIG1hc2tDaGFyID0gZGVmYXVsdE1hc2tDaGFyO1xuICB9XG5cbiAgaWYgKGZvcm1hdENoYXJzID09IG51bGwpIHtcbiAgICBmb3JtYXRDaGFycyA9IGRlZmF1bHRGb3JtYXRDaGFycztcbiAgfVxuXG4gIGlmICghbWFzayB8fCB0eXBlb2YgbWFzayAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbWFza0NoYXI6IG1hc2tDaGFyLFxuICAgICAgZm9ybWF0Q2hhcnM6IGZvcm1hdENoYXJzLFxuICAgICAgbWFzazogbnVsbCxcbiAgICAgIHByZWZpeDogbnVsbCxcbiAgICAgIGxhc3RFZGl0YWJsZVBvc2l0aW9uOiBudWxsLFxuICAgICAgcGVybWFuZW50czogW11cbiAgICB9O1xuICB9XG5cbiAgdmFyIGlzUGVybWFuZW50ID0gZmFsc2U7XG4gIG1hc2suc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGNoYXJhY3Rlcikge1xuICAgIGlmICghaXNQZXJtYW5lbnQgJiYgY2hhcmFjdGVyID09PSAnXFxcXCcpIHtcbiAgICAgIGlzUGVybWFuZW50ID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGlzUGVybWFuZW50IHx8ICFmb3JtYXRDaGFyc1tjaGFyYWN0ZXJdKSB7XG4gICAgICAgIHBlcm1hbmVudHMucHVzaChwYXJzZWRNYXNrU3RyaW5nLmxlbmd0aCk7XG5cbiAgICAgICAgaWYgKHBhcnNlZE1hc2tTdHJpbmcubGVuZ3RoID09PSBwZXJtYW5lbnRzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICBwcmVmaXggKz0gY2hhcmFjdGVyO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsYXN0RWRpdGFibGVQb3NpdGlvbiA9IHBhcnNlZE1hc2tTdHJpbmcubGVuZ3RoICsgMTtcbiAgICAgIH1cblxuICAgICAgcGFyc2VkTWFza1N0cmluZyArPSBjaGFyYWN0ZXI7XG4gICAgICBpc1Blcm1hbmVudCA9IGZhbHNlO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB7XG4gICAgbWFza0NoYXI6IG1hc2tDaGFyLFxuICAgIGZvcm1hdENoYXJzOiBmb3JtYXRDaGFycyxcbiAgICBwcmVmaXg6IHByZWZpeCxcbiAgICBtYXNrOiBwYXJzZWRNYXNrU3RyaW5nLFxuICAgIGxhc3RFZGl0YWJsZVBvc2l0aW9uOiBsYXN0RWRpdGFibGVQb3NpdGlvbixcbiAgICBwZXJtYW5lbnRzOiBwZXJtYW5lbnRzXG4gIH07XG59XG5cbi8qIGVzbGludCBuby11c2UtYmVmb3JlLWRlZmluZTogW1wiZXJyb3JcIiwgeyBmdW5jdGlvbnM6IGZhbHNlIH1dICovXG5mdW5jdGlvbiBpc1Blcm1hbmVudENoYXJhY3RlcihtYXNrT3B0aW9ucywgcG9zKSB7XG4gIHJldHVybiBtYXNrT3B0aW9ucy5wZXJtYW5lbnRzLmluZGV4T2YocG9zKSAhPT0gLTE7XG59XG5mdW5jdGlvbiBpc0FsbG93ZWRDaGFyYWN0ZXIobWFza09wdGlvbnMsIHBvcywgY2hhcmFjdGVyKSB7XG4gIHZhciBtYXNrID0gbWFza09wdGlvbnMubWFzayxcbiAgICAgIGZvcm1hdENoYXJzID0gbWFza09wdGlvbnMuZm9ybWF0Q2hhcnM7XG5cbiAgaWYgKCFjaGFyYWN0ZXIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoaXNQZXJtYW5lbnRDaGFyYWN0ZXIobWFza09wdGlvbnMsIHBvcykpIHtcbiAgICByZXR1cm4gbWFza1twb3NdID09PSBjaGFyYWN0ZXI7XG4gIH1cblxuICB2YXIgcnVsZUNoYXIgPSBtYXNrW3Bvc107XG4gIHZhciBjaGFyUnVsZSA9IGZvcm1hdENoYXJzW3J1bGVDaGFyXTtcbiAgcmV0dXJuIG5ldyBSZWdFeHAoY2hhclJ1bGUpLnRlc3QoY2hhcmFjdGVyKTtcbn1cbmZ1bmN0aW9uIGlzRW1wdHkobWFza09wdGlvbnMsIHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZS5zcGxpdCgnJykuZXZlcnkoZnVuY3Rpb24gKGNoYXJhY3RlciwgaSkge1xuICAgIHJldHVybiBpc1Blcm1hbmVudENoYXJhY3RlcihtYXNrT3B0aW9ucywgaSkgfHwgIWlzQWxsb3dlZENoYXJhY3RlcihtYXNrT3B0aW9ucywgaSwgY2hhcmFjdGVyKTtcbiAgfSk7XG59XG5mdW5jdGlvbiBnZXRGaWxsZWRMZW5ndGgobWFza09wdGlvbnMsIHZhbHVlKSB7XG4gIHZhciBtYXNrQ2hhciA9IG1hc2tPcHRpb25zLm1hc2tDaGFyLFxuICAgICAgcHJlZml4ID0gbWFza09wdGlvbnMucHJlZml4O1xuXG4gIGlmICghbWFza0NoYXIpIHtcbiAgICB3aGlsZSAodmFsdWUubGVuZ3RoID4gcHJlZml4Lmxlbmd0aCAmJiBpc1Blcm1hbmVudENoYXJhY3RlcihtYXNrT3B0aW9ucywgdmFsdWUubGVuZ3RoIC0gMSkpIHtcbiAgICAgIHZhbHVlID0gdmFsdWUuc2xpY2UoMCwgdmFsdWUubGVuZ3RoIC0gMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlLmxlbmd0aDtcbiAgfVxuXG4gIHZhciBmaWxsZWRMZW5ndGggPSBwcmVmaXgubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSB2YWx1ZS5sZW5ndGg7IGkgPj0gcHJlZml4Lmxlbmd0aDsgaS0tKSB7XG4gICAgdmFyIGNoYXJhY3RlciA9IHZhbHVlW2ldO1xuICAgIHZhciBpc0VudGVyZWRDaGFyYWN0ZXIgPSAhaXNQZXJtYW5lbnRDaGFyYWN0ZXIobWFza09wdGlvbnMsIGkpICYmIGlzQWxsb3dlZENoYXJhY3RlcihtYXNrT3B0aW9ucywgaSwgY2hhcmFjdGVyKTtcblxuICAgIGlmIChpc0VudGVyZWRDaGFyYWN0ZXIpIHtcbiAgICAgIGZpbGxlZExlbmd0aCA9IGkgKyAxO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZpbGxlZExlbmd0aDtcbn1cbmZ1bmN0aW9uIGlzRmlsbGVkKG1hc2tPcHRpb25zLCB2YWx1ZSkge1xuICByZXR1cm4gZ2V0RmlsbGVkTGVuZ3RoKG1hc2tPcHRpb25zLCB2YWx1ZSkgPT09IG1hc2tPcHRpb25zLm1hc2subGVuZ3RoO1xufVxuZnVuY3Rpb24gZm9ybWF0VmFsdWUobWFza09wdGlvbnMsIHZhbHVlKSB7XG4gIHZhciBtYXNrQ2hhciA9IG1hc2tPcHRpb25zLm1hc2tDaGFyLFxuICAgICAgbWFzayA9IG1hc2tPcHRpb25zLm1hc2ssXG4gICAgICBwcmVmaXggPSBtYXNrT3B0aW9ucy5wcmVmaXg7XG5cbiAgaWYgKCFtYXNrQ2hhcikge1xuICAgIHZhbHVlID0gaW5zZXJ0U3RyaW5nKG1hc2tPcHRpb25zLCAnJywgdmFsdWUsIDApO1xuXG4gICAgaWYgKHZhbHVlLmxlbmd0aCA8IHByZWZpeC5sZW5ndGgpIHtcbiAgICAgIHZhbHVlID0gcHJlZml4O1xuICAgIH1cblxuICAgIHdoaWxlICh2YWx1ZS5sZW5ndGggPCBtYXNrLmxlbmd0aCAmJiBpc1Blcm1hbmVudENoYXJhY3RlcihtYXNrT3B0aW9ucywgdmFsdWUubGVuZ3RoKSkge1xuICAgICAgdmFsdWUgKz0gbWFza1t2YWx1ZS5sZW5ndGhdO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGlmICh2YWx1ZSkge1xuICAgIHZhciBlbXB0eVZhbHVlID0gZm9ybWF0VmFsdWUobWFza09wdGlvbnMsICcnKTtcbiAgICByZXR1cm4gaW5zZXJ0U3RyaW5nKG1hc2tPcHRpb25zLCBlbXB0eVZhbHVlLCB2YWx1ZSwgMCk7XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IG1hc2subGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoaXNQZXJtYW5lbnRDaGFyYWN0ZXIobWFza09wdGlvbnMsIGkpKSB7XG4gICAgICB2YWx1ZSArPSBtYXNrW2ldO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSArPSBtYXNrQ2hhcjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5mdW5jdGlvbiBjbGVhclJhbmdlKG1hc2tPcHRpb25zLCB2YWx1ZSwgc3RhcnQsIGxlbikge1xuICB2YXIgZW5kID0gc3RhcnQgKyBsZW47XG4gIHZhciBtYXNrQ2hhciA9IG1hc2tPcHRpb25zLm1hc2tDaGFyLFxuICAgICAgbWFzayA9IG1hc2tPcHRpb25zLm1hc2ssXG4gICAgICBwcmVmaXggPSBtYXNrT3B0aW9ucy5wcmVmaXg7XG4gIHZhciBhcnJheVZhbHVlID0gdmFsdWUuc3BsaXQoJycpO1xuXG4gIGlmICghbWFza0NoYXIpIHtcbiAgICAvLyByZW1vdmUgYW55IHBlcm1hbmVudCBjaGFycyBhZnRlciBjbGVhciByYW5nZSwgdGhleSB3aWxsIGJlIGFkZGVkIGJhY2sgYnkgZm9ybWF0VmFsdWVcbiAgICBmb3IgKHZhciBpID0gZW5kOyBpIDwgYXJyYXlWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGlzUGVybWFuZW50Q2hhcmFjdGVyKG1hc2tPcHRpb25zLCBpKSkge1xuICAgICAgICBhcnJheVZhbHVlW2ldID0gJyc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3RhcnQgPSBNYXRoLm1heChwcmVmaXgubGVuZ3RoLCBzdGFydCk7XG4gICAgYXJyYXlWYWx1ZS5zcGxpY2Uoc3RhcnQsIGVuZCAtIHN0YXJ0KTtcbiAgICB2YWx1ZSA9IGFycmF5VmFsdWUuam9pbignJyk7XG4gICAgcmV0dXJuIGZvcm1hdFZhbHVlKG1hc2tPcHRpb25zLCB2YWx1ZSk7XG4gIH1cblxuICByZXR1cm4gYXJyYXlWYWx1ZS5tYXAoZnVuY3Rpb24gKGNoYXJhY3RlciwgaSkge1xuICAgIGlmIChpIDwgc3RhcnQgfHwgaSA+PSBlbmQpIHtcbiAgICAgIHJldHVybiBjaGFyYWN0ZXI7XG4gICAgfVxuXG4gICAgaWYgKGlzUGVybWFuZW50Q2hhcmFjdGVyKG1hc2tPcHRpb25zLCBpKSkge1xuICAgICAgcmV0dXJuIG1hc2tbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hc2tDaGFyO1xuICB9KS5qb2luKCcnKTtcbn1cbmZ1bmN0aW9uIGluc2VydFN0cmluZyhtYXNrT3B0aW9ucywgdmFsdWUsIGluc2VydFN0ciwgaW5zZXJ0UG9zaXRpb24pIHtcbiAgdmFyIG1hc2sgPSBtYXNrT3B0aW9ucy5tYXNrLFxuICAgICAgbWFza0NoYXIgPSBtYXNrT3B0aW9ucy5tYXNrQ2hhcixcbiAgICAgIHByZWZpeCA9IG1hc2tPcHRpb25zLnByZWZpeDtcbiAgdmFyIGFycmF5SW5zZXJ0U3RyID0gaW5zZXJ0U3RyLnNwbGl0KCcnKTtcbiAgdmFyIGlzSW5wdXRGaWxsZWQgPSBpc0ZpbGxlZChtYXNrT3B0aW9ucywgdmFsdWUpO1xuXG4gIHZhciBpc1VzYWJsZVBvc2l0aW9uID0gZnVuY3Rpb24gaXNVc2FibGVQb3NpdGlvbihwb3MsIGNoYXJhY3Rlcikge1xuICAgIHJldHVybiAhaXNQZXJtYW5lbnRDaGFyYWN0ZXIobWFza09wdGlvbnMsIHBvcykgfHwgY2hhcmFjdGVyID09PSBtYXNrW3Bvc107XG4gIH07XG5cbiAgdmFyIGlzVXNhYmxlQ2hhcmFjdGVyID0gZnVuY3Rpb24gaXNVc2FibGVDaGFyYWN0ZXIoY2hhcmFjdGVyLCBwb3MpIHtcbiAgICByZXR1cm4gIW1hc2tDaGFyIHx8ICFpc1Blcm1hbmVudENoYXJhY3RlcihtYXNrT3B0aW9ucywgcG9zKSB8fCBjaGFyYWN0ZXIgIT09IG1hc2tDaGFyO1xuICB9O1xuXG4gIGlmICghbWFza0NoYXIgJiYgaW5zZXJ0UG9zaXRpb24gPiB2YWx1ZS5sZW5ndGgpIHtcbiAgICB2YWx1ZSArPSBtYXNrLnNsaWNlKHZhbHVlLmxlbmd0aCwgaW5zZXJ0UG9zaXRpb24pO1xuICB9XG5cbiAgYXJyYXlJbnNlcnRTdHIuZXZlcnkoZnVuY3Rpb24gKGluc2VydENoYXJhY3Rlcikge1xuICAgIHdoaWxlICghaXNVc2FibGVQb3NpdGlvbihpbnNlcnRQb3NpdGlvbiwgaW5zZXJ0Q2hhcmFjdGVyKSkge1xuICAgICAgaWYgKGluc2VydFBvc2l0aW9uID49IHZhbHVlLmxlbmd0aCkge1xuICAgICAgICB2YWx1ZSArPSBtYXNrW2luc2VydFBvc2l0aW9uXTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc1VzYWJsZUNoYXJhY3RlcihpbnNlcnRDaGFyYWN0ZXIsIGluc2VydFBvc2l0aW9uKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaW5zZXJ0UG9zaXRpb24rKzsgLy8gc3RvcCBpdGVyYXRpb24gaWYgbWF4aW11bSB2YWx1ZSBsZW5ndGggcmVhY2hlZFxuXG4gICAgICBpZiAoaW5zZXJ0UG9zaXRpb24gPj0gbWFzay5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBpc0FsbG93ZWQgPSBpc0FsbG93ZWRDaGFyYWN0ZXIobWFza09wdGlvbnMsIGluc2VydFBvc2l0aW9uLCBpbnNlcnRDaGFyYWN0ZXIpIHx8IGluc2VydENoYXJhY3RlciA9PT0gbWFza0NoYXI7XG5cbiAgICBpZiAoIWlzQWxsb3dlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGluc2VydFBvc2l0aW9uIDwgdmFsdWUubGVuZ3RoKSB7XG4gICAgICBpZiAobWFza0NoYXIgfHwgaXNJbnB1dEZpbGxlZCB8fCBpbnNlcnRQb3NpdGlvbiA8IHByZWZpeC5sZW5ndGgpIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5zbGljZSgwLCBpbnNlcnRQb3NpdGlvbikgKyBpbnNlcnRDaGFyYWN0ZXIgKyB2YWx1ZS5zbGljZShpbnNlcnRQb3NpdGlvbiArIDEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5zbGljZSgwLCBpbnNlcnRQb3NpdGlvbikgKyBpbnNlcnRDaGFyYWN0ZXIgKyB2YWx1ZS5zbGljZShpbnNlcnRQb3NpdGlvbik7XG4gICAgICAgIHZhbHVlID0gZm9ybWF0VmFsdWUobWFza09wdGlvbnMsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCFtYXNrQ2hhcikge1xuICAgICAgdmFsdWUgKz0gaW5zZXJ0Q2hhcmFjdGVyO1xuICAgIH1cblxuICAgIGluc2VydFBvc2l0aW9uKys7IC8vIHN0b3AgaXRlcmF0aW9uIGlmIG1heGltdW0gdmFsdWUgbGVuZ3RoIHJlYWNoZWRcblxuICAgIHJldHVybiBpbnNlcnRQb3NpdGlvbiA8IG1hc2subGVuZ3RoO1xuICB9KTtcbiAgcmV0dXJuIHZhbHVlO1xufVxuZnVuY3Rpb24gZ2V0SW5zZXJ0U3RyaW5nTGVuZ3RoKG1hc2tPcHRpb25zLCB2YWx1ZSwgaW5zZXJ0U3RyLCBpbnNlcnRQb3NpdGlvbikge1xuICB2YXIgbWFzayA9IG1hc2tPcHRpb25zLm1hc2ssXG4gICAgICBtYXNrQ2hhciA9IG1hc2tPcHRpb25zLm1hc2tDaGFyO1xuICB2YXIgYXJyYXlJbnNlcnRTdHIgPSBpbnNlcnRTdHIuc3BsaXQoJycpO1xuICB2YXIgaW5pdGlhbEluc2VydFBvc2l0aW9uID0gaW5zZXJ0UG9zaXRpb247XG5cbiAgdmFyIGlzVXNhYmxlUG9zaXRpb24gPSBmdW5jdGlvbiBpc1VzYWJsZVBvc2l0aW9uKHBvcywgY2hhcmFjdGVyKSB7XG4gICAgcmV0dXJuICFpc1Blcm1hbmVudENoYXJhY3RlcihtYXNrT3B0aW9ucywgcG9zKSB8fCBjaGFyYWN0ZXIgPT09IG1hc2tbcG9zXTtcbiAgfTtcblxuICBhcnJheUluc2VydFN0ci5ldmVyeShmdW5jdGlvbiAoaW5zZXJ0Q2hhcmFjdGVyKSB7XG4gICAgd2hpbGUgKCFpc1VzYWJsZVBvc2l0aW9uKGluc2VydFBvc2l0aW9uLCBpbnNlcnRDaGFyYWN0ZXIpKSB7XG4gICAgICBpbnNlcnRQb3NpdGlvbisrOyAvLyBzdG9wIGl0ZXJhdGlvbiBpZiBtYXhpbXVtIHZhbHVlIGxlbmd0aCByZWFjaGVkXG5cbiAgICAgIGlmIChpbnNlcnRQb3NpdGlvbiA+PSBtYXNrLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGlzQWxsb3dlZCA9IGlzQWxsb3dlZENoYXJhY3RlcihtYXNrT3B0aW9ucywgaW5zZXJ0UG9zaXRpb24sIGluc2VydENoYXJhY3RlcikgfHwgaW5zZXJ0Q2hhcmFjdGVyID09PSBtYXNrQ2hhcjtcblxuICAgIGlmIChpc0FsbG93ZWQpIHtcbiAgICAgIGluc2VydFBvc2l0aW9uKys7XG4gICAgfSAvLyBzdG9wIGl0ZXJhdGlvbiBpZiBtYXhpbXVtIHZhbHVlIGxlbmd0aCByZWFjaGVkXG5cblxuICAgIHJldHVybiBpbnNlcnRQb3NpdGlvbiA8IG1hc2subGVuZ3RoO1xuICB9KTtcbiAgcmV0dXJuIGluc2VydFBvc2l0aW9uIC0gaW5pdGlhbEluc2VydFBvc2l0aW9uO1xufVxuZnVuY3Rpb24gZ2V0TGVmdEVkaXRhYmxlUG9zaXRpb24obWFza09wdGlvbnMsIHBvcykge1xuICBmb3IgKHZhciBpID0gcG9zOyBpID49IDA7IC0taSkge1xuICAgIGlmICghaXNQZXJtYW5lbnRDaGFyYWN0ZXIobWFza09wdGlvbnMsIGkpKSB7XG4gICAgICByZXR1cm4gaTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cbmZ1bmN0aW9uIGdldFJpZ2h0RWRpdGFibGVQb3NpdGlvbihtYXNrT3B0aW9ucywgcG9zKSB7XG4gIHZhciBtYXNrID0gbWFza09wdGlvbnMubWFzaztcblxuICBmb3IgKHZhciBpID0gcG9zOyBpIDwgbWFzay5sZW5ndGg7ICsraSkge1xuICAgIGlmICghaXNQZXJtYW5lbnRDaGFyYWN0ZXIobWFza09wdGlvbnMsIGkpKSB7XG4gICAgICByZXR1cm4gaTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cbmZ1bmN0aW9uIGdldFN0cmluZ1ZhbHVlKHZhbHVlKSB7XG4gIHJldHVybiAhdmFsdWUgJiYgdmFsdWUgIT09IDAgPyAnJyA6IHZhbHVlICsgJyc7XG59XG5cbmZ1bmN0aW9uIHByb2Nlc3NDaGFuZ2UobWFza09wdGlvbnMsIHZhbHVlLCBzZWxlY3Rpb24sIHByZXZpb3VzVmFsdWUsIHByZXZpb3VzU2VsZWN0aW9uKSB7XG4gIHZhciBtYXNrID0gbWFza09wdGlvbnMubWFzayxcbiAgICAgIHByZWZpeCA9IG1hc2tPcHRpb25zLnByZWZpeCxcbiAgICAgIGxhc3RFZGl0YWJsZVBvc2l0aW9uID0gbWFza09wdGlvbnMubGFzdEVkaXRhYmxlUG9zaXRpb247XG4gIHZhciBuZXdWYWx1ZSA9IHZhbHVlO1xuICB2YXIgZW50ZXJlZFN0cmluZyA9ICcnO1xuICB2YXIgZm9ybWF0dGVkRW50ZXJlZFN0cmluZ0xlbmd0aCA9IDA7XG4gIHZhciByZW1vdmVkTGVuZ3RoID0gMDtcbiAgdmFyIGN1cnNvclBvc2l0aW9uID0gTWF0aC5taW4ocHJldmlvdXNTZWxlY3Rpb24uc3RhcnQsIHNlbGVjdGlvbi5zdGFydCk7XG5cbiAgaWYgKHNlbGVjdGlvbi5lbmQgPiBwcmV2aW91c1NlbGVjdGlvbi5zdGFydCkge1xuICAgIGVudGVyZWRTdHJpbmcgPSBuZXdWYWx1ZS5zbGljZShwcmV2aW91c1NlbGVjdGlvbi5zdGFydCwgc2VsZWN0aW9uLmVuZCk7XG4gICAgZm9ybWF0dGVkRW50ZXJlZFN0cmluZ0xlbmd0aCA9IGdldEluc2VydFN0cmluZ0xlbmd0aChtYXNrT3B0aW9ucywgcHJldmlvdXNWYWx1ZSwgZW50ZXJlZFN0cmluZywgY3Vyc29yUG9zaXRpb24pO1xuXG4gICAgaWYgKCFmb3JtYXR0ZWRFbnRlcmVkU3RyaW5nTGVuZ3RoKSB7XG4gICAgICByZW1vdmVkTGVuZ3RoID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlZExlbmd0aCA9IHByZXZpb3VzU2VsZWN0aW9uLmxlbmd0aDtcbiAgICB9XG4gIH0gZWxzZSBpZiAobmV3VmFsdWUubGVuZ3RoIDwgcHJldmlvdXNWYWx1ZS5sZW5ndGgpIHtcbiAgICByZW1vdmVkTGVuZ3RoID0gcHJldmlvdXNWYWx1ZS5sZW5ndGggLSBuZXdWYWx1ZS5sZW5ndGg7XG4gIH1cblxuICBuZXdWYWx1ZSA9IHByZXZpb3VzVmFsdWU7XG5cbiAgaWYgKHJlbW92ZWRMZW5ndGgpIHtcbiAgICBpZiAocmVtb3ZlZExlbmd0aCA9PT0gMSAmJiAhcHJldmlvdXNTZWxlY3Rpb24ubGVuZ3RoKSB7XG4gICAgICB2YXIgZGVsZXRlRnJvbVJpZ2h0ID0gcHJldmlvdXNTZWxlY3Rpb24uc3RhcnQgPT09IHNlbGVjdGlvbi5zdGFydDtcbiAgICAgIGN1cnNvclBvc2l0aW9uID0gZGVsZXRlRnJvbVJpZ2h0ID8gZ2V0UmlnaHRFZGl0YWJsZVBvc2l0aW9uKG1hc2tPcHRpb25zLCBzZWxlY3Rpb24uc3RhcnQpIDogZ2V0TGVmdEVkaXRhYmxlUG9zaXRpb24obWFza09wdGlvbnMsIHNlbGVjdGlvbi5zdGFydCk7XG4gICAgfVxuXG4gICAgbmV3VmFsdWUgPSBjbGVhclJhbmdlKG1hc2tPcHRpb25zLCBuZXdWYWx1ZSwgY3Vyc29yUG9zaXRpb24sIHJlbW92ZWRMZW5ndGgpO1xuICB9XG5cbiAgbmV3VmFsdWUgPSBpbnNlcnRTdHJpbmcobWFza09wdGlvbnMsIG5ld1ZhbHVlLCBlbnRlcmVkU3RyaW5nLCBjdXJzb3JQb3NpdGlvbik7XG4gIGN1cnNvclBvc2l0aW9uID0gY3Vyc29yUG9zaXRpb24gKyBmb3JtYXR0ZWRFbnRlcmVkU3RyaW5nTGVuZ3RoO1xuXG4gIGlmIChjdXJzb3JQb3NpdGlvbiA+PSBtYXNrLmxlbmd0aCkge1xuICAgIGN1cnNvclBvc2l0aW9uID0gbWFzay5sZW5ndGg7XG4gIH0gZWxzZSBpZiAoY3Vyc29yUG9zaXRpb24gPCBwcmVmaXgubGVuZ3RoICYmICFmb3JtYXR0ZWRFbnRlcmVkU3RyaW5nTGVuZ3RoKSB7XG4gICAgY3Vyc29yUG9zaXRpb24gPSBwcmVmaXgubGVuZ3RoO1xuICB9IGVsc2UgaWYgKGN1cnNvclBvc2l0aW9uID49IHByZWZpeC5sZW5ndGggJiYgY3Vyc29yUG9zaXRpb24gPCBsYXN0RWRpdGFibGVQb3NpdGlvbiAmJiBmb3JtYXR0ZWRFbnRlcmVkU3RyaW5nTGVuZ3RoKSB7XG4gICAgY3Vyc29yUG9zaXRpb24gPSBnZXRSaWdodEVkaXRhYmxlUG9zaXRpb24obWFza09wdGlvbnMsIGN1cnNvclBvc2l0aW9uKTtcbiAgfVxuXG4gIG5ld1ZhbHVlID0gZm9ybWF0VmFsdWUobWFza09wdGlvbnMsIG5ld1ZhbHVlKTtcblxuICBpZiAoIWVudGVyZWRTdHJpbmcpIHtcbiAgICBlbnRlcmVkU3RyaW5nID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdmFsdWU6IG5ld1ZhbHVlLFxuICAgIGVudGVyZWRTdHJpbmc6IGVudGVyZWRTdHJpbmcsXG4gICAgc2VsZWN0aW9uOiB7XG4gICAgICBzdGFydDogY3Vyc29yUG9zaXRpb24sXG4gICAgICBlbmQ6IGN1cnNvclBvc2l0aW9uXG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBpc1dpbmRvd3NQaG9uZUJyb3dzZXIoKSB7XG4gIHZhciB3aW5kb3dzID0gbmV3IFJlZ0V4cCgnd2luZG93cycsICdpJyk7XG4gIHZhciBwaG9uZSA9IG5ldyBSZWdFeHAoJ3Bob25lJywgJ2knKTtcbiAgdmFyIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgcmV0dXJuIHdpbmRvd3MudGVzdCh1YSkgJiYgcGhvbmUudGVzdCh1YSk7XG59XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZnVuY3Rpb24gZ2V0UmVxdWVzdEFuaW1hdGlvbkZyYW1lKCkge1xuICByZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG59XG5cbmZ1bmN0aW9uIGdldENhbmNlbEFuaW1hdGlvbkZyYW1lKCkge1xuICByZXR1cm4gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy53ZWJraXRDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93LndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tb3pDYW5jZWxBbmltYXRpb25GcmFtZTtcbn1cblxuZnVuY3Rpb24gZGVmZXIoZm4pIHtcbiAgdmFyIGhhc0NhbmNlbEFuaW1hdGlvbkZyYW1lID0gISFnZXRDYW5jZWxBbmltYXRpb25GcmFtZSgpO1xuICB2YXIgZGVmZXJGbjtcblxuICBpZiAoaGFzQ2FuY2VsQW5pbWF0aW9uRnJhbWUpIHtcbiAgICBkZWZlckZuID0gZ2V0UmVxdWVzdEFuaW1hdGlvbkZyYW1lKCk7XG4gIH0gZWxzZSB7XG4gICAgZGVmZXJGbiA9IGZ1bmN0aW9uIGRlZmVyRm4oKSB7XG4gICAgICByZXR1cm4gc2V0VGltZW91dChmbiwgMTAwMCAvIDYwKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGRlZmVyRm4oZm4pO1xufVxuZnVuY3Rpb24gY2FuY2VsRGVmZXIoZGVmZXJJZCkge1xuICB2YXIgY2FuY2VsRm4gPSBnZXRDYW5jZWxBbmltYXRpb25GcmFtZSgpIHx8IGNsZWFyVGltZW91dDtcbiAgY2FuY2VsRm4oZGVmZXJJZCk7XG59XG5cbnZhciBJbnB1dEVsZW1lbnQgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoSW5wdXRFbGVtZW50LCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBJbnB1dEVsZW1lbnQocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICBfdGhpcy5mb2N1c2VkID0gZmFsc2U7XG4gICAgX3RoaXMubW91bnRlZCA9IGZhbHNlO1xuICAgIF90aGlzLnByZXZpb3VzU2VsZWN0aW9uID0gbnVsbDtcbiAgICBfdGhpcy5zZWxlY3Rpb25EZWZlcklkID0gbnVsbDtcbiAgICBfdGhpcy5zYXZlU2VsZWN0aW9uTG9vcERlZmVySWQgPSBudWxsO1xuXG4gICAgX3RoaXMuc2F2ZVNlbGVjdGlvbkxvb3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5wcmV2aW91c1NlbGVjdGlvbiA9IF90aGlzLmdldFNlbGVjdGlvbigpO1xuICAgICAgX3RoaXMuc2F2ZVNlbGVjdGlvbkxvb3BEZWZlcklkID0gZGVmZXIoX3RoaXMuc2F2ZVNlbGVjdGlvbkxvb3ApO1xuICAgIH07XG5cbiAgICBfdGhpcy5ydW5TYXZlU2VsZWN0aW9uTG9vcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5zYXZlU2VsZWN0aW9uTG9vcERlZmVySWQgPT09IG51bGwpIHtcbiAgICAgICAgX3RoaXMuc2F2ZVNlbGVjdGlvbkxvb3AoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuc3RvcFNhdmVTZWxlY3Rpb25Mb29wID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzLnNhdmVTZWxlY3Rpb25Mb29wRGVmZXJJZCAhPT0gbnVsbCkge1xuICAgICAgICBjYW5jZWxEZWZlcihfdGhpcy5zYXZlU2VsZWN0aW9uTG9vcERlZmVySWQpO1xuICAgICAgICBfdGhpcy5zYXZlU2VsZWN0aW9uTG9vcERlZmVySWQgPSBudWxsO1xuICAgICAgICBfdGhpcy5wcmV2aW91c1NlbGVjdGlvbiA9IG51bGw7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLmdldElucHV0RE9NTm9kZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghX3RoaXMubW91bnRlZCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIGlucHV0ID0gcmVhY3REb20uZmluZERPTU5vZGUoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSkpO1xuICAgICAgdmFyIGlzRE9NTm9kZSA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIGlucHV0IGluc3RhbmNlb2Ygd2luZG93LkVsZW1lbnQ7IC8vIHdvcmthcm91bmQgZm9yIHJlYWN0LXRlc3QtcmVuZGVyZXJcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zYW5uaWFzc2luL3JlYWN0LWlucHV0LW1hc2svaXNzdWVzLzE0N1xuXG4gICAgICBpZiAoaW5wdXQgJiYgIWlzRE9NTm9kZSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKGlucHV0Lm5vZGVOYW1lICE9PSAnSU5QVVQnKSB7XG4gICAgICAgIGlucHV0ID0gaW5wdXQucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpbnB1dCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3JlYWN0LWlucHV0LW1hc2s6IGlucHV0Q29tcG9uZW50IGRvZXNuXFwndCBjb250YWluIGlucHV0IG5vZGUnKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGlucHV0O1xuICAgIH07XG5cbiAgICBfdGhpcy5nZXRJbnB1dFZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGlucHV0ID0gX3RoaXMuZ2V0SW5wdXRET01Ob2RlKCk7XG5cbiAgICAgIGlmICghaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpbnB1dC52YWx1ZTtcbiAgICB9O1xuXG4gICAgX3RoaXMuc2V0SW5wdXRWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgdmFyIGlucHV0ID0gX3RoaXMuZ2V0SW5wdXRET01Ob2RlKCk7XG5cbiAgICAgIGlmICghaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgaW5wdXQudmFsdWUgPSB2YWx1ZTtcbiAgICB9O1xuXG4gICAgX3RoaXMuc2V0Q3Vyc29yVG9FbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZmlsbGVkTGVuZ3RoID0gZ2V0RmlsbGVkTGVuZ3RoKF90aGlzLm1hc2tPcHRpb25zLCBfdGhpcy52YWx1ZSk7XG4gICAgICB2YXIgcG9zID0gZ2V0UmlnaHRFZGl0YWJsZVBvc2l0aW9uKF90aGlzLm1hc2tPcHRpb25zLCBmaWxsZWRMZW5ndGgpO1xuXG4gICAgICBpZiAocG9zICE9PSBudWxsKSB7XG4gICAgICAgIF90aGlzLnNldEN1cnNvclBvc2l0aW9uKHBvcyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLnNldFNlbGVjdGlvbiA9IGZ1bmN0aW9uIChzdGFydCwgZW5kLCBvcHRpb25zKSB7XG4gICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICAgIH1cblxuICAgICAgdmFyIGlucHV0ID0gX3RoaXMuZ2V0SW5wdXRET01Ob2RlKCk7XG5cbiAgICAgIHZhciBpc0ZvY3VzZWQgPSBfdGhpcy5pc0ZvY3VzZWQoKTsgLy8gZG9uJ3QgY2hhbmdlIHNlbGVjdGlvbiBvbiB1bmZvY3VzZWQgaW5wdXRcbiAgICAgIC8vIGJlY2F1c2UgU2FmYXJpIHNldHMgZm9jdXMgb24gc2VsZWN0aW9uIGNoYW5nZSAoIzE1NClcblxuXG4gICAgICBpZiAoIWlucHV0IHx8ICFpc0ZvY3VzZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgX29wdGlvbnMgPSBvcHRpb25zLFxuICAgICAgICAgIGRlZmVycmVkID0gX29wdGlvbnMuZGVmZXJyZWQ7XG5cbiAgICAgIGlmICghZGVmZXJyZWQpIHtcbiAgICAgICAgc2V0SW5wdXRTZWxlY3Rpb24oaW5wdXQsIHN0YXJ0LCBlbmQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoX3RoaXMuc2VsZWN0aW9uRGVmZXJJZCAhPT0gbnVsbCkge1xuICAgICAgICBjYW5jZWxEZWZlcihfdGhpcy5zZWxlY3Rpb25EZWZlcklkKTtcbiAgICAgIH0gLy8gZGVmZXJyZWQgc2VsZWN0aW9uIHVwZGF0ZSBpcyByZXF1aXJlZCBmb3IgcHJlLUxvbGxpcG9wIEFuZHJvaWQgYnJvd3NlcixcbiAgICAgIC8vIGJ1dCBmb3IgY29uc2lzdGVudCBiZWhhdmlvciB3ZSBkbyBpdCBmb3IgYWxsIGJyb3dzZXJzXG5cblxuICAgICAgX3RoaXMuc2VsZWN0aW9uRGVmZXJJZCA9IGRlZmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMuc2VsZWN0aW9uRGVmZXJJZCA9IG51bGw7XG4gICAgICAgIHNldElucHV0U2VsZWN0aW9uKGlucHV0LCBzdGFydCwgZW5kKTtcbiAgICAgIH0pO1xuICAgICAgX3RoaXMucHJldmlvdXNTZWxlY3Rpb24gPSB7XG4gICAgICAgIHN0YXJ0OiBzdGFydCxcbiAgICAgICAgZW5kOiBlbmQsXG4gICAgICAgIGxlbmd0aDogTWF0aC5hYnMoZW5kIC0gc3RhcnQpXG4gICAgICB9O1xuICAgIH07XG5cbiAgICBfdGhpcy5nZXRTZWxlY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaW5wdXQgPSBfdGhpcy5nZXRJbnB1dERPTU5vZGUoKTtcblxuICAgICAgcmV0dXJuIGdldElucHV0U2VsZWN0aW9uKGlucHV0KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0Q3Vyc29yUG9zaXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMuZ2V0U2VsZWN0aW9uKCkuc3RhcnQ7XG4gICAgfTtcblxuICAgIF90aGlzLnNldEN1cnNvclBvc2l0aW9uID0gZnVuY3Rpb24gKHBvcykge1xuICAgICAgX3RoaXMuc2V0U2VsZWN0aW9uKHBvcywgcG9zKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaXNGb2N1c2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzLmZvY3VzZWQ7XG4gICAgfTtcblxuICAgIF90aGlzLmdldEJlZm9yZU1hc2tlZFZhbHVlQ2hhbmdlQ29uZmlnID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzJG1hc2tPcHRpb25zID0gX3RoaXMubWFza09wdGlvbnMsXG4gICAgICAgICAgbWFzayA9IF90aGlzJG1hc2tPcHRpb25zLm1hc2ssXG4gICAgICAgICAgbWFza0NoYXIgPSBfdGhpcyRtYXNrT3B0aW9ucy5tYXNrQ2hhcixcbiAgICAgICAgICBwZXJtYW5lbnRzID0gX3RoaXMkbWFza09wdGlvbnMucGVybWFuZW50cyxcbiAgICAgICAgICBmb3JtYXRDaGFycyA9IF90aGlzJG1hc2tPcHRpb25zLmZvcm1hdENoYXJzO1xuICAgICAgdmFyIGFsd2F5c1Nob3dNYXNrID0gX3RoaXMucHJvcHMuYWx3YXlzU2hvd01hc2s7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtYXNrOiBtYXNrLFxuICAgICAgICBtYXNrQ2hhcjogbWFza0NoYXIsXG4gICAgICAgIHBlcm1hbmVudHM6IHBlcm1hbmVudHMsXG4gICAgICAgIGFsd2F5c1Nob3dNYXNrOiAhIWFsd2F5c1Nob3dNYXNrLFxuICAgICAgICBmb3JtYXRDaGFyczogZm9ybWF0Q2hhcnNcbiAgICAgIH07XG4gICAgfTtcblxuICAgIF90aGlzLmlzSW5wdXRBdXRvZmlsbGVkID0gZnVuY3Rpb24gKHZhbHVlLCBzZWxlY3Rpb24sIHByZXZpb3VzVmFsdWUsIHByZXZpb3VzU2VsZWN0aW9uKSB7XG4gICAgICB2YXIgaW5wdXQgPSBfdGhpcy5nZXRJbnB1dERPTU5vZGUoKTsgLy8gb25seSBjaGVjayBmb3IgcG9zaXRpdmUgbWF0Y2ggYmVjYXVzZSBpdCB3aWxsIGJlIGZhbHNlIG5lZ2F0aXZlXG4gICAgICAvLyBpbiBjYXNlIG9mIGF1dG9maWxsIHNpbXVsYXRpb24gaW4gdGVzdHNcbiAgICAgIC8vXG4gICAgICAvLyBpbnB1dC5tYXRjaGVzIHRocm93cyBhbiBleGNlcHRpb24gaWYgc2VsZWN0b3IgaXNuJ3Qgc3VwcG9ydGVkXG5cblxuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKGlucHV0Lm1hdGNoZXMoJzotd2Via2l0LWF1dG9maWxsJykpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge30gLy8gaWYgaW5wdXQgaXNuJ3QgZm9jdXNlZCB0aGVuIGNoYW5nZSBldmVudCBtdXN0IGhhdmUgYmVlbiB0cmlnZ2VyZWRcbiAgICAgIC8vIGVpdGhlciBieSBhdXRvZmlsbCBvciBldmVudCBzaW11bGF0aW9uIGluIHRlc3RzXG5cblxuICAgICAgaWYgKCFfdGhpcy5mb2N1c2VkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSAvLyBpZiBjdXJzb3IgaGFzIG1vdmVkIHRvIHRoZSBlbmQgd2hpbGUgcHJldmlvdXNTZWxlY3Rpb24gZm9yYmlkcyBpdFxuICAgICAgLy8gdGhlbiBpdCBtdXN0IGJlIGF1dG9maWxsXG5cblxuICAgICAgcmV0dXJuIHByZXZpb3VzU2VsZWN0aW9uLmVuZCA8IHByZXZpb3VzVmFsdWUubGVuZ3RoICYmIHNlbGVjdGlvbi5lbmQgPT09IHZhbHVlLmxlbmd0aDtcbiAgICB9O1xuXG4gICAgX3RoaXMub25DaGFuZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHZhciBfYXNzZXJ0VGhpc0luaXRpYWxpemUgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSxcbiAgICAgICAgICBiZWZvcmVQYXN0ZVN0YXRlID0gX2Fzc2VydFRoaXNJbml0aWFsaXplLmJlZm9yZVBhc3RlU3RhdGU7XG5cbiAgICAgIHZhciBfYXNzZXJ0VGhpc0luaXRpYWxpemUyID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSksXG4gICAgICAgICAgcHJldmlvdXNTZWxlY3Rpb24gPSBfYXNzZXJ0VGhpc0luaXRpYWxpemUyLnByZXZpb3VzU2VsZWN0aW9uO1xuXG4gICAgICB2YXIgYmVmb3JlTWFza2VkVmFsdWVDaGFuZ2UgPSBfdGhpcy5wcm9wcy5iZWZvcmVNYXNrZWRWYWx1ZUNoYW5nZTtcblxuICAgICAgdmFyIHZhbHVlID0gX3RoaXMuZ2V0SW5wdXRWYWx1ZSgpO1xuXG4gICAgICB2YXIgcHJldmlvdXNWYWx1ZSA9IF90aGlzLnZhbHVlO1xuXG4gICAgICB2YXIgc2VsZWN0aW9uID0gX3RoaXMuZ2V0U2VsZWN0aW9uKCk7IC8vIGF1dG9maWxsIHJlcGxhY2VzIGVudGlyZSB2YWx1ZSwgaWdub3JlIG9sZCBvbmVcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zYW5uaWFzc2luL3JlYWN0LWlucHV0LW1hc2svaXNzdWVzLzExM1xuXG5cbiAgICAgIGlmIChfdGhpcy5pc0lucHV0QXV0b2ZpbGxlZCh2YWx1ZSwgc2VsZWN0aW9uLCBwcmV2aW91c1ZhbHVlLCBwcmV2aW91c1NlbGVjdGlvbikpIHtcbiAgICAgICAgcHJldmlvdXNWYWx1ZSA9IGZvcm1hdFZhbHVlKF90aGlzLm1hc2tPcHRpb25zLCAnJyk7XG4gICAgICAgIHByZXZpb3VzU2VsZWN0aW9uID0ge1xuICAgICAgICAgIHN0YXJ0OiAwLFxuICAgICAgICAgIGVuZDogMCxcbiAgICAgICAgICBsZW5ndGg6IDBcbiAgICAgICAgfTtcbiAgICAgIH0gLy8gc2V0IHZhbHVlIGFuZCBzZWxlY3Rpb24gYXMgaWYgd2UgaGF2ZW4ndFxuICAgICAgLy8gY2xlYXJlZCBpbnB1dCBpbiBvblBhc3RlIGhhbmRsZXJcblxuXG4gICAgICBpZiAoYmVmb3JlUGFzdGVTdGF0ZSkge1xuICAgICAgICBwcmV2aW91c1NlbGVjdGlvbiA9IGJlZm9yZVBhc3RlU3RhdGUuc2VsZWN0aW9uO1xuICAgICAgICBwcmV2aW91c1ZhbHVlID0gYmVmb3JlUGFzdGVTdGF0ZS52YWx1ZTtcbiAgICAgICAgc2VsZWN0aW9uID0ge1xuICAgICAgICAgIHN0YXJ0OiBwcmV2aW91c1NlbGVjdGlvbi5zdGFydCArIHZhbHVlLmxlbmd0aCxcbiAgICAgICAgICBlbmQ6IHByZXZpb3VzU2VsZWN0aW9uLnN0YXJ0ICsgdmFsdWUubGVuZ3RoLFxuICAgICAgICAgIGxlbmd0aDogMFxuICAgICAgICB9O1xuICAgICAgICB2YWx1ZSA9IHByZXZpb3VzVmFsdWUuc2xpY2UoMCwgcHJldmlvdXNTZWxlY3Rpb24uc3RhcnQpICsgdmFsdWUgKyBwcmV2aW91c1ZhbHVlLnNsaWNlKHByZXZpb3VzU2VsZWN0aW9uLmVuZCk7XG4gICAgICAgIF90aGlzLmJlZm9yZVBhc3RlU3RhdGUgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgY2hhbmdlZFN0YXRlID0gcHJvY2Vzc0NoYW5nZShfdGhpcy5tYXNrT3B0aW9ucywgdmFsdWUsIHNlbGVjdGlvbiwgcHJldmlvdXNWYWx1ZSwgcHJldmlvdXNTZWxlY3Rpb24pO1xuICAgICAgdmFyIGVudGVyZWRTdHJpbmcgPSBjaGFuZ2VkU3RhdGUuZW50ZXJlZFN0cmluZztcbiAgICAgIHZhciBuZXdTZWxlY3Rpb24gPSBjaGFuZ2VkU3RhdGUuc2VsZWN0aW9uO1xuICAgICAgdmFyIG5ld1ZhbHVlID0gY2hhbmdlZFN0YXRlLnZhbHVlO1xuXG4gICAgICBpZiAoaXNGdW5jdGlvbihiZWZvcmVNYXNrZWRWYWx1ZUNoYW5nZSkpIHtcbiAgICAgICAgdmFyIG1vZGlmaWVkVmFsdWUgPSBiZWZvcmVNYXNrZWRWYWx1ZUNoYW5nZSh7XG4gICAgICAgICAgdmFsdWU6IG5ld1ZhbHVlLFxuICAgICAgICAgIHNlbGVjdGlvbjogbmV3U2VsZWN0aW9uXG4gICAgICAgIH0sIHtcbiAgICAgICAgICB2YWx1ZTogcHJldmlvdXNWYWx1ZSxcbiAgICAgICAgICBzZWxlY3Rpb246IHByZXZpb3VzU2VsZWN0aW9uXG4gICAgICAgIH0sIGVudGVyZWRTdHJpbmcsIF90aGlzLmdldEJlZm9yZU1hc2tlZFZhbHVlQ2hhbmdlQ29uZmlnKCkpO1xuICAgICAgICBuZXdWYWx1ZSA9IG1vZGlmaWVkVmFsdWUudmFsdWU7XG4gICAgICAgIG5ld1NlbGVjdGlvbiA9IG1vZGlmaWVkVmFsdWUuc2VsZWN0aW9uO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5zZXRJbnB1dFZhbHVlKG5ld1ZhbHVlKTtcblxuICAgICAgaWYgKGlzRnVuY3Rpb24oX3RoaXMucHJvcHMub25DaGFuZ2UpKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uQ2hhbmdlKGV2ZW50KTtcbiAgICAgIH1cblxuICAgICAgaWYgKF90aGlzLmlzV2luZG93c1Bob25lQnJvd3Nlcikge1xuICAgICAgICBfdGhpcy5zZXRTZWxlY3Rpb24obmV3U2VsZWN0aW9uLnN0YXJ0LCBuZXdTZWxlY3Rpb24uZW5kLCB7XG4gICAgICAgICAgZGVmZXJyZWQ6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpcy5zZXRTZWxlY3Rpb24obmV3U2VsZWN0aW9uLnN0YXJ0LCBuZXdTZWxlY3Rpb24uZW5kKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMub25Gb2N1cyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdmFyIGJlZm9yZU1hc2tlZFZhbHVlQ2hhbmdlID0gX3RoaXMucHJvcHMuYmVmb3JlTWFza2VkVmFsdWVDaGFuZ2U7XG4gICAgICB2YXIgX3RoaXMkbWFza09wdGlvbnMyID0gX3RoaXMubWFza09wdGlvbnMsXG4gICAgICAgICAgbWFzayA9IF90aGlzJG1hc2tPcHRpb25zMi5tYXNrLFxuICAgICAgICAgIHByZWZpeCA9IF90aGlzJG1hc2tPcHRpb25zMi5wcmVmaXg7XG4gICAgICBfdGhpcy5mb2N1c2VkID0gdHJ1ZTsgLy8gaWYgYXV0b0ZvY3VzIGlzIHNldCwgb25Gb2N1cyB0cmlnZ2VycyBiZWZvcmUgY29tcG9uZW50RGlkTW91bnRcblxuICAgICAgX3RoaXMubW91bnRlZCA9IHRydWU7XG5cbiAgICAgIGlmIChtYXNrKSB7XG4gICAgICAgIGlmICghX3RoaXMudmFsdWUpIHtcbiAgICAgICAgICB2YXIgZW1wdHlWYWx1ZSA9IGZvcm1hdFZhbHVlKF90aGlzLm1hc2tPcHRpb25zLCBwcmVmaXgpO1xuICAgICAgICAgIHZhciBuZXdWYWx1ZSA9IGZvcm1hdFZhbHVlKF90aGlzLm1hc2tPcHRpb25zLCBlbXB0eVZhbHVlKTtcbiAgICAgICAgICB2YXIgZmlsbGVkTGVuZ3RoID0gZ2V0RmlsbGVkTGVuZ3RoKF90aGlzLm1hc2tPcHRpb25zLCBuZXdWYWx1ZSk7XG4gICAgICAgICAgdmFyIGN1cnNvclBvc2l0aW9uID0gZ2V0UmlnaHRFZGl0YWJsZVBvc2l0aW9uKF90aGlzLm1hc2tPcHRpb25zLCBmaWxsZWRMZW5ndGgpO1xuICAgICAgICAgIHZhciBuZXdTZWxlY3Rpb24gPSB7XG4gICAgICAgICAgICBzdGFydDogY3Vyc29yUG9zaXRpb24sXG4gICAgICAgICAgICBlbmQ6IGN1cnNvclBvc2l0aW9uXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKGJlZm9yZU1hc2tlZFZhbHVlQ2hhbmdlKSkge1xuICAgICAgICAgICAgdmFyIG1vZGlmaWVkVmFsdWUgPSBiZWZvcmVNYXNrZWRWYWx1ZUNoYW5nZSh7XG4gICAgICAgICAgICAgIHZhbHVlOiBuZXdWYWx1ZSxcbiAgICAgICAgICAgICAgc2VsZWN0aW9uOiBuZXdTZWxlY3Rpb25cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgdmFsdWU6IF90aGlzLnZhbHVlLFxuICAgICAgICAgICAgICBzZWxlY3Rpb246IG51bGxcbiAgICAgICAgICAgIH0sIG51bGwsIF90aGlzLmdldEJlZm9yZU1hc2tlZFZhbHVlQ2hhbmdlQ29uZmlnKCkpO1xuICAgICAgICAgICAgbmV3VmFsdWUgPSBtb2RpZmllZFZhbHVlLnZhbHVlO1xuICAgICAgICAgICAgbmV3U2VsZWN0aW9uID0gbW9kaWZpZWRWYWx1ZS5zZWxlY3Rpb247XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIGlzSW5wdXRWYWx1ZUNoYW5nZWQgPSBuZXdWYWx1ZSAhPT0gX3RoaXMuZ2V0SW5wdXRWYWx1ZSgpO1xuXG4gICAgICAgICAgaWYgKGlzSW5wdXRWYWx1ZUNoYW5nZWQpIHtcbiAgICAgICAgICAgIF90aGlzLnNldElucHV0VmFsdWUobmV3VmFsdWUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpc0lucHV0VmFsdWVDaGFuZ2VkICYmIGlzRnVuY3Rpb24oX3RoaXMucHJvcHMub25DaGFuZ2UpKSB7XG4gICAgICAgICAgICBfdGhpcy5wcm9wcy5vbkNoYW5nZShldmVudCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgX3RoaXMuc2V0U2VsZWN0aW9uKG5ld1NlbGVjdGlvbi5zdGFydCwgbmV3U2VsZWN0aW9uLmVuZCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZ2V0RmlsbGVkTGVuZ3RoKF90aGlzLm1hc2tPcHRpb25zLCBfdGhpcy52YWx1ZSkgPCBfdGhpcy5tYXNrT3B0aW9ucy5tYXNrLmxlbmd0aCkge1xuICAgICAgICAgIF90aGlzLnNldEN1cnNvclRvRW5kKCk7XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpcy5ydW5TYXZlU2VsZWN0aW9uTG9vcCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNGdW5jdGlvbihfdGhpcy5wcm9wcy5vbkZvY3VzKSkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkZvY3VzKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMub25CbHVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB2YXIgYmVmb3JlTWFza2VkVmFsdWVDaGFuZ2UgPSBfdGhpcy5wcm9wcy5iZWZvcmVNYXNrZWRWYWx1ZUNoYW5nZTtcbiAgICAgIHZhciBtYXNrID0gX3RoaXMubWFza09wdGlvbnMubWFzaztcblxuICAgICAgX3RoaXMuc3RvcFNhdmVTZWxlY3Rpb25Mb29wKCk7XG5cbiAgICAgIF90aGlzLmZvY3VzZWQgPSBmYWxzZTtcblxuICAgICAgaWYgKG1hc2sgJiYgIV90aGlzLnByb3BzLmFsd2F5c1Nob3dNYXNrICYmIGlzRW1wdHkoX3RoaXMubWFza09wdGlvbnMsIF90aGlzLnZhbHVlKSkge1xuICAgICAgICB2YXIgbmV3VmFsdWUgPSAnJztcblxuICAgICAgICBpZiAoaXNGdW5jdGlvbihiZWZvcmVNYXNrZWRWYWx1ZUNoYW5nZSkpIHtcbiAgICAgICAgICB2YXIgbW9kaWZpZWRWYWx1ZSA9IGJlZm9yZU1hc2tlZFZhbHVlQ2hhbmdlKHtcbiAgICAgICAgICAgIHZhbHVlOiBuZXdWYWx1ZSxcbiAgICAgICAgICAgIHNlbGVjdGlvbjogbnVsbFxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIHZhbHVlOiBfdGhpcy52YWx1ZSxcbiAgICAgICAgICAgIHNlbGVjdGlvbjogX3RoaXMucHJldmlvdXNTZWxlY3Rpb25cbiAgICAgICAgICB9LCBudWxsLCBfdGhpcy5nZXRCZWZvcmVNYXNrZWRWYWx1ZUNoYW5nZUNvbmZpZygpKTtcbiAgICAgICAgICBuZXdWYWx1ZSA9IG1vZGlmaWVkVmFsdWUudmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaXNJbnB1dFZhbHVlQ2hhbmdlZCA9IG5ld1ZhbHVlICE9PSBfdGhpcy5nZXRJbnB1dFZhbHVlKCk7XG5cbiAgICAgICAgaWYgKGlzSW5wdXRWYWx1ZUNoYW5nZWQpIHtcbiAgICAgICAgICBfdGhpcy5zZXRJbnB1dFZhbHVlKG5ld1ZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0lucHV0VmFsdWVDaGFuZ2VkICYmIGlzRnVuY3Rpb24oX3RoaXMucHJvcHMub25DaGFuZ2UpKSB7XG4gICAgICAgICAgX3RoaXMucHJvcHMub25DaGFuZ2UoZXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChpc0Z1bmN0aW9uKF90aGlzLnByb3BzLm9uQmx1cikpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25CbHVyKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMub25Nb3VzZURvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIC8vIHRpbnkgdW5pbnRlbnRpb25hbCBtb3VzZSBtb3ZlbWVudHMgY2FuIGJyZWFrIGN1cnNvclxuICAgICAgLy8gcG9zaXRpb24gb24gZm9jdXMsIHNvIHdlIGhhdmUgdG8gcmVzdG9yZSBpdCBpbiB0aGF0IGNhc2VcbiAgICAgIC8vXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vc2Fubmlhc3Npbi9yZWFjdC1pbnB1dC1tYXNrL2lzc3Vlcy8xMDhcbiAgICAgIGlmICghX3RoaXMuZm9jdXNlZCAmJiBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgIF90aGlzLm1vdXNlRG93blggPSBldmVudC5jbGllbnRYO1xuICAgICAgICBfdGhpcy5tb3VzZURvd25ZID0gZXZlbnQuY2xpZW50WTtcbiAgICAgICAgX3RoaXMubW91c2VEb3duVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gICAgICAgIHZhciBtb3VzZVVwSGFuZGxlciA9IGZ1bmN0aW9uIG1vdXNlVXBIYW5kbGVyKG1vdXNlVXBFdmVudCkge1xuICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBtb3VzZVVwSGFuZGxlcik7XG5cbiAgICAgICAgICBpZiAoIV90aGlzLmZvY3VzZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgZGVsdGFYID0gTWF0aC5hYnMobW91c2VVcEV2ZW50LmNsaWVudFggLSBfdGhpcy5tb3VzZURvd25YKTtcbiAgICAgICAgICB2YXIgZGVsdGFZID0gTWF0aC5hYnMobW91c2VVcEV2ZW50LmNsaWVudFkgLSBfdGhpcy5tb3VzZURvd25ZKTtcbiAgICAgICAgICB2YXIgYXhpc0RlbHRhID0gTWF0aC5tYXgoZGVsdGFYLCBkZWx0YVkpO1xuXG4gICAgICAgICAgdmFyIHRpbWVEZWx0YSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gX3RoaXMubW91c2VEb3duVGltZTtcblxuICAgICAgICAgIGlmIChheGlzRGVsdGEgPD0gMTAgJiYgdGltZURlbHRhIDw9IDIwMCB8fCBheGlzRGVsdGEgPD0gNSAmJiB0aW1lRGVsdGEgPD0gMzAwKSB7XG4gICAgICAgICAgICBfdGhpcy5zZXRDdXJzb3JUb0VuZCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgbW91c2VVcEhhbmRsZXIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNGdW5jdGlvbihfdGhpcy5wcm9wcy5vbk1vdXNlRG93bikpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25Nb3VzZURvd24oZXZlbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5vblBhc3RlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoaXNGdW5jdGlvbihfdGhpcy5wcm9wcy5vblBhc3RlKSkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vblBhc3RlKGV2ZW50KTtcbiAgICAgIH0gLy8gZXZlbnQuY2xpcGJvYXJkRGF0YSBtaWdodCBub3Qgd29yayBpbiBBbmRyb2lkIGJyb3dzZXJcbiAgICAgIC8vIGNsZWFuaW5nIGlucHV0IHRvIGdldCByYXcgdGV4dCBpbnNpZGUgb25DaGFuZ2UgaGFuZGxlclxuXG5cbiAgICAgIGlmICghZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBfdGhpcy5iZWZvcmVQYXN0ZVN0YXRlID0ge1xuICAgICAgICAgIHZhbHVlOiBfdGhpcy5nZXRJbnB1dFZhbHVlKCksXG4gICAgICAgICAgc2VsZWN0aW9uOiBfdGhpcy5nZXRTZWxlY3Rpb24oKVxuICAgICAgICB9O1xuXG4gICAgICAgIF90aGlzLnNldElucHV0VmFsdWUoJycpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVSZWYgPSBmdW5jdGlvbiAocmVmKSB7XG4gICAgICBpZiAoX3RoaXMucHJvcHMuY2hpbGRyZW4gPT0gbnVsbCAmJiBpc0Z1bmN0aW9uKF90aGlzLnByb3BzLmlucHV0UmVmKSkge1xuICAgICAgICBfdGhpcy5wcm9wcy5pbnB1dFJlZihyZWYpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgX21hc2sgPSBwcm9wcy5tYXNrLFxuICAgICAgICBfbWFza0NoYXIgPSBwcm9wcy5tYXNrQ2hhcixcbiAgICAgICAgX2Zvcm1hdENoYXJzID0gcHJvcHMuZm9ybWF0Q2hhcnMsXG4gICAgICAgIF9hbHdheXNTaG93TWFzayA9IHByb3BzLmFsd2F5c1Nob3dNYXNrLFxuICAgICAgICBfYmVmb3JlTWFza2VkVmFsdWVDaGFuZ2UgPSBwcm9wcy5iZWZvcmVNYXNrZWRWYWx1ZUNoYW5nZTtcbiAgICB2YXIgZGVmYXVsdFZhbHVlID0gcHJvcHMuZGVmYXVsdFZhbHVlLFxuICAgICAgICBfdmFsdWUgPSBwcm9wcy52YWx1ZTtcbiAgICBfdGhpcy5tYXNrT3B0aW9ucyA9IHBhcnNlTWFzayhfbWFzaywgX21hc2tDaGFyLCBfZm9ybWF0Q2hhcnMpO1xuXG4gICAgaWYgKGRlZmF1bHRWYWx1ZSA9PSBudWxsKSB7XG4gICAgICBkZWZhdWx0VmFsdWUgPSAnJztcbiAgICB9XG5cbiAgICBpZiAoX3ZhbHVlID09IG51bGwpIHtcbiAgICAgIF92YWx1ZSA9IGRlZmF1bHRWYWx1ZTtcbiAgICB9XG5cbiAgICB2YXIgX25ld1ZhbHVlID0gZ2V0U3RyaW5nVmFsdWUoX3ZhbHVlKTtcblxuICAgIGlmIChfdGhpcy5tYXNrT3B0aW9ucy5tYXNrICYmIChfYWx3YXlzU2hvd01hc2sgfHwgX25ld1ZhbHVlKSkge1xuICAgICAgX25ld1ZhbHVlID0gZm9ybWF0VmFsdWUoX3RoaXMubWFza09wdGlvbnMsIF9uZXdWYWx1ZSk7XG5cbiAgICAgIGlmIChpc0Z1bmN0aW9uKF9iZWZvcmVNYXNrZWRWYWx1ZUNoYW5nZSkpIHtcbiAgICAgICAgdmFyIG9sZFZhbHVlID0gcHJvcHMudmFsdWU7XG5cbiAgICAgICAgaWYgKHByb3BzLnZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICBvbGRWYWx1ZSA9IGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9sZFZhbHVlID0gZ2V0U3RyaW5nVmFsdWUob2xkVmFsdWUpO1xuXG4gICAgICAgIHZhciBtb2RpZmllZFZhbHVlID0gX2JlZm9yZU1hc2tlZFZhbHVlQ2hhbmdlKHtcbiAgICAgICAgICB2YWx1ZTogX25ld1ZhbHVlLFxuICAgICAgICAgIHNlbGVjdGlvbjogbnVsbFxuICAgICAgICB9LCB7XG4gICAgICAgICAgdmFsdWU6IG9sZFZhbHVlLFxuICAgICAgICAgIHNlbGVjdGlvbjogbnVsbFxuICAgICAgICB9LCBudWxsLCBfdGhpcy5nZXRCZWZvcmVNYXNrZWRWYWx1ZUNoYW5nZUNvbmZpZygpKTtcblxuICAgICAgICBfbmV3VmFsdWUgPSBtb2RpZmllZFZhbHVlLnZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIF90aGlzLnZhbHVlID0gX25ld1ZhbHVlO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBJbnB1dEVsZW1lbnQucHJvdG90eXBlO1xuXG4gIF9wcm90by5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMubW91bnRlZCA9IHRydWU7IC8vIHdvcmthcm91bmQgZm9yIHJlYWN0LXRlc3QtcmVuZGVyZXJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vc2Fubmlhc3Npbi9yZWFjdC1pbnB1dC1tYXNrL2lzc3Vlcy8xNDdcblxuICAgIGlmICghdGhpcy5nZXRJbnB1dERPTU5vZGUoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuaXNXaW5kb3dzUGhvbmVCcm93c2VyID0gaXNXaW5kb3dzUGhvbmVCcm93c2VyKCk7XG5cbiAgICBpZiAodGhpcy5tYXNrT3B0aW9ucy5tYXNrICYmIHRoaXMuZ2V0SW5wdXRWYWx1ZSgpICE9PSB0aGlzLnZhbHVlKSB7XG4gICAgICB0aGlzLnNldElucHV0VmFsdWUodGhpcy52YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdmFyIHByZXZpb3VzU2VsZWN0aW9uID0gdGhpcy5wcmV2aW91c1NlbGVjdGlvbjtcbiAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBiZWZvcmVNYXNrZWRWYWx1ZUNoYW5nZSA9IF90aGlzJHByb3BzLmJlZm9yZU1hc2tlZFZhbHVlQ2hhbmdlLFxuICAgICAgICBhbHdheXNTaG93TWFzayA9IF90aGlzJHByb3BzLmFsd2F5c1Nob3dNYXNrLFxuICAgICAgICBtYXNrID0gX3RoaXMkcHJvcHMubWFzayxcbiAgICAgICAgbWFza0NoYXIgPSBfdGhpcyRwcm9wcy5tYXNrQ2hhcixcbiAgICAgICAgZm9ybWF0Q2hhcnMgPSBfdGhpcyRwcm9wcy5mb3JtYXRDaGFycztcbiAgICB2YXIgcHJldmlvdXNNYXNrT3B0aW9ucyA9IHRoaXMubWFza09wdGlvbnM7XG4gICAgdmFyIHNob3dFbXB0eSA9IGFsd2F5c1Nob3dNYXNrIHx8IHRoaXMuaXNGb2N1c2VkKCk7XG4gICAgdmFyIGhhc1ZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZSAhPSBudWxsO1xuICAgIHZhciBuZXdWYWx1ZSA9IGhhc1ZhbHVlID8gZ2V0U3RyaW5nVmFsdWUodGhpcy5wcm9wcy52YWx1ZSkgOiB0aGlzLnZhbHVlO1xuICAgIHZhciBjdXJzb3JQb3NpdGlvbiA9IHByZXZpb3VzU2VsZWN0aW9uID8gcHJldmlvdXNTZWxlY3Rpb24uc3RhcnQgOiBudWxsO1xuICAgIHRoaXMubWFza09wdGlvbnMgPSBwYXJzZU1hc2sobWFzaywgbWFza0NoYXIsIGZvcm1hdENoYXJzKTtcblxuICAgIGlmICghdGhpcy5tYXNrT3B0aW9ucy5tYXNrKSB7XG4gICAgICBpZiAocHJldmlvdXNNYXNrT3B0aW9ucy5tYXNrKSB7XG4gICAgICAgIHRoaXMuc3RvcFNhdmVTZWxlY3Rpb25Mb29wKCk7IC8vIHJlbmRlciBkZXBlbmRzIG9uIHRoaXMubWFza09wdGlvbnMgYW5kIHRoaXMudmFsdWUsXG4gICAgICAgIC8vIGNhbGwgZm9yY2VVcGRhdGUgdG8ga2VlcCBpdCBpbiBzeW5jXG5cbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmICghcHJldmlvdXNNYXNrT3B0aW9ucy5tYXNrICYmIHRoaXMuaXNGb2N1c2VkKCkpIHtcbiAgICAgIHRoaXMucnVuU2F2ZVNlbGVjdGlvbkxvb3AoKTtcbiAgICB9XG5cbiAgICB2YXIgaXNNYXNrQ2hhbmdlZCA9IHRoaXMubWFza09wdGlvbnMubWFzayAmJiB0aGlzLm1hc2tPcHRpb25zLm1hc2sgIT09IHByZXZpb3VzTWFza09wdGlvbnMubWFzaztcblxuICAgIGlmICghcHJldmlvdXNNYXNrT3B0aW9ucy5tYXNrICYmICFoYXNWYWx1ZSkge1xuICAgICAgbmV3VmFsdWUgPSB0aGlzLmdldElucHV0VmFsdWUoKTtcbiAgICB9XG5cbiAgICBpZiAoaXNNYXNrQ2hhbmdlZCB8fCB0aGlzLm1hc2tPcHRpb25zLm1hc2sgJiYgKG5ld1ZhbHVlIHx8IHNob3dFbXB0eSkpIHtcbiAgICAgIG5ld1ZhbHVlID0gZm9ybWF0VmFsdWUodGhpcy5tYXNrT3B0aW9ucywgbmV3VmFsdWUpO1xuICAgIH1cblxuICAgIGlmIChpc01hc2tDaGFuZ2VkKSB7XG4gICAgICB2YXIgZmlsbGVkTGVuZ3RoID0gZ2V0RmlsbGVkTGVuZ3RoKHRoaXMubWFza09wdGlvbnMsIG5ld1ZhbHVlKTtcblxuICAgICAgaWYgKGN1cnNvclBvc2l0aW9uID09PSBudWxsIHx8IGZpbGxlZExlbmd0aCA8IGN1cnNvclBvc2l0aW9uKSB7XG4gICAgICAgIGlmIChpc0ZpbGxlZCh0aGlzLm1hc2tPcHRpb25zLCBuZXdWYWx1ZSkpIHtcbiAgICAgICAgICBjdXJzb3JQb3NpdGlvbiA9IGZpbGxlZExlbmd0aDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjdXJzb3JQb3NpdGlvbiA9IGdldFJpZ2h0RWRpdGFibGVQb3NpdGlvbih0aGlzLm1hc2tPcHRpb25zLCBmaWxsZWRMZW5ndGgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubWFza09wdGlvbnMubWFzayAmJiBpc0VtcHR5KHRoaXMubWFza09wdGlvbnMsIG5ld1ZhbHVlKSAmJiAhc2hvd0VtcHR5ICYmICghaGFzVmFsdWUgfHwgIXRoaXMucHJvcHMudmFsdWUpKSB7XG4gICAgICBuZXdWYWx1ZSA9ICcnO1xuICAgIH1cblxuICAgIHZhciBuZXdTZWxlY3Rpb24gPSB7XG4gICAgICBzdGFydDogY3Vyc29yUG9zaXRpb24sXG4gICAgICBlbmQ6IGN1cnNvclBvc2l0aW9uXG4gICAgfTtcblxuICAgIGlmIChpc0Z1bmN0aW9uKGJlZm9yZU1hc2tlZFZhbHVlQ2hhbmdlKSkge1xuICAgICAgdmFyIG1vZGlmaWVkVmFsdWUgPSBiZWZvcmVNYXNrZWRWYWx1ZUNoYW5nZSh7XG4gICAgICAgIHZhbHVlOiBuZXdWYWx1ZSxcbiAgICAgICAgc2VsZWN0aW9uOiBuZXdTZWxlY3Rpb25cbiAgICAgIH0sIHtcbiAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICAgIHNlbGVjdGlvbjogdGhpcy5wcmV2aW91c1NlbGVjdGlvblxuICAgICAgfSwgbnVsbCwgdGhpcy5nZXRCZWZvcmVNYXNrZWRWYWx1ZUNoYW5nZUNvbmZpZygpKTtcbiAgICAgIG5ld1ZhbHVlID0gbW9kaWZpZWRWYWx1ZS52YWx1ZTtcbiAgICAgIG5ld1NlbGVjdGlvbiA9IG1vZGlmaWVkVmFsdWUuc2VsZWN0aW9uO1xuICAgIH1cblxuICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZTtcbiAgICB2YXIgaXNWYWx1ZUNoYW5nZWQgPSB0aGlzLmdldElucHV0VmFsdWUoKSAhPT0gdGhpcy52YWx1ZTsgLy8gcmVuZGVyIGRlcGVuZHMgb24gdGhpcy5tYXNrT3B0aW9ucyBhbmQgdGhpcy52YWx1ZSxcbiAgICAvLyBjYWxsIGZvcmNlVXBkYXRlIHRvIGtlZXAgaXQgaW4gc3luY1xuXG4gICAgaWYgKGlzVmFsdWVDaGFuZ2VkKSB7XG4gICAgICB0aGlzLnNldElucHV0VmFsdWUodGhpcy52YWx1ZSk7XG4gICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gICAgfSBlbHNlIGlmIChpc01hc2tDaGFuZ2VkKSB7XG4gICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gICAgfVxuXG4gICAgdmFyIGlzU2VsZWN0aW9uQ2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgaWYgKG5ld1NlbGVjdGlvbi5zdGFydCAhPSBudWxsICYmIG5ld1NlbGVjdGlvbi5lbmQgIT0gbnVsbCkge1xuICAgICAgaXNTZWxlY3Rpb25DaGFuZ2VkID0gIXByZXZpb3VzU2VsZWN0aW9uIHx8IHByZXZpb3VzU2VsZWN0aW9uLnN0YXJ0ICE9PSBuZXdTZWxlY3Rpb24uc3RhcnQgfHwgcHJldmlvdXNTZWxlY3Rpb24uZW5kICE9PSBuZXdTZWxlY3Rpb24uZW5kO1xuICAgIH1cblxuICAgIGlmIChpc1NlbGVjdGlvbkNoYW5nZWQgfHwgaXNWYWx1ZUNoYW5nZWQpIHtcbiAgICAgIHRoaXMuc2V0U2VsZWN0aW9uKG5ld1NlbGVjdGlvbi5zdGFydCwgbmV3U2VsZWN0aW9uLmVuZCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMubW91bnRlZCA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuc2VsZWN0aW9uRGVmZXJJZCAhPT0gbnVsbCkge1xuICAgICAgY2FuY2VsRGVmZXIodGhpcy5zZWxlY3Rpb25EZWZlcklkKTtcbiAgICB9XG5cbiAgICB0aGlzLnN0b3BTYXZlU2VsZWN0aW9uTG9vcCgpO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzJHByb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgIG1hc2sgPSBfdGhpcyRwcm9wczIubWFzayxcbiAgICAgICAgYWx3YXlzU2hvd01hc2sgPSBfdGhpcyRwcm9wczIuYWx3YXlzU2hvd01hc2ssXG4gICAgICAgIG1hc2tDaGFyID0gX3RoaXMkcHJvcHMyLm1hc2tDaGFyLFxuICAgICAgICBmb3JtYXRDaGFycyA9IF90aGlzJHByb3BzMi5mb3JtYXRDaGFycyxcbiAgICAgICAgaW5wdXRSZWYgPSBfdGhpcyRwcm9wczIuaW5wdXRSZWYsXG4gICAgICAgIGJlZm9yZU1hc2tlZFZhbHVlQ2hhbmdlID0gX3RoaXMkcHJvcHMyLmJlZm9yZU1hc2tlZFZhbHVlQ2hhbmdlLFxuICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzMi5jaGlsZHJlbixcbiAgICAgICAgcmVzdFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHMyLCBbXCJtYXNrXCIsIFwiYWx3YXlzU2hvd01hc2tcIiwgXCJtYXNrQ2hhclwiLCBcImZvcm1hdENoYXJzXCIsIFwiaW5wdXRSZWZcIiwgXCJiZWZvcmVNYXNrZWRWYWx1ZUNoYW5nZVwiLCBcImNoaWxkcmVuXCJdKTtcblxuICAgIHZhciBpbnB1dEVsZW1lbnQ7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyggLy8gcGFyc2UgbWFzayB0byB0ZXN0IGFnYWluc3QgYWN0dWFsIG1hc2sgcHJvcCBhcyB0aGlzLm1hc2tPcHRpb25zXG4gICAgLy8gd2lsbCBiZSB1cGRhdGVkIGxhdGVyIGluIGNvbXBvbmVudERpZFVwZGF0ZVxuICAgICFyZXN0UHJvcHMubWF4TGVuZ3RoIHx8ICFwYXJzZU1hc2sobWFzaywgbWFza0NoYXIsIGZvcm1hdENoYXJzKS5tYXNrLCAncmVhY3QtaW5wdXQtbWFzazogbWF4TGVuZ3RoIHByb3BlcnR5IHNob3VsZG5cXCd0IGJlIHBhc3NlZCB0byB0aGUgbWFza2VkIGlucHV0LiBJdCBicmVha3MgbWFza2luZyBhbmQgdW5uZWNlc3NhcnkgYmVjYXVzZSBsZW5ndGggaXMgbGltaXRlZCBieSB0aGUgbWFzayBsZW5ndGguJykgOiB2b2lkIDA7XG5cbiAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgICFpc0Z1bmN0aW9uKGNoaWxkcmVuKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmYWxzZSwgJ3JlYWN0LWlucHV0LW1hc2s6IGNoaWxkcmVuIG11c3QgYmUgYSBmdW5jdGlvbicpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgICAgIHZhciBjb250cm9sbGVkUHJvcHMgPSBbJ29uQ2hhbmdlJywgJ29uUGFzdGUnLCAnb25Nb3VzZURvd24nLCAnb25Gb2N1cycsICdvbkJsdXInLCAndmFsdWUnLCAnZGlzYWJsZWQnLCAncmVhZE9ubHknXTtcblxuICAgICAgdmFyIGNoaWxkcmVuUHJvcHMgPSBfZXh0ZW5kcyh7fSwgcmVzdFByb3BzKTtcblxuICAgICAgY29udHJvbGxlZFByb3BzLmZvckVhY2goZnVuY3Rpb24gKHByb3BJZCkge1xuICAgICAgICByZXR1cm4gZGVsZXRlIGNoaWxkcmVuUHJvcHNbcHJvcElkXTtcbiAgICAgIH0pO1xuICAgICAgaW5wdXRFbGVtZW50ID0gY2hpbGRyZW4oY2hpbGRyZW5Qcm9wcyk7XG4gICAgICB2YXIgY29uZmxpY3RQcm9wcyA9IGNvbnRyb2xsZWRQcm9wcy5maWx0ZXIoZnVuY3Rpb24gKHByb3BJZCkge1xuICAgICAgICByZXR1cm4gaW5wdXRFbGVtZW50LnByb3BzW3Byb3BJZF0gIT0gbnVsbCAmJiBpbnB1dEVsZW1lbnQucHJvcHNbcHJvcElkXSAhPT0gcmVzdFByb3BzW3Byb3BJZF07XG4gICAgICB9KTtcbiAgICAgICEhY29uZmxpY3RQcm9wcy5sZW5ndGggPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIFwicmVhY3QtaW5wdXQtbWFzazogdGhlIGZvbGxvd2luZyBwcm9wcyBzaG91bGQgYmUgcGFzc2VkIHRvIHRoZSByZWFjdC1pbnB1dC1tYXNrJ3MgY29tcG9uZW50IGFuZCBzaG91bGQgbm90IGJlIGFsdGVyZWQgaW4gY2hpbGRyZW4ncyBmdW5jdGlvbjogXCIgKyBjb25mbGljdFByb3BzLmpvaW4oJywgJykpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoIWlucHV0UmVmLCAncmVhY3QtaW5wdXQtbWFzazogaW5wdXRSZWYgaXMgaWdub3JlZCB3aGVuIGNoaWxkcmVuIGlzIHBhc3NlZCwgYXR0YWNoIHJlZiB0byB0aGUgY2hpbGRyZW4gaW5zdGVhZCcpIDogdm9pZCAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnB1dEVsZW1lbnQgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgX2V4dGVuZHMoe1xuICAgICAgICByZWY6IHRoaXMuaGFuZGxlUmVmXG4gICAgICB9LCByZXN0UHJvcHMpKTtcbiAgICB9XG5cbiAgICB2YXIgY2hhbmdlZFByb3BzID0ge1xuICAgICAgb25Gb2N1czogdGhpcy5vbkZvY3VzLFxuICAgICAgb25CbHVyOiB0aGlzLm9uQmx1clxuICAgIH07XG5cbiAgICBpZiAodGhpcy5tYXNrT3B0aW9ucy5tYXNrKSB7XG4gICAgICBpZiAoIXJlc3RQcm9wcy5kaXNhYmxlZCAmJiAhcmVzdFByb3BzLnJlYWRPbmx5KSB7XG4gICAgICAgIGNoYW5nZWRQcm9wcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2U7XG4gICAgICAgIGNoYW5nZWRQcm9wcy5vblBhc3RlID0gdGhpcy5vblBhc3RlO1xuICAgICAgICBjaGFuZ2VkUHJvcHMub25Nb3VzZURvd24gPSB0aGlzLm9uTW91c2VEb3duO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVzdFByb3BzLnZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgY2hhbmdlZFByb3BzLnZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpbnB1dEVsZW1lbnQgPSBSZWFjdC5jbG9uZUVsZW1lbnQoaW5wdXRFbGVtZW50LCBjaGFuZ2VkUHJvcHMpO1xuICAgIHJldHVybiBpbnB1dEVsZW1lbnQ7XG4gIH07XG5cbiAgcmV0dXJuIElucHV0RWxlbWVudDtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnB1dEVsZW1lbnQ7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIF9fREVWX18gPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nO1xuXG52YXIgd2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChfX0RFVl9fKSB7XG4gIHZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbiBwcmludFdhcm5pbmcoZm9ybWF0LCBhcmdzKSB7XG4gICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgYXJncyA9IG5ldyBBcnJheShsZW4gPiAxID8gbGVuIC0gMSA6IDApO1xuICAgIGZvciAodmFyIGtleSA9IDE7IGtleSA8IGxlbjsga2V5KyspIHtcbiAgICAgIGFyZ3Nba2V5IC0gMV0gPSBhcmd1bWVudHNba2V5XTtcbiAgICB9XG4gICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICtcbiAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICB9KTtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9XG5cbiAgd2FybmluZyA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhcmdzKSB7XG4gICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgYXJncyA9IG5ldyBBcnJheShsZW4gPiAyID8gbGVuIC0gMiA6IDApO1xuICAgIGZvciAodmFyIGtleSA9IDI7IGtleSA8IGxlbjsga2V5KyspIHtcbiAgICAgIGFyZ3Nba2V5IC0gMl0gPSBhcmd1bWVudHNba2V5XTtcbiAgICB9XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2B3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgK1xuICAgICAgICAgICdtZXNzYWdlIGFyZ3VtZW50J1xuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIHByaW50V2FybmluZy5hcHBseShudWxsLCBbZm9ybWF0XS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3YXJuaW5nO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==