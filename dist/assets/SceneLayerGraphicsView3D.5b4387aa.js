import{fz as z,a8 as W,dC as Y,P as G,q as Z,dZ as V,k as K,cw as X,az as J,b as y,B as ee,t as M,r as u,ju as te,b7 as L,f6 as re,aM as ie,bT as se,aN as ae,g as $,fy as R,aY as oe,hM as ne,eY as de,b8 as le,D as j,e as n,d,eN as ue,eP as he,n as ce,aj as pe,b4 as ge}from"./index.165b2b59.js";import{s as me,f as _e,c as ye}from"./I3SAttributeOverrides.0605c776.js";import{I as fe,l as be}from"./Graphics3DFeatureProcessor.e7510fc8.js";import{o as ve,c as xe,i as Ee,a as Ie,b as we}from"./SceneLayerView.9fa09ec4.js";import{T as Se,X as De,l as Oe,y as Ce}from"./I3SUtil.d2a6ab26.js";import{p as Ae}from"./DefinitionExpressionSceneLayerView.a6a70224.js";import{c as Ne}from"./PopupSceneLayerView.97efc78c.js";import"./I3SNode.9e99c461.js";import"./I3SBinaryReader.c7169697.js";import"./Graphics3DScaleVisibility.465b9149.js";import"./optimizedFeatureQueryEngineAdapter.3ac15e2d.js";import"./centroid.0d5a1327.js";import"./PooledRBush.4a1f7573.js";import"./quickselect.03306040.js";import"./Graphics3DObjectStates.572dc844.js";import"./floorFilterUtils.23f5aee3.js";import"./QueryEngine.7ba4cf96.js";import"./WhereClause.d10f799a.js";import"./json.d1a0fa35.js";import"./QueryEngineCapabilities.c2e9875c.js";import"./utils.d0f28677.js";import"./ClassBreaksDefinition.59347cc4.js";import"./attributeUtils.99d8ee08.js";import"./popupUtils.3f1e4abd.js";class H extends z{constructor(t){super("SceneLayerWorker","dracoDecompressPointCloudData",t,{hasInitialize:!0})}getTransferList(t){return[t.geometryBuffer]}}const N=W.getLogger("esri.views.3d.layers.SceneLayerGraphicsView3D"),q=we();let o=class extends Ae(Ne(Y(ve))){constructor(){super(...arguments),this.type="scene-layer-graphics-3d",this._nodesAddedToStage=new Map,this._queryEngine=null,this._memCache=null,this._interactiveEditingSessions=new Map,this.loadedGraphics=new me,this.holeFilling="always",this.progressiveLoadFactor=1,this.supportsHeightUnitConversion=!0,this._coordinatesOutsideExtentErrors=0,this._maxCoordinatesOutsideExtentErrors=20}initialize(){var e,t;const i=this.layer;this.addResolvingPromise(i.indexInfo),this._attributeOverrides=new _e(this.layer,(e=this.view.resourceController)==null?void 0:e.memoryController),Se(i,this.view.spatialReference,this.view.viewingMode),this.fieldsHelper=new xe({layerView:this}),this.updatingHandles.add(()=>i.rangeInfos,r=>this._rangeInfosChanged(r),G),this.updatingHandles.add(()=>i.renderer,(r,s)=>this._rendererChange(r,s)),this.updatingHandles.add(()=>[this.parsedDefinitionExpression,this.excludeObjectIdsSorted],()=>this._filterChange()),this.updatingHandles.add(()=>this.view.floors,()=>this.processor.filterVisibility.filterChanged()),this.handles.add(Z(()=>V.I3S_TREE_SHOW_TILES,r=>{if(r&&!this._treeDebugger){const s=this._controller.crsIndex;import("./I3STreeDebugger.3043a34f.js").then(({I3STreeDebugger:a})=>{!this._treeDebugger&&V.I3S_TREE_SHOW_TILES&&(this._treeDebugger=new a({lv:this,view:this.view,nodeSR:s}))})}else r||!this._treeDebugger||V.I3S_TREE_SHOW_TILES||(this._treeDebugger.destroy(),this._treeDebugger=null)},G)),this._set("processor",new fe({owner:this,preferredUpdatePolicy:K.ASYNC,scaleVisibilityEnabled:!0,filterVisibilityEnabled:!0,timeExtentVisibilityEnabled:!1,frustumVisibilityEnabled:!1,elevationAlignmentEnabled:!0,elevationFeatureExpressionEnabled:!1,dataExtent:i.fullExtent,updateClippingExtent:r=>this._updateClippingExtent(r)})),(t=this.processor.elevationAlignment)==null||t.events.on("invalidate-elevation",r=>this._invalidateElevation(r)),this.supportsHeightUnitConversion&&(this._verticalScale=X("point",i.spatialReference,this.view.spatialReference)),this.addResolvingPromise(this.processor.setup()),this._memCache=this.view.resourceController.memoryController.newCache(i.uid),this._controller=new ye({layerView:this,scaleVisibilityEnabled:!1}),De(this.layer.geometryDefinitions)&&(this._worker=new H(r=>this.view.resourceController.schedule(r))),this.handles.add(this.layer.on("apply-edits",r=>this.updatingHandles.addPromise(r.result))),this.handles.add(this.layer.on("edits",r=>this._handleEdits(r))),this.when(()=>{this._queryEngine=new be({layerView:this,priority:J.FEATURE_QUERY_ENGINE}),this.updatingHandles.add(()=>this.maximumNumberOfFeatures,r=>this._controller.featureTarget=r,G),this.updatingHandles.add(()=>this.suspended,r=>{r&&this._removeAllNodeData()})})}destroy(){this._treeDebugger=y(this._treeDebugger),this._attributeOverrides=y(this._attributeOverrides),this._set("processor",y(this.processor)),this._controller=y(this._controller),this._queryEngine=y(this._queryEngine),this._worker=y(this._worker),this._memCache=y(this._memCache),this._nodesAddedToStage.clear(),this.fieldsHelper=y(this.fieldsHelper)}get requiredFields(){var e,t;return(e=(t=this.fieldsHelper)==null?void 0:t.requiredFields)!=null?e:[]}get maximumNumberOfFeatures(){var e,t,i;const r=(e=this.processor)==null||(t=e.graphicsCore)==null?void 0:t.displayFeatureLimit;return(i=r==null?void 0:r.maximumNumberOfFeatures)!=null?i:0}set maximumNumberOfFeatures(e){e!=null?(this._override("maximumNumberOfFeatures",e),this._controller.fixedFeatureTarget=!0):(this._clearOverride("maximumNumberOfFeatures"),this._controller.fixedFeatureTarget=!1)}get maximumNumberOfFeaturesExceeded(){var e;return!this.suspended&&!((e=this._controller)==null||!e.useMaximumNumberOfFeatures||this._controller.leavesReached)}get excludeObjectIdsSorted(){const e=this.layer.excludeObjectIds;return e.length?e.toArray().sort((t,i)=>t-i):null}get hasM(){return!1}get hasZ(){return!0}async whenGraphicAttributes(e,t){return Oe(this.layer,e,this._getObjectIdField(),t,()=>[...this._nodesAddedToStage.values()])}getGraphicFromGraphicUid(e){if(!this.loadedGraphics)return null;const t=ee(this.loadedGraphics.find(r=>r.uid===e),this.layer),i=this._getObjectIdField();return t&&t.attributes&&t.attributes[i]?(t.layer=this.layer,t.sourceLayer=this.layer,t):null}whenGraphicBounds(e,t){return this.processor.whenGraphicBounds(e,t)}computeAttachmentOrigin(e,t){return this.processor.computeAttachmentOrigin(e,t)}canResume(){return super.canResume()&&(!this._controller||this._controller.rootNodeVisible)}isUpdating(){var e,t,i;return!!((e=this._controller)!=null&&e.updating||(t=this.processor)!=null&&t.updating||(i=this.fieldsHelper)!=null&&i.updating)}highlight(e){return this.processor.highlight(e,this.layer.objectIdField)}get updatePolicy(){return this.processor.graphicsCore.effectiveUpdatePolicy}createInteractiveEditSession(e){return Ee(this.attributeEditingContext,e)}async _extractBinaryPointData(e,t){const i={geometryBuffer:e.geometryBuffer};return M(this._worker)&&(this._worker=new H(r=>this.view.resourceController.schedule(r))),this._worker.invoke(i,t).then(r=>{if(u(r))return{positionData:r.positions,featureIds:r.featureIds};throw new Error("Failed to decompress Draco point data")})}_checkExtent(e,t){e&&!te(e,t)&&(this._coordinatesOutsideExtentErrors<this._maxCoordinatesOutsideExtentErrors&&N.error("Service Error: Coordinates outside of layer extent"),this._coordinatesOutsideExtentErrors+1===this._maxCoordinatesOutsideExtentErrors&&N.error("Maximum number of errors reached. Further errors are ignored."),this._coordinatesOutsideExtentErrors++)}async addNode(e,t,i){if(!U(t)&&!P(t))throw new Error;if(this._nodesAddedToStage.has(e.index))return void N.error("I3S node "+e.id+" already added");const r=u(this.layer.fullExtent)?Fe(this.layer.fullExtent.clone(),.5):null,s=this._controller.crsVertex,a=[],l={graphics:null,featureIds:null,attributeInfo:t.attributeDataInfo,node:e};if(U(t)?await this._addNodeBinaryPointData(e,l,t,r,a,i):P(t)&&this._addNodeLegacyPointData(e,l,t,r,a),await this._attributeOverrides.apply(l.featureIds,t.attributeDataInfo,i),e.numFeatures=l.graphics.length,this._updateNodeMemory(e),Q(l),a.length>0&&(this._computeObb(e,a,s),this._controller.updateVisibility(e.index)),this._controller.isGeometryVisible(e)){if(u(this._verticalScale))for(const h of l.graphics)this._verticalScale(h.geometry);this._nodesAddedToStage.set(e.index,l),this.loadedGraphics.addMany(l.graphics),this._controller.updateLoadStatus(e.index,!0),this._filterNode(l),this._treeDebugger&&this._treeDebugger.update()}else this._cacheNodeData(l)}_computeObb(e,t,i){const r=this._controller.crsIndex,s=r.isGeographic?this.view.renderSpatialReference:r;L(t,i,0,t,s,0,t.length/3);const a={data:t,size:3};e.serviceObb=re(a),r.isGeographic&&ie(e.serviceObb.center,s,e.serviceObb.center,r)}isNodeLoaded(e){return this._nodesAddedToStage.has(e)}isNodeReloading(){return!1}updateNodeState(){}async _addNodeBinaryPointData(e,t,i,r,s,a){const l=await this._extractBinaryPointData(i,a);if(l==null)throw new Error;const h=this._getObjectIdField(),b=this._controller.crsVertex,D=this.view.spatialReference,O=this.processor.graphicsCore,{positionData:g,featureIds:w}=l,v=3,C=g.length/v,m=new Array;for(let x=0;x<C;x++){const F=u(e.serviceObb)?e.serviceObb.center:[0,0,0],E=x*v,c=se(g[E+0],g[E+1],g[E+2]);ae(c,c,F),e.serviceObb||s.push(c[0],c[1],c[2]),u(r)&&this._checkExtent(r,c);const I=w[x],T={};I!=null&&(T[h]=I);const A=I==null?$.generateUID():I;L(c,b,0,f,D,0,1);const _=R(f[0],f[1],f[2],D),S=this.loadedGraphics.get(A);if(u(S))S.level<e.level&&(p.property="geometry",p.graphic=S,p.oldValue=oe(S.geometry),p.newValue=_,S.geometry=_,O.graphicUpdateHandler(p)),m.push(S);else{const k=$.generateUID();m.push({objectId:A,uid:k,geometry:_,attributes:T,visible:!0,level:e.level})}}t.graphics=m,t.featureIds=Array.from(w)}_addNodeLegacyPointData(e,t,i,r,s){const a=this._getObjectIdField(),l=this._controller.crsVertex,h=this.view.spatialReference,b=[0,0,0],D=new Array,O=new Array;for(const g of i.pointData){const w=g.featureDataPosition,v=w.length,C=g.geometries&&g.geometries[0]||Te[v],m=g.featureIds[0];if(C.params.type!=="points")continue;u(r)&&this._checkExtent(r,w);const x={};m!=null&&(x[a]=m);const F=m==null?$.generateUID():m;let E;C.type==="Embedded"&&(E=C.params.vertexAttributes.position);for(let c=0;c<E.length;c+=v){for(let _=0;_<v;_++)b[_]=w[_]+E[c+_];const I=v===3;e.serviceObb||s.push(b[0],b[1],I?b[2]:0),L(b,l,0,f,h,0,1);const T=R(f[0],f[1],I?f[2]:void 0,h),A=this.loadedGraphics.get(F);u(A)?O.push(A):O.push({objectId:F,uid:$.generateUID(),geometry:T,attributes:x,visible:!0})}D.push(m)}t.graphics=O,t.featureIds=D}_updateNodeMemory(e){e.memory=4096+(u(e.numFeatures)?e.numFeatures*this.processor.graphicsCore.usedMemoryPerGraphic:0)}_cacheNodeData(e){const t=e.graphics.reduce((i,r)=>ne(r)+i,512+8*e.featureIds.length+1024);this._memCache.put(this._getMemCacheKey(e.node),e,t)}_getMemCacheKey(e){return`${e.index}`}_removeAllNodeData(){this._nodesAddedToStage.forEach((e,t)=>{if(e){const i=e.node;this._updateNodeMemory(i),this._cacheNodeData(e)}this._controller.updateLoadStatus(t,!1)}),this._nodesAddedToStage.clear(),this._treeDebugger&&this._treeDebugger.update(),this.loadedGraphics.clear()}removeNode(e){const t=this._removeNodeStageData(e);t&&(this._updateNodeMemory(t.node),this._cacheNodeData(t))}_removeNodeStageData(e){const t=this._nodesAddedToStage.get(e);return t?(this._controller.updateLoadStatus(e,!1),this.loadedGraphics.removeMany(t.graphics),this._nodesAddedToStage.delete(e),this._treeDebugger&&this._treeDebugger.update(),t):null}async loadCachedNodeData(e){return this._memCache.pop(this._getMemCacheKey(e))}async addCachedNodeData(e,t,i,r){this._nodesAddedToStage.has(e.index)?N.error("I3S node "+e.id+" already added"):(this.loadedGraphics.addMany(t.graphics),this._nodesAddedToStage.set(e.index,t),this._controller.updateLoadStatus(e.index,!0),this._updateNodeMemory(e),await this.updateAttributes(e.index,i,r),this._filterNode(t),this._treeDebugger&&this._treeDebugger.update())}getLoadedNodeIds(){const e=[];return this._nodesAddedToStage.forEach(t=>e.push(t.node.id)),e.sort()}getVisibleNodes(){const e=new Array;return this._nodesAddedToStage.forEach(t=>e.push(t.node)),e}getLoadedNodeIndices(e){this._nodesAddedToStage.forEach((t,i)=>e.push(i))}getLoadedAttributes(e){const t=this._nodesAddedToStage.get(e);if(t&&u(t.attributeInfo))return t.attributeInfo.loadedAttributes}getAttributeData(e){const t=this._nodesAddedToStage.get(e);if(t&&u(t.attributeInfo))return t.attributeInfo.attributeData}_setAttributeData(e,t){const i=this._nodesAddedToStage.get(e);i&&!M(i.attributeInfo)&&(i.attributeInfo.attributeData=t,this._attributeValuesChanged(i))}async updateAttributes(e,t,i){const r=this._nodesAddedToStage.get(e);r&&(await this._attributeOverrides.apply(r.featureIds,t,i),r.attributeInfo=t,this._attributeValuesChanged(r))}_attributeValuesChanged(e){if(Q(e),this._filterNode(e),this.processor.graphicsCore.labelsEnabled){const t=e.graphics.map(i=>i.uid);this.processor.graphicsCore.updateLabelingInfo(t)}}_updateClippingExtent(e){return this._controller&&this._controller.updateClippingArea(e),!1}_getObjectIdField(){return this.layer.objectIdField||"OBJECTID"}async _rendererChange(e,t){const{layer:{fieldsIndex:i}}=this,r=new Set;let s,a;e?(await e.collectRequiredFields(r,i),s=Array.from(r).sort()):s=[],r.clear(),t?(await t.collectRequiredFields(r,i),a=Array.from(r).sort()):a=[],s.length===a.length&&s.every((l,h)=>s[h]===a[h])||this._reloadAllNodes()}_rangeInfosChanged(e){e!=null&&e.length>0&&N.warn("Unsupported property: rangeInfos are currently only serialized to and from web scenes but do not affect rendering.")}_filterChange(){this._nodesAddedToStage.forEach(e=>this._filterNode(e))}_reloadAllNodes(){this._removeAllNodeData(),this._controller&&this._controller.restartNodeLoading()}_filterNode(e){const t=this.parsedDefinitionExpression,i=this.excludeObjectIdsSorted,r=this._getObjectIdField();for(const s of e.graphics){const a=s.visible,l=!t||this._evaluateClause(t,s),h=M(i)||de(i,s.attributes[r])<0;s.visible=l&&h,a!==s.visible&&(p.graphic=s,p.property="visible",p.oldValue=a,p.newValue=s.visible,this.processor.graphicsCore.graphicUpdateHandler(p))}}_invalidateElevation(e){const t=this._controller.crsIndex;le(e.extent,e.spatialReference,B,t),this._controller.updateElevationChanged(B,t)}createQuery(){const e={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference};return u(this.filter)?this.filter.createQuery(e):new j(e)}queryFeatures(e,t){return this._queryEngine.executeQuery(this._ensureQuery(e),t==null?void 0:t.signal)}queryObjectIds(e,t){return this._queryEngine.executeQueryForIds(this._ensureQuery(e),t==null?void 0:t.signal)}queryFeatureCount(e,t){return this._queryEngine.executeQueryForCount(this._ensureQuery(e),t==null?void 0:t.signal)}queryExtent(e,t){return this._queryEngine.executeQueryForExtent(this._ensureQuery(e),t==null?void 0:t.signal)}_ensureQuery(e){return this._addDefinitionExpressionToQuery(M(e)?this.createQuery():j.from(e))}getUsedMemory(){var e,t,i;return(e=(t=this.processor)==null||(i=t.graphicsCore)==null?void 0:i.usedMemory)!=null?e:0}getUnloadedMemory(){var e,t,i,r,s;return .8*(((e=(t=this._controller)==null?void 0:t.unloadedMemoryEstimate)!=null?e:0)+((i=(r=this.processor)==null||(s=r.graphicsCore)==null?void 0:s.unprocessedMemoryEstimate)!=null?i:0))}ignoresMemoryFactor(){return this._controller&&this._controller.fixedFeatureTarget}_handleEdits(e){Ie(this.attributeEditingContext,e)}get attributeEditingContext(){const e=this._getObjectIdField();return{sessions:this._interactiveEditingSessions,fieldsIndex:this.layer.fieldsIndex,objectIdField:e,forEachNode:t=>this._nodesAddedToStage.forEach(i=>t(i.node,i.featureIds)),attributeStorageInfo:this.i3slayer.attributeStorageInfo,attributeOverrides:this._attributeOverrides,getAttributeData:t=>this.getAttributeData(t),setAttributeData:(t,i,r)=>{this._setAttributeData(t,i);const s=this._nodesAddedToStage.get(t);if(u(r)){const a=this.loadedGraphics.get(r.attributes[e]);u(a)&&this.processor.graphicsCore.recreateGraphics([a])}else u(s)&&this.processor.graphicsCore.recreateGraphics(s.graphics)},clearMemCache:()=>{}}}get performanceInfo(){const e={displayedNumberOfFeatures:this.loadedGraphics.length,maximumNumberOfFeatures:this.maximumNumberOfFeatures,totalNumberOfFeatures:-1,nodes:this._nodesAddedToStage.size,core:this.processor.graphicsCore.performanceInfo};return this._controller&&this._controller.updateStats(e),e}get test(){return{controller:this._controller,numNodes:this._nodesAddedToStage.size,loadedGraphics:this.loadedGraphics}}};n([d()],o.prototype,"processor",void 0),n([d({type:ue})],o.prototype,"filter",void 0),n([d()],o.prototype,"loadedGraphics",void 0),n([d({aliasOf:"layer"})],o.prototype,"i3slayer",void 0),n([d()],o.prototype,"_controller",void 0),n([d()],o.prototype,"updating",void 0),n([d()],o.prototype,"suspended",void 0),n([d()],o.prototype,"holeFilling",void 0),n([d(he)],o.prototype,"updatingProgress",void 0),n([d({aliasOf:"_controller.updatingProgress"})],o.prototype,"updatingProgressValue",void 0),n([d(q.requiredFields)],o.prototype,"requiredFields",null),n([d(q.availableFields)],o.prototype,"availableFields",void 0),n([d()],o.prototype,"fieldsHelper",void 0),n([d({type:Number})],o.prototype,"maximumNumberOfFeatures",null),n([d({readOnly:!0})],o.prototype,"maximumNumberOfFeaturesExceeded",null),n([d()],o.prototype,"excludeObjectIdsSorted",null),n([d({readOnly:!0,aliasOf:"view.qualitySettings.sceneService.point.lodFactor"})],o.prototype,"lodFactor",void 0),n([d({readOnly:!0})],o.prototype,"hasM",null),n([d({readOnly:!0})],o.prototype,"hasZ",null),o=n([ce("esri.views.3d.layers.SceneLayerGraphicsView3D")],o);const it=o;function P(e){return"pointData"in e}function U(e){return"geometryBuffer"in e&&e.geometryBuffer!==null}function Q(e){const t=e.attributeInfo;for(let i=0;i<e.graphics.length;i++){const r=e.graphics[i];if(r.attributes||(r.attributes={}),u(t)&&u(t.loadedAttributes))for(const{name:s}of t.loadedAttributes)t.attributeData[s]&&(r.attributes[s]=Ce(t.attributeData[s],i))}}function Fe(e,t){return e.xmin-=t,e.ymin-=t,e.xmax+=t,e.ymax+=t,e.hasZ&&(e.zmin-=t,e.zmax+=t),e.hasM&&(e.mmin-=t,e.mmax+=t),e}const Te={2:{type:"Embedded",params:{type:"points",vertexAttributes:{position:[0,0]}}},3:{type:"Embedded",params:{type:"points",vertexAttributes:{position:[0,0,0]}}}},f=pe(),p={graphic:null,property:null,oldValue:null,newValue:null},B=ge();export{it as default};
