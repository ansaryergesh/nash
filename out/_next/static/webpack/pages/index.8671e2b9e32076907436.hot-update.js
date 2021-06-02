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
    document.body.style.overflow = 'hidden';
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
            lineNumber: 30,
            columnNumber: 13
          }, _this), type === 'fiz' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/img/uslugi/".concat(id, ".svg")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 32
          }, _this), type === 'jur' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/img/uslugi/yur".concat(id, ".svg")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 32
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            className: "line",
            src: "/img/uslugi/line.svg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: "\u041D\u0430\u0448\u0438 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u044B \u0441\u043E\u0437\u0434\u0430\u043B\u0438 \u043F\u0440\u043E\u0434\u0443\u043A\u0442, \u0431\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F \u043A\u043E\u0442\u043E\u0440\u043E\u043C\u0443 \u0412\u0430\u043C \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u044D\u043A\u0441\u043A\u043B\u044E\u0437\u0438\u0432\u043D\u0430\u044F \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0432 \u043E\u043D\u043B\u0430\u0439\u043D \u0440\u0435\u0436\u0438\u043C\u0435"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
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
            lineNumber: 41,
            columnNumber: 62
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvTW9kYWxTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbIk1vZGFsU2VydmljZSIsImlzTW9kYWxPcGVuIiwiY2xvc2VNb2RhbCIsImlkIiwidHlwZSIsInJvdXRlciIsInVzZVJvdXRlciIsInR5cGVGaWxlIiwiZml6c2VydmljZSIsImp1cnNlcnZpY2UiLCJ0eXBlVGV4dCIsImZpbmQiLCJ4IiwiZ2V0U2VydmljZSIsInB1c2giLCJwYXRobmFtZSIsInNjcm9sbHJlc2V0IiwiUm91dGVyIiwidGhlbiIsIndpbmRvdyIsInNjcm9sbFRvIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJvdmVyZmxvdyIsIm5hbWUiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQXlDO0FBQUE7O0FBQUEsTUFBdkNDLFdBQXVDLFFBQXZDQSxXQUF1QztBQUFBLE1BQTFCQyxVQUEwQixRQUExQkEsVUFBMEI7QUFBQSxNQUFkQyxFQUFjLFFBQWRBLEVBQWM7QUFBQSxNQUFWQyxJQUFVLFFBQVZBLElBQVU7QUFDNUQsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUNBLE1BQU1DLFFBQVEsR0FBR0gsSUFBSSxLQUFLLEtBQVQsR0FDYkksNERBRGEsR0FFYkMsNERBRko7QUFHQSxNQUFNQyxRQUFRLEdBQUdILFFBQVEsQ0FBQ0ksSUFBVCxDQUFjLFVBQUFDLENBQUM7QUFBQSxXQUFJQSxDQUFDLENBQUNULEVBQUYsSUFBUUEsRUFBWjtBQUFBLEdBQWYsQ0FBakI7O0FBQ0EsTUFBTVUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2QjtBQUNBO0FBQ0EsUUFBR1QsSUFBSSxLQUFLLEtBQVosRUFBbUI7QUFDakJDLFlBQU0sQ0FBQ1MsSUFBUCxDQUFZO0FBQUNDLGdCQUFRLEVBQUUsYUFBWDtBQUEwQkMsbUJBQVcsRUFBRTtBQUF2QyxPQUFaLEVBRGlCLENBRWpCO0FBQ0QsS0FIRCxNQUdNO0FBQ0pDLDZEQUFBLENBQVksYUFBWixFQUEyQkMsSUFBM0IsQ0FBZ0M7QUFBQSxlQUFNQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsQ0FBTjtBQUFBLE9BQWhDO0FBQ0Q7QUFDRixHQVREOztBQVVBQyxrREFBUyxDQUFDLFlBQU07QUFDZEMsWUFBUSxDQUFDQyxJQUFULENBQWNDLEtBQWQsQ0FBb0JDLFFBQXBCLEdBQStCLFFBQS9CO0FBQ0QsR0FGUSxFQUVOLENBQUN4QixXQUFELENBRk0sQ0FBVDtBQUdBLHNCQUNFO0FBQUEsMkJBQ0UsOERBQUMsaURBQUQ7QUFBTyxZQUFNLEVBQUVBLFdBQWY7QUFBNEIsYUFBTyxFQUFFO0FBQUEsZUFBTUMsVUFBVSxFQUFoQjtBQUFBLE9BQXJDO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLGlCQUFmO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFDLGFBQWY7QUFBQSxrQ0FDRTtBQUFBLHNCQUFLUSxRQUFRLElBQUlBLFFBQVEsQ0FBQ2dCLElBQVQsS0FBZ0JDLFNBQTVCLEdBQXVDakIsUUFBUSxDQUFDZ0IsSUFBaEQsR0FBdUQ7QUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixFQUVHdEIsSUFBSSxLQUFLLEtBQVQsaUJBQWtCO0FBQUssZUFBRyx3QkFBaUJELEVBQWpCO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGckIsRUFHR0MsSUFBSSxLQUFLLEtBQVQsaUJBQWtCO0FBQUssZUFBRywyQkFBb0JELEVBQXBCO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIckIsZUFJRTtBQUFLLHFCQUFTLEVBQUMsTUFBZjtBQUFzQixlQUFHLEVBQUM7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSRixlQWFFO0FBQUcsY0FBSSxFQUFDLGFBQVI7QUFBc0IsaUJBQU8sRUFBRTtBQUFBLG1CQUFNVSxVQUFVLEVBQWhCO0FBQUEsV0FBL0I7QUFBQSxpQ0FBbUQ7QUFBSyxxQkFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBcUJELENBeENEOztHQUFNYixZO1VBQ1dNLGtEOzs7S0FEWE4sWTtBQTBDTiwrREFBZUEsWUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44NjcxZTJiOWUzMjA3NjkwNzQzNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtmaXpzZXJ2aWNlLCBqdXJzZXJ2aWNlfSBmcm9tIFwiLi4vLi4vZGVmYXVsdHMvZml6c2VydmljZVwiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4uL21vZGFsL01vZGFsXCJcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuY29uc3QgTW9kYWxTZXJ2aWNlID0gKHtpc01vZGFsT3BlbiwgY2xvc2VNb2RhbCwgaWQsIHR5cGV9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCB0eXBlRmlsZSA9IHR5cGUgPT09ICdmaXonXHJcbiAgICA/IGZpenNlcnZpY2VcclxuICAgIDoganVyc2VydmljZVxyXG4gIGNvbnN0IHR5cGVUZXh0ID0gdHlwZUZpbGUuZmluZCh4ID0+IHguaWQgPT0gaWQpXHJcbiAgY29uc3QgZ2V0U2VydmljZSA9ICgpID0+IHtcclxuICAgIC8vIHNldFRpbWVvdXQoKCkgPT4gd2luZG93LnNjcm9sbCgwLCAwKSwgMTApO1xyXG4gICAgLy8gY2xvc2VNb2RhbCgpXHJcbiAgICBpZih0eXBlID09PSAnZml6Jykge1xyXG4gICAgICByb3V0ZXIucHVzaCh7cGF0aG5hbWU6ICcvZ2V0c2VydmljZScsIHNjcm9sbHJlc2V0OiB0cnVlfSlcclxuICAgICAgLy8gUm91dGVyLnB1c2goJy9nZXRzZXJ2aWNlJykudGhlbigoKSA9PiB3aW5kb3cuc2Nyb2xsVG8oMCwgMCkpO1xyXG4gICAgfWVsc2Uge1xyXG4gICAgICBSb3V0ZXIucHVzaCgnL2p1cnNlcnZpY2UnKS50aGVuKCgpID0+IHdpbmRvdy5zY3JvbGxUbygwLCAwKSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbiAgfSwgW2lzTW9kYWxPcGVuXSlcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPE1vZGFsIGlzT3Blbj17aXNNb2RhbE9wZW59IG9uQ2xvc2U9eygpID0+IGNsb3NlTW9kYWwoKX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsa2FfY29udGVudCc+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kYWxrYV90b3AnPlxyXG4gICAgICAgICAgICA8aDI+e3R5cGVUZXh0ICYmIHR5cGVUZXh0Lm5hbWUhPT11bmRlZmluZWQ/IHR5cGVUZXh0Lm5hbWU6ICAnJ308L2gyPlxyXG4gICAgICAgICAgICB7dHlwZSA9PT0gJ2ZpeicgJiYgPGltZyBzcmM9e2AvaW1nL3VzbHVnaS8ke2lkfS5zdmdgfS8+fVxyXG4gICAgICAgICAgICB7dHlwZSA9PT0gJ2p1cicgJiYgPGltZyBzcmM9e2AvaW1nL3VzbHVnaS95dXIke2lkfS5zdmdgfS8+fVxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nbGluZScgc3JjPScvaW1nL3VzbHVnaS9saW5lLnN2ZycgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICDQndCw0YjQuCDRgdC/0LXRhtC40LDQu9C40YHRgtGLINGB0L7Qt9C00LDQu9C4INC/0YDQvtC00YPQutGCLCDQsdC70LDQs9C+0LTQsNGA0Y8g0LrQvtGC0L7RgNC+0LzRgyDQktCw0Lwg0L/RgNC10LTQvtGB0YLQsNCy0LvRj9C10YLRgdGPXHJcbiAgICAgICAgICAgINGN0LrRgdC60LvRjtC30LjQstC90LDRjyDQstC+0LfQvNC+0LbQvdC+0YHRgtGMINCyINC+0L3Qu9Cw0LnQvSDRgNC10LbQuNC80LVcclxuICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICA8YSBocmVmPScvZ2V0c2VydmljZScgb25DbGljaz17KCkgPT4gZ2V0U2VydmljZSgpfT48ZGl2IGNsYXNzTmFtZT0nYnV0dG9uJz7Qn9C+0LvRg9GH0LjRgtGMINGD0YHQu9GD0LPRgzwvZGl2PjwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWxTZXJ2aWNlOyJdLCJzb3VyY2VSb290IjoiIn0=