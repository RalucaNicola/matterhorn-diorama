var K=Object.defineProperty,g=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var d=(e,r,t)=>r in e?K(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,l=(e,r)=>{for(var t in r||(r={}))v.call(r,t)&&d(e,t,r[t]);if(b)for(var t of b(r))E.call(r,t)&&d(e,t,r[t]);return e},m=(e,r)=>g(e,z(r));import{E as p,O as L}from"./Utils.1d577b79.js";import{A as N,f,_ as x}from"./MaterialKey.df1e4589.js";import"./index.165b2b59.js";import"./enums.2e388672.js";import"./number.08b65821.js";import"./CIMSymbolHelper.8c0923eb.js";import"./BidiEngine.4cfb7343.js";function V(e){if(e.type==="line-marker"){var r;return{type:"line-marker",color:(r=e.color)==null?void 0:r.toJSON(),placement:e.placement,style:e.style}}return e.constructor.fromJSON(e.toJSON()).toJSON()}function S(e){return N(e)}function D(e,r,t){if(!e)return null;switch(e.type){case"simple-fill":case"picture-fill":return T(e,r,t);case"simple-marker":case"picture-marker":return w(e,r,t);case"simple-line":return k(e,r,t);case"text":return A(e,r,t);case"label":return O(e,r,t);case"cim":return{type:"cim",rendererKey:r.vvFlags,data:e.data,maxVVSize:r.maxVVSize};case"CIMSymbolReference":return{type:"cim",rendererKey:r.vvFlags,data:e,maxVVSize:r.maxVVSize};case"web-style":return m(l({},V(e)),{type:"web-style",hash:e.hash(),rendererKey:r.vvFlags,maxVVSize:r.maxVVSize});default:throw new Error(`symbol not supported ${e.type}`)}}function O(e,r,t){const a=e.toJSON(),n=f(p.LABEL,m(l({},r),{placement:a.labelPlacement}));return m(l({materialKey:t?S(n):n,hash:e.hash()},a),{labelPlacement:a.labelPlacement})}function T(e,r,t){const a=f(p.FILL,r),n=t?S(a):a,o=e.clone(),s=o.outline,c=x(r.symbologyType);c||(o.outline=null);const h=l({materialKey:n,hash:o.hash()},V(o));if(c)return h;const u=[];if(u.push(h),s){const i=f(p.LINE,m(l({},r),{isOutline:!0})),y=l({materialKey:t?S(i):i,hash:s.hash()},V(s));u.push(y)}return{type:"composite-symbol",layers:u,hash:u.reduce((i,y)=>y.hash+i,"")}}function k(e,r,t){const a=x(r.symbologyType)?L.DEFAULT:r.symbologyType,n=f(p.LINE,m(l({},r),{symbologyType:a})),o=t?S(n):n,s=e.clone(),c=s.marker;s.marker=null;const h=[];if(h.push(l({materialKey:o,hash:s.hash()},V(s))),c){var u;const i=f(p.MARKER,r),y=t?S(i):i;c.color=(u=c.color)!=null?u:s.color,h.push(l({materialKey:y,hash:c.hash(),lineWidth:s.width},V(c)))}return{type:"composite-symbol",layers:h,hash:h.reduce((i,y)=>y.hash+i,"")}}function w(e,r,t){const a=f(p.MARKER,r),n=t?S(a):a,o=V(e);return m(l({materialKey:n,hash:e.hash()},o),{angle:e.angle,maxVVSize:r.maxVVSize})}function A(e,r,t){const a=f(p.TEXT,r),n=t?S(a):a,o=V(e);return m(l({materialKey:n,hash:e.hash()},o),{angle:e.angle,maxVVSize:r.maxVVSize})}export{D as createSymbolSchema};
