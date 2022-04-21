var P=Object.defineProperty;var I=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var M=(t,e,r)=>e in t?P(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,E=(t,e)=>{for(var r in e||(e={}))F.call(e,r)&&M(t,r,e[r]);if(I)for(var r of I(e))k.call(e,r)&&M(t,r,e[r]);return t};import{hv as _,e as o,d as s,n as $,S as z,pt as B,pv as R,m as W,p2 as A,p3 as Q,p4 as X,p5 as q,p8 as H,z as K,cX as h,E as J,d4 as Y,cu as L,am as T,g as U,t as b,I as V,r as x,cW as Z,cv as ee,eQ as D,fg as c,gE as te,qe as re,gK as oe,aX as ie,jy as ae,g2 as le,ck as ne}from"./index.165b2b59.js";import{n as se}from"./objectIdUtils.d853187a.js";function v(t){return t.layers.some(e=>e.layerDefinition.visibilityField!=null)}const j=new _({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),ye=new _({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0});let f=class extends re{constructor(t){super(t),this.visibilityMode="inherited"}initialize(){for(const t of this.graphics)t.sourceLayer=this.layer;this.graphics.on("after-add",t=>{t.item.sourceLayer=this.layer}),this.graphics.on("after-remove",t=>{t.item.sourceLayer=null})}get sublayers(){return this.graphics}};o([s({readOnly:!0})],f.prototype,"sublayers",null),o([s()],f.prototype,"layer",void 0),o([s()],f.prototype,"layerId",void 0),o([s({readOnly:!0})],f.prototype,"visibilityMode",void 0),f=o([$("esri.layers.MapNotesLayer.MapNotesSublayer")],f);const C=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",id:"polygonLayer",layerId:0,title:"Polygons",identifyingSymbol:new z().toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",id:"polylineLayer",layerId:1,title:"Polylines",identifyingSymbol:new B().toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",id:"multipointLayer",layerId:2,title:"Multipoints",identifyingSymbol:new R().toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"pointLayer",layerId:3,title:"Points",identifyingSymbol:new R().toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"textLayer",layerId:4,title:"Text",identifyingSymbol:new W().toJSON()}];let i=class extends A(Q(X(q(H(K))))){constructor(t){super(t),this.capabilities={operations:{supportsMapNotesEditing:!0}},this.featureCollections=null,this.featureCollectionJSON=null,this.featureCollectionType="notes",this.legendEnabled=!1,this.minScale=0,this.maxScale=0,this.spatialReference=h.WGS84,this.sublayers=new J(C.map(e=>new f({id:e.id,layerId:e.layerId,title:e.title,layer:this}))),this.title="Map Notes",this.type="map-notes",this.visibilityMode="inherited"}readCapabilities(t,e,r){return{operations:{supportsMapNotesEditing:!v(e)&&(r==null?void 0:r.origin)!=="portal-item"}}}readFeatureCollections(t,e,r){if(!v(e))return null;const a=e.layers.map(l=>{const n=new Y;return n.read(l,r),n});return new J({items:a})}readLegacyfeatureCollectionJSON(t,e){return v(e)?L(e.featureCollection):null}readFullExtent(t,e){if(!e.layers.length||e.layers.every(a=>!a.layerDefinition.extent))return new T({xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:h.WGS84});const r=h.fromJSON(e.layers[0].layerDefinition.spatialReference);return e.layers.reduce((a,l)=>{const n=l.layerDefinition.extent;return n?T.fromJSON(n).union(a):a},new T({spatialReference:r}))}readMinScale(t,e){for(const r of e.layers)if(r.layerDefinition.minScale!=null)return r.layerDefinition.minScale;return 0}readMaxScale(t,e){for(const r of e.layers)if(r.layerDefinition.maxScale!=null)return r.layerDefinition.maxScale;return 0}get multipointLayer(){return this._findSublayer("multipointLayer")}get pointLayer(){return this._findSublayer("pointLayer")}get polygonLayer(){return this._findSublayer("polygonLayer")}get polylineLayer(){return this._findSublayer("polylineLayer")}readSpatialReference(t,e){return e.layers.length?h.fromJSON(e.layers[0].layerDefinition.spatialReference):h.WGS84}readSublayers(t,e,r){if(v(e))return null;const a=[];let l=e.layers.reduce((y,u)=>{var d;return Math.max(y,(d=u.layerDefinition.id)!=null?d:-1)},-1)+1;for(const{layerDefinition:y,featureSet:u}of e.layers){var n,p;const d=(n=y.geometryType)!=null?n:u.geometryType,m=(p=y.id)!=null?p:l++,g=C.find(S=>{var w,O,N;return d===S.geometryTypeJSON&&((w=y.drawingInfo)==null||(O=w.renderer)==null||(N=O.symbol)==null?void 0:N.type)===S.identifyingSymbol.type});if(g){const S=new f({id:g.id,title:y.name,layerId:m,layer:this,graphics:u.features.map(({geometry:w,symbol:O,attributes:N,popupInfo:G})=>U.fromJSON({attributes:N,geometry:w,symbol:O,popupTemplate:G}))});a.push(S)}}return new J(a)}writeSublayers(t,e,r,a){const{minScale:l,maxScale:n}=this;if(b(t))return;const p=t.some(m=>m.graphics.length>0);if(!this.capabilities.operations.supportsMapNotesEditing){var y;p&&(a==null||(y=a.messages)==null||y.push(new V("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer")));return}const u=[];let d=this.spatialReference.toJSON();e:for(const m of t)for(const g of m.graphics)if(x(g.geometry)){d=g.geometry.spatialReference.toJSON();break e}for(const m of C){const g=t.find(S=>m.id===S.id);this._writeMapNoteSublayer(u,g,m,l,n,d,a)}Z("featureCollection.layers",u,e)}get textLayer(){return this._findSublayer("textLayer")}load(t){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},t)),Promise.resolve(this)}read(t,e){"featureCollection"in t&&(t=L(t),Object.assign(t,t.featureCollection)),super.read(t,e)}async beforeSave(){if(b(this.sublayers))return;let t=null;const e=[];for(const a of this.sublayers)for(const l of a.graphics)if(x(l.geometry)){const n=l.geometry;t?oe(n.spatialReference,t)||(ie(n.spatialReference,t)||ae()||await le(),l.geometry=ne(n,t)):t=n.spatialReference,e.push(l)}const r=await ee(e.map(a=>a.geometry));e.forEach((a,l)=>a.geometry=r[l])}_findSublayer(t){var e,r;return b(this.sublayers)?null:(e=(r=this.sublayers)==null?void 0:r.find(a=>a.id===t))!=null?e:null}_writeMapNoteSublayer(t,e,r,a,l,n,p){const y=[];if(!b(e)){for(const u of e.graphics)this._writeMapNote(y,u,r.geometryType,p);this._normalizeObjectIds(y,j),t.push({layerDefinition:{name:e.title,drawingInfo:{renderer:{type:"simple",symbol:L(r.identifyingSymbol)}},id:e.layerId,geometryType:r.geometryTypeJSON,minScale:a,maxScale:l,objectIdField:"OBJECTID",fields:[j.toJSON(),ye.toJSON()],spatialReference:n},featureSet:{features:y,geometryType:r.geometryTypeJSON}})}}_writeMapNote(t,e,r,a){if(b(e))return;const{geometry:l,symbol:n,popupTemplate:p}=e;if(b(l))return;var y,u;if(l.type!==r)return void(a==null||(y=a.messages)==null||y.push(new D("map-notes-layer:invalid-geometry-type",`Geometry "${l.type}" cannot be saved in "${r}" layer`,{graphic:e})));if(b(n))return void(a==null||(u=a.messages)==null||u.push(new D("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:e})));const d={attributes:E({},e.attributes),geometry:l.toJSON(),symbol:n.toJSON()};x(p)&&(d.popupInfo=p.toJSON()),t.push(d)}_normalizeObjectIds(t,e){const r=e.name;let a=se(r,t)+1;const l=new Set;for(const n of t){n.attributes||(n.attributes={});const{attributes:p}=n;(p[r]==null||l.has(p[r]))&&(p[r]=a++),l.add(p[r])}}};o([s({readOnly:!0})],i.prototype,"capabilities",void 0),o([c(["portal-item","web-map"],"capabilities",["layers"])],i.prototype,"readCapabilities",null),o([s({readOnly:!0})],i.prototype,"featureCollections",void 0),o([c(["web-map","portal-item"],"featureCollections",["layers"])],i.prototype,"readFeatureCollections",null),o([s({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],i.prototype,"featureCollectionJSON",void 0),o([c(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],i.prototype,"readLegacyfeatureCollectionJSON",null),o([s({readOnly:!0,json:{read:!1,write:{enabled:!0,ignoreOrigin:!0}}})],i.prototype,"featureCollectionType",void 0),o([s({json:{write:!1}})],i.prototype,"fullExtent",void 0),o([c(["web-map","portal-item"],"fullExtent",["layers"])],i.prototype,"readFullExtent",null),o([s({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return{enabled:this.featureCollectionJSON!=null}}}}}}})],i.prototype,"legendEnabled",void 0),o([s({type:["show","hide"]})],i.prototype,"listMode",void 0),o([s({type:Number,nonNullable:!0,json:{write:!1}})],i.prototype,"minScale",void 0),o([c(["web-map","portal-item"],"minScale",["layers"])],i.prototype,"readMinScale",null),o([s({type:Number,nonNullable:!0,json:{write:!1}})],i.prototype,"maxScale",void 0),o([c(["web-map","portal-item"],"maxScale",["layers"])],i.prototype,"readMaxScale",null),o([s({readOnly:!0})],i.prototype,"multipointLayer",null),o([s({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],i.prototype,"operationalLayerType",void 0),o([s({readOnly:!0})],i.prototype,"pointLayer",null),o([s({readOnly:!0})],i.prototype,"polygonLayer",null),o([s({readOnly:!0})],i.prototype,"polylineLayer",null),o([s({type:h})],i.prototype,"spatialReference",void 0),o([c(["web-map","portal-item"],"spatialReference",["layers"])],i.prototype,"readSpatialReference",null),o([s({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],i.prototype,"sublayers",void 0),o([c("web-map","sublayers",["layers"])],i.prototype,"readSublayers",null),o([te("web-map","sublayers")],i.prototype,"writeSublayers",null),o([s({readOnly:!0})],i.prototype,"textLayer",null),o([s()],i.prototype,"title",void 0),o([s({readOnly:!0,json:{read:!1}})],i.prototype,"type",void 0),i=o([$("esri.layers.MapNotesLayer")],i);const me=i;export{me as default};