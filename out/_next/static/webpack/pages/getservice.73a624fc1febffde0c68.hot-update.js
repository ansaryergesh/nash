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
/* harmony import */ var _Masks_PriceMask__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Masks/PriceMask */ "./components/Masks/PriceMask.js");
/* harmony import */ var _defaults_extraFunction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../defaults/extraFunction */ "./defaults/extraFunction.js");
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
    setLoading(true); // console.log(replaceDate(values.amount))

    axios__WEBPACK_IMPORTED_MODULE_5___default().get("".concat("https://crediter.kz/api", "/stepTwo"), {
      params: {
        id: values.id,
        token: values.token,
        description: values.description,
        sphere: values.sphere,
        amount: (0,_defaults_extraFunction__WEBPACK_IMPORTED_MODULE_11__.replaceDate)(values.amount)
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
        js_cookie__WEBPACK_IMPORTED_MODULE_4___default().set('amount', (0,_defaults_extraFunction__WEBPACK_IMPORTED_MODULE_11__.replaceDate)(values.amount));
      }

      if (!res.data.success) {}
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var form = document.querySelector('.form_register');
    console.log(form);
    form.scrollIntoView({
      block: 'center',
      behavior: 'smooth'
    }); // const price = document.querySelector('.price')
    //   price.addEventListener("keydown",function(event){
    //     var key = event.which;
    //     if((key<48 || key>57) && key != 8) event.preventDefault();
    //   });
    //   price.addEventListener("keyup",function(event){
    //     var value = this.value.replace(/,/g,"");
    //     this.dataset.currentValue=parseInt(value);
    //     var caret = value.length-1;
    //     while((caret-3)>-1)
    //     {
    //         caret -= 3;
    //         value = value.split('');
    //         value.splice(caret+1,0,",");
    //         value = value.join('');
    //     }
    //     this.value = value;
    // });
  }, []);
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
            touched = _ref2.touched,
            values = _ref2.values;
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
                lineNumber: 110,
                columnNumber: 17
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 13
          }, _this), errors.sphere && touched.sphere ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "text-danger",
            children: errors.sphere
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 17
          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "text-danger"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 17
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_7__.Field, {
            as: "textarea",
            name: "description",
            validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_8__.required,
            placeholder: "\u041E\u043F\u0438\u0448\u0438\u0442\u0435 \u0432\u0430\u0448\u0443 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044E"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 13
          }, _this), errors.description && touched.description ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "text-danger",
            children: errors.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 17
          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "text-danger"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 17
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_7__.Field, {
            name: "amount",
            type: "text",
            validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_8__.required,
            component: _Masks_PriceMask__WEBPACK_IMPORTED_MODULE_10__.default,
            placeholder: "\u0421\u0443\u043C\u043C\u0430 \u0438\u0441\u043A\u0430"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 13
          }, _this), errors.amount && touched.amount ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "text-danger",
            children: errors.amount
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 17
          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "text-danger"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
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
                    lineNumber: 133,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                    children: "\u041F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0444\u0430\u0439\u043B\u044B \u0438\u043B\u0438 \u0449\u0435\u043B\u043A\u043D\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u0444\u0430\u0439\u043B\u044B"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 134,
                    columnNumber: 21
                  }, _this)]
                }), void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 132,
                  columnNumber: 19
                }, _this);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
                children: "\u0424\u0430\u0439\u043B\u044B:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 139,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
                children: fileNames.map(function (fileName) {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                    children: fileName
                  }, fileName, false, {
                    fileName: _jsxFileName,
                    lineNumber: 142,
                    columnNumber: 21
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 140,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "firststep_banner",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "firststep_banner--img",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                alt: "image",
                className: "secondstep",
                src: "/img/form/secondstep.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 149,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 148,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "firststep_banner--button",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", (_jsxDEV2 = {
                className: "singlebtn",
                type: "submit"
              }, (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_jsxDEV2, "className", "button"), (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_jsxDEV2, "value", "\u0414\u0430\u043B\u0435\u0435"), _jsxDEV2), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 152,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                children: ["\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 157,
                  columnNumber: 39
                }, _this), "\u043F\u043E\u0442\u043E\u043C \u043E\u043F\u043B\u0430\u0442\u0430"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 157,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 11
        }, _this);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 95,
    columnNumber: 5
  }, _this);
};

_s(SecondStep, "hNGPsfhSRBBMaAzWC6jBRwjwahA=", false, function () {
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRzZXJ2aWNlL1NlY29uZFN0ZXAuanMiXSwibmFtZXMiOlsiU2Vjb25kU3RlcCIsInNldExvYWRpbmciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwYXRobmFtZSIsInVzZVN0YXRlIiwiZmlsZU5hbWVzIiwic2V0RmlsZU5hbWVzIiwiaWQiLCJjb29raWUiLCJ0b2tlbiIsImRlc2NyaXB0aW9uIiwic3BoZXJlIiwiYW1vdW50IiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsIm9uQ2hhbmdlIiwiZSIsIm5hbWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZURyb3AiLCJhY2NlcHRlZEZpbGVzIiwibWFwIiwiZmlsZSIsInN0ZXBTZWNvbmQiLCJ2YWx1ZXMiLCJheGlvcyIsInByb2Nlc3MiLCJwYXJhbXMiLCJyZXBsYWNlRGF0ZSIsInRoZW4iLCJyZXMiLCJkYXRhIiwic3VjY2VzcyIsIlJvdXRlciIsInVzZUVmZmVjdCIsImZvcm0iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjb25zb2xlIiwibG9nIiwic2Nyb2xsSW50b1ZpZXciLCJibG9jayIsImJlaGF2aW9yIiwiZXJyb3JzIiwidG91Y2hlZCIsInJlcXVpcmVkIiwiZml6c2VydmljZSIsImZpeiIsImluZGV4IiwiUHJpY2VNYXNrIiwiZ2V0Um9vdFByb3BzIiwiZ2V0SW5wdXRQcm9wcyIsImNsYXNzTmFtZSIsImZpbGVOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFrQjtBQUFBOztBQUFBLE1BQWhCQyxVQUFnQixRQUFoQkEsVUFBZ0I7QUFDbkMsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUNBLE1BQU1DLFFBQVEsR0FB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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERDtBQUFBO0FBVkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXdGRCxDQTFLRDs7R0FBTXZELFU7VUFDV0csa0Q7OztLQURYSCxVO0FBNEtOLCtEQUFlQSxVQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2dldHNlcnZpY2UuNzNhNjI0ZmMxZmViZmZkZTBjNjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHtmaXpzZXJ2aWNlfSBmcm9tIFwiLi4vLi4vZGVmYXVsdHMvZml6c2VydmljZVwiXHJcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IFJvdXRlciwge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuaW1wb3J0IHtGb3JtaWssIEZvcm0sIEZpZWxkfSBmcm9tICdmb3JtaWsnO1xyXG5pbXBvcnQge3JlcXVpcmVkfSBmcm9tIFwiLi4vLi4vZGVmYXVsdHMvdmFsaWRhdGlvbnNcIlxyXG5pbXBvcnQgRHJvcHpvbmUgZnJvbSBcInJlYWN0LWRyb3B6b25lXCI7XHJcbmltcG9ydCBQcmljZU1hc2sgZnJvbSBcIi4uL01hc2tzL1ByaWNlTWFza1wiXHJcbmltcG9ydCB7IHJlcGxhY2VEYXRlLCB0aG91c2FuZFNlcGFyYXRvciB9IGZyb20gXCIuLi8uLi9kZWZhdWx0cy9leHRyYUZ1bmN0aW9uXCJcclxuXHJcbmNvbnN0IFNlY29uZFN0ZXAgPSAoe3NldExvYWRpbmd9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBwYXRobmFtZSA9IHJvdXRlci5wYXRobmFtZVxyXG5cclxuICBjb25zdCBbZmlsZU5hbWVzLFxyXG4gICAgc2V0RmlsZU5hbWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZm9ybURhdGEsXHJcbiAgICBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBpZDogY29va2llLmdldCgnbGVhZF9pZCcpLFxyXG4gICAgdG9rZW46IGNvb2tpZS5nZXQoJ3Rva2VuJyksXHJcbiAgICBkZXNjcmlwdGlvbjogJycsXHJcbiAgICBzcGhlcmU6ICcxJyxcclxuICAgIGFtb3VudDogJydcclxuICB9KVxyXG4gIGNvbnN0IG9uQ2hhbmdlID0gZSA9PiB7XHJcbiAgICBjb25zdCBuYW1lID0gZS50YXJnZXQubmFtZVxyXG4gICAgc2V0Rm9ybURhdGEoe1xyXG4gICAgICAuLi5mb3JtRGF0YSxcclxuICAgICAgW25hbWVdOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgfSlcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlRHJvcCA9IGFjY2VwdGVkRmlsZXMgPT4gc2V0RmlsZU5hbWVzKGFjY2VwdGVkRmlsZXMubWFwKGZpbGUgPT4gZmlsZS5uYW1lKSk7XHJcblxyXG4gIGNvbnN0IHN0ZXBTZWNvbmQgPSAodmFsdWVzKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICAvLyBjb25zb2xlLmxvZyhyZXBsYWNlRGF0ZSh2YWx1ZXMuYW1vdW50KSlcclxuICAgIGF4aW9zXHJcbiAgICAgIC5nZXQoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L3N0ZXBUd29gLCB7XHJcbiAgICAgIHBhcmFtczoge1xyXG4gICAgICAgIGlkOiB2YWx1ZXMuaWQsXHJcbiAgICAgICAgdG9rZW46IHZhbHVlcy50b2tlbixcclxuICAgICAgICBkZXNjcmlwdGlvbjogdmFsdWVzLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIHNwaGVyZTogdmFsdWVzLnNwaGVyZSxcclxuICAgICAgICBhbW91bnQ6IHJlcGxhY2VEYXRlKHZhbHVlcy5hbW91bnQpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgIFJvdXRlci5wdXNoKCcvZ2V0c2VydmljZT9zdGVwPTMnKVxyXG4gICAgICAgICAgaWYocGF0aG5hbWU9PT0nL2p1cnNlcnZpY2UnKSB7XHJcbiAgICAgICAgICAgIGNvb2tpZS5zZXQoJ3N0ZXBqdXInLCAyKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYocGF0aG5hbWUgPT09ICcvZ2V0c2VydmljZScpIHtcclxuICAgICAgICAgICAgY29va2llLnNldCgnc3RlcCcsMylcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNvb2tpZS5zZXQoJ3N0ZXAnLCAzKVxyXG4gICAgICAgICAgY29va2llLnNldCgnYW1vdW50JywgcmVwbGFjZURhdGUodmFsdWVzLmFtb3VudCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcmVzLmRhdGEuc3VjY2Vzcykge31cclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB2YXIgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX3JlZ2lzdGVyJyk7XHJcbiAgICBjb25zb2xlLmxvZyhmb3JtKVxyXG4gICAgZm9ybS5zY3JvbGxJbnRvVmlldyh7YmxvY2s6ICdjZW50ZXInLCBiZWhhdmlvcjogJ3Ntb290aCd9KVxyXG5cclxuICAgIC8vIGNvbnN0IHByaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaWNlJylcclxuXHJcbiAgLy8gICBwcmljZS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLGZ1bmN0aW9uKGV2ZW50KXtcclxuICAvLyAgICAgdmFyIGtleSA9IGV2ZW50LndoaWNoO1xyXG4gIC8vICAgICBpZigoa2V5PDQ4IHx8IGtleT41NykgJiYga2V5ICE9IDgpIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgLy8gICB9KTtcclxuXHJcbiAgLy8gICBwcmljZS5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIixmdW5jdGlvbihldmVudCl7XHJcbiAgLy8gICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWUucmVwbGFjZSgvLC9nLFwiXCIpO1xyXG4gIC8vICAgICB0aGlzLmRhdGFzZXQuY3VycmVudFZhbHVlPXBhcnNlSW50KHZhbHVlKTtcclxuICAvLyAgICAgdmFyIGNhcmV0ID0gdmFsdWUubGVuZ3RoLTE7XHJcbiAgLy8gICAgIHdoaWxlKChjYXJldC0zKT4tMSlcclxuICAvLyAgICAge1xyXG4gIC8vICAgICAgICAgY2FyZXQgLT0gMztcclxuICAvLyAgICAgICAgIHZhbHVlID0gdmFsdWUuc3BsaXQoJycpO1xyXG4gIC8vICAgICAgICAgdmFsdWUuc3BsaWNlKGNhcmV0KzEsMCxcIixcIik7XHJcbiAgLy8gICAgICAgICB2YWx1ZSA9IHZhbHVlLmpvaW4oJycpO1xyXG4gIC8vICAgICB9XHJcbiAgLy8gICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAvLyB9KTtcclxuICBcclxuICB9LFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2Zvcm1fcmVnaXN0ZXInPlxyXG4gICAgICA8Rm9ybWlrXHJcbiAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xyXG4gICAgICAgIGlkOiBjb29raWUuZ2V0KCdsZWFkX2lkJyksXHJcbiAgICAgICAgdG9rZW46IGNvb2tpZS5nZXQoJ3Rva2VuJyksXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgICAgIHNwaGVyZTogJzEnLFxyXG4gICAgICAgIGFtb3VudDogJydcclxuICAgICAgfX1cclxuICAgICAgICBvblN1Ym1pdD1cclxuICAgICAgICB7KHZhbHVlcykgPT4ge3N0ZXBTZWNvbmQodmFsdWVzKX19PlxyXG4gICAgICAgIHsoe2Vycm9ycywgdG91Y2hlZCwgdmFsdWVzfSkgPT4gKFxyXG4gICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgIDxGaWVsZCBhcz0nc2VsZWN0JyB2YWxpZGF0ZT17cmVxdWlyZWR9IG5hbWU9J3NwaGVyZScgY2xhc3NOYW1lPSdmb3JtX3NlbGVjdCc+XHJcbiAgICAgICAgICAgICAge2ZpenNlcnZpY2UubWFwKChmaXosIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIGRhdGEtaW1nPXtgL2ltZy91c2x1Z2kvJHtpbmRleCsxfS5zdmdgfSB2YWx1ZT17aW5kZXggKyAxfT57Zml6Lm5hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvRmllbGQ+XHJcbiAgICAgICAgICAgIHsoZXJyb3JzLnNwaGVyZSAmJiB0b3VjaGVkLnNwaGVyZSlcclxuICAgICAgICAgICAgICA/IDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPntlcnJvcnMuc3BoZXJlfTwvcD5cclxuICAgICAgICAgICAgICA6IDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPjwvcD59XHJcbiAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgIGFzPSd0ZXh0YXJlYSdcclxuICAgICAgICAgICAgICBuYW1lPSdkZXNjcmlwdGlvbidcclxuICAgICAgICAgICAgICB2YWxpZGF0ZT17cmVxdWlyZWR9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J9Ce0L/QuNGI0LjRgtC1INCy0LDRiNGDINGB0LjRgtGD0LDRhtC40Y4nPjwvRmllbGQ+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHsoZXJyb3JzLmRlc2NyaXB0aW9uICYmIHRvdWNoZWQuZGVzY3JpcHRpb24pXHJcbiAgICAgICAgICAgICAgPyA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz57ZXJyb3JzLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICA6IDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPjwvcD59XHJcbiAgICAgICAgICAgIDxGaWVsZCBuYW1lPSdhbW91bnQnICB0eXBlPSd0ZXh0JyB2YWxpZGF0ZT17cmVxdWlyZWR9IGNvbXBvbmVudD17UHJpY2VNYXNrfSBwbGFjZWhvbGRlcj0n0KHRg9C80LzQsCDQuNGB0LrQsCc+PC9GaWVsZD5cclxuICAgICAgICAgICAgeyhlcnJvcnMuYW1vdW50ICYmIHRvdWNoZWQuYW1vdW50KVxyXG4gICAgICAgICAgICAgID8gPHAgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+e2Vycm9ycy5hbW91bnR9PC9wPlxyXG4gICAgICAgICAgICAgIDogPHAgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+PC9wPn1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Ryb3BmaWxlcyc+XHJcbiAgICAgICAgICAgICAgPERyb3B6b25lIG9uRHJvcD17aGFuZGxlRHJvcH0+XHJcbiAgICAgICAgICAgICAgICB7KHtnZXRSb290UHJvcHMsIGdldElucHV0UHJvcHN9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgey4uLmdldFJvb3RQcm9wcyh7IGNsYXNzTmFtZTogXCJkcm9wem9uZVwiIH0pfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgey4uLmdldElucHV0UHJvcHMoKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPtCf0LXRgNC10YLQsNGJ0LjRgtC1INGE0LDQudC70Ysg0LjQu9C4INGJ0LXQu9C60L3QuNGC0LUsINGH0YLQvtCx0Ysg0LLRi9Cx0YDQsNGC0Ywg0YTQsNC50LvRizwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvRHJvcHpvbmU+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+0KTQsNC50LvRizo8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAge2ZpbGVOYW1lcy5tYXAoZmlsZU5hbWUgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2ZpbGVOYW1lfT57ZmlsZU5hbWV9PC9saT5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpcnN0c3RlcF9iYW5uZXInPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpcnN0c3RlcF9iYW5uZXItLWltZyc+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PSdpbWFnZScgY2xhc3NOYW1lPSdzZWNvbmRzdGVwJyBzcmM9Jy9pbWcvZm9ybS9zZWNvbmRzdGVwLnBuZycvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmlyc3RzdGVwX2Jhbm5lci0tYnV0dG9uJz5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzaW5nbGVidG4nXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYnV0dG9uJ1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPSfQlNCw0LvQtdC1Jy8+XHJcbiAgICAgICAgICAgICAgICAgIDxiPtCh0L3QsNGH0LDQu9CwINGA0LXQt9GD0LvRjNGC0LDRgjxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgINC/0L7RgtC+0Lwg0L7Qv9C70LDRgtCwPC9iPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICA8L0Zvcm1paz5cclxuICAgICAgey8qIDxmb3JtIG9uU3VibWl0PXsoZSkgPT4gc3RlcFNlY29uZChlKX0+XHJcbiAgICAgICAgPHNlbGVjdCBvbkNoYW5nZT17ZT0+IG9uQ2hhbmdlKGUpfSB2YWx1ZT17Zm9ybURhdGEuc3BoZXJlfSBuYW1lPSdzcGhlcmUnIGNsYXNzTmFtZT0nZm9ybV9zZWxlY3QnPlxyXG4gICAgICAgICAge2ZpenNlcnZpY2UubWFwKChmaXosaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17aW5kZXgrMX0+e2Zpei5uYW1lfTwvb3B0aW9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPHRleHRhcmVhIG5hbWU9J2Rlc2NyaXB0aW9uJyB2YWx1ZT17Zm9ybURhdGEuZGVzY3JpcHRpb259IG9uQ2hhbmdlPXtlPT5vbkNoYW5nZShlKX0gcGxhY2Vob2xkZXI9J9Ce0L/QuNGI0LjRgtC1INCy0LDRiNGDINGB0LjRgtGD0LDRhtC40Y4nPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9J251bWJlcicgb25DaGFuZ2U9e2U9Pm9uQ2hhbmdlKGUpfSB2YWx1ZT17Zm9ybURhdGEuYW1vdW50fSBuYW1lPSdhbW91bnQnIHBsYWNlaG9sZGVyPSfQodGD0LzQvNCwINC40YHQutCwJyAvPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPSdmaWxlJyAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtX2J1dHRvbnMnPlxyXG4gICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0ndHJhbnNwYXJlbnRidG4gYnV0dG9uJyB0eXBlPSdidXR0b24nIHZhbHVlPSfQktC10YDQvdGD0YLRjNGB0Y8g0L3QsNC30LDQtCcvPlxyXG4gICAgICAgICAgPGlucHV0ICBjbGFzc05hbWU9J2J1dHRvbicgdHlwZT0nc3VibWl0JyB2YWx1ZT0n0JTQsNC70LXQtScgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPiAqL31cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2Vjb25kU3RlcCJdLCJzb3VyY2VSb290IjoiIn0=