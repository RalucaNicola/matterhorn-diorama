var N=Object.defineProperty,T=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var I=(e,t,i)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,E=(e,t)=>{for(var i in t||(t={}))L.call(t,i)&&I(e,i,t[i]);if(S)for(var i of S(t))H.call(t,i)&&I(e,i,t[i]);return e},O=(e,t)=>T(e,M(t));import{e as r,d as n,n as V,y as P,D as $,am as J,cJ as R,t as C,iw as D,a8 as U,u as k,r as h,az as F,ax as z,aF as y,aG as _,eN as B,A as Y,f as Z,i as K,k as W,p as Q,b as p,ix as G,C as g,g as q,w as X,x as ee,q as f,P as w,cx as te,aw as ie,aY as se,gL as re,e6 as ne,G as ae,H as le}from"./index.165b2b59.js";import{b as oe,V as ue}from"./Graphics3DScaleVisibility.465b9149.js";import{d as he,l as de,s as pe}from"./Graphics3DObjectStates.572dc844.js";import{o as ce}from"./floorFilterUtils.23f5aee3.js";import{V as ye}from"./QueryEngine.7ba4cf96.js";import{n as A}from"./attributeUtils.99d8ee08.js";const ge=ye;let u=class extends P{constructor(e){super(e),this._dataQueryEngineInstance=null}get queryGeometryType(){switch(this.layer.geometryType){case"multipoint":case"point":case"polygon":case"polyline":return this.layer.geometryType;case"mesh":return"polygon";default:return}}get defaultQueryJSON(){return new $({outSpatialReference:this.spatialReference}).toJSON()}get dataQueryEngine(){return this._ensureDataQueryEngine()}destroy(){this.clear()}clear(){return!!this._dataQueryEngineInstance&&(this._dataQueryEngineInstance.destroy(),this._dataQueryEngineInstance=null,!0)}async executeQueryForIdSet(e,t){return this.dataQueryEngine.executeQueryForIdSet(this._ensureQueryJSON(e),t)}async executeQueryForCount(e,t){return this.dataQueryEngine.executeQueryForCount(this._ensureQueryJSON(e),t)}async executeQueryForExtent(e,t){const{count:i,extent:s}=await this.dataQueryEngine.executeQueryForExtent(this._ensureQueryJSON(e),t);return{count:i,extent:J.fromJSON(s)}}async executeQueryForIds(e,t){return this.dataQueryEngine.executeQueryForIds(this._ensureQueryJSON(e),t)}async executeQueryForLatestObservations(e,t){const i=await this.dataQueryEngine.executeQueryForLatestObservations(this._ensureQueryJSON(e),t),s=R.fromJSON(i);return s.features.forEach(l=>{l.layer=this.layer,l.sourceLayer=this.layer}),s}async executeQuery(e,t){const i=await this.dataQueryEngine.executeQuery(this._ensureQueryJSON(e),t),s=R.fromJSON(i);return s.features.forEach(l=>{l.layer=this.layer,l.sourceLayer=this.layer}),s}_ensureQueryJSON(e){return C(e)?this.defaultQueryJSON:("outSpatialReference"in e&&!e.outSpatialReference&&(e.outSpatialReference=this.spatialReference),e.toJSON())}_ensureDataQueryEngine(){if(this._dataQueryEngineInstance)return this._dataQueryEngineInstance;const e="timeInfo"in this.layer&&this.layer.timeInfo&&this.layer.timeInfo.toJSON()||null,t=this.layer.objectIdField,i=D.toJSON(this.queryGeometryType),s=this.layer.fields.map(j=>j.toJSON()),l=this.layerView.view.resourceController.scheduler,o=this.priority,c=this.spatialReference.toJSON(),m=this.layerView.processor.featureStore,{hasZ:b,hasM:v}=this.layerView;return this._dataQueryEngineInstance=new ge({hasZ:b,hasM:v,geometryType:i,fields:s,timeInfo:e,spatialReference:c,objectIdField:t,featureStore:m,scheduler:l,priority:o}),this._dataQueryEngineInstance}};r([n({constructOnly:!0})],u.prototype,"layerView",void 0),r([n({constructOnly:!0})],u.prototype,"priority",void 0),r([n({readOnly:!0,aliasOf:"layerView.view.spatialReference"})],u.prototype,"spatialReference",void 0),r([n({readOnly:!0,aliasOf:"layerView.layer"})],u.prototype,"layer",void 0),r([n({readOnly:!0})],u.prototype,"queryGeometryType",null),r([n({readOnly:!0})],u.prototype,"defaultQueryJSON",null),u=r([V("esri.views.3d.layers.graphics.QueryEngine")],u);const fe=U.getLogger("esri.views.3d.layers.graphics.Graphics3DFilterVisibility");let d=class extends P{constructor(...e){super(...e),this._dirty=!1,this._querying=!1,this._handles=new k}get updating(){return this._dirty||this._querying||h(this._queryResult)}setup(e,t){this._layerView=e,this._core=t,this._objectIdField=e.layer.objectIdField,this._queryEngine=new u({layerView:this._layerView,priority:F.FILTER_VISIBILITY});const i=this._layerView.view.resourceController.scheduler;this._handles.add(i.registerTask(F.FILTER_VISIBILITY,this)),this._handles.add(z(()=>{var s;return(s=t.owner)==null?void 0:s.loadedGraphics},"change",s=>this._graphicsChanged(s),{onListenerAdd:()=>this.dirty=!0})),this.filterChanged()}destroy(){this._handles.destroy(),this._handles=null,this.clear(),this._layerView=null,this._core=null}clear(){this._queryEngine.clear()&&(this._core.modifyGraphics3DGraphicVisibilities(e=>e.clearVisibilityFlag(y.FILTER)),this._queryResult=null,this._querying=!1),this.dirty=!1}_graphicsChanged(e){(!this._queryEngine||e.added.length>0)&&(this.dirty=!0)}updateVisibility(e){this.active&&(e.hasVisibilityFlag(y.FILTER,_.GRAPHIC)||e.setVisibilityFlag(y.FILTER,!1,_.GRAPHIC),this.dirty=!0)}filterChanged(){const e=this._recomputeFilter();e!==this._filter&&(this._filter=e,this.dirty=!0)}get active(){return this._filter&&this._core.graphics3DGraphics.size>0}_recomputeFilter(){const e="filter"in this._layerView?this._layerView.filter:null,t="timeExtent"in this._layerView?this._layerView.timeExtent:null,i=ce(this._layerView);if(C(t)&&C(i))return e;const s=h(e)?e.clone():new B;if(h(t)&&(s.timeExtent=h(s.timeExtent)?s.timeExtent.intersection(t):t),h(i)){const l=s.where==null||s.where==="";s.where=l?i:`(${s.where}) AND (${i})`}return s}get running(){return this._dirty&&!this._querying||h(this._queryResult)}runTask(e){if(!this.active)return void this.clear();!this._dirty||this._querying||e.done||(this._querying=!0,this.dirty=!1,this._queryEngine.executeQueryForIdSet(this._filter).then(i=>{this._queryResult=i,this._querying=!1}).catch(i=>{if(!Y(i)){fe.warn("FeatureFilter query failed: "+i,{error:i});const s=new Set;this._core.graphics3DGraphics.forEach(l=>s.add(this._getFeatureId(l.graphic))),this._queryResult=s,this._querying=!1}}),e.madeProgress());const t=this._queryResult;h(t)&&!e.done&&(this._core.modifyGraphics3DGraphicVisibilities(i=>{if(e.done)return!1;const s=t.has(this._getFeatureId(i.graphic));return!!i.setVisibilityFlag(y.FILTER,s,_.GRAPHIC)&&(e.madeProgress(),!0)}),e.done||(this._queryResult=null))}_getFeatureId(e){return e.objectId==null?e.attributes[this._objectIdField]:e.objectId}set dirty(e){this._dirty=e}};r([n({readOnly:!0})],d.prototype,"updating",null),r([n({readOnly:!0})],d.prototype,"running",null),r([n()],d.prototype,"_dirty",void 0),r([n()],d.prototype,"_querying",void 0),r([n()],d.prototype,"_queryResult",void 0),d=r([V("esri.views.3d.layers.graphics.Graphics3DFilterVisibility")],d);let a=class extends Z{constructor(e){super(e),this.type="graphics-3d",this.elevationFeatureExpressionEnabled=!1,this.dataExtent=null,this.drapeSourceType=K.Features,this.preferredUpdatePolicy=W.ASYNC,this.suspendResumeExtent=null}normalizeCtorArgs(e){const t=e.frustumVisibilityEnabled?new he:null,i=e.scaleVisibilityEnabled?new oe:null,s=(e.filterVisibilityEnabled||e.timeExtentVisibilityEnabled)&&e.owner.layer.geometryType!=="multipatch"?new d:null,l=e.elevationAlignmentEnabled?new de:null,{owner:o,updateClippingExtent:c,dataExtent:m,elevationFeatureExpressionEnabled:b,preferredUpdatePolicy:v}=e;return{owner:o,updateClippingExtent:c,dataExtent:m,frustumVisibility:t,scaleVisibility:i,filterVisibility:s,elevationAlignment:l,elevationFeatureExpressionEnabled:b,preferredUpdatePolicy:v}}get featureSpatialReference(){return"featureSpatialReference"in this.owner?this.owner.featureSpatialReference:void 0}initialize(){const e=new ue({owner:this,layer:this.layer,preferredUpdatePolicy:this.preferredUpdatePolicy,elevationFeatureExpressionEnabled:this.elevationFeatureExpressionEnabled,graphicSymbolSupported:!1,hasZ:this.owner.hasZ,hasM:this.owner.hasM});this._set("graphicsCore",e),this.scaleVisibility&&this.updatingHandles.add(()=>this.layer.effectiveScaleRange,()=>this.scaleVisibility.layerMinMaxScaleChangeHandler()),this.filterVisibility&&(this.updatingHandles.add(()=>"filter"in this.owner&&this.owner.filter,()=>this.filterVisibility.filterChanged()),this.updatingHandles.add(()=>"timeExtent"in this.owner&&this.owner.timeExtent,()=>this.filterVisibility.filterChanged())),this.elevationAlignment&&this.updatingHandles.add(()=>this.layer.elevationInfo,(t,i)=>{Q(t,i)&&this.updatingHandles.addPromise(this.graphicsCore.elevationInfoChange())}),this.updatingHandles.add(()=>this.layer.labelsVisible,()=>this.graphicsCore.updateVisibilityInfo()),this.updatingHandles.add(()=>this.layer.labelingInfo,(t,i)=>{Q(t,i)&&this.graphicsCore.updateLabelingInfo()}),this.updatingHandles.add(()=>this.preferredUpdatePolicy,t=>this.graphicsCore.preferredUpdatePolicy=t)}destroy(){this.handles.removeAll(),this.updatingHandles.removeAll(),this._set("frustumVisibility",p(this.frustumVisibility)),this._set("scaleVisibility",p(this.scaleVisibility)),this._set("filterVisibility",p(this.filterVisibility)),this._set("elevationAlignment",p(this.elevationAlignment)),this._set("objectStates",p(this.objectStates)),this._set("graphicsCore",p(this.graphicsCore)),this._set("owner",null)}get layer(){return this.owner.layer}get suspendResumeExtentMode(){return"suspendResumeExtentMode"in this.owner?this.owner.suspendResumeExtentMode:"computed"}get scaleVisibilitySuspended(){var e;return(e=this.scaleVisibility)==null?void 0:e.suspended}get suspended(){return this.owner.suspended}get legendEnabled(){return!this.frustumVisibility.suspended}get suspendInfo(){var e,t;const i={};return(e=this.scaleVisibility)!=null&&e.suspended&&(i.outsideScaleRange=!0),(t=this.frustumVisibility)!=null&&t.suspended&&(i.outsideOfView=!0),i}get updating(){var e,t,i;return!!((e=this.graphicsCore)!=null&&e.updating||(t=this.frustumVisibility)!=null&&t.updating||(i=this.updatingHandles)!=null&&i.updating)}get updatingRemaining(){var e,t;return(e=(t=this.graphicsCore)==null?void 0:t.updatingRemaining)!=null?e:0}get featureStore(){var e;return(e=this.graphicsCore)==null?void 0:e.featureStore}get view(){return this.owner.view}get loadedGraphics(){return this.owner.loadedGraphics}get fullOpacity(){var e;return(e=this.owner)==null?void 0:e.fullOpacity}get filter(){return"filter"in this.owner?this.owner.filter:null}get slicePlaneEnabled(){return this.owner.slicePlaneEnabled}get updatePolicy(){return this.owner.updatePolicy}get graphics3DGraphics(){var e;return(e=this.graphicsCore)==null?void 0:e.graphics3DGraphics}get graphics3DGraphicsByObjectID(){var e;return(e=this.graphicsCore)==null?void 0:e.graphics3DGraphicsByObjectID}get symbolUpdateType(){var e;return(e=this.graphicsCore)==null?void 0:e.symbolUpdateType}get displayFeatureLimit(){var e;const t=this.view.resourceController.memoryController.memoryFactor,i=(e=this.graphicsCore)==null?void 0:e.displayFeatureLimit;if(t===1)return i;const s=Math.ceil(i.maximumNumberOfFeatures*t),l=Math.ceil(i.maximumTotalNumberOfFeatures*t),o=Math.ceil(i.minimumTotalNumberOfFeatures*t);return O(E({},i),{maximumNumberOfFeatures:s,maximumTotalNumberOfFeatures:l,minimumTotalNumberOfFeatures:o})}get usedMemory(){var e,t;return(e=(t=this.graphicsCore)==null?void 0:t.usedMemory)!=null?e:0}get usedMemoryPerFeature(){var e,t;return(e=(t=this.graphicsCore)==null?void 0:t.usedMemoryPerGraphic)!=null?e:0}get unprocessedMemoryEstimate(){var e,t;return(e=(t=this.graphicsCore)==null?void 0:t.unprocessedMemoryEstimate)!=null?e:0}get performanceInfo(){return{core:this.graphicsCore.performanceInfo,elevationUpdating:this.elevationAlignment.updating,visibilityFrustum:!this.frustumVisibility.suspended,visibilityScale:!this.scaleVisibility.suspended}}async setup(){this.frustumVisibility&&this.frustumVisibility.setup(this);const e=this.owner,t=this.owner.view.basemapTerrain,i=(s,l,o)=>this.graphicsCore.spatialIndex.queryGraphicUIDsInExtent(s,l,o);if(this.scaleVisibility&&this.scaleVisibility.setup(this,this.layer,i,this.graphicsCore,t),this.filterVisibility&&("filter"in e||"timeExtent"in e)&&this.filterVisibility.setup(e,this.graphicsCore),this.elevationAlignment){const s=e.view.elevationProvider;this.elevationAlignment.setup(this,i,this.graphicsCore,s)}this._set("objectStates",new pe(this.graphicsCore)),this._set("labeling",this.owner.view.labeler.addGraphicsOwner(this.graphicsCore,this.scaleVisibility)),this._set("deconfliction",e.view.deconflictor.addGraphicsOwner(this.graphicsCore)),await G(this.graphicsCore.setup({elevationAlignment:this.elevationAlignment,scaleVisibility:this.scaleVisibility,filterVisibility:this.filterVisibility,deconflictor:this.deconfliction,labeler:this.labeling,objectStates:this.objectStates})),this.updatingHandles.add(()=>this.layer.renderer,s=>this.updatingHandles.addPromise(this.graphicsCore.rendererChange(s))),this.updatingHandles.add(()=>e.fullOpacity,()=>this.graphicsCore.opacityChange()),this._setupSuspendResumeExtent(),this.updateClippingExtent&&(this.updatingHandles.add(()=>e.view.clippingArea,()=>this._updateClippingExtent()),this._updateClippingExtent()),this.graphicsCore.startCreateGraphics(),this.graphicsCore.labelsEnabled&&await G(this.graphicsCore.updateLabelingInfo())}maskOccludee(e){const{set:t,handle:i}=this.objectStates.acquireSet(g.MaskOccludee,null);return this.objectStates.setUid(t,e.uid),i}highlight(e,t){if(e instanceof $){const{set:i,handle:s}=this.objectStates.acquireSet(g.Highlight,t);return this.owner.queryObjectIds(e).then(l=>this.objectStates.setObjectIds(i,l)),s}if(typeof e=="number"||typeof e=="string")return this.highlight([e],t);if(e instanceof q)return this.highlight([e],t);if("toArray"in e&&(e=e.toArray()),Array.isArray(e)&&e.length>0){if(e[0]instanceof q){const i=e;if(A(this.layer.fieldsIndex,i[0].attributes,t)==null){const s=i.map(c=>c.uid),{set:l,handle:o}=this.objectStates.acquireSet(g.Highlight,null);return this.objectStates.setUids(l,s),o}e=i.map(s=>A(this.layer.fieldsIndex,s.attributes,t))}if(typeof e[0]=="number"||typeof e[0]=="string"){const i=e,{set:s,handle:l}=this.objectStates.acquireSet(g.Highlight,t);return this.objectStates.setObjectIds(s,i),l}}return me}whenGraphicBounds(e,t){var i;return(i=this.graphicsCore)==null?void 0:i.whenGraphicBounds(e,t)}computeAttachmentOrigin(e,t){var i;return(i=this.graphicsCore)==null?void 0:i.computeAttachmentOrigin(e,t)}notifyGraphicGeometryChanged(e){this.graphicsCore.notifyGraphicGeometryChanged(e)}notifyGraphicVisibilityChanged(e){this.graphicsCore.notifyGraphicVisibilityChanged(e)}getRenderingInfo(e,t,i){const s=X(e,{renderer:t,arcade:i});if(h(s)&&s.color){const l=s.color;l[0]=l[0]/255,l[1]=l[1]/255,l[2]=l[2]/255}return s}getRenderingInfoAsync(e,t,i,s){return ee(e,E({renderer:t,arcade:i},s))}getSymbolLayerSize(e,t){var i;return(i=this.graphicsCore)==null?void 0:i.getSymbolLayerSize(e,t)}setObjectIdVisibility(e,t){var i;(i=this.graphicsCore)==null||i.setObjectIdVisibility(e,t)}_updateClippingExtent(){const e=this.owner.view.clippingArea;this.graphicsCore.setClippingExtent(e,this.owner.view.spatialReference)&&(this.updateClippingExtent(e)||this.graphicsCore.recreateAllGraphics())}_setupSuspendResumeExtent(){(this.frustumVisibility||this.scaleVisibility)&&this.handles.add(f(()=>this.suspendResumeExtentMode,()=>{switch(this.handles.remove(x),this.suspendResumeExtentMode){case"computed":this.handles.add([f(()=>this.graphicsCore.computedExtent,e=>this._updateSuspendResumeExtent(e),w),f(()=>this.graphicsCore.extentPadding,()=>this._updateSuspendResumeExtent(this.graphicsCore.computedExtent))],x);break;case"data":this.handles.add([ie(()=>this.dataExtent,e=>this._updateSuspendResumeExtent(e),w),f(()=>this.graphicsCore.extentPadding,()=>this._updateSuspendResumeExtent(se(this.dataExtent)))],x);break;default:te(this.suspendResumeExtentMode)}},w))}_updateSuspendResumeExtent(e){e?this._suspendResumeExtentChanged(this._extentToSuspendResumeRect(e,this.suspendResumeExtent)):this._suspendResumeExtentChanged(null)}_extentToSuspendResumeRect(e,t){const i=this.owner.view.spatialReference;if(!e.spatialReference.equals(i)){if(!re(e,i))return;e=ne(e,i)}return ae(e,t,le,this.graphicsCore.extentPadding)}_suspendResumeExtentChanged(e){this.frustumVisibility&&this.frustumVisibility.setExtent(e),this.scaleVisibility&&this.scaleVisibility.setExtent(e)}};r([n()],a.prototype,"type",void 0),r([n({constructOnly:!0})],a.prototype,"owner",void 0),r([n()],a.prototype,"layer",null),r([n({constructOnly:!0})],a.prototype,"updateClippingExtent",void 0),r([n({constructOnly:!0})],a.prototype,"elevationFeatureExpressionEnabled",void 0),r([n({constructOnly:!0})],a.prototype,"graphicsCore",void 0),r([n({constructOnly:!0})],a.prototype,"scaleVisibility",void 0),r([n({constructOnly:!0})],a.prototype,"filterVisibility",void 0),r([n({constructOnly:!0})],a.prototype,"elevationAlignment",void 0),r([n({constructOnly:!0})],a.prototype,"frustumVisibility",void 0),r([n({readOnly:!0})],a.prototype,"deconfliction",void 0),r([n({readOnly:!0})],a.prototype,"labeling",void 0),r([n({readOnly:!0})],a.prototype,"objectStates",void 0),r([n()],a.prototype,"suspendResumeExtentMode",null),r([n()],a.prototype,"dataExtent",void 0),r([n()],a.prototype,"scaleVisibilitySuspended",null),r([n()],a.prototype,"suspended",null),r([n()],a.prototype,"legendEnabled",null),r([n()],a.prototype,"suspendInfo",null),r([n()],a.prototype,"updating",null),r([n()],a.prototype,"updatingRemaining",null),r([n()],a.prototype,"featureStore",null),r([n()],a.prototype,"view",null),r([n()],a.prototype,"loadedGraphics",null),r([n()],a.prototype,"fullOpacity",null),r([n()],a.prototype,"filter",null),r([n()],a.prototype,"slicePlaneEnabled",null),r([n()],a.prototype,"drapeSourceType",void 0),r([n()],a.prototype,"updatePolicy",null),r([n()],a.prototype,"preferredUpdatePolicy",void 0),r([n()],a.prototype,"displayFeatureLimit",null),a=r([V("esri.views.3d.layers.graphics.Graphics3DFeatureProcessor")],a);const Ve=a,x="suspendResumeExtentMode",me={remove(){},pause(){},resume(){}};export{Ve as I,u as l};
