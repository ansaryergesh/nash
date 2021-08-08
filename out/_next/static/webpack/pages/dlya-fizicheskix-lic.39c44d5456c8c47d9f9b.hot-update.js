self["webpackHotUpdate_N_E"]("pages/dlya-fizicheskix-lic",{

/***/ "./components/dropFileDoc/dropFileDoc.js":
/*!***********************************************!*\
  !*** ./components/dropFileDoc/dropFileDoc.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dropzone_uploader_dist_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dropzone-uploader/dist/styles.css */ "./node_modules/react-dropzone-uploader/dist/styles.css");
/* harmony import */ var react_dropzone_uploader_dist_styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dropzone_uploader_dist_styles_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dropzone_uploader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dropzone-uploader */ "./node_modules/react-dropzone-uploader/dist/react-dropzone-uploader.js");
/* harmony import */ var react_dropzone_uploader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dropzone_uploader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\job\\nashcompany\\components\\dropFileDoc\\dropFileDoc.js",
    _this = undefined,
    _s = $RefreshSig$();






var DropFileDoc = function DropFileDoc(_ref) {
  _s();

  var setFiles = _ref.setFiles;

  var getUploadParams = function getUploadParams() {
    return {
      url: 'https://httpbin.org/post'
    };
  };

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {// document.querySelector('.dzu-inputLabel').innerHTML = ' ' 
  }, []);

  var handleChangeStatus = function handleChangeStatus(_ref2, status, files) {
    var meta = _ref2.meta;
    console.log(status, meta); // console.log(files)

    setFiles(files);
  }; // const handleSubmit = (files, allFiles) => {
  //   // console.log(files.map(f => f.meta))
  //   console.log(files)
  //   allFiles.forEach(f => f.remove())
  //   const formData = new FormData();
  //   formData.append('file', files)
  //   formData.append('id', 67)
  //   axios.get('http://178.170.221.46/api/upload.php', formData)
  //     .then(res=> {
  //       console.log(res)
  //     })
  // }


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_dropzone_uploader__WEBPACK_IMPORTED_MODULE_2___default()), {
    onChangeStatus: handleChangeStatus,
    inputContent: "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u0438 \u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B \u043E \u0434\u043E\u043B\u0433\u0435 (\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442 \u0438/\u0438\u043B\u0438 \u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u043D\u0430\u0434\u043F\u0438\u0441\u044C \u0438/\u0438\u043B\u0438 \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043B\u0438\u0441\u0442",
    inputWithFilesContent: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0435\u0449\u0435",
    maxFiles: 5 // maxSizeBytes={500000}
    // onSubmit={handleSubmit}
    ,
    styles: {
      dropzone: {
        minHeight: 200,
        maxHeight: 250,
        fontSize: 12
      }
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }, _this);
};

_s(DropFileDoc, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = DropFileDoc;
/* harmony default export */ __webpack_exports__["default"] = (DropFileDoc);

var _c;

$RefreshReg$(_c, "DropFileDoc");

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


/***/ }),

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
            lineNumber: 134,
            columnNumber: 19
          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            className: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 19
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_7__.Field, {
            name: "description",
            type: "text",
            validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_8__.required,
            placeholder: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0441\u043F\u043E\u0440\u0430"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 15
          }, _this), errors.description && touched.description ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            className: "text-danger",
            children: errors.description
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
            name: "dateAggrement",
            type: "text",
            validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_8__.required,
            component: _Masks_DateMask__WEBPACK_IMPORTED_MODULE_13__.default,
            placeholder: "\u0414\u0430\u0442\u0430 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430 (\u0414\u0414.\u041C\u041C.\u0413\u0413\u0413\u0413)"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 15
          }, _this), errors.dateAggrement && touched.dateAggrement ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            className: "text-danger",
            children: errors.dateAggrement
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 19
          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            className: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 19
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_7__.Field, {
            name: "od",
            type: "number",
            validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_8__.required,
            placeholder: "\u041E\u0414"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 15
          }, _this), errors.od && touched.od ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            className: "text-danger",
            children: errors.od
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
            name: "amount",
            type: "text",
            validate: _defaults_validations__WEBPACK_IMPORTED_MODULE_8__.required,
            component: _Masks_PriceMask__WEBPACK_IMPORTED_MODULE_10__.default,
            placeholder: "\u0421\u0443\u043C\u043C\u0430 \u043A \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0443"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 15
          }, _this), errors.amount && touched.amount ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            className: "text-danger",
            children: errors.amount
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 19
          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
            className: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 19
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_dropFile_DropFile__WEBPACK_IMPORTED_MODULE_12__.default, {
            setFiles: setFiles
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_dropFileDoc_dropFileDoc__WEBPACK_IMPORTED_MODULE_14__.default, {
            setFiles: setFiles
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
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
                lineNumber: 175,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 174,
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
                lineNumber: 178,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("b", {
                children: ["\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 184,
                  columnNumber: 37
                }, _this), "\u043F\u043E\u0442\u043E\u043C \u043E\u043F\u043B\u0430\u0442\u0430"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 184,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 177,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 173,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kcm9wRmlsZURvYy9kcm9wRmlsZURvYy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9nZXRzZXJ2aWNlL1NlY29uZFN0ZXAuanMiXSwibmFtZXMiOlsiRHJvcEZpbGVEb2MiLCJzZXRGaWxlcyIsImdldFVwbG9hZFBhcmFtcyIsInVybCIsInVzZUVmZmVjdCIsImhhbmRsZUNoYW5nZVN0YXR1cyIsInN0YXR1cyIsImZpbGVzIiwibWV0YSIsImNvbnNvbGUiLCJsb2ciLCJkcm9wem9uZSIsIm1pbkhlaWdodCIsIm1heEhlaWdodCIsImZvbnRTaXplIiwiU2Vjb25kU3RlcCIsInNldExvYWRpbmciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwYXRobmFtZSIsInN0ZXAiLCJxdWVyeSIsInR5cGUiLCJsaXN0b2ZzZXJ2aWNlIiwiZml6c2VydmljZSIsImp1cnNlcnZpY2UiLCJsaXN0b2Zjb250aW51ZSIsImZpbmFsTGlzdHMiLCJ1c2VTdGF0ZSIsImlzTWZvIiwic2V0SXNNZm8iLCJzcGhlcmUiLCJzZXRTcGhlcmUiLCJvbkNoYW5nZVNwaGVyZSIsImUiLCJmaW5kIiwieCIsImlkIiwidGFyZ2V0IiwidmFsdWUiLCJuYW1lIiwiaW5jbHVkZXMiLCJjb29raWUiLCJ1bmRlZmluZWQiLCJ0b2tlbiIsImRlc2NyaXB0aW9uIiwiYW1vdW50IiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsInN0ZXBTZWNvbmQiLCJ2YWx1ZXMiLCJzcGhlcmVWYWwiLCJvYmplY3QiLCJyZXBsYWNlRGF0ZSIsInV0bV9zb3VyY2UiLCJjbGlja19pZCIsImF4aW9zIiwicHJvY2VzcyIsInBhcmFtcyIsInRoZW4iLCJyZXMiLCJkYXRhIiwic3VjY2VzcyIsIlJvdXRlciIsIm5hbWVDb21wYW55IiwiZGF0ZUFnZ3JlbWVudCIsIm9kIiwiZXJyb3JzIiwidG91Y2hlZCIsInJlcXVpcmVkIiwiRGF0ZU1hc2siLCJQcmljZU1hc2si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QTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBSUU7QUFBSyx1QkFBUyxFQUFDLDBCQUFmO0FBQUEsc0NBQ0U7QUFDRSx5QkFBUyxFQUFDLFdBRFo7QUFFRSxvQkFBSSxFQUFDO0FBRlAseUpBR1ksUUFIWix5SUFJVztBQUFBLHVCQUFNdUUscUVBQVcsRUFBakI7QUFBQSxlQUpYLHVJQUtRLGdDQUxSO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFPRTtBQUFBLDZJQUFvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkE5Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUREO0FBQUE7QUFYSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBa0ZELENBcExEOztHQUFNekQsVTtVQUNXRyxrRDs7O0tBRFhILFU7QUFzTE4sK0RBQWVBLFVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGx5YS1maXppY2hlc2tpeC1saWMuMzljNDRkNTQ1NmM4YzQ3ZDlmOWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcInJlYWN0LWRyb3B6b25lLXVwbG9hZGVyL2Rpc3Qvc3R5bGVzLmNzc1wiO1xyXG5pbXBvcnQgRHJvcHpvbmUgZnJvbSBcInJlYWN0LWRyb3B6b25lLXVwbG9hZGVyXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBEcm9wRmlsZURvYyA9ICh7c2V0RmlsZXN9KSA9PiB7XHJcbiAgY29uc3QgZ2V0VXBsb2FkUGFyYW1zID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHsgdXJsOiAnaHR0cHM6Ly9odHRwYmluLm9yZy9wb3N0JyB9XHJcbiAgfVxyXG4gIFxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmR6dS1pbnB1dExhYmVsJykuaW5uZXJIVE1MID0gJyAnIFxyXG4gIFxyXG4gIH0sW10pXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlU3RhdHVzID0gKHsgbWV0YSB9LCBzdGF0dXMsIGZpbGVzKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhzdGF0dXMsIG1ldGEpXHJcbiAgICAvLyBjb25zb2xlLmxvZyhmaWxlcylcclxuICAgIHNldEZpbGVzKGZpbGVzKVxyXG4gIH1cclxuXHJcbiAgLy8gY29uc3QgaGFuZGxlU3VibWl0ID0gKGZpbGVzLCBhbGxGaWxlcykgPT4ge1xyXG4gIC8vICAgLy8gY29uc29sZS5sb2coZmlsZXMubWFwKGYgPT4gZi5tZXRhKSlcclxuICAvLyAgIGNvbnNvbGUubG9nKGZpbGVzKVxyXG4gIC8vICAgYWxsRmlsZXMuZm9yRWFjaChmID0+IGYucmVtb3ZlKCkpXHJcbiAgLy8gICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gIC8vICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgZmlsZXMpXHJcbiAgLy8gICBmb3JtRGF0YS5hcHBlbmQoJ2lkJywgNjcpXHJcbiAgLy8gICBheGlvcy5nZXQoJ2h0dHA6Ly8xNzguMTcwLjIyMS40Ni9hcGkvdXBsb2FkLnBocCcsIGZvcm1EYXRhKVxyXG4gIC8vICAgICAudGhlbihyZXM9PiB7XHJcbiAgLy8gICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gIC8vICAgICB9KVxyXG4gIC8vIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxEcm9wem9uZVxyXG4gICAgICBvbkNoYW5nZVN0YXR1cz17aGFuZGxlQ2hhbmdlU3RhdHVzfVxyXG4gICAgICBpbnB1dENvbnRlbnQ9J9CY0L3RhNC+0YDQvNCw0YbQuNGPINC4INCU0L7QutGD0LzQtdC90YLRiyDQviDQtNC+0LvQs9C1ICjQlNC+0LrRg9C80LXQvdGCINC4L9C40LvQuCDRgdC/0L7Qu9C90LjRgtC10LvRjNC90LDRjyDQvdCw0LTQv9C40YHRjCDQuC/QuNC70Lgg0JjRgdC/0L7Qu9C90LjRgtC10LvRjNC90YvQuSDQu9C40YHRgidcclxuICAgICAgaW5wdXRXaXRoRmlsZXNDb250ZW50PSfQlNC+0LHQsNCy0LjRgtGMINC10YnQtSdcclxuICAgICAgbWF4RmlsZXM9ezV9XHJcbiAgICAgIC8vIG1heFNpemVCeXRlcz17NTAwMDAwfVxyXG4gICAgICAvLyBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxyXG4gICAgICBzdHlsZXM9e3sgZHJvcHpvbmU6IHsgbWluSGVpZ2h0OiAyMDAsIG1heEhlaWdodDogMjUwLCBmb250U2l6ZToxMiB9IH19XHJcbiAgICAvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRHJvcEZpbGVEb2MiLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQge2ZpenNlcnZpY2UsIGp1cnNlcnZpY2V9IGZyb20gXCIuLi8uLi9kZWZhdWx0cy9maXpzZXJ2aWNlXCJcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5pbXBvcnQgUm91dGVyLCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQge0Zvcm1paywgRm9ybSwgRmllbGR9IGZyb20gJ2Zvcm1payc7XHJcbmltcG9ydCB7cmVxdWlyZWR9IGZyb20gXCIuLi8uLi9kZWZhdWx0cy92YWxpZGF0aW9uc1wiXHJcbmltcG9ydCBEcm9wem9uZSBmcm9tIFwicmVhY3QtZHJvcHpvbmVcIjtcclxuaW1wb3J0IFByaWNlTWFzayBmcm9tIFwiLi4vTWFza3MvUHJpY2VNYXNrXCJcclxuaW1wb3J0IHtoYW5kbGVGb2N1cywgcmVwbGFjZURhdGUsIHRob3VzYW5kU2VwYXJhdG9yfSBmcm9tIFwiLi4vLi4vZGVmYXVsdHMvZXh0cmFGdW5jdGlvblwiXHJcbmltcG9ydCBEcm9wRmlsZSBmcm9tIFwiLi4vZHJvcEZpbGUvRHJvcEZpbGVcIlxyXG5pbXBvcnQgRGF0ZU1hc2sgZnJvbSBcIi4uL01hc2tzL0RhdGVNYXNrXCJcclxuaW1wb3J0IERyb3BGaWxlRG9jIGZyb20gXCIuLi9kcm9wRmlsZURvYy9kcm9wRmlsZURvY1wiXHJcblxyXG5jb25zdCBTZWNvbmRTdGVwID0gKHtzZXRMb2FkaW5nfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgcGF0aG5hbWUgPSByb3V0ZXIucGF0aG5hbWVcclxuICAvLyBjb25zdCB7aWR9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgY29uc3Qge3N0ZXB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IHt0eXBlfSA9IHJvdXRlci5xdWVyeTtcclxuICBjb25zdCBsaXN0b2ZzZXJ2aWNlID0gcm91dGVyLnBhdGhuYW1lID09PSAnL2RseWEtZml6aWNoZXNraXgtbGljJ1xyXG4gICAgPyBmaXpzZXJ2aWNlXHJcbiAgICA6IGp1cnNlcnZpY2VcclxuICBjb25zdCBsaXN0b2Zjb250aW51ZSA9IHR5cGUgPT09ICfQpNC40Lcg0LvQuNGG0L4nXHJcbiAgICA/IGZpenNlcnZpY2VcclxuICAgIDoganVyc2VydmljZVxyXG4gIGNvbnN0IGZpbmFsTGlzdHMgPSBwYXRobmFtZSA9PT0gJy9jYWJpbmV0L2NvbnRpbnVlJ1xyXG4gICAgPyBsaXN0b2Zjb250aW51ZVxyXG4gICAgOiBsaXN0b2ZzZXJ2aWNlXHJcbiAgY29uc3QgW2lzTWZvLFxyXG4gICAgc2V0SXNNZm9dID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW3NwaGVyZSxcclxuICAgIHNldFNwaGVyZV0gPSB1c2VTdGF0ZSgnMScpXHJcbiAgY29uc3Qgb25DaGFuZ2VTcGhlcmUgPSBlID0+IHtcclxuICAgIGlmIChmaW5hbExpc3RzLmZpbmQoeCA9PiB4LmlkID09PSBlLnRhcmdldC52YWx1ZSkubmFtZS5pbmNsdWRlcygnNTY0NTQ2NDY1NDY1NDY1NDY1JykpIHtcclxuICAgICAgc2V0SXNNZm8odHJ1ZSlcclxuICAgICAgY29uc29sZS5sb2codHJ1ZSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldElzTWZvKGZhbHNlKVxyXG4gICAgfVxyXG5cclxuICAgIHNldFNwaGVyZShlLnRhcmdldC52YWx1ZSlcclxuICB9XHJcbiAgY29uc3QgW2ZpbGVzLFxyXG4gICAgc2V0RmlsZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtmb3JtRGF0YSxcclxuICAgIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgIGlkOiBjb29raWUuZ2V0KCdsZWFkX2lkJykgPT09IHVuZGVmaW5lZFxyXG4gICAgICA/IHJvdXRlci5xdWVyeS5pZFxyXG4gICAgICA6IGNvb2tpZS5nZXQoJ2xlYWRfaWQnKSxcclxuICAgIHRva2VuOiBjb29raWUuZ2V0KCd0b2tlbicpLFxyXG4gICAgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgc3BoZXJlOiAnMScsXHJcbiAgICBhbW91bnQ6ICcnXHJcbiAgfSlcclxuXHJcbiAgY29uc3Qgc3RlcFNlY29uZCA9ICh2YWx1ZXMpID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgIGNvbnNvbGUubG9nKHZhbHVlcylcclxuICAgIC8vIGNvbnNvbGUubG9nKHJlcGxhY2VEYXRlKHZhbHVlcy5hbW91bnQpKVxyXG4gICAgY29uc3Qgc3BoZXJlVmFsID0gZmluYWxMaXN0c1xyXG4gICAgICAuZmluZCh4ID0+IHguaWQgPT09IHNwaGVyZSlcclxuICAgICAgLm5hbWVcclxuICAgIGNvbnN0IG9iamVjdCA9IHtcclxuICAgICAgaWQ6IHZhbHVlcy5pZCxcclxuICAgICAgdG9rZW46IHZhbHVlcy50b2tlbixcclxuICAgICAgZGVzY3JpcHRpb246IHZhbHVlcy5kZXNjcmlwdGlvbixcclxuICAgICAgc3BoZXJlOiBzcGhlcmVWYWwsXHJcbiAgICAgIGFtb3VudDogcmVwbGFjZURhdGUodmFsdWVzLmFtb3VudClcclxuICAgIH1cclxuICAgIGlmIChjb29raWUuZ2V0KCd1dG1fc291cmNlJykgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBvYmplY3QudXRtX3NvdXJjZSA9IGNvb2tpZS5nZXQoJ3V0bV9zb3VyY2UnKSArIFwiXzJcIlxyXG4gICAgICBvYmplY3QuY2xpY2tfaWQgPSBjb29raWUuZ2V0KCdjbGlja19pZCcpXHJcbiAgICAgIC8vIG9iamVjdC53ZWJJRCA9IGNvb2tpZS5nZXQoJ3dlYl9pZCcpXHJcbiAgICB9XHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS9zdGVwVHdvYCwge3BhcmFtczogb2JqZWN0fSlcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICBpZiAocmVzLmRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgICAgaWYgKHBhdGhuYW1lID09PSAnL2p1cnNlcnZpY2UnKSB7XHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvanVyc2VydmljZT9zdGVwPTMnKVxyXG4gICAgICAgICAgICBjb29raWUuc2V0KCdzdGVwanVyJywgMylcclxuICAgICAgICAgICAgY29va2llLnNldCgnYW1vdW50JywgcmVwbGFjZURhdGUodmFsdWVzLmFtb3VudCkpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAocGF0aG5hbWUgPT09ICcvZGx5YS1maXppY2hlc2tpeC1saWMnKSB7XHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvZGx5YS1maXppY2hlc2tpeC1saWM/c3RlcD0zJylcclxuICAgICAgICAgICAgY29va2llLnNldCgnc3RlcCcsIDMpXHJcbiAgICAgICAgICAgIGNvb2tpZS5zZXQoJ2Ftb3VudCcsIHJlcGxhY2VEYXRlKHZhbHVlcy5hbW91bnQpKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHBhdGhuYW1lID09PSAnL2NhYmluZXQvY29udGludWUnKSB7XHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgICBwYXRobmFtZTogJy9jYWJpbmV0L2NvbnRpbnVlJyxcclxuICAgICAgICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgICAgICAgc3RlcDogMyxcclxuICAgICAgICAgICAgICAgIGlkOiByb3V0ZXIucXVlcnkuaWQsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiB0eXBlLFxyXG4gICAgICAgICAgICAgICAgYW1vdW50OiByZXBsYWNlRGF0ZSh2YWx1ZXMuYW1vdW50KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFyZXMuZGF0YS5zdWNjZXNzKSB7fVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcblxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2Zvcm1fcmVnaXN0ZXInPlxyXG4gICAgICA8Rm9ybWlrXHJcbiAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xyXG4gICAgICAgICAgbmFtZUNvbXBhbnk6IFwiXCIsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgICAgIGRhdGVBZ2dyZW1lbnQ6IFwiXCIsXHJcbiAgICAgICAgICBvZDogXCJcIixcclxuICAgICAgICAgIGFtb3VudDogXCJcIixcclxuICAgICAgICAgIHRva2VuOiBjb29raWUuZ2V0KCd0b2tlbicpLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgb25TdWJtaXQ9XHJcbiAgICAgICAgeyh2YWx1ZXMpID0+IHtzdGVwU2Vjb25kKHZhbHVlcyl9fT5cclxuICAgICAgICB7KHtlcnJvcnMsIHRvdWNoZWQsIHZhbHVlc30pID0+IChcclxuICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVDb21wYW55XCJcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlPXtyZXF1aXJlZH1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0J3QsNC40LzQtdC90L7QstCw0L3QuNC1INC60L7QvNC/0LDQvdC40LhcIlxyXG4gICAgICAgICAgICAgID48L0ZpZWxkPlxyXG4gICAgICAgICAgICAgIHsoZXJyb3JzLm5hbWVDb21wYW55ICYmIHRvdWNoZWQubmFtZUNvbXBhbnkpXHJcbiAgICAgICAgICAgICAgICA/IDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPntlcnJvcnMubmFtZUNvbXBhbnl9PC9wPlxyXG4gICAgICAgICAgICAgICAgOiA8cCBjbGFzc05hbWU9Jyc+PC9wPn1cclxuICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZT17cmVxdWlyZWR9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCe0L/QuNGB0LDQvdC40LUg0YHQv9C+0YDQsFwiIC8+XHJcbiAgICAgICAgICAgICAgeyhlcnJvcnMuZGVzY3JpcHRpb24gJiYgdG91Y2hlZC5kZXNjcmlwdGlvbilcclxuICAgICAgICAgICAgICAgID8gPHAgY2xhc3NOYW1lPSd0ZXh0LWRhbmdlcic+e2Vycm9ycy5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICA6IDxwIGNsYXNzTmFtZT0nJz48L3A+fVxyXG4gICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgbmFtZT0nZGF0ZUFnZ3JlbWVudCdcclxuICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZT17cmVxdWlyZWR9XHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0RhdGVNYXNrfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J9CU0LDRgtCwINC00L7Qs9C+0LLQvtGA0LAgKNCU0JQu0JzQnC7Qk9CT0JPQkyknIC8+ICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHsoZXJyb3JzLmRhdGVBZ2dyZW1lbnQgJiYgdG91Y2hlZC5kYXRlQWdncmVtZW50KVxyXG4gICAgICAgICAgICAgICAgPyA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz57ZXJyb3JzLmRhdGVBZ2dyZW1lbnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgOiA8cCBjbGFzc05hbWU9Jyc+PC9wPn1cclxuICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJvZFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlPXtyZXF1aXJlZH1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0J7QlFwiLz5cclxuICAgICAgICAgICAgICB7KGVycm9ycy5vZCAmJiB0b3VjaGVkLm9kKVxyXG4gICAgICAgICAgICAgICAgPyA8cCBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz57ZXJyb3JzLm9kfTwvcD5cclxuICAgICAgICAgICAgICAgIDogPHAgY2xhc3NOYW1lPScnPjwvcD59XHJcbiAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdhbW91bnQnXHJcbiAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU9e3JlcXVpcmVkfVxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtQcmljZU1hc2t9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCh0YPQvNC80LAg0Log0LLQvtC30LLRgNCw0YLRg1wiLz5cclxuICAgICAgICAgICAgICB7KGVycm9ycy5hbW91bnQgJiYgdG91Y2hlZC5hbW91bnQpXHJcbiAgICAgICAgICAgICAgICA/IDxwIGNsYXNzTmFtZT0ndGV4dC1kYW5nZXInPntlcnJvcnMuYW1vdW50fTwvcD5cclxuICAgICAgICAgICAgICAgIDogPHAgY2xhc3NOYW1lPScnPjwvcD59XHJcbiAgICAgICAgICAgIDxEcm9wRmlsZSBzZXRGaWxlcz17c2V0RmlsZXN9Lz5cclxuICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgIDxEcm9wRmlsZURvYyBzZXRGaWxlcz17c2V0RmlsZXN9Lz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpcnN0c3RlcF9iYW5uZXInPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaXJzdHN0ZXBfYmFubmVyLS1pbWcnPlxyXG4gICAgICAgICAgICAgICAgPGltZyBhbHQ9J2ltYWdlJyBjbGFzc05hbWU9J3NlY29uZHN0ZXAnIHNyYz0nL2ltZy9mb3JtL3NlY29uZHN0ZXAucG5nJy8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpcnN0c3RlcF9iYW5uZXItLWJ1dHRvbic+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzaW5nbGVidG4nXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdidXR0b24nXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUZvY3VzKCl9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPSfQlNCw0LvQtdC1Jy8+XHJcbiAgICAgICAgICAgICAgICA8Yj7QodC90LDRh9Cw0LvQsCDRgNC10LfRg9C70YzRgtCw0YI8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAg0L/QvtGC0L7QvCDQvtC/0LvQsNGC0LA8L2I+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgPC9Gb3JtaWs+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlY29uZFN0ZXAiXSwic291cmNlUm9vdCI6IiJ9