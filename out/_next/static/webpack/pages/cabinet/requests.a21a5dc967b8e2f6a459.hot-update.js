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
              getUserDeal;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYWJpbmV0L0NhYmluZXRSZXF1ZXN0cy5qcyJdLCJuYW1lcyI6WyJBY3RpdmVzIiwiYWN0aXZlcyIsInNldExvYWRpbmciLCJnZXRVc2VyRGVhbCIsInVzZVRvYXN0cyIsImFkZFRvYXN0Iiwib25DYW5jZWwiLCJldmVudCIsImxlYWRfaWQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImlkIiwic3dhbCIsInRleHQiLCJidXR0b25zIiwidmFsdWUiLCJjYW5jZWwiLCJ0aGVuIiwidmFsIiwiYXhpb3MiLCJwcm9jZXNzIiwicmVzIiwiZGF0YSIsInN1Y2Nlc3MiLCJhcHBlYXJhbmNlIiwiYXV0b0Rpc21pc3MiLCJsZW5ndGgiLCJtYXAiLCJhIiwidGl0bGUiLCJzcGhlcmUiLCJkZXNjcmlwdGlvbiIsImRlYWxJRCIsImUiLCJOb3RGaW5pc2hlZCIsIm5vdEZpbmlzaGVkIiwib25Db250aW51ZSIsInRhcmdldCIsInN0ZXAiLCJwYXJzZUludCIsImFtb3VudCIsInR5cGUiLCJSb3V0ZXIiLCJwYXRobmFtZSIsInF1ZXJ5IiwieCIsImxlYWQiLCJmaW8iLCJwaG9uZSIsImNsaWVudF90eXBlIiwiQ2FiaW5ldFJlcXVlc3RzIiwic2V0QWN0aXZlIiwiaXNBY3RpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBc0M7QUFBQTs7QUFBQSxNQUFwQ0MsT0FBb0MsUUFBcENBLE9BQW9DO0FBQUEsTUFBNUJDLFVBQTRCLFFBQTVCQSxVQUE0QjtBQUFBLE1BQWpCQyxXQUFpQixRQUFqQkEsV0FBaUI7O0FBQUEsbUJBQ2pDQyxvRUFBUyxFQUR3QjtBQUFBLE1BQzdDQyxRQUQ2QyxjQUM3Q0EsUUFENkM7O0FBRXBELE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFB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QUNFO0FBQUcsZUFBUyxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUdFO0FBQUssZUFBUyxFQUFDLGVBQWY7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUMsZ0JBQWY7QUFBQSxnQ0FDRTtBQUFNLG1CQUFTLEVBQUVrRCxRQUFRLElBQUksUUFBN0I7QUFBdUMsaUJBQU8sRUFBRTtBQUFBLG1CQUFNRCxTQUFTLENBQUMsSUFBRCxDQUFmO0FBQUEsV0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFNLG1CQUFTLEVBQUUsQ0FBQ0MsUUFBRCxJQUFhLFFBQTlCO0FBQXdDLGlCQUFPLEVBQUU7QUFBQSxtQkFBTUQsU0FBUyxDQUFDLEtBQUQsQ0FBZjtBQUFBLFdBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLEVBS0dDLFFBQVEsZ0JBQ0wsOERBQUMsb0VBQUQ7QUFBQSwrQkFBZSw4REFBQyxPQUFEO0FBQVMsaUJBQU8sRUFBRW5ELE9BQWxCO0FBQTJCLG9CQUFVLEVBQUVDO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREssZ0JBRUwsOERBQUMsV0FBRDtBQUFhLG1CQUFXLEVBQUVpQztBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFtQ0QsQ0FwQ0Q7O01BQU1lLGU7QUFxQ04sK0RBQWVBLGVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FiaW5ldC9yZXF1ZXN0cy5hMjFhNWRjOTY3YjhlMmY2YTQ1OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHN3YWwgZnJvbSAnc3dlZXRhbGVydCc7XHJcbmltcG9ydCB7VG9hc3RQcm92aWRlciwgdXNlVG9hc3RzfSBmcm9tICdyZWFjdC10b2FzdC1ub3RpZmljYXRpb25zJ1xyXG5jb25zdCBBY3RpdmVzID0gKHthY3RpdmVzLHNldExvYWRpbmcsZ2V0VXNlckRlYWx9KSA9PiB7XHJcbiAgY29uc3Qge2FkZFRvYXN0fSA9IHVzZVRvYXN0cygpXHJcbiAgY29uc3Qgb25DYW5jZWwgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IGxlYWRfaWQgPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQ7XHJcbiAgICBzd2FsKCfQntGC0LrQsNC30LDRgtGM0YHRjycsIHtcclxuICAgICAgdGV4dDogJ9CS0Ysg0YLQvtGH0L3QviDRhdC+0YLQuNGC0LUg0L7RgtC60LDQt9Cw0YLRjNGB0Y8g0L7RgiDRjdGC0L7QuSDRg9GB0LvRg9Cz0Lg/JyxcclxuICAgICAgYnV0dG9uczoge1xyXG4gICAgICAgIGNhdGNoOiB7XHJcbiAgICAgICAgICB0ZXh0OiAn0JTQsCwg0L7RgtC60LDQt9Cw0YLRjNGB0Y8nLFxyXG4gICAgICAgICAgdmFsdWU6ICdjYXRjaCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjYW5jZWw6ICfQndC10YInXHJcbiAgICAgIH1cclxuICAgIH0pLnRoZW4odmFsPT4ge1xyXG4gICAgICBzd2l0Y2godmFsKSB7XHJcbiAgICAgICAgY2FzZSAnY2F0Y2gnOlxyXG4gICAgICAgICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgICAgICAgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9zdGFnZURlYWw/SUQ9JHtsZWFkX2lkfWApXHJcbiAgICAgICAgICAgIC50aGVuKHJlcz0+IHtcclxuICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgICAgICAgIGlmKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgIGdldFVzZXJEZWFsXHJcbiAgICAgICAgICAgICAgICBhZGRUb2FzdCgn0JLRiyDRg9GB0L/QtdGI0L3QviDQvtGC0LrQsNC30LDQu9C40YHRjCcsIHtcclxuICAgICAgICAgICAgICAgICAgYXBwZWFyYW5jZTogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICBhdXRvRGlzbWlzczogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhZGRUb2FzdCgn0JLQsNGI0LAg0LfQsNGP0LLQutCwINGD0LbQtSDRgNCw0YHRgdC80LDRgtGA0LjQstCw0LXRgtGB0Y8g0Y7RgNC40YHRgtCw0LzQuCcsIHtcclxuICAgICAgICAgICAgICAgICAgYXBwZWFyYW5jZTogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgICAgYXV0b0Rpc21pc3M6IHRydWVcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIGNhc2UgXCJjYW5jZWxcIjpcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7YWN0aXZlcy5sZW5ndGggPT09IDAgPyA8aDI+0KMg0LLQsNGBINC90LXRgtGDINCw0LrRgtC40LLQvdGL0YUg0LfQsNGP0LLQvtC6PC9oMj4gOjxkaXYgY2xhc3NOYW1lPSdyZXF1ZXN0X2xpc3QnPlxyXG4gICAgICAgIHthY3RpdmVzLm1hcChhID0+IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXthLnRpdGxlID09PSAn0J7RgtC60LDQtyDQvtGCINC30LDQutCw0LfQsCcgPyAnZC1ub25lJyA6ICdyZXF1ZXN0X2NhcmQnfT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdzdGF0dXMgJz57YS50aXRsZX08L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkX2luZm8nPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc3BoZXJlJz7QodGE0LXRgNCwOiB7YS5zcGhlcmV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZGVzY3JpcHRpb24nPtCe0L/QuNGB0LDQvdC40LU6IHthLmRlc2NyaXB0aW9ufTwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgey8qIDxzcGFuIGNsYXNzTmFtZT0nZGVzY3JpcHRpb24nPtCe0YLQutCw0LfQsNGC0YzRgdGPOiB7YS5kZXNjcmlwdGlvbn08L3NwYW4+ICovfVxyXG4gICAgICAgICAgICAgIHsvKiB7YS5idXR0b24gJiYgPGRpdiBkYXRhLWlkPXthLmRlYWxJRH0ga2V5PXthLmRlYWxJRH0gb25DbGljaz17ZT0+b25DYW5jZWwoZSl9IGNsYXNzTmFtZT0nY2FuY2VsX2J0bic+PHNwYW4+0J7RgtC60LDQt9Cw0YLRjNGB0Y88L3NwYW4+PC9kaXY+fSAqL31cclxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtaWQ9e2EuZGVhbElEfSBrZXk9e2EuZGVhbElEfSBvbkNsaWNrPXtlPT5vbkNhbmNlbChlKX0gY2xhc3NOYW1lPSdjYW5jZWxfYnRuJz48c3Bhbj7QntGC0LrQsNC30LDRgtGM0YHRjzwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+fVxyXG4gICAgICBcclxuICAgIDwvZGl2PlxyXG5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IE5vdEZpbmlzaGVkID0gKHtub3RGaW5pc2hlZH0pID0+IHtcclxuICBjb25zdCBvbkNvbnRpbnVlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCBpZCA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmlkO1xyXG4gICAgY29uc3Qgc3RlcCA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC5kYXRhc2V0LnN0ZXApO1xyXG4gICAgY29uc3QgYW1vdW50ID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQuYW1vdW50XHJcbiAgICBjb25zdCB0eXBlID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQudHlwZTtcclxuICAgIFJvdXRlci5wdXNoKHtcclxuICAgICAgcGF0aG5hbWU6ICcvY2FiaW5ldC9jb250aW51ZScsXHJcbiAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgc3RlcDogc3RlcCArIDEsXHJcbiAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgIHR5cGU6IHR5cGUsXHJcbiAgICAgICAgYW1vdW50OiBhbW91bnRcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdyZXF1ZXN0X2xpc3QnPlxyXG4gICAgICB7bm90RmluaXNoZWQubWFwKHggPT4gKFxyXG4gICAgICAgIDxkaXYgZGF0YS1pZD17eC5pZH0gZGF0YS1zdGVwPXt4LnN0ZXB9IGNsYXNzTmFtZT0ncmVxdWVzdF9jYXJkJz5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nc3RhdHVzIHN0YXR1c19pbmZvJz5cclxuICAgICAgICAgICAge3gubGVhZH1cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nY2FwaXRhbGl6ZSc+PGI+0KTQmNCeOjwvYj4ge3guZmlvfTwvc3Bhbj5cclxuICAgICAgICBcclxuICAgICAgICAgIHt4LnNwaGVyZSAhPT0gbnVsbCA/XHJcbiAgICAgICAgICA8c3Bhbj48Yj7QodGE0LXRgNCwOiA8L2I+e3guc3BoZXJlfTwvc3Bhbj4gOiAgIDxzcGFuPtCi0LXQu9C10YTQvtC9INC90L7QvNC10YA6ICt7eC5waG9uZX08L3NwYW4+fVxyXG5cclxuICAgICAgICAgIHt4LmFtb3VudCAhPT0gbnVsbCAmJiA8c3Bhbj48Yj7QodGD0LzQvNCwINC40YHQutCwOjwvYj4ge3guYW1vdW50fSDRgtCzPC9zcGFuPn1cclxuICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgIGRhdGEtaWQ9e3guaWR9XHJcbiAgICAgICAgICAgIGRhdGEtc3RlcD17eC5zdGVwfVxyXG4gICAgICAgICAgICBkYXRhLXR5cGU9e3guY2xpZW50X3R5cGV9XHJcbiAgICAgICAgICAgIGRhdGEtYW1vdW50PXt4LmFtb3VudCB8fCBudWxsfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9J2RldGFpbGVkYnRuJ1xyXG4gICAgICAgICAgICBvbkNsaWNrPXtlID0+IG9uQ29udGludWUoZSl9PtCf0YDQvtC00L7Qu9C20LjRgtGMINCw0L3QutC10YLRgyDirp48L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBDYWJpbmV0UmVxdWVzdHMgPSAoe3NldEFjdGl2ZSwgaXNBY3RpdmUsIGFjdGl2ZXMsIG5vdEZpbmlzaGVkLCBzZXRMb2FkaW5nfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIGNhYmluZXRfX3JlcXVlc3RzJz5cclxuICAgICAgPHAgY2xhc3NOYW1lPSdoZWFkZXInPtCc0L7QuCDQt9Cw0Y/QstC60Lg8L3A+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVxdWVzdF9ibG9jayc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlcXVlc3Rfb3B0aW9uJz5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17aXNBY3RpdmUgJiYgJ2FjdGl2ZSd9IG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZSh0cnVlKX0+0JDQutGC0LjQstC90YvQtTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17IWlzQWN0aXZlICYmICdhY3RpdmUnfSBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmUoZmFsc2UpfT7QndC10LTQvtC30LDQv9C+0LvQvdC10L3QvdGL0LU8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge2lzQWN0aXZlXHJcbiAgICAgICAgICA/IDxUb2FzdFByb3ZpZGVyPjxBY3RpdmVzIGFjdGl2ZXM9e2FjdGl2ZXN9IHNldExvYWRpbmc9e3NldExvYWRpbmd9Lz48L1RvYXN0UHJvdmlkZXI+XHJcbiAgICAgICAgICA6IDxOb3RGaW5pc2hlZCBub3RGaW5pc2hlZD17bm90RmluaXNoZWR9Lz59XHJcbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPSdyZXF1ZXN0X2xpc3QnPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlcXVlc3RfY2FyZCc+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nc3RhdHVzJz7QkiDQvtCx0YDQsNCx0L7RgtC60LU8L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkX2luZm8nPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc3BoZXJlJz7QodGE0LXRgNCwOtCh0LXQvNC10LnQvdGL0LUg0YHQv9C+0YDRizwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2Rlc2NyaXB0aW9uJz7QntC/0LjRgdCw0L3QuNC1OkxvcmVtIGxvcmVtIGxvcmVtIGxvcmVtIGxvcmVtPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ncHJpY2UnPtCh0YLQvtC40LzQvtGB0YLRjCDRg9GB0LvRg9Cz0Lg6IDEwMDAwMCDRgtCzIDxzcGFuPjIwMDAwMNGC0LM8L3NwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZGV0YWlsZWRidG4nPtCU0LXRgtCw0LvQuCDQt9Cw0Y/QstC60Lgg4q6ePC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlcXVlc3RfY2FyZCc+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nc3RhdHVzJz7QkiDQvtCx0YDQsNCx0L7RgtC60LU8L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkX2luZm8nPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc3BoZXJlJz7QodGE0LXRgNCwOtCh0LXQvNC10LnQvdGL0LUg0YHQv9C+0YDRizwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2Rlc2NyaXB0aW9uJz7QntC/0LjRgdCw0L3QuNC1OkxvcmVtIGxvcmVtIGxvcmVtIGxvcmVtIGxvcmVtPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ncHJpY2UnPtCh0YLQvtC40LzQvtGB0YLRjCDRg9GB0LvRg9Cz0Lg6IDEwMDAwMCDRgtCzIDxzcGFuPjIwMDAwMNGC0LM8L3NwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZGV0YWlsZWRidG4nPtCU0LXRgtCw0LvQuCDQt9Cw0Y/QstC60Lgg4q6ePC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ2FiaW5ldFJlcXVlc3RzIl0sInNvdXJjZVJvb3QiOiIifQ==