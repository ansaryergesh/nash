self["webpackHotUpdate_N_E"]("pages/cabinet/requests",{

/***/ "./components/cabinet/CabinetRequests.js":
/*!***********************************************!*\
  !*** ./components/cabinet/CabinetRequests.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toast-notifications */ "./node_modules/react-toast-notifications/dist/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\job\\nashcompany\\components\\cabinet\\CabinetRequests.js",
    _this = undefined,
    _s = $RefreshSig$();






var Actives = function Actives(_ref) {
  _s();

  var actives = _ref.actives,
      setLoading = _ref.setLoading,
      getUserDeal = _ref.getUserDeal;

  var _useToasts = (0,react_toast_notifications__WEBPACK_IMPORTED_MODULE_4__.useToasts)(),
      addToast = _useToasts.addToast;

  var onCancel = function onCancel(event) {
    var lead_id = event.currentTarget.dataset.id;
    sweetalert__WEBPACK_IMPORTED_MODULE_3___default()('Отказаться', {
      text: 'Вы точно хотите отказаться от этой услуги?',
      buttons: {
        "catch": {
          text: 'Да, отказаться',
          value: 'catch'
        },
        cancel: 'Нет'
      }
    }).then(function (val) {
      switch (val) {
        case 'catch':
          setLoading(true);
          axios__WEBPACK_IMPORTED_MODULE_1___default().get("".concat("https://crediter.kz/api", "/stageDeal?ID=").concat(lead_id)).then(function (res) {
            setLoading(false);

            if (res.data.success) {
              getUserDeal();
              addToast('Вы успешно отказались', {
                appearance: 'success',
                autoDismiss: true
              });
            } else {
              addToast('Ваша заявка уже рассматривается юристами', {
                appearance: 'error',
                autoDismiss: true
              });
            }
          });

        case "cancel":
          break;
      }
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: actives.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      children: "\u0423 \u0432\u0430\u0441 \u043D\u0435\u0442\u0443 \u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0445 \u0437\u0430\u044F\u0432\u043E\u043A"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 31
    }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "request_list",
      children: actives.map(function (a) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: a.title === 'Отказ от заказа' ? 'd-none' : 'request_card',
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "status ",
            children: a.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "card_info",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "sphere",
              children: ["\u0421\u0444\u0435\u0440\u0430: ", a.sphere]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "description",
              children: ["\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435: ", a.description]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              "data-id": a.dealID,
              onClick: function onClick(e) {
                return onCancel(e);
              },
              className: "cancel_btn",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: "\u041E\u0442\u043A\u0430\u0437\u0430\u0442\u044C\u0441\u044F"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 102
              }, _this)
            }, a.dealID, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 68
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 5
  }, _this);
};

_s(Actives, "9ANHIxLZqcHjI5TRvQHvKjO6arI=", false, function () {
  return [react_toast_notifications__WEBPACK_IMPORTED_MODULE_4__.useToasts];
});

_c = Actives;

var NotFinished = function NotFinished(_ref2) {
  var notFinished = _ref2.notFinished;

  var onContinue = function onContinue(event) {
    var id = event.target.dataset.id;
    var step = parseInt(event.target.dataset.step);
    var amount = event.target.dataset.amount;
    var type = event.target.dataset.type;
    next_router__WEBPACK_IMPORTED_MODULE_2___default().push({
      pathname: '/cabinet/continue',
      query: {
        step: step + 1,
        id: id,
        type: type,
        amount: amount
      }
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "request_list",
    children: notFinished.map(function (x) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        "data-id": x.id,
        "data-step": x.step,
        className: "request_card",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "status status_info",
          children: x.lead
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "capitalize",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
            children: "\u0424\u0418\u041E:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 40
          }, _this), " ", x.fio]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, _this), x.sphere !== null ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
            children: "\u0421\u0444\u0435\u0440\u0430: "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 17
          }, _this), x.sphere]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: ["\u0422\u0435\u043B\u0435\u0444\u043E\u043D \u043D\u043E\u043C\u0435\u0440: +", x.phone]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 53
        }, _this), x.amount !== null && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
            children: "\u0421\u0443\u043C\u043C\u0430 \u0438\u0441\u043A\u0430:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 39
          }, _this), " ", x.amount, " \u0442\u0433"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 33
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          "data-id": x.id,
          "data-step": x.step,
          "data-type": x.client_type,
          "data-amount": x.amount || null,
          className: "detailedbtn",
          onClick: function onClick(e) {
            return onContinue(e);
          },
          children: "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u0430\u043D\u043A\u0435\u0442\u0443 \u2B9E"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 83,
    columnNumber: 5
  }, _this);
};

_c2 = NotFinished;

var CabinetRequests = function CabinetRequests(_ref3) {
  var setActive = _ref3.setActive,
      isActive = _ref3.isActive,
      actives = _ref3.actives,
      notFinished = _ref3.notFinished,
      setLoading = _ref3.setLoading;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "container cabinet__requests",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "header",
      children: "\u041C\u043E\u0438 \u0437\u0430\u044F\u0432\u043A\u0438"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "request_block",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "request_option",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: isActive && 'active',
          onClick: function onClick() {
            return setActive(true);
          },
          children: "\u0410\u043A\u0442\u0438\u0432\u043D\u044B\u0435"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: !isActive && 'active',
          onClick: function onClick() {
            return setActive(false);
          },
          children: "\u041D\u0435\u0434\u043E\u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u044B\u0435"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 9
      }, _this), isActive ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toast_notifications__WEBPACK_IMPORTED_MODULE_4__.ToastProvider, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Actives, {
          actives: actives,
          setLoading: setLoading
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 28
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 13
      }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NotFinished, {
        notFinished: notFinished
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 110,
    columnNumber: 5
  }, _this);
};

_c3 = CabinetRequests;
/* harmony default export */ __webpack_exports__["default"] = (CabinetRequests);

var _c, _c2, _c3;

$RefreshReg$(_c, "Actives");
$RefreshReg$(_c2, "NotFinished");
$RefreshReg$(_c3, "CabinetRequests");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYWJpbmV0L0NhYmluZXRSZXF1ZXN0cy5qcyJdLCJuYW1lcyI6WyJBY3RpdmVzIiwiYWN0aXZlcyIsInNldExvYWRpbmciLCJnZXRVc2VyRGVhbCIsInVzZVRvYXN0cyIsImFkZFRvYXN0Iiwib25DYW5jZWwiLCJldmVudCIsImxlYWRfaWQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImlkIiwic3dhbCIsInRleHQiLCJidXR0b25zIiwidmFsdWUiLCJjYW5jZWwiLCJ0aGVuIiwidmFsIiwiYXhpb3MiLCJwcm9jZXNzIiwicmVzIiwiZGF0YSIsInN1Y2Nlc3MiLCJhcHBlYXJhbmNlIiwiYXV0b0Rpc21pc3MiLCJsZW5ndGgiLCJtYXAiLCJhIiwidGl0bGUiLCJzcGhlcmUiLCJkZXNjcmlwdGlvbiIsImRlYWxJRCIsImUiLCJOb3RGaW5pc2hlZCIsIm5vdEZpbmlzaGVkIiwib25Db250aW51ZSIsInRhcmdldCIsInN0ZXAiLCJwYXJzZUludCIsImFtb3VudCIsInR5cGUiLCJSb3V0ZXIiLCJwYXRobmFtZSIsInF1ZXJ5IiwieCIsImxlYWQiLCJmaW8iLCJwaG9uZSIsImNsaWVudF90eXBlIiwiQ2FiaW5ldFJlcXVlc3RzIiwic2V0QWN0aXZlIiwiaXNBY3RpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBc0M7QUFBQTs7QUFBQSxNQUFwQ0MsT0FBb0MsUUFBcENBLE9BQW9DO0FBQUEsTUFBNUJDLFVBQTRCLFFBQTVCQSxVQUE0QjtBQUFBLE1BQWpCQyxXQUFpQixRQUFqQkEsV0FBaUI7O0FBQUEsbUJBQ2pDQyxvRUFBUyxFQUR3QjtBQUFBLE1BQzdDQyxRQUQ2QyxjQUM3Q0EsUUFENkM7O0FBRXBELE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFB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QUNFO0FBQUcsZUFBUyxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUdFO0FBQUssZUFBUyxFQUFDLGVBQWY7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUMsZ0JBQWY7QUFBQSxnQ0FDRTtBQUFNLG1CQUFTLEVBQUVrRCxRQUFRLElBQUksUUFBN0I7QUFBdUMsaUJBQU8sRUFBRTtBQUFBLG1CQUFNRCxTQUFTLENBQUMsSUFBRCxDQUFmO0FBQUEsV0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFNLG1CQUFTLEVBQUUsQ0FBQ0MsUUFBRCxJQUFhLFFBQTlCO0FBQXdDLGlCQUFPLEVBQUU7QUFBQSxtQkFBTUQsU0FBUyxDQUFDLEtBQUQsQ0FBZjtBQUFBLFdBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLEVBS0dDLFFBQVEsZ0JBQ0wsOERBQUMsb0VBQUQ7QUFBQSwrQkFBZSw4REFBQyxPQUFEO0FBQVMsaUJBQU8sRUFBRW5ELE9BQWxCO0FBQTJCLG9CQUFVLEVBQUVDO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREssZ0JBRUwsOERBQUMsV0FBRDtBQUFhLG1CQUFXLEVBQUVpQztBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFtQ0QsQ0FwQ0Q7O01BQU1lLGU7QUFxQ04sK0RBQWVBLGVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FiaW5ldC9yZXF1ZXN0cy43YzMyOWQ5YmQyODM0YjIyNGUwYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHN3YWwgZnJvbSAnc3dlZXRhbGVydCc7XHJcbmltcG9ydCB7VG9hc3RQcm92aWRlciwgdXNlVG9hc3RzfSBmcm9tICdyZWFjdC10b2FzdC1ub3RpZmljYXRpb25zJ1xyXG5jb25zdCBBY3RpdmVzID0gKHthY3RpdmVzLHNldExvYWRpbmcsZ2V0VXNlckRlYWx9KSA9PiB7XHJcbiAgY29uc3Qge2FkZFRvYXN0fSA9IHVzZVRvYXN0cygpXHJcbiAgY29uc3Qgb25DYW5jZWwgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IGxlYWRfaWQgPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQ7XHJcbiAgICBzd2FsKCfQntGC0LrQsNC30LDRgtGM0YHRjycsIHtcclxuICAgICAgdGV4dDogJ9CS0Ysg0YLQvtGH0L3QviDRhdC+0YLQuNGC0LUg0L7RgtC60LDQt9Cw0YLRjNGB0Y8g0L7RgiDRjdGC0L7QuSDRg9GB0LvRg9Cz0Lg/JyxcclxuICAgICAgYnV0dG9uczoge1xyXG4gICAgICAgIGNhdGNoOiB7XHJcbiAgICAgICAgICB0ZXh0OiAn0JTQsCwg0L7RgtC60LDQt9Cw0YLRjNGB0Y8nLFxyXG4gICAgICAgICAgdmFsdWU6ICdjYXRjaCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjYW5jZWw6ICfQndC10YInXHJcbiAgICAgIH1cclxuICAgIH0pLnRoZW4odmFsPT4ge1xyXG4gICAgICBzd2l0Y2godmFsKSB7XHJcbiAgICAgICAgY2FzZSAnY2F0Y2gnOlxyXG4gICAgICAgICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgICAgICAgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9zdGFnZURlYWw/SUQ9JHtsZWFkX2lkfWApXHJcbiAgICAgICAgICAgIC50aGVuKHJlcz0+IHtcclxuICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgICAgICAgIGlmKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgIGdldFVzZXJEZWFsKClcclxuICAgICAgICAgICAgICAgIGFkZFRvYXN0KCfQktGLINGD0YHQv9C10YjQvdC+INC+0YLQutCw0LfQsNC70LjRgdGMJywge1xyXG4gICAgICAgICAgICAgICAgICBhcHBlYXJhbmNlOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgIGF1dG9EaXNtaXNzOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIGFkZFRvYXN0KCfQktCw0YjQsCDQt9Cw0Y/QstC60LAg0YPQttC1INGA0LDRgdGB0LzQsNGC0YDQuNCy0LDQtdGC0YHRjyDRjtGA0LjRgdGC0LDQvNC4Jywge1xyXG4gICAgICAgICAgICAgICAgICBhcHBlYXJhbmNlOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgICBhdXRvRGlzbWlzczogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgY2FzZSBcImNhbmNlbFwiOlxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHthY3RpdmVzLmxlbmd0aCA9PT0gMCA/IDxoMj7QoyDQstCw0YEg0L3QtdGC0YMg0LDQutGC0LjQstC90YvRhSDQt9Cw0Y/QstC+0Lo8L2gyPiA6PGRpdiBjbGFzc05hbWU9J3JlcXVlc3RfbGlzdCc+XHJcbiAgICAgICAge2FjdGl2ZXMubWFwKGEgPT4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2EudGl0bGUgPT09ICfQntGC0LrQsNC3INC+0YIg0LfQsNC60LDQt9CwJyA/ICdkLW5vbmUnIDogJ3JlcXVlc3RfY2FyZCd9PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J3N0YXR1cyAnPnthLnRpdGxlfTwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmRfaW5mbyc+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzcGhlcmUnPtCh0YTQtdGA0LA6IHthLnNwaGVyZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdkZXNjcmlwdGlvbic+0J7Qv9C40YHQsNC90LjQtToge2EuZGVzY3JpcHRpb259PC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICB7LyogPHNwYW4gY2xhc3NOYW1lPSdkZXNjcmlwdGlvbic+0J7RgtC60LDQt9Cw0YLRjNGB0Y86IHthLmRlc2NyaXB0aW9ufTwvc3Bhbj4gKi99XHJcbiAgICAgICAgICAgICAgey8qIHthLmJ1dHRvbiAmJiA8ZGl2IGRhdGEtaWQ9e2EuZGVhbElEfSBrZXk9e2EuZGVhbElEfSBvbkNsaWNrPXtlPT5vbkNhbmNlbChlKX0gY2xhc3NOYW1lPSdjYW5jZWxfYnRuJz48c3Bhbj7QntGC0LrQsNC30LDRgtGM0YHRjzwvc3Bhbj48L2Rpdj59ICovfVxyXG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1pZD17YS5kZWFsSUR9IGtleT17YS5kZWFsSUR9IG9uQ2xpY2s9e2U9Pm9uQ2FuY2VsKGUpfSBjbGFzc05hbWU9J2NhbmNlbF9idG4nPjxzcGFuPtCe0YLQutCw0LfQsNGC0YzRgdGPPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj59XHJcbiAgICAgIFxyXG4gICAgPC9kaXY+XHJcblxyXG4gIClcclxufVxyXG5cclxuY29uc3QgTm90RmluaXNoZWQgPSAoe25vdEZpbmlzaGVkfSkgPT4ge1xyXG4gIGNvbnN0IG9uQ29udGludWUgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IGlkID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQuaWQ7XHJcbiAgICBjb25zdCBzdGVwID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LmRhdGFzZXQuc3RlcCk7XHJcbiAgICBjb25zdCBhbW91bnQgPSBldmVudC50YXJnZXQuZGF0YXNldC5hbW91bnRcclxuICAgIGNvbnN0IHR5cGUgPSBldmVudC50YXJnZXQuZGF0YXNldC50eXBlO1xyXG4gICAgUm91dGVyLnB1c2goe1xyXG4gICAgICBwYXRobmFtZTogJy9jYWJpbmV0L2NvbnRpbnVlJyxcclxuICAgICAgcXVlcnk6IHtcclxuICAgICAgICBzdGVwOiBzdGVwICsgMSxcclxuICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgdHlwZTogdHlwZSxcclxuICAgICAgICBhbW91bnQ6IGFtb3VudFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J3JlcXVlc3RfbGlzdCc+XHJcbiAgICAgIHtub3RGaW5pc2hlZC5tYXAoeCA9PiAoXHJcbiAgICAgICAgPGRpdiBkYXRhLWlkPXt4LmlkfSBkYXRhLXN0ZXA9e3guc3RlcH0gY2xhc3NOYW1lPSdyZXF1ZXN0X2NhcmQnPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSdzdGF0dXMgc3RhdHVzX2luZm8nPlxyXG4gICAgICAgICAgICB7eC5sZWFkfVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjYXBpdGFsaXplJz48Yj7QpNCY0J46PC9iPiB7eC5maW99PC9zcGFuPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAge3guc3BoZXJlICE9PSBudWxsID9cclxuICAgICAgICAgIDxzcGFuPjxiPtCh0YTQtdGA0LA6IDwvYj57eC5zcGhlcmV9PC9zcGFuPiA6ICAgPHNwYW4+0KLQtdC70LXRhNC+0L0g0L3QvtC80LXRgDogK3t4LnBob25lfTwvc3Bhbj59XHJcblxyXG4gICAgICAgICAge3guYW1vdW50ICE9PSBudWxsICYmIDxzcGFuPjxiPtCh0YPQvNC80LAg0LjRgdC60LA6PC9iPiB7eC5hbW91bnR9INGC0LM8L3NwYW4+fVxyXG4gICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgZGF0YS1pZD17eC5pZH1cclxuICAgICAgICAgICAgZGF0YS1zdGVwPXt4LnN0ZXB9XHJcbiAgICAgICAgICAgIGRhdGEtdHlwZT17eC5jbGllbnRfdHlwZX1cclxuICAgICAgICAgICAgZGF0YS1hbW91bnQ9e3guYW1vdW50IHx8IG51bGx9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nZGV0YWlsZWRidG4nXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gb25Db250aW51ZShlKX0+0J/RgNC+0LTQvtC70LbQuNGC0Ywg0LDQvdC60LXRgtGDIOKunjwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IENhYmluZXRSZXF1ZXN0cyA9ICh7c2V0QWN0aXZlLCBpc0FjdGl2ZSwgYWN0aXZlcywgbm90RmluaXNoZWQsIHNldExvYWRpbmd9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgY2FiaW5ldF9fcmVxdWVzdHMnPlxyXG4gICAgICA8cCBjbGFzc05hbWU9J2hlYWRlcic+0JzQvtC4INC30LDRj9Cy0LrQuDwvcD5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZXF1ZXN0X2Jsb2NrJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVxdWVzdF9vcHRpb24nPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtpc0FjdGl2ZSAmJiAnYWN0aXZlJ30gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlKHRydWUpfT7QkNC60YLQuNCy0L3Ri9C1PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXshaXNBY3RpdmUgJiYgJ2FjdGl2ZSd9IG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZShmYWxzZSl9PtCd0LXQtNC+0LfQsNC/0L7Qu9C90LXQvdC90YvQtTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7aXNBY3RpdmVcclxuICAgICAgICAgID8gPFRvYXN0UHJvdmlkZXI+PEFjdGl2ZXMgYWN0aXZlcz17YWN0aXZlc30gc2V0TG9hZGluZz17c2V0TG9hZGluZ30vPjwvVG9hc3RQcm92aWRlcj5cclxuICAgICAgICAgIDogPE5vdEZpbmlzaGVkIG5vdEZpbmlzaGVkPXtub3RGaW5pc2hlZH0vPn1cclxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9J3JlcXVlc3RfbGlzdCc+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVxdWVzdF9jYXJkJz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdzdGF0dXMnPtCSINC+0LHRgNCw0LHQvtGC0LrQtTwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmRfaW5mbyc+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzcGhlcmUnPtCh0YTQtdGA0LA60KHQtdC80LXQudC90YvQtSDRgdC/0L7RgNGLPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZGVzY3JpcHRpb24nPtCe0L/QuNGB0LDQvdC40LU6TG9yZW0gbG9yZW0gbG9yZW0gbG9yZW0gbG9yZW08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdwcmljZSc+0KHRgtC+0LjQvNC+0YHRgtGMINGD0YHQu9GD0LPQuDogMTAwMDAwINGC0LMgPHNwYW4+MjAwMDAw0YLQszwvc3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdkZXRhaWxlZGJ0bic+0JTQtdGC0LDQu9C4INC30LDRj9Cy0LrQuCDirp48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVxdWVzdF9jYXJkJz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdzdGF0dXMnPtCSINC+0LHRgNCw0LHQvtGC0LrQtTwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmRfaW5mbyc+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzcGhlcmUnPtCh0YTQtdGA0LA60KHQtdC80LXQudC90YvQtSDRgdC/0L7RgNGLPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZGVzY3JpcHRpb24nPtCe0L/QuNGB0LDQvdC40LU6TG9yZW0gbG9yZW0gbG9yZW0gbG9yZW0gbG9yZW08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdwcmljZSc+0KHRgtC+0LjQvNC+0YHRgtGMINGD0YHQu9GD0LPQuDogMTAwMDAwINGC0LMgPHNwYW4+MjAwMDAw0YLQszwvc3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdkZXRhaWxlZGJ0bic+0JTQtdGC0LDQu9C4INC30LDRj9Cy0LrQuCDirp48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBDYWJpbmV0UmVxdWVzdHMiXSwic291cmNlUm9vdCI6IiJ9