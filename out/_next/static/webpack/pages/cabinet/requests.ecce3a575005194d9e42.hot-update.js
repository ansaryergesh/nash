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
      deleted = _useState5[0],
      setDeleted = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      loading = _useState6[0],
      setLoading = _useState6[1];

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
    getUserDeal();
  }, [deleted]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    setLoading(true);
    getUserDeal();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "cabinet",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Nav__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, _this), loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_loader_Loader__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 19
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cabinet_CabinetRequests__WEBPACK_IMPORTED_MODULE_4__.default, {
      isActive: isActive,
      setActive: setActive,
      actives: actives,
      notFinished: notFinished,
      setLoading: setLoading
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cabinet_CabinetNav__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 5
  }, _this);
};

_s(Requests, "gM9mqUuV8cZMNdNh3+1Ykt7cTxU=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FiaW5ldC9yZXF1ZXN0cy5qcyJdLCJuYW1lcyI6WyJSZXF1ZXN0cyIsInVzZVN0YXRlIiwiaXNBY3RpdmUiLCJzZXRBY3RpdmUiLCJhbGxSZXF1ZXN0Iiwic2V0QWxsIiwiYWN0aXZlcyIsInNldEFjdGl2ZXMiLCJub3RGaW5pc2hlZCIsInNldE5vdEZpbmlzaGVkIiwiZGVsZXRlZCIsInNldERlbGV0ZWQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImdldFVzZXJEZWFsIiwiY29uc29sZSIsImxvZyIsImF4aW9zIiwicHJvY2VzcyIsInRva2VuIiwiY29va2llIiwidGhlbiIsInJlcyIsImRhdGEiLCJmaWx0ZXJCeVBhcmFtIiwidHlwZSIsImVyciIsInVzZUVmZmVjdCIsIndpdGhBdXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFBQSxrQkFDUUMsK0NBQVEsQ0FBQyxJQUFELENBRGhCO0FBQUEsTUFDZEMsUUFEYztBQUFBLE1BQ0xDLFNBREs7O0FBQUEsbUJBRU9GLCtDQUFRLENBQUMsRUFBRCxDQUZmO0FBQUEsTUFFZEcsVUFGYztBQUFBLE1BRUhDLE1BRkc7O0FBQUEsbUJBR1FKLCtDQUFRLENBQUMsRUFBRCxDQUhoQjtBQUFBLE1BR2RLLE9BSGM7QUFBQSxNQUdOQyxVQUhNOztBQUFBLG1CQUlnQk4sK0NBQVEsQ0FBQyxFQUFELENBSnhCO0FBQUEsTUFJZE8sV0FKYztBQUFBLE1BSUZDLGNBSkU7O0FBQUEsbUJBS1FSLCtDQUFRLENBQUMsS0FBRCxDQUxoQjtBQUFBLE1BS2RTLE9BTGM7QUFBQSxNQUtOQyxVQUxNOztBQUFBLG1CQU1RViwrQ0FBUSxDQUFDLEtBQUQsQ0FOaEI7QUFBQSxNQU1kVyxPQU5jO0FBQUEsTUFNTkMsVUFOTTs7QUFPckIsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QkMsV0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWjtBQUNBQyxxREFBQSxXQUFjQyx5QkFBZCx1QkFBc0Q7QUFBQ0MsV0FBSyxFQUFFQyxvREFBQSxDQUFXLE9BQVg7QUFBUixLQUF0RCxFQUNHQyxJQURILENBQ1EsVUFBQUMsR0FBRyxFQUFHO0FBQ1ZULGdCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0FSLFlBQU0sQ0FBQ2lCLEdBQUcsQ0FBQ0MsSUFBTCxDQUFOO0FBQ0FoQixnQkFBVSxDQUFDaUIsc0VBQWEsQ0FBQ0YsR0FBRyxDQUFDQyxJQUFMLEVBQVc7QUFBQ0UsWUFBSSxFQUFFO0FBQVAsT0FBWCxDQUFkLENBQVY7QUFDQWhCLG9CQUFjLENBQUNlLHNFQUFhLENBQUNGLEdBQUcsQ0FBQ0MsSUFBTCxFQUFXO0FBQUNFLFlBQUksRUFBRTtBQUFQLE9BQVgsQ0FBZCxDQUFkO0FBQ0QsS0FOSCxXQU9TLFVBQUFDLEdBQUcsRUFBRztBQUNYYixnQkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNELEtBVEg7QUFVRCxHQVpEOztBQWNBYyxrREFBUyxDQUFDLFlBQU07QUFDZGIsZUFBVztBQUNaLEdBRlEsRUFFUCxDQUFDSixPQUFELENBRk8sQ0FBVDtBQUlBaUIsa0RBQVMsQ0FBQyxZQUFNO0FBQ2RkLGNBQVUsQ0FBQyxJQUFELENBQVY7QUFDQUMsZUFBVztBQUNaLEdBSFEsRUFHTixFQUhNLENBQVQ7QUFLQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUEsNEJBQ0UsOERBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBRUdGLE9BQU8saUJBQUksOERBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZkLGVBR0UsOERBQUMsd0VBQUQ7QUFBaUIsY0FBUSxFQUFFVixRQUEzQjtBQUFxQyxlQUFTLEVBQUVDLFNBQWhEO0FBQTJELGFBQU8sRUFBRUcsT0FBcEU7QUFBNkUsaUJBQVcsRUFBRUUsV0FBMUY7QUFBdUcsZ0JBQVUsRUFBRUs7QUFBbkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGLGVBSUUsOERBQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBUUQsQ0F0Q0Q7O0dBQU1iLFE7O0tBQUFBLFE7QUF3Q04sK0RBQWUsTUFBQTRCLHVEQUFRLENBQUM1QixRQUFELENBQXZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhYmluZXQvcmVxdWVzdHMuZWNjZTNhNTc1MDA1MTk0ZDllNDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IENhYmluZXROYXYgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY2FiaW5ldC9DYWJpbmV0TmF2XCJcclxuaW1wb3J0IENhYmluZXRSZXF1ZXN0cyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jYWJpbmV0L0NhYmluZXRSZXF1ZXN0c1wiXHJcbmltcG9ydCBOYXYgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc2hhcmVkL05hdlwiXHJcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJ1xyXG5pbXBvcnQgeyBmaWx0ZXJCeVBhcmFtIH0gZnJvbSBcIi4uLy4uL2RlZmF1bHRzL2V4dHJhRnVuY3Rpb25cIlxyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbG9hZGVyL0xvYWRlcidcclxuaW1wb3J0IHdpdGhBdXRoIGZyb20gXCIuLi8uLi9ob2NzL3dpdGhBdXRoXCJcclxuY29uc3QgUmVxdWVzdHMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2lzQWN0aXZlLHNldEFjdGl2ZV0gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gIGNvbnN0IFthbGxSZXF1ZXN0LHNldEFsbF0gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbYWN0aXZlcyxzZXRBY3RpdmVzXSA9IHVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFtub3RGaW5pc2hlZCxzZXROb3RGaW5pc2hlZF0gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbZGVsZXRlZCxzZXREZWxldGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtsb2FkaW5nLHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgZ2V0VXNlckRlYWwgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnZ2V0dXNlcmRlYWwnKVxyXG4gICAgYXhpb3MucG9zdChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vZ2V0VXNlckRhdGFEZWFsYCwge3Rva2VuOiBjb29raWUuZ2V0KCd0b2tlbicpfSlcclxuICAgICAgLnRoZW4ocmVzPT4ge1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgc2V0QWxsKHJlcy5kYXRhKVxyXG4gICAgICAgIHNldEFjdGl2ZXMoZmlsdGVyQnlQYXJhbShyZXMuZGF0YSwge3R5cGU6ICdkZWFsJ30pKVxyXG4gICAgICAgIHNldE5vdEZpbmlzaGVkKGZpbHRlckJ5UGFyYW0ocmVzLmRhdGEsIHt0eXBlOiAnbGVhZCd9KSlcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycj0+IHtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldFVzZXJEZWFsKClcclxuICB9LFtkZWxldGVkXSlcclxuICBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgZ2V0VXNlckRlYWwoKVxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4oXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY2FiaW5ldCc+XHJcbiAgICAgIDxOYXYgLz5cclxuICAgICAge2xvYWRpbmcgJiYgPExvYWRlciAvPn1cclxuICAgICAgPENhYmluZXRSZXF1ZXN0cyBpc0FjdGl2ZT17aXNBY3RpdmV9IHNldEFjdGl2ZT17c2V0QWN0aXZlfSBhY3RpdmVzPXthY3RpdmVzfSBub3RGaW5pc2hlZD17bm90RmluaXNoZWR9IHNldExvYWRpbmc9e3NldExvYWRpbmd9IC8+XHJcbiAgICAgIDxDYWJpbmV0TmF2IC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKFJlcXVlc3RzKSJdLCJzb3VyY2VSb290IjoiIn0=