self["webpackHotUpdate_N_E"]("pages/dlya-fizicheskix-lic",{

/***/ "./components/getservice/SecondStep.js":
/*!*********************************************!*\
  !*** ./components/getservice/SecondStep.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_job_nashcompany_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defaults_fizservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../defaults/fizservice */ "./defaults/fizservice.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var _defaults_listMfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../defaults/listMfo */ "./defaults/listMfo.js");
/* harmony import */ var _shared_CodeModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/CodeModal */ "./components/shared/CodeModal.js");
/* harmony import */ var _shared_MfoModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/MfoModal */ "./components/shared/MfoModal.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "E:\\job\\nashcompany\\components\\getservice\\SecondStep.js",
    _this = undefined,
    _s = $RefreshSig$();









 // import MfoListTable from "./MfoListTable"
// import 'react-select/dist/react-select.css';

var SecondStep = function SecondStep(_ref) {
  _s();

  var setLoading = _ref.setLoading;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
  var pathname = router.pathname; // const {id} = router.query

  var step = router.query.step;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      mfoSelected = _useState[0],
      setMfoSelected = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      mfoDates = _useState2[0],
      setMfoDates = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      modalOpen = _useState3[0],
      setModalOpen = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}),
      currentSelect = _useState4[0],
      setCurrentSelect = _useState4[1];

  var lastChanges = mfoSelected;

  var onChangeSelected = function onChangeSelected(mfoSelected) {
    var difference = lastChanges.filter(function (x) {
      return !mfoSelected.includes(x);
    });
    setMfoSelected(mfoSelected);

    if (mfoSelected.length > 0 && difference.length === 0) {
      setMfoDates([].concat((0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(mfoDates), [{
        id: mfoSelected.length - 1,
        name: mfoSelected[mfoSelected.length - 1].value,
        date: "",
        price: "",
        problem: ""
      }]));
      setModalOpen(true);
    }

    if (difference.length === 1) {
      var lastDates = mfoDates;
      var removeIndex = lastDates.findIndex(function (i) {
        return i.name === difference[0].label;
      });
      lastDates.splice(removeIndex, 1);
      setMfoDates(lastDates);
    }

    if (mfoSelected.length === 0) {
      setMfoDates([]);
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {// console.log(mfoSelected)
  }, [mfoSelected]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    console.log(mfoDates);
  }, [mfoDates]);

  var onSortEnd = function onSortEnd(_ref2) {
    var oldIndex = _ref2.oldIndex,
        newIndex = _ref2.newIndex;
    var newValue = arrayMove(selected, oldIndex, newIndex);
    setMfoSelected(newValue);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "form_register",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "mfo_list",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "\u041A\u043E\u043C\u0443 \u0434\u043E\u043B\u0436\u0435\u043D:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_select__WEBPACK_IMPORTED_MODULE_10__.default, {
            onSortEnd: onSortEnd,
            value: mfoSelected,
            onChange: onChangeSelected,
            isMulti: true,
            name: "mfo",
            options: _defaults_listMfo__WEBPACK_IMPORTED_MODULE_7__.listMfo,
            className: "basic-multi-select",
            classNamePrefix: "select",
            placeholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043E\u0434\u0438\u043D \u0438\u043B\u0438 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u041C\u0424\u041E"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      "class": "table-wrap",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "\u0423\u0441\u043B\u0443\u0433\u0430"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 21
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 21
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "\u0426\u0435\u043D\u0430"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 21
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "\u0421\u043A\u0438\u0434\u043A\u0430"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 21
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 19
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 17
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              "data-label": "\u0423\u0441\u043B\u0443\u0433\u0430",
              children: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u0430\u044F \u0432\u0435\u0440\u0441\u0442\u043A\u0430"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 21
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              "data-label": "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",
              children: "\u0412\u0435\u0440\u0441\u0442\u043A\u0430 \u043F\u043E\u0434 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u044B"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 21
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              "data-label": "\u0426\u0435\u043D\u0430",
              children: "$3000"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 21
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              "data-label": "\u0421\u043A\u0438\u0434\u043A\u0430",
              children: "50%"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 21
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 19
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              "data-label": "\u0423\u0441\u043B\u0443\u0433\u0430",
              children: "\u041F\u043E\u0441\u0430\u0434\u043A\u0430 \u043D\u0430 CMS WordPress"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 21
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              "data-label": "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",
              children: "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0441\u0430\u0439\u0442\u0430 \u0441 \u0430\u0434\u043C\u0438\u043D. \u043F\u0430\u043D\u0435\u043B\u044C\u044E"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 21
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              "data-label": "\u0426\u0435\u043D\u0430",
              children: "$3000"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 21
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              "data-label": "\u0421\u043A\u0438\u0434\u043A\u0430",
              children: "30%"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 21
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 19
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 15
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 5
  }, _this);
};

_s(SecondStep, "DRjQldEbU6bQhFim9QyBkd147+c=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter];
});

_c = SecondStep;
/* harmony default export */ __webpack_exports__["default"] = (SecondStep);

var _c;

$RefreshReg$(_c, "SecondStep");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRzZXJ2aWNlL1NlY29uZFN0ZXAuanMiXSwibmFtZXMiOlsiU2Vjb25kU3RlcCIsInNldExvYWRpbmciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwYXRobmFtZSIsInN0ZXAiLCJxdWVyeSIsInVzZVN0YXRlIiwibWZvU2VsZWN0ZWQiLCJzZXRNZm9TZWxlY3RlZCIsIm1mb0RhdGVzIiwic2V0TWZvRGF0ZXMiLCJtb2RhbE9wZW4iLCJzZXRNb2RhbE9wZW4iLCJjdXJyZW50U2VsZWN0Iiwic2V0Q3VycmVudFNlbGVjdCIsImxhc3RDaGFuZ2VzIiwib25DaGFuZ2VTZWxlY3RlZCIsImRpZmZlcmVuY2UiLCJmaWx0ZXIiLCJ4IiwiaW5jbHVkZXMiLCJsZW5ndGgiLCJpZCIsIm5hbWUiLCJ2YWx1ZSIsImRhdGUiLCJwcmljZSIsInByb2JsZW0iLCJsYXN0RGF0ZXMiLCJyZW1vdmVJbmRleCIsImZpbmRJbmRleCIsImkiLCJsYWJlbCIsInNwbGljZSIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJvblNvcnRFbmQiLCJvbGRJbmRleCIsIm5ld0luZGV4IiwibmV3VmFsdWUiLCJhcnJheU1vdmUiLCJzZWxlY3RlZCIsImxpc3RNZm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7QUFFQTs7QUFDQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFrQjtBQUFBOztBQUFBLE1BQWhCQyxVQUFnQixRQUFoQkEsVUFBZ0I7QUFDbkMsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUNBLE1BQU1DLFFBQVEsR0FBR0YsTUFBTSxDQUFDRSxRQUF4QixDQUZtQyxDQUduQzs7QUFIbUMsTUFJNUJDLElBSjRCLEdBSXBCSCxNQUFNLENBQUNJLEtBSmEsQ0FJNUJELElBSjRCOztBQUFB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QTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFJLDRCQUFXLGtEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGLGVBR0U7QUFBSSw0QkFBVywwQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIRixlQUlFO0FBQUksNEJBQVcsc0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBM0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBd0RELENBNUdEOztHQUFNNUMsVTtVQUNXRyxrRDs7O0tBRFhILFU7QUE4R04sK0RBQWVBLFVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGx5YS1maXppY2hlc2tpeC1saWMuMjUwOGNjNDdkZjk1MmYxYmJjMDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7Zml6c2VydmljZSwganVyc2VydmljZX0gZnJvbSBcIi4uLy4uL2RlZmF1bHRzL2ZpenNlcnZpY2VcIlxyXG5pbXBvcnQgY29va2llLCB7IHJlbW92ZSB9IGZyb20gJ2pzLWNvb2tpZSdcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCBSb3V0ZXIsIHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCBTZWxlY3QgZnJvbSAncmVhY3Qtc2VsZWN0JztcclxuaW1wb3J0IHsgbGlzdE1mbyB9IGZyb20gXCIuLi8uLi9kZWZhdWx0cy9saXN0TWZvXCJcclxuaW1wb3J0IENvZGVNb2RhbCBmcm9tIFwiLi4vc2hhcmVkL0NvZGVNb2RhbFwiXHJcbmltcG9ydCBNZm9Nb2RhbCBmcm9tIFwiLi4vc2hhcmVkL01mb01vZGFsXCJcclxuLy8gaW1wb3J0IE1mb0xpc3RUYWJsZSBmcm9tIFwiLi9NZm9MaXN0VGFibGVcIlxyXG5cclxuLy8gaW1wb3J0ICdyZWFjdC1zZWxlY3QvZGlzdC9yZWFjdC1zZWxlY3QuY3NzJztcclxuY29uc3QgU2Vjb25kU3RlcCA9ICh7c2V0TG9hZGluZ30pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHBhdGhuYW1lID0gcm91dGVyLnBhdGhuYW1lXHJcbiAgLy8gY29uc3Qge2lkfSA9IHJvdXRlci5xdWVyeVxyXG4gIGNvbnN0IHtzdGVwfSA9IHJvdXRlci5xdWVyeTtcclxuICBjb25zdCBbbWZvU2VsZWN0ZWQsc2V0TWZvU2VsZWN0ZWRdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFttZm9EYXRlcyxzZXRNZm9EYXRlc10gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbbW9kYWxPcGVuLCBzZXRNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2N1cnJlbnRTZWxlY3QsIHNldEN1cnJlbnRTZWxlY3RdID0gdXNlU3RhdGUoe30pXHJcbiAgY29uc3QgbGFzdENoYW5nZXMgPSBtZm9TZWxlY3RlZFxyXG4gIGNvbnN0IG9uQ2hhbmdlU2VsZWN0ZWQgPSBtZm9TZWxlY3RlZCA9PiB7XHJcbiAgICBsZXQgZGlmZmVyZW5jZSA9IGxhc3RDaGFuZ2VzLmZpbHRlcih4ID0+ICFtZm9TZWxlY3RlZC5pbmNsdWRlcyh4KSk7XHJcbiAgICBzZXRNZm9TZWxlY3RlZChtZm9TZWxlY3RlZCk7XHJcbiAgICBpZihtZm9TZWxlY3RlZC5sZW5ndGggPjAgJiYgZGlmZmVyZW5jZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgc2V0TWZvRGF0ZXMoWy4uLm1mb0RhdGVzLHtcclxuICAgICAgICAgIGlkOiBtZm9TZWxlY3RlZC5sZW5ndGgtMSxcclxuICAgICAgICAgIG5hbWU6IG1mb1NlbGVjdGVkW21mb1NlbGVjdGVkLmxlbmd0aC0xXS52YWx1ZSxcclxuICAgICAgICAgIGRhdGU6IFwiXCIsXHJcbiAgICAgICAgICBwcmljZTogXCJcIixcclxuICAgICAgICAgIHByb2JsZW06IFwiXCJcclxuICAgICAgICB9XHJcbiAgICAgIF0pXHJcbiAgICAgIHNldE1vZGFsT3Blbih0cnVlKVxyXG4gICAgfVxyXG5cclxuICAgIGlmKGRpZmZlcmVuY2UubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgY29uc3QgbGFzdERhdGVzID0gbWZvRGF0ZXM7XHJcbiAgICAgICAgY29uc3QgcmVtb3ZlSW5kZXggPSBsYXN0RGF0ZXMuZmluZEluZGV4KGkgPT4gaS5uYW1lID09PSBkaWZmZXJlbmNlWzBdLmxhYmVsKTtcclxuICAgICAgICBsYXN0RGF0ZXMuc3BsaWNlKHJlbW92ZUluZGV4LCAxKTtcclxuICAgICAgICBzZXRNZm9EYXRlcyhsYXN0RGF0ZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKG1mb1NlbGVjdGVkLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBzZXRNZm9EYXRlcyhbXSlcclxuICAgIH1cclxuICB9O1xyXG5cclxuXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhtZm9TZWxlY3RlZClcclxuICB9LFttZm9TZWxlY3RlZF0pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhtZm9EYXRlcylcclxuICB9LFttZm9EYXRlc10pXHJcblxyXG4gIGNvbnN0IG9uU29ydEVuZCA9ICh7IG9sZEluZGV4LCBuZXdJbmRleCB9KSA9PiB7XHJcbiAgICBjb25zdCBuZXdWYWx1ZSA9IGFycmF5TW92ZShzZWxlY3RlZCwgb2xkSW5kZXgsIG5ld0luZGV4KTtcclxuICAgIHNldE1mb1NlbGVjdGVkKG5ld1ZhbHVlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtX3JlZ2lzdGVyJz5cclxuICAgICAgPGZvcm0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21mb19saXN0Jz5cclxuICAgICAgICAgIDxzcGFuPtCa0L7QvNGDINC00L7Qu9C20LXQvTo8L3NwYW4+XHJcbiAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICBvblNvcnRFbmQ9e29uU29ydEVuZH1cclxuICAgICAgICAgICAgICB2YWx1ZT17bWZvU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgaXNNdWx0aVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJtZm9cIlxyXG4gICAgICAgICAgICAgIG9wdGlvbnM9e2xpc3RNZm99XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmFzaWMtbXVsdGktc2VsZWN0XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWVQcmVmaXg9XCJzZWxlY3RcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0JLRi9Cx0LXRgNC40YLQtSDQvtC00LjQvSDQuNC70Lgg0L3QtdGB0LrQvtC70YzQutC+INCc0KTQnlwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIHsvKiA8dWw+XHJcbiAgICAgICAgICAgICAge21mb0RhdGVzLm1hcChtID0+IChcclxuICAgICAgICAgICAgICAgIDxsaT57bS5uYW1lfTwvbGk+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdWw+ICovfVxyXG4gICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICBcclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInRhYmxlLXdyYXBcIj5cclxuICAgICAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+0KPRgdC70YPQs9CwPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+0J7Qv9C40YHQsNC90LjQtTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPtCm0LXQvdCwPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+0KHQutC40LTQutCwPC90aD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cItCj0YHQu9GD0LPQsFwiPtCc0L7QsdC40LvRjNC90LDRjyDQstC10YDRgdGC0LrQsDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtbGFiZWw9XCLQntC/0LjRgdCw0L3QuNC1XCI+0JLQtdGA0YHRgtC60LAg0L/QvtC0INGC0LXQu9C10YTQvtC90Ys8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwi0KbQtdC90LBcIj4kMzAwMDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtbGFiZWw9XCLQodC60LjQtNC60LBcIj41MCU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtbGFiZWw9XCLQo9GB0LvRg9Cz0LBcIj7Qn9C+0YHQsNC00LrQsCDQvdCwIENNUyBXb3JkUHJlc3M8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwi0J7Qv9C40YHQsNC90LjQtVwiPtCh0L7Qt9C00LDQvdC40LUg0YHQsNC50YLQsCDRgSDQsNC00LzQuNC9LiDQv9Cw0L3QtdC70YzRjjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtbGFiZWw9XCLQptC10L3QsFwiPiQzMDAwPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cItCh0LrQuNC00LrQsFwiPjMwJTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlY29uZFN0ZXAiXSwic291cmNlUm9vdCI6IiJ9