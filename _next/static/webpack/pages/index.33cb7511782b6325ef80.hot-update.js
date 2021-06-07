self["webpackHotUpdate_N_E"]("pages/index",{

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

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (props.isOpen) {
      document.documentElement.style.height = '100%';
      document.body.style.overflowY = 'hidden';
      console.log('true');
    }

    if (!props.isOpen) {
      document.body.style.overflowY = 'unset';
      console.log('false');
    }

    document.body.style.overflowX = 'hidden';
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


/***/ }),

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
        pathname: '/dlya-fizicheskix-lic',
        scrollreset: true
      }); // Router.push('/dlya-fizicheskix-lic').then(() => window.scrollTo(0, 0));
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
            alt: "image",
            src: "/img/uslugi_new/fiz".concat(id, ".svg")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 32
          }, _this), type === 'jur' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            alt: "image",
            src: "/img/uslugi_new/jur".concat(id, ".svg")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 32
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            alt: "image",
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
          href: "/dlya-fizicheskix-lic",
          onClick: function onClick() {
            return getService();
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "button",
            children: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0443\u0441\u043B\u0443\u0433\u0443"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 72
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


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_shared_Feedback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/shared/Feedback */ "./components/shared/Feedback.js");
/* harmony import */ var _components_shared_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/shared/Header */ "./components/shared/Header.js");
/* harmony import */ var _components_shared_ModalService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/shared/ModalService */ "./components/shared/ModalService.js");
/* harmony import */ var _components_shared_Nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/shared/Nav */ "./components/shared/Nav.js");
/* harmony import */ var _components_shared_ServiceList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/shared/ServiceList */ "./components/shared/ServiceList.js");
/* harmony import */ var _defaults_fizservice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../defaults/fizservice */ "./defaults/fizservice.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\job\\nashcompany\\pages\\index.js",
    _s = $RefreshSig$();









function Home() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      modal = _useState[0],
      setModal = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
      id = _useState2[0],
      setId = _useState2[1];

  var closeModal = function closeModal() {
    setModal(false);
  };

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('fiz'),
      type = _useState3[0],
      setType = _useState3[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "home",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Nash Company - \u0420\u0435\u0448\u0430\u0435\u043C\u043E \u0432\u0441\u0435!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Header__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Feedback__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "services",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          className: "advantage",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "advantage--item",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: "/img/advantage1.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 43
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: ["95% \u0432\u044B\u0438\u0433\u0440\u0430\u043D\u043D\u044B\u0445", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 15
              }, this), "\u0434\u0435\u043B"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "advantage--item",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: "/img/advantage2.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 43
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: ["\u0411\u043E\u043B\u0435\u0435 10 \u043B\u0435\u0442", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 28
              }, this), "\u043D\u0430 \u0440\u044B\u043D\u043A\u0435"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "advantage--item",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: "/img/advantage3.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 43
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: ["\u0420\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u043F\u043E", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 27
              }, this), "\u0432\u0441\u0435\u043C\u0443 \u0420\u041A"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "services--header",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: type === 'fiz' && 'active',
            onClick: function onClick() {
              return setType('fiz');
            },
            children: "\u0424\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043B\u0438\u0446\u0430"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: type === 'jur' && 'active',
            onClick: function onClick() {
              return setType('jur');
            },
            children: "\u042E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043B\u0438\u0446\u0430"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_ServiceList__WEBPACK_IMPORTED_MODULE_7__.default, {
          list: _defaults_fizservice__WEBPACK_IMPORTED_MODULE_8__.fizservice,
          type: type,
          setModal: setModal,
          setId: setId
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_ModalService__WEBPACK_IMPORTED_MODULE_5__.default, {
          isModalOpen: modal,
          closeModal: closeModal,
          id: id,
          type: type
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

_s(Home, "XBpxyEjQ6kTIjL/n9aka/DXpIuw=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2RhbC9Nb2RhbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvTW9kYWxTZXJ2aWNlLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJNb2RhbCIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwiY2xvc2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJuYW1lIiwidGFyZ2V0IiwiZGF0YXNldCIsImNvbnNvbGUiLCJsb2ciLCJvbkNsb3NlIiwidXNlRWZmZWN0IiwiaXNPcGVuIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzdHlsZSIsImhlaWdodCIsImJvZHkiLCJvdmVyZmxvd1kiLCJvdmVyZmxvd1giLCJwYXRobmFtZSIsImNoaWxkcmVuIiwiTW9kYWxTZXJ2aWNlIiwiaXNNb2RhbE9wZW4iLCJjbG9zZU1vZGFsIiwiaWQiLCJ0eXBlIiwidHlwZUZpbGUiLCJmaXpzZXJ2aWNlIiwianVyc2VydmljZSIsInR5cGVUZXh0IiwiZmluZCIsIngiLCJnZXRTZXJ2aWNlIiwicHVzaCIsInNjcm9sbHJlc2V0IiwiUm91dGVyIiwidGhlbiIsIndpbmRvdyIsInNjcm9sbFRvIiwidW5kZWZpbmVkIiwiSG9tZSIsInVzZVN0YXRlIiwibW9kYWwiLCJzZXRNb2RhbCIsInNldElkIiwic2V0VHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQ3ZCLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7O0FBQ0EsTUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ25CQSxLQUFDLENBQUNDLGNBQUY7QUFDQSxRQUFNQyxJQUFJLEdBQUdGLENBQUMsQ0FBQ0cs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Z0IsUUFBakM7QUFBMkMsbUJBQU8sRUFBRTtBQUFBLHFCQUFNb0IsT0FBTyxDQUFDLEtBQUQsQ0FBYjtBQUFBLGFBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFoQkYsZUFvQkUsOERBQUMsbUVBQUQ7QUFBYSxjQUFJLEVBQUVsQiw0REFBbkI7QUFBK0IsY0FBSSxFQUFFRixJQUFyQztBQUEyQyxrQkFBUSxFQUFFa0IsUUFBckQ7QUFBK0QsZUFBSyxFQUFFQztBQUF0RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXBCRixlQXFCRSw4REFBQyxvRUFBRDtBQUFjLHFCQUFXLEVBQUVGLEtBQTNCO0FBQWtDLG9CQUFVLEVBQUVuQixVQUE5QztBQUEwRCxZQUFFLEVBQUVDLEVBQTlEO0FBQWtFLGNBQUksRUFBRUM7QUFBeEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbkVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBdUdEOztHQWhIdUJlLEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzNjYjc1MTE3ODJiNjMyNWVmODAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENTU1RyYW5zaXRpb24sIFRyYW5zaXRpb25Hcm91cCB9IGZyb20gXCJyZWFjdC10cmFuc2l0aW9uLWdyb3VwXCI7XHJcbmltcG9ydCB7Um91dGVyLCB1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuY29uc3QgTW9kYWwgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IGNsb3NlID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgY29uc3QgbmFtZSA9IGUudGFyZ2V0LmRhdGFzZXQubmFtZVxyXG4gICAgY29uc29sZS5sb2cobmFtZSlcclxuICAgIGlmIChwcm9wcy5vbkNsb3NlICYmIG5hbWU9PT0nbW9kYWxrYV9ibG9jaycpIHtcclxuICAgICAgcHJvcHMub25DbG9zZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYocHJvcHMuaXNPcGVuKSB7XHJcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5oZWlnaHQ9ICcxMDAlJztcclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1k9ICdoaWRkZW4nO1xyXG4gICAgICBjb25zb2xlLmxvZygndHJ1ZScpXHJcbiAgICB9XHJcbiAgICBpZighcHJvcHMuaXNPcGVuKSB7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3dZPSAndW5zZXQnO1xyXG4gICAgICBjb25zb2xlLmxvZygnZmFsc2UnKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WD0gJ2hpZGRlbic7XHJcbiAgfSwgW3Byb3BzLmlzT3Blbl0pXHJcbiAgaWYgKHByb3BzLmlzT3BlbiA9PT0gdHJ1ZSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBkYXRhLW5hbWU9J21vZGFsa2FfYmxvY2snIGNsYXNzTmFtZT17YG1vZGFsa2FfYmxvY2sgJHtyb3V0ZXIucGF0aG5hbWUgPT09ICcvZGx5YS1maXppY2hlc2tpeC1saWMnICYmICdtb2RhbGthX2NvZGUnfWB9IG9uQ2xpY2s9e2UgPT4gY2xvc2UoZSl9PlxyXG4gICAgICAgIDxkaXYgIGNsYXNzTmFtZT0nbW9kYWxrYV9ib2R5Jz5cclxuICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RhbCIsImltcG9ydCB7Zml6c2VydmljZSwganVyc2VydmljZX0gZnJvbSBcIi4uLy4uL2RlZmF1bHRzL2ZpenNlcnZpY2VcIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCIuLi9tb2RhbC9Nb2RhbFwiXHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmNvbnN0IE1vZGFsU2VydmljZSA9ICh7aXNNb2RhbE9wZW4sIGNsb3NlTW9kYWwsIGlkLCB0eXBlfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgdHlwZUZpbGUgPSB0eXBlID09PSAnZml6J1xyXG4gICAgPyBmaXpzZXJ2aWNlXHJcbiAgICA6IGp1cnNlcnZpY2VcclxuICBjb25zdCB0eXBlVGV4dCA9IHR5cGVGaWxlLmZpbmQoeCA9PiB4LmlkID09IGlkKVxyXG4gIGNvbnN0IGdldFNlcnZpY2UgPSAoKSA9PiB7XHJcbiAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHdpbmRvdy5zY3JvbGwoMCwgMCksIDEwKTtcclxuICAgIC8vIGNsb3NlTW9kYWwoKVxyXG4gICAgaWYodHlwZSA9PT0gJ2ZpeicpIHtcclxuICAgICAgcm91dGVyLnB1c2goe3BhdGhuYW1lOiAnL2RseWEtZml6aWNoZXNraXgtbGljJywgc2Nyb2xscmVzZXQ6IHRydWV9KVxyXG4gICAgICAvLyBSb3V0ZXIucHVzaCgnL2RseWEtZml6aWNoZXNraXgtbGljJykudGhlbigoKSA9PiB3aW5kb3cuc2Nyb2xsVG8oMCwgMCkpO1xyXG4gICAgfWVsc2Uge1xyXG4gICAgICBSb3V0ZXIucHVzaCgnL2p1cnNlcnZpY2UnKS50aGVuKCgpID0+IHdpbmRvdy5zY3JvbGxUbygwLCAwKSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZihpc01vZGFsT3BlbiA9PT0gdHJ1ZSkge1xyXG5cclxuICAgICAgLy8gZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygndHJ1ZScpXHJcbiAgICB9XHJcbiAgfSwgW2lzTW9kYWxPcGVuXSlcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPE1vZGFsIGlzT3Blbj17aXNNb2RhbE9wZW59IG9uQ2xvc2U9eygpID0+IGNsb3NlTW9kYWwoKX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsa2FfY29udGVudCc+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kYWxrYV90b3AnPlxyXG4gICAgICAgICAgICA8aDI+e3R5cGVUZXh0ICYmIHR5cGVUZXh0Lm5hbWUhPT11bmRlZmluZWQ/IHR5cGVUZXh0Lm5hbWU6ICAnJ308L2gyPlxyXG4gICAgICAgICAgICB7dHlwZSA9PT0gJ2ZpeicgJiYgPGltZyBhbHQ9J2ltYWdlJyBzcmM9e2AvaW1nL3VzbHVnaV9uZXcvZml6JHtpZH0uc3ZnYH0vPn1cclxuICAgICAgICAgICAge3R5cGUgPT09ICdqdXInICYmIDxpbWcgYWx0PSdpbWFnZScgc3JjPXtgL2ltZy91c2x1Z2lfbmV3L2p1ciR7aWR9LnN2Z2B9Lz59XHJcbiAgICAgICAgICAgIDxpbWcgYWx0PSdpbWFnZScgY2xhc3NOYW1lPSdsaW5lJyBzcmM9Jy9pbWcvdXNsdWdpL2xpbmUuc3ZnJyAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgINCd0LDRiNC4INGB0L/QtdGG0LjQsNC70LjRgdGC0Ysg0YHQvtC30LTQsNC70Lgg0L/RgNC+0LTRg9C60YIsINCx0LvQsNCz0L7QtNCw0YDRjyDQutC+0YLQvtGA0L7QvNGDINCS0LDQvCDQv9GA0LXQtNC+0YHRgtCw0LLQu9GP0LXRgtGB0Y9cclxuICAgICAgICAgICAg0Y3QutGB0LrQu9GO0LfQuNCy0L3QsNGPINCy0L7Qt9C80L7QttC90L7RgdGC0Ywg0LIg0L7QvdC70LDQudC9INGA0LXQttC40LzQtVxyXG4gICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgIDxhIGhyZWY9Jy9kbHlhLWZpemljaGVza2l4LWxpYycgb25DbGljaz17KCkgPT4gZ2V0U2VydmljZSgpfT48ZGl2IGNsYXNzTmFtZT0nYnV0dG9uJz7Qn9C+0LvRg9GH0LjRgtGMINGD0YHQu9GD0LPRgzwvZGl2PjwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWxTZXJ2aWNlOyIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEZlZWRiYWNrIGZyb20gJy4uL2NvbXBvbmVudHMvc2hhcmVkL0ZlZWRiYWNrJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL3NoYXJlZC9IZWFkZXInXG5pbXBvcnQgTW9kYWxTZXJ2aWNlIGZyb20gJy4uL2NvbXBvbmVudHMvc2hhcmVkL01vZGFsU2VydmljZSdcbmltcG9ydCBOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9zaGFyZWQvTmF2J1xuaW1wb3J0IFNlcnZpY2VMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvc2hhcmVkL1NlcnZpY2VMaXN0J1xuaW1wb3J0IHtmaXpzZXJ2aWNlfSBmcm9tICcuLi9kZWZhdWx0cy9maXpzZXJ2aWNlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbbW9kYWwsXG4gICAgc2V0TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtpZCxcbiAgICBzZXRJZF0gPSB1c2VTdGF0ZSgpXG4gIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gICAgc2V0TW9kYWwoZmFsc2UpXG4gIH1cbiAgY29uc3QgW3R5cGUsc2V0VHlwZV0gPSB1c2VTdGF0ZSgnZml6JylcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0naG9tZSc+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlxuICAgICAgICAgIE5hc2ggQ29tcGFueSAtINCg0LXRiNCw0LXQvNC+INCy0YHQtSFcbiAgICAgICAgPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxIZWFkZXIvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgXG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0nYWRzJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWRzLS1jb250ZW50Jz5cbiAgICAgICAgICAgIDxoMT7QntC/0LvQsNGC0Lgg0LfQsCDRgNC10LfRg9C70YzRgtCw0YIg0YHRgNCw0LfRgyDQvdC+INGB0L4g0YHQutC40LTQutC+0Lk8L2gxPlxuICAgICAgICAgICAgPHA+0JDQutGG0LjRjyFcbiAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgIDxzcGFuPtCf0YDRj9C80L4g0YHQtdC50YfQsNGBINGB0YLQvtC40LzQvtGB0YLRjDxicj48L2JyPlxuICAgICAgICAgICAgICAgIDIwMCDRgtGL0YEg0YLQtdC90LPQtSDigJQgNTAg0YLRi9GBLiDQotC10L3Qs9C1PC9zcGFuPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J1dHRvbnMnPlxuICAgICAgICAgIDxhIGhyZWY9Jy9kbHlhLWZpemljaGVza2l4LWxpYyc+PGlucHV0IHR5cGU9J2J1dHRvbicgY2xhc3NOYW1lPSdidXR0b24nIHZhbHVlPSfQpNC40LfQuNGH0LXRgdC60LjQtSDQu9C40YbQsCcvPjwvYT5cbiAgICAgICAgICA8YSBocmVmPScvanVyc2VydmljZSc+PGlucHV0IHR5cGU9J2J1dHRvbicgY2xhc3NOYW1lPSdidXR0b24gYnV0dG9uX2xpZ2h0JyB2YWx1ZT0n0K7RgNC40LTQuNGH0LXRgdC60LjQtSDQu9C40YbQsCAnLz48L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PiAqL31cblxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9J3doeXVzJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd2h5dXMtLWl0ZW0nPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3doeXVzLS1pbWFnZXMnPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0naW1hZ2UxJyBzcmM9Jy9pbWcvcGxhbnQucG5nJy8+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdpbWFnZTInIHNyYz0nL2ltZy9sb2dvL3doaXRlTG9nby5zdmcnLz5cbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2ltYWdlMycgc3JjPScvaW1nL2xvZ28vbG9nb1NtYWxsLnN2ZycvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd2h5dXMtLWNvbnRlbnQnPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9Jyc+0J/QvtGH0LXQvNGDINC80Ys/PC9wPlxuICAgICAgICAgICAgICA8aDI+0KEg0L3QsNGH0LDQu9C+INGA0LXQt9GD0LvRjNGC0LDRgiDQv9C+0YLQvtC8INC+0L/Qu9Cw0YLQsDwvaDI+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgINCd0LDRiNC4INGB0L/QtdGG0LjQsNC70LjRgdGC0Ysg0YHQvtC30LTQsNC70Lgg0L/RgNC+0LTRg9C60YIsINCx0LvQsNCz0L7QtNCw0YDRjyDQutC+0YLQvtGA0L7QvNGDINCS0LDQvCDQv9GA0LXQtNC+0YHRgtCw0LLQu9GP0LXRgtGB0Y9cbiAgICAgICAgICAgICAgICDRjdC60YHQutC70Y7Qt9C40LLQvdCw0Y8g0LLQvtC30LzQvtC20L3QvtGB0YLRjCDQsiDQvtC90LvQsNC50L0g0YDQtdC20LjQvNC1LCDQuNC3INC70Y7QsdC+0Lk8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3aHl1cy0taXRlbSc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd2h5dXMtLWNvbnRlbnQnPlxuICAgICAgICAgICAgICA8aDI+OTUlINCz0YDQsNC90YLQuNC4PGJyPjwvYnI+XG4gICAgICAgICAgICAgICAg0YPRgdC/0LXRhdCwINC00LXQu9CwPC9oMj5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAg0J3QsNGI0Lgg0YHQv9C10YbQuNCw0LvQuNGB0YLRiyDRgdC+0LfQtNCw0LvQuCDQv9GA0L7QtNGD0LrRgiwg0LHQu9Cw0LPQvtC00LDRgNGPINC60L7RgtC+0YDQvtC80YMg0JLQsNC8INC/0YDQtdC00L7RgdGC0LDQstC70Y/QtdGC0YHRj1xuICAgICAgICAgICAgICAgINGN0LrRgdC60LvRjtC30LjQstC90LDRjyDQstC+0LfQvNC+0LbQvdC+0YHRgtGMINCyINC+0L3Qu9Cw0LnQvSDRgNC10LbQuNC80LUsINC40Lcg0LvRjtCx0L7QuTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd2h5dXMtLWltYWdlcyc+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdpbWFnZTEnIHNyYz0nL2ltZy9jdWJvay5wbmcnLz5cbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2ltYWdlMicgc3JjPScvaW1nL2xvZ28vd2hpdGVMb2dvLnN2ZycvPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0naW1hZ2UzJyBzcmM9Jy9pbWcvbG9nby9sb2dvU21hbGwuc3ZnJy8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3aHl1cy0taXRlbSc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd2h5dXMtLWltYWdlcyc+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdpbWFnZTEnIHNyYz0nL2ltZy9zaGVldC5wbmcnLz5cbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2ltYWdlMicgc3JjPScvaW1nL2xvZ28vd2hpdGVMb2dvLnN2ZycvPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0naW1hZ2UzJyBzcmM9Jy9pbWcvbG9nby9sb2dvU21hbGwuc3ZnJy8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3aHl1cy0tY29udGVudCc+XG4gICAgICAgICAgICAgIDxoMj7Ql9Cw0YnQuNGC0LAg0LLQsNGI0LjRhSDQuNC90YLQtdGA0LXRgdC+0LIg0L3QsCDQstGL0YHQvtC60L7QvCDRg9GA0L7QstC90LUhPC9oMj5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAg0J3QsNGI0Lgg0YHQv9C10YbQuNCw0LvQuNGB0YLRiyDRgdC+0LfQtNCw0LvQuCDQv9GA0L7QtNGD0LrRgiwg0LHQu9Cw0LPQvtC00LDRgNGPINC60L7RgtC+0YDQvtC80YMg0JLQsNC8INC/0YDQtdC00L7RgdGC0LDQstC70Y/QtdGC0YHRj1xuICAgICAgICAgICAgICAgINGN0LrRgdC60LvRjtC30LjQstC90LDRjyDQstC+0LfQvNC+0LbQvdC+0YHRgtGMINCyINC+0L3Qu9Cw0LnQvSDRgNC10LbQuNC80LUsINC40Lcg0LvRjtCx0L7QuTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PiAqL31cbiAgICAgIFxuICAgICAgPEZlZWRiYWNrLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlcnZpY2VzJz5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT0nYWR2YW50YWdlJz5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdhZHZhbnRhZ2UtLWl0ZW0nPjxpbWcgc3JjPScvaW1nL2FkdmFudGFnZTEuc3ZnJy8+XG4gICAgICAgICAgICA8cD45NSUg0LLRi9C40LPRgNCw0L3QvdGL0YVcbiAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgINC00LXQuzwvcD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2FkdmFudGFnZS0taXRlbSc+PGltZyBzcmM9Jy9pbWcvYWR2YW50YWdlMi5zdmcnLz5cbiAgICAgICAgICAgIDxwPtCR0L7Qu9C10LUgMTAg0LvQtdGCPGJyPjwvYnI+XG4gICAgICAgICAgICAgINC90LAg0YDRi9C90LrQtTwvcD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2FkdmFudGFnZS0taXRlbSc+PGltZyBzcmM9Jy9pbWcvYWR2YW50YWdlMy5zdmcnLz5cbiAgICAgICAgICAgIDxwPtCg0LDQsdC+0YLQsNC10Lwg0L/Qvjxicj48L2JyPlxuICAgICAgICAgICAgICDQstGB0LXQvNGDINCg0Jo8L3A+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VydmljZXMtLWhlYWRlcic+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3R5cGU9PT0nZml6JyAmJiAnYWN0aXZlJ30gb25DbGljaz17KCkgPT4gc2V0VHlwZSgnZml6Jyl9PtCk0LjQt9C40YfQtdGB0LrQuNC1INC70LjRhtCwPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXt0eXBlPT09J2p1cicgJiYgJ2FjdGl2ZSd9IG9uQ2xpY2s9eygpID0+IHNldFR5cGUoJ2p1cicpfT7QrtGA0LjQtNC40YfQtdGB0LrQuNC1INC70LjRhtCwPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxTZXJ2aWNlTGlzdCBsaXN0PXtmaXpzZXJ2aWNlfSB0eXBlPXt0eXBlfSBzZXRNb2RhbD17c2V0TW9kYWx9IHNldElkPXtzZXRJZH0vPlxuICAgICAgICAgIDxNb2RhbFNlcnZpY2UgaXNNb2RhbE9wZW49e21vZGFsfSBjbG9zZU1vZGFsPXtjbG9zZU1vZGFsfSBpZD17aWR9IHR5cGU9e3R5cGV9Lz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==