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
            name: "nameCompany",
            type: "text",
            validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_8__.required,
            placeholder: "\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 15
          }, _this), errors.nameCompany && touched.nameCompany ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            className: "text-danger",
            children: errors.nameCompany
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 19
          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            className: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 19
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_7__.Field, {
            name: "description",
            type: "text",
            validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_8__.required,
            placeholder: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0441\u043F\u043E\u0440\u0430"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 15
          }, _this), errors.description && touched.description ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            className: "text-danger",
            children: errors.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 19
          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            className: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 19
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_7__.Field, {
            name: "dateAggrement",
            type: "text",
            validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_8__.required,
            component: _Masks_DateMask__WEBPACK_IMPORTED_MODULE_13__.default,
            placeholder: "\u0414\u0430\u0442\u0430 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430 (\u0414\u0414.\u041C\u041C.\u0413\u0413\u0413\u0413)"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 15
          }, _this), errors.dateAggrement && touched.dateAggrement ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            className: "text-danger",
            children: errors.dateAggrement
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 19
          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            className: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 19
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_7__.Field, {
            name: "od",
            type: "number",
            validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_8__.required,
            placeholder: "\u041E\u0414"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 15
          }, _this), errors.od && touched.od ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            className: "text-danger",
            children: errors.od
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 19
          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            className: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 19
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_7__.Field, {
            name: "amount",
            type: "text",
            validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_8__.required,
            component: _Masks_PriceMask__WEBPACK_IMPORTED_MODULE_10__.default,
            placeholder: "\u0421\u0443\u043C\u043C\u0430 \u043A \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0443"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 15
          }, _this), errors.amount && touched.amount ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            className: "text-danger",
            children: errors.amount
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 19
          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            className: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 19
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_dropFile_DropFile__WEBPACK_IMPORTED_MODULE_12__.default, {
            setFiles: setFiles
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_dropFileDoc_dropFileDoc__WEBPACK_IMPORTED_MODULE_14__.default, {
            setFiles: setFiles
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 178,
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
                lineNumber: 181,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 180,
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
                lineNumber: 184,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("b", {
                children: ["\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 190,
                  columnNumber: 37
                }, _this), "\u043F\u043E\u0442\u043E\u043C \u043E\u043F\u043B\u0430\u0442\u0430"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 190,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 183,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 179,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRzZXJ2aWNlL1NlY29uZFN0ZXAuanMiXSwibmFtZXMiOlsiU2Vjb25kU3RlcCIsInNldExvYWRpbmciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwYXRobmFtZSIsInN0ZXAiLCJxdWVyeSIsInR5cGUiLCJsaXN0b2ZzZXJ2aWNlIiwiZml6c2VydmljZSIsImp1cnNlcnZpY2UiLCJsaXN0b2Zjb250aW51ZSIsImZpbmFsTGlzdHMiLCJ1c2VTdGF0ZSIsImlzTWZvIiwic2V0SXNNZm8iLCJzcGhlcmUiLCJzZXRTcGhlcmUiLCJvbkNoYW5nZVNwaGVyZSIsImUiLCJmaW5kIiwieCIsImlkIiwidGFyZ2V0IiwidmFsdWUiLCJuYW1lIiwiaW5jbHVkZXMiLCJjb25zb2xlIiwibG9nIiwiZmlsZXMiLCJzZXRGaWxlcyIsImNvb2tpZSIsInVuZGVmaW5lZCIsInRva2VuIiwiZGVzY3JpcHRpb24iLCJhbW91bnQiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwic3RlcFNlY29uZCIsInZhbHVlcyIsInNwaGVyZVZhbCIsIm9iamVjdCIsInJlcGxhY2VEYXRlIiwidXRtX3NvdXJjZSIsImNsaWNrX2lkIiwiYXhpb3MiLCJwcm9jZXNzIiwicGFyYW1zIiwidGhlbiIsInJlcyIsImRhdGEiLCJzdWNjZXNzIiwiUm91dGVyIiwidXNlRWZmZWN0IiwibmFtZUNvbXBhbnkiLCJkYXRlQWdncmVtZW50Iiwib2QiLCJlcnJvcnMiLCJ0b3VjaGVkIiwicmVxdWlyZWQiLCJEYXRlTWFzayIsIlByaWNlTWFzayIsImhhbmRsZUZvY3VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQWtCO0FBQUE7O0FB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QyxxRUFBVyxFQUFqQjtBQUFBLGVBSlgsdUlBS1EsZ0NBTFI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQU9FO0FBQUEsNklBQW9CO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXBERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQ7QUFBQTtBQVhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF3RkQsQ0ExTEQ7O0dBQU05RCxVO1VBQ1dHLGtEOzs7S0FEWEgsVTtBQTRMTiwrREFBZUEsVUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kbHlhLWZpemljaGVza2l4LWxpYy4yNDNmODI2NDc2MTNmZjQwNTFjMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHtmaXpzZXJ2aWNlLCBqdXJzZXJ2aWNlfSBmcm9tIFwiLi4vLi4vZGVmYXVsdHMvZml6c2VydmljZVwiXHJcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IFJvdXRlciwge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuaW1wb3J0IHtGb3JtaWssIEZvcm0sIEZpZWxkfSBmcm9tICdmb3JtaWsnO1xyXG5pbXBvcnQge3JlcXVpcmVkfSBmcm9tIFwiLi4vLi4vZGVmYXVsdHMvdmFsaWRhdGlvbnNcIlxyXG5pbXBvcnQgRHJvcHpvbmUgZnJvbSBcInJlYWN0LWRyb3B6b25lXCI7XHJcbmltcG9ydCBQcmljZU1hc2sgZnJvbSBcIi4uL01hc2tzL1ByaWNlTWFza1wiXHJcbmltcG9ydCB7aGFuZGxlRm9jdXMsIHJlcGxhY2VEYXRlLCB0aG91c2FuZFNlcGFyYXRvcn0gZnJvbSBcIi4uLy4uL2RlZmF1bHRzL2V4dHJhRnVuY3Rpb25cIlxyXG5pbXBvcnQgRHJvcEZpbGUgZnJvbSBcIi4uL2Ryb3BGaWxlL0Ryb3BGaWxlXCJcclxuaW1wb3J0IERhdGVNYXNrIGZyb20gXCIuLi9NYXNrcy9EYXRlTWFza1wiXHJcbmltcG9ydCBEcm9wRmlsZURvYyBmcm9tIFwiLi4vZHJvcEZpbGVEb2MvZHJvcEZpbGVEb2NcIlxyXG5cclxuY29uc3QgU2Vjb25kU3RlcCA9ICh7c2V0TG9hZGluZ30pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHBhdGhuYW1lID0gcm91dGVyLnBhdGhuYW1lXHJcbiAgLy8gY29uc3Qge2lkfSA9IHJvdXRlci5xdWVyeVxyXG4gIGNvbnN0IHtzdGVwfSA9IHJvdXRlci5xdWVyeTtcclxuICBjb25zdCB7dHlwZX0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3QgbGlzdG9mc2VydmljZSA9IHJvdXRlci5wYXRobmFtZSA9PT0gJy9kbHlhLWZpemljaGVza2l4LWxpYydcclxuICAgID8gZml6c2VydmljZVxyXG4gICAgOiBqdXJzZXJ2aWNlXHJcbiAgY29uc3QgbGlzdG9mY29udGludWUgPSB0eXBlID09PSAn0KTQuNC3INC70LjRhtC+J1xyXG4gICAgPyBmaXpzZXJ2aWNlXHJcbiAgICA6IGp1cnNlcnZpY2VcclxuICBjb25zdCBmaW5hbExpc3RzID0gcGF0aG5hbWUgPT09ICcvY2FiaW5ldC9jb250aW51ZSdcclxuICAgID8gbGlzdG9mY29udGludWVcclxuICAgIDogbGlzdG9mc2VydmljZVxyXG4gIGNvbnN0IFtpc01mbyxcclxuICAgIHNldElzTWZvXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtzcGhlcmUsXHJcbiAgICBzZXRTcGhlcmVdID0gdXNlU3RhdGUoJzEnKVxyXG4gIGNvbnN0IG9uQ2hhbmdlU3BoZXJlID0gZSA9PiB7XHJcbiAgICBpZiAoZmluYWxMaXN0cy5maW5kKHggPT4geC5pZCA9PT0gZS50YXJnZXQudmFsdWUpLm5hbWUuaW5jbHVkZXMoJzU2NDU0NjQ2NTQ2NTQ2NTQ2NScpKSB7XHJcbiAgICAgIHNldElzTWZvKHRydWUpXHJcbiAgICAgIGNvbnNvbGUubG9nKHRydWUpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRJc01mbyhmYWxzZSlcclxuICAgIH1cclxuXHJcbiAgICBzZXRTcGhlcmUoZS50YXJnZXQudmFsdWUpXHJcbiAgfVxyXG4gIGNvbnN0IFtmaWxlcyxcclxuICAgIHNldEZpbGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZm9ybURhdGEsXHJcbiAgICBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBpZDogY29va2llLmdldCgnbGVhZF9pZCcpID09PSB1bmRlZmluZWRcclxuICAgICAgPyByb3V0ZXIucXVlcnkuaWRcclxuICAgICAgOiBjb29raWUuZ2V0KCdsZWFkX2lkJyksXHJcbiAgICB0b2tlbjogY29va2llLmdldCgndG9rZW4nKSxcclxuICAgIGRlc2NyaXB0aW9uOiAnJyxcclxuICAgIHNwaGVyZTogJzEnLFxyXG4gICAgYW1vdW50OiAnJ1xyXG4gIH0pXHJcblxyXG4gIGNvbnN0IHN0ZXBTZWNvbmQgPSAodmFsdWVzKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZXMpXHJcbiAgICAvLyBjb25zb2xlLmxvZyhyZXBsYWNlRGF0ZSh2YWx1ZXMuYW1vdW50KSlcclxuICAgIGNvbnN0IHNwaGVyZVZhbCA9IGZpbmFsTGlzdHNcclxuICAgICAgLmZpbmQoeCA9PiB4LmlkID09PSBzcGhlcmUpXHJcbiAgICAgIC5uYW1lXHJcbiAgICBjb25zdCBvYmplY3QgPSB7XHJcbiAgICAgIGlkOiB2YWx1ZXMuaWQsXHJcbiAgICAgIHRva2VuOiB2YWx1ZXMudG9rZW4sXHJcbiAgICAgIGRlc2NyaXB0aW9uOiB2YWx1ZXMuZGVzY3JpcHRpb24sXHJcbiAgICAgIHNwaGVyZTogc3BoZXJlVmFsLFxyXG4gICAgICBhbW91bnQ6IHJlcGxhY2VEYXRlKHZhbHVlcy5hbW91bnQpXHJcbiAgICB9XHJcbiAgICBpZiAoY29va2llLmdldCgndXRtX3NvdXJjZScpICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgb2JqZWN0LnV0bV9zb3VyY2UgPSBjb29raWUuZ2V0KCd1dG1fc291cmNlJykgKyBcIl8yXCJcclxuICAgICAgb2JqZWN0LmNsaWNrX2lkID0gY29va2llLmdldCgnY2xpY2tfaWQnKVxyXG4gICAgICAvLyBvYmplY3Qud2ViSUQgPSBjb29raWUuZ2V0KCd3ZWJfaWQnKVxyXG4gICAgfVxyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vc3RlcFR3b2AsIHtwYXJhbXM6IG9iamVjdH0pXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgIGlmIChwYXRobmFtZSA9PT0gJy9qdXJzZXJ2aWNlJykge1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2p1cnNlcnZpY2U/c3RlcD0zJylcclxuICAgICAgICAgICAgY29va2llLnNldCgnc3RlcGp1cicsIDMpXHJcbiAgICAgICAgICAgIGNvb2tpZS5zZXQoJ2Ftb3VudCcsIHJlcGxhY2VEYXRlKHZhbHVlcy5hbW91bnQpKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHBhdGhuYW1lID09PSAnL2RseWEtZml6aWNoZXNraXgtbGljJykge1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2RseWEtZml6aWNoZXNraXgtbGljP3N0ZXA9MycpXHJcbiAgICAgICAgICAgIGNvb2tpZS5zZXQoJ3N0ZXAnLCAzKVxyXG4gICAgICAgICAgICBjb29raWUuc2V0KCdhbW91bnQnLCByZXBsYWNlRGF0ZSh2YWx1ZXMuYW1vdW50KSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChwYXRobmFtZSA9PT0gJy9jYWJpbmV0L2NvbnRpbnVlJykge1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvY2FiaW5ldC9jb250aW51ZScsXHJcbiAgICAgICAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgICAgICAgIHN0ZXA6IDMsXHJcbiAgICAgICAgICAgICAgICBpZDogcm91dGVyLnF1ZXJ5LmlkLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogdHlwZSxcclxuICAgICAgICAgICAgICAgIGFtb3VudDogcmVwbGFjZURhdGUodmFsdWVzLmFtb3VudClcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcmVzLmRhdGEuc3VjY2Vzcykge31cclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG5cclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtX3JlZ2lzdGVyJz5cclxuICAgICAgPEZvcm1pa1xyXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcclxuICAgICAgICAgIG5hbWVDb21wYW55OiBcIlwiLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICAgICAgICBkYXRlQWdncmVtZW50OiBcIlwiLFxyXG4gICAgICAgICAgb2Q6IFwiXCIsXHJcbiAgICAgICAgICBhbW91bnQ6IFwiXCIsXHJcbiAgICAgICAgICB0b2tlbjogY29va2llLmdldCgndG9rZW4nKSxcclxuICAgICAgICB9fVxyXG4gICAgICAgIG9uU3VibWl0PVxyXG4gICAgICAgIHsodmFsdWVzKSA9PiB7c3RlcFNlY29uZCh2YWx1ZXMpfX0+XHJcbiAgICAgICAgeyh7ZXJyb3JzLCB0b3VjaGVkLCB2YWx1ZXN9KSA9PiAoXHJcbiAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lQ29tcGFueVwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZT17cmVxdWlyZWR9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCd0LDQuNC80LXQvdC+0LLQsNC90LjQtSDQutC+0LzQv9Cw0L3QuNC4XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPC9GaWVsZD5cclxuICAgICAgICAgICAgICB7KGVycm9ycy5uYW1lQ29tcGFueSAmJiB0b3VjaGVkLm5hbWVDb21wYW55KVxyXG4gICAgICAgICAgICAgICAgPyA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz57ZXJyb3JzLm5hbWVDb21wYW55fTwvcD5cclxuICAgICAgICAgICAgICAgIDogPHAgY2xhc3NOYW1lPScnPjwvcD59XHJcbiAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU9e3JlcXVpcmVkfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQntC/0LjRgdCw0L3QuNC1INGB0L/QvtGA0LBcIj5cclxuICAgICAgICAgICAgICA8L0ZpZWxkPlxyXG4gICAgICAgICAgICAgIHsoZXJyb3JzLmRlc2NyaXB0aW9uICYmIHRvdWNoZWQuZGVzY3JpcHRpb24pXHJcbiAgICAgICAgICAgICAgICA/IDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPntlcnJvcnMuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgOiA8cCBjbGFzc05hbWU9Jyc+PC9wPn1cclxuICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgIG5hbWU9J2RhdGVBZ2dyZW1lbnQnXHJcbiAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU9e3JlcXVpcmVkfVxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtEYXRlTWFza31cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSfQlNCw0YLQsCDQtNC+0LPQvtCy0L7RgNCwICjQlNCULtCc0Jwu0JPQk9CT0JMpJz5cclxuICAgICAgICAgICAgICA8L0ZpZWxkPlxyXG4gICAgICAgICAgICAgIHsoZXJyb3JzLmRhdGVBZ2dyZW1lbnQgJiYgdG91Y2hlZC5kYXRlQWdncmVtZW50KVxyXG4gICAgICAgICAgICAgICAgPyA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz57ZXJyb3JzLmRhdGVBZ2dyZW1lbnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgOiA8cCBjbGFzc05hbWU9Jyc+PC9wPn1cclxuICAgICAgICAgICAgICA8RmllbGRcclxuXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwib2RcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZT17cmVxdWlyZWR9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCe0JRcIj48L0ZpZWxkPlxyXG4gICAgICAgICAgICAgIHsoZXJyb3JzLm9kICYmIHRvdWNoZWQub2QpXHJcbiAgICAgICAgICAgICAgICA/IDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPntlcnJvcnMub2R9PC9wPlxyXG4gICAgICAgICAgICAgICAgOiA8cCBjbGFzc05hbWU9Jyc+PC9wPn1cclxuICAgICAgICAgICAgICA8RmllbGRcclxuXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdhbW91bnQnXHJcbiAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU9e3JlcXVpcmVkfVxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtQcmljZU1hc2t9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCh0YPQvNC80LAg0Log0LLQvtC30LLRgNCw0YLRg1wiPjwvRmllbGQ+XHJcbiAgICAgICAgICAgICAgeyhlcnJvcnMuYW1vdW50ICYmIHRvdWNoZWQuYW1vdW50KVxyXG4gICAgICAgICAgICAgICAgPyA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz57ZXJyb3JzLmFtb3VudH08L3A+XHJcbiAgICAgICAgICAgICAgICA6IDxwIGNsYXNzTmFtZT0nJz48L3A+fVxyXG4gICAgICAgICAgICA8RHJvcEZpbGUgc2V0RmlsZXM9e3NldEZpbGVzfS8+XHJcbiAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICA8RHJvcEZpbGVEb2Mgc2V0RmlsZXM9e3NldEZpbGVzfS8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaXJzdHN0ZXBfYmFubmVyJz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmlyc3RzdGVwX2Jhbm5lci0taW1nJz5cclxuICAgICAgICAgICAgICAgIDxpbWcgYWx0PSdpbWFnZScgY2xhc3NOYW1lPSdzZWNvbmRzdGVwJyBzcmM9Jy9pbWcvZm9ybS9zZWNvbmRzdGVwLnBuZycvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaXJzdHN0ZXBfYmFubmVyLS1idXR0b24nPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2luZ2xlYnRuJ1xyXG4gICAgICAgICAgICAgICAgICB0eXBlPSdzdWJtaXQnXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYnV0dG9uJ1xyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVGb2N1cygpfVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT0n0JTQsNC70LXQtScvPlxyXG4gICAgICAgICAgICAgICAgPGI+0KHQvdCw0YfQsNC70LAg0YDQtdC30YPQu9GM0YLQsNGCPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgINC/0L7RgtC+0Lwg0L7Qv9C70LDRgtCwPC9iPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgIDwvRm9ybWlrPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWNvbmRTdGVwIl0sInNvdXJjZVJvb3QiOiIifQ==