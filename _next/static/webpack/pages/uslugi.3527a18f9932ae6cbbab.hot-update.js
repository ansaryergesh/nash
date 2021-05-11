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
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_awesome_modal__WEBPACK_IMPORTED_MODULE_1__.default, {
      className: "modalka",
      visible: isModalOpen,
      width: "400",
      height: "300",
      effect: "fadeInUp",
      onClickAway: function onClickAway() {
        return closeModal();
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: "Title"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: typeText
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, _this), id, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: "/img/uslugi/".concat(id, ".svg")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "javascript:void(0);",
          onClick: function onClick() {
            return _this.closeModal();
          },
          children: "Close"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvTW9kYWxTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbIk1vZGFsU2VydmljZSIsImlzTW9kYWxPcGVuIiwiY2xvc2VNb2RhbCIsImlkIiwidHlwZSIsInR5cGVGaWxlIiwiZml6c2VydmljZSIsImp1cnNlcnZpY2UiLCJ0eXBlVGV4dCIsImZpbmQiLCJ4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUF5QztBQUFBLE1BQXZDQyxXQUF1QyxRQUF2Q0EsV0FBdUM7QUFBQSxNQUExQkMsVUFBMEIsUUFBMUJBLFVBQTBCO0FBQUEsTUFBZEMsRUFBYyxRQUFkQSxFQUFjO0FBQUEsTUFBVkMsSUFBVSxRQUFWQSxJQUFVO0FBQzVELE1BQU1DLFFBQVEsR0FBR0QsSUFBSSxLQUFLLEtBQVQsR0FBaUJFLDREQUFqQixHQUE4QkMsNERBQS9DO0FBQ0EsTUFBTUMsUUFBUSxHQUFHSCxRQUFRLENBQUNJLElBQVQsQ0FBYyxVQUFBQyxDQUFDO0FBQUEsV0FBR0EsQ0FBQyxDQUFDUCxFQUFGLEtBQU9BLEVBQVY7QUFBQSxHQUFmLENBQWpCO0FBQ0Esc0JBQ0U7QUFBQSwyQkFFRSw4REFBQyx3REFBRDtBQUNFLGVBQVMsRUFBQyxTQURaO0FBRUUsYUFBTyxFQUFFRixXQUZYO0FBR0UsV0FBSyxFQUFDLEtBSFI7QUFJRSxZQUFNLEVBQUMsS0FKVDtBQUtFLFlBQU0sRUFBQyxVQUxUO0FBTUUsaUJBQVcsRUFBRTtBQUFBLGVBQU1DLFVBQVUsRUFBaEI7QUFBQSxPQU5mO0FBQUEsNkJBT0U7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUEsb0JBQUlNO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixFQUdHTCxFQUhILGVBSUU7QUFBSyxhQUFHLHdCQUFpQkEsRUFBakI7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGLGVBS0U7QUFBRyxjQUFJLEVBQUMscUJBQVI7QUFBOEIsaUJBQU8sRUFBRTtBQUFBLG1CQUFNLEtBQUksQ0FBQ0QsVUFBTCxFQUFOO0FBQUEsV0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW9CRCxDQXZCRDs7S0FBTUYsWTtBQXlCTiwrREFBZUEsWUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91c2x1Z2kuMzUyN2ExOGY5OTMyYWU2Y2JiYWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBNb2RhbCBmcm9tIFwiLi4vbW9kYWwvTW9kYWxcIlxyXG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtYXdlc29tZS1tb2RhbCdcclxuaW1wb3J0IHtmaXpzZXJ2aWNlLGp1cnNlcnZpY2V9IGZyb20gJy4uLy4uL2RlZmF1bHRzL2ZpenNlcnZpY2UnXHJcbmNvbnN0IE1vZGFsU2VydmljZSA9ICh7aXNNb2RhbE9wZW4sIGNsb3NlTW9kYWwsIGlkLCB0eXBlfSkgPT4ge1xyXG4gIGNvbnN0IHR5cGVGaWxlID0gdHlwZSA9PT0gJ2ZpeicgPyBmaXpzZXJ2aWNlIDoganVyc2VydmljZTtcclxuICBjb25zdCB0eXBlVGV4dCA9IHR5cGVGaWxlLmZpbmQoeD0+IHguaWQ9PT1pZCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgXHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIGNsYXNzTmFtZT0nbW9kYWxrYSdcclxuICAgICAgICB2aXNpYmxlPXtpc01vZGFsT3Blbn1cclxuICAgICAgICB3aWR0aD1cIjQwMFwiXHJcbiAgICAgICAgaGVpZ2h0PVwiMzAwXCJcclxuICAgICAgICBlZmZlY3Q9XCJmYWRlSW5VcFwiXHJcbiAgICAgICAgb25DbGlja0F3YXk9eygpID0+IGNsb3NlTW9kYWwoKX0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoMT5UaXRsZTwvaDE+XHJcbiAgICAgICAgICA8cD57dHlwZVRleHR9PC9wPlxyXG4gICAgICAgICAge2lkfVxyXG4gICAgICAgICAgPGltZyBzcmM9e2AvaW1nL3VzbHVnaS8ke2lkfS5zdmdgfSAvPiBcclxuICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgb25DbGljaz17KCkgPT4gdGhpcy5jbG9zZU1vZGFsKCl9PkNsb3NlPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RhbFNlcnZpY2U7Il0sInNvdXJjZVJvb3QiOiIifQ==