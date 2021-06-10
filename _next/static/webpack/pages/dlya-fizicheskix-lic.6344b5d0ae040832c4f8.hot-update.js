self["webpackHotUpdate_N_E"]("pages/dlya-fizicheskix-lic",{

/***/ "./components/modal/Modal.js":
/*!***********************************!*\
  !*** ./components/modal/Modal.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\job\\nashcompany\\components\\modal\\Modal.js",
    _this = undefined,
    _s = $RefreshSig$();





var Modal = function Modal(props) {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();

  var close = function close(e) {
    e.preventDefault();
    var name = e.target.dataset.name;
    console.log(name);

    if (props.onClose && name === 'modalka_block') {
      props.onClose();
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {// if(props.isOpen) {
    //   document.documentElement.style.height= '100%';
    //   document.body.style.overflowY= 'hidden';
    //   console.log('true')
    // }
    // if(!props.isOpen) {
    //   document.body.style.overflowY= 'unset';
    //   console.log('false')
    // }
    // document.body.style.overflowX= 'hidden';
  }, [props.isOpen]);

  if (props.isOpen === true) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      "data-name": "modalka_block",
      className: "modalka_block ".concat(router.pathname === '/dlya-fizicheskix-lic' && 'modalka_code'),
      onClick: function onClick(e) {
        return close(e);
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "modalka_body",
        children: props.children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, _this);
  } else {
    return null;
  }
};

_s(Modal, "vQduR7x+OPXj6PSmJyFnf+hU7bg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];
});

_c = Modal;
/* harmony default export */ __webpack_exports__["default"] = (Modal);

var _c;

$RefreshReg$(_c, "Modal");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2RhbC9Nb2RhbC5qcyJdLCJuYW1lcyI6WyJNb2RhbCIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwiY2xvc2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJuYW1lIiwidGFyZ2V0IiwiZGF0YXNldCIsImNvbnNvbGUiLCJsb2ciLCJvbkNsb3NlIiwidXNlRWZmZWN0IiwiaXNPcGVuIiwicGF0aG5hbWUiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQ3ZCLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7O0FBQ0EsTUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ25CQSxLQUFDLENBQUNDLGNBQUY7QUFDQSxRQUFNQyxJQUFJLEdBQUdGLENBQUMsQ0FBQ0csTUFBRixDQUFTQyxPQUFULENBQWlCRixJQUE5QjtBQUNBRyxXQUFPLENBQUNDLEdBQVIsQ0FBWUosSUFBWjs7QUFDQSxRQUFJTixLQUFLLENBQUNXLE9BQU4sSUFBaUJMLElBQUksS0FBRyxlQUE1QixFQUE2QztBQUMzQ04sV0FBSyxDQUFDVyxPQUFOO0FBQ0Q7QUFDRixHQVBEOztBQVFBQyxrREFBUyxDQUFDLFlBQU0sQ0FDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNELEdBWlEsRUFZTixDQUFDWixLQUFLLENBQUNhLE1BQVAsQ0FaTSxDQUFUOztBQWFBLE1BQUliLEtBQUssQ0FBQ2EsTUFBTixLQUFpQixJQUFyQixFQUEyQjtBQUN6Qix3QkFDRTtBQUFLLG1CQUFVLGVBQWY7QUFBK0IsZUFBUywwQkFBbUJaLE1BQU0sQ0FBQ2EsUUFBUCxLQUFvQix1QkFBcEIsSUFBK0MsY0FBbEUsQ0FBeEM7QUFBNEgsYUFBTyxFQUFFLGlCQUFBVixDQUFDO0FBQUEsZUFBSUQsS0FBSyxDQUFDQyxDQUFELENBQVQ7QUFBQSxPQUF0STtBQUFBLDZCQUNFO0FBQU0saUJBQVMsRUFBQyxjQUFoQjtBQUFBLGtCQUNHSixLQUFLLENBQUNlO0FBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQU9ELEdBUkQsTUFRTztBQUNMLFdBQU8sSUFBUDtBQUNEO0FBQ0YsQ0FsQ0Q7O0dBQU1oQixLO1VBQ1dHLGtEOzs7S0FEWEgsSztBQW9DTiwrREFBZUEsS0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kbHlhLWZpemljaGVza2l4LWxpYy42MzQ0YjVkMGFlMDQwODMyYzRmOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ1NTVHJhbnNpdGlvbiwgVHJhbnNpdGlvbkdyb3VwIH0gZnJvbSBcInJlYWN0LXRyYW5zaXRpb24tZ3JvdXBcIjtcclxuaW1wb3J0IHtSb3V0ZXIsIHVzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5jb25zdCBNb2RhbCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgY2xvc2UgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBjb25zdCBuYW1lID0gZS50YXJnZXQuZGF0YXNldC5uYW1lXHJcbiAgICBjb25zb2xlLmxvZyhuYW1lKVxyXG4gICAgaWYgKHByb3BzLm9uQ2xvc2UgJiYgbmFtZT09PSdtb2RhbGthX2Jsb2NrJykge1xyXG4gICAgICBwcm9wcy5vbkNsb3NlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBpZihwcm9wcy5pc09wZW4pIHtcclxuICAgIC8vICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLmhlaWdodD0gJzEwMCUnO1xyXG4gICAgLy8gICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WT0gJ2hpZGRlbic7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKCd0cnVlJylcclxuICAgIC8vIH1cclxuICAgIC8vIGlmKCFwcm9wcy5pc09wZW4pIHtcclxuICAgIC8vICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1k9ICd1bnNldCc7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdmYWxzZScpXHJcbiAgICAvLyB9XHJcbiAgICBcclxuICAgIC8vIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3dYPSAnaGlkZGVuJztcclxuICB9LCBbcHJvcHMuaXNPcGVuXSlcclxuICBpZiAocHJvcHMuaXNPcGVuID09PSB0cnVlKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGRhdGEtbmFtZT0nbW9kYWxrYV9ibG9jaycgY2xhc3NOYW1lPXtgbW9kYWxrYV9ibG9jayAke3JvdXRlci5wYXRobmFtZSA9PT0gJy9kbHlhLWZpemljaGVza2l4LWxpYycgJiYgJ21vZGFsa2FfY29kZSd9YH0gb25DbGljaz17ZSA9PiBjbG9zZShlKX0+XHJcbiAgICAgICAgPGRpdiAgY2xhc3NOYW1lPSdtb2RhbGthX2JvZHknPlxyXG4gICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIG51bGxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vZGFsIl0sInNvdXJjZVJvb3QiOiIifQ==