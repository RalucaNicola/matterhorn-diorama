import{bE as P,bF as _,r as i,bG as D,bH as z,by as V,aY as $,bI as h,bJ as w,bK as Y,bL as j,bz as S,bM as k,bN as N,bO as O,bP as G,bQ as q,l as R,bR as K,bS as Q,bT as U,bU as W,bV as X,bW as M,bX as Z,bY as B,bZ as H,b_ as J,b$ as F,c0 as tt,c1 as et,c2 as E,c3 as nt,c4 as ot,c5 as rt,c6 as st,c7 as at,c8 as ct,c9 as I,ca as it,cb as ut,cc as lt,cd as ft,ce as T,cf as pt,cg as mt,ch as bt,bA as C,t as dt,ci as gt}from"./index.165b2b59.js";async function Ft(t,e,o){const s=new P(xt(o)),n=(await D(s,e,o,!0)).model,p=n.lods.shift(),l=new Map,u=new Map;n.textures.forEach((x,A)=>l.set(A,wt(x))),n.materials.forEach((x,A)=>u.set(A,yt(x,l)));const c=ht(p);for(const x of c.parts)vt(c,x,u);const{position:b,normal:f,tangent:r,color:a,texCoord0:m}=c.vertexAttributes,g={position:b.typedBuffer,normal:i(f)?f.typedBuffer:null,tangent:i(r)?r.typedBuffer:null,uv:i(m)?m.typedBuffer:null,color:i(a)?a.typedBuffer:null},v=Y(g,t,o);return{transform:v.transform,components:c.components,spatialReference:t.spatialReference,vertexAttributes:new j({position:v.vertexAttributes.position,normal:v.vertexAttributes.normal,tangent:v.vertexAttributes.tangent,color:g.color,uv:g.uv})}}function xt(t){return t!=null&&t.resolveFile?{busy:!1,request:async(e,o,s)=>{const n=t.resolveFile(e);return(await _(n,{responseType:o==="image"?"image":o==="binary"?"array-buffer":"json",signal:i(s)?s.signal:null})).data}}:null}function y(t,e){if(dt(t))return"-";const o=t.typedBuffer;return`${S(e,o.buffer,()=>e.size)}/${o.byteOffset}/${o.byteLength}`}function $t(t){return i(t)?t.toString():"-"}function ht(t){let e=0;const o={color:!1,tangent:!1,normal:!1,texCoord0:!1},s=new Map,n=new Map,p=[];for(const l of t.parts){const{attributes:{position:u,normal:c,color:b,tangent:f,texCoord0:r}}=l,a=`
      ${y(u,s)}/
      ${y(c,s)}/
      ${y(b,s)}/
      ${y(f,s)}/
      ${y(r,s)}/
      ${$t(l.transform)}
    `;let m=!1;const g=S(n,a,()=>(m=!0,{start:e,length:u.count}));m&&(e+=u.count),c&&(o.normal=!0),b&&(o.color=!0),f&&(o.tangent=!0),r&&(o.texCoord0=!0),p.push({gltf:l,writeVertices:m,region:g})}return{vertexAttributes:{position:w(k,e),normal:o.normal?w(N,e):null,tangent:o.tangent?w(O,e):null,color:o.color?w(G,e):null,texCoord0:o.texCoord0?w(q,e):null},parts:p,components:[]}}function wt(t){return new z({data:t.data,wrap:Ct(t.parameters.wrap)})}function yt(t,e){const o=new R(Rt(t.color,t.opacity)),s=t.emissiveFactor?new R(Mt(t.emissiveFactor)):null;return new V({color:o,colorTexture:$(h(t.textureColor,n=>e.get(n))),normalTexture:$(h(t.textureNormal,n=>e.get(n))),emissiveColor:s,emissiveTexture:$(h(t.textureEmissive,n=>e.get(n))),occlusionTexture:$(h(t.textureOcclusion,n=>e.get(n))),alphaMode:Tt(t.alphaMode),alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,metallic:t.metallicFactor,roughness:t.roughnessFactor,metallicRoughnessTexture:$(h(t.textureMetallicRoughness,n=>e.get(n)))})}function vt(t,e,o){e.writeVertices&&At(t,e);const s=e.gltf,n=Et(s.indices||s.attributes.position.count,s.primitiveType),p=e.region.start;if(p)for(let l=0;l<n.length;l++)n[l]+=p;t.components.push(new W({faces:n,material:o.get(s.material),trustSourceNormals:!0}))}function At(t,e){const{position:o,normal:s,tangent:n,color:p,texCoord0:l}=t.vertexAttributes,u=e.region.start,{attributes:c,transform:b}=e.gltf,f=c.position.count;if(X(o.slice(u,f),c.position,b),i(c.normal)&&i(s)){const r=M(F(),b),a=s.slice(u,f);Z(a,c.normal,r),B(r)&&H(a,a)}else i(s)&&J(s,0,0,1,{dstIndex:u,count:f});if(i(c.tangent)&&i(n)){const r=M(F(),b),a=n.slice(u,f);tt(a,c.tangent,r),B(r)&&et(a,a)}else i(n)&&E(n,0,0,1,1,{dstIndex:u,count:f});if(i(c.texCoord0)&&i(l)?nt(l.slice(u,f),c.texCoord0):i(l)&&ot(l,0,0,{dstIndex:u,count:f}),i(c.color)&&i(p)){const r=c.color,a=p.slice(u,f);if(r.elementCount===4)r instanceof O?rt(a,r,255):r instanceof G?st(a,r):r instanceof at&&ct(a,r,8);else{E(a,255,255,255,255);const m=I.fromTypedArray(a.typedBuffer,a.typedBufferStride);r instanceof N?it(m,r,255):r instanceof I?ut(m,r):r instanceof lt&&ft(m,r,8)}}else i(p)&&E(p.slice(u,f),255,255,255,255)}function Et(t,e){switch(e){case T.TRIANGLES:return bt(t,gt);case T.TRIANGLE_STRIP:return mt(t);case T.TRIANGLE_FAN:return pt(t)}}function Tt(t){switch(t){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function Ct(t){return{horizontal:L(t.s),vertical:L(t.t)}}function L(t){switch(t){case C.CLAMP_TO_EDGE:return"clamp";case C.MIRRORED_REPEAT:return"mirror";case C.REPEAT:return"repeat"}}function d(t){return t**(1/Q)*255}function Rt(t,e){return K(d(t[0]),d(t[1]),d(t[2]),e)}function Mt(t){return U(d(t[0]),d(t[1]),d(t[2]))}export{Ft as loadGLTFMesh};
