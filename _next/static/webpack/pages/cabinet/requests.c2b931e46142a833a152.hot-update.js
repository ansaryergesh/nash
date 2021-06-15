self["webpackHotUpdate_N_E"]("pages/cabinet/requests",{

/***/ "./components/shared/Nav.js":
/*!**********************************!*\
  !*** ./components/shared/Nav.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-burger-menu */ "./node_modules/react-burger-menu/lib/BurgerMenu.js");
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_burger_menu__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _defaults_extraFunction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../defaults/extraFunction */ "./defaults/extraFunction.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "E:\\job\\nashcompany\\components\\shared\\Nav.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,E_job_nashcompany_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }













var mapStateToProps = function mapStateToProps(_ref) {
  var _ref$userReducer = _ref.userReducer,
      user = _ref$userReducer.user,
      loggedIn = _ref$userReducer.loggedIn;
  return {
    user: user,
    loggedIn: loggedIn
  };
};

var AppLink = function AppLink(_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      href = _ref2.href;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
    href: href,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
      className: className,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 3
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 50
  }, _this);
};

_c = AppLink;

var Nav = function Nav(props) {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      isActiveUser = _useState[0],
      setActiveUser = _useState[1];

  var isCurrentUser = js_cookie__WEBPACK_IMPORTED_MODULE_8___default().get('token') && props.loggedIn ? true : false;
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    console.log('checking' + props.loggedIn);

    if (props.loggedIn) {
      setActiveUser(true);
    }
  }, [props.loggedIn]);
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      burger = _useState2[0],
      setBurger = _useState2[1];

  var handleBurger = function handleBurger() {
    setBurger(!burger);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    if (!burger) {
      document.documentElement.style.height = '100%';
      document.body.style.overflowY = 'hidden';
    }

    if (burger) {
      document.body.style.overflowY = 'unset';
    }
  }, [burger]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "navigation",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(AppLink, {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
            alt: "image",
            className: "logo",
            src: router.pathname === '/' ? '/img/logo/logoBlack.svg' : '/img/logo/logoBlack.svg'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "navigations",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ul", {
            className: "navigation--contacts",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                alt: "image",
                src: "/img/phone.svg"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                href: "tel:+77003505000"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 17
              }, _this), "+7 700 350 50 00"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                target: "_blank",
                href: "https://www.instagram.com/nashcompany.kz/",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                  alt: "image",
                  src: "/img/insta.svg"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 74,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                href: "#",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                  alt: "image",
                  src: "/img/facebook.svg"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 80,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
              className: "pulsed_link",
              children: [(isActiveUser || isCurrentUser) && !router.pathname.includes('cabinet') && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "pulsing_block",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  "class": "pulsing",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    "class": "ringring"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 87,
                    columnNumber: 19
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    "class": "circle"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 88,
                    columnNumber: 19
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 86,
                  columnNumber: 17
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 96
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                className: "user_icon",
                href: isActiveUser ? '/cabinet' : '/login',
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                  alt: "image",
                  src: "/img/user_icon.svg"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 96,
                  columnNumber: 19
                }, _this), " ", (isActiveUser || isCurrentUser) && "".concat((0,_defaults_extraFunction__WEBPACK_IMPORTED_MODULE_10__.getInitials)(props.user.fio))]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ul", {
            className: "navigation--menu",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(AppLink, {
                href: "/about",
                children: "\u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(AppLink, {
                href: "/uslugi",
                children: "\u0423\u0441\u043B\u0443\u0433\u0438"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(AppLink, {
                href: "/praktika",
                children: "\u041F\u0440\u0430\u043A\u0442\u0438\u043A\u0430"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 109,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(AppLink, {
                href: "/news",
                children: "\u041F\u0440\u0435\u0441\u0441-\u0446\u0435\u043D\u0442\u0440"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(AppLink, {
                href: "/contacts",
                children: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                href: "/\u041F\u0423\u0411\u041B\u0418\u0427\u041D\u0410\u042F \u041E\u0424\u0415\u0420\u0422\u0410.pdf",
                target: "_blank",
                children: "\u041F\u0443\u0431\u043B\u0438\u0447\u043D\u0430\u044F \u043E\u0444\u0435\u0440\u0442\u0430"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "navigation_mobile",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_burger_menu__WEBPACK_IMPORTED_MODULE_5__.slide, _objectSpread(_objectSpread({}, props), {}, {
          onStateChange: function onStateChange() {
            return handleBurger();
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(AppLink, {
            className: "menu-item",
            href: "/",
            children: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(AppLink, {
            className: "menu-item",
            href: "/about",
            children: "\u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(AppLink, {
            className: "menu-item",
            href: "/uslugi",
            children: "\u0423\u0441\u043B\u0443\u0433\u0438"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(AppLink, {
            className: "menu-item",
            href: "/praktika",
            children: "\u041F\u0440\u0430\u043A\u0442\u0438\u043A\u0430"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(AppLink, {
            className: "menu-item",
            href: isActiveUser ? '/cabinet' : '/login',
            children: "\u041B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(AppLink, {
            className: "menu-item",
            href: "/news",
            children: "\u041F\u0440\u0435\u0441\u0441-\u0446\u0435\u043D\u0442\u0440"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(AppLink, {
            className: "menu-item",
            href: "/contacts",
            children: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
            href: "/\u041F\u0423\u0411\u041B\u0418\u0427\u041D\u0410\u042F \u041E\u0424\u0415\u0420\u0422\u0410.pdf",
            className: "menu-item",
            target: "_blank",
            children: "\u041F\u0443\u0431\u043B\u0438\u0447\u043D\u0430\u044F \u043E\u0444\u0435\u0440\u0442\u0430"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
            href: "tel:+77003505000",
            className: "menu-item",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("i", {
              className: "fa fa-phone"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 15
            }, _this), "+7 700 350 50 00"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "socials",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              className: "menu-item",
              target: "_blank",
              href: "https://www.instagram.com/nashcompany.kz/",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("i", {
                className: "fa fa-instagram"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 167,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              className: "menu-item",
              href: "#",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("i", {
                className: "fa fa-facebook"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 170,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 169,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              className: "menu-item address",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("i", {
                className: "fa fa-map-marker"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 173,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                children: "\u0433. \u0410\u043B\u043C\u0430\u0442\u044B. \u0423\u043B. \u0422\u043E\u043B\u0435 \u0431\u0438 101 \u0411\u0426 \"\u0422\u043E\u043B\u0435 \u0431\u0438\""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 174,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 13
          }, _this)]
        }), void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
          className: "mob_phone",
          href: "tel:+77003505000",
          children: "+7700 350 5000"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
            alt: "image",
            className: "logo",
            src: "/img/logo/justlogo.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 5
  }, _this);
};

_s(Nav, "PqGlndZ/ucEDlVYz/PUIhMRO5H4=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];
});

_c2 = Nav;
/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_7__.connect)(mapStateToProps, null)(Nav));

var _c, _c2;

$RefreshReg$(_c, "AppLink");
$RefreshReg$(_c2, "Nav");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvTmF2LmpzIl0sIm5hbWVzIjpbIm1hcFN0YXRlVG9Qcm9wcyIsInVzZXJSZWR1Y2VyIiwidXNlciIsImxvZ2dlZEluIiwiQXBwTGluayIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiaHJlZiIsIk5hdiIsInByb3BzIiwidXNlU3RhdGUiLCJpc0FjdGl2ZVVzZXIiLCJzZXRBY3RpdmVVc2VyIiwiaXNDdXJyZW50VXNlciIsImNvb2tpZSIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJidXJnZXIiLCJzZXRCdXJnZXIiLCJoYW5kbGVCdXJnZXIiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInN0eWxlIiwiaGVpZ2h0IiwiYm9keSIsIm92ZXJmbG93WSIsInBhdGhuYW1lIiwiaW5jbHVkZXMiLCJnZXRJbml0aWFscyIsImZpbyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCO0FBQUEsOEJBQ3RCQyxXQURzQjtBQUFBLE1BRXBCQyxJQUZvQixvQkFFcEJBLElBRm9CO0FBQUEsTUFHcEJDLFFBSG9CLG9CQUdwQkEsUUFIb0I7QUFBQSxTQUtqQjtBQUFDRCxRQUFJLEVBQUpBLElBQUQ7QUFBT0MsWUFBUSxFQUFSQTtBQUFQLEdBTGlCO0FBQUEsQ0FBeEI7O0FBT0EsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxNQUFFQyxRQUFGLFNBQUVBLFFBQUY7QUFBQSxNQUFZQyxTQUFaLFNBQVlBLFNBQVo7QUFBQSxNQUF1QkMsSUFBdkIsU0FBdUJBLElBQXZCO0FBQUEsc0JBQWlDLDhEQUFDLGtEQUFEO0FBQU0sUUFB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QyxlQUFELEVBQWtCLElBQWxCLENBQVAsQ0FBK0JRLEdBQS9CLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FiaW5ldC9yZXF1ZXN0cy5jMmI5MzFlNDYxNDJhODMzYTE1Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb250YWluZXIsIFJvdywgQ29sfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5jc3NcIjtcclxuaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHtzbGlkZSBhcyBNZW51fSBmcm9tIFwicmVhY3QtYnVyZ2VyLW1lbnVcIjtcclxuaW1wb3J0IHtDU1NUcmFuc2l0aW9uR3JvdXB9IGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQge2dldEluaXRpYWxzfSBmcm9tICcuLi8uLi9kZWZhdWx0cy9leHRyYUZ1bmN0aW9uJztcclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHtcclxuICB1c2VyUmVkdWNlcjoge1xyXG4gICAgdXNlcixcclxuICAgIGxvZ2dlZEluXHJcbiAgfVxyXG59KSA9PiAoe3VzZXIsIGxvZ2dlZElufSk7XHJcblxyXG5jb25zdCBBcHBMaW5rID0gKHtjaGlsZHJlbiwgY2xhc3NOYW1lLCBocmVmfSkgPT4gPExpbmsgaHJlZj17aHJlZn0+XHJcbiAgPGEgY2xhc3NOYW1lPXtjbGFzc05hbWV9PntjaGlsZHJlbn08L2E+XHJcbjwvTGluaz5cclxuXHJcbmNvbnN0IE5hdiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtpc0FjdGl2ZVVzZXIsXHJcbiAgICBzZXRBY3RpdmVVc2VyXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IGlzQ3VycmVudFVzZXIgPSBjb29raWUuZ2V0KCd0b2tlbicpICYmIHByb3BzLmxvZ2dlZEluXHJcbiAgICA/IHRydWVcclxuICAgIDogZmFsc2VcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdjaGVja2luZycgKyBwcm9wcy5sb2dnZWRJbilcclxuICAgIGlmIChwcm9wcy5sb2dnZWRJbikge1xyXG4gICAgICBzZXRBY3RpdmVVc2VyKHRydWUpXHJcbiAgICB9XHJcbiAgfSwgW3Byb3BzLmxvZ2dlZEluXSlcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBbYnVyZ2VyLFxyXG4gICAgc2V0QnVyZ2VyXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IGhhbmRsZUJ1cmdlciA9ICgpID0+IHtcclxuICAgIHNldEJ1cmdlcighYnVyZ2VyKVxyXG5cclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWJ1cmdlcikge1xyXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nO1xyXG4gICAgfVxyXG4gICAgaWYgKGJ1cmdlcikge1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WSA9ICd1bnNldCc7XHJcbiAgICB9XHJcbiAgfSwgW2J1cmdlcl0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2aWdhdGlvbic+XHJcbiAgICAgICAgICA8QXBwTGluayBocmVmPScvJz5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIGFsdD0naW1hZ2UnXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdsb2dvJ1xyXG4gICAgICAgICAgICAgIHNyYz17cm91dGVyLnBhdGhuYW1lID09PSAnLydcclxuICAgICAgICAgICAgICA/ICcvaW1nL2xvZ28vbG9nb0JsYWNrLnN2ZydcclxuICAgICAgICAgICAgICA6ICcvaW1nL2xvZ28vbG9nb0JsYWNrLnN2Zyd9Lz5cclxuICAgICAgICAgIDwvQXBwTGluaz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZpZ2F0aW9ucyc+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J25hdmlnYXRpb24tLWNvbnRhY3RzJz5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGFsdD0naW1hZ2UnIHNyYz0nL2ltZy9waG9uZS5zdmcnLz5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9J3RlbDorNzcwMDM1MDUwMDAnPjwvYT4rNyA3MDAgMzUwIDUwIDAwPC9saT5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9J19ibGFuaycgaHJlZj0naHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9uYXNoY29tcGFueS5rei8nPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIGFsdD0naW1hZ2UnIHNyYz0nL2ltZy9pbnN0YS5zdmcnLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPScjJz5cclxuICAgICAgICAgICAgICAgICAgPGltZyBhbHQ9J2ltYWdlJyBzcmM9Jy9pbWcvZmFjZWJvb2suc3ZnJy8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0ncHVsc2VkX2xpbmsnPlxyXG4gICAgICAgICAgICAgICAgeygoaXNBY3RpdmVVc2VyIHx8IGlzQ3VycmVudFVzZXIpICYmICFyb3V0ZXIucGF0aG5hbWUuaW5jbHVkZXMoJ2NhYmluZXQnKSkgJiYgIDxkaXYgY2xhc3NOYW1lPSdwdWxzaW5nX2Jsb2NrJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwdWxzaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyaW5ncmluZ1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndXNlcl9pY29uJ1xyXG4gICAgICAgICAgICAgICAgICBocmVmPXtpc0FjdGl2ZVVzZXJcclxuICAgICAgICAgICAgICAgICAgPyAnL2NhYmluZXQnXHJcbiAgICAgICAgICAgICAgICAgIDogJy9sb2dpbid9PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIGFsdD0naW1hZ2UnIHNyYz0nL2ltZy91c2VyX2ljb24uc3ZnJy8+IHsoaXNBY3RpdmVVc2VyIHx8IGlzQ3VycmVudFVzZXIpICYmIGAke2dldEluaXRpYWxzKHByb3BzLnVzZXIuZmlvKX1gfVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSduYXZpZ2F0aW9uLS1tZW51Jz5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8QXBwTGluayBocmVmPScvYWJvdXQnPtCeINC60L7QvNC/0LDQvdC40Lg8L0FwcExpbms+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8QXBwTGluayBocmVmPScvdXNsdWdpJz7Qo9GB0LvRg9Cz0Lg8L0FwcExpbms+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8QXBwTGluayBocmVmPScvcHJha3Rpa2EnPtCf0YDQsNC60YLQuNC60LA8L0FwcExpbms+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8QXBwTGluayBocmVmPScvbmV3cyc+0J/RgNC10YHRgS3RhtC10L3RgtGAPC9BcHBMaW5rPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxBcHBMaW5rIGhyZWY9Jy9jb250YWN0cyc+0JrQvtC90YLQsNC60YLRizwvQXBwTGluaz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9Jy/Qn9Cj0JHQm9CY0KfQndCQ0K8g0J7QpNCV0KDQotCQLnBkZicgdGFyZ2V0PSdfYmxhbmsnPtCf0YPQsdC70LjRh9C90LDRjyDQvtGE0LXRgNGC0LA8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZpZ2F0aW9uX21vYmlsZSc+XHJcbiAgICAgICAgICA8TWVudSB7Li4ucHJvcHN9IG9uU3RhdGVDaGFuZ2U9eygpID0+IGhhbmRsZUJ1cmdlcigpfT5cclxuXHJcbiAgICAgICAgICAgIDxBcHBMaW5rIGNsYXNzTmFtZT1cIm1lbnUtaXRlbVwiIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAg0JPQu9Cw0LLQvdCw0Y8g0YHRgtGA0LDQvdC40YbQsFxyXG4gICAgICAgICAgICA8L0FwcExpbms+XHJcblxyXG4gICAgICAgICAgICA8QXBwTGluayBjbGFzc05hbWU9XCJtZW51LWl0ZW1cIiBocmVmPVwiL2Fib3V0XCI+XHJcbiAgICAgICAgICAgICAg0J4g0LrQvtC80L/QsNC90LjQuFxyXG4gICAgICAgICAgICA8L0FwcExpbms+XHJcbiAgICAgICAgICAgIDxBcHBMaW5rIGNsYXNzTmFtZT1cIm1lbnUtaXRlbVwiIGhyZWY9XCIvdXNsdWdpXCI+XHJcbiAgICAgICAgICAgICAg0KPRgdC70YPQs9C4XHJcbiAgICAgICAgICAgIDwvQXBwTGluaz5cclxuICAgICAgICAgICAgPEFwcExpbmsgY2xhc3NOYW1lPVwibWVudS1pdGVtXCIgaHJlZj1cIi9wcmFrdGlrYVwiPlxyXG4gICAgICAgICAgICAgINCf0YDQsNC60YLQuNC60LBcclxuICAgICAgICAgICAgPC9BcHBMaW5rPlxyXG4gICAgICAgICAgICA8QXBwTGlua1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1lbnUtaXRlbVwiXHJcbiAgICAgICAgICAgICAgaHJlZj17aXNBY3RpdmVVc2VyXHJcbiAgICAgICAgICAgICAgPyAnL2NhYmluZXQnXHJcbiAgICAgICAgICAgICAgOiAnL2xvZ2luJ30+XHJcbiAgICAgICAgICAgICAg0JvQuNGH0L3Ri9C5INC60LDQsdC40L3QtdGCXHJcbiAgICAgICAgICAgIDwvQXBwTGluaz5cclxuXHJcbiAgICAgICAgICAgIDxBcHBMaW5rIGNsYXNzTmFtZT1cIm1lbnUtaXRlbVwiIGhyZWY9XCIvbmV3c1wiPlxyXG4gICAgICAgICAgICAgINCf0YDQtdGB0YEt0YbQtdC90YLRgFxyXG4gICAgICAgICAgICA8L0FwcExpbms+XHJcbiAgICAgICAgICAgIDxBcHBMaW5rIGNsYXNzTmFtZT1cIm1lbnUtaXRlbVwiIGhyZWY9XCIvY29udGFjdHNcIj5cclxuICAgICAgICAgICAgICDQmtC+0L3RgtCw0LrRgtGLXHJcbiAgICAgICAgICAgIDwvQXBwTGluaz5cclxuICAgICAgICAgICAgPGEgaHJlZj0nL9Cf0KPQkdCb0JjQp9Cd0JDQryDQntCk0JXQoNCi0JAucGRmJyBjbGFzc05hbWU9XCJtZW51LWl0ZW1cIiB0YXJnZXQ9J19ibGFuayc+0J/Rg9Cx0LvQuNGH0L3QsNGPINC+0YTQtdGA0YLQsDwvYT5cclxuICAgICAgICAgICAgPGhyPjwvaHI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9J3RlbDorNzcwMDM1MDUwMDAnIGNsYXNzTmFtZT1cIm1lbnUtaXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtcGhvbmUnPjwvaT4rNyA3MDAgMzUwIDUwIDAwXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NvY2lhbHMnPlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZW51LWl0ZW1cIlxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgICAgICBocmVmPSdodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL25hc2hjb21wYW55Lmt6Lyc+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLWluc3RhZ3JhbSc+PC9pPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJtZW51LWl0ZW1cIiBocmVmPScjJz5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtZmFjZWJvb2snPjwvaT5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdtZW51LWl0ZW0gYWRkcmVzcyc+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLW1hcC1tYXJrZXInPjwvaT5cclxuICAgICAgICAgICAgICAgIDxzcGFuPtCzLiDQkNC70LzQsNGC0YsuINCj0LsuINCi0L7Qu9C1INCx0LggMTAxINCR0KYgXCLQotC+0LvQtSDQsdC4XCJcclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT0nbW9iX3Bob25lJyBocmVmPSd0ZWw6Kzc3MDAzNTA1MDAwJz4rNzcwMCAzNTAgNTAwMDwvYT5cclxuICAgICAgICAgIDxhIGhyZWY9Jy8nPlxyXG4gICAgICAgICAgICA8aW1nIGFsdD0naW1hZ2UnIGNsYXNzTmFtZT0nbG9nbycgc3JjPScvaW1nL2xvZ28vanVzdGxvZ28ucG5nJy8+XHJcbiAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0KGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBudWxsKShOYXYpKTsiXSwic291cmNlUm9vdCI6IiJ9