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
        maxHeight: 250
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kcm9wRmlsZURvYy9kcm9wRmlsZURvYy5qcyJdLCJuYW1lcyI6WyJEcm9wRmlsZURvYyIsInNldEZpbGVzIiwiZ2V0VXBsb2FkUGFyYW1zIiwidXJsIiwidXNlRWZmZWN0IiwiaGFuZGxlQ2hhbmdlU3RhdHVzIiwic3RhdHVzIiwiZmlsZXMiLCJtZXRhIiwiY29uc29sZSIsImxvZyIsImRyb3B6b25lIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFnQjtBQUFBOztBQUFBLE1BQWRDLFFBQWMsUUFBZEEsUUFBYzs7QUFDbEMsTUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCLFdBQU87QUFBRUMsU0FBRyxFQUFFO0FBQVAsS0FBUDtBQUNELEdBRkQ7O0FBSUFDLGtEQUFTLENBQUMsWUFBSSxDQUNaO0FBRUQsR0FIUSxFQUdQLEVBSE8sQ0FBVDs7QUFJQSxNQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLFFBQVdDLE1BQVgsRUFBbUJDLEtBQW5CLEVBQTZCO0FBQUEsUUFBMUJDLElBQTBCLFNBQTFCQSxJQUEwQjtBQUN0REMsV0FBTyxDQUFDQyxHQUFSLENBQVlKLE1BQVosRUFBb0JFLElBQXBCLEVBRHNELENBRXREOztBQUNBUCxZQUFRLENBQUNNLEtBQUQsQ0FBUjtBQUNELEdBSkQsQ0FUa0MsQ0FlbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxzQkFDRSw4REFBQyxnRUFBRDtBQUNFLGtCQUFjLEVBQUVGLGtCQURsQjtBQUVFLGdCQUFZLEVBQUMsZ2ZBRmY7QUFHRSx5QkFBcUIsRUFBQyxxRUFIeEI7QUFJRSxZQUFRLEVBQUUsQ0FKWixDQUtFO0FBQ0E7QUFORjtBQU9FLFVBQU0sRUFBRTtBQUFFTSxjQUFRLEVBQUU7QUFBRUMsaUJBQVMsRUFBRSxHQUFiO0FBQWtCQyxpQkFBUyxFQUFFO0FBQTdCO0FBQVo7QUFQVjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFXRCxDQXZDRDs7R0FBTWIsVzs7S0FBQUEsVztBQXlDTiwrREFBZUEsV0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kbHlhLWZpemljaGVza2l4LWxpYy5mNjA2MDJlNTI3NjAxZmY3MmYyMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwicmVhY3QtZHJvcHpvbmUtdXBsb2FkZXIvZGlzdC9zdHlsZXMuY3NzXCI7XHJcbmltcG9ydCBEcm9wem9uZSBmcm9tIFwicmVhY3QtZHJvcHpvbmUtdXBsb2FkZXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IERyb3BGaWxlRG9jID0gKHtzZXRGaWxlc30pID0+IHtcclxuICBjb25zdCBnZXRVcGxvYWRQYXJhbXMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4geyB1cmw6ICdodHRwczovL2h0dHBiaW4ub3JnL3Bvc3QnIH1cclxuICB9XHJcbiAgXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHp1LWlucHV0TGFiZWwnKS5pbm5lckhUTUwgPSAnICcgXHJcbiAgXHJcbiAgfSxbXSlcclxuICBjb25zdCBoYW5kbGVDaGFuZ2VTdGF0dXMgPSAoeyBtZXRhIH0sIHN0YXR1cywgZmlsZXMpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHN0YXR1cywgbWV0YSlcclxuICAgIC8vIGNvbnNvbGUubG9nKGZpbGVzKVxyXG4gICAgc2V0RmlsZXMoZmlsZXMpXHJcbiAgfVxyXG5cclxuICAvLyBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZmlsZXMsIGFsbEZpbGVzKSA9PiB7XHJcbiAgLy8gICAvLyBjb25zb2xlLmxvZyhmaWxlcy5tYXAoZiA9PiBmLm1ldGEpKVxyXG4gIC8vICAgY29uc29sZS5sb2coZmlsZXMpXHJcbiAgLy8gICBhbGxGaWxlcy5mb3JFYWNoKGYgPT4gZi5yZW1vdmUoKSlcclxuICAvLyAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgLy8gICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBmaWxlcylcclxuICAvLyAgIGZvcm1EYXRhLmFwcGVuZCgnaWQnLCA2NylcclxuICAvLyAgIGF4aW9zLmdldCgnaHR0cDovLzE3OC4xNzAuMjIxLjQ2L2FwaS91cGxvYWQucGhwJywgZm9ybURhdGEpXHJcbiAgLy8gICAgIC50aGVuKHJlcz0+IHtcclxuICAvLyAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgLy8gICAgIH0pXHJcbiAgLy8gfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPERyb3B6b25lXHJcbiAgICAgIG9uQ2hhbmdlU3RhdHVzPXtoYW5kbGVDaGFuZ2VTdGF0dXN9XHJcbiAgICAgIGlucHV0Q29udGVudD0n0JjQvdGE0L7RgNC80LDRhtC40Y8g0Lgg0JTQvtC60YPQvNC10L3RgtGLINC+INC00L7Qu9Cz0LUgKNCU0L7QutGD0LzQtdC90YIg0Lgv0LjQu9C4INGB0L/QvtC70L3QuNGC0LXQu9GM0L3QsNGPINC90LDQtNC/0LjRgdGMINC4L9C40LvQuCDQmNGB0L/QvtC70L3QuNGC0LXQu9GM0L3Ri9C5INC70LjRgdGCJ1xyXG4gICAgICBpbnB1dFdpdGhGaWxlc0NvbnRlbnQ9J9CU0L7QsdCw0LLQuNGC0Ywg0LXRidC1J1xyXG4gICAgICBtYXhGaWxlcz17NX1cclxuICAgICAgLy8gbWF4U2l6ZUJ5dGVzPXs1MDAwMDB9XHJcbiAgICAgIC8vIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XHJcbiAgICAgIHN0eWxlcz17eyBkcm9wem9uZTogeyBtaW5IZWlnaHQ6IDIwMCwgbWF4SGVpZ2h0OiAyNTAgfSB9fVxyXG4gICAgLz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERyb3BGaWxlRG9jIl0sInNvdXJjZVJvb3QiOiIifQ==