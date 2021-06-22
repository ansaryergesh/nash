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
      console.log(res.data);
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
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    setLoading(true);
    getUserDeal();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "cabinet",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Nav__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, _this), loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_loader_Loader__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 19
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cabinet_CabinetRequests__WEBPACK_IMPORTED_MODULE_4__.default, {
      isActive: isActive,
      setActive: setActive,
      actives: actives,
      notFinished: notFinished,
      setLoading: setLoading
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cabinet_CabinetNav__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FiaW5ldC9yZXF1ZXN0cy5qcyJdLCJuYW1lcyI6WyJSZXF1ZXN0cyIsInVzZVN0YXRlIiwiaXNBY3RpdmUiLCJzZXRBY3RpdmUiLCJhbGxSZXF1ZXN0Iiwic2V0QWxsIiwiYWN0aXZlcyIsInNldEFjdGl2ZXMiLCJub3RGaW5pc2hlZCIsInNldE5vdEZpbmlzaGVkIiwibG9hZGluZyIsInNldExvYWRpbmciLCJnZXRVc2VyRGVhbCIsImNvbnNvbGUiLCJsb2ciLCJheGlvcyIsInByb2Nlc3MiLCJ0b2tlbiIsImNvb2tpZSIsInRoZW4iLCJyZXMiLCJkYXRhIiwiZmlsdGVyQnlQYXJhbSIsInR5cGUiLCJlcnIiLCJ1c2VFZmZlY3QiLCJ3aXRoQXV0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQUEsa0JBQ1FDLCtDQUFRLENBQUMsSUFBRCxDQURoQjtBQUFBLE1BQ2RDLFFBRGM7QUFBQSxNQUNMQyxTQURLOztBQUFBLG1CQUVPRiwrQ0FBUSxDQUFDLEVBQUQsQ0FGZjtBQUFBLE1BRWRHLFVBRmM7QUFBQSxNQUVIQyxNQUZHOztBQUFBLG1CQUdRSiwrQ0FBUSxDQUFDLEVBQUQsQ0FIaEI7QUFBQSxNQUdkSyxPQUhjO0FBQUEsTUFHTkMsVUFITTs7QUFBQSxtQkFJZ0JOLCtDQUFRLENBQUMsRUFBRCxDQUp4QjtBQUFBLE1BSWRPLFdBSmM7QUFBQSxNQUlGQyxjQUpFOztBQUFBLG1CQUtRUiwrQ0FBUSxDQUFDLEtBQUQsQ0FMaEI7QUFBQSxNQUtkUyxPQUxjO0FBQUEsTUFLTkMsVUFMTTs7QUFNckIsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QkMsV0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWjtBQUNBQyxxREFBQSxXQUFjQyx5QkFBZCx1QkFBc0Q7QUFBQ0MsV0FBSyxFQUFFQyxvREFBQSxDQUFXLE9BQVg7QUFBUixLQUF0RCxFQUNHQyxJQURILENBQ1EsVUFBQUMsR0FBRyxFQUFHO0FBQ1ZULGdCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0FFLGFBQU8sQ0FBQ0MsR0FBUixDQUFZTSxHQUFHLENBQUNDLElBQWhCO0FBQ0FoQixZQUFNLENBQUNlLEdBQUcsQ0FBQ0MsSUFBTCxDQUFOO0FBQ0FkLGdCQUFVLENBQUNlLHNFQUFhLENBQUNGLEdBQUcsQ0FBQ0MsSUFBTCxFQUFXO0FBQUNFLFlBQUksRUFBRTtBQUFQLE9BQVgsQ0FBZCxDQUFWO0FBQ0FkLG9CQUFjLENBQUNhLHNFQUFhLENBQUNGLEdBQUcsQ0FBQ0MsSUFBTCxFQUFXO0FBQUNFLFlBQUksRUFBRTtBQUFQLE9BQVgsQ0FBZCxDQUFkO0FBQ0QsS0FQSCxXQVFTLFVBQUFDLEdBQUcsRUFBRztBQUNYYixnQkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNBRSxhQUFPLENBQUNDLEdBQVIsQ0FBWVUsR0FBWjtBQUNELEtBWEg7QUFZRCxHQWREOztBQWVBQyxrREFBUyxDQUFDLFlBQU07QUFDZGQsY0FBVSxDQUFDLElBQUQsQ0FBVjtBQUNBQyxlQUFXO0FBQ1osR0FIUSxFQUdOLEVBSE0sQ0FBVDtBQUtBLHNCQUNFO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBQSw0QkFDRSw4REFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFFR0YsT0FBTyxpQkFBSSw4REFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRmQsZUFHRSw4REFBQyx3RUFBRDtBQUFpQixjQUFRLEVBQUVSLFFBQTNCO0FBQXFDLGVBQVMsRUFBRUMsU0FBaEQ7QUFBMkQsYUFBTyxFQUFFRyxPQUFwRTtBQUE2RSxpQkFBVyxFQUFFRSxXQUExRjtBQUF1RyxnQkFBVSxFQUFFRztBQUFuSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEYsZUFJRSw4REFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFRRCxDQWxDRDs7R0FBTVgsUTs7S0FBQUEsUTtBQW9DTiwrREFBZSxNQUFBMEIsdURBQVEsQ0FBQzFCLFFBQUQsQ0FBdkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FiaW5ldC9yZXF1ZXN0cy41YTIxY2M1YWZkOGZhZTE4ZjRhOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgQ2FiaW5ldE5hdiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jYWJpbmV0L0NhYmluZXROYXZcIlxyXG5pbXBvcnQgQ2FiaW5ldFJlcXVlc3RzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NhYmluZXQvQ2FiaW5ldFJlcXVlc3RzXCJcclxuaW1wb3J0IE5hdiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zaGFyZWQvTmF2XCJcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnXHJcbmltcG9ydCB7IGZpbHRlckJ5UGFyYW0gfSBmcm9tIFwiLi4vLi4vZGVmYXVsdHMvZXh0cmFGdW5jdGlvblwiXHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sb2FkZXIvTG9hZGVyJ1xyXG5pbXBvcnQgd2l0aEF1dGggZnJvbSBcIi4uLy4uL2hvY3Mvd2l0aEF1dGhcIlxyXG5jb25zdCBSZXF1ZXN0cyA9ICgpID0+IHtcclxuICBjb25zdCBbaXNBY3RpdmUsc2V0QWN0aXZlXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgY29uc3QgW2FsbFJlcXVlc3Qsc2V0QWxsXSA9IHVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFthY3RpdmVzLHNldEFjdGl2ZXNdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW25vdEZpbmlzaGVkLHNldE5vdEZpbmlzaGVkXSA9IHVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFtsb2FkaW5nLHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgZ2V0VXNlckRlYWwgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnZ2V0dXNlcmRlYWwnKVxyXG4gICAgYXhpb3MucG9zdChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vZ2V0VXNlckRhdGFEZWFsYCwge3Rva2VuOiBjb29raWUuZ2V0KCd0b2tlbicpfSlcclxuICAgICAgLnRoZW4ocmVzPT4ge1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpXHJcbiAgICAgICAgc2V0QWxsKHJlcy5kYXRhKVxyXG4gICAgICAgIHNldEFjdGl2ZXMoZmlsdGVyQnlQYXJhbShyZXMuZGF0YSwge3R5cGU6ICdkZWFsJ30pKVxyXG4gICAgICAgIHNldE5vdEZpbmlzaGVkKGZpbHRlckJ5UGFyYW0ocmVzLmRhdGEsIHt0eXBlOiAnbGVhZCd9KSlcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycj0+IHtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgfSlcclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgIGdldFVzZXJEZWFsKClcclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2NhYmluZXQnPlxyXG4gICAgICA8TmF2IC8+XHJcbiAgICAgIHtsb2FkaW5nICYmIDxMb2FkZXIgLz59XHJcbiAgICAgIDxDYWJpbmV0UmVxdWVzdHMgaXNBY3RpdmU9e2lzQWN0aXZlfSBzZXRBY3RpdmU9e3NldEFjdGl2ZX0gYWN0aXZlcz17YWN0aXZlc30gbm90RmluaXNoZWQ9e25vdEZpbmlzaGVkfSBzZXRMb2FkaW5nPXtzZXRMb2FkaW5nfSAvPlxyXG4gICAgICA8Q2FiaW5ldE5hdiAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXV0aChSZXF1ZXN0cykiXSwic291cmNlUm9vdCI6IiJ9