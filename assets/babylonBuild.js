// 引擎和加载器
export { Engine } from "@babylonjs/core/Engines/engine";
export { SceneLoader } from "@babylonjs/core/Loading/sceneLoader";

// 数学库
export { Vector3, Matrix, Quaternion } from "@babylonjs/core/Maths/math.vector";
export { Color4, Color3 } from "@babylonjs/core/Maths/math.color";
export { Constants } from "@babylonjs/core/Engines/constants";

// 光源
export { HemisphericLight } from "@babylonjs/core/Lights/hemisphericLight";

// 材质和纹理
export { Texture } from "@babylonjs/core/Materials/Textures/texture";
export { CubeTexture } from "@babylonjs/core/Materials/Textures/cubeTexture";
export { StandardMaterial } from "@babylonjs/core/Materials/standardMaterial";

// 粒子系统
export { ParticleSystem } from "@babylonjs/core/Particles/particleSystem";

// 物理系统（Physics v2）
export { PhysicsImpostor } from "@babylonjs/core/Physics/v2/physicsImpostor"; // v2 PhysicsImpostor
export { PhysicsBody } from "@babylonjs/core/Physics/v2/physicsBody"; // v2 PhysicsBody
export { PhysicsShape } from "@babylonjs/core/Physics/v2/physicsShape"; // v2 PhysicsShape
export { HavokPlugin } from "@babylonjs/core/Physics/v2/Plugins/havokPlugin"; // v2 HavokPlugin

// 相机
export { FollowCamera } from "@babylonjs/core/Cameras/followCamera";

// 网格和几何体
export { MeshBuilder } from "@babylonjs/core/Meshes/meshBuilder";
export { Mesh } from "@babylonjs/core/Meshes/mesh";
export { TransformNode } from "@babylonjs/core/Meshes/transformNode";
export { TrailMesh } from "@babylonjs/core/Meshes/trailMesh";
