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

    if (type === '1') {
      console.log('1');
      setModal(true);
      setModal2(false);
    }

    if (type === '2') {
      setModal2(true);
      setModal(false);
    }
  };

  var closeModal = function closeModal() {
    setModal({
      modal1: false,
      modal2: false
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNsdWdpLmpzIl0sIm5hbWVzIjpbIlVzbHVnaSIsInVzZVN0YXRlIiwibW9kYWwiLCJzZXRNb2RhbCIsIm1vZGFsMiIsInNldE1vZGFsMiIsImlkIiwic2V0SWQiLCJtb2RhbENoYW5nZSIsInR5cGUiLCJjb25zb2xlIiwibG9nIiwiY2xvc2VNb2RhbCIsIm1vZGFsMSIsImZpenNlcnZpY2UiLCJqdXJzZXJ2aWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLGtCQUVMQywrQ0FBUSxDQUFDLEtBQUQsQ0FGSDtBQUFBLE1BQ1pDLEtBRFk7QUFBQSxNQUVqQkMsUUFGaUI7O0FBQUEsbUJBR1FGLCtDQUFRLENBQUMsS0FBRCxDQUhoQjtBQUFBLE1BR1pHLE1BSFk7QUFBQSxNQUdMQyxTQUhLOztBQUFBLG1CQUtSSiwrQ0FBUSxFQUxBO0FBQUEsTUFJWkssRUFKWTtBQUFBLE1BS2pCQyxLQUxpQjs7QUFPbkIsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsSUFBRCxFQUFVO0FBQzVCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjs7QUFDQSxRQUFHQSxJQUFJLEtBQUssR0FBWixFQUFpQjtBQUNmQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxHQUFaO0FBQ0FSLGNBQVEsQ0FBQyxJQUFELENBQVI7QUFDQUUsZUFBUyxDQUFDLEtBQUQsQ0FBVDtBQUNEOztBQUNELFFBQUdJLElBQUksS0FBRyxHQUFWLEVBQWU7QUFDYkosZUFBUyxDQUFDLElBQUQsQ0FBVDtBQUNBRixjQUFRLENBQUMsS0FBRCxDQUFSO0FBQ0Q7QUFDRixHQVhEOztBQVlBLE1BQU1TLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDdkJULFlBQVEsQ0FBQztBQUFDVSxZQUFNLEVBQUMsS0FBUjtBQUFjVCxZQUFNLEVBQUM7QUFBckIsS0FBRCxDQUFSO0FBQ0QsR0FGRDs7QUFHQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQU9FO0FBQUssZUFBUyxFQUFDLFFBQWY7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRSw4REFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFHRTtBQUFLLGlCQUFTLEVBQUMsaUJBQWY7QUFBQSxnQ0FDRTtBQUFBLHNGQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBR0U7QUFBSyxtQkFBUyxFQUFDLGlCQUFmO0FBQUEsa0NBQ0E7QUFBRyxnQkFBSSxFQUFDLHVCQUFSO0FBQUEsbUNBQWdDO0FBQU8sdUJBQVMsRUFBQyxRQUFqQjtBQUEwQixtQkFBSyxFQUFDLHVGQUFoQztBQUFrRCxrQkFBSSxFQUFDO0FBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEQSxlQUVBO0FBQUcsZ0JBQUksRUFBQyxhQUFSO0FBQUEseUNBQXVCO0FBQU8sdUJBQVMsRUFBQyxzQkFBakI7QUFBd0MsbUJBQUssRUFBQyw2RkFBOUM7QUFBaUUsa0JBQUksRUFBQztBQUF0RTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGLGVBbUJFO0FBQUssZUFBUyxFQUFDLHdCQUFmO0FBQUEsNkJBRUU7QUFBSyxpQkFBUyxFQUFDLFVBQWY7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFLDhEQUFDLG1FQUFEO0FBQWEsbUJBQVMsRUFBQyxHQUF2QjtBQUEyQixlQUFLLEVBQUVGLEtBQWxDO0FBQXlDLG9CQUFVLEVBQUVVLFVBQXJEO0FBQWlFLFlBQUUsRUFBRU4sRUFBckU7QUFBeUUsaUJBQU8sRUFBRSxLQUFsRjtBQUF5RixjQUFJLEVBQUVRLDREQUEvRjtBQUEyRyxjQUFJLEVBQUMsS0FBaEg7QUFBc0gsa0JBQVEsRUFBRU4sV0FBaEk7QUFBNkksZUFBSyxFQUFFRDtBQUFwSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkYsZUFLRSw4REFBQyxtRUFBRDtBQUFhLG1CQUFTLEVBQUMsR0FBdkI7QUFBMkIsZUFBSyxFQUFFSCxNQUFsQztBQUEwQyxvQkFBVSxFQUFFUSxVQUF0RDtBQUFrRSxZQUFFLEVBQUVOLEVBQXRFO0FBQTBFLGlCQUFPLEVBQUUsS0FBbkY7QUFBMEYsY0FBSSxFQUFFUyw0REFBaEc7QUFBNEcsY0FBSSxFQUFDLEtBQWpIO0FBQXVILGtCQUFRLEVBQUVQLFdBQWpJO0FBQThJLGVBQUssRUFBRUQ7QUFBcko7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZ0NELENBdEREOztHQUFNUCxNOztLQUFBQSxNO0FBd0ROLCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VzbHVnaS4yZWNiY2NkY2RmNjUzZTFkNDg2YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IE1vZGFsU2VydmljZSBmcm9tIFwiLi4vY29tcG9uZW50cy9zaGFyZWQvTW9kYWxTZXJ2aWNlXCJcclxuaW1wb3J0IE5hdiBmcm9tIFwiLi4vY29tcG9uZW50cy9zaGFyZWQvTmF2XCJcclxuaW1wb3J0IFNlcnZpY2VMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL3NoYXJlZC9TZXJ2aWNlTGlzdFwiXHJcbmltcG9ydCB7Zml6c2VydmljZSwganVyc2VydmljZX0gZnJvbSBcIi4uL2RlZmF1bHRzL2ZpenNlcnZpY2VcIlxyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmNvbnN0IFVzbHVnaSA9ICgpID0+IHtcclxuICBjb25zdCBbbW9kYWwsXHJcbiAgICBzZXRNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbbW9kYWwyLHNldE1vZGFsMl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbaWQsXHJcbiAgICBzZXRJZF0gPSB1c2VTdGF0ZSgpXHJcbiAgXHJcbiAgY29uc3QgbW9kYWxDaGFuZ2UgPSAodHlwZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2codHlwZSlcclxuICAgIGlmKHR5cGUgPT09ICcxJykge1xyXG4gICAgICBjb25zb2xlLmxvZygnMScpXHJcbiAgICAgIHNldE1vZGFsKHRydWUpXHJcbiAgICAgIHNldE1vZGFsMihmYWxzZSlcclxuICAgIH1cclxuICAgIGlmKHR5cGU9PT0nMicpIHtcclxuICAgICAgc2V0TW9kYWwyKHRydWUpXHJcbiAgICAgIHNldE1vZGFsKGZhbHNlKVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0TW9kYWwoe21vZGFsMTpmYWxzZSxtb2RhbDI6ZmFsc2V9KVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J3VzbHVnaSc+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5cclxuICAgICAgICAgINCj0YHQu9GD0LPQuFxyXG4gICAgICAgIDwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgey8qIDxNb2RhbFNlcnZpY2UgaXNNb2RhbE9wZW49e21vZGFsfSBjbG9zZU1vZGFsPXtjbG9zZU1vZGFsfSBpZD17aWR9IHR5cGU9J2ZpeicvPiAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2hlYWRlcic+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JnJz48L2Rpdj5cclxuICAgICAgICA8TmF2Lz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naGVhZGVyLS1jb250ZW50Jz5cclxuICAgICAgICAgIDxoMT7Qn9C+0LvRg9GH0LjRgtGMXHJcbiAgICAgICAgICAgIDxicj48L2JyPtGD0YHQu9GD0LPRgzo8L2gxPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnRfYnV0dG9ucyc+XHJcbiAgICAgICAgICA8YSBocmVmPScvZGx5YS1maXppY2hlc2tpeC1saWMnPjxpbnB1dCBjbGFzc05hbWU9J2J1dHRvbicgdmFsdWU9J9Ck0LjQt9C40YfQtdGB0LrQuNC1INC70LjRhtCwJyB0eXBlPSdidXR0b24nLz48L2E+XHJcbiAgICAgICAgICA8YSBocmVmPScvanVyc2VydmljZSc+IDxpbnB1dCBjbGFzc05hbWU9J2J1dHRvbiBidXR0b24tLWxpZ2h0JyB2YWx1ZT0n0K7RgNC40LTQuNGH0LXRgdC60LjQtSDQu9C40YbQsCcgdHlwZT0nYnV0dG9uJy8+PC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndXNsdWdpLS1saXN0IGNvbnRhaW5lcic+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZXJ2aWNlcyc+XHJcbiAgICAgICAgICA8aDI+0KPRgdC70YPQs9C4INGE0LjQt9C40YfQtdGB0LrQuNC8INC70LjRhtCw0Lw8L2gyPlxyXG4gICAgICAgICAgPFNlcnZpY2VMaXN0IG1vZGFsVHlwZT1cIjFcIiBtb2RhbD17bW9kYWx9IGNsb3NlTW9kYWw9e2Nsb3NlTW9kYWx9IGlkPXtpZH0gc2V0VHlwZT17J2Zpeid9IGxpc3Q9e2ZpenNlcnZpY2V9IHR5cGU9J2Zpeicgc2V0TW9kYWw9e21vZGFsQ2hhbmdlfSBzZXRJZD17c2V0SWR9Lz5cclxuXHJcbiAgICAgICAgICA8aDI+0KPRgdC70YPQs9C4INGO0YDQuNC00LjRh9C10YHQutC40Lwg0LvQuNGG0LDQvDwvaDI+XHJcbiAgICAgICAgICA8U2VydmljZUxpc3QgbW9kYWxUeXBlPScyJyBtb2RhbD17bW9kYWwyfSBjbG9zZU1vZGFsPXtjbG9zZU1vZGFsfSBpZD17aWR9IHNldFR5cGU9eydqdXInfSBsaXN0PXtqdXJzZXJ2aWNlfSB0eXBlPSdqdXInIHNldE1vZGFsPXttb2RhbENoYW5nZX0gc2V0SWQ9e3NldElkfS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2x1Z2k7Il0sInNvdXJjZVJvb3QiOiIifQ==