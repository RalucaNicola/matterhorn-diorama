import{e as o,d,hA as D,n as w,I as u,t as m,D as E,aP as c,r as b,cT as I,aw as T}from"./index.165b2b59.js";import{W as P}from"./DynamicLayerView3D.c63f1fe9.js";import{s as F}from"./popupUtils.3f1e4abd.js";import"./projectExtentUtils.a18e6a6b.js";import"./ImageMaterialTechnique.808c229a.js";import"./RefreshableLayerView.a8d4f681.js";const z=t=>{let e=class extends t{constructor(){super(...arguments),this.view=null}async fetchPopupFeatures(a,r){const{layer:n}=this;if(!a)throw new u("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:n});const{popupEnabled:i}=n,s=F(n,r);if(!i||m(s))throw new u("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:i,popupTemplate:s});const y=await s.getRequiredFields(),l=new E;l.timeExtent=this.timeExtent,l.geometry=a,l.outFields=y,l.outSpatialReference=a.spatialReference;const p=this.view.resolution,g=this.view.type==="2d"?new c(p,p,this.view.spatialReference):new c(.5*p,.5*p,this.view.spatialReference),{returnTopmostRaster:x,showNoDataRecords:f}=s.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},v={returnDomainValues:!0,returnTopmostRaster:x,pixelSize:g,showNoDataRecords:f,signal:b(r)?r.signal:null};return n.queryVisibleRasters(l,v).then(R=>R)}canResume(){var a;return!!super.canResume()&&((a=this.timeExtent)==null||!a.isEmpty)}};return o([d()],e.prototype,"layer",void 0),o([d()],e.prototype,"suspended",void 0),o([d(D)],e.prototype,"timeExtent",void 0),o([d()],e.prototype,"view",void 0),e=o([w("esri.views.layers.ImageryLayerView")],e),e};let h=class extends z(P){constructor(){super(...arguments),this.type="imagery-3d",this.redrawDebounced=I(async t=>{this.redraw((e,a)=>this._redrawImage(e,a),t)},2e3)}initialize(){this.handles.add([T(()=>this.view.basemapTerrain.ready,()=>this._initializeMaximumDataResolution(),{once:!0,initial:!0}),this.layer.on("redraw",()=>this.updatingHandles.addPromise(this.redrawDebounced()))]),this.updatingHandles.add(()=>{var t,e;return(t=this.layer)==null||(e=t.exportImageServiceParameters)==null?void 0:e.version},()=>{this.updatingHandles.addPromise(this.refreshDebounced())}),this.updatingHandles.add(()=>this.timeExtent,()=>this.updatingHandles.addPromise(this.refreshDebounced()))}_initializeMaximumDataResolution(){const t=this.view.basemapTerrain.spatialReference,e=this.layer.fullExtent;!e||t.equals(e.spatialReference),this.maximumDataResolution={x:this.layer.pixelSizeX,y:this.layer.pixelSizeY}}getFetchOptions(){return{timeExtent:this.timeExtent}}async processResult(t,e,a){e.imageElement?t.image=e.imageElement:(t.image=document.createElement("canvas"),t.pixelData=e.pixelData,await this._redrawImage(t,a))}async _redrawImage(t,e){if(!(t.image instanceof HTMLCanvasElement)||m(t.pixelData))throw new Error;const a=t.image,r=a.getContext("2d"),n=await this.layer.applyRenderer(t.pixelData,{signal:e}),i=this.layer.applyFilter(n).pixelBlock;if(m(i))throw new Error;a.width=i.width,a.height=i.height;const s=r.createImageData(i.width,i.height);s.data.set(i.getAsRGBA()),r.putImageData(s,0,0)}};h=o([w("esri.views.3d.layers.ImageryLayerView3D")],h);const V=h;export{V as default};
