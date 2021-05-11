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
    }, 0); // closeModal()
    // router.push('/getservice')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvTW9kYWxTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbIk1vZGFsU2VydmljZSIsImlzTW9kYWxPcGVuIiwiY2xvc2VNb2RhbCIsImlkIiwidHlwZSIsInJvdXRlciIsInVzZVJvdXRlciIsInR5cGVGaWxlIiwiZml6c2VydmljZSIsImp1cnNlcnZpY2UiLCJ0eXBlVGV4dCIsImZpbmQiLCJ4IiwiZ2V0U2VydmljZSIsInNldFRpbWVvdXQiLCJ3aW5kb3ciLCJzY3JvbGwiLCJuYW1lIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUF5QztBQUFBOztBQUFBLE1BQXZDQyxXQUF1QyxRQUF2Q0EsV0FBdUM7QUFBQSxNQUExQkMsVUFBMEIsUUFBMUJBLFVBQTBCO0FBQUEsTUFBZEMsRUFBYyxRQUFkQSxFQUFjO0FBQUEsTUFBVkMsSUFBVSxRQUFWQSxJQUFVO0FBQzVELE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFDQSxNQUFNQyxRQUFRLEdBQUdILElBQUksS0FBSyxLQUFULEdBQ2JJLDREQURhLEdBRWJDLDREQUZKO0FBR0EsTUFBTUMsUUFBUSxHQUFHSCxRQUFRLENBQUNJLElBQVQsQ0FBYyxVQUFBQyxDQUFDO0FBQUEsV0FBSUEsQ0FBQyxDQUFDVCxFQUFGLElBQVFBLEVBQVo7QUFBQSxHQUFmLENBQWpCOztBQUNBLE1BQU1VLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDdkJDLGNBQVUsQ0FBQztBQUFBLGFBQU1DLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLENBQWQsRUFBaUIsQ0FBakIsQ0FBTjtBQUFBLEtBQUQsRUFBNEIsQ0FBNUIsQ0FBVixDQUR1QixDQUV2QjtBQUNBO0FBQ0QsR0FKRDs7QUFLQSxzQkFDRTtBQUFBLDJCQUNFLDhEQUFDLGlEQUFEO0FBQU8sWUFBTSxFQUFFZixXQUFmO0FBQTRCLGFBQU8sRUFBRTtBQUFBLGVBQU1DLFVBQVUsRUFBaEI7QUFBQSxPQUFyQztBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxpQkFBZjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBQyxhQUFmO0FBQUEsa0NBQ0U7QUFBQSxzQkFBS1EsUUFBUSxJQUFJQSxRQUFRLENBQUNPLElBQVQsS0FBZ0JDLFNBQTVCLEdBQXVDUixRQUFRLENBQUNPLElBQWhELEdBQXVEO0FBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsRUFFR2IsSUFBSSxLQUFLLEtBQVQsaUJBQWtCO0FBQUssZUFBRyx3QkFBaUJELEVBQWpCO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGckIsRUFHR0MsSUFBSSxLQUFLLEtBQVQsaUJBQWtCO0FBQUssZUFBRywyQkFBb0JELEVBQXBCO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIckIsZUFJRTtBQUFLLHFCQUFTLEVBQUMsTUFBZjtBQUFzQixlQUFHLEVBQUM7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSRixlQWFFO0FBQUcsY0FBSSxFQUFDLGFBQVI7QUFBc0IsaUJBQU8sRUFBRTtBQUFBLG1CQUFNVSxVQUFVLEVBQWhCO0FBQUEsV0FBL0I7QUFBQSxpQ0FBbUQ7QUFBSyxxQkFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBcUJELENBaENEOztHQUFNYixZO1VBQ1dNLGtEOzs7S0FEWE4sWTtBQWtDTiwrREFBZUEsWUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91c2x1Z2kuYzJhOTgxNTM1YjJlNzA1NDc0MDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Zml6c2VydmljZSwganVyc2VydmljZX0gZnJvbSBcIi4uLy4uL2RlZmF1bHRzL2ZpenNlcnZpY2VcIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCIuLi9tb2RhbC9Nb2RhbFwiXHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuY29uc3QgTW9kYWxTZXJ2aWNlID0gKHtpc01vZGFsT3BlbiwgY2xvc2VNb2RhbCwgaWQsIHR5cGV9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCB0eXBlRmlsZSA9IHR5cGUgPT09ICdmaXonXHJcbiAgICA/IGZpenNlcnZpY2VcclxuICAgIDoganVyc2VydmljZVxyXG4gIGNvbnN0IHR5cGVUZXh0ID0gdHlwZUZpbGUuZmluZCh4ID0+IHguaWQgPT0gaWQpXHJcbiAgY29uc3QgZ2V0U2VydmljZSA9ICgpID0+IHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gd2luZG93LnNjcm9sbCgwLCAwKSwgMCk7XHJcbiAgICAvLyBjbG9zZU1vZGFsKClcclxuICAgIC8vIHJvdXRlci5wdXNoKCcvZ2V0c2VydmljZScpXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8TW9kYWwgaXNPcGVuPXtpc01vZGFsT3Blbn0gb25DbG9zZT17KCkgPT4gY2xvc2VNb2RhbCgpfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kYWxrYV9jb250ZW50Jz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbGthX3RvcCc+XHJcbiAgICAgICAgICAgIDxoMj57dHlwZVRleHQgJiYgdHlwZVRleHQubmFtZSE9PXVuZGVmaW5lZD8gdHlwZVRleHQubmFtZTogICcnfTwvaDI+XHJcbiAgICAgICAgICAgIHt0eXBlID09PSAnZml6JyAmJiA8aW1nIHNyYz17YC9pbWcvdXNsdWdpLyR7aWR9LnN2Z2B9Lz59XHJcbiAgICAgICAgICAgIHt0eXBlID09PSAnanVyJyAmJiA8aW1nIHNyYz17YC9pbWcvdXNsdWdpL3l1ciR7aWR9LnN2Z2B9Lz59XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdsaW5lJyBzcmM9Jy9pbWcvdXNsdWdpL2xpbmUuc3ZnJyAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgINCd0LDRiNC4INGB0L/QtdGG0LjQsNC70LjRgdGC0Ysg0YHQvtC30LTQsNC70Lgg0L/RgNC+0LTRg9C60YIsINCx0LvQsNCz0L7QtNCw0YDRjyDQutC+0YLQvtGA0L7QvNGDINCS0LDQvCDQv9GA0LXQtNC+0YHRgtCw0LLQu9GP0LXRgtGB0Y9cclxuICAgICAgICAgICAg0Y3QutGB0LrQu9GO0LfQuNCy0L3QsNGPINCy0L7Qt9C80L7QttC90L7RgdGC0Ywg0LIg0L7QvdC70LDQudC9INGA0LXQttC40LzQtVxyXG4gICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgIDxhIGhyZWY9Jy9nZXRzZXJ2aWNlJyBvbkNsaWNrPXsoKSA9PiBnZXRTZXJ2aWNlKCl9PjxkaXYgY2xhc3NOYW1lPSdidXR0b24nPtCf0L7Qu9GD0YfQuNGC0Ywg0YPRgdC70YPQs9GDPC9kaXY+PC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RhbFNlcnZpY2U7Il0sInNvdXJjZVJvb3QiOiIifQ==