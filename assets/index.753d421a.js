import{r as y,o as g,c as $,a as P,n as q,b as C,t as w,d as L,e as K,f as T,u as v,F as G,g as J,h as H,w as Q,i as U,j as W}from"./vendor.c45f69da.js";const X=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))e(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&e(s)}).observe(document,{childList:!0,subtree:!0});function u(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerpolicy&&(r.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?r.credentials="include":a.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(a){if(a.ep)return;a.ep=!0;const r=u(a);fetch(a.href,r)}};X();var M=(t,n)=>{const u=t.__vccOpts||t;for(const[e,a]of n)u[e]=a;return u};const Y={props:{label:String,area:String},setup(t){const u=y({"grid-area":t.area});return(e,a)=>(g(),$("button",{style:q(u.value)},[P(e.$slots,"default",{},void 0,!0)],4))}};var Z=M(Y,[["__scopeId","data-v-3336c3e6"]]);const ee={props:{value:String,message:String,name:String,isError:Boolean},setup(t){const n=t,u=y({"grid-area":n.name});return(e,a)=>{var r,s;return g(),$("div",{style:q(u.value)},[C("h2",{class:L([{"calc-error":t.isError},"calc-display","calc-value-display"])},w((r=n.value)!=null?r:"_"),3),C("h3",{class:L([{"calc-error":t.isError},"calc-display","calc-info-display"])},w((s=n.message)!=null?s:"ready"),3)],4)}}};var re=M(ee,[["__scopeId","data-v-59cb5d9a"]]);const o={};o.value=0;o.set=function(t){this.value=t};o.get=function(){return this.value};o.increase=function(t){this.value+=t};o.decrease=function(t){this.value-=t};o.clear=function(){this.set(0)};const i={};i.maxNumberLength=10;i.prepare=function(t){if(Math.trunc(t).toString().length>this.maxNumberLength)throw new Error("Result is too big");return Number(t.toFixed(this.maxNumberLength-Math.trunc(t).toString().length))};i.addition=function(t,n){return this.prepare(t+n)};i.subtraction=function(t,n){return this.prepare(t-n)};i.multiplication=function(t,n){return this.prepare(t*n)};i.division=function(t,n){if(n===0)throw new Error("Division by zero");return this.prepare(t/n)};i.sqrt=function(t){if(t<0)throw new Error("Negative value under square root");return this.prepare(Math.sqrt(t))};const te={class:"calc-container"},ae={setup(t){let n=!1,u=y(!1),e=y(null),a=y(null),r=null,s=null,m=null;i.maxNumberLength=12;const S=new Map([["number9","9"],["number8","8"],["number7","7"],["number6","6"],["number5","5"],["number4","4"],["number3","3"],["number2","2"],["number1","1"],["number0","0"]]),c=new Map([["addition","+"],["subtraction","-"],["multiplication","*"],["division","\xF7"],["calculate","="],["backspace","\u2190"],["sign","\xB1"],["sqrt","\u221A"],["power","x\xB2"],["separator","."],["clearAll","AC"]]),x=new Map([["memoryIncrease","M+"],["memoryDecrease","M-"],["memorySave","MS"],["memoryRead","MR"],["memoryClear","MC"]]),_=K(()=>e.value===null);function N(){r=null,s=null,m=null,n=!1,e.value=null,a.value=null}function d(){const l=Number(e.value);return Number.isNaN(l)?0:l}function A(l){N(),a.value=l.message,e.value="Error",u.value=!0,console.log("calcError is ",u.value)}function E(){switch(m){case c.get("addition"):r=i.addition(r,s);break;case c.get("subtraction"):r=i.subtraction(r,s);break;case c.get("multiplication"):r=i.multiplication(r,s);break;case c.get("division"):r=i.division(r,s);break}}function D(){_.value?e.value="-":e.value=(-d()).toString()}function B(){if(_.value)return;const l=d();e.value=i.sqrt(l).toString(),a.value=`Sqrt (${l}) = ${e.value}`}function O(){if(_.value)return;const l=d();e.value=i.multiplication(l,l).toString(),a.value=`(${l})\xB2 = ${e.value}`}function I(){_.value?e.value="0.":e.value.includes(c.get("separator"))||(e.value=`${e.value}.`,n=!1)}function F(){_.value||(e.value=e.value.slice(0,-1),(e.value==="-"||e.value==="")&&(e.value=null))}function R(l){var f,p,b;n?(e.value=l,n=!1):((p=(f=e.value)==null?void 0:f.length)!=null?p:0)<i.maxNumberLength&&(e.value=`${(b=e.value)!=null?b:""}${l}`)}function h(l){r===null?(r=d(),m=l,a.value=`${r} ${m}`,e.value=null):(s=d(),E(),m=l,a.value=`${r} ${m}`,e.value=null,s=null)}function V(){r===null?(r=d(),a.value=`${r} =`):(s=d(),a.value=`${r} ${m} ${s}`,E(),a.value=`${a.value} = ${r}`,e.value=r.toString(),n=!0,s=null,r=null)}const k={backspace:F,sign:D,sqrt:B,power:O,calculate:V,addition:h,subtraction:h,multiplication:h,division:h,separator:I,clearAll:N,memoryRead:()=>e.value=o.get().toString(),memoryClear:()=>o.clear(),memorySave:()=>o.set(d()),memoryIncrease:()=>o.increase(d()),memoryDecrease:()=>o.decrease(d())},j=l=>{if(u.value)if(c.get(l.target.id)===c.get("clearAll"))N(),u.value=!1;else return;if(S.has(l.target.id)&&R(S.get(l.target.id)),c.has(l.target.id)){const f=c.get(l.target.id);try{k[l.target.id](f)}catch(p){A(p)}}x.has(l.target.id)&&k[l.target.id]()};return(l,f)=>(g(),$("div",te,[T(re,{name:"display",value:v(e),message:v(a),isError:v(u)},null,8,["value","message","isError"]),(g(!0),$(G,null,J(new Map([...v(S),...v(c),...v(x)]),([p,b])=>(g(),H(Z,{key:p,id:p,area:p,onClick:f[0]||(f[0]=z=>j(z))},{default:Q(()=>[U(w(b),1)]),_:2},1032,["id","area"]))),128))]))}};var le=M(ae,[["__scopeId","data-v-3d0a9556"]]);const ne={setup(t){return(n,u)=>(g(),H(le))}};W(ne).mount("#app");