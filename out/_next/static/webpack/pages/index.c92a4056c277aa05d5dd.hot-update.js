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
      setId = _ref.setId,
      modal = _ref.modal,
      closeModal = _ref.closeModal,
      id = _ref.id,
      modalType = _ref.modalType;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();

  var onServiceClick = function onServiceClick(index) {
    if (modalType) {
      setModal(type);
      setId(index + 1);
    } else {
      setModal(true);
      setId(index + 1);
    }
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
      lineNumber: 18,
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
          lineNumber: 22,
          columnNumber: 35
        }, _this), type === 'jur' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          alt: "image",
          className: "service_icon",
          src: "/img/uslugi_new/jur".concat(index + 1, ".svg")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 35
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: f.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 15
        }, _this), router.pathname === '/' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          alt: "image",
          className: "path",
          src: "/img/uslugi/line.svg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 41
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvU2VydmljZUxpc3QuanMiXSwibmFtZXMiOlsiU2VydmljZUxpc3QiLCJsaXN0IiwidHlwZSIsInNldE1vZGFsIiwic2V0SWQiLCJtb2RhbCIsImNsb3NlTW9kYWwiLCJpZCIsIm1vZGFsVHlwZSIsInJvdXRlciIsInVzZVJvdXRlciIsIm9uU2VydmljZUNsaWNrIiwiaW5kZXgiLCJtYXAiLCJmIiwibmFtZSIsInBhdGhuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFDQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFxRTtBQUFBOztBQUFBLE1BQW5FQyxJQUFtRSxRQUFuRUEsSUFBbUU7QUFBQSxNQUE3REMsSUFBNkQsUUFBN0RBLElBQTZEO0FBQUEsTUFBdkRDLFFBQXVELFFBQXZEQSxRQUF1RDtBQUFBLE1BQTdDQyxLQUE2QyxRQUE3Q0EsS0FBNkM7QUFBQSxNQUF0Q0MsS0FBc0MsUUFBdENBLEtBQXNDO0FBQUEsTUFBL0JDLFVBQStCLFFBQS9CQSxVQUErQjtBQUFBLE1BQW5CQyxFQUFtQixRQUFuQkEsRUFBbUI7QUFBQSxNQUFmQyxTQUFlLFFBQWZBLFNBQWU7QUFDckYsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4Qjs7QUFDQSxNQUFNQyxjQUFjLEdBQUUsU0FBaEJBLGNBQWdCLENBQUNDLEtBQUQsRUFBVztBQUM3QixRQUFHSixTQUFILEVBQWM7QUFDWkwsY0FBUSxDQUFDRCxJQUFELENBQVI7QUFDQUUsV0FBSyxDQUFDUSxLQUFLLEdBQUMsQ0FBUCxDQUFMO0FBQ0QsS0FIRCxNQUdNO0FBQ0pULGNBQVEsQ0FBQyxJQUFELENBQVI7QUFFQUMsV0FBSyxDQUFDUSxLQUFLLEdBQUMsQ0FBUCxDQUFMO0FBQ0Q7QUFDSixHQVREOztBQVVBLHNCQUNJO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQUEsNEJBRUEsOERBQUMsa0RBQUQ7QUFBYyxpQkFBVyxFQUFFUCxLQUEzQjtBQUFrQyxnQkFBVSxFQUFFQyxVQUE5QztBQUEwRCxRQUFFLEVBQUVDLEVBQTlEO0FBQWtFLFVBQUksRUFBRUw7QUFBeEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZBLEVBR0dELElBQUksQ0FBQ1ksR0FBTCxDQUFTLFVBQUNDLENBQUQsRUFBR0YsS0FBSDtBQUFBLDBCQUNSO0FBQUssZUFBTyxFQUFFO0FBQUEsaUJBQU1ELGNBQWMsQ0FBQ0MsS0FBRCxDQUFwQjtBQUFBLFNBQWQ7QUFBMkMsbUJBQVNBLEtBQUssR0FBQyxDQUExRDtBQUE2RCxpQkFBUyxFQUFDLGdCQUF2RTtBQUFBLG1CQUVHVixJQUFJLEtBQUssS0FBVCxpQkFBbUI7QUFBSyxhQUFHLEVBQUMsT0FBVDtBQUFpQixtQkFBUyxFQUFDLGNBQTNCO0FBQTBDLGFBQUcsK0JBQXdCVSxLQUFLLEdBQUMsQ0FBOUI7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGdEIsRUFHR1YsSUFBSSxLQUFLLEtBQVQsaUJBQW1CO0FBQUssYUFBRyxFQUFDLE9BQVQ7QUFBaUIsbUJBQVMsRUFBQyxjQUEzQjtBQUEwQyxhQUFHLCtCQUF3QlUsS0FBSyxHQUFDLENBQTlCO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSHRCLGVBSUU7QUFBQSxvQkFBT0UsQ0FBQyxDQUFDQztBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkYsRUFLR04sTUFBTSxDQUFDTyxRQUFQLEtBQWtCLEdBQWxCLGlCQUF5QjtBQUFLLGFBQUcsRUFBQyxPQUFUO0FBQWlCLG1CQUFTLEVBQUMsTUFBM0I7QUFBa0MsYUFBRyxFQUFDO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTDVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURRO0FBQUEsS0FBVCxDQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBZUgsQ0EzQkQ7O0dBQU1oQixXO1VBQ2FVLGtEOzs7S0FEYlYsVztBQTRCTiwrREFBZUEsV0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jOTJhNDA1NmMyNzdhYTA1ZDVkZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgTW9kYWxTZXJ2aWNlIGZyb20gJy4vTW9kYWxTZXJ2aWNlJ1xyXG5jb25zdCBTZXJ2aWNlTGlzdCA9ICh7bGlzdCwgdHlwZSwgc2V0TW9kYWwsIHNldElkLCBtb2RhbCwgY2xvc2VNb2RhbCwgaWQsIG1vZGFsVHlwZX0pID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCBvblNlcnZpY2VDbGljayA9KGluZGV4KSA9PiB7XHJcbiAgICAgICAgaWYobW9kYWxUeXBlKSB7XHJcbiAgICAgICAgICBzZXRNb2RhbCh0eXBlKVxyXG4gICAgICAgICAgc2V0SWQoaW5kZXgrMSlcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICBzZXRNb2RhbCh0cnVlKVxyXG4gICAgICAgXHJcbiAgICAgICAgICBzZXRJZChpbmRleCsxKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VydmljZXMtLWxpc3RzJz5cclxuICAgICAgICAgIFxyXG4gICAgICAgIDxNb2RhbFNlcnZpY2UgaXNNb2RhbE9wZW49e21vZGFsfSBjbG9zZU1vZGFsPXtjbG9zZU1vZGFsfSBpZD17aWR9IHR5cGU9e3R5cGV9Lz5cclxuICAgICAgICAgIHtsaXN0Lm1hcCgoZixpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IG9uU2VydmljZUNsaWNrKGluZGV4KX0gZGF0YS1pZD17aW5kZXgrMX0gY2xhc3NOYW1lPSdzZXJ2aWNlcy0tbGlzdCc+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAge3R5cGUgPT09ICdmaXonICYmICA8aW1nIGFsdD0naW1hZ2UnIGNsYXNzTmFtZT0nc2VydmljZV9pY29uJyBzcmM9e2AvaW1nL3VzbHVnaV9uZXcvZml6JHtpbmRleCsxfS5zdmdgfSAvPn1cclxuICAgICAgICAgICAgICB7dHlwZSA9PT0gJ2p1cicgJiYgIDxpbWcgYWx0PSdpbWFnZScgY2xhc3NOYW1lPSdzZXJ2aWNlX2ljb24nIHNyYz17YC9pbWcvdXNsdWdpX25ldy9qdXIke2luZGV4KzF9LnN2Z2B9IC8+fVxyXG4gICAgICAgICAgICAgIDxzcGFuPntmLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIHtyb3V0ZXIucGF0aG5hbWU9PT0nLycgJiYgPGltZyBhbHQ9J2ltYWdlJyBjbGFzc05hbWU9J3BhdGgnIHNyYz0nL2ltZy91c2x1Z2kvbGluZS5zdmcnLz59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU2VydmljZUxpc3QiXSwic291cmNlUm9vdCI6IiJ9