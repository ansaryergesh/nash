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
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var _defaults_listMfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../defaults/listMfo */ "./defaults/listMfo.js");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-input-mask */ "./node_modules/react-input-mask/index.js");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shared_CodeModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/CodeModal */ "./components/shared/CodeModal.js");
/* harmony import */ var _shared_MfoModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/MfoModal */ "./components/shared/MfoModal.js");
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
            lineNumber: 71,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_select__WEBPACK_IMPORTED_MODULE_11__.default, {
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
            lineNumber: 72,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      "class": "table-wrap ".concat(mfoDates.length > 0 && "d-none"),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u041C\u0424\u041E"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 21
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "\u041A\u043E\u0433\u0434\u0430 \u0432\u0437\u044F\u043B\u0438"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 21
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u0434\u043E\u043B\u0436\u043D\u044B"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 21
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
              children: "\u041F\u0440\u043E\u0431\u043B\u0435\u043C\u044B"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 21
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 19
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 17
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              "data-label": "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u041C\u0424\u041E",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 51
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 21
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              "data-label": "\u041A\u043E\u0433\u0434\u0430 \u0432\u0437\u044F\u043B\u0438",
              children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_input_mask__WEBPACK_IMPORTED_MODULE_8___default()), {
                mask: "99.99.9999",
                maskChar: null,
                name: "data",
                type: "tel",
                placeholder: "\u0434\u0434.\u043C\u043C.\u0433\u0433\u0433\u0433",
                className: "my-input code_input"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 51
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 21
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              "data-label": "\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u0434\u043E\u043B\u0436\u043D\u044B",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                type: "number"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 53
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 21
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              "data-label": "\u041F\u0440\u043E\u0431\u043B\u0435\u043C\u044B",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                  value: null,
                  disabled: true,
                  selected: true,
                  children: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 117,
                  columnNumber: 25
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                  value: true,
                  children: "\u041C\u0424\u041E"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 118,
                  columnNumber: 25
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                  value: true,
                  children: "\u0427\u0421\u0418"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 119,
                  columnNumber: 25
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                  value: true,
                  children: "\u041D\u043E\u0442\u0430\u0440\u0438\u0443\u0441"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 120,
                  columnNumber: 25
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 23
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 21
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 19
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 15
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 67,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRzZXJ2aWNlL1NlY29uZFN0ZXAuanMiXSwibmFtZXMiOlsiU2Vjb25kU3RlcCIsInNldExvYWRpbmciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwYXRobmFtZSIsInN0ZXAiLCJxdWVyeSIsInVzZVN0YXRlIiwibWZvU2VsZWN0ZWQiLCJzZXRNZm9TZWxlY3RlZCIsIm1mb0RhdGVzIiwic2V0TWZvRGF0ZXMiLCJtb2RhbE9wZW4iLCJzZXRNb2RhbE9wZW4iLCJjdXJyZW50U2VsZWN0Iiwic2V0Q3VycmVudFNlbGVjdCIsImxhc3RDaGFuZ2VzIiwib25DaGFuZ2VTZWxlY3RlZCIsImRpZmZlcmVuY2UiLCJmaWx0ZXIiLCJ4IiwiaW5jbHVkZXMiLCJsZW5ndGgiLCJpZCIsIm5hbWUiLCJ2YWx1ZSIsImRhdGUiLCJwcmljZSIsInByb2JsZW0iLCJsYXN0RGF0ZXMiLCJyZW1vdmVJbmRleCIsImZpbmRJbmRleCIsImkiLCJsYWJlbCIsInNwbGljZSIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJvblNvcnRFbmQiLCJvbGRJbmRleCIsIm5ld0luZGV4IiwibmV3VmFsdWUiLCJhcnJheU1vdmUiLCJzZWxlY3RlZCIsImxpc3RNZm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBO0FBRUE7O0FBQ0EsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBa0I7QUFBQTs7QUFBQSxNQUFoQkMsVUFBZ0IsUUFBaEJBLFVBQWdCO0FBQ25DLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFDQSxNQUFNQyxRQUFRLEdBQUdGLE1BQU0sQ0FBQ0UsUUFBeEIsQ0FGbUMsQ0FHbkM7O0FBSG1DLE1BSTVCQyxJQUo0QixHQUlwQkgsTUFBTSxDQUFDSSxLQUphLENBSTVCRCxJQUo0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QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkYsZUFTRTtBQUFJLDRCQUFXLGlGQUFmO0FBQUEscUNBQWdDO0FBQU8sb0JBQUksRUFBQztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFURixlQVVFO0FBQUksNEJBQVcsa0RBQWY7QUFBQSxxQ0FDRTtBQUFBLHdDQUNFO0FBQVEsdUJBQUssRUFBRSxJQUFmO0FBQXFCLDBCQUFRLE1BQTdCO0FBQThCLDBCQUFRLE1BQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBRUU7QUFBUSx1QkFBSyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZGLGVBR0U7QUFBUSx1QkFBSyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUhGLGVBSUU7QUFBUSx1QkFBSyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBM0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBK0RELENBbkhEOztHQUFNdEIsVTtVQUNXRyxrRDs7O0tBRFhILFU7QUFxSE4sK0RBQWVBLFVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGx5YS1maXppY2hlc2tpeC1saWMuZjYwOGUwY2JiYTVkNjQyNGNmMGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7Zml6c2VydmljZSwganVyc2VydmljZX0gZnJvbSBcIi4uLy4uL2RlZmF1bHRzL2ZpenNlcnZpY2VcIlxyXG5pbXBvcnQgY29va2llLCB7IHJlbW92ZSB9IGZyb20gJ2pzLWNvb2tpZSdcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCBSb3V0ZXIsIHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCBTZWxlY3QgZnJvbSAncmVhY3Qtc2VsZWN0JztcclxuaW1wb3J0IHsgbGlzdE1mbyB9IGZyb20gXCIuLi8uLi9kZWZhdWx0cy9saXN0TWZvXCJcclxuaW1wb3J0IElucHV0TWFzayBmcm9tICdyZWFjdC1pbnB1dC1tYXNrJ1xyXG5pbXBvcnQgQ29kZU1vZGFsIGZyb20gXCIuLi9zaGFyZWQvQ29kZU1vZGFsXCJcclxuaW1wb3J0IE1mb01vZGFsIGZyb20gXCIuLi9zaGFyZWQvTWZvTW9kYWxcIlxyXG4vLyBpbXBvcnQgTWZvTGlzdFRhYmxlIGZyb20gXCIuL01mb0xpc3RUYWJsZVwiXHJcblxyXG4vLyBpbXBvcnQgJ3JlYWN0LXNlbGVjdC9kaXN0L3JlYWN0LXNlbGVjdC5jc3MnO1xyXG5jb25zdCBTZWNvbmRTdGVwID0gKHtzZXRMb2FkaW5nfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgcGF0aG5hbWUgPSByb3V0ZXIucGF0aG5hbWVcclxuICAvLyBjb25zdCB7aWR9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgY29uc3Qge3N0ZXB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IFttZm9TZWxlY3RlZCxzZXRNZm9TZWxlY3RlZF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW21mb0RhdGVzLHNldE1mb0RhdGVzXSA9IHVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFttb2RhbE9wZW4sIHNldE1vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbY3VycmVudFNlbGVjdCwgc2V0Q3VycmVudFNlbGVjdF0gPSB1c2VTdGF0ZSh7fSlcclxuICBjb25zdCBsYXN0Q2hhbmdlcyA9IG1mb1NlbGVjdGVkXHJcbiAgY29uc3Qgb25DaGFuZ2VTZWxlY3RlZCA9IG1mb1NlbGVjdGVkID0+IHtcclxuICAgIGxldCBkaWZmZXJlbmNlID0gbGFzdENoYW5nZXMuZmlsdGVyKHggPT4gIW1mb1NlbGVjdGVkLmluY2x1ZGVzKHgpKTtcclxuICAgIHNldE1mb1NlbGVjdGVkKG1mb1NlbGVjdGVkKTtcclxuICAgIGlmKG1mb1NlbGVjdGVkLmxlbmd0aCA+MCAmJiBkaWZmZXJlbmNlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBzZXRNZm9EYXRlcyhbLi4ubWZvRGF0ZXMse1xyXG4gICAgICAgICAgaWQ6IG1mb1NlbGVjdGVkLmxlbmd0aC0xLFxyXG4gICAgICAgICAgbmFtZTogbWZvU2VsZWN0ZWRbbWZvU2VsZWN0ZWQubGVuZ3RoLTFdLnZhbHVlLFxyXG4gICAgICAgICAgZGF0ZTogXCJcIixcclxuICAgICAgICAgIHByaWNlOiBcIlwiLFxyXG4gICAgICAgICAgcHJvYmxlbTogXCJcIlxyXG4gICAgICAgIH1cclxuICAgICAgXSlcclxuICAgICAgc2V0TW9kYWxPcGVuKHRydWUpXHJcbiAgICB9XHJcblxyXG4gICAgaWYoZGlmZmVyZW5jZS5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICBjb25zdCBsYXN0RGF0ZXMgPSBtZm9EYXRlcztcclxuICAgICAgICBjb25zdCByZW1vdmVJbmRleCA9IGxhc3REYXRlcy5maW5kSW5kZXgoaSA9PiBpLm5hbWUgPT09IGRpZmZlcmVuY2VbMF0ubGFiZWwpO1xyXG4gICAgICAgIGxhc3REYXRlcy5zcGxpY2UocmVtb3ZlSW5kZXgsIDEpO1xyXG4gICAgICAgIHNldE1mb0RhdGVzKGxhc3REYXRlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYobWZvU2VsZWN0ZWQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHNldE1mb0RhdGVzKFtdKVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG5cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKG1mb1NlbGVjdGVkKVxyXG4gIH0sW21mb1NlbGVjdGVkXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKG1mb0RhdGVzKVxyXG4gIH0sW21mb0RhdGVzXSlcclxuXHJcbiAgY29uc3Qgb25Tb3J0RW5kID0gKHsgb2xkSW5kZXgsIG5ld0luZGV4IH0pID0+IHtcclxuICAgIGNvbnN0IG5ld1ZhbHVlID0gYXJyYXlNb3ZlKHNlbGVjdGVkLCBvbGRJbmRleCwgbmV3SW5kZXgpO1xyXG4gICAgc2V0TWZvU2VsZWN0ZWQobmV3VmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2Zvcm1fcmVnaXN0ZXInPlxyXG4gICAgICA8Zm9ybT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWZvX2xpc3QnPlxyXG4gICAgICAgICAgPHNwYW4+0JrQvtC80YMg0LTQvtC70LbQtdC9Ojwvc3Bhbj5cclxuICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgIG9uU29ydEVuZD17b25Tb3J0RW5kfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXttZm9TZWxlY3RlZH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VTZWxlY3RlZH1cclxuICAgICAgICAgICAgICBpc011bHRpXHJcbiAgICAgICAgICAgICAgbmFtZT1cIm1mb1wiXHJcbiAgICAgICAgICAgICAgb3B0aW9ucz17bGlzdE1mb31cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiYXNpYy1tdWx0aS1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZVByZWZpeD1cInNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQktGL0LHQtdGA0LjRgtC1INC+0LTQuNC9INC40LvQuCDQvdC10YHQutC+0LvRjNC60L4g0JzQpNCeXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgey8qIDx1bD5cclxuICAgICAgICAgICAgICB7bWZvRGF0ZXMubWFwKG0gPT4gKFxyXG4gICAgICAgICAgICAgICAgPGxpPnttLm5hbWV9PC9saT5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC91bD4gKi99XHJcbiAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPXtgdGFibGUtd3JhcCAke21mb0RhdGVzLmxlbmd0aD4wICYmIGBkLW5vbmVgfWB9PlxyXG4gICAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD7QndCw0LfQstCw0L3QuNC1INCc0KTQnjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPtCa0L7Qs9C00LAg0LLQt9GP0LvQuDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPtCh0LrQvtC70YzQutC+INC00L7Qu9C20L3RizwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPtCf0YDQvtCx0LvQtdC80Ys8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwi0J3QsNC30LLQsNC90LjQtSDQnNCk0J5cIj48cD48L3A+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cItCa0L7Qs9C00LAg0LLQt9GP0LvQuFwiPiA8SW5wdXRNYXNrXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXNrPVwiOTkuOTkuOTk5OVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXNrQ2hhcj17bnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2RhdGEnXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPSd0ZWwnXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0n0LTQtC7QvNC8LtCz0LPQs9CzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXktaW5wdXQgY29kZV9pbnB1dFwiLz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwi0KHQutC+0LvRjNC60L4g0LTQvtC70LbQvdGLXCI+PGlucHV0IHR5cGU9J251bWJlcic+PC9pbnB1dD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwi0J/RgNC+0LHQu9C10LzRi1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17bnVsbH0gZGlzYWJsZWQgc2VsZWN0ZWQ+0JLRi9Cx0LXRgNC40YLQtTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPtCc0KTQnjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPtCn0KHQmDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPtCd0L7RgtCw0YDQuNGD0YE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlY29uZFN0ZXAiXSwic291cmNlUm9vdCI6IiJ9