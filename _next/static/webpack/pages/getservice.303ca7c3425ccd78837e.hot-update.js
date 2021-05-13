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










var SecondStep = function SecondStep() {
  _s();

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

  var stepSecond = function stepSecond(e) {
    e.preventDefault();
    axios__WEBPACK_IMPORTED_MODULE_5___default().get("".concat("https://crediter.kz/api", "/stepTwo"), {
      params: {
        id: formData.id,
        token: formData.token,
        description: formData.description,
        sphere: formData.sphere,
        amount: formData.amount
      }
    }).then(function (res) {
      // console.log(res)
      if (res.data.success) {
        next_router__WEBPACK_IMPORTED_MODULE_6___default().push('/getservice?step=3');
        js_cookie__WEBPACK_IMPORTED_MODULE_4___default().set('step', 3);
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
      children: function children(_ref) {
        var errors = _ref.errors,
            touched = _ref.touched;
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_7__.Form, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_7__.Field, {
            as: "select",
            validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_8__.required,
            name: "sphere",
            className: "form_select",
            children: _defaults_fizservice__WEBPACK_IMPORTED_MODULE_3__.fizservice.map(function (fiz, index) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: index + 1,
                children: fiz.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 17
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, _this), errors.sphere && touched.sphere ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "text-danger",
            children: errors.sphere
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 17
          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "text-danger"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 17
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_7__.Field, {
            as: "textarea",
            name: "description",
            validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_8__.required,
            placeholder: "\u041E\u043F\u0438\u0448\u0438\u0442\u0435 \u0432\u0430\u0448\u0443 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044E"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, _this), errors.description && touched.description ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "text-danger",
            children: errors.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 17
          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "text-danger"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 17
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_7__.Field, {
            type: "number",
            validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_8__.required,
            name: "amount",
            placeholder: "\u0421\u0443\u043C\u043C\u0430 \u0438\u0441\u043A\u0430"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, _this), errors.amount && touched.amount ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "text-danger",
            children: errors.amount
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 17
          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "text-danger"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 17
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "dropfiles",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_dropzone__WEBPACK_IMPORTED_MODULE_9__.default, {
              onDrop: handleDrop,
              children: function children(_ref2) {
                var getRootProps = _ref2.getRootProps,
                    getInputProps = _ref2.getInputProps;
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", _objectSpread(_objectSpread({}, getRootProps({
                  className: "dropzone"
                })), {}, {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread({}, getInputProps()), void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 90,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                    children: "\u041F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0444\u0430\u0439\u043B\u044B \u0438\u043B\u0438 \u0449\u0435\u043B\u043A\u043D\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u0444\u0430\u0439\u043B\u044B"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 91,
                    columnNumber: 21
                  }, _this)]
                }), void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 89,
                  columnNumber: 19
                }, _this);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
                children: "\u0424\u0430\u0439\u043B\u044B:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                children: fileNames.map(function (fileName) {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: fileName
                  }, fileName, false, {
                    fileName: _jsxFileName,
                    lineNumber: 99,
                    columnNumber: 21
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form_buttons",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              className: "transparentbtn button",
              type: "button",
              value: "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043D\u0430\u0437\u0430\u0434"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              className: "button",
              type: "submit",
              value: "\u0414\u0430\u043B\u0435\u0435"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, _this);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 5
  }, _this);
};

_s(SecondStep, "MC0dx5XPyF5djP9HbVIHbcND+hU=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRzZXJ2aWNlL1NlY29uZFN0ZXAuanMiXSwibmFtZXMiOlsiU2Vjb25kU3RlcCIsInVzZVN0YXRlIiwiZmlsZU5hbWVzIiwic2V0RmlsZU5hbWVzIiwiaWQiLCJjb29raWUiLCJ0b2tlbiIsImRlc2NyaXB0aW9uIiwic3BoZXJlIiwiYW1vdW50IiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsIm9uQ2hhbmdlIiwiZSIsIm5hbWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZURyb3AiLCJhY2NlcHRlZEZpbGVzIiwibWFwIiwiZmlsZSIsInN0ZXBTZWNvbmQiLCJwcmV2ZW50RGVmYXVsdCIsImF4aW9zIiwicHJvY2VzcyIsInBhcmFtcyIsInRoZW4iLCJyZXMiLCJkYXRhIiwic3VjY2VzcyIsIlJvdXRlciIsInZhbHVlcyIsImVycm9ycyIsInRvdWNoZWQiLCJyZXF1aXJlZCIsImZpenNlcnZpY2UiLCJmaXoiLCJpbmRleCIsImdldFJvb3RQcm9wcyIsImdldElucHV0UHJvcHMiLCJjbGFzc05hbWUiLCJmaWxlTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUFBOztBQUFBLGtCQUVMQywrQ0FBUSxDQUFDLEVBQUQsQ0FGSDtBQUFBLE1BQ2hCQyxTQURnQjtBQUFBLE1BRXJCQyxZQUZxQjs7QUFBQSxtQkFJTkYsK0NBQVEsQ0FBQztBQUN4QkcsTUFBRSxFQUFFQyxvREFBQSxDQUFXLFNBQVgsQ0FEb0I7QUFFeEJDLFNBQUssRUFBRUQsb0RBQUEsQ0FBVyxPQUFYLENBRmlCO0FBR3hCRSxlQUFXLEVBQUUsRUFIVztBQUl4QkMsVUFBTSxFQUFFLEdBSmdCO0FBS3hCQyxVQUFNLEVBQUU7QUFMZ0IsR0FBRCxDQUpG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QUFBQTtBQUFBO0FBQUEsMkJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUREO0FBQUE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBU0U7QUFBQSxzQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUVFO0FBQUEsMEJBQ0dyQyxTQUFTLENBQUNpQixHQUFWLENBQWMsVUFBQXNCLFFBQVE7QUFBQSxzQ0FDckI7QUFBQSw4QkFBb0JBO0FBQXBCLHFCQUFTQSxRQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRHFCO0FBQUEsaUJBQXRCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXJCRixlQXVDRTtBQUFLLHFCQUFTLEVBQUMsY0FBZjtBQUFBLG9DQUNFO0FBQU8sdUJBQVMsRUFBQyx1QkFBakI7QUFBeUMsa0JBQUksRUFBQyxRQUE5QztBQUF1RCxtQkFBSyxFQUFDO0FBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFPLHVCQUFTLEVBQUMsUUFBakI7QUFBMEIsa0JBQUksRUFBQyxRQUEvQjtBQUF3QyxtQkFBSyxFQUFDO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXZDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQ7QUFBQTtBQVZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE0RUQsQ0F0SEQ7O0dBQU16QyxVOztLQUFBQSxVO0FBd0hOLCtEQUFlQSxVQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2dldHNlcnZpY2UuMzAzY2E3YzM0MjVjY2Q3ODgzN2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7Zml6c2VydmljZX0gZnJvbSBcIi4uLy4uL2RlZmF1bHRzL2ZpenNlcnZpY2VcIlxyXG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSdcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCJcclxuaW1wb3J0IHtGb3JtaWssIEZvcm0sIEZpZWxkfSBmcm9tICdmb3JtaWsnO1xyXG5pbXBvcnQge3JlcXVpcmVkfSBmcm9tIFwiLi4vLi4vZGVmYXVsdHMvdmFsaWRhdGlvbnNcIlxyXG5pbXBvcnQgRHJvcHpvbmUgZnJvbSBcInJlYWN0LWRyb3B6b25lXCI7XHJcblxyXG5jb25zdCBTZWNvbmRTdGVwID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtmaWxlTmFtZXMsXHJcbiAgICBzZXRGaWxlTmFtZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtmb3JtRGF0YSxcclxuICAgIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgIGlkOiBjb29raWUuZ2V0KCdsZWFkX2lkJyksXHJcbiAgICB0b2tlbjogY29va2llLmdldCgndG9rZW4nKSxcclxuICAgIGRlc2NyaXB0aW9uOiAnJyxcclxuICAgIHNwaGVyZTogJzEnLFxyXG4gICAgYW1vdW50OiAnJ1xyXG4gIH0pXHJcbiAgY29uc3Qgb25DaGFuZ2UgPSBlID0+IHtcclxuICAgIGNvbnN0IG5hbWUgPSBlLnRhcmdldC5uYW1lXHJcbiAgICBzZXRGb3JtRGF0YSh7XHJcbiAgICAgIC4uLmZvcm1EYXRhLFxyXG4gICAgICBbbmFtZV06IGUudGFyZ2V0LnZhbHVlXHJcbiAgICB9KVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVEcm9wID0gYWNjZXB0ZWRGaWxlcyA9PiBzZXRGaWxlTmFtZXMoYWNjZXB0ZWRGaWxlcy5tYXAoZmlsZSA9PiBmaWxlLm5hbWUpKTtcclxuXHJcbiAgY29uc3Qgc3RlcFNlY29uZCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9zdGVwVHdvYCwge1xyXG4gICAgICBwYXJhbXM6IHtcclxuICAgICAgICBpZDogZm9ybURhdGEuaWQsXHJcbiAgICAgICAgdG9rZW46IGZvcm1EYXRhLnRva2VuLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBmb3JtRGF0YS5kZXNjcmlwdGlvbixcclxuICAgICAgICBzcGhlcmU6IGZvcm1EYXRhLnNwaGVyZSxcclxuICAgICAgICBhbW91bnQ6IGZvcm1EYXRhLmFtb3VudFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICBpZiAocmVzLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgUm91dGVyLnB1c2goJy9nZXRzZXJ2aWNlP3N0ZXA9MycpXHJcbiAgICAgICAgICBjb29raWUuc2V0KCdzdGVwJywgMylcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFyZXMuZGF0YS5zdWNjZXNzKSB7fVxyXG4gICAgICB9KVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2Zvcm1fcmVnaXN0ZXInPlxyXG4gICAgICA8Rm9ybWlrXHJcbiAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xyXG4gICAgICAgIGlkOiBjb29raWUuZ2V0KCdsZWFkX2lkJyksXHJcbiAgICAgICAgdG9rZW46IGNvb2tpZS5nZXQoJ3Rva2VuJyksXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgICAgIHNwaGVyZTogJzEnLFxyXG4gICAgICAgIGFtb3VudDogJydcclxuICAgICAgfX1cclxuICAgICAgICBvblN1Ym1pdD1cclxuICAgICAgICB7KHZhbHVlcykgPT4ge3N0ZXBTZWNvbmQodmFsdWVzKX19PlxyXG4gICAgICAgIHsoe2Vycm9ycywgdG91Y2hlZH0pID0+IChcclxuICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICA8RmllbGQgYXM9J3NlbGVjdCcgdmFsaWRhdGU9e3JlcXVpcmVkfSBuYW1lPSdzcGhlcmUnIGNsYXNzTmFtZT0nZm9ybV9zZWxlY3QnPlxyXG4gICAgICAgICAgICAgIHtmaXpzZXJ2aWNlLm1hcCgoZml6LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17aW5kZXggKyAxfT57Zml6Lm5hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvRmllbGQ+XHJcbiAgICAgICAgICAgIHsoZXJyb3JzLnNwaGVyZSAmJiB0b3VjaGVkLnNwaGVyZSlcclxuICAgICAgICAgICAgICA/IDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPntlcnJvcnMuc3BoZXJlfTwvcD5cclxuICAgICAgICAgICAgICA6IDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPjwvcD59XHJcbiAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgIGFzPSd0ZXh0YXJlYSdcclxuICAgICAgICAgICAgICBuYW1lPSdkZXNjcmlwdGlvbidcclxuICAgICAgICAgICAgICB2YWxpZGF0ZT17cmVxdWlyZWR9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J9Ce0L/QuNGI0LjRgtC1INCy0LDRiNGDINGB0LjRgtGD0LDRhtC40Y4nPjwvRmllbGQ+XHJcbiAgICAgICAgICAgIHsoZXJyb3JzLmRlc2NyaXB0aW9uICYmIHRvdWNoZWQuZGVzY3JpcHRpb24pXHJcbiAgICAgICAgICAgICAgPyA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz57ZXJyb3JzLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICA6IDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPjwvcD59XHJcbiAgICAgICAgICAgIDxGaWVsZCB0eXBlPSdudW1iZXInIHZhbGlkYXRlPXtyZXF1aXJlZH0gbmFtZT0nYW1vdW50JyBwbGFjZWhvbGRlcj0n0KHRg9C80LzQsCDQuNGB0LrQsCc+PC9GaWVsZD5cclxuICAgICAgICAgICAgeyhlcnJvcnMuYW1vdW50ICYmIHRvdWNoZWQuYW1vdW50KVxyXG4gICAgICAgICAgICAgID8gPHAgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+e2Vycm9ycy5hbW91bnR9PC9wPlxyXG4gICAgICAgICAgICAgIDogPHAgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+PC9wPn1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Ryb3BmaWxlcyc+XHJcbiAgICAgICAgICAgICAgPERyb3B6b25lIG9uRHJvcD17aGFuZGxlRHJvcH0+XHJcbiAgICAgICAgICAgICAgICB7KHtnZXRSb290UHJvcHMsIGdldElucHV0UHJvcHN9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgey4uLmdldFJvb3RQcm9wcyh7IGNsYXNzTmFtZTogXCJkcm9wem9uZVwiIH0pfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgey4uLmdldElucHV0UHJvcHMoKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPtCf0LXRgNC10YLQsNGJ0LjRgtC1INGE0LDQudC70Ysg0LjQu9C4INGJ0LXQu9C60L3QuNGC0LUsINGH0YLQvtCx0Ysg0LLRi9Cx0YDQsNGC0Ywg0YTQsNC50LvRizwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvRHJvcHpvbmU+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+0KTQsNC50LvRizo8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAge2ZpbGVOYW1lcy5tYXAoZmlsZU5hbWUgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2ZpbGVOYW1lfT57ZmlsZU5hbWV9PC9saT5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm1fYnV0dG9ucyc+XHJcbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0ndHJhbnNwYXJlbnRidG4gYnV0dG9uJyB0eXBlPSdidXR0b24nIHZhbHVlPSfQktC10YDQvdGD0YLRjNGB0Y8g0L3QsNC30LDQtCcvPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J2J1dHRvbicgdHlwZT0nc3VibWl0JyB2YWx1ZT0n0JTQsNC70LXQtScvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgPC9Gb3JtaWs+XHJcbiAgICAgIHsvKiA8Zm9ybSBvblN1Ym1pdD17KGUpID0+IHN0ZXBTZWNvbmQoZSl9PlxyXG4gICAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9e2U9PiBvbkNoYW5nZShlKX0gdmFsdWU9e2Zvcm1EYXRhLnNwaGVyZX0gbmFtZT0nc3BoZXJlJyBjbGFzc05hbWU9J2Zvcm1fc2VsZWN0Jz5cclxuICAgICAgICAgIHtmaXpzZXJ2aWNlLm1hcCgoZml6LGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2luZGV4KzF9PntmaXoubmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDx0ZXh0YXJlYSBuYW1lPSdkZXNjcmlwdGlvbicgdmFsdWU9e2Zvcm1EYXRhLmRlc2NyaXB0aW9ufSBvbkNoYW5nZT17ZT0+b25DaGFuZ2UoZSl9IHBsYWNlaG9sZGVyPSfQntC/0LjRiNC40YLQtSDQstCw0YjRgyDRgdC40YLRg9Cw0YbQuNGOJz48L3RleHRhcmVhPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPSdudW1iZXInIG9uQ2hhbmdlPXtlPT5vbkNoYW5nZShlKX0gdmFsdWU9e2Zvcm1EYXRhLmFtb3VudH0gbmFtZT0nYW1vdW50JyBwbGFjZWhvbGRlcj0n0KHRg9C80LzQsCDQuNGB0LrQsCcgLz5cclxuICAgICAgICA8aW5wdXQgdHlwZT0nZmlsZScgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybV9idXR0b25zJz5cclxuICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J3RyYW5zcGFyZW50YnRuIGJ1dHRvbicgdHlwZT0nYnV0dG9uJyB2YWx1ZT0n0JLQtdGA0L3Rg9GC0YzRgdGPINC90LDQt9Cw0LQnLz5cclxuICAgICAgICAgIDxpbnB1dCAgY2xhc3NOYW1lPSdidXR0b24nIHR5cGU9J3N1Ym1pdCcgdmFsdWU9J9CU0LDQu9C10LUnIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT4gKi99XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlY29uZFN0ZXAiXSwic291cmNlUm9vdCI6IiJ9