(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[77,179],{5614:function(e,n,t){"use strict";var r=t(6156),i=t(5893),s=t(2949),a=t(7294),c=t(6627),l=t.n(c);function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e){var n=e.field,t=(e.form,(0,s.Z)(e,["field","form"])),r=(0,a.useState)({value:"",mask:"999999999999"}),c=r[0];r[1];return(0,i.jsx)(l(),u(u(u({},c),{},{maskChar:null,className:"my-input"},n),t))}},6072:function(e,n,t){"use strict";var r=t(6156),i=t(5893),s=t(2949),a=t(7294),c=t(6627),l=t.n(c);function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e){var n=e.field,t=(e.form,(0,s.Z)(e,["field","form"])),r=(0,a.useState)({value:"",mask:"+7(999)-999-9999"}),c=r[0];r[1];return(0,i.jsx)(l(),u(u(u({},c),{},{maskChar:null,className:"my-input"},n),t))}},2089:function(e,n,t){"use strict";var r=t(5893);n.Z=function(){return(0,r.jsx)("div",{className:"loader",children:(0,r.jsxs)("div",{className:"loader--content",children:[(0,r.jsx)("img",{alt:"image",className:"logo",src:"/img/logo/logoSmall.svg"}),(0,r.jsx)("p",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."})]})})}},5264:function(e,n,t){"use strict";var r=t(5893),i=t(1163),s=t(7294);n.Z=function(e){var n=(0,i.useRouter)();return(0,s.useEffect)((function(){e.isOpen&&(document.documentElement.style.height="100%",document.body.style.overflowY="hidden",console.log("true")),e.isOpen||(document.body.style.overflowY="unset",console.log("false")),document.body.style.overflowX="hidden"}),[e.isOpen]),!0===e.isOpen?(0,r.jsx)("div",{"data-name":"modalka_block",className:"modalka_block ".concat("/dlya-fizicheskix-lic"===n.pathname&&"modalka_code"),onClick:function(n){return function(n){n.preventDefault();var t=n.target.dataset.name;e.onClose&&"modalka_block"===t&&e.onClose()}(n)},children:(0,r.jsx)("div",{className:"modalka_body",children:e.children})}):null}},1131:function(e,n,t){"use strict";var r=t(5893),i=(t(9326),t(5264)),s=t(1163),a=t(6627),c=t.n(a),l=t(7294);n.Z=function(e){var n=e.isModalOpen,t=e.closeModal,a=e.code,o=e.setCode,u=e.onFirstStep,d=e.getIdentification,m=e.error;(0,s.useRouter)();return(0,l.useEffect)((function(){n&&document.querySelector(".code_input").focus()}),[n]),(0,r.jsx)("div",{children:(0,r.jsx)(i.Z,{isOpen:n,children:(0,r.jsxs)("div",{className:"modalka_content",children:[(0,r.jsx)("h3",{children:"\u041d\u0430 \u0432\u0430\u0448 \u043d\u043e\u043c\u0435\u0440 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d  4 \u0437\u043d\u0430\u0447\u043d\u044b\u0439 \u043a\u043e\u0434"}),(0,r.jsxs)("form",{className:"form_register",children:[(0,r.jsx)(c(),{mask:"9999",maskChar:null,name:"phone",type:"tel",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0434",onChange:function(e){return function(e){o(e.target.value),4===e.target.value.replace(/ /g,"").length&&setTimeout((function(){u(e.target.value)}),10)}(e)},value:a,className:"my-input code_input"}),(0,r.jsx)("p",{className:"danger",children:m})]}),(0,r.jsx)("input",{type:"submit",onClick:function(){return d()},className:"button button--light code_button",value:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u0434 \u0437\u0430\u043d\u043e\u0432\u043e"}),(0,r.jsx)("input",{type:"button",onClick:function(){return t()},className:"button button--light code_button",value:"\u041e\u0442\u043c\u0435\u043d\u0430"})]})})})}},9956:function(e,n,t){"use strict";var r=t(6156),i=t(5893),s=(t(5937),t(7294)),a=t(1163),c=t(3190),l=t(1664),o=t(4494),u=t(6808),d=t.n(u),m=(t(9669),t(741));function f(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function h(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?f(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var g=function(e){var n=e.children,t=e.className,r=e.href;return(0,i.jsx)(l.default,{href:r,children:(0,i.jsx)("a",{className:t,children:n})})};n.Z=(0,o.$j)((function(e){var n=e.userReducer;return{user:n.user,loggedIn:n.loggedIn}}),null)((function(e){var n=(0,s.useState)(!1),t=n[0],r=n[1],l=!(!d().get("token")||!e.loggedIn);(0,s.useEffect)((function(){console.log("checking"+e.loggedIn),e.loggedIn&&r(!0)}),[e.loggedIn]);var o=(0,a.useRouter)(),u=(0,s.useState)(!1),f=u[0],j=u[1];return(0,s.useEffect)((function(){f||(document.documentElement.style.height="100%",document.body.style.overflowY="hidden"),f&&(document.body.style.overflowY="unset")}),[f]),(0,i.jsx)("div",{children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsxs)("div",{className:"navigation",children:[(0,i.jsx)(g,{href:"/",children:(0,i.jsx)("img",{alt:"image",className:"logo",src:(o.pathname,"/img/logo/logoBlack.svg")})}),(0,i.jsxs)("div",{className:"navigations",children:[(0,i.jsxs)("ul",{className:"navigation--contacts",children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("img",{alt:"image",src:"/img/phone.svg"}),(0,i.jsx)("a",{href:"tel:+77003505000"}),"+7 700 350 50 00"]}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{target:"_blank",href:"https://www.instagram.com/nashcompany.kz/",children:(0,i.jsx)("img",{alt:"image",src:"/img/insta.svg"})})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"#",children:(0,i.jsx)("img",{alt:"image",src:"/img/facebook.svg"})})}),(0,i.jsxs)("li",{className:"pulsed_link",children:[(t||l)&&!o.pathname.includes("cabinet")&&(0,i.jsx)("div",{className:"pulsing_block",children:(0,i.jsxs)("div",{class:"pulsing",children:[(0,i.jsx)("div",{class:"ringring"}),(0,i.jsx)("div",{class:"circle"})]})}),(0,i.jsxs)("a",{className:"user_icon",href:t?"/cabinet":"/login",children:[(0,i.jsx)("img",{alt:"image",src:"/img/user_icon.svg"})," ",(t||l)&&"".concat((0,m.Qm)(e.user.fio))]})]})]}),(0,i.jsxs)("ul",{className:"navigation--menu",children:[(0,i.jsx)("li",{children:(0,i.jsx)(g,{href:"/about",children:"\u041e \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438"})}),(0,i.jsx)("li",{children:(0,i.jsx)(g,{href:"/uslugi",children:"\u0423\u0441\u043b\u0443\u0433\u0438"})}),(0,i.jsx)("li",{children:(0,i.jsx)(g,{href:"/praktika",children:"\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0430"})}),(0,i.jsx)("li",{children:(0,i.jsx)(g,{href:"/news",children:"\u041f\u0440\u0435\u0441\u0441-\u0446\u0435\u043d\u0442\u0440"})}),(0,i.jsx)("li",{children:(0,i.jsx)(g,{href:"/contacts",children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"/\u041f\u0423\u0411\u041b\u0418\u0427\u041d\u0410\u042f \u041e\u0424\u0415\u0420\u0422\u0410.pdf",target:"_blank",children:"\u041f\u0443\u0431\u043b\u0438\u0447\u043d\u0430\u044f \u043e\u0444\u0435\u0440\u0442\u0430"})})]})]})]}),(0,i.jsxs)("div",{className:"navigation_mobile",children:[(0,i.jsxs)(c.slide,h(h({},e),{},{onStateChange:function(){j(!f)},children:[(0,i.jsx)(g,{className:"menu-item",href:"/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430"}),(0,i.jsx)(g,{className:"menu-item",href:"/about",children:"\u041e \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438"}),(0,i.jsx)(g,{className:"menu-item",href:"/uslugi",children:"\u0423\u0441\u043b\u0443\u0433\u0438"}),(0,i.jsx)(g,{className:"menu-item",href:"/praktika",children:"\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0430"}),(0,i.jsx)(g,{className:"menu-item",href:t?"/cabinet":"/login",children:"\u041b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442"}),(0,i.jsx)(g,{className:"menu-item",href:"/news",children:"\u041f\u0440\u0435\u0441\u0441-\u0446\u0435\u043d\u0442\u0440"}),(0,i.jsx)(g,{className:"menu-item",href:"/contacts",children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}),(0,i.jsx)("a",{href:"/\u041f\u0423\u0411\u041b\u0418\u0427\u041d\u0410\u042f \u041e\u0424\u0415\u0420\u0422\u0410.pdf",className:"menu-item",target:"_blank",children:"\u041f\u0443\u0431\u043b\u0438\u0447\u043d\u0430\u044f \u043e\u0444\u0435\u0440\u0442\u0430"}),(0,i.jsx)("hr",{}),(0,i.jsxs)("a",{href:"tel:+77003505000",className:"menu-item",children:[(0,i.jsx)("i",{className:"fa fa-phone"}),"+7 700 350 50 00"]}),(0,i.jsxs)("div",{className:"socials",children:[(0,i.jsx)("a",{className:"menu-item",target:"_blank",href:"https://www.instagram.com/nashcompany.kz/",children:(0,i.jsx)("i",{className:"fa fa-instagram"})}),(0,i.jsx)("a",{className:"menu-item",href:"#",children:(0,i.jsx)("i",{className:"fa fa-facebook"})}),(0,i.jsxs)("p",{className:"menu-item address",children:[(0,i.jsx)("i",{className:"fa fa-map-marker"}),(0,i.jsx)("span",{children:'\u0433. \u0410\u043b\u043c\u0430\u0442\u044b. \u0423\u043b. \u0422\u043e\u043b\u0435 \u0431\u0438 101 \u0411\u0426 "\u0422\u043e\u043b\u0435 \u0431\u0438"'})]})]})]})),(0,i.jsx)("a",{className:"mob_phone",href:"tel:+77003505000",children:"+7700 350 5000"}),(0,i.jsx)("a",{href:"/",children:(0,i.jsx)("img",{alt:"image",className:"logo",src:"/img/logo/justlogo.png"})})]})]})})}))},741:function(e,n,t){"use strict";t.d(n,{Kp:function(){return r},Iw:function(){return s},Qm:function(){return a},x3:function(){return c}});var r=function(e){return String(e).replace(/[^A-Z0-9]/g,"")},i=t(2618),s=function(){setTimeout((function(){i(".text-danger",{offset:0,align:"middle",ease:"outExpo",duration:600})}),100)},a=function(e){var n=null!==e?e.split(" "):"\u041b\u0438\u0447\u043d\u044b\u0439 \u041a\u0430\u0431\u0438\u043d\u0435\u0442";return n[0]+" "+n[n.length-1].substring(0,1).toUpperCase()+"."},c=function(e,n){return e.filter((function(e){return Object.keys(n).every((function(t){return e[t]==n[t]}))}))}},9326:function(e,n,t){"use strict";t.d(n,{B:function(){return r},u:function(){return i}});var r=[{id:"1",name:"\u0421\u043f\u043e\u0440\u044b \u043f\u043e \u0434\u043e\u043b\u0433\u043e\u0432\u044b\u043c \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0430\u043c"},{id:"2",name:"\u0421\u043f\u043e\u0440\u044b \u043f\u043e \u043a\u0440\u0435\u0434\u0438\u0442\u0430\u043c"},{id:"3",name:"\u0421\u043f\u043e\u0440\u044b \u043f\u043e \u043c\u0438\u043a\u0440\u043e\u043a\u0440\u0435\u0434\u0438\u0442\u0430\u043c, \u0431\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u0438\u0439 \u0437\u0430\u0439\u043c"},{id:"4",name:"\u0410\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0438\u0432\u043d\u044b\u0435 \u0434\u0435\u043b\u0430"},{id:"5",name:"\u0421\u0435\u043c\u0435\u0439\u043d\u044b\u0435 \u0441\u043f\u043e\u0440\u044b"},{id:"6",name:"\u041f\u043e \u0442\u0440\u0443\u0434\u043e\u0432\u044b\u043c \u0441\u043f\u043e\u0440\u0430\u043c"},{id:"7",name:"\u041a\u043e\u0440\u043f\u043e\u0440\u0430\u0442\u0438\u0432\u043d\u044b\u0435 \u0441\u043f\u043e\u0440\u044b"},{id:"8",name:"\u0418\u043d\u0442\u0435\u043b\u043b\u0435\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u0430\u044f \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u0438 \u0430\u0432\u0442\u043e\u0440\u0441\u043a\u043e\u0435 \u043f\u0440\u0430\u0432\u043e"},{id:"9",name:"\u0417\u0430\u0449\u0438\u0442\u0430 \u043f\u0440\u0430\u0432 \u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b\u0435\u0439"}],i=[{id:"1",name:"\u0421\u043f\u043e\u0440\u044b \u043f\u043e \u0434\u043e\u043b\u0433\u043e\u0432\u044b\u043c \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0430\u043c"},{id:"2",name:"\u0421\u043f\u043e\u0440\u044b \u043f\u043e \u043a\u0440\u0435\u0434\u0438\u0442\u0430\u043c"},{id:"3",name:"\u0411\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u0438\u0439 \u0437\u0430\u0439\u043c"},{id:"4",name:"\u0410\u0440\u0431\u0438\u0442\u0440\u0430\u0436"},{id:"5",name:"\u041f\u043e \u043a\u043e\u0440\u043f\u043e\u0440\u0430\u0442\u0438\u0432\u043d\u044b\u043c \u0441\u043f\u043e\u0440\u0430\u043c"},{id:"6",name:"\u0417\u0430\u0449\u0438\u0442\u0430 \u0434\u0435\u043b\u043e\u0432\u043e\u0439 \u0440\u0435\u043f\u0443\u0442\u0430\u0446\u0438\u0438"},{id:"7",name:"\u041f\u0440\u0438\u0432\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044f, \u0433\u043e\u0441\u0437\u0430\u043a\u0443\u043f\u043a\u0438, \u0433\u043e\u0441\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u043e"},{id:"8",name:"\u041d\u0435\u0434\u0432\u0438\u0436\u0438\u043c\u043e\u0441\u0442\u044c, \u0437\u0435\u043c\u043b\u044f, \u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e"},{id:"9",name:"\u0411\u0430\u043d\u043a\u0440\u043e\u0442\u0441\u0442\u0432\u043e \u0438 \u0440\u0435\u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f \u044e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043b\u0438\u0446"},{id:"10",name:"\u0412\u0437\u044b\u0441\u043a\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0441\u0440\u043e\u0447\u0435\u043d\u043d\u043e\u0439 \u0434\u0435\u0431\u0438\u0442\u043e\u0440\u0441\u043a\u043e\u0439 \u0437\u0430\u0434\u043e\u043b\u0436\u0435\u043d\u043d\u043e\u0441\u0442\u0438"},{id:"11",name:"\u042d\u043a\u0441\u043f\u0435\u0440\u0442 \u043f\u043e \u043d\u0430\u043b\u043e\u0433\u043e\u0432\u044b\u043c \u0441\u043f\u043e\u0440\u0430\u043c"},{id:"12",name:"\u0412\u043d\u0435\u0441\u0443\u0434\u0435\u0431\u043d\u0430\u044f \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0437\u0430\u043b\u043e\u0433\u043e\u0432\u043e\u0433\u043e \u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430"}]},1824:function(e,n,t){"use strict";function r(e){var n=new Date,t=n.getYear(),r=n.getMonth(),i=n.getDate(),s=new Date(function(e){return 0==e[0]?"20"+e.substring(0,2):"19"+e.substring(0,2)}(e),e.substring(2,4)-1,e.substring(4,6)),a=s.getYear(),c=s.getMonth(),l=s.getDate(),o=t-a;if(r>=c)var u=r-c;else{o--;u=12+r-c}if(i>=l)var d=i-l;else{d=31+i-l;--u<0&&(u=11,o--)}return{years:o,months:u,days:d}.years}t.d(n,{p:function(){return i}});var i=function(e){return!(e[6]%2!=0&&r(e)<18)&&!(e[6]%2==0&&r(e)<18)}},3899:function(e,n,t){"use strict";t.d(n,{s$:function(){return r},C1:function(){return i},k8:function(){return a},l1:function(){return c},X4:function(){return l},CD:function(){return o}});var r=function(e){var n,t=e.trim();(t||(n="\u041f\u043e\u043b\u0435 Email \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"),t)&&(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(t)||(n="\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 email"));return n},i=function(e){var n;return e||(n="\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"),n},s=function(e){var n=String(e).replace(/[^A-Z0-9]/g,""),t=n.match(/^(\d{4})(\d{3})(\d{4})$/);if(!t||11!==n.length)return!1;var r=t[1];return[{id:"7700"},{id:"7701"},{id:"7702"},{id:"7705"},{id:"7706"},{id:"7707"},{id:"7708"},{id:"7747"},{id:"7771"},{id:"7775"},{id:"7776"},{id:"7777"},{id:"7778"}].filter((function(e){return e.id==r})).length>0},a=function(e){var n,t=e.replace(/ /g,"");return 16===t.length&&!0===s(e)&&(n=""),16!==t.length&&(n="\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u043d\u043e\u043c\u0435\u0440"),16===t.length&&!1===s(e)&&(n="\u041d\u0435\u0442 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0433\u043e \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430"),n},c=function(e){var n;return e||(n="\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"),e&&e.length<6&&(n="\u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u043f\u0430\u0440\u043e\u043b\u044f \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),n},l=function(e){var n=/[a-zA-Z0-9_"*/]/i.test(e),t="",r=e;r=(r=(r=r.replace(/(^\s*)|(\s*$)/gi,"")).replace(/[ ]{2,}/gi," ")).replace(/\n /,"\n");var i=e?r.split(" ").length:0;return e||(t="\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"),e&&(!0===n&&(t="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0430 \u043a\u0438\u0440\u0440\u0438\u043b\u0438\u0446\u0435"),0==n&&parseInt(i)<2&&(t="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u043b\u043d\u043e\u0435 \u0438\u043c\u044f ( \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440: \u0410\u0431\u0430\u0435\u0432 \u0410\u0431\u044b\u043b\u0430\u0439)")),t},o=function(e){var n="",t=[1,2,3,4,5,6,7,8,9,10,11],r=[3,4,5,6,7,8,9,10,11,1,2],i=[],s=e?e.replace(/ /g,""):"",a=0;if(s||(n="\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"),s&&12!==s.length&&(n="\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u0418\u0418\u041d"),s&&12===s.length){for(var c=0;c<12;c++)i[c]=parseInt(s.substring(c,c+1)),c<11&&(a+=i[c]*t[c]);if(10==(a%=11)){a=0;for(c=0;c<11;c++)a+=i[c]*r[c];a%=11}a!=i[11]&&(n="\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u0418\u0418\u041d")}return n}},4453:function(){}}]);