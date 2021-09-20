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
      "class": "table-wrap",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRzZXJ2aWNlL1NlY29uZFN0ZXAuanMiXSwibmFtZXMiOlsiU2Vjb25kU3RlcCIsInNldExvYWRpbmciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwYXRobmFtZSIsInN0ZXAiLCJxdWVyeSIsInVzZVN0YXRlIiwibWZvU2VsZWN0ZWQiLCJzZXRNZm9TZWxlY3RlZCIsIm1mb0RhdGVzIiwic2V0TWZvRGF0ZXMiLCJtb2RhbE9wZW4iLCJzZXRNb2RhbE9wZW4iLCJjdXJyZW50U2VsZWN0Iiwic2V0Q3VycmVudFNlbGVjdCIsImxhc3RDaGFuZ2VzIiwib25DaGFuZ2VTZWxlY3RlZCIsImRpZmZlcmVuY2UiLCJmaWx0ZXIiLCJ4IiwiaW5jbHVkZXMiLCJsZW5ndGgiLCJpZCIsIm5hbWUiLCJ2YWx1ZSIsImRhdGUiLCJwcmljZSIsInByb2JsZW0iLCJsYXN0RGF0ZXMiLCJyZW1vdmVJbmRleCIsImZpbmRJbmRleCIsImkiLCJsYWJlbCIsInNwbGljZSIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJvblNvcnRFbmQiLCJvbGRJbmRleCIsIm5ld0luZGV4IiwibmV3VmFsdWUiLCJhcnJheU1vdmUiLCJzZWxlY3RlZCIsImxpc3RNZm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBO0FBRUE7O0FBQ0EsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBa0I7QUFBQTs7QUFBQSxNQUFoQkMsVUFBZ0IsUUFBaEJBLFVBQWdCO0FBQ25DLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFDQSxNQUFNQyxRQUFRLEdBQUdGLE1BQU0sQ0FBQ0UsUUFBeEIsQ0FGbUMsQ0FHbkM7O0FBSG1DLE1BSTVCQyxJQUo0QixHQUlwQkgsTUFBTSxDQUFDSSxLQUphLENBSTVCRCxJQUo0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QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTNCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXFFRCxDQXpIRDs7R0FBTTVDLFU7VUFDV0csa0Q7OztLQURYSCxVO0FBMkhOLCtEQUFlQSxVQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RseWEtZml6aWNoZXNraXgtbGljLmRmN2Q3ZTFhNzAxZTg2ZDJkZmQ5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQge2ZpenNlcnZpY2UsIGp1cnNlcnZpY2V9IGZyb20gXCIuLi8uLi9kZWZhdWx0cy9maXpzZXJ2aWNlXCJcclxuaW1wb3J0IGNvb2tpZSwgeyByZW1vdmUgfSBmcm9tICdqcy1jb29raWUnXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgUm91dGVyLCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQgU2VsZWN0IGZyb20gJ3JlYWN0LXNlbGVjdCc7XHJcbmltcG9ydCB7IGxpc3RNZm8gfSBmcm9tIFwiLi4vLi4vZGVmYXVsdHMvbGlzdE1mb1wiXHJcbmltcG9ydCBJbnB1dE1hc2sgZnJvbSAncmVhY3QtaW5wdXQtbWFzaydcclxuaW1wb3J0IENvZGVNb2RhbCBmcm9tIFwiLi4vc2hhcmVkL0NvZGVNb2RhbFwiXHJcbmltcG9ydCBNZm9Nb2RhbCBmcm9tIFwiLi4vc2hhcmVkL01mb01vZGFsXCJcclxuLy8gaW1wb3J0IE1mb0xpc3RUYWJsZSBmcm9tIFwiLi9NZm9MaXN0VGFibGVcIlxyXG5cclxuLy8gaW1wb3J0ICdyZWFjdC1zZWxlY3QvZGlzdC9yZWFjdC1zZWxlY3QuY3NzJztcclxuY29uc3QgU2Vjb25kU3RlcCA9ICh7c2V0TG9hZGluZ30pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHBhdGhuYW1lID0gcm91dGVyLnBhdGhuYW1lXHJcbiAgLy8gY29uc3Qge2lkfSA9IHJvdXRlci5xdWVyeVxyXG4gIGNvbnN0IHtzdGVwfSA9IHJvdXRlci5xdWVyeTtcclxuICBjb25zdCBbbWZvU2VsZWN0ZWQsc2V0TWZvU2VsZWN0ZWRdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFttZm9EYXRlcyxzZXRNZm9EYXRlc10gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbbW9kYWxPcGVuLCBzZXRNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2N1cnJlbnRTZWxlY3QsIHNldEN1cnJlbnRTZWxlY3RdID0gdXNlU3RhdGUoe30pXHJcbiAgY29uc3QgbGFzdENoYW5nZXMgPSBtZm9TZWxlY3RlZFxyXG4gIGNvbnN0IG9uQ2hhbmdlU2VsZWN0ZWQgPSBtZm9TZWxlY3RlZCA9PiB7XHJcbiAgICBsZXQgZGlmZmVyZW5jZSA9IGxhc3RDaGFuZ2VzLmZpbHRlcih4ID0+ICFtZm9TZWxlY3RlZC5pbmNsdWRlcyh4KSk7XHJcbiAgICBzZXRNZm9TZWxlY3RlZChtZm9TZWxlY3RlZCk7XHJcbiAgICBpZihtZm9TZWxlY3RlZC5sZW5ndGggPjAgJiYgZGlmZmVyZW5jZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgc2V0TWZvRGF0ZXMoWy4uLm1mb0RhdGVzLHtcclxuICAgICAgICAgIGlkOiBtZm9TZWxlY3RlZC5sZW5ndGgtMSxcclxuICAgICAgICAgIG5hbWU6IG1mb1NlbGVjdGVkW21mb1NlbGVjdGVkLmxlbmd0aC0xXS52YWx1ZSxcclxuICAgICAgICAgIGRhdGU6IFwiXCIsXHJcbiAgICAgICAgICBwcmljZTogXCJcIixcclxuICAgICAgICAgIHByb2JsZW06IFwiXCJcclxuICAgICAgICB9XHJcbiAgICAgIF0pXHJcbiAgICAgIHNldE1vZGFsT3Blbih0cnVlKVxyXG4gICAgfVxyXG5cclxuICAgIGlmKGRpZmZlcmVuY2UubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgY29uc3QgbGFzdERhdGVzID0gbWZvRGF0ZXM7XHJcbiAgICAgICAgY29uc3QgcmVtb3ZlSW5kZXggPSBsYXN0RGF0ZXMuZmluZEluZGV4KGkgPT4gaS5uYW1lID09PSBkaWZmZXJlbmNlWzBdLmxhYmVsKTtcclxuICAgICAgICBsYXN0RGF0ZXMuc3BsaWNlKHJlbW92ZUluZGV4LCAxKTtcclxuICAgICAgICBzZXRNZm9EYXRlcyhsYXN0RGF0ZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKG1mb1NlbGVjdGVkLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBzZXRNZm9EYXRlcyhbXSlcclxuICAgIH1cclxuICB9O1xyXG5cclxuXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhtZm9TZWxlY3RlZClcclxuICB9LFttZm9TZWxlY3RlZF0pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhtZm9EYXRlcylcclxuICB9LFttZm9EYXRlc10pXHJcblxyXG4gIGNvbnN0IG9uU29ydEVuZCA9ICh7IG9sZEluZGV4LCBuZXdJbmRleCB9KSA9PiB7XHJcbiAgICBjb25zdCBuZXdWYWx1ZSA9IGFycmF5TW92ZShzZWxlY3RlZCwgb2xkSW5kZXgsIG5ld0luZGV4KTtcclxuICAgIHNldE1mb1NlbGVjdGVkKG5ld1ZhbHVlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtX3JlZ2lzdGVyJz5cclxuICAgICAgPGZvcm0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21mb19saXN0Jz5cclxuICAgICAgICAgIDxzcGFuPtCa0L7QvNGDINC00L7Qu9C20LXQvTo8L3NwYW4+XHJcbiAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICBvblNvcnRFbmQ9e29uU29ydEVuZH1cclxuICAgICAgICAgICAgICB2YWx1ZT17bWZvU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgaXNNdWx0aVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJtZm9cIlxyXG4gICAgICAgICAgICAgIG9wdGlvbnM9e2xpc3RNZm99XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmFzaWMtbXVsdGktc2VsZWN0XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWVQcmVmaXg9XCJzZWxlY3RcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0JLRi9Cx0LXRgNC40YLQtSDQvtC00LjQvSDQuNC70Lgg0L3QtdGB0LrQvtC70YzQutC+INCc0KTQnlwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIHsvKiA8dWw+XHJcbiAgICAgICAgICAgICAge21mb0RhdGVzLm1hcChtID0+IChcclxuICAgICAgICAgICAgICAgIDxsaT57bS5uYW1lfTwvbGk+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdWw+ICovfVxyXG4gICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICBcclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInRhYmxlLXdyYXBcIj5cclxuICAgICAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+0J3QsNC30LLQsNC90LjQtSDQnNCk0J48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD7QmtC+0LPQtNCwINCy0LfRj9C70Lg8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD7QodC60L7Qu9GM0LrQviDQtNC+0LvQttC90Ys8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD7Qn9GA0L7QsdC70LXQvNGLPC90aD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cItCd0LDQt9Cy0LDQvdC40LUg0JzQpNCeXCI+PGlucHV0IHR5cGU9J3RleHQnIGRpc2FibGVkPjwvaW5wdXQ+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cItCa0L7Qs9C00LAg0LLQt9GP0LvQuFwiPiA8SW5wdXRNYXNrXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXNrPVwiOTkuOTkuOTk5OVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXNrQ2hhcj17bnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2RhdGEnXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPSd0ZWwnXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0n0LTQtC7QvNC8LtCz0LPQs9CzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXktaW5wdXQgY29kZV9pbnB1dFwiLz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwi0KHQutC+0LvRjNC60L4g0LTQvtC70LbQvdGLXCI+PGlucHV0IHR5cGU9J251bWJlcic+PC9pbnB1dD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwi0J/RgNC+0LHQu9C10LzRi1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17bnVsbH0gZGlzYWJsZWQgc2VsZWN0ZWQ+0JLRi9Cx0LXRgNC40YLQtTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPtCc0KTQnjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPtCn0KHQmDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPtCd0L7RgtCw0YDQuNGD0YE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cItCj0YHQu9GD0LPQsFwiPtCf0L7RgdCw0LTQutCwINC90LAgQ01TIFdvcmRQcmVzczwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtbGFiZWw9XCLQntC/0LjRgdCw0L3QuNC1XCI+0KHQvtC30LTQsNC90LjQtSDRgdCw0LnRgtCwINGBINCw0LTQvNC40L0uINC/0LDQvdC10LvRjNGOPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cItCm0LXQvdCwXCI+JDMwMDA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwi0KHQutC40LTQutCwXCI+MzAlPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2Vjb25kU3RlcCJdLCJzb3VyY2VSb290IjoiIn0=