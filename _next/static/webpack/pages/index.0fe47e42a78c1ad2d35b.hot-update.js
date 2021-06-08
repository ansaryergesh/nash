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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvU2VydmljZUxpc3QuanMiXSwibmFtZXMiOlsiU2VydmljZUxpc3QiLCJsaXN0IiwidHlwZSIsInNldE1vZGFsIiwic2V0SWQiLCJtb2RhbCIsImNsb3NlTW9kYWwiLCJpZCIsIm1vZGFsVHlwZSIsInJvdXRlciIsInVzZVJvdXRlciIsIm9uU2VydmljZUNsaWNrIiwiaW5kZXgiLCJjb25zb2xlIiwibG9nIiwibW9kYWwxIiwibW9kYWwyIiwibWFwIiwiZiIsIm5hbWUiLCJwYXRobmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBQ0EsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBcUU7QUFBQTs7QUFBQSxNQUFuRUMsSUFBbUUsUUFBbkVBLElBQW1FO0FBQUEsTUFBN0RDLElBQTZELFFBQTdEQSxJQUE2RDtBQUFBLE1BQXZEQyxRQUF1RCxRQUF2REEsUUFBdUQ7QUFBQSxNQUE3Q0MsS0FBNkMsUUFBN0NBLEtBQTZDO0FBQUEsTUFBdENDLEtBQXNDLFFBQXRDQSxLQUFzQztBQUFBLE1BQS9CQyxVQUErQixRQUEvQkEsVUFBK0I7QUFBQSxNQUFuQkMsRUFBbUIsUUFBbkJBLEVBQW1CO0FBQUEsTUFBZkMsU0FBZSxRQUFmQSxTQUFlO0FBQ3JGLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7O0FBQ0EsTUFBTUMsY0FBYyxHQUFFLFNBQWhCQSxjQUFnQixDQUFDQyxLQUFELEVBQVc7QUFDN0JDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZTixTQUFaOztBQUNBLFFBQUdBLFNBQVMsSUFBSUEsU0FBUyxLQUFLLEdBQTlCLEVBQW1DO0FBQ2pDTCxjQUFRLENBQUM7QUFBQ1ksY0FBTSxFQUFFLElBQVQ7QUFBZUMsY0FBTSxFQUFFO0FBQXZCLE9BQUQsQ0FBUjtBQUNEOztBQUNELFFBQUdSLFNBQVMsSUFBSUEsU0FBUyxLQUFLLEdBQTlCLEVBQW1DO0FBQ2pDTCxjQUFRLENBQUM7QUFBQ1ksY0FBTSxFQUFDLEtBQVI7QUFBZUMsY0FBTSxFQUFDO0FBQXRCLE9BQUQsQ0FBUjtBQUNELEtBRkQsTUFHSztBQUNIYixjQUFRLENBQUMsSUFBRCxDQUFSO0FBQ0Q7O0FBQ0RDLFNBQUssQ0FBQ1EsS0FBSyxHQUFDLENBQVAsQ0FBTDtBQUNILEdBWkQ7O0FBYUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsaUJBQWY7QUFBQSw0QkFFQSw4REFBQyxrREFBRDtBQUFjLGlCQUFXLEVBQUVQLEtBQTNCO0FBQWtDLGdCQUFVLEVBQUVDLFVBQTlDO0FBQTBELFFBQUUsRUFBRUMsRUFBOUQ7QUFBa0UsVUFBSSxFQUFFTDtBQUF4RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkEsRUFHR0QsSUFBSSxDQUFDZ0IsR0FBTCxDQUFTLFVBQUNDLENBQUQsRUFBR04sS0FBSDtBQUFBLDBCQUNSO0FBQUssZUFBTyxFQUFFO0FBQUEsaUJBQU1ELGNBQWMsQ0FBQ0MsS0FBRCxDQUFwQjtBQUFBLFNBQWQ7QUFBMkMsbUJBQVNBLEtBQUssR0FBQyxDQUExRDtBQUE2RCxpQkFBUyxFQUFDLGdCQUF2RTtBQUFBLG1CQUVHVixJQUFJLEtBQUssS0FBVCxpQkFBbUI7QUFBSyxhQUFHLEVBQUMsT0FBVDtBQUFpQixtQkFBUyxFQUFDLGNBQTNCO0FBQTBDLGFBQUcsK0JBQXdCVSxLQUFLLEdBQUMsQ0FBOUI7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGdEIsRUFHR1YsSUFBSSxLQUFLLEtBQVQsaUJBQW1CO0FBQUssYUFBRyxFQUFDLE9BQVQ7QUFBaUIsbUJBQVMsRUFBQyxjQUEzQjtBQUEwQyxhQUFHLCtCQUF3QlUsS0FBSyxHQUFDLENBQTlCO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSHRCLGVBSUU7QUFBQSxvQkFBT00sQ0FBQyxDQUFDQztBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkYsRUFLR1YsTUFBTSxDQUFDVyxRQUFQLEtBQWtCLEdBQWxCLGlCQUF5QjtBQUFLLGFBQUcsRUFBQyxPQUFUO0FBQWlCLG1CQUFTLEVBQUMsTUFBM0I7QUFBa0MsYUFBRyxFQUFDO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTDVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURRO0FBQUEsS0FBVCxDQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBZUgsQ0E5QkQ7O0dBQU1wQixXO1VBQ2FVLGtEOzs7S0FEYlYsVztBQStCTiwrREFBZUEsV0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wZmU0N2U0MmE3OGMxYWQyZDM1Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgTW9kYWxTZXJ2aWNlIGZyb20gJy4vTW9kYWxTZXJ2aWNlJ1xyXG5jb25zdCBTZXJ2aWNlTGlzdCA9ICh7bGlzdCwgdHlwZSwgc2V0TW9kYWwsIHNldElkLCBtb2RhbCwgY2xvc2VNb2RhbCwgaWQsIG1vZGFsVHlwZX0pID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCBvblNlcnZpY2VDbGljayA9KGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cobW9kYWxUeXBlKVxyXG4gICAgICAgIGlmKG1vZGFsVHlwZSAmJiBtb2RhbFR5cGUgPT09ICcxJykge1xyXG4gICAgICAgICAgc2V0TW9kYWwoe21vZGFsMTogdHJ1ZSwgbW9kYWwyOiBmYWxzZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKG1vZGFsVHlwZSAmJiBtb2RhbFR5cGUgPT09ICcyJykge1xyXG4gICAgICAgICAgc2V0TW9kYWwoe21vZGFsMTpmYWxzZSwgbW9kYWwyOnRydWV9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIHNldE1vZGFsKHRydWUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldElkKGluZGV4KzEpXHJcbiAgICB9XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlcnZpY2VzLS1saXN0cyc+XHJcbiAgICAgICAgICBcclxuICAgICAgICA8TW9kYWxTZXJ2aWNlIGlzTW9kYWxPcGVuPXttb2RhbH0gY2xvc2VNb2RhbD17Y2xvc2VNb2RhbH0gaWQ9e2lkfSB0eXBlPXt0eXBlfS8+XHJcbiAgICAgICAgICB7bGlzdC5tYXAoKGYsaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBvblNlcnZpY2VDbGljayhpbmRleCl9IGRhdGEtaWQ9e2luZGV4KzF9IGNsYXNzTmFtZT0nc2VydmljZXMtLWxpc3QnPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIHt0eXBlID09PSAnZml6JyAmJiAgPGltZyBhbHQ9J2ltYWdlJyBjbGFzc05hbWU9J3NlcnZpY2VfaWNvbicgc3JjPXtgL2ltZy91c2x1Z2lfbmV3L2ZpeiR7aW5kZXgrMX0uc3ZnYH0gLz59XHJcbiAgICAgICAgICAgICAge3R5cGUgPT09ICdqdXInICYmICA8aW1nIGFsdD0naW1hZ2UnIGNsYXNzTmFtZT0nc2VydmljZV9pY29uJyBzcmM9e2AvaW1nL3VzbHVnaV9uZXcvanVyJHtpbmRleCsxfS5zdmdgfSAvPn1cclxuICAgICAgICAgICAgICA8c3Bhbj57Zi5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICB7cm91dGVyLnBhdGhuYW1lPT09Jy8nICYmIDxpbWcgYWx0PSdpbWFnZScgY2xhc3NOYW1lPSdwYXRoJyBzcmM9Jy9pbWcvdXNsdWdpL2xpbmUuc3ZnJy8+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFNlcnZpY2VMaXN0Il0sInNvdXJjZVJvb3QiOiIifQ==