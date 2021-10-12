(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{62:function(t,e,n){},65:function(t,e,n){"use strict";n.r(e);var r,c,a,o,u,i=n(0),s=n.n(i),b=n(16),l=n.n(b),j=n(10),d=n(5),f=n(9),p=n(2),O=n(32),x=n.n(O),h=(Object(d.b)("contacts/add",(function(t){return{payload:{id:x()(),name:t.name,number:t.number}}})),Object(d.b)("contacts/delete"),Object(d.b)("contacts/filter")),m=Object(d.d)("",Object(p.a)({},h,(function(t,e){return e.payload}))),g=n(23),v=n(7),y=n.n(v),w=n(11),C=n(19),k=n.n(C),z=function(){var t=Object(w.a)(y.a.mark((function t(){var e,n;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.a.get("http://localhost:7777/contacts");case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),R=function(){var t=Object(w.a)(y.a.mark((function t(e){var n,r;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.a.post("http://localhost:7777/contacts",e);case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),L=function(){var t=Object(w.a)(y.a.mark((function t(e){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.a.delete("http://localhost:7777/contacts/".concat(e));case 2:return t.abrupt("return",e);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),A=Object(d.c)("contacts/fetchContacts",Object(w.a)(y.a.mark((function t(){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,z();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))),F=Object(d.c)("contacts/addContact",function(){var t=Object(w.a)(y.a.mark((function t(e){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,R(e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),S=Object(d.c)("contacts/deleteContact",function(){var t=Object(w.a)(y.a.mark((function t(e){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L(e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),T=Object(d.d)([],(r={},Object(p.a)(r,A.fulfilled,(function(t,e){return Object(g.a)(e.payload)})),Object(p.a)(r,F.fulfilled,(function(t,e){return[].concat(Object(g.a)(t),[e.payload])})),Object(p.a)(r,S.fulfilled,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),r)),J=Object(d.d)(!1,(c={},Object(p.a)(c,A.pending,(function(){return!0})),Object(p.a)(c,A.fulfilled,(function(){return!1})),Object(p.a)(c,A.rejected,(function(){return!1})),Object(p.a)(c,F.pending,(function(){return!0})),Object(p.a)(c,F.fulfilled,(function(){return!1})),Object(p.a)(c,S.pending,(function(){return!0})),Object(p.a)(c,S.fulfilled,(function(){return!1})),c)),Z=Object(d.d)(null,(a={},Object(p.a)(a,A.rejected,(function(t,e){return e.payload})),Object(p.a)(a,A.pending,(function(){return null})),Object(p.a)(a,F.rejected,(function(t,e){return e.payload})),Object(p.a)(a,F.pending,(function(){return null})),Object(p.a)(a,S.rejected,(function(t,e){return e.payload})),Object(p.a)(a,S.pending,(function(){return null})),a)),q=Object(f.b)({entities:T,isLoading:J,error:Z}),B=Object(f.b)({contactsReducer:q,filterReducer:m}),E=Object(d.a)({reducer:{contacts:B}}),M=(n(61),n(62),n(22)),N=n(3),P=n(4),D=P.a.form(o||(o=Object(N.a)(["\n  display: flex;\n"]))),I=n(18),$=P.a.button(u||(u=Object(N.a)(["\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n"]))),G=n(1);var H,K=function(t){var e=t.text,n=t.onClick,r=t.title;return Object(G.jsx)($,{title:r,onClick:n,children:e})},Q=P.a.h2(H||(H=Object(N.a)(["\n  font-size: ","px;\n  color: ",";\n  margin-right: ","px;\n  margin-left: ","px;\n  margin-top: ","px;\n"])),(function(t){return t.size}),(function(t){return t.color}),(function(t){return t.marginR}),(function(t){return t.marginL}),(function(t){return t.marginT}));var U,V=function(t){var e=t.marginT,n=t.marginR,r=t.marginL,c=t.text,a=t.size,o=t.color;return Object(G.jsx)(Q,{marginT:e,marginR:n,marginL:r,color:o,size:a,children:c})},W=P.a.input(U||(U=Object(N.a)(["\n  width: 300px;\n  border: none;\n  border-bottom: 1px solid gray;\n  background-color: transparent;\n\n  &:hover {\n    border-bottom: 1px solid #000d59;\n  }\n"])));var X=function(t){var e=t.value,n=t.type,r=t.name,c=t.onChange,a=t.placeholder;return Object(G.jsx)(W,{placeholder:a,value:e,type:n,name:r,onChange:c})};var Y,_,tt=function(){var t=Object(i.useState)(""),e=Object(M.a)(t,2),n=e[0],r=e[1],c=Object(i.useState)(""),a=Object(M.a)(c,2),o=a[0],u=a[1],s=Object(j.c)(),b=Object(j.d)((function(t){return t.contacts.contactsReducer.entities})),l=function(t){var e=t.target,n=e.name,c=e.value;switch(n){case"name":r(c);break;case"number":u(c);break;default:return}};return Object(G.jsxs)(D,{onSubmit:function(t){if(t.preventDefault(),b.find((function(t){return t.name.toLowerCase()===n.toLowerCase()})))return alert("".concat(n," is already in contacts")),r(""),void u("");(""!==n||""!==o)&&""!==n&&""!==o?(s(F({name:n,number:o})),r(""),u("")):alert("Please fill empty fields")},children:[Object(G.jsx)(V,{marginR:15,size:18,text:"Name"}),Object(G.jsx)(X,{placeholder:"type name...",value:n,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:l}),Object(G.jsx)(V,{marginR:15,marginL:30,size:18,text:"Number"}),Object(G.jsx)(X,{placeholder:"type number...",value:o,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:l}),Object(G.jsx)(K,{title:"Add to contacts",text:Object(G.jsx)(I.b,{size:50,color:"#187bcd"}),size:20,type:"submit"})]})},et=P.a.p(Y||(Y=Object(N.a)(["\n  font-size: 18px;\n"]))),nt=P.a.p(_||(_=Object(N.a)([""])));var rt,ct,at=function(t){var e=t.contact;return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(et,{children:e.name}),Object(G.jsx)(nt,{children:e.number})]})},ot=P.a.ul(rt||(rt=Object(N.a)(["\n  list-style: none;\n  display: flex;\n"]))),ut=P.a.li(ct||(ct=Object(N.a)(["\n  padding: 5px;\n  margin-right: 40px;\n"])));var it=function(){var t=Object(j.c)(),e=Object(j.d)((function(t){return t.contacts.contactsReducer.entities}));return Object(i.useEffect)((function(){t(A())}),[t]),Object(G.jsx)(G.Fragment,{children:Object(G.jsx)(ot,{children:e.map((function(e){return Object(G.jsxs)(ut,{children:[Object(G.jsx)(at,{contact:e}),Object(G.jsx)(K,{title:"Remove from contacts",text:Object(G.jsx)(I.a,{color:"#ff4f4f",size:30}),type:"button",onClick:function(){return n=e.id,void t(S(n));var n}})]},e.id)}))})})};var st,bt=Object(j.b)((function(t){return{value:t.filter}}),(function(t){return{onChange:function(e){return t(h(e.target.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(V,{size:18,text:"Find Contacts by name"}),Object(G.jsx)(X,{placeholder:"type to find contacts...",type:"text",name:"filter",value:e,onChange:n})]})})),lt=P.a.div(st||(st=Object(N.a)(["\n  width: 100%;\n  height: 100vh;\n  padding: 15px;\n  margin-left: auto;\n  margin-right: auto;\n"])));var jt=function(t){var e=t.children;return Object(G.jsx)(lt,{children:e})};var dt=function(){return Object(G.jsxs)(jt,{children:[Object(G.jsx)(V,{color:"#424242",size:30,text:"Phonebook"}),Object(G.jsx)("div",{style:{border:"1px solid gray",width:"fit-content",padding:"20px"},children:Object(G.jsx)(tt,{})}),Object(G.jsx)(bt,{}),Object(G.jsx)(V,{marginT:40,size:20,text:"Contacts"}),Object(G.jsx)(it,{})]})};l.a.render(Object(G.jsx)(s.a.StrictMode,{children:Object(G.jsx)(j.a,{store:E,children:Object(G.jsx)(dt,{})})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.9692fc3b.chunk.js.map