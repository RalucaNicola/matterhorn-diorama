import{a8 as u,dB as f,dC as m,dD as c,k4 as p,r as a,E as g,aK as y,t as I,e as n,d as o,n as v}from"./index.165b2b59.js";import{i as x}from"./RefreshableLayerView.a8d4f681.js";const d=u.getLogger("esri.views.3d.layers.WMTSLayerView3d");let r=class extends x(f(m(c))){constructor(){super(...arguments),this.type="wmts-3d"}get hasMixedImageFormats(){return!0}_getCompatibleTileInfoMatrixSet(t,e=!1){const i=p(this.layer);if(a(i)){if(g.isCollection(i))return i.find(h=>{const s=t(h);return a(s)&&(e?d.error("The selected tile matrix set is not compatible with the view",s):this.addResolvingPromise(Promise.reject(s))),s==null});const l=t(i);return a(l)&&(e?d.error("The selected tile matrix set is not compatible with the view",l):this.addResolvingPromise(Promise.reject(l))),i}return null}initialize(){this._getCompatibleTileInfoMatrixSet(e=>this._getTileInfoSupportError(e.tileInfo,e.fullExtent));const t=y(()=>{var e,i;return(e=this.view)==null||(i=e.basemapTerrain)==null?void 0:i.tilingSchemeLocked}).then(()=>{const e=this._getCompatibleTileInfoMatrixSet(i=>this._getTileInfoSupportError(i.tileInfo,i.fullExtent)||this._getTileInfoCompatibilityError(i.tileInfo,this.view.basemapTerrain.tilingScheme));I(e)||(this.layer.activeLayer.tileMatrixSetId!==e.id&&(this.layer.activeLayer.tileMatrixSetId=e.id),this.tileInfo=e.tileInfo,this.layer.fullExtent=e.fullExtent)});this.addResolvingPromise(t),this.when(()=>this._initialized())}refresh(){this.emit("data-changed")}canResume(){if(!super.canResume())return!1;const t=this.layer.activeLayer.tileMatrixSet;return t&&!this._getTileInfoError(t.tileInfo,t.fullExtent)}async doRefresh(){this.suspended||this.emit("data-changed")}_initialized(){this.updatingHandles.add(()=>{var t,e;return(t=this.layer)==null||(e=t.activeLayer)==null?void 0:e.styleId},()=>this.refresh()),this.updatingHandles.add(()=>{var t;return(t=this.layer)==null?void 0:t.activeLayer},t=>{const e=this._getCompatibleTileInfoMatrixSet(i=>this._getTileInfoSupportError(i.tileInfo,i.fullExtent)||this._getTileInfoCompatibilityError(i.tileInfo,this.view.basemapTerrain.tilingScheme),!0);a(e)&&t.tileMatrixSetId!==e.id&&(this.layer.activeLayer.tileMatrixSetId=e.id),this.notifyChange("suspended"),this.canResume()&&this.refresh()})}_getTileInfoError(t,e){return this._getTileInfoSupportError(t,e)||this._getTileInfoCompatibilityError(t,this.view.basemapTerrain.tilingScheme)}};n([o({readOnly:!0})],r.prototype,"hasMixedImageFormats",null),n([o()],r.prototype,"layer",void 0),n([o()],r.prototype,"suspended",void 0),r=n([v("esri.views.3d.layers.WMTSLayerView3D")],r);const _=r;export{_ as default};
