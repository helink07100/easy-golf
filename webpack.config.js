const path = require("path");

module.exports = {
  mode: "production", // 选择生产模式
  entry: "./assets/babylonBuild.js", // 入口文件
  output: {
    filename: "babylon.js", // 输出文件名
    path: path.resolve(__dirname + "/assets", "script"), // 输出目录
    // library: "BABYLON", // 将输出文件暴露为全局变量
    libraryTarget: "umd", // 支持多种模块格式
  },
  module: {
    rules: [
      {
        test: /\.js$/, // 针对 JavaScript 文件
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // 可选：使用 Babel 转译
          options: {
            presets: ["@babel/preset-env"], // 选择预设
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js"], // 解析的文件扩展名
  },
};
