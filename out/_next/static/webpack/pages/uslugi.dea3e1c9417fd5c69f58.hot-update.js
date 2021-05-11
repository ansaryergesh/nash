self["webpackHotUpdate_N_E"]("pages/uslugi",{

/***/ "./components/shared/ModalService.js":
/*!*******************************************!*\
  !*** ./components/shared/ModalService.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_awesome_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-awesome-modal */ "./node_modules/react-awesome-modal/lib/index.js");
/* harmony import */ var _defaults_fizservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../defaults/fizservice */ "./defaults/fizservice.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\job\\nashcompany\\components\\shared\\ModalService.js",
    _this = undefined;

// import Modal from "../modal/Modal"



var ModalService = function ModalService(_ref) {
  var isModalOpen = _ref.isModalOpen,
      closeModal = _ref.closeModal,
      id = _ref.id,
      type = _ref.type;
  var typeFile = type === 'fiz' ? _defaults_fizservice__WEBPACK_IMPORTED_MODULE_2__.fizservice : _defaults_fizservice__WEBPACK_IMPORTED_MODULE_2__.jurservice;
  var typeText = typeFile.find(function (x) {
    return x.id === id;
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "modalka_block",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "modalka_body",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: "Title"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: typeText
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, _this), id, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: "/img/uslugi/".concat(id, ".svg")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "javascript:void(0);",
          onClick: function onClick() {
            return _this.closeModal();
          },
          children: "Close"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, _this);
};

_c = ModalService;
/* harmony default export */ __webpack_exports__["default"] = (ModalService);

var _c;

$RefreshReg$(_c, "ModalService");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvTW9kYWxTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbIk1vZGFsU2VydmljZSIsImlzTW9kYWxPcGVuIiwiY2xvc2VNb2RhbCIsImlkIiwidHlwZSIsInR5cGVGaWxlIiwiZml6c2VydmljZSIsImp1cnNlcnZpY2UiLCJ0eXBlVGV4dCIsImZpbmQiLCJ4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUF5QztBQUFBLE1BQXZDQyxXQUF1QyxRQUF2Q0EsV0FBdUM7QUFBQSxNQUExQkMsVUFBMEIsUUFBMUJBLFVBQTBCO0FBQUEsTUFBZEMsRUFBYyxRQUFkQSxFQUFjO0FBQUEsTUFBVkMsSUFBVSxRQUFWQSxJQUFVO0FBQzVELE1BQU1DLFFBQVEsR0FBR0QsSUFBSSxLQUFLLEtBQVQsR0FBaUJFLDREQUFqQixHQUE4QkMsNERBQS9DO0FBQ0EsTUFBTUMsUUFBUSxHQUFHSCxRQUFRLENBQUNJLElBQVQsQ0FBYyxVQUFBQyxDQUFDO0FBQUEsV0FBR0EsQ0FBQyxDQUFDUCxFQUFGLEtBQU9BLEVBQVY7QUFBQSxHQUFmLENBQWpCO0FBQ0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFDLGNBQWY7QUFBQSw2QkFHQTtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBQSxvQkFBSUs7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLEVBR0dMLEVBSEgsZUFJRTtBQUFLLGFBQUcsd0JBQWlCQSxFQUFqQjtBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkYsZUFLRTtBQUFHLGNBQUksRUFBQyxxQkFBUjtBQUE4QixpQkFBTyxFQUFFO0FBQUEsbUJBQU0sS0FBSSxDQUFDRCxVQUFMLEVBQU47QUFBQSxXQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZ0JELENBbkJEOztLQUFNRixZO0FBcUJOLCtEQUFlQSxZQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VzbHVnaS5kZWEzZTFjOTQxN2ZkNWM2OWY1OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IE1vZGFsIGZyb20gXCIuLi9tb2RhbC9Nb2RhbFwiXHJcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1hd2Vzb21lLW1vZGFsJ1xyXG5pbXBvcnQge2ZpenNlcnZpY2UsanVyc2VydmljZX0gZnJvbSAnLi4vLi4vZGVmYXVsdHMvZml6c2VydmljZSdcclxuY29uc3QgTW9kYWxTZXJ2aWNlID0gKHtpc01vZGFsT3BlbiwgY2xvc2VNb2RhbCwgaWQsIHR5cGV9KSA9PiB7XHJcbiAgY29uc3QgdHlwZUZpbGUgPSB0eXBlID09PSAnZml6JyA/IGZpenNlcnZpY2UgOiBqdXJzZXJ2aWNlO1xyXG4gIGNvbnN0IHR5cGVUZXh0ID0gdHlwZUZpbGUuZmluZCh4PT4geC5pZD09PWlkKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J21vZGFsa2FfYmxvY2snPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbGthX2JvZHknPlxyXG4gICAgICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aDE+VGl0bGU8L2gxPlxyXG4gICAgICAgICAgPHA+e3R5cGVUZXh0fTwvcD5cclxuICAgICAgICAgIHtpZH1cclxuICAgICAgICAgIDxpbWcgc3JjPXtgL2ltZy91c2x1Z2kvJHtpZH0uc3ZnYH0gLz4gXHJcbiAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIG9uQ2xpY2s9eygpID0+IHRoaXMuY2xvc2VNb2RhbCgpfT5DbG9zZTwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RhbFNlcnZpY2U7Il0sInNvdXJjZVJvb3QiOiIifQ==