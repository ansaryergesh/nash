(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[875,179],{5614:function(e,n,t){"use strict";var s=t(6156),r=t(5893),a=t(2949),i=t(7294),c=t(6627),o=t.n(c);function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){(0,s.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e){var n=e.field,t=(e.form,(0,a.Z)(e,["field","form"])),s=(0,i.useState)({value:"",mask:"999999999999"}),c=s[0];s[1];return(0,r.jsx)(o(),u(u(u({},c),{},{maskChar:null,className:"my-input"},n),t))}},6072:function(e,n,t){"use strict";var s=t(6156),r=t(5893),a=t(2949),i=t(7294),c=t(6627),o=t.n(c);function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){(0,s.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e){var n=e.field,t=(e.form,(0,a.Z)(e,["field","form"])),s=(0,i.useState)({value:"",mask:"+7(999)-999-9999"}),c=s[0];s[1];return(0,r.jsx)(o(),u(u(u({},c),{},{maskChar:null,className:"my-input"},n),t))}},4617:function(e,n,t){"use strict";var s=t(5893),r=t(6156),a=t(9669),i=t.n(a),c=t(7294),o=t(1131),l=t(741),u=t(6808),d=t.n(u),m=t(5611),f=t(7513),p=t(4494),h=t(3899),g=t(1163),j=(t(2089),t(1824)),x=t(6737),v=t.n(x),b=t(6072),y=t(5614);var N=function(e){var n=e.setLoading,t=(0,m.e1)().addToast,a=(0,p.I0)(),u=(0,c.useState)({email:"",phone:"",fio:"",password:"",type:"\u0424\u0438\u0437 \u043b\u0438\u0446\u043e"}),x=u[0],N=u[1],k=(0,c.useState)({email:"",phone:"",fio:"",password:""}),O=(k[0],k[1],(0,c.useState)("")),w=O[0],_=O[1],D=(0,c.useState)(!1),S=D[0],Z=D[1],P=(0,c.useState)(""),E=P[0],C=P[1],I=function(e){(0,j.p)(e.iin)?(n(!0),N(e),i().get("".concat("https://crediter.kz/api","/identification"),{params:{fio:e.fio,phone:(0,l.Kp)(e.phone),email:e.email,password:e.password,type:e.type,source:"nashcompany.kz",iin:e.iin}}).then((function(e){n(!1),e.data.success&&Z(!0),e.data.success||t(e.data.message,{appearance:"error",autoDismiss:!0})})).catch((function(e){n(!1),e.response&&t(e.response.status,{appearance:"error",autoDismiss:!0})}))):v()("Oops!","\u0418\u0437\u0432\u0438\u043d\u0438\u0442\u0435, \u0443\u0441\u043b\u0443\u0433\u0430 \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043b\u0438\u0446\u0430\u043c \u0434\u043e\u0441\u0442\u0438\u0433\u0448\u0438\u0435 18 \u043b\u0435\u0442.","info")};return(0,s.jsx)("div",{children:(0,s.jsxs)("div",{className:"form_register",children:[(0,s.jsx)(f.J9,{initialValues:{email:"",phone:"",fio:"",password:"",type:"\u0424\u0438\u0437 \u043b\u0438\u0446\u043e",iin:""},onSubmit:function(e){I(e)},children:function(e){var n,t=e.errors,a=e.touched;return(0,s.jsxs)(f.l0,{children:[(0,s.jsx)(f.gN,{type:"text",name:"fio",className:"capitalize",validate:h.X4,placeholder:"\u0424\u0418\u041e",autocomplete:"off"})," ",t.fio&&a.fio?(0,s.jsx)("p",{className:"text-danger",children:t.fio}):(0,s.jsx)("p",{className:""}),(0,s.jsx)(f.gN,{name:"phone",className:"form-control",placeholder:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d \u043d\u043e\u043c\u0435\u0440",type:"tel",validate:h.k8,component:b.Z}),t.phone&&a.phone?(0,s.jsx)("p",{className:"text-danger",children:t.phone}):(0,s.jsx)("p",{className:""}),(0,s.jsx)(f.gN,{name:"iin",className:"form-control",placeholder:"\u0418\u0418\u041d",type:"tel",validate:h.CD,component:y.Z}),t.iin&&a.iin?(0,s.jsx)("p",{className:"text-danger",children:t.iin}):(0,s.jsx)("p",{className:""}),(0,s.jsx)(f.gN,{type:"text",name:"email",validate:h.s$,placeholder:"Email",autocomplete:"off"})," ",t.email&&a.email?(0,s.jsx)("p",{className:"text-danger",children:t.email}):(0,s.jsx)("p",{className:""}),(0,s.jsx)("div",{className:"firststep_banner",children:(0,s.jsx)("div",{className:"firststep_banner--button",children:(0,s.jsx)("input",(n={className:"singlebtn",type:"submit"},(0,r.Z)(n,"className","button"),(0,r.Z)(n,"onClick",(function(){return(0,l.Iw)()})),(0,r.Z)(n,"value","\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"),n))})})]})}}),(0,s.jsx)(o.Z,{isModalOpen:S,closeModal:function(){Z(!1)},code:E,setCode:C,onFirstStep:function(e){n(!0);var s={fio:x.fio,iin:x.iin,phone:(0,l.Kp)(x.phone),email:x.email,password:x.password,type:x.type,code:e,source:void 0!==d().get("utm_source")?d().get("utm_source")+"_1":"nashcompany.kz"};void 0!==d().get("utm_source")&&(s.utm_source=d().get("utm_source")+"_1",s.click_id=d().get("click_id")),i().get("".concat("https://crediter.kz/api","/stepOne"),{params:s}).then((function(e){n(!1),e.data.success&&(d().set("token",e.data.token,{expires:1e3}),d().set("lead_id",e.data.id,{expires:60}),d().set("step",2,{expires:60}),g.default.push("/dlya-fizicheskix-lic?step=2"),a({type:"AUTHENTICATING_USER"}),i().post("".concat("https://crediter.kz/api","/getData"),{token:e.data.token}).then((function(e){e.data.success&&a({type:"SET_CURRENT_USER",payload:e.data})}))),e.data.success||(_(e.data.message),t(e.data.message,{appearance:"error",autoDismiss:!0}))}))},error:w,getIdentification:function(){n(!0),Z(!1),C(""),_(""),i().get("".concat("https://crediter.kz/api","/identification"),{params:{fio:x.fio,phone:(0,l.Kp)(x.phone),email:x.email,password:x.password,type:x.type,source:"nashcompany.kz",iin:x.iin}}).then((function(e){n(!1),e.data.success&&Z(!0),e.data.success||t(e.data.message,{appearance:"error",autoDismiss:!0})})).catch((function(e){n(!1),e.response&&t(e.response.status,{appearance:"error",autoDismiss:!0})}))}})," "]})})};n.Z=function(e){var n=e.setLoading;return(0,c.useEffect)((function(){document.querySelector(".form_register").scrollIntoView({block:"center",behavior:"smooth"})}),[]),(0,s.jsx)(m.VW,{children:(0,s.jsx)(N,{setLoading:n})})}},2089:function(e,n,t){"use strict";var s=t(5893);n.Z=function(){return(0,s.jsx)("div",{className:"loader",children:(0,s.jsxs)("div",{className:"loader--content",children:[(0,s.jsx)("img",{alt:"image",className:"logo",src:"/img/logo/logoSmall.svg"}),(0,s.jsx)("p",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."})]})})}},5264:function(e,n,t){"use strict";var s=t(5893),r=t(1163),a=t(7294);n.Z=function(e){var n=(0,r.useRouter)();return(0,a.useEffect)((function(){e.isOpen&&(document.documentElement.style.height="100%",document.body.style.overflowY="hidden",console.log("true")),e.isOpen||(document.body.style.overflowY="unset",console.log("false")),document.body.style.overflowX="hidden"}),[e.isOpen]),!0===e.isOpen?(0,s.jsx)("div",{"data-name":"modalka_block",className:"modalka_block ".concat("/dlya-fizicheskix-lic"===n.pathname&&"modalka_code"),onClick:function(n){return function(n){n.preventDefault();var t=n.target.dataset.name;e.onClose&&"modalka_block"===t&&e.onClose()}(n)},children:(0,s.jsx)("div",{className:"modalka_body",children:e.children})}):null}},1131:function(e,n,t){"use strict";var s=t(5893),r=(t(9326),t(5264)),a=t(1163),i=t(6627),c=t.n(i),o=t(7294);n.Z=function(e){var n=e.isModalOpen,t=e.closeModal,i=e.code,l=e.setCode,u=e.onFirstStep,d=e.getIdentification,m=e.error;(0,a.useRouter)();return(0,o.useEffect)((function(){n&&document.querySelector(".code_input").focus()}),[n]),(0,s.jsx)("div",{children:(0,s.jsx)(r.Z,{isOpen:n,children:(0,s.jsxs)("div",{className:"modalka_content",children:[(0,s.jsx)("h3",{children:"\u041d\u0430 \u0432\u0430\u0448 \u043d\u043e\u043c\u0435\u0440 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d  4 \u0437\u043d\u0430\u0447\u043d\u044b\u0439 \u043a\u043e\u0434"}),(0,s.jsxs)("form",{className:"form_register",children:[(0,s.jsx)(c(),{mask:"9999",maskChar:null,name:"phone",type:"tel",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0434",onChange:function(e){return function(e){l(e.target.value),4===e.target.value.replace(/ /g,"").length&&setTimeout((function(){u(e.target.value)}),10)}(e)},value:i,className:"my-input code_input"}),(0,s.jsx)("p",{className:"danger",children:m})]}),(0,s.jsx)("input",{type:"submit",onClick:function(){return d()},className:"button button--light code_button",value:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u0434 \u0437\u0430\u043d\u043e\u0432\u043e"}),(0,s.jsx)("input",{type:"button",onClick:function(){return t()},className:"button button--light code_button",value:"\u041e\u0442\u043c\u0435\u043d\u0430"})]})})})}},9956:function(e,n,t){"use strict";var s=t(6156),r=t(5893),a=(t(5937),t(7294)),i=t(1163),c=t(3190),o=t(1664),l=t(4494),u=t(6808),d=t.n(u),m=(t(9669),t(741));function f(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?f(Object(t),!0).forEach((function(n){(0,s.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var h=function(e){var n=e.children,t=e.className,s=e.href;return(0,r.jsx)(o.default,{href:s,children:(0,r.jsx)("a",{className:t,children:n})})};n.Z=(0,l.$j)((function(e){var n=e.userReducer;return{user:n.user,loggedIn:n.loggedIn}}),null)((function(e){var n=(0,a.useState)(!1),t=n[0],s=n[1],o=!(!d().get("token")||!e.loggedIn);(0,a.useEffect)((function(){console.log("checking"+e.loggedIn),e.loggedIn&&s(!0)}),[e.loggedIn]);var l=(0,i.useRouter)(),u=(0,a.useState)(!1),f=u[0],g=u[1];return(0,a.useEffect)((function(){f||(document.documentElement.style.height="100%",document.body.style.overflowY="hidden"),f&&(document.body.style.overflowY="unset")}),[f]),(0,r.jsx)("div",{children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsxs)("div",{className:"navigation",children:[(0,r.jsx)(h,{href:"/",children:(0,r.jsx)("img",{alt:"image",className:"logo",src:(l.pathname,"/img/logo/logoBlack.svg")})}),(0,r.jsxs)("div",{className:"navigations",children:[(0,r.jsxs)("ul",{className:"navigation--contacts",children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("img",{alt:"image",src:"/img/phone.svg"}),(0,r.jsx)("a",{href:"tel:+77003505000"}),"+7 700 350 50 00"]}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{target:"_blank",href:"https://www.instagram.com/nashcompany.kz/",children:(0,r.jsx)("img",{alt:"image",src:"/img/insta.svg"})})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#",children:(0,r.jsx)("img",{alt:"image",src:"/img/facebook.svg"})})}),(0,r.jsxs)("li",{className:"pulsed_link",children:[(t||o)&&!l.pathname.includes("cabinet")&&(0,r.jsx)("div",{className:"pulsing_block",children:(0,r.jsxs)("div",{class:"pulsing",children:[(0,r.jsx)("div",{class:"ringring"}),(0,r.jsx)("div",{class:"circle"})]})}),(0,r.jsxs)("a",{className:"user_icon",href:t?"/cabinet":"/login",children:[(0,r.jsx)("img",{alt:"image",src:"/img/user_icon.svg"})," ",(t||o)&&"".concat((0,m.Qm)(e.user.fio))]})]})]}),(0,r.jsxs)("ul",{className:"navigation--menu",children:[(0,r.jsx)("li",{children:(0,r.jsx)(h,{href:"/about",children:"\u041e \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438"})}),(0,r.jsx)("li",{children:(0,r.jsx)(h,{href:"/dlya-fizicheskix-lic",children:"\u0423\u0441\u043b\u0443\u0433\u0438"})}),(0,r.jsx)("li",{children:(0,r.jsx)(h,{href:"/praktika",children:"\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0430"})}),(0,r.jsx)("li",{children:(0,r.jsx)(h,{href:"/news",children:"\u041f\u0440\u0435\u0441\u0441-\u0446\u0435\u043d\u0442\u0440"})}),(0,r.jsx)("li",{children:(0,r.jsx)(h,{href:"/contacts",children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/\u041f\u0423\u0411\u041b\u0418\u0427\u041d\u0410\u042f \u041e\u0424\u0415\u0420\u0422\u0410.pdf",target:"_blank",children:"\u041f\u0443\u0431\u043b\u0438\u0447\u043d\u0430\u044f \u043e\u0444\u0435\u0440\u0442\u0430"})})]})]})]}),(0,r.jsxs)("div",{className:"navigation_mobile",children:[(0,r.jsxs)(c.slide,p(p({},e),{},{onStateChange:function(){g(!f)},children:[(0,r.jsx)(h,{className:"menu-item",href:"/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430"}),(0,r.jsx)(h,{className:"menu-item",href:"/about",children:"\u041e \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438"}),(0,r.jsx)(h,{className:"menu-item",href:"/uslugi",children:"\u0423\u0441\u043b\u0443\u0433\u0438"}),(0,r.jsx)(h,{className:"menu-item",href:"/praktika",children:"\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0430"}),(0,r.jsx)(h,{className:"menu-item",href:t?"/cabinet/requests":"/login",children:t?"\u041c\u043e\u0438 \u0437\u0430\u044f\u0432\u043a\u0438":"\u041b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442"}),(0,r.jsx)(h,{className:"menu-item",href:"/news",children:"\u041f\u0440\u0435\u0441\u0441-\u0446\u0435\u043d\u0442\u0440"}),(0,r.jsx)(h,{className:"menu-item",href:"/contacts",children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}),(0,r.jsx)("a",{href:"/\u041f\u0423\u0411\u041b\u0418\u0427\u041d\u0410\u042f \u041e\u0424\u0415\u0420\u0422\u0410.pdf",className:"menu-item",target:"_blank",children:"\u041f\u0443\u0431\u043b\u0438\u0447\u043d\u0430\u044f \u043e\u0444\u0435\u0440\u0442\u0430"}),(0,r.jsx)("hr",{}),(0,r.jsxs)("a",{href:"tel:+77003505000",className:"menu-item",children:[(0,r.jsx)("i",{className:"fa fa-phone"}),"+7 700 350 50 00"]}),(0,r.jsxs)("div",{className:"socials",children:[(0,r.jsx)("a",{className:"menu-item",target:"_blank",href:"https://www.instagram.com/nashcompany.kz/",children:(0,r.jsx)("i",{className:"fa fa-instagram"})}),(0,r.jsx)("a",{className:"menu-item",href:"#",children:(0,r.jsx)("i",{className:"fa fa-facebook"})}),(0,r.jsxs)("p",{className:"menu-item address",children:[(0,r.jsx)("i",{className:"fa fa-map-marker"}),(0,r.jsx)("span",{children:'\u0433. \u0410\u043b\u043c\u0430\u0442\u044b. \u0423\u043b. \u0422\u043e\u043b\u0435 \u0431\u0438 101 \u0411\u0426 "\u0422\u043e\u043b\u0435 \u0431\u0438"'})]})]})]})),(0,r.jsx)("a",{className:"mob_phone",href:"tel:+77003505000",children:"+7700 350 5000"}),(0,r.jsx)("a",{href:"/",children:(0,r.jsx)("img",{alt:"image",className:"logo",src:"/img/logo/justlogo.png"})})]})]})})}))},741:function(e,n,t){"use strict";t.d(n,{Kp:function(){return s},sG:function(){return r},Iw:function(){return i},Qm:function(){return c},x3:function(){return o}});var s=function(e){return String(e).replace(/[^A-Z0-9]/g,"")},r=function(e){var n=function(e){var n=new Date;return n.setMonth(n.getMonth()+e)}(e);return new Intl.DateTimeFormat("ru-Ru",{year:"numeric",month:"short",day:"2-digit"}).format(n)},a=t(2618),i=function(){setTimeout((function(){a(".text-danger",{offset:0,align:"middle",ease:"outExpo",duration:600})}),100)},c=function(e){var n=null!==e?e.split(" "):"\u041b\u0438\u0447\u043d\u044b\u0439 \u041a\u0430\u0431\u0438\u043d\u0435\u0442";return n[0]+" "+n[n.length-1].substring(0,1).toUpperCase()+"."},o=function(e,n){return e.filter((function(e){return Object.keys(n).every((function(t){return e[t]==n[t]}))}))}},9326:function(e,n,t){"use strict";t.d(n,{B:function(){return s},u:function(){return r}});var s=[{id:"1",name:"\u0421\u043f\u043e\u0440\u044b \u043f\u043e \u0434\u043e\u043b\u0433\u043e\u0432\u044b\u043c \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0430\u043c"},{id:"2",name:"\u0421\u043f\u043e\u0440\u044b \u043f\u043e \u043a\u0440\u0435\u0434\u0438\u0442\u0430\u043c"},{id:"3",name:"\u0421\u043f\u043e\u0440\u044b \u043f\u043e \u043c\u0438\u043a\u0440\u043e\u043a\u0440\u0435\u0434\u0438\u0442\u0430\u043c, \u0431\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u0438\u0439 \u0437\u0430\u0439\u043c"},{id:"4",name:"\u0410\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0438\u0432\u043d\u044b\u0435 \u0434\u0435\u043b\u0430"},{id:"5",name:"\u0421\u0435\u043c\u0435\u0439\u043d\u044b\u0435 \u0441\u043f\u043e\u0440\u044b"},{id:"6",name:"\u041f\u043e \u0442\u0440\u0443\u0434\u043e\u0432\u044b\u043c \u0441\u043f\u043e\u0440\u0430\u043c"},{id:"7",name:"\u041a\u043e\u0440\u043f\u043e\u0440\u0430\u0442\u0438\u0432\u043d\u044b\u0435 \u0441\u043f\u043e\u0440\u044b"},{id:"8",name:"\u0418\u043d\u0442\u0435\u043b\u043b\u0435\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u0430\u044f \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u0438 \u0430\u0432\u0442\u043e\u0440\u0441\u043a\u043e\u0435 \u043f\u0440\u0430\u0432\u043e"},{id:"9",name:"\u0417\u0430\u0449\u0438\u0442\u0430 \u043f\u0440\u0430\u0432 \u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b\u0435\u0439"}],r=[{id:"1",name:"\u0421\u043f\u043e\u0440\u044b \u043f\u043e \u0434\u043e\u043b\u0433\u043e\u0432\u044b\u043c \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0430\u043c"},{id:"2",name:"\u0421\u043f\u043e\u0440\u044b \u043f\u043e \u043a\u0440\u0435\u0434\u0438\u0442\u0430\u043c"},{id:"3",name:"\u0411\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u0438\u0439 \u0437\u0430\u0439\u043c"},{id:"4",name:"\u0410\u0440\u0431\u0438\u0442\u0440\u0430\u0436"},{id:"5",name:"\u041f\u043e \u043a\u043e\u0440\u043f\u043e\u0440\u0430\u0442\u0438\u0432\u043d\u044b\u043c \u0441\u043f\u043e\u0440\u0430\u043c"},{id:"6",name:"\u0417\u0430\u0449\u0438\u0442\u0430 \u0434\u0435\u043b\u043e\u0432\u043e\u0439 \u0440\u0435\u043f\u0443\u0442\u0430\u0446\u0438\u0438"},{id:"7",name:"\u041f\u0440\u0438\u0432\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044f, \u0433\u043e\u0441\u0437\u0430\u043a\u0443\u043f\u043a\u0438, \u0433\u043e\u0441\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u043e"},{id:"8",name:"\u041d\u0435\u0434\u0432\u0438\u0436\u0438\u043c\u043e\u0441\u0442\u044c, \u0437\u0435\u043c\u043b\u044f, \u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e"},{id:"9",name:"\u0411\u0430\u043d\u043a\u0440\u043e\u0442\u0441\u0442\u0432\u043e \u0438 \u0440\u0435\u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f \u044e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043b\u0438\u0446"},{id:"10",name:"\u0412\u0437\u044b\u0441\u043a\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0441\u0440\u043e\u0447\u0435\u043d\u043d\u043e\u0439 \u0434\u0435\u0431\u0438\u0442\u043e\u0440\u0441\u043a\u043e\u0439 \u0437\u0430\u0434\u043e\u043b\u0436\u0435\u043d\u043d\u043e\u0441\u0442\u0438"},{id:"11",name:"\u042d\u043a\u0441\u043f\u0435\u0440\u0442 \u043f\u043e \u043d\u0430\u043b\u043e\u0433\u043e\u0432\u044b\u043c \u0441\u043f\u043e\u0440\u0430\u043c"},{id:"12",name:"\u0412\u043d\u0435\u0441\u0443\u0434\u0435\u0431\u043d\u0430\u044f \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0437\u0430\u043b\u043e\u0433\u043e\u0432\u043e\u0433\u043e \u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430"}]},1824:function(e,n,t){"use strict";function s(e){var n=new Date,t=n.getYear(),s=n.getMonth(),r=n.getDate(),a=new Date(function(e){return 0==e[0]?"20"+e.substring(0,2):"19"+e.substring(0,2)}(e),e.substring(2,4)-1,e.substring(4,6)),i=a.getYear(),c=a.getMonth(),o=a.getDate(),l=t-i;if(s>=c)var u=s-c;else{l--;u=12+s-c}if(r>=o)var d=r-o;else{d=31+r-o;--u<0&&(u=11,l--)}return{years:l,months:u,days:d}.years}t.d(n,{p:function(){return r}});var r=function(e){return!(e[6]%2!=0&&s(e)<18)&&!(e[6]%2==0&&s(e)<18)}},3899:function(e,n,t){"use strict";t.d(n,{s$:function(){return s},C1:function(){return r},k8:function(){return i},l1:function(){return c},X4:function(){return o},CD:function(){return l}});var s=function(e){var n,t=e.trim();(t||(n="\u041f\u043e\u043b\u0435 Email \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"),t)&&(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(t)||(n="\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 email"));return n},r=function(e){var n;return e||(n="\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"),n},a=function(e){var n=String(e).replace(/[^A-Z0-9]/g,""),t=n.match(/^(\d{4})(\d{3})(\d{4})$/);if(!t||11!==n.length)return!1;var s=t[1];return[{id:"7700"},{id:"7701"},{id:"7702"},{id:"7705"},{id:"7706"},{id:"7707"},{id:"7708"},{id:"7747"},{id:"7771"},{id:"7775"},{id:"7776"},{id:"7777"},{id:"7778"}].filter((function(e){return e.id==s})).length>0},i=function(e){var n,t=e.replace(/ /g,"");return 16===t.length&&!0===a(e)&&(n=""),16!==t.length&&(n="\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u043d\u043e\u043c\u0435\u0440"),16===t.length&&!1===a(e)&&(n="\u041d\u0435\u0442 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0433\u043e \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430"),n},c=function(e){var n;return e||(n="\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"),e&&e.length<6&&(n="\u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u043f\u0430\u0440\u043e\u043b\u044f \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),n},o=function(e){var n=/[a-zA-Z0-9_"*/]/i.test(e),t="",s=e;s=(s=(s=s.replace(/(^\s*)|(\s*$)/gi,"")).replace(/[ ]{2,}/gi," ")).replace(/\n /,"\n");var r=e?s.split(" ").length:0;return e||(t="\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"),e&&(!0===n&&(t="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0430 \u043a\u0438\u0440\u0440\u0438\u043b\u0438\u0446\u0435"),0==n&&parseInt(r)<2&&(t="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u043b\u043d\u043e\u0435 \u0438\u043c\u044f ( \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440: \u0410\u0431\u0430\u0435\u0432 \u0410\u0431\u044b\u043b\u0430\u0439)")),t},l=function(e){var n="",t=[1,2,3,4,5,6,7,8,9,10,11],s=[3,4,5,6,7,8,9,10,11,1,2],r=[],a=e?e.replace(/ /g,""):"",i=0;if(a||(n="\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"),a&&12!==a.length&&(n="\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u0418\u0418\u041d"),a&&12===a.length){for(var c=0;c<12;c++)r[c]=parseInt(a.substring(c,c+1)),c<11&&(i+=r[c]*t[c]);if(10==(i%=11)){i=0;for(c=0;c<11;c++)i+=r[c]*s[c];i%=11}i!=r[11]&&(n="\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u0418\u0418\u041d")}return n}},4453:function(){}}]);