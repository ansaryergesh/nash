self["webpackHotUpdate_N_E"]("pages/uslugi",{

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
    console.log(modalType);

    if (modalType && modalType === '1') {
      setModal({
        modal1: true,
        modal2: false
      });
    }

    if (modalType && modalType === '2') {
      setModal({
        modal1: false,
        modal2: true
      });
    } else {
      setModal(true);
    }

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
      lineNumber: 21,
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
          lineNumber: 25,
          columnNumber: 35
        }, _this), type === 'jur' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          alt: "image",
          className: "service_icon",
          src: "/img/uslugi_new/jur".concat(index + 1, ".svg")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 35
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: f.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 15
        }, _this), router.pathname === '/' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          alt: "image",
          className: "path",
          src: "/img/uslugi/line.svg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 41
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvU2VydmljZUxpc3QuanMiXSwibmFtZXMiOlsiU2VydmljZUxpc3QiLCJsaXN0IiwidHlwZSIsInNldE1vZGFsIiwic2V0SWQiLCJtb2RhbCIsImNsb3NlTW9kYWwiLCJpZCIsIm1vZGFsVHlwZSIsInJvdXRlciIsInVzZVJvdXRlciIsIm9uU2VydmljZUNsaWNrIiwiaW5kZXgiLCJjb25zb2xlIiwibG9nIiwibW9kYWwxIiwibW9kYWwyIiwibWFwIiwiZiIsIm5hbWUiLCJwYXRobmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBQ0EsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBcUU7QUFBQTs7QUFBQSxNQUFuRUMsSUFBbUUsUUFBbkVBLElBQW1FO0FBQUEsTUFBN0RDLElBQTZELFFBQTdEQSxJQUE2RDtBQUFBLE1BQXZEQyxRQUF1RCxRQUF2REEsUUFBdUQ7QUFBQSxNQUE3Q0MsS0FBNkMsUUFBN0NBLEtBQTZDO0FBQUEsTUFBdENDLEtBQXNDLFFBQXRDQSxLQUFzQztBQUFBLE1BQS9CQyxVQUErQixRQUEvQkEsVUFBK0I7QUFBQSxNQUFuQkMsRUFBbUIsUUFBbkJBLEVBQW1CO0FBQUEsTUFBZkMsU0FBZSxRQUFmQSxTQUFlO0FBQ3JGLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7O0FBQ0EsTUFBTUMsY0FBYyxHQUFFLFNBQWhCQSxjQUFnQixDQUFDQyxLQUFELEVBQVc7QUFDN0JDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZTixTQUFaOztBQUNBLFFBQUdBLFNBQVMsSUFBSUEsU0FBUyxLQUFLLEdBQTlCLEVBQW1DO0FBQ2pDTCxjQUFRLENBQUM7QUFBQ1ksY0FBTSxFQUFFLElBQVQ7QUFBZUMsY0FBTSxFQUFFO0FBQXZCLE9BQUQsQ0FBUjtBQUNEOztBQUNELFFBQUdSLFNBQVMsSUFBSUEsU0FBUyxLQUFLLEdBQTlCLEVBQW1DO0FBQ2pDTCxjQUFRLENBQUM7QUFBQ1ksY0FBTSxFQUFDLEtBQVI7QUFBZUMsY0FBTSxFQUFDO0FBQXRCLE9BQUQsQ0FBUjtBQUNELEtBRkQsTUFHSztBQUNIYixjQUFRLENBQUMsSUFBRCxDQUFSO0FBQ0Q7O0FBQ0RDLFNBQUssQ0FBQ1EsS0FBSyxHQUFDLENBQVAsQ0FBTDtBQUNILEdBWkQ7O0FBYUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsaUJBQWY7QUFBQSw0QkFFQSw4REFBQyxrREFBRDtBQUFjLGlCQUFXLEVBQUVQLEtBQTNCO0FBQWtDLGdCQUFVLEVBQUVDLFVBQTlDO0FBQTBELFFBQUUsRUFBRUMsRUFBOUQ7QUFBa0UsVUFBSSxFQUFFTDtBQUF4RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkEsRUFHR0QsSUFBSSxDQUFDZ0IsR0FBTCxDQUFTLFVBQUNDLENBQUQsRUFBR04sS0FBSDtBQUFBLDBCQUNSO0FBQUssZUFBTyxFQUFFO0FBQUEsaUJBQU1ELGNBQWMsQ0FBQ0MsS0FBRCxDQUFwQjtBQUFBLFNBQWQ7QUFBMkMsbUJBQVNBLEtBQUssR0FBQyxDQUExRDtBQUE2RCxpQkFBUyxFQUFDLGdCQUF2RTtBQUFBLG1CQUVHVixJQUFJLEtBQUssS0FBVCxpQkFBbUI7QUFBSyxhQUFHLEVBQUMsT0FBVDtBQUFpQixtQkFBUyxFQUFDLGNBQTNCO0FBQTBDLGFBQUcsK0JBQXdCVSxLQUFLLEdBQUMsQ0FBOUI7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGdEIsRUFHR1YsSUFBSSxLQUFLLEtBQVQsaUJBQW1CO0FBQUssYUFBRyxFQUFDLE9BQVQ7QUFBaUIsbUJBQVMsRUFBQyxjQUEzQjtBQUEwQyxhQUFHLCtCQUF3QlUsS0FBSyxHQUFDLENBQTlCO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSHRCLGVBSUU7QUFBQSxvQkFBT00sQ0FBQyxDQUFDQztBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkYsRUFLR1YsTUFBTSxDQUFDVyxRQUFQLEtBQWtCLEdBQWxCLGlCQUF5QjtBQUFLLGFBQUcsRUFBQyxPQUFUO0FBQWlCLG1CQUFTLEVBQUMsTUFBM0I7QUFBa0MsYUFBRyxFQUFDO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTDVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURRO0FBQUEsS0FBVCxDQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBZUgsQ0E5QkQ7O0dBQU1wQixXO1VBQ2FVLGtEOzs7S0FEYlYsVztBQStCTiwrREFBZUEsV0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91c2x1Z2kuMGZlNDdlNDJhNzhjMWFkMmQzNWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IE1vZGFsU2VydmljZSBmcm9tICcuL01vZGFsU2VydmljZSdcclxuY29uc3QgU2VydmljZUxpc3QgPSAoe2xpc3QsIHR5cGUsIHNldE1vZGFsLCBzZXRJZCwgbW9kYWwsIGNsb3NlTW9kYWwsIGlkLCBtb2RhbFR5cGV9KSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3Qgb25TZXJ2aWNlQ2xpY2sgPShpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG1vZGFsVHlwZSlcclxuICAgICAgICBpZihtb2RhbFR5cGUgJiYgbW9kYWxUeXBlID09PSAnMScpIHtcclxuICAgICAgICAgIHNldE1vZGFsKHttb2RhbDE6IHRydWUsIG1vZGFsMjogZmFsc2V9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihtb2RhbFR5cGUgJiYgbW9kYWxUeXBlID09PSAnMicpIHtcclxuICAgICAgICAgIHNldE1vZGFsKHttb2RhbDE6ZmFsc2UsIG1vZGFsMjp0cnVlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBzZXRNb2RhbCh0cnVlKVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRJZChpbmRleCsxKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZXJ2aWNlcy0tbGlzdHMnPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgPE1vZGFsU2VydmljZSBpc01vZGFsT3Blbj17bW9kYWx9IGNsb3NlTW9kYWw9e2Nsb3NlTW9kYWx9IGlkPXtpZH0gdHlwZT17dHlwZX0vPlxyXG4gICAgICAgICAge2xpc3QubWFwKChmLGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gb25TZXJ2aWNlQ2xpY2soaW5kZXgpfSBkYXRhLWlkPXtpbmRleCsxfSBjbGFzc05hbWU9J3NlcnZpY2VzLS1saXN0Jz5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB7dHlwZSA9PT0gJ2ZpeicgJiYgIDxpbWcgYWx0PSdpbWFnZScgY2xhc3NOYW1lPSdzZXJ2aWNlX2ljb24nIHNyYz17YC9pbWcvdXNsdWdpX25ldy9maXoke2luZGV4KzF9LnN2Z2B9IC8+fVxyXG4gICAgICAgICAgICAgIHt0eXBlID09PSAnanVyJyAmJiAgPGltZyBhbHQ9J2ltYWdlJyBjbGFzc05hbWU9J3NlcnZpY2VfaWNvbicgc3JjPXtgL2ltZy91c2x1Z2lfbmV3L2p1ciR7aW5kZXgrMX0uc3ZnYH0gLz59XHJcbiAgICAgICAgICAgICAgPHNwYW4+e2YubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAge3JvdXRlci5wYXRobmFtZT09PScvJyAmJiA8aW1nIGFsdD0naW1hZ2UnIGNsYXNzTmFtZT0ncGF0aCcgc3JjPScvaW1nL3VzbHVnaS9saW5lLnN2ZycvPn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBTZXJ2aWNlTGlzdCJdLCJzb3VyY2VSb290IjoiIn0=