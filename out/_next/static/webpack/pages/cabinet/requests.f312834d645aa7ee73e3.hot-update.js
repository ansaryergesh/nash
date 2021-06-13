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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\job\\nashcompany\\components\\cabinet\\CabinetRequests.js",
    _this = undefined;



var Actives = function Actives(_ref) {
  var actives = _ref.actives;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "request_list",
    children: actives.map(function (a) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "request_card",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "status ",
          children: a.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 7,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "card_info",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "sphere",
            children: ["\u0421\u0444\u0435\u0440\u0430: ", a.sphere]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 9,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "description",
            children: ["\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435: ", a.description]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 9
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }, _this);
};

_c = Actives;

var NotFinished = function NotFinished(_ref2) {
  var notFinished = _ref2.notFinished;

  var onContinue = function onContinue(e) {
    console.log(e.target.dataset); // Router.push({pathname: '/cabinet/continue', query: {
    //   step: e.target.getAttribute('data-step'),
    //   id: e.target.getAttribute('data-id')
    // }})
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
          lineNumber: 31,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "capitalize",
          children: ["\u0424\u0418\u041E: ", x.fio]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: ["\u0422\u0435\u043B\u0435\u0444\u043E\u043D \u043D\u043E\u043C\u0435\u0440: +", x.phone]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "detailedbtn",
          onClick: function onClick(e) {
            return onContinue(e);
          },
          children: "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u0430\u043D\u043A\u0435\u0442\u0443 \u2B9E"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, _this);
};

_c2 = NotFinished;

var CabinetRequests = function CabinetRequests(_ref3) {
  var setActive = _ref3.setActive,
      isActive = _ref3.isActive,
      actives = _ref3.actives,
      notFinished = _ref3.notFinished;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "container cabinet__requests",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "header",
      children: "\u041C\u043E\u0438 \u0437\u0430\u044F\u0432\u043A\u0438"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
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
          lineNumber: 50,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: !isActive && 'active',
          onClick: function onClick() {
            return setActive(false);
          },
          children: "\u041D\u0435\u0434\u043E\u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u044B\u0435"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, _this), isActive ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Actives, {
        actives: actives
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 21
      }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NotFinished, {
        notFinished: notFinished
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 53
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 45,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYWJpbmV0L0NhYmluZXRSZXF1ZXN0cy5qcyJdLCJuYW1lcyI6WyJBY3RpdmVzIiwiYWN0aXZlcyIsIm1hcCIsImEiLCJ0aXRsZSIsInNwaGVyZSIsImRlc2NyaXB0aW9uIiwiTm90RmluaXNoZWQiLCJub3RGaW5pc2hlZCIsIm9uQ29udGludWUiLCJlIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsImRhdGFzZXQiLCJ4IiwiaWQiLCJzdGVwIiwibGVhZCIsImZpbyIsInBob25lIiwiQ2FiaW5ldFJlcXVlc3RzIiwic2V0QWN0aXZlIiwiaXNBY3RpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0EsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBZTtBQUFBLE1BQWJDLE9BQWEsUUFBYkEsT0FBYTtBQUM3QixzQkFDRTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUEsY0FDR0EsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBQUMsQ0FBQztBQUFBLDBCQUNaO0FBQUssaUJBQVMsRUFBQyxjQUFmO0FBQUEsZ0NBQ0U7QUFBRyxtQkFBUyxFQUFDLFNBQWI7QUFBQSxvQkFBd0JBLENBQUMsQ0FBQ0M7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUssbUJBQVMsRUFBQyxXQUFmO0FBQUEsa0NBQ0U7QUFBTSxxQkFBUyxFQUFDLFFBQWhCO0FBQUEsMkRBQWlDRCxDQUFDLENBQUNFLE1BQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQU0scUJBQVMsRUFBQyxhQUFoQjtBQUFBLDZFQUF5Q0YsQ0FBQyxDQUFDRyxXQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURZO0FBQUEsS0FBYjtBQURIO0FBQUE7QUFB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ZXQvcmVxdWVzdHMuZjMxMjgzNGQ2NDVhYTdlZTczZTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmNvbnN0IEFjdGl2ZXMgPSAoe2FjdGl2ZXN9KSA9PiB7XHJcbiAgcmV0dXJuKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J3JlcXVlc3RfbGlzdCc+XHJcbiAgICAgIHthY3RpdmVzLm1hcChhPT4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlcXVlc3RfY2FyZCc+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9J3N0YXR1cyAnPnthLnRpdGxlfTwvcD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkX2luZm8nPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NwaGVyZSc+0KHRhNC10YDQsDoge2Euc3BoZXJlfTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdkZXNjcmlwdGlvbic+0J7Qv9C40YHQsNC90LjQtToge2EuZGVzY3JpcHRpb259PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5cclxuY29uc3QgTm90RmluaXNoZWQgPSAoe25vdEZpbmlzaGVkfSkgPT4ge1xyXG4gIGNvbnN0IG9uQ29udGludWUgPSAoZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZS50YXJnZXQuZGF0YXNldClcclxuICAgIC8vIFJvdXRlci5wdXNoKHtwYXRobmFtZTogJy9jYWJpbmV0L2NvbnRpbnVlJywgcXVlcnk6IHtcclxuICAgIC8vICAgc3RlcDogZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXN0ZXAnKSxcclxuICAgIC8vICAgaWQ6IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpXHJcbiAgICAvLyB9fSlcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdyZXF1ZXN0X2xpc3QnPlxyXG4gICAgICB7bm90RmluaXNoZWQubWFwKHggPT4gKFxyXG4gICAgICAgIDxkaXYgZGF0YS1pZD17eC5pZH0gZGF0YS1zdGVwPXt4LnN0ZXB9IGNsYXNzTmFtZT0ncmVxdWVzdF9jYXJkJz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdzdGF0dXMgc3RhdHVzX2luZm8nPlxyXG4gICAgICAgICAgICAgIHt4LmxlYWR9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjYXBpdGFsaXplJz7QpNCY0J46IHt4LmZpb308L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPtCi0LXQu9C10YTQvtC9INC90L7QvNC10YA6ICt7eC5waG9uZX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZGV0YWlsZWRidG4nIG9uQ2xpY2s9e2U9PiBvbkNvbnRpbnVlKGUpfT7Qn9GA0L7QtNC+0LvQttC40YLRjCDQsNC90LrQtdGC0YMg4q6ePC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgQ2FiaW5ldFJlcXVlc3RzID0gKHtzZXRBY3RpdmUsaXNBY3RpdmUsIGFjdGl2ZXMsIG5vdEZpbmlzaGVkfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIGNhYmluZXRfX3JlcXVlc3RzJz5cclxuICAgICAgPHAgY2xhc3NOYW1lPSdoZWFkZXInPtCc0L7QuCDQt9Cw0Y/QstC60Lg8L3A+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVxdWVzdF9ibG9jayc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlcXVlc3Rfb3B0aW9uJz5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17aXNBY3RpdmUgJiYgJ2FjdGl2ZSd9IG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZSh0cnVlKX0+0JDQutGC0LjQstC90YvQtTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17IWlzQWN0aXZlICYmICdhY3RpdmUnfSBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmUoZmFsc2UpfT7QndC10LTQvtC30LDQv9C+0LvQvdC10L3QvdGL0LU8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge2lzQWN0aXZlID8gPEFjdGl2ZXMgYWN0aXZlcz17YWN0aXZlc30gLz4gOiA8Tm90RmluaXNoZWQgbm90RmluaXNoZWQ9e25vdEZpbmlzaGVkfS8+fVxyXG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0ncmVxdWVzdF9saXN0Jz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZXF1ZXN0X2NhcmQnPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J3N0YXR1cyc+0JIg0L7QsdGA0LDQsdC+0YLQutC1PC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZF9pbmZvJz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NwaGVyZSc+0KHRhNC10YDQsDrQodC10LzQtdC50L3Ri9C1INGB0L/QvtGA0Ys8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdkZXNjcmlwdGlvbic+0J7Qv9C40YHQsNC90LjQtTpMb3JlbSBsb3JlbSBsb3JlbSBsb3JlbSBsb3JlbTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3ByaWNlJz7QodGC0L7QuNC80L7RgdGC0Ywg0YPRgdC70YPQs9C4OiAxMDAwMDAg0YLQsyA8c3Bhbj4yMDAwMDDRgtCzPC9zcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2RldGFpbGVkYnRuJz7QlNC10YLQsNC70Lgg0LfQsNGP0LLQutC4IOKunjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZXF1ZXN0X2NhcmQnPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J3N0YXR1cyc+0JIg0L7QsdGA0LDQsdC+0YLQutC1PC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZF9pbmZvJz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NwaGVyZSc+0KHRhNC10YDQsDrQodC10LzQtdC50L3Ri9C1INGB0L/QvtGA0Ys8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdkZXNjcmlwdGlvbic+0J7Qv9C40YHQsNC90LjQtTpMb3JlbSBsb3JlbSBsb3JlbSBsb3JlbSBsb3JlbTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3ByaWNlJz7QodGC0L7QuNC80L7RgdGC0Ywg0YPRgdC70YPQs9C4OiAxMDAwMDAg0YLQsyA8c3Bhbj4yMDAwMDDRgtCzPC9zcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2RldGFpbGVkYnRuJz7QlNC10YLQsNC70Lgg0LfQsNGP0LLQutC4IOKunjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IENhYmluZXRSZXF1ZXN0cyJdLCJzb3VyY2VSb290IjoiIn0=