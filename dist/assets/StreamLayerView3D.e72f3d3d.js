import{e as r,d as o,n as l,eG as S,eF as b,y as O,iw as $,r as d,g as x,eN as G,dC as R,dD as E,k as M,q as T,I as U,D as V}from"./index.25dca4c3.js";import{t as k,h as F}from"./createConnection.e1836d1b.js";import{s as L}from"./EventedSet.d2302455.js";import{v as N}from"./FeatureLikeLayerView3D.354fcf9d.js";import"./Graphics3DFeatureProcessor.a874bce4.js";import"./Graphics3DScaleVisibility.524687fd.js";import"./optimizedFeatureQueryEngineAdapter.163a3827.js";import"./centroid.50387db0.js";import"./PooledRBush.97be3399.js";import"./quickselect.03306040.js";import"./Graphics3DObjectStates.43198164.js";import"./floorFilterUtils.23f5aee3.js";import"./QueryEngine.bb4ddfcc.js";import"./WhereClause.d7766590.js";import"./json.d1a0fa35.js";import"./QueryEngineCapabilities.c2e9875c.js";import"./utils.260312b7.js";import"./ClassBreaksDefinition.9835d418.js";import"./attributeUtils.99d8ee08.js";import"./FeatureStore.cd603f50.js";import"./heatmapUtils.870250d0.js";import"./projectExtentUtils.a4abbe1e.js";const j=2500;let c=class extends x{getObjectId(){return this.objectId}};r([o({type:Number,json:{read:!0}})],c.prototype,"objectId",void 0),c=r([l("esri.layers.graphics.controllers.StreamGraphic")],c);class C{constructor(t){this.onUpdate=t,this._idToGraphic=new Map}destroy(){this._idToGraphic.clear()}add(t){this._idToGraphic.set(t.objectId,t)}get(t){return this._idToGraphic.get(t)}forEach(t){this._idToGraphic.forEach(t)}removeById(t){const i=this._idToGraphic.get(t);return i?(i.sourceLayer=i.layer=null,this._idToGraphic.delete(t),i):null}update(t,i){this.onUpdate(t,i)}get size(){return this._idToGraphic.size}}let n=class extends S(b(O)){constructor(){super(...arguments),this._updateInfo={websocket:0,client:0},this.graphics=new L}initialize(){this.addResolvingPromise(this.layer.when(()=>this._startup()))}destroy(){this.clear()}_clearInterval(){this._updateIntervalId&&(clearInterval(this._updateIntervalId),this._updateIntervalId=0)}clear(){this._clearInterval(),this.connection&&(this.connection.destroy(),this.connection=null),this.store&&(this.store.destroy(),this.store=null),this.graphics.clear(),this.handles.removeAll()}get updating(){return!this.connection||this.connection.connectionStatus==="connected"}_startup(){const{parsedUrl:e,spatialReference:t,definitionExpression:i,geometryDefinition:a,objectIdField:h,timeInfo:p,purgeOptions:y,maxReconnectionAttempts:m,maxReconnectionInterval:f,customParameters:v}=this.layer,_=$.toJSON(this.layer.geometryType),g=t,u=this.layerView.view.spatialReference,I={geometry:a,where:i};this.clear(),this._set("connection",k(e,g,u,_,I,m,f,v)),this._outSpatialReference=u.toJSON(),this.store=new C(this._onUpdate.bind(this)),this.featuresManager=new F(this.store,h,p.toJSON(),y),this.handles.add([this.connection.on("feature",w=>this._onFeature(w)),this.layer.watch("definitionExpression",()=>this._startup()),this.layer.watch("geometryDefinition",()=>this._startup()),this.layer.watch("purgeOptions",()=>this._startup())]),this._initUpdateInterval()}_onFeature(e){this._updateInfo.websocket++,this.layerView.hasEventListener("data-received")&&this.layerView.emit("data-received",{attributes:e.attributes,centroid:e.centroid,geometry:e.geometry});try{d(e.geometry)&&!e.geometry.spatialReference&&(e.geometry.spatialReference=this._outSpatialReference);const t=c.fromJSON(e);t.sourceLayer=t.layer=this.layer,this.featuresManager.add(t)}catch{}}_onUpdate(e,t){d(t)&&this.graphics.removeMany(t),d(e)&&(this._updateInfo.client+=e.length,this.graphics.addMany(e))}_initUpdateInterval(){this._clearInterval();const{updateInterval:e}=this.layer;let t=performance.now();this._updateIntervalId=setInterval(()=>{const i=performance.now(),a=i-t;if(a>j){t=i;const h=Math.round(this._updateInfo.client/(a/1e3)),p=Math.round(this._updateInfo.websocket/(a/1e3));this._updateInfo.client=0,this._updateInfo.websocket=0,this.layerView.emit("update-rate",{client:h,websocket:p})}this.featuresManager.checkForUpdates()},e)}pauseStream(){this._clearInterval()}resumeStream(){this._initUpdateInterval()}};r([o()],n.prototype,"connection",void 0),r([o()],n.prototype,"layer",void 0),r([o()],n.prototype,"layerView",void 0),r([o({readOnly:!0})],n.prototype,"updating",null),n=r([l("esri.layers.graphics.controllers.StreamController")],n);const D=e=>{let t=class extends e{constructor(...i){super(...i),this.connectionError=null,this.connectionStatus="disconnected",this.filter=null}};return r([o({readOnly:!0})],t.prototype,"connectionError",void 0),r([o({aliasOf:"controller.connection.connectionStatus",readOnly:!0})],t.prototype,"connectionStatus",void 0),r([o({type:G})],t.prototype,"filter",void 0),t=r([l("esri.layers.mixins.StreamLayerView")],t),t};let s=class extends D(N(R(E))){constructor(){super(...arguments),this.type="stream-3d",this.updatePolicy=M.ASYNC,this.hasZ=!0,this.hasM=!1}initialize(){this.handles.add(T(()=>this.suspended,e=>{this.controller&&(e?this.controller.pauseStream():this.controller.resumeStream())}))}get connectionError(){const e=this.get("controller.connection.errorString");if(e)return new U("stream-controller",e)}createQuery(){return new V({outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference})}queryLatestObservations(e,t){return this.queryEngine.executeQueryForLatestObservations(this._ensureQuery(e),t==null?void 0:t.signal)}createController(){return new n({layer:this.layer,layerView:this})}beforeSetController(){}};r([o({readOnly:!0})],s.prototype,"updatePolicy",void 0),r([o({readOnly:!0})],s.prototype,"connectionError",null),r([o()],s.prototype,"controller",void 0),r([o({readOnly:!0})],s.prototype,"hasZ",void 0),r([o({readOnly:!0})],s.prototype,"hasM",void 0),s=r([l("esri.views.3d.layers.StreamLayerView3D")],s);const lt=s;export{lt as default};