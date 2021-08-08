self["webpackHotUpdate_N_E"]("pages/dlya-fizicheskix-lic",{

/***/ "./components/getservice/SecondStep.js":
/*!*********************************************!*\
  !*** ./components/getservice/SecondStep.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
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
/* harmony import */ var _dropFile_DropFile__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../dropFile/DropFile */ "./components/dropFile/DropFile.js");
/* harmony import */ var _Masks_DateMask__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Masks/DateMask */ "./components/Masks/DateMask.js");
/* harmony import */ var _dropFileDoc_dropFileDoc__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../dropFileDoc/dropFileDoc */ "./components/dropFileDoc/dropFileDoc.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "E:\\job\\nashcompany\\components\\getservice\\SecondStep.js",
    _this = undefined,
    _s = $RefreshSig$();















var SecondStep = function SecondStep(_ref) {
  _s();

  var setLoading = _ref.setLoading;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
  var pathname = router.pathname; // const {id} = router.query

  var step = router.query.step;
  var type = router.query.type;
  var listofservice = router.pathname === '/dlya-fizicheskix-lic' ? _defaults_fizservice__WEBPACK_IMPORTED_MODULE_3__.fizservice : _defaults_fizservice__WEBPACK_IMPORTED_MODULE_3__.jurservice;
  var listofcontinue = type === 'Физ лицо' ? _defaults_fizservice__WEBPACK_IMPORTED_MODULE_3__.fizservice : _defaults_fizservice__WEBPACK_IMPORTED_MODULE_3__.jurservice;
  var finalLists = pathname === '/cabinet/continue' ? listofcontinue : listofservice;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      isMfo = _useState[0],
      setIsMfo = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('1'),
      sphere = _useState2[0],
      setSphere = _useState2[1];

  var onChangeSphere = function onChangeSphere(e) {
    if (finalLists.find(function (x) {
      return x.id === e.target.value;
    }).name.includes('564546465465465465')) {
      setIsMfo(true);
      console.log(true);
    } else {
      setIsMfo(false);
    }

    setSphere(e.target.value);
  };

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      files = _useState3[0],
      setFiles = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    id: js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get('lead_id') === undefined ? router.query.id : js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get('lead_id'),
    token: js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get('token'),
    description: '',
    sphere: '1',
    amount: ''
  }),
      formData = _useState4[0],
      setFormData = _useState4[1];

  var stepSecond = function stepSecond(values) {
    setLoading(true);
    console.log(values); // console.log(replaceDate(values.amount))

    var sphereVal = finalLists.find(function (x) {
      return x.id === sphere;
    }).name;
    var object = {
      id: values.id,
      token: values.token,
      description: values.description,
      sphere: sphereVal,
      amount: (0,_defaults_extraFunction__WEBPACK_IMPORTED_MODULE_11__.replaceDate)(values.amount)
    };

    if (js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get('utm_source') !== undefined) {
      object.utm_source = js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get('utm_source') + "_2";
      object.click_id = js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get('click_id'); // object.webID = cookie.get('web_id')
    }

    axios__WEBPACK_IMPORTED_MODULE_5___default().get("".concat("https://crediter.kz/api", "/stepTwo"), {
      params: object
    }).then(function (res) {
      setLoading(false);
      console.log(res);

      if (res.data.success) {
        if (pathname === '/jurservice') {
          next_router__WEBPACK_IMPORTED_MODULE_6___default().push('/jurservice?step=3');
          js_cookie__WEBPACK_IMPORTED_MODULE_4___default().set('stepjur', 3);
          js_cookie__WEBPACK_IMPORTED_MODULE_4___default().set('amount', (0,_defaults_extraFunction__WEBPACK_IMPORTED_MODULE_11__.replaceDate)(values.amount));
        }

        if (pathname === '/dlya-fizicheskix-lic') {
          next_router__WEBPACK_IMPORTED_MODULE_6___default().push('/dlya-fizicheskix-lic?step=3');
          js_cookie__WEBPACK_IMPORTED_MODULE_4___default().set('step', 3);
          js_cookie__WEBPACK_IMPORTED_MODULE_4___default().set('amount', (0,_defaults_extraFunction__WEBPACK_IMPORTED_MODULE_11__.replaceDate)(values.amount));
        }

        if (pathname === '/cabinet/continue') {
          next_router__WEBPACK_IMPORTED_MODULE_6___default().push({
            pathname: '/cabinet/continue',
            query: {
              step: 3,
              id: router.query.id,
              type: type,
              amount: (0,_defaults_extraFunction__WEBPACK_IMPORTED_MODULE_11__.replaceDate)(values.amount)
            }
          });
        }
      }

      if (!res.data.success) {}
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {}, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "form_register",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_7__.Formik, {
      initialValues: {
        nameCompany: "",
        description: "",
        dateAggrement: "",
        od: "",
        amount: "",
        token: js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get('token')
      },
      onSubmit: function onSubmit(values) {
        stepSecond(values);
      },
      children: function children(_ref2) {
        var _jsxDEV2;

        var errors = _ref2.errors,
            touched = _ref2.touched,
            values = _ref2.values;
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_7__.Form, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_7__.Field, {
            as: "select",
            onChange: function onChange(e) {
              return onChangeSphere(e);
            },
            value: sphere,
            validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_8__.required,
            name: "sphere",
            className: "form_select",
            children: finalLists.map(function (fiz, index) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
                "data-img": "/img/uslugi/".concat(index + 1, ".svg"),
                value: index + 1,
                children: fiz.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 136,
                columnNumber: 17
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_dropFile_DropFile__WEBPACK_IMPORTED_MODULE_12__.default, {
            setFiles: setFiles
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_dropFileDoc_dropFileDoc__WEBPACK_IMPORTED_MODULE_14__.default, {
            setFiles: setFiles
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "firststep_banner",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "firststep_banner--img",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                alt: "image",
                className: "secondstep",
                src: "/img/form/secondstep.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 144,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "firststep_banner--button",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", (_jsxDEV2 = {
                className: "singlebtn",
                type: "submit"
              }, (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_jsxDEV2, "className", "button"), (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_jsxDEV2, "onClick", function onClick() {
                return (0,_defaults_extraFunction__WEBPACK_IMPORTED_MODULE_11__.handleFocus)();
              }), (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_jsxDEV2, "value", "\u0414\u0430\u043B\u0435\u0435"), _jsxDEV2), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 147,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("b", {
                children: ["\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 153,
                  columnNumber: 37
                }, _this), "\u043F\u043E\u0442\u043E\u043C \u043E\u043F\u043B\u0430\u0442\u0430"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 153,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 146,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 11
        }, _this);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 114,
    columnNumber: 5
  }, _this);
};

_s(SecondStep, "KO35CbH8tIL4YEIvdtUSukY687M=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRzZXJ2aWNlL1NlY29uZFN0ZXAuanMiXSwibmFtZXMiOlsiU2Vjb25kU3RlcCIsInNldExvYWRpbmciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwYXRobmFtZSIsInN0ZXAiLCJxdWVyeSIsInR5cGUiLCJsaXN0b2ZzZXJ2aWNlIiwiZml6c2VydmljZSIsImp1cnNlcnZpY2UiLCJsaXN0b2Zjb250aW51ZSIsImZpbmFsTGlzdHMiLCJ1c2VTdGF0ZSIsImlzTWZvIiwic2V0SXNNZm8iLCJzcGhlcmUiLCJzZXRTcGhlcmUiLCJvbkNoYW5nZVNwaGVyZSIsImUiLCJmaW5kIiwieCIsImlkIiwidGFyZ2V0IiwidmFsdWUiLCJuYW1lIiwiaW5jbHVkZXMiLCJjb25zb2xlIiwibG9nIiwiZmlsZXMiLCJzZXRGaWxlcyIsImNvb2tpZSIsInVuZGVmaW5lZCIsInRva2VuIiwiZGVzY3JpcHRpb24iLCJhbW91bnQiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwic3RlcFNlY29uZCIsInZhbHVlcyIsInNwaGVyZVZhbCIsIm9iamVjdCIsInJlcGxhY2VEYXRlIiwidXRtX3NvdXJjZSIsImNsaWNrX2lkIiwiYXhpb3MiLCJwcm9jZXNzIiwicGFyYW1zIiwidGhlbiIsInJlcyIsImRhdGEiLCJzdWNjZXNzIiwiUm91dGVyIiwidXNlRWZmZWN0IiwibmFtZUNvbXBhbnkiLCJkYXRlQWdncmVtZW50Iiwib2QiLCJlcnJvcnMiLCJ0b3VjaGVkIiwicmVxdWlyZWQiLCJtYXAiLCJmaXoiLCJpbmRleCIsImhhbmRsZUZvY3VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQWtCO0FBQUE7O0FBQUEs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QUFNL0QsVTtVQUNXRyxrRDs7O0tBRFhILFU7QUF1Sk4sK0RBQWVBLFVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGx5YS1maXppY2hlc2tpeC1saWMuNjk0MTJlNGJmOWNjM2I0ODdiNzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7Zml6c2VydmljZSwganVyc2VydmljZX0gZnJvbSBcIi4uLy4uL2RlZmF1bHRzL2ZpenNlcnZpY2VcIlxyXG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSdcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCBSb3V0ZXIsIHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCB7Rm9ybWlrLCBGb3JtLCBGaWVsZH0gZnJvbSAnZm9ybWlrJztcclxuaW1wb3J0IHtyZXF1aXJlZH0gZnJvbSBcIi4uLy4uL2RlZmF1bHRzL3ZhbGlkYXRpb25zXCJcclxuaW1wb3J0IERyb3B6b25lIGZyb20gXCJyZWFjdC1kcm9wem9uZVwiO1xyXG5pbXBvcnQgUHJpY2VNYXNrIGZyb20gXCIuLi9NYXNrcy9QcmljZU1hc2tcIlxyXG5pbXBvcnQge2hhbmRsZUZvY3VzLCByZXBsYWNlRGF0ZSwgdGhvdXNhbmRTZXBhcmF0b3J9IGZyb20gXCIuLi8uLi9kZWZhdWx0cy9leHRyYUZ1bmN0aW9uXCJcclxuaW1wb3J0IERyb3BGaWxlIGZyb20gXCIuLi9kcm9wRmlsZS9Ecm9wRmlsZVwiXHJcbmltcG9ydCBEYXRlTWFzayBmcm9tIFwiLi4vTWFza3MvRGF0ZU1hc2tcIlxyXG5pbXBvcnQgRHJvcEZpbGVEb2MgZnJvbSBcIi4uL2Ryb3BGaWxlRG9jL2Ryb3BGaWxlRG9jXCJcclxuXHJcbmNvbnN0IFNlY29uZFN0ZXAgPSAoe3NldExvYWRpbmd9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBwYXRobmFtZSA9IHJvdXRlci5wYXRobmFtZVxyXG4gIC8vIGNvbnN0IHtpZH0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCB7c3RlcH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3Qge3R5cGV9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IGxpc3RvZnNlcnZpY2UgPSByb3V0ZXIucGF0aG5hbWUgPT09ICcvZGx5YS1maXppY2hlc2tpeC1saWMnXHJcbiAgICA/IGZpenNlcnZpY2VcclxuICAgIDoganVyc2VydmljZVxyXG4gIGNvbnN0IGxpc3RvZmNvbnRpbnVlID0gdHlwZSA9PT0gJ9Ck0LjQtyDQu9C40YbQvidcclxuICAgID8gZml6c2VydmljZVxyXG4gICAgOiBqdXJzZXJ2aWNlXHJcbiAgY29uc3QgZmluYWxMaXN0cyA9IHBhdGhuYW1lID09PSAnL2NhYmluZXQvY29udGludWUnXHJcbiAgICA/IGxpc3RvZmNvbnRpbnVlXHJcbiAgICA6IGxpc3RvZnNlcnZpY2VcclxuICBjb25zdCBbaXNNZm8sXHJcbiAgICBzZXRJc01mb10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbc3BoZXJlLFxyXG4gICAgc2V0U3BoZXJlXSA9IHVzZVN0YXRlKCcxJylcclxuICBjb25zdCBvbkNoYW5nZVNwaGVyZSA9IGUgPT4ge1xyXG4gICAgaWYgKGZpbmFsTGlzdHMuZmluZCh4ID0+IHguaWQgPT09IGUudGFyZ2V0LnZhbHVlKS5uYW1lLmluY2x1ZGVzKCc1NjQ1NDY0NjU0NjU0NjU0NjUnKSkge1xyXG4gICAgICBzZXRJc01mbyh0cnVlKVxyXG4gICAgICBjb25zb2xlLmxvZyh0cnVlKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0SXNNZm8oZmFsc2UpXHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3BoZXJlKGUudGFyZ2V0LnZhbHVlKVxyXG4gIH1cclxuICBjb25zdCBbZmlsZXMsXHJcbiAgICBzZXRGaWxlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2Zvcm1EYXRhLFxyXG4gICAgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgaWQ6IGNvb2tpZS5nZXQoJ2xlYWRfaWQnKSA9PT0gdW5kZWZpbmVkXHJcbiAgICAgID8gcm91dGVyLnF1ZXJ5LmlkXHJcbiAgICAgIDogY29va2llLmdldCgnbGVhZF9pZCcpLFxyXG4gICAgdG9rZW46IGNvb2tpZS5nZXQoJ3Rva2VuJyksXHJcbiAgICBkZXNjcmlwdGlvbjogJycsXHJcbiAgICBzcGhlcmU6ICcxJyxcclxuICAgIGFtb3VudDogJydcclxuICB9KVxyXG5cclxuICBjb25zdCBzdGVwU2Vjb25kID0gKHZhbHVlcykgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgY29uc29sZS5sb2codmFsdWVzKVxyXG4gICAgLy8gY29uc29sZS5sb2cocmVwbGFjZURhdGUodmFsdWVzLmFtb3VudCkpXHJcbiAgICBjb25zdCBzcGhlcmVWYWwgPSBmaW5hbExpc3RzXHJcbiAgICAgIC5maW5kKHggPT4geC5pZCA9PT0gc3BoZXJlKVxyXG4gICAgICAubmFtZVxyXG4gICAgY29uc3Qgb2JqZWN0ID0ge1xyXG4gICAgICBpZDogdmFsdWVzLmlkLFxyXG4gICAgICB0b2tlbjogdmFsdWVzLnRva2VuLFxyXG4gICAgICBkZXNjcmlwdGlvbjogdmFsdWVzLmRlc2NyaXB0aW9uLFxyXG4gICAgICBzcGhlcmU6IHNwaGVyZVZhbCxcclxuICAgICAgYW1vdW50OiByZXBsYWNlRGF0ZSh2YWx1ZXMuYW1vdW50KVxyXG4gICAgfVxyXG4gICAgaWYgKGNvb2tpZS5nZXQoJ3V0bV9zb3VyY2UnKSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIG9iamVjdC51dG1fc291cmNlID0gY29va2llLmdldCgndXRtX3NvdXJjZScpICsgXCJfMlwiXHJcbiAgICAgIG9iamVjdC5jbGlja19pZCA9IGNvb2tpZS5nZXQoJ2NsaWNrX2lkJylcclxuICAgICAgLy8gb2JqZWN0LndlYklEID0gY29va2llLmdldCgnd2ViX2lkJylcclxuICAgIH1cclxuICAgIGF4aW9zXHJcbiAgICAgIC5nZXQoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L3N0ZXBUd29gLCB7cGFyYW1zOiBvYmplY3R9KVxyXG4gICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgIGlmIChyZXMuZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICBpZiAocGF0aG5hbWUgPT09ICcvanVyc2VydmljZScpIHtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goJy9qdXJzZXJ2aWNlP3N0ZXA9MycpXHJcbiAgICAgICAgICAgIGNvb2tpZS5zZXQoJ3N0ZXBqdXInLCAzKVxyXG4gICAgICAgICAgICBjb29raWUuc2V0KCdhbW91bnQnLCByZXBsYWNlRGF0ZSh2YWx1ZXMuYW1vdW50KSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChwYXRobmFtZSA9PT0gJy9kbHlhLWZpemljaGVza2l4LWxpYycpIHtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goJy9kbHlhLWZpemljaGVza2l4LWxpYz9zdGVwPTMnKVxyXG4gICAgICAgICAgICBjb29raWUuc2V0KCdzdGVwJywgMylcclxuICAgICAgICAgICAgY29va2llLnNldCgnYW1vdW50JywgcmVwbGFjZURhdGUodmFsdWVzLmFtb3VudCkpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAocGF0aG5hbWUgPT09ICcvY2FiaW5ldC9jb250aW51ZScpIHtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICAgIHBhdGhuYW1lOiAnL2NhYmluZXQvY29udGludWUnLFxyXG4gICAgICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAgICAgICBzdGVwOiAzLFxyXG4gICAgICAgICAgICAgICAgaWQ6IHJvdXRlci5xdWVyeS5pZCxcclxuICAgICAgICAgICAgICAgIHR5cGU6IHR5cGUsXHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IHJlcGxhY2VEYXRlKHZhbHVlcy5hbW91bnQpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXJlcy5kYXRhLnN1Y2Nlc3MpIHt9XHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuXHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybV9yZWdpc3Rlcic+XHJcbiAgICAgIDxGb3JtaWtcclxuICAgICAgICBpbml0aWFsVmFsdWVzPXt7XHJcbiAgICAgICAgICBuYW1lQ29tcGFueTogXCJcIixcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgICAgICAgZGF0ZUFnZ3JlbWVudDogXCJcIixcclxuICAgICAgICAgIG9kOiBcIlwiLFxyXG4gICAgICAgICAgYW1vdW50OiBcIlwiLFxyXG4gICAgICAgICAgdG9rZW46IGNvb2tpZS5nZXQoJ3Rva2VuJyksXHJcbiAgICAgICAgfX1cclxuICAgICAgICBvblN1Ym1pdD1cclxuICAgICAgICB7KHZhbHVlcykgPT4ge3N0ZXBTZWNvbmQodmFsdWVzKX19PlxyXG4gICAgICAgIHsoe2Vycm9ycywgdG91Y2hlZCwgdmFsdWVzfSkgPT4gKFxyXG4gICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgYXM9J3NlbGVjdCdcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBvbkNoYW5nZVNwaGVyZShlKX1cclxuICAgICAgICAgICAgICB2YWx1ZT17c3BoZXJlfVxyXG4gICAgICAgICAgICAgIHZhbGlkYXRlPXtyZXF1aXJlZH1cclxuICAgICAgICAgICAgICBuYW1lPSdzcGhlcmUnXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmb3JtX3NlbGVjdCc+XHJcbiAgICAgICAgICAgICAge2ZpbmFsTGlzdHMubWFwKChmaXosIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIGRhdGEtaW1nPXtgL2ltZy91c2x1Z2kvJHtpbmRleCArIDF9LnN2Z2B9IHZhbHVlPXtpbmRleCArIDF9PntmaXoubmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9GaWVsZD5cclxuICAgICAgICAgICAgPERyb3BGaWxlIHNldEZpbGVzPXtzZXRGaWxlc30vPlxyXG4gICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgPERyb3BGaWxlRG9jIHNldEZpbGVzPXtzZXRGaWxlc30vPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmlyc3RzdGVwX2Jhbm5lcic+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpcnN0c3RlcF9iYW5uZXItLWltZyc+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGFsdD0naW1hZ2UnIGNsYXNzTmFtZT0nc2Vjb25kc3RlcCcgc3JjPScvaW1nL2Zvcm0vc2Vjb25kc3RlcC5wbmcnLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmlyc3RzdGVwX2Jhbm5lci0tYnV0dG9uJz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NpbmdsZWJ0bidcclxuICAgICAgICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2J1dHRvbidcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRm9jdXMoKX1cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9J9CU0LDQu9C10LUnLz5cclxuICAgICAgICAgICAgICAgIDxiPtCh0L3QsNGH0LDQu9CwINGA0LXQt9GD0LvRjNGC0LDRgjxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICDQv9C+0YLQvtC8INC+0L/Qu9Cw0YLQsDwvYj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICA8L0Zvcm1paz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2Vjb25kU3RlcCJdLCJzb3VyY2VSb290IjoiIn0=