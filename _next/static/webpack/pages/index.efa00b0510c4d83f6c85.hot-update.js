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
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "feedback_text",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: "\u0418\u0432\u0430\u043D \u0418\u0432\u0430\u043D\u043E\u0432"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: "Companyname"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "\xABNASH Company\xBB \u2013 \u0435\u0434\u0438\u043D\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u0432 \u041A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D\u0435 \u0438\u043D\u043D\u043E\u0432\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u042E\u0420\u0422\u0415\u0425 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u0443\u0435\u0442\u0441\u044F \u0432 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u043F\u0440\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u043B\u044E\u0431\u044B\u0445 \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0437\u0430\u0434\u0430\u0447."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, _this)
    }), void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvRmVlZGJhY2suanMiXSwibmFtZXMiOlsiRmVlZGJhY2siLCJ1c2VFZmZlY3QiLCJzdEhlaWdodCIsIiQiLCJoZWlnaHQiLCJ0aW1lb3V0IiwiZGVsYXkiLCJyZWZyZXNoU2xpY2tIZWlnaHQiLCJjc3MiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInNldHRpbmdzIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJhdXRvcGxheSIsImluZmluaXRlIiwiYXV0b3BsYXlTcGVlZCIsImFycm93cyIsImRvdHMiLCJjbGFzc05hbWUiLCJicmVha3BvaW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQUE7O0FBQ3JCQyxrREFBUyxDQUFDLFlBQU07QUFDZCxRQUFJQyxRQUFRLEdBQUdDLDZDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCQyxNQUFsQixFQUFmO0FBQUEsUUFDRUMsT0FBTyxHQUFHLEtBRFo7QUFBQSxRQUNtQjtBQUNqQkMsU0FBSyxHQUFHLEdBRlYsQ0FEYyxDQUdDOztBQUVmLGFBQVNDLGtCQUFULEdBQThCO0FBQzVCSixtREFBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQkssR0FBbEIsQ0FBc0IsUUFBdEIsRUFBZ0NOLFFBQVEsR0FBRyxJQUEzQztBQUNELEtBUGEsQ0FTZDs7O0FBQ0FPLFVBQU0sQ0FDSEMsZ0JBREgsQ0FDb0IsUUFEcEIsRUFDOEIsWUFBWTtBQUN0QztBQUNBQyxrQkFBWSxDQUFDTixPQUFELENBQVosQ0FGc0MsQ0FHdEM7O0FBQ0FBLGFBQU8sR0FBR08sVUFBVSxDQUFDTCxrQkFBRCxFQUFxQkQsS0FBckIsQ0FBcEI7QUFDRCxLQU5IO0FBT0QsR0FqQlEsRUFpQk4sRUFqQk0sQ0FBVDtBQWtCQSxNQUFNTyxRQUFRO0FBQ1pDLGdCQUFZLEVBQUUsQ0FERjtBQUVaQyxrQkFBYyxFQUFFLENBRko7QUFHWkMsWUFBUSxFQUFFLElBSEU7QUFJWkMsWUFBUSxFQUFFLElBSkU7QUFLWkMsaUJBQWEsRUFBRSxJQUxIO0FBTVpDLFVBQU0sRUFBRSxLQU5JO0FBT1pDLFFBQUksRUFBRSxLQVBNO0FBUVpDLGFBQVMsRUFBRTtBQVJDLDZJQVNGLElBVEUsZ0pBVUcsSUFWSCw2SUFXQSxDQUNWO0FBQ0VDLGNBQVUsRUFBRSxHQURkO0FBRUVULFlBQVEsRUFBRTtBQUNSQyxrQkFBWSxFQUFFO0FBRE47QUFGWixHQURVLEVBTVA7QUFDRFEsY0FBVSxFQUFFLEdBRFg7QUFFRFQsWUFBUSxFQUFFO0FBQ1JDLGtCQUFZLEVBQUU7QUFETjtBQUZULEdBTk8sRUFXUDtBQUNEUSxjQUFVLEVBQUUsR0FEWDtBQUVEVCxZQUFRLEVBQUU7QUFDUkMsa0JBQVksRUFBRTtBQUROO0FBRlQsR0FYTyxDQVhBLGFBQWQ7QUErQkEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFHRSw4REFBQyxnREFBRCxrQ0FBWUQsUUFBWjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxlQUFmO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWdDRCxDQWxGRDs7R0FBTWIsUTs7S0FBQUEsUTtBQW9GTiwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lZmEwMGIwNTEwYzRkODNmNmM4NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xyXG5pbXBvcnQgXCJzbGljay1jYXJvdXNlbC9zbGljay9zbGljay5jc3NcIjtcclxuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2stdGhlbWUuY3NzXCI7XHJcbmNvbnN0IEZlZWRiYWNrID0gKCkgPT4ge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB2YXIgc3RIZWlnaHQgPSAkKCcuc2xpY2stdHJhY2snKS5oZWlnaHQoKSxcclxuICAgICAgdGltZW91dCA9IGZhbHNlLCAvLyBob2xkZXIgZm9yIHRpbWVvdXQgaWRcclxuICAgICAgZGVsYXkgPSAyNTA7IC8vIGRlbGF5IGFmdGVyIGV2ZW50IGlzIFwiY29tcGxldGVcIiB0byBydW4gY2FsbGJhY2tcclxuXHJcbiAgICBmdW5jdGlvbiByZWZyZXNoU2xpY2tIZWlnaHQoKSB7XHJcbiAgICAgICQoJy5zbGljay1zbGlkZScpLmNzcygnaGVpZ2h0Jywgc3RIZWlnaHQgKyAncHgnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB3aW5kb3cucmVzaXplIGV2ZW50IGxpc3RlbmVyXHJcbiAgICB3aW5kb3dcclxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBjbGVhciB0aGUgdGltZW91dFxyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuICAgICAgICAvLyBzdGFydCB0aW1pbmcgZm9yIGV2ZW50IFwiY29tcGxldGlvblwiXHJcbiAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQocmVmcmVzaFNsaWNrSGVpZ2h0LCBkZWxheSk7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKVxyXG4gIGNvbnN0IHNldHRpbmdzID0ge1xyXG4gICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgYXV0b3BsYXlTcGVlZDogNDgwMCxcclxuICAgIGFycm93czogZmFsc2UsXHJcbiAgICBkb3RzOiBmYWxzZSxcclxuICAgIGNsYXNzTmFtZTogJ2ZlZWRiYWNrX2Jsb2NrJyxcclxuICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgYXV0b3BsYXlTcGVlZDogNDAwMCxcclxuICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAxXHJcbiAgICAgICAgfVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogNTIwLFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDFcclxuICAgICAgICB9XHJcbiAgICAgIH0sIHtcclxuICAgICAgICBicmVha3BvaW50OiAzODAsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZmVlZGJhY2tzJz5cclxuICAgICAgPGgyPtCe0YLQt9GL0LLRiyDQvdCw0YjQuNGFINC60LvQuNC10L3RgtC+0LI8L2gyPlxyXG5cclxuICAgICAgPFNsaWRlciB7Li4uc2V0dGluZ3N9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmZWVkYmFja190ZXh0Jz5cclxuICAgICAgICAgIDxoMz7QmNCy0LDQvSDQmNCy0LDQvdC+0LI8L2gzPlxyXG4gICAgICAgICAgPHNwYW4+Q29tcGFueW5hbWU8L3NwYW4+XHJcbiAgICAgICAgICA8cD7Cq05BU0ggQ29tcGFuecK7IOKAkyDQtdC00LjQvdGB0YLQstC10L3QvdCw0Y8g0LIg0JrQsNC30LDRhdGB0YLQsNC90LUg0LjQvdC90L7QstCw0YbQuNC+0L3QvdCw0Y8g0K7QoNCi0JXQpSDQutC+0LzQv9Cw0L3QuNGPLFxyXG4gICAgICAgICAgICDQutC+0YLQvtGA0LDRjyDRgdC/0LXRhtC40LDQu9C40LfQuNGA0YPQtdGC0YHRjyDQsiDQvtCx0LvQsNGB0YLQuCDRgNC10YjQtdC90LjRjyDQv9GA0LDQutGC0LjRh9C10YHQutC4INC70Y7QsdGL0YUg0Y7RgNC40LTQuNGH0LXRgdC60LjRhSDQt9Cw0LTQsNGHLjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9J2ZlZWRiYWNrX3RleHQnPlxyXG4gICAgICAgICAgPGgzPtCY0LLQsNC9INCY0LLQsNC90L7QsjwvaDM+XHJcbiAgICAgICAgICA8c3Bhbj5Db21wYW55bmFtZTwvc3Bhbj5cclxuICAgICAgICAgIDxwPsKrTkFTSCBDb21wYW55wrsg4oCTINC10LTQuNC90YHRgtCy0LXQvdC90LDRjyDQsiDQmtCw0LfQsNGF0YHRgtCw0L3QtSDQuNC90L3QvtCy0LDRhtC40L7QvdC90LDRjyDQrtCg0KLQldClINC60L7QvNC/0LDQvdC40Y8sXHJcbiAgICAgICAgICAgINC60L7RgtC+0YDQsNGPINGB0L/QtdGG0LjQsNC70LjQt9C40YDRg9C10YLRgdGPINCyINC+0LHQu9Cw0YHRgtC4INGA0LXRiNC10L3QuNGPINC/0YDQsNC60YLQuNGH0LXRgdC60Lgg0LvRjtCx0YvRhSDRjtGA0LjQtNC40YfQtdGB0LrQuNGFINC30LDQtNCw0YcuPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmZWVkYmFja190ZXh0Jz5cclxuICAgICAgICAgIDxoMz7QmNCy0LDQvSDQmNCy0LDQvdC+0LI8L2gzPlxyXG4gICAgICAgICAgPHNwYW4+Q29tcGFueW5hbWU8L3NwYW4+XHJcbiAgICAgICAgICA8cD7Cq05BU0ggQ29tcGFuecK7IOKAkyDQtdC00LjQvdGB0YLQstC10L3QvdCw0Y8g0LIg0JrQsNC30LDRhdGB0YLQsNC90LUg0LjQvdC90L7QstCw0YbQuNC+0L3QvdCw0Y8g0K7QoNCi0JXQpSDQutC+0LzQv9Cw0L3QuNGPLFxyXG4gICAgICAgICAgICDQutC+0YLQvtGA0LDRjyDRgdC/0LXRhtC40LDQu9C40LfQuNGA0YPQtdGC0YHRjyDQsiDQvtCx0LvQsNGB0YLQuCDRgNC10YjQtdC90LjRjyDQv9GA0LDQutGC0LjRh9C10YHQutC4INC70Y7QsdGL0YUg0Y7RgNC40LTQuNGH0LXRgdC60LjRhSDQt9Cw0LTQsNGHLjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmVlZGJhY2tfdGV4dCc+XHJcbiAgICAgICAgICA8aDM+0JjQstCw0L0g0JjQstCw0L3QvtCyPC9oMz5cclxuICAgICAgICAgIDxzcGFuPkNvbXBhbnluYW1lPC9zcGFuPlxyXG4gICAgICAgICAgPHA+wqtOQVNIIENvbXBhbnnCuyDigJMg0LXQtNC40L3RgdGC0LLQtdC90L3QsNGPINCyINCa0LDQt9Cw0YXRgdGC0LDQvdC1INC40L3QvdC+0LLQsNGG0LjQvtC90L3QsNGPINCu0KDQotCV0KUg0LrQvtC80L/QsNC90LjRjyxcclxuICAgICAgICAgICAg0LrQvtGC0L7RgNCw0Y8g0YHQv9C10YbQuNCw0LvQuNC30LjRgNGD0LXRgtGB0Y8g0LIg0L7QsdC70LDRgdGC0Lgg0YDQtdGI0LXQvdC40Y8g0L/RgNCw0LrRgtC40YfQtdGB0LrQuCDQu9GO0LHRi9GFINGO0YDQuNC00LjRh9C10YHQutC40YUg0LfQsNC00LDRhy48L3A+XHJcbiAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICA8L1NsaWRlcj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmVlZGJhY2siXSwic291cmNlUm9vdCI6IiJ9