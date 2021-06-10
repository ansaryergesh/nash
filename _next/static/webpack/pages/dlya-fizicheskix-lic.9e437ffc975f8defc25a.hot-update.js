self["webpackHotUpdate_N_E"]("pages/dlya-fizicheskix-lic",{

/***/ "./components/shared/CodeModal.js":
/*!****************************************!*\
  !*** ./components/shared/CodeModal.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _defaults_fizservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../defaults/fizservice */ "./defaults/fizservice.js");
/* harmony import */ var _modal_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modal/Modal */ "./components/modal/Modal.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-input-mask */ "./node_modules/react-input-mask/index.js");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\job\\nashcompany\\components\\shared\\CodeModal.js",
    _this = undefined,
    _s = $RefreshSig$();







var CodeModal = function CodeModal(_ref) {
  _s();

  var isModalOpen = _ref.isModalOpen,
      closeModal = _ref.closeModal,
      code = _ref.code,
      setCode = _ref.setCode,
      onFirstStep = _ref.onFirstStep,
      getIdentification = _ref.getIdentification,
      error = _ref.error;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();

  var changeCode = function changeCode(e) {
    setCode(e.target.value);
    var value = e.target.value.replace(/ /g, "");

    if (value.length === 4) {
      setTimeout(function () {
        onFirstStep(e.target.value); // console.log('hello')
      }, 10);
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    if (isModalOpen) {
      var input = document.querySelector(".code_input");
      input.focus();
    }
  }, [isModalOpen]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modal_Modal__WEBPACK_IMPORTED_MODULE_2__.default, {
      isOpen: isModalOpen,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "modalka_content",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: "\u041D\u0430 \u0432\u0430\u0448 \u043D\u043E\u043C\u0435\u0440 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D  4 \u0437\u043D\u0430\u0447\u043D\u044B\u0439 \u043A\u043E\u0434"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
          className: "form_register",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_input_mask__WEBPACK_IMPORTED_MODULE_4___default()), {
            mask: "9999",
            maskChar: null,
            name: "phone",
            type: "tel",
            placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0434",
            onChange: function onChange(e) {
              return changeCode(e);
            },
            value: code,
            className: "my-input code_input"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "danger",
            children: error
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, _this);
};

_s(CodeModal, "vQduR7x+OPXj6PSmJyFnf+hU7bg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];
});

_c = CodeModal;
/* harmony default export */ __webpack_exports__["default"] = (CodeModal);

var _c;

$RefreshReg$(_c, "CodeModal");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvQ29kZU1vZGFsLmpzIl0sIm5hbWVzIjpbIkNvZGVNb2RhbCIsImlzTW9kYWxPcGVuIiwiY2xvc2VNb2RhbCIsImNvZGUiLCJzZXRDb2RlIiwib25GaXJzdFN0ZXAiLCJnZXRJZGVudGlmaWNhdGlvbiIsImVycm9yIiwicm91dGVyIiwidXNlUm91dGVyIiwiY2hhbmdlQ29kZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInJlcGxhY2UiLCJsZW5ndGgiLCJzZXRUaW1lb3V0IiwidXNlRWZmZWN0IiwiaW5wdXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJmb2N1cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQVFaO0FBQUE7O0FBQUEsTUFQSkMsV0FPSSxRQVBKQSxXQU9JO0FBQUEsTUFOSkMsVUFNSSxRQU5KQSxVQU1JO0FBQUEsTUFMSkMsSUFLSSxRQUxKQSxJQUtJO0FBQUEsTUFKSkMsT0FJSSxRQUpKQSxPQUlJO0FBQUEsTUFISkMsV0FHSSxRQUhKQSxXQUdJO0FBQUEsTUFGSkMsaUJBRUksUUFGSkEsaUJBRUk7QUFBQSxNQURKQyxLQUNJLFFBREpBLEtBQ0k7QUFDSixNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCOztBQUVBLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLENBQUQsRUFBTztBQUN4QlAsV0FBTyxDQUFDTyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFQO0FBQ0EsUUFBTUEsS0FBSyxHQUFHRixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVCxDQUFlQyxPQUFmLENBQXVCLElBQXZCLEVBQTRCLEVBQTVCLENBQWQ7O0FBQ0EsUUFBR0QsS0FBSyxDQUFDRSxNQUFOLEtBQWlCLENBQXBCLEVBQXVCO0FBQ3JCQyxnQkFBVSxDQUFDLFlBQU07QUFDZlgsbUJBQVcsQ0FBQ00sQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBWCxDQURlLENBRWY7QUFDRCxPQUhTLEVBR1IsRUFIUSxDQUFWO0FBSUQ7QUFDRixHQVREOztBQVVBSSxrREFBUyxDQUFDLFlBQU07QUFDZCxRQUFHaEIsV0FBSCxFQUFnQjtBQUNkLFVBQU1pQixLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixhQUF2QixDQUFkO0FBQ0FGLFdBQUssQ0FBQ0csS0FBTjtBQUNEO0FBQ0YsR0FMUSxFQUtOLENBQUNwQixXQUFELENBTE0sQ0FBVDtBQU1BLHNCQUNFO0FBQUEsMkJBQ0UsOERBQUMsaURBQUQ7QUFBTyxZQUFNLEVBQUVBLFdBQWY7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsaUJBQWY7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQU0sbUJBQVMsRUFBQyxlQUFoQjtBQUFBLGtDQUVFLDhEQUFDLHlEQUFEO0FBQ0UsZ0JBQUksRUFBQyxNQURQO0FBRUUsb0JBQVEsRUFBRSxJQUZaO0FBR0UsZ0JBQUksRUFBQyxPQUhQO0FBSUUsZ0JBQUksRUFBQyxLQUpQO0FBS0UsdUJBQVcsRUFBQywrREFMZDtBQU1FLG9CQUFRLEVBQUUsa0JBQUFVLENBQUM7QUFBQSxxQkFBSUQsVUFBVSxDQUFDQyxDQUFELENBQWQ7QUFBQSxhQU5iO0FBT0UsaUJBQUssRUFBRVIsSUFQVDtBQVFFLHFCQUFTLEVBQUM7QUFSWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBV0k7QUFBRyxxQkFBUyxFQUFDLFFBQWI7QUFBQSxzQkFBdUJJO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEyQkQsQ0F0REQ7O0dBQU1QLFM7VUFTV1Msa0Q7OztLQVRYVCxTO0FBd0ROLCtEQUFlQSxTQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RseWEtZml6aWNoZXNraXgtbGljLjllNDM3ZmZjOTc1ZjhkZWZjMjVhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2ZpenNlcnZpY2UsIGp1cnNlcnZpY2V9IGZyb20gXCIuLi8uLi9kZWZhdWx0cy9maXpzZXJ2aWNlXCI7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwiLi4vbW9kYWwvTW9kYWxcIlxyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBJbnB1dE1hc2sgZnJvbSAncmVhY3QtaW5wdXQtbWFzaydcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmNvbnN0IENvZGVNb2RhbCA9ICh7XHJcbiAgaXNNb2RhbE9wZW4sXHJcbiAgY2xvc2VNb2RhbCxcclxuICBjb2RlLFxyXG4gIHNldENvZGUsXHJcbiAgb25GaXJzdFN0ZXAsXHJcbiAgZ2V0SWRlbnRpZmljYXRpb24sXHJcbiAgZXJyb3JcclxufSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gIGNvbnN0IGNoYW5nZUNvZGUgPSAoZSkgPT4ge1xyXG4gICAgc2V0Q29kZShlLnRhcmdldC52YWx1ZSlcclxuICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWUucmVwbGFjZSgvIC9nLFwiXCIpXHJcbiAgICBpZih2YWx1ZS5sZW5ndGggPT09IDQpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgb25GaXJzdFN0ZXAoZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2hlbGxvJylcclxuICAgICAgfSwxMClcclxuICAgIH1cclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmKGlzTW9kYWxPcGVuKSB7XHJcbiAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb2RlX2lucHV0XCIpO1xyXG4gICAgICBpbnB1dC5mb2N1cygpXHJcbiAgICB9XHJcbiAgfSwgW2lzTW9kYWxPcGVuXSlcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPE1vZGFsIGlzT3Blbj17aXNNb2RhbE9wZW59PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbGthX2NvbnRlbnQnPlxyXG4gICAgICAgICAgPGgzPtCd0LAg0LLQsNGIINC90L7QvNC10YAg0L7RgtC/0YDQsNCy0LvQtdC9ICA0INC30L3QsNGH0L3Ri9C5INC60L7QtDwvaDM+XHJcbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9J2Zvcm1fcmVnaXN0ZXInPlxyXG4gICAgICAgICAgICB7LyogPHNwYW4gb25DbGljaz17KCkgPT4gY2xvc2VNb2RhbCgpfSBjbGFzc05hbWU9J2Nsb3NlYnRuJz7inJY8L3NwYW4+ICovfVxyXG4gICAgICAgICAgICA8SW5wdXRNYXNrXHJcbiAgICAgICAgICAgICAgbWFzaz1cIjk5OTlcIlxyXG4gICAgICAgICAgICAgIG1hc2tDaGFyPXtudWxsfVxyXG4gICAgICAgICAgICAgIG5hbWU9J3Bob25lJ1xyXG4gICAgICAgICAgICAgIHR5cGU9J3RlbCdcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0n0JLQstC10LTQuNGC0LUg0LrQvtC0J1xyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IGNoYW5nZUNvZGUoZSl9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2NvZGV9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXktaW5wdXQgY29kZV9pbnB1dFwiLz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2Rhbmdlcic+e2Vycm9yfTwvcD5cclxuICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICB7LyogPGEgaHJlZj0nL2RseWEtZml6aWNoZXNraXgtbGljJyBvbkNsaWNrPXsoKSA9PiBvbkZpcnN0U3RlcCgpfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J1dHRvbic+0J7RgtC/0YDQsNCy0LjRgtGMINC60L7QtDwvZGl2PlxyXG4gICAgICAgICAgPC9hPiAqL31cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvZGVNb2RhbDsiXSwic291cmNlUm9vdCI6IiJ9