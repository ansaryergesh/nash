(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1,179],{3646:function(e,t,n){var r=n(7228);e.exports=function(e){if(Array.isArray(e))return r(e)}},9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:function(e,t,n){var r=n(3646),a=n(6860),o=n(379),i=n(8206);e.exports=function(e){return r(e)||a(e)||o(e)||i()}},9956:function(e,t,n){"use strict";var r=n(5893),a=(n(5937),n(7294),n(1163));t.Z=function(){var e=(0,a.useRouter)();return(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"navigation",children:[(0,r.jsx)("a",{href:"/",children:(0,r.jsx)("img",{className:"logo",src:"/"===e.pathname?"/img/logo/logo.svg":"/img/logo/logoBlack.svg"})}),(0,r.jsxs)("ul",{className:"navigation--menu",children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/about",children:"\u041e \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/uslugi",children:"\u0423\u0441\u043b\u0443\u0433\u0438"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/praktika",children:"\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0430"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/news",children:"\u041f\u0440\u0435\u0441\u0441-\u0446\u0435\u043d\u0442\u0440"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"contacts",children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})})]}),(0,r.jsxs)("ul",{className:"navigation--contacts",children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("img",{src:"/img/phone.svg"}),"+7 777 777 77 77"]}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#",children:(0,r.jsx)("img",{src:"/img/insta.svg"})})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#",children:(0,r.jsx)("img",{src:"/img/facebook.svg"})})})]})]})})})}},3367:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},7845:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var r,a=(r=n(7294))&&r.__esModule?r:{default:r},o=n(3367);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,i=void 0!==o&&o;return n||a&&i}},4287:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=a},7947:function(e,t,n){"use strict";var r=n(9713);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=f,t.default=void 0;var o,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(7294)),s=(o=n(617))&&o.__esModule?o:{default:o},c=n(3367),u=n(4287),l=n(7845);function d(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function v(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0,i=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){i=!0;var s=a.key.slice(a.key.indexOf("$")+1);e.has(s)?o=!1:e.add(s)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var c=0,u=h.length;c<u;c++){var l=h[c];if(a.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?o=!1:n.add(l);else{var d=a.props[l],f=r[l]||new Set;"name"===l&&i||!f.has(d)?(f.add(d),r[l]=f):o=!1}}}return o}}()).reverse().map((function(e,n){var o=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css"].some((function(t){return e.props.href.startsWith(t)}))){var s=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return s["data-href"]=s.href,s.href=void 0,i.default.cloneElement(e,s)}return i.default.cloneElement(e,{key:o})}))}function m(e){var t=e.children,n=(0,i.useContext)(c.AmpStateContext),r=(0,i.useContext)(u.HeadManagerContext);return i.default.createElement(s.default,{reduceComponentsToState:v,headManager:r,inAmpMode:(0,l.isInAmpMode)(n)},t)}m.rewind=function(){};var x=m;t.default=x},617:function(e,t,n){"use strict";var r=n(319),a=n(4575),o=n(3913),i=(n(1506),n(2205)),s=n(8585),c=n(9754);function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return s(this,n)}}t.__esModule=!0,t.default=void 0;var l=n(7294),d=function(e){i(n,e);var t=u(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=d},3374:function(e,t,n){"use strict";n.r(t);var r=n(5893),a=n(9008),o=n(9956);t.default=function(){return(0,r.jsxs)("div",{className:"praktika",children:[(0,r.jsx)(a.default,{children:(0,r.jsx)("title",{children:"\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0430"})}),(0,r.jsxs)("div",{className:"header",children:[(0,r.jsx)("div",{className:"bg"}),(0,r.jsx)(o.Z,{}),(0,r.jsxs)("div",{className:"header--content container",children:[(0,r.jsx)("h2",{children:"\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0430"}),(0,r.jsxs)("p",{className:"",children:["\u0421 2008 \u0433\u043e\u0434\u0430 \u043d\u0430\u0448\u0438 \u044d\u043a\u0441\u043f\u0435\u0440\u0442\u044b \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0442 \u0441 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u043c\u0438 \u043e\u0442\u0440\u0430\u0441\u043b\u044f\u043c\u0438 \u043f\u0440\u0430\u0432\u0430, \u0443\u0447\u0430\u0441\u0442\u0432\u0443\u044e\u0442 \u0432 \u043d\u0430\u0443\u0447\u043d\u044b\u0445 \u043a\u043e\u043d\u0444\u0435\u0440\u0435\u043d\u0446\u0438\u044f\u0445, \u043f\u0440\u043e\u0432\u043e\u0434\u044f\u0442 \u0441\u0435\u043c\u0438\u043d\u0430\u0440\u044b \u0438 \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e \u0441\u043e\u0432\u0435\u0440\u0448\u0435\u043d\u0441\u0442\u0432\u0443\u044e\u0442 \u0441\u0432\u043e\u0438 \u043d\u0430\u0432\u044b\u043a\u0438. \u041c\u044b \u0432\u044b\u0440\u0430\u0431\u043e\u0442\u0430\u043b\u0438 \u0438\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u044b\u0439, \u0430\u0432\u0442\u043e\u0440\u0441\u043a\u0438\u0439 \u043f\u043e\u0434\u0445\u043e\u0434 \u0434\u043b\u044f \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u044e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0437\u0430\u0434\u0430\u0447 \u043b\u044e\u0431\u043e\u0439 \u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u0438. \u0417\u0430 \u0434\u0430\u043d\u043d\u044b\u0439 \u043f\u0435\u0440\u0438\u043e\u0434 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044f \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043b\u0430 6083 \u0434\u0435\u043b, \u0438\u0437 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 95% \u0431\u044b\u043b\u0438 \u0432\u044b\u0438\u0433\u0440\u044b\u0448\u043d\u044b\u043c\u0438.",(0,r.jsx)("br",{})," ",(0,r.jsx)("br",{}),"\u0412 \u0441\u0432\u043e\u0435\u0439 \u0440\u0430\u0431\u043e\u0442\u0435 \u043c\u044b \u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u044b \u043d\u0430 \u043e\u0442\u043a\u0440\u044b\u0442\u043e\u0441\u0442\u044c, \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c, \u0438\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0438 \u0437\u0430\u043a\u043e\u043d\u043d\u043e\u0441\u0442\u044c. \u041f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442\u043e\u043c \u0432 \u043d\u0430\u0448\u0435\u0439 \u0440\u0430\u0431\u043e\u0442\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0434\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u043e\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0433\u043e \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430, \u043e\u0441\u043d\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u043d\u0430 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u0430\u0445 \u0438 \u0446\u0435\u043b\u044f\u0445 \u043d\u0430\u0448\u0438\u0445 \u0414\u043e\u0432\u0435\u0440\u0438\u0442\u0435\u043b\u0435\u0439.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"NASH Company \u0437\u0430\u043d\u0438\u043c\u0430\u0435\u0442\u0441\u044f \u043e\u043a\u0430\u0437\u0430\u043d\u0438\u0435\u043c \u044e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0443\u0441\u043b\u0443\u0433 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0438\u043c \u0438 \u044e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u0438\u043c \u043b\u0438\u0446\u0430\u043c \u0431\u043e\u043b\u0435\u0435 11 \u043b\u0435\u0442 \u0438 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043d\u0430 \u0432\u044b\u0441\u0448\u0435\u043c \u0443\u0440\u043e\u0432\u043d\u0435 \u043f\u043e \u0420\u041a \u0438 \u0421\u041d\u0413.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"\u041c\u044b \u0438\u043c\u0435\u0435\u043c \u043e\u0433\u0440\u043e\u043c\u043d\u044b\u0439 \u043e\u043f\u044b\u0442 \u0432 \u0440\u0435\u0448\u0435\u043d\u0438\u0438 \u044e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043a\u043e\u043d\u0444\u043b\u0438\u043a\u0442\u043e\u0432 \u043b\u044e\u0431\u043e\u0439 \u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u0438 \u0437\u043d\u0430\u0435\u043c \u043e \u0442\u043e\u043c, \u0447\u0442\u043e \u043c\u043d\u043e\u0433\u0438\u0435 \u0434\u0435\u043b\u0430 \u043d\u0435 \u0442\u0435\u0440\u043f\u044f\u0442 \u043e\u0442\u043b\u0430\u0433\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432 \u0438 \u043f\u0440\u043e\u043c\u0435\u0434\u043b\u0435\u043d\u0438\u0439.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"\u041d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e \u043e\u0442 \u0442\u043e\u0433\u043e, \u043d\u0443\u0436\u043d\u0430 \u0432\u0430\u043c \u043f\u043e\u043c\u043e\u0449\u044c \u043f\u0440\u0438 \u0440\u0430\u0437\u0432\u043e\u0434\u0435, \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u0438 \u043d\u0430\u0441\u043b\u0435\u0434\u0441\u0442\u0432\u0430, \u043f\u0440\u0438\u0432\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u0438 \u0437\u0435\u043c\u0435\u043b\u044c\u043d\u043e\u0433\u043e \u0443\u0447\u0430\u0441\u0442\u043a\u0430, \u043f\u0435\u0440\u0435\u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u043a\u0435 \u043d\u0435\u0436\u0438\u043b\u043e\u0433\u043e \u043f\u043e\u043c\u0435\u0449\u0435\u043d\u0438\u044f \u0438\u043b\u0438 \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0435 \u0435\u0433\u043e \u0438\u0437 \u0436\u0438\u043b\u043e\u0433\u043e \u0432 \u043d\u0435\u0436\u0438\u043b\u043e\u0435, \u043d\u0430\u0448\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u044d\u043a\u0441\u043f\u0435\u0440\u0442\u043e\u0432 \u0432\u043e\u0437\u044c\u043c\u0435\u0442\u0441\u044f \u0437\u0430 \u0440\u0430\u0431\u043e\u0442\u0443 \u0432 \u043a\u0440\u0430\u0442\u0447\u0430\u0439\u0448\u0438\u0435 \u0441\u0440\u043e\u043a\u0438, \u043e\u043a\u0430\u0436\u0435\u0442 \u0443\u0441\u043b\u0443\u0433\u0438 \u0432 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u0432\u0437\u044b\u0441\u043a\u0430\u043d\u0438\u044f \u043f\u0440\u043e\u0441\u0440\u043e\u0447\u0435\u043d\u043d\u043e\u0439 \u0434\u0435\u0431\u0438\u0442\u043e\u0440\u0441\u043a\u043e\u0439 \u0437\u0430\u0434\u043e\u043b\u0436\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u043d\u0430 \u0434\u043e\u0441\u0443\u0434\u0435\u0431\u043d\u043e\u0439 \u0438 \u0441\u0443\u0434\u0435\u0431\u043d\u043e\u0439 \u0441\u0442\u0430\u0434\u0438\u044f\u0445, \u0441 \u0434\u0430\u043b\u044c\u043d\u0435\u0439\u0448\u0438\u043c \u0438\u0441\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u043c \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0441\u0442\u0432\u043e\u043c.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"\u041c\u044b \u0432\u0441\u0435\u0433\u0434\u0430 \u0433\u043e\u0442\u043e\u0432\u044b \u0432\u0437\u044f\u0442\u044c\u0441\u044f \u0437\u0430 \u0441\u0430\u043c\u044b\u0435 \u0441\u043b\u043e\u0436\u043d\u044b\u0435 \u044e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0441\u043f\u043e\u0440\u044b \u0438 \u043f\u043e\u043c\u043e\u0447\u044c \u0432\u0430\u043c \u0432 \u043b\u044e\u0431\u043e\u0439 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0438. \u0412\u044b \u0431\u0438\u0437\u043d\u0435\u0441\u043c\u0435\u043d? \u0422\u043e\u0433\u0434\u0430 \u043c\u044b \u0441 \u0440\u0430\u0434\u043e\u0441\u0442\u044c\u044e \u043e\u043a\u0430\u0436\u0435\u043c \u0432\u0430\u043c \u0443\u0441\u043b\u0443\u0433\u0438 \u044e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0441\u043e\u043f\u0440\u043e\u0432\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0431\u0438\u0437\u043d\u0435\u0441\u0430! \u0423 \u0432\u0430\u0441 \u0435\u0441\u0442\u044c \u043a\u0430\u043a\u0438\u0435-\u0442\u043e \u0432\u043e\u043f\u0440\u043e\u0441\u044b? \u041d\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u0440\u0435\u0448\u0438\u0442\u044c, \u043a\u0430\u043a \u043b\u0443\u0447\u0448\u0435 \u043f\u043e\u0441\u0442\u0443\u043f\u0438\u0442\u044c? \u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u043d\u0430\u043c, \u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u044f \u043e\u0442 \u044d\u043a\u0441\u043f\u0435\u0440\u0442\u043e\u0432 NASH Company \u0431\u0443\u0434\u0435\u0442 \u043e\u043a\u0430\u0437\u0430\u043d\u0430 \u0432\u0430\u043c \u0432 \u043f\u043e\u043b\u043d\u043e\u043c \u043e\u0431\u044a\u0435\u043c\u0435.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"\u041a\u0430\u0447\u0435\u0441\u0442\u0432\u043e \u044e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0443\u0441\u043b\u0443\u0433 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u043e \u0441\u043f\u0438\u0441\u043a\u043e\u043c \u0432\u044b\u0438\u0433\u0440\u0430\u043d\u043d\u044b\u0445 \u0434\u0435\u043b \u0438 \u0441\u0447\u0430\u0441\u0442\u043b\u0438\u0432\u044b\u043c\u0438 \u043a\u043b\u0438\u0435\u043d\u0442\u0430\u043c\u0438. \u0417\u0430 \u0434\u043e\u043b\u0433\u0438\u0435 \u0433\u043e\u0434\u044b \u044e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0438 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044f \u0437\u0430\u0440\u0430\u0431\u043e\u0442\u0430\u043b\u0430 \u0434\u0435\u043b\u043e\u0432\u0443\u044e \u0440\u0435\u043f\u0443\u0442\u0430\u0446\u0438\u044e, \u0443\u0432\u0430\u0436\u0435\u043d\u0438\u0435 \u0438 \u0434\u043e\u0432\u0435\u0440\u0438\u0435 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432."]})]})]})]})}},5803:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/praktika",function(){return n(3374)}])},5937:function(){},9008:function(e,t,n){e.exports=n(7947)},1163:function(e,t,n){e.exports=n(2441)},4453:function(){}},function(e){e.O(0,[774,178,614],(function(){return t=5803,e(e.s=t);var t}));var t=e.O();_N_E=t}]);