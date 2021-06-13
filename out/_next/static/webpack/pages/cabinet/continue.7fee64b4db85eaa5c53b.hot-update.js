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
        id: js_cookie__WEBPACK_IMPORTED_MODULE_4___default().get('lead_id') || id,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRzZXJ2aWNlL1NlY29uZFN0ZXAuanMiXSwibmFtZXMiOlsiU2Vjb25kU3RlcCIsInNldExvYWRpbmciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwYXRobmFtZSIsImlkIiwicXVlcnkiLCJzdGVwIiwidHlwZSIsImxpc3RvZnNlcnZpY2UiLCJmaXpzZXJ2aWNlIiwianVyc2VydmljZSIsImxpc3RvZmNvbnRpbnVlIiwiZmluYWxMaXN0cyIsInVzZVN0YXRlIiwiZmlsZXMiLCJzZXRGaWxlcyIsImNvb2tpZSIsInVuZGVmaW5lZCIsInRva2VuIiwiZGVzY3JpcHRpb24iLCJzcGhlcmUiLCJhbW91bnQiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwic3RlcFNlY29uZCIsInZhbHVlcyIsInNwaGVyZVZhbCIsImZpbmQiLCJ4IiwibmFtZSIsIm9iamVjdCIsInJlcGxhY2VEYXRlIiwidXRtX3NvdXJjZSIsImNsaWNrX2lkIiwiYXhpb3MiLCJwcm9jZXNzIiwicGFyYW1zIiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwic3VjY2VzcyIsIlJvdXRlciIsInVzZUVmZmVjdCIsImZvcm0iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzY3JvbGxJbnRvVmlldyIsImJsb2NrIiwiYmVoYXZpb3IiLCJlcnJvcnMiLCJ0b3VjaGVkIiwicmVxdWlyZWQiLCJtYXAiLCJmaXoiLCJpbmRleCIsIlByaWNlTWFzayIsImhhbmRsZUZvY3VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQWtCO0FBQUE7O0FBQUEsTUFBaEJDLFVBQWdCLFFBQWhCQSxVQUFnQjtBQUNuQyxNQUFNQyxNQUFNLEdB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NklBQW9CO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXZCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQ7QUFBQTtBQVZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF3RUQsQ0FySkQ7O0dBQU0zRCxVO1VBQ1dHLGtEOzs7S0FEWEgsVTtBQXVKTiwrREFBZUEsVUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYWJpbmV0L2NvbnRpbnVlLjdmZWU2NGI0ZGI4NWVhYTVjNTNiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7Zml6c2VydmljZSwganVyc2VydmljZX0gZnJvbSBcIi4uLy4uL2RlZmF1bHRzL2ZpenNlcnZpY2VcIlxyXG5cclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgUm91dGVyLCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQge0Zvcm1paywgRm9ybSwgRmllbGR9IGZyb20gJ2Zvcm1payc7XHJcbmltcG9ydCB7cmVxdWlyZWR9IGZyb20gXCIuLi8uLi9kZWZhdWx0cy92YWxpZGF0aW9uc1wiXHJcbmltcG9ydCBEcm9wem9uZSBmcm9tIFwicmVhY3QtZHJvcHpvbmVcIjtcclxuaW1wb3J0IFByaWNlTWFzayBmcm9tIFwiLi4vTWFza3MvUHJpY2VNYXNrXCJcclxuaW1wb3J0IHsgaGFuZGxlRm9jdXMsIHJlcGxhY2VEYXRlLCB0aG91c2FuZFNlcGFyYXRvciB9IGZyb20gXCIuLi8uLi9kZWZhdWx0cy9leHRyYUZ1bmN0aW9uXCJcclxuaW1wb3J0IERyb3BGaWxlIGZyb20gXCIuLi9kcm9wRmlsZS9Ecm9wRmlsZVwiXHJcblxyXG5jb25zdCBTZWNvbmRTdGVwID0gKHtzZXRMb2FkaW5nfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgcGF0aG5hbWUgPSByb3V0ZXIucGF0aG5hbWVcclxuICBjb25zdCB7aWR9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgY29uc3Qge3N0ZXB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IHt0eXBlfSA9IHJvdXRlci5xdWVyeTtcclxuICBjb25zdCBsaXN0b2ZzZXJ2aWNlID0gcm91dGVyLnBhdGhuYW1lID09PSAnL2RseWEtZml6aWNoZXNraXgtbGljJyA/IGZpenNlcnZpY2UgIDoganVyc2VydmljZVxyXG4gIGNvbnN0IGxpc3RvZmNvbnRpbnVlID0gdHlwZSA9PT0gJ9Ck0LjQtyDQu9C40YbQvicgPyBmaXpzZXJ2aWNlIDoganVyc2VydmljZVxyXG4gIGNvbnN0IGZpbmFsTGlzdHMgPSBwYXRobmFtZSA9PT0gJy9jYWJpbmV0L2NvbnRpbnVlJyA/IGxpc3RvZmNvbnRpbnVlIDogbGlzdG9mc2VydmljZVxyXG4gIGNvbnN0IFtmaWxlcyxcclxuICAgIHNldEZpbGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZm9ybURhdGEsXHJcbiAgICBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBpZDogY29va2llLmdldCgnbGVhZF9pZCcpID09PSB1bmRlZmluZWQgPyBpZCA6IGNvb2tpZS5nZXQoJ2xlYWRfaWQnKSxcclxuICAgIHRva2VuOiBjb29raWUuZ2V0KCd0b2tlbicpLFxyXG4gICAgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgc3BoZXJlOiAnMScsXHJcbiAgICBhbW91bnQ6ICcnXHJcbiAgfSlcclxuICBcclxuXHJcbiAgY29uc3Qgc3RlcFNlY29uZCA9ICh2YWx1ZXMpID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgIC8vIGNvbnNvbGUubG9nKHJlcGxhY2VEYXRlKHZhbHVlcy5hbW91bnQpKVxyXG4gICAgY29uc3Qgc3BoZXJlVmFsID0gZmluYWxMaXN0cy5maW5kKHg9PnguaWQ9PT0gdmFsdWVzLnNwaGVyZSkubmFtZVxyXG4gICAgY29uc3Qgb2JqZWN0ID0ge1xyXG4gICAgICBpZDogdmFsdWVzLmlkLFxyXG4gICAgICB0b2tlbjogdmFsdWVzLnRva2VuLFxyXG4gICAgICBkZXNjcmlwdGlvbjogdmFsdWVzLmRlc2NyaXB0aW9uLFxyXG4gICAgICBzcGhlcmU6IHNwaGVyZVZhbCxcclxuICAgICAgYW1vdW50OiByZXBsYWNlRGF0ZSh2YWx1ZXMuYW1vdW50KVxyXG4gICAgfVxyXG4gICAgaWYgKGNvb2tpZS5nZXQoJ3V0bV9zb3VyY2UnKSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIG9iamVjdC51dG1fc291cmNlID0gY29va2llLmdldCgndXRtX3NvdXJjZScpXHJcbiAgICAgIG9iamVjdC5jbGlja19pZCA9IGNvb2tpZS5nZXQoJ2NsaWNrX2lkJylcclxuICAgICAgLy8gb2JqZWN0LndlYklEID0gY29va2llLmdldCgnd2ViX2lkJylcclxuICAgIH1cclxuICAgIGF4aW9zXHJcbiAgICAgIC5nZXQoYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9L3N0ZXBUd29gLCB7XHJcbiAgICAgIHBhcmFtczogXHJcbiAgICAgICAgb2JqZWN0XHJcbiAgICAgIFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICBpZiAocmVzLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgaWYocGF0aG5hbWU9PT0nL2p1cnNlcnZpY2UnKSB7XHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvanVyc2VydmljZT9zdGVwPTMnKVxyXG4gICAgICAgICAgICBjb29raWUuc2V0KCdzdGVwanVyJywgMylcclxuICAgICAgICAgICAgY29va2llLnNldCgnYW1vdW50JywgcmVwbGFjZURhdGUodmFsdWVzLmFtb3VudCkpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZihwYXRobmFtZSA9PT0gJy9kbHlhLWZpemljaGVza2l4LWxpYycpIHtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goJy9kbHlhLWZpemljaGVza2l4LWxpYz9zdGVwPTMnKVxyXG4gICAgICAgICAgICBjb29raWUuc2V0KCdzdGVwJywzKVxyXG4gICAgICAgICAgICBjb29raWUuc2V0KCdhbW91bnQnLCByZXBsYWNlRGF0ZSh2YWx1ZXMuYW1vdW50KSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmKHBhdGhuYW1lID09PSAnL2NhYmluZXQvY29udGludWUnKSB7XHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKHtwYXRobmFtZTogJy9jYWJpbmV0L2NvbnRpbnVlJywgcXVlcnk6e1xyXG4gICAgICAgICAgICAgIHN0ZXA6IDMsXHJcbiAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICAgIHR5cGU6IHR5cGUsXHJcbiAgICAgICAgICAgICAgYW1vdW50OiByZXBsYWNlRGF0ZSh2YWx1ZXMuYW1vdW50KVxyXG4gICAgICAgICAgICB9fSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFyZXMuZGF0YS5zdWNjZXNzKSB7fVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHZhciBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1fcmVnaXN0ZXInKTtcclxuICAgIGNvbnNvbGUubG9nKGZvcm0pXHJcbiAgICBmb3JtLnNjcm9sbEludG9WaWV3KHtibG9jazogJ2NlbnRlcicsIGJlaGF2aW9yOiAnc21vb3RoJ30pXHJcbiAgXHJcbiAgfSxbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtX3JlZ2lzdGVyJz5cclxuICAgICAgPEZvcm1pa1xyXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcclxuICAgICAgICBpZDogY29va2llLmdldCgnbGVhZF9pZCcpIHx8IGlkLFxyXG4gICAgICAgIHRva2VuOiBjb29raWUuZ2V0KCd0b2tlbicpLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcclxuICAgICAgICBzcGhlcmU6ICcxJyxcclxuICAgICAgICBhbW91bnQ6ICcnXHJcbiAgICAgIH19XHJcbiAgICAgICAgb25TdWJtaXQ9XHJcbiAgICAgICAgeyh2YWx1ZXMpID0+IHtzdGVwU2Vjb25kKHZhbHVlcyl9fT5cclxuICAgICAgICB7KHtlcnJvcnMsIHRvdWNoZWQsIHZhbHVlc30pID0+IChcclxuICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICA8RmllbGQgYXM9J3NlbGVjdCcgdmFsaWRhdGU9e3JlcXVpcmVkfSBuYW1lPSdzcGhlcmUnIGNsYXNzTmFtZT0nZm9ybV9zZWxlY3QnPlxyXG4gICAgICAgICAgICAgIHtsaXN0b2ZzZXJ2aWNlLm1hcCgoZml6LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBkYXRhLWltZz17YC9pbWcvdXNsdWdpLyR7aW5kZXgrMX0uc3ZnYH0gdmFsdWU9e2luZGV4ICsgMX0+e2Zpei5uYW1lfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L0ZpZWxkPlxyXG4gICAgICAgICAgICB7KGVycm9ycy5zcGhlcmUgJiYgdG91Y2hlZC5zcGhlcmUpXHJcbiAgICAgICAgICAgICAgPyA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz57ZXJyb3JzLnNwaGVyZX08L3A+XHJcbiAgICAgICAgICAgICAgOiA8cCBjbGFzc05hbWU9Jyc+PC9wPn1cclxuICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgYXM9J3RleHRhcmVhJ1xyXG4gICAgICAgICAgICAgIG5hbWU9J2Rlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAgICAgIHZhbGlkYXRlPXtyZXF1aXJlZH1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0n0J7Qv9C40YjQuNGC0LUg0LLQsNGI0YMg0YHQuNGC0YPQsNGG0LjRjic+PC9GaWVsZD5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgeyhlcnJvcnMuZGVzY3JpcHRpb24gJiYgdG91Y2hlZC5kZXNjcmlwdGlvbilcclxuICAgICAgICAgICAgICA/IDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPntlcnJvcnMuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgIDogPHAgY2xhc3NOYW1lPScnPjwvcD59XHJcbiAgICAgICAgICAgIDxGaWVsZCBuYW1lPSdhbW91bnQnICB0eXBlPSd0ZXh0JyB2YWxpZGF0ZT17cmVxdWlyZWR9IGNvbXBvbmVudD17UHJpY2VNYXNrfSBwbGFjZWhvbGRlcj0n0KHRg9C80LzQsCDQuNGB0LrQsCc+PC9GaWVsZD5cclxuICAgICAgICAgICAgeyhlcnJvcnMuYW1vdW50ICYmIHRvdWNoZWQuYW1vdW50KVxyXG4gICAgICAgICAgICAgID8gPHAgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+e2Vycm9ycy5hbW91bnR9PC9wPlxyXG4gICAgICAgICAgICAgIDogPHAgY2xhc3NOYW1lPScnPjwvcD59XHJcbiAgICAgICAgICAgIDxEcm9wRmlsZSBzZXRGaWxlcz17c2V0RmlsZXN9Lz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpcnN0c3RlcF9iYW5uZXInPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpcnN0c3RlcF9iYW5uZXItLWltZyc+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PSdpbWFnZScgY2xhc3NOYW1lPSdzZWNvbmRzdGVwJyBzcmM9Jy9pbWcvZm9ybS9zZWNvbmRzdGVwLnBuZycvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmlyc3RzdGVwX2Jhbm5lci0tYnV0dG9uJz5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzaW5nbGVidG4nXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYnV0dG9uJ1xyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUZvY3VzKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9J9CU0LDQu9C10LUnLz5cclxuICAgICAgICAgICAgICAgICAgPGI+0KHQvdCw0YfQsNC70LAg0YDQtdC30YPQu9GM0YLQsNGCPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgICAg0L/QvtGC0L7QvCDQvtC/0LvQsNGC0LA8L2I+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgIDwvRm9ybWlrPlxyXG4gICAgICB7LyogPGZvcm0gb25TdWJtaXQ9eyhlKSA9PiBzdGVwU2Vjb25kKGUpfT5cclxuICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXtlPT4gb25DaGFuZ2UoZSl9IHZhbHVlPXtmb3JtRGF0YS5zcGhlcmV9IG5hbWU9J3NwaGVyZScgY2xhc3NOYW1lPSdmb3JtX3NlbGVjdCc+XHJcbiAgICAgICAgICB7Zml6c2VydmljZS5tYXAoKGZpeixpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtpbmRleCsxfT57Zml6Lm5hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8dGV4dGFyZWEgbmFtZT0nZGVzY3JpcHRpb24nIHZhbHVlPXtmb3JtRGF0YS5kZXNjcmlwdGlvbn0gb25DaGFuZ2U9e2U9Pm9uQ2hhbmdlKGUpfSBwbGFjZWhvbGRlcj0n0J7Qv9C40YjQuNGC0LUg0LLQsNGI0YMg0YHQuNGC0YPQsNGG0LjRjic+PC90ZXh0YXJlYT5cclxuICAgICAgICA8aW5wdXQgdHlwZT0nbnVtYmVyJyBvbkNoYW5nZT17ZT0+b25DaGFuZ2UoZSl9IHZhbHVlPXtmb3JtRGF0YS5hbW91bnR9IG5hbWU9J2Ftb3VudCcgcGxhY2Vob2xkZXI9J9Ch0YPQvNC80LAg0LjRgdC60LAnIC8+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9J2ZpbGUnIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm1fYnV0dG9ucyc+XHJcbiAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSd0cmFuc3BhcmVudGJ0biBidXR0b24nIHR5cGU9J2J1dHRvbicgdmFsdWU9J9CS0LXRgNC90YPRgtGM0YHRjyDQvdCw0LfQsNC0Jy8+XHJcbiAgICAgICAgICA8aW5wdXQgIGNsYXNzTmFtZT0nYnV0dG9uJyB0eXBlPSdzdWJtaXQnIHZhbHVlPSfQlNCw0LvQtdC1JyAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+ICovfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWNvbmRTdGVwIl0sInNvdXJjZVJvb3QiOiIifQ==