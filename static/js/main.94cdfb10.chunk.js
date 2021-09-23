(this["webpackJsonpmax-test-task"]=this["webpackJsonpmax-test-task"]||[]).push([[0],{80:function(e,t,n){},86:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),i=n(24),a=n.n(i),d=(n(80),n(9)),o=n(17),s=n(8),j=n(118),l=n(133),u=n(46),b=n(119),m=n(120),x=n(126),O=n(130),p=n(128),h=n(31),g=n.n(h),f=n(112),v=n(135),S=n(114),w=n(127),I=n(136),y=n(122),k=n(115),A=n(116),P=n(25),C=Object(P.b)({name:"products",initialState:[],reducers:{create:function(e,t){e.push(t.payload)},update:function(e,t){var n=e.findIndex((function(e){return e.id===t.payload.id}));e.splice(n,1,t.payload)},remove:function(e,t){var n=e.findIndex((function(e){return e.id===t.payload}));e.splice(n,1)}}}),D=C.actions,N=D.create,z=D.update,E=D.remove,J=C.reducer,L=(n(86),n(3)),R=function(e){var t=e.id,n=e.name,c=e.description,r=e.image,i=Object(d.b)(),a=Object(d.c)((function(e){return e.comments.filter((function(e){return e.productId===t}))}));return Object(L.jsxs)(f.a,{direction:"column",background:"light-1",className:"product",children:[Object(L.jsx)(v.a,{pad:"medium",background:"light-2",children:Object(L.jsx)(o.b,{to:"/products/".concat(t),children:Object(L.jsx)(x.a,{level:"3",margin:"none",children:n})})}),Object(L.jsxs)(S.a,{direction:"row",fill:!0,pad:"medium",gap:"medium",className:"product-description",children:[r?Object(L.jsx)(u.a,{width:"xsmall",children:Object(L.jsx)(w.a,{fit:"cover",src:r,fill:!0})}):null,c]}),Object(L.jsxs)(I.a,{pad:{horizontal:"medium"},background:"light-2",children:[Object(L.jsx)(p.a,{size:"small",children:g()("Comment",a.length,!0)}),Object(L.jsxs)(u.a,{direction:"row",children:[Object(L.jsx)(o.b,{to:"/products/".concat(t,"/edit"),children:Object(L.jsx)(y.a,{icon:Object(L.jsx)(k.a,{color:"plain"}),hoverIndicator:!0,title:"Edit Product"})}),Object(L.jsx)(y.a,{icon:Object(L.jsx)(A.a,{color:"red"}),hoverIndicator:!0,title:"Remove Product",onClick:function(){return i(E(t))}})]})]})]})};R.defaultProps={description:"",image:""};var F=R;var B=function(){var e=Object(d.c)((function(e){return e.products}));return Object(L.jsxs)("div",{children:[Object(L.jsx)(x.a,{children:"Product List"}),Object(L.jsx)(O.a,{gap:"medium",columns:{count:"fit",size:"medium"},children:e.length?e.map((function(e){return Object(L.jsx)(F,{id:e.id,name:e.name,description:e.description,image:e.image},e.id)})):Object(L.jsx)(p.a,{margin:"none",children:"There are currently no products"})})]})},M=n(43),T=n.n(M),U=n(70),q=n(29),G=n(125),H=n(138),K=n(121),Q=n(124),V=n(131),W=n(132);function X(e){return new Promise((function(t,n){var c=new FileReader;c.readAsDataURL(e),c.onload=function(){return t(c.result)},c.onerror=function(e){return n(e)}}))}var Y=function(e){var t=e.product,n=Object(c.useState)(t),r=Object(q.a)(n,2),i=r[0],a=r[1],o=Object(d.b)(),j=Object(s.f)(),l=function(){var e=Object(U.a)(T.a.mark((function e(n){var c,r,i,a,d,s,l,u;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=n.id,r=n.name,i=n.description,a=n.files,d=void 0===a?[]:a,s=Object(q.a)(d,1),!(l=s[0])){e.next=8;break}return e.next=5,X(l);case 5:e.t0=e.sent,e.next=9;break;case 8:e.t0=t.image;case 9:if(u=e.t0,!c){e.next=14;break}return o(z({id:c,name:r,description:i,image:u,updatedAt:(new Date).toISOString()})),j.push("/products/".concat(c)),e.abrupt("return");case 14:o(N({id:Object(G.a)(),name:r,description:i,image:u,createdAt:(new Date).toISOString(),updatedAt:(new Date).toISOString()})),j.push("/");case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(L.jsxs)(H.a,{value:i,onChange:function(e){return a(e)},onSubmit:function(e){var t=e.value;return l(t)},children:[Object(L.jsxs)(u.a,{direction:"column",gap:"small",width:"large",children:[Object(L.jsx)(K.a,{name:"name",label:"Name",validate:{regexp:/\S+/,message:"Name can't be empty"},children:Object(L.jsx)(Q.a,{name:"name"})}),Object(L.jsx)(K.a,{name:"description",label:"Description",validate:{regexp:/\S+/,message:"Description can't be empty"},children:Object(L.jsx)(V.a,{name:"description"})}),Object(L.jsx)(K.a,{name:"image",label:"Image",children:Object(L.jsx)(W.a,{name:"files",multiple:!1,accept:"image/*"})})]}),Object(L.jsx)(u.a,{direction:"row",gap:"medium",children:Object(L.jsx)(y.a,{type:"submit",size:"large",primary:!0,label:"Save"})})]})};Y.defaultProps={product:{name:"",description:""}};var Z=Y;var $=function(){var e=Object(s.g)().id,t=Object(d.c)((function(t){return t.products.find((function(t){return t.id===e}))}));if(e&&!t)return Object(L.jsxs)(p.a,{alignSelf:"center",fill:!0,margin:"none",color:"status-error",children:["Product with ID\xa0",Object(L.jsx)("b",{children:e}),"\xa0doesn't exist."]});var n=t?Object(L.jsxs)(x.a,{children:["Edit\xa0",Object(L.jsx)("b",{children:t.name})]}):Object(L.jsx)(x.a,{children:"Create Product"});return Object(L.jsxs)(L.Fragment,{children:[n,Object(L.jsx)(Z,{product:t})]})},_=Object(P.b)({name:"comments",initialState:[],reducers:{create:function(e,t){e.push(t.payload)},remove:function(e,t){var n=e.findIndex((function(e){return e.id===t.payload}));e.splice(n,1)}}}),ee=_.actions,te=ee.create,ne=ee.remove,ce=_.reducer,re=function(e){var t=e.productId,n=Object(c.useState)(),r=Object(q.a)(n,2),i=r[0],a=r[1],o=Object(d.b)();return Object(L.jsxs)(H.a,{value:i,onChange:function(e){return a(e)},onSubmit:function(e){return function(e){var n=e.text;o(te({id:Object(G.a)(),productId:t,text:n,createdAt:(new Date).toISOString()})),a({text:""})}(e.value)},children:[Object(L.jsx)(u.a,{direction:"column",gap:"small",children:Object(L.jsx)(K.a,{name:"text",validate:{regexp:/\S+/,message:"Comment text can't be empty"},children:Object(L.jsx)(V.a,{name:"text"})})}),Object(L.jsx)(u.a,{direction:"row",gap:"medium",children:Object(L.jsx)(y.a,{type:"submit",primary:!0,label:"Add Comment"})})]})},ie=function(e){var t=e.id,n=e.text,c=e.createdAt,r=Object(d.b)();return Object(L.jsxs)(f.a,{direction:"column",background:"light-1",children:[Object(L.jsx)(S.a,{fill:!0,pad:"small",children:Object(L.jsx)(p.a,{margin:"none",children:n})}),Object(L.jsxs)(I.a,{pad:{horizontal:"small"},background:"light-2",children:[Object(L.jsx)(p.a,{size:"small",margin:"none",children:new Date(c).toLocaleString()}),Object(L.jsx)(y.a,{icon:Object(L.jsx)(A.a,{color:"red",size:"small"}),hoverIndicator:!0,title:"Remove Comment",onClick:function(){return r(ne(t))}})]})]})};n(98);var ae=function(){var e=Object(s.g)().id,t=Object(d.c)((function(t){return t.products.find((function(t){return t.id===e}))})),n=Object(d.c)((function(t){return t.comments.filter((function(t){return t.productId===e}))})).reverse();if(!t)return Object(L.jsxs)(p.a,{alignSelf:"center",fill:!0,margin:"none",color:"status-error",children:["Product with ID\xa0",Object(L.jsx)("b",{children:e}),"\xa0doesn't exist."]});var c=n.length?g()("Comment",n.length,!0):"No comments yet";return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsxs)(u.a,{direction:"row",align:"center",children:[Object(L.jsx)(x.a,{margin:"bottom",children:t.name}),Object(L.jsx)(o.b,{to:"/products/".concat(e,"/edit"),children:Object(L.jsx)(y.a,{type:"submit",label:"Edit",margin:{left:"large"}})})]}),Object(L.jsxs)(u.a,{direction:"row",margin:{bottom:"large"},gap:"medium",children:[t.image?Object(L.jsx)(u.a,{width:"medium",children:Object(L.jsx)(w.a,{fit:"contain",src:t.image,fill:!0})}):null,Object(L.jsx)(p.a,{width:"70%",margin:"none",className:"product-description",children:t.description})]}),Object(L.jsxs)(u.a,{border:{color:"brand",size:"medium"},pad:"medium",gap:"medium",width:"large",children:[Object(L.jsx)(x.a,{level:"4",margin:"none",children:c}),Object(L.jsx)(re,{productId:e}),n.map((function(e){return Object(L.jsx)(ie,{id:e.id,text:e.text,createdAt:e.createdAt},e.id)}))]})]})};var de=function(){return Object(L.jsx)("div",{className:"App",children:Object(L.jsxs)(o.a,{children:[Object(L.jsxs)(j.a,{direction:"row",background:"brand",pad:"medium",children:[Object(L.jsx)(o.b,{to:"/",children:Object(L.jsx)(l.a,{icon:Object(L.jsx)(b.a,{}),label:"Product List"})}),Object(L.jsx)(o.b,{to:"/products/new",children:Object(L.jsx)(l.a,{icon:Object(L.jsx)(m.a,{}),label:"Add Product"})})]}),Object(L.jsx)(u.a,{direction:"column",pad:"medium",children:Object(L.jsxs)(s.c,{children:[Object(L.jsx)(s.a,{path:"/",exact:!0,children:Object(L.jsx)(B,{})}),Object(L.jsx)(s.a,{path:"/products/new",exact:!0,children:Object(L.jsx)($,{})}),Object(L.jsx)(s.a,{path:"/products/:id/edit",exact:!0,children:Object(L.jsx)($,{})}),Object(L.jsx)(s.a,{path:"/products/:id",exact:!0,children:Object(L.jsx)(ae,{})})]})})]})})},oe="state",se=localStorage.getItem(oe)?JSON.parse(localStorage.getItem(oe)):{},je=Object(P.a)({reducer:{products:J,comments:ce},preloadedState:se});je.subscribe((function(){localStorage.setItem(oe,JSON.stringify(je.getState()))}));var le=je;a.a.render(Object(L.jsx)(r.a.StrictMode,{children:Object(L.jsx)(d.a,{store:le,children:Object(L.jsx)(de,{})})}),document.getElementById("root"))}},[[99,1,2]]]);
//# sourceMappingURL=main.94cdfb10.chunk.js.map