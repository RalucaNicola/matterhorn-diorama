import{a as p,e,d as s,n as i,y as a,b as c,r as h,o as n}from"./index.165b2b59.js";import{_ as l}from"./GraphicsProcessor.640f0077.js";import"./Graphics3DScaleVisibility.465b9149.js";import"./optimizedFeatureQueryEngineAdapter.3ac15e2d.js";import"./centroid.0d5a1327.js";import"./PooledRBush.4a1f7573.js";import"./quickselect.03306040.js";import"./Graphics3DObjectStates.572dc844.js";const d=r=>{let t=class extends p(r){constructor(){super(...arguments),this.graphics=null,this.renderer=null}};return e([s()],t.prototype,"graphics",void 0),e([s()],t.prototype,"renderer",void 0),e([s()],t.prototype,"updating",void 0),e([s()],t.prototype,"view",void 0),t=e([i("esri.views.layers.GraphicsView")],t),t};let o=class extends d(a){constructor(r){super(r),this.processor=null,this.slicePlaneEnabled=!1,this.layer=new u}initialize(){this._set("processor",new l({owner:this})),this.processor.setup()}destroy(){this._set("processor",c(this.processor))}get graphics(){return this.view.graphics}get loadedGraphics(){return this.graphics}get updating(){var r;return!((r=this.processor)==null||!r.updating)}get symbolUpdateType(){return this.processor.graphicsCore.symbolUpdateType}getGraphicFromGraphicUid(r){return this.processor.getGraphicFromGraphicUid(r)}whenGraphicBounds(r,t){return this.processor.whenGraphicBounds(r,t)}graphicChanged(r){this.processor.graphicsCore.graphicUpdateHandler(r)}get updatePolicy(){return this.processor.graphicsCore.effectiveUpdatePolicy}async queryGraphics(){return this.loadedGraphics}async fetchPopupFeatures(r,t){return h(t)?t.clientGraphics:null}highlight(r){return this.processor.highlight(r)}maskOccludee(r){return this.processor.maskOccludee(r)}};e([s({readOnly:!0})],o.prototype,"graphics",null),e([s()],o.prototype,"loadedGraphics",null),e([s({readOnly:!0})],o.prototype,"updating",null),e([s({constructOnly:!0})],o.prototype,"view",void 0),e([s()],o.prototype,"processor",void 0),e([s({type:Boolean})],o.prototype,"slicePlaneEnabled",void 0),e([s()],o.prototype,"layer",void 0),o=e([i("esri.views.3d.layers.GraphicsView3D")],o);class u extends n{constructor(){super(),this.type="graphics-view-3d-dummy",this.id=this.uid}}const b=o;export{b as default};
