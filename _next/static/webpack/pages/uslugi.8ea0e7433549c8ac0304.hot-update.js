self["webpackHotUpdate_N_E"]("pages/uslugi",{

/***/ "./components/shared/ModalService.js":
/*!*******************************************!*\
  !*** ./components/shared/ModalService.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _defaults_fizservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../defaults/fizservice */ "./defaults/fizservice.js");
/* harmony import */ var _modal_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modal/Modal */ "./components/modal/Modal.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\job\\nashcompany\\components\\shared\\ModalService.js",
    _this = undefined,
    _s = $RefreshSig$();





var ModalService = function ModalService(_ref) {
  _s();

  var isModalOpen = _ref.isModalOpen,
      closeModal = _ref.closeModal,
      id = _ref.id,
      type = _ref.type;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  var typeFile = type === 'fiz' ? _defaults_fizservice__WEBPACK_IMPORTED_MODULE_1__.fizservice : _defaults_fizservice__WEBPACK_IMPORTED_MODULE_1__.jurservice;
  var typeText = typeFile.find(function (x) {
    return x.id == id;
  });

  var getService = function getService() {
    setTimeout(function () {
      return window.scroll(0, 0);
    }, 0);
    closeModal(); // router.push('/getservice')
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modal_Modal__WEBPACK_IMPORTED_MODULE_2__.default, {
      isOpen: isModalOpen,
      onClose: function onClose() {
        return closeModal();
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "modalka_content",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "modalka_top",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            children: typeText && typeText.name !== undefined ? typeText.name : ''
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }, _this), type === 'fiz' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/img/uslugi/".concat(id, ".svg")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 32
          }, _this), type === 'jur' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/img/uslugi/yur".concat(id, ".svg")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 32
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            className: "line",
            src: "/img/uslugi/line.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "\u041D\u0430\u0448\u0438 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u044B \u0441\u043E\u0437\u0434\u0430\u043B\u0438 \u043F\u0440\u043E\u0434\u0443\u043A\u0442, \u0431\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F \u043A\u043E\u0442\u043E\u0440\u043E\u043C\u0443 \u0412\u0430\u043C \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u044D\u043A\u0441\u043A\u043B\u044E\u0437\u0438\u0432\u043D\u0430\u044F \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0432 \u043E\u043D\u043B\u0430\u0439\u043D \u0440\u0435\u0436\u0438\u043C\u0435"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "/getservice",
          onClick: function onClick() {
            return getService();
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "button",
            children: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0443\u0441\u043B\u0443\u0433\u0443"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 62
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, _this);
};

_s(ModalService, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];
});

_c = ModalService;
/* harmony default export */ __webpack_exports__["default"] = (ModalService);

var _c;

$RefreshReg$(_c, "ModalService");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvTW9kYWxTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbIk1vZGFsU2VydmljZSIsImlzTW9kYWxPcGVuIiwiY2xvc2VNb2RhbCIsImlkIiwidHlwZSIsInJvdXRlciIsInVzZVJvdXRlciIsInR5cGVGaWxlIiwiZml6c2VydmljZSIsImp1cnNlcnZpY2UiLCJ0eXBlVGV4dCIsImZpbmQiLCJ4IiwiZ2V0U2VydmljZSIsInNldFRpbWVvdXQiLCJ3aW5kb3ciLCJzY3JvbGwiLCJuYW1lIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUF5QztBQUFBOztBQUFBLE1BQXZDQyxXQUF1QyxRQUF2Q0EsV0FBdUM7QUFBQSxNQUExQkMsVUFBMEIsUUFBMUJBLFVBQTBCO0FBQUEsTUFBZEMsRUFBYyxRQUFkQSxFQUFjO0FBQUEsTUFBVkMsSUFBVSxRQUFWQSxJQUFVO0FBQzVELE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFDQSxNQUFNQyxRQUFRLEdBQUdILElBQUksS0FBSyxLQUFULEdBQ2JJLDREQURhLEdBRWJDLDREQUZKO0FBR0EsTUFBTUMsUUFBUSxHQUFHSCxRQUFRLENBQUNJLElBQVQsQ0FBYyxVQUFBQyxDQUFDO0FBQUEsV0FBSUEsQ0FBQyxDQUFDVCxFQUFGLElBQVFBLEVBQVo7QUFBQSxHQUFmLENBQWpCOztBQUNBLE1BQU1VLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDdkJDLGNBQVUsQ0FBQztBQUFBLGFBQU1DLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLENBQWQsRUFBaUIsQ0FBakIsQ0FBTjtBQUFBLEtBQUQsRUFBNEIsQ0FBNUIsQ0FBVjtBQUNBZCxjQUFVLEdBRmEsQ0FHdkI7QUFDRCxHQUpEOztBQUtBLHNCQUNFO0FBQUEsMkJBQ0UsOERBQUMsaURBQUQ7QUFBTyxZQUFNLEVBQUVELFdBQWY7QUFBNEIsYUFBTyxFQUFFO0FBQUEsZUFBTUMsVUFBVSxFQUFoQjtBQUFBLE9BQXJDO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLGlCQUFmO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFDLGFBQWY7QUFBQSxrQ0FDRTtBQUFBLHNCQUFLUSxRQUFRLElBQUlBLFFBQVEsQ0FBQ08sSUFBVCxLQUFnQkMsU0FBNUIsR0FBdUNSLFFBQVEsQ0FBQ08sSUFBaEQsR0FBdUQ7QUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixFQUVHYixJQUFJLEtBQUssS0FBVCxpQkFBa0I7QUFBSyxlQUFHLHdCQUFpQkQsRUFBakI7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZyQixFQUdHQyxJQUFJLEtBQUssS0FBVCxpQkFBa0I7QUFBSyxlQUFHLDJCQUFvQkQsRUFBcEI7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhyQixlQUlFO0FBQUsscUJBQVMsRUFBQyxNQUFmO0FBQXNCLGVBQUcsRUFBQztBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQVFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJGLGVBYUU7QUFBRyxjQUFJLEVBQUMsYUFBUjtBQUFzQixpQkFBTyxFQUFFO0FBQUEsbUJBQU1VLFVBQVUsRUFBaEI7QUFBQSxXQUEvQjtBQUFBLGlDQUFtRDtBQUFLLHFCQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFxQkQsQ0FoQ0Q7O0dBQU1iLFk7VUFDV00sa0Q7OztLQURYTixZO0FBa0NOLCtEQUFlQSxZQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VzbHVnaS44ZWEwZTc0MzM1NDljOGFjMDMwNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtmaXpzZXJ2aWNlLCBqdXJzZXJ2aWNlfSBmcm9tIFwiLi4vLi4vZGVmYXVsdHMvZml6c2VydmljZVwiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4uL21vZGFsL01vZGFsXCJcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5jb25zdCBNb2RhbFNlcnZpY2UgPSAoe2lzTW9kYWxPcGVuLCBjbG9zZU1vZGFsLCBpZCwgdHlwZX0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHR5cGVGaWxlID0gdHlwZSA9PT0gJ2ZpeidcclxuICAgID8gZml6c2VydmljZVxyXG4gICAgOiBqdXJzZXJ2aWNlXHJcbiAgY29uc3QgdHlwZVRleHQgPSB0eXBlRmlsZS5maW5kKHggPT4geC5pZCA9PSBpZClcclxuICBjb25zdCBnZXRTZXJ2aWNlID0gKCkgPT4ge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB3aW5kb3cuc2Nyb2xsKDAsIDApLCAwKTtcclxuICAgIGNsb3NlTW9kYWwoKVxyXG4gICAgLy8gcm91dGVyLnB1c2goJy9nZXRzZXJ2aWNlJylcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxNb2RhbCBpc09wZW49e2lzTW9kYWxPcGVufSBvbkNsb3NlPXsoKSA9PiBjbG9zZU1vZGFsKCl9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbGthX2NvbnRlbnQnPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsa2FfdG9wJz5cclxuICAgICAgICAgICAgPGgyPnt0eXBlVGV4dCAmJiB0eXBlVGV4dC5uYW1lIT09dW5kZWZpbmVkPyB0eXBlVGV4dC5uYW1lOiAgJyd9PC9oMj5cclxuICAgICAgICAgICAge3R5cGUgPT09ICdmaXonICYmIDxpbWcgc3JjPXtgL2ltZy91c2x1Z2kvJHtpZH0uc3ZnYH0vPn1cclxuICAgICAgICAgICAge3R5cGUgPT09ICdqdXInICYmIDxpbWcgc3JjPXtgL2ltZy91c2x1Z2kveXVyJHtpZH0uc3ZnYH0vPn1cclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2xpbmUnIHNyYz0nL2ltZy91c2x1Z2kvbGluZS5zdmcnIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAg0J3QsNGI0Lgg0YHQv9C10YbQuNCw0LvQuNGB0YLRiyDRgdC+0LfQtNCw0LvQuCDQv9GA0L7QtNGD0LrRgiwg0LHQu9Cw0LPQvtC00LDRgNGPINC60L7RgtC+0YDQvtC80YMg0JLQsNC8INC/0YDQtdC00L7RgdGC0LDQstC70Y/QtdGC0YHRj1xyXG4gICAgICAgICAgICDRjdC60YHQutC70Y7Qt9C40LLQvdCw0Y8g0LLQvtC30LzQvtC20L3QvtGB0YLRjCDQsiDQvtC90LvQsNC50L0g0YDQtdC20LjQvNC1XHJcbiAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgPGEgaHJlZj0nL2dldHNlcnZpY2UnIG9uQ2xpY2s9eygpID0+IGdldFNlcnZpY2UoKX0+PGRpdiBjbGFzc05hbWU9J2J1dHRvbic+0J/QvtC70YPRh9C40YLRjCDRg9GB0LvRg9Cz0YM8L2Rpdj48L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vZGFsU2VydmljZTsiXSwic291cmNlUm9vdCI6IiJ9