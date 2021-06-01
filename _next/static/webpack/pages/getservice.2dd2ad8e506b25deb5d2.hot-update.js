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

  var stepSecond = function stepSecond(values) {
    axios__WEBPACK_IMPORTED_MODULE_5___default().get("".concat("https://crediter.kz/api", "/stepTwo"), {
      params: {
        id: values.id,
        token: values.token,
        description: values.description,
        sphere: values.sphere,
        amount: values.amount
      }
    }).then(function (res) {
      // console.log(res)
      if (res.data.success) {
        next_router__WEBPACK_IMPORTED_MODULE_6___default().push('/getservice?step=3');
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
      children: function children(_ref) {
        var _jsxDEV2;

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
                "data-img": "/img/uslugi/".concat(index + 1, ".svg"),
                value: index + 1,
                children: fiz.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 17
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 13
          }, _this), errors.sphere && touched.sphere ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "text-danger",
            children: errors.sphere
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 17
          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "text-danger"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 17
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_7__.Field, {
            as: "textarea",
            name: "description",
            validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_8__.required,
            placeholder: "\u041E\u043F\u0438\u0448\u0438\u0442\u0435 \u0432\u0430\u0448\u0443 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044E"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, _this), errors.description && touched.description ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "text-danger",
            children: errors.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 17
          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "text-danger"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 17
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_7__.Field, {
            type: "number",
            validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_8__.required,
            name: "amount",
            placeholder: "\u0421\u0443\u043C\u043C\u0430 \u0438\u0441\u043A\u0430"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, _this), errors.amount && touched.amount ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "text-danger",
            children: errors.amount
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 17
          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "text-danger"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
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
                    lineNumber: 91,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                    children: "\u041F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0444\u0430\u0439\u043B\u044B \u0438\u043B\u0438 \u0449\u0435\u043B\u043A\u043D\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u0444\u0430\u0439\u043B\u044B"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 92,
                    columnNumber: 21
                  }, _this)]
                }), void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 19
                }, _this);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
                children: "\u0424\u0430\u0439\u043B\u044B:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                children: fileNames.map(function (fileName) {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: fileName
                  }, fileName, false, {
                    fileName: _jsxFileName,
                    lineNumber: 100,
                    columnNumber: 21
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 87,
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
                lineNumber: 107,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "firststep_banner--button",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", (_jsxDEV2 = {
                className: "singlebtn",
                type: "submit"
              }, (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_jsxDEV2, "className", "button"), (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_jsxDEV2, "value", "\u0414\u0430\u043B\u044C\u0435\u0435"), _jsxDEV2), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                children: ["\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 115,
                  columnNumber: 39
                }, _this), "\u043F\u043E\u0442\u043E\u043C \u043E\u043F\u043B\u0430\u0442\u0430"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, _this);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 54,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRzZXJ2aWNlL1NlY29uZFN0ZXAuanMiXSwibmFtZXMiOlsiU2Vjb25kU3RlcCIsInVzZVN0YXRlIiwiZmlsZU5hbWVzIiwic2V0RmlsZU5hbWVzIiwiaWQiLCJjb29raWUiLCJ0b2tlbiIsImRlc2NyaXB0aW9uIiwic3BoZXJlIiwiYW1vdW50IiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsIm9uQ2hhbmdlIiwiZSIsIm5hbWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZURyb3AiLCJhY2NlcHRlZEZpbGVzIiwibWFwIiwiZmlsZSIsInN0ZXBTZWNvbmQiLCJ2YWx1ZXMiLCJheGlvcyIsInByb2Nlc3MiLCJwYXJhbXMiLCJ0aGVuIiwicmVzIiwiZGF0YSIsInN1Y2Nlc3MiLCJSb3V0ZXIiLCJlcnJvcnMiLCJ0b3VjaGVkIiwicmVxdWlyZWQiLCJmaXpzZXJ2aWNlIiwiZml6IiwiaW5kZXgiLCJnZXRSb290UHJvcHMiLCJnZXRJbnB1dFByb3BzIiwiY2xhc3NOYW1lIiwiZmlsZU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFBQTs7QUFBQSxrQkFFTEMsK0NBQVEsQ0FBQyxFQUFELENBRkg7QUFBQSxNQUNoQkMsU0FEZ0I7QUFBQSxNQUVyQkMsWUFGcUI7O0FBQUEsbUJBSU5GLCtDQUFRLENBQUM7QUFDeEJHLE1BQUUsRUFBRUMsb0RBQUEsQ0FBVyxTQUFYLENBRG9CO0FBRXhCQyxTQUFLLEVBQUVELG9EQUFBLENBQVcsT0FBWCxDQUZpQjtBQUd4QkUsZUFBVyxFQUFFLEVBSFc7QUFJeEJDLFVBQU0sRUFBRSxHQUpnQjtBQUt4QkMsVUFBTSxFQUFFO0FBTGdCLEdBQUQsQ0FKRjtBQUFBLE1BR2hCQyxRQUhn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QUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBdUZELENBbElEOztHQUFNeEMsVTs7S0FBQUEsVTtBQW9JTiwrREFBZUEsVUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9nZXRzZXJ2aWNlLjJkZDJhZDhlNTA2YjI1ZGViNWQyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQge2ZpenNlcnZpY2V9IGZyb20gXCIuLi8uLi9kZWZhdWx0cy9maXpzZXJ2aWNlXCJcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCB7Rm9ybWlrLCBGb3JtLCBGaWVsZH0gZnJvbSAnZm9ybWlrJztcclxuaW1wb3J0IHtyZXF1aXJlZH0gZnJvbSBcIi4uLy4uL2RlZmF1bHRzL3ZhbGlkYXRpb25zXCJcclxuaW1wb3J0IERyb3B6b25lIGZyb20gXCJyZWFjdC1kcm9wem9uZVwiO1xyXG5cclxuY29uc3QgU2Vjb25kU3RlcCA9ICgpID0+IHtcclxuICBjb25zdCBbZmlsZU5hbWVzLFxyXG4gICAgc2V0RmlsZU5hbWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZm9ybURhdGEsXHJcbiAgICBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBpZDogY29va2llLmdldCgnbGVhZF9pZCcpLFxyXG4gICAgdG9rZW46IGNvb2tpZS5nZXQoJ3Rva2VuJyksXHJcbiAgICBkZXNjcmlwdGlvbjogJycsXHJcbiAgICBzcGhlcmU6ICcxJyxcclxuICAgIGFtb3VudDogJydcclxuICB9KVxyXG4gIGNvbnN0IG9uQ2hhbmdlID0gZSA9PiB7XHJcbiAgICBjb25zdCBuYW1lID0gZS50YXJnZXQubmFtZVxyXG4gICAgc2V0Rm9ybURhdGEoe1xyXG4gICAgICAuLi5mb3JtRGF0YSxcclxuICAgICAgW25hbWVdOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgfSlcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlRHJvcCA9IGFjY2VwdGVkRmlsZXMgPT4gc2V0RmlsZU5hbWVzKGFjY2VwdGVkRmlsZXMubWFwKGZpbGUgPT4gZmlsZS5uYW1lKSk7XHJcblxyXG4gIGNvbnN0IHN0ZXBTZWNvbmQgPSAodmFsdWVzKSA9PiB7XHJcblxyXG5cclxuICAgIGF4aW9zXHJcbiAgICAgIC5nZXQoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L3N0ZXBUd29gLCB7XHJcbiAgICAgIHBhcmFtczoge1xyXG4gICAgICAgIGlkOiB2YWx1ZXMuaWQsXHJcbiAgICAgICAgdG9rZW46IHZhbHVlcy50b2tlbixcclxuICAgICAgICBkZXNjcmlwdGlvbjogdmFsdWVzLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIHNwaGVyZTogdmFsdWVzLnNwaGVyZSxcclxuICAgICAgICBhbW91bnQ6IHZhbHVlcy5hbW91bnRcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgIFJvdXRlci5wdXNoKCcvZ2V0c2VydmljZT9zdGVwPTMnKVxyXG4gICAgICAgICAgY29va2llLnNldCgnc3RlcCcsIDMpXHJcbiAgICAgICAgICBjb29raWUuc2V0KCdhbW91bnQnLCBmb3JtRGF0YS5hbW91bnQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcmVzLmRhdGEuc3VjY2Vzcykge31cclxuICAgICAgfSlcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtX3JlZ2lzdGVyJz5cclxuICAgICAgPEZvcm1pa1xyXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcclxuICAgICAgICBpZDogY29va2llLmdldCgnbGVhZF9pZCcpLFxyXG4gICAgICAgIHRva2VuOiBjb29raWUuZ2V0KCd0b2tlbicpLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcclxuICAgICAgICBzcGhlcmU6ICcxJyxcclxuICAgICAgICBhbW91bnQ6ICcnXHJcbiAgICAgIH19XHJcbiAgICAgICAgb25TdWJtaXQ9XHJcbiAgICAgICAgeyh2YWx1ZXMpID0+IHtzdGVwU2Vjb25kKHZhbHVlcyl9fT5cclxuICAgICAgICB7KHtlcnJvcnMsIHRvdWNoZWR9KSA9PiAoXHJcbiAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgPEZpZWxkIGFzPSdzZWxlY3QnIHZhbGlkYXRlPXtyZXF1aXJlZH0gbmFtZT0nc3BoZXJlJyBjbGFzc05hbWU9J2Zvcm1fc2VsZWN0Jz5cclxuICAgICAgICAgICAgICB7Zml6c2VydmljZS5tYXAoKGZpeiwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxvcHRpb24gZGF0YS1pbWc9e2AvaW1nL3VzbHVnaS8ke2luZGV4KzF9LnN2Z2B9IHZhbHVlPXtpbmRleCArIDF9PntmaXoubmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9GaWVsZD5cclxuICAgICAgICAgICAgeyhlcnJvcnMuc3BoZXJlICYmIHRvdWNoZWQuc3BoZXJlKVxyXG4gICAgICAgICAgICAgID8gPHAgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+e2Vycm9ycy5zcGhlcmV9PC9wPlxyXG4gICAgICAgICAgICAgIDogPHAgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+PC9wPn1cclxuICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgYXM9J3RleHRhcmVhJ1xyXG4gICAgICAgICAgICAgIG5hbWU9J2Rlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAgICAgIHZhbGlkYXRlPXtyZXF1aXJlZH1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0n0J7Qv9C40YjQuNGC0LUg0LLQsNGI0YMg0YHQuNGC0YPQsNGG0LjRjic+PC9GaWVsZD5cclxuICAgICAgICAgICAgeyhlcnJvcnMuZGVzY3JpcHRpb24gJiYgdG91Y2hlZC5kZXNjcmlwdGlvbilcclxuICAgICAgICAgICAgICA/IDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPntlcnJvcnMuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgIDogPHAgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+PC9wPn1cclxuICAgICAgICAgICAgPEZpZWxkIHR5cGU9J251bWJlcicgdmFsaWRhdGU9e3JlcXVpcmVkfSBuYW1lPSdhbW91bnQnIHBsYWNlaG9sZGVyPSfQodGD0LzQvNCwINC40YHQutCwJz48L0ZpZWxkPlxyXG4gICAgICAgICAgICB7KGVycm9ycy5hbW91bnQgJiYgdG91Y2hlZC5hbW91bnQpXHJcbiAgICAgICAgICAgICAgPyA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz57ZXJyb3JzLmFtb3VudH08L3A+XHJcbiAgICAgICAgICAgICAgOiA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz48L3A+fVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZHJvcGZpbGVzJz5cclxuICAgICAgICAgICAgICA8RHJvcHpvbmUgb25Ecm9wPXtoYW5kbGVEcm9wfT5cclxuICAgICAgICAgICAgICAgIHsoe2dldFJvb3RQcm9wcywgZ2V0SW5wdXRQcm9wc30pID0+IChcclxuICAgICAgICAgICAgICAgICAgPGRpdiB7Li4uZ2V0Um9vdFByb3BzKHsgY2xhc3NOYW1lOiBcImRyb3B6b25lXCIgfSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB7Li4uZ2V0SW5wdXRQcm9wcygpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+0J/QtdGA0LXRgtCw0YnQuNGC0LUg0YTQsNC50LvRiyDQuNC70Lgg0YnQtdC70LrQvdC40YLQtSwg0YfRgtC+0LHRiyDQstGL0LHRgNCw0YLRjCDRhNCw0LnQu9GLPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9Ecm9wem9uZT5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz7QpNCw0LnQu9GLOjwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICB7ZmlsZU5hbWVzLm1hcChmaWxlTmFtZSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17ZmlsZU5hbWV9PntmaWxlTmFtZX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmlyc3RzdGVwX2Jhbm5lcic+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmlyc3RzdGVwX2Jhbm5lci0taW1nJz5cclxuICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J3NlY29uZHN0ZXAnIHNyYz0nL2ltZy9mb3JtL3NlY29uZHN0ZXAucG5nJy8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaXJzdHN0ZXBfYmFubmVyLS1idXR0b24nPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NpbmdsZWJ0bidcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPSdzdWJtaXQnXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdidXR0b24nXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9J9CU0LDQu9GM0LXQtScvPlxyXG4gICAgICAgICAgICAgICAgICA8Yj7QodC90LDRh9Cw0LvQsCDRgNC10LfRg9C70YzRgtCw0YI8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICDQv9C+0YLQvtC8INC+0L/Qu9Cw0YLQsDwvYj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgPC9Gb3JtaWs+XHJcbiAgICAgIHsvKiA8Zm9ybSBvblN1Ym1pdD17KGUpID0+IHN0ZXBTZWNvbmQoZSl9PlxyXG4gICAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9e2U9PiBvbkNoYW5nZShlKX0gdmFsdWU9e2Zvcm1EYXRhLnNwaGVyZX0gbmFtZT0nc3BoZXJlJyBjbGFzc05hbWU9J2Zvcm1fc2VsZWN0Jz5cclxuICAgICAgICAgIHtmaXpzZXJ2aWNlLm1hcCgoZml6LGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2luZGV4KzF9PntmaXoubmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDx0ZXh0YXJlYSBuYW1lPSdkZXNjcmlwdGlvbicgdmFsdWU9e2Zvcm1EYXRhLmRlc2NyaXB0aW9ufSBvbkNoYW5nZT17ZT0+b25DaGFuZ2UoZSl9IHBsYWNlaG9sZGVyPSfQntC/0LjRiNC40YLQtSDQstCw0YjRgyDRgdC40YLRg9Cw0YbQuNGOJz48L3RleHRhcmVhPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPSdudW1iZXInIG9uQ2hhbmdlPXtlPT5vbkNoYW5nZShlKX0gdmFsdWU9e2Zvcm1EYXRhLmFtb3VudH0gbmFtZT0nYW1vdW50JyBwbGFjZWhvbGRlcj0n0KHRg9C80LzQsCDQuNGB0LrQsCcgLz5cclxuICAgICAgICA8aW5wdXQgdHlwZT0nZmlsZScgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybV9idXR0b25zJz5cclxuICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J3RyYW5zcGFyZW50YnRuIGJ1dHRvbicgdHlwZT0nYnV0dG9uJyB2YWx1ZT0n0JLQtdGA0L3Rg9GC0YzRgdGPINC90LDQt9Cw0LQnLz5cclxuICAgICAgICAgIDxpbnB1dCAgY2xhc3NOYW1lPSdidXR0b24nIHR5cGU9J3N1Ym1pdCcgdmFsdWU9J9CU0LDQu9C10LUnIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT4gKi99XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlY29uZFN0ZXAiXSwic291cmNlUm9vdCI6IiJ9