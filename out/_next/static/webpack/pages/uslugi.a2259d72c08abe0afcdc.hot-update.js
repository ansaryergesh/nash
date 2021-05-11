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
/* harmony import */ var _defaults_fizservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../defaults/fizservice */ "./defaults/fizservice.js");
/* harmony import */ var _modal_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modal/Modal */ "./components/modal/Modal.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\job\\nashcompany\\components\\shared\\ModalService.js",
    _this = undefined;




var ModalService = function ModalService(_ref) {
  var isModalOpen = _ref.isModalOpen,
      closeModal = _ref.closeModal,
      id = _ref.id,
      type = _ref.type;
  var typeFile = type === 'fiz' ? _defaults_fizservice__WEBPACK_IMPORTED_MODULE_1__.fizservice : _defaults_fizservice__WEBPACK_IMPORTED_MODULE_1__.jurservice;
  var typeText = typeFile.find(function (x) {
    return x.id == id;
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modal_Modal__WEBPACK_IMPORTED_MODULE_2__.default, {
      isOpen: isModalOpen,
      onClose: function onClose() {
        return closeModal();
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "modalka_content",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: typeText.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 13
        }, _this), type === 'fiz' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: "/img/uslugi/".concat(id, ".svg")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 13
        }, _this), type === 'jur' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: "/img/uslugi/yur".concat(id, ".svg")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvTW9kYWxTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbIk1vZGFsU2VydmljZSIsImlzTW9kYWxPcGVuIiwiY2xvc2VNb2RhbCIsImlkIiwidHlwZSIsInR5cGVGaWxlIiwiZml6c2VydmljZSIsImp1cnNlcnZpY2UiLCJ0eXBlVGV4dCIsImZpbmQiLCJ4IiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQXlDO0FBQUEsTUFBdkNDLFdBQXVDLFFBQXZDQSxXQUF1QztBQUFBLE1BQTFCQyxVQUEwQixRQUExQkEsVUFBMEI7QUFBQSxNQUFkQyxFQUFjLFFBQWRBLEVBQWM7QUFBQSxNQUFWQyxJQUFVLFFBQVZBLElBQVU7QUFDMUQsTUFBTUMsUUFBUSxHQUFHRCxJQUFJLEtBQUcsS0FBUCxHQUFlRSw0REFBZixHQUE0QkMsNERBQTdDO0FBQ0EsTUFBTUMsUUFBUSxHQUFHSCxRQUFRLENBQUNJLElBQVQsQ0FBYyxVQUFBQyxDQUFDO0FBQUEsV0FBRUEsQ0FBQyxDQUFDUCxFQUFGLElBQU1BLEVBQVI7QUFBQSxHQUFmLENBQWpCO0FBQ0Esc0JBQ0E7QUFBQSwyQkFDRSw4REFBQyxpREFBRDtBQUFPLFlBQU0sRUFBRUYsV0FBZjtBQUE0QixhQUFPLEVBQUU7QUFBQSxlQUFLQyxVQUFVLEVBQWY7QUFBQSxPQUFyQztBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBQyxpQkFBZjtBQUFBLGdDQUVFO0FBQUEsb0JBQUtNLFFBQVEsQ0FBQ0c7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLEVBR0dQLElBQUksS0FBRyxLQUFQLGlCQUNEO0FBQUssYUFBRyx3QkFBaUJELEVBQWpCO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRixFQUtHQyxJQUFJLEtBQUcsS0FBUCxpQkFDRDtBQUFLLGFBQUcsMkJBQW9CRCxFQUFwQjtBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEQTtBQWVILENBbEJEOztLQUFNSCxZO0FBb0JOLCtEQUFlQSxZQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VzbHVnaS5hMjI1OWQ3MmMwOGFiZTBhZmNkYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZml6c2VydmljZSwganVyc2VydmljZSB9IGZyb20gXCIuLi8uLi9kZWZhdWx0cy9maXpzZXJ2aWNlXCI7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwiLi4vbW9kYWwvTW9kYWxcIlxyXG5cclxuY29uc3QgTW9kYWxTZXJ2aWNlID0gKHtpc01vZGFsT3BlbiwgY2xvc2VNb2RhbCwgaWQsIHR5cGV9KSA9PiB7XHJcbiAgICBjb25zdCB0eXBlRmlsZSA9IHR5cGU9PT0nZml6JyA/IGZpenNlcnZpY2UgOiBqdXJzZXJ2aWNlXHJcbiAgICBjb25zdCB0eXBlVGV4dCA9IHR5cGVGaWxlLmZpbmQoeD0+eC5pZD09aWQpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPE1vZGFsIGlzT3Blbj17aXNNb2RhbE9wZW59IG9uQ2xvc2U9eygpID0+Y2xvc2VNb2RhbCgpfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbGthX2NvbnRlbnQnPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGgyPnt0eXBlVGV4dC5uYW1lfTwvaDI+XHJcbiAgICAgICAgICAgIHt0eXBlPT09J2ZpeicgJiYgXHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtgL2ltZy91c2x1Z2kvJHtpZH0uc3ZnYH0gLz59XHJcbiAgICAgICAgICAgIHt0eXBlPT09J2p1cicgJiYgXHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtgL2ltZy91c2x1Z2kveXVyJHtpZH0uc3ZnYH0gLz59XHJcbiAgICAgICAgICAgIHsvKiB7YCR7dHlwZUZpbGV9YH0gKi99XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWxTZXJ2aWNlOyJdLCJzb3VyY2VSb290IjoiIn0=