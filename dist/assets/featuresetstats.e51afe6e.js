import{mq as F,mZ as d,mp as l,mb as A,mt as h,mj as s,ms as f,mi as p,n3 as v}from"./index.165b2b59.js";import{m}from"./arcadeUtils.65026d41.js";import{WhereClause as g}from"./WhereClause.d10f799a.js";function i(t,e,a,n,u,r){if(n.length===1){if(l(n[0]))return s(m(t,n[0],f(n[1],-1)));if(h(n[0]))return s(m(t,n[0].toArray(),f(n[1],-1)))}else if(n.length===2){if(l(n[0]))return s(m(t,n[0],f(n[1],-1)));if(h(n[0]))return s(m(t,n[0].toArray(),f(n[1],-1)));if(d(n[0]))return n[0].load().then(c=>y(g.create(n[1],c.getFieldsIndex()),r,u).then(o=>n[0].calculateStatistic(t,o,f(n[2],1e3),e.abortSignal)))}else if(n.length===3&&d(n[0]))return n[0].load().then(c=>y(g.create(n[1],c.getFieldsIndex()),r,u).then(o=>n[0].calculateStatistic(t,o,f(n[2],1e3),e.abortSignal)));return s(m(t,n,-1))}function y(t,e,a){try{const n=t.getVariables();if(n.length>0){const u=[];for(let r=0;r<n.length;r++){const c={name:n[r]};u.push(e.evaluateIdentifier(a,c))}return p(u).then(r=>{const c={};for(let o=0;o<n.length;o++)c[n[o]]=r[o];return t.parameters=c,t})}return s(t)}catch(n){return v(n)}}function I(t){t.mode==="async"&&(t.functions.stdev=function(e,a){return t.standardFunctionAsync(e,a,function(n,u,r){return i("stdev",n,u,r,e,t)})},t.functions.variance=function(e,a){return t.standardFunctionAsync(e,a,function(n,u,r){return i("variance",n,u,r,e,t)})},t.functions.average=function(e,a){return t.standardFunctionAsync(e,a,function(n,u,r){return i("mean",n,u,r,e,t)})},t.functions.mean=function(e,a){return t.standardFunctionAsync(e,a,function(n,u,r){return i("mean",n,u,r,e,t)})},t.functions.sum=function(e,a){return t.standardFunctionAsync(e,a,function(n,u,r){return i("sum",n,u,r,e,t)})},t.functions.min=function(e,a){return t.standardFunctionAsync(e,a,function(n,u,r){return i("min",n,u,r,e,t)})},t.functions.max=function(e,a){return t.standardFunctionAsync(e,a,function(n,u,r){return i("max",n,u,r,e,t)})},t.functions.count=function(e,a){return t.standardFunctionAsync(e,a,function(n,u,r){if(F(r,1,1),d(r[0]))return r[0].count(n.abortSignal);if(l(r[0])||A(r[0]))return r[0].length;if(h(r[0]))return r[0].length();throw new Error("Invalid Parameters for Count")})})}export{I as registerFunctions};