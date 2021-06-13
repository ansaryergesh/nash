self["webpackHotUpdate_N_E"]("pages/cabinet/requests",{

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

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    axios__WEBPACK_IMPORTED_MODULE_1___default().post("".concat("https://crediter.kz/api", "/getUserDataDeal"), {
      token: js_cookie__WEBPACK_IMPORTED_MODULE_6___default().get('token')
    }).then(function (res) {
      console.log(res.dara);
      setAll(res.data);
    })["catch"](function (err) {
      console.log(err);
    });
    var active = (0,_defaults_extraFunction__WEBPACK_IMPORTED_MODULE_7__.filterByParam)(allRequest, {
      type: 'deal'
    });
    var nonActive = (0,_defaults_extraFunction__WEBPACK_IMPORTED_MODULE_7__.filterByParam)(allRequest, {
      type: 'lead'
    });
    setActives(active);
    setNotFinished(nonActive);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "cabinet",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Nav__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cabinet_CabinetRequests__WEBPACK_IMPORTED_MODULE_4__.default, {
      isActive: isActive,
      setActive: setActive,
      actives: actives,
      notFinished: notFinished
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cabinet_CabinetNav__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, _this);
};

_s(Requests, "glEDc0dQUDDODoK0ptMYsriaFXA=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FiaW5ldC9yZXF1ZXN0cy5qcyJdLCJuYW1lcyI6WyJSZXF1ZXN0cyIsInVzZVN0YXRlIiwiaXNBY3RpdmUiLCJzZXRBY3RpdmUiLCJhbGxSZXF1ZXN0Iiwic2V0QWxsIiwiYWN0aXZlcyIsInNldEFjdGl2ZXMiLCJub3RGaW5pc2hlZCIsInNldE5vdEZpbmlzaGVkIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJwcm9jZXNzIiwidG9rZW4iLCJjb29raWUiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImRhcmEiLCJkYXRhIiwiZXJyIiwiYWN0aXZlIiwiZmlsdGVyQnlQYXJhbSIsInR5cGUiLCJub25BY3RpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUFBLGtCQUNRQywrQ0FBUSxDQUFDLElBQUQsQ0FEaEI7QUFBQSxNQUNkQyxRQURjO0FBQUEsTUFDTEMsU0FESzs7QUFBQSxtQkFFT0YsK0NBQVEsQ0FBQyxFQUFELENBRmY7QUFBQSxNQUVkRyxVQUZjO0FBQUEsTUFFSEMsTUFGRzs7QUFBQSxtQkFHUUosK0NBQVEsQ0FBQyxFQUFELENBSGhCO0FBQUEsTUFHZEssT0FIYztBQUFBLE1BR05DLFVBSE07O0FBQUEsbUJBSWdCTiwrQ0FBUSxDQUFDLEVBQUQsQ0FKeEI7QUFBQSxNQUlkTyxXQUpjO0FBQUEsTUFJRkMsY0FKRTs7QUFNckJDLGtEQUFTLENBQUMsWUFBTTtBQUNkQyxxREFBQSxXQUFjQyx5QkFBZCx1QkFBc0Q7QUFBQ0MsV0FBSyxFQUFFQyxvREFBQSxDQUFXLE9BQVg7QUFBUixLQUF0RCxFQUNHQyxJQURILENBQ1EsVUFBQUMsR0FBRyxFQUFHO0FBQ1ZDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFHLENBQUNHLElBQWhCO0FBQ0FkLFlBQU0sQ0FBQ1csR0FBRyxDQUFDSSxJQUFMLENBQU47QUFDRCxLQUpILFdBS1MsVUFBQUMsR0FBRyxFQUFHO0FBQ1hKLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRyxHQUFaO0FBQ0QsS0FQSDtBQVNBLFFBQU1DLE1BQU0sR0FBR0Msc0VBQWEsQ0FBQ25CLFVBQUQsRUFBYTtBQUFDb0IsVUFBSSxFQUFFO0FBQVAsS0FBYixDQUE1QjtBQUNBLFFBQU1DLFNBQVMsR0FBR0Ysc0VBQWEsQ0FBQ25CLFVBQUQsRUFBYTtBQUFDb0IsVUFBSSxFQUFFO0FBQVAsS0FBYixDQUEvQjtBQUVBakIsY0FBVSxDQUFDZSxNQUFELENBQVY7QUFDQWIsa0JBQWMsQ0FBQ2dCLFNBQUQsQ0FBZDtBQUNELEdBZlEsRUFlTixFQWZNLENBQVQ7QUFpQkEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUFBLDRCQUNFLDhEQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLDhEQUFDLHdFQUFEO0FBQWlCLGNBQVEsRUFBRXZCLFFBQTNCO0FBQXFDLGVBQVMsRUFBRUMsU0FBaEQ7QUFBMkQsYUFBTyxFQUFFRyxPQUFwRTtBQUE2RSxpQkFBVyxFQUFFRTtBQUExRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFHRSw4REFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFPRCxDQTlCRDs7R0FBTVIsUTs7S0FBQUEsUTtBQWdDTiwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYWJpbmV0L3JlcXVlc3RzLmY5MmQ4ZDg3MzFkOWZhOWU4YmVlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBDYWJpbmV0TmF2IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NhYmluZXQvQ2FiaW5ldE5hdlwiXHJcbmltcG9ydCBDYWJpbmV0UmVxdWVzdHMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY2FiaW5ldC9DYWJpbmV0UmVxdWVzdHNcIlxyXG5pbXBvcnQgTmF2IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NoYXJlZC9OYXZcIlxyXG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSdcclxuaW1wb3J0IHsgZmlsdGVyQnlQYXJhbSB9IGZyb20gXCIuLi8uLi9kZWZhdWx0cy9leHRyYUZ1bmN0aW9uXCJcclxuY29uc3QgUmVxdWVzdHMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2lzQWN0aXZlLHNldEFjdGl2ZV0gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gIGNvbnN0IFthbGxSZXF1ZXN0LHNldEFsbF0gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbYWN0aXZlcyxzZXRBY3RpdmVzXSA9IHVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFtub3RGaW5pc2hlZCxzZXROb3RGaW5pc2hlZF0gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGF4aW9zLnBvc3QoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L2dldFVzZXJEYXRhRGVhbGAsIHt0b2tlbjogY29va2llLmdldCgndG9rZW4nKX0pXHJcbiAgICAgIC50aGVuKHJlcz0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGFyYSlcclxuICAgICAgICBzZXRBbGwocmVzLmRhdGEpXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnI9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICB9KVxyXG5cclxuICAgIGNvbnN0IGFjdGl2ZSA9IGZpbHRlckJ5UGFyYW0oYWxsUmVxdWVzdCwge3R5cGU6ICdkZWFsJ30pXHJcbiAgICBjb25zdCBub25BY3RpdmUgPSBmaWx0ZXJCeVBhcmFtKGFsbFJlcXVlc3QsIHt0eXBlOiAnbGVhZCd9KVxyXG4gICAgXHJcbiAgICBzZXRBY3RpdmVzKGFjdGl2ZSlcclxuICAgIHNldE5vdEZpbmlzaGVkKG5vbkFjdGl2ZSlcclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2NhYmluZXQnPlxyXG4gICAgICA8TmF2IC8+XHJcbiAgICAgIDxDYWJpbmV0UmVxdWVzdHMgaXNBY3RpdmU9e2lzQWN0aXZlfSBzZXRBY3RpdmU9e3NldEFjdGl2ZX0gYWN0aXZlcz17YWN0aXZlc30gbm90RmluaXNoZWQ9e25vdEZpbmlzaGVkfS8+XHJcbiAgICAgIDxDYWJpbmV0TmF2IC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RzIl0sInNvdXJjZVJvb3QiOiIifQ==