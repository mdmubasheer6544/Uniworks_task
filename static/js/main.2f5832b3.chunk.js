(this["webpackJsonpuniworks-task"]=this["webpackJsonpuniworks-task"]||[]).push([[0],{19:function(e,t,a){},20:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(4),i=a.n(c),r=(a(19),a(20),a(2)),l=a(3),o=(a(26),a(0)),d=function(){var e=Object(l.c)((function(e){return e.comp.BOQ_total})),t=Object(l.c)((function(e){return e.comp.Project_total}));return Object(o.jsxs)("nav",{className:"navbar navbar-dark bg-primary text-white justify-content-between px-3",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"#",children:"<   Blank"}),Object(o.jsxs)("ul",{className:"navbar-nav flex-row",children:[Object(o.jsxs)("li",{className:"item",children:["BOQ Total: ",e,"/-"]}),Object(o.jsxs)("li",{className:"item",children:["Project Total: ",t,"/-"]}),Object(o.jsxs)("li",{children:["BOQ ",Object(o.jsx)("i",{className:"fas fa-download"})]})]})]})},j=(a(28),a(8)),b=a(7),p=Object(b.b)({name:"comp",initialState:{BOQ_total:0,Project_total:0,Work_total:0,Material_total:0,unit_title:""},reducers:{calculateBOQ:function(e,t){e.BOQ_total=t.payload},calculateWorkTotal:function(e,t){e.Work_total=t.payload.qty*t.payload.rate},calculateMaterialTotal:function(e,t){e.Material_total=t.payload.qty*t.payload.rate},passTitle:function(e,t){e.unit_title=t.payload},calculateProjectTotal:function(e,t){e.Project_total=e.Work_total+e.Material_total}}}),u=p.actions,m=p,x=function(e){var t=Object(l.b)(),a=Object(o.jsxs)("div",{className:"unit mb2",children:[Object(o.jsxs)("div",{className:"input-group",children:[Object(o.jsx)("input",{type:"text",className:"form-control input ","aria-label":"Username","aria-describedby":"basic-addon1",onChange:function(e){t(u.passTitle(e.target.value))}}),Object(o.jsx)("div",{className:"input-group-prepend ",children:Object(o.jsxs)("span",{className:"input-group-text icon-span input",id:"basic-addon1",children:[Object(o.jsx)("small",{className:"text-muted",children:"Unit Name"}),Object(o.jsx)("i",{className:"fas fa-trash icon"})]})})]}),Object(o.jsx)("a",{href:"/#",onClick:function(){e.onAddComponentIsVisible()},className:"links my-1 text-decoration-none",children:"Add component(s)"})]}),s=Object(n.useState)([a]),c=Object(r.a)(s,2),i=c[0],d=c[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h5",{className:"text-center my-2",children:" Add Units "}),Object(o.jsxs)("div",{className:"form-group scroll-container mt-4 pr-2",children:[Object(o.jsxs)("div",{className:"rooms",children:[Object(o.jsx)("label",{className:"mb-2",children:"Room 1"}),i.map((function(e,t){return Object(o.jsx)("div",{children:e},t)})),Object(o.jsx)("div",{className:"my-3",children:Object(o.jsx)("button",{type:"button",onClick:function(){d((function(e){return[].concat(Object(j.a)(e),[a])}))},className:"bg-transparent border-0 plus",children:"+"})})]}),Object(o.jsxs)("div",{className:"rooms",children:[Object(o.jsx)("label",{className:"mb-2",children:"Room 2"}),Object(o.jsxs)("div",{className:"unit",children:[Object(o.jsxs)("div",{className:"input-group",children:[Object(o.jsx)("input",{type:"text",className:"form-control input ","aria-label":"Username","aria-describedby":"basic-addon1"}),Object(o.jsx)("div",{className:"input-group-prepend ",children:Object(o.jsxs)("span",{className:"input-group-text icon-span  input",id:"basic-addon1",children:[Object(o.jsx)("small",{className:"text-muted",children:"Unit Name"}),Object(o.jsx)("i",{className:"fas fa-trash icon"})]})})]}),Object(o.jsx)("a",{href:"#",className:"links my-1 text-decoration-none",children:"Add component(s)"})]}),Object(o.jsx)("div",{className:"my-3",children:Object(o.jsx)("button",{type:"button",className:"bg-transparent border-0 plus",children:"+"})})]}),Object(o.jsxs)("div",{className:"rooms",children:[Object(o.jsx)("label",{className:"mb-2",children:"Room 3"}),Object(o.jsxs)("div",{className:"unit",children:[Object(o.jsxs)("div",{className:"input-group",children:[Object(o.jsx)("input",{type:"text",className:"form-control input ","aria-label":"Username","aria-describedby":"basic-addon1"}),Object(o.jsx)("div",{className:"input-group-prepend ",children:Object(o.jsxs)("span",{className:"input-group-text icon-span  input",id:"basic-addon1",children:[Object(o.jsx)("small",{className:"text-muted",children:"Unit Name"}),Object(o.jsx)("i",{className:"fas fa-trash icon"})]})})]}),Object(o.jsx)("a",{href:"/#",className:"links my-1 text-decoration-none",children:"Add component(s)"})]}),Object(o.jsx)("div",{className:"my-3",children:Object(o.jsx)("button",{type:"button",className:"bg-transparent border-0 plus",children:"+"})})]})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"form-group pt-5",children:Object(o.jsx)("button",{type:"button",className:"btn btn-primary  form-control",children:"Save"})}),Object(o.jsx)("div",{className:"form-group mt-3",children:Object(o.jsx)("button",{type:"button",className:"btn btn-outline-secondary text-primary form-control",children:"Start work"})})]})]})},O=(a(29),function(e){var t=Object(n.useState)(!1),a=Object(r.a)(t,2),s=a[0],c=a[1],i=Object(n.useState)(),d=Object(r.a)(i,2),j=d[0],b=d[1],p=Object(n.useState)(),m=Object(r.a)(p,2),x=m[0],O=m[1],h=Object(n.useState)(0),N=Object(r.a)(h,2),f=N[0],v=N[1],g=Object(l.c)((function(e){return e.comp.unit_title})),y=Object(l.b)();return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("h5",{className:"text-center my-2",children:[g+"-"," Add Components "]}),Object(o.jsxs)("div",{className:"form-group mt-4",children:[Object(o.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(o.jsx)("label",{className:"mb-2",children:"Upload Drawings/3D"}),Object(o.jsx)("i",{className:"fas fa-upload"})]}),s&&Object(o.jsxs)("div",{className:"singleComponent mt-3",children:[Object(o.jsxs)("div",{className:"borders",children:[Object(o.jsx)("p",{children:"Component 1"}),Object(o.jsx)("span",{children:"x"})]}),Object(o.jsx)("div",{className:"input-group mb-3 mx-1",children:Object(o.jsx)("textarea",{className:"form-control input",placeholder:"Add Description",rows:"3"})}),Object(o.jsxs)("div",{className:"form-group mt-3 d-flex justify-content-between",children:[Object(o.jsxs)("div",{className:"input-group mb-3 mx-1",children:[Object(o.jsx)("input",{type:"text",className:"form-control input ","aria-label":"Username","aria-describedby":"basic-addon1",value:j,onChange:function(e){b(e.target.value)}}),Object(o.jsx)("div",{className:"input-group-prepend ",children:Object(o.jsx)("span",{className:"input-group-text icon-span input text-muted pr-2",id:"basic-addon1",children:"Qty"})})]}),Object(o.jsxs)("div",{className:"input-group mb-3 mx-1",children:[Object(o.jsx)("input",{type:"text",className:"form-control input ","aria-label":"Username","aria-describedby":"basic-addon1",value:x,onChange:function(e){O(e.target.value);var t=parseInt(j)*parseInt(e.target.value);v(t),y(u.calculateBOQ(t))}}),Object(o.jsx)("div",{className:"input-group-prepend ",children:Object(o.jsx)("span",{className:"input-group-text icon-span input text-muted",id:"basic-addon1",children:"Rate"})})]}),Object(o.jsxs)("div",{className:"input-group mb-3 mx-1",children:[Object(o.jsx)("input",{type:"text",className:"form-control input ","aria-label":"Username","aria-describedby":"basic-addon1"}),Object(o.jsx)("div",{className:"input-group-prepend ",children:Object(o.jsx)("span",{className:"input-group-text icon-span input text-muted",id:"basic-addon1",children:"Units"})})]})]}),Object(o.jsxs)("div",{className:"form-group d-flex justify-content-between",children:[Object(o.jsxs)("span",{children:["\u20b9 ",f," "]}),Object(o.jsx)("a",{href:"/#",onClick:e.onComponentIsVisible,className:"links text-decoration-none",children:"Add Vendors/Material"})]})]}),Object(o.jsx)("div",{className:"my-3",children:Object(o.jsx)("button",{type:"button",onClick:function(){c(!0)},className:"bg-transparent border-0 plus",children:"+"})})]})]})}),h=function(e){var t=Object(n.useState)(!1),a=Object(r.a)(t,2),s=a[0],c=a[1],i=Object(n.useState)(""),d=Object(r.a)(i,2),j=d[0],b=d[1],p=Object(n.useState)(),m=Object(r.a)(p,2),x=m[0],O=m[1],h=Object(l.b)(),N=Object(l.c)((function(e){return e.comp.Work_total}));return Object(o.jsxs)(o.Fragment,{children:[s&&Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"bordersComponent",children:[Object(o.jsx)("p",{children:"Vendor 1"}),Object(o.jsx)("span",{children:"x"})]}),Object(o.jsxs)("div",{className:"work-container mt-4 d-flex justify-content-between",children:[Object(o.jsx)("b",{children:"Work Type"}),Object(o.jsx)("select",{className:"workList",children:Object(o.jsx)("option",{value:"only-work",children:"Only Work"})})]}),Object(o.jsxs)("div",{className:"work-container mt-3 d-flex justify-content-between",children:[Object(o.jsx)("b",{children:"Vendor Category"}),Object(o.jsx)("select",{className:"workList",children:Object(o.jsx)("option",{value:"carpenter",children:"Carpenter"})})]}),Object(o.jsxs)("div",{className:"form-group ",children:[Object(o.jsxs)("div",{className:"input-group mt-3 mb-3 mx-1",children:[Object(o.jsx)("input",{type:"text",className:"form-control input ","aria-label":"Username","aria-describedby":"basic-addon1"}),Object(o.jsx)("div",{className:"input-group-prepend ",children:Object(o.jsx)("span",{className:"input-group-text icon-span input text-muted",id:"basic-addon1",children:"Heading"})})]}),Object(o.jsx)("div",{className:"input-group mb-3 mx-1",children:Object(o.jsx)("textarea",{className:"form-control input",placeholder:"Add Description...",rows:"3"})}),Object(o.jsxs)("div",{className:"form-group mt-3 d-flex justify-content-between",children:[Object(o.jsxs)("div",{className:"input-group mb-3 mx-1",children:[Object(o.jsx)("input",{type:"text",className:"form-control input ","aria-label":"Username","aria-describedby":"basic-addon1",value:x,onChange:function(e){return O(e.target.value)}}),Object(o.jsx)("div",{className:"input-group-prepend ",children:Object(o.jsx)("span",{className:"input-group-text icon-span input text-muted pr-2",id:"basic-addon1",children:"Qty"})})]}),Object(o.jsxs)("div",{className:"input-group mb-3 mx-1",children:[Object(o.jsx)("input",{type:"text",className:"form-control input ","aria-label":"Username","aria-describedby":"basic-addon1",value:j,onChange:function(e){b(e.target.value),h(u.calculateWorkTotal({qty:parseInt(x),rate:""===e.target.value?0:parseInt(e.target.value)})),h(u.calculateProjectTotal())}}),Object(o.jsx)("div",{className:"input-group-prepend ",children:Object(o.jsx)("span",{className:"input-group-text icon-span input text-muted",id:"basic-addon1",children:"Rate"})})]}),Object(o.jsxs)("div",{className:"input-group mb-3 mx-1",children:[Object(o.jsx)("input",{type:"text",className:"form-control input ","aria-label":"Username","aria-describedby":"basic-addon1"}),Object(o.jsx)("div",{className:"input-group-prepend ",children:Object(o.jsx)("span",{className:"input-group-text icon-span input text-muted",id:"basic-addon1",children:"Units"})})]})]}),Object(o.jsxs)("div",{className:"form-group  d-flex justify-content-between",children:[Object(o.jsxs)("span",{children:["\u20b9 ",N," "]}),Object(o.jsx)("a",{href:"/#",onClick:e.onMilestoneIsVisible,className:"links text-decoration-none",children:"Add Milestones"})]})]})]}),Object(o.jsx)("div",{className:"my-3",children:Object(o.jsx)("button",{type:"button",onClick:function(){c(!0)},className:"bg-transparent border-0 plus",children:"+"})})]})},N=function(e){var t=Object(n.useState)(!1),a=Object(r.a)(t,2),s=a[0],c=a[1],i=Object(n.useState)(""),d=Object(r.a)(i,2),j=d[0],b=d[1],p=Object(n.useState)(),m=Object(r.a)(p,2),x=m[0],O=m[1],h=Object(l.b)(),N=Object(l.c)((function(e){return e.comp.Material_total}));return Object(o.jsxs)(o.Fragment,{children:[s&&Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"bordersComponent",children:[Object(o.jsx)("p",{children:"Material 1"}),Object(o.jsx)("span",{children:"x"})]}),Object(o.jsxs)("div",{className:"form-group mt-3 d-flex justify-content-between",children:[Object(o.jsx)("select",{className:"form-select input addinput","aria-label":"Carpenter",children:Object(o.jsx)("option",{selected:!0,children:"Carpenter"})}),Object(o.jsxs)("div",{className:"input-group  mx-1",children:[Object(o.jsx)("input",{type:"text",className:"form-control input ","aria-label":"Username","aria-describedby":"basic-addon1"}),Object(o.jsx)("div",{className:"input-group-prepend ",children:Object(o.jsx)("span",{className:"input-group-text icon-span input text-muted pr-2",id:"basic-addon1",children:"Item"})})]}),Object(o.jsxs)("div",{className:"input-group  mx-1",children:[Object(o.jsx)("input",{type:"text",className:"form-control input ","aria-label":"Username","aria-describedby":"basic-addon1"}),Object(o.jsx)("div",{className:"input-group-prepend ",children:Object(o.jsx)("span",{className:"input-group-text icon-span input text-muted pr-2",id:"basic-addon1",children:"Specification"})})]})]}),Object(o.jsxs)("div",{className:"form-group mt-3 d-flex justify-content-between",children:[Object(o.jsx)("select",{className:"form-select input addinput","aria-label":"Plywood",children:Object(o.jsx)("option",{selected:!0,children:"Plywood"})}),Object(o.jsxs)("div",{className:"input-group  mx-1",children:[Object(o.jsx)("input",{type:"text",className:"form-control input ","aria-label":"Username","aria-describedby":"basic-addon1",value:x,onChange:function(e){return O(e.target.value)}}),Object(o.jsx)("div",{className:"input-group-prepend ",children:Object(o.jsx)("span",{className:"input-group-text icon-span input text-muted pr-2",id:"basic-addon1",children:"Quantity"})})]}),Object(o.jsxs)("div",{className:"input-group  mx-1",children:[Object(o.jsx)("input",{type:"text",className:"form-control input ","aria-label":"Username","aria-describedby":"basic-addon1",value:j,onChange:function(e){b(e.target.value),h(u.calculateMaterialTotal({qty:parseInt(x),rate:""===e.target.value?0:parseInt(e.target.value)})),h(u.calculateProjectTotal())}}),Object(o.jsx)("div",{className:"input-group-prepend ",children:Object(o.jsx)("span",{className:"input-group-text icon-span input text-muted",id:"basic-addon1",children:"Rate"})})]})]}),Object(o.jsx)("div",{className:"form-group mt-3",children:Object(o.jsxs)("span",{children:["\u20b9",N," "]})})]}),Object(o.jsx)("div",{className:"my-3",children:Object(o.jsx)("button",{type:"button",onClick:function(){return c(!0)},className:"bg-transparent border-0 plus",children:"+"})})]})},f=(a(30),function(e){var t=Object(n.useState)("block"),a=Object(r.a)(t,2),s=a[0],c=a[1],i=Object(n.useState)("none"),l=Object(r.a)(i,2),d=l[0],j=l[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h5",{className:"text-center my-2",children:"Component 1 "}),Object(o.jsxs)("div",{className:"form-group componentTab d-flex justify-content-between mt-3",children:[Object(o.jsx)("a",{href:"/#",className:"mb-2 text-decoration-none tabs text-muted",onClick:function(){c("block"),j("none")},children:"Work"}),Object(o.jsx)("a",{href:"/#",className:"mb-2 text-decoration-none tabs text-muted",onClick:function(){c("none"),j("block")},children:"Material"})]}),Object(o.jsx)("div",{style:{display:s},children:Object(o.jsx)(h,{onMilestoneIsVisible:e.onMilestoneIsVisible})}),Object(o.jsxs)("div",{style:{display:d},children:[Object(o.jsx)(N,{})," "]})]})}),v=a(11),g=a(14),y=(a(31),function(){var e,t=function(e){Object(g.confirmAlert)({title:"Confirm to submit",message:"Are you sure to do this.",buttons:[{label:"Yes",onClick:function(){return l(e)}},{label:"No"}]})},a=Object(n.useState)([]),s=Object(r.a)(a,2),c=s[0],i=s[1],l=function(e){t();var a=e.target.parentElement.parentElement.parentElement.attributes[0].value,n=c.filter((function(e,t){return t!==a}));i(n)},d=Object(o.jsxs)("div",{className:"form-group mt-4 d-flex justify-content-between align-items-center ",children:[Object(o.jsxs)("div",{className:"input-group  mx-1",children:[Object(o.jsx)("input",{type:"text",className:"form-control input ","aria-label":"Username","aria-describedby":"basic-addon1"}),Object(o.jsx)("div",{className:"input-group-prepend ",children:Object(o.jsx)("span",{className:"input-group-text icon-span input text-muted pr-2",id:"basic-addon1",children:"Milestones"})})]}),Object(o.jsxs)("div",{className:"input-group  mx-1",children:[Object(o.jsx)("input",{type:"text",className:"form-control input ","aria-label":"Username","aria-describedby":"basic-addon1"}),Object(o.jsx)("div",{className:"input-group-prepend ",children:Object(o.jsx)("span",{className:"input-group-text icon-span input text-muted pr-2",id:"basic-addon1",children:"%"})})]}),Object(o.jsx)("div",{className:"",children:Object(o.jsx)("button",(e={type:"button",className:"text-muted",onClick:function(e){return t(e)}},Object(v.a)(e,"className","bg-transparent border-0"),Object(v.a)(e,"children","x"),e))})]});return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h5",{className:"text-center my-2",children:"Vendor 1 - Milestones "}),Object(o.jsx)(o.Fragment,{children:c.map((function(e,t){return Object(o.jsx)("div",{className:"milestone","data-index":t,children:e},t)}))}),Object(o.jsx)("div",{className:"my-3",children:Object(o.jsx)("button",{type:"button",onClick:function(){i((function(e){return[].concat(Object(j.a)(e),[d])}))},className:"bg-transparent border-0 plus",children:"+"})})]})}),k=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(!1),i=Object(r.a)(c,2),l=i[0],j=i[1],b=Object(n.useState)(!1),p=Object(r.a)(b,2),u=p[0],m=p[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(d,{}),Object(o.jsxs)("div",{className:"main-body",children:[Object(o.jsx)("div",{className:"left-side-panel bg-primary",children:" "}),Object(o.jsxs)("div",{className:"main-container",children:[Object(o.jsx)("div",{className:"add-unit-container",children:Object(o.jsx)("div",{className:"add-unit-wrapper wrapper p-3",children:Object(o.jsx)(x,{onAddComponentIsVisible:function(){s(!0)}})})}),a&&Object(o.jsx)("div",{className:"add-component-container",children:Object(o.jsx)("div",{className:"add-component-wrapper wrapper  p-3",children:Object(o.jsx)(O,{onComponentIsVisible:function(){return j(!0)}})})}),l&&Object(o.jsx)("div",{className:"component-container",children:Object(o.jsx)("div",{className:"component-wrapper wrapper p-3",children:Object(o.jsx)(f,{onMilestoneIsVisible:function(){return m(!0)}})})}),u&&Object(o.jsx)("div",{className:"milestones-conatiner",children:Object(o.jsx)("div",{className:"milestones-wrapper wrapper  p-3",children:Object(o.jsx)(y,{})})})]})]})]})},w=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(k,{})})};var C=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(w,{})})},S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,33)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),s(e),c(e),i(e)}))},U=Object(b.a)({reducer:{comp:m.reducer}});i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(l.a,{store:U,children:Object(o.jsx)(C,{})})}),document.getElementById("root")),S()}},[[32,1,2]]]);
//# sourceMappingURL=main.2f5832b3.chunk.js.map