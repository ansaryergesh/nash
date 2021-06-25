self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_shared_Feedback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/shared/Feedback */ "./components/shared/Feedback.js");
/* harmony import */ var _components_shared_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/shared/Header */ "./components/shared/Header.js");
/* harmony import */ var _components_shared_ModalService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/shared/ModalService */ "./components/shared/ModalService.js");
/* harmony import */ var _components_shared_Nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/shared/Nav */ "./components/shared/Nav.js");
/* harmony import */ var _components_shared_ServiceList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/shared/ServiceList */ "./components/shared/ServiceList.js");
/* harmony import */ var _defaults_fizservice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../defaults/fizservice */ "./defaults/fizservice.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\job\\nashcompany\\pages\\index.js",
    _s = $RefreshSig$();









function Home() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      modal = _useState[0],
      setModal = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
      id = _useState2[0],
      setId = _useState2[1];

  var closeModal = function closeModal() {
    setModal(false);
  };

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('fiz'),
      type = _useState3[0],
      setType = _useState3[1];

  var listofservice = type === 'fiz' ? _defaults_fizservice__WEBPACK_IMPORTED_MODULE_8__.fizservice : _defaults_fizservice__WEBPACK_IMPORTED_MODULE_8__.jurservice;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "home",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Nash Company - \u0420\u0435\u0448\u0430\u0435\u043C\u043E \u0432\u0441\u0435!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "header",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "bg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Nav__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "body",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "container",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "body__top",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: "text-center",
            children: "\u0420\u0435\u0448\u0435\u043D\u0438\u0435 \u043B\u044E\u0431\u044B\u0445 \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0437\u0430\u0434\u0430\u0447"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "body__blocks",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "body__block",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: ["\u041F\u043E\u043B\u0443\u0447\u0438 \u0443\u0441\u043B\u0443\u0433\u0443 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                  children: "\u043E\u043D\u043B\u0430\u0439\u043D"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 39,
                  columnNumber: 35
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                children: ["\u041F\u043E\u043B\u0443\u0447\u0438 \u0443\u0441\u043B\u0443\u0433\u0443 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                  children: "\u043E\u043D\u043B\u0430\u0439\u043D"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 40,
                  columnNumber: 32
                }, this), " \u043D\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0432\u044B\u0435\u0437\u0436\u0430\u0442\u044C"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "body__block",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: ["\u041E\u043F\u043B\u0430\u0442\u0430", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                  children: " \u043F\u043E\u0441\u043B\u0435"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 43,
                  columnNumber: 27
                }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  children: ["\u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u044F ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                    children: "\u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 43,
                    columnNumber: 58
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 43,
                  columnNumber: 41
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                children: "\u041F\u043B\u0430\u0442\u0430 \u0432 \u043A\u043E\u043D\u0446\u0435 \u0441\u0434\u0435\u043B\u043A\u0438, \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "body__block",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: ["\u041F\u043E\u043B\u0443\u0447\u0438", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                  children: " \u0441\u0435\u0439\u0447\u0430\u0441"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 47,
                  columnNumber: 27
                }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  children: "\u043F\u043B\u0430\u0442\u0438 \u043F\u043E\u0442\u043E\u043C"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 47,
                  columnNumber: 42
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                children: "\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0443\u0441\u043B\u0443\u0433\u0430 \u043F\u043E\u0442\u043E\u043C \u043E\u043F\u043B\u0430\u0442\u0430"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "services",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            className: "advantage",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "advantage--item",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: "/img/advantage1.svg"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 43
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                children: ["95% \u0432\u044B\u0438\u0433\u0440\u0430\u043D\u043D\u044B\u0445", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 121,
                  columnNumber: 15
                }, this), "\u0434\u0435\u043B"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 13
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 11
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "advantage--item",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: "/img/advantage2.svg"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 43
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                children: ["\u0411\u043E\u043B\u0435\u0435 10 \u043B\u0435\u0442", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 125,
                  columnNumber: 28
                }, this), "\u043D\u0430 \u0440\u044B\u043D\u043A\u0435"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 125,
                columnNumber: 13
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 11
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "advantage--item",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: "/img/advantage3.svg"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 43
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                children: ["\u0420\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u043F\u043E", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 129,
                  columnNumber: 27
                }, this), "\u0432\u0441\u0435\u043C\u0443 \u0420\u041A"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 13
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 11
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 9
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "services--header",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: type === 'fiz' && 'active',
              onClick: function onClick() {
                return setType('fiz');
              },
              children: "\u0424\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043B\u0438\u0446\u0430"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: type === 'jur' && 'active',
              onClick: function onClick() {
                return setType('jur');
              },
              children: "\u042E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043B\u0438\u0446\u0430"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_ServiceList__WEBPACK_IMPORTED_MODULE_7__.default, {
            list: listofservice,
            type: type,
            setModal: setModal,
            setId: setId
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_ModalService__WEBPACK_IMPORTED_MODULE_5__.default, {
            isModalOpen: modal,
            closeModal: closeModal,
            id: id,
            type: type
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

_s(Home, "XBpxyEjQ6kTIjL/n9aka/DXpIuw=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwibW9kYWwiLCJzZXRNb2RhbCIsImlkIiwic2V0SWQiLCJjbG9zZU1vZGFsIiwidHlwZSIsInNldFR5cGUiLCJsaXN0b2ZzZXJ2aWNlIiwiZml6c2VydmljZSIsImp1cnNlcnZpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBLGtCQUVmQywrQ0FBUSxDQUFDLEtBQUQsQ0FGTztBQUFBLE1BQ3RCQyxLQURzQjtBQUFBLE1BRTNCQyxRQUYyQjs7QUFBQSxtQkFJbEJGLCtDQUFRLEVBSlU7QUFBQSxNQUd0QkcsRUFIc0I7QUFBQSxNQUkzQkMsS0FKMkI7O0FBSzdCLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDdkJILFlBQVEsQ0FBQyxLQUFELENBQVI7QUFDRCxHQUZEOztBQUw2QixtQkFRTkYsK0NBQVEsQ0FBQyxLQUFELENBUkY7QUFBQSxNQVF0Qk0sSUFSc0I7QUFBQSxNQVFqQkMsT0FSaUI7O0FBUzdCLE1BQU1DLGFBQWEsR0FBR0YsSUFBSSxLQUFHLEtBQVAsR0FBZUcsNERBQWYsR0FBNEJDLDREQUFsRDtBQUNBLHNCQUNFO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBTUU7QUFBSyxlQUFTLEVBQUMsUUFBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLDhEQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FB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QUFDLEtBQUQsQ0FBYjtBQUFBLGVBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBRUU7QUFBTSx1QkFBUyxFQUFFRCxJQUFJLEtBQUcsS0FBUCxJQUFnQixRQUFqQztBQUEyQyxxQkFBTyxFQUFFO0FBQUEsdUJBQU1DLE9BQU8sQ0FBQyxLQUFELENBQWI7QUFBQSxlQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBakJGLGVBcUJFLDhEQUFDLG1FQUFEO0FBQWEsZ0JBQUksRUFBRUMsYUFBbkI7QUFBa0MsZ0JBQUksRUFBRUYsSUFBeEM7QUFBOEMsb0JBQVEsRUFBRUosUUFBeEQ7QUFBa0UsaUJBQUssRUFBRUU7QUFBekU7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFyQkYsZUFzQkUsOERBQUMsb0VBQUQ7QUFBYyx1QkFBVyxFQUFFSCxLQUEzQjtBQUFrQyxzQkFBVSxFQUFFSSxVQUE5QztBQUEwRCxjQUFFLEVBQUVGLEVBQTlEO0FBQWtFLGdCQUFJLEVBQUVHO0FBQXhFO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBdEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFsRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBK0hEOztHQXpJdUJQLEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOWMyNzMyYTNjOTY5MjljNjY2ODQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEZlZWRiYWNrIGZyb20gJy4uL2NvbXBvbmVudHMvc2hhcmVkL0ZlZWRiYWNrJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL3NoYXJlZC9IZWFkZXInXG5pbXBvcnQgTW9kYWxTZXJ2aWNlIGZyb20gJy4uL2NvbXBvbmVudHMvc2hhcmVkL01vZGFsU2VydmljZSdcbmltcG9ydCBOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9zaGFyZWQvTmF2J1xuaW1wb3J0IFNlcnZpY2VMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvc2hhcmVkL1NlcnZpY2VMaXN0J1xuaW1wb3J0IHtmaXpzZXJ2aWNlLCBqdXJzZXJ2aWNlfSBmcm9tICcuLi9kZWZhdWx0cy9maXpzZXJ2aWNlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbbW9kYWwsXG4gICAgc2V0TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtpZCxcbiAgICBzZXRJZF0gPSB1c2VTdGF0ZSgpXG4gIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gICAgc2V0TW9kYWwoZmFsc2UpXG4gIH1cbiAgY29uc3QgW3R5cGUsc2V0VHlwZV0gPSB1c2VTdGF0ZSgnZml6JylcbiAgY29uc3QgbGlzdG9mc2VydmljZSA9IHR5cGU9PT0nZml6JyA/IGZpenNlcnZpY2UgOiBqdXJzZXJ2aWNlXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2hvbWUnPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5cbiAgICAgICAgICBOYXNoIENvbXBhbnkgLSDQoNC10YjQsNC10LzQviDQstGB0LUhXG4gICAgICAgIDwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0naGVhZGVyJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JnJz48L2Rpdj5cbiAgICAgICAgPE5hdiAvPlxuICAgICAgPC9kaXY+XG4gICAgICB7LyogPC8+ICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9J2JvZHknPlxuICAgXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JvZHlfX3RvcCc+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPtCg0LXRiNC10L3QuNC1INC70Y7QsdGL0YUg0Y7RgNC40LTQuNGH0LXRgdC60LjRhSDQt9Cw0LTQsNGHPC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm9keV9fYmxvY2tzJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib2R5X19ibG9jayc+XG4gICAgICAgICAgICAgIDxzcGFuPtCf0L7Qu9GD0YfQuCDRg9GB0LvRg9Cz0YMgPGI+0L7QvdC70LDQudC9PC9iPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPHA+0J/QvtC70YPRh9C4INGD0YHQu9GD0LPRgyA8Yj7QvtC90LvQsNC50L08L2I+INC90LUg0L7QsdGP0LfQsNGC0LXQu9GM0L3QviDQstGL0LXQt9C20LDRgtGMPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm9keV9fYmxvY2snPlxuICAgICAgICAgICAgICA8c3Bhbj7QntC/0LvQsNGC0LA8Yj4g0L/QvtGB0LvQtTwvYj4gPHNwYW4+0LTQvtGB0YLQuNC20LXQvdC40Y8gPGI+0YDQtdC30YPQu9GM0YLQsNGC0LA8L2I+PC9zcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPHA+0J/Qu9Cw0YLQsCDQsiDQutC+0L3RhtC1INGB0LTQtdC70LrQuCwg0L/QvtC70YPRh9C10L3QuNGPINGA0LXQt9GD0LvRjNGC0LDRgtCwPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm9keV9fYmxvY2snPlxuICAgICAgICAgICAgICA8c3Bhbj7Qn9C+0LvRg9GH0Lg8Yj4g0YHQtdC50YfQsNGBPC9iPiA8c3Bhbj7Qv9C70LDRgtC4INC/0L7RgtC+0Lw8L3NwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICA8cD7QodC90LDRh9Cw0LvQsCDRg9GB0LvRg9Cz0LAg0L/QvtGC0L7QvCDQvtC/0LvQsNGC0LA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0nYWRzJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWRzLS1jb250ZW50Jz5cbiAgICAgICAgICAgIDxoMT7QntC/0LvQsNGC0Lgg0LfQsCDRgNC10LfRg9C70YzRgtCw0YIg0YHRgNCw0LfRgyDQvdC+INGB0L4g0YHQutC40LTQutC+0Lk8L2gxPlxuICAgICAgICAgICAgPHA+0JDQutGG0LjRjyFcbiAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgIDxzcGFuPtCf0YDRj9C80L4g0YHQtdC50YfQsNGBINGB0YLQvtC40LzQvtGB0YLRjDxicj48L2JyPlxuICAgICAgICAgICAgICAgIDIwMCDRgtGL0YEg0YLQtdC90LPQtSDigJQgNTAg0YLRi9GBLiDQotC10L3Qs9C1PC9zcGFuPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J1dHRvbnMnPlxuICAgICAgICAgIDxhIGhyZWY9Jy9kbHlhLWZpemljaGVza2l4LWxpYyc+PGlucHV0IHR5cGU9J2J1dHRvbicgY2xhc3NOYW1lPSdidXR0b24nIHZhbHVlPSfQpNC40LfQuNGH0LXRgdC60LjQtSDQu9C40YbQsCcvPjwvYT5cbiAgICAgICAgICA8YSBocmVmPScvanVyc2VydmljZSc+PGlucHV0IHR5cGU9J2J1dHRvbicgY2xhc3NOYW1lPSdidXR0b24gYnV0dG9uX2xpZ2h0JyB2YWx1ZT0n0K7RgNC40LTQuNGH0LXRgdC60LjQtSDQu9C40YbQsCAnLz48L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PiAqL31cblxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9J3doeXVzJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd2h5dXMtLWl0ZW0nPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3doeXVzLS1pbWFnZXMnPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0naW1hZ2UxJyBzcmM9Jy9pbWcvcGxhbnQucG5nJy8+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdpbWFnZTInIHNyYz0nL2ltZy9sb2dvL3doaXRlTG9nby5zdmcnLz5cbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2ltYWdlMycgc3JjPScvaW1nL2xvZ28vbG9nb1NtYWxsLnN2ZycvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd2h5dXMtLWNvbnRlbnQnPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9Jyc+0J/QvtGH0LXQvNGDINC80Ys/PC9wPlxuICAgICAgICAgICAgICA8aDI+0KEg0L3QsNGH0LDQu9C+INGA0LXQt9GD0LvRjNGC0LDRgiDQv9C+0YLQvtC8INC+0L/Qu9Cw0YLQsDwvaDI+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgINCd0LDRiNC4INGB0L/QtdGG0LjQsNC70LjRgdGC0Ysg0YHQvtC30LTQsNC70Lgg0L/RgNC+0LTRg9C60YIsINCx0LvQsNCz0L7QtNCw0YDRjyDQutC+0YLQvtGA0L7QvNGDINCS0LDQvCDQv9GA0LXQtNC+0YHRgtCw0LLQu9GP0LXRgtGB0Y9cbiAgICAgICAgICAgICAgICDRjdC60YHQutC70Y7Qt9C40LLQvdCw0Y8g0LLQvtC30LzQvtC20L3QvtGB0YLRjCDQsiDQvtC90LvQsNC50L0g0YDQtdC20LjQvNC1LCDQuNC3INC70Y7QsdC+0Lk8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3aHl1cy0taXRlbSc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd2h5dXMtLWNvbnRlbnQnPlxuICAgICAgICAgICAgICA8aDI+OTUlINCz0YDQsNC90YLQuNC4PGJyPjwvYnI+XG4gICAgICAgICAgICAgICAg0YPRgdC/0LXRhdCwINC00LXQu9CwPC9oMj5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAg0J3QsNGI0Lgg0YHQv9C10YbQuNCw0LvQuNGB0YLRiyDRgdC+0LfQtNCw0LvQuCDQv9GA0L7QtNGD0LrRgiwg0LHQu9Cw0LPQvtC00LDRgNGPINC60L7RgtC+0YDQvtC80YMg0JLQsNC8INC/0YDQtdC00L7RgdGC0LDQstC70Y/QtdGC0YHRj1xuICAgICAgICAgICAgICAgINGN0LrRgdC60LvRjtC30LjQstC90LDRjyDQstC+0LfQvNC+0LbQvdC+0YHRgtGMINCyINC+0L3Qu9Cw0LnQvSDRgNC10LbQuNC80LUsINC40Lcg0LvRjtCx0L7QuTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd2h5dXMtLWltYWdlcyc+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdpbWFnZTEnIHNyYz0nL2ltZy9jdWJvay5wbmcnLz5cbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2ltYWdlMicgc3JjPScvaW1nL2xvZ28vd2hpdGVMb2dvLnN2ZycvPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0naW1hZ2UzJyBzcmM9Jy9pbWcvbG9nby9sb2dvU21hbGwuc3ZnJy8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3aHl1cy0taXRlbSc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd2h5dXMtLWltYWdlcyc+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdpbWFnZTEnIHNyYz0nL2ltZy9zaGVldC5wbmcnLz5cbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2ltYWdlMicgc3JjPScvaW1nL2xvZ28vd2hpdGVMb2dvLnN2ZycvPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0naW1hZ2UzJyBzcmM9Jy9pbWcvbG9nby9sb2dvU21hbGwuc3ZnJy8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3aHl1cy0tY29udGVudCc+XG4gICAgICAgICAgICAgIDxoMj7Ql9Cw0YnQuNGC0LAg0LLQsNGI0LjRhSDQuNC90YLQtdGA0LXRgdC+0LIg0L3QsCDQstGL0YHQvtC60L7QvCDRg9GA0L7QstC90LUhPC9oMj5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAg0J3QsNGI0Lgg0YHQv9C10YbQuNCw0LvQuNGB0YLRiyDRgdC+0LfQtNCw0LvQuCDQv9GA0L7QtNGD0LrRgiwg0LHQu9Cw0LPQvtC00LDRgNGPINC60L7RgtC+0YDQvtC80YMg0JLQsNC8INC/0YDQtdC00L7RgdGC0LDQstC70Y/QtdGC0YHRj1xuICAgICAgICAgICAgICAgINGN0LrRgdC60LvRjtC30LjQstC90LDRjyDQstC+0LfQvNC+0LbQvdC+0YHRgtGMINCyINC+0L3Qu9Cw0LnQvSDRgNC10LbQuNC80LUsINC40Lcg0LvRjtCx0L7QuTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PiAqL31cbiAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VydmljZXMnPlxuICAgICAgIFxuICAgICAgICA8dWwgY2xhc3NOYW1lPSdhZHZhbnRhZ2UnPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2FkdmFudGFnZS0taXRlbSc+PGltZyBzcmM9Jy9pbWcvYWR2YW50YWdlMS5zdmcnLz5cbiAgICAgICAgICAgIDxwPjk1JSDQstGL0LjQs9GA0LDQvdC90YvRhVxuICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAg0LTQtdC7PC9wPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT0nYWR2YW50YWdlLS1pdGVtJz48aW1nIHNyYz0nL2ltZy9hZHZhbnRhZ2UyLnN2ZycvPlxuICAgICAgICAgICAgPHA+0JHQvtC70LXQtSAxMCDQu9C10YI8YnI+PC9icj5cbiAgICAgICAgICAgICAg0L3QsCDRgNGL0L3QutC1PC9wPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT0nYWR2YW50YWdlLS1pdGVtJz48aW1nIHNyYz0nL2ltZy9hZHZhbnRhZ2UzLnN2ZycvPlxuICAgICAgICAgICAgPHA+0KDQsNCx0L7RgtCw0LXQvCDQv9C+PGJyPjwvYnI+XG4gICAgICAgICAgICAgINCy0YHQtdC80YMg0KDQmjwvcD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZXJ2aWNlcy0taGVhZGVyJz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17dHlwZT09PSdmaXonICYmICdhY3RpdmUnfSBvbkNsaWNrPXsoKSA9PiBzZXRUeXBlKCdmaXonKX0+0KTQuNC30LjRh9C10YHQutC40LUg0LvQuNGG0LA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3R5cGU9PT0nanVyJyAmJiAnYWN0aXZlJ30gb25DbGljaz17KCkgPT4gc2V0VHlwZSgnanVyJyl9PtCu0YDQuNC00LjRh9C10YHQutC40LUg0LvQuNGG0LA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPFNlcnZpY2VMaXN0IGxpc3Q9e2xpc3RvZnNlcnZpY2V9IHR5cGU9e3R5cGV9IHNldE1vZGFsPXtzZXRNb2RhbH0gc2V0SWQ9e3NldElkfS8+XG4gICAgICAgICAgPE1vZGFsU2VydmljZSBpc01vZGFsT3Blbj17bW9kYWx9IGNsb3NlTW9kYWw9e2Nsb3NlTW9kYWx9IGlkPXtpZH0gdHlwZT17dHlwZX0vPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICBcbiAgICAgIDwvZGl2PlxuICAgICAgICAgICBcbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9