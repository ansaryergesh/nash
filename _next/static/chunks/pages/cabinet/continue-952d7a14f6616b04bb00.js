(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[968],{6610:function(e,t,n){"use strict";function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,{Z:function(){return s}})},5991:function(e,t,n){"use strict";function s(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function r(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}n.d(t,{Z:function(){return r}})},7608:function(e,t,n){"use strict";function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,{Z:function(){return s}})},5255:function(e,t,n){"use strict";function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}n.d(t,{Z:function(){return r}})},6089:function(e,t,n){"use strict";function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,{Z:function(){return o}});var r=n(3349);function o(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?(0,r.Z)(e):t}},4617:function(e,t,n){"use strict";var s=n(5893),r=n(6156),o=n(9669),a=n.n(o),i=n(7294),c=n(1131),u=n(741),p=n(6808),l=n.n(p),d=n(5611),f=n(7513),h=n(4494),m=n(3899),g=n(1163),x=(n(2089),n(1824)),y=n(6737),j=n.n(y),v=n(6072),N=n(5614);var _=function(e){var t=e.setLoading,n=(0,d.e1)().addToast,o=(0,h.I0)(),p=(0,i.useState)({email:"",phone:"",fio:"",password:"",type:"\u0424\u0438\u0437 \u043b\u0438\u0446\u043e"}),y=p[0],_=p[1],k=(0,i.useState)({email:"",phone:"",fio:"",password:""}),b=(k[0],k[1],(0,i.useState)("")),Z=b[0],w=b[1],E=(0,i.useState)(!1),S=E[0],O=E[1],I=(0,i.useState)(""),U=I[0],R=I[1],T=function(e){(0,x.p)(e.iin)?(t(!0),_(e),a().get("".concat("https://crediter.kz/api","/identification"),{params:{fio:e.fio,phone:(0,u.Kp)(e.phone),email:e.email,password:e.password,type:e.type,source:"nashcompany.kz",iin:e.iin}}).then((function(e){t(!1),e.data.success&&O(!0),e.data.success||n(e.data.message,{appearance:"error",autoDismiss:!0})})).catch((function(e){t(!1),e.response&&n(e.response.status,{appearance:"error",autoDismiss:!0})}))):j()("Oops!","\u0418\u0437\u0432\u0438\u043d\u0438\u0442\u0435, \u0443\u0441\u043b\u0443\u0433\u0430 \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043b\u0438\u0446\u0430\u043c \u0434\u043e\u0441\u0442\u0438\u0433\u0448\u0438\u0435 18 \u043b\u0435\u0442.","info")};return(0,s.jsx)("div",{children:(0,s.jsxs)("div",{className:"form_register",children:[(0,s.jsx)(f.J9,{initialValues:{email:"",phone:"",fio:"",password:"",type:"\u0424\u0438\u0437 \u043b\u0438\u0446\u043e",iin:""},onSubmit:function(e){T(e)},children:function(e){var t,n=e.errors,o=e.touched;return(0,s.jsxs)(f.l0,{children:[(0,s.jsx)(f.gN,{type:"text",name:"fio",className:"capitalize",validate:m.X4,placeholder:"\u0424\u0418\u041e",autocomplete:"off"})," ",n.fio&&o.fio?(0,s.jsx)("p",{className:"text-danger",children:n.fio}):(0,s.jsx)("p",{className:""}),(0,s.jsx)(f.gN,{name:"phone",className:"form-control",placeholder:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d \u043d\u043e\u043c\u0435\u0440",type:"tel",validate:m.k8,component:v.Z}),n.phone&&o.phone?(0,s.jsx)("p",{className:"text-danger",children:n.phone}):(0,s.jsx)("p",{className:""}),(0,s.jsx)(f.gN,{name:"iin",className:"form-control",placeholder:"\u0418\u0418\u041d",type:"tel",validate:m.CD,component:N.Z}),n.iin&&o.iin?(0,s.jsx)("p",{className:"text-danger",children:n.iin}):(0,s.jsx)("p",{className:""}),(0,s.jsx)(f.gN,{type:"text",name:"email",validate:m.s$,placeholder:"Email",autocomplete:"off"})," ",n.email&&o.email?(0,s.jsx)("p",{className:"text-danger",children:n.email}):(0,s.jsx)("p",{className:""}),(0,s.jsx)(f.gN,{type:"password",name:"password",validate:m.l1,placeholder:"\u041f\u0440\u0438\u0434\u0443\u043c\u0430\u0439\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",autocomplete:"off"})," ",n.password&&o.password?(0,s.jsx)("p",{className:"text-danger",children:n.password}):(0,s.jsx)("p",{className:""}),(0,s.jsxs)("div",{className:"firststep_banner",children:[(0,s.jsx)("div",{className:"firststep_banner--img",children:(0,s.jsx)("img",{alt:"image",className:"firststep",src:"/img/form/firststep.svg"})}),(0,s.jsxs)("div",{className:"firststep_banner--button",children:[(0,s.jsx)("input",(t={className:"singlebtn",type:"submit"},(0,r.Z)(t,"className","button"),(0,r.Z)(t,"onClick",(function(){return(0,u.Iw)()})),(0,r.Z)(t,"value","\u0425\u043e\u0447\u0443 \u0441\u043a\u0438\u0434\u043a\u0438"),t)),(0,s.jsxs)("b",{children:["\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0448\u0430\u0433",(0,s.jsx)("br",{})," \u0434\u0430\u0441\u0442 50% \u0441\u043a\u0438\u0434\u043a\u0438"]})]})]})]})}}),(0,s.jsx)(c.Z,{isModalOpen:S,closeModal:function(){O(!1)},code:U,setCode:R,onFirstStep:function(e){t(!0);var s={fio:y.fio,iin:y.iin,phone:(0,u.Kp)(y.phone),email:y.email,password:y.password,type:y.type,code:e,source:void 0!==l().get("utm_source")?l().get("utm_source")+"_1":"nashcompany.kz"};void 0!==l().get("utm_source")&&(s.utm_source=l().get("utm_source")+"_1",s.click_id=l().get("click_id")),a().get("".concat("https://crediter.kz/api","/stepOne"),{params:s}).then((function(e){t(!1),e.data.success&&(l().set("token",e.data.token,{expires:1e3}),l().set("lead_id",e.data.id,{expires:60}),l().set("step",2,{expires:60}),g.default.push("/dlya-fizicheskix-lic?step=2"),o({type:"AUTHENTICATING_USER"}),a().post("".concat("https://crediter.kz/api","/getData"),{token:e.data.token}).then((function(e){e.data.success&&o({type:"SET_CURRENT_USER",payload:e.data})}))),e.data.success||(w(e.data.message),n(e.data.message,{appearance:"error",autoDismiss:!0}))}))},error:Z,getIdentification:function(){t(!0),O(!1),R(""),w(""),a().get("".concat("https://crediter.kz/api","/identification"),{params:{fio:y.fio,phone:(0,u.Kp)(y.phone),email:y.email,password:y.password,type:y.type,source:"nashcompany.kz",iin:y.iin}}).then((function(e){t(!1),e.data.success&&O(!0),e.data.success||n(e.data.message,{appearance:"error",autoDismiss:!0})})).catch((function(e){t(!1),e.response&&n(e.response.status,{appearance:"error",autoDismiss:!0})}))}})," "]})})};t.Z=function(e){var t=e.setLoading;return(0,i.useEffect)((function(){document.querySelector(".form_register").scrollIntoView({block:"center",behavior:"smooth"})}),[]),(0,s.jsx)(d.VW,{children:(0,s.jsx)(_,{setLoading:t})})}},2804:function(e,t,n){"use strict";var s=n(5893),r=n(6610),o=n(5991),a=n(5255),i=n(6089),c=n(7608),u=n(7294),p=n(4494),l=n(1163),d=n(9291),f=n(6808),h=n.n(f),m=n(2089),g=n(9956);function x(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,s=(0,c.Z)(e);if(t){var r=(0,c.Z)(this).constructor;n=Reflect.construct(s,arguments,r)}else n=s.apply(this,arguments);return(0,i.Z)(this,n)}}t.Z=function(e){var t=function(t){(0,a.Z)(i,t);var n=x(i);function i(){return(0,r.Z)(this,i),n.apply(this,arguments)}return(0,o.Z)(i,[{key:"componentDidMount",value:function(){h().get("token")&&!this.props.loggedIn&&this.props.fetchCurrentUser(),h().get("token")||l.default.push("/login")}},{key:"render",value:function(){return h().get("token")&&this.props.loggedIn?(0,s.jsx)(e,{}):!h().get("token")||!this.props.authenticatingUser&&this.props.loggedIn?(0,s.jsxs)("div",{className:"otherPages",children:[(0,s.jsx)(g.Z,{}),(0,s.jsx)(m.Z,{}),(0,s.jsx)("h2",{className:"text-center pt-5",children:"\u0412\u044b \u0432\u044b\u0448\u043b\u0438 \u0441 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430 \u0438\u043b\u0438 \u0412\u0440\u0435\u043c\u044f \u0432\u0430\u0448\u0435\u0433\u043e \u0441\u0435\u0430\u043d\u0441\u0430 \u0438\u0441\u0442\u0435\u043a\u043b\u043e"})]}):(0,s.jsxs)("div",{className:"otherPages",children:[(0,s.jsx)(g.Z,{}),(0,s.jsx)("div",{className:"pd-5 pt-5"}),(0,s.jsx)(m.Z,{})]})}}]),i}(u.Component);return(0,p.$j)((function(e){return{loggedIn:e.userReducer.loggedIn,authenticatingUser:e.userReducer.authenticatingUser}}),d)(t)}},771:function(e,t,n){"use strict";n.r(t);var s=n(5893),r=n(9008),o=n(1163),a=n(7294),i=n(4617),c=n(1466),u=n(2465),p=n(2089),l=n(9956),d=n(2804);t.default=(0,d.Z)((function(){var e=(0,o.useRouter)(),t=(e.query.id,e.query.step),n=e.query.type,d=(0,a.useState)(!1),f=d[0],h=d[1];return(0,s.jsxs)("div",{className:"getservice",children:[f&&(0,s.jsx)(p.Z,{}),(0,s.jsx)(r.default,{children:(0,s.jsxs)("title",{children:["\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0443\u0441\u043b\u0443\u0433\u0443 | ","\u0424\u0438\u0437 \u043b\u0438\u0446\u043e"===n?"\u0424\u0438\u0437 \u043b\u0438\u0446\u0430\u043c":"\u042e\u0440 \u043b\u0438\u0446\u0430\u043c"]})}),(0,s.jsxs)("div",{className:"header",children:[(0,s.jsx)(l.Z,{}),(0,s.jsx)("div",{className:"bg"})]}),(0,s.jsxs)("div",{className:"container",children:[(0,s.jsxs)("div",{className:"form_headings",children:[(0,s.jsxs)("h1",{children:["\u0423\u0441\u043b\u0443\u0433\u0438 ","\u0424\u0438\u0437 \u043b\u0438\u0446\u043e"===n?"\u0424\u0438\u0437 \u043b\u0438\u0446\u0430\u043c":"\u042e\u0440 \u043b\u0438\u0446\u0430\u043c"]}),(0,s.jsxs)("h2",{children:["\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0435\u043d\u0438\u0435",(0,s.jsx)("br",{}),"\u0430\u043d\u043a\u0435\u0442\u044b:"]})]}),(0,s.jsxs)("div",{className:"form_service ",children:[(0,s.jsx)("div",{className:"form_header",children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{className:"1"===t?"active":"",children:"1 \u0428\u0430\u0433"}),(0,s.jsx)("li",{className:"2"===t&&"active",children:"2 \u0428\u0430\u0433"}),(0,s.jsx)("li",{className:"3"===t&&"active",children:"3 \u0428\u0430\u0433"})]})}),"1"===t&&(0,s.jsx)(i.Z,{setLoading:h}),"2"===t&&(0,s.jsx)(c.Z,{setLoading:h}),"3"===t&&(0,s.jsx)(u.Z,{setLoading:h})]})]})]})}))},9291:function(e,t,n){"use strict";n.r(t),n.d(t,{authenticatingUser:function(){return c},setCurrentUser:function(){return u},logoutUser:function(){return p},logOutAction:function(){return l},loginUser:function(){return d},fetchCurrentUser:function(){return f}});var s=n(9669),r=n.n(s),o=n(6808),a=n.n(o),i=n(1163),c=function(){return{type:"AUTHENTICATING_USER"}},u=function(e){return{type:"SET_CURRENT_USER",payload:e}},p=function(){return{type:"LOGOUT_USER"}},l=function(){return function(e){e(p()),a().remove("token"),i.default.push("/login")}},d=function(e,t){return function(n){n(c()),r().post("".concat("https://crediter.kz/api","/signIn"),e).then((function(e){console.log(e),e.data.success?(a().set("token",e.data.token,{expires:1e3}),r().post("".concat("https://crediter.kz/api","/getData"),{token:e.data.token}).then((function(e){e.data.success?(n(u(e.data)),i.default.push("/cabinet")):(n({type:"FAILED_LOGIN"}),a().remove("token"),i.default.push("/login"))})).catch((function(e){n({type:"FAILED_LOGIN"}),a().remove("token"),i.default.push("/login")}))):(t(e.data.message),n({type:"FAILED_LOGIN"}))}))}},f=function(){return function(e){e(c()),r().post("".concat("https://crediter.kz/api","/getData"),{token:a().get("token")}).then((function(t){t.data.success?e(u(t.data)):(e(p),a().remove("token"),i.default.push("/login"))})).catch((function(t){e(p),a().remove("token"),i.default.push("/")}))}}},8942:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cabinet/continue",function(){return n(771)}])}},function(e){e.O(0,[774,663,597,669,356,57,737,657,611,733,956,502,902,69],(function(){return t=8942,e(e.s=t);var t}));var t=e.O();_N_E=t}]);