var N=Object.defineProperty,F=Object.defineProperties;var K=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var d=(t,e,r)=>e in t?N(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,v=(t,e)=>{for(var r in e||(e={}))$.call(e,r)&&d(t,r,e[r]);if(y)for(var r of y(e))k.call(e,r)&&d(t,r,e[r]);return t},w=(t,e)=>F(t,K(e));import{hg as b,hh as B,r as l,hi as J,hj as I,t as j,hk as q,hl as A,hm as G,hn as T,ho as x,hp as V,hq as C,cK as D,aI as E,hr as H}from"./index.165b2b59.js";import{i as L}from"./multiOriginJSONSupportUtils.8128aa52.js";function h(t){return f[M(t)]||W}function M(t){return t instanceof Blob?t.type:Q(t.url)}function Q(t){const e=b(t);return m[e]||U}const f={},U="text/plain",W=f[U],m={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip"};for(const t in m)f[m[t]]=t;function st(t){const e=l(t)&&t.origins?t.origins:[void 0];return(r,i)=>{const o=X(t,r,i);for(const a of e){const s=B(r,a,i);for(const n in o)s[n]=o[n]}}}function X(t,e,r){if(l(t)&&t.type==="resource")return Y(t,e,r);switch(l(t)&&t.type?t.type:"other"){case"other":return{read:!0,write:!0};case"url":{const{read:i,write:o}=H;return{read:i,write:o}}}}function Y(t,e,r){const i=V(e,r);return{type:String,read:(o,a,s)=>{const n=J(o,a,s);return i.type===String?n:typeof i.type=="function"?new i.type({url:n}):void 0},write:{writer(o,a,s,n){if(!n||!n.resources)return typeof o=="string"?void(a[s]=I(o,n)):void(a[s]=o.write({},n));const c=et(o),p=c?I(c,w(v({},n),{verifyItemRelativeUrls:n&&n.verifyItemRelativeUrls?{writtenUrls:n.verifyItemRelativeUrls.writtenUrls,rootPath:null}:null}),q.NO):null,u=i.type!==String&&(!L(this)||n&&n.origin&&this.originIdOf(r)>A(n.origin));n&&n.portalItem&&l(p)&&!G(p)?u?Z(this,r,o,p,a,s,n,t):_(p,a,s,n):n&&n.portalItem&&(j(p)||l(T(p))||x(p)||u)?R(this,r,o,p,a,s,n,t):a[s]=p}}}}function R(t,e,r,i,o,a,s,n){const c=C(),p=S(r,i,s),u=D(E(n,"prefix"),c),P=`${u}.${h(p)}`,g=s.portalItem.resourceFromPath(P);x(i)&&s.resources.pendingOperations.push(tt(i).then(z=>{g.path=`${u}.${h(z)}`,o[a]=g.itemRelativeUrl}).catch(()=>{})),O(t,e,g,p,s.resources.toAdd),o[a]=g.itemRelativeUrl}function Z(t,e,r,i,o,a,s,n){const c=s.portalItem.resourceFromPath(i),p=S(r,i,s);h(p)===b(c.path)?(O(t,e,c,p,s.resources.toUpdate),o[a]=i):R(t,e,r,i,o,a,s,n)}function _(t,e,r,i){i.resources.toKeep.push({resource:i.portalItem.resourceFromPath(t)}),e[r]=t}function O(t,e,r,i,o){o.push({resource:r,content:i,finish:a=>{rt(t,e,a)}})}function S(t,e,r){return typeof t=="string"?{url:e}:new Blob([JSON.stringify(t.toJSON(r))],{type:"application/json"})}async function tt(t){const e=(await import("./index.165b2b59.js").then(function(i){return i.rb})).default,{data:r}=await e(t,{responseType:"blob"});return r}function et(t){return j(t)?null:typeof t=="string"?t:t.url}function rt(t,e,r){typeof t[e]=="string"?t[e]=r.url:t[e].url=r.url}export{st as w};
