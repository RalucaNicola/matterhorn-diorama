var u=Object.defineProperty;var r=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var e=(o,n,t)=>n in o?u(o,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[n]=t,c=(o,n)=>{for(var t in n||(n={}))m.call(n,t)&&e(o,t,n[t]);if(r)for(var t of r(n))p.call(n,t)&&e(o,t,n[t]);return o};import{cA as d,d0 as i,D as f,d1 as b}from"./index.25dca4c3.js";async function j(o,n,t){const a=d(o);return i(a,f.from(n),c({},t)).then(s=>s.data.count)}async function x(o,n,t){const a=d(o);return b(a,f.from(n),c({},t)).then(s=>s.data.objectIds)}export{j as n,x as s};