// 加载单个资源（支持 mp3、image、font、babylon、script 类型）
function loadAsset(path) {
  return new Promise((resolve, reject) => {
    if (
      path.endsWith(".png") ||
      path.endsWith(".jpg") ||
      path.endsWith(".jpeg")
    ) {
      // 加载图片资源
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = reject;
      img.src = path;
    } else if (path.endsWith(".mp3")) {
      // 加载音频资源
      const audio = new Audio();
      audio.oncanplaythrough = () => resolve();
      audio.onerror = reject;
      audio.src = path;
      audio.load();
    } else if (
      path.endsWith(".ttf") ||
      path.endsWith(".woff") ||
      path.endsWith(".woff2")
    ) {
      // 加载字体资源
      const font = new FontFace("customFont", `url(${path})`);
      font
        .load()
        .then(() => {
          document.fonts.add(font);
          resolve();
        })
        .catch(reject);
    } else if (path.endsWith(".babylon")) {
      // 加载Babylon模型
      BABYLON.SceneLoader.LoadAssetContainer(
        "",
        path,
        scene,
        function (container) {
          container.addAllToScene();
          resolve();
        },
        null,
        null,
        reject
      );
    } else if (path.endsWith(".wasm")) {
      // 加载WASM文件
      fetch(path)
        .then((response) => {
          if (!response.ok)
            throw new Error(`Failed to load WASM: ${response.statusText}`);
          return response.arrayBuffer();
        })
        .then((bytes) => WebAssembly.instantiate(bytes))
        .then((module) => {
          // 这里可以处理已加载的WASM模块
          console.log("WASM module loaded:", module);
          resolve();
        })
        .catch(reject);
    } else {
      reject(new Error(`Unsupported asset type for path: ${path}`));
    }
  });
}
