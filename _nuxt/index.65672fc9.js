import{_ as d}from"./nuxt-link.bf7662c7.js";import S from"./ContentRenderer.d70ae7b4.js";import V from"./ContentDoc.629c36d0.js";import{u as m,q as f}from"./query.e1a03796.js";import{u as q}from"./counter.f8693497.js";import{s as B,f as v,g as O,r as C,h as R,w as o,o as $,b as e,d as a,a as t,t as h,u as c}from"./entry.37f26708.js";import"./ContentRendererMarkdown.vue.e58e3dff.js";import"./index.b0fe9fac.js";import"./preview.29e7b826.js";import"./vue.f36acd1f.89815aac.js";import"./ContentQuery.66466735.js";const D=t("br",null,null,-1),L=t("div",{id:"test-btn"},"テスト",-1),P=t("br",null,null,-1),T=t("h1",null,"useState実装例",-1),W={__name:"index",async setup(F){let n,_;const u=q(),{increment:x}=u,{count:l}=B(u),{data:i}=([n,_]=v(()=>m(async()=>f("ca-docs","/ca901").findOne(),"$PslAyef5YX")),n=await n,_(),n),{data:k}=([n,_]=v(()=>m(async()=>f("/nv10").findOne(),"$6PO73qLRkI")),n=await n,_(),n);let s=O(i);const y=()=>(console.log("できてる"),s=i,l.value++),b=()=>(s=k,l.value++);return(I,X)=>{const p=d,g=S,w=V,r=C("v-btn"),N=d,A=C("v-app");return $(),R(A,null,{default:o(()=>[e(p,{to:"/pages-test/[ca]"},{default:o(()=>[a(" caのページ ")]),_:1}),t("div",null,[a("マークダウンが切り替わるよ、ここは.vueの範囲だよ "),D,t("div",null,[a(h(c(s))+" ",1),e(w,{value:c(s)},{default:o(()=>[e(g,{value:c(s)},null,8,["value"])]),_:1},8,["value"]),e(r,{onClick:y},{default:o(()=>[a("CAボタン")]),_:1}),e(r,{onClick:b},{default:o(()=>[a("NVボタン")]),_:1}),L])]),t("div",null,[t("h1",null,"Count:"+h(c(l)),1),e(r,{onClick:c(x)},{default:o(()=>[a("たすよ")]),_:1},8,["onClick"]),P,e(N,{to:"/"},{default:o(()=>[a("もどる")]),_:1})]),t("div",null,[T,e(p,{to:"/nv"},{default:o(()=>[a("テストページ")]),_:1})])]),_:1})}}};export{W as default};