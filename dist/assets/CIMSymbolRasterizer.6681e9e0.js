var ae=Object.defineProperty,re=Object.defineProperties;var ie=Object.getOwnPropertyDescriptors;var V=Object.getOwnPropertySymbols;var ne=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable;var W=(t,e,a)=>e in t?ae(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,J=(t,e)=>{for(var a in e||(e={}))ne.call(e,a)&&W(t,a,e[a]);if(V)for(var a of V(e))se.call(e,a)&&W(t,a,e[a]);return t},N=(t,e)=>re(t,ie(e));import{cL as oe,a4 as ce,bF as le,jl as P,oy as me,l as fe,nZ as he,h6 as j,j$ as ge}from"./index.165b2b59.js";import{r as q,m as ue,x as ye,o as pe}from"./cimAnalyzer.4320229c.js";import{f as de,K as B,n as Me,J as A,t as K,a as Ce,s as Ie,b as Pe,c as ze,e as p,r as Z}from"./CIMSymbolHelper.8c0923eb.js";import"./enums.2e388672.js";import"./BidiEngine.4cfb7343.js";import"./number.08b65821.js";function $(t,e,a,n){if(t.type!=="CIMTextSymbol"){if(a&&t.effects)for(const r of t.effects)be(r,e);if(t.symbolLayers)for(const r of t.symbolLayers)switch(r.type){case"CIMPictureMarker":case"CIMVectorMarker":ee(r,e,n);break;case"CIMPictureStroke":case"CIMSolidStroke":n!=null&&n.preserveOutlineWidth||!r.width||(r.width*=e);break;case"CIMPictureFill":r.height&&(r.height*=e),r.offsetX&&(r.offsetX*=e),r.offsetY&&(r.offsetY*=e);break;case"CIMHatchFill":$(r.lineSymbol,e,!0,N(J({},n),{preserveOutlineWidth:!1})),r.offsetX&&(r.offsetX*=e),r.offsetY&&(r.offsetY*=e),r.separation&&(r.separation*=e)}}else t.height*=e}function ee(t,e,a){if(t.markerPlacement&&ke(t.markerPlacement,e),t.offsetX&&(t.offsetX*=e),t.offsetY&&(t.offsetY*=e),t.anchorPoint&&t.anchorPointUnits==="Absolute"&&(t.anchorPoint={x:t.anchorPoint.x*e,y:t.anchorPoint.y*e}),t.size*=e,t.type==="CIMVectorMarker"&&t.markerGraphics)for(const n of t.markerGraphics)t.scaleSymbolsProportionally||$(n.symbol,e,!0,a)}function ke(t,e){switch(de(t)&&t.offset&&(t.offset*=e),t.type){case"CIMMarkerPlacementAlongLineRandomSize":case"CIMMarkerPlacementAlongLineSameSize":if(t.customEndingOffset&&(t.customEndingOffset*=e),t.offsetAlongLine&&(t.offsetAlongLine*=e),t.placementTemplate&&t.placementTemplate.length){const a=t.placementTemplate.map(n=>n*e);t.placementTemplate=a}break;case"CIMMarkerPlacementAlongLineVariableSize":if(t.maxRandomOffset&&(t.maxRandomOffset*=e),t.placementTemplate&&t.placementTemplate.length){const a=t.placementTemplate.map(n=>n*e);t.placementTemplate=a}break;case"CIMMarkerPlacementOnLine":t.startPointOffset&&(t.startPointOffset*=e);break;case"CIMMarkerPlacementAtExtremities":t.offsetAlongLine&&(t.offsetAlongLine*=e);break;case"CIMMarkerPlacementAtMeasuredUnits":case"CIMMarkerPlacementOnVertices":break;case"CIMMarkerPlacementAtRatioPositions":t.beginPosition&&(t.beginPosition*=e),t.endPosition&&(t.endPosition*=e);break;case"CIMMarkerPlacementPolygonCenter":t.offsetX&&(t.offsetX*=e),t.offsetY&&(t.offsetY*=e);break;case"CIMMarkerPlacementInsidePolygon":t.offsetX&&(t.offsetX*=e),t.offsetY&&(t.offsetY*=e),t.stepX&&(t.stepX*=e),t.stepY&&(t.stepY*=e)}}function be(t,e){switch(t.type){case"CIMGeometricEffectArrow":case"CIMGeometricEffectDonut":t.width&&(t.width*=e);break;case"CIMGeometricEffectBuffer":t.size&&(t.size*=e);break;case"CIMGeometricEffectCut":t.beginCut&&(t.beginCut*=e),t.endCut&&(t.endCut*=e),t.middleCut&&(t.middleCut*=e);break;case"CIMGeometricEffectDashes":if(t.customEndingOffset&&(t.customEndingOffset*=e),t.offsetAlongLine&&(t.offsetAlongLine*=e),t.dashTemplate&&t.dashTemplate.length){const a=t.dashTemplate.map(n=>n*e);t.dashTemplate=a}break;case"CIMGeometricEffectExtension":case"CIMGeometricEffectJog":case"CIMGeometricEffectRadial":t.length&&(t.length*=e);break;case"CIMGeometricEffectMove":t.offsetX&&(t.offsetX*=e),t.offsetY&&(t.offsetY*=e);break;case"CIMGeometricEffectOffset":case"CIMGeometricEffectOffsetTangent":t.offset&&(t.offset*=e);break;case"CIMGeometricEffectRegularPolygon":t.radius&&(t.radius*=e);break;case"CIMGeometricEffectTaperedPolygon":t.fromWidth&&(t.fromWidth*=e),t.length&&(t.length*=e),t.toWidth&&(t.toWidth*=e);break;case"CIMGeometricEffectWave":t.amplitude&&(t.amplitude*=e),t.period&&(t.period*=e)}}const xe=512;class we{constructor(e){this._resourceManager=e}dispose(){this._rasterizationCanvas=null}rasterizeJSONResource(e,a,n){if(this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),e.type==="simple-fill"||e.type==="esriSFS"){const[f,o,h]=B.rasterizeSimpleFill(this._rasterizationCanvas,e.style,a);return{size:[o,h],image:new Uint32Array(f.buffer),sdf:!1,simplePattern:!0,anchorX:0,anchorY:0}}if(e.type==="simple-line"||e.type==="esriSLS"||e.type==="line"&&e.dashTemplate){let f,o;if(e.type==="simple-line"||e.type==="esriSLS")switch(f=Me(e.style,e.cap),e.cap){case"butt":o="Butt";break;case"square":o="Square";break;default:o="Round"}else f=e.dashTemplate,o=e.cim.capStyle;const[h,g,y]=B.rasterizeSimpleLine(f,o);return{size:[g,y],image:new Uint32Array(h.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}}let r,i,c;if(e.type==="simple-marker"||e.type==="esriSMS"||e.type==="line-marker"?(r=A.fromSimpleMarker(e),c=q(r)):e.cim&&e.cim.type==="CIMHatchFill"?(r=A.fromCIMHatchFill(e.cim),i=new K(r.frame.xmin,-r.frame.ymax,r.frame.xmax-r.frame.xmin,r.frame.ymax-r.frame.ymin)):e.cim.markerPlacement&&e.cim.markerPlacement.type==="CIMMarkerPlacementInsidePolygon"?(r=A.fromCIMInsidePolygon(e.cim),i=new K(r.frame.xmin,-r.frame.ymax,r.frame.xmax-r.frame.xmin,r.frame.ymax-r.frame.ymin)):(r=e.cim,c=q(r)),c&&!n){const[f,o,h]=ue(c);return f?{size:[o,h],image:new Uint32Array(f.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}:null}const[s,l,m,u,d]=A.rasterize(this._rasterizationCanvas,r,i,this._resourceManager,!n);return s?{size:[l,m],image:new Uint32Array(s.buffer),sdf:!1,simplePattern:!1,anchorX:u,anchorY:d}:null}rasterizeImageResource(e,a,n,r){this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),this._rasterizationCanvas.width=e,this._rasterizationCanvas.height=a;const i=this._rasterizationCanvas.getContext("2d");n instanceof ImageData?i.putImageData(n,0,0):(n.setAttribute("width",`${e}px`),n.setAttribute("height",`${a}px`),i.drawImage(n,0,0,e,a));const c=i.getImageData(0,0,e,a),s=new Uint8Array(c.data);if(r){for(const o of r)if(o&&o.oldColor&&o.oldColor.length===4&&o.newColor&&o.newColor.length===4){const[h,g,y,C]=o.oldColor,[I,k,z,b]=o.newColor;if(h===I&&g===k&&y===z&&C===b)continue;for(let M=0;M<s.length;M+=4)h===s[M]&&g===s[M+1]&&y===s[M+2]&&C===s[M+3]&&(s[M]=I,s[M+1]=k,s[M+2]=z,s[M+3]=b)}}let l;for(let o=0;o<s.length;o+=4)l=s[o+3]/255,s[o]=s[o]*l,s[o+1]=s[o+1]*l,s[o+2]=s[o+2]*l;let m=s,u=e,d=a;const f=xe;if(u>=f||d>=f){const o=u/d;o>1?(u=f,d=Math.round(f/o)):(d=f,u=Math.round(f*o)),m=new Uint8Array(4*u*d);const h=new Uint8ClampedArray(m.buffer);Ce(s,e,a,h,u,d,!1)}return{size:[u,d],image:new Uint32Array(m.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}}}var Y;(function(t){t.Legend="legend",t.Preview="preview"})(Y||(Y={}));const X=(t,e,a)=>{if(t&&t.targetSize){let n;if(a){const r=Math.max(a.frame.xmax-a.frame.xmin,a.frame.ymax-a.frame.ymin);n=t.targetSize/P(r)}else n=t.targetSize/e.referenceSize;return n}return t&&t.scaleFactor?t.scaleFactor:1},Q={fill:{legend:{frame:{xmax:15,xmin:0,ymax:15,ymin:0},geometry:{rings:[[[0,15],[15,7.5],[15,0],[0,0],[0,15]]]},canvasPaths:{rings:[[[0,15],[0,0],[15,7.5],[15,15],[0,15]]]}},preview:{frame:{xmax:100,xmin:0,ymax:100,ymin:0},geometry:{rings:[[[0,100],[100,100],[100,0],[0,0],[0,100]]]},canvasPaths:{rings:[[[0,100],[0,0],[100,0],[100,100],[0,100]]]}}},stroke:{legend:{frame:{xmax:24,xmin:0,ymax:2,ymin:-2},geometry:{paths:[[[0,0],[12,0],[24,0]]]},canvasPaths:{paths:[[[0,2],[12,2],[24,2]]]}},preview:{frame:{xmax:100,xmin:0,ymax:2,ymin:-2},geometry:{paths:[[[0,0],[50,0],[100,0]]]},canvasPaths:{paths:[[[0,2],[50,2],[100,2]]]}}}};class Ge{constructor(e,a){this._spatialReference=e,this._avoidSDF=a,this._resourceCache=new Map,this._pictureMarkerCache=new Map,this._textRasterizer=new Ie,this._cimResourceManager=new Pe,this._rasterizer=new we(this._cimResourceManager)}async rasterizeCIMSymbolAsync(e,a,n,r,i,c,s,l){r=r||(a?a.centroid!=null?"esriGeometryPolygon":oe(a.geometry):null)||_e(e);const m=await this.analyzeCIMSymbol(e,a?Se(a.attributes):null,n,r,l);return this.rasterizeCIMSymbol(m,a,r,i,c,s)}async analyzeCIMSymbol(e,a,n,r,i){const c=[],s=a?{geometryType:r,spatialReference:this._spatialReference,fields:a}:null;let l;await ye(e.data,s,this._cimResourceManager,c,this._avoidSDF),ce(i);for(const m of c)m.cim.type!=="CIMPictureMarker"&&m.cim.type!=="CIMPictureFill"&&m.cim.type!=="CIMPictureStroke"||(l||(l=[]),l.push(this._fetchPictureMarkerResource(m,i))),n&&m.type==="text"&&typeof m.text=="string"&&m.text.includes("[")&&(m.text=ze(n,m.text,m.cim.textCase));return l&&await Promise.all(l),c}async _fetchPictureMarkerResource(e,a){const n=e.materialHash;if(!this._pictureMarkerCache.get(n)){const r=(await le(e.cim.url,{responseType:"image",signal:a&&a.signal})).data;this._pictureMarkerCache.set(n,r)}}rasterizeCIMSymbol(e,a,n,r,i,c){const s=[];for(const l of e){r&&typeof r.scaleFactor=="function"&&(r.scaleFactor=r.scaleFactor(a,i,c));const m=this._getRasterizedResource(l,a,n,r,i,c);if(!m)continue;let u=0,d=m.anchorX||0,f=m.anchorY||0,o=!1,h=0,g=0;if(n==="esriGeometryPoint"){const y=X(r,l,null);if(h=p(l.offsetX,a,i,c)*y||0,g=p(l.offsetY,a,i,c)*y||0,l.type==="marker")u=p(l.rotation,a,i,c)||0,o=!!l.rotateClockwise&&l.rotateClockwise;else if(l.type==="text"){if(u=p(l.angle,a,i,c)||0,l.horizontalAlignment!==void 0)switch(l.horizontalAlignment){case"left":d=-.5;break;case"right":d=.5;break;default:d=0}if(l.verticalAlignment!==void 0)switch(l.verticalAlignment){case"top":f=.5;break;case"bottom":f=-.5;break;case"baseline":f=-.25;break;default:f=0}}}m!=null&&s.push({angle:u,rotateClockWise:o,anchorX:d,anchorY:f,offsetX:h,offsetY:g,rasterizedResource:m})}return this.getSymbolImage(s)}getSymbolImage(e){const a=document.createElement("canvas"),n=a.getContext("2d");let r=0,i=0,c=0,s=0;const l=[];for(let f=0;f<e.length;f++){const o=e[f],h=o.rasterizedResource;if(!h)continue;const g=h.size,y=o.offsetX,C=o.offsetY,I=o.anchorX,k=o.anchorY,z=o.rotateClockWise||!1;let b=o.angle,M=P(y)-g[0]*(.5+I),x=P(C)-g[1]*(.5+k),_=M+g[0],v=x+g[1];if(b){z&&(b=-b);const w=Math.sin(b*Math.PI/180),S=Math.cos(b*Math.PI/180),D=M*S-x*w,G=M*w+x*S,E=M*S-v*w,L=M*w+v*S,F=_*S-v*w,O=_*w+v*S,U=_*S-x*w,H=_*w+x*S;M=Math.min(D,E,F,U),x=Math.min(G,L,O,H),_=Math.max(D,E,F,U),v=Math.max(G,L,O,H)}r=M<r?M:r,i=x<i?x:i,c=_>c?_:c,s=v>s?v:s;const T=n.createImageData(h.size[0],h.size[1]);T.data.set(new Uint8ClampedArray(h.image.buffer));const te={offsetX:y,offsetY:C,rotateClockwise:z,angle:b,rasterizedImage:T,anchorX:I,anchorY:k};l.push(te)}a.width=c-r,a.height=s-i;const m=-r,u=s;for(let f=0;f<l.length;f++){const o=l[f],h=this._imageDataToCanvas(o.rasterizedImage),g=o.rasterizedImage.width,y=o.rasterizedImage.height,C=m-g*(.5+o.anchorX),I=u-y*(.5-o.anchorY);if(o.angle){const k=(360-o.angle)*Math.PI/180;n.save(),n.translate(P(o.offsetX),-P(o.offsetY)),n.translate(m,u),n.rotate(k),n.translate(-m,-u),n.drawImage(h,C,I),n.restore()}else n.drawImage(h,C+P(o.offsetX),I-P(o.offsetY))}const d=new me({x:m/a.width-.5,y:u/a.height-.5});return{imageData:a.width!==0&&a.height!==0?n.getImageData(0,0,a.width,a.height):n.createImageData(1,1),anchorPosition:d}}_imageDataToCanvas(e){this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));const a=this._imageDataCanvas,n=a.getContext("2d");return a.width=e.width,a.height=e.height,n.putImageData(e,0,0),a}_imageTo32Array(e,a,n,r){this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));const i=this._imageDataCanvas,c=i.getContext("2d");if(i.width=a,i.height=n,c.drawImage(e,0,0,a,n),r){c.save();const s=new fe(r);c.fillStyle=s.toHex(),c.globalCompositeOperation="multiply",c.fillRect(0,0,a,n),c.globalCompositeOperation="destination-atop",c.drawImage(e,0,0,a,n),c.restore()}return new Uint32Array(c.getImageData(0,0,a,n).data.buffer)}_getRasterizedResource(e,a,n,r,i,c){let s,l,m,u,d=null,f=null;if(n==="esriGeometryPolyline"||n==="esriGeometryPolygon"){const h=r&&r.style?r.style:Y.Legend,g=n==="esriGeometryPolyline"?Q.stroke[h]:Q.fill[h];if(e.type==="line"){if(e.cim.type!=="CIMSolidStroke"){if(e.cim.type==="CIMPictureStroke"){const y=p(e.width,a,i,c),C=p(e.color,a,i,c),{image:I,width:k,height:z}=this._getPictureResource(e,y,C);return this._rasterizePictureResource(e,I,k,z,g,y)}return null}({analyzedCIM:s,hash:m}=R(e,a,i,c)),l=this._embedCIMLayerInVectorMarker(s,g)}else if(e.type==="marker"){if(e.cim.type==="CIMPictureMarker"){const y=p(e.size,a,i,c),C=p(e.color,a,i,c),{image:I,width:k,height:z}=this._getPictureResource(e,y,C);return this._rasterizePictureResource(e,I,k,z,g,y)}if(e.cim.type!=="CIMVectorMarker")return null;e.cim.offsetX=p(e.offsetX,a,i,c),e.cim.offsetY=p(e.offsetY,a,i,c),e.cim.rotation=p(e.rotation,a,i,c),e.cim.markerPlacement=e.markerPlacement,{analyzedCIM:s}=R(e,a,i,c),m=he(JSON.stringify(s)).toString(),l=this._embedCIMLayerInVectorMarker(s,g),d=p(e.size,a,i,c),f=e.path}else{if(e.type==="text")return null;if(e.type==="fill"){if(e.cim.type==="CIMHatchFill"||e.cim.type==="CIMVectorMarker"||e.cim.type==="CIMPictureMarker"||e.cim.type==="CIMPictureFill"){const y=e.cim.size||e.cim.height;let C,I,k;if(e.cim.type==="CIMPictureMarker"||e.cim.type==="CIMPictureFill")({image:C,width:I,height:k}=this._getPictureResource(e,y,p(e.color,a,i,c)));else{({analyzedCIM:s,hash:m}=R(e,a,i,c));const z=this._rasterizer.rasterizeJSONResource({cim:s,type:e.type,url:e.url,mosaicHash:m,size:y,path:f},1,this._avoidSDF);C=z.image,I=z.size[0],k=z.size[1]}return this._rasterizePictureResource(e,C,I,k,g,null)}if(e.cim.type!=="CIMSolidFill")return null;({analyzedCIM:s,hash:m}=R(e,a,i,c)),l=this._embedCIMLayerInVectorMarker(s,g)}}}else{if(e.type==="text")return u=this._rasterizeTextResource(e,a,r,i,c),u;({analyzedCIM:s,hash:m}=R(e,a,i,c));const h=X(r,e,null);if(e.cim.type==="CIMPictureMarker"){const g=p(e.size,a,i,c)*h,{image:y,width:C,height:I}=this._getPictureResource(e,g,p(e.color,a,i,c));return u={image:y,size:[C,I],sdf:!1,simplePattern:!1,anchorX:e.anchorPoint?e.anchorPoint.x:0,anchorY:e.anchorPoint?e.anchorPoint.y:0},u}ee(s,h,{preserveOutlineWidth:!1}),l=s}m+=n,r&&(m+=JSON.stringify(r));const o=this._resourceCache;return o.has(m)?o.get(m):(u=this._rasterizer.rasterizeJSONResource({cim:l,type:e.type,url:e.url,mosaicHash:m,size:d,path:f},window.devicePixelRatio||1,this._avoidSDF),o.set(m,u),u)}_rasterizeTextResource(e,a,n,r,i){const c=X(n,e,null),s=p(e.text,a,r,i);if(!s||s.length===0)return null;const l=p(e.fontName,a,r,i),m=p(e.style,a,r,i),u=p(e.weight,a,r,i),d=p(e.decoration,a,r,i),f=p(e.size,a,r,i)*c,o=p(e.horizontalAlignment,a,r,i),h=p(e.verticalAlignment,a,r,i),g=Z(p(e.color,a,r,i)),y=Z(p(e.outlineColor,a,r,i)),C={color:g,size:f,horizontalAlignment:o,verticalAlignment:h,font:{family:l,style:m,weight:u,decoration:d},halo:{size:p(e.outlineSize,a,r,i)||0,color:y,style:m},pixelRatio:1,premultiplyColors:!this._avoidSDF};return this._textRasterizer.rasterizeText(s,C)}_rasterizePictureResource(e,a,n,r,i,c){const s=document.createElement("canvas"),l=s.getContext("2d");s.height=P(Math.max(i.frame.ymax-i.frame.ymin,c)),s.width=P(i.frame.xmax-i.frame.xmin);const m=l.createImageData(n,r);m.data.set(new Uint8ClampedArray(a.buffer));const u=this._imageDataToCanvas(m),d=l.createPattern(u,"repeat"),f=Math.cos((-e.cim.rotation||0)*Math.PI/180),o=Math.sin((-e.cim.rotation||0)*Math.PI/180);d.setTransform({m11:f,m12:o,m21:-o,m22:f,m41:P(e.cim.offsetX)||0,m42:P(e.cim.offsetY)||0});const h=i.canvasPaths;let g,y,C;j(h)?(g=h.rings,l.fillStyle=d,y=l.fill,C=["evenodd"]):ge(h)&&(g=h.paths,l.strokeStyle=d,l.lineWidth=c,y=l.stroke,g[0][0][1]=s.height/2,g[0][1][1]=s.height/2),l.beginPath();for(const z of g){const b=z?z.length:0;if(b>1){let M=z[0];l.moveTo(P(M[0]),P(M[1]));for(let x=1;x<b;++x)M=z[x],l.lineTo(P(M[0]),P(M[1]));l.closePath()}}y.apply(l,C);const I=l.getImageData(0,0,s.width,s.height),k=new Uint8Array(I.data);return{size:[s.width,s.height],image:new Uint32Array(k.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}}_getPictureResource(e,a,n){const r=this._pictureMarkerCache.get(e.materialHash);if(!r)return null;const i=r.height/r.width,c=a?i>1?P(a):P(a)/i:r.width,s=a?i>1?P(a)*i:P(a):r.height;return{image:this._imageTo32Array(r,c,s,n),width:c,height:s}}_embedCIMLayerInVectorMarker(e,a){const n=j(a.geometry)?"CIMPolygonSymbol":"CIMLineSymbol",r=a.frame;return{type:"CIMVectorMarker",frame:r,size:r.ymax-r.ymin,markerGraphics:[{type:"CIMMarkerGraphic",geometry:a.geometry,symbol:{type:n,symbolLayers:[e]}}]}}}function Se(t){return(t?Object.keys(t):[]).map(e=>({name:e,alias:e,type:typeof t[e]=="string"?"esriFieldTypeString":"esriFieldTypeDouble"}))}function _e(t){if(!(t&&t.data&&t.data.symbol))return null;switch(t.data.symbol.type){case"CIMPointSymbol":case"CIMTextSymbol":return"esriGeometryPoint";case"CIMLineSymbol":return"esriGeometryPolyline";case"CIMPolygonSymbol":return"esriGeometryPolygon";default:return null}}function R(t,e,a,n){let r,i;return typeof t.materialHash=="function"?(r=(0,t.materialHash)(e,a,n),i=pe(t.cim,t.materialOverrides)):(r=t.materialHash,i=t.cim),{analyzedCIM:i,hash:r}}export{Ge as CIMSymbolRasterizer,Y as GeometryStyle};