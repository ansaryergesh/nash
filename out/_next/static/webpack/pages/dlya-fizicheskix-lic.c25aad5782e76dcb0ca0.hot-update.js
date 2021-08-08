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
            type: "text",
            name: "fio",
            className: "capitalize" // validate={acceptCirrilic}
            ,
            placeholder: "\u0424\u0418\u041E",
            autocomplete: "off"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 14
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_7__.Field, {
            name: "nameCompany",
            type: "text",
            validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_8__.required,
            placeholder: "\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 15
          }, _this), errors.nameCompany && touched.nameCompany ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            className: "text-danger",
            children: errors.nameCompany
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 19
          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            className: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 19
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_7__.Field, {
            name: "description",
            type: "text",
            validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_8__.required,
            placeholder: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0441\u043F\u043E\u0440\u0430"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 15
          }, _this), errors.description && touched.description ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            className: "text-danger",
            children: errors.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 19
          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            className: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 19
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_7__.Field, {
            name: "dateAggrement",
            type: "text",
            validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_8__.required,
            component: _Masks_DateMask__WEBPACK_IMPORTED_MODULE_13__.default,
            placeholder: "\u0414\u0430\u0442\u0430 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430 (\u0414\u0414.\u041C\u041C.\u0413\u0413\u0413\u0413)"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 15
          }, _this), errors.dateAggrement && touched.dateAggrement ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            className: "text-danger",
            children: errors.dateAggrement
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 19
          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            className: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 19
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_7__.Field, {
            name: "od",
            type: "number",
            validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_8__.required,
            placeholder: "\u041E\u0414"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 15
          }, _this), errors.od && touched.od ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            className: "text-danger",
            children: errors.od
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 19
          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            className: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 19
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_7__.Field, {
            name: "amount",
            type: "text",
            validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_8__.required,
            component: _Masks_PriceMask__WEBPACK_IMPORTED_MODULE_10__.default,
            placeholder: "\u0421\u0443\u043C\u043C\u0430 \u043A \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0443"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 15
          }, _this), errors.amount && touched.amount ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            className: "text-danger",
            children: errors.amount
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 19
          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            className: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 19
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_dropFile_DropFile__WEBPACK_IMPORTED_MODULE_12__.default, {
            setFiles: setFiles
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_dropFileDoc_dropFileDoc__WEBPACK_IMPORTED_MODULE_14__.default, {
            setFiles: setFiles
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 180,
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
                lineNumber: 183,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 182,
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
                lineNumber: 186,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("b", {
                children: ["\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 192,
                  columnNumber: 37
                }, _this), "\u043F\u043E\u0442\u043E\u043C \u043E\u043F\u043B\u0430\u0442\u0430"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 192,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 185,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 181,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRzZXJ2aWNlL1NlY29uZFN0ZXAuanMiXSwibmFtZXMiOlsiU2Vjb25kU3RlcCIsInNldExvYWRpbmciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwYXRobmFtZSIsInN0ZXAiLCJxdWVyeSIsInR5cGUiLCJsaXN0b2ZzZXJ2aWNlIiwiZml6c2VydmljZSIsImp1cnNlcnZpY2UiLCJsaXN0b2Zjb250aW51ZSIsImZpbmFsTGlzdHMiLCJ1c2VTdGF0ZSIsImlzTWZvIiwic2V0SXNNZm8iLCJzcGhlcmUiLCJzZXRTcGhlcmUiLCJvbkNoYW5nZVNwaGVyZSIsImUiLCJmaW5kIiwieCIsImlkIiwidGFyZ2V0IiwidmFsdWUiLCJuYW1lIiwiaW5jbHVkZXMiLCJjb25zb2xlIiwibG9nIiwiZmlsZXMiLCJzZXRGaWxlcyIsImNvb2tpZSIsInVuZGVmaW5lZCIsInRva2VuIiwiZGVzY3JpcHRpb24iLCJhbW91bnQiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwic3RlcFNlY29uZCIsInZhbHVlcyIsInNwaGVyZVZhbCIsIm9iamVjdCIsInJlcGxhY2VEYXRlIiwidXRtX3NvdXJjZSIsImNsaWNrX2lkIiwiYXhpb3MiLCJwcm9jZXNzIiwicGFyYW1zIiwidGhlbiIsInJlcyIsImRhdGEiLCJzdWNjZXNzIiwiUm91dGVyIiwidXNlRWZmZWN0IiwibmFtZUNvbXBhbnkiLCJkYXRlQWdncmVtZW50Iiwib2QiLCJlcnJvcnMiLCJ0b3VjaGVkIiwicmVxdWlyZWQiLCJEYXRlTWFzayIsIlByaWNlTWFzayIsImhhbmRsZUZvY3VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQWtCO0FBQUE7O0FB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QTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBSUU7QUFBSyx1QkFBUyxFQUFDLDBCQUFmO0FBQUEsc0NBQ0U7QUFDRSx5QkFBUyxFQUFDLFdBRFo7QUFFRSxvQkFBSSxFQUFDO0FBRlAseUpBR1ksUUFIWix5SUFJVztBQUFBLHVCQUFNZ0MscUVBQVcsRUFBakI7QUFBQSxlQUpYLHVJQUtRLGdDQUxSO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFPRTtBQUFBLDZJQUFvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkF0REY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUREO0FBQUE7QUFYSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMEZELENBNUxEOztHQUFNOUQsVTtVQUNXRyxrRDs7O0tBRFhILFU7QUE4TE4sK0RBQWVBLFVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGx5YS1maXppY2hlc2tpeC1saWMuYzI1YWFkNTc4MmU3NmRjYjBjYTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7Zml6c2VydmljZSwganVyc2VydmljZX0gZnJvbSBcIi4uLy4uL2RlZmF1bHRzL2ZpenNlcnZpY2VcIlxyXG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSdcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCBSb3V0ZXIsIHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCB7Rm9ybWlrLCBGb3JtLCBGaWVsZH0gZnJvbSAnZm9ybWlrJztcclxuaW1wb3J0IHtyZXF1aXJlZH0gZnJvbSBcIi4uLy4uL2RlZmF1bHRzL3ZhbGlkYXRpb25zXCJcclxuaW1wb3J0IERyb3B6b25lIGZyb20gXCJyZWFjdC1kcm9wem9uZVwiO1xyXG5pbXBvcnQgUHJpY2VNYXNrIGZyb20gXCIuLi9NYXNrcy9QcmljZU1hc2tcIlxyXG5pbXBvcnQge2hhbmRsZUZvY3VzLCByZXBsYWNlRGF0ZSwgdGhvdXNhbmRTZXBhcmF0b3J9IGZyb20gXCIuLi8uLi9kZWZhdWx0cy9leHRyYUZ1bmN0aW9uXCJcclxuaW1wb3J0IERyb3BGaWxlIGZyb20gXCIuLi9kcm9wRmlsZS9Ecm9wRmlsZVwiXHJcbmltcG9ydCBEYXRlTWFzayBmcm9tIFwiLi4vTWFza3MvRGF0ZU1hc2tcIlxyXG5pbXBvcnQgRHJvcEZpbGVEb2MgZnJvbSBcIi4uL2Ryb3BGaWxlRG9jL2Ryb3BGaWxlRG9jXCJcclxuXHJcbmNvbnN0IFNlY29uZFN0ZXAgPSAoe3NldExvYWRpbmd9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBwYXRobmFtZSA9IHJvdXRlci5wYXRobmFtZVxyXG4gIC8vIGNvbnN0IHtpZH0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCB7c3RlcH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3Qge3R5cGV9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IGxpc3RvZnNlcnZpY2UgPSByb3V0ZXIucGF0aG5hbWUgPT09ICcvZGx5YS1maXppY2hlc2tpeC1saWMnXHJcbiAgICA/IGZpenNlcnZpY2VcclxuICAgIDoganVyc2VydmljZVxyXG4gIGNvbnN0IGxpc3RvZmNvbnRpbnVlID0gdHlwZSA9PT0gJ9Ck0LjQtyDQu9C40YbQvidcclxuICAgID8gZml6c2VydmljZVxyXG4gICAgOiBqdXJzZXJ2aWNlXHJcbiAgY29uc3QgZmluYWxMaXN0cyA9IHBhdGhuYW1lID09PSAnL2NhYmluZXQvY29udGludWUnXHJcbiAgICA/IGxpc3RvZmNvbnRpbnVlXHJcbiAgICA6IGxpc3RvZnNlcnZpY2VcclxuICBjb25zdCBbaXNNZm8sXHJcbiAgICBzZXRJc01mb10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbc3BoZXJlLFxyXG4gICAgc2V0U3BoZXJlXSA9IHVzZVN0YXRlKCcxJylcclxuICBjb25zdCBvbkNoYW5nZVNwaGVyZSA9IGUgPT4ge1xyXG4gICAgaWYgKGZpbmFsTGlzdHMuZmluZCh4ID0+IHguaWQgPT09IGUudGFyZ2V0LnZhbHVlKS5uYW1lLmluY2x1ZGVzKCc1NjQ1NDY0NjU0NjU0NjU0NjUnKSkge1xyXG4gICAgICBzZXRJc01mbyh0cnVlKVxyXG4gICAgICBjb25zb2xlLmxvZyh0cnVlKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0SXNNZm8oZmFsc2UpXHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3BoZXJlKGUudGFyZ2V0LnZhbHVlKVxyXG4gIH1cclxuICBjb25zdCBbZmlsZXMsXHJcbiAgICBzZXRGaWxlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2Zvcm1EYXRhLFxyXG4gICAgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgaWQ6IGNvb2tpZS5nZXQoJ2xlYWRfaWQnKSA9PT0gdW5kZWZpbmVkXHJcbiAgICAgID8gcm91dGVyLnF1ZXJ5LmlkXHJcbiAgICAgIDogY29va2llLmdldCgnbGVhZF9pZCcpLFxyXG4gICAgdG9rZW46IGNvb2tpZS5nZXQoJ3Rva2VuJyksXHJcbiAgICBkZXNjcmlwdGlvbjogJycsXHJcbiAgICBzcGhlcmU6ICcxJyxcclxuICAgIGFtb3VudDogJydcclxuICB9KVxyXG5cclxuICBjb25zdCBzdGVwU2Vjb25kID0gKHZhbHVlcykgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgY29uc29sZS5sb2codmFsdWVzKVxyXG4gICAgLy8gY29uc29sZS5sb2cocmVwbGFjZURhdGUodmFsdWVzLmFtb3VudCkpXHJcbiAgICBjb25zdCBzcGhlcmVWYWwgPSBmaW5hbExpc3RzXHJcbiAgICAgIC5maW5kKHggPT4geC5pZCA9PT0gc3BoZXJlKVxyXG4gICAgICAubmFtZVxyXG4gICAgY29uc3Qgb2JqZWN0ID0ge1xyXG4gICAgICBpZDogdmFsdWVzLmlkLFxyXG4gICAgICB0b2tlbjogdmFsdWVzLnRva2VuLFxyXG4gICAgICBkZXNjcmlwdGlvbjogdmFsdWVzLmRlc2NyaXB0aW9uLFxyXG4gICAgICBzcGhlcmU6IHNwaGVyZVZhbCxcclxuICAgICAgYW1vdW50OiByZXBsYWNlRGF0ZSh2YWx1ZXMuYW1vdW50KVxyXG4gICAgfVxyXG4gICAgaWYgKGNvb2tpZS5nZXQoJ3V0bV9zb3VyY2UnKSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIG9iamVjdC51dG1fc291cmNlID0gY29va2llLmdldCgndXRtX3NvdXJjZScpICsgXCJfMlwiXHJcbiAgICAgIG9iamVjdC5jbGlja19pZCA9IGNvb2tpZS5nZXQoJ2NsaWNrX2lkJylcclxuICAgICAgLy8gb2JqZWN0LndlYklEID0gY29va2llLmdldCgnd2ViX2lkJylcclxuICAgIH1cclxuICAgIGF4aW9zXHJcbiAgICAgIC5nZXQoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L3N0ZXBUd29gLCB7cGFyYW1zOiBvYmplY3R9KVxyXG4gICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgIGlmIChyZXMuZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICBpZiAocGF0aG5hbWUgPT09ICcvanVyc2VydmljZScpIHtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goJy9qdXJzZXJ2aWNlP3N0ZXA9MycpXHJcbiAgICAgICAgICAgIGNvb2tpZS5zZXQoJ3N0ZXBqdXInLCAzKVxyXG4gICAgICAgICAgICBjb29raWUuc2V0KCdhbW91bnQnLCByZXBsYWNlRGF0ZSh2YWx1ZXMuYW1vdW50KSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChwYXRobmFtZSA9PT0gJy9kbHlhLWZpemljaGVza2l4LWxpYycpIHtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goJy9kbHlhLWZpemljaGVza2l4LWxpYz9zdGVwPTMnKVxyXG4gICAgICAgICAgICBjb29raWUuc2V0KCdzdGVwJywgMylcclxuICAgICAgICAgICAgY29va2llLnNldCgnYW1vdW50JywgcmVwbGFjZURhdGUodmFsdWVzLmFtb3VudCkpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAocGF0aG5hbWUgPT09ICcvY2FiaW5ldC9jb250aW51ZScpIHtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICAgIHBhdGhuYW1lOiAnL2NhYmluZXQvY29udGludWUnLFxyXG4gICAgICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAgICAgICBzdGVwOiAzLFxyXG4gICAgICAgICAgICAgICAgaWQ6IHJvdXRlci5xdWVyeS5pZCxcclxuICAgICAgICAgICAgICAgIHR5cGU6IHR5cGUsXHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IHJlcGxhY2VEYXRlKHZhbHVlcy5hbW91bnQpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXJlcy5kYXRhLnN1Y2Nlc3MpIHt9XHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuXHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybV9yZWdpc3Rlcic+XHJcbiAgICAgIDxGb3JtaWtcclxuICAgICAgICBpbml0aWFsVmFsdWVzPXt7XHJcbiAgICAgICAgICBuYW1lQ29tcGFueTogXCJcIixcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgICAgICAgZGF0ZUFnZ3JlbWVudDogXCJcIixcclxuICAgICAgICAgIG9kOiBcIlwiLFxyXG4gICAgICAgICAgYW1vdW50OiBcIlwiLFxyXG4gICAgICAgICAgdG9rZW46IGNvb2tpZS5nZXQoJ3Rva2VuJyksXHJcbiAgICAgICAgfX1cclxuICAgICAgICBvblN1Ym1pdD1cclxuICAgICAgICB7KHZhbHVlcykgPT4ge3N0ZXBTZWNvbmQodmFsdWVzKX19PlxyXG4gICAgICAgIHsoe2Vycm9ycywgdG91Y2hlZCwgdmFsdWVzfSkgPT4gKFxyXG4gICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdmaW8nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2NhcGl0YWxpemUnXHJcbiAgICAgICAgICAgICAgICAvLyB2YWxpZGF0ZT17YWNjZXB0Q2lycmlsaWN9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0n0KTQmNCeJ1xyXG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPSdvZmYnLz5cclxuICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lQ29tcGFueVwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZT17cmVxdWlyZWR9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCd0LDQuNC80LXQvdC+0LLQsNC90LjQtSDQutC+0LzQv9Cw0L3QuNC4XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIHsoZXJyb3JzLm5hbWVDb21wYW55ICYmIHRvdWNoZWQubmFtZUNvbXBhbnkpXHJcbiAgICAgICAgICAgICAgICA/IDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPntlcnJvcnMubmFtZUNvbXBhbnl9PC9wPlxyXG4gICAgICAgICAgICAgICAgOiA8cCBjbGFzc05hbWU9Jyc+PC9wPn1cclxuICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZT17cmVxdWlyZWR9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCe0L/QuNGB0LDQvdC40LUg0YHQv9C+0YDQsFwiIC8+XHJcbiAgICAgICAgICAgICAgeyhlcnJvcnMuZGVzY3JpcHRpb24gJiYgdG91Y2hlZC5kZXNjcmlwdGlvbilcclxuICAgICAgICAgICAgICAgID8gPHAgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+e2Vycm9ycy5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICA6IDxwIGNsYXNzTmFtZT0nJz48L3A+fVxyXG4gICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgbmFtZT0nZGF0ZUFnZ3JlbWVudCdcclxuICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZT17cmVxdWlyZWR9XHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0RhdGVNYXNrfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J9CU0LDRgtCwINC00L7Qs9C+0LLQvtGA0LAgKNCU0JQu0JzQnC7Qk9CT0JPQkyknIC8+ICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHsoZXJyb3JzLmRhdGVBZ2dyZW1lbnQgJiYgdG91Y2hlZC5kYXRlQWdncmVtZW50KVxyXG4gICAgICAgICAgICAgICAgPyA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz57ZXJyb3JzLmRhdGVBZ2dyZW1lbnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgOiA8cCBjbGFzc05hbWU9Jyc+PC9wPn1cclxuICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJvZFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlPXtyZXF1aXJlZH1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0J7QlFwiLz5cclxuICAgICAgICAgICAgICB7KGVycm9ycy5vZCAmJiB0b3VjaGVkLm9kKVxyXG4gICAgICAgICAgICAgICAgPyA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz57ZXJyb3JzLm9kfTwvcD5cclxuICAgICAgICAgICAgICAgIDogPHAgY2xhc3NOYW1lPScnPjwvcD59XHJcbiAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdhbW91bnQnXHJcbiAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU9e3JlcXVpcmVkfVxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtQcmljZU1hc2t9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCh0YPQvNC80LAg0Log0LLQvtC30LLRgNCw0YLRg1wiLz5cclxuICAgICAgICAgICAgICB7KGVycm9ycy5hbW91bnQgJiYgdG91Y2hlZC5hbW91bnQpXHJcbiAgICAgICAgICAgICAgICA/IDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPntlcnJvcnMuYW1vdW50fTwvcD5cclxuICAgICAgICAgICAgICAgIDogPHAgY2xhc3NOYW1lPScnPjwvcD59XHJcbiAgICAgICAgICAgIDxEcm9wRmlsZSBzZXRGaWxlcz17c2V0RmlsZXN9Lz5cclxuICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgIDxEcm9wRmlsZURvYyBzZXRGaWxlcz17c2V0RmlsZXN9Lz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpcnN0c3RlcF9iYW5uZXInPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaXJzdHN0ZXBfYmFubmVyLS1pbWcnPlxyXG4gICAgICAgICAgICAgICAgPGltZyBhbHQ9J2ltYWdlJyBjbGFzc05hbWU9J3NlY29uZHN0ZXAnIHNyYz0nL2ltZy9mb3JtL3NlY29uZHN0ZXAucG5nJy8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpcnN0c3RlcF9iYW5uZXItLWJ1dHRvbic+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzaW5nbGVidG4nXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdidXR0b24nXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUZvY3VzKCl9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPSfQlNCw0LvQtdC1Jy8+XHJcbiAgICAgICAgICAgICAgICA8Yj7QodC90LDRh9Cw0LvQsCDRgNC10LfRg9C70YzRgtCw0YI8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAg0L/QvtGC0L7QvCDQvtC/0LvQsNGC0LA8L2I+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgPC9Gb3JtaWs+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlY29uZFN0ZXAiXSwic291cmNlUm9vdCI6IiJ9