(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{14:function(e,t,n){e.exports=n(38)},19:function(e,t,n){},20:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(11),c=n.n(o),l=(n(19),n(13)),i=(n(20),n(12)),u=n.n(i);var s=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],o=t[1];return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Upload file in nodejs"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=new FormData;t.append("file",n.file),u.a.post("http://localhost:4000/api/files/upload",t).then((function(e){return console.log(e.data)})).catch((function(e){return console.error(e)}))},className:"w-50"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"file",name:"file",onChange:function(e){return o({file:e.target.files[0]})}})),r.a.createElement("button",{type:"submit",className:"btn btn-danger"},"Submit")))};c.a.render(r.a.createElement(s,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.34ea863b.chunk.js.map