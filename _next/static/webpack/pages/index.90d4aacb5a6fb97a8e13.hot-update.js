self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_shared_Feedback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/shared/Feedback */ "./components/shared/Feedback.js");
/* harmony import */ var _components_partner_Partner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/partner/Partner */ "./components/partner/Partner.js");
/* harmony import */ var _components_shared_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/shared/Header */ "./components/shared/Header.js");
/* harmony import */ var _components_shared_ModalService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/shared/ModalService */ "./components/shared/ModalService.js");
/* harmony import */ var _components_shared_Nav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/shared/Nav */ "./components/shared/Nav.js");
/* harmony import */ var _components_shared_ServiceList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/shared/ServiceList */ "./components/shared/ServiceList.js");
/* harmony import */ var _defaults_fizservice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../defaults/fizservice */ "./defaults/fizservice.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var _defaults_indexSlider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../defaults/indexSlider */ "./defaults/indexSlider.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "E:\\job\\nashcompany\\pages\\index.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }













function Home() {
  _s();

  var _this = this;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      modal = _useState[0],
      setModal = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(),
      id = _useState2[0],
      setId = _useState2[1];

  var closeModal = function closeModal() {
    setModal(false);
  };

  var routeUslug = function routeUslug() {
    next_router__WEBPACK_IMPORTED_MODULE_11___default().push('/uslugi');
  };

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('fiz'),
      type = _useState3[0],
      setType = _useState3[1];

  var listofservice = type === 'fiz' ? _defaults_fizservice__WEBPACK_IMPORTED_MODULE_10__.fizservice : _defaults_fizservice__WEBPACK_IMPORTED_MODULE_10__.jurservice;
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }]
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "home",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "header",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "bg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_shared_Nav__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("title", {
        children: "Nash Company - \u0420\u0435\u0448\u0430\u0435\u043C\u043E \u0432\u0441\u0435!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "body",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "container",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "body__top",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
            className: "text-center",
            children: "\u0420\u0435\u0448\u0435\u043D\u0438\u0435 \u043B\u044E\u0431\u044B\u0445 \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0437\u0430\u0434\u0430\u0447"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "body__blocks",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_12__.default, _objectSpread(_objectSpread({}, settings), {}, {
              children: _defaults_indexSlider__WEBPACK_IMPORTED_MODULE_13__.sliderWords.map(function (s) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  onClick: function onClick() {
                    return routeUslug();
                  },
                  className: "body__block",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                      children: s.main
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 66,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                      children: s.span
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 67,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 65,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 64,
                  columnNumber: 19
                }, _this);
              })
            }), void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "body__btn"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "body__auction text-center"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "services",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ul", {
            className: "advantage",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
              className: "advantage--item",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                src: "/img/advantage1.svg"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 47
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                children: ["95% \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0432\u044B\u0438\u0433\u0440\u0430\u043D\u043D\u044B\u0445", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 19
                }, this), "\u0434\u0435\u043B"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
              className: "advantage--item",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                src: "/img/advantage2.svg"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 47
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                children: ["\u0411\u043E\u043B\u0435\u0435 10 \u043B\u0435\u0442", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 95,
                  columnNumber: 32
                }, this), "\u043D\u0430 \u0440\u044B\u043D\u043A\u0435 \u0420\u041A"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
              className: "advantage--item",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                src: "/img/advantage3.svg"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 47
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                children: ["\u0420\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u043F\u043E", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 99,
                  columnNumber: 31
                }, this), "\u0432\u0441\u0435\u043C\u0443 \u0420\u041A"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "howwork",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
              className: "text-center",
              children: "\u041A\u0430\u043A \u043C\u044B \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "howwork__lists",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "howwork__list",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  className: "circle_block",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    className: "circle"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 109,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 108,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("b", {
                  children: ["\u0412\u044B \u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442\u0435 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                    className: "d-block",
                    children: "\u0437\u0430\u044F\u0432\u043A\u0443 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 111,
                    columnNumber: 36
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 111,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "howwork__list",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  className: "circle_block",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    className: "circle"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 133,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 132,
                  columnNumber: 17
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("b", {
                  children: ["\u041C\u044B \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u043C ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                    className: "d-block",
                    children: "\u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 135,
                    columnNumber: 35
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 135,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "howwork__list",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  className: "circle_block",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    className: "circle"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 139,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 138,
                  columnNumber: 17
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("b", {
                  children: ["\u0412\u044B \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442\u0435 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                    className: "d-block",
                    children: "\u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442!"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 141,
                    columnNumber: 35
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 141,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 137,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
              children: "\u041D\u0430\u0448\u0438 \u0443\u0441\u043B\u0443\u0433\u0438"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              "class": "wrapper",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                "class": "table basic",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  "class": "price-section"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 147,
                  columnNumber: 12
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  "class": "package-name"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 156,
                  columnNumber: 12
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  "class": "features",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                      "class": "list-name",
                      children: " \u041E\u0442\u0433\u0440\u0430\u0434\u0438\u043C \u043E\u0442 \u043D\u0435\u0437\u0430\u043A\u043E\u043D\u043D\u044B\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 \u041C\u0424\u041E"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 161,
                      columnNumber: 20
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                      "class": "icon check",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("i", {
                        "class": "fa fa-check"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 162,
                        columnNumber: 45
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 162,
                      columnNumber: 20
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 160,
                    columnNumber: 16
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                      "class": "list-name",
                      children: " \u041E\u0442\u0433\u0440\u0430\u0434\u0438\u043C \u043E\u0442 \u043D\u0435\u0437\u0430\u043A\u043E\u043D\u043D\u044B\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 \u041A\u043E\u043B\u043B\u0435\u043A\u0442\u043E\u0440\u043E\u0432"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 165,
                      columnNumber: 20
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                      "class": "icon check",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("i", {
                        "class": "fa fa-check"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 166,
                        columnNumber: 45
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 166,
                      columnNumber: 20
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 164,
                    columnNumber: 16
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                      "class": "list-name",
                      children: "\u041E\u0442\u0433\u0440\u0430\u0434\u0438\u043C \u043E\u0442 \u043D\u0435\u0437\u0430\u043A\u043E\u043D\u043D\u044B\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 \u0427\u0421\u0418"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 169,
                      columnNumber: 20
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                      "class": "icon check",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("i", {
                        "class": "fa fa-check"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 170,
                        columnNumber: 45
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 170,
                      columnNumber: 20
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 168,
                    columnNumber: 16
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    "class": "btn",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
                      children: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 176,
                      columnNumber: 33
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 176,
                    columnNumber: 16
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 159,
                  columnNumber: 12
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 146,
                columnNumber: 8
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                "class": "table Ultimate",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  "class": "price-section"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 181,
                  columnNumber: 12
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  "class": "package-name"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 191,
                  columnNumber: 12
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  "class": "features",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                      "class": "list-name",
                      children: "\u041E\u0442\u043C\u0435\u043D\u0438\u043C \u0438\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043B\u0438\u0441\u0442/\u043D\u0430\u0434\u043F\u0438\u0441\u044C"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 196,
                      columnNumber: 20
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                      "class": "icon check",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("i", {
                        "class": "fa fa-check"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 197,
                        columnNumber: 45
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 197,
                      columnNumber: 20
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 195,
                    columnNumber: 16
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                      "class": "list-name",
                      children: "\u0423\u043B\u0443\u0447\u0448\u0430\u0435\u043C \u043A\u0440\u0435\u0434\u0438\u0442\u043D\u0443\u044E \u0438\u0441\u0442\u043E\u0440\u0438\u044E"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 200,
                      columnNumber: 20
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                      "class": "icon check",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("i", {
                        "class": "fa fa-check"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 201,
                        columnNumber: 45
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 201,
                      columnNumber: 20
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 199,
                    columnNumber: 16
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                      "class": "list-name",
                      children: "\u041F\u0438\u0441\u044C\u043C\u043E \u043E \u043D\u0430\u0440\u0443\u0448\u0435\u043D\u0438\u0438 \u0417\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430 \u0420\u041A \u0432 \u0410\u0424\u0424\u0420"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 204,
                      columnNumber: 20
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                      "class": "icon check",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("i", {
                        "class": "fa fa-check"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 205,
                        columnNumber: 45
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 205,
                      columnNumber: 20
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 203,
                    columnNumber: 16
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                      "class": "list-name",
                      children: "\u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u043C \u0418\u0421\u041A"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 208,
                      columnNumber: 20
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                      "class": "icon check",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("i", {
                        "class": "fa fa-check"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 209,
                        columnNumber: 45
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 209,
                      columnNumber: 20
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 207,
                    columnNumber: 16
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                      "class": "list-name",
                      children: "\u041F\u0438\u0441\u044C\u043C\u043E \u0432 \u042E\u0441\u0442\u0438\u0446\u0438\u044E"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 212,
                      columnNumber: 20
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                      "class": "icon check",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("i", {
                        "class": "fa fa-check"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 213,
                        columnNumber: 45
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 213,
                      columnNumber: 20
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 211,
                    columnNumber: 16
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                      "class": "list-name",
                      children: "\u041F\u0438\u0441\u044C\u043C\u043E \u0432 \u043F\u0430\u043B\u0430\u0442\u0443 \u0427\u0421\u0418"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 216,
                      columnNumber: 20
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                      "class": "icon check",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("i", {
                        "class": "fa fa-check"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 217,
                        columnNumber: 45
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 217,
                      columnNumber: 20
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 215,
                    columnNumber: 16
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                      "class": "list-name",
                      children: "\u0421\u0443\u0434 \u0441 \u041C\u0424\u041E"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 220,
                      columnNumber: 20
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                      "class": "icon check",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("i", {
                        "class": "fa fa-check"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 221,
                        columnNumber: 45
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 221,
                      columnNumber: 20
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 219,
                    columnNumber: 16
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    "class": "btn",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
                      children: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 223,
                      columnNumber: 33
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 223,
                    columnNumber: 16
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 194,
                  columnNumber: 12
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 180,
                columnNumber: 8
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "whyus",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
                children: "\u041F\u043E\u0447\u0435\u043C\u0443 \u043C\u044B?"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 229,
                columnNumber: 15
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "why_blocks",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  className: "why_block",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                    src: "/img/why/why1.png"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 233,
                    columnNumber: 19
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                    children: "\u041F\u043E\u043B\u0443\u0447\u0438 \u0443\u0441\u043B\u0443\u0433\u0443 \u043E\u043D\u043B\u0430\u0439\u043D"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 234,
                    columnNumber: 19
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 232,
                  columnNumber: 17
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  className: "why_block",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                    src: "/img/why/why2.png"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 237,
                    columnNumber: 17
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                    children: "\u0411\u043E\u043B\u044C\u0448\u043E\u0439 \u0441\u043F\u0435\u043A\u0442\u0440 \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0443\u0441\u043B\u0443\u0433"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 238,
                    columnNumber: 19
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 236,
                  columnNumber: 17
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  className: "why_block",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                    src: "/img/why/why3.png"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 241,
                    columnNumber: 17
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                    children: "\u041C\u044B \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u043D\u0430 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 242,
                    columnNumber: 19
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 240,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 230,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 227,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "body",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "body__btn",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                className: "text-center",
                onClick: function onClick() {
                  return next_router__WEBPACK_IMPORTED_MODULE_11___default().push('/dlya-fizicheskix-lic');
                },
                children: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0443\u0441\u043B\u0443\u0433\u0443 \u043E\u043D\u043B\u0430\u0439\u043D"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 251,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 250,
              columnNumber: 13
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "body__auction text-center",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                children: ["\u0410\u043A\u0446\u0438\u044F", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("b", {
                  children: "-50% \u0441\u043A\u0438\u0434\u043A\u0430 \u043D\u0430 \u0432\u0441\u0435 \u0443\u0441\u043B\u0443\u0433\u0438"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 256,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 255,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 254,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 249,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "about",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "practice",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "practice--top",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  className: "practice_item",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                    children: ["\u0417\u0430 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("b", {
                      children: "10 \u043B\u0435\u0442"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 266,
                      columnNumber: 18
                    }, this), " \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0438"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 265,
                    columnNumber: 13
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 264,
                  columnNumber: 11
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  className: "practice_item",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
                    children: "6083"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 270,
                    columnNumber: 15
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                    children: "\u0420\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u0434\u0435\u043B"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 271,
                    columnNumber: 15
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                    src: "/img/bigPath.svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 272,
                    columnNumber: 15
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 269,
                  columnNumber: 13
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  className: "practice_item",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
                    children: "95%"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 276,
                    columnNumber: 15
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                    children: "\u041F\u043E\u0431\u0435\u0434 \u0432 \u0434\u0435\u043B\u0430\u0445"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 277,
                    columnNumber: 15
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                    src: "/img/bigPath.svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 278,
                    columnNumber: 15
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 275,
                  columnNumber: 13
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 263,
                columnNumber: 11
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 262,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 261,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_shared_Feedback__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 283,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "services--header",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
              className: type === 'fiz' && 'active',
              onClick: function onClick() {
                return setType('fiz');
              },
              children: "\u0424\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043B\u0438\u0446\u0430"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 285,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
              className: type === 'jur' && 'active',
              onClick: function onClick() {
                return setType('jur');
              },
              children: "\u042E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043B\u0438\u0446\u0430"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 286,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 284,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_shared_ServiceList__WEBPACK_IMPORTED_MODULE_9__.default, {
            list: listofservice,
            type: type,
            setModal: setModal,
            setId: setId
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 288,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_shared_ModalService__WEBPACK_IMPORTED_MODULE_7__.default, {
            isModalOpen: modal,
            closeModal: closeModal,
            id: id,
            type: type
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 293,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 5
  }, this);
}

_s(Home, "UqtiBtqY3WHyxiR28BOTQoxgvDo=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwibW9kYWwiLCJzZXRNb2RhbCIsImlkIiwic2V0SWQiLCJjbG9zZU1vZGFsIiwicm91dGVVc2x1ZyIsIlJvdXRlciIsInR5cGUiLCJzZXRUeXBlIiwibGlzdG9mc2VydmljZSIsImZpenNlcnZpY2UiLCJqdXJzZXJ2aWNlIiwic2V0dGluZ3MiLCJkb3RzIiwiaW5maW5pdGUiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzbGlkZXJXb3JkcyIsInMiLCJtYWluIiwic3BhbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2UsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUFBLGtCQUVmQywrQ0FBUSxDQUFDLEtBQUQsQ0FGTztBQUFBLE1BQ3RCQyxLQURzQjtBQUFBLE1BRTNCQyxRQUYyQjs7QUFBQSxtQkFJbEJGLCtDQUFRLEVBSlU7QUFBQSxNQUd0QkcsRUFIc0I7QUFBQSxNQUkzQkMsS0FKMkI7O0FBSzdCLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDdkJILFlBQVEsQ0FBQyxLQUFELENBQVI7QUFDRCxHQUZEOztBQUlBLE1BQU1JLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDdkJDLDREQUFBLENBQVksU0FBWjtBQUNELEdBRkQ7O0FBVDZCLG1CQWFoQlAsK0NBQVEsQ0FBQyxLQUFELENBYlE7QUFBQSxNQVl0QlEsSUFac0I7QUFBQSxNQWEzQkMsT0FiMkI7O0FBYzdCLE1BQU1DLGFBQWEsR0FBR0YsSUFBSSxLQUFLLEtBQVQsR0FDbEJHLDZEQURrQixHQUVsQkMsNkRB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O0FBQUE7QUFBQSxnQkE3QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBbVFEOztHQWxTdUJULEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTBkNGFhY2I1YTZmYjk3YThlMTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEZlZWRiYWNrIGZyb20gJy4uL2NvbXBvbmVudHMvc2hhcmVkL0ZlZWRiYWNrJ1xuaW1wb3J0IFBhcnRuZXIgZnJvbSAnLi4vY29tcG9uZW50cy9wYXJ0bmVyL1BhcnRuZXInXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvc2hhcmVkL0hlYWRlcidcbmltcG9ydCBNb2RhbFNlcnZpY2UgZnJvbSAnLi4vY29tcG9uZW50cy9zaGFyZWQvTW9kYWxTZXJ2aWNlJ1xuaW1wb3J0IE5hdiBmcm9tICcuLi9jb21wb25lbnRzL3NoYXJlZC9OYXYnXG5pbXBvcnQgU2VydmljZUxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9zaGFyZWQvU2VydmljZUxpc3QnXG5pbXBvcnQge2ZpenNlcnZpY2UsIGp1cnNlcnZpY2V9IGZyb20gJy4uL2RlZmF1bHRzL2ZpenNlcnZpY2UnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcbmltcG9ydCB7IHNsaWRlcldvcmRzIH0gZnJvbSAnLi4vZGVmYXVsdHMvaW5kZXhTbGlkZXInXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbbW9kYWwsXG4gICAgc2V0TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtpZCxcbiAgICBzZXRJZF0gPSB1c2VTdGF0ZSgpXG4gIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gICAgc2V0TW9kYWwoZmFsc2UpXG4gIH1cblxuICBjb25zdCByb3V0ZVVzbHVnID0gKCkgPT4ge1xuICAgIFJvdXRlci5wdXNoKCcvdXNsdWdpJylcbiAgfVxuICBjb25zdCBbdHlwZSxcbiAgICBzZXRUeXBlXSA9IHVzZVN0YXRlKCdmaXonKVxuICBjb25zdCBsaXN0b2ZzZXJ2aWNlID0gdHlwZSA9PT0gJ2ZpeidcbiAgICA/IGZpenNlcnZpY2VcbiAgICA6IGp1cnNlcnZpY2VcbiAgICBjb25zdCBzZXR0aW5ncyA9IHtcbiAgICAgIGRvdHM6IHRydWUsXG4gICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgIHNwZWVkOiA1MDAsXG4gICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgIHJlc3BvbnNpdmU6IFt7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDFcbiAgICAgICAgfVxuICAgICAgfV1cbiAgICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2hvbWUnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2hlYWRlcic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZyc+PC9kaXY+XG4gICAgICAgIDxOYXYvPlxuICAgICAgPC9kaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlxuICAgICAgICAgIE5hc2ggQ29tcGFueSAtINCg0LXRiNCw0LXQvNC+INCy0YHQtSFcbiAgICAgICAgPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIFxuICAgICAgey8qIDwvPiAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdib2R5Jz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JvZHlfX3RvcCc+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+0KDQtdGI0LXQvdC40LUg0LvRjtCx0YvRhSDRjtGA0LjQtNC40YfQtdGB0LrQuNGFINC30LDQtNCw0Yc8L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JvZHlfX2Jsb2Nrcyc+XG4gICAgICAgICAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfT5cbiAgICAgICAgICAgICAgICB7c2xpZGVyV29yZHMubWFwKHM9PiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHJvdXRlVXNsdWcoKX0gY2xhc3NOYW1lPSdib2R5X19ibG9jayc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3MubWFpbn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHA+e3Muc3Bhbn08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvU2xpZGVyPlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JvZHlfX2J0bic+XG4gICAgICAgICAgICAgIHsvKiA8cCBjbGFzc05hbWU9J3RleHQtY2VudGVyJyBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaCgnL3VzbHVnaScpfT7Qn9C+0LvRg9GH0LjRgtGMIDUwJSDRgdC60LjQtNC60Lg8L3A+ICovfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib2R5X19hdWN0aW9uIHRleHQtY2VudGVyJz5cbiAgICAgICAgICAgICAgey8qIDxzcGFuPtCQ0LrRhtC40Y8gKi99XG4gICAgICAgICAgICAgICAgey8qIDxiPi01MCUg0YHQutC40LTQutCwINC90LAg0LLRgdC1INGD0YHQu9GD0LPQuDwvYj4gKi99XG4gICAgICAgICAgICAgIHsvKiA8L3NwYW4+ICovfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZXJ2aWNlcyc+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdhZHZhbnRhZ2UnPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdhZHZhbnRhZ2UtLWl0ZW0nPjxpbWcgc3JjPScvaW1nL2FkdmFudGFnZTEuc3ZnJy8+XG4gICAgICAgICAgICAgICAgPHA+OTUlINGD0YHQv9C10YjQvdC+INCy0YvQuNCz0YDQsNC90L3Ri9GFXG4gICAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICAgINC00LXQuzwvcD5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nYWR2YW50YWdlLS1pdGVtJz48aW1nIHNyYz0nL2ltZy9hZHZhbnRhZ2UyLnN2ZycvPlxuICAgICAgICAgICAgICAgIDxwPtCR0L7Qu9C10LUgMTAg0LvQtdGCPGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgICDQvdCwINGA0YvQvdC60LUg0KDQmjwvcD5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nYWR2YW50YWdlLS1pdGVtJz48aW1nIHNyYz0nL2ltZy9hZHZhbnRhZ2UzLnN2ZycvPlxuICAgICAgICAgICAgICAgIDxwPtCg0LDQsdC+0YLQsNC10Lwg0L/Qvjxicj48L2JyPlxuICAgICAgICAgICAgICAgICAg0LLRgdC10LzRgyDQoNCaPC9wPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdob3d3b3JrJz5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPtCa0LDQuiDQvNGLINGA0LDQsdC+0YLQsNC10Lw/PC9oMj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hvd3dvcmtfX2xpc3RzJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naG93d29ya19fbGlzdCc+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaXJjbGVfYmxvY2snPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2lyY2xlJz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGI+0JLRiyDQvtGB0YLQsNCy0LvRj9C10YLQtSA8cCBjbGFzc05hbWU9J2QtYmxvY2snPtC30LDRj9Cy0LrRgyDQvdCwINGB0LDQudGC0LU8L3A+PC9iPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0naG93d29ya19fbGlzdCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NpcmNsZV9ibG9jayc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaXJjbGUnPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8Yj7QktCw0Lwg0LfQstC+0L3QuNGCINCu0YDQuNGB0YIgPHNwYW4+0Lgg0LrQvtC90YHRg9C70YzRgtC40YDRg9C10YI8L3NwYW4+IDwvYj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naG93d29ya19fbGlzdCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NpcmNsZV9ibG9jayc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaXJjbGUnPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8Yj7QrtGA0LjRgdGCINGB0L7RgdGC0LDQstC70Y/QtdGCINC40YHQujwvYj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naG93d29ya19fbGlzdCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NpcmNsZV9ibG9jayc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaXJjbGUnPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8Yj7Qo9GH0LDRgdGC0LjQtSDQsiDRgdGD0LTQtTwvYj5cbiAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hvd3dvcmtfX2xpc3QnPiBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2lyY2xlX2Jsb2NrJz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NpcmNsZSc+PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxiPtCc0Ysg0L/RgNC40L3QuNC80LDQtdC8IDxwIGNsYXNzTmFtZT0nZC1ibG9jayc+0L3QtdC+0LHRhdC+0LTQuNC80YvQtSDQtNC10LnRgdGC0LLQuNGPPC9wPjwvYj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naG93d29ya19fbGlzdCc+IFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaXJjbGVfYmxvY2snPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2lyY2xlJz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGI+0JLRiyDQv9C+0LvRg9GH0LDQtdGC0LUgPHAgY2xhc3NOYW1lPSdkLWJsb2NrJz7RgNC10LfRg9C70YzRgtCw0YIhPC9wPjwvYj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxoMj7QndCw0YjQuCDRg9GB0LvRg9Cz0Lg8L2gyPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid3JhcHBlclwiPlxuICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZSBiYXNpY1wiPlxuICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpY2Utc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3M9XCJwcmljZS1hcmVhXCI+XG4gICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyLWFyZWFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0XCI+0YLQs1xuICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJpY2VcIj4wMDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWNrYWdlLW5hbWVcIj5cbiAgICBcbiAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgIDxkaXYgY2xhc3M9XCJmZWF0dXJlc1wiPlxuICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGlzdC1uYW1lXCI+INCe0YLQs9GA0LDQtNC40Lwg0L7RgiDQvdC10LfQsNC60L7QvdC90YvRhSDQtNC10LnRgdGC0LLQuNC5INCc0KTQnjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gY2hlY2tcIj48aSBjbGFzcz1cImZhIGZhLWNoZWNrXCI+PC9pPjwvc3Bhbj5cbiAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaXN0LW5hbWVcIj4g0J7RgtCz0YDQsNC00LjQvCDQvtGCINC90LXQt9Cw0LrQvtC90L3Ri9GFINC00LXQudGB0YLQstC40Lkg0JrQvtC70LvQtdC60YLQvtGA0L7Qsjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gY2hlY2tcIj48aSBjbGFzcz1cImZhIGZhLWNoZWNrXCI+PC9pPjwvc3Bhbj5cbiAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaXN0LW5hbWVcIj7QntGC0LPRgNCw0LTQuNC8INC+0YIg0L3QtdC30LDQutC+0L3QvdGL0YUg0LTQtdC50YHRgtCy0LjQuSDQp9Ch0Jg8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGNoZWNrXCI+PGkgY2xhc3M9XCJmYSBmYS1jaGVja1wiPjwvaT48L3NwYW4+XG4gICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgey8qIDxsaT5cbiAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpc3QtbmFtZVwiPkxpZmV0aW1lIFRlbXBsYXRlIFVwZGF0ZXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGNyb3NzXCI+PGkgY2xhc3M9XCJmYXIgZmEtdGltZXMtY2lyY2xlXCI+PC9pPjwvc3Bhbj5cbiAgICAgICAgICAgICAgIDwvbGk+ICovfVxuICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ0blwiPjxidXR0b24+0J/QvtC70YPRh9C40YLRjDwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgICA8L2Rpdj5cbiAgICAgICA8L2Rpdj5cbiAgICBcbiAgICAgICA8ZGl2IGNsYXNzPVwidGFibGUgVWx0aW1hdGVcIj5cbiAgICAgICAgICAgPGRpdiBjbGFzcz1cInByaWNlLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzPVwicHJpY2UtYXJlYVwiPlxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lci1hcmVhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICDRgtCzXG4gICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcmljZVwiPjIwMDAwPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhY2thZ2UtbmFtZVwiPlxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmVhdHVyZXNcIj5cbiAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpc3QtbmFtZVwiPtCe0YLQvNC10L3QuNC8INC40YHQv9C+0LvQvdC40YLQtdC70YzQvdGL0Lkg0LvQuNGB0YIv0L3QsNC00L/QuNGB0Yw8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGNoZWNrXCI+PGkgY2xhc3M9XCJmYSBmYS1jaGVja1wiPjwvaT48L3NwYW4+XG4gICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGlzdC1uYW1lXCI+0KPQu9GD0YfRiNCw0LXQvCDQutGA0LXQtNC40YLQvdGD0Y4g0LjRgdGC0L7RgNC40Y48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGNoZWNrXCI+PGkgY2xhc3M9XCJmYSBmYS1jaGVja1wiPjwvaT48L3NwYW4+XG4gICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGlzdC1uYW1lXCI+0J/QuNGB0YzQvNC+INC+INC90LDRgNGD0YjQtdC90LjQuCDQl9Cw0LrQvtC90L7QtNCw0YLQtdC70YzRgdGC0LLQsCDQoNCaINCyINCQ0KTQpNCgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBjaGVja1wiPjxpIGNsYXNzPVwiZmEgZmEtY2hlY2tcIj48L2k+PC9zcGFuPlxuICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpc3QtbmFtZVwiPtCf0L7QtNCz0L7RgtC+0LLQuNC8INCY0KHQmjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gY2hlY2tcIj48aSBjbGFzcz1cImZhIGZhLWNoZWNrXCI+PC9pPjwvc3Bhbj5cbiAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaXN0LW5hbWVcIj7Qn9C40YHRjNC80L4g0LIg0K7RgdGC0LjRhtC40Y48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGNoZWNrXCI+PGkgY2xhc3M9XCJmYSBmYS1jaGVja1wiPjwvaT48L3NwYW4+XG4gICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGlzdC1uYW1lXCI+0J/QuNGB0YzQvNC+INCyINC/0LDQu9Cw0YLRgyDQp9Ch0Jg8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGNoZWNrXCI+PGkgY2xhc3M9XCJmYSBmYS1jaGVja1wiPjwvaT48L3NwYW4+XG4gICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGlzdC1uYW1lXCI+0KHRg9C0INGBINCc0KTQnjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gY2hlY2tcIj48aSBjbGFzcz1cImZhIGZhLWNoZWNrXCI+PC9pPjwvc3Bhbj5cbiAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuXCI+PGJ1dHRvbj7Qn9C+0LvRg9GH0LjRgtGMPC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgIDwvZGl2PlxuICAgICAgIDwvZGl2PlxuICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3aHl1cyc+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxoMj7Qn9C+0YfQtdC80YMg0LzRiz88L2gyPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd2h5X2Jsb2Nrcyc+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3doeV9ibG9jayc+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nL2ltZy93aHkvd2h5MS5wbmcnPjwvaW1nPlxuICAgICAgICAgICAgICAgICAgPHA+0J/QvtC70YPRh9C4INGD0YHQu9GD0LPRgyDQvtC90LvQsNC50L08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3doeV9ibG9jayc+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9Jy9pbWcvd2h5L3doeTIucG5nJz48L2ltZz5cbiAgICAgICAgICAgICAgICAgIDxwPtCR0L7Qu9GM0YjQvtC5INGB0L/QtdC60YLRgCDRjtGA0LjQtNC40YfQtdGB0LrQuNGFINGD0YHQu9GD0LM8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3doeV9ibG9jayc+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9Jy9pbWcvd2h5L3doeTMucG5nJz48L2ltZz5cbiAgICAgICAgICAgICAgICAgIDxwPtCc0Ysg0YDQsNCx0L7RgtCw0LXQvCDQvdCwINGA0LXQt9GD0LvRjNGC0LDRgjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm9keSc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm9keV9fYnRuJz5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcicgb25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goJy9kbHlhLWZpemljaGVza2l4LWxpYycpfT7Qn9C+0LvRg9GH0LjRgtGMINGD0YHQu9GD0LPRgyDQvtC90LvQsNC50L08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JvZHlfX2F1Y3Rpb24gdGV4dC1jZW50ZXInPlxuICAgICAgICAgICAgICA8c3Bhbj7QkNC60YbQuNGPXG4gICAgICAgICAgICAgICAgPGI+LTUwJSDRgdC60LjQtNC60LAg0L3QsCDQstGB0LUg0YPRgdC70YPQs9C4PC9iPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWJvdXQnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ByYWN0aWNlJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJhY3RpY2UtLXRvcCc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ByYWN0aWNlX2l0ZW0nPlxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgINCX0LAgPGI+MTAg0LvQtdGCPC9iPiDQv9GA0LDQutGC0LjQutC4XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcmFjdGljZV9pdGVtJz5cbiAgICAgICAgICAgICAgPGgxPjYwODM8L2gxPlxuICAgICAgICAgICAgICA8cD7QoNC10LDQu9C40LfQvtCy0LDQvdC90YvRhSDQtNC10Ls8L3A+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPScvaW1nL2JpZ1BhdGguc3ZnJy8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ByYWN0aWNlX2l0ZW0nPlxuICAgICAgICAgICAgICA8aDE+OTUlPC9oMT5cbiAgICAgICAgICAgICAgPHA+0J/QvtCx0LXQtCDQsiDQtNC10LvQsNGFPC9wPlxuICAgICAgICAgICAgICA8aW1nIHNyYz0nL2ltZy9iaWdQYXRoLnN2ZycvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxGZWVkYmFjayAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlcnZpY2VzLS1oZWFkZXInPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3R5cGUgPT09ICdmaXonICYmICdhY3RpdmUnfSBvbkNsaWNrPXsoKSA9PiBzZXRUeXBlKCdmaXonKX0+0KTQuNC30LjRh9C10YHQutC40LUg0LvQuNGG0LA8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17dHlwZSA9PT0gJ2p1cicgJiYgJ2FjdGl2ZSd9IG9uQ2xpY2s9eygpID0+IHNldFR5cGUoJ2p1cicpfT7QrtGA0LjQtNC40YfQtdGB0LrQuNC1INC70LjRhtCwPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8U2VydmljZUxpc3RcbiAgICAgICAgICAgICAgbGlzdD17bGlzdG9mc2VydmljZX1cbiAgICAgICAgICAgICAgdHlwZT17dHlwZX1cbiAgICAgICAgICAgICAgc2V0TW9kYWw9e3NldE1vZGFsfVxuICAgICAgICAgICAgICBzZXRJZD17c2V0SWR9Lz5cbiAgICAgICAgICAgIDxNb2RhbFNlcnZpY2UgaXNNb2RhbE9wZW49e21vZGFsfSBjbG9zZU1vZGFsPXtjbG9zZU1vZGFsfSBpZD17aWR9IHR5cGU9e3R5cGV9Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgICB7LyogPFBhcnRuZXIgLz4gKi99XG5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9