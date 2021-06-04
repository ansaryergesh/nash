self["webpackHotUpdate_N_E"]("pages/jurservice",{

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
    // setLoading(true)
    console.log((0,_defaults_extraFunction__WEBPACK_IMPORTED_MODULE_11__.replaceDate)(values.amount)); // axios
    //   .get(`${process.env.BASE_URL}/stepTwo`, {
    //   params: {
    //     id: values.id,
    //     token: values.token,
    //     description: values.description,
    //     sphere: values.sphere,
    //     amount: values.amount
    //   }
    // })
    //   .then(res => {
    //     setLoading(false)
    //     // console.log(res)
    //     if (res.data.success) {
    //       Router.push('/getservice?step=3')
    //       if(pathname==='/jurservice') {
    //         cookie.set('stepjur', 2)
    //       }
    //       if(pathname === '/getservice') {
    //         cookie.set('step',3)
    //       }
    //       cookie.set('step', 3)
    //       cookie.set('amount', values.amount)
    //     }
    //     if (!res.data.success) {}
    //   })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRzZXJ2aWNlL1NlY29uZFN0ZXAuanMiXSwibmFtZXMiOlsiU2Vjb25kU3RlcCIsInNldExvYWRpbmciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwYXRobmFtZSIsInVzZVN0YXRlIiwiZmlsZU5hbWVzIiwic2V0RmlsZU5hbWVzIiwiaWQiLCJjb29raWUiLCJ0b2tlbiIsImRlc2NyaXB0aW9uIiwic3BoZXJlIiwiYW1vdW50IiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsIm9uQ2hhbmdlIiwiZSIsIm5hbWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZURyb3AiLCJhY2NlcHRlZEZpbGVzIiwibWFwIiwiZmlsZSIsInN0ZXBTZWNvbmQiLCJ2YWx1ZXMiLCJjb25zb2xlIiwibG9nIiwicmVwbGFjZURhdGUiLCJ1c2VFZmZlY3QiLCJmb3JtIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsSW50b1ZpZXciLCJibG9jayIsImJlaGF2aW9yIiwiZXJyb3JzIiwidG91Y2hlZCIsInJlcXVpcmVkIiwiZml6c2VydmljZSIsImZpeiIsImluZGV4IiwiUHJpY2VNYXNrIiwiZ2V0Um9vdFByb3BzIiwiZ2V0SW5wdXRQcm9wcyIsImNsYXNzTmFtZSIsImZpbGVOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFrQjtBQUFBOztBQUFBLE1BQWhCQyxVQUFnQixRQUFoQkEsVUFBZ0I7QUFDbkMsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUNBLE1BQU1DLFFBQVEsR0FBR0YsTUFBTSxDQUFDRSxRQUF4Qjs7QUFGbUMsa0JBS2pCQywrQ0FBUSxDQUFDLEVBQUQsQ0FMUztBQUFBLE1BSTVC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QUssdUJBQVMsRUFBQywwQkFBZjtBQUFBLHNDQUNFO0FBQ0UseUJBQVMsRUFBQyxXQURaO0FBRUUsb0JBQUksRUFBQztBQUZQLHlKQUdZLFFBSFosdUlBSVEsZ0NBSlI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQU1FO0FBQUEsNklBQW9CO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXhDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQ7QUFBQTtBQVZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF3RkQsQ0ExS0Q7O0dBQU0vQyxVO1VBQ1dHLGtEOzs7S0FEWEgsVTtBQTRLTiwrREFBZUEsVUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9qdXJzZXJ2aWNlLmM3OTQ3OThjOTdiYjViMTIyNTUyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7Zml6c2VydmljZX0gZnJvbSBcIi4uLy4uL2RlZmF1bHRzL2ZpenNlcnZpY2VcIlxyXG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSdcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCBSb3V0ZXIsIHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCB7Rm9ybWlrLCBGb3JtLCBGaWVsZH0gZnJvbSAnZm9ybWlrJztcclxuaW1wb3J0IHtyZXF1aXJlZH0gZnJvbSBcIi4uLy4uL2RlZmF1bHRzL3ZhbGlkYXRpb25zXCJcclxuaW1wb3J0IERyb3B6b25lIGZyb20gXCJyZWFjdC1kcm9wem9uZVwiO1xyXG5pbXBvcnQgUHJpY2VNYXNrIGZyb20gXCIuLi9NYXNrcy9QcmljZU1hc2tcIlxyXG5pbXBvcnQgeyByZXBsYWNlRGF0ZSwgdGhvdXNhbmRTZXBhcmF0b3IgfSBmcm9tIFwiLi4vLi4vZGVmYXVsdHMvZXh0cmFGdW5jdGlvblwiXHJcblxyXG5jb25zdCBTZWNvbmRTdGVwID0gKHtzZXRMb2FkaW5nfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgcGF0aG5hbWUgPSByb3V0ZXIucGF0aG5hbWVcclxuXHJcbiAgY29uc3QgW2ZpbGVOYW1lcyxcclxuICAgIHNldEZpbGVOYW1lc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2Zvcm1EYXRhLFxyXG4gICAgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgaWQ6IGNvb2tpZS5nZXQoJ2xlYWRfaWQnKSxcclxuICAgIHRva2VuOiBjb29raWUuZ2V0KCd0b2tlbicpLFxyXG4gICAgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgc3BoZXJlOiAnMScsXHJcbiAgICBhbW91bnQ6ICcnXHJcbiAgfSlcclxuICBjb25zdCBvbkNoYW5nZSA9IGUgPT4ge1xyXG4gICAgY29uc3QgbmFtZSA9IGUudGFyZ2V0Lm5hbWVcclxuICAgIHNldEZvcm1EYXRhKHtcclxuICAgICAgLi4uZm9ybURhdGEsXHJcbiAgICAgIFtuYW1lXTogZS50YXJnZXQudmFsdWVcclxuICAgIH0pXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZURyb3AgPSBhY2NlcHRlZEZpbGVzID0+IHNldEZpbGVOYW1lcyhhY2NlcHRlZEZpbGVzLm1hcChmaWxlID0+IGZpbGUubmFtZSkpO1xyXG5cclxuICBjb25zdCBzdGVwU2Vjb25kID0gKHZhbHVlcykgPT4ge1xyXG4gICAgLy8gc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgY29uc29sZS5sb2cocmVwbGFjZURhdGUodmFsdWVzLmFtb3VudCkpXHJcbiAgICAvLyBheGlvc1xyXG4gICAgLy8gICAuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9zdGVwVHdvYCwge1xyXG4gICAgLy8gICBwYXJhbXM6IHtcclxuICAgIC8vICAgICBpZDogdmFsdWVzLmlkLFxyXG4gICAgLy8gICAgIHRva2VuOiB2YWx1ZXMudG9rZW4sXHJcbiAgICAvLyAgICAgZGVzY3JpcHRpb246IHZhbHVlcy5kZXNjcmlwdGlvbixcclxuICAgIC8vICAgICBzcGhlcmU6IHZhbHVlcy5zcGhlcmUsXHJcbiAgICAvLyAgICAgYW1vdW50OiB2YWx1ZXMuYW1vdW50XHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH0pXHJcbiAgICAvLyAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAvLyAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAvLyAgICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgIC8vICAgICAgIFJvdXRlci5wdXNoKCcvZ2V0c2VydmljZT9zdGVwPTMnKVxyXG4gICAgLy8gICAgICAgaWYocGF0aG5hbWU9PT0nL2p1cnNlcnZpY2UnKSB7XHJcbiAgICAvLyAgICAgICAgIGNvb2tpZS5zZXQoJ3N0ZXBqdXInLCAyKVxyXG4gICAgLy8gICAgICAgfVxyXG4gICAgLy8gICAgICAgaWYocGF0aG5hbWUgPT09ICcvZ2V0c2VydmljZScpIHtcclxuICAgIC8vICAgICAgICAgY29va2llLnNldCgnc3RlcCcsMylcclxuICAgIC8vICAgICAgIH1cclxuICAgIC8vICAgICAgIGNvb2tpZS5zZXQoJ3N0ZXAnLCAzKVxyXG4gICAgLy8gICAgICAgY29va2llLnNldCgnYW1vdW50JywgdmFsdWVzLmFtb3VudClcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgaWYgKCFyZXMuZGF0YS5zdWNjZXNzKSB7fVxyXG4gICAgLy8gICB9KVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHZhciBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1fcmVnaXN0ZXInKTtcclxuICAgIGNvbnNvbGUubG9nKGZvcm0pXHJcbiAgICBmb3JtLnNjcm9sbEludG9WaWV3KHtibG9jazogJ2NlbnRlcicsIGJlaGF2aW9yOiAnc21vb3RoJ30pXHJcblxyXG4gICAgLy8gY29uc3QgcHJpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpY2UnKVxyXG5cclxuICAvLyAgIHByaWNlLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsZnVuY3Rpb24oZXZlbnQpe1xyXG4gIC8vICAgICB2YXIga2V5ID0gZXZlbnQud2hpY2g7XHJcbiAgLy8gICAgIGlmKChrZXk8NDggfHwga2V5PjU3KSAmJiBrZXkgIT0gOCkgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAvLyAgIH0pO1xyXG5cclxuICAvLyAgIHByaWNlLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLGZ1bmN0aW9uKGV2ZW50KXtcclxuICAvLyAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZS5yZXBsYWNlKC8sL2csXCJcIik7XHJcbiAgLy8gICAgIHRoaXMuZGF0YXNldC5jdXJyZW50VmFsdWU9cGFyc2VJbnQodmFsdWUpO1xyXG4gIC8vICAgICB2YXIgY2FyZXQgPSB2YWx1ZS5sZW5ndGgtMTtcclxuICAvLyAgICAgd2hpbGUoKGNhcmV0LTMpPi0xKVxyXG4gIC8vICAgICB7XHJcbiAgLy8gICAgICAgICBjYXJldCAtPSAzO1xyXG4gIC8vICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zcGxpdCgnJyk7XHJcbiAgLy8gICAgICAgICB2YWx1ZS5zcGxpY2UoY2FyZXQrMSwwLFwiLFwiKTtcclxuICAvLyAgICAgICAgIHZhbHVlID0gdmFsdWUuam9pbignJyk7XHJcbiAgLy8gICAgIH1cclxuICAvLyAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gIC8vIH0pO1xyXG4gIFxyXG4gIH0sW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybV9yZWdpc3Rlcic+XHJcbiAgICAgIDxGb3JtaWtcclxuICAgICAgICBpbml0aWFsVmFsdWVzPXt7XHJcbiAgICAgICAgaWQ6IGNvb2tpZS5nZXQoJ2xlYWRfaWQnKSxcclxuICAgICAgICB0b2tlbjogY29va2llLmdldCgndG9rZW4nKSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJycsXHJcbiAgICAgICAgc3BoZXJlOiAnMScsXHJcbiAgICAgICAgYW1vdW50OiAnJ1xyXG4gICAgICB9fVxyXG4gICAgICAgIG9uU3VibWl0PVxyXG4gICAgICAgIHsodmFsdWVzKSA9PiB7c3RlcFNlY29uZCh2YWx1ZXMpfX0+XHJcbiAgICAgICAgeyh7ZXJyb3JzLCB0b3VjaGVkLCB2YWx1ZXN9KSA9PiAoXHJcbiAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgPEZpZWxkIGFzPSdzZWxlY3QnIHZhbGlkYXRlPXtyZXF1aXJlZH0gbmFtZT0nc3BoZXJlJyBjbGFzc05hbWU9J2Zvcm1fc2VsZWN0Jz5cclxuICAgICAgICAgICAgICB7Zml6c2VydmljZS5tYXAoKGZpeiwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxvcHRpb24gZGF0YS1pbWc9e2AvaW1nL3VzbHVnaS8ke2luZGV4KzF9LnN2Z2B9IHZhbHVlPXtpbmRleCArIDF9PntmaXoubmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9GaWVsZD5cclxuICAgICAgICAgICAgeyhlcnJvcnMuc3BoZXJlICYmIHRvdWNoZWQuc3BoZXJlKVxyXG4gICAgICAgICAgICAgID8gPHAgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+e2Vycm9ycy5zcGhlcmV9PC9wPlxyXG4gICAgICAgICAgICAgIDogPHAgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+PC9wPn1cclxuICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgYXM9J3RleHRhcmVhJ1xyXG4gICAgICAgICAgICAgIG5hbWU9J2Rlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAgICAgIHZhbGlkYXRlPXtyZXF1aXJlZH1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0n0J7Qv9C40YjQuNGC0LUg0LLQsNGI0YMg0YHQuNGC0YPQsNGG0LjRjic+PC9GaWVsZD5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgeyhlcnJvcnMuZGVzY3JpcHRpb24gJiYgdG91Y2hlZC5kZXNjcmlwdGlvbilcclxuICAgICAgICAgICAgICA/IDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPntlcnJvcnMuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgIDogPHAgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+PC9wPn1cclxuICAgICAgICAgICAgPEZpZWxkIG5hbWU9J2Ftb3VudCcgIHR5cGU9J3RleHQnIHZhbGlkYXRlPXtyZXF1aXJlZH0gY29tcG9uZW50PXtQcmljZU1hc2t9IHBsYWNlaG9sZGVyPSfQodGD0LzQvNCwINC40YHQutCwJz48L0ZpZWxkPlxyXG4gICAgICAgICAgICB7KGVycm9ycy5hbW91bnQgJiYgdG91Y2hlZC5hbW91bnQpXHJcbiAgICAgICAgICAgICAgPyA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz57ZXJyb3JzLmFtb3VudH08L3A+XHJcbiAgICAgICAgICAgICAgOiA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz48L3A+fVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZHJvcGZpbGVzJz5cclxuICAgICAgICAgICAgICA8RHJvcHpvbmUgb25Ecm9wPXtoYW5kbGVEcm9wfT5cclxuICAgICAgICAgICAgICAgIHsoe2dldFJvb3RQcm9wcywgZ2V0SW5wdXRQcm9wc30pID0+IChcclxuICAgICAgICAgICAgICAgICAgPGRpdiB7Li4uZ2V0Um9vdFByb3BzKHsgY2xhc3NOYW1lOiBcImRyb3B6b25lXCIgfSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB7Li4uZ2V0SW5wdXRQcm9wcygpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+0J/QtdGA0LXRgtCw0YnQuNGC0LUg0YTQsNC50LvRiyDQuNC70Lgg0YnQtdC70LrQvdC40YLQtSwg0YfRgtC+0LHRiyDQstGL0LHRgNCw0YLRjCDRhNCw0LnQu9GLPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9Ecm9wem9uZT5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz7QpNCw0LnQu9GLOjwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICB7ZmlsZU5hbWVzLm1hcChmaWxlTmFtZSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17ZmlsZU5hbWV9PntmaWxlTmFtZX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmlyc3RzdGVwX2Jhbm5lcic+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmlyc3RzdGVwX2Jhbm5lci0taW1nJz5cclxuICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J3NlY29uZHN0ZXAnIHNyYz0nL2ltZy9mb3JtL3NlY29uZHN0ZXAucG5nJy8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaXJzdHN0ZXBfYmFubmVyLS1idXR0b24nPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NpbmdsZWJ0bidcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPSdzdWJtaXQnXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdidXR0b24nXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9J9CU0LDQu9C10LUnLz5cclxuICAgICAgICAgICAgICAgICAgPGI+0KHQvdCw0YfQsNC70LAg0YDQtdC30YPQu9GM0YLQsNGCPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgICAg0L/QvtGC0L7QvCDQvtC/0LvQsNGC0LA8L2I+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgIDwvRm9ybWlrPlxyXG4gICAgICB7LyogPGZvcm0gb25TdWJtaXQ9eyhlKSA9PiBzdGVwU2Vjb25kKGUpfT5cclxuICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXtlPT4gb25DaGFuZ2UoZSl9IHZhbHVlPXtmb3JtRGF0YS5zcGhlcmV9IG5hbWU9J3NwaGVyZScgY2xhc3NOYW1lPSdmb3JtX3NlbGVjdCc+XHJcbiAgICAgICAgICB7Zml6c2VydmljZS5tYXAoKGZpeixpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtpbmRleCsxfT57Zml6Lm5hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8dGV4dGFyZWEgbmFtZT0nZGVzY3JpcHRpb24nIHZhbHVlPXtmb3JtRGF0YS5kZXNjcmlwdGlvbn0gb25DaGFuZ2U9e2U9Pm9uQ2hhbmdlKGUpfSBwbGFjZWhvbGRlcj0n0J7Qv9C40YjQuNGC0LUg0LLQsNGI0YMg0YHQuNGC0YPQsNGG0LjRjic+PC90ZXh0YXJlYT5cclxuICAgICAgICA8aW5wdXQgdHlwZT0nbnVtYmVyJyBvbkNoYW5nZT17ZT0+b25DaGFuZ2UoZSl9IHZhbHVlPXtmb3JtRGF0YS5hbW91bnR9IG5hbWU9J2Ftb3VudCcgcGxhY2Vob2xkZXI9J9Ch0YPQvNC80LAg0LjRgdC60LAnIC8+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9J2ZpbGUnIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm1fYnV0dG9ucyc+XHJcbiAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSd0cmFuc3BhcmVudGJ0biBidXR0b24nIHR5cGU9J2J1dHRvbicgdmFsdWU9J9CS0LXRgNC90YPRgtGM0YHRjyDQvdCw0LfQsNC0Jy8+XHJcbiAgICAgICAgICA8aW5wdXQgIGNsYXNzTmFtZT0nYnV0dG9uJyB0eXBlPSdzdWJtaXQnIHZhbHVlPSfQlNCw0LvQtdC1JyAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+ICovfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWNvbmRTdGVwIl0sInNvdXJjZVJvb3QiOiIifQ==