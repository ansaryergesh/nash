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
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              "data-label": "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u041C\u0424\u041E",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                type: "text"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 51
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 21
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              "data-label": "\u041A\u043E\u0433\u0434\u0430 \u0432\u0437\u044F\u043B\u0438",
              children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(InputMask, {
                mask: "99.99.9999",
                maskChar: null,
                name: "data",
                type: "tel",
                placeholder: "\u0434\u0434.\u043C\u043C.\u0433\u0433\u0433\u0433",
                className: "my-input code_input"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 51
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 21
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              "data-label": "\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u0434\u043E\u043B\u0436\u043D\u044B",
              children: "$3000"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 21
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              "data-label": "\u041F\u0440\u043E\u0431\u043B\u0435\u043C\u044B",
              children: "50%"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
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
              lineNumber: 117,
              columnNumber: 21
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              "data-label": "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",
              children: "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0441\u0430\u0439\u0442\u0430 \u0441 \u0430\u0434\u043C\u0438\u043D. \u043F\u0430\u043D\u0435\u043B\u044C\u044E"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 21
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              "data-label": "\u0426\u0435\u043D\u0430",
              children: "$3000"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 21
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
              "data-label": "\u0421\u043A\u0438\u0434\u043A\u0430",
              children: "30%"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 21
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 116,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRzZXJ2aWNlL1NlY29uZFN0ZXAuanMiXSwibmFtZXMiOlsiU2Vjb25kU3RlcCIsInNldExvYWRpbmciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwYXRobmFtZSIsInN0ZXAiLCJxdWVyeSIsInVzZVN0YXRlIiwibWZvU2VsZWN0ZWQiLCJzZXRNZm9TZWxlY3RlZCIsIm1mb0RhdGVzIiwic2V0TWZvRGF0ZXMiLCJtb2RhbE9wZW4iLCJzZXRNb2RhbE9wZW4iLCJjdXJyZW50U2VsZWN0Iiwic2V0Q3VycmVudFNlbGVjdCIsImxhc3RDaGFuZ2VzIiwib25DaGFuZ2VTZWxlY3RlZCIsImRpZmZlcmVuY2UiLCJmaWx0ZXIiLCJ4IiwiaW5jbHVkZXMiLCJsZW5ndGgiLCJpZCIsIm5hbWUiLCJ2YWx1ZSIsImRhdGUiLCJwcmljZSIsInByb2JsZW0iLCJsYXN0RGF0ZXMiLCJyZW1vdmVJbmRleCIsImZpbmRJbmRleCIsImkiLCJsYWJlbCIsInNwbGljZSIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJvblNvcnRFbmQiLCJvbGRJbmRleCIsIm5ld0luZGV4IiwibmV3VmFsdWUiLCJhcnJheU1vdmUiLCJzZWxlY3RlZCIsImxpc3RNZm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7QUFFQTs7QUFDQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFrQjtBQUFBOztBQUFBLE1BQWhCQyxVQUFnQixRQUFoQkEsVUFBZ0I7QUFDbkMsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUNBLE1BQU1DLFFBQVEsR0FBR0YsTUFBTSxDQUFDRSxRQUF4QixDQUZtQyxDQUduQzs7QUFIbUMsTUFJNUJDLElBSjRCLEdBSXBCSCxNQUFNLENBQUNJLEtBSmEsQ0FJNUJELElBSjRCOztBQUFB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QTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRixlQVNFO0FBQUksNEJBQVcsaUZBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVEYsZUFVRTtBQUFJLDRCQUFXLGtEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQWFFO0FBQUEsb0NBQ0U7QUFBSSw0QkFBVyxzQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQUksNEJBQVcsa0RBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkYsZUFHRTtBQUFJLDRCQUFXLDBCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhGLGVBSUU7QUFBSSw0QkFBVyxzQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURWO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUEzQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE4REQsQ0FsSEQ7O0dBQU01QyxVO1VBQ1dHLGtEOzs7S0FEWEgsVTtBQW9ITiwrREFBZUEsVUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kbHlhLWZpemljaGVza2l4LWxpYy5lYmQzNDY0NmM5NDY5Njk4NGIyYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHtmaXpzZXJ2aWNlLCBqdXJzZXJ2aWNlfSBmcm9tIFwiLi4vLi4vZGVmYXVsdHMvZml6c2VydmljZVwiXHJcbmltcG9ydCBjb29raWUsIHsgcmVtb3ZlIH0gZnJvbSAnanMtY29va2llJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IFJvdXRlciwge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuaW1wb3J0IFNlbGVjdCBmcm9tICdyZWFjdC1zZWxlY3QnO1xyXG5pbXBvcnQgeyBsaXN0TWZvIH0gZnJvbSBcIi4uLy4uL2RlZmF1bHRzL2xpc3RNZm9cIlxyXG5pbXBvcnQgQ29kZU1vZGFsIGZyb20gXCIuLi9zaGFyZWQvQ29kZU1vZGFsXCJcclxuaW1wb3J0IE1mb01vZGFsIGZyb20gXCIuLi9zaGFyZWQvTWZvTW9kYWxcIlxyXG4vLyBpbXBvcnQgTWZvTGlzdFRhYmxlIGZyb20gXCIuL01mb0xpc3RUYWJsZVwiXHJcblxyXG4vLyBpbXBvcnQgJ3JlYWN0LXNlbGVjdC9kaXN0L3JlYWN0LXNlbGVjdC5jc3MnO1xyXG5jb25zdCBTZWNvbmRTdGVwID0gKHtzZXRMb2FkaW5nfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgcGF0aG5hbWUgPSByb3V0ZXIucGF0aG5hbWVcclxuICAvLyBjb25zdCB7aWR9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgY29uc3Qge3N0ZXB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IFttZm9TZWxlY3RlZCxzZXRNZm9TZWxlY3RlZF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW21mb0RhdGVzLHNldE1mb0RhdGVzXSA9IHVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFttb2RhbE9wZW4sIHNldE1vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbY3VycmVudFNlbGVjdCwgc2V0Q3VycmVudFNlbGVjdF0gPSB1c2VTdGF0ZSh7fSlcclxuICBjb25zdCBsYXN0Q2hhbmdlcyA9IG1mb1NlbGVjdGVkXHJcbiAgY29uc3Qgb25DaGFuZ2VTZWxlY3RlZCA9IG1mb1NlbGVjdGVkID0+IHtcclxuICAgIGxldCBkaWZmZXJlbmNlID0gbGFzdENoYW5nZXMuZmlsdGVyKHggPT4gIW1mb1NlbGVjdGVkLmluY2x1ZGVzKHgpKTtcclxuICAgIHNldE1mb1NlbGVjdGVkKG1mb1NlbGVjdGVkKTtcclxuICAgIGlmKG1mb1NlbGVjdGVkLmxlbmd0aCA+MCAmJiBkaWZmZXJlbmNlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBzZXRNZm9EYXRlcyhbLi4ubWZvRGF0ZXMse1xyXG4gICAgICAgICAgaWQ6IG1mb1NlbGVjdGVkLmxlbmd0aC0xLFxyXG4gICAgICAgICAgbmFtZTogbWZvU2VsZWN0ZWRbbWZvU2VsZWN0ZWQubGVuZ3RoLTFdLnZhbHVlLFxyXG4gICAgICAgICAgZGF0ZTogXCJcIixcclxuICAgICAgICAgIHByaWNlOiBcIlwiLFxyXG4gICAgICAgICAgcHJvYmxlbTogXCJcIlxyXG4gICAgICAgIH1cclxuICAgICAgXSlcclxuICAgICAgc2V0TW9kYWxPcGVuKHRydWUpXHJcbiAgICB9XHJcblxyXG4gICAgaWYoZGlmZmVyZW5jZS5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICBjb25zdCBsYXN0RGF0ZXMgPSBtZm9EYXRlcztcclxuICAgICAgICBjb25zdCByZW1vdmVJbmRleCA9IGxhc3REYXRlcy5maW5kSW5kZXgoaSA9PiBpLm5hbWUgPT09IGRpZmZlcmVuY2VbMF0ubGFiZWwpO1xyXG4gICAgICAgIGxhc3REYXRlcy5zcGxpY2UocmVtb3ZlSW5kZXgsIDEpO1xyXG4gICAgICAgIHNldE1mb0RhdGVzKGxhc3REYXRlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYobWZvU2VsZWN0ZWQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHNldE1mb0RhdGVzKFtdKVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG5cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKG1mb1NlbGVjdGVkKVxyXG4gIH0sW21mb1NlbGVjdGVkXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKG1mb0RhdGVzKVxyXG4gIH0sW21mb0RhdGVzXSlcclxuXHJcbiAgY29uc3Qgb25Tb3J0RW5kID0gKHsgb2xkSW5kZXgsIG5ld0luZGV4IH0pID0+IHtcclxuICAgIGNvbnN0IG5ld1ZhbHVlID0gYXJyYXlNb3ZlKHNlbGVjdGVkLCBvbGRJbmRleCwgbmV3SW5kZXgpO1xyXG4gICAgc2V0TWZvU2VsZWN0ZWQobmV3VmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2Zvcm1fcmVnaXN0ZXInPlxyXG4gICAgICA8Zm9ybT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWZvX2xpc3QnPlxyXG4gICAgICAgICAgPHNwYW4+0JrQvtC80YMg0LTQvtC70LbQtdC9Ojwvc3Bhbj5cclxuICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgIG9uU29ydEVuZD17b25Tb3J0RW5kfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXttZm9TZWxlY3RlZH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VTZWxlY3RlZH1cclxuICAgICAgICAgICAgICBpc011bHRpXHJcbiAgICAgICAgICAgICAgbmFtZT1cIm1mb1wiXHJcbiAgICAgICAgICAgICAgb3B0aW9ucz17bGlzdE1mb31cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiYXNpYy1tdWx0aS1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZVByZWZpeD1cInNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQktGL0LHQtdGA0LjRgtC1INC+0LTQuNC9INC40LvQuCDQvdC10YHQutC+0LvRjNC60L4g0JzQpNCeXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgey8qIDx1bD5cclxuICAgICAgICAgICAgICB7bWZvRGF0ZXMubWFwKG0gPT4gKFxyXG4gICAgICAgICAgICAgICAgPGxpPnttLm5hbWV9PC9saT5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC91bD4gKi99XHJcbiAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwidGFibGUtd3JhcFwiPlxyXG4gICAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD7QndCw0LfQstCw0L3QuNC1INCc0KTQnjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPtCa0L7Qs9C00LAg0LLQt9GP0LvQuDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPtCh0LrQvtC70YzQutC+INC00L7Qu9C20L3RizwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPtCf0YDQvtCx0LvQtdC80Ys8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwi0J3QsNC30LLQsNC90LjQtSDQnNCk0J5cIj48aW5wdXQgdHlwZT0ndGV4dCc+PC9pbnB1dD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwi0JrQvtCz0LTQsCDQstC30Y/Qu9C4XCI+IDxJbnB1dE1hc2tcclxuICAgICAgICAgICAgICBtYXNrPVwiOTkuOTkuOTk5OVwiXHJcbiAgICAgICAgICAgICAgbWFza0NoYXI9e251bGx9XHJcbiAgICAgICAgICAgICAgbmFtZT0nZGF0YSdcclxuICAgICAgICAgICAgICB0eXBlPSd0ZWwnXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J9C00LQu0LzQvC7Qs9Cz0LPQsydcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteS1pbnB1dCBjb2RlX2lucHV0XCIvPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtbGFiZWw9XCLQodC60L7Qu9GM0LrQviDQtNC+0LvQttC90YtcIj4kMzAwMDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtbGFiZWw9XCLQn9GA0L7QsdC70LXQvNGLXCI+NTAlPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwi0KPRgdC70YPQs9CwXCI+0J/QvtGB0LDQtNC60LAg0L3QsCBDTVMgV29yZFByZXNzPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cItCe0L/QuNGB0LDQvdC40LVcIj7QodC+0LfQtNCw0L3QuNC1INGB0LDQudGC0LAg0YEg0LDQtNC80LjQvS4g0L/QsNC90LXQu9GM0Y48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwi0KbQtdC90LBcIj4kMzAwMDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtbGFiZWw9XCLQodC60LjQtNC60LBcIj4zMCU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWNvbmRTdGVwIl0sInNvdXJjZVJvb3QiOiIifQ==