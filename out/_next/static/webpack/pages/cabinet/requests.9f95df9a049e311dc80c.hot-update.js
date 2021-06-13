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
      console.log(res.data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FiaW5ldC9yZXF1ZXN0cy5qcyJdLCJuYW1lcyI6WyJSZXF1ZXN0cyIsInVzZVN0YXRlIiwiaXNBY3RpdmUiLCJzZXRBY3RpdmUiLCJhbGxSZXF1ZXN0Iiwic2V0QWxsIiwiYWN0aXZlcyIsInNldEFjdGl2ZXMiLCJub3RGaW5pc2hlZCIsInNldE5vdEZpbmlzaGVkIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJwcm9jZXNzIiwidG9rZW4iLCJjb29raWUiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJlcnIiLCJhY3RpdmUiLCJmaWx0ZXJCeVBhcmFtIiwidHlwZSIsIm5vbkFjdGl2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQUEsa0JBQ1FDLCtDQUFRLENBQUMsSUFBRCxDQURoQjtBQUFBLE1BQ2RDLFFBRGM7QUFBQSxNQUNMQyxTQURLOztBQUFBLG1CQUVPRiwrQ0FBUSxDQUFDLEVBQUQsQ0FGZjtBQUFBLE1BRWRHLFVBRmM7QUFBQSxNQUVIQyxNQUZHOztBQUFBLG1CQUdRSiwrQ0FBUSxDQUFDLEVBQUQsQ0FIaEI7QUFBQSxNQUdkSyxPQUhjO0FBQUEsTUFHTkMsVUFITTs7QUFBQSxtQkFJZ0JOLCtDQUFRLENBQUMsRUFBRCxDQUp4QjtBQUFBLE1BSWRPLFdBSmM7QUFBQSxNQUlGQyxjQUpFOztBQU1yQkMsa0RBQVMsQ0FBQyxZQUFNO0FBQ2RDLHFEQUFBLFdBQWNDLHlCQUFkLHVCQUFzRDtBQUFDQyxXQUFLLEVBQUVDLG9EQUFBLENBQVcsT0FBWDtBQUFSLEtBQXRELEVBQ0dDLElBREgsQ0FDUSxVQUFBQyxHQUFHLEVBQUc7QUFDVkMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLEdBQUcsQ0FBQ0csSUFBaEI7QUFDQWQsWUFBTSxDQUFDVyxHQUFHLENBQUNHLElBQUwsQ0FBTjtBQUNELEtBSkgsV0FLUyxVQUFBQyxHQUFHLEVBQUc7QUFDWEgsYUFBTyxDQUFDQyxHQUFSLENBQVlFLEdBQVo7QUFDRCxLQVBIO0FBU0EsUUFBTUMsTUFBTSxHQUFHQyxzRUFBYSxDQUFDbEIsVUFBRCxFQUFhO0FBQUNtQixVQUFJLEVBQUU7QUFBUCxLQUFiLENBQTVCO0FBQ0EsUUFBTUMsU0FBUyxHQUFHRixzRUFBYSxDQUFDbEIsVUFBRCxFQUFhO0FBQUNtQixVQUFJLEVBQUU7QUFBUCxLQUFiLENBQS9CO0FBRUFoQixjQUFVLENBQUNjLE1BQUQsQ0FBVjtBQUNBWixrQkFBYyxDQUFDZSxTQUFELENBQWQ7QUFDRCxHQWZRLEVBZU4sRUFmTSxDQUFUO0FBaUJBLHNCQUNFO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBQSw0QkFDRSw4REFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSw4REFBQyx3RUFBRDtBQUFpQixjQUFRLEVBQUV0QixRQUEzQjtBQUFxQyxlQUFTLEVBQUVDLFNBQWhEO0FBQTJELGFBQU8sRUFBRUcsT0FBcEU7QUFBNkUsaUJBQVcsRUFBRUU7QUFBMUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBR0UsOERBQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBT0QsQ0E5QkQ7O0dBQU1SLFE7O0tBQUFBLFE7QUFnQ04sK0RBQWVBLFFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FiaW5ldC9yZXF1ZXN0cy45Zjk1ZGY5YTA0OWUzMTFkYzgwYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgQ2FiaW5ldE5hdiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jYWJpbmV0L0NhYmluZXROYXZcIlxyXG5pbXBvcnQgQ2FiaW5ldFJlcXVlc3RzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NhYmluZXQvQ2FiaW5ldFJlcXVlc3RzXCJcclxuaW1wb3J0IE5hdiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zaGFyZWQvTmF2XCJcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnXHJcbmltcG9ydCB7IGZpbHRlckJ5UGFyYW0gfSBmcm9tIFwiLi4vLi4vZGVmYXVsdHMvZXh0cmFGdW5jdGlvblwiXHJcbmNvbnN0IFJlcXVlc3RzID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtpc0FjdGl2ZSxzZXRBY3RpdmVdID0gdXNlU3RhdGUodHJ1ZSlcclxuICBjb25zdCBbYWxsUmVxdWVzdCxzZXRBbGxdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW2FjdGl2ZXMsc2V0QWN0aXZlc10gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbbm90RmluaXNoZWQsc2V0Tm90RmluaXNoZWRdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBheGlvcy5wb3N0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9nZXRVc2VyRGF0YURlYWxgLCB7dG9rZW46IGNvb2tpZS5nZXQoJ3Rva2VuJyl9KVxyXG4gICAgICAudGhlbihyZXM9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpXHJcbiAgICAgICAgc2V0QWxsKHJlcy5kYXRhKVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgfSlcclxuXHJcbiAgICBjb25zdCBhY3RpdmUgPSBmaWx0ZXJCeVBhcmFtKGFsbFJlcXVlc3QsIHt0eXBlOiAnZGVhbCd9KVxyXG4gICAgY29uc3Qgbm9uQWN0aXZlID0gZmlsdGVyQnlQYXJhbShhbGxSZXF1ZXN0LCB7dHlwZTogJ2xlYWQnfSlcclxuICAgIFxyXG4gICAgc2V0QWN0aXZlcyhhY3RpdmUpXHJcbiAgICBzZXROb3RGaW5pc2hlZChub25BY3RpdmUpXHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybihcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdjYWJpbmV0Jz5cclxuICAgICAgPE5hdiAvPlxyXG4gICAgICA8Q2FiaW5ldFJlcXVlc3RzIGlzQWN0aXZlPXtpc0FjdGl2ZX0gc2V0QWN0aXZlPXtzZXRBY3RpdmV9IGFjdGl2ZXM9e2FjdGl2ZXN9IG5vdEZpbmlzaGVkPXtub3RGaW5pc2hlZH0vPlxyXG4gICAgICA8Q2FiaW5ldE5hdiAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0cyJdLCJzb3VyY2VSb290IjoiIn0=