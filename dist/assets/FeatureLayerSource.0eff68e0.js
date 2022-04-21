var L=Object.defineProperty,Z=Object.defineProperties;var X=Object.getOwnPropertyDescriptors;var J=Object.getOwnPropertySymbols;var Y=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var G=(t,e,r)=>e in t?L(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,i=(t,e)=>{for(var r in e||(e={}))Y.call(e,r)&&G(t,r,e[r]);if(J)for(var r of J(e))K.call(e,r)&&G(t,r,e[r]);return t},c=(t,e)=>Z(t,X(e));import{cw as H,t as _,cx as W,cy as ee,cz as te,cA as b,D,cB as re,cC as se,cD as ae,cE as ne,bF as m,cF as C,cG as oe,cH as ie,am as $,cI as j,cJ as A,r as g,cv as ue,cK as le,cL as de,cM as ce,cN as M,cO as v,e as y,d as p,n as N,y as he,cP as U,a6 as T,cQ as ye,co as pe,I as w,cR as fe,cS as me,cT as ge,cU as Fe,cV as be,cW as Re,cX as Oe,g as Se,cY as Ie,bp as k}from"./index.165b2b59.js";import{n as qe}from"./clientSideDefaults.b5bf6083.js";import{n as _e,s as xe}from"./executeForIds.46c65fb8.js";import"./QueryEngineCapabilities.c2e9875c.js";function we(t,e){return e}function P(t,e,r,s){switch(r){case 0:return x(t,e+s,0);case 1:return t.originPosition==="lowerLeft"?x(t,e+s,1):Ee(t,e+s,1)}}function V(t,e,r,s){return r===2?x(t,e,2):P(t,e,r,s)}function je(t,e,r,s){return r===2?x(t,e,3):P(t,e,r,s)}function ve(t,e,r,s){return r===3?x(t,e,3):V(t,e,r,s)}function x({translate:t,scale:e},r,s){return t[s]+r*e[s]}function Ee({translate:t,scale:e},r,s){return t[s]-r*e[s]}class Te{constructor(e){this.options=e,this.geometryTypes=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"],this.previousCoordinate=[0,0],this.transform=null,this.applyTransform=we,this.lengths=[],this.currentLengthIndex=0,this.toAddInCurrentPath=0,this.vertexDimension=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,this._attributesConstructor=()=>{}}createFeatureResult(){return{fields:[],features:[]}}finishFeatureResult(e){if(this.options.applyTransform&&(e.transform=null),this._attributesConstructor=()=>{},this.coordinateBuffer=null,this.lengths.length=0,!e.hasZ)return;const r=H(e.geometryType,this.options.sourceSpatialReference,e.spatialReference);if(!_(r))for(const s of e.features)r(s.geometry)}createSpatialReference(){return{}}addField(e,r){e.fields.push(r);const s=e.fields.map(a=>a.name);this._attributesConstructor=function(){for(const a of s)this[a]=null}}addFeature(e,r){e.features.push(r)}prepareFeatures(e){switch(this.transform=e.transform,this.options.applyTransform&&e.transform&&(this.applyTransform=this._deriveApplyTransform(e)),this.vertexDimension=2,e.hasZ&&this.vertexDimension++,e.hasM&&this.vertexDimension++,e.geometryType){case"esriGeometryPoint":this.addCoordinate=(r,s,a)=>this.addCoordinatePoint(r,s,a),this.createGeometry=r=>this.createPointGeometry(r);break;case"esriGeometryPolygon":this.addCoordinate=(r,s,a)=>this._addCoordinatePolygon(r,s,a),this.createGeometry=r=>this._createPolygonGeometry(r);break;case"esriGeometryPolyline":this.addCoordinate=(r,s,a)=>this._addCoordinatePolyline(r,s,a),this.createGeometry=r=>this._createPolylineGeometry(r);break;case"esriGeometryMultipoint":this.addCoordinate=(r,s,a)=>this._addCoordinateMultipoint(r,s,a),this.createGeometry=r=>this._createMultipointGeometry(r);break;default:W(e.geometryType)}}createFeature(){return this.lengths.length=0,this.currentLengthIndex=0,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,{attributes:new this._attributesConstructor}}allocateCoordinates(){}addLength(e,r,s){this.lengths.length===0&&(this.toAddInCurrentPath=r),this.lengths.push(r)}addQueryGeometry(e,r){const{queryGeometry:s,queryGeometryType:a}=r,n=ee(s.clone(),s,!1,!1,this.transform),o=te(n,a,!1,!1);e.queryGeometryType=a,e.queryGeometry=i({},o)}createPointGeometry(e){const r={x:0,y:0,spatialReference:e.spatialReference};return e.hasZ&&(r.z=0),e.hasM&&(r.m=0),r}addCoordinatePoint(e,r,s){switch(r=this.applyTransform(this.transform,r,s,0),s){case 0:e.x=r;break;case 1:e.y=r;break;case 2:"z"in e?e.z=r:e.m=r;break;case 3:e.m=r}}_transformPathLikeValue(e,r){let s=0;return r<=1&&(s=this.previousCoordinate[r],this.previousCoordinate[r]+=e),this.applyTransform(this.transform,e,r,s)}_addCoordinatePolyline(e,r,s){this._dehydratedAddPointsCoordinate(e.paths,r,s)}_addCoordinatePolygon(e,r,s){this._dehydratedAddPointsCoordinate(e.rings,r,s)}_addCoordinateMultipoint(e,r,s){s===0&&e.points.push([]);const a=this._transformPathLikeValue(r,s);e.points[e.points.length-1].push(a)}_createPolygonGeometry(e){return{rings:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_createPolylineGeometry(e){return{paths:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_createMultipointGeometry(e){return{points:[],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_dehydratedAddPointsCoordinate(e,r,s){s===0&&this.toAddInCurrentPath--==0&&(e.push([]),this.toAddInCurrentPath=this.lengths[++this.currentLengthIndex]-1,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0);const a=this._transformPathLikeValue(r,s),n=e[e.length-1];s===0&&(this.coordinateBufferPtr=0,this.coordinateBuffer=new Array(this.vertexDimension),n.push(this.coordinateBuffer)),this.coordinateBuffer[this.coordinateBufferPtr++]=a}_deriveApplyTransform(e){const{hasZ:r,hasM:s}=e;return r&&s?ve:r?V:s?je:P}}async function De(t,e,r){const s=b(t),a=i({},r),n=D.from(e),o=!n.quantizationParameters,{data:l}=await re(s,n,new Te({sourceSpatialReference:n.sourceSpatialReference,applyTransform:o}),a);return l}function Ce(t){const e=t.toJSON();return e.attachmentTypes&&(e.attachmentTypes=e.attachmentTypes.join(",")),e.keywords&&(e.keywords=e.keywords.join(",")),e.globalIds&&(e.globalIds=e.globalIds.join(",")),e.objectIds&&(e.objectIds=e.objectIds.join(",")),e.size&&(e.size=e.size.join(",")),e}function B(t,e){const r={};for(const s of t){const{parentObjectId:a,parentGlobalId:n,attachmentInfos:o}=s;for(const l of o){const{id:u}=l,d=se(ae(`${e}/${a}/attachments/${u}`)),h=ne.fromJSON(l);h.set({url:d,parentObjectId:a,parentGlobalId:n}),r[a]?r[a].push(h):r[a]=[h]}}return r}function $e(t,e,r){let s={query:C(i(c(i({},t.query),{f:"json"}),Ce(e)))};return r&&(s=c(i(i({},r),s),{query:i(i({},r.query),s.query)})),m(t.path+"/queryAttachments",s)}async function Ae(t,e,r){const s=b(t);return $e(s,oe.from(e),i({},r)).then(a=>B(a.data.attachmentGroups,s.path))}async function Ne(t,e,r){const s=b(t);return ie(s,D.from(e),i({},r)).then(a=>({count:a.data.count,extent:$.fromJSON(a.data.extent)}))}function Pe(t,e){const r=t.toJSON();return r.objectIds&&(r.objectIds=r.objectIds.join(",")),r.orderByFields&&(r.orderByFields=r.orderByFields.join(",")),!r.outFields||e!=null&&e.returnCountOnly?delete r.outFields:r.outFields.includes("*")?r.outFields="*":r.outFields=r.outFields.join(","),r.outSpatialReference&&(r.outSR=r.outSR.wkid||JSON.stringify(r.outSR.toJSON()),delete r.outSpatialReference),r.dynamicDataSource&&(r.layer=JSON.stringify({source:r.dynamicDataSource}),delete r.dynamicDataSource),r}async function Je(t,e,r){const s=await z(t,e,r),a=s.data,n=a.geometryType,o=a.spatialReference,l={};for(const u of a.relatedRecordGroups){const d={fields:void 0,objectIdFieldName:void 0,geometryType:n,spatialReference:o,hasZ:!!a.hasZ,hasM:!!a.hasM,features:u.relatedRecords};if(u.objectId!=null)l[u.objectId]=d;else for(const h in u)u.hasOwnProperty(h)&&h!=="relatedRecords"&&(l[u[h]]=d)}return c(i({},s),{data:l})}async function Ge(t,e,r){const s=await z(t,e,r,{returnCountOnly:!0}),a=s.data,n={};for(const o of a.relatedRecordGroups)o.objectId!=null&&(n[o.objectId]=o.count);return c(i({},s),{data:n})}async function z(t,e,r={},s){const a=C(i(i(c(i({},t.query),{f:"json"}),s),Pe(e,s)));return m(t.path+"/queryRelatedRecords",c(i({},r),{query:i(i({},r.query),a)}))}async function ke(t,e,r){e=j.from(e);const s=b(t);return Je(s,e,r).then(a=>{const n=a.data,o={};return Object.keys(n).forEach(l=>o[l]=A.fromJSON(n[l])),o})}async function Qe(t,e,r){e=j.from(e);const s=b(t);return Ge(s,e,i({},r)).then(a=>a.data)}const Q="Layer does not support extent calculation.";function Me(t,e){var r,s;const a=t.geometry,n=t.toJSON(),o=n;if(g(a)&&(o.geometry=JSON.stringify(a),o.geometryType=de(a),o.inSR=a.spatialReference.wkid||JSON.stringify(a.spatialReference)),(r=n.topFilter)!=null&&r.groupByFields&&(o.topFilter.groupByFields=n.topFilter.groupByFields.join(",")),(s=n.topFilter)!=null&&s.orderByFields&&(o.topFilter.orderByFields=n.topFilter.orderByFields.join(",")),n.topFilter&&(o.topFilter=JSON.stringify(o.topFilter)),n.objectIds&&(o.objectIds=n.objectIds.join(",")),n.orderByFields&&(o.orderByFields=n.orderByFields.join(",")),n.outFields&&!(e!=null&&e.returnCountOnly||e!=null&&e.returnExtentOnly||e!=null&&e.returnIdsOnly)?n.outFields.includes("*")?o.outFields="*":o.outFields=n.outFields.join(","):delete o.outFields,n.outSR?o.outSR=n.outSR.wkid||JSON.stringify(n.outSR):a&&n.returnGeometry&&(o.outSR=o.inSR),n.returnGeometry&&delete n.returnGeometry,n.timeExtent){const l=n.timeExtent,{start:u,end:d}=l;u==null&&d==null||(o.time=u===d?u:`${u==null?"null":u},${d==null?"null":d}`),delete n.timeExtent}return o}async function Ue(t,e,r,s){const a=await E(t,e,"json",s);return ce(e,r,a.data),a}async function Ve(t,e,r){return g(e.timeExtent)&&e.timeExtent.isEmpty?{data:{objectIds:[]}}:E(t,e,"json",r,{returnIdsOnly:!0})}async function Be(t,e,r){return g(e.timeExtent)&&e.timeExtent.isEmpty?{data:{count:0,extent:null}}:E(t,e,"json",r,{returnExtentOnly:!0,returnCountOnly:!0}).then(s=>{const a=s.data;if(a.hasOwnProperty("extent"))return s;if(a.features)throw new Error(Q);if(a.hasOwnProperty("count"))throw new Error(Q);return s})}function ze(t,e,r){return g(e.timeExtent)&&e.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):E(t,e,"json",r,{returnIdsOnly:!0,returnCountOnly:!0})}function E(t,e,r,s={},a={}){const n=typeof t=="string"?M(t):t,o=e.geometry?[e.geometry]:[];return s.responseType=r==="pbf"?"array-buffer":"json",ue(o,null,s).then(l=>{const u=l&&l[0];g(u)&&((e=e.clone()).geometry=u);const d=C(i(i(c(i({},n.query),{f:r}),a),Me(e,a)));return m(le(n.path,"queryTopFeatures"),c(i({},s),{query:i(i({},d),s.query)}))})}async function Le(t,e,r,s){const a=b(t),n=i({},s),{data:o}=await Ue(a,v.from(e),r,n);return A.fromJSON(o)}async function Ze(t,e,r){const s=b(t);return(await Ve(s,v.from(e),i({},r))).data.objectIds}async function Xe(t,e,r){const s=b(t),a=await Be(s,v.from(e),i({},r));return{count:a.data.count,extent:$.fromJSON(a.data.extent)}}async function Ye(t,e,r){const s=b(t);return(await ze(s,v.from(e),i({},r))).data.count}let I=class extends he{constructor(...t){super(...t),this.requestOptions=null,this.url=null}normalizeCtorArgs(t,e){return typeof t!="string"?t:i({url:t},e)}get parsedUrl(){return this._parseUrl(this.url)}_parseUrl(t){return t?M(t):null}_encode(t,e,r){const s={};for(const a in t){if(a==="declaredClass")continue;const n=t[a];if(n!=null&&typeof n!="function")if(Array.isArray(n)){s[a]=[];for(let o=0;o<n.length;o++)s[a][o]=this._encode(n[o])}else if(typeof n=="object")if(n.toJSON){const o=n.toJSON(r&&r[a]);s[a]=e?o:JSON.stringify(o)}else s[a]=e?n:JSON.stringify(n);else s[a]=n}return s}};y([p({readOnly:!0})],I.prototype,"parsedUrl",null),y([p()],I.prototype,"requestOptions",void 0),y([p({type:String})],I.prototype,"url",void 0),I=y([N("esri.tasks.Task")],I);const Ke=I;let F=class extends Ke{constructor(t){super(t),this.dynamicDataSource=null,this.fieldsIndex=null,this.format="json",this.gdbVersion=null,this.infoFor3D=null,this.sourceSpatialReference=null}execute(t,e){return this.executeJSON(t,e).then(r=>this.featureSetFromJSON(t,r,e))}async executeJSON(t,e){var r;const s=i(i({},this.requestOptions),e),a=this._normalizeQuery(t),n=((r=t.outStatistics)==null?void 0:r[0])!=null,o=T("featurelayer-pbf-statistics"),l=!n||o;let u;if(this.format==="pbf"&&l)try{u=await De(this.url,a,s)}catch(d){if(d.name!=="query:parsing-pbf")throw d;this.format="json"}return this.format!=="json"&&l||(u=await ye(this.url,a,s)),this._normalizeFields(u.fields),u}async featureSetFromJSON(t,e,r){if(!this._queryIs3DObjectFormat(t)||_(this.infoFor3D)||!e.features||!e.features.length)return A.fromJSON(e);const{meshFeatureSetFromJSON:s}=await pe(import("./meshFeatureSet.96434ef4.js"),r);return s(t,this.infoFor3D,e)}executeForCount(t,e){const r=i(i({},this.requestOptions),e),s=this._normalizeQuery(t);return _e(this.url,s,r)}executeForExtent(t,e){const r=i(i({},this.requestOptions),e),s=this._normalizeQuery(t);return Ne(this.url,s,r)}executeForIds(t,e){const r=i(i({},this.requestOptions),e),s=this._normalizeQuery(t);return xe(this.url,s,r)}executeRelationshipQuery(t,e){t=j.from(t);const r=i(i({},this.requestOptions),e);return(this.gdbVersion||this.dynamicDataSource)&&((t=t.clone()).gdbVersion=t.gdbVersion||this.gdbVersion,t.dynamicDataSource=t.dynamicDataSource||this.dynamicDataSource),ke(this.url,t,r)}executeRelationshipQueryForCount(t,e){t=j.from(t);const r=i(i({},this.requestOptions),e);return(this.gdbVersion||this.dynamicDataSource)&&((t=t.clone()).gdbVersion=t.gdbVersion||this.gdbVersion,t.dynamicDataSource=t.dynamicDataSource||this.dynamicDataSource),Qe(this.url,t,r)}executeAttachmentQuery(t,e){const r=i(i({},this.requestOptions),e);return Ae(this.url,t,r)}executeTopFeaturesQuery(t,e){const r=i(i({},this.requestOptions),e);return Le(this.parsedUrl,t,this.sourceSpatialReference,r)}executeForTopIds(t,e){const r=i(i({},this.requestOptions),e);return Ze(this.parsedUrl,t,r)}executeForTopExtents(t,e){const r=i(i({},this.requestOptions),e);return Xe(this.parsedUrl,t,r)}executeForTopCount(t,e){const r=i(i({},this.requestOptions),e);return Ye(this.parsedUrl,t,r)}_normalizeQuery(t){let e=D.from(t);if(e.sourceSpatialReference=e.sourceSpatialReference||this.sourceSpatialReference,(this.gdbVersion||this.dynamicDataSource)&&(e=e===t?e.clone():e,e.gdbVersion=t.gdbVersion||this.gdbVersion,e.dynamicDataSource=t.dynamicDataSource?U.from(t.dynamicDataSource):this.dynamicDataSource),g(this.infoFor3D)&&this._queryIs3DObjectFormat(t)){e=e===t?e.clone():e,e.formatOf3DObjects=null;for(const r of this.infoFor3D.queryFormats){if(r.id==="3D_glb"){e.formatOf3DObjects=r.id;break}r.id!=="3D_gltf"||e.formatOf3DObjects||(e.formatOf3DObjects=r.id)}if(!e.formatOf3DObjects)throw new w("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");if(_(e.outFields)||!e.outFields.includes("*")){e=e===t?e.clone():e,_(e.outFields)&&(e.outFields=[]);const{originX:r,originY:s,originZ:a,translationX:n,translationY:o,translationZ:l,scaleX:u,scaleY:d,scaleZ:h,rotationX:O,rotationY:S,rotationZ:f,rotationDeg:R}=this.infoFor3D.transformFieldRoles;e.outFields.push(r,s,a,n,o,l,u,d,h,O,S,f,R)}}return e}_normalizeFields(t){if(g(this.fieldsIndex)&&g(t))for(const e of t){const r=this.fieldsIndex.get(e.name);r&&Object.assign(e,r.toJSON())}}_queryIs3DObjectFormat(t){return g(this.infoFor3D)&&t.returnGeometry&&t.multipatchOption!=="xyFootprint"&&!t.outStatistics}};y([p({type:U})],F.prototype,"dynamicDataSource",void 0),y([p()],F.prototype,"fieldsIndex",void 0),y([p()],F.prototype,"format",void 0),y([p()],F.prototype,"gdbVersion",void 0),y([p()],F.prototype,"infoFor3D",void 0),y([p()],F.prototype,"sourceSpatialReference",void 0),F=y([N("esri.tasks.QueryTask")],F);const He=F,We=new fe({originalAndCurrentFeatures:"original-and-current-features",none:"none"});async function et(t){return typeof t=="string"?k(t)||{data:t}:new Promise((e,r)=>{const s=new FileReader;s.readAsDataURL(t),s.onload=()=>e(k(s.result)),s.onerror=a=>r(a)})}const tt=new Set(["Feature Layer","Table"]);let q=class extends me{constructor(){super(...arguments),this.type="feature-layer",this.refresh=ge(async()=>{var t,e;await this.load();const r=(t=this.sourceJSON.editingInfo)==null?void 0:t.lastEditDate;if(r==null)return{dataChanged:!0,updates:{}};try{await this._fetchService(null)}catch{return{dataChanged:!0,updates:{}}}const s=r!==((e=this.sourceJSON.editingInfo)==null?void 0:e.lastEditDate);return{dataChanged:s,updates:s?{editingInfo:this.sourceJSON.editingInfo,extent:this.sourceJSON.extent}:null}})}load(t){const e=g(t)?t.signal:null;return this.addResolvingPromise(this._fetchService(this.layer.sourceJSON,e)),Promise.resolve(this)}get queryTask(){const{capabilities:{query:{supportsFormatPBF:t}},parsedUrl:e,dynamicDataSource:r,infoFor3D:s,gdbVersion:a,spatialReference:n,fieldsIndex:o}=this.layer,l=T("featurelayer-pbf")&&t&&_(s)?"pbf":"json";return new He({url:e.path,format:l,fieldsIndex:o,infoFor3D:s,dynamicDataSource:r,gdbVersion:a,sourceSpatialReference:n})}async addAttachment(t,e){await this.load();const r=t.attributes[this.layer.objectIdField],s=this.layer.parsedUrl.path+"/"+r+"/addAttachment",a=this._getLayerRequestOptions(),n=this._getFormDataForAttachment(e,a.query);try{const o=await m(s,{body:n});return this._createFeatureEditResult(o.data.addAttachmentResult)}catch(o){throw this._createAttachmentErrorResult(r,o)}}async updateAttachment(t,e,r){await this.load();const s=t.attributes[this.layer.objectIdField],a=this.layer.parsedUrl.path+"/"+s+"/updateAttachment",n=this._getLayerRequestOptions({query:{attachmentId:e}}),o=this._getFormDataForAttachment(r,n.query);try{const l=await m(a,{body:o});return this._createFeatureEditResult(l.data.updateAttachmentResult)}catch(l){throw this._createAttachmentErrorResult(s,l)}}async applyEdits(t,e){await this.load();const r=t.addFeatures.map(this._serializeFeature,this),s=t.updateFeatures.map(this._serializeFeature,this),a=this._getFeatureIds(t.deleteFeatures,e==null?void 0:e.globalIdUsed);Fe(r,s,this.layer.spatialReference);const n=[],o=[],l=[...t.deleteAttachments];for(const f of t.addAttachments)n.push(await this._serializeAttachment(f));for(const f of t.updateAttachments)o.push(await this._serializeAttachment(f));const u=n.length||o.length||l.length?{adds:n,updates:o,deletes:l}:null,d={gdbVersion:(e==null?void 0:e.gdbVersion)||this.layer.gdbVersion,rollbackOnFailure:e==null?void 0:e.rollbackOnFailureEnabled,useGlobalIds:e==null?void 0:e.globalIdUsed,returnEditMoment:e==null?void 0:e.returnEditMoment,usePreviousEditMoment:e==null?void 0:e.usePreviousEditMoment,sessionId:e==null?void 0:e.sessionId};e!=null&&e.returnServiceEditsOption?(d.edits=JSON.stringify([{id:this.layer.layerId,adds:r,updates:s,deletes:a,attachments:u}]),d.returnServiceEditsOption=We.toJSON(e==null?void 0:e.returnServiceEditsOption),d.returnServiceEditsInSourceSR=e==null?void 0:e.returnServiceEditsInSourceSR):(d.adds=r.length?JSON.stringify(r):null,d.updates=s.length?JSON.stringify(s):null,d.deletes=a.length?e!=null&&e.globalIdUsed?JSON.stringify(a):a.join(","):null,d.attachments=u&&JSON.stringify(u));const h=this._getLayerRequestOptions({method:"post",query:d}),O=e!=null&&e.returnServiceEditsOption?this.layer.url:this.layer.parsedUrl.path,S=await m(O+"/applyEdits",h);return this._createEditsResult(S)}async deleteAttachments(t,e){await this.load();const r=t.attributes[this.layer.objectIdField],s=this.layer.parsedUrl.path+"/"+r+"/deleteAttachments";try{return(await m(s,this._getLayerRequestOptions({query:{attachmentIds:e.join(",")},method:"post"}))).data.deleteAttachmentResults.map(this._createFeatureEditResult)}catch(a){throw this._createAttachmentErrorResult(r,a)}}fetchRecomputedExtents(t={}){const e=t.signal;return this.load({signal:e}).then(async()=>{const r=this._getLayerRequestOptions(c(i({},t),{query:{returnUpdates:!0}})),{layerId:s,url:a}=this.layer,{data:n}=await m(`${a}/${s}`,r),{id:o,extent:l,fullExtent:u,timeExtent:d}=n,h=l||u;return{id:o,fullExtent:h&&$.fromJSON(h),timeExtent:d&&be.fromJSON({start:d[0],end:d[1]})}})}async queryAttachments(t,e={}){const{parsedUrl:r}=this.layer,s=r.path;await this.load();const a=this._getLayerRequestOptions(e);if(!this.layer.get("capabilities.operations.supportsQueryAttachments")){const{objectIds:n}=t,o=[];for(const l of n){const u=s+"/"+l+"/attachments";o.push(m(u,a))}return Promise.all(o).then(l=>n.map((u,d)=>({parentObjectId:u,attachmentInfos:l[d].data.attachmentInfos}))).then(l=>B(l,s))}return this.queryTask.executeAttachmentQuery(t,a)}async queryFeatures(t,e){return await this.load(),this.queryTask.execute(t,c(i({},e),{query:this._createRequestQueryOptions(e)}))}async queryFeaturesJSON(t,e){return await this.load(),this.queryTask.executeJSON(t,c(i({},e),{query:this._createRequestQueryOptions(e)}))}async queryObjectIds(t,e){return await this.load(),this.queryTask.executeForIds(t,c(i({},e),{query:this._createRequestQueryOptions(e)}))}async queryFeatureCount(t,e){return await this.load(),this.queryTask.executeForCount(t,c(i({},e),{query:this._createRequestQueryOptions(e)}))}async queryExtent(t,e){return await this.load(),this.queryTask.executeForExtent(t,c(i({},e),{query:this._createRequestQueryOptions(e)}))}async queryRelatedFeatures(t,e){return await this.load(),this.queryTask.executeRelationshipQuery(t,c(i({},e),{query:this._createRequestQueryOptions(e)}))}async queryRelatedFeaturesCount(t,e){return await this.load(),this.queryTask.executeRelationshipQueryForCount(t,c(i({},e),{query:this._createRequestQueryOptions(e)}))}async queryTopFeatures(t,e){return await this.load(),this.queryTask.executeTopFeaturesQuery(t,c(i({},e),{query:this._createRequestQueryOptions(e)}))}async queryTopObjectIds(t,e){return await this.load(),this.queryTask.executeForTopIds(t,c(i({},e),{query:this._createRequestQueryOptions(e)}))}async queryTopExtents(t,e){return await this.load(),this.queryTask.executeForTopExtents(t,c(i({},e),{query:this._createRequestQueryOptions(e)}))}async queryTopCount(t,e){return await this.load(),this.queryTask.executeForTopCount(t,c(i({},e),{query:this._createRequestQueryOptions(e)}))}_createRequestQueryOptions(t){const e=i(c(i({},this.layer.customParameters),{token:this.layer.apiKey}),t==null?void 0:t.query);return this.layer.datesInUnknownTimezone&&(e.timeReferenceUnknownClient=!0),e}async _fetchService(t,e){if(!t){const{data:s}=await m(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:T("featurelayer-advanced-symbols")?{returnAdvancedSymbols:!0}:{},signal:e}));t=s}this.sourceJSON=this._patchServiceJSON(t);const r=t.type;if(!tt.has(r))throw new w("feature-layer-source:unsupported-type",`Source type "${r}" is not supported`)}_patchServiceJSON(t){var e;if(t.type!=="Table"&&t.geometryType&&(t==null||(e=t.drawingInfo)==null||!e.renderer)&&!t.defaultSymbol){const r=qe(t.geometryType).renderer;Re("drawingInfo.renderer",r,t)}return t.geometryType==="esriGeometryMultiPatch"&&t.infoFor3D&&(t.geometryType="mesh"),t}_serializeFeature(t){const{geometry:e,attributes:r}=t;return _(e)?{attributes:r}:e.type==="mesh"||e.type==="extent"?null:{geometry:e.toJSON(),attributes:r}}async _serializeAttachment(t){const{feature:e,attachment:r}=t,{globalId:s,name:a,contentType:n,data:o,uploadId:l}=r,u={globalId:s,parentGlobalId:null,contentType:null,name:null,uploadId:null,data:null};if(e&&(u.parentGlobalId="attributes"in e?e.attributes&&e.attributes[this.layer.globalIdField]:e.globalId),l)u.uploadId=l;else if(o){const d=await et(o);u.contentType=d.mediaType,u.data=d.data,o instanceof File&&(u.name=o.name)}return a&&(u.name=a),n&&(u.contentType=n),u}_getFeatureIds(t,e){const r=t[0];return r?this._canUseGlobalIds(e,t)?this._getGlobalIdsFromFeatureIdentifier(t):"objectId"in r?this._getObjectIdsFromFeatureIdentifier(t):this._getIdsFromFeatures(t):[]}_getIdsFromFeatures(t){const e=this.layer.objectIdField;return t.map(r=>r.attributes&&r.attributes[e])}_canUseGlobalIds(t,e){return t&&"globalId"in e[0]}_getObjectIdsFromFeatureIdentifier(t){return t.map(e=>e.objectId)}_getGlobalIdsFromFeatureIdentifier(t){return t.map(e=>e.globalId)}_createEditsResult(t){var e;const r=t.data,{layerId:s}=this.layer,a=[];let n=null;if(Array.isArray(r))for(const u of r)a.push({id:u.id,editedFeatures:u.editedFeatures}),u.id===s&&(n={addResults:u.addResults,updateResults:u.updateResults,deleteResults:u.deleteResults,attachments:u.attachments,editMoment:u.editMoment});else n=r;const o=(e=n)==null?void 0:e.attachments,l={addFeatureResults:n.addResults?n.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:n.updateResults?n.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:n.deleteResults?n.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:o&&o.addResults?o.addResults.map(this._createFeatureEditResult,this):[],updateAttachmentResults:o&&o.updateResults?o.updateResults.map(this._createFeatureEditResult,this):[],deleteAttachmentResults:o&&o.deleteResults?o.deleteResults.map(this._createFeatureEditResult,this):[]};if(n.editMoment&&(l.editMoment=n.editMoment),a.length>0){l.editedFeatureResults=[];for(const u of a){const{adds:d,updates:h,deletes:O,spatialReference:S}=u.editedFeatures,f=S?new Oe(S):null;l.editedFeatureResults.push({layerId:u.id,editedFeatures:{adds:(d==null?void 0:d.map(R=>this._createEditedFeature(R,f)))||[],updates:(h==null?void 0:h.map(R=>({original:this._createEditedFeature(R[0],f),current:this._createEditedFeature(R[1],f)})))||[],deletes:(O==null?void 0:O.map(R=>this._createEditedFeature(R,f)))||[],spatialReference:f}})}}return l}_createEditedFeature(t,e){return new Se({attributes:t.attributes,geometry:Ie(c(i({},t.geometry),{spatialReference:e}))})}_createFeatureEditResult(t){const e=t.success===!0?null:t.error||{code:void 0,description:void 0};return{objectId:t.objectId,globalId:t.globalId,error:e?new w("feature-layer-source:edit-failure",e.description,{code:e.code}):null}}_createAttachmentErrorResult(t,e){const r=e.details.messages&&e.details.messages[0]||e.message,s=e.details.httpStatus||e.details.messageCode;return{objectId:t,globalId:null,error:new w("feature-layer-source:attachment-failure",r,{code:s})}}_getFormDataForAttachment(t,e){const r=t instanceof FormData?t:t&&t.elements?new FormData(t):null;if(r)for(const s in e){const a=e[s];a!=null&&(r.set?r.set(s,a):r.append(s,a))}return r}_getLayerRequestOptions(t={}){const{parsedUrl:e,gdbVersion:r,dynamicDataSource:s}=this.layer;return c(i({},t),{query:i(c(i({gdbVersion:r,layer:s?JSON.stringify({source:s}):void 0},e.query),{f:"json"}),this._createRequestQueryOptions(t)),responseType:"json"})}};y([p()],q.prototype,"type",void 0),y([p({constructOnly:!0})],q.prototype,"layer",void 0),y([p({readOnly:!0})],q.prototype,"queryTask",null),q=y([N("esri.layers.graphics.sources.FeatureLayerSource")],q);const it=q;export{it as default};
