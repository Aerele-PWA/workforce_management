import{p as F,r as c,h as P,q as V,o,b as l,d as s,e as r,u as n,_ as d,w as $,k as N,F as x,y as b,t as k,l as S,j as q,C as D,E as I,n as R,c as j}from"./index.0e3c50f7.js";import{U as z}from"./User.861bcd1c.js";const A=i=>(D("data-v-9fc1337a"),i=i(),I(),i),B={class:"w-full sm:w-96 bg-gray-100 flex justify-center h-screen"},E={class:"w-full flex flex-col"},O={class:"w-full sm:w-96 bg-white h-14 shadow-lg fixed top-0 z-10"},U={class:"p-2 flex pt-3"},W={class:"relative w-full"},T={key:0,class:"absolute left-[1rem] right-0 bg-white border border-gray-200 rounded-lg shadow-lg mt-1 z-20"},M=["onClick"],Q={class:"w-full flex justify-end"},G={class:"p-1 pr-4 mb-2"},H={class:"mt-14 w-full h-full"},J={class:"p-4"},K=A(()=>s("p",{class:"font-medium text-xl pl-1 text-gray-600"},"Quick Link",-1)),X={class:"bg-white h-[28rem] w-full rounded-lg mt-2 overflow-y-auto no-scrollbar p-2"},Y=["onClick"],Z={class:"text-gray-600 pl-3 truncate w-[8rem]"},ee=["onClick"],te={__name:"LandingPage",setup(i){const u=c(""),p=c(!1),f=c([]),m=c([]),_=P(),h=c(""),v=c([]);(()=>{const e=R({doctype:"PWA Form",fields:["*"],filters:h.value?{name:h.value}:{}});e.reload().then(()=>{f.value=e.data.map(t=>({id:t.name,frm:t.form_name,doctype:t.doctype_name}))})})(),V(u,e=>{v.value=["PWA Form","doctype_name","like",`%${e}%`],y()});const g=e=>{u.value=e.doctype_name,_.push({name:"ListPage",query:{frmname:e.name,doctype:e.doctype_name}}),p.value=!1},C=e=>{_.push({name:"ListPage",query:{frmname:e.frm,doctype:e.doctype}})},L=e=>{_.push({name:"Form",query:{frmname:e.frm,doctype:e.doctype}})},y=()=>{const e=j({url:"frappe.desk.reportview.get",method:"POST",params:{doctype:"PWA Form",filters:v.value.length>0?[v.value]:[],fields:["*"],distinct:!1,start:0,page_length:v.value.length>0?500:5}});e.fetch().then(()=>{const t=e.data;t.values&&(t.values.map?m.value=t.values.map(a=>({name:a[0],doctype_name:a[9]})):m.value=[])})};return y(),document.addEventListener("click",e=>{e.target.closest(".relative")||(p.value=!1)}),(e,t)=>(o(),l("div",B,[s("div",E,[s("div",O,[s("div",U,[r(n(d),{class:"w-6 h-6 mt-1 text-gray-600 hover:text-black",name:"list"}),s("div",W,[r(n(N),{type:"text",size:"sm",variant:"subtle",placeholder:"Search...",disabled:!1,modelValue:u.value,"onUpdate:modelValue":t[0]||(t[0]=a=>u.value=a),onFocus:t[1]||(t[1]=a=>p.value=!0),class:"flex-grow pl-4 w-full pt-[3px]"},{prefix:$(()=>[r(n(d),{class:"w-4",name:"search"})]),_:1},8,["modelValue"]),p.value?(o(),l("div",T,[m.value.length>0?(o(!0),l(x,{key:0},b(m.value,a=>(o(),l("div",{key:a,class:"p-2 hover:bg-gray-200 cursor-pointer",onClick:w=>g(a)},k(a.doctype_name),9,M))),128)):(o(),l("div",{key:1,class:"p-2 hover:bg-gray-200 cursor-pointer text-[12px] text-gray-600",onClick:t[2]||(t[2]=a=>g(e.option))}," No Record Found "))])):S("",!0)]),s("div",Q,[s("div",G,[r(n(d),{class:"w-6 h-6 text-gray-600 pt-1 hover:text-black",name:"bell"})]),r(z)])])]),s("div",H,[s("div",J,[K,s("div",X,[(o(!0),l(x,null,b(f.value,a=>(o(),l("div",{key:a.id,class:"border-gray-200 border-b-[1.5px]"},[s("div",{class:"p-2 flex pt-2 touchable",onClick:w=>C(a)},[r(n(d),{name:"link",class:"text-gray-600 h-5 w-5"}),s("p",Z,k(a.doctype),1),s("div",{class:"ml-auto touchable",onClick:q(w=>L(a),["stop"])},[r(n(d),{name:"plus",class:"text-gray-600 h-5 w-5 hover:text-black"})],8,ee)],8,Y)]))),128))])])])])]))}};var le=F(te,[["__scopeId","data-v-9fc1337a"]]);export{le as default};
