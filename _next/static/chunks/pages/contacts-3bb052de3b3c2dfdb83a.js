(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[192,179],{3646:function(e,t,n){var r=n(7228);e.exports=function(e){if(Array.isArray(e))return r(e)}},1506:function(e){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},9754:function(e){function t(n){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(n)}e.exports=t},2205:function(e,t,n){var r=n(9489);e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},8585:function(e,t,n){var r=n(8),a=n(1506);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?a(e):t}},319:function(e,t,n){var r=n(3646),a=n(6860),s=n(379),i=n(8206);e.exports=function(e){return r(e)||a(e)||s(e)||i()}},9956:function(e,t,n){"use strict";var r=n(6156),a=n(5893),s=(n(5937),n(7294)),i=n(1163),c=n(3190),o=n(1664),l=n(4494),u=n(6808),f=n.n(u),d=(n(9669),n(741));function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m=function(e){var t=e.children,n=e.className,r=e.href;return(0,a.jsx)(o.default,{href:r,children:(0,a.jsx)("a",{className:n,children:t})})};t.Z=(0,l.$j)((function(e){var t=e.userReducer;return{user:t.user,loggedIn:t.loggedIn}}),null)((function(e){var t=(0,s.useState)(!1),n=t[0],r=t[1],o=!(!f().get("token")||!e.loggedIn);(0,s.useEffect)((function(){console.log("checking"+e.loggedIn),e.loggedIn&&r(!0)}),[e.loggedIn]);var l=(0,i.useRouter)(),u=(0,s.useState)(!1),h=u[0],g=u[1];return(0,s.useEffect)((function(){h||(document.documentElement.style.height="100%",document.body.style.overflowY="hidden"),h&&(document.body.style.overflowY="unset")}),[h]),(0,a.jsx)("div",{children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsxs)("div",{className:"navigation",children:[(0,a.jsx)(m,{href:"/",children:(0,a.jsx)("img",{alt:"image",className:"logo",src:(l.pathname,"/img/logo/logoBlack.svg")})}),(0,a.jsxs)("div",{className:"navigations",children:[(0,a.jsxs)("ul",{className:"navigation--contacts",children:[(0,a.jsxs)("li",{children:[(0,a.jsx)("img",{alt:"image",src:"/img/phone.svg"}),(0,a.jsx)("a",{href:"tel:+77003505000"}),"+7 700 350 50 00"]}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{target:"_blank",href:"https://www.instagram.com/nashcompany.kz/",children:(0,a.jsx)("img",{alt:"image",src:"/img/insta.svg"})})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#",children:(0,a.jsx)("img",{alt:"image",src:"/img/facebook.svg"})})}),(0,a.jsxs)("li",{className:"pulsed_link",children:[(n||o)&&!l.pathname.includes("cabinet")&&(0,a.jsx)("div",{className:"pulsing_block",children:(0,a.jsxs)("div",{class:"pulsing",children:[(0,a.jsx)("div",{class:"ringring"}),(0,a.jsx)("div",{class:"circle"})]})}),(0,a.jsxs)("a",{className:"user_icon",href:n?"/cabinet":"/login",children:[(0,a.jsx)("img",{alt:"image",src:"/img/user_icon.svg"})," ",(n||o)&&"".concat((0,d.Qm)(e.user.fio))]})]})]}),(0,a.jsxs)("ul",{className:"navigation--menu",children:[(0,a.jsx)("li",{children:(0,a.jsx)(m,{href:"/about",children:"\u041e \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438"})}),(0,a.jsx)("li",{children:(0,a.jsx)(m,{href:"/uslugi",children:"\u0423\u0441\u043b\u0443\u0433\u0438"})}),(0,a.jsx)("li",{children:(0,a.jsx)(m,{href:"/praktika",children:"\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0430"})}),(0,a.jsx)("li",{children:(0,a.jsx)(m,{href:"/news",children:"\u041f\u0440\u0435\u0441\u0441-\u0446\u0435\u043d\u0442\u0440"})}),(0,a.jsx)("li",{children:(0,a.jsx)(m,{href:"/contacts",children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"/\u041f\u0423\u0411\u041b\u0418\u0427\u041d\u0410\u042f \u041e\u0424\u0415\u0420\u0422\u0410.pdf",target:"_blank",children:"\u041f\u0443\u0431\u043b\u0438\u0447\u043d\u0430\u044f \u043e\u0444\u0435\u0440\u0442\u0430"})})]})]})]}),(0,a.jsxs)("div",{className:"navigation_mobile",children:[(0,a.jsxs)(c.slide,p(p({},e),{},{onStateChange:function(){g(!h)},children:[(0,a.jsx)(m,{className:"menu-item",href:"/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430"}),(0,a.jsx)(m,{className:"menu-item",href:"/about",children:"\u041e \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438"}),(0,a.jsx)(m,{className:"menu-item",href:"/uslugi",children:"\u0423\u0441\u043b\u0443\u0433\u0438"}),(0,a.jsx)(m,{className:"menu-item",href:"/praktika",children:"\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0430"}),(0,a.jsx)(m,{className:"menu-item",href:n?"/cabinet":"/login",children:"\u041b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442"}),(0,a.jsx)(m,{className:"menu-item",href:"/news",children:"\u041f\u0440\u0435\u0441\u0441-\u0446\u0435\u043d\u0442\u0440"}),(0,a.jsx)(m,{className:"menu-item",href:"/contacts",children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}),(0,a.jsx)("a",{href:"/\u041f\u0423\u0411\u041b\u0418\u0427\u041d\u0410\u042f \u041e\u0424\u0415\u0420\u0422\u0410.pdf",className:"menu-item",target:"_blank",children:"\u041f\u0443\u0431\u043b\u0438\u0447\u043d\u0430\u044f \u043e\u0444\u0435\u0440\u0442\u0430"}),(0,a.jsx)("hr",{}),(0,a.jsxs)("a",{href:"tel:+77003505000",className:"menu-item",children:[(0,a.jsx)("i",{className:"fa fa-phone"}),"+7 700 350 50 00"]}),(0,a.jsxs)("div",{className:"socials",children:[(0,a.jsx)("a",{className:"menu-item",target:"_blank",href:"https://www.instagram.com/nashcompany.kz/",children:(0,a.jsx)("i",{className:"fa fa-instagram"})}),(0,a.jsx)("a",{className:"menu-item",href:"#",children:(0,a.jsx)("i",{className:"fa fa-facebook"})}),(0,a.jsxs)("p",{className:"menu-item address",children:[(0,a.jsx)("i",{className:"fa fa-map-marker"}),(0,a.jsx)("span",{children:'\u0433. \u0410\u043b\u043c\u0430\u0442\u044b. \u0423\u043b. \u0422\u043e\u043b\u0435 \u0431\u0438 101 \u0411\u0426 "\u0422\u043e\u043b\u0435 \u0431\u0438"'})]})]})]})),(0,a.jsx)("a",{className:"mob_phone",href:"tel:+77003505000",children:"+7700 350 5000"}),(0,a.jsx)("a",{href:"/",children:(0,a.jsx)("img",{alt:"image",className:"logo",src:"/img/logo/justlogo.png"})})]})]})})}))},741:function(e,t,n){"use strict";n.d(t,{Kp:function(){return r},Iw:function(){return s},Qm:function(){return i},x3:function(){return c}});var r=function(e){return String(e).replace(/[^A-Z0-9]/g,"")},a=n(2618),s=function(){setTimeout((function(){a(".text-danger",{offset:0,align:"middle",ease:"outExpo",duration:600})}),100)},i=function(e){var t=null!==e?e.split(" "):"\u041b\u0438\u0447\u043d\u044b\u0439 \u041a\u0430\u0431\u0438\u043d\u0435\u0442";return t[0]+" "+t[t.length-1].substring(0,1).toUpperCase()+"."},c=function(e,t){return e.filter((function(e){return Object.keys(t).every((function(n){return e[n]==t[n]}))}))}},3367:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},7845:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(s.AmpStateContext))};var r,a=(r=n(7294))&&r.__esModule?r:{default:r},s=n(3367);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,s=e.hasQuery,i=void 0!==s&&s;return n||a&&i}},4287:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=a},7947:function(e,t,n){"use strict";var r=n(9713);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=d,t.default=void 0;var s,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var s=r?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(n,a,s):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(7294)),c=(s=n(617))&&s.__esModule?s:{default:s},o=n(3367),l=n(4287),u=n(7845);function f(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function h(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(h,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var s=!0,i=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){i=!0;var c=a.key.slice(a.key.indexOf("$")+1);e.has(c)?s=!1:e.add(c)}switch(a.type){case"title":case"base":t.has(a.type)?s=!1:t.add(a.type);break;case"meta":for(var o=0,l=p.length;o<l;o++){var u=p[o];if(a.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?s=!1:n.add(u);else{var f=a.props[u],d=r[u]||new Set;"name"===u&&i||!d.has(f)?(d.add(f),r[u]=d):s=!1}}}return s}}()).reverse().map((function(e,n){var s=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css"].some((function(t){return e.props.href.startsWith(t)}))){var c=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return c["data-href"]=c.href,c.href=void 0,i.default.cloneElement(e,c)}return i.default.cloneElement(e,{key:s})}))}function g(e){var t=e.children,n=(0,i.useContext)(o.AmpStateContext),r=(0,i.useContext)(l.HeadManagerContext);return i.default.createElement(c.default,{reduceComponentsToState:m,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)}g.rewind=function(){};var j=g;t.default=j},617:function(e,t,n){"use strict";var r=n(319),a=n(4575),s=n(3913),i=(n(1506),n(2205)),c=n(8585),o=n(9754);function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=o(e);if(t){var a=o(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var u=n(7294),f=function(e){i(n,e);var t=l(n);function n(e){var s;return a(this,n),(s=t.call(this,e))._hasHeadManager=void 0,s.emitChange=function(){s._hasHeadManager&&s.props.headManager.updateHead(s.props.reduceComponentsToState(r(s.props.headManager.mountedInstances),s.props))},s._hasHeadManager=s.props.headManager&&s.props.headManager.mountedInstances,s}return s(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(u.Component);t.default=f},6380:function(e,t,n){"use strict";n.r(t);var r=n(5893),a=n(9956),s=n(9008);t.default=function(){return(0,r.jsxs)("div",{className:"contact",children:[(0,r.jsx)(s.default,{children:(0,r.jsx)("title",{children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})}),(0,r.jsx)(a.Z,{}),(0,r.jsxs)("div",{className:"container",children:[(0,r.jsxs)("h1",{children:["\u0421\u0432\u044f\u0437\u0430\u0442\u044c\u0441\u044f ",(0,r.jsx)("br",{}),"\u0441 \u043d\u0430\u043c\u0438"]}),(0,r.jsxs)("div",{className:"contact_texts",children:[(0,r.jsxs)("div",{className:"contact_text",children:[(0,r.jsx)("p",{children:"\u041d\u0430\u0448 \u0430\u0434\u0440\u0435\u0441"}),(0,r.jsxs)("span",{children:["\u0420\u041a, \u0433. \u0410\u043b\u043c\u0430\u0442\u044b. ",(0,r.jsx)("br",{}),"\u0423\u043b. \u0422\u043e\u043b\u0435 \u0431\u0438 101, ",(0,r.jsx)("br",{}),'\u0411\u0426 "\u0422\u043e\u043b\u0435 \u0431\u0438", 3 \u044d\u0442\u0430\u0436, \u0431\u043b\u043e\u043a D']})]}),(0,r.jsxs)("div",{className:"contact_text",children:[(0,r.jsx)("p",{children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d\u044b"}),(0,r.jsxs)("span",{children:[(0,r.jsx)("a",{href:"tel:+77003505000",children:"+7 (700) 350-50-00"}),";"]})]}),(0,r.jsxs)("div",{className:"contact_text",children:[(0,r.jsx)("p",{children:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u044b\u0439 \u0430\u0434\u0440\u0435\u0441"}),(0,r.jsx)("span",{children:(0,r.jsx)("a",{href:"mailto:info@nashcompany.kz",children:"info@nashcompany.kz"})})]}),(0,r.jsxs)("div",{className:"contact_text",children:[(0,r.jsx)("p",{children:"\u0420\u0435\u0436\u0438\u043c \u0440\u0430\u0431\u043e\u0442\u044b"}),(0,r.jsxs)("span",{children:["\u041f\u043d-\u041f\u0442 09:00 \u2014 19:00 ",(0,r.jsx)("br",{}),"\u0421\u0431-\u0412\u0441 10:00 \u2014 14:00"]})]})]})]}),(0,r.jsx)("div",{className:"map",children:(0,r.jsx)("iframe",{className:"mb-5",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d363.2342540653101!2d76.92419441255856!3d43.254061779137025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836eb1531b39b3%3A0x97eb2ec73bccce23!2z0YPQu9C40YbQsCDQotC-0LvQtSDQkdC4IDEwMSwg0JDQu9C80LDRgtGLIDA1MDAxMg!5e0!3m2!1sru!2skz!4v1622551841972!5m2!1sru!2skz",width:"100%",height:550,frameBorder:0,style:{border:0},allowFullScreen:!0,"aria-hidden":"false",tabIndex:0})})]})}},8862:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contacts",function(){return n(6380)}])},9008:function(e,t,n){e.exports=n(7947)},4453:function(){}},function(e){e.O(0,[774,663,597,669,356,57],(function(){return t=8862,e(e.s=t);var t}));var t=e.O();_N_E=t}]);