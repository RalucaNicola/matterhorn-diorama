import{s as Z,a as S,_ as he,m as K}from"./arcadeUtils.65026d41.js";import{D as Y,q as oe,r as fe,P as Ie,G as ue,f as Ee,_ as ce,e as Fe,a as we,b as De,g as Q,w as be,T as Ne,j as Ae,c as M,C as xe,v as _,E as T,d as X}from"./featureSetUtils.6a009aec.js";import{mq as w,ms as N,mm as D,mZ as L,ml as j,mp as b,mS as W,mb as C,mt as k,md as Se,mw as Te,mx as Le,my as ve,ga as Oe,mj as A,mi as J,mk as B,qW as Re,d4 as V,hv as z,mO as q,qI as ee}from"./index.165b2b59.js";import{d as Ce,b as de}from"./SpatialFilter.5d33fae0.js";import{WhereClause as E}from"./WhereClause.d10f799a.js";import"./executeForIds.46c65fb8.js";import"./geometryEngineAsync.da89ae88.js";function Pe(t,a,m,p){if(p.length===1){if(b(p[0]))return K(t,p[0],-1);if(k(p[0]))return K(t,p[0].toArray(),-1)}return K(t,p,-1)}function te(t,a,m){const p=t.getVariables();if(p.length>0){const I=[];for(let e=0;e<p.length;e++){const i={name:p[e]};I.push(a.evaluateIdentifier(m,i))}return J(I).then(e=>{const i={};for(let n=0;n<p.length;n++)i[p[n]]=e[n];return t.parameters=i,t})}return A(t)}function c(t,a,m=null){for(const p in t)if(p.toLowerCase()===a.toLowerCase())return t[p];return m}function me(t){if(t===null)return null;const a={type:c(t,"type",""),name:c(t,"name","")};if(a.type==="range")a.range=c(t,"range",[]);else{a.codedValues=[];for(const m of c(t,"codedValues",[]))a.codedValues.push({name:c(m,"name",""),code:c(m,"code",null)})}return a}function ne(t){if(t===null)return null;const a={},m=c(t,"wkt",null);m!==null&&(a.wkt=m);const p=c(t,"wkid",null);return p!==null&&(a.wkid=p),a}function pe(t){if(t===null)return null;const a={hasZ:c(t,"hasz",!1),hasM:c(t,"hasm",!1)},m=c(t,"spatialreference",null);m&&(a.spatialReference=ne(m));const p=c(t,"x",null);if(p!==null)return a.x=p,a.y=c(t,"y",null),a;const I=c(t,"rings",null);if(I!==null)return a.rings=I,a;const e=c(t,"paths",null);if(e!==null)return a.paths=e,a;const i=c(t,"points",null);if(i!==null)return a.points=i,a;for(const n of["xmin","xmax","ymin","ymax","zmin","zmax","mmin","mmax"]){const o=c(t,n,null);o!==null&&(a[n]=o)}return a}function Me(t,a){for(const m of a)if(m===t)return!0;return!1}function ke(t){return!!t.layerDefinition&&!!t.featureSet&&Me(t.layerDefinition.geometryType,["","esriGeometryPoint","esriGeometryPolyline","esriGeometryPolygon","esriGeometryMultipoint","esriGeometryEnvelope"])!==!1&&t.layerDefinition.objectIdField!==null&&t.layerDefinition.objectIdField!==""&&b(t.layerDefinition.fields)!==!1&&b(t.featureSet.features)!==!1}function We(t){t.mode==="async"&&(t.functions.getuser=function(a,m){return t.standardFunctionAsync(a,m,(p,I,e)=>{w(e,1,2);let i=N(e[1],""),n=i===!0;if(i=i===!0||i===!1?"":D(i),e[0]instanceof Z){let d=null;return a.services&&a.services.portal&&(d=a.services.portal),d=Y(e[0],d),oe(d,i,n).then(l=>{if(l){const s=JSON.parse(JSON.stringify(l));for(const r of["lastLogin","created","modified"])s[r]!==void 0&&s[r]!==null&&(s[r]=new Date(s[r]));return S.convertObjectToArcadeDictionary(s)}return null})}let o=null;if(L(e[0])&&(o=e[0]),o)return n=!1,i?null:o.load().then(()=>o.getOwningSystemUrl()).then(d=>{if(!d)return i?null:o.getIdentityUser().then(s=>s?S.convertObjectToArcadeDictionary({username:s}):null);let l=null;return a.services&&a.services.portal&&(l=a.services.portal),l=Y(new Z(d),l),oe(l,i,n).then(s=>{if(s){const r=JSON.parse(JSON.stringify(s));for(const f of["lastLogin","created","modified"])r[f]!==void 0&&r[f]!==null&&(r[f]=new Date(r[f]));return S.convertObjectToArcadeDictionary(r)}return null})});throw new Error("Invalid Parameter")})},t.signatures.push({name:"getuser",min:"1",max:"2"}),t.functions.featuresetbyid=function(a,m){return t.standardFunctionAsync(a,m,(p,I,e)=>{if(w(e,2,4),e[0]instanceof fe){const i=D(e[1]);let n=N(e[2],null);const o=j(N(e[3],!0));if(n===null&&(n=["*"]),b(n)===!1)throw new Error("Invalid Parameter");return e[0].featureSetById(i,o,n)}throw new Error("Invalid Parameter")})},t.signatures.push({name:"featuresetbyid",min:"2",max:"4"}),t.functions.getfeatureset=function(a,m){return t.standardFunctionAsync(a,m,(p,I,e)=>{if(w(e,1,2),W(e[0])){let i=N(e[1],"datasource");return i===null&&(i="datasource"),i=D(i).toLowerCase(),Ie(e[0].fullSchema(),i,a.lrucache,a.interceptor,a.spatialReference)}throw new Error("Invalid Parameter")})},t.signatures.push({name:"getfeatureset",min:"1",max:"2"}),t.functions.featuresetbyportalitem=function(a,m){return t.standardFunctionAsync(a,m,(p,I,e)=>{if(w(e,2,5),e[0]===null)throw new Error("Portal is required");if(e[0]instanceof Z){const l=D(e[1]),s=D(e[2]);let r=N(e[3],null);const f=j(N(e[4],!0));if(r===null&&(r=["*"]),b(r)===!1)throw new Error("Invalid Parameter");let u=null;return a.services&&a.services.portal&&(u=a.services.portal),u=Y(e[0],u),ue(l,s,a.spatialReference,r,f,u,a.lrucache,a.interceptor)}if(C(e[0])===!1)throw new Error("Portal is required");const i=D(e[0]),n=D(e[1]);let o=N(e[2],null);const d=j(N(e[3],!0));if(o===null&&(o=["*"]),b(o)===!1)throw new Error("Invalid Parameter");if(a.services&&a.services.portal)return ue(i,n,a.spatialReference,o,d,a.services.portal,a.lrucache,a.interceptor);throw new Error("Portal is required")})},t.signatures.push({name:"featuresetbyportalitem",min:"2",max:"5"}),t.functions.featuresetbyname=function(a,m){return t.standardFunctionAsync(a,m,(p,I,e)=>{if(w(e,2,4),e[0]instanceof fe){const i=D(e[1]);let n=N(e[2],null);const o=j(N(e[3],!0));if(n===null&&(n=["*"]),b(n)===!1)throw new Error("Invalid Parameter");return e[0].featureSetByName(i,o,n)}throw new Error("Invalid Parameter")})},t.signatures.push({name:"featuresetbyname",min:"2",max:"4"}),t.functions.featureset=function(a,m){return t.standardFunction(a,m,(p,I,e)=>{w(e,1,1);let i=e[0];const n={layerDefinition:{geometryType:"",objectIdField:"",globalIdField:"",typeIdField:"",fields:[]},featureSet:{geometryType:"",features:[]}};if(C(i))i=JSON.parse(i),i.layerDefinition!==void 0?(n.layerDefinition=i.layerDefinition,n.featureSet=i.featureSet,i.layerDefinition.spatialReference&&(n.layerDefinition.spatialReference=i.layerDefinition.spatialReference)):(n.featureSet.features=i.features,n.featureSet.geometryType=i.geometryType,n.layerDefinition.geometryType=n.featureSet.geometryType,n.layerDefinition.objectIdField=i.objectIdFieldName,n.layerDefinition.typeIdField=i.typeIdFieldName,n.layerDefinition.globalIdField=i.globalIdFieldName,n.layerDefinition.fields=i.fields,i.spatialReference&&(n.layerDefinition.spatialReference=i.spatialReference));else{if(!(e[0]instanceof S))throw new Error("Invalid Parameter");{i=JSON.parse(e[0].castToText());const o=c(i,"layerdefinition");if(o!==null){n.layerDefinition.geometryType=c(o,"geometrytype",""),n.featureSet.geometryType=n.layerDefinition.geometryType,n.layerDefinition.globalIdField=c(o,"globalidfield",""),n.layerDefinition.objectIdField=c(o,"objectidfield",""),n.layerDefinition.typeIdField=c(o,"typeidfield","");const d=c(o,"spatialreference",null);d&&(n.layerDefinition.spatialReference=ne(d));for(const s of c(o,"fields",[])){const r={name:c(s,"name",""),alias:c(s,"alias",""),type:c(s,"type",""),nullable:c(s,"nullable",!0),editable:c(s,"editable",!0),length:c(s,"length",null),domain:me(c(s,"domain"))};n.layerDefinition.fields.push(r)}const l=c(i,"featureset",null);if(l){const s={};for(const r of n.layerDefinition.fields)s[r.name.toLowerCase()]=r.name;for(const r of c(l,"features",[])){const f={},u=c(r,"attributes",{});for(const h in u)f[s[h.toLowerCase()]]=u[h];n.featureSet.features.push({attributes:f,geometry:pe(c(r,"geometry",null))})}}}else{n.layerDefinition.geometryType=c(i,"geometrytype",""),n.featureSet.geometryType=n.layerDefinition.geometryType,n.layerDefinition.objectIdField=c(i,"objectidfieldname",""),n.layerDefinition.typeIdField=c(i,"typeidfieldname","");const d=c(i,"spatialreference",null);d&&(n.layerDefinition.spatialReference=ne(d));for(const s of c(i,"fields",[])){const r={name:c(s,"name",""),alias:c(s,"alias",""),type:c(s,"type",""),nullable:c(s,"nullable",!0),editable:c(s,"editable",!0),length:c(s,"length",null),domain:me(c(s,"domain"))};n.layerDefinition.fields.push(r)}const l={};for(const s of n.layerDefinition.fields)l[s.name.toLowerCase()]=s.name;for(const s of c(i,"features",[])){const r={},f=c(s,"attributes",{});for(const u in f)r[l[u.toLowerCase()]]=f[u];n.featureSet.features.push({attributes:r,geometry:pe(c(s,"geometry",null))})}}}}if(ke(n)===!1)throw new Error("Invalid Parameter");return Ee.create(n,a.spatialReference)})},t.signatures.push({name:"featureset",min:"1",max:"1"}),t.functions.filter=function(a,m){return t.standardFunctionAsync(a,m,(p,I,e)=>{if(w(e,2,2),b(e[0])||k(e[0])){const i=[];let n=e[0];n instanceof Se&&(n=n.toArray());let o=null;if(e[1]instanceof Te)o=t.arcadeCustomFunctionHandler(e[1]);else if(e[1]instanceof Le)o=(...d)=>e[1].fn(a,{preparsed:!0,arguments:d});else{if(!(e[1]instanceof ve))throw new Error("Invalid Parameter");o=(...d)=>{if(d.length!==e[1].paramCount)throw new Error("Invalid parameters");return e[1].fn(...d)}}return n.reduce((d,l,s)=>d.then(r=>{s>0&&r===!0&&i.push(n[s-1]);const f=o(l);return Oe(f)?f:A(f)}),Promise.resolve(!1)).then(d=>(d===!0&&n.length>0&&i.push(n[n.length-1]),i))}return L(e[0])?e[0].load().then(i=>{const n=E.create(e[1],i.getFieldsIndex()),o=n.getVariables();if(o.length>0){const d=[];for(let l=0;l<o.length;l++){const s={name:o[l]};d.push(t.evaluateIdentifier(a,s))}return J(d).then(l=>{const s={};for(let r=0;r<o.length;r++)s[o[r]]=l[r];return n.parameters=s,new ce({parentfeatureset:e[0],whereclause:n})})}return A(new ce({parentfeatureset:e[0],whereclause:n}))}):t.failDefferred("Filter cannot accept this parameter type")})},t.signatures.push({name:"filter",min:"2",max:"2"}),t.functions.orderby=function(a,m){return t.standardFunctionAsync(a,m,(p,I,e)=>{if(w(e,2,2),L(e[0])){const i=new Fe(e[1]);return A(new we({parentfeatureset:e[0],orderbyclause:i}))}return t.failDefferred("Order cannot accept this parameter type")})},t.signatures.push({name:"orderby",min:"2",max:"2"}),t.functions.top=function(a,m){return t.standardFunctionAsync(a,m,(p,I,e)=>(w(e,2,2),L(e[0])?A(new De({parentfeatureset:e[0],topnum:e[1]})):b(e[0])?B(e[1])>=e[0].length?e[0].slice(0):e[0].slice(0,B(e[1])):k(e[0])?B(e[1])>=e[0].length()?e[0].slice(0):e[0].slice(0,B(e[1])):t.failDefferred("Top cannot accept this parameter type")))},t.signatures.push({name:"top",min:"2",max:"2"}),t.functions.first=function(a,m){return t.standardFunctionAsync(a,m,(p,I,e)=>(w(e,1,1),L(e[0])?e[0].first(p.abortSignal).then(i=>{if(i!==null){const n=he.createFromGraphicLikeObject(i.geometry,i.attributes,e[0]);n._underlyingGraphic=i,i=n}return i}):b(e[0])?e[0].length===0?A(null):A(e[0][0]):k(e[0])?e[0].length()===0?A(null):A(e[0].get(0)):null))},t.signatures.push({name:"first",min:"1",max:"1"}),t.functions.attachments=function(a,m){return t.standardFunctionAsync(a,m,(p,I,e)=>{w(e,1,2);const i={minsize:-1,maxsize:-1,types:null,returnMetadata:!1};if(e.length>1){if(e[1]instanceof S){if(e[1].hasField("minsize")&&(i.minsize=B(e[1].field("minsize"))),e[1].hasField("metadata")&&(i.returnMetadata=j(e[1].field("metadata"))),e[1].hasField("maxsize")&&(i.maxsize=B(e[1].field("maxsize"))),e[1].hasField("types")){const n=Re(e[1].field("types"),!1);n.length>0&&(i.types=n)}}else if(e[1]!==null)throw new Error("Invalid Parameter")}if(W(e[0])){let n=e[0]._layer;return n instanceof V&&(n=Q(n,a.spatialReference,["*"],!0,a.lrucache,a.interceptor)),n===null||L(n)===!1?[]:n.load().then(()=>n.queryAttachments(e[0].field(n.objectIdField),i.minsize,i.maxsize,i.types,i.returnMetadata))}if(e[0]===null)return[];throw new Error("Invalid Parameter")})},t.signatures.push({name:"attachments",min:"1",max:"2"}),t.functions.featuresetbyrelationshipname=function(a,m){return t.standardFunctionAsync(a,m,(p,I,e)=>{w(e,2,4);const i=e[0],n=D(e[1]);let o=N(e[2],null);const d=j(N(e[3],!0));if(o===null&&(o=["*"]),b(o)===!1)throw new Error("Invalid Parameter");if(e[0]===null)return null;if(!W(e[0]))throw new Error("Invalid Parameter");let l=i._layer;return l instanceof V&&(l=Q(l,a.spatialReference,["*"],!0,a.lrucache,a.interceptor)),l===null||L(l)===!1?null:l.load().then(s=>{const r=s.relationshipMetaData().filter(u=>u.name===n);if(r.length===0)return null;if(r[0].relationshipTableId!==void 0&&r[0].relationshipTableId!==null&&r[0].relationshipTableId>-1)return be(s,r[0],i.field(s.objectIdField),s.spatialReference,o,d,a.lrucache,a.interceptor);let f=s.serviceUrl();return f?(f=f.charAt(f.length-1)==="/"?f+r[0].relatedTableId.toString():f+"/"+r[0].relatedTableId.toString(),Ne(f,s.spatialReference,o,d,a.lrucache,a.interceptor).then(u=>u.load().then(()=>u.relationshipMetaData()).then(h=>{if(h=h.filter(v=>v.id===r[0].id),i.hasField(r[0].keyField)===!1||i.field(r[0].keyField)===null)return s.getFeatureByObjectId(i.field(s.objectIdField),[r[0].keyField]).then(v=>{if(v){const G=E.create(h[0].keyField+"= @id",u.getFieldsIndex());return G.parameters={id:v.attributes[r[0].keyField]},u.filter(G)}return new Ce({parentfeatureset:u})});const F=E.create(h[0].keyField+"= @id",u.getFieldsIndex());return F.parameters={id:i.field(r[0].keyField)},u.filter(F)}))):null})})},t.signatures.push({name:"featuresetbyrelationshipname",min:"2",max:"4"}),t.functions.featuresetbyassociation=function(a,m){return t.standardFunctionAsync(a,m,(p,I,e)=>{w(e,2,3);const i=e[0],n=D(N(e[1],"")).toLowerCase(),o=C(e[2])?D(e[2]):null;if(e[0]===null)return null;if(!W(e[0]))throw new Error("Invalid Parameter");let d=i._layer;return d instanceof V&&(d=Q(d,a.spatialReference,["*"],!0,a.lrucache,a.interceptor)),d===null||L(d)===!1?null:d.load().then(()=>{const l=d.serviceUrl();return Ae(l,a.spatialReference)}).then(l=>{let s=null,r=null,f=!1;if(o!==null&&o!==""&&o!==void 0){for(const g of l.terminals)g.terminalName===o&&(r=g.terminalId);r===null&&(f=!0)}const u=l.associations.getFieldsIndex(),h=u.get("TOGLOBALID").name,F=u.get("FROMGLOBALID").name,v=u.get("TOTERMINALID").name,G=u.get("FROMTERMINALID").name,H=u.get("FROMNETWORKSOURCEID").name,$=u.get("TONETWORKSOURCEID").name,P=u.get("ASSOCIATIONTYPE").name,ye=u.get("ISCONTENTVISIBLE").name,ge=u.get("OBJECTID").name;for(const g of d.fields)if(g.type==="global-id"){s=i.field(g.name);break}let O=null,re=new M(new z({name:"percentalong",alias:"percentalong",type:"double"}),E.create("0",l.associations.getFieldsIndex())),ae=new M(new z({name:"side",alias:"side",type:"string"}),E.create("''",l.associations.getFieldsIndex()));const x="globalid",ie="globalId",se={};for(const g in l.lkp)se[g]=l.lkp[g].sourceId;const R=new xe(new z({name:"classname",alias:"classname",type:"string"}),null,se);let y="";switch(n){case"midspan":{y=`((${h}='${s}') OR ( ${F}='${s}')) AND (${P} IN (5))`,R.codefield=E.create(`CASE WHEN (${h}='${s}') THEN ${H} ELSE ${$} END`,l.associations.getFieldsIndex());const g=ee(T.findField(l.associations.fields,F));g.name=x,g.alias=x,O=new M(g,E.create(`CASE WHEN (${F}='${s}') THEN ${h} ELSE ${F} END`,l.associations.getFieldsIndex())),re=l.unVersion>=4?new X(T.findField(l.associations.fields,u.get("PERCENTALONG").name)):new M(new z({name:"percentalong",alias:"percentalong",type:"double"}),E.create("0",l.associations.getFieldsIndex()));break}case"junctionedge":{y=`((${h}='${s}') OR ( ${F}='${s}')) AND (${P} IN (4,6))`,R.codefield=E.create(`CASE WHEN (${h}='${s}') THEN ${H} ELSE ${$} END`,l.associations.getFieldsIndex());const g=ee(T.findField(l.associations.fields,F));g.name=x,g.alias=x,O=new M(g,E.create(`CASE WHEN (${F}='${s}') THEN ${h} ELSE ${F} END`,l.associations.getFieldsIndex())),ae=new M(new z({name:"side",alias:"side",type:"string"}),E.create(`CASE WHEN (${P}=4) THEN 'from' ELSE 'to' END`,l.associations.getFieldsIndex()));break}case"connected":{let g=`${h}='@T'`,le=`${F}='@T'`;r!==null&&(g+=` AND ${v}=@A`,le+=` AND ${G}=@A`),y="(("+g+") OR ("+le+"))",y=q(y,"@T",s),g=q(g,"@T",s),r!==null&&(g=q(g,"@A",r.toString()),y=q(y,"@A",r.toString())),R.codefield=E.create("CASE WHEN "+g+` THEN ${H} ELSE ${$} END`,l.associations.getFieldsIndex());const U=ee(T.findField(l.associations.fields,F));U.name=x,U.alias=x,O=new M(U,E.create("CASE WHEN "+g+` THEN ${F} ELSE ${h} END`,l.associations.getFieldsIndex()));break}case"container":y=`${h}='${s}' AND ${P} = 2`,r!==null&&(y+=` AND ${v} = `+r.toString()),R.codefield=H,y="( "+y+" )",O=new _(T.findField(l.associations.fields,F),x,x);case"content":y=`(${F}='${s}' AND ${P} = 2)`,r!==null&&(y+=` AND ${G} = `+r.toString()),R.codefield=$,y="( "+y+" )",O=new _(T.findField(l.associations.fields,h),x,x);break;case"structure":y=`(${h}='${s}' AND ${P} = 3)`,r!==null&&(y+=` AND ${v} = `+r.toString()),R.codefield=H,y="( "+y+" )",O=new _(T.findField(l.associations.fields,F),x,ie);break;case"attached":y=`(${F}='${s}' AND ${P} = 3)`,r!==null&&(y+=` AND ${G} = `+r.toString()),R.codefield=$,y="( "+y+" )",O=new _(T.findField(l.associations.fields,h),x,ie);break;default:throw new Error("Invalid Parameter")}return f&&(y="1 <> 1"),new T({parentfeatureset:l.associations,adaptedFields:[new X(T.findField(l.associations.fields,ge)),new X(T.findField(l.associations.fields,ye)),O,ae,R,re],extraFilter:y?E.create(y,l.associations.getFieldsIndex()):null})})})},t.signatures.push({name:"featuresetbyassociation",min:"2",max:"6"}),t.functions.groupby=function(a,m){return t.standardFunctionAsync(a,m,(p,I,e)=>(w(e,3,3),L(e[0])?e[0].load().then(i=>{const n=[],o=[];let d=!1,l=[];if(C(e[1]))l.push(e[1]);else if(e[1]instanceof S)l.push(e[1]);else if(b(e[1]))l=e[1];else{if(!k(e[1]))return t.failDefferred("Illegal Value: GroupBy");l=e[1].toArray()}for(const r of l)if(C(r)){const f=E.create(D(r),i.getFieldsIndex()),u=de(f)===!0?D(r):"%%%%FIELDNAME";n.push({name:u,expression:f}),u==="%%%%FIELDNAME"&&(d=!0)}else{if(!(r instanceof S))return t.failDefferred("Illegal Value: GroupBy");{const f=r.hasField("name")?r.field("name"):"%%%%FIELDNAME",u=r.hasField("expression")?r.field("expression"):"";if(f==="%%%%FIELDNAME"&&(d=!0),!f)return t.failDefferred("Illegal Value: GroupBy");n.push({name:f,expression:E.create(u||f,i.getFieldsIndex())})}}if(l=[],C(e[2]))l.push(e[2]);else if(b(e[2]))l=e[2];else if(k(e[2]))l=e[2].toArray();else{if(!(e[2]instanceof S))return t.failDefferred("Illegal Value: GroupBy");l.push(e[2])}for(const r of l){if(!(r instanceof S))return t.failDefferred("Illegal Value: GroupBy");{const f=r.hasField("name")?r.field("name"):"",u=r.hasField("statistic")?r.field("statistic"):"",h=r.hasField("expression")?r.field("expression"):"";if(!f||!u||!h)return t.failDefferred("Illegal Value: GroupBy");o.push({name:f,statistic:u.toLowerCase(),expression:E.create(h,i.getFieldsIndex())})}}if(d){const r={};for(const u of i.fields)r[u.name.toLowerCase()]=1;for(const u of n)u.name!=="%%%%FIELDNAME"&&(r[u.name.toLowerCase()]=1);for(const u of o)u.name!=="%%%%FIELDNAME"&&(r[u.name.toLowerCase()]=1);let f=0;for(const u of n)if(u.name==="%%%%FIELDNAME"){for(;r["field_"+f.toString()]===1;)f++;r["field_"+f.toString()]=1,u.name="FIELD_"+f.toString()}}const s=[];for(const r of n)s.push(te(r.expression,t,a));for(const r of o)s.push(te(r.expression,t,a));return s.length>0?J(s).then(()=>A(e[0].groupby(n,o))):A(e[0].groupby(n,o))}):t.failDefferred("Illegal Value: GroupBy")))},t.signatures.push({name:"groupby",min:"3",max:"3"}),t.functions.distinct=function(a,m){return t.standardFunctionAsync(a,m,(p,I,e)=>L(e[0])?(w(e,2,2),e[0].load().then(i=>{const n=[];let o=[];if(C(e[1]))o.push(e[1]);else if(e[1]instanceof S)o.push(e[1]);else if(b(e[1]))o=e[1];else{if(!k(e[1]))return t.failDefferred("Illegal Value: GroupBy");o=e[1].toArray()}let d=!1;for(const s of o)if(C(s)){const r=E.create(D(s),i.getFieldsIndex()),f=de(r)===!0?D(s):"%%%%FIELDNAME";n.push({name:f,expression:r}),f==="%%%%FIELDNAME"&&(d=!0)}else{if(!(s instanceof S))return t.failDefferred("Illegal Value: GroupBy");{const r=s.hasField("name")?s.field("name"):"%%%%FIELDNAME",f=s.hasField("expression")?s.field("expression"):"";if(r==="%%%%FIELDNAME"&&(d=!0),!r)return t.failDefferred("Illegal Value: GroupBy");n.push({name:r,expression:E.create(f||r,i.getFieldsIndex())})}}if(d){const s={};for(const f of i.fields)s[f.name.toLowerCase()]=1;for(const f of n)f.name!=="%%%%FIELDNAME"&&(s[f.name.toLowerCase()]=1);let r=0;for(const f of n)if(f.name==="%%%%FIELDNAME"){for(;s["field_"+r.toString()]===1;)r++;s["field_"+r.toString()]=1,f.name="FIELD_"+r.toString()}}const l=[];for(const s of n)l.push(te(s.expression,t,a));return l.length>0?J(l).then(()=>A(e[0].groupby(n,[]))):A(e[0].groupby(n,[]))})):Pe("distinct",p,I,e))})}export{We as registerFunctions};
