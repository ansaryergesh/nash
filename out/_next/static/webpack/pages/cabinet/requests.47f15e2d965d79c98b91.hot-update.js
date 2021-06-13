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

  var onContinue = function onContinue(event) {
    console.log(event.target.dataset.step); // Router.push({pathname: '/cabinet/continue', query: {
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


/***/ }),

/***/ "./pages/cabinet/requests.js":
/*!***********************************!*\
  !*** ./pages/cabinet/requests.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_cabinet_CabinetNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/cabinet/CabinetNav */ "./components/cabinet/CabinetNav.js");
/* harmony import */ var _components_cabinet_CabinetRequests__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/cabinet/CabinetRequests */ "./components/cabinet/CabinetRequests.js");
/* harmony import */ var _components_shared_Nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/shared/Nav */ "./components/shared/Nav.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _defaults_extraFunction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../defaults/extraFunction */ "./defaults/extraFunction.js");
/* harmony import */ var _components_loader_Loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/loader/Loader */ "./components/loader/Loader.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\job\\nashcompany\\pages\\cabinet\\requests.js",
    _this = undefined,
    _s = $RefreshSig$();










var Requests = function Requests() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),
      isActive = _useState[0],
      setActive = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      allRequest = _useState2[0],
      setAll = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      actives = _useState3[0],
      setActives = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      notFinished = _useState4[0],
      setNotFinished = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      loading = _useState5[0],
      setLoading = _useState5[1];

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    setLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_1___default().post("".concat("https://crediter.kz/api", "/getUserDataDeal"), {
      token: js_cookie__WEBPACK_IMPORTED_MODULE_6___default().get('token')
    }).then(function (res) {
      setLoading(false); // console.log(res.data)

      setAll(res.data);
      setActives((0,_defaults_extraFunction__WEBPACK_IMPORTED_MODULE_7__.filterByParam)(res.data, {
        type: 'deal'
      }));
      setNotFinished((0,_defaults_extraFunction__WEBPACK_IMPORTED_MODULE_7__.filterByParam)(res.data, {
        type: 'lead'
      }));
    })["catch"](function (err) {
      setLoading(false);
      console.log(err);
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "cabinet",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Nav__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, _this), loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_loader_Loader__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 19
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cabinet_CabinetRequests__WEBPACK_IMPORTED_MODULE_4__.default, {
      isActive: isActive,
      setActive: setActive,
      actives: actives,
      notFinished: notFinished
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cabinet_CabinetNav__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, _this);
};

_s(Requests, "0zzFLFvWnn7QV+LH1hTdNzOvxsE=");

_c = Requests;
/* harmony default export */ __webpack_exports__["default"] = (Requests);

var _c;

$RefreshReg$(_c, "Requests");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYWJpbmV0L0NhYmluZXRSZXF1ZXN0cy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FiaW5ldC9yZXF1ZXN0cy5qcyJdLCJuYW1lcyI6WyJBY3RpdmVzIiwiYWN0aXZlcyIsIm1hcCIsImEiLCJ0aXRsZSIsInNwaGVyZSIsImRlc2NyaXB0aW9uIiwiTm90RmluaXNoZWQiLCJub3RGaW5pc2hlZCIsIm9uQ29udGludWUiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJkYXRhc2V0Iiwic3RlcCIsIngiLCJpZCIsImxlYWQiLCJmaW8iLCJwaG9uZSIsImUiLCJDYWJpbmV0UmVxdWVzdHMiLCJzZXRBY3RpdmUiLCJpc0FjdGl2ZSIsIlJlcXVlc3RzIiwidXNlU3RhdGUiLCJhbGxSZXF1ZXN0Iiwic2V0QWxsIiwic2V0QWN0aXZlcyIsInNldE5vdEZpbmlzaGVkIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VFZmZlY3QiLCJheGlvcyIsInByb2Nlc3MiLCJ0b2tlbiIsImNvb2tpZSIsInRoZW4iLCJyZXMiLCJkYXRhIiwiZmlsdGVyQnlQYXJhbSIsInR5cGUiLCJlcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0EsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBZTtBQUFBLE1BQWJDLE9BQWEsUUFBYkEsT0FBYTtBQUM3QixzQkFDRTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUEsY0FDR0EsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBQUMsQ0FBQztBQUFBLDBCQUNaO0FBQUssaUJBQVMsRUFBQyxjQUFmO0FBQUEsZ0NBQ0U7QUFBRyxtQkFBUyxFQUFDLFNBQWI7QUFBQSxvQkFBd0JBLENBQUMsQ0FBQ0M7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUssbUJBQVMsRUFBQyxXQUFmO0FBQUEsa0NBQ0U7QUFBTSxxQkFBUyxFQUFDLFFBQWhCO0FBQUEsMkRBQWlDRCxDQUFDLENBQUNFLE1BQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQU0scUJBQVMsRUFBQyxhQUFoQjtBQUFBLDZFQUF5Q0YsQ0FBQyxDQUFDRyxXQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURZO0FBQUEsS0FBYjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWFELENBZEQ7O0tBQU1OLE87O0FBaUJOLElBQU1PLFdBQVcsR0FBRyxTQUFkQSxXQUFjLFFBQW1CO0FBQUEsTUFBakJDLFdBQWlCLFNBQWpCQSxXQUFpQjs7QUFDckMsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFXO0FBQzVCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBSyxDQUFDRyxNQUFOLENBQWFDLE9BQWIsQ0FBcUJDLElBQWpDLEVBRDRCLENBRTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0QsR0FORDs7QUFPQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUEsY0FDR1AsV0FBVyxDQUFDTixHQUFaLENBQWdCLFVBQUFjLENBQUM7QUFBQSwwQkFDaEI7QUFBSyxtQkFBU0EsQ0FBQyxDQUFDQyxFQUFoQjtBQUFvQixxQkFBV0QsQ0FBQyxDQUFDRCxJQUFqQztBQUF1QyxpQkFBUyxFQUFDLGNBQWpEO0FBQUEsZ0NBQ0k7QUFBRyxtQkFBUyxFQUFDLG9CQUFiO0FBQUEsb0JBQ0dDLENBQUMsQ0FBQ0U7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBSUk7QUFBTSxtQkFBUyxFQUFDLFlBQWhCO0FBQUEsNkNBQW1DRixDQUFDLENBQUNHLEdBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKSixlQUtJO0FBQUEscUdBQXVCSCxDQUFDLENBQUNJLEtBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMSixlQU1JO0FBQU0sbUJBQVMsRUFBQyxhQUFoQjtBQUE4QixpQkFBTyxFQUFFLGlCQUFBQyxDQUFDO0FBQUEsbUJBQUdaLFVBQVUsQ0FBQ1ksQ0FBRCxDQUFiO0FBQUEsV0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGdCO0FBQUEsS0FBakI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFjRCxDQXRCRDs7TUFBTWQsVzs7QUF3Qk4sSUFBTWUsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixRQUFnRDtBQUFBLE1BQTlDQyxTQUE4QyxTQUE5Q0EsU0FBOEM7QUFBQSxNQUFwQ0MsUUFBb0MsU0FBcENBLFFBQW9DO0FBQUEsTUFBMUJ2QixPQUEwQixTQUExQkEsT0FBMEI7QUFBQSxNQUFqQk8sV0FBaUIsU0FBakJBLFdBQWlCO0FBQ3RFLHNCQUNFO0FBQUssYUFBUyxFQUFDLDZCQUFmO0FBQUEsNEJBQ0U7QUFBRyxlQUFTLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBR0U7QUFBSyxlQUFTLEVBQUMsZUFBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxnQkFBZjtBQUFBLGdDQUNFO0FBQU0sbUJBQVMsRUFBRWdCLFFBQVEsSUFBSSxRQUE3QjtBQUF1QyxpQkFBTyxFQUFFO0FBQUEsbUJBQU1ELFNBQVMsQ0FBQyxJQUFELENBQWY7QUFBQSxXQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQU0sbUJBQVMsRUFBRSxDQUFDQyxRQUFELElBQWEsUUFBOUI7QUFBd0MsaUJBQU8sRUFBRTtBQUFBLG1CQUFNRCxTQUFTLENBQUMsS0FBRCxDQUFmO0FBQUEsV0FBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFLR0MsUUFBUSxnQkFBRyw4REFBQyxPQUFEO0FBQVMsZUFBTyxFQUFFdkI7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFILGdCQUFtQyw4REFBQyxXQUFEO0FBQWEsbUJBQVcsRUFBRU87QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUw5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWlDRCxDQWxDRDs7TUFBTWMsZTtBQW1DTiwrREFBZUEsZUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1HLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFBQSxrQkFDUUMsK0NBQVEsQ0FBQyxJQUFELENBRGhCO0FBQUEsTUFDZEYsUUFEYztBQUFBLE1BQ0xELFNBREs7O0FBQUEsbUJBRU9HLCtDQUFRLENBQUMsRUFBRCxDQUZmO0FBQUEsTUFFZEMsVUFGYztBQUFBLE1BRUhDLE1BRkc7O0FBQUEsbUJBR1FGLCtDQUFRLENBQUMsRUFBRCxDQUhoQjtBQUFBLE1BR2R6QixPQUhjO0FBQUEsTUFHTjRCLFVBSE07O0FBQUEsbUJBSWdCSCwrQ0FBUSxDQUFDLEVBQUQsQ0FKeEI7QUFBQSxNQUlkbEIsV0FKYztBQUFBLE1BSUZzQixjQUpFOztBQUFBLG1CQUtRSiwrQ0FBUSxDQUFDLEtBQUQsQ0FMaEI7QUFBQSxNQUtkSyxPQUxjO0FBQUEsTUFLTkMsVUFMTTs7QUFNckJDLGtEQUFTLENBQUMsWUFBTTtBQUNkRCxjQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0FFLHFEQUFBLFdBQWNDLHlCQUFkLHVCQUFzRDtBQUFDQyxXQUFLLEVBQUVDLG9EQUFBLENBQVcsT0FBWDtBQUFSLEtBQXRELEVBQ0dDLElBREgsQ0FDUSxVQUFBQyxHQUFHLEVBQUc7QUFDVlAsZ0JBQVUsQ0FBQyxLQUFELENBQVYsQ0FEVSxDQUVWOztBQUNBSixZQUFNLENBQUNXLEdBQUcsQ0FBQ0MsSUFBTCxDQUFOO0FBQ0FYLGdCQUFVLENBQUNZLHNFQUFhLENBQUNGLEdBQUcsQ0FBQ0MsSUFBTCxFQUFXO0FBQUNFLFlBQUksRUFBRTtBQUFQLE9BQVgsQ0FBZCxDQUFWO0FBQ0FaLG9CQUFjLENBQUNXLHNFQUFhLENBQUNGLEdBQUcsQ0FBQ0MsSUFBTCxFQUFXO0FBQUNFLFlBQUksRUFBRTtBQUFQLE9BQVgsQ0FBZCxDQUFkO0FBQ0QsS0FQSCxXQVFTLFVBQUFDLEdBQUcsRUFBRztBQUNYWCxnQkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNBckIsYUFBTyxDQUFDQyxHQUFSLENBQVkrQixHQUFaO0FBQ0QsS0FYSDtBQWFELEdBZlEsRUFlTixFQWZNLENBQVQ7QUFpQkEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUFBLDRCQUNFLDhEQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUVHWixPQUFPLGlCQUFJLDhEQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGZCxlQUdFLDhEQUFDLHdFQUFEO0FBQWlCLGNBQVEsRUFBRVAsUUFBM0I7QUFBcUMsZUFBUyxFQUFFRCxTQUFoRDtBQUEyRCxhQUFPLEVBQUV0QixPQUFwRTtBQUE2RSxpQkFBVyxFQUFFTztBQUExRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEYsZUFJRSw4REFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFRRCxDQS9CRDs7R0FBTWlCLFE7O0tBQUFBLFE7QUFpQ04sK0RBQWVBLFFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FiaW5ldC9yZXF1ZXN0cy40N2YxNWUyZDk2NWQ3OWM5OGI5MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuY29uc3QgQWN0aXZlcyA9ICh7YWN0aXZlc30pID0+IHtcclxuICByZXR1cm4oXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0ncmVxdWVzdF9saXN0Jz5cclxuICAgICAge2FjdGl2ZXMubWFwKGE9PihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVxdWVzdF9jYXJkJz5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nc3RhdHVzICc+e2EudGl0bGV9PC9wPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmRfaW5mbyc+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc3BoZXJlJz7QodGE0LXRgNCwOiB7YS5zcGhlcmV9PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2Rlc2NyaXB0aW9uJz7QntC/0LjRgdCw0L3QuNC1OiB7YS5kZXNjcmlwdGlvbn08L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcblxyXG5jb25zdCBOb3RGaW5pc2hlZCA9ICh7bm90RmluaXNoZWR9KSA9PiB7XHJcbiAgY29uc3Qgb25Db250aW51ZSA9IChldmVudCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LmRhdGFzZXQuc3RlcClcclxuICAgIC8vIFJvdXRlci5wdXNoKHtwYXRobmFtZTogJy9jYWJpbmV0L2NvbnRpbnVlJywgcXVlcnk6IHtcclxuICAgIC8vICAgc3RlcDogZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXN0ZXAnKSxcclxuICAgIC8vICAgaWQ6IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpXHJcbiAgICAvLyB9fSlcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdyZXF1ZXN0X2xpc3QnPlxyXG4gICAgICB7bm90RmluaXNoZWQubWFwKHggPT4gKFxyXG4gICAgICAgIDxkaXYgZGF0YS1pZD17eC5pZH0gZGF0YS1zdGVwPXt4LnN0ZXB9IGNsYXNzTmFtZT0ncmVxdWVzdF9jYXJkJz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdzdGF0dXMgc3RhdHVzX2luZm8nPlxyXG4gICAgICAgICAgICAgIHt4LmxlYWR9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjYXBpdGFsaXplJz7QpNCY0J46IHt4LmZpb308L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPtCi0LXQu9C10YTQvtC9INC90L7QvNC10YA6ICt7eC5waG9uZX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZGV0YWlsZWRidG4nIG9uQ2xpY2s9e2U9PiBvbkNvbnRpbnVlKGUpfT7Qn9GA0L7QtNC+0LvQttC40YLRjCDQsNC90LrQtdGC0YMg4q6ePC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgQ2FiaW5ldFJlcXVlc3RzID0gKHtzZXRBY3RpdmUsaXNBY3RpdmUsIGFjdGl2ZXMsIG5vdEZpbmlzaGVkfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIGNhYmluZXRfX3JlcXVlc3RzJz5cclxuICAgICAgPHAgY2xhc3NOYW1lPSdoZWFkZXInPtCc0L7QuCDQt9Cw0Y/QstC60Lg8L3A+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVxdWVzdF9ibG9jayc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlcXVlc3Rfb3B0aW9uJz5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17aXNBY3RpdmUgJiYgJ2FjdGl2ZSd9IG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZSh0cnVlKX0+0JDQutGC0LjQstC90YvQtTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17IWlzQWN0aXZlICYmICdhY3RpdmUnfSBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmUoZmFsc2UpfT7QndC10LTQvtC30LDQv9C+0LvQvdC10L3QvdGL0LU8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge2lzQWN0aXZlID8gPEFjdGl2ZXMgYWN0aXZlcz17YWN0aXZlc30gLz4gOiA8Tm90RmluaXNoZWQgbm90RmluaXNoZWQ9e25vdEZpbmlzaGVkfS8+fVxyXG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0ncmVxdWVzdF9saXN0Jz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZXF1ZXN0X2NhcmQnPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J3N0YXR1cyc+0JIg0L7QsdGA0LDQsdC+0YLQutC1PC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZF9pbmZvJz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NwaGVyZSc+0KHRhNC10YDQsDrQodC10LzQtdC50L3Ri9C1INGB0L/QvtGA0Ys8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdkZXNjcmlwdGlvbic+0J7Qv9C40YHQsNC90LjQtTpMb3JlbSBsb3JlbSBsb3JlbSBsb3JlbSBsb3JlbTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3ByaWNlJz7QodGC0L7QuNC80L7RgdGC0Ywg0YPRgdC70YPQs9C4OiAxMDAwMDAg0YLQsyA8c3Bhbj4yMDAwMDDRgtCzPC9zcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2RldGFpbGVkYnRuJz7QlNC10YLQsNC70Lgg0LfQsNGP0LLQutC4IOKunjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZXF1ZXN0X2NhcmQnPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J3N0YXR1cyc+0JIg0L7QsdGA0LDQsdC+0YLQutC1PC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZF9pbmZvJz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NwaGVyZSc+0KHRhNC10YDQsDrQodC10LzQtdC50L3Ri9C1INGB0L/QvtGA0Ys8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdkZXNjcmlwdGlvbic+0J7Qv9C40YHQsNC90LjQtTpMb3JlbSBsb3JlbSBsb3JlbSBsb3JlbSBsb3JlbTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3ByaWNlJz7QodGC0L7QuNC80L7RgdGC0Ywg0YPRgdC70YPQs9C4OiAxMDAwMDAg0YLQsyA8c3Bhbj4yMDAwMDDRgtCzPC9zcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2RldGFpbGVkYnRuJz7QlNC10YLQsNC70Lgg0LfQsNGP0LLQutC4IOKunjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IENhYmluZXRSZXF1ZXN0cyIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IENhYmluZXROYXYgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY2FiaW5ldC9DYWJpbmV0TmF2XCJcclxuaW1wb3J0IENhYmluZXRSZXF1ZXN0cyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jYWJpbmV0L0NhYmluZXRSZXF1ZXN0c1wiXHJcbmltcG9ydCBOYXYgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2hhcmVkL05hdlwiXHJcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJ1xyXG5pbXBvcnQgeyBmaWx0ZXJCeVBhcmFtIH0gZnJvbSBcIi4uLy4uL2RlZmF1bHRzL2V4dHJhRnVuY3Rpb25cIlxyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbG9hZGVyL0xvYWRlcidcclxuY29uc3QgUmVxdWVzdHMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2lzQWN0aXZlLHNldEFjdGl2ZV0gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gIGNvbnN0IFthbGxSZXF1ZXN0LHNldEFsbF0gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbYWN0aXZlcyxzZXRBY3RpdmVzXSA9IHVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFtub3RGaW5pc2hlZCxzZXROb3RGaW5pc2hlZF0gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbbG9hZGluZyxzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICBheGlvcy5wb3N0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9nZXRVc2VyRGF0YURlYWxgLCB7dG9rZW46IGNvb2tpZS5nZXQoJ3Rva2VuJyl9KVxyXG4gICAgICAudGhlbihyZXM9PiB7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMuZGF0YSlcclxuICAgICAgICBzZXRBbGwocmVzLmRhdGEpXHJcbiAgICAgICAgc2V0QWN0aXZlcyhmaWx0ZXJCeVBhcmFtKHJlcy5kYXRhLCB7dHlwZTogJ2RlYWwnfSkpXHJcbiAgICAgICAgc2V0Tm90RmluaXNoZWQoZmlsdGVyQnlQYXJhbShyZXMuZGF0YSwge3R5cGU6ICdsZWFkJ30pKVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyPT4ge1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICB9KVxyXG5cclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2NhYmluZXQnPlxyXG4gICAgICA8TmF2IC8+XHJcbiAgICAgIHtsb2FkaW5nICYmIDxMb2FkZXIgLz59XHJcbiAgICAgIDxDYWJpbmV0UmVxdWVzdHMgaXNBY3RpdmU9e2lzQWN0aXZlfSBzZXRBY3RpdmU9e3NldEFjdGl2ZX0gYWN0aXZlcz17YWN0aXZlc30gbm90RmluaXNoZWQ9e25vdEZpbmlzaGVkfS8+XHJcbiAgICAgIDxDYWJpbmV0TmF2IC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RzIl0sInNvdXJjZVJvb3QiOiIifQ==