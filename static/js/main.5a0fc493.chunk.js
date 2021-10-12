(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{36:function(t,e,n){},39:function(t,e,n){"use strict";n.r(e);var r,c,a,o=n(0),i=n.n(o),s=n(12),u=n.n(s),b=n(8),l=n(19),j=n(15),d=n(6),f=n(7),m=n(20),O=n.n(m),x=n(21),p=n.n(x),h=n(4),g=n(11),v=n(22),y=n.n(v),C=Object(d.b)("contacts/add",(function(t){return{payload:{id:y()(),name:t.name,number:t.number}}})),z=Object(d.b)("contacts/delete"),k=Object(d.b)("contacts/filter"),w=Object(d.c)("",Object(g.a)({},k,(function(t,e){return e.payload}))),L=Object(d.c)([],(r={},Object(g.a)(r,C,(function(t,e){return[].concat(Object(j.a)(t),[e.payload])})),Object(g.a)(r,z,(function(t,e){return t.filter((function(t){return e.payload!==t.id}))})),r)),A=Object(h.b)({items:L,filter:w}),R=[].concat(Object(j.a)(Object(d.d)({serializableCheck:{ignoredActions:[f.a,f.f,f.b,f.c,f.d,f.e]}})),[p.a]),S={key:"contacts",storage:O.a,blacklist:["filter"]},T=Object(d.a)({reducer:{contacts:Object(f.g)(S,A)},middleware:R,devTools:!1}),F={store:T,persistor:Object(f.h)(T)},D=(n(35),n(36),n(18)),J=n(2),Z=n(3),q=Z.a.form(c||(c=Object(J.a)(["\n  display: flex;\n"]))),B=n(14),M=Z.a.button(a||(a=Object(J.a)(["\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n"]))),N=n(1);var P,E=function(t){var e=t.text,n=t.onClick,r=t.title;return Object(N.jsx)(M,{title:r,onClick:n,children:e})},I=Z.a.h2(P||(P=Object(J.a)(["\n  font-size: ","px;\n  color: ",";\n  margin-right: ","px;\n  margin-left: ","px;\n  margin-top: ","px;\n"])),(function(t){return t.size}),(function(t){return t.color}),(function(t){return t.marginR}),(function(t){return t.marginL}),(function(t){return t.marginT}));var $,G=function(t){var e=t.marginT,n=t.marginR,r=t.marginL,c=t.text,a=t.size,o=t.color;return Object(N.jsx)(I,{marginT:e,marginR:n,marginL:r,color:o,size:a,children:c})},H=Z.a.input($||($=Object(J.a)(["\n  width: 300px;\n  border: none;\n  border-bottom: 1px solid gray;\n  background-color: transparent;\n\n  &:hover {\n    border-bottom: 1px solid #000d59;\n  }\n"])));var K=function(t){var e=t.value,n=t.type,r=t.name,c=t.onChange,a=t.placeholder;return Object(N.jsx)(H,{placeholder:a,value:e,type:n,name:r,onChange:c})};var Q,U,V=Object(b.b)((function(t){return{contacts:t.contacts.items}}),(function(t){return{onSubmit:function(e){return t(C(e))}}}))((function(t){var e=t.contacts,n=t.onSubmit,r=Object(o.useState)(""),c=Object(D.a)(r,2),a=c[0],i=c[1],s=Object(o.useState)(""),u=Object(D.a)(s,2),b=u[0],l=u[1],j=function(t){var e=t.target,n=e.name,r=e.value;switch(n){case"name":i(r);break;case"number":l(r);break;default:return}};return Object(N.jsxs)(q,{onSubmit:function(t){if(t.preventDefault(),e.find((function(t){return t.name.toLowerCase()===a.toLowerCase()})))return alert("".concat(a," is already in contacts")),i(""),void l("");(""!==a||""!==b)&&""!==a&&""!==b?(n({name:a,number:b}),i(""),l("")):alert("Please fill empty fields")},children:[Object(N.jsx)(G,{marginR:15,size:18,text:"Name"}),Object(N.jsx)(K,{placeholder:"type name...",value:a,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:j}),Object(N.jsx)(G,{marginR:15,marginL:30,size:18,text:"Number"}),Object(N.jsx)(K,{placeholder:"type number...",value:b,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:j}),Object(N.jsx)(E,{title:"Add to contacts",text:Object(N.jsx)(B.b,{size:50,color:"#187bcd"}),size:20,type:"submit"})]})})),W=Z.a.p(Q||(Q=Object(J.a)(["\n  font-size: 18px;\n"]))),X=Z.a.p(U||(U=Object(J.a)([""])));var Y,_,tt=function(t){var e=t.contact;return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(W,{children:e.name}),Object(N.jsx)(X,{children:e.number})]})},et=Z.a.ul(Y||(Y=Object(J.a)(["\n  list-style: none;\n  display: flex;\n"]))),nt=Z.a.li(_||(_=Object(J.a)(["\n  padding: 5px;\n  margin-right: 40px;\n"])));var rt=function(t){return t.contacts.items.filter((function(e){return e.name.toLowerCase().includes(t.contacts.filter.toLowerCase())}))},ct=Object(b.b)((function(t){return{contacts:rt(t)}}),(function(t){return{onDeleteContact:function(e){return t(z(e))}}}))((function(t){var e=t.contacts,n=t.onDeleteContact;return Object(N.jsx)(N.Fragment,{children:Object(N.jsx)(et,{children:e.map((function(t){return Object(N.jsxs)(nt,{children:[Object(N.jsx)(tt,{contact:t}),Object(N.jsx)(E,{title:"Remove from contacts",text:Object(N.jsx)(B.a,{color:"#ff4f4f",size:30}),type:"button",onClick:function(){return n(t.id)}})]},t.id)}))})})}));var at,ot=Object(b.b)((function(t){return{value:t.filter}}),(function(t){return{onChange:function(e){return t(k(e.target.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(G,{size:18,text:"Find Contacts by name"}),Object(N.jsx)(K,{placeholder:"type to find contacts...",type:"text",name:"filter",value:e,onChange:n})]})})),it=Z.a.div(at||(at=Object(J.a)(["\n  width: 100%;\n  height: 100vh;\n  padding: 15px;\n  margin-left: auto;\n  margin-right: auto;\n"])));var st=function(t){var e=t.children;return Object(N.jsx)(it,{children:e})};var ut=function(){return Object(N.jsxs)(st,{children:[Object(N.jsx)(G,{color:"#424242",size:30,text:"Phonebook"}),Object(N.jsx)("div",{style:{border:"1px solid gray",width:"fit-content",padding:"20px"},children:Object(N.jsx)(V,{})}),Object(N.jsx)(ot,{}),Object(N.jsx)(G,{marginT:40,size:20,text:"Contacts"}),Object(N.jsx)(ct,{})]})};u.a.render(Object(N.jsx)(i.a.StrictMode,{children:Object(N.jsx)(b.a,{store:F.store,children:Object(N.jsx)(l.a,{loading:null,persistor:F.persistor,children:Object(N.jsx)(ut,{})})})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.5a0fc493.chunk.js.map