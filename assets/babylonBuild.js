import {
  ParticleSystem,
  Vector3,
  Texture,
  Color4,
  Color3,
  Constants,
  MeshBuilder,
  StandardMaterial,
  CubeTexture,
  Mesh,
  TransformNode,
  TrailMesh,
  FollowCamera,
  Matrix,
  Quaternion,
  PhysicsAggregate,
  HemisphericLight,
  PhysicsShapeType,
  HavokPlugin,
} from "babylonjs";
import { Engine, SceneLoader } from "@babylonjs/core";

// import HavokPlugin from "@babylonjs/havok";
// 物理引擎模块的正确导入路径
// import { PhysicsAggregate } from "@babylonjs/core/Physics/physicsAggregate";
// import { PhysicsShapeType } from "@babylonjs/core/Physics/physicsShapeType";
// 将导入的模块暴露给 window
window.BABYLON = {
  ParticleSystem,
  Vector3,
  Texture,
  SceneLoader,
  Engine,
  Color4,
  Color3,
  Constants,
  HavokPlugin,
  PhysicsAggregate,
  PhysicsShapeType,
  MeshBuilder,
  StandardMaterial,
  CubeTexture,
  Mesh,
  TransformNode,
  TrailMesh,
  FollowCamera,
  Matrix,
  HemisphericLight,
  Quaternion,
};
