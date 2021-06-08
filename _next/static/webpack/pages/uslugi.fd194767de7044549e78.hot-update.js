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
      console.log('ok'); // setModal({modal1: true, modal2: false})

      setTimeout(function () {
        console.log(modal);
      }, 1000);
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
      lineNumber: 25,
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
          lineNumber: 29,
          columnNumber: 35
        }, _this), type === 'jur' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          alt: "image",
          className: "service_icon",
          src: "/img/uslugi_new/jur".concat(index + 1, ".svg")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 35
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: f.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 15
        }, _this), router.pathname === '/' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          alt: "image",
          className: "path",
          src: "/img/uslugi/line.svg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 41
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvU2VydmljZUxpc3QuanMiXSwibmFtZXMiOlsiU2VydmljZUxpc3QiLCJsaXN0IiwidHlwZSIsInNldE1vZGFsIiwic2V0SWQiLCJtb2RhbCIsImNsb3NlTW9kYWwiLCJpZCIsIm1vZGFsVHlwZSIsInJvdXRlciIsInVzZVJvdXRlciIsIm9uU2VydmljZUNsaWNrIiwiaW5kZXgiLCJjb25zb2xlIiwibG9nIiwic2V0VGltZW91dCIsIm1vZGFsMSIsIm1vZGFsMiIsIm1hcCIsImYiLCJuYW1lIiwicGF0aG5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUNBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQXFFO0FBQUE7O0FBQUEsTUFBbkVDLElBQW1FLFFBQW5FQSxJQUFtRTtBQUFBLE1BQTdEQyxJQUE2RCxRQUE3REEsSUFBNkQ7QUFBQSxNQUF2REMsUUFBdUQsUUFBdkRBLFFBQXVEO0FBQUEsTUFBN0NDLEtBQTZDLFFBQTdDQSxLQUE2QztBQUFBLE1BQXRDQyxLQUFzQyxRQUF0Q0EsS0FBc0M7QUFBQSxNQUEvQkMsVUFBK0IsUUFBL0JBLFVBQStCO0FBQUEsTUFBbkJDLEVBQW1CLFFBQW5CQSxFQUFtQjtBQUFBLE1BQWZDLFNBQWUsUUFBZkEsU0FBZTtBQUNyRixNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCOztBQUNBLE1BQU1DLGNBQWMsR0FBRSxTQUFoQkEsY0FBZ0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQzdCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWU4sU0FBWjs7QUFDQSxRQUFHQSxTQUFTLElBQUlBLFNBQVMsS0FBSyxHQUE5QixFQUFtQztBQUNqQ0ssYUFBTyxDQUFDQyxHQUFSLENBQVksSUFBWixFQURpQyxDQUVqQzs7QUFDQUMsZ0JBQVUsQ0FBQyxZQUFNO0FBQ2ZGLGVBQU8sQ0FBQ0MsR0FBUixDQUFZVCxLQUFaO0FBQ0QsT0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdEOztBQUNELFFBQUdHLFNBQVMsSUFBSUEsU0FBUyxLQUFLLEdBQTlCLEVBQW1DO0FBQ2pDTCxjQUFRLENBQUM7QUFBQ2EsY0FBTSxFQUFDLEtBQVI7QUFBZUMsY0FBTSxFQUFDO0FBQXRCLE9BQUQsQ0FBUjtBQUNELEtBRkQsTUFHSztBQUNIZCxjQUFRLENBQUMsSUFBRCxDQUFSO0FBQ0Q7O0FBQ0RDLFNBQUssQ0FBQ1EsS0FBSyxHQUFDLENBQVAsQ0FBTDtBQUNILEdBaEJEOztBQWlCQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyxpQkFBZjtBQUFBLDRCQUVBLDhEQUFDLGtEQUFEO0FBQWMsaUJBQVcsRUFBRVAsS0FBM0I7QUFBa0MsZ0JBQVUsRUFBRUMsVUFBOUM7QUFBMEQsUUFBRSxFQUFFQyxFQUE5RDtBQUFrRSxVQUFJLEVBQUVMO0FBQXhFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGQSxFQUdHRCxJQUFJLENBQUNpQixHQUFMLENBQVMsVUFBQ0MsQ0FBRCxFQUFHUCxLQUFIO0FBQUEsMEJBQ1I7QUFBSyxlQUFPLEVBQUU7QUFBQSxpQkFBTUQsY0FBYyxDQUFDQyxLQUFELENBQXBCO0FBQUEsU0FBZDtBQUEyQyxtQkFBU0EsS0FBSyxHQUFDLENBQTFEO0FBQTZELGlCQUFTLEVBQUMsZ0JBQXZFO0FBQUEsbUJBRUdWLElBQUksS0FBSyxLQUFULGlCQUFtQjtBQUFLLGFBQUcsRUFBQyxPQUFUO0FBQWlCLG1CQUFTLEVBQUMsY0FBM0I7QUFBMEMsYUFBRywrQkFBd0JVLEtBQUssR0FBQyxDQUE5QjtBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZ0QixFQUdHVixJQUFJLEtBQUssS0FBVCxpQkFBbUI7QUFBSyxhQUFHLEVBQUMsT0FBVDtBQUFpQixtQkFBUyxFQUFDLGNBQTNCO0FBQTBDLGFBQUcsK0JBQXdCVSxLQUFLLEdBQUMsQ0FBOUI7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIdEIsZUFJRTtBQUFBLG9CQUFPTyxDQUFDLENBQUNDO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRixFQUtHWCxNQUFNLENBQUNZLFFBQVAsS0FBa0IsR0FBbEIsaUJBQXlCO0FBQUssYUFBRyxFQUFDLE9BQVQ7QUFBaUIsbUJBQVMsRUFBQyxNQUEzQjtBQUFrQyxhQUFHLEVBQUM7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFE7QUFBQSxLQUFULENBSEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFlSCxDQWxDRDs7R0FBTXJCLFc7VUFDYVUsa0Q7OztLQURiVixXO0FBbUNOLCtEQUFlQSxXQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VzbHVnaS5mZDE5NDc2N2RlNzA0NDU0OWU3OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgTW9kYWxTZXJ2aWNlIGZyb20gJy4vTW9kYWxTZXJ2aWNlJ1xyXG5jb25zdCBTZXJ2aWNlTGlzdCA9ICh7bGlzdCwgdHlwZSwgc2V0TW9kYWwsIHNldElkLCBtb2RhbCwgY2xvc2VNb2RhbCwgaWQsIG1vZGFsVHlwZX0pID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCBvblNlcnZpY2VDbGljayA9KGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cobW9kYWxUeXBlKVxyXG4gICAgICAgIGlmKG1vZGFsVHlwZSAmJiBtb2RhbFR5cGUgPT09ICcxJykge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ29rJylcclxuICAgICAgICAgIC8vIHNldE1vZGFsKHttb2RhbDE6IHRydWUsIG1vZGFsMjogZmFsc2V9KVxyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG1vZGFsKVxyXG4gICAgICAgICAgfSwgMTAwMClcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYobW9kYWxUeXBlICYmIG1vZGFsVHlwZSA9PT0gJzInKSB7XHJcbiAgICAgICAgICBzZXRNb2RhbCh7bW9kYWwxOmZhbHNlLCBtb2RhbDI6dHJ1ZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgc2V0TW9kYWwodHJ1ZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0SWQoaW5kZXgrMSlcclxuICAgIH1cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VydmljZXMtLWxpc3RzJz5cclxuICAgICAgICAgIFxyXG4gICAgICAgIDxNb2RhbFNlcnZpY2UgaXNNb2RhbE9wZW49e21vZGFsfSBjbG9zZU1vZGFsPXtjbG9zZU1vZGFsfSBpZD17aWR9IHR5cGU9e3R5cGV9Lz5cclxuICAgICAgICAgIHtsaXN0Lm1hcCgoZixpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IG9uU2VydmljZUNsaWNrKGluZGV4KX0gZGF0YS1pZD17aW5kZXgrMX0gY2xhc3NOYW1lPSdzZXJ2aWNlcy0tbGlzdCc+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAge3R5cGUgPT09ICdmaXonICYmICA8aW1nIGFsdD0naW1hZ2UnIGNsYXNzTmFtZT0nc2VydmljZV9pY29uJyBzcmM9e2AvaW1nL3VzbHVnaV9uZXcvZml6JHtpbmRleCsxfS5zdmdgfSAvPn1cclxuICAgICAgICAgICAgICB7dHlwZSA9PT0gJ2p1cicgJiYgIDxpbWcgYWx0PSdpbWFnZScgY2xhc3NOYW1lPSdzZXJ2aWNlX2ljb24nIHNyYz17YC9pbWcvdXNsdWdpX25ldy9qdXIke2luZGV4KzF9LnN2Z2B9IC8+fVxyXG4gICAgICAgICAgICAgIDxzcGFuPntmLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIHtyb3V0ZXIucGF0aG5hbWU9PT0nLycgJiYgPGltZyBhbHQ9J2ltYWdlJyBjbGFzc05hbWU9J3BhdGgnIHNyYz0nL2ltZy91c2x1Z2kvbGluZS5zdmcnLz59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU2VydmljZUxpc3QiXSwic291cmNlUm9vdCI6IiJ9