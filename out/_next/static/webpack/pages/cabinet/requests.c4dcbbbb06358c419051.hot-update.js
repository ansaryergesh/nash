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
/* harmony import */ var _components_loader_Loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/loader/Loader */ "./components/loader/Loader.js");
/* harmony import */ var _hocs_withAuth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hocs/withAuth */ "./hocs/withAuth.js");
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

  var getUserDeal = function getUserDeal() {
    console.log('getuserdeal');
    axios__WEBPACK_IMPORTED_MODULE_1___default().post("".concat("https://crediter.kz/api", "/getUserDataDeal"), {
      token: js_cookie__WEBPACK_IMPORTED_MODULE_6___default().get('token')
    }).then(function (res) {
      setLoading(false);
      setAll(res.data);
      setActives((0,_defaults_extraFunction__WEBPACK_IMPORTED_MODULE_7__.filterByParam)(res.data, {
        type: 'deal'
      }));
      setNotFinished((0,_defaults_extraFunction__WEBPACK_IMPORTED_MODULE_7__.filterByParam)(res.data, {
        type: 'lead'
      }));
    })["catch"](function (err) {
      setLoading(false);
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    setLoading(true);
    getUserDeal();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "cabinet",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Nav__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, _this), loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_loader_Loader__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 19
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cabinet_CabinetRequests__WEBPACK_IMPORTED_MODULE_4__.default, {
      isActive: isActive,
      setActive: setActive,
      actives: actives,
      notFinished: notFinished,
      setLoading: setLoading
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cabinet_CabinetNav__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }, _this);
};

_s(Requests, "0zzFLFvWnn7QV+LH1hTdNzOvxsE=");

_c = Requests;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = (0,_hocs_withAuth__WEBPACK_IMPORTED_MODULE_9__.default)(Requests));

var _c, _c2;

$RefreshReg$(_c, "Requests");
$RefreshReg$(_c2, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FiaW5ldC9yZXF1ZXN0cy5qcyJdLCJuYW1lcyI6WyJSZXF1ZXN0cyIsInVzZVN0YXRlIiwiaXNBY3RpdmUiLCJzZXRBY3RpdmUiLCJhbGxSZXF1ZXN0Iiwic2V0QWxsIiwiYWN0aXZlcyIsInNldEFjdGl2ZXMiLCJub3RGaW5pc2hlZCIsInNldE5vdEZpbmlzaGVkIiwibG9hZGluZyIsInNldExvYWRpbmciLCJnZXRVc2VyRGVhbCIsImNvbnNvbGUiLCJsb2ciLCJheGlvcyIsInByb2Nlc3MiLCJ0b2tlbiIsImNvb2tpZSIsInRoZW4iLCJyZXMiLCJkYXRhIiwiZmlsdGVyQnlQYXJhbSIsInR5cGUiLCJlcnIiLCJ1c2VFZmZlY3QiLCJ3aXRoQXV0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQUEsa0JBQ1FDLCtDQUFRLENBQUMsSUFBRCxDQURoQjtBQUFBLE1BQ2RDLFFBRGM7QUFBQSxNQUNMQyxTQURLOztBQUFBLG1CQUVPRiwrQ0FBUSxDQUFDLEVBQUQsQ0FGZjtBQUFBLE1BRWRHLFVBRmM7QUFBQSxNQUVIQyxNQUZHOztBQUFBLG1CQUdRSiwrQ0FBUSxDQUFDLEVBQUQsQ0FIaEI7QUFBQSxNQUdkSyxPQUhjO0FBQUEsTUFHTkMsVUFITTs7QUFBQSxtQkFJZ0JOLCtDQUFRLENBQUMsRUFBRCxDQUp4QjtBQUFBLE1BSWRPLFdBSmM7QUFBQSxNQUlGQyxjQUpFOztBQUFBLG1CQUtRUiwrQ0FBUSxDQUFDLEtBQUQsQ0FMaEI7QUFBQSxNQUtkUyxPQUxjO0FBQUEsTUFLTkMsVUFMTTs7QUFNckIsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QkMsV0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWjtBQUNBQyxxREFBQSxXQUFjQyx5QkFBZCx1QkFBc0Q7QUFBQ0MsV0FBSyxFQUFFQyxvREFBQSxDQUFXLE9BQVg7QUFBUixLQUF0RCxFQUNHQyxJQURILENBQ1EsVUFBQUMsR0FBRyxFQUFHO0FBQ1ZULGdCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0FOLFlBQU0sQ0FBQ2UsR0FBRyxDQUFDQyxJQUFMLENBQU47QUFDQWQsZ0JBQVUsQ0FBQ2Usc0VBQWEsQ0FBQ0YsR0FBRyxDQUFDQyxJQUFMLEVBQVc7QUFBQ0UsWUFBSSxFQUFFO0FBQVAsT0FBWCxDQUFkLENBQVY7QUFDQWQsb0JBQWMsQ0FBQ2Esc0VBQWEsQ0FBQ0YsR0FBRyxDQUFDQyxJQUFMLEVBQVc7QUFBQ0UsWUFBSSxFQUFFO0FBQVAsT0FBWCxDQUFkLENBQWQ7QUFDRCxLQU5ILFdBT1MsVUFBQUMsR0FBRyxFQUFHO0FBQ1hiLGdCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0QsS0FUSDtBQVVELEdBWkQ7O0FBYUFjLGtEQUFTLENBQUMsWUFBTTtBQUNkZCxjQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0FDLGVBQVc7QUFDWixHQUhRLEVBR04sRUFITSxDQUFUO0FBS0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUFBLDRCQUNFLDhEQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUVHRixPQUFPLGlCQUFJLDhEQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGZCxlQUdFLDhEQUFDLHdFQUFEO0FBQWlCLGNBQVEsRUFBRVIsUUFBM0I7QUFBcUMsZUFBUyxFQUFFQyxTQUFoRDtBQUEyRCxhQUFPLEVBQUVHLE9BQXBFO0FBQTZFLGlCQUFXLEVBQUVFLFdBQTFGO0FBQXVHLGdCQUFVLEVBQUVHO0FBQW5IO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRixlQUlFLDhEQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVFELENBaENEOztHQUFNWCxROztLQUFBQSxRO0FBa0NOLCtEQUFlLE1BQUEwQix1REFBUSxDQUFDMUIsUUFBRCxDQUF2QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYWJpbmV0L3JlcXVlc3RzLmM0ZGNiYmJiMDYzNThjNDE5MDUxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBDYWJpbmV0TmF2IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NhYmluZXQvQ2FiaW5ldE5hdlwiXHJcbmltcG9ydCBDYWJpbmV0UmVxdWVzdHMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY2FiaW5ldC9DYWJpbmV0UmVxdWVzdHNcIlxyXG5pbXBvcnQgTmF2IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3NoYXJlZC9OYXZcIlxyXG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSdcclxuaW1wb3J0IHsgZmlsdGVyQnlQYXJhbSB9IGZyb20gXCIuLi8uLi9kZWZhdWx0cy9leHRyYUZ1bmN0aW9uXCJcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xvYWRlci9Mb2FkZXInXHJcbmltcG9ydCB3aXRoQXV0aCBmcm9tIFwiLi4vLi4vaG9jcy93aXRoQXV0aFwiXHJcbmNvbnN0IFJlcXVlc3RzID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtpc0FjdGl2ZSxzZXRBY3RpdmVdID0gdXNlU3RhdGUodHJ1ZSlcclxuICBjb25zdCBbYWxsUmVxdWVzdCxzZXRBbGxdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW2FjdGl2ZXMsc2V0QWN0aXZlc10gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbbm90RmluaXNoZWQsc2V0Tm90RmluaXNoZWRdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW2xvYWRpbmcsc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBnZXRVc2VyRGVhbCA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdnZXR1c2VyZGVhbCcpXHJcbiAgICBheGlvcy5wb3N0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9nZXRVc2VyRGF0YURlYWxgLCB7dG9rZW46IGNvb2tpZS5nZXQoJ3Rva2VuJyl9KVxyXG4gICAgICAudGhlbihyZXM9PiB7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICBzZXRBbGwocmVzLmRhdGEpXHJcbiAgICAgICAgc2V0QWN0aXZlcyhmaWx0ZXJCeVBhcmFtKHJlcy5kYXRhLCB7dHlwZTogJ2RlYWwnfSkpXHJcbiAgICAgICAgc2V0Tm90RmluaXNoZWQoZmlsdGVyQnlQYXJhbShyZXMuZGF0YSwge3R5cGU6ICdsZWFkJ30pKVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyPT4ge1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgIH0pXHJcbiAgfVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICBnZXRVc2VyRGVhbCgpXHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybihcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdjYWJpbmV0Jz5cclxuICAgICAgPE5hdiAvPlxyXG4gICAgICB7bG9hZGluZyAmJiA8TG9hZGVyIC8+fVxyXG4gICAgICA8Q2FiaW5ldFJlcXVlc3RzIGlzQWN0aXZlPXtpc0FjdGl2ZX0gc2V0QWN0aXZlPXtzZXRBY3RpdmV9IGFjdGl2ZXM9e2FjdGl2ZXN9IG5vdEZpbmlzaGVkPXtub3RGaW5pc2hlZH0gc2V0TG9hZGluZz17c2V0TG9hZGluZ30gLz5cclxuICAgICAgPENhYmluZXROYXYgLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGgoUmVxdWVzdHMpIl0sInNvdXJjZVJvb3QiOiIifQ==