import{e as r,d as i,n as o,I as s}from"./index.25dca4c3.js";import{w as l}from"./FeatureLayerViewBase3D.01424a5b.js";import"./FeatureLikeLayerView3D.354fcf9d.js";import"./Graphics3DFeatureProcessor.a874bce4.js";import"./Graphics3DScaleVisibility.524687fd.js";import"./optimizedFeatureQueryEngineAdapter.163a3827.js";import"./centroid.50387db0.js";import"./PooledRBush.97be3399.js";import"./quickselect.03306040.js";import"./Graphics3DObjectStates.43198164.js";import"./floorFilterUtils.23f5aee3.js";import"./QueryEngine.bb4ddfcc.js";import"./WhereClause.d7766590.js";import"./json.d1a0fa35.js";import"./QueryEngineCapabilities.c2e9875c.js";import"./utils.260312b7.js";import"./ClassBreaksDefinition.9835d418.js";import"./attributeUtils.99d8ee08.js";import"./FeatureStore.cd603f50.js";import"./heatmapUtils.870250d0.js";import"./projectExtentUtils.a4abbe1e.js";import"./EventedSet.d2302455.js";import"./popupUtils.3f7dd2fa.js";import"./RefreshableLayerView.4027030d.js";const m=p=>{let e=class extends p{get availableFields(){return this.layer.fieldsIndex.fields.map(a=>a.name)}};return r([i()],e.prototype,"layer",void 0),r([i({readOnly:!0})],e.prototype,"availableFields",null),e=r([o("esri.views.layers.OGCFeatureLayerView")],e),e};let t=class extends m(l){constructor(){super(...arguments),this.type="ogc-feature-3d"}initialize(){this.layer.serviceSupportsSpatialReference(this.view.spatialReference)||this.addResolvingPromise(Promise.reject(new s("layerview:spatial-reference-incompatible","The spatial references supported by this OGC layer are incompatible with the spatial reference of the view",{layer:this.layer})))}};r([i()],t.prototype,"layer",void 0),t=r([o("esri.views.3d.layers.OGCFeatureLayerView3D")],t);const D=t;export{D as default};