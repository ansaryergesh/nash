self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/shared/ServiceList.js":
/*!******************************************!*\
  !*** ./components/shared/ServiceList.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\job\\nashcompany\\components\\shared\\ServiceList.js",
    _this = undefined,
    _s = $RefreshSig$();



var ServiceList = function ServiceList(_ref) {
  _s();

  var list = _ref.list,
      type = _ref.type,
      setModal = _ref.setModal,
      setId = _ref.setId;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();

  var onServiceClick = function onServiceClick(index) {
    setModal(true);
    setId(index + 1);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "services--lists",
    children: list.map(function (f, index) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        onClick: function onClick() {
          return onServiceClick();
        },
        "data-id": index + 1,
        className: "services--list",
        children: [!type || type === 'fiz' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          className: "service_icon",
          src: "/img/uslugi/".concat(index + 1, ".svg")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 44
        }, _this), type === 'jur' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          className: "service_icon",
          src: "/img/uslugi/yur".concat(index + 1, ".svg")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 35
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: f.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 15
        }, _this), router.pathname === '/' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          className: "path",
          src: "/img/uslugi/line.svg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 41
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 13
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, _this);
};

_s(ServiceList, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];
});

_c = ServiceList;
/* harmony default export */ __webpack_exports__["default"] = (ServiceList);

var _c;

$RefreshReg$(_c, "ServiceList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvU2VydmljZUxpc3QuanMiXSwibmFtZXMiOlsiU2VydmljZUxpc3QiLCJsaXN0IiwidHlwZSIsInNldE1vZGFsIiwic2V0SWQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJvblNlcnZpY2VDbGljayIsImluZGV4IiwibWFwIiwiZiIsIm5hbWUiLCJwYXRobmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0EsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBbUM7QUFBQTs7QUFBQSxNQUFqQ0MsSUFBaUMsUUFBakNBLElBQWlDO0FBQUEsTUFBM0JDLElBQTJCLFFBQTNCQSxJQUEyQjtBQUFBLE1BQXJCQyxRQUFxQixRQUFyQkEsUUFBcUI7QUFBQSxNQUFYQyxLQUFXLFFBQVhBLEtBQVc7QUFDbkQsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4Qjs7QUFDQSxNQUFNQyxjQUFjLEdBQUUsU0FBaEJBLGNBQWdCLENBQUNDLEtBQUQsRUFBVztBQUM3QkwsWUFBUSxDQUFDLElBQUQsQ0FBUjtBQUNBQyxTQUFLLENBQUNJLEtBQUssR0FBQyxDQUFQLENBQUw7QUFDSCxHQUhEOztBQUlBLHNCQUNJO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQUEsY0FDR1AsSUFBSSxDQUFDUSxHQUFMLENBQVMsVUFBQ0MsQ0FBRCxFQUFHRixLQUFIO0FBQUEsMEJBQ1I7QUFBSyxlQUFPLEVBQUU7QUFBQSxpQkFBTUQsY0FBYyxFQUFwQjtBQUFBLFNBQWQ7QUFBc0MsbUJBQVNDLEtBQUssR0FBQyxDQUFyRDtBQUF3RCxpQkFBUyxFQUFDLGdCQUFsRTtBQUFBLG1CQUVHLENBQUNOLElBQUQsSUFBU0EsSUFBSSxLQUFLLEtBQVQsaUJBQW1CO0FBQUssbUJBQVMsRUFBQyxjQUFmO0FBQThCLGFBQUcsd0JBQWlCTSxLQUFLLEdBQUMsQ0FBdkI7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGL0IsRUFHR04sSUFBSSxLQUFLLEtBQVQsaUJBQW1CO0FBQUssbUJBQVMsRUFBQyxjQUFmO0FBQThCLGFBQUcsMkJBQW9CTSxLQUFLLEdBQUMsQ0FBMUI7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIdEIsZUFJRTtBQUFBLG9CQUFPRSxDQUFDLENBQUNDO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRixFQUtHTixNQUFNLENBQUNPLFFBQVAsS0FBa0IsR0FBbEIsaUJBQXlCO0FBQUssbUJBQVMsRUFBQyxNQUFmO0FBQXNCLGFBQUcsRUFBQztBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUw1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEUTtBQUFBLEtBQVQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFhSCxDQW5CRDs7R0FBTVosVztVQUNhTSxrRDs7O0tBRGJOLFc7QUFvQk4sK0RBQWVBLFdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGZiMmQzMGQ0YzNmYTQ4NjI0OTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuY29uc3QgU2VydmljZUxpc3QgPSAoe2xpc3QsIHR5cGUsIHNldE1vZGFsLCBzZXRJZH0pID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCBvblNlcnZpY2VDbGljayA9KGluZGV4KSA9PiB7XHJcbiAgICAgICAgc2V0TW9kYWwodHJ1ZSlcclxuICAgICAgICBzZXRJZChpbmRleCsxKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZXJ2aWNlcy0tbGlzdHMnPlxyXG4gICAgICAgICAge2xpc3QubWFwKChmLGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gb25TZXJ2aWNlQ2xpY2soKX0gZGF0YS1pZD17aW5kZXgrMX0gY2xhc3NOYW1lPSdzZXJ2aWNlcy0tbGlzdCc+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgeyF0eXBlIHx8IHR5cGUgPT09ICdmaXonICYmICA8aW1nIGNsYXNzTmFtZT0nc2VydmljZV9pY29uJyBzcmM9e2AvaW1nL3VzbHVnaS8ke2luZGV4KzF9LnN2Z2B9IC8+fVxyXG4gICAgICAgICAgICAgIHt0eXBlID09PSAnanVyJyAmJiAgPGltZyBjbGFzc05hbWU9J3NlcnZpY2VfaWNvbicgc3JjPXtgL2ltZy91c2x1Z2kveXVyJHtpbmRleCsxfS5zdmdgfSAvPn1cclxuICAgICAgICAgICAgICA8c3Bhbj57Zi5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICB7cm91dGVyLnBhdGhuYW1lPT09Jy8nICYmIDxpbWcgY2xhc3NOYW1lPSdwYXRoJyBzcmM9Jy9pbWcvdXNsdWdpL2xpbmUuc3ZnJy8+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFNlcnZpY2VMaXN0Il0sInNvdXJjZVJvb3QiOiIifQ==