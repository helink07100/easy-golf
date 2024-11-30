const path = require("path");

module.exports = {
  entry: "./babylonBuild.js", // 自己创建的入口文件
  output: {
    filename: "babylon.js", // 输出的文件名
    path: path.resolve(__dirname + "/assets/", "babylon"), // 输出的文件路径
    library: "BABYLON", // 导出到 window.BABYLON
    libraryTarget: "umd", // 兼容 UMD 格式
  },
  mode: "production", // 或 "development" 根据需要选择
  optimization: {
    usedExports: true, // 启用 Tree-Shaking
    sideEffects: true, // 保留 @babylonjs/loaders 的副作用注册行为
  },
  resolve: {
    extensions: [".js", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.js$/, // 针对 .js 文件
        exclude: /node_modules/, // 排除 node_modules 目录
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"], // 使用 Babel 预设来转换 ES6 代码
          },
        },
      },
      {
        test: /\.(babylon|gltf|glb)$/,
        type: "asset/resource", // 使用 Webpack 内置资源模块
        generator: {
          filename: "assets/[hash][ext][query]", // 输出路径
        },
      },
    ],
  },
};
