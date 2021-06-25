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
                  children: "\u043F\u043E\u0441\u043B\u0435"
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
                    columnNumber: 57
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 43,
                  columnNumber: 40
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
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: ["\u041F\u043E\u043B\u0443\u0447\u0438", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                  children: " \u0441\u0435\u0439\u0447\u0430\u0441"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 47,
                  columnNumber: 27
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 15
              }, this)
            }, void 0, false, {
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
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Feedback__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 7
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
                lineNumber: 118,
                columnNumber: 43
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                children: ["95% \u0432\u044B\u0438\u0433\u0440\u0430\u043D\u043D\u044B\u0445", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 120,
                  columnNumber: 15
                }, this), "\u0434\u0435\u043B"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 13
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 11
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "advantage--item",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: "/img/advantage2.svg"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 43
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                children: ["\u0411\u043E\u043B\u0435\u0435 10 \u043B\u0435\u0442", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 124,
                  columnNumber: 28
                }, this), "\u043D\u0430 \u0440\u044B\u043D\u043A\u0435"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 13
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 11
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "advantage--item",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: "/img/advantage3.svg"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 43
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                children: ["\u0420\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u043F\u043E", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 128,
                  columnNumber: 27
                }, this), "\u0432\u0441\u0435\u043C\u0443 \u0420\u041A"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 13
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 11
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 117,
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
              lineNumber: 133,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: type === 'jur' && 'active',
              onClick: function onClick() {
                return setType('jur');
              },
              children: "\u042E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043B\u0438\u0446\u0430"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_ServiceList__WEBPACK_IMPORTED_MODULE_7__.default, {
            list: listofservice,
            type: type,
            setModal: setModal,
            setId: setId
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_ModalService__WEBPACK_IMPORTED_MODULE_5__.default, {
            isModalOpen: modal,
            closeModal: closeModal,
            id: id,
            type: type
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwibW9kYWwiLCJzZXRNb2RhbCIsImlkIiwic2V0SWQiLCJjbG9zZU1vZGFsIiwidHlwZSIsInNldFR5cGUiLCJsaXN0b2ZzZXJ2aWNlIiwiZml6c2VydmljZSIsImp1cnNlcnZpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBLGtCQUVmQywrQ0FBUSxDQUFDLEtBQUQsQ0FGTztBQUFBLE1BQ3RCQyxLQURzQjtBQUFBLE1BRTNCQyxRQUYyQjs7QUFBQSxtQkFJbEJGLCtDQUFRLEVBSlU7QUFBQSxNQUd0QkcsRUFIc0I7QUFBQSxNQUkzQkMsS0FKMkI7O0FBSzdCLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDdkJILFlBQVEsQ0FBQyxLQUFELENBQVI7QUFDRCxHQUZEOztBQUw2QixtQkFRTkYsK0NBQVEsQ0FBQyxLQUFELENBUkY7QUFBQSxNQVF0Qk0sSUFSc0I7QUFBQSxNQVFqQkMsT0FSaUI7O0FBUzdCLE1BQU1DLGFBQWEsR0FBR0YsSUFBSSxLQUFHLEtBQVAsR0FBZUcsNERBQWYsR0FBNEJDLDREQUFsRDtBQUNBLHNCQUNFO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBTUU7QUFBSyxlQUFTLEVBQUMsUUFBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLDhEQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FB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QUFBO0FBQUEsb0JBREYsZUFFRTtBQUFNLHVCQUFTLEVBQUVELElBQUksS0FBRyxLQUFQLElBQWdCLFFBQWpDO0FBQTJDLHFCQUFPLEVBQUU7QUFBQSx1QkFBTUMsT0FBTyxDQUFDLEtBQUQsQ0FBYjtBQUFBLGVBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFoQkYsZUFvQkUsOERBQUMsbUVBQUQ7QUFBYSxnQkFBSSxFQUFFQyxhQUFuQjtBQUFrQyxnQkFBSSxFQUFFRixJQUF4QztBQUE4QyxvQkFBUSxFQUFFSixRQUF4RDtBQUFrRSxpQkFBSyxFQUFFRTtBQUF6RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXBCRixlQXFCRSw4REFBQyxvRUFBRDtBQUFjLHVCQUFXLEVBQUVILEtBQTNCO0FBQWtDLHNCQUFVLEVBQUVJLFVBQTlDO0FBQTBELGNBQUUsRUFBRUYsRUFBOUQ7QUFBa0UsZ0JBQUksRUFBRUc7QUFBeEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWxGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE4SEQ7O0dBeEl1QlAsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kNzI2MzQ2N2NmYWNkMjk1ODJmOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQgRmVlZGJhY2sgZnJvbSAnLi4vY29tcG9uZW50cy9zaGFyZWQvRmVlZGJhY2snXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvc2hhcmVkL0hlYWRlcidcbmltcG9ydCBNb2RhbFNlcnZpY2UgZnJvbSAnLi4vY29tcG9uZW50cy9zaGFyZWQvTW9kYWxTZXJ2aWNlJ1xuaW1wb3J0IE5hdiBmcm9tICcuLi9jb21wb25lbnRzL3NoYXJlZC9OYXYnXG5pbXBvcnQgU2VydmljZUxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9zaGFyZWQvU2VydmljZUxpc3QnXG5pbXBvcnQge2ZpenNlcnZpY2UsIGp1cnNlcnZpY2V9IGZyb20gJy4uL2RlZmF1bHRzL2ZpenNlcnZpY2UnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFttb2RhbCxcbiAgICBzZXRNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2lkLFxuICAgIHNldElkXSA9IHVzZVN0YXRlKClcbiAgY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgICBzZXRNb2RhbChmYWxzZSlcbiAgfVxuICBjb25zdCBbdHlwZSxzZXRUeXBlXSA9IHVzZVN0YXRlKCdmaXonKVxuICBjb25zdCBsaXN0b2ZzZXJ2aWNlID0gdHlwZT09PSdmaXonID8gZml6c2VydmljZSA6IGp1cnNlcnZpY2VcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0naG9tZSc+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlxuICAgICAgICAgIE5hc2ggQ29tcGFueSAtINCg0LXRiNCw0LXQvNC+INCy0YHQtSFcbiAgICAgICAgPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmcnPjwvZGl2PlxuICAgICAgICA8TmF2IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiA8Lz4gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYm9keSc+XG4gICBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm9keV9fdG9wJz5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+0KDQtdGI0LXQvdC40LUg0LvRjtCx0YvRhSDRjtGA0LjQtNC40YfQtdGB0LrQuNGFINC30LDQtNCw0Yc8L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib2R5X19ibG9ja3MnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JvZHlfX2Jsb2NrJz5cbiAgICAgICAgICAgICAgPHNwYW4+0J/QvtC70YPRh9C4INGD0YHQu9GD0LPRgyA8Yj7QvtC90LvQsNC50L08L2I+PC9zcGFuPlxuICAgICAgICAgICAgICA8cD7Qn9C+0LvRg9GH0Lgg0YPRgdC70YPQs9GDIDxiPtC+0L3Qu9Cw0LnQvTwvYj4g0L3QtSDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+INCy0YvQtdC30LbQsNGC0Yw8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib2R5X19ibG9jayc+XG4gICAgICAgICAgICAgIDxzcGFuPtCe0L/Qu9Cw0YLQsDxiPtC/0L7RgdC70LU8L2I+IDxzcGFuPtC00L7RgdGC0LjQttC10L3QuNGPIDxiPtGA0LXQt9GD0LvRjNGC0LDRgtCwPC9iPjwvc3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgIDxwPtCf0LvQsNGC0LAg0LIg0LrQvtC90YbQtSDRgdC00LXQu9C60LgsINC/0L7Qu9GD0YfQtdC90LjRjyDRgNC10LfRg9C70YzRgtCw0YLQsDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JvZHlfX2Jsb2NrJz5cbiAgICAgICAgICAgICAgPHNwYW4+0J/QvtC70YPRh9C4PGI+INGB0LXQudGH0LDRgTwvYj48L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0nYWRzJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWRzLS1jb250ZW50Jz5cbiAgICAgICAgICAgIDxoMT7QntC/0LvQsNGC0Lgg0LfQsCDRgNC10LfRg9C70YzRgtCw0YIg0YHRgNCw0LfRgyDQvdC+INGB0L4g0YHQutC40LTQutC+0Lk8L2gxPlxuICAgICAgICAgICAgPHA+0JDQutGG0LjRjyFcbiAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgIDxzcGFuPtCf0YDRj9C80L4g0YHQtdC50YfQsNGBINGB0YLQvtC40LzQvtGB0YLRjDxicj48L2JyPlxuICAgICAgICAgICAgICAgIDIwMCDRgtGL0YEg0YLQtdC90LPQtSDigJQgNTAg0YLRi9GBLiDQotC10L3Qs9C1PC9zcGFuPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J1dHRvbnMnPlxuICAgICAgICAgIDxhIGhyZWY9Jy9kbHlhLWZpemljaGVza2l4LWxpYyc+PGlucHV0IHR5cGU9J2J1dHRvbicgY2xhc3NOYW1lPSdidXR0b24nIHZhbHVlPSfQpNC40LfQuNGH0LXRgdC60LjQtSDQu9C40YbQsCcvPjwvYT5cbiAgICAgICAgICA8YSBocmVmPScvanVyc2VydmljZSc+PGlucHV0IHR5cGU9J2J1dHRvbicgY2xhc3NOYW1lPSdidXR0b24gYnV0dG9uX2xpZ2h0JyB2YWx1ZT0n0K7RgNC40LTQuNGH0LXRgdC60LjQtSDQu9C40YbQsCAnLz48L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PiAqL31cblxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9J3doeXVzJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd2h5dXMtLWl0ZW0nPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3doeXVzLS1pbWFnZXMnPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0naW1hZ2UxJyBzcmM9Jy9pbWcvcGxhbnQucG5nJy8+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdpbWFnZTInIHNyYz0nL2ltZy9sb2dvL3doaXRlTG9nby5zdmcnLz5cbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2ltYWdlMycgc3JjPScvaW1nL2xvZ28vbG9nb1NtYWxsLnN2ZycvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd2h5dXMtLWNvbnRlbnQnPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9Jyc+0J/QvtGH0LXQvNGDINC80Ys/PC9wPlxuICAgICAgICAgICAgICA8aDI+0KEg0L3QsNGH0LDQu9C+INGA0LXQt9GD0LvRjNGC0LDRgiDQv9C+0YLQvtC8INC+0L/Qu9Cw0YLQsDwvaDI+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgINCd0LDRiNC4INGB0L/QtdGG0LjQsNC70LjRgdGC0Ysg0YHQvtC30LTQsNC70Lgg0L/RgNC+0LTRg9C60YIsINCx0LvQsNCz0L7QtNCw0YDRjyDQutC+0YLQvtGA0L7QvNGDINCS0LDQvCDQv9GA0LXQtNC+0YHRgtCw0LLQu9GP0LXRgtGB0Y9cbiAgICAgICAgICAgICAgICDRjdC60YHQutC70Y7Qt9C40LLQvdCw0Y8g0LLQvtC30LzQvtC20L3QvtGB0YLRjCDQsiDQvtC90LvQsNC50L0g0YDQtdC20LjQvNC1LCDQuNC3INC70Y7QsdC+0Lk8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3aHl1cy0taXRlbSc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd2h5dXMtLWNvbnRlbnQnPlxuICAgICAgICAgICAgICA8aDI+OTUlINCz0YDQsNC90YLQuNC4PGJyPjwvYnI+XG4gICAgICAgICAgICAgICAg0YPRgdC/0LXRhdCwINC00LXQu9CwPC9oMj5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAg0J3QsNGI0Lgg0YHQv9C10YbQuNCw0LvQuNGB0YLRiyDRgdC+0LfQtNCw0LvQuCDQv9GA0L7QtNGD0LrRgiwg0LHQu9Cw0LPQvtC00LDRgNGPINC60L7RgtC+0YDQvtC80YMg0JLQsNC8INC/0YDQtdC00L7RgdGC0LDQstC70Y/QtdGC0YHRj1xuICAgICAgICAgICAgICAgINGN0LrRgdC60LvRjtC30LjQstC90LDRjyDQstC+0LfQvNC+0LbQvdC+0YHRgtGMINCyINC+0L3Qu9Cw0LnQvSDRgNC10LbQuNC80LUsINC40Lcg0LvRjtCx0L7QuTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd2h5dXMtLWltYWdlcyc+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdpbWFnZTEnIHNyYz0nL2ltZy9jdWJvay5wbmcnLz5cbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2ltYWdlMicgc3JjPScvaW1nL2xvZ28vd2hpdGVMb2dvLnN2ZycvPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0naW1hZ2UzJyBzcmM9Jy9pbWcvbG9nby9sb2dvU21hbGwuc3ZnJy8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3aHl1cy0taXRlbSc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd2h5dXMtLWltYWdlcyc+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdpbWFnZTEnIHNyYz0nL2ltZy9zaGVldC5wbmcnLz5cbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2ltYWdlMicgc3JjPScvaW1nL2xvZ28vd2hpdGVMb2dvLnN2ZycvPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0naW1hZ2UzJyBzcmM9Jy9pbWcvbG9nby9sb2dvU21hbGwuc3ZnJy8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3aHl1cy0tY29udGVudCc+XG4gICAgICAgICAgICAgIDxoMj7Ql9Cw0YnQuNGC0LAg0LLQsNGI0LjRhSDQuNC90YLQtdGA0LXRgdC+0LIg0L3QsCDQstGL0YHQvtC60L7QvCDRg9GA0L7QstC90LUhPC9oMj5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAg0J3QsNGI0Lgg0YHQv9C10YbQuNCw0LvQuNGB0YLRiyDRgdC+0LfQtNCw0LvQuCDQv9GA0L7QtNGD0LrRgiwg0LHQu9Cw0LPQvtC00LDRgNGPINC60L7RgtC+0YDQvtC80YMg0JLQsNC8INC/0YDQtdC00L7RgdGC0LDQstC70Y/QtdGC0YHRj1xuICAgICAgICAgICAgICAgINGN0LrRgdC60LvRjtC30LjQstC90LDRjyDQstC+0LfQvNC+0LbQvdC+0YHRgtGMINCyINC+0L3Qu9Cw0LnQvSDRgNC10LbQuNC80LUsINC40Lcg0LvRjtCx0L7QuTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PiAqL31cbiAgICAgIFxuICAgICAgPEZlZWRiYWNrLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlcnZpY2VzJz5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT0nYWR2YW50YWdlJz5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdhZHZhbnRhZ2UtLWl0ZW0nPjxpbWcgc3JjPScvaW1nL2FkdmFudGFnZTEuc3ZnJy8+XG4gICAgICAgICAgICA8cD45NSUg0LLRi9C40LPRgNCw0L3QvdGL0YVcbiAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgINC00LXQuzwvcD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2FkdmFudGFnZS0taXRlbSc+PGltZyBzcmM9Jy9pbWcvYWR2YW50YWdlMi5zdmcnLz5cbiAgICAgICAgICAgIDxwPtCR0L7Qu9C10LUgMTAg0LvQtdGCPGJyPjwvYnI+XG4gICAgICAgICAgICAgINC90LAg0YDRi9C90LrQtTwvcD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2FkdmFudGFnZS0taXRlbSc+PGltZyBzcmM9Jy9pbWcvYWR2YW50YWdlMy5zdmcnLz5cbiAgICAgICAgICAgIDxwPtCg0LDQsdC+0YLQsNC10Lwg0L/Qvjxicj48L2JyPlxuICAgICAgICAgICAgICDQstGB0LXQvNGDINCg0Jo8L3A+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VydmljZXMtLWhlYWRlcic+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3R5cGU9PT0nZml6JyAmJiAnYWN0aXZlJ30gb25DbGljaz17KCkgPT4gc2V0VHlwZSgnZml6Jyl9PtCk0LjQt9C40YfQtdGB0LrQuNC1INC70LjRhtCwPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXt0eXBlPT09J2p1cicgJiYgJ2FjdGl2ZSd9IG9uQ2xpY2s9eygpID0+IHNldFR5cGUoJ2p1cicpfT7QrtGA0LjQtNC40YfQtdGB0LrQuNC1INC70LjRhtCwPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxTZXJ2aWNlTGlzdCBsaXN0PXtsaXN0b2ZzZXJ2aWNlfSB0eXBlPXt0eXBlfSBzZXRNb2RhbD17c2V0TW9kYWx9IHNldElkPXtzZXRJZH0vPlxuICAgICAgICAgIDxNb2RhbFNlcnZpY2UgaXNNb2RhbE9wZW49e21vZGFsfSBjbG9zZU1vZGFsPXtjbG9zZU1vZGFsfSBpZD17aWR9IHR5cGU9e3R5cGV9Lz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICAgICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==