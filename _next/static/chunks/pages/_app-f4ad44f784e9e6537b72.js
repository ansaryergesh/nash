(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888,179],{3349:function(e,t,r){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r.d(t,{Z:function(){return n}})},6808:function(e,t,r){var n,i;!function(c){if(void 0===(i="function"===typeof(n=c)?n.call(t,r,t,e):n)||(e.exports=i),!0,e.exports=c(),!!0){var o=window.Cookies,s=window.Cookies=c();s.noConflict=function(){return window.Cookies=o,s}}}((function(){function e(){for(var e=0,t={};e<arguments.length;e++){var r=arguments[e];for(var n in r)t[n]=r[n]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function r(n){function i(){}function c(t,r,c){if("undefined"!==typeof document){"number"===typeof(c=e({path:"/"},i.defaults,c)).expires&&(c.expires=new Date(1*new Date+864e5*c.expires)),c.expires=c.expires?c.expires.toUTCString():"";try{var o=JSON.stringify(r);/^[\{\[]/.test(o)&&(r=o)}catch(l){}r=n.write?n.write(r,t):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var s="";for(var a in c)c[a]&&(s+="; "+a,!0!==c[a]&&(s+="="+c[a].split(";")[0]));return document.cookie=t+"="+r+s}}function o(e,r){if("undefined"!==typeof document){for(var i={},c=document.cookie?document.cookie.split("; "):[],o=0;o<c.length;o++){var s=c[o].split("="),a=s.slice(1).join("=");r||'"'!==a.charAt(0)||(a=a.slice(1,-1));try{var l=t(s[0]);if(a=(n.read||n)(a,l)||t(a),r)try{a=JSON.parse(a)}catch(u){}if(i[l]=a,e===l)break}catch(u){}}return e?i[e]:i}}return i.set=c,i.get=function(e){return o(e,!1)},i.getJSON=function(e){return o(e,!0)},i.remove=function(t,r){c(t,"",e(r,{expires:-1}))},i.defaults={},i.withConverter=r,i}((function(){}))}))},7544:function(e,t,r){e.exports=r(6381)},9956:function(e,t,r){"use strict";var n=r(6156),i=r(5893),c=(r(5937),r(7294)),o=r(1163),s=r(3190);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Z=function(e){var t=(0,o.useRouter)(),r=(0,c.useState)(!1),n=r[0],a=r[1];return(0,c.useEffect)((function(){n||(document.documentElement.style.height="100%",document.body.style.overflowY="hidden",console.log("true")),n&&(document.body.style.overflowY="unset",console.log("false"))}),[n]),(0,i.jsx)("div",{children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsxs)("div",{className:"navigation",children:[(0,i.jsx)("a",{href:"/",children:(0,i.jsx)("img",{alt:"image",className:"logo",src:(t.pathname,"/img/logo/logoBlack.svg")})}),(0,i.jsxs)("div",{className:"navigations",children:[(0,i.jsxs)("ul",{className:"navigation--contacts",children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("img",{alt:"image",src:"/img/phone.svg"}),(0,i.jsx)("a",{href:"tel:+77003505000"}),"+7 700 350 50 00"]}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"#",children:(0,i.jsx)("img",{alt:"image",src:"/img/insta.svg"})})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"#",children:(0,i.jsx)("img",{alt:"image",src:"/img/facebook.svg"})})})]}),(0,i.jsxs)("ul",{className:"navigation--menu",children:[(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"/about",children:"\u041e \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"/uslugi",children:"\u0423\u0441\u043b\u0443\u0433\u0438"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"/praktika",children:"\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0430"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"/news",children:"\u041f\u0440\u0435\u0441\u0441-\u0446\u0435\u043d\u0442\u0440"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"contacts",children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})})]})]})]}),(0,i.jsxs)("div",{className:"navigation_mobile",children:[(0,i.jsxs)(s.slide,l(l({},e),{},{onStateChange:function(){a(!n)},children:[(0,i.jsx)("a",{className:"menu-item",href:"/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430"}),(0,i.jsx)("a",{className:"menu-item",href:"/about",children:"\u041e \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438"}),(0,i.jsx)("a",{className:"menu-item",href:"/uslugi",children:"\u0423\u0441\u043b\u0443\u0433\u0438"}),(0,i.jsx)("a",{className:"menu-item",href:"/praktika",children:"\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0430"}),(0,i.jsx)("a",{className:"menu-item",href:"/news",children:"\u041f\u0440\u0435\u0441\u0441-\u0446\u0435\u043d\u0442\u0440"}),(0,i.jsx)("a",{className:"menu-item",href:"/contacts",children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}),(0,i.jsx)("hr",{}),(0,i.jsxs)("a",{href:"tel:+77003505000",className:"menu-item",children:[(0,i.jsx)("i",{className:"fa fa-phone"}),"+7 700 350 50 00"]}),(0,i.jsxs)("div",{className:"socials",children:[(0,i.jsx)("a",{className:"menu-item",href:"#",children:(0,i.jsx)("i",{className:"fa fa-instagram"})}),(0,i.jsx)("a",{className:"menu-item",href:"#",children:(0,i.jsx)("i",{className:"fa fa-facebook"})}),(0,i.jsxs)("p",{className:"menu-item address",children:[(0,i.jsx)("i",{className:"fa fa-map-marker"}),(0,i.jsx)("span",{children:'\u0433. \u0410\u043b\u043c\u0430\u0442\u044b. \u0423\u043b. \u0422\u043e\u043b\u0435 \u0431\u0438 101 \u0411\u0426 "\u0422\u043e\u043b\u0435 \u0431\u0438"'})]})]})]})),(0,i.jsx)("a",{className:"mob_phone",href:"tel:+77003505000",children:"+7700 350 5000"}),(0,i.jsx)("a",{href:"/",children:(0,i.jsx)("img",{alt:"image",className:"logo",src:"/img/logo/justlogo.png"})})]})]})})}},6381:function(e,t,r){"use strict";var n=r(7757),i=r(4575),c=r(3913),o=r(2205),s=r(8585),a=r(9754),l=r(8926);function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=a(e);if(t){var i=a(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return s(this,r)}}var f=r(5318);t.default=void 0;var h=f(r(7294)),p=r(3937);function d(e){return m.apply(this,arguments)}function m(){return(m=l(n.mark((function e(t){var r,i,c;return n.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.Component,i=t.ctx,e.next=3,(0,p.loadGetInitialProps)(r,i);case 3:return c=e.sent,e.abrupt("return",{pageProps:c});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}p.AppInitialProps,p.NextWebVitalsMetric;var j=function(e){o(r,e);var t=u(r);function r(){return i(this,r),t.apply(this,arguments)}return c(r,[{key:"componentDidCatch",value:function(e,t){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,r=e.Component,n=e.pageProps,i=e.__N_SSG,c=e.__N_SSP;return h.default.createElement(r,Object.assign({},n,i||c?{}:{url:g(t)}))}}]),r}(h.default.Component);function g(e){var t=e.pathname,r=e.asPath,n=e.query;return{get query(){return n},get pathname(){return t},get asPath(){return r},back:function(){e.back()},push:function(t,r){return e.push(t,r)},pushTo:function(t,r){var n=r?t:"",i=r||t;return e.push(n,i)},replace:function(t,r){return e.replace(t,r)},replaceTo:function(t,r){var n=r?t:"",i=r||t;return e.replace(n,i)}}}t.default=j,j.origGetInitialProps=d,j.getInitialProps=d},7885:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return w}});var n=r(5893),i=r(6156);function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var l=r(3349);function u(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?(0,l.Z)(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}r(6677),r(4437);var h=r(7544),p=(r(9956),function(){return(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"footer",children:[(0,n.jsxs)("div",{className:"footer--top",children:[(0,n.jsxs)("div",{className:"footer--logo",children:[(0,n.jsx)("a",{href:"/",children:(0,n.jsx)("img",{alt:"image",src:"/img/logo/logoBlack.svg"})}),(0,n.jsx)("h4",{children:"\u0420\u0435\u0448\u0430\u0435\u043c\u043e \u0432\u0441\u0435!"})]}),(0,n.jsxs)("ul",{className:"footer--social",children:[(0,n.jsx)("li",{children:(0,n.jsx)("span",{children:"\u0421\u043b\u0435\u0434\u0443\u0439 \u0437\u0430 \u043d\u0430\u043c\u0438"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#",children:(0,n.jsx)("img",{alt:"image",src:"/img/insta.svg"})})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#",children:(0,n.jsx)("img",{alt:"image",src:"/img/facebook.svg"})})})]}),(0,n.jsxs)("div",{className:"footer--mob",children:[(0,n.jsx)("a",{href:"/",children:(0,n.jsx)("img",{alt:"image",className:"logo",src:"/img/logo/logoBlack.svg"})}),(0,n.jsxs)("ul",{className:"footer--mob__social",children:[(0,n.jsx)("li",{}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#",children:(0,n.jsx)("img",{alt:"image",src:"/img/insta.svg"})})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#",children:(0,n.jsx)("img",{alt:"image",src:"/img/facebook.svg"})})})]})]})]}),(0,n.jsxs)("div",{className:"footer--links",children:[(0,n.jsx)("p",{children:"Copyright 2021 \xa9 NASH company - \u0432\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u044b"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"/about",children:"\u041e \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"/uslugi",children:"\u0423\u0441\u043b\u0443\u0433\u0438"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"/praktika",children:"\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0430"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"/news",children:"\u041f\u0440\u0435\u0441\u0441 \u0446\u0435\u043d\u0442\u0440"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#",children:"\u041e\u0442\u0437\u044b\u0432\u044b"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"/contacts",children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442"})})]})]})]})})}),d=r(1163),m=r(7294),j=r(6808),g=r.n(j),x=function(){var e=(0,d.useRouter)(),t=e.query.v,r=e.query.utm_source,i=e.query.utm_medium,c=e.query.utm_campaign,o=e.query.click_id,s="guruleads"===r||"doaff"===r,a=t||o;return(0,m.useEffect)((function(){s&&(g().set("click_id",a,{expires:30}),g().set("utm_source",r,{expires:30}),g().set("utm_medium",i,{expires:30}),g().set("utm_campaign",c,{expires:30}))}),[r]),(0,n.jsx)("div",{})},v=function(){var e=(0,d.useRouter)().pathname,t="/uslugi"!==e&&"/getservice"!==e&&"/jurservice"!==e;return(0,n.jsx)("div",{children:!0===t&&(0,n.jsx)("a",{href:"/uslugi",className:"fixed_btn",children:"\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c \u0443\u0441\u043b\u0443\u0433\u0443"})})};function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function O(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=f(e);if(t){var i=f(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return u(this,r)}}var w=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(l,e);var t,r,i,a=O(l);function l(){return c(this,l),a.apply(this,arguments)}return t=l,(r=[{key:"componentDidMount",value:function(){d.default.events.on("routeChangeComplete",(function(){document.body.style.overflowY="unset",document.documentElement.style.height="inherit","/getservice"===d.default.pathname&&"/jurservice"===d.default.pathname||window.scrollTo(0,0)}))}},{key:"render",value:function(){var e=this.props,t=e.Component,r=e.pageProps;return e.store,(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t,b({},r)),(0,n.jsx)(p,{}),(0,n.jsx)(x,{}),(0,n.jsx)(v,{})]})}}])&&o(t.prototype,r),i&&o(t,i),l}(h.default)},1780:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(7885)}])},4437:function(){},6677:function(){},4453:function(){}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,663,178,129,902],(function(){return t(1780),t(2441)}));var r=e.O();_N_E=r}]);