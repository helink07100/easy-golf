import { ParticleSystem } from "@babylonjs/core/Particles/particleSystem";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { Texture } from "@babylonjs/core/Materials/Textures/texture";
import { Color4, Color3 } from "@babylonjs/core/Maths/math.color";
import { Constants } from "@babylonjs/core/Engines/constants";
import { PhysicsAggregate, PhysicsShapeType } from "@babylonjs/core/Physics";
import { Axis, Space } from "@babylonjs/core/Maths/math.axis";
import { Engine } from "@babylonjs/core/Engines/engine";
import { Scene } from "@babylonjs/core/scene";
import { SceneLoader } from "@babylonjs/core/Loading/sceneLoader";
import { HemisphericLight } from "@babylonjs/core/Lights/hemisphericLight";
import { HavokPlugin } from "@babylonjs/core/Physics/v2/Plugins/havokPlugin";
import { MeshBuilder } from "@babylonjs/core/Meshes/meshBuilder";
import { StandardMaterial } from "@babylonjs/core/Materials/standardMaterial";
import { CubeTexture } from "@babylonjs/core/Materials/Textures/cubeTexture";
import { Mesh } from "@babylonjs/core/Meshes/mesh";
import { TransformNode } from "@babylonjs/core/Meshes/transformNode";
import { TrailMesh } from "@babylonjs/core/Meshes/trailMesh";
import { FollowCamera } from "@babylonjs/core/Cameras/followCamera";
import { Matrix, Quaternion } from "@babylonjs/core/Maths/math.vector";
import "@babylonjs/loaders"; // 加载器插件会自动注册到 SceneLoader
import { BabylonFileLoader } from "@babylonjs/loaders/babylonFileLoader";

// 手动注册 .babylon 文件加载器
SceneLoader.RegisterPlugin(new BabylonFileLoader());

// 将模块挂载到 window.BABYLON
export {
  ParticleSystem,
  Vector3,
  Texture,
  Color4,
  Color3,
  Constants,
  PhysicsAggregate,
  PhysicsShapeType,
  Axis,
  Space,
  Engine,
  Scene,
  SceneLoader,
  HemisphericLight,
  HavokPlugin,
  MeshBuilder,
  StandardMaterial,
  CubeTexture,
  Mesh,
  TransformNode,
  TrailMesh,
  FollowCamera,
  Matrix,
  Quaternion,
};
// window.BABYLON = BABYLON;
