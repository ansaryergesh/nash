(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[575],{5288:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var s=n(5893),a=n(6156),r=n(7294),c=n(9326),o=n(6808),i=n.n(o),l=n(9669),u=n.n(l),d=n(1163),p=n(7513),m=n(3899),h=(n(1389),n(2949)),g=n(7333);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}g.Z;var x=function(e){var t=e.field,n=(e.form,(0,h.Z)(e,["field","form"])),a=(0,r.useState)("");a[0],a[1];return(0,s.jsx)(g.Z,j(j(j({},t),n),{},{isNumericString:!0,thousandSeparator:" "}))},b=n(741),v=(n(1757),n(5990)),_=n.n(v),k=function(e){var t=e.setFiles;(0,r.useEffect)((function(){}),[]);return(0,s.jsx)(_(),{onChangeStatus:function(e,n,s){var a=e.meta;console.log(n,a),t(s)},inputContent:"\u041f\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0444\u0430\u0439\u043b\u044b \u0441\u044e\u0434\u0430 \u0438\u043b\u0438 \u043d\u0430\u0436\u043c\u0438\u0442\u0435, \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c",inputWithFilesContent:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0435\u0449\u0435",maxFiles:5,styles:{dropzone:{minHeight:200,maxHeight:250}}})},y=function(e){var t=e.setLoading,n=(0,d.useRouter)(),o=n.pathname,l=(n.query.step,n.query.type),h="/dlya-fizicheskix-lic"===n.pathname?c.B:c.u,g="\u0424\u0438\u0437 \u043b\u0438\u0446\u043e"===l?c.B:c.u,f="/cabinet/continue"===o?g:h,j=(0,r.useState)([]),v=(j[0],j[1]),_=(0,r.useState)({id:void 0===i().get("lead_id")?n.query.id:i().get("lead_id"),token:i().get("token"),description:"",sphere:"1",amount:""});_[0],_[1];return(0,r.useEffect)((function(){var e=document.querySelector(".form_register");console.log(e),e.scrollIntoView({block:"center",behavior:"smooth"})}),[]),(0,s.jsx)("div",{className:"form_register",children:(0,s.jsx)(p.J9,{initialValues:{id:void 0!==i().get("lead_id")?i().get("lead_id"):n.query.id,token:i().get("token"),description:"",sphere:"1",amount:""},onSubmit:function(e){!function(e){t(!0),console.log(e);var s=f.find((function(t){return t.id===e.sphere})).name,a={id:e.id,token:e.token,description:e.description,sphere:s,amount:(0,b.Kp)(e.amount)};void 0!==i().get("utm_source")&&(a.utm_source=i().get("utm_source"),a.click_id=i().get("click_id")),u().get("".concat("https://crediter.kz/api","/stepTwo"),{params:a}).then((function(s){t(!1),console.log(s),s.data.success&&("/jurservice"===o&&(d.default.push("/jurservice?step=3"),i().set("stepjur",3),i().set("amount",(0,b.Kp)(e.amount))),"/dlya-fizicheskix-lic"===o&&(d.default.push("/dlya-fizicheskix-lic?step=3"),i().set("step",3),i().set("amount",(0,b.Kp)(e.amount))),"/cabinet/continue"===o&&d.default.push({pathname:"/cabinet/continue",query:{step:3,id:n.query.id,type:l,amount:(0,b.Kp)(e.amount)}})),s.data.success}))}(e)},children:function(e){var t,n=e.errors,r=e.touched;e.values;return(0,s.jsxs)(p.l0,{children:[(0,s.jsx)(p.gN,{as:"select",validate:m.C1,name:"sphere",className:"form_select",children:f.map((function(e,t){return(0,s.jsx)("option",{"data-img":"/img/uslugi/".concat(t+1,".svg"),value:t+1,children:e.name})}))}),n.sphere&&r.sphere?(0,s.jsx)("p",{className:"text-danger",children:n.sphere}):(0,s.jsx)("p",{className:""}),(0,s.jsx)(p.gN,{as:"textarea",name:"description",validate:m.C1,placeholder:"\u041e\u043f\u0438\u0448\u0438\u0442\u0435 \u0432\u0430\u0448\u0443 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044e"}),n.description&&r.description?(0,s.jsx)("p",{className:"text-danger",children:n.description}):(0,s.jsx)("p",{className:""}),(0,s.jsx)(p.gN,{name:"amount",type:"text",validate:m.C1,component:x,placeholder:"\u0421\u0443\u043c\u043c\u0430 \u0438\u0441\u043a\u0430"}),n.amount&&r.amount?(0,s.jsx)("p",{className:"text-danger",children:n.amount}):(0,s.jsx)("p",{className:""}),(0,s.jsx)(k,{setFiles:v}),(0,s.jsxs)("div",{className:"firststep_banner",children:[(0,s.jsx)("div",{className:"firststep_banner--img",children:(0,s.jsx)("img",{alt:"image",className:"secondstep",src:"/img/form/secondstep.png"})}),(0,s.jsxs)("div",{className:"firststep_banner--button",children:[(0,s.jsx)("input",(t={className:"singlebtn",type:"submit"},(0,a.Z)(t,"className","button"),(0,a.Z)(t,"onClick",(function(){return(0,b.Iw)()})),(0,a.Z)(t,"value","\u0414\u0430\u043b\u0435\u0435"),t)),(0,s.jsxs)("b",{children:["\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442",(0,s.jsx)("br",{}),"\u043f\u043e\u0442\u043e\u043c \u043e\u043f\u043b\u0430\u0442\u0430"]})]})]})]})}})})}},2465:function(e,t,n){"use strict";var s=n(5893),a=n(6156),r=n(9669),c=n.n(r),o=n(7294),i=n(6808),l=n.n(i),u=n(1163),d=n(6737),p=n.n(d),m=n(741);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.Z=function(e){var t,n,r=e.setLoading,i=(0,u.useRouter)(),d=i.query.id,h=i.query.amount;(0,o.useEffect)((function(){var e=void 0!==l().get("amount")?l().get("amount"):h,t=Math.floor(.2*parseInt(e)),n=Math.floor(parseInt(t)/2);t>2e5?(x(t),_(n)):(x(2e5),_(1e5)),console.log(t)}),[l().get("amount")]);var f=(0,o.useState)(0),j=f[0],x=f[1],b=(0,o.useState)(0),v=b[0],_=b[1],k=(0,o.useState)(!1),y=k[0],N=k[1],O=(0,o.useState)((0,m.sG)(1)),S=O[0],C=O[1],w=(0,o.useState)({doc1:!0,doc2:!0,doc3:!0,doc4:!0}),P=w[0],Z=w[1],q=(0,o.useState)("1"),D=q[0],E=q[1],I=function(e){var t=e.target.dataset.name;Z(g(g({},P),{},(0,a.Z)({},t,!P[t]))),console.log(P)},z=function(e){e.target.getAttribute("data-name");N(!y)},L=function(e){var t=parseInt(e);(E(e),C((0,m.sG)(t)),t>3)?document.querySelector(".range__list").scrollLeft=200:document.querySelector(".range__list").scrollRight=200};return(0,s.jsx)("div",{className:"form_register thirdstep",children:(0,s.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault();var t={id:void 0===l().get("lead_id")?d:l().get("lead_id"),token:l().get("token"),amountPayment:v,date_payment:S,period:D,typePayment:y?"\u041f\u0440\u0435\u0434\u043e\u043f\u043b\u0430\u0442\u0430":"\u041f\u043e\u0441\u0442\u043e\u043f\u043b\u0430\u0442\u0430"};void 0!==l().get("utm_source")&&(t.utm_source=l().get("utm_source"),t.click_id=l().get("click_id")),r(!0),c().get("".concat("https://crediter.kz/api","/stepThree"),{params:t}).then((function(e){r(!1),console.log(e),e.data.success&&p()("\u0423\u0441\u043f\u0435\u0448\u043d\u043e!","\u0412\u0430\u0448\u0430 \u0437\u0430\u044f\u0432\u043a\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0430 \u0432 Nash Company. \u0412\u0430\u043c \u0441\u0435\u0439\u0447\u0430\u0441 \u043f\u0435\u0440\u0435\u0437\u0432\u043e\u043d\u044f\u0442 \u0441 \u043d\u043e\u043c\u0435\u0440\u0430 +7(700)350-50-00","success").then((function(){u.default.push("/cabinet/requests"),l().remove("lead_id"),l().remove("step"),l().remove("utm_medium"),l().remove("utm_source"),l().remove("utm_campaign"),l().remove("click_id")}))}))}(e)},children:[(0,s.jsxs)("div",{className:"radio_groups",children:[(0,s.jsxs)("div",(t={className:"postoplata","data-name":"postoplata"},(0,a.Z)(t,"className","check-group"),(0,a.Z)(t,"onClick",(function(e){return z(e)})),(0,a.Z)(t,"children",[(0,s.jsx)("input",{type:"checkbox",checked:!1===y}),(0,s.jsx)("label",{className:"radiolabel",children:"\u041f\u043e\u0441\u0442\u043e\u043f\u043b\u0430\u0442\u0430"})]),t)),(0,s.jsxs)("div",(n={className:"predoplata","data-name":"predoplata"},(0,a.Z)(n,"className","check-group"),(0,a.Z)(n,"onClick",(function(e){return z(e)})),(0,a.Z)(n,"children",[(0,s.jsx)("input",{type:"checkbox",checked:!0===y}),(0,s.jsx)("label",{className:"radiolabel",children:"\u041f\u0440\u0435\u0434\u043e\u043f\u043b\u0430\u0442\u0430"})]),n))]}),!y&&(0,s.jsxs)("div",{className:"range",children:[(0,s.jsx)("p",{className:"srok_month",children:"\u0421\u0440\u043e\u043a \u043e\u043f\u043b\u0430\u0442\u044b (\u043c\u0435\u0441\u044f\u0446)"}),(0,s.jsx)("input",{className:"range__input",type:"range",value:D,onChange:function(e){return function(e){var t=parseInt(e.target.value);E(e.target.value),C((0,m.sG)(t)),e.target.value>2?document.querySelector(".range__list").scrollLeft=-300:document.querySelector(".range__list").scrollLeft=300}(e)},min:"1",max:"3",step:"1",list:"number"}),(0,s.jsxs)("datalist",{className:"range__list",id:"number",children:[(0,s.jsx)("option",{onClick:function(){return L("1")},className:"range__opt opt0 ".concat("1"===D&&"active"),children:"1"}),(0,s.jsx)("option",{onClick:function(){return L("2")},className:"range__opt ".concat("2"===D&&"active"),children:"2"}),(0,s.jsx)("option",{onClick:function(){return L("3")},className:"range__opt ".concat("3"===D&&"active"),children:"3"})]})]}),!y&&(0,s.jsx)("div",{className:"payment_date",children:(0,s.jsxs)("strong",{children:["\u0414\u0435\u043d\u044c \u043e\u043f\u043b\u0430\u0442\u044b \u0434\u043e ",S]})}),(0,s.jsxs)("div",{className:"payment_amount",children:[(0,s.jsx)("p",{children:"\u0421\u0443\u043c\u043c\u0430 \u043e\u043f\u043b\u0430\u0442\u044b:"}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("strong",{children:[(0,m.C$)("".concat(v)),"\u0442\u0433"]}),(0,s.jsxs)("span",{class:"price--line-through",children:[(0,m.C$)("".concat(j)),"\u0442\u0433"]})]}),(0,s.jsx)("div",{className:"discount",children:(0,s.jsxs)("p",{children:["-50%",(0,s.jsx)("span",{children:"\u0421\u041a\u0418\u0414\u041a\u0410"})]})})]}),(0,s.jsxs)("div",{className:"check_groups",children:[(0,s.jsxs)("div",{"data-name":"predoplata",className:"check-group",children:[(0,s.jsx)("input",{type:"checkbox",checked:P.doc1}),(0,s.jsx)("label",{onClick:function(e){return I(e)},"data-name":"doc1",className:"checklabel"}),(0,s.jsx)("a",{href:"/dogovorobrabotka",target:"__blank",children:"\u0417\u0430\u043f\u0440\u043e\u0441 \u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445"})]}),(0,s.jsxs)("div",{"data-name":"postoplata",className:"check-group",children:[(0,s.jsx)("input",{type:"checkbox",checked:P.doc2}),(0,s.jsx)("label",{onClick:function(e){return I(e)},className:"checklabel","data-name":"doc2"}),(0,s.jsx)("a",{href:"/\u041f\u0423\u0411\u041b\u0418\u0427\u041d\u0410\u042f \u041e\u0424\u0415\u0420\u0422\u0410.pdf",target:"__blank",children:"\u0414\u043e\u0433\u043e\u0432\u043e\u0440 \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u043e\u0439 \u043e\u0444\u0435\u0440\u0442\u044b"})]}),(0,s.jsxs)("div",{"data-name":"predoplata",className:"check-group",children:[(0,s.jsx)("input",{type:"checkbox",checked:P.doc4}),(0,s.jsx)("label",{onClick:function(e){return I(e)},className:"checklabel","data-name":"doc4"}),(0,s.jsx)("a",{href:"/dogovor?paymentDate=".concat(S,"&period=").concat(D),target:"__blank",children:"\u0414\u043e\u0433\u043e\u0432\u043e\u0440 \u043d\u0430 \u0437\u0430\u043a\u0430\u0437 \u043d\u0430\u0440\u044f\u0434"})]}),Object.keys(P).some((function(e){return!P[e]}))?(0,s.jsx)("input",{type:"submit",disabled:!0,onClick:function(){return(0,m.Iw)()},className:"button button_lightest",value:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442"}):(0,s.jsx)("input",{type:"submit",className:"button",value:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442"})]})]})})}}}]);