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
      setActives = _ref.setActives,
      setNotFinished = _ref.setNotFinished;

  var _useToasts = (0,react_toast_notifications__WEBPACK_IMPORTED_MODULE_4__.useToasts)(),
      addToast = _useToasts.addToast;

  var getUserDeal = function getUserDeal() {
    console.log('getuserdeal');
    axios__WEBPACK_IMPORTED_MODULE_1___default().post("".concat("https://crediter.kz/api", "/getUserDataDeal"), {
      token: js_cookie__WEBPACK_IMPORTED_MODULE_5___default().get('token')
    }).then(function (res) {
      setLoading(false);
      setActives(filterByParam(res.data, {
        type: 'deal'
      }));
      setNotFinished(filterByParam(res.data, {
        type: 'lead'
      }));
    })["catch"](function (err) {
      setLoading(false);
    });
  };

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
      lineNumber: 59,
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
            lineNumber: 62,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "card_info",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "sphere",
              children: ["\u0421\u0444\u0435\u0440\u0430: ", a.sphere]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "description",
              children: ["\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435: ", a.description]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 65,
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
                lineNumber: 69,
                columnNumber: 102
              }, _this)
            }, a.dealID, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 68
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 58,
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
          lineNumber: 100,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "capitalize",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
            children: "\u0424\u0418\u041E:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 40
          }, _this), " ", x.fio]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 11
        }, _this), x.sphere !== null ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
            children: "\u0421\u0444\u0435\u0440\u0430: "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 17
          }, _this), x.sphere]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 11
        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: ["\u0422\u0435\u043B\u0435\u0444\u043E\u043D \u043D\u043E\u043C\u0435\u0440: +", x.phone]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 53
        }, _this), x.amount !== null && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
            children: "\u0421\u0443\u043C\u043C\u0430 \u0438\u0441\u043A\u0430:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 39
          }, _this), " ", x.amount, " \u0442\u0433"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 108,
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
          lineNumber: 109,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 97,
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
      setActives = _ref3.setActives,
      setNotFinished = _ref3.setNotFinished;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "container cabinet__requests",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "header",
      children: "\u041C\u043E\u0438 \u0437\u0430\u044F\u0432\u043A\u0438"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 125,
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
          lineNumber: 129,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: !isActive && 'active',
          onClick: function onClick() {
            return setActive(false);
          },
          children: "\u041D\u0435\u0434\u043E\u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u044B\u0435"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 9
      }, _this), isActive ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toast_notifications__WEBPACK_IMPORTED_MODULE_4__.ToastProvider, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Actives, {
          actives: actives,
          setLoading: setLoading,
          setActives: setActives,
          setNotFinished: setNotFinished
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 28
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 13
      }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NotFinished, {
        notFinished: notFinished
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 124,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYWJpbmV0L0NhYmluZXRSZXF1ZXN0cy5qcyJdLCJuYW1lcyI6WyJBY3RpdmVzIiwiYWN0aXZlcyIsInNldExvYWRpbmciLCJzZXRBY3RpdmVzIiwic2V0Tm90RmluaXNoZWQiLCJ1c2VUb2FzdHMiLCJhZGRUb2FzdCIsImdldFVzZXJEZWFsIiwiY29uc29sZSIsImxvZyIsImF4aW9zIiwicHJvY2VzcyIsInRva2VuIiwiY29va2llIiwidGhlbiIsInJlcyIsImZpbHRlckJ5UGFyYW0iLCJkYXRhIiwidHlwZSIsImVyciIsIm9uQ2FuY2VsIiwiZXZlbnQiLCJsZWFkX2lkIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJpZCIsInN3YWwiLCJ0ZXh0IiwiYnV0dG9ucyIsInZhbHVlIiwiY2FuY2VsIiwidmFsIiwic3VjY2VzcyIsImFwcGVhcmFuY2UiLCJhdXRvRGlzbWlzcyIsImxlbmd0aCIsIm1hcCIsImEiLCJ0aXRsZSIsInNwaGVyZSIsImRlc2NyaXB0aW9uIiwiZGVhbElEIiwiZSIsIk5vdEZpbmlzaGVkIiwibm90RmluaXNoZWQiLCJvbkNvbnRpbnVlIiwidGFyZ2V0Iiwic3RlcCIsInBhcnNlSW50IiwiYW1vdW50IiwiUm91dGVyIiwicGF0aG5hbWUiLCJxdWVyeSIsIngiLCJsZWFkIiwiZmlvIiwicGhvbmUiLCJjbGllbnRfdHlwZSIsIkNhYmluZXRSZXF1ZXN0cyIsInNldEFjdGl2ZSIsImlzQWN0aXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUFvRDtBQUFBOztBQUFBLE1BQWxEQyxPQUFrRCxRQUFsREEsT0FBa0Q7QUFBQSxNQUExQ0MsVUFBMEMsUUFBMUNBLFVBQTBDO0FBQUEsTUFBL0JDLFVBQStCLFFBQS9CQSxVQUErQjtBQUFBLE1BQXBCQyxj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LEVBQUUsQ0FBQ0MsUUFBRCxJQUFhLFFBQTlCO0FBQXdDLGlCQUFPLEVBQUU7QUFBQSxtQkFBTUQsU0FBUyxDQUFDLEtBQUQsQ0FBZjtBQUFBLFdBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLEVBS0dDLFFBQVEsZ0JBQ0wsOERBQUMsb0VBQUQ7QUFBQSwrQkFBZSw4REFBQyxPQUFEO0FBQVMsaUJBQU8sRUFBRTNELE9BQWxCO0FBQTJCLG9CQUFVLEVBQUVDLFVBQXZDO0FBQW1ELG9CQUFVLEVBQUVDLFVBQS9EO0FBQTJFLHdCQUFjLEVBQUVDO0FBQTNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREssZ0JBRUwsOERBQUMsV0FBRDtBQUFhLG1CQUFXLEVBQUV3QztBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFtQ0QsQ0FwQ0Q7O01BQU1jLGU7QUFxQ04sK0RBQWVBLGVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FiaW5ldC9yZXF1ZXN0cy5jMmQwYWM5YjdkY2U4ZmE1OTAzOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHN3YWwgZnJvbSAnc3dlZXRhbGVydCc7XHJcbmltcG9ydCB7VG9hc3RQcm92aWRlciwgdXNlVG9hc3RzfSBmcm9tICdyZWFjdC10b2FzdC1ub3RpZmljYXRpb25zJ1xyXG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSdcclxuY29uc3QgQWN0aXZlcyA9ICh7YWN0aXZlcyxzZXRMb2FkaW5nLHNldEFjdGl2ZXMsc2V0Tm90RmluaXNoZWR9KSA9PiB7XHJcbiAgY29uc3Qge2FkZFRvYXN0fSA9IHVzZVRvYXN0cygpXHJcblxyXG4gIGNvbnN0IGdldFVzZXJEZWFsID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ2dldHVzZXJkZWFsJylcclxuICAgIGF4aW9zLnBvc3QoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L2dldFVzZXJEYXRhRGVhbGAsIHt0b2tlbjogY29va2llLmdldCgndG9rZW4nKX0pXHJcbiAgICAgIC50aGVuKHJlcz0+IHtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgIHNldEFjdGl2ZXMoZmlsdGVyQnlQYXJhbShyZXMuZGF0YSwge3R5cGU6ICdkZWFsJ30pKVxyXG4gICAgICAgIHNldE5vdEZpbmlzaGVkKGZpbHRlckJ5UGFyYW0ocmVzLmRhdGEsIHt0eXBlOiAnbGVhZCd9KSlcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycj0+IHtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25DYW5jZWwgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IGxlYWRfaWQgPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQ7XHJcbiAgICBzd2FsKCfQntGC0LrQsNC30LDRgtGM0YHRjycsIHtcclxuICAgICAgdGV4dDogJ9CS0Ysg0YLQvtGH0L3QviDRhdC+0YLQuNGC0LUg0L7RgtC60LDQt9Cw0YLRjNGB0Y8g0L7RgiDRjdGC0L7QuSDRg9GB0LvRg9Cz0Lg/JyxcclxuICAgICAgYnV0dG9uczoge1xyXG4gICAgICAgIGNhdGNoOiB7XHJcbiAgICAgICAgICB0ZXh0OiAn0JTQsCwg0L7RgtC60LDQt9Cw0YLRjNGB0Y8nLFxyXG4gICAgICAgICAgdmFsdWU6ICdjYXRjaCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjYW5jZWw6ICfQndC10YInXHJcbiAgICAgIH1cclxuICAgIH0pLnRoZW4odmFsPT4ge1xyXG4gICAgICBzd2l0Y2godmFsKSB7XHJcbiAgICAgICAgY2FzZSAnY2F0Y2gnOlxyXG4gICAgICAgICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgICAgICAgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9zdGFnZURlYWw/SUQ9JHtsZWFkX2lkfWApXHJcbiAgICAgICAgICAgIC50aGVuKHJlcz0+IHtcclxuICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgICAgICAgIGlmKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgIGFkZFRvYXN0KCfQktGLINGD0YHQv9C10YjQvdC+INC+0YLQutCw0LfQsNC70LjRgdGMJywge1xyXG4gICAgICAgICAgICAgICAgICBhcHBlYXJhbmNlOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgIGF1dG9EaXNtaXNzOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIGFkZFRvYXN0KCfQktCw0YjQsCDQt9Cw0Y/QstC60LAg0YPQttC1INGA0LDRgdGB0LzQsNGC0YDQuNCy0LDQtdGC0YHRjyDRjtGA0LjRgdGC0LDQvNC4Jywge1xyXG4gICAgICAgICAgICAgICAgICBhcHBlYXJhbmNlOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgICBhdXRvRGlzbWlzczogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgY2FzZSBcImNhbmNlbFwiOlxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHthY3RpdmVzLmxlbmd0aCA9PT0gMCA/IDxoMj7QoyDQstCw0YEg0L3QtdGC0YMg0LDQutGC0LjQstC90YvRhSDQt9Cw0Y/QstC+0Lo8L2gyPiA6PGRpdiBjbGFzc05hbWU9J3JlcXVlc3RfbGlzdCc+XHJcbiAgICAgICAge2FjdGl2ZXMubWFwKGEgPT4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2EudGl0bGUgPT09ICfQntGC0LrQsNC3INC+0YIg0LfQsNC60LDQt9CwJyA/ICdkLW5vbmUnIDogJ3JlcXVlc3RfY2FyZCd9PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J3N0YXR1cyAnPnthLnRpdGxlfTwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmRfaW5mbyc+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzcGhlcmUnPtCh0YTQtdGA0LA6IHthLnNwaGVyZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdkZXNjcmlwdGlvbic+0J7Qv9C40YHQsNC90LjQtToge2EuZGVzY3JpcHRpb259PC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICB7LyogPHNwYW4gY2xhc3NOYW1lPSdkZXNjcmlwdGlvbic+0J7RgtC60LDQt9Cw0YLRjNGB0Y86IHthLmRlc2NyaXB0aW9ufTwvc3Bhbj4gKi99XHJcbiAgICAgICAgICAgICAgey8qIHthLmJ1dHRvbiAmJiA8ZGl2IGRhdGEtaWQ9e2EuZGVhbElEfSBrZXk9e2EuZGVhbElEfSBvbkNsaWNrPXtlPT5vbkNhbmNlbChlKX0gY2xhc3NOYW1lPSdjYW5jZWxfYnRuJz48c3Bhbj7QntGC0LrQsNC30LDRgtGM0YHRjzwvc3Bhbj48L2Rpdj59ICovfVxyXG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1pZD17YS5kZWFsSUR9IGtleT17YS5kZWFsSUR9IG9uQ2xpY2s9e2U9Pm9uQ2FuY2VsKGUpfSBjbGFzc05hbWU9J2NhbmNlbF9idG4nPjxzcGFuPtCe0YLQutCw0LfQsNGC0YzRgdGPPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj59XHJcbiAgICAgIFxyXG4gICAgPC9kaXY+XHJcblxyXG4gIClcclxufVxyXG5cclxuY29uc3QgTm90RmluaXNoZWQgPSAoe25vdEZpbmlzaGVkfSkgPT4ge1xyXG4gIGNvbnN0IG9uQ29udGludWUgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IGlkID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQuaWQ7XHJcbiAgICBjb25zdCBzdGVwID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LmRhdGFzZXQuc3RlcCk7XHJcbiAgICBjb25zdCBhbW91bnQgPSBldmVudC50YXJnZXQuZGF0YXNldC5hbW91bnRcclxuICAgIGNvbnN0IHR5cGUgPSBldmVudC50YXJnZXQuZGF0YXNldC50eXBlO1xyXG4gICAgUm91dGVyLnB1c2goe1xyXG4gICAgICBwYXRobmFtZTogJy9jYWJpbmV0L2NvbnRpbnVlJyxcclxuICAgICAgcXVlcnk6IHtcclxuICAgICAgICBzdGVwOiBzdGVwICsgMSxcclxuICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgdHlwZTogdHlwZSxcclxuICAgICAgICBhbW91bnQ6IGFtb3VudFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J3JlcXVlc3RfbGlzdCc+XHJcbiAgICAgIHtub3RGaW5pc2hlZC5tYXAoeCA9PiAoXHJcbiAgICAgICAgPGRpdiBkYXRhLWlkPXt4LmlkfSBkYXRhLXN0ZXA9e3guc3RlcH0gY2xhc3NOYW1lPSdyZXF1ZXN0X2NhcmQnPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSdzdGF0dXMgc3RhdHVzX2luZm8nPlxyXG4gICAgICAgICAgICB7eC5sZWFkfVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjYXBpdGFsaXplJz48Yj7QpNCY0J46PC9iPiB7eC5maW99PC9zcGFuPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAge3guc3BoZXJlICE9PSBudWxsID9cclxuICAgICAgICAgIDxzcGFuPjxiPtCh0YTQtdGA0LA6IDwvYj57eC5zcGhlcmV9PC9zcGFuPiA6ICAgPHNwYW4+0KLQtdC70LXRhNC+0L0g0L3QvtC80LXRgDogK3t4LnBob25lfTwvc3Bhbj59XHJcblxyXG4gICAgICAgICAge3guYW1vdW50ICE9PSBudWxsICYmIDxzcGFuPjxiPtCh0YPQvNC80LAg0LjRgdC60LA6PC9iPiB7eC5hbW91bnR9INGC0LM8L3NwYW4+fVxyXG4gICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgZGF0YS1pZD17eC5pZH1cclxuICAgICAgICAgICAgZGF0YS1zdGVwPXt4LnN0ZXB9XHJcbiAgICAgICAgICAgIGRhdGEtdHlwZT17eC5jbGllbnRfdHlwZX1cclxuICAgICAgICAgICAgZGF0YS1hbW91bnQ9e3guYW1vdW50IHx8IG51bGx9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nZGV0YWlsZWRidG4nXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gb25Db250aW51ZShlKX0+0J/RgNC+0LTQvtC70LbQuNGC0Ywg0LDQvdC60LXRgtGDIOKunjwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IENhYmluZXRSZXF1ZXN0cyA9ICh7c2V0QWN0aXZlLCBpc0FjdGl2ZSwgYWN0aXZlcywgbm90RmluaXNoZWQsIHNldExvYWRpbmcsIHNldEFjdGl2ZXMsIHNldE5vdEZpbmlzaGVkfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIGNhYmluZXRfX3JlcXVlc3RzJz5cclxuICAgICAgPHAgY2xhc3NOYW1lPSdoZWFkZXInPtCc0L7QuCDQt9Cw0Y/QstC60Lg8L3A+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVxdWVzdF9ibG9jayc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlcXVlc3Rfb3B0aW9uJz5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17aXNBY3RpdmUgJiYgJ2FjdGl2ZSd9IG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZSh0cnVlKX0+0JDQutGC0LjQstC90YvQtTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17IWlzQWN0aXZlICYmICdhY3RpdmUnfSBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmUoZmFsc2UpfT7QndC10LTQvtC30LDQv9C+0LvQvdC10L3QvdGL0LU8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge2lzQWN0aXZlXHJcbiAgICAgICAgICA/IDxUb2FzdFByb3ZpZGVyPjxBY3RpdmVzIGFjdGl2ZXM9e2FjdGl2ZXN9IHNldExvYWRpbmc9e3NldExvYWRpbmd9IHNldEFjdGl2ZXM9e3NldEFjdGl2ZXN9IHNldE5vdEZpbmlzaGVkPXtzZXROb3RGaW5pc2hlZH0vPjwvVG9hc3RQcm92aWRlcj5cclxuICAgICAgICAgIDogPE5vdEZpbmlzaGVkIG5vdEZpbmlzaGVkPXtub3RGaW5pc2hlZH0vPn1cclxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9J3JlcXVlc3RfbGlzdCc+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVxdWVzdF9jYXJkJz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdzdGF0dXMnPtCSINC+0LHRgNCw0LHQvtGC0LrQtTwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmRfaW5mbyc+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzcGhlcmUnPtCh0YTQtdGA0LA60KHQtdC80LXQudC90YvQtSDRgdC/0L7RgNGLPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZGVzY3JpcHRpb24nPtCe0L/QuNGB0LDQvdC40LU6TG9yZW0gbG9yZW0gbG9yZW0gbG9yZW0gbG9yZW08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdwcmljZSc+0KHRgtC+0LjQvNC+0YHRgtGMINGD0YHQu9GD0LPQuDogMTAwMDAwINGC0LMgPHNwYW4+MjAwMDAw0YLQszwvc3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdkZXRhaWxlZGJ0bic+0JTQtdGC0LDQu9C4INC30LDRj9Cy0LrQuCDirp48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVxdWVzdF9jYXJkJz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdzdGF0dXMnPtCSINC+0LHRgNCw0LHQvtGC0LrQtTwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmRfaW5mbyc+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzcGhlcmUnPtCh0YTQtdGA0LA60KHQtdC80LXQudC90YvQtSDRgdC/0L7RgNGLPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZGVzY3JpcHRpb24nPtCe0L/QuNGB0LDQvdC40LU6TG9yZW0gbG9yZW0gbG9yZW0gbG9yZW0gbG9yZW08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdwcmljZSc+0KHRgtC+0LjQvNC+0YHRgtGMINGD0YHQu9GD0LPQuDogMTAwMDAwINGC0LMgPHNwYW4+MjAwMDAw0YLQszwvc3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdkZXRhaWxlZGJ0bic+0JTQtdGC0LDQu9C4INC30LDRj9Cy0LrQuCDirp48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBDYWJpbmV0UmVxdWVzdHMiXSwic291cmNlUm9vdCI6IiJ9