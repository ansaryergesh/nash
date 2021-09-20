self["webpackHotUpdate_N_E"]("pages/dlya-fizicheskix-lic",{

/***/ "./components/shared/MfoModal.js":
/*!***************************************!*\
  !*** ./components/shared/MfoModal.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _defaults_fizservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../defaults/fizservice */ "./defaults/fizservice.js");
/* harmony import */ var _modal_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modal/Modal */ "./components/modal/Modal.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-input-mask */ "./node_modules/react-input-mask/index.js");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\job\\nashcompany\\components\\shared\\MfoModal.js",
    _this = undefined,
    _s = $RefreshSig$();







var MfoModal = function MfoModal(_ref) {
  _s();

  var isModalOpen = _ref.isModalOpen,
      mfoList = _ref.mfoList,
      mfoDates = _ref.mfoDates,
      setMfoDates = _ref.setMfoDates;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();

  var changeCode = function changeCode(e) {
    setCode(e.target.value);
    var value = e.target.value.replace(/ /g, "");

    if (value.length === 4) {
      setTimeout(function () {
        onFirstStep(e.target.value); // console.log('hello')
      }, 10);
    }
  };

  var today = function today() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0 so need to add 1 to make it 1!

    var yyyy = today.getFullYear();

    if (dd < 10) {
      dd = '0' + dd;
    }

    if (mm < 10) {
      mm = '0' + mm;
    }

    today = yyyy + '-' + mm + '-' + dd;
    return today;
  };

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    if (isModalOpen) {// const input = document.querySelector(".code_input");
      // input.focus()
    }
  }, [isModalOpen]);

  var _onChange = function onChange(e) {
    if (e.target.name === 'data') {
      var finalMfoDate = mfoDates[mfoList.id].date = e.target.value; // setMfoDates(finalMfoDate)

      console.log(finalMfoDate);
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modal_Modal__WEBPACK_IMPORTED_MODULE_2__.default, {
      isOpen: isModalOpen,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "modalka_content",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: "\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0432\u0441\u0435 \u043F\u043E\u043B\u044F"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, _this), isModalOpen && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
          className: "form_register",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "text-center blueText",
            children: mfoList.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            children: "\u041A\u043E\u0433\u0434\u0430 \u0431\u0440\u0430\u043B\u0438"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_input_mask__WEBPACK_IMPORTED_MODULE_4___default()), {
            mask: "99.99.9999",
            maskChar: null,
            name: "data",
            type: "tel",
            value: mfoDates[mfoList.id].date,
            onChange: function onChange(e) {
              return _onChange(e);
            },
            placeholder: "\u0434\u0434.\u043C\u043C.\u0433\u0433\u0433\u0433",
            className: "my-input code_input"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            children: "\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u0434\u043E\u043B\u0436\u043D\u044B"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "number"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
              value: null,
              disabled: true,
              selected: true,
              children: "\u041A\u0430\u043A\u0438\u0435 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
              children: "\u041C\u0424\u041E"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
              children: "\u0427\u0421\u0418"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
              children: "\u041D\u043E\u0442\u0430\u0440\u0438\u0443\u0441"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "mfoBtns",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "blackBtn",
            children: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "redBtn",
            children: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0438 \u0437\u0430\u043A\u0440\u044B\u0442\u044C"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 5
  }, _this);
};

_s(MfoModal, "vQduR7x+OPXj6PSmJyFnf+hU7bg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];
});

_c = MfoModal;
/* harmony default export */ __webpack_exports__["default"] = (MfoModal);

var _c;

$RefreshReg$(_c, "MfoModal");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvTWZvTW9kYWwuanMiXSwibmFtZXMiOlsiTWZvTW9kYWwiLCJpc01vZGFsT3BlbiIsIm1mb0xpc3QiLCJtZm9EYXRlcyIsInNldE1mb0RhdGVzIiwicm91dGVyIiwidXNlUm91dGVyIiwiY2hhbmdlQ29kZSIsImUiLCJzZXRDb2RlIiwidGFyZ2V0IiwidmFsdWUiLCJyZXBsYWNlIiwibGVuZ3RoIiwic2V0VGltZW91dCIsIm9uRmlyc3RTdGVwIiwidG9kYXkiLCJEYXRlIiwiZGQiLCJnZXREYXRlIiwibW0iLCJnZXRNb250aCIsInl5eXkiLCJnZXRGdWxsWWVhciIsInVzZUVmZmVjdCIsIm9uQ2hhbmdlIiwibmFtZSIsImZpbmFsTWZvRGF0ZSIsImlkIiwiZGF0ZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FLWDtBQUFBOztBQUFBLE1BSkpDLFdBSUksUUFKSkEsV0FJSTtBQUFBLE1BSEpDLE9BR0ksUUFISkEsT0FHSTtBQUFBLE1BRkpDLFFBRUksUUFGSkEsUUFFSTtBQUFBLE1BREpDLFdBQ0ksUUFESkEsV0FDSTtBQUNKLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7O0FBR0EsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3hCQyxXQUFPLENBQUNELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFWLENBQVA7QUFDQSxRQUFNQSxLQUFLLEdBQUdILENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFULENBQWVDLE9BQWYsQ0FBdUIsSUFBdkIsRUFBNEIsRUFBNUIsQ0FBZDs7QUFDQSxRQUFHRCxLQUFLLENBQUNFLE1BQU4sS0FBaUIsQ0FBcEIsRUFBdUI7QUFDckJDLGdCQUFVLENBQUMsWUFBTTtBQUNmQyxtQkFBVyxDQUFDUCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsS0FBVixDQUFYLENBRGUsQ0FFZjtBQUNELE9BSFMsRUFHUixFQUhRLENBQVY7QUFJRDtBQUNGLEdBVEQ7O0FBV0EsTUFBTUssS0FBSyxHQUFHLGlCQUFNO0FBQ2xCLFFBQUlBLEtBQUssR0FBRyxJQUFJQyxJQUFKLEVBQVo7QUFDQSxRQUFJQyxFQUFFLEdBQUdGLEtBQUssQ0FBQ0csT0FBTixFQUFUO0FBQ0EsUUFBSUMsRUFBRSxHQUFHSixLQUFLLENBQUNLLFFBQU4sS0FBaUIsQ0FBMUIsQ0FIa0IsQ0FHVzs7QUFDN0IsUUFBSUMsSUFBSSxHQUFHTixLQUFLLENBQUNPLFdBQU4sRUFBWDs7QUFDQSxRQUFHTCxFQUFFLEdBQUMsRUFBTixFQUFTO0FBQ1BBLFFBQUUsR0FBQyxNQUFJQSxFQUFQO0FBQ0Q7O0FBQ0QsUUFBR0UsRUFBRSxHQUFDLEVBQU4sRUFBUztBQUNQQSxRQUFFLEdBQUMsTUFBSUEsRUFBUDtBQUNEOztBQUVESixTQUFLLEdBQUdNLElBQUksR0FBQyxHQUFMLEdBQVNGLEVBQVQsR0FBWSxHQUFaLEdBQWdCRixFQUF4QjtBQUNBLFdBQU9GLEtBQVA7QUFDRCxHQWREOztBQWVBUSxrREFBUyxDQUFDLFlBQU07QUFDZCxRQUFHdkIsV0FBSCxFQUFnQixDQUNkO0FBQ0E7QUFDRDtBQUNGLEdBTFEsRUFLTixDQUFDQSxXQUFELENBTE0sQ0FBVDs7QUFPQSxNQUFNd0IsU0FBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ2pCLENBQUQsRUFBTztBQUN0QixRQUFHQSxDQUFDLENBQUNFLE1BQUYsQ0FBU2dCLElBQVQsS0FBa0IsTUFBckIsRUFBNkI7QUFDM0IsVUFBTUMsWUFBWSxHQUFHeEIsUUFBUSxDQUFDRCxPQUFPLENBQUMwQixFQUFULENBQVIsQ0FBcUJDLElBQXJCLEdBQTRCckIsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEtBQTFELENBRDJCLENBRTNCOztBQUNBbUIsYUFBTyxDQUFDQyxHQUFSLENBQVlKLFlBQVo7QUFDRDtBQUNGLEdBTkQ7O0FBT0Esc0JBQ0U7QUFBQSwyQkFDRSw4REFBQyxpREFBRDtBQUFPLFlBQU0sRUFBRTFCLFdBQWY7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsaUJBQWY7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQUVHQSxXQUFXLGlCQUNaO0FBQU0sbUJBQVMsRUFBQyxlQUFoQjtBQUFBLGtDQUNFO0FBQU0scUJBQVMsRUFBQyxzQkFBaEI7QUFBQSxzQkFBd0NDLE9BQU8sQ0FBQ3dCO0FBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRixlQUtFLDhEQUFDLHlEQUFEO0FBQ0UsZ0JBQUksRUFBQyxZQURQO0FBRUUsb0JBQVEsRUFBRSxJQUZaO0FBR0UsZ0JBQUksRUFBQyxNQUhQO0FBSUUsZ0JBQUksRUFBQyxLQUpQO0FBS0UsaUJBQUssRUFBRXZCLFFBQVEsQ0FBQ0QsT0FBTyxDQUFDMEIsRUFBVCxDQUFSLENBQXFCQyxJQUw5QjtBQU1FLG9CQUFRLEVBQUUsa0JBQUFyQixDQUFDO0FBQUEscUJBQUdpQixTQUFRLENBQUNqQixDQUFELENBQVg7QUFBQSxhQU5iO0FBT0UsdUJBQVcsRUFBQyxvREFQZDtBQVFFLHFCQUFTLEVBQUM7QUFSWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGLGVBY0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBZEYsZUFlRTtBQUFPLGdCQUFJLEVBQUM7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWZGLGVBZ0JFO0FBQUEsb0NBQ0U7QUFBUSxtQkFBSyxFQUFFLElBQWY7QUFBcUIsc0JBQVEsTUFBN0I7QUFBOEIsc0JBQVEsTUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRixlQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhGLGVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEYsZUEyQkU7QUFBSyxtQkFBUyxFQUFDLFNBQWY7QUFBQSxrQ0FFQTtBQUFRLHFCQUFTLEVBQUMsVUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkEsZUFHQTtBQUFRLHFCQUFTLEVBQUMsUUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTNCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNkNELENBOUZEOztHQUFNUixRO1VBTVdNLGtEOzs7S0FOWE4sUTtBQWdHTiwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kbHlhLWZpemljaGVza2l4LWxpYy4xNGMyZGZkNmM5ZGZjYTZkNGUwYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtmaXpzZXJ2aWNlLCBqdXJzZXJ2aWNlfSBmcm9tIFwiLi4vLi4vZGVmYXVsdHMvZml6c2VydmljZVwiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4uL21vZGFsL01vZGFsXCJcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgSW5wdXRNYXNrIGZyb20gJ3JlYWN0LWlucHV0LW1hc2snXHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5jb25zdCBNZm9Nb2RhbCA9ICh7XHJcbiAgaXNNb2RhbE9wZW4sXHJcbiAgbWZvTGlzdCxcclxuICBtZm9EYXRlcyxcclxuICBzZXRNZm9EYXRlcyxcclxufSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG5cclxuICBjb25zdCBjaGFuZ2VDb2RlID0gKGUpID0+IHtcclxuICAgIHNldENvZGUoZS50YXJnZXQudmFsdWUpXHJcbiAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlLnJlcGxhY2UoLyAvZyxcIlwiKVxyXG4gICAgaWYodmFsdWUubGVuZ3RoID09PSA0KSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIG9uRmlyc3RTdGVwKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdoZWxsbycpXHJcbiAgICAgIH0sMTApXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCB0b2RheSA9ICgpID0+IHtcclxuICAgIHZhciB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICB2YXIgZGQgPSB0b2RheS5nZXREYXRlKCk7XHJcbiAgICB2YXIgbW0gPSB0b2RheS5nZXRNb250aCgpKzE7IC8vSmFudWFyeSBpcyAwIHNvIG5lZWQgdG8gYWRkIDEgdG8gbWFrZSBpdCAxIVxyXG4gICAgdmFyIHl5eXkgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xyXG4gICAgaWYoZGQ8MTApe1xyXG4gICAgICBkZD0nMCcrZGRcclxuICAgIH0gXHJcbiAgICBpZihtbTwxMCl7XHJcbiAgICAgIG1tPScwJyttbVxyXG4gICAgfSBcclxuXHJcbiAgICB0b2RheSA9IHl5eXkrJy0nK21tKyctJytkZDtcclxuICAgIHJldHVybiB0b2RheTtcclxuICB9IFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZihpc01vZGFsT3Blbikge1xyXG4gICAgICAvLyBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29kZV9pbnB1dFwiKTtcclxuICAgICAgLy8gaW5wdXQuZm9jdXMoKVxyXG4gICAgfVxyXG4gIH0sIFtpc01vZGFsT3Blbl0pXHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGlmKGUudGFyZ2V0Lm5hbWUgPT09ICdkYXRhJykge1xyXG4gICAgICBjb25zdCBmaW5hbE1mb0RhdGUgPSBtZm9EYXRlc1ttZm9MaXN0LmlkXS5kYXRlID0gZS50YXJnZXQudmFsdWVcclxuICAgICAgLy8gc2V0TWZvRGF0ZXMoZmluYWxNZm9EYXRlKVxyXG4gICAgICBjb25zb2xlLmxvZyhmaW5hbE1mb0RhdGUpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPE1vZGFsIGlzT3Blbj17aXNNb2RhbE9wZW59PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbGthX2NvbnRlbnQnPlxyXG4gICAgICAgICAgPGgzPtCX0LDQv9C+0LvQvdC40YLQtSDQstGB0LUg0L/QvtC70Y88L2gzPlxyXG4gICAgICAgICAge2lzTW9kYWxPcGVuICYmXHJcbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9J2Zvcm1fcmVnaXN0ZXInPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtY2VudGVyIGJsdWVUZXh0Jz57bWZvTGlzdC5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgey8qIDxzcGFuIG9uQ2xpY2s9eygpID0+IGNsb3NlTW9kYWwoKX0gY2xhc3NOYW1lPSdjbG9zZWJ0bic+4pyWPC9zcGFuPiAqL31cclxuICAgICAgICAgICAgPGxhYmVsPtCa0L7Qs9C00LAg0LHRgNCw0LvQuDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxJbnB1dE1hc2tcclxuICAgICAgICAgICAgICBtYXNrPVwiOTkuOTkuOTk5OVwiXHJcbiAgICAgICAgICAgICAgbWFza0NoYXI9e251bGx9XHJcbiAgICAgICAgICAgICAgbmFtZT0nZGF0YSdcclxuICAgICAgICAgICAgICB0eXBlPSd0ZWwnXHJcbiAgICAgICAgICAgICAgdmFsdWU9e21mb0RhdGVzW21mb0xpc3QuaWRdLmRhdGV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2U9PiBvbkNoYW5nZShlKX1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0n0LTQtC7QvNC8LtCz0LPQs9CzJ1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm15LWlucHV0IGNvZGVfaW5wdXRcIi8+XHJcbiAgICAgICAgICAgIDxsYWJlbD7QodC60L7Qu9GM0LrQviDQtNC+0LvQttC90Ys8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0nbnVtYmVyJy8+XHJcbiAgICAgICAgICAgIDxzZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17bnVsbH0gZGlzYWJsZWQgc2VsZWN0ZWQ+0JrQsNC60LjQtSDQv9GA0L7QsdC70LXQvNGLPzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24+0JzQpNCePC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbj7Qp9Ch0Jg8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uPtCd0L7RgtCw0YDQuNGD0YE8L29wdGlvbj5cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21mb0J0bnMnPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdibGFja0J0bic+0KHQvtGF0YDQsNC90LjRgtGMPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ncmVkQnRuJz7Qo9C00LDQu9C40YLRjCDQuCDQt9Cw0LrRgNGL0YLRjDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LyogPGlucHV0XHJcbiAgICAgICAgICB0eXBlPSdidXR0b24nXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjbG9zZU1vZGFsKCl9XHJcbiAgICAgICAgICAvLyBjbGFzc05hbWU9J2J1dHRvbidcclxuICAgICAgICAgIGNsYXNzTmFtZT0nYnV0dG9uIGJ1dHRvbi0tbGlnaHQgY29kZV9idXR0b24nXHJcbiAgICAgICAgICB2YWx1ZT0n0KPQtNCw0LvQuNGC0Ywg0JzQpNCeINC4INC30LDQutGA0YvRgtGMJy8+ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZm9Nb2RhbDsiXSwic291cmNlUm9vdCI6IiJ9