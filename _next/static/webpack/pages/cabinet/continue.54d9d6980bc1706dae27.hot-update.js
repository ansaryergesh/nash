self["webpackHotUpdate_N_E"]("pages/cabinet/continue",{

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
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "E:\\job\\nashcompany\\components\\getservice\\SecondStep.js",
    _this = undefined,
    _s = $RefreshSig$();













var SecondStep = function SecondStep(_ref) {
  _s();

  var setLoading = _ref.setLoading;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
  var pathname = router.pathname;
  var id = router.query.id;
  var step = router.query.step;
  var type = router.query.type;
  var listofservice = router.pathname === '/dlya-fizicheskix-lic' ? _defaults_fizservice__WEBPACK_IMPORTED_MODULE_3__.fizservice : _defaults_fizservice__WEBPACK_IMPORTED_MODULE_3__.jurservice;
  var listofcontinue = type === 'Физ лицо' ? _defaults_fizservice__WEBPACK_IMPORTED_MODULE_3__.fizservice : _defaults_fizservice__WEBPACK_IMPORTED_MODULE_3__.jurservice;
  var finalLists = pathname === '/cabinet/continue' ? listofcontinue : listofservice;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      files = _useState[0],
      setFiles = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    id: js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get('lead_id') || id,
    token: js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get('token'),
    description: '',
    sphere: '1',
    amount: ''
  }),
      formData = _useState2[0],
      setFormData = _useState2[1];

  var stepSecond = function stepSecond(values) {
    setLoading(true); // console.log(replaceDate(values.amount))

    var sphereVal = finalLists.find(function (x) {
      return x.id === values.sphere;
    }).name;
    var object = {
      id: values.id,
      token: values.token,
      description: values.description,
      sphere: sphereVal,
      amount: (0,_defaults_extraFunction__WEBPACK_IMPORTED_MODULE_11__.replaceDate)(values.amount)
    };

    if (js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get('utm_source') !== undefined) {
      object.utm_source = js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get('utm_source');
      object.click_id = js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get('click_id'); // object.webID = cookie.get('web_id')
    }

    axios__WEBPACK_IMPORTED_MODULE_5___default().get("".concat("https://crediter.kz/api", "/stepTwo"), {
      params: object
    }).then(function (res) {
      setLoading(false); // console.log(res)

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
              id: id,
              type: type,
              amount: (0,_defaults_extraFunction__WEBPACK_IMPORTED_MODULE_11__.replaceDate)(values.amount)
            }
          });
        }
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
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "form_register",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_7__.Formik, {
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
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_7__.Form, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_7__.Field, {
            as: "select",
            validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_8__.required,
            name: "sphere",
            className: "form_select",
            children: listofservice.map(function (fiz, index) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
                "data-img": "/img/uslugi/".concat(index + 1, ".svg"),
                value: index + 1,
                children: fiz.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 17
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 13
          }, _this), errors.sphere && touched.sphere ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            className: "text-danger",
            children: errors.sphere
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 17
          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            className: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 17
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_7__.Field, {
            as: "textarea",
            name: "description",
            validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_8__.required,
            placeholder: "\u041E\u043F\u0438\u0448\u0438\u0442\u0435 \u0432\u0430\u0448\u0443 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044E"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 13
          }, _this), errors.description && touched.description ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            className: "text-danger",
            children: errors.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 17
          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            className: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 17
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_7__.Field, {
            name: "amount",
            type: "text",
            validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_8__.required,
            component: _Masks_PriceMask__WEBPACK_IMPORTED_MODULE_10__.default,
            placeholder: "\u0421\u0443\u043C\u043C\u0430 \u0438\u0441\u043A\u0430"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 13
          }, _this), errors.amount && touched.amount ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            className: "text-danger",
            children: errors.amount
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 17
          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            className: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 17
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_dropFile_DropFile__WEBPACK_IMPORTED_MODULE_12__.default, {
            setFiles: setFiles
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
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
                lineNumber: 129,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "firststep_banner--button",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", (_jsxDEV2 = {
                className: "singlebtn",
                type: "submit"
              }, (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_jsxDEV2, "className", "button"), (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_jsxDEV2, "onClick", function onClick() {
                return (0,_defaults_extraFunction__WEBPACK_IMPORTED_MODULE_11__.handleFocus)();
              }), (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_jsxDEV2, "value", "\u0414\u0430\u043B\u0435\u0435"), _jsxDEV2), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("b", {
                children: ["\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 138,
                  columnNumber: 39
                }, _this), "\u043F\u043E\u0442\u043E\u043C \u043E\u043F\u043B\u0430\u0442\u0430"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 138,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }, _this);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 5
  }, _this);
};

_s(SecondStep, "psJFjQf0RipL4jrnC6oT8XcBfIY=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRzZXJ2aWNlL1NlY29uZFN0ZXAuanMiXSwibmFtZXMiOlsiU2Vjb25kU3RlcCIsInNldExvYWRpbmciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwYXRobmFtZSIsImlkIiwicXVlcnkiLCJzdGVwIiwidHlwZSIsImxpc3RvZnNlcnZpY2UiLCJmaXpzZXJ2aWNlIiwianVyc2VydmljZSIsImxpc3RvZmNvbnRpbnVlIiwiZmluYWxMaXN0cyIsInVzZVN0YXRlIiwiZmlsZXMiLCJzZXRGaWxlcyIsImNvb2tpZSIsInRva2VuIiwiZGVzY3JpcHRpb24iLCJzcGhlcmUiLCJhbW91bnQiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwic3RlcFNlY29uZCIsInZhbHVlcyIsInNwaGVyZVZhbCIsImZpbmQiLCJ4IiwibmFtZSIsIm9iamVjdCIsInJlcGxhY2VEYXRlIiwidW5kZWZpbmVkIiwidXRtX3NvdXJjZSIsImNsaWNrX2lkIiwiYXhpb3MiLCJwcm9jZXNzIiwicGFyYW1zIiwidGhlbiIsInJlcyIsImRhdGEiLCJzdWNjZXNzIiwiUm91dGVyIiwidXNlRWZmZWN0IiwiZm9ybSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnNvbGUiLCJsb2ciLCJzY3JvbGxJbnRvVmlldyIsImJsb2NrIiwiYmVoYXZpb3IiLCJlcnJvcnMiLCJ0b3VjaGVkIiwicmVxdWlyZWQiLCJtYXAiLCJmaXoiLCJpbmRleCIsIlByaWNlTWFzayIsImhhbmRsZUZvY3VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQWtCO0FBQUE7O0FBQUEsTUFBaEJDLFVBQWdCLFFBQWhCQSxVQUFnQjtBQUNuQyxNQUFNQyxNQUFNLEdB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QTtBQUFBO0FBQUE7QUFBQSxxQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBdkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERDtBQUFBO0FBVkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXdFRCxDQXJKRDs7R0FBTTNELFU7VUFDV0csa0Q7OztLQURYSCxVO0FBdUpOLCtEQUFlQSxVQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhYmluZXQvY29udGludWUuNTRkOWQ2OTgwYmMxNzA2ZGFlMjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHtmaXpzZXJ2aWNlLCBqdXJzZXJ2aWNlfSBmcm9tIFwiLi4vLi4vZGVmYXVsdHMvZml6c2VydmljZVwiXHJcblxyXG5pbXBvcnQgY29va2llIGZyb20gJ2pzLWNvb2tpZSdcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCBSb3V0ZXIsIHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCB7Rm9ybWlrLCBGb3JtLCBGaWVsZH0gZnJvbSAnZm9ybWlrJztcclxuaW1wb3J0IHtyZXF1aXJlZH0gZnJvbSBcIi4uLy4uL2RlZmF1bHRzL3ZhbGlkYXRpb25zXCJcclxuaW1wb3J0IERyb3B6b25lIGZyb20gXCJyZWFjdC1kcm9wem9uZVwiO1xyXG5pbXBvcnQgUHJpY2VNYXNrIGZyb20gXCIuLi9NYXNrcy9QcmljZU1hc2tcIlxyXG5pbXBvcnQgeyBoYW5kbGVGb2N1cywgcmVwbGFjZURhdGUsIHRob3VzYW5kU2VwYXJhdG9yIH0gZnJvbSBcIi4uLy4uL2RlZmF1bHRzL2V4dHJhRnVuY3Rpb25cIlxyXG5pbXBvcnQgRHJvcEZpbGUgZnJvbSBcIi4uL2Ryb3BGaWxlL0Ryb3BGaWxlXCJcclxuXHJcbmNvbnN0IFNlY29uZFN0ZXAgPSAoe3NldExvYWRpbmd9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBwYXRobmFtZSA9IHJvdXRlci5wYXRobmFtZVxyXG4gIGNvbnN0IHtpZH0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCB7c3RlcH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3Qge3R5cGV9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IGxpc3RvZnNlcnZpY2UgPSByb3V0ZXIucGF0aG5hbWUgPT09ICcvZGx5YS1maXppY2hlc2tpeC1saWMnID8gZml6c2VydmljZSAgOiBqdXJzZXJ2aWNlXHJcbiAgY29uc3QgbGlzdG9mY29udGludWUgPSB0eXBlID09PSAn0KTQuNC3INC70LjRhtC+JyA/IGZpenNlcnZpY2UgOiBqdXJzZXJ2aWNlXHJcbiAgY29uc3QgZmluYWxMaXN0cyA9IHBhdGhuYW1lID09PSAnL2NhYmluZXQvY29udGludWUnID8gbGlzdG9mY29udGludWUgOiBsaXN0b2ZzZXJ2aWNlXHJcbiAgY29uc3QgW2ZpbGVzLFxyXG4gICAgc2V0RmlsZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtmb3JtRGF0YSxcclxuICAgIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgIGlkOiBjb29raWUuZ2V0KCdsZWFkX2lkJykgfHwgaWQsXHJcbiAgICB0b2tlbjogY29va2llLmdldCgndG9rZW4nKSxcclxuICAgIGRlc2NyaXB0aW9uOiAnJyxcclxuICAgIHNwaGVyZTogJzEnLFxyXG4gICAgYW1vdW50OiAnJ1xyXG4gIH0pXHJcbiAgXHJcblxyXG4gIGNvbnN0IHN0ZXBTZWNvbmQgPSAodmFsdWVzKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICAvLyBjb25zb2xlLmxvZyhyZXBsYWNlRGF0ZSh2YWx1ZXMuYW1vdW50KSlcclxuICAgIGNvbnN0IHNwaGVyZVZhbCA9IGZpbmFsTGlzdHMuZmluZCh4PT54LmlkPT09IHZhbHVlcy5zcGhlcmUpLm5hbWVcclxuICAgIGNvbnN0IG9iamVjdCA9IHtcclxuICAgICAgaWQ6IHZhbHVlcy5pZCxcclxuICAgICAgdG9rZW46IHZhbHVlcy50b2tlbixcclxuICAgICAgZGVzY3JpcHRpb246IHZhbHVlcy5kZXNjcmlwdGlvbixcclxuICAgICAgc3BoZXJlOiBzcGhlcmVWYWwsXHJcbiAgICAgIGFtb3VudDogcmVwbGFjZURhdGUodmFsdWVzLmFtb3VudClcclxuICAgIH1cclxuICAgIGlmIChjb29raWUuZ2V0KCd1dG1fc291cmNlJykgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBvYmplY3QudXRtX3NvdXJjZSA9IGNvb2tpZS5nZXQoJ3V0bV9zb3VyY2UnKVxyXG4gICAgICBvYmplY3QuY2xpY2tfaWQgPSBjb29raWUuZ2V0KCdjbGlja19pZCcpXHJcbiAgICAgIC8vIG9iamVjdC53ZWJJRCA9IGNvb2tpZS5nZXQoJ3dlYl9pZCcpXHJcbiAgICB9XHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9zdGVwVHdvYCwge1xyXG4gICAgICBwYXJhbXM6IFxyXG4gICAgICAgIG9iamVjdFxyXG4gICAgICBcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgIGlmKHBhdGhuYW1lPT09Jy9qdXJzZXJ2aWNlJykge1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2p1cnNlcnZpY2U/c3RlcD0zJylcclxuICAgICAgICAgICAgY29va2llLnNldCgnc3RlcGp1cicsIDMpXHJcbiAgICAgICAgICAgIGNvb2tpZS5zZXQoJ2Ftb3VudCcsIHJlcGxhY2VEYXRlKHZhbHVlcy5hbW91bnQpKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYocGF0aG5hbWUgPT09ICcvZGx5YS1maXppY2hlc2tpeC1saWMnKSB7XHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvZGx5YS1maXppY2hlc2tpeC1saWM/c3RlcD0zJylcclxuICAgICAgICAgICAgY29va2llLnNldCgnc3RlcCcsMylcclxuICAgICAgICAgICAgY29va2llLnNldCgnYW1vdW50JywgcmVwbGFjZURhdGUodmFsdWVzLmFtb3VudCkpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZihwYXRobmFtZSA9PT0gJy9jYWJpbmV0L2NvbnRpbnVlJykge1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCh7cGF0aG5hbWU6ICcvY2FiaW5ldC9jb250aW51ZScsIHF1ZXJ5OntcclxuICAgICAgICAgICAgICBzdGVwOiAzLFxyXG4gICAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgICB0eXBlOiB0eXBlLFxyXG4gICAgICAgICAgICAgIGFtb3VudDogcmVwbGFjZURhdGUodmFsdWVzLmFtb3VudClcclxuICAgICAgICAgICAgfX0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcmVzLmRhdGEuc3VjY2Vzcykge31cclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB2YXIgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX3JlZ2lzdGVyJyk7XHJcbiAgICBjb25zb2xlLmxvZyhmb3JtKVxyXG4gICAgZm9ybS5zY3JvbGxJbnRvVmlldyh7YmxvY2s6ICdjZW50ZXInLCBiZWhhdmlvcjogJ3Ntb290aCd9KVxyXG4gIFxyXG4gIH0sW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybV9yZWdpc3Rlcic+XHJcbiAgICAgIDxGb3JtaWtcclxuICAgICAgICBpbml0aWFsVmFsdWVzPXt7XHJcbiAgICAgICAgaWQ6IGNvb2tpZS5nZXQoJ2xlYWRfaWQnKSxcclxuICAgICAgICB0b2tlbjogY29va2llLmdldCgndG9rZW4nKSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJycsXHJcbiAgICAgICAgc3BoZXJlOiAnMScsXHJcbiAgICAgICAgYW1vdW50OiAnJ1xyXG4gICAgICB9fVxyXG4gICAgICAgIG9uU3VibWl0PVxyXG4gICAgICAgIHsodmFsdWVzKSA9PiB7c3RlcFNlY29uZCh2YWx1ZXMpfX0+XHJcbiAgICAgICAgeyh7ZXJyb3JzLCB0b3VjaGVkLCB2YWx1ZXN9KSA9PiAoXHJcbiAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgPEZpZWxkIGFzPSdzZWxlY3QnIHZhbGlkYXRlPXtyZXF1aXJlZH0gbmFtZT0nc3BoZXJlJyBjbGFzc05hbWU9J2Zvcm1fc2VsZWN0Jz5cclxuICAgICAgICAgICAgICB7bGlzdG9mc2VydmljZS5tYXAoKGZpeiwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxvcHRpb24gZGF0YS1pbWc9e2AvaW1nL3VzbHVnaS8ke2luZGV4KzF9LnN2Z2B9IHZhbHVlPXtpbmRleCArIDF9PntmaXoubmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9GaWVsZD5cclxuICAgICAgICAgICAgeyhlcnJvcnMuc3BoZXJlICYmIHRvdWNoZWQuc3BoZXJlKVxyXG4gICAgICAgICAgICAgID8gPHAgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+e2Vycm9ycy5zcGhlcmV9PC9wPlxyXG4gICAgICAgICAgICAgIDogPHAgY2xhc3NOYW1lPScnPjwvcD59XHJcbiAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgIGFzPSd0ZXh0YXJlYSdcclxuICAgICAgICAgICAgICBuYW1lPSdkZXNjcmlwdGlvbidcclxuICAgICAgICAgICAgICB2YWxpZGF0ZT17cmVxdWlyZWR9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J9Ce0L/QuNGI0LjRgtC1INCy0LDRiNGDINGB0LjRgtGD0LDRhtC40Y4nPjwvRmllbGQ+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHsoZXJyb3JzLmRlc2NyaXB0aW9uICYmIHRvdWNoZWQuZGVzY3JpcHRpb24pXHJcbiAgICAgICAgICAgICAgPyA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz57ZXJyb3JzLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICA6IDxwIGNsYXNzTmFtZT0nJz48L3A+fVxyXG4gICAgICAgICAgICA8RmllbGQgbmFtZT0nYW1vdW50JyAgdHlwZT0ndGV4dCcgdmFsaWRhdGU9e3JlcXVpcmVkfSBjb21wb25lbnQ9e1ByaWNlTWFza30gcGxhY2Vob2xkZXI9J9Ch0YPQvNC80LAg0LjRgdC60LAnPjwvRmllbGQ+XHJcbiAgICAgICAgICAgIHsoZXJyb3JzLmFtb3VudCAmJiB0b3VjaGVkLmFtb3VudClcclxuICAgICAgICAgICAgICA/IDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPntlcnJvcnMuYW1vdW50fTwvcD5cclxuICAgICAgICAgICAgICA6IDxwIGNsYXNzTmFtZT0nJz48L3A+fVxyXG4gICAgICAgICAgICA8RHJvcEZpbGUgc2V0RmlsZXM9e3NldEZpbGVzfS8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaXJzdHN0ZXBfYmFubmVyJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaXJzdHN0ZXBfYmFubmVyLS1pbWcnPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIGFsdD0naW1hZ2UnIGNsYXNzTmFtZT0nc2Vjb25kc3RlcCcgc3JjPScvaW1nL2Zvcm0vc2Vjb25kc3RlcC5wbmcnLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpcnN0c3RlcF9iYW5uZXItLWJ1dHRvbic+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2luZ2xlYnRuJ1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2J1dHRvbidcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVGb2N1cygpfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPSfQlNCw0LvQtdC1Jy8+XHJcbiAgICAgICAgICAgICAgICAgIDxiPtCh0L3QsNGH0LDQu9CwINGA0LXQt9GD0LvRjNGC0LDRgjxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgINC/0L7RgtC+0Lwg0L7Qv9C70LDRgtCwPC9iPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICA8L0Zvcm1paz5cclxuICAgICAgey8qIDxmb3JtIG9uU3VibWl0PXsoZSkgPT4gc3RlcFNlY29uZChlKX0+XHJcbiAgICAgICAgPHNlbGVjdCBvbkNoYW5nZT17ZT0+IG9uQ2hhbmdlKGUpfSB2YWx1ZT17Zm9ybURhdGEuc3BoZXJlfSBuYW1lPSdzcGhlcmUnIGNsYXNzTmFtZT0nZm9ybV9zZWxlY3QnPlxyXG4gICAgICAgICAge2ZpenNlcnZpY2UubWFwKChmaXosaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17aW5kZXgrMX0+e2Zpei5uYW1lfTwvb3B0aW9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPHRleHRhcmVhIG5hbWU9J2Rlc2NyaXB0aW9uJyB2YWx1ZT17Zm9ybURhdGEuZGVzY3JpcHRpb259IG9uQ2hhbmdlPXtlPT5vbkNoYW5nZShlKX0gcGxhY2Vob2xkZXI9J9Ce0L/QuNGI0LjRgtC1INCy0LDRiNGDINGB0LjRgtGD0LDRhtC40Y4nPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9J251bWJlcicgb25DaGFuZ2U9e2U9Pm9uQ2hhbmdlKGUpfSB2YWx1ZT17Zm9ybURhdGEuYW1vdW50fSBuYW1lPSdhbW91bnQnIHBsYWNlaG9sZGVyPSfQodGD0LzQvNCwINC40YHQutCwJyAvPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPSdmaWxlJyAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtX2J1dHRvbnMnPlxyXG4gICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0ndHJhbnNwYXJlbnRidG4gYnV0dG9uJyB0eXBlPSdidXR0b24nIHZhbHVlPSfQktC10YDQvdGD0YLRjNGB0Y8g0L3QsNC30LDQtCcvPlxyXG4gICAgICAgICAgPGlucHV0ICBjbGFzc05hbWU9J2J1dHRvbicgdHlwZT0nc3VibWl0JyB2YWx1ZT0n0JTQsNC70LXQtScgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPiAqL31cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2Vjb25kU3RlcCJdLCJzb3VyY2VSb290IjoiIn0=