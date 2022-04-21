import Accessor from "@arcgis/core/core/Accessor";
import { property, subclass } from "@arcgis/core/core/accessorSupport/decorators";
import { Extent, SpatialReference } from "@arcgis/core/geometry";
import { makeGradientSampler } from "./gradient";

@subclass("Configuration")
export class Configuration extends Accessor {
  @property()
  sourceArea = new Extent({
    xmin: 840103.5041,
    xmax: 874366.7884,
    ymin: 5763516.0728,
    ymax: 5793410.0282,
    spatialReference: SpatialReference.WebMercator
  });

  @property()
  displayArea = new Extent({
    xmin: 0,
    xmax: 100,
    ymin: 0,
    ymax: 100,
    zmin: 0,
    zmax: 20,
    spatialReference: SpatialReference.WebMercator
  });

  @property()
  samplingResolutionPixels = 1024;

  @property()
  elevationMeshResolutionPixels = 1024;

  @property()
  colorTextureResolution = 512;

  @property()
  terrainColorSaturation = 2;

  @property()
  surfacePaddingBottom = 0.01;

  @property()
  colorRamp = makeGradientSampler([
    { offset: 0, color: "#607d5f" },
    { offset: 0.4, color: "#786738" },
    { offset: 0.7, color: "#f0ead8" },
    { offset: 1, color: "#FFFFFF" }
  ]);
}
