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
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          children: mfoDates.map(function (m) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: m.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRzZXJ2aWNlL1NlY29uZFN0ZXAuanMiXSwibmFtZXMiOlsiU2Vjb25kU3RlcCIsInNldExvYWRpbmciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwYXRobmFtZSIsInN0ZXAiLCJxdWVyeSIsInVzZVN0YXRlIiwibWZvU2VsZWN0ZWQiLCJzZXRNZm9TZWxlY3RlZCIsIm1mb0RhdGVzIiwic2V0TWZvRGF0ZXMiLCJtb2RhbE9wZW4iLCJzZXRNb2RhbE9wZW4iLCJjdXJyZW50U2VsZWN0Iiwic2V0Q3VycmVudFNlbGVjdCIsImxhc3RDaGFuZ2VzIiwib25DaGFuZ2VTZWxlY3RlZCIsImRpZmZlcmVuY2UiLCJmaWx0ZXIiLCJ4IiwiaW5jbHVkZXMiLCJsZW5ndGgiLCJpZCIsIm5hbWUiLCJ2YWx1ZSIsImRhdGUiLCJwcmljZSIsInByb2JsZW0iLCJsYXN0RGF0ZXMiLCJyZW1vdmVJbmRleCIsImZpbmRJbmRleCIsImkiLCJsYWJlbCIsInNwbGljZSIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJvblNvcnRFbmQiLCJvbGRJbmRleCIsIm5ld0luZGV4IiwibmV3VmFsdWUiLCJhcnJheU1vdmUiLCJzZWxlY3RlZCIsImxpc3RNZm8iLCJtYXAiLCJtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBO0FBRUE7O0FBQ0EsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBa0I7QUFBQTs7QUFBQSxNQUFoQkMsVUFBZ0IsUUFBaEJBLFVBQWdCO0FBQ25DLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFDQSxNQUFNQyxRQUFRLEdBQUdGLE1BQU0sQ0FBQ0UsUUFBeEIsQ0FGbUMsQ0FHbkM7O0FBSG1DLE1BSTVCQyxJQUo0QixHQUlwQkgsTUFBTSxDQUFDSSxLQUphLENBSTVCRCxJ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LGtCQUFRLEVBQUVTLGdCQUhaO0FBSUUsaUJBQU8sTUFKVDtBQUtFLGNBQUksRUFBQyxLQUxQO0FBTUUsaUJBQU8sRUFBRTJCLHNEQU5YO0FBT0UsbUJBQVMsRUFBQyxvQkFQWjtBQVFFLHlCQUFlLEVBQUMsUUFSbEI7QUFTRSxxQkFBVyxFQUFDO0FBVGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSixlQWFJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBYkosZUFjSTtBQUFBLG9CQUNHbEMsUUFBUSxDQUFDbUMsR0FBVCxDQUFhLFVBQUFDLENBQUM7QUFBQSxnQ0FDYjtBQUFBLHdCQUFLQSxDQUFDLENBQUN0QjtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRGE7QUFBQSxXQUFkO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFkSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMkJELENBL0VEOztHQUFNeEIsVTtVQUNXRyxrRDs7O0tBRFhILFU7QUFpRk4sK0RBQWVBLFVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGx5YS1maXppY2hlc2tpeC1saWMuZmZhMTBjMWE0YjRlNGViOTQyNjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7Zml6c2VydmljZSwganVyc2VydmljZX0gZnJvbSBcIi4uLy4uL2RlZmF1bHRzL2ZpenNlcnZpY2VcIlxyXG5pbXBvcnQgY29va2llLCB7IHJlbW92ZSB9IGZyb20gJ2pzLWNvb2tpZSdcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCBSb3V0ZXIsIHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCBTZWxlY3QgZnJvbSAncmVhY3Qtc2VsZWN0JztcclxuaW1wb3J0IHsgbGlzdE1mbyB9IGZyb20gXCIuLi8uLi9kZWZhdWx0cy9saXN0TWZvXCJcclxuaW1wb3J0IENvZGVNb2RhbCBmcm9tIFwiLi4vc2hhcmVkL0NvZGVNb2RhbFwiXHJcbmltcG9ydCBNZm9Nb2RhbCBmcm9tIFwiLi4vc2hhcmVkL01mb01vZGFsXCJcclxuLy8gaW1wb3J0IE1mb0xpc3RUYWJsZSBmcm9tIFwiLi9NZm9MaXN0VGFibGVcIlxyXG5cclxuLy8gaW1wb3J0ICdyZWFjdC1zZWxlY3QvZGlzdC9yZWFjdC1zZWxlY3QuY3NzJztcclxuY29uc3QgU2Vjb25kU3RlcCA9ICh7c2V0TG9hZGluZ30pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHBhdGhuYW1lID0gcm91dGVyLnBhdGhuYW1lXHJcbiAgLy8gY29uc3Qge2lkfSA9IHJvdXRlci5xdWVyeVxyXG4gIGNvbnN0IHtzdGVwfSA9IHJvdXRlci5xdWVyeTtcclxuICBjb25zdCBbbWZvU2VsZWN0ZWQsc2V0TWZvU2VsZWN0ZWRdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFttZm9EYXRlcyxzZXRNZm9EYXRlc10gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbbW9kYWxPcGVuLCBzZXRNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2N1cnJlbnRTZWxlY3QsIHNldEN1cnJlbnRTZWxlY3RdID0gdXNlU3RhdGUoe30pXHJcbiAgY29uc3QgbGFzdENoYW5nZXMgPSBtZm9TZWxlY3RlZFxyXG4gIGNvbnN0IG9uQ2hhbmdlU2VsZWN0ZWQgPSBtZm9TZWxlY3RlZCA9PiB7XHJcbiAgICBsZXQgZGlmZmVyZW5jZSA9IGxhc3RDaGFuZ2VzLmZpbHRlcih4ID0+ICFtZm9TZWxlY3RlZC5pbmNsdWRlcyh4KSk7XHJcbiAgICBzZXRNZm9TZWxlY3RlZChtZm9TZWxlY3RlZCk7XHJcbiAgICBpZihtZm9TZWxlY3RlZC5sZW5ndGggPjAgJiYgZGlmZmVyZW5jZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgc2V0TWZvRGF0ZXMoWy4uLm1mb0RhdGVzLHtcclxuICAgICAgICAgIGlkOiBtZm9TZWxlY3RlZC5sZW5ndGgtMSxcclxuICAgICAgICAgIG5hbWU6IG1mb1NlbGVjdGVkW21mb1NlbGVjdGVkLmxlbmd0aC0xXS52YWx1ZSxcclxuICAgICAgICAgIGRhdGU6IFwiXCIsXHJcbiAgICAgICAgICBwcmljZTogXCJcIixcclxuICAgICAgICAgIHByb2JsZW06IFwiXCJcclxuICAgICAgICB9XHJcbiAgICAgIF0pXHJcbiAgICAgIHNldE1vZGFsT3Blbih0cnVlKVxyXG4gICAgfVxyXG5cclxuICAgIGlmKGRpZmZlcmVuY2UubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgY29uc3QgbGFzdERhdGVzID0gbWZvRGF0ZXM7XHJcbiAgICAgICAgY29uc3QgcmVtb3ZlSW5kZXggPSBsYXN0RGF0ZXMuZmluZEluZGV4KGkgPT4gaS5uYW1lID09PSBkaWZmZXJlbmNlWzBdLmxhYmVsKTtcclxuICAgICAgICBsYXN0RGF0ZXMuc3BsaWNlKHJlbW92ZUluZGV4LCAxKTtcclxuICAgICAgICBzZXRNZm9EYXRlcyhsYXN0RGF0ZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKG1mb1NlbGVjdGVkLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBzZXRNZm9EYXRlcyhbXSlcclxuICAgIH1cclxuICB9O1xyXG5cclxuXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhtZm9TZWxlY3RlZClcclxuICB9LFttZm9TZWxlY3RlZF0pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhtZm9EYXRlcylcclxuICB9LFttZm9EYXRlc10pXHJcblxyXG4gIGNvbnN0IG9uU29ydEVuZCA9ICh7IG9sZEluZGV4LCBuZXdJbmRleCB9KSA9PiB7XHJcbiAgICBjb25zdCBuZXdWYWx1ZSA9IGFycmF5TW92ZShzZWxlY3RlZCwgb2xkSW5kZXgsIG5ld0luZGV4KTtcclxuICAgIHNldE1mb1NlbGVjdGVkKG5ld1ZhbHVlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2Zvcm1fcmVnaXN0ZXInPlxyXG4gICAgICA8Zm9ybT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWZvX2xpc3QnPlxyXG4gICAgICAgICAgPHNwYW4+0JrQvtC80YMg0LTQvtC70LbQtdC9Ojwvc3Bhbj5cclxuICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgIG9uU29ydEVuZD17b25Tb3J0RW5kfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXttZm9TZWxlY3RlZH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VTZWxlY3RlZH1cclxuICAgICAgICAgICAgICBpc011bHRpXHJcbiAgICAgICAgICAgICAgbmFtZT1cIm1mb1wiXHJcbiAgICAgICAgICAgICAgb3B0aW9ucz17bGlzdE1mb31cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiYXNpYy1tdWx0aS1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZVByZWZpeD1cInNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQktGL0LHQtdGA0LjRgtC1INC+0LTQuNC9INC40LvQuCDQvdC10YHQutC+0LvRjNC60L4g0JzQpNCeXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgIHttZm9EYXRlcy5tYXAobSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bGk+e20ubmFtZX08L2xpPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWNvbmRTdGVwIl0sInNvdXJjZVJvb3QiOiIifQ==