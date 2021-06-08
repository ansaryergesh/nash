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
/* harmony import */ var _ModalService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ModalService */ "./components/shared/ModalService.js");
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
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ModalService__WEBPACK_IMPORTED_MODULE_2__.default, {
      isModalOpen: modal,
      closeModal: closeModal,
      id: id,
      type: type
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }, _this), list.map(function (f, index) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        onClick: function onClick() {
          return onServiceClick(index);
        },
        "data-id": index + 1,
        className: "services--list",
        children: [type === 'fiz' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          alt: "image",
          className: "service_icon",
          src: "/img/uslugi_new/fiz".concat(index + 1, ".svg")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 35
        }, _this), type === 'jur' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          alt: "image",
          className: "service_icon",
          src: "/img/uslugi_new/jur".concat(index + 1, ".svg")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 35
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: f.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 15
        }, _this), router.pathname === '/' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          alt: "image",
          className: "path",
          src: "/img/uslugi/line.svg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 41
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvU2VydmljZUxpc3QuanMiXSwibmFtZXMiOlsiU2VydmljZUxpc3QiLCJsaXN0IiwidHlwZSIsInNldE1vZGFsIiwic2V0SWQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJvblNlcnZpY2VDbGljayIsImluZGV4IiwibW9kYWwiLCJjbG9zZU1vZGFsIiwiaWQiLCJtYXAiLCJmIiwibmFtZSIsInBhdGhuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFDQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFtQztBQUFBOztBQUFBLE1BQWpDQyxJQUFpQyxRQUFqQ0EsSUFBaUM7QUFBQSxNQUEzQkMsSUFBMkIsUUFBM0JBLElBQTJCO0FBQUEsTUFBckJDLFFBQXFCLFFBQXJCQSxRQUFxQjtBQUFBLE1BQVhDLEtBQVcsUUFBWEEsS0FBVztBQUNuRCxNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCOztBQUNBLE1BQU1DLGNBQWMsR0FBRSxTQUFoQkEsY0FBZ0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQzdCTCxZQUFRLENBQUMsSUFBRCxDQUFSO0FBQ0FDLFNBQUssQ0FBQ0ksS0FBSyxHQUFDLENBQVAsQ0FBTDtBQUNILEdBSEQ7O0FBSUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsaUJBQWY7QUFBQSw0QkFFQSw4REFBQyxrREFBRDtBQUFjLGlCQUFXLEVBQUVDLEtBQTNCO0FBQWtDLGdCQUFVLEVBQUVDLFVBQTlDO0FBQTBELFFBQUUsRUFBRUMsRUFBOUQ7QUFBa0UsVUFBSSxFQUFFVDtBQUF4RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkEsRUFHR0QsSUFBSSxDQUFDVyxHQUFMLENBQVMsVUFBQ0MsQ0FBRCxFQUFHTCxLQUFIO0FBQUEsMEJBQ1I7QUFBSyxlQUFPLEVBQUU7QUFBQSxpQkFBTUQsY0FBYyxDQUFDQyxLQUFELENBQXBCO0FBQUEsU0FBZDtBQUEyQyxtQkFBU0EsS0FBSyxHQUFDLENBQTFEO0FBQTZELGlCQUFTLEVBQUMsZ0JBQXZFO0FBQUEsbUJBRUdOLElBQUksS0FBSyxLQUFULGlCQUFtQjtBQUFLLGFBQUcsRUFBQyxPQUFUO0FBQWlCLG1CQUFTLEVBQUMsY0FBM0I7QUFBMEMsYUFBRywrQkFBd0JNLEtBQUssR0FBQyxDQUE5QjtBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZ0QixFQUdHTixJQUFJLEtBQUssS0FBVCxpQkFBbUI7QUFBSyxhQUFHLEVBQUMsT0FBVDtBQUFpQixtQkFBUyxFQUFDLGNBQTNCO0FBQTBDLGFBQUcsK0JBQXdCTSxLQUFLLEdBQUMsQ0FBOUI7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIdEIsZUFJRTtBQUFBLG9CQUFPSyxDQUFDLENBQUNDO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRixFQUtHVCxNQUFNLENBQUNVLFFBQVAsS0FBa0IsR0FBbEIsaUJBQXlCO0FBQUssYUFBRyxFQUFDLE9BQVQ7QUFBaUIsbUJBQVMsRUFBQyxNQUEzQjtBQUFrQyxhQUFHLEVBQUM7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFE7QUFBQSxLQUFULENBSEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFlSCxDQXJCRDs7R0FBTWYsVztVQUNhTSxrRDs7O0tBRGJOLFc7QUFzQk4sK0RBQWVBLFdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzBkOWUyYWQ5YjBjZWQ3ZGY0ZmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IE1vZGFsU2VydmljZSBmcm9tICcuL01vZGFsU2VydmljZSdcclxuY29uc3QgU2VydmljZUxpc3QgPSAoe2xpc3QsIHR5cGUsIHNldE1vZGFsLCBzZXRJZH0pID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCBvblNlcnZpY2VDbGljayA9KGluZGV4KSA9PiB7XHJcbiAgICAgICAgc2V0TW9kYWwodHJ1ZSlcclxuICAgICAgICBzZXRJZChpbmRleCsxKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZXJ2aWNlcy0tbGlzdHMnPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgPE1vZGFsU2VydmljZSBpc01vZGFsT3Blbj17bW9kYWx9IGNsb3NlTW9kYWw9e2Nsb3NlTW9kYWx9IGlkPXtpZH0gdHlwZT17dHlwZX0vPlxyXG4gICAgICAgICAge2xpc3QubWFwKChmLGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gb25TZXJ2aWNlQ2xpY2soaW5kZXgpfSBkYXRhLWlkPXtpbmRleCsxfSBjbGFzc05hbWU9J3NlcnZpY2VzLS1saXN0Jz5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB7dHlwZSA9PT0gJ2ZpeicgJiYgIDxpbWcgYWx0PSdpbWFnZScgY2xhc3NOYW1lPSdzZXJ2aWNlX2ljb24nIHNyYz17YC9pbWcvdXNsdWdpX25ldy9maXoke2luZGV4KzF9LnN2Z2B9IC8+fVxyXG4gICAgICAgICAgICAgIHt0eXBlID09PSAnanVyJyAmJiAgPGltZyBhbHQ9J2ltYWdlJyBjbGFzc05hbWU9J3NlcnZpY2VfaWNvbicgc3JjPXtgL2ltZy91c2x1Z2lfbmV3L2p1ciR7aW5kZXgrMX0uc3ZnYH0gLz59XHJcbiAgICAgICAgICAgICAgPHNwYW4+e2YubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAge3JvdXRlci5wYXRobmFtZT09PScvJyAmJiA8aW1nIGFsdD0naW1hZ2UnIGNsYXNzTmFtZT0ncGF0aCcgc3JjPScvaW1nL3VzbHVnaS9saW5lLnN2ZycvPn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBTZXJ2aWNlTGlzdCJdLCJzb3VyY2VSb290IjoiIn0=