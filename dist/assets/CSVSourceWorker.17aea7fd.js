var v=Object.defineProperty;var w=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var b=(n,t,e)=>t in n?v(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,N=(n,t)=>{for(var e in t||(t={}))C.call(t,e)&&b(n,e,t[e]);if(w)for(var e of w(t))D.call(t,e)&&b(n,e,t[e]);return n};import{na as k,I as h,dE as O,A as j,a8 as P,cN as V,bF as G,nb as Q,gK as R,gM as M,gI as L,gN as A,cX as Y,a0 as U,$ as Z,gS as B,d8 as J,fk as W}from"./index.25dca4c3.js";import{t as z}from"./json.d1a0fa35.js";import{m as K}from"./FeatureStore.cd603f50.js";import{V as X,f as H}from"./QueryEngine.bb4ddfcc.js";import{a as ee,n as te}from"./clientSideDefaults.a0333e7b.js";import"./PooledRBush.97be3399.js";import"./quickselect.03306040.js";import"./optimizedFeatureQueryEngineAdapter.163a3827.js";import"./centroid.50387db0.js";import"./WhereClause.d7766590.js";import"./QueryEngineCapabilities.c2e9875c.js";import"./utils.260312b7.js";import"./ClassBreaksDefinition.9835d418.js";const ie=/^\s*"([\S\s]*)"\s*$/,ne=/""/g,x=`
`,re=[","," ",";","|","	"];function*E(n,t,e){let i=0;for(;i<=n.length;){const r=n.indexOf(t,i),s=n.substring(i,r>-1?r:void 0);i+=s.length+t.length,e&&!s.trim()||(yield s)}}function T(n){const t=n.includes(`\r
`)?`\r
`:x;return E(n,t,!0)}function se(n,t){return E(n,t,!1)}function ae(n){const t=n.trim();let e=0,i="";for(const r of re){const s=t.split(r).length;s>e&&(e=s,i=r)}return i===""?null:i}function*$(n,t,e,i=()=>Object.create(null)){let r="",s="",d=0,a=i(),f=0;e:for(const o of n){const u=se(o,e);for(const c of u)if(r+=s+c,s="",d+=oe(c),d%2==0){if(d>0){const y=ie.exec(r);if(!y){a=i(),f=0,r="",d=0;continue e}a[t[f]]=y[1].replace(ne,'"'),f++}else a[t[f]]=r,f++;r="",d=0}else s=e;d===0?(yield a,a=i(),f=0):s=x}}function oe(n){let t=0,e=0;for(e=n.indexOf('"',e);e>=0;)t++,e=n.indexOf('"',e+1);return t}function le(n){const t=n.map(e=>e.toLowerCase());return{longitudeFieldName:n[t.indexOf(pe.find(e=>t.includes(e)))],latitudeFieldName:n[t.indexOf(me.find(e=>t.includes(e)))]}}function ue(n,t,e,i){const r=[],s=$(n,e,t),d=[];for(const a of s){if(d.length===10)break;d.push(a)}for(const a of e)if(a===i.longitudeFieldName||a===i.latitudeFieldName)r.push({name:a,type:"esriFieldTypeDouble",alias:a});else{const f=de(d.map(u=>u[a])),o={name:a,type:null,alias:a};switch(f){case"integer":o.type="esriFieldTypeInteger";break;case"double":o.type="esriFieldTypeDouble";break;case"date":o.type="esriFieldTypeDate",o.length=36;break;default:o.type="esriFieldTypeString",o.length=255}r.push(o)}return r}function de(n){if(!n.length)return"string";const t=/[^+-.,0-9]/;return n.map(e=>{let i=!1;if(e!==""){if(t.test(e))i=!0;else{let r=I(e);if(!isNaN(r))return/[.,]/.test(e)||!Number.isInteger(r)||r>214783647||r<-214783648?"double":"integer";if(e.includes("E")){if(r=Number(e),!isNaN(r))return"double";if(e.includes(",")){if(e=e.replace(",","."),r=Number(e),!isNaN(r))return"double";i=!0}else i=!0}else i=!0}return i?/^[-]?\d*[.,]?\d*$/.test(e)?"string":S(new Date(e),e)?"date":"string":"string"}}).reduce((e,i)=>e===void 0||e===i?i:e==="string"||i==="string"?"string":e==="double"||i==="double"?"double":void 0)}function S(n,t){if(!n||Object.prototype.toString.call(n)!=="[object Date]"||isNaN(n.getTime()))return!1;let e=!0;if(!fe&&/\d+\W*$/.test(t)){const i=t.match(/[a-zA-Z]{2,}/);if(i){let r=!1,s=0;for(;!r&&s<=i.length;)r=!ce.test(i[s]),s++;e=!r}}return e}const I=function(){const n=k(),t=new RegExp("^"+n.regexp+"$"),e=new RegExp("["+n.group+"\\s\\xa0]","g"),i=n.factor;return r=>{const s=t.exec(r);if(n.factor=i,!s)return NaN;let d=s[1];if(!s[1]){if(!s[2])return NaN;d=s[2],n.factor*=-1}return d=d.replace(e,"").replace(n.decimal,"."),+d*n.factor}}(),ce=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,fe=Number.isNaN(new Date("technology 10").getTime()),me=["lat","latitude","latitude83","latdecdeg","lat_dd","y","ycenter","point-y"],pe=["lon","lng","long","longitude","longitude83","longdecdeg","long_dd","x","xcenter","point-x"],ye=te("esriGeometryPoint"),he=["csv"],ge=[0,0];class Fe{constructor(t,e){this.x=t,this.y=e}}class Oe{constructor(){this._queryEngine=null,this._snapshotFeatures=async t=>{const e=await this._fetch(t);return this._createFeatures(e)}}destroy(){var t;(t=this._queryEngine)==null||t.destroy(),this._queryEngine=null}async load(t,e={}){var i;this.loadOptions=t;const[r]=await Promise.all([this._fetch(e.signal),this._checkProjection(t==null||(i=t.parsingOptions)==null?void 0:i.spatialReference)]),s=Ne(r,t);this.locationInfo=s.locationInfo,this.delimiter=s.delimiter,this._queryEngine=this._createQueryEngine(s);const d=await this._createFeatures(r);if(this._queryEngine.featureStore.addMany(d),s.layerDefinition.extent=this._queryEngine.fullExtent,s.layerDefinition.timeInfo){const{start:a,end:f}=this._queryEngine.timeExtent;s.layerDefinition.timeInfo.timeExtent=[a,f]}return s}async applyEdits(){throw new h("csv-layer:editing-not-supported","applyEdits() is not supported on CSVLayer")}async queryFeatures(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(t,e.signal)}async queryFeatureCount(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(t,e.signal)}async queryObjectIds(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(t,e.signal)}async queryExtent(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(t,e.signal)}async querySnapping(t,e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(t,e.signal)}async refresh(t){var e;return this.loadOptions.customParameters=t,(e=this._snapshotTask)==null||e.abort(),this._snapshotTask=O(this._snapshotFeatures),this._snapshotTask.promise.then(i=>{this._queryEngine.featureStore.clear(),i&&this._queryEngine.featureStore.addMany(i)},i=>{this._queryEngine.featureStore.clear(),j(i)||P.getLogger("esri.layers.CSVLayer").error(new h("csv-layer:refresh","An error occurred during refresh",{error:i}))}),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(t){const{url:e,customParameters:i}=this.loadOptions;if(!e)throw new h("csv-layer:invalid-source","url not defined");const r=V(e);return(await G(r.path,{query:N(N({},r.query),i),responseType:"text",signal:t})).data}_createQueryEngine(t){const{objectIdField:e,fields:i,extent:r,timeInfo:s}=t.layerDefinition,d=new K({geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1});return new X({fields:i,geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1,timeInfo:s,objectIdField:e,spatialReference:r.spatialReference||{wkid:4326},cacheSpatialQueries:!0,featureStore:d})}async _createFeatures(t){const{latitudeFieldName:e,longitudeFieldName:i}=this.locationInfo,{objectIdField:r,fieldsIndex:s,spatialReference:d}=this._queryEngine;let a=[];const f=[],o=s.fields.filter(l=>l.name!==r).map(l=>l.name);let u=0;const c=T(t);c.next();const y={};for(const l of s.fields)if(l.type!=="esriFieldTypeOID"&&l.type!=="esriFieldTypeGlobalID"){const p=Q(l);p!==void 0&&(y[l.name]=p)}const q=$(c,o,this.delimiter,ee(y,r));for(const l of q){const p=this._parseCoordinateValue(l[e]),g=this._parseCoordinateValue(l[i]);if(g!=null&&p!=null&&!isNaN(p)&&!isNaN(g)){l[e]=p,l[i]=g;for(const m in l)if(m!==e&&m!==i){if(s.isDateField(m)){const F=new Date(l[m]);l[m]=S(F,l[m])?F.getTime():null}else if(s.isNumericField(m)){const F=I(l[m]);isNaN(F)?l[m]=null:l[m]=F}}l[r]=u,u++,a.push(new Fe(g,p)),f.push(l)}}if(!R({wkid:4326},d))if(M(d))for(const l of a)[l.x,l.y]=L(l.x,l.y,ge);else a=A(z,a,Y.WGS84,d,null);const _=[];for(let l=0;l<a.length;l++){const{x:p,y:g}=a[l],m=f[l];m[r]=l+1,_.push(new U(new Z([],[p,g]),m,null,m[r]))}return _}_parseCoordinateValue(t){if(t==null||t==="")return null;let e=I(t);return(isNaN(e)||Math.abs(e)>181)&&(e=parseFloat(t)),e}async _checkProjection(t){try{await H(B,t)}catch{throw new h("csv-layer:projection-not-supported","Projection not supported")}}}function Ne(n,t){const e=t.parsingOptions||{},i={delimiter:e.delimiter,layerDefinition:null,locationInfo:{latitudeFieldName:e.latitudeField,longitudeFieldName:e.longitudeField}},r=T(n);let s=r.next().value;if(!s)throw new h("csv-layer:empty-csv","CSV is empty",{csv:n});if(s=s.trim(),!e.delimiter){const o=ae(s);if(!o)throw new h("csv-layer:invalid-delimiter","Unable to detect the delimiter from CSV");i.delimiter=o}const d=s.split(i.delimiter).filter(o=>!!o),a=i.layerDefinition={name:J(t.url,he)||"csv",drawingInfo:ye,geometryType:"esriGeometryPoint",objectIdField:null,fields:[],timeInfo:e.timeInfo,extent:{xmin:Number.POSITIVE_INFINITY,ymin:Number.POSITIVE_INFINITY,xmax:Number.NEGATIVE_INFINITY,ymax:Number.NEGATIVE_INFINITY,spatialReference:e.spatialReference||{wkid:102100}}};if(!e.latitudeField||!e.longitudeField){const o=le(d);if(!e.longitudeField&&!o.longitudeFieldName||!e.latitudeField&&!o.latitudeFieldName)throw new h("csv-layer:location-fields-not-found","Unable to identify latitude and longitude fields from the CSV file");i.locationInfo={longitudeFieldName:e.longitudeField||o.longitudeFieldName,latitudeFieldName:e.latitudeField||o.latitudeFieldName}}const f=ue(r,i.delimiter,d,i.locationInfo);if(e.fields&&e.fields.length){const o=new Map;for(const u of e.fields)o.set(u.name.toLowerCase(),u);for(const u of f){const c=o.get(u.name.toLowerCase());if(c){const y=u.name;Object.assign(u,c),u.name=y}}}if(a.fields=f,!a.fields.some(o=>o.type==="esriFieldTypeOID"&&(a.objectIdField=o.name,!0))){const o={name:"__OBJECTID",alias:"__OBJECTID",type:"esriFieldTypeOID",editable:!1,nullable:!1};a.objectIdField=o.name,a.fields.unshift(o)}if(a.timeInfo){const o=new W(a.fields),u=a.timeInfo;if(u.startTimeField){const c=o.get(u.startTimeField);c?(u.startTimeField=c.name,c.type="esriFieldTypeDate"):u.startTimeField=null}if(u.endTimeField){const c=o.get(u.endTimeField);c?(u.endTimeField=c.name,c.type="esriFieldTypeDate"):u.endTimeField=null}if(u.trackIdField){const c=o.get(u.trackIdField);u.trackIdField=c?c.name:null}u.startTimeField||u.endTimeField||(a.timeInfo=null)}return i}export{Oe as default};