(this["webpackJsonpcaratulas-ucsp"]=this["webpackJsonpcaratulas-ucsp"]||[]).push([[0],{71:function(e,a,t){e.exports=t(81)},81:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(10),i=t.n(o),l=t(44),c=t(36),s=t(12),m=t(45),u=t(120),d="production".includes("development")?"http://localhost:4000/":"https://caratulas-ucsp-api.herokuapp.com/",f=t(133),g=t(131),b=t(129),p=t(126),v=t(130),h=t(83),E=t(127),y=t(135),w=t(137),j=t(124),C=t(136),O=t(61),k=t.n(O),I=t(62),S=t.n(I),A=t(128),N=t(134),W={career:{value:"Ciencia de la Computaci\xf3n",label:"Carrera",options:["Ciencia de la Computaci\xf3n","Administraci\xf3n de Empresas","Arquitectura y Urbanismo","Contabilidad","Derecho","Educaci\xf3n inicial y primaria","Ingenieria Mecatronica","Ingenieria Civil","Ingenieria Electronica y Telecomunicaciones","Ingenieria Industrial","Psicologia","Sin carrera",""]},course:{value:"",label:"Curso"},work:{value:"",label:"Nombre del trabajo"},semester:{value:"",label:"Semestre",options:["Semestre I","Semestre II","Semestre II","Semestre IV","Semestre V","Semestre VI","Semestre VII","Semestre VIII","Semestre IX","Semestre X","Semestre XI","Semestre XII",""]},year:{value:"2020-1",label:"A\xf1o"},gender:{value:"M",radio:{M:"Masculino",F:"Femenino"},label:"G\xe9nero"},names:{value:[""],label:"Integrantes"}},F=Object(u.a)((function(e){return{"@global":{html:{backgroundColor:e.palette.background.default}},root:{marginTop:e.spacing(8)},form:{paddingTop:e.spacing(2),paddingBottom:e.spacing(2)},itemContainer:{width:"80%"},semesterInput:{width:"60%",display:"inline"},yearInput:{width:"40%",display:"inline"}}})),T=function(e){var a=Object.assign({},e);return r.a.createElement(f.a,Object.assign({variant:"outlined",fullWidth:!0},a))},B=function(e){var a=e.data,t=e.field,n=e.handleRadioChange;return r.a.createElement(C.a,{component:"fieldset",key:t},r.a.createElement(j.a,{component:"legend"},a[t].label),r.a.createElement(w.a,{row:!0,"aria-label":a[t].label,value:a[t].value,onChange:n},Object.keys(a[t].radio).map((function(e){return r.a.createElement(E.a,{key:e,name:t,value:e,style:{marginRight:"1.25em"},control:r.a.createElement(y.a,{color:"primary"}),label:a[t].radio[e]})}))))};var R=function(){var e=F(),a=Object(n.useState)("Aqu\xed aparecer\xe1 un link"),t=Object(m.a)(a,2),o=t[0],i=t[1],u=Object(n.useState)(W),E=Object(m.a)(u,2),y=E[0],w=E[1],C=function(){(function(e){console.log(e);var a={method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}};return fetch(d,a).then((function(e){return e.json()})).then((function(e){return e.link}))})(function(e){return Object.keys(e).reduce((function(a,t){return a[t]=e[t].value,a}),{})}(y)).then((function(e){i(e)}))},O=function(e,a){w(Object(s.a)(Object(s.a)({},y),{},Object(c.a)({},e,Object(s.a)(Object(s.a)({},y[e]),{},{value:a}))))},I=function(){w(Object(s.a)(Object(s.a)({},y),{},{names:Object(s.a)(Object(s.a)({},y.names),{},{value:[].concat(Object(l.a)(y.names.value),[""])})}))};return r.a.createElement(b.a,{maxWidth:"xs",className:e.root},r.a.createElement(p.a,null,r.a.createElement(v.a,{container:!0,spacing:2,direction:"column",alignItems:"center",className:e.form,component:"form",noValidate:!0,autoComplete:"off"},r.a.createElement(v.a,{item:!0},r.a.createElement(h.a,{variant:"h5"},"Car\xe1tulas UCSP")),r.a.createElement(v.a,{item:!0,className:e.itemContainer}," ",r.a.createElement(N.a,{options:y.career.options,value:y.career.value,onChange:function(e,a){return O("career",a)},renderInput:function(e){return r.a.createElement(f.a,Object.assign({},e,{label:y.career.label,variant:"outlined"}))}})),r.a.createElement(v.a,{item:!0,className:e.itemContainer}," ",r.a.createElement(T,{name:"course",value:y.course.value,label:y.course.label,onChange:function(e){return O("course",e.target.value)}})),r.a.createElement(v.a,{item:!0,className:e.itemContainer}," ",r.a.createElement(T,{name:"work",value:y.work.value,label:y.work.label,onChange:function(e){return O("work",e.target.value)}})),r.a.createElement(v.a,{item:!0,className:e.itemContainer}," ",r.a.createElement(v.a,{container:!0,spacing:1,direction:"row"},r.a.createElement(v.a,{item:!0,className:e.semesterInput},r.a.createElement(N.a,{options:y.semester.options,value:y.semester.value,onChange:function(e,a){return O("semester",a)},renderInput:function(e){return r.a.createElement(f.a,Object.assign({},e,{label:y.semester.label,variant:"outlined"}))}})),r.a.createElement(v.a,{item:!0,className:e.yearInput},r.a.createElement(T,{key:"year",name:"year",value:y.year.value,label:y.year.label,onChange:function(e){return O("year",e.target.value)}})))),r.a.createElement(v.a,{item:!0,className:e.itemContainer}," ",r.a.createElement(B,{classes:e,field:"gender",label:y.gender.label,data:y,handleRadioChange:function(e){return O("gender",e.target.value)}})),r.a.createElement(v.a,{item:!0,className:e.itemContainer}," ",r.a.createElement(j.a,{component:"legend"},"Integrantes"),r.a.createElement("div",{style:{width:"100%",height:"0.5em"}}),r.a.createElement(v.a,{container:!0,spacing:1},y.names.value.map((function(e,a){return r.a.createElement(r.a.Fragment,{key:a},r.a.createElement(v.a,{item:!0,sm:10,key:a},r.a.createElement(T,{name:"names",value:e,onChange:(n=a,function(e){w(Object(s.a)(Object(s.a)({},y),{},{names:Object(s.a)(Object(s.a)({},y.names),{},{value:function(a){var t=Object(l.a)(a);return t[n]=e.target.value,t}(y.names.value)})}))})})),r.a.createElement(v.a,{item:!0,sm:2,key:a,style:{textAlign:"left"}},a===y.names.value.length-1?r.a.createElement(A.a,{"aria-label":"add name",onClick:I},r.a.createElement(k.a,{fontSize:"small"})):r.a.createElement(A.a,{"aria-label":"remove name",onClick:(t=a,function(){var e;w(Object(s.a)(Object(s.a)({},y),{},{names:Object(s.a)(Object(s.a)({},y.names),{},{value:(e=y.names.value,e.filter((function(e,a){return a!==t})))})}))})},r.a.createElement(S.a,{fontSize:"small"}))));var t,n})))),r.a.createElement(v.a,{item:!0}," ",r.a.createElement(g.a,{variant:"contained",color:"primary",onClick:function(){return C()}},"Generar Caratula")),r.a.createElement(v.a,{item:!0}," ",r.a.createElement("a",{href:o},o)))))},x=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function P(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var V=t(132),z=t(63),M=Object(z.a)({palette:{common:{blue:"#1A5BA0",orange:"#FFBA60"},primary:{main:"#1A5BA0"},secondary:{main:"#FFBA60"},background:{default:"#dfdbd9"}},typography:{tab:{fontFamily:"Raleway",textTransform:"none",fontWeight:"700",fontSize:"1rem"},estimate:{fontFamily:"Pacifico",fontSize:"1rem",textTransform:"none",color:"white"},h2:{fontFamily:"Raleway",fontWeight:700,fontSize:"2.5em",color:"".concat("#1A5BA0"),lineHeight:1.5}}});i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(V.a,{theme:M},r.a.createElement(R,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/caratulas-ucsp",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/caratulas-ucsp","/service-worker.js");x?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):P(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):P(a,e)}))}}()}},[[71,1,2]]]);
//# sourceMappingURL=main.ba24113e.chunk.js.map