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
    dispatch({
      type: 'LOGOUT_USER'
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYWJpbmV0L0NhYmluZXROYXYuanMiXSwibmFtZXMiOlsiQ2FiaW5ldE5hdiIsInJvdXRlciIsInVzZVJvdXRlciIsInBhdGhuYW1lIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIm9uTG9nb3V0IiwidHlwZSIsImNvb2tpZSIsInNldFRpbWVvdXQiLCJSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFBQTs7QUFDdkIsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUNBLE1BQU1DLFFBQVEsR0FBR0YsTUFBTSxDQUFDRSxRQUF4QjtBQUNBLE1BQU1DLFFBQVEsR0FBR0Msd0RBQVcsRUFBNUI7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQkYsWUFBUSxDQUFDO0FBQUNHLFVBQUksRUFBRTtBQUFQLEtBQUQsQ0FBUjtBQUNBQywyREFBQSxDQUFjLE9BQWQ7QUFDQUMsY0FBVSxDQUFDLFlBQU07QUFDZkMsNkRBQUEsQ0FBWSxRQUFaO0FBQ0QsS0FGUyxFQUVQLEdBRk8sQ0FBVjtBQUdELEdBTkQ7O0FBT0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLFNBQWY7QUFBQSw4QkFDRTtBQUFHLFlBQUksRUFBQyxVQUFSO0FBQW1CLGlCQUFTLEVBQUVQLFFBQVEsS0FBSyxVQUFiLElBQTJCLFFBQXpEO0FBQUEsZ0NBQ0U7QUFBRyxtQkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUlFO0FBQ0UsWUFBSSxFQUFDLG1CQURQO0FBRUUsaUJBQVMsRUFBRUEsUUFBUSxLQUFLLG1CQUFiLEdBQ1Qsb0JBRFMsR0FFVCxhQUpKO0FBQUEsZ0NBS0U7QUFBSyxtQkFBUyxFQUFDLGVBQWY7QUFBQSxpQ0FDRTtBQUFLLHFCQUFTLEVBQUVBLFFBQVEsS0FBSyxrQkFBYixHQUFrQyxVQUFsQyxHQUErQyxnQkFBL0Q7QUFBQSxvQ0FDRTtBQUFLLHVCQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUU7QUFBSyx1QkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGLGVBV0U7QUFBRyxtQkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRixlQWdCRTtBQUFHLFlBQUksRUFBQyxHQUFSO0FBQUEsZ0NBQ0U7QUFBRyxtQkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFoQkYsZUFvQkU7QUFBRyxlQUFPLEVBQUU7QUFBQSxpQkFBTUcsUUFBUSxFQUFkO0FBQUEsU0FBWjtBQUFBLGdDQUNFO0FBQUcsbUJBQVMsRUFBQyxpQkFBYjtBQUErQix5QkFBWTtBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQTBCRTtBQUFLLGVBQVMsRUFBQyxRQUFmO0FBQUEsOEJBQ0U7QUFBRyxZQUFJLEVBQUMsVUFBUjtBQUFvQixpQkFBUyxFQUFFSCxRQUFRLEtBQUssVUFBYixJQUEyQixRQUExRDtBQUFBLGdDQUNFO0FBQUcsbUJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFJRTtBQUNFLFlBQUksRUFBQyxtQkFEUDtBQUVFLGlCQUFTLEVBQUVBLFFBQVEsS0FBSyxtQkFBYixHQUNULG9CQURTLEdBRVQsYUFKSjtBQUFBLGdDQUtFO0FBQUssbUJBQVMsRUFBQyxlQUFmO0FBQUEsaUNBQ0U7QUFBSyxxQkFBUyxFQUFFQSxRQUFRLEtBQUssa0JBQWIsR0FBa0MsZ0JBQWxDLEdBQXFELFNBQXJFO0FBQUEsb0NBQ0U7QUFBSyx1QkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQUssdUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRixlQVdFO0FBQUcsbUJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkYsZUFnQkU7QUFBRyxZQUFJLEVBQUMsR0FBUjtBQUFBLGdDQUNFO0FBQUcsbUJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBaEJGLGVBb0JFO0FBQUcsZUFBTyxFQUFFO0FBQUEsaUJBQU1HLFFBQVEsRUFBZDtBQUFBLFNBQVo7QUFBQSxnQ0FDRTtBQUFHLG1CQUFTLEVBQUMsaUJBQWI7QUFBK0IseUJBQVk7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBMUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBcURELENBaEVEOztHQUFNTixVO1VBQ1dFLGtELEVBRUVHLG9EOzs7S0FIYkwsVTtBQWlFTiwrREFBZUEsVUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYWJpbmV0L3JlcXVlc3RzLjQ5MmUyOTY0MzBhMTE0MzUyYzNiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7dXNlRGlzcGF0Y2h9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSdcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuY29uc3QgQ2FiaW5ldE5hdiA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHBhdGhuYW1lID0gcm91dGVyLnBhdGhuYW1lO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gIGNvbnN0IG9uTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe3R5cGU6ICdMT0dPVVRfVVNFUid9KVxyXG4gICAgY29va2llLnJlbW92ZSgndG9rZW4nKVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKVxyXG4gICAgfSwgMzAwKVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2NhYmluZXRuYXYnPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZGVzY25hdic+XHJcbiAgICAgICAgPGEgaHJlZj0nL2NhYmluZXQnIGNsYXNzTmFtZT17cGF0aG5hbWUgPT09ICcvY2FiaW5ldCcgJiYgJ2FjdGl2ZSd9PlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYSBmYS11c2VyIGFjdGl2ZSc+PC9pPtCf0YDQvtGE0LjQu9GMPC9hPlxyXG5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgaHJlZj0nL2NhYmluZXQvcmVxdWVzdHMnXHJcbiAgICAgICAgICBjbGFzc05hbWU9e3BhdGhuYW1lID09PSAnL2NhYmluZXQvcmVxdWVzdHMnXHJcbiAgICAgICAgICA/ICdhY3RpdmUgcHVsc2VkX2xpbmsnXHJcbiAgICAgICAgICA6ICdwdWxzZWRfbGluayd9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3B1bHNpbmdfYmxvY2snPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cGF0aG5hbWUgPT09ICcvY2FiaW5ldC9yZXF1ZXN0JyA/ICdwdWxzaW5nICcgOiAncHVsc2luZyBkLW5vbmUnfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpbmdyaW5nXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGVcIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWZpbGUtdGV4dC1vXCI+PC9pPtCc0L7QuCDQt9Cw0Y/QstC60Lg8L2E+XHJcbiAgICAgICAgPGEgaHJlZj0nIyc+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1wbHVzLXNxdWFyZVwiPjwvaT7QndC+0LLQsNGPINC30LDRj9Cy0LrQsDwvYT5cclxuICAgICAgICB7LyogPGEgaHJlZj0nIyc+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jb2dcIj48L2k+0J3QsNGB0YLRgNC+0LnQutCwPC9hPiAqL31cclxuICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiBvbkxvZ291dCgpfT5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXBvd2VyLW9mZlwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgINCS0YvQudGC0Lg8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J21vYm5hdic+XHJcbiAgICAgICAgPGEgaHJlZj0nL2NhYmluZXQnICBjbGFzc05hbWU9e3BhdGhuYW1lID09PSAnL2NhYmluZXQnICYmICdhY3RpdmUnfT5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtdXNlciBhY3RpdmUnPjwvaT7Qn9GA0L7RhNC40LvRjDwvYT5cclxuXHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGhyZWY9Jy9jYWJpbmV0L3JlcXVlc3RzJ1xyXG4gICAgICAgICAgY2xhc3NOYW1lPXtwYXRobmFtZSA9PT0gJy9jYWJpbmV0L3JlcXVlc3RzJ1xyXG4gICAgICAgICAgPyAnYWN0aXZlIHB1bHNlZF9saW5rJ1xyXG4gICAgICAgICAgOiAncHVsc2VkX2xpbmsnfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwdWxzaW5nX2Jsb2NrJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3BhdGhuYW1lID09PSAnL2NhYmluZXQvcmVxdWVzdCcgPyAncHVsc2luZyBkLW5vbmUnIDogJ3B1bHNpbmcnfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpbmdyaW5nXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGVcIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWZpbGUtdGV4dC1vXCI+PC9pPtCc0L7QuCDQt9Cw0Y/QstC60Lg8L2E+XHJcbiAgICAgICAgPGEgaHJlZj0nIyc+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1wbHVzLXNxdWFyZVwiPjwvaT7QndC+0LLQsNGPINC30LDRj9Cy0LrQsDwvYT5cclxuICAgICAgICB7LyogPGEgaHJlZj0nIyc+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jb2dcIj48L2k+0J3QsNGB0YLRgNC+0LnQutCwPC9hPiAqL31cclxuICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiBvbkxvZ291dCgpfT5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXBvd2VyLW9mZlwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgINCS0YvQudGC0Lg8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IENhYmluZXROYXYiXSwic291cmNlUm9vdCI6IiJ9