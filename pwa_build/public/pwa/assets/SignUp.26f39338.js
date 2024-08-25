import{r as t,i,a as M,o as w,b as _,d as s,e as a,w as c,u as l,_ as h,k as g,t as k,l as V,f as S,m as D,T as O,F as z,n as A}from"./index.0e3c50f7.js";const I={class:"w-full sm:w-96 bg-[#f4f5f7] flex justify-center items-center h-screen"},J={class:"w-full h-96 flex justify-center items-center"},K={class:"w-full object-center justify-center flex"},Q=["src"],W=s("div",{class:"w-full"},[s("p",{class:"font-medium p-2 flex justify-center"},"Sign Up")],-1),X={class:"bg-white rounded-lg w-80 h-68 mt-4"},Y={class:"p-4"},Z={class:"relative"},ee={class:"relative"},se={key:0,class:"text-red-500 text-xs pl-2"},te={key:1,class:"text-red-500 text-xs pl-2"},ae={class:"p-2"},le={class:"w-full"},oe={class:"fixed bottom-0 flex justify-end w-full sm:w-96 pr-3"},ne={key:0,class:"w-full sm:w-72 p-2 mb-4 text-sm leading-5 text-white bg-blue-500 rounded-lg opacity-100 font-regular animate-slide-in-right animate-fade-out"},ue={__name:"SignUp",setup(re){const U=t(""),x=t(""),d=t(""),m=t(""),y=t(""),u=t(""),b=t(!1),p=t(!1),f=t(!1),v=t(!1),C=i(()=>/\S+@\S+\.\S+/.test(d.value)),j=i(()=>m.value===y.value),T=i(()=>f.value?"text":"password"),L=i(()=>v.value?"text":"password"),E=i(()=>f.value?"Hide":"Show"),q=i(()=>v.value?"Hide":"Show"),N=()=>{f.value=!f.value},$=()=>{v.value=!v.value},F=t(window.location.href),R=i(()=>{const n=new URL(F.value);return`${n.protocol}//${n.hostname}:8001`}),B=t(`${R.value}/assets`),G=()=>{const n=new Headers;n.append("Cookie","full_name=Guest; sid=Guest; system_user=no; user_id=Guest; user_image=");const e={method:"GET",headers:n,redirect:"follow"};fetch(B.value,e).then(r=>r.text()).then(r=>{const P=new DOMParser().parseFromString(r,"text/html").querySelector('link[rel="shortcut icon"]');P&&(U.value=P.href)}).catch(r=>console.error(r))},H=()=>{p.value=!0,b.value=!0,A({doctype:"User"}).insert.submit({email:d.value,first_name:x.value,new_password:m.value}).then(()=>{u.value="User Created successfully",p.value=!1}).catch(e=>{e.response&&e.response.status===417?u.value="Password is too weak":e.response&&e.response.status===409?u.value="Email already exists":(console.error("Error creating user:",e),u.value="Error creating User"),p.value=!1})};return G(),(n,e)=>{const r=M("router-link");return w(),_(z,null,[s("div",I,[s("div",J,[s("div",null,[s("div",K,[s("img",{src:U.value,class:"w-16 h-16 object-cover rounded-lg"},null,8,Q)]),W,s("div",X,[s("div",Y,[a(l(g),{required:"",type:"text",label:"Username",name:"username",modelValue:x.value,"onUpdate:modelValue":e[0]||(e[0]=o=>x.value=o),placeholder:"johndoe",class:"p-2"},{prefix:c(()=>[a(l(h),{class:"w-4",name:"user"})]),_:1},8,["modelValue"]),a(l(g),{required:"",type:"email",label:"Email",name:"email",modelValue:d.value,"onUpdate:modelValue":e[1]||(e[1]=o=>d.value=o),placeholder:"johndoe@email.com",class:"p-2"},{prefix:c(()=>[a(l(h),{class:"w-4",name:"mail"})]),_:1},8,["modelValue"]),s("div",Z,[a(l(g),{required:"",label:"Password",name:"password",modelValue:m.value,"onUpdate:modelValue":e[2]||(e[2]=o=>m.value=o),type:T.value,placeholder:"\u2022\u2022\u2022\u2022\u2022\u2022",class:"p-2 w-full"},{prefix:c(()=>[a(l(h),{class:"w-4",name:"lock"})]),_:1},8,["modelValue","type"]),s("span",{onClick:N,class:"absolute right-2 top-7 cursor-pointer text-gray-600 text-sm p-2"},k(E.value),1)]),s("div",ee,[a(l(g),{required:"",label:"Confirm Password",name:"confirmPassword",modelValue:y.value,"onUpdate:modelValue":e[3]||(e[3]=o=>y.value=o),type:L.value,placeholder:"\u2022\u2022\u2022\u2022\u2022\u2022",class:"p-2 w-full"},{prefix:c(()=>[a(l(h),{class:"w-4",name:"lock"})]),_:1},8,["modelValue","type"]),s("span",{onClick:$,class:"absolute right-2 top-7 cursor-pointer text-gray-600 text-sm p-2"},k(q.value),1)]),b.value&&!C.value?(w(),_("div",se,"Enter a valid email!")):V("",!0),b.value&&!j.value?(w(),_("div",te,"Passwords do not match!")):V("",!0),s("div",ae,[a(l(D),{loading:p.value,variant:"solid",class:"w-full",onClick:H},{default:c(()=>[S(" Sign Up ")]),_:1},8,["loading"])]),s("div",le,[a(r,{to:"/login",class:"text-sm font-medium text-black justify-center flex p-2 hover:underline"},{default:c(()=>[S("Back to Login")]),_:1})])])])])])]),s("div",oe,[a(O,{name:"fade"},{default:c(()=>[u.value?(w(),_("div",ne,k(u.value),1)):V("",!0)]),_:1})])],64)}}};export{ue as default};
