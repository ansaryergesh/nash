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
      lineNumber: 60,
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
            lineNumber: 63,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "card_info",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "sphere",
              children: ["\u0421\u0444\u0435\u0440\u0430: ", a.sphere]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "description",
              children: ["\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435: ", a.description]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 66,
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
                lineNumber: 70,
                columnNumber: 102
              }, _this)
            }, a.dealID, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 68
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 59,
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
          lineNumber: 101,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "capitalize",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
            children: "\u0424\u0418\u041E:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 40
          }, _this), " ", x.fio]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }, _this), x.sphere !== null ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
            children: "\u0421\u0444\u0435\u0440\u0430: "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 17
          }, _this), x.sphere]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 11
        }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: ["\u0422\u0435\u043B\u0435\u0444\u043E\u043D \u043D\u043E\u043C\u0435\u0440: +", x.phone]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 53
        }, _this), x.amount !== null && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
            children: "\u0421\u0443\u043C\u043C\u0430 \u0438\u0441\u043A\u0430:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 39
          }, _this), " ", x.amount, " \u0442\u0433"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 109,
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
          lineNumber: 110,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 98,
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
      lineNumber: 126,
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
          lineNumber: 130,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: !isActive && 'active',
          onClick: function onClick() {
            return setActive(false);
          },
          children: "\u041D\u0435\u0434\u043E\u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u044B\u0435"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 9
      }, _this), isActive ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toast_notifications__WEBPACK_IMPORTED_MODULE_4__.ToastProvider, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Actives, {
          actives: actives,
          setLoading: setLoading,
          setActives: setActives,
          setNotFinished: setNotFinished
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 28
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 13
      }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NotFinished, {
        notFinished: notFinished
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 125,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYWJpbmV0L0NhYmluZXRSZXF1ZXN0cy5qcyJdLCJuYW1lcyI6WyJBY3RpdmVzIiwiYWN0aXZlcyIsInNldExvYWRpbmciLCJzZXRBY3RpdmVzIiwic2V0Tm90RmluaXNoZWQiLCJ1c2VUb2FzdHMiLCJhZGRUb2FzdCIsImdldFVzZXJEZWFsIiwiY29uc29sZSIsImxvZyIsImF4aW9zIiwicHJvY2VzcyIsInRva2VuIiwiY29va2llIiwidGhlbiIsInJlcyIsImZpbHRlckJ5UGFyYW0iLCJkYXRhIiwidHlwZSIsImVyciIsIm9uQ2FuY2VsIiwiZXZlbnQiLCJsZWFkX2lkIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJpZCIsInN3YWwiLCJ0ZXh0IiwiYnV0dG9ucyIsInZhbHVlIiwiY2FuY2VsIiwidmFsIiwic3VjY2VzcyIsImFwcGVhcmFuY2UiLCJhdXRvRGlzbWlzcyIsImxlbmd0aCIsIm1hcCIsImEiLCJ0aXRsZSIsInNwaGVyZSIsImRlc2NyaXB0aW9uIiwiZGVhbElEIiwiZSIsIk5vdEZpbmlzaGVkIiwibm90RmluaXNoZWQiLCJvbkNvbnRpbnVlIiwidGFyZ2V0Iiwic3RlcCIsInBhcnNlSW50IiwiYW1vdW50IiwiUm91dGVyIiwicGF0aG5hbWUiLCJxdWVyeSIsIngiLCJsZWFkIiwiZmlvIiwicGhvbmUiLCJjbGllbnRfdHlwZSIsIkNhYmluZXRSZXF1ZXN0cyIsInNldEFjdGl2ZSIsImlzQWN0aXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUFvRDtBQUFBOztBQUFBLE1BQWxEQyxPQUFrRCxRQUFsREEsT0FBa0Q7QUFBQSxNQUExQ0MsVUFBMEMsUUFBMUNBLFVBQTBDO0FBQUEsTUFBL0JDLFVBQStCLFFBQS9CQSxVQUErQjtBQUFBLE1BQXBCQyxj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RUU7QUFBTSxtQkFBUyxFQUFFLENBQUNDLFFBQUQsSUFBYSxRQUE5QjtBQUF3QyxpQkFBTyxFQUFFO0FBQUEsbUJBQU1ELFNBQVMsQ0FBQyxLQUFELENBQWY7QUFBQSxXQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQUtHQyxRQUFRLGdCQUNMLDhEQUFDLG9FQUFEO0FBQUEsK0JBQWUsOERBQUMsT0FBRDtBQUFTLGlCQUFPLEVBQUUzRCxPQUFsQjtBQUEyQixvQkFBVSxFQUFFQyxVQUF2QztBQUFtRCxvQkFBVSxFQUFFQyxVQUEvRDtBQUEyRSx3QkFBYyxFQUFFQztBQUEzRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURLLGdCQUVMLDhEQUFDLFdBQUQ7QUFBYSxtQkFBVyxFQUFFd0M7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBbUNELENBcENEOztNQUFNYyxlO0FBcUNOLCtEQUFlQSxlQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhYmluZXQvcmVxdWVzdHMuMDVlYzllYWNmMmM3OTY2ZjFmYzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBzd2FsIGZyb20gJ3N3ZWV0YWxlcnQnO1xyXG5pbXBvcnQge1RvYXN0UHJvdmlkZXIsIHVzZVRvYXN0c30gZnJvbSAncmVhY3QtdG9hc3Qtbm90aWZpY2F0aW9ucydcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnXHJcbmNvbnN0IEFjdGl2ZXMgPSAoe2FjdGl2ZXMsc2V0TG9hZGluZyxzZXRBY3RpdmVzLHNldE5vdEZpbmlzaGVkfSkgPT4ge1xyXG4gIGNvbnN0IHthZGRUb2FzdH0gPSB1c2VUb2FzdHMoKVxyXG5cclxuICBjb25zdCBnZXRVc2VyRGVhbCA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdnZXR1c2VyZGVhbCcpXHJcbiAgICBheGlvcy5wb3N0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9nZXRVc2VyRGF0YURlYWxgLCB7dG9rZW46IGNvb2tpZS5nZXQoJ3Rva2VuJyl9KVxyXG4gICAgICAudGhlbihyZXM9PiB7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICBzZXRBY3RpdmVzKGZpbHRlckJ5UGFyYW0ocmVzLmRhdGEsIHt0eXBlOiAnZGVhbCd9KSlcclxuICAgICAgICBzZXROb3RGaW5pc2hlZChmaWx0ZXJCeVBhcmFtKHJlcy5kYXRhLCB7dHlwZTogJ2xlYWQnfSkpXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnI9PiB7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uQ2FuY2VsID0gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCBsZWFkX2lkID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkO1xyXG4gICAgc3dhbCgn0J7RgtC60LDQt9Cw0YLRjNGB0Y8nLCB7XHJcbiAgICAgIHRleHQ6ICfQktGLINGC0L7Rh9C90L4g0YXQvtGC0LjRgtC1INC+0YLQutCw0LfQsNGC0YzRgdGPINC+0YIg0Y3RgtC+0Lkg0YPRgdC70YPQs9C4PycsXHJcbiAgICAgIGJ1dHRvbnM6IHtcclxuICAgICAgICBjYXRjaDoge1xyXG4gICAgICAgICAgdGV4dDogJ9CU0LAsINC+0YLQutCw0LfQsNGC0YzRgdGPJyxcclxuICAgICAgICAgIHZhbHVlOiAnY2F0Y2gnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FuY2VsOiAn0J3QtdGCJ1xyXG4gICAgICB9XHJcbiAgICB9KS50aGVuKHZhbD0+IHtcclxuICAgICAgc3dpdGNoKHZhbCkge1xyXG4gICAgICAgIGNhc2UgJ2NhdGNoJzpcclxuICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgICAgICAgIGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vc3RhZ2VEZWFsP0lEPSR7bGVhZF9pZH1gKVxyXG4gICAgICAgICAgICAudGhlbihyZXM9PiB7XHJcbiAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICAgICAgICBpZihyZXMuZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICBnZXRVc2VyRGVhbCgpXHJcbiAgICAgICAgICAgICAgICBhZGRUb2FzdCgn0JLRiyDRg9GB0L/QtdGI0L3QviDQvtGC0LrQsNC30LDQu9C40YHRjCcsIHtcclxuICAgICAgICAgICAgICAgICAgYXBwZWFyYW5jZTogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICBhdXRvRGlzbWlzczogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhZGRUb2FzdCgn0JLQsNGI0LAg0LfQsNGP0LLQutCwINGD0LbQtSDRgNCw0YHRgdC80LDRgtGA0LjQstCw0LXRgtGB0Y8g0Y7RgNC40YHRgtCw0LzQuCcsIHtcclxuICAgICAgICAgICAgICAgICAgYXBwZWFyYW5jZTogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgICAgYXV0b0Rpc21pc3M6IHRydWVcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIGNhc2UgXCJjYW5jZWxcIjpcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7YWN0aXZlcy5sZW5ndGggPT09IDAgPyA8aDI+0KMg0LLQsNGBINC90LXRgtGDINCw0LrRgtC40LLQvdGL0YUg0LfQsNGP0LLQvtC6PC9oMj4gOjxkaXYgY2xhc3NOYW1lPSdyZXF1ZXN0X2xpc3QnPlxyXG4gICAgICAgIHthY3RpdmVzLm1hcChhID0+IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXthLnRpdGxlID09PSAn0J7RgtC60LDQtyDQvtGCINC30LDQutCw0LfQsCcgPyAnZC1ub25lJyA6ICdyZXF1ZXN0X2NhcmQnfT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdzdGF0dXMgJz57YS50aXRsZX08L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkX2luZm8nPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc3BoZXJlJz7QodGE0LXRgNCwOiB7YS5zcGhlcmV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZGVzY3JpcHRpb24nPtCe0L/QuNGB0LDQvdC40LU6IHthLmRlc2NyaXB0aW9ufTwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgey8qIDxzcGFuIGNsYXNzTmFtZT0nZGVzY3JpcHRpb24nPtCe0YLQutCw0LfQsNGC0YzRgdGPOiB7YS5kZXNjcmlwdGlvbn08L3NwYW4+ICovfVxyXG4gICAgICAgICAgICAgIHsvKiB7YS5idXR0b24gJiYgPGRpdiBkYXRhLWlkPXthLmRlYWxJRH0ga2V5PXthLmRlYWxJRH0gb25DbGljaz17ZT0+b25DYW5jZWwoZSl9IGNsYXNzTmFtZT0nY2FuY2VsX2J0bic+PHNwYW4+0J7RgtC60LDQt9Cw0YLRjNGB0Y88L3NwYW4+PC9kaXY+fSAqL31cclxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtaWQ9e2EuZGVhbElEfSBrZXk9e2EuZGVhbElEfSBvbkNsaWNrPXtlPT5vbkNhbmNlbChlKX0gY2xhc3NOYW1lPSdjYW5jZWxfYnRuJz48c3Bhbj7QntGC0LrQsNC30LDRgtGM0YHRjzwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+fVxyXG4gICAgICBcclxuICAgIDwvZGl2PlxyXG5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IE5vdEZpbmlzaGVkID0gKHtub3RGaW5pc2hlZH0pID0+IHtcclxuICBjb25zdCBvbkNvbnRpbnVlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCBpZCA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmlkO1xyXG4gICAgY29uc3Qgc3RlcCA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC5kYXRhc2V0LnN0ZXApO1xyXG4gICAgY29uc3QgYW1vdW50ID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQuYW1vdW50XHJcbiAgICBjb25zdCB0eXBlID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQudHlwZTtcclxuICAgIFJvdXRlci5wdXNoKHtcclxuICAgICAgcGF0aG5hbWU6ICcvY2FiaW5ldC9jb250aW51ZScsXHJcbiAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgc3RlcDogc3RlcCArIDEsXHJcbiAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgIHR5cGU6IHR5cGUsXHJcbiAgICAgICAgYW1vdW50OiBhbW91bnRcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdyZXF1ZXN0X2xpc3QnPlxyXG4gICAgICB7bm90RmluaXNoZWQubWFwKHggPT4gKFxyXG4gICAgICAgIDxkaXYgZGF0YS1pZD17eC5pZH0gZGF0YS1zdGVwPXt4LnN0ZXB9IGNsYXNzTmFtZT0ncmVxdWVzdF9jYXJkJz5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nc3RhdHVzIHN0YXR1c19pbmZvJz5cclxuICAgICAgICAgICAge3gubGVhZH1cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nY2FwaXRhbGl6ZSc+PGI+0KTQmNCeOjwvYj4ge3guZmlvfTwvc3Bhbj5cclxuICAgICAgICBcclxuICAgICAgICAgIHt4LnNwaGVyZSAhPT0gbnVsbCA/XHJcbiAgICAgICAgICA8c3Bhbj48Yj7QodGE0LXRgNCwOiA8L2I+e3guc3BoZXJlfTwvc3Bhbj4gOiAgIDxzcGFuPtCi0LXQu9C10YTQvtC9INC90L7QvNC10YA6ICt7eC5waG9uZX08L3NwYW4+fVxyXG5cclxuICAgICAgICAgIHt4LmFtb3VudCAhPT0gbnVsbCAmJiA8c3Bhbj48Yj7QodGD0LzQvNCwINC40YHQutCwOjwvYj4ge3guYW1vdW50fSDRgtCzPC9zcGFuPn1cclxuICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgIGRhdGEtaWQ9e3guaWR9XHJcbiAgICAgICAgICAgIGRhdGEtc3RlcD17eC5zdGVwfVxyXG4gICAgICAgICAgICBkYXRhLXR5cGU9e3guY2xpZW50X3R5cGV9XHJcbiAgICAgICAgICAgIGRhdGEtYW1vdW50PXt4LmFtb3VudCB8fCBudWxsfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9J2RldGFpbGVkYnRuJ1xyXG4gICAgICAgICAgICBvbkNsaWNrPXtlID0+IG9uQ29udGludWUoZSl9PtCf0YDQvtC00L7Qu9C20LjRgtGMINCw0L3QutC10YLRgyDirp48L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBDYWJpbmV0UmVxdWVzdHMgPSAoe3NldEFjdGl2ZSwgaXNBY3RpdmUsIGFjdGl2ZXMsIG5vdEZpbmlzaGVkLCBzZXRMb2FkaW5nLCBzZXRBY3RpdmVzLCBzZXROb3RGaW5pc2hlZH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciBjYWJpbmV0X19yZXF1ZXN0cyc+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT0naGVhZGVyJz7QnNC+0Lgg0LfQsNGP0LLQutC4PC9wPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3JlcXVlc3RfYmxvY2snPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZXF1ZXN0X29wdGlvbic+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2lzQWN0aXZlICYmICdhY3RpdmUnfSBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmUodHJ1ZSl9PtCQ0LrRgtC40LLQvdGL0LU8L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9eyFpc0FjdGl2ZSAmJiAnYWN0aXZlJ30gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlKGZhbHNlKX0+0J3QtdC00L7Qt9Cw0L/QvtC70L3QtdC90L3Ri9C1PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtpc0FjdGl2ZVxyXG4gICAgICAgICAgPyA8VG9hc3RQcm92aWRlcj48QWN0aXZlcyBhY3RpdmVzPXthY3RpdmVzfSBzZXRMb2FkaW5nPXtzZXRMb2FkaW5nfSBzZXRBY3RpdmVzPXtzZXRBY3RpdmVzfSBzZXROb3RGaW5pc2hlZD17c2V0Tm90RmluaXNoZWR9Lz48L1RvYXN0UHJvdmlkZXI+XHJcbiAgICAgICAgICA6IDxOb3RGaW5pc2hlZCBub3RGaW5pc2hlZD17bm90RmluaXNoZWR9Lz59XHJcbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPSdyZXF1ZXN0X2xpc3QnPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlcXVlc3RfY2FyZCc+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nc3RhdHVzJz7QkiDQvtCx0YDQsNCx0L7RgtC60LU8L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkX2luZm8nPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc3BoZXJlJz7QodGE0LXRgNCwOtCh0LXQvNC10LnQvdGL0LUg0YHQv9C+0YDRizwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2Rlc2NyaXB0aW9uJz7QntC/0LjRgdCw0L3QuNC1OkxvcmVtIGxvcmVtIGxvcmVtIGxvcmVtIGxvcmVtPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ncHJpY2UnPtCh0YLQvtC40LzQvtGB0YLRjCDRg9GB0LvRg9Cz0Lg6IDEwMDAwMCDRgtCzIDxzcGFuPjIwMDAwMNGC0LM8L3NwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZGV0YWlsZWRidG4nPtCU0LXRgtCw0LvQuCDQt9Cw0Y/QstC60Lgg4q6ePC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlcXVlc3RfY2FyZCc+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nc3RhdHVzJz7QkiDQvtCx0YDQsNCx0L7RgtC60LU8L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkX2luZm8nPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc3BoZXJlJz7QodGE0LXRgNCwOtCh0LXQvNC10LnQvdGL0LUg0YHQv9C+0YDRizwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2Rlc2NyaXB0aW9uJz7QntC/0LjRgdCw0L3QuNC1OkxvcmVtIGxvcmVtIGxvcmVtIGxvcmVtIGxvcmVtPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ncHJpY2UnPtCh0YLQvtC40LzQvtGB0YLRjCDRg9GB0LvRg9Cz0Lg6IDEwMDAwMCDRgtCzIDxzcGFuPjIwMDAwMNGC0LM8L3NwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZGV0YWlsZWRidG4nPtCU0LXRgtCw0LvQuCDQt9Cw0Y/QstC60Lgg4q6ePC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ2FiaW5ldFJlcXVlc3RzIl0sInNvdXJjZVJvb3QiOiIifQ==