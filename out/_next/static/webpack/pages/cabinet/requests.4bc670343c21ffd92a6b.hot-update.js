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
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\job\\nashcompany\\components\\cabinet\\CabinetRequests.js",
    _this = undefined,
    _s = $RefreshSig$();







var Actives = function Actives(_ref) {
  _s();

  var actives = _ref.actives,
      setLoading = _ref.setLoading,
      setDeleted = _ref.setDeleted,
      deleted = _ref.deleted;

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
              setDeleted(!deleted);
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
      lineNumber: 49,
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
            lineNumber: 52,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "card_info",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "sphere",
              children: ["\u0421\u0444\u0435\u0440\u0430: ", a.sphere]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "description",
              children: ["\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435: ", a.description]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 55,
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
                lineNumber: 56,
                columnNumber: 102
              }, _this)
            }, a.dealID, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 68
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 48,
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
      setLoading = _ref3.setLoading,
      deleted = _ref3.deleted,
      setDeleted = _ref3.setDeleted;
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
          setLoading: setLoading,
          deleted: deleted,
          setDeleted: setDeleted
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYWJpbmV0L0NhYmluZXRSZXF1ZXN0cy5qcyJdLCJuYW1lcyI6WyJBY3RpdmVzIiwiYWN0aXZlcyIsInNldExvYWRpbmciLCJzZXREZWxldGVkIiwiZGVsZXRlZCIsInVzZVRvYXN0cyIsImFkZFRvYXN0Iiwib25DYW5jZWwiLCJldmVudCIsImxlYWRfaWQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImlkIiwic3dhbCIsInRleHQiLCJidXR0b25zIiwidmFsdWUiLCJjYW5jZWwiLCJ0aGVuIiwidmFsIiwiYXhpb3MiLCJwcm9jZXNzIiwicmVzIiwiZGF0YSIsInN1Y2Nlc3MiLCJhcHBlYXJhbmNlIiwiYXV0b0Rpc21pc3MiLCJsZW5ndGgiLCJtYXAiLCJhIiwidGl0bGUiLCJzcGhlcmUiLCJkZXNjcmlwdGlvbiIsImRlYWxJRCIsImUiLCJOb3RGaW5pc2hlZCIsIm5vdEZpbmlzaGVkIiwib25Db250aW51ZSIsInRhcmdldCIsInN0ZXAiLCJwYXJzZUludCIsImFtb3VudCIsInR5cGUiLCJSb3V0ZXIiLCJwYXRobmFtZSIsInF1ZXJ5IiwieCIsImxlYWQiLCJmaW8iLCJwaG9uZSIsImNsaWVudF90eXBlIiwiQ2FiaW5ldFJlcXVlc3RzIiwic2V0QWN0aXZlIiwiaXNBY3RpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQTZDO0FBQUE7O0FBQUEsTUFBM0NDLE9BQTJDLFFBQTNDQSxPQUEyQztBQUFBLE1BQW5DQyxVQUFtQyxRQUFuQ0EsVUFBbUM7QUFBQSxNQUF4QkMsVUFBd0IsUUFBeEJBLFVBQXdCO0FBQUEsTUFBYkMsT0FBYSxRQUFiQSxPQUFhOztBQUFBLG1CQUN4Q0Msb0VBQVMsRUFEK0I7QUFBQSxNQUNwREMsUUFEb0QsY0FDcERBLFFBRG9EOztBQUsz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Q04sK0RBQWVBLGVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FiaW5ldC9yZXF1ZXN0cy40YmM2NzAzNDNjMjFmZmQ5MmE2Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHN3YWwgZnJvbSAnc3dlZXRhbGVydCc7XHJcbmltcG9ydCB7VG9hc3RQcm92aWRlciwgdXNlVG9hc3RzfSBmcm9tICdyZWFjdC10b2FzdC1ub3RpZmljYXRpb25zJ1xyXG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSdcclxuY29uc3QgQWN0aXZlcyA9ICh7YWN0aXZlcyxzZXRMb2FkaW5nLHNldERlbGV0ZWQsZGVsZXRlZH0pID0+IHtcclxuICBjb25zdCB7YWRkVG9hc3R9ID0gdXNlVG9hc3RzKClcclxuXHJcblxyXG5cclxuICBjb25zdCBvbkNhbmNlbCA9IChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgbGVhZF9pZCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZDtcclxuICAgIHN3YWwoJ9Ce0YLQutCw0LfQsNGC0YzRgdGPJywge1xyXG4gICAgICB0ZXh0OiAn0JLRiyDRgtC+0YfQvdC+INGF0L7RgtC40YLQtSDQvtGC0LrQsNC30LDRgtGM0YHRjyDQvtGCINGN0YLQvtC5INGD0YHQu9GD0LPQuD8nLFxyXG4gICAgICBidXR0b25zOiB7XHJcbiAgICAgICAgY2F0Y2g6IHtcclxuICAgICAgICAgIHRleHQ6ICfQlNCwLCDQvtGC0LrQsNC30LDRgtGM0YHRjycsXHJcbiAgICAgICAgICB2YWx1ZTogJ2NhdGNoJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNhbmNlbDogJ9Cd0LXRgidcclxuICAgICAgfVxyXG4gICAgfSkudGhlbih2YWw9PiB7XHJcbiAgICAgIHN3aXRjaCh2YWwpIHtcclxuICAgICAgICBjYXNlICdjYXRjaCc6XHJcbiAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICAgICAgICBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L3N0YWdlRGVhbD9JRD0ke2xlYWRfaWR9YClcclxuICAgICAgICAgICAgLnRoZW4ocmVzPT4ge1xyXG4gICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgICAgICAgaWYocmVzLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgc2V0RGVsZXRlZCghZGVsZXRlZClcclxuICAgICAgICAgICAgICAgIGFkZFRvYXN0KCfQktGLINGD0YHQv9C10YjQvdC+INC+0YLQutCw0LfQsNC70LjRgdGMJywge1xyXG4gICAgICAgICAgICAgICAgICBhcHBlYXJhbmNlOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgIGF1dG9EaXNtaXNzOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIGFkZFRvYXN0KCfQktCw0YjQsCDQt9Cw0Y/QstC60LAg0YPQttC1INGA0LDRgdGB0LzQsNGC0YDQuNCy0LDQtdGC0YHRjyDRjtGA0LjRgdGC0LDQvNC4Jywge1xyXG4gICAgICAgICAgICAgICAgICBhcHBlYXJhbmNlOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgICBhdXRvRGlzbWlzczogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgY2FzZSBcImNhbmNlbFwiOlxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHthY3RpdmVzLmxlbmd0aCA9PT0gMCA/IDxoMj7QoyDQstCw0YEg0L3QtdGC0YMg0LDQutGC0LjQstC90YvRhSDQt9Cw0Y/QstC+0Lo8L2gyPiA6PGRpdiBjbGFzc05hbWU9J3JlcXVlc3RfbGlzdCc+XHJcbiAgICAgICAge2FjdGl2ZXMubWFwKGEgPT4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2EudGl0bGUgPT09ICfQntGC0LrQsNC3INC+0YIg0LfQsNC60LDQt9CwJyA/ICdkLW5vbmUnIDogJ3JlcXVlc3RfY2FyZCd9PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J3N0YXR1cyAnPnthLnRpdGxlfTwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmRfaW5mbyc+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzcGhlcmUnPtCh0YTQtdGA0LA6IHthLnNwaGVyZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdkZXNjcmlwdGlvbic+0J7Qv9C40YHQsNC90LjQtToge2EuZGVzY3JpcHRpb259PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1pZD17YS5kZWFsSUR9IGtleT17YS5kZWFsSUR9IG9uQ2xpY2s9e2U9Pm9uQ2FuY2VsKGUpfSBjbGFzc05hbWU9J2NhbmNlbF9idG4nPjxzcGFuPtCe0YLQutCw0LfQsNGC0YzRgdGPPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj59XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBOb3RGaW5pc2hlZCA9ICh7bm90RmluaXNoZWR9KSA9PiB7XHJcbiAgY29uc3Qgb25Db250aW51ZSA9IChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgaWQgPSBldmVudC50YXJnZXQuZGF0YXNldC5pZDtcclxuICAgIGNvbnN0IHN0ZXAgPSBwYXJzZUludChldmVudC50YXJnZXQuZGF0YXNldC5zdGVwKTtcclxuICAgIGNvbnN0IGFtb3VudCA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmFtb3VudFxyXG4gICAgY29uc3QgdHlwZSA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LnR5cGU7XHJcbiAgICBSb3V0ZXIucHVzaCh7XHJcbiAgICAgIHBhdGhuYW1lOiAnL2NhYmluZXQvY29udGludWUnLFxyXG4gICAgICBxdWVyeToge1xyXG4gICAgICAgIHN0ZXA6IHN0ZXAgKyAxLFxyXG4gICAgICAgIGlkOiBpZCxcclxuICAgICAgICB0eXBlOiB0eXBlLFxyXG4gICAgICAgIGFtb3VudDogYW1vdW50XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0ncmVxdWVzdF9saXN0Jz5cclxuICAgICAge25vdEZpbmlzaGVkLm1hcCh4ID0+IChcclxuICAgICAgICA8ZGl2IGRhdGEtaWQ9e3guaWR9IGRhdGEtc3RlcD17eC5zdGVwfSBjbGFzc05hbWU9J3JlcXVlc3RfY2FyZCc+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9J3N0YXR1cyBzdGF0dXNfaW5mbyc+XHJcbiAgICAgICAgICAgIHt4LmxlYWR9XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2NhcGl0YWxpemUnPjxiPtCk0JjQnjo8L2I+IHt4LmZpb308L3NwYW4+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICB7eC5zcGhlcmUgIT09IG51bGwgP1xyXG4gICAgICAgICAgPHNwYW4+PGI+0KHRhNC10YDQsDogPC9iPnt4LnNwaGVyZX08L3NwYW4+IDogICA8c3Bhbj7QotC10LvQtdGE0L7QvSDQvdC+0LzQtdGAOiAre3gucGhvbmV9PC9zcGFuPn1cclxuXHJcbiAgICAgICAgICB7eC5hbW91bnQgIT09IG51bGwgJiYgPHNwYW4+PGI+0KHRg9C80LzQsCDQuNGB0LrQsDo8L2I+IHt4LmFtb3VudH0g0YLQszwvc3Bhbj59XHJcbiAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICBkYXRhLWlkPXt4LmlkfVxyXG4gICAgICAgICAgICBkYXRhLXN0ZXA9e3guc3RlcH1cclxuICAgICAgICAgICAgZGF0YS10eXBlPXt4LmNsaWVudF90eXBlfVxyXG4gICAgICAgICAgICBkYXRhLWFtb3VudD17eC5hbW91bnQgfHwgbnVsbH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdkZXRhaWxlZGJ0bidcclxuICAgICAgICAgICAgb25DbGljaz17ZSA9PiBvbkNvbnRpbnVlKGUpfT7Qn9GA0L7QtNC+0LvQttC40YLRjCDQsNC90LrQtdGC0YMg4q6ePC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgQ2FiaW5ldFJlcXVlc3RzID0gKHtzZXRBY3RpdmUsIGlzQWN0aXZlLCBhY3RpdmVzLCBub3RGaW5pc2hlZCwgc2V0TG9hZGluZywgZGVsZXRlZCxzZXREZWxldGVkfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIGNhYmluZXRfX3JlcXVlc3RzJz5cclxuICAgICAgPHAgY2xhc3NOYW1lPSdoZWFkZXInPtCc0L7QuCDQt9Cw0Y/QstC60Lg8L3A+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVxdWVzdF9ibG9jayc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlcXVlc3Rfb3B0aW9uJz5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17aXNBY3RpdmUgJiYgJ2FjdGl2ZSd9IG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZSh0cnVlKX0+0JDQutGC0LjQstC90YvQtTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17IWlzQWN0aXZlICYmICdhY3RpdmUnfSBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmUoZmFsc2UpfT7QndC10LTQvtC30LDQv9C+0LvQvdC10L3QvdGL0LU8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge2lzQWN0aXZlXHJcbiAgICAgICAgICA/IDxUb2FzdFByb3ZpZGVyPjxBY3RpdmVzIGFjdGl2ZXM9e2FjdGl2ZXN9IHNldExvYWRpbmc9e3NldExvYWRpbmd9IGRlbGV0ZWQ9e2RlbGV0ZWR9IHNldERlbGV0ZWQ9e3NldERlbGV0ZWR9Lz48L1RvYXN0UHJvdmlkZXI+XHJcbiAgICAgICAgICA6IDxOb3RGaW5pc2hlZCBub3RGaW5pc2hlZD17bm90RmluaXNoZWR9Lz59XHJcbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPSdyZXF1ZXN0X2xpc3QnPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlcXVlc3RfY2FyZCc+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nc3RhdHVzJz7QkiDQvtCx0YDQsNCx0L7RgtC60LU8L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkX2luZm8nPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc3BoZXJlJz7QodGE0LXRgNCwOtCh0LXQvNC10LnQvdGL0LUg0YHQv9C+0YDRizwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2Rlc2NyaXB0aW9uJz7QntC/0LjRgdCw0L3QuNC1OkxvcmVtIGxvcmVtIGxvcmVtIGxvcmVtIGxvcmVtPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ncHJpY2UnPtCh0YLQvtC40LzQvtGB0YLRjCDRg9GB0LvRg9Cz0Lg6IDEwMDAwMCDRgtCzIDxzcGFuPjIwMDAwMNGC0LM8L3NwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZGV0YWlsZWRidG4nPtCU0LXRgtCw0LvQuCDQt9Cw0Y/QstC60Lgg4q6ePC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlcXVlc3RfY2FyZCc+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nc3RhdHVzJz7QkiDQvtCx0YDQsNCx0L7RgtC60LU8L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkX2luZm8nPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc3BoZXJlJz7QodGE0LXRgNCwOtCh0LXQvNC10LnQvdGL0LUg0YHQv9C+0YDRizwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2Rlc2NyaXB0aW9uJz7QntC/0LjRgdCw0L3QuNC1OkxvcmVtIGxvcmVtIGxvcmVtIGxvcmVtIGxvcmVtPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ncHJpY2UnPtCh0YLQvtC40LzQvtGB0YLRjCDRg9GB0LvRg9Cz0Lg6IDEwMDAwMCDRgtCzIDxzcGFuPjIwMDAwMNGC0LM8L3NwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZGV0YWlsZWRidG4nPtCU0LXRgtCw0LvQuCDQt9Cw0Y/QstC60Lgg4q6ePC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ2FiaW5ldFJlcXVlc3RzIl0sInNvdXJjZVJvb3QiOiIifQ==