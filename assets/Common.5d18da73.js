import{a as v,b as C,aW as l,b9 as r,ck as $,d0 as w,m as I,h as t,d1 as R,E as L,ba as o,n as p,ae as T,C as u,a4 as _}from"./index.16943de2.js";import{b as x}from"./useTitle.81d67f01.js";import{I as B}from"./SettingItem.10bc19d1.js";import{R as D}from"./ResponsiveGrid.2b084694.js";import"./index.42368fe0.js";import"./index.cbfc3e7e.js";import"./index.abb69183.js";import"./item_type.ee87ae79.js";const q=d=>{const s=v(),{pathname:m}=C();x(`manage.sidemenu.${m().split("/").pop()}`);const[h,f]=l(()=>r.get(`/admin/setting/list?group=${d.group}`)),[i,c]=$([]),a=async()=>{const e=await f();o(e,c)};a();const[k,S]=l(()=>r.post("/admin/setting/save",w(i))),[b,g]=I(!1);return t(_,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[t(D,{get children(){return t(R,{each:i,children:(e,E)=>t(B,L(e,{onChange:n=>{c(y=>e().key===y.key,"value",n)},onDelete:async()=>{g(!0);const n=await r.post(`/admin/setting/delete?key=${e().key}`);g(!1),o(n,()=>{p.success(s("global.delete_success")),a()})}}))})}}),t(T,{spacing:"$2",get children(){return[t(u,{colorScheme:"accent",onClick:a,get loading(){return h()||b()},get children(){return s("global.refresh")}}),t(u,{get loading(){return k()},onClick:async()=>{const e=await S();o(e,()=>p.success(s("global.save_success")))},get children(){return s("global.save")}})]}})]}})};export{q as default};
