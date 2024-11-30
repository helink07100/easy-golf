const canvas = document.getElementById("canvas"); // 获取 HTML 中的 canvas 元素
const engine = new BABYLON.Engine(canvas, true);
const scene = new BABYLON.Scene(engine);

BABYLON.SceneLoader.Append(
  "assets/media/babylon/",
  "scene.babylon",
  scene,
  () => {
    // 强制导出时使用更简单的标准材质
    scene.materials.forEach((material) => {
      if (material instanceof BABYLON.PBRMaterial) {
        material = new BABYLON.StandardMaterial(material.name, scene); // 用标准材质替换 PBR 材质
      }
    });

    BABYLON.GLTF2Export.GLTFAsync(scene, "scene.gltf", {
      exportAnimations: true, // 确保导出动画
      exportOnlySelected: true, // 导出整个场景
      embedTextures: true, // 嵌入纹理
      embedImages: true, // 嵌入图片
      exportCamera: true,
      exportMeshes: true,
      exportMaterials: true,
      exportMultisampling: true,
      exportTransform: true,
      keepHierarchy: true,
      useRightHandedSystem: true,
      includeAnimations: true,
      exportMaterialProperties: true,
      exportVertexColors: true,
      exportSkeletons: true,
      optimizeForGlTF: true,
      exportBoundingBoxes: true,
    }).then((gltf) => {
      gltf.downloadFiles(); // 下载转换后的文件
    });
  }
);
