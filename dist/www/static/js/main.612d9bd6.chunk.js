(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[1],{15:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return l})),a.d(t,"a",(function(){return i}));var n=a(7),r=a.n(n),c="FETCH_CLIENTES_REQUEST",l="FETCH_CLIENTES_SUCCESS",i="FETCH_CLIENTES_ERROR";t.d=function(e){e({type:c}),r.a.get("http://localhost:4000/api/clientes/all").then((function(t){e({type:l,payload:t.data})})).catch((function(t){e({type:i,erorr:t.toString()})}))}},16:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return l})),a.d(t,"a",(function(){return i}));var n=a(7),r=a.n(n),c="FETCH_PRODUCTOS_REQUEST",l="FETCH_PRODUCTOS_SUCCESS",i="FETCH_PRODUCTOS_ERROR";t.d=function(e){e({type:c}),r.a.get("http://localhost:4000/api/productos/all").then((function(t){e({type:l,payload:t.data})})).catch((function(t){e({type:i,erorr:t.toString()})}))}},17:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return l})),a.d(t,"a",(function(){return i}));var n=a(7),r=a.n(n),c="FETCH_RUBROS_REQUEST",l="FETCH_RUBROS_SUCCESS",i="FETCH_RUBROS_ERROR";t.d=function(e){e({type:c}),r.a.get("http://localhost:4000/api/rubros/all").then((function(t){e({type:l,payload:t.data})})).catch((function(t){e({type:i,erorr:t.toString()})}))}},38:function(e,t,a){e.exports=a(65)},63:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),l=a.n(c),i=a(18),u=a(23),o=a(10),s=a(35),E=a(2),d=a(15),p={array:[],isFetching:!1};var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d.b:return Object(E.a)({},e,{isFetching:!0});case d.c:return Object(E.a)({},e,{isFetching:!1,array:t.payload});case d.a:return Object(E.a)({},e,{isFetching:!1});default:return e}},f=a(16),b={array:[],isFetching:!1};var y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.b:return Object(E.a)({},e,{isFetching:!0});case f.c:return Object(E.a)({},e,{isFetching:!1,array:t.payload});case f.a:return Object(E.a)({},e,{isFetching:!1});default:return e}},m=a(17),S={array:[],isFetching:!1};var O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.b:return Object(E.a)({},e,{isFetching:!0});case m.c:return Object(E.a)({},e,{isFetching:!1,array:t.payload});case m.a:return Object(E.a)({},e,{isFetching:!1});default:return e}},v=(a(7),{array:[],isFetching:!1});var g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_USER_REQUEST":return Object(E.a)({},e,{isFetching:!0});case"LOGIN_USER_SUCCESS":return Object(E.a)({},e,{isFetching:!1,array:t.payload});case"LOGIN_USER_ERROR":return Object(E.a)({},e,{isFetching:!1});default:return e}},_={array:[],isFetching:!1};var R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_USER_REQUEST":return Object(E.a)({},e,{isFetching:!0});case"GET_USER_SUCCESS":return Object(E.a)({},e,{isFetching:!1,array:t.payload});case"GET_USER_ERROR":return Object(E.a)({},e,{isFetching:!1});default:return e}},k=Object(o.c)({clientes:h,productos:y,rubros:O,signup:g,users:R}),F=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.d,C=Object(o.e)(k,F(Object(o.a)(s.a))),T=a(9),j=(a(63),Object(n.lazy)((function(){return a.e(8).then(a.bind(null,86))}))),U=Object(n.lazy)((function(){return a.e(9).then(a.bind(null,84))})),N=Object(n.lazy)((function(){return a.e(5).then(a.bind(null,85))})),w=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(4)]).then(a.bind(null,89))})),H=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(6)]).then(a.bind(null,87))})),I=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(7)]).then(a.bind(null,88))})),L=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(T.c,null,r.a.createElement(T.a,{exact:!0,path:"/"},r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",{className:"uk-position-center uk-overlay uk-overlay-default"},r.a.createElement("span",{"uk-spinner":"ratio: 4.5"}))},r.a.createElement(j,null))),r.a.createElement(T.a,{path:"/perfil"},r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",{className:"uk-position-center uk-overlay uk-overlay-default"},r.a.createElement("span",{"uk-spinner":"ratio: 4.5"}))},r.a.createElement(U,null))),r.a.createElement(T.a,{exact:!0,path:"/dashboard"},r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",{className:"uk-position-center uk-overlay uk-overlay-default"},r.a.createElement("span",{"uk-spinner":"ratio: 4.5"}))},r.a.createElement(N,null))),r.a.createElement(T.a,{exact:!0,path:"/dashboard-clientes"},r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",{className:"uk-position-center uk-overlay uk-overlay-default"},r.a.createElement("span",{"uk-spinner":"ratio: 4.5"}))},r.a.createElement(w,null))),r.a.createElement(T.a,{exact:!0,path:"/dashboard-productos"},r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",{className:"uk-position-center uk-overlay uk-overlay-default"},r.a.createElement("span",{"uk-spinner":"ratio: 4.5"}))},r.a.createElement(H,null))),r.a.createElement(T.a,{exact:!0,path:"/dashboard-rubros"},r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",{className:"uk-position-center uk-overlay uk-overlay-default"},r.a.createElement("span",{"uk-spinner":"ratio: 4.5"}))},r.a.createElement(I,null)))))};l.a.render(r.a.createElement(u.a,{store:C},r.a.createElement(i.a,null,r.a.createElement(L,null))),document.getElementById("root"))}},[[38,2,3]]]);
//# sourceMappingURL=main.612d9bd6.chunk.js.map