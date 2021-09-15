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
    setModal2(false); // setModal({modal1:false,modal2:false})
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "uslugi",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "\u0423\u0441\u043B\u0443\u0433\u0438"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "header",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "bg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Nav__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "header--content",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: ["\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, _this), "\u0443\u0441\u043B\u0443\u0433\u0443:"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "content_buttons",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "/dlya-fizicheskix-lic",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              className: "button",
              value: "\u0410\u043D\u0442\u0438\u043A\u043E\u043B\u043B\u0435\u043A\u0442\u043E\u0440",
              type: "button"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 43
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "uslugi--list container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "services",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: "\u0423\u0441\u043B\u0443\u0433\u0438 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u043B\u0438\u0446\u0430\u043C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
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
          lineNumber: 55,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: "\u0423\u0441\u043B\u0443\u0433\u0438 \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u043B\u0438\u0446\u0430\u043C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
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
          lineNumber: 58,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNsdWdpLmpzIl0sIm5hbWVzIjpbIlVzbHVnaSIsInVzZVN0YXRlIiwibW9kYWwiLCJzZXRNb2RhbCIsIm1vZGFsMiIsInNldE1vZGFsMiIsImlkIiwic2V0SWQiLCJtb2RhbENoYW5nZSIsInR5cGUiLCJjb25zb2xlIiwibG9nIiwiY2xvc2VNb2RhbCIsImZpenNlcnZpY2UiLCJqdXJzZXJ2aWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLGtCQUVMQywrQ0FBUSxDQUFDLEtBQUQsQ0FGSDtBQUFBLE1BQ1pDLEtBRFk7QUFBQSxNQUVqQkMsUUFGaUI7O0FBQUEsbUJBR1FGLCtDQUFRLENBQUMsS0FBRCxDQUhoQjtBQUFBLE1BR1pHLE1BSFk7QUFBQSxNQUdMQyxTQUhLOztBQUFBLG1CQUtSSiwrQ0FBUSxFQUxBO0FBQUEsTUFJWkssRUFKWTtBQUFBLE1BS2pCQyxLQUxpQjs7QUFPbkIsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsSUFBRCxFQUFVO0FBQzVCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjs7QUFDQSxRQUFHQSxJQUFJLEtBQUssS0FBWixFQUFtQjtBQUNqQkMsYUFBTyxDQUFDQyxHQUFSLENBQVksR0FBWjtBQUNBUixjQUFRLENBQUMsSUFBRCxDQUFSO0FBQ0FFLGVBQVMsQ0FBQyxLQUFELENBQVQ7QUFDRDs7QUFDRCxRQUFHSSxJQUFJLEtBQUcsS0FBVixFQUFpQjtBQUNmSixlQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0FGLGNBQVEsQ0FBQyxLQUFELENBQVI7QUFDRDtBQUNGLEdBWEQ7O0FBWUEsTUFBTVMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2QlQsWUFBUSxDQUFDLEtBQUQsQ0FBUjtBQUNBRSxhQUFTLENBQUMsS0FBRCxDQUFULENBRnVCLENBR3ZCO0FBQ0QsR0FKRDs7QUFLQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQU9FO0FBQUssZUFBUyxFQUFDLFFBQWY7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRSw4REFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFHRTtBQUFLLGlCQUFTLEVBQUMsaUJBQWY7QUFBQSxnQ0FDRTtBQUFBLHNGQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBR0U7QUFBSyxtQkFBUyxFQUFDLGlCQUFmO0FBQUEsaUNBQ0E7QUFBRyxnQkFBSSxFQUFDLHVCQUFSO0FBQUEsbUNBQWdDO0FBQU8sdUJBQVMsRUFBQyxRQUFqQjtBQUEwQixtQkFBSyxFQUFDLGdGQUFoQztBQUFnRCxrQkFBSSxFQUFDO0FBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEYsZUFtQkU7QUFBSyxlQUFTLEVBQUMsd0JBQWY7QUFBQSw2QkFFRTtBQUFLLGlCQUFTLEVBQUMsVUFBZjtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUUsOERBQUMsbUVBQUQ7QUFBYSxtQkFBUyxFQUFDLEdBQXZCO0FBQTJCLGVBQUssRUFBRUgsS0FBbEM7QUFBeUMsb0JBQVUsRUFBRVUsVUFBckQ7QUFBaUUsWUFBRSxFQUFFTixFQUFyRTtBQUF5RSxpQkFBTyxFQUFFLEtBQWxGO0FBQXlGLGNBQUksRUFBRU8sNERBQS9GO0FBQTJHLGNBQUksRUFBQyxLQUFoSDtBQUFzSCxrQkFBUSxFQUFFTCxXQUFoSTtBQUE2SSxlQUFLLEVBQUVEO0FBQXBKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRixlQUtFLDhEQUFDLG1FQUFEO0FBQWEsbUJBQVMsRUFBQyxHQUF2QjtBQUEyQixlQUFLLEVBQUVILE1BQWxDO0FBQTBDLG9CQUFVLEVBQUVRLFVBQXREO0FBQWtFLFlBQUUsRUFBRU4sRUFBdEU7QUFBMEUsaUJBQU8sRUFBRSxLQUFuRjtBQUEwRixjQUFJLEVBQUVRLDREQUFoRztBQUE0RyxjQUFJLEVBQUMsS0FBakg7QUFBdUgsa0JBQVEsRUFBRU4sV0FBakk7QUFBOEksZUFBSyxFQUFFRDtBQUFySjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFuQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFnQ0QsQ0F4REQ7O0dBQU1QLE07O0tBQUFBLE07QUEwRE4sK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNsdWdpLjcwM2IyYmQ4Nzc0YjE4YTJhNDc5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgTW9kYWxTZXJ2aWNlIGZyb20gXCIuLi9jb21wb25lbnRzL3NoYXJlZC9Nb2RhbFNlcnZpY2VcIlxyXG5pbXBvcnQgTmF2IGZyb20gXCIuLi9jb21wb25lbnRzL3NoYXJlZC9OYXZcIlxyXG5pbXBvcnQgU2VydmljZUxpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvc2hhcmVkL1NlcnZpY2VMaXN0XCJcclxuaW1wb3J0IHtmaXpzZXJ2aWNlLCBqdXJzZXJ2aWNlfSBmcm9tIFwiLi4vZGVmYXVsdHMvZml6c2VydmljZVwiXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuY29uc3QgVXNsdWdpID0gKCkgPT4ge1xyXG4gIGNvbnN0IFttb2RhbCxcclxuICAgIHNldE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFttb2RhbDIsc2V0TW9kYWwyXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtpZCxcclxuICAgIHNldElkXSA9IHVzZVN0YXRlKClcclxuICBcclxuICBjb25zdCBtb2RhbENoYW5nZSA9ICh0eXBlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyh0eXBlKVxyXG4gICAgaWYodHlwZSA9PT0gJ2ZpeicpIHtcclxuICAgICAgY29uc29sZS5sb2coJzEnKVxyXG4gICAgICBzZXRNb2RhbCh0cnVlKVxyXG4gICAgICBzZXRNb2RhbDIoZmFsc2UpXHJcbiAgICB9XHJcbiAgICBpZih0eXBlPT09J2p1cicpIHtcclxuICAgICAgc2V0TW9kYWwyKHRydWUpXHJcbiAgICAgIHNldE1vZGFsKGZhbHNlKVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0TW9kYWwoZmFsc2UpXHJcbiAgICBzZXRNb2RhbDIoZmFsc2UpXHJcbiAgICAvLyBzZXRNb2RhbCh7bW9kYWwxOmZhbHNlLG1vZGFsMjpmYWxzZX0pXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0ndXNsdWdpJz5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlxyXG4gICAgICAgICAg0KPRgdC70YPQs9C4XHJcbiAgICAgICAgPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICB7LyogPE1vZGFsU2VydmljZSBpc01vZGFsT3Blbj17bW9kYWx9IGNsb3NlTW9kYWw9e2Nsb3NlTW9kYWx9IGlkPXtpZH0gdHlwZT0nZml6Jy8+ICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0naGVhZGVyJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmcnPjwvZGl2PlxyXG4gICAgICAgIDxOYXYvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXItLWNvbnRlbnQnPlxyXG4gICAgICAgICAgPGgxPtCf0L7Qu9GD0YfQuNGC0YxcclxuICAgICAgICAgICAgPGJyPjwvYnI+0YPRgdC70YPQs9GDOjwvaDE+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudF9idXR0b25zJz5cclxuICAgICAgICAgIDxhIGhyZWY9Jy9kbHlhLWZpemljaGVza2l4LWxpYyc+PGlucHV0IGNsYXNzTmFtZT0nYnV0dG9uJyB2YWx1ZT0n0JDQvdGC0LjQutC+0LvQu9C10LrRgtC+0YAnIHR5cGU9J2J1dHRvbicvPjwvYT5cclxuICAgICAgICAgIHsvKiA8YSBocmVmPScvanVyc2VydmljZSc+IDxpbnB1dCBjbGFzc05hbWU9J2J1dHRvbiBidXR0b24tLWxpZ2h0JyB2YWx1ZT0n0K7RgNC40LTQuNGH0LXRgdC60LjQtSDQu9C40YbQsCcgdHlwZT0nYnV0dG9uJy8+PC9hPiAqL31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3VzbHVnaS0tbGlzdCBjb250YWluZXInPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VydmljZXMnPlxyXG4gICAgICAgICAgPGgyPtCj0YHQu9GD0LPQuCDRhNC40LfQuNGH0LXRgdC60LjQvCDQu9C40YbQsNC8PC9oMj5cclxuICAgICAgICAgIDxTZXJ2aWNlTGlzdCBtb2RhbFR5cGU9XCIxXCIgbW9kYWw9e21vZGFsfSBjbG9zZU1vZGFsPXtjbG9zZU1vZGFsfSBpZD17aWR9IHNldFR5cGU9eydmaXonfSBsaXN0PXtmaXpzZXJ2aWNlfSB0eXBlPSdmaXonIHNldE1vZGFsPXttb2RhbENoYW5nZX0gc2V0SWQ9e3NldElkfS8+XHJcblxyXG4gICAgICAgICAgPGgyPtCj0YHQu9GD0LPQuCDRjtGA0LjQtNC40YfQtdGB0LrQuNC8INC70LjRhtCw0Lw8L2gyPlxyXG4gICAgICAgICAgPFNlcnZpY2VMaXN0IG1vZGFsVHlwZT0nMicgbW9kYWw9e21vZGFsMn0gY2xvc2VNb2RhbD17Y2xvc2VNb2RhbH0gaWQ9e2lkfSBzZXRUeXBlPXsnanVyJ30gbGlzdD17anVyc2VydmljZX0gdHlwZT0nanVyJyBzZXRNb2RhbD17bW9kYWxDaGFuZ2V9IHNldElkPXtzZXRJZH0vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNsdWdpOyJdLCJzb3VyY2VSb290IjoiIn0=