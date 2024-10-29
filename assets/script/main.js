// 加载fb
window.onload = function () {
  // 确保 Facebook SDK 加载完成
  FBInstant.initializeAsync()
    .then(() => {
      console.log("Facebook SDK initialized");

      // 添加加载进度
      // setLoadingProgress();

      FBInstant.startGameAsync()
        .then(() => {
          // // console.log("Game started!");
          // progressBar.style.display = "none";
          // 游戏主逻辑
          startMainGame();
        })
        .catch((error) => {
          console.error("Error starting game:", error);
        });
    })
    .catch((error) => {
      console.error("Error initializing Facebook SDK:", error);
    });
};

// Assuming you have a progress bar element in your HTML
const progressBar = document.getElementById("progress-bar");

// Initialize the Facebook SDK
const setLoadingProgress = () => {
  // Update progress during asset loading
  let progress = 0;

  // Simulating loading progress for demonstration
  const loadingInterval = setInterval(() => {
    progress += 10; // Simulate loading progress (replace with actual loading logic)

    // Update the SDK loading progress
    FBInstant.setLoadingProgress(progress);

    // Update your custom progress bar (optional)
    if (progressBar) {
      progressBar.style.width = `${progress}%`;
    }

    // Check if loading is complete
    if (progress >= 100) {
      clearInterval(loadingInterval);

      // 游戏启动流程
      FBInstant.startGameAsync()
        .then(() => {
          // // console.log("Game started!");
          progressBar.style.display = "none";
          // 游戏主逻辑
          startMainGame();
        })
        .catch((error) => {
          console.error("Error starting game:", error);
        });
    }
  }, 200); // Adjust the interval or replace with actual loading logic
};

// 检查是否支持广告
function startMainGame() {
  // FBInstant.getSupportedAPIs().then((supportedAPIs) => {
  //   // // console.log("Supported APIs:", supportedAPIs);
  //   // 例如，检查是否支持用户数据存储
  //   let canShowAds =
  //     supportedAPIs.includes("getInterstitialAdAsync") &&
  //     supportedAPIs.includes("getRewardedVideoAsync");
  //   if (!canShowAds) {
  //     // console.error("Ads not supported in this session");
  //   } else {
  //     // 如果可以则加载，插页式广告
  //     preloadInterstitial();
  //   }
  // });
}

// 预加载插页式广告
function preloadInterstitial() {
  // // console.log("Preloading Interstitial");
  FBInstant.getInterstitialAdAsync("id")
    .then(function (interstitial) {
      // Load the Ad asynchronously
      SETTINGS.Ad.preloadedInterstitial = interstitial;
      return SETTINGS.Ad.preloadedInterstitial.loadAsync();
    })
    .then(function () {
      // // console.log("Interstitial ready");
      showInterstitial();
    })
    .catch(function (error) {
      // console.error("Interstitial failed to preload: " + error.message);
    });
}
