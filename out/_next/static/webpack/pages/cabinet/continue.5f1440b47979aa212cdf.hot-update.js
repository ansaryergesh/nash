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
  var pathname = router.pathname; // const {id} = router.query

  var step = router.query.step;
  var type = router.query.type;
  var listofservice = router.pathname === '/dlya-fizicheskix-lic' ? _defaults_fizservice__WEBPACK_IMPORTED_MODULE_3__.fizservice : _defaults_fizservice__WEBPACK_IMPORTED_MODULE_3__.jurservice;
  var listofcontinue = type === 'Физ лицо' ? _defaults_fizservice__WEBPACK_IMPORTED_MODULE_3__.fizservice : _defaults_fizservice__WEBPACK_IMPORTED_MODULE_3__.jurservice;
  var finalLists = pathname === '/cabinet/continue' ? listofcontinue : listofservice;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      files = _useState[0],
      setFiles = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    id: js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get('lead_id') === undefined ? router.query.id : js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get('lead_id'),
    token: js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get('token'),
    description: '',
    sphere: '1',
    amount: ''
  }),
      formData = _useState2[0],
      setFormData = _useState2[1];

  var stepSecond = function stepSecond(values) {
    setLoading(true);
    console.log(values); // console.log(replaceDate(values.amount))

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
        id: js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get('lead_id') !== undefined ? js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get('lead_id') : router.query.id,
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
            children: finalLists.map(function (fiz, index) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("option", {
                "data-img": "/img/uslugi/".concat(index + 1, ".svg"),
                value: index + 1,
                children: fiz.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 17
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 13
          }, _this), errors.sphere && touched.sphere ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            className: "text-danger",
            children: errors.sphere
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 17
          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            className: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 17
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_7__.Field, {
            as: "textarea",
            name: "description",
            validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_8__.required,
            placeholder: "\u041E\u043F\u0438\u0448\u0438\u0442\u0435 \u0432\u0430\u0448\u0443 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044E"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 13
          }, _this), errors.description && touched.description ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            className: "text-danger",
            children: errors.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 17
          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            className: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 17
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_7__.Field, {
            name: "amount",
            type: "text",
            validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_8__.required,
            component: _Masks_PriceMask__WEBPACK_IMPORTED_MODULE_10__.default,
            placeholder: "\u0421\u0443\u043C\u043C\u0430 \u0438\u0441\u043A\u0430"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 13
          }, _this), errors.amount && touched.amount ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            className: "text-danger",
            children: errors.amount
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 17
          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            className: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 17
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_dropFile_DropFile__WEBPACK_IMPORTED_MODULE_12__.default, {
            setFiles: setFiles
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
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
                lineNumber: 130,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 129,
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
                lineNumber: 133,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("b", {
                children: ["\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 139,
                  columnNumber: 39
                }, _this), "\u043F\u043E\u0442\u043E\u043C \u043E\u043F\u043B\u0430\u0442\u0430"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 139,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 11
        }, _this);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 93,
    columnNumber: 5
  }, _this);
};

_s(SecondStep, "SowMxo8MXoGk5nk7jdmIswUV2HA=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRzZXJ2aWNlL1NlY29uZFN0ZXAuanMiXSwibmFtZXMiOlsiU2Vjb25kU3RlcCIsInNldExvYWRpbmciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwYXRobmFtZSIsInN0ZXAiLCJxdWVyeSIsInR5cGUiLCJsaXN0b2ZzZXJ2aWNlIiwiZml6c2VydmljZSIsImp1cnNlcnZpY2UiLCJsaXN0b2Zjb250aW51ZSIsImZpbmFsTGlzdHMiLCJ1c2VTdGF0ZSIsImZpbGVzIiwic2V0RmlsZXMiLCJpZCIsImNvb2tpZSIsInVuZGVmaW5lZCIsInRva2VuIiwiZGVzY3JpcHRpb24iLCJzcGhlcmUiLCJhbW91bnQiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwic3RlcFNlY29uZCIsInZhbHVlcyIsImNvbnNvbGUiLCJsb2ciLCJzcGhlcmVWYWwiLCJmaW5kIiwieCIsIm5hbWUiLCJvYmplY3QiLCJyZXBsYWNlRGF0ZSIsInV0bV9zb3VyY2UiLCJjbGlja19pZCIsImF4aW9zIiwicHJvY2VzcyIsInBhcmFtcyIsInRoZW4iLCJyZXMiLCJkYXRhIiwic3VjY2VzcyIsIlJvdXRlciIsInVzZUVmZmVjdCIsImZvcm0iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzY3JvbGxJbnRvVmlldyIsImJsb2NrIiwiYmVoYXZpb3IiLCJlcnJvcnMiLCJ0b3VjaGVkIiwicmVxdWlyZWQiLCJtYXAiLCJmaXoiLCJpbmRleCIsIlByaWNlTWFzayIsImhhbmRsZUZvY3VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQWtCO0FBQUE7O0FBQUEsTUFBaEJDLFVBQWdCLFFBQWhCQSxVQUFnQjtBQUNuQyxNQUFNQyxNQUFNLEdB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LHVCQUFNNEMscUVBQVcsRUFBakI7QUFBQSxlQUpYLHVJQUtRLGdDQUxSO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFPRTtBQUFBLDZJQUFvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkF2QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUREO0FBQUE7QUFWSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBd0VELENBdEpEOztHQUFNM0QsVTtVQUNXRyxrRDs7O0tBRFhILFU7QUF3Sk4sK0RBQWVBLFVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FiaW5ldC9jb250aW51ZS41ZjE0NDBiNDc5NzlhYTIxMmNkZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQge2ZpenNlcnZpY2UsIGp1cnNlcnZpY2V9IGZyb20gXCIuLi8uLi9kZWZhdWx0cy9maXpzZXJ2aWNlXCJcclxuXHJcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IFJvdXRlciwge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuaW1wb3J0IHtGb3JtaWssIEZvcm0sIEZpZWxkfSBmcm9tICdmb3JtaWsnO1xyXG5pbXBvcnQge3JlcXVpcmVkfSBmcm9tIFwiLi4vLi4vZGVmYXVsdHMvdmFsaWRhdGlvbnNcIlxyXG5pbXBvcnQgRHJvcHpvbmUgZnJvbSBcInJlYWN0LWRyb3B6b25lXCI7XHJcbmltcG9ydCBQcmljZU1hc2sgZnJvbSBcIi4uL01hc2tzL1ByaWNlTWFza1wiXHJcbmltcG9ydCB7IGhhbmRsZUZvY3VzLCByZXBsYWNlRGF0ZSwgdGhvdXNhbmRTZXBhcmF0b3IgfSBmcm9tIFwiLi4vLi4vZGVmYXVsdHMvZXh0cmFGdW5jdGlvblwiXHJcbmltcG9ydCBEcm9wRmlsZSBmcm9tIFwiLi4vZHJvcEZpbGUvRHJvcEZpbGVcIlxyXG5cclxuY29uc3QgU2Vjb25kU3RlcCA9ICh7c2V0TG9hZGluZ30pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHBhdGhuYW1lID0gcm91dGVyLnBhdGhuYW1lXHJcbiAgLy8gY29uc3Qge2lkfSA9IHJvdXRlci5xdWVyeVxyXG4gIGNvbnN0IHtzdGVwfSA9IHJvdXRlci5xdWVyeTtcclxuICBjb25zdCB7dHlwZX0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3QgbGlzdG9mc2VydmljZSA9IHJvdXRlci5wYXRobmFtZSA9PT0gJy9kbHlhLWZpemljaGVza2l4LWxpYycgPyBmaXpzZXJ2aWNlICA6IGp1cnNlcnZpY2VcclxuICBjb25zdCBsaXN0b2Zjb250aW51ZSA9IHR5cGUgPT09ICfQpNC40Lcg0LvQuNGG0L4nID8gZml6c2VydmljZSA6IGp1cnNlcnZpY2VcclxuICBjb25zdCBmaW5hbExpc3RzID0gcGF0aG5hbWUgPT09ICcvY2FiaW5ldC9jb250aW51ZScgPyBsaXN0b2Zjb250aW51ZSA6IGxpc3RvZnNlcnZpY2VcclxuICBjb25zdCBbZmlsZXMsXHJcbiAgICBzZXRGaWxlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2Zvcm1EYXRhLFxyXG4gICAgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgaWQ6IGNvb2tpZS5nZXQoJ2xlYWRfaWQnKSA9PT0gdW5kZWZpbmVkID8gcm91dGVyLnF1ZXJ5LmlkIDogY29va2llLmdldCgnbGVhZF9pZCcpLFxyXG4gICAgdG9rZW46IGNvb2tpZS5nZXQoJ3Rva2VuJyksXHJcbiAgICBkZXNjcmlwdGlvbjogJycsXHJcbiAgICBzcGhlcmU6ICcxJyxcclxuICAgIGFtb3VudDogJydcclxuICB9KVxyXG4gIFxyXG5cclxuICBjb25zdCBzdGVwU2Vjb25kID0gKHZhbHVlcykgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgY29uc29sZS5sb2codmFsdWVzKVxyXG4gICAgLy8gY29uc29sZS5sb2cocmVwbGFjZURhdGUodmFsdWVzLmFtb3VudCkpXHJcbiAgICBjb25zdCBzcGhlcmVWYWwgPSBmaW5hbExpc3RzLmZpbmQoeD0+eC5pZD09PSB2YWx1ZXMuc3BoZXJlKS5uYW1lXHJcbiAgICBjb25zdCBvYmplY3QgPSB7XHJcbiAgICAgIGlkOiB2YWx1ZXMuaWQsXHJcbiAgICAgIHRva2VuOiB2YWx1ZXMudG9rZW4sXHJcbiAgICAgIGRlc2NyaXB0aW9uOiB2YWx1ZXMuZGVzY3JpcHRpb24sXHJcbiAgICAgIHNwaGVyZTogc3BoZXJlVmFsLFxyXG4gICAgICBhbW91bnQ6IHJlcGxhY2VEYXRlKHZhbHVlcy5hbW91bnQpXHJcbiAgICB9XHJcbiAgICBpZiAoY29va2llLmdldCgndXRtX3NvdXJjZScpICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgb2JqZWN0LnV0bV9zb3VyY2UgPSBjb29raWUuZ2V0KCd1dG1fc291cmNlJylcclxuICAgICAgb2JqZWN0LmNsaWNrX2lkID0gY29va2llLmdldCgnY2xpY2tfaWQnKVxyXG4gICAgICAvLyBvYmplY3Qud2ViSUQgPSBjb29raWUuZ2V0KCd3ZWJfaWQnKVxyXG4gICAgfVxyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vc3RlcFR3b2AsIHtcclxuICAgICAgcGFyYW1zOiBcclxuICAgICAgICBvYmplY3RcclxuICAgICAgXHJcbiAgICB9KVxyXG4gICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgIGlmIChyZXMuZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICBpZihwYXRobmFtZT09PScvanVyc2VydmljZScpIHtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goJy9qdXJzZXJ2aWNlP3N0ZXA9MycpXHJcbiAgICAgICAgICAgIGNvb2tpZS5zZXQoJ3N0ZXBqdXInLCAzKVxyXG4gICAgICAgICAgICBjb29raWUuc2V0KCdhbW91bnQnLCByZXBsYWNlRGF0ZSh2YWx1ZXMuYW1vdW50KSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmKHBhdGhuYW1lID09PSAnL2RseWEtZml6aWNoZXNraXgtbGljJykge1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2RseWEtZml6aWNoZXNraXgtbGljP3N0ZXA9MycpXHJcbiAgICAgICAgICAgIGNvb2tpZS5zZXQoJ3N0ZXAnLDMpXHJcbiAgICAgICAgICAgIGNvb2tpZS5zZXQoJ2Ftb3VudCcsIHJlcGxhY2VEYXRlKHZhbHVlcy5hbW91bnQpKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYocGF0aG5hbWUgPT09ICcvY2FiaW5ldC9jb250aW51ZScpIHtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goe3BhdGhuYW1lOiAnL2NhYmluZXQvY29udGludWUnLCBxdWVyeTp7XHJcbiAgICAgICAgICAgICAgc3RlcDogMyxcclxuICAgICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgICAgdHlwZTogdHlwZSxcclxuICAgICAgICAgICAgICBhbW91bnQ6IHJlcGxhY2VEYXRlKHZhbHVlcy5hbW91bnQpXHJcbiAgICAgICAgICAgIH19KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXJlcy5kYXRhLnN1Y2Nlc3MpIHt9XHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgdmFyIGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybV9yZWdpc3RlcicpO1xyXG4gICAgY29uc29sZS5sb2coZm9ybSlcclxuICAgIGZvcm0uc2Nyb2xsSW50b1ZpZXcoe2Jsb2NrOiAnY2VudGVyJywgYmVoYXZpb3I6ICdzbW9vdGgnfSlcclxuICBcclxuICB9LFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2Zvcm1fcmVnaXN0ZXInPlxyXG4gICAgICA8Rm9ybWlrXHJcbiAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xyXG4gICAgICAgIGlkOiBjb29raWUuZ2V0KCdsZWFkX2lkJykgIT09IHVuZGVmaW5lZCA/IGNvb2tpZS5nZXQoJ2xlYWRfaWQnKSA6IHJvdXRlci5xdWVyeS5pZCxcclxuICAgICAgICB0b2tlbjogY29va2llLmdldCgndG9rZW4nKSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJycsXHJcbiAgICAgICAgc3BoZXJlOiAnMScsXHJcbiAgICAgICAgYW1vdW50OiAnJ1xyXG4gICAgICB9fVxyXG4gICAgICAgIG9uU3VibWl0PVxyXG4gICAgICAgIHsodmFsdWVzKSA9PiB7c3RlcFNlY29uZCh2YWx1ZXMpfX0+XHJcbiAgICAgICAgeyh7ZXJyb3JzLCB0b3VjaGVkLCB2YWx1ZXN9KSA9PiAoXHJcbiAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgPEZpZWxkIGFzPSdzZWxlY3QnIHZhbGlkYXRlPXtyZXF1aXJlZH0gbmFtZT0nc3BoZXJlJyBjbGFzc05hbWU9J2Zvcm1fc2VsZWN0Jz5cclxuICAgICAgICAgICAgICB7ZmluYWxMaXN0cy5tYXAoKGZpeiwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxvcHRpb24gZGF0YS1pbWc9e2AvaW1nL3VzbHVnaS8ke2luZGV4KzF9LnN2Z2B9IHZhbHVlPXtpbmRleCArIDF9PntmaXoubmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9GaWVsZD5cclxuICAgICAgICAgICAgeyhlcnJvcnMuc3BoZXJlICYmIHRvdWNoZWQuc3BoZXJlKVxyXG4gICAgICAgICAgICAgID8gPHAgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+e2Vycm9ycy5zcGhlcmV9PC9wPlxyXG4gICAgICAgICAgICAgIDogPHAgY2xhc3NOYW1lPScnPjwvcD59XHJcbiAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgIGFzPSd0ZXh0YXJlYSdcclxuICAgICAgICAgICAgICBuYW1lPSdkZXNjcmlwdGlvbidcclxuICAgICAgICAgICAgICB2YWxpZGF0ZT17cmVxdWlyZWR9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J9Ce0L/QuNGI0LjRgtC1INCy0LDRiNGDINGB0LjRgtGD0LDRhtC40Y4nPjwvRmllbGQ+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHsoZXJyb3JzLmRlc2NyaXB0aW9uICYmIHRvdWNoZWQuZGVzY3JpcHRpb24pXHJcbiAgICAgICAgICAgICAgPyA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz57ZXJyb3JzLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICA6IDxwIGNsYXNzTmFtZT0nJz48L3A+fVxyXG4gICAgICAgICAgICA8RmllbGQgbmFtZT0nYW1vdW50JyAgdHlwZT0ndGV4dCcgdmFsaWRhdGU9e3JlcXVpcmVkfSBjb21wb25lbnQ9e1ByaWNlTWFza30gcGxhY2Vob2xkZXI9J9Ch0YPQvNC80LAg0LjRgdC60LAnPjwvRmllbGQ+XHJcbiAgICAgICAgICAgIHsoZXJyb3JzLmFtb3VudCAmJiB0b3VjaGVkLmFtb3VudClcclxuICAgICAgICAgICAgICA/IDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPntlcnJvcnMuYW1vdW50fTwvcD5cclxuICAgICAgICAgICAgICA6IDxwIGNsYXNzTmFtZT0nJz48L3A+fVxyXG4gICAgICAgICAgICA8RHJvcEZpbGUgc2V0RmlsZXM9e3NldEZpbGVzfS8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaXJzdHN0ZXBfYmFubmVyJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaXJzdHN0ZXBfYmFubmVyLS1pbWcnPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIGFsdD0naW1hZ2UnIGNsYXNzTmFtZT0nc2Vjb25kc3RlcCcgc3JjPScvaW1nL2Zvcm0vc2Vjb25kc3RlcC5wbmcnLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpcnN0c3RlcF9iYW5uZXItLWJ1dHRvbic+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2luZ2xlYnRuJ1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2J1dHRvbidcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVGb2N1cygpfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPSfQlNCw0LvQtdC1Jy8+XHJcbiAgICAgICAgICAgICAgICAgIDxiPtCh0L3QsNGH0LDQu9CwINGA0LXQt9GD0LvRjNGC0LDRgjxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgINC/0L7RgtC+0Lwg0L7Qv9C70LDRgtCwPC9iPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICA8L0Zvcm1paz5cclxuICAgICAgey8qIDxmb3JtIG9uU3VibWl0PXsoZSkgPT4gc3RlcFNlY29uZChlKX0+XHJcbiAgICAgICAgPHNlbGVjdCBvbkNoYW5nZT17ZT0+IG9uQ2hhbmdlKGUpfSB2YWx1ZT17Zm9ybURhdGEuc3BoZXJlfSBuYW1lPSdzcGhlcmUnIGNsYXNzTmFtZT0nZm9ybV9zZWxlY3QnPlxyXG4gICAgICAgICAge2ZpenNlcnZpY2UubWFwKChmaXosaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17aW5kZXgrMX0+e2Zpei5uYW1lfTwvb3B0aW9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPHRleHRhcmVhIG5hbWU9J2Rlc2NyaXB0aW9uJyB2YWx1ZT17Zm9ybURhdGEuZGVzY3JpcHRpb259IG9uQ2hhbmdlPXtlPT5vbkNoYW5nZShlKX0gcGxhY2Vob2xkZXI9J9Ce0L/QuNGI0LjRgtC1INCy0LDRiNGDINGB0LjRgtGD0LDRhtC40Y4nPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9J251bWJlcicgb25DaGFuZ2U9e2U9Pm9uQ2hhbmdlKGUpfSB2YWx1ZT17Zm9ybURhdGEuYW1vdW50fSBuYW1lPSdhbW91bnQnIHBsYWNlaG9sZGVyPSfQodGD0LzQvNCwINC40YHQutCwJyAvPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPSdmaWxlJyAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtX2J1dHRvbnMnPlxyXG4gICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0ndHJhbnNwYXJlbnRidG4gYnV0dG9uJyB0eXBlPSdidXR0b24nIHZhbHVlPSfQktC10YDQvdGD0YLRjNGB0Y8g0L3QsNC30LDQtCcvPlxyXG4gICAgICAgICAgPGlucHV0ICBjbGFzc05hbWU9J2J1dHRvbicgdHlwZT0nc3VibWl0JyB2YWx1ZT0n0JTQsNC70LXQtScgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPiAqL31cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2Vjb25kU3RlcCJdLCJzb3VyY2VSb290IjoiIn0=