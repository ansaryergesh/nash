self["webpackHotUpdate_N_E"]("pages/getservice",{

/***/ "./components/shared/CodeModal.js":
/*!****************************************!*\
  !*** ./components/shared/CodeModal.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _defaults_fizservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../defaults/fizservice */ "./defaults/fizservice.js");
/* harmony import */ var _modal_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal/Modal */ "./components/modal/Modal.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-input-mask */ "./node_modules/react-input-mask/index.js");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "E:\\job\\nashcompany\\components\\shared\\CodeModal.js",
    _this = undefined,
    _s = $RefreshSig$();







var CodeModal = function CodeModal(_ref) {
  _s();

  var _jsxDEV2;

  var isModalOpen = _ref.isModalOpen,
      closeModal = _ref.closeModal,
      code = _ref.code,
      setCode = _ref.setCode,
      onFirstStep = _ref.onFirstStep,
      getIdentification = _ref.getIdentification,
      error = _ref.error;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();

  var changeCode = function changeCode(e) {
    setCode(e.target.value);
    var value = e.target.value.replace(/ /g, "");

    if (value.length === 4) {
      setTimeout(function () {
        onFirstStep(e.target.value); // console.log('hello')
      }, 10);
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {
    if (isModalOpen) {
      var input = document.querySelector(".code_input");
      input.focus();
    }
  }, [isModalOpen]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_modal_Modal__WEBPACK_IMPORTED_MODULE_3__.default, {
      isOpen: isModalOpen,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "modalka_content",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
          children: "\u041D\u0430 \u0432\u0430\u0448 \u043D\u043E\u043C\u0435\u0440 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D  4 \u0437\u043D\u0430\u0447\u043D\u044B\u0439 \u043A\u043E\u0434"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("form", {
          className: "form_register",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
            onClick: function onClick() {
              return closeModal();
            },
            className: "closebtn",
            children: "\u2716"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react_input_mask__WEBPACK_IMPORTED_MODULE_5___default()), {
            mask: "9999",
            maskChar: " ",
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
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
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
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", (_jsxDEV2 = {
          className: "singlebtn",
          type: "submit",
          onClick: function onClick(values) {
            return getIdentification(values);
          }
        }, (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_jsxDEV2, "className", "button button--light"), (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_jsxDEV2, "value", "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u0434 \u0437\u0430\u043D\u043E\u0432\u043E"), _jsxDEV2), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
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
  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvQ29kZU1vZGFsLmpzIl0sIm5hbWVzIjpbIkNvZGVNb2RhbCIsImlzTW9kYWxPcGVuIiwiY2xvc2VNb2RhbCIsImNvZGUiLCJzZXRDb2RlIiwib25GaXJzdFN0ZXAiLCJnZXRJZGVudGlmaWNhdGlvbiIsImVycm9yIiwicm91dGVyIiwidXNlUm91dGVyIiwiY2hhbmdlQ29kZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInJlcGxhY2UiLCJsZW5ndGgiLCJzZXRUaW1lb3V0IiwidXNlRWZmZWN0IiwiaW5wdXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJmb2N1cyIsInZhbHVlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BUVo7QUFBQTs7QUFBQTs7QUFBQSxNQVBKQyxXQU9JLFFBUEpBLFdBT0k7QUFBQSxNQU5KQyxVQU1JLFFBTkpBLFVBTUk7QUFBQSxNQUxKQyxJQUtJLFFBTEpBLElBS0k7QUFBQSxNQUpKQyxPQUlJLFFBSkpBLE9BSUk7QUFBQSxNQUhKQyxXQUdJLFFBSEpBLFdBR0k7QUFBQSxNQUZKQyxpQkFFSSxRQUZKQSxpQkFFSTtBQUFBLE1BREpDLEtBQ0ksUUFESkEsS0FDSTtBQUNKLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7O0FBRUEsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3hCUCxXQUFPLENBQUNPLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVA7QUFDQSxRQUFNQSxLQUFLLEdBQUdGLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFULENBQWVDLE9BQWYsQ0FBdUIsSUFBdkIsRUFBNEIsRUFBNUIsQ0FBZDs7QUFDQSxRQUFHRCxLQUFLLENBQUNFLE1BQU4sS0FBaUIsQ0FBcEIsRUFBdUI7QUFDckJDLGdCQUFVLENBQUMsWUFBTTtBQUNmWCxtQkFBVyxDQUFDTSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFYLENBRGUsQ0FFZjtBQUNELE9BSFMsRUFHUixFQUhRLENBQVY7QUFJRDtBQUNGLEdBVEQ7O0FBVUFJLGtEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUdoQixXQUFILEVBQWdCO0FBQ2QsVUFBTWlCLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLGFBQXZCLENBQWQ7QUFDQUYsV0FBSyxDQUFDRyxLQUFOO0FBQ0Q7QUFDRixHQUxRLEVBS04sQ0FBQ3BCLFdBQUQsQ0FMTSxDQUFUO0FBTUEsc0JBQ0U7QUFBQSwyQkFDRSw4REFBQyxpREFBRDtBQUFPLFlBQU0sRUFBRUEsV0FBZjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxpQkFBZjtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBTSxtQkFBUyxFQUFDLGVBQWhCO0FBQUEsa0NBQ0U7QUFBTSxtQkFBTyxFQUFFO0FBQUEscUJBQU1DLFVBQVUsRUFBaEI7QUFBQSxhQUFmO0FBQW1DLHFCQUFTLEVBQUMsVUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRSw4REFBQyx5REFBRDtBQUNFLGdCQUFJLEVBQUMsTUFEUDtBQUVFLG9CQUFRLEVBQUMsR0FGWDtBQUdFLGdCQUFJLEVBQUMsT0FIUDtBQUlFLGdCQUFJLEVBQUMsS0FKUDtBQUtFLHVCQUFXLEVBQUMsK0RBTGQ7QUFNRSxvQkFBUSxFQUFFLGtCQUFBUyxDQUFDO0FBQUEscUJBQUlELFVBQVUsQ0FBQ0MsQ0FBRCxDQUFkO0FBQUEsYUFOYjtBQU9FLGlCQUFLLEVBQUVSLElBUFQ7QUFRRSxxQkFBUyxFQUFDO0FBUlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQVdJO0FBQUcscUJBQVMsRUFBQyxRQUFiO0FBQUEsc0JBQXVCSTtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQW9CRTtBQUNBLG1CQUFTLEVBQUMsV0FEVjtBQUVBLGNBQUksRUFBQyxRQUZMO0FBR0EsaUJBQU8sRUFBRSxpQkFBQ2UsTUFBRDtBQUFBLG1CQUFZaEIsaUJBQWlCLENBQUNnQixNQUFELENBQTdCO0FBQUE7QUFIVCxtSkFJVSxzQkFKVix1SUFLTSxnSEFMTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBaUNELENBNUREOztHQUFNdEIsUztVQVNXUyxrRDs7O0tBVFhULFM7QUE4RE4sK0RBQWVBLFNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ2V0c2VydmljZS41MzhiMTY3NzU0YzkzNTUzYzIwZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtmaXpzZXJ2aWNlLCBqdXJzZXJ2aWNlfSBmcm9tIFwiLi4vLi4vZGVmYXVsdHMvZml6c2VydmljZVwiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4uL21vZGFsL01vZGFsXCJcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgSW5wdXRNYXNrIGZyb20gJ3JlYWN0LWlucHV0LW1hc2snXHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5jb25zdCBDb2RlTW9kYWwgPSAoe1xyXG4gIGlzTW9kYWxPcGVuLFxyXG4gIGNsb3NlTW9kYWwsXHJcbiAgY29kZSxcclxuICBzZXRDb2RlLFxyXG4gIG9uRmlyc3RTdGVwLFxyXG4gIGdldElkZW50aWZpY2F0aW9uLFxyXG4gIGVycm9yXHJcbn0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICBjb25zdCBjaGFuZ2VDb2RlID0gKGUpID0+IHtcclxuICAgIHNldENvZGUoZS50YXJnZXQudmFsdWUpXHJcbiAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlLnJlcGxhY2UoLyAvZyxcIlwiKVxyXG4gICAgaWYodmFsdWUubGVuZ3RoID09PSA0KSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIG9uRmlyc3RTdGVwKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdoZWxsbycpXHJcbiAgICAgIH0sMTApXHJcbiAgICB9XHJcbiAgfVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZihpc01vZGFsT3Blbikge1xyXG4gICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29kZV9pbnB1dFwiKTtcclxuICAgICAgaW5wdXQuZm9jdXMoKVxyXG4gICAgfVxyXG4gIH0sIFtpc01vZGFsT3Blbl0pXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxNb2RhbCBpc09wZW49e2lzTW9kYWxPcGVufT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kYWxrYV9jb250ZW50Jz5cclxuICAgICAgICAgIDxoMz7QndCwINCy0LDRiCDQvdC+0LzQtdGAINC+0YLQv9GA0LDQstC70LXQvSAgNCDQt9C90LDRh9C90YvQuSDQutC+0LQ8L2gzPlxyXG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPSdmb3JtX3JlZ2lzdGVyJz5cclxuICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4gY2xvc2VNb2RhbCgpfSBjbGFzc05hbWU9J2Nsb3NlYnRuJz7inJY8L3NwYW4+XHJcbiAgICAgICAgICAgIDxJbnB1dE1hc2tcclxuICAgICAgICAgICAgICBtYXNrPVwiOTk5OVwiXHJcbiAgICAgICAgICAgICAgbWFza0NoYXI9XCIgXCJcclxuICAgICAgICAgICAgICBuYW1lPSdwaG9uZSdcclxuICAgICAgICAgICAgICB0eXBlPSd0ZWwnXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J9CS0LLQtdC00LjRgtC1INC60L7QtCdcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBjaGFuZ2VDb2RlKGUpfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtjb2RlfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm15LWlucHV0IGNvZGVfaW5wdXRcIi8+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdkYW5nZXInPntlcnJvcn08L3A+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgICAgey8qIDxhIGhyZWY9Jy9nZXRzZXJ2aWNlJyBvbkNsaWNrPXsoKSA9PiBvbkZpcnN0U3RlcCgpfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J1dHRvbic+0J7RgtC/0YDQsNCy0LjRgtGMINC60L7QtDwvZGl2PlxyXG4gICAgICAgICAgPC9hPiAqL31cclxuXHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGNsYXNzTmFtZT0nc2luZ2xlYnRuJ1xyXG4gICAgICAgICAgdHlwZT0nc3VibWl0J1xyXG4gICAgICAgICAgb25DbGljaz17KHZhbHVlcykgPT4gZ2V0SWRlbnRpZmljYXRpb24odmFsdWVzKX1cclxuICAgICAgICAgIGNsYXNzTmFtZT0nYnV0dG9uIGJ1dHRvbi0tbGlnaHQnXHJcbiAgICAgICAgICB2YWx1ZT0n0J7RgtC/0YDQsNCy0LjRgtGMINC60L7QtCDQt9Cw0L3QvtCy0L4nLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29kZU1vZGFsOyJdLCJzb3VyY2VSb290IjoiIn0=