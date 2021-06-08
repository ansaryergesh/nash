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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvU2VydmljZUxpc3QuanMiXSwibmFtZXMiOlsiU2VydmljZUxpc3QiLCJsaXN0IiwidHlwZSIsInNldE1vZGFsIiwic2V0SWQiLCJtb2RhbCIsImNsb3NlTW9kYWwiLCJpZCIsIm1vZGFsVHlwZSIsInJvdXRlciIsInVzZVJvdXRlciIsIm9uU2VydmljZUNsaWNrIiwiaW5kZXgiLCJjb25zb2xlIiwibG9nIiwibW9kYWwxIiwibW9kYWwyIiwic2V0VGltZW91dCIsIm1hcCIsImYiLCJuYW1lIiwicGF0aG5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUNBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQXFFO0FBQUE7O0FBQUEsTUFBbkVDLElBQW1FLFFBQW5FQSxJQUFtRTtBQUFBLE1BQTdEQyxJQUE2RCxRQUE3REEsSUFBNkQ7QUFBQSxNQUF2REMsUUFBdUQsUUFBdkRBLFFBQXVEO0FBQUEsTUFBN0NDLEtBQTZDLFFBQTdDQSxLQUE2QztBQUFBLE1BQXRDQyxLQUFzQyxRQUF0Q0EsS0FBc0M7QUFBQSxNQUEvQkMsVUFBK0IsUUFBL0JBLFVBQStCO0FBQUEsTUFBbkJDLEVBQW1CLFFBQW5CQSxFQUFtQjtBQUFBLE1BQWZDLFNBQWUsUUFBZkEsU0FBZTtBQUNyRixNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCOztBQUNBLE1BQU1DLGNBQWMsR0FBRSxTQUFoQkEsY0FBZ0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQzdCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWU4sU0FBWjs7QUFDQSxRQUFHQSxTQUFTLElBQUlBLFNBQVMsS0FBSyxHQUE5QixFQUFtQztBQUNqQ0ssYUFBTyxDQUFDQyxHQUFSLENBQVksSUFBWjtBQUNBWCxjQUFRLENBQUM7QUFBQ1ksY0FBTSxFQUFFLElBQVQ7QUFBZUMsY0FBTSxFQUFFO0FBQXZCLE9BQUQsQ0FBUjtBQUNBQyxnQkFBVSxDQUFDLFlBQU07QUFDZkosZUFBTyxDQUFDQyxHQUFSLENBQVlULEtBQVo7QUFDRCxPQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0Q7O0FBQ0QsUUFBR0csU0FBUyxJQUFJQSxTQUFTLEtBQUssR0FBOUIsRUFBbUM7QUFDakNMLGNBQVEsQ0FBQztBQUFDWSxjQUFNLEVBQUMsS0FBUjtBQUFlQyxjQUFNLEVBQUM7QUFBdEIsT0FBRCxDQUFSO0FBQ0QsS0FGRCxNQUdLO0FBQ0hiLGNBQVEsQ0FBQyxJQUFELENBQVI7QUFDRDs7QUFDREMsU0FBSyxDQUFDUSxLQUFLLEdBQUMsQ0FBUCxDQUFMO0FBQ0gsR0FoQkQ7O0FBaUJBLHNCQUNJO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQUEsNEJBRUEsOERBQUMsa0RBQUQ7QUFBYyxpQkFBVyxFQUFFUCxLQUEzQjtBQUFrQyxnQkFBVSxFQUFFQyxVQUE5QztBQUEwRCxRQUFFLEVBQUVDLEVBQTlEO0FBQWtFLFVBQUksRUFBRUw7QUFBeEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZBLEVBR0dELElBQUksQ0FBQ2lCLEdBQUwsQ0FBUyxVQUFDQyxDQUFELEVBQUdQLEtBQUg7QUFBQSwwQkFDUjtBQUFLLGVBQU8sRUFBRTtBQUFBLGlCQUFNRCxjQUFjLENBQUNDLEtBQUQsQ0FBcEI7QUFBQSxTQUFkO0FBQTJDLG1CQUFTQSxLQUFLLEdBQUMsQ0FBMUQ7QUFBNkQsaUJBQVMsRUFBQyxnQkFBdkU7QUFBQSxtQkFFR1YsSUFBSSxLQUFLLEtBQVQsaUJBQW1CO0FBQUssYUFBRyxFQUFDLE9BQVQ7QUFBaUIsbUJBQVMsRUFBQyxjQUEzQjtBQUEwQyxhQUFHLCtCQUF3QlUsS0FBSyxHQUFDLENBQTlCO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRnRCLEVBR0dWLElBQUksS0FBSyxLQUFULGlCQUFtQjtBQUFLLGFBQUcsRUFBQyxPQUFUO0FBQWlCLG1CQUFTLEVBQUMsY0FBM0I7QUFBMEMsYUFBRywrQkFBd0JVLEtBQUssR0FBQyxDQUE5QjtBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUh0QixlQUlFO0FBQUEsb0JBQU9PLENBQUMsQ0FBQ0M7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGLEVBS0dYLE1BQU0sQ0FBQ1ksUUFBUCxLQUFrQixHQUFsQixpQkFBeUI7QUFBSyxhQUFHLEVBQUMsT0FBVDtBQUFpQixtQkFBUyxFQUFDLE1BQTNCO0FBQWtDLGFBQUcsRUFBQztBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUw1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEUTtBQUFBLEtBQVQsQ0FISDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWVILENBbENEOztHQUFNckIsVztVQUNhVSxrRDs7O0tBRGJWLFc7QUFtQ04sK0RBQWVBLFdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTk1NzU5ZmFlNjM1ZDVkMjU5YTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IE1vZGFsU2VydmljZSBmcm9tICcuL01vZGFsU2VydmljZSdcclxuY29uc3QgU2VydmljZUxpc3QgPSAoe2xpc3QsIHR5cGUsIHNldE1vZGFsLCBzZXRJZCwgbW9kYWwsIGNsb3NlTW9kYWwsIGlkLCBtb2RhbFR5cGV9KSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3Qgb25TZXJ2aWNlQ2xpY2sgPShpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG1vZGFsVHlwZSlcclxuICAgICAgICBpZihtb2RhbFR5cGUgJiYgbW9kYWxUeXBlID09PSAnMScpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdvaycpXHJcbiAgICAgICAgICBzZXRNb2RhbCh7bW9kYWwxOiB0cnVlLCBtb2RhbDI6IGZhbHNlfSlcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtb2RhbClcclxuICAgICAgICAgIH0sIDEwMDApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKG1vZGFsVHlwZSAmJiBtb2RhbFR5cGUgPT09ICcyJykge1xyXG4gICAgICAgICAgc2V0TW9kYWwoe21vZGFsMTpmYWxzZSwgbW9kYWwyOnRydWV9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIHNldE1vZGFsKHRydWUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldElkKGluZGV4KzEpXHJcbiAgICB9XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlcnZpY2VzLS1saXN0cyc+XHJcbiAgICAgICAgICBcclxuICAgICAgICA8TW9kYWxTZXJ2aWNlIGlzTW9kYWxPcGVuPXttb2RhbH0gY2xvc2VNb2RhbD17Y2xvc2VNb2RhbH0gaWQ9e2lkfSB0eXBlPXt0eXBlfS8+XHJcbiAgICAgICAgICB7bGlzdC5tYXAoKGYsaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBvblNlcnZpY2VDbGljayhpbmRleCl9IGRhdGEtaWQ9e2luZGV4KzF9IGNsYXNzTmFtZT0nc2VydmljZXMtLWxpc3QnPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIHt0eXBlID09PSAnZml6JyAmJiAgPGltZyBhbHQ9J2ltYWdlJyBjbGFzc05hbWU9J3NlcnZpY2VfaWNvbicgc3JjPXtgL2ltZy91c2x1Z2lfbmV3L2ZpeiR7aW5kZXgrMX0uc3ZnYH0gLz59XHJcbiAgICAgICAgICAgICAge3R5cGUgPT09ICdqdXInICYmICA8aW1nIGFsdD0naW1hZ2UnIGNsYXNzTmFtZT0nc2VydmljZV9pY29uJyBzcmM9e2AvaW1nL3VzbHVnaV9uZXcvanVyJHtpbmRleCsxfS5zdmdgfSAvPn1cclxuICAgICAgICAgICAgICA8c3Bhbj57Zi5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICB7cm91dGVyLnBhdGhuYW1lPT09Jy8nICYmIDxpbWcgYWx0PSdpbWFnZScgY2xhc3NOYW1lPSdwYXRoJyBzcmM9Jy9pbWcvdXNsdWdpL2xpbmUuc3ZnJy8+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFNlcnZpY2VMaXN0Il0sInNvdXJjZVJvb3QiOiIifQ==