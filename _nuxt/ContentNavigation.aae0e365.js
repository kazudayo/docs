import{q as f,w as c,h as p,e as v,s as g,j as l,a as d,u as h}from"./query.e1a03796.js";import{l as _,G as y,m as C,H as w,I as P,q as $,x as r}from"./entry.37f26708.js";import{u as N}from"./preview.29e7b826.js";import{u as j}from"./state.f7bc2c91.js";import{_ as T}from"./nuxt-link.bf7662c7.js";const x=async e=>{const{content:t}=_().public;typeof(e==null?void 0:e.params)!="function"&&(e=f(e));const a=e.params(),s=t.experimental.stripQueryParameters?c(`/navigation/${`${p(a)}.${t.integrity}`}/${v(a)}.json`):c(`/navigation/${p(a)}.${t.integrity}.json`);if(g())return(await y(()=>import("./client-db.c967b3dd.js"),["./client-db.c967b3dd.js","./entry.37f26708.js","./entry.f7e6033f.css","./query.e1a03796.js","./preview.29e7b826.js","./index.b0fe9fac.js"],import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:l(a),previewToken:N().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},D=C({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=w(e),a=P(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&j("dd-navigation").value){const{navigation:n}=d();return{navigation:n}}const{data:s}=await h(`content-navigation-${p(a.value)}`,()=>x(a.value));return{navigation:s}},render(e){const t=$(),{navigation:a}=e,s=o=>r(T,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),m=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):m(a)}}),R=D;export{R as default};