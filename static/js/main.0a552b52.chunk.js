(this["webpackJsonptodo-hooks"]=this["webpackJsonptodo-hooks"]||[]).push([[0],{66:function(e,t,a){e.exports=a(76)},76:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(9),i=a.n(r),l=a(125),c=a(126),d=a(130),s=a(56),u=Object(d.a)(Object(s.a)({palette:{background:{default:"#F0F0F0"}},typography:{fontFamily:"Avenir",h5:{fontWeight:600}},overrides:{MuiButton:{contained:{boxShadow:"none","&:hover":{boxShadow:"none"}},label:{fontWeight:600,textTransform:"none"}},MuiCard:{root:{boxShadow:"0 0 10px gray"}}}})),m=a(42),p=Object(n.createContext)(null),b=function(e){var t=e.children,a=Object(n.useState)(!1),r=Object(m.a)(a,2),i=r[0],l=r[1],c=Object(n.useState)([{id:(new Date).getTime(),title:"Create your first todo",description:"Create your first todo by clicking on the button located on the top-right.",done:!1}]),d=Object(m.a)(c,2),s={openModal:i,setOpenModal:l,todos:d[0],setTodos:d[1]};return o.a.createElement(p.Provider,{value:s},t)},g=p,f=a(28),h=a(108),E=a(131),v=a(15),y=a(121),O=a(122),j=a(123),k=a(58),x=a(113),C=a(124),w=a(39),T=a(110),S=a(111),R=a(112),M=Object(h.a)((function(){return Object(E.a)({root:{opacity:function(e){return e.done?.35:1},width:345,maxWidth:"100%"}})}));function D(e){var t=e.id,a=e.title,r=e.body,i=e.done,l=M({done:i}),c=Object(n.useContext)(g),d=c.todos,s=c.setTodos;return o.a.createElement(T.a,{className:l.root},o.a.createElement(S.a,null,o.a.createElement(k.a,{gutterBottom:!0,variant:"h5",component:"h2"},a),o.a.createElement(k.a,{variant:"body2",color:"textSecondary",component:"p"},r)),o.a.createElement(R.a,null,o.a.createElement(x.a,{onClick:function(){s(d.map((function(e){return e.id===t?Object(w.a)(Object(w.a)({},e),{},{done:!e.done}):Object(w.a)({},e)})))},size:"small",color:"primary"},i?"Done":"Mark as done"),o.a.createElement(x.a,{onClick:function(){s(d.filter((function(e){return e.id!==t})))},size:"small",color:"secondary"},"Delete")))}var W=a(114),B=a(116),F=a(55),N=a.n(F),L=a(115),z=Object(h.a)((function(e){return{root:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)}}}));function A(e){var t=e.children,a=e.window,n=z(),r=Object(W.a)({target:a?a():void 0,disableHysteresis:!0,threshold:100});return o.a.createElement(L.a,{in:r},o.a.createElement("div",{onClick:function(e){var t=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");t&&t.scrollIntoView({behavior:"smooth",block:"center"})},role:"presentation",className:n.root},t))}var G=function(e){return o.a.createElement(A,e,o.a.createElement(B.a,{color:"secondary",size:"small","aria-label":"scroll to top"},o.a.createElement(N.a,null)))},I=a(129),J=a(117),q=a(118),H=a(119),P=a(127),V=a(120),K=function(){var e=Object(n.useContext)(g),t=e.openModal,a=e.setOpenModal,r=e.todos,i=e.setTodos,l=Object(n.useRef)(null),c=Object(n.useRef)(null),d=function(){return a(!1)},s=function(){console.log(l);var e={id:(new Date).getTime(),title:l.current.value?l.current.value:"The nameless todo",description:c.current.value?c.current.value:"This todo item does not have a body.",done:!1};r.push(e),i(r),d()};return o.a.createElement("div",null,o.a.createElement(I.a,{open:t,onClose:d,"aria-labelledby":"form-dialog-title",fullWidth:!0,maxWidth:"sm"},o.a.createElement(J.a,{id:"form-dialog-title"},"Create a new Todo item"),o.a.createElement(q.a,null,o.a.createElement(H.a,null,"Title"),o.a.createElement(P.a,{autoFocus:!0,inputRef:l,margin:"dense",id:"title",placeholder:"Title of your todo item",onSubmit:s,fullWidth:!0})),o.a.createElement(q.a,null,o.a.createElement(H.a,null,"Description"),o.a.createElement(P.a,{inputRef:c,margin:"dense",id:"body",placeholder:"Describe your todo item",onSubmit:s,fullWidth:!0})),o.a.createElement(V.a,null,o.a.createElement(x.a,{onClick:d,color:"secondary"},"Cancel"),o.a.createElement(x.a,{onClick:s,color:"primary"},"Create"))))},Q=Object(h.a)((function(e){var t;return Object(E.a)({root:(t={flexGrow:1,marginLeft:e.spacing(4),marginRight:e.spacing(4)},Object(f.a)(t,e.breakpoints.up("sm"),{marginLeft:e.spacing(6),marginRight:e.spacing(6)}),Object(f.a)(t,e.breakpoints.up("md"),{marginLeft:e.spacing(8),marginRight:e.spacing(8)}),t),appBar:{boxShadow:"none",paddingLeft:e.spacing(0),paddingRight:e.spacing(0)},toolbar:{paddingLeft:e.spacing(0),paddingRight:e.spacing(0)},title:{flexGrow:1,marginTop:e.spacing(4),marginBottom:e.spacing(4)},body:{}})})),U=function(){var e=Q(),t=Object(n.useContext)(g),a=t.setOpenModal,r=t.todos,i=Object(v.a)(),l=Object(y.a)(i.breakpoints.only("xs"));return Object(n.useEffect)((function(){}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:e.root},o.a.createElement(O.a,{className:e.appBar,position:"static",color:"transparent"},o.a.createElement(j.a,{id:"back-to-top-anchor",className:e.toolbar},o.a.createElement(k.a,{variant:"h5",className:e.title},"Todo App"),o.a.createElement(x.a,{variant:"contained",onClick:function(){return a(!0)},color:"primary",size:"large"},"Create Todo"))),o.a.createElement(G,null),o.a.createElement(C.a,{container:!0,spacing:4},r.map((function(e){return o.a.createElement(C.a,{item:!0,direction:l?"row":"column"},o.a.createElement(D,{key:e.id,id:e.id,title:e.title,body:e.description,done:e.done}))})))),o.a.createElement(K,null))};document.title="Todo App",i.a.render(o.a.createElement(l.a,{theme:u},o.a.createElement(b,null,o.a.createElement(c.a,null),o.a.createElement(U,null))),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.0a552b52.chunk.js.map