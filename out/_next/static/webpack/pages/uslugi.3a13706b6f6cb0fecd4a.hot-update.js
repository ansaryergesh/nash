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
    if (type === '1') {
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
        lineNumber: 30,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "header",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "bg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Nav__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "header--content",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: ["\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, _this), "\u0443\u0441\u043B\u0443\u0433\u0443:"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
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
              lineNumber: 42,
              columnNumber: 43
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "/jurservice",
            children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              className: "button button--light",
              value: "\u042E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043B\u0438\u0446\u0430",
              type: "button"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 34
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "uslugi--list container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "services",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: "\u0423\u0441\u043B\u0443\u0433\u0438 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u043B\u0438\u0446\u0430\u043C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
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
          lineNumber: 51,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: "\u0423\u0441\u043B\u0443\u0433\u0438 \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u043B\u0438\u0446\u0430\u043C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
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
          lineNumber: 54,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNsdWdpLmpzIl0sIm5hbWVzIjpbIlVzbHVnaSIsInVzZVN0YXRlIiwibW9kYWwiLCJzZXRNb2RhbCIsIm1vZGFsMiIsInNldE1vZGFsMiIsImlkIiwic2V0SWQiLCJtb2RhbENoYW5nZSIsInR5cGUiLCJjbG9zZU1vZGFsIiwibW9kYWwxIiwiZml6c2VydmljZSIsImp1cnNlcnZpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQUEsa0JBRUxDLCtDQUFRLENBQUMsS0FBRCxDQUZIO0FBQUEsTUFDWkMsS0FEWTtBQUFBLE1BRWpCQyxRQUZpQjs7QUFBQSxtQkFHUUYsK0NBQVEsQ0FBQyxLQUFELENBSGhCO0FBQUEsTUFHWkcsTUFIWTtBQUFBLE1BR0xDLFNBSEs7O0FBQUEsbUJBS1JKLCtDQUFRLEVBTEE7QUFBQSxNQUlaSyxFQUpZO0FBQUEsTUFLakJDLEtBTGlCOztBQU9uQixNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxJQUFELEVBQVU7QUFDNUIsUUFBR0EsSUFBSSxLQUFLLEdBQVosRUFBaUI7QUFDZk4sY0FBUSxDQUFDLElBQUQsQ0FBUjtBQUNBRSxlQUFTLENBQUMsS0FBRCxDQUFUO0FBQ0Q7O0FBQ0QsUUFBR0ksSUFBSSxLQUFHLEdBQVYsRUFBZTtBQUNiSixlQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0FGLGNBQVEsQ0FBQyxLQUFELENBQVI7QUFDRDtBQUNGLEdBVEQ7O0FBVUEsTUFBTU8sVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2QlAsWUFBUSxDQUFDO0FBQUNRLFlBQU0sRUFBQyxLQUFSO0FBQWNQLFlBQU0sRUFBQztBQUFyQixLQUFELENBQVI7QUFDRCxHQUZEOztBQUdBLHNCQUNFO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBT0U7QUFBSyxlQUFTLEVBQUMsUUFBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLDhEQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQUdFO0FBQUssaUJBQVMsRUFBQyxpQkFBZjtBQUFBLGdDQUNFO0FBQUEsc0ZBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFHRTtBQUFLLG1CQUFTLEVBQUMsaUJBQWY7QUFBQSxrQ0FDQTtBQUFHLGdCQUFJLEVBQUMsdUJBQVI7QUFBQSxtQ0FBZ0M7QUFBTyx1QkFBUyxFQUFDLFFBQWpCO0FBQTBCLG1CQUFLLEVBQUMsdUZBQWhDO0FBQWtELGtCQUFJLEVBQUM7QUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURBLGVBRUE7QUFBRyxnQkFBSSxFQUFDLGFBQVI7QUFBQSx5Q0FBdUI7QUFBTyx1QkFBUyxFQUFDLHNCQUFqQjtBQUF3QyxtQkFBSyxFQUFDLDZGQUE5QztBQUFpRSxrQkFBSSxFQUFDO0FBQXRFO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEYsZUFtQkU7QUFBSyxlQUFTLEVBQUMsd0JBQWY7QUFBQSw2QkFFRTtBQUFLLGlCQUFTLEVBQUMsVUFBZjtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUUsOERBQUMsbUVBQUQ7QUFBYSxtQkFBUyxFQUFDLEdBQXZCO0FBQTJCLGVBQUssRUFBRUYsS0FBbEM7QUFBeUMsb0JBQVUsRUFBRVEsVUFBckQ7QUFBaUUsWUFBRSxFQUFFSixFQUFyRTtBQUF5RSxpQkFBTyxFQUFFLEtBQWxGO0FBQXlGLGNBQUksRUFBRU0sNERBQS9GO0FBQTJHLGNBQUksRUFBQyxLQUFoSDtBQUFzSCxrQkFBUSxFQUFFSixXQUFoSTtBQUE2SSxlQUFLLEVBQUVEO0FBQXBKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRixlQUtFLDhEQUFDLG1FQUFEO0FBQWEsbUJBQVMsRUFBQyxHQUF2QjtBQUEyQixlQUFLLEVBQUVILE1BQWxDO0FBQTBDLG9CQUFVLEVBQUVNLFVBQXREO0FBQWtFLFlBQUUsRUFBRUosRUFBdEU7QUFBMEUsaUJBQU8sRUFBRSxLQUFuRjtBQUEwRixjQUFJLEVBQUVPLDREQUFoRztBQUE0RyxjQUFJLEVBQUMsS0FBakg7QUFBdUgsa0JBQVEsRUFBRUwsV0FBakk7QUFBOEksZUFBSyxFQUFFRDtBQUFySjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFuQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFnQ0QsQ0FwREQ7O0dBQU1QLE07O0tBQUFBLE07QUFzRE4sK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNsdWdpLjNhMTM3MDZiNmY2Y2IwZmVjZDRhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgTW9kYWxTZXJ2aWNlIGZyb20gXCIuLi9jb21wb25lbnRzL3NoYXJlZC9Nb2RhbFNlcnZpY2VcIlxyXG5pbXBvcnQgTmF2IGZyb20gXCIuLi9jb21wb25lbnRzL3NoYXJlZC9OYXZcIlxyXG5pbXBvcnQgU2VydmljZUxpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvc2hhcmVkL1NlcnZpY2VMaXN0XCJcclxuaW1wb3J0IHtmaXpzZXJ2aWNlLCBqdXJzZXJ2aWNlfSBmcm9tIFwiLi4vZGVmYXVsdHMvZml6c2VydmljZVwiXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuY29uc3QgVXNsdWdpID0gKCkgPT4ge1xyXG4gIGNvbnN0IFttb2RhbCxcclxuICAgIHNldE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFttb2RhbDIsc2V0TW9kYWwyXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtpZCxcclxuICAgIHNldElkXSA9IHVzZVN0YXRlKClcclxuICBcclxuICBjb25zdCBtb2RhbENoYW5nZSA9ICh0eXBlKSA9PiB7XHJcbiAgICBpZih0eXBlID09PSAnMScpIHtcclxuICAgICAgc2V0TW9kYWwodHJ1ZSlcclxuICAgICAgc2V0TW9kYWwyKGZhbHNlKVxyXG4gICAgfVxyXG4gICAgaWYodHlwZT09PScyJykge1xyXG4gICAgICBzZXRNb2RhbDIodHJ1ZSlcclxuICAgICAgc2V0TW9kYWwoZmFsc2UpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRNb2RhbCh7bW9kYWwxOmZhbHNlLG1vZGFsMjpmYWxzZX0pXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0ndXNsdWdpJz5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlxyXG4gICAgICAgICAg0KPRgdC70YPQs9C4XHJcbiAgICAgICAgPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICB7LyogPE1vZGFsU2VydmljZSBpc01vZGFsT3Blbj17bW9kYWx9IGNsb3NlTW9kYWw9e2Nsb3NlTW9kYWx9IGlkPXtpZH0gdHlwZT0nZml6Jy8+ICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0naGVhZGVyJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmcnPjwvZGl2PlxyXG4gICAgICAgIDxOYXYvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXItLWNvbnRlbnQnPlxyXG4gICAgICAgICAgPGgxPtCf0L7Qu9GD0YfQuNGC0YxcclxuICAgICAgICAgICAgPGJyPjwvYnI+0YPRgdC70YPQs9GDOjwvaDE+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudF9idXR0b25zJz5cclxuICAgICAgICAgIDxhIGhyZWY9Jy9kbHlhLWZpemljaGVza2l4LWxpYyc+PGlucHV0IGNsYXNzTmFtZT0nYnV0dG9uJyB2YWx1ZT0n0KTQuNC30LjRh9C10YHQutC40LUg0LvQuNGG0LAnIHR5cGU9J2J1dHRvbicvPjwvYT5cclxuICAgICAgICAgIDxhIGhyZWY9Jy9qdXJzZXJ2aWNlJz4gPGlucHV0IGNsYXNzTmFtZT0nYnV0dG9uIGJ1dHRvbi0tbGlnaHQnIHZhbHVlPSfQrtGA0LjQtNC40YfQtdGB0LrQuNC1INC70LjRhtCwJyB0eXBlPSdidXR0b24nLz48L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd1c2x1Z2ktLWxpc3QgY29udGFpbmVyJz5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlcnZpY2VzJz5cclxuICAgICAgICAgIDxoMj7Qo9GB0LvRg9Cz0Lgg0YTQuNC30LjRh9C10YHQutC40Lwg0LvQuNGG0LDQvDwvaDI+XHJcbiAgICAgICAgICA8U2VydmljZUxpc3QgbW9kYWxUeXBlPVwiMVwiIG1vZGFsPXttb2RhbH0gY2xvc2VNb2RhbD17Y2xvc2VNb2RhbH0gaWQ9e2lkfSBzZXRUeXBlPXsnZml6J30gbGlzdD17Zml6c2VydmljZX0gdHlwZT0nZml6JyBzZXRNb2RhbD17bW9kYWxDaGFuZ2V9IHNldElkPXtzZXRJZH0vPlxyXG5cclxuICAgICAgICAgIDxoMj7Qo9GB0LvRg9Cz0Lgg0Y7RgNC40LTQuNGH0LXRgdC60LjQvCDQu9C40YbQsNC8PC9oMj5cclxuICAgICAgICAgIDxTZXJ2aWNlTGlzdCBtb2RhbFR5cGU9JzInIG1vZGFsPXttb2RhbDJ9IGNsb3NlTW9kYWw9e2Nsb3NlTW9kYWx9IGlkPXtpZH0gc2V0VHlwZT17J2p1cid9IGxpc3Q9e2p1cnNlcnZpY2V9IHR5cGU9J2p1cicgc2V0TW9kYWw9e21vZGFsQ2hhbmdlfSBzZXRJZD17c2V0SWR9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzbHVnaTsiXSwic291cmNlUm9vdCI6IiJ9