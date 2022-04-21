import{e as t,d as a,n as p,iA as s,I as o,aX as l}from"./index.165b2b59.js";import{w as m}from"./FeatureLayerViewBase3D.690b7b4c.js";import"./FeatureLikeLayerView3D.59b7c6d0.js";import"./Graphics3DFeatureProcessor.e7510fc8.js";import"./Graphics3DScaleVisibility.465b9149.js";import"./optimizedFeatureQueryEngineAdapter.3ac15e2d.js";import"./centroid.0d5a1327.js";import"./PooledRBush.4a1f7573.js";import"./quickselect.03306040.js";import"./Graphics3DObjectStates.572dc844.js";import"./floorFilterUtils.23f5aee3.js";import"./QueryEngine.7ba4cf96.js";import"./WhereClause.d10f799a.js";import"./json.d1a0fa35.js";import"./QueryEngineCapabilities.c2e9875c.js";import"./utils.d0f28677.js";import"./ClassBreaksDefinition.59347cc4.js";import"./attributeUtils.99d8ee08.js";import"./FeatureStore.7927acb0.js";import"./heatmapUtils.9e62099b.js";import"./projectExtentUtils.a18e6a6b.js";import"./EventedSet.0ea185ba.js";import"./popupUtils.3f1e4abd.js";import"./RefreshableLayerView.a8d4f681.js";let e=class extends m{constructor(){super(...arguments),this.type="feature-3d",this.direct3DObjectFeatureLayerDisplayEnabled=s()}initialize(){this.layer.infoFor3D&&!this.direct3DObjectFeatureLayerDisplayEnabled&&this.addResolvingPromise(Promise.reject(new o("featurelayerview3d:unsupported-geometry-type",`Unsupported geometry type ${this.layer.geometryType}`))),this.layer.geometryType!=="mesh"||l(this.layer.spatialReference,this.view.spatialReference)||this.addResolvingPromise(Promise.reject(new o("layerview:spatial-reference-incompatible","The spatial references of the feature layer layer is incompatible with the spatial reference of the view")))}get featureSpatialReference(){var r,i;return(r=this.view.featureTiles)==null||(i=r.tilingScheme)==null?void 0:i.spatialReference}};t([a({constructOnly:!0})],e.prototype,"direct3DObjectFeatureLayerDisplayEnabled",void 0),t([a()],e.prototype,"layer",void 0),e=t([p("esri.views.3d.layers.FeatureLayerView3D")],e);const I=e;export{I as default};
