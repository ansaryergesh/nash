(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[796,179],{5614:function(e,n,t){"use strict";var r=t(6156),s=t(5893),a=t(2949),c=t(7294),i=t(6627),o=t.n(i);function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e){var n=e.field,t=(e.form,(0,a.Z)(e,["field","form"])),r=(0,c.useState)({value:"",mask:"999999999999"}),i=r[0];r[1];return(0,s.jsx)(o(),u(u(u({},i),{},{maskChar:null,className:"my-input"},n),t))}},6072:function(e,n,t){"use strict";var r=t(6156),s=t(5893),a=t(2949),c=t(7294),i=t(6627),o=t.n(i);function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e){var n=e.field,t=(e.form,(0,a.Z)(e,["field","form"])),r=(0,c.useState)({value:"",mask:"+7(999)-999-9999"}),i=r[0];r[1];return(0,s.jsx)(o(),u(u(u({},i),{},{maskChar:null,className:"my-input"},n),t))}},208:function(e,n,t){"use strict";var r=t(5893),s=t(6156),a=t(7294),c=t(9326),i=t(6808),o=t.n(i),l=t(9669),u=t.n(l),d=t(1163),m=t(7513),p=t(3899),h=t(1389);function f(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function j(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?f(Object(t),!0).forEach((function(n){(0,s.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(){var e=(0,a.useState)([]),n=e[0],t=e[1],i=(0,a.useState)({id:o().get("lead_id"),token:o().get("token"),description:"",sphere:"1",amount:""}),l=i[0],f=(i[1],function(e){return t(e.map((function(e){return e.name})))});return(0,r.jsx)("div",{className:"form_register",children:(0,r.jsx)(m.J9,{initialValues:{id:o().get("lead_id"),token:o().get("token"),description:"",sphere:"1",amount:""},onSubmit:function(e){!function(e){u().get("".concat("https://crediter.kz/api","/stepTwo"),{params:{id:e.id,token:e.token,description:e.description,sphere:e.sphere,amount:e.amount}}).then((function(e){e.data.success&&(d.default.push("/getservice?step=3"),o().set("step",3),o().set("amount",l.amount)),e.data.success}))}(e)},children:function(e){var t,a=e.errors,i=e.touched;return(0,r.jsxs)(m.l0,{children:[(0,r.jsx)(m.gN,{as:"select",validate:p.C1,name:"sphere",className:"form_select",children:c.B.map((function(e,n){return(0,r.jsx)("option",{"data-img":"/img/uslugi/".concat(n+1,".svg"),value:n+1,children:e.name})}))}),a.sphere&&i.sphere?(0,r.jsx)("p",{className:"text-danger",children:a.sphere}):(0,r.jsx)("p",{className:"text-danger"}),(0,r.jsx)(m.gN,{as:"textarea",name:"description",validate:p.C1,placeholder:"\u041e\u043f\u0438\u0448\u0438\u0442\u0435 \u0432\u0430\u0448\u0443 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044e"}),a.description&&i.description?(0,r.jsx)("p",{className:"text-danger",children:a.description}):(0,r.jsx)("p",{className:"text-danger"}),(0,r.jsx)(m.gN,{type:"number",validate:p.C1,name:"amount",placeholder:"\u0421\u0443\u043c\u043c\u0430 \u0438\u0441\u043a\u0430"}),a.amount&&i.amount?(0,r.jsx)("p",{className:"text-danger",children:a.amount}):(0,r.jsx)("p",{className:"text-danger"}),(0,r.jsxs)("div",{className:"dropfiles",children:[(0,r.jsx)(h.Z,{onDrop:f,children:function(e){var n=e.getRootProps,t=e.getInputProps;return(0,r.jsxs)("div",j(j({},n({className:"dropzone"})),{},{children:[(0,r.jsx)("input",j({},t())),(0,r.jsx)("p",{children:"\u041f\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0444\u0430\u0439\u043b\u044b \u0438\u043b\u0438 \u0449\u0435\u043b\u043a\u043d\u0438\u0442\u0435, \u0447\u0442\u043e\u0431\u044b \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0444\u0430\u0439\u043b\u044b"})]}))}}),(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{children:"\u0424\u0430\u0439\u043b\u044b:"}),(0,r.jsx)("ul",{children:n.map((function(e){return(0,r.jsx)("li",{children:e},e)}))})]})]}),(0,r.jsxs)("div",{className:"firststep_banner",children:[(0,r.jsx)("div",{className:"firststep_banner--img",children:(0,r.jsx)("img",{className:"secondstep",src:"/img/form/secondstep.png"})}),(0,r.jsxs)("div",{className:"firststep_banner--button",children:[(0,r.jsx)("input",(t={className:"singlebtn",type:"submit"},(0,s.Z)(t,"className","button"),(0,s.Z)(t,"value","\u0414\u0430\u043b\u0435\u0435"),t)),(0,r.jsxs)("b",{children:["\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442",(0,r.jsx)("br",{}),"\u043f\u043e\u0442\u043e\u043c \u043e\u043f\u043b\u0430\u0442\u0430"]})]})]})]})}})})}},2465:function(e,n,t){"use strict";var r=t(5893),s=t(6156),a=t(9669),c=t.n(a),i=t(7294),o=t(6808),l=t.n(o),u=t(1163),d=t(6737),m=t.n(d),p=t(741);function h(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?h(Object(t),!0).forEach((function(n){(0,s.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(){var e,n,t,a;(0,i.useEffect)((function(){var e=l().get("amount"),n=Math.floor(.2*parseInt(e)),t=Math.floor(parseInt(n)/2);n>2e5?(h(n),x(t)):(h(2e5),x(1e5)),console.log(n)}),[l().get("amount")]);var o=(0,i.useState)(0),d=o[0],h=o[1],j=(0,i.useState)(0),g=j[0],x=j[1],v=(0,i.useState)(!1),b=v[0],N=v[1],O=(0,i.useState)((0,p.sG)(1)),y=O[0],k=O[1],_=(0,i.useState)({doc1:!0,doc2:!0,doc3:!0,doc4:!0}),P=_[0],w=_[1],Z=(0,i.useState)("1"),C=Z[0],D=Z[1],S=function(e){var n=e.target.dataset.name;w(f(f({},P),{},(0,s.Z)({},n,!P[n]))),console.log(P)},E=function(e){e.target.getAttribute("data-name");N(!b)},I=function(e){var n=parseInt(e);D(e),k((0,p.sG)(n))};return(0,r.jsx)("div",{className:"form_register thirdstep",children:(0,r.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault();var n={id:l().get("lead_id"),token:l().get("token"),amountPayment:"100000",srok:C,typePayment:b?"\u041f\u0440\u0435\u0434\u043e\u043f\u043b\u0430\u0442\u0430":"\u041f\u043e\u0441\u0442\u043e\u043f\u043b\u0430\u0442\u0430"};void 0!==l().get("utm_source")&&(n.utm_source=l().get("utm_source"),n.click_id=l().get("click_id")),c().get("".concat("https://crediter.kz/api","/stepThree"),{params:n}).then((function(e){console.log(e),e.data.success&&m()("\u0423\u0441\u043f\u0435\u0448\u043d\u043e!","\u0412\u0430\u0448\u0430 \u0437\u0430\u044f\u0432\u043a\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0430 \u0432 Nash Company. \u0416\u0434\u0438\u0442\u0435 \u0437\u0432\u043e\u043d\u043e\u043a \u043e\u0442 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430","success").then((function(){u.default.push("/"),l().remove("lead_id"),l().remove("step"),l().remove("token")}))}))}(e)},children:[(0,r.jsxs)("div",{className:"radio_groups",children:[(0,r.jsxs)("div",(e={className:"postoplata","data-name":"postoplata"},(0,s.Z)(e,"className","check-group"),(0,s.Z)(e,"onClick",(function(e){return E(e)})),(0,s.Z)(e,"children",[(0,r.jsx)("input",{type:"checkbox",checked:!1===b}),(0,r.jsx)("label",{className:"radiolabel",children:"\u041f\u043e\u0441\u0442\u043e\u043f\u043b\u0430\u0442\u0430"})]),e)),(0,r.jsxs)("div",(n={className:"predoplata","data-name":"predoplata"},(0,s.Z)(n,"className","check-group"),(0,s.Z)(n,"onClick",(function(e){return E(e)})),(0,s.Z)(n,"children",[(0,r.jsx)("input",{type:"checkbox",checked:!0===b}),(0,r.jsx)("label",{className:"radiolabel",children:"\u041f\u0440\u0435\u0434\u043e\u043f\u043b\u0430\u0442\u0430"})]),n))]}),!b&&(0,r.jsxs)("div",{className:"range",children:[(0,r.jsx)("input",{className:"range__input",type:"range",value:C,onChange:function(e){return function(e){var n=parseInt(e.target.value);D(e.target.value),k((0,p.sG)(n))}(e)},min:"1",max:"6",step:"1",list:"number"}),(0,r.jsxs)("datalist",{className:"range__list",id:"number",children:[(0,r.jsx)("option",{onClick:function(){return I("1")},className:"range__opt opt0 ".concat("1"===C&&"active"),children:"1"}),(0,r.jsx)("option",{onClick:function(){return I("2")},className:"range__opt ".concat("2"===C&&"active"),children:"2"}),(0,r.jsx)("option",{onClick:function(){return I("3")},className:"range__opt ".concat("3"===C&&"active"),children:"3"}),(0,r.jsx)("option",{onClick:function(){return I("4")},className:"range__opt ".concat("4"===C&&"active"),children:"4"}),(0,r.jsx)("option",{onClick:function(){return I("5")},className:"range__opt ".concat("5"===C&&"active"),children:"5"}),(0,r.jsx)("option",{onClick:function(){return I("6")},className:"range__opt ".concat("6"===C&&"active"),children:"6"})]})]}),!b&&(0,r.jsx)("div",{className:"payment_date",children:(0,r.jsxs)("strong",{children:["\u0414\u0435\u043d\u044c \u043e\u043f\u043b\u0430\u0442\u044b \u0434\u043e ",y," "]})}),(0,r.jsxs)("div",{className:"payment_amount",children:[(0,r.jsx)("p",{children:"\u0421\u0443\u043c\u043c\u0430 \u043e\u043f\u043b\u0430\u0442\u044b:"}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("strong",{children:[(0,p.C$)("".concat(g)),"\u0442\u0433"]}),(0,r.jsxs)("span",{class:"price--line-through",children:[(0,p.C$)("".concat(d)),"\u0442\u0433"]})]}),(0,r.jsx)("div",{className:"discount",children:"50%"})]}),(0,r.jsxs)("div",{className:"check_groups",children:[(0,r.jsxs)("div",{"data-name":"predoplata",className:"check-group",children:[(0,r.jsx)("input",{type:"checkbox",checked:P.doc1}),(0,r.jsx)("label",{onClick:function(e){return S(e)},"data-name":"doc1",className:"checklabel",children:(0,r.jsx)("a",{href:"#",children:"\u0417\u0430\u043f\u0440\u043e\u0441 \u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445"})})]}),(0,r.jsxs)("div",{"data-name":"postoplata",className:"check-group",children:[(0,r.jsx)("input",{type:"checkbox",checked:P.doc2}),(0,r.jsx)("label",{onClick:function(e){return S(e)},className:"checklabel","data-name":"doc2",children:(0,r.jsx)("a",{href:"#",children:"\u0414\u043e\u0433\u043e\u0432\u043e\u0440 \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u043e\u0439 \u043e\u0444\u0435\u0440\u0442\u044b"})})]}),(0,r.jsxs)("div",{"data-name":"predoplata",className:"check-group",children:[(0,r.jsx)("input",{type:"checkbox",checked:P.doc4}),(0,r.jsx)("label",{onClick:function(e){return S(e)},className:"checklabel","data-name":"doc4",children:(0,r.jsx)("a",{href:"#",children:"\u0414\u043e\u0433\u043e\u0432\u043e\u0440 \u043d\u0430 \u0437\u0430\u043a\u0430\u0437 \u043d\u0430\u0440\u044f\u0434"})})]}),Object.keys(P).some((function(e){return!P[e]}))?(0,r.jsx)("input",(t={className:"singlebtn",type:"submit",disabled:!0},(0,s.Z)(t,"className","button button_lightest"),(0,s.Z)(t,"value","\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442"),t)):(0,r.jsx)("input",(a={className:"singlebtn",type:"submit"},(0,s.Z)(a,"className","button"),(0,s.Z)(a,"value","\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442"),a))]})]})})}},2089:function(e,n,t){"use strict";var r=t(5893);n.Z=function(){return(0,r.jsx)("div",{className:"loader",children:(0,r.jsxs)("div",{className:"loader--content",children:[(0,r.jsx)("img",{className:"logo",src:"/img/logo/logoSmall.svg"}),(0,r.jsx)("p",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."})]})})}},5264:function(e,n,t){"use strict";var r=t(5893),s=t(1163);n.Z=function(e){var n=(0,s.useRouter)();return!0===e.isOpen?(0,r.jsx)("div",{"data-name":"modalka_block",className:"modalka_block ".concat("/getservice"===n.pathname&&"modalka_code"),onClick:function(n){return function(n){n.preventDefault();var t=n.target.dataset.name;console.log(t),e.onClose&&"modalka_block"===t&&e.onClose()}(n)},children:(0,r.jsx)("div",{className:"modalka_body",children:e.children})}):null}},1131:function(e,n,t){"use strict";var r=t(6156),s=t(5893),a=(t(9326),t(5264)),c=t(1163),i=t(6627),o=t.n(i);t(7294);n.Z=function(e){var n,t=e.isModalOpen,i=e.closeModal,l=e.code,u=e.setCode,d=e.onFirstStep,m=e.getIdentification,p=e.error;(0,c.useRouter)();return(0,s.jsx)("div",{children:(0,s.jsx)(a.Z,{isOpen:t,children:(0,s.jsxs)("div",{className:"modalka_content",children:[(0,s.jsx)("h3",{children:"\u041d\u0430 \u0432\u0430\u0448 \u043d\u043e\u043c\u0435\u0440 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d  4 \u0437\u043d\u0430\u0447\u043d\u044b\u0439 \u043a\u043e\u0434"}),(0,s.jsxs)("form",{className:"form_register",children:[(0,s.jsx)("span",{onClick:function(){return i()},className:"closebtn",children:"\u2716"}),(0,s.jsx)(o(),{mask:"9999",maskChar:" ",name:"phone",type:"tel",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0434",onChange:function(e){return function(e){u(e.target.value),4===e.target.value.replace(/ /g,"").length&&setTimeout((function(){d(e.target.value)}),10)}(e)},value:l,className:"my-input"}),(0,s.jsx)("p",{className:"danger",children:p})]}),(0,s.jsx)("input",(n={className:"singlebtn",type:"submit",onClick:function(e){return m(e)}},(0,r.Z)(n,"className","button button--light"),(0,r.Z)(n,"value","\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u0434 \u0437\u0430\u043d\u043e\u0432\u043e"),n))]})})})}},9956:function(e,n,t){"use strict";var r=t(6156),s=t(5893),a=(t(5937),t(7294)),c=t(1163),i=t(3190);function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e){var n=(0,c.useRouter)(),t=(0,a.useState)(!1);t[0],t[1];return(0,s.jsx)("div",{children:(0,s.jsxs)("div",{className:"container",children:[(0,s.jsxs)("div",{className:"navigation",children:[(0,s.jsx)("a",{href:"/",children:(0,s.jsx)("img",{className:"logo",src:(n.pathname,"/img/logo/logoBlack.svg")})}),(0,s.jsxs)("div",{className:"navigations",children:[(0,s.jsxs)("ul",{className:"navigation--contacts",children:[(0,s.jsxs)("li",{children:[(0,s.jsx)("img",{src:"/img/phone.svg"}),"+7 777 777 77 77"]}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#",children:(0,s.jsx)("img",{src:"/img/insta.svg"})})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#",children:(0,s.jsx)("img",{src:"/img/facebook.svg"})})})]}),(0,s.jsxs)("ul",{className:"navigation--menu",children:[(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"/about",children:"\u041e \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"/uslugi",children:"\u0423\u0441\u043b\u0443\u0433\u0438"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"/praktika",children:"\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0430"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"/news",children:"\u041f\u0440\u0435\u0441\u0441-\u0446\u0435\u043d\u0442\u0440"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"contacts",children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})})]})]})]}),(0,s.jsxs)("div",{className:"navigation_mobile",children:[(0,s.jsxs)(i.slide,l(l({},e),{},{children:[(0,s.jsx)("a",{className:"menu-item",href:"/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430"}),(0,s.jsx)("a",{className:"menu-item",href:"/about",children:"\u041e \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438"}),(0,s.jsx)("a",{className:"menu-item",href:"/uslugi",children:"\u0423\u0441\u043b\u0443\u0433\u0438"}),(0,s.jsx)("a",{className:"menu-item",href:"/praktika",children:"\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0430"}),(0,s.jsx)("a",{className:"menu-item",href:"/news",children:"\u041f\u0440\u0435\u0441\u0441-\u0446\u0435\u043d\u0442\u0440"}),(0,s.jsx)("a",{className:"menu-item",href:"/contacts",children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}),(0,s.jsx)("hr",{}),(0,s.jsxs)("a",{href:"tel:+7003505000",className:"menu-item",children:[(0,s.jsx)("i",{className:"fa fa-phone"}),"+700 350 50 00"]}),(0,s.jsxs)("div",{className:"socials",children:[(0,s.jsx)("a",{className:"menu-item",href:"#",children:(0,s.jsx)("i",{className:"fa fa-instagram"})}),(0,s.jsx)("a",{className:"menu-item",href:"#",children:(0,s.jsx)("i",{className:"fa fa-facebook"})}),(0,s.jsxs)("p",{className:"menu-item address",children:[(0,s.jsx)("i",{className:"fa fa-map-marker"}),(0,s.jsx)("span",{children:'\u0433. \u0410\u043b\u043c\u0430\u0442\u044b. \u0423\u043b. \u0422\u043e\u043b\u0435 \u0431\u0438 101 \u0411\u0426 "\u0422\u043e\u043b\u0435 \u0431\u0438"'})]})]})]})),(0,s.jsx)("a",{href:"/",children:(0,s.jsx)("img",{className:"logo",src:"/img/logo/justlogo.png"})})]})]})})}},741:function(e,n,t){"use strict";t.d(n,{Kp:function(){return r},sG:function(){return s},C$:function(){return a}});var r=function(e){return String(e).replace(/[^A-Z0-9]/g,"")},s=function(e){var n=function(e){var n=new Date;return n.setMonth(n.getMonth()+e)}(e);return new Intl.DateTimeFormat("ru-Ru",{year:"numeric",month:"short",day:"2-digit"}).format(n)},a=function(e){return e=e&&void 0!==e?e.replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/gm," "):""}},9326:function(e,n,t){"use strict";t.d(n,{B:function(){return r},u:function(){return s}});var r=[{id:"1",name:"\u0421\u043f\u043e\u0440\u044b \u043f\u043e \u043a\u0440\u0435\u0434\u0438\u0442\u0430\u043c"},{id:"2",name:"\u0410\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u0438\u0432\u043d\u044b\u0435 \u0434\u0435\u043b\u0430"},{id:"3",name:"\u0421\u0435\u043c\u0435\u0439\u043d\u044b\u0435 \u0441\u043f\u043e\u0440\u044b"},{id:"4",name:"\u041f\u043e \u0437\u0435\u043c\u0435\u043b\u043d\u044b\u043c \u0434\u0435\u043b\u0430\u043c"},{id:"5",name:"\u041f\u043e \u0442\u0440\u0443\u0434\u043e\u0432\u044b\u043c \u0441\u043f\u043e\u0440\u0430\u043c"},{id:"6",name:"\u0411\u0430\u043d\u043a\u0440\u043e\u0442\u0441\u0442\u0432\u043e \u0438 \u0440\u0435\u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f \u044e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043b\u0438\u0446"},{id:"7",name:"\u041f\u043e \u0436\u0438\u043b\u0438\u0449\u043d\u044b\u043c \u0441\u043f\u043e\u0440\u0430\u043c"},{id:"8",name:"\u041f\u043e \u0441\u0442\u0440\u0430\u0445\u043e\u0432\u044b\u043c \u0434\u0435\u043b\u0430\u043c"},{id:"9",name:"\u041f\u043e \u043d\u0430\u0441\u043b\u0435\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u043c \u0434\u0435\u043b\u0430\u043c"},{id:"10",name:"\u041f\u043e \u043f\u0435\u043d\u0441\u0438\u043e\u043d\u043d\u044b\u043c \u0434\u0435\u043b\u0430\u043c"},{id:"11",name:"\u0417\u0430\u0449\u0438\u0442\u0430 \u043f\u0440\u0430\u0432 \u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b\u0435\u0439"},{id:"12",name:"\u0410\u0432\u0442\u043e\u044e\u0440\u0438\u0441\u0442"},{id:"13",name:"\u0418\u043d\u0442\u0435\u043b\u043b\u0435\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u0430\u044f \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u0438 \u0430\u0432\u0442\u043e\u0440\u0441\u043a\u043e\u0435 \u043f\u0440\u0430\u0432\u043e"},{id:"14",name:"\u041c\u0438\u0433\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u0443\u0441\u043b\u0443\u0433\u0438"},{id:"15",name:"\u041b\u0438\u0447\u043d\u044b\u0439 \u0430\u0434\u0432\u043e\u043a\u0430\u0442"},{id:"16",name:"\u041c\u0435\u0434\u0438\u0446\u0438\u043d\u0441\u043a\u0438\u0435 \u0441\u043f\u043e\u0440\u044b"}],s=[{id:"1",name:"\u0410\u0440\u0431\u0438\u0442\u0440\u0430\u0436"},{id:"2",name:"\u041f\u043e \u043a\u043e\u0440\u043f\u043e\u0440\u0430\u0442\u0438\u0432\u043d\u044b\u043c \u0441\u043f\u043e\u0440\u0430\u043c"},{id:"3",name:"\u0417\u0430\u0449\u0438\u0442\u0430 \u0434\u0435\u043b\u043e\u0432\u043e\u0439 \u0440\u0435\u043f\u0443\u0442\u0430\u0446\u0438\u0438"},{id:"4",name:"\u041f\u0440\u0438\u0432\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044f, \u0433\u043e\u0441\u0437\u0430\u043a\u0443\u043f\u043a\u0438, \u0433\u043e\u0441\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u043e"},{id:"5",name:"\u041d\u0435\u0434\u0432\u0438\u0436\u0438\u043c\u043e\u0441\u0442\u044c, \u0437\u0435\u043c\u043b\u044f, \u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e"},{id:"6",name:"\u0411\u0430\u043d\u043a\u0440\u043e\u0442\u0441\u0442\u0432\u043e \u0438 \u0440\u0435\u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f \u044e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043b\u0438\u0446"},{id:"7",name:"\u0412\u0437\u044b\u0441\u043a\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0441\u0440\u043e\u0447\u0435\u043d\u043d\u043e\u0439 \u0434\u0435\u0431\u0438\u0442\u043e\u0440\u0441\u043a\u043e\u0439 \u0437\u0430\u0434\u043e\u043b\u0436\u0435\u043d\u043d\u043e\u0441\u0442\u0438"},{id:"8",name:"\u042d\u043a\u0441\u043f\u0435\u0440\u0442 \u043f\u043e \u043d\u0430\u043b\u043e\u0433\u043e\u0432\u044b\u043c \u0441\u043f\u043e\u0440\u0430\u043c"},{id:"9",name:"\u0412\u043d\u0435\u0441\u0443\u0434\u0435\u0431\u043d\u0430\u044f \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0437\u0430\u043b\u043e\u0433\u043e\u0432\u043e\u0433\u043e \u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430"},{id:"10",name:"\u042d\u043a\u0441\u043f\u0435\u0440\u0442 \u043f\u043e \u0441\u0442\u0440\u0430\u0445\u043e\u0432\u044b\u043c \u0434\u0435\u043b\u0430\u043c"},{id:"11",name:"\u042d\u043a\u0441\u043f\u0435\u0440\u0442 \u043f\u043e \u0442\u0430\u043c\u043e\u0436\u0435\u043d\u043d\u044b\u043c \u0441\u043f\u043e\u0440\u0430\u043c"}]},1824:function(e,n,t){"use strict";function r(e){var n=new Date,t=n.getYear(),r=n.getMonth(),s=n.getDate(),a=new Date(function(e){return 0==e[0]?"20"+e.substring(0,2):"19"+e.substring(0,2)}(e),e.substring(2,4)-1,e.substring(4,6)),c=a.getYear(),i=a.getMonth(),o=a.getDate(),l=t-c;if(r>=i)var u=r-i;else{l--;u=12+r-i}if(s>=o)var d=s-o;else{d=31+s-o;--u<0&&(u=11,l--)}return{years:l,months:u,days:d}.years}t.d(n,{p:function(){return s}});var s=function(e){return!(e[6]%2!=0&&r(e)<18)&&!(e[6]%2==0&&r(e)<18)}},3899:function(e,n,t){"use strict";t.d(n,{s$:function(){return r},C1:function(){return s},k8:function(){return c},l1:function(){return i},X4:function(){return o},CD:function(){return l}});var r=function(e){var n,t=e.trim();(t||(n="\u041f\u043e\u043b\u0435 Email \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"),t)&&(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(t)||(n="\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 email"));return n},s=function(e){var n;return e||(n="\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"),n},a=function(e){var n=String(e).replace(/[^A-Z0-9]/g,""),t=n.match(/^(\d{4})(\d{3})(\d{4})$/);if(!t||11!==n.length)return!1;var r=t[1];return[{id:"7700"},{id:"7701"},{id:"7702"},{id:"7705"},{id:"7706"},{id:"7707"},{id:"7708"},{id:"7747"},{id:"7771"},{id:"7775"},{id:"7776"},{id:"7777"},{id:"7778"}].filter((function(e){return e.id==r})).length>0},c=function(e){var n,t=e.replace(/ /g,"");return 16===t.length&&!0===a(e)&&(n=""),16!==t.length&&(n="\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u043d\u043e\u043c\u0435\u0440"),16===t.length&&!1===a(e)&&(n="\u041d\u0435\u0442 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0433\u043e \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430"),n},i=function(e){var n;return e||(n="\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"),e&&e.length<6&&(n="\u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u043f\u0430\u0440\u043e\u043b\u044f \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),n},o=function(e){var n=/[a-zA-Z0-9_"*/]/i.test(e),t="",r=e;r=(r=(r=r.replace(/(^\s*)|(\s*$)/gi,"")).replace(/[ ]{2,}/gi," ")).replace(/\n /,"\n");var s=e?r.split(" ").length:0;return e||(t="\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"),e&&(!0===n&&(t="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0430 \u043a\u0438\u0440\u0440\u0438\u043b\u0438\u0446\u0435"),0==n&&parseInt(s)<2&&(t="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u043b\u043d\u043e\u0435 \u0438\u043c\u044f ( \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440: \u0410\u0431\u0430\u0435\u0432 \u0410\u0431\u044b\u043b\u0430\u0439)")),t},l=function(e){var n="",t=[1,2,3,4,5,6,7,8,9,10,11],r=[3,4,5,6,7,8,9,10,11,1,2],s=[],a=e?e.replace(/ /g,""):"",c=0;if(a||(n="\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"),a&&12!==a.length&&(n="\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u0418\u0418\u041d"),a&&12===a.length){for(var i=0;i<12;i++)s[i]=parseInt(a.substring(i,i+1)),i<11&&(c+=s[i]*t[i]);if(10==(c%=11)){c=0;for(i=0;i<11;i++)c+=s[i]*r[i];c%=11}c!=s[11]&&(n="\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u0418\u0418\u041d")}return n}},4453:function(){}}]);