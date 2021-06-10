self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/shared/Feedback.js":
/*!***************************************!*\
  !*** ./components/shared/Feedback.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ "./node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "E:\\job\\nashcompany\\components\\shared\\Feedback.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var Feedback = function Feedback() {
  _s();

  var _settings;

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var stHeight = jquery__WEBPACK_IMPORTED_MODULE_4___default()('.slick-track').height(),
        timeout = false,
        // holder for timeout id
    delay = 250; // delay after event is "complete" to run callback

    function refreshSlickHeight() {
      jquery__WEBPACK_IMPORTED_MODULE_4___default()('.slick-slide').css('height', stHeight + 'px');
    } // window.resize event listener


    window.addEventListener('resize', function () {
      // clear the timeout
      clearTimeout(timeout); // start timing for event "completion"

      timeout = setTimeout(refreshSlickHeight, delay);
    });
  }, []);
  var settings = (_settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 4800,
    arrows: false,
    dots: false,
    className: 'feedback_block'
  }, (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_settings, "autoplay", true), (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_settings, "autoplaySpeed", 4000), (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_settings, "responsive", [{
    breakpoint: 768,
    settings: {
      slidesToShow: 1
    }
  }, {
    breakpoint: 520,
    settings: {
      slidesToShow: 1
    }
  }, {
    breakpoint: 380,
    settings: {
      slidesToShow: 1
    }
  }]), _settings);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "feedbacks",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      children: "\u041E\u0442\u0437\u044B\u0432\u044B \u043D\u0430\u0448\u0438\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_3__.default, _objectSpread(_objectSpread({}, settings), {}, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "feedback_text",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: "\u041A\u0443\u0430\u0442 \u0421\u0430\u043B\u0442\u0430\u043D\u0430\u0442"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: "Companyname"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "\u0425\u043E\u0447\u0443 \u0432\u044B\u0440\u0430\u0437\u0438\u0442\u044C \u0431\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u043D\u043E\u0441\u0442\u044C \u042E\u0440\u0438\u0441\u0442\u0430\u043C \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0437\u0430 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u0438\u0437\u043C, \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0441\u0442\u044C \u0438 \u043E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C. \u0420\u0430\u0431\u043E\u0442\u0443 \u0432\u044B\u043F\u043E\u043B\u043D\u0438\u043B\u0438 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E \u0431\u044B\u0441\u0442\u0440\u043E, \u0430 \u0441\u0430\u043C\u043E\u0435 \u0433\u043B\u0430\u0432\u043D\u043E\u0435 \u0411\u0415\u0421\u041F\u041B\u0410\u0422\u041D\u041E. \u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u044E \u044D\u0442\u0443 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044E, \u043F\u043E\u043C\u043E\u0436\u0435\u0442 \u0438 \u0441\u043E\u0441\u0442\u0430\u0432\u0438\u0442 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u044E, \u043E\u0431\u044A\u044F\u0441\u043D\u044F\u044E\u0442 \u0432\u0441\u0435 \u0434\u043E\u0445\u043E\u0434\u0447\u0438\u0432\u043E."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "feedback_text",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: "\u041C\u0435\u043B\u044C\u043D\u0438\u043A\u043E\u0432 \u0412\u043B\u0430\u0434\u0438\u043C\u0438\u0440"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "\u041E\u0431\u0440\u0430\u0442\u0438\u043B\u0441\u044F \u0437\u0430 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u0435\u0439 \u0432 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044E Nashcompany, \u0431\u044B\u043B \u043E\u0448\u0430\u0440\u0430\u0448\u0435\u043D, \u0442\u0435\u043C \u043A\u0430\u043A \u043E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u043E \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442, \u0441\u043E\u0441\u0442\u0430\u0432\u0438\u043B\u0438 \u043E\u0447\u0435\u043D\u044C \u0433\u0440\u0430\u043C\u043E\u0442\u043D\u043E \u0438\u0441\u043A\u043E\u0432\u043E\u0435 \u0437\u0430\u044F\u0432\u043B\u0435\u043D\u0438\u0435. \u041C\u0435\u043D\u044F \u043F\u043E\u043F\u0440\u043E\u0441\u0438\u043B\u0438 \u043F\u0440\u0438\u0441\u043B\u0430\u0442\u044C \u0432\u0441\u0435 \u0438\u043C\u0435\u044E\u0449\u0438\u0435\u0441\u044F \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B, \u0437\u0430\u0434\u0430\u0432\u0430\u043B\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0438 \u0447\u0451\u0442\u043A\u043E \u043E\u0431\u044A\u044F\u0441\u043D\u044F\u043B\u0438 \u0432\u0435\u0441\u044C \u043F\u0440\u043E\u0446\u0435\u0441\u0441, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043C\u043D\u0435 \u043F\u0440\u0438\u0434\u0451\u0442\u0441\u044F \u043F\u0440\u043E\u0439\u0442\u0438. \u041E\u0431\u044A\u044F\u0441\u043D\u044F\u043B\u0438 \u0430\u0431\u0441\u043E\u043B\u044E\u0442\u043D\u043E \u0432\u0441\u0451 \u0434\u043E \u043C\u0435\u043B\u044C\u0447\u0430\u0439\u0448\u0438\u0445 \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u043E\u0441\u0442\u0435\u0439 \u0418 \u0437\u0430 \u044D\u0442\u043E \u044F \u043E\u0447\u0435\u043D\u044C-\u043E\u0447\u0435\u043D\u044C \u0431\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u0435\u043D. \u0421\u043F\u0443\u0441\u0442\u044F \u0432\u0440\u0435\u043C\u044F \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044E, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0434\u043B\u0438\u043B\u0430\u0441\u044C \u043C\u0435\u0441\u044F\u0446, \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0440\u0435\u0448\u0438\u0442\u044C \u0432 \u043C\u043E\u044E \u043F\u043E\u043B\u044C\u0437\u0443."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "feedback_text",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: "\u041A\u0430\u0441\u044B\u043C \u041A\u0430\u0441\u044B\u043C\u043E\u0432"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: "Companyname"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "\xABNASH Company\xBB \u2013 \u0435\u0434\u0438\u043D\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u0432 \u041A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D\u0435 \u0438\u043D\u043D\u043E\u0432\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u042E\u0420\u0422\u0415\u0425 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u0443\u0435\u0442\u0441\u044F \u0432 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u043F\u0440\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u043B\u044E\u0431\u044B\u0445 \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0437\u0430\u0434\u0430\u0447."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "feedback_text",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: "\u0410\u0439\u0434\u0430\u043D\u0430 \u0410\u0437\u0430\u0442"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: "Companyname"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "\xABNASH Company\xBB \u2013 \u0435\u0434\u0438\u043D\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u0432 \u041A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D\u0435 \u0438\u043D\u043D\u043E\u0432\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u042E\u0420\u0422\u0415\u0425 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u0443\u0435\u0442\u0441\u044F \u0432 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u043F\u0440\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u043B\u044E\u0431\u044B\u0445 \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0437\u0430\u0434\u0430\u0447."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, _this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 5
  }, _this);
};

_s(Feedback, "OD7bBpZva5O2jO+Puf00hKivP7c=");

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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvRmVlZGJhY2suanMiXSwibmFtZXMiOlsiRmVlZGJhY2siLCJ1c2VFZmZlY3QiLCJzdEhlaWdodCIsIiQiLCJoZWlnaHQiLCJ0aW1lb3V0IiwiZGVsYXkiLCJyZWZyZXNoU2xpY2tIZWlnaHQiLCJjc3MiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInNldHRpbmdzIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJhdXRvcGxheSIsImluZmluaXRlIiwiYXV0b3BsYXlTcGVlZCIsImFycm93cyIsImRvdHMiLCJjbGFzc05hbWUiLCJicmVha3BvaW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQUE7O0FBQ3JCQyxrREFBUyxDQUFDLFlBQU07QUFDZCxRQUFJQyxRQUFRLEdBQUdDLDZDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCQyxNQUFsQixFQUFmO0FBQUEsUUFDRUMsT0FBTyxHQUFHLEtBRFo7QUFBQSxRQUNtQjtBQUNqQkMsU0FBSyxHQUFHLEdBRlYsQ0FEYyxDQUdDOztBQUVmLGFBQVNDLGtCQUFULEdBQThCO0FBQzVCSixtREFBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQkssR0FBbEIsQ0FBc0IsUUFBdEIsRUFBZ0NOLFFBQVEsR0FBRyxJQUEzQztBQUNELEtBUGEsQ0FTZDs7O0FBQ0FPLFVBQU0sQ0FDSEMsZ0JBREgsQ0FDb0IsUUFEcEIsRUFDOEIsWUFBWTtBQUN0QztBQUNBQyxrQkFBWSxDQUFDTixPQUFELENBQVosQ0FGc0MsQ0FHdEM7O0FBQ0FBLGFBQU8sR0FBR08sVUFBVSxDQUFDTCxrQkFBRCxFQUFxQkQsS0FBckIsQ0FBcEI7QUFDRCxLQU5IO0FBT0QsR0FqQlEsRUFpQk4sRUFqQk0sQ0FBVDtBQWtCQSxNQUFNTyxRQUFRO0FBQ1pDLGdCQUFZLEVBQUUsQ0FERjtBQUVaQyxrQkFBYyxFQUFFLENBRko7QUFHWkMsWUFBUSxFQUFFLElBSEU7QUFJWkMsWUFBUSxFQUFFLElBSkU7QUFLWkMsaUJBQWEsRUFBRSxJQUxIO0FBTVpDLFVBQU0sRUFBRSxLQU5JO0FBT1pDLFFBQUksRUFBRSxLQVBNO0FBUVpDLGFBQVMsRUFBRTtBQVJDLDZJQVNGLElBVEUsZ0pBVUcsSUFWSCw2SUFXQSxDQUNWO0FBQ0VDLGNBQVUsRUFBRSxHQURkO0FBRUVULFlBQVEsRUFBRTtBQUNSQyxrQkFBWSxFQUFFO0FBRE47QUFGWixHQURVLEVBTVA7QUFDRFEsY0FBVSxFQUFFLEdBRFg7QUFFRFQsWUFBUSxFQUFFO0FBQ1JDLGtCQUFZLEVBQUU7QUFETjtBQUZULEdBTk8sRUFXUDtBQUNEUSxjQUFVLEVBQUUsR0FEWDtBQUVEVCxZQUFRLEVBQUU7QUFDUkMsa0JBQVksRUFBRTtBQUROO0FBRlQsR0FYTyxDQVhBLGFBQWQ7QUErQkEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFHRSw4REFBQyxnREFBRCxrQ0FBWUQsUUFBWjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxlQUFmO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRixlQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBV0U7QUFBSyxpQkFBUyxFQUFDLGVBQWY7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVhGLGVBc0JFO0FBQUssaUJBQVMsRUFBQyxlQUFmO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXRCRixlQTRCRTtBQUFLLGlCQUFTLEVBQUMsZUFBZjtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE1QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF5Q0QsQ0EzRkQ7O0dBQU1iLFE7O0tBQUFBLFE7QUE2Rk4sK0RBQWVBLFFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTUwMzlmNTA4ODEzMWYyMGE0YjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcclxuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suY3NzXCI7XHJcbmltcG9ydCBcInNsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLXRoZW1lLmNzc1wiO1xyXG5jb25zdCBGZWVkYmFjayA9ICgpID0+IHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgdmFyIHN0SGVpZ2h0ID0gJCgnLnNsaWNrLXRyYWNrJykuaGVpZ2h0KCksXHJcbiAgICAgIHRpbWVvdXQgPSBmYWxzZSwgLy8gaG9sZGVyIGZvciB0aW1lb3V0IGlkXHJcbiAgICAgIGRlbGF5ID0gMjUwOyAvLyBkZWxheSBhZnRlciBldmVudCBpcyBcImNvbXBsZXRlXCIgdG8gcnVuIGNhbGxiYWNrXHJcblxyXG4gICAgZnVuY3Rpb24gcmVmcmVzaFNsaWNrSGVpZ2h0KCkge1xyXG4gICAgICAkKCcuc2xpY2stc2xpZGUnKS5jc3MoJ2hlaWdodCcsIHN0SGVpZ2h0ICsgJ3B4Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gd2luZG93LnJlc2l6ZSBldmVudCBsaXN0ZW5lclxyXG4gICAgd2luZG93XHJcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gY2xlYXIgdGhlIHRpbWVvdXRcclxuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgICAgICAgLy8gc3RhcnQgdGltaW5nIGZvciBldmVudCBcImNvbXBsZXRpb25cIlxyXG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KHJlZnJlc2hTbGlja0hlaWdodCwgZGVsYXkpO1xyXG4gICAgICB9KTtcclxuICB9LCBbXSlcclxuICBjb25zdCBzZXR0aW5ncyA9IHtcclxuICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIGF1dG9wbGF5U3BlZWQ6IDQ4MDAsXHJcbiAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgZG90czogZmFsc2UsXHJcbiAgICBjbGFzc05hbWU6ICdmZWVkYmFja19ibG9jaycsXHJcbiAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgIGF1dG9wbGF5U3BlZWQ6IDQwMDAsXHJcbiAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiA3NjgsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMVxyXG4gICAgICAgIH1cclxuICAgICAgfSwge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDUyMCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAxXHJcbiAgICAgICAgfVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogMzgwLFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDFcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2ZlZWRiYWNrcyc+XHJcbiAgICAgIDxoMj7QntGC0LfRi9Cy0Ysg0L3QsNGI0LjRhSDQutC70LjQtdC90YLQvtCyPC9oMj5cclxuXHJcbiAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmVlZGJhY2tfdGV4dCc+XHJcbiAgICAgICAgICA8aDM+0JrRg9Cw0YIg0KHQsNC70YLQsNC90LDRglxyXG4gICAgICAgICAgPC9oMz5cclxuICAgICAgICAgIDxzcGFuPkNvbXBhbnluYW1lPC9zcGFuPlxyXG4gICAgICAgICAgPHA+0KXQvtGH0YMg0LLRi9GA0LDQt9C40YLRjCDQsdC70LDQs9C+0LTQsNGA0L3QvtGB0YLRjCDQrtGA0LjRgdGC0LDQvCDQutC+0LzQv9Cw0L3QuNC4INC30LAg0L/RgNC+0YTQtdGB0YHQuNC+0L3QsNC70LjQt9C8LCDQtNC+0YHRgtGD0L/QvdC+0YHRgtGMXHJcbiAgICAgICAgICAgINC4INC+0L/QtdGA0LDRgtC40LLQvdC+0YHRgtGMLiDQoNCw0LHQvtGC0YMg0LLRi9C/0L7Qu9C90LjQu9C4INC60LDRh9C10YHRgtCy0LXQvdC90L4g0LHRi9GB0YLRgNC+LCDQsCDRgdCw0LzQvtC1INCz0LvQsNCy0L3QvtC1INCR0JXQodCf0JvQkNCi0J3Qni5cclxuICAgICAgICAgICAg0KDQtdC60L7QvNC10L3QtNGD0Y4g0Y3RgtGDINC60L7QvNC/0LDQvdC40Y4sINC/0L7QvNC+0LbQtdGCINC4INGB0L7RgdGC0LDQstC40YIg0L/RgNCw0LLQuNC70YzQvdC+INC00L7QutGD0LzQtdC90YLQsNGG0LjRjiwg0L7QsdGK0Y/RgdC90Y/RjtGCXHJcbiAgICAgICAgICAgINCy0YHQtSDQtNC+0YXQvtC00YfQuNCy0L4uXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZlZWRiYWNrX3RleHQnPlxyXG4gICAgICAgICAgPGgzPtCc0LXQu9GM0L3QuNC60L7QsiDQktC70LDQtNC40LzQuNGAXHJcbiAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgey8qIDxzcGFuPtCi0Jo8L3NwYW4+ICovfVxyXG4gICAgICAgICAgPHA+0J7QsdGA0LDRgtC40LvRgdGPINC30LAg0LrQvtC90YHRg9C70YzRgtCw0YbQuNC10Lkg0LIg0LrQvtC80L/QsNC90LjRjiBOYXNoY29tcGFueSwg0LHRi9C7INC+0YjQsNGA0LDRiNC10L0sINGC0LXQvCDQutCw0LpcclxuICAgICAgICAgICAg0L7Qv9C10YDQsNGC0LjQstC90L4g0YDQsNCx0L7RgtCw0Y7Rgiwg0YHQvtGB0YLQsNCy0LjQu9C4INC+0YfQtdC90Ywg0LPRgNCw0LzQvtGC0L3QviDQuNGB0LrQvtCy0L7QtSDQt9Cw0Y/QstC70LXQvdC40LUuINCc0LXQvdGPINC/0L7Qv9GA0L7RgdC40LvQuFxyXG4gICAgICAgICAgICDQv9GA0LjRgdC70LDRgtGMINCy0YHQtSDQuNC80LXRjtGJ0LjQtdGB0Y8g0LTQvtC60YPQvNC10L3RgtGLLCDQt9Cw0LTQsNCy0LDQu9C4INCy0L7Qv9GA0L7RgdGLINC4INGH0ZHRgtC60L4g0L7QsdGK0Y/RgdC90Y/Qu9C4INCy0LXRgdGMXHJcbiAgICAgICAgICAgINC/0YDQvtGG0LXRgdGBLCDQutC+0YLQvtGA0YvQuSDQvNC90LUg0L/RgNC40LTRkdGC0YHRjyDQv9GA0L7QudGC0LguINCe0LHRitGP0YHQvdGP0LvQuCDQsNCx0YHQvtC70Y7RgtC90L4g0LLRgdGRINC00L4g0LzQtdC70YzRh9Cw0LnRiNC40YVcclxuICAgICAgICAgICAg0L/QvtC00YDQvtCx0L3QvtGB0YLQtdC5INCYINC30LAg0Y3RgtC+INGPINC+0YfQtdC90Ywt0L7Rh9C10L3RjCDQsdC70LDQs9C+0LTQsNGA0LXQvS4g0KHQv9GD0YHRgtGPINCy0YDQtdC80Y8g0YHQuNGC0YPQsNGG0LjRjiwg0LrQvtGC0L7RgNCw0Y9cclxuICAgICAgICAgICAg0LTQu9C40LvQsNGB0Ywg0LzQtdGB0Y/Rhiwg0YPQtNCw0LvQvtGB0Ywg0YDQtdGI0LjRgtGMINCyINC80L7RjiDQv9C+0LvRjNC30YMuPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmZWVkYmFja190ZXh0Jz5cclxuICAgICAgICAgIDxoMz7QmtCw0YHRi9C8INCa0LDRgdGL0LzQvtCyPC9oMz5cclxuICAgICAgICAgIDxzcGFuPkNvbXBhbnluYW1lPC9zcGFuPlxyXG4gICAgICAgICAgPHA+wqtOQVNIIENvbXBhbnnCuyDigJMg0LXQtNC40L3RgdGC0LLQtdC90L3QsNGPINCyINCa0LDQt9Cw0YXRgdGC0LDQvdC1INC40L3QvdC+0LLQsNGG0LjQvtC90L3QsNGPINCu0KDQotCV0KUg0LrQvtC80L/QsNC90LjRjyxcclxuICAgICAgICAgICAg0LrQvtGC0L7RgNCw0Y8g0YHQv9C10YbQuNCw0LvQuNC30LjRgNGD0LXRgtGB0Y8g0LIg0L7QsdC70LDRgdGC0Lgg0YDQtdGI0LXQvdC40Y8g0L/RgNCw0LrRgtC40YfQtdGB0LrQuCDQu9GO0LHRi9GFINGO0YDQuNC00LjRh9C10YHQutC40YUg0LfQsNC00LDRhy48L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZlZWRiYWNrX3RleHQnPlxyXG4gICAgICAgICAgPGgzPtCQ0LnQtNCw0L3QsCDQkNC30LDRgjwvaDM+XHJcbiAgICAgICAgICA8c3Bhbj5Db21wYW55bmFtZTwvc3Bhbj5cclxuICAgICAgICAgIDxwPsKrTkFTSCBDb21wYW55wrsg4oCTINC10LTQuNC90YHRgtCy0LXQvdC90LDRjyDQsiDQmtCw0LfQsNGF0YHRgtCw0L3QtSDQuNC90L3QvtCy0LDRhtC40L7QvdC90LDRjyDQrtCg0KLQldClINC60L7QvNC/0LDQvdC40Y8sXHJcbiAgICAgICAgICAgINC60L7RgtC+0YDQsNGPINGB0L/QtdGG0LjQsNC70LjQt9C40YDRg9C10YLRgdGPINCyINC+0LHQu9Cw0YHRgtC4INGA0LXRiNC10L3QuNGPINC/0YDQsNC60YLQuNGH0LXRgdC60Lgg0LvRjtCx0YvRhSDRjtGA0LjQtNC40YfQtdGB0LrQuNGFINC30LDQtNCw0YcuPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1NsaWRlcj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmVlZGJhY2siXSwic291cmNlUm9vdCI6IiJ9