import Camera from "@arcgis/core/Camera";
import { property, subclass } from "@arcgis/core/core/accessorSupport/decorators";
import SceneView from "@arcgis/core/views/SceneView";
import Map from "@arcgis/core/Map";
import Widget from "@arcgis/core/widgets/Widget";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import { Configuration } from "./Configuration";
import { SpatialReference } from "@arcgis/core/geometry";
import Mesh from "@arcgis/core/geometry/Mesh";
import { tsx } from "@arcgis/core/widgets/support/widget";
import { ExaggeratedElevationSampler } from "./ExaggeratedElevationSampler";
import ElevationLayer from "@arcgis/core/layers/ElevationLayer";
import MeshMaterialMetallicRoughness from "@arcgis/core/geometry/support/MeshMaterialMetallicRoughness";
import Graphic from "@arcgis/core/Graphic";
import { FillSymbol3DLayer, IconSymbol3DLayer, LabelSymbol3D, LineSymbol3D, LineSymbol3DLayer, MeshSymbol3D, ObjectSymbol3DLayer, PointSymbol3D, TextSymbol3DLayer } from "@arcgis/core/symbols";
import { createFromElevation } from "@arcgis/core/geometry/support/meshUtils";
import MeshTexture from "@arcgis/core/geometry/support/MeshTexture";
import MeshComponent from "@arcgis/core/geometry/support/MeshComponent";
import SolidEdges3D from "@arcgis/core/symbols/edges/SolidEdges3D";
import { createExtrudedBox } from "./meshUtils";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import LabelClass from "@arcgis/core/layers/support/LabelClass";
import { SimpleRenderer, UniqueValueRenderer } from "@arcgis/core/renderers";
import esriRequest from "@arcgis/core/request";
import LineStylePattern3D from "@arcgis/core/symbols/patterns/LineStylePattern3D";

@subclass("App")
export class App extends Widget {

  private config = new Configuration();

  private poisLayer = new FeatureLayer({ url: "https://services9.arcgis.com/FF3qnCUixr5w9JQi/arcgis/rest/services/POIZermatt/FeatureServer" });

  @property()
  private lineLayer = new FeatureLayer({ url: "https://services9.arcgis.com/FF3qnCUixr5w9JQi/arcgis/rest/services/Border/FeatureServer" });

  private readonly initialCamera = new Camera({
    position: {
      x: -0.00031596,
      y: -0.00095650,
      z: 181.93342
    },
    heading: 28,
    tilt: 45
  });

  private view = new SceneView({
    map: new Map({
      ground: {
        opacity: 0,
        surfaceColor: [255, 255, 255]
      },
      layers: [this.poisLayer, this.lineLayer]
    }),

    camera: this.initialCamera,
    alphaCompositingEnabled: true,

    environment: {
      atmosphereEnabled: false,
      starsEnabled: false,
      background: { type: "color", color: [255, 255, 255, 0] },
      lighting: {
        date: "Tue Mar 15 2022 08:05:00 GMT-0700 (Pacific Daylight Time)",
        directShadowsEnabled: true
      }
    },

    spatialReference: SpatialReference.WebMercator,
    qualityProfile: "high",
    viewingMode: "local"
  });

  private loader = null! as HTMLDivElement;

  @property()
  private sampler: ExaggeratedElevationSampler | null = null;

  @property()
  zmin: number = Number.POSITIVE_INFINITY;

  @property()
  zmax: number = Number.POSITIVE_INFINITY;

  @property()
  private layer = new GraphicsLayer({
    elevationInfo: {
      mode: 'absolute-height'
    }
  });

  @property()
  private surfaceBoxGraphic: Graphic | null = null;

  @property()
  get terrainSurfaceVertexResolution(): TerrainSurfaceVertexResolution {
    const { sourceArea, elevationMeshResolutionPixels } = this.config;
    const demResolution = Math.max(sourceArea.width, sourceArea.height) / elevationMeshResolutionPixels;
    const width = Math.ceil(sourceArea.width / demResolution);
    const height = Math.ceil(sourceArea.height / demResolution);

    return { width, height, demResolution };
  }

  private async createSampler({ sourceArea: area, samplingResolutionPixels }: RecreateSamplerParams) {

    const demResolution = Math.max(area.width, area.height) / samplingResolutionPixels;

    const layer = new ElevationLayer({
      url: "https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/TopoBathy3D/ImageServer"
    });

    this.sampler = new ExaggeratedElevationSampler({
      sampler: await layer.createElevationSampler(area, { demResolution, noDataValue: 1e-30 }),
      config: this.config
    });
  }

  private renormalizeTerrainSurface(mesh: Mesh) {

    const displayArea = this.config.displayArea;
    const sourceArea = this.config.sourceArea;
    const position = mesh.vertexAttributes.position;
    const tangent = new Float32Array((position.length / 3) * 4);
    mesh.vertexAttributes.tangent = tangent;

    let tangentPtr = 0;
    let zmin = Number.POSITIVE_INFINITY;
    let zmax = Number.NEGATIVE_INFINITY;

    const areaScaleX = displayArea.width / sourceArea.width;
    const areaScaleY = displayArea.height / sourceArea.height;

    for (let i = 0; i < position.length; i += 3) {
      const x = position[i];
      const y = position[i + 1];

      position[i] = (x - sourceArea.xmin) * areaScaleX + displayArea.xmin;
      position[i + 1] = (y - sourceArea.ymin) * areaScaleY + displayArea.ymin;

      tangent[tangentPtr++] = 1;
      tangent[tangentPtr++] = 0;
      tangent[tangentPtr++] = 0;
      tangent[tangentPtr++] = 1;

      const z = position[i + 2];

      zmin = Math.min(zmin, z);
      zmax = Math.max(zmax, z);
    }

    this.zmin = zmin;
    this.zmax = zmax;

    mesh.vertexAttributesChanged();
  }

  private async createMesh() {

    if (!this.sampler) {
      return;
    }

    const mesh = await createFromElevation(this.sampler, this.config.sourceArea, { demResolution: this.terrainSurfaceVertexResolution.demResolution });

    this.renormalizeTerrainSurface(mesh);

    const satelliteTexture = await this.getTerrainSatelliteTexture();

    mesh.components[0].material = new MeshMaterialMetallicRoughness({
      metallic: 0,
      roughness: 1,
      colorTexture: satelliteTexture
    });

    console.log(mesh.components, mesh.components[0].faces.length);

    const elevationSurfaceGraphic = new Graphic({
      geometry: mesh,
      symbol: new MeshSymbol3D({
        symbolLayers: [
          new FillSymbol3DLayer({
            material: { color: "white" },
          })
        ]
      }),
      visible: true
    });

    this.layer.add(elevationSurfaceGraphic);
  };

  private async getTerrainSatelliteTexture(): Promise<MeshTexture> {
    const { colorTextureResolution: size, sourceArea, colorRamp, terrainColorSaturation } = this.config;
    const imageData = new ImageData(size, size);
    let ptr = 0;

    const { zmin, zmax } = this;

    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const px = sourceArea.xmin + (x / size) * sourceArea.width;
        const py = sourceArea.ymin + (y / size) * sourceArea.height;

        const z = this.sampler!.elevationAt(px, py);
        const f = (z - zmin) / (zmax - zmin);

        const color = colorRamp(f);

        imageData.data[ptr++] = color[0];
        imageData.data[ptr++] = color[1];
        imageData.data[ptr++] = color[2];
        imageData.data[ptr++] = 255;
      }
    }

    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;

    const ctx = canvas.getContext("2d")!;

    ctx.save();
    ctx.putImageData(imageData, 0, 0);
    ctx.filter = `saturate(${terrainColorSaturation})`;
    ctx.drawImage(canvas, 0, 0);
    ctx.restore();
    const exportUrl =
      `https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/export?bbox=${sourceArea.xmin},${sourceArea.ymin},${sourceArea.xmax},${sourceArea.ymax}` +
      `&bboxSR=102100&size=${size},${size}&format=png&rotation=180&transparent=false&f=image&dpi=800`;
    const response = await esriRequest(exportUrl, { responseType: "image" });

    ctx.scale(-1, 1);
    ctx.globalCompositeOperation = "soft-light";
    ctx.drawImage(response.data, 0, 0, -size, size);
    return new MeshTexture({
      data: ctx.getImageData(0, 0, size, size)
    })
  }

  private createSurfaceBoxMesh() {
    if (!this.sampler || !Number.isFinite(this.zmin)) {
      return;
    }

    const { sourceArea, displayArea, surfacePaddingBottom } = this.config;

    const { width, height } = this.terrainSurfaceVertexResolution;
    const { position, faces, uv } = createExtrudedBox(
      width,
      height,
      (out, x, y) => {
        const sx = sourceArea.xmin + (x / width) * sourceArea.width;
        const sy = sourceArea.ymin + (y / height) * sourceArea.height;

        out[0] = displayArea.xmin + (x / width) * displayArea.width;
        out[1] = displayArea.ymin + (y / height) * displayArea.height;
        out[2] = this.sampler!.elevationAt(sx, sy);
      },
      this.zmin - surfacePaddingBottom * (this.zmax - this.zmin)
    );

    const mesh = new Mesh({
      spatialReference: SpatialReference.WebMercator,
      vertexAttributes: { position, uv },
      components: [
        new MeshComponent({
          faces,
          material: new MeshMaterialMetallicRoughness({
            color: "#faf2dc",
            //color: "#fff",
            roughness: 0.25,
            metallic: 0
          })
        })
      ]
    });

    this.surfaceBoxGraphic = new Graphic({
      geometry: mesh,
      symbol: new MeshSymbol3D({
        symbolLayers: [
          new FillSymbol3DLayer({
            material: { color: "white" },
            edges: new SolidEdges3D({
              size: "7px",
              color: "#786738"
            })
          })
        ]
      })
    });

    this.layer.add(this.surfaceBoxGraphic);
  }

  private stylePoiFeatures() {
    this.poisLayer.labelingInfo = [
      new LabelClass({
        where: `category = 'village'`,
        labelExpressionInfo: { expression: "$feature.title" },
        symbol: new LabelSymbol3D({
          symbolLayers: [new TextSymbol3DLayer({
            material: {
              color: [255, 255, 255]
            },
            font: {
              size: 11,
              family: "sans-serif"
            }
          })]
        })
      }),
      new LabelClass({
        where: `category = 'peak'`,
        labelExpressionInfo: { expression: "$feature.title + TextFormatting.NewLine + Text($feature.height, '#,### m')" },
        symbol: new LabelSymbol3D({
          symbolLayers: [new TextSymbol3DLayer({
            material: {
              color: [255, 255, 255]
            },
            background: {
              color: [0, 0, 0]
            },
            font: {
              size: 11,
              family: "sans-serif"
            },
            horizontalAlignment: 'left',
            lineHeight: 1.1
          })],
          verticalOffset: {
            screenLength: 40,
            maxWorldLength: 500000,
            minWorldLength: 0
          },
          callout: {
            type: "line",
            size: 3,
            color: [0, 0, 0],
            border: {
              color: [0, 0, 0, 0]
            }
          }
        })
      })
    ];
    this.poisLayer.labelsVisible = true;

    this.poisLayer.renderer = new UniqueValueRenderer({
      field: "category",
      defaultSymbol: new PointSymbol3D({
        symbolLayers: [new IconSymbol3DLayer({
          resource: { primitive: "circle" },
          material: { color: [255, 255, 255, 0] },
          outline: {
            color: [255, 255, 255],
            size: 2
          },
          size: 0
        })]
      }),
      uniqueValueInfos: [{
        value: "village",
        symbol: new PointSymbol3D({
          symbolLayers: [new IconSymbol3DLayer({
            resource: { primitive: "circle" },
            material: { color: [255, 255, 255, 0] },
            outline: {
              color: [255, 255, 255],
              size: 2
            },
            size: 20
          }), new IconSymbol3DLayer({
            resource: { primitive: "circle" },
            material: { color: [255, 255, 255] },
            size: 7
          })]
        })
      }, {
        value: 'switzerland',
        symbol: new PointSymbol3D({
          symbolLayers: [new IconSymbol3DLayer({
            resource: { href: "./ch-flag.png" },
            material: { color: [255, 255, 255] },
            size: 30
          })]
        })
      }, {
        value: 'italy',
        symbol: new PointSymbol3D({
          symbolLayers: [new IconSymbol3DLayer({
            resource: { href: "./it-flag.png" },
            material: { color: [255, 255, 255] },
            size: 30
          })]
        })
      }]
    })
  }

  private styleLineFeatures() {
    this.lineLayer.renderer = new SimpleRenderer({
      symbol: new LineSymbol3D({
        symbolLayers: [new LineSymbol3DLayer({
          material: { color: [255, 0, 0, 0.8] },
          size: 2,
          pattern: new LineStylePattern3D({
            style: 'dash'
          })
        })]
      })
    })
  }

  protected async initialize() {
    this.view.map.add(this.layer);
    await this.createSampler(this.config);
    await this.createMesh();
    this.view.basemapTerrain.suspended = true;
    this.loader.classList.add('fade-out');
    this.createSurfaceBoxMesh();
    this.stylePoiFeatures();
    this.styleLineFeatures();
  }

  render() {
    return (
      <div>
        <div id="viewDiv" afterCreate={(node: HTMLDivElement) => this.onAfterCreate(node)}></div>
        <div class="loader" afterCreate={(node: HTMLDivElement) => this.loader = node}>Matterhorn area</div>
      </div>
    );
  }

  private onAfterCreate(element: HTMLDivElement): void {
    this.view.container = element;
    (window as any).view = this.view;
  }
}

type RecreateSamplerParams = Pick<Configuration, "sourceArea" | "samplingResolutionPixels">;

interface TerrainSurfaceVertexResolution {
  width: number;
  height: number;
  demResolution: number;
}