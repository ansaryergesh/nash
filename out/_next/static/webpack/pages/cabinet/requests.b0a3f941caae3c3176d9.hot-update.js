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
      setLoading = _ref.setLoading;

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
              react_toast_notifications__WEBPACK_IMPORTED_MODULE_4__.getUserDeal;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYWJpbmV0L0NhYmluZXRSZXF1ZXN0cy5qcyJdLCJuYW1lcyI6WyJBY3RpdmVzIiwiYWN0aXZlcyIsInNldExvYWRpbmciLCJ1c2VUb2FzdHMiLCJhZGRUb2FzdCIsIm9uQ2FuY2VsIiwiZXZlbnQiLCJsZWFkX2lkIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJpZCIsInN3YWwiLCJ0ZXh0IiwiYnV0dG9ucyIsInZhbHVlIiwiY2FuY2VsIiwidGhlbiIsInZhbCIsImF4aW9zIiwicHJvY2VzcyIsInJlcyIsImRhdGEiLCJzdWNjZXNzIiwiZ2V0VXNlckRlYWwiLCJhcHBlYXJhbmNlIiwiYXV0b0Rpc21pc3MiLCJsZW5ndGgiLCJtYXAiLCJhIiwidGl0bGUiLCJzcGhlcmUiLCJkZXNjcmlwdGlvbiIsImRlYWxJRCIsImUiLCJOb3RGaW5pc2hlZCIsIm5vdEZpbmlzaGVkIiwib25Db250aW51ZSIsInRhcmdldCIsInN0ZXAiLCJwYXJzZUludCIsImFtb3VudCIsInR5cGUiLCJSb3V0ZXIiLCJwYXRobmFtZSIsInF1ZXJ5IiwieCIsImxlYWQiLCJmaW8iLCJwaG9uZSIsImNsaWVudF90eXBlIiwiQ2FiaW5ldFJlcXVlc3RzIiwic2V0QWN0aXZlIiwiaXNBY3RpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBMEI7QUFBQTs7QUFBQSxNQUF4QkMsT0FBd0IsUUFBeEJBLE9BQXdCO0FBQUEsTUFBaEJDLFVBQWdCLFFBQWhCQSxVQUFnQjs7QUFBQSxtQkFDckJDLG9FQUFTLEVBRFk7QUFBQSxNQUNqQ0MsUUFEaUMsY0FDakNBLFFBRGlDOztBQUV4QyxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFDMUIsUUFBTUMsT0FBTyxHQUFHRCxLQUFLLENB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O0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUdFO0FBQUssZUFBUyxFQUFDLGVBQWY7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUMsZ0JBQWY7QUFBQSxnQ0FDRTtBQUFNLG1CQUFTLEVBQUVrRCxRQUFRLElBQUksUUFBN0I7QUFBdUMsaUJBQU8sRUFBRTtBQUFBLG1CQUFNRCxTQUFTLENBQUMsSUFBRCxDQUFmO0FBQUEsV0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFNLG1CQUFTLEVBQUUsQ0FBQ0MsUUFBRCxJQUFhLFFBQTlCO0FBQXdDLGlCQUFPLEVBQUU7QUFBQSxtQkFBTUQsU0FBUyxDQUFDLEtBQUQsQ0FBZjtBQUFBLFdBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLEVBS0dDLFFBQVEsZ0JBQ0wsOERBQUMsb0VBQUQ7QUFBQSwrQkFBZSw4REFBQyxPQUFEO0FBQVMsaUJBQU8sRUFBRW5ELE9BQWxCO0FBQTJCLG9CQUFVLEVBQUVDO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREssZ0JBRUwsOERBQUMsV0FBRDtBQUFhLG1CQUFXLEVBQUVpQztBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFtQ0QsQ0FwQ0Q7O01BQU1lLGU7QUFxQ04sK0RBQWVBLGVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FiaW5ldC9yZXF1ZXN0cy5iMGEzZjk0MWNhYWUzYzMxNzZkOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHN3YWwgZnJvbSAnc3dlZXRhbGVydCc7XHJcbmltcG9ydCB7VG9hc3RQcm92aWRlciwgdXNlVG9hc3RzLCBnZXRVc2VyRGVhbH0gZnJvbSAncmVhY3QtdG9hc3Qtbm90aWZpY2F0aW9ucydcclxuY29uc3QgQWN0aXZlcyA9ICh7YWN0aXZlcyxzZXRMb2FkaW5nfSkgPT4ge1xyXG4gIGNvbnN0IHthZGRUb2FzdH0gPSB1c2VUb2FzdHMoKVxyXG4gIGNvbnN0IG9uQ2FuY2VsID0gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCBsZWFkX2lkID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkO1xyXG4gICAgc3dhbCgn0J7RgtC60LDQt9Cw0YLRjNGB0Y8nLCB7XHJcbiAgICAgIHRleHQ6ICfQktGLINGC0L7Rh9C90L4g0YXQvtGC0LjRgtC1INC+0YLQutCw0LfQsNGC0YzRgdGPINC+0YIg0Y3RgtC+0Lkg0YPRgdC70YPQs9C4PycsXHJcbiAgICAgIGJ1dHRvbnM6IHtcclxuICAgICAgICBjYXRjaDoge1xyXG4gICAgICAgICAgdGV4dDogJ9CU0LAsINC+0YLQutCw0LfQsNGC0YzRgdGPJyxcclxuICAgICAgICAgIHZhbHVlOiAnY2F0Y2gnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FuY2VsOiAn0J3QtdGCJ1xyXG4gICAgICB9XHJcbiAgICB9KS50aGVuKHZhbD0+IHtcclxuICAgICAgc3dpdGNoKHZhbCkge1xyXG4gICAgICAgIGNhc2UgJ2NhdGNoJzpcclxuICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgICAgICAgIGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vc3RhZ2VEZWFsP0lEPSR7bGVhZF9pZH1gKVxyXG4gICAgICAgICAgICAudGhlbihyZXM9PiB7XHJcbiAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICAgICAgICBpZihyZXMuZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICBnZXRVc2VyRGVhbFxyXG4gICAgICAgICAgICAgICAgYWRkVG9hc3QoJ9CS0Ysg0YPRgdC/0LXRiNC90L4g0L7RgtC60LDQt9Cw0LvQuNGB0YwnLCB7XHJcbiAgICAgICAgICAgICAgICAgIGFwcGVhcmFuY2U6ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgYXV0b0Rpc21pc3M6IHRydWVcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWRkVG9hc3QoJ9CS0LDRiNCwINC30LDRj9Cy0LrQsCDRg9C20LUg0YDQsNGB0YHQvNCw0YLRgNC40LLQsNC10YLRgdGPINGO0YDQuNGB0YLQsNC80LgnLCB7XHJcbiAgICAgICAgICAgICAgICAgIGFwcGVhcmFuY2U6ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICAgIGF1dG9EaXNtaXNzOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICBjYXNlIFwiY2FuY2VsXCI6XHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge2FjdGl2ZXMubGVuZ3RoID09PSAwID8gPGgyPtCjINCy0LDRgSDQvdC10YLRgyDQsNC60YLQuNCy0L3Ri9GFINC30LDRj9Cy0L7QujwvaDI+IDo8ZGl2IGNsYXNzTmFtZT0ncmVxdWVzdF9saXN0Jz5cclxuICAgICAgICB7YWN0aXZlcy5tYXAoYSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YS50aXRsZSA9PT0gJ9Ce0YLQutCw0Lcg0L7RgiDQt9Cw0LrQsNC30LAnID8gJ2Qtbm9uZScgOiAncmVxdWVzdF9jYXJkJ30+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nc3RhdHVzICc+e2EudGl0bGV9PC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZF9pbmZvJz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NwaGVyZSc+0KHRhNC10YDQsDoge2Euc3BoZXJlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2Rlc2NyaXB0aW9uJz7QntC/0LjRgdCw0L3QuNC1OiB7YS5kZXNjcmlwdGlvbn08L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgIHsvKiA8c3BhbiBjbGFzc05hbWU9J2Rlc2NyaXB0aW9uJz7QntGC0LrQsNC30LDRgtGM0YHRjzoge2EuZGVzY3JpcHRpb259PC9zcGFuPiAqL31cclxuICAgICAgICAgICAgICB7Lyoge2EuYnV0dG9uICYmIDxkaXYgZGF0YS1pZD17YS5kZWFsSUR9IGtleT17YS5kZWFsSUR9IG9uQ2xpY2s9e2U9Pm9uQ2FuY2VsKGUpfSBjbGFzc05hbWU9J2NhbmNlbF9idG4nPjxzcGFuPtCe0YLQutCw0LfQsNGC0YzRgdGPPC9zcGFuPjwvZGl2Pn0gKi99XHJcbiAgICAgICAgICAgICAgPGRpdiBkYXRhLWlkPXthLmRlYWxJRH0ga2V5PXthLmRlYWxJRH0gb25DbGljaz17ZT0+b25DYW5jZWwoZSl9IGNsYXNzTmFtZT0nY2FuY2VsX2J0bic+PHNwYW4+0J7RgtC60LDQt9Cw0YLRjNGB0Y88L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2Pn1cclxuICAgICAgXHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBOb3RGaW5pc2hlZCA9ICh7bm90RmluaXNoZWR9KSA9PiB7XHJcbiAgY29uc3Qgb25Db250aW51ZSA9IChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgaWQgPSBldmVudC50YXJnZXQuZGF0YXNldC5pZDtcclxuICAgIGNvbnN0IHN0ZXAgPSBwYXJzZUludChldmVudC50YXJnZXQuZGF0YXNldC5zdGVwKTtcclxuICAgIGNvbnN0IGFtb3VudCA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmFtb3VudFxyXG4gICAgY29uc3QgdHlwZSA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LnR5cGU7XHJcbiAgICBSb3V0ZXIucHVzaCh7XHJcbiAgICAgIHBhdGhuYW1lOiAnL2NhYmluZXQvY29udGludWUnLFxyXG4gICAgICBxdWVyeToge1xyXG4gICAgICAgIHN0ZXA6IHN0ZXAgKyAxLFxyXG4gICAgICAgIGlkOiBpZCxcclxuICAgICAgICB0eXBlOiB0eXBlLFxyXG4gICAgICAgIGFtb3VudDogYW1vdW50XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0ncmVxdWVzdF9saXN0Jz5cclxuICAgICAge25vdEZpbmlzaGVkLm1hcCh4ID0+IChcclxuICAgICAgICA8ZGl2IGRhdGEtaWQ9e3guaWR9IGRhdGEtc3RlcD17eC5zdGVwfSBjbGFzc05hbWU9J3JlcXVlc3RfY2FyZCc+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9J3N0YXR1cyBzdGF0dXNfaW5mbyc+XHJcbiAgICAgICAgICAgIHt4LmxlYWR9XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2NhcGl0YWxpemUnPjxiPtCk0JjQnjo8L2I+IHt4LmZpb308L3NwYW4+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICB7eC5zcGhlcmUgIT09IG51bGwgP1xyXG4gICAgICAgICAgPHNwYW4+PGI+0KHRhNC10YDQsDogPC9iPnt4LnNwaGVyZX08L3NwYW4+IDogICA8c3Bhbj7QotC10LvQtdGE0L7QvSDQvdC+0LzQtdGAOiAre3gucGhvbmV9PC9zcGFuPn1cclxuXHJcbiAgICAgICAgICB7eC5hbW91bnQgIT09IG51bGwgJiYgPHNwYW4+PGI+0KHRg9C80LzQsCDQuNGB0LrQsDo8L2I+IHt4LmFtb3VudH0g0YLQszwvc3Bhbj59XHJcbiAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICBkYXRhLWlkPXt4LmlkfVxyXG4gICAgICAgICAgICBkYXRhLXN0ZXA9e3guc3RlcH1cclxuICAgICAgICAgICAgZGF0YS10eXBlPXt4LmNsaWVudF90eXBlfVxyXG4gICAgICAgICAgICBkYXRhLWFtb3VudD17eC5hbW91bnQgfHwgbnVsbH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdkZXRhaWxlZGJ0bidcclxuICAgICAgICAgICAgb25DbGljaz17ZSA9PiBvbkNvbnRpbnVlKGUpfT7Qn9GA0L7QtNC+0LvQttC40YLRjCDQsNC90LrQtdGC0YMg4q6ePC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgQ2FiaW5ldFJlcXVlc3RzID0gKHtzZXRBY3RpdmUsIGlzQWN0aXZlLCBhY3RpdmVzLCBub3RGaW5pc2hlZCwgc2V0TG9hZGluZ30pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciBjYWJpbmV0X19yZXF1ZXN0cyc+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT0naGVhZGVyJz7QnNC+0Lgg0LfQsNGP0LLQutC4PC9wPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3JlcXVlc3RfYmxvY2snPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZXF1ZXN0X29wdGlvbic+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2lzQWN0aXZlICYmICdhY3RpdmUnfSBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmUodHJ1ZSl9PtCQ0LrRgtC40LLQvdGL0LU8L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9eyFpc0FjdGl2ZSAmJiAnYWN0aXZlJ30gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlKGZhbHNlKX0+0J3QtdC00L7Qt9Cw0L/QvtC70L3QtdC90L3Ri9C1PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtpc0FjdGl2ZVxyXG4gICAgICAgICAgPyA8VG9hc3RQcm92aWRlcj48QWN0aXZlcyBhY3RpdmVzPXthY3RpdmVzfSBzZXRMb2FkaW5nPXtzZXRMb2FkaW5nfS8+PC9Ub2FzdFByb3ZpZGVyPlxyXG4gICAgICAgICAgOiA8Tm90RmluaXNoZWQgbm90RmluaXNoZWQ9e25vdEZpbmlzaGVkfS8+fVxyXG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0ncmVxdWVzdF9saXN0Jz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZXF1ZXN0X2NhcmQnPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J3N0YXR1cyc+0JIg0L7QsdGA0LDQsdC+0YLQutC1PC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZF9pbmZvJz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NwaGVyZSc+0KHRhNC10YDQsDrQodC10LzQtdC50L3Ri9C1INGB0L/QvtGA0Ys8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdkZXNjcmlwdGlvbic+0J7Qv9C40YHQsNC90LjQtTpMb3JlbSBsb3JlbSBsb3JlbSBsb3JlbSBsb3JlbTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3ByaWNlJz7QodGC0L7QuNC80L7RgdGC0Ywg0YPRgdC70YPQs9C4OiAxMDAwMDAg0YLQsyA8c3Bhbj4yMDAwMDDRgtCzPC9zcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2RldGFpbGVkYnRuJz7QlNC10YLQsNC70Lgg0LfQsNGP0LLQutC4IOKunjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZXF1ZXN0X2NhcmQnPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J3N0YXR1cyc+0JIg0L7QsdGA0LDQsdC+0YLQutC1PC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZF9pbmZvJz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NwaGVyZSc+0KHRhNC10YDQsDrQodC10LzQtdC50L3Ri9C1INGB0L/QvtGA0Ys8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdkZXNjcmlwdGlvbic+0J7Qv9C40YHQsNC90LjQtTpMb3JlbSBsb3JlbSBsb3JlbSBsb3JlbSBsb3JlbTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3ByaWNlJz7QodGC0L7QuNC80L7RgdGC0Ywg0YPRgdC70YPQs9C4OiAxMDAwMDAg0YLQsyA8c3Bhbj4yMDAwMDDRgtCzPC9zcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2RldGFpbGVkYnRuJz7QlNC10YLQsNC70Lgg0LfQsNGP0LLQutC4IOKunjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IENhYmluZXRSZXF1ZXN0cyJdLCJzb3VyY2VSb290IjoiIn0=