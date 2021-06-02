self["webpackHotUpdate_N_E"]("pages/getservice",{

/***/ "./components/getservice/SecondStep.js":
/*!*********************************************!*\
  !*** ./components/getservice/SecondStep.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defaults_fizservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../defaults/fizservice */ "./defaults/fizservice.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _defaults_validations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../defaults/validations */ "./defaults/validations.js");
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-dropzone */ "./node_modules/react-dropzone/dist/es/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "E:\\job\\nashcompany\\components\\getservice\\SecondStep.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var SecondStep = function SecondStep(_ref) {
  _s();

  var setLoading = _ref.setLoading;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
  var pathname = router.pathname;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      fileNames = _useState[0],
      setFileNames = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    id: js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get('lead_id'),
    token: js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get('token'),
    description: '',
    sphere: '1',
    amount: ''
  }),
      formData = _useState2[0],
      setFormData = _useState2[1];

  var onChange = function onChange(e) {
    var name = e.target.name;
    setFormData(_objectSpread(_objectSpread({}, formData), {}, (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, name, e.target.value)));
  };

  var handleDrop = function handleDrop(acceptedFiles) {
    return setFileNames(acceptedFiles.map(function (file) {
      return file.name;
    }));
  };

  var stepSecond = function stepSecond(values) {
    setLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_5___default().get("".concat("https://crediter.kz/api", "/stepTwo"), {
      params: {
        id: values.id,
        token: values.token,
        description: values.description,
        sphere: values.sphere,
        amount: values.amount
      }
    }).then(function (res) {
      setLoading(false); // console.log(res)

      if (res.data.success) {
        next_router__WEBPACK_IMPORTED_MODULE_6___default().push('/getservice?step=3');

        if (pathname === '/jurservice') {
          js_cookie__WEBPACK_IMPORTED_MODULE_4___default().set('stepjur', 2);
        }

        if (pathname === '/getservice') {
          js_cookie__WEBPACK_IMPORTED_MODULE_4___default().set('step', 3);
        }

        js_cookie__WEBPACK_IMPORTED_MODULE_4___default().set('step', 3);
        js_cookie__WEBPACK_IMPORTED_MODULE_4___default().set('amount', formData.amount);
      }

      if (!res.data.success) {}
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "form_register",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_7__.Formik, {
      initialValues: {
        id: js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get('lead_id'),
        token: js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get('token'),
        description: '',
        sphere: '1',
        amount: ''
      },
      onSubmit: function onSubmit(values) {
        stepSecond(values);
      },
      children: function children(_ref2) {
        var _jsxDEV2;

        var errors = _ref2.errors,
            touched = _ref2.touched;
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_7__.Form, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_7__.Field, {
            as: "select",
            validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_8__.required,
            name: "sphere",
            className: "form_select",
            children: _defaults_fizservice__WEBPACK_IMPORTED_MODULE_3__.fizservice.map(function (fiz, index) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                "data-img": "/img/uslugi/".concat(index + 1, ".svg"),
                value: index + 1,
                children: fiz.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 17
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, _this), errors.sphere && touched.sphere ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "text-danger",
            children: errors.sphere
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 17
          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "text-danger"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 17
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_7__.Field, {
            as: "textarea",
            name: "description",
            validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_8__.required,
            placeholder: "\u041E\u043F\u0438\u0448\u0438\u0442\u0435 \u0432\u0430\u0448\u0443 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044E"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, _this), errors.description && touched.description ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "text-danger",
            children: errors.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 17
          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "text-danger"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 17
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_7__.Field, {
            type: "number",
            validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_8__.required,
            name: "amount",
            placeholder: "\u0421\u0443\u043C\u043C\u0430 \u0438\u0441\u043A\u0430"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, _this), errors.amount && touched.amount ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "text-danger",
            children: errors.amount
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 17
          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "text-danger"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 17
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "dropfiles",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_dropzone__WEBPACK_IMPORTED_MODULE_9__.default, {
              onDrop: handleDrop,
              children: function children(_ref3) {
                var getRootProps = _ref3.getRootProps,
                    getInputProps = _ref3.getInputProps;
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", _objectSpread(_objectSpread({}, getRootProps({
                  className: "dropzone"
                })), {}, {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread({}, getInputProps()), void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 100,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                    children: "\u041F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0444\u0430\u0439\u043B\u044B \u0438\u043B\u0438 \u0449\u0435\u043B\u043A\u043D\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u0444\u0430\u0439\u043B\u044B"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 101,
                    columnNumber: 21
                  }, _this)]
                }), void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 99,
                  columnNumber: 19
                }, _this);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
                children: "\u0424\u0430\u0439\u043B\u044B:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                children: fileNames.map(function (fileName) {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: fileName
                  }, fileName, false, {
                    fileName: _jsxFileName,
                    lineNumber: 109,
                    columnNumber: 21
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "firststep_banner",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "firststep_banner--img",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                className: "secondstep",
                src: "/img/form/secondstep.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "firststep_banner--button",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", (_jsxDEV2 = {
                className: "singlebtn",
                type: "submit"
              }, (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_jsxDEV2, "className", "button"), (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_jsxDEV2, "value", "\u0414\u0430\u043B\u0435\u0435"), _jsxDEV2), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                children: ["\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 124,
                  columnNumber: 39
                }, _this), "\u043F\u043E\u0442\u043E\u043C \u043E\u043F\u043B\u0430\u0442\u0430"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, _this);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 5
  }, _this);
};

_s(SecondStep, "sf4IvPcyzk8Cr+YLLimHxOxdSkk=", false, function () {
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


/***/ }),

/***/ "./pages/getservice.js":
/*!*****************************!*\
  !*** ./pages/getservice.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_getservice_FirstStep__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/getservice/FirstStep */ "./components/getservice/FirstStep.js");
/* harmony import */ var _components_getservice_SecondStep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/getservice/SecondStep */ "./components/getservice/SecondStep.js");
/* harmony import */ var _components_shared_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/shared/Nav */ "./components/shared/Nav.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_getservice_ThirdStep__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/getservice/ThirdStep */ "./components/getservice/ThirdStep.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_loader_Loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/loader/Loader */ "./components/loader/Loader.js");
/* harmony import */ var _components_shared_CodeModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/shared/CodeModal */ "./components/shared/CodeModal.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\job\\nashcompany\\pages\\getservice.js",
    _this = undefined,
    _s = $RefreshSig$();












var GetService = function GetService() {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
  var step = router.query.step;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false),
      loading = _useState[0],
      setLoading = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(''),
      cookieStep = _useState2[0],
      setCookieStep = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(function () {
    setCookieStep(js_cookie__WEBPACK_IMPORTED_MODULE_7___default().get('step'));
  }, [js_cookie__WEBPACK_IMPORTED_MODULE_7___default().get('step')]);
  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(function () {
    if (!js_cookie__WEBPACK_IMPORTED_MODULE_7___default().get('step')) {
      router.push('/getservice');
    }

    if (js_cookie__WEBPACK_IMPORTED_MODULE_7___default().get('step') === '2') {
      router.push('/getservice?step=2');
    }

    if (js_cookie__WEBPACK_IMPORTED_MODULE_7___default().get('step') === '3') {
      router.push('/getservice?step=3');
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "getservice",
    children: [loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_loader_Loader__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 19
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0443\u0441\u043B\u0443\u0433\u0443 | \u0424\u0438\u0437. \u043B\u0438\u0446\u043E"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "header",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Nav__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "bg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "form--header",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: "\u0423\u0441\u043B\u0443\u0433\u0438 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u043B\u0438\u0446\u0430\u043C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: ["\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, _this), "\u0443\u0441\u043B\u0443\u0433\u0443:"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "form_service ",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "form_header",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: cookieStep === undefined ? 'active' : '',
              children: "1 \u0428\u0430\u0433"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: cookieStep === '2' && step === '2' && 'active',
              children: "2 \u0428\u0430\u0433"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: cookieStep === '3' && step === '3' && 'active',
              children: "3 \u0428\u0430\u0433"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 9
        }, _this), js_cookie__WEBPACK_IMPORTED_MODULE_7___default().get('step') === undefined && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_getservice_FirstStep__WEBPACK_IMPORTED_MODULE_1__.default, {
          setLoading: setLoading
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 46
        }, _this), js_cookie__WEBPACK_IMPORTED_MODULE_7___default().get('step') === '2' && step === '2' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_getservice_SecondStep__WEBPACK_IMPORTED_MODULE_2__.default, {
          setLoading: setLoading
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 54
        }, _this), js_cookie__WEBPACK_IMPORTED_MODULE_7___default().get('step') === '3' && step === '3' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_getservice_ThirdStep__WEBPACK_IMPORTED_MODULE_5__.default, {
          setLoading: setLoading
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 54
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }, _this);
};

_s(GetService, "yydxgQGStowXFflCLwos08R82pU=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter];
});

_c = GetService;
/* harmony default export */ __webpack_exports__["default"] = (GetService);

var _c;

$RefreshReg$(_c, "GetService");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRzZXJ2aWNlL1NlY29uZFN0ZXAuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2dldHNlcnZpY2UuanMiXSwibmFtZXMiOlsiU2Vjb25kU3RlcCIsInNldExvYWRpbmciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwYXRobmFtZSIsInVzZVN0YXRlIiwiZmlsZU5hbWVzIiwic2V0RmlsZU5hbWVzIiwiaWQiLCJjb29raWUiLCJ0b2tlbiIsImRlc2NyaXB0aW9uIiwic3BoZXJlIiwiYW1vdW50IiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsIm9uQ2hhbmdlIiwiZSIsIm5hbWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZURyb3AiLCJhY2NlcHRlZEZpbGVzIiwibWFwIiwiZmlsZSIsInN0ZXBTZWNvbmQiLCJ2YWx1ZXMiLCJheGlvcyIsInByb2Nlc3MiLCJwYXJhbXMiLCJ0aGVuIiwicmVzIiwiZGF0YSIsInN1Y2Nlc3MiLCJSb3V0ZXIiLCJlcnJvcnMiLCJ0b3VjaGVkIiwicmVxdWlyZWQiLCJmaXpzZXJ2aWNlIiwiZml6IiwiaW5kZXgiLCJnZXRSb290UHJvcHMiLCJnZXRJbnB1dFByb3BzIiwiY2xhc3NOYW1lIiwiZmlsZU5hbWUiLCJHZXRTZXJ2aWNlIiwic3RlcCIsInF1ZXJ5IiwibG9hZGluZyIsImNvb2tpZVN0ZXAiLCJzZXRDb29raWVTdGVwIiwidXNlRWZmZWN0IiwicHVzaCIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBa0I7QUFBQTs7QUFBQSxNQUFoQkMsVUFBZ0IsUUFBaEJBLFVBQWdCO0FBQ25DLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFDQSxNQUFNQyxRQUFRLEdB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QixHQUF2QixJQUE4QnFDLElBQUksS0FBRyxHQUFyQyxpQkFBNEMsOERBQUMscUVBQUQ7QUFBVyxvQkFBVSxFQUFFN0M7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFYN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFnREQsQ0F2RUQ7O0dBQU00QyxVO1VBQ1cxQyxrRDs7O0tBRFgwQyxVO0FBd0VOLCtEQUFlQSxVQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2dldHNlcnZpY2UuOTlhNDJkYWIwM2NlNWFmNjZmN2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7Zml6c2VydmljZX0gZnJvbSBcIi4uLy4uL2RlZmF1bHRzL2ZpenNlcnZpY2VcIlxyXG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSdcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCBSb3V0ZXIsIHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCB7Rm9ybWlrLCBGb3JtLCBGaWVsZH0gZnJvbSAnZm9ybWlrJztcclxuaW1wb3J0IHtyZXF1aXJlZH0gZnJvbSBcIi4uLy4uL2RlZmF1bHRzL3ZhbGlkYXRpb25zXCJcclxuaW1wb3J0IERyb3B6b25lIGZyb20gXCJyZWFjdC1kcm9wem9uZVwiO1xyXG5cclxuY29uc3QgU2Vjb25kU3RlcCA9ICh7c2V0TG9hZGluZ30pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHBhdGhuYW1lID0gcm91dGVyLnBhdGhuYW1lXHJcbiAgY29uc3QgW2ZpbGVOYW1lcyxcclxuICAgIHNldEZpbGVOYW1lc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2Zvcm1EYXRhLFxyXG4gICAgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgaWQ6IGNvb2tpZS5nZXQoJ2xlYWRfaWQnKSxcclxuICAgIHRva2VuOiBjb29raWUuZ2V0KCd0b2tlbicpLFxyXG4gICAgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgc3BoZXJlOiAnMScsXHJcbiAgICBhbW91bnQ6ICcnXHJcbiAgfSlcclxuICBjb25zdCBvbkNoYW5nZSA9IGUgPT4ge1xyXG4gICAgY29uc3QgbmFtZSA9IGUudGFyZ2V0Lm5hbWVcclxuICAgIHNldEZvcm1EYXRhKHtcclxuICAgICAgLi4uZm9ybURhdGEsXHJcbiAgICAgIFtuYW1lXTogZS50YXJnZXQudmFsdWVcclxuICAgIH0pXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZURyb3AgPSBhY2NlcHRlZEZpbGVzID0+IHNldEZpbGVOYW1lcyhhY2NlcHRlZEZpbGVzLm1hcChmaWxlID0+IGZpbGUubmFtZSkpO1xyXG5cclxuICBjb25zdCBzdGVwU2Vjb25kID0gKHZhbHVlcykgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG5cclxuICAgIGF4aW9zXHJcbiAgICAgIC5nZXQoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L3N0ZXBUd29gLCB7XHJcbiAgICAgIHBhcmFtczoge1xyXG4gICAgICAgIGlkOiB2YWx1ZXMuaWQsXHJcbiAgICAgICAgdG9rZW46IHZhbHVlcy50b2tlbixcclxuICAgICAgICBkZXNjcmlwdGlvbjogdmFsdWVzLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIHNwaGVyZTogdmFsdWVzLnNwaGVyZSxcclxuICAgICAgICBhbW91bnQ6IHZhbHVlcy5hbW91bnRcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICBpZiAocmVzLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgUm91dGVyLnB1c2goJy9nZXRzZXJ2aWNlP3N0ZXA9MycpXHJcbiAgICAgICAgICBpZihwYXRobmFtZT09PScvanVyc2VydmljZScpIHtcclxuICAgICAgICAgICAgY29va2llLnNldCgnc3RlcGp1cicsIDIpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZihwYXRobmFtZSA9PT0gJy9nZXRzZXJ2aWNlJykge1xyXG4gICAgICAgICAgICBjb29raWUuc2V0KCdzdGVwJywzKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29va2llLnNldCgnc3RlcCcsIDMpXHJcbiAgICAgICAgICBjb29raWUuc2V0KCdhbW91bnQnLCBmb3JtRGF0YS5hbW91bnQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcmVzLmRhdGEuc3VjY2Vzcykge31cclxuICAgICAgfSlcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtX3JlZ2lzdGVyJz5cclxuICAgICAgPEZvcm1pa1xyXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcclxuICAgICAgICBpZDogY29va2llLmdldCgnbGVhZF9pZCcpLFxyXG4gICAgICAgIHRva2VuOiBjb29raWUuZ2V0KCd0b2tlbicpLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcclxuICAgICAgICBzcGhlcmU6ICcxJyxcclxuICAgICAgICBhbW91bnQ6ICcnXHJcbiAgICAgIH19XHJcbiAgICAgICAgb25TdWJtaXQ9XHJcbiAgICAgICAgeyh2YWx1ZXMpID0+IHtzdGVwU2Vjb25kKHZhbHVlcyl9fT5cclxuICAgICAgICB7KHtlcnJvcnMsIHRvdWNoZWR9KSA9PiAoXHJcbiAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgPEZpZWxkIGFzPSdzZWxlY3QnIHZhbGlkYXRlPXtyZXF1aXJlZH0gbmFtZT0nc3BoZXJlJyBjbGFzc05hbWU9J2Zvcm1fc2VsZWN0Jz5cclxuICAgICAgICAgICAgICB7Zml6c2VydmljZS5tYXAoKGZpeiwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxvcHRpb24gZGF0YS1pbWc9e2AvaW1nL3VzbHVnaS8ke2luZGV4KzF9LnN2Z2B9IHZhbHVlPXtpbmRleCArIDF9PntmaXoubmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9GaWVsZD5cclxuICAgICAgICAgICAgeyhlcnJvcnMuc3BoZXJlICYmIHRvdWNoZWQuc3BoZXJlKVxyXG4gICAgICAgICAgICAgID8gPHAgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+e2Vycm9ycy5zcGhlcmV9PC9wPlxyXG4gICAgICAgICAgICAgIDogPHAgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+PC9wPn1cclxuICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgYXM9J3RleHRhcmVhJ1xyXG4gICAgICAgICAgICAgIG5hbWU9J2Rlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAgICAgIHZhbGlkYXRlPXtyZXF1aXJlZH1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0n0J7Qv9C40YjQuNGC0LUg0LLQsNGI0YMg0YHQuNGC0YPQsNGG0LjRjic+PC9GaWVsZD5cclxuICAgICAgICAgICAgeyhlcnJvcnMuZGVzY3JpcHRpb24gJiYgdG91Y2hlZC5kZXNjcmlwdGlvbilcclxuICAgICAgICAgICAgICA/IDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPntlcnJvcnMuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgIDogPHAgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+PC9wPn1cclxuICAgICAgICAgICAgPEZpZWxkIHR5cGU9J251bWJlcicgdmFsaWRhdGU9e3JlcXVpcmVkfSBuYW1lPSdhbW91bnQnIHBsYWNlaG9sZGVyPSfQodGD0LzQvNCwINC40YHQutCwJz48L0ZpZWxkPlxyXG4gICAgICAgICAgICB7KGVycm9ycy5hbW91bnQgJiYgdG91Y2hlZC5hbW91bnQpXHJcbiAgICAgICAgICAgICAgPyA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz57ZXJyb3JzLmFtb3VudH08L3A+XHJcbiAgICAgICAgICAgICAgOiA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz48L3A+fVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZHJvcGZpbGVzJz5cclxuICAgICAgICAgICAgICA8RHJvcHpvbmUgb25Ecm9wPXtoYW5kbGVEcm9wfT5cclxuICAgICAgICAgICAgICAgIHsoe2dldFJvb3RQcm9wcywgZ2V0SW5wdXRQcm9wc30pID0+IChcclxuICAgICAgICAgICAgICAgICAgPGRpdiB7Li4uZ2V0Um9vdFByb3BzKHsgY2xhc3NOYW1lOiBcImRyb3B6b25lXCIgfSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB7Li4uZ2V0SW5wdXRQcm9wcygpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+0J/QtdGA0LXRgtCw0YnQuNGC0LUg0YTQsNC50LvRiyDQuNC70Lgg0YnQtdC70LrQvdC40YLQtSwg0YfRgtC+0LHRiyDQstGL0LHRgNCw0YLRjCDRhNCw0LnQu9GLPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9Ecm9wem9uZT5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz7QpNCw0LnQu9GLOjwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICB7ZmlsZU5hbWVzLm1hcChmaWxlTmFtZSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17ZmlsZU5hbWV9PntmaWxlTmFtZX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmlyc3RzdGVwX2Jhbm5lcic+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmlyc3RzdGVwX2Jhbm5lci0taW1nJz5cclxuICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J3NlY29uZHN0ZXAnIHNyYz0nL2ltZy9mb3JtL3NlY29uZHN0ZXAucG5nJy8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaXJzdHN0ZXBfYmFubmVyLS1idXR0b24nPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NpbmdsZWJ0bidcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPSdzdWJtaXQnXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdidXR0b24nXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9J9CU0LDQu9C10LUnLz5cclxuICAgICAgICAgICAgICAgICAgPGI+0KHQvdCw0YfQsNC70LAg0YDQtdC30YPQu9GM0YLQsNGCPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgICAg0L/QvtGC0L7QvCDQvtC/0LvQsNGC0LA8L2I+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgIDwvRm9ybWlrPlxyXG4gICAgICB7LyogPGZvcm0gb25TdWJtaXQ9eyhlKSA9PiBzdGVwU2Vjb25kKGUpfT5cclxuICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXtlPT4gb25DaGFuZ2UoZSl9IHZhbHVlPXtmb3JtRGF0YS5zcGhlcmV9IG5hbWU9J3NwaGVyZScgY2xhc3NOYW1lPSdmb3JtX3NlbGVjdCc+XHJcbiAgICAgICAgICB7Zml6c2VydmljZS5tYXAoKGZpeixpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtpbmRleCsxfT57Zml6Lm5hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8dGV4dGFyZWEgbmFtZT0nZGVzY3JpcHRpb24nIHZhbHVlPXtmb3JtRGF0YS5kZXNjcmlwdGlvbn0gb25DaGFuZ2U9e2U9Pm9uQ2hhbmdlKGUpfSBwbGFjZWhvbGRlcj0n0J7Qv9C40YjQuNGC0LUg0LLQsNGI0YMg0YHQuNGC0YPQsNGG0LjRjic+PC90ZXh0YXJlYT5cclxuICAgICAgICA8aW5wdXQgdHlwZT0nbnVtYmVyJyBvbkNoYW5nZT17ZT0+b25DaGFuZ2UoZSl9IHZhbHVlPXtmb3JtRGF0YS5hbW91bnR9IG5hbWU9J2Ftb3VudCcgcGxhY2Vob2xkZXI9J9Ch0YPQvNC80LAg0LjRgdC60LAnIC8+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9J2ZpbGUnIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm1fYnV0dG9ucyc+XHJcbiAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSd0cmFuc3BhcmVudGJ0biBidXR0b24nIHR5cGU9J2J1dHRvbicgdmFsdWU9J9CS0LXRgNC90YPRgtGM0YHRjyDQvdCw0LfQsNC0Jy8+XHJcbiAgICAgICAgICA8aW5wdXQgIGNsYXNzTmFtZT0nYnV0dG9uJyB0eXBlPSdzdWJtaXQnIHZhbHVlPSfQlNCw0LvQtdC1JyAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+ICovfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWNvbmRTdGVwIiwiaW1wb3J0IEZpcnN0U3RlcCBmcm9tIFwiLi4vY29tcG9uZW50cy9nZXRzZXJ2aWNlL0ZpcnN0U3RlcFwiXHJcbmltcG9ydCBTZWNvbmRTdGVwIGZyb20gXCIuLi9jb21wb25lbnRzL2dldHNlcnZpY2UvU2Vjb25kU3RlcFwiXHJcbmltcG9ydCBOYXYgZnJvbSBcIi4uL2NvbXBvbmVudHMvc2hhcmVkL05hdlwiXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IFRoaXJkU3RlcCBmcm9tIFwiLi4vY29tcG9uZW50cy9nZXRzZXJ2aWNlL1RoaXJkU3RlcFwiXHJcbmltcG9ydCB7Um91dGVyLCB1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSdcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBMb2FkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbG9hZGVyL0xvYWRlclwiXHJcbmltcG9ydCBDb2RlTW9kYWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvc2hhcmVkL0NvZGVNb2RhbFwiXHJcbmNvbnN0IEdldFNlcnZpY2UgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCB7c3RlcH0gPSByb3V0ZXIucXVlcnlcclxuXHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2Nvb2tpZVN0ZXAsIHNldENvb2tpZVN0ZXBdID0gdXNlU3RhdGUoJycpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldENvb2tpZVN0ZXAoY29va2llLmdldCgnc3RlcCcpKVxyXG4gIH0sIFtjb29raWUuZ2V0KCdzdGVwJyldKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZighY29va2llLmdldCgnc3RlcCcpKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKCcvZ2V0c2VydmljZScpXHJcbiAgICB9XHJcbiAgICBpZihjb29raWUuZ2V0KCdzdGVwJykgPT09ICcyJykge1xyXG4gICAgICByb3V0ZXIucHVzaCgnL2dldHNlcnZpY2U/c3RlcD0yJylcclxuICAgIH1cclxuICAgIGlmKGNvb2tpZS5nZXQoJ3N0ZXAnKSA9PT0gJzMnKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKCcvZ2V0c2VydmljZT9zdGVwPTMnKVxyXG4gICAgfVxyXG4gIH0sW10pXHJcblxyXG4gXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZ2V0c2VydmljZSc+XHJcbiAgICAgIFxyXG4gICAgICB7bG9hZGluZyAmJiA8TG9hZGVyIC8+fVxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+XHJcbiAgICAgICAgICDQn9C+0LvRg9GH0LjRgtGMINGD0YHQu9GD0LPRgyB8INCk0LjQty4g0LvQuNGG0L5cclxuICAgICAgICA8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXInPlxyXG4gICAgICAgIDxOYXYvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZyc+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcbiAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0tLWhlYWRlcic+XHJcbiAgICAgICAgICA8aDM+0KPRgdC70YPQs9C4INGE0LjQt9C40YfQtdGB0LrQuNC8INC70LjRhtCw0Lw8L2gzPlxyXG4gICAgICAgICAgPGgyPtCf0L7Qu9GD0YfQuNGC0YxcclxuICAgICAgICAgICAgPGJyPjwvYnI+0YPRgdC70YPQs9GDOjwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm1fc2VydmljZSAnPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtX2hlYWRlcic+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2Nvb2tpZVN0ZXAgPT09IHVuZGVmaW5lZCA/ICdhY3RpdmUnIDogJyd9PjEg0KjQsNCzPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y29va2llU3RlcCA9PT0gJzInICYmIHN0ZXA9PT0nMicgJiYgJ2FjdGl2ZSd9PjIg0KjQsNCzPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y29va2llU3RlcCA9PT0gJzMnICYmIHN0ZXA9PT0nMycgJiYgJ2FjdGl2ZSd9PjMg0KjQsNCzPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAge2Nvb2tpZS5nZXQoJ3N0ZXAnKSA9PT0gdW5kZWZpbmVkICYmIDxGaXJzdFN0ZXAgc2V0TG9hZGluZz17c2V0TG9hZGluZ30vPn1cclxuICAgICAgICB7Y29va2llLmdldCgnc3RlcCcpID09PSAnMicgJiYgc3RlcD09PScyJyAmJiA8U2Vjb25kU3RlcCBzZXRMb2FkaW5nPXtzZXRMb2FkaW5nfS8+fVxyXG4gICAgICAgIHtjb29raWUuZ2V0KCdzdGVwJykgPT09ICczJyAmJiBzdGVwPT09JzMnICYmIDxUaGlyZFN0ZXAgc2V0TG9hZGluZz17c2V0TG9hZGluZ30gLz59XHJcbiAgICAgICAgXHJcbiAgICAgICAgey8qIDxTZWNvbmRTdGVwIC8+ICovfVxyXG4gICAgICAgIHsvKiA8VGhpcmRTdGVwIC8+ICovfVxyXG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0nZm9ybV9oZWFkZXInPlxyXG4gICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gY2hlY2tpbmcoKX0gY2xhc3NOYW1lPXtjb29raWVTdGVwID09PSB1bmRlZmluZWQgPyAnYWN0aXZlJyA6ICcnfT4xINCo0LDQszwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2Nvb2tpZVN0ZXAgPT09ICcyJyAmJiBzdGVwPT09JzInICYmICdhY3RpdmUnfT4yINCo0LDQszwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2Nvb2tpZVN0ZXAgPT09ICczJyAmJiBzdGVwPT09JzMnICYmICdhY3RpdmUnfT4zINCo0LDQszwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICBcclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBHZXRTZXJ2aWNlIl0sInNvdXJjZVJvb3QiOiIifQ==