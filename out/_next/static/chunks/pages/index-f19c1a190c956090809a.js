(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405,179],{5264:function(e,s,n){"use strict";var i=n(5893),a=n(1163),c=n(7294);s.Z=function(e){var s=(0,a.useRouter)();return(0,c.useEffect)((function(){e.isOpen&&(document.documentElement.style.height="100%",document.body.style.overflowY="hidden",console.log("true")),e.isOpen||(document.body.style.overflowY="unset",console.log("false")),document.body.style.overflowX="hidden"}),[e.isOpen]),!0===e.isOpen?(0,i.jsx)("div",{"data-name":"modalka_block",className:"modalka_block ".concat("/getservice"===s.pathname&&"modalka_code"),onClick:function(s){return function(s){s.preventDefault();var n=s.target.dataset.name;console.log(n),e.onClose&&"modalka_block"===n&&e.onClose()}(s)},children:(0,i.jsx)("div",{className:"modalka_body",children:e.children})}):null}},5481:function(e,s,n){"use strict";var i=n(5893),a=n(9326),c=n(5264),r=n(1163),t=n(7294);s.Z=function(e){var s=e.isModalOpen,n=e.closeModal,l=e.id,d=e.type,o=(0,r.useRouter)(),m=("fiz"===d?a.B:a.u).find((function(e){return e.id==l}));return(0,t.useEffect)((function(){}),[s]),(0,i.jsx)("div",{children:(0,i.jsx)(c.Z,{isOpen:s,onClose:function(){return n()},children:(0,i.jsxs)("div",{className:"modalka_content",children:[(0,i.jsxs)("div",{className:"modalka_top",children:[(0,i.jsx)("h2",{children:m&&void 0!==m.name?m.name:""}),"fiz"===d&&(0,i.jsx)("img",{src:"/img/uslugi/".concat(l,".svg")}),"jur"===d&&(0,i.jsx)("img",{src:"/img/uslugi/yur".concat(l,".svg")}),(0,i.jsx)("img",{className:"line",src:"/img/uslugi/line.svg"})]}),(0,i.jsx)("p",{children:"\u041d\u0430\u0448\u0438 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u043b\u0438 \u043f\u0440\u043e\u0434\u0443\u043a\u0442, \u0431\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f \u043a\u043e\u0442\u043e\u0440\u043e\u043c\u0443 \u0412\u0430\u043c \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u044d\u043a\u0441\u043a\u043b\u044e\u0437\u0438\u0432\u043d\u0430\u044f \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0432 \u043e\u043d\u043b\u0430\u0439\u043d \u0440\u0435\u0436\u0438\u043c\u0435"}),(0,i.jsx)("a",{href:"/getservice",onClick:function(){"fiz"===d?o.push({pathname:"/getservice",scrollreset:!0}):r.default.push("/jurservice").then((function(){return window.scrollTo(0,0)}))},children:(0,i.jsx)("div",{className:"button",children:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0443\u0441\u043b\u0443\u0433\u0443"})})]})})})}},9956:function(e,s,n){"use strict";var i=n(6156),a=n(5893),c=(n(5937),n(7294)),r=n(1163),t=n(3190);function l(e,s){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);s&&(i=i.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),n.push.apply(n,i)}return n}function d(e){for(var s=1;s<arguments.length;s++){var n=null!=arguments[s]?arguments[s]:{};s%2?l(Object(n),!0).forEach((function(s){(0,i.Z)(e,s,n[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))}))}return e}s.Z=function(e){var s=(0,r.useRouter)(),n=(0,c.useState)(!1),i=n[0],l=n[1];return(0,c.useEffect)((function(){i||(document.documentElement.style.height="100%",document.body.style.overflowY="hidden",console.log("true")),i&&(document.body.style.overflowY="unset",console.log("false"))}),[i]),(0,a.jsx)("div",{children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsxs)("div",{className:"navigation",children:[(0,a.jsx)("a",{href:"/",children:(0,a.jsx)("img",{className:"logo",src:(s.pathname,"/img/logo/logoBlack.svg")})}),(0,a.jsxs)("div",{className:"navigations",children:[(0,a.jsxs)("ul",{className:"navigation--contacts",children:[(0,a.jsxs)("li",{children:[(0,a.jsx)("img",{src:"/img/phone.svg"}),(0,a.jsx)("a",{href:"tel:+77003505000"}),"+7 700 350 50 00"]}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#",children:(0,a.jsx)("img",{src:"/img/insta.svg"})})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#",children:(0,a.jsx)("img",{src:"/img/facebook.svg"})})})]}),(0,a.jsxs)("ul",{className:"navigation--menu",children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"/about",children:"\u041e \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"/uslugi",children:"\u0423\u0441\u043b\u0443\u0433\u0438"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"/praktika",children:"\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0430"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"/news",children:"\u041f\u0440\u0435\u0441\u0441-\u0446\u0435\u043d\u0442\u0440"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"contacts",children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})})]})]})]}),(0,a.jsxs)("div",{className:"navigation_mobile",children:[(0,a.jsxs)(t.slide,d(d({},e),{},{onStateChange:function(){l(!i)},children:[(0,a.jsx)("a",{className:"menu-item",href:"/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430"}),(0,a.jsx)("a",{className:"menu-item",href:"/about",children:"\u041e \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438"}),(0,a.jsx)("a",{className:"menu-item",href:"/uslugi",children:"\u0423\u0441\u043b\u0443\u0433\u0438"}),(0,a.jsx)("a",{className:"menu-item",href:"/praktika",children:"\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0430"}),(0,a.jsx)("a",{className:"menu-item",href:"/news",children:"\u041f\u0440\u0435\u0441\u0441-\u0446\u0435\u043d\u0442\u0440"}),(0,a.jsx)("a",{className:"menu-item",href:"/contacts",children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}),(0,a.jsx)("hr",{}),(0,a.jsxs)("a",{href:"tel:+77003505000",className:"menu-item",children:[(0,a.jsx)("i",{className:"fa fa-phone"}),"+7 700 350 50 00"]}),(0,a.jsxs)("div",{className:"socials",children:[(0,a.jsx)("a",{className:"menu-item",href:"#",children:(0,a.jsx)("i",{className:"fa fa-instagram"})}),(0,a.jsx)("a",{className:"menu-item",href:"#",children:(0,a.jsx)("i",{className:"fa fa-facebook"})}),(0,a.jsxs)("p",{className:"menu-item address",children:[(0,a.jsx)("i",{className:"fa fa-map-marker"}),(0,a.jsx)("span",{children:'\u0433. \u0410\u043b\u043c\u0430\u0442\u044b. \u0423\u043b. \u0422\u043e\u043b\u0435 \u0431\u0438 101 \u0411\u0426 "\u0422\u043e\u043b\u0435 \u0431\u0438"'})]})]})]})),(0,a.jsx)("a",{className:"mob_phone",href:"tel:+77003505000",children:"+7700 350 5000"}),(0,a.jsx)("a",{href:"/",children:(0,a.jsx)("img",{className:"logo",src:"/img/logo/justlogo.png"})})]})]})})}},9395:function(e,s,n){"use strict";var i=n(5893),a=n(1163);s.Z=function(e){var s=e.list,n=e.type,c=e.setModal,r=e.setId,t=(0,a.useRouter)();return(0,i.jsx)("div",{className:"services--lists",children:s.map((function(e,s){return(0,i.jsxs)("div",{onClick:function(){return function(e){c(!0),r(e+1),console.log(parseInt(e)+1)}(s)},"data-id":s+1,className:"services--list",children:["fiz"===n&&(0,i.jsx)("img",{className:"service_icon",src:"/img/uslugi/".concat(s+1,".svg")}),"jur"===n&&(0,i.jsx)("img",{className:"service_icon",src:"/img/uslugi/yur".concat(s+1,".svg")}),(0,i.jsx)("span",{children:e.name}),"/"===t.pathname&&(0,i.jsx)("img",{className:"path",src:"/img/uslugi/line.svg"})]})}))})}},9326:function(e,s,n){"use strict";n.d(s,{B:function(){return i},u:function(){return a}});var i=[{id:"1",name:"\u0421\u043f\u043e\u0440\u044b \u043f\u043e \u043a\u0440\u0435\u0434\u0438\u0442\u0430\u043c"},{id:"2",name:"\u0410\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u0438\u0432\u043d\u044b\u0435 \u0434\u0435\u043b\u0430"},{id:"3",name:"\u0421\u0435\u043c\u0435\u0439\u043d\u044b\u0435 \u0441\u043f\u043e\u0440\u044b"},{id:"4",name:"\u041f\u043e \u0437\u0435\u043c\u0435\u043b\u043d\u044b\u043c \u0434\u0435\u043b\u0430\u043c"},{id:"5",name:"\u041f\u043e \u0442\u0440\u0443\u0434\u043e\u0432\u044b\u043c \u0441\u043f\u043e\u0440\u0430\u043c"},{id:"6",name:"\u0411\u0430\u043d\u043a\u0440\u043e\u0442\u0441\u0442\u0432\u043e \u0438 \u0440\u0435\u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f \u044e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043b\u0438\u0446"},{id:"7",name:"\u041f\u043e \u0436\u0438\u043b\u0438\u0449\u043d\u044b\u043c \u0441\u043f\u043e\u0440\u0430\u043c"},{id:"8",name:"\u041f\u043e \u0441\u0442\u0440\u0430\u0445\u043e\u0432\u044b\u043c \u0434\u0435\u043b\u0430\u043c"},{id:"9",name:"\u041f\u043e \u043d\u0430\u0441\u043b\u0435\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u043c \u0434\u0435\u043b\u0430\u043c"},{id:"10",name:"\u041f\u043e \u043f\u0435\u043d\u0441\u0438\u043e\u043d\u043d\u044b\u043c \u0434\u0435\u043b\u0430\u043c"},{id:"11",name:"\u0417\u0430\u0449\u0438\u0442\u0430 \u043f\u0440\u0430\u0432 \u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b\u0435\u0439"},{id:"12",name:"\u0410\u0432\u0442\u043e\u044e\u0440\u0438\u0441\u0442"},{id:"13",name:"\u0418\u043d\u0442\u0435\u043b\u043b\u0435\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u0430\u044f \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u0438 \u0430\u0432\u0442\u043e\u0440\u0441\u043a\u043e\u0435 \u043f\u0440\u0430\u0432\u043e"},{id:"14",name:"\u041c\u0438\u0433\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u0443\u0441\u043b\u0443\u0433\u0438"},{id:"15",name:"\u041b\u0438\u0447\u043d\u044b\u0439 \u0430\u0434\u0432\u043e\u043a\u0430\u0442"},{id:"16",name:"\u041c\u0435\u0434\u0438\u0446\u0438\u043d\u0441\u043a\u0438\u0435 \u0441\u043f\u043e\u0440\u044b"}],a=[{id:"1",name:"\u0410\u0440\u0431\u0438\u0442\u0440\u0430\u0436"},{id:"2",name:"\u041f\u043e \u043a\u043e\u0440\u043f\u043e\u0440\u0430\u0442\u0438\u0432\u043d\u044b\u043c \u0441\u043f\u043e\u0440\u0430\u043c"},{id:"3",name:"\u0417\u0430\u0449\u0438\u0442\u0430 \u0434\u0435\u043b\u043e\u0432\u043e\u0439 \u0440\u0435\u043f\u0443\u0442\u0430\u0446\u0438\u0438"},{id:"4",name:"\u041f\u0440\u0438\u0432\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044f, \u0433\u043e\u0441\u0437\u0430\u043a\u0443\u043f\u043a\u0438, \u0433\u043e\u0441\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u043e"},{id:"5",name:"\u041d\u0435\u0434\u0432\u0438\u0436\u0438\u043c\u043e\u0441\u0442\u044c, \u0437\u0435\u043c\u043b\u044f, \u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e"},{id:"6",name:"\u0411\u0430\u043d\u043a\u0440\u043e\u0442\u0441\u0442\u0432\u043e \u0438 \u0440\u0435\u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f \u044e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043b\u0438\u0446"},{id:"7",name:"\u0412\u0437\u044b\u0441\u043a\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0441\u0440\u043e\u0447\u0435\u043d\u043d\u043e\u0439 \u0434\u0435\u0431\u0438\u0442\u043e\u0440\u0441\u043a\u043e\u0439 \u0437\u0430\u0434\u043e\u043b\u0436\u0435\u043d\u043d\u043e\u0441\u0442\u0438"},{id:"8",name:"\u042d\u043a\u0441\u043f\u0435\u0440\u0442 \u043f\u043e \u043d\u0430\u043b\u043e\u0433\u043e\u0432\u044b\u043c \u0441\u043f\u043e\u0440\u0430\u043c"},{id:"9",name:"\u0412\u043d\u0435\u0441\u0443\u0434\u0435\u0431\u043d\u0430\u044f \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0437\u0430\u043b\u043e\u0433\u043e\u0432\u043e\u0433\u043e \u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430"},{id:"10",name:"\u042d\u043a\u0441\u043f\u0435\u0440\u0442 \u043f\u043e \u0441\u0442\u0440\u0430\u0445\u043e\u0432\u044b\u043c \u0434\u0435\u043b\u0430\u043c"},{id:"11",name:"\u042d\u043a\u0441\u043f\u0435\u0440\u0442 \u043f\u043e \u0442\u0430\u043c\u043e\u0436\u0435\u043d\u043d\u044b\u043c \u0441\u043f\u043e\u0440\u0430\u043c"}]},4146:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return v}});var i=n(5893),a=n(9008),c=n(7294),r=n(6156),t=n(6066),l=n(9755),d=n.n(l);n(1493),n(2937);function o(e,s){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);s&&(i=i.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),n.push.apply(n,i)}return n}function m(e){for(var s=1;s<arguments.length;s++){var n=null!=arguments[s]?arguments[s]:{};s%2?o(Object(n),!0).forEach((function(s){(0,r.Z)(e,s,n[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))}))}return e}var h=function(){var e;(0,c.useEffect)((function(){var e=d()(".slick-track").height(),s=!1;function n(){d()(".slick-slide").css("height",e+"px")}window.addEventListener("resize",(function(){clearTimeout(s),s=setTimeout(n,250)}))}),[]);var s=(e={slidesToShow:3,slidesToScroll:1,autoplay:!0,infinite:!0,autoplaySpeed:4800,arrows:!1,dots:!1,className:"feedback_block"},(0,r.Z)(e,"autoplay",!0),(0,r.Z)(e,"autoplaySpeed",4e3),(0,r.Z)(e,"responsive",[{breakpoint:768,settings:{slidesToShow:1}},{breakpoint:520,settings:{slidesToShow:1}},{breakpoint:380,settings:{slidesToShow:1}}]),e);return(0,i.jsxs)("div",{className:"feedbacks",children:[(0,i.jsx)("h2",{children:"\u041e\u0442\u0437\u044b\u0432\u044b \u043d\u0430\u0448\u0438\u0445 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432"}),(0,i.jsxs)(t.Z,m(m({},s),{},{children:[(0,i.jsxs)("div",{className:"feedback_text",children:[(0,i.jsx)("h3",{children:"\u0418\u0432\u0430\u043d \u0418\u0432\u0430\u043d\u043e\u0432"}),(0,i.jsx)("span",{children:"Companyname"}),(0,i.jsx)("p",{children:"\xabNASH Company\xbb \u2013 \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u0430\u044f \u0432 \u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d\u0435 \u0438\u043d\u043d\u043e\u0432\u0430\u0446\u0438\u043e\u043d\u043d\u0430\u044f \u042e\u0420\u0422\u0415\u0425 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0437\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0432 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u043f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043b\u044e\u0431\u044b\u0445 \u044e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0437\u0430\u0434\u0430\u0447."})]}),(0,i.jsxs)("div",{className:"feedback_text",children:[(0,i.jsx)("h3",{children:"\u0410\u0431\u044b\u043b\u0430\u0439 \u0410\u0431\u0430\u0435\u0432"}),(0,i.jsx)("span",{children:"\u0422\u041a"}),(0,i.jsx)("p",{children:"\xabNASH Company\xbb \u2013 \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u0430\u044f \u0432 \u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d\u0435 \u0438\u043d\u043d\u043e\u0432\u0430\u0446\u0438\u043e\u043d\u043d\u0430\u044f \u042e\u0420\u0422\u0415\u0425 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0437\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0432 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u043f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043b\u044e\u0431\u044b\u0445 \u044e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0437\u0430\u0434\u0430\u0447."})]}),(0,i.jsxs)("div",{className:"feedback_text",children:[(0,i.jsx)("h3",{children:"\u041a\u0430\u0441\u044b\u043c \u041a\u0430\u0441\u044b\u043c\u043e\u0432"}),(0,i.jsx)("span",{children:"Companyname"}),(0,i.jsx)("p",{children:"\xabNASH Company\xbb \u2013 \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u0430\u044f \u0432 \u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d\u0435 \u0438\u043d\u043d\u043e\u0432\u0430\u0446\u0438\u043e\u043d\u043d\u0430\u044f \u042e\u0420\u0422\u0415\u0425 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0437\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0432 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u043f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043b\u044e\u0431\u044b\u0445 \u044e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0437\u0430\u0434\u0430\u0447."})]}),(0,i.jsxs)("div",{className:"feedback_text",children:[(0,i.jsx)("h3",{children:"\u0410\u0439\u0434\u0430\u043d\u0430 \u0410\u0437\u0430\u0442"}),(0,i.jsx)("span",{children:"Companyname"}),(0,i.jsx)("p",{children:"\xabNASH Company\xbb \u2013 \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u0430\u044f \u0432 \u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d\u0435 \u0438\u043d\u043d\u043e\u0432\u0430\u0446\u0438\u043e\u043d\u043d\u0430\u044f \u042e\u0420\u0422\u0415\u0425 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0437\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0432 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u043f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043b\u044e\u0431\u044b\u0445 \u044e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0437\u0430\u0434\u0430\u0447."})]})]}))]})},u=n(9956),j=function(){return(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:"header",children:[(0,i.jsx)(u.Z,{}),(0,i.jsx)("div",{className:"header--banner",children:(0,i.jsxs)("div",{className:"banner_block",children:[(0,i.jsxs)("p",{className:"title",children:["\u0420\u0435\u0448\u0435\u043d\u0438\u044f \u043b\u044e\u0431\u044b\u0445",(0,i.jsx)("span",{children:" \u044e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0437\u0430\u0434\u0430\u0447"})]}),(0,i.jsxs)("div",{className:"header--banner--content",children:[(0,i.jsx)("div",{className:"banner_item",children:(0,i.jsx)("h2",{children:"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u043f\u043b\u0430\u0442\u0438 \u043f\u043e\u0442\u043e\u043c"})}),(0,i.jsx)("div",{className:"banner_item",children:(0,i.jsx)("h2",{children:"\u041f\u043b\u0430\u0442\u0438\u0448\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0437\u0430 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442!"})}),(0,i.jsx)("div",{className:"banner_item",children:(0,i.jsx)("div",{className:"discount",children:(0,i.jsxs)("p",{children:["-50%",(0,i.jsx)("span",{children:"\u0421\u041a\u0418\u0414\u041a\u0410"})]})})}),(0,i.jsxs)("div",{className:"banner_item",children:[(0,i.jsx)("img",{className:"vesi vesi_desk",src:"/img/vesi.png"}),(0,i.jsx)("img",{className:"vesi vesi_mobile",src:"/img/vesi2.png"})]})]}),(0,i.jsx)("a",{href:"/uslugi",className:"btn-home",children:"\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c \u0443\u0441\u043b\u0443\u0433\u0443"})]})})]}),(0,i.jsxs)("div",{className:"header--banner2",children:[(0,i.jsx)("img",{src:"/img/shape.png"}),(0,i.jsx)("img",{className:"shape2",src:"/img/shape2.png"}),(0,i.jsxs)("div",{className:"content",children:[(0,i.jsxs)("h2",{children:["NASH ",(0,i.jsx)("br",{}),"COMPANY"]}),(0,i.jsx)("p",{children:"\xabNASH Company\xbb \u2013 \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u0430\u044f \u0432 \u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d\u0435 \u0438\u043d\u043d\u043e\u0432\u0430\u0446\u0438\u043e\u043d\u043d\u0430\u044f \u042e\u0420\u0422\u0415\u0425 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0437\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0432 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u043f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043b\u044e\u0431\u044b\u0445 \u044e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0437\u0430\u0434\u0430\u0447."})]})]})]})},x=n(5481),f=n(9395),g=n(9326);function v(){var e=(0,c.useState)(!1),s=e[0],n=e[1],r=(0,c.useState)(),t=r[0],l=r[1],d=(0,c.useState)("fiz"),o=d[0],m=d[1];return(0,i.jsxs)("div",{className:"home",children:[(0,i.jsx)(a.default,{children:(0,i.jsx)("title",{children:"Nash Company - \u0420\u0435\u0448\u0430\u0435\u043c\u043e \u0432\u0441\u0435!"})}),(0,i.jsx)(j,{}),(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)(h,{}),(0,i.jsxs)("div",{className:"services",children:[(0,i.jsxs)("ul",{className:"advantage",children:[(0,i.jsxs)("li",{className:"advantage--item",children:[(0,i.jsx)("img",{src:"/img/advantage1.svg"}),(0,i.jsxs)("p",{children:["95% \u0432\u044b\u0438\u0433\u0440\u0430\u043d\u043d\u044b\u0445",(0,i.jsx)("br",{}),"\u0434\u0435\u043b"]})]}),(0,i.jsxs)("li",{className:"advantage--item",children:[(0,i.jsx)("img",{src:"/img/advantage2.svg"}),(0,i.jsxs)("p",{children:["\u0411\u043e\u043b\u0435\u0435 10 \u043b\u0435\u0442",(0,i.jsx)("br",{}),"\u043d\u0430 \u0440\u044b\u043d\u043a\u0435"]})]}),(0,i.jsxs)("li",{className:"advantage--item",children:[(0,i.jsx)("img",{src:"/img/advantage3.svg"}),(0,i.jsxs)("p",{children:["\u0420\u0430\u0431\u043e\u0442\u0430\u0435\u043c \u043f\u043e",(0,i.jsx)("br",{}),"\u0432\u0441\u0435\u043c\u0443 \u0420\u041a"]})]})]}),(0,i.jsxs)("div",{className:"services--header",children:[(0,i.jsx)("span",{className:"fiz"===o&&"active",onClick:function(){return m("fiz")},children:"\u0424\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043b\u0438\u0446\u0430"}),(0,i.jsx)("span",{className:"jur"===o&&"active",onClick:function(){return m("jur")},children:"\u042e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043b\u0438\u0446\u0430"})]}),(0,i.jsx)(f.Z,{list:g.B,type:o,setModal:n,setId:l}),(0,i.jsx)(x.Z,{isModalOpen:s,closeModal:function(){n(!1)},id:t,type:o})]})]})]})}},8581:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4146)}])},4453:function(){}},function(e){e.O(0,[774,663,571,178,129,89],(function(){return s=8581,e(e.s=s);var s}));var s=e.O();_N_E=s}]);