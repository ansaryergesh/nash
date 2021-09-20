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
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "form_register",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
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
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        "class": "table-wrap ".concat(mfoDates.length === 0 && "d-none"),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                children: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u041C\u0424\u041E"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                children: "\u041A\u043E\u0433\u0434\u0430 \u0432\u0437\u044F\u043B\u0438"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                children: "\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u0434\u043E\u043B\u0436\u043D\u044B"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                children: "\u041F\u0440\u043E\u0431\u043B\u0435\u043C\u044B"
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
            children: mfoDates.map(function (m) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  "data-label": "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u041C\u0424\u041E",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                    children: m.name
                  }, void 0, false, {
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
                columnNumber: 21
              }, _this);
            })
          }, void 0, false, {
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
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "mfoBtns",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "signlebtn",
          children: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRzZXJ2aWNlL1NlY29uZFN0ZXAuanMiXSwibmFtZXMiOlsiU2Vjb25kU3RlcCIsInNldExvYWRpbmciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwYXRobmFtZSIsInN0ZXAiLCJxdWVyeSIsInVzZVN0YXRlIiwibWZvU2VsZWN0ZWQiLCJzZXRNZm9TZWxlY3RlZCIsIm1mb0RhdGVzIiwic2V0TWZvRGF0ZXMiLCJtb2RhbE9wZW4iLCJzZXRNb2RhbE9wZW4iLCJjdXJyZW50U2VsZWN0Iiwic2V0Q3VycmVudFNlbGVjdCIsImxhc3RDaGFuZ2VzIiwib25DaGFuZ2VTZWxlY3RlZCIsImRpZmZlcmVuY2UiLCJmaWx0ZXIiLCJ4IiwiaW5jbHVkZXMiLCJsZW5ndGgiLCJpZCIsIm5hbWUiLCJ2YWx1ZSIsImRhdGUiLCJwcmljZSIsInByb2JsZW0iLCJsYXN0RGF0ZXMiLCJyZW1vdmVJbmRleCIsImZpbmRJbmRleCIsImkiLCJsYWJlbCIsInNwbGljZSIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJvblNvcnRFbmQiLCJvbGRJbmRleCIsIm5ld0luZGV4IiwibmV3VmFsdWUiLCJhcnJheU1vdmUiLCJzZWxlY3RlZCIsImxpc3RNZm8iLCJtYXAiLCJtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTtBQUVBOztBQUNBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQWtCO0FBQUE7O0FBQUEsTUFBaEJDLFVBQWdCLFFBQWhCQSxVQUFnQjtBQUNuQyxNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHRixNQUFNLENBQUNFLFFBQXhCLENBRm1DLENBR25DOztBQUhtQyxNQUk1QkMsSUFKNEIsR0FJcEJILE1BQU0sQ0FBQ0ksS0FKYSxD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Q0EzSEQ7O0dBQU14QixVO1VBQ1dHLGtEOzs7S0FEWEgsVTtBQTZITiwrREFBZUEsVUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kbHlhLWZpemljaGVza2l4LWxpYy41MDk2Zjk1ODVmNDcyNmUwYjkwYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHtmaXpzZXJ2aWNlLCBqdXJzZXJ2aWNlfSBmcm9tIFwiLi4vLi4vZGVmYXVsdHMvZml6c2VydmljZVwiXHJcbmltcG9ydCBjb29raWUsIHsgcmVtb3ZlIH0gZnJvbSAnanMtY29va2llJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IFJvdXRlciwge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuaW1wb3J0IFNlbGVjdCBmcm9tICdyZWFjdC1zZWxlY3QnO1xyXG5pbXBvcnQgeyBsaXN0TWZvIH0gZnJvbSBcIi4uLy4uL2RlZmF1bHRzL2xpc3RNZm9cIlxyXG5pbXBvcnQgSW5wdXRNYXNrIGZyb20gJ3JlYWN0LWlucHV0LW1hc2snXHJcbmltcG9ydCBDb2RlTW9kYWwgZnJvbSBcIi4uL3NoYXJlZC9Db2RlTW9kYWxcIlxyXG5pbXBvcnQgTWZvTW9kYWwgZnJvbSBcIi4uL3NoYXJlZC9NZm9Nb2RhbFwiXHJcbi8vIGltcG9ydCBNZm9MaXN0VGFibGUgZnJvbSBcIi4vTWZvTGlzdFRhYmxlXCJcclxuXHJcbi8vIGltcG9ydCAncmVhY3Qtc2VsZWN0L2Rpc3QvcmVhY3Qtc2VsZWN0LmNzcyc7XHJcbmNvbnN0IFNlY29uZFN0ZXAgPSAoe3NldExvYWRpbmd9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBwYXRobmFtZSA9IHJvdXRlci5wYXRobmFtZVxyXG4gIC8vIGNvbnN0IHtpZH0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCB7c3RlcH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3QgW21mb1NlbGVjdGVkLHNldE1mb1NlbGVjdGVkXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbWZvRGF0ZXMsc2V0TWZvRGF0ZXNdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW21vZGFsT3Blbiwgc2V0TW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtjdXJyZW50U2VsZWN0LCBzZXRDdXJyZW50U2VsZWN0XSA9IHVzZVN0YXRlKHt9KVxyXG4gIGNvbnN0IGxhc3RDaGFuZ2VzID0gbWZvU2VsZWN0ZWRcclxuICBjb25zdCBvbkNoYW5nZVNlbGVjdGVkID0gbWZvU2VsZWN0ZWQgPT4ge1xyXG4gICAgbGV0IGRpZmZlcmVuY2UgPSBsYXN0Q2hhbmdlcy5maWx0ZXIoeCA9PiAhbWZvU2VsZWN0ZWQuaW5jbHVkZXMoeCkpO1xyXG4gICAgc2V0TWZvU2VsZWN0ZWQobWZvU2VsZWN0ZWQpO1xyXG4gICAgaWYobWZvU2VsZWN0ZWQubGVuZ3RoID4wICYmIGRpZmZlcmVuY2UubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHNldE1mb0RhdGVzKFsuLi5tZm9EYXRlcyx7XHJcbiAgICAgICAgICBpZDogbWZvU2VsZWN0ZWQubGVuZ3RoLTEsXHJcbiAgICAgICAgICBuYW1lOiBtZm9TZWxlY3RlZFttZm9TZWxlY3RlZC5sZW5ndGgtMV0udmFsdWUsXHJcbiAgICAgICAgICBkYXRlOiBcIlwiLFxyXG4gICAgICAgICAgcHJpY2U6IFwiXCIsXHJcbiAgICAgICAgICBwcm9ibGVtOiBcIlwiXHJcbiAgICAgICAgfVxyXG4gICAgICBdKVxyXG4gICAgICBzZXRNb2RhbE9wZW4odHJ1ZSlcclxuICAgIH1cclxuXHJcbiAgICBpZihkaWZmZXJlbmNlLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgIGNvbnN0IGxhc3REYXRlcyA9IG1mb0RhdGVzO1xyXG4gICAgICAgIGNvbnN0IHJlbW92ZUluZGV4ID0gbGFzdERhdGVzLmZpbmRJbmRleChpID0+IGkubmFtZSA9PT0gZGlmZmVyZW5jZVswXS5sYWJlbCk7XHJcbiAgICAgICAgbGFzdERhdGVzLnNwbGljZShyZW1vdmVJbmRleCwgMSk7XHJcbiAgICAgICAgc2V0TWZvRGF0ZXMobGFzdERhdGVzKTtcclxuICAgIH1cclxuXHJcbiAgICBpZihtZm9TZWxlY3RlZC5sZW5ndGggPT09IDApIHtcclxuICAgICAgc2V0TWZvRGF0ZXMoW10pXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcblxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2cobWZvU2VsZWN0ZWQpXHJcbiAgfSxbbWZvU2VsZWN0ZWRdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2cobWZvRGF0ZXMpXHJcbiAgfSxbbWZvRGF0ZXNdKVxyXG5cclxuICBjb25zdCBvblNvcnRFbmQgPSAoeyBvbGRJbmRleCwgbmV3SW5kZXggfSkgPT4ge1xyXG4gICAgY29uc3QgbmV3VmFsdWUgPSBhcnJheU1vdmUoc2VsZWN0ZWQsIG9sZEluZGV4LCBuZXdJbmRleCk7XHJcbiAgICBzZXRNZm9TZWxlY3RlZChuZXdWYWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybV9yZWdpc3Rlcic+XHJcbiAgICAgIDxmb3JtPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZm9fbGlzdCc+XHJcbiAgICAgICAgICA8c3Bhbj7QmtC+0LzRgyDQtNC+0LvQttC10L06PC9zcGFuPlxyXG4gICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgb25Tb3J0RW5kPXtvblNvcnRFbmR9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e21mb1NlbGVjdGVkfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVNlbGVjdGVkfVxyXG4gICAgICAgICAgICAgIGlzTXVsdGlcclxuICAgICAgICAgICAgICBuYW1lPVwibWZvXCJcclxuICAgICAgICAgICAgICBvcHRpb25zPXtsaXN0TWZvfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJhc2ljLW11bHRpLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lUHJlZml4PVwic2VsZWN0XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCS0YvQsdC10YDQuNGC0LUg0L7QtNC40L0g0LjQu9C4INC90LXRgdC60L7Qu9GM0LrQviDQnNCk0J5cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICB7LyogPHVsPlxyXG4gICAgICAgICAgICAgIHttZm9EYXRlcy5tYXAobSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bGk+e20ubmFtZX08L2xpPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3VsPiAqL31cclxuICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAgPGRpdiBjbGFzcz17YHRhYmxlLXdyYXAgJHttZm9EYXRlcy5sZW5ndGg9PT0wICYmIGBkLW5vbmVgfWB9PlxyXG4gICAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD7QndCw0LfQstCw0L3QuNC1INCc0KTQnjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPtCa0L7Qs9C00LAg0LLQt9GP0LvQuDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPtCh0LrQvtC70YzQutC+INC00L7Qu9C20L3RizwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPtCf0YDQvtCx0LvQtdC80Ys8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAge21mb0RhdGVzLm1hcChtPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cItCd0LDQt9Cy0LDQvdC40LUg0JzQpNCeXCI+PHA+e20ubmFtZX08L3A+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cItCa0L7Qs9C00LAg0LLQt9GP0LvQuFwiPiA8SW5wdXRNYXNrXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXNrPVwiOTkuOTkuOTk5OVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXNrQ2hhcj17bnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2RhdGEnXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPSd0ZWwnXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0n0LTQtC7QvNC8LtCz0LPQs9CzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXktaW5wdXQgY29kZV9pbnB1dFwiLz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwi0KHQutC+0LvRjNC60L4g0LTQvtC70LbQvdGLXCI+PGlucHV0IHR5cGU9J251bWJlcic+PC9pbnB1dD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwi0J/RgNC+0LHQu9C10LzRi1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17bnVsbH0gZGlzYWJsZWQgc2VsZWN0ZWQ+0JLRi9Cx0LXRgNC40YLQtTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPtCc0KTQnjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPtCn0KHQmDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPtCd0L7RgtCw0YDQuNGD0YE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZm9CdG5zJz5cclxuXHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nc2lnbmxlYnRuJz7QntGC0L/RgNCw0LLQuNGC0Yw8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICBcclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2Vjb25kU3RlcCJdLCJzb3VyY2VSb290IjoiIn0=