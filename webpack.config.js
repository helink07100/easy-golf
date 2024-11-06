const path = require("path");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
  entry: {
    babylon: "./assets/script/babylon.max.js", // 替换为 `babylon.max.js` 的路径
  },
  output: {
    path: path.resolve(__dirname + "/assets/", "babylon"),
    filename: "[name].[contenthash].js", // 使用哈希确保唯一文件名
    chunkFilename: "[name].[contenthash].js", // 拆分的模块将有独立文件名
  },
  mode: "production", // 或 'development'，视情况而定
  performance: {
    hints: false, // 禁用性能警告（如果文件过大）
  },
  optimization: {
    minimize: false, // 禁用压缩
    splitChunks: {
      chunks: "all",
      minSize: 0, // 允许小文件拆分
      maxSize: 50000, // 可调整为更大的值，允许更大文件拆分
      cacheGroups: {
        // 引擎和场景管理
        Engine: {
          test: (module) => {
            console.log(module.context); // 输出模块的上下文路径
            return module.context && module.context.includes("src/Engines");
          },
          name: "Engine",
          chunks: "all",
        },
        ThinEngine: {
          test: (module) => {
            console.log(module.context); // 输出模块的上下文路径
            return module.context && module.context.includes("src/ThinEngine");
          },
          name: "ThinEngine",
          chunks: "all",
        },
        Scene: {
          test: (module) => {
            console.log(module.context); // 输出模块的上下文路径
            return module.context && module.context.includes("src/Scene");
          },
          name: "Scene",
          chunks: "all",
        },
        AbstractScene: {
          test: (module) => {
            console.log(module.context); // 输出模块的上下文路径
            return (
              module.context && module.context.includes("src/AbstractScene")
            );
          },
          name: "AbstractScene",
          chunks: "all",
        },
        TransformNode: {
          test: (module) => {
            console.log(module.context); // 输出模块的上下文路径
            return (
              module.context && module.context.includes("src/TransformNode")
            );
          },
          name: "TransformNode",
          chunks: "all",
        },
        Node: {
          test: (module) => {
            console.log(module.context); // 输出模块的上下文路径
            return module.context && module.context.includes("src/Node");
          },
          name: "Node",
          chunks: "all",
        },
        AbstractMesh: {
          test: (module) => {
            console.log(module.context); // 输出模块的上下文路径
            return (
              module.context && module.context.includes("src/AbstractMesh")
            );
          },
          name: "AbstractMesh",
          chunks: "all",
        },
        InstancedMesh: {
          test: (module) => {
            console.log(module.context); // 输出模块的上下文路径
            return (
              module.context && module.context.includes("src/InstancedMesh")
            );
          },
          name: "InstancedMesh",
          chunks: "all",
        },

        // 数学模块
        Vector2: {
          test: (module) => {
            console.log(module.context); // 输出模块的上下文路径
            return module.context && module.context.includes("src/Vector2");
          },
          name: "Vector2",
          chunks: "all",
        },
        Vector3: {
          test: (module) => {
            console.log(module.context); // 输出模块的上下文路径
            return module.context && module.context.includes("src/Vector3");
          },
          name: "Vector3",
          chunks: "all",
        },
        Vector4: {
          test: (module) => {
            console.log(module.context); // 输出模块的上下文路径
            return module.context && module.context.includes("src/Vector4");
          },
          name: "Vector4",
          chunks: "all",
        },
        Matrix: {
          test: (module) => {
            console.log(module.context); // 输出模块的上下文路径
            return module.context && module.context.includes("src/Matrix");
          },
          name: "Matrix",
          chunks: "all",
        },
        Quaternion: {
          test: (module) => {
            console.log(module.context); // 输出模块的上下文路径
            return module.context && module.context.includes("src/Quaternion");
          },
          name: "Quaternion",
          chunks: "all",
        },
        Color3: {
          test: (module) => {
            console.log(module.context); // 输出模块的上下文路径
            return module.context && module.context.includes("src/Color3");
          },
          name: "Color3",
          chunks: "all",
        },
        Color4: {
          test: (module) => {
            console.log(module.context); // 输出模块的上下文路径
            return module.context && module.context.includes("src/Color4");
          },
          name: "Color4",
          chunks: "all",
        },
        Axis: {
          test: (module) => {
            console.log(module.context); // 输出模块的上下文路径
            return module.context && module.context.includes("src/Axis");
          },
          name: "Axis",
          chunks: "all",
        },
        Space: {
          test: (module) => {
            console.log(module.context); // 输出模块的上下文路径
            return module.context && module.context.includes("src/Space");
          },
          name: "Space",
          chunks: "all",
        },

        // 物理模块
        PhysicsEngine: {
          test: (module) => {
            console.log(module.context); // 输出模块的上下文路径
            return (
              module.context && module.context.includes("src/PhysicsEngine")
            );
          },
          name: "PhysicsEngine",
          chunks: "all",
        },
        PhysicsEngineSceneComponent: {
          test: (module) => {
            console.log(module.context); // 输出模块的上下文路径
            return (
              module.context &&
              module.context.includes("src/PhysicsEngineSceneComponent")
            );
          },
          name: "PhysicsEngineSceneComponent",
          chunks: "all",
        },
        PhysicsImpostor: {
          test: (module) => {
            console.log(module.context); // 输出模块的上下文路径
            return (
              module.context && module.context.includes("src/PhysicsImpostor")
            );
          },
          name: "PhysicsImpostor",
          chunks: "all",
        },
        PhysicsHelper: {
          test: (module) => {
            console.log(module.context); // 输出模块的上下文路径
            return (
              module.context && module.context.includes("src/PhysicsHelper")
            );
          },
          name: "PhysicsHelper",
          chunks: "all",
        },
        CannonJSPlugin: {
          test: (module) => {
            console.log(module.context); // 输出模块的上下文路径
            return (
              module.context && module.context.includes("src/CannonJSPlugin")
            );
          },
          name: "CannonJSPlugin",
          chunks: "all",
        },
        OimoJSPlugin: {
          test: (module) => {
            console.log(module.context); // 输出模块的上下文路径
            return (
              module.context && module.context.includes("src/OimoJSPlugin")
            );
          },
          name: "OimoJSPlugin",
          chunks: "all",
        },
        AmmoJSPlugin: {
          test: (module) => {
            console.log(module.context); // 输出模块的上下文路径
            return (
              module.context && module.context.includes("src/AmmoJSPlugin")
            );
          },
          name: "AmmoJSPlugin",
          chunks: "all",
        },

        // 材质
        StandardMaterial: {
          test: (module) => {
            console.log(module.context); // 输出模块的上下文路径
            return (
              module.context && module.context.includes("src/StandardMaterial")
            );
          },
          name: "StandardMaterial",
          chunks: "all",
        },
        PBRMaterial: {
          test: (module) => {
            console.log(module.context); // 输出模块的上下文路径
            return module.context && module.context.includes("src/PBRMaterial");
          },
          name: "PBRMaterial",
          chunks: "all",
        },
        MultiMaterial: {
          test: (module) => {
            console.log(module.context); // 输出模块的上下文路径
            return (
              module.context && module.context.includes("src/MultiMaterial")
            );
          },
          name: "MultiMaterial",
          chunks: "all",
        },

        // 纹理
        Texture: {
          test: (module) => {
            console.log(module.context); // 输出模块的上下文路径
            return module.context && module.context.includes("src/Texture");
          },
          name: "Texture",
          chunks: "all",
        },
        CubeTexture: {
          test: (module) => {
            console.log(module.context); // 输出模块的上下文路径
            return module.context && module.context.includes("src/CubeTexture");
          },
          name: "CubeTexture",
          chunks: "all",
        },
        DynamicTexture: {
          test: (module) => {
            console.log(module.context); // 输出模块的上下文路径
            return (
              module.context && module.context.includes("src/DynamicTexture")
            );
          },
          name: "DynamicTexture",
          chunks: "all",
        },

        // 灯光
        HemisphericLight: {
          test: (module) => {
            console.log(module.context); // 输出模块的上下文路径
            return (
              module.context && module.context.includes("src/HemisphericLight")
            );
          },
          name: "HemisphericLight",
          chunks: "all",
        },
        PointLight: {
          test: (module) => {
            console.log(module.context); // 输出模块的上下文路径
            return module.context && module.context.includes("src/PointLight");
          },
          name: "PointLight",
          chunks: "all",
        },
        DirectionalLight: {
          test: (module) => {
            console.log(module.context); // 输出模块的上下文路径
            return (
              module.context && module.context.includes("src/DirectionalLight")
            );
          },
          name: "DirectionalLight",
          chunks: "all",
        },
        SpotLight: {
          test: (module) => {
            console.log(module.context); // 输出模块的上下文路径
            return module.context && module.context.includes("src/SpotLight");
          },
          name: "SpotLight",
          chunks: "all",
        },
        ShadowGenerator: {
          test: (module) => {
            console.log(module.context); // 输出模块的上下文路径
            return (
              module.context && module.context.includes("src/ShadowGenerator")
            );
          },
          name: "ShadowGenerator",
          chunks: "all",
        },

        // 其他模块（例如粒子、动画等）也可以用类似方法细分
        ParticleSystem: {
          test: (module) => {
            console.log(module.context); // 输出模块的上下文路径
            return (
              module.context && module.context.includes("src/ParticleSystem")
            );
          },
          name: "ParticleSystem",
          chunks: "all",
        },
        Animation: {
          test: (module) => {
            console.log(module.context); // 输出模块的上下文路径
            return module.context && module.context.includes("src/Animation");
          },
          name: "Animation",
          chunks: "all",
        },
        ArcRotateCamera: {
          test: (module) => {
            console.log(module.context); // 输出模块的上下文路径
            return (
              module.context && module.context.includes("src/ArcRotateCamera")
            );
          },
          name: "ArcRotateCamera",
          chunks: "all",
        },
        FreeCamera: {
          test: (module) => {
            console.log(module.context); // 输出模块的上下文路径
            return module.context && module.context.includes("src/FreeCamera");
          },
          name: "FreeCamera",
          chunks: "all",
        },
      },
    },
  },
  plugins: [new BundleAnalyzerPlugin()],
};
