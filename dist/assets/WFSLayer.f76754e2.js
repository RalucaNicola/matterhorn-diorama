var C=Object.defineProperty,N=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var b=(e,t,o)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,c=(e,t)=>{for(var o in t||(t={}))J.call(t,o)&&b(e,o,t[o]);if(S)for(var o of S(t))_.call(t,o)&&b(e,o,t[o]);return e},F=(e,t)=>N(e,U(t));import{eG as W,cS as k,cT as D,r as q,cJ as X,am as R,I as Y,aY as L,iw as m,aC as Q,jG as z,a6 as G,e as i,d as r,n as T,pw as V,px as B,py as M,p2 as A,pz as H,pd as K,p3 as Z,p4 as ee,p5 as te,p8 as ie,z as re,cX as $,pA as I,pB as se,hv as P,cW as oe,cN as ae,fl as ne,D as y,pi as le,pC as pe,gE as de,pD as ue,pE as ye,pF as ce,ps as me,fh as x,qz as fe,fo as he,fp as ge,pH as we,fn as ve,pI as Fe,pl as Oe,fr as Se}from"./index.165b2b59.js";import{c as be,n as Ie}from"./clientSideDefaults.b5bf6083.js";import{D as xe,X as je,z as qe,W as Re,v as Te}from"./wfsUtils.12ac5f63.js";import"./QueryEngineCapabilities.c2e9875c.js";import"./geojson.a00a0c1d.js";import"./xmlUtils.986ddba5.js";let d=class extends W(k){constructor(){super(...arguments),this.capabilities=be(!1,!1),this.type="wfs",this.refresh=D(async e=>{await this.load();const{extent:t}=await this._connection.invoke("refresh",e);return this.sourceJSON.extent=t,{dataChanged:!0,updates:{extent:this.sourceJSON.extent}}})}load(e){var t;const o=(t=q(e)&&e.signal)!=null?t:null;return this.addResolvingPromise(this._startWorker({signal:o})),Promise.resolve(this)}destroy(){var e;(e=this._connection)==null||e.close(),this._connection=null}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(e,t={}){await this.load(t);const o=await this._connection.invoke("queryFeatures",e?e.toJSON():null,t);return X.fromJSON(o)}async queryFeaturesJSON(e,t={}){return await this.load(t),this._connection.invoke("queryFeatures",e?e.toJSON():null,t)}async queryFeatureCount(e,t={}){return await this.load(t),this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)}async queryObjectIds(e,t={}){return await this.load(t),this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)}async queryExtent(e,t={}){await this.load(t);const o=await this._connection.invoke("queryExtent",e?e.toJSON():null,t);return{count:o.count,extent:R.fromJSON(o.extent)}}async querySnapping(e,t={}){return await this.load(t),this._connection.invoke("querySnapping",e,t)}async _createLoadOptions(e){const{url:t,customParameters:o,name:n,namespaceUri:l,spatialReference:a,fields:u,geometryType:f,swapXY:h}=this.layer;if(!t)throw new Y("wfs-layer:missing-url","WFSLayer must be created with a url");this.wfsCapabilities||(this.wfsCapabilities=await xe(t,c({customParameters:o},e)));const g=["fields","geometryType","name","namespaceUri","spatialReference","swapXY"].some(v=>this.layer[v]==null),p=g?await je(this.wfsCapabilities,n,l,{spatialReference:a,customParameters:o,signal:e==null?void 0:e.signal}):F(c({},qe(u)),{geometryType:f,name:n,namespaceUri:l,spatialReference:a,swapXY:h}),w=L(Re(this.wfsCapabilities.readFeatureTypes(),p.name,p.namespaceUri)),E=m.toJSON(p.geometryType);return{customParameters:o,featureType:w,fields:p.fields.map(v=>v.toJSON()),geometryField:p.geometryField,geometryType:E,getFeatureUrl:this.wfsCapabilities.operations.GetFeature.url,getFeatureOutputFormat:this.wfsCapabilities.operations.GetFeature.outputFormat,objectIdField:p.objectIdField,spatialReference:p.spatialReference.toJSON(),swapXY:p.swapXY}}async _startWorker(e){const[t,o]=await Q([this._createLoadOptions(e),z("WFSSourceWorker",F(c({},e),{strategy:G("feature-layers-workers")?"dedicated":"local"}))]),n=t.error||o.error||null,l=o.value||null;if(n)throw l&&l.close(),n;const a=t.value;this._connection=o.value;const{extent:u}=await this._connection.invoke("load",a,e);this.sourceJSON={extent:u,fields:a.fields,geometryType:a.geometryType,objectIdField:a.objectIdField,geometryField:a.geometryField,drawingInfo:Ie(a.geometryType),name:a.featureType.title,wfsInfo:{name:a.featureType.name,featureUrl:a.getFeatureUrl,maxFeatures:3e3,swapXY:a.swapXY,supportedSpatialReferences:a.featureType.supportedSpatialReferences,version:"2.0.0",wfsNamespace:a.featureType.namespaceUri}}}};i([r()],d.prototype,"capabilities",void 0),i([r({constructOnly:!0})],d.prototype,"layer",void 0),i([r()],d.prototype,"sourceJSON",void 0),i([r()],d.prototype,"type",void 0),i([r()],d.prototype,"wfsCapabilities",void 0),d=i([T("esri.layers.graphics.sources.WFSSource")],d);var O;const j=Se();let s=O=class extends V(B(M(A(H(K(Z(ee(te(ie(re)))))))))){constructor(e){super(e),this.capabilities=null,this.copyright=null,this.customParameters=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.featureUrl=void 0,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="WFS",this.maxFeatures=3e3,this.mode=0,this.name=null,this.namespaceUri=null,this.outFields=null,this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new d({layer:this}),this.spatialReference=$.WGS84,this.spatialReferences=[4326],this.swapXY=void 0,this.title="WFS",this.type="wfs",this.url=null,this.version=void 0}static fromWFSLayerInfo(e){const{customParameters:t,fields:o,geometryField:n,geometryType:l,name:a,namespaceUri:u,objectIdField:f,spatialReference:h,swapXY:g,url:p,wfsCapabilities:w}=e;return new O({customParameters:t,fields:o,geometryField:n,geometryType:l,name:a,namespaceUri:u,objectIdField:f,spatialReference:h,swapXY:g,url:p,wfsCapabilities:w})}destroy(){var e;(e=this.source)==null||e.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WFS"]},e).then(()=>this.source.load(e)).then(()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo","spatialReference","name","namespaceUri"],"service"),I(this.renderer,this.fieldsIndex),se(this.timeInfo,this.fieldsIndex)})),Promise.resolve(this)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}writeFields(e,t,o){const n=e.filter(l=>l.name!==Te);this.geometryField&&n.unshift(new P({name:this.geometryField,alias:this.geometryField,type:"geometry"})),oe(o,n.map(l=>l.toJSON()),t)}get parsedUrl(){return this.url?ae(this.url):null}set renderer(e){I(e,this.fieldsIndex),this._set("renderer",e)}createPopupTemplate(e){return ne(this,e)}createQuery(){const e=new y;e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:t,timeExtent:o}=this;return e.timeExtent=t!=null&&o!=null?o.offset(-t.value,t.unit):o||null,e}getFieldDomain(e,t){var o;return(o=this.getField(e))==null?void 0:o.domain}getField(e){return this.fieldsIndex.get(e)}queryFeatures(e,t){return this.load().then(()=>this.source.queryFeatures(y.from(e)||this.createQuery(),t)).then(o=>{if(o!=null&&o.features)for(const n of o.features)n.layer=n.sourceLayer=this;return o})}queryObjectIds(e,t){return this.load().then(()=>this.source.queryObjectIds(y.from(e)||this.createQuery(),t))}queryFeatureCount(e,t){return this.load().then(()=>this.source.queryFeatureCount(y.from(e)||this.createQuery(),t))}queryExtent(e,t){return this.load().then(()=>this.source.queryExtent(y.from(e)||this.createQuery(),t))}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh(this.customParameters);return q(t)&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}};i([r({readOnly:!0,aliasOf:"source.capabilities"})],s.prototype,"capabilities",void 0),i([r({type:String})],s.prototype,"copyright",void 0),i([r({readOnly:!0})],s.prototype,"createQueryVersion",null),i([r({json:{name:"wfsInfo.customParameters",write:{ignoreOrigin:!0}}})],s.prototype,"customParameters",void 0),i([r({readOnly:!0})],s.prototype,"defaultPopupTemplate",null),i([r({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],s.prototype,"definitionExpression",void 0),i([r({type:String})],s.prototype,"displayField",void 0),i([r(le)],s.prototype,"elevationInfo",void 0),i([r(pe)],s.prototype,"featureReduction",void 0),i([r({type:String,readOnly:!0,json:{name:"wfsInfo.featureUrl",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"featureUrl",void 0),i([r({type:[P],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],s.prototype,"fields",void 0),i([de("fields")],s.prototype,"writeFields",null),i([r(j.fieldsIndex)],s.prototype,"fieldsIndex",void 0),i([r({type:R,json:{name:"extent"}})],s.prototype,"fullExtent",void 0),i([r()],s.prototype,"geometryField",void 0),i([r({type:String,json:{read:{source:"layerDefinition.geometryType",reader:m.read},write:{target:"layerDefinition.geometryType",writer:m.write,ignoreOrigin:!0},origins:{service:{read:m.read}}}})],s.prototype,"geometryType",void 0),i([r({type:String})],s.prototype,"id",void 0),i([r(ue)],s.prototype,"labelsVisible",void 0),i([r({type:[ye],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:ce},write:!0}})],s.prototype,"labelingInfo",void 0),i([r(me)],s.prototype,"legendEnabled",void 0),i([r({type:["show","hide"]})],s.prototype,"listMode",void 0),i([r({type:String})],s.prototype,"objectIdField",void 0),i([r({type:["WFS"]})],s.prototype,"operationalLayerType",void 0),i([r({type:x,json:{name:"wfsInfo.maxFeatures",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"maxFeatures",void 0),i([r({type:[0],readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],s.prototype,"mode",void 0),i([r({type:String,json:{name:"wfsInfo.name",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"name",void 0),i([r({type:String,json:{name:"wfsInfo.wfsNamespace",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"namespaceUri",void 0),i([r(fe)],s.prototype,"opacity",void 0),i([r(j.outFields)],s.prototype,"outFields",void 0),i([r({readOnly:!0})],s.prototype,"parsedUrl",null),i([r(he)],s.prototype,"popupEnabled",void 0),i([r({type:ge,json:{name:"popupInfo",write:!0}})],s.prototype,"popupTemplate",void 0),i([r({types:we,json:{origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:ve,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:{ignoreOrigin:!0}}})],s.prototype,"renderer",null),i([r(Fe)],s.prototype,"screenSizePerspectiveEnabled",void 0),i([r({readOnly:!0})],s.prototype,"source",void 0),i([r({type:$,json:{name:"layerDefinition.spatialReference",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"extent.spatialReference"}}}})],s.prototype,"spatialReference",void 0),i([r({readOnly:!0,type:[x],json:{name:"wfsInfo.supportedSpatialReferences",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"spatialReferences",void 0),i([r({type:Boolean,value:!1,json:{name:"wfsInfo.swapXY",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"swapXY",void 0),i([r({json:{write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"name"}}}})],s.prototype,"title",void 0),i([r({json:{read:!1},readOnly:!0})],s.prototype,"type",void 0),i([r(Oe)],s.prototype,"url",void 0),i([r({type:String,readOnly:!0,json:{name:"wfsInfo.version",write:{ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"version",void 0),i([r({aliasOf:"source.wfsCapabilities"})],s.prototype,"wfsCapabilities",void 0),s=O=i([T("esri.layers.WFSLayer")],s);const _e=s;export{_e as default};
