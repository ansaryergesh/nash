(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[402,179],{3646:function(e,t,n){var r=n(7228);e.exports=function(e){if(Array.isArray(e))return r(e)}},9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:function(e,t,n){var r=n(3646),a=n(6860),s=n(379),i=n(8206);e.exports=function(e){return r(e)||a(e)||s(e)||i()}},5264:function(e,t,n){"use strict";var r=n(5893),a=n(1163),s=n(7294);t.Z=function(e){var t=(0,a.useRouter)();return(0,s.useEffect)((function(){e.isOpen&&(document.documentElement.style.height="100%",document.body.style.overflowY="hidden",console.log("true")),e.isOpen||(document.body.style.overflowY="unset",console.log("false")),document.body.style.overflowX="hidden"}),[e.isOpen]),!0===e.isOpen?(0,r.jsx)("div",{"data-name":"modalka_block",className:"modalka_block ".concat("/getservice"===t.pathname&&"modalka_code"),onClick:function(t){return function(t){t.preventDefault();var n=t.target.dataset.name;console.log(n),e.onClose&&"modalka_block"===n&&e.onClose()}(t)},children:(0,r.jsx)("div",{className:"modalka_body",children:e.children})}):null}},5481:function(e,t,n){"use strict";var r=n(5893),a=n(9326),s=n(5264),i=n(1163),o=n(7294);t.Z=function(e){var t=e.isModalOpen,n=e.closeModal,c=e.id,l=e.type,u=(0,i.useRouter)(),d=("fiz"===l?a.B:a.u).find((function(e){return e.id==c}));return(0,o.useEffect)((function(){}),[t]),(0,r.jsx)("div",{children:(0,r.jsx)(s.Z,{isOpen:t,onClose:function(){return n()},children:(0,r.jsxs)("div",{className:"modalka_content",children:[(0,r.jsxs)("div",{className:"modalka_top",children:[(0,r.jsx)("h2",{children:d&&void 0!==d.name?d.name:""}),"fiz"===l&&(0,r.jsx)("img",{alt:"image",src:"/img/uslugi/".concat(c,".svg")}),"jur"===l&&(0,r.jsx)("img",{alt:"image",src:"/img/uslugi/yur".concat(c,".svg")}),(0,r.jsx)("img",{alt:"image",className:"line",src:"/img/uslugi/line.svg"})]}),(0,r.jsx)("p",{children:"\u041d\u0430\u0448\u0438 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u043b\u0438 \u043f\u0440\u043e\u0434\u0443\u043a\u0442, \u0431\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f \u043a\u043e\u0442\u043e\u0440\u043e\u043c\u0443 \u0412\u0430\u043c \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u044d\u043a\u0441\u043a\u043b\u044e\u0437\u0438\u0432\u043d\u0430\u044f \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0432 \u043e\u043d\u043b\u0430\u0439\u043d \u0440\u0435\u0436\u0438\u043c\u0435"}),(0,r.jsx)("a",{href:"/getservice",onClick:function(){"fiz"===l?u.push({pathname:"/getservice",scrollreset:!0}):i.default.push("/jurservice").then((function(){return window.scrollTo(0,0)}))},children:(0,r.jsx)("div",{className:"button",children:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0443\u0441\u043b\u0443\u0433\u0443"})})]})})})}},9956:function(e,t,n){"use strict";var r=n(6156),a=n(5893),s=(n(5937),n(7294)),i=n(1163),o=n(3190);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.Z=function(e){var t=(0,i.useRouter)(),n=(0,s.useState)(!1),r=n[0],c=n[1];return(0,s.useEffect)((function(){r||(document.documentElement.style.height="100%",document.body.style.overflowY="hidden",console.log("true")),r&&(document.body.style.overflowY="unset",console.log("false"))}),[r]),(0,a.jsx)("div",{children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsxs)("div",{className:"navigation",children:[(0,a.jsx)("a",{href:"/",children:(0,a.jsx)("img",{alt:"image",className:"logo",src:(t.pathname,"/img/logo/logoBlack.svg")})}),(0,a.jsxs)("div",{className:"navigations",children:[(0,a.jsxs)("ul",{className:"navigation--contacts",children:[(0,a.jsxs)("li",{children:[(0,a.jsx)("img",{alt:"image",src:"/img/phone.svg"}),(0,a.jsx)("a",{href:"tel:+77003505000"}),"+7 700 350 50 00"]}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#",children:(0,a.jsx)("img",{alt:"image",src:"/img/insta.svg"})})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#",children:(0,a.jsx)("img",{alt:"image",src:"/img/facebook.svg"})})})]}),(0,a.jsxs)("ul",{className:"navigation--menu",children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"/about",children:"\u041e \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"/uslugi",children:"\u0423\u0441\u043b\u0443\u0433\u0438"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"/praktika",children:"\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0430"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"/news",children:"\u041f\u0440\u0435\u0441\u0441-\u0446\u0435\u043d\u0442\u0440"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"contacts",children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})})]})]})]}),(0,a.jsxs)("div",{className:"navigation_mobile",children:[(0,a.jsxs)(o.slide,l(l({},e),{},{onStateChange:function(){c(!r)},children:[(0,a.jsx)("a",{className:"menu-item",href:"/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430"}),(0,a.jsx)("a",{className:"menu-item",href:"/about",children:"\u041e \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438"}),(0,a.jsx)("a",{className:"menu-item",href:"/uslugi",children:"\u0423\u0441\u043b\u0443\u0433\u0438"}),(0,a.jsx)("a",{className:"menu-item",href:"/praktika",children:"\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0430"}),(0,a.jsx)("a",{className:"menu-item",href:"/news",children:"\u041f\u0440\u0435\u0441\u0441-\u0446\u0435\u043d\u0442\u0440"}),(0,a.jsx)("a",{className:"menu-item",href:"/contacts",children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}),(0,a.jsx)("hr",{}),(0,a.jsxs)("a",{href:"tel:+77003505000",className:"menu-item",children:[(0,a.jsx)("i",{className:"fa fa-phone"}),"+7 700 350 50 00"]}),(0,a.jsxs)("div",{className:"socials",children:[(0,a.jsx)("a",{className:"menu-item",href:"#",children:(0,a.jsx)("i",{className:"fa fa-instagram"})}),(0,a.jsx)("a",{className:"menu-item",href:"#",children:(0,a.jsx)("i",{className:"fa fa-facebook"})}),(0,a.jsxs)("p",{className:"menu-item address",children:[(0,a.jsx)("i",{className:"fa fa-map-marker"}),(0,a.jsx)("span",{children:'\u0433. \u0410\u043b\u043c\u0430\u0442\u044b. \u0423\u043b. \u0422\u043e\u043b\u0435 \u0431\u0438 101 \u0411\u0426 "\u0422\u043e\u043b\u0435 \u0431\u0438"'})]})]})]})),(0,a.jsx)("a",{className:"mob_phone",href:"tel:+77003505000",children:"+7700 350 5000"}),(0,a.jsx)("a",{href:"/",children:(0,a.jsx)("img",{alt:"image",className:"logo",src:"/img/logo/justlogo.png"})})]})]})})}},9395:function(e,t,n){"use strict";var r=n(5893),a=n(1163);t.Z=function(e){var t=e.list,n=e.type,s=e.setModal,i=e.setId,o=(0,a.useRouter)();return(0,r.jsx)("div",{className:"services--lists",children:t.map((function(e,t){return(0,r.jsxs)("div",{onClick:function(){return function(e){s(!0),i(e+1),console.log(parseInt(e)+1)}(t)},"data-id":t+1,className:"services--list",children:["fiz"===n&&(0,r.jsx)("img",{alt:"image",className:"service_icon",src:"/img/uslugi/".concat(t+1,".svg")}),"jur"===n&&(0,r.jsx)("img",{alt:"image",className:"service_icon",src:"/img/uslugi/yur".concat(t+1,".svg")}),(0,r.jsx)("span",{children:e.name}),"/"===o.pathname&&(0,r.jsx)("img",{alt:"image",className:"path",src:"/img/uslugi/line.svg"})]})}))})}},9326:function(e,t,n){"use strict";n.d(t,{B:function(){return r},u:function(){return a}});var r=[{id:"1",name:"\u0421\u043f\u043e\u0440\u044b \u043f\u043e \u043a\u0440\u0435\u0434\u0438\u0442\u0430\u043c"},{id:"2",name:"\u0410\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u0438\u0432\u043d\u044b\u0435 \u0434\u0435\u043b\u0430"},{id:"3",name:"\u0421\u0435\u043c\u0435\u0439\u043d\u044b\u0435 \u0441\u043f\u043e\u0440\u044b"},{id:"4",name:"\u041f\u043e \u0437\u0435\u043c\u0435\u043b\u043d\u044b\u043c \u0434\u0435\u043b\u0430\u043c"},{id:"5",name:"\u041f\u043e \u0442\u0440\u0443\u0434\u043e\u0432\u044b\u043c \u0441\u043f\u043e\u0440\u0430\u043c"},{id:"6",name:"\u0411\u0430\u043d\u043a\u0440\u043e\u0442\u0441\u0442\u0432\u043e \u0438 \u0440\u0435\u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f \u044e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043b\u0438\u0446"},{id:"7",name:"\u041f\u043e \u0436\u0438\u043b\u0438\u0449\u043d\u044b\u043c \u0441\u043f\u043e\u0440\u0430\u043c"},{id:"8",name:"\u041f\u043e \u0441\u0442\u0440\u0430\u0445\u043e\u0432\u044b\u043c \u0434\u0435\u043b\u0430\u043c"},{id:"9",name:"\u041f\u043e \u043d\u0430\u0441\u043b\u0435\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u043c \u0434\u0435\u043b\u0430\u043c"},{id:"10",name:"\u041f\u043e \u043f\u0435\u043d\u0441\u0438\u043e\u043d\u043d\u044b\u043c \u0434\u0435\u043b\u0430\u043c"},{id:"11",name:"\u0417\u0430\u0449\u0438\u0442\u0430 \u043f\u0440\u0430\u0432 \u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b\u0435\u0439"},{id:"12",name:"\u0410\u0432\u0442\u043e\u044e\u0440\u0438\u0441\u0442"},{id:"13",name:"\u0418\u043d\u0442\u0435\u043b\u043b\u0435\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u0430\u044f \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u0438 \u0430\u0432\u0442\u043e\u0440\u0441\u043a\u043e\u0435 \u043f\u0440\u0430\u0432\u043e"},{id:"14",name:"\u041c\u0438\u0433\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u0443\u0441\u043b\u0443\u0433\u0438"},{id:"15",name:"\u041b\u0438\u0447\u043d\u044b\u0439 \u0430\u0434\u0432\u043e\u043a\u0430\u0442"},{id:"16",name:"\u041c\u0435\u0434\u0438\u0446\u0438\u043d\u0441\u043a\u0438\u0435 \u0441\u043f\u043e\u0440\u044b"}],a=[{id:"1",name:"\u0410\u0440\u0431\u0438\u0442\u0440\u0430\u0436"},{id:"2",name:"\u041f\u043e \u043a\u043e\u0440\u043f\u043e\u0440\u0430\u0442\u0438\u0432\u043d\u044b\u043c \u0441\u043f\u043e\u0440\u0430\u043c"},{id:"3",name:"\u0417\u0430\u0449\u0438\u0442\u0430 \u0434\u0435\u043b\u043e\u0432\u043e\u0439 \u0440\u0435\u043f\u0443\u0442\u0430\u0446\u0438\u0438"},{id:"4",name:"\u041f\u0440\u0438\u0432\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044f, \u0433\u043e\u0441\u0437\u0430\u043a\u0443\u043f\u043a\u0438, \u0433\u043e\u0441\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u043e"},{id:"5",name:"\u041d\u0435\u0434\u0432\u0438\u0436\u0438\u043c\u043e\u0441\u0442\u044c, \u0437\u0435\u043c\u043b\u044f, \u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e"},{id:"6",name:"\u0411\u0430\u043d\u043a\u0440\u043e\u0442\u0441\u0442\u0432\u043e \u0438 \u0440\u0435\u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f \u044e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043b\u0438\u0446"},{id:"7",name:"\u0412\u0437\u044b\u0441\u043a\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0441\u0440\u043e\u0447\u0435\u043d\u043d\u043e\u0439 \u0434\u0435\u0431\u0438\u0442\u043e\u0440\u0441\u043a\u043e\u0439 \u0437\u0430\u0434\u043e\u043b\u0436\u0435\u043d\u043d\u043e\u0441\u0442\u0438"},{id:"8",name:"\u042d\u043a\u0441\u043f\u0435\u0440\u0442 \u043f\u043e \u043d\u0430\u043b\u043e\u0433\u043e\u0432\u044b\u043c \u0441\u043f\u043e\u0440\u0430\u043c"},{id:"9",name:"\u0412\u043d\u0435\u0441\u0443\u0434\u0435\u0431\u043d\u0430\u044f \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0437\u0430\u043b\u043e\u0433\u043e\u0432\u043e\u0433\u043e \u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430"},{id:"10",name:"\u042d\u043a\u0441\u043f\u0435\u0440\u0442 \u043f\u043e \u0441\u0442\u0440\u0430\u0445\u043e\u0432\u044b\u043c \u0434\u0435\u043b\u0430\u043c"},{id:"11",name:"\u042d\u043a\u0441\u043f\u0435\u0440\u0442 \u043f\u043e \u0442\u0430\u043c\u043e\u0436\u0435\u043d\u043d\u044b\u043c \u0441\u043f\u043e\u0440\u0430\u043c"}]},3367:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},7845:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(s.AmpStateContext))};var r,a=(r=n(7294))&&r.__esModule?r:{default:r},s=n(3367);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,s=e.hasQuery,i=void 0!==s&&s;return n||a&&i}},4287:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=a},7947:function(e,t,n){"use strict";var r=n(9713);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=f,t.default=void 0;var s,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var s=r?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(n,a,s):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(7294)),o=(s=n(617))&&s.__esModule?s:{default:s},c=n(3367),l=n(4287),u=n(7845);function d(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function m(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(m,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var s=!0,i=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){i=!0;var o=a.key.slice(a.key.indexOf("$")+1);e.has(o)?s=!1:e.add(o)}switch(a.type){case"title":case"base":t.has(a.type)?s=!1:t.add(a.type);break;case"meta":for(var c=0,l=h.length;c<l;c++){var u=h[c];if(a.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?s=!1:n.add(u);else{var d=a.props[u],f=r[u]||new Set;"name"===u&&i||!f.has(d)?(f.add(d),r[u]=f):s=!1}}}return s}}()).reverse().map((function(e,n){var s=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css"].some((function(t){return e.props.href.startsWith(t)}))){var o=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return o["data-href"]=o.href,o.href=void 0,i.default.cloneElement(e,o)}return i.default.cloneElement(e,{key:s})}))}function v(e){var t=e.children,n=(0,i.useContext)(c.AmpStateContext),r=(0,i.useContext)(l.HeadManagerContext);return i.default.createElement(o.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)}v.rewind=function(){};var g=v;t.default=g},617:function(e,t,n){"use strict";var r=n(319),a=n(4575),s=n(3913),i=(n(1506),n(2205)),o=n(8585),c=n(9754);function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return o(this,n)}}t.__esModule=!0,t.default=void 0;var u=n(7294),d=function(e){i(n,e);var t=l(n);function n(e){var s;return a(this,n),(s=t.call(this,e))._hasHeadManager=void 0,s.emitChange=function(){s._hasHeadManager&&s.props.headManager.updateHead(s.props.reduceComponentsToState(r(s.props.headManager.mountedInstances),s.props))},s._hasHeadManager=s.props.headManager&&s.props.headManager.mountedInstances,s}return s(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(u.Component);t.default=d},4483:function(e,t,n){"use strict";n.r(t);var r=n(5893),a=n(7294),s=n(5481),i=n(9956),o=n(9395),c=n(9326),l=n(9008);t.default=function(){var e=(0,a.useState)(!1),t=e[0],n=e[1],u=(0,a.useState)(),d=u[0],f=u[1];return(0,r.jsxs)("div",{className:"uslugi",children:[(0,r.jsx)(l.default,{children:(0,r.jsx)("title",{children:"\u0423\u0441\u043b\u0443\u0433\u0438"})}),(0,r.jsx)(s.Z,{isModalOpen:t,closeModal:function(){n(!1)},id:d,type:"fiz"}),(0,r.jsxs)("div",{className:"header",children:[(0,r.jsx)("div",{className:"bg"}),(0,r.jsx)(i.Z,{}),(0,r.jsxs)("div",{className:"header--content",children:[(0,r.jsxs)("h1",{children:["\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c",(0,r.jsx)("br",{}),"\u0443\u0441\u043b\u0443\u0433\u0443:"]}),(0,r.jsxs)("div",{className:"content_buttons",children:[(0,r.jsx)("a",{href:"/getservice",children:(0,r.jsx)("input",{className:"button",value:"\u0424\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043b\u0438\u0446\u0430",type:"button"})}),(0,r.jsxs)("a",{href:"/jurservice",children:[" ",(0,r.jsx)("input",{className:"button button--light",value:"\u042e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043b\u0438\u0446\u0430",type:"button"})]})]})]})]}),(0,r.jsx)("div",{className:"uslugi--list container",children:(0,r.jsxs)("div",{className:"services",children:[(0,r.jsx)("h2",{children:"\u0423\u0441\u043b\u0443\u0433\u0438 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0438\u043c \u043b\u0438\u0446\u0430\u043c"}),(0,r.jsx)(o.Z,{list:c.B,type:"fiz",setModal:n,setId:f}),(0,r.jsx)("h2",{children:"\u0423\u0441\u043b\u0443\u0433\u0438 \u044e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u0438\u043c \u043b\u0438\u0446\u0430\u043c"}),(0,r.jsx)(o.Z,{list:c.u,type:"jur",setModal:n,setId:f})]})})]})}},5419:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/uslugi",function(){return n(4483)}])},9008:function(e,t,n){e.exports=n(7947)},4453:function(){}},function(e){e.O(0,[774,663,178,129],(function(){return t=5419,e(e.s=t);var t}));var t=e.O();_N_E=t}]);