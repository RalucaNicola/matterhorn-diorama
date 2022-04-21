import{kY as Bt,kS as gt,kZ as et,k_ as Et,k$ as Ut,I as ht,l0 as k,cX as Ot,aL as Gt,aN as it,aO as Dt,kv as st,kB as D,l1 as I,cn as lt,l2 as Vt,l3 as Wt,l4 as Ht,l5 as Jt,l6 as Zt,e as d,d as u,n as vt,y as bt,u as Kt,r as Qt,l7 as Y,kd as ct,l8 as H,l9 as J,la as te,q as ee,aj as g,lb as rt,lc as wt,kq as St,bl as F,bn as K,ld as ie,f1 as se,aX as re,aM as O,ag as oe,le as ne,lf as ae}from"./index.165b2b59.js";import{t as he}from"./LineVisualElement.2ea00164.js";const Ie={readOnly:!0,get(){const e="metric",{view:t}=this;if(!t)return e;const i=t.get("map.portalItem.portal");if(i)switch(i.get("user.units")||i.units){case e:return e;case"english":return"imperial"}return Bt(t.spatialReference)||e}};var dt;(function(e){e[e.Auto=0]="Auto",e[e.Euclidean=1]="Euclidean",e[e.Geodesic=2]="Geodesic"})(dt||(dt={}));function le(e,t){return{type:et(t),value:e,unit:t}}function Ce(e,t){return{type:et(t),value:e,unit:t}}function ze(e,t){return{type:et(t),value:e,unit:t}}function ce(e,t){return le(gt(e.value,e.unit,t),t)}function $t(e){if(!e)return null;if(e.isGeographic&&e.wkid){const t=Et[e.wkid];if(t)return t}if(e.wkt){const t=de(e.wkt);if(t)return t}return null}function de(e){const t=Ut.exec(e);if(!t||t.length!==2)return null;const i=t[1].split(",");if(!i||i.length<3)return null;const s=parseFloat(i[1]),o=parseFloat(i[2]);return isNaN(s)||isNaN(o)?null:{a:s,f:o===0?0:1/o}}function pe(e){const t=$t(e||Ot.WGS84);if(ue(t))return t;const i=t.a*(1-t.f);return Object.assign(t,{b:i,eSq:1-(i/t.a)**2,radius:(2*t.a+i)/3,densificationRatio:1e4/((2*t.a+i)/3)})}function ue(e){return"b"in e&&"eSq"in e&&"radius"in e}function fe(e){return $t(e)!==null}function Ae(e,t="meters"){if(!e)throw new ht("geodesic-lengths:invalid-geometries","the input geometries type is not supported");if(e.some(s=>!fe(s.spatialReference)))throw new ht("geodesic-lengths:invalid-spatial-reference","the input geometries spatial reference is not supported");const i=[];for(let s=0;s<e.length;s++){const o=e[s],{spatialReference:r}=o,c=o.type==="polyline"?o.paths:o.rings;let a=0;for(let h=0;h<c.length;h++){const l=c[h];let f=0;for(let _=1;_<l.length;_++){const M=l[_-1][0],A=l[_][0],j=l[_-1][1],b=l[_][1];if(j!==b||M!==A){const v={distance:null};me(v,[M,j],[A,b],r),f+=v.distance}}a+=f}a=gt(a,"meters",t),i.push(a)}return i}function me(e,t,i,s){const o=t[0]*k,r=t[1]*k,c=i[0]*k,a=i[1]*k,{a:h,b:l,f,radius:_}=pe(s),M=c-o,A=Math.atan((1-f)*Math.tan(r)),j=Math.atan((1-f)*Math.tan(a)),b=Math.sin(A),v=Math.cos(A),C=Math.sin(j),w=Math.cos(j);let ot,L,R,x,X,V,N,B,E,U,nt=1e3,S=M;do{if(N=Math.sin(S),B=Math.cos(S),R=Math.sqrt(w*N*(w*N)+(v*C-b*w*B)*(v*C-b*w*B)),R===0)return e.distance=0,e.azimuth=void 0,e.reverseAzimuth=void 0,e;X=b*C+v*w*B,V=Math.atan2(R,X),E=v*w*N/R,L=1-E*E,x=X-2*b*C/L,isNaN(x)&&(x=0),U=f/16*L*(4+f*(4-3*L)),ot=S,S=M+(1-U)*f*E*(V+U*R*(x+U*X*(2*x*x-1)))}while(Math.abs(S-ot)>1e-12&&--nt>0);if(nt===0){const Xt=_,Yt=Math.acos(Math.sin(r)*Math.sin(a)+Math.cos(r)*Math.cos(a)*Math.cos(c-o))*Xt,at=c-o,qt=Math.sin(at)*Math.cos(a),Ft=Math.cos(r)*Math.sin(a)-Math.sin(r)*Math.cos(a)*Math.cos(at),Nt=Math.atan2(qt,Ft);return e.azimuth=Nt/k,e.distance=Yt,e.reverseAzimuth=void 0,e}const P=L*(h*h-l*l)/(l*l),W=P/1024*(256+P*(P*(74-47*P)-128)),At=l*(1+P/16384*(4096+P*(P*(320-175*P)-768)))*(V-W*R*(x+W/4*(X*(2*x*x-1)-W/6*x*(4*R*R-3)*(4*x*x-3)))),jt=Math.atan2(w*Math.sin(S),v*C-b*w*Math.cos(S)),Lt=Math.atan2(v*Math.sin(S),v*C*Math.cos(S)-b*w);return e.azimuth=jt/k,e.distance=At,e.reverseAzimuth=Lt/k,e}function je(e,t){if(Gt(t,0,0,0),e.length>0){for(let i=0;i<e.length;++i)it(t,t,e[i]);Dt(t,t,1/e.length)}}function Le(e,t,i,s){s.projectToRenderScreen(e,Mt),s.projectToRenderScreen(t,Rt),st(i,_e,xe),D(i,i)}const Mt=I(),xe=Mt,Rt=I(),_e=Rt;class Xe{constructor(t=null){this.spatialReference=t}get spatialReference(){return this._spatialReference}set spatialReference(t){t!==this._spatialReference&&(this._spatialReference=t,this._updateNormalizationFactors())}normalizeDistance(t){return t*this._metersPerDistanceUnit}normalizeElevation(t){return t*this._metersPerElevationUnit}normalizeArea(t){return t*this._squareMetersPerAreaUnit}_updateNormalizationFactors(){this._metersPerDistanceUnit=lt(this._spatialReference,1),this._metersPerElevationUnit=lt(this._spatialReference,1),this._squareMetersPerAreaUnit=this._metersPerDistanceUnit*this._metersPerDistanceUnit}}function Ye(e,t,i,s=2,o="abbr"){return Vt(e,ce(t,i).value,i,s,o)}function qe(e,t,i=2,s="abbr"){if(t.type!=="length")throw new Error("quantity is not a length");return Jt(e,t.value,t.unit,i,s)}function Fe(e,t,i=2,s="abbr"){if(t.type!=="length")throw new Error("quantity is not a length");return Zt(e,t.value,t.unit,i,s)}function Ne(e,t,i=2,s="abbr"){if(t.type!=="length")throw new Error("quantity is not a length");return Wt(e,t.value,t.unit,i,s)}function Be(e,t,i=2,s="abbr"){if(t.type!=="length")throw new Error("quantity is not a length");return Ht(e,t.value,t.unit,i,s)}function ye(e,t,i,s){s.projectToRenderScreen(e,Pt),s.projectToRenderScreen(t,kt),st(i,ve,ge),D(i,i)}const Pt=I(),ge=Pt,kt=I(),ve=kt;let be=e=>({vnodeSelector:"",properties:void 0,children:void 0,text:e.toString(),domNode:null}),Tt=(e,t,i)=>{for(let s=0,o=t.length;s<o;s++){let r=t[s];Array.isArray(r)?Tt(e,r,i):r!=null&&r!==!1&&(typeof r=="string"&&(r=be(r)),i.push(r))}};function G(e,t,i){if(Array.isArray(t))i=t,t=void 0;else if(t&&(typeof t=="string"||t.hasOwnProperty("vnodeSelector"))||i&&(typeof i=="string"||i.hasOwnProperty("vnodeSelector")))throw new Error("h called with invalid arguments");let s,o;return i&&i.length===1&&typeof i[0]=="string"?s=i[0]:i&&(o=[],Tt(e,i,o),o.length===0&&(o=void 0)),{vnodeSelector:e,properties:t,children:o,text:s===""?void 0:s,domNode:null}}let m=class extends bt{constructor(e){super(e),this.startX=0,this.startY=0,this.endX=0,this.endY=0,this.width=1,this.color=[0,0,0,.5],this.visible=!0}get startPosition(){return[this.startX,this.startY]}set startPosition(e){this._set("startX",e[0]),this._set("startY",e[1])}get endPosition(){return[this.endX,this.endY]}set endPosition(e){this._set("endX",e[0]),this._set("endY",e[1])}get strokeStyle(){const e=this.color;return`rgba(${e[0]}, ${e[1]}, ${e[2]}, ${e[3]})`}get lineCap(){return"round"}render(){const{height:e,left:t,top:i,width:s,x1:o,x2:r,y1:c,y2:a}=this._calculateCoordinates(pt),h=`stroke: ${this.strokeStyle}; stroke-width: ${this.width}; stroke-linecap: ${this.lineCap};`;return G("div",{classes:{"esri-line-overlay-item":!0},styles:{left:t+"px",top:i+"px",width:s+"px",height:e+"px",visibility:this.visible?"visible":"hidden"}},[G("svg",{width:s,height:e},[G("line",{x1:o,y1:c,x2:r,y2:a,style:h})])])}renderCanvas(e){if(!this.visible)return;e.strokeStyle=this.strokeStyle,e.lineWidth=this.width,e.lineCap=this.lineCap;const t=this._calculateCoordinates(pt);e.beginPath(),e.moveTo(t.left+t.x1,t.top+t.y1),e.lineTo(t.left+t.x2,t.top+t.y2),e.stroke()}_calculateCoordinates(e){const t=Math.min(this.startX,this.endX),i=Math.max(this.startX,this.endX),s=Math.min(this.startY,this.endY),o=Math.max(this.startY,this.endY),r=this.width;return e.left=t-r,e.top=s-r,e.width=i-t+2*r,e.height=Math.max(20,o-s+2*r),e.x1=this.startX-t+r,e.y1=this.startY-s+r,e.x2=this.endX-t+r,e.y2=this.endY-s+r,e}};d([u()],m.prototype,"startX",void 0),d([u()],m.prototype,"startY",void 0),d([u()],m.prototype,"endX",void 0),d([u()],m.prototype,"endY",void 0),d([u()],m.prototype,"startPosition",null),d([u()],m.prototype,"endPosition",null),d([u()],m.prototype,"width",void 0),d([u()],m.prototype,"color",void 0),d([u()],m.prototype,"visible",void 0),d([u({readOnly:!0})],m.prototype,"strokeStyle",null),m=d([vt("esri.views.overlay.LineOverlayItem")],m);const pt={left:0,top:0,width:0,height:0,x1:0,y1:0,x2:0,y2:0},we=m,ut={bottom:"esri-text-overlay-item-anchor-bottom","bottom-right":"esri-text-overlay-item-anchor-bottom-right","bottom-left":"esri-text-overlay-item-anchor-bottom-left",top:"esri-text-overlay-item-anchor-top","top-right":"esri-text-overlay-item-anchor-top-right","top-left":"esri-text-overlay-item-anchor-top-left",center:"esri-text-overlay-item-anchor-center",right:"esri-text-overlay-item-anchor-right",left:"esri-text-overlay-item-anchor-left"};let y=class extends bt{constructor(e){super(e),this.x=0,this.y=0,this.text="-",this.fontSize=14,this.anchor="center",this.visible=!0,this.backgroundColor="rgba(0, 0, 0, 0.6)",this.textColor="white",this.textShadowColor=[0,0,0],this.textShadowSize=1}get position(){return[this.x,this.y]}set position(e){this._set("x",e[0]),this._set("y",e[1])}get padding(){return .5*this.fontSize}render(){return G("div",{classes:this._cssClasses(),styles:{left:Math.floor(this.x)+"px",top:Math.floor(this.y)+"px",visibility:this.visible?"visible":"hidden",fontSize:this.fontSize+"px",backgroundColor:this.backgroundColor,color:this.textColor,padding:this.padding+"px",borderRadius:this.padding+"px",textShadow:`0 0 ${this.textShadowSize}px rgb(${this.textShadowColor[0]}, ${this.textShadowColor[1]}, ${this.textShadowColor[2]})`}},[this.text])}renderCanvas(e){if(!this.visible)return;const t=e.font.replace(/^(.*?)px/,"");e.font=`${this.fontSize}px ${t}`;const i=this.padding,s=this.padding,o=e.measureText(this.text).width,r=this.fontSize,c=Se[this.anchor];e.textAlign="center",e.textBaseline="middle";const a=o+2*i,h=r+2*i,l=this.x+c.x*a,f=this.y+c.y*h;this._roundedRect(e,l,f,a,h,s),e.fillStyle=this.backgroundColor,e.fill();const _=this.x+(c.x+.5)*a,M=this.y+(c.y+.5)*h;this._renderTextShadow(e,this.text,_,M),e.fillStyle=this.textColor,e.fillText(this.text,_,M)}_renderTextShadow(e,t,i,s){e.lineJoin="miter",e.fillStyle=`rgba(${this.textShadowColor[0]}, ${this.textShadowColor[1]}, ${this.textShadowColor[2]}, ${1/Q.length})`;const o=this.textShadowSize;for(const[r,c]of Q)e.fillText(t,i+o*r,s+o*c)}_roundedRect(e,t,i,s,o,r){e.beginPath(),e.moveTo(t,i+r),e.arcTo(t,i,t+r,i,r),e.lineTo(t+s-r,i),e.arcTo(t+s,i,t+s,i+r,r),e.lineTo(t+s,i+o-r),e.arcTo(t+s,i+o,t+s-r,i+o,r),e.lineTo(t+r,i+o),e.arcTo(t,i+o,t,i+o-r,r),e.closePath()}_cssClasses(){const e={"esri-text-overlay-item":!0};for(const t in ut)e[ut[t]]=this.anchor===t;return e}};d([u()],y.prototype,"x",void 0),d([u()],y.prototype,"y",void 0),d([u()],y.prototype,"position",null),d([u()],y.prototype,"text",void 0),d([u()],y.prototype,"fontSize",void 0),d([u()],y.prototype,"anchor",void 0),d([u()],y.prototype,"visible",void 0),d([u()],y.prototype,"padding",null),y=d([vt("esri.views.overlay.TextOverlayItem")],y);const Se={bottom:{x:-.5,y:-1,textAlign:"center",textBaseline:"bottom"},"bottom-left":{x:0,y:-1,textAlign:"left",textBaseline:"bottom"},"bottom-right":{x:-1,y:-1,textAlign:"right",textBaseline:"bottom"},center:{x:-.5,y:-.5,textAlign:"center",textBaseline:"middle"},left:{x:0,y:-.5,textAlign:"left",textBaseline:"middle"},right:{x:-1,y:-.5,textAlign:"right",textBaseline:"middle"},top:{x:-.5,y:0,textAlign:"center",textBaseline:"top"},"top-left":{x:0,y:0,textAlign:"left",textBaseline:"top"},"top-right":{x:-1,y:0,textAlign:"right",textBaseline:"top"}},Q=[];for(let t=0;t<360;t+=360/16)Q.push([Math.cos(Math.PI*t/180),Math.sin(Math.PI*t/180)]);const $e=y;class Ee extends he{constructor(t){super(t.view),this._handles=new Kt,this._textItem=null,this._calloutItem=null,this._showCallout=!0,this._showText=!0,this._geometry=null,this._text="-",this._fontSize=14,this._distance=25,this._anchor="right",this.applyProps(t)}get geometry(){return this._geometry}set geometry(t){this._geometry=t,this._updateLabelPosition()}get textItem(){return this._textItem}get text(){return this._text}set text(t){this._text=t,this.attached&&(this._textItem.text=this._text)}get fontSize(){return this._fontSize}set fontSize(t){this._fontSize=t,this.attached&&(this._textItem.fontSize=this._fontSize)}get distance(){return this._distance}set distance(t){this._distance!==t&&(this._distance=t,this._updateLabelPosition())}get anchor(){return this._anchor}set anchor(t){this._anchor!==t&&(this._anchor=t,this._updateLabelPosition())}overlaps(t){return!!this.attached&&this.textItem.visible&&t.textItem.visible&&this.view.overlay.overlaps(this._textItem,t.textItem)}_updateLabelPosition(){if(this.attached){if(this._showText=!1,this._showCallout=!1,Qt(this.geometry)&&this.view._stage)switch(this.geometry.type){case"point":if(this._computeLabelPositionFromPoint(this.geometry.point,$)){if(this.geometry.callout){const t=this.view.state.camera,i=this.geometry.callout.distance;Y(p,p,[0,this.geometry.callout.offset]),t.renderToScreen(p,$),ct(n,0,1),H(n,n,i*t.pixelRatio),Y(n,n,p),t.renderToScreen(n,z),this._showCallout=this._updatePosition($,z)}else this._textItem.position=[$[0],$[1]],this._textItem.anchor="center";this._showText=!0}break;case"corner":this._computeLabelPositionFromCorner(this.geometry,this._distance,$,z)&&(this._showCallout=this._updatePosition($,z),this._showText=!0);break;case"segment":this._computeLabelPositionFromSegment(this.geometry,this._distance,this._anchor,$,z)&&(this._showText=!0,this._showCallout=this._updatePosition($,z))}this.updateVisibility(this.visible)}}_computeLabelPositionFromPoint(t,i){const s=this.view.state.camera;return s.projectToRenderScreen(t,p),!(p[2]<0||p[2]>1)&&(s.renderToScreen(p,i),!0)}_computeLabelPositionFromCorner(t,i,s,o){if(!t)return!1;const r=this.view.state.camera;return ft(t.left,1,r,T),J(T,T),ft(t.right,0,r,_t),Y(n,T,_t),J(n,n),D(n,n),r.projectToRenderScreen(t.left.endRenderSpace,p),!(p[2]<0||p[2]>1)&&(r.renderToScreen(p,s),H(n,n,i*r.pixelRatio),Y(n,n,p),r.renderToScreen(n,o),!0)}_computeLabelPositionFromSegment(t,i,s,o,r){if(!t)return!1;const c=t.segment,a=this.view.state.camera;ye(c.startRenderSpace,c.endRenderSpace,T,a),ct(n,-T[1],T[0]);let h=!1;switch(s){case"top":h=n[1]<0;break;case"bottom":h=n[1]>0;break;case"left":h=n[0]>0;break;case"right":h=n[0]<0}if(h&&J(n,n),te(n)===0)switch(s){case"top":n[1]=1;break;case"bottom":n[1]=-1;break;case"left":n[0]=-1;break;case"right":n[0]=1}return c.eval(Pe[t.sampleLocation],yt),a.projectToRenderScreen(yt,p),!(p[2]<0||p[2]>1)&&(a.renderToScreen(p,o),H(n,n,i*a.pixelRatio),Y(n,n,p),a.renderToScreen(n,r),!0)}_updatePosition(t,i){if(i){const s=i[0]-t[0],o=i[1]-t[1];return this._textItem.position=[i[0],i[1]],this._textItem.anchor=Math.abs(s)>Math.abs(o)?s>0?"left":"right":o>0?"top":"bottom",this._calloutItem.startPosition=[t[0],t[1]],this._calloutItem.endPosition=[i[0],i[1]],!0}return this._textItem.position=[t[0],t[1]],this._textItem.anchor="center",!1}createResources(){this._textItem=new $e({visible:!0,text:this._text,fontSize:this._fontSize}),this._calloutItem=new we({visible:!0,width:2}),this._updateLabelPosition(),this.view.overlay.items.addMany([this._textItem,this._calloutItem]),this._handles.add(ee(()=>this.view.state.camera,()=>this._updateLabelPosition()))}destroyResources(){this.view.overlay&&!this.view.overlay.destroyed&&this.view.overlay.items.removeMany([this._textItem,this._calloutItem]),this._handles.removeAll()}updateVisibility(t){this._textItem.visible=this._showText&&t,this._calloutItem.visible=this._showCallout&&t}}function ft(e,t,i,s){e.eval(t,Z,xt),it(mt,Z,xt),i.projectToRenderScreen(Z,It),i.projectToRenderScreen(mt,Ct),st(s,Re,Me),D(s,s)}function Ue(e){switch(e){case"top":return"bottom";case"right":return"left";case"bottom":return"top";case"left":return"right"}}const Z=g(),mt=g(),xt=g(),T=rt(),_t=rt(),n=rt(),yt=g(),p=I(),$=wt(),z=wt(),It=I(),Me=It,Ct=I(),Re=Ct,Pe={start:0,center:.5,end:1};class Oe{constructor(t=g(),i=g()){this.startRenderSpace=t,this.endRenderSpace=i,this.type="euclidean"}eval(t,i,s){return St(i,this.startRenderSpace,this.endRenderSpace,t),s&&(F(s,this.endRenderSpace,this.startRenderSpace),K(s,s)),i}createRenderGeometry(t,i){const s=[],o=[],r=(a,h)=>{const l=tt;F(l,a,t),s.push([l[0],l[1],l[2]]),o.push([h[0],h[1],h[2]])},c=i.worldUpAtPosition(this.eval(.5,zt),ie.get());return r(this.startRenderSpace,c),r(this.endRenderSpace,c),{points:s,normals:o}}}class Ge{constructor(t,i,s){this.startRenderSpace=t,this.endRenderSpace=i,this.renderSpatialReference=s,this.type="geodesic",this._start=g(),this._end=g(),this._pcpf=se(s),this._project=re(s,this._pcpf),this._projectIn(t,this._start),this._projectIn(i,this._end)}_projectIn(t,i){this._project?O(t,this.renderSpatialReference,i,this._pcpf):oe(i,t)}eval(t,i,s){if(this._project)if(s){const o=tt;ne(this._start,this._end,t,i,o),it(q,i,o),O(i,this._pcpf,i,this.renderSpatialReference),O(q,this._pcpf,q,this.renderSpatialReference),F(s,q,i),K(s,s)}else ae(this._start,this._end,t,i),O(i,this._pcpf,i,this.renderSpatialReference);else St(i,this._start,this._end,t),s&&(F(s,this._end,this._start),K(s,s));return i}createRenderGeometry(t,i){const s=[],o=[],r=(a,h)=>{const l=q;F(l,a,t),s.push([l[0],l[1],l[2]]),o.push([h[0],h[1],h[2]])};for(let a=0;a<128;++a){const h=a/127,l=zt,f=tt;this.eval(h,l),i.worldUpAtPosition(l,f),r(l,f)}return{points:s,normals:o}}}const zt=g(),tt=g(),q=g();export{Ae as M,me as R,Oe as _,ce as a,Ee as b,je as c,Ie as d,dt as e,Ye as f,le as g,Ne as h,Be as i,qe as j,Le as k,Ge as l,fe as m,ze as o,Ce as r,Fe as s,Xe as t,Ue as w};
