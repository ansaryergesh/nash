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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kcm9wRmlsZURvYy9kcm9wRmlsZURvYy5qcyJdLCJuYW1lcyI6WyJEcm9wRmlsZURvYyIsInNldEZpbGVzIiwiZ2V0VXBsb2FkUGFyYW1zIiwidXJsIiwidXNlRWZmZWN0IiwiaGFuZGxlQ2hhbmdlU3RhdHVzIiwic3RhdHVzIiwiZmlsZXMiLCJtZXRhIiwiY29uc29sZSIsImxvZyIsImRyb3B6b25lIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwiZm9udFNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQWdCO0FBQUE7O0FBQUEsTUFBZEMsUUFBYyxRQUFkQSxRQUFjOztBQUNsQyxNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDNUIsV0FBTztBQUFFQyxTQUFHLEVBQUU7QUFBUCxLQUFQO0FBQ0QsR0FGRDs7QUFJQUMsa0RBQVMsQ0FBQyxZQUFJLENBQ1o7QUFFRCxHQUhRLEVBR1AsRUFITyxDQUFUOztBQUlBLE1BQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsUUFBV0MsTUFBWCxFQUFtQkMsS0FBbkIsRUFBNkI7QUFBQSxRQUExQkMsSUFBMEIsU0FBMUJBLElBQTBCO0FBQ3REQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUosTUFBWixFQUFvQkUsSUFBcEIsRUFEc0QsQ0FFdEQ7O0FBQ0FQLFlBQVEsQ0FBQ00sS0FBRCxDQUFSO0FBQ0QsR0FKRCxDQVRrQyxDQWVsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLHNCQUNFLDhEQUFDLGdFQUFEO0FBQ0Usa0JBQWMsRUFBRUYsa0JBRGxCO0FBRUUsZ0JBQVksRUFBQyxnZkFGZjtBQUdFLHlCQUFxQixFQUFDLHFFQUh4QjtBQUlFLFlBQVEsRUFBRSxDQUpaLENBS0U7QUFDQTtBQU5GO0FBT0UsVUFBTSxFQUFFO0FBQUVNLGNBQVEsRUFBRTtBQUFFQyxpQkFBUyxFQUFFLEdBQWI7QUFBa0JDLGlCQUFTLEVBQUUsR0FBN0I7QUFBa0NDLGdCQUFRLEVBQUM7QUFBM0M7QUFBWjtBQVBWO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVdELENBdkNEOztHQUFNZCxXOztLQUFBQSxXO0FBeUNOLCtEQUFlQSxXQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RseWEtZml6aWNoZXNraXgtbGljLjM1NzdhZDU5MDhiNmE3MmY3ZWMyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJyZWFjdC1kcm9wem9uZS11cGxvYWRlci9kaXN0L3N0eWxlcy5jc3NcIjtcclxuaW1wb3J0IERyb3B6b25lIGZyb20gXCJyZWFjdC1kcm9wem9uZS11cGxvYWRlclwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgRHJvcEZpbGVEb2MgPSAoe3NldEZpbGVzfSkgPT4ge1xyXG4gIGNvbnN0IGdldFVwbG9hZFBhcmFtcyA9ICgpID0+IHtcclxuICAgIHJldHVybiB7IHVybDogJ2h0dHBzOi8vaHR0cGJpbi5vcmcvcG9zdCcgfVxyXG4gIH1cclxuICBcclxuICB1c2VFZmZlY3QoKCk9PntcclxuICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kenUtaW5wdXRMYWJlbCcpLmlubmVySFRNTCA9ICcgJyBcclxuICBcclxuICB9LFtdKVxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVN0YXR1cyA9ICh7IG1ldGEgfSwgc3RhdHVzLCBmaWxlcykgPT4ge1xyXG4gICAgY29uc29sZS5sb2coc3RhdHVzLCBtZXRhKVxyXG4gICAgLy8gY29uc29sZS5sb2coZmlsZXMpXHJcbiAgICBzZXRGaWxlcyhmaWxlcylcclxuICB9XHJcblxyXG4gIC8vIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChmaWxlcywgYWxsRmlsZXMpID0+IHtcclxuICAvLyAgIC8vIGNvbnNvbGUubG9nKGZpbGVzLm1hcChmID0+IGYubWV0YSkpXHJcbiAgLy8gICBjb25zb2xlLmxvZyhmaWxlcylcclxuICAvLyAgIGFsbEZpbGVzLmZvckVhY2goZiA9PiBmLnJlbW92ZSgpKVxyXG4gIC8vICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAvLyAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGZpbGVzKVxyXG4gIC8vICAgZm9ybURhdGEuYXBwZW5kKCdpZCcsIDY3KVxyXG4gIC8vICAgYXhpb3MuZ2V0KCdodHRwOi8vMTc4LjE3MC4yMjEuNDYvYXBpL3VwbG9hZC5waHAnLCBmb3JtRGF0YSlcclxuICAvLyAgICAgLnRoZW4ocmVzPT4ge1xyXG4gIC8vICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAvLyAgICAgfSlcclxuICAvLyB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RHJvcHpvbmVcclxuICAgICAgb25DaGFuZ2VTdGF0dXM9e2hhbmRsZUNoYW5nZVN0YXR1c31cclxuICAgICAgaW5wdXRDb250ZW50PSfQmNC90YTQvtGA0LzQsNGG0LjRjyDQuCDQlNC+0LrRg9C80LXQvdGC0Ysg0L4g0LTQvtC70LPQtSAo0JTQvtC60YPQvNC10L3RgiDQuC/QuNC70Lgg0YHQv9C+0LvQvdC40YLQtdC70YzQvdCw0Y8g0L3QsNC00L/QuNGB0Ywg0Lgv0LjQu9C4INCY0YHQv9C+0LvQvdC40YLQtdC70YzQvdGL0Lkg0LvQuNGB0YInXHJcbiAgICAgIGlucHV0V2l0aEZpbGVzQ29udGVudD0n0JTQvtCx0LDQstC40YLRjCDQtdGJ0LUnXHJcbiAgICAgIG1heEZpbGVzPXs1fVxyXG4gICAgICAvLyBtYXhTaXplQnl0ZXM9ezUwMDAwMH1cclxuICAgICAgLy8gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgc3R5bGVzPXt7IGRyb3B6b25lOiB7IG1pbkhlaWdodDogMjAwLCBtYXhIZWlnaHQ6IDI1MCwgZm9udFNpemU6MTIgfSB9fVxyXG4gICAgLz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERyb3BGaWxlRG9jIl0sInNvdXJjZVJvb3QiOiIifQ==