self["webpackHotUpdate_N_E"]("pages/index",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
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
    // setTimeout(() => window.scroll(0, 0), 10);
    // closeModal()
    if (type === 'fiz') {
      router.push({
        pathname: '/getservice',
        scrollreset: true
      }); // Router.push('/getservice').then(() => window.scrollTo(0, 0));
    } else {
      next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/jurservice').then(function () {
        return window.scrollTo(0, 0);
      });
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    if (isModalOpen === true) {// document.body.style.overflow = 'hidden';
      // console.log('true')
    }
  }, [isModalOpen]);
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
            lineNumber: 34,
            columnNumber: 13
          }, _this), type === 'fiz' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/img/uslugi/".concat(id, ".svg")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 32
          }, _this), type === 'jur' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/img/uslugi/yur".concat(id, ".svg")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 32
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            className: "line",
            src: "/img/uslugi/line.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "\u041D\u0430\u0448\u0438 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u044B \u0441\u043E\u0437\u0434\u0430\u043B\u0438 \u043F\u0440\u043E\u0434\u0443\u043A\u0442, \u0431\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F \u043A\u043E\u0442\u043E\u0440\u043E\u043C\u0443 \u0412\u0430\u043C \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u044D\u043A\u0441\u043A\u043B\u044E\u0437\u0438\u0432\u043D\u0430\u044F \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0432 \u043E\u043D\u043B\u0430\u0439\u043D \u0440\u0435\u0436\u0438\u043C\u0435"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
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
            lineNumber: 45,
            columnNumber: 62
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, _this);
};

_s(ModalService, "vQduR7x+OPXj6PSmJyFnf+hU7bg=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvTW9kYWxTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbIk1vZGFsU2VydmljZSIsImlzTW9kYWxPcGVuIiwiY2xvc2VNb2RhbCIsImlkIiwidHlwZSIsInJvdXRlciIsInVzZVJvdXRlciIsInR5cGVGaWxlIiwiZml6c2VydmljZSIsImp1cnNlcnZpY2UiLCJ0eXBlVGV4dCIsImZpbmQiLCJ4IiwiZ2V0U2VydmljZSIsInB1c2giLCJwYXRobmFtZSIsInNjcm9sbHJlc2V0IiwiUm91dGVyIiwidGhlbiIsIndpbmRvdyIsInNjcm9sbFRvIiwidXNlRWZmZWN0IiwibmFtZSIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBeUM7QUFBQTs7QUFBQSxNQUF2Q0MsV0FBdUMsUUFBdkNBLFdBQXVDO0FBQUEsTUFBMUJDLFVBQTBCLFFBQTFCQSxVQUEwQjtBQUFBLE1BQWRDLEVBQWMsUUFBZEEsRUFBYztBQUFBLE1BQVZDLElBQVUsUUFBVkEsSUFBVTtBQUM1RCxNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHSCxJQUFJLEtBQUssS0FBVCxHQUNiSSw0REFEYSxHQUViQyw0REFGSjtBQUdBLE1BQU1DLFFBQVEsR0FBR0gsUUFBUSxDQUFDSSxJQUFULENBQWMsVUFBQUMsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ1QsRUFBRixJQUFRQSxFQUFaO0FBQUEsR0FBZixDQUFqQjs7QUFDQSxNQUFNVSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3ZCO0FBQ0E7QUFDQSxRQUFHVCxJQUFJLEtBQUssS0FBWixFQUFtQjtBQUNqQkMsWUFBTSxDQUFDUyxJQUFQLENBQVk7QUFBQ0MsZ0JBQVEsRUFBRSxhQUFYO0FBQTBCQyxtQkFBVyxFQUFFO0FBQXZDLE9BQVosRUFEaUIsQ0FFakI7QUFDRCxLQUhELE1BR007QUFDSkMsNkRBQUEsQ0FBWSxhQUFaLEVBQTJCQyxJQUEzQixDQUFnQztBQUFBLGVBQU1DLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQixDQUFoQixFQUFtQixDQUFuQixDQUFOO0FBQUEsT0FBaEM7QUFDRDtBQUNGLEdBVEQ7O0FBVUFDLGtEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUdwQixXQUFXLEtBQUssSUFBbkIsRUFBeUIsQ0FFdkI7QUFDQTtBQUNEO0FBQ0YsR0FOUSxFQU1OLENBQUNBLFdBQUQsQ0FOTSxDQUFUO0FBT0Esc0JBQ0U7QUFBQSwyQkFDRSw4REFBQyxpREFBRDtBQUFPLFlBQU0sRUFBRUEsV0FBZjtBQUE0QixhQUFPLEVBQUU7QUFBQSxlQUFNQyxVQUFVLEVBQWhCO0FBQUEsT0FBckM7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsaUJBQWY7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUMsYUFBZjtBQUFBLGtDQUNFO0FBQUEsc0JBQUtRLFFBQVEsSUFBSUEsUUFBUSxDQUFDWSxJQUFULEtBQWdCQyxTQUE1QixHQUF1Q2IsUUFBUSxDQUFDWSxJQUFoRCxHQUF1RDtBQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLEVBRUdsQixJQUFJLEtBQUssS0FBVCxpQkFBa0I7QUFBSyxlQUFHLHdCQUFpQkQsRUFBakI7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZyQixFQUdHQyxJQUFJLEtBQUssS0FBVCxpQkFBa0I7QUFBSyxlQUFHLDJCQUFvQkQsRUFBcEI7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhyQixlQUlFO0FBQUsscUJBQVMsRUFBQyxNQUFmO0FBQXNCLGVBQUcsRUFBQztBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQVFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJGLGVBYUU7QUFBRyxjQUFJLEVBQUMsYUFBUjtBQUFzQixpQkFBTyxFQUFFO0FBQUEsbUJBQU1VLFVBQVUsRUFBaEI7QUFBQSxXQUEvQjtBQUFBLGlDQUFtRDtBQUFLLHFCQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFxQkQsQ0E1Q0Q7O0dBQU1iLFk7VUFDV00sa0Q7OztLQURYTixZO0FBOENOLCtEQUFlQSxZQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmIzODI5YTNkNzMwYjkyMTAyMDBlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2ZpenNlcnZpY2UsIGp1cnNlcnZpY2V9IGZyb20gXCIuLi8uLi9kZWZhdWx0cy9maXpzZXJ2aWNlXCI7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwiLi4vbW9kYWwvTW9kYWxcIlxyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5jb25zdCBNb2RhbFNlcnZpY2UgPSAoe2lzTW9kYWxPcGVuLCBjbG9zZU1vZGFsLCBpZCwgdHlwZX0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHR5cGVGaWxlID0gdHlwZSA9PT0gJ2ZpeidcclxuICAgID8gZml6c2VydmljZVxyXG4gICAgOiBqdXJzZXJ2aWNlXHJcbiAgY29uc3QgdHlwZVRleHQgPSB0eXBlRmlsZS5maW5kKHggPT4geC5pZCA9PSBpZClcclxuICBjb25zdCBnZXRTZXJ2aWNlID0gKCkgPT4ge1xyXG4gICAgLy8gc2V0VGltZW91dCgoKSA9PiB3aW5kb3cuc2Nyb2xsKDAsIDApLCAxMCk7XHJcbiAgICAvLyBjbG9zZU1vZGFsKClcclxuICAgIGlmKHR5cGUgPT09ICdmaXonKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKHtwYXRobmFtZTogJy9nZXRzZXJ2aWNlJywgc2Nyb2xscmVzZXQ6IHRydWV9KVxyXG4gICAgICAvLyBSb3V0ZXIucHVzaCgnL2dldHNlcnZpY2UnKS50aGVuKCgpID0+IHdpbmRvdy5zY3JvbGxUbygwLCAwKSk7XHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgIFJvdXRlci5wdXNoKCcvanVyc2VydmljZScpLnRoZW4oKCkgPT4gd2luZG93LnNjcm9sbFRvKDAsIDApKTtcclxuICAgIH1cclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmKGlzTW9kYWxPcGVuID09PSB0cnVlKSB7XHJcblxyXG4gICAgICAvLyBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCd0cnVlJylcclxuICAgIH1cclxuICB9LCBbaXNNb2RhbE9wZW5dKVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8TW9kYWwgaXNPcGVuPXtpc01vZGFsT3Blbn0gb25DbG9zZT17KCkgPT4gY2xvc2VNb2RhbCgpfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kYWxrYV9jb250ZW50Jz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbGthX3RvcCc+XHJcbiAgICAgICAgICAgIDxoMj57dHlwZVRleHQgJiYgdHlwZVRleHQubmFtZSE9PXVuZGVmaW5lZD8gdHlwZVRleHQubmFtZTogICcnfTwvaDI+XHJcbiAgICAgICAgICAgIHt0eXBlID09PSAnZml6JyAmJiA8aW1nIHNyYz17YC9pbWcvdXNsdWdpLyR7aWR9LnN2Z2B9Lz59XHJcbiAgICAgICAgICAgIHt0eXBlID09PSAnanVyJyAmJiA8aW1nIHNyYz17YC9pbWcvdXNsdWdpL3l1ciR7aWR9LnN2Z2B9Lz59XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdsaW5lJyBzcmM9Jy9pbWcvdXNsdWdpL2xpbmUuc3ZnJyAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgINCd0LDRiNC4INGB0L/QtdGG0LjQsNC70LjRgdGC0Ysg0YHQvtC30LTQsNC70Lgg0L/RgNC+0LTRg9C60YIsINCx0LvQsNCz0L7QtNCw0YDRjyDQutC+0YLQvtGA0L7QvNGDINCS0LDQvCDQv9GA0LXQtNC+0YHRgtCw0LLQu9GP0LXRgtGB0Y9cclxuICAgICAgICAgICAg0Y3QutGB0LrQu9GO0LfQuNCy0L3QsNGPINCy0L7Qt9C80L7QttC90L7RgdGC0Ywg0LIg0L7QvdC70LDQudC9INGA0LXQttC40LzQtVxyXG4gICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgIDxhIGhyZWY9Jy9nZXRzZXJ2aWNlJyBvbkNsaWNrPXsoKSA9PiBnZXRTZXJ2aWNlKCl9PjxkaXYgY2xhc3NOYW1lPSdidXR0b24nPtCf0L7Qu9GD0YfQuNGC0Ywg0YPRgdC70YPQs9GDPC9kaXY+PC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RhbFNlcnZpY2U7Il0sInNvdXJjZVJvb3QiOiIifQ==