import{e8 as C,e9 as P,ea as T,dL as h,eb as x,ec as d,r as v,ed as S,ee as l,ef as O,eg as _,eh as F,ei as m,dR as p,ej as g,ek as b,el as c,em as N,en as y,e as o,eo as r,dW as f,ep as A,eq as D,er as M,es as E,et as w,eu as z,ev as U,ew as W,ex as j,ey as B,ez as I,eA as R,eB as G,eC as L,eD as k,eE as q}from"./index.165b2b59.js";function H(s){const e=new C;P(e,s),e.include(T),e.attributes.add(h.POSITION,"vec3"),e.attributes.add(h.UV0,"vec2"),e.varyings.add("vpos","vec3"),s.hasMultipassTerrain&&e.varyings.add("depth","float");const{vertex:n,fragment:t}=e;return n.uniforms.add(new x("textureCoordinateScaleFactor",d.Pass,a=>v(a.texture)&&v(a.texture.descriptor.textureCoordinateScaleFactor)?a.texture.descriptor.textureCoordinateScaleFactor:S)),n.code.add(l`
    void main(void) {
      vpos = position;
      ${s.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
      vTexCoord = uv0 * textureCoordinateScaleFactor;
      gl_Position = transformPosition(proj, view, vpos);
    }
  `),e.include(O,s),e.include(_,s),t.uniforms.add([new F("tex",d.Pass,a=>a.texture),new m("opacity",d.Pass,a=>a.opacity)]),e.varyings.add("vTexCoord","vec2"),s.output===p.Alpha?t.code.add(l`
    void main() {
      discardBySlice(vpos);
      ${s.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}

      float alpha = texture2D(tex, vTexCoord).a * opacity;
      if (alpha  < ${l.float(g)}) {
        discard;
      }

      gl_FragColor = vec4(alpha);
    }
    `):(t.include(b),t.code.add(l`
    void main() {
      discardBySlice(vpos);
      ${s.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
      gl_FragColor = texture2D(tex, vTexCoord) * opacity;

      if (gl_FragColor.a < ${l.float(g)}) {
        discard;
      }

      gl_FragColor = highlightSlice(gl_FragColor, vpos);
      ${s.transparencyPassType===c.Color?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
    }
    `)),e}const V=Object.freeze(Object.defineProperty({__proto__:null,build:H},Symbol.toStringTag,{value:"Module"}));class u extends M{initializeProgram(e){const n=u.shader.get().build(this.configuration);return new E(e.rctx,n,w)}_setPipelineState(e,n){const t=this.configuration,a=e===c.NONE,$=e===c.FrontFace;return z({blending:t.output!==p.Color&&t.output!==p.Alpha||!t.transparent?null:a?J:U(e),culling:W(t.cullFace),depthTest:{func:j(e)},depthWrite:a?t.writeDepth&&B:I(e),colorWrite:R,stencilWrite:t.hasOccludees?G:null,stencilTest:t.hasOccludees?n?L:k:null,polygonOffset:a||$?null:q(t.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipelineState(this.configuration.transparencyPassType,!0),this._setPipelineState(this.configuration.transparencyPassType,!1)}getPipelineState(e,n){return n?this._occludeePipelineState:super.getPipelineState(e,n)}}u.shader=new D(V,()=>import("./ImageMaterial.glsl.ee4ce920.js"));const J=N(y.ONE,y.ONE_MINUS_SRC_ALPHA);class i extends A{constructor(){super(...arguments),this.output=p.Color,this.cullFace=f.None,this.hasSlicePlane=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.transparencyPassType=c.NONE,this.hasMultipassTerrain=!1,this.cullAboveGround=!1}}o([r({count:p.COUNT})],i.prototype,"output",void 0),o([r({count:f.COUNT})],i.prototype,"cullFace",void 0),o([r()],i.prototype,"hasSlicePlane",void 0),o([r()],i.prototype,"transparent",void 0),o([r()],i.prototype,"enableOffset",void 0),o([r()],i.prototype,"writeDepth",void 0),o([r()],i.prototype,"hasOccludees",void 0),o([r({count:c.COUNT})],i.prototype,"transparencyPassType",void 0),o([r()],i.prototype,"hasMultipassTerrain",void 0),o([r()],i.prototype,"cullAboveGround",void 0);export{u as _,H as a,i as w};
