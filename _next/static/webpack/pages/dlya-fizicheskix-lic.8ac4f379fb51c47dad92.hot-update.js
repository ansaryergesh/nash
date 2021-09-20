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
      "class": "table-wrap d-none",
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
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              "data-label": "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u041C\u0424\u041E",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                type: "text",
                disabled: true
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
            columnNumber: 19
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              "data-label": "\u0423\u0441\u043B\u0443\u0433\u0430",
              children: "\u041F\u043E\u0441\u0430\u0434\u043A\u0430 \u043D\u0430 CMS WordPress"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 21
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              "data-label": "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",
              children: "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0441\u0430\u0439\u0442\u0430 \u0441 \u0430\u0434\u043C\u0438\u043D. \u043F\u0430\u043D\u0435\u043B\u044C\u044E"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 21
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              "data-label": "\u0426\u0435\u043D\u0430",
              children: "$3000"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 21
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              "data-label": "\u0421\u043A\u0438\u0434\u043A\u0430",
              children: "30%"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 21
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 19
          }, _this)]
        }, void 0, true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRzZXJ2aWNlL1NlY29uZFN0ZXAuanMiXSwibmFtZXMiOlsiU2Vjb25kU3RlcCIsInNldExvYWRpbmciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwYXRobmFtZSIsInN0ZXAiLCJxdWVyeSIsInVzZVN0YXRlIiwibWZvU2VsZWN0ZWQiLCJzZXRNZm9TZWxlY3RlZCIsIm1mb0RhdGVzIiwic2V0TWZvRGF0ZXMiLCJtb2RhbE9wZW4iLCJzZXRNb2RhbE9wZW4iLCJjdXJyZW50U2VsZWN0Iiwic2V0Q3VycmVudFNlbGVjdCIsImxhc3RDaGFuZ2VzIiwib25DaGFuZ2VTZWxlY3RlZCIsImRpZmZlcmVuY2UiLCJmaWx0ZXIiLCJ4IiwiaW5jbHVkZXMiLCJsZW5ndGgiLCJpZCIsIm5hbWUiLCJ2YWx1ZSIsImRhdGUiLCJwcmljZSIsInByb2JsZW0iLCJsYXN0RGF0ZXMiLCJyZW1vdmVJbmRleCIsImZpbmRJbmRleCIsImkiLCJsYWJlbCIsInNwbGljZSIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJvblNvcnRFbmQiLCJvbGRJbmRleCIsIm5ld0luZGV4IiwibmV3VmFsdWUiLCJhcnJheU1vdmUiLCJzZWxlY3RlZCIsImxpc3RNZm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBO0FBRUE7O0FBQ0EsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBa0I7QUFBQTs7QUFBQSxNQUFoQkMsVUFBZ0IsUUFBaEJBLFVBQWdCO0FBQ25DLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFDQSxNQUFNQyxRQUFRLEdBQUdGLE1BQU0sQ0FBQ0UsUUFBeEIsQ0FGbUMsQ0FHbkM7O0FBSG1DLE1BSTVCQyxJQUo0QixHQUlwQkgsTUFBTSxDQUFDSSxLQUphLENBSTVCRCxJQUo0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O0FBQUE7QUFBQTtBQUFBO0FBQUEsYUEzQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFxRUQsQ0F6SEQ7O0dBQU01QyxVO1VBQ1dHLGtEOzs7S0FEWEgsVTtBQTJITiwrREFBZUEsVUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kbHlhLWZpemljaGVza2l4LWxpYy44YWM0ZjM3OWZiNTFjNDdkYWQ5Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHtmaXpzZXJ2aWNlLCBqdXJzZXJ2aWNlfSBmcm9tIFwiLi4vLi4vZGVmYXVsdHMvZml6c2VydmljZVwiXHJcbmltcG9ydCBjb29raWUsIHsgcmVtb3ZlIH0gZnJvbSAnanMtY29va2llJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IFJvdXRlciwge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuaW1wb3J0IFNlbGVjdCBmcm9tICdyZWFjdC1zZWxlY3QnO1xyXG5pbXBvcnQgeyBsaXN0TWZvIH0gZnJvbSBcIi4uLy4uL2RlZmF1bHRzL2xpc3RNZm9cIlxyXG5pbXBvcnQgSW5wdXRNYXNrIGZyb20gJ3JlYWN0LWlucHV0LW1hc2snXHJcbmltcG9ydCBDb2RlTW9kYWwgZnJvbSBcIi4uL3NoYXJlZC9Db2RlTW9kYWxcIlxyXG5pbXBvcnQgTWZvTW9kYWwgZnJvbSBcIi4uL3NoYXJlZC9NZm9Nb2RhbFwiXHJcbi8vIGltcG9ydCBNZm9MaXN0VGFibGUgZnJvbSBcIi4vTWZvTGlzdFRhYmxlXCJcclxuXHJcbi8vIGltcG9ydCAncmVhY3Qtc2VsZWN0L2Rpc3QvcmVhY3Qtc2VsZWN0LmNzcyc7XHJcbmNvbnN0IFNlY29uZFN0ZXAgPSAoe3NldExvYWRpbmd9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBwYXRobmFtZSA9IHJvdXRlci5wYXRobmFtZVxyXG4gIC8vIGNvbnN0IHtpZH0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCB7c3RlcH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3QgW21mb1NlbGVjdGVkLHNldE1mb1NlbGVjdGVkXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbWZvRGF0ZXMsc2V0TWZvRGF0ZXNdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW21vZGFsT3Blbiwgc2V0TW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtjdXJyZW50U2VsZWN0LCBzZXRDdXJyZW50U2VsZWN0XSA9IHVzZVN0YXRlKHt9KVxyXG4gIGNvbnN0IGxhc3RDaGFuZ2VzID0gbWZvU2VsZWN0ZWRcclxuICBjb25zdCBvbkNoYW5nZVNlbGVjdGVkID0gbWZvU2VsZWN0ZWQgPT4ge1xyXG4gICAgbGV0IGRpZmZlcmVuY2UgPSBsYXN0Q2hhbmdlcy5maWx0ZXIoeCA9PiAhbWZvU2VsZWN0ZWQuaW5jbHVkZXMoeCkpO1xyXG4gICAgc2V0TWZvU2VsZWN0ZWQobWZvU2VsZWN0ZWQpO1xyXG4gICAgaWYobWZvU2VsZWN0ZWQubGVuZ3RoID4wICYmIGRpZmZlcmVuY2UubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHNldE1mb0RhdGVzKFsuLi5tZm9EYXRlcyx7XHJcbiAgICAgICAgICBpZDogbWZvU2VsZWN0ZWQubGVuZ3RoLTEsXHJcbiAgICAgICAgICBuYW1lOiBtZm9TZWxlY3RlZFttZm9TZWxlY3RlZC5sZW5ndGgtMV0udmFsdWUsXHJcbiAgICAgICAgICBkYXRlOiBcIlwiLFxyXG4gICAgICAgICAgcHJpY2U6IFwiXCIsXHJcbiAgICAgICAgICBwcm9ibGVtOiBcIlwiXHJcbiAgICAgICAgfVxyXG4gICAgICBdKVxyXG4gICAgICBzZXRNb2RhbE9wZW4odHJ1ZSlcclxuICAgIH1cclxuXHJcbiAgICBpZihkaWZmZXJlbmNlLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgIGNvbnN0IGxhc3REYXRlcyA9IG1mb0RhdGVzO1xyXG4gICAgICAgIGNvbnN0IHJlbW92ZUluZGV4ID0gbGFzdERhdGVzLmZpbmRJbmRleChpID0+IGkubmFtZSA9PT0gZGlmZmVyZW5jZVswXS5sYWJlbCk7XHJcbiAgICAgICAgbGFzdERhdGVzLnNwbGljZShyZW1vdmVJbmRleCwgMSk7XHJcbiAgICAgICAgc2V0TWZvRGF0ZXMobGFzdERhdGVzKTtcclxuICAgIH1cclxuXHJcbiAgICBpZihtZm9TZWxlY3RlZC5sZW5ndGggPT09IDApIHtcclxuICAgICAgc2V0TWZvRGF0ZXMoW10pXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcblxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2cobWZvU2VsZWN0ZWQpXHJcbiAgfSxbbWZvU2VsZWN0ZWRdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2cobWZvRGF0ZXMpXHJcbiAgfSxbbWZvRGF0ZXNdKVxyXG5cclxuICBjb25zdCBvblNvcnRFbmQgPSAoeyBvbGRJbmRleCwgbmV3SW5kZXggfSkgPT4ge1xyXG4gICAgY29uc3QgbmV3VmFsdWUgPSBhcnJheU1vdmUoc2VsZWN0ZWQsIG9sZEluZGV4LCBuZXdJbmRleCk7XHJcbiAgICBzZXRNZm9TZWxlY3RlZChuZXdWYWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybV9yZWdpc3Rlcic+XHJcbiAgICAgIDxmb3JtPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZm9fbGlzdCc+XHJcbiAgICAgICAgICA8c3Bhbj7QmtC+0LzRgyDQtNC+0LvQttC10L06PC9zcGFuPlxyXG4gICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgb25Tb3J0RW5kPXtvblNvcnRFbmR9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e21mb1NlbGVjdGVkfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVNlbGVjdGVkfVxyXG4gICAgICAgICAgICAgIGlzTXVsdGlcclxuICAgICAgICAgICAgICBuYW1lPVwibWZvXCJcclxuICAgICAgICAgICAgICBvcHRpb25zPXtsaXN0TWZvfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJhc2ljLW11bHRpLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lUHJlZml4PVwic2VsZWN0XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCS0YvQsdC10YDQuNGC0LUg0L7QtNC40L0g0LjQu9C4INC90LXRgdC60L7Qu9GM0LrQviDQnNCk0J5cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICB7LyogPHVsPlxyXG4gICAgICAgICAgICAgIHttZm9EYXRlcy5tYXAobSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bGk+e20ubmFtZX08L2xpPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3VsPiAqL31cclxuICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9e1widGFibGUtd3JhcCBkLW5vbmVcIn0+XHJcbiAgICAgICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPtCd0LDQt9Cy0LDQvdC40LUg0JzQpNCePC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+0JrQvtCz0LTQsCDQstC30Y/Qu9C4PC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+0KHQutC+0LvRjNC60L4g0LTQvtC70LbQvdGLPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+0J/RgNC+0LHQu9C10LzRizwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtbGFiZWw9XCLQndCw0LfQstCw0L3QuNC1INCc0KTQnlwiPjxpbnB1dCB0eXBlPSd0ZXh0JyBkaXNhYmxlZD48L2lucHV0PjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtbGFiZWw9XCLQmtC+0LPQtNCwINCy0LfRj9C70LhcIj4gPElucHV0TWFza1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFzaz1cIjk5Ljk5Ljk5OTlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFza0NoYXI9e251bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdkYXRhJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGVsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J9C00LQu0LzQvC7Qs9Cz0LPQsydcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm15LWlucHV0IGNvZGVfaW5wdXRcIi8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cItCh0LrQvtC70YzQutC+INC00L7Qu9C20L3Ri1wiPjxpbnB1dCB0eXBlPSdudW1iZXInPjwvaW5wdXQ+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cItCf0YDQvtCx0LvQtdC80YtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e251bGx9IGRpc2FibGVkIHNlbGVjdGVkPtCS0YvQsdC10YDQuNGC0LU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT7QnNCk0J48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT7Qp9Ch0Jg8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT7QndC+0YLQsNGA0LjRg9GBPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtbGFiZWw9XCLQo9GB0LvRg9Cz0LBcIj7Qn9C+0YHQsNC00LrQsCDQvdCwIENNUyBXb3JkUHJlc3M8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwi0J7Qv9C40YHQsNC90LjQtVwiPtCh0L7Qt9C00LDQvdC40LUg0YHQsNC50YLQsCDRgSDQsNC00LzQuNC9LiDQv9Cw0L3QtdC70YzRjjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtbGFiZWw9XCLQptC10L3QsFwiPiQzMDAwPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cItCh0LrQuNC00LrQsFwiPjMwJTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlY29uZFN0ZXAiXSwic291cmNlUm9vdCI6IiJ9