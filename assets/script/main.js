// 初始化 Facebook SDK
function initializeFacebookSDK() {
  return FBInstant.initializeAsync().then(() => {
    console.log("SDK initialized");
    FBInstant.setLoadingProgress(0);
  });
}

// 更新进度条
function updateProgress(assetsLoaded, totalAssets) {
  let progress = Math.floor((assetsLoaded / totalAssets) * 100);
  console.log("update----");
  FBInstant.setLoadingProgress(progress);
  console.log(`Loading progress: ${progress}%`);
}

// 加载所有资源
function fetchAssetList() {
  // 合并所有资源路径为一个数组
  return [].concat(...Object.values(assetList));
}

// 加载所有资源
async function loadAllAssets(assetList) {
  let assetsLoaded = 0;
  for (const asset of assetList) {
    try {
      console.log("before");
      await loadAsset(asset);
      console.log("after");
      assetsLoaded++;
      updateProgress(assetsLoaded, assetList.length);
    } catch (error) {
      console.error("Failed to load asset:", asset, error);
    }
  }
}

// 启动游戏
function startGame() {
  FBInstant.startGameAsync().then(() => {
    console.log("Game started!");
    // 游戏逻辑代码放在这里
  });
}

// 主流程
initializeFacebookSDK()
  .then(fetchAssetList)
  .then(loadAllAssets)
  .then(startGame)
  .catch((error) => console.error("Error loading game assets:", error));
