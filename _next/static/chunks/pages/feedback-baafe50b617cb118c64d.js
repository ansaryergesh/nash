(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[862,179],{2949:function(e,n,r){"use strict";r.d(n,{Z:function(){return s}});var t=r(9756);function s(e,n){if(null==e)return{};var r,s,a=(0,t.Z)(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(s=0;s<c.length;s++)r=c[s],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}},6072:function(e,n,r){"use strict";var t=r(6156),s=r(5893),a=r(2949),c=r(7294),i=r(6627),l=r.n(i);function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function u(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}n.Z=function(e){var n=e.field,r=(e.form,(0,a.Z)(e,["field","form"])),t=(0,c.useState)({value:"",mask:"+7(999)-999-9999"}),i=t[0];t[1];return(0,s.jsx)(l(),u(u(u({},i),{},{maskChar:null,className:"my-input"},n),r))}},2089:function(e,n,r){"use strict";var t=r(5893);n.Z=function(){return(0,t.jsx)("div",{className:"loader",children:(0,t.jsxs)("div",{className:"loader--content",children:[(0,t.jsx)("img",{alt:"image",className:"logo",src:"/img/logo/logoSmall.svg"}),(0,t.jsx)("p",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."})]})})}},9956:function(e,n,r){"use strict";var t=r(6156),s=r(5893),a=(r(5937),r(7294)),c=r(1163),i=r(3190),l=r(1664),o=r(4494),u=r(6808),m=r.n(u),f=(r(9669),r(741));function h(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function d(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?h(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var j=function(e){var n=e.children,r=e.className,t=e.href;return(0,s.jsx)(l.default,{href:t,children:(0,s.jsx)("a",{className:r,children:n})})};n.Z=(0,o.$j)((function(e){var n=e.userReducer;return{user:n.user,loggedIn:n.loggedIn}}),null)((function(e){var n=(0,a.useState)(!1),r=n[0],t=n[1],l=!(!m().get("token")||!e.loggedIn);(0,a.useEffect)((function(){console.log("checking"+e.loggedIn),e.loggedIn&&t(!0)}),[e.loggedIn]);var o=(0,c.useRouter)(),u=(0,a.useState)(!1),h=u[0],g=u[1];return(0,a.useEffect)((function(){h||(document.documentElement.style.height="100%",document.body.style.overflowY="hidden"),h&&(document.body.style.overflowY="unset")}),[h]),(0,s.jsx)("div",{children:(0,s.jsxs)("div",{className:"container",children:[(0,s.jsxs)("div",{className:"navigation",children:[(0,s.jsx)(j,{href:"/",children:(0,s.jsx)("img",{alt:"image",className:"logo",src:(o.pathname,"/img/logo/logoBlack.svg")})}),(0,s.jsxs)("div",{className:"navigations",children:[(0,s.jsxs)("ul",{className:"navigation--contacts",children:[(0,s.jsxs)("li",{children:[(0,s.jsx)("img",{alt:"image",src:"/img/phone.svg"}),(0,s.jsx)("a",{href:"tel:+77003505000"}),"+7 700 350 50 00"]}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{target:"_blank",href:"https://www.instagram.com/nashcompany.kz/",children:(0,s.jsx)("img",{alt:"image",src:"/img/insta.svg"})})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#",children:(0,s.jsx)("img",{alt:"image",src:"/img/facebook.svg"})})}),(0,s.jsxs)("li",{className:"pulsed_link",children:[(r||l)&&!o.pathname.includes("cabinet")&&(0,s.jsx)("div",{className:"pulsing_block",children:(0,s.jsxs)("div",{class:"pulsing",children:[(0,s.jsx)("div",{class:"ringring"}),(0,s.jsx)("div",{class:"circle"})]})}),(0,s.jsxs)("a",{className:"user_icon",href:r?"/cabinet":"/login",children:[(0,s.jsx)("img",{alt:"image",src:"/img/user_icon.svg"})," ",(r||l)&&"".concat((0,f.Qm)(e.user.fio))]})]})]}),(0,s.jsxs)("ul",{className:"navigation--menu",children:[(0,s.jsx)("li",{children:(0,s.jsx)(j,{href:"/about",children:"\u041e \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438"})}),(0,s.jsx)("li",{children:(0,s.jsx)(j,{href:"/uslugi",children:"\u0423\u0441\u043b\u0443\u0433\u0438"})}),(0,s.jsx)("li",{children:(0,s.jsx)(j,{href:"/praktika",children:"\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0430"})}),(0,s.jsx)("li",{children:(0,s.jsx)(j,{href:"/news",children:"\u041f\u0440\u0435\u0441\u0441-\u0446\u0435\u043d\u0442\u0440"})}),(0,s.jsx)("li",{children:(0,s.jsx)(j,{href:"/contacts",children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"/\u041f\u0423\u0411\u041b\u0418\u0427\u041d\u0410\u042f \u041e\u0424\u0415\u0420\u0422\u0410.pdf",target:"_blank",children:"\u041f\u0443\u0431\u043b\u0438\u0447\u043d\u0430\u044f \u043e\u0444\u0435\u0440\u0442\u0430"})})]})]})]}),(0,s.jsxs)("div",{className:"navigation_mobile",children:[(0,s.jsxs)(i.slide,d(d({},e),{},{onStateChange:function(){g(!h)},children:[(0,s.jsx)(j,{className:"menu-item",href:"/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430"}),(0,s.jsx)(j,{className:"menu-item",href:"/about",children:"\u041e \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438"}),(0,s.jsx)(j,{className:"menu-item",href:"/uslugi",children:"\u0423\u0441\u043b\u0443\u0433\u0438"}),(0,s.jsx)(j,{className:"menu-item",href:"/praktika",children:"\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0430"}),(0,s.jsx)(j,{className:"menu-item",href:r?"/cabinet":"/login",children:"\u041b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442"}),(0,s.jsx)(j,{className:"menu-item",href:"/news",children:"\u041f\u0440\u0435\u0441\u0441-\u0446\u0435\u043d\u0442\u0440"}),(0,s.jsx)(j,{className:"menu-item",href:"/contacts",children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}),(0,s.jsx)("a",{href:"/\u041f\u0423\u0411\u041b\u0418\u0427\u041d\u0410\u042f \u041e\u0424\u0415\u0420\u0422\u0410.pdf",className:"menu-item",target:"_blank",children:"\u041f\u0443\u0431\u043b\u0438\u0447\u043d\u0430\u044f \u043e\u0444\u0435\u0440\u0442\u0430"}),(0,s.jsx)("hr",{}),(0,s.jsxs)("a",{href:"tel:+77003505000",className:"menu-item",children:[(0,s.jsx)("i",{className:"fa fa-phone"}),"+7 700 350 50 00"]}),(0,s.jsxs)("div",{className:"socials",children:[(0,s.jsx)("a",{className:"menu-item",target:"_blank",href:"https://www.instagram.com/nashcompany.kz/",children:(0,s.jsx)("i",{className:"fa fa-instagram"})}),(0,s.jsx)("a",{className:"menu-item",href:"#",children:(0,s.jsx)("i",{className:"fa fa-facebook"})}),(0,s.jsxs)("p",{className:"menu-item address",children:[(0,s.jsx)("i",{className:"fa fa-map-marker"}),(0,s.jsx)("span",{children:'\u0433. \u0410\u043b\u043c\u0430\u0442\u044b. \u0423\u043b. \u0422\u043e\u043b\u0435 \u0431\u0438 101 \u0411\u0426 "\u0422\u043e\u043b\u0435 \u0431\u0438"'})]})]})]})),(0,s.jsx)("a",{className:"mob_phone",href:"tel:+77003505000",children:"+7700 350 5000"}),(0,s.jsx)("a",{href:"/",children:(0,s.jsx)("img",{alt:"image",className:"logo",src:"/img/logo/justlogo.png"})})]})]})})}))},741:function(e,n,r){"use strict";r.d(n,{Kp:function(){return t},Iw:function(){return a},Qm:function(){return c},x3:function(){return i}});var t=function(e){return String(e).replace(/[^A-Z0-9]/g,"")},s=r(2618),a=function(){setTimeout((function(){s(".text-danger",{offset:0,align:"middle",ease:"outExpo",duration:600})}),100)},c=function(e){var n=null!==e?e.split(" "):"\u041b\u0438\u0447\u043d\u044b\u0439 \u041a\u0430\u0431\u0438\u043d\u0435\u0442";return n[0]+" "+n[n.length-1].substring(0,1).toUpperCase()+"."},i=function(e,n){return e.filter((function(e){return Object.keys(n).every((function(r){return e[r]==n[r]}))}))}},346:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return b}});var t=r(5893),s=r(9956),a=r(9008),c=r(1163),i=(r(6808),r(7294)),l=r(2089),o=r(6156),u=r(9669),m=r.n(u),f=r(6627),h=r.n(f),d=r(6737),j=r.n(d),g=r(741);r(6072);function p(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function x(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?p(Object(r),!0).forEach((function(n){(0,o.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var v=function(){var e,n=(0,i.useState)({fio:"",phone:"",comment:"",iin:""}),r=n[0],s=n[1],a=(0,i.useState)(""),u=a[0],f=a[1],d=(0,i.useState)(!1),p=d[0],v=d[1];(0,i.useEffect)((function(){u&&(0,g.Iw)()}),[u]);var b=function(e){var n=e.target.name;s(x(x({},r),{},(0,o.Z)({},n,e.target.value)))};return(0,t.jsxs)("div",{className:"form_register",children:[p&&(0,t.jsx)(l.Z,{}),(0,t.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),v(!0),f(""),m().get("".concat("https://crediter.kz/api","/addFeedback"),{params:r}).then((function(e){s({fio:"",phone:"",comment:"",iin:""}),v(!1),console.log(e),e.data.success?j()("\u0421\u043f\u0430\u0441\u0438\u0431\u043e \u0437\u0430 \u0432\u0430\u0448 \u043e\u0442\u0437\u044b\u0432","\u0412\u0430\u0448 \u043e\u0442\u0437\u044b\u0432 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d","success").then((function(){c.default.push("/")})):f(e.data.message)})).catch((function(e){console.log(e),v(!1)}))}(e)},children:[u&&(0,t.jsx)("div",{className:"alert-error text-danger",children:u}),(0,t.jsx)("input",{name:"fio",type:"text",className:"capitalize",value:r.fio,onChange:function(e){return b(e)},placeholder:"\u0424\u0418\u041e"}),(0,t.jsx)(h(),{type:"tel",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0418\u0418\u041d",name:"iin",mask:"999999999999",maskChar:null,value:r.iin,onChange:function(e){return b(e)}}),(0,t.jsx)(h(),{type:"tel",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u043d\u043e\u043c\u0435\u0440",name:"phone",mask:"+7(999)-999-9999",maskChar:null,value:r.phone,onChange:function(e){return b(e)}}),(0,t.jsx)("textarea",{placeholder:"\u041e\u0442\u0437\u044b\u0432",name:"comment",onChange:function(e){return b(e)},value:r.comment}),(0,t.jsx)("input",(e={className:"singlebtn",type:"submit"},(0,o.Z)(e,"className","button"),(0,o.Z)(e,"value","\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"),e))]})]})},b=function(){(0,c.useRouter)();var e=(0,i.useState)(!1),n=e[0];e[1];return(0,t.jsxs)("div",{className:"getservice",children:[n&&(0,t.jsx)(l.Z,{}),(0,t.jsx)(a.default,{children:(0,t.jsx)("title",{children:"\u041e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043e\u0442\u0437\u044b\u0432"})}),(0,t.jsxs)("div",{className:"header",children:[(0,t.jsx)(s.Z,{}),(0,t.jsx)("div",{className:"bg"})]}),(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)("div",{className:"form_headings",children:(0,t.jsx)("h2",{children:"\u041e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043e\u0442\u0437\u044b\u0432"})}),(0,t.jsx)("div",{className:"form_service ",children:(0,t.jsx)(v,{})})]})]})}},8409:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/feedback",function(){return r(346)}])},4453:function(){}},function(e){e.O(0,[774,663,597,669,356,57,737,657],(function(){return n=8409,e(e.s=n);var n}));var n=e.O();_N_E=n}]);