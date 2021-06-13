self["webpackHotUpdate_N_E"]("pages/cabinet/requests",{

/***/ "./components/cabinet/CabinetNav.js":
/*!******************************************!*\
  !*** ./components/cabinet/CabinetNav.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\job\\nashcompany\\components\\cabinet\\CabinetNav.js",
    _this = undefined,
    _s = $RefreshSig$();






var CabinetNav = function CabinetNav() {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  var pathname = router.pathname;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();

  var onLogout = function onLogout() {
    // dispatch({type: 'LOGOUT_USER'})
    js_cookie__WEBPACK_IMPORTED_MODULE_3___default().remove('token');
    setTimeout(function () {
      next_router__WEBPACK_IMPORTED_MODULE_1___default().push('/login');
    }, 300);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "cabinetnav",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "descnav",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "/cabinet",
        className: pathname === '/cabinet' && 'active',
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          className: "fa fa-user active"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, _this), "\u041F\u0440\u043E\u0444\u0438\u043B\u044C"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "/cabinet/requests",
        className: pathname === '/cabinet/requests' ? 'active pulsed_link' : 'pulsed_link',
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "pulsing_block",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: pathname === '/cabinet/request' ? 'pulsing ' : 'pulsing d-none',
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "ringring"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "circle"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          className: "fa fa-file-text-o"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, _this), "\u041C\u043E\u0438 \u0437\u0430\u044F\u0432\u043A\u0438"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "#",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          className: "fa fa-plus-square"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, _this), "\u041D\u043E\u0432\u0430\u044F \u0437\u0430\u044F\u0432\u043A\u0430"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        onClick: function onClick() {
          return onLogout();
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          className: "fa fa-power-off",
          "aria-hidden": "true"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, _this), "\u0412\u044B\u0439\u0442\u0438"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "mobnav",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "/cabinet",
        className: pathname === '/cabinet' && 'active',
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          className: "fa fa-user active"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, _this), "\u041F\u0440\u043E\u0444\u0438\u043B\u044C"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "/cabinet/requests",
        className: pathname === '/cabinet/requests' ? 'active pulsed_link' : 'pulsed_link',
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "pulsing_block",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: pathname === '/cabinet/request' ? 'pulsing d-none' : 'pulsing',
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "ringring"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "circle"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          className: "fa fa-file-text-o"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, _this), "\u041C\u043E\u0438 \u0437\u0430\u044F\u0432\u043A\u0438"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "#",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          className: "fa fa-plus-square"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, _this), "\u041D\u043E\u0432\u0430\u044F \u0437\u0430\u044F\u0432\u043A\u0430"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        onClick: function onClick() {
          return onLogout();
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          className: "fa fa-power-off",
          "aria-hidden": "true"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, _this), "\u0412\u044B\u0439\u0442\u0438"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, _this);
};

_s(CabinetNav, "zXnflAqd4rnyBpogtdAc6I4Vk2A=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter, react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch];
});

_c = CabinetNav;
/* harmony default export */ __webpack_exports__["default"] = (CabinetNav);

var _c;

$RefreshReg$(_c, "CabinetNav");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYWJpbmV0L0NhYmluZXROYXYuanMiXSwibmFtZXMiOlsiQ2FiaW5ldE5hdiIsInJvdXRlciIsInVzZVJvdXRlciIsInBhdGhuYW1lIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIm9uTG9nb3V0IiwiY29va2llIiwic2V0VGltZW91dCIsIlJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUFBOztBQUN2QixNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHRixNQUFNLENBQUNFLFFBQXhCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHQyx3REFBVyxFQUE1Qjs7QUFDQSxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ3JCO0FBQ0FDLDJEQUFBLENBQWMsT0FBZDtBQUNBQyxjQUFVLENBQUMsWUFBTTtBQUNmQyw2REFBQSxDQUFZLFFBQVo7QUFDRCxLQUZTLEVBRVAsR0FGTyxDQUFWO0FBR0QsR0FORDs7QUFPQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUMsU0FBZjtBQUFBLDhCQUNFO0FBQUcsWUFBSSxFQUFDLFVBQVI7QUFBbUIsaUJBQVMsRUFBRU4sUUFBUSxLQUFLLFVBQWIsSUFBMkIsUUFBekQ7QUFBQSxnQ0FDRTtBQUFHLG1CQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBSUU7QUFDRSxZQUFJLEVBQUMsbUJBRFA7QUFFRSxpQkFBUyxFQUFFQSxRQUFRLEtBQUssbUJBQWIsR0FDVCxvQkFEUyxHQUVULGFBSko7QUFBQSxnQ0FLRTtBQUFLLG1CQUFTLEVBQUMsZUFBZjtBQUFBLGlDQUNFO0FBQUsscUJBQVMsRUFBRUEsUUFBUSxLQUFLLGtCQUFiLEdBQWtDLFVBQWxDLEdBQStDLGdCQUEvRDtBQUFBLG9DQUNFO0FBQUssdUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFLLHVCQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEYsZUFXRTtBQUFHLG1CQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGLGVBZ0JFO0FBQUcsWUFBSSxFQUFDLEdBQVI7QUFBQSxnQ0FDRTtBQUFHLG1CQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWhCRixlQW9CRTtBQUFHLGVBQU8sRUFBRTtBQUFBLGlCQUFNRyxRQUFRLEVBQWQ7QUFBQSxTQUFaO0FBQUEsZ0NBQ0U7QUFBRyxtQkFBUyxFQUFDLGlCQUFiO0FBQStCLHlCQUFZO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBMEJFO0FBQUssZUFBUyxFQUFDLFFBQWY7QUFBQSw4QkFDRTtBQUFHLFlBQUksRUFBQyxVQUFSO0FBQW9CLGlCQUFTLEVBQUVILFFBQVEsS0FBSyxVQUFiLElBQTJCLFFBQTFEO0FBQUEsZ0NBQ0U7QUFBRyxtQkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUlFO0FBQ0UsWUFBSSxFQUFDLG1CQURQO0FBRUUsaUJBQVMsRUFBRUEsUUFBUSxLQUFLLG1CQUFiLEdBQ1Qsb0JBRFMsR0FFVCxhQUpKO0FBQUEsZ0NBS0U7QUFBSyxtQkFBUyxFQUFDLGVBQWY7QUFBQSxpQ0FDRTtBQUFLLHFCQUFTLEVBQUVBLFFBQVEsS0FBSyxrQkFBYixHQUFrQyxnQkFBbEMsR0FBcUQsU0FBckU7QUFBQSxvQ0FDRTtBQUFLLHVCQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUU7QUFBSyx1QkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGLGVBV0U7QUFBRyxtQkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRixlQWdCRTtBQUFHLFlBQUksRUFBQyxHQUFSO0FBQUEsZ0NBQ0U7QUFBRyxtQkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFoQkYsZUFvQkU7QUFBRyxlQUFPLEVBQUU7QUFBQSxpQkFBTUcsUUFBUSxFQUFkO0FBQUEsU0FBWjtBQUFBLGdDQUNFO0FBQUcsbUJBQVMsRUFBQyxpQkFBYjtBQUErQix5QkFBWTtBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUExQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFxREQsQ0FoRUQ7O0dBQU1OLFU7VUFDV0Usa0QsRUFFRUcsb0Q7OztLQUhiTCxVO0FBaUVOLCtEQUFlQSxVQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhYmluZXQvcmVxdWVzdHMuNzU2NjA2M2NjY2M5ODkyZTE5NDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHt1c2VEaXNwYXRjaH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJ1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5jb25zdCBDYWJpbmV0TmF2ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgcGF0aG5hbWUgPSByb3V0ZXIucGF0aG5hbWU7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgY29uc3Qgb25Mb2dvdXQgPSAoKSA9PiB7XHJcbiAgICAvLyBkaXNwYXRjaCh7dHlwZTogJ0xPR09VVF9VU0VSJ30pXHJcbiAgICBjb29raWUucmVtb3ZlKCd0b2tlbicpXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgUm91dGVyLnB1c2goJy9sb2dpbicpXHJcbiAgICB9LCAzMDApXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY2FiaW5ldG5hdic+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdkZXNjbmF2Jz5cclxuICAgICAgICA8YSBocmVmPScvY2FiaW5ldCcgY2xhc3NOYW1lPXtwYXRobmFtZSA9PT0gJy9jYWJpbmV0JyAmJiAnYWN0aXZlJ30+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLXVzZXIgYWN0aXZlJz48L2k+0J/RgNC+0YTQuNC70Yw8L2E+XHJcblxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBocmVmPScvY2FiaW5ldC9yZXF1ZXN0cydcclxuICAgICAgICAgIGNsYXNzTmFtZT17cGF0aG5hbWUgPT09ICcvY2FiaW5ldC9yZXF1ZXN0cydcclxuICAgICAgICAgID8gJ2FjdGl2ZSBwdWxzZWRfbGluaydcclxuICAgICAgICAgIDogJ3B1bHNlZF9saW5rJ30+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHVsc2luZ19ibG9jayc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwYXRobmFtZSA9PT0gJy9jYWJpbmV0L3JlcXVlc3QnID8gJ3B1bHNpbmcgJyA6ICdwdWxzaW5nIGQtbm9uZSd9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmluZ3JpbmdcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZmlsZS10ZXh0LW9cIj48L2k+0JzQvtC4INC30LDRj9Cy0LrQuDwvYT5cclxuICAgICAgICA8YSBocmVmPScjJz5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXBsdXMtc3F1YXJlXCI+PC9pPtCd0L7QstCw0Y8g0LfQsNGP0LLQutCwPC9hPlxyXG4gICAgICAgIHsvKiA8YSBocmVmPScjJz5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNvZ1wiPjwvaT7QndCw0YHRgtGA0L7QudC60LA8L2E+ICovfVxyXG4gICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IG9uTG9nb3V0KCl9PlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtcG93ZXItb2ZmXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAg0JLRi9C50YLQuDwvYT5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9ibmF2Jz5cclxuICAgICAgICA8YSBocmVmPScvY2FiaW5ldCcgIGNsYXNzTmFtZT17cGF0aG5hbWUgPT09ICcvY2FiaW5ldCcgJiYgJ2FjdGl2ZSd9PlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS11c2VyIGFjdGl2ZSc+PC9pPtCf0YDQvtGE0LjQu9GMPC9hPlxyXG5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgaHJlZj0nL2NhYmluZXQvcmVxdWVzdHMnXHJcbiAgICAgICAgICBjbGFzc05hbWU9e3BhdGhuYW1lID09PSAnL2NhYmluZXQvcmVxdWVzdHMnXHJcbiAgICAgICAgICA/ICdhY3RpdmUgcHVsc2VkX2xpbmsnXHJcbiAgICAgICAgICA6ICdwdWxzZWRfbGluayd9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3B1bHNpbmdfYmxvY2snPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cGF0aG5hbWUgPT09ICcvY2FiaW5ldC9yZXF1ZXN0JyA/ICdwdWxzaW5nIGQtbm9uZScgOiAncHVsc2luZyd9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmluZ3JpbmdcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZmlsZS10ZXh0LW9cIj48L2k+0JzQvtC4INC30LDRj9Cy0LrQuDwvYT5cclxuICAgICAgICA8YSBocmVmPScjJz5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXBsdXMtc3F1YXJlXCI+PC9pPtCd0L7QstCw0Y8g0LfQsNGP0LLQutCwPC9hPlxyXG4gICAgICAgIHsvKiA8YSBocmVmPScjJz5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNvZ1wiPjwvaT7QndCw0YHRgtGA0L7QudC60LA8L2E+ICovfVxyXG4gICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IG9uTG9nb3V0KCl9PlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtcG93ZXItb2ZmXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAg0JLRi9C50YLQuDwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ2FiaW5ldE5hdiJdLCJzb3VyY2VSb290IjoiIn0=