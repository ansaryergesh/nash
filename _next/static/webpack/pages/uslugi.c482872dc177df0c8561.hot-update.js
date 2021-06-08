self["webpackHotUpdate_N_E"]("pages/uslugi",{

/***/ "./pages/uslugi.js":
/*!*************************!*\
  !*** ./pages/uslugi.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_shared_ModalService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/shared/ModalService */ "./components/shared/ModalService.js");
/* harmony import */ var _components_shared_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/shared/Nav */ "./components/shared/Nav.js");
/* harmony import */ var _components_shared_ServiceList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/shared/ServiceList */ "./components/shared/ServiceList.js");
/* harmony import */ var _defaults_fizservice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../defaults/fizservice */ "./defaults/fizservice.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\job\\nashcompany\\pages\\uslugi.js",
    _this = undefined,
    _s = $RefreshSig$();








var Uslugi = function Uslugi() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      modal = _useState[0],
      setModal = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      modal2 = _useState2[0],
      setModal2 = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),
      id = _useState3[0],
      setId = _useState3[1];

  var modalChange = function modalChange(type) {
    console.log(type);

    if (type === 'fiz') {
      console.log('1');
      setModal(true);
      setModal2(false);
    }

    if (type === 'jur') {
      setModal2(true);
      setModal(false);
    }
  };

  var closeModal = function closeModal() {
    setModal(false);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "uslugi",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "\u0423\u0441\u043B\u0443\u0433\u0438"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "header",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "bg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Nav__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "header--content",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: ["\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, _this), "\u0443\u0441\u043B\u0443\u0433\u0443:"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "content_buttons",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "/dlya-fizicheskix-lic",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              className: "button",
              value: "\u0424\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043B\u0438\u0446\u0430",
              type: "button"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 43
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "/jurservice",
            children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              className: "button button--light",
              value: "\u042E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043B\u0438\u0446\u0430",
              type: "button"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 34
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "uslugi--list container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "services",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: "\u0423\u0441\u043B\u0443\u0433\u0438 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u043B\u0438\u0446\u0430\u043C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_ServiceList__WEBPACK_IMPORTED_MODULE_4__.default, {
          modalType: "1",
          modal: modal,
          closeModal: closeModal,
          id: id,
          setType: 'fiz',
          list: _defaults_fizservice__WEBPACK_IMPORTED_MODULE_5__.fizservice,
          type: "fiz",
          setModal: modalChange,
          setId: setId
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: "\u0423\u0441\u043B\u0443\u0433\u0438 \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u043B\u0438\u0446\u0430\u043C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_ServiceList__WEBPACK_IMPORTED_MODULE_4__.default, {
          modalType: "2",
          modal: modal2,
          closeModal: closeModal,
          id: id,
          setType: 'jur',
          list: _defaults_fizservice__WEBPACK_IMPORTED_MODULE_5__.jurservice,
          type: "jur",
          setModal: modalChange,
          setId: setId
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, _this);
};

_s(Uslugi, "LBmG2H/8jcLPxYMhizeg4raqZ8E=");

_c = Uslugi;
/* harmony default export */ __webpack_exports__["default"] = (Uslugi);

var _c;

$RefreshReg$(_c, "Uslugi");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNsdWdpLmpzIl0sIm5hbWVzIjpbIlVzbHVnaSIsInVzZVN0YXRlIiwibW9kYWwiLCJzZXRNb2RhbCIsIm1vZGFsMiIsInNldE1vZGFsMiIsImlkIiwic2V0SWQiLCJtb2RhbENoYW5nZSIsInR5cGUiLCJjb25zb2xlIiwibG9nIiwiY2xvc2VNb2RhbCIsImZpenNlcnZpY2UiLCJqdXJzZXJ2aWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLGtCQUVMQywrQ0FBUSxDQUFDLEtBQUQsQ0FGSDtBQUFBLE1BQ1pDLEtBRFk7QUFBQSxNQUVqQkMsUUFGaUI7O0FBQUEsbUJBR1FGLCtDQUFRLENBQUMsS0FBRCxDQUhoQjtBQUFBLE1BR1pHLE1BSFk7QUFBQSxNQUdMQyxTQUhLOztBQUFBLG1CQUtSSiwrQ0FBUSxFQUxBO0FBQUEsTUFJWkssRUFKWTtBQUFBLE1BS2pCQyxLQUxpQjs7QUFPbkIsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsSUFBRCxFQUFVO0FBQzVCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjs7QUFDQSxRQUFHQSxJQUFJLEtBQUssS0FBWixFQUFtQjtBQUNqQkMsYUFBTyxDQUFDQyxHQUFSLENBQVksR0FBWjtBQUNBUixjQUFRLENBQUMsSUFBRCxDQUFSO0FBQ0FFLGVBQVMsQ0FBQyxLQUFELENBQVQ7QUFDRDs7QUFDRCxRQUFHSSxJQUFJLEtBQUcsS0FBVixFQUFpQjtBQUNmSixlQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0FGLGNBQVEsQ0FBQyxLQUFELENBQVI7QUFDRDtBQUNGLEdBWEQ7O0FBWUEsTUFBTVMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2QlQsWUFBUSxDQUFDLEtBQUQsQ0FBUjtBQUNELEdBRkQ7O0FBR0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUMsUUFBZjtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFPRTtBQUFLLGVBQVMsRUFBQyxRQUFmO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUUsOERBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBR0U7QUFBSyxpQkFBUyxFQUFDLGlCQUFmO0FBQUEsZ0NBQ0U7QUFBQSxzRkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUdFO0FBQUssbUJBQVMsRUFBQyxpQkFBZjtBQUFBLGtDQUNBO0FBQUcsZ0JBQUksRUFBQyx1QkFBUjtBQUFBLG1DQUFnQztBQUFPLHVCQUFTLEVBQUMsUUFBakI7QUFBMEIsbUJBQUssRUFBQyx1RkFBaEM7QUFBa0Qsa0JBQUksRUFBQztBQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREEsZUFFQTtBQUFHLGdCQUFJLEVBQUMsYUFBUjtBQUFBLHlDQUF1QjtBQUFPLHVCQUFTLEVBQUMsc0JBQWpCO0FBQXdDLG1CQUFLLEVBQUMsNkZBQTlDO0FBQWlFLGtCQUFJLEVBQUM7QUFBdEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRixlQW1CRTtBQUFLLGVBQVMsRUFBQyx3QkFBZjtBQUFBLDZCQUVFO0FBQUssaUJBQVMsRUFBQyxVQUFmO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRSw4REFBQyxtRUFBRDtBQUFhLG1CQUFTLEVBQUMsR0FBdkI7QUFBMkIsZUFBSyxFQUFFRCxLQUFsQztBQUF5QyxvQkFBVSxFQUFFVSxVQUFyRDtBQUFpRSxZQUFFLEVBQUVOLEVBQXJFO0FBQXlFLGlCQUFPLEVBQUUsS0FBbEY7QUFBeUYsY0FBSSxFQUFFTyw0REFBL0Y7QUFBMkcsY0FBSSxFQUFDLEtBQWhIO0FBQXNILGtCQUFRLEVBQUVMLFdBQWhJO0FBQTZJLGVBQUssRUFBRUQ7QUFBcEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGLGVBS0UsOERBQUMsbUVBQUQ7QUFBYSxtQkFBUyxFQUFDLEdBQXZCO0FBQTJCLGVBQUssRUFBRUgsTUFBbEM7QUFBMEMsb0JBQVUsRUFBRVEsVUFBdEQ7QUFBa0UsWUFBRSxFQUFFTixFQUF0RTtBQUEwRSxpQkFBTyxFQUFFLEtBQW5GO0FBQTBGLGNBQUksRUFBRVEsNERBQWhHO0FBQTRHLGNBQUksRUFBQyxLQUFqSDtBQUF1SCxrQkFBUSxFQUFFTixXQUFqSTtBQUE4SSxlQUFLLEVBQUVEO0FBQXJKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWdDRCxDQXRERDs7R0FBTVAsTTs7S0FBQUEsTTtBQXdETiwrREFBZUEsTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91c2x1Z2kuYzQ4Mjg3MmRjMTc3ZGYwYzg1NjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBNb2RhbFNlcnZpY2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvc2hhcmVkL01vZGFsU2VydmljZVwiXHJcbmltcG9ydCBOYXYgZnJvbSBcIi4uL2NvbXBvbmVudHMvc2hhcmVkL05hdlwiXHJcbmltcG9ydCBTZXJ2aWNlTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9zaGFyZWQvU2VydmljZUxpc3RcIlxyXG5pbXBvcnQge2ZpenNlcnZpY2UsIGp1cnNlcnZpY2V9IGZyb20gXCIuLi9kZWZhdWx0cy9maXpzZXJ2aWNlXCJcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5jb25zdCBVc2x1Z2kgPSAoKSA9PiB7XHJcbiAgY29uc3QgW21vZGFsLFxyXG4gICAgc2V0TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW21vZGFsMixzZXRNb2RhbDJdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2lkLFxyXG4gICAgc2V0SWRdID0gdXNlU3RhdGUoKVxyXG4gIFxyXG4gIGNvbnN0IG1vZGFsQ2hhbmdlID0gKHR5cGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHR5cGUpXHJcbiAgICBpZih0eXBlID09PSAnZml6Jykge1xyXG4gICAgICBjb25zb2xlLmxvZygnMScpXHJcbiAgICAgIHNldE1vZGFsKHRydWUpXHJcbiAgICAgIHNldE1vZGFsMihmYWxzZSlcclxuICAgIH1cclxuICAgIGlmKHR5cGU9PT0nanVyJykge1xyXG4gICAgICBzZXRNb2RhbDIodHJ1ZSlcclxuICAgICAgc2V0TW9kYWwoZmFsc2UpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRNb2RhbChmYWxzZSlcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSd1c2x1Z2knPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+XHJcbiAgICAgICAgICDQo9GB0LvRg9Cz0LhcclxuICAgICAgICA8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIHsvKiA8TW9kYWxTZXJ2aWNlIGlzTW9kYWxPcGVuPXttb2RhbH0gY2xvc2VNb2RhbD17Y2xvc2VNb2RhbH0gaWQ9e2lkfSB0eXBlPSdmaXonLz4gKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXInPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZyc+PC9kaXY+XHJcbiAgICAgICAgPE5hdi8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hlYWRlci0tY29udGVudCc+XHJcbiAgICAgICAgICA8aDE+0J/QvtC70YPRh9C40YLRjFxyXG4gICAgICAgICAgICA8YnI+PC9icj7Rg9GB0LvRg9Cz0YM6PC9oMT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50X2J1dHRvbnMnPlxyXG4gICAgICAgICAgPGEgaHJlZj0nL2RseWEtZml6aWNoZXNraXgtbGljJz48aW5wdXQgY2xhc3NOYW1lPSdidXR0b24nIHZhbHVlPSfQpNC40LfQuNGH0LXRgdC60LjQtSDQu9C40YbQsCcgdHlwZT0nYnV0dG9uJy8+PC9hPlxyXG4gICAgICAgICAgPGEgaHJlZj0nL2p1cnNlcnZpY2UnPiA8aW5wdXQgY2xhc3NOYW1lPSdidXR0b24gYnV0dG9uLS1saWdodCcgdmFsdWU9J9Cu0YDQuNC00LjRh9C10YHQutC40LUg0LvQuNGG0LAnIHR5cGU9J2J1dHRvbicvPjwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3VzbHVnaS0tbGlzdCBjb250YWluZXInPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VydmljZXMnPlxyXG4gICAgICAgICAgPGgyPtCj0YHQu9GD0LPQuCDRhNC40LfQuNGH0LXRgdC60LjQvCDQu9C40YbQsNC8PC9oMj5cclxuICAgICAgICAgIDxTZXJ2aWNlTGlzdCBtb2RhbFR5cGU9XCIxXCIgbW9kYWw9e21vZGFsfSBjbG9zZU1vZGFsPXtjbG9zZU1vZGFsfSBpZD17aWR9IHNldFR5cGU9eydmaXonfSBsaXN0PXtmaXpzZXJ2aWNlfSB0eXBlPSdmaXonIHNldE1vZGFsPXttb2RhbENoYW5nZX0gc2V0SWQ9e3NldElkfS8+XHJcblxyXG4gICAgICAgICAgPGgyPtCj0YHQu9GD0LPQuCDRjtGA0LjQtNC40YfQtdGB0LrQuNC8INC70LjRhtCw0Lw8L2gyPlxyXG4gICAgICAgICAgPFNlcnZpY2VMaXN0IG1vZGFsVHlwZT0nMicgbW9kYWw9e21vZGFsMn0gY2xvc2VNb2RhbD17Y2xvc2VNb2RhbH0gaWQ9e2lkfSBzZXRUeXBlPXsnanVyJ30gbGlzdD17anVyc2VydmljZX0gdHlwZT0nanVyJyBzZXRNb2RhbD17bW9kYWxDaGFuZ2V9IHNldElkPXtzZXRJZH0vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNsdWdpOyJdLCJzb3VyY2VSb290IjoiIn0=