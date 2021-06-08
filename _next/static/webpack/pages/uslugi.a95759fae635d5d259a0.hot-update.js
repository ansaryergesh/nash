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
      console.log('ok');
      setModal({
        modal1: true,
        modal2: false
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvU2VydmljZUxpc3QuanMiXSwibmFtZXMiOlsiU2VydmljZUxpc3QiLCJsaXN0IiwidHlwZSIsInNldE1vZGFsIiwic2V0SWQiLCJtb2RhbCIsImNsb3NlTW9kYWwiLCJpZCIsIm1vZGFsVHlwZSIsInJvdXRlciIsInVzZVJvdXRlciIsIm9uU2VydmljZUNsaWNrIiwiaW5kZXgiLCJjb25zb2xlIiwibG9nIiwibW9kYWwxIiwibW9kYWwyIiwic2V0VGltZW91dCIsIm1hcCIsImYiLCJuYW1lIiwicGF0aG5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUNBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQXFFO0FBQUE7O0FBQUEsTUFBbkVDLElBQW1FLFFBQW5FQSxJQUFtRTtBQUFBLE1BQTdEQyxJQUE2RCxRQUE3REEsSUFBNkQ7QUFBQSxNQUF2REMsUUFBdUQsUUFBdkRBLFFBQXVEO0FBQUEsTUFBN0NDLEtBQTZDLFFBQTdDQSxLQUE2QztBQUFBLE1BQXRDQyxLQUFzQyxRQUF0Q0EsS0FBc0M7QUFBQSxNQUEvQkMsVUFBK0IsUUFBL0JBLFVBQStCO0FBQUEsTUFBbkJDLEVBQW1CLFFBQW5CQSxFQUFtQjtBQUFBLE1BQWZDLFNBQWUsUUFBZkEsU0FBZTtBQUNyRixNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCOztBQUNBLE1BQU1DLGNBQWMsR0FBRSxTQUFoQkEsY0FBZ0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQzdCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWU4sU0FBWjs7QUFDQSxRQUFHQSxTQUFTLElBQUlBLFNBQVMsS0FBSyxHQUE5QixFQUFtQztBQUNqQ0ssYUFBTyxDQUFDQyxHQUFSLENBQVksSUFBWjtBQUNBWCxjQUFRLENBQUM7QUFBQ1ksY0FBTSxFQUFFLElBQVQ7QUFBZUMsY0FBTSxFQUFFO0FBQXZCLE9BQUQsQ0FBUjtBQUNBQyxnQkFBVSxDQUFDLFlBQU07QUFDZkosZUFBTyxDQUFDQyxHQUFSLENBQVlULEtBQVo7QUFDRCxPQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0Q7O0FBQ0QsUUFBR0csU0FBUyxJQUFJQSxTQUFTLEtBQUssR0FBOUIsRUFBbUM7QUFDakNMLGNBQVEsQ0FBQztBQUFDWSxjQUFNLEVBQUMsS0FBUjtBQUFlQyxjQUFNLEVBQUM7QUFBdEIsT0FBRCxDQUFSO0FBQ0QsS0FGRCxNQUdLO0FBQ0hiLGNBQVEsQ0FBQyxJQUFELENBQVI7QUFDRDs7QUFDREMsU0FBSyxDQUFDUSxLQUFLLEdBQUMsQ0FBUCxDQUFMO0FBQ0gsR0FoQkQ7O0FBaUJBLHNCQUNJO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQUEsNEJBRUEsOERBQUMsa0RBQUQ7QUFBYyxpQkFBVyxFQUFFUCxLQUEzQjtBQUFrQyxnQkFBVSxFQUFFQyxVQUE5QztBQUEwRCxRQUFFLEVBQUVDLEVBQTlEO0FBQWtFLFVBQUksRUFBRUw7QUFBeEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZBLEVBR0dELElBQUksQ0FBQ2lCLEdBQUwsQ0FBUyxVQUFDQyxDQUFELEVBQUdQLEtBQUg7QUFBQSwwQkFDUjtBQUFLLGVBQU8sRUFBRTtBQUFBLGlCQUFNRCxjQUFjLENBQUNDLEtBQUQsQ0FBcEI7QUFBQSxTQUFkO0FBQTJDLG1CQUFTQSxLQUFLLEdBQUMsQ0FBMUQ7QUFBNkQsaUJBQVMsRUFBQyxnQkFBdkU7QUFBQSxtQkFFR1YsSUFBSSxLQUFLLEtBQVQsaUJBQW1CO0FBQUssYUFBRyxFQUFDLE9BQVQ7QUFBaUIsbUJBQVMsRUFBQyxjQUEzQjtBQUEwQyxhQUFHLCtCQUF3QlUsS0FBSyxHQUFDLENBQTlCO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRnRCLEVBR0dWLElBQUksS0FBSyxLQUFULGlCQUFtQjtBQUFLLGFBQUcsRUFBQyxPQUFUO0FBQWlCLG1CQUFTLEVBQUMsY0FBM0I7QUFBMEMsYUFBRywrQkFBd0JVLEtBQUssR0FBQyxDQUE5QjtBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUh0QixlQUlFO0FBQUEsb0JBQU9PLENBQUMsQ0FBQ0M7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGLEVBS0dYLE1BQU0sQ0FBQ1ksUUFBUCxLQUFrQixHQUFsQixpQkFBeUI7QUFBSyxhQUFHLEVBQUMsT0FBVDtBQUFpQixtQkFBUyxFQUFDLE1BQTNCO0FBQWtDLGFBQUcsRUFBQztBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUw1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEUTtBQUFBLEtBQVQsQ0FISDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWVILENBbENEOztHQUFNckIsVztVQUNhVSxrRDs7O0tBRGJWLFc7QUFtQ04sK0RBQWVBLFdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNsdWdpLmE5NTc1OWZhZTYzNWQ1ZDI1OWEwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBNb2RhbFNlcnZpY2UgZnJvbSAnLi9Nb2RhbFNlcnZpY2UnXHJcbmNvbnN0IFNlcnZpY2VMaXN0ID0gKHtsaXN0LCB0eXBlLCBzZXRNb2RhbCwgc2V0SWQsIG1vZGFsLCBjbG9zZU1vZGFsLCBpZCwgbW9kYWxUeXBlfSkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IG9uU2VydmljZUNsaWNrID0oaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhtb2RhbFR5cGUpXHJcbiAgICAgICAgaWYobW9kYWxUeXBlICYmIG1vZGFsVHlwZSA9PT0gJzEnKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnb2snKVxyXG4gICAgICAgICAgc2V0TW9kYWwoe21vZGFsMTogdHJ1ZSwgbW9kYWwyOiBmYWxzZX0pXHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobW9kYWwpXHJcbiAgICAgICAgICB9LCAxMDAwKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihtb2RhbFR5cGUgJiYgbW9kYWxUeXBlID09PSAnMicpIHtcclxuICAgICAgICAgIHNldE1vZGFsKHttb2RhbDE6ZmFsc2UsIG1vZGFsMjp0cnVlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBzZXRNb2RhbCh0cnVlKVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRJZChpbmRleCsxKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZXJ2aWNlcy0tbGlzdHMnPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgPE1vZGFsU2VydmljZSBpc01vZGFsT3Blbj17bW9kYWx9IGNsb3NlTW9kYWw9e2Nsb3NlTW9kYWx9IGlkPXtpZH0gdHlwZT17dHlwZX0vPlxyXG4gICAgICAgICAge2xpc3QubWFwKChmLGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gb25TZXJ2aWNlQ2xpY2soaW5kZXgpfSBkYXRhLWlkPXtpbmRleCsxfSBjbGFzc05hbWU9J3NlcnZpY2VzLS1saXN0Jz5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB7dHlwZSA9PT0gJ2ZpeicgJiYgIDxpbWcgYWx0PSdpbWFnZScgY2xhc3NOYW1lPSdzZXJ2aWNlX2ljb24nIHNyYz17YC9pbWcvdXNsdWdpX25ldy9maXoke2luZGV4KzF9LnN2Z2B9IC8+fVxyXG4gICAgICAgICAgICAgIHt0eXBlID09PSAnanVyJyAmJiAgPGltZyBhbHQ9J2ltYWdlJyBjbGFzc05hbWU9J3NlcnZpY2VfaWNvbicgc3JjPXtgL2ltZy91c2x1Z2lfbmV3L2p1ciR7aW5kZXgrMX0uc3ZnYH0gLz59XHJcbiAgICAgICAgICAgICAgPHNwYW4+e2YubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAge3JvdXRlci5wYXRobmFtZT09PScvJyAmJiA8aW1nIGFsdD0naW1hZ2UnIGNsYXNzTmFtZT0ncGF0aCcgc3JjPScvaW1nL3VzbHVnaS9saW5lLnN2ZycvPn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBTZXJ2aWNlTGlzdCJdLCJzb3VyY2VSb290IjoiIn0=