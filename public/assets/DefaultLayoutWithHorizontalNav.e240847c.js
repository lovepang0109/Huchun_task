import{o as n,c as _,F as g,a as $,b as f,e as w,_ as k,f as b,g as C,i as N,j as V,k as z,l as L,m as t,n as u,p as o,q as e,s as v,t as R,r as h,w as r,V as S,v as y,x as I,T as B}from"./index.84400ea8.js";import x from"./Footer.bf90950e.js";import E from"./NavbarThemeSwitcher.7369cdbc.js";import T from"./UserProfile.b19c38a8.js";import{V as W}from"./VTextarea.d0bbf08b.js";import"./useAppAbility.3e9b8b60.js";import"./index.c0fab4f2.js";import"./VBadge.1e282c4e.js";import"./VDialog.e12e96f6.js";import"./VRow.5bc57025.js";const q={class:"nav-items"},D={__name:"HorizontalNav",props:{navItems:{type:null,required:!0}},setup(m){const l=i=>"children"in i?k:b;return(i,d)=>(n(),_("ul",q,[(n(!0),_(g,null,$(m.navItems,(a,c)=>(n(),f(w(l(a)),{key:c,item:a},null,8,["item"]))),128))]))}},F={class:"layout-navbar"},H={class:"navbar-content-container"},P={class:"layout-horizontal-nav"},j={class:"horizontal-nav-content-container"},U={class:"layout-page-content"},Y={class:"layout-footer"},A={class:"footer-content-container"},G={__name:"HorizontalNavLayout",props:{navItems:{type:null,required:!0}},setup(m){const{y:l}=C(),{width:i}=N(),d=V(),a=z(!1);d.beforeEach(()=>{a.value=!0}),d.afterEach(()=>{a.value=!1});const{_layoutClasses:c,isNavbarBlurEnabled:p}=L();return(s,M)=>(n(),_("div",{class:v(["layout-wrapper",e(c)(e(i),e(l))])},[t("div",{class:v(["layout-navbar-and-nav-container",e(p)&&"header-blur"])},[t("div",F,[t("div",H,[u(s.$slots,"navbar")])]),t("div",P,[t("div",j,[o(e(D),{"nav-items":m.navItems},null,8,["nav-items"])])])],2),t("main",U,[s.$slots["content-loading"]?(n(),_(g,{key:0},[e(a)?u(s.$slots,"content-loading",{key:0}):u(s.$slots,"default",{key:1})],64)):u(s.$slots,"default",{key:1})]),t("footer",Y,[t("div",A,[u(s.$slots,"footer")])])],2))}},J=[],K={class:"app-title font-weight-bold leading-normal text-xl"},re={__name:"DefaultLayoutWithHorizontalNav",setup(m){const{appRouteTransition:l}=R();return(i,d)=>{const a=h("RouterLink"),c=h("RouterView");return n(),f(e(G),{"nav-items":e(J)},{navbar:r(()=>[o(a,{to:"/",class:"app-logo d-flex align-center gap-x-3"},{default:r(()=>[o(e(S),{nodes:e(y).app.logo},null,8,["nodes"]),t("h1",K,I(e(y).app.title),1)]),_:1}),o(W),o(E,{class:"me-2"}),o(T)]),footer:r(()=>[o(x)]),default:r(()=>[o(c,null,{default:r(({Component:p,route:s})=>[o(B,{name:e(l),mode:"out-in"},{default:r(()=>[(n(),f(w(p),{key:s.path}))]),_:2},1032,["name"])]),_:1})]),_:1},8,["nav-items"])}}};export{re as default};
