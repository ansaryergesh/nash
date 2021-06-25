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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
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
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "body__btn",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "text-center",
              onClick: function onClick() {
                return next_router__WEBPACK_IMPORTED_MODULE_9___default().push('/uslugi');
              },
              children: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C 50% \u0441\u043A\u0438\u0434\u043A\u0438"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 38
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
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
                lineNumber: 58,
                columnNumber: 43
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                children: ["95% \u0432\u044B\u0438\u0433\u0440\u0430\u043D\u043D\u044B\u0445", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 60,
                  columnNumber: 15
                }, this), "\u0434\u0435\u043B"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 13
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 11
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "advantage--item",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: "/img/advantage2.svg"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 43
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                children: ["\u0411\u043E\u043B\u0435\u0435 10 \u043B\u0435\u0442", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 64,
                  columnNumber: 28
                }, this), "\u043D\u0430 \u0440\u044B\u043D\u043A\u0435"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 13
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 11
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "advantage--item",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: "/img/advantage3.svg"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 43
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                children: ["\u0420\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u043F\u043E", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 27
                }, this), "\u0432\u0441\u0435\u043C\u0443 \u0420\u041A"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 13
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 11
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 57,
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
              lineNumber: 73,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: type === 'jur' && 'active',
              onClick: function onClick() {
                return setType('jur');
              },
              children: "\u042E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043B\u0438\u0446\u0430"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_ServiceList__WEBPACK_IMPORTED_MODULE_7__.default, {
            list: listofservice,
            type: type,
            setModal: setModal,
            setId: setId
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_ModalService__WEBPACK_IMPORTED_MODULE_5__.default, {
            isModalOpen: modal,
            closeModal: closeModal,
            id: id,
            type: type
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwibW9kYWwiLCJzZXRNb2RhbCIsImlkIiwic2V0SWQiLCJjbG9zZU1vZGFsIiwidHlwZSIsInNldFR5cGUiLCJsaXN0b2ZzZXJ2aWNlIiwiZml6c2VydmljZSIsImp1cnNlcnZpY2UiLCJSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQSxrQkFFZkMsK0NBQVEsQ0FBQyxLQUFELENBRk87QUFBQSxNQUN0QkMsS0FEc0I7QUFBQSxNQUUzQkMsUUFGMkI7O0FBQUEsbUJBSWxCRiwrQ0FBUSxFQUpVO0FBQUEsTUFHdEJHLEVBSHNCO0FBQUEsTUFJM0JDLEtBSjJCOztBQUs3QixNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3ZCSCxZQUFRLENBQUMsS0FBRCxDQUFSO0FBQ0QsR0FGRDs7QUFMNkIsbUJBUU5GLCtDQUFRLENBQUMsS0FBRCxDQVJGO0FBQUEsTUFRdEJNLElBUnNCO0FBQUEsTUFRakJDLE9BUmlCOztBQVM3QixNQUFNQyxhQUFhLEdBQUdGLElBQUksS0FBRyxLQUFQLEdBQWVHLDREQUFmLEdBQTRCQyw0REFBbEQ7QUFDQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQU1FO0FBQUssZUFBUyxFQUFDLFFBQWY7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRSw4REFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtB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ZWQwMTMxMWUzOTIwMDEwOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQgRmVlZGJhY2sgZnJvbSAnLi4vY29tcG9uZW50cy9zaGFyZWQvRmVlZGJhY2snXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvc2hhcmVkL0hlYWRlcidcbmltcG9ydCBNb2RhbFNlcnZpY2UgZnJvbSAnLi4vY29tcG9uZW50cy9zaGFyZWQvTW9kYWxTZXJ2aWNlJ1xuaW1wb3J0IE5hdiBmcm9tICcuLi9jb21wb25lbnRzL3NoYXJlZC9OYXYnXG5pbXBvcnQgU2VydmljZUxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9zaGFyZWQvU2VydmljZUxpc3QnXG5pbXBvcnQge2ZpenNlcnZpY2UsIGp1cnNlcnZpY2V9IGZyb20gJy4uL2RlZmF1bHRzL2ZpenNlcnZpY2UnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW21vZGFsLFxuICAgIHNldE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbaWQsXG4gICAgc2V0SWRdID0gdXNlU3RhdGUoKVxuICBjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xuICAgIHNldE1vZGFsKGZhbHNlKVxuICB9XG4gIGNvbnN0IFt0eXBlLHNldFR5cGVdID0gdXNlU3RhdGUoJ2ZpeicpXG4gIGNvbnN0IGxpc3RvZnNlcnZpY2UgPSB0eXBlPT09J2ZpeicgPyBmaXpzZXJ2aWNlIDoganVyc2VydmljZVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdob21lJz5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+XG4gICAgICAgICAgTmFzaCBDb21wYW55IC0g0KDQtdGI0LDQtdC80L4g0LLRgdC1IVxuICAgICAgICA8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2hlYWRlcic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZyc+PC9kaXY+XG4gICAgICAgIDxOYXYgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgey8qIDwvPiAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdib2R5Jz5cbiAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib2R5X190b3AnPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQtY2VudGVyJz7QoNC10YjQtdC90LjQtSDQu9GO0LHRi9GFINGO0YDQuNC00LjRh9C10YHQutC40YUg0LfQsNC00LDRhzwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JvZHlfX2Jsb2Nrcyc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm9keV9fYmxvY2snPlxuICAgICAgICAgICAgICA8c3Bhbj7Qn9C+0LvRg9GH0Lgg0YPRgdC70YPQs9GDIDxiPtC+0L3Qu9Cw0LnQvTwvYj48L3NwYW4+XG4gICAgICAgICAgICAgIDxwPtCf0L7Qu9GD0YfQuCDRg9GB0LvRg9Cz0YMgPGI+0L7QvdC70LDQudC9PC9iPiDQvdC1INC+0LHRj9C30LDRgtC10LvRjNC90L4g0LLRi9C10LfQttCw0YLRjDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JvZHlfX2Jsb2NrJz5cbiAgICAgICAgICAgICAgPHNwYW4+0J7Qv9C70LDRgtCwPGI+INC/0L7RgdC70LU8L2I+IDxzcGFuPtC00L7RgdGC0LjQttC10L3QuNGPIDxiPtGA0LXQt9GD0LvRjNGC0LDRgtCwPC9iPjwvc3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgIDxwPtCf0LvQsNGC0LAg0LIg0LrQvtC90YbQtSDRgdC00LXQu9C60LgsINC/0L7Qu9GD0YfQtdC90LjRjyDRgNC10LfRg9C70YzRgtCw0YLQsDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JvZHlfX2Jsb2NrJz5cbiAgICAgICAgICAgICAgPHNwYW4+0J/QvtC70YPRh9C4PGI+INGB0LXQudGH0LDRgTwvYj4gPHNwYW4+0L/Qu9Cw0YLQuCDQv9C+0YLQvtC8PC9zcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPHA+0KHQvdCw0YfQsNC70LAg0YPRgdC70YPQs9CwINC/0L7RgtC+0Lwg0L7Qv9C70LDRgtCwPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm9keV9fYnRuJz48cCBjbGFzc05hbWU9J3RleHQtY2VudGVyJyBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaCgnL3VzbHVnaScpfT7Qn9C+0LvRg9GH0LjRgtGMIDUwJSDRgdC60LjQtNC60Lg8L3A+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZXJ2aWNlcyc+XG4gICAgICAgXG4gICAgICAgIDx1bCBjbGFzc05hbWU9J2FkdmFudGFnZSc+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT0nYWR2YW50YWdlLS1pdGVtJz48aW1nIHNyYz0nL2ltZy9hZHZhbnRhZ2UxLnN2ZycvPlxuICAgICAgICAgICAgPHA+OTUlINCy0YvQuNCz0YDQsNC90L3Ri9GFXG4gICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICDQtNC10Ls8L3A+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdhZHZhbnRhZ2UtLWl0ZW0nPjxpbWcgc3JjPScvaW1nL2FkdmFudGFnZTIuc3ZnJy8+XG4gICAgICAgICAgICA8cD7QkdC+0LvQtdC1IDEwINC70LXRgjxicj48L2JyPlxuICAgICAgICAgICAgICDQvdCwINGA0YvQvdC60LU8L3A+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdhZHZhbnRhZ2UtLWl0ZW0nPjxpbWcgc3JjPScvaW1nL2FkdmFudGFnZTMuc3ZnJy8+XG4gICAgICAgICAgICA8cD7QoNCw0LHQvtGC0LDQtdC8INC/0L48YnI+PC9icj5cbiAgICAgICAgICAgICAg0LLRgdC10LzRgyDQoNCaPC9wPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlcnZpY2VzLS1oZWFkZXInPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXt0eXBlPT09J2ZpeicgJiYgJ2FjdGl2ZSd9IG9uQ2xpY2s9eygpID0+IHNldFR5cGUoJ2ZpeicpfT7QpNC40LfQuNGH0LXRgdC60LjQtSDQu9C40YbQsDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17dHlwZT09PSdqdXInICYmICdhY3RpdmUnfSBvbkNsaWNrPXsoKSA9PiBzZXRUeXBlKCdqdXInKX0+0K7RgNC40LTQuNGH0LXRgdC60LjQtSDQu9C40YbQsDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8U2VydmljZUxpc3QgbGlzdD17bGlzdG9mc2VydmljZX0gdHlwZT17dHlwZX0gc2V0TW9kYWw9e3NldE1vZGFsfSBzZXRJZD17c2V0SWR9Lz5cbiAgICAgICAgICA8TW9kYWxTZXJ2aWNlIGlzTW9kYWxPcGVuPXttb2RhbH0gY2xvc2VNb2RhbD17Y2xvc2VNb2RhbH0gaWQ9e2lkfSB0eXBlPXt0eXBlfS8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIFxuICAgICAgPC9kaXY+XG4gICAgICAgICAgIFxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=