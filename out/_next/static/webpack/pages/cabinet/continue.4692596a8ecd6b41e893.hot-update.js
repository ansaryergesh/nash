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
    id: js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get('lead_id') === undefined ? id : js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get('lead_id'),
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
        id: js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get('lead_id') !== undefined ? js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get('lead_id') : id,
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

_s(SecondStep, "dUEINt6ApVzlg1CCcYNKQ/VXS08=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRzZXJ2aWNlL1NlY29uZFN0ZXAuanMiXSwibmFtZXMiOlsiU2Vjb25kU3RlcCIsInNldExvYWRpbmciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwYXRobmFtZSIsImlkIiwicXVlcnkiLCJzdGVwIiwidHlwZSIsImxpc3RvZnNlcnZpY2UiLCJmaXpzZXJ2aWNlIiwianVyc2VydmljZSIsImxpc3RvZmNvbnRpbnVlIiwiZmluYWxMaXN0cyIsInVzZVN0YXRlIiwiZmlsZXMiLCJzZXRGaWxlcyIsImNvb2tpZSIsInVuZGVmaW5lZCIsInRva2VuIiwiZGVzY3JpcHRpb24iLCJzcGhlcmUiLCJhbW91bnQiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwic3RlcFNlY29uZCIsInZhbHVlcyIsImNvbnNvbGUiLCJsb2ciLCJzcGhlcmVWYWwiLCJmaW5kIiwieCIsIm5hbWUiLCJvYmplY3QiLCJyZXBsYWNlRGF0ZSIsInV0bV9zb3VyY2UiLCJjbGlja19pZCIsImF4aW9zIiwicHJvY2VzcyIsInBhcmFtcyIsInRoZW4iLCJyZXMiLCJkYXRhIiwic3VjY2VzcyIsIlJvdXRlciIsInVzZUVmZmVjdCIsImZvcm0iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzY3JvbGxJbnRvVmlldyIsImJsb2NrIiwiYmVoYXZpb3IiLCJlcnJvcnMiLCJ0b3VjaGVkIiwicmVxdWlyZWQiLCJtYXAiLCJmaXoiLCJpbmRleCIsIlByaWNlTWFzayIsImhhbmRsZUZvY3VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQWtCO0FBQUE7O0FBQUEsTUFBaEJDLFVBQWdCLFFBQWhCQSxVQUFnQjtBQUNuQyxNQUFNQyxNQUFNLEdB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LHVCQUFNMkMscUVBQVcsRUFBakI7QUFBQSxlQUpYLHVJQUtRLGdDQUxSO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFPRTtBQUFBLDZJQUFvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkF2QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUREO0FBQUE7QUFWSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBd0VELENBdEpEOztHQUFNM0QsVTtVQUNXRyxrRDs7O0tBRFhILFU7QUF3Sk4sK0RBQWVBLFVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FiaW5ldC9jb250aW51ZS40NjkyNTk2YThlY2Q2YjQxZTg5My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQge2ZpenNlcnZpY2UsIGp1cnNlcnZpY2V9IGZyb20gXCIuLi8uLi9kZWZhdWx0cy9maXpzZXJ2aWNlXCJcclxuXHJcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IFJvdXRlciwge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuaW1wb3J0IHtGb3JtaWssIEZvcm0sIEZpZWxkfSBmcm9tICdmb3JtaWsnO1xyXG5pbXBvcnQge3JlcXVpcmVkfSBmcm9tIFwiLi4vLi4vZGVmYXVsdHMvdmFsaWRhdGlvbnNcIlxyXG5pbXBvcnQgRHJvcHpvbmUgZnJvbSBcInJlYWN0LWRyb3B6b25lXCI7XHJcbmltcG9ydCBQcmljZU1hc2sgZnJvbSBcIi4uL01hc2tzL1ByaWNlTWFza1wiXHJcbmltcG9ydCB7IGhhbmRsZUZvY3VzLCByZXBsYWNlRGF0ZSwgdGhvdXNhbmRTZXBhcmF0b3IgfSBmcm9tIFwiLi4vLi4vZGVmYXVsdHMvZXh0cmFGdW5jdGlvblwiXHJcbmltcG9ydCBEcm9wRmlsZSBmcm9tIFwiLi4vZHJvcEZpbGUvRHJvcEZpbGVcIlxyXG5cclxuY29uc3QgU2Vjb25kU3RlcCA9ICh7c2V0TG9hZGluZ30pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHBhdGhuYW1lID0gcm91dGVyLnBhdGhuYW1lXHJcbiAgY29uc3Qge2lkfSA9IHJvdXRlci5xdWVyeVxyXG4gIGNvbnN0IHtzdGVwfSA9IHJvdXRlci5xdWVyeTtcclxuICBjb25zdCB7dHlwZX0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3QgbGlzdG9mc2VydmljZSA9IHJvdXRlci5wYXRobmFtZSA9PT0gJy9kbHlhLWZpemljaGVza2l4LWxpYycgPyBmaXpzZXJ2aWNlICA6IGp1cnNlcnZpY2VcclxuICBjb25zdCBsaXN0b2Zjb250aW51ZSA9IHR5cGUgPT09ICfQpNC40Lcg0LvQuNGG0L4nID8gZml6c2VydmljZSA6IGp1cnNlcnZpY2VcclxuICBjb25zdCBmaW5hbExpc3RzID0gcGF0aG5hbWUgPT09ICcvY2FiaW5ldC9jb250aW51ZScgPyBsaXN0b2Zjb250aW51ZSA6IGxpc3RvZnNlcnZpY2VcclxuICBjb25zdCBbZmlsZXMsXHJcbiAgICBzZXRGaWxlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2Zvcm1EYXRhLFxyXG4gICAgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgaWQ6IGNvb2tpZS5nZXQoJ2xlYWRfaWQnKSA9PT0gdW5kZWZpbmVkID8gaWQgOiBjb29raWUuZ2V0KCdsZWFkX2lkJyksXHJcbiAgICB0b2tlbjogY29va2llLmdldCgndG9rZW4nKSxcclxuICAgIGRlc2NyaXB0aW9uOiAnJyxcclxuICAgIHNwaGVyZTogJzEnLFxyXG4gICAgYW1vdW50OiAnJ1xyXG4gIH0pXHJcbiAgXHJcblxyXG4gIGNvbnN0IHN0ZXBTZWNvbmQgPSAodmFsdWVzKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICBjb25zb2xlLmxvZyh2YWx1ZXMpXHJcbiAgICAvLyBjb25zb2xlLmxvZyhyZXBsYWNlRGF0ZSh2YWx1ZXMuYW1vdW50KSlcclxuICAgIGNvbnN0IHNwaGVyZVZhbCA9IGZpbmFsTGlzdHMuZmluZCh4PT54LmlkPT09IHZhbHVlcy5zcGhlcmUpLm5hbWVcclxuICAgIGNvbnN0IG9iamVjdCA9IHtcclxuICAgICAgaWQ6IHZhbHVlcy5pZCxcclxuICAgICAgdG9rZW46IHZhbHVlcy50b2tlbixcclxuICAgICAgZGVzY3JpcHRpb246IHZhbHVlcy5kZXNjcmlwdGlvbixcclxuICAgICAgc3BoZXJlOiBzcGhlcmVWYWwsXHJcbiAgICAgIGFtb3VudDogcmVwbGFjZURhdGUodmFsdWVzLmFtb3VudClcclxuICAgIH1cclxuICAgIGlmIChjb29raWUuZ2V0KCd1dG1fc291cmNlJykgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBvYmplY3QudXRtX3NvdXJjZSA9IGNvb2tpZS5nZXQoJ3V0bV9zb3VyY2UnKVxyXG4gICAgICBvYmplY3QuY2xpY2tfaWQgPSBjb29raWUuZ2V0KCdjbGlja19pZCcpXHJcbiAgICAgIC8vIG9iamVjdC53ZWJJRCA9IGNvb2tpZS5nZXQoJ3dlYl9pZCcpXHJcbiAgICB9XHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9zdGVwVHdvYCwge1xyXG4gICAgICBwYXJhbXM6IFxyXG4gICAgICAgIG9iamVjdFxyXG4gICAgICBcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgIGlmKHBhdGhuYW1lPT09Jy9qdXJzZXJ2aWNlJykge1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2p1cnNlcnZpY2U/c3RlcD0zJylcclxuICAgICAgICAgICAgY29va2llLnNldCgnc3RlcGp1cicsIDMpXHJcbiAgICAgICAgICAgIGNvb2tpZS5zZXQoJ2Ftb3VudCcsIHJlcGxhY2VEYXRlKHZhbHVlcy5hbW91bnQpKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYocGF0aG5hbWUgPT09ICcvZGx5YS1maXppY2hlc2tpeC1saWMnKSB7XHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvZGx5YS1maXppY2hlc2tpeC1saWM/c3RlcD0zJylcclxuICAgICAgICAgICAgY29va2llLnNldCgnc3RlcCcsMylcclxuICAgICAgICAgICAgY29va2llLnNldCgnYW1vdW50JywgcmVwbGFjZURhdGUodmFsdWVzLmFtb3VudCkpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZihwYXRobmFtZSA9PT0gJy9jYWJpbmV0L2NvbnRpbnVlJykge1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCh7cGF0aG5hbWU6ICcvY2FiaW5ldC9jb250aW51ZScsIHF1ZXJ5OntcclxuICAgICAgICAgICAgICBzdGVwOiAzLFxyXG4gICAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgICB0eXBlOiB0eXBlLFxyXG4gICAgICAgICAgICAgIGFtb3VudDogcmVwbGFjZURhdGUodmFsdWVzLmFtb3VudClcclxuICAgICAgICAgICAgfX0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcmVzLmRhdGEuc3VjY2Vzcykge31cclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB2YXIgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX3JlZ2lzdGVyJyk7XHJcbiAgICBjb25zb2xlLmxvZyhmb3JtKVxyXG4gICAgZm9ybS5zY3JvbGxJbnRvVmlldyh7YmxvY2s6ICdjZW50ZXInLCBiZWhhdmlvcjogJ3Ntb290aCd9KVxyXG4gIFxyXG4gIH0sW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybV9yZWdpc3Rlcic+XHJcbiAgICAgIDxGb3JtaWtcclxuICAgICAgICBpbml0aWFsVmFsdWVzPXt7XHJcbiAgICAgICAgaWQ6IGNvb2tpZS5nZXQoJ2xlYWRfaWQnKSAhPT0gdW5kZWZpbmVkID8gY29va2llLmdldCgnbGVhZF9pZCcpIDogaWQsXHJcbiAgICAgICAgdG9rZW46IGNvb2tpZS5nZXQoJ3Rva2VuJyksXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgICAgIHNwaGVyZTogJzEnLFxyXG4gICAgICAgIGFtb3VudDogJydcclxuICAgICAgfX1cclxuICAgICAgICBvblN1Ym1pdD1cclxuICAgICAgICB7KHZhbHVlcykgPT4ge3N0ZXBTZWNvbmQodmFsdWVzKX19PlxyXG4gICAgICAgIHsoe2Vycm9ycywgdG91Y2hlZCwgdmFsdWVzfSkgPT4gKFxyXG4gICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgIDxGaWVsZCBhcz0nc2VsZWN0JyB2YWxpZGF0ZT17cmVxdWlyZWR9IG5hbWU9J3NwaGVyZScgY2xhc3NOYW1lPSdmb3JtX3NlbGVjdCc+XHJcbiAgICAgICAgICAgICAge2ZpbmFsTGlzdHMubWFwKChmaXosIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIGRhdGEtaW1nPXtgL2ltZy91c2x1Z2kvJHtpbmRleCsxfS5zdmdgfSB2YWx1ZT17aW5kZXggKyAxfT57Zml6Lm5hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvRmllbGQ+XHJcbiAgICAgICAgICAgIHsoZXJyb3JzLnNwaGVyZSAmJiB0b3VjaGVkLnNwaGVyZSlcclxuICAgICAgICAgICAgICA/IDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPntlcnJvcnMuc3BoZXJlfTwvcD5cclxuICAgICAgICAgICAgICA6IDxwIGNsYXNzTmFtZT0nJz48L3A+fVxyXG4gICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICBhcz0ndGV4dGFyZWEnXHJcbiAgICAgICAgICAgICAgbmFtZT0nZGVzY3JpcHRpb24nXHJcbiAgICAgICAgICAgICAgdmFsaWRhdGU9e3JlcXVpcmVkfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSfQntC/0LjRiNC40YLQtSDQstCw0YjRgyDRgdC40YLRg9Cw0YbQuNGOJz48L0ZpZWxkPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7KGVycm9ycy5kZXNjcmlwdGlvbiAmJiB0b3VjaGVkLmRlc2NyaXB0aW9uKVxyXG4gICAgICAgICAgICAgID8gPHAgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+e2Vycm9ycy5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgOiA8cCBjbGFzc05hbWU9Jyc+PC9wPn1cclxuICAgICAgICAgICAgPEZpZWxkIG5hbWU9J2Ftb3VudCcgIHR5cGU9J3RleHQnIHZhbGlkYXRlPXtyZXF1aXJlZH0gY29tcG9uZW50PXtQcmljZU1hc2t9IHBsYWNlaG9sZGVyPSfQodGD0LzQvNCwINC40YHQutCwJz48L0ZpZWxkPlxyXG4gICAgICAgICAgICB7KGVycm9ycy5hbW91bnQgJiYgdG91Y2hlZC5hbW91bnQpXHJcbiAgICAgICAgICAgICAgPyA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz57ZXJyb3JzLmFtb3VudH08L3A+XHJcbiAgICAgICAgICAgICAgOiA8cCBjbGFzc05hbWU9Jyc+PC9wPn1cclxuICAgICAgICAgICAgPERyb3BGaWxlIHNldEZpbGVzPXtzZXRGaWxlc30vPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmlyc3RzdGVwX2Jhbm5lcic+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmlyc3RzdGVwX2Jhbm5lci0taW1nJz5cclxuICAgICAgICAgICAgICAgICAgPGltZyBhbHQ9J2ltYWdlJyBjbGFzc05hbWU9J3NlY29uZHN0ZXAnIHNyYz0nL2ltZy9mb3JtL3NlY29uZHN0ZXAucG5nJy8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaXJzdHN0ZXBfYmFubmVyLS1idXR0b24nPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NpbmdsZWJ0bidcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPSdzdWJtaXQnXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdidXR0b24nXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRm9jdXMoKX1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT0n0JTQsNC70LXQtScvPlxyXG4gICAgICAgICAgICAgICAgICA8Yj7QodC90LDRh9Cw0LvQsCDRgNC10LfRg9C70YzRgtCw0YI8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICDQv9C+0YLQvtC8INC+0L/Qu9Cw0YLQsDwvYj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgPC9Gb3JtaWs+XHJcbiAgICAgIHsvKiA8Zm9ybSBvblN1Ym1pdD17KGUpID0+IHN0ZXBTZWNvbmQoZSl9PlxyXG4gICAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9e2U9PiBvbkNoYW5nZShlKX0gdmFsdWU9e2Zvcm1EYXRhLnNwaGVyZX0gbmFtZT0nc3BoZXJlJyBjbGFzc05hbWU9J2Zvcm1fc2VsZWN0Jz5cclxuICAgICAgICAgIHtmaXpzZXJ2aWNlLm1hcCgoZml6LGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2luZGV4KzF9PntmaXoubmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDx0ZXh0YXJlYSBuYW1lPSdkZXNjcmlwdGlvbicgdmFsdWU9e2Zvcm1EYXRhLmRlc2NyaXB0aW9ufSBvbkNoYW5nZT17ZT0+b25DaGFuZ2UoZSl9IHBsYWNlaG9sZGVyPSfQntC/0LjRiNC40YLQtSDQstCw0YjRgyDRgdC40YLRg9Cw0YbQuNGOJz48L3RleHRhcmVhPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPSdudW1iZXInIG9uQ2hhbmdlPXtlPT5vbkNoYW5nZShlKX0gdmFsdWU9e2Zvcm1EYXRhLmFtb3VudH0gbmFtZT0nYW1vdW50JyBwbGFjZWhvbGRlcj0n0KHRg9C80LzQsCDQuNGB0LrQsCcgLz5cclxuICAgICAgICA8aW5wdXQgdHlwZT0nZmlsZScgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybV9idXR0b25zJz5cclxuICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J3RyYW5zcGFyZW50YnRuIGJ1dHRvbicgdHlwZT0nYnV0dG9uJyB2YWx1ZT0n0JLQtdGA0L3Rg9GC0YzRgdGPINC90LDQt9Cw0LQnLz5cclxuICAgICAgICAgIDxpbnB1dCAgY2xhc3NOYW1lPSdidXR0b24nIHR5cGU9J3N1Ym1pdCcgdmFsdWU9J9CU0LDQu9C10LUnIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT4gKi99XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlY29uZFN0ZXAiXSwic291cmNlUm9vdCI6IiJ9