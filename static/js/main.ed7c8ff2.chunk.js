(this["webpackJsonpcaratulas-ucsp"]=this["webpackJsonpcaratulas-ucsp"]||[]).push([[0],{56:function(e,a,t){e.exports=t(64)},64:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(9),l=t.n(o),c=t(30),i=t(16),u=t(40),m=t(102),s="production".includes("development")?"http://localhost:4000/":"https://caratulas-ucsp-api.herokuapp.com/",d=t(113),f=t(111),b=t(110),p=t(108),h=t(105),g=t(66),v=t(109),y=t(114),E=t(115),j=t(107),O=t(116),k={career:{value:"",label:"Carrera"},course:{value:"",label:"Curso"},work:{value:"",label:"Nombre del trabajo"},semester:{value:"",label:"Semestre"},year:{value:"",label:"A\xf1o"},gender:{value:"M",radio:{M:"Masculino",F:"Femenino"},label:"G\xe9nero"},names:{value:[""],label:"Integrantes"}},C=Object(m.a)((function(e){return{"@global":{html:{backgroundColor:e.palette.background.default}},root:{marginTop:e.spacing(8)},form:{paddingTop:e.spacing(2),paddingBottom:e.spacing(2)},textContainer:{width:"80%"},radioContainer:{width:"78%"}}})),w=function(e){var a=e.classes,t=e.data,n=e.handleTextInput,o=e.name;return r.a.createElement(h.a,{item:!0,className:a.textContainer},r.a.createElement(d.a,{variant:"outlined",name:o,value:t[o].value,label:t[o].label,onChange:n,fullWidth:!0}))},A=function(e){var a=e.classes,t=e.data,n=e.field,o=e.handleRadioChange;return r.a.createElement(O.a,{component:"fieldset",key:n,className:a.radioContainer},r.a.createElement(j.a,{component:"legend"},t[n].label),r.a.createElement(E.a,{row:!0,"aria-label":t[n].label,value:t[n].value,onChange:o},Object.keys(t[n].radio).map((function(e){return r.a.createElement(v.a,{key:e,name:n,value:e,control:r.a.createElement(y.a,{color:"primary"}),label:t[n].radio[e]})}))))};var F=function(){var e=C(),a=Object(n.useState)("Aqu\xed aparecer\xe1 un link"),t=Object(u.a)(a,2),o=t[0],l=t[1],m=Object(n.useState)(k),d=Object(u.a)(m,2),v=d[0],y=d[1],E=function(){(function(e){console.log(e);var a={method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}};return fetch(s,a).then((function(e){return e.json()})).then((function(e){return e.link}))})(function(e){return Object.keys(e).reduce((function(a,t){return a[t]=e[t].value,a}),{})}(v)).then((function(e){l(e)}))},j=function(e){var a=e.target.name,t=e.target.value;y(Object(i.a)(Object(i.a)({},v),{},Object(c.a)({},a,Object(i.a)(Object(i.a)({},v[a]),{},{value:t}))))},O=function(e){var a=e.target.name,t=e.target.value;y(Object(i.a)(Object(i.a)({},v),{},Object(c.a)({},a,Object(i.a)(Object(i.a)({},v[a]),{},{value:t}))))};return r.a.createElement(b.a,{maxWidth:"xs",className:e.root},r.a.createElement(p.a,null,r.a.createElement(h.a,{container:!0,spacing:1,direction:"column",alignItems:"center",className:e.form,component:"form",noValidate:!0,autoComplete:"off"},r.a.createElement(h.a,{item:!0},r.a.createElement(g.a,{variant:"h5"},"Car\xe1tulas UCSP")),Object.keys(v).map((function(a){return r.a.createElement(r.a.Fragment,{key:a},v[a].radio?r.a.createElement(A,{key:a,classes:e,field:a,data:v,handleRadioChange:O}):r.a.createElement(w,{key:a,classes:e,name:a,data:v,handleTextInput:j}))})),r.a.createElement(h.a,{item:!0},r.a.createElement(f.a,{variant:"contained",color:"primary",onClick:function(){return E()}},"Generar Caratula")),r.a.createElement(h.a,{item:!0},r.a.createElement("a",{href:o},o)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=t(112),x=t(47),B=Object(x.a)({palette:{common:{blue:"#1A5BA0",orange:"#FFBA60"},primary:{main:"#1A5BA0"},secondary:{main:"#FFBA60"},background:{default:"#dfdbd9"}},typography:{tab:{fontFamily:"Raleway",textTransform:"none",fontWeight:"700",fontSize:"1rem"},estimate:{fontFamily:"Pacifico",fontSize:"1rem",textTransform:"none",color:"white"},h2:{fontFamily:"Raleway",fontWeight:700,fontSize:"2.5em",color:"".concat("#1A5BA0"),lineHeight:1.5}}});l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S.a,{theme:B},r.a.createElement(F,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[56,1,2]]]);
//# sourceMappingURL=main.ed7c8ff2.chunk.js.map