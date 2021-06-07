self["webpackHotUpdate_N_E"]("pages/uslugi",{

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

/***/ "./pages/uslugi.js":
/*!*************************!*\
  !*** ./pages/uslugi.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_shared_ModalService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/shared/ModalService */ "./components/shared/ModalService.js");
/* harmony import */ var _components_shared_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/shared/Nav */ "./components/shared/Nav.js");
/* harmony import */ var _components_shared_ServiceList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/shared/ServiceList */ "./components/shared/ServiceList.js");
/* harmony import */ var _defaults_fizservice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../defaults/fizservice */ "./defaults/fizservice.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\job\\nashcompany\\pages\\uslugi.js",
    _this = undefined,
    _s = $RefreshSig$();








var Uslugi = function Uslugi() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      modal = _useState[0],
      setModal = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),
      id = _useState2[0],
      setId = _useState2[1];

  var closeModal = function closeModal() {
    setModal(false);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "uslugi",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "\u0423\u0441\u043B\u0443\u0433\u0438"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_ModalService__WEBPACK_IMPORTED_MODULE_2__.default, {
      isModalOpen: modal,
      closeModal: closeModal,
      id: id,
      type: "fiz"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "header",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "bg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Nav__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "header--content",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: ["\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, _this), "\u0443\u0441\u043B\u0443\u0433\u0443:"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "content_buttons",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "/dlya-fizicheskix-lic",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              className: "button",
              value: "\u0424\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043B\u0438\u0446\u0430",
              type: "button"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 43
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "/jurservice",
            children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              className: "button button--light",
              value: "\u042E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043B\u0438\u0446\u0430",
              type: "button"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 34
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "uslugi--list container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "services",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: "\u0423\u0441\u043B\u0443\u0433\u0438 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u043B\u0438\u0446\u0430\u043C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_ServiceList__WEBPACK_IMPORTED_MODULE_4__.default, {
          list: _defaults_fizservice__WEBPACK_IMPORTED_MODULE_5__.fizservice,
          type: "fiz",
          setModal: setModal,
          setId: setId
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: "\u0423\u0441\u043B\u0443\u0433\u0438 \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u043B\u0438\u0446\u0430\u043C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_ServiceList__WEBPACK_IMPORTED_MODULE_4__.default, {
          list: _defaults_fizservice__WEBPACK_IMPORTED_MODULE_5__.jurservice,
          type: "jur",
          setModal: setModal,
          setId: setId
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, _this);
};

_s(Uslugi, "9oRpuFLsnxIY0z4eYur9vjk/akQ=");

_c = Uslugi;
/* harmony default export */ __webpack_exports__["default"] = (Uslugi);

var _c;

$RefreshReg$(_c, "Uslugi");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2RhbC9Nb2RhbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvTW9kYWxTZXJ2aWNlLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy91c2x1Z2kuanMiXSwibmFtZXMiOlsiTW9kYWwiLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsImNsb3NlIiwiZSIsInByZXZlbnREZWZhdWx0IiwibmFtZSIsInRhcmdldCIsImRhdGFzZXQiLCJjb25zb2xlIiwibG9nIiwib25DbG9zZSIsInVzZUVmZmVjdCIsImlzT3BlbiIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic3R5bGUiLCJoZWlnaHQiLCJib2R5Iiwib3ZlcmZsb3dZIiwib3ZlcmZsb3dYIiwicGF0aG5hbWUiLCJjaGlsZHJlbiIsIk1vZGFsU2VydmljZSIsImlzTW9kYWxPcGVuIiwiY2xvc2VNb2RhbCIsImlkIiwidHlwZSIsInR5cGVGaWxlIiwiZml6c2VydmljZSIsImp1cnNlcnZpY2UiLCJ0eXBlVGV4dCIsImZpbmQiLCJ4IiwiZ2V0U2VydmljZSIsInB1c2giLCJzY3JvbGxyZXNldCIsIlJvdXRlciIsInRoZW4iLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInVuZGVmaW5lZCIsIlVzbHVnaSIsInVzZVN0YXRlIiwibW9kYWwiLCJzZXRNb2RhbCIsInNldElkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDdkIsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4Qjs7QUFDQSxNQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxDQUFELEVBQU87QUFDbkJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBLFFBQU1DLElBQUksR0FBR0YsQ0FBQyxDQUFDRyxNQUFGLENB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aUJBSkYsZUFLRSw4REFBQyxtRUFBRDtBQUFhLGNBQUksRUFBRWhCLDREQUFuQjtBQUErQixjQUFJLEVBQUMsS0FBcEM7QUFBMEMsa0JBQVEsRUFBRWUsUUFBcEQ7QUFBOEQsZUFBSyxFQUFFQztBQUFyRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFuQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFnQ0QsQ0F4Q0Q7O0dBQU1KLE07O0tBQUFBLE07QUEwQ04sK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNsdWdpLjMzY2I3NTExNzgyYjYzMjVlZjgwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDU1NUcmFuc2l0aW9uLCBUcmFuc2l0aW9uR3JvdXAgfSBmcm9tIFwicmVhY3QtdHJhbnNpdGlvbi1ncm91cFwiO1xyXG5pbXBvcnQge1JvdXRlciwgdXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmNvbnN0IE1vZGFsID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBjbG9zZSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGNvbnN0IG5hbWUgPSBlLnRhcmdldC5kYXRhc2V0Lm5hbWVcclxuICAgIGNvbnNvbGUubG9nKG5hbWUpXHJcbiAgICBpZiAocHJvcHMub25DbG9zZSAmJiBuYW1lPT09J21vZGFsa2FfYmxvY2snKSB7XHJcbiAgICAgIHByb3BzLm9uQ2xvc2UoKTtcclxuICAgIH1cclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmKHByb3BzLmlzT3Blbikge1xyXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuaGVpZ2h0PSAnMTAwJSc7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3dZPSAnaGlkZGVuJztcclxuICAgICAgY29uc29sZS5sb2coJ3RydWUnKVxyXG4gICAgfVxyXG4gICAgaWYoIXByb3BzLmlzT3Blbikge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WT0gJ3Vuc2V0JztcclxuICAgICAgY29uc29sZS5sb2coJ2ZhbHNlJylcclxuICAgIH1cclxuICAgIFxyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1g9ICdoaWRkZW4nO1xyXG4gIH0sIFtwcm9wcy5pc09wZW5dKVxyXG4gIGlmIChwcm9wcy5pc09wZW4gPT09IHRydWUpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgZGF0YS1uYW1lPSdtb2RhbGthX2Jsb2NrJyBjbGFzc05hbWU9e2Btb2RhbGthX2Jsb2NrICR7cm91dGVyLnBhdGhuYW1lID09PSAnL2RseWEtZml6aWNoZXNraXgtbGljJyAmJiAnbW9kYWxrYV9jb2RlJ31gfSBvbkNsaWNrPXtlID0+IGNsb3NlKGUpfT5cclxuICAgICAgICA8ZGl2ICBjbGFzc05hbWU9J21vZGFsa2FfYm9keSc+XHJcbiAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWwiLCJpbXBvcnQge2ZpenNlcnZpY2UsIGp1cnNlcnZpY2V9IGZyb20gXCIuLi8uLi9kZWZhdWx0cy9maXpzZXJ2aWNlXCI7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwiLi4vbW9kYWwvTW9kYWxcIlxyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5jb25zdCBNb2RhbFNlcnZpY2UgPSAoe2lzTW9kYWxPcGVuLCBjbG9zZU1vZGFsLCBpZCwgdHlwZX0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHR5cGVGaWxlID0gdHlwZSA9PT0gJ2ZpeidcclxuICAgID8gZml6c2VydmljZVxyXG4gICAgOiBqdXJzZXJ2aWNlXHJcbiAgY29uc3QgdHlwZVRleHQgPSB0eXBlRmlsZS5maW5kKHggPT4geC5pZCA9PSBpZClcclxuICBjb25zdCBnZXRTZXJ2aWNlID0gKCkgPT4ge1xyXG4gICAgLy8gc2V0VGltZW91dCgoKSA9PiB3aW5kb3cuc2Nyb2xsKDAsIDApLCAxMCk7XHJcbiAgICAvLyBjbG9zZU1vZGFsKClcclxuICAgIGlmKHR5cGUgPT09ICdmaXonKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKHtwYXRobmFtZTogJy9kbHlhLWZpemljaGVza2l4LWxpYycsIHNjcm9sbHJlc2V0OiB0cnVlfSlcclxuICAgICAgLy8gUm91dGVyLnB1c2goJy9kbHlhLWZpemljaGVza2l4LWxpYycpLnRoZW4oKCkgPT4gd2luZG93LnNjcm9sbFRvKDAsIDApKTtcclxuICAgIH1lbHNlIHtcclxuICAgICAgUm91dGVyLnB1c2goJy9qdXJzZXJ2aWNlJykudGhlbigoKSA9PiB3aW5kb3cuc2Nyb2xsVG8oMCwgMCkpO1xyXG4gICAgfVxyXG4gIH1cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYoaXNNb2RhbE9wZW4gPT09IHRydWUpIHtcclxuXHJcbiAgICAgIC8vIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICAgICAgLy8gY29uc29sZS5sb2coJ3RydWUnKVxyXG4gICAgfVxyXG4gIH0sIFtpc01vZGFsT3Blbl0pXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxNb2RhbCBpc09wZW49e2lzTW9kYWxPcGVufSBvbkNsb3NlPXsoKSA9PiBjbG9zZU1vZGFsKCl9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbGthX2NvbnRlbnQnPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsa2FfdG9wJz5cclxuICAgICAgICAgICAgPGgyPnt0eXBlVGV4dCAmJiB0eXBlVGV4dC5uYW1lIT09dW5kZWZpbmVkPyB0eXBlVGV4dC5uYW1lOiAgJyd9PC9oMj5cclxuICAgICAgICAgICAge3R5cGUgPT09ICdmaXonICYmIDxpbWcgYWx0PSdpbWFnZScgc3JjPXtgL2ltZy91c2x1Z2lfbmV3L2ZpeiR7aWR9LnN2Z2B9Lz59XHJcbiAgICAgICAgICAgIHt0eXBlID09PSAnanVyJyAmJiA8aW1nIGFsdD0naW1hZ2UnIHNyYz17YC9pbWcvdXNsdWdpX25ldy9qdXIke2lkfS5zdmdgfS8+fVxyXG4gICAgICAgICAgICA8aW1nIGFsdD0naW1hZ2UnIGNsYXNzTmFtZT0nbGluZScgc3JjPScvaW1nL3VzbHVnaS9saW5lLnN2ZycgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICDQndCw0YjQuCDRgdC/0LXRhtC40LDQu9C40YHRgtGLINGB0L7Qt9C00LDQu9C4INC/0YDQvtC00YPQutGCLCDQsdC70LDQs9C+0LTQsNGA0Y8g0LrQvtGC0L7RgNC+0LzRgyDQktCw0Lwg0L/RgNC10LTQvtGB0YLQsNCy0LvRj9C10YLRgdGPXHJcbiAgICAgICAgICAgINGN0LrRgdC60LvRjtC30LjQstC90LDRjyDQstC+0LfQvNC+0LbQvdC+0YHRgtGMINCyINC+0L3Qu9Cw0LnQvSDRgNC10LbQuNC80LVcclxuICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICA8YSBocmVmPScvZGx5YS1maXppY2hlc2tpeC1saWMnIG9uQ2xpY2s9eygpID0+IGdldFNlcnZpY2UoKX0+PGRpdiBjbGFzc05hbWU9J2J1dHRvbic+0J/QvtC70YPRh9C40YLRjCDRg9GB0LvRg9Cz0YM8L2Rpdj48L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vZGFsU2VydmljZTsiLCJpbXBvcnQge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgTW9kYWxTZXJ2aWNlIGZyb20gXCIuLi9jb21wb25lbnRzL3NoYXJlZC9Nb2RhbFNlcnZpY2VcIlxyXG5pbXBvcnQgTmF2IGZyb20gXCIuLi9jb21wb25lbnRzL3NoYXJlZC9OYXZcIlxyXG5pbXBvcnQgU2VydmljZUxpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvc2hhcmVkL1NlcnZpY2VMaXN0XCJcclxuaW1wb3J0IHtmaXpzZXJ2aWNlLCBqdXJzZXJ2aWNlfSBmcm9tIFwiLi4vZGVmYXVsdHMvZml6c2VydmljZVwiXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuY29uc3QgVXNsdWdpID0gKCkgPT4ge1xyXG4gIGNvbnN0IFttb2RhbCxcclxuICAgIHNldE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtpZCxcclxuICAgIHNldElkXSA9IHVzZVN0YXRlKClcclxuICBjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0TW9kYWwoZmFsc2UpXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0ndXNsdWdpJz5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlxyXG4gICAgICAgICAg0KPRgdC70YPQs9C4XHJcbiAgICAgICAgPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8TW9kYWxTZXJ2aWNlIGlzTW9kYWxPcGVuPXttb2RhbH0gY2xvc2VNb2RhbD17Y2xvc2VNb2RhbH0gaWQ9e2lkfSB0eXBlPSdmaXonLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2hlYWRlcic+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JnJz48L2Rpdj5cclxuICAgICAgICA8TmF2Lz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naGVhZGVyLS1jb250ZW50Jz5cclxuICAgICAgICAgIDxoMT7Qn9C+0LvRg9GH0LjRgtGMXHJcbiAgICAgICAgICAgIDxicj48L2JyPtGD0YHQu9GD0LPRgzo8L2gxPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnRfYnV0dG9ucyc+XHJcbiAgICAgICAgICA8YSBocmVmPScvZGx5YS1maXppY2hlc2tpeC1saWMnPjxpbnB1dCBjbGFzc05hbWU9J2J1dHRvbicgdmFsdWU9J9Ck0LjQt9C40YfQtdGB0LrQuNC1INC70LjRhtCwJyB0eXBlPSdidXR0b24nLz48L2E+XHJcbiAgICAgICAgICA8YSBocmVmPScvanVyc2VydmljZSc+IDxpbnB1dCBjbGFzc05hbWU9J2J1dHRvbiBidXR0b24tLWxpZ2h0JyB2YWx1ZT0n0K7RgNC40LTQuNGH0LXRgdC60LjQtSDQu9C40YbQsCcgdHlwZT0nYnV0dG9uJy8+PC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndXNsdWdpLS1saXN0IGNvbnRhaW5lcic+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZXJ2aWNlcyc+XHJcbiAgICAgICAgICA8aDI+0KPRgdC70YPQs9C4INGE0LjQt9C40YfQtdGB0LrQuNC8INC70LjRhtCw0Lw8L2gyPlxyXG4gICAgICAgICAgPFNlcnZpY2VMaXN0IGxpc3Q9e2ZpenNlcnZpY2V9IHR5cGU9J2Zpeicgc2V0TW9kYWw9e3NldE1vZGFsfSBzZXRJZD17c2V0SWR9Lz5cclxuXHJcbiAgICAgICAgICA8aDI+0KPRgdC70YPQs9C4INGO0YDQuNC00LjRh9C10YHQutC40Lwg0LvQuNGG0LDQvDwvaDI+XHJcbiAgICAgICAgICA8U2VydmljZUxpc3QgbGlzdD17anVyc2VydmljZX0gdHlwZT0nanVyJyBzZXRNb2RhbD17c2V0TW9kYWx9IHNldElkPXtzZXRJZH0vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNsdWdpOyJdLCJzb3VyY2VSb290IjoiIn0=