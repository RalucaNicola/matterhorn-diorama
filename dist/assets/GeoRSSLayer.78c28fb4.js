var h=Object.defineProperty;var y=Object.getOwnPropertySymbols;var c=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var u=(e,t,o)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,d=(e,t)=>{for(var o in t||(t={}))c.call(t,o)&&u(e,o,t[o]);if(y)for(var o of y(t))v.call(t,o)&&u(e,o,t[o]);return e};import{p2 as m,pd as S,p4 as f,p5 as g,p3 as b,p8 as C,z as G,d8 as w,r as _,cp as x,bF as F,pr as P,dt as R,e as s,d as i,fg as j,am as k,pj as $,ps as E,pl as M,n as L,hs as n,pt as O,pu as T,pv as D,S as z}from"./index.165b2b59.js";const A=["atom","xml"],U={base:n,key:"type",typeMap:{"simple-line":O},errorContext:"symbol"},q={base:n,key:"type",typeMap:{"picture-marker":T,"simple-marker":D},errorContext:"symbol"},I={base:n,key:"type",typeMap:{"simple-fill":z},errorContext:"symbol"};let r=class extends m(S(f(g(b(C(G)))))){constructor(...e){super(...e),this.description=null,this.fullExtent=null,this.legendEnabled=!0,this.lineSymbol=null,this.pointSymbol=null,this.polygonSymbol=null,this.operationalLayerType="GeoRSS",this.url=null,this.type="geo-rss"}normalizeCtorArgs(e,t){return typeof e=="string"?d({url:e},t):e}readFeatureCollections(e,t){return t.featureCollection.layers.forEach(o=>{var l;const a=o.layerDefinition.drawingInfo.renderer.symbol;a&&a.type==="esriSFS"&&(l=a.outline)!=null&&l.style.includes("esriSFS")&&(a.outline.style="esriSLSSolid")}),t.featureCollection.layers}get hasPoints(){return this._hasGeometry("esriGeometryPoint")}get hasPolylines(){return this._hasGeometry("esriGeometryPolyline")}get hasPolygons(){return this._hasGeometry("esriGeometryPolygon")}get title(){const e=this._get("title");return e&&this.originOf("title")!=="defaults"?e:this.url?w(this.url,A)||"GeoRSS":e||""}set title(e){this._set("title",e)}load(e){const t=_(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).catch(x).then(()=>this._fetchService(t)).then(o=>{this.read(o,{origin:"service"})})),Promise.resolve(this)}async hasDataChanged(){const e=await this._fetchService();return this.read(e,{origin:"service",ignoreDefaults:!0}),!0}async _fetchService(e){var t;const o=this.spatialReference,{data:l}=await F(R.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:P(o)?void 0:(t=o.wkid)!=null?t:JSON.stringify(o)},signal:e});return l}_hasGeometry(e){var t,o;return(t=(o=this.featureCollections)==null?void 0:o.some(l=>{var a,p;return((a=l.featureSet)==null?void 0:a.geometryType)===e&&((p=l.featureSet.features)==null?void 0:p.length)>0}))!=null&&t}};s([i()],r.prototype,"description",void 0),s([i()],r.prototype,"featureCollections",void 0),s([j("service","featureCollections",["featureCollection.layers"])],r.prototype,"readFeatureCollections",null),s([i({type:k,json:{name:"lookAtExtent"}})],r.prototype,"fullExtent",void 0),s([i($)],r.prototype,"id",void 0),s([i(E)],r.prototype,"legendEnabled",void 0),s([i({types:U,json:{write:!0}})],r.prototype,"lineSymbol",void 0),s([i({type:["show","hide"]})],r.prototype,"listMode",void 0),s([i({types:q,json:{write:!0}})],r.prototype,"pointSymbol",void 0),s([i({types:I,json:{write:!0}})],r.prototype,"polygonSymbol",void 0),s([i({type:["GeoRSS"]})],r.prototype,"operationalLayerType",void 0),s([i(M)],r.prototype,"url",void 0),s([i({json:{origins:{service:{read:{source:"name",reader:e=>e||void 0}}}}})],r.prototype,"title",null),s([i({readOnly:!0,json:{read:!1},value:"geo-rss"})],r.prototype,"type",void 0),r=s([L("esri.layers.GeoRSSLayer")],r);const B=r;export{B as default};
