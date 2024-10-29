var STRINGS = {
  Splash: {
    Loading: "Loading ...",
    LogoLine1: "Some text here",
    LogoLine2: "powered by v-geese",
    LogoLine3: "none",
    TapToStart: "TAP TO START",
  },
  Game: {
    Settings: "SETTINGS",
    Pause: "PAUSE",
    Over: "GAME OVER",
    GameComplete: "GAME COMPLETE",
    Complete: "HOLE # COMPLETE",
    Reward: "OUT OF BALLS",
    Confirmation: "CONFIRMATION",
    Tutorial: "TUTORIAL",
    Tutorial1Line1: "Drag the ball to adjust force and direction.",
    Tutorial1Line2: "Complete the course before running out of balls.",
    Tutorial2Line1: "Tap outside of the ball",
    Tutorial2Line2: "and drag to rotate the camera.",
    Cheers: ["GREAT", "FANTASTIC", "AWESOME", "WONDERFUL", "AMAZING"],
    HoleIn: "HOLE IN #",
    Par: "PAR",
    Birdie: "BIRDIE",
    Eagle: "EAGLE",
    DoubleEagle: "DOUBLE EAGLE",
    Bogey: "BOGEY",
    DoubleBogey: "DOUBLE BOGEY",
    TripleBogey: "TRIPLE BOGEY",
    TriedHard: "TRIED HARD",
    Best: "BEST",
    Score: "SCORE",
    NewBest: "HIGH SCORE!",
    Hole: "HOLE: ",
    RewardMessage: "ADD # MORE BALLS?",
    EndGame: "END THE GAME?",
    NewGame: "START A NEW GAME",
    NewGame2: "( FROM HOLE 1 ) ?",
  },
};
var SETTINGS = {
  Ad: {
    preloadedRewardedVideo: null,
    preloadedInterstitial: null,
  },
  API: {
    Enabled: true,
    Log: {
      Events: {
        InitializeGame: true,
        EndGame: true,
        Level: {
          Begin: true,
          End: true,
          Win: true,
          Lose: true,
          Draw: true,
        },
      },
    },
  },
  Language: {
    Title: "Language",
    Default: "en",
    show: false,
    Option: [
      { value: "en", label: "English" }, // 英语
      { value: "es", label: "Español" }, // 西班牙语
      { value: "pt", label: "Português" }, // 葡萄牙语
      { value: "fr", label: "Français" }, // 法语
      { value: "ar", label: "‎العربية‎" }, // 阿拉伯语
      { value: "id", label: "Bahasa Indonesia" }, // 印度尼西亚语
    ],
  },
  DeveloperBranding: {
    Splash: {
      Enabled: true,
    },
    Logo: {
      Enabled: true,
      Link: "http://www.v-geese.com",
      LinkEnabled: false,
      NewWindow: true,
      Width: 166,
      Height: 0x3d,
    },
  },
  Branding: {
    Splash: {
      Enabled: false,
    },
    Logo: {
      Enabled: false,
      Link: "http://google.com",
      LinkEnabled: true,
      NewWindow: true,
      Width: 280,
      Height: 34,
    },
  },
  MoreGames: {
    Enabled: false,
    Link: "https://www.v-geese.com",
    NewWindow: true,
  },
  Gamecenter: {
    Enabled: true,
  },
  TapToStartAudioUnlock: {
    Enabled: false,
  },
  RewardedVideo: {
    Enabled: true,
  },
  Versioning: {
    Version: "1.0.0",
    Build: "8",
    DisplayLog: true,
    DrawVersion: true,
    FontSize: "16px",
    FontFamily: "Arial",
    FillStyle: "#000000",
  },
};
if (
  "undefined" !== typeof SETTINGS.Versioning &&
  null !== SETTINGS.Versioning &&
  true === SETTINGS.Versioning.DisplayLog
) {
  console.log(
    "Release: v" +
      SETTINGS.Versioning.Version +
      "+build." +
      SETTINGS.Versioning.Build
  );
}
