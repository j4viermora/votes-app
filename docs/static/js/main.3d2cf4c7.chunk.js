(this["webpackJsonpband-name-front-end"]=this["webpackJsonpband-name-front-end"]||[]).push([[0],{72:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(31),a=n.n(r),s=n(9),o=n(32),i=n(0),d=Object(c.createContext)(),b=function(e){var t=e.children,n=function(e){var t=Object(c.useMemo)((function(){return o.io.connect(e,{transports:["websocket"]})}),[e]),n=Object(c.useState)(!1),r=Object(s.a)(n,2),a=r[0],i=r[1];return Object(c.useEffect)((function(){i(t.connected)}),[t]),Object(c.useEffect)((function(){t.on("connect",(function(){i(!0)}))}),[t]),Object(c.useEffect)((function(){t.on("disconnect",(function(){i(!1)}))}),[t]),{socket:t,online:a}}("http://localhost:5000"),r=n.online,a=n.socket,b=Object(c.useState)([]),j=Object(s.a)(b,2),l=j[0],u=j[1];return Object(c.useEffect)((function(){return a.on("current-band",(function(e){u(e)})),function(){return a.off("current-band")}}),[a]),Object(i.jsx)(d.Provider,{value:{socket:a,online:r,bands:l,setBands:u},children:t})},j=function(){var e=Object(c.useContext)(d).socket,t=Object(c.useState)(""),n=Object(s.a)(t,2),r=n[0],a=n[1],o=function(t){console.log("new band"),e.emit("add-new-band",{name:t})};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h3",{children:" Add Band "}),Object(i.jsx)("form",{onSubmit:function(e){e.preventDefault(),r.trim().length>=2?(o(r),a("")):alert("No puede enviar le formulari vac\xedo")},children:Object(i.jsx)("input",{value:r,className:"form-control",placeholder:"Add new newBand",onChange:function(e){return a(e.target.value)}})})]})},l=n(33),u=function(){var e=Object(c.useContext)(d).bands;Object(c.useEffect)((function(){t(e)}),[e]);var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=document.getElementById("myChart");new l.Chart(t,{type:"horizontalBar",data:{labels:e.map((function(e){return e.name})),datasets:[{label:"# of Votes",data:e.map((function(e){return e.votes})),backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]},options:{scales:{xAxes:[{stacked:!0}]}}})};return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("canvas",{id:"myChart"})})},O=function(){var e=Object(c.useContext)(d),t=e.socket,n=e.bands,r=e.setBands;return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("table",{className:"table table-stripped",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{}),Object(i.jsx)("th",{children:"Name"}),Object(i.jsx)("th",{children:"Votes"}),Object(i.jsx)("th",{children:"Delete"})]})}),Object(i.jsx)("tbody",{children:n.map((function(e){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:Object(i.jsx)("button",{className:"btn btn-primary",onClick:function(){return n=e.id,console.log("votar - app"),void t.emit("votar-band",n);var n},children:"+1"})}),Object(i.jsx)("td",{children:Object(i.jsx)("input",{className:"form-control",value:e.name,onChange:function(t){return function(e,t){var n=e.target.value;r((function(e){return e.map((function(e){return e.id===t&&(e.name=n),e}))}))}(t,e.id)},onBlur:function(){return n=e.id,c=e.name,void t.emit("change-name",{id:n,name:c});var n,c}})}),Object(i.jsxs)("td",{children:[" ",Object(i.jsxs)("h3",{children:[" ",e.votes," "]})," "]}),Object(i.jsx)("td",{children:Object(i.jsx)("button",{className:"btn btn-danger",onClick:function(){return n=e.id,console.log("remove band"),void t.emit("remove-band",n);var n},children:" Delete "})})]},e.id)}))})]})})};var h=function(){var e=Object(c.useContext)(d).online;return Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"alert",children:[Object(i.jsxs)("p",{children:["Service status:",e?Object(i.jsx)("span",{className:"text-success",children:"Online"}):Object(i.jsx)("span",{className:"text-danger",children:"Offline"})]}),Object(i.jsx)("h1",{children:" Band Name "}),Object(i.jsx)("hr",{}),Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("div",{className:"col",children:Object(i.jsx)(u,{})})}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"col-8",children:Object(i.jsx)(O,{})}),Object(i.jsx)("div",{className:"col-4",children:Object(i.jsx)(j,{})})]})]})})},f=function(){return Object(i.jsx)(b,{children:Object(i.jsx)(h,{})})};a.a.render(Object(i.jsx)(f,{}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.3d2cf4c7.chunk.js.map