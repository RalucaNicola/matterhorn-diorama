import{r as v,t as w}from"./index.25dca4c3.js";import{a as A,b as x,d as O}from"./PointCloudUniqueValueRenderer.f53cd7dd.js";import{I as R,g as S,f as V,c as B}from"./I3SBinaryReader.27097d23.js";function $(l,t,u,s){const{rendererJSON:d,isRGBRenderer:p}=l;let r=null,i=null;if(t&&p)r=t;else if(t&&d.type==="pointCloudUniqueValueRenderer"){i=A.fromJSON(d);const e=i.colorUniqueValueInfos;r=new Uint8Array(3*s);const c=m(i.fieldTransformType);for(let o=0;o<s;o++){const f=(c?c(t[o]):t[o])+"";for(let n=0;n<e.length;n++)if(e[n].values.includes(f)){r[3*o]=e[n].color.r,r[3*o+1]=e[n].color.g,r[3*o+2]=e[n].color.b;break}}}else if(t&&d.type==="pointCloudStretchRenderer"){i=x.fromJSON(d);const e=i.stops;r=new Uint8Array(3*s);const c=m(i.fieldTransformType);for(let o=0;o<s;o++){const f=c?c(t[o]):t[o],n=e.length-1;if(f<e[0].value)r[3*o]=e[0].color.r,r[3*o+1]=e[0].color.g,r[3*o+2]=e[0].color.b;else if(f>=e[n].value)r[3*o]=e[n].color.r,r[3*o+1]=e[n].color.g,r[3*o+2]=e[n].color.b;else for(let a=1;a<e.length;a++)if(f<e[a].value){const b=(f-e[a-1].value)/(e[a].value-e[a-1].value);r[3*o]=e[a].color.r*b+e[a-1].color.r*(1-b),r[3*o+1]=e[a].color.g*b+e[a-1].color.g*(1-b),r[3*o+2]=e[a].color.b*b+e[a-1].color.b*(1-b);break}}}else if(t&&d.type==="pointCloudClassBreaksRenderer"){i=O.fromJSON(d);const e=i.colorClassBreakInfos;r=new Uint8Array(3*s);const c=m(i.fieldTransformType);for(let o=0;o<s;o++){const f=c?c(t[o]):t[o];for(let n=0;n<e.length;n++)if(f>=e[n].minValue&&f<=e[n].maxValue){r[3*o]=e[n].color.r,r[3*o+1]=e[n].color.g,r[3*o+2]=e[n].color.b;break}}}else{r=new Uint8Array(3*s);for(let e=0;e<r.length;e++)r[e]=255}if(u&&i&&i.colorModulation){const e=i.colorModulation.minValue,c=i.colorModulation.maxValue,o=.3;for(let f=0;f<s;f++){const n=u[f],a=n>=c?1:n<=e?o:o+(1-o)*(n-e)/(c-e);r[3*f]=a*r[3*f],r[3*f+1]=a*r[3*f+1],r[3*f+2]=a*r[3*f+2]}}return r}function F(l,t){if(l.encoding==null||l.encoding===""){const u=S(t,l);if(w(u.vertexAttributes.position))return;const s=V(t,u.vertexAttributes.position),d=u.header.fields,p=[d.offsetX,d.offsetY,d.offsetZ],r=[d.scaleX,d.scaleY,d.scaleZ],i=s.length/3,e=new Float64Array(3*i);for(let c=0;c<i;c++)e[3*c]=s[3*c]*r[0]+p[0],e[3*c+1]=s[3*c+1]*r[1]+p[1],e[3*c+2]=s[3*c+2]*r[2]+p[2];return e}if(l.encoding==="lepcc-xyz")return B(t).result}function J(l,t,u){return v(l)&&l.attributeInfo.useElevation?I(t,u):v(l)?R(l.attributeInfo.storageInfo,l.buffer,u):null}function I(l,t){const u=new Float64Array(t);for(let s=0;s<t;s++)u[s]=l[3*s+2];return u}function N(l,t,u,s,d){const p=l.length/3;let r=0;for(let i=0;i<p;i++){let e=!0;for(let c=0;c<s.length&&e;c++){const{filterJSON:o}=s[c],f=d[c].values[i];switch(o.type){case"pointCloudValueFilter":{const n=o.mode==="exclude";o.values.includes(f)===n&&(e=!1);break}case"pointCloudBitfieldFilter":{const n=k(o.requiredSetBits),a=k(o.requiredClearBits);(f&n)===n&&(f&a)==0||(e=!1);break}case"pointCloudReturnFilter":{const n=15&f,a=f>>>4&15,b=a>1,C=n===1,y=n===a;let h=!1;for(const g of o.includedReturns)if(g==="last"&&y||g==="firstOfMany"&&C&&b||g==="lastOfMany"&&y&&b||g==="single"&&!b){h=!0;break}h||(e=!1);break}}}e&&(u[r]=i,l[3*r]=l[3*i],l[3*r+1]=l[3*i+1],l[3*r+2]=l[3*i+2],t[3*r]=t[3*i],t[3*r+1]=t[3*i+1],t[3*r+2]=t[3*i+2],r++)}return r}function m(l){return l==null||l==="none"?null:l==="low-four-bit"?t=>15&t:l==="high-four-bit"?t=>(240&t)>>4:l==="absolute-value"?t=>Math.abs(t):l==="modulo-ten"?t=>t%10:null}function k(l){let t=0;for(const u of l||[])t|=1<<u;return t}export{J as a,F as c,I as d,$ as f,N as m};