import{p5 as i,p8 as l,z as p,b3 as y,I as u,e as o,d as t,n as d}from"./index.165b2b59.js";let e=class extends i(l(p)){constructor(r){super(r),this.resourceInfo=null,this.type="unknown"}initialize(){this.addResolvingPromise(new Promise((r,n)=>{y(()=>{const s=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let a="Unknown layer type";s&&(a+=" "+s),n(new u("layer:unknown-layer-type",a,{layerType:s}))})}))}read(r,n){super.read({resourceInfo:r},n)}write(){return null}};o([t({readOnly:!0})],e.prototype,"resourceInfo",void 0),o([t({type:["show","hide"]})],e.prototype,"listMode",void 0),o([t({json:{read:!1},readOnly:!0,value:"unknown"})],e.prototype,"type",void 0),e=o([d("esri.layers.UnknownLayer")],e);const w=e;export{w as default};
