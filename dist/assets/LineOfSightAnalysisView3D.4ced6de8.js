var Pt=Object.defineProperty,$t=Object.defineProperties;var Ft=Object.getOwnPropertyDescriptors;var mt=Object.getOwnPropertySymbols;var zt=Object.prototype.hasOwnProperty,xt=Object.prototype.propertyIsEnumerable;var _t=(t,e,i)=>e in t?Pt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Z=(t,e)=>{for(var i in e||(e={}))zt.call(e,i)&&_t(t,i,e[i]);if(mt)for(var i of mt(e))xt.call(e,i)&&_t(t,i,e[i]);return t},X=(t,e)=>$t(t,Ft(e));import{e as s,d as r,l as h,n as F,y as z,t as y,r as d,ad as st,aj as v,cu as tt,lq as Ht,ku as jt,lr as Dt,ls as Vt,a9 as Nt,aa as at,lt as Gt,lu as Mt,lv as kt,kr as E,gt as Ut,aO as N,lw as Bt,fD as D,lx as ut,ly as Wt,lz as rt,Z as Jt,hP as qt,bn as lt,aN as U,j7 as pt,ag as I,bs as Kt,a8 as Qt,Y as At,c as Yt,an as ft,u as ht,az as et,bl as K,lA as M,aP as gt,fa as Ct,kK as bt,eO as k,q as b,_ as Ot,b8 as Zt,lB as wt,lC as Xt,F as Q,dF as It,aA as G,ai as te,U as A,L as ee,lD as ie,dE as ne,lE as oe,b as B,eT as se,eG as re,E as ae,bI as le}from"./index.165b2b59.js";import{a as Tt,g as ct,p as ue}from"./LineVisualElement.2ea00164.js";let w=class extends z{constructor(t){super(t),this.innerWidth=2,this.outerWidth=8,this.visibleInnerColor=new h([3,252,111,1]),this.visibleOuterColor=new h([3,252,111,.15]),this.occludedInnerColor=new h([252,3,69,1]),this.occludedOuterColor=new h([252,3,69,.1]),this.undefinedInnerColor=new h([255,255,255,1]),this.undefinedOuterColor=new h([127,127,127,.2])}};s([r({type:Number})],w.prototype,"innerWidth",void 0),s([r({type:Number})],w.prototype,"outerWidth",void 0),s([r({type:h})],w.prototype,"visibleInnerColor",void 0),s([r({type:h})],w.prototype,"visibleOuterColor",void 0),s([r({type:h})],w.prototype,"occludedInnerColor",void 0),s([r({type:h})],w.prototype,"occludedOuterColor",void 0),s([r({type:h})],w.prototype,"undefinedInnerColor",void 0),s([r({type:h})],w.prototype,"undefinedOuterColor",void 0),w=s([F("esri.views.3d.analysis.LineOfSight.LineOfSightConfiguration")],w);function dt(t){if(y(t))return null;const e=t.layer!=null?t.layer.id:"";let i=null;return i=t.objectId!=null?t.objectId:t.layer!=null&&"objectIdField"in t.layer&&t.layer.objectIdField!=null&&t.attributes!=null?t.attributes[t.layer.objectIdField]:t.uid,i==null?null:`o-${e}-${i}`}function Rt(t,e,i,o,n,a){const l=d(a.offset)?a.offset:0;switch(a.mode){case"absolute-height":return i+l;case"on-the-ground":return st(n.elevationProvider.getElevation(t,e,0,o,"ground"),0);case"relative-to-ground":return i+st(n.elevationProvider.getElevation(t,e,i,o,"ground"),0)+l;case"relative-to-scene":return i+st(n.elevationProvider.getElevation(t,e,i,o,"scene"),0)+l}}let P=class extends z{constructor(t){super(t),this.target=null,this.intersectedGraphic=null,this.intersectedLocation=null,this.elevationAlignedTargetLocation=null}};s([r()],P.prototype,"target",void 0),s([r()],P.prototype,"intersectedGraphic",void 0),s([r()],P.prototype,"intersectedLocation",void 0),s([r()],P.prototype,"elevationAlignedTargetLocation",void 0),s([r()],P.prototype,"visible",void 0),P=s([F("esri.views.3d.analysis.LineOfSightAnalysisResult")],P);let $=class extends z{constructor(t){super(t),this.elevationAlignedTargetLocation=null,this.inputPoints={isValid:!1,observer:v(),observerSurfaceNormal:null,observerFeatureId:null,target:v(),targetSurfaceNormal:null,targetFeatureId:null,observerAdjusted:v(),targetAdjusted:v()},this.computationResult={start:v(),end:v(),intersection:v(),isValid:!1,isTargetVisible:!1},this.result=null}notifyResultChanged(){this.notifyChange("computationResult")}notifyInputPointsChanged(){this.notifyChange("inputPoints")}};s([r()],$.prototype,"target",void 0),s([r()],$.prototype,"elevationAlignedTargetLocation",void 0),s([r()],$.prototype,"inputPoints",void 0),s([r()],$.prototype,"computationResult",void 0),s([r()],$.prototype,"result",void 0),$=s([F("esri.views.3d.analysis.LineOfSight.LineOfSightComputation")],$);var vt;let T=vt=class extends z{constructor(t){super(t)}clone(){return new vt({type:this.type,id:tt(this.id),point:tt(this.point),normal:tt(this.normal),ray:tt(this.ray),graphic:this.graphic})}equals(t){return this.type===t.type&&this.id===t.id&&Ht(this.point,t.point)&&jt(this.normal,t.normal)&&Dt(this.ray,t.ray)&&this.graphic===t.graphic}};s([r()],T.prototype,"type",void 0),s([r({constructOnly:!0})],T.prototype,"id",void 0),s([r({constructOnly:!0})],T.prototype,"point",void 0),s([r({constructOnly:!0})],T.prototype,"normal",void 0),s([r({constructOnly:!0})],T.prototype,"graphic",void 0),s([r({constructOnly:!0})],T.prototype,"ray",void 0),T=vt=s([F("esri.views.3d.analysis.LineOfSight.LineOfSightIntersectionResult")],T);let q=class extends z{constructor(t){super(t)}initialize(){this.intersector=Nt(this.view.state.viewingMode),this.intersector.options.hud=!1,this.intersector.options.store=at.MIN}getScreenPointIntersection(t){const e=Gt(t,Mt.get()),i=kt(this.view.state.camera,e,J);return this._getRayIntersection(i)}_getRayIntersection(t){if(y(t)||y(this.view.sceneIntersectionHelper))return null;this.intersector.options.store=at.MIN,this.view.sceneIntersectionHelper.intersectToolIntersectorRay(t,this.intersector);const e=this.intersector.results.min;if(!e.getIntersectionPoint(it))return null;const i=this.view.renderCoordsHelper.fromRenderCoords(it,this.view.spatialReference),o=E(e.normal),n=Ut(o,t.direction)>0?-1:1;if(N(o,o,n),Bt(e))return new T({type:D.OBJECT,id:`${e.target.layerUid}/${e.target.nodeIndex}/${e.target.componentIndex}`,point:i,normal:o,ray:ut(t),graphic:null});if(Wt(e))return new T({type:D.TERRAIN,id:e.target.lij.slice(),point:i,normal:o,ray:ut(t),graphic:null});const a=rt(e,this.view);if(d(a)){const l=a.layer,c=a.sourceLayer;let p;return c&&c.type==="scene"?p=Jt(a,c.objectIdField):p=a.uid,new T({type:D.OBJECT,id:`${l.uid}/${p}`,point:i,normal:o,ray:ut(t),graphic:a})}return null}_canUpdateFromIntersectionResult(t,e){if(y(t)||!e||t.type!==e.type)return!1;switch(t.type){case D.TERRAIN:{const i=t.id,o=e.id;return i[0]===o[0]&&i[1]===o[1]&&i[2]===o[2]||qt(i,o)}case D.OBJECT:case D.I3S:return t.id===e.id}}updateFromIntersectionResult(t){let e;if(t.type===D.TERRAIN&&d(t.point)){const i=it,o=Lt,n=St;this.view.renderCoordsHelper.toRenderCoords(t.point,o),this.view.renderCoordsHelper.worldUpAtPosition(o,n);const a=this.view.basemapTerrain.elevationBounds,l=this.view.renderCoordsHelper.getAltitude(o),c=a?Math.abs(a.max-a.min)/Math.abs(l):100,p=l>0?1:-1;lt(n,n),N(n,n,p*c),U(i,o,n),pt(i,o,J),e=this._getRayIntersection(J)}else e=this._getRayIntersection(t.ray);return this._canUpdateFromIntersectionResult(e,t)?e.point:null}adjustFromGroundIntersection(t,e){const i=it,o=Lt,n=St;I(o,t),this.view.renderCoordsHelper.worldUpAtPosition(o,n);const a=this.view.basemapTerrain.elevationBounds,l=this.view.renderCoordsHelper.getAltitude(o),c=a?Math.abs(a.max-a.min):100,p=l>0?1:-1;lt(n,n),N(n,n,p*c),U(i,o,n),pt(i,o,J);const g=this._getRayIntersection(J);return d(g)&&d(g.point)?(this.view.renderCoordsHelper.toRenderCoords(g.point,e),Kt(g.normal)):(I(e,t),null)}};s([r()],q.prototype,"view",void 0),s([r()],q.prototype,"intersector",void 0),q=s([F("esri.views.3d.analysis.LineOfSight.LineOfSightRayIntersector")],q);const it=v(),Lt=v(),St=v(),J=Vt(),Et=Qt.getLogger("esri.views.3d.analysis.LineOfSight.LineOfSightController");let m=class extends At.EventedMixin(z){constructor(t){super(t),this.updateOnCameraChange=!0,this._effectiveObserverElevationMode="absolute-height",this._observerFeatureId=null,this._updatingHandles=new Yt,this._frameTask=ft,this._handles=new ht,this._computationHandles=new ht,this._externalObserverUpdate=!0}initialize(){var t;const e=(t=this.view.resourceController)==null?void 0:t.scheduler;this._frameTask=e?e.registerTask(et.LINE_OF_SIGHT_TOOL):ft,this._intersector=new q({view:this.view}),this._handles.add([this._connectObserver(),this._connectComputations(),this._connectTargets()])}destroy(){this._handles.destroy(),this._computationHandles.destroy(),this._computations.removeAll(),this._updatingHandles.destroy()}get updating(){return this._frameTask.updating||this._updatingHandles.updating}get priority(){return this._frameTask.priority}set priority(t){this._frameTask.priority=t}get _computations(){return this.analysisViewData.computations}get _elevationAlignedObserverPositionRenderSpace(){return this.analysisViewData.observerEngineLocation}set _elevationAlignedObserverPositionRenderSpace(t){this.analysisViewData.observerEngineLocation=t}get _screenPixelSize(){return this.view.state.camera.computeScreenPixelSizeAt(this._elevationAlignedObserverPositionRenderSpace)}getLineOfSightComputationDependencies(t){const{inputPoints:e}=t;return{inputPoints:e}}_computeResult(t){const e=t.computation,{inputPoints:i,computationResult:o}=e,{observerAdjusted:n,targetAdjusted:a}=i,{start:l,end:c}=o;I(l,n),I(c,a),this._canCompute(e)?this._computeIntersection(t):this._interpolateIntersection(t),e.notifyResultChanged(),this.emit("result-changed",{target:t.computation.target,result:e.result})}_adjustStartEndPositions(t){const e=this._screenPixelSize,i=this.view,{inputPoints:o}=t,{observer:n,observerSurfaceNormal:a,target:l,targetSurfaceNormal:c,observerAdjusted:p,targetAdjusted:g}=o,u=nt;d(a)?I(u,a):K(u,l,n);const _=e;lt(u,u),N(u,u,Math.min(_,1)),U(p,n,u),d(c)?I(u,c):K(u,n,l);const L=i.state.camera.computeScreenPixelSizeAt(l);lt(u,u),N(u,u,Math.min(L,1)),U(g,l,u)}_computeIntersection({computation:t,interpolationInfo:e}){const{view:i}=this,{sceneIntersectionHelper:o,renderCoordsHelper:n}=i;if(y(o))return;const a=this._intersector.intersector,{computationResult:l,inputPoints:c}=t,{observer:p,target:g,observerFeatureId:u,targetFeatureId:_}=c,{start:L,end:x}=l,Y=pt(L,x,de);a.options.store=d(u)||d(_)?at.ALL:at.MIN,o.intersectToolIntersectorRay(Y,a);let f=null;if(d(u)||d(_))for(const O of a.results.all){const W=rt(O,this.view);if(y(W)){f=O;break}const yt=dt(W);if(yt!==u&&yt!==_){f=O;break}}else f=a.results.min;const S=l.intersection,H=nt;let R=!0;if(d(f)&&f.getIntersectionPoint(S)){I(e.originalIntersection,S),I(e.originalObserver,L),I(e.originalTarget,x),n.fromRenderCoords(S,H,i.spatialReference);const O=1-M(x,g)/M(L,g);R=M(p,S)>=O*M(p,g)}const j=new gt(H,i.spatialReference);{const{result:O,target:W}=t;d(O)?(O.target=W,O.intersectedGraphic=R?null:rt(f,i),O.intersectedLocation=R?null:j,O.visible=R):t.result=new P({target:W,elevationAlignedTargetLocation:t.elevationAlignedTargetLocation,intersectedGraphic:R?null:rt(f,i),intersectedLocation:R?null:j,visible:R})}l.isValid=c.isValid=!0,l.isTargetVisible=R}_interpolateIntersection({computation:t,interpolationInfo:e}){const{computationResult:i,inputPoints:o}=t,{start:n,end:a,intersection:l}=i,{originalIntersection:c,originalObserver:p,originalTarget:g}=e;if(I(l,c),o.isValid){const u=nt,_=M(p,c)/M(p,g);Ct(u,n,p),N(u,u,1-_),U(l,l,u),Ct(u,a,g),N(u,u,_),U(l,l,u),i.isValid=!0}else t.result=null,i.isValid=!1,i.isTargetVisible=!1}_canCompute(t){const e=this.analysisViewData.elevationAlignedObserver,i=this.view.frustum;if(y(e)||y(t.elevationAlignedTargetLocation)||y(i))return!1;const{observerAdjusted:o,targetAdjusted:n}=t.inputPoints,a=i.intersectsPoint(o),l=i.intersectsPoint(n);return a&&l}_onObserverPositionChange(t,e,i,o){if(this._externalObserverUpdate=o,y(t))return this.analysisViewData.elevationAlignedObserver=null,void(this._observerFeatureId=null);const n=bt(t,this.view.spatialReference);if(y(n))return Tt(this.analysis,t.spatialReference,Et),void(this.analysisViewData.elevationAlignedObserver=null);const a=this._getEffectiveElevationInfo(n,e);n.z=Rt(n.x,n.y,n.z,this.view.spatialReference,this.view,a),this._effectiveObserverElevationMode=a.mode,this.analysisViewData.elevationAlignedObserver=n;const l=v();this.view.renderCoordsHelper.toRenderCoords(n,l),this._elevationAlignedObserverPositionRenderSpace=l,this._observerFeatureId=dt(i),this.priority=et.LINE_OF_SIGHT_TOOL_INTERACTIVE}_onObserverRenderSpacePositionChangeForComputation(t,e,i,o){const{inputPoints:n}=t;switch(I(n.observer,e),i){case"on-the-ground":case"relative-to-ground":n.observerSurfaceNormal=this._intersector.adjustFromGroundIntersection(e,n.observer);break;case"relative-to-scene":case"absolute-height":n.observerSurfaceNormal=null}n.observerFeatureId=o,this._adjustStartEndPositions(t),t.notifyInputPointsChanged(),this.priority=et.LINE_OF_SIGHT_TOOL_INTERACTIVE}_onTargetPositionChange(t,e,i,o,n=!0){const a=t.inputPoints;n&&(a.isValid=!1);const l=bt(e,this.view.spatialReference);if(y(l))return Tt(this.analysis,e.spatialReference,Et),t.elevationAlignedTargetLocation=null,void t.notifyInputPointsChanged();const c=this._getEffectiveElevationInfo(l,i);switch(l.z=Rt(l.x,l.y,l.z,this.view.spatialReference,this.view,c),t.elevationAlignedTargetLocation=l,this.view.renderCoordsHelper.toRenderCoords(t.elevationAlignedTargetLocation,a.target),c.mode){case"on-the-ground":case"relative-to-ground":a.targetSurfaceNormal=this._intersector.adjustFromGroundIntersection(a.target,a.targetAdjusted);break;case"relative-to-scene":case"absolute-height":a.targetSurfaceNormal=null}a.targetFeatureId=dt(o),this._adjustStartEndPositions(t),t.notifyInputPointsChanged(),this.priority=et.LINE_OF_SIGHT_TOOL_INTERACTIVE}_connectComputationToTarget(t){return k([b(()=>({computation:t,targetPosition:t.target.position,targetElevationInfo:t.target.elevationInfo,targetFeatureInfo:t.target.excludedFeature}),({computation:e,targetPosition:i,targetElevationInfo:o,targetFeatureInfo:n})=>{d(i)&&this._onTargetPositionChange(e,i,o,n)},A)])}_connectComputationToObserver(t){return b(()=>({computation:t,observer:this.analysisViewData.elevationAlignedObserver}),({computation:e})=>{this._externalObserverUpdate&&(e.inputPoints.isValid=!1,e.notifyInputPointsChanged())},A)}_connectComputationToRenderSpaceObserver(t){return b(()=>({computation:t,observer:this._elevationAlignedObserverPositionRenderSpace,observerElevationMode:this._effectiveObserverElevationMode,observerFeatureId:this._observerFeatureId}),({computation:e,observer:i,observerElevationMode:o,observerFeatureId:n})=>{this._onObserverRenderSpacePositionChangeForComputation(e,i,o,n)},A)}_connectComputationToCamera(t){return b(()=>({camera:this.view.state.camera,isDirty:this._isCameraDirty}),({isDirty:e})=>{!this.updateOnCameraChange||t.inputPoints.isValid&&!e||t.notifyInputPointsChanged()},ee)}_connectComputationToSlicePlane(t){return b(()=>this.view.slicePlane,()=>t.notifyInputPointsChanged())}_connectComputationToElevation(t){return this.view.elevationProvider.on("elevation-change",e=>{const i=this.analysis.observer,o=t.target;let n=null,a=null,l=null,c=null,p=null,g=null;const u=d(i)&&d(i.position)?i.position.spatialReference:d(o.position)?o.position.spatialReference:e.spatialReference;d(i)&&d(i.position)&&(n=pe,a=i.elevationInfo,l=i.excludedFeature,Ot(i.position,n,u)),d(o.position)&&(c=he,p=o.elevationInfo,g=o.excludedFeature,Ot(o.position,c,u)),y(n)&&y(c)||(Zt(e.extent,e.spatialReference,ot,u),d(n)&&wt(ot,n)&&this._onObserverPositionChange(n,a,l,!1),d(c)&&wt(ot,c)&&this._onTargetPositionChange(t,c,p,g,!1),d(n)&&d(c)&&Xt(ot,n,c)&&t.notifyInputPointsChanged())})}_connectComputationToTask(t){let e=ie;const i={computation:t,interpolationInfo:{originalIntersection:v(),originalObserver:v(),originalTarget:v()}};return k([b(()=>this.getLineOfSightComputationDependencies(t),()=>{e=It(e),e=ne(async o=>{await oe(this._frameTask.schedule(()=>this._computeResult(i),o))})},A),Q(()=>e=It(e))])}_connectComputation(t){const e=this._computationHandles;e.has(t)||e.add([this._connectComputationToTarget(t),this._connectComputationToObserver(t),this._connectComputationToRenderSpaceObserver(t),this._connectComputationToCamera(t),this._connectComputationToSlicePlane(t),this._connectComputationToElevation(t),this._connectComputationToTask(t)],t)}_disconnectAnalysis(t){this._computationHandles.remove(t)}_onComputationCollectionChange(t){t.added.forEach(e=>this._connectComputation(e)),t.removed.forEach(e=>this._disconnectAnalysis(e))}_onTargetsChange(){return this._computations.removeAll(),this.analysis.targets.forEach(t=>this._addTarget(t)),this._updatingHandles.addOnCollectionChange(()=>this.analysis.targets,t=>this._onTargetCollectionChange(t))}_onTargetCollectionChange(t){t.added.forEach(e=>this._addTarget(e)),t.removed.forEach(e=>this._removeTarget(e))}_onCursorTargetChange(t,e){d(e)&&this._removeTarget(e),d(t)&&this._addTarget(t)}_addTarget(t){this._computations.some(e=>e.target===t)||this._computations.add(new $({target:t}))}_removeTarget(t){const e=this._computations.find(i=>i.target===t);this._computations.remove(e)}_connectObserver(){return k([b(()=>({observerPosition:d(this.analysis.observer)?this.analysis.observer.position:null,observerElevationInfo:d(this.analysis.observer)?this.analysis.observer.elevationInfo:null,observerFeatureInfo:d(this.analysis.observer)?this.analysis.observer.excludedFeature:null}),({observerPosition:t,observerElevationInfo:e,observerFeatureInfo:i})=>this._onObserverPositionChange(t,e,i,!0),A)])}_connectComputations(){let t=null;return k([b(()=>this._computations,()=>{G(t),t=this._updatingHandles.addOnCollectionChange(()=>this._computations,e=>this._onComputationCollectionChange(e)),this._computations.forEach(e=>this._connectComputation(e))},A),Q(()=>t=G(t))])}_connectTargets(){let t=null;return k([b(()=>this.analysis.targets,()=>{t=G(t),t=this._onTargetsChange()},A),b(()=>this.analysisViewData.cursorTarget,(e,i)=>{this._onCursorTargetChange(e,i)}),Q(()=>{t=G(t)})])}get _isCameraDirty(){const t=this.analysisViewData.elevationAlignedObserver,{view:e}=this,{renderCoordsHelper:i}=e;if(y(t)||y(i))return!1;const o=nt;i.toRenderCoords(t,o);const n=e.state.camera.computeScreenPixelSizeAt(o);return Math.abs((n-this._screenPixelSize)/this._screenPixelSize)>ce}_getEffectiveElevationInfo(t,e){return t.hasZ?st(e,{mode:"absolute-height",offset:0}):{mode:"on-the-ground",offset:0}}};s([r({constructOnly:!0})],m.prototype,"analysis",void 0),s([r({constructOnly:!0})],m.prototype,"analysisViewData",void 0),s([r({constructOnly:!0})],m.prototype,"view",void 0),s([r()],m.prototype,"updating",null),s([r()],m.prototype,"priority",null),s([r()],m.prototype,"updateOnCameraChange",void 0),s([r()],m.prototype,"_computations",null),s([r()],m.prototype,"_elevationAlignedObserverPositionRenderSpace",null),s([r()],m.prototype,"_effectiveObserverElevationMode",void 0),s([r()],m.prototype,"_observerFeatureId",void 0),s([r()],m.prototype,"_screenPixelSize",null),s([r({readOnly:!0})],m.prototype,"_updatingHandles",void 0),s([r()],m.prototype,"_frameTask",void 0),s([r()],m.prototype,"_isCameraDirty",null),m=s([F("esri.views.3d.analysis.LineOfSight.LineOfSightController")],m);const ce=.1,nt=v(),de=Vt(),ot=te(),pe=new gt,he=new gt;let V=class extends z{constructor(t){super(t),this._lineOfSightVisualizations=[],this._handle=null,this._computationHandles=new ht}initialize(){this._handle=this._connectAnalysis()}destroy(){this._handle=G(this._handle),this._computationHandles=B(this._computationHandles)}get visible(){return this.analysisViewData.visible}get testInfo(){return{visualizations:this._lineOfSightVisualizations}}get _configuration(){return this.analysisViewData.configuration}createLineOfSightVisualization(){const t=this._configuration,e={view:this.view,attached:!0,width:t.outerWidth,innerWidth:t.innerWidth},i=h.toUnitRGBA(t.visibleOuterColor),o=h.toUnitRGBA(t.visibleInnerColor),n=h.toUnitRGBA(t.occludedOuterColor),a=h.toUnitRGBA(t.occludedInnerColor),l=h.toUnitRGBA(t.undefinedOuterColor),c=h.toUnitRGBA(t.undefinedInnerColor),p={visibleLineVisualElement:new ct(X(Z({},e),{color:i,innerColor:o})),occludedLineVisualElement:new ct(X(Z({},e),{color:n,innerColor:a})),undefinedLineVisualElement:new ct(X(Z({},e),{color:l,innerColor:c}))};return this._lineOfSightVisualizations.push(p),p}destroyLineOfSightVisualization(t){t.visibleLineVisualElement=B(t.visibleLineVisualElement),t.occludedLineVisualElement=B(t.occludedLineVisualElement),t.undefinedLineVisualElement=B(t.undefinedLineVisualElement),this._lineOfSightVisualizations.splice(this._lineOfSightVisualizations.indexOf(t),1)}updateLineOfSightVisualization(t,e){const i=this._configuration,{computationResult:o,inputPoints:n}=t,{start:a,end:l,intersection:c,isValid:p,isTargetVisible:g}=o,{observer:u}=n,_=me;_[12]=u[0],_[13]=u[1],_[14]=u[2];const L=K(ve,a,u),x=K(ge,l,u),Y=K(ye,c,u),{visibleLineVisualElement:f,occludedLineVisualElement:S,undefinedLineVisualElement:H}=e,R=y(this.analysisViewData.elevationAlignedObserver)||y(t.elevationAlignedTargetLocation),j=this.visible&&!R;f.visible=j,S.visible=j,H.visible=j,j&&(f.geometry=null,S.geometry=null,H.geometry=null,p?g?(f.geometry=[[E(L),E(x)]],f.transform=_,f.color=h.toUnitRGBA(i.visibleOuterColor)):(f.geometry=[[E(L),E(Y)]],f.transform=_,f.color=h.toUnitRGBA(i.occludedOuterColor),S.geometry=[[E(Y),E(x)]],S.transform=_):(H.geometry=[[E(L),E(x)]],H.transform=_))}getLineOfSightVisualizationDependencies(t){const{computationResult:e}=t,{occludedOuterColor:i,visibleOuterColor:o}=this._configuration;return{computationResult:e,occludedOuterColor:i,visibleOuterColor:o,visible:this.visible}}_connectComputation(t){const e=this._computationHandles;if(e.has(t))return;const i=this.createLineOfSightVisualization();e.add([b(()=>this.getLineOfSightVisualizationDependencies(t),()=>this.updateLineOfSightVisualization(t,i),A),Q(()=>this.destroyLineOfSightVisualization(i))],t)}_disconnectComputation(t){this._computationHandles.remove(t)}_connectAnalysis(){let t=null;return k([b(()=>this.analysisViewData.computations,e=>{t=G(t),t=e.on("change",i=>this._onComputationsCollectionChange(i)),this._onComputationsCollectionChange({target:e,added:e.items,removed:[],moved:[]})},A),Q(()=>t=G(t))])}_onComputationsCollectionChange(t){t.added.forEach(e=>this._connectComputation(e)),t.removed.forEach(e=>this._disconnectComputation(e))}};s([r({constructOnly:!0})],V.prototype,"analysis",void 0),s([r({constructOnly:!0})],V.prototype,"analysisViewData",void 0),s([r({constructOnly:!0})],V.prototype,"view",void 0),s([r({readOnly:!0})],V.prototype,"visible",null),s([r()],V.prototype,"testInfo",null),s([r()],V.prototype,"_configuration",null),V=s([F("esri.views.3d.analysis.LineOfSight.LineOfSightVisualization")],V);const ve=v(),ge=v(),ye=v(),me=se();let C=class extends ue(re(At.EventedMixin(z))){constructor(t){super(t),this.type="line-of-sight-view-3d",this.computations=new ae,this.elevationAlignedObserver=null,this.configuration=new w,this.observerEngineLocation=v(),this.cursorTarget=null}initialize(){const t=this.view,e=this.analysis;this._analysisController=new m({analysis:e,analysisViewData:this,view:t}),this._analysisVisualization=new V({analysis:e,analysisViewData:this,view:t}),this.handles.add([this._analysisController.on("result-changed",i=>{i.target!==this.cursorTarget&&this.emit("result-changed",i)})])}destroy(){this._analysisController=B(this._analysisController),this._analysisVisualization=B(this._analysisVisualization)}get results(){return this.computations.map(t=>t.result)}get priority(){return this._analysisController.priority}set priority(t){this._analysisController.priority=t}get updating(){return d(this._analysisController)&&this._analysisController.updating}getResultForTarget(t){const e=this.computations.find(i=>i.target===t);return le(e,i=>i.result)}get testInfo(){return{visualization:this._analysisVisualization,controller:this._analysisController}}};s([r()],C.prototype,"type",void 0),s([r()],C.prototype,"analysis",void 0),s([r({readOnly:!0})],C.prototype,"results",null),s([r()],C.prototype,"priority",null),s([r()],C.prototype,"computations",void 0),s([r()],C.prototype,"elevationAlignedObserver",void 0),s([r()],C.prototype,"configuration",void 0),s([r()],C.prototype,"observerEngineLocation",void 0),s([r()],C.prototype,"cursorTarget",void 0),s([r()],C.prototype,"updating",null),s([r()],C.prototype,"_analysisController",void 0),s([r()],C.prototype,"_analysisVisualization",void 0),C=s([F("esri.views.3d.analysis.LineOfSightAnalysisView3D")],C);const be=C;export{be as default};
