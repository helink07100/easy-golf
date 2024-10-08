var _STRINGS = {
  Ad: {
    Mobile: {
      Preroll: {
        ReadyIn: "The game is ready in ",
        Loading: "Your game is loading...",
        Close: "Close",
      },
      Header: {
        ReadyIn: "The game is ready in ",
        Loading: "Your game is loading...",
        Close: "Close",
      },
      End: {
        ReadyIn: "Advertisement ends in ",
        Loading: "Please wait ...",
        Close: "Close",
      },
    },
  },
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
var _SETTINGS = {
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
  Ad: {
    Mobile: {
      Preroll: {
        Enabled: false,
        Duration: 0x5,
        Width: 0x12c,
        Height: 0xfa,
        Rotation: {
          Enabled: false,
          Weight: {
            MobileAdInGamePreroll: 0x28,
            MobileAdInGamePreroll2: 0x28,
            MobileAdInGamePreroll3: 0x14,
          },
        },
      },
      Header: {
        Enabled: false,
        Duration: 0x5,
        Width: 0x140,
        Height: 0x32,
        Rotation: {
          Enabled: false,
          Weight: {
            MobileAdInGameHeader: 0x28,
            MobileAdInGameHeader2: 0x28,
            MobileAdInGameHeader3: 0x14,
          },
        },
      },
      Footer: {
        Enabled: false,
        Duration: 0x5,
        Width: 0x140,
        Height: 0x32,
        Rotation: {
          Enabled: false,
          Weight: {
            MobileAdInGameFooter: 0x28,
            MobileAdInGameFooter2: 0x28,
            MobileAdInGameFooter3: 0x14,
          },
        },
      },
      End: {
        Enabled: false,
        Duration: 0x1,
        Width: 0x12c,
        Height: 0xfa,
        Rotation: {
          Enabled: false,
          Weight: {
            MobileAdInGameEnd: 0x28,
            MobileAdInGameEnd2: 0x28,
            MobileAdInGameEnd3: 0x14,
          },
        },
      },
    },
  },
  Language: {
    Default: "en",
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
      Width: 0xa6,
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
      Width: 0x118,
      Height: 0x22,
    },
  },
  MoreGames: {
    Enabled: true,
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
  "undefined" !== typeof _SETTINGS.Versioning &&
  null !== _SETTINGS.Versioning &&
  true === _SETTINGS.Versioning.DisplayLog
) {
  console.log(
    "Release: v" +
      _SETTINGS.Versioning.Version +
      "+build." +
      _SETTINGS.Versioning.Build
  );
}
var MobileAdInGamePreroll = {
  ad_duration: _SETTINGS.Ad.Mobile.Preroll.Duration,
  ad_width: _SETTINGS.Ad.Mobile.Preroll.Width,
  ad_height: _SETTINGS.Ad.Mobile.Preroll.Height,
  ready_in: _STRINGS.Ad.Mobile.Preroll.ReadyIn,
  loading: _STRINGS.Ad.Mobile.Preroll.Loading,
  close:
    _STRINGS.Ad.Mobile.Preroll.Close +
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
  Initialize: function () {
    if (_SETTINGS.Ad.Mobile.Preroll.Rotation.Enabled) {
      var weight = _SETTINGS.Ad.Mobile.Preroll.Rotation.Weight;
      var preRoll = weight.MobileAdInGamePreroll;
      var _0x4b439b = preRoll + weight.MobileAdInGamePreroll2;
      var weight = _0x4b439b + weight.MobileAdInGamePreroll3;
      var random = Math.floor(100 * Math.random());
      console.log("seed: ", random);
      if (random <= preRoll) {
        this.selectedOverlayName = "MobileAdInGamePreroll";
      } else if (random <= _0x4b439b) {
        this.selectedOverlayName = "MobileAdInGamePreroll2";
      } else if (random <= weight) {
        this.selectedOverlayName = "MobileAdInGamePreroll3";
      }
      console.log("Ad rotating preroll enabled");
    } else {
      this.selectedOverlayName = "MobileAdInGamePreroll";
      console.log("Ad rotating preroll disabled");
    }
    console.log("selected:", this.selectedOverlayName);
    this.overlay = $("#" + this.selectedOverlayName);
    this.box = $("#" + this.selectedOverlayName + "-Box");
    this.game = $("#game");
    this.boxContents = {
      footer: $("#" + this.selectedOverlayName + "-Box-Footer"),
      header: $("#" + this.selectedOverlayName + "-Box-Header"),
      close: $("#" + this.selectedOverlayName + "-Box-Close"),
      body: $("#" + this.selectedOverlayName + "-Box-Body"),
    };
    this.box.width(this.ad_width);
    this.box.height(this.ad_height);
    this.box.css("left", (this.overlay.width() - this.box.width()) / 0x2);
    this.box.css(
      "top",
      (this.overlay.height() -
        this.box.height() -
        this.boxContents.header.height() -
        this.boxContents.footer.height()) /
        0x2
    );
    this.overlay.show(this.Timer(this.ad_duration));
  },
  Timer: function (_0x3411e4) {
    var _0x1ab5f4 = _0x3411e4;
    var _0x446bdd = setInterval(function () {
      MobileAdInGamePreroll.boxContents.header.text(
        MobileAdInGamePreroll.ready_in + _0x1ab5f4 + "..."
      );
      MobileAdInGamePreroll.boxContents.footer.text(
        MobileAdInGamePreroll.loading
      );
      _0x1ab5f4--;
      if (0x0 > _0x1ab5f4) {
        clearInterval(_0x446bdd);
        MobileAdInGamePreroll.boxContents.close.css(
          "left",
          MobileAdInGamePreroll.boxContents.body.width() - 0x17
        );
        MobileAdInGamePreroll.boxContents.close.show();
        MobileAdInGamePreroll.boxContents.header.html(
          MobileAdInGamePreroll.close
        );
        MobileAdInGamePreroll.boxContents.footer.text("");
      }
    }, 0x3e8);
  },
  Close: function () {
    this.boxContents.close.hide();
    this.overlay.hide();
  },
};
var MobileAdInGameHeader = {
  ad_duration: _SETTINGS.Ad.Mobile.Header.Duration,
  ad_width: _SETTINGS.Ad.Mobile.Header.Width,
  ad_height: _SETTINGS.Ad.Mobile.Header.Height,
  Initialize: function () {
    if (_SETTINGS.Ad.Mobile.Header.Rotation.Enabled) {
      var _0x23037e = _SETTINGS.Ad.Mobile.Header.Rotation.Weight;
      var _0x4ccb82 = _0x23037e.MobileAdInGameHeader;
      var _0x20064d = _0x4ccb82 + _0x23037e.MobileAdInGameHeader2;
      var _0x23037e = _0x20064d + _0x23037e.MobileAdInGameHeader3;
      var _0x4f8680 = Math.floor(100 * Math.random());
      console.log("seed: ", _0x4f8680);
      if (_0x4f8680 <= _0x4ccb82) {
        this.selectedOverlayName = "MobileAdInGameHeader";
      } else if (_0x4f8680 <= _0x20064d) {
        this.selectedOverlayName = "MobileAdInGameHeader2";
      } else if (_0x4f8680 <= _0x23037e) {
        this.selectedOverlayName = "MobileAdInGameHeader3";
      }
      console.log("Ad rotating header enabled");
    } else {
      this.selectedOverlayName = "MobileAdInGameHeader";
      console.log("Ad rotating header disabled");
    }
    this.div = $("#" + this.selectedOverlayName);
    this.game = $("#game");
    this.div.width(this.ad_width);
    this.div.height(this.ad_height);
    this.div.css(
      "left",
      this.game.position().left + (this.game.width() - this.div.width()) / 0x2
    );
    this.div.css("top", 0x0);
    this.div.show(this.Timer(this.ad_duration));
  },
  Timer: function (_0x41d0ac) {
    var _0x2e6513 = setInterval(function () {
      _0x41d0ac--;
      if (0x0 > _0x41d0ac) {
        MobileAdInGameHeader.div.hide();
        clearInterval(_0x2e6513);
      }
    }, 0x3e8);
  },
};
var MobileAdInGameFooter = {
  ad_duration: _SETTINGS.Ad.Mobile.Footer.Duration,
  ad_width: _SETTINGS.Ad.Mobile.Footer.Width,
  ad_height: _SETTINGS.Ad.Mobile.Footer.Height,
  Initialize: function () {
    if (_SETTINGS.Ad.Mobile.Footer.Rotation.Enabled) {
      var _0x4d697b = _SETTINGS.Ad.Mobile.Footer.Rotation.Weight;
      var _0x1b19f6 = _0x4d697b.MobileAdInGameFooter;
      var _0x571d6b = _0x1b19f6 + _0x4d697b.MobileAdInGameFooter2;
      var _0x4d697b = _0x571d6b + _0x4d697b.MobileAdInGameFooter3;
      var _0x18060d = Math.floor(100 * Math.random());
      console.log("seed: ", _0x18060d);
      if (_0x18060d <= _0x1b19f6) {
        this.selectedOverlayName = "MobileAdInGameFooter";
      } else if (_0x18060d <= _0x571d6b) {
        this.selectedOverlayName = "MobileAdInGameFooter2";
      } else if (_0x18060d <= _0x4d697b) {
        this.selectedOverlayName = "MobileAdInGameFooter3";
      }
      console.log("Ad rotating footer enabled");
    } else {
      this.selectedOverlayName = "MobileAdInGameFooter";
      console.log("Ad rotating footer disabled");
    }
    this.div = $("#" + this.selectedOverlayName);
    this.game = $("#game");
    this.div.width(this.ad_width);
    this.div.height(this.ad_height);
    this.div.css(
      "left",
      this.game.position().left + (this.game.width() - this.div.width()) / 0x2
    );
    this.div.css("top", this.game.height() - this.div.height() - 0x5);
    this.div.show(this.Timer(this.ad_duration));
  },
  Timer: function (_0x2996e5) {
    var _0x4f5318 = setInterval(function () {
      _0x2996e5--;
      if (0x0 > _0x2996e5) {
        MobileAdInGameFooter.div.hide();
        clearInterval(_0x4f5318);
      }
    }, 0x3e8);
  },
};
var MobileAdInGameEnd = {
  ad_duration: _SETTINGS.Ad.Mobile.End.Duration,
  ad_width: _SETTINGS.Ad.Mobile.End.Width,
  ad_height: _SETTINGS.Ad.Mobile.End.Height,
  ready_in: _STRINGS.Ad.Mobile.End.ReadyIn,
  loading: _STRINGS.Ad.Mobile.End.Loading,
  close:
    _STRINGS.Ad.Mobile.End.Close +
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
  Initialize: function () {
    if (_SETTINGS.Ad.Mobile.End.Rotation.Enabled) {
      var _0x188b34 = _SETTINGS.Ad.Mobile.End.Rotation.Weight;
      var _0x2fe79d = _0x188b34.MobileAdInGameEnd;
      var _0x1fd9b6 = _0x2fe79d + _0x188b34.MobileAdInGameEnd2;
      var _0x188b34 = _0x1fd9b6 + _0x188b34.MobileAdInGameEnd3;
      var _0x3d496d = Math.floor(100 * Math.random());
      console.log("seed: ", _0x3d496d);
      if (_0x3d496d <= _0x2fe79d) {
        this.selectedOverlayName = "MobileAdInGameEnd";
      } else if (_0x3d496d <= _0x1fd9b6) {
        this.selectedOverlayName = "MobileAdInGameEnd2";
      } else if (_0x3d496d <= _0x188b34) {
        this.selectedOverlayName = "MobileAdInGameEnd3";
      }
      console.log("Ad rotating end enabled");
    } else {
      this.selectedOverlayName = "MobileAdInGameEnd";
      console.log("Ad rotating end disabled");
    }
    console.log("selected:", this.selectedOverlayName);
    this.overlay = $("#" + this.selectedOverlayName);
    this.box = $("#" + this.selectedOverlayName + "-Box");
    this.game = $("#game");
    this.boxContents = {
      footer: $("#" + this.selectedOverlayName + "-Box-Footer"),
      header: $("#" + this.selectedOverlayName + "-Box-Header"),
      close: $("#" + this.selectedOverlayName + "-Box-Close"),
      body: $("#" + this.selectedOverlayName + "-Box-Body"),
    };
    this.box.width(this.ad_width);
    this.box.height(this.ad_height);
    this.box.css("left", (this.overlay.width() - this.box.width()) / 0x2);
    this.box.css(
      "top",
      (this.overlay.height() -
        this.box.height() -
        this.boxContents.header.height() -
        this.boxContents.footer.height()) /
        0x2
    );
    this.overlay.show(this.Timer(this.ad_duration));
  },
  Timer: function (_0x22cb7e) {
    var _0x13c7db = _0x22cb7e;
    var _0x126e94 = setInterval(function () {
      MobileAdInGameEnd.boxContents.header.text(
        MobileAdInGameEnd.ready_in + _0x13c7db + "..."
      );
      MobileAdInGameEnd.boxContents.footer.text(MobileAdInGameEnd.loading);
      _0x13c7db--;
      if (0x0 > _0x13c7db) {
        clearInterval(_0x126e94);
        MobileAdInGameEnd.boxContents.close.css(
          "left",
          MobileAdInGameEnd.boxContents.body.width() - 0x17
        );
        MobileAdInGameEnd.boxContents.close.show();
        MobileAdInGameEnd.boxContents.header.html(MobileAdInGameEnd.close);
        MobileAdInGameEnd.boxContents.footer.text("");
      }
    }, 0x3e8);
  },
  Close: function () {
    this.boxContents.close.hide();
    this.overlay.hide();
  },
};
