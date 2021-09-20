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
    className: "form_register",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "mfo_list",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: "\u041A\u043E\u043C\u0443 \u0434\u043E\u043B\u0436\u0435\u043D:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
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
          lineNumber: 70,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          "class": "table-wrap",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                  children: "\u0423\u0441\u043B\u0443\u0433\u0430"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                  children: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 92,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                  children: "\u0426\u0435\u043D\u0430"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 93,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                  children: "\u0421\u043A\u0438\u0434\u043A\u0430"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 94,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  "data-label": "\u0423\u0441\u043B\u0443\u0433\u0430",
                  children: "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u0430\u044F \u0432\u0435\u0440\u0441\u0442\u043A\u0430"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 99,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  "data-label": "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",
                  children: "\u0412\u0435\u0440\u0441\u0442\u043A\u0430 \u043F\u043E\u0434 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u044B"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 100,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  "data-label": "\u0426\u0435\u043D\u0430",
                  children: "$3000"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 101,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  "data-label": "\u0421\u043A\u0438\u0434\u043A\u0430",
                  children: "50%"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 102,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  "data-label": "\u0423\u0441\u043B\u0443\u0433\u0430",
                  children: "\u041F\u043E\u0441\u0430\u0434\u043A\u0430 \u043D\u0430 CMS WordPress"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 105,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  "data-label": "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",
                  children: "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0441\u0430\u0439\u0442\u0430 \u0441 \u0430\u0434\u043C\u0438\u043D. \u043F\u0430\u043D\u0435\u043B\u044C\u044E"
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
                  children: "30%"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 108,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRzZXJ2aWNlL1NlY29uZFN0ZXAuanMiXSwibmFtZXMiOlsiU2Vjb25kU3RlcCIsInNldExvYWRpbmciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwYXRobmFtZSIsInN0ZXAiLCJxdWVyeSIsInVzZVN0YXRlIiwibWZvU2VsZWN0ZWQiLCJzZXRNZm9TZWxlY3RlZCIsIm1mb0RhdGVzIiwic2V0TWZvRGF0ZXMiLCJtb2RhbE9wZW4iLCJzZXRNb2RhbE9wZW4iLCJjdXJyZW50U2VsZWN0Iiwic2V0Q3VycmVudFNlbGVjdCIsImxhc3RDaGFuZ2VzIiwib25DaGFuZ2VTZWxlY3RlZCIsImRpZmZlcmVuY2UiLCJmaWx0ZXIiLCJ4IiwiaW5jbHVkZXMiLCJsZW5ndGgiLCJpZCIsIm5hbWUiLCJ2YWx1ZSIsImRhdGUiLCJwcmljZSIsInByb2JsZW0iLCJsYXN0RGF0ZXMiLCJyZW1vdmVJbmRleCIsImZpbmRJbmRleCIsImkiLCJsYWJlbCIsInNwbGljZSIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJvblNvcnRFbmQiLCJvbGRJbmRleCIsIm5ld0luZGV4IiwibmV3VmFsdWUiLCJhcnJheU1vdmUiLCJzZWxlY3RlZCIsImxpc3RNZm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7QUFFQTs7QUFDQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFrQjtBQUFBOztBQUFBLE1BQWhCQyxVQUFnQixRQUFoQkEsVUFBZ0I7QUFDbkMsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUNBLE1BQU1DLFFBQVEsR0FBR0YsTUFBTSxDQUFDRSxRQUF4QixDQUZtQyxDQUduQzs7QUFIbUMsTUFJNUJDLElBSjRCLEdBSXBCSCxNQUFNLENBQUNJLEtBSmEsQ0FJNUJELElBSjRCOztBQUFB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MEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSEYsZUFJRTtBQUFJLGdDQUFXLHNDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFuQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW9ERCxDQXhHRDs7R0FBTTVDLFU7VUFDV0csa0Q7OztLQURYSCxVO0FBMEdOLCtEQUFlQSxVQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RseWEtZml6aWNoZXNraXgtbGljLmRjNDVhMjIyYmJiZGI0MDM1NTQ4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQge2ZpenNlcnZpY2UsIGp1cnNlcnZpY2V9IGZyb20gXCIuLi8uLi9kZWZhdWx0cy9maXpzZXJ2aWNlXCJcclxuaW1wb3J0IGNvb2tpZSwgeyByZW1vdmUgfSBmcm9tICdqcy1jb29raWUnXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgUm91dGVyLCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQgU2VsZWN0IGZyb20gJ3JlYWN0LXNlbGVjdCc7XHJcbmltcG9ydCB7IGxpc3RNZm8gfSBmcm9tIFwiLi4vLi4vZGVmYXVsdHMvbGlzdE1mb1wiXHJcbmltcG9ydCBDb2RlTW9kYWwgZnJvbSBcIi4uL3NoYXJlZC9Db2RlTW9kYWxcIlxyXG5pbXBvcnQgTWZvTW9kYWwgZnJvbSBcIi4uL3NoYXJlZC9NZm9Nb2RhbFwiXHJcbi8vIGltcG9ydCBNZm9MaXN0VGFibGUgZnJvbSBcIi4vTWZvTGlzdFRhYmxlXCJcclxuXHJcbi8vIGltcG9ydCAncmVhY3Qtc2VsZWN0L2Rpc3QvcmVhY3Qtc2VsZWN0LmNzcyc7XHJcbmNvbnN0IFNlY29uZFN0ZXAgPSAoe3NldExvYWRpbmd9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBwYXRobmFtZSA9IHJvdXRlci5wYXRobmFtZVxyXG4gIC8vIGNvbnN0IHtpZH0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCB7c3RlcH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3QgW21mb1NlbGVjdGVkLHNldE1mb1NlbGVjdGVkXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbWZvRGF0ZXMsc2V0TWZvRGF0ZXNdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW21vZGFsT3Blbiwgc2V0TW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtjdXJyZW50U2VsZWN0LCBzZXRDdXJyZW50U2VsZWN0XSA9IHVzZVN0YXRlKHt9KVxyXG4gIGNvbnN0IGxhc3RDaGFuZ2VzID0gbWZvU2VsZWN0ZWRcclxuICBjb25zdCBvbkNoYW5nZVNlbGVjdGVkID0gbWZvU2VsZWN0ZWQgPT4ge1xyXG4gICAgbGV0IGRpZmZlcmVuY2UgPSBsYXN0Q2hhbmdlcy5maWx0ZXIoeCA9PiAhbWZvU2VsZWN0ZWQuaW5jbHVkZXMoeCkpO1xyXG4gICAgc2V0TWZvU2VsZWN0ZWQobWZvU2VsZWN0ZWQpO1xyXG4gICAgaWYobWZvU2VsZWN0ZWQubGVuZ3RoID4wICYmIGRpZmZlcmVuY2UubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHNldE1mb0RhdGVzKFsuLi5tZm9EYXRlcyx7XHJcbiAgICAgICAgICBpZDogbWZvU2VsZWN0ZWQubGVuZ3RoLTEsXHJcbiAgICAgICAgICBuYW1lOiBtZm9TZWxlY3RlZFttZm9TZWxlY3RlZC5sZW5ndGgtMV0udmFsdWUsXHJcbiAgICAgICAgICBkYXRlOiBcIlwiLFxyXG4gICAgICAgICAgcHJpY2U6IFwiXCIsXHJcbiAgICAgICAgICBwcm9ibGVtOiBcIlwiXHJcbiAgICAgICAgfVxyXG4gICAgICBdKVxyXG4gICAgICBzZXRNb2RhbE9wZW4odHJ1ZSlcclxuICAgIH1cclxuXHJcbiAgICBpZihkaWZmZXJlbmNlLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgIGNvbnN0IGxhc3REYXRlcyA9IG1mb0RhdGVzO1xyXG4gICAgICAgIGNvbnN0IHJlbW92ZUluZGV4ID0gbGFzdERhdGVzLmZpbmRJbmRleChpID0+IGkubmFtZSA9PT0gZGlmZmVyZW5jZVswXS5sYWJlbCk7XHJcbiAgICAgICAgbGFzdERhdGVzLnNwbGljZShyZW1vdmVJbmRleCwgMSk7XHJcbiAgICAgICAgc2V0TWZvRGF0ZXMobGFzdERhdGVzKTtcclxuICAgIH1cclxuXHJcbiAgICBpZihtZm9TZWxlY3RlZC5sZW5ndGggPT09IDApIHtcclxuICAgICAgc2V0TWZvRGF0ZXMoW10pXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcblxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2cobWZvU2VsZWN0ZWQpXHJcbiAgfSxbbWZvU2VsZWN0ZWRdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2cobWZvRGF0ZXMpXHJcbiAgfSxbbWZvRGF0ZXNdKVxyXG5cclxuICBjb25zdCBvblNvcnRFbmQgPSAoeyBvbGRJbmRleCwgbmV3SW5kZXggfSkgPT4ge1xyXG4gICAgY29uc3QgbmV3VmFsdWUgPSBhcnJheU1vdmUoc2VsZWN0ZWQsIG9sZEluZGV4LCBuZXdJbmRleCk7XHJcbiAgICBzZXRNZm9TZWxlY3RlZChuZXdWYWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtX3JlZ2lzdGVyJz5cclxuICAgICAgPGZvcm0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21mb19saXN0Jz5cclxuICAgICAgICAgIDxzcGFuPtCa0L7QvNGDINC00L7Qu9C20LXQvTo8L3NwYW4+XHJcbiAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICBvblNvcnRFbmQ9e29uU29ydEVuZH1cclxuICAgICAgICAgICAgICB2YWx1ZT17bWZvU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgaXNNdWx0aVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJtZm9cIlxyXG4gICAgICAgICAgICAgIG9wdGlvbnM9e2xpc3RNZm99XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmFzaWMtbXVsdGktc2VsZWN0XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWVQcmVmaXg9XCJzZWxlY3RcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0JLRi9Cx0LXRgNC40YLQtSDQvtC00LjQvSDQuNC70Lgg0L3QtdGB0LrQvtC70YzQutC+INCc0KTQnlwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIHsvKiA8dWw+XHJcbiAgICAgICAgICAgICAge21mb0RhdGVzLm1hcChtID0+IChcclxuICAgICAgICAgICAgICAgIDxsaT57bS5uYW1lfTwvbGk+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdWw+ICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGUtd3JhcFwiPlxyXG4gICAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD7Qo9GB0LvRg9Cz0LA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD7QntC/0LjRgdCw0L3QuNC1PC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+0KbQtdC90LA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD7QodC60LjQtNC60LA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwi0KPRgdC70YPQs9CwXCI+0JzQvtCx0LjQu9GM0L3QsNGPINCy0LXRgNGB0YLQutCwPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cItCe0L/QuNGB0LDQvdC40LVcIj7QktC10YDRgdGC0LrQsCDQv9C+0LQg0YLQtdC70LXRhNC+0L3RizwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtbGFiZWw9XCLQptC10L3QsFwiPiQzMDAwPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cItCh0LrQuNC00LrQsFwiPjUwJTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cItCj0YHQu9GD0LPQsFwiPtCf0L7RgdCw0LTQutCwINC90LAgQ01TIFdvcmRQcmVzczwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtbGFiZWw9XCLQntC/0LjRgdCw0L3QuNC1XCI+0KHQvtC30LTQsNC90LjQtSDRgdCw0LnRgtCwINGBINCw0LTQvNC40L0uINC/0LDQvdC10LvRjNGOPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1sYWJlbD1cItCm0LXQvdCwXCI+JDMwMDA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWxhYmVsPVwi0KHQutC40LTQutCwXCI+MzAlPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWNvbmRTdGVwIl0sInNvdXJjZVJvb3QiOiIifQ==