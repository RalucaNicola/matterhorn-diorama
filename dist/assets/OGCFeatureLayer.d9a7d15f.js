import{e as r,d as o,n as E,cS as L,cJ as M,r as I,cX as g,t as Q,iJ as N,I as D,pg as k,px as Z,py as U,p2 as V,pw as W,pz as H,p3 as K,p4 as X,p5 as Y,pd as ee,p8 as te,z as re,pA as R,fl as se,D as $,pB as ie,pi as oe,pC as ne,hv as pe,am as ae,iw as T,pE as le,pF as ue,pD as de,ps as ce,fo as ye,fp as he,pH as fe,fn as me,pI as ge,pK as ve,pl as Se,fr as we}from"./index.25dca4c3.js";import{N as xe,v as C,S as Ie,k as be,T as Fe,x as Oe,I as De,F as j,j as Re}from"./ogcFeatureUtils.8ab44a1b.js";import"./geojson.ed1c156d.js";import"./clientSideDefaults.a0333e7b.js";import"./QueryEngineCapabilities.c2e9875c.js";let f=class extends L{constructor(){super(...arguments),this.featureDefinition=null,this.type="ogc-feature"}load(e){return this.addResolvingPromise(this._loadOGCServices(this.layer,e)),this.when()}getFeatureDefinition(){const{featureDefinition:{collection:e,layerDefinition:t,spatialReference:n,supportedCrs:s},layer:{apiKey:p,capabilities:l,customParameters:a}}=this;return{capabilities:l,collection:e,layerDefinition:t,queryParameters:{apiKey:p,customParameters:a},spatialReference:n,supportedCrs:s}}queryExtent(e,t={}){return null}queryFeatureCount(e,t={}){return null}queryFeatures(e,t={}){return this.queryFeaturesJSON(e,t).then(n=>M.fromJSON(n))}queryFeaturesJSON(e,t={}){const n=this.getFeatureDefinition();return this.load(t).then(()=>xe(n,e,t))}queryObjectIds(e,t={}){return null}serviceSupportsSpatialReference(e){return!(!e.isWGS84&&!e.isWebMercator)||!!this.featureDefinition.supportedCrs[e.wkid]}_conformsToType(e,t){var n;const s=new RegExp(`^${t}$`,"i");return(n=e.conformsTo.some(p=>s.test(p)))!=null&&n}_getCapabilities(e,t){var n,s,p,l,a,u,c;const d=I(t)?(n=t.components)==null?void 0:n.parameters:null;return{attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},query:{maxRecordCount:(s=(p=d==null||(l=d.limit)==null||(a=l.schema)==null?void 0:a.maximum)!=null?p:d==null||(u=d.limitFeatures)==null||(c=u.schema)==null?void 0:c.maximum)!=null?s:5e3,maxRecordCountFactor:void 0,standardMaxRecordCount:void 0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsDefaultSpatialReference:!1,supportsCompactGeometry:!1,supportsSqlExpression:!1,tileMaxRecordCount:void 0},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUploadWithItemId:!1,supportsUpdateWithoutM:!1}}}_getExtent(e){var t;const n=(t=e.extent)==null?void 0:t.spatial;if(!n)return null;const s=n.bbox[0],p=s.length===4,l=s[0],a=s[1],u=p?void 0:s[2];return{xmin:l,ymin:a,xmax:p?s[2]:s[3],ymax:p?s[3]:s[4],zmin:u,zmax:p?void 0:s[5],spatialReference:g.WGS84.toJSON()}}_getStorageSpatialReference(e){var t;const n=(t=e.storageCrs)!=null?t:j,s=C(n);return Q(s)?g.WGS84:new g({wkid:s})}_getSupportedSpatialReferences(e,t){var n;const s="#/crs",p=(n=e.crs)!=null?n:[j],l=p.includes(s)?p.filter(u=>u!==s).concat(t.crs):p,a=/^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;return l.filter(u=>!a.test(u))}async _loadOGCServices(e,t){const n=I(t)?t.signal:null,{apiKey:s,collectionId:p,customParameters:l,fields:a,geometryType:u,hasZ:c,objectIdField:d,timeInfo:b,url:P}=e,_={fields:a==null?void 0:a.map(h=>h.toJSON()),geometryType:N.toJSON(u),hasZ:c,objectIdField:d,timeInfo:b==null?void 0:b.toJSON()},m={apiKey:s,customParameters:l,signal:n},v=await Ie(P,m),[F,O]=await Promise.all([be(v,m),Fe(v,m)]);if(!this._conformsToType(F,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson"))throw new D("ogc-feature-layer:no-geojson-support","Server does not support geojson");const y=O.collections.find(h=>h.id===p);if(!y)throw new D("ogc-feature-layer:collection-not-found","Server does not contain the named collection");const q=this._conformsToType(F,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30")?await Oe(v,m):null,S=await De(y,_,m),G=this._getCapabilities(S.hasZ,q),B=this._getExtent(y),z=this._getStorageSpatialReference(y).toJSON(),A=this._getSupportedSpatialReferences(y,O),J=new RegExp(`^${Re}`,"i"),w={};for(const h of A){const x=C(h);I(x)&&(w[x]||(w[x]=h.replace(J,"")))}S.extent=B,this.featureDefinition={capabilities:G,collection:y,layerDefinition:S,queryParameters:{},spatialReference:z,supportedCrs:w}}};r([o()],f.prototype,"featureDefinition",void 0),r([o({constructOnly:!0})],f.prototype,"layer",void 0),r([o()],f.prototype,"type",void 0),f=r([E("esri.layers.graphics.sources.OGCFeatureSource")],f);const $e=we();let i=class extends k(Z(U(V(W(H(K(X(Y(ee(te(re))))))))))){constructor(e){super(e),this.collectionId=null,this.copyright=null,this.definitionExpression=null,this.description=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="OGCFeatureLayer",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new f({layer:this}),this.spatialReference=null,this.title=null,this.type="ogc-feature",this.typeIdField=null,this.types=null,this.url=null}destroy(){var e;(e=this.source)==null||e.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["OGCFeatureServer"]},e).then(()=>this._fetchService(e))),this.when()}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&this.geometryType==null}set renderer(e){R(e,this.fieldsIndex),this._set("renderer",e)}on(e,t){return super.on(e,t)}createPopupTemplate(e){return se(this,e)}createQuery(){return new $}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){var n;let s,p=!1;const l=t==null||(n=t.feature)==null?void 0:n.attributes,a=this.typeIdField&&(l==null?void 0:l[this.typeIdField]);return a!=null&&this.types&&(p=this.types.some(u=>{var c,d;return u.id==a&&(s=(c=u.domains)==null?void 0:c[e],((d=s)==null?void 0:d.type)==="inherited"&&(s=this._getLayerDomain(e)),!0)})),p||s||(s=this._getLayerDomain(e)),s}queryFeatures(e,t){return this.load().then(()=>this.source.queryFeatures($.from(e)||this.createQuery(),t)).then(n=>{var s;return n==null||(s=n.features)==null||s.forEach(p=>{p.layer=p.sourceLayer=this}),n})}serviceSupportsSpatialReference(e){var t,n;return(t=(n=this.source)==null?void 0:n.serviceSupportsSpatialReference(e))!=null&&t}async _fetchService(e){await this.source.load(e),this.read(this.source.featureDefinition,{origin:"service"}),R(this.renderer,this.fieldsIndex),ie(this.timeInfo,this.fieldsIndex)}_getLayerDomain(e){if(!this.fields)return null;for(const t of this.fields)if(t.name===e&&t.domain)return t.domain;return null}};r([o({readOnly:!0,json:{origins:{service:{read:!0}}}})],i.prototype,"capabilities",void 0),r([o({type:String,json:{write:!0}})],i.prototype,"collectionId",void 0),r([o({type:String})],i.prototype,"copyright",void 0),r([o({readOnly:!0})],i.prototype,"defaultPopupTemplate",null),r([o({type:String})],i.prototype,"definitionExpression",void 0),r([o({readOnly:!0,type:String,json:{origins:{service:{name:"collection.description"}}}})],i.prototype,"description",void 0),r([o({type:String})],i.prototype,"displayField",void 0),r([o(oe)],i.prototype,"elevationInfo",void 0),r([o(ne)],i.prototype,"featureReduction",void 0),r([o({type:[pe],json:{origins:{service:{name:"layerDefinition.fields"}}}})],i.prototype,"fields",void 0),r([o($e.fieldsIndex)],i.prototype,"fieldsIndex",void 0),r([o({readOnly:!0,type:ae,json:{origins:{service:{name:"layerDefinition.extent"}}}})],i.prototype,"fullExtent",void 0),r([o({type:T.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:T.read}}}}})],i.prototype,"geometryType",void 0),r([o({type:Boolean,json:{origins:{service:{name:"layerDefinition.hasZ"}}}})],i.prototype,"hasZ",void 0),r([o({type:Boolean,readOnly:!0})],i.prototype,"isTable",null),r([o({type:[le],json:{origins:{"web-document":{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:ue},write:!0}}}})],i.prototype,"labelingInfo",void 0),r([o(de)],i.prototype,"labelsVisible",void 0),r([o(ce)],i.prototype,"legendEnabled",void 0),r([o({type:String,json:{origins:{service:{name:"layerDefinition.objectIdField"}}}})],i.prototype,"objectIdField",void 0),r([o({type:["OGCFeatureLayer"]})],i.prototype,"operationalLayerType",void 0),r([o(ye)],i.prototype,"popupEnabled",void 0),r([o({type:he,json:{name:"popupInfo",write:!0}})],i.prototype,"popupTemplate",void 0),r([o({types:fe,json:{origins:{service:{name:"layerDefinition.drawingInfo.renderer",write:!1},"web-scene":{types:me,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:!0}})],i.prototype,"renderer",null),r([o(ge)],i.prototype,"screenSizePerspectiveEnabled",void 0),r([o({readOnly:!0})],i.prototype,"source",void 0),r([o({readOnly:!0,type:g,json:{origins:{service:{read:!0}}}})],i.prototype,"spatialReference",void 0),r([o({type:String,json:{write:{enabled:!0,ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"collection.title"}}}})],i.prototype,"title",void 0),r([o({readOnly:!0,json:{read:!1}})],i.prototype,"type",void 0),r([o({type:String,readOnly:!0})],i.prototype,"typeIdField",void 0),r([o({type:[ve]})],i.prototype,"types",void 0),r([o(Se)],i.prototype,"url",void 0),i=r([E("esri.layers.OGCFeatureLayer")],i);const _e=i;export{_e as default};