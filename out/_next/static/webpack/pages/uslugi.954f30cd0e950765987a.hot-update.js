self["webpackHotUpdate_N_E"]("pages/uslugi",{

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
            href: isActiveUser ? '/cabinet/requests' : '/login',
            children: isActiveUser ? 'Мои заявки' : 'Личный кабинет'
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
            lineNumber: 152,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(AppLink, {
            className: "menu-item",
            href: "/contacts",
            children: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
            href: "/\u041F\u0423\u0411\u041B\u0418\u0427\u041D\u0410\u042F \u041E\u0424\u0415\u0420\u0422\u0410.pdf",
            className: "menu-item",
            target: "_blank",
            children: "\u041F\u0443\u0431\u043B\u0438\u0447\u043D\u0430\u044F \u043E\u0444\u0435\u0440\u0442\u0430"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("hr", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
            href: "tel:+77003505000",
            className: "menu-item",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("i", {
              className: "fa fa-phone"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 161,
              columnNumber: 15
            }, _this), "+7 700 350 50 00"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 160,
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
                lineNumber: 168,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 164,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              className: "menu-item",
              href: "#",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("i", {
                className: "fa fa-facebook"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 171,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 170,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              className: "menu-item address",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("i", {
                className: "fa fa-map-marker"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 174,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                children: "\u0433. \u0410\u043B\u043C\u0430\u0442\u044B. \u0423\u043B. \u0422\u043E\u043B\u0435 \u0431\u0438 101 \u0411\u0426 \"\u0422\u043E\u043B\u0435 \u0431\u0438\""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 175,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 163,
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
          lineNumber: 181,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
            alt: "image",
            className: "logo",
            src: "/img/logo/justlogo.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 182,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvTmF2LmpzIl0sIm5hbWVzIjpbIm1hcFN0YXRlVG9Qcm9wcyIsInVzZXJSZWR1Y2VyIiwidXNlciIsImxvZ2dlZEluIiwiQXBwTGluayIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiaHJlZiIsIk5hdiIsInByb3BzIiwidXNlU3RhdGUiLCJpc0FjdGl2ZVVzZXIiLCJzZXRBY3RpdmVVc2VyIiwiaXNDdXJyZW50VXNlciIsImNvb2tpZSIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJidXJnZXIiLCJzZXRCdXJnZXIiLCJoYW5kbGVCdXJnZXIiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInN0eWxlIiwiaGVpZ2h0IiwiYm9keSIsIm92ZXJmbG93WSIsInBhdGhuYW1lIiwiaW5jbHVkZXMiLCJnZXRJbml0aWFscyIsImZpbyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCO0FBQUEsOEJBQ3RCQyxXQURzQjtBQUFBLE1BRXBCQyxJQUZvQixvQkFFcEJBLElBRm9CO0FBQUEsTUFHcEJDLFFBSG9CLG9CQUdwQkEsUUFIb0I7QUFBQSxTQUtqQjtBQUFDRCxRQUFJLEVBQUpBLElBQUQ7QUFBT0MsWUFBUSxFQUFSQTtBQUFQLEdBTGlCO0FBQUEsQ0FBeEI7O0FBT0EsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxNQUFFQyxRQUFGLFNBQUVBLFFBQUY7QUFBQSxNQUFZQyxTQUFaLFNBQVlBLFNBQVo7QUFBQSxNQUF1QkMsSUFBdkIsU0FBdUJBLElBQXZCO0FBQUEsc0JBQWlDLDhEQUFDLGtEQUFEO0FBQU0sUUFB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WFgsRztBQTBLTiwrREFBZXlCLG9EQUFPLENBQUNqQyxlQUFELEVBQWtCLElBQWxCLENBQVAsQ0FBK0JRLEdBQS9CLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNsdWdpLjk1NGYzMGNkMGU5NTA3NjU5ODdhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbnRhaW5lciwgUm93LCBDb2x9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQge3NsaWRlIGFzIE1lbnV9IGZyb20gXCJyZWFjdC1idXJnZXItbWVudVwiO1xyXG5pbXBvcnQge0NTU1RyYW5zaXRpb25Hcm91cH0gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdqcy1jb29raWUnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7Z2V0SW5pdGlhbHN9IGZyb20gJy4uLy4uL2RlZmF1bHRzL2V4dHJhRnVuY3Rpb24nO1xyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoe1xyXG4gIHVzZXJSZWR1Y2VyOiB7XHJcbiAgICB1c2VyLFxyXG4gICAgbG9nZ2VkSW5cclxuICB9XHJcbn0pID0+ICh7dXNlciwgbG9nZ2VkSW59KTtcclxuXHJcbmNvbnN0IEFwcExpbmsgPSAoe2NoaWxkcmVuLCBjbGFzc05hbWUsIGhyZWZ9KSA9PiA8TGluayBocmVmPXtocmVmfT5cclxuICA8YSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+e2NoaWxkcmVufTwvYT5cclxuPC9MaW5rPlxyXG5cclxuY29uc3QgTmF2ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2lzQWN0aXZlVXNlcixcclxuICAgIHNldEFjdGl2ZVVzZXJdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgaXNDdXJyZW50VXNlciA9IGNvb2tpZS5nZXQoJ3Rva2VuJykgJiYgcHJvcHMubG9nZ2VkSW5cclxuICAgID8gdHJ1ZVxyXG4gICAgOiBmYWxzZVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ2NoZWNraW5nJyArIHByb3BzLmxvZ2dlZEluKVxyXG4gICAgaWYgKHByb3BzLmxvZ2dlZEluKSB7XHJcbiAgICAgIHNldEFjdGl2ZVVzZXIodHJ1ZSlcclxuICAgIH1cclxuICB9LCBbcHJvcHMubG9nZ2VkSW5dKVxyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IFtidXJnZXIsXHJcbiAgICBzZXRCdXJnZXJdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgaGFuZGxlQnVyZ2VyID0gKCkgPT4ge1xyXG4gICAgc2V0QnVyZ2VyKCFidXJnZXIpXHJcblxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghYnVyZ2VyKSB7XHJcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3dZID0gJ2hpZGRlbic7XHJcbiAgICB9XHJcbiAgICBpZiAoYnVyZ2VyKSB7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3dZID0gJ3Vuc2V0JztcclxuICAgIH1cclxuICB9LCBbYnVyZ2VyXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZpZ2F0aW9uJz5cclxuICAgICAgICAgIDxBcHBMaW5rIGhyZWY9Jy8nPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgYWx0PSdpbWFnZSdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9J2xvZ28nXHJcbiAgICAgICAgICAgICAgc3JjPXtyb3V0ZXIucGF0aG5hbWUgPT09ICcvJ1xyXG4gICAgICAgICAgICAgID8gJy9pbWcvbG9nby9sb2dvQmxhY2suc3ZnJ1xyXG4gICAgICAgICAgICAgIDogJy9pbWcvbG9nby9sb2dvQmxhY2suc3ZnJ30vPlxyXG4gICAgICAgICAgPC9BcHBMaW5rPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdmlnYXRpb25zJz5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nbmF2aWdhdGlvbi0tY29udGFjdHMnPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxpbWcgYWx0PSdpbWFnZScgc3JjPScvaW1nL3Bob25lLnN2ZycvPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj0ndGVsOis3NzAwMzUwNTAwMCc+PC9hPis3IDcwMCAzNTAgNTAgMDA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxhIHRhcmdldD0nX2JsYW5rJyBocmVmPSdodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL25hc2hjb21wYW55Lmt6Lyc+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PSdpbWFnZScgc3JjPScvaW1nL2luc3RhLnN2ZycvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9JyMnPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIGFsdD0naW1hZ2UnIHNyYz0nL2ltZy9mYWNlYm9vay5zdmcnLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdwdWxzZWRfbGluayc+XHJcbiAgICAgICAgICAgICAgICB7KChpc0FjdGl2ZVVzZXIgfHwgaXNDdXJyZW50VXNlcikgJiYgIXJvdXRlci5wYXRobmFtZS5pbmNsdWRlcygnY2FiaW5ldCcpKSAmJiAgPGRpdiBjbGFzc05hbWU9J3B1bHNpbmdfYmxvY2snPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB1bHNpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJpbmdyaW5nXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd1c2VyX2ljb24nXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9e2lzQWN0aXZlVXNlclxyXG4gICAgICAgICAgICAgICAgICA/ICcvY2FiaW5ldCdcclxuICAgICAgICAgICAgICAgICAgOiAnL2xvZ2luJ30+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PSdpbWFnZScgc3JjPScvaW1nL3VzZXJfaWNvbi5zdmcnLz4geyhpc0FjdGl2ZVVzZXIgfHwgaXNDdXJyZW50VXNlcikgJiYgYCR7Z2V0SW5pdGlhbHMocHJvcHMudXNlci5maW8pfWB9XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J25hdmlnYXRpb24tLW1lbnUnPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxBcHBMaW5rIGhyZWY9Jy9hYm91dCc+0J4g0LrQvtC80L/QsNC90LjQuDwvQXBwTGluaz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxBcHBMaW5rIGhyZWY9Jy91c2x1Z2knPtCj0YHQu9GD0LPQuDwvQXBwTGluaz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxBcHBMaW5rIGhyZWY9Jy9wcmFrdGlrYSc+0J/RgNCw0LrRgtC40LrQsDwvQXBwTGluaz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxBcHBMaW5rIGhyZWY9Jy9uZXdzJz7Qn9GA0LXRgdGBLdGG0LXQvdGC0YA8L0FwcExpbms+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPEFwcExpbmsgaHJlZj0nL2NvbnRhY3RzJz7QmtC+0L3RgtCw0LrRgtGLPC9BcHBMaW5rPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj0nL9Cf0KPQkdCb0JjQp9Cd0JDQryDQntCk0JXQoNCi0JAucGRmJyB0YXJnZXQ9J19ibGFuayc+0J/Rg9Cx0LvQuNGH0L3QsNGPINC+0YTQtdGA0YLQsDwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdmlnYXRpb25fbW9iaWxlJz5cclxuICAgICAgICAgIDxNZW51IHsuLi5wcm9wc30gb25TdGF0ZUNoYW5nZT17KCkgPT4gaGFuZGxlQnVyZ2VyKCl9PlxyXG5cclxuICAgICAgICAgICAgPEFwcExpbmsgY2xhc3NOYW1lPVwibWVudS1pdGVtXCIgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICDQk9C70LDQstC90LDRjyDRgdGC0YDQsNC90LjRhtCwXHJcbiAgICAgICAgICAgIDwvQXBwTGluaz5cclxuXHJcbiAgICAgICAgICAgIDxBcHBMaW5rIGNsYXNzTmFtZT1cIm1lbnUtaXRlbVwiIGhyZWY9XCIvYWJvdXRcIj5cclxuICAgICAgICAgICAgICDQniDQutC+0LzQv9Cw0L3QuNC4XHJcbiAgICAgICAgICAgIDwvQXBwTGluaz5cclxuICAgICAgICAgICAgPEFwcExpbmsgY2xhc3NOYW1lPVwibWVudS1pdGVtXCIgaHJlZj1cIi91c2x1Z2lcIj5cclxuICAgICAgICAgICAgICDQo9GB0LvRg9Cz0LhcclxuICAgICAgICAgICAgPC9BcHBMaW5rPlxyXG4gICAgICAgICAgICA8QXBwTGluayBjbGFzc05hbWU9XCJtZW51LWl0ZW1cIiBocmVmPVwiL3ByYWt0aWthXCI+XHJcbiAgICAgICAgICAgICAg0J/RgNCw0LrRgtC40LrQsFxyXG4gICAgICAgICAgICA8L0FwcExpbms+XHJcbiAgICAgICAgICAgIDxBcHBMaW5rXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVudS1pdGVtXCJcclxuICAgICAgICAgICAgICBocmVmPXtpc0FjdGl2ZVVzZXJcclxuICAgICAgICAgICAgICA/ICcvY2FiaW5ldC9yZXF1ZXN0cydcclxuICAgICAgICAgICAgICA6ICcvbG9naW4nfT5cclxuICAgICAgICAgICAgICB7aXNBY3RpdmVVc2VyID8gJ9Cc0L7QuCDQt9Cw0Y/QstC60LgnIDogJ9Cb0LjRh9C90YvQuSDQutCw0LHQuNC90LXRgid9XHJcbiAgXHJcbiAgICAgICAgICAgIDwvQXBwTGluaz5cclxuXHJcbiAgICAgICAgICAgIDxBcHBMaW5rIGNsYXNzTmFtZT1cIm1lbnUtaXRlbVwiIGhyZWY9XCIvbmV3c1wiPlxyXG4gICAgICAgICAgICAgINCf0YDQtdGB0YEt0YbQtdC90YLRgFxyXG4gICAgICAgICAgICA8L0FwcExpbms+XHJcbiAgICAgICAgICAgIDxBcHBMaW5rIGNsYXNzTmFtZT1cIm1lbnUtaXRlbVwiIGhyZWY9XCIvY29udGFjdHNcIj5cclxuICAgICAgICAgICAgICDQmtC+0L3RgtCw0LrRgtGLXHJcbiAgICAgICAgICAgIDwvQXBwTGluaz5cclxuICAgICAgICAgICAgPGEgaHJlZj0nL9Cf0KPQkdCb0JjQp9Cd0JDQryDQntCk0JXQoNCi0JAucGRmJyBjbGFzc05hbWU9XCJtZW51LWl0ZW1cIiB0YXJnZXQ9J19ibGFuayc+0J/Rg9Cx0LvQuNGH0L3QsNGPINC+0YTQtdGA0YLQsDwvYT5cclxuICAgICAgICAgICAgPGhyPjwvaHI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9J3RlbDorNzcwMDM1MDUwMDAnIGNsYXNzTmFtZT1cIm1lbnUtaXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtcGhvbmUnPjwvaT4rNyA3MDAgMzUwIDUwIDAwXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NvY2lhbHMnPlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZW51LWl0ZW1cIlxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgICAgICBocmVmPSdodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL25hc2hjb21wYW55Lmt6Lyc+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLWluc3RhZ3JhbSc+PC9pPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJtZW51LWl0ZW1cIiBocmVmPScjJz5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nZmEgZmEtZmFjZWJvb2snPjwvaT5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdtZW51LWl0ZW0gYWRkcmVzcyc+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhIGZhLW1hcC1tYXJrZXInPjwvaT5cclxuICAgICAgICAgICAgICAgIDxzcGFuPtCzLiDQkNC70LzQsNGC0YsuINCj0LsuINCi0L7Qu9C1INCx0LggMTAxINCR0KYgXCLQotC+0LvQtSDQsdC4XCJcclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT0nbW9iX3Bob25lJyBocmVmPSd0ZWw6Kzc3MDAzNTA1MDAwJz4rNzcwMCAzNTAgNTAwMDwvYT5cclxuICAgICAgICAgIDxhIGhyZWY9Jy8nPlxyXG4gICAgICAgICAgICA8aW1nIGFsdD0naW1hZ2UnIGNsYXNzTmFtZT0nbG9nbycgc3JjPScvaW1nL2xvZ28vanVzdGxvZ28ucG5nJy8+XHJcbiAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0KGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBudWxsKShOYXYpKTsiXSwic291cmNlUm9vdCI6IiJ9