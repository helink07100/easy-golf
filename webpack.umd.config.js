// webpack.umd.config.js
const path = require("path");

module.exports = {
    entry: "./customBabylon.js", // 使用自定义入口
    mode: "development",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "babylon.umd.js",
        library: {
            name: "BABYLON",
            type: "umd",
        },
        globalObject: "this",
    },
    module: {
        rules: [
            {
                test: /\.ts$/, // 处理 TypeScript 文件
                exclude: /node_modules/,
                use: "ts-loader", // 使用 ts-loader 加载 TypeScript 文件
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader", // 使用 Babel 转译 JavaScript 文件
            },
        ],
    },
    resolve: {
        alias: {
            "@core": path.resolve(__dirname, "packages/dev/core/src"),
        },
        extensions: [".js", ".ts"],
    },
};
