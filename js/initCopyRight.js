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
    LogoLine2: "powered by MarketJS",
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
      Link: "http://marketjs.com",
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
    Link: "http://www.marketjs.com/game/links/mobile",
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
!(function (_0x35c962, _0x57642c) {
  if ("object" == typeof module && "object" == typeof module.exports) {
    module.exports = _0x35c962.document
      ? _0x57642c(_0x35c962, true)
      : function (_0x3e5d1d) {
          if (!_0x3e5d1d.document) {
            throw Error("jQuery requires a window with a document");
          }
          return _0x57642c(_0x3e5d1d);
        };
  } else {
    _0x57642c(_0x35c962);
  }
})(
  "undefined" != typeof window ? window : this,
  function (_0x64ec9a, _0x4f3b77) {
    function _0x414c6a(_0x371110, _0x45a13a) {
      _0x45a13a = _0x45a13a || _0x3abdcc;
      var _0x3f18cf = _0x45a13a.createElement("script");
      _0x3f18cf.text = _0x371110;
      _0x45a13a.head.appendChild(_0x3f18cf).parentNode.removeChild(_0x3f18cf);
    }
    function _0x541106(_0x11e681) {
      var _0x4361ed = !!_0x11e681 && "length" in _0x11e681 && _0x11e681.length;
      var _0x3b0ca0 = _0xca1637.type(_0x11e681);
      return (
        "function" !== _0x3b0ca0 &&
        !_0xca1637.isWindow(_0x11e681) &&
        ("array" === _0x3b0ca0 ||
          0x0 === _0x4361ed ||
          ("number" == typeof _0x4361ed &&
            0x0 < _0x4361ed &&
            _0x4361ed - 0x1 in _0x11e681))
      );
    }
    function _0x128171(_0x5e6f48, _0x3d6e5b) {
      return (
        _0x5e6f48.nodeName &&
        _0x5e6f48.nodeName.toLowerCase() === _0x3d6e5b.toLowerCase()
      );
    }
    function _0x413754(_0x3d211f, _0x419b04, _0x1dd0ae) {
      return _0xca1637.isFunction(_0x419b04)
        ? _0xca1637.grep(_0x3d211f, function (_0x2c588a, _0x49c444) {
            return (
              !!_0x419b04.call(_0x2c588a, _0x49c444, _0x2c588a) !== _0x1dd0ae
            );
          })
        : _0x419b04.nodeType
        ? _0xca1637.grep(_0x3d211f, function (_0x47a891) {
            return (_0x47a891 === _0x419b04) !== _0x1dd0ae;
          })
        : "string" != typeof _0x419b04
        ? _0xca1637.grep(_0x3d211f, function (_0x4d4928) {
            return -0x1 < _0x4338af.call(_0x419b04, _0x4d4928) !== _0x1dd0ae;
          })
        : /^.[^:#\[\.,]*$/.test(_0x419b04)
        ? _0xca1637.filter(_0x419b04, _0x3d211f, _0x1dd0ae)
        : ((_0x419b04 = _0xca1637.filter(_0x419b04, _0x3d211f)),
          _0xca1637.grep(_0x3d211f, function (_0x3f2755) {
            return (
              -0x1 < _0x4338af.call(_0x419b04, _0x3f2755) !== _0x1dd0ae &&
              0x1 === _0x3f2755.nodeType
            );
          }));
    }
    function _0x1f69eb(_0x3dc734, _0x516f7f) {
      for (
        ;
        (_0x3dc734 = _0x3dc734[_0x516f7f]) && 0x1 !== _0x3dc734.nodeType;

      ) {}
      return _0x3dc734;
    }
    function _0x40b515(_0x1a78f9) {
      return _0x1a78f9;
    }
    function _0xbb9213(_0x430dfd) {
      throw _0x430dfd;
    }
    function _0x3cb6f2(_0x3cc24a, _0x504bec, _0x1eff2e, _0xd22192) {
      var _0xf19aa8;
      try {
        if (
          _0x3cc24a &&
          _0xca1637.isFunction((_0xf19aa8 = _0x3cc24a.promise))
        ) {
          _0xf19aa8.call(_0x3cc24a).done(_0x504bec).fail(_0x1eff2e);
        } else if (
          _0x3cc24a &&
          _0xca1637.isFunction((_0xf19aa8 = _0x3cc24a.then))
        ) {
          _0xf19aa8.call(_0x3cc24a, _0x504bec, _0x1eff2e);
        } else {
          _0x504bec.apply(undefined, [_0x3cc24a].slice(_0xd22192));
        }
      } catch (_0x1a9186) {
        _0x1eff2e.apply(undefined, [_0x1a9186]);
      }
    }
    function _0x3fb399() {
      _0x3abdcc.removeEventListener("DOMContentLoaded", _0x3fb399);
      _0x64ec9a.removeEventListener("load", _0x3fb399);
      _0xca1637.ready();
    }
    function _0x1fd0f2() {
      this.expando = _0xca1637.expando + _0x1fd0f2.uid++;
    }
    function _0x11d917(_0x4a475b, _0x5bcc73, _0x467d1a) {
      var _0x409c2b;
      if (undefined === _0x467d1a && 0x1 === _0x4a475b.nodeType) {
        _0x409c2b = "data-" + _0x5bcc73.replace(/[A-Z]/g, "-$&").toLowerCase();
        _0x467d1a = _0x4a475b.getAttribute(_0x409c2b);
        if ("string" == typeof _0x467d1a) {
          try {
            _0x467d1a =
              "true" === _0x467d1a ||
              ("false" !== _0x467d1a &&
                ("null" === _0x467d1a
                  ? null
                  : _0x467d1a === +_0x467d1a + ""
                  ? +_0x467d1a
                  : /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/.test(_0x467d1a)
                  ? JSON.parse(_0x467d1a)
                  : _0x467d1a));
          } catch (_0x4c54eb) {}
          _0x16d36b.set(_0x4a475b, _0x5bcc73, _0x467d1a);
        } else {
          _0x467d1a = undefined;
        }
      }
      return _0x467d1a;
    }
    function _0x48f6ea(_0x48812e, _0x1c5992, _0x214519, _0xdfb93c) {
      var _0x3d7012;
      var _0x36c46e = 0x1;
      var _0x4a2f62 = 0x14;
      var _0x41ef96 = _0xdfb93c
        ? function () {
            return _0xdfb93c.cur();
          }
        : function () {
            return _0xca1637.css(_0x48812e, _0x1c5992, "");
          };
      var _0x473fe3 = _0x41ef96();
      var _0xcaf365 =
        (_0x214519 && _0x214519[0x3]) ||
        (_0xca1637.cssNumber[_0x1c5992] ? "" : "px");
      var _0x122c39 =
        (_0xca1637.cssNumber[_0x1c5992] ||
          ("px" !== _0xcaf365 && +_0x473fe3)) &&
        _0xfc4a92.exec(_0xca1637.css(_0x48812e, _0x1c5992));
      if (_0x122c39 && _0x122c39[0x3] !== _0xcaf365) {
        _0xcaf365 = _0xcaf365 || _0x122c39[0x3];
        _0x214519 = _0x214519 || [];
        _0x122c39 = +_0x473fe3 || 0x1;
        do {
          _0x36c46e = _0x36c46e || ".5";
          _0x122c39 /= _0x36c46e;
          _0xca1637.style(_0x48812e, _0x1c5992, _0x122c39 + _0xcaf365);
        } while (
          _0x36c46e !== (_0x36c46e = _0x41ef96() / _0x473fe3) &&
          0x1 !== _0x36c46e &&
          --_0x4a2f62
        );
      }
      if (_0x214519) {
        _0x122c39 = +_0x122c39 || +_0x473fe3 || 0x0;
        _0x3d7012 = _0x214519[0x1]
          ? _0x122c39 + (_0x214519[0x1] + 0x1) * _0x214519[0x2]
          : +_0x214519[0x2];
        if (_0xdfb93c) {
          _0xdfb93c.unit = _0xcaf365;
          _0xdfb93c.start = _0x122c39;
          _0xdfb93c.end = _0x3d7012;
        }
      }
      return _0x3d7012;
    }
    function _0x10902f(_0x1907a3, _0x5df6b0) {
      var _0x2ca9b1;
      var _0xa87b19;
      var _0x133b65 = [];
      var _0x4478fb = 0x0;
      for (
        var _0x4a52a4 = _0x1907a3.length;
        _0x4478fb < _0x4a52a4;
        _0x4478fb++
      ) {
        _0xa87b19 = _0x1907a3[_0x4478fb];
        if (_0xa87b19.style) {
          _0x2ca9b1 = _0xa87b19.style.display;
          if (_0x5df6b0) {
            if ("none" === _0x2ca9b1) {
              _0x133b65[_0x4478fb] =
                _0x245b46.get(_0xa87b19, "display") || null;
              if (!_0x133b65[_0x4478fb]) {
                _0xa87b19.style.display = "";
              }
            }
            if ("" === _0xa87b19.style.display && _0x3b6706(_0xa87b19)) {
              _0x2ca9b1 = _0x133b65;
              var _0x4ca004 = _0x4478fb;
              var _0x46efa4;
              var _0xc238cf = undefined;
              _0x46efa4 = _0xa87b19.ownerDocument;
              var _0x412a4b = _0xa87b19.nodeName;
              _0x46efa4 = (_0xa87b19 = _0x1babc5[_0x412a4b])
                ? _0xa87b19
                : ((_0xc238cf = _0x46efa4.body.appendChild(
                    _0x46efa4.createElement(_0x412a4b)
                  )),
                  (_0xa87b19 = _0xca1637.css(_0xc238cf, "display")),
                  _0xc238cf.parentNode.removeChild(_0xc238cf),
                  "none" === _0xa87b19 && (_0xa87b19 = "block"),
                  (_0x1babc5[_0x412a4b] = _0xa87b19),
                  _0xa87b19);
              _0x2ca9b1[_0x4ca004] = _0x46efa4;
            }
          } else if ("none" !== _0x2ca9b1) {
            _0x133b65[_0x4478fb] = "none";
            _0x245b46.set(_0xa87b19, "display", _0x2ca9b1);
          }
        }
      }
      for (_0x4478fb = 0x0; _0x4478fb < _0x4a52a4; _0x4478fb++) {
        if (null != _0x133b65[_0x4478fb]) {
          _0x1907a3[_0x4478fb].style.display = _0x133b65[_0x4478fb];
        }
      }
      return _0x1907a3;
    }
    function _0x280a46(_0x557bc2, _0x4893a6) {
      var _0x234451;
      _0x234451 =
        "undefined" != typeof _0x557bc2.getElementsByTagName
          ? _0x557bc2.getElementsByTagName(_0x4893a6 || "*")
          : "undefined" != typeof _0x557bc2.querySelectorAll
          ? _0x557bc2.querySelectorAll(_0x4893a6 || "*")
          : [];
      return undefined === _0x4893a6 ||
        (_0x4893a6 &&
          _0x557bc2.nodeName &&
          _0x557bc2.nodeName.toLowerCase() === _0x4893a6.toLowerCase())
        ? _0xca1637.merge([_0x557bc2], _0x234451)
        : _0x234451;
    }
    function _0x5c5f84(_0x568aeb, _0x52cf1a) {
      var _0x2dfa05 = 0x0;
      for (
        var _0x518d2d = _0x568aeb.length;
        _0x2dfa05 < _0x518d2d;
        _0x2dfa05++
      ) {
        _0x245b46.set(
          _0x568aeb[_0x2dfa05],
          "globalEval",
          !_0x52cf1a || _0x245b46.get(_0x52cf1a[_0x2dfa05], "globalEval")
        );
      }
    }
    function _0xb040cb(_0x40ea2b, _0x30f7fe, _0x2baa0b, _0xe3fcb8, _0x24f5d8) {
      var _0x5008e1;
      var _0x16e669;
      var _0x242624;
      var _0x4ceebf;
      var _0x4295cd = _0x30f7fe.createDocumentFragment();
      var _0x1b0f92 = [];
      var _0x19b6de = 0x0;
      for (
        var _0x59734d = _0x40ea2b.length;
        _0x19b6de < _0x59734d;
        _0x19b6de++
      ) {
        _0x5008e1 = _0x40ea2b[_0x19b6de];
        if (_0x5008e1 || 0x0 === _0x5008e1) {
          if ("object" === _0xca1637.type(_0x5008e1)) {
            _0xca1637.merge(
              _0x1b0f92,
              _0x5008e1.nodeType ? [_0x5008e1] : _0x5008e1
            );
          } else {
            if (/<|&#?\w+;/.test(_0x5008e1)) {
              _0x16e669 =
                _0x16e669 ||
                _0x4295cd.appendChild(_0x30f7fe.createElement("div"));
              _0x242624 = (/<([a-z][^\/\0>\x20\t\r\n\f]+)/i.exec(_0x5008e1) || [
                "",
                "",
              ])[0x1].toLowerCase();
              _0x242624 = _0x1323a7[_0x242624] || _0x1323a7._default;
              _0x16e669.innerHTML =
                _0x242624[0x1] +
                _0xca1637.htmlPrefilter(_0x5008e1) +
                _0x242624[0x2];
              for (_0x242624 = _0x242624[0x0]; _0x242624--; ) {
                _0x16e669 = _0x16e669.lastChild;
              }
              _0xca1637.merge(_0x1b0f92, _0x16e669.childNodes);
              _0x16e669 = _0x4295cd.firstChild;
              _0x16e669.textContent = "";
            } else {
              _0x1b0f92.push(_0x30f7fe.createTextNode(_0x5008e1));
            }
          }
        }
      }
      _0x4295cd.textContent = "";
      for (_0x19b6de = 0x0; (_0x5008e1 = _0x1b0f92[_0x19b6de++]); ) {
        if (_0xe3fcb8 && -0x1 < _0xca1637.inArray(_0x5008e1, _0xe3fcb8)) {
          if (_0x24f5d8) {
            _0x24f5d8.push(_0x5008e1);
          }
        } else {
          _0x4ceebf = _0xca1637.contains(_0x5008e1.ownerDocument, _0x5008e1);
          _0x16e669 = _0x280a46(_0x4295cd.appendChild(_0x5008e1), "script");
          if (_0x4ceebf) {
            _0x5c5f84(_0x16e669);
          }
          if (_0x2baa0b) {
            for (_0x242624 = 0x0; (_0x5008e1 = _0x16e669[_0x242624++]); ) {
              if (/^$|\/(?:java|ecma)script/i.test(_0x5008e1.type || "")) {
                _0x2baa0b.push(_0x5008e1);
              }
            }
          }
        }
      }
      return _0x4295cd;
    }
    function _0x42eb89() {
      return true;
    }
    function _0x182e54() {
      return false;
    }
    function _0xad3b43() {
      try {
        return _0x3abdcc.activeElement;
      } catch (_0xa33b6e) {}
    }
    function _0x3c04e6(
      _0x4a9afe,
      _0x459650,
      _0x3ffa1d,
      _0x24c9bd,
      _0x3cb65f,
      _0x44f19e
    ) {
      var _0x53c6aa;
      var _0x36e43c;
      if ("object" == typeof _0x459650) {
        if ("string" != typeof _0x3ffa1d) {
          _0x24c9bd = _0x24c9bd || _0x3ffa1d;
          _0x3ffa1d = undefined;
        }
        for (_0x36e43c in _0x459650)
          _0x3c04e6(
            _0x4a9afe,
            _0x36e43c,
            _0x3ffa1d,
            _0x24c9bd,
            _0x459650[_0x36e43c],
            _0x44f19e
          );
        return _0x4a9afe;
      }
      if (null == _0x24c9bd && null == _0x3cb65f) {
        _0x3cb65f = _0x3ffa1d;
        _0x24c9bd = _0x3ffa1d = undefined;
      } else if (null == _0x3cb65f) {
        if ("string" == typeof _0x3ffa1d) {
          _0x3cb65f = _0x24c9bd;
          _0x24c9bd = undefined;
        } else {
          _0x3cb65f = _0x24c9bd;
          _0x24c9bd = _0x3ffa1d;
          _0x3ffa1d = undefined;
        }
      }
      if (false === _0x3cb65f) {
        _0x3cb65f = _0x182e54;
      } else {
        if (!_0x3cb65f) {
          return _0x4a9afe;
        }
      }
      if (0x1 === _0x44f19e) {
        _0x53c6aa = _0x3cb65f;
        _0x3cb65f = function (_0x44792a) {
          new _0xca1637.fn.init(undefined, undefined).off(_0x44792a);
          return _0x53c6aa.apply(this, arguments);
        };
        _0x3cb65f.guid = _0x53c6aa.guid || (_0x53c6aa.guid = _0xca1637.guid++);
      }
      return _0x4a9afe.each(function () {
        _0xca1637.event.add(this, _0x459650, _0x3cb65f, _0x24c9bd, _0x3ffa1d);
      });
    }
    function _0x19b9d5(_0x81a17c) {
      _0x81a17c.type =
        (null !== _0x81a17c.getAttribute("type")) + "/" + _0x81a17c.type;
      return _0x81a17c;
    }
    function _0x492d6a(_0x4ff1bc) {
      var _0xb17591 = /^true\/(.*)/.exec(_0x4ff1bc.type);
      if (_0xb17591) {
        _0x4ff1bc.type = _0xb17591[0x1];
      } else {
        _0x4ff1bc.removeAttribute("type");
      }
      return _0x4ff1bc;
    }
    function _0x49a5ce(_0x10f252, _0x32ffc9) {
      var _0x58cf5b;
      var _0x2d2c7c;
      var _0x100bca;
      var _0x541a08;
      var _0x19142a;
      var _0x35c3a5;
      if (0x1 === _0x32ffc9.nodeType) {
        if (
          _0x245b46.hasData(_0x10f252) &&
          ((_0x58cf5b = _0x245b46.access(_0x10f252)),
          (_0x2d2c7c = _0x245b46.set(_0x32ffc9, _0x58cf5b)),
          (_0x35c3a5 = _0x58cf5b.events))
        ) {
          delete _0x2d2c7c.handle;
          _0x2d2c7c.events = {};
          for (_0x100bca in _0x35c3a5) {
            _0x58cf5b = 0x0;
            for (
              _0x2d2c7c = _0x35c3a5[_0x100bca].length;
              _0x58cf5b < _0x2d2c7c;
              _0x58cf5b++
            ) {
              _0xca1637.event.add(
                _0x32ffc9,
                _0x100bca,
                _0x35c3a5[_0x100bca][_0x58cf5b]
              );
            }
          }
        }
        if (_0x16d36b.hasData(_0x10f252)) {
          _0x541a08 = _0x16d36b.access(_0x10f252);
          _0x19142a = _0xca1637.extend({}, _0x541a08);
          _0x16d36b.set(_0x32ffc9, _0x19142a);
        }
      }
    }
    function _0x449f1a(_0x13c851, _0x557873, _0x3bb24b, _0x21c45e) {
      _0x557873 = _0x347fa8.apply([], _0x557873);
      var _0x98edbc;
      var _0x14b68b;
      var _0x3573fb;
      var _0x3b7726;
      var _0x3daaa8 = 0x0;
      var _0x16e489 = _0x13c851.length;
      var _0x59897e = _0x16e489 - 0x1;
      var _0x1ecfd5 = _0x557873[0x0];
      var _0x1d3fe6 = _0xca1637.isFunction(_0x1ecfd5);
      if (
        _0x1d3fe6 ||
        (0x1 < _0x16e489 &&
          "string" == typeof _0x1ecfd5 &&
          !_0x139b38.checkClone &&
          /checked\s*(?:[^=]|=\s*.checked.)/i.test(_0x1ecfd5))
      ) {
        return _0x13c851.each(function (_0x180b4b) {
          var _0x1b7c48 = _0x13c851.eq(_0x180b4b);
          if (_0x1d3fe6) {
            _0x557873[0x0] = _0x1ecfd5.call(this, _0x180b4b, _0x1b7c48.html());
          }
          _0x449f1a(_0x1b7c48, _0x557873, _0x3bb24b, _0x21c45e);
        });
      }
      if (
        _0x16e489 &&
        ((_0x98edbc = _0xb040cb(
          _0x557873,
          _0x13c851[0x0].ownerDocument,
          false,
          _0x13c851,
          _0x21c45e
        )),
        (_0x14b68b = _0x98edbc.firstChild),
        0x1 === _0x98edbc.childNodes.length && (_0x98edbc = _0x14b68b),
        _0x14b68b || _0x21c45e)
      ) {
        _0x14b68b = _0xca1637.map(_0x280a46(_0x98edbc, "script"), _0x19b9d5);
        for (_0x3573fb = _0x14b68b.length; _0x3daaa8 < _0x16e489; _0x3daaa8++) {
          _0x3b7726 = _0x98edbc;
          if (_0x3daaa8 !== _0x59897e) {
            _0x3b7726 = _0xca1637.clone(_0x3b7726, true, true);
            if (_0x3573fb) {
              _0xca1637.merge(_0x14b68b, _0x280a46(_0x3b7726, "script"));
            }
          }
          _0x3bb24b.call(_0x13c851[_0x3daaa8], _0x3b7726, _0x3daaa8);
        }
        if (_0x3573fb) {
          _0x98edbc = _0x14b68b[_0x14b68b.length - 0x1].ownerDocument;
          _0xca1637.map(_0x14b68b, _0x492d6a);
          for (_0x3daaa8 = 0x0; _0x3daaa8 < _0x3573fb; _0x3daaa8++) {
            _0x3b7726 = _0x14b68b[_0x3daaa8];
            if (
              /^$|\/(?:java|ecma)script/i.test(_0x3b7726.type || "") &&
              !_0x245b46.access(_0x3b7726, "globalEval") &&
              _0xca1637.contains(_0x98edbc, _0x3b7726)
            ) {
              if (_0x3b7726.src) {
                if (_0xca1637._evalUrl) {
                  _0xca1637._evalUrl(_0x3b7726.src);
                }
              } else {
                _0x414c6a(
                  _0x3b7726.textContent.replace(
                    /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
                    ""
                  ),
                  _0x98edbc
                );
              }
            }
          }
        }
      }
      return _0x13c851;
    }
    function _0x39950c(_0x2668f7, _0x4aa4bd, _0x3289b0) {
      var _0x1d0c16 = _0x4aa4bd
        ? _0xca1637.filter(_0x4aa4bd, _0x2668f7)
        : _0x2668f7;
      for (
        var _0x1e42b2 = 0x0;
        null != (_0x4aa4bd = _0x1d0c16[_0x1e42b2]);
        _0x1e42b2++
      ) {
        if (!(_0x3289b0 || 0x1 !== _0x4aa4bd.nodeType)) {
          _0xca1637.cleanData(_0x280a46(_0x4aa4bd));
        }
        if (_0x4aa4bd.parentNode) {
          if (
            _0x3289b0 &&
            _0xca1637.contains(_0x4aa4bd.ownerDocument, _0x4aa4bd)
          ) {
            _0x5c5f84(_0x280a46(_0x4aa4bd, "script"));
          }
          _0x4aa4bd.parentNode.removeChild(_0x4aa4bd);
        }
      }
      return _0x2668f7;
    }
    function _0x130d43(_0x3103ba, _0x179a97, _0x198d3a) {
      var _0x5dd443;
      var _0x28bba6;
      var _0x1ee85f;
      var _0x569268;
      var _0x2141df = _0x3103ba.style;
      _0x198d3a = _0x198d3a || _0x5d6f53(_0x3103ba);
      if (_0x198d3a) {
        _0x569268 =
          _0x198d3a.getPropertyValue(_0x179a97) || _0x198d3a[_0x179a97];
        if (
          !(
            "" !== _0x569268 ||
            _0xca1637.contains(_0x3103ba.ownerDocument, _0x3103ba)
          )
        ) {
          _0x569268 = _0xca1637.style(_0x3103ba, _0x179a97);
        }
        if (
          !_0x139b38.pixelMarginRight() &&
          _0x5294c7.test(_0x569268) &&
          /^margin/.test(_0x179a97)
        ) {
          _0x5dd443 = _0x2141df.width;
          _0x28bba6 = _0x2141df.minWidth;
          _0x1ee85f = _0x2141df.maxWidth;
          _0x2141df.minWidth = _0x2141df.maxWidth = _0x2141df.width = _0x569268;
          _0x569268 = _0x198d3a.width;
          _0x2141df.width = _0x5dd443;
          _0x2141df.minWidth = _0x28bba6;
          _0x2141df.maxWidth = _0x1ee85f;
        }
      }
      return undefined !== _0x569268 ? _0x569268 + "" : _0x569268;
    }
    function _0x2b9e1c(_0x41dbd1, _0x24b7d2) {
      return {
        get: function () {
          return _0x41dbd1()
            ? void delete this.get
            : (this.get = _0x24b7d2).apply(this, arguments);
        },
      };
    }
    function _0x4bb46d(_0x3e18ce) {
      var _0x5bc1c1 = _0xca1637.cssProps[_0x3e18ce];
      if (!_0x5bc1c1) {
        var _0x5bc1c1 = _0xca1637.cssProps;
        var _0x40cdb0;
        _0x40cdb0 = _0x3e18ce;
        _0x3514b4: if (!(_0x40cdb0 in _0xd4d403)) {
          var _0x2d1a04 = _0x40cdb0[0x0].toUpperCase() + _0x40cdb0.slice(0x1);
          for (var _0x5bdacf = _0x17c339.length; _0x5bdacf--; ) {
            _0x40cdb0 = _0x17c339[_0x5bdacf] + _0x2d1a04;
            if (_0x40cdb0 in _0xd4d403) {
              break _0x3514b4;
            }
          }
          _0x40cdb0 = undefined;
        }
        _0x5bc1c1 = _0x5bc1c1[_0x3e18ce] = _0x40cdb0 || _0x3e18ce;
      }
      return _0x5bc1c1;
    }
    function _0x117926(_0x5be767, _0x5d9e58, _0x5a96f3) {
      return (_0x5be767 = _0xfc4a92.exec(_0x5d9e58))
        ? Math.max(0x0, _0x5be767[0x2] - (_0x5a96f3 || 0x0)) +
            (_0x5be767[0x3] || "px")
        : _0x5d9e58;
    }
    function _0x4ba426(_0x5e5b99, _0x44ea23, _0x561acf, _0x308596, _0x3e29a0) {
      var _0xf2f541 = 0x0;
      for (
        _0x44ea23 =
          _0x561acf === (_0x308596 ? "border" : "content")
            ? 0x4
            : "width" === _0x44ea23
            ? 0x1
            : 0x0;
        0x4 > _0x44ea23;
        _0x44ea23 += 0x2
      ) {
        if ("margin" === _0x561acf) {
          _0xf2f541 += _0xca1637.css(
            _0x5e5b99,
            _0x561acf + _0x175776[_0x44ea23],
            true,
            _0x3e29a0
          );
        }
        if (_0x308596) {
          if ("content" === _0x561acf) {
            _0xf2f541 -= _0xca1637.css(
              _0x5e5b99,
              "padding" + _0x175776[_0x44ea23],
              true,
              _0x3e29a0
            );
          }
          if ("margin" !== _0x561acf) {
            _0xf2f541 -= _0xca1637.css(
              _0x5e5b99,
              "border" + _0x175776[_0x44ea23] + "Width",
              true,
              _0x3e29a0
            );
          }
        } else {
          _0xf2f541 += _0xca1637.css(
            _0x5e5b99,
            "padding" + _0x175776[_0x44ea23],
            true,
            _0x3e29a0
          );
          if ("padding" !== _0x561acf) {
            _0xf2f541 += _0xca1637.css(
              _0x5e5b99,
              "border" + _0x175776[_0x44ea23] + "Width",
              true,
              _0x3e29a0
            );
          }
        }
      }
      return _0xf2f541;
    }
    function _0xf14a2d(_0x16f8b6, _0x8094be, _0x261ffa) {
      var _0x4716eb;
      var _0x2d55e2 = _0x5d6f53(_0x16f8b6);
      var _0x5161a1 = _0x130d43(_0x16f8b6, _0x8094be, _0x2d55e2);
      var _0x5890b2 =
        "border-box" ===
        _0xca1637.css(_0x16f8b6, "boxSizing", false, _0x2d55e2);
      return _0x5294c7.test(_0x5161a1)
        ? _0x5161a1
        : ((_0x4716eb =
            _0x5890b2 &&
            (_0x139b38.boxSizingReliable() ||
              _0x5161a1 === _0x16f8b6.style[_0x8094be])),
          "auto" === _0x5161a1 &&
            (_0x5161a1 =
              _0x16f8b6[
                "offset" + _0x8094be[0x0].toUpperCase() + _0x8094be.slice(0x1)
              ]),
          (_0x5161a1 = parseFloat(_0x5161a1) || 0x0),
          _0x5161a1 +
            _0x4ba426(
              _0x16f8b6,
              _0x8094be,
              _0x261ffa || (_0x5890b2 ? "border" : "content"),
              _0x4716eb,
              _0x2d55e2
            ) +
            "px");
    }
    function _0x5a6f0f(_0x12c3d6, _0x50b551, _0x136e5f, _0x18f646, _0x14c430) {
      return new _0x5a6f0f.prototype.init(
        _0x12c3d6,
        _0x50b551,
        _0x136e5f,
        _0x18f646,
        _0x14c430
      );
    }
    function _0x2b8505() {
      if (_0x3fc081) {
        if (false === _0x3abdcc.hidden && _0x64ec9a.requestAnimationFrame) {
          _0x64ec9a.requestAnimationFrame(_0x2b8505);
        } else {
          _0x64ec9a.setTimeout(_0x2b8505, _0xca1637.fx.interval);
        }
        _0xca1637.fx.tick();
      }
    }
    function _0x1049dd() {
      _0x64ec9a.setTimeout(function () {
        _0x583611 = undefined;
      });
      return (_0x583611 = _0xca1637.now());
    }
    function _0x5b2c6c(_0x5ed1ea, _0x103ee0) {
      var _0x3da1ba;
      var _0x59118e = 0x0;
      var _0x115f2a = {
        height: _0x5ed1ea,
      };
      for (
        _0x103ee0 = _0x103ee0 ? 0x1 : 0x0;
        0x4 > _0x59118e;
        _0x59118e += 0x2 - _0x103ee0
      ) {
        _0x3da1ba = _0x175776[_0x59118e];
        _0x115f2a["margin" + _0x3da1ba] = _0x115f2a["padding" + _0x3da1ba] =
          _0x5ed1ea;
      }
      if (_0x103ee0) {
        _0x115f2a.opacity = _0x115f2a.width = _0x5ed1ea;
      }
      return _0x115f2a;
    }
    function _0x2387b6(_0x2a6a48, _0x52c095, _0x319730) {
      var _0xff50df;
      var _0x1b06ca = (_0x26e6d7.tweeners[_0x52c095] || []).concat(
        _0x26e6d7.tweeners["*"]
      );
      var _0x4c3e28 = 0x0;
      for (
        var _0x527de1 = _0x1b06ca.length;
        _0x4c3e28 < _0x527de1;
        _0x4c3e28++
      ) {
        if (
          (_0xff50df = _0x1b06ca[_0x4c3e28].call(
            _0x319730,
            _0x52c095,
            _0x2a6a48
          ))
        ) {
          return _0xff50df;
        }
      }
    }
    function _0x26e6d7(_0x1125ed, _0x31bcf3, _0x3b9032) {
      var _0x79cff2;
      var _0x122881;
      var _0x5f1d49 = 0x0;
      var _0x46def5 = _0x26e6d7.prefilters.length;
      var _0x260883 = _0xca1637.Deferred().always(function () {
        delete _0x114996.elem;
      });
      var _0x114996 = function () {
        if (_0x122881) {
          return false;
        }
        var _0x428518 = _0x583611 || _0x1049dd();
        var _0x428518 = Math.max(
          0x0,
          _0x15cd78.startTime + _0x15cd78.duration - _0x428518
        );
        var _0x457b3a = 0x1 - (_0x428518 / _0x15cd78.duration || 0x0);
        var _0x185117 = 0x0;
        for (
          var _0x5091c5 = _0x15cd78.tweens.length;
          _0x185117 < _0x5091c5;
          _0x185117++
        ) {
          _0x15cd78.tweens[_0x185117].run(_0x457b3a);
        }
        _0x260883.notifyWith(_0x1125ed, [_0x15cd78, _0x457b3a, _0x428518]);
        return 0x1 > _0x457b3a && _0x5091c5
          ? _0x428518
          : (_0x5091c5 ||
              _0x260883.notifyWith(_0x1125ed, [_0x15cd78, 0x1, 0x0]),
            _0x260883.resolveWith(_0x1125ed, [_0x15cd78]),
            false);
      };
      var _0x15cd78 = _0x260883.promise({
        elem: _0x1125ed,
        props: _0xca1637.extend({}, _0x31bcf3),
        opts: _0xca1637.extend(
          true,
          {
            specialEasing: {},
            easing: _0xca1637.easing._default,
          },
          _0x3b9032
        ),
        originalProperties: _0x31bcf3,
        originalOptions: _0x3b9032,
        startTime: _0x583611 || _0x1049dd(),
        duration: _0x3b9032.duration,
        tweens: [],
        createTween: function (_0x3e7680, _0x5cf438) {
          var _0x5c4a62 = _0xca1637.Tween(
            _0x1125ed,
            _0x15cd78.opts,
            _0x3e7680,
            _0x5cf438,
            _0x15cd78.opts.specialEasing[_0x3e7680] || _0x15cd78.opts.easing
          );
          _0x15cd78.tweens.push(_0x5c4a62);
          return _0x5c4a62;
        },
        stop: function (_0x280be8) {
          var _0x2b53fa = 0x0;
          var _0x1b0493 = _0x280be8 ? _0x15cd78.tweens.length : 0x0;
          if (_0x122881) {
            return this;
          }
          for (_0x122881 = true; _0x2b53fa < _0x1b0493; _0x2b53fa++) {
            _0x15cd78.tweens[_0x2b53fa].run(0x1);
          }
          if (_0x280be8) {
            _0x260883.notifyWith(_0x1125ed, [_0x15cd78, 0x1, 0x0]);
            _0x260883.resolveWith(_0x1125ed, [_0x15cd78, _0x280be8]);
          } else {
            _0x260883.rejectWith(_0x1125ed, [_0x15cd78, _0x280be8]);
          }
          return this;
        },
      });
      _0x31bcf3 = _0x15cd78.props;
      _0x3b9032 = _0x15cd78.opts.specialEasing;
      var _0x290d1a;
      var _0x1c3bb9;
      var _0x51b70c;
      var _0x177b99;
      for (_0x79cff2 in _0x31bcf3) {
        _0x290d1a = _0xca1637.camelCase(_0x79cff2);
        _0x1c3bb9 = _0x3b9032[_0x290d1a];
        _0x51b70c = _0x31bcf3[_0x79cff2];
        if (Array.isArray(_0x51b70c)) {
          _0x1c3bb9 = _0x51b70c[0x1];
          _0x51b70c = _0x31bcf3[_0x79cff2] = _0x51b70c[0x0];
        }
        if (_0x79cff2 !== _0x290d1a) {
          _0x31bcf3[_0x290d1a] = _0x51b70c;
          delete _0x31bcf3[_0x79cff2];
        }
        _0x177b99 = _0xca1637.cssHooks[_0x290d1a];
        if (_0x177b99 && "expand" in _0x177b99) {
          _0x51b70c = _0x177b99.expand(_0x51b70c);
          delete _0x31bcf3[_0x290d1a];
          for (_0x79cff2 in _0x51b70c)
            if (!(_0x79cff2 in _0x31bcf3)) {
              _0x31bcf3[_0x79cff2] = _0x51b70c[_0x79cff2];
              _0x3b9032[_0x79cff2] = _0x1c3bb9;
            }
        } else {
          _0x3b9032[_0x290d1a] = _0x1c3bb9;
        }
      }
      for (; _0x5f1d49 < _0x46def5; _0x5f1d49++) {
        if (
          (_0x79cff2 = _0x26e6d7.prefilters[_0x5f1d49].call(
            _0x15cd78,
            _0x1125ed,
            _0x31bcf3,
            _0x15cd78.opts
          ))
        ) {
          if (_0xca1637.isFunction(_0x79cff2.stop)) {
            _0xca1637._queueHooks(_0x15cd78.elem, _0x15cd78.opts.queue).stop =
              _0xca1637.proxy(_0x79cff2.stop, _0x79cff2);
          }
          return _0x79cff2;
        }
      }
      _0xca1637.map(_0x31bcf3, _0x2387b6, _0x15cd78);
      if (_0xca1637.isFunction(_0x15cd78.opts.start)) {
        _0x15cd78.opts.start.call(_0x1125ed, _0x15cd78);
      }
      _0x15cd78
        .progress(_0x15cd78.opts.progress)
        .done(_0x15cd78.opts.done, _0x15cd78.opts.complete)
        .fail(_0x15cd78.opts.fail)
        .always(_0x15cd78.opts.always);
      _0xca1637.fx.timer(
        _0xca1637.extend(_0x114996, {
          elem: _0x1125ed,
          anim: _0x15cd78,
          queue: _0x15cd78.opts.queue,
        })
      );
      return _0x15cd78;
    }
    function _0x3221fb(_0x40bc74, _0x5c15a1, _0x4a29db, _0x34c288) {
      var _0x387709;
      if (Array.isArray(_0x5c15a1)) {
        _0xca1637.each(_0x5c15a1, function (_0x318f53, _0x162868) {
          if (_0x4a29db || /\[\]$/.test(_0x40bc74)) {
            _0x34c288(_0x40bc74, _0x162868);
          } else {
            _0x3221fb(
              _0x40bc74 +
                "[" +
                ("object" == typeof _0x162868 && null != _0x162868
                  ? _0x318f53
                  : "") +
                "]",
              _0x162868,
              _0x4a29db,
              _0x34c288
            );
          }
        });
      } else {
        if (_0x4a29db || "object" !== _0xca1637.type(_0x5c15a1)) {
          _0x34c288(_0x40bc74, _0x5c15a1);
        } else {
          for (_0x387709 in _0x5c15a1)
            _0x3221fb(
              _0x40bc74 + "[" + _0x387709 + "]",
              _0x5c15a1[_0x387709],
              _0x4a29db,
              _0x34c288
            );
        }
      }
    }
    function _0x410e34(_0x5f4081) {
      return function (_0x3b7268, _0x18c798) {
        if ("string" != typeof _0x3b7268) {
          _0x18c798 = _0x3b7268;
          _0x3b7268 = "*";
        }
        var _0x1d85d3;
        var _0x3eb613 = 0x0;
        var _0x274456 =
          _0x3b7268.toLowerCase().match(/[^\x20\t\r\n\f]+/g) || [];
        if (_0xca1637.isFunction(_0x18c798)) {
          for (; (_0x1d85d3 = _0x274456[_0x3eb613++]); ) {
            if ("+" === _0x1d85d3[0x0]) {
              _0x1d85d3 = _0x1d85d3.slice(0x1) || "*";
              (_0x5f4081[_0x1d85d3] = _0x5f4081[_0x1d85d3] || []).unshift(
                _0x18c798
              );
            } else {
              (_0x5f4081[_0x1d85d3] = _0x5f4081[_0x1d85d3] || []).push(
                _0x18c798
              );
            }
          }
        }
      };
    }
    function _0x445796(_0x447cc4, _0x5608c4, _0x570168, _0x582e7c) {
      function _0x7b9147(_0x54b8a1) {
        var _0x5df9d3;
        _0x4b97c8[_0x54b8a1] = true;
        _0xca1637.each(
          _0x447cc4[_0x54b8a1] || [],
          function (_0x28abe6, _0x24372d) {
            var _0x37b465 = _0x24372d(_0x5608c4, _0x570168, _0x582e7c);
            return "string" != typeof _0x37b465 ||
              _0x519331 ||
              _0x4b97c8[_0x37b465]
              ? _0x519331
                ? !(_0x5df9d3 = _0x37b465)
                : undefined
              : (_0x5608c4.dataTypes.unshift(_0x37b465),
                _0x7b9147(_0x37b465),
                false);
          }
        );
        return _0x5df9d3;
      }
      var _0x4b97c8 = {};
      var _0x519331 = _0x447cc4 === _0x1d8442;
      return (
        _0x7b9147(_0x5608c4.dataTypes[0x0]) ||
        (!_0x4b97c8["*"] && _0x7b9147("*"))
      );
    }
    function _0x127db2(_0x778f85, _0x1ee51e) {
      var _0x2009d4;
      var _0x342d23;
      var _0x4be436 = _0xca1637.ajaxSettings.flatOptions || {};
      for (_0x2009d4 in _0x1ee51e)
        if (undefined !== _0x1ee51e[_0x2009d4]) {
          (_0x4be436[_0x2009d4] ? _0x778f85 : _0x342d23 || (_0x342d23 = {}))[
            _0x2009d4
          ] = _0x1ee51e[_0x2009d4];
        }
      if (_0x342d23) {
        _0xca1637.extend(true, _0x778f85, _0x342d23);
      }
      return _0x778f85;
    }
    var _0x2b4f80 = [];
    var _0x3abdcc = _0x64ec9a.document;
    var _0x220367 = Object.getPrototypeOf;
    var _0x333421 = _0x2b4f80.slice;
    var _0x347fa8 = _0x2b4f80.concat;
    var _0x435d2c = _0x2b4f80.push;
    var _0x4338af = _0x2b4f80.indexOf;
    var _0x231cae = {};
    var _0x261dd2 = _0x231cae.toString;
    var _0x554b7b = _0x231cae.hasOwnProperty;
    var _0xab9f61 = _0x554b7b.toString;
    var _0x4be8a1 = _0xab9f61.call(Object);
    var _0x139b38 = {};
    var _0xca1637 = function (_0x2056fb, _0x35f011) {
      return new _0xca1637.fn.init(_0x2056fb, _0x35f011);
    };
    var _0x4d58c3 = function (_0x4d0e35, _0x26f896) {
      return _0x26f896.toUpperCase();
    };
    _0xca1637.fn = _0xca1637.prototype = {
      jquery: "3.2.1",
      constructor: _0xca1637,
      length: 0x0,
      toArray: function () {
        return _0x333421.call(this);
      },
      get: function (_0x57d868) {
        return null == _0x57d868
          ? _0x333421.call(this)
          : 0x0 > _0x57d868
          ? this[_0x57d868 + this.length]
          : this[_0x57d868];
      },
      pushStack: function (_0x3809b6) {
        _0x3809b6 = _0xca1637.merge(this.constructor(), _0x3809b6);
        _0x3809b6.prevObject = this;
        return _0x3809b6;
      },
      each: function (_0xe67865) {
        return _0xca1637.each(this, _0xe67865);
      },
      map: function (_0x5110ea) {
        return this.pushStack(
          _0xca1637.map(this, function (_0x19fbb7, _0x5f42d0) {
            return _0x5110ea.call(_0x19fbb7, _0x5f42d0, _0x19fbb7);
          })
        );
      },
      slice: function () {
        return this.pushStack(_0x333421.apply(this, arguments));
      },
      first: function () {
        return this.eq(0x0);
      },
      last: function () {
        return this.eq(-0x1);
      },
      eq: function (_0x2c5ee2) {
        var _0xbf33cd = this.length;
        _0x2c5ee2 = +_0x2c5ee2 + (0x0 > _0x2c5ee2 ? _0xbf33cd : 0x0);
        return this.pushStack(
          0x0 <= _0x2c5ee2 && _0x2c5ee2 < _0xbf33cd ? [this[_0x2c5ee2]] : []
        );
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: _0x435d2c,
      sort: _0x2b4f80.sort,
      splice: _0x2b4f80.splice,
    };
    _0xca1637.extend = _0xca1637.fn.extend = function () {
      var _0x4a3bdb;
      var _0x155c20;
      var _0x1b02d7;
      var _0x2394ff;
      var _0x16f9ed;
      var _0x333b7e;
      var _0x2dc084 = arguments[0x0] || {};
      var _0xc86a43 = 0x1;
      var _0x2bd0f1 = arguments.length;
      var _0xb0cef1 = false;
      if ("boolean" == typeof _0x2dc084) {
        _0xb0cef1 = _0x2dc084;
        _0x2dc084 = arguments[_0xc86a43] || {};
        _0xc86a43++;
      }
      if (!("object" == typeof _0x2dc084 || _0xca1637.isFunction(_0x2dc084))) {
        _0x2dc084 = {};
      }
      for (
        _0xc86a43 === _0x2bd0f1 && ((_0x2dc084 = this), _0xc86a43--);
        _0xc86a43 < _0x2bd0f1;
        _0xc86a43++
      ) {
        if (null != (_0x4a3bdb = arguments[_0xc86a43])) {
          for (_0x155c20 in _0x4a3bdb) {
            _0x1b02d7 = _0x2dc084[_0x155c20];
            _0x2394ff = _0x4a3bdb[_0x155c20];
            if (_0x2dc084 !== _0x2394ff) {
              if (
                _0xb0cef1 &&
                _0x2394ff &&
                (_0xca1637.isPlainObject(_0x2394ff) ||
                  (_0x16f9ed = Array.isArray(_0x2394ff)))
              ) {
                if (_0x16f9ed) {
                  _0x16f9ed = false;
                  _0x333b7e =
                    _0x1b02d7 && Array.isArray(_0x1b02d7) ? _0x1b02d7 : [];
                } else {
                  _0x333b7e =
                    _0x1b02d7 && _0xca1637.isPlainObject(_0x1b02d7)
                      ? _0x1b02d7
                      : {};
                }
                _0x2dc084[_0x155c20] = _0xca1637.extend(
                  _0xb0cef1,
                  _0x333b7e,
                  _0x2394ff
                );
              } else if (undefined !== _0x2394ff) {
                _0x2dc084[_0x155c20] = _0x2394ff;
              }
            }
          }
        }
      }
      return _0x2dc084;
    };
    _0xca1637.extend({
      expando: "jQuery" + ("3.2.1" + Math.random()).replace(/\D/g, ""),
      isReady: true,
      error: function (_0x45b04b) {
        throw Error(_0x45b04b);
      },
      noop: function () {},
      isFunction: function (_0x51da6f) {
        return "function" === _0xca1637.type(_0x51da6f);
      },
      isWindow: function (_0x47d930) {
        return null != _0x47d930 && _0x47d930 === _0x47d930.window;
      },
      isNumeric: function (_0x305aae) {
        var _0x114a30 = _0xca1637.type(_0x305aae);
        return (
          ("number" === _0x114a30 || "string" === _0x114a30) &&
          !isNaN(_0x305aae - parseFloat(_0x305aae))
        );
      },
      isPlainObject: function (_0x3cb040) {
        var _0x16ca8a;
        var _0x1f71db;
        return (
          !(!_0x3cb040 || "[object Object]" !== _0x261dd2.call(_0x3cb040)) &&
          (!(_0x16ca8a = _0x220367(_0x3cb040)) ||
            ((_0x1f71db =
              _0x554b7b.call(_0x16ca8a, "constructor") &&
              _0x16ca8a.constructor),
            "function" == typeof _0x1f71db &&
              _0xab9f61.call(_0x1f71db) === _0x4be8a1))
        );
      },
      isEmptyObject: function (_0x4e03e6) {
        for (var _0x11b549 in _0x4e03e6) return false;
        return true;
      },
      type: function (_0x1720eb) {
        return null == _0x1720eb
          ? _0x1720eb + ""
          : "object" == typeof _0x1720eb || "function" == typeof _0x1720eb
          ? _0x231cae[_0x261dd2.call(_0x1720eb)] || "object"
          : typeof _0x1720eb;
      },
      globalEval: function (_0x2bc555) {
        _0x414c6a(_0x2bc555);
      },
      camelCase: function (_0x28326b) {
        return _0x28326b
          .replace(/^-ms-/, "ms-")
          .replace(/-([a-z])/g, _0x4d58c3);
      },
      each: function (_0x54500b, _0x450fb0) {
        var _0x511872;
        var _0x3e203c = 0x0;
        if (_0x541106(_0x54500b)) {
          for (
            _0x511872 = _0x54500b.length;
            _0x3e203c < _0x511872 &&
            false !==
              _0x450fb0.call(
                _0x54500b[_0x3e203c],
                _0x3e203c,
                _0x54500b[_0x3e203c]
              );
            _0x3e203c++
          ) {}
        } else {
          for (_0x3e203c in _0x54500b)
            if (
              false ===
              _0x450fb0.call(
                _0x54500b[_0x3e203c],
                _0x3e203c,
                _0x54500b[_0x3e203c]
              )
            ) {
              break;
            }
        }
        return _0x54500b;
      },
      trim: function (_0xc437c0) {
        return null == _0xc437c0
          ? ""
          : (_0xc437c0 + "").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
      },
      makeArray: function (_0x3e064c, _0x4c3e8e) {
        var _0x57b997 = _0x4c3e8e || [];
        if (null != _0x3e064c) {
          if (_0x541106(Object(_0x3e064c))) {
            _0xca1637.merge(
              _0x57b997,
              "string" == typeof _0x3e064c ? [_0x3e064c] : _0x3e064c
            );
          } else {
            _0x435d2c.call(_0x57b997, _0x3e064c);
          }
        }
        return _0x57b997;
      },
      inArray: function (_0x25da63, _0xaa7ab3, _0x531cc9) {
        return null == _0xaa7ab3
          ? -0x1
          : _0x4338af.call(_0xaa7ab3, _0x25da63, _0x531cc9);
      },
      merge: function (_0x599a3e, _0x31a742) {
        var _0x57474b = +_0x31a742.length;
        var _0x38d631 = 0x0;
        for (
          var _0xb1ff5f = _0x599a3e.length;
          _0x38d631 < _0x57474b;
          _0x38d631++
        ) {
          _0x599a3e[_0xb1ff5f++] = _0x31a742[_0x38d631];
        }
        _0x599a3e.length = _0xb1ff5f;
        return _0x599a3e;
      },
      grep: function (_0x5ecc15, _0x51d99e, _0x3d0f99) {
        var _0x34f934 = [];
        var _0x5d0f8b = 0x0;
        var _0x2342a7 = _0x5ecc15.length;
        for (var _0x532458 = !_0x3d0f99; _0x5d0f8b < _0x2342a7; _0x5d0f8b++) {
          _0x3d0f99 = !_0x51d99e(_0x5ecc15[_0x5d0f8b], _0x5d0f8b);
          if (_0x3d0f99 !== _0x532458) {
            _0x34f934.push(_0x5ecc15[_0x5d0f8b]);
          }
        }
        return _0x34f934;
      },
      map: function (_0x560805, _0x17deec, _0xdbc66d) {
        var _0x422cff;
        var _0x1185c9;
        var _0x8bcf93 = 0x0;
        var _0x1e5c60 = [];
        if (_0x541106(_0x560805)) {
          for (
            _0x422cff = _0x560805.length;
            _0x8bcf93 < _0x422cff;
            _0x8bcf93++
          ) {
            _0x1185c9 = _0x17deec(_0x560805[_0x8bcf93], _0x8bcf93, _0xdbc66d);
            if (null != _0x1185c9) {
              _0x1e5c60.push(_0x1185c9);
            }
          }
        } else {
          for (_0x8bcf93 in _0x560805) {
            _0x1185c9 = _0x17deec(_0x560805[_0x8bcf93], _0x8bcf93, _0xdbc66d);
            if (null != _0x1185c9) {
              _0x1e5c60.push(_0x1185c9);
            }
          }
        }
        return _0x347fa8.apply([], _0x1e5c60);
      },
      guid: 0x1,
      proxy: function (_0x1dcd3a, _0xebcc8e) {
        var _0x38173c;
        var _0x20759;
        var _0x41d7aa;
        if ("string" == typeof _0xebcc8e) {
          _0x38173c = _0x1dcd3a[_0xebcc8e];
          _0xebcc8e = _0x1dcd3a;
          _0x1dcd3a = _0x38173c;
        }
        if (_0xca1637.isFunction(_0x1dcd3a)) {
          _0x20759 = _0x333421.call(arguments, 0x2);
          _0x41d7aa = function () {
            return _0x1dcd3a.apply(
              _0xebcc8e || this,
              _0x20759.concat(_0x333421.call(arguments))
            );
          };
          _0x41d7aa.guid = _0x1dcd3a.guid = _0x1dcd3a.guid || _0xca1637.guid++;
          return _0x41d7aa;
        }
      },
      now: Date.now,
      support: _0x139b38,
    });
    if ("function" == typeof Symbol) {
      _0xca1637.fn[Symbol.iterator] = _0x2b4f80[Symbol.iterator];
    }
    _0xca1637.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (_0x5d3555, _0x474750) {
        _0x231cae["[object " + _0x474750 + "]"] = _0x474750.toLowerCase();
      }
    );
    var _0x1f7270 = function (_0x45b712, _0xe058da, _0x8403c, _0x1639de) {
      var _0x14460f;
      var _0x41f699;
      var _0x568ced;
      var _0xa68cb2;
      var _0x9784cf;
      var _0x2d4311 = _0xe058da && _0xe058da.ownerDocument;
      var _0x2e140c = _0xe058da ? _0xe058da.nodeType : 0x9;
      _0x8403c = _0x8403c || [];
      if (
        "string" != typeof _0x45b712 ||
        !_0x45b712 ||
        (0x1 !== _0x2e140c && 0x9 !== _0x2e140c && 0xb !== _0x2e140c)
      ) {
        return _0x8403c;
      }
      if (
        !_0x1639de &&
        ((_0xe058da ? _0xe058da.ownerDocument || _0xe058da : _0x3b214c) !==
          _0xce6d35 && _0x44646d(_0xe058da),
        (_0xe058da = _0xe058da || _0xce6d35),
        _0x48a18b)
      ) {
        if (
          0xb !== _0x2e140c &&
          (_0xa68cb2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/.exec(_0x45b712))
        ) {
          if ((_0x14460f = _0xa68cb2[0x1])) {
            if (0x9 === _0x2e140c) {
              if (!(_0x41f699 = _0xe058da.getElementById(_0x14460f))) {
                return _0x8403c;
              }
              if (_0x41f699.id === _0x14460f) {
                _0x8403c.push(_0x41f699);
                return _0x8403c;
              }
            } else {
              if (
                _0x2d4311 &&
                (_0x41f699 = _0x2d4311.getElementById(_0x14460f)) &&
                _0x16804a(_0xe058da, _0x41f699) &&
                _0x41f699.id === _0x14460f
              ) {
                _0x8403c.push(_0x41f699);
                return _0x8403c;
              }
            }
          } else {
            if (_0xa68cb2[0x2]) {
              _0x597eb9.apply(
                _0x8403c,
                _0xe058da.getElementsByTagName(_0x45b712)
              );
              return _0x8403c;
            }
            if (
              (_0x14460f = _0xa68cb2[0x3]) &&
              _0x20be19.getElementsByClassName &&
              _0xe058da.getElementsByClassName
            ) {
              _0x597eb9.apply(
                _0x8403c,
                _0xe058da.getElementsByClassName(_0x14460f)
              );
              return _0x8403c;
            }
          }
        }
        if (
          _0x20be19.qsa &&
          !_0x1afead[_0x45b712 + " "] &&
          (!_0x48a7f5 || !_0x48a7f5.test(_0x45b712))
        ) {
          if (0x1 !== _0x2e140c) {
            _0x2d4311 = _0xe058da;
            _0x9784cf = _0x45b712;
          } else {
            if ("object" !== _0xe058da.nodeName.toLowerCase()) {
              if ((_0x568ced = _0xe058da.getAttribute("id"))) {
                _0x568ced = _0x568ced.replace(
                  /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                  _0x453f37
                );
              } else {
                _0xe058da.setAttribute("id", (_0x568ced = _0x31889c));
              }
              _0x41f699 = _0x53ec2c(_0x45b712);
              for (_0x14460f = _0x41f699.length; _0x14460f--; ) {
                _0x41f699[_0x14460f] =
                  "#" + _0x568ced + " " + _0x3a8ffa(_0x41f699[_0x14460f]);
              }
              _0x9784cf = _0x41f699.join(",");
              _0x2d4311 =
                (/[+~]/.test(_0x45b712) &&
                  _0xe058da.parentNode &&
                  "undefined" !=
                    typeof _0xe058da.parentNode.getElementsByTagName &&
                  _0xe058da.parentNode) ||
                _0xe058da;
            }
          }
          if (_0x9784cf) {
            try {
              _0x597eb9.apply(_0x8403c, _0x2d4311.querySelectorAll(_0x9784cf));
              return _0x8403c;
            } catch (_0x442961) {
            } finally {
              if (_0x568ced === _0x31889c) {
                _0xe058da.removeAttribute("id");
              }
            }
          }
        }
      }
      return _0x5256b3(
        _0x45b712.replace(
          /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
          "$1"
        ),
        _0xe058da,
        _0x8403c,
        _0x1639de
      );
    };
    var _0x5278c6 = function () {
      function _0x417308(_0xcbeaa0, _0x5e2a73) {
        if (_0x2b72e0.push(_0xcbeaa0 + " ") > _0x3f8cc7.cacheLength) {
          delete _0x417308[_0x2b72e0.shift()];
        }
        return (_0x417308[_0xcbeaa0 + " "] = _0x5e2a73);
      }
      var _0x2b72e0 = [];
      return _0x417308;
    };
    var _0x4a5d4d = function (_0x297e32) {
      _0x297e32[_0x31889c] = true;
      return _0x297e32;
    };
    var _0x165ebe = function (_0x5ee4da) {
      var _0x38e830 = _0xce6d35.createElement("fieldset");
      try {
        return !!_0x5ee4da(_0x38e830);
      } catch (_0x536b9f) {
        return false;
      } finally {
        if (_0x38e830.parentNode) {
          _0x38e830.parentNode.removeChild(_0x38e830);
        }
      }
    };
    var _0x5873df = function (_0x3c0414, _0x3fe0fd) {
      var _0x3dae67 = _0x3c0414.split("|");
      for (var _0x392664 = _0x3dae67.length; _0x392664--; ) {
        _0x3f8cc7.attrHandle[_0x3dae67[_0x392664]] = _0x3fe0fd;
      }
    };
    var _0x4d8e88 = function (_0x3bd2f5, _0x181a14) {
      var _0x5617e0 = _0x181a14 && _0x3bd2f5;
      var _0x1c4d1a =
        _0x5617e0 &&
        0x1 === _0x3bd2f5.nodeType &&
        0x1 === _0x181a14.nodeType &&
        _0x3bd2f5.sourceIndex - _0x181a14.sourceIndex;
      if (_0x1c4d1a) {
        return _0x1c4d1a;
      }
      if (_0x5617e0) {
        for (; (_0x5617e0 = _0x5617e0.nextSibling); ) {
          if (_0x5617e0 === _0x181a14) {
            return -0x1;
          }
        }
      }
      return _0x3bd2f5 ? 0x1 : -0x1;
    };
    var _0x260fbf = function (_0x5df970) {
      return function (_0x5501cb) {
        return (
          "input" === _0x5501cb.nodeName.toLowerCase() &&
          _0x5501cb.type === _0x5df970
        );
      };
    };
    var _0x4c08d3 = function (_0x1c3575) {
      return function (_0x4a9733) {
        var _0x28ac9f = _0x4a9733.nodeName.toLowerCase();
        return (
          ("input" === _0x28ac9f || "button" === _0x28ac9f) &&
          _0x4a9733.type === _0x1c3575
        );
      };
    };
    var _0x5baa35 = function (_0xb29a36) {
      return function (_0xed0523) {
        return "form" in _0xed0523
          ? _0xed0523.parentNode && false === _0xed0523.disabled
            ? "label" in _0xed0523
              ? "label" in _0xed0523.parentNode
                ? _0xed0523.parentNode.disabled === _0xb29a36
                : _0xed0523.disabled === _0xb29a36
              : _0xed0523.isDisabled === _0xb29a36 ||
                (_0xed0523.isDisabled !== !_0xb29a36 &&
                  _0xb31873(_0xed0523) === _0xb29a36)
            : _0xed0523.disabled === _0xb29a36
          : "label" in _0xed0523 && _0xed0523.disabled === _0xb29a36;
      };
    };
    var _0x46ac5c = function (_0x4f4525) {
      return _0x4a5d4d(function (_0x396d7b) {
        _0x396d7b = +_0x396d7b;
        return _0x4a5d4d(function (_0x719941, _0xa60bd5) {
          var _0x5150e0;
          var _0x5851c2 = _0x4f4525([], _0x719941.length, _0x396d7b);
          for (var _0x51c140 = _0x5851c2.length; _0x51c140--; ) {
            if (_0x719941[(_0x5150e0 = _0x5851c2[_0x51c140])]) {
              _0x719941[_0x5150e0] = !(_0xa60bd5[_0x5150e0] =
                _0x719941[_0x5150e0]);
            }
          }
        });
      });
    };
    var _0x4629ba = function () {};
    var _0x3a8ffa = function (_0x365747) {
      var _0x2db8a8 = 0x0;
      var _0x5cadaa = _0x365747.length;
      for (var _0x3ed66d = ""; _0x2db8a8 < _0x5cadaa; _0x2db8a8++) {
        _0x3ed66d += _0x365747[_0x2db8a8].value;
      }
      return _0x3ed66d;
    };
    var _0x2f77fc = function (_0x2fd3c8, _0x28e362, _0x2fcc5a) {
      var _0x5a1763 = _0x28e362.dir;
      var _0x354400 = _0x28e362.next;
      var _0x4c01dd = _0x354400 || _0x5a1763;
      var _0x1df8fa = _0x2fcc5a && "parentNode" === _0x4c01dd;
      var _0x104b19 = _0x2f9dd6++;
      return _0x28e362.first
        ? function (_0x2bb09f, _0x1b2554, _0x3a8dbb) {
            for (; (_0x2bb09f = _0x2bb09f[_0x5a1763]); ) {
              if (0x1 === _0x2bb09f.nodeType || _0x1df8fa) {
                return _0x2fd3c8(_0x2bb09f, _0x1b2554, _0x3a8dbb);
              }
            }
            return false;
          }
        : function (_0x213f6a, _0x5d4188, _0x3c0877) {
            var _0x2c4664;
            var _0x108139;
            var _0x3067cd;
            var _0xba0e0b = [_0x1f0bcd, _0x104b19];
            if (_0x3c0877) {
              for (; (_0x213f6a = _0x213f6a[_0x5a1763]); ) {
                if (
                  (0x1 === _0x213f6a.nodeType || _0x1df8fa) &&
                  _0x2fd3c8(_0x213f6a, _0x5d4188, _0x3c0877)
                ) {
                  return true;
                }
              }
            } else {
              for (; (_0x213f6a = _0x213f6a[_0x5a1763]); ) {
                if (0x1 === _0x213f6a.nodeType || _0x1df8fa) {
                  _0x3067cd =
                    _0x213f6a[_0x31889c] || (_0x213f6a[_0x31889c] = {});
                  _0x108139 =
                    _0x3067cd[_0x213f6a.uniqueID] ||
                    (_0x3067cd[_0x213f6a.uniqueID] = {});
                  if (
                    _0x354400 &&
                    _0x354400 === _0x213f6a.nodeName.toLowerCase()
                  ) {
                    _0x213f6a = _0x213f6a[_0x5a1763] || _0x213f6a;
                  } else {
                    if (
                      (_0x2c4664 = _0x108139[_0x4c01dd]) &&
                      _0x2c4664[0x0] === _0x1f0bcd &&
                      _0x2c4664[0x1] === _0x104b19
                    ) {
                      return (_0xba0e0b[0x2] = _0x2c4664[0x2]);
                    }
                    _0x108139[_0x4c01dd] = _0xba0e0b;
                    if (
                      (_0xba0e0b[0x2] = _0x2fd3c8(
                        _0x213f6a,
                        _0x5d4188,
                        _0x3c0877
                      ))
                    ) {
                      return true;
                    }
                  }
                }
              }
            }
            return false;
          };
    };
    var _0x1a581b = function (_0x3132cb) {
      return 0x1 < _0x3132cb.length
        ? function (_0x437115, _0x158e03, _0xbf6989) {
            for (var _0xad333e = _0x3132cb.length; _0xad333e--; ) {
              if (!_0x3132cb[_0xad333e](_0x437115, _0x158e03, _0xbf6989)) {
                return false;
              }
            }
            return true;
          }
        : _0x3132cb[0x0];
    };
    var _0x19b21c = function (
      _0x411465,
      _0x4cb86c,
      _0x34d53e,
      _0x318218,
      _0x1ee685
    ) {
      var _0x20553c;
      var _0x37aeb0 = [];
      var _0x1d389f = 0x0;
      var _0x2395b7 = _0x411465.length;
      for (
        var _0x4a40c1 = null != _0x4cb86c;
        _0x1d389f < _0x2395b7;
        _0x1d389f++
      ) {
        if ((_0x20553c = _0x411465[_0x1d389f])) {
          if (!(_0x34d53e && !_0x34d53e(_0x20553c, _0x318218, _0x1ee685))) {
            _0x37aeb0.push(_0x20553c);
            if (_0x4a40c1) {
              _0x4cb86c.push(_0x1d389f);
            }
          }
        }
      }
      return _0x37aeb0;
    };
    var _0x2f2006 = function (
      _0xa84f91,
      _0x11099a,
      _0x21f3b1,
      _0x4d992a,
      _0x37b9bf,
      _0x597a3f
    ) {
      if (_0x4d992a && !_0x4d992a[_0x31889c]) {
        _0x4d992a = _0x2f2006(_0x4d992a);
      }
      if (_0x37b9bf && !_0x37b9bf[_0x31889c]) {
        _0x37b9bf = _0x2f2006(_0x37b9bf, _0x597a3f);
      }
      return _0x4a5d4d(function (_0x3dc07e, _0x4d0181, _0x3e2244, _0x1d49ef) {
        var _0xfa54de;
        var _0x3733bd;
        var _0x3dbe30 = [];
        var _0x54c88c = [];
        var _0x26b57d = _0x4d0181.length;
        var _0x20c0e9;
        if (!(_0x20c0e9 = _0x3dc07e)) {
          _0x20c0e9 = _0x11099a || "*";
          var _0x115738 = _0x3e2244.nodeType ? [_0x3e2244] : _0x3e2244;
          var _0x752631 = [];
          var _0x47fdbe = 0x0;
          for (
            var _0x2c355e = _0x115738.length;
            _0x47fdbe < _0x2c355e;
            _0x47fdbe++
          ) {
            _0x1f7270(_0x20c0e9, _0x115738[_0x47fdbe], _0x752631);
          }
          _0x20c0e9 = _0x752631;
        }
        _0x20c0e9 =
          !_0xa84f91 || (!_0x3dc07e && _0x11099a)
            ? _0x20c0e9
            : _0x19b21c(_0x20c0e9, _0x3dbe30, _0xa84f91, _0x3e2244, _0x1d49ef);
        _0x115738 = _0x21f3b1
          ? _0x37b9bf || (_0x3dc07e ? _0xa84f91 : _0x26b57d || _0x4d992a)
            ? []
            : _0x4d0181
          : _0x20c0e9;
        if (_0x21f3b1) {
          _0x21f3b1(_0x20c0e9, _0x115738, _0x3e2244, _0x1d49ef);
        }
        if (_0x4d992a) {
          _0xfa54de = _0x19b21c(_0x115738, _0x54c88c);
          _0x4d992a(_0xfa54de, [], _0x3e2244, _0x1d49ef);
          for (_0x3e2244 = _0xfa54de.length; _0x3e2244--; ) {
            if ((_0x3733bd = _0xfa54de[_0x3e2244])) {
              _0x115738[_0x54c88c[_0x3e2244]] = !(_0x20c0e9[
                _0x54c88c[_0x3e2244]
              ] = _0x3733bd);
            }
          }
        }
        if (_0x3dc07e) {
          if (_0x37b9bf || _0xa84f91) {
            if (_0x37b9bf) {
              _0xfa54de = [];
              for (_0x3e2244 = _0x115738.length; _0x3e2244--; ) {
                if ((_0x3733bd = _0x115738[_0x3e2244])) {
                  _0xfa54de.push((_0x20c0e9[_0x3e2244] = _0x3733bd));
                }
              }
              _0x37b9bf(null, (_0x115738 = []), _0xfa54de, _0x1d49ef);
            }
            for (_0x3e2244 = _0x115738.length; _0x3e2244--; ) {
              if (
                (_0x3733bd = _0x115738[_0x3e2244]) &&
                -0x1 <
                  (_0xfa54de = _0x37b9bf
                    ? _0x352376(_0x3dc07e, _0x3733bd)
                    : _0x3dbe30[_0x3e2244])
              ) {
                _0x3dc07e[_0xfa54de] = !(_0x4d0181[_0xfa54de] = _0x3733bd);
              }
            }
          }
        } else {
          _0x115738 = _0x19b21c(
            _0x115738 === _0x4d0181
              ? _0x115738.splice(_0x26b57d, _0x115738.length)
              : _0x115738
          );
          if (_0x37b9bf) {
            _0x37b9bf(null, _0x4d0181, _0x115738, _0x1d49ef);
          } else {
            _0x597eb9.apply(_0x4d0181, _0x115738);
          }
        }
      });
    };
    var _0xc72b8c = function (_0xcf410b) {
      var _0x12b9c1;
      var _0x1af2c6;
      var _0x3955d2;
      var _0x374a73 = _0xcf410b.length;
      var _0x593bc3 = _0x3f8cc7.relative[_0xcf410b[0x0].type];
      _0x1af2c6 = _0x593bc3 || _0x3f8cc7.relative[" "];
      var _0x1ce8c0 = _0x593bc3 ? 0x1 : 0x0;
      var _0x102e03 = _0x2f77fc(
        function (_0x31f40a) {
          return _0x31f40a === _0x12b9c1;
        },
        _0x1af2c6,
        true
      );
      var _0x2db3c3 = _0x2f77fc(
        function (_0x2e887e) {
          return -0x1 < _0x352376(_0x12b9c1, _0x2e887e);
        },
        _0x1af2c6,
        true
      );
      for (
        var _0x44dd6d = [
          function (_0x58dfef, _0x1f382f, _0x3796cc) {
            _0x58dfef =
              (!_0x593bc3 && (_0x3796cc || _0x1f382f !== _0x4f05b4)) ||
              ((_0x12b9c1 = _0x1f382f).nodeType
                ? _0x102e03(_0x58dfef, _0x1f382f, _0x3796cc)
                : _0x2db3c3(_0x58dfef, _0x1f382f, _0x3796cc));
            _0x12b9c1 = null;
            return _0x58dfef;
          },
        ];
        _0x1ce8c0 < _0x374a73;
        _0x1ce8c0++
      ) {
        if ((_0x1af2c6 = _0x3f8cc7.relative[_0xcf410b[_0x1ce8c0].type])) {
          _0x44dd6d = [_0x2f77fc(_0x1a581b(_0x44dd6d), _0x1af2c6)];
        } else {
          _0x1af2c6 = _0x3f8cc7.filter[_0xcf410b[_0x1ce8c0].type].apply(
            null,
            _0xcf410b[_0x1ce8c0].matches
          );
          if (_0x1af2c6[_0x31889c]) {
            for (
              _0x3955d2 = ++_0x1ce8c0;
              _0x3955d2 < _0x374a73 &&
              !_0x3f8cc7.relative[_0xcf410b[_0x3955d2].type];
              _0x3955d2++
            ) {}
            return _0x2f2006(
              0x1 < _0x1ce8c0 && _0x1a581b(_0x44dd6d),
              0x1 < _0x1ce8c0 &&
                _0x3a8ffa(
                  _0xcf410b.slice(0x0, _0x1ce8c0 - 0x1).concat({
                    value: " " === _0xcf410b[_0x1ce8c0 - 0x2].type ? "*" : "",
                  })
                ).replace(
                  /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
                  "$1"
                ),
              _0x1af2c6,
              _0x1ce8c0 < _0x3955d2 &&
                _0xc72b8c(_0xcf410b.slice(_0x1ce8c0, _0x3955d2)),
              _0x3955d2 < _0x374a73 &&
                _0xc72b8c((_0xcf410b = _0xcf410b.slice(_0x3955d2))),
              _0x3955d2 < _0x374a73 && _0x3a8ffa(_0xcf410b)
            );
          }
          _0x44dd6d.push(_0x1af2c6);
        }
      }
      return _0x1a581b(_0x44dd6d);
    };
    var _0x20ce67;
    var _0x20be19;
    var _0x3f8cc7;
    var _0x977215;
    var _0x456073;
    var _0x53ec2c;
    var _0x2d714d;
    var _0x5256b3;
    var _0x4f05b4;
    var _0x4f8c44;
    var _0x2c3e4f;
    var _0x44646d;
    var _0xce6d35;
    var _0x5b4c4f;
    var _0x48a18b;
    var _0x48a7f5;
    var _0x1dc86b;
    var _0x1a8e3a;
    var _0x16804a;
    var _0x31889c = "sizzle" + 0x1 * new Date();
    var _0x3b214c = _0x64ec9a.document;
    var _0x1f0bcd = 0x0;
    var _0x2f9dd6 = 0x0;
    var _0x4579e5 = _0x5278c6();
    var _0x5bf4f6 = _0x5278c6();
    var _0x1afead = _0x5278c6();
    var _0x5ada3d = function (_0x53b150, _0x3bc3ee) {
      if (_0x53b150 === _0x3bc3ee) {
        _0x2c3e4f = true;
      }
      return 0x0;
    };
    var _0x57bc3b = {}.hasOwnProperty;
    var _0x475033 = [];
    var _0x5241b2 = _0x475033.pop;
    var _0x28a221 = _0x475033.push;
    var _0x597eb9 = _0x475033.push;
    var _0x3d7b25 = _0x475033.slice;
    var _0x352376 = function (_0x3cfe19, _0x579db1) {
      var _0x41bcf0 = 0x0;
      for (
        var _0xfbefb4 = _0x3cfe19.length;
        _0x41bcf0 < _0xfbefb4;
        _0x41bcf0++
      ) {
        if (_0x3cfe19[_0x41bcf0] === _0x579db1) {
          return _0x41bcf0;
        }
      }
      return -0x1;
    };
    var _0x423ad9 = RegExp(
      ":((?:\\\\.|[\\w-]|[^\0-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\0-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\0-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)"
    );
    var _0x1e6bab = {
      ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
      CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
      TAG: /^((?:\\.|[\w-]|[^\x00-\xa0])+|[*])/,
      ATTR: RegExp(
        "^\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\0-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\0-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\]"
      ),
      PSEUDO: RegExp(
        "^:((?:\\\\.|[\\w-]|[^\0-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\0-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\0-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)"
      ),
      CHILD: RegExp(
        "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)",
        "i"
      ),
      bool: RegExp(
        "^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$",
        "i"
      ),
      needsContext: RegExp(
        "^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)",
        "i"
      ),
    };
    var _0x24638b = function (_0x14e377, _0x478c46, _0x307d02) {
      _0x14e377 = "0x" + _0x478c46 - 0x10000;
      return _0x14e377 !== _0x14e377 || _0x307d02
        ? _0x478c46
        : 0x0 > _0x14e377
        ? String.fromCharCode(_0x14e377 + 0x10000)
        : String.fromCharCode(
            (_0x14e377 >> 0xa) | 0xd800,
            (0x3ff & _0x14e377) | 0xdc00
          );
    };
    var _0x453f37 = function (_0x195f1b, _0x2d75bc) {
      return _0x2d75bc
        ? "\0" === _0x195f1b
          ? "�"
          : _0x195f1b.slice(0x0, -0x1) +
            "\\" +
            _0x195f1b.charCodeAt(_0x195f1b.length - 0x1).toString(0x10) +
            " "
        : "\\" + _0x195f1b;
    };
    var _0x3a16bf = function () {
      _0x44646d();
    };
    var _0xb31873 = _0x2f77fc(
      function (_0x2aae6b) {
        return (
          true === _0x2aae6b.disabled &&
          ("form" in _0x2aae6b || "label" in _0x2aae6b)
        );
      },
      {
        dir: "parentNode",
        next: "legend",
      }
    );
    try {
      _0x597eb9.apply(
        (_0x475033 = _0x3d7b25.call(_0x3b214c.childNodes)),
        _0x3b214c.childNodes
      );
      _0x475033[_0x3b214c.childNodes.length].nodeType;
    } catch (_0x3066b1) {
      _0x597eb9 = {
        apply: _0x475033.length
          ? function (_0x48c729, _0x376765) {
              _0x28a221.apply(_0x48c729, _0x3d7b25.call(_0x376765));
            }
          : function (_0x126dde, _0x3ba9e8) {
              var _0x19ea37 = _0x126dde.length;
              for (
                var _0x216950 = 0x0;
                (_0x126dde[_0x19ea37++] = _0x3ba9e8[_0x216950++]);

              ) {}
              _0x126dde.length = _0x19ea37 - 0x1;
            },
      };
    }
    _0x20be19 = _0x1f7270.support = {};
    _0x456073 = _0x1f7270.isXML = function (_0x3e2080) {
      _0x3e2080 =
        _0x3e2080 && (_0x3e2080.ownerDocument || _0x3e2080).documentElement;
      return !!_0x3e2080 && "HTML" !== _0x3e2080.nodeName;
    };
    _0x44646d = _0x1f7270.setDocument = function (_0x4f9709) {
      var _0x525d62;
      var _0xcbd636;
      _0x4f9709 = _0x4f9709 ? _0x4f9709.ownerDocument || _0x4f9709 : _0x3b214c;
      return _0x4f9709 !== _0xce6d35 &&
        0x9 === _0x4f9709.nodeType &&
        _0x4f9709.documentElement
        ? ((_0xce6d35 = _0x4f9709),
          (_0x5b4c4f = _0xce6d35.documentElement),
          (_0x48a18b = !_0x456073(_0xce6d35)),
          _0x3b214c !== _0xce6d35 &&
            (_0xcbd636 = _0xce6d35.defaultView) &&
            _0xcbd636.top !== _0xcbd636 &&
            (_0xcbd636.addEventListener
              ? _0xcbd636.addEventListener("unload", _0x3a16bf, false)
              : _0xcbd636.attachEvent &&
                _0xcbd636.attachEvent("onunload", _0x3a16bf)),
          (_0x20be19.attributes = _0x165ebe(function (_0x458cab) {
            _0x458cab.className = "i";
            return !_0x458cab.getAttribute("className");
          })),
          (_0x20be19.getElementsByTagName = _0x165ebe(function (_0x47f958) {
            _0x47f958.appendChild(_0xce6d35.createComment(""));
            return !_0x47f958.getElementsByTagName("*").length;
          })),
          (_0x20be19.getElementsByClassName = /^[^{]+\{\s*\[native \w/.test(
            _0xce6d35.getElementsByClassName
          )),
          (_0x20be19.getById = _0x165ebe(function (_0x5930c0) {
            _0x5b4c4f.appendChild(_0x5930c0).id = _0x31889c;
            return (
              !_0xce6d35.getElementsByName ||
              !_0xce6d35.getElementsByName(_0x31889c).length
            );
          })),
          _0x20be19.getById
            ? ((_0x3f8cc7.filter.ID = function (_0x5c17cb) {
                var _0x36c407 = _0x5c17cb.replace(
                  /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/gi,
                  _0x24638b
                );
                return function (_0x1e6cdd) {
                  return _0x1e6cdd.getAttribute("id") === _0x36c407;
                };
              }),
              (_0x3f8cc7.find.ID = function (_0x3197eb, _0x1d4553) {
                if (
                  "undefined" != typeof _0x1d4553.getElementById &&
                  _0x48a18b
                ) {
                  var _0x51d663 = _0x1d4553.getElementById(_0x3197eb);
                  return _0x51d663 ? [_0x51d663] : [];
                }
              }))
            : ((_0x3f8cc7.filter.ID = function (_0xd1f0d4) {
                var _0x29e923 = _0xd1f0d4.replace(
                  /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/gi,
                  _0x24638b
                );
                return function (_0x113650) {
                  return (
                    (_0x113650 =
                      "undefined" != typeof _0x113650.getAttributeNode &&
                      _0x113650.getAttributeNode("id")) &&
                    _0x113650.value === _0x29e923
                  );
                };
              }),
              (_0x3f8cc7.find.ID = function (_0x3a6376, _0x230a85) {
                if (
                  "undefined" != typeof _0x230a85.getElementById &&
                  _0x48a18b
                ) {
                  var _0xf1b46e;
                  var _0x300f00;
                  var _0x6e242c;
                  var _0x266eb4 = _0x230a85.getElementById(_0x3a6376);
                  if (_0x266eb4) {
                    _0xf1b46e = _0x266eb4.getAttributeNode("id");
                    if (_0xf1b46e && _0xf1b46e.value === _0x3a6376) {
                      return [_0x266eb4];
                    }
                    _0x6e242c = _0x230a85.getElementsByName(_0x3a6376);
                    for (
                      _0x300f00 = 0x0;
                      (_0x266eb4 = _0x6e242c[_0x300f00++]);

                    ) {
                      _0xf1b46e = _0x266eb4.getAttributeNode("id");
                      if (_0xf1b46e && _0xf1b46e.value === _0x3a6376) {
                        return [_0x266eb4];
                      }
                    }
                  }
                  return [];
                }
              })),
          (_0x3f8cc7.find.TAG = _0x20be19.getElementsByTagName
            ? function (_0x19bd01, _0x4e703c) {
                return "undefined" != typeof _0x4e703c.getElementsByTagName
                  ? _0x4e703c.getElementsByTagName(_0x19bd01)
                  : _0x20be19.qsa
                  ? _0x4e703c.querySelectorAll(_0x19bd01)
                  : undefined;
              }
            : function (_0x18239d, _0x164956) {
                var _0x3b74e1;
                var _0x4ae8b7 = [];
                var _0x420187 = 0x0;
                var _0x1aaf5a = _0x164956.getElementsByTagName(_0x18239d);
                if ("*" === _0x18239d) {
                  for (; (_0x3b74e1 = _0x1aaf5a[_0x420187++]); ) {
                    if (0x1 === _0x3b74e1.nodeType) {
                      _0x4ae8b7.push(_0x3b74e1);
                    }
                  }
                  return _0x4ae8b7;
                }
                return _0x1aaf5a;
              }),
          (_0x3f8cc7.find.CLASS =
            _0x20be19.getElementsByClassName &&
            function (_0x3b1fb2, _0xd6cc8a) {
              if (
                "undefined" != typeof _0xd6cc8a.getElementsByClassName &&
                _0x48a18b
              ) {
                return _0xd6cc8a.getElementsByClassName(_0x3b1fb2);
              }
            }),
          (_0x1dc86b = []),
          (_0x48a7f5 = []),
          (_0x20be19.qsa = /^[^{]+\{\s*\[native \w/.test(
            _0xce6d35.querySelectorAll
          )) &&
            (_0x165ebe(function (_0xdf1138) {
              _0x5b4c4f.appendChild(_0xdf1138).innerHTML =
                "<a id='" +
                _0x31889c +
                "'></a><select id='" +
                _0x31889c +
                "-\r\\' msallowcapture=''><option selected=''></option></select>";
              if (_0xdf1138.querySelectorAll("[msallowcapture^='']").length) {
                _0x48a7f5.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
              }
              if (!_0xdf1138.querySelectorAll("[selected]").length) {
                _0x48a7f5.push(
                  "\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)"
                );
              }
              if (
                !_0xdf1138.querySelectorAll("[id~=" + _0x31889c + "-]").length
              ) {
                _0x48a7f5.push("~=");
              }
              if (!_0xdf1138.querySelectorAll(":checked").length) {
                _0x48a7f5.push(":checked");
              }
              if (!_0xdf1138.querySelectorAll("a#" + _0x31889c + "+*").length) {
                _0x48a7f5.push(".#.+[+~]");
              }
            }),
            _0x165ebe(function (_0x9168eb) {
              _0x9168eb.innerHTML =
                "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
              var _0x68fbea = _0xce6d35.createElement("input");
              _0x68fbea.setAttribute("type", "hidden");
              _0x9168eb.appendChild(_0x68fbea).setAttribute("name", "D");
              if (_0x9168eb.querySelectorAll("[name=d]").length) {
                _0x48a7f5.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?=");
              }
              if (0x2 !== _0x9168eb.querySelectorAll(":enabled").length) {
                _0x48a7f5.push(":enabled", ":disabled");
              }
              _0x5b4c4f.appendChild(_0x9168eb).disabled = true;
              if (0x2 !== _0x9168eb.querySelectorAll(":disabled").length) {
                _0x48a7f5.push(":enabled", ":disabled");
              }
              _0x9168eb.querySelectorAll("*,:x");
              _0x48a7f5.push(",.*:");
            })),
          (_0x20be19.matchesSelector = /^[^{]+\{\s*\[native \w/.test(
            (_0x1a8e3a =
              _0x5b4c4f.matches ||
              _0x5b4c4f.webkitMatchesSelector ||
              _0x5b4c4f.mozMatchesSelector ||
              _0x5b4c4f.oMatchesSelector ||
              _0x5b4c4f.msMatchesSelector)
          )) &&
            _0x165ebe(function (_0x2093a0) {
              _0x20be19.disconnectedMatch = _0x1a8e3a.call(_0x2093a0, "*");
              _0x1a8e3a.call(_0x2093a0, "[s!='']:x");
              _0x1dc86b.push(
                "!=",
                ":((?:\\\\.|[\\w-]|[^\0-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\0-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\0-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)"
              );
            }),
          (_0x48a7f5 = _0x48a7f5.length && RegExp(_0x48a7f5.join("|"))),
          (_0x1dc86b = _0x1dc86b.length && RegExp(_0x1dc86b.join("|"))),
          (_0x525d62 = /^[^{]+\{\s*\[native \w/.test(
            _0x5b4c4f.compareDocumentPosition
          )),
          (_0x16804a =
            _0x525d62 || /^[^{]+\{\s*\[native \w/.test(_0x5b4c4f.contains)
              ? function (_0x5e1ddb, _0x23e73d) {
                  var _0x3dbf99 =
                    0x9 === _0x5e1ddb.nodeType
                      ? _0x5e1ddb.documentElement
                      : _0x5e1ddb;
                  var _0x3925ae = _0x23e73d && _0x23e73d.parentNode;
                  return (
                    _0x5e1ddb === _0x3925ae ||
                    !(
                      !_0x3925ae ||
                      0x1 !== _0x3925ae.nodeType ||
                      !(_0x3dbf99.contains
                        ? _0x3dbf99.contains(_0x3925ae)
                        : _0x5e1ddb.compareDocumentPosition &&
                          0x10 & _0x5e1ddb.compareDocumentPosition(_0x3925ae))
                    )
                  );
                }
              : function (_0x30df4d, _0x496bf2) {
                  if (_0x496bf2) {
                    for (; (_0x496bf2 = _0x496bf2.parentNode); ) {
                      if (_0x496bf2 === _0x30df4d) {
                        return true;
                      }
                    }
                  }
                  return false;
                }),
          (_0x5ada3d = _0x525d62
            ? function (_0x32a333, _0x476c24) {
                if (_0x32a333 === _0x476c24) {
                  _0x2c3e4f = true;
                  return 0x0;
                }
                var _0xdbc782 =
                  !_0x32a333.compareDocumentPosition -
                  !_0x476c24.compareDocumentPosition;
                return _0xdbc782
                  ? _0xdbc782
                  : ((_0xdbc782 =
                      (_0x32a333.ownerDocument || _0x32a333) ===
                      (_0x476c24.ownerDocument || _0x476c24)
                        ? _0x32a333.compareDocumentPosition(_0x476c24)
                        : 0x1),
                    0x1 & _0xdbc782 ||
                    (!_0x20be19.sortDetached &&
                      _0x476c24.compareDocumentPosition(_0x32a333) ===
                        _0xdbc782)
                      ? _0x32a333 === _0xce6d35 ||
                        (_0x32a333.ownerDocument === _0x3b214c &&
                          _0x16804a(_0x3b214c, _0x32a333))
                        ? -0x1
                        : _0x476c24 === _0xce6d35 ||
                          (_0x476c24.ownerDocument === _0x3b214c &&
                            _0x16804a(_0x3b214c, _0x476c24))
                        ? 0x1
                        : _0x4f8c44
                        ? _0x352376(_0x4f8c44, _0x32a333) -
                          _0x352376(_0x4f8c44, _0x476c24)
                        : 0x0
                      : 0x4 & _0xdbc782
                      ? -0x1
                      : 0x1);
              }
            : function (_0x30c4a6, _0x3680d6) {
                if (_0x30c4a6 === _0x3680d6) {
                  _0x2c3e4f = true;
                  return 0x0;
                }
                var _0x2ea26f;
                var _0x2ed9db = 0x0;
                _0x2ea26f = _0x30c4a6.parentNode;
                var _0x403ca2 = _0x3680d6.parentNode;
                var _0x513a16 = [_0x30c4a6];
                var _0x3e9260 = [_0x3680d6];
                if (!_0x2ea26f || !_0x403ca2) {
                  return _0x30c4a6 === _0xce6d35
                    ? -0x1
                    : _0x3680d6 === _0xce6d35
                    ? 0x1
                    : _0x2ea26f
                    ? -0x1
                    : _0x403ca2
                    ? 0x1
                    : _0x4f8c44
                    ? _0x352376(_0x4f8c44, _0x30c4a6) -
                      _0x352376(_0x4f8c44, _0x3680d6)
                    : 0x0;
                }
                if (_0x2ea26f === _0x403ca2) {
                  return _0x4d8e88(_0x30c4a6, _0x3680d6);
                }
                for (
                  _0x2ea26f = _0x30c4a6;
                  (_0x2ea26f = _0x2ea26f.parentNode);

                ) {
                  _0x513a16.unshift(_0x2ea26f);
                }
                for (
                  _0x2ea26f = _0x3680d6;
                  (_0x2ea26f = _0x2ea26f.parentNode);

                ) {
                  _0x3e9260.unshift(_0x2ea26f);
                }
                for (; _0x513a16[_0x2ed9db] === _0x3e9260[_0x2ed9db]; ) {
                  _0x2ed9db++;
                }
                return _0x2ed9db
                  ? _0x4d8e88(_0x513a16[_0x2ed9db], _0x3e9260[_0x2ed9db])
                  : _0x513a16[_0x2ed9db] === _0x3b214c
                  ? -0x1
                  : _0x3e9260[_0x2ed9db] === _0x3b214c
                  ? 0x1
                  : 0x0;
              }),
          _0xce6d35)
        : _0xce6d35;
    };
    _0x1f7270.matches = function (_0x16f693, _0x3c53a1) {
      return _0x1f7270(_0x16f693, null, null, _0x3c53a1);
    };
    _0x1f7270.matchesSelector = function (_0x422505, _0x5f00cb) {
      if ((_0x422505.ownerDocument || _0x422505) !== _0xce6d35) {
        _0x44646d(_0x422505);
      }
      _0x5f00cb = _0x5f00cb.replace(
        /=[\x20\t\r\n\f]*([^\]'"]*?)[\x20\t\r\n\f]*\]/g,
        "='$1']"
      );
      if (
        _0x20be19.matchesSelector &&
        _0x48a18b &&
        !_0x1afead[_0x5f00cb + " "] &&
        (!_0x1dc86b || !_0x1dc86b.test(_0x5f00cb)) &&
        (!_0x48a7f5 || !_0x48a7f5.test(_0x5f00cb))
      ) {
        try {
          var _0x480cca = _0x1a8e3a.call(_0x422505, _0x5f00cb);
          if (
            _0x480cca ||
            _0x20be19.disconnectedMatch ||
            (_0x422505.document && 0xb !== _0x422505.document.nodeType)
          ) {
            return _0x480cca;
          }
        } catch (_0x5eb8c0) {}
      }
      return 0x0 < _0x1f7270(_0x5f00cb, _0xce6d35, null, [_0x422505]).length;
    };
    _0x1f7270.contains = function (_0x466676, _0x58a79a) {
      if ((_0x466676.ownerDocument || _0x466676) !== _0xce6d35) {
        _0x44646d(_0x466676);
      }
      return _0x16804a(_0x466676, _0x58a79a);
    };
    _0x1f7270.attr = function (_0x2804f2, _0x43bc72) {
      if ((_0x2804f2.ownerDocument || _0x2804f2) !== _0xce6d35) {
        _0x44646d(_0x2804f2);
      }
      var _0x3c8edd = _0x3f8cc7.attrHandle[_0x43bc72.toLowerCase()];
      var _0x3c8edd =
        _0x3c8edd &&
        _0x57bc3b.call(_0x3f8cc7.attrHandle, _0x43bc72.toLowerCase())
          ? _0x3c8edd(_0x2804f2, _0x43bc72, !_0x48a18b)
          : undefined;
      return undefined !== _0x3c8edd
        ? _0x3c8edd
        : _0x20be19.attributes || !_0x48a18b
        ? _0x2804f2.getAttribute(_0x43bc72)
        : (_0x3c8edd = _0x2804f2.getAttributeNode(_0x43bc72)) &&
          _0x3c8edd.specified
        ? _0x3c8edd.value
        : null;
    };
    _0x1f7270.escape = function (_0x2a2eed) {
      return (_0x2a2eed + "").replace(
        /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        _0x453f37
      );
    };
    _0x1f7270.error = function (_0x151e05) {
      throw Error("Syntax error, unrecognized expression: " + _0x151e05);
    };
    _0x1f7270.uniqueSort = function (_0x1aaf7e) {
      var _0x360106;
      var _0x5f4d0d = [];
      var _0x2da003 = 0x0;
      var _0x5e7273 = 0x0;
      _0x2c3e4f = !_0x20be19.detectDuplicates;
      _0x4f8c44 = !_0x20be19.sortStable && _0x1aaf7e.slice(0x0);
      _0x1aaf7e.sort(_0x5ada3d);
      if (_0x2c3e4f) {
        for (; (_0x360106 = _0x1aaf7e[_0x5e7273++]); ) {
          if (_0x360106 === _0x1aaf7e[_0x5e7273]) {
            _0x2da003 = _0x5f4d0d.push(_0x5e7273);
          }
        }
        for (; _0x2da003--; ) {
          _0x1aaf7e.splice(_0x5f4d0d[_0x2da003], 0x1);
        }
      }
      _0x4f8c44 = null;
      return _0x1aaf7e;
    };
    _0x977215 = _0x1f7270.getText = function (_0x1e22a6) {
      var _0x1a19ec;
      var _0x1d07c6 = "";
      var _0x6b1d65 = 0x0;
      if ((_0x1a19ec = _0x1e22a6.nodeType)) {
        if (0x1 === _0x1a19ec || 0x9 === _0x1a19ec || 0xb === _0x1a19ec) {
          if ("string" == typeof _0x1e22a6.textContent) {
            return _0x1e22a6.textContent;
          }
          for (
            _0x1e22a6 = _0x1e22a6.firstChild;
            _0x1e22a6;
            _0x1e22a6 = _0x1e22a6.nextSibling
          ) {
            _0x1d07c6 += _0x977215(_0x1e22a6);
          }
        } else {
          if (0x3 === _0x1a19ec || 0x4 === _0x1a19ec) {
            return _0x1e22a6.nodeValue;
          }
        }
      } else {
        for (; (_0x1a19ec = _0x1e22a6[_0x6b1d65++]); ) {
          _0x1d07c6 += _0x977215(_0x1a19ec);
        }
      }
      return _0x1d07c6;
    };
    _0x3f8cc7 = _0x1f7270.selectors = {
      cacheLength: 0x32,
      createPseudo: _0x4a5d4d,
      match: _0x1e6bab,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: true,
        },
        " ": {
          dir: "parentNode",
        },
        "+": {
          dir: "previousSibling",
          first: true,
        },
        "~": {
          dir: "previousSibling",
        },
      },
      preFilter: {
        ATTR: function (_0x562ce4) {
          _0x562ce4[0x1] = _0x562ce4[0x1].replace(
            /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/gi,
            _0x24638b
          );
          _0x562ce4[0x3] = (
            _0x562ce4[0x3] ||
            _0x562ce4[0x4] ||
            _0x562ce4[0x5] ||
            ""
          ).replace(
            /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/gi,
            _0x24638b
          );
          if ("~=" === _0x562ce4[0x2]) {
            _0x562ce4[0x3] = " " + _0x562ce4[0x3] + " ";
          }
          return _0x562ce4.slice(0x0, 0x4);
        },
        CHILD: function (_0x1163c7) {
          _0x1163c7[0x1] = _0x1163c7[0x1].toLowerCase();
          if ("nth" === _0x1163c7[0x1].slice(0x0, 0x3)) {
            if (!_0x1163c7[0x3]) {
              _0x1f7270.error(_0x1163c7[0x0]);
            }
            _0x1163c7[0x4] = +(_0x1163c7[0x4]
              ? _0x1163c7[0x5] + (_0x1163c7[0x6] || 0x1)
              : 0x2 * ("even" === _0x1163c7[0x3] || "odd" === _0x1163c7[0x3]));
            _0x1163c7[0x5] = +(
              _0x1163c7[0x7] + _0x1163c7[0x8] || "odd" === _0x1163c7[0x3]
            );
          } else if (_0x1163c7[0x3]) {
            _0x1f7270.error(_0x1163c7[0x0]);
          }
          return _0x1163c7;
        },
        PSEUDO: function (_0x40a0f5) {
          var _0x752920;
          var _0x136077 = !_0x40a0f5[0x6] && _0x40a0f5[0x2];
          return _0x1e6bab.CHILD.test(_0x40a0f5[0x0])
            ? null
            : (_0x40a0f5[0x3]
                ? (_0x40a0f5[0x2] = _0x40a0f5[0x4] || _0x40a0f5[0x5] || "")
                : _0x136077 &&
                  _0x423ad9.test(_0x136077) &&
                  (_0x752920 = _0x53ec2c(_0x136077, true)) &&
                  (_0x752920 =
                    _0x136077.indexOf(")", _0x136077.length - _0x752920) -
                    _0x136077.length) &&
                  ((_0x40a0f5[0x0] = _0x40a0f5[0x0].slice(0x0, _0x752920)),
                  (_0x40a0f5[0x2] = _0x136077.slice(0x0, _0x752920))),
              _0x40a0f5.slice(0x0, 0x3));
        },
      },
      filter: {
        TAG: function (_0x3c82bf) {
          var _0x4cb514 = _0x3c82bf
            .replace(
              /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/gi,
              _0x24638b
            )
            .toLowerCase();
          return "*" === _0x3c82bf
            ? function () {
                return true;
              }
            : function (_0x5886aa) {
                return (
                  _0x5886aa.nodeName &&
                  _0x5886aa.nodeName.toLowerCase() === _0x4cb514
                );
              };
        },
        CLASS: function (_0x281081) {
          var _0x378348 = _0x4579e5[_0x281081 + " "];
          return (
            _0x378348 ||
            ((_0x378348 = RegExp(
              "(^|[\\x20\\t\\r\\n\\f])" + _0x281081 + "([\\x20\\t\\r\\n\\f]|$)"
            )) &&
              _0x4579e5(_0x281081, function (_0x36ce58) {
                return _0x378348.test(
                  ("string" == typeof _0x36ce58.className &&
                    _0x36ce58.className) ||
                    ("undefined" != typeof _0x36ce58.getAttribute &&
                      _0x36ce58.getAttribute("class")) ||
                    ""
                );
              }))
          );
        },
        ATTR: function (_0x44a0dd, _0x3bb96c, _0x3218bc) {
          return function (_0x9cd4f6) {
            _0x9cd4f6 = _0x1f7270.attr(_0x9cd4f6, _0x44a0dd);
            return null == _0x9cd4f6
              ? "!=" === _0x3bb96c
              : !_0x3bb96c ||
                  ((_0x9cd4f6 += ""),
                  "=" === _0x3bb96c
                    ? _0x9cd4f6 === _0x3218bc
                    : "!=" === _0x3bb96c
                    ? _0x9cd4f6 !== _0x3218bc
                    : "^=" === _0x3bb96c
                    ? _0x3218bc && 0x0 === _0x9cd4f6.indexOf(_0x3218bc)
                    : "*=" === _0x3bb96c
                    ? _0x3218bc && -0x1 < _0x9cd4f6.indexOf(_0x3218bc)
                    : "$=" === _0x3bb96c
                    ? _0x3218bc &&
                      _0x9cd4f6.slice(-_0x3218bc.length) === _0x3218bc
                    : "~=" === _0x3bb96c
                    ? -0x1 <
                      (
                        " " +
                        _0x9cd4f6.replace(/[\x20\t\r\n\f]+/g, " ") +
                        " "
                      ).indexOf(_0x3218bc)
                    : "|=" === _0x3bb96c &&
                      (_0x9cd4f6 === _0x3218bc ||
                        _0x9cd4f6.slice(0x0, _0x3218bc.length + 0x1) ===
                          _0x3218bc + "-"));
          };
        },
        CHILD: function (
          _0x2f9461,
          _0x3fa9b0,
          _0x454762,
          _0x4a1478,
          _0x5af52b
        ) {
          var _0x1e2cd2 = "nth" !== _0x2f9461.slice(0x0, 0x3);
          var _0x192c1c = "last" !== _0x2f9461.slice(-0x4);
          var _0x58a37a = "of-type" === _0x3fa9b0;
          return 0x1 === _0x4a1478 && 0x0 === _0x5af52b
            ? function (_0x1e1e0d) {
                return !!_0x1e1e0d.parentNode;
              }
            : function (_0x1374a8, _0x1573b4, _0x1b8736) {
                var _0x37ed37;
                var _0x2fa05a;
                var _0x1efb6a;
                var _0x540951;
                var _0x1c5d82;
                var _0xd07479;
                _0x1573b4 =
                  _0x1e2cd2 !== _0x192c1c ? "nextSibling" : "previousSibling";
                var _0x499008 = _0x1374a8.parentNode;
                var _0x1d836c = _0x58a37a && _0x1374a8.nodeName.toLowerCase();
                _0x1b8736 = !_0x1b8736 && !_0x58a37a;
                var _0x2c9ffc = false;
                if (_0x499008) {
                  if (_0x1e2cd2) {
                    for (; _0x1573b4; ) {
                      for (
                        _0x540951 = _0x1374a8;
                        (_0x540951 = _0x540951[_0x1573b4]);

                      ) {
                        if (
                          _0x58a37a
                            ? _0x540951.nodeName.toLowerCase() === _0x1d836c
                            : 0x1 === _0x540951.nodeType
                        ) {
                          return false;
                        }
                      }
                      _0xd07479 = _0x1573b4 =
                        "only" === _0x2f9461 && !_0xd07479 && "nextSibling";
                    }
                    return true;
                  }
                  _0xd07479 = [
                    _0x192c1c ? _0x499008.firstChild : _0x499008.lastChild,
                  ];
                  if (_0x192c1c && _0x1b8736) {
                    _0x540951 = _0x499008;
                    _0x1efb6a =
                      _0x540951[_0x31889c] || (_0x540951[_0x31889c] = {});
                    _0x2fa05a =
                      _0x1efb6a[_0x540951.uniqueID] ||
                      (_0x1efb6a[_0x540951.uniqueID] = {});
                    _0x37ed37 = _0x2fa05a[_0x2f9461] || [];
                    _0x2c9ffc =
                      (_0x1c5d82 =
                        _0x37ed37[0x0] === _0x1f0bcd && _0x37ed37[0x1]) &&
                      _0x37ed37[0x2];
                    for (
                      _0x540951 = _0x1c5d82 && _0x499008.childNodes[_0x1c5d82];
                      (_0x540951 =
                        (++_0x1c5d82 && _0x540951 && _0x540951[_0x1573b4]) ||
                        (_0x2c9ffc = _0x1c5d82 = 0x0) ||
                        _0xd07479.pop());

                    ) {
                      if (
                        0x1 === _0x540951.nodeType &&
                        ++_0x2c9ffc &&
                        _0x540951 === _0x1374a8
                      ) {
                        _0x2fa05a[_0x2f9461] = [
                          _0x1f0bcd,
                          _0x1c5d82,
                          _0x2c9ffc,
                        ];
                        break;
                      }
                    }
                  } else {
                    if (_0x1b8736) {
                      _0x540951 = _0x1374a8;
                      _0x1efb6a =
                        _0x540951[_0x31889c] || (_0x540951[_0x31889c] = {});
                      _0x2fa05a =
                        _0x1efb6a[_0x540951.uniqueID] ||
                        (_0x1efb6a[_0x540951.uniqueID] = {});
                      _0x37ed37 = _0x2fa05a[_0x2f9461] || [];
                      _0x1c5d82 =
                        _0x37ed37[0x0] === _0x1f0bcd && _0x37ed37[0x1];
                      _0x2c9ffc = _0x1c5d82;
                    }
                    if (false === _0x2c9ffc) {
                      for (
                        ;
                        (_0x540951 =
                          (++_0x1c5d82 && _0x540951 && _0x540951[_0x1573b4]) ||
                          (_0x2c9ffc = _0x1c5d82 = 0x0) ||
                          _0xd07479.pop()) &&
                        (!(_0x58a37a
                          ? _0x540951.nodeName.toLowerCase() === _0x1d836c
                          : 0x1 === _0x540951.nodeType) ||
                          !++_0x2c9ffc ||
                          !(_0x1b8736 &&
                            ((_0x1efb6a =
                              _0x540951[_0x31889c] ||
                              (_0x540951[_0x31889c] = {})),
                            (_0x2fa05a =
                              _0x1efb6a[_0x540951.uniqueID] ||
                              (_0x1efb6a[_0x540951.uniqueID] = {})),
                            (_0x2fa05a[_0x2f9461] = [_0x1f0bcd, _0x2c9ffc])),
                          _0x540951 === _0x1374a8));

                      ) {}
                    }
                  }
                  _0x2c9ffc -= _0x5af52b;
                  return (
                    _0x2c9ffc === _0x4a1478 ||
                    (0x0 === _0x2c9ffc % _0x4a1478 &&
                      0x0 <= _0x2c9ffc / _0x4a1478)
                  );
                }
              };
        },
        PSEUDO: function (_0x455efb, _0x390beb) {
          var _0x7d1f88;
          var _0x4fe371 =
            _0x3f8cc7.pseudos[_0x455efb] ||
            _0x3f8cc7.setFilters[_0x455efb.toLowerCase()] ||
            _0x1f7270.error("unsupported pseudo: " + _0x455efb);
          return _0x4fe371[_0x31889c]
            ? _0x4fe371(_0x390beb)
            : 0x1 < _0x4fe371.length
            ? ((_0x7d1f88 = [_0x455efb, _0x455efb, "", _0x390beb]),
              _0x3f8cc7.setFilters.hasOwnProperty(_0x455efb.toLowerCase())
                ? _0x4a5d4d(function (_0x57dd52, _0x379c63) {
                    var _0x495843;
                    var _0x405913 = _0x4fe371(_0x57dd52, _0x390beb);
                    for (var _0x569639 = _0x405913.length; _0x569639--; ) {
                      _0x495843 = _0x352376(_0x57dd52, _0x405913[_0x569639]);
                      _0x57dd52[_0x495843] = !(_0x379c63[_0x495843] =
                        _0x405913[_0x569639]);
                    }
                  })
                : function (_0x554d73) {
                    return _0x4fe371(_0x554d73, 0x0, _0x7d1f88);
                  })
            : _0x4fe371;
        },
      },
      pseudos: {
        not: _0x4a5d4d(function (_0x1c0060) {
          var _0x3fd038 = [];
          var _0x49f37b = [];
          var _0x35a2a6 = _0x2d714d(
            _0x1c0060.replace(
              /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
              "$1"
            )
          );
          return _0x35a2a6[_0x31889c]
            ? _0x4a5d4d(function (_0x4376eb, _0x200e37, _0x2e76b4, _0x299740) {
                var _0x4aee53;
                _0x2e76b4 = _0x35a2a6(_0x4376eb, null, _0x299740, []);
                for (_0x299740 = _0x4376eb.length; _0x299740--; ) {
                  if ((_0x4aee53 = _0x2e76b4[_0x299740])) {
                    _0x4376eb[_0x299740] = !(_0x200e37[_0x299740] = _0x4aee53);
                  }
                }
              })
            : function (_0x55d179, _0x2da376, _0x13569f) {
                _0x3fd038[0x0] = _0x55d179;
                _0x35a2a6(_0x3fd038, null, _0x13569f, _0x49f37b);
                _0x3fd038[0x0] = null;
                return !_0x49f37b.pop();
              };
        }),
        has: _0x4a5d4d(function (_0x6c07c2) {
          return function (_0x14113b) {
            return 0x0 < _0x1f7270(_0x6c07c2, _0x14113b).length;
          };
        }),
        contains: _0x4a5d4d(function (_0x1be805) {
          _0x1be805 = _0x1be805.replace(
            /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/gi,
            _0x24638b
          );
          return function (_0x2b82e4) {
            return (
              -0x1 <
              (
                _0x2b82e4.textContent ||
                _0x2b82e4.innerText ||
                _0x977215(_0x2b82e4)
              ).indexOf(_0x1be805)
            );
          };
        }),
        lang: _0x4a5d4d(function (_0x544a1f) {
          if (!/^(?:\\.|[\w-]|[^\x00-\xa0])+$/.test(_0x544a1f || "")) {
            _0x1f7270.error("unsupported lang: " + _0x544a1f);
          }
          _0x544a1f = _0x544a1f
            .replace(
              /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/gi,
              _0x24638b
            )
            .toLowerCase();
          return function (_0x8aeee6) {
            var _0x266da1;
            do {
              if (
                (_0x266da1 = _0x48a18b
                  ? _0x8aeee6.lang
                  : _0x8aeee6.getAttribute("xml:lang") ||
                    _0x8aeee6.getAttribute("lang"))
              ) {
                _0x266da1 = _0x266da1.toLowerCase();
                return (
                  _0x266da1 === _0x544a1f ||
                  0x0 === _0x266da1.indexOf(_0x544a1f + "-")
                );
              }
            } while ((_0x8aeee6 = _0x8aeee6.parentNode) && 0x1 === _0x8aeee6.nodeType);
            return false;
          };
        }),
        target: function (_0x16dfb2) {
          var _0xb26e02 = _0x64ec9a.location && _0x64ec9a.location.hash;
          return _0xb26e02 && _0xb26e02.slice(0x1) === _0x16dfb2.id;
        },
        root: function (_0xcd87ff) {
          return _0xcd87ff === _0x5b4c4f;
        },
        focus: function (_0x547474) {
          return (
            _0x547474 === _0xce6d35.activeElement &&
            (!_0xce6d35.hasFocus || _0xce6d35.hasFocus()) &&
            !(!_0x547474.type && !_0x547474.href && !~_0x547474.tabIndex)
          );
        },
        enabled: _0x5baa35(false),
        disabled: _0x5baa35(true),
        checked: function (_0x568714) {
          var _0x49092b = _0x568714.nodeName.toLowerCase();
          return (
            ("input" === _0x49092b && !!_0x568714.checked) ||
            ("option" === _0x49092b && !!_0x568714.selected)
          );
        },
        selected: function (_0x314470) {
          if (_0x314470.parentNode) {
            _0x314470.parentNode.selectedIndex;
          }
          return true === _0x314470.selected;
        },
        empty: function (_0x5bbf6e) {
          for (
            _0x5bbf6e = _0x5bbf6e.firstChild;
            _0x5bbf6e;
            _0x5bbf6e = _0x5bbf6e.nextSibling
          ) {
            if (0x6 > _0x5bbf6e.nodeType) {
              return false;
            }
          }
          return true;
        },
        parent: function (_0x28a183) {
          return !_0x3f8cc7.pseudos.empty(_0x28a183);
        },
        header: function (_0x36ded8) {
          return /^h\d$/i.test(_0x36ded8.nodeName);
        },
        input: function (_0x4434b1) {
          return /^(?:input|select|textarea|button)$/i.test(_0x4434b1.nodeName);
        },
        button: function (_0x4adbcb) {
          var _0x207398 = _0x4adbcb.nodeName.toLowerCase();
          return (
            ("input" === _0x207398 && "button" === _0x4adbcb.type) ||
            "button" === _0x207398
          );
        },
        text: function (_0xb7bcae) {
          var _0x3fd202;
          return (
            "input" === _0xb7bcae.nodeName.toLowerCase() &&
            "text" === _0xb7bcae.type &&
            (null == (_0x3fd202 = _0xb7bcae.getAttribute("type")) ||
              "text" === _0x3fd202.toLowerCase())
          );
        },
        first: _0x46ac5c(function () {
          return [0x0];
        }),
        last: _0x46ac5c(function (_0x59c9f1, _0x1d777d) {
          return [_0x1d777d - 0x1];
        }),
        eq: _0x46ac5c(function (_0xc632e3, _0x10a720, _0x4dbe41) {
          return [0x0 > _0x4dbe41 ? _0x4dbe41 + _0x10a720 : _0x4dbe41];
        }),
        even: _0x46ac5c(function (_0x1f18c8, _0x2f5c67) {
          for (var _0x562951 = 0x0; _0x562951 < _0x2f5c67; _0x562951 += 0x2) {
            _0x1f18c8.push(_0x562951);
          }
          return _0x1f18c8;
        }),
        odd: _0x46ac5c(function (_0x132ac5, _0x22a426) {
          for (var _0x55fa56 = 0x1; _0x55fa56 < _0x22a426; _0x55fa56 += 0x2) {
            _0x132ac5.push(_0x55fa56);
          }
          return _0x132ac5;
        }),
        lt: _0x46ac5c(function (_0x572d72, _0xa316cc, _0x4ae3d3) {
          for (
            _0xa316cc = 0x0 > _0x4ae3d3 ? _0x4ae3d3 + _0xa316cc : _0x4ae3d3;
            0x0 <= --_0xa316cc;

          ) {
            _0x572d72.push(_0xa316cc);
          }
          return _0x572d72;
        }),
        gt: _0x46ac5c(function (_0x3a7d25, _0x144437, _0x263499) {
          for (
            _0x263499 = 0x0 > _0x263499 ? _0x263499 + _0x144437 : _0x263499;
            ++_0x263499 < _0x144437;

          ) {
            _0x3a7d25.push(_0x263499);
          }
          return _0x3a7d25;
        }),
      },
    };
    _0x3f8cc7.pseudos.nth = _0x3f8cc7.pseudos.eq;
    for (_0x20ce67 in {
      radio: true,
      checkbox: true,
      file: true,
      password: true,
      image: true,
    })
      _0x3f8cc7.pseudos[_0x20ce67] = _0x260fbf(_0x20ce67);
    for (_0x20ce67 in {
      submit: true,
      reset: true,
    })
      _0x3f8cc7.pseudos[_0x20ce67] = _0x4c08d3(_0x20ce67);
    _0x4629ba.prototype = _0x3f8cc7.filters = _0x3f8cc7.pseudos;
    _0x3f8cc7.setFilters = new _0x4629ba();
    _0x53ec2c = _0x1f7270.tokenize = function (_0x282d1f, _0x96420) {
      var _0xc9ef46;
      var _0x43483b;
      var _0x1984ba;
      var _0x1cbe04;
      var _0x2a50de;
      var _0x453b98;
      var _0x3bdefd;
      if ((_0x2a50de = _0x5bf4f6[_0x282d1f + " "])) {
        return _0x96420 ? 0x0 : _0x2a50de.slice(0x0);
      }
      _0x2a50de = _0x282d1f;
      _0x453b98 = [];
      for (_0x3bdefd = _0x3f8cc7.preFilter; _0x2a50de; ) {
        if (
          !(
            _0xc9ef46 &&
            !(_0x43483b = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/.exec(_0x2a50de))
          )
        ) {
          if (_0x43483b) {
            _0x2a50de = _0x2a50de.slice(_0x43483b[0x0].length) || _0x2a50de;
          }
          _0x453b98.push((_0x1984ba = []));
        }
        _0xc9ef46 = false;
        if (
          (_0x43483b =
            /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/.exec(
              _0x2a50de
            ))
        ) {
          _0xc9ef46 = _0x43483b.shift();
          _0x1984ba.push({
            value: _0xc9ef46,
            type: _0x43483b[0x0].replace(
              /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
              " "
            ),
          });
          _0x2a50de = _0x2a50de.slice(_0xc9ef46.length);
        }
        for (_0x1cbe04 in _0x3f8cc7.filter)
          if (
            !(
              !(_0x43483b = _0x1e6bab[_0x1cbe04].exec(_0x2a50de)) ||
              (_0x3bdefd[_0x1cbe04] &&
                !(_0x43483b = _0x3bdefd[_0x1cbe04](_0x43483b)))
            )
          ) {
            _0xc9ef46 = _0x43483b.shift();
            _0x1984ba.push({
              value: _0xc9ef46,
              type: _0x1cbe04,
              matches: _0x43483b,
            });
            _0x2a50de = _0x2a50de.slice(_0xc9ef46.length);
          }
        if (!_0xc9ef46) {
          break;
        }
      }
      return _0x96420
        ? _0x2a50de.length
        : _0x2a50de
        ? _0x1f7270.error(_0x282d1f)
        : _0x5bf4f6(_0x282d1f, _0x453b98).slice(0x0);
    };
    _0x2d714d = _0x1f7270.compile = function (_0x1db10, _0x4206ac) {
      var _0x3ee89b;
      var _0x1fc33a = [];
      var _0x277330 = [];
      var _0x20358b = _0x1afead[_0x1db10 + " "];
      if (!_0x20358b) {
        if (!_0x4206ac) {
          _0x4206ac = _0x53ec2c(_0x1db10);
        }
        for (_0x3ee89b = _0x4206ac.length; _0x3ee89b--; ) {
          _0x20358b = _0xc72b8c(_0x4206ac[_0x3ee89b]);
          if (_0x20358b[_0x31889c]) {
            _0x1fc33a.push(_0x20358b);
          } else {
            _0x277330.push(_0x20358b);
          }
        }
        _0x3ee89b = _0x1afead;
        var _0x39612f = 0x0 < _0x1fc33a.length;
        var _0x30d5be = 0x0 < _0x277330.length;
        var _0x20358b = function (
          _0x59279d,
          _0xd90ad7,
          _0x38ba9d,
          _0x278c46,
          _0x3b0650
        ) {
          var _0x3fc5b0;
          var _0x12daae;
          var _0x491749;
          var _0x21ce1a = 0x0;
          var _0x4c48ff = "0";
          var _0x445dcd = _0x59279d && [];
          var _0x3a6c14 = [];
          var _0x57ba72 = _0x4f05b4;
          var _0x58ec34 =
            _0x59279d || (_0x30d5be && _0x3f8cc7.find.TAG("*", _0x3b0650));
          var _0x268c69 = (_0x1f0bcd +=
            null == _0x57ba72 ? 0x1 : Math.random() || 0.1);
          var _0x47db5f = _0x58ec34.length;
          for (
            _0x3b0650 &&
            (_0x4f05b4 = _0xd90ad7 === _0xce6d35 || _0xd90ad7 || _0x3b0650);
            _0x4c48ff !== _0x47db5f &&
            null != (_0x3fc5b0 = _0x58ec34[_0x4c48ff]);
            _0x4c48ff++
          ) {
            if (_0x30d5be && _0x3fc5b0) {
              _0x12daae = 0x0;
              for (
                _0xd90ad7 ||
                _0x3fc5b0.ownerDocument === _0xce6d35 ||
                (_0x44646d(_0x3fc5b0), (_0x38ba9d = !_0x48a18b));
                (_0x491749 = _0x277330[_0x12daae++]);

              ) {
                if (_0x491749(_0x3fc5b0, _0xd90ad7 || _0xce6d35, _0x38ba9d)) {
                  _0x278c46.push(_0x3fc5b0);
                  break;
                }
              }
              if (_0x3b0650) {
                _0x1f0bcd = _0x268c69;
              }
            }
            if (_0x39612f) {
              if ((_0x3fc5b0 = !_0x491749 && _0x3fc5b0)) {
                _0x21ce1a--;
              }
              if (_0x59279d) {
                _0x445dcd.push(_0x3fc5b0);
              }
            }
          }
          _0x21ce1a += _0x4c48ff;
          if (_0x39612f && _0x4c48ff !== _0x21ce1a) {
            for (_0x12daae = 0x0; (_0x491749 = _0x1fc33a[_0x12daae++]); ) {
              _0x491749(_0x445dcd, _0x3a6c14, _0xd90ad7, _0x38ba9d);
            }
            if (_0x59279d) {
              if (0x0 < _0x21ce1a) {
                for (; _0x4c48ff--; ) {
                  if (!(_0x445dcd[_0x4c48ff] || _0x3a6c14[_0x4c48ff])) {
                    _0x3a6c14[_0x4c48ff] = _0x5241b2.call(_0x278c46);
                  }
                }
              }
              _0x3a6c14 = _0x19b21c(_0x3a6c14);
            }
            _0x597eb9.apply(_0x278c46, _0x3a6c14);
            if (
              _0x3b0650 &&
              !_0x59279d &&
              0x0 < _0x3a6c14.length &&
              0x1 < _0x21ce1a + _0x1fc33a.length
            ) {
              _0x1f7270.uniqueSort(_0x278c46);
            }
          }
          if (_0x3b0650) {
            _0x1f0bcd = _0x268c69;
            _0x4f05b4 = _0x57ba72;
          }
          return _0x445dcd;
        };
        var _0x20358b = _0x39612f ? _0x4a5d4d(_0x20358b) : _0x20358b;
        var _0x20358b = _0x3ee89b(_0x1db10, _0x20358b);
        _0x20358b.selector = _0x1db10;
      }
      return _0x20358b;
    };
    _0x5256b3 = _0x1f7270.select = function (
      _0x3bac7b,
      _0x5a2178,
      _0x5601f7,
      _0x16114c
    ) {
      var _0x179fcb;
      var _0x32b6ae;
      var _0x232495;
      var _0x1178b0;
      var _0x578b84;
      var _0x33b286 = "function" == typeof _0x3bac7b && _0x3bac7b;
      var _0x409c28 =
        !_0x16114c && _0x53ec2c((_0x3bac7b = _0x33b286.selector || _0x3bac7b));
      _0x5601f7 = _0x5601f7 || [];
      if (0x1 === _0x409c28.length) {
        _0x32b6ae = _0x409c28[0x0] = _0x409c28[0x0].slice(0x0);
        if (
          0x2 < _0x32b6ae.length &&
          "ID" === (_0x232495 = _0x32b6ae[0x0]).type &&
          0x9 === _0x5a2178.nodeType &&
          _0x48a18b &&
          _0x3f8cc7.relative[_0x32b6ae[0x1].type]
        ) {
          _0x5a2178 = (_0x3f8cc7.find.ID(
            _0x232495.matches[0x0].replace(
              /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/gi,
              _0x24638b
            ),
            _0x5a2178
          ) || [])[0x0];
          if (!_0x5a2178) {
            return _0x5601f7;
          }
          if (_0x33b286) {
            _0x5a2178 = _0x5a2178.parentNode;
          }
          _0x3bac7b = _0x3bac7b.slice(_0x32b6ae.shift().value.length);
        }
        for (
          _0x179fcb = _0x1e6bab.needsContext.test(_0x3bac7b)
            ? 0x0
            : _0x32b6ae.length;
          _0x179fcb-- &&
          !((_0x232495 = _0x32b6ae[_0x179fcb]),
          _0x3f8cc7.relative[(_0x1178b0 = _0x232495.type)]);

        ) {
          if (
            (_0x578b84 = _0x3f8cc7.find[_0x1178b0]) &&
            (_0x16114c = _0x578b84(
              _0x232495.matches[0x0].replace(
                /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/gi,
                _0x24638b
              ),
              (/[+~]/.test(_0x32b6ae[0x0].type) &&
                _0x5a2178.parentNode &&
                "undefined" !=
                  typeof _0x5a2178.parentNode.getElementsByTagName &&
                _0x5a2178.parentNode) ||
                _0x5a2178
            ))
          ) {
            _0x32b6ae.splice(_0x179fcb, 0x1);
            _0x3bac7b = _0x16114c.length && _0x3a8ffa(_0x32b6ae);
            if (!_0x3bac7b) {
              _0x597eb9.apply(_0x5601f7, _0x16114c);
              return _0x5601f7;
            }
            break;
          }
        }
      }
      (_0x33b286 || _0x2d714d(_0x3bac7b, _0x409c28))(
        _0x16114c,
        _0x5a2178,
        !_0x48a18b,
        _0x5601f7,
        !_0x5a2178 ||
          (/[+~]/.test(_0x3bac7b) &&
            _0x5a2178.parentNode &&
            "undefined" != typeof _0x5a2178.parentNode.getElementsByTagName &&
            _0x5a2178.parentNode) ||
          _0x5a2178
      );
      return _0x5601f7;
    };
    _0x20be19.sortStable =
      _0x31889c.split("").sort(_0x5ada3d).join("") === _0x31889c;
    _0x20be19.detectDuplicates = !!_0x2c3e4f;
    _0x44646d();
    _0x20be19.sortDetached = _0x165ebe(function (_0x113104) {
      return (
        0x1 &
        _0x113104.compareDocumentPosition(_0xce6d35.createElement("fieldset"))
      );
    });
    if (
      !_0x165ebe(function (_0x42fe8f) {
        _0x42fe8f.innerHTML = "<a href='#'></a>";
        return "#" === _0x42fe8f.firstChild.getAttribute("href");
      })
    ) {
      _0x5873df(
        "type|href|height|width",
        function (_0x495363, _0x3ae3a6, _0x35365d) {
          if (!_0x35365d) {
            return _0x495363.getAttribute(
              _0x3ae3a6,
              "type" === _0x3ae3a6.toLowerCase() ? 0x1 : 0x2
            );
          }
        }
      );
    }
    if (
      !(
        _0x20be19.attributes &&
        _0x165ebe(function (_0x11ae64) {
          _0x11ae64.innerHTML = "<input/>";
          _0x11ae64.firstChild.setAttribute("value", "");
          return "" === _0x11ae64.firstChild.getAttribute("value");
        })
      )
    ) {
      _0x5873df("value", function (_0x33f1a0, _0x5184ee, _0xf70cf9) {
        if (!_0xf70cf9 && "input" === _0x33f1a0.nodeName.toLowerCase()) {
          return _0x33f1a0.defaultValue;
        }
      });
    }
    if (
      !_0x165ebe(function (_0x35b8a4) {
        return null == _0x35b8a4.getAttribute("disabled");
      })
    ) {
      _0x5873df(
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        function (_0x221050, _0x2bc3f8, _0x367c09) {
          var _0x139cdb;
          if (!_0x367c09) {
            return true === _0x221050[_0x2bc3f8]
              ? _0x2bc3f8.toLowerCase()
              : (_0x139cdb = _0x221050.getAttributeNode(_0x2bc3f8)) &&
                _0x139cdb.specified
              ? _0x139cdb.value
              : null;
          }
        }
      );
    }
    _0xca1637.find = _0x1f7270;
    _0xca1637.expr = _0x1f7270.selectors;
    _0xca1637.expr[":"] = _0xca1637.expr.pseudos;
    _0xca1637.uniqueSort = _0xca1637.unique = _0x1f7270.uniqueSort;
    _0xca1637.text = _0x1f7270.getText;
    _0xca1637.isXMLDoc = _0x1f7270.isXML;
    _0xca1637.contains = _0x1f7270.contains;
    _0xca1637.escapeSelector = _0x1f7270.escape;
    var _0x5a35d3 = function (_0x572d95, _0x791d62, _0x4121a7) {
      var _0x162814 = [];
      for (
        var _0x32e081 = undefined !== _0x4121a7;
        (_0x572d95 = _0x572d95[_0x791d62]) && 0x9 !== _0x572d95.nodeType;

      ) {
        if (0x1 === _0x572d95.nodeType) {
          if (
            _0x32e081 &&
            new _0xca1637.fn.init(_0x572d95, undefined).is(_0x4121a7)
          ) {
            break;
          }
          _0x162814.push(_0x572d95);
        }
      }
      return _0x162814;
    };
    var _0x4bd57b = function (_0xf1f493, _0x45d404) {
      for (var _0x525ac9 = []; _0xf1f493; _0xf1f493 = _0xf1f493.nextSibling) {
        if (0x1 === _0xf1f493.nodeType && _0xf1f493 !== _0x45d404) {
          _0x525ac9.push(_0xf1f493);
        }
      }
      return _0x525ac9;
    };
    var _0x599872 = _0xca1637.expr.match.needsContext;
    _0xca1637.filter = function (_0x5dd04c, _0x3d7c5a, _0x938ba8) {
      var _0x5bd166 = _0x3d7c5a[0x0];
      if (_0x938ba8) {
        _0x5dd04c = ":not(" + _0x5dd04c + ")";
      }
      return 0x1 === _0x3d7c5a.length && 0x1 === _0x5bd166.nodeType
        ? _0xca1637.find.matchesSelector(_0x5bd166, _0x5dd04c)
          ? [_0x5bd166]
          : []
        : _0xca1637.find.matches(
            _0x5dd04c,
            _0xca1637.grep(_0x3d7c5a, function (_0x358258) {
              return 0x1 === _0x358258.nodeType;
            })
          );
    };
    _0xca1637.fn.extend({
      find: function (_0x14b18b) {
        var _0x3d4786;
        var _0x22f1f1;
        var _0x815cd1 = this.length;
        var _0xf80364 = this;
        if ("string" != typeof _0x14b18b) {
          return this.pushStack(
            new _0xca1637.fn.init(_0x14b18b, undefined).filter(function () {
              for (_0x3d4786 = 0x0; _0x3d4786 < _0x815cd1; _0x3d4786++) {
                if (_0xca1637.contains(_0xf80364[_0x3d4786], this)) {
                  return true;
                }
              }
            })
          );
        }
        _0x22f1f1 = this.pushStack([]);
        for (_0x3d4786 = 0x0; _0x3d4786 < _0x815cd1; _0x3d4786++) {
          _0xca1637.find(_0x14b18b, _0xf80364[_0x3d4786], _0x22f1f1);
        }
        return 0x1 < _0x815cd1 ? _0xca1637.uniqueSort(_0x22f1f1) : _0x22f1f1;
      },
      filter: function (_0x2e908c) {
        return this.pushStack(_0x413754(this, _0x2e908c || [], false));
      },
      not: function (_0x932774) {
        return this.pushStack(_0x413754(this, _0x932774 || [], true));
      },
      is: function (_0x4099ab) {
        return !!_0x413754(
          this,
          "string" == typeof _0x4099ab && _0x599872.test(_0x4099ab)
            ? new _0xca1637.fn.init(_0x4099ab, undefined)
            : _0x4099ab || [],
          false
        ).length;
      },
    });
    var _0x210758;
    (_0xca1637.fn.init = function (_0x3af106, _0x1a350a, _0x560a7b) {
      var _0x3b7384;
      var _0x421572;
      if (!_0x3af106) {
        return this;
      }
      _0x560a7b = _0x560a7b || _0x210758;
      if ("string" == typeof _0x3af106) {
        _0x3b7384 =
          "<" === _0x3af106[0x0] &&
          ">" === _0x3af106[_0x3af106.length - 0x1] &&
          0x3 <= _0x3af106.length
            ? [null, _0x3af106, null]
            : /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/.exec(_0x3af106);
        if (!_0x3b7384 || (!_0x3b7384[0x1] && _0x1a350a)) {
          return !_0x1a350a || _0x1a350a.jquery
            ? (_0x1a350a || _0x560a7b).find(_0x3af106)
            : this.constructor(_0x1a350a).find(_0x3af106);
        }
        if (_0x3b7384[0x1]) {
          _0x1a350a =
            _0x1a350a instanceof _0xca1637 ? _0x1a350a[0x0] : _0x1a350a;
          _0xca1637.merge(
            this,
            _0xca1637.parseHTML(
              _0x3b7384[0x1],
              _0x1a350a && _0x1a350a.nodeType
                ? _0x1a350a.ownerDocument || _0x1a350a
                : _0x3abdcc,
              true
            )
          );
          if (
            /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i.test(
              _0x3b7384[0x1]
            ) &&
            _0xca1637.isPlainObject(_0x1a350a)
          ) {
            for (_0x3b7384 in _0x1a350a)
              if (_0xca1637.isFunction(this[_0x3b7384])) {
                this[_0x3b7384](_0x1a350a[_0x3b7384]);
              } else {
                this.attr(_0x3b7384, _0x1a350a[_0x3b7384]);
              }
          }
          return this;
        }
        _0x421572 = _0x3abdcc.getElementById(_0x3b7384[0x2]);
        if (_0x421572) {
          this[0x0] = _0x421572;
          this.length = 0x1;
        }
        return this;
      }
      return _0x3af106.nodeType
        ? ((this[0x0] = _0x3af106), (this.length = 0x1), this)
        : _0xca1637.isFunction(_0x3af106)
        ? undefined !== _0x560a7b.ready
          ? _0x560a7b.ready(_0x3af106)
          : _0x3af106(_0xca1637)
        : _0xca1637.makeArray(_0x3af106, this);
    }).prototype = _0xca1637.fn;
    _0x210758 = new _0xca1637.fn.init(_0x3abdcc, undefined);
    var _0x125351 = {
      children: true,
      contents: true,
      next: true,
      prev: true,
    };
    _0xca1637.fn.extend({
      has: function (_0xd849f0) {
        var _0x5f169f = new _0xca1637.fn.init(_0xd849f0, this);
        var _0x1dc2b4 = _0x5f169f.length;
        return this.filter(function () {
          for (var _0x2408fb = 0x0; _0x2408fb < _0x1dc2b4; _0x2408fb++) {
            if (_0xca1637.contains(this, _0x5f169f[_0x2408fb])) {
              return true;
            }
          }
        });
      },
      closest: function (_0x4f93ee, _0x2609a7) {
        var _0x3bfc28;
        var _0x86408 = 0x0;
        var _0x35043e = this.length;
        var _0x2039bb = [];
        var _0x1e6562 =
          "string" != typeof _0x4f93ee &&
          new _0xca1637.fn.init(_0x4f93ee, undefined);
        if (!_0x599872.test(_0x4f93ee)) {
          for (; _0x86408 < _0x35043e; _0x86408++) {
            for (
              _0x3bfc28 = this[_0x86408];
              _0x3bfc28 && _0x3bfc28 !== _0x2609a7;
              _0x3bfc28 = _0x3bfc28.parentNode
            ) {
              if (
                0xb > _0x3bfc28.nodeType &&
                (_0x1e6562
                  ? -0x1 < _0x1e6562.index(_0x3bfc28)
                  : 0x1 === _0x3bfc28.nodeType &&
                    _0xca1637.find.matchesSelector(_0x3bfc28, _0x4f93ee))
              ) {
                _0x2039bb.push(_0x3bfc28);
                break;
              }
            }
          }
        }
        return this.pushStack(
          0x1 < _0x2039bb.length ? _0xca1637.uniqueSort(_0x2039bb) : _0x2039bb
        );
      },
      index: function (_0x73e050) {
        return _0x73e050
          ? "string" == typeof _0x73e050
            ? _0x4338af.call(
                new _0xca1637.fn.init(_0x73e050, undefined),
                this[0x0]
              )
            : _0x4338af.call(
                this,
                _0x73e050.jquery ? _0x73e050[0x0] : _0x73e050
              )
          : this[0x0] && this[0x0].parentNode
          ? this.first().prevAll().length
          : -0x1;
      },
      add: function (_0x2ca6fa, _0x27e461) {
        return this.pushStack(
          _0xca1637.uniqueSort(
            _0xca1637.merge(
              this.get(),
              new _0xca1637.fn.init(_0x2ca6fa, _0x27e461)
            )
          )
        );
      },
      addBack: function (_0x975f6a) {
        return this.add(
          null == _0x975f6a
            ? this.prevObject
            : this.prevObject.filter(_0x975f6a)
        );
      },
    });
    _0xca1637.each(
      {
        parent: function (_0x19d61d) {
          return (_0x19d61d = _0x19d61d.parentNode) &&
            0xb !== _0x19d61d.nodeType
            ? _0x19d61d
            : null;
        },
        parents: function (_0x3edeff) {
          return _0x5a35d3(_0x3edeff, "parentNode");
        },
        parentsUntil: function (_0x34c886, _0x3e22d2, _0x457780) {
          return _0x5a35d3(_0x34c886, "parentNode", _0x457780);
        },
        next: function (_0x19c4f6) {
          return _0x1f69eb(_0x19c4f6, "nextSibling");
        },
        prev: function (_0x3377f9) {
          return _0x1f69eb(_0x3377f9, "previousSibling");
        },
        nextAll: function (_0x1a792d) {
          return _0x5a35d3(_0x1a792d, "nextSibling");
        },
        prevAll: function (_0x3b22cd) {
          return _0x5a35d3(_0x3b22cd, "previousSibling");
        },
        nextUntil: function (_0x26237d, _0x3baacb, _0x183cb0) {
          return _0x5a35d3(_0x26237d, "nextSibling", _0x183cb0);
        },
        prevUntil: function (_0x19a5d3, _0x2d05ab, _0x1c89a5) {
          return _0x5a35d3(_0x19a5d3, "previousSibling", _0x1c89a5);
        },
        siblings: function (_0xb0fca7) {
          return _0x4bd57b((_0xb0fca7.parentNode || {}).firstChild, _0xb0fca7);
        },
        children: function (_0x384fe7) {
          return _0x4bd57b(_0x384fe7.firstChild);
        },
        contents: function (_0x4917d1) {
          return _0x4917d1.nodeName &&
            _0x4917d1.nodeName.toLowerCase() === "iframe".toLowerCase()
            ? _0x4917d1.contentDocument
            : (_0x4917d1.nodeName &&
                _0x4917d1.nodeName.toLowerCase() === "template".toLowerCase() &&
                (_0x4917d1 = _0x4917d1.content || _0x4917d1),
              _0xca1637.merge([], _0x4917d1.childNodes));
        },
      },
      function (_0x2ba2c4, _0x4b8472) {
        _0xca1637.fn[_0x2ba2c4] = function (_0x5a0872, _0x403e30) {
          var _0x3571c6 = _0xca1637.map(this, _0x4b8472, _0x5a0872);
          if ("Until" !== _0x2ba2c4.slice(-0x5)) {
            _0x403e30 = _0x5a0872;
          }
          if (_0x403e30 && "string" == typeof _0x403e30) {
            _0x3571c6 = _0xca1637.filter(_0x403e30, _0x3571c6);
          }
          if (0x1 < this.length) {
            if (!_0x125351[_0x2ba2c4]) {
              _0xca1637.uniqueSort(_0x3571c6);
            }
            if (/^(?:parents|prev(?:Until|All))/.test(_0x2ba2c4)) {
              _0x3571c6.reverse();
            }
          }
          return this.pushStack(_0x3571c6);
        };
      }
    );
    _0xca1637.Callbacks = function (_0xd24e66) {
      var _0xc9292b;
      if ("string" == typeof _0xd24e66) {
        var _0x3a40df = {};
        _0xca1637.each(
          _0xd24e66.match(/[^\x20\t\r\n\f]+/g) || [],
          function (_0x3189a7, _0x470b28) {
            _0x3a40df[_0x470b28] = true;
          }
        );
        _0xc9292b = _0x3a40df;
      } else {
        _0xc9292b = _0xca1637.extend({}, _0xd24e66);
      }
      _0xd24e66 = _0xc9292b;
      var _0x5e206d;
      var _0x4a0ec1;
      var _0x1b25db;
      var _0x3b90ca;
      var _0x1c65f7 = [];
      var _0x94fd34 = [];
      var _0x3646ab = -0x1;
      var _0x5b56df = function () {
        _0x3b90ca = _0x3b90ca || _0xd24e66.once;
        for (_0x1b25db = _0x5e206d = true; _0x94fd34.length; _0x3646ab = -0x1) {
          for (
            _0x4a0ec1 = _0x94fd34.shift();
            ++_0x3646ab < _0x1c65f7.length;

          ) {
            if (
              false ===
                _0x1c65f7[_0x3646ab].apply(_0x4a0ec1[0x0], _0x4a0ec1[0x1]) &&
              _0xd24e66.stopOnFalse
            ) {
              _0x3646ab = _0x1c65f7.length;
              _0x4a0ec1 = false;
            }
          }
        }
        if (!_0xd24e66.memory) {
          _0x4a0ec1 = false;
        }
        _0x5e206d = false;
        if (_0x3b90ca) {
          _0x1c65f7 = _0x4a0ec1 ? [] : "";
        }
      };
      var _0x1359e0 = {
        add: function () {
          if (_0x1c65f7) {
            if (_0x4a0ec1 && !_0x5e206d) {
              _0x3646ab = _0x1c65f7.length - 0x1;
              _0x94fd34.push(_0x4a0ec1);
            }
            (function _0x6ffb13(_0x3fd6b6) {
              _0xca1637.each(_0x3fd6b6, function (_0x1e9a4e, _0x181099) {
                if (_0xca1637.isFunction(_0x181099)) {
                  if (
                    !(
                      _0xd24e66.unique &&
                      (_0x181099
                        ? -0x1 < _0xca1637.inArray(_0x181099, _0x1c65f7)
                        : 0x0 < _0x1c65f7.length)
                    )
                  ) {
                    _0x1c65f7.push(_0x181099);
                  }
                } else if (
                  _0x181099 &&
                  _0x181099.length &&
                  "string" !== _0xca1637.type(_0x181099)
                ) {
                  _0x6ffb13(_0x181099);
                }
              });
            })(arguments);
            if (_0x4a0ec1 && !_0x5e206d) {
              _0x5b56df();
            }
          }
          return this;
        },
        remove: function () {
          _0xca1637.each(arguments, function (_0x183464, _0x3cd17d) {
            for (
              var _0x4e8671;
              -0x1 <
              (_0x4e8671 = _0xca1637.inArray(_0x3cd17d, _0x1c65f7, _0x4e8671));

            ) {
              _0x1c65f7.splice(_0x4e8671, 0x1);
              if (_0x4e8671 <= _0x3646ab) {
                _0x3646ab--;
              }
            }
          });
          return this;
        },
        has: function (_0x4da1b4) {
          return _0x4da1b4
            ? -0x1 < _0xca1637.inArray(_0x4da1b4, _0x1c65f7)
            : 0x0 < _0x1c65f7.length;
        },
        empty: function () {
          if (_0x1c65f7) {
            _0x1c65f7 = [];
          }
          return this;
        },
        disable: function () {
          _0x3b90ca = _0x94fd34 = [];
          _0x1c65f7 = _0x4a0ec1 = "";
          return this;
        },
        disabled: function () {
          return !_0x1c65f7;
        },
        lock: function () {
          _0x3b90ca = _0x94fd34 = [];
          if (!(_0x4a0ec1 || _0x5e206d)) {
            _0x1c65f7 = _0x4a0ec1 = "";
          }
          return this;
        },
        locked: function () {
          return !!_0x3b90ca;
        },
        fireWith: function (_0x3b9d0d, _0x1443f6) {
          if (!_0x3b90ca) {
            _0x1443f6 = _0x1443f6 || [];
            _0x1443f6 = [
              _0x3b9d0d,
              _0x1443f6.slice ? _0x1443f6.slice() : _0x1443f6,
            ];
            _0x94fd34.push(_0x1443f6);
            if (!_0x5e206d) {
              _0x5b56df();
            }
          }
          return this;
        },
        fire: function () {
          _0x1359e0.fireWith(this, arguments);
          return this;
        },
        fired: function () {
          return !!_0x1b25db;
        },
      };
      return _0x1359e0;
    };
    _0xca1637.extend({
      Deferred: function (_0x1ba634) {
        var _0x5b89ae = [
          [
            "notify",
            "progress",
            _0xca1637.Callbacks("memory"),
            _0xca1637.Callbacks("memory"),
            0x2,
          ],
          [
            "resolve",
            "done",
            _0xca1637.Callbacks("once memory"),
            _0xca1637.Callbacks("once memory"),
            0x0,
            "resolved",
          ],
          [
            "reject",
            "fail",
            _0xca1637.Callbacks("once memory"),
            _0xca1637.Callbacks("once memory"),
            0x1,
            "rejected",
          ],
        ];
        var _0x1563eb = "pending";
        var _0x345a1 = {
          state: function () {
            return _0x1563eb;
          },
          always: function () {
            _0x15d337.done(arguments).fail(arguments);
            return this;
          },
          catch: function (_0x2bbe30) {
            return _0x345a1.then(null, _0x2bbe30);
          },
          pipe: function () {
            var _0x2802e3 = arguments;
            return _0xca1637
              .Deferred(function (_0x41371f) {
                _0xca1637.each(_0x5b89ae, function (_0x59cb64, _0x516e89) {
                  var _0x10d733 =
                    _0xca1637.isFunction(_0x2802e3[_0x516e89[0x4]]) &&
                    _0x2802e3[_0x516e89[0x4]];
                  _0x15d337[_0x516e89[0x1]](function () {
                    var _0x5e1d64 =
                      _0x10d733 && _0x10d733.apply(this, arguments);
                    if (_0x5e1d64 && _0xca1637.isFunction(_0x5e1d64.promise)) {
                      _0x5e1d64
                        .promise()
                        .progress(_0x41371f.notify)
                        .done(_0x41371f.resolve)
                        .fail(_0x41371f.reject);
                    } else {
                      _0x41371f[_0x516e89[0x0] + "With"](
                        this,
                        _0x10d733 ? [_0x5e1d64] : arguments
                      );
                    }
                  });
                });
                _0x2802e3 = null;
              })
              .promise();
          },
          then: function (_0x10a0e5, _0x1d627f, _0x4c6ac4) {
            function _0x5da3d8(_0x2339ad, _0x21c729, _0x527f3f, _0x463692) {
              return function () {
                var _0x26bdbd = this;
                var _0x5df5c5 = arguments;
                var _0x54c9ae = function () {
                  var _0x5a9fb0;
                  var _0x40ffac;
                  if (!(_0x2339ad < _0x40e9a7)) {
                    _0x5a9fb0 = _0x527f3f.apply(_0x26bdbd, _0x5df5c5);
                    if (_0x5a9fb0 === _0x21c729.promise()) {
                      throw new TypeError("Thenable self-resolution");
                    }
                    _0x40ffac =
                      _0x5a9fb0 &&
                      ("object" == typeof _0x5a9fb0 ||
                        "function" == typeof _0x5a9fb0) &&
                      _0x5a9fb0.then;
                    if (_0xca1637.isFunction(_0x40ffac)) {
                      if (_0x463692) {
                        _0x40ffac.call(
                          _0x5a9fb0,
                          _0x5da3d8(_0x40e9a7, _0x21c729, _0x40b515, _0x463692),
                          _0x5da3d8(_0x40e9a7, _0x21c729, _0xbb9213, _0x463692)
                        );
                      } else {
                        _0x40e9a7++;
                        _0x40ffac.call(
                          _0x5a9fb0,
                          _0x5da3d8(_0x40e9a7, _0x21c729, _0x40b515, _0x463692),
                          _0x5da3d8(_0x40e9a7, _0x21c729, _0xbb9213, _0x463692),
                          _0x5da3d8(
                            _0x40e9a7,
                            _0x21c729,
                            _0x40b515,
                            _0x21c729.notifyWith
                          )
                        );
                      }
                    } else {
                      if (_0x527f3f !== _0x40b515) {
                        _0x26bdbd = undefined;
                        _0x5df5c5 = [_0x5a9fb0];
                      }
                      (_0x463692 || _0x21c729.resolveWith)(
                        _0x26bdbd,
                        _0x5df5c5
                      );
                    }
                  }
                };
                var _0x132abd = _0x463692
                  ? _0x54c9ae
                  : function () {
                      try {
                        _0x54c9ae();
                      } catch (_0x319bb0) {
                        if (_0xca1637.Deferred.exceptionHook) {
                          _0xca1637.Deferred.exceptionHook(
                            _0x319bb0,
                            _0x132abd.stackTrace
                          );
                        }
                        if (_0x2339ad + 0x1 >= _0x40e9a7) {
                          if (_0x527f3f !== _0xbb9213) {
                            _0x26bdbd = undefined;
                            _0x5df5c5 = [_0x319bb0];
                          }
                          _0x21c729.rejectWith(_0x26bdbd, _0x5df5c5);
                        }
                      }
                    };
                if (_0x2339ad) {
                  _0x132abd();
                } else {
                  if (_0xca1637.Deferred.getStackHook) {
                    _0x132abd.stackTrace = _0xca1637.Deferred.getStackHook();
                  }
                  _0x64ec9a.setTimeout(_0x132abd);
                }
              };
            }
            var _0x40e9a7 = 0x0;
            return _0xca1637
              .Deferred(function (_0x11be34) {
                _0x5b89ae[0x0][0x3].add(
                  _0x5da3d8(
                    0x0,
                    _0x11be34,
                    _0xca1637.isFunction(_0x4c6ac4) ? _0x4c6ac4 : _0x40b515,
                    _0x11be34.notifyWith
                  )
                );
                _0x5b89ae[0x1][0x3].add(
                  _0x5da3d8(
                    0x0,
                    _0x11be34,
                    _0xca1637.isFunction(_0x10a0e5) ? _0x10a0e5 : _0x40b515
                  )
                );
                _0x5b89ae[0x2][0x3].add(
                  _0x5da3d8(
                    0x0,
                    _0x11be34,
                    _0xca1637.isFunction(_0x1d627f) ? _0x1d627f : _0xbb9213
                  )
                );
              })
              .promise();
          },
          promise: function (_0x181db3) {
            return null != _0x181db3
              ? _0xca1637.extend(_0x181db3, _0x345a1)
              : _0x345a1;
          },
        };
        var _0x15d337 = {};
        _0xca1637.each(_0x5b89ae, function (_0x252362, _0x227b79) {
          var _0x5b0377 = _0x227b79[0x2];
          var _0x3c523b = _0x227b79[0x5];
          _0x345a1[_0x227b79[0x1]] = _0x5b0377.add;
          if (_0x3c523b) {
            _0x5b0377.add(
              function () {
                _0x1563eb = _0x3c523b;
              },
              _0x5b89ae[0x3 - _0x252362][0x2].disable,
              _0x5b89ae[0x0][0x2].lock
            );
          }
          _0x5b0377.add(_0x227b79[0x3].fire);
          _0x15d337[_0x227b79[0x0]] = function () {
            _0x15d337[_0x227b79[0x0] + "With"](
              this === _0x15d337 ? undefined : this,
              arguments
            );
            return this;
          };
          _0x15d337[_0x227b79[0x0] + "With"] = _0x5b0377.fireWith;
        });
        if (null != _0x15d337) {
          _0xca1637.extend(_0x15d337, _0x345a1);
        } else {
          _0x345a1;
        }
        if (_0x1ba634) {
          _0x1ba634.call(_0x15d337, _0x15d337);
        }
        return _0x15d337;
      },
      when: function (_0xc0f50a) {
        var _0xab4121 = arguments.length;
        var _0x1ffe8a = _0xab4121;
        var _0xdf4d10 = Array(_0x1ffe8a);
        var _0x5efe85 = _0x333421.call(arguments);
        var _0x5da7a4 = _0xca1637.Deferred();
        var _0xd5ad06 = function (_0x2cebac) {
          return function (_0x288bb9) {
            _0xdf4d10[_0x2cebac] = this;
            _0x5efe85[_0x2cebac] =
              0x1 < arguments.length ? _0x333421.call(arguments) : _0x288bb9;
            if (!--_0xab4121) {
              _0x5da7a4.resolveWith(_0xdf4d10, _0x5efe85);
            }
          };
        };
        if (
          0x1 >= _0xab4121 &&
          (_0x3cb6f2(
            _0xc0f50a,
            _0x5da7a4.done(_0xd5ad06(_0x1ffe8a)).resolve,
            _0x5da7a4.reject,
            !_0xab4121
          ),
          "pending" === _0x5da7a4.state() ||
            _0xca1637.isFunction(
              _0x5efe85[_0x1ffe8a] && _0x5efe85[_0x1ffe8a].then
            ))
        ) {
          return _0x5da7a4.then();
        }
        for (; _0x1ffe8a--; ) {
          _0x3cb6f2(
            _0x5efe85[_0x1ffe8a],
            _0xd5ad06(_0x1ffe8a),
            _0x5da7a4.reject
          );
        }
        return _0x5da7a4.promise();
      },
    });
    _0xca1637.Deferred.exceptionHook = function (_0x490e91, _0x211396) {
      if (
        _0x64ec9a.console &&
        _0x64ec9a.console.warn &&
        _0x490e91 &&
        /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/.test(
          _0x490e91.name
        )
      ) {
        _0x64ec9a.console.warn(
          "jQuery.Deferred exception: " + _0x490e91.message,
          _0x490e91.stack,
          _0x211396
        );
      }
    };
    _0xca1637.readyException = function (_0x236c79) {
      _0x64ec9a.setTimeout(function () {
        throw _0x236c79;
      });
    };
    var _0x453747 = _0xca1637.Deferred();
    _0xca1637.fn.ready = function (_0x18a22d) {
      _0x453747.then(_0x18a22d)["catch"](function (_0x19f4ae) {
        _0xca1637.readyException(_0x19f4ae);
      });
      return this;
    };
    _0xca1637.extend({
      isReady: false,
      readyWait: 0x1,
      ready: function (_0x181ce2) {
        if (!(true === _0x181ce2 ? --_0xca1637.readyWait : _0xca1637.isReady)) {
          _0xca1637.isReady = true;
          if (!(true !== _0x181ce2 && 0x0 < --_0xca1637.readyWait)) {
            _0x453747.resolveWith(_0x3abdcc, [_0xca1637]);
          }
        }
      },
    });
    _0xca1637.ready.then = _0x453747.then;
    if (
      "complete" === _0x3abdcc.readyState ||
      ("loading" !== _0x3abdcc.readyState &&
        !_0x3abdcc.documentElement.doScroll)
    ) {
      _0x64ec9a.setTimeout(_0xca1637.ready);
    } else {
      _0x3abdcc.addEventListener("DOMContentLoaded", _0x3fb399);
      _0x64ec9a.addEventListener("load", _0x3fb399);
    }
    var _0x218b33 = function (
      _0xca7eb0,
      _0x33fb0b,
      _0x4bd6ec,
      _0x4ef52d,
      _0x56d8ee,
      _0x29814b,
      _0x9d9c4d
    ) {
      var _0x1213db = 0x0;
      var _0x21daed = _0xca7eb0.length;
      var _0x2145b8 = null == _0x4bd6ec;
      if ("object" === _0xca1637.type(_0x4bd6ec)) {
        _0x56d8ee = true;
        for (_0x1213db in _0x4bd6ec)
          _0x218b33(
            _0xca7eb0,
            _0x33fb0b,
            _0x1213db,
            _0x4bd6ec[_0x1213db],
            true,
            _0x29814b,
            _0x9d9c4d
          );
      } else {
        if (
          undefined !== _0x4ef52d &&
          ((_0x56d8ee = true),
          _0xca1637.isFunction(_0x4ef52d) || (_0x9d9c4d = true),
          _0x2145b8 &&
            (_0x9d9c4d
              ? (_0x33fb0b.call(_0xca7eb0, _0x4ef52d), (_0x33fb0b = null))
              : ((_0x2145b8 = _0x33fb0b),
                (_0x33fb0b = function (_0x407bbc, _0x330d18, _0x103e8e) {
                  return _0x2145b8.call(
                    new _0xca1637.fn.init(_0x407bbc, undefined),
                    _0x103e8e
                  );
                }))),
          _0x33fb0b)
        ) {
          for (; _0x1213db < _0x21daed; _0x1213db++) {
            _0x33fb0b(
              _0xca7eb0[_0x1213db],
              _0x4bd6ec,
              _0x9d9c4d
                ? _0x4ef52d
                : _0x4ef52d.call(
                    _0xca7eb0[_0x1213db],
                    _0x1213db,
                    _0x33fb0b(_0xca7eb0[_0x1213db], _0x4bd6ec)
                  )
            );
          }
        }
      }
      return _0x56d8ee
        ? _0xca7eb0
        : _0x2145b8
        ? _0x33fb0b.call(_0xca7eb0)
        : _0x21daed
        ? _0x33fb0b(_0xca7eb0[0x0], _0x4bd6ec)
        : _0x29814b;
    };
    _0x1fd0f2.uid = 0x1;
    _0x1fd0f2.prototype = {
      cache: function (_0x87ba47) {
        var _0x30724c = _0x87ba47[this.expando];
        if (!_0x30724c) {
          _0x30724c = {};
          if (
            0x1 === _0x87ba47.nodeType ||
            0x9 === _0x87ba47.nodeType ||
            !+_0x87ba47.nodeType
          ) {
            if (_0x87ba47.nodeType) {
              _0x87ba47[this.expando] = _0x30724c;
            } else {
              Object.defineProperty(_0x87ba47, this.expando, {
                value: _0x30724c,
                configurable: true,
              });
            }
          }
        }
        return _0x30724c;
      },
      set: function (_0x3d350c, _0x4993dd, _0x25a5ad) {
        var _0x131475;
        _0x3d350c = this.cache(_0x3d350c);
        if ("string" == typeof _0x4993dd) {
          _0x3d350c[_0xca1637.camelCase(_0x4993dd)] = _0x25a5ad;
        } else {
          for (_0x131475 in _0x4993dd)
            _0x3d350c[_0xca1637.camelCase(_0x131475)] = _0x4993dd[_0x131475];
        }
        return _0x3d350c;
      },
      get: function (_0x1b384b, _0x106717) {
        return undefined === _0x106717
          ? this.cache(_0x1b384b)
          : _0x1b384b[this.expando] &&
              _0x1b384b[this.expando][_0xca1637.camelCase(_0x106717)];
      },
      access: function (_0x5a814e, _0x297d29, _0x3c485d) {
        return undefined === _0x297d29 ||
          (_0x297d29 && "string" == typeof _0x297d29 && undefined === _0x3c485d)
          ? this.get(_0x5a814e, _0x297d29)
          : (this.set(_0x5a814e, _0x297d29, _0x3c485d),
            undefined !== _0x3c485d ? _0x3c485d : _0x297d29);
      },
      remove: function (_0x5eb98b, _0x1533a6) {
        var _0x117ef1;
        var _0x30f257 = _0x5eb98b[this.expando];
        if (undefined !== _0x30f257) {
          if (undefined !== _0x1533a6) {
            if (Array.isArray(_0x1533a6)) {
              _0x1533a6 = _0x1533a6.map(_0xca1637.camelCase);
            } else {
              _0x1533a6 = _0xca1637.camelCase(_0x1533a6);
              _0x1533a6 =
                _0x1533a6 in _0x30f257
                  ? [_0x1533a6]
                  : _0x1533a6.match(/[^\x20\t\r\n\f]+/g) || [];
            }
            for (_0x117ef1 = _0x1533a6.length; _0x117ef1--; ) {
              delete _0x30f257[_0x1533a6[_0x117ef1]];
            }
          }
          if (undefined === _0x1533a6 || _0xca1637.isEmptyObject(_0x30f257)) {
            if (_0x5eb98b.nodeType) {
              _0x5eb98b[this.expando] = undefined;
            } else {
              delete _0x5eb98b[this.expando];
            }
          }
        }
      },
      hasData: function (_0x636ff7) {
        _0x636ff7 = _0x636ff7[this.expando];
        return undefined !== _0x636ff7 && !_0xca1637.isEmptyObject(_0x636ff7);
      },
    };
    var _0x245b46 = new _0x1fd0f2();
    var _0x16d36b = new _0x1fd0f2();
    _0xca1637.extend({
      hasData: function (_0xe57847) {
        return _0x16d36b.hasData(_0xe57847) || _0x245b46.hasData(_0xe57847);
      },
      data: function (_0x46034f, _0x2e14ee, _0x4bf138) {
        return _0x16d36b.access(_0x46034f, _0x2e14ee, _0x4bf138);
      },
      removeData: function (_0xc99ec4, _0x3cc1b7) {
        _0x16d36b.remove(_0xc99ec4, _0x3cc1b7);
      },
      _data: function (_0x4fb443, _0x149818, _0x5a8e82) {
        return _0x245b46.access(_0x4fb443, _0x149818, _0x5a8e82);
      },
      _removeData: function (_0x44178a, _0x274e9d) {
        _0x245b46.remove(_0x44178a, _0x274e9d);
      },
    });
    _0xca1637.fn.extend({
      data: function (_0x547d3b, _0x4bf153) {
        var _0x151719;
        var _0x1190e7;
        var _0x3759d8;
        var _0x1aca85 = this[0x0];
        var _0x4c5230 = _0x1aca85 && _0x1aca85.attributes;
        if (undefined === _0x547d3b) {
          if (
            this.length &&
            ((_0x3759d8 = _0x16d36b.get(_0x1aca85)),
            0x1 === _0x1aca85.nodeType &&
              !_0x245b46.get(_0x1aca85, "hasDataAttrs"))
          ) {
            for (_0x151719 = _0x4c5230.length; _0x151719--; ) {
              if (_0x4c5230[_0x151719]) {
                _0x1190e7 = _0x4c5230[_0x151719].name;
                if (0x0 === _0x1190e7.indexOf("data-")) {
                  _0x1190e7 = _0xca1637.camelCase(_0x1190e7.slice(0x5));
                  _0x11d917(_0x1aca85, _0x1190e7, _0x3759d8[_0x1190e7]);
                }
              }
            }
            _0x245b46.set(_0x1aca85, "hasDataAttrs", true);
          }
          return _0x3759d8;
        }
        return "object" == typeof _0x547d3b
          ? this.each(function () {
              _0x16d36b.set(this, _0x547d3b);
            })
          : _0x218b33(
              this,
              function (_0x698712) {
                var _0x4959c9;
                if (_0x1aca85 && undefined === _0x698712) {
                  _0x4959c9 = _0x16d36b.get(_0x1aca85, _0x547d3b);
                  if (
                    undefined !== _0x4959c9 ||
                    ((_0x4959c9 = _0x11d917(_0x1aca85, _0x547d3b)),
                    undefined !== _0x4959c9)
                  ) {
                    return _0x4959c9;
                  }
                } else {
                  this.each(function () {
                    _0x16d36b.set(this, _0x547d3b, _0x698712);
                  });
                }
              },
              null,
              _0x4bf153,
              0x1 < arguments.length,
              null,
              true
            );
      },
      removeData: function (_0x53df02) {
        return this.each(function () {
          _0x16d36b.remove(this, _0x53df02);
        });
      },
    });
    _0xca1637.extend({
      queue: function (_0x5e6751, _0x29c84c, _0x2a65ea) {
        var _0x9cd25;
        if (_0x5e6751) {
          _0x29c84c = (_0x29c84c || "fx") + "queue";
          _0x9cd25 = _0x245b46.get(_0x5e6751, _0x29c84c);
          if (_0x2a65ea) {
            if (!_0x9cd25 || Array.isArray(_0x2a65ea)) {
              _0x9cd25 = _0x245b46.access(
                _0x5e6751,
                _0x29c84c,
                _0xca1637.makeArray(_0x2a65ea)
              );
            } else {
              _0x9cd25.push(_0x2a65ea);
            }
          }
          return _0x9cd25 || [];
        }
      },
      dequeue: function (_0x48e5dd, _0x33caf4) {
        _0x33caf4 = _0x33caf4 || "fx";
        var _0x1df045 = _0xca1637.queue(_0x48e5dd, _0x33caf4);
        var _0x1777c1 = _0x1df045.length;
        var _0x57015d = _0x1df045.shift();
        var _0x20b0bc = _0xca1637._queueHooks(_0x48e5dd, _0x33caf4);
        var _0x19c33f = function () {
          _0xca1637.dequeue(_0x48e5dd, _0x33caf4);
        };
        if ("inprogress" === _0x57015d) {
          _0x57015d = _0x1df045.shift();
          _0x1777c1--;
        }
        if (_0x57015d) {
          if ("fx" === _0x33caf4) {
            _0x1df045.unshift("inprogress");
          }
          delete _0x20b0bc.stop;
          _0x57015d.call(_0x48e5dd, _0x19c33f, _0x20b0bc);
        }
        if (!_0x1777c1 && _0x20b0bc) {
          _0x20b0bc.empty.fire();
        }
      },
      _queueHooks: function (_0x2d35cc, _0x5bf65e) {
        var _0x785c43 = _0x5bf65e + "queueHooks";
        return (
          _0x245b46.get(_0x2d35cc, _0x785c43) ||
          _0x245b46.access(_0x2d35cc, _0x785c43, {
            empty: _0xca1637.Callbacks("once memory").add(function () {
              _0x245b46.remove(_0x2d35cc, [_0x5bf65e + "queue", _0x785c43]);
            }),
          })
        );
      },
    });
    _0xca1637.fn.extend({
      queue: function (_0x23792b, _0x2a7507) {
        var _0x5bcde1 = 0x2;
        if ("string" != typeof _0x23792b) {
          _0x2a7507 = _0x23792b;
          _0x23792b = "fx";
          _0x5bcde1--;
        }
        return arguments.length < _0x5bcde1
          ? _0xca1637.queue(this[0x0], _0x23792b)
          : undefined === _0x2a7507
          ? this
          : this.each(function () {
              var _0x160849 = _0xca1637.queue(this, _0x23792b, _0x2a7507);
              _0xca1637._queueHooks(this, _0x23792b);
              if ("fx" === _0x23792b && "inprogress" !== _0x160849[0x0]) {
                _0xca1637.dequeue(this, _0x23792b);
              }
            });
      },
      dequeue: function (_0xd5ba59) {
        return this.each(function () {
          _0xca1637.dequeue(this, _0xd5ba59);
        });
      },
      clearQueue: function (_0x530133) {
        return this.queue(_0x530133 || "fx", []);
      },
      promise: function (_0x3c17d1, _0x4c7455) {
        var _0x2205be;
        var _0x12beeb = 0x1;
        var _0x3fa103 = _0xca1637.Deferred();
        var _0x5007ba = this;
        var _0x1b1f6f = this.length;
        var _0x1f69ff = function () {
          if (!--_0x12beeb) {
            _0x3fa103.resolveWith(_0x5007ba, [_0x5007ba]);
          }
        };
        if ("string" != typeof _0x3c17d1) {
          _0x4c7455 = _0x3c17d1;
          _0x3c17d1 = undefined;
        }
        for (_0x3c17d1 = _0x3c17d1 || "fx"; _0x1b1f6f--; ) {
          if (
            (_0x2205be = _0x245b46.get(
              _0x5007ba[_0x1b1f6f],
              _0x3c17d1 + "queueHooks"
            )) &&
            _0x2205be.empty
          ) {
            _0x12beeb++;
            _0x2205be.empty.add(_0x1f69ff);
          }
        }
        _0x1f69ff();
        return _0x3fa103.promise(_0x4c7455);
      },
    });
    var _0x4899a7 = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
    var _0xfc4a92 = RegExp("^(?:([+-])=|)(" + _0x4899a7 + ")([a-z%]*)$", "i");
    var _0x175776 = ["Top", "Right", "Bottom", "Left"];
    var _0x3b6706 = function (_0x17fc44, _0x2f69ba) {
      _0x17fc44 = _0x2f69ba || _0x17fc44;
      return (
        "none" === _0x17fc44.style.display ||
        ("" === _0x17fc44.style.display &&
          _0xca1637.contains(_0x17fc44.ownerDocument, _0x17fc44) &&
          "none" === _0xca1637.css(_0x17fc44, "display"))
      );
    };
    var _0x37abc2 = function (_0x4d9c71, _0x38c8a0, _0x422c24, _0x472772) {
      var _0x39b79f;
      var _0x41f690 = {};
      for (_0x39b79f in _0x38c8a0) {
        _0x41f690[_0x39b79f] = _0x4d9c71.style[_0x39b79f];
        _0x4d9c71.style[_0x39b79f] = _0x38c8a0[_0x39b79f];
      }
      _0x422c24 = _0x422c24.apply(_0x4d9c71, _0x472772 || []);
      for (_0x39b79f in _0x38c8a0)
        _0x4d9c71.style[_0x39b79f] = _0x41f690[_0x39b79f];
      return _0x422c24;
    };
    var _0x1babc5 = {};
    _0xca1637.fn.extend({
      show: function () {
        return _0x10902f(this, true);
      },
      hide: function () {
        return _0x10902f(this);
      },
      toggle: function (_0x3668e8) {
        return "boolean" == typeof _0x3668e8
          ? _0x3668e8
            ? this.show()
            : this.hide()
          : this.each(function () {
              if (_0x3b6706(this)) {
                new _0xca1637.fn.init(this, undefined).show();
              } else {
                new _0xca1637.fn.init(this, undefined).hide();
              }
            });
      },
    });
    var _0x1323a7 = {
      option: [0x1, "<select multiple='multiple'>", "</select>"],
      thead: [0x1, "<table>", "</table>"],
      col: [0x2, "<table><colgroup>", "</colgroup></table>"],
      tr: [0x2, "<table><tbody>", "</tbody></table>"],
      td: [0x3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0x0, "", ""],
    };
    _0x1323a7.optgroup = _0x1323a7.option;
    _0x1323a7.tbody =
      _0x1323a7.tfoot =
      _0x1323a7.colgroup =
      _0x1323a7.caption =
        _0x1323a7.thead;
    _0x1323a7.th = _0x1323a7.td;
    var _0x3e4375 = _0x3abdcc
      .createDocumentFragment()
      .appendChild(_0x3abdcc.createElement("div"));
    var _0xdac3f9 = _0x3abdcc.createElement("input");
    _0xdac3f9.setAttribute("type", "radio");
    _0xdac3f9.setAttribute("checked", "checked");
    _0xdac3f9.setAttribute("name", "t");
    _0x3e4375.appendChild(_0xdac3f9);
    _0x139b38.checkClone = _0x3e4375
      .cloneNode(true)
      .cloneNode(true).lastChild.checked;
    _0x3e4375.innerHTML = "<textarea>x</textarea>";
    _0x139b38.noCloneChecked =
      !!_0x3e4375.cloneNode(true).lastChild.defaultValue;
    true;
    var _0x19f67f = _0x3abdcc.documentElement;
    _0xca1637.event = {
      global: {},
      add: function (_0x2e2a35, _0x33570c, _0x187c30, _0x7c76b4, _0xc7bc22) {
        var _0x1aa7df;
        var _0x2f69b2;
        var _0x1a5f53;
        var _0x13e2cf;
        var _0x42dba5;
        var _0x184552;
        var _0x4d5488;
        var _0x58baef;
        var _0x3c6096;
        var _0x537be3;
        if ((_0x42dba5 = _0x245b46.get(_0x2e2a35))) {
          if (_0x187c30.handler) {
            _0x1aa7df = _0x187c30;
            _0x187c30 = _0x1aa7df.handler;
            _0xc7bc22 = _0x1aa7df.selector;
          }
          if (_0xc7bc22) {
            _0xca1637.find.matchesSelector(_0x19f67f, _0xc7bc22);
          }
          if (!_0x187c30.guid) {
            _0x187c30.guid = _0xca1637.guid++;
          }
          if (!(_0x13e2cf = _0x42dba5.events)) {
            _0x13e2cf = _0x42dba5.events = {};
          }
          if (!(_0x2f69b2 = _0x42dba5.handle)) {
            _0x2f69b2 = _0x42dba5.handle = function (_0x37ee50) {
              return "undefined" != typeof _0xca1637 &&
                _0xca1637.event.triggered !== _0x37ee50.type
                ? _0xca1637.event.dispatch.apply(_0x2e2a35, arguments)
                : undefined;
            };
          }
          _0x33570c = (_0x33570c || "").match(/[^\x20\t\r\n\f]+/g) || [""];
          for (_0x42dba5 = _0x33570c.length; _0x42dba5--; ) {
            _0x1a5f53 = /^([^.]*)(?:\.(.+)|)/.exec(_0x33570c[_0x42dba5]) || [];
            _0x3c6096 = _0x537be3 = _0x1a5f53[0x1];
            _0x1a5f53 = (_0x1a5f53[0x2] || "").split(".").sort();
            if (_0x3c6096) {
              _0x4d5488 = _0xca1637.event.special[_0x3c6096] || {};
              _0x3c6096 =
                (_0xc7bc22 ? _0x4d5488.delegateType : _0x4d5488.bindType) ||
                _0x3c6096;
              _0x4d5488 = _0xca1637.event.special[_0x3c6096] || {};
              _0x184552 = _0xca1637.extend(
                {
                  type: _0x3c6096,
                  origType: _0x537be3,
                  data: _0x7c76b4,
                  handler: _0x187c30,
                  guid: _0x187c30.guid,
                  selector: _0xc7bc22,
                  needsContext:
                    _0xc7bc22 &&
                    _0xca1637.expr.match.needsContext.test(_0xc7bc22),
                  namespace: _0x1a5f53.join("."),
                },
                _0x1aa7df
              );
              if (!(_0x58baef = _0x13e2cf[_0x3c6096])) {
                _0x58baef = _0x13e2cf[_0x3c6096] = [];
                _0x58baef.delegateCount = 0x0;
                if (
                  !(
                    _0x4d5488.setup &&
                    false !==
                      _0x4d5488.setup.call(
                        _0x2e2a35,
                        _0x7c76b4,
                        _0x1a5f53,
                        _0x2f69b2
                      )
                  )
                ) {
                  if (_0x2e2a35.addEventListener) {
                    _0x2e2a35.addEventListener(_0x3c6096, _0x2f69b2);
                  }
                }
              }
              if (_0x4d5488.add) {
                _0x4d5488.add.call(_0x2e2a35, _0x184552);
                if (!_0x184552.handler.guid) {
                  _0x184552.handler.guid = _0x187c30.guid;
                }
              }
              if (_0xc7bc22) {
                _0x58baef.splice(_0x58baef.delegateCount++, 0x0, _0x184552);
              } else {
                _0x58baef.push(_0x184552);
              }
              _0xca1637.event.global[_0x3c6096] = true;
            }
          }
        }
      },
      remove: function (_0x4a5254, _0x4574be, _0x579c0d, _0x4b83c6, _0x213619) {
        var _0x3d7b31;
        var _0xf2380e;
        var _0xfc067;
        var _0x32b425;
        var _0x58c270;
        var _0x583b43;
        var _0xc53c79;
        var _0x314b71;
        var _0x1cf948;
        var _0x26c1a4;
        var _0x43bfea;
        var _0x4c2ea0 =
          _0x245b46.hasData(_0x4a5254) && _0x245b46.get(_0x4a5254);
        if (_0x4c2ea0 && (_0x32b425 = _0x4c2ea0.events)) {
          _0x4574be = (_0x4574be || "").match(/[^\x20\t\r\n\f]+/g) || [""];
          for (_0x58c270 = _0x4574be.length; _0x58c270--; ) {
            _0xfc067 = /^([^.]*)(?:\.(.+)|)/.exec(_0x4574be[_0x58c270]) || [];
            _0x1cf948 = _0x43bfea = _0xfc067[0x1];
            _0x26c1a4 = (_0xfc067[0x2] || "").split(".").sort();
            if (_0x1cf948) {
              _0xc53c79 = _0xca1637.event.special[_0x1cf948] || {};
              _0x1cf948 =
                (_0x4b83c6 ? _0xc53c79.delegateType : _0xc53c79.bindType) ||
                _0x1cf948;
              _0x314b71 = _0x32b425[_0x1cf948] || [];
              _0xfc067 =
                _0xfc067[0x2] &&
                RegExp("(^|\\.)" + _0x26c1a4.join("\\.(?:.*\\.|)") + "(\\.|$)");
              for (_0xf2380e = _0x3d7b31 = _0x314b71.length; _0x3d7b31--; ) {
                _0x583b43 = _0x314b71[_0x3d7b31];
                if (
                  !(
                    (!_0x213619 && _0x43bfea !== _0x583b43.origType) ||
                    (_0x579c0d && _0x579c0d.guid !== _0x583b43.guid) ||
                    (_0xfc067 && !_0xfc067.test(_0x583b43.namespace)) ||
                    (_0x4b83c6 &&
                      _0x4b83c6 !== _0x583b43.selector &&
                      ("**" !== _0x4b83c6 || !_0x583b43.selector))
                  )
                ) {
                  _0x314b71.splice(_0x3d7b31, 0x1);
                  if (_0x583b43.selector) {
                    _0x314b71.delegateCount--;
                  }
                  if (_0xc53c79.remove) {
                    _0xc53c79.remove.call(_0x4a5254, _0x583b43);
                  }
                }
              }
              if (_0xf2380e && !_0x314b71.length) {
                if (
                  !(
                    _0xc53c79.teardown &&
                    false !==
                      _0xc53c79.teardown.call(
                        _0x4a5254,
                        _0x26c1a4,
                        _0x4c2ea0.handle
                      )
                  )
                ) {
                  _0xca1637.removeEvent(_0x4a5254, _0x1cf948, _0x4c2ea0.handle);
                }
                delete _0x32b425[_0x1cf948];
              }
            } else {
              for (_0x1cf948 in _0x32b425)
                _0xca1637.event.remove(
                  _0x4a5254,
                  _0x1cf948 + _0x4574be[_0x58c270],
                  _0x579c0d,
                  _0x4b83c6,
                  true
                );
            }
          }
          if (_0xca1637.isEmptyObject(_0x32b425)) {
            _0x245b46.remove(_0x4a5254, "handle events");
          }
        }
      },
      dispatch: function (_0x44217d) {
        var _0x2a8518 = _0xca1637.event.fix(_0x44217d);
        var _0x3dcbf7;
        var _0x25a9e5;
        var _0x1da4d5;
        var _0x19d2c2;
        var _0x9d75f9;
        var _0x2441c8;
        var _0x2f383c = Array(arguments.length);
        _0x25a9e5 = (_0x245b46.get(this, "events") || {})[_0x2a8518.type] || [];
        var _0x3beff3 = _0xca1637.event.special[_0x2a8518.type] || {};
        _0x2f383c[0x0] = _0x2a8518;
        for (_0x3dcbf7 = 0x1; _0x3dcbf7 < arguments.length; _0x3dcbf7++) {
          _0x2f383c[_0x3dcbf7] = arguments[_0x3dcbf7];
        }
        _0x2a8518.delegateTarget = this;
        if (
          !_0x3beff3.preDispatch ||
          false !== _0x3beff3.preDispatch.call(this, _0x2a8518)
        ) {
          _0x2441c8 = _0xca1637.event.handlers.call(this, _0x2a8518, _0x25a9e5);
          for (
            _0x3dcbf7 = 0x0;
            (_0x19d2c2 = _0x2441c8[_0x3dcbf7++]) &&
            !_0x2a8518.isPropagationStopped();

          ) {
            _0x2a8518.currentTarget = _0x19d2c2.elem;
            for (
              _0x25a9e5 = 0x0;
              (_0x9d75f9 = _0x19d2c2.handlers[_0x25a9e5++]) &&
              !_0x2a8518.isImmediatePropagationStopped();

            ) {
              if (
                !(
                  _0x2a8518.rnamespace &&
                  !_0x2a8518.rnamespace.test(_0x9d75f9.namespace)
                )
              ) {
                _0x2a8518.handleObj = _0x9d75f9;
                _0x2a8518.data = _0x9d75f9.data;
                _0x1da4d5 = (
                  (_0xca1637.event.special[_0x9d75f9.origType] || {}).handle ||
                  _0x9d75f9.handler
                ).apply(_0x19d2c2.elem, _0x2f383c);
                if (
                  undefined !== _0x1da4d5 &&
                  false === (_0x2a8518.result = _0x1da4d5)
                ) {
                  _0x2a8518.preventDefault();
                  _0x2a8518.stopPropagation();
                }
              }
            }
          }
          if (_0x3beff3.postDispatch) {
            _0x3beff3.postDispatch.call(this, _0x2a8518);
          }
          return _0x2a8518.result;
        }
      },
      handlers: function (_0x5856b0, _0x26218d) {
        var _0x1cd66a;
        var _0x51325e;
        var _0x20f641;
        var _0x3e0c76;
        var _0x1543e7;
        var _0xb97d59 = [];
        var _0x8a1efb = _0x26218d.delegateCount;
        var _0x4324ca = _0x5856b0.target;
        if (
          _0x8a1efb &&
          _0x4324ca.nodeType &&
          !("click" === _0x5856b0.type && 0x1 <= _0x5856b0.button)
        ) {
          for (; _0x4324ca !== this; _0x4324ca = _0x4324ca.parentNode || this) {
            if (
              0x1 === _0x4324ca.nodeType &&
              ("click" !== _0x5856b0.type || true !== _0x4324ca.disabled)
            ) {
              _0x3e0c76 = [];
              _0x1543e7 = {};
              for (_0x1cd66a = 0x0; _0x1cd66a < _0x8a1efb; _0x1cd66a++) {
                _0x51325e = _0x26218d[_0x1cd66a];
                _0x20f641 = _0x51325e.selector + " ";
                if (undefined === _0x1543e7[_0x20f641]) {
                  _0x1543e7[_0x20f641] = _0x51325e.needsContext
                    ? -0x1 <
                      new _0xca1637.fn.init(_0x20f641, this).index(_0x4324ca)
                    : _0xca1637.find(_0x20f641, this, null, [_0x4324ca]).length;
                }
                if (_0x1543e7[_0x20f641]) {
                  _0x3e0c76.push(_0x51325e);
                }
              }
              if (_0x3e0c76.length) {
                _0xb97d59.push({
                  elem: _0x4324ca,
                  handlers: _0x3e0c76,
                });
              }
            }
          }
        }
        _0x4324ca = this;
        if (_0x8a1efb < _0x26218d.length) {
          _0xb97d59.push({
            elem: _0x4324ca,
            handlers: _0x26218d.slice(_0x8a1efb),
          });
        }
        return _0xb97d59;
      },
      addProp: function (_0x4cc9fb, _0x1c67b4) {
        Object.defineProperty(_0xca1637.Event.prototype, _0x4cc9fb, {
          enumerable: true,
          configurable: true,
          get: _0xca1637.isFunction(_0x1c67b4)
            ? function () {
                if (this.originalEvent) {
                  return _0x1c67b4(this.originalEvent);
                }
              }
            : function () {
                if (this.originalEvent) {
                  return this.originalEvent[_0x4cc9fb];
                }
              },
          set: function (_0x3fb029) {
            Object.defineProperty(this, _0x4cc9fb, {
              enumerable: true,
              configurable: true,
              writable: true,
              value: _0x3fb029,
            });
          },
        });
      },
      fix: function (_0x2a391e) {
        return _0x2a391e[_0xca1637.expando]
          ? _0x2a391e
          : new _0xca1637.Event(_0x2a391e);
      },
      special: {
        load: {
          noBubble: true,
        },
        focus: {
          trigger: function () {
            if (this !== _0xad3b43() && this.focus) {
              this.focus();
              return false;
            }
          },
          delegateType: "focusin",
        },
        blur: {
          trigger: function () {
            if (this === _0xad3b43() && this.blur) {
              this.blur();
              return false;
            }
          },
          delegateType: "focusout",
        },
        click: {
          trigger: function () {
            if (
              "checkbox" === this.type &&
              this.click &&
              this.nodeName &&
              this.nodeName.toLowerCase() === "input".toLowerCase()
            ) {
              this.click();
              return false;
            }
          },
          _default: function (_0x4abe69) {
            return (
              _0x4abe69.target.nodeName &&
              _0x4abe69.target.nodeName.toLowerCase() === "a".toLowerCase()
            );
          },
        },
        beforeunload: {
          postDispatch: function (_0x5a6415) {
            if (undefined !== _0x5a6415.result && _0x5a6415.originalEvent) {
              _0x5a6415.originalEvent.returnValue = _0x5a6415.result;
            }
          },
        },
      },
    };
    _0xca1637.removeEvent = function (_0x39f4c0, _0x2313da, _0x5a27d6) {
      if (_0x39f4c0.removeEventListener) {
        _0x39f4c0.removeEventListener(_0x2313da, _0x5a27d6);
      }
    };
    _0xca1637.Event = function (_0x3f0396, _0x50b0fd) {
      return this instanceof _0xca1637.Event
        ? (_0x3f0396 && _0x3f0396.type
            ? ((this.originalEvent = _0x3f0396),
              (this.type = _0x3f0396.type),
              (this.isDefaultPrevented =
                _0x3f0396.defaultPrevented ||
                (undefined === _0x3f0396.defaultPrevented &&
                  false === _0x3f0396.returnValue)
                  ? _0x42eb89
                  : _0x182e54),
              (this.target =
                _0x3f0396.target && 0x3 === _0x3f0396.target.nodeType
                  ? _0x3f0396.target.parentNode
                  : _0x3f0396.target),
              (this.currentTarget = _0x3f0396.currentTarget),
              (this.relatedTarget = _0x3f0396.relatedTarget))
            : (this.type = _0x3f0396),
          _0x50b0fd && _0xca1637.extend(this, _0x50b0fd),
          (this.timeStamp =
            (_0x3f0396 && _0x3f0396.timeStamp) || _0xca1637.now()),
          void (this[_0xca1637.expando] = true))
        : new _0xca1637.Event(_0x3f0396, _0x50b0fd);
    };
    _0xca1637.Event.prototype = {
      constructor: _0xca1637.Event,
      isDefaultPrevented: _0x182e54,
      isPropagationStopped: _0x182e54,
      isImmediatePropagationStopped: _0x182e54,
      isSimulated: false,
      preventDefault: function () {
        var _0x1983d1 = this.originalEvent;
        this.isDefaultPrevented = _0x42eb89;
        if (_0x1983d1 && !this.isSimulated) {
          _0x1983d1.preventDefault();
        }
      },
      stopPropagation: function () {
        var _0x43fdf3 = this.originalEvent;
        this.isPropagationStopped = _0x42eb89;
        if (_0x43fdf3 && !this.isSimulated) {
          _0x43fdf3.stopPropagation();
        }
      },
      stopImmediatePropagation: function () {
        var _0x4dec6e = this.originalEvent;
        this.isImmediatePropagationStopped = _0x42eb89;
        if (_0x4dec6e && !this.isSimulated) {
          _0x4dec6e.stopImmediatePropagation();
        }
        this.stopPropagation();
      },
    };
    _0xca1637.each(
      {
        altKey: true,
        bubbles: true,
        cancelable: true,
        changedTouches: true,
        ctrlKey: true,
        detail: true,
        eventPhase: true,
        metaKey: true,
        pageX: true,
        pageY: true,
        shiftKey: true,
        view: true,
        char: true,
        charCode: true,
        key: true,
        keyCode: true,
        button: true,
        buttons: true,
        clientX: true,
        clientY: true,
        offsetX: true,
        offsetY: true,
        pointerId: true,
        pointerType: true,
        screenX: true,
        screenY: true,
        targetTouches: true,
        toElement: true,
        touches: true,
        which: function (_0x448adb) {
          var _0x8b0a96 = _0x448adb.button;
          return null == _0x448adb.which && /^key/.test(_0x448adb.type)
            ? null != _0x448adb.charCode
              ? _0x448adb.charCode
              : _0x448adb.keyCode
            : !_0x448adb.which &&
              undefined !== _0x8b0a96 &&
              /^(?:mouse|pointer|contextmenu|drag|drop)|click/.test(
                _0x448adb.type
              )
            ? 0x1 & _0x8b0a96
              ? 0x1
              : 0x2 & _0x8b0a96
              ? 0x3
              : 0x4 & _0x8b0a96
              ? 0x2
              : 0x0
            : _0x448adb.which;
        },
      },
      _0xca1637.event.addProp
    );
    _0xca1637.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (_0xcd0ae7, _0xbb6a9f) {
        _0xca1637.event.special[_0xcd0ae7] = {
          delegateType: _0xbb6a9f,
          bindType: _0xbb6a9f,
          handle: function (_0xf63b88) {
            var _0x13fb1e;
            var _0x19c183 = _0xf63b88.relatedTarget;
            var _0xb92113 = _0xf63b88.handleObj;
            if (
              !(
                _0x19c183 &&
                (_0x19c183 === this || _0xca1637.contains(this, _0x19c183))
              )
            ) {
              _0xf63b88.type = _0xb92113.origType;
              _0x13fb1e = _0xb92113.handler.apply(this, arguments);
              _0xf63b88.type = _0xbb6a9f;
            }
            return _0x13fb1e;
          },
        };
      }
    );
    _0xca1637.fn.extend({
      on: function (_0x3d1b37, _0x5bcf52, _0x2aa7bc, _0x400b2a) {
        return _0x3c04e6(this, _0x3d1b37, _0x5bcf52, _0x2aa7bc, _0x400b2a);
      },
      one: function (_0x4a195d, _0x4402e4, _0x311cd8, _0x982d65) {
        return _0x3c04e6(this, _0x4a195d, _0x4402e4, _0x311cd8, _0x982d65, 0x1);
      },
      off: function (_0x5c8451, _0x42c4f2, _0x503388) {
        var _0x1845f4;
        var _0x213893;
        if (_0x5c8451 && _0x5c8451.preventDefault && _0x5c8451.handleObj) {
          _0x1845f4 = _0x5c8451.handleObj;
          new _0xca1637.fn.init(_0x5c8451.delegateTarget, undefined).off(
            _0x1845f4.namespace
              ? _0x1845f4.origType + "." + _0x1845f4.namespace
              : _0x1845f4.origType,
            _0x1845f4.selector,
            _0x1845f4.handler
          );
          return this;
        }
        if ("object" == typeof _0x5c8451) {
          for (_0x213893 in _0x5c8451)
            this.off(_0x213893, _0x42c4f2, _0x5c8451[_0x213893]);
          return this;
        }
        if (!(false !== _0x42c4f2 && "function" != typeof _0x42c4f2)) {
          _0x503388 = _0x42c4f2;
          _0x42c4f2 = undefined;
        }
        if (false === _0x503388) {
          _0x503388 = _0x182e54;
        }
        return this.each(function () {
          _0xca1637.event.remove(this, _0x5c8451, _0x503388, _0x42c4f2);
        });
      },
    });
    _0xca1637.extend({
      htmlPrefilter: function (_0x431157) {
        return _0x431157.replace(
          /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
          "<$1></$2>"
        );
      },
      clone: function (_0x20f5d, _0x35b3e5, _0x299293) {
        var _0x24030f;
        var _0x37b75b;
        var _0x357670;
        var _0x4abd41;
        var _0xc646c8 = _0x20f5d.cloneNode(true);
        var _0x221b13 = _0xca1637.contains(_0x20f5d.ownerDocument, _0x20f5d);
        if (
          !_0x139b38.noCloneChecked &&
          !(
            (0x1 !== _0x20f5d.nodeType && 0xb !== _0x20f5d.nodeType) ||
            _0xca1637.isXMLDoc(_0x20f5d)
          )
        ) {
          _0x4abd41 = _0x280a46(_0xc646c8);
          _0x357670 = _0x280a46(_0x20f5d);
          _0x24030f = 0x0;
          for (
            _0x37b75b = _0x357670.length;
            _0x24030f < _0x37b75b;
            _0x24030f++
          ) {
            var _0x3f5b9f = _0x357670[_0x24030f];
            var _0x6c157c = _0x4abd41[_0x24030f];
            var _0x2e2462 = _0x6c157c.nodeName.toLowerCase();
            if (
              "input" === _0x2e2462 &&
              /^(?:checkbox|radio)$/i.test(_0x3f5b9f.type)
            ) {
              _0x6c157c.checked = _0x3f5b9f.checked;
            } else if (!("input" !== _0x2e2462 && "textarea" !== _0x2e2462)) {
              _0x6c157c.defaultValue = _0x3f5b9f.defaultValue;
            }
          }
        }
        if (_0x35b3e5) {
          if (_0x299293) {
            _0x357670 = _0x357670 || _0x280a46(_0x20f5d);
            _0x4abd41 = _0x4abd41 || _0x280a46(_0xc646c8);
            _0x24030f = 0x0;
            for (
              _0x37b75b = _0x357670.length;
              _0x24030f < _0x37b75b;
              _0x24030f++
            ) {
              _0x49a5ce(_0x357670[_0x24030f], _0x4abd41[_0x24030f]);
            }
          } else {
            _0x49a5ce(_0x20f5d, _0xc646c8);
          }
        }
        _0x4abd41 = _0x280a46(_0xc646c8, "script");
        if (0x0 < _0x4abd41.length) {
          _0x5c5f84(_0x4abd41, !_0x221b13 && _0x280a46(_0x20f5d, "script"));
        }
        return _0xc646c8;
      },
      cleanData: function (_0xd39335) {
        var _0x1f1db6;
        var _0x51bbd1;
        var _0x30743a;
        var _0x545919 = _0xca1637.event.special;
        for (
          var _0x2cbf23 = 0x0;
          undefined !== (_0x51bbd1 = _0xd39335[_0x2cbf23]);
          _0x2cbf23++
        ) {
          if (
            0x1 === _0x51bbd1.nodeType ||
            0x9 === _0x51bbd1.nodeType ||
            !+_0x51bbd1.nodeType
          ) {
            if ((_0x1f1db6 = _0x51bbd1[_0x245b46.expando])) {
              if (_0x1f1db6.events) {
                for (_0x30743a in _0x1f1db6.events)
                  if (_0x545919[_0x30743a]) {
                    _0xca1637.event.remove(_0x51bbd1, _0x30743a);
                  } else {
                    _0xca1637.removeEvent(
                      _0x51bbd1,
                      _0x30743a,
                      _0x1f1db6.handle
                    );
                  }
              }
              _0x51bbd1[_0x245b46.expando] = undefined;
            }
            if (_0x51bbd1[_0x16d36b.expando]) {
              _0x51bbd1[_0x16d36b.expando] = undefined;
            }
          }
        }
      },
    });
    _0xca1637.fn.extend({
      detach: function (_0x5d2524) {
        return _0x39950c(this, _0x5d2524, true);
      },
      remove: function (_0x39219d) {
        return _0x39950c(this, _0x39219d);
      },
      text: function (_0x4d33aa) {
        return _0x218b33(
          this,
          function (_0x368d88) {
            return undefined === _0x368d88
              ? _0xca1637.text(this)
              : this.empty().each(function () {
                  if (
                    !(
                      0x1 !== this.nodeType &&
                      0xb !== this.nodeType &&
                      0x9 !== this.nodeType
                    )
                  ) {
                    this.textContent = _0x368d88;
                  }
                });
          },
          null,
          _0x4d33aa,
          arguments.length
        );
      },
      append: function () {
        return _0x449f1a(this, arguments, function (_0x374217) {
          if (
            0x1 === this.nodeType ||
            0xb === this.nodeType ||
            0x9 === this.nodeType
          ) {
            (this.nodeName &&
            this.nodeName.toLowerCase() === "table".toLowerCase() &&
            (0xb !== _0x374217.nodeType ? _0x374217 : _0x374217.firstChild)
              .nodeName &&
            (0xb !== _0x374217.nodeType
              ? _0x374217
              : _0x374217.firstChild
            ).nodeName.toLowerCase() === "tr".toLowerCase()
              ? new _0xca1637.fn.init(">tbody", this)[0x0] || this
              : this
            ).appendChild(_0x374217);
          }
        });
      },
      prepend: function () {
        return _0x449f1a(this, arguments, function (_0x5e4df8) {
          if (
            0x1 === this.nodeType ||
            0xb === this.nodeType ||
            0x9 === this.nodeType
          ) {
            var _0x2ef6f0 =
              this.nodeName &&
              this.nodeName.toLowerCase() === "table".toLowerCase() &&
              (0xb !== _0x5e4df8.nodeType ? _0x5e4df8 : _0x5e4df8.firstChild)
                .nodeName &&
              (0xb !== _0x5e4df8.nodeType
                ? _0x5e4df8
                : _0x5e4df8.firstChild
              ).nodeName.toLowerCase() === "tr".toLowerCase()
                ? new _0xca1637.fn.init(">tbody", this)[0x0] || this
                : this;
            _0x2ef6f0.insertBefore(_0x5e4df8, _0x2ef6f0.firstChild);
          }
        });
      },
      before: function () {
        return _0x449f1a(this, arguments, function (_0x4ad2a6) {
          if (this.parentNode) {
            this.parentNode.insertBefore(_0x4ad2a6, this);
          }
        });
      },
      after: function () {
        return _0x449f1a(this, arguments, function (_0x510fc1) {
          if (this.parentNode) {
            this.parentNode.insertBefore(_0x510fc1, this.nextSibling);
          }
        });
      },
      empty: function () {
        var _0x485b53;
        for (
          var _0x16ca2b = 0x0;
          null != (_0x485b53 = this[_0x16ca2b]);
          _0x16ca2b++
        ) {
          if (0x1 === _0x485b53.nodeType) {
            _0xca1637.cleanData(_0x280a46(_0x485b53, false));
            _0x485b53.textContent = "";
          }
        }
        return this;
      },
      clone: function (_0x52aafa, _0x1b0702) {
        _0x52aafa = null != _0x52aafa && _0x52aafa;
        _0x1b0702 = null == _0x1b0702 ? _0x52aafa : _0x1b0702;
        return this.map(function () {
          return _0xca1637.clone(this, _0x52aafa, _0x1b0702);
        });
      },
      html: function (_0x5a6801) {
        return _0x218b33(
          this,
          function (_0x3fdc8a) {
            var _0x33f09e = this[0x0] || {};
            var _0x28e005 = 0x0;
            var _0x556e99 = this.length;
            if (undefined === _0x3fdc8a && 0x1 === _0x33f09e.nodeType) {
              return _0x33f09e.innerHTML;
            }
            if (
              "string" == typeof _0x3fdc8a &&
              !/<script|<style|<link/i.test(_0x3fdc8a) &&
              !_0x1323a7[
                (/<([a-z][^\/\0>\x20\t\r\n\f]+)/i.exec(_0x3fdc8a) || [
                  "",
                  "",
                ])[0x1].toLowerCase()
              ]
            ) {
              _0x3fdc8a = _0xca1637.htmlPrefilter(_0x3fdc8a);
              try {
                for (; _0x28e005 < _0x556e99; _0x28e005++) {
                  _0x33f09e = this[_0x28e005] || {};
                  if (0x1 === _0x33f09e.nodeType) {
                    _0xca1637.cleanData(_0x280a46(_0x33f09e, false));
                    _0x33f09e.innerHTML = _0x3fdc8a;
                  }
                }
                _0x33f09e = 0x0;
              } catch (_0x104d30) {}
            }
            if (_0x33f09e) {
              this.empty().append(_0x3fdc8a);
            }
          },
          null,
          _0x5a6801,
          arguments.length
        );
      },
      replaceWith: function () {
        var _0x52d699 = [];
        return _0x449f1a(
          this,
          arguments,
          function (_0x376ec9) {
            var _0x56f225 = this.parentNode;
            if (0x0 > _0xca1637.inArray(this, _0x52d699)) {
              _0xca1637.cleanData(_0x280a46(this));
              if (_0x56f225) {
                _0x56f225.replaceChild(_0x376ec9, this);
              }
            }
          },
          _0x52d699
        );
      },
    });
    _0xca1637.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (_0x44cea3, _0x581aff) {
        _0xca1637.fn[_0x44cea3] = function (_0x2522d1) {
          var _0xc3fda4 = [];
          var _0x53e9f7 = new _0xca1637.fn.init(_0x2522d1, undefined);
          var _0x250b68 = _0x53e9f7.length - 0x1;
          for (var _0x457381 = 0x0; _0x457381 <= _0x250b68; _0x457381++) {
            _0x2522d1 = _0x457381 === _0x250b68 ? this : this.clone(true);
            new _0xca1637.fn.init(_0x53e9f7[_0x457381], undefined)[_0x581aff](
              _0x2522d1
            );
            _0x435d2c.apply(_0xc3fda4, _0x2522d1.get());
          }
          return this.pushStack(_0xc3fda4);
        };
      }
    );
    var _0x5294c7 = RegExp("^(" + _0x4899a7 + ")(?!px)[a-z%]+$", "i");
    var _0x5d6f53 = function (_0x197f43) {
      var _0x22bfd6 = _0x197f43.ownerDocument.defaultView;
      if (!(_0x22bfd6 && _0x22bfd6.opener)) {
        _0x22bfd6 = _0x64ec9a;
      }
      return _0x22bfd6.getComputedStyle(_0x197f43);
    };
    var _0x115171 = function () {
      if (_0x411f04) {
        _0x411f04.style.cssText =
          "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%";
        _0x411f04.innerHTML = "";
        _0x19f67f.appendChild(_0x319796);
        var _0x2c829c = _0x64ec9a.getComputedStyle(_0x411f04);
        _0x2f2f99 = "1%" !== _0x2c829c.top;
        _0x52572d = "2px" === _0x2c829c.marginLeft;
        _0x253512 = "4px" === _0x2c829c.width;
        _0x411f04.style.marginRight = "50%";
        _0x3f3ce4 = "4px" === _0x2c829c.marginRight;
        _0x19f67f.removeChild(_0x319796);
        _0x411f04 = null;
      }
    };
    var _0x2f2f99;
    var _0x253512;
    var _0x3f3ce4;
    var _0x52572d;
    var _0x319796 = _0x3abdcc.createElement("div");
    var _0x411f04 = _0x3abdcc.createElement("div");
    if (_0x411f04.style) {
      _0x411f04.style.backgroundClip = "content-box";
      _0x411f04.cloneNode(true).style.backgroundClip = "";
      _0x139b38.clearCloneStyle =
        "content-box" === _0x411f04.style.backgroundClip;
      _0x319796.style.cssText =
        "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute";
      _0x319796.appendChild(_0x411f04);
      _0xca1637.extend(_0x139b38, {
        pixelPosition: function () {
          _0x115171();
          return _0x2f2f99;
        },
        boxSizingReliable: function () {
          _0x115171();
          return _0x253512;
        },
        pixelMarginRight: function () {
          _0x115171();
          return _0x3f3ce4;
        },
        reliableMarginLeft: function () {
          _0x115171();
          return _0x52572d;
        },
      });
    }
    true;
    var _0x303e61 = {
      position: "absolute",
      visibility: "hidden",
      display: "block",
    };
    var _0x1f236e = {
      letterSpacing: "0",
      fontWeight: "400",
    };
    var _0x17c339 = ["Webkit", "Moz", "ms"];
    var _0xd4d403 = _0x3abdcc.createElement("div").style;
    _0xca1637.extend({
      cssHooks: {
        opacity: {
          get: function (_0x3b24f6, _0x489248) {
            if (_0x489248) {
              var _0x526e79 = _0x130d43(_0x3b24f6, "opacity");
              return "" === _0x526e79 ? "1" : _0x526e79;
            }
          },
        },
      },
      cssNumber: {
        animationIterationCount: true,
        columnCount: true,
        fillOpacity: true,
        flexGrow: true,
        flexShrink: true,
        fontWeight: true,
        lineHeight: true,
        opacity: true,
        order: true,
        orphans: true,
        widows: true,
        zIndex: true,
        zoom: true,
      },
      cssProps: {
        float: "cssFloat",
      },
      style: function (_0x50d3d1, _0x2020d1, _0x5c9fe2, _0x14b5b5) {
        if (
          _0x50d3d1 &&
          0x3 !== _0x50d3d1.nodeType &&
          0x8 !== _0x50d3d1.nodeType &&
          _0x50d3d1.style
        ) {
          var _0x2f8c83;
          var _0x4aab5e;
          var _0x59b53b;
          var _0x5510d7 = _0xca1637.camelCase(_0x2020d1);
          var _0x2fa569 = /^--/.test(_0x2020d1);
          var _0x25737d = _0x50d3d1.style;
          if (!_0x2fa569) {
            _0x2020d1 = _0x4bb46d(_0x5510d7);
          }
          _0x59b53b =
            _0xca1637.cssHooks[_0x2020d1] || _0xca1637.cssHooks[_0x5510d7];
          return undefined === _0x5c9fe2
            ? _0x59b53b &&
              "get" in _0x59b53b &&
              undefined !==
                (_0x2f8c83 = _0x59b53b.get(_0x50d3d1, false, _0x14b5b5))
              ? _0x2f8c83
              : _0x25737d[_0x2020d1]
            : ((_0x4aab5e = typeof _0x5c9fe2),
              "string" === _0x4aab5e &&
                (_0x2f8c83 = _0xfc4a92.exec(_0x5c9fe2)) &&
                _0x2f8c83[0x1] &&
                ((_0x5c9fe2 = _0x48f6ea(_0x50d3d1, _0x2020d1, _0x2f8c83)),
                (_0x4aab5e = "number")),
              null != _0x5c9fe2 &&
                _0x5c9fe2 === _0x5c9fe2 &&
                ("number" === _0x4aab5e &&
                  (_0x5c9fe2 +=
                    (_0x2f8c83 && _0x2f8c83[0x3]) ||
                    (_0xca1637.cssNumber[_0x5510d7] ? "" : "px")),
                _0x139b38.clearCloneStyle ||
                  "" !== _0x5c9fe2 ||
                  0x0 !== _0x2020d1.indexOf("background") ||
                  (_0x25737d[_0x2020d1] = "inherit"),
                (_0x59b53b &&
                  "set" in _0x59b53b &&
                  undefined ===
                    (_0x5c9fe2 = _0x59b53b.set(
                      _0x50d3d1,
                      _0x5c9fe2,
                      _0x14b5b5
                    ))) ||
                  (_0x2fa569
                    ? _0x25737d.setProperty(_0x2020d1, _0x5c9fe2)
                    : (_0x25737d[_0x2020d1] = _0x5c9fe2))),
              undefined);
        }
      },
      css: function (_0x3f5966, _0x32e3c5, _0x134fa4, _0x1bc29f) {
        var _0x245d82;
        var _0xdb3fae;
        var _0x2ffa69;
        var _0x1020ff = _0xca1637.camelCase(_0x32e3c5);
        if (!/^--/.test(_0x32e3c5)) {
          _0x32e3c5 = _0x4bb46d(_0x1020ff);
        }
        _0x2ffa69 =
          _0xca1637.cssHooks[_0x32e3c5] || _0xca1637.cssHooks[_0x1020ff];
        if (_0x2ffa69 && "get" in _0x2ffa69) {
          _0x245d82 = _0x2ffa69.get(_0x3f5966, true, _0x134fa4);
        }
        if (undefined === _0x245d82) {
          _0x245d82 = _0x130d43(_0x3f5966, _0x32e3c5, _0x1bc29f);
        }
        if ("normal" === _0x245d82 && _0x32e3c5 in _0x1f236e) {
          _0x245d82 = _0x1f236e[_0x32e3c5];
        }
        return "" === _0x134fa4 || _0x134fa4
          ? ((_0xdb3fae = parseFloat(_0x245d82)),
            true === _0x134fa4 || isFinite(_0xdb3fae)
              ? _0xdb3fae || 0x0
              : _0x245d82)
          : _0x245d82;
      },
    });
    _0xca1637.each(["height", "width"], function (_0x2d5877, _0x7e09bf) {
      _0xca1637.cssHooks[_0x7e09bf] = {
        get: function (_0x5ca93c, _0x231842, _0x341017) {
          if (_0x231842) {
            return !/^(none|table(?!-c[ea]).+)/.test(
              _0xca1637.css(_0x5ca93c, "display")
            ) ||
              (_0x5ca93c.getClientRects().length &&
                _0x5ca93c.getBoundingClientRect().width)
              ? _0xf14a2d(_0x5ca93c, _0x7e09bf, _0x341017)
              : _0x37abc2(_0x5ca93c, _0x303e61, function () {
                  return _0xf14a2d(_0x5ca93c, _0x7e09bf, _0x341017);
                });
          }
        },
        set: function (_0x549de6, _0x37a5ab, _0x4b8dc9) {
          var _0x27a50b;
          var _0x59d096 = _0x4b8dc9 && _0x5d6f53(_0x549de6);
          _0x4b8dc9 =
            _0x4b8dc9 &&
            _0x4ba426(
              _0x549de6,
              _0x7e09bf,
              _0x4b8dc9,
              "border-box" ===
                _0xca1637.css(_0x549de6, "boxSizing", false, _0x59d096),
              _0x59d096
            );
          if (
            _0x4b8dc9 &&
            (_0x27a50b = _0xfc4a92.exec(_0x37a5ab)) &&
            "px" !== (_0x27a50b[0x3] || "px")
          ) {
            _0x549de6.style[_0x7e09bf] = _0x37a5ab;
            _0x37a5ab = _0xca1637.css(_0x549de6, _0x7e09bf);
          }
          return _0x117926(_0x549de6, _0x37a5ab, _0x4b8dc9);
        },
      };
    });
    _0xca1637.cssHooks.marginLeft = _0x2b9e1c(
      _0x139b38.reliableMarginLeft,
      function (_0x72749b, _0x4cf6a6) {
        if (_0x4cf6a6) {
          return (
            (parseFloat(_0x130d43(_0x72749b, "marginLeft")) ||
              _0x72749b.getBoundingClientRect().left -
                _0x37abc2(
                  _0x72749b,
                  {
                    marginLeft: 0x0,
                  },
                  function () {
                    return _0x72749b.getBoundingClientRect().left;
                  }
                )) + "px"
          );
        }
      }
    );
    _0xca1637.each(
      {
        margin: "",
        padding: "",
        border: "Width",
      },
      function (_0xcd78be, _0x34315f) {
        _0xca1637.cssHooks[_0xcd78be + _0x34315f] = {
          expand: function (_0x1bf5c4) {
            var _0x478939 = 0x0;
            var _0x11ce0a = {};
            for (
              _0x1bf5c4 =
                "string" == typeof _0x1bf5c4
                  ? _0x1bf5c4.split(" ")
                  : [_0x1bf5c4];
              0x4 > _0x478939;
              _0x478939++
            ) {
              _0x11ce0a[_0xcd78be + _0x175776[_0x478939] + _0x34315f] =
                _0x1bf5c4[_0x478939] ||
                _0x1bf5c4[_0x478939 - 0x2] ||
                _0x1bf5c4[0x0];
            }
            return _0x11ce0a;
          },
        };
        if (!/^margin/.test(_0xcd78be)) {
          _0xca1637.cssHooks[_0xcd78be + _0x34315f].set = _0x117926;
        }
      }
    );
    _0xca1637.fn.extend({
      css: function (_0x3dcb2f, _0xb9e261) {
        return _0x218b33(
          this,
          function (_0x5016a6, _0x2d2e61, _0x3e36b2) {
            var _0x2d747f;
            var _0x4a23fc = {};
            var _0x40321a = 0x0;
            if (Array.isArray(_0x2d2e61)) {
              _0x3e36b2 = _0x5d6f53(_0x5016a6);
              for (
                _0x2d747f = _0x2d2e61.length;
                _0x40321a < _0x2d747f;
                _0x40321a++
              ) {
                _0x4a23fc[_0x2d2e61[_0x40321a]] = _0xca1637.css(
                  _0x5016a6,
                  _0x2d2e61[_0x40321a],
                  false,
                  _0x3e36b2
                );
              }
              return _0x4a23fc;
            }
            return undefined !== _0x3e36b2
              ? _0xca1637.style(_0x5016a6, _0x2d2e61, _0x3e36b2)
              : _0xca1637.css(_0x5016a6, _0x2d2e61);
          },
          _0x3dcb2f,
          _0xb9e261,
          0x1 < arguments.length
        );
      },
    });
    _0xca1637.Tween = _0x5a6f0f;
    _0x5a6f0f.prototype = {
      constructor: _0x5a6f0f,
      init: function (
        _0x185785,
        _0xa5c620,
        _0x2e0b87,
        _0x195447,
        _0x833b91,
        _0x5419d2
      ) {
        this.elem = _0x185785;
        this.prop = _0x2e0b87;
        this.easing = _0x833b91 || _0xca1637.easing._default;
        this.options = _0xa5c620;
        this.start = this.now = this.cur();
        this.end = _0x195447;
        this.unit = _0x5419d2 || (_0xca1637.cssNumber[_0x2e0b87] ? "" : "px");
      },
      cur: function () {
        var _0x4d55da = _0x5a6f0f.propHooks[this.prop];
        return _0x4d55da && _0x4d55da.get
          ? _0x4d55da.get(this)
          : _0x5a6f0f.propHooks._default.get(this);
      },
      run: function (_0x27ed79) {
        var _0x49cef4;
        var _0x599565 = _0x5a6f0f.propHooks[this.prop];
        if (this.options.duration) {
          this.pos = _0x49cef4 = _0xca1637.easing[this.easing](
            _0x27ed79,
            this.options.duration * _0x27ed79,
            0x0,
            0x1,
            this.options.duration
          );
        } else {
          this.pos = _0x49cef4 = _0x27ed79;
        }
        this.now = (this.end - this.start) * _0x49cef4 + this.start;
        if (this.options.step) {
          this.options.step.call(this.elem, this.now, this);
        }
        if (_0x599565 && _0x599565.set) {
          _0x599565.set(this);
        } else {
          _0x5a6f0f.propHooks._default.set(this);
        }
        return this;
      },
    };
    _0x5a6f0f.prototype.init.prototype = _0x5a6f0f.prototype;
    _0x5a6f0f.propHooks = {
      _default: {
        get: function (_0x16bf80) {
          var _0x58ec66;
          return 0x1 !== _0x16bf80.elem.nodeType ||
            (null != _0x16bf80.elem[_0x16bf80.prop] &&
              null == _0x16bf80.elem.style[_0x16bf80.prop])
            ? _0x16bf80.elem[_0x16bf80.prop]
            : ((_0x58ec66 = _0xca1637.css(_0x16bf80.elem, _0x16bf80.prop, "")),
              _0x58ec66 && "auto" !== _0x58ec66 ? _0x58ec66 : 0x0);
        },
        set: function (_0x3cbe86) {
          if (_0xca1637.fx.step[_0x3cbe86.prop]) {
            _0xca1637.fx.step[_0x3cbe86.prop](_0x3cbe86);
          } else if (
            0x1 !== _0x3cbe86.elem.nodeType ||
            (null == _0x3cbe86.elem.style[_0xca1637.cssProps[_0x3cbe86.prop]] &&
              !_0xca1637.cssHooks[_0x3cbe86.prop])
          ) {
            _0x3cbe86.elem[_0x3cbe86.prop] = _0x3cbe86.now;
          } else {
            _0xca1637.style(
              _0x3cbe86.elem,
              _0x3cbe86.prop,
              _0x3cbe86.now + _0x3cbe86.unit
            );
          }
        },
      },
    };
    _0x5a6f0f.propHooks.scrollTop = _0x5a6f0f.propHooks.scrollLeft = {
      set: function (_0x276252) {
        if (_0x276252.elem.nodeType && _0x276252.elem.parentNode) {
          _0x276252.elem[_0x276252.prop] = _0x276252.now;
        }
      },
    };
    _0xca1637.easing = {
      linear: function (_0x4ecf10) {
        return _0x4ecf10;
      },
      swing: function (_0x11fa81) {
        return 0.5 - Math.cos(_0x11fa81 * Math.PI) / 0x2;
      },
      _default: "swing",
    };
    _0xca1637.fx = _0x5a6f0f.prototype.init;
    _0xca1637.fx.step = {};
    var _0x583611;
    var _0x3fc081;
    _0xca1637.Animation = _0xca1637.extend(_0x26e6d7, {
      tweeners: {
        "*": [
          function (_0x221cbf, _0x4e4edd) {
            var _0x499283 = this.createTween(_0x221cbf, _0x4e4edd);
            _0x48f6ea(
              _0x499283.elem,
              _0x221cbf,
              _0xfc4a92.exec(_0x4e4edd),
              _0x499283
            );
            return _0x499283;
          },
        ],
      },
      tweener: function (_0x44a37e, _0x2afd2f) {
        if (_0xca1637.isFunction(_0x44a37e)) {
          _0x2afd2f = _0x44a37e;
          _0x44a37e = ["*"];
        } else {
          _0x44a37e = _0x44a37e.match(/[^\x20\t\r\n\f]+/g);
        }
        var _0x1de91d;
        var _0x4db57c = 0x0;
        for (
          var _0xc1f9e = _0x44a37e.length;
          _0x4db57c < _0xc1f9e;
          _0x4db57c++
        ) {
          _0x1de91d = _0x44a37e[_0x4db57c];
          _0x26e6d7.tweeners[_0x1de91d] = _0x26e6d7.tweeners[_0x1de91d] || [];
          _0x26e6d7.tweeners[_0x1de91d].unshift(_0x2afd2f);
        }
      },
      prefilters: [
        function (_0x145f8f, _0x123cd8, _0xb1deca) {
          var _0xa21841;
          var _0x31895e;
          var _0x532fdb;
          var _0x536e22;
          var _0x25c705;
          var _0x23b380;
          var _0xce57b1;
          var _0x47b1c9;
          var _0x183346 = "width" in _0x123cd8 || "height" in _0x123cd8;
          var _0x34c356 = this;
          var _0x27db23 = {};
          var _0x3daf4f = _0x145f8f.style;
          var _0x110647 = _0x145f8f.nodeType && _0x3b6706(_0x145f8f);
          var _0x4c7b9b = _0x245b46.get(_0x145f8f, "fxshow");
          if (!_0xb1deca.queue) {
            _0x536e22 = _0xca1637._queueHooks(_0x145f8f, "fx");
            if (null == _0x536e22.unqueued) {
              _0x536e22.unqueued = 0x0;
              _0x25c705 = _0x536e22.empty.fire;
              _0x536e22.empty.fire = function () {
                if (!_0x536e22.unqueued) {
                  _0x25c705();
                }
              };
            }
            _0x536e22.unqueued++;
            _0x34c356.always(function () {
              _0x34c356.always(function () {
                _0x536e22.unqueued--;
                if (!_0xca1637.queue(_0x145f8f, "fx").length) {
                  _0x536e22.empty.fire();
                }
              });
            });
          }
          for (_0xa21841 in _0x123cd8) {
            _0x31895e = _0x123cd8[_0xa21841];
            if (/^(?:toggle|show|hide)$/.test(_0x31895e)) {
              delete _0x123cd8[_0xa21841];
              _0x532fdb = _0x532fdb || "toggle" === _0x31895e;
              if (_0x31895e === (_0x110647 ? "hide" : "show")) {
                if (
                  "show" !== _0x31895e ||
                  !_0x4c7b9b ||
                  undefined === _0x4c7b9b[_0xa21841]
                ) {
                  continue;
                }
                _0x110647 = true;
              }
              _0x27db23[_0xa21841] =
                (_0x4c7b9b && _0x4c7b9b[_0xa21841]) ||
                _0xca1637.style(_0x145f8f, _0xa21841);
            }
          }
          _0x23b380 = !_0xca1637.isEmptyObject(_0x123cd8);
          if (_0x23b380 || !_0xca1637.isEmptyObject(_0x27db23)) {
            if (_0x183346 && 0x1 === _0x145f8f.nodeType) {
              _0xb1deca.overflow = [
                _0x3daf4f.overflow,
                _0x3daf4f.overflowX,
                _0x3daf4f.overflowY,
              ];
              _0xce57b1 = _0x4c7b9b && _0x4c7b9b.display;
              if (null == _0xce57b1) {
                _0xce57b1 = _0x245b46.get(_0x145f8f, "display");
              }
              _0x47b1c9 = _0xca1637.css(_0x145f8f, "display");
              if ("none" === _0x47b1c9) {
                if (_0xce57b1) {
                  _0x47b1c9 = _0xce57b1;
                } else {
                  _0x10902f([_0x145f8f], true);
                  _0xce57b1 = _0x145f8f.style.display || _0xce57b1;
                  _0x47b1c9 = _0xca1637.css(_0x145f8f, "display");
                  _0x10902f([_0x145f8f]);
                }
              }
              if (
                ("inline" === _0x47b1c9 ||
                  ("inline-block" === _0x47b1c9 && null != _0xce57b1)) &&
                "none" === _0xca1637.css(_0x145f8f, "float")
              ) {
                if (!_0x23b380) {
                  _0x34c356.done(function () {
                    _0x3daf4f.display = _0xce57b1;
                  });
                  if (null == _0xce57b1) {
                    _0x47b1c9 = _0x3daf4f.display;
                    _0xce57b1 = "none" === _0x47b1c9 ? "" : _0x47b1c9;
                  }
                }
                _0x3daf4f.display = "inline-block";
              }
            }
            if (_0xb1deca.overflow) {
              _0x3daf4f.overflow = "hidden";
              _0x34c356.always(function () {
                _0x3daf4f.overflow = _0xb1deca.overflow[0x0];
                _0x3daf4f.overflowX = _0xb1deca.overflow[0x1];
                _0x3daf4f.overflowY = _0xb1deca.overflow[0x2];
              });
            }
            _0x23b380 = false;
            for (_0xa21841 in _0x27db23) {
              if (!_0x23b380) {
                if (_0x4c7b9b) {
                  if ("hidden" in _0x4c7b9b) {
                    _0x110647 = _0x4c7b9b.hidden;
                  }
                } else {
                  _0x4c7b9b = _0x245b46.access(_0x145f8f, "fxshow", {
                    display: _0xce57b1,
                  });
                }
                if (_0x532fdb) {
                  _0x4c7b9b.hidden = !_0x110647;
                }
                if (_0x110647) {
                  _0x10902f([_0x145f8f], true);
                }
                _0x34c356.done(function () {
                  if (!_0x110647) {
                    _0x10902f([_0x145f8f]);
                  }
                  _0x245b46.remove(_0x145f8f, "fxshow");
                  for (_0xa21841 in _0x27db23)
                    _0xca1637.style(_0x145f8f, _0xa21841, _0x27db23[_0xa21841]);
                });
              }
              _0x23b380 = _0x2387b6(
                _0x110647 ? _0x4c7b9b[_0xa21841] : 0x0,
                _0xa21841,
                _0x34c356
              );
              if (!(_0xa21841 in _0x4c7b9b)) {
                _0x4c7b9b[_0xa21841] = _0x23b380.start;
                if (_0x110647) {
                  _0x23b380.end = _0x23b380.start;
                  _0x23b380.start = 0x0;
                }
              }
            }
          }
        },
      ],
      prefilter: function (_0x304630, _0x3a616f) {
        if (_0x3a616f) {
          _0x26e6d7.prefilters.unshift(_0x304630);
        } else {
          _0x26e6d7.prefilters.push(_0x304630);
        }
      },
    });
    _0xca1637.speed = function (_0x36ccb5, _0x2290de, _0x14e718) {
      var _0x1c4951 =
        _0x36ccb5 && "object" == typeof _0x36ccb5
          ? _0xca1637.extend({}, _0x36ccb5)
          : {
              complete:
                _0x14e718 ||
                (!_0x14e718 && _0x2290de) ||
                (_0xca1637.isFunction(_0x36ccb5) && _0x36ccb5),
              duration: _0x36ccb5,
              easing:
                (_0x14e718 && _0x2290de) ||
                (_0x2290de && !_0xca1637.isFunction(_0x2290de) && _0x2290de),
            };
      if (_0xca1637.fx.off) {
        _0x1c4951.duration = 0x0;
      } else if ("number" != typeof _0x1c4951.duration) {
        if (_0x1c4951.duration in _0xca1637.fx.speeds) {
          _0x1c4951.duration = _0xca1637.fx.speeds[_0x1c4951.duration];
        } else {
          _0x1c4951.duration = _0xca1637.fx.speeds._default;
        }
      }
      if (!(null != _0x1c4951.queue && true !== _0x1c4951.queue)) {
        _0x1c4951.queue = "fx";
      }
      _0x1c4951.old = _0x1c4951.complete;
      _0x1c4951.complete = function () {
        if (_0xca1637.isFunction(_0x1c4951.old)) {
          _0x1c4951.old.call(this);
        }
        if (_0x1c4951.queue) {
          _0xca1637.dequeue(this, _0x1c4951.queue);
        }
      };
      return _0x1c4951;
    };
    _0xca1637.fn.extend({
      fadeTo: function (_0x59e3d8, _0x427bd4, _0x3fb6d8, _0x54100d) {
        return this.filter(_0x3b6706).css("opacity", 0x0).show().end().animate(
          {
            opacity: _0x427bd4,
          },
          _0x59e3d8,
          _0x3fb6d8,
          _0x54100d
        );
      },
      animate: function (_0x121fa9, _0x1332ae, _0x440db5, _0xdfc298) {
        var _0x5443ef = _0xca1637.isEmptyObject(_0x121fa9);
        var _0x1ee9fa = _0xca1637.speed(_0x1332ae, _0x440db5, _0xdfc298);
        _0x1332ae = function () {
          var _0x44d359 = _0x26e6d7(
            this,
            _0xca1637.extend({}, _0x121fa9),
            _0x1ee9fa
          );
          if (_0x5443ef || _0x245b46.get(this, "finish")) {
            _0x44d359.stop(true);
          }
        };
        _0x1332ae.finish = _0x1332ae;
        return _0x5443ef || false === _0x1ee9fa.queue
          ? this.each(_0x1332ae)
          : this.queue(_0x1ee9fa.queue, _0x1332ae);
      },
      stop: function (_0x4ebaa9, _0x18e79e, _0x3372f1) {
        var _0x4dc992 = function (_0x483d11) {
          var _0x10c5d2 = _0x483d11.stop;
          delete _0x483d11.stop;
          _0x10c5d2(_0x3372f1);
        };
        if ("string" != typeof _0x4ebaa9) {
          _0x3372f1 = _0x18e79e;
          _0x18e79e = _0x4ebaa9;
          _0x4ebaa9 = undefined;
        }
        if (_0x18e79e && false !== _0x4ebaa9) {
          this.queue(_0x4ebaa9 || "fx", []);
        }
        return this.each(function () {
          var _0x2cd2a4 = true;
          var _0x4aa505 = null != _0x4ebaa9 && _0x4ebaa9 + "queueHooks";
          var _0x46edf8 = _0xca1637.timers;
          var _0x3c9739 = _0x245b46.get(this);
          if (_0x4aa505) {
            if (_0x3c9739[_0x4aa505] && _0x3c9739[_0x4aa505].stop) {
              _0x4dc992(_0x3c9739[_0x4aa505]);
            }
          } else {
            for (_0x4aa505 in _0x3c9739)
              if (
                _0x3c9739[_0x4aa505] &&
                _0x3c9739[_0x4aa505].stop &&
                /queueHooks$/.test(_0x4aa505)
              ) {
                _0x4dc992(_0x3c9739[_0x4aa505]);
              }
          }
          for (_0x4aa505 = _0x46edf8.length; _0x4aa505--; ) {
            if (
              !(
                _0x46edf8[_0x4aa505].elem !== this ||
                (null != _0x4ebaa9 && _0x46edf8[_0x4aa505].queue !== _0x4ebaa9)
              )
            ) {
              _0x46edf8[_0x4aa505].anim.stop(_0x3372f1);
              _0x2cd2a4 = false;
              _0x46edf8.splice(_0x4aa505, 0x1);
            }
          }
          if (!(!_0x2cd2a4 && _0x3372f1)) {
            _0xca1637.dequeue(this, _0x4ebaa9);
          }
        });
      },
      finish: function (_0x4c9c52) {
        if (false !== _0x4c9c52) {
          _0x4c9c52 = _0x4c9c52 || "fx";
        }
        return this.each(function () {
          var _0x16e25f;
          var _0x4e0bd4 = _0x245b46.get(this);
          var _0x1b1580 = _0x4e0bd4[_0x4c9c52 + "queue"];
          _0x16e25f = _0x4e0bd4[_0x4c9c52 + "queueHooks"];
          var _0x3e29c2 = _0xca1637.timers;
          var _0x471f60 = _0x1b1580 ? _0x1b1580.length : 0x0;
          _0x4e0bd4.finish = true;
          _0xca1637.queue(this, _0x4c9c52, []);
          if (_0x16e25f && _0x16e25f.stop) {
            _0x16e25f.stop.call(this, true);
          }
          for (_0x16e25f = _0x3e29c2.length; _0x16e25f--; ) {
            if (
              _0x3e29c2[_0x16e25f].elem === this &&
              _0x3e29c2[_0x16e25f].queue === _0x4c9c52
            ) {
              _0x3e29c2[_0x16e25f].anim.stop(true);
              _0x3e29c2.splice(_0x16e25f, 0x1);
            }
          }
          for (_0x16e25f = 0x0; _0x16e25f < _0x471f60; _0x16e25f++) {
            if (_0x1b1580[_0x16e25f] && _0x1b1580[_0x16e25f].finish) {
              _0x1b1580[_0x16e25f].finish.call(this);
            }
          }
          delete _0x4e0bd4.finish;
        });
      },
    });
    _0xca1637.each(["toggle", "show", "hide"], function (_0x478302, _0x134df8) {
      var _0x2b883c = _0xca1637.fn[_0x134df8];
      _0xca1637.fn[_0x134df8] = function (_0xc247dd, _0x27267a, _0x123325) {
        return null == _0xc247dd || "boolean" == typeof _0xc247dd
          ? _0x2b883c.apply(this, arguments)
          : this.animate(
              _0x5b2c6c(_0x134df8, true),
              _0xc247dd,
              _0x27267a,
              _0x123325
            );
      };
    });
    _0xca1637.each(
      {
        slideDown: _0x5b2c6c("show"),
        slideUp: _0x5b2c6c("hide"),
        slideToggle: _0x5b2c6c("toggle"),
        fadeIn: {
          opacity: "show",
        },
        fadeOut: {
          opacity: "hide",
        },
        fadeToggle: {
          opacity: "toggle",
        },
      },
      function (_0xb5ee71, _0x30d507) {
        _0xca1637.fn[_0xb5ee71] = function (_0x2d66f2, _0x361a8c, _0x47cf73) {
          return this.animate(_0x30d507, _0x2d66f2, _0x361a8c, _0x47cf73);
        };
      }
    );
    _0xca1637.timers = [];
    _0xca1637.fx.tick = function () {
      var _0xc48b10;
      var _0x5bd0ed = 0x0;
      var _0x51b457 = _0xca1637.timers;
      for (
        _0x583611 = _0xca1637.now();
        _0x5bd0ed < _0x51b457.length;
        _0x5bd0ed++
      ) {
        _0xc48b10 = _0x51b457[_0x5bd0ed];
        if (!(_0xc48b10() || _0x51b457[_0x5bd0ed] !== _0xc48b10)) {
          _0x51b457.splice(_0x5bd0ed--, 0x1);
        }
      }
      if (!_0x51b457.length) {
        _0xca1637.fx.stop();
      }
      _0x583611 = undefined;
    };
    _0xca1637.fx.timer = function (_0x106e34) {
      _0xca1637.timers.push(_0x106e34);
      _0xca1637.fx.start();
    };
    _0xca1637.fx.interval = 0xd;
    _0xca1637.fx.start = function () {
      if (!_0x3fc081) {
        _0x3fc081 = true;
        _0x2b8505();
      }
    };
    _0xca1637.fx.stop = function () {
      _0x3fc081 = null;
    };
    _0xca1637.fx.speeds = {
      slow: 0x258,
      fast: 0xc8,
      _default: 0x190,
    };
    _0xca1637.fn.delay = function (_0x4902b3, _0x189159) {
      _0x4902b3 = _0xca1637.fx
        ? _0xca1637.fx.speeds[_0x4902b3] || _0x4902b3
        : _0x4902b3;
      _0x189159 = _0x189159 || "fx";
      return this.queue(_0x189159, function (_0x5f13f8, _0x38759b) {
        var _0x2f4a7d = _0x64ec9a.setTimeout(_0x5f13f8, _0x4902b3);
        _0x38759b.stop = function () {
          _0x64ec9a.clearTimeout(_0x2f4a7d);
        };
      });
    };
    var _0x3e2567 = _0x3abdcc.createElement("input");
    var _0x45587e = _0x3abdcc
      .createElement("select")
      .appendChild(_0x3abdcc.createElement("option"));
    _0x3e2567.type = "checkbox";
    _0x139b38.checkOn = "" !== _0x3e2567.value;
    _0x139b38.optSelected = _0x45587e.selected;
    _0x3e2567 = _0x3abdcc.createElement("input");
    _0x3e2567.value = "t";
    _0x3e2567.type = "radio";
    _0x139b38.radioValue = "t" === _0x3e2567.value;
    var _0x2499b8;
    var _0x5582df = _0xca1637.expr.attrHandle;
    _0xca1637.fn.extend({
      attr: function (_0x2815d2, _0x1d5261) {
        return _0x218b33(
          this,
          _0xca1637.attr,
          _0x2815d2,
          _0x1d5261,
          0x1 < arguments.length
        );
      },
      removeAttr: function (_0x43cecc) {
        return this.each(function () {
          _0xca1637.removeAttr(this, _0x43cecc);
        });
      },
    });
    _0xca1637.extend({
      attr: function (_0x2912fa, _0x4a199b, _0x535d0c) {
        var _0x5a3795;
        var _0x2bef40;
        var _0x498096 = _0x2912fa.nodeType;
        if (0x3 !== _0x498096 && 0x8 !== _0x498096 && 0x2 !== _0x498096) {
          return "undefined" == typeof _0x2912fa.getAttribute
            ? _0xca1637.prop(_0x2912fa, _0x4a199b, _0x535d0c)
            : ((0x1 === _0x498096 && _0xca1637.isXMLDoc(_0x2912fa)) ||
                (_0x2bef40 =
                  _0xca1637.attrHooks[_0x4a199b.toLowerCase()] ||
                  (_0xca1637.expr.match.bool.test(_0x4a199b)
                    ? _0x2499b8
                    : undefined)),
              undefined !== _0x535d0c
                ? null === _0x535d0c
                  ? void _0xca1637.removeAttr(_0x2912fa, _0x4a199b)
                  : _0x2bef40 &&
                    "set" in _0x2bef40 &&
                    undefined !==
                      (_0x5a3795 = _0x2bef40.set(
                        _0x2912fa,
                        _0x535d0c,
                        _0x4a199b
                      ))
                  ? _0x5a3795
                  : (_0x2912fa.setAttribute(_0x4a199b, _0x535d0c + ""),
                    _0x535d0c)
                : _0x2bef40 &&
                  "get" in _0x2bef40 &&
                  null !== (_0x5a3795 = _0x2bef40.get(_0x2912fa, _0x4a199b))
                ? _0x5a3795
                : ((_0x5a3795 = _0xca1637.find.attr(_0x2912fa, _0x4a199b)),
                  null == _0x5a3795 ? undefined : _0x5a3795));
        }
      },
      attrHooks: {
        type: {
          set: function (_0x2eeacd, _0x577874) {
            if (
              !_0x139b38.radioValue &&
              "radio" === _0x577874 &&
              _0x2eeacd.nodeName &&
              _0x2eeacd.nodeName.toLowerCase() === "input".toLowerCase()
            ) {
              var _0x1469fd = _0x2eeacd.value;
              _0x2eeacd.setAttribute("type", _0x577874);
              if (_0x1469fd) {
                _0x2eeacd.value = _0x1469fd;
              }
              return _0x577874;
            }
          },
        },
      },
      removeAttr: function (_0x4cc5f1, _0xf955ed) {
        var _0x3ee524;
        var _0x51a335 = 0x0;
        var _0x2a438a = _0xf955ed && _0xf955ed.match(/[^\x20\t\r\n\f]+/g);
        if (_0x2a438a && 0x1 === _0x4cc5f1.nodeType) {
          for (; (_0x3ee524 = _0x2a438a[_0x51a335++]); ) {
            _0x4cc5f1.removeAttribute(_0x3ee524);
          }
        }
      },
    });
    _0x2499b8 = {
      set: function (_0x3ede35, _0x23dea2, _0x569df2) {
        if (false === _0x23dea2) {
          _0xca1637.removeAttr(_0x3ede35, _0x569df2);
        } else {
          _0x3ede35.setAttribute(_0x569df2, _0x569df2);
        }
        return _0x569df2;
      },
    };
    _0xca1637.each(
      _0xca1637.expr.match.bool.source.match(/\w+/g),
      function (_0x31a288, _0xdaa9bd) {
        var _0x246fb3 = _0x5582df[_0xdaa9bd] || _0xca1637.find.attr;
        _0x5582df[_0xdaa9bd] = function (_0x32963c, _0x3958ba, _0x3919c2) {
          var _0x538720;
          var _0x2f534c;
          var _0xc44575 = _0x3958ba.toLowerCase();
          if (!_0x3919c2) {
            _0x2f534c = _0x5582df[_0xc44575];
            _0x5582df[_0xc44575] = _0x538720;
            _0x538720 =
              null != _0x246fb3(_0x32963c, _0x3958ba, _0x3919c2)
                ? _0xc44575
                : null;
            _0x5582df[_0xc44575] = _0x2f534c;
          }
          return _0x538720;
        };
      }
    );
    _0xca1637.fn.extend({
      prop: function (_0x4a6554, _0x2fab34) {
        return _0x218b33(
          this,
          _0xca1637.prop,
          _0x4a6554,
          _0x2fab34,
          0x1 < arguments.length
        );
      },
      removeProp: function (_0x12878b) {
        return this.each(function () {
          delete this[_0xca1637.propFix[_0x12878b] || _0x12878b];
        });
      },
    });
    _0xca1637.extend({
      prop: function (_0x2d0d32, _0x4a2cfc, _0x27ec93) {
        var _0x25ea9f;
        var _0x300ee2;
        var _0x384a9c = _0x2d0d32.nodeType;
        if (0x3 !== _0x384a9c && 0x8 !== _0x384a9c && 0x2 !== _0x384a9c) {
          if (!(0x1 === _0x384a9c && _0xca1637.isXMLDoc(_0x2d0d32))) {
            _0x4a2cfc = _0xca1637.propFix[_0x4a2cfc] || _0x4a2cfc;
            _0x300ee2 = _0xca1637.propHooks[_0x4a2cfc];
          }
          return undefined !== _0x27ec93
            ? _0x300ee2 &&
              "set" in _0x300ee2 &&
              undefined !==
                (_0x25ea9f = _0x300ee2.set(_0x2d0d32, _0x27ec93, _0x4a2cfc))
              ? _0x25ea9f
              : (_0x2d0d32[_0x4a2cfc] = _0x27ec93)
            : _0x300ee2 &&
              "get" in _0x300ee2 &&
              null !== (_0x25ea9f = _0x300ee2.get(_0x2d0d32, _0x4a2cfc))
            ? _0x25ea9f
            : _0x2d0d32[_0x4a2cfc];
        }
      },
      propHooks: {
        tabIndex: {
          get: function (_0x21f75f) {
            var _0x4ce217 = _0xca1637.find.attr(_0x21f75f, "tabindex");
            return _0x4ce217
              ? parseInt(_0x4ce217, 0xa)
              : /^(?:input|select|textarea|button)$/i.test(
                  _0x21f75f.nodeName
                ) ||
                (/^(?:a|area)$/i.test(_0x21f75f.nodeName) && _0x21f75f.href)
              ? 0x0
              : -0x1;
          },
        },
      },
      propFix: {
        for: "htmlFor",
        class: "className",
      },
    });
    if (!_0x139b38.optSelected) {
      _0xca1637.propHooks.selected = {
        get: function (_0x963889) {
          _0x963889 = _0x963889.parentNode;
          if (_0x963889 && _0x963889.parentNode) {
            _0x963889.parentNode.selectedIndex;
          }
          return null;
        },
        set: function (_0x3d826a) {
          _0x3d826a = _0x3d826a.parentNode;
          if (_0x3d826a) {
            _0x3d826a.selectedIndex;
            if (_0x3d826a.parentNode) {
              _0x3d826a.parentNode.selectedIndex;
            }
          }
        },
      };
    }
    _0xca1637.each(
      "tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(
        " "
      ),
      function () {
        _0xca1637.propFix[this.toLowerCase()] = this;
      }
    );
    _0xca1637.fn.extend({
      addClass: function (_0x29aca9) {
        var _0xb48e30;
        var _0x311e41;
        var _0x520687;
        var _0x2c873b;
        var _0x57eac9;
        var _0x125e5f;
        var _0x402fa2 = 0x0;
        if (_0xca1637.isFunction(_0x29aca9)) {
          return this.each(function (_0x2a4006) {
            new _0xca1637.fn.init(this, undefined).addClass(
              _0x29aca9.call(
                this,
                _0x2a4006,
                (this.getAttribute && this.getAttribute("class")) || ""
              )
            );
          });
        }
        if ("string" == typeof _0x29aca9 && _0x29aca9) {
          for (
            _0xb48e30 = _0x29aca9.match(/[^\x20\t\r\n\f]+/g) || [];
            (_0x311e41 = this[_0x402fa2++]);

          ) {
            _0x2c873b =
              (_0x311e41.getAttribute && _0x311e41.getAttribute("class")) || "";
            if (
              (_0x520687 =
                0x1 === _0x311e41.nodeType &&
                " " +
                  (_0x2c873b.match(/[^\x20\t\r\n\f]+/g) || []).join(" ") +
                  " ")
            ) {
              for (_0x125e5f = 0x0; (_0x57eac9 = _0xb48e30[_0x125e5f++]); ) {
                if (0x0 > _0x520687.indexOf(" " + _0x57eac9 + " ")) {
                  _0x520687 += _0x57eac9 + " ";
                }
              }
              _0x520687 = (_0x520687.match(/[^\x20\t\r\n\f]+/g) || []).join(
                " "
              );
              if (_0x2c873b !== _0x520687) {
                _0x311e41.setAttribute("class", _0x520687);
              }
            }
          }
        }
        return this;
      },
      removeClass: function (_0x51d334) {
        var _0x57bba9;
        var _0x54cf10;
        var _0x913ba8;
        var _0x48c38b;
        var _0x2ddff7;
        var _0x50a77a;
        var _0x327d39 = 0x0;
        if (_0xca1637.isFunction(_0x51d334)) {
          return this.each(function (_0x5eba75) {
            new _0xca1637.fn.init(this, undefined).removeClass(
              _0x51d334.call(
                this,
                _0x5eba75,
                (this.getAttribute && this.getAttribute("class")) || ""
              )
            );
          });
        }
        if (!arguments.length) {
          return this.attr("class", "");
        }
        if ("string" == typeof _0x51d334 && _0x51d334) {
          for (
            _0x57bba9 = _0x51d334.match(/[^\x20\t\r\n\f]+/g) || [];
            (_0x54cf10 = this[_0x327d39++]);

          ) {
            _0x48c38b =
              (_0x54cf10.getAttribute && _0x54cf10.getAttribute("class")) || "";
            if (
              (_0x913ba8 =
                0x1 === _0x54cf10.nodeType &&
                " " +
                  (_0x48c38b.match(/[^\x20\t\r\n\f]+/g) || []).join(" ") +
                  " ")
            ) {
              for (_0x50a77a = 0x0; (_0x2ddff7 = _0x57bba9[_0x50a77a++]); ) {
                for (; -0x1 < _0x913ba8.indexOf(" " + _0x2ddff7 + " "); ) {
                  _0x913ba8 = _0x913ba8.replace(" " + _0x2ddff7 + " ", " ");
                }
              }
              _0x913ba8 = (_0x913ba8.match(/[^\x20\t\r\n\f]+/g) || []).join(
                " "
              );
              if (_0x48c38b !== _0x913ba8) {
                _0x54cf10.setAttribute("class", _0x913ba8);
              }
            }
          }
        }
        return this;
      },
      toggleClass: function (_0x4a9f7d, _0x4f68f4) {
        var _0x5a4bbd = typeof _0x4a9f7d;
        return "boolean" == typeof _0x4f68f4 && "string" === _0x5a4bbd
          ? _0x4f68f4
            ? this.addClass(_0x4a9f7d)
            : this.removeClass(_0x4a9f7d)
          : _0xca1637.isFunction(_0x4a9f7d)
          ? this.each(function (_0x21b1f6) {
              new _0xca1637.fn.init(this, undefined).toggleClass(
                _0x4a9f7d.call(
                  this,
                  _0x21b1f6,
                  (this.getAttribute && this.getAttribute("class")) || "",
                  _0x4f68f4
                ),
                _0x4f68f4
              );
            })
          : this.each(function () {
              var _0x1ae5f9;
              var _0xc3a250;
              var _0x372206;
              var _0x5873c4;
              if ("string" === _0x5a4bbd) {
                _0xc3a250 = 0x0;
                _0x372206 = new _0xca1637.fn.init(this, undefined);
                for (
                  _0x5873c4 = _0x4a9f7d.match(/[^\x20\t\r\n\f]+/g) || [];
                  (_0x1ae5f9 = _0x5873c4[_0xc3a250++]);

                ) {
                  if (_0x372206.hasClass(_0x1ae5f9)) {
                    _0x372206.removeClass(_0x1ae5f9);
                  } else {
                    _0x372206.addClass(_0x1ae5f9);
                  }
                }
              } else if (
                !(undefined !== _0x4a9f7d && "boolean" !== _0x5a4bbd)
              ) {
                _0x1ae5f9 =
                  (this.getAttribute && this.getAttribute("class")) || "";
                if (_0x1ae5f9) {
                  _0x245b46.set(this, "__className__", _0x1ae5f9);
                }
                if (this.setAttribute) {
                  this.setAttribute(
                    "class",
                    _0x1ae5f9 || false === _0x4a9f7d
                      ? ""
                      : _0x245b46.get(this, "__className__") || ""
                  );
                }
              }
            });
      },
      hasClass: function (_0x292767) {
        var _0x1a51a0;
        var _0x3cdf60 = 0x0;
        for (
          _0x292767 = " " + _0x292767 + " ";
          (_0x1a51a0 = this[_0x3cdf60++]);

        ) {
          if (
            0x1 === _0x1a51a0.nodeType &&
            -0x1 <
              (
                " " +
                (
                  (
                    (_0x1a51a0.getAttribute &&
                      _0x1a51a0.getAttribute("class")) ||
                    ""
                  ).match(/[^\x20\t\r\n\f]+/g) || []
                ).join(" ") +
                " "
              ).indexOf(_0x292767)
          ) {
            return true;
          }
        }
        return false;
      },
    });
    _0xca1637.fn.extend({
      val: function (_0x9ac5ee) {
        var _0x29fd2a;
        var _0x5e1c33;
        var _0x3525c2;
        var _0x5d4279 = this[0x0];
        if (arguments.length) {
          _0x3525c2 = _0xca1637.isFunction(_0x9ac5ee);
          return this.each(function (_0x245f7f) {
            var _0x5ec381;
            if (0x1 === this.nodeType) {
              _0x5ec381 = _0x3525c2
                ? _0x9ac5ee.call(
                    this,
                    _0x245f7f,
                    new _0xca1637.fn.init(this, undefined).val()
                  )
                : _0x9ac5ee;
              if (null == _0x5ec381) {
                _0x5ec381 = "";
              } else if ("number" == typeof _0x5ec381) {
                _0x5ec381 += "";
              } else if (Array.isArray(_0x5ec381)) {
                _0x5ec381 = _0xca1637.map(_0x5ec381, function (_0x276c64) {
                  return null == _0x276c64 ? "" : _0x276c64 + "";
                });
              }
              _0x29fd2a =
                _0xca1637.valHooks[this.type] ||
                _0xca1637.valHooks[this.nodeName.toLowerCase()];
              if (
                !(
                  _0x29fd2a &&
                  "set" in _0x29fd2a &&
                  undefined !== _0x29fd2a.set(this, _0x5ec381, "value")
                )
              ) {
                this.value = _0x5ec381;
              }
            }
          });
        }
        if (_0x5d4279) {
          _0x29fd2a =
            _0xca1637.valHooks[_0x5d4279.type] ||
            _0xca1637.valHooks[_0x5d4279.nodeName.toLowerCase()];
          return _0x29fd2a &&
            "get" in _0x29fd2a &&
            undefined !== (_0x5e1c33 = _0x29fd2a.get(_0x5d4279, "value"))
            ? _0x5e1c33
            : ((_0x5e1c33 = _0x5d4279.value),
              "string" == typeof _0x5e1c33
                ? _0x5e1c33.replace(/\r/g, "")
                : null == _0x5e1c33
                ? ""
                : _0x5e1c33);
        }
      },
    });
    _0xca1637.extend({
      valHooks: {
        option: {
          get: function (_0x4395ed) {
            var _0x5be574 = _0xca1637.find.attr(_0x4395ed, "value");
            return null != _0x5be574
              ? _0x5be574
              : (
                  _0xca1637.text(_0x4395ed).match(/[^\x20\t\r\n\f]+/g) || []
                ).join(" ");
          },
        },
        select: {
          get: function (_0xb11e15) {
            var _0x5bf26b;
            var _0x29409e;
            var _0x5d9de2 = _0xb11e15.options;
            var _0xefe232 = _0xb11e15.selectedIndex;
            var _0x1ba4d4 = "select-one" === _0xb11e15.type;
            var _0x1d388b = _0x1ba4d4 ? null : [];
            var _0x5a304e = _0x1ba4d4 ? _0xefe232 + 0x1 : _0x5d9de2.length;
            for (
              _0x29409e =
                0x0 > _0xefe232 ? _0x5a304e : _0x1ba4d4 ? _0xefe232 : 0x0;
              _0x29409e < _0x5a304e;
              _0x29409e++
            ) {
              _0x5bf26b = _0x5d9de2[_0x29409e];
              if (
                (_0x5bf26b.selected || _0x29409e === _0xefe232) &&
                !_0x5bf26b.disabled &&
                (!_0x5bf26b.parentNode.disabled ||
                  !(
                    _0x5bf26b.parentNode.nodeName &&
                    _0x5bf26b.parentNode.nodeName.toLowerCase() ===
                      "optgroup".toLowerCase()
                  ))
              ) {
                _0xb11e15 = new _0xca1637.fn.init(_0x5bf26b, undefined).val();
                if (_0x1ba4d4) {
                  return _0xb11e15;
                }
                _0x1d388b.push(_0xb11e15);
              }
            }
            return _0x1d388b;
          },
          set: function (_0x39f3aa, _0x1a2fd6) {
            var _0xb55877;
            var _0x5c227c;
            var _0x303c31 = _0x39f3aa.options;
            var _0x42a317 = _0xca1637.makeArray(_0x1a2fd6);
            for (var _0x101090 = _0x303c31.length; _0x101090--; ) {
              _0x5c227c = _0x303c31[_0x101090];
              if (
                (_0x5c227c.selected =
                  -0x1 <
                  _0xca1637.inArray(
                    _0xca1637.valHooks.option.get(_0x5c227c),
                    _0x42a317
                  ))
              ) {
                _0xb55877 = true;
              }
            }
            if (!_0xb55877) {
              _0x39f3aa.selectedIndex = -0x1;
            }
            return _0x42a317;
          },
        },
      },
    });
    _0xca1637.each(["radio", "checkbox"], function () {
      _0xca1637.valHooks[this] = {
        set: function (_0x102aa1, _0xf8a698) {
          if (Array.isArray(_0xf8a698)) {
            return (_0x102aa1.checked =
              -0x1 <
              _0xca1637.inArray(
                new _0xca1637.fn.init(_0x102aa1, undefined).val(),
                _0xf8a698
              ));
          }
        },
      };
      if (!_0x139b38.checkOn) {
        _0xca1637.valHooks[this].get = function (_0x5aa0bb) {
          return null === _0x5aa0bb.getAttribute("value")
            ? "on"
            : _0x5aa0bb.value;
        };
      }
    });
    _0xca1637.extend(_0xca1637.event, {
      trigger: function (_0x577d5f, _0x4c9361, _0x2cd43a, _0x5c4ecd) {
        var _0x1feedb;
        var _0x33460a;
        var _0x4c01ce;
        var _0x5b7cbc;
        var _0x4753e1;
        var _0x557c8b;
        var _0x39bd07;
        var _0x4dbec6 = [_0x2cd43a || _0x3abdcc];
        var _0x53701c = _0x554b7b.call(_0x577d5f, "type")
          ? _0x577d5f.type
          : _0x577d5f;
        _0x1feedb = _0x554b7b.call(_0x577d5f, "namespace")
          ? _0x577d5f.namespace.split(".")
          : [];
        _0x33460a = _0x4c01ce = _0x2cd43a = _0x2cd43a || _0x3abdcc;
        if (
          0x3 !== _0x2cd43a.nodeType &&
          0x8 !== _0x2cd43a.nodeType &&
          !/^(?:focusinfocus|focusoutblur)$/.test(
            _0x53701c + _0xca1637.event.triggered
          ) &&
          (-0x1 < _0x53701c.indexOf(".") &&
            ((_0x1feedb = _0x53701c.split(".")),
            (_0x53701c = _0x1feedb.shift()),
            _0x1feedb.sort()),
          (_0x4753e1 = 0x0 > _0x53701c.indexOf(":") && "on" + _0x53701c),
          (_0x577d5f = _0x577d5f[_0xca1637.expando]
            ? _0x577d5f
            : new _0xca1637.Event(
                _0x53701c,
                "object" == typeof _0x577d5f && _0x577d5f
              )),
          (_0x577d5f.isTrigger = _0x5c4ecd ? 0x2 : 0x3),
          (_0x577d5f.namespace = _0x1feedb.join(".")),
          (_0x577d5f.rnamespace = _0x577d5f.namespace
            ? RegExp("(^|\\.)" + _0x1feedb.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (_0x577d5f.result = undefined),
          _0x577d5f.target || (_0x577d5f.target = _0x2cd43a),
          (_0x4c9361 =
            null == _0x4c9361
              ? [_0x577d5f]
              : _0xca1637.makeArray(_0x4c9361, [_0x577d5f])),
          (_0x39bd07 = _0xca1637.event.special[_0x53701c] || {}),
          _0x5c4ecd ||
            !_0x39bd07.trigger ||
            false !== _0x39bd07.trigger.apply(_0x2cd43a, _0x4c9361))
        ) {
          if (
            !_0x5c4ecd &&
            !_0x39bd07.noBubble &&
            !_0xca1637.isWindow(_0x2cd43a)
          ) {
            _0x5b7cbc = _0x39bd07.delegateType || _0x53701c;
            for (
              /^(?:focusinfocus|focusoutblur)$/.test(_0x5b7cbc + _0x53701c) ||
              (_0x33460a = _0x33460a.parentNode);
              _0x33460a;
              _0x33460a = _0x33460a.parentNode
            ) {
              _0x4dbec6.push(_0x33460a);
              _0x4c01ce = _0x33460a;
            }
            if (_0x4c01ce === (_0x2cd43a.ownerDocument || _0x3abdcc)) {
              _0x4dbec6.push(
                _0x4c01ce.defaultView || _0x4c01ce.parentWindow || _0x64ec9a
              );
            }
          }
          for (
            _0x1feedb = 0x0;
            (_0x33460a = _0x4dbec6[_0x1feedb++]) &&
            !_0x577d5f.isPropagationStopped();

          ) {
            _0x577d5f.type =
              0x1 < _0x1feedb ? _0x5b7cbc : _0x39bd07.bindType || _0x53701c;
            if (
              (_0x557c8b =
                (_0x245b46.get(_0x33460a, "events") || {})[_0x577d5f.type] &&
                _0x245b46.get(_0x33460a, "handle"))
            ) {
              _0x557c8b.apply(_0x33460a, _0x4c9361);
            }
            if (
              (_0x557c8b = _0x4753e1 && _0x33460a[_0x4753e1]) &&
              _0x557c8b.apply &&
              (0x1 === _0x33460a.nodeType ||
                0x9 === _0x33460a.nodeType ||
                !+_0x33460a.nodeType)
            ) {
              _0x577d5f.result = _0x557c8b.apply(_0x33460a, _0x4c9361);
              if (false === _0x577d5f.result) {
                _0x577d5f.preventDefault();
              }
            }
          }
          _0x577d5f.type = _0x53701c;
          if (
            !(
              _0x5c4ecd ||
              _0x577d5f.isDefaultPrevented() ||
              (_0x39bd07._default &&
                false !==
                  _0x39bd07._default.apply(_0x4dbec6.pop(), _0x4c9361)) ||
              !(
                0x1 === _0x2cd43a.nodeType ||
                0x9 === _0x2cd43a.nodeType ||
                !+_0x2cd43a.nodeType
              )
            )
          ) {
            if (
              _0x4753e1 &&
              _0xca1637.isFunction(_0x2cd43a[_0x53701c]) &&
              !_0xca1637.isWindow(_0x2cd43a)
            ) {
              _0x4c01ce = _0x2cd43a[_0x4753e1];
              if (_0x4c01ce) {
                _0x2cd43a[_0x4753e1] = null;
              }
              _0xca1637.event.triggered = _0x53701c;
              _0x2cd43a[_0x53701c]();
              _0xca1637.event.triggered = undefined;
              if (_0x4c01ce) {
                _0x2cd43a[_0x4753e1] = _0x4c01ce;
              }
            }
          }
          return _0x577d5f.result;
        }
      },
      simulate: function (_0x3bae07, _0x15278d, _0x5df29d) {
        _0x3bae07 = _0xca1637.extend(new _0xca1637.Event(), _0x5df29d, {
          type: _0x3bae07,
          isSimulated: true,
        });
        _0xca1637.event.trigger(_0x3bae07, null, _0x15278d);
      },
    });
    _0xca1637.fn.extend({
      trigger: function (_0xef61b5, _0x16fa21) {
        return this.each(function () {
          _0xca1637.event.trigger(_0xef61b5, _0x16fa21, this);
        });
      },
      triggerHandler: function (_0x7fef17, _0x43b3a1) {
        var _0x1e35a3 = this[0x0];
        if (_0x1e35a3) {
          return _0xca1637.event.trigger(_0x7fef17, _0x43b3a1, _0x1e35a3, true);
        }
      },
    });
    _0xca1637.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (_0x30bf2d, _0x5ce765) {
        _0xca1637.fn[_0x5ce765] = function (_0x369496, _0x41e92c) {
          return 0x0 < arguments.length
            ? this.on(_0x5ce765, null, _0x369496, _0x41e92c)
            : this.trigger(_0x5ce765);
        };
      }
    );
    _0xca1637.fn.extend({
      hover: function (_0x80ae6e, _0x26a5d5) {
        return this.mouseenter(_0x80ae6e).mouseleave(_0x26a5d5 || _0x80ae6e);
      },
    });
    _0x139b38.focusin = "onfocusin" in _0x64ec9a;
    if (!_0x139b38.focusin) {
      _0xca1637.each(
        {
          focus: "focusin",
          blur: "focusout",
        },
        function (_0x2d87af, _0x12f51a) {
          var _0x2071da = function (_0x23e3fe) {
            _0xca1637.event.simulate(
              _0x12f51a,
              _0x23e3fe.target,
              _0xca1637.event.fix(_0x23e3fe)
            );
          };
          _0xca1637.event.special[_0x12f51a] = {
            setup: function () {
              var _0x296fed = this.ownerDocument || this;
              var _0x1d6932 = _0x245b46.access(_0x296fed, _0x12f51a);
              if (!_0x1d6932) {
                _0x296fed.addEventListener(_0x2d87af, _0x2071da, true);
              }
              _0x245b46.access(_0x296fed, _0x12f51a, (_0x1d6932 || 0x0) + 0x1);
            },
            teardown: function () {
              var _0x540586 = this.ownerDocument || this;
              var _0x9fac3 = _0x245b46.access(_0x540586, _0x12f51a) - 0x1;
              if (_0x9fac3) {
                _0x245b46.access(_0x540586, _0x12f51a, _0x9fac3);
              } else {
                _0x540586.removeEventListener(_0x2d87af, _0x2071da, true);
                _0x245b46.remove(_0x540586, _0x12f51a);
              }
            },
          };
        }
      );
    }
    var _0x4894e3 = _0x64ec9a.location;
    var _0x238c31 = _0xca1637.now();
    _0xca1637.parseXML = function (_0x406c59) {
      var _0x492f85;
      if (!_0x406c59 || "string" != typeof _0x406c59) {
        return null;
      }
      try {
        _0x492f85 = new _0x64ec9a.DOMParser().parseFromString(
          _0x406c59,
          "text/xml"
        );
      } catch (_0x146c60) {
        _0x492f85 = undefined;
      }
      if (
        !(_0x492f85 && !_0x492f85.getElementsByTagName("parsererror").length)
      ) {
        _0xca1637.error("Invalid XML: " + _0x406c59);
      }
      return _0x492f85;
    };
    _0xca1637.param = function (_0x44d74a, _0x974a4d) {
      var _0x4c55e6;
      var _0x3f94a6 = [];
      var _0x527512 = function (_0x53c742, _0xcb8f7f) {
        var _0x3ef274 = _0xca1637.isFunction(_0xcb8f7f)
          ? _0xcb8f7f()
          : _0xcb8f7f;
        _0x3f94a6[_0x3f94a6.length] =
          encodeURIComponent(_0x53c742) +
          "=" +
          encodeURIComponent(null == _0x3ef274 ? "" : _0x3ef274);
      };
      if (
        Array.isArray(_0x44d74a) ||
        (_0x44d74a.jquery && !_0xca1637.isPlainObject(_0x44d74a))
      ) {
        _0xca1637.each(_0x44d74a, function () {
          _0x527512(this.name, this.value);
        });
      } else {
        for (_0x4c55e6 in _0x44d74a)
          _0x3221fb(_0x4c55e6, _0x44d74a[_0x4c55e6], _0x974a4d, _0x527512);
      }
      return _0x3f94a6.join("&");
    };
    _0xca1637.fn.extend({
      serialize: function () {
        return _0xca1637.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var _0x3cbff6 = _0xca1637.prop(this, "elements");
          return _0x3cbff6 ? _0xca1637.makeArray(_0x3cbff6) : this;
        })
          .filter(function () {
            var _0x1c8eec = this.type;
            return (
              this.name &&
              !new _0xca1637.fn.init(this, undefined).is(":disabled") &&
              /^(?:input|select|textarea|keygen)/i.test(this.nodeName) &&
              !/^(?:submit|button|image|reset|file)$/i.test(_0x1c8eec) &&
              (this.checked || !/^(?:checkbox|radio)$/i.test(_0x1c8eec))
            );
          })
          .map(function (_0x7eb8e6, _0x3b4f64) {
            var _0x37e53e = new _0xca1637.fn.init(this, undefined).val();
            return null == _0x37e53e
              ? null
              : Array.isArray(_0x37e53e)
              ? _0xca1637.map(_0x37e53e, function (_0x2ba317) {
                  return {
                    name: _0x3b4f64.name,
                    value: _0x2ba317.replace(/\r?\n/g, "\r\n"),
                  };
                })
              : {
                  name: _0x3b4f64.name,
                  value: _0x37e53e.replace(/\r?\n/g, "\r\n"),
                };
          })
          .get();
      },
    });
    var _0x2160ed = {};
    var _0x1d8442 = {};
    var _0x1d6cc2 = "*/".concat("*");
    var _0x257d7d = _0x3abdcc.createElement("a");
    _0x257d7d.href = _0x4894e3.href;
    _0xca1637.extend({
      active: 0x0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: _0x4894e3.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            _0x4894e3.protocol
          ),
        global: true,
        processData: true,
        async: true,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": _0x1d6cc2,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: {
          xml: /\bxml\b/,
          html: /\bhtml/,
          json: /\bjson\b/,
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": true,
          "text json": JSON.parse,
          "text xml": _0xca1637.parseXML,
        },
        flatOptions: {
          url: true,
          context: true,
        },
      },
      ajaxSetup: function (_0xc97162, _0x586c4f) {
        return _0x586c4f
          ? _0x127db2(_0x127db2(_0xc97162, _0xca1637.ajaxSettings), _0x586c4f)
          : _0x127db2(_0xca1637.ajaxSettings, _0xc97162);
      },
      ajaxPrefilter: _0x410e34(_0x2160ed),
      ajaxTransport: _0x410e34(_0x1d8442),
      ajax: function (_0x34b189, _0x159649) {
        function _0x538562(_0xb76362, _0x1e55a7, _0x5397de, _0x2e3f70) {
          var _0x15da45;
          var _0x5764ab;
          var _0x1c7d15;
          var _0x4e28e1;
          var _0x5963f4 = _0x1e55a7;
          if (!_0x1a0e84) {
            _0x1a0e84 = true;
            if (_0x1063dd) {
              _0x64ec9a.clearTimeout(_0x1063dd);
            }
            _0x47514b = undefined;
            _0x26000a = _0x2e3f70 || "";
            _0x3d62f9.readyState = 0x0 < _0xb76362 ? 0x4 : 0x0;
            _0x2e3f70 =
              (0xc8 <= _0xb76362 && 0x12c > _0xb76362) || 0x130 === _0xb76362;
            if (_0x5397de) {
              _0x1c7d15 = _0x438737;
              var _0x4e279c = _0x3d62f9;
              var _0x318960;
              var _0x2114c7;
              var _0x3a3afc;
              var _0x311aa1;
              var _0x18bab4 = _0x1c7d15.contents;
              for (
                var _0x494761 = _0x1c7d15.dataTypes;
                "*" === _0x494761[0x0];

              ) {
                _0x494761.shift();
                if (undefined === _0x318960) {
                  _0x318960 =
                    _0x1c7d15.mimeType ||
                    _0x4e279c.getResponseHeader("Content-Type");
                }
              }
              if (_0x318960) {
                for (_0x2114c7 in _0x18bab4)
                  if (
                    _0x18bab4[_0x2114c7] &&
                    _0x18bab4[_0x2114c7].test(_0x318960)
                  ) {
                    _0x494761.unshift(_0x2114c7);
                    break;
                  }
              }
              if (_0x494761[0x0] in _0x5397de) {
                _0x3a3afc = _0x494761[0x0];
              } else {
                for (_0x2114c7 in _0x5397de) {
                  if (
                    !_0x494761[0x0] ||
                    _0x1c7d15.converters[_0x2114c7 + " " + _0x494761[0x0]]
                  ) {
                    _0x3a3afc = _0x2114c7;
                    break;
                  }
                  if (!_0x311aa1) {
                    _0x311aa1 = _0x2114c7;
                  }
                }
                _0x3a3afc = _0x3a3afc || _0x311aa1;
              }
              _0x1c7d15 = _0x5397de = _0x3a3afc
                ? (_0x3a3afc !== _0x494761[0x0] && _0x494761.unshift(_0x3a3afc),
                  _0x5397de[_0x3a3afc])
                : undefined;
            }
            var _0x27424b;
            _0x59dfb1: {
              _0x5397de = _0x438737;
              _0x318960 = _0x1c7d15;
              _0x2114c7 = _0x3d62f9;
              _0x3a3afc = _0x2e3f70;
              var _0x2ae476;
              var _0x20df45;
              var _0x4cd830;
              _0x1c7d15 = {};
              _0x4e279c = _0x5397de.dataTypes.slice();
              if (_0x4e279c[0x1]) {
                for (_0x2ae476 in _0x5397de.converters)
                  _0x1c7d15[_0x2ae476.toLowerCase()] =
                    _0x5397de.converters[_0x2ae476];
              }
              for (_0x311aa1 = _0x4e279c.shift(); _0x311aa1; ) {
                if (_0x5397de.responseFields[_0x311aa1]) {
                  _0x2114c7[_0x5397de.responseFields[_0x311aa1]] = _0x318960;
                }
                if (!_0x4cd830 && _0x3a3afc && _0x5397de.dataFilter) {
                  _0x318960 = _0x5397de.dataFilter(
                    _0x318960,
                    _0x5397de.dataType
                  );
                }
                _0x4cd830 = _0x311aa1;
                if ((_0x311aa1 = _0x4e279c.shift())) {
                  if ("*" === _0x311aa1) {
                    _0x311aa1 = _0x4cd830;
                  } else {
                    if ("*" !== _0x4cd830 && _0x4cd830 !== _0x311aa1) {
                      _0x2ae476 =
                        _0x1c7d15[_0x4cd830 + " " + _0x311aa1] ||
                        _0x1c7d15["* " + _0x311aa1];
                      if (!_0x2ae476) {
                        for (_0x27424b in _0x1c7d15) {
                          _0x20df45 = _0x27424b.split(" ");
                          if (
                            _0x20df45[0x1] === _0x311aa1 &&
                            (_0x2ae476 =
                              _0x1c7d15[_0x4cd830 + " " + _0x20df45[0x0]] ||
                              _0x1c7d15["* " + _0x20df45[0x0]])
                          ) {
                            if (true === _0x2ae476) {
                              _0x2ae476 = _0x1c7d15[_0x27424b];
                            } else if (true !== _0x1c7d15[_0x27424b]) {
                              _0x311aa1 = _0x20df45[0x0];
                              _0x4e279c.unshift(_0x20df45[0x1]);
                            }
                            break;
                          }
                        }
                      }
                      if (true !== _0x2ae476) {
                        if (_0x2ae476 && _0x5397de.throws) {
                          _0x318960 = _0x2ae476(_0x318960);
                        } else {
                          try {
                            _0x318960 = _0x2ae476(_0x318960);
                          } catch (_0x200dbc) {
                            _0x27424b = {
                              state: "parsererror",
                              error: _0x2ae476
                                ? _0x200dbc
                                : "No conversion from " +
                                  _0x4cd830 +
                                  " to " +
                                  _0x311aa1,
                            };
                            break _0x59dfb1;
                          }
                        }
                      }
                    }
                  }
                }
              }
              _0x27424b = {
                state: "success",
                data: _0x318960,
              };
            }
            _0x1c7d15 = _0x27424b;
            if (_0x2e3f70) {
              if (_0x438737.ifModified) {
                _0x4e28e1 = _0x3d62f9.getResponseHeader("Last-Modified");
                if (_0x4e28e1) {
                  _0xca1637.lastModified[_0x16d0e6] = _0x4e28e1;
                }
                _0x4e28e1 = _0x3d62f9.getResponseHeader("etag");
                if (_0x4e28e1) {
                  _0xca1637.etag[_0x16d0e6] = _0x4e28e1;
                }
              }
              if (0xcc === _0xb76362 || "HEAD" === _0x438737.type) {
                _0x5963f4 = "nocontent";
              } else if (0x130 === _0xb76362) {
                _0x5963f4 = "notmodified";
              } else {
                _0x5963f4 = _0x1c7d15.state;
                _0x15da45 = _0x1c7d15.data;
                _0x5764ab = _0x1c7d15.error;
                _0x2e3f70 = !_0x5764ab;
              }
            } else {
              _0x5764ab = _0x5963f4;
              if (!(!_0xb76362 && _0x5963f4)) {
                _0x5963f4 = "error";
                if (0x0 > _0xb76362) {
                  _0xb76362 = 0x0;
                }
              }
            }
            _0x3d62f9.status = _0xb76362;
            _0x3d62f9.statusText = (_0x1e55a7 || _0x5963f4) + "";
            if (_0x2e3f70) {
              _0x39fa20.resolveWith(_0x472ad1, [
                _0x15da45,
                _0x5963f4,
                _0x3d62f9,
              ]);
            } else {
              _0x39fa20.rejectWith(_0x472ad1, [
                _0x3d62f9,
                _0x5963f4,
                _0x5764ab,
              ]);
            }
            _0x3d62f9.statusCode(_0x9e78aa);
            _0x9e78aa = undefined;
            if (_0x188c5c) {
              _0x541765.trigger(_0x2e3f70 ? "ajaxSuccess" : "ajaxError", [
                _0x3d62f9,
                _0x438737,
                _0x2e3f70 ? _0x15da45 : _0x5764ab,
              ]);
            }
            _0x12dbcf.fireWith(_0x472ad1, [_0x3d62f9, _0x5963f4]);
            if (_0x188c5c) {
              _0x541765.trigger("ajaxComplete", [_0x3d62f9, _0x438737]);
              if (!--_0xca1637.active) {
                _0xca1637.event.trigger("ajaxStop");
              }
            }
          }
        }
        if ("object" == typeof _0x34b189) {
          _0x159649 = _0x34b189;
          _0x34b189 = undefined;
        }
        _0x159649 = _0x159649 || {};
        var _0x47514b;
        var _0x16d0e6;
        var _0x26000a;
        var _0x529327;
        var _0x1063dd;
        var _0x5b6ea3;
        var _0x1a0e84;
        var _0x188c5c;
        var _0x4d9636;
        var _0x2d15c3;
        var _0x438737 = _0xca1637.ajaxSetup({}, _0x159649);
        var _0x472ad1 = _0x438737.context || _0x438737;
        var _0x541765 =
          _0x438737.context && (_0x472ad1.nodeType || _0x472ad1.jquery)
            ? new _0xca1637.fn.init(_0x472ad1, undefined)
            : _0xca1637.event;
        var _0x39fa20 = _0xca1637.Deferred();
        var _0x12dbcf = _0xca1637.Callbacks("once memory");
        var _0x9e78aa = _0x438737.statusCode || {};
        var _0x117b03 = {};
        var _0x50b58d = {};
        var _0x54e7ae = "canceled";
        var _0x3d62f9 = {
          readyState: 0x0,
          getResponseHeader: function (_0x1276f7) {
            var _0x3a3710;
            if (_0x1a0e84) {
              if (!_0x529327) {
                for (
                  _0x529327 = {};
                  (_0x3a3710 = /^(.*?):[ \t]*([^\r\n]*)$/gm.exec(_0x26000a));

                ) {
                  _0x529327[_0x3a3710[0x1].toLowerCase()] = _0x3a3710[0x2];
                }
              }
              _0x3a3710 = _0x529327[_0x1276f7.toLowerCase()];
            }
            return null == _0x3a3710 ? null : _0x3a3710;
          },
          getAllResponseHeaders: function () {
            return _0x1a0e84 ? _0x26000a : null;
          },
          setRequestHeader: function (_0x244c95, _0x113fd6) {
            if (null == _0x1a0e84) {
              _0x244c95 = _0x50b58d[_0x244c95.toLowerCase()] =
                _0x50b58d[_0x244c95.toLowerCase()] || _0x244c95;
              _0x117b03[_0x244c95] = _0x113fd6;
            }
            return this;
          },
          overrideMimeType: function (_0x2a0c3e) {
            if (null == _0x1a0e84) {
              _0x438737.mimeType = _0x2a0c3e;
            }
            return this;
          },
          statusCode: function (_0x298f40) {
            var _0x46c64e;
            if (_0x298f40) {
              if (_0x1a0e84) {
                _0x3d62f9.always(_0x298f40[_0x3d62f9.status]);
              } else {
                for (_0x46c64e in _0x298f40)
                  _0x9e78aa[_0x46c64e] = [
                    _0x9e78aa[_0x46c64e],
                    _0x298f40[_0x46c64e],
                  ];
              }
            }
            return this;
          },
          abort: function (_0x3787c8) {
            _0x3787c8 = _0x3787c8 || _0x54e7ae;
            if (_0x47514b) {
              _0x47514b.abort(_0x3787c8);
            }
            _0x538562(0x0, _0x3787c8);
            return this;
          },
        };
        _0x39fa20.promise(_0x3d62f9);
        _0x438737.url = (
          (_0x34b189 || _0x438737.url || _0x4894e3.href) + ""
        ).replace(/^\/\//, _0x4894e3.protocol + "//");
        _0x438737.type =
          _0x159649.method ||
          _0x159649.type ||
          _0x438737.method ||
          _0x438737.type;
        _0x438737.dataTypes = (_0x438737.dataType || "*")
          .toLowerCase()
          .match(/[^\x20\t\r\n\f]+/g) || [""];
        if (null == _0x438737.crossDomain) {
          _0x5b6ea3 = _0x3abdcc.createElement("a");
          try {
            _0x5b6ea3.href = _0x438737.url;
            _0x5b6ea3.href = _0x5b6ea3.href;
            _0x438737.crossDomain =
              _0x257d7d.protocol + "//" + _0x257d7d.host !=
              _0x5b6ea3.protocol + "//" + _0x5b6ea3.host;
          } catch (_0xd6e989) {
            _0x438737.crossDomain = true;
          }
        }
        if (
          _0x438737.data &&
          _0x438737.processData &&
          "string" != typeof _0x438737.data
        ) {
          _0x438737.data = _0xca1637.param(
            _0x438737.data,
            _0x438737.traditional
          );
        }
        _0x445796(_0x2160ed, _0x438737, _0x159649, _0x3d62f9);
        if (_0x1a0e84) {
          return _0x3d62f9;
        }
        if (
          (_0x188c5c = _0xca1637.event && _0x438737.global) &&
          0x0 === _0xca1637.active++
        ) {
          _0xca1637.event.trigger("ajaxStart");
        }
        _0x438737.type = _0x438737.type.toUpperCase();
        _0x438737.hasContent = !/^(?:GET|HEAD)$/.test(_0x438737.type);
        _0x16d0e6 = _0x438737.url.replace(/#.*$/, "");
        if (_0x438737.hasContent) {
          if (
            _0x438737.data &&
            _0x438737.processData &&
            0x0 ===
              (_0x438737.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              )
          ) {
            _0x438737.data = _0x438737.data.replace(/%20/g, "+");
          }
        } else {
          _0x2d15c3 = _0x438737.url.slice(_0x16d0e6.length);
          if (_0x438737.data) {
            _0x16d0e6 += (/\?/.test(_0x16d0e6) ? "&" : "?") + _0x438737.data;
            delete _0x438737.data;
          }
          if (false === _0x438737.cache) {
            _0x16d0e6 = _0x16d0e6.replace(/([?&])_=[^&]*/, "$1");
            _0x2d15c3 =
              (/\?/.test(_0x16d0e6) ? "&" : "?") +
              "_=" +
              _0x238c31++ +
              _0x2d15c3;
          }
          _0x438737.url = _0x16d0e6 + _0x2d15c3;
        }
        if (_0x438737.ifModified) {
          if (_0xca1637.lastModified[_0x16d0e6]) {
            _0x3d62f9.setRequestHeader(
              "If-Modified-Since",
              _0xca1637.lastModified[_0x16d0e6]
            );
          }
          if (_0xca1637.etag[_0x16d0e6]) {
            _0x3d62f9.setRequestHeader(
              "If-None-Match",
              _0xca1637.etag[_0x16d0e6]
            );
          }
        }
        if (
          (_0x438737.data &&
            _0x438737.hasContent &&
            false !== _0x438737.contentType) ||
          _0x159649.contentType
        ) {
          _0x3d62f9.setRequestHeader("Content-Type", _0x438737.contentType);
        }
        _0x3d62f9.setRequestHeader(
          "Accept",
          _0x438737.dataTypes[0x0] &&
            _0x438737.accepts[_0x438737.dataTypes[0x0]]
            ? _0x438737.accepts[_0x438737.dataTypes[0x0]] +
                ("*" !== _0x438737.dataTypes[0x0]
                  ? ", " + _0x1d6cc2 + "; q=0.01"
                  : "")
            : _0x438737.accepts["*"]
        );
        for (_0x4d9636 in _0x438737.headers)
          _0x3d62f9.setRequestHeader(_0x4d9636, _0x438737.headers[_0x4d9636]);
        if (
          _0x438737.beforeSend &&
          (false ===
            _0x438737.beforeSend.call(_0x472ad1, _0x3d62f9, _0x438737) ||
            _0x1a0e84)
        ) {
          return _0x3d62f9.abort();
        }
        _0x54e7ae = "abort";
        _0x12dbcf.add(_0x438737.complete);
        _0x3d62f9.done(_0x438737.success);
        _0x3d62f9.fail(_0x438737.error);
        if (
          (_0x47514b = _0x445796(_0x1d8442, _0x438737, _0x159649, _0x3d62f9))
        ) {
          _0x3d62f9.readyState = 0x1;
          if (_0x188c5c) {
            _0x541765.trigger("ajaxSend", [_0x3d62f9, _0x438737]);
          }
          if (_0x1a0e84) {
            return _0x3d62f9;
          }
          if (_0x438737.async && 0x0 < _0x438737.timeout) {
            _0x1063dd = _0x64ec9a.setTimeout(function () {
              _0x3d62f9.abort("timeout");
            }, _0x438737.timeout);
          }
          try {
            _0x1a0e84 = false;
            _0x47514b.send(_0x117b03, _0x538562);
          } catch (_0x2b365f) {
            if (_0x1a0e84) {
              throw _0x2b365f;
            }
            _0x538562(-0x1, _0x2b365f);
          }
        } else {
          _0x538562(-0x1, "No Transport");
        }
        return _0x3d62f9;
      },
      getJSON: function (_0x1fbdca, _0x38ea04, _0x24d080) {
        return _0xca1637.get(_0x1fbdca, _0x38ea04, _0x24d080, "json");
      },
      getScript: function (_0x3457d3, _0x4f2931) {
        return _0xca1637.get(_0x3457d3, undefined, _0x4f2931, "script");
      },
    });
    _0xca1637.each(["get", "post"], function (_0x23c26c, _0x26ba8c) {
      _0xca1637[_0x26ba8c] = function (
        _0x4dc695,
        _0xcc8bdf,
        _0x120a55,
        _0x2432ba
      ) {
        if (_0xca1637.isFunction(_0xcc8bdf)) {
          _0x2432ba = _0x2432ba || _0x120a55;
          _0x120a55 = _0xcc8bdf;
          _0xcc8bdf = undefined;
        }
        return _0xca1637.ajax(
          _0xca1637.extend(
            {
              url: _0x4dc695,
              type: _0x26ba8c,
              dataType: _0x2432ba,
              data: _0xcc8bdf,
              success: _0x120a55,
            },
            _0xca1637.isPlainObject(_0x4dc695) && _0x4dc695
          )
        );
      };
    });
    _0xca1637._evalUrl = function (_0x19e96f) {
      return _0xca1637.ajax({
        url: _0x19e96f,
        type: "GET",
        dataType: "script",
        cache: true,
        async: false,
        global: false,
        throws: true,
      });
    };
    _0xca1637.fn.extend({
      wrapAll: function (_0x3c48fa) {
        var _0x5dd844;
        if (this[0x0]) {
          if (_0xca1637.isFunction(_0x3c48fa)) {
            _0x3c48fa = _0x3c48fa.call(this[0x0]);
          }
          _0x5dd844 = new _0xca1637.fn.init(_0x3c48fa, this[0x0].ownerDocument)
            .eq(0x0)
            .clone(true);
          if (this[0x0].parentNode) {
            _0x5dd844.insertBefore(this[0x0]);
          }
          _0x5dd844
            .map(function () {
              for (var _0x481212 = this; _0x481212.firstElementChild; ) {
                _0x481212 = _0x481212.firstElementChild;
              }
              return _0x481212;
            })
            .append(this);
        }
        return this;
      },
      wrapInner: function (_0x4e7457) {
        return _0xca1637.isFunction(_0x4e7457)
          ? this.each(function (_0x1ead38) {
              new _0xca1637.fn.init(this, undefined).wrapInner(
                _0x4e7457.call(this, _0x1ead38)
              );
            })
          : this.each(function () {
              var _0x4b0777 = new _0xca1637.fn.init(this, undefined);
              var _0x56d0ff = _0x4b0777.contents();
              if (_0x56d0ff.length) {
                _0x56d0ff.wrapAll(_0x4e7457);
              } else {
                _0x4b0777.append(_0x4e7457);
              }
            });
      },
      wrap: function (_0x20efef) {
        var _0x4da5fe = _0xca1637.isFunction(_0x20efef);
        return this.each(function (_0x5db3f5) {
          new _0xca1637.fn.init(this, undefined).wrapAll(
            _0x4da5fe ? _0x20efef.call(this, _0x5db3f5) : _0x20efef
          );
        });
      },
      unwrap: function (_0x17e019) {
        this.parent(_0x17e019)
          .not("body")
          .each(function () {
            new _0xca1637.fn.init(this, undefined).replaceWith(this.childNodes);
          });
        return this;
      },
    });
    _0xca1637.expr.pseudos.hidden = function (_0x57d027) {
      return !_0xca1637.expr.pseudos.visible(_0x57d027);
    };
    _0xca1637.expr.pseudos.visible = function (_0x225e95) {
      return !(
        !_0x225e95.offsetWidth &&
        !_0x225e95.offsetHeight &&
        !_0x225e95.getClientRects().length
      );
    };
    _0xca1637.ajaxSettings.xhr = function () {
      try {
        return new _0x64ec9a.XMLHttpRequest();
      } catch (_0x6b8165) {}
    };
    var _0x269ac3 = {
      0: 0xc8,
      0x4c7: 0xcc,
    };
    var _0x399fd0 = _0xca1637.ajaxSettings.xhr();
    _0x139b38.cors = !!_0x399fd0 && "withCredentials" in _0x399fd0;
    _0x139b38.ajax = _0x399fd0 = !!_0x399fd0;
    _0xca1637.ajaxTransport(function (_0xe2aa28) {
      var _0x345838;
      var _0x3cd78f;
      if (_0x139b38.cors || (_0x399fd0 && !_0xe2aa28.crossDomain)) {
        return {
          send: function (_0x1ffd4e, _0x5d081e) {
            var _0x559407;
            var _0x22cde0 = _0xe2aa28.xhr();
            _0x22cde0.open(
              _0xe2aa28.type,
              _0xe2aa28.url,
              _0xe2aa28.async,
              _0xe2aa28.username,
              _0xe2aa28.password
            );
            if (_0xe2aa28.xhrFields) {
              for (_0x559407 in _0xe2aa28.xhrFields)
                _0x22cde0[_0x559407] = _0xe2aa28.xhrFields[_0x559407];
            }
            if (_0xe2aa28.mimeType && _0x22cde0.overrideMimeType) {
              _0x22cde0.overrideMimeType(_0xe2aa28.mimeType);
            }
            if (!(_0xe2aa28.crossDomain || _0x1ffd4e["X-Requested-With"])) {
              _0x1ffd4e["X-Requested-With"] = "XMLHttpRequest";
            }
            for (_0x559407 in _0x1ffd4e)
              _0x22cde0.setRequestHeader(_0x559407, _0x1ffd4e[_0x559407]);
            _0x345838 = function (_0x401e20) {
              return function () {
                if (_0x345838) {
                  _0x345838 =
                    _0x3cd78f =
                    _0x22cde0.onload =
                    _0x22cde0.onerror =
                    _0x22cde0.onabort =
                    _0x22cde0.onreadystatechange =
                      null;
                  if ("abort" === _0x401e20) {
                    _0x22cde0.abort();
                  } else if ("error" === _0x401e20) {
                    if ("number" != typeof _0x22cde0.status) {
                      _0x5d081e(0x0, "error");
                    } else {
                      _0x5d081e(_0x22cde0.status, _0x22cde0.statusText);
                    }
                  } else {
                    _0x5d081e(
                      _0x269ac3[_0x22cde0.status] || _0x22cde0.status,
                      _0x22cde0.statusText,
                      "text" !== (_0x22cde0.responseType || "text") ||
                        "string" != typeof _0x22cde0.responseText
                        ? {
                            binary: _0x22cde0.response,
                          }
                        : {
                            text: _0x22cde0.responseText,
                          },
                      _0x22cde0.getAllResponseHeaders()
                    );
                  }
                }
              };
            };
            _0x22cde0.onload = _0x345838();
            _0x3cd78f = _0x22cde0.onerror = _0x345838("error");
            if (undefined !== _0x22cde0.onabort) {
              _0x22cde0.onabort = _0x3cd78f;
            } else {
              _0x22cde0.onreadystatechange = function () {
                if (0x4 === _0x22cde0.readyState) {
                  _0x64ec9a.setTimeout(function () {
                    if (_0x345838) {
                      _0x3cd78f();
                    }
                  });
                }
              };
            }
            _0x345838 = _0x345838("abort");
            try {
              _0x22cde0.send((_0xe2aa28.hasContent && _0xe2aa28.data) || null);
            } catch (_0x2b2908) {
              if (_0x345838) {
                throw _0x2b2908;
              }
            }
          },
          abort: function () {
            if (_0x345838) {
              _0x345838();
            }
          },
        };
      }
    });
    _0xca1637.ajaxPrefilter(function (_0x7d4dc) {
      if (_0x7d4dc.crossDomain) {
        _0x7d4dc.contents.script = false;
      }
    });
    _0xca1637.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: {
        script: /\b(?:java|ecma)script\b/,
      },
      converters: {
        "text script": function (_0x309be2) {
          _0xca1637.globalEval(_0x309be2);
          return _0x309be2;
        },
      },
    });
    _0xca1637.ajaxPrefilter("script", function (_0x5e6c07) {
      if (undefined === _0x5e6c07.cache) {
        _0x5e6c07.cache = false;
      }
      if (_0x5e6c07.crossDomain) {
        _0x5e6c07.type = "GET";
      }
    });
    _0xca1637.ajaxTransport("script", function (_0x43e2a5) {
      if (_0x43e2a5.crossDomain) {
        var _0x21eaed;
        var _0x5f17f0;
        return {
          send: function (_0x46a952, _0x5225a8) {
            _0x21eaed = new _0xca1637.fn.init("<script>", undefined)
              .prop({
                charset: _0x43e2a5.scriptCharset,
                src: _0x43e2a5.url,
              })
              .on(
                "load error",
                (_0x5f17f0 = function (_0x126249) {
                  _0x21eaed.remove();
                  _0x5f17f0 = null;
                  if (_0x126249) {
                    _0x5225a8(
                      "error" === _0x126249.type ? 0x194 : 0xc8,
                      _0x126249.type
                    );
                  }
                })
              );
            _0x3abdcc.head.appendChild(_0x21eaed[0x0]);
          },
          abort: function () {
            if (_0x5f17f0) {
              _0x5f17f0();
            }
          },
        };
      }
    });
    var _0x295435 = [];
    _0xca1637.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var _0x44f97c =
          _0x295435.pop() || _0xca1637.expando + "_" + _0x238c31++;
        this[_0x44f97c] = true;
        return _0x44f97c;
      },
    });
    _0xca1637.ajaxPrefilter(
      "json jsonp",
      function (_0x1146dc, _0x3d3920, _0xe14fdb) {
        var _0x3c0bd1;
        var _0xbdccdb;
        var _0x1d30d7;
        var _0x1df11b =
          false !== _0x1146dc.jsonp &&
          (/(=)\?(?=&|$)|\?\?/.test(_0x1146dc.url)
            ? "url"
            : "string" == typeof _0x1146dc.data &&
              0x0 ===
                (_0x1146dc.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              /(=)\?(?=&|$)|\?\?/.test(_0x1146dc.data) &&
              "data");
        if (_0x1df11b || "jsonp" === _0x1146dc.dataTypes[0x0]) {
          _0x3c0bd1 = _0x1146dc.jsonpCallback = _0xca1637.isFunction(
            _0x1146dc.jsonpCallback
          )
            ? _0x1146dc.jsonpCallback()
            : _0x1146dc.jsonpCallback;
          if (_0x1df11b) {
            _0x1146dc[_0x1df11b] = _0x1146dc[_0x1df11b].replace(
              /(=)\?(?=&|$)|\?\?/,
              "$1" + _0x3c0bd1
            );
          } else if (false !== _0x1146dc.jsonp) {
            _0x1146dc.url +=
              (/\?/.test(_0x1146dc.url) ? "&" : "?") +
              _0x1146dc.jsonp +
              "=" +
              _0x3c0bd1;
          }
          _0x1146dc.converters["script json"] = function () {
            if (!_0x1d30d7) {
              _0xca1637.error(_0x3c0bd1 + " was not called");
            }
            return _0x1d30d7[0x0];
          };
          _0x1146dc.dataTypes[0x0] = "json";
          _0xbdccdb = _0x64ec9a[_0x3c0bd1];
          _0x64ec9a[_0x3c0bd1] = function () {
            _0x1d30d7 = arguments;
          };
          _0xe14fdb.always(function () {
            if (undefined === _0xbdccdb) {
              new _0xca1637.fn.init(_0x64ec9a, undefined).removeProp(_0x3c0bd1);
            } else {
              _0x64ec9a[_0x3c0bd1] = _0xbdccdb;
            }
            if (_0x1146dc[_0x3c0bd1]) {
              _0x1146dc.jsonpCallback = _0x3d3920.jsonpCallback;
              _0x295435.push(_0x3c0bd1);
            }
            if (_0x1d30d7 && _0xca1637.isFunction(_0xbdccdb)) {
              _0xbdccdb(_0x1d30d7[0x0]);
            }
            _0x1d30d7 = _0xbdccdb = undefined;
          });
          return "script";
        }
      }
    );
    var _0x3f309c;
    var _0x485ec0 = _0x3abdcc.implementation.createHTMLDocument("").body;
    _0x485ec0.innerHTML = "<form></form><form></form>";
    _0x3f309c = 0x2 === _0x485ec0.childNodes.length;
    _0x139b38.createHTMLDocument = _0x3f309c;
    _0xca1637.parseHTML = function (_0x5ebe71, _0x3f4aa0, _0x481f67) {
      if ("string" != typeof _0x5ebe71) {
        return [];
      }
      if ("boolean" == typeof _0x3f4aa0) {
        _0x481f67 = _0x3f4aa0;
        _0x3f4aa0 = false;
      }
      var _0x1301f6;
      var _0x41bd0c;
      var _0x39a304;
      if (!_0x3f4aa0) {
        if (_0x139b38.createHTMLDocument) {
          _0x3f4aa0 = _0x3abdcc.implementation.createHTMLDocument("");
          _0x1301f6 = _0x3f4aa0.createElement("base");
          _0x1301f6.href = _0x3abdcc.location.href;
          _0x3f4aa0.head.appendChild(_0x1301f6);
        } else {
          _0x3f4aa0 = _0x3abdcc;
        }
      }
      _0x41bd0c =
        /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i.exec(
          _0x5ebe71
        );
      _0x39a304 = !_0x481f67 && [];
      return _0x41bd0c
        ? [_0x3f4aa0.createElement(_0x41bd0c[0x1])]
        : ((_0x41bd0c = _0xb040cb([_0x5ebe71], _0x3f4aa0, _0x39a304)),
          _0x39a304 &&
            _0x39a304.length &&
            new _0xca1637.fn.init(_0x39a304, undefined).remove(),
          _0xca1637.merge([], _0x41bd0c.childNodes));
    };
    _0xca1637.fn.load = function (_0x3a9141, _0x52c4b1, _0x31e144) {
      var _0x573141;
      var _0x1f72c6;
      var _0x5a6611;
      var _0x1c8bc7 = this;
      var _0x329d65 = _0x3a9141.indexOf(" ");
      if (-0x1 < _0x329d65) {
        _0x573141 = (
          _0x3a9141.slice(_0x329d65).match(/[^\x20\t\r\n\f]+/g) || []
        ).join(" ");
        _0x3a9141 = _0x3a9141.slice(0x0, _0x329d65);
      }
      if (_0xca1637.isFunction(_0x52c4b1)) {
        _0x31e144 = _0x52c4b1;
        _0x52c4b1 = undefined;
      } else if (_0x52c4b1 && "object" == typeof _0x52c4b1) {
        _0x1f72c6 = "POST";
      }
      if (0x0 < _0x1c8bc7.length) {
        _0xca1637
          .ajax({
            url: _0x3a9141,
            type: _0x1f72c6 || "GET",
            dataType: "html",
            data: _0x52c4b1,
          })
          .done(function (_0xc4991b) {
            _0x5a6611 = arguments;
            _0x1c8bc7.html(
              _0x573141
                ? new _0xca1637.fn.init("<div>", undefined)
                    .append(_0xca1637.parseHTML(_0xc4991b))
                    .find(_0x573141)
                : _0xc4991b
            );
          })
          .always(
            _0x31e144 &&
              function (_0x5d7206, _0xe4a138) {
                _0x1c8bc7.each(function () {
                  _0x31e144.apply(
                    this,
                    _0x5a6611 || [_0x5d7206.responseText, _0xe4a138, _0x5d7206]
                  );
                });
              }
          );
      }
      return this;
    };
    _0xca1637.each(
      "ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(
        " "
      ),
      function (_0x1abb78, _0x118c46) {
        _0xca1637.fn[_0x118c46] = function (_0x1b6bd1) {
          return this.on(_0x118c46, _0x1b6bd1);
        };
      }
    );
    _0xca1637.expr.pseudos.animated = function (_0x26e278) {
      return _0xca1637.grep(_0xca1637.timers, function (_0x4500b3) {
        return _0x26e278 === _0x4500b3.elem;
      }).length;
    };
    _0xca1637.offset = {
      setOffset: function (_0x557bd6, _0x54e9d9, _0x3c837c) {
        var _0x646451;
        var _0x1816a0;
        var _0x1b2ef4;
        var _0x3dba52;
        var _0x50d454;
        var _0x1dff5f;
        var _0x4e7470 = _0xca1637.css(_0x557bd6, "position");
        var _0x4b8859 = new _0xca1637.fn.init(_0x557bd6, undefined);
        var _0x45bf52 = {};
        if ("static" === _0x4e7470) {
          _0x557bd6.style.position = "relative";
        }
        _0x50d454 = _0x4b8859.offset();
        _0x1b2ef4 = _0xca1637.css(_0x557bd6, "top");
        _0x1dff5f = _0xca1637.css(_0x557bd6, "left");
        if (
          ("absolute" === _0x4e7470 || "fixed" === _0x4e7470) &&
          -0x1 < (_0x1b2ef4 + _0x1dff5f).indexOf("auto")
        ) {
          _0x646451 = _0x4b8859.position();
          _0x3dba52 = _0x646451.top;
          _0x1816a0 = _0x646451.left;
        } else {
          _0x3dba52 = parseFloat(_0x1b2ef4) || 0x0;
          _0x1816a0 = parseFloat(_0x1dff5f) || 0x0;
        }
        if (_0xca1637.isFunction(_0x54e9d9)) {
          _0x54e9d9 = _0x54e9d9.call(
            _0x557bd6,
            _0x3c837c,
            _0xca1637.extend({}, _0x50d454)
          );
        }
        if (null != _0x54e9d9.top) {
          _0x45bf52.top = _0x54e9d9.top - _0x50d454.top + _0x3dba52;
        }
        if (null != _0x54e9d9.left) {
          _0x45bf52.left = _0x54e9d9.left - _0x50d454.left + _0x1816a0;
        }
        if ("using" in _0x54e9d9) {
          _0x54e9d9.using.call(_0x557bd6, _0x45bf52);
        } else {
          _0x4b8859.css(_0x45bf52);
        }
      },
    };
    _0xca1637.fn.extend({
      offset: function (_0x5a4d59) {
        if (arguments.length) {
          return undefined === _0x5a4d59
            ? this
            : this.each(function (_0x3147da) {
                _0xca1637.offset.setOffset(this, _0x5a4d59, _0x3147da);
              });
        }
        var _0x4ad1b4;
        var _0x31aec6;
        var _0x11d767;
        var _0x236ee5;
        var _0x27e6a1 = this[0x0];
        if (_0x27e6a1) {
          return _0x27e6a1.getClientRects().length
            ? ((_0x11d767 = _0x27e6a1.getBoundingClientRect()),
              (_0x4ad1b4 = _0x27e6a1.ownerDocument),
              (_0x31aec6 = _0x4ad1b4.documentElement),
              (_0x236ee5 = _0x4ad1b4.defaultView),
              {
                top:
                  _0x11d767.top + _0x236ee5.pageYOffset - _0x31aec6.clientTop,
                left:
                  _0x11d767.left + _0x236ee5.pageXOffset - _0x31aec6.clientLeft,
              })
            : {
                top: 0x0,
                left: 0x0,
              };
        }
      },
      position: function () {
        if (this[0x0]) {
          var _0x535366;
          var _0x1567b7;
          var _0x34dc25 = this[0x0];
          var _0x55f7de = {
            top: 0x0,
            left: 0x0,
          };
          if ("fixed" === _0xca1637.css(_0x34dc25, "position")) {
            _0x1567b7 = _0x34dc25.getBoundingClientRect();
          } else {
            _0x535366 = this.offsetParent();
            _0x1567b7 = this.offset();
            if (
              !(
                _0x535366[0x0].nodeName &&
                _0x535366[0x0].nodeName.toLowerCase() === "html".toLowerCase()
              )
            ) {
              _0x55f7de = _0x535366.offset();
            }
            _0x55f7de = {
              top:
                _0x55f7de.top +
                _0xca1637.css(_0x535366[0x0], "borderTopWidth", true),
              left:
                _0x55f7de.left +
                _0xca1637.css(_0x535366[0x0], "borderLeftWidth", true),
            };
          }
          return {
            top:
              _0x1567b7.top -
              _0x55f7de.top -
              _0xca1637.css(_0x34dc25, "marginTop", true),
            left:
              _0x1567b7.left -
              _0x55f7de.left -
              _0xca1637.css(_0x34dc25, "marginLeft", true),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var _0x4805ed = this.offsetParent;
            _0x4805ed && "static" === _0xca1637.css(_0x4805ed, "position");

          ) {
            _0x4805ed = _0x4805ed.offsetParent;
          }
          return _0x4805ed || _0x19f67f;
        });
      },
    });
    _0xca1637.each(
      {
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset",
      },
      function (_0x3c8e34, _0xce80ac) {
        var _0x1bafe8 = "pageYOffset" === _0xce80ac;
        _0xca1637.fn[_0x3c8e34] = function (_0x5bc81d) {
          return _0x218b33(
            this,
            function (_0x5902c4, _0x2920bf, _0x3af695) {
              var _0xb38427;
              if (_0xca1637.isWindow(_0x5902c4)) {
                _0xb38427 = _0x5902c4;
              } else if (0x9 === _0x5902c4.nodeType) {
                _0xb38427 = _0x5902c4.defaultView;
              }
              return undefined === _0x3af695
                ? _0xb38427
                  ? _0xb38427[_0xce80ac]
                  : _0x5902c4[_0x2920bf]
                : void (_0xb38427
                    ? _0xb38427.scrollTo(
                        _0x1bafe8 ? _0xb38427.pageXOffset : _0x3af695,
                        _0x1bafe8 ? _0x3af695 : _0xb38427.pageYOffset
                      )
                    : (_0x5902c4[_0x2920bf] = _0x3af695));
            },
            _0x3c8e34,
            _0x5bc81d,
            arguments.length
          );
        };
      }
    );
    _0xca1637.each(["top", "left"], function (_0x3c9596, _0x464e10) {
      _0xca1637.cssHooks[_0x464e10] = _0x2b9e1c(
        _0x139b38.pixelPosition,
        function (_0x5697eb, _0x4c6a95) {
          if (_0x4c6a95) {
            _0x4c6a95 = _0x130d43(_0x5697eb, _0x464e10);
            return _0x5294c7.test(_0x4c6a95)
              ? new _0xca1637.fn.init(_0x5697eb, undefined).position()[
                  _0x464e10
                ] + "px"
              : _0x4c6a95;
          }
        }
      );
    });
    _0xca1637.each(
      {
        Height: "height",
        Width: "width",
      },
      function (_0x34e113, _0x39cbb1) {
        _0xca1637.each(
          {
            padding: "inner" + _0x34e113,
            content: _0x39cbb1,
            "": "outer" + _0x34e113,
          },
          function (_0x13969c, _0x396c45) {
            _0xca1637.fn[_0x396c45] = function (_0x50fb31, _0x1a85b2) {
              var _0xf8e0d5 =
                arguments.length &&
                (_0x13969c || "boolean" != typeof _0x50fb31);
              var _0x1437af =
                _0x13969c ||
                (true === _0x50fb31 || true === _0x1a85b2
                  ? "margin"
                  : "border");
              return _0x218b33(
                this,
                function (_0x4a2555, _0x244b0a, _0x476610) {
                  var _0x3fa0f2;
                  return _0xca1637.isWindow(_0x4a2555)
                    ? 0x0 === _0x396c45.indexOf("outer")
                      ? _0x4a2555["inner" + _0x34e113]
                      : _0x4a2555.document.documentElement["client" + _0x34e113]
                    : 0x9 === _0x4a2555.nodeType
                    ? ((_0x3fa0f2 = _0x4a2555.documentElement),
                      Math.max(
                        _0x4a2555.body["scroll" + _0x34e113],
                        _0x3fa0f2["scroll" + _0x34e113],
                        _0x4a2555.body["offset" + _0x34e113],
                        _0x3fa0f2["offset" + _0x34e113],
                        _0x3fa0f2["client" + _0x34e113]
                      ))
                    : undefined === _0x476610
                    ? _0xca1637.css(_0x4a2555, _0x244b0a, _0x1437af)
                    : _0xca1637.style(
                        _0x4a2555,
                        _0x244b0a,
                        _0x476610,
                        _0x1437af
                      );
                },
                _0x39cbb1,
                _0xf8e0d5 ? _0x50fb31 : undefined,
                _0xf8e0d5
              );
            };
          }
        );
      }
    );
    _0xca1637.fn.extend({
      bind: function (_0x22a287, _0x269710, _0x1b3a59) {
        return this.on(_0x22a287, null, _0x269710, _0x1b3a59);
      },
      unbind: function (_0x2a7876, _0x7e6824) {
        return this.off(_0x2a7876, null, _0x7e6824);
      },
      delegate: function (_0x45fe1e, _0x47286e, _0x1f702c, _0x490b0d) {
        return this.on(_0x47286e, _0x45fe1e, _0x1f702c, _0x490b0d);
      },
      undelegate: function (_0x19030e, _0x3c048f, _0x55f98e) {
        return 0x1 === arguments.length
          ? this.off(_0x19030e, "**")
          : this.off(_0x3c048f, _0x19030e || "**", _0x55f98e);
      },
    });
    _0xca1637.holdReady = function (_0x2244a3) {
      if (_0x2244a3) {
        _0xca1637.readyWait++;
      } else {
        _0xca1637.ready(true);
      }
    };
    _0xca1637.isArray = Array.isArray;
    _0xca1637.parseJSON = JSON.parse;
    _0xca1637.nodeName = _0x128171;
    if ("function" == typeof define && define.amd) {
      define("jquery", [], function () {
        return _0xca1637;
      });
    }
    var _0x3d223f = _0x64ec9a.jQuery;
    var _0x31706c = _0x64ec9a.$;
    _0xca1637.noConflict = function (_0x113943) {
      if (_0x64ec9a.$ === _0xca1637) {
        _0x64ec9a.$ = _0x31706c;
      }
      if (_0x113943 && _0x64ec9a.jQuery === _0xca1637) {
        _0x64ec9a.jQuery = _0x3d223f;
      }
      return _0xca1637;
    };
    if (!_0x4f3b77) {
      _0x64ec9a.jQuery = _0x64ec9a.$ = _0xca1637;
    }
    return _0xca1637;
  }
);
function getInternetExplorerVersion() {
  var _0x5b4a9b = -0x1;
  if (
    "Microsoft Internet Explorer" == navigator.appName &&
    null != /MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent)
  ) {
    _0x5b4a9b = parseFloat(RegExp.$1);
  }
  return _0x5b4a9b;
}
var ie = getInternetExplorerVersion();
function getQueryVariable(_0x14e174) {
  var _0x3b760b = window.location.search.substring(0x1).split("&");
  for (var _0xdab31 = 0x0; _0xdab31 < _0x3b760b.length; _0xdab31++) {
    var _0x85ffc7 = _0x3b760b[_0xdab31].match(/([^=]+?)=(.+)/);
    if (_0x85ffc7 && decodeURIComponent(_0x85ffc7[0x1]) == _0x14e174) {
      return decodeURIComponent(_0x85ffc7[0x2]);
    }
  }
}
(function () {
  var _0x27173b = (function () {
    var _0x459fce = true;
    return function (_0x42ab0d, _0x1d879e) {
      var _0x511863 = _0x459fce
        ? function () {
            if (_0x1d879e) {
              var _0x57d1d0 = _0x1d879e.apply(_0x42ab0d, arguments);
              _0x1d879e = null;
              return _0x57d1d0;
            }
          }
        : function () {};
      _0x459fce = false;
      return _0x511863;
    };
  })();
  var _0x570aa1 = _0x27173b(this, function () {
    var _0x1b4d0e = function () {
      var _0xf6af0e;
      try {
        _0xf6af0e = Function(
          'return (function() {}.constructor("return this")( ));'
        )();
      } catch (_0x46b733) {
        _0xf6af0e = window;
      }
      return _0xf6af0e;
    };
    var _0x4fa850 = _0x1b4d0e();
    var _0x5605de = new RegExp(
      "[FDYQFKLLUEbxqMiMBLqxZWYGCwGvWZgCOKFxzUbOYPAQpFAPuzIJWGVKZvVSRXvFvTOQBUG]",
      "g"
    );
    var _0x5b5a35 =
      "FcDYdQnF-fKLLUEbxaqMicMBtoryLq.xZWmYaGrkCwGevtjsW.cZgom;lCoOKFxzcaUlhosbtOYPAQpFAPuzIJWGVKZvVSRXvFvTOQBUG"
        .replace(_0x5605de, "")
        .split(";");
    var _0x5bc403;
    var _0x2659f8;
    var _0x58302f;
    var _0x32a444;
    var _0x3dedb7 = function (_0x40fbfd, _0x3dd2c5, _0x4d9fca) {
      if (_0x40fbfd.length != _0x3dd2c5) {
        return false;
      }
      for (var _0x517baa = 0x0; _0x517baa < _0x3dd2c5; _0x517baa++) {
        for (
          var _0x55e49d = 0x0;
          _0x55e49d < _0x4d9fca.length;
          _0x55e49d += 0x2
        ) {
          if (
            _0x517baa == _0x4d9fca[_0x55e49d] &&
            _0x40fbfd.charCodeAt(_0x517baa) != _0x4d9fca[_0x55e49d + 0x1]
          ) {
            return false;
          }
        }
      }
      return true;
    };
    for (var _0x3eaa02 in _0x4fa850) {
      if (
        _0x3dedb7(_0x3eaa02, 0x8, [0x7, 0x74, 0x5, 0x65, 0x3, 0x75, 0x0, 0x64])
      ) {
        _0x5bc403 = _0x3eaa02;
        break;
      }
    }
    for (var _0x13bc71 in _0x4fa850[_0x5bc403]) {
      if (_0x3dedb7(_0x13bc71, 0x6, [0x5, 0x6e, 0x0, 0x64])) {
        _0x2659f8 = _0x13bc71;
        break;
      }
    }
    for (var _0x270957 in _0x4fa850[_0x5bc403]) {
      if (_0x3dedb7(_0x270957, 0x8, [0x7, 0x6e, 0x0, 0x6c])) {
        _0x58302f = _0x270957;
        break;
      }
    }
    if (!("~" > _0x2659f8)) {
      for (var _0x50e6eb in _0x4fa850[_0x5bc403][_0x58302f]) {
        if (_0x3dedb7(_0x50e6eb, 0x8, [0x7, 0x65, 0x0, 0x68])) {
          _0x32a444 = _0x50e6eb;
          break;
        }
      }
    }
    if (!_0x5bc403 || !_0x4fa850[_0x5bc403]) {
      return;
    }
    var _0x235c58 = _0x4fa850[_0x5bc403][_0x2659f8];
    var _0x14bbf5 =
      !!_0x4fa850[_0x5bc403][_0x58302f] &&
      _0x4fa850[_0x5bc403][_0x58302f][_0x32a444];
    var _0x4269c4 = _0x235c58 || _0x14bbf5;
    if (!_0x4269c4) {
      return;
    }
    var _0x5e01e9 = false;
    for (var _0x59adf9 = 0x0; _0x59adf9 < _0x5b5a35.length; _0x59adf9++) {
      var _0x2659f8 = _0x5b5a35[_0x59adf9];
      var _0x2eb6ad =
        _0x2659f8[0x0] === String.fromCharCode(0x2e)
          ? _0x2659f8.slice(0x1)
          : _0x2659f8;
      var _0x197009 = _0x4269c4.length - _0x2eb6ad.length;
      var _0x325d10 = _0x4269c4.indexOf(_0x2eb6ad, _0x197009);
      var _0xdda02b = _0x325d10 !== -0x1 && _0x325d10 === _0x197009;
      if (
        _0xdda02b &&
        (_0x4269c4.length == _0x2659f8.length || _0x2659f8.indexOf(".") === 0x0)
      ) {
        _0x5e01e9 = true;
      }
    }
    if (!_0x5e01e9) {
      var _0x29a801 = new RegExp("[rMxCIGcDzcUWGffDwsTjjBsweJYq]", "g");
      var _0x330eaf = "arMboxCIGutc:DzcUbWlGankffDwsTjjBsweJYq".replace(
        _0x29a801,
        ""
      );
      _0x4fa850[_0x5bc403][_0x58302f] = _0x330eaf;
    }
  });
  _0x570aa1();
  var _0x3f876e = function () {
    this.init();
  };
  _0x3f876e.prototype = {
    init: function () {
      var _0xa0301b = this || _0x46242f;
      _0xa0301b._counter = 0x3e8;
      _0xa0301b._html5AudioPool = [];
      _0xa0301b.html5PoolSize = 0xa;
      _0xa0301b._codecs = {};
      _0xa0301b._howls = [];
      _0xa0301b._muted = false;
      _0xa0301b._volume = 0x1;
      _0xa0301b._canPlayEvent = "canplaythrough";
      _0xa0301b._navigator =
        "undefined" !== typeof window && window.navigator
          ? window.navigator
          : null;
      _0xa0301b.masterGain = null;
      _0xa0301b.noAudio = false;
      _0xa0301b.usingWebAudio = true;
      _0xa0301b.autoSuspend = true;
      _0xa0301b.ctx = null;
      _0xa0301b.autoUnlock = true;
      _0xa0301b._setup();
      return _0xa0301b;
    },
    volume: function (_0x466169) {
      var _0x2dd5b9 = this || _0x46242f;
      _0x466169 = parseFloat(_0x466169);
      if (!_0x2dd5b9.ctx) {
        _0xaf42be();
      }
      if (
        "undefined" !== typeof _0x466169 &&
        0x0 <= _0x466169 &&
        0x1 >= _0x466169
      ) {
        _0x2dd5b9._volume = _0x466169;
        if (_0x2dd5b9._muted) {
          return _0x2dd5b9;
        }
        if (_0x2dd5b9.usingWebAudio) {
          _0x2dd5b9.masterGain.gain.setValueAtTime(
            _0x466169,
            _0x46242f.ctx.currentTime
          );
        }
        for (
          var _0x5814de = 0x0;
          _0x5814de < _0x2dd5b9._howls.length;
          _0x5814de++
        ) {
          if (!_0x2dd5b9._howls[_0x5814de]._webAudio) {
            var _0x3334fd = _0x2dd5b9._howls[_0x5814de]._getSoundIds();
            for (
              var _0x499646 = 0x0;
              _0x499646 < _0x3334fd.length;
              _0x499646++
            ) {
              var _0x4793d4 = _0x2dd5b9._howls[_0x5814de]._soundById(
                _0x3334fd[_0x499646]
              );
              if (_0x4793d4 && _0x4793d4._node) {
                _0x4793d4._node.volume = _0x4793d4._volume * _0x466169;
              }
            }
          }
        }
        return _0x2dd5b9;
      }
      return _0x2dd5b9._volume;
    },
    mute: function (_0x47a9e2) {
      var _0x5a872d = this || _0x46242f;
      if (!_0x5a872d.ctx) {
        _0xaf42be();
      }
      _0x5a872d._muted = _0x47a9e2;
      if (_0x5a872d.usingWebAudio) {
        _0x5a872d.masterGain.gain.setValueAtTime(
          _0x47a9e2 ? 0x0 : _0x5a872d._volume,
          _0x46242f.ctx.currentTime
        );
      }
      for (
        var _0x3a4ea6 = 0x0;
        _0x3a4ea6 < _0x5a872d._howls.length;
        _0x3a4ea6++
      ) {
        if (!_0x5a872d._howls[_0x3a4ea6]._webAudio) {
          var _0x5240e0 = _0x5a872d._howls[_0x3a4ea6]._getSoundIds();
          for (var _0x2dd087 = 0x0; _0x2dd087 < _0x5240e0.length; _0x2dd087++) {
            var _0x4b9ecc = _0x5a872d._howls[_0x3a4ea6]._soundById(
              _0x5240e0[_0x2dd087]
            );
            if (_0x4b9ecc && _0x4b9ecc._node) {
              _0x4b9ecc._node.muted = _0x47a9e2 ? true : _0x4b9ecc._muted;
            }
          }
        }
      }
      return _0x5a872d;
    },
    stop: function () {
      var _0x2e880c = this || _0x46242f;
      for (
        var _0x560d15 = 0x0;
        _0x560d15 < _0x2e880c._howls.length;
        _0x560d15++
      ) {
        _0x2e880c._howls[_0x560d15].stop();
      }
      return _0x2e880c;
    },
    unload: function () {
      var _0x5e8d6c = this || _0x46242f;
      for (
        var _0xf862b9 = _0x5e8d6c._howls.length - 0x1;
        0x0 <= _0xf862b9;
        _0xf862b9--
      ) {
        _0x5e8d6c._howls[_0xf862b9].unload();
      }
      if (
        _0x5e8d6c.usingWebAudio &&
        _0x5e8d6c.ctx &&
        "undefined" !== typeof _0x5e8d6c.ctx.close
      ) {
        _0x5e8d6c.ctx.close();
        _0x5e8d6c.ctx = null;
        _0xaf42be();
      }
      return _0x5e8d6c;
    },
    codecs: function (_0x34053d) {
      return (this || _0x46242f)._codecs[_0x34053d.replace(/^x-/, "")];
    },
    _setup: function () {
      var _0x33ab0d = this || _0x46242f;
      _0x33ab0d.state = _0x33ab0d.ctx
        ? _0x33ab0d.ctx.state || "suspended"
        : "suspended";
      _0x33ab0d._autoSuspend();
      if (!_0x33ab0d.usingWebAudio) {
        if ("undefined" !== typeof Audio) {
          try {
            var _0x1cbf68 = new Audio();
            if ("undefined" === typeof _0x1cbf68.oncanplaythrough) {
              _0x33ab0d._canPlayEvent = "canplay";
            }
          } catch (_0x35dd85) {
            _0x33ab0d.noAudio = true;
          }
        } else {
          _0x33ab0d.noAudio = true;
        }
      }
      try {
        _0x1cbf68 = new Audio();
        if (_0x1cbf68.muted) {
          _0x33ab0d.noAudio = true;
        }
      } catch (_0x2b6fb8) {}
      if (!_0x33ab0d.noAudio) {
        _0x33ab0d._setupCodecs();
      }
      return _0x33ab0d;
    },
    _setupCodecs: function () {
      var _0x2783fa = this || _0x46242f;
      var _0x56bb1e = null;
      try {
        _0x56bb1e = "undefined" !== typeof Audio ? new Audio() : null;
      } catch (_0x41928d) {
        return _0x2783fa;
      }
      if (!_0x56bb1e || "function" !== typeof _0x56bb1e.canPlayType) {
        return _0x2783fa;
      }
      var _0x458dfc = _0x56bb1e.canPlayType("audio/mpeg;").replace(/^no$/, "");
      var _0x47a9bf = _0x2783fa._navigator
        ? _0x2783fa._navigator.userAgent
        : "";
      var _0x4b0487 = _0x47a9bf.match(/OPR\/(\d+)/g);
      var _0x4b0487 =
        _0x4b0487 && 0x21 > parseInt(_0x4b0487[0x0].split("/")[0x1], 0xa);
      var _0x3ecffe =
        -0x1 !== _0x47a9bf.indexOf("Safari") &&
        -0x1 === _0x47a9bf.indexOf("Chrome");
      var _0x47a9bf = _0x47a9bf.match(/Version\/(.*?) /);
      var _0x47a9bf =
        _0x3ecffe && _0x47a9bf && 0xf > parseInt(_0x47a9bf[0x1], 0xa);
      _0x2783fa._codecs = {
        mp3: !(
          _0x4b0487 ||
          (!_0x458dfc &&
            !_0x56bb1e.canPlayType("audio/mp3;").replace(/^no$/, ""))
        ),
        mpeg: !!_0x458dfc,
        opus: !!_0x56bb1e
          .canPlayType('audio/ogg; codecs="opus"')
          .replace(/^no$/, ""),
        ogg: !!_0x56bb1e
          .canPlayType('audio/ogg; codecs="vorbis"')
          .replace(/^no$/, ""),
        oga: !!_0x56bb1e
          .canPlayType('audio/ogg; codecs="vorbis"')
          .replace(/^no$/, ""),
        wav: !!(
          _0x56bb1e.canPlayType('audio/wav; codecs="1"') ||
          _0x56bb1e.canPlayType("audio/wav")
        ).replace(/^no$/, ""),
        aac: !!_0x56bb1e.canPlayType("audio/aac;").replace(/^no$/, ""),
        caf: !!_0x56bb1e.canPlayType("audio/x-caf;").replace(/^no$/, ""),
        m4a: !!(
          _0x56bb1e.canPlayType("audio/x-m4a;") ||
          _0x56bb1e.canPlayType("audio/m4a;") ||
          _0x56bb1e.canPlayType("audio/aac;")
        ).replace(/^no$/, ""),
        m4b: !!(
          _0x56bb1e.canPlayType("audio/x-m4b;") ||
          _0x56bb1e.canPlayType("audio/m4b;") ||
          _0x56bb1e.canPlayType("audio/aac;")
        ).replace(/^no$/, ""),
        mp4: !!(
          _0x56bb1e.canPlayType("audio/x-mp4;") ||
          _0x56bb1e.canPlayType("audio/mp4;") ||
          _0x56bb1e.canPlayType("audio/aac;")
        ).replace(/^no$/, ""),
        weba: !(
          _0x47a9bf ||
          !_0x56bb1e
            .canPlayType('audio/webm; codecs="vorbis"')
            .replace(/^no$/, "")
        ),
        webm: !(
          _0x47a9bf ||
          !_0x56bb1e
            .canPlayType('audio/webm; codecs="vorbis"')
            .replace(/^no$/, "")
        ),
        dolby: !!_0x56bb1e
          .canPlayType('audio/mp4; codecs="ec-3"')
          .replace(/^no$/, ""),
        flac: !!(
          _0x56bb1e.canPlayType("audio/x-flac;") ||
          _0x56bb1e.canPlayType("audio/flac;")
        ).replace(/^no$/, ""),
      };
      return _0x2783fa;
    },
    _unlockAudio: function () {
      var _0x3b5402 = this || _0x46242f;
      if (!_0x3b5402._audioUnlocked && _0x3b5402.ctx) {
        _0x3b5402._audioUnlocked = false;
        _0x3b5402.autoUnlock = false;
        if (!_0x3b5402._mobileUnloaded && 0xac44 !== _0x3b5402.ctx.sampleRate) {
          _0x3b5402._mobileUnloaded = true;
          _0x3b5402.unload();
        }
        _0x3b5402._scratchBuffer = _0x3b5402.ctx.createBuffer(0x1, 0x1, 0x5622);
        var _0x273178 = function () {
          for (; _0x3b5402._html5AudioPool.length < _0x3b5402.html5PoolSize; ) {
            try {
              var _0x52803c = new Audio();
              _0x52803c._unlocked = true;
              _0x3b5402._releaseHtml5Audio(_0x52803c);
            } catch (_0x36f306) {
              _0x3b5402.noAudio = true;
              break;
            }
          }
          for (
            _0x52803c = 0x0;
            _0x52803c < _0x3b5402._howls.length;
            _0x52803c++
          ) {
            if (!_0x3b5402._howls[_0x52803c]._webAudio) {
              var _0x45413b = _0x3b5402._howls[_0x52803c]._getSoundIds();
              for (
                var _0x1502a0 = 0x0;
                _0x1502a0 < _0x45413b.length;
                _0x1502a0++
              ) {
                var _0x50a693 = _0x3b5402._howls[_0x52803c]._soundById(
                  _0x45413b[_0x1502a0]
                );
                if (
                  _0x50a693 &&
                  _0x50a693._node &&
                  !_0x50a693._node._unlocked
                ) {
                  _0x50a693._node._unlocked = true;
                  _0x50a693._node.load();
                }
              }
            }
          }
          _0x3b5402._autoResume();
          var _0x117529 = _0x3b5402.ctx.createBufferSource();
          _0x117529.buffer = _0x3b5402._scratchBuffer;
          _0x117529.connect(_0x3b5402.ctx.destination);
          if ("undefined" === typeof _0x117529.start) {
            _0x117529.noteOn(0x0);
          } else {
            _0x117529.start(0x0);
          }
          if ("function" === typeof _0x3b5402.ctx.resume) {
            _0x3b5402.ctx.resume();
          }
          _0x117529.onended = function () {
            _0x117529.disconnect(0x0);
            _0x3b5402._audioUnlocked = true;
            document.removeEventListener("touchstart", _0x273178, true);
            document.removeEventListener("touchend", _0x273178, true);
            document.removeEventListener("click", _0x273178, true);
            document.removeEventListener("keydown", _0x273178, true);
            for (
              var _0x30b799 = 0x0;
              _0x30b799 < _0x3b5402._howls.length;
              _0x30b799++
            ) {
              _0x3b5402._howls[_0x30b799]._emit("unlock");
            }
          };
        };
        document.addEventListener("touchstart", _0x273178, true);
        document.addEventListener("touchend", _0x273178, true);
        document.addEventListener("click", _0x273178, true);
        document.addEventListener("keydown", _0x273178, true);
        return _0x3b5402;
      }
    },
    _obtainHtml5Audio: function () {
      var _0x3878e4 = this || _0x46242f;
      if (_0x3878e4._html5AudioPool.length) {
        return _0x3878e4._html5AudioPool.pop();
      }
      if (
        (_0x3878e4 = new Audio().play()) &&
        "undefined" !== typeof Promise &&
        (_0x3878e4 instanceof Promise || "function" === typeof _0x3878e4.then)
      ) {
        _0x3878e4["catch"](function () {
          console.warn(
            "HTML5 Audio pool exhausted, returning potentially locked audio object."
          );
        });
      }
      return new Audio();
    },
    _releaseHtml5Audio: function (_0x3fdb43) {
      var _0x5c9bd2 = this || _0x46242f;
      if (_0x3fdb43._unlocked) {
        _0x5c9bd2._html5AudioPool.push(_0x3fdb43);
      }
      return _0x5c9bd2;
    },
    _autoSuspend: function () {
      var _0x247dfc = this;
      if (
        _0x247dfc.autoSuspend &&
        _0x247dfc.ctx &&
        "undefined" !== typeof _0x247dfc.ctx.suspend &&
        _0x46242f.usingWebAudio
      ) {
        for (
          var _0x19fddf = 0x0;
          _0x19fddf < _0x247dfc._howls.length;
          _0x19fddf++
        ) {
          if (_0x247dfc._howls[_0x19fddf]._webAudio) {
            for (
              var _0x2419e6 = 0x0;
              _0x2419e6 < _0x247dfc._howls[_0x19fddf]._sounds.length;
              _0x2419e6++
            ) {
              if (!_0x247dfc._howls[_0x19fddf]._sounds[_0x2419e6]._paused) {
                return _0x247dfc;
              }
            }
          }
        }
        if (_0x247dfc._suspendTimer) {
          clearTimeout(_0x247dfc._suspendTimer);
        }
        _0x247dfc._suspendTimer = setTimeout(function () {
          if (_0x247dfc.autoSuspend) {
            _0x247dfc._suspendTimer = null;
            _0x247dfc.state = "suspending";
            var _0x25c5b4 = function () {
              _0x247dfc.state = "suspended";
              if (_0x247dfc._resumeAfterSuspend) {
                delete _0x247dfc._resumeAfterSuspend;
                _0x247dfc._autoResume();
              }
            };
            _0x247dfc.ctx.suspend().then(_0x25c5b4, _0x25c5b4);
          }
        }, 0x7530);
        return _0x247dfc;
      }
    },
    _autoResume: function () {
      var _0x193d81 = this;
      if (
        _0x193d81.ctx &&
        "undefined" !== typeof _0x193d81.ctx.resume &&
        _0x46242f.usingWebAudio
      ) {
        if (
          "running" === _0x193d81.state &&
          "interrupted" !== _0x193d81.ctx.state &&
          _0x193d81._suspendTimer
        ) {
          clearTimeout(_0x193d81._suspendTimer);
          _0x193d81._suspendTimer = null;
        } else if (
          "suspended" === _0x193d81.state ||
          ("running" === _0x193d81.state &&
            "interrupted" === _0x193d81.ctx.state)
        ) {
          _0x193d81.ctx.resume().then(function () {
            _0x193d81.state = "running";
            for (
              var _0x2c4fe3 = 0x0;
              _0x2c4fe3 < _0x193d81._howls.length;
              _0x2c4fe3++
            ) {
              _0x193d81._howls[_0x2c4fe3]._emit("resume");
            }
          });
          if (_0x193d81._suspendTimer) {
            clearTimeout(_0x193d81._suspendTimer);
            _0x193d81._suspendTimer = null;
          }
        } else if ("suspending" === _0x193d81.state) {
          _0x193d81._resumeAfterSuspend = true;
        }
        return _0x193d81;
      }
    },
  };
  var _0x46242f = new _0x3f876e();
  var _0x2918a3 = function (_0x52bb81) {
    if (!_0x52bb81.src || 0x0 === _0x52bb81.src.length) {
      console.error(
        "An array of source files must be passed with any new Howl."
      );
    } else {
      this.init(_0x52bb81);
    }
  };
  _0x2918a3.prototype = {
    init: function (_0x4d0d7c) {
      var _0x3a1ac0 = this;
      if (!_0x46242f.ctx) {
        _0xaf42be();
      }
      _0x3a1ac0._autoplay = _0x4d0d7c.autoplay || false;
      _0x3a1ac0._format =
        "string" !== typeof _0x4d0d7c.format
          ? _0x4d0d7c.format
          : [_0x4d0d7c.format];
      _0x3a1ac0._html5 = _0x4d0d7c.html5 || false;
      _0x3a1ac0._muted = _0x4d0d7c.mute || false;
      _0x3a1ac0._loop = _0x4d0d7c.loop || false;
      _0x3a1ac0._pool = _0x4d0d7c.pool || 0x5;
      _0x3a1ac0._preload =
        "boolean" === typeof _0x4d0d7c.preload ||
        "metadata" === _0x4d0d7c.preload
          ? _0x4d0d7c.preload
          : true;
      _0x3a1ac0._rate = _0x4d0d7c.rate || 0x1;
      _0x3a1ac0._sprite = _0x4d0d7c.sprite || {};
      _0x3a1ac0._src =
        "string" !== typeof _0x4d0d7c.src ? _0x4d0d7c.src : [_0x4d0d7c.src];
      _0x3a1ac0._volume =
        undefined !== _0x4d0d7c.volume ? _0x4d0d7c.volume : 0x1;
      _0x3a1ac0._xhr = {
        method:
          _0x4d0d7c.xhr && _0x4d0d7c.xhr.method ? _0x4d0d7c.xhr.method : "GET",
        headers:
          _0x4d0d7c.xhr && _0x4d0d7c.xhr.headers ? _0x4d0d7c.xhr.headers : null,
        withCredentials:
          _0x4d0d7c.xhr && _0x4d0d7c.xhr.withCredentials
            ? _0x4d0d7c.xhr.withCredentials
            : false,
      };
      _0x3a1ac0._duration = 0x0;
      _0x3a1ac0._state = "unloaded";
      _0x3a1ac0._sounds = [];
      _0x3a1ac0._endTimers = {};
      _0x3a1ac0._queue = [];
      _0x3a1ac0._playLock = false;
      _0x3a1ac0._onend = _0x4d0d7c.onend
        ? [
            {
              fn: _0x4d0d7c.onend,
            },
          ]
        : [];
      _0x3a1ac0._onfade = _0x4d0d7c.onfade
        ? [
            {
              fn: _0x4d0d7c.onfade,
            },
          ]
        : [];
      _0x3a1ac0._onload = _0x4d0d7c.onload
        ? [
            {
              fn: _0x4d0d7c.onload,
            },
          ]
        : [];
      _0x3a1ac0._onloaderror = _0x4d0d7c.onloaderror
        ? [
            {
              fn: _0x4d0d7c.onloaderror,
            },
          ]
        : [];
      _0x3a1ac0._onplayerror = _0x4d0d7c.onplayerror
        ? [
            {
              fn: _0x4d0d7c.onplayerror,
            },
          ]
        : [];
      _0x3a1ac0._onpause = _0x4d0d7c.onpause
        ? [
            {
              fn: _0x4d0d7c.onpause,
            },
          ]
        : [];
      _0x3a1ac0._onplay = _0x4d0d7c.onplay
        ? [
            {
              fn: _0x4d0d7c.onplay,
            },
          ]
        : [];
      _0x3a1ac0._onstop = _0x4d0d7c.onstop
        ? [
            {
              fn: _0x4d0d7c.onstop,
            },
          ]
        : [];
      _0x3a1ac0._onmute = _0x4d0d7c.onmute
        ? [
            {
              fn: _0x4d0d7c.onmute,
            },
          ]
        : [];
      _0x3a1ac0._onvolume = _0x4d0d7c.onvolume
        ? [
            {
              fn: _0x4d0d7c.onvolume,
            },
          ]
        : [];
      _0x3a1ac0._onrate = _0x4d0d7c.onrate
        ? [
            {
              fn: _0x4d0d7c.onrate,
            },
          ]
        : [];
      _0x3a1ac0._onseek = _0x4d0d7c.onseek
        ? [
            {
              fn: _0x4d0d7c.onseek,
            },
          ]
        : [];
      _0x3a1ac0._onunlock = _0x4d0d7c.onunlock
        ? [
            {
              fn: _0x4d0d7c.onunlock,
            },
          ]
        : [];
      _0x3a1ac0._onresume = [];
      _0x3a1ac0._webAudio = _0x46242f.usingWebAudio && !_0x3a1ac0._html5;
      if (
        "undefined" !== typeof _0x46242f.ctx &&
        _0x46242f.ctx &&
        _0x46242f.autoUnlock
      ) {
        _0x46242f._unlockAudio();
      }
      _0x46242f._howls.push(_0x3a1ac0);
      if (_0x3a1ac0._autoplay) {
        _0x3a1ac0._queue.push({
          event: "play",
          action: function () {
            _0x3a1ac0.play();
          },
        });
      }
      if (_0x3a1ac0._preload && "none" !== _0x3a1ac0._preload) {
        _0x3a1ac0.load();
      }
      return _0x3a1ac0;
    },
    load: function () {
      var _0x5871ee = null;
      if (_0x46242f.noAudio) {
        this._emit("loaderror", null, "No audio support.");
      } else {
        if ("string" === typeof this._src) {
          this._src = [this._src];
        }
        for (var _0x27bca2 = 0x0; _0x27bca2 < this._src.length; _0x27bca2++) {
          var _0x42a441;
          var _0x2afef4;
          if (this._format && this._format[_0x27bca2]) {
            _0x42a441 = this._format[_0x27bca2];
          } else {
            _0x2afef4 = this._src[_0x27bca2];
            if ("string" !== typeof _0x2afef4) {
              this._emit(
                "loaderror",
                null,
                "Non-string found in selected audio sources - ignoring."
              );
              continue;
            }
            if (!(_0x42a441 = /^data:audio\/([^;,]+);/i.exec(_0x2afef4))) {
              _0x42a441 = /\.([^.]+)$/.exec(_0x2afef4.split("?", 0x1)[0x0]);
            }
            if (_0x42a441) {
              _0x42a441 = _0x42a441[0x1].toLowerCase();
            }
          }
          if (!_0x42a441) {
            console.warn(
              'No file extension was found. Consider using the "format" property or specify an extension.'
            );
          }
          if (_0x42a441 && _0x46242f.codecs(_0x42a441)) {
            _0x5871ee = this._src[_0x27bca2];
            break;
          }
        }
        if (_0x5871ee) {
          this._src = _0x5871ee;
          this._state = "loading";
          if (
            "https:" === window.location.protocol &&
            "http:" === _0x5871ee.slice(0x0, 0x5)
          ) {
            this._html5 = true;
            this._webAudio = false;
          }
          new _0x4ad29a(this);
          if (this._webAudio) {
            var _0x1e710e = this;
            var _0x20d4a3 = _0x1e710e._src;
            if (_0x1bad54[_0x20d4a3]) {
              _0x1e710e._duration = _0x1bad54[_0x20d4a3].duration;
              _0x10c14f(_0x1e710e);
            } else {
              if (/^data:[^;]+;base64,/.test(_0x20d4a3)) {
                _0x5871ee = atob(_0x20d4a3.split(",")[0x1]);
                _0x27bca2 = new Uint8Array(_0x5871ee.length);
                for (
                  _0x42a441 = 0x0;
                  _0x42a441 < _0x5871ee.length;
                  ++_0x42a441
                ) {
                  _0x27bca2[_0x42a441] = _0x5871ee.charCodeAt(_0x42a441);
                }
                _0x4d2539(_0x27bca2.buffer, _0x1e710e);
              } else {
                var _0x490e15 = new XMLHttpRequest();
                _0x490e15.open(_0x1e710e._xhr.method, _0x20d4a3, true);
                _0x490e15.withCredentials = _0x1e710e._xhr.withCredentials;
                _0x490e15.responseType = "arraybuffer";
                if (_0x1e710e._xhr.headers) {
                  Object.keys(_0x1e710e._xhr.headers).forEach(function (
                    _0x3f0492
                  ) {
                    _0x490e15.setRequestHeader(
                      _0x3f0492,
                      _0x1e710e._xhr.headers[_0x3f0492]
                    );
                  });
                }
                _0x490e15.onload = function () {
                  var _0x28d298 = (_0x490e15.status + "")[0x0];
                  if (
                    "0" !== _0x28d298 &&
                    "2" !== _0x28d298 &&
                    "3" !== _0x28d298
                  ) {
                    _0x1e710e._emit(
                      "loaderror",
                      null,
                      "Failed loading audio file with status: " +
                        _0x490e15.status +
                        "."
                    );
                  } else {
                    _0x4d2539(_0x490e15.response, _0x1e710e);
                  }
                };
                _0x490e15.onerror = function () {
                  if (_0x1e710e._webAudio) {
                    _0x1e710e._html5 = true;
                    _0x1e710e._webAudio = false;
                    _0x1e710e._sounds = [];
                    delete _0x1bad54[_0x20d4a3];
                    _0x1e710e.load();
                  }
                };
                try {
                  _0x490e15.send();
                } catch (_0x2fccc1) {
                  _0x490e15.onerror();
                }
              }
            }
          }
          return this;
        }
        this._emit(
          "loaderror",
          null,
          "No codec support for selected audio sources."
        );
      }
    },
    play: function (_0x2f503a, _0x1b3b7c) {
      var _0x5c2382 = this;
      var _0x36b075 = null;
      if ("number" === typeof _0x2f503a) {
        _0x36b075 = _0x2f503a;
        _0x2f503a = null;
      } else {
        if (
          "string" === typeof _0x2f503a &&
          "loaded" === _0x5c2382._state &&
          !_0x5c2382._sprite[_0x2f503a]
        ) {
          return null;
        }
        if (
          "undefined" === typeof _0x2f503a &&
          ((_0x2f503a = "__default"), !_0x5c2382._playLock)
        ) {
          var _0x585f9a = 0x0;
          for (
            var _0x34bdd3 = 0x0;
            _0x34bdd3 < _0x5c2382._sounds.length;
            _0x34bdd3++
          ) {
            if (
              _0x5c2382._sounds[_0x34bdd3]._paused &&
              !_0x5c2382._sounds[_0x34bdd3]._ended
            ) {
              _0x585f9a++;
              _0x36b075 = _0x5c2382._sounds[_0x34bdd3]._id;
            }
          }
          if (0x1 === _0x585f9a) {
            _0x2f503a = null;
          } else {
            _0x36b075 = null;
          }
        }
      }
      var _0x52c3e5 = _0x36b075
        ? _0x5c2382._soundById(_0x36b075)
        : _0x5c2382._inactiveSound();
      if (!_0x52c3e5) {
        return null;
      }
      if (_0x36b075 && !_0x2f503a) {
        _0x2f503a = _0x52c3e5._sprite || "__default";
      }
      if ("loaded" !== _0x5c2382._state) {
        _0x52c3e5._sprite = _0x2f503a;
        _0x52c3e5._ended = false;
        var _0x431cb3 = _0x52c3e5._id;
        _0x5c2382._queue.push({
          event: "play",
          action: function () {
            _0x5c2382.play(_0x431cb3);
          },
        });
        return _0x431cb3;
      }
      if (_0x36b075 && !_0x52c3e5._paused) {
        if (!_0x1b3b7c) {
          _0x5c2382._loadQueue("play");
        }
        return _0x52c3e5._id;
      }
      if (_0x5c2382._webAudio) {
        _0x46242f._autoResume();
      }
      var _0xd71c82 = Math.max(
        0x0,
        0x0 < _0x52c3e5._seek
          ? _0x52c3e5._seek
          : _0x5c2382._sprite[_0x2f503a][0x0] / 0x3e8
      );
      var _0x389c7c = Math.max(
        0x0,
        (_0x5c2382._sprite[_0x2f503a][0x0] +
          _0x5c2382._sprite[_0x2f503a][0x1]) /
          0x3e8 -
          _0xd71c82
      );
      var _0x511229 = (0x3e8 * _0x389c7c) / Math.abs(_0x52c3e5._rate);
      var _0x4679f6 = _0x5c2382._sprite[_0x2f503a][0x0] / 0x3e8;
      var _0x520f5f =
        (_0x5c2382._sprite[_0x2f503a][0x0] +
          _0x5c2382._sprite[_0x2f503a][0x1]) /
        0x3e8;
      _0x52c3e5._sprite = _0x2f503a;
      _0x52c3e5._ended = false;
      var _0x331af1 = function () {
        _0x52c3e5._paused = false;
        _0x52c3e5._seek = _0xd71c82;
        _0x52c3e5._start = _0x4679f6;
        _0x52c3e5._stop = _0x520f5f;
        _0x52c3e5._loop = !(
          !_0x52c3e5._loop && !_0x5c2382._sprite[_0x2f503a][0x2]
        );
      };
      if (_0xd71c82 >= _0x520f5f) {
        _0x5c2382._ended(_0x52c3e5);
      } else {
        var _0x1bff56 = _0x52c3e5._node;
        if (_0x5c2382._webAudio) {
          _0x36b075 = function () {
            _0x5c2382._playLock = false;
            _0x331af1();
            _0x5c2382._refreshBuffer(_0x52c3e5);
            _0x1bff56.gain.setValueAtTime(
              _0x52c3e5._muted || _0x5c2382._muted ? 0x0 : _0x52c3e5._volume,
              _0x46242f.ctx.currentTime
            );
            _0x52c3e5._playStart = _0x46242f.ctx.currentTime;
            if ("undefined" === typeof _0x1bff56.bufferSource.start) {
              if (_0x52c3e5._loop) {
                _0x1bff56.bufferSource.noteGrainOn(0x0, _0xd71c82, 0x15180);
              } else {
                _0x1bff56.bufferSource.noteGrainOn(0x0, _0xd71c82, _0x389c7c);
              }
            } else if (_0x52c3e5._loop) {
              _0x1bff56.bufferSource.start(0x0, _0xd71c82, 0x15180);
            } else {
              _0x1bff56.bufferSource.start(0x0, _0xd71c82, _0x389c7c);
            }
            if (Infinity !== _0x511229) {
              _0x5c2382._endTimers[_0x52c3e5._id] = setTimeout(
                _0x5c2382._ended.bind(_0x5c2382, _0x52c3e5),
                _0x511229
              );
            }
            if (!_0x1b3b7c) {
              setTimeout(function () {
                _0x5c2382._emit("play", _0x52c3e5._id);
                _0x5c2382._loadQueue();
              }, 0x0);
            }
          };
          if (
            "running" === _0x46242f.state &&
            "interrupted" !== _0x46242f.ctx.state
          ) {
            _0x36b075();
          } else {
            _0x5c2382._playLock = true;
            _0x5c2382.once("resume", _0x36b075);
            _0x5c2382._clearTimer(_0x52c3e5._id);
          }
        } else {
          var _0x3b8729 = function () {
            _0x1bff56.currentTime = _0xd71c82;
            _0x1bff56.muted =
              _0x52c3e5._muted ||
              _0x5c2382._muted ||
              _0x46242f._muted ||
              _0x1bff56.muted;
            _0x1bff56.volume = _0x52c3e5._volume * _0x46242f.volume();
            _0x1bff56.playbackRate = _0x52c3e5._rate;
            try {
              var _0x54d86c = _0x1bff56.play();
              if (
                _0x54d86c &&
                "undefined" !== typeof Promise &&
                (_0x54d86c instanceof Promise ||
                  "function" === typeof _0x54d86c.then)
              ) {
                _0x5c2382._playLock = true;
                _0x331af1();
                _0x54d86c
                  .then(function () {
                    _0x5c2382._playLock = false;
                    _0x1bff56._unlocked = true;
                    if (_0x1b3b7c) {
                      _0x5c2382._loadQueue();
                    } else {
                      _0x5c2382._emit("play", _0x52c3e5._id);
                    }
                  })
                  ["catch"](function () {
                    _0x5c2382._playLock = false;
                    _0x5c2382._emit(
                      "playerror",
                      _0x52c3e5._id,
                      "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."
                    );
                    _0x52c3e5._ended = true;
                    _0x52c3e5._paused = true;
                  });
              } else if (!_0x1b3b7c) {
                _0x5c2382._playLock = false;
                _0x331af1();
                _0x5c2382._emit("play", _0x52c3e5._id);
              }
              _0x1bff56.playbackRate = _0x52c3e5._rate;
              if (_0x1bff56.paused) {
                _0x5c2382._emit(
                  "playerror",
                  _0x52c3e5._id,
                  "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."
                );
              } else if ("__default" !== _0x2f503a || _0x52c3e5._loop) {
                _0x5c2382._endTimers[_0x52c3e5._id] = setTimeout(
                  _0x5c2382._ended.bind(_0x5c2382, _0x52c3e5),
                  _0x511229
                );
              } else {
                _0x5c2382._endTimers[_0x52c3e5._id] = function () {
                  _0x5c2382._ended(_0x52c3e5);
                  _0x1bff56.removeEventListener(
                    "ended",
                    _0x5c2382._endTimers[_0x52c3e5._id],
                    false
                  );
                };
                _0x1bff56.addEventListener(
                  "ended",
                  _0x5c2382._endTimers[_0x52c3e5._id],
                  false
                );
              }
            } catch (_0x4fbca8) {
              _0x5c2382._emit("playerror", _0x52c3e5._id, _0x4fbca8);
            }
          };
          if (
            "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" ===
            _0x1bff56.src
          ) {
            _0x1bff56.src = _0x5c2382._src;
            _0x1bff56.load();
          }
          _0x36b075 =
            (window && window.ejecta) ||
            (!_0x1bff56.readyState && _0x46242f._navigator.isCocoonJS);
          if (0x3 <= _0x1bff56.readyState || _0x36b075) {
            _0x3b8729();
          } else {
            _0x5c2382._playLock = true;
            _0x5c2382._state = "loading";
            var _0x5e59ea = function () {
              _0x5c2382._state = "loaded";
              _0x3b8729();
              _0x1bff56.removeEventListener(
                _0x46242f._canPlayEvent,
                _0x5e59ea,
                false
              );
            };
            _0x1bff56.addEventListener(
              _0x46242f._canPlayEvent,
              _0x5e59ea,
              false
            );
            _0x5c2382._clearTimer(_0x52c3e5._id);
          }
        }
        return _0x52c3e5._id;
      }
    },
    pause: function (_0x91c72c, _0x472393) {
      var _0x194882 = this;
      if ("loaded" !== _0x194882._state || _0x194882._playLock) {
        _0x194882._queue.push({
          event: "pause",
          action: function () {
            _0x194882.pause(_0x91c72c);
          },
        });
        return _0x194882;
      }
      var _0x14a013 = _0x194882._getSoundIds(_0x91c72c);
      for (var _0x3619af = 0x0; _0x3619af < _0x14a013.length; _0x3619af++) {
        _0x194882._clearTimer(_0x14a013[_0x3619af]);
        var _0x2af3ac = _0x194882._soundById(_0x14a013[_0x3619af]);
        if (
          _0x2af3ac &&
          !_0x2af3ac._paused &&
          ((_0x2af3ac._seek = _0x194882.seek(_0x14a013[_0x3619af])),
          (_0x2af3ac._rateSeek = 0x0),
          (_0x2af3ac._paused = true),
          _0x194882._stopFade(_0x14a013[_0x3619af]),
          _0x2af3ac._node)
        ) {
          if (_0x194882._webAudio) {
            if (!_0x2af3ac._node.bufferSource) {
              continue;
            }
            if ("undefined" === typeof _0x2af3ac._node.bufferSource.stop) {
              _0x2af3ac._node.bufferSource.noteOff(0x0);
            } else {
              _0x2af3ac._node.bufferSource.stop(0x0);
            }
            _0x194882._cleanBuffer(_0x2af3ac._node);
          } else if (
            !isNaN(_0x2af3ac._node.duration) ||
            Infinity === _0x2af3ac._node.duration
          ) {
            _0x2af3ac._node.pause();
          }
        }
        if (!_0x472393) {
          _0x194882._emit("pause", _0x2af3ac ? _0x2af3ac._id : null);
        }
      }
      return _0x194882;
    },
    stop: function (_0x271e03, _0x899325) {
      var _0x2ac0d1 = this;
      if ("loaded" !== _0x2ac0d1._state || _0x2ac0d1._playLock) {
        _0x2ac0d1._queue.push({
          event: "stop",
          action: function () {
            _0x2ac0d1.stop(_0x271e03);
          },
        });
        return _0x2ac0d1;
      }
      var _0x5165de = _0x2ac0d1._getSoundIds(_0x271e03);
      for (var _0x4ca200 = 0x0; _0x4ca200 < _0x5165de.length; _0x4ca200++) {
        _0x2ac0d1._clearTimer(_0x5165de[_0x4ca200]);
        var _0x20610d = _0x2ac0d1._soundById(_0x5165de[_0x4ca200]);
        if (_0x20610d) {
          _0x20610d._seek = _0x20610d._start || 0x0;
          _0x20610d._rateSeek = 0x0;
          _0x20610d._paused = true;
          _0x20610d._ended = true;
          _0x2ac0d1._stopFade(_0x5165de[_0x4ca200]);
          if (_0x20610d._node) {
            if (_0x2ac0d1._webAudio) {
              if (_0x20610d._node.bufferSource) {
                if ("undefined" === typeof _0x20610d._node.bufferSource.stop) {
                  _0x20610d._node.bufferSource.noteOff(0x0);
                } else {
                  _0x20610d._node.bufferSource.stop(0x0);
                }
                _0x2ac0d1._cleanBuffer(_0x20610d._node);
              }
            } else {
              if (
                !isNaN(_0x20610d._node.duration) ||
                Infinity === _0x20610d._node.duration
              ) {
                _0x20610d._node.currentTime = _0x20610d._start || 0x0;
                _0x20610d._node.pause();
                if (Infinity === _0x20610d._node.duration) {
                  _0x2ac0d1._clearSound(_0x20610d._node);
                }
              }
            }
          }
          if (!_0x899325) {
            _0x2ac0d1._emit("stop", _0x20610d._id);
          }
        }
      }
      return _0x2ac0d1;
    },
    mute: function (_0x4bc71b, _0x1f13d7) {
      var _0xac0179 = this;
      if ("loaded" !== _0xac0179._state || _0xac0179._playLock) {
        _0xac0179._queue.push({
          event: "mute",
          action: function () {
            _0xac0179.mute(_0x4bc71b, _0x1f13d7);
          },
        });
        return _0xac0179;
      }
      if ("undefined" === typeof _0x1f13d7) {
        if ("boolean" === typeof _0x4bc71b) {
          _0xac0179._muted = _0x4bc71b;
        } else {
          return _0xac0179._muted;
        }
      }
      var _0x530a48 = _0xac0179._getSoundIds(_0x1f13d7);
      for (var _0x20d4f9 = 0x0; _0x20d4f9 < _0x530a48.length; _0x20d4f9++) {
        var _0x390834 = _0xac0179._soundById(_0x530a48[_0x20d4f9]);
        if (_0x390834) {
          _0x390834._muted = _0x4bc71b;
          if (_0x390834._interval) {
            _0xac0179._stopFade(_0x390834._id);
          }
          if (_0xac0179._webAudio && _0x390834._node) {
            _0x390834._node.gain.setValueAtTime(
              _0x4bc71b ? 0x0 : _0x390834._volume,
              _0x46242f.ctx.currentTime
            );
          } else if (_0x390834._node) {
            _0x390834._node.muted = _0x46242f._muted ? true : _0x4bc71b;
          }
          _0xac0179._emit("mute", _0x390834._id);
        }
      }
      return _0xac0179;
    },
    volume: function () {
      var _0x3579f8 = this;
      var _0x56c56f;
      var _0x4bdbf3;
      if (0x0 === arguments.length) {
        return _0x3579f8._volume;
      }
      if (
        0x1 === arguments.length ||
        (0x2 === arguments.length && "undefined" === typeof arguments[0x1])
      ) {
        if (0x0 <= _0x3579f8._getSoundIds().indexOf(arguments[0x0])) {
          _0x4bdbf3 = parseInt(arguments[0x0], 0xa);
        } else {
          _0x56c56f = parseFloat(arguments[0x0]);
        }
      } else if (0x2 <= arguments.length) {
        _0x56c56f = parseFloat(arguments[0x0]);
        _0x4bdbf3 = parseInt(arguments[0x1], 0xa);
      }
      var _0x535f2c;
      if (
        "undefined" !== typeof _0x56c56f &&
        0x0 <= _0x56c56f &&
        0x1 >= _0x56c56f
      ) {
        if ("loaded" !== _0x3579f8._state || _0x3579f8._playLock) {
          _0x3579f8._queue.push({
            event: "volume",
            action: function () {
              _0x3579f8.volume.apply(_0x3579f8, arguments);
            },
          });
          return _0x3579f8;
        }
        if ("undefined" === typeof _0x4bdbf3) {
          _0x3579f8._volume = _0x56c56f;
        }
        _0x4bdbf3 = _0x3579f8._getSoundIds(_0x4bdbf3);
        for (var _0x11ba17 = 0x0; _0x11ba17 < _0x4bdbf3.length; _0x11ba17++) {
          if ((_0x535f2c = _0x3579f8._soundById(_0x4bdbf3[_0x11ba17]))) {
            _0x535f2c._volume = _0x56c56f;
            if (!arguments[0x2]) {
              _0x3579f8._stopFade(_0x4bdbf3[_0x11ba17]);
            }
            if (_0x3579f8._webAudio && _0x535f2c._node && !_0x535f2c._muted) {
              _0x535f2c._node.gain.setValueAtTime(
                _0x56c56f,
                _0x46242f.ctx.currentTime
              );
            } else if (_0x535f2c._node && !_0x535f2c._muted) {
              _0x535f2c._node.volume = _0x56c56f * _0x46242f.volume();
            }
            _0x3579f8._emit("volume", _0x535f2c._id);
          }
        }
      } else {
        return (_0x535f2c = _0x4bdbf3
          ? _0x3579f8._soundById(_0x4bdbf3)
          : _0x3579f8._sounds[0x0])
          ? _0x535f2c._volume
          : 0x0;
      }
      return _0x3579f8;
    },
    fade: function (_0x1a261c, _0x5737e7, _0x9ca99, _0x3a4c34) {
      var _0x26a692 = this;
      if ("loaded" !== _0x26a692._state || _0x26a692._playLock) {
        _0x26a692._queue.push({
          event: "fade",
          action: function () {
            _0x26a692.fade(_0x1a261c, _0x5737e7, _0x9ca99, _0x3a4c34);
          },
        });
        return _0x26a692;
      }
      _0x1a261c = Math.min(Math.max(0x0, parseFloat(_0x1a261c)), 0x1);
      _0x5737e7 = Math.min(Math.max(0x0, parseFloat(_0x5737e7)), 0x1);
      _0x9ca99 = parseFloat(_0x9ca99);
      _0x26a692.volume(_0x1a261c, _0x3a4c34);
      var _0x45e4c9 = _0x26a692._getSoundIds(_0x3a4c34);
      for (var _0x1fdc32 = 0x0; _0x1fdc32 < _0x45e4c9.length; _0x1fdc32++) {
        var _0x477a66 = _0x26a692._soundById(_0x45e4c9[_0x1fdc32]);
        if (_0x477a66) {
          if (!_0x3a4c34) {
            _0x26a692._stopFade(_0x45e4c9[_0x1fdc32]);
          }
          if (_0x26a692._webAudio && !_0x477a66._muted) {
            var _0x4bcfba = _0x46242f.ctx.currentTime;
            var _0xe045aa = _0x4bcfba + _0x9ca99 / 0x3e8;
            _0x477a66._volume = _0x1a261c;
            _0x477a66._node.gain.setValueAtTime(_0x1a261c, _0x4bcfba);
            _0x477a66._node.gain.linearRampToValueAtTime(_0x5737e7, _0xe045aa);
          }
          _0x26a692._startFadeInterval(
            _0x477a66,
            _0x1a261c,
            _0x5737e7,
            _0x9ca99,
            _0x45e4c9[_0x1fdc32],
            "undefined" === typeof _0x3a4c34
          );
        }
      }
      return _0x26a692;
    },
    _startFadeInterval: function (
      _0x9619b8,
      _0x3d353c,
      _0x4ed05b,
      _0x9a6b14,
      _0xadfadc,
      _0x4c8838
    ) {
      var _0x182c98 = this;
      var _0x53dca6 = _0x3d353c;
      var _0x4f7a17 = _0x4ed05b - _0x3d353c;
      _0xadfadc = Math.abs(_0x4f7a17 / 0.01);
      _0xadfadc = Math.max(
        0x4,
        0x0 < _0xadfadc ? _0x9a6b14 / _0xadfadc : _0x9a6b14
      );
      var _0x1dad2d = Date.now();
      _0x9619b8._fadeTo = _0x4ed05b;
      _0x9619b8._interval = setInterval(function () {
        var _0x53e6c3 = (Date.now() - _0x1dad2d) / _0x9a6b14;
        _0x1dad2d = Date.now();
        _0x53dca6 += _0x4f7a17 * _0x53e6c3;
        _0x53dca6 = Math.round(100 * _0x53dca6) / 100;
        _0x53dca6 =
          0x0 > _0x4f7a17
            ? Math.max(_0x4ed05b, _0x53dca6)
            : Math.min(_0x4ed05b, _0x53dca6);
        if (_0x182c98._webAudio) {
          _0x9619b8._volume = _0x53dca6;
        } else {
          _0x182c98.volume(_0x53dca6, _0x9619b8._id, true);
        }
        if (_0x4c8838) {
          _0x182c98._volume = _0x53dca6;
        }
        if (
          (_0x4ed05b < _0x3d353c && _0x53dca6 <= _0x4ed05b) ||
          (_0x4ed05b > _0x3d353c && _0x53dca6 >= _0x4ed05b)
        ) {
          clearInterval(_0x9619b8._interval);
          _0x9619b8._interval = null;
          _0x9619b8._fadeTo = null;
          _0x182c98.volume(_0x4ed05b, _0x9619b8._id);
          _0x182c98._emit("fade", _0x9619b8._id);
        }
      }, _0xadfadc);
    },
    _stopFade: function (_0x38dadb) {
      var _0x4fc53c = this._soundById(_0x38dadb);
      if (_0x4fc53c && _0x4fc53c._interval) {
        if (this._webAudio) {
          _0x4fc53c._node.gain.cancelScheduledValues(_0x46242f.ctx.currentTime);
        }
        clearInterval(_0x4fc53c._interval);
        _0x4fc53c._interval = null;
        this.volume(_0x4fc53c._fadeTo, _0x38dadb);
        _0x4fc53c._fadeTo = null;
        this._emit("fade", _0x38dadb);
      }
      return this;
    },
    loop: function () {
      var _0x309fec = arguments;
      var _0x2d64be;
      var _0x424812;
      if (0x0 === _0x309fec.length) {
        return this._loop;
      }
      if (0x1 === _0x309fec.length) {
        if ("boolean" === typeof _0x309fec[0x0]) {
          this._loop = _0x2d64be = _0x309fec[0x0];
        } else {
          return (_0x309fec = this._soundById(parseInt(_0x309fec[0x0], 0xa)))
            ? _0x309fec._loop
            : false;
        }
      } else if (0x2 === _0x309fec.length) {
        _0x2d64be = _0x309fec[0x0];
        _0x424812 = parseInt(_0x309fec[0x1], 0xa);
      }
      _0x424812 = this._getSoundIds(_0x424812);
      for (var _0x3a91b6 = 0x0; _0x3a91b6 < _0x424812.length; _0x3a91b6++) {
        if ((_0x309fec = this._soundById(_0x424812[_0x3a91b6]))) {
          _0x309fec._loop = _0x2d64be;
          if (
            this._webAudio &&
            _0x309fec._node &&
            _0x309fec._node.bufferSource &&
            (_0x309fec._node.bufferSource.loop = _0x2d64be)
          ) {
            _0x309fec._node.bufferSource.loopStart = _0x309fec._start || 0x0;
            _0x309fec._node.bufferSource.loopEnd = _0x309fec._stop;
            if (this.playing(_0x424812[_0x3a91b6])) {
              this.pause(_0x424812[_0x3a91b6], true);
              this.play(_0x424812[_0x3a91b6], true);
            }
          }
        }
      }
      return this;
    },
    rate: function () {
      var _0x45d2a4 = this;
      var _0x53ebd0;
      var _0x30ef6c;
      if (0x0 === arguments.length) {
        _0x30ef6c = _0x45d2a4._sounds[0x0]._id;
      } else if (0x1 === arguments.length) {
        if (0x0 <= _0x45d2a4._getSoundIds().indexOf(arguments[0x0])) {
          _0x30ef6c = parseInt(arguments[0x0], 0xa);
        } else {
          _0x53ebd0 = parseFloat(arguments[0x0]);
        }
      } else if (0x2 === arguments.length) {
        _0x53ebd0 = parseFloat(arguments[0x0]);
        _0x30ef6c = parseInt(arguments[0x1], 0xa);
      }
      var _0x3bffac;
      if ("number" === typeof _0x53ebd0) {
        if ("loaded" !== _0x45d2a4._state || _0x45d2a4._playLock) {
          _0x45d2a4._queue.push({
            event: "rate",
            action: function () {
              _0x45d2a4.rate.apply(_0x45d2a4, arguments);
            },
          });
          return _0x45d2a4;
        }
        if ("undefined" === typeof _0x30ef6c) {
          _0x45d2a4._rate = _0x53ebd0;
        }
        _0x30ef6c = _0x45d2a4._getSoundIds(_0x30ef6c);
        for (var _0x1e8ddc = 0x0; _0x1e8ddc < _0x30ef6c.length; _0x1e8ddc++) {
          if ((_0x3bffac = _0x45d2a4._soundById(_0x30ef6c[_0x1e8ddc]))) {
            if (_0x45d2a4.playing(_0x30ef6c[_0x1e8ddc])) {
              _0x3bffac._rateSeek = _0x45d2a4.seek(_0x30ef6c[_0x1e8ddc]);
              _0x3bffac._playStart = _0x45d2a4._webAudio
                ? _0x46242f.ctx.currentTime
                : _0x3bffac._playStart;
            }
            _0x3bffac._rate = _0x53ebd0;
            if (
              _0x45d2a4._webAudio &&
              _0x3bffac._node &&
              _0x3bffac._node.bufferSource
            ) {
              _0x3bffac._node.bufferSource.playbackRate.setValueAtTime(
                _0x53ebd0,
                _0x46242f.ctx.currentTime
              );
            } else if (_0x3bffac._node) {
              _0x3bffac._node.playbackRate = _0x53ebd0;
            }
            var _0x1f746f = _0x45d2a4.seek(_0x30ef6c[_0x1e8ddc]);
            var _0x1f746f =
              (0x3e8 *
                ((_0x45d2a4._sprite[_0x3bffac._sprite][0x0] +
                  _0x45d2a4._sprite[_0x3bffac._sprite][0x1]) /
                  0x3e8 -
                  _0x1f746f)) /
              Math.abs(_0x3bffac._rate);
            if (
              _0x45d2a4._endTimers[_0x30ef6c[_0x1e8ddc]] ||
              !_0x3bffac._paused
            ) {
              _0x45d2a4._clearTimer(_0x30ef6c[_0x1e8ddc]);
              _0x45d2a4._endTimers[_0x30ef6c[_0x1e8ddc]] = setTimeout(
                _0x45d2a4._ended.bind(_0x45d2a4, _0x3bffac),
                _0x1f746f
              );
            }
            _0x45d2a4._emit("rate", _0x3bffac._id);
          }
        }
      } else {
        return (_0x3bffac = _0x45d2a4._soundById(_0x30ef6c))
          ? _0x3bffac._rate
          : _0x45d2a4._rate;
      }
      return _0x45d2a4;
    },
    seek: function () {
      var _0x3489be = this;
      var _0x3161ca;
      var _0x4a3177;
      if (0x0 === arguments.length) {
        if (_0x3489be._sounds.length) {
          _0x4a3177 = _0x3489be._sounds[0x0]._id;
        }
      } else if (0x1 === arguments.length) {
        if (0x0 <= _0x3489be._getSoundIds().indexOf(arguments[0x0])) {
          _0x4a3177 = parseInt(arguments[0x0], 0xa);
        } else if (_0x3489be._sounds.length) {
          _0x4a3177 = _0x3489be._sounds[0x0]._id;
          _0x3161ca = parseFloat(arguments[0x0]);
        }
      } else if (0x2 === arguments.length) {
        _0x3161ca = parseFloat(arguments[0x0]);
        _0x4a3177 = parseInt(arguments[0x1], 0xa);
      }
      if ("undefined" === typeof _0x4a3177) {
        return 0x0;
      }
      if (
        "number" === typeof _0x3161ca &&
        ("loaded" !== _0x3489be._state || _0x3489be._playLock)
      ) {
        _0x3489be._queue.push({
          event: "seek",
          action: function () {
            _0x3489be.seek.apply(_0x3489be, arguments);
          },
        });
        return _0x3489be;
      }
      var _0x175771 = _0x3489be._soundById(_0x4a3177);
      if (_0x175771) {
        if ("number" === typeof _0x3161ca && 0x0 <= _0x3161ca) {
          var _0x304962 = _0x3489be.playing(_0x4a3177);
          if (_0x304962) {
            _0x3489be.pause(_0x4a3177, true);
          }
          _0x175771._seek = _0x3161ca;
          _0x175771._ended = false;
          _0x3489be._clearTimer(_0x4a3177);
          if (
            !_0x3489be._webAudio &&
            _0x175771._node &&
            !isNaN(_0x175771._node.duration)
          ) {
            _0x175771._node.currentTime = _0x3161ca;
          }
          var _0xdb8bba = function () {
            if (_0x304962) {
              _0x3489be.play(_0x4a3177, true);
            }
            _0x3489be._emit("seek", _0x4a3177);
          };
          if (_0x304962 && !_0x3489be._webAudio) {
            var _0x330d0d = function () {
              if (_0x3489be._playLock) {
                setTimeout(_0x330d0d, 0x0);
              } else {
                _0xdb8bba();
              }
            };
            setTimeout(_0x330d0d, 0x0);
          } else {
            _0xdb8bba();
          }
        } else {
          return _0x3489be._webAudio
            ? ((_0x3161ca = _0x3489be.playing(_0x4a3177)
                ? _0x46242f.ctx.currentTime - _0x175771._playStart
                : 0x0),
              _0x175771._seek +
                ((_0x175771._rateSeek
                  ? _0x175771._rateSeek - _0x175771._seek
                  : 0x0) +
                  _0x3161ca * Math.abs(_0x175771._rate)))
            : _0x175771._node.currentTime;
        }
      }
      return _0x3489be;
    },
    playing: function (_0x5200bf) {
      if ("number" === typeof _0x5200bf) {
        return (_0x5200bf = this._soundById(_0x5200bf))
          ? !_0x5200bf._paused
          : false;
      }
      for (_0x5200bf = 0x0; _0x5200bf < this._sounds.length; _0x5200bf++) {
        if (!this._sounds[_0x5200bf]._paused) {
          return true;
        }
      }
      return false;
    },
    duration: function (_0x24dcc0) {
      var _0x2f91db = this._duration;
      if ((_0x24dcc0 = this._soundById(_0x24dcc0))) {
        _0x2f91db = this._sprite[_0x24dcc0._sprite][0x1] / 0x3e8;
      }
      return _0x2f91db;
    },
    state: function () {
      return this._state;
    },
    unload: function () {
      var _0x3b9f81 = this._sounds;
      for (var _0x140e6c = 0x0; _0x140e6c < _0x3b9f81.length; _0x140e6c++) {
        if (!_0x3b9f81[_0x140e6c]._paused) {
          this.stop(_0x3b9f81[_0x140e6c]._id);
        }
        if (!this._webAudio) {
          this._clearSound(_0x3b9f81[_0x140e6c]._node);
          _0x3b9f81[_0x140e6c]._node.removeEventListener(
            "error",
            _0x3b9f81[_0x140e6c]._errorFn,
            false
          );
          _0x3b9f81[_0x140e6c]._node.removeEventListener(
            _0x46242f._canPlayEvent,
            _0x3b9f81[_0x140e6c]._loadFn,
            false
          );
          _0x3b9f81[_0x140e6c]._node.removeEventListener(
            "ended",
            _0x3b9f81[_0x140e6c]._endFn,
            false
          );
          _0x46242f._releaseHtml5Audio(_0x3b9f81[_0x140e6c]._node);
        }
        delete _0x3b9f81[_0x140e6c]._node;
        this._clearTimer(_0x3b9f81[_0x140e6c]._id);
      }
      _0x140e6c = _0x46242f._howls.indexOf(this);
      if (0x0 <= _0x140e6c) {
        _0x46242f._howls.splice(_0x140e6c, 0x1);
      }
      _0x3b9f81 = true;
      for (_0x140e6c = 0x0; _0x140e6c < _0x46242f._howls.length; _0x140e6c++) {
        if (
          _0x46242f._howls[_0x140e6c]._src === this._src ||
          0x0 <= this._src.indexOf(_0x46242f._howls[_0x140e6c]._src)
        ) {
          _0x3b9f81 = false;
          break;
        }
      }
      if (_0x1bad54 && _0x3b9f81) {
        delete _0x1bad54[this._src];
      }
      _0x46242f.noAudio = false;
      this._state = "unloaded";
      this._sounds = [];
      return null;
    },
    on: function (_0x40d854, _0x8f6c4b, _0x13c722, _0x3329e7) {
      _0x40d854 = this["_on" + _0x40d854];
      if ("function" === typeof _0x8f6c4b) {
        _0x40d854.push(
          _0x3329e7
            ? {
                id: _0x13c722,
                fn: _0x8f6c4b,
                once: _0x3329e7,
              }
            : {
                id: _0x13c722,
                fn: _0x8f6c4b,
              }
        );
      }
      return this;
    },
    off: function (_0x276689, _0x225783, _0x3c77f6) {
      var _0x1e4268 = this["_on" + _0x276689];
      var _0x24ef2f = 0x0;
      if ("number" === typeof _0x225783) {
        _0x3c77f6 = _0x225783;
        _0x225783 = null;
      }
      if (_0x225783 || _0x3c77f6) {
        for (_0x24ef2f = 0x0; _0x24ef2f < _0x1e4268.length; _0x24ef2f++) {
          _0x276689 = _0x3c77f6 === _0x1e4268[_0x24ef2f].id;
          if (
            (_0x225783 === _0x1e4268[_0x24ef2f].fn && _0x276689) ||
            (!_0x225783 && _0x276689)
          ) {
            _0x1e4268.splice(_0x24ef2f, 0x1);
            break;
          }
        }
      } else {
        if (_0x276689) {
          this["_on" + _0x276689] = [];
        } else {
          _0x225783 = Object.keys(this);
          for (_0x24ef2f = 0x0; _0x24ef2f < _0x225783.length; _0x24ef2f++) {
            if (
              0x0 === _0x225783[_0x24ef2f].indexOf("_on") &&
              Array.isArray(this[_0x225783[_0x24ef2f]])
            ) {
              this[_0x225783[_0x24ef2f]] = [];
            }
          }
        }
      }
      return this;
    },
    once: function (_0x1e7064, _0x240a52, _0x3c1f9b) {
      this.on(_0x1e7064, _0x240a52, _0x3c1f9b, 0x1);
      return this;
    },
    _emit: function (_0x4620e5, _0x61ffff, _0x2df215) {
      var _0x3207b9 = this["_on" + _0x4620e5];
      for (
        var _0x1354fe = _0x3207b9.length - 0x1;
        0x0 <= _0x1354fe;
        _0x1354fe--
      ) {
        if (
          !_0x3207b9[_0x1354fe].id ||
          _0x3207b9[_0x1354fe].id === _0x61ffff ||
          "load" === _0x4620e5
        ) {
          setTimeout(
            function (_0x20e0ee) {
              _0x20e0ee.call(this, _0x61ffff, _0x2df215);
            }.bind(this, _0x3207b9[_0x1354fe].fn),
            0x0
          );
          if (_0x3207b9[_0x1354fe].once) {
            this.off(
              _0x4620e5,
              _0x3207b9[_0x1354fe].fn,
              _0x3207b9[_0x1354fe].id
            );
          }
        }
      }
      this._loadQueue(_0x4620e5);
      return this;
    },
    _loadQueue: function (_0x41a455) {
      if (0x0 < this._queue.length) {
        var _0x41c3ea = this._queue[0x0];
        if (_0x41c3ea.event === _0x41a455) {
          this._queue.shift();
          this._loadQueue();
        }
        if (!_0x41a455) {
          _0x41c3ea.action();
        }
      }
      return this;
    },
    _ended: function (_0x399590) {
      var _0x4ad1b6 = _0x399590._sprite;
      if (
        !this._webAudio &&
        _0x399590._node &&
        !_0x399590._node.paused &&
        !_0x399590._node.ended &&
        _0x399590._node.currentTime < _0x399590._stop
      ) {
        setTimeout(this._ended.bind(this, _0x399590), 0x64);
        return this;
      }
      _0x4ad1b6 = !(!_0x399590._loop && !this._sprite[_0x4ad1b6][0x2]);
      this._emit("end", _0x399590._id);
      if (!this._webAudio && _0x4ad1b6) {
        this.stop(_0x399590._id, true).play(_0x399590._id);
      }
      if (this._webAudio && _0x4ad1b6) {
        this._emit("play", _0x399590._id);
        _0x399590._seek = _0x399590._start || 0x0;
        _0x399590._rateSeek = 0x0;
        _0x399590._playStart = _0x46242f.ctx.currentTime;
        var _0x97b4e3 =
          (0x3e8 * (_0x399590._stop - _0x399590._start)) /
          Math.abs(_0x399590._rate);
        this._endTimers[_0x399590._id] = setTimeout(
          this._ended.bind(this, _0x399590),
          _0x97b4e3
        );
      }
      if (this._webAudio && !_0x4ad1b6) {
        _0x399590._paused = true;
        _0x399590._ended = true;
        _0x399590._seek = _0x399590._start || 0x0;
        _0x399590._rateSeek = 0x0;
        this._clearTimer(_0x399590._id);
        this._cleanBuffer(_0x399590._node);
        _0x46242f._autoSuspend();
      }
      if (!this._webAudio && !_0x4ad1b6) {
        this.stop(_0x399590._id, true);
      }
      return this;
    },
    _clearTimer: function (_0x236801) {
      if (this._endTimers[_0x236801]) {
        if ("function" !== typeof this._endTimers[_0x236801]) {
          clearTimeout(this._endTimers[_0x236801]);
        } else {
          var _0x20ff59 = this._soundById(_0x236801);
          if (_0x20ff59 && _0x20ff59._node) {
            _0x20ff59._node.removeEventListener(
              "ended",
              this._endTimers[_0x236801],
              false
            );
          }
        }
        delete this._endTimers[_0x236801];
      }
      return this;
    },
    _soundById: function (_0x124d23) {
      for (var _0x4edb40 = 0x0; _0x4edb40 < this._sounds.length; _0x4edb40++) {
        if (_0x124d23 === this._sounds[_0x4edb40]._id) {
          return this._sounds[_0x4edb40];
        }
      }
      return null;
    },
    _inactiveSound: function () {
      this._drain();
      for (var _0x28a5de = 0x0; _0x28a5de < this._sounds.length; _0x28a5de++) {
        if (this._sounds[_0x28a5de]._ended) {
          return this._sounds[_0x28a5de].reset();
        }
      }
      return new _0x4ad29a(this);
    },
    _drain: function () {
      var _0x84a1b0 = this._pool;
      var _0x1bf36c = 0x0;
      var _0x16c921 = 0x0;
      if (!(this._sounds.length < _0x84a1b0)) {
        for (_0x16c921 = 0x0; _0x16c921 < this._sounds.length; _0x16c921++) {
          if (this._sounds[_0x16c921]._ended) {
            _0x1bf36c++;
          }
        }
        for (
          _0x16c921 = this._sounds.length - 0x1;
          0x0 <= _0x16c921 && !(_0x1bf36c <= _0x84a1b0);
          _0x16c921--
        ) {
          if (this._sounds[_0x16c921]._ended) {
            if (this._webAudio && this._sounds[_0x16c921]._node) {
              this._sounds[_0x16c921]._node.disconnect(0x0);
            }
            this._sounds.splice(_0x16c921, 0x1);
            _0x1bf36c--;
          }
        }
      }
    },
    _getSoundIds: function (_0x1ce920) {
      if ("undefined" === typeof _0x1ce920) {
        _0x1ce920 = [];
        for (
          var _0x3a12a2 = 0x0;
          _0x3a12a2 < this._sounds.length;
          _0x3a12a2++
        ) {
          _0x1ce920.push(this._sounds[_0x3a12a2]._id);
        }
        return _0x1ce920;
      }
      return [_0x1ce920];
    },
    _refreshBuffer: function (_0x4f4cb5) {
      _0x4f4cb5._node.bufferSource = _0x46242f.ctx.createBufferSource();
      _0x4f4cb5._node.bufferSource.buffer = _0x1bad54[this._src];
      if (_0x4f4cb5._panner) {
        _0x4f4cb5._node.bufferSource.connect(_0x4f4cb5._panner);
      } else {
        _0x4f4cb5._node.bufferSource.connect(_0x4f4cb5._node);
      }
      if ((_0x4f4cb5._node.bufferSource.loop = _0x4f4cb5._loop)) {
        _0x4f4cb5._node.bufferSource.loopStart = _0x4f4cb5._start || 0x0;
        _0x4f4cb5._node.bufferSource.loopEnd = _0x4f4cb5._stop || 0x0;
      }
      _0x4f4cb5._node.bufferSource.playbackRate.setValueAtTime(
        _0x4f4cb5._rate,
        _0x46242f.ctx.currentTime
      );
      return this;
    },
    _cleanBuffer: function (_0x5e7bb0) {
      var _0x425040 =
        _0x46242f._navigator &&
        0x0 <= _0x46242f._navigator.vendor.indexOf("Apple");
      if (!_0x5e7bb0.bufferSource) {
        return this;
      }
      if (
        _0x46242f._scratchBuffer &&
        _0x5e7bb0.bufferSource &&
        ((_0x5e7bb0.bufferSource.onended = null),
        _0x5e7bb0.bufferSource.disconnect(0x0),
        _0x425040)
      ) {
        try {
          _0x5e7bb0.bufferSource.buffer = _0x46242f._scratchBuffer;
        } catch (_0x3c96d9) {}
      }
      _0x5e7bb0.bufferSource = null;
      return this;
    },
    _clearSound: function (_0x2b9599) {
      if (
        !/MSIE |Trident\//.test(
          _0x46242f._navigator && _0x46242f._navigator.userAgent
        )
      ) {
        _0x2b9599.src =
          "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA";
      }
    },
  };
  var _0x4ad29a = function (_0x2f0c3f) {
    this._parent = _0x2f0c3f;
    this.init();
  };
  _0x4ad29a.prototype = {
    init: function () {
      var _0x481da2 = this._parent;
      this._muted = _0x481da2._muted;
      this._loop = _0x481da2._loop;
      this._volume = _0x481da2._volume;
      this._rate = _0x481da2._rate;
      this._seek = 0x0;
      this._ended = this._paused = true;
      this._sprite = "__default";
      this._id = ++_0x46242f._counter;
      _0x481da2._sounds.push(this);
      this.create();
      return this;
    },
    create: function () {
      var _0x8bc912 = this._parent;
      var _0x3ba200 =
        _0x46242f._muted || this._muted || this._parent._muted
          ? 0x0
          : this._volume;
      if (_0x8bc912._webAudio) {
        this._node =
          "undefined" === typeof _0x46242f.ctx.createGain
            ? _0x46242f.ctx.createGainNode()
            : _0x46242f.ctx.createGain();
        this._node.gain.setValueAtTime(_0x3ba200, _0x46242f.ctx.currentTime);
        this._node.paused = true;
        this._node.connect(_0x46242f.masterGain);
      } else if (!_0x46242f.noAudio) {
        this._node = _0x46242f._obtainHtml5Audio();
        this._errorFn = this._errorListener.bind(this);
        this._node.addEventListener("error", this._errorFn, false);
        this._loadFn = this._loadListener.bind(this);
        this._node.addEventListener(
          _0x46242f._canPlayEvent,
          this._loadFn,
          false
        );
        this._endFn = this._endListener.bind(this);
        this._node.addEventListener("ended", this._endFn, false);
        this._node.src = _0x8bc912._src;
        this._node.preload =
          true === _0x8bc912._preload ? "auto" : _0x8bc912._preload;
        this._node.volume = _0x3ba200 * _0x46242f.volume();
        this._node.load();
      }
      return this;
    },
    reset: function () {
      var _0x30c70b = this._parent;
      this._muted = _0x30c70b._muted;
      this._loop = _0x30c70b._loop;
      this._volume = _0x30c70b._volume;
      this._rate = _0x30c70b._rate;
      this._rateSeek = this._seek = 0x0;
      this._ended = this._paused = true;
      this._sprite = "__default";
      this._id = ++_0x46242f._counter;
      return this;
    },
    _errorListener: function () {
      this._parent._emit(
        "loaderror",
        this._id,
        this._node.error ? this._node.error.code : 0x0
      );
      this._node.removeEventListener("error", this._errorFn, false);
    },
    _loadListener: function () {
      var _0x229236 = this._parent;
      _0x229236._duration = Math.ceil(0xa * this._node.duration) / 0xa;
      if (0x0 === Object.keys(_0x229236._sprite).length) {
        _0x229236._sprite = {
          __default: [0x0, 0x3e8 * _0x229236._duration],
        };
      }
      if ("loaded" !== _0x229236._state) {
        _0x229236._state = "loaded";
        _0x229236._emit("load");
        _0x229236._loadQueue();
      }
      this._node.removeEventListener(
        _0x46242f._canPlayEvent,
        this._loadFn,
        false
      );
    },
    _endListener: function () {
      var _0x2c160d = this._parent;
      if (Infinity === _0x2c160d._duration) {
        _0x2c160d._duration = Math.ceil(0xa * this._node.duration) / 0xa;
        if (Infinity === _0x2c160d._sprite.__default[0x1]) {
          _0x2c160d._sprite.__default[0x1] = 0x3e8 * _0x2c160d._duration;
        }
        _0x2c160d._ended(this);
      }
      this._node.removeEventListener("ended", this._endFn, false);
    },
  };
  var _0x1bad54 = {};
  var _0x4d2539 = function (_0xa0e228, _0x35abd7) {
    var _0x215515 = function () {
      _0x35abd7._emit("loaderror", null, "Decoding audio data failed.");
    };
    var _0x51115c = function (_0x5f144a) {
      if (_0x5f144a && 0x0 < _0x35abd7._sounds.length) {
        _0x1bad54[_0x35abd7._src] = _0x5f144a;
        _0x10c14f(_0x35abd7, _0x5f144a);
      } else {
        _0x215515();
      }
    };
    if (
      "undefined" !== typeof Promise &&
      0x1 === _0x46242f.ctx.decodeAudioData.length
    ) {
      _0x46242f.ctx
        .decodeAudioData(_0xa0e228)
        .then(_0x51115c)
        ["catch"](_0x215515);
    } else {
      _0x46242f.ctx.decodeAudioData(_0xa0e228, _0x51115c, _0x215515);
    }
  };
  var _0x10c14f = function (_0x5cddf2, _0x3ee60c) {
    if (_0x3ee60c && !_0x5cddf2._duration) {
      _0x5cddf2._duration = _0x3ee60c.duration;
    }
    if (0x0 === Object.keys(_0x5cddf2._sprite).length) {
      _0x5cddf2._sprite = {
        __default: [0x0, 0x3e8 * _0x5cddf2._duration],
      };
    }
    if ("loaded" !== _0x5cddf2._state) {
      _0x5cddf2._state = "loaded";
      _0x5cddf2._emit("load");
      _0x5cddf2._loadQueue();
    }
  };
  var _0xaf42be = function () {
    if (_0x46242f.usingWebAudio) {
      try {
        if ("undefined" !== typeof AudioContext) {
          _0x46242f.ctx = new AudioContext();
        } else if ("undefined" !== typeof webkitAudioContext) {
          _0x46242f.ctx = new webkitAudioContext();
        } else {
          _0x46242f.usingWebAudio = false;
        }
      } catch (_0x2c245e) {
        _0x46242f.usingWebAudio = false;
      }
      if (!_0x46242f.ctx) {
        _0x46242f.usingWebAudio = false;
      }
      var _0x49ffc9 = /iP(hone|od|ad)/.test(
        _0x46242f._navigator && _0x46242f._navigator.platform
      );
      var _0x56104d =
        _0x46242f._navigator &&
        _0x46242f._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
      var _0x56104d = _0x56104d ? parseInt(_0x56104d[0x1], 0xa) : null;
      if (_0x49ffc9 && _0x56104d && 0x9 > _0x56104d) {
        _0x49ffc9 = /safari/.test(
          _0x46242f._navigator && _0x46242f._navigator.userAgent.toLowerCase()
        );
        if (_0x46242f._navigator && !_0x49ffc9) {
          _0x46242f.usingWebAudio = false;
        }
      }
      if (_0x46242f.usingWebAudio) {
        _0x46242f.masterGain =
          "undefined" === typeof _0x46242f.ctx.createGain
            ? _0x46242f.ctx.createGainNode()
            : _0x46242f.ctx.createGain();
        _0x46242f.masterGain.gain.setValueAtTime(
          _0x46242f._muted ? 0x0 : _0x46242f._volume,
          _0x46242f.ctx.currentTime
        );
        _0x46242f.masterGain.connect(_0x46242f.ctx.destination);
      }
      _0x46242f._setup();
    }
  };
  if ("function" === typeof define && define.amd) {
    define([], function () {
      return {
        Howler: _0x46242f,
        Howl: _0x2918a3,
      };
    });
  }
  if ("undefined" !== typeof exports) {
    exports.Howler = _0x46242f;
    exports.Howl = _0x2918a3;
  }
  if ("undefined" !== typeof global) {
    global.HowlerGlobal = _0x3f876e;
    global.Howler = _0x46242f;
    global.Howl = _0x2918a3;
    global.Sound = _0x4ad29a;
  } else if ("undefined" !== typeof window) {
    window.HowlerGlobal = _0x3f876e;
    window.Howler = _0x46242f;
    window.Howl = _0x2918a3;
    window.Sound = _0x4ad29a;
  }
})();
(function () {
  HowlerGlobal.prototype._pos = [0x0, 0x0, 0x0];
  HowlerGlobal.prototype._orientation = [0x0, 0x0, -0x1, 0x0, 0x1, 0x0];
  HowlerGlobal.prototype.stereo = function (_0x557aae) {
    if (!this.ctx || !this.ctx.listener) {
      return this;
    }
    for (
      var _0x3bfe7e = this._howls.length - 0x1;
      0x0 <= _0x3bfe7e;
      _0x3bfe7e--
    ) {
      this._howls[_0x3bfe7e].stereo(_0x557aae);
    }
    return this;
  };
  HowlerGlobal.prototype.pos = function (_0x44704f, _0x484025, _0x4a6ba6) {
    if (!this.ctx || !this.ctx.listener) {
      return this;
    }
    _0x484025 = "number" !== typeof _0x484025 ? this._pos[0x1] : _0x484025;
    _0x4a6ba6 = "number" !== typeof _0x4a6ba6 ? this._pos[0x2] : _0x4a6ba6;
    if ("number" === typeof _0x44704f) {
      this._pos = [_0x44704f, _0x484025, _0x4a6ba6];
      if ("undefined" !== typeof this.ctx.listener.positionX) {
        this.ctx.listener.positionX.setTargetAtTime(
          this._pos[0x0],
          Howler.ctx.currentTime,
          0.1
        );
        this.ctx.listener.positionY.setTargetAtTime(
          this._pos[0x1],
          Howler.ctx.currentTime,
          0.1
        );
        this.ctx.listener.positionZ.setTargetAtTime(
          this._pos[0x2],
          Howler.ctx.currentTime,
          0.1
        );
      } else {
        this.ctx.listener.setPosition(
          this._pos[0x0],
          this._pos[0x1],
          this._pos[0x2]
        );
      }
    } else {
      return this._pos;
    }
    return this;
  };
  HowlerGlobal.prototype.orientation = function (
    _0x56ac06,
    _0x24aafd,
    _0x22b78d,
    _0x48421c,
    _0x3e102d,
    _0x1c0345
  ) {
    if (!this.ctx || !this.ctx.listener) {
      return this;
    }
    var _0x318734 = this._orientation;
    _0x24aafd = "number" !== typeof _0x24aafd ? _0x318734[0x1] : _0x24aafd;
    _0x22b78d = "number" !== typeof _0x22b78d ? _0x318734[0x2] : _0x22b78d;
    _0x48421c = "number" !== typeof _0x48421c ? _0x318734[0x3] : _0x48421c;
    _0x3e102d = "number" !== typeof _0x3e102d ? _0x318734[0x4] : _0x3e102d;
    _0x1c0345 = "number" !== typeof _0x1c0345 ? _0x318734[0x5] : _0x1c0345;
    if ("number" === typeof _0x56ac06) {
      this._orientation = [
        _0x56ac06,
        _0x24aafd,
        _0x22b78d,
        _0x48421c,
        _0x3e102d,
        _0x1c0345,
      ];
      if ("undefined" !== typeof this.ctx.listener.forwardX) {
        this.ctx.listener.forwardX.setTargetAtTime(
          _0x56ac06,
          Howler.ctx.currentTime,
          0.1
        );
        this.ctx.listener.forwardY.setTargetAtTime(
          _0x24aafd,
          Howler.ctx.currentTime,
          0.1
        );
        this.ctx.listener.forwardZ.setTargetAtTime(
          _0x22b78d,
          Howler.ctx.currentTime,
          0.1
        );
        this.ctx.listener.upX.setTargetAtTime(
          _0x48421c,
          Howler.ctx.currentTime,
          0.1
        );
        this.ctx.listener.upY.setTargetAtTime(
          _0x3e102d,
          Howler.ctx.currentTime,
          0.1
        );
        this.ctx.listener.upZ.setTargetAtTime(
          _0x1c0345,
          Howler.ctx.currentTime,
          0.1
        );
      } else {
        this.ctx.listener.setOrientation(
          _0x56ac06,
          _0x24aafd,
          _0x22b78d,
          _0x48421c,
          _0x3e102d,
          _0x1c0345
        );
      }
    } else {
      return _0x318734;
    }
    return this;
  };
  var _0x2970d9 = Howl.prototype.init;
  Howl.prototype.init = function (_0x47809b) {
    this._orientation = _0x47809b.orientation || [0x1, 0x0, 0x0];
    this._stereo = _0x47809b.stereo || null;
    this._pos = _0x47809b.pos || null;
    this._pannerAttr = {
      coneInnerAngle:
        "undefined" !== typeof _0x47809b.coneInnerAngle
          ? _0x47809b.coneInnerAngle
          : 0x168,
      coneOuterAngle:
        "undefined" !== typeof _0x47809b.coneOuterAngle
          ? _0x47809b.coneOuterAngle
          : 0x168,
      coneOuterGain:
        "undefined" !== typeof _0x47809b.coneOuterGain
          ? _0x47809b.coneOuterGain
          : 0x0,
      distanceModel:
        "undefined" !== typeof _0x47809b.distanceModel
          ? _0x47809b.distanceModel
          : "inverse",
      maxDistance:
        "undefined" !== typeof _0x47809b.maxDistance
          ? _0x47809b.maxDistance
          : 0x2710,
      panningModel:
        "undefined" !== typeof _0x47809b.panningModel
          ? _0x47809b.panningModel
          : "HRTF",
      refDistance:
        "undefined" !== typeof _0x47809b.refDistance
          ? _0x47809b.refDistance
          : 0x1,
      rolloffFactor:
        "undefined" !== typeof _0x47809b.rolloffFactor
          ? _0x47809b.rolloffFactor
          : 0x1,
    };
    this._onstereo = _0x47809b.onstereo
      ? [
          {
            fn: _0x47809b.onstereo,
          },
        ]
      : [];
    this._onpos = _0x47809b.onpos
      ? [
          {
            fn: _0x47809b.onpos,
          },
        ]
      : [];
    this._onorientation = _0x47809b.onorientation
      ? [
          {
            fn: _0x47809b.onorientation,
          },
        ]
      : [];
    return _0x2970d9.call(this, _0x47809b);
  };
  Howl.prototype.stereo = function (_0x1d7d24, _0x469fc3) {
    var _0x1c5799 = this;
    if (!_0x1c5799._webAudio) {
      return _0x1c5799;
    }
    if ("loaded" !== _0x1c5799._state) {
      _0x1c5799._queue.push({
        event: "stereo",
        action: function () {
          _0x1c5799.stereo(_0x1d7d24, _0x469fc3);
        },
      });
      return _0x1c5799;
    }
    var _0x3de00c =
      "undefined" === typeof Howler.ctx.createStereoPanner
        ? "spatial"
        : "stereo";
    if ("undefined" === typeof _0x469fc3) {
      if ("number" === typeof _0x1d7d24) {
        _0x1c5799._stereo = _0x1d7d24;
        _0x1c5799._pos = [_0x1d7d24, 0x0, 0x0];
      } else {
        return _0x1c5799._stereo;
      }
    }
    var _0x3c9983 = _0x1c5799._getSoundIds(_0x469fc3);
    for (var _0x4fcd04 = 0x0; _0x4fcd04 < _0x3c9983.length; _0x4fcd04++) {
      var _0x5ea7df = _0x1c5799._soundById(_0x3c9983[_0x4fcd04]);
      if (_0x5ea7df) {
        if ("number" === typeof _0x1d7d24) {
          _0x5ea7df._stereo = _0x1d7d24;
          _0x5ea7df._pos = [_0x1d7d24, 0x0, 0x0];
          if (_0x5ea7df._node) {
            _0x5ea7df._pannerAttr.panningModel = "equalpower";
            if (!_0x5ea7df._panner || !_0x5ea7df._panner.pan) {
              _0x1bf31d(_0x5ea7df, _0x3de00c);
            }
            if ("spatial" === _0x3de00c) {
              if ("undefined" !== typeof _0x5ea7df._panner.positionX) {
                _0x5ea7df._panner.positionX.setValueAtTime(
                  _0x1d7d24,
                  Howler.ctx.currentTime
                );
                _0x5ea7df._panner.positionY.setValueAtTime(
                  0x0,
                  Howler.ctx.currentTime
                );
                _0x5ea7df._panner.positionZ.setValueAtTime(
                  0x0,
                  Howler.ctx.currentTime
                );
              } else {
                _0x5ea7df._panner.setPosition(_0x1d7d24, 0x0, 0x0);
              }
            } else {
              _0x5ea7df._panner.pan.setValueAtTime(
                _0x1d7d24,
                Howler.ctx.currentTime
              );
            }
          }
          _0x1c5799._emit("stereo", _0x5ea7df._id);
        } else {
          return _0x5ea7df._stereo;
        }
      }
    }
    return _0x1c5799;
  };
  Howl.prototype.pos = function (_0x562175, _0x5b9f85, _0x3999be, _0x177607) {
    var _0x7f0212 = this;
    if (!_0x7f0212._webAudio) {
      return _0x7f0212;
    }
    if ("loaded" !== _0x7f0212._state) {
      _0x7f0212._queue.push({
        event: "pos",
        action: function () {
          _0x7f0212.pos(_0x562175, _0x5b9f85, _0x3999be, _0x177607);
        },
      });
      return _0x7f0212;
    }
    _0x5b9f85 = "number" !== typeof _0x5b9f85 ? 0x0 : _0x5b9f85;
    _0x3999be = "number" !== typeof _0x3999be ? -0.5 : _0x3999be;
    if ("undefined" === typeof _0x177607) {
      if ("number" === typeof _0x562175) {
        _0x7f0212._pos = [_0x562175, _0x5b9f85, _0x3999be];
      } else {
        return _0x7f0212._pos;
      }
    }
    var _0x1cd152 = _0x7f0212._getSoundIds(_0x177607);
    for (var _0x351290 = 0x0; _0x351290 < _0x1cd152.length; _0x351290++) {
      var _0x5c7968 = _0x7f0212._soundById(_0x1cd152[_0x351290]);
      if (_0x5c7968) {
        if ("number" === typeof _0x562175) {
          _0x5c7968._pos = [_0x562175, _0x5b9f85, _0x3999be];
          if (_0x5c7968._node) {
            if (!_0x5c7968._panner || _0x5c7968._panner.pan) {
              _0x1bf31d(_0x5c7968, "spatial");
            }
            if ("undefined" !== typeof _0x5c7968._panner.positionX) {
              _0x5c7968._panner.positionX.setValueAtTime(
                _0x562175,
                Howler.ctx.currentTime
              );
              _0x5c7968._panner.positionY.setValueAtTime(
                _0x5b9f85,
                Howler.ctx.currentTime
              );
              _0x5c7968._panner.positionZ.setValueAtTime(
                _0x3999be,
                Howler.ctx.currentTime
              );
            } else {
              _0x5c7968._panner.setPosition(_0x562175, _0x5b9f85, _0x3999be);
            }
          }
          _0x7f0212._emit("pos", _0x5c7968._id);
        } else {
          return _0x5c7968._pos;
        }
      }
    }
    return _0x7f0212;
  };
  Howl.prototype.orientation = function (
    _0x3390c2,
    _0x15902b,
    _0x485fad,
    _0x4efb08
  ) {
    var _0x98bc86 = this;
    if (!_0x98bc86._webAudio) {
      return _0x98bc86;
    }
    if ("loaded" !== _0x98bc86._state) {
      _0x98bc86._queue.push({
        event: "orientation",
        action: function () {
          _0x98bc86.orientation(_0x3390c2, _0x15902b, _0x485fad, _0x4efb08);
        },
      });
      return _0x98bc86;
    }
    _0x15902b =
      "number" !== typeof _0x15902b ? _0x98bc86._orientation[0x1] : _0x15902b;
    _0x485fad =
      "number" !== typeof _0x485fad ? _0x98bc86._orientation[0x2] : _0x485fad;
    if ("undefined" === typeof _0x4efb08) {
      if ("number" === typeof _0x3390c2) {
        _0x98bc86._orientation = [_0x3390c2, _0x15902b, _0x485fad];
      } else {
        return _0x98bc86._orientation;
      }
    }
    var _0x56111d = _0x98bc86._getSoundIds(_0x4efb08);
    for (var _0x28c6f8 = 0x0; _0x28c6f8 < _0x56111d.length; _0x28c6f8++) {
      var _0x465822 = _0x98bc86._soundById(_0x56111d[_0x28c6f8]);
      if (_0x465822) {
        if ("number" === typeof _0x3390c2) {
          _0x465822._orientation = [_0x3390c2, _0x15902b, _0x485fad];
          if (_0x465822._node) {
            if (!_0x465822._panner) {
              if (!_0x465822._pos) {
                _0x465822._pos = _0x98bc86._pos || [0x0, 0x0, -0.5];
              }
              _0x1bf31d(_0x465822, "spatial");
            }
            if ("undefined" !== typeof _0x465822._panner.orientationX) {
              _0x465822._panner.orientationX.setValueAtTime(
                _0x3390c2,
                Howler.ctx.currentTime
              );
              _0x465822._panner.orientationY.setValueAtTime(
                _0x15902b,
                Howler.ctx.currentTime
              );
              _0x465822._panner.orientationZ.setValueAtTime(
                _0x485fad,
                Howler.ctx.currentTime
              );
            } else {
              _0x465822._panner.setOrientation(_0x3390c2, _0x15902b, _0x485fad);
            }
          }
          _0x98bc86._emit("orientation", _0x465822._id);
        } else {
          return _0x465822._orientation;
        }
      }
    }
    return _0x98bc86;
  };
  Howl.prototype.pannerAttr = function () {
    var _0x4d5c47 = arguments;
    var _0x1de995;
    var _0x328288;
    if (!this._webAudio) {
      return this;
    }
    if (0x0 === _0x4d5c47.length) {
      return this._pannerAttr;
    }
    if (0x1 === _0x4d5c47.length) {
      if ("object" === typeof _0x4d5c47[0x0]) {
        _0x1de995 = _0x4d5c47[0x0];
        if ("undefined" === typeof _0x328288) {
          if (!_0x1de995.pannerAttr) {
            _0x1de995.pannerAttr = {
              coneInnerAngle: _0x1de995.coneInnerAngle,
              coneOuterAngle: _0x1de995.coneOuterAngle,
              coneOuterGain: _0x1de995.coneOuterGain,
              distanceModel: _0x1de995.distanceModel,
              maxDistance: _0x1de995.maxDistance,
              refDistance: _0x1de995.refDistance,
              rolloffFactor: _0x1de995.rolloffFactor,
              panningModel: _0x1de995.panningModel,
            };
          }
          this._pannerAttr = {
            coneInnerAngle:
              "undefined" !== typeof _0x1de995.pannerAttr.coneInnerAngle
                ? _0x1de995.pannerAttr.coneInnerAngle
                : this._coneInnerAngle,
            coneOuterAngle:
              "undefined" !== typeof _0x1de995.pannerAttr.coneOuterAngle
                ? _0x1de995.pannerAttr.coneOuterAngle
                : this._coneOuterAngle,
            coneOuterGain:
              "undefined" !== typeof _0x1de995.pannerAttr.coneOuterGain
                ? _0x1de995.pannerAttr.coneOuterGain
                : this._coneOuterGain,
            distanceModel:
              "undefined" !== typeof _0x1de995.pannerAttr.distanceModel
                ? _0x1de995.pannerAttr.distanceModel
                : this._distanceModel,
            maxDistance:
              "undefined" !== typeof _0x1de995.pannerAttr.maxDistance
                ? _0x1de995.pannerAttr.maxDistance
                : this._maxDistance,
            refDistance:
              "undefined" !== typeof _0x1de995.pannerAttr.refDistance
                ? _0x1de995.pannerAttr.refDistance
                : this._refDistance,
            rolloffFactor:
              "undefined" !== typeof _0x1de995.pannerAttr.rolloffFactor
                ? _0x1de995.pannerAttr.rolloffFactor
                : this._rolloffFactor,
            panningModel:
              "undefined" !== typeof _0x1de995.pannerAttr.panningModel
                ? _0x1de995.pannerAttr.panningModel
                : this._panningModel,
          };
        }
      } else {
        return (_0x4d5c47 = this._soundById(parseInt(_0x4d5c47[0x0], 0xa)))
          ? _0x4d5c47._pannerAttr
          : this._pannerAttr;
      }
    } else if (0x2 === _0x4d5c47.length) {
      _0x1de995 = _0x4d5c47[0x0];
      _0x328288 = parseInt(_0x4d5c47[0x1], 0xa);
    }
    _0x328288 = this._getSoundIds(_0x328288);
    for (var _0x1f6fca = 0x0; _0x1f6fca < _0x328288.length; _0x1f6fca++) {
      if ((_0x4d5c47 = this._soundById(_0x328288[_0x1f6fca]))) {
        var _0x15b24e = _0x4d5c47._pannerAttr;
        var _0x15b24e = {
          coneInnerAngle:
            "undefined" !== typeof _0x1de995.coneInnerAngle
              ? _0x1de995.coneInnerAngle
              : _0x15b24e.coneInnerAngle,
          coneOuterAngle:
            "undefined" !== typeof _0x1de995.coneOuterAngle
              ? _0x1de995.coneOuterAngle
              : _0x15b24e.coneOuterAngle,
          coneOuterGain:
            "undefined" !== typeof _0x1de995.coneOuterGain
              ? _0x1de995.coneOuterGain
              : _0x15b24e.coneOuterGain,
          distanceModel:
            "undefined" !== typeof _0x1de995.distanceModel
              ? _0x1de995.distanceModel
              : _0x15b24e.distanceModel,
          maxDistance:
            "undefined" !== typeof _0x1de995.maxDistance
              ? _0x1de995.maxDistance
              : _0x15b24e.maxDistance,
          refDistance:
            "undefined" !== typeof _0x1de995.refDistance
              ? _0x1de995.refDistance
              : _0x15b24e.refDistance,
          rolloffFactor:
            "undefined" !== typeof _0x1de995.rolloffFactor
              ? _0x1de995.rolloffFactor
              : _0x15b24e.rolloffFactor,
          panningModel:
            "undefined" !== typeof _0x1de995.panningModel
              ? _0x1de995.panningModel
              : _0x15b24e.panningModel,
        };
        var _0x5beb76 = _0x4d5c47._panner;
        if (!_0x5beb76) {
          if (!_0x4d5c47._pos) {
            _0x4d5c47._pos = this._pos || [0x0, 0x0, -0.5];
          }
          _0x1bf31d(_0x4d5c47, "spatial");
          _0x5beb76 = _0x4d5c47._panner;
        }
        _0x5beb76.coneInnerAngle = _0x15b24e.coneInnerAngle;
        _0x5beb76.coneOuterAngle = _0x15b24e.coneOuterAngle;
        _0x5beb76.coneOuterGain = _0x15b24e.coneOuterGain;
        _0x5beb76.distanceModel = _0x15b24e.distanceModel;
        _0x5beb76.maxDistance = _0x15b24e.maxDistance;
        _0x5beb76.refDistance = _0x15b24e.refDistance;
        _0x5beb76.rolloffFactor = _0x15b24e.rolloffFactor;
        _0x5beb76.panningModel = _0x15b24e.panningModel;
      }
    }
    return this;
  };
  var _0x61ebfc = Sound.prototype.init;
  Sound.prototype.init = function () {
    var _0x84498d = this._parent;
    this._orientation = _0x84498d._orientation;
    this._stereo = _0x84498d._stereo;
    this._pos = _0x84498d._pos;
    this._pannerAttr = _0x84498d._pannerAttr;
    _0x61ebfc.call(this);
    if (this._stereo) {
      _0x84498d.stereo(this._stereo);
    } else if (this._pos) {
      _0x84498d.pos(this._pos[0x0], this._pos[0x1], this._pos[0x2], this._id);
    }
  };
  var _0x215bd3 = Sound.prototype.reset;
  Sound.prototype.reset = function () {
    var _0x27e66b = this._parent;
    this._orientation = _0x27e66b._orientation;
    this._stereo = _0x27e66b._stereo;
    this._pos = _0x27e66b._pos;
    this._pannerAttr = _0x27e66b._pannerAttr;
    if (this._stereo) {
      _0x27e66b.stereo(this._stereo);
    } else if (this._pos) {
      _0x27e66b.pos(this._pos[0x0], this._pos[0x1], this._pos[0x2], this._id);
    } else if (this._panner) {
      this._panner.disconnect(0x0);
      this._panner = undefined;
      _0x27e66b._refreshBuffer(this);
    }
    return _0x215bd3.call(this);
  };
  var _0x1bf31d = function (_0x17ef05, _0x572488) {
    if ("spatial" === (_0x572488 || "spatial")) {
      _0x17ef05._panner = Howler.ctx.createPanner();
      _0x17ef05._panner.coneInnerAngle = _0x17ef05._pannerAttr.coneInnerAngle;
      _0x17ef05._panner.coneOuterAngle = _0x17ef05._pannerAttr.coneOuterAngle;
      _0x17ef05._panner.coneOuterGain = _0x17ef05._pannerAttr.coneOuterGain;
      _0x17ef05._panner.distanceModel = _0x17ef05._pannerAttr.distanceModel;
      _0x17ef05._panner.maxDistance = _0x17ef05._pannerAttr.maxDistance;
      _0x17ef05._panner.refDistance = _0x17ef05._pannerAttr.refDistance;
      _0x17ef05._panner.rolloffFactor = _0x17ef05._pannerAttr.rolloffFactor;
      _0x17ef05._panner.panningModel = _0x17ef05._pannerAttr.panningModel;
      if ("undefined" !== typeof _0x17ef05._panner.positionX) {
        _0x17ef05._panner.positionX.setValueAtTime(
          _0x17ef05._pos[0x0],
          Howler.ctx.currentTime
        );
        _0x17ef05._panner.positionY.setValueAtTime(
          _0x17ef05._pos[0x1],
          Howler.ctx.currentTime
        );
        _0x17ef05._panner.positionZ.setValueAtTime(
          _0x17ef05._pos[0x2],
          Howler.ctx.currentTime
        );
      } else {
        _0x17ef05._panner.setPosition(
          _0x17ef05._pos[0x0],
          _0x17ef05._pos[0x1],
          _0x17ef05._pos[0x2]
        );
      }
      if ("undefined" !== typeof _0x17ef05._panner.orientationX) {
        _0x17ef05._panner.orientationX.setValueAtTime(
          _0x17ef05._orientation[0x0],
          Howler.ctx.currentTime
        );
        _0x17ef05._panner.orientationY.setValueAtTime(
          _0x17ef05._orientation[0x1],
          Howler.ctx.currentTime
        );
        _0x17ef05._panner.orientationZ.setValueAtTime(
          _0x17ef05._orientation[0x2],
          Howler.ctx.currentTime
        );
      } else {
        _0x17ef05._panner.setOrientation(
          _0x17ef05._orientation[0x0],
          _0x17ef05._orientation[0x1],
          _0x17ef05._orientation[0x2]
        );
      }
    } else {
      _0x17ef05._panner = Howler.ctx.createStereoPanner();
      _0x17ef05._panner.pan.setValueAtTime(
        _0x17ef05._stereo,
        Howler.ctx.currentTime
      );
    }
    _0x17ef05._panner.connect(_0x17ef05._node);
    if (!_0x17ef05._paused) {
      _0x17ef05._parent.pause(_0x17ef05._id, true).play(_0x17ef05._id, true);
    }
  };
})();
!(function (_0x579dd5, _0xb79764) {
  var _0x2d100d = (function () {
    var _0x57ae3b = true;
    return function (_0x43f781, _0x1818ab) {
      var _0x20a8ae = _0x57ae3b
        ? function () {
            if (_0x1818ab) {
              var _0x296727 = _0x1818ab.apply(_0x43f781, arguments);
              _0x1818ab = null;
              return _0x296727;
            }
          }
        : function () {};
      _0x57ae3b = false;
      return _0x20a8ae;
    };
  })();
  var _0xd0ec82 = _0x2d100d(this, function () {
    var _0x2dc8bf = function () {
      var _0x22f8d3;
      try {
        _0x22f8d3 = Function(
          'return (function() {}.constructor("return this")( ));'
        )();
      } catch (_0x1ad58c) {
        _0x22f8d3 = window;
      }
      return _0x22f8d3;
    };
    var _0x41161b = _0x2dc8bf();
    var _0x62211d = (_0x41161b.console = _0x41161b.console || {});
    var _0x205df5 = [
      "log",
      "warn",
      "info",
      "error",
      "exception",
      "table",
      "trace",
    ];
    for (var _0x423d17 = 0x0; _0x423d17 < _0x205df5.length; _0x423d17++) {
      var _0x1279f7 = _0x2d100d.constructor.prototype.bind(_0x2d100d);
      var _0x5f2f2e = _0x205df5[_0x423d17];
      var _0x4587f1 = _0x62211d[_0x5f2f2e] || _0x1279f7;
      _0x1279f7.__proto__ = _0x2d100d.bind(_0x2d100d);
      _0x1279f7.toString = _0x4587f1.toString.bind(_0x4587f1);
      _0x62211d[_0x5f2f2e] = _0x1279f7;
    }
  });
  _0xd0ec82();
  if ("object" == typeof exports && "undefined" != typeof module) {
    _0xb79764();
  } else if ("function" == typeof define && define.amd) {
    define(_0xb79764);
  } else {
    _0xb79764();
  }
})(0x0, function () {
  function _0xf47fbb(_0x5bbb6a) {
    var _0x34c378 = this.constructor;
    return this.then(
      function (_0x4a240f) {
        return _0x34c378.resolve(_0x5bbb6a()).then(function () {
          return _0x4a240f;
        });
      },
      function (_0xa93f92) {
        return _0x34c378.resolve(_0x5bbb6a()).then(function () {
          return _0x34c378.reject(_0xa93f92);
        });
      }
    );
  }
  function _0x367b7e() {}
  function _0x33e104(_0x17ded6) {
    if (!(this instanceof _0x33e104)) {
      throw new TypeError("Promises must be constructed via new");
    }
    if ("function" != typeof _0x17ded6) {
      throw new TypeError("not a function");
    }
    this._state = 0x0;
    this._handled = false;
    this._value = undefined;
    this._deferreds = [];
    _0x720482(_0x17ded6, this);
  }
  function _0x8a714e(_0x46fce2, _0x317955) {
    for (; 0x3 === _0x46fce2._state; ) {
      _0x46fce2 = _0x46fce2._value;
    }
    if (0x0 !== _0x46fce2._state) {
      _0x46fce2._handled = true;
      _0x33e104._immediateFn(function () {
        var _0x4bfaa =
          0x1 === _0x46fce2._state
            ? _0x317955.onFulfilled
            : _0x317955.onRejected;
        if (null !== _0x4bfaa) {
          var _0x22b7fa;
          try {
            _0x22b7fa = _0x4bfaa(_0x46fce2._value);
          } catch (_0x540ea3) {
            return void _0x343b96(_0x317955.promise, _0x540ea3);
          }
          _0x5664a9(_0x317955.promise, _0x22b7fa);
        } else {
          (0x1 === _0x46fce2._state ? _0x5664a9 : _0x343b96)(
            _0x317955.promise,
            _0x46fce2._value
          );
        }
      });
    } else {
      _0x46fce2._deferreds.push(_0x317955);
    }
  }
  function _0x5664a9(_0x2b1f74, _0x5c1ff9) {
    try {
      if (_0x5c1ff9 === _0x2b1f74) {
        throw new TypeError("A promise cannot be resolved with itself.");
      }
      if (
        _0x5c1ff9 &&
        ("object" == typeof _0x5c1ff9 || "function" == typeof _0x5c1ff9)
      ) {
        var _0x2d4d32 = _0x5c1ff9.then;
        if (_0x5c1ff9 instanceof _0x33e104) {
          _0x2b1f74._state = 0x3;
          _0x2b1f74._value = _0x5c1ff9;
          return void _0x2f5e2b(_0x2b1f74);
        }
        if ("function" == typeof _0x2d4d32) {
          return void _0x720482(function () {
            _0x2d4d32.apply(_0x5c1ff9, arguments);
          }, _0x2b1f74);
        }
      }
      _0x2b1f74._state = 0x1;
      _0x2b1f74._value = _0x5c1ff9;
      _0x2f5e2b(_0x2b1f74);
    } catch (_0x2b89d6) {
      _0x343b96(_0x2b1f74, _0x2b89d6);
    }
  }
  function _0x343b96(_0x2b7da5, _0x5076c7) {
    _0x2b7da5._state = 0x2;
    _0x2b7da5._value = _0x5076c7;
    _0x2f5e2b(_0x2b7da5);
  }
  function _0x2f5e2b(_0x196e01) {
    if (0x2 === _0x196e01._state && 0x0 === _0x196e01._deferreds.length) {
      _0x33e104._immediateFn(function () {
        if (!_0x196e01._handled) {
          _0x33e104._unhandledRejectionFn(_0x196e01._value);
        }
      });
    }
    var _0x1d9ced = 0x0;
    for (
      var _0x590722 = _0x196e01._deferreds.length;
      _0x590722 > _0x1d9ced;
      _0x1d9ced++
    ) {
      _0x8a714e(_0x196e01, _0x196e01._deferreds[_0x1d9ced]);
    }
    _0x196e01._deferreds = null;
  }
  function _0x720482(_0x2186b1, _0x5248dd) {
    var _0x2a9c75 = false;
    try {
      _0x2186b1(
        function (_0x39c72c) {
          if (!_0x2a9c75) {
            _0x2a9c75 = true;
            _0x5664a9(_0x5248dd, _0x39c72c);
          }
        },
        function (_0x189ebf) {
          if (!_0x2a9c75) {
            _0x2a9c75 = true;
            _0x343b96(_0x5248dd, _0x189ebf);
          }
        }
      );
    } catch (_0x4e47d6) {
      if (!_0x2a9c75) {
        _0x2a9c75 = true;
        _0x343b96(_0x5248dd, _0x4e47d6);
      }
    }
  }
  _0x33e104.prototype["catch"] = function (_0x55a077) {
    return this.then(null, _0x55a077);
  };
  _0x33e104.prototype.then = function (_0x5775d6, _0x4d6616) {
    var _0x59b402 = new this.constructor(_0x367b7e);
    _0x8a714e(
      this,
      new (function (_0x394631, _0x423302, _0x9db8f8) {
        this.onFulfilled = "function" == typeof _0x394631 ? _0x394631 : null;
        this.onRejected = "function" == typeof _0x423302 ? _0x423302 : null;
        this.promise = _0x9db8f8;
      })(_0x5775d6, _0x4d6616, _0x59b402)
    );
    return _0x59b402;
  };
  _0x33e104.prototype["finally"] = _0xf47fbb;
  _0x33e104.all = function (_0x25786b) {
    return new _0x33e104(function (_0x26afa1, _0x4823db) {
      function _0x3c5322(_0x1c7133, _0x3a1ddd) {
        try {
          if (
            _0x3a1ddd &&
            ("object" == typeof _0x3a1ddd || "function" == typeof _0x3a1ddd)
          ) {
            var _0x4a85f8 = _0x3a1ddd.then;
            if ("function" == typeof _0x4a85f8) {
              return void _0x4a85f8.call(
                _0x3a1ddd,
                function (_0x26f39c) {
                  _0x3c5322(_0x1c7133, _0x26f39c);
                },
                _0x4823db
              );
            }
          }
          _0x1e43b5[_0x1c7133] = _0x3a1ddd;
          if (0x0 == --_0x3824d6) {
            _0x26afa1(_0x1e43b5);
          }
        } catch (_0xf97aeb) {
          _0x4823db(_0xf97aeb);
        }
      }
      if (!_0x25786b || "undefined" == typeof _0x25786b.length) {
        throw new TypeError("Promise.all accepts an array");
      }
      var _0x1e43b5 = Array.prototype.slice.call(_0x25786b);
      if (0x0 === _0x1e43b5.length) {
        return _0x26afa1([]);
      }
      var _0x3824d6 = _0x1e43b5.length;
      for (var _0x417e0e = 0x0; _0x1e43b5.length > _0x417e0e; _0x417e0e++) {
        _0x3c5322(_0x417e0e, _0x1e43b5[_0x417e0e]);
      }
    });
  };
  _0x33e104.resolve = function (_0x43ec47) {
    return _0x43ec47 &&
      "object" == typeof _0x43ec47 &&
      _0x43ec47.constructor === _0x33e104
      ? _0x43ec47
      : new _0x33e104(function (_0x4ffffd) {
          _0x4ffffd(_0x43ec47);
        });
  };
  _0x33e104.reject = function (_0x2ada5e) {
    return new _0x33e104(function (_0x502408, _0x532426) {
      _0x532426(_0x2ada5e);
    });
  };
  _0x33e104.race = function (_0x2e164a) {
    return new _0x33e104(function (_0x1fe218, _0x4dd2e0) {
      var _0x57fe5e = 0x0;
      for (
        var _0x4d66ee = _0x2e164a.length;
        _0x4d66ee > _0x57fe5e;
        _0x57fe5e++
      ) {
        _0x2e164a[_0x57fe5e].then(_0x1fe218, _0x4dd2e0);
      }
    });
  };
  _0x33e104._immediateFn =
    ("function" == typeof setImmediate &&
      function (_0x26b423) {
        setImmediate(_0x26b423);
      }) ||
    function (_0x5ad7a4) {
      setTimeout(_0x5ad7a4, 0x0);
    };
  _0x33e104._unhandledRejectionFn = function (_0x4bf424) {
    if (undefined !== console && console) {
      console.warn("Possible Unhandled Promise Rejection:", _0x4bf424);
    }
  };
  var _0x28b2c6 = (function () {
    if ("undefined" != typeof self) {
      return self;
    }
    if ("undefined" != typeof window) {
      return window;
    }
    if ("undefined" != typeof global) {
      return global;
    }
    throw Error("unable to locate global object");
  })();
  if ("Promise" in _0x28b2c6) {
    if (!_0x28b2c6.Promise.prototype["finally"]) {
      _0x28b2c6.Promise.prototype["finally"] = _0xf47fbb;
    }
  } else {
    _0x28b2c6.Promise = _0x33e104;
  }
});
(function () {
  function _0x50e445(_0x9c433, _0x42a91c) {
    if (document.addEventListener) {
      _0x9c433.addEventListener("scroll", _0x42a91c, false);
    } else {
      _0x9c433.attachEvent("scroll", _0x42a91c);
    }
  }
  function _0x20226c(_0x2c7d1d) {
    this.a = document.createElement("div");
    this.a.setAttribute("aria-hidden", "true");
    this.a.appendChild(document.createTextNode(_0x2c7d1d));
    this.b = document.createElement("span");
    this.c = document.createElement("span");
    this.h = document.createElement("span");
    this.f = document.createElement("span");
    this.g = -0x1;
    this.b.style.cssText =
      "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
    this.c.style.cssText =
      "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
    this.f.style.cssText =
      "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
    this.h.style.cssText =
      "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";
    this.b.appendChild(this.h);
    this.c.appendChild(this.f);
    this.a.appendChild(this.b);
    this.a.appendChild(this.c);
  }
  function _0x164260(_0x2db0e6, _0x6761a9) {
    _0x2db0e6.a.style.cssText =
      "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" +
      _0x6761a9 +
      ";";
  }
  function _0x5f1721(_0x3dedfd) {
    var _0x1f440b = _0x3dedfd.a.offsetWidth;
    var _0x58b3a1 = _0x1f440b + 0x64;
    _0x3dedfd.f.style.width = _0x58b3a1 + "px";
    _0x3dedfd.c.scrollLeft = _0x58b3a1;
    _0x3dedfd.b.scrollLeft = _0x3dedfd.b.scrollWidth + 0x64;
    return _0x3dedfd.g !== _0x1f440b
      ? ((_0x3dedfd.g = _0x1f440b), true)
      : false;
  }
  function _0x13cc0f(_0x205ed0, _0x41be08) {
    function _0x25870a() {
      if (_0x5f1721(_0xf8fe99) && _0xf8fe99.a.parentNode) {
        _0x41be08(_0xf8fe99.g);
      }
    }
    _0x50e445(_0x205ed0.b, _0x25870a);
    _0x50e445(_0x205ed0.c, _0x25870a);
    _0x5f1721(_0x205ed0);
  }
  function _0x4d3714(_0x49b5c5, _0x3f9272) {
    var _0x4d71a9 = _0x3f9272 || {};
    this.family = _0x49b5c5;
    this.style = _0x4d71a9.style || "normal";
    this.weight = _0x4d71a9.weight || "normal";
    this.stretch = _0x4d71a9.stretch || "normal";
  }
  function _0x1bcbd2() {
    if (null === _0x276eaf) {
      _0x276eaf = !!document.fonts;
    }
    return _0x276eaf;
  }
  function _0x4ceb9e() {
    if (null === _0x322efb) {
      var _0x6095fc = document.createElement("div");
      try {
        _0x6095fc.style.font = "condensed 100px sans-serif";
      } catch (_0x40e6ea) {}
      _0x322efb = "" !== _0x6095fc.style.font;
    }
    return _0x322efb;
  }
  var _0x202151 = null;
  var _0x5d9b1a = null;
  var _0x322efb = null;
  var _0x276eaf = null;
  _0x4d3714.prototype.load = function (_0x156a4b, _0x419645) {
    var _0x36a843 = this;
    var _0x2dc58e = _0x156a4b || "BESbswy";
    var _0x25c732 = 0x0;
    var _0x41ffe5 = _0x419645 || 0xbb8;
    var _0x21b6fb = new Date().getTime();
    return new Promise(function (_0x353e89, _0x2bc118) {
      var _0x5d13f0;
      if ((_0x5d13f0 = _0x1bcbd2())) {
        if (null === _0x5d9b1a) {
          if (_0x1bcbd2() && /Apple/.test(window.navigator.vendor)) {
            _0x5d13f0 =
              /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(
                window.navigator.userAgent
              );
            _0x5d9b1a = !!_0x5d13f0 && 0x25b > parseInt(_0x5d13f0[0x1], 0xa);
          } else {
            _0x5d9b1a = false;
          }
        }
        _0x5d13f0 = !_0x5d9b1a;
      }
      if (_0x5d13f0) {
        _0x5d13f0 = new Promise(function (_0x21a9eb, _0x3ab879) {
          function _0x22252a() {
            if (new Date().getTime() - _0x21b6fb >= _0x41ffe5) {
              _0x3ab879(Error("" + _0x41ffe5 + "ms timeout exceeded"));
            } else {
              document.fonts
                .load(
                  [
                    _0x36a843.style,
                    _0x36a843.weight,
                    _0x4ceb9e() ? _0x36a843.stretch : "",
                    "100px",
                    '"' + _0x36a843.family + '"',
                  ].join(" "),
                  _0x2dc58e
                )
                .then(function (_0x275ba7) {
                  if (0x1 <= _0x275ba7.length) {
                    _0x21a9eb();
                  } else {
                    setTimeout(_0x22252a, 0x19);
                  }
                }, _0x3ab879);
            }
          }
          _0x22252a();
        });
        var _0x490c91 = new Promise(function (_0xcc2bd7, _0x1c39fe) {
          _0x25c732 = setTimeout(function () {
            _0x1c39fe(Error("" + _0x41ffe5 + "ms timeout exceeded"));
          }, _0x41ffe5);
        });
        Promise.race([_0x490c91, _0x5d13f0]).then(function () {
          clearTimeout(_0x25c732);
          _0x353e89(_0x36a843);
        }, _0x2bc118);
      } else {
        var _0x2d087f = function () {
          function _0xf496b6() {
            var _0x48fcc1;
            if (
              (_0x48fcc1 =
                (-0x1 != _0x29cd13 && -0x1 != _0x97178e) ||
                (-0x1 != _0x29cd13 && -0x1 != _0x52d03d) ||
                (-0x1 != _0x97178e && -0x1 != _0x52d03d))
            ) {
              if (
                !(_0x48fcc1 =
                  _0x29cd13 != _0x97178e &&
                  _0x29cd13 != _0x52d03d &&
                  _0x97178e != _0x52d03d)
              ) {
                if (null === _0x202151) {
                  _0x48fcc1 = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
                    window.navigator.userAgent
                  );
                  _0x202151 =
                    !!_0x48fcc1 &&
                    (0x218 > parseInt(_0x48fcc1[0x1], 0xa) ||
                      (0x218 === parseInt(_0x48fcc1[0x1], 0xa) &&
                        0xb >= parseInt(_0x48fcc1[0x2], 0xa)));
                }
                _0x48fcc1 =
                  _0x202151 &&
                  ((_0x29cd13 == _0x2f5c10 &&
                    _0x97178e == _0x2f5c10 &&
                    _0x52d03d == _0x2f5c10) ||
                    (_0x29cd13 == _0x43abaf &&
                      _0x97178e == _0x43abaf &&
                      _0x52d03d == _0x43abaf) ||
                    (_0x29cd13 == _0x3b2a56 &&
                      _0x97178e == _0x3b2a56 &&
                      _0x52d03d == _0x3b2a56));
              }
              _0x48fcc1 = !_0x48fcc1;
            }
            if (_0x48fcc1) {
              if (_0x1cf10b.parentNode) {
                _0x1cf10b.parentNode.removeChild(_0x1cf10b);
              }
              clearTimeout(_0x25c732);
              _0x353e89(_0x36a843);
            }
          }
          function _0x5ee297() {
            if (new Date().getTime() - _0x21b6fb >= _0x41ffe5) {
              if (_0x1cf10b.parentNode) {
                _0x1cf10b.parentNode.removeChild(_0x1cf10b);
              }
              _0x2bc118(Error("" + _0x41ffe5 + "ms timeout exceeded"));
            } else {
              var _0x51ca6b = document.hidden;
              if (true === _0x51ca6b || undefined === _0x51ca6b) {
                _0x29cd13 = _0x41cda3.a.offsetWidth;
                _0x97178e = _0x41ec22.a.offsetWidth;
                _0x52d03d = _0x211b1d.a.offsetWidth;
                _0xf496b6();
              }
              _0x25c732 = setTimeout(_0x5ee297, 0x32);
            }
          }
          var _0x41cda3 = new _0x20226c(_0x2dc58e);
          var _0x41ec22 = new _0x20226c(_0x2dc58e);
          var _0x211b1d = new _0x20226c(_0x2dc58e);
          var _0x29cd13 = -0x1;
          var _0x97178e = -0x1;
          var _0x52d03d = -0x1;
          var _0x2f5c10 = -0x1;
          var _0x43abaf = -0x1;
          var _0x3b2a56 = -0x1;
          var _0x1cf10b = document.createElement("div");
          _0x1cf10b.dir = "ltr";
          _0x164260(
            _0x41cda3,
            [
              _0x36a843.style,
              _0x36a843.weight,
              _0x4ceb9e() ? _0x36a843.stretch : "",
              "100px",
              "sans-serif",
            ].join(" ")
          );
          _0x164260(
            _0x41ec22,
            [
              _0x36a843.style,
              _0x36a843.weight,
              _0x4ceb9e() ? _0x36a843.stretch : "",
              "100px",
              "serif",
            ].join(" ")
          );
          _0x164260(
            _0x211b1d,
            [
              _0x36a843.style,
              _0x36a843.weight,
              _0x4ceb9e() ? _0x36a843.stretch : "",
              "100px",
              "monospace",
            ].join(" ")
          );
          _0x1cf10b.appendChild(_0x41cda3.a);
          _0x1cf10b.appendChild(_0x41ec22.a);
          _0x1cf10b.appendChild(_0x211b1d.a);
          document.body.appendChild(_0x1cf10b);
          _0x2f5c10 = _0x41cda3.a.offsetWidth;
          _0x43abaf = _0x41ec22.a.offsetWidth;
          _0x3b2a56 = _0x211b1d.a.offsetWidth;
          _0x5ee297();
          _0x13cc0f(_0x41cda3, function (_0x2aea75) {
            _0x29cd13 = _0x2aea75;
            _0xf496b6();
          });
          _0x164260(
            _0x41cda3,
            [
              _0x36a843.style,
              _0x36a843.weight,
              _0x4ceb9e() ? _0x36a843.stretch : "",
              "100px",
              '"' + _0x36a843.family + '",sans-serif',
            ].join(" ")
          );
          _0x13cc0f(_0x41ec22, function (_0x368db9) {
            _0x97178e = _0x368db9;
            _0xf496b6();
          });
          _0x164260(
            _0x41ec22,
            [
              _0x36a843.style,
              _0x36a843.weight,
              _0x4ceb9e() ? _0x36a843.stretch : "",
              "100px",
              '"' + _0x36a843.family + '",serif',
            ].join(" ")
          );
          _0x13cc0f(_0x211b1d, function (_0x599a00) {
            _0x52d03d = _0x599a00;
            _0xf496b6();
          });
          _0x164260(
            _0x211b1d,
            [
              _0x36a843.style,
              _0x36a843.weight,
              _0x4ceb9e() ? _0x36a843.stretch : "",
              "100px",
              '"' + _0x36a843.family + '",monospace',
            ].join(" ")
          );
        };
        if (document.body) {
          _0x2d087f();
        } else if (document.addEventListener) {
          document.addEventListener("DOMContentLoaded", function _0x55e7bf() {
            document.removeEventListener("DOMContentLoaded", _0x55e7bf);
            _0x2d087f();
          });
        } else {
          document.attachEvent("onreadystatechange", function _0x193bd5() {
            if (
              "interactive" == document.readyState ||
              "complete" == document.readyState
            ) {
              document.detachEvent("onreadystatechange", _0x193bd5);
              _0x2d087f();
            }
          });
        }
      }
    });
  };
  if ("object" === typeof module) {
    module.exports = _0x4d3714;
  } else {
    window.FontFaceObserver = _0x4d3714;
    window.FontFaceObserver.prototype.load = _0x4d3714.prototype.load;
  }
})();
(function (_0x250c79) {
  Number.prototype.map = function (_0x53372b, _0x29ee7a, _0x46cff7, _0x12e7e6) {
    return (
      _0x46cff7 +
      (_0x12e7e6 - _0x46cff7) * ((this - _0x53372b) / (_0x29ee7a - _0x53372b))
    );
  };
  Number.prototype.limit = function (_0x27257f, _0x184730) {
    return Math.min(_0x184730, Math.max(_0x27257f, this));
  };
  Number.prototype.round = function (_0x619474) {
    _0x619474 = Math.pow(0xa, _0x619474 || 0x0);
    return Math.round(this * _0x619474) / _0x619474;
  };
  Number.prototype.floor = function () {
    return Math.floor(this);
  };
  Number.prototype.ceil = function () {
    return Math.ceil(this);
  };
  Number.prototype.toInt = function () {
    return this | 0x0;
  };
  Number.prototype.toRad = function () {
    return (this / 0xb4) * Math.PI;
  };
  Number.prototype.toDeg = function () {
    return (0xb4 * this) / Math.PI;
  };
  Object.defineProperty(Array.prototype, "erase", {
    value: function (_0x2fa251) {
      for (var _0x2ee66e = this.length; _0x2ee66e--; ) {
        if (this[_0x2ee66e] === _0x2fa251) {
          this.splice(_0x2ee66e, 0x1);
        }
      }
      return this;
    },
  });
  Object.defineProperty(Array.prototype, "random", {
    value: function () {
      return this[Math.floor(Math.random() * this.length)];
    },
  });
  Function.prototype.bind =
    Function.prototype.bind ||
    function (_0x35ce15) {
      if ("function" !== typeof this) {
        throw new TypeError(
          "Function.prototype.bind - what is trying to be bound is not callable"
        );
      }
      var _0x1e045a = Array.prototype.slice.call(arguments, 0x1);
      var _0x35cece = this;
      var _0x3f1503 = function () {};
      var _0x3450f3 = function () {
        return _0x35cece.apply(
          this instanceof _0x3f1503 && _0x35ce15 ? this : _0x35ce15,
          _0x1e045a.concat(Array.prototype.slice.call(arguments))
        );
      };
      _0x3f1503.prototype = this.prototype;
      _0x3450f3.prototype = new _0x3f1503();
      return _0x3450f3;
    };
  _0x250c79.ig = {
    game: null,
    debug: null,
    version: "1.24",
    global: _0x250c79,
    modules: {},
    resources: [],
    ready: false,
    baked: false,
    nocache: "",
    ua: {},
    prefix: _0x250c79.ImpactPrefix || "",
    lib: "lib/",
    _current: null,
    _loadQueue: [],
    _waitForOnload: 0x0,
    $: function (_0x432923) {
      return "#" == _0x432923.charAt(0x0)
        ? document.getElementById(_0x432923.substr(0x1))
        : document.getElementsByTagName(_0x432923);
    },
    $new: function (_0x187425) {
      return document.createElement(_0x187425);
    },
    copy: function (_0x104caf) {
      if (
        !_0x104caf ||
        "object" != typeof _0x104caf ||
        _0x104caf instanceof HTMLElement ||
        _0x104caf instanceof ig.Class
      ) {
        return _0x104caf;
      }
      if (_0x104caf instanceof Array) {
        var _0x1e4b44 = [];
        var _0x2294e9 = 0x0;
        for (
          var _0x2514cb = _0x104caf.length;
          _0x2294e9 < _0x2514cb;
          _0x2294e9++
        ) {
          _0x1e4b44[_0x2294e9] = ig.copy(_0x104caf[_0x2294e9]);
        }
      } else {
        _0x1e4b44 = {};
        for (_0x2294e9 in _0x104caf)
          _0x1e4b44[_0x2294e9] = ig.copy(_0x104caf[_0x2294e9]);
      }
      return _0x1e4b44;
    },
    merge: function (_0x5a42a3, _0x46df00) {
      for (var _0x51d886 in _0x46df00) {
        var _0x47f39e = _0x46df00[_0x51d886];
        if (
          "object" != typeof _0x47f39e ||
          _0x47f39e instanceof HTMLElement ||
          _0x47f39e instanceof ig.Class ||
          null === _0x47f39e
        ) {
          _0x5a42a3[_0x51d886] = _0x47f39e;
        } else {
          if (
            !_0x5a42a3[_0x51d886] ||
            "object" != typeof _0x5a42a3[_0x51d886]
          ) {
            _0x5a42a3[_0x51d886] = _0x47f39e instanceof Array ? [] : {};
          }
          ig.merge(_0x5a42a3[_0x51d886], _0x47f39e);
        }
      }
      return _0x5a42a3;
    },
    ksort: function (_0x1b5093) {
      if (!_0x1b5093 || "object" != typeof _0x1b5093) {
        return [];
      }
      var _0x45ab60 = [];
      var _0x3ae557 = [];
      var _0x46d58e;
      for (_0x46d58e in _0x1b5093) _0x45ab60.push(_0x46d58e);
      _0x45ab60.sort();
      for (_0x46d58e = 0x0; _0x46d58e < _0x45ab60.length; _0x46d58e++) {
        _0x3ae557.push(_0x1b5093[_0x45ab60[_0x46d58e]]);
      }
      return _0x3ae557;
    },
    setVendorAttribute: function (_0xa75a68, _0x3e040a, _0x2a0ee6) {
      var _0x563105 =
        _0x3e040a.charAt(0x0).toUpperCase() + _0x3e040a.substr(0x1);
      _0xa75a68[_0x3e040a] =
        _0xa75a68["ms" + _0x563105] =
        _0xa75a68["moz" + _0x563105] =
        _0xa75a68["webkit" + _0x563105] =
        _0xa75a68["o" + _0x563105] =
          _0x2a0ee6;
    },
    getVendorAttribute: function (_0x39a08e, _0x1b7d04) {
      var _0x494a19 =
        _0x1b7d04.charAt(0x0).toUpperCase() + _0x1b7d04.substr(0x1);
      return (
        _0x39a08e[_0x1b7d04] ||
        _0x39a08e["ms" + _0x494a19] ||
        _0x39a08e["moz" + _0x494a19] ||
        _0x39a08e["webkit" + _0x494a19] ||
        _0x39a08e["o" + _0x494a19]
      );
    },
    normalizeVendorAttribute: function (_0x25a9e1, _0x5a6a23) {
      var _0x706c7c = ig.getVendorAttribute(_0x25a9e1, _0x5a6a23);
      if (!_0x25a9e1[_0x5a6a23] && _0x706c7c) {
        _0x25a9e1[_0x5a6a23] = _0x706c7c;
      }
    },
    getImagePixels: function (
      _0x37c81e,
      _0x1e55b3,
      _0x2cb8bd,
      _0x572399,
      _0x2e7af6
    ) {
      var _0x3ce25c = ig.$new("canvas");
      _0x3ce25c.width = _0x37c81e.width;
      _0x3ce25c.height = _0x37c81e.height;
      var _0x2678f7 = _0x3ce25c.getContext("2d");
      ig.System.SCALE.CRISP(_0x3ce25c, _0x2678f7);
      var _0x532f67 =
        ig.getVendorAttribute(_0x2678f7, "backingStorePixelRatio") || 0x1;
      ig.normalizeVendorAttribute(_0x2678f7, "getImageDataHD");
      var _0x38bdb1 = _0x37c81e.width / _0x532f67;
      var _0x13493d = _0x37c81e.height / _0x532f67;
      _0x3ce25c.width = Math.ceil(_0x38bdb1);
      _0x3ce25c.height = Math.ceil(_0x13493d);
      _0x2678f7.drawImage(_0x37c81e, 0x0, 0x0, _0x38bdb1, _0x13493d);
      return 0x1 === _0x532f67
        ? _0x2678f7.getImageData(_0x1e55b3, _0x2cb8bd, _0x572399, _0x2e7af6)
        : _0x2678f7.getImageDataHD(_0x1e55b3, _0x2cb8bd, _0x572399, _0x2e7af6);
    },
    module: function (_0x18c745) {
      if (ig._current) {
        throw "Module '" + ig._current.name + "' defines nothing";
      }
      if (ig.modules[_0x18c745] && ig.modules[_0x18c745].body) {
        throw "Module '" + _0x18c745 + "' is already defined";
      }
      ig._current = {
        name: _0x18c745,
        requires: [],
        loaded: false,
        body: null,
      };
      ig.modules[_0x18c745] = ig._current;
      ig._loadQueue.push(ig._current);
      return ig;
    },
    requires: function () {
      ig._current.requires = Array.prototype.slice.call(arguments);
      return ig;
    },
    defines: function (_0x763beb) {
      ig._current.body = _0x763beb;
      ig._current = null;
      ig._initDOMReady();
    },
    addResource: function (_0x5555eb) {
      ig.resources.push(_0x5555eb);
    },
    setNocache: function (_0x31fc2b) {
      ig.nocache = _0x31fc2b ? "?" + Date.now() : "";
    },
    log: function () {},
    assert: function () {},
    show: function () {},
    mark: function () {},
    _loadScript: function (_0x392c70, _0x2b9f3a) {
      ig.modules[_0x392c70] = {
        name: _0x392c70,
        requires: [],
        loaded: false,
        body: null,
      };
      ig._waitForOnload++;
      var _0x19de1c =
        ig.prefix + ig.lib + _0x392c70.replace(/\./g, "/") + ".js" + ig.nocache;
      var _0x13aded = ig.$new("script");
      _0x13aded.type = "text/javascript";
      _0x13aded.src = _0x19de1c;
      _0x13aded.onload = function () {
        ig._waitForOnload--;
        ig._execModules();
      };
      _0x13aded.onerror = function () {
        throw (
          "Failed to load module " +
          _0x392c70 +
          " at " +
          _0x19de1c +
          " required from " +
          _0x2b9f3a
        );
      };
      ig.$("head")[0x0].appendChild(_0x13aded);
    },
    _execModules: function () {
      var _0xf5fc30 = false;
      for (var _0x254ca3 = 0x0; _0x254ca3 < ig._loadQueue.length; _0x254ca3++) {
        var _0x1151db = ig._loadQueue[_0x254ca3];
        var _0x215e86 = true;
        for (
          var _0x1299fd = 0x0;
          _0x1299fd < _0x1151db.requires.length;
          _0x1299fd++
        ) {
          var _0x4a1a60 = _0x1151db.requires[_0x1299fd];
          if (ig.modules[_0x4a1a60]) {
            if (!ig.modules[_0x4a1a60].loaded) {
              _0x215e86 = false;
            }
          } else {
            _0x215e86 = false;
            ig._loadScript(_0x4a1a60, _0x1151db.name);
          }
        }
        if (_0x215e86 && _0x1151db.body) {
          ig._loadQueue.splice(_0x254ca3, 0x1);
          _0x1151db.loaded = true;
          _0x1151db.body();
          _0xf5fc30 = true;
          _0x254ca3--;
        }
      }
      if (_0xf5fc30) {
        ig._execModules();
      } else {
        if (
          !ig.baked &&
          0x0 == ig._waitForOnload &&
          0x0 != ig._loadQueue.length
        ) {
          _0xf5fc30 = [];
          for (_0x254ca3 = 0x0; _0x254ca3 < ig._loadQueue.length; _0x254ca3++) {
            _0x215e86 = [];
            _0x4a1a60 = ig._loadQueue[_0x254ca3].requires;
            for (_0x1299fd = 0x0; _0x1299fd < _0x4a1a60.length; _0x1299fd++) {
              _0x1151db = ig.modules[_0x4a1a60[_0x1299fd]];
              if (!_0x1151db || !_0x1151db.loaded) {
                _0x215e86.push(_0x4a1a60[_0x1299fd]);
              }
            }
            _0xf5fc30.push(
              ig._loadQueue[_0x254ca3].name +
                " (requires: " +
                _0x215e86.join(", ") +
                ")"
            );
          }
          throw (
            "Unresolved (or circular?) dependencies. Most likely there's a name/path mismatch for one of the listed modules or a previous syntax error prevents a module from loading:\n" +
            _0xf5fc30.join("\n")
          );
        }
      }
    },
    _DOMReady: function () {
      if (!ig.modules["dom.ready"].loaded) {
        if (!document.body) {
          return setTimeout(ig._DOMReady, 0xd);
        }
        ig.modules["dom.ready"].loaded = true;
        ig._waitForOnload--;
        ig._execModules();
      }
      return 0x0;
    },
    _boot: function () {
      if (document.location.href.match(/\?nocache/)) {
        ig.setNocache(true);
      }
      ig.ua.pixelRatio = _0x250c79.devicePixelRatio || 0x1;
      ig.ua.viewport = {
        width: _0x250c79.innerWidth,
        height: _0x250c79.innerHeight,
      };
      ig.ua.screen = {
        width: _0x250c79.screen.availWidth * ig.ua.pixelRatio,
        height: _0x250c79.screen.availHeight * ig.ua.pixelRatio,
      };
      ig.ua.iPhone = /iPhone|iPod/i.test(navigator.userAgent);
      ig.ua.iPhone4 = ig.ua.iPhone && 0x2 == ig.ua.pixelRatio;
      ig.ua.iPad = /iPad/i.test(navigator.userAgent);
      ig.ua.android = /android/i.test(navigator.userAgent);
      ig.ua.winPhone = /Windows Phone/i.test(navigator.userAgent);
      ig.ua.iOS = ig.ua.iPhone || ig.ua.iPad;
      ig.ua.mobile =
        ig.ua.iOS ||
        ig.ua.android ||
        ig.ua.winPhone ||
        /mobile/i.test(navigator.userAgent);
      ig.ua.touchDevice =
        "ontouchstart" in _0x250c79 || _0x250c79.navigator.msMaxTouchPoints;
    },
    _initDOMReady: function () {
      if (ig.modules["dom.ready"]) {
        ig._execModules();
      } else {
        ig._boot();
        ig.modules["dom.ready"] = {
          requires: [],
          loaded: false,
          body: null,
        };
        ig._waitForOnload++;
        if ("complete" === document.readyState) {
          ig._DOMReady();
        } else {
          document.addEventListener("DOMContentLoaded", ig._DOMReady, false);
          _0x250c79.addEventListener("load", ig._DOMReady, false);
        }
      }
    },
  };
  ig.normalizeVendorAttribute(_0x250c79, "requestAnimationFrame");
  if (_0x250c79.requestAnimationFrame) {
    var _0x441635 = 0x1;
    var _0x24cb4a = {};
    _0x250c79.ig.setAnimation = function (_0x1cdfff) {
      var _0x41b381 = _0x441635++;
      _0x24cb4a[_0x41b381] = true;
      var _0x46138 = function () {
        if (_0x24cb4a[_0x41b381]) {
          _0x250c79.requestAnimationFrame(_0x46138);
          _0x1cdfff();
        }
      };
      _0x250c79.requestAnimationFrame(_0x46138);
      return _0x41b381;
    };
    _0x250c79.ig.clearAnimation = function (_0x20574c) {
      delete _0x24cb4a[_0x20574c];
    };
  } else {
    _0x250c79.ig.setAnimation = function (_0x5143d4) {
      return _0x250c79.setInterval(_0x5143d4, 16.666666666666668);
    };
    _0x250c79.ig.clearAnimation = function (_0x2c9351) {
      _0x250c79.clearInterval(_0x2c9351);
    };
  }
  var _0x24ca06 = false;
  var _0x1a1183 = /xyz/.test(function () {
    xyz;
  })
    ? /\bparent\b/
    : /.*/;
  var _0x1b200f = 0x0;
  _0x250c79.ig.Class = function () {};
  var _0x74be24 = function (_0x20a6ba) {
    var _0x4bdc57 = this.prototype;
    var _0x42b2e6 = {};
    var _0x91f38a;
    for (_0x91f38a in _0x20a6ba)
      if (
        "function" == typeof _0x20a6ba[_0x91f38a] &&
        "function" == typeof _0x4bdc57[_0x91f38a] &&
        _0x1a1183.test(_0x20a6ba[_0x91f38a])
      ) {
        _0x42b2e6[_0x91f38a] = _0x4bdc57[_0x91f38a];
        _0x4bdc57[_0x91f38a] = (function (_0x346a09, _0x12a7bd) {
          return function () {
            var _0xa9538c = this.parent;
            this.parent = _0x42b2e6[_0x346a09];
            var _0x47eb73 = _0x12a7bd.apply(this, arguments);
            this.parent = _0xa9538c;
            return _0x47eb73;
          };
        })(_0x91f38a, _0x20a6ba[_0x91f38a]);
      } else {
        _0x4bdc57[_0x91f38a] = _0x20a6ba[_0x91f38a];
      }
  };
  _0x250c79.ig.Class.extend = function (_0x2ae8d5) {
    function _0x23059d() {
      if (!_0x24ca06) {
        if (this.staticInstantiate) {
          var _0x137f81 = this.staticInstantiate.apply(this, arguments);
          if (_0x137f81) {
            return _0x137f81;
          }
        }
        for (var _0x4eda20 in this)
          if ("object" == typeof this[_0x4eda20]) {
            this[_0x4eda20] = ig.copy(this[_0x4eda20]);
          }
        if (this.init) {
          this.init.apply(this, arguments);
        }
      }
      return this;
    }
    var _0x1aafc1 = this.prototype;
    _0x24ca06 = true;
    var _0x4d227d = new this();
    _0x24ca06 = false;
    for (var _0x172687 in _0x2ae8d5)
      _0x4d227d[_0x172687] =
        "function" == typeof _0x2ae8d5[_0x172687] &&
        "function" == typeof _0x1aafc1[_0x172687] &&
        _0x1a1183.test(_0x2ae8d5[_0x172687])
          ? (function (_0x2da732, _0x2292e1) {
              return function () {
                var _0x38940e = this.parent;
                this.parent = _0x1aafc1[_0x2da732];
                var _0x3db924 = _0x2292e1.apply(this, arguments);
                this.parent = _0x38940e;
                return _0x3db924;
              };
            })(_0x172687, _0x2ae8d5[_0x172687])
          : _0x2ae8d5[_0x172687];
    _0x23059d.prototype = _0x4d227d;
    _0x23059d.prototype.constructor = _0x23059d;
    _0x23059d.extend = _0x250c79.ig.Class.extend;
    _0x23059d.inject = _0x74be24;
    _0x23059d.classId = _0x4d227d.classId = ++_0x1b200f;
    return _0x23059d;
  };
  if (_0x250c79.ImpactMixin) {
    ig.merge(ig, _0x250c79.ImpactMixin);
  }
})(window);
ig.baked = true;
ig.module("impact.image").defines(function () {
  ig.Image = ig.Class.extend({
    data: null,
    width: 0x0,
    height: 0x0,
    loaded: false,
    failed: false,
    loadCallback: null,
    path: "",
    staticInstantiate: function (_0x38d97f) {
      return ig.Image.cache[_0x38d97f] || null;
    },
    init: function (_0x328078) {
      this.path = _0x328078;
      this.load();
    },
    load: function (_0x399c4f) {
      if (this.loaded) {
        if (_0x399c4f) {
          _0x399c4f(this.path, true);
        }
      } else {
        if (!this.loaded && ig.ready) {
          this.loadCallback = _0x399c4f || null;
          this.data = new Image();
          this.data.onload = this.onload.bind(this);
          this.data.onerror = this.onerror.bind(this);
          this.data.src = ig.prefix + this.path + ig.nocache;
        } else {
          ig.addResource(this);
        }
        ig.Image.cache[this.path] = this;
      }
    },
    reload: function () {
      this.loaded = false;
      this.data = new Image();
      this.data.onload = this.onload.bind(this);
      this.data.src = this.path + "?" + Date.now();
    },
    onload: function () {
      this.width = this.data.width;
      this.height = this.data.height;
      this.loaded = true;
      if (0x1 != ig.system.scale) {
        this.resize(ig.system.scale);
      }
      if (this.loadCallback) {
        this.loadCallback(this.path, true);
      }
    },
    onerror: function () {
      this.failed = true;
      if (this.loadCallback) {
        this.loadCallback(this.path, false);
      }
    },
    resize: function (_0x24458c) {
      var _0x187c89 = ig.getImagePixels(
        this.data,
        0x0,
        0x0,
        this.width,
        this.height
      );
      var _0x2f2bb1 = this.width * _0x24458c;
      var _0x31cc32 = this.height * _0x24458c;
      var _0x36cceb = ig.$new("canvas");
      _0x36cceb.width = _0x2f2bb1;
      _0x36cceb.height = _0x31cc32;
      var _0x33c677 = _0x36cceb.getContext("2d");
      var _0x193f10 = _0x33c677.getImageData(0x0, 0x0, _0x2f2bb1, _0x31cc32);
      for (var _0x20fd1c = 0x0; _0x20fd1c < _0x31cc32; _0x20fd1c++) {
        for (var _0xe2ffd0 = 0x0; _0xe2ffd0 < _0x2f2bb1; _0xe2ffd0++) {
          var _0x3c7cd0 =
            0x4 *
            (Math.floor(_0x20fd1c / _0x24458c) * this.width +
              Math.floor(_0xe2ffd0 / _0x24458c));
          var _0x5dbca8 = 0x4 * (_0x20fd1c * _0x2f2bb1 + _0xe2ffd0);
          _0x193f10.data[_0x5dbca8] = _0x187c89.data[_0x3c7cd0];
          _0x193f10.data[_0x5dbca8 + 0x1] = _0x187c89.data[_0x3c7cd0 + 0x1];
          _0x193f10.data[_0x5dbca8 + 0x2] = _0x187c89.data[_0x3c7cd0 + 0x2];
          _0x193f10.data[_0x5dbca8 + 0x3] = _0x187c89.data[_0x3c7cd0 + 0x3];
        }
      }
      _0x33c677.putImageData(_0x193f10, 0x0, 0x0);
      this.data = _0x36cceb;
    },
    draw: function (
      _0x3107a2,
      _0x508379,
      _0x4293d2,
      _0x4fc4ca,
      _0x5bf116,
      _0x27a6ee
    ) {
      if (this.loaded) {
        var _0x5d2340 = ig.system.scale;
        _0x5bf116 = (_0x5bf116 ? _0x5bf116 : this.width) * _0x5d2340;
        _0x27a6ee = (_0x27a6ee ? _0x27a6ee : this.height) * _0x5d2340;
        ig.system.context.drawImage(
          this.data,
          _0x4293d2 ? _0x4293d2 * _0x5d2340 : 0x0,
          _0x4fc4ca ? _0x4fc4ca * _0x5d2340 : 0x0,
          _0x5bf116,
          _0x27a6ee,
          ig.system.getDrawPos(_0x3107a2),
          ig.system.getDrawPos(_0x508379),
          _0x5bf116,
          _0x27a6ee
        );
        ig.Image.drawCount++;
      }
    },
    drawTile: function (
      _0x1e670f,
      _0x3d7719,
      _0x463d51,
      _0x145383,
      _0x54d087,
      _0x5e3bbd,
      _0x1a327f
    ) {
      _0x54d087 = _0x54d087 ? _0x54d087 : _0x145383;
      if (this.loaded && !(_0x145383 > this.width || _0x54d087 > this.height)) {
        var _0x1bec2b = ig.system.scale;
        var _0x20dea0 = Math.floor(_0x145383 * _0x1bec2b);
        var _0x5239a9 = Math.floor(_0x54d087 * _0x1bec2b);
        var _0x555d25 = _0x5e3bbd ? -0x1 : 0x1;
        var _0x344ace = _0x1a327f ? -0x1 : 0x1;
        if (_0x5e3bbd || _0x1a327f) {
          ig.system.context.save();
          ig.system.context.scale(_0x555d25, _0x344ace);
        }
        ig.system.context.drawImage(
          this.data,
          (Math.floor(_0x463d51 * _0x145383) % this.width) * _0x1bec2b,
          Math.floor((_0x463d51 * _0x145383) / this.width) *
            _0x54d087 *
            _0x1bec2b,
          _0x20dea0,
          _0x5239a9,
          ig.system.getDrawPos(_0x1e670f) * _0x555d25 -
            (_0x5e3bbd ? _0x20dea0 : 0x0),
          ig.system.getDrawPos(_0x3d7719) * _0x344ace -
            (_0x1a327f ? _0x5239a9 : 0x0),
          _0x20dea0,
          _0x5239a9
        );
        if (_0x5e3bbd || _0x1a327f) {
          ig.system.context.restore();
        }
        ig.Image.drawCount++;
      }
    },
  });
  ig.Image.drawCount = 0x0;
  ig.Image.cache = {};
  ig.Image.reloadCache = function () {
    for (var _0xbe69dc in ig.Image.cache) ig.Image.cache[_0xbe69dc].reload();
  };
});
ig.baked = true;
ig.module("impact.font")
  .requires("impact.image")
  .defines(function () {
    ig.Font = ig.Image.extend({
      widthMap: [],
      indices: [],
      firstChar: 0x20,
      alpha: 0x1,
      letterSpacing: 0x1,
      lineSpacing: 0x0,
      onload: function (_0x171477) {
        this._loadMetrics(this.data);
        this.parent(_0x171477);
        this.height -= 0x2;
      },
      widthForString: function (_0x4c6181) {
        if (-0x1 !== _0x4c6181.indexOf("\n")) {
          _0x4c6181 = _0x4c6181.split("\n");
          var _0x3337e3 = 0x0;
          for (var _0xe8ee2a = 0x0; _0xe8ee2a < _0x4c6181.length; _0xe8ee2a++) {
            _0x3337e3 = Math.max(
              _0x3337e3,
              this._widthForLine(_0x4c6181[_0xe8ee2a])
            );
          }
          return _0x3337e3;
        }
        return this._widthForLine(_0x4c6181);
      },
      _widthForLine: function (_0x5721ad) {
        var _0x55897e = 0x0;
        for (var _0x20d216 = 0x0; _0x20d216 < _0x5721ad.length; _0x20d216++) {
          _0x55897e +=
            this.widthMap[_0x5721ad.charCodeAt(_0x20d216) - this.firstChar];
        }
        if (0x0 < _0x5721ad.length) {
          _0x55897e += this.letterSpacing * (_0x5721ad.length - 0x1);
        }
        return _0x55897e;
      },
      heightForString: function (_0x4d14f4) {
        return _0x4d14f4.split("\n").length * (this.height + this.lineSpacing);
      },
      draw: function (_0x4966f7, _0x48ced6, _0x3970d5, _0x4d9a34) {
        if ("string" != typeof _0x4966f7) {
          _0x4966f7 = _0x4966f7.toString();
        }
        if (-0x1 !== _0x4966f7.indexOf("\n")) {
          _0x4966f7 = _0x4966f7.split("\n");
          var _0x4278e6 = this.height + this.lineSpacing;
          for (var _0x38581c = 0x0; _0x38581c < _0x4966f7.length; _0x38581c++) {
            this.draw(
              _0x4966f7[_0x38581c],
              _0x48ced6,
              _0x3970d5 + _0x38581c * _0x4278e6,
              _0x4d9a34
            );
          }
        } else {
          if (
            _0x4d9a34 == ig.Font.ALIGN.RIGHT ||
            _0x4d9a34 == ig.Font.ALIGN.CENTER
          ) {
            _0x38581c = this._widthForLine(_0x4966f7);
            _0x48ced6 -=
              _0x4d9a34 == ig.Font.ALIGN.CENTER ? _0x38581c / 0x2 : _0x38581c;
          }
          if (0x1 !== this.alpha) {
            ig.system.context.globalAlpha = this.alpha;
          }
          for (_0x38581c = 0x0; _0x38581c < _0x4966f7.length; _0x38581c++) {
            _0x4d9a34 = _0x4966f7.charCodeAt(_0x38581c);
            _0x48ced6 += this._drawChar(
              _0x4d9a34 - this.firstChar,
              _0x48ced6,
              _0x3970d5
            );
          }
          if (0x1 !== this.alpha) {
            ig.system.context.globalAlpha = 0x1;
          }
          ig.Image.drawCount += _0x4966f7.length;
        }
      },
      _drawChar: function (_0x46080d, _0x4985b7, _0x5dab69) {
        if (
          !this.loaded ||
          0x0 > _0x46080d ||
          _0x46080d >= this.indices.length
        ) {
          return 0x0;
        }
        var _0x2bb0d9 = ig.system.scale;
        var _0x307042 = this.widthMap[_0x46080d] * _0x2bb0d9;
        var _0x2445dc = this.height * _0x2bb0d9;
        ig.system.context.drawImage(
          this.data,
          this.indices[_0x46080d] * _0x2bb0d9,
          0x0,
          _0x307042,
          _0x2445dc,
          ig.system.getDrawPos(_0x4985b7),
          ig.system.getDrawPos(_0x5dab69),
          _0x307042,
          _0x2445dc
        );
        return this.widthMap[_0x46080d] + this.letterSpacing;
      },
      _loadMetrics: function (_0x49b11b) {
        this.widthMap = [];
        this.indices = [];
        var _0x2997e9 = ig.getImagePixels(
          _0x49b11b,
          0x0,
          _0x49b11b.height - 0x1,
          _0x49b11b.width,
          0x1
        );
        var _0x33b118 = 0x0;
        for (var _0x946ba8 = 0x0; _0x946ba8 < _0x49b11b.width; _0x946ba8++) {
          var _0xca348c = 0x4 * _0x946ba8 + 0x3;
          if (0x7f < _0x2997e9.data[_0xca348c]) {
            _0x33b118++;
          } else if (0x80 > _0x2997e9.data[_0xca348c] && _0x33b118) {
            this.widthMap.push(_0x33b118);
            this.indices.push(_0x946ba8 - _0x33b118);
            _0x33b118 = 0x0;
          }
        }
        this.widthMap.push(_0x33b118);
        this.indices.push(_0x946ba8 - _0x33b118);
      },
    });
    ig.Font.ALIGN = {
      LEFT: 0x0,
      RIGHT: 0x1,
      CENTER: 0x2,
    };
  });
ig.baked = true;
ig.module("impact.sound").defines(function () {
  ig.SoundManager = ig.Class.extend({
    clips: {},
    volume: 0x1,
    format: null,
    init: function () {
      if (!ig.Sound.enabled || !window.Audio) {
        ig.Sound.enabled = false;
      } else {
        var _0x3e3fba = new Audio();
        for (
          var _0xa5640e = 0x0;
          _0xa5640e < ig.Sound.use.length;
          _0xa5640e++
        ) {
          var _0x103352 = ig.Sound.use[_0xa5640e];
          if (_0x3e3fba.canPlayType(_0x103352.mime)) {
            this.format = _0x103352;
            break;
          }
        }
        if (!this.format) {
          ig.Sound.enabled = false;
        }
        if (ig.Sound.enabled && ig.Sound.useWebAudio) {
          this.audioContext = new AudioContext();
          this.boundWebAudioUnlock = this.unlockWebAudio.bind(this);
          ig.system.canvas.addEventListener(
            "touchstart",
            this.boundWebAudioUnlock,
            false
          );
          ig.system.canvas.addEventListener(
            "mousedown",
            this.boundWebAudioUnlock,
            false
          );
        }
      }
    },
    unlockWebAudio: function () {
      ig.system.canvas.removeEventListener(
        "touchstart",
        this.boundWebAudioUnlock,
        false
      );
      ig.system.canvas.removeEventListener(
        "mousedown",
        this.boundWebAudioUnlock,
        false
      );
      var _0x10d898 = this.audioContext.createBuffer(0x1, 0x1, 0x5622);
      var _0x3c4e91 = this.audioContext.createBufferSource();
      _0x3c4e91.buffer = _0x10d898;
      _0x3c4e91.connect(this.audioContext.destination);
      _0x3c4e91.start(0x0);
    },
    load: function (_0x7c67e, _0x1f3d7c, _0x27dde1) {
      return _0x1f3d7c && ig.Sound.useWebAudio
        ? this.loadWebAudio(_0x7c67e, _0x1f3d7c, _0x27dde1)
        : this.loadHTML5Audio(_0x7c67e, _0x1f3d7c, _0x27dde1);
    },
    loadWebAudio: function (_0x3f4304, _0x551a05, _0x3b3806) {
      _0x551a05 =
        ig.prefix + _0x3f4304.replace(/[^\.]+$/, this.format.ext) + ig.nocache;
      if (this.clips[_0x3f4304]) {
        return this.clips[_0x3f4304];
      }
      var _0x4f2fa4 = new ig.Sound.WebAudioSource();
      this.clips[_0x3f4304] = _0x4f2fa4;
      var _0x427d63 = new XMLHttpRequest();
      _0x427d63.open("GET", _0x551a05, true);
      _0x427d63.responseType = "arraybuffer";
      var _0x39e2ff = this;
      _0x427d63.onload = function (_0x2411e4) {
        _0x39e2ff.audioContext.decodeAudioData(
          _0x427d63.response,
          function (_0x5a75ee) {
            _0x4f2fa4.buffer = _0x5a75ee;
            if (_0x3b3806) {
              _0x3b3806(_0x3f4304, true, _0x2411e4);
            }
          },
          function (_0x370e8b) {
            if (_0x3b3806) {
              _0x3b3806(_0x3f4304, false, _0x370e8b);
            }
          }
        );
      };
      _0x427d63.onerror = function (_0x538363) {
        if (_0x3b3806) {
          _0x3b3806(_0x3f4304, false, _0x538363);
        }
      };
      _0x427d63.send();
      return _0x4f2fa4;
    },
    loadHTML5Audio: function (_0x2159d5, _0x4d8a28, _0x57c8a6) {
      var _0x4784f4 =
        ig.prefix + _0x2159d5.replace(/[^\.]+$/, this.format.ext) + ig.nocache;
      if (this.clips[_0x2159d5]) {
        if (this.clips[_0x2159d5] instanceof ig.Sound.WebAudioSource) {
          return this.clips[_0x2159d5];
        }
        if (_0x4d8a28 && this.clips[_0x2159d5].length < ig.Sound.channels) {
          for (
            _0x4d8a28 = this.clips[_0x2159d5].length;
            _0x4d8a28 < ig.Sound.channels;
            _0x4d8a28++
          ) {
            var _0x103486 = new Audio(_0x4784f4);
            _0x103486.load();
            this.clips[_0x2159d5].push(_0x103486);
          }
        }
        return this.clips[_0x2159d5][0x0];
      }
      var _0xd4d8fd = new Audio(_0x4784f4);
      if (_0x57c8a6) {
        if (ig.ua.mobile) {
          setTimeout(function () {
            _0x57c8a6(_0x2159d5, true, null);
          }, 0x0);
        } else {
          _0xd4d8fd.addEventListener(
            "canplaythrough",
            function _0x11758f(_0x36fcdc) {
              _0xd4d8fd.removeEventListener("canplaythrough", _0x11758f, false);
              _0x57c8a6(_0x2159d5, true, _0x36fcdc);
            },
            false
          );
          _0xd4d8fd.addEventListener(
            "error",
            function (_0x2b11bc) {
              _0x57c8a6(_0x2159d5, false, _0x2b11bc);
            },
            false
          );
        }
      }
      _0xd4d8fd.preload = "auto";
      _0xd4d8fd.load();
      this.clips[_0x2159d5] = [_0xd4d8fd];
      if (_0x4d8a28) {
        for (_0x4d8a28 = 0x1; _0x4d8a28 < ig.Sound.channels; _0x4d8a28++) {
          _0x103486 = new Audio(_0x4784f4);
          _0x103486.load();
          this.clips[_0x2159d5].push(_0x103486);
        }
      }
      return _0xd4d8fd;
    },
    get: function (_0x25c447) {
      if (
        (_0x25c447 = this.clips[_0x25c447]) &&
        _0x25c447 instanceof ig.Sound.WebAudioSource
      ) {
        return _0x25c447;
      }
      var _0x85a42 = 0x0;
      for (var _0x259a89; (_0x259a89 = _0x25c447[_0x85a42++]); ) {
        if (_0x259a89.paused || _0x259a89.ended) {
          if (_0x259a89.ended) {
            _0x259a89.currentTime = 0x0;
          }
          return _0x259a89;
        }
      }
      _0x25c447[0x0].pause();
      _0x25c447[0x0].currentTime = 0x0;
      return _0x25c447[0x0];
    },
  });
  ig.Music = ig.Class.extend({
    tracks: [],
    namedTracks: {},
    currentTrack: null,
    currentIndex: 0x0,
    random: false,
    _volume: 0x1,
    _loop: false,
    _fadeInterval: 0x0,
    _fadeTimer: null,
    _endedCallbackBound: null,
    init: function () {
      this._endedCallbackBound = this._endedCallback.bind(this);
      Object.defineProperty(this, "volume", {
        get: this.getVolume.bind(this),
        set: this.setVolume.bind(this),
      });
      Object.defineProperty(this, "loop", {
        get: this.getLooping.bind(this),
        set: this.setLooping.bind(this),
      });
    },
    add: function (_0x50d035, _0x211814) {
      if (ig.Sound.enabled) {
        var _0x3b5cce =
          _0x50d035 instanceof ig.Sound ? _0x50d035.path : _0x50d035;
        var _0x25f30c = ig.soundManager.load(_0x3b5cce, false);
        if (_0x25f30c instanceof ig.Sound.WebAudioSource) {
          ig.system.stopRunLoop();
          throw (
            "Sound '" +
            _0x3b5cce +
            "' loaded as Multichannel but used for Music. Set the multiChannel param to false when loading, e.g.: new ig.Sound(path, false)"
          );
        }
        _0x25f30c.loop = this._loop;
        _0x25f30c.volume = this._volume;
        _0x25f30c.addEventListener("ended", this._endedCallbackBound, false);
        this.tracks.push(_0x25f30c);
        if (_0x211814) {
          this.namedTracks[_0x211814] = _0x25f30c;
        }
        if (!this.currentTrack) {
          this.currentTrack = _0x25f30c;
        }
      }
    },
    next: function () {
      if (this.tracks.length) {
        this.stop();
        this.currentIndex = this.random
          ? Math.floor(Math.random() * this.tracks.length)
          : (this.currentIndex + 0x1) % this.tracks.length;
        this.currentTrack = this.tracks[this.currentIndex];
        this.play();
      }
    },
    pause: function () {
      if (this.currentTrack) {
        this.currentTrack.pause();
      }
    },
    stop: function () {
      if (this.currentTrack) {
        this.currentTrack.pause();
        this.currentTrack.currentTime = 0x0;
      }
    },
    play: function (_0x48af5e) {
      if (_0x48af5e && this.namedTracks[_0x48af5e]) {
        _0x48af5e = this.namedTracks[_0x48af5e];
        if (_0x48af5e != this.currentTrack) {
          this.stop();
          this.currentTrack = _0x48af5e;
        }
      } else {
        if (!this.currentTrack) {
          return;
        }
      }
      this.currentTrack.play();
    },
    getLooping: function () {
      return this._loop;
    },
    setLooping: function (_0x999a5c) {
      this._loop = _0x999a5c;
      for (var _0x18422f in this.tracks)
        this.tracks[_0x18422f].loop = _0x999a5c;
    },
    getVolume: function () {
      return this._volume;
    },
    setVolume: function (_0x2d9552) {
      this._volume = _0x2d9552.limit(0x0, 0x1);
      for (var _0x1a6e4d in this.tracks)
        this.tracks[_0x1a6e4d].volume = this._volume;
    },
    fadeOut: function (_0x588fd5) {
      if (this.currentTrack) {
        clearInterval(this._fadeInterval);
        this._fadeTimer = new ig.Timer(_0x588fd5);
        this._fadeInterval = setInterval(this._fadeStep.bind(this), 0x32);
      }
    },
    _fadeStep: function () {
      var _0x35ee96 =
        this._fadeTimer
          .delta()
          .map(-this._fadeTimer.target, 0x0, 0x1, 0x0)
          .limit(0x0, 0x1) * this._volume;
      if (0.01 >= _0x35ee96) {
        this.stop();
        this.currentTrack.volume = this._volume;
        clearInterval(this._fadeInterval);
      } else {
        this.currentTrack.volume = _0x35ee96;
      }
    },
    _endedCallback: function () {
      if (this._loop) {
        this.play();
      } else {
        this.next();
      }
    },
  });
  ig.Sound = ig.Class.extend({
    path: "",
    volume: 0x1,
    currentClip: null,
    multiChannel: true,
    _loop: false,
    init: function (_0x6b1fd3, _0x2bea95) {
      this.path = _0x6b1fd3;
      this.multiChannel = false !== _0x2bea95;
      Object.defineProperty(this, "loop", {
        get: this.getLooping.bind(this),
        set: this.setLooping.bind(this),
      });
      this.load();
    },
    getLooping: function () {
      return this._loop;
    },
    setLooping: function (_0x134cbf) {
      this._loop = _0x134cbf;
      if (this.currentClip) {
        this.currentClip.loop = _0x134cbf;
      }
    },
    load: function (_0x226217) {
      if (ig.Sound.enabled) {
        if (ig.ready) {
          ig.soundManager.load(this.path, this.multiChannel, _0x226217);
        } else {
          ig.addResource(this);
        }
      } else if (_0x226217) {
        _0x226217(this.path, true);
      }
    },
    play: function () {
      if (ig.Sound.enabled) {
        this.currentClip = ig.soundManager.get(this.path);
        this.currentClip.loop = this._loop;
        this.currentClip.volume = ig.soundManager.volume * this.volume;
        this.currentClip.play();
      }
    },
    stop: function () {
      if (this.currentClip) {
        this.currentClip.pause();
        this.currentClip.currentTime = 0x0;
      }
    },
  });
  ig.Sound.WebAudioSource = ig.Class.extend({
    sources: [],
    gain: null,
    buffer: null,
    _loop: false,
    init: function () {
      this.gain = ig.soundManager.audioContext.createGain();
      this.gain.connect(ig.soundManager.audioContext.destination);
      Object.defineProperty(this, "loop", {
        get: this.getLooping.bind(this),
        set: this.setLooping.bind(this),
      });
      Object.defineProperty(this, "volume", {
        get: this.getVolume.bind(this),
        set: this.setVolume.bind(this),
      });
    },
    play: function () {
      if (this.buffer) {
        var _0x41e38f = ig.soundManager.audioContext.createBufferSource();
        _0x41e38f.buffer = this.buffer;
        _0x41e38f.connect(this.gain);
        _0x41e38f.loop = this._loop;
        var _0x3b0922 = this;
        this.sources.push(_0x41e38f);
        _0x41e38f.onended = function () {
          _0x3b0922.sources.erase(_0x41e38f);
        };
        _0x41e38f.start(0x0);
      }
    },
    pause: function () {
      for (var _0x1ba5f5 = 0x0; _0x1ba5f5 < this.sources.length; _0x1ba5f5++) {
        try {
          this.sources[_0x1ba5f5].stop();
        } catch (_0x2c0a36) {}
      }
    },
    getLooping: function () {
      return this._loop;
    },
    setLooping: function (_0x2eb867) {
      this._loop = _0x2eb867;
      for (var _0x2bdaae = 0x0; _0x2bdaae < this.sources.length; _0x2bdaae++) {
        this.sources[_0x2bdaae].loop = _0x2eb867;
      }
    },
    getVolume: function () {
      return this.gain.gain.value;
    },
    setVolume: function (_0x496950) {
      this.gain.gain.value = _0x496950;
    },
  });
  ig.Sound.FORMAT = {
    MP3: {
      ext: "mp3",
      mime: "audio/mpeg",
    },
    M4A: {
      ext: "m4a",
      mime: "audio/mp4; codecs=mp4a.40.2",
    },
    OGG: {
      ext: "ogg",
      mime: "audio/ogg; codecs=vorbis",
    },
    WEBM: {
      ext: "webm",
      mime: "audio/webm; codecs=vorbis",
    },
    CAF: {
      ext: "caf",
      mime: "audio/x-caf",
    },
  };
  ig.Sound.use = [ig.Sound.FORMAT.OGG, ig.Sound.FORMAT.MP3];
  ig.Sound.channels = 0x4;
  ig.Sound.enabled = true;
  ig.normalizeVendorAttribute(window, "AudioContext");
  ig.Sound.useWebAudio = !!window.AudioContext;
});
ig.baked = true;
ig.module("impact.loader")
  .requires("impact.image", "impact.font", "impact.sound")
  .defines(function () {
    ig.Loader = ig.Class.extend({
      resources: [],
      gameClass: null,
      status: 0x0,
      done: false,
      _unloaded: [],
      _drawStatus: 0x0,
      _intervalId: 0x0,
      _loadCallbackBound: null,
      init: function (_0x44db13, _0x55313f) {
        this.gameClass = _0x44db13;
        this.resources = _0x55313f;
        this._loadCallbackBound = this._loadCallback.bind(this);
        for (
          var _0x2b37b4 = 0x0;
          _0x2b37b4 < this.resources.length;
          _0x2b37b4++
        ) {
          this._unloaded.push(this.resources[_0x2b37b4].path);
        }
      },
      load: function () {
        if (this.resources.length) {
          for (
            var _0x199483 = 0x0;
            _0x199483 < this.resources.length;
            _0x199483++
          ) {
            this.loadResource(this.resources[_0x199483]);
          }
          this._intervalId = setInterval(this.draw.bind(this), 0x10);
        } else {
          this.end();
        }
      },
      loadResource: function (_0x272629) {
        _0x272629.load(this._loadCallbackBound);
      },
      end: function () {
        if (!this.done) {
          this.done = true;
          clearInterval(this._intervalId);
        }
      },
      _loadCallback: function (_0x566a48, _0x3c2cb7) {
        if (_0x3c2cb7) {
          this._unloaded.erase(_0x566a48);
        } else {
          throw "Failed to load resource: " + _0x566a48;
        }
        this.status = 0x1 - this._unloaded.length / this.resources.length;
        if (0x0 == this._unloaded.length) {
          setTimeout(this.end.bind(this), 0xfa);
        }
      },
    });
  });
ig.baked = true;
ig.module("impact.timer").defines(function () {
  ig.Timer = ig.Class.extend({
    target: 0x0,
    base: 0x0,
    last: 0x0,
    pausedAt: 0x0,
    init: function (_0x3b8ec6) {
      this.last = this.base = ig.Timer.time;
      this.target = _0x3b8ec6 || 0x0;
    },
    set: function (_0x571fc8) {
      this.target = _0x571fc8 || 0x0;
      this.base = ig.Timer.time;
      this.pausedAt = 0x0;
    },
    reset: function () {
      this.base = ig.Timer.time;
      this.pausedAt = 0x0;
    },
    tick: function () {
      var _0x235753 = ig.Timer.time - this.last;
      this.last = ig.Timer.time;
      return this.pausedAt ? 0x0 : _0x235753;
    },
    delta: function () {
      return (this.pausedAt || ig.Timer.time) - this.base - this.target;
    },
    pause: function () {
      if (!this.pausedAt) {
        this.pausedAt = ig.Timer.time;
      }
    },
    unpause: function () {
      if (this.pausedAt) {
        this.base += ig.Timer.time - this.pausedAt;
        this.pausedAt = 0x0;
      }
    },
  });
  ig.Timer._last = 0x0;
  ig.Timer.time = Number.MIN_VALUE;
  ig.Timer.timeScale = 0x1;
  ig.Timer.maxStep = 0.05;
  ig.Timer.step = function () {
    var _0x42833a = Date.now();
    ig.Timer.time +=
      Math.min((_0x42833a - ig.Timer._last) / 0x3e8, ig.Timer.maxStep) *
      ig.Timer.timeScale;
    ig.Timer._last = _0x42833a;
  };
});
ig.baked = true;
ig.module("impact.system")
  .requires("impact.timer", "impact.image")
  .defines(function () {
    ig.System = ig.Class.extend({
      fps: 0x1e,
      width: 0x140,
      height: 0xf0,
      realWidth: 0x140,
      realHeight: 0xf0,
      scale: 0x1,
      tick: 0x0,
      animationId: 0x0,
      newGameClass: null,
      running: false,
      delegate: null,
      clock: null,
      canvas: null,
      context: null,
      init: function (_0x18c8b2, _0xf7e6ae, _0x292de8, _0x3c11b9, _0x2a1336) {
        this.fps = _0xf7e6ae;
        this.clock = new ig.Timer();
        this.canvas = ig.$(_0x18c8b2);
        this.resize(_0x292de8, _0x3c11b9, _0x2a1336);
        this.context = this.canvas.getContext("2d");
        this.getDrawPos = ig.System.drawMode;
        if (0x1 != this.scale) {
          ig.System.scaleMode = ig.System.SCALE.CRISP;
        }
        ig.System.scaleMode(this.canvas, this.context);
      },
      resize: function (_0x36a805, _0x5c43a3, _0x453bb4) {
        this.width = _0x36a805;
        this.height = _0x5c43a3;
        this.scale = _0x453bb4 || this.scale;
        this.realWidth = this.width * this.scale;
        this.realHeight = this.height * this.scale;
        this.canvas.width = this.realWidth;
        this.canvas.height = this.realHeight;
      },
      setGame: function (_0x509085) {
        if (this.running) {
          this.newGameClass = _0x509085;
        } else {
          this.setGameNow(_0x509085);
        }
      },
      setGameNow: function (_0x1bf357) {
        ig.game = new _0x1bf357();
        ig.system.setDelegate(ig.game);
      },
      setDelegate: function (_0x43246c) {
        if ("function" == typeof _0x43246c.run) {
          this.delegate = _0x43246c;
          this.startRunLoop();
        } else {
          throw "System.setDelegate: No run() function in object";
        }
      },
      stopRunLoop: function () {
        ig.clearAnimation(this.animationId);
        this.running = false;
      },
      startRunLoop: function () {
        this.stopRunLoop();
        this.animationId = ig.setAnimation(this.run.bind(this));
        this.running = true;
      },
      clear: function (_0x2f927d) {
        this.context.fillStyle = _0x2f927d;
        this.context.fillRect(0x0, 0x0, this.realWidth, this.realHeight);
      },
      run: function () {
        ig.Timer.step();
        this.tick = this.clock.tick();
        this.delegate.run();
        ig.input.clearPressed();
        if (this.newGameClass) {
          this.setGameNow(this.newGameClass);
          this.newGameClass = null;
        }
      },
      getDrawPos: null,
    });
    ig.System.DRAW = {
      AUTHENTIC: function (_0x44de9d) {
        return Math.round(_0x44de9d) * this.scale;
      },
      SMOOTH: function (_0x160426) {
        return Math.round(_0x160426 * this.scale);
      },
      SUBPIXEL: function (_0xb6e1a4) {
        return _0xb6e1a4 * this.scale;
      },
    };
    ig.System.drawMode = ig.System.DRAW.SMOOTH;
    ig.System.SCALE = {
      CRISP: function (_0x483b77, _0x188723) {
        ig.setVendorAttribute(_0x188723, "imageSmoothingEnabled", false);
        _0x483b77.style.imageRendering = "-moz-crisp-edges";
        _0x483b77.style.imageRendering = "-o-crisp-edges";
        _0x483b77.style.imageRendering = "-webkit-optimize-contrast";
        _0x483b77.style.imageRendering = "crisp-edges";
        _0x483b77.style.msInterpolationMode = "nearest-neighbor";
      },
      SMOOTH: function (_0x5425c5, _0x54b956) {
        ig.setVendorAttribute(_0x54b956, "imageSmoothingEnabled", true);
        _0x5425c5.style.imageRendering = "";
        _0x5425c5.style.msInterpolationMode = "";
      },
    };
    ig.System.scaleMode = ig.System.SCALE.SMOOTH;
  });
ig.baked = true;
ig.module("impact.input").defines(function () {
  ig.KEY = {
    MOUSE1: -0x1,
    MOUSE2: -0x3,
    MWHEEL_UP: -0x4,
    MWHEEL_DOWN: -0x5,
    BACKSPACE: 0x8,
    TAB: 0x9,
    ENTER: 0xd,
    PAUSE: 0x13,
    CAPS: 0x14,
    ESC: 0x1b,
    SPACE: 0x20,
    PAGE_UP: 0x21,
    PAGE_DOWN: 0x22,
    END: 0x23,
    HOME: 0x24,
    LEFT_ARROW: 0x25,
    UP_ARROW: 0x26,
    RIGHT_ARROW: 0x27,
    DOWN_ARROW: 0x28,
    INSERT: 0x2d,
    DELETE: 0x2e,
    _0: 0x30,
    _1: 0x31,
    _2: 0x32,
    _3: 0x33,
    _4: 0x34,
    _5: 0x35,
    _6: 0x36,
    _7: 0x37,
    _8: 0x38,
    _9: 0x39,
    A: 0x41,
    B: 0x42,
    C: 0x43,
    D: 0x44,
    E: 0x45,
    F: 0x46,
    G: 0x47,
    H: 0x48,
    I: 0x49,
    J: 0x4a,
    K: 0x4b,
    L: 0x4c,
    M: 0x4d,
    N: 0x4e,
    O: 0x4f,
    P: 0x50,
    Q: 0x51,
    R: 0x52,
    S: 0x53,
    T: 0x54,
    U: 0x55,
    V: 0x56,
    W: 0x57,
    X: 0x58,
    Y: 0x59,
    Z: 0x5a,
    NUMPAD_0: 0x60,
    NUMPAD_1: 0x61,
    NUMPAD_2: 0x62,
    NUMPAD_3: 0x63,
    NUMPAD_4: 0x64,
    NUMPAD_5: 0x65,
    NUMPAD_6: 0x66,
    NUMPAD_7: 0x67,
    NUMPAD_8: 0x68,
    NUMPAD_9: 0x69,
    MULTIPLY: 0x6a,
    ADD: 0x6b,
    SUBSTRACT: 0x6d,
    DECIMAL: 0x6e,
    DIVIDE: 0x6f,
    F1: 0x70,
    F2: 0x71,
    F3: 0x72,
    F4: 0x73,
    F5: 0x74,
    F6: 0x75,
    F7: 0x76,
    F8: 0x77,
    F9: 0x78,
    F10: 0x79,
    F11: 0x7a,
    F12: 0x7b,
    SHIFT: 0x10,
    CTRL: 0x11,
    ALT: 0x12,
    PLUS: 0xbb,
    COMMA: 0xbc,
    MINUS: 0xbd,
    PERIOD: 0xbe,
  };
  ig.Input = ig.Class.extend({
    bindings: {},
    actions: {},
    presses: {},
    locks: {},
    delayedKeyup: {},
    isUsingMouse: false,
    isUsingKeyboard: false,
    isUsingAccelerometer: false,
    mouse: {
      x: 0x0,
      y: 0x0,
    },
    accel: {
      x: 0x0,
      y: 0x0,
      z: 0x0,
    },
    initMouse: function () {
      if (!this.isUsingMouse) {
        this.isUsingMouse = true;
        ig.system.canvas.addEventListener(
          "wheel",
          this.mousewheel.bind(this),
          false
        );
        ig.system.canvas.addEventListener(
          "contextmenu",
          this.contextmenu.bind(this),
          false
        );
        ig.system.canvas.addEventListener(
          "mousedown",
          this.keydown.bind(this),
          false
        );
        ig.system.canvas.addEventListener(
          "mouseup",
          this.keyup.bind(this),
          false
        );
        ig.system.canvas.addEventListener(
          "mousemove",
          this.mousemove.bind(this),
          false
        );
        if (ig.ua.touchDevice) {
          ig.system.canvas.addEventListener(
            "touchstart",
            this.keydown.bind(this),
            false
          );
          ig.system.canvas.addEventListener(
            "touchend",
            this.keyup.bind(this),
            false
          );
          ig.system.canvas.addEventListener(
            "touchcancel",
            this.keyup.bind(this),
            false
          );
          ig.system.canvas.addEventListener(
            "touchmove",
            this.mousemove.bind(this),
            false
          );
          ig.system.canvas.addEventListener(
            "MSPointerDown",
            this.keydown.bind(this),
            false
          );
          ig.system.canvas.addEventListener(
            "MSPointerUp",
            this.keyup.bind(this),
            false
          );
          ig.system.canvas.addEventListener(
            "MSPointerMove",
            this.mousemove.bind(this),
            false
          );
          ig.system.canvas.style.msTouchAction = "none";
        }
      }
    },
    initKeyboard: function () {
      if (!this.isUsingKeyboard) {
        this.isUsingKeyboard = true;
        window.addEventListener("keydown", this.keydown.bind(this), false);
        window.addEventListener("keyup", this.keyup.bind(this), false);
      }
    },
    initAccelerometer: function () {
      if (!this.isUsingAccelerometer) {
        this.isUsingAccelerometer = true;
        window.addEventListener(
          "devicemotion",
          this.devicemotion.bind(this),
          false
        );
      }
    },
    mousewheel: function (_0xe7de35) {
      var _0x2def81 =
        this.bindings[
          0x0 > _0xe7de35.deltaY ? ig.KEY.MWHEEL_UP : ig.KEY.MWHEEL_DOWN
        ];
      if (_0x2def81) {
        this.actions[_0x2def81] = true;
        this.presses[_0x2def81] = true;
        this.delayedKeyup[_0x2def81] = true;
        _0xe7de35.stopPropagation();
        _0xe7de35.preventDefault();
      }
    },
    mousemove: function (_0x69c7e3) {
      var _0x497844 =
        ig.system.scale *
        ((ig.system.canvas.offsetWidth || ig.system.realWidth) /
          ig.system.realWidth);
      var _0x56a3de = {
        left: 0x0,
        top: 0x0,
      };
      if (ig.system.canvas.getBoundingClientRect) {
        _0x56a3de = ig.system.canvas.getBoundingClientRect();
      }
      _0x69c7e3 = _0x69c7e3.touches ? _0x69c7e3.touches[0x0] : _0x69c7e3;
      this.mouse.x = (_0x69c7e3.clientX - _0x56a3de.left) / _0x497844;
      this.mouse.y = (_0x69c7e3.clientY - _0x56a3de.top) / _0x497844;
    },
    contextmenu: function (_0x769a91) {
      if (this.bindings[ig.KEY.MOUSE2]) {
        _0x769a91.stopPropagation();
        _0x769a91.preventDefault();
      }
    },
    keydown: function (_0x28173e) {
      var _0x118f6f = _0x28173e.target.tagName;
      if (!("INPUT" == _0x118f6f || "TEXTAREA" == _0x118f6f)) {
        _0x118f6f =
          "keydown" == _0x28173e.type
            ? _0x28173e.keyCode
            : 0x2 == _0x28173e.button
            ? ig.KEY.MOUSE2
            : ig.KEY.MOUSE1;
        if (0x0 > _0x118f6f && !ig.ua.mobile) {
          window.focus();
        }
        if ("touchstart" == _0x28173e.type || "mousedown" == _0x28173e.type) {
          this.mousemove(_0x28173e);
        }
        if ((_0x118f6f = this.bindings[_0x118f6f])) {
          this.actions[_0x118f6f] = true;
          if (!this.locks[_0x118f6f]) {
            this.presses[_0x118f6f] = true;
            this.locks[_0x118f6f] = true;
          }
          _0x28173e.preventDefault();
        }
      }
    },
    keyup: function (_0x4cdba7) {
      var _0x39559d = _0x4cdba7.target.tagName;
      if (!("INPUT" == _0x39559d || "TEXTAREA" == _0x39559d)) {
        if (
          (_0x39559d =
            this.bindings[
              "keyup" == _0x4cdba7.type
                ? _0x4cdba7.keyCode
                : 0x2 == _0x4cdba7.button
                ? ig.KEY.MOUSE2
                : ig.KEY.MOUSE1
            ])
        ) {
          this.delayedKeyup[_0x39559d] = true;
          _0x4cdba7.preventDefault();
        }
      }
    },
    devicemotion: function (_0x1f5726) {
      this.accel = _0x1f5726.accelerationIncludingGravity;
    },
    bind: function (_0x166f94, _0x58f6e9) {
      if (0x0 > _0x166f94) {
        this.initMouse();
      } else if (0x0 < _0x166f94) {
        this.initKeyboard();
      }
      this.bindings[_0x166f94] = _0x58f6e9;
    },
    bindTouch: function (_0x33e270, _0x177d0f) {
      var _0xf2b0f3 = ig.$(_0x33e270);
      var _0x4380a3 = this;
      _0xf2b0f3.addEventListener(
        "touchstart",
        function (_0x81929) {
          _0x4380a3.touchStart(_0x81929, _0x177d0f);
        },
        false
      );
      _0xf2b0f3.addEventListener(
        "touchend",
        function (_0x517dab) {
          _0x4380a3.touchEnd(_0x517dab, _0x177d0f);
        },
        false
      );
      _0xf2b0f3.addEventListener(
        "MSPointerDown",
        function (_0x4812b9) {
          _0x4380a3.touchStart(_0x4812b9, _0x177d0f);
        },
        false
      );
      _0xf2b0f3.addEventListener(
        "MSPointerUp",
        function (_0x1ebcda) {
          _0x4380a3.touchEnd(_0x1ebcda, _0x177d0f);
        },
        false
      );
    },
    unbind: function (_0x2a6ac4) {
      this.delayedKeyup[this.bindings[_0x2a6ac4]] = true;
      this.bindings[_0x2a6ac4] = null;
    },
    unbindAll: function () {
      this.bindings = {};
      this.actions = {};
      this.presses = {};
      this.locks = {};
      this.delayedKeyup = {};
    },
    state: function (_0x18bfcf) {
      return this.actions[_0x18bfcf];
    },
    pressed: function (_0x4739a9) {
      return this.presses[_0x4739a9];
    },
    released: function (_0x2c15f9) {
      return !!this.delayedKeyup[_0x2c15f9];
    },
    clearPressed: function () {
      for (var _0x3e665a in this.delayedKeyup) {
        this.actions[_0x3e665a] = false;
        this.locks[_0x3e665a] = false;
      }
      this.delayedKeyup = {};
      this.presses = {};
    },
    touchStart: function (_0x4e61e3, _0x2e0524) {
      this.actions[_0x2e0524] = true;
      this.presses[_0x2e0524] = true;
      _0x4e61e3.stopPropagation();
      _0x4e61e3.preventDefault();
      return false;
    },
    touchEnd: function (_0x483fd8, _0x34a9a5) {
      this.delayedKeyup[_0x34a9a5] = true;
      _0x483fd8.stopPropagation();
      _0x483fd8.preventDefault();
      return false;
    },
  });
});
ig.baked = true;
ig.module("impact.impact")
  .requires(
    "dom.ready",
    "impact.loader",
    "impact.system",
    "impact.input",
    "impact.sound"
  )
  .defines(function () {
    ig.main = function (
      _0x3ba3b7,
      _0x44fd5b,
      _0x3d6302,
      _0x48e084,
      _0x25e38c,
      _0x432627,
      _0x1aa465
    ) {
      ig.system = new ig.System(
        _0x3ba3b7,
        _0x3d6302,
        _0x48e084,
        _0x25e38c,
        _0x432627 || 0x1
      );
      ig.input = new ig.Input();
      ig.soundManager = new ig.SoundManager();
      ig.music = new ig.Music();
      ig.ready = true;
      new (_0x1aa465 || ig.Loader)(_0x44fd5b, ig.resources).load();
    };
  });
ig.baked = true;
ig.module("plugins.patches.fps-limit-patch")
  .requires("impact.system", "impact.impact")
  .defines(function () {
    ig.System.inject({
      fps: 0x3c,
    });
    if (ig.system) {
      ig.system.fps = 0x3c;
    }
    ig.normalizeVendorAttribute(window, "requestAnimationFrame");
    if (window.requestAnimationFrame) {
      var _0x39bd84 = 0x1;
      var _0x96e891 = {};
      window.ig.setAnimation = function (_0x2edbff, _0x4f17d3) {
        var _0x24f87c = _0x39bd84++;
        _0x96e891[_0x24f87c] = true;
        var _0x1e0d4c = 0x3c;
        var _0x314211 = 0x0;
        var _0x103f55 = 0x0;
        var _0x1f4263 = 0x0;
        var _0x3af821 = 0x0;
        var _0x3492fc = function () {
          if (_0x96e891[_0x24f87c]) {
            timestamp = Date.now();
            _0x103f55 = _0x314211;
            _0x314211 = timestamp;
            _0x3af821 = _0x314211 - _0x103f55;
            _0x1e0d4c = 0.8 * _0x1e0d4c + 0.2 * (0x3e8 / _0x3af821);
            if (0x3c < _0x1e0d4c && 0x3f <= _0x1e0d4c) {
              _0x1f4263 = Math.min(
                Math.max(33.333333333333336 + _0x103f55 - timestamp, 0x0),
                16.666666666666668
              );
              setTimeout(function () {
                window.requestAnimationFrame(_0x3492fc, _0x4f17d3);
              }, _0x1f4263);
              _0x2edbff(timestamp);
            } else {
              window.requestAnimationFrame(_0x3492fc, _0x4f17d3);
              _0x2edbff();
            }
          }
        };
        window.requestAnimationFrame(_0x3492fc, _0x4f17d3);
        return _0x24f87c;
      };
      window.ig.clearAnimation = function (_0x272af5) {
        delete _0x96e891[_0x272af5];
      };
    } else {
      window.ig.setAnimation = function (_0x4c0766) {
        return window.setInterval(_0x4c0766, 16.666666666666668);
      };
      window.ig.clearAnimation = function (_0x54dc45) {
        window.clearInterval(_0x54dc45);
      };
    }
  });
ig.baked = true;
ig.module("plugins.patches.timer-patch")
  .requires("impact.timer")
  .defines(function () {
    ig.Timer.step = function () {
      var _0x157408 = Date.now();
      var _0x144621 = (_0x157408 - ig.Timer._last) / 0x3e8;
      if (0x0 > _0x144621) {
        _0x144621 = 0x0;
      }
      ig.Timer.time +=
        Math.min(_0x144621, ig.Timer.maxStep) * ig.Timer.timeScale;
      ig.Timer._last = _0x157408;
    };
  });
ig.baked = true;
ig.module("plugins.patches.user-agent-patch")
  .requires("impact.impact")
  .defines(function () {
    ig.ua.is_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      navigator.userAgent
    );
    ig.ua.is_safari_or_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit/i.test(
      navigator.userAgent
    );
    ig.ua.iOS6_tag = /OS 6_/i.test(navigator.userAgent);
    ig.ua.iOS6 = (ig.ua.iPhone || ig.ua.iPad) && ig.ua.iOS6_tag;
    ig.ua.iOSgt5 =
      ig.ua.iOS &&
      0x5 < parseInt(navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[0x1]);
    ig.ua.HTCONE = /HTC_One/i.test(navigator.userAgent);
    ig.ua.Kindle = /Silk/i.test(navigator.userAgent);
    ig.ua.touchDevice =
      "ontouchstart" in window ||
      window.navigator.msMaxTouchPoints ||
      window.navigator.maxTouchPoints;
    ig.ua.is_mac = "MacIntel" === navigator.platform;
    ig.ua.iOS = (ig.ua.touchDevice && ig.ua.is_mac) || ig.ua.iOS;
    ig.ua.mobile =
      ig.ua.iOS ||
      ig.ua.android ||
      ig.ua.iOS6 ||
      ig.ua.winPhone ||
      ig.ua.Kindle ||
      /mobile/i.test(navigator.userAgent);
  });
ig.baked = true;
ig.module("plugins.patches.webkit-image-smoothing-patch").defines(function () {
  if (ig.System) {
    ig.System.SCALE = {
      CRISP: function (_0x9e5eff, _0x5029a7) {
        _0x5029a7.imageSmoothingEnabled =
          _0x5029a7.msImageSmoothingEnabled =
          _0x5029a7.mozImageSmoothingEnabled =
          _0x5029a7.oImageSmoothingEnabled =
            false;
        _0x9e5eff.style.imageRendering = "-moz-crisp-edges";
        _0x9e5eff.style.imageRendering = "-o-crisp-edges";
        _0x9e5eff.style.imageRendering = "-webkit-optimize-contrast";
        _0x9e5eff.style.imageRendering = "crisp-edges";
        _0x9e5eff.style.msInterpolationMode = "nearest-neighbor";
      },
      SMOOTH: function (_0x10d886, _0x4fa107) {
        _0x4fa107.imageSmoothingEnabled =
          _0x4fa107.msImageSmoothingEnabled =
          _0x4fa107.oImageSmoothingEnabled =
            true;
        _0x10d886.style.imageRendering = "";
        _0x10d886.style.msInterpolationMode = "";
      },
    };
    ig.System.scaleMode = ig.System.SCALE.SMOOTH;
  }
});
ig.baked = true;
ig.module("plugins.patches.windowfocus-onMouseDown-patch")
  .requires("impact.input")
  .defines(function () {
    var _0x37646b = false;
    try {
      _0x37646b = window.self !== window.top;
      if (false === _0x37646b) {
        _0x37646b = 0x0 < window.frames.length;
      }
    } catch (_0x3d490c) {
      _0x37646b = true;
    }
    ig.Input.inject({
      keydown: function (_0x3c6f2a) {
        var _0x57ab69 = _0x3c6f2a.target.tagName;
        if (!("INPUT" == _0x57ab69 || "TEXTAREA" == _0x57ab69)) {
          _0x57ab69 =
            "keydown" == _0x3c6f2a.type
              ? _0x3c6f2a.keyCode
              : 0x2 == _0x3c6f2a.button
              ? ig.KEY.MOUSE2
              : ig.KEY.MOUSE1;
          if (_0x37646b && 0x0 > _0x57ab69) {
            window.focus();
          }
          if ("touchstart" == _0x3c6f2a.type || "mousedown" == _0x3c6f2a.type) {
            this.mousemove(_0x3c6f2a);
          }
          if ((_0x57ab69 = this.bindings[_0x57ab69])) {
            this.actions[_0x57ab69] = true;
            if (!this.locks[_0x57ab69]) {
              this.presses[_0x57ab69] = true;
              this.locks[_0x57ab69] = true;
            }
            _0x3c6f2a.stopPropagation();
            _0x3c6f2a.preventDefault();
          }
        }
      },
    });
  });
ig.baked = true;
ig.module("plugins.patches.input-patch")
  .requires("impact.input")
  .defines(function () {
    ig.Input.inject({
      initMouse: function () {
        this.parent();
        ig.system.canvas.addEventListener(
          "mouseleave",
          this.mouseleave.bind(this),
          false
        );
      },
      mousemove: function (_0x3b2b18) {
        this.parent(_0x3b2b18);
        try {
          ig.soundHandler.unlockWebAudio();
        } catch (_0x371476) {}
      },
      mouseleave: function () {
        this.clearState("click");
      },
      keyup: function (_0x5b45d0) {
        this.parent(_0x5b45d0);
        if (ig.visibilityHandler) {
          ig.visibilityHandler.onChange("focus");
        }
        try {
          ig.soundHandler.unlockWebAudio();
        } catch (_0x42e351) {}
      },
      clearState: function (_0x309f73) {
        this.actions[_0x309f73] = false;
      },
      clearAllState: function () {
        for (var _0x3c8257 in this.actions) this.clearState(_0x3c8257);
      },
    });
  });
ig.baked = true;
ig.module("plugins.data.vector").defines(function () {
  Vector2 = function (_0x24f909, _0x4e40c8) {
    this.x = _0x24f909 || 0x0;
    this.y = _0x4e40c8 || 0x0;
  };
  Vector2.prototype = {
    valType: "number",
    neg: function () {
      this.x = -this.x;
      this.y = -this.y;
      return this;
    },
    row: function (_0x215751) {
      if (typeof _0x215751 === this.valType) {
        this.y = _0x215751;
      }
      return this.y;
    },
    col: function (_0x69a6a) {
      if (typeof _0x69a6a === this.valType) {
        this.x = _0x69a6a;
      }
      return this.x;
    },
    add: function (_0x2b5bff) {
      if (_0x2b5bff instanceof Vector2) {
        this.x += _0x2b5bff.x;
        this.y += _0x2b5bff.y;
      } else {
        this.x += _0x2b5bff;
        this.y += _0x2b5bff;
      }
      return this;
    },
    sub: function (_0x4ebb74) {
      if (_0x4ebb74 instanceof Vector2) {
        this.x -= _0x4ebb74.x;
        this.y -= _0x4ebb74.y;
      } else {
        this.x -= _0x4ebb74;
        this.y -= _0x4ebb74;
      }
      return this;
    },
    mul: function (_0x39f8e3) {
      if (_0x39f8e3 instanceof Vector2) {
        this.x *= _0x39f8e3.x;
        this.y *= _0x39f8e3.y;
      } else {
        this.x *= _0x39f8e3;
        this.y *= _0x39f8e3;
      }
      return this;
    },
    div: function (_0x5e0eac) {
      if (_0x5e0eac instanceof Vector2) {
        if (0x0 != _0x5e0eac.x) {
          this.x /= _0x5e0eac.x;
        }
        if (0x0 != _0x5e0eac.y) {
          this.y /= _0x5e0eac.y;
        }
      } else if (0x0 != _0x5e0eac) {
        this.x /= _0x5e0eac;
        this.y /= _0x5e0eac;
      }
      return this;
    },
    equals: function (_0xfa0968) {
      return this.x == _0xfa0968.x && this.y == _0xfa0968.y;
    },
    dot: function (_0xbe4436) {
      return this.x * _0xbe4436.x + this.y * _0xbe4436.y;
    },
    cross: function (_0x631652) {
      return this.x * _0x631652.y - this.y * _0x631652.x;
    },
    length: function () {
      return Math.sqrt(this.dot(this));
    },
    norm: function () {
      return this.divide(this.length());
    },
    min: function () {
      return Math.min(this.x, this.y);
    },
    max: function () {
      return Math.max(this.x, this.y);
    },
    toAngles: function () {
      return -Math.atan2(-this.y, this.x);
    },
    angleTo: function (_0x1e0d60) {
      return Math.acos(
        this.dot(_0x1e0d60) / (this.length() * _0x1e0d60.length())
      );
    },
    toArray: function (_0x3a9da3) {
      return [this.x, this.y].slice(0x0, _0x3a9da3 || 0x2);
    },
    clone: function () {
      return new Vector2(this.x, this.y);
    },
    set: function (_0x3f905d, _0x570c4c) {
      this.x = _0x3f905d;
      this.y = _0x570c4c;
      return this;
    },
    unit: function () {
      var _0x1fa272 = this.length();
      if (0x0 < _0x1fa272) {
        return new Vector2(this.x / _0x1fa272, this.y / _0x1fa272);
      }
      throw "Divide by 0 error in unitVector function of vector:" + this;
    },
    turnRight: function () {
      var _0x35a450 = this.x;
      this.x = -this.y;
      this.y = _0x35a450;
      return this;
    },
    turnLeft: function () {
      var _0x5e0e99 = this.x;
      this.x = this.y;
      this.y = -_0x5e0e99;
      return this;
    },
    rotate: function (_0x22327e) {
      var _0x180e5c = this.clone();
      this.x =
        _0x180e5c.x * Math.cos(_0x22327e) - _0x180e5c.y * Math.sin(_0x22327e);
      this.y =
        _0x180e5c.x * Math.sin(_0x22327e) + _0x180e5c.y * Math.cos(_0x22327e);
      return this;
    },
  };
  Vector2.negative = function (_0x1712d1) {
    return new Vector2(-_0x1712d1.x, -_0x1712d1.y);
  };
  Vector2.add = function (_0x275d53, _0x56d2d7) {
    return _0x56d2d7 instanceof Vector2
      ? new Vector2(_0x275d53.x + _0x56d2d7.x, _0x275d53.y + _0x56d2d7.y)
      : new Vector2(_0x275d53.x + v, _0x275d53.y + v);
  };
  Vector2.subtract = function (_0x44ffd9, _0x2d6243) {
    return _0x2d6243 instanceof Vector2
      ? new Vector2(_0x44ffd9.x - _0x2d6243.x, _0x44ffd9.y - _0x2d6243.y)
      : new Vector2(_0x44ffd9.x - v, _0x44ffd9.y - v);
  };
  Vector2.multiply = function (_0xf442f5, _0x53abd3) {
    return _0x53abd3 instanceof Vector2
      ? new Vector2(_0xf442f5.x * _0x53abd3.x, _0xf442f5.y * _0x53abd3.y)
      : new Vector2(_0xf442f5.x * v, _0xf442f5.y * v);
  };
  Vector2.divide = function (_0x80f891, _0xa26617) {
    return _0xa26617 instanceof Vector2
      ? new Vector2(_0x80f891.x / _0xa26617.x, _0x80f891.y / _0xa26617.y)
      : new Vector2(_0x80f891.x / v, _0x80f891.y / v);
  };
  Vector2.equals = function (_0x26df3d, _0x18b24c) {
    return _0x26df3d.x == _0x18b24c.x && _0x26df3d.y == _0x18b24c.y;
  };
  Vector2.dot = function (_0x69bfcf, _0x5c88a0) {
    return _0x69bfcf.x * _0x5c88a0.x + _0x69bfcf.y * _0x5c88a0.y;
  };
  Vector2.cross = function (_0x109b0d, _0x2b7ecf) {
    return _0x109b0d.x * _0x2b7ecf.y - _0x109b0d.y * _0x2b7ecf.x;
  };
});
ig.baked = true;
ig.module("plugins.data.color-rgb").defines(function () {
  ColorRGB = function (_0x2e90a0, _0x5b7d46, _0x521af9, _0x4070d3) {
    this.r = _0x2e90a0 || 0x0;
    this.g = _0x5b7d46 || 0x0;
    this.b = _0x521af9 || 0x0;
    this.a = _0x4070d3 || 0x0;
  };
  ColorRGB.prototype = {
    setRandomColor: function () {
      this.r = Math.round(0xff * Math.random());
      this.g = Math.round(0xff * Math.random());
      this.b = Math.round(0xff * Math.random());
    },
    getStyle: function () {
      return (
        "rgba(" + this.r + "," + this.g + "," + this.b + "," + this.a + ")"
      );
    },
    getHex: function () {
      var _0x52d566 = this.r.toString(0x10);
      var _0x141e14 = this.g.toString(0x10);
      for (var _0x42cb90 = this.b.toString(0x10); 0x2 > _0x52d566.length; ) {
        _0x52d566 = "0" + _0x52d566;
      }
      for (; 0x2 > _0x141e14.length; ) {
        _0x141e14 = "0" + _0x141e14;
      }
      for (; 0x2 > _0x42cb90.length; ) {
        _0x42cb90 = "0" + _0x42cb90;
      }
      return "#" + _0x52d566 + _0x141e14 + _0x42cb90;
    },
    getInvertedColor: function () {
      return new ColorRGB(
        0xff - this.r,
        0xff - this.g,
        0xff - this.b,
        0xff - this.a
      );
    },
    clone: function () {
      return new ColorRGB(this.r, this.g, this.b, this.a);
    },
  };
});
ig.baked = true;
ig.module("plugins.font.font-info")
  .requires("impact.impact")
  .defines(function () {
    ig.FontInfo = ig.Class.extend({
      fonts: [
        {
          name: "text",
          source: "media/fonts/digitalt",
        },
      ],
      init: function () {
        this.registerCssFont();
      },
      registerCssFont: function () {
        if (0x0 < this.fonts.length) {
          var _0x49932b = document.createElement("style");
          _0x49932b.type = "text/css";
          var _0x120eb9 = "";
          for (
            var _0x4b343f = 0x0;
            _0x4b343f < this.fonts.length;
            _0x4b343f++
          ) {
            var _0x2a6c58 = this.fonts[_0x4b343f];
            var _0x120eb9 =
              _0x120eb9 +
              ("@font-face {font-family: '" +
                _0x2a6c58.name +
                "';src: url('" +
                _0x2a6c58.source +
                ".woff') format('woff'),url('" +
                _0x2a6c58.source +
                ".ttf') format('truetype');}");
          }
          _0x49932b.appendChild(document.createTextNode(_0x120eb9));
          document.head.appendChild(_0x49932b);
        }
      },
      isValid: function () {
        for (var _0x48a2c9 = 0x0; _0x48a2c9 < this.fonts.length; _0x48a2c9++) {
          if (!this._isValidName(this.fonts[_0x48a2c9].source)) {
            return false;
          }
        }
        return true;
      },
      _isValidName: function (_0x129800) {
        return !(-0x1 == _0x129800.search(/^[a-z0-9-\/]+$/));
      },
    });
  });
ig.baked = true;
ig.module("plugins.font.font-loader")
  .requires("impact.impact", "plugins.font.font-info", "impact.loader")
  .defines(function () {
    ig.FontLoader = ig.Class.extend({
      fontInfo: new ig.FontInfo(),
      onload: false,
      onerror: false,
      init: function (_0x4df3b4, _0x3659ae) {
        this.onload = _0x4df3b4;
        this.onerror = _0x3659ae;
      },
      load: function () {
        if (this.fontInfo.isValid()) {
          this._loadByLib();
        } else {
          console.error(
            "Only lowercased alphanumeric and dash are allowed for font file name!. Please check the font path"
          );
        }
      },
      _loadByLib: function () {
        var _0x46c415 = [];
        for (
          var _0x1aacfb = 0x0;
          _0x1aacfb < this.fontInfo.fonts.length;
          _0x1aacfb++
        ) {
          var _0x251c3a = new FontFaceObserver(
            this.fontInfo.fonts[_0x1aacfb].name
          );
          _0x46c415.push(_0x251c3a.load());
        }
        Promise.all(_0x46c415).then(this.onload)["catch"](this.onerror);
      },
    });
    ig.Loader.inject({
      parentLoad: false,
      load: function () {
        this.parentLoad = this.parent;
        new ig.FontLoader(
          this.onFontLoad.bind(this),
          this.onFontError.bind(this)
        ).load();
      },
      onFontLoad: function () {
        this.parentLoad();
      },
      onFontError: function () {
        console.error("Font is not loaded");
        this.parentLoad();
      },
    });
  });
ig.baked = true;
ig.module("plugins.handlers.dom-handler").defines(function () {
  ig.DomHandler = ig.Class.extend({
    version: "1.1.1",
    JQUERYAVAILABLE: false,
    init: function () {
      this.JQUERYAVAILABLE = this._jqueryAvailable();
    },
    _jqueryAvailable: function () {
      return "undefined" !== typeof jQuery;
    },
    addEvent: function (_0x53bd80, _0x2f9485, _0x473d6f, _0x59d2dd) {
      if (this.JQUERYAVAILABLE) {
        _0x53bd80.on(_0x2f9485, _0x473d6f);
      } else {
        _0x53bd80.addEventListener(_0x2f9485, _0x473d6f, _0x59d2dd);
      }
    },
    create: function (_0x943dac) {
      return this.JQUERYAVAILABLE
        ? $("<" + _0x943dac + ">")
        : ig.$new(_0x943dac);
    },
    getElementByClass: function (_0x5ef1f4) {
      return this.JQUERYAVAILABLE
        ? $("." + _0x5ef1f4)
        : document.getElementsByClassName(_0x5ef1f4);
    },
    getElementById: function (_0x4e5504) {
      return this.JQUERYAVAILABLE
        ? 0x0 < $(_0x4e5504).length
          ? $(_0x4e5504)
          : null
        : ig.$(_0x4e5504);
    },
    appendChild: function (_0x279184, _0x11eef9) {
      if (this.JQUERYAVAILABLE) {
        _0x279184.append(_0x11eef9);
      } else {
        _0x279184.appendChild(_0x11eef9);
      }
    },
    appendToBody: function (_0x2bce13) {
      if (this.JQUERYAVAILABLE) {
        $("body").append(_0x2bce13);
      } else {
        document.body.appendChild(_0x2bce13);
      }
    },
    removeChild: function (_0x264965, _0x3e064a) {
      if (this.JQUERYAVAILABLE) {
        _0x264965.remove(_0x3e064a);
      } else {
        _0x264965.removeChild(_0x3e064a);
      }
    },
    removeFromBody: function (_0x587d1b) {
      if (this.JQUERYAVAILABLE) {
        $(_0x587d1b).remove();
      } else {
        document.body.removeChild(_0x587d1b);
      }
    },
    text: function (_0x28fb0d, _0x22b9e4) {
      if (this.JQUERYAVAILABLE) {
        _0x28fb0d.text(_0x22b9e4);
      } else {
        _0x28fb0d.innerText = _0x22b9e4;
      }
    },
    val: function (_0x55c992, _0x3a9e48) {
      if (this.JQUERYAVAILABLE) {
        _0x55c992.val(_0x3a9e48);
      } else {
        _0x55c992.value = _0x3a9e48;
      }
    },
    getVal: function (_0x83db8f) {
      return this.JQUERYAVAILABLE ? _0x83db8f.val() : _0x83db8f.value;
    },
    getAttr: function (_0x3593c1, _0x18f361) {
      return this.JQUERYAVAILABLE
        ? _0x3593c1.attr(_0x18f361)
        : _0x3593c1.getAttribute(_0x18f361);
    },
    getText: function (_0x1a9bd1) {
      return this.JQUERYAVAILABLE ? _0x1a9bd1.text() : _0x1a9bd1.innerText;
    },
    html: function (_0x13ddd6, _0x73a90f) {
      if (this.JQUERYAVAILABLE) {
        _0x13ddd6.html(_0x73a90f);
      } else {
        _0x13ddd6.innerHTML = _0x73a90f;
      }
    },
    resize: function (_0x67334a, _0x14062f, _0x4005ed) {
      if (this.JQUERYAVAILABLE) {
        _0x67334a.width(_0x14062f.toFixed(0x2));
        _0x67334a.height(_0x4005ed.toFixed(0x2));
      } else {
        var _0x4f271a = _0x67334a.style.visibility;
        _0x14062f =
          "width:" +
          _0x14062f.toFixed(0x2) +
          "px; height:" +
          _0x4005ed.toFixed(0x2) +
          "px;";
        this.attr(_0x67334a, "style", _0x14062f);
        _0x67334a.style.visibility = _0x4f271a;
      }
    },
    resizeOffsetLeft: function (_0x1731bc, _0x27da89, _0x1b9c9f, _0x360b5c) {
      if (this.JQUERYAVAILABLE) {
        _0x1731bc.width(_0x27da89.toFixed(0x2));
        _0x1731bc.height(_0x1b9c9f.toFixed(0x2));
        _0x1731bc.css("left", _0x360b5c);
      } else {
        var _0x5c16b5 = _0x1731bc.style.visibility;
        _0x27da89 =
          "width:" +
          _0x27da89.toFixed(0x2) +
          "px; height:" +
          _0x1b9c9f.toFixed(0x2) +
          "px; left: " +
          _0x360b5c.toFixed(0x2) +
          "px;";
        this.attr(_0x1731bc, "style", _0x27da89);
        _0x1731bc.style.visibility = _0x5c16b5;
      }
    },
    resizeOffset: function (
      _0x3fe686,
      _0x125318,
      _0x24781a,
      _0x35a678,
      _0x18e0b2
    ) {
      if (this.JQUERYAVAILABLE) {
        _0x3fe686.width(_0x125318.toFixed(0x2));
        _0x3fe686.height(_0x24781a.toFixed(0x2));
        _0x3fe686.css("left", _0x35a678);
        _0x3fe686.css("top", _0x18e0b2);
      } else {
        var _0x46d831 = _0x3fe686.style.visibility;
        _0x125318 =
          "width:" +
          _0x125318.toFixed(0x2) +
          "px; height:" +
          _0x24781a.toFixed(0x2) +
          "px; left: " +
          _0x35a678.toFixed(0x2) +
          "px; top: " +
          _0x18e0b2.toFixed(0x2) +
          "px;";
        this.attr(_0x3fe686, "style", _0x125318);
        _0x3fe686.style.visibility = _0x46d831;
      }
    },
    css: function (_0x1b9186, _0x48eede) {
      if (this.JQUERYAVAILABLE) {
        _0x1b9186.css(_0x48eede);
      } else {
        var _0x16e4c7 = "";
        var _0x26b0ce;
        for (_0x26b0ce in _0x48eede)
          _0x16e4c7 += _0x26b0ce + ":" + _0x48eede[_0x26b0ce] + ";";
        this.attr(_0x1b9186, "style", _0x16e4c7);
      }
    },
    getOffsets: function (_0x3505a7) {
      return this.JQUERYAVAILABLE
        ? ((_0x3505a7 = _0x3505a7.offset()),
          {
            left: _0x3505a7.left,
            top: _0x3505a7.top,
          })
        : {
            left: _0x3505a7.offsetLeft,
            top: _0x3505a7.offsetTop,
          };
    },
    attr: function (_0xa5dd51, _0x7cfdbf, _0x14603e) {
      if ("undefined" === typeof _0x14603e) {
        return this.JQUERYAVAILABLE
          ? _0xa5dd51.attr(_0x7cfdbf)
          : _0xa5dd51.getAttribute(_0x7cfdbf);
      }
      if (this.JQUERYAVAILABLE) {
        _0xa5dd51.attr(_0x7cfdbf, _0x14603e);
      } else {
        _0xa5dd51.setAttribute(_0x7cfdbf, _0x14603e);
      }
    },
    show: function (_0x3fd01c) {
      if (_0x3fd01c && "undefined" !== typeof _0x3fd01c) {
        if (this.JQUERYAVAILABLE) {
          _0x3fd01c.show();
          _0x3fd01c.css("visibility", "visible");
        } else if (_0x3fd01c) {
          if (_0x3fd01c.style) {
            _0x3fd01c.style.visibility = "visible";
          } else if (_0x3fd01c[0x0]) {
            _0x3fd01c[0x0].style.visibility = "visible";
          }
        }
      }
    },
    hide: function (_0x4ba623) {
      if (_0x4ba623 && "undefined" !== typeof _0x4ba623) {
        if (this.JQUERYAVAILABLE) {
          _0x4ba623.hide();
          _0x4ba623.css("visibility", "hidden");
        } else if (_0x4ba623) {
          if (_0x4ba623.style) {
            _0x4ba623.style.visibility = "hidden";
          } else if (_0x4ba623[0x0]) {
            _0x4ba623[0x0].style.visibility = "hidden";
          }
        }
      }
    },
    getQueryVariable: function (_0x5b0ed7) {
      var _0x1596aa = window.location.search.substring(0x1).split("&");
      for (var _0x29f4a5 = 0x0; _0x29f4a5 < _0x1596aa.length; _0x29f4a5++) {
        var _0x36a8fc = _0x1596aa[_0x29f4a5].match(/([^=]+?)=(.+)/);
        if (_0x36a8fc && decodeURIComponent(_0x36a8fc[0x1]) == _0x5b0ed7) {
          return decodeURIComponent(_0x36a8fc[0x2]);
        }
      }
    },
    forcedDeviceDetection: function () {
      var _0x300e43 = this.getQueryVariable("device");
      if (_0x300e43) {
        switch (_0x300e43) {
          case "mobile":
            console.log("serving mobile version ...");
            ig.ua.mobile = true;
            break;
          case "desktop":
            console.log("serving desktop version ...");
            ig.ua.mobile = false;
            break;
          default:
            console.log("serving universal version ...");
        }
      } else {
        console.log("serving universal version ...");
      }
    },
    forcedDeviceRotation: function () {
      var _0x4f7f0b = this.getQueryVariable("force-rotate");
      if (_0x4f7f0b) {
        switch (_0x4f7f0b) {
          case "portrait":
            console.log("force rotate to portrait");
            window.orientation = 0x0;
            break;
          case "landscape":
            console.log("force rotate to horizontal");
            window.orientation = 0x5a;
            break;
          default:
            alert(
              "wrong command/type in param force-rotate. Defaulting value to portrait"
            );
            window.orientation = 0x0;
        }
      }
    },
    setZIndex: function (_0x525f67, _0x4aa2db) {
      if (this.JQUERYAVAILABLE) {
        _0x525f67.css("zIndex", _0x4aa2db);
      } else if (_0x525f67) {
        if (_0x525f67.style) {
          _0x525f67.style.zIndex = _0x4aa2db;
        } else if (_0x525f67[0x0]) {
          _0x525f67[0x0].style.zIndex = _0x4aa2db;
        }
      }
    },
  });
});
ig.baked = true;
ig.module("plugins.handlers.size-handler")
  .requires("plugins.data.vector")
  .defines(function () {
    ig.SizeHandler = ig.Class.extend({
      portraitMode: true,
      disableStretchToFitOnMobileFlag: false,
      enableStretchToFitOnAntiPortraitModeFlag: true,
      enableScalingLimitsOnMobileFlag: false,
      minScalingOnMobile: 0x0,
      maxScalingOnMobile: 0x1,
      enableStretchToFitOnDesktopFlag: false,
      enableScalingLimitsOnDesktopFlag: false,
      minScalingOnDesktop: 0x0,
      maxScalingOnDesktop: 0x1,
      desktop: {
        actualSize: new Vector2(window.innerWidth, window.innerHeight),
        actualResolution: new Vector2(0x4b0, 0x258),
      },
      mobile: {
        actualSize: new Vector2(window.innerWidth, window.innerHeight),
        actualResolution: new Vector2(0x4b0, 0x258),
      },
      windowSize: new Vector2(window.innerWidth, window.innerHeight),
      scaleRatioMultiplier: new Vector2(0x1, 0x1),
      sizeRatio: new Vector2(0x1, 0x1),
      scale: 0x1,
      domHandler: null,
      dynamicClickableEntityDivs: {},
      coreDivsToResize: ["#canvas", "#play"],
      adsToResize: {
        MobileAdInGamePreroll: {
          "box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 0x2,
          "box-height": _SETTINGS.Ad.Mobile.Preroll.Height + 0x14,
        },
        MobileAdInGameEnd: {
          "box-width": _SETTINGS.Ad.Mobile.End.Width + 0x2,
          "box-height": _SETTINGS.Ad.Mobile.End.Height + 0x14,
        },
        MobileAdInGamePreroll2: {
          "box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 0x2,
          "box-height": _SETTINGS.Ad.Mobile.Preroll.Height + 0x14,
        },
        MobileAdInGameEnd2: {
          "box-width": _SETTINGS.Ad.Mobile.End.Width + 0x2,
          "box-height": _SETTINGS.Ad.Mobile.End.Height + 0x14,
        },
        MobileAdInGamePreroll3: {
          "box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 0x2,
          "box-height": _SETTINGS.Ad.Mobile.Preroll.Height + 0x14,
        },
        MobileAdInGameEnd3: {
          "box-width": _SETTINGS.Ad.Mobile.End.Width + 0x2,
          "box-height": _SETTINGS.Ad.Mobile.End.Height + 0x14,
        },
      },
      init: function (_0x5d11f0) {
        this.domHandler = _0x5d11f0;
        if ("undefined" === typeof _0x5d11f0) {
          throw "undefined Dom Handler for Size Handler";
        }
        this.sizeCalcs();
        this.eventListenerSetup();
        this.samsungFix();
      },
      sizeCalcs: function () {
        this.windowSize = new Vector2(window.innerWidth, window.innerHeight);
        if (ig.ua.mobile) {
          this.mobile.actualSize = new Vector2(
            window.innerWidth,
            window.innerHeight
          );
          var _0x807670 = new Vector2(
            this.mobile.actualResolution.x,
            this.mobile.actualResolution.y
          );
          this.scaleRatioMultiplier = new Vector2(
            this.mobile.actualSize.x / _0x807670.x,
            this.mobile.actualSize.y / _0x807670.y
          );
          if (this.disableStretchToFitOnMobileFlag) {
            var _0x157d1f = Math.min(
              this.scaleRatioMultiplier.x,
              this.scaleRatioMultiplier.y
            );
            if (this.enableScalingLimitsOnMobileFlag) {
              _0x157d1f = _0x157d1f.limit(
                this.minScalingOnMobile,
                this.maxScalingOnMobile
              );
            }
            this.mobile.actualSize.x = _0x807670.x * _0x157d1f;
            this.mobile.actualSize.y = _0x807670.y * _0x157d1f;
            this.scaleRatioMultiplier.x = _0x157d1f;
            this.scaleRatioMultiplier.y = _0x157d1f;
          } else {
            this.sizeRatio.x = this.scaleRatioMultiplier.x;
            this.sizeRatio.y = this.scaleRatioMultiplier.y;
            this.scaleRatioMultiplier.x = 0x1;
            this.scaleRatioMultiplier.y = 0x1;
          }
        } else {
          this.desktop.actualSize = new Vector2(
            window.innerWidth,
            window.innerHeight
          );
          _0x807670 = new Vector2(
            this.desktop.actualResolution.x,
            this.desktop.actualResolution.y
          );
          this.scaleRatioMultiplier = new Vector2(
            this.desktop.actualSize.x / _0x807670.x,
            this.desktop.actualSize.y / _0x807670.y
          );
          if (this.enableStretchToFitOnDesktopFlag) {
            this.sizeRatio.x = this.scaleRatioMultiplier.x;
            this.sizeRatio.y = this.scaleRatioMultiplier.y;
            this.scaleRatioMultiplier.x = 0x1;
            this.scaleRatioMultiplier.y = 0x1;
          } else {
            _0x157d1f = Math.min(
              this.scaleRatioMultiplier.x,
              this.scaleRatioMultiplier.y
            );
            if (this.enableScalingLimitsOnDesktopFlag) {
              _0x157d1f = _0x157d1f.limit(
                this.minScalingOnDesktop,
                this.maxScalingOnDesktop
              );
            }
            this.desktop.actualSize.x = _0x807670.x * _0x157d1f;
            this.desktop.actualSize.y = _0x807670.y * _0x157d1f;
            this.scaleRatioMultiplier.x = _0x157d1f;
            this.scaleRatioMultiplier.y = _0x157d1f;
          }
        }
      },
      resizeLayers: function () {
        for (
          var _0x1cc8fc = 0x0;
          _0x1cc8fc < this.coreDivsToResize.length;
          _0x1cc8fc++
        ) {
          var _0x244acd = ig.domHandler.getElementById(
            this.coreDivsToResize[_0x1cc8fc]
          );
          if (ig.ua.mobile) {
            if (this.disableStretchToFitOnMobileFlag) {
              var _0x51e280 = Math.floor(
                ig.sizeHandler.windowSize.x / 0x2 -
                  ig.sizeHandler.mobile.actualSize.x / 0x2
              );
              var _0x1d1685 = Math.floor(
                ig.sizeHandler.windowSize.y / 0x2 -
                  ig.sizeHandler.mobile.actualSize.y / 0x2
              );
              if (0x0 > _0x51e280) {
                _0x51e280 = 0x0;
              }
              if (0x0 > _0x1d1685) {
                _0x1d1685 = 0x0;
              }
              ig.domHandler.resizeOffset(
                _0x244acd,
                Math.floor(ig.sizeHandler.mobile.actualSize.x),
                Math.floor(ig.sizeHandler.mobile.actualSize.y),
                _0x51e280,
                _0x1d1685
              );
              var _0x570cc3 = false;
              if (
                this.portraitMode
                  ? window.innerHeight < window.innerWidth
                  : window.innerHeight > window.innerWidth
              ) {
                if (this.enableStretchToFitOnAntiPortraitModeFlag) {
                  ig.domHandler.resizeOffset(
                    _0x244acd,
                    Math.floor(window.innerWidth),
                    Math.floor(window.innerHeight),
                    0x0,
                    0x0
                  );
                } else {
                  var _0x570cc3 = new Vector2(
                    window.innerWidth / this.mobile.actualResolution.y,
                    window.innerHeight / this.mobile.actualResolution.x
                  );
                  var _0x51e280 = Math.min(_0x570cc3.x, _0x570cc3.y);
                  var _0x570cc3 = this.mobile.actualResolution.y * _0x51e280;
                  var _0x2bc81d = this.mobile.actualResolution.x * _0x51e280;
                  var _0x51e280 = Math.floor(
                    ig.sizeHandler.windowSize.x / 0x2 - _0x570cc3 / 0x2
                  );
                  var _0x1d1685 = Math.floor(
                    ig.sizeHandler.windowSize.y / 0x2 - _0x2bc81d / 0x2
                  );
                  if (0x0 > _0x51e280) {
                    _0x51e280 = 0x0;
                  }
                  if (0x0 > _0x1d1685) {
                    _0x1d1685 = 0x0;
                  }
                  ig.domHandler.resizeOffset(
                    _0x244acd,
                    Math.floor(_0x570cc3),
                    Math.floor(_0x2bc81d),
                    _0x51e280,
                    _0x1d1685
                  );
                }
              }
            } else {
              ig.domHandler.resize(
                _0x244acd,
                Math.floor(ig.sizeHandler.mobile.actualSize.x),
                Math.floor(ig.sizeHandler.mobile.actualSize.y)
              );
            }
          } else if (this.enableStretchToFitOnDesktopFlag) {
            ig.domHandler.resize(
              _0x244acd,
              Math.floor(ig.sizeHandler.desktop.actualSize.x),
              Math.floor(ig.sizeHandler.desktop.actualSize.y)
            );
          } else {
            _0x51e280 = Math.floor(
              ig.sizeHandler.windowSize.x / 0x2 -
                ig.sizeHandler.desktop.actualSize.x / 0x2
            );
            _0x1d1685 = Math.floor(
              ig.sizeHandler.windowSize.y / 0x2 -
                ig.sizeHandler.desktop.actualSize.y / 0x2
            );
            if (0x0 > _0x51e280) {
              _0x51e280 = 0x0;
            }
            if (0x0 > _0x1d1685) {
              _0x1d1685 = 0x0;
            }
            ig.domHandler.resizeOffset(
              _0x244acd,
              Math.floor(ig.sizeHandler.desktop.actualSize.x),
              Math.floor(ig.sizeHandler.desktop.actualSize.y),
              _0x51e280,
              _0x1d1685
            );
          }
        }
        for (var _0x4d9e6e in this.adsToResize) {
          _0x1cc8fc = ig.domHandler.getElementById("#" + _0x4d9e6e);
          _0x244acd = ig.domHandler.getElementById("#" + _0x4d9e6e + "-Box");
          _0x570cc3 =
            (window.innerWidth - this.adsToResize[_0x4d9e6e]["box-width"]) /
              0x2 +
            "px";
          _0x51e280 =
            (window.innerHeight - this.adsToResize[_0x4d9e6e]["box-height"]) /
              0x2 +
            "px";
          if (_0x1cc8fc) {
            ig.domHandler.css(_0x1cc8fc, {
              width: window.innerWidth,
              height: window.innerHeight,
            });
          }
          if (_0x244acd) {
            ig.domHandler.css(_0x244acd, {
              left: _0x570cc3,
              top: _0x51e280,
            });
          }
        }
        _0x1cc8fc = ig.domHandler.getElementById("#canvas");
        _0x244acd = ig.domHandler.getOffsets(_0x1cc8fc);
        _0x1cc8fc = _0x244acd.left;
        _0x244acd = _0x244acd.top;
        _0x570cc3 = Math.min(
          ig.sizeHandler.scaleRatioMultiplier.x,
          ig.sizeHandler.scaleRatioMultiplier.y
        );
        for (_0x4d9e6e in this.dynamicClickableEntityDivs) {
          _0x51e280 = ig.domHandler.getElementById("#" + _0x4d9e6e);
          ig.domHandler.css(_0x51e280, {
            float: "left",
            position: "absolute",
            left:
              Math.floor(
                _0x1cc8fc +
                  this.dynamicClickableEntityDivs[_0x4d9e6e].entity_pos_x *
                    this.scaleRatioMultiplier.x
              ) + "px",
            top:
              Math.floor(
                _0x244acd +
                  this.dynamicClickableEntityDivs[_0x4d9e6e].entity_pos_y *
                    this.scaleRatioMultiplier.y
              ) + "px",
            width:
              Math.floor(
                this.dynamicClickableEntityDivs[_0x4d9e6e].width *
                  this.scaleRatioMultiplier.x
              ) + "px",
            height:
              Math.floor(
                this.dynamicClickableEntityDivs[_0x4d9e6e].height *
                  this.scaleRatioMultiplier.y
              ) + "px",
            "z-index": 0x3,
          });
          if (this.dynamicClickableEntityDivs[_0x4d9e6e]["font-size"]) {
            ig.domHandler.css(_0x51e280, {
              "font-size":
                this.dynamicClickableEntityDivs[_0x4d9e6e]["font-size"] *
                  _0x570cc3 +
                "px",
            });
          }
        }
        $("#ajaxbar").width(this.windowSize.x);
        $("#ajaxbar").height(this.windowSize.y);
      },
      resize: function () {
        this.sizeCalcs();
        this.resizeLayers();
      },
      reorient: function () {
        console.log("changing orientation ...");
        this.resize();
        if (ig.ua.mobile) {
          this.resizeAds();
        }
      },
      resizeAds: function () {
        for (var _0xd41bd4 in this.adsToResize) {
          var _0x40a9ec = ig.domHandler.getElementById("#" + _0xd41bd4);
          var _0x14f233 = ig.domHandler.getElementById(
            "#" + _0xd41bd4 + "-Box"
          );
          var _0x4a6f17 =
            (window.innerWidth - this.adsToResize[_0xd41bd4]["box-width"]) /
              0x2 +
            "px";
          var _0x16d817 =
            (window.innerHeight - this.adsToResize[_0xd41bd4]["box-height"]) /
              0x2 +
            "px";
          if (_0x40a9ec) {
            ig.domHandler.css(_0x40a9ec, {
              width: window.innerWidth,
              height: window.innerHeight,
            });
          }
          if (_0x14f233) {
            ig.domHandler.css(_0x14f233, {
              left: _0x4a6f17,
              top: _0x16d817,
            });
          }
        }
      },
      samsungFix: function () {
        if (
          ig.ua.android &&
          !(
            4.2 >
            parseFloat(
              navigator.userAgent.slice(
                navigator.userAgent.indexOf("Android") + 0x8,
                navigator.userAgent.indexOf("Android") + 0xb
              )
            )
          ) &&
          !(0x0 > navigator.userAgent.indexOf("GT")) &&
          !(0x0 < navigator.userAgent.indexOf("Chrome")) &&
          !(0x0 < navigator.userAgent.indexOf("Firefox"))
        ) {
          document.addEventListener(
            "touchstart",
            function (_0x2eb2d5) {
              _0x2eb2d5.preventDefault();
              return false;
            },
            false
          );
          document.addEventListener(
            "touchmove",
            function (_0x4330ae) {
              _0x4330ae.preventDefault();
              return false;
            },
            false
          );
          document.addEventListener(
            "touchend",
            function (_0x451707) {
              _0x451707.preventDefault();
              return false;
            },
            false
          );
        }
      },
      orientationInterval: null,
      orientationTimeout: null,
      orientationHandler: function () {
        this.reorient();
        window.scrollTo(0x0, 0x1);
      },
      orientationDelayHandler: function () {
        if (null == this.orientationInterval) {
          this.orientationInterval = window.setInterval(
            this.orientationHandler.bind(this),
            0x64
          );
        }
        if (null == this.orientationTimeout) {
          this.orientationTimeout = window.setTimeout(
            function () {
              this.clearAllIntervals();
            }.bind(this),
            0x7d0
          );
        }
      },
      clearAllIntervals: function () {
        window.clearInterval(this.orientationInterval);
        this.orientationInterval = null;
        window.clearTimeout(this.orientationTimeout);
        this.orientationTimeout = null;
      },
      eventListenerSetup: function () {
        window.addEventListener(
          "orientationchange",
          this.orientationHandler.bind(this)
        );
        window.addEventListener("resize", this.orientationHandler.bind(this));
        document.ontouchmove = function (_0xdb0ae3) {
          window.scrollTo(0x0, 0x1);
          _0xdb0ae3.preventDefault();
        };
        this.chromePullDownRefreshFix();
      },
      chromePullDownRefreshFix: function () {
        var _0x97b97d = window.chrome || navigator.userAgent.match("CriOS");
        var _0x4569a2 = "ontouchstart" in document.documentElement;
        if (_0x97b97d && _0x4569a2) {
          var _0x374683 = (_0x97b97d = false);
          var _0x5a8b97 = 0x0;
          var _0x1c5d50 = false;
          try {
            if (CSS.supports("overscroll-behavior-y", "contain")) {
              _0x97b97d = true;
            }
          } catch (_0x91fa20) {}
          try {
            if (_0x97b97d) {
              return (document.body.style.overscrollBehaviorY = "contain");
            }
          } catch (_0xe1e1bd) {}
          _0x97b97d = document.head || document.body;
          _0x4569a2 = document.createElement("style");
          _0x4569a2.type = "text/css";
          if (_0x4569a2.styleSheet) {
            _0x4569a2.styleSheet.cssText =
              "\n      ::-webkit-scrollbar {\n        width: 500x;\n      }\n      ::-webkit-scrollbar-thumb {\n        border-radius: 500px;\n        background-color: rgba(0, 0, 0, 0.2);\n      }\n      body {\n        -webkit-overflow-scrolling: auto!important;\n      }\n    ";
          } else {
            _0x4569a2.appendChild(
              document.createTextNode(
                "\n      ::-webkit-scrollbar {\n        width: 500px;\n      }\n      ::-webkit-scrollbar-thumb {\n        border-radius: 500px;\n        background-color: rgba(0, 0, 0, 0.2);\n      }\n      body {\n        -webkit-overflow-scrolling: auto!important;\n      }\n    "
              )
            );
          }
          _0x97b97d.appendChild(_0x4569a2);
          try {
            addEventListener("test", null, {
              get passive() {
                _0x374683 = true;
              },
            });
          } catch (_0x2f12d4) {}
          document.addEventListener(
            "touchstart",
            function (_0x1d629f) {
              if (0x1 === _0x1d629f.touches.length) {
                _0x5a8b97 = _0x1d629f.touches[0x0].clientY;
                _0x1c5d50 = 0x0 === window.pageYOffset;
              }
            },
            !!_0x374683 && {
              passive: true,
            }
          );
          document.addEventListener(
            "touchmove",
            function (_0x324402) {
              var _0x4a4051;
              if ((_0x4a4051 = _0x1c5d50)) {
                _0x1c5d50 = false;
                _0x4a4051 = _0x324402.touches[0x0].clientY;
                var _0x4d88f4 = _0x4a4051 - _0x5a8b97;
                _0x5a8b97 = _0x4a4051;
                _0x4a4051 = 0x0 < _0x4d88f4;
              }
              if (_0x4a4051) {
                return _0x324402.preventDefault();
              }
            },
            !!_0x374683 && {
              passive: false,
            }
          );
        }
      },
    });
  });
ig.baked = true;
ig.module("plugins.handlers.api-handler").defines(function () {
  ig.ApiHandler = ig.Class.extend({
    apiAvailable: {
      MJSPreroll: function () {
        if (
          ig.ua.mobile &&
          ig.domHandler.JQUERYAVAILABLE &&
          _SETTINGS &&
          _SETTINGS.Ad.Mobile.Preroll.Enabled
        ) {
          MobileAdInGamePreroll.Initialize();
        }
      },
      MJSHeader: function () {
        if (
          ig.ua.mobile &&
          ig.domHandler.JQUERYAVAILABLE &&
          _SETTINGS.Ad.Mobile.Header.Enabled
        ) {
          MobileAdInGameHeader.Initialize();
        }
      },
      MJSFooter: function () {
        if (
          ig.ua.mobile &&
          ig.domHandler.JQUERYAVAILABLE &&
          _SETTINGS.Ad.Mobile.Footer.Enabled
        ) {
          MobileAdInGameFooter.Initialize();
        }
      },
      MJSEnd: function () {
        if (
          ig.ua.mobile &&
          ig.domHandler.JQUERYAVAILABLE &&
          _SETTINGS.Ad.Mobile.End.Enabled
        ) {
          MobileAdInGameEnd.Initialize();
        }
      },
    },
    run: function (_0x20b240, _0x4639fb) {
      if (this.apiAvailable[_0x20b240]) {
        this.apiAvailable[_0x20b240](_0x4639fb);
      }
    },
  });
});
ig.baked = true;
ig.module("plugins.audio.howler-player").defines(function () {
  HowlerPlayer = ig.Class.extend({
    tagName: "HowlerPlayer",
    isMuted: false,
    soundList: {},
    init: function (_0x58e295) {
      for (var _0x3fe581 in _0x58e295) {
        var _0x41d83a = _0x58e295[_0x3fe581];
        this.soundList[_0x3fe581] = new Howl({
          src: ["media/audio/" + _0x41d83a.path + ".mp3"],
          loop: !!_0x41d83a.loop,
          onend: function () {
            this.seekId = 0x0;
          },
        });
      }
    },
    play: function (_0x3f99d7) {
      if (
        !this.isMuted &&
        ((_0x3f99d7 = this.soundList[_0x3f99d7]),
        !_0x3f99d7._loop || !_0x3f99d7.playing())
      ) {
        _0x3f99d7.playId = _0x3f99d7.play();
      }
    },
    stop: function (_0x29c366) {
      _0x29c366 = this.soundList[_0x29c366];
      if (_0x29c366.playing()) {
        _0x29c366.stop();
        _0x29c366.seekId = 0x0;
      }
    },
    pause: function (_0x555f3f) {
      _0x555f3f = this.soundList[_0x555f3f];
      _0x555f3f.pause(_0x555f3f.playId);
      _0x555f3f.seekId = _0x555f3f.seek(_0x555f3f.playId);
    },
    resume: function (_0x514ffd) {
      _0x514ffd = this.soundList[_0x514ffd];
      _0x514ffd.play(_0x514ffd.playId);
      _0x514ffd.seek(_0x514ffd.seekId, _0x514ffd.playId);
    },
    mute: function (_0x3b0362) {
      if (!_0x3b0362) {
        this.isMuted = true;
      }
      for (var _0x5742b8 in this.soundList)
        if (this.soundList[_0x5742b8].playing()) {
          this.pause(_0x5742b8);
        }
    },
    unmute: function (_0x13ad1e) {
      if (!_0x13ad1e) {
        this.isMuted = false;
      }
      if (!this.isMuted) {
        for (var _0x5f44b6 in this.soundList) {
          sound = this.soundList[_0x5f44b6];
          if (0x0 < sound.seekId && !sound.playing()) {
            this.resume(_0x5f44b6);
          }
        }
      }
    },
    volume: function (_0x4f7a7d) {
      if ("number" !== typeof _0x4f7a7d) {
        console.warn("Argument needs to be a number!");
      } else {
        _0x4f7a7d = _0x4f7a7d.limit(0x0, 0x1);
        for (var _0x570a80 in this.soundList)
          this.soundList[_0x570a80].volume(_0x4f7a7d);
      }
    },
    getVolume: function () {
      for (var _0x2f5dbf in this.soundList)
        return this.soundList[_0x2f5dbf].volume();
    },
  });
});
ig.baked = true;
ig.module("plugins.audio.sound-info").defines(function () {
  SoundInfo = ig.Class.extend({
    sfx: {
      logosplash1: {
        path: "opening/logosplash1",
      },
      logosplash2: {
        path: "opening/logosplash2",
      },
      button: {
        path: "sfx/button",
      },
      coin: {
        path: "sfx/coin",
      },
      inhole: {
        path: "sfx/inhole",
      },
      hit: {
        path: "sfx/hit",
      },
      stick: {
        path: "sfx/stick",
      },
      fail: {
        path: "sfx/fail",
      },
      win: {
        path: "sfx/win",
      },
    },
    bgm: {
      background: {
        path: "bgm",
        loop: true,
      },
    },
  });
});
ig.baked = true;
ig.module("plugins.audio.sound-handler")
  .requires("plugins.audio.howler-player", "plugins.audio.sound-info")
  .defines(function () {
    ig.SoundHandler = ig.Class.extend({
      bgmPlayer: null,
      sfxPlayer: null,
      soundInfo: new SoundInfo(),
      init: function () {
        Howler.autoSuspend = false;
        this.sfxPlayer = new HowlerPlayer(this.soundInfo.sfx);
        this.bgmPlayer = new HowlerPlayer(this.soundInfo.bgm);
      },
      unlockWebAudio: function () {},
      muteSFX: function (_0x3c523e) {
        if (this.sfxPlayer) {
          this.sfxPlayer.mute(_0x3c523e);
        }
      },
      muteBGM: function (_0x4d6fc0) {
        if (this.bgmPlayer) {
          this.bgmPlayer.mute(_0x4d6fc0);
        }
      },
      unmuteSFX: function (_0x920151) {
        if (this.sfxPlayer && ig.game && ig.game.sessionData.sfx) {
          this.sfxPlayer.unmute(_0x920151);
        }
      },
      unmuteBGM: function (_0xe2caef) {
        if (this.bgmPlayer && ig.game && ig.game.sessionData.bgm) {
          this.bgmPlayer.unmute(_0xe2caef);
          _0xe2caef = this.bgmPlayer.soundList.background;
          if (!_0xe2caef.playing()) {
            _0xe2caef.playId = _0xe2caef.play();
          }
        }
      },
      muteAll: function (_0x234a94) {
        this.muteSFX(_0x234a94);
        this.muteBGM(_0x234a94);
      },
      unmuteAll: function (_0x2cf460) {
        this.unmuteSFX(_0x2cf460);
        this.unmuteBGM(_0x2cf460);
      },
      forceMuteAll: function () {
        this.muteAll(true);
      },
      forceUnMuteAll: function () {
        this.unmuteAll(true);
      },
      forceLoopBGM: function () {},
    });
  });
ig.baked = true;
ig.module("plugins.handlers.visibility-handler")
  .requires("plugins.audio.sound-handler")
  .defines(function () {
    ig.VisibilityHandler = ig.Class.extend({
      version: "1.1.2",
      config: {
        muteOnBlur: true,
        pauseOnBlur: true,
        clearInputStateOnBlur: true,
        allowResumeWithoutFocus: {
          desktop: true,
          mobile: {
            kaios: false,
            default: true,
          },
        },
        handlerDelay: {
          desktop: 0x0,
          mobile: {
            kaios: 0x0,
            default: 0x0,
          },
        },
        autoFocusOnResume: {
          desktop: true,
          mobile: {
            kaios: false,
            default: true,
          },
        },
        autoFocusAfterResume: {
          desktop: true,
          mobile: {
            kaios: false,
            default: true,
          },
        },
      },
      browserPrefixes: ["o", "ms", "moz", "webkit"],
      browserPrefix: null,
      hiddenPropertyName: null,
      visibilityEventName: null,
      visibilityStateName: null,
      isShowingOverlay: false,
      isFocused: false,
      isPaused: false,
      init: function () {
        this.initVisibilityHandler();
        this.initFocusHandler();
        this.initPageTransitionHandler();
        ig.visibilityHandler = this;
      },
      pauseHandler: function () {
        if (
          true === this.config.clearInputStateOnBlur &&
          "undefined" !== typeof ig.input &&
          null !== ig.input &&
          "function" === typeof ig.input.clearAllState
        ) {
          ig.input.clearAllState();
        }
        if (
          true === this.config.pauseOnBlur &&
          "undefined" !== typeof ig.game &&
          null !== ig.game &&
          "undefined" !== typeof ig.game.pauseGame
        ) {
          ig.game.pauseGame();
        }
        if (
          true === this.config.muteOnBlur &&
          "undefined" !== typeof ig.soundHandler &&
          null !== ig.soundHandler &&
          "function" === typeof ig.soundHandler.forceMuteAll
        ) {
          ig.soundHandler.forceMuteAll();
        }
      },
      resumeHandler: function () {
        if (
          "undefined" !== typeof ig.input &&
          null !== ig.input &&
          "function" === typeof ig.input.clearAllState
        ) {
          ig.input.clearAllState();
        }
        if (
          "undefined" !== typeof ig.game &&
          null !== ig.game &&
          "undefined" !== typeof ig.game.resumeGame
        ) {
          ig.game.resumeGame();
        }
        if (
          "undefined" !== typeof ig.soundHandler &&
          null !== ig.soundHandler &&
          "function" === typeof ig.soundHandler.forceUnMuteAll
        ) {
          ig.soundHandler.forceUnMuteAll();
        }
      },
      initVisibilityHandler: function () {
        this.browserPrefix = this.getBrowserPrefix();
        this.hiddenPropertyName = this.getHiddenPropertyName(
          this.browserPrefix
        );
        this.visibilityEventName = this.getVisibilityEventName(
          this.browserPrefix
        );
        this.visibilityStateName = this.getVisibilityStateName(
          this.browserPrefix
        );
        if (this.visibilityEventName) {
          document.addEventListener(
            this.visibilityEventName,
            this.onChange.bind(this),
            true
          );
        }
      },
      initFocusHandler: function () {
        window.addEventListener("blur", this.onChange.bind(this), true);
        document.addEventListener("blur", this.onChange.bind(this), true);
        document.addEventListener("focusout", this.onChange.bind(this), true);
        window.addEventListener("focus", this.onChange.bind(this), true);
        document.addEventListener("focus", this.onChange.bind(this), true);
        document.addEventListener("focusin", this.onChange.bind(this), true);
      },
      initPageTransitionHandler: function () {
        window.addEventListener("pagehide", this.onChange.bind(this), true);
        window.addEventListener("pageshow", this.onChange.bind(this), true);
      },
      getBrowserPrefix: function () {
        var _0x119af2 = null;
        this.browserPrefixes.forEach(
          function (_0x31cc1c) {
            if (this.getHiddenPropertyName(_0x31cc1c) in document) {
              return (_0x119af2 = _0x31cc1c);
            }
          }.bind(this)
        );
        return _0x119af2;
      },
      getHiddenPropertyName: function (_0x14aaaf) {
        return _0x14aaaf ? _0x14aaaf + "Hidden" : "hidden";
      },
      getVisibilityEventName: function (_0x15e858) {
        return (_0x15e858 ? _0x15e858 : "") + "visibilitychange";
      },
      getVisibilityStateName: function (_0x83c8eb) {
        return _0x83c8eb ? _0x83c8eb + "VisibilityState" : "visibilityState";
      },
      hasView: function () {
        return !(
          document[this.hiddenPropertyName] ||
          "visible" !== document[this.visibilityStateName]
        );
      },
      hasFocus: function () {
        return document.hasFocus() || this.isFocused;
      },
      onOverlayShow: function () {
        this.systemPaused();
        this.isShowingOverlay = true;
      },
      onOverlayHide: function () {
        this.isShowingOverlay = false;
        this.systemResumed();
      },
      systemPaused: function () {
        if (this.isPaused) {
          return false;
        }
        this.pauseHandler();
        return (this.isPaused = true);
      },
      systemResumed: function () {
        if (!this.isPaused || !this.hasView() || this.isShowingOverlay) {
          return false;
        }
        if (!this.hasFocus()) {
          if (ig.ua.mobile) {
            if (this.isKaiOS()) {
              if (!this.config.allowResumeWithoutFocus.mobile.kaios) {
                return false;
              }
            } else {
              if (!this.config.allowResumeWithoutFocus.mobile["default"]) {
                return false;
              }
            }
          } else {
            if (!this.config.allowResumeWithoutFocus.desktop) {
              return false;
            }
          }
        }
        this.focusOnResume();
        this.resumeHandler();
        this.focusAfterResume();
        this.isPaused = false;
        return true;
      },
      isKaiOS: function () {
        return /KAIOS/.test(navigator.userAgent) || false;
      },
      focusOnResume: function () {
        return ig.ua.mobile
          ? this.isKaiOS()
            ? this.config.autoFocusOnResume.mobile.kaios
            : this.config.autoFocusOnResume.mobile["default"]
          : this.config.autoFocusOnResume.desktop;
      },
      focusAfterResume: function () {
        return ig.ua.mobile
          ? this.isKaiOS()
            ? this.config.autoFocusAfterResume.mobile.kaios
            : this.config.autoFocusAfterResume.mobile["default"]
          : this.config.autoFocusAfterResume.desktop;
      },
      focus: function (_0x528687) {
        if (window.focus && _0x528687) {
          if (
            document.activeElement &&
            "function" === typeof document.activeElement.blur
          ) {
            document.activeElement.blur();
          }
          window.focus();
        }
      },
      handleDelayedEvent: function (_0x562d52) {
        if (
          !this.hasView() ||
          "pause" === _0x562d52.type ||
          "pageHide" === _0x562d52.type ||
          "blur" === _0x562d52.type ||
          "focusout" === _0x562d52.type
        ) {
          if ("blur" === _0x562d52.type || "focusout" === _0x562d52.type) {
            var _0x7e0a85 =
              _0x562d52.path ||
              (_0x562d52.composedPath && _0x562d52.composedPath());
            if (
              (_0x7e0a85 && 0x2 < _0x7e0a85.length) ||
              (_0x562d52.srcElement &&
                ("INPUT" === _0x562d52.srcElement.tagName ||
                  "TEXTAREA" === _0x562d52.srcElement.tagName))
            ) {
              return false;
            }
            this.isFocused = false;
          }
          return this.systemPaused(_0x562d52);
        }
        if ("focus" === _0x562d52.type || "focusin" === _0x562d52.type) {
          this.isFocused = true;
        }
        return this.systemResumed(_0x562d52);
      },
      startDelayedEventHandler: function (_0x4f3b2d) {
        if (ig.ua.mobile) {
          if (this.isKaiOS()) {
            if (0x0 < this.config.handlerDelay.mobile.kaios) {
              window.setTimeout(
                function (_0x2c7daf) {
                  this.handleDelayedEvent(_0x2c7daf);
                }.bind(this, _0x4f3b2d),
                this.config.handlerDelay.mobile
              );
            } else {
              this.handleDelayedEvent(_0x4f3b2d);
            }
          } else if (0x0 < this.config.handlerDelay.mobile["default"]) {
            window.setTimeout(
              function (_0x40d974) {
                this.handleDelayedEvent(_0x40d974);
              }.bind(this, _0x4f3b2d),
              this.config.handlerDelay.mobile
            );
          } else {
            this.handleDelayedEvent(_0x4f3b2d);
          }
        } else if (0x0 < this.config.handlerDelay.desktop) {
          window.setTimeout(
            function (_0x9d067b) {
              this.handleDelayedEvent(_0x9d067b);
            }.bind(this, _0x4f3b2d),
            this.config.handlerDelay.desktop
          );
        } else {
          this.handleDelayedEvent(_0x4f3b2d);
        }
      },
      onChange: function (_0x26649e) {
        this.startDelayedEventHandler(_0x26649e);
      },
    });
  });
ig.baked = true;
ig.module("plugins.io.storage").defines(function () {
  ig.Storage = ig.Class.extend({
    staticInstantiate: function () {
      return !ig.Storage.instance ? null : ig.Storage.instance;
    },
    init: function () {
      ig.Storage.instance = this;
    },
    isCapable: function () {
      return "undefined" !== typeof window.localStorage;
    },
    isSet: function (_0x92d748) {
      return null !== this.get(_0x92d748);
    },
    initUnset: function (_0x15c549, _0x4dd623) {
      if (null === this.get(_0x15c549)) {
        this.set(_0x15c549, _0x4dd623);
      }
    },
    get: function (_0x36159b) {
      if (!this.isCapable()) {
        return null;
      }
      try {
        return JSON.parse(localStorage.getItem(_0x36159b));
      } catch (_0x52d64f) {
        return window.localStorage.getItem(_0x36159b);
      }
    },
    getInt: function (_0x82517c) {
      return ~~this.get(_0x82517c);
    },
    getFloat: function (_0x3643ec) {
      return parseFloat(this.get(_0x3643ec));
    },
    getBool: function (_0x21a7e6) {
      return !!this.get(_0x21a7e6);
    },
    key: function (_0x512af0) {
      return this.isCapable() ? window.localStorage.key(_0x512af0) : null;
    },
    set: function (_0x1c3868, _0x5d9be2) {
      if (!this.isCapable()) {
        return null;
      }
      try {
        window.localStorage.setItem(_0x1c3868, JSON.stringify(_0x5d9be2));
      } catch (_0x4cf04b) {
        console.log(_0x4cf04b);
      }
    },
    setHighest: function (_0x3fd33b, _0x34ff45) {
      if (_0x34ff45 > this.getFloat(_0x3fd33b)) {
        this.set(_0x3fd33b, _0x34ff45);
      }
    },
    remove: function (_0x29f2d3) {
      if (!this.isCapable()) {
        return null;
      }
      window.localStorage.removeItem(_0x29f2d3);
    },
    clear: function () {
      if (!this.isCapable()) {
        return null;
      }
      window.localStorage.clear();
    },
  });
});
ig.baked = true;
ig.module("plugins.io.mouse")
  .requires("plugins.data.vector")
  .defines(function () {
    Mouse = ig.Class.extend({
      pos: new Vector2(0x0, 0x0),
      bindings: {
        click: [ig.KEY.MOUSE1],
      },
      init: function () {
        ig.input.initMouse();
        for (var _0x16e475 in this.bindings) {
          this[_0x16e475] = _0x16e475;
          for (
            var _0x4121b9 = 0x0;
            _0x4121b9 < this.bindings[_0x16e475].length;
            _0x4121b9++
          ) {
            ig.input.bind(this.bindings[_0x16e475][_0x4121b9], _0x16e475);
          }
        }
      },
      getLast: function () {
        return this.pos;
      },
      getPos: function () {
        var _0x48cb66 =
          ig.system.scale *
          ((ig.system.canvas.offsetWidth || ig.system.realWidth) /
            ig.system.realWidth);
        this.pos.set(
          (ig.input.mouse.x * _0x48cb66) /
            ig.sizeHandler.sizeRatio.x /
            ig.sizeHandler.scaleRatioMultiplier.x,
          (ig.input.mouse.y * _0x48cb66) /
            ig.sizeHandler.sizeRatio.y /
            ig.sizeHandler.scaleRatioMultiplier.y
        );
        return this.pos.clone();
      },
    });
  });
ig.baked = true;
ig.module("plugins.io.keyboard").defines(function () {
  Keyboard = ig.Class.extend({
    bindings: {
      up: [ig.KEY.W, ig.KEY.UP_ARROW],
      right: [ig.KEY.D, ig.KEY.RIGHT_ARROW],
      left: [ig.KEY.A, ig.KEY.LEFT_ARROW],
      down: [ig.KEY.S, ig.KEY.DOWN_ARROW],
      space: [ig.KEY.SPACE],
      enter: [ig.KEY.ENTER],
    },
    init: function () {
      for (var _0x301b33 in this.bindings) {
        this[_0x301b33] = _0x301b33;
        for (
          var _0x25677d = 0x0;
          _0x25677d < this.bindings[_0x301b33].length;
          _0x25677d++
        ) {
          ig.input.bind(this.bindings[_0x301b33][_0x25677d], _0x301b33);
        }
      }
    },
  });
});
ig.baked = true;
ig.module("plugins.io.gamepad-input").defines(function () {
  ig.PADKEY = {
    BUTTON_0: 0x0,
    PADBUTTON_1: 0x1,
    BUTTON_2: 0x2,
    BUTTON_3: 0x3,
    BUTTON_LEFT_BUMPER: 0x4,
    BUTTON_RIGHT_BUMPER: 0x5,
    BUTTON_LEFT_TRIGGER: 0x6,
    BUTTON_RIGHT_TRIGGER: 0x7,
    BUTTON_LEFT_JOYSTICK: 0xa,
    BUTTON_RIGHT_JOYSTICK: 0xb,
    BUTTON_DPAD_UP: 0xc,
    BUTTON_DPAD_DOWN: 0xd,
    BUTTON_DPAD_LEFT: 0xe,
    BUTTON_DPAD_RIGHT: 0xf,
    BUTTON_MENU: 0x10,
    AXIS_LEFT_JOYSTICK_X: 0x0,
    AXIS_LEFT_JOYSTICK_Y: 0x1,
    AXIS_RIGHT_JOYSTICK_X: 0x2,
    AXIS_RIGHT_JOYSTICK_Y: 0x3,
  };
  ig.GamepadInput = ig.Class.extend({
    isInit: false,
    isSupported: false,
    list: [],
    bindings: {},
    states: {},
    presses: {},
    releases: {},
    downLocks: {},
    upLocks: {},
    leftStick: {
      x: 0x0,
      y: 0x0,
    },
    rightStick: {
      x: 0x0,
      y: 0x0,
    },
    start: function () {
      if (!this.isInit) {
        this.isInit = true;
        var _0x3ef252 = navigator.getGamepads || navigator.webkitGetGamepads;
        if (_0x3ef252) {
          if (!navigator.getGamepads && navigator.webkitGetGamepads) {
            navigator.getGamepads = navigator.webkitGetGamepads;
          }
          this.list = navigator.getGamepads();
        }
        this.isSupported = _0x3ef252;
      }
    },
    isAvailable: function () {
      return this.isInit && this.isSupported;
    },
    buttonPressed: function (_0x4c9658) {
      return "object" == typeof _0x4c9658
        ? _0x4c9658.pressed
        : 0x1 == _0x4c9658;
    },
    buttonDown: function (_0x125b80) {
      if ((_0x125b80 = this.bindings[_0x125b80])) {
        this.states[_0x125b80] = true;
        if (!this.downLocks[_0x125b80]) {
          this.presses[_0x125b80] = true;
          this.downLocks[_0x125b80] = true;
        }
      }
    },
    buttonUp: function (_0xf160ef) {
      if (
        (_0xf160ef = this.bindings[_0xf160ef]) &&
        this.downLocks[_0xf160ef] &&
        !this.upLocks[_0xf160ef]
      ) {
        this.states[_0xf160ef] = false;
        this.releases[_0xf160ef] = true;
        this.upLocks[_0xf160ef] = true;
      }
    },
    clearPressed: function () {
      for (var _0x18b017 in this.releases) {
        this.states[_0x18b017] = false;
        this.downLocks[_0x18b017] = false;
      }
      this.releases = {};
      this.presses = {};
      this.upLocks = {};
    },
    bind: function (_0x37fbc1, _0x5624b4) {
      this.bindings[_0x37fbc1] = _0x5624b4;
    },
    unbind: function (_0x44f18d) {
      this.releases[this.bindings[_0x44f18d]] = true;
      this.bindings[_0x44f18d] = null;
    },
    unbindAll: function () {
      this.bindings = {};
      this.states = {};
      this.presses = {};
      this.releases = {};
      this.downLocks = {};
      this.upLocks = {};
    },
    state: function (_0x19f024) {
      return this.states[_0x19f024];
    },
    pressed: function (_0x693827) {
      return this.presses[_0x693827];
    },
    released: function (_0x1881d5) {
      return this.releases[_0x1881d5];
    },
    clamp: function (_0xef2d1d, _0x2122b0, _0x1b6f08) {
      return _0xef2d1d < _0x2122b0
        ? _0x2122b0
        : _0xef2d1d > _0x1b6f08
        ? _0x1b6f08
        : _0xef2d1d;
    },
    pollGamepads: function () {
      if (this.isSupported) {
        this.leftStick.x = 0x0;
        this.leftStick.y = 0x0;
        this.rightStick.x = 0x0;
        this.rightStick.y = 0x0;
        this.list = navigator.getGamepads();
        for (var _0x3d586e in this.bindings) {
          var _0x24c5f0 = false;
          for (var _0x1ee150 = 0x0; _0x1ee150 < this.list.length; _0x1ee150++) {
            var _0x238da0 = this.list[_0x1ee150];
            if (
              _0x238da0 &&
              _0x238da0.buttons &&
              this.buttonPressed(_0x238da0.buttons[_0x3d586e])
            ) {
              _0x24c5f0 = true;
              break;
            }
          }
          if (_0x24c5f0) {
            this.buttonDown(_0x3d586e);
          } else {
            this.buttonUp(_0x3d586e);
          }
        }
        for (_0x1ee150 = 0x0; _0x1ee150 < this.list.length; _0x1ee150++) {
          if ((_0x238da0 = this.list[_0x1ee150]) && _0x238da0.axes) {
            _0x3d586e = _0x238da0.axes[ig.GAMEPADINPUT.AXIS_LEFT_JOYSTICK_X];
            var _0x24c5f0 =
              _0x238da0.axes[ig.GAMEPADINPUT.AXIS_LEFT_JOYSTICK_Y];
            var _0x5a8722 =
              _0x238da0.axes[ig.GAMEPADINPUT.AXIS_RIGHT_JOYSTICK_X];
            var _0x238da0 =
              _0x238da0.axes[ig.GAMEPADINPUT.AXIS_RIGHT_JOYSTICK_Y];
            this.leftStick.x += isNaN(_0x3d586e) ? 0x0 : _0x3d586e;
            this.leftStick.y += isNaN(_0x24c5f0) ? 0x0 : _0x24c5f0;
            this.rightStick.x += isNaN(_0x5a8722) ? 0x0 : _0x5a8722;
            this.rightStick.y += isNaN(_0x238da0) ? 0x0 : _0x238da0;
          }
        }
        if (0x0 < this.list.length) {
          this.leftStick.x = this.clamp(this.leftStick.x, -0x1, 0x1);
          this.leftStick.y = this.clamp(this.leftStick.y, -0x1, 0x1);
          this.rightStick.x = this.clamp(this.rightStick.x, -0x1, 0x1);
          this.rightStick.y = this.clamp(this.rightStick.y, -0x1, 0x1);
        }
      }
    },
  });
});
ig.baked = true;
ig.module("plugins.io.gamepad")
  .requires("plugins.io.gamepad-input")
  .defines(function () {
    Gamepad = ig.Class.extend({
      bindings: {
        padJump: [ig.PADKEY.BUTTON_0],
      },
      init: function () {
        ig.gamepadInput.start();
        for (var _0x4ad3f6 in this.bindings)
          for (
            var _0x2e1038 = 0x0;
            _0x2e1038 < this.bindings[_0x4ad3f6].length;
            _0x2e1038++
          ) {
            ig.gamepadInput.bind(
              this.bindings[_0x4ad3f6][_0x2e1038],
              _0x4ad3f6
            );
          }
      },
      press: function () {},
      held: function () {},
      release: function () {},
    });
  });
ig.baked = true;
ig.module("plugins.io.multitouch").defines(function () {
  Multitouch = ig.Class.extend({
    init: function () {
      ig.multitouchInput.start();
    },
    getTouchesPos: function () {
      if (ig.ua.mobile) {
        if (0x0 < ig.multitouchInput.touches.length) {
          var _0x2911ed = [];
          for (
            var _0xe22a6d = 0x0;
            _0xe22a6d < ig.multitouchInput.touches.length;
            _0xe22a6d++
          ) {
            var _0x4f660e = ig.multitouchInput.touches[_0xe22a6d];
            _0x2911ed.push({
              x: _0x4f660e.x,
              y: _0x4f660e.y,
            });
          }
          return _0x2911ed;
        }
        return null;
      }
    },
  });
});
ig.baked = true;
ig.module("plugins.io.multitouch-input").defines(function () {
  ig.MultitouchInput = ig.Class.extend({
    isStart: false,
    touches: [],
    multitouchCapable: false,
    lastEventUp: null,
    start: function () {
      if (!this.isStart) {
        this.isStart = true;
        if (navigator.maxTouchPoints && 0x1 < navigator.maxTouchPoints) {
          this.multitouchCapable = true;
        }
        if (ig.ua.touchDevice) {
          if (window.navigator.msPointerEnabled) {
            ig.system.canvas.addEventListener(
              "MSPointerDown",
              this.touchdown.bind(this),
              false
            );
            ig.system.canvas.addEventListener(
              "MSPointerUp",
              this.touchup.bind(this),
              false
            );
            ig.system.canvas.addEventListener(
              "MSPointerMove",
              this.touchmove.bind(this),
              false
            );
            ig.system.canvas.style.msContentZooming = "none";
            ig.system.canvas.style.msTouchAction = "none";
          }
          ig.system.canvas.addEventListener(
            "touchstart",
            this.touchdown.bind(this),
            false
          );
          ig.system.canvas.addEventListener(
            "touchend",
            this.touchup.bind(this),
            false
          );
          ig.system.canvas.addEventListener(
            "touchmove",
            this.touchmove.bind(this),
            false
          );
        }
      }
    },
    touchmove: function (_0x37573d) {
      if (ig.ua.touchDevice) {
        var _0x4a68cd =
          parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth;
        var _0x30c603 =
          parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight;
        var _0x4a68cd = ig.system.scale * (_0x4a68cd / ig.system.realWidth);
        var _0x30c603 = ig.system.scale * (_0x30c603 / ig.system.realHeight);
        if (_0x37573d.touches) {
          for (; 0x0 < this.touches.length; ) {
            this.touches.pop();
          }
          if (!this.multitouchCapable && 0x1 < _0x37573d.touches.length) {
            this.multitouchCapable = true;
          }
          var _0x208cbd = {
            left: 0x0,
            top: 0x0,
          };
          if (ig.system.canvas.getBoundingClientRect) {
            _0x208cbd = ig.system.canvas.getBoundingClientRect();
          }
          for (
            var _0x3dcfd4 = 0x0;
            _0x3dcfd4 < _0x37573d.touches.length;
            _0x3dcfd4++
          ) {
            var _0x5841cd = _0x37573d.touches[_0x3dcfd4];
            if (_0x5841cd) {
              this.touches.push({
                x: (_0x5841cd.clientX - _0x208cbd.left) / _0x4a68cd,
                y: (_0x5841cd.clientY - _0x208cbd.top) / _0x30c603,
              });
            }
          }
        } else {
          this.windowMove(_0x37573d);
        }
      }
      try {
        ig.soundHandler.unlockWebAudio();
      } catch (_0xfb1bcf) {}
    },
    touchdown: function (_0x497e19) {
      var _0x58c05f =
        parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth;
      var _0x136bb6 =
        parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight;
      var _0x58c05f = ig.system.scale * (_0x58c05f / ig.system.realWidth);
      var _0x136bb6 = ig.system.scale * (_0x136bb6 / ig.system.realHeight);
      if (window.navigator.msPointerEnabled) {
        this.windowKeyDown(_0x497e19);
      } else {
        if (ig.ua.touchDevice && _0x497e19.touches) {
          for (; 0x0 < this.touches.length; ) {
            this.touches.pop();
          }
          if (!this.multitouchCapable && 0x1 < _0x497e19.touches.length) {
            this.multitouchCapable = true;
          }
          var _0x4346e8 = {
            left: 0x0,
            top: 0x0,
          };
          if (ig.system.canvas.getBoundingClientRect) {
            _0x4346e8 = ig.system.canvas.getBoundingClientRect();
          }
          for (
            var _0x3fd078 = 0x0;
            _0x3fd078 < _0x497e19.touches.length;
            _0x3fd078++
          ) {
            var _0x1c06dd = _0x497e19.touches[_0x3fd078];
            if (_0x1c06dd) {
              this.touches.push({
                x: (_0x1c06dd.clientX - _0x4346e8.left) / _0x58c05f,
                y: (_0x1c06dd.clientY - _0x4346e8.top) / _0x136bb6,
              });
            }
          }
        }
      }
    },
    touchup: function (_0x29c424) {
      var _0x31b947 =
        parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth;
      parseInt(ig.system.canvas.offsetHeight);
      _0x31b947 = ig.system.scale * (_0x31b947 / ig.system.realWidth);
      if (window.navigator.msPointerEnabled) {
        this.windowKeyUp(_0x29c424);
      } else {
        this.lastEventUp = _0x29c424;
        var _0x2b2673 = {
          left: 0x0,
          top: 0x0,
        };
        if (ig.system.canvas.getBoundingClientRect) {
          _0x2b2673 = ig.system.canvas.getBoundingClientRect();
        }
        if (ig.ua.touchDevice) {
          _0x29c424 =
            (_0x29c424.changedTouches[0x0].clientX - _0x2b2673.left) /
            _0x31b947;
          for (_0x31b947 = 0x0; _0x31b947 < this.touches.length; _0x31b947++) {
            if (
              this.touches[_0x31b947].x >= _0x29c424 - 0x28 &&
              this.touches[_0x31b947].x <= _0x29c424 + 0x28
            ) {
              this.touches.splice(_0x31b947, 0x1);
            }
          }
        }
      }
      if (ig.visibilityHandler) {
        ig.visibilityHandler.onChange("focus");
      }
      try {
        ig.soundHandler.unlockWebAudio();
      } catch (_0x21ab41) {}
    },
    windowKeyDown: function (_0x17917e) {
      var _0xfcbbd3 =
        parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth;
      var _0x3ecce6 =
        parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight;
      var _0xfcbbd3 = ig.system.scale * (_0xfcbbd3 / ig.system.realWidth);
      var _0x3ecce6 = ig.system.scale * (_0x3ecce6 / ig.system.realHeight);
      if (window.navigator.msPointerEnabled) {
        var _0x10a024 = {
          left: 0x0,
          top: 0x0,
        };
        if (ig.system.canvas.getBoundingClientRect) {
          _0x10a024 = ig.system.canvas.getBoundingClientRect();
        }
        _0x17917e = _0x17917e.changedTouches
          ? _0x17917e.changedTouches
          : [_0x17917e];
        for (var _0x46c2b2 = 0x0; _0x46c2b2 < _0x17917e.length; ++_0x46c2b2) {
          var _0x3c0485 = _0x17917e[_0x46c2b2];
          var _0x1c8a4e =
            "undefined" != typeof _0x3c0485.identifier
              ? _0x3c0485.identifier
              : "undefined" != typeof _0x3c0485.pointerId
              ? _0x3c0485.pointerId
              : 0x1;
          var _0x360f77 = (_0x3c0485.clientX - _0x10a024.left) / _0xfcbbd3;
          var _0x3c0485 = (_0x3c0485.clientY - _0x10a024.top) / _0x3ecce6;
          for (
            var _0xaf35f0 = 0x0;
            _0xaf35f0 < this.touches.length;
            ++_0xaf35f0
          ) {
            if (this.touches[_0xaf35f0].identifier == _0x1c8a4e) {
              this.touches.splice(_0xaf35f0, 0x1);
            }
          }
          this.touches.push({
            x: _0x360f77,
            y: _0x3c0485,
            identifier: _0x1c8a4e,
          });
        }
        for (_0xfcbbd3 = 0x0; _0xfcbbd3 < this.touches.length; _0xfcbbd3++) {}
      }
    },
    windowKeyUp: function (_0x1014e6) {
      _0x1014e6 =
        "undefined" != typeof _0x1014e6.identifier
          ? _0x1014e6.identifier
          : "undefined" != typeof _0x1014e6.pointerId
          ? _0x1014e6.pointerId
          : 0x1;
      for (var _0x4a2888 = 0x0; _0x4a2888 < this.touches.length; ++_0x4a2888) {
        if (this.touches[_0x4a2888].identifier == _0x1014e6) {
          this.touches.splice(_0x4a2888, 0x1);
        }
      }
      for (; 0x0 < this.touches.length; ) {
        this.touches.pop();
      }
      if (ig.visibilityHandler) {
        ig.visibilityHandler.onChange("focus");
      }
      try {
        ig.soundHandler.unlockWebAudio();
      } catch (_0x3989f7) {}
    },
    windowMove: function (_0x379cd7) {
      var _0x12aa2a =
        parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth;
      var _0x3c64fb =
        parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight;
      var _0x12aa2a = ig.system.scale * (_0x12aa2a / ig.system.realWidth);
      var _0x3c64fb = ig.system.scale * (_0x3c64fb / ig.system.realHeight);
      var _0x6e33c0 = {
        left: 0x0,
        top: 0x0,
      };
      if (ig.system.canvas.getBoundingClientRect) {
        _0x6e33c0 = ig.system.canvas.getBoundingClientRect();
      }
      if (window.navigator.msPointerEnabled) {
        var _0x511186 =
          "undefined" != typeof _0x379cd7.identifier
            ? _0x379cd7.identifier
            : "undefined" != typeof _0x379cd7.pointerId
            ? _0x379cd7.pointerId
            : 0x1;
        for (
          var _0xaf0ef2 = 0x0;
          _0xaf0ef2 < this.touches.length;
          ++_0xaf0ef2
        ) {
          if (this.touches[_0xaf0ef2].identifier == _0x511186) {
            var _0x4a929a = (_0x379cd7.clientY - _0x6e33c0.top) / _0x3c64fb;
            this.touches[_0xaf0ef2].x =
              (_0x379cd7.clientX - _0x6e33c0.left) / _0x12aa2a;
            this.touches[_0xaf0ef2].y = _0x4a929a;
          }
        }
      }
      try {
        ig.soundHandler.unlockWebAudio();
      } catch (_0x23f009) {}
    },
    clear: function () {
      for (var _0x1e0fb0 = 0x0; _0x1e0fb0 < this.released.length; ++_0x1e0fb0) {
        if (this.released[_0x1e0fb0]) {
          this.released.splice(_0x1e0fb0, 0x1);
          _0x1e0fb0--;
        }
      }
    },
    pollMultitouch: function (_0xbe59d0) {
      if (!this.multitouchCapable && 0x1 < _0xbe59d0) {
        this.multitouchCapable = true;
      }
    },
    spliceFromArray: function (_0x557c80, _0x12b321) {
      for (var _0x2e4b6e = 0x0; _0x2e4b6e < _0x12b321.length; _0x2e4b6e++) {
        for (var _0x30d59e = 0x0; _0x30d59e < _0x557c80.length; _0x30d59e++) {
          if (
            _0x557c80[_0x30d59e].identifier === _0x12b321[_0x2e4b6e].identifier
          ) {
            _0x557c80.splice(_0x30d59e, 0x1);
            _0x30d59e--;
          }
        }
      }
    },
    updateSizeProperties: function () {
      var _0x5d1813 =
        parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth;
      var _0xdd4fa7 =
        parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight;
      this.scaleX = ig.system.scale * (_0x5d1813 / ig.system.realWidth);
      this.scaleY = ig.system.scale * (_0xdd4fa7 / ig.system.realHeight);
    },
    upgrade: function (_0x589fce, _0x1f9ce1, _0x5cdf5e) {
      var _0x3ca6fe = {
        left: 0x0,
        top: 0x0,
      };
      if (ig.system.canvas.getBoundingClientRect) {
        _0x3ca6fe = ig.system.canvas.getBoundingClientRect();
      }
      var _0x1370ea = (_0x5cdf5e.clientX - _0x3ca6fe.left) / this.scaleX;
      var _0x3ca6fe = (_0x5cdf5e.clientY - _0x3ca6fe.top) / this.scaleY;
      for (var _0x5b096e = 0x0; _0x5b096e < _0x589fce.length; _0x5b096e++) {
        if (
          undefined !== typeof _0x589fce[_0x5b096e].identifier &&
          undefined !== typeof _0x5cdf5e.identifier &&
          _0x5cdf5e.identifier === _0x589fce[_0x5b096e].identifier
        ) {
          _0x589fce.splice(_0x5b096e, 0x1);
          _0x1f9ce1.push({
            identifier: _0x5cdf5e.identifier,
            x: _0x1370ea,
            y: _0x3ca6fe,
          });
          break;
        }
      }
    },
    updateArray: function (_0x17450c, _0x45e813) {
      var _0x654244 = {
        left: 0x0,
        top: 0x0,
      };
      if (ig.system.canvas.getBoundingClientRect) {
        _0x654244 = ig.system.canvas.getBoundingClientRect();
      }
      var _0x551c2f = (_0x45e813.clientX - _0x654244.left) / this.scaleX;
      var _0x654244 = (_0x45e813.clientY - _0x654244.top) / this.scaleY;
      for (var _0x5b99f1 = 0x0; _0x5b99f1 < _0x17450c.length; _0x5b99f1++) {
        if (
          undefined !== typeof _0x17450c[_0x5b99f1].identifier &&
          undefined !== typeof _0x45e813.identifier &&
          _0x45e813.identifier === _0x17450c[_0x5b99f1].identifier
        ) {
          _0x17450c[_0x5b99f1].x = _0x551c2f;
          _0x17450c[_0x5b99f1].y = _0x654244;
          break;
        }
      }
    },
  });
});
ig.baked = true;
ig.module("impact.animation")
  .requires("impact.timer", "impact.image")
  .defines(function () {
    ig.AnimationSheet = ig.Class.extend({
      width: 0x8,
      height: 0x8,
      image: null,
      init: function (_0x29d758, _0x499754, _0x433741) {
        this.width = _0x499754;
        this.height = _0x433741;
        this.image = new ig.Image(_0x29d758);
      },
    });
    ig.Animation = ig.Class.extend({
      sheet: null,
      timer: null,
      sequence: [],
      flip: {
        x: false,
        y: false,
      },
      pivot: {
        x: 0x0,
        y: 0x0,
      },
      frameTime: 0x0,
      frame: 0x0,
      tile: 0x0,
      stop: false,
      loopCount: 0x0,
      alpha: 0x1,
      angle: 0x0,
      init: function (_0x3deed9, _0x5bf120, _0x5594b8, _0x53bb4b) {
        this.sheet = _0x3deed9;
        this.pivot = {
          x: _0x3deed9.width / 0x2,
          y: _0x3deed9.height / 0x2,
        };
        this.timer = new ig.Timer();
        this.frameTime = _0x5bf120;
        this.sequence = _0x5594b8;
        this.stop = !!_0x53bb4b;
        this.tile = this.sequence[0x0];
      },
      rewind: function () {
        this.timer.set();
        this.frame = this.loopCount = 0x0;
        this.tile = this.sequence[0x0];
        return this;
      },
      gotoFrame: function (_0x488c34) {
        this.timer.set(this.frameTime * -_0x488c34 - 0.0001);
        this.update();
      },
      gotoRandomFrame: function () {
        this.gotoFrame(Math.floor(Math.random() * this.sequence.length));
      },
      update: function () {
        var _0x17cb55 = Math.floor(this.timer.delta() / this.frameTime);
        this.loopCount = Math.floor(_0x17cb55 / this.sequence.length);
        this.frame =
          this.stop && 0x0 < this.loopCount
            ? this.sequence.length - 0x1
            : _0x17cb55 % this.sequence.length;
        this.tile = this.sequence[this.frame];
      },
      draw: function (_0x536d8e, _0x5e1789) {
        var _0xfa9618 = Math.max(this.sheet.width, this.sheet.height);
        if (
          !(
            _0x536d8e > ig.system.width ||
            _0x5e1789 > ig.system.height ||
            0x0 > _0x536d8e + _0xfa9618 ||
            0x0 > _0x5e1789 + _0xfa9618
          )
        ) {
          if (0x1 != this.alpha) {
            ig.system.context.globalAlpha = this.alpha;
          }
          if (0x0 == this.angle) {
            this.sheet.image.drawTile(
              _0x536d8e,
              _0x5e1789,
              this.tile,
              this.sheet.width,
              this.sheet.height,
              this.flip.x,
              this.flip.y
            );
          } else {
            ig.system.context.save();
            ig.system.context.translate(
              ig.system.getDrawPos(_0x536d8e + this.pivot.x),
              ig.system.getDrawPos(_0x5e1789 + this.pivot.y)
            );
            ig.system.context.rotate(this.angle);
            this.sheet.image.drawTile(
              -this.pivot.x,
              -this.pivot.y,
              this.tile,
              this.sheet.width,
              this.sheet.height,
              this.flip.x,
              this.flip.y
            );
            ig.system.context.restore();
          }
          if (0x1 != this.alpha) {
            ig.system.context.globalAlpha = 0x1;
          }
        }
      },
    });
  });
ig.baked = true;
ig.module("impact.entity")
  .requires("impact.animation", "impact.impact")
  .defines(function () {
    ig.Entity = ig.Class.extend({
      id: 0x0,
      settings: {},
      size: {
        x: 0x10,
        y: 0x10,
      },
      offset: {
        x: 0x0,
        y: 0x0,
      },
      pos: {
        x: 0x0,
        y: 0x0,
      },
      last: {
        x: 0x0,
        y: 0x0,
      },
      vel: {
        x: 0x0,
        y: 0x0,
      },
      accel: {
        x: 0x0,
        y: 0x0,
      },
      friction: {
        x: 0x0,
        y: 0x0,
      },
      maxVel: {
        x: 0x7d0,
        y: 0x7d0,
      },
      zIndex: 0x0,
      gravityFactor: 0x0,
      standing: false,
      bounciness: 0x0,
      minBounceVelocity: 0x28,
      anims: {},
      animSheet: null,
      currentAnim: null,
      health: 0xa,
      type: 0x0,
      checkAgainst: 0x0,
      collides: 0x0,
      _killed: false,
      slopeStanding: {
        min: (0x2c).toRad(),
        max: (0x88).toRad(),
      },
      init: function (_0x275474, _0x3f4a72, _0x55ed4e) {
        this.id = ++ig.Entity._lastId;
        this.pos.x = this.last.x = _0x275474;
        this.pos.y = this.last.y = _0x3f4a72;
        ig.merge(this, _0x55ed4e);
      },
      reset: function (_0x1bf1ad, _0xf16985, _0x56dd8c) {
        var _0x65ae94 = this.constructor.prototype;
        this.pos.x = _0x1bf1ad;
        this.pos.y = _0xf16985;
        this.last.x = _0x1bf1ad;
        this.last.y = _0xf16985;
        this.vel.x = _0x65ae94.vel.x;
        this.vel.y = _0x65ae94.vel.y;
        this.accel.x = _0x65ae94.accel.x;
        this.accel.y = _0x65ae94.accel.y;
        this.health = _0x65ae94.health;
        this._killed = _0x65ae94._killed;
        this.standing = _0x65ae94.standing;
        this.type = _0x65ae94.type;
        this.checkAgainst = _0x65ae94.checkAgainst;
        this.collides = _0x65ae94.collides;
        ig.merge(this, _0x56dd8c);
      },
      addAnim: function (_0x5199bd, _0x1f0893, _0x419154, _0x5473ae) {
        if (!this.animSheet) {
          throw "No animSheet to add the animation " + _0x5199bd + " to.";
        }
        _0x1f0893 = new ig.Animation(
          this.animSheet,
          _0x1f0893,
          _0x419154,
          _0x5473ae
        );
        this.anims[_0x5199bd] = _0x1f0893;
        if (!this.currentAnim) {
          this.currentAnim = _0x1f0893;
        }
        return _0x1f0893;
      },
      update: function () {
        this.last.x = this.pos.x;
        this.last.y = this.pos.y;
        this.vel.y += ig.game.gravity * ig.system.tick * this.gravityFactor;
        this.vel.x = this.getNewVelocity(
          this.vel.x,
          this.accel.x,
          this.friction.x,
          this.maxVel.x
        );
        this.vel.y = this.getNewVelocity(
          this.vel.y,
          this.accel.y,
          this.friction.y,
          this.maxVel.y
        );
        var _0x1c7c16 = ig.game.collisionMap.trace(
          this.pos.x,
          this.pos.y,
          this.vel.x * ig.system.tick,
          this.vel.y * ig.system.tick,
          this.size.x,
          this.size.y
        );
        this.handleMovementTrace(_0x1c7c16);
        if (this.currentAnim) {
          this.currentAnim.update();
        }
      },
      getNewVelocity: function (_0x1017bd, _0x2c8625, _0x11bc8c, _0x26844e) {
        return _0x2c8625
          ? (_0x1017bd + _0x2c8625 * ig.system.tick).limit(
              -_0x26844e,
              _0x26844e
            )
          : _0x11bc8c
          ? ((_0x2c8625 = _0x11bc8c * ig.system.tick),
            0x0 < _0x1017bd - _0x2c8625
              ? _0x1017bd - _0x2c8625
              : 0x0 > _0x1017bd + _0x2c8625
              ? _0x1017bd + _0x2c8625
              : 0x0)
          : _0x1017bd.limit(-_0x26844e, _0x26844e);
      },
      handleMovementTrace: function (_0x1f9d32) {
        this.standing = false;
        if (_0x1f9d32.collision.y) {
          if (
            0x0 < this.bounciness &&
            Math.abs(this.vel.y) > this.minBounceVelocity
          ) {
            this.vel.y *= -this.bounciness;
          } else {
            if (0x0 < this.vel.y) {
              this.standing = true;
            }
            this.vel.y = 0x0;
          }
        }
        if (_0x1f9d32.collision.x) {
          this.vel.x =
            0x0 < this.bounciness &&
            Math.abs(this.vel.x) > this.minBounceVelocity
              ? this.vel.x * -this.bounciness
              : 0x0;
        }
        if (_0x1f9d32.collision.slope) {
          var _0x3e9e81 = _0x1f9d32.collision.slope;
          if (0x0 < this.bounciness) {
            var _0x183183 =
              this.vel.x * _0x3e9e81.nx + this.vel.y * _0x3e9e81.ny;
            this.vel.x =
              (this.vel.x - 0x2 * _0x3e9e81.nx * _0x183183) * this.bounciness;
            this.vel.y =
              (this.vel.y - 0x2 * _0x3e9e81.ny * _0x183183) * this.bounciness;
          } else {
            _0x183183 =
              (this.vel.x * _0x3e9e81.x + this.vel.y * _0x3e9e81.y) /
              (_0x3e9e81.x * _0x3e9e81.x + _0x3e9e81.y * _0x3e9e81.y);
            this.vel.x = _0x3e9e81.x * _0x183183;
            this.vel.y = _0x3e9e81.y * _0x183183;
            _0x3e9e81 = Math.atan2(_0x3e9e81.x, _0x3e9e81.y);
            if (
              _0x3e9e81 > this.slopeStanding.min &&
              _0x3e9e81 < this.slopeStanding.max
            ) {
              this.standing = true;
            }
          }
        }
        this.pos = _0x1f9d32.pos;
      },
      draw: function () {
        if (this.currentAnim) {
          this.currentAnim.draw(
            this.pos.x - this.offset.x - ig.game._rscreen.x,
            this.pos.y - this.offset.y - ig.game._rscreen.y
          );
        }
      },
      kill: function () {
        ig.game.removeEntity(this);
      },
      receiveDamage: function (_0x217994) {
        this.health -= _0x217994;
        if (0x0 >= this.health) {
          this.kill();
        }
      },
      touches: function (_0x5c9d32) {
        return !(
          this.pos.x >= _0x5c9d32.pos.x + _0x5c9d32.size.x ||
          this.pos.x + this.size.x <= _0x5c9d32.pos.x ||
          this.pos.y >= _0x5c9d32.pos.y + _0x5c9d32.size.y ||
          this.pos.y + this.size.y <= _0x5c9d32.pos.y
        );
      },
      distanceTo: function (_0x28a981) {
        var _0x9642c0 =
          this.pos.x +
          this.size.x / 0x2 -
          (_0x28a981.pos.x + _0x28a981.size.x / 0x2);
        _0x28a981 =
          this.pos.y +
          this.size.y / 0x2 -
          (_0x28a981.pos.y + _0x28a981.size.y / 0x2);
        return Math.sqrt(_0x9642c0 * _0x9642c0 + _0x28a981 * _0x28a981);
      },
      angleTo: function (_0x126c8d) {
        return Math.atan2(
          _0x126c8d.pos.y +
            _0x126c8d.size.y / 0x2 -
            (this.pos.y + this.size.y / 0x2),
          _0x126c8d.pos.x +
            _0x126c8d.size.x / 0x2 -
            (this.pos.x + this.size.x / 0x2)
        );
      },
      check: function () {},
      collideWith: function () {},
      ready: function () {},
      erase: function () {},
    });
    ig.Entity._lastId = 0x0;
    ig.Entity.COLLIDES = {
      NEVER: 0x0,
      LITE: 0x1,
      PASSIVE: 0x2,
      ACTIVE: 0x4,
      FIXED: 0x8,
    };
    ig.Entity.TYPE = {
      NONE: 0x0,
      A: 0x1,
      B: 0x2,
      BOTH: 0x3,
    };
    ig.Entity.checkPair = function (_0xc885b1, _0x4e6453) {
      if (_0xc885b1.checkAgainst & _0x4e6453.type) {
        _0xc885b1.check(_0x4e6453);
      }
      if (_0x4e6453.checkAgainst & _0xc885b1.type) {
        _0x4e6453.check(_0xc885b1);
      }
      if (
        _0xc885b1.collides &&
        _0x4e6453.collides &&
        _0xc885b1.collides + _0x4e6453.collides > ig.Entity.COLLIDES.ACTIVE
      ) {
        ig.Entity.solveCollision(_0xc885b1, _0x4e6453);
      }
    };
    ig.Entity.solveCollision = function (_0x5b560b, _0x2cfe32) {
      var _0x3632c0 = null;
      if (
        _0x5b560b.collides == ig.Entity.COLLIDES.LITE ||
        _0x2cfe32.collides == ig.Entity.COLLIDES.FIXED
      ) {
        _0x3632c0 = _0x5b560b;
      } else {
        if (
          _0x2cfe32.collides == ig.Entity.COLLIDES.LITE ||
          _0x5b560b.collides == ig.Entity.COLLIDES.FIXED
        ) {
          _0x3632c0 = _0x2cfe32;
        }
      }
      if (
        _0x5b560b.last.x + _0x5b560b.size.x > _0x2cfe32.last.x &&
        _0x5b560b.last.x < _0x2cfe32.last.x + _0x2cfe32.size.x
      ) {
        if (_0x5b560b.last.y < _0x2cfe32.last.y) {
          ig.Entity.seperateOnYAxis(_0x5b560b, _0x2cfe32, _0x3632c0);
        } else {
          ig.Entity.seperateOnYAxis(_0x2cfe32, _0x5b560b, _0x3632c0);
        }
        _0x5b560b.collideWith(_0x2cfe32, "y");
        _0x2cfe32.collideWith(_0x5b560b, "y");
      } else if (
        _0x5b560b.last.y + _0x5b560b.size.y > _0x2cfe32.last.y &&
        _0x5b560b.last.y < _0x2cfe32.last.y + _0x2cfe32.size.y
      ) {
        if (_0x5b560b.last.x < _0x2cfe32.last.x) {
          ig.Entity.seperateOnXAxis(_0x5b560b, _0x2cfe32, _0x3632c0);
        } else {
          ig.Entity.seperateOnXAxis(_0x2cfe32, _0x5b560b, _0x3632c0);
        }
        _0x5b560b.collideWith(_0x2cfe32, "x");
        _0x2cfe32.collideWith(_0x5b560b, "x");
      }
    };
    ig.Entity.seperateOnXAxis = function (_0x4624ae, _0x39f2ca, _0x272ef6) {
      var _0x15c50d = _0x4624ae.pos.x + _0x4624ae.size.x - _0x39f2ca.pos.x;
      if (_0x272ef6) {
        _0x272ef6.vel.x =
          -_0x272ef6.vel.x * _0x272ef6.bounciness +
          (_0x4624ae === _0x272ef6 ? _0x39f2ca : _0x4624ae).vel.x;
        _0x39f2ca = ig.game.collisionMap.trace(
          _0x272ef6.pos.x,
          _0x272ef6.pos.y,
          _0x272ef6 == _0x4624ae ? -_0x15c50d : _0x15c50d,
          0x0,
          _0x272ef6.size.x,
          _0x272ef6.size.y
        );
        _0x272ef6.pos.x = _0x39f2ca.pos.x;
      } else {
        _0x272ef6 = (_0x4624ae.vel.x - _0x39f2ca.vel.x) / 0x2;
        _0x4624ae.vel.x = -_0x272ef6;
        _0x39f2ca.vel.x = _0x272ef6;
        _0x272ef6 = ig.game.collisionMap.trace(
          _0x4624ae.pos.x,
          _0x4624ae.pos.y,
          -_0x15c50d / 0x2,
          0x0,
          _0x4624ae.size.x,
          _0x4624ae.size.y
        );
        _0x4624ae.pos.x = Math.floor(_0x272ef6.pos.x);
        _0x4624ae = ig.game.collisionMap.trace(
          _0x39f2ca.pos.x,
          _0x39f2ca.pos.y,
          _0x15c50d / 0x2,
          0x0,
          _0x39f2ca.size.x,
          _0x39f2ca.size.y
        );
        _0x39f2ca.pos.x = Math.ceil(_0x4624ae.pos.x);
      }
    };
    ig.Entity.seperateOnYAxis = function (_0x269419, _0x2cc059, _0xa9e9de) {
      var _0x852daf = _0x269419.pos.y + _0x269419.size.y - _0x2cc059.pos.y;
      if (_0xa9e9de) {
        _0x2cc059 = _0x269419 === _0xa9e9de ? _0x2cc059 : _0x269419;
        _0xa9e9de.vel.y =
          -_0xa9e9de.vel.y * _0xa9e9de.bounciness + _0x2cc059.vel.y;
        var _0x2c9eb2 = 0x0;
        if (
          _0xa9e9de == _0x269419 &&
          Math.abs(_0xa9e9de.vel.y - _0x2cc059.vel.y) <
            _0xa9e9de.minBounceVelocity
        ) {
          _0xa9e9de.standing = true;
          _0x2c9eb2 = _0x2cc059.vel.x * ig.system.tick;
        }
        _0x269419 = ig.game.collisionMap.trace(
          _0xa9e9de.pos.x,
          _0xa9e9de.pos.y,
          _0x2c9eb2,
          _0xa9e9de == _0x269419 ? -_0x852daf : _0x852daf,
          _0xa9e9de.size.x,
          _0xa9e9de.size.y
        );
        _0xa9e9de.pos.y = _0x269419.pos.y;
        _0xa9e9de.pos.x = _0x269419.pos.x;
      } else if (
        ig.game.gravity &&
        (_0x2cc059.standing || 0x0 < _0x269419.vel.y)
      ) {
        _0xa9e9de = ig.game.collisionMap.trace(
          _0x269419.pos.x,
          _0x269419.pos.y,
          0x0,
          -(_0x269419.pos.y + _0x269419.size.y - _0x2cc059.pos.y),
          _0x269419.size.x,
          _0x269419.size.y
        );
        _0x269419.pos.y = _0xa9e9de.pos.y;
        if (
          0x0 < _0x269419.bounciness &&
          _0x269419.vel.y > _0x269419.minBounceVelocity
        ) {
          _0x269419.vel.y *= -_0x269419.bounciness;
        } else {
          _0x269419.standing = true;
          _0x269419.vel.y = 0x0;
        }
      } else {
        _0xa9e9de = (_0x269419.vel.y - _0x2cc059.vel.y) / 0x2;
        _0x269419.vel.y = -_0xa9e9de;
        _0x2cc059.vel.y = _0xa9e9de;
        _0x2c9eb2 = _0x2cc059.vel.x * ig.system.tick;
        _0xa9e9de = ig.game.collisionMap.trace(
          _0x269419.pos.x,
          _0x269419.pos.y,
          _0x2c9eb2,
          -_0x852daf / 0x2,
          _0x269419.size.x,
          _0x269419.size.y
        );
        _0x269419.pos.y = _0xa9e9de.pos.y;
        _0x269419 = ig.game.collisionMap.trace(
          _0x2cc059.pos.x,
          _0x2cc059.pos.y,
          0x0,
          _0x852daf / 0x2,
          _0x2cc059.size.x,
          _0x2cc059.size.y
        );
        _0x2cc059.pos.y = _0x269419.pos.y;
      }
    };
  });
ig.baked = true;
ig.module("impact.map").defines(function () {
  ig.Map = ig.Class.extend({
    tilesize: 0x8,
    width: 0x1,
    height: 0x1,
    pxWidth: 0x1,
    pxHeight: 0x1,
    data: [[]],
    name: null,
    init: function (_0x45ae84, _0x4c30af) {
      this.tilesize = _0x45ae84;
      this.data = _0x4c30af;
      this.height = _0x4c30af.length;
      this.width = _0x4c30af[0x0].length;
      this.pxWidth = this.width * this.tilesize;
      this.pxHeight = this.height * this.tilesize;
    },
    getTile: function (_0x2e031c, _0x33f6fd) {
      var _0x24bca7 = Math.floor(_0x2e031c / this.tilesize);
      var _0x32ed9e = Math.floor(_0x33f6fd / this.tilesize);
      return 0x0 <= _0x24bca7 &&
        _0x24bca7 < this.width &&
        0x0 <= _0x32ed9e &&
        _0x32ed9e < this.height
        ? this.data[_0x32ed9e][_0x24bca7]
        : 0x0;
    },
    setTile: function (_0x22cbb8, _0x564e4c, _0x2b444c) {
      _0x22cbb8 = Math.floor(_0x22cbb8 / this.tilesize);
      _0x564e4c = Math.floor(_0x564e4c / this.tilesize);
      if (
        0x0 <= _0x22cbb8 &&
        _0x22cbb8 < this.width &&
        0x0 <= _0x564e4c &&
        _0x564e4c < this.height
      ) {
        this.data[_0x564e4c][_0x22cbb8] = _0x2b444c;
      }
    },
  });
});
ig.baked = true;
ig.module("impact.collision-map")
  .requires("impact.map")
  .defines(function () {
    ig.CollisionMap = ig.Map.extend({
      lastSlope: 0x1,
      tiledef: null,
      init: function (_0x3497db, _0x22ea23, _0x158cca) {
        this.parent(_0x3497db, _0x22ea23);
        this.tiledef = _0x158cca || ig.CollisionMap.defaultTileDef;
        for (var _0x488968 in this.tiledef)
          if (_0x488968 | (0x0 > this.lastSlope)) {
            this.lastSlope = _0x488968 | 0x0;
          }
      },
      trace: function (
        _0x2910c8,
        _0x1ec524,
        _0x43652d,
        _0x47ad47,
        _0x44ce69,
        _0x51f625
      ) {
        var _0x16b97b = {
          collision: {
            x: false,
            y: false,
            slope: false,
          },
          pos: {
            x: _0x2910c8,
            y: _0x1ec524,
          },
          tile: {
            x: 0x0,
            y: 0x0,
          },
        };
        var _0x349521 = Math.ceil(
          (Math.max(Math.abs(_0x43652d), Math.abs(_0x47ad47)) + 0.1) /
            this.tilesize
        );
        if (0x1 < _0x349521) {
          var _0x1990fd = _0x43652d / _0x349521;
          var _0x274ce9 = _0x47ad47 / _0x349521;
          for (
            var _0x466d64 = 0x0;
            _0x466d64 < _0x349521 &&
            (_0x1990fd || _0x274ce9) &&
            !(this._traceStep(
              _0x16b97b,
              _0x2910c8,
              _0x1ec524,
              _0x1990fd,
              _0x274ce9,
              _0x44ce69,
              _0x51f625,
              _0x43652d,
              _0x47ad47,
              _0x466d64
            ),
            (_0x2910c8 = _0x16b97b.pos.x),
            (_0x1ec524 = _0x16b97b.pos.y),
            _0x16b97b.collision.x && (_0x43652d = _0x1990fd = 0x0),
            _0x16b97b.collision.y && (_0x47ad47 = _0x274ce9 = 0x0),
            _0x16b97b.collision.slope);
            _0x466d64++
          ) {}
        } else {
          this._traceStep(
            _0x16b97b,
            _0x2910c8,
            _0x1ec524,
            _0x43652d,
            _0x47ad47,
            _0x44ce69,
            _0x51f625,
            _0x43652d,
            _0x47ad47,
            0x0
          );
        }
        return _0x16b97b;
      },
      _traceStep: function (
        _0x2eaa70,
        _0x270c80,
        _0x3c686e,
        _0x460f41,
        _0x38ba38,
        _0xafda44,
        _0xb4ab63,
        _0x3f03df,
        _0x13df72,
        _0x5156e4
      ) {
        _0x2eaa70.pos.x += _0x460f41;
        _0x2eaa70.pos.y += _0x38ba38;
        var _0x4dc294 = 0x0;
        if (_0x460f41) {
          var _0x5e7060 = 0x0 < _0x460f41 ? _0xafda44 : 0x0;
          var _0x40cd92 = 0x0 > _0x460f41 ? this.tilesize : 0x0;
          var _0x4dc294 = Math.max(Math.floor(_0x3c686e / this.tilesize), 0x0);
          var _0x237340 = Math.min(
            Math.ceil((_0x3c686e + _0xb4ab63) / this.tilesize),
            this.height
          );
          _0x460f41 = Math.floor((_0x2eaa70.pos.x + _0x5e7060) / this.tilesize);
          var _0xc81037 = Math.floor((_0x270c80 + _0x5e7060) / this.tilesize);
          if (
            0x0 < _0x5156e4 ||
            _0x460f41 == _0xc81037 ||
            0x0 > _0xc81037 ||
            _0xc81037 >= this.width
          ) {
            _0xc81037 = -0x1;
          }
          if (0x0 <= _0x460f41 && _0x460f41 < this.width) {
            for (
              var _0x52c2ad = _0x4dc294;
              _0x52c2ad < _0x237340 &&
              !(
                -0x1 != _0xc81037 &&
                ((_0x4dc294 = this.data[_0x52c2ad][_0xc81037]),
                0x1 < _0x4dc294 &&
                  _0x4dc294 <= this.lastSlope &&
                  this._checkTileDef(
                    _0x2eaa70,
                    _0x4dc294,
                    _0x270c80,
                    _0x3c686e,
                    _0x3f03df,
                    _0x13df72,
                    _0xafda44,
                    _0xb4ab63,
                    _0xc81037,
                    _0x52c2ad
                  ))
              );
              _0x52c2ad++
            ) {
              _0x4dc294 = this.data[_0x52c2ad][_0x460f41];
              if (
                0x1 == _0x4dc294 ||
                _0x4dc294 > this.lastSlope ||
                (0x1 < _0x4dc294 &&
                  this._checkTileDef(
                    _0x2eaa70,
                    _0x4dc294,
                    _0x270c80,
                    _0x3c686e,
                    _0x3f03df,
                    _0x13df72,
                    _0xafda44,
                    _0xb4ab63,
                    _0x460f41,
                    _0x52c2ad
                  ))
              ) {
                if (
                  0x1 < _0x4dc294 &&
                  _0x4dc294 <= this.lastSlope &&
                  _0x2eaa70.collision.slope
                ) {
                  break;
                }
                _0x2eaa70.collision.x = true;
                _0x2eaa70.tile.x = _0x4dc294;
                _0x270c80 = _0x2eaa70.pos.x =
                  _0x460f41 * this.tilesize - _0x5e7060 + _0x40cd92;
                _0x3f03df = 0x0;
                break;
              }
            }
          }
        }
        if (_0x38ba38) {
          _0x5e7060 = 0x0 < _0x38ba38 ? _0xb4ab63 : 0x0;
          _0x38ba38 = 0x0 > _0x38ba38 ? this.tilesize : 0x0;
          _0x4dc294 = Math.max(
            Math.floor(_0x2eaa70.pos.x / this.tilesize),
            0x0
          );
          _0x40cd92 = Math.min(
            Math.ceil((_0x2eaa70.pos.x + _0xafda44) / this.tilesize),
            this.width
          );
          _0x52c2ad = Math.floor((_0x2eaa70.pos.y + _0x5e7060) / this.tilesize);
          _0x237340 = Math.floor((_0x3c686e + _0x5e7060) / this.tilesize);
          if (
            0x0 < _0x5156e4 ||
            _0x52c2ad == _0x237340 ||
            0x0 > _0x237340 ||
            _0x237340 >= this.height
          ) {
            _0x237340 = -0x1;
          }
          if (0x0 <= _0x52c2ad && _0x52c2ad < this.height) {
            for (
              _0x460f41 = _0x4dc294;
              _0x460f41 < _0x40cd92 &&
              !(
                -0x1 != _0x237340 &&
                ((_0x4dc294 = this.data[_0x237340][_0x460f41]),
                0x1 < _0x4dc294 &&
                  _0x4dc294 <= this.lastSlope &&
                  this._checkTileDef(
                    _0x2eaa70,
                    _0x4dc294,
                    _0x270c80,
                    _0x3c686e,
                    _0x3f03df,
                    _0x13df72,
                    _0xafda44,
                    _0xb4ab63,
                    _0x460f41,
                    _0x237340
                  ))
              );
              _0x460f41++
            ) {
              _0x4dc294 = this.data[_0x52c2ad][_0x460f41];
              if (
                0x1 == _0x4dc294 ||
                _0x4dc294 > this.lastSlope ||
                (0x1 < _0x4dc294 &&
                  this._checkTileDef(
                    _0x2eaa70,
                    _0x4dc294,
                    _0x270c80,
                    _0x3c686e,
                    _0x3f03df,
                    _0x13df72,
                    _0xafda44,
                    _0xb4ab63,
                    _0x460f41,
                    _0x52c2ad
                  ))
              ) {
                if (
                  0x1 < _0x4dc294 &&
                  _0x4dc294 <= this.lastSlope &&
                  _0x2eaa70.collision.slope
                ) {
                  break;
                }
                _0x2eaa70.collision.y = true;
                _0x2eaa70.tile.y = _0x4dc294;
                _0x2eaa70.pos.y =
                  _0x52c2ad * this.tilesize - _0x5e7060 + _0x38ba38;
                break;
              }
            }
          }
        }
      },
      _checkTileDef: function (
        _0x32ac5d,
        _0x2245cc,
        _0x5e8d00,
        _0xe2f04c,
        _0x98cf78,
        _0x14fc15,
        _0x5786f6,
        _0x1725ff,
        _0x396b2a,
        _0x472331
      ) {
        var _0x3b80ea = this.tiledef[_0x2245cc];
        if (!_0x3b80ea) {
          return false;
        }
        _0x2245cc = (_0x3b80ea[0x2] - _0x3b80ea[0x0]) * this.tilesize;
        var _0x1df839 = (_0x3b80ea[0x3] - _0x3b80ea[0x1]) * this.tilesize;
        var _0x5df0ef = _0x3b80ea[0x4];
        _0x5786f6 =
          _0x5e8d00 +
          _0x98cf78 +
          (0x0 > _0x1df839 ? _0x5786f6 : 0x0) -
          (_0x396b2a + _0x3b80ea[0x0]) * this.tilesize;
        _0x1725ff =
          _0xe2f04c +
          _0x14fc15 +
          (0x0 < _0x2245cc ? _0x1725ff : 0x0) -
          (_0x472331 + _0x3b80ea[0x1]) * this.tilesize;
        if (0x0 < _0x2245cc * _0x1725ff - _0x1df839 * _0x5786f6) {
          if (0x0 > _0x98cf78 * -_0x1df839 + _0x14fc15 * _0x2245cc) {
            return _0x5df0ef;
          }
          _0x396b2a = Math.sqrt(_0x2245cc * _0x2245cc + _0x1df839 * _0x1df839);
          _0x472331 = _0x1df839 / _0x396b2a;
          _0x396b2a = -_0x2245cc / _0x396b2a;
          var _0x440e = _0x5786f6 * _0x472331 + _0x1725ff * _0x396b2a;
          var _0x3b80ea = _0x472331 * _0x440e;
          var _0x440e = _0x396b2a * _0x440e;
          if (
            _0x3b80ea * _0x3b80ea + _0x440e * _0x440e >=
            _0x98cf78 * _0x98cf78 + _0x14fc15 * _0x14fc15
          ) {
            return (
              _0x5df0ef ||
              0.5 >
                _0x2245cc * (_0x1725ff - _0x14fc15) -
                  _0x1df839 * (_0x5786f6 - _0x98cf78)
            );
          }
          _0x32ac5d.pos.x = _0x5e8d00 + _0x98cf78 - _0x3b80ea;
          _0x32ac5d.pos.y = _0xe2f04c + _0x14fc15 - _0x440e;
          _0x32ac5d.collision.slope = {
            x: _0x2245cc,
            y: _0x1df839,
            nx: _0x472331,
            ny: _0x396b2a,
          };
          return true;
        }
        return false;
      },
    });
    ig.CollisionMap.defaultTileDef = {
      0x5: [0x0, 0x1, 0x1, 0.6666666666666666, true],
      0x6: [0x0, 0.6666666666666666, 0x1, 0.3333333333333333, true],
      0x7: [0x0, 0.3333333333333333, 0x1, 0x0, true],
      0x3: [0x0, 0x1, 0x1, 0.5, true],
      0x4: [0x0, 0.5, 0x1, 0x0, true],
      0x2: [0x0, 0x1, 0x1, 0x0, true],
      0xa: [0.5, 0x1, 0x1, 0x0, true],
      0x15: [0x0, 0x1, 0.5, 0x0, true],
      0x20: [0.6666666666666666, 0x1, 0x1, 0x0, true],
      0x2b: [0.3333333333333333, 0x1, 0.6666666666666666, 0x0, true],
      0x36: [0x0, 0x1, 0.3333333333333333, 0x0, true],
      0x1b: [0x0, 0x0, 0x1, 0.3333333333333333, true],
      0x1c: [0x0, 0.3333333333333333, 0x1, 0.6666666666666666, true],
      0x1d: [0x0, 0.6666666666666666, 0x1, 0x1, true],
      0x19: [0x0, 0x0, 0x1, 0.5, true],
      0x1a: [0x0, 0.5, 0x1, 0x1, true],
      0x18: [0x0, 0x0, 0x1, 0x1, true],
      0xb: [0x0, 0x0, 0.5, 0x1, true],
      0x16: [0.5, 0x0, 0x1, 0x1, true],
      0x21: [0x0, 0x0, 0.3333333333333333, 0x1, true],
      0x2c: [0.3333333333333333, 0x0, 0.6666666666666666, 0x1, true],
      0x37: [0.6666666666666666, 0x0, 0x1, 0x1, true],
      0x10: [0x1, 0.3333333333333333, 0x0, 0x0, true],
      0x11: [0x1, 0.6666666666666666, 0x0, 0.3333333333333333, true],
      0x12: [0x1, 0x1, 0x0, 0.6666666666666666, true],
      0xe: [0x1, 0.5, 0x0, 0x0, true],
      0xf: [0x1, 0x1, 0x0, 0.5, true],
      0xd: [0x1, 0x1, 0x0, 0x0, true],
      0x8: [0.5, 0x1, 0x0, 0x0, true],
      0x13: [0x1, 0x1, 0.5, 0x0, true],
      0x1e: [0.3333333333333333, 0x1, 0x0, 0x0, true],
      0x29: [0.6666666666666666, 0x1, 0.3333333333333333, 0x0, true],
      0x34: [0x1, 0x1, 0.6666666666666666, 0x0, true],
      0x26: [0x1, 0.6666666666666666, 0x0, 0x1, true],
      0x27: [0x1, 0.3333333333333333, 0x0, 0.6666666666666666, true],
      0x28: [0x1, 0x0, 0x0, 0.3333333333333333, true],
      0x24: [0x1, 0.5, 0x0, 0x1, true],
      0x25: [0x1, 0x0, 0x0, 0.5, true],
      0x23: [0x1, 0x0, 0x0, 0x1, true],
      0x9: [0x1, 0x0, 0.5, 0x1, true],
      0x14: [0.5, 0x0, 0x0, 0x1, true],
      0x1f: [0x1, 0x0, 0.6666666666666666, 0x1, true],
      0x2a: [0.6666666666666666, 0x0, 0.3333333333333333, 0x1, true],
      0x35: [0.3333333333333333, 0x0, 0x0, 0x1, true],
      0xc: [0x0, 0x0, 0x1, 0x0, false],
      0x17: [0x1, 0x1, 0x0, 0x1, false],
      0x22: [0x1, 0x0, 0x1, 0x1, false],
      0x2d: [0x0, 0x1, 0x0, 0x0, false],
    };
    ig.CollisionMap.staticNoCollision = {
      trace: function (_0x44c34e, _0x521c08, _0x4f878b, _0x348f15) {
        return {
          collision: {
            x: false,
            y: false,
            slope: false,
          },
          pos: {
            x: _0x44c34e + _0x4f878b,
            y: _0x521c08 + _0x348f15,
          },
          tile: {
            x: 0x0,
            y: 0x0,
          },
        };
      },
    };
  });
ig.baked = true;
ig.module("impact.background-map")
  .requires("impact.map", "impact.image")
  .defines(function () {
    ig.BackgroundMap = ig.Map.extend({
      tiles: null,
      scroll: {
        x: 0x0,
        y: 0x0,
      },
      distance: 0x1,
      repeat: false,
      tilesetName: "",
      foreground: false,
      enabled: true,
      preRender: false,
      preRenderedChunks: null,
      chunkSize: 0x200,
      debugChunks: false,
      anims: {},
      init: function (_0xd13f7e, _0x34be73, _0x20c06b) {
        this.parent(_0xd13f7e, _0x34be73);
        this.setTileset(_0x20c06b);
      },
      setTileset: function (_0x5a9036) {
        this.tilesetName =
          _0x5a9036 instanceof ig.Image ? _0x5a9036.path : _0x5a9036;
        this.tiles = new ig.Image(this.tilesetName);
        this.preRenderedChunks = null;
      },
      setScreenPos: function (_0x120e43, _0x2eb0e0) {
        this.scroll.x = _0x120e43 / this.distance;
        this.scroll.y = _0x2eb0e0 / this.distance;
      },
      preRenderMapToChunks: function () {
        var _0x53eb46 = this.width * this.tilesize * ig.system.scale;
        var _0x55ad8b = this.height * this.tilesize * ig.system.scale;
        this.chunkSize = Math.min(
          Math.max(_0x53eb46, _0x55ad8b),
          this.chunkSize
        );
        var _0x2f9685 = Math.ceil(_0x53eb46 / this.chunkSize);
        var _0x5f3498 = Math.ceil(_0x55ad8b / this.chunkSize);
        this.preRenderedChunks = [];
        for (var _0x5847b0 = 0x0; _0x5847b0 < _0x5f3498; _0x5847b0++) {
          this.preRenderedChunks[_0x5847b0] = [];
          for (var _0xd3fa9d = 0x0; _0xd3fa9d < _0x2f9685; _0xd3fa9d++) {
            this.preRenderedChunks[_0x5847b0][_0xd3fa9d] = this.preRenderChunk(
              _0xd3fa9d,
              _0x5847b0,
              _0xd3fa9d == _0x2f9685 - 0x1
                ? _0x53eb46 - _0xd3fa9d * this.chunkSize
                : this.chunkSize,
              _0x5847b0 == _0x5f3498 - 0x1
                ? _0x55ad8b - _0x5847b0 * this.chunkSize
                : this.chunkSize
            );
          }
        }
      },
      preRenderChunk: function (_0x243829, _0x14c123, _0x31f559, _0x57e145) {
        var _0xc15747 = _0x31f559 / this.tilesize / ig.system.scale + 0x1;
        var _0x4a9585 = _0x57e145 / this.tilesize / ig.system.scale + 0x1;
        var _0xf797a3 =
          ((_0x243829 * this.chunkSize) / ig.system.scale) % this.tilesize;
        var _0x531153 =
          ((_0x14c123 * this.chunkSize) / ig.system.scale) % this.tilesize;
        _0x243829 = Math.floor(
          (_0x243829 * this.chunkSize) / this.tilesize / ig.system.scale
        );
        var _0x3ebb89 = Math.floor(
          (_0x14c123 * this.chunkSize) / this.tilesize / ig.system.scale
        );
        _0x14c123 = ig.$new("canvas");
        _0x14c123.width = _0x31f559;
        _0x14c123.height = _0x57e145;
        _0x14c123.retinaResolutionEnabled = false;
        _0x57e145 = _0x14c123.getContext("2d");
        ig.System.scaleMode(_0x14c123, _0x57e145);
        _0x31f559 = ig.system.context;
        ig.system.context = _0x57e145;
        for (_0x57e145 = 0x0; _0x57e145 < _0xc15747; _0x57e145++) {
          for (var _0x360206 = 0x0; _0x360206 < _0x4a9585; _0x360206++) {
            if (
              _0x57e145 + _0x243829 < this.width &&
              _0x360206 + _0x3ebb89 < this.height
            ) {
              var _0x4c80a7 =
                this.data[_0x360206 + _0x3ebb89][_0x57e145 + _0x243829];
              if (_0x4c80a7) {
                this.tiles.drawTile(
                  _0x57e145 * this.tilesize - _0xf797a3,
                  _0x360206 * this.tilesize - _0x531153,
                  _0x4c80a7 - 0x1,
                  this.tilesize
                );
              }
            }
          }
        }
        ig.system.context = _0x31f559;
        _0xc15747 = new Image();
        _0xc15747.src = _0x14c123.toDataURL();
        _0xc15747.width = _0x14c123.width;
        _0xc15747.height = _0x14c123.height;
        return _0xc15747;
      },
      draw: function () {
        if (this.tiles.loaded && this.enabled) {
          if (this.preRender) {
            this.drawPreRendered();
          } else {
            this.drawTiled();
          }
        }
      },
      drawPreRendered: function () {
        if (!this.preRenderedChunks) {
          this.preRenderMapToChunks();
        }
        var _0x493fd0 = ig.system.getDrawPos(this.scroll.x);
        var _0x171e68 = ig.system.getDrawPos(this.scroll.y);
        if (this.repeat) {
          var _0x5520eb = this.width * this.tilesize * ig.system.scale;
          var _0x493fd0 = ((_0x493fd0 % _0x5520eb) + _0x5520eb) % _0x5520eb;
          var _0x5520eb = this.height * this.tilesize * ig.system.scale;
          var _0x171e68 = ((_0x171e68 % _0x5520eb) + _0x5520eb) % _0x5520eb;
        }
        var _0x5520eb = Math.max(Math.floor(_0x493fd0 / this.chunkSize), 0x0);
        var _0x1f8fe9 = Math.max(Math.floor(_0x171e68 / this.chunkSize), 0x0);
        var _0x348c67 = Math.ceil(
          (_0x493fd0 + ig.system.realWidth) / this.chunkSize
        );
        var _0x5884ea = Math.ceil(
          (_0x171e68 + ig.system.realHeight) / this.chunkSize
        );
        var _0xcb7b6f = this.preRenderedChunks[0x0].length;
        var _0x51a291 = this.preRenderedChunks.length;
        if (!this.repeat) {
          _0x348c67 = Math.min(_0x348c67, _0xcb7b6f);
          _0x5884ea = Math.min(_0x5884ea, _0x51a291);
        }
        var _0x57d09b = 0x0;
        for (var _0x5de562 = _0x1f8fe9; _0x5de562 < _0x5884ea; _0x5de562++) {
          var _0x3dc303 = 0x0;
          for (var _0x2ece17 = _0x5520eb; _0x2ece17 < _0x348c67; _0x2ece17++) {
            var _0x447558 =
              this.preRenderedChunks[_0x5de562 % _0x51a291][
                _0x2ece17 % _0xcb7b6f
              ];
            var _0x3e09ff = -_0x493fd0 + _0x2ece17 * this.chunkSize - _0x3dc303;
            var _0x2bbcd0 = -_0x171e68 + _0x5de562 * this.chunkSize - _0x57d09b;
            ig.system.context.drawImage(_0x447558, _0x3e09ff, _0x2bbcd0);
            ig.Image.drawCount++;
            if (this.debugChunks) {
              ig.system.context.strokeStyle = "#f0f";
              ig.system.context.strokeRect(
                _0x3e09ff,
                _0x2bbcd0,
                this.chunkSize,
                this.chunkSize
              );
            }
            if (
              this.repeat &&
              _0x447558.width < this.chunkSize &&
              _0x3e09ff + _0x447558.width < ig.system.realWidth
            ) {
              _0x3dc303 += this.chunkSize - _0x447558.width;
              if (_0x5de562 == _0x1f8fe9) {
                _0x348c67++;
              }
            }
          }
          if (
            this.repeat &&
            _0x447558.height < this.chunkSize &&
            _0x2bbcd0 + _0x447558.height < ig.system.realHeight
          ) {
            _0x57d09b += this.chunkSize - _0x447558.height;
            _0x5884ea++;
          }
        }
      },
      drawTiled: function () {
        var _0x531a8e = 0x0;
        var _0xd529cc = null;
        var _0x2e336b = (this.scroll.x / this.tilesize).toInt();
        var _0x370870 = (this.scroll.y / this.tilesize).toInt();
        var _0x250961 = this.scroll.x % this.tilesize;
        var _0x4df2fd = this.scroll.y % this.tilesize;
        var _0x1d9301 = -_0x250961 - this.tilesize;
        var _0x250961 = ig.system.width + this.tilesize - _0x250961;
        var _0x80cad3 = ig.system.height + this.tilesize - _0x4df2fd;
        var _0x551015 = -0x1;
        for (
          var _0x4df2fd = -_0x4df2fd - this.tilesize;
          _0x4df2fd < _0x80cad3;
          _0x551015++, _0x4df2fd += this.tilesize
        ) {
          var _0x5929e2 = _0x551015 + _0x370870;
          if (_0x5929e2 >= this.height || 0x0 > _0x5929e2) {
            if (!this.repeat) {
              continue;
            }
            _0x5929e2 = ((_0x5929e2 % this.height) + this.height) % this.height;
          }
          var _0x19032b = -0x1;
          for (
            var _0x24697c = _0x1d9301;
            _0x24697c < _0x250961;
            _0x19032b++, _0x24697c += this.tilesize
          ) {
            _0x531a8e = _0x19032b + _0x2e336b;
            if (_0x531a8e >= this.width || 0x0 > _0x531a8e) {
              if (!this.repeat) {
                continue;
              }
              _0x531a8e = ((_0x531a8e % this.width) + this.width) % this.width;
            }
            if ((_0x531a8e = this.data[_0x5929e2][_0x531a8e])) {
              if ((_0xd529cc = this.anims[_0x531a8e - 0x1])) {
                _0xd529cc.draw(_0x24697c, _0x4df2fd);
              } else {
                this.tiles.drawTile(
                  _0x24697c,
                  _0x4df2fd,
                  _0x531a8e - 0x1,
                  this.tilesize
                );
              }
            }
          }
        }
      },
    });
  });
ig.baked = true;
ig.module("impact.game")
  .requires(
    "impact.impact",
    "impact.entity",
    "impact.collision-map",
    "impact.background-map"
  )
  .defines(function () {
    ig.Game = ig.Class.extend({
      clearColor: "#000000",
      gravity: 0x0,
      screen: {
        x: 0x0,
        y: 0x0,
      },
      _rscreen: {
        x: 0x0,
        y: 0x0,
      },
      entities: [],
      namedEntities: {},
      collisionMap: ig.CollisionMap.staticNoCollision,
      backgroundMaps: [],
      backgroundAnims: {},
      autoSort: false,
      sortBy: null,
      cellSize: 0x40,
      _deferredKill: [],
      _levelToLoad: null,
      _doSortEntities: false,
      staticInstantiate: function () {
        this.sortBy = this.sortBy || ig.Game.SORT.Z_INDEX;
        ig.game = this;
        return null;
      },
      loadLevel: function (_0x3c1810) {
        this.screen = {
          x: 0x0,
          y: 0x0,
        };
        this.entities = [];
        this.namedEntities = {};
        for (
          var _0x37a1b2 = 0x0;
          _0x37a1b2 < _0x3c1810.entities.length;
          _0x37a1b2++
        ) {
          var _0x1f8868 = _0x3c1810.entities[_0x37a1b2];
          this.spawnEntity(
            _0x1f8868.type,
            _0x1f8868.x,
            _0x1f8868.y,
            _0x1f8868.settings
          );
        }
        this.sortEntities();
        this.collisionMap = ig.CollisionMap.staticNoCollision;
        this.backgroundMaps = [];
        for (_0x37a1b2 = 0x0; _0x37a1b2 < _0x3c1810.layer.length; _0x37a1b2++) {
          _0x1f8868 = _0x3c1810.layer[_0x37a1b2];
          if ("collision" == _0x1f8868.name) {
            this.collisionMap = new ig.CollisionMap(
              _0x1f8868.tilesize,
              _0x1f8868.data
            );
          } else {
            var _0x5917df = new ig.BackgroundMap(
              _0x1f8868.tilesize,
              _0x1f8868.data,
              _0x1f8868.tilesetName
            );
            _0x5917df.anims = this.backgroundAnims[_0x1f8868.tilesetName] || {};
            _0x5917df.repeat = _0x1f8868.repeat;
            _0x5917df.distance = _0x1f8868.distance;
            _0x5917df.foreground = !!_0x1f8868.foreground;
            _0x5917df.preRender = !!_0x1f8868.preRender;
            _0x5917df.name = _0x1f8868.name;
            this.backgroundMaps.push(_0x5917df);
          }
        }
        for (_0x37a1b2 = 0x0; _0x37a1b2 < this.entities.length; _0x37a1b2++) {
          this.entities[_0x37a1b2].ready();
        }
      },
      loadLevelDeferred: function (_0x2c56d2) {
        this._levelToLoad = _0x2c56d2;
      },
      getMapByName: function (_0x4efee5) {
        if ("collision" == _0x4efee5) {
          return this.collisionMap;
        }
        for (
          var _0x3fcebf = 0x0;
          _0x3fcebf < this.backgroundMaps.length;
          _0x3fcebf++
        ) {
          if (this.backgroundMaps[_0x3fcebf].name == _0x4efee5) {
            return this.backgroundMaps[_0x3fcebf];
          }
        }
        return null;
      },
      getEntityByName: function (_0x4070a0) {
        return this.namedEntities[_0x4070a0];
      },
      getEntitiesByType: function (_0xf63466) {
        _0xf63466 =
          "string" === typeof _0xf63466 ? ig.global[_0xf63466] : _0xf63466;
        var _0x588ea1 = [];
        for (
          var _0x3adbdf = 0x0;
          _0x3adbdf < this.entities.length;
          _0x3adbdf++
        ) {
          var _0x39abd0 = this.entities[_0x3adbdf];
          if (_0x39abd0 instanceof _0xf63466 && !_0x39abd0._killed) {
            _0x588ea1.push(_0x39abd0);
          }
        }
        return _0x588ea1;
      },
      spawnEntity: function (_0x182588, _0x354e14, _0x223b32, _0x33005c) {
        var _0x23d58d =
          "string" === typeof _0x182588 ? ig.global[_0x182588] : _0x182588;
        if (!_0x23d58d) {
          throw "Can't spawn entity of type " + _0x182588;
        }
        _0x182588 = new _0x23d58d(_0x354e14, _0x223b32, _0x33005c || {});
        this.entities.push(_0x182588);
        if (_0x182588.name) {
          this.namedEntities[_0x182588.name] = _0x182588;
        }
        return _0x182588;
      },
      sortEntities: function () {
        this.entities.sort(this.sortBy);
      },
      sortEntitiesDeferred: function () {
        this._doSortEntities = true;
      },
      removeEntity: function (_0x4fb8d4) {
        if (_0x4fb8d4.name) {
          delete this.namedEntities[_0x4fb8d4.name];
        }
        _0x4fb8d4._killed = true;
        _0x4fb8d4.type = ig.Entity.TYPE.NONE;
        _0x4fb8d4.checkAgainst = ig.Entity.TYPE.NONE;
        _0x4fb8d4.collides = ig.Entity.COLLIDES.NEVER;
        this._deferredKill.push(_0x4fb8d4);
      },
      run: function () {
        this.update();
        this.draw();
      },
      update: function () {
        if (this._levelToLoad) {
          this.loadLevel(this._levelToLoad);
          this._levelToLoad = null;
        }
        this.updateEntities();
        this.checkEntities();
        for (
          var _0x50353e = 0x0;
          _0x50353e < this._deferredKill.length;
          _0x50353e++
        ) {
          this._deferredKill[_0x50353e].erase();
          this.entities.erase(this._deferredKill[_0x50353e]);
        }
        this._deferredKill = [];
        if (this._doSortEntities || this.autoSort) {
          this.sortEntities();
          this._doSortEntities = false;
        }
        for (var _0x45d91c in this.backgroundAnims) {
          var _0x50353e = this.backgroundAnims[_0x45d91c];
          var _0x4bcffb;
          for (_0x4bcffb in _0x50353e) _0x50353e[_0x4bcffb].update();
        }
      },
      updateEntities: function () {
        for (
          var _0x265ee3 = 0x0;
          _0x265ee3 < this.entities.length;
          _0x265ee3++
        ) {
          var _0x5a7ba3 = this.entities[_0x265ee3];
          if (!_0x5a7ba3._killed) {
            _0x5a7ba3.update();
          }
        }
      },
      draw: function () {
        if (this.clearColor) {
          ig.system.clear(this.clearColor);
        }
        this._rscreen.x = ig.system.getDrawPos(this.screen.x) / ig.system.scale;
        this._rscreen.y = ig.system.getDrawPos(this.screen.y) / ig.system.scale;
        var _0xbffb90;
        for (
          _0xbffb90 = 0x0;
          _0xbffb90 < this.backgroundMaps.length;
          _0xbffb90++
        ) {
          var _0x43c4df = this.backgroundMaps[_0xbffb90];
          if (_0x43c4df.foreground) {
            break;
          }
          _0x43c4df.setScreenPos(this.screen.x, this.screen.y);
          _0x43c4df.draw();
        }
        this.drawEntities();
        for (_0xbffb90; _0xbffb90 < this.backgroundMaps.length; _0xbffb90++) {
          _0x43c4df = this.backgroundMaps[_0xbffb90];
          _0x43c4df.setScreenPos(this.screen.x, this.screen.y);
          _0x43c4df.draw();
        }
      },
      drawEntities: function () {
        for (
          var _0x4c4f47 = 0x0;
          _0x4c4f47 < this.entities.length;
          _0x4c4f47++
        ) {
          this.entities[_0x4c4f47].draw();
        }
      },
      checkEntities: function () {
        var _0x56ca27 = {};
        for (
          var _0x2df6b9 = 0x0;
          _0x2df6b9 < this.entities.length;
          _0x2df6b9++
        ) {
          var _0xfa724e = this.entities[_0x2df6b9];
          if (
            !(
              _0xfa724e.type == ig.Entity.TYPE.NONE &&
              _0xfa724e.checkAgainst == ig.Entity.TYPE.NONE &&
              _0xfa724e.collides == ig.Entity.COLLIDES.NEVER
            )
          ) {
            var _0x134435 = {};
            var _0x247dd8 = Math.floor(_0xfa724e.pos.y / this.cellSize);
            var _0x4e7fc2 =
              Math.floor((_0xfa724e.pos.x + _0xfa724e.size.x) / this.cellSize) +
              0x1;
            var _0x5c9887 =
              Math.floor((_0xfa724e.pos.y + _0xfa724e.size.y) / this.cellSize) +
              0x1;
            for (
              var _0x240d49 = Math.floor(_0xfa724e.pos.x / this.cellSize);
              _0x240d49 < _0x4e7fc2;
              _0x240d49++
            ) {
              for (
                var _0x137fc9 = _0x247dd8;
                _0x137fc9 < _0x5c9887;
                _0x137fc9++
              ) {
                if (_0x56ca27[_0x240d49]) {
                  if (_0x56ca27[_0x240d49][_0x137fc9]) {
                    var _0x1aed3e = _0x56ca27[_0x240d49][_0x137fc9];
                    for (
                      var _0x17a023 = 0x0;
                      _0x17a023 < _0x1aed3e.length;
                      _0x17a023++
                    ) {
                      if (
                        _0xfa724e.touches(_0x1aed3e[_0x17a023]) &&
                        !_0x134435[_0x1aed3e[_0x17a023].id]
                      ) {
                        _0x134435[_0x1aed3e[_0x17a023].id] = true;
                        ig.Entity.checkPair(_0xfa724e, _0x1aed3e[_0x17a023]);
                      }
                    }
                    _0x1aed3e.push(_0xfa724e);
                  } else {
                    _0x56ca27[_0x240d49][_0x137fc9] = [_0xfa724e];
                  }
                } else {
                  _0x56ca27[_0x240d49] = {};
                  _0x56ca27[_0x240d49][_0x137fc9] = [_0xfa724e];
                }
              }
            }
          }
        }
      },
    });
    ig.Game.SORT = {
      Z_INDEX: function (_0x3b6b68, _0x23ce2c) {
        return _0x3b6b68.zIndex - _0x23ce2c.zIndex;
      },
      POS_X: function (_0x37bca2, _0x1f3174) {
        return (
          _0x37bca2.pos.x +
          _0x37bca2.size.x -
          (_0x1f3174.pos.x + _0x1f3174.size.x)
        );
      },
      POS_Y: function (_0x17135e, _0x51690d) {
        return (
          _0x17135e.pos.y +
          _0x17135e.size.y -
          (_0x51690d.pos.y + _0x51690d.size.y)
        );
      },
    };
  });
ig.baked = true;
ig.module("plugins.io.fake-storage")
  .requires("impact.game")
  .defines(function () {
    ig.FakeStorage = ig.Class.extend({
      tempData: {},
      init: function () {
        ig.FakeStorage.instance = this;
      },
      initUnset: function (_0x2ac428, _0x16869f) {
        if (null === this.get(_0x2ac428)) {
          this.set(_0x2ac428, _0x16869f);
        }
      },
      set: function (_0x2a00ed, _0x5cf99a) {
        this.tempData[_0x2a00ed] = JSON.stringify(_0x5cf99a);
      },
      setHighest: function (_0x250c9e, _0x38fc16) {
        if (_0x38fc16 > this.getFloat(_0x250c9e)) {
          this.set(_0x250c9e, _0x38fc16);
        }
      },
      get: function (_0xa67364) {
        return "undefined" == typeof this.tempData[_0xa67364]
          ? null
          : JSON.parse(this.tempData[_0xa67364]);
      },
      getInt: function (_0x41d7f6) {
        return ~~this.get(_0x41d7f6);
      },
      getFloat: function (_0x1b749f) {
        return parseFloat(this.get(_0x1b749f));
      },
      getBool: function (_0x4ece63) {
        return !!this.get(_0x4ece63);
      },
      isSet: function (_0x4ab93c) {
        return null !== this.get(_0x4ab93c);
      },
      remove: function (_0x144a37) {
        delete this.tempData[_0x144a37];
      },
      clear: function () {
        this.tempData = {};
      },
    });
  });
ig.baked = true;
ig.module("plugins.io.io-manager")
  .requires(
    "plugins.io.storage",
    "plugins.io.mouse",
    "plugins.io.keyboard",
    "plugins.io.gamepad",
    "plugins.io.multitouch",
    "plugins.io.multitouch-input",
    "plugins.io.gamepad-input",
    "plugins.io.fake-storage"
  )
  .defines(function () {
    IoManager = ig.Class.extend({
      version: "1.0.0",
      storage: null,
      localStorageSupport: false,
      mouse: null,
      keyboard: null,
      multitouch: null,
      gamepad: null,
      init: function () {
        ig.multitouchInput = new ig.MultitouchInput();
        ig.gamepadInput = new ig.GamepadInput();
        this.unbindAll();
        this.initStorage();
        this.initMouse();
        this.initKeyboard();
      },
      unbindAll: function () {
        ig.input.unbindAll();
        ig.gamepadInput.unbindAll();
      },
      initStorage: function () {
        try {
          window.localStorage.setItem("test", "test");
          window.localStorage.removeItem("test");
          this.storage = new ig.Storage();
        } catch (_0x3b0fdf) {
          console.log("using fake storage");
          this.storage = new ig.FakeStorage();
        }
      },
      initMouse: function () {
        this.mouse = new Mouse();
      },
      initKeyboard: function () {
        this.keyboard = new Keyboard();
      },
      initMultitouch: function () {
        this.multitouch = new Multitouch();
      },
      initGamepad: function () {
        this.gamepad = new Gamepad();
      },
      press: function (_0x133173) {
        return !!(
          ig.input.pressed(_0x133173) ||
          (this.gamepad && this.gamepad.press(_0x133173))
        );
      },
      held: function (_0x414892) {
        return !!(
          ig.input.state(_0x414892) ||
          (this.gamepad && this.gamepad.state(_0x414892))
        );
      },
      release: function (_0x204798) {
        return !!(
          ig.input.released(_0x204798) ||
          (this.gamepad && this.gamepad.released(_0x204798))
        );
      },
      getClickPos: function () {
        return this.mouse.getPos();
      },
      getLastClickPos: function () {
        return this.mouse.getLast();
      },
      getTouchesPos: function () {
        return this.multitouch.getTouchesPos();
      },
      checkOverlap: function (
        _0x105350,
        _0x51332d,
        _0x1c031b,
        _0x5e8e02,
        _0xc763f
      ) {
        return !(
          _0x105350.x > _0x51332d + _0x5e8e02 ||
          _0x105350.x < _0x51332d ||
          _0x105350.y > _0x1c031b + _0xc763f ||
          _0x105350.y < _0x1c031b
        );
      },
      clear: function () {
        ig.multitouchInput.clear();
      },
      _supportsLocalStorage: function () {
        try {
          localStorage.setItem("test", "test");
          localStorage.removeItem("test");
          return (this.localStorageSupport =
            "localStorage" in window && null !== window.localStorage);
        } catch (_0x3ae086) {
          return this.localStorageSupport;
        }
      },
      storageIsSet: function (_0x1a29e5) {
        return "function" === typeof this.storage.isSet
          ? this.storage.isSet(_0x1a29e5)
          : null;
      },
      storageGet: function (_0x1c836d) {
        return "function" === typeof this.storage.get
          ? this.storage.get(_0x1c836d)
          : null;
      },
      storageSet: function (_0x5f0497, _0x89d310) {
        return "function" === typeof this.storage.set
          ? this.storage.set(_0x5f0497, _0x89d310)
          : null;
      },
      assert: function (_0x49acf7, _0x210bf9, _0x2aefd0) {
        if (_0x210bf9 !== _0x2aefd0) {
          throw (
            "actualValue:" +
            _0x210bf9 +
            " not equal to testValue:" +
            _0x2aefd0 +
            " at " +
            _0x49acf7
          );
        }
      },
    });
  });
ig.baked = true;
ig.module("plugins.secure-ls").defines(function () {
  (function () {
    var _0x3f66c4 = function () {
      var _0x30d72f = [
        function (_0x56f329, _0x1f73f8, _0x5f57a3) {
          Object.defineProperty(_0x1f73f8, "__esModule", {
            value: true,
          });
          var _0x7728bd = _0x5f57a3(0x1);
          var _0x14f966 =
            _0x7728bd && _0x7728bd.__esModule
              ? _0x7728bd
              : {
                  default: _0x7728bd,
                };
          var _0x7728bd = _0x5f57a3(0x2);
          var _0x20d7d6 =
            _0x7728bd && _0x7728bd.__esModule
              ? _0x7728bd
              : {
                  default: _0x7728bd,
                };
          var _0x7728bd = _0x5f57a3(0x8);
          var _0x25d251 =
            _0x7728bd && _0x7728bd.__esModule
              ? _0x7728bd
              : {
                  default: _0x7728bd,
                };
          var _0x7728bd = _0x5f57a3(0x9);
          var _0x2b7a53 =
            _0x7728bd && _0x7728bd.__esModule
              ? _0x7728bd
              : {
                  default: _0x7728bd,
                };
          var _0x7728bd = _0x5f57a3(0xa);
          var _0x543af9 =
            _0x7728bd && _0x7728bd.__esModule
              ? _0x7728bd
              : {
                  default: _0x7728bd,
                };
          var _0x7728bd = _0x5f57a3(0xb);
          var _0x457024 =
            _0x7728bd && _0x7728bd.__esModule
              ? _0x7728bd
              : {
                  default: _0x7728bd,
                };
          var _0x7728bd = _0x5f57a3(0x10);
          var _0x17fa8c =
            _0x7728bd && _0x7728bd.__esModule
              ? _0x7728bd
              : {
                  default: _0x7728bd,
                };
          var _0x7728bd = _0x5f57a3(0x11);
          var _0x44cf64 =
            _0x7728bd && _0x7728bd.__esModule
              ? _0x7728bd
              : {
                  default: _0x7728bd,
                };
          _0x5f57a3 = _0x5f57a3(0x12);
          var _0x2828a5 =
            _0x5f57a3 && _0x5f57a3.__esModule
              ? _0x5f57a3
              : {
                  default: _0x5f57a3,
                };
          var _0x27221b = function (_0x29b3a7) {
            if (!(this instanceof _0x27221b)) {
              throw new TypeError("Cannot call a class as a function");
            }
            _0x29b3a7 = _0x29b3a7 || {};
            this._name = "secure-ls";
            this.utils = _0x14f966["default"];
            this.constants = _0x20d7d6["default"];
            this.Base64 = _0x2b7a53["default"];
            this.LZString = _0x543af9["default"];
            this.AES = _0x457024["default"];
            this.DES = _0x17fa8c["default"];
            this.RABBIT = _0x44cf64["default"];
            this.RC4 = _0x2828a5["default"];
            this.enc = _0x25d251["default"];
            this.config = {
              isCompression: true,
              encodingType: _0x20d7d6["default"].EncrytionTypes.BASE64,
              encryptionSecret: _0x29b3a7.encryptionSecret,
              encryptionNamespace: _0x29b3a7.encryptionNamespace,
            };
            this.config.isCompression =
              "undefined" == typeof _0x29b3a7.isCompression ||
              _0x29b3a7.isCompression;
            this.config.encodingType =
              "undefined" != typeof _0x29b3a7.encodingType ||
              "" === _0x29b3a7.encodingType
                ? _0x29b3a7.encodingType.toLowerCase()
                : _0x20d7d6["default"].EncrytionTypes.BASE64;
            this.ls = localStorage;
            this.init();
          };
          _0x5f57a3 = [
            {
              key: "init",
              value: function () {
                var _0x1c78a4 = this.getMetaData();
                this.WarningEnum = this.constants.WarningEnum;
                this.WarningTypes = this.constants.WarningTypes;
                this.EncrytionTypes = this.constants.EncrytionTypes;
                this._isBase64 = this._isBase64EncryptionType();
                this._isAES = this._isAESEncryptionType();
                this._isDES = this._isDESEncryptionType();
                this._isRabbit = this._isRabbitEncryptionType();
                this._isRC4 = this._isRC4EncryptionType();
                this._isCompression = this._isDataCompressionEnabled();
                this.utils.allKeys = _0x1c78a4.keys || this.resetAllKeys();
              },
            },
            {
              key: "_isBase64EncryptionType",
              value: function () {
                return (
                  _0x2b7a53["default"] &&
                  ("undefined" == typeof this.config.encodingType ||
                    this.config.encodingType ===
                      this.constants.EncrytionTypes.BASE64)
                );
              },
            },
            {
              key: "_isAESEncryptionType",
              value: function () {
                return (
                  _0x457024["default"] &&
                  this.config.encodingType === this.constants.EncrytionTypes.AES
                );
              },
            },
            {
              key: "_isDESEncryptionType",
              value: function () {
                return (
                  _0x17fa8c["default"] &&
                  this.config.encodingType === this.constants.EncrytionTypes.DES
                );
              },
            },
            {
              key: "_isRabbitEncryptionType",
              value: function () {
                return (
                  _0x44cf64["default"] &&
                  this.config.encodingType ===
                    this.constants.EncrytionTypes.RABBIT
                );
              },
            },
            {
              key: "_isRC4EncryptionType",
              value: function () {
                return (
                  _0x2828a5["default"] &&
                  this.config.encodingType === this.constants.EncrytionTypes.RC4
                );
              },
            },
            {
              key: "_isDataCompressionEnabled",
              value: function () {
                return this.config.isCompression;
              },
            },
            {
              key: "getEncryptionSecret",
              value: function (_0x4ceb70) {
                var _0x422591 = this.getMetaData();
                if (
                  (_0x4ceb70 = this.utils.getObjectFromKey(
                    _0x422591.keys,
                    _0x4ceb70
                  )) &&
                  (this._isAES || this._isDES || this._isRabbit || this._isRC4)
                ) {
                  if ("undefined" == typeof this.config.encryptionSecret) {
                    this.utils.encryptionSecret = _0x4ceb70.s;
                    if (!this.utils.encryptionSecret) {
                      this.utils.encryptionSecret =
                        this.utils.generateSecretKey();
                      this.setMetaData();
                    }
                  } else {
                    this.utils.encryptionSecret =
                      this.config.encryptionSecret || _0x4ceb70.s || "";
                  }
                }
              },
            },
            {
              key: "get",
              value: function (_0x33d7f2, _0x57bfd2) {
                var _0x5b6e49 = "";
                var _0x1e5fcc = "";
                var _0x282cca = undefined;
                var _0x30de90 = undefined;
                var _0x5b6e49 = undefined;
                if (!this.utils.is(_0x33d7f2)) {
                  this.utils.warn(this.WarningEnum.KEY_NOT_PROVIDED);
                  return _0x1e5fcc;
                }
                _0x5b6e49 = this.getDataFromLocalStorage(_0x33d7f2);
                if (!_0x5b6e49) {
                  return _0x1e5fcc;
                }
                _0x282cca = _0x5b6e49;
                if (this._isCompression || _0x57bfd2) {
                  _0x282cca =
                    _0x543af9["default"].decompressFromUTF16(_0x5b6e49);
                }
                _0x5b6e49 = _0x282cca;
                if (this._isBase64 || _0x57bfd2) {
                  _0x5b6e49 = _0x2b7a53["default"].decode(_0x282cca);
                } else {
                  this.getEncryptionSecret(_0x33d7f2);
                  if (this._isAES) {
                    _0x30de90 = _0x457024["default"].decrypt(
                      _0x282cca.toString(),
                      this.utils.encryptionSecret
                    );
                  } else if (this._isDES) {
                    _0x30de90 = _0x17fa8c["default"].decrypt(
                      _0x282cca.toString(),
                      this.utils.encryptionSecret
                    );
                  } else if (this._isRabbit) {
                    _0x30de90 = _0x44cf64["default"].decrypt(
                      _0x282cca.toString(),
                      this.utils.encryptionSecret
                    );
                  } else if (this._isRC4) {
                    _0x30de90 = _0x2828a5["default"].decrypt(
                      _0x282cca.toString(),
                      this.utils.encryptionSecret
                    );
                  }
                  if (_0x30de90) {
                    _0x5b6e49 = _0x30de90.toString(_0x25d251["default"]._Utf8);
                  }
                }
                try {
                  _0x1e5fcc = JSON.parse(_0x5b6e49);
                } catch (_0x2ad787) {
                  throw Error("Could not parse JSON");
                }
                return _0x1e5fcc;
              },
            },
            {
              key: "getDataFromLocalStorage",
              value: function (_0x59bfb7) {
                return this.ls.getItem(_0x59bfb7, true);
              },
            },
            {
              key: "getAllKeys",
              value: function () {
                var _0x397fa9 = this.getMetaData();
                return this.utils.extractKeyNames(_0x397fa9) || [];
              },
            },
            {
              key: "set",
              value: function (_0x20468a, _0x277562) {
                var _0xf4a1d9 = "";
                return this.utils.is(_0x20468a)
                  ? (this.getEncryptionSecret(_0x20468a),
                    String(_0x20468a) !== String(this.utils.metaKey) &&
                      (this.utils.isKeyPresent(_0x20468a) ||
                        (this.utils.addToKeysList(_0x20468a),
                        this.setMetaData())),
                    (_0xf4a1d9 = this.processData(_0x277562)),
                    void this.setDataToLocalStorage(_0x20468a, _0xf4a1d9))
                  : void this.utils.warn(this.WarningEnum.KEY_NOT_PROVIDED);
              },
            },
            {
              key: "setDataToLocalStorage",
              value: function (_0x2ceaed, _0x47f36a) {
                this.ls.setItem(_0x2ceaed, _0x47f36a);
              },
            },
            {
              key: "remove",
              value: function (_0x505569) {
                return this.utils.is(_0x505569)
                  ? _0x505569 === this.utils.metaKey && this.getAllKeys().length
                    ? void this.utils.warn(this.WarningEnum.META_KEY_REMOVE)
                    : (this.utils.isKeyPresent(_0x505569) &&
                        (this.utils.removeFromKeysList(_0x505569),
                        this.setMetaData()),
                      void this.ls.removeItem(_0x505569))
                  : void this.utils.warn(this.WarningEnum.KEY_NOT_PROVIDED);
              },
            },
            {
              key: "removeAll",
              value: function () {
                var _0xfb5f24 = undefined;
                var _0x254204 = undefined;
                var _0xfb5f24 = this.getAllKeys();
                for (
                  var _0x254204 = 0x0;
                  _0x254204 < _0xfb5f24.length;
                  _0x254204++
                ) {
                  this.ls.removeItem(_0xfb5f24[_0x254204]);
                }
                this.ls.removeItem(this.utils.metaKey);
                this.resetAllKeys();
              },
            },
            {
              key: "clear",
              value: function () {
                this.ls.clear();
                this.resetAllKeys();
              },
            },
            {
              key: "resetAllKeys",
              value: function () {
                this.utils.allKeys = [];
                return [];
              },
            },
            {
              key: "processData",
              value: function (_0x282cd8, _0x5c6ac3) {
                if (
                  null === _0x282cd8 ||
                  undefined === _0x282cd8 ||
                  "" === _0x282cd8
                ) {
                  return "";
                }
                var _0x5526a6 = undefined;
                var _0x41c749 = undefined;
                var _0x5ecb78 = undefined;
                try {
                  _0x5526a6 = JSON.stringify(_0x282cd8);
                } catch (_0x33407e) {
                  throw Error("Could not stringify data.");
                }
                _0x41c749 = _0x5526a6;
                if (this._isBase64 || _0x5c6ac3) {
                  _0x41c749 = _0x2b7a53["default"].encode(_0x5526a6);
                } else {
                  if (this._isAES) {
                    _0x41c749 = _0x457024["default"].encrypt(
                      _0x5526a6,
                      this.utils.encryptionSecret
                    );
                  } else if (this._isDES) {
                    _0x41c749 = _0x17fa8c["default"].encrypt(
                      _0x5526a6,
                      this.utils.encryptionSecret
                    );
                  } else if (this._isRabbit) {
                    _0x41c749 = _0x44cf64["default"].encrypt(
                      _0x5526a6,
                      this.utils.encryptionSecret
                    );
                  } else if (this._isRC4) {
                    _0x41c749 = _0x2828a5["default"].encrypt(
                      _0x5526a6,
                      this.utils.encryptionSecret
                    );
                  }
                  _0x41c749 = _0x41c749 && _0x41c749.toString();
                }
                _0x5ecb78 = _0x41c749;
                if (this._isCompression || _0x5c6ac3) {
                  _0x5ecb78 = _0x543af9["default"].compressToUTF16(_0x41c749);
                }
                return _0x5ecb78;
              },
            },
            {
              key: "setMetaData",
              value: function () {
                var _0x8054f0 = this.processData(
                  {
                    keys: this.utils.allKeys,
                  },
                  true
                );
                this.setDataToLocalStorage(this.getMetaKey(), _0x8054f0);
              },
            },
            {
              key: "getMetaData",
              value: function () {
                return this.get(this.getMetaKey(), true) || {};
              },
            },
            {
              key: "getMetaKey",
              value: function () {
                return (
                  this.utils.metaKey +
                  (this.config.encryptionNamespace
                    ? "__" + this.config.encryptionNamespace
                    : "")
                );
              },
            },
          ];
          var _0x7728bd = _0x27221b.prototype;
          for (var _0x3b9648 = 0x0; _0x3b9648 < _0x5f57a3.length; _0x3b9648++) {
            var _0xd9e2ab = _0x5f57a3[_0x3b9648];
            _0xd9e2ab.enumerable = _0xd9e2ab.enumerable || false;
            _0xd9e2ab.configurable = true;
            if ("value" in _0xd9e2ab) {
              _0xd9e2ab.writable = true;
            }
            Object.defineProperty(_0x7728bd, _0xd9e2ab.key, _0xd9e2ab);
          }
          _0x1f73f8["default"] = _0x27221b;
          _0x56f329.exports = _0x1f73f8["default"];
        },
        function (_0x4e0b26, _0x314441, _0x2b0c17) {
          _0x314441 = _0x2b0c17(0x2);
          var _0x4a941d =
            _0x314441 && _0x314441.__esModule
              ? _0x314441
              : {
                  default: _0x314441,
                };
          _0x314441 = _0x2b0c17(0x3);
          var _0x721df7 =
            _0x314441 && _0x314441.__esModule
              ? _0x314441
              : {
                  default: _0x314441,
                };
          _0x2b0c17 = _0x2b0c17(0x4);
          var _0x110588 =
            _0x2b0c17 && _0x2b0c17.__esModule
              ? _0x2b0c17
              : {
                  default: _0x2b0c17,
                };
          _0x4e0b26.exports = {
            metaKey: "_secure__ls__metadata",
            encryptionSecret: "",
            secretPhrase: "s3cr3t$#@135^&*246",
            allKeys: [],
            is: function (_0x4134cd) {
              return !!_0x4134cd;
            },
            warn: function (_0x48088c) {
              _0x48088c = _0x48088c
                ? _0x48088c
                : _0x4a941d["default"].WarningEnum.DEFAULT_TEXT;
              console.warn(_0x4a941d["default"].WarningTypes[_0x48088c]);
            },
            generateSecretKey: function () {
              var _0x2d6f08 = _0x721df7["default"].random(0x10);
              0x0;
              return (
                (_0x2d6f08 = _0x110588["default"](
                  this.secretPhrase,
                  _0x2d6f08,
                  {
                    keySize: 0x4,
                  }
                )) && _0x2d6f08.toString()
              );
            },
            getObjectFromKey: function (_0x11ac59, _0x57a713) {
              if (!_0x11ac59 || !_0x11ac59.length) {
                return {};
              }
              var _0x5f15cd = undefined;
              var _0x5d4ad9 = {};
              for (
                var _0x5f15cd = 0x0;
                _0x5f15cd < _0x11ac59.length;
                _0x5f15cd++
              ) {
                if (_0x11ac59[_0x5f15cd].k === _0x57a713) {
                  _0x5d4ad9 = _0x11ac59[_0x5f15cd];
                  break;
                }
              }
              return _0x5d4ad9;
            },
            extractKeyNames: function (_0x18c3a6) {
              return _0x18c3a6 && _0x18c3a6.keys && _0x18c3a6.keys.length
                ? _0x18c3a6.keys.map(function (_0x41b6b7) {
                    return _0x41b6b7.k;
                  })
                : [];
            },
            getAllKeys: function () {
              return this.allKeys;
            },
            isKeyPresent: function (_0x6844f7) {
              var _0x3b8009 = false;
              for (
                var _0x35bb1b = 0x0;
                _0x35bb1b < this.allKeys.length;
                _0x35bb1b++
              ) {
                if (String(this.allKeys[_0x35bb1b].k) === String(_0x6844f7)) {
                  _0x3b8009 = true;
                  break;
                }
              }
              return _0x3b8009;
            },
            addToKeysList: function (_0x3b5601) {
              this.allKeys.push({
                k: _0x3b5601,
                s: this.encryptionSecret,
              });
            },
            removeFromKeysList: function (_0x235f37) {
              var _0x4c5dc7 = undefined;
              var _0x4839c7 = -0x1;
              for (
                var _0x4c5dc7 = 0x0;
                _0x4c5dc7 < this.allKeys.length;
                _0x4c5dc7++
              ) {
                if (this.allKeys[_0x4c5dc7].k === _0x235f37) {
                  _0x4839c7 = _0x4c5dc7;
                  break;
                }
              }
              if (-0x1 !== _0x4839c7) {
                this.allKeys.splice(_0x4839c7, 0x1);
              }
              return _0x4839c7;
            },
          };
        },
        function (_0x16f871) {
          var _0x3e7dff = {
            KEY_NOT_PROVIDED: "keyNotProvided",
            META_KEY_REMOVE: "metaKeyRemove",
            DEFAULT_TEXT: "defaultText",
          };
          var _0x10ad21 = {
            keyNotProvided: "Secure LS: Key not provided. Aborting operation!",
            metaKeyRemove:
              "Secure LS: Meta key can not be removed\nunless all keys created by Secure LS are removed!",
            defaultText: "Unexpected output",
          };
          _0x16f871.exports = {
            WarningEnum: _0x3e7dff,
            WarningTypes: _0x10ad21,
            EncrytionTypes: {
              BASE64: "base64",
              AES: "aes",
              DES: "des",
              RABBIT: "rabbit",
              RC4: "rc4",
            },
          };
        },
        function (_0x5d6736) {
          _0x5d6736.exports = {
            random: function (_0x3c901a) {
              var _0x2f0f47;
              var _0x2a965f = [];
              var _0x5d0daf = function (_0x4294d8) {
                var _0x2daf20 = 0x3ade68b1;
                return function () {
                  _0x2daf20 =
                    (0x9069 * (0xffff & _0x2daf20) + (_0x2daf20 >> 0x10)) &
                    0xffffffff;
                  _0x4294d8 =
                    (0x4650 * (0xffff & _0x4294d8) + (_0x4294d8 >> 0x10)) &
                    0xffffffff;
                  var _0x327907 =
                    ((_0x2daf20 << 0x10) + _0x4294d8) & 0xffffffff;
                  _0x327907 /= 0x100000000;
                  _0x327907 += 0.5;
                  return _0x327907 * (0.5 < Math.random() ? 0x1 : -0x1);
                };
              };
              for (
                var _0xd7fd14 = 0x0;
                _0xd7fd14 < _0x3c901a;
                _0xd7fd14 += 0x4
              ) {
                var _0x234426 = _0x5d0daf(
                  0x100000000 * (_0x2f0f47 || Math.random())
                );
                _0x2f0f47 = 0x3ade67b7 * _0x234426();
                _0x2a965f.push((0x100000000 * _0x234426()) | 0x0);
              }
              return new this.Set(_0x2a965f, _0x3c901a);
            },
            Set: function (_0x34292d, _0x3ace75) {
              _0x34292d = this.words = _0x34292d || [];
              if (undefined !== _0x3ace75) {
                this.sigBytes = _0x3ace75;
              } else {
                this.sigBytes = 0x8 * _0x34292d.length;
              }
            },
          };
        },
        function (_0x378c9d, _0x38503e, _0x19017c) {
          _0x38503e = _0x19017c(0x5);
          _0x19017c(0x6);
          _0x19017c(0x7);
          var _0x39c6f2 = _0x38503e.lib;
          _0x19017c = _0x39c6f2.Base;
          var _0x13da8e = _0x39c6f2.WordArray;
          var _0x39c6f2 = _0x38503e.algo;
          var _0x3c3fd2 = _0x39c6f2.HMAC;
          var _0x593407 = (_0x39c6f2.PBKDF2 = _0x19017c.extend({
            cfg: _0x19017c.extend({
              keySize: 0x4,
              hasher: _0x39c6f2.SHA1,
              iterations: 0x1,
            }),
            init: function (_0x3afc24) {
              this.cfg = this.cfg.extend(_0x3afc24);
            },
            compute: function (_0x24bfd3, _0x246b71) {
              var _0xb45413 = this.cfg;
              var _0xf1776d = _0x3c3fd2.create(_0xb45413.hasher, _0x24bfd3);
              var _0x4bd3c6 = _0x13da8e.create();
              var _0x49657d = _0x13da8e.create([0x1]);
              var _0xb8e5b9 = _0x4bd3c6.words;
              var _0x2d55e1 = _0x49657d.words;
              var _0xed9f3c = _0xb45413.keySize;
              for (
                var _0xb45413 = _0xb45413.iterations;
                _0xb8e5b9.length < _0xed9f3c;

              ) {
                var _0x5e8c1d = _0xf1776d.update(_0x246b71).finalize(_0x49657d);
                _0xf1776d.reset();
                var _0x3b623e = _0x5e8c1d.words;
                var _0x36921a = _0x3b623e.length;
                var _0x51ce83 = _0x5e8c1d;
                for (var _0x4acbf1 = 0x1; _0x4acbf1 < _0xb45413; _0x4acbf1++) {
                  _0x51ce83 = _0xf1776d.finalize(_0x51ce83);
                  _0xf1776d.reset();
                  var _0x519006 = _0x51ce83.words;
                  for (
                    var _0x266481 = 0x0;
                    _0x266481 < _0x36921a;
                    _0x266481++
                  ) {
                    _0x3b623e[_0x266481] ^= _0x519006[_0x266481];
                  }
                }
                _0x4bd3c6.concat(_0x5e8c1d);
                _0x2d55e1[0x0]++;
              }
              _0x4bd3c6.sigBytes = 0x4 * _0xed9f3c;
              return _0x4bd3c6;
            },
          }));
          _0x38503e.PBKDF2 = function (_0x12a9f7, _0x4d7c1c, _0x383f26) {
            return _0x593407.create(_0x383f26).compute(_0x12a9f7, _0x4d7c1c);
          };
          _0x378c9d.exports = _0x38503e.PBKDF2;
          true;
        },
        function (_0x2f9098) {
          var _0x6f8671;
          if (!_0x6f8671) {
            if (!(_0x6f8671 = Object.create)) {
              var _0x290d7a = function () {};
              _0x6f8671 = function (_0x17c2e1) {
                var _0x153bf8;
                _0x290d7a.prototype = _0x17c2e1;
                _0x153bf8 = new _0x290d7a();
                _0x290d7a.prototype = null;
                return _0x153bf8;
              };
            }
            var _0x4c6295 = _0x6f8671;
            _0x6f8671 = {};
            var _0x4b5e86 = (_0x6f8671.lib = {});
            var _0x3bc0db = (_0x4b5e86.Base = {
              extend: function (_0x2a2ab3) {
                var _0x4a497d = _0x4c6295(this);
                if (_0x2a2ab3) {
                  _0x4a497d.mixIn(_0x2a2ab3);
                }
                if (
                  !(
                    _0x4a497d.hasOwnProperty("init") &&
                    this.init !== _0x4a497d.init
                  )
                ) {
                  _0x4a497d.init = function () {
                    _0x4a497d.$super.init.apply(this, arguments);
                  };
                }
                _0x4a497d.init.prototype = _0x4a497d;
                _0x4a497d.$super = this;
                return _0x4a497d;
              },
              create: function () {
                var _0x250c43 = this.extend();
                _0x250c43.init.apply(_0x250c43, arguments);
                return _0x250c43;
              },
              init: function () {},
              mixIn: function (_0x2149c4) {
                for (var _0x382362 in _0x2149c4)
                  if (_0x2149c4.hasOwnProperty(_0x382362)) {
                    this[_0x382362] = _0x2149c4[_0x382362];
                  }
                if (_0x2149c4.hasOwnProperty("toString")) {
                  this.toString = _0x2149c4.toString;
                }
              },
              clone: function () {
                return this.init.prototype.extend(this);
              },
            });
            var _0x5b6958 = (_0x4b5e86.WordArray = _0x3bc0db.extend({
              init: function (_0x46b964, _0x39a803) {
                _0x46b964 = this.words = _0x46b964 || [];
                if (undefined != _0x39a803) {
                  this.sigBytes = _0x39a803;
                } else {
                  this.sigBytes = 0x4 * _0x46b964.length;
                }
              },
              toString: function (_0x1ce44f) {
                return (_0x1ce44f || _0x4dc805).stringify(this);
              },
              concat: function (_0x31e34d) {
                var _0x5c8001 = this.words;
                var _0xf7dd72 = _0x31e34d.words;
                var _0x6d1626 = this.sigBytes;
                _0x31e34d = _0x31e34d.sigBytes;
                this.clamp();
                if (_0x6d1626 % 0x4) {
                  for (
                    var _0x441d48 = 0x0;
                    _0x441d48 < _0x31e34d;
                    _0x441d48++
                  ) {
                    _0x5c8001[(_0x6d1626 + _0x441d48) >>> 0x2] |=
                      ((_0xf7dd72[_0x441d48 >>> 0x2] >>>
                        (0x18 - 0x8 * (_0x441d48 % 0x4))) &
                        0xff) <<
                      (0x18 - 0x8 * ((_0x6d1626 + _0x441d48) % 0x4));
                  }
                } else {
                  for (
                    _0x441d48 = 0x0;
                    _0x441d48 < _0x31e34d;
                    _0x441d48 += 0x4
                  ) {
                    _0x5c8001[(_0x6d1626 + _0x441d48) >>> 0x2] =
                      _0xf7dd72[_0x441d48 >>> 0x2];
                  }
                }
                this.sigBytes += _0x31e34d;
                return this;
              },
              clamp: function () {
                var _0x362405 = this.words;
                var _0x310231 = this.sigBytes;
                _0x362405[_0x310231 >>> 0x2] &=
                  0xffffffff << (0x20 - 0x8 * (_0x310231 % 0x4));
                _0x362405.length = Math.ceil(_0x310231 / 0x4);
              },
              clone: function () {
                var _0x5f2557 = _0x3bc0db.clone.call(this);
                _0x5f2557.words = this.words.slice(0x0);
                return _0x5f2557;
              },
              random: function (_0xa399a6) {
                var _0x4547ea;
                var _0x30ea2c = [];
                var _0x5b2cf3 = function (_0x2aaf7d) {
                  var _0x4f22dc = 0x3ade68b1;
                  return function () {
                    _0x4f22dc =
                      (0x9069 * (0xffff & _0x4f22dc) + (_0x4f22dc >> 0x10)) &
                      0xffffffff;
                    _0x2aaf7d =
                      (0x4650 * (0xffff & _0x2aaf7d) + (_0x2aaf7d >> 0x10)) &
                      0xffffffff;
                    var _0xe01a48 =
                      ((_0x4f22dc << 0x10) + _0x2aaf7d) & 0xffffffff;
                    _0xe01a48 /= 0x100000000;
                    _0xe01a48 += 0.5;
                    return _0xe01a48 * (0.5 < Math.random() ? 0x1 : -0x1);
                  };
                };
                for (
                  var _0x275adc = 0x0;
                  _0x275adc < _0xa399a6;
                  _0x275adc += 0x4
                ) {
                  var _0x29c3cd = _0x5b2cf3(
                    0x100000000 * (_0x4547ea || Math.random())
                  );
                  _0x4547ea = 0x3ade67b7 * _0x29c3cd();
                  _0x30ea2c.push((0x100000000 * _0x29c3cd()) | 0x0);
                }
                return new _0x5b6958.init(_0x30ea2c, _0xa399a6);
              },
            }));
            var _0x1cac39 = (_0x6f8671.enc = {});
            var _0x4dc805 = (_0x1cac39.Hex = {
              stringify: function (_0x3a989a) {
                var _0x11b5e2 = _0x3a989a.words;
                _0x3a989a = _0x3a989a.sigBytes;
                var _0x1bdad7 = [];
                for (var _0x21af20 = 0x0; _0x21af20 < _0x3a989a; _0x21af20++) {
                  var _0x59d8d9 =
                    (_0x11b5e2[_0x21af20 >>> 0x2] >>>
                      (0x18 - 0x8 * (_0x21af20 % 0x4))) &
                    0xff;
                  _0x1bdad7.push((_0x59d8d9 >>> 0x4).toString(0x10));
                  _0x1bdad7.push((0xf & _0x59d8d9).toString(0x10));
                }
                return _0x1bdad7.join("");
              },
              parse: function (_0x4c75b6) {
                var _0x397c49 = _0x4c75b6.length;
                var _0x470abb = [];
                for (
                  var _0x55c94b = 0x0;
                  _0x55c94b < _0x397c49;
                  _0x55c94b += 0x2
                ) {
                  _0x470abb[_0x55c94b >>> 0x3] |=
                    parseInt(_0x4c75b6.substr(_0x55c94b, 0x2), 0x10) <<
                    (0x18 - 0x4 * (_0x55c94b % 0x8));
                }
                return new _0x5b6958.init(_0x470abb, _0x397c49 / 0x2);
              },
            });
            var _0x27aea4 = (_0x1cac39.Latin1 = {
              stringify: function (_0x88a6e) {
                var _0x7e4a20 = _0x88a6e.words;
                _0x88a6e = _0x88a6e.sigBytes;
                var _0x1302f5 = [];
                for (var _0x316a64 = 0x0; _0x316a64 < _0x88a6e; _0x316a64++) {
                  _0x1302f5.push(
                    String.fromCharCode(
                      (_0x7e4a20[_0x316a64 >>> 0x2] >>>
                        (0x18 - 0x8 * (_0x316a64 % 0x4))) &
                        0xff
                    )
                  );
                }
                return _0x1302f5.join("");
              },
              parse: function (_0x8ce2fb) {
                var _0x2d95e0 = _0x8ce2fb.length;
                var _0x14bd8f = [];
                for (var _0x3b287d = 0x0; _0x3b287d < _0x2d95e0; _0x3b287d++) {
                  _0x14bd8f[_0x3b287d >>> 0x2] |=
                    (0xff & _0x8ce2fb.charCodeAt(_0x3b287d)) <<
                    (0x18 - 0x8 * (_0x3b287d % 0x4));
                }
                return new _0x5b6958.init(_0x14bd8f, _0x2d95e0);
              },
            });
            var _0x30bb59 = (_0x1cac39.Utf8 = {
              stringify: function (_0x4a1e20) {
                try {
                  return decodeURIComponent(
                    escape(_0x27aea4.stringify(_0x4a1e20))
                  );
                } catch (_0x3db56e) {
                  throw Error("Malformed UTF-8 data");
                }
              },
              parse: function (_0x2783e8) {
                return _0x27aea4.parse(unescape(encodeURIComponent(_0x2783e8)));
              },
            });
            var _0x3da346 = (_0x4b5e86.BufferedBlockAlgorithm =
              _0x3bc0db.extend({
                reset: function () {
                  this._data = new _0x5b6958.init();
                  this._nDataBytes = 0x0;
                },
                _append: function (_0x441466) {
                  if ("string" == typeof _0x441466) {
                    _0x441466 = _0x30bb59.parse(_0x441466);
                  }
                  this._data.concat(_0x441466);
                  this._nDataBytes += _0x441466.sigBytes;
                },
                _process: function (_0xf95a49) {
                  var _0x4a7b3d = this._data;
                  var _0x237412 = _0x4a7b3d.words;
                  var _0x458e8d = _0x4a7b3d.sigBytes;
                  var _0x1f8087 = this.blockSize;
                  var _0x426597 = _0x458e8d / (0x4 * _0x1f8087);
                  var _0x426597 = _0xf95a49
                    ? Math.ceil(_0x426597)
                    : Math.max((0x0 | _0x426597) - this._minBufferSize, 0x0);
                  _0xf95a49 = _0x426597 * _0x1f8087;
                  _0x458e8d = Math.min(0x4 * _0xf95a49, _0x458e8d);
                  if (_0xf95a49) {
                    for (
                      var _0x4daf9b = 0x0;
                      _0x4daf9b < _0xf95a49;
                      _0x4daf9b += _0x1f8087
                    ) {
                      this._doProcessBlock(_0x237412, _0x4daf9b);
                    }
                    _0x4daf9b = _0x237412.splice(0x0, _0xf95a49);
                    _0x4a7b3d.sigBytes -= _0x458e8d;
                  }
                  return new _0x5b6958.init(_0x4daf9b, _0x458e8d);
                },
                clone: function () {
                  var _0x139003 = _0x3bc0db.clone.call(this);
                  _0x139003._data = this._data.clone();
                  return _0x139003;
                },
                _minBufferSize: 0x0,
              }));
            _0x4b5e86.Hasher = _0x3da346.extend({
              cfg: _0x3bc0db.extend(),
              init: function (_0x2ed3a1) {
                this.cfg = this.cfg.extend(_0x2ed3a1);
                this.reset();
              },
              reset: function () {
                _0x3da346.reset.call(this);
                this._doReset();
              },
              update: function (_0x4dbf02) {
                this._append(_0x4dbf02);
                this._process();
                return this;
              },
              finalize: function (_0x363284) {
                if (_0x363284) {
                  this._append(_0x363284);
                }
                return this._doFinalize();
              },
              blockSize: 0x10,
              _createHelper: function (_0x52806e) {
                return function (_0x53de69, _0x248feb) {
                  return new _0x52806e.init(_0x248feb).finalize(_0x53de69);
                };
              },
              _createHmacHelper: function (_0x474e9d) {
                return function (_0x2990aa, _0x56ccc4) {
                  return new _0x19c5ee.HMAC.init(_0x474e9d, _0x56ccc4).finalize(
                    _0x2990aa
                  );
                };
              },
            });
            var _0x19c5ee = (_0x6f8671.algo = {});
          }
          _0x2f9098.exports = _0x6f8671;
          true;
        },
        function (_0x744fb4, _0x2d1cfd, _0x3eef10) {
          _0x2d1cfd = _0x3eef10(0x5);
          _0x3eef10 = _0x2d1cfd.lib;
          var _0x4f1788 = _0x3eef10.WordArray;
          var _0x43269a = _0x3eef10.Hasher;
          var _0x2895e6 = [];
          _0x3eef10 = _0x2d1cfd.algo.SHA1 = _0x43269a.extend({
            _doReset: function () {
              this._hash = new _0x4f1788.init([
                0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0,
              ]);
            },
            _doProcessBlock: function (_0x148568, _0x399c7f) {
              var _0x14256f = this._hash.words;
              var _0xc85afd = _0x14256f[0x0];
              var _0x527a75 = _0x14256f[0x1];
              var _0xc24237 = _0x14256f[0x2];
              var _0x4e0646 = _0x14256f[0x3];
              var _0x554039 = _0x14256f[0x4];
              for (var _0x5dcced = 0x0; 0x50 > _0x5dcced; _0x5dcced++) {
                if (0x10 > _0x5dcced) {
                  _0x2895e6[_0x5dcced] = 0x0 | _0x148568[_0x399c7f + _0x5dcced];
                } else {
                  var _0x3582ef =
                    _0x2895e6[_0x5dcced - 0x3] ^
                    _0x2895e6[_0x5dcced - 0x8] ^
                    _0x2895e6[_0x5dcced - 0xe] ^
                    _0x2895e6[_0x5dcced - 0x10];
                  _0x2895e6[_0x5dcced] =
                    (_0x3582ef << 0x1) | (_0x3582ef >>> 0x1f);
                }
                _0x3582ef =
                  ((_0xc85afd << 0x5) | (_0xc85afd >>> 0x1b)) +
                  _0x554039 +
                  _0x2895e6[_0x5dcced];
                _0x3582ef +=
                  0x14 > _0x5dcced
                    ? ((_0x527a75 & _0xc24237) | (~_0x527a75 & _0x4e0646)) +
                      0x5a827999
                    : 0x28 > _0x5dcced
                    ? (_0x527a75 ^ _0xc24237 ^ _0x4e0646) + 0x6ed9eba1
                    : 0x3c > _0x5dcced
                    ? ((_0x527a75 & _0xc24237) |
                        (_0x527a75 & _0x4e0646) |
                        (_0xc24237 & _0x4e0646)) -
                      0x70e44324
                    : (_0x527a75 ^ _0xc24237 ^ _0x4e0646) - 0x359d3e2a;
                _0x554039 = _0x4e0646;
                _0x4e0646 = _0xc24237;
                _0xc24237 = (_0x527a75 << 0x1e) | (_0x527a75 >>> 0x2);
                _0x527a75 = _0xc85afd;
                _0xc85afd = _0x3582ef;
              }
              _0x14256f[0x0] = (_0x14256f[0x0] + _0xc85afd) | 0x0;
              _0x14256f[0x1] = (_0x14256f[0x1] + _0x527a75) | 0x0;
              _0x14256f[0x2] = (_0x14256f[0x2] + _0xc24237) | 0x0;
              _0x14256f[0x3] = (_0x14256f[0x3] + _0x4e0646) | 0x0;
              _0x14256f[0x4] = (_0x14256f[0x4] + _0x554039) | 0x0;
            },
            _doFinalize: function () {
              var _0x23469b = this._data;
              var _0xcae538 = _0x23469b.words;
              var _0x29f726 = 0x8 * this._nDataBytes;
              var _0x11e57b = 0x8 * _0x23469b.sigBytes;
              _0xcae538[_0x11e57b >>> 0x5] |=
                0x80 << (0x18 - (_0x11e57b % 0x20));
              _0xcae538[(((_0x11e57b + 0x40) >>> 0x9) << 0x4) + 0xe] =
                Math.floor(_0x29f726 / 0x100000000);
              _0xcae538[(((_0x11e57b + 0x40) >>> 0x9) << 0x4) + 0xf] =
                _0x29f726;
              _0x23469b.sigBytes = 0x4 * _0xcae538.length;
              this._process();
              return this._hash;
            },
            clone: function () {
              var _0x31ec8a = _0x43269a.clone.call(this);
              _0x31ec8a._hash = this._hash.clone();
              return _0x31ec8a;
            },
          });
          _0x2d1cfd.SHA1 = _0x43269a._createHelper(_0x3eef10);
          _0x2d1cfd.HmacSHA1 = _0x43269a._createHmacHelper(_0x3eef10);
          _0x744fb4.exports = _0x2d1cfd.SHA1;
          true;
        },
        function (_0x511053, _0x4bee70, _0x5f58b0) {
          _0x4bee70 = _0x5f58b0(0x5);
          var _0x3dd919 = _0x4bee70.enc.Utf8;
          _0x4bee70.algo.HMAC = _0x4bee70.lib.Base.extend({
            init: function (_0x21c9f5, _0x558070) {
              _0x21c9f5 = this._hasher = new _0x21c9f5.init();
              if ("string" == typeof _0x558070) {
                _0x558070 = _0x3dd919.parse(_0x558070);
              }
              var _0x1ea3e4 = _0x21c9f5.blockSize;
              var _0x10d4ea = 0x4 * _0x1ea3e4;
              if (_0x558070.sigBytes > _0x10d4ea) {
                _0x558070 = _0x21c9f5.finalize(_0x558070);
              }
              _0x558070.clamp();
              var _0x3dad6d = (this._oKey = _0x558070.clone());
              var _0x70e9c3 = (this._iKey = _0x558070.clone());
              var _0x567e0b = _0x3dad6d.words;
              var _0x344b73 = _0x70e9c3.words;
              for (var _0xe69bbe = 0x0; _0xe69bbe < _0x1ea3e4; _0xe69bbe++) {
                _0x567e0b[_0xe69bbe] ^= 0x5c5c5c5c;
                _0x344b73[_0xe69bbe] ^= 0x36363636;
              }
              _0x3dad6d.sigBytes = _0x70e9c3.sigBytes = _0x10d4ea;
              this.reset();
            },
            reset: function () {
              var _0x3f8f46 = this._hasher;
              _0x3f8f46.reset();
              _0x3f8f46.update(this._iKey);
            },
            update: function (_0x5d6a42) {
              this._hasher.update(_0x5d6a42);
              return this;
            },
            finalize: function (_0x8f75a9) {
              var _0x51b9ba = this._hasher;
              _0x8f75a9 = _0x51b9ba.finalize(_0x8f75a9);
              _0x51b9ba.reset();
              return _0x51b9ba.finalize(this._oKey.clone().concat(_0x8f75a9));
            },
          });
          true;
          _0x511053.exports = undefined;
          true;
        },
        function (_0x1b47dd) {
          var _0x257982 = {
            Latin1: {
              stringify: function (_0x39d2e9) {
                var _0x5cd334 = _0x39d2e9.words;
                _0x39d2e9 = _0x39d2e9.sigBytes;
                var _0x1feb0b = [];
                var _0x35805a = undefined;
                var _0x31ff67 = undefined;
                for (var _0x35805a = 0x0; _0x35805a < _0x39d2e9; _0x35805a++) {
                  _0x31ff67 =
                    (_0x5cd334[_0x35805a >>> 0x2] >>>
                      (0x18 - 0x8 * (_0x35805a % 0x4))) &
                    0xff;
                  _0x1feb0b.push(String.fromCharCode(_0x31ff67));
                }
                return _0x1feb0b.join("");
              },
            },
            _Utf8: {
              stringify: function (_0x5f3931) {
                try {
                  return decodeURIComponent(
                    escape(_0x257982.Latin1.stringify(_0x5f3931))
                  );
                } catch (_0x2da7bb) {
                  throw Error("Malformed UTF-8 data");
                }
              },
            },
          };
          _0x1b47dd.exports = _0x257982;
        },
        function (_0x470963) {
          var _0x40d510 = {
            _keyStr:
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            encode: function (_0x212632) {
              var _0x1d2469 = "";
              var _0x54985c = undefined;
              var _0x3c172c = undefined;
              var _0x4546f8 = undefined;
              var _0x16eaed = undefined;
              var _0x48f134 = undefined;
              var _0x4b1e1d = undefined;
              var _0x5f0009 = 0x0;
              for (
                _0x212632 = _0x40d510._utf8Encode(_0x212632);
                _0x5f0009 < _0x212632.length;

              ) {
                _0x54985c = _0x212632.charCodeAt(_0x5f0009++);
                _0x3c172c = _0x212632.charCodeAt(_0x5f0009++);
                _0x4546f8 = _0x212632.charCodeAt(_0x5f0009++);
                _0x16eaed = _0x54985c >> 0x2;
                _0x54985c = ((0x3 & _0x54985c) << 0x4) | (_0x3c172c >> 0x4);
                _0x48f134 = ((0xf & _0x3c172c) << 0x2) | (_0x4546f8 >> 0x6);
                _0x4b1e1d = 0x3f & _0x4546f8;
                if (isNaN(_0x3c172c)) {
                  _0x48f134 = _0x4b1e1d = 0x40;
                } else if (isNaN(_0x4546f8)) {
                  _0x4b1e1d = 0x40;
                }
                _0x1d2469 =
                  _0x1d2469 +
                  this._keyStr.charAt(_0x16eaed) +
                  this._keyStr.charAt(_0x54985c) +
                  this._keyStr.charAt(_0x48f134) +
                  this._keyStr.charAt(_0x4b1e1d);
              }
              return _0x1d2469;
            },
            decode: function (_0x16fcc0) {
              var _0xf2f4ea = "";
              var _0x59b102 = undefined;
              var _0x38ee90 = undefined;
              var _0x4ebd74 = undefined;
              var _0x4397dc = undefined;
              var _0x4470e7 = undefined;
              var _0x150f89 = 0x0;
              for (
                _0x16fcc0 = _0x16fcc0.replace(/[^A-Za-z0-9\+\/\=]/g, "");
                _0x150f89 < _0x16fcc0.length;

              ) {
                _0x59b102 = this._keyStr.indexOf(_0x16fcc0.charAt(_0x150f89++));
                _0x38ee90 = this._keyStr.indexOf(_0x16fcc0.charAt(_0x150f89++));
                _0x4397dc = this._keyStr.indexOf(_0x16fcc0.charAt(_0x150f89++));
                _0x4470e7 = this._keyStr.indexOf(_0x16fcc0.charAt(_0x150f89++));
                _0x59b102 = (_0x59b102 << 0x2) | (_0x38ee90 >> 0x4);
                _0x38ee90 = ((0xf & _0x38ee90) << 0x4) | (_0x4397dc >> 0x2);
                _0x4ebd74 = ((0x3 & _0x4397dc) << 0x6) | _0x4470e7;
                _0xf2f4ea += String.fromCharCode(_0x59b102);
                if (0x40 !== _0x4397dc) {
                  _0xf2f4ea += String.fromCharCode(_0x38ee90);
                }
                if (0x40 !== _0x4470e7) {
                  _0xf2f4ea += String.fromCharCode(_0x4ebd74);
                }
              }
              return _0x40d510._utf8Decode(_0xf2f4ea);
            },
            _utf8Encode: function (_0x1e63be) {
              _0x1e63be = _0x1e63be.replace(/\r\n/g, "\n");
              var _0x35c732 = "";
              for (
                var _0x53e8d8 = 0x0;
                _0x53e8d8 < _0x1e63be.length;
                _0x53e8d8++
              ) {
                var _0x1a7609 = _0x1e63be.charCodeAt(_0x53e8d8);
                if (0x80 > _0x1a7609) {
                  _0x35c732 += String.fromCharCode(_0x1a7609);
                } else if (0x7f < _0x1a7609 && 0x800 > _0x1a7609) {
                  _0x35c732 += String.fromCharCode((_0x1a7609 >> 0x6) | 0xc0);
                  _0x35c732 += String.fromCharCode((0x3f & _0x1a7609) | 0x80);
                } else {
                  _0x35c732 += String.fromCharCode((_0x1a7609 >> 0xc) | 0xe0);
                  _0x35c732 += String.fromCharCode(
                    ((_0x1a7609 >> 0x6) & 0x3f) | 0x80
                  );
                  _0x35c732 += String.fromCharCode((0x3f & _0x1a7609) | 0x80);
                }
              }
              return _0x35c732;
            },
            _utf8Decode: function (_0x5cc296) {
              var _0x486c9d = "";
              var _0x2790c4 = 0x0;
              var _0x1c63b8 = undefined;
              var _0x4548e5 = undefined;
              var _0x5d0d46 = undefined;
              for (var _0x4548e5 = 0x0; _0x2790c4 < _0x5cc296.length; ) {
                _0x1c63b8 = _0x5cc296.charCodeAt(_0x2790c4);
                if (0x80 > _0x1c63b8) {
                  _0x486c9d += String.fromCharCode(_0x1c63b8);
                  _0x2790c4++;
                } else if (0xbf < _0x1c63b8 && 0xe0 > _0x1c63b8) {
                  _0x4548e5 = _0x5cc296.charCodeAt(_0x2790c4 + 0x1);
                  _0x486c9d += String.fromCharCode(
                    ((0x1f & _0x1c63b8) << 0x6) | (0x3f & _0x4548e5)
                  );
                  _0x2790c4 += 0x2;
                } else {
                  _0x4548e5 = _0x5cc296.charCodeAt(_0x2790c4 + 0x1);
                  _0x5d0d46 = _0x5cc296.charCodeAt(_0x2790c4 + 0x2);
                  _0x486c9d += String.fromCharCode(
                    ((0xf & _0x1c63b8) << 0xc) |
                      ((0x3f & _0x4548e5) << 0x6) |
                      (0x3f & _0x5d0d46)
                  );
                  _0x2790c4 += 0x3;
                }
              }
              return _0x486c9d;
            },
          };
          _0x470963.exports = _0x40d510;
        },
        function (_0x5f53a7, _0xd73cf, _0x38cf4e) {
          var _0xd1229d = function (_0x52f7f3, _0x44f002) {
            if (!_0x4066e4[_0x52f7f3]) {
              _0x4066e4[_0x52f7f3] = {};
              for (
                var _0x3e0fa9 = 0x0;
                _0x3e0fa9 < _0x52f7f3.length;
                _0x3e0fa9++
              ) {
                _0x4066e4[_0x52f7f3][_0x52f7f3.charAt(_0x3e0fa9)] = _0x3e0fa9;
              }
            }
            return _0x4066e4[_0x52f7f3][_0x44f002];
          };
          var _0x46b624 = String.fromCharCode;
          var _0x4066e4 = {};
          var _0x578a04 = {
            compressToBase64: function (_0x4a0e40) {
              if (null == _0x4a0e40) {
                return "";
              }
              _0x4a0e40 = _0x578a04._compress(
                _0x4a0e40,
                0x6,
                function (_0x38d003) {
                  return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(
                    _0x38d003
                  );
                }
              );
              switch (_0x4a0e40.length % 0x4) {
                default:
                case 0x0:
                  return _0x4a0e40;
                case 0x1:
                  return _0x4a0e40 + "===";
                case 0x2:
                  return _0x4a0e40 + "==";
                case 0x3:
                  return _0x4a0e40 + "=";
              }
            },
            decompressFromBase64: function (_0x4c1ac7) {
              return null == _0x4c1ac7
                ? ""
                : "" == _0x4c1ac7
                ? null
                : _0x578a04._decompress(
                    _0x4c1ac7.length,
                    0x20,
                    function (_0x5ebbaf) {
                      return _0xd1229d(
                        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                        _0x4c1ac7.charAt(_0x5ebbaf)
                      );
                    }
                  );
            },
            compressToUTF16: function (_0x44626b) {
              return null == _0x44626b
                ? ""
                : _0x578a04._compress(_0x44626b, 0xf, function (_0x4adc29) {
                    return _0x46b624(_0x4adc29 + 0x20);
                  }) + " ";
            },
            decompressFromUTF16: function (_0x3fb673) {
              return null == _0x3fb673
                ? ""
                : "" == _0x3fb673
                ? null
                : _0x578a04._decompress(
                    _0x3fb673.length,
                    0x4000,
                    function (_0xba3168) {
                      return _0x3fb673.charCodeAt(_0xba3168) - 0x20;
                    }
                  );
            },
            compressToUint8Array: function (_0xb2487d) {
              _0xb2487d = _0x578a04.compress(_0xb2487d);
              var _0x3de535 = new Uint8Array(0x2 * _0xb2487d.length);
              var _0x28bf79 = 0x0;
              for (
                var _0x399362 = _0xb2487d.length;
                _0x28bf79 < _0x399362;
                _0x28bf79++
              ) {
                var _0x48a776 = _0xb2487d.charCodeAt(_0x28bf79);
                _0x3de535[0x2 * _0x28bf79] = _0x48a776 >>> 0x8;
                _0x3de535[0x2 * _0x28bf79 + 0x1] = _0x48a776 % 0x100;
              }
              return _0x3de535;
            },
            decompressFromUint8Array: function (_0x97214) {
              if (null === _0x97214 || undefined === _0x97214) {
                return _0x578a04.decompress(_0x97214);
              }
              var _0x5539f2 = Array(_0x97214.length / 0x2);
              var _0x4a5672 = 0x0;
              for (
                var _0x5744bc = _0x5539f2.length;
                _0x4a5672 < _0x5744bc;
                _0x4a5672++
              ) {
                _0x5539f2[_0x4a5672] =
                  0x100 * _0x97214[0x2 * _0x4a5672] +
                  _0x97214[0x2 * _0x4a5672 + 0x1];
              }
              var _0x37317b = [];
              _0x5539f2.forEach(function (_0x1f4ffd) {
                _0x37317b.push(_0x46b624(_0x1f4ffd));
              });
              return _0x578a04.decompress(_0x37317b.join(""));
            },
            compressToEncodedURIComponent: function (_0xd2b824) {
              return null == _0xd2b824
                ? ""
                : _0x578a04._compress(_0xd2b824, 0x6, function (_0x444f02) {
                    return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$".charAt(
                      _0x444f02
                    );
                  });
            },
            decompressFromEncodedURIComponent: function (_0xb1a2bb) {
              return null == _0xb1a2bb
                ? ""
                : "" == _0xb1a2bb
                ? null
                : ((_0xb1a2bb = _0xb1a2bb.replace(/ /g, "+")),
                  _0x578a04._decompress(
                    _0xb1a2bb.length,
                    0x20,
                    function (_0x1b6ff5) {
                      return _0xd1229d(
                        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",
                        _0xb1a2bb.charAt(_0x1b6ff5)
                      );
                    }
                  ));
            },
            compress: function (_0x57c161) {
              return _0x578a04._compress(_0x57c161, 0x10, function (_0x22907f) {
                return _0x46b624(_0x22907f);
              });
            },
            _compress: function (_0x5ebfdf, _0x45bbd5, _0xe2c56c) {
              if (null == _0x5ebfdf) {
                return "";
              }
              var _0x2363ec;
              var _0x44ff24;
              var _0x557e0c;
              var _0x1e178d = {};
              var _0xf70ff7 = {};
              var _0x480553 = "";
              var _0x571000 = "";
              var _0x2e4882 = "";
              var _0x4d3427 = 0x2;
              var _0x4902a6 = 0x3;
              var _0x26c70f = 0x2;
              var _0x59ab2c = [];
              var _0x3dc0a0 = 0x0;
              var _0x154666 = 0x0;
              for (
                _0x557e0c = 0x0;
                _0x557e0c < _0x5ebfdf.length;
                _0x557e0c += 0x1
              ) {
                _0x480553 = _0x5ebfdf.charAt(_0x557e0c);
                if (
                  !Object.prototype.hasOwnProperty.call(_0x1e178d, _0x480553)
                ) {
                  _0x1e178d[_0x480553] = _0x4902a6++;
                  _0xf70ff7[_0x480553] = true;
                }
                _0x571000 = _0x2e4882 + _0x480553;
                if (
                  Object.prototype.hasOwnProperty.call(_0x1e178d, _0x571000)
                ) {
                  _0x2e4882 = _0x571000;
                } else {
                  if (
                    Object.prototype.hasOwnProperty.call(_0xf70ff7, _0x2e4882)
                  ) {
                    if (0x100 > _0x2e4882.charCodeAt(0x0)) {
                      for (
                        _0x2363ec = 0x0;
                        _0x2363ec < _0x26c70f;
                        _0x2363ec++
                      ) {
                        _0x3dc0a0 <<= 0x1;
                        if (_0x154666 == _0x45bbd5 - 0x1) {
                          _0x154666 = 0x0;
                          _0x59ab2c.push(_0xe2c56c(_0x3dc0a0));
                          _0x3dc0a0 = 0x0;
                        } else {
                          _0x154666++;
                        }
                      }
                      _0x44ff24 = _0x2e4882.charCodeAt(0x0);
                      for (_0x2363ec = 0x0; 0x8 > _0x2363ec; _0x2363ec++) {
                        _0x3dc0a0 = (_0x3dc0a0 << 0x1) | (0x1 & _0x44ff24);
                        if (_0x154666 == _0x45bbd5 - 0x1) {
                          _0x154666 = 0x0;
                          _0x59ab2c.push(_0xe2c56c(_0x3dc0a0));
                          _0x3dc0a0 = 0x0;
                        } else {
                          _0x154666++;
                        }
                        _0x44ff24 >>= 0x1;
                      }
                    } else {
                      _0x44ff24 = 0x1;
                      for (
                        _0x2363ec = 0x0;
                        _0x2363ec < _0x26c70f;
                        _0x2363ec++
                      ) {
                        _0x3dc0a0 = (_0x3dc0a0 << 0x1) | _0x44ff24;
                        if (_0x154666 == _0x45bbd5 - 0x1) {
                          _0x154666 = 0x0;
                          _0x59ab2c.push(_0xe2c56c(_0x3dc0a0));
                          _0x3dc0a0 = 0x0;
                        } else {
                          _0x154666++;
                        }
                        _0x44ff24 = 0x0;
                      }
                      _0x44ff24 = _0x2e4882.charCodeAt(0x0);
                      for (_0x2363ec = 0x0; 0x10 > _0x2363ec; _0x2363ec++) {
                        _0x3dc0a0 = (_0x3dc0a0 << 0x1) | (0x1 & _0x44ff24);
                        if (_0x154666 == _0x45bbd5 - 0x1) {
                          _0x154666 = 0x0;
                          _0x59ab2c.push(_0xe2c56c(_0x3dc0a0));
                          _0x3dc0a0 = 0x0;
                        } else {
                          _0x154666++;
                        }
                        _0x44ff24 >>= 0x1;
                      }
                    }
                    _0x4d3427--;
                    if (0x0 == _0x4d3427) {
                      _0x4d3427 = Math.pow(0x2, _0x26c70f);
                      _0x26c70f++;
                    }
                    delete _0xf70ff7[_0x2e4882];
                  } else {
                    _0x44ff24 = _0x1e178d[_0x2e4882];
                    for (_0x2363ec = 0x0; _0x2363ec < _0x26c70f; _0x2363ec++) {
                      _0x3dc0a0 = (_0x3dc0a0 << 0x1) | (0x1 & _0x44ff24);
                      if (_0x154666 == _0x45bbd5 - 0x1) {
                        _0x154666 = 0x0;
                        _0x59ab2c.push(_0xe2c56c(_0x3dc0a0));
                        _0x3dc0a0 = 0x0;
                      } else {
                        _0x154666++;
                      }
                      _0x44ff24 >>= 0x1;
                    }
                  }
                  _0x4d3427--;
                  if (0x0 == _0x4d3427) {
                    _0x4d3427 = Math.pow(0x2, _0x26c70f);
                    _0x26c70f++;
                  }
                  _0x1e178d[_0x571000] = _0x4902a6++;
                  _0x2e4882 = String(_0x480553);
                }
              }
              if ("" !== _0x2e4882) {
                if (
                  Object.prototype.hasOwnProperty.call(_0xf70ff7, _0x2e4882)
                ) {
                  if (0x100 > _0x2e4882.charCodeAt(0x0)) {
                    for (_0x2363ec = 0x0; _0x2363ec < _0x26c70f; _0x2363ec++) {
                      _0x3dc0a0 <<= 0x1;
                      if (_0x154666 == _0x45bbd5 - 0x1) {
                        _0x154666 = 0x0;
                        _0x59ab2c.push(_0xe2c56c(_0x3dc0a0));
                        _0x3dc0a0 = 0x0;
                      } else {
                        _0x154666++;
                      }
                    }
                    _0x44ff24 = _0x2e4882.charCodeAt(0x0);
                    for (_0x2363ec = 0x0; 0x8 > _0x2363ec; _0x2363ec++) {
                      _0x3dc0a0 = (_0x3dc0a0 << 0x1) | (0x1 & _0x44ff24);
                      if (_0x154666 == _0x45bbd5 - 0x1) {
                        _0x154666 = 0x0;
                        _0x59ab2c.push(_0xe2c56c(_0x3dc0a0));
                        _0x3dc0a0 = 0x0;
                      } else {
                        _0x154666++;
                      }
                      _0x44ff24 >>= 0x1;
                    }
                  } else {
                    _0x44ff24 = 0x1;
                    for (_0x2363ec = 0x0; _0x2363ec < _0x26c70f; _0x2363ec++) {
                      _0x3dc0a0 = (_0x3dc0a0 << 0x1) | _0x44ff24;
                      if (_0x154666 == _0x45bbd5 - 0x1) {
                        _0x154666 = 0x0;
                        _0x59ab2c.push(_0xe2c56c(_0x3dc0a0));
                        _0x3dc0a0 = 0x0;
                      } else {
                        _0x154666++;
                      }
                      _0x44ff24 = 0x0;
                    }
                    _0x44ff24 = _0x2e4882.charCodeAt(0x0);
                    for (_0x2363ec = 0x0; 0x10 > _0x2363ec; _0x2363ec++) {
                      _0x3dc0a0 = (_0x3dc0a0 << 0x1) | (0x1 & _0x44ff24);
                      if (_0x154666 == _0x45bbd5 - 0x1) {
                        _0x154666 = 0x0;
                        _0x59ab2c.push(_0xe2c56c(_0x3dc0a0));
                        _0x3dc0a0 = 0x0;
                      } else {
                        _0x154666++;
                      }
                      _0x44ff24 >>= 0x1;
                    }
                  }
                  _0x4d3427--;
                  if (0x0 == _0x4d3427) {
                    _0x4d3427 = Math.pow(0x2, _0x26c70f);
                    _0x26c70f++;
                  }
                  delete _0xf70ff7[_0x2e4882];
                } else {
                  _0x44ff24 = _0x1e178d[_0x2e4882];
                  for (_0x2363ec = 0x0; _0x2363ec < _0x26c70f; _0x2363ec++) {
                    _0x3dc0a0 = (_0x3dc0a0 << 0x1) | (0x1 & _0x44ff24);
                    if (_0x154666 == _0x45bbd5 - 0x1) {
                      _0x154666 = 0x0;
                      _0x59ab2c.push(_0xe2c56c(_0x3dc0a0));
                      _0x3dc0a0 = 0x0;
                    } else {
                      _0x154666++;
                    }
                    _0x44ff24 >>= 0x1;
                  }
                }
                _0x4d3427--;
                if (0x0 == _0x4d3427) {
                  Math.pow(0x2, _0x26c70f);
                  _0x26c70f++;
                }
              }
              _0x44ff24 = 0x2;
              for (_0x2363ec = 0x0; _0x2363ec < _0x26c70f; _0x2363ec++) {
                _0x3dc0a0 = (_0x3dc0a0 << 0x1) | (0x1 & _0x44ff24);
                if (_0x154666 == _0x45bbd5 - 0x1) {
                  _0x154666 = 0x0;
                  _0x59ab2c.push(_0xe2c56c(_0x3dc0a0));
                  _0x3dc0a0 = 0x0;
                } else {
                  _0x154666++;
                }
                _0x44ff24 >>= 0x1;
              }
              for (;;) {
                _0x3dc0a0 <<= 0x1;
                if (_0x154666 == _0x45bbd5 - 0x1) {
                  _0x59ab2c.push(_0xe2c56c(_0x3dc0a0));
                  break;
                }
                _0x154666++;
              }
              return _0x59ab2c.join("");
            },
            decompress: function (_0x488911) {
              return null == _0x488911
                ? ""
                : "" == _0x488911
                ? null
                : _0x578a04._decompress(
                    _0x488911.length,
                    0x8000,
                    function (_0x9ccb32) {
                      return _0x488911.charCodeAt(_0x9ccb32);
                    }
                  );
            },
            _decompress: function (_0x185ec4, _0x50f81b, _0x242794) {
              var _0x3979a9;
              var _0x25096d;
              var _0x26e173;
              var _0x2ec590;
              var _0x4a1add;
              var _0x387cfe;
              var _0x432e0f = [];
              var _0x2e2bcd = 0x4;
              var _0x454589 = 0x4;
              var _0x542d23 = 0x3;
              var _0x23508c = [];
              var _0x5188cc = _0x242794(0x0);
              var _0x4e2f3c = _0x50f81b;
              var _0x4b0282 = 0x1;
              for (_0x3979a9 = 0x0; 0x3 > _0x3979a9; _0x3979a9 += 0x1) {
                _0x432e0f[_0x3979a9] = _0x3979a9;
              }
              _0x25096d = 0x0;
              _0x2ec590 = Math.pow(0x2, 0x2);
              for (_0x4a1add = 0x1; _0x4a1add != _0x2ec590; ) {
                _0x26e173 = _0x5188cc & _0x4e2f3c;
                _0x4e2f3c >>= 0x1;
                if (0x0 == _0x4e2f3c) {
                  _0x4e2f3c = _0x50f81b;
                  _0x5188cc = _0x242794(_0x4b0282++);
                }
                _0x25096d |= (0x0 < _0x26e173 ? 0x1 : 0x0) * _0x4a1add;
                _0x4a1add <<= 0x1;
              }
              switch (_0x25096d) {
                case 0x0:
                  _0x25096d = 0x0;
                  _0x2ec590 = Math.pow(0x2, 0x8);
                  for (_0x4a1add = 0x1; _0x4a1add != _0x2ec590; ) {
                    _0x26e173 = _0x5188cc & _0x4e2f3c;
                    _0x4e2f3c >>= 0x1;
                    if (0x0 == _0x4e2f3c) {
                      _0x4e2f3c = _0x50f81b;
                      _0x5188cc = _0x242794(_0x4b0282++);
                    }
                    _0x25096d |= (0x0 < _0x26e173 ? 0x1 : 0x0) * _0x4a1add;
                    _0x4a1add <<= 0x1;
                  }
                  _0x387cfe = _0x46b624(_0x25096d);
                  break;
                case 0x1:
                  _0x25096d = 0x0;
                  _0x2ec590 = Math.pow(0x2, 0x10);
                  for (_0x4a1add = 0x1; _0x4a1add != _0x2ec590; ) {
                    _0x26e173 = _0x5188cc & _0x4e2f3c;
                    _0x4e2f3c >>= 0x1;
                    if (0x0 == _0x4e2f3c) {
                      _0x4e2f3c = _0x50f81b;
                      _0x5188cc = _0x242794(_0x4b0282++);
                    }
                    _0x25096d |= (0x0 < _0x26e173 ? 0x1 : 0x0) * _0x4a1add;
                    _0x4a1add <<= 0x1;
                  }
                  _0x387cfe = _0x46b624(_0x25096d);
                  break;
                case 0x2:
                  return "";
              }
              _0x3979a9 = _0x432e0f[0x3] = _0x387cfe;
              for (_0x23508c.push(_0x387cfe); ; ) {
                if (_0x4b0282 > _0x185ec4) {
                  return "";
                }
                _0x25096d = 0x0;
                _0x2ec590 = Math.pow(0x2, _0x542d23);
                for (_0x4a1add = 0x1; _0x4a1add != _0x2ec590; ) {
                  _0x26e173 = _0x5188cc & _0x4e2f3c;
                  _0x4e2f3c >>= 0x1;
                  if (0x0 == _0x4e2f3c) {
                    _0x4e2f3c = _0x50f81b;
                    _0x5188cc = _0x242794(_0x4b0282++);
                  }
                  _0x25096d |= (0x0 < _0x26e173 ? 0x1 : 0x0) * _0x4a1add;
                  _0x4a1add <<= 0x1;
                }
                switch ((_0x387cfe = _0x25096d)) {
                  case 0x0:
                    _0x25096d = 0x0;
                    _0x2ec590 = Math.pow(0x2, 0x8);
                    for (_0x4a1add = 0x1; _0x4a1add != _0x2ec590; ) {
                      _0x26e173 = _0x5188cc & _0x4e2f3c;
                      _0x4e2f3c >>= 0x1;
                      if (0x0 == _0x4e2f3c) {
                        _0x4e2f3c = _0x50f81b;
                        _0x5188cc = _0x242794(_0x4b0282++);
                      }
                      _0x25096d |= (0x0 < _0x26e173 ? 0x1 : 0x0) * _0x4a1add;
                      _0x4a1add <<= 0x1;
                    }
                    _0x432e0f[_0x454589++] = _0x46b624(_0x25096d);
                    _0x387cfe = _0x454589 - 0x1;
                    _0x2e2bcd--;
                    break;
                  case 0x1:
                    _0x25096d = 0x0;
                    _0x2ec590 = Math.pow(0x2, 0x10);
                    for (_0x4a1add = 0x1; _0x4a1add != _0x2ec590; ) {
                      _0x26e173 = _0x5188cc & _0x4e2f3c;
                      _0x4e2f3c >>= 0x1;
                      if (0x0 == _0x4e2f3c) {
                        _0x4e2f3c = _0x50f81b;
                        _0x5188cc = _0x242794(_0x4b0282++);
                      }
                      _0x25096d |= (0x0 < _0x26e173 ? 0x1 : 0x0) * _0x4a1add;
                      _0x4a1add <<= 0x1;
                    }
                    _0x432e0f[_0x454589++] = _0x46b624(_0x25096d);
                    _0x387cfe = _0x454589 - 0x1;
                    _0x2e2bcd--;
                    break;
                  case 0x2:
                    return _0x23508c.join("");
                }
                if (0x0 == _0x2e2bcd) {
                  _0x2e2bcd = Math.pow(0x2, _0x542d23);
                  _0x542d23++;
                }
                if (_0x432e0f[_0x387cfe]) {
                  _0x25096d = _0x432e0f[_0x387cfe];
                } else {
                  if (_0x387cfe !== _0x454589) {
                    return null;
                  }
                  _0x25096d = _0x3979a9 + _0x3979a9.charAt(0x0);
                }
                _0x23508c.push(_0x25096d);
                _0x432e0f[_0x454589++] = _0x3979a9 + _0x25096d.charAt(0x0);
                _0x2e2bcd--;
                _0x3979a9 = _0x25096d;
                if (0x0 == _0x2e2bcd) {
                  _0x2e2bcd = Math.pow(0x2, _0x542d23);
                  _0x542d23++;
                }
              }
            },
          };
          _0xd73cf = function () {
            return _0x578a04;
          }.call(_0xd73cf, _0x38cf4e, _0xd73cf, _0x5f53a7);
          !(undefined !== _0xd73cf && (_0x5f53a7.exports = _0xd73cf));
        },
        function (_0x59ee11, _0x44d2a5, _0x2421fd) {
          _0x44d2a5 = _0x2421fd(0x5);
          _0x2421fd(0xc);
          _0x2421fd(0xd);
          _0x2421fd(0xe);
          _0x2421fd(0xf);
          _0x2421fd = _0x44d2a5.lib.BlockCipher;
          var _0x1d1c5e = _0x44d2a5.algo;
          var _0x232477 = [];
          var _0x15145b = [];
          var _0x5614ec = [];
          var _0xedb522 = [];
          var _0x13fcfb = [];
          var _0x403a8b = [];
          var _0x48d6a5 = [];
          var _0x28e92d = [];
          var _0xafb1be = [];
          var _0x553eee = [];
          var _0x5e7a8d = [];
          for (var _0x3d8d33 = 0x0; 0x100 > _0x3d8d33; _0x3d8d33++) {
            if (0x80 > _0x3d8d33) {
              _0x5e7a8d[_0x3d8d33] = _0x3d8d33 << 0x1;
            } else {
              _0x5e7a8d[_0x3d8d33] = (_0x3d8d33 << 0x1) ^ 0x11b;
            }
          }
          var _0x3a9c38 = 0x0;
          var _0x1376a7 = 0x0;
          for (var _0x3d8d33 = 0x0; 0x100 > _0x3d8d33; _0x3d8d33++) {
            var _0x5ae5ac =
              _0x1376a7 ^
              (_0x1376a7 << 0x1) ^
              (_0x1376a7 << 0x2) ^
              (_0x1376a7 << 0x3) ^
              (_0x1376a7 << 0x4);
            var _0x5ae5ac = (_0x5ae5ac >>> 0x8) ^ (0xff & _0x5ae5ac) ^ 0x63;
            _0x232477[_0x3a9c38] = _0x5ae5ac;
            _0x15145b[_0x5ae5ac] = _0x3a9c38;
            var _0x4d78ac = _0x5e7a8d[_0x3a9c38];
            var _0x5c9ec3 = _0x5e7a8d[_0x4d78ac];
            var _0x1f468f = _0x5e7a8d[_0x5c9ec3];
            var _0x2cd5ee =
              (0x101 * _0x5e7a8d[_0x5ae5ac]) ^ (0x1010100 * _0x5ae5ac);
            _0x5614ec[_0x3a9c38] = (_0x2cd5ee << 0x18) | (_0x2cd5ee >>> 0x8);
            _0xedb522[_0x3a9c38] = (_0x2cd5ee << 0x10) | (_0x2cd5ee >>> 0x10);
            _0x13fcfb[_0x3a9c38] = (_0x2cd5ee << 0x8) | (_0x2cd5ee >>> 0x18);
            _0x403a8b[_0x3a9c38] = _0x2cd5ee;
            _0x2cd5ee =
              (0x1010101 * _0x1f468f) ^
              (0x10001 * _0x5c9ec3) ^
              (0x101 * _0x4d78ac) ^
              (0x1010100 * _0x3a9c38);
            _0x48d6a5[_0x5ae5ac] = (_0x2cd5ee << 0x18) | (_0x2cd5ee >>> 0x8);
            _0x28e92d[_0x5ae5ac] = (_0x2cd5ee << 0x10) | (_0x2cd5ee >>> 0x10);
            _0xafb1be[_0x5ae5ac] = (_0x2cd5ee << 0x8) | (_0x2cd5ee >>> 0x18);
            _0x553eee[_0x5ae5ac] = _0x2cd5ee;
            if (_0x3a9c38) {
              _0x3a9c38 =
                _0x4d78ac ^
                _0x5e7a8d[_0x5e7a8d[_0x5e7a8d[_0x1f468f ^ _0x4d78ac]]];
              _0x1376a7 ^= _0x5e7a8d[_0x5e7a8d[_0x1376a7]];
            } else {
              _0x3a9c38 = _0x1376a7 = 0x1;
            }
          }
          true;
          var _0x43a909 = [
            0x0, 0x1, 0x2, 0x4, 0x8, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36,
          ];
          var _0x1d1c5e = (_0x1d1c5e.AES = _0x2421fd.extend({
            _doReset: function () {
              if (!this._nRounds || this._keyPriorReset !== this._key) {
                var _0x5e1435 = (this._keyPriorReset = this._key);
                var _0x3b0882 = _0x5e1435.words;
                var _0x322a51 = _0x5e1435.sigBytes / 0x4;
                var _0x5e1435 = 0x4 * ((this._nRounds = _0x322a51 + 0x6) + 0x1);
                var _0x194542 = (this._keySchedule = []);
                for (var _0x5a0dd7 = 0x0; _0x5a0dd7 < _0x5e1435; _0x5a0dd7++) {
                  if (_0x5a0dd7 < _0x322a51) {
                    _0x194542[_0x5a0dd7] = _0x3b0882[_0x5a0dd7];
                  } else {
                    var _0x37ec66 = _0x194542[_0x5a0dd7 - 0x1];
                    if (_0x5a0dd7 % _0x322a51) {
                      if (0x6 < _0x322a51 && 0x4 == _0x5a0dd7 % _0x322a51) {
                        _0x37ec66 =
                          (_0x232477[_0x37ec66 >>> 0x18] << 0x18) |
                          (_0x232477[(_0x37ec66 >>> 0x10) & 0xff] << 0x10) |
                          (_0x232477[(_0x37ec66 >>> 0x8) & 0xff] << 0x8) |
                          _0x232477[0xff & _0x37ec66];
                      }
                    } else {
                      _0x37ec66 = (_0x37ec66 << 0x8) | (_0x37ec66 >>> 0x18);
                      _0x37ec66 =
                        (_0x232477[_0x37ec66 >>> 0x18] << 0x18) |
                        (_0x232477[(_0x37ec66 >>> 0x10) & 0xff] << 0x10) |
                        (_0x232477[(_0x37ec66 >>> 0x8) & 0xff] << 0x8) |
                        _0x232477[0xff & _0x37ec66];
                      _0x37ec66 ^=
                        _0x43a909[(_0x5a0dd7 / _0x322a51) | 0x0] << 0x18;
                    }
                    _0x194542[_0x5a0dd7] =
                      _0x194542[_0x5a0dd7 - _0x322a51] ^ _0x37ec66;
                  }
                }
                _0x3b0882 = this._invKeySchedule = [];
                for (_0x322a51 = 0x0; _0x322a51 < _0x5e1435; _0x322a51++) {
                  _0x5a0dd7 = _0x5e1435 - _0x322a51;
                  _0x37ec66 =
                    _0x322a51 % 0x4
                      ? _0x194542[_0x5a0dd7]
                      : _0x194542[_0x5a0dd7 - 0x4];
                  if (0x4 > _0x322a51 || 0x4 >= _0x5a0dd7) {
                    _0x3b0882[_0x322a51] = _0x37ec66;
                  } else {
                    _0x3b0882[_0x322a51] =
                      _0x48d6a5[_0x232477[_0x37ec66 >>> 0x18]] ^
                      _0x28e92d[_0x232477[(_0x37ec66 >>> 0x10) & 0xff]] ^
                      _0xafb1be[_0x232477[(_0x37ec66 >>> 0x8) & 0xff]] ^
                      _0x553eee[_0x232477[0xff & _0x37ec66]];
                  }
                }
              }
            },
            encryptBlock: function (_0x523e2b, _0x44456c) {
              this._doCryptBlock(
                _0x523e2b,
                _0x44456c,
                this._keySchedule,
                _0x5614ec,
                _0xedb522,
                _0x13fcfb,
                _0x403a8b,
                _0x232477
              );
            },
            decryptBlock: function (_0x44dbd8, _0x2398cd) {
              var _0x18eada = _0x44dbd8[_0x2398cd + 0x1];
              _0x44dbd8[_0x2398cd + 0x1] = _0x44dbd8[_0x2398cd + 0x3];
              _0x44dbd8[_0x2398cd + 0x3] = _0x18eada;
              this._doCryptBlock(
                _0x44dbd8,
                _0x2398cd,
                this._invKeySchedule,
                _0x48d6a5,
                _0x28e92d,
                _0xafb1be,
                _0x553eee,
                _0x15145b
              );
              _0x18eada = _0x44dbd8[_0x2398cd + 0x1];
              _0x44dbd8[_0x2398cd + 0x1] = _0x44dbd8[_0x2398cd + 0x3];
              _0x44dbd8[_0x2398cd + 0x3] = _0x18eada;
            },
            _doCryptBlock: function (
              _0x3d5d1b,
              _0x26fbc8,
              _0x594ede,
              _0x3c6b9c,
              _0x2d575c,
              _0x3dccfe,
              _0x370eed,
              _0x47c9d0
            ) {
              var _0x38fb3e = this._nRounds;
              var _0x20fdcc = _0x3d5d1b[_0x26fbc8] ^ _0x594ede[0x0];
              var _0x3c0cfa = _0x3d5d1b[_0x26fbc8 + 0x1] ^ _0x594ede[0x1];
              var _0x87bc0a = _0x3d5d1b[_0x26fbc8 + 0x2] ^ _0x594ede[0x2];
              var _0x5c0fa1 = _0x3d5d1b[_0x26fbc8 + 0x3] ^ _0x594ede[0x3];
              var _0x3b8739 = 0x4;
              for (var _0x6d8697 = 0x1; _0x6d8697 < _0x38fb3e; _0x6d8697++) {
                var _0xb91981 =
                  _0x3c6b9c[_0x20fdcc >>> 0x18] ^
                  _0x2d575c[(_0x3c0cfa >>> 0x10) & 0xff] ^
                  _0x3dccfe[(_0x87bc0a >>> 0x8) & 0xff] ^
                  _0x370eed[0xff & _0x5c0fa1] ^
                  _0x594ede[_0x3b8739++];
                var _0x2be69c =
                  _0x3c6b9c[_0x3c0cfa >>> 0x18] ^
                  _0x2d575c[(_0x87bc0a >>> 0x10) & 0xff] ^
                  _0x3dccfe[(_0x5c0fa1 >>> 0x8) & 0xff] ^
                  _0x370eed[0xff & _0x20fdcc] ^
                  _0x594ede[_0x3b8739++];
                var _0x466722 =
                  _0x3c6b9c[_0x87bc0a >>> 0x18] ^
                  _0x2d575c[(_0x5c0fa1 >>> 0x10) & 0xff] ^
                  _0x3dccfe[(_0x20fdcc >>> 0x8) & 0xff] ^
                  _0x370eed[0xff & _0x3c0cfa] ^
                  _0x594ede[_0x3b8739++];
                var _0x5c0fa1 =
                  _0x3c6b9c[_0x5c0fa1 >>> 0x18] ^
                  _0x2d575c[(_0x20fdcc >>> 0x10) & 0xff] ^
                  _0x3dccfe[(_0x3c0cfa >>> 0x8) & 0xff] ^
                  _0x370eed[0xff & _0x87bc0a] ^
                  _0x594ede[_0x3b8739++];
                var _0x20fdcc = _0xb91981;
                var _0x3c0cfa = _0x2be69c;
                var _0x87bc0a = _0x466722;
              }
              _0xb91981 =
                ((_0x47c9d0[_0x20fdcc >>> 0x18] << 0x18) |
                  (_0x47c9d0[(_0x3c0cfa >>> 0x10) & 0xff] << 0x10) |
                  (_0x47c9d0[(_0x87bc0a >>> 0x8) & 0xff] << 0x8) |
                  _0x47c9d0[0xff & _0x5c0fa1]) ^
                _0x594ede[_0x3b8739++];
              _0x2be69c =
                ((_0x47c9d0[_0x3c0cfa >>> 0x18] << 0x18) |
                  (_0x47c9d0[(_0x87bc0a >>> 0x10) & 0xff] << 0x10) |
                  (_0x47c9d0[(_0x5c0fa1 >>> 0x8) & 0xff] << 0x8) |
                  _0x47c9d0[0xff & _0x20fdcc]) ^
                _0x594ede[_0x3b8739++];
              _0x466722 =
                ((_0x47c9d0[_0x87bc0a >>> 0x18] << 0x18) |
                  (_0x47c9d0[(_0x5c0fa1 >>> 0x10) & 0xff] << 0x10) |
                  (_0x47c9d0[(_0x20fdcc >>> 0x8) & 0xff] << 0x8) |
                  _0x47c9d0[0xff & _0x3c0cfa]) ^
                _0x594ede[_0x3b8739++];
              _0x5c0fa1 =
                ((_0x47c9d0[_0x5c0fa1 >>> 0x18] << 0x18) |
                  (_0x47c9d0[(_0x20fdcc >>> 0x10) & 0xff] << 0x10) |
                  (_0x47c9d0[(_0x3c0cfa >>> 0x8) & 0xff] << 0x8) |
                  _0x47c9d0[0xff & _0x87bc0a]) ^
                _0x594ede[_0x3b8739++];
              _0x3d5d1b[_0x26fbc8] = _0xb91981;
              _0x3d5d1b[_0x26fbc8 + 0x1] = _0x2be69c;
              _0x3d5d1b[_0x26fbc8 + 0x2] = _0x466722;
              _0x3d5d1b[_0x26fbc8 + 0x3] = _0x5c0fa1;
            },
            keySize: 0x8,
          }));
          _0x44d2a5.AES = _0x2421fd._createHelper(_0x1d1c5e);
          _0x59ee11.exports = _0x44d2a5.AES;
          true;
        },
        function (_0x1a818f, _0x136b4e, _0x27647f) {
          _0x136b4e = _0x27647f(0x5);
          var _0x3d4032 = _0x136b4e.lib.WordArray;
          _0x136b4e.enc.Base64 = {
            stringify: function (_0x4f17e7) {
              var _0xafca51 = _0x4f17e7.words;
              var _0x11cb84 = _0x4f17e7.sigBytes;
              var _0x469e12 = this._map;
              _0x4f17e7.clamp();
              _0x4f17e7 = [];
              for (
                var _0xa51e88 = 0x0;
                _0xa51e88 < _0x11cb84;
                _0xa51e88 += 0x3
              ) {
                var _0x4b2436 =
                  (((_0xafca51[_0xa51e88 >>> 0x2] >>>
                    (0x18 - 0x8 * (_0xa51e88 % 0x4))) &
                    0xff) <<
                    0x10) |
                  (((_0xafca51[(_0xa51e88 + 0x1) >>> 0x2] >>>
                    (0x18 - 0x8 * ((_0xa51e88 + 0x1) % 0x4))) &
                    0xff) <<
                    0x8) |
                  ((_0xafca51[(_0xa51e88 + 0x2) >>> 0x2] >>>
                    (0x18 - 0x8 * ((_0xa51e88 + 0x2) % 0x4))) &
                    0xff);
                for (
                  var _0x28c2d6 = 0x0;
                  0x4 > _0x28c2d6 && _0xa51e88 + 0.75 * _0x28c2d6 < _0x11cb84;
                  _0x28c2d6++
                ) {
                  _0x4f17e7.push(
                    _0x469e12.charAt(
                      (_0x4b2436 >>> (0x6 * (0x3 - _0x28c2d6))) & 0x3f
                    )
                  );
                }
              }
              if ((_0xafca51 = _0x469e12.charAt(0x40))) {
                for (; _0x4f17e7.length % 0x4; ) {
                  _0x4f17e7.push(_0xafca51);
                }
              }
              return _0x4f17e7.join("");
            },
            parse: function (_0x5669f4) {
              var _0x3a83b6 = _0x5669f4.length;
              var _0x1f39d5 = this._map;
              var _0xa7e049 = this._reverseMap;
              if (!_0xa7e049) {
                var _0xa7e049 = (this._reverseMap = []);
                for (
                  var _0x2f93c0 = 0x0;
                  _0x2f93c0 < _0x1f39d5.length;
                  _0x2f93c0++
                ) {
                  _0xa7e049[_0x1f39d5.charCodeAt(_0x2f93c0)] = _0x2f93c0;
                }
              }
              if ((_0x1f39d5 = _0x1f39d5.charAt(0x40))) {
                _0x1f39d5 = _0x5669f4.indexOf(_0x1f39d5);
                if (-0x1 !== _0x1f39d5) {
                  _0x3a83b6 = _0x1f39d5;
                }
              }
              var _0x1f39d5 = [];
              for (
                var _0x5eedea = (_0x2f93c0 = 0x0);
                _0x5eedea < _0x3a83b6;
                _0x5eedea++
              ) {
                if (_0x5eedea % 0x4) {
                  var _0x51be07 =
                    _0xa7e049[_0x5669f4.charCodeAt(_0x5eedea - 0x1)] <<
                    (0x2 * (_0x5eedea % 0x4));
                  var _0x1dfec3 =
                    _0xa7e049[_0x5669f4.charCodeAt(_0x5eedea)] >>>
                    (0x6 - 0x2 * (_0x5eedea % 0x4));
                  _0x1f39d5[_0x2f93c0 >>> 0x2] |=
                    (_0x51be07 | _0x1dfec3) << (0x18 - 0x8 * (_0x2f93c0 % 0x4));
                  _0x2f93c0++;
                }
              }
              return _0x3d4032.create(_0x1f39d5, _0x2f93c0);
            },
            _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          };
          _0x1a818f.exports = _0x136b4e.enc.Base64;
          true;
        },
        function (_0x29fbf4, _0x276484, _0x5d554c) {
          _0x276484 = _0x5d554c(0x5);
          var _0x59ae31 = function (
            _0x1d1392,
            _0x230c3e,
            _0x44a2ed,
            _0x38056b,
            _0x432b2a,
            _0x559ce0,
            _0x1a9a59
          ) {
            _0x1d1392 =
              _0x1d1392 +
              ((_0x230c3e & _0x44a2ed) | (~_0x230c3e & _0x38056b)) +
              _0x432b2a +
              _0x1a9a59;
            return (
              ((_0x1d1392 << _0x559ce0) | (_0x1d1392 >>> (0x20 - _0x559ce0))) +
              _0x230c3e
            );
          };
          var _0x1cac35 = function (
            _0x32d863,
            _0x4b51fb,
            _0x2d0b04,
            _0x3ccd66,
            _0x7df5e2,
            _0x39a1d0,
            _0x21cb44
          ) {
            _0x32d863 =
              _0x32d863 +
              ((_0x4b51fb & _0x3ccd66) | (_0x2d0b04 & ~_0x3ccd66)) +
              _0x7df5e2 +
              _0x21cb44;
            return (
              ((_0x32d863 << _0x39a1d0) | (_0x32d863 >>> (0x20 - _0x39a1d0))) +
              _0x4b51fb
            );
          };
          var _0x2676ee = function (
            _0x51e9fb,
            _0xb402be,
            _0x284d4f,
            _0xe2591e,
            _0x981352,
            _0x363f5a,
            _0x1e6259
          ) {
            _0x51e9fb =
              _0x51e9fb +
              (_0xb402be ^ _0x284d4f ^ _0xe2591e) +
              _0x981352 +
              _0x1e6259;
            return (
              ((_0x51e9fb << _0x363f5a) | (_0x51e9fb >>> (0x20 - _0x363f5a))) +
              _0xb402be
            );
          };
          var _0x37b075 = function (
            _0x1a216e,
            _0x44ef34,
            _0x3890fb,
            _0x196196,
            _0xe37d77,
            _0x4152fb,
            _0x10f153
          ) {
            _0x1a216e =
              _0x1a216e +
              (_0x3890fb ^ (_0x44ef34 | ~_0x196196)) +
              _0xe37d77 +
              _0x10f153;
            return (
              ((_0x1a216e << _0x4152fb) | (_0x1a216e >>> (0x20 - _0x4152fb))) +
              _0x44ef34
            );
          };
          _0x5d554c = _0x276484.lib;
          var _0x280ddc = _0x5d554c.WordArray;
          var _0x3076ff = _0x5d554c.Hasher;
          _0x5d554c = _0x276484.algo;
          var _0x255cc5 = [];
          for (var _0x37773d = 0x0; 0x40 > _0x37773d; _0x37773d++) {
            _0x255cc5[_0x37773d] =
              (0x100000000 * Math.abs(Math.sin(_0x37773d + 0x1))) | 0x0;
          }
          true;
          _0x5d554c = _0x5d554c.MD5 = _0x3076ff.extend({
            _doReset: function () {
              this._hash = new _0x280ddc.init([
                0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476,
              ]);
            },
            _doProcessBlock: function (_0x2961c6, _0x4b54b2) {
              for (var _0xdd231e = 0x0; 0x10 > _0xdd231e; _0xdd231e++) {
                var _0x186e5a = _0x4b54b2 + _0xdd231e;
                var _0x5aa78b = _0x2961c6[_0x186e5a];
                _0x2961c6[_0x186e5a] =
                  (0xff00ff & ((_0x5aa78b << 0x8) | (_0x5aa78b >>> 0x18))) |
                  (0xff00ff00 & ((_0x5aa78b << 0x18) | (_0x5aa78b >>> 0x8)));
              }
              var _0xdd231e = this._hash.words;
              var _0x186e5a = _0x2961c6[_0x4b54b2 + 0x0];
              var _0x5aa78b = _0x2961c6[_0x4b54b2 + 0x1];
              var _0x54eacb = _0x2961c6[_0x4b54b2 + 0x2];
              var _0xbc126d = _0x2961c6[_0x4b54b2 + 0x3];
              var _0x342efa = _0x2961c6[_0x4b54b2 + 0x4];
              var _0x1df495 = _0x2961c6[_0x4b54b2 + 0x5];
              var _0x424b6b = _0x2961c6[_0x4b54b2 + 0x6];
              var _0x4566e1 = _0x2961c6[_0x4b54b2 + 0x7];
              var _0x454199 = _0x2961c6[_0x4b54b2 + 0x8];
              var _0x3f5878 = _0x2961c6[_0x4b54b2 + 0x9];
              var _0x3e15b4 = _0x2961c6[_0x4b54b2 + 0xa];
              var _0x4fa008 = _0x2961c6[_0x4b54b2 + 0xb];
              var _0x134a42 = _0x2961c6[_0x4b54b2 + 0xc];
              var _0x992752 = _0x2961c6[_0x4b54b2 + 0xd];
              var _0x3937c5 = _0x2961c6[_0x4b54b2 + 0xe];
              var _0x1eabd7 = _0x2961c6[_0x4b54b2 + 0xf];
              var _0x56c19f = _0xdd231e[0x0];
              var _0x215b58 = _0xdd231e[0x1];
              var _0x2b3098 = _0xdd231e[0x2];
              var _0x302b31 = _0xdd231e[0x3];
              var _0x56c19f = _0x59ae31(
                _0x56c19f,
                _0x215b58,
                _0x2b3098,
                _0x302b31,
                _0x186e5a,
                0x7,
                _0x255cc5[0x0]
              );
              var _0x302b31 = _0x59ae31(
                _0x302b31,
                _0x56c19f,
                _0x215b58,
                _0x2b3098,
                _0x5aa78b,
                0xc,
                _0x255cc5[0x1]
              );
              var _0x2b3098 = _0x59ae31(
                _0x2b3098,
                _0x302b31,
                _0x56c19f,
                _0x215b58,
                _0x54eacb,
                0x11,
                _0x255cc5[0x2]
              );
              var _0x215b58 = _0x59ae31(
                _0x215b58,
                _0x2b3098,
                _0x302b31,
                _0x56c19f,
                _0xbc126d,
                0x16,
                _0x255cc5[0x3]
              );
              var _0x56c19f = _0x59ae31(
                _0x56c19f,
                _0x215b58,
                _0x2b3098,
                _0x302b31,
                _0x342efa,
                0x7,
                _0x255cc5[0x4]
              );
              var _0x302b31 = _0x59ae31(
                _0x302b31,
                _0x56c19f,
                _0x215b58,
                _0x2b3098,
                _0x1df495,
                0xc,
                _0x255cc5[0x5]
              );
              var _0x2b3098 = _0x59ae31(
                _0x2b3098,
                _0x302b31,
                _0x56c19f,
                _0x215b58,
                _0x424b6b,
                0x11,
                _0x255cc5[0x6]
              );
              var _0x215b58 = _0x59ae31(
                _0x215b58,
                _0x2b3098,
                _0x302b31,
                _0x56c19f,
                _0x4566e1,
                0x16,
                _0x255cc5[0x7]
              );
              var _0x56c19f = _0x59ae31(
                _0x56c19f,
                _0x215b58,
                _0x2b3098,
                _0x302b31,
                _0x454199,
                0x7,
                _0x255cc5[0x8]
              );
              var _0x302b31 = _0x59ae31(
                _0x302b31,
                _0x56c19f,
                _0x215b58,
                _0x2b3098,
                _0x3f5878,
                0xc,
                _0x255cc5[0x9]
              );
              var _0x2b3098 = _0x59ae31(
                _0x2b3098,
                _0x302b31,
                _0x56c19f,
                _0x215b58,
                _0x3e15b4,
                0x11,
                _0x255cc5[0xa]
              );
              var _0x215b58 = _0x59ae31(
                _0x215b58,
                _0x2b3098,
                _0x302b31,
                _0x56c19f,
                _0x4fa008,
                0x16,
                _0x255cc5[0xb]
              );
              var _0x56c19f = _0x59ae31(
                _0x56c19f,
                _0x215b58,
                _0x2b3098,
                _0x302b31,
                _0x134a42,
                0x7,
                _0x255cc5[0xc]
              );
              var _0x302b31 = _0x59ae31(
                _0x302b31,
                _0x56c19f,
                _0x215b58,
                _0x2b3098,
                _0x992752,
                0xc,
                _0x255cc5[0xd]
              );
              var _0x2b3098 = _0x59ae31(
                _0x2b3098,
                _0x302b31,
                _0x56c19f,
                _0x215b58,
                _0x3937c5,
                0x11,
                _0x255cc5[0xe]
              );
              var _0x215b58 = _0x59ae31(
                _0x215b58,
                _0x2b3098,
                _0x302b31,
                _0x56c19f,
                _0x1eabd7,
                0x16,
                _0x255cc5[0xf]
              );
              var _0x56c19f = _0x1cac35(
                _0x56c19f,
                _0x215b58,
                _0x2b3098,
                _0x302b31,
                _0x5aa78b,
                0x5,
                _0x255cc5[0x10]
              );
              var _0x302b31 = _0x1cac35(
                _0x302b31,
                _0x56c19f,
                _0x215b58,
                _0x2b3098,
                _0x424b6b,
                0x9,
                _0x255cc5[0x11]
              );
              var _0x2b3098 = _0x1cac35(
                _0x2b3098,
                _0x302b31,
                _0x56c19f,
                _0x215b58,
                _0x4fa008,
                0xe,
                _0x255cc5[0x12]
              );
              var _0x215b58 = _0x1cac35(
                _0x215b58,
                _0x2b3098,
                _0x302b31,
                _0x56c19f,
                _0x186e5a,
                0x14,
                _0x255cc5[0x13]
              );
              var _0x56c19f = _0x1cac35(
                _0x56c19f,
                _0x215b58,
                _0x2b3098,
                _0x302b31,
                _0x1df495,
                0x5,
                _0x255cc5[0x14]
              );
              var _0x302b31 = _0x1cac35(
                _0x302b31,
                _0x56c19f,
                _0x215b58,
                _0x2b3098,
                _0x3e15b4,
                0x9,
                _0x255cc5[0x15]
              );
              var _0x2b3098 = _0x1cac35(
                _0x2b3098,
                _0x302b31,
                _0x56c19f,
                _0x215b58,
                _0x1eabd7,
                0xe,
                _0x255cc5[0x16]
              );
              var _0x215b58 = _0x1cac35(
                _0x215b58,
                _0x2b3098,
                _0x302b31,
                _0x56c19f,
                _0x342efa,
                0x14,
                _0x255cc5[0x17]
              );
              var _0x56c19f = _0x1cac35(
                _0x56c19f,
                _0x215b58,
                _0x2b3098,
                _0x302b31,
                _0x3f5878,
                0x5,
                _0x255cc5[0x18]
              );
              var _0x302b31 = _0x1cac35(
                _0x302b31,
                _0x56c19f,
                _0x215b58,
                _0x2b3098,
                _0x3937c5,
                0x9,
                _0x255cc5[0x19]
              );
              var _0x2b3098 = _0x1cac35(
                _0x2b3098,
                _0x302b31,
                _0x56c19f,
                _0x215b58,
                _0xbc126d,
                0xe,
                _0x255cc5[0x1a]
              );
              var _0x215b58 = _0x1cac35(
                _0x215b58,
                _0x2b3098,
                _0x302b31,
                _0x56c19f,
                _0x454199,
                0x14,
                _0x255cc5[0x1b]
              );
              var _0x56c19f = _0x1cac35(
                _0x56c19f,
                _0x215b58,
                _0x2b3098,
                _0x302b31,
                _0x992752,
                0x5,
                _0x255cc5[0x1c]
              );
              var _0x302b31 = _0x1cac35(
                _0x302b31,
                _0x56c19f,
                _0x215b58,
                _0x2b3098,
                _0x54eacb,
                0x9,
                _0x255cc5[0x1d]
              );
              var _0x2b3098 = _0x1cac35(
                _0x2b3098,
                _0x302b31,
                _0x56c19f,
                _0x215b58,
                _0x4566e1,
                0xe,
                _0x255cc5[0x1e]
              );
              var _0x215b58 = _0x1cac35(
                _0x215b58,
                _0x2b3098,
                _0x302b31,
                _0x56c19f,
                _0x134a42,
                0x14,
                _0x255cc5[0x1f]
              );
              var _0x56c19f = _0x2676ee(
                _0x56c19f,
                _0x215b58,
                _0x2b3098,
                _0x302b31,
                _0x1df495,
                0x4,
                _0x255cc5[0x20]
              );
              var _0x302b31 = _0x2676ee(
                _0x302b31,
                _0x56c19f,
                _0x215b58,
                _0x2b3098,
                _0x454199,
                0xb,
                _0x255cc5[0x21]
              );
              var _0x2b3098 = _0x2676ee(
                _0x2b3098,
                _0x302b31,
                _0x56c19f,
                _0x215b58,
                _0x4fa008,
                0x10,
                _0x255cc5[0x22]
              );
              var _0x215b58 = _0x2676ee(
                _0x215b58,
                _0x2b3098,
                _0x302b31,
                _0x56c19f,
                _0x3937c5,
                0x17,
                _0x255cc5[0x23]
              );
              var _0x56c19f = _0x2676ee(
                _0x56c19f,
                _0x215b58,
                _0x2b3098,
                _0x302b31,
                _0x5aa78b,
                0x4,
                _0x255cc5[0x24]
              );
              var _0x302b31 = _0x2676ee(
                _0x302b31,
                _0x56c19f,
                _0x215b58,
                _0x2b3098,
                _0x342efa,
                0xb,
                _0x255cc5[0x25]
              );
              var _0x2b3098 = _0x2676ee(
                _0x2b3098,
                _0x302b31,
                _0x56c19f,
                _0x215b58,
                _0x4566e1,
                0x10,
                _0x255cc5[0x26]
              );
              var _0x215b58 = _0x2676ee(
                _0x215b58,
                _0x2b3098,
                _0x302b31,
                _0x56c19f,
                _0x3e15b4,
                0x17,
                _0x255cc5[0x27]
              );
              var _0x56c19f = _0x2676ee(
                _0x56c19f,
                _0x215b58,
                _0x2b3098,
                _0x302b31,
                _0x992752,
                0x4,
                _0x255cc5[0x28]
              );
              var _0x302b31 = _0x2676ee(
                _0x302b31,
                _0x56c19f,
                _0x215b58,
                _0x2b3098,
                _0x186e5a,
                0xb,
                _0x255cc5[0x29]
              );
              var _0x2b3098 = _0x2676ee(
                _0x2b3098,
                _0x302b31,
                _0x56c19f,
                _0x215b58,
                _0xbc126d,
                0x10,
                _0x255cc5[0x2a]
              );
              var _0x215b58 = _0x2676ee(
                _0x215b58,
                _0x2b3098,
                _0x302b31,
                _0x56c19f,
                _0x424b6b,
                0x17,
                _0x255cc5[0x2b]
              );
              var _0x56c19f = _0x2676ee(
                _0x56c19f,
                _0x215b58,
                _0x2b3098,
                _0x302b31,
                _0x3f5878,
                0x4,
                _0x255cc5[0x2c]
              );
              var _0x302b31 = _0x2676ee(
                _0x302b31,
                _0x56c19f,
                _0x215b58,
                _0x2b3098,
                _0x134a42,
                0xb,
                _0x255cc5[0x2d]
              );
              var _0x2b3098 = _0x2676ee(
                _0x2b3098,
                _0x302b31,
                _0x56c19f,
                _0x215b58,
                _0x1eabd7,
                0x10,
                _0x255cc5[0x2e]
              );
              var _0x215b58 = _0x2676ee(
                _0x215b58,
                _0x2b3098,
                _0x302b31,
                _0x56c19f,
                _0x54eacb,
                0x17,
                _0x255cc5[0x2f]
              );
              var _0x56c19f = _0x37b075(
                _0x56c19f,
                _0x215b58,
                _0x2b3098,
                _0x302b31,
                _0x186e5a,
                0x6,
                _0x255cc5[0x30]
              );
              var _0x302b31 = _0x37b075(
                _0x302b31,
                _0x56c19f,
                _0x215b58,
                _0x2b3098,
                _0x4566e1,
                0xa,
                _0x255cc5[0x31]
              );
              var _0x2b3098 = _0x37b075(
                _0x2b3098,
                _0x302b31,
                _0x56c19f,
                _0x215b58,
                _0x3937c5,
                0xf,
                _0x255cc5[0x32]
              );
              var _0x215b58 = _0x37b075(
                _0x215b58,
                _0x2b3098,
                _0x302b31,
                _0x56c19f,
                _0x1df495,
                0x15,
                _0x255cc5[0x33]
              );
              var _0x56c19f = _0x37b075(
                _0x56c19f,
                _0x215b58,
                _0x2b3098,
                _0x302b31,
                _0x134a42,
                0x6,
                _0x255cc5[0x34]
              );
              var _0x302b31 = _0x37b075(
                _0x302b31,
                _0x56c19f,
                _0x215b58,
                _0x2b3098,
                _0xbc126d,
                0xa,
                _0x255cc5[0x35]
              );
              var _0x2b3098 = _0x37b075(
                _0x2b3098,
                _0x302b31,
                _0x56c19f,
                _0x215b58,
                _0x3e15b4,
                0xf,
                _0x255cc5[0x36]
              );
              var _0x215b58 = _0x37b075(
                _0x215b58,
                _0x2b3098,
                _0x302b31,
                _0x56c19f,
                _0x5aa78b,
                0x15,
                _0x255cc5[0x37]
              );
              var _0x56c19f = _0x37b075(
                _0x56c19f,
                _0x215b58,
                _0x2b3098,
                _0x302b31,
                _0x454199,
                0x6,
                _0x255cc5[0x38]
              );
              var _0x302b31 = _0x37b075(
                _0x302b31,
                _0x56c19f,
                _0x215b58,
                _0x2b3098,
                _0x1eabd7,
                0xa,
                _0x255cc5[0x39]
              );
              var _0x2b3098 = _0x37b075(
                _0x2b3098,
                _0x302b31,
                _0x56c19f,
                _0x215b58,
                _0x424b6b,
                0xf,
                _0x255cc5[0x3a]
              );
              var _0x215b58 = _0x37b075(
                _0x215b58,
                _0x2b3098,
                _0x302b31,
                _0x56c19f,
                _0x992752,
                0x15,
                _0x255cc5[0x3b]
              );
              var _0x56c19f = _0x37b075(
                _0x56c19f,
                _0x215b58,
                _0x2b3098,
                _0x302b31,
                _0x342efa,
                0x6,
                _0x255cc5[0x3c]
              );
              var _0x302b31 = _0x37b075(
                _0x302b31,
                _0x56c19f,
                _0x215b58,
                _0x2b3098,
                _0x4fa008,
                0xa,
                _0x255cc5[0x3d]
              );
              var _0x2b3098 = _0x37b075(
                _0x2b3098,
                _0x302b31,
                _0x56c19f,
                _0x215b58,
                _0x54eacb,
                0xf,
                _0x255cc5[0x3e]
              );
              var _0x215b58 = _0x37b075(
                _0x215b58,
                _0x2b3098,
                _0x302b31,
                _0x56c19f,
                _0x3f5878,
                0x15,
                _0x255cc5[0x3f]
              );
              _0xdd231e[0x0] = (_0xdd231e[0x0] + _0x56c19f) | 0x0;
              _0xdd231e[0x1] = (_0xdd231e[0x1] + _0x215b58) | 0x0;
              _0xdd231e[0x2] = (_0xdd231e[0x2] + _0x2b3098) | 0x0;
              _0xdd231e[0x3] = (_0xdd231e[0x3] + _0x302b31) | 0x0;
            },
            _doFinalize: function () {
              var _0x46bc4b = this._data;
              var _0x4e3e8a = _0x46bc4b.words;
              var _0x428ed6 = 0x8 * this._nDataBytes;
              var _0x39de09 = 0x8 * _0x46bc4b.sigBytes;
              _0x4e3e8a[_0x39de09 >>> 0x5] |=
                0x80 << (0x18 - (_0x39de09 % 0x20));
              var _0x56d56b = Math.floor(_0x428ed6 / 0x100000000);
              _0x4e3e8a[(((_0x39de09 + 0x40) >>> 0x9) << 0x4) + 0xf] =
                (0xff00ff & ((_0x56d56b << 0x8) | (_0x56d56b >>> 0x18))) |
                (0xff00ff00 & ((_0x56d56b << 0x18) | (_0x56d56b >>> 0x8)));
              _0x4e3e8a[(((_0x39de09 + 0x40) >>> 0x9) << 0x4) + 0xe] =
                (0xff00ff & ((_0x428ed6 << 0x8) | (_0x428ed6 >>> 0x18))) |
                (0xff00ff00 & ((_0x428ed6 << 0x18) | (_0x428ed6 >>> 0x8)));
              _0x46bc4b.sigBytes = 0x4 * (_0x4e3e8a.length + 0x1);
              this._process();
              _0x46bc4b = this._hash;
              _0x4e3e8a = _0x46bc4b.words;
              for (_0x428ed6 = 0x0; 0x4 > _0x428ed6; _0x428ed6++) {
                _0x39de09 = _0x4e3e8a[_0x428ed6];
                _0x4e3e8a[_0x428ed6] =
                  (0xff00ff & ((_0x39de09 << 0x8) | (_0x39de09 >>> 0x18))) |
                  (0xff00ff00 & ((_0x39de09 << 0x18) | (_0x39de09 >>> 0x8)));
              }
              return _0x46bc4b;
            },
            clone: function () {
              var _0x21f7b5 = _0x3076ff.clone.call(this);
              _0x21f7b5._hash = this._hash.clone();
              return _0x21f7b5;
            },
          });
          _0x276484.MD5 = _0x3076ff._createHelper(_0x5d554c);
          _0x276484.HmacMD5 = _0x3076ff._createHmacHelper(_0x5d554c);
          _0x29fbf4.exports = _0x276484.MD5;
          true;
        },
        function (_0x46545e, _0x5ec2b1, _0x456933) {
          _0x5ec2b1 = _0x456933(0x5);
          _0x456933(0x6);
          _0x456933(0x7);
          var _0x4d0d6c = _0x5ec2b1.lib;
          _0x456933 = _0x4d0d6c.Base;
          var _0x44a9b1 = _0x4d0d6c.WordArray;
          var _0x4d0d6c = _0x5ec2b1.algo;
          var _0x32a3bc = (_0x4d0d6c.EvpKDF = _0x456933.extend({
            cfg: _0x456933.extend({
              keySize: 0x4,
              hasher: _0x4d0d6c.MD5,
              iterations: 0x1,
            }),
            init: function (_0x57c5a8) {
              this.cfg = this.cfg.extend(_0x57c5a8);
            },
            compute: function (_0x22f7cd, _0x5d79d0) {
              var _0x183ed9 = this.cfg;
              var _0x3b7259 = _0x183ed9.hasher.create();
              var _0x389f58 = _0x44a9b1.create();
              var _0x19d107 = _0x389f58.words;
              var _0x2cd871 = _0x183ed9.keySize;
              for (
                var _0x183ed9 = _0x183ed9.iterations;
                _0x19d107.length < _0x2cd871;

              ) {
                if (_0x21fe51) {
                  _0x3b7259.update(_0x21fe51);
                }
                var _0x21fe51 = _0x3b7259.update(_0x22f7cd).finalize(_0x5d79d0);
                _0x3b7259.reset();
                for (var _0x4d3575 = 0x1; _0x4d3575 < _0x183ed9; _0x4d3575++) {
                  _0x21fe51 = _0x3b7259.finalize(_0x21fe51);
                  _0x3b7259.reset();
                }
                _0x389f58.concat(_0x21fe51);
              }
              _0x389f58.sigBytes = 0x4 * _0x2cd871;
              return _0x389f58;
            },
          }));
          _0x5ec2b1.EvpKDF = function (_0x568c4b, _0x46886f, _0x5e92dc) {
            return _0x32a3bc.create(_0x5e92dc).compute(_0x568c4b, _0x46886f);
          };
          _0x46545e.exports = _0x5ec2b1.EvpKDF;
          true;
        },
        function (_0x207652, _0x2ff30b, _0x597512) {
          _0x597512 = _0x597512(0x5);
          if (!_0x597512.lib.Cipher) {
            _0x2ff30b = _0x597512.lib;
            var _0x66d550 = _0x2ff30b.Base;
            var _0x3fd716 = _0x2ff30b.WordArray;
            var _0x38661d = _0x2ff30b.BufferedBlockAlgorithm;
            var _0x3c378d = _0x597512.enc;
            _0x3c378d.Utf8;
            var _0x3aa19b = _0x3c378d.Base64;
            var _0x34885f = _0x597512.algo.EvpKDF;
            var _0x3abc7d = (_0x2ff30b.Cipher = _0x38661d.extend({
              cfg: _0x66d550.extend(),
              createEncryptor: function (_0x29e158, _0x4f361a) {
                return this.create(this._ENC_XFORM_MODE, _0x29e158, _0x4f361a);
              },
              createDecryptor: function (_0x12cf11, _0xc95254) {
                return this.create(this._DEC_XFORM_MODE, _0x12cf11, _0xc95254);
              },
              init: function (_0x317535, _0x9be1a6, _0x4a0f79) {
                this.cfg = this.cfg.extend(_0x4a0f79);
                this._xformMode = _0x317535;
                this._key = _0x9be1a6;
                this.reset();
              },
              reset: function () {
                _0x38661d.reset.call(this);
                this._doReset();
              },
              process: function (_0x18f316) {
                this._append(_0x18f316);
                return this._process();
              },
              finalize: function (_0x4b73a7) {
                if (_0x4b73a7) {
                  this._append(_0x4b73a7);
                }
                return this._doFinalize();
              },
              keySize: 0x4,
              ivSize: 0x4,
              _ENC_XFORM_MODE: 0x1,
              _DEC_XFORM_MODE: 0x2,
              _createHelper: function (_0x22c1bd) {
                return {
                  encrypt: function (_0x477442, _0x398c1c, _0x4f90ad) {
                    return (
                      "string" == typeof _0x398c1c ? _0x3d0106 : _0x1fc38a
                    ).encrypt(_0x22c1bd, _0x477442, _0x398c1c, _0x4f90ad);
                  },
                  decrypt: function (_0x313006, _0x4cb047, _0x21d980) {
                    return (
                      "string" == typeof _0x4cb047 ? _0x3d0106 : _0x1fc38a
                    ).decrypt(_0x22c1bd, _0x313006, _0x4cb047, _0x21d980);
                  },
                };
              },
            }));
            _0x2ff30b.StreamCipher = _0x3abc7d.extend({
              _doFinalize: function () {
                return this._process(true);
              },
              blockSize: 0x1,
            });
            var _0x3c378d = (_0x597512.mode = {});
            var _0x233fef;
            var _0x4163f3 = function (_0x123e6e, _0x59e008, _0x4837d3) {
              var _0x1e1366 = this._iv;
              if (_0x1e1366) {
                this._iv = undefined;
              } else {
                _0x1e1366 = this._prevBlock;
              }
              for (var _0x12e69a = 0x0; _0x12e69a < _0x4837d3; _0x12e69a++) {
                _0x123e6e[_0x59e008 + _0x12e69a] ^= _0x1e1366[_0x12e69a];
              }
            };
            _0x233fef = (_0x2ff30b.BlockCipherMode = _0x66d550.extend({
              createEncryptor: function (_0xf96291, _0x3710d3) {
                return this.Encryptor.create(_0xf96291, _0x3710d3);
              },
              createDecryptor: function (_0x21db17, _0x288299) {
                return this.Decryptor.create(_0x21db17, _0x288299);
              },
              init: function (_0x10732f, _0x1bd805) {
                this._cipher = _0x10732f;
                this._iv = _0x1bd805;
              },
            })).extend();
            _0x233fef.Encryptor = _0x233fef.extend({
              processBlock: function (_0xab1883, _0x74f5f2) {
                var _0x220e3a = this._cipher;
                var _0x44aad5 = _0x220e3a.blockSize;
                _0x4163f3.call(this, _0xab1883, _0x74f5f2, _0x44aad5);
                _0x220e3a.encryptBlock(_0xab1883, _0x74f5f2);
                this._prevBlock = _0xab1883.slice(
                  _0x74f5f2,
                  _0x74f5f2 + _0x44aad5
                );
              },
            });
            _0x233fef.Decryptor = _0x233fef.extend({
              processBlock: function (_0x23b3eb, _0x304309) {
                var _0x2c63ea = this._cipher;
                var _0xc6a787 = _0x2c63ea.blockSize;
                var _0x59425d = _0x23b3eb.slice(
                  _0x304309,
                  _0x304309 + _0xc6a787
                );
                _0x2c63ea.decryptBlock(_0x23b3eb, _0x304309);
                _0x4163f3.call(this, _0x23b3eb, _0x304309, _0xc6a787);
                this._prevBlock = _0x59425d;
              },
            });
            _0x233fef = _0x233fef;
            _0x3c378d = _0x3c378d.CBC = _0x233fef;
            _0x233fef = (_0x597512.pad = {}).Pkcs7 = {
              pad: function (_0x131201, _0x23bff6) {
                var _0x2c9da1 = 0x4 * _0x23bff6;
                var _0x2c9da1 = _0x2c9da1 - (_0x131201.sigBytes % _0x2c9da1);
                var _0x56626d =
                  (_0x2c9da1 << 0x18) |
                  (_0x2c9da1 << 0x10) |
                  (_0x2c9da1 << 0x8) |
                  _0x2c9da1;
                var _0x436578 = [];
                for (
                  var _0x3c8cce = 0x0;
                  _0x3c8cce < _0x2c9da1;
                  _0x3c8cce += 0x4
                ) {
                  _0x436578.push(_0x56626d);
                }
                _0x2c9da1 = _0x3fd716.create(_0x436578, _0x2c9da1);
                _0x131201.concat(_0x2c9da1);
              },
              unpad: function (_0x5fe78a) {
                _0x5fe78a.sigBytes -=
                  0xff & _0x5fe78a.words[(_0x5fe78a.sigBytes - 0x1) >>> 0x2];
              },
            };
            _0x2ff30b.BlockCipher = _0x3abc7d.extend({
              cfg: _0x3abc7d.cfg.extend({
                mode: _0x3c378d,
                padding: _0x233fef,
              }),
              reset: function () {
                _0x3abc7d.reset.call(this);
                var _0x143567 = this.cfg;
                var _0xcf6175 = _0x143567.iv;
                var _0x143567 = _0x143567.mode;
                if (this._xformMode == this._ENC_XFORM_MODE) {
                  var _0x4443fa = _0x143567.createEncryptor;
                } else {
                  _0x4443fa = _0x143567.createDecryptor;
                  this._minBufferSize = 0x1;
                }
                this._mode = _0x4443fa.call(
                  _0x143567,
                  this,
                  _0xcf6175 && _0xcf6175.words
                );
              },
              _doProcessBlock: function (_0x131d17, _0x15efdc) {
                this._mode.processBlock(_0x131d17, _0x15efdc);
              },
              _doFinalize: function () {
                var _0xd32af1 = this.cfg.padding;
                if (this._xformMode == this._ENC_XFORM_MODE) {
                  _0xd32af1.pad(this._data, this.blockSize);
                  var _0x3a58ec = this._process(true);
                } else {
                  _0x3a58ec = this._process(true);
                  _0xd32af1.unpad(_0x3a58ec);
                }
                return _0x3a58ec;
              },
              blockSize: 0x4,
            });
            var _0x4a3350 = (_0x2ff30b.CipherParams = _0x66d550.extend({
              init: function (_0x8708da) {
                this.mixIn(_0x8708da);
              },
              toString: function (_0x36fce1) {
                return (_0x36fce1 || this.formatter).stringify(this);
              },
            }));
            var _0x3c378d = ((_0x597512.format = {}).OpenSSL = {
              stringify: function (_0x3bd1e7) {
                var _0x59bfda = _0x3bd1e7.ciphertext;
                _0x3bd1e7 = _0x3bd1e7.salt;
                return (
                  _0x3bd1e7
                    ? _0x3fd716
                        .create([0x53616c74, 0x65645f5f])
                        .concat(_0x3bd1e7)
                        .concat(_0x59bfda)
                    : _0x59bfda
                ).toString(_0x3aa19b);
              },
              parse: function (_0x2b40c6) {
                _0x2b40c6 = _0x3aa19b.parse(_0x2b40c6);
                var _0x7255b4 = _0x2b40c6.words;
                if (
                  0x53616c74 == _0x7255b4[0x0] &&
                  0x65645f5f == _0x7255b4[0x1]
                ) {
                  var _0x3f4abd = _0x3fd716.create(_0x7255b4.slice(0x2, 0x4));
                  _0x7255b4.splice(0x0, 0x4);
                  _0x2b40c6.sigBytes -= 0x10;
                }
                return _0x4a3350.create({
                  ciphertext: _0x2b40c6,
                  salt: _0x3f4abd,
                });
              },
            });
            var _0x1fc38a = (_0x2ff30b.SerializableCipher = _0x66d550.extend({
              cfg: _0x66d550.extend({
                format: _0x3c378d,
              }),
              encrypt: function (_0x366fc0, _0x55be18, _0xcf6c5f, _0x54b042) {
                _0x54b042 = this.cfg.extend(_0x54b042);
                var _0x440cbc = _0x366fc0.createEncryptor(_0xcf6c5f, _0x54b042);
                _0x55be18 = _0x440cbc.finalize(_0x55be18);
                _0x440cbc = _0x440cbc.cfg;
                return _0x4a3350.create({
                  ciphertext: _0x55be18,
                  key: _0xcf6c5f,
                  iv: _0x440cbc.iv,
                  algorithm: _0x366fc0,
                  mode: _0x440cbc.mode,
                  padding: _0x440cbc.padding,
                  blockSize: _0x366fc0.blockSize,
                  formatter: _0x54b042.format,
                });
              },
              decrypt: function (_0x221250, _0x50d67d, _0x4185b2, _0xd10aca) {
                _0xd10aca = this.cfg.extend(_0xd10aca);
                _0x50d67d = this._parse(_0x50d67d, _0xd10aca.format);
                return _0x221250
                  .createDecryptor(_0x4185b2, _0xd10aca)
                  .finalize(_0x50d67d.ciphertext);
              },
              _parse: function (_0x27faa7, _0x233140) {
                return "string" == typeof _0x27faa7
                  ? _0x233140.parse(_0x27faa7, this)
                  : _0x27faa7;
              },
            }));
            _0x597512 = (_0x597512.kdf = {}).OpenSSL = {
              execute: function (_0x5800fa, _0x4e08d1, _0x39781e, _0x532ff7) {
                if (!_0x532ff7) {
                  _0x532ff7 = _0x3fd716.random(0x8);
                }
                _0x5800fa = _0x34885f
                  .create({
                    keySize: _0x4e08d1 + _0x39781e,
                  })
                  .compute(_0x5800fa, _0x532ff7);
                _0x39781e = _0x3fd716.create(
                  _0x5800fa.words.slice(_0x4e08d1),
                  0x4 * _0x39781e
                );
                _0x5800fa.sigBytes = 0x4 * _0x4e08d1;
                return _0x4a3350.create({
                  key: _0x5800fa,
                  iv: _0x39781e,
                  salt: _0x532ff7,
                });
              },
            };
            var _0x3d0106 = (_0x2ff30b.PasswordBasedCipher = _0x1fc38a.extend({
              cfg: _0x1fc38a.cfg.extend({
                kdf: _0x597512,
              }),
              encrypt: function (_0x867b21, _0x827ced, _0x32da63, _0x1ecb7a) {
                _0x1ecb7a = this.cfg.extend(_0x1ecb7a);
                _0x32da63 = _0x1ecb7a.kdf.execute(
                  _0x32da63,
                  _0x867b21.keySize,
                  _0x867b21.ivSize
                );
                _0x1ecb7a.iv = _0x32da63.iv;
                _0x867b21 = _0x1fc38a.encrypt.call(
                  this,
                  _0x867b21,
                  _0x827ced,
                  _0x32da63.key,
                  _0x1ecb7a
                );
                _0x867b21.mixIn(_0x32da63);
                return _0x867b21;
              },
              decrypt: function (_0x5a37fd, _0x3d7415, _0xdda89c, _0x29ab33) {
                _0x29ab33 = this.cfg.extend(_0x29ab33);
                _0x3d7415 = this._parse(_0x3d7415, _0x29ab33.format);
                _0xdda89c = _0x29ab33.kdf.execute(
                  _0xdda89c,
                  _0x5a37fd.keySize,
                  _0x5a37fd.ivSize,
                  _0x3d7415.salt
                );
                _0x29ab33.iv = _0xdda89c.iv;
                return _0x1fc38a.decrypt.call(
                  this,
                  _0x5a37fd,
                  _0x3d7415,
                  _0xdda89c.key,
                  _0x29ab33
                );
              },
            }));
          }
          _0x207652.exports = undefined;
          true;
        },
        function (_0x576d2a, _0x19d289, _0x2ef2df) {
          _0x19d289 = _0x2ef2df(0x5);
          _0x2ef2df(0xc);
          _0x2ef2df(0xd);
          _0x2ef2df(0xe);
          _0x2ef2df(0xf);
          var _0xbecda4 = function (_0x1829ea, _0x2a093c) {
            var _0x4496d2 =
              ((this._lBlock >>> _0x1829ea) ^ this._rBlock) & _0x2a093c;
            this._rBlock ^= _0x4496d2;
            this._lBlock ^= _0x4496d2 << _0x1829ea;
          };
          var _0x1fcd10 = function (_0x14c82f, _0x25d6c5) {
            var _0x1a14f3 =
              ((this._rBlock >>> _0x14c82f) ^ this._lBlock) & _0x25d6c5;
            this._lBlock ^= _0x1a14f3;
            this._rBlock ^= _0x1a14f3 << _0x14c82f;
          };
          _0x2ef2df = _0x19d289.lib;
          var _0x20e3ca = _0x2ef2df.WordArray;
          _0x2ef2df = _0x2ef2df.BlockCipher;
          var _0x2e89f8 = _0x19d289.algo;
          var _0x423832 = [
            0x39, 0x31, 0x29, 0x21, 0x19, 0x11, 0x9, 0x1, 0x3a, 0x32, 0x2a,
            0x22, 0x1a, 0x12, 0xa, 0x2, 0x3b, 0x33, 0x2b, 0x23, 0x1b, 0x13, 0xb,
            0x3, 0x3c, 0x34, 0x2c, 0x24, 0x3f, 0x37, 0x2f, 0x27, 0x1f, 0x17,
            0xf, 0x7, 0x3e, 0x36, 0x2e, 0x26, 0x1e, 0x16, 0xe, 0x6, 0x3d, 0x35,
            0x2d, 0x25, 0x1d, 0x15, 0xd, 0x5, 0x1c, 0x14, 0xc, 0x4,
          ];
          var _0x1a23d1 = [
            0xe, 0x11, 0xb, 0x18, 0x1, 0x5, 0x3, 0x1c, 0xf, 0x6, 0x15, 0xa,
            0x17, 0x13, 0xc, 0x4, 0x1a, 0x8, 0x10, 0x7, 0x1b, 0x14, 0xd, 0x2,
            0x29, 0x34, 0x1f, 0x25, 0x2f, 0x37, 0x1e, 0x28, 0x33, 0x2d, 0x21,
            0x30, 0x2c, 0x31, 0x27, 0x38, 0x22, 0x35, 0x2e, 0x2a, 0x32, 0x24,
            0x1d, 0x20,
          ];
          var _0xa0b90f = [
            0x1, 0x2, 0x4, 0x6, 0x8, 0xa, 0xc, 0xe, 0xf, 0x11, 0x13, 0x15, 0x17,
            0x19, 0x1b, 0x1c,
          ];
          var _0x5a1897 = [
            {
              0: 0x808200,
              0x10000000: 0x8000,
              0x20000000: 0x808002,
              0x30000000: 0x2,
              0x40000000: 0x200,
              0x50000000: 0x808202,
              0x60000000: 0x800202,
              0x70000000: 0x800000,
              0x80000000: 0x202,
              0x90000000: 0x800200,
              0xa0000000: 0x8200,
              0xb0000000: 0x808000,
              0xc0000000: 0x8002,
              0xd0000000: 0x800002,
              0xe0000000: 0x0,
              0xf0000000: 0x8202,
              0x8000000: 0x0,
              0x18000000: 0x808202,
              0x28000000: 0x8202,
              0x38000000: 0x8000,
              0x48000000: 0x808200,
              0x58000000: 0x200,
              0x68000000: 0x808002,
              0x78000000: 0x2,
              0x88000000: 0x800200,
              0x98000000: 0x8200,
              0xa8000000: 0x808000,
              0xb8000000: 0x800202,
              0xc8000000: 0x800002,
              0xd8000000: 0x8002,
              0xe8000000: 0x202,
              0xf8000000: 0x800000,
              0x1: 0x8000,
              0x10000001: 0x2,
              0x20000001: 0x808200,
              0x30000001: 0x800000,
              0x40000001: 0x808002,
              0x50000001: 0x8200,
              0x60000001: 0x200,
              0x70000001: 0x800202,
              0x80000001: 0x808202,
              0x90000001: 0x808000,
              0xa0000001: 0x800002,
              0xb0000001: 0x8202,
              0xc0000001: 0x202,
              0xd0000001: 0x800200,
              0xe0000001: 0x8002,
              0xf0000001: 0x0,
              0x8000001: 0x808202,
              0x18000001: 0x808000,
              0x28000001: 0x800000,
              0x38000001: 0x200,
              0x48000001: 0x8000,
              0x58000001: 0x800002,
              0x68000001: 0x2,
              0x78000001: 0x8202,
              0x88000001: 0x8002,
              0x98000001: 0x800202,
              0xa8000001: 0x202,
              0xb8000001: 0x808200,
              0xc8000001: 0x800200,
              0xd8000001: 0x0,
              0xe8000001: 0x8200,
              0xf8000001: 0x808002,
            },
            {
              0: 0x40084010,
              0x1000000: 0x4000,
              0x2000000: 0x80000,
              0x3000000: 0x40080010,
              0x4000000: 0x40000010,
              0x5000000: 0x40084000,
              0x6000000: 0x40004000,
              0x7000000: 0x10,
              0x8000000: 0x84000,
              0x9000000: 0x40004010,
              0xa000000: 0x40000000,
              0xb000000: 0x84010,
              0xc000000: 0x80010,
              0xd000000: 0x0,
              0xe000000: 0x4010,
              0xf000000: 0x40080000,
              0x800000: 0x40004000,
              0x1800000: 0x84010,
              0x2800000: 0x10,
              0x3800000: 0x40004010,
              0x4800000: 0x40084010,
              0x5800000: 0x40000000,
              0x6800000: 0x80000,
              0x7800000: 0x40080010,
              0x8800000: 0x80010,
              0x9800000: 0x0,
              0xa800000: 0x4000,
              0xb800000: 0x40080000,
              0xc800000: 0x40000010,
              0xd800000: 0x84000,
              0xe800000: 0x40084000,
              0xf800000: 0x4010,
              0x10000000: 0x0,
              0x11000000: 0x40080010,
              0x12000000: 0x40004010,
              0x13000000: 0x40084000,
              0x14000000: 0x40080000,
              0x15000000: 0x10,
              0x16000000: 0x84010,
              0x17000000: 0x4000,
              0x18000000: 0x4010,
              0x19000000: 0x80000,
              0x1a000000: 0x80010,
              0x1b000000: 0x40000010,
              0x1c000000: 0x84000,
              0x1d000000: 0x40004000,
              0x1e000000: 0x40000000,
              0x1f000000: 0x40084010,
              0x10800000: 0x84010,
              0x11800000: 0x80000,
              0x12800000: 0x40080000,
              0x13800000: 0x4000,
              0x14800000: 0x40004000,
              0x15800000: 0x40084010,
              0x16800000: 0x10,
              0x17800000: 0x40000000,
              0x18800000: 0x40084000,
              0x19800000: 0x40000010,
              0x1a800000: 0x40004010,
              0x1b800000: 0x80010,
              0x1c800000: 0x0,
              0x1d800000: 0x4010,
              0x1e800000: 0x40080010,
              0x1f800000: 0x84000,
            },
            {
              0: 0x104,
              0x100000: 0x0,
              0x200000: 0x4000100,
              0x300000: 0x10104,
              0x400000: 0x10004,
              0x500000: 0x4000004,
              0x600000: 0x4010104,
              0x700000: 0x4010000,
              0x800000: 0x4000000,
              0x900000: 0x4010100,
              0xa00000: 0x10100,
              0xb00000: 0x4010004,
              0xc00000: 0x4000104,
              0xd00000: 0x10000,
              0xe00000: 0x4,
              0xf00000: 0x100,
              0x80000: 0x4010100,
              0x180000: 0x4010004,
              0x280000: 0x0,
              0x380000: 0x4000100,
              0x480000: 0x4000004,
              0x580000: 0x10000,
              0x680000: 0x10004,
              0x780000: 0x104,
              0x880000: 0x4,
              0x980000: 0x100,
              0xa80000: 0x4010000,
              0xb80000: 0x10104,
              0xc80000: 0x10100,
              0xd80000: 0x4000104,
              0xe80000: 0x4010104,
              0xf80000: 0x4000000,
              0x1000000: 0x4010100,
              0x1100000: 0x10004,
              0x1200000: 0x10000,
              0x1300000: 0x4000100,
              0x1400000: 0x100,
              0x1500000: 0x4010104,
              0x1600000: 0x4000004,
              0x1700000: 0x0,
              0x1800000: 0x4000104,
              0x1900000: 0x4000000,
              0x1a00000: 0x4,
              0x1b00000: 0x10100,
              0x1c00000: 0x4010000,
              0x1d00000: 0x104,
              0x1e00000: 0x10104,
              0x1f00000: 0x4010004,
              0x1080000: 0x4000000,
              0x1180000: 0x104,
              0x1280000: 0x4010100,
              0x1380000: 0x0,
              0x1480000: 0x10004,
              0x1580000: 0x4000100,
              0x1680000: 0x100,
              0x1780000: 0x4010004,
              0x1880000: 0x10000,
              0x1980000: 0x4010104,
              0x1a80000: 0x10104,
              0x1b80000: 0x4000004,
              0x1c80000: 0x4000104,
              0x1d80000: 0x4010000,
              0x1e80000: 0x4,
              0x1f80000: 0x10100,
            },
            {
              0: 0x80401000,
              0x10000: 0x80001040,
              0x20000: 0x401040,
              0x30000: 0x80400000,
              0x40000: 0x0,
              0x50000: 0x401000,
              0x60000: 0x80000040,
              0x70000: 0x400040,
              0x80000: 0x80000000,
              0x90000: 0x400000,
              0xa0000: 0x40,
              0xb0000: 0x80001000,
              0xc0000: 0x80400040,
              0xd0000: 0x1040,
              0xe0000: 0x1000,
              0xf0000: 0x80401040,
              0x8000: 0x80001040,
              0x18000: 0x40,
              0x28000: 0x80400040,
              0x38000: 0x80001000,
              0x48000: 0x401000,
              0x58000: 0x80401040,
              0x68000: 0x0,
              0x78000: 0x80400000,
              0x88000: 0x1000,
              0x98000: 0x80401000,
              0xa8000: 0x400000,
              0xb8000: 0x1040,
              0xc8000: 0x80000000,
              0xd8000: 0x400040,
              0xe8000: 0x401040,
              0xf8000: 0x80000040,
              0x100000: 0x400040,
              0x110000: 0x401000,
              0x120000: 0x80000040,
              0x130000: 0x0,
              0x140000: 0x1040,
              0x150000: 0x80400040,
              0x160000: 0x80401000,
              0x170000: 0x80001040,
              0x180000: 0x80401040,
              0x190000: 0x80000000,
              0x1a0000: 0x80400000,
              0x1b0000: 0x401040,
              0x1c0000: 0x80001000,
              0x1d0000: 0x400000,
              0x1e0000: 0x40,
              0x1f0000: 0x1000,
              0x108000: 0x80400000,
              0x118000: 0x80401040,
              0x128000: 0x0,
              0x138000: 0x401000,
              0x148000: 0x400040,
              0x158000: 0x80000000,
              0x168000: 0x80001040,
              0x178000: 0x40,
              0x188000: 0x80000040,
              0x198000: 0x1000,
              0x1a8000: 0x80001000,
              0x1b8000: 0x80400040,
              0x1c8000: 0x1040,
              0x1d8000: 0x80401000,
              0x1e8000: 0x400000,
              0x1f8000: 0x401040,
            },
            {
              0: 0x80,
              0x1000: 0x1040000,
              0x2000: 0x40000,
              0x3000: 0x20000000,
              0x4000: 0x20040080,
              0x5000: 0x1000080,
              0x6000: 0x21000080,
              0x7000: 0x40080,
              0x8000: 0x1000000,
              0x9000: 0x20040000,
              0xa000: 0x20000080,
              0xb000: 0x21040080,
              0xc000: 0x21040000,
              0xd000: 0x0,
              0xe000: 0x1040080,
              0xf000: 0x21000000,
              0x800: 0x1040080,
              0x1800: 0x21000080,
              0x2800: 0x80,
              0x3800: 0x1040000,
              0x4800: 0x40000,
              0x5800: 0x20040080,
              0x6800: 0x21040000,
              0x7800: 0x20000000,
              0x8800: 0x20040000,
              0x9800: 0x0,
              0xa800: 0x21040080,
              0xb800: 0x1000080,
              0xc800: 0x20000080,
              0xd800: 0x21000000,
              0xe800: 0x1000000,
              0xf800: 0x40080,
              0x10000: 0x40000,
              0x11000: 0x80,
              0x12000: 0x20000000,
              0x13000: 0x21000080,
              0x14000: 0x1000080,
              0x15000: 0x21040000,
              0x16000: 0x20040080,
              0x17000: 0x1000000,
              0x18000: 0x21040080,
              0x19000: 0x21000000,
              0x1a000: 0x1040000,
              0x1b000: 0x20040000,
              0x1c000: 0x40080,
              0x1d000: 0x20000080,
              0x1e000: 0x0,
              0x1f000: 0x1040080,
              0x10800: 0x21000080,
              0x11800: 0x1000000,
              0x12800: 0x1040000,
              0x13800: 0x20040080,
              0x14800: 0x20000000,
              0x15800: 0x1040080,
              0x16800: 0x80,
              0x17800: 0x21040000,
              0x18800: 0x40080,
              0x19800: 0x21040080,
              0x1a800: 0x0,
              0x1b800: 0x21000000,
              0x1c800: 0x1000080,
              0x1d800: 0x40000,
              0x1e800: 0x20040000,
              0x1f800: 0x20000080,
            },
            {
              0: 0x10000008,
              0x100: 0x2000,
              0x200: 0x10200000,
              0x300: 0x10202008,
              0x400: 0x10002000,
              0x500: 0x200000,
              0x600: 0x200008,
              0x700: 0x10000000,
              0x800: 0x0,
              0x900: 0x10002008,
              0xa00: 0x202000,
              0xb00: 0x8,
              0xc00: 0x10200008,
              0xd00: 0x202008,
              0xe00: 0x2008,
              0xf00: 0x10202000,
              0x80: 0x10200000,
              0x180: 0x10202008,
              0x280: 0x8,
              0x380: 0x200000,
              0x480: 0x202008,
              0x580: 0x10000008,
              0x680: 0x10002000,
              0x780: 0x2008,
              0x880: 0x200008,
              0x980: 0x2000,
              0xa80: 0x10002008,
              0xb80: 0x10200008,
              0xc80: 0x0,
              0xd80: 0x10202000,
              0xe80: 0x202000,
              0xf80: 0x10000000,
              0x1000: 0x10002000,
              0x1100: 0x10200008,
              0x1200: 0x10202008,
              0x1300: 0x2008,
              0x1400: 0x200000,
              0x1500: 0x10000000,
              0x1600: 0x10000008,
              0x1700: 0x202000,
              0x1800: 0x202008,
              0x1900: 0x0,
              0x1a00: 0x8,
              0x1b00: 0x10200000,
              0x1c00: 0x2000,
              0x1d00: 0x10002008,
              0x1e00: 0x10202000,
              0x1f00: 0x200008,
              0x1080: 0x8,
              0x1180: 0x202000,
              0x1280: 0x200000,
              0x1380: 0x10000008,
              0x1480: 0x10002000,
              0x1580: 0x2008,
              0x1680: 0x10202008,
              0x1780: 0x10200000,
              0x1880: 0x10202000,
              0x1980: 0x10200008,
              0x1a80: 0x2000,
              0x1b80: 0x202008,
              0x1c80: 0x200008,
              0x1d80: 0x0,
              0x1e80: 0x10000000,
              0x1f80: 0x10002008,
            },
            {
              0: 0x100000,
              0x10: 0x2000401,
              0x20: 0x400,
              0x30: 0x100401,
              0x40: 0x2100401,
              0x50: 0x0,
              0x60: 0x1,
              0x70: 0x2100001,
              0x80: 0x2000400,
              0x90: 0x100001,
              0xa0: 0x2000001,
              0xb0: 0x2100400,
              0xc0: 0x2100000,
              0xd0: 0x401,
              0xe0: 0x100400,
              0xf0: 0x2000000,
              0x8: 0x2100001,
              0x18: 0x0,
              0x28: 0x2000401,
              0x38: 0x2100400,
              0x48: 0x100000,
              0x58: 0x2000001,
              0x68: 0x2000000,
              0x78: 0x401,
              0x88: 0x100401,
              0x98: 0x2000400,
              0xa8: 0x2100000,
              0xb8: 0x100001,
              0xc8: 0x400,
              0xd8: 0x2100401,
              0xe8: 0x1,
              0xf8: 0x100400,
              0x100: 0x2000000,
              0x110: 0x100000,
              0x120: 0x2000401,
              0x130: 0x2100001,
              0x140: 0x100001,
              0x150: 0x2000400,
              0x160: 0x2100400,
              0x170: 0x100401,
              0x180: 0x401,
              0x190: 0x2100401,
              0x1a0: 0x100400,
              0x1b0: 0x1,
              0x1c0: 0x0,
              0x1d0: 0x2100000,
              0x1e0: 0x2000001,
              0x1f0: 0x400,
              0x108: 0x100400,
              0x118: 0x2000401,
              0x128: 0x2100001,
              0x138: 0x1,
              0x148: 0x2000000,
              0x158: 0x100000,
              0x168: 0x401,
              0x178: 0x2100400,
              0x188: 0x2000001,
              0x198: 0x2100000,
              0x1a8: 0x0,
              0x1b8: 0x2100401,
              0x1c8: 0x100401,
              0x1d8: 0x400,
              0x1e8: 0x2000400,
              0x1f8: 0x100001,
            },
            {
              0: 0x8000820,
              0x1: 0x20000,
              0x2: 0x8000000,
              0x3: 0x20,
              0x4: 0x20020,
              0x5: 0x8020820,
              0x6: 0x8020800,
              0x7: 0x800,
              0x8: 0x8020000,
              0x9: 0x8000800,
              0xa: 0x20800,
              0xb: 0x8020020,
              0xc: 0x820,
              0xd: 0x0,
              0xe: 0x8000020,
              0xf: 0x20820,
              0x80000000: 0x800,
              0x80000001: 0x8020820,
              0x80000002: 0x8000820,
              0x80000003: 0x8000000,
              0x80000004: 0x8020000,
              0x80000005: 0x20800,
              0x80000006: 0x20820,
              0x80000007: 0x20,
              0x80000008: 0x8000020,
              0x80000009: 0x820,
              0x8000000a: 0x20020,
              0x8000000b: 0x8020800,
              0x8000000c: 0x0,
              0x8000000d: 0x8020020,
              0x8000000e: 0x8000800,
              0x8000000f: 0x20000,
              0x10: 0x20820,
              0x11: 0x8020800,
              0x12: 0x20,
              0x13: 0x800,
              0x14: 0x8000800,
              0x15: 0x8000020,
              0x16: 0x8020020,
              0x17: 0x20000,
              0x18: 0x0,
              0x19: 0x20020,
              0x1a: 0x8020000,
              0x1b: 0x8000820,
              0x1c: 0x8020820,
              0x1d: 0x20800,
              0x1e: 0x820,
              0x1f: 0x8000000,
              0x80000010: 0x20000,
              0x80000011: 0x800,
              0x80000012: 0x8020020,
              0x80000013: 0x20820,
              0x80000014: 0x20,
              0x80000015: 0x8020000,
              0x80000016: 0x8000000,
              0x80000017: 0x8000820,
              0x80000018: 0x8020820,
              0x80000019: 0x8000020,
              0x8000001a: 0x8000800,
              0x8000001b: 0x0,
              0x8000001c: 0x20800,
              0x8000001d: 0x820,
              0x8000001e: 0x20020,
              0x8000001f: 0x8020800,
            },
          ];
          var _0x34f950 = [
            0xf8000001, 0x1f800000, 0x1f80000, 0x1f8000, 0x1f800, 0x1f80, 0x1f8,
            0x8000001f,
          ];
          var _0x135c39 = (_0x2e89f8.DES = _0x2ef2df.extend({
            _doReset: function () {
              var _0x29c264 = this._key.words;
              var _0x2af5a9 = [];
              for (var _0xdad0fa = 0x0; 0x38 > _0xdad0fa; _0xdad0fa++) {
                var _0x2c670b = _0x423832[_0xdad0fa] - 0x1;
                _0x2af5a9[_0xdad0fa] =
                  (_0x29c264[_0x2c670b >>> 0x5] >>>
                    (0x1f - (_0x2c670b % 0x20))) &
                  0x1;
              }
              _0x29c264 = this._subKeys = [];
              for (_0x2c670b = 0x0; 0x10 > _0x2c670b; _0x2c670b++) {
                var _0xf44e9 = (_0x29c264[_0x2c670b] = []);
                var _0x29a7dc = _0xa0b90f[_0x2c670b];
                for (var _0xdad0fa = 0x0; 0x18 > _0xdad0fa; _0xdad0fa++) {
                  _0xf44e9[(_0xdad0fa / 0x6) | 0x0] |=
                    _0x2af5a9[
                      (_0x1a23d1[_0xdad0fa] - 0x1 + _0x29a7dc) % 0x1c
                    ] <<
                    (0x1f - (_0xdad0fa % 0x6));
                  _0xf44e9[0x4 + ((_0xdad0fa / 0x6) | 0x0)] |=
                    _0x2af5a9[
                      0x1c +
                        ((_0x1a23d1[_0xdad0fa + 0x18] - 0x1 + _0x29a7dc) % 0x1c)
                    ] <<
                    (0x1f - (_0xdad0fa % 0x6));
                }
                _0xf44e9[0x0] =
                  (_0xf44e9[0x0] << 0x1) | (_0xf44e9[0x0] >>> 0x1f);
                for (_0xdad0fa = 0x1; 0x7 > _0xdad0fa; _0xdad0fa++) {
                  _0xf44e9[_0xdad0fa] >>>= 0x4 * (_0xdad0fa - 0x1) + 0x3;
                }
                _0xf44e9[0x7] =
                  (_0xf44e9[0x7] << 0x5) | (_0xf44e9[0x7] >>> 0x1b);
              }
              _0x2af5a9 = this._invSubKeys = [];
              for (_0xdad0fa = 0x0; 0x10 > _0xdad0fa; _0xdad0fa++) {
                _0x2af5a9[_0xdad0fa] = _0x29c264[0xf - _0xdad0fa];
              }
            },
            encryptBlock: function (_0xbb1341, _0x3acdf3) {
              this._doCryptBlock(_0xbb1341, _0x3acdf3, this._subKeys);
            },
            decryptBlock: function (_0x5747bb, _0x42f412) {
              this._doCryptBlock(_0x5747bb, _0x42f412, this._invSubKeys);
            },
            _doCryptBlock: function (_0x43e4b4, _0x2c1f24, _0x3c72a4) {
              this._lBlock = _0x43e4b4[_0x2c1f24];
              this._rBlock = _0x43e4b4[_0x2c1f24 + 0x1];
              _0xbecda4.call(this, 0x4, 0xf0f0f0f);
              _0xbecda4.call(this, 0x10, 0xffff);
              _0x1fcd10.call(this, 0x2, 0x33333333);
              _0x1fcd10.call(this, 0x8, 0xff00ff);
              _0xbecda4.call(this, 0x1, 0x55555555);
              for (var _0x286b60 = 0x0; 0x10 > _0x286b60; _0x286b60++) {
                var _0x39a5cb = _0x3c72a4[_0x286b60];
                var _0x2bcb5d = this._lBlock;
                var _0xca1295 = this._rBlock;
                var _0x24a72c = 0x0;
                for (var _0x43125f = 0x0; 0x8 > _0x43125f; _0x43125f++) {
                  _0x24a72c |=
                    _0x5a1897[_0x43125f][
                      ((_0xca1295 ^ _0x39a5cb[_0x43125f]) &
                        _0x34f950[_0x43125f]) >>>
                        0x0
                    ];
                }
                this._lBlock = _0xca1295;
                this._rBlock = _0x2bcb5d ^ _0x24a72c;
              }
              _0x3c72a4 = this._lBlock;
              this._lBlock = this._rBlock;
              this._rBlock = _0x3c72a4;
              _0xbecda4.call(this, 0x1, 0x55555555);
              _0x1fcd10.call(this, 0x8, 0xff00ff);
              _0x1fcd10.call(this, 0x2, 0x33333333);
              _0xbecda4.call(this, 0x10, 0xffff);
              _0xbecda4.call(this, 0x4, 0xf0f0f0f);
              _0x43e4b4[_0x2c1f24] = this._lBlock;
              _0x43e4b4[_0x2c1f24 + 0x1] = this._rBlock;
            },
            keySize: 0x2,
            ivSize: 0x2,
            blockSize: 0x2,
          }));
          _0x19d289.DES = _0x2ef2df._createHelper(_0x135c39);
          _0x2e89f8 = _0x2e89f8.TripleDES = _0x2ef2df.extend({
            _doReset: function () {
              var _0x10c1fa = this._key.words;
              this._des1 = _0x135c39.createEncryptor(
                _0x20e3ca.create(_0x10c1fa.slice(0x0, 0x2))
              );
              this._des2 = _0x135c39.createEncryptor(
                _0x20e3ca.create(_0x10c1fa.slice(0x2, 0x4))
              );
              this._des3 = _0x135c39.createEncryptor(
                _0x20e3ca.create(_0x10c1fa.slice(0x4, 0x6))
              );
            },
            encryptBlock: function (_0x19f9f4, _0x2afe3d) {
              this._des1.encryptBlock(_0x19f9f4, _0x2afe3d);
              this._des2.decryptBlock(_0x19f9f4, _0x2afe3d);
              this._des3.encryptBlock(_0x19f9f4, _0x2afe3d);
            },
            decryptBlock: function (_0xd0b655, _0x191301) {
              this._des3.decryptBlock(_0xd0b655, _0x191301);
              this._des2.encryptBlock(_0xd0b655, _0x191301);
              this._des1.decryptBlock(_0xd0b655, _0x191301);
            },
            keySize: 0x6,
            ivSize: 0x2,
            blockSize: 0x2,
          });
          _0x19d289.TripleDES = _0x2ef2df._createHelper(_0x2e89f8);
          _0x576d2a.exports = _0x19d289.TripleDES;
          true;
        },
        function (_0x1a8804, _0x3ff428, _0x3d7e17) {
          _0x3ff428 = _0x3d7e17(0x5);
          _0x3d7e17(0xc);
          _0x3d7e17(0xd);
          _0x3d7e17(0xe);
          _0x3d7e17(0xf);
          var _0x584c91 = function () {
            var _0x542c09 = this._X;
            var _0x54d025 = this._C;
            for (var _0x3a4a1f = 0x0; 0x8 > _0x3a4a1f; _0x3a4a1f++) {
              _0xe50221[_0x3a4a1f] = _0x54d025[_0x3a4a1f];
            }
            _0x54d025[0x0] = (_0x54d025[0x0] + 0x4d34d34d + this._b) | 0x0;
            _0x54d025[0x1] =
              (_0x54d025[0x1] +
                0xd34d34d3 +
                (_0x54d025[0x0] >>> 0x0 < _0xe50221[0x0] >>> 0x0 ? 0x1 : 0x0)) |
              0x0;
            _0x54d025[0x2] =
              (_0x54d025[0x2] +
                0x34d34d34 +
                (_0x54d025[0x1] >>> 0x0 < _0xe50221[0x1] >>> 0x0 ? 0x1 : 0x0)) |
              0x0;
            _0x54d025[0x3] =
              (_0x54d025[0x3] +
                0x4d34d34d +
                (_0x54d025[0x2] >>> 0x0 < _0xe50221[0x2] >>> 0x0 ? 0x1 : 0x0)) |
              0x0;
            _0x54d025[0x4] =
              (_0x54d025[0x4] +
                0xd34d34d3 +
                (_0x54d025[0x3] >>> 0x0 < _0xe50221[0x3] >>> 0x0 ? 0x1 : 0x0)) |
              0x0;
            _0x54d025[0x5] =
              (_0x54d025[0x5] +
                0x34d34d34 +
                (_0x54d025[0x4] >>> 0x0 < _0xe50221[0x4] >>> 0x0 ? 0x1 : 0x0)) |
              0x0;
            _0x54d025[0x6] =
              (_0x54d025[0x6] +
                0x4d34d34d +
                (_0x54d025[0x5] >>> 0x0 < _0xe50221[0x5] >>> 0x0 ? 0x1 : 0x0)) |
              0x0;
            _0x54d025[0x7] =
              (_0x54d025[0x7] +
                0xd34d34d3 +
                (_0x54d025[0x6] >>> 0x0 < _0xe50221[0x6] >>> 0x0 ? 0x1 : 0x0)) |
              0x0;
            this._b =
              _0x54d025[0x7] >>> 0x0 < _0xe50221[0x7] >>> 0x0 ? 0x1 : 0x0;
            for (_0x3a4a1f = 0x0; 0x8 > _0x3a4a1f; _0x3a4a1f++) {
              var _0x34dc7d = _0x542c09[_0x3a4a1f] + _0x54d025[_0x3a4a1f];
              var _0x4e545b = 0xffff & _0x34dc7d;
              var _0x549596 = _0x34dc7d >>> 0x10;
              _0x37a586[_0x3a4a1f] =
                (((((_0x4e545b * _0x4e545b) >>> 0x11) +
                  _0x4e545b * _0x549596) >>>
                  0xf) +
                  _0x549596 * _0x549596) ^
                ((((0xffff0000 & _0x34dc7d) * _0x34dc7d) | 0x0) +
                  (((0xffff & _0x34dc7d) * _0x34dc7d) | 0x0));
            }
            _0x542c09[0x0] =
              (_0x37a586[0x0] +
                ((_0x37a586[0x7] << 0x10) | (_0x37a586[0x7] >>> 0x10)) +
                ((_0x37a586[0x6] << 0x10) | (_0x37a586[0x6] >>> 0x10))) |
              0x0;
            _0x542c09[0x1] =
              (_0x37a586[0x1] +
                ((_0x37a586[0x0] << 0x8) | (_0x37a586[0x0] >>> 0x18)) +
                _0x37a586[0x7]) |
              0x0;
            _0x542c09[0x2] =
              (_0x37a586[0x2] +
                ((_0x37a586[0x1] << 0x10) | (_0x37a586[0x1] >>> 0x10)) +
                ((_0x37a586[0x0] << 0x10) | (_0x37a586[0x0] >>> 0x10))) |
              0x0;
            _0x542c09[0x3] =
              (_0x37a586[0x3] +
                ((_0x37a586[0x2] << 0x8) | (_0x37a586[0x2] >>> 0x18)) +
                _0x37a586[0x1]) |
              0x0;
            _0x542c09[0x4] =
              (_0x37a586[0x4] +
                ((_0x37a586[0x3] << 0x10) | (_0x37a586[0x3] >>> 0x10)) +
                ((_0x37a586[0x2] << 0x10) | (_0x37a586[0x2] >>> 0x10))) |
              0x0;
            _0x542c09[0x5] =
              (_0x37a586[0x5] +
                ((_0x37a586[0x4] << 0x8) | (_0x37a586[0x4] >>> 0x18)) +
                _0x37a586[0x3]) |
              0x0;
            _0x542c09[0x6] =
              (_0x37a586[0x6] +
                ((_0x37a586[0x5] << 0x10) | (_0x37a586[0x5] >>> 0x10)) +
                ((_0x37a586[0x4] << 0x10) | (_0x37a586[0x4] >>> 0x10))) |
              0x0;
            _0x542c09[0x7] =
              (_0x37a586[0x7] +
                ((_0x37a586[0x6] << 0x8) | (_0x37a586[0x6] >>> 0x18)) +
                _0x37a586[0x5]) |
              0x0;
          };
          _0x3d7e17 = _0x3ff428.lib.StreamCipher;
          var _0x16945c = [];
          var _0xe50221 = [];
          var _0x37a586 = [];
          var _0x1f48b8 = (_0x3ff428.algo.Rabbit = _0x3d7e17.extend({
            _doReset: function () {
              var _0x22819c = this._key.words;
              var _0x35840a = this.cfg.iv;
              for (var _0x489853 = 0x0; 0x4 > _0x489853; _0x489853++) {
                _0x22819c[_0x489853] =
                  (0xff00ff &
                    ((_0x22819c[_0x489853] << 0x8) |
                      (_0x22819c[_0x489853] >>> 0x18))) |
                  (0xff00ff00 &
                    ((_0x22819c[_0x489853] << 0x18) |
                      (_0x22819c[_0x489853] >>> 0x8)));
              }
              var _0x7887ac = (this._X = [
                _0x22819c[0x0],
                (_0x22819c[0x3] << 0x10) | (_0x22819c[0x2] >>> 0x10),
                _0x22819c[0x1],
                (_0x22819c[0x0] << 0x10) | (_0x22819c[0x3] >>> 0x10),
                _0x22819c[0x2],
                (_0x22819c[0x1] << 0x10) | (_0x22819c[0x0] >>> 0x10),
                _0x22819c[0x3],
                (_0x22819c[0x2] << 0x10) | (_0x22819c[0x1] >>> 0x10),
              ]);
              var _0x22819c = (this._C = [
                (_0x22819c[0x2] << 0x10) | (_0x22819c[0x2] >>> 0x10),
                (0xffff0000 & _0x22819c[0x0]) | (0xffff & _0x22819c[0x1]),
                (_0x22819c[0x3] << 0x10) | (_0x22819c[0x3] >>> 0x10),
                (0xffff0000 & _0x22819c[0x1]) | (0xffff & _0x22819c[0x2]),
                (_0x22819c[0x0] << 0x10) | (_0x22819c[0x0] >>> 0x10),
                (0xffff0000 & _0x22819c[0x2]) | (0xffff & _0x22819c[0x3]),
                (_0x22819c[0x1] << 0x10) | (_0x22819c[0x1] >>> 0x10),
                (0xffff0000 & _0x22819c[0x3]) | (0xffff & _0x22819c[0x0]),
              ]);
              for (
                var _0x489853 = (this._b = 0x0);
                0x4 > _0x489853;
                _0x489853++
              ) {
                _0x584c91.call(this);
              }
              for (_0x489853 = 0x0; 0x8 > _0x489853; _0x489853++) {
                _0x22819c[_0x489853] ^= _0x7887ac[(_0x489853 + 0x4) & 0x7];
              }
              if (_0x35840a) {
                var _0x489853 = _0x35840a.words;
                var _0x35840a = _0x489853[0x0];
                var _0x489853 = _0x489853[0x1];
                var _0x35840a =
                  (0xff00ff & ((_0x35840a << 0x8) | (_0x35840a >>> 0x18))) |
                  (0xff00ff00 & ((_0x35840a << 0x18) | (_0x35840a >>> 0x8)));
                var _0x489853 =
                  (0xff00ff & ((_0x489853 << 0x8) | (_0x489853 >>> 0x18))) |
                  (0xff00ff00 & ((_0x489853 << 0x18) | (_0x489853 >>> 0x8)));
                var _0x7887ac = (_0x35840a >>> 0x10) | (0xffff0000 & _0x489853);
                var _0x649c76 = (_0x489853 << 0x10) | (0xffff & _0x35840a);
                _0x22819c[0x0] ^= _0x35840a;
                _0x22819c[0x1] ^= _0x7887ac;
                _0x22819c[0x2] ^= _0x489853;
                _0x22819c[0x3] ^= _0x649c76;
                _0x22819c[0x4] ^= _0x35840a;
                _0x22819c[0x5] ^= _0x7887ac;
                _0x22819c[0x6] ^= _0x489853;
                _0x22819c[0x7] ^= _0x649c76;
                for (_0x489853 = 0x0; 0x4 > _0x489853; _0x489853++) {
                  _0x584c91.call(this);
                }
              }
            },
            _doProcessBlock: function (_0x1aded4, _0x1c1452) {
              var _0x47b0b2 = this._X;
              _0x584c91.call(this);
              _0x16945c[0x0] =
                _0x47b0b2[0x0] ^
                (_0x47b0b2[0x5] >>> 0x10) ^
                (_0x47b0b2[0x3] << 0x10);
              _0x16945c[0x1] =
                _0x47b0b2[0x2] ^
                (_0x47b0b2[0x7] >>> 0x10) ^
                (_0x47b0b2[0x5] << 0x10);
              _0x16945c[0x2] =
                _0x47b0b2[0x4] ^
                (_0x47b0b2[0x1] >>> 0x10) ^
                (_0x47b0b2[0x7] << 0x10);
              _0x16945c[0x3] =
                _0x47b0b2[0x6] ^
                (_0x47b0b2[0x3] >>> 0x10) ^
                (_0x47b0b2[0x1] << 0x10);
              for (_0x47b0b2 = 0x0; 0x4 > _0x47b0b2; _0x47b0b2++) {
                _0x16945c[_0x47b0b2] =
                  (0xff00ff &
                    ((_0x16945c[_0x47b0b2] << 0x8) |
                      (_0x16945c[_0x47b0b2] >>> 0x18))) |
                  (0xff00ff00 &
                    ((_0x16945c[_0x47b0b2] << 0x18) |
                      (_0x16945c[_0x47b0b2] >>> 0x8)));
                _0x1aded4[_0x1c1452 + _0x47b0b2] ^= _0x16945c[_0x47b0b2];
              }
            },
            blockSize: 0x4,
            ivSize: 0x2,
          }));
          _0x3ff428.Rabbit = _0x3d7e17._createHelper(_0x1f48b8);
          _0x1a8804.exports = _0x3ff428.Rabbit;
          true;
        },
        function (_0x56e0b9, _0x5d8166, _0xc8a204) {
          _0x5d8166 = _0xc8a204(0x5);
          _0xc8a204(0xc);
          _0xc8a204(0xd);
          _0xc8a204(0xe);
          _0xc8a204(0xf);
          var _0x5f046e = function () {
            var _0x401721 = this._S;
            var _0x4123f7 = this._i;
            var _0x29937f = this._j;
            var _0xefce01 = 0x0;
            for (var _0x1ce9e1 = 0x0; 0x4 > _0x1ce9e1; _0x1ce9e1++) {
              var _0x4123f7 = (_0x4123f7 + 0x1) % 0x100;
              var _0x29937f = (_0x29937f + _0x401721[_0x4123f7]) % 0x100;
              var _0x51c805 = _0x401721[_0x4123f7];
              _0x401721[_0x4123f7] = _0x401721[_0x29937f];
              _0x401721[_0x29937f] = _0x51c805;
              _0xefce01 |=
                _0x401721[
                  (_0x401721[_0x4123f7] + _0x401721[_0x29937f]) % 0x100
                ] <<
                (0x18 - 0x8 * _0x1ce9e1);
            }
            this._i = _0x4123f7;
            this._j = _0x29937f;
            return _0xefce01;
          };
          _0xc8a204 = _0x5d8166.lib.StreamCipher;
          var _0x2428d0 = _0x5d8166.algo;
          var _0x17be94 = (_0x2428d0.RC4 = _0xc8a204.extend({
            _doReset: function () {
              var _0x5145bc = this._key;
              var _0x5401ba = _0x5145bc.words;
              var _0x5145bc = _0x5145bc.sigBytes;
              var _0x39322f = (this._S = []);
              for (var _0x453891 = 0x0; 0x100 > _0x453891; _0x453891++) {
                _0x39322f[_0x453891] = _0x453891;
              }
              for (
                var _0x33ce02 = (_0x453891 = 0x0);
                0x100 > _0x453891;
                _0x453891++
              ) {
                var _0x4d476a = _0x453891 % _0x5145bc;
                var _0x33ce02 =
                  (_0x33ce02 +
                    _0x39322f[_0x453891] +
                    ((_0x5401ba[_0x4d476a >>> 0x2] >>>
                      (0x18 - 0x8 * (_0x4d476a % 0x4))) &
                      0xff)) %
                  0x100;
                var _0x4d476a = _0x39322f[_0x453891];
                _0x39322f[_0x453891] = _0x39322f[_0x33ce02];
                _0x39322f[_0x33ce02] = _0x4d476a;
              }
              this._i = this._j = 0x0;
            },
            _doProcessBlock: function (_0x4f5c55, _0x2eec58) {
              _0x4f5c55[_0x2eec58] ^= _0x5f046e.call(this);
            },
            keySize: 0x8,
            ivSize: 0x0,
          }));
          _0x5d8166.RC4 = _0xc8a204._createHelper(_0x17be94);
          _0x2428d0 = _0x2428d0.RC4Drop = _0x17be94.extend({
            cfg: _0x17be94.cfg.extend({
              drop: 0xc0,
            }),
            _doReset: function () {
              _0x17be94._doReset.call(this);
              for (
                var _0x28bf02 = this.cfg.drop;
                0x0 < _0x28bf02;
                _0x28bf02--
              ) {
                _0x5f046e.call(this);
              }
            },
          });
          _0x5d8166.RC4Drop = _0xc8a204._createHelper(_0x2428d0);
          _0x56e0b9.exports = _0x5d8166.RC4;
          true;
        },
      ];
      var _0x4cefa7 = function (_0x5258d9) {
        if (_0x288c9d[_0x5258d9]) {
          return _0x288c9d[_0x5258d9].exports;
        }
        var _0x20f5de = (_0x288c9d[_0x5258d9] = {
          exports: {},
          id: _0x5258d9,
          loaded: false,
        });
        _0x30d72f[_0x5258d9].call(
          _0x20f5de.exports,
          _0x20f5de,
          _0x20f5de.exports,
          _0x4cefa7
        );
        _0x20f5de.loaded = true;
        return _0x20f5de.exports;
      };
      var _0x288c9d = {};
      _0x4cefa7.m = _0x30d72f;
      _0x4cefa7.c = _0x288c9d;
      _0x4cefa7.p = "";
      return _0x4cefa7(0x0);
    };
    if ("object" == typeof exports && "object" == typeof module) {
      module.exports = _0x3f66c4();
    } else if ("function" == typeof define && define.amd) {
      define("SecureLS", [], _0x3f66c4);
    } else if ("object" == typeof exports) {
      exports.SecureLS = _0x3f66c4();
    } else {
      this.SecureLS = _0x3f66c4();
    }
    true;
  })();
  if (null !== SecureLS && "undefined" !== typeof SecureLS) {
    ig.global.SecureLS = SecureLS;
    ig.SecureLS = SecureLS;
  }
});
ig.baked = true;
ig.module("plugins.io.storage-manager")
  .requires("impact.game", "plugins.io.io-manager", "plugins.secure-ls")
  .defines(function () {
    ig.secure = new SecureLS({
      encodingType: "aes",
    });
    ig.Game.prototype.name = "MJS-Game";
    ig.Game.prototype.version = "1.0.0";
    ig.Game.prototype.sessionData = {};
    ig.Game.prototype.hash = function (_0x1e2a67) {
      var _0x3e8c52 = 0x0;
      var _0x144030;
      var _0x579d9b;
      if (0x0 === _0x1e2a67.length) {
        return _0x3e8c52;
      }
      for (_0x144030 = 0x0; _0x144030 < _0x1e2a67.length; _0x144030++) {
        _0x579d9b = _0x1e2a67.charCodeAt(_0x144030);
        _0x3e8c52 = (_0x3e8c52 << 0x5) - _0x3e8c52 + _0x579d9b;
        _0x3e8c52 |= 0x0;
      }
      return _0x3e8c52.toString(0x24);
    };
    ig.Game.prototype.initData = function () {
      return (this.sessionData = {
        sfx: 0x1,
        bgm: 0x1,
        level: 0x1,
        score: 0x0,
      });
    };
    ig.Game.prototype.setupStorageManager = function () {
      if (
        "undefined" !== typeof this.name &&
        "undefined" !== typeof this.version
      ) {
        if (!this.io) {
          this.io = new IoManager();
        }
        this.storage = this.io.storage;
        this.storageName = this.hash(this.name + "-v" + this.version).replace(
          "-",
          "s"
        );
        this.loadAll();
      }
    };
    ig.Game.prototype.loadAll = function () {
      var _0x432f81 = ig.secure.get(this.storageName);
      if ("" == _0x432f81) {
        this.initData();
        this.saveAll();
      } else {
        this.sessionData = JSON.parse(_0x432f81);
      }
    };
    ig.Game.prototype.saveAll = function () {
      ig.secure.set(this.storageName, JSON.stringify(this.sessionData));
    };
    ig.Game.prototype.load = function (_0x18d904) {
      return this.sessionData[_0x18d904];
    };
    ig.Game.prototype.save = function (_0x4d55bd, _0x27ba72) {
      this.sessionData[_0x4d55bd] = _0x27ba72;
      this.saveAll();
    };
  });
ig.baked = true;
ig.module("babylon.tween").defines(function () {
  var _0x24e955 = this;
  var _0x48692d = function (_0x512557) {
    var _0x26a494 = Object.freeze({
      Linear: Object.freeze({
        None: function (_0x3ff0c7) {
          return _0x3ff0c7;
        },
        In: function (_0x226974) {
          return this.None(_0x226974);
        },
        Out: function (_0x47d8dd) {
          return this.None(_0x47d8dd);
        },
        InOut: function (_0x49e864) {
          return this.None(_0x49e864);
        },
      }),
      Quadratic: Object.freeze({
        In: function (_0x39c953) {
          return _0x39c953 * _0x39c953;
        },
        Out: function (_0x3d0ff0) {
          return _0x3d0ff0 * (0x2 - _0x3d0ff0);
        },
        InOut: function (_0x10fe64) {
          return 0x1 > (_0x10fe64 *= 0x2)
            ? 0.5 * _0x10fe64 * _0x10fe64
            : -0.5 * (--_0x10fe64 * (_0x10fe64 - 0x2) - 0x1);
        },
      }),
      Cubic: Object.freeze({
        In: function (_0x23d139) {
          return _0x23d139 * _0x23d139 * _0x23d139;
        },
        Out: function (_0x503d1e) {
          return --_0x503d1e * _0x503d1e * _0x503d1e + 0x1;
        },
        InOut: function (_0x4433aa) {
          return 0x1 > (_0x4433aa *= 0x2)
            ? 0.5 * _0x4433aa * _0x4433aa * _0x4433aa
            : 0.5 * ((_0x4433aa -= 0x2) * _0x4433aa * _0x4433aa + 0x2);
        },
      }),
      Quartic: Object.freeze({
        In: function (_0x52192d) {
          return _0x52192d * _0x52192d * _0x52192d * _0x52192d;
        },
        Out: function (_0xe7e737) {
          return 0x1 - --_0xe7e737 * _0xe7e737 * _0xe7e737 * _0xe7e737;
        },
        InOut: function (_0x250d76) {
          return 0x1 > (_0x250d76 *= 0x2)
            ? 0.5 * _0x250d76 * _0x250d76 * _0x250d76 * _0x250d76
            : -0.5 *
                ((_0x250d76 -= 0x2) * _0x250d76 * _0x250d76 * _0x250d76 - 0x2);
        },
      }),
      Quintic: Object.freeze({
        In: function (_0x346594) {
          return _0x346594 * _0x346594 * _0x346594 * _0x346594 * _0x346594;
        },
        Out: function (_0x3bb0c3) {
          return (
            --_0x3bb0c3 * _0x3bb0c3 * _0x3bb0c3 * _0x3bb0c3 * _0x3bb0c3 + 0x1
          );
        },
        InOut: function (_0x4a9c15) {
          return 0x1 > (_0x4a9c15 *= 0x2)
            ? 0.5 * _0x4a9c15 * _0x4a9c15 * _0x4a9c15 * _0x4a9c15 * _0x4a9c15
            : 0.5 *
                ((_0x4a9c15 -= 0x2) *
                  _0x4a9c15 *
                  _0x4a9c15 *
                  _0x4a9c15 *
                  _0x4a9c15 +
                  0x2);
        },
      }),
      Sinusoidal: Object.freeze({
        In: function (_0xef9f85) {
          return 0x1 - Math.sin(((0x1 - _0xef9f85) * Math.PI) / 0x2);
        },
        Out: function (_0x48ee08) {
          return Math.sin((_0x48ee08 * Math.PI) / 0x2);
        },
        InOut: function (_0x9d8e5e) {
          return 0.5 * (0x1 - Math.sin(Math.PI * (0.5 - _0x9d8e5e)));
        },
      }),
      Exponential: Object.freeze({
        In: function (_0x18c701) {
          return 0x0 === _0x18c701 ? 0x0 : Math.pow(0x400, _0x18c701 - 0x1);
        },
        Out: function (_0x344bae) {
          return 0x1 === _0x344bae
            ? 0x1
            : 0x1 - Math.pow(0x2, -0xa * _0x344bae);
        },
        InOut: function (_0x519a76) {
          return 0x0 === _0x519a76
            ? 0x0
            : 0x1 === _0x519a76
            ? 0x1
            : 0x1 > (_0x519a76 *= 0x2)
            ? 0.5 * Math.pow(0x400, _0x519a76 - 0x1)
            : 0.5 * (-Math.pow(0x2, -0xa * (_0x519a76 - 0x1)) + 0x2);
        },
      }),
      Elastic: Object.freeze({
        In: function (_0x3e8d10) {
          return 0x0 === _0x3e8d10
            ? 0x0
            : 0x1 === _0x3e8d10
            ? 0x1
            : -Math.pow(0x2, 0xa * (_0x3e8d10 - 0x1)) *
              Math.sin(0x5 * (_0x3e8d10 - 1.1) * Math.PI);
        },
        Out: function (_0x4c201f) {
          return 0x0 === _0x4c201f
            ? 0x0
            : 0x1 === _0x4c201f
            ? 0x1
            : Math.pow(0x2, -0xa * _0x4c201f) *
                Math.sin(0x5 * (_0x4c201f - 0.1) * Math.PI) +
              0x1;
        },
        InOut: function (_0x21f237) {
          if (0x0 === _0x21f237) {
            return 0x0;
          }
          if (0x1 === _0x21f237) {
            return 0x1;
          }
          _0x21f237 *= 0x2;
          return 0x1 > _0x21f237
            ? -0.5 *
                Math.pow(0x2, 0xa * (_0x21f237 - 0x1)) *
                Math.sin(0x5 * (_0x21f237 - 1.1) * Math.PI)
            : 0.5 *
                Math.pow(0x2, -0xa * (_0x21f237 - 0x1)) *
                Math.sin(0x5 * (_0x21f237 - 1.1) * Math.PI) +
                0x1;
        },
      }),
      Back: Object.freeze({
        In: function (_0x5761fb) {
          return 0x1 === _0x5761fb
            ? 0x1
            : _0x5761fb * _0x5761fb * (2.70158 * _0x5761fb - 1.70158);
        },
        Out: function (_0x253791) {
          return 0x0 === _0x253791
            ? 0x0
            : --_0x253791 * _0x253791 * (2.70158 * _0x253791 + 1.70158) + 0x1;
        },
        InOut: function (_0x2f5ba6) {
          return 0x1 > (_0x2f5ba6 *= 0x2)
            ? 0.5 * _0x2f5ba6 * _0x2f5ba6 * (3.5949095 * _0x2f5ba6 - 2.5949095)
            : 0.5 *
                ((_0x2f5ba6 -= 0x2) *
                  _0x2f5ba6 *
                  (3.5949095 * _0x2f5ba6 + 2.5949095) +
                  0x2);
        },
      }),
      Bounce: Object.freeze({
        In: function (_0x5c8139) {
          return 0x1 - _0x26a494.Bounce.Out(0x1 - _0x5c8139);
        },
        Out: function (_0x205acf) {
          return _0x205acf < 0.36363636363636365
            ? 7.5625 * _0x205acf * _0x205acf
            : _0x205acf < 0.7272727272727273
            ? 7.5625 * (_0x205acf -= 0.5454545454545454) * _0x205acf + 0.75
            : _0x205acf < 0.9090909090909091
            ? 7.5625 * (_0x205acf -= 0.8181818181818182) * _0x205acf + 0.9375
            : 7.5625 * (_0x205acf -= 0.9545454545454546) * _0x205acf + 0.984375;
        },
        InOut: function (_0x1f6508) {
          return 0.5 > _0x1f6508
            ? 0.5 * _0x26a494.Bounce.In(0x2 * _0x1f6508)
            : 0.5 * _0x26a494.Bounce.Out(0x2 * _0x1f6508 - 0x1) + 0.5;
        },
      }),
      generatePow: function (_0x1d9bfe) {
        if (undefined === _0x1d9bfe) {
          _0x1d9bfe = 0x4;
        }
        _0x1d9bfe = _0x1d9bfe < Number.EPSILON ? Number.EPSILON : _0x1d9bfe;
        _0x1d9bfe = 0x2710 < _0x1d9bfe ? 0x2710 : _0x1d9bfe;
        return {
          In: function (_0xe79705) {
            return Math.pow(_0xe79705, _0x1d9bfe);
          },
          Out: function (_0x43dd59) {
            return 0x1 - Math.pow(0x1 - _0x43dd59, _0x1d9bfe);
          },
          InOut: function (_0x555975) {
            return 0.5 > _0x555975
              ? Math.pow(0x2 * _0x555975, _0x1d9bfe) / 0x2
              : (0x1 - Math.pow(0x2 - 0x2 * _0x555975, _0x1d9bfe)) / 0x2 + 0.5;
          },
        };
      },
    });
    var _0x49f6ee =
      "undefined" === typeof self &&
      "undefined" !== typeof process &&
      process.hrtime
        ? function () {
            var _0x4815d1 = process.hrtime();
            return 0x3e8 * _0x4815d1[0x0] + _0x4815d1[0x1] / 0xf4240;
          }
        : "undefined" !== typeof self &&
          undefined !== self.performance &&
          undefined !== self.performance.now
        ? self.performance.now.bind(self.performance)
        : undefined !== Date.now
        ? Date.now
        : function () {
            return new Date().getTime();
          };
    var _0x4c0e22 = function () {
      this._tweens = {};
      this._tweensAddedDuringUpdate = {};
    };
    _0x4c0e22.prototype.getAll = function () {
      var _0x103393 = this;
      return Object.keys(this._tweens).map(function (_0x4e9bc9) {
        return _0x103393._tweens[_0x4e9bc9];
      });
    };
    _0x4c0e22.prototype.removeAll = function () {
      this._tweens = {};
    };
    _0x4c0e22.prototype.add = function (_0xd99fad) {
      this._tweens[_0xd99fad.getId()] = _0xd99fad;
      this._tweensAddedDuringUpdate[_0xd99fad.getId()] = _0xd99fad;
    };
    _0x4c0e22.prototype.remove = function (_0x4a405a) {
      delete this._tweens[_0x4a405a.getId()];
      delete this._tweensAddedDuringUpdate[_0x4a405a.getId()];
    };
    _0x4c0e22.prototype.update = function (_0x3e8a4e, _0x26898f) {
      if (undefined === _0x3e8a4e) {
        _0x3e8a4e = _0x49f6ee();
      }
      if (undefined === _0x26898f) {
        _0x26898f = false;
      }
      var _0x3160d5 = Object.keys(this._tweens);
      if (0x0 === _0x3160d5.length) {
        return false;
      }
      for (; 0x0 < _0x3160d5.length; ) {
        this._tweensAddedDuringUpdate = {};
        for (var _0x5873b1 = 0x0; _0x5873b1 < _0x3160d5.length; _0x5873b1++) {
          var _0x3ac0a1 = this._tweens[_0x3160d5[_0x5873b1]];
          var _0x18a15b = !_0x26898f;
          if (
            _0x3ac0a1 &&
            false === _0x3ac0a1.update(_0x3e8a4e, _0x18a15b) &&
            !_0x26898f
          ) {
            delete this._tweens[_0x3160d5[_0x5873b1]];
          }
        }
        _0x3160d5 = Object.keys(this._tweensAddedDuringUpdate);
      }
      return true;
    };
    var _0x492aff = [0x1];
    var _0x5da5a8 = {
      Linear: function (_0x3a631c, _0x8730a0) {
        var _0x54aa68 = _0x3a631c.length - 0x1;
        var _0x51ba55 = _0x54aa68 * _0x8730a0;
        var _0x5e11d1 = Math.floor(_0x51ba55);
        var _0x25304a = _0x5da5a8.Utils.Linear;
        return 0x0 > _0x8730a0
          ? _0x25304a(_0x3a631c[0x0], _0x3a631c[0x1], _0x51ba55)
          : 0x1 < _0x8730a0
          ? _0x25304a(
              _0x3a631c[_0x54aa68],
              _0x3a631c[_0x54aa68 - 0x1],
              _0x54aa68 - _0x51ba55
            )
          : _0x25304a(
              _0x3a631c[_0x5e11d1],
              _0x3a631c[
                _0x5e11d1 + 0x1 > _0x54aa68 ? _0x54aa68 : _0x5e11d1 + 0x1
              ],
              _0x51ba55 - _0x5e11d1
            );
      },
      Bezier: function (_0x598861, _0x1f15a0) {
        var _0x626fad = 0x0;
        var _0x57b479 = _0x598861.length - 0x1;
        var _0x259e98 = Math.pow;
        var _0xc3b2a = _0x5da5a8.Utils.Bernstein;
        for (var _0x49b5d8 = 0x0; _0x49b5d8 <= _0x57b479; _0x49b5d8++) {
          _0x626fad +=
            _0x259e98(0x1 - _0x1f15a0, _0x57b479 - _0x49b5d8) *
            _0x259e98(_0x1f15a0, _0x49b5d8) *
            _0x598861[_0x49b5d8] *
            _0xc3b2a(_0x57b479, _0x49b5d8);
        }
        return _0x626fad;
      },
      CatmullRom: function (_0x97b661, _0x4d2c9a) {
        var _0x56a98c = _0x97b661.length - 0x1;
        var _0xef5e54 = _0x56a98c * _0x4d2c9a;
        var _0x1979ff = Math.floor(_0xef5e54);
        var _0x5c1129 = _0x5da5a8.Utils.CatmullRom;
        return _0x97b661[0x0] === _0x97b661[_0x56a98c]
          ? (0x0 > _0x4d2c9a &&
              (_0x1979ff = Math.floor(
                (_0xef5e54 = _0x56a98c * (0x1 + _0x4d2c9a))
              )),
            _0x5c1129(
              _0x97b661[(_0x1979ff - 0x1 + _0x56a98c) % _0x56a98c],
              _0x97b661[_0x1979ff],
              _0x97b661[(_0x1979ff + 0x1) % _0x56a98c],
              _0x97b661[(_0x1979ff + 0x2) % _0x56a98c],
              _0xef5e54 - _0x1979ff
            ))
          : 0x0 > _0x4d2c9a
          ? _0x97b661[0x0] -
            (_0x5c1129(
              _0x97b661[0x0],
              _0x97b661[0x0],
              _0x97b661[0x1],
              _0x97b661[0x1],
              -_0xef5e54
            ) -
              _0x97b661[0x0])
          : 0x1 < _0x4d2c9a
          ? _0x97b661[_0x56a98c] -
            (_0x5c1129(
              _0x97b661[_0x56a98c],
              _0x97b661[_0x56a98c],
              _0x97b661[_0x56a98c - 0x1],
              _0x97b661[_0x56a98c - 0x1],
              _0xef5e54 - _0x56a98c
            ) -
              _0x97b661[_0x56a98c])
          : _0x5c1129(
              _0x97b661[_0x1979ff ? _0x1979ff - 0x1 : 0x0],
              _0x97b661[_0x1979ff],
              _0x97b661[
                _0x56a98c < _0x1979ff + 0x1 ? _0x56a98c : _0x1979ff + 0x1
              ],
              _0x97b661[
                _0x56a98c < _0x1979ff + 0x2 ? _0x56a98c : _0x1979ff + 0x2
              ],
              _0xef5e54 - _0x1979ff
            );
      },
      Utils: {
        Linear: function (_0x76a75b, _0x23535b, _0x2f065b) {
          return (_0x23535b - _0x76a75b) * _0x2f065b + _0x76a75b;
        },
        Bernstein: function (_0x453f18, _0x1bd645) {
          var _0x570585 = _0x5da5a8.Utils.Factorial;
          return (
            _0x570585(_0x453f18) /
            _0x570585(_0x1bd645) /
            _0x570585(_0x453f18 - _0x1bd645)
          );
        },
        Factorial: function (_0x479b25) {
          var _0x4a09e0 = 0x1;
          if (_0x492aff[_0x479b25]) {
            return _0x492aff[_0x479b25];
          }
          for (var _0x47326b = _0x479b25; 0x1 < _0x47326b; _0x47326b--) {
            _0x4a09e0 *= _0x47326b;
          }
          return (_0x492aff[_0x479b25] = _0x4a09e0);
        },
        CatmullRom: function (
          _0x40451f,
          _0x4ca1a9,
          _0x1f6ba8,
          _0x508d5c,
          _0x45bc5d
        ) {
          _0x40451f = 0.5 * (_0x1f6ba8 - _0x40451f);
          _0x508d5c = 0.5 * (_0x508d5c - _0x4ca1a9);
          var _0x4bb614 = _0x45bc5d * _0x45bc5d;
          return (
            (0x2 * _0x4ca1a9 - 0x2 * _0x1f6ba8 + _0x40451f + _0x508d5c) *
              _0x45bc5d *
              _0x4bb614 +
            (-0x3 * _0x4ca1a9 + 0x3 * _0x1f6ba8 - 0x2 * _0x40451f - _0x508d5c) *
              _0x4bb614 +
            _0x40451f * _0x45bc5d +
            _0x4ca1a9
          );
        },
      },
    };
    var _0x7d6e8a = function () {};
    _0x7d6e8a.nextId = function () {
      return _0x7d6e8a._nextId++;
    };
    _0x7d6e8a._nextId = 0x0;
    var _0x286632 = new _0x4c0e22();
    var _0xe91f3d = function (_0xd71cd1, _0x3bdb63) {
      if (undefined === _0x3bdb63) {
        _0x3bdb63 = _0x286632;
      }
      this._object = _0xd71cd1;
      this._group = _0x3bdb63;
      this._isPaused = false;
      this._pauseStart = 0x0;
      this._valuesStart = {};
      this._valuesEnd = {};
      this._valuesStartRepeat = {};
      this._duration = 0x3e8;
      this._repeat = this._initialRepeat = 0x0;
      this._reversed = this._isPlaying = this._yoyo = false;
      this._startTime = this._delayTime = 0x0;
      this._easingFunction = _0x26a494.Linear.None;
      this._interpolationFunction = _0x5da5a8.Linear;
      this._chainedTweens = [];
      this._onEveryStartCallbackFired = this._onStartCallbackFired = false;
      this._id = _0x7d6e8a.nextId();
      this._goToEnd = this._isChainStopped = false;
    };
    _0xe91f3d.prototype.getId = function () {
      return this._id;
    };
    _0xe91f3d.prototype.isPlaying = function () {
      return this._isPlaying;
    };
    _0xe91f3d.prototype.isPaused = function () {
      return this._isPaused;
    };
    _0xe91f3d.prototype.to = function (_0x3a63ad, _0x3f2712) {
      this._valuesEnd = Object.create(_0x3a63ad);
      if (undefined !== _0x3f2712) {
        this._duration = _0x3f2712;
      }
      return this;
    };
    _0xe91f3d.prototype.duration = function (_0x48b406) {
      if (undefined === _0x48b406) {
        _0x48b406 = 0x3e8;
      }
      this._duration = _0x48b406;
      return this;
    };
    _0xe91f3d.prototype.start = function (_0x485b51, _0x1ceb05) {
      if (undefined === _0x485b51) {
        _0x485b51 = _0x49f6ee();
      }
      if (undefined === _0x1ceb05) {
        _0x1ceb05 = false;
      }
      if (this._isPlaying) {
        return this;
      }
      if (this._group) {
        this._group.add(this);
      }
      this._repeat = this._initialRepeat;
      if (this._reversed) {
        this._reversed = false;
        for (var _0x4ded02 in this._valuesStartRepeat) {
          this._swapEndStartRepeatValues(_0x4ded02);
          this._valuesStart[_0x4ded02] = this._valuesStartRepeat[_0x4ded02];
        }
      }
      this._isPlaying = true;
      this._isChainStopped =
        this._onEveryStartCallbackFired =
        this._onStartCallbackFired =
        this._isPaused =
          false;
      this._startTime = _0x485b51;
      this._startTime += this._delayTime;
      this._setupProperties(
        this._object,
        this._valuesStart,
        this._valuesEnd,
        this._valuesStartRepeat,
        _0x1ceb05
      );
      return this;
    };
    _0xe91f3d.prototype.startFromCurrentValues = function (_0x4fd339) {
      return this.start(_0x4fd339, true);
    };
    _0xe91f3d.prototype._setupProperties = function (
      _0x37b053,
      _0x435487,
      _0x283b0a,
      _0x17a657,
      _0x2d7a3f
    ) {
      for (var _0x578cc3 in _0x283b0a) {
        var _0x23eef7 = _0x37b053[_0x578cc3];
        var _0x5357e7 = Array.isArray(_0x23eef7);
        var _0x122ee4 = _0x5357e7 ? "array" : typeof _0x23eef7;
        var _0x2186f4 = !_0x5357e7 && Array.isArray(_0x283b0a[_0x578cc3]);
        if (!("undefined" === _0x122ee4 || "function" === _0x122ee4)) {
          if (_0x2186f4) {
            var _0x3ce544 = _0x283b0a[_0x578cc3];
            if (0x0 === _0x3ce544.length) {
              continue;
            }
            _0x3ce544 = _0x3ce544.map(
              this._handleRelativeValue.bind(this, _0x23eef7)
            );
            if (undefined === _0x435487[_0x578cc3]) {
              _0x283b0a[_0x578cc3] = [_0x23eef7].concat(_0x3ce544);
            }
          }
          if (
            ("object" === _0x122ee4 || _0x5357e7) &&
            _0x23eef7 &&
            !_0x2186f4
          ) {
            _0x435487[_0x578cc3] = _0x5357e7 ? [] : {};
            for (var _0x14c0c0 in _0x23eef7)
              _0x435487[_0x578cc3][_0x14c0c0] = _0x23eef7[_0x14c0c0];
            _0x17a657[_0x578cc3] = _0x5357e7 ? [] : {};
            this._setupProperties(
              _0x23eef7,
              _0x435487[_0x578cc3],
              _0x283b0a[_0x578cc3],
              _0x17a657[_0x578cc3],
              _0x2d7a3f
            );
          } else {
            if ("undefined" === typeof _0x435487[_0x578cc3] || _0x2d7a3f) {
              _0x435487[_0x578cc3] = _0x23eef7;
            }
            if (!_0x5357e7) {
              _0x435487[_0x578cc3] *= 0x1;
            }
            _0x17a657[_0x578cc3] = _0x2186f4
              ? _0x283b0a[_0x578cc3].slice().reverse()
              : _0x435487[_0x578cc3] || 0x0;
          }
        }
      }
    };
    _0xe91f3d.prototype.stop = function () {
      if (!this._isChainStopped) {
        this._isChainStopped = true;
        this.stopChainedTweens();
      }
      if (!this._isPlaying) {
        return this;
      }
      if (this._group) {
        this._group.remove(this);
      }
      this._isPaused = this._isPlaying = false;
      if (this._onStopCallback) {
        this._onStopCallback(this._object);
      }
      return this;
    };
    _0xe91f3d.prototype.end = function () {
      this._goToEnd = true;
      this.update(Infinity);
      return this;
    };
    _0xe91f3d.prototype.pause = function (_0x21d356) {
      if (undefined === _0x21d356) {
        _0x21d356 = _0x49f6ee();
      }
      if (this._isPaused || !this._isPlaying) {
        return this;
      }
      this._isPaused = true;
      this._pauseStart = _0x21d356;
      if (this._group) {
        this._group.remove(this);
      }
      return this;
    };
    _0xe91f3d.prototype.resume = function (_0x619766) {
      if (undefined === _0x619766) {
        _0x619766 = _0x49f6ee();
      }
      if (!this._isPaused || !this._isPlaying) {
        return this;
      }
      this._isPaused = false;
      this._startTime += _0x619766 - this._pauseStart;
      this._pauseStart = 0x0;
      if (this._group) {
        this._group.add(this);
      }
      return this;
    };
    _0xe91f3d.prototype.stopChainedTweens = function () {
      var _0x403b99 = 0x0;
      for (
        var _0x36d1a0 = this._chainedTweens.length;
        _0x403b99 < _0x36d1a0;
        _0x403b99++
      ) {
        this._chainedTweens[_0x403b99].stop();
      }
      return this;
    };
    _0xe91f3d.prototype.group = function (_0x2e7c08) {
      if (undefined === _0x2e7c08) {
        _0x2e7c08 = _0x286632;
      }
      this._group = _0x2e7c08;
      return this;
    };
    _0xe91f3d.prototype.delay = function (_0x1c0372) {
      if (undefined === _0x1c0372) {
        _0x1c0372 = 0x0;
      }
      this._delayTime = _0x1c0372;
      return this;
    };
    _0xe91f3d.prototype.repeat = function (_0x16d884) {
      if (undefined === _0x16d884) {
        _0x16d884 = 0x0;
      }
      this._repeat = this._initialRepeat = _0x16d884;
      return this;
    };
    _0xe91f3d.prototype.repeatDelay = function (_0x497ac3) {
      this._repeatDelayTime = _0x497ac3;
      return this;
    };
    _0xe91f3d.prototype.yoyo = function (_0x208393) {
      if (undefined === _0x208393) {
        _0x208393 = false;
      }
      this._yoyo = _0x208393;
      return this;
    };
    _0xe91f3d.prototype.easing = function (_0x202de3) {
      if (undefined === _0x202de3) {
        _0x202de3 = _0x26a494.Linear.None;
      }
      this._easingFunction = _0x202de3;
      return this;
    };
    _0xe91f3d.prototype.interpolation = function (_0x27a9a7) {
      if (undefined === _0x27a9a7) {
        _0x27a9a7 = _0x5da5a8.Linear;
      }
      this._interpolationFunction = _0x27a9a7;
      return this;
    };
    _0xe91f3d.prototype.chain = function () {
      var _0x2e2461 = [];
      for (var _0x63033e = 0x0; _0x63033e < arguments.length; _0x63033e++) {
        _0x2e2461[_0x63033e] = arguments[_0x63033e];
      }
      this._chainedTweens = _0x2e2461;
      return this;
    };
    _0xe91f3d.prototype.onStart = function (_0x3dad67) {
      this._onStartCallback = _0x3dad67;
      return this;
    };
    _0xe91f3d.prototype.onEveryStart = function (_0x5c06da) {
      this._onEveryStartCallback = _0x5c06da;
      return this;
    };
    _0xe91f3d.prototype.onUpdate = function (_0x27f6fa) {
      this._onUpdateCallback = _0x27f6fa;
      return this;
    };
    _0xe91f3d.prototype.onRepeat = function (_0x5ece61) {
      this._onRepeatCallback = _0x5ece61;
      return this;
    };
    _0xe91f3d.prototype.onComplete = function (_0x5c3e08) {
      this._onCompleteCallback = _0x5c3e08;
      return this;
    };
    _0xe91f3d.prototype.onStop = function (_0x6440ef) {
      this._onStopCallback = _0x6440ef;
      return this;
    };
    _0xe91f3d.prototype.update = function (_0x326789, _0x1fce6b) {
      if (undefined === _0x326789) {
        _0x326789 = _0x49f6ee();
      }
      if (undefined === _0x1fce6b) {
        _0x1fce6b = true;
      }
      if (this._isPaused) {
        return true;
      }
      var _0x3bb666;
      var _0x56136d;
      _0x56136d = this._startTime + this._duration;
      if (!this._goToEnd && !this._isPlaying) {
        if (_0x326789 > _0x56136d) {
          return false;
        }
        if (_0x1fce6b) {
          this.start(_0x326789, true);
        }
      }
      this._goToEnd = false;
      if (_0x326789 < this._startTime) {
        return true;
      }
      if (false === this._onStartCallbackFired) {
        if (this._onStartCallback) {
          this._onStartCallback(this._object);
        }
        this._onStartCallbackFired = true;
      }
      if (false === this._onEveryStartCallbackFired) {
        if (this._onEveryStartCallback) {
          this._onEveryStartCallback(this._object);
        }
        this._onEveryStartCallbackFired = true;
      }
      _0x56136d = (_0x326789 - this._startTime) / this._duration;
      _0x56136d = 0x0 === this._duration || 0x1 < _0x56136d ? 0x1 : _0x56136d;
      var _0x2641d7 = this._easingFunction(_0x56136d);
      this._updateProperties(
        this._object,
        this._valuesStart,
        this._valuesEnd,
        _0x2641d7
      );
      if (this._onUpdateCallback) {
        this._onUpdateCallback(this._object, _0x56136d);
      }
      if (0x1 === _0x56136d) {
        if (0x0 < this._repeat) {
          if (isFinite(this._repeat)) {
            this._repeat--;
          }
          for (_0x3bb666 in this._valuesStartRepeat) {
            if (!this._yoyo && "string" === typeof this._valuesEnd[_0x3bb666]) {
              this._valuesStartRepeat[_0x3bb666] += parseFloat(
                this._valuesEnd[_0x3bb666]
              );
            }
            if (this._yoyo) {
              this._swapEndStartRepeatValues(_0x3bb666);
            }
            this._valuesStart[_0x3bb666] = this._valuesStartRepeat[_0x3bb666];
          }
          if (this._yoyo) {
            this._reversed = !this._reversed;
          }
          this._startTime =
            undefined !== this._repeatDelayTime
              ? _0x326789 + this._repeatDelayTime
              : _0x326789 + this._delayTime;
          if (this._onRepeatCallback) {
            this._onRepeatCallback(this._object);
          }
          this._onEveryStartCallbackFired = false;
        } else {
          if (this._onCompleteCallback) {
            this._onCompleteCallback(this._object);
          }
          _0x3bb666 = 0x0;
          for (
            _0x56136d = this._chainedTweens.length;
            _0x3bb666 < _0x56136d;
            _0x3bb666++
          ) {
            this._chainedTweens[_0x3bb666].start(
              this._startTime + this._duration,
              false
            );
          }
          return (this._isPlaying = false);
        }
      }
      return true;
    };
    _0xe91f3d.prototype._updateProperties = function (
      _0x235c99,
      _0x29ac64,
      _0x4479f5,
      _0x2bf660
    ) {
      for (var _0x5456fc in _0x4479f5)
        if (undefined !== _0x29ac64[_0x5456fc]) {
          var _0x1d7586 = _0x29ac64[_0x5456fc] || 0x0;
          var _0x2ddec1 = _0x4479f5[_0x5456fc];
          var _0x4e6806 = Array.isArray(_0x235c99[_0x5456fc]);
          var _0xeb178 = Array.isArray(_0x2ddec1);
          if (!_0x4e6806 && _0xeb178) {
            _0x235c99[_0x5456fc] = this._interpolationFunction(
              _0x2ddec1,
              _0x2bf660
            );
          } else if ("object" === typeof _0x2ddec1 && _0x2ddec1) {
            this._updateProperties(
              _0x235c99[_0x5456fc],
              _0x1d7586,
              _0x2ddec1,
              _0x2bf660
            );
          } else {
            _0x2ddec1 = this._handleRelativeValue(_0x1d7586, _0x2ddec1);
            if ("number" === typeof _0x2ddec1) {
              _0x235c99[_0x5456fc] =
                _0x1d7586 + (_0x2ddec1 - _0x1d7586) * _0x2bf660;
            }
          }
        }
    };
    _0xe91f3d.prototype._handleRelativeValue = function (_0x8e00a8, _0xb24701) {
      return "string" !== typeof _0xb24701
        ? _0xb24701
        : "+" === _0xb24701.charAt(0x0) || "-" === _0xb24701.charAt(0x0)
        ? _0x8e00a8 + parseFloat(_0xb24701)
        : parseFloat(_0xb24701);
    };
    _0xe91f3d.prototype._swapEndStartRepeatValues = function (_0x5186b2) {
      var _0x3f0d4a = this._valuesStartRepeat[_0x5186b2];
      var _0x1ba72b = this._valuesEnd[_0x5186b2];
      this._valuesStartRepeat[_0x5186b2] =
        "string" === typeof _0x1ba72b
          ? this._valuesStartRepeat[_0x5186b2] + parseFloat(_0x1ba72b)
          : this._valuesEnd[_0x5186b2];
      this._valuesEnd[_0x5186b2] = _0x3f0d4a;
    };
    var _0x44e0b1 = _0x7d6e8a.nextId;
    var _0x14f765 = _0x286632.getAll.bind(_0x286632);
    var _0x26e610 = _0x286632.removeAll.bind(_0x286632);
    var _0x4f6ae3 = _0x286632.add.bind(_0x286632);
    var _0x5c1ffe = _0x286632.remove.bind(_0x286632);
    var _0x3d66dd = _0x286632.update.bind(_0x286632);
    var _0x2137f6 = {
      Easing: _0x26a494,
      Group: _0x4c0e22,
      Interpolation: _0x5da5a8,
      now: _0x49f6ee,
      Sequence: _0x7d6e8a,
      nextId: _0x44e0b1,
      Tween: _0xe91f3d,
      VERSION: "19.0.0",
      getAll: _0x14f765,
      removeAll: _0x26e610,
      add: _0x4f6ae3,
      remove: _0x5c1ffe,
      update: _0x3d66dd,
    };
    _0x512557.Easing = _0x26a494;
    _0x512557.Group = _0x4c0e22;
    _0x512557.Interpolation = _0x5da5a8;
    _0x512557.Sequence = _0x7d6e8a;
    _0x512557.Tween = _0xe91f3d;
    _0x512557.VERSION = "19.0.0";
    _0x512557.add = _0x4f6ae3;
    _0x512557["default"] = _0x2137f6;
    _0x512557.getAll = _0x14f765;
    _0x512557.nextId = _0x44e0b1;
    _0x512557.now = _0x49f6ee;
    _0x512557.remove = _0x5c1ffe;
    _0x512557.removeAll = _0x26e610;
    _0x512557.update = _0x3d66dd;
    Object.defineProperty(_0x512557, "__esModule", {
      value: true,
    });
  };
  if ("object" === typeof exports && "undefined" !== typeof module) {
    _0x48692d(exports);
  } else if ("function" === typeof define && define.amd) {
    define(["exports"], _0x48692d);
  } else {
    _0x24e955 =
      "undefined" !== typeof globalThis ? globalThis : _0x24e955 || self;
    _0x48692d((_0x24e955.TWEEN = {}));
  }
});
ig.baked = true;
ig.module("babylon.params").defines(function () {
  ig.params = {
    gravityY: -0x6,
    ball: {
      mass: 0x5,
      restitution: 0.3,
      friction: 0.2,
      impulse: 16.4,
    },
    focusRadius: 0x42,
    score: {
      ballLeft: 0x64,
      holeBonus: 0x1f4,
      starBonus: 0xc8,
    },
    ballNum: [0x3, 0x4, 0x4, 0x5, 0x5, 0x6, 0x6, 0x7],
    rewardBallNum: 0x3,
  };
});
ig.baked = true;
ig.module("babylon.particles")
  .requires("babylon.params")
  .defines(function () {
    ig.Particles = ig.Class.extend({
      v3: new BABYLON.Vector3(),
      init: function () {
        this.initParticles();
        this.coinSystem = this.initCoin();
      },
      initParticles: function () {
        var _0x40c7d0 = new BABYLON.ParticleSystem(
          "particles",
          0x1f4,
          wgl.scene
        );
        _0x40c7d0.particleTexture = new BABYLON.Texture(
          "media/babylon/flare.png",
          wgl.scene
        );
        _0x40c7d0.minEmitBox = new BABYLON.Vector3(-0.1, -0.1, -0.1);
        _0x40c7d0.maxEmitBox = new BABYLON.Vector3(0.1, 0.1, 0.1);
        _0x40c7d0.color1 = new BABYLON.Color4(0.7, 0.8, 0x1, 0x1);
        _0x40c7d0.color2 = new BABYLON.Color4(0.2, 0.5, 0x1, 0x1);
        _0x40c7d0.colorDead = new BABYLON.Color4(0x0, 0x0, 0.2, 0x0);
        _0x40c7d0.minSize = 0.03;
        _0x40c7d0.maxSize = 0.15;
        _0x40c7d0.minLifeTime = 0.3;
        _0x40c7d0.maxLifeTime = 1.2;
        _0x40c7d0.emitRate = 0xa0;
        _0x40c7d0.targetStopDuration = 0.36;
        _0x40c7d0.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
        _0x40c7d0.gravity = new BABYLON.Vector3(0x0, -9.81, 0x0);
        _0x40c7d0.direction1 = new BABYLON.Vector3(-0x7, 0x8, 0x3);
        _0x40c7d0.direction2 = new BABYLON.Vector3(0x7, 0x8, -0x3);
        _0x40c7d0.minAngularSpeed = 0x0;
        _0x40c7d0.maxAngularSpeed = Math.PI;
        _0x40c7d0.minEmitPower = 0.3;
        _0x40c7d0.maxEmitPower = 0.6;
        _0x40c7d0.updateSpeed = 0.01;
        this.particleSystem = _0x40c7d0;
      },
      initCoin: function () {
        var _0x260dec = new BABYLON.ParticleSystem(
          "particles",
          0x24,
          wgl.scene
        );
        _0x260dec.particleTexture = new BABYLON.Texture(
          "media/babylon/flare.png",
          wgl.scene
        );
        _0x260dec.minEmitBox = new BABYLON.Vector3(-0.1, -0.1, -0.1);
        _0x260dec.maxEmitBox = new BABYLON.Vector3(0.1, 0.1, 0.1);
        _0x260dec.color1 = new BABYLON.Color4(0.7, 0.8, 0.01, 0x1);
        _0x260dec.color2 = new BABYLON.Color4(0.9, 0.7, 0.01, 0x1);
        _0x260dec.colorDead = new BABYLON.Color4(0x0, 0x0, 0.2, 0x0);
        _0x260dec.minSize = 0.08;
        _0x260dec.maxSize = 0.3;
        _0x260dec.minLifeTime = 0.3;
        _0x260dec.maxLifeTime = 1.2;
        _0x260dec.emitRate = 0x24;
        _0x260dec.targetStopDuration = 0.36;
        _0x260dec.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
        _0x260dec.gravity = new BABYLON.Vector3(0x0, -9.81, 0x0);
        _0x260dec.direction1 = new BABYLON.Vector3(-0x3, 0x8, 0x3);
        _0x260dec.direction2 = new BABYLON.Vector3(0x3, 0x8, -0x3);
        _0x260dec.minAngularSpeed = 0x0;
        _0x260dec.maxAngularSpeed = Math.PI;
        _0x260dec.minEmitPower = 0.4;
        _0x260dec.maxEmitPower = 0.6;
        _0x260dec.updateSpeed = 0.01;
        return _0x260dec;
      },
      showAt: function (_0x449a72) {
        this.particleSystem.emitter = _0x449a72;
        this.particleSystem.start();
      },
      showCoinAt: function (_0x1e4fd6) {
        this.coinSystem.emitter = _0x1e4fd6;
        this.coinSystem.start();
      },
    });
  });
ig.baked = true;
ig.module("babylon.pool").defines(function () {
  ig.Pool = ig.Class.extend({
    spawnFunc: null,
    bin: [],
    init: function (_0x566720) {
      this.spawnFunc = _0x566720;
    },
    hide: function (_0x1f809f) {
      var _0x38704c = _0x1f809f.mesh ? _0x1f809f.mesh : _0x1f809f;
      _0x38704c.position.z = -0xc8;
      _0x38704c.material.freeze();
      _0x38704c.setEnabled(false);
      _0x1f809f.hidden = true;
    },
    add: function (_0xea4d35) {
      this.bin.push(_0xea4d35);
      this.hide(_0xea4d35);
    },
    get: function () {
      var _0x20abf2;
      if (0x0 < this.bin.length) {
        _0x20abf2 = this.bin.pop();
        var _0x4f6202 = _0x20abf2.mesh ? _0x20abf2.mesh : _0x20abf2;
        _0x4f6202.setEnabled(true);
        _0x4f6202.material.unfreeze();
      } else {
        _0x20abf2 = this.spawnFunc();
      }
      _0x20abf2.hidden = false;
      return _0x20abf2;
    },
    drain: function () {
      this.bin.forEach(function (_0x426f2b) {
        _0x426f2b.dispose();
      });
      this.bin = [];
    },
  });
});
ig.baked = true;
ig.module("babylon.object3d")
  .requires("babylon.params")
  .defines(function () {
    ig.Object3D = ig.Class.extend({
      meshName: "",
      children: [],
      isCloned: false,
      disposeWhenKilled: false,
      init: function (_0x39696b) {
        var _0x4880d6;
        if ("string" === typeof _0x39696b) {
          this.meshName = _0x39696b;
        } else if ("undefined" !== typeof _0x39696b) {
          _0x4880d6 = _0x39696b;
        }
        if (!_0x4880d6) {
          _0x4880d6 = wgl.scene.getMeshByName(this.meshName);
        }
        this.mesh = this.isCloned ? _0x4880d6.clone() : _0x4880d6;
        this.mesh.isVisible = true;
        this.mesh.setEnabled(true);
        this.subInit();
        wgl.obs.push(this);
      },
      subInit: function () {},
      update: function () {},
      reset: function () {
        this.mesh.setEnabled(true);
      },
      addChild: function (_0x7c01cd) {
        this.children.push(_0x7c01cd);
      },
      kill: function () {
        this.children.forEach(function (_0x5e9073) {
          if ("function" === typeof _0x5e9073.dispose) {
            _0x5e9073.dispose();
          }
        });
        var _0x2f9eed = wgl.obs.indexOf(this);
        if (-0x1 !== _0x2f9eed) {
          wgl.obs.splice(_0x2f9eed, 0x1);
        }
        if (this.mesh) {
          if (this.disposeWhenKilled) {
            this.mesh.dispose();
          } else {
            this.mesh.setEnabled(false);
          }
        }
      },
    });
  });
ig.baked = true;
ig.module("babylon.ball")
  .requires("babylon.object3d")
  .defines(function () {
    ig.Ball = ig.Object3D.extend({
      meshName: "Ball",
      lerpSpeed: 0.02,
      minControlDist: 0.15,
      maxControlDist: 1.5,
      ending: false,
      isFired: false,
      isFocused: false,
      subInit: function () {
        this.dist = this.maxControlDist - this.minControlDist;
        this.mesh.material.specularColor = BABYLON.Color3.Black();
        this.controlPad = wgl.scene.getMeshByName("Pad");
        this.controlPad.isPickable = true;
        this.controlPad.visibility = 0x0;
        this.controlPad.scaling.setAll(0xa, 0x1, 0xa);
        this.arrow = wgl.scene.getMeshByName("Arrow");
        this.arrow.material.depthFunction = BABYLON.Constants.ALWAYS;
        this.arrow.isVisible = false;
        this.arrow.renderingGroupId = 0x1;
        this.aimLine = wgl.scene.getMeshByName("AimConnect");
        this.aimLine.material.depthFunction = BABYLON.Constants.ALWAYS;
        this.aimLine.material.emissiveColor = new BABYLON.Color3.Yellow();
        this.aimLine.material.disableLighting = true;
        this.aimLine.isVisible = false;
        this.aimBall = wgl.scene.getMeshByName("AimBall");
        this.aimBall.material.depthFunction = BABYLON.Constants.ALWAYS;
        this.aimBall.material.disableLighting = true;
        this.aimBall.material.emissiveColor = new BABYLON.Color3.Yellow();
        this.aimBall.isVisible = false;
        this.aimBall.renderingGroupId = 0x1;
        this.isFocused = false;
      },
      setDampingTo: function (_0x21fdfa) {
        this.impostor.body.setLinearDamping(_0x21fdfa);
        this.impostor.body.setAngularDamping(_0x21fdfa);
      },
      setup: function (_0x10beaa) {
        this.startPos = wgl.scene.getMeshByName(
          _0x10beaa + "-ballpos"
        ).position;
        this.reset();
      },
      reset: function () {
        if (this.impostor) {
          this.impostor.body.disablePreStep = false;
          this.impostor.body.setLinearVelocity(BABYLON.Vector3.Zero());
          this.impostor.body.setAngularVelocity(BABYLON.Vector3.Zero());
          this.impostor.body.transformNode.position.copyFrom(this.startPos);
          wgl.scene.onAfterRenderObservable.addOnce(
            function () {
              this.impostor.body.disablePreStep = true;
            }.bind(this)
          );
        } else {
          this.impostor = new BABYLON.PhysicsAggregate(
            this.mesh,
            BABYLON.PhysicsShapeType.SPHERE,
            {
              mass: ig.params.ball.mass,
              restitution: ig.params.ball.restitution,
              friction: ig.params.ball.friction,
            },
            wgl.scene
          );
          this.impostor.body.setCollisionCallbackEnabled(true);
          this.impostor.body.getCollisionObservable().add(function (_0xcccada) {
            if (
              "COLLISION_STARTED" === _0xcccada.type &&
              "wall" ===
                _0xcccada.collidedAgainst.transformNode.name.slice(-0x4)
            ) {
              ig.soundHandler.sfxPlayer.play("hit");
            }
          });
        }
        this.lerpSpeed = 0.02;
        this.ending = this.isFired = false;
        this.mesh.setEnabled(true);
      },
      resetControl: function (_0x106458) {
        this.controlPad.position.copyFrom(this.mesh.position);
        this.arrow.position.copyFrom(this.mesh.position);
        this.aimLine.position.copyFrom(this.mesh.position);
        this.aimBall.position.copyFrom(this.mesh.position);
        this.isFired = false;
        if (_0x106458) {
          this.showFocus();
        }
      },
      aiming: function (_0x44e389) {
        _0x44e389.pickedPoint.subtractToRef(this.mesh.position, wgl.v3);
        var _0xf43423 = wgl.v3.length();
        var _0x2da29d = this.maxControlDist;
        if (_0xf43423 > _0x2da29d) {
          wgl.v3.scaleInPlace(_0x2da29d / wgl.v3.length());
          wgl.v3.addToRef(this.mesh.position, _0x44e389.pickedPoint);
          _0xf43423 = _0x2da29d;
        }
        this.aimBall.position.copyFrom(_0x44e389.pickedPoint);
        this.aimLine.scaling.y = _0xf43423 / 0x2;
        ig.util.updateGradientColor(
          "00FF00",
          "ff1900",
          (_0xf43423 - this.minControlDist) / this.dist,
          this.aimBall.material.emissiveColor
        );
        this.aimLine.material.emissiveColor.copyFrom(
          this.aimBall.material.emissiveColor
        );
        if (this.aimLine.scaling.y < this.minControlDist) {
          this.arrow.visibility =
            this.aimLine.visibility =
            this.aimBall.visibility =
              0x0;
        } else {
          this.arrow.visibility =
            this.aimLine.visibility =
            this.aimBall.visibility =
              0x1;
          _0x2da29d =
            ig.util.pio2 -
            this.angleBetweenPoints(_0x44e389.pickedPoint, this.mesh.position);
          this.arrow.rotation.y =
            this.aimBall.rotation.y =
            this.aimLine.rotation.y =
              _0x2da29d;
          _0x44e389.pickedPoint.subtractToRef(this.mesh.position, wgl.v3);
          _0xf43423 += 0.78;
          wgl.cameraY = wgl.cameraY0 * _0xf43423;
          wgl.cameraBase = wgl.cameraBase0 * _0xf43423;
          wgl.camera.position.subtractToRef(this.mesh.position, wgl.v3a);
          wgl.v3a.y = wgl.v3.y;
          wgl.v3a.scaleInPlace(wgl.cameraBase / wgl.v3a.length());
          wgl.v3a.addInPlace(this.mesh.position);
          wgl.cameraTarget.copyFrom(wgl.v3a);
          wgl.cameraTarget.y = wgl.cameraY;
        }
      },
      fire: function () {
        if (!(this.aimLine.scaling.y < this.minControlDist)) {
          ig.soundHandler.sfxPlayer.play("stick");
          this.setDampingTo(1.25);
          var _0x53c924 =
            0x2 *
            ig.params.ball.impulse *
            (this.aimLine.scaling.y - this.minControlDist);
          var _0x2ee125 = ig.util.pio2 - this.arrow.rotation.y;
          wgl.impulse.x = Math.cos(_0x2ee125);
          wgl.impulse.z = Math.sin(_0x2ee125);
          wgl.impulse.y = 0x0;
          wgl.impulse.scaleInPlace(_0x53c924);
          this.impostor.body.setLinearVelocity(wgl.impulse);
          this.isFired = true;
          this.isFocused = false;
          if (!wgl.ballTrail.isEnabled()) {
            wgl.ballTrail.setVisible(true);
          }
          wgl.cameraY = wgl.cameraY0;
          wgl.cameraBase = wgl.cameraBase0;
          ig.control.ballLeft--;
        }
      },
      update: function () {
        if (
          !wgl.over &&
          (BABYLON.Vector3.LerpToRef(
            wgl.camera.position,
            wgl.cameraTarget,
            this.lerpSpeed * wgl.speedScale,
            wgl.camera.position
          ),
          wgl.camera.setTarget(this.mesh.position),
          wgl.ballTrail.updatePos(this.mesh.position),
          !this.ending && this.isFired)
        ) {
          this.mesh.position.subtractToRef(wgl.hole.position, wgl.v3);
          if (0.2 < wgl.v3.length()) {
            wgl.v3.scaleInPlace(0x1 + wgl.cameraBase / wgl.v3.length());
            wgl.v3.addInPlace(wgl.hole.position);
            wgl.cameraTarget.copyFrom(wgl.v3);
            wgl.cameraTarget.y = wgl.cameraY;
          }
          if (0.6 > this.mesh.position.y) {
            wgl.ballTrail.setVisible(false);
            this.ending = true;
            if (
              0.167 > Math.abs(this.mesh.position.x - wgl.hole.position.x) &&
              0.167 > Math.abs(this.mesh.position.z - wgl.hole.position.z)
            ) {
              ig.soundHandler.sfxPlayer.play("inhole");
              wgl.particles.showAt(wgl.hole.position);
              ig.control.addScore(
                ig.params.score.holeBonus +
                  ig.control.ballLeft * ig.params.score.ballLeft
              );
              ig.control.btPause.visible = false;
              wgl.endShow();
              ig.control.text.show();
            } else {
              ig.control.fail();
            }
          } else {
            var _0x5a0c3f = this.impostor.body.getLinearVelocity().length();
            if (0.003 > _0x5a0c3f) {
              if ((this.ending = !ig.control.checkBall())) {
                ig.control.ballInArea = true;
              } else {
                this.resetControl(true);
              }
            } else if (
              0x5 > _0x5a0c3f &&
              0.8 > this.impostor.body.linearDamping
            ) {
              this.setDampingTo(0x3);
            }
          }
        }
      },
      showFocus: function () {
        this.screenPos = wgl.worldToScreen(this.mesh);
        this.isFocused = true;
        this.resetControl();
      },
      distanceBetweenPoints: function (_0x5bd47e, _0x4ff443) {
        return Math.sqrt(
          Math.pow(_0x5bd47e.x - _0x4ff443.x, 0x2) +
            Math.pow(_0x5bd47e.z - _0x4ff443.z, 0x2)
        );
      },
      angleBetweenPoints: function (_0x5ab1b1, _0x568913) {
        return Math.atan2(_0x568913.z - _0x5ab1b1.z, _0x568913.x - _0x5ab1b1.x);
      },
    });
  });
ig.baked = true;
ig.module("babylon.coin")
  .requires("babylon.object3d")
  .defines(function () {
    ig.Coin = ig.Object3D.extend({
      meshName: "coin",
      update: function () {
        if (this.mesh.isEnabled()) {
          this.mesh.rotate(
            BABYLON.Axis.Y,
            0.038 * wgl.speedScale,
            BABYLON.Space.WORLD
          );
          if (this.mesh.intersectsMesh(wgl.ball.mesh)) {
            this.collected();
          }
        }
      },
      collected: function () {
        this.mesh.setEnabled(false);
        ig.control.addScore(ig.params.score.starBonus);
        wgl.particles.showCoinAt(this.mesh.position);
        ig.soundHandler.sfxPlayer.play("coin");
      },
    });
  });
ig.baked = true;
ig.module("plugins.timeout")
  .requires("impact.timer", "impact.game")
  .defines(function () {
    ig.Timeout = ig.Class.extend({
      started: false,
      autoStart: true,
      killedOnceDone: true,
      init: function (_0x54860c, _0x4ec15d, _0x54a562, _0x47377f) {
        this.callback = _0x54860c;
        if ("boolean" === typeof _0x54a562) {
          this.autoStart = _0x54a562;
        }
        if ("boolean" === typeof _0x47377f) {
          this.killedOnceDone = _0x47377f;
        }
        this.timer = new ig.Timer(_0x4ec15d);
        if (!this.autoStart) {
          this.timer.pause();
        }
        ig.game.timers.push(this);
        return this;
      },
      update: function () {
        if (0x0 < this.timer.delta()) {
          this.timer.reset();
          this.timer.pause();
          this.callback();
          if (this.killedOnceDone) {
            this.kill();
          }
          this.started = false;
        }
      },
      start: function () {
        this.timer.unpause();
        this.started = true;
      },
      pause: function () {
        if (this.started) {
          this.timer.pause();
        }
      },
      resume: function () {
        if (this.started) {
          this.timer.unpause();
        }
      },
      reset: function (_0x9fbd75) {
        if (_0x9fbd75) {
          this.timer.set(_0x9fbd75);
        }
        if (!this.started) {
          this.start();
        }
      },
      kill: function () {
        var _0x380d03 = ig.game.timers.indexOf(this);
        if (-0x1 !== _0x380d03) {
          ig.game.timers.splice(_0x380d03, 0x1);
        }
      },
    });
    ig.Game.inject({
      timers: [],
      update: function () {
        this.timers.forEach(function (_0x220236) {
          _0x220236.update();
        });
        this.parent();
      },
    });
  });
ig.baked = true;
ig.module("babylon.object3d-solid")
  .requires("babylon.object3d")
  .defines(function () {
    ig.Object3DSolid = ig.Object3D.extend({
      impostorType: BABYLON.PhysicsShapeType.BOX,
      mass: 0x0,
      subInit: function () {
        this.impostor = new BABYLON.PhysicsAggregate(
          this.mesh,
          this.impostorType,
          {
            mass: this.mass,
          },
          wgl.scene
        );
        this.impostor.entity = this;
        this.impostor.meshName = this.meshName;
      },
      kill: function () {
        this.parent();
        if (this.impostor) {
          this.impostor.body.dispose();
          this.impostor.dispose();
        }
      },
    });
  });
ig.baked = true;
ig.module("babylon.moving-wall")
  .requires("babylon.object3d-solid")
  .defines(function () {
    ig.MovingWall = ig.Object3DSolid.extend({
      meshName: "movingWall",
      limit: 1.24,
      subInit: function () {
        this.parent();
        this.s0 = 0x0;
        switch (wgl.holeId) {
          case 0x7:
            this.limit = 0.53;
            break;
          case 0x8:
            this.limit = 0.6;
        }
        this.savedLocalPos = this.mesh.getPositionExpressedInLocalSpace();
        wgl.scene.onAfterRenderObservable.add(
          function () {
            this.impostor.body.disablePreStep = true;
          }.bind(this)
        );
      },
      update: function () {
        this.impostor.body.disablePreStep = false;
        var _0x1db5f1 = this.limit * Math.sin(0.9 * ig.system.clock.delta());
        var _0xf701a4 = _0x1db5f1 - this.s0;
        this.s0 = _0x1db5f1;
        this.mesh.translate(BABYLON.Axis.Y, _0xf701a4, BABYLON.Space.LOCAL);
      },
      kill: function () {
        this.mesh.setPositionWithLocalVector(this.savedLocalPos);
        this.parent();
      },
    });
  });
ig.baked = true;
ig.module("babylon.wgl")
  .requires(
    "babylon.tween",
    "babylon.params",
    "babylon.particles",
    "babylon.pool",
    "babylon.ball",
    "babylon.coin",
    "plugins.timeout",
    "babylon.moving-wall"
  )
  .defines(function () {
    wgl = {
      paused: false,
      forcedPause: false,
      ready: false,
      over: true,
      started: false,
      speedScale: 0x1,
      cameraY0: 1.32,
      cameraBase0: 2.5,
      holeId: 0x1,
      v3: new BABYLON.Vector3(),
      obs: [],
      coins: [],
      movingWalls: [],
      init: function () {
        this.impulse = new BABYLON.Vector3();
        this.v3 = new BABYLON.Vector3();
        this.v3a = new BABYLON.Vector3();
        this.maxSpeedScale = ig.ua.mobile ? 0x3 : 1.1;
        this.canvas = document.getElementById("webglcanvas");
        this.engine = new BABYLON.Engine(this.canvas, !ig.ua.mobile, {}, true);
        this.chromeAndroidFix();
        BABYLON.SceneLoader.ShowLoadingScreen = false;
        this.loadScene();
      },
      chromeAndroidFix: function () {
        if (ig.ua.android) {
          var _0x3add01 = navigator.userAgent;
          if (/Chrome/.test(_0x3add01) && !/Chromium/.test(_0x3add01)) {
            this.engine.disableUniformBuffers = true;
          }
        }
      },
      loadScene: function () {
        BABYLON.SceneLoader.Load(
          "media/babylon/",
          "scene.babylon",
          this.engine,
          function (_0x94b773) {
            this.scene = _0x94b773;
            try {
              HavokPhysics().then(
                function (_0x273c4a) {
                  this.havokInstance = _0x273c4a;
                  this.prepareScene();
                }.bind(this)
              );
            } catch (_0x373dab) {
              console.log(_0x373dab);
            }
          }.bind(this)
        );
      },
      prepareScene: function () {
        this.scene.meshes.forEach(function (_0x2bb0e2) {
          var _0x1082a3 = _0x2bb0e2.name.slice(0x0, 0x4);
          if (_0x1082a3.includes("lvl") && !_0x1082a3.includes("lvl1")) {
            _0x2bb0e2.setEnabled(false);
          }
        });
        this.initPhysics();
        this.scene.getMeshByName("Ball").setEnabled(false);
        this.particles = new ig.Particles();
        new BABYLON.HemisphericLight(
          "HemiLight",
          new BABYLON.Vector3(0x0, 0x1, 0x0),
          this.scene
        ).intensity = 1.36;
        this.initEnvironment();
        this.createObjects();
        this.scene.executeWhenReady(
          function () {
            this.ready = true;
            this.update();
            this.scene.render();
            this.engine.runRenderLoop(
              function () {
                if (!this.paused) {
                  this.update();
                  this.scene.render();
                }
              }.bind(this)
            );
            window.addEventListener(
              "resize",
              function () {
                this.engine.resize();
              }.bind(this)
            );
          }.bind(this)
        );
      },
      initPhysics: function () {
        var _0xc69e66 = new BABYLON.Vector3(0x0, ig.params.gravityY, 0x0);
        var _0x35b7be = new BABYLON.HavokPlugin(true, this.havokInstance);
        this.scene.enablePhysics(_0xc69e66, _0x35b7be);
      },
      initEnvironment: function () {
        var _0x270de0 = this.scene;
        var _0x17b062 = BABYLON.MeshBuilder.CreateBox(
          "skyBox",
          {
            size: 0x12c,
          },
          _0x270de0
        );
        var _0x3fb326 = new BABYLON.StandardMaterial("skyBox", _0x270de0);
        _0x3fb326.backFaceCulling = false;
        _0x3fb326.disableLighting = true;
        _0x3fb326.reflectionTexture = new BABYLON.CubeTexture(
          "media/babylon/skybox/skybox",
          _0x270de0
        );
        _0x3fb326.reflectionTexture.coordinatesMode =
          BABYLON.Texture.SKYBOX_MODE;
        _0x3fb326.diffuseColor = new BABYLON.Color3(0x0, 0x0, 0x0);
        _0x3fb326.specularColor = new BABYLON.Color3(0x0, 0x0, 0x0);
        _0x17b062.material = _0x3fb326;
        _0x17b062.position.y = 0x32;
        _0x270de0.fogEnabled = false;
        _0x17b062 = new BABYLON.Texture(
          "media/babylon/waterbright.png",
          _0x270de0
        );
        _0x17b062.uOffset = 0x0;
        _0x17b062.vOffset = 0x0;
        _0x17b062.uScale = 0xe;
        _0x17b062.vScale = 0xe;
        this.waterTexture = _0x17b062;
        var _0x3fb326 = 0x1;
        var _0x1934ba = new BABYLON.StandardMaterial("waterMat1", _0x270de0);
        _0x1934ba.diffuseTexture = _0x17b062;
        _0x1934ba.emissiveColor = new BABYLON.Color3(
          _0x3fb326,
          _0x3fb326,
          _0x3fb326
        );
        _0x1934ba.disableLighting = true;
        _0x3fb326 = BABYLON.Mesh.CreatePlane("waterMesh", 0x136, _0x270de0);
        _0x3fb326.material = _0x1934ba;
        _0x3fb326.rotation.x = Math.PI / 0x2;
        _0x3fb326.visibility = 0.7;
        _0x3fb326.position.y = 0x0;
        _0x3fb326 = 0x1;
        _0x1934ba = new BABYLON.StandardMaterial("waterMat2", _0x270de0);
        _0x1934ba.diffuseTexture = _0x17b062;
        _0x1934ba.emissiveColor = new BABYLON.Color3(
          _0x3fb326,
          _0x3fb326,
          _0x3fb326
        );
        _0x1934ba.disableLighting = true;
        _0x270de0 = BABYLON.Mesh.CreatePlane("waterMesh", 0x136, _0x270de0);
        _0x270de0.material = _0x1934ba;
        _0x270de0.rotation.x = Math.PI / 0x2;
        _0x270de0.rotation.y = Math.PI;
        _0x270de0.position.y = -0.4;
        _0x270de0.visibility = 0.9;
      },
      createObjects: function () {
        this.ball = new ig.Ball();
        this.ball.mesh.setEnabled(false);
        this.setupCamera();
        this.setupEndCamera();
        this.ballTrail = new BABYLON.TransformNode("tn", wgl.scene);
        this.ballTrail.computeWorldMatrix(true);
        var _0x184224 = new BABYLON.TransformNode("tn2", wgl.scene);
        _0x184224.rotation.x = ig.util.pio2;
        _0x184224.computeWorldMatrix(true);
        var _0x330af3 = new BABYLON.TrailMesh(
          "Trail",
          this.ballTrail,
          wgl.scene,
          0.045,
          0x24
        );
        _0x330af3.isPickable = false;
        _0x330af3.setEnabled(false);
        _0x330af3.visibility = 0.36;
        var _0x44e7ec = new BABYLON.TrailMesh(
          "Trail2",
          _0x184224,
          wgl.scene,
          0.045,
          0x24
        );
        _0x44e7ec.isPickable = false;
        _0x44e7ec.setEnabled(false);
        _0x44e7ec.visibility = 0.36;
        var _0x375d56 = new BABYLON.StandardMaterial("trailMat", wgl.scene);
        _0x375d56.emissiveColor = _0x375d56.diffuseColor = new BABYLON.Color3(
          0x1,
          0x1,
          0x1
        );
        _0x375d56.disableLighting = true;
        _0x330af3.material = _0x44e7ec.material = _0x375d56;
        this.ballTrail.updatePos = function (_0x588171) {
          this.position.copyFrom(_0x588171);
          _0x184224.position.copyFrom(_0x588171);
        };
        this.ballTrail.setVisible = function (_0xb95b6c) {
          _0x330af3.setEnabled(_0xb95b6c);
          _0x44e7ec.setEnabled(_0xb95b6c);
          this.setEnabled(_0xb95b6c);
        };
        this.flag = this.scene.getMeshByName("Flag");
        this.flag.material.specularColor = BABYLON.Color3.Black();
        this.water = {
          updateTexture: function () {},
        };
      },
      prepareHole: function () {
        var _0x247499 = "lvl" + this.holeId;
        if (0x1 < this.holeId) {
          var _0x415b38 = wgl.scene.getMeshByName("lvl1-ballpos");
          var _0x1321bf =
            wgl.scene.getMeshByName(_0x247499 + "-ballpos").position.x -
            _0x415b38.position.x;
          this.scene.meshes.forEach(function (_0x2319ff) {
            if (_0x2319ff.name.slice(0x0, 0x4) === _0x247499) {
              _0x2319ff.position.x -= _0x1321bf;
            }
          });
        }
        this.course = this.scene.getMeshByName(_0x247499 + "-grass");
        this.course.setEnabled(true);
        this.course.impostor = new BABYLON.PhysicsAggregate(
          this.course,
          BABYLON.PhysicsShapeType.MESH,
          {
            mass: 0x0,
            restitution: 0.01,
            friction: 0.9,
          },
          wgl.scene
        );
        this.wall = this.scene.getMeshByName(_0x247499 + "-wall");
        this.wall.setEnabled(true);
        this.wall.impostor = new BABYLON.PhysicsAggregate(
          this.wall,
          BABYLON.PhysicsShapeType.MESH,
          {
            mass: 0x0,
            restitution: 0.5,
            friction: 0.3,
          },
          wgl.scene
        );
        this.hole = this.scene.getMeshByName(_0x247499 + "-flag-pos");
        this.hole.setEnabled(false);
        switch (this.holeId) {
          case 0x2:
            if (
              this.flag.rotationQuaternion &&
              0x1 === this.flag.rotationQuaternion.w
            ) {
              this.flag.rotate(
                BABYLON.Axis.Y,
                ig.util.pio2,
                BABYLON.Space.LOCAL
              );
            }
            break;
          default:
            if (
              this.flag.rotationQuaternion &&
              0x1 > this.flag.rotationQuaternion.w
            ) {
              this.flag.rotationQuaternion.set(0x0, 0x0, 0x0, 0x1);
            }
        }
        this.flag.position.copyFrom(this.hole.position);
        this.flag.position.y -= 0.04;
        this.ball.setup(_0x247499);
        this.scene.meshes.forEach(function (_0x8be966) {
          if (_0x8be966.name.includes(_0x247499)) {
            if (_0x8be966.name.includes("coin")) {
              wgl.coins.push(new ig.Coin(_0x8be966));
            } else if (_0x8be966.name.includes("moving")) {
              wgl.movingWalls.push(new ig.MovingWall(_0x8be966));
            }
          }
        });
        if (0x5 < this.holeId) {
          this.water = this.scene.getMeshByName(_0x247499 + "-water");
          this.water.setEnabled(true);
          this.water.visibility = 0.65;
          var _0x377da8 = this.water.material.getActiveTextures()[0x0];
          this.water.updateTexture = function () {
            _0x377da8.uOffset = 0.1 * Math.sin(0.5 * ig.system.clock.delta());
          };
        } else {
          this.water = {
            updateTexture: function () {},
          };
        }
      },
      cleanScene: function () {
        if (this.course) {
          if (this.course.impostor) {
            this.course.impostor.body.dispose();
            this.course.impostor.dispose();
          }
          this.course.setEnabled(false);
        }
        if (this.wall) {
          if (this.wall.impostor) {
            this.wall.impostor.body.dispose();
            this.wall.impostor.dispose();
          }
          this.wall.setEnabled(false);
        }
        this.coins.forEach(function (_0x45681a) {
          _0x45681a.kill();
        });
        this.coins = [];
        this.movingWalls.forEach(function (_0x319960) {
          _0x319960.kill();
        });
        this.movingWalls = [];
        this.scene.meshes.forEach(function (_0x8dad26) {
          if ("lvl" === _0x8dad26.name.slice(0x0, 0x3)) {
            _0x8dad26.setEnabled(false);
          }
        });
      },
      start: function () {
        this.paused = this.over = this.win = false;
        this.cleanScene();
        this.prepareHole();
        this.resetCamera();
      },
      restart: function (_0x2ba0c3, _0x168de2) {
        this.paused = this.over = this.win = false;
        if (!_0x168de2) {
          this.ball.reset();
        }
        if (!_0x2ba0c3) {
          this.coins.forEach(function (_0x403fb2) {
            _0x403fb2.reset();
          });
        }
        this.resetCamera();
      },
      resetCamera: function () {
        this.cameraTarget.copyFrom(this.ball.mesh.position);
        this.cameraTarget.y = this.cameraY0;
        this.cameraTarget.z -= 1.8;
        wgl.scene.activeCamera = this.camera;
        wgl.ballTrail.setVisible(false);
      },
      update: function () {
        TWEEN.update();
        this.speedScale = 0.06 * wgl.engine.getDeltaTime();
        if (this.speedScale > this.maxSpeedScale) {
          this.speedScale = this.maxSpeedScale;
        }
        this.obs.forEach(function (_0x108d55) {
          _0x108d55.update();
        });
        if (!ig.ua.mobile) {
          this.updateWater();
          this.water.updateTexture();
        }
      },
      updateWater: function () {
        var _0x48bb5d = this.waterTexture;
        var _0xc5f20 = 0.00005 * wgl.engine.getDeltaTime();
        _0x48bb5d.uOffset += _0xc5f20;
        if (0x1 < _0x48bb5d.uOffset) {
          _0x48bb5d.uOffset -= 0x1;
        }
      },
      pause: function () {
        this.paused = true;
        this.tweens = TWEEN.getAll();
        this.tweens.forEach(function (_0x57dcaa) {
          _0x57dcaa.pause();
        });
      },
      resume: function () {
        this.paused = false;
        this.tweens.forEach(function (_0x118c93) {
          _0x118c93.resume();
        });
      },
      setupCamera: function () {
        this.camera = this.scene.getCameraByName("Camera");
        this.camera.position.z += 0.8;
        this.camera.position.y = this.cameraY = this.cameraY0;
        this.cameraBase = this.cameraBase0;
        this.cameraTarget = new BABYLON.Vector3();
        this.camera.maxZ = 0x140;
        this.camera.setTarget(this.ball.mesh.position);
      },
      setupEndCamera: function () {
        var _0x5c674b = new BABYLON.FollowCamera("endCam", this.v3, wgl.scene);
        _0x5c674b.cameraAcceleration = 0.015;
        _0x5c674b.radius = 0x2;
        _0x5c674b.heightOffset = 0x3;
        this.endCam = _0x5c674b;
      },
      startShow: function () {
        if (!this.camera) {
          this.setupCamera();
        }
        this.scene.activeCamera = this.camera;
        var _0x14d1a2 = 0x0;
        switch (this.holeId) {
          case 0x2:
            _0x14d1a2 = -0x5;
            break;
          case 0x3:
            _0x14d1a2 = -0x4;
            break;
          case 0x4:
            _0x14d1a2 = -0x3;
            break;
          case 0x6:
            _0x14d1a2 = -0xf;
            break;
          case 0x7:
            _0x14d1a2 = -15.5;
            break;
          case 0x8:
            _0x14d1a2 = -6.5;
        }
        this.cameraTarget.set(_0x14d1a2, 0x10, -0x18);
        _0x14d1a2 = this.scene.getMeshByName("lvl" + this.holeId + "-ballpos");
        this.cameraTarget.subtractToRef(_0x14d1a2.position, wgl.v3);
        wgl.v3.scaleInPlace(0.5);
        wgl.v3.addInPlace(_0x14d1a2.position);
        this.camera.position.copyFrom(wgl.v3);
        this.camera.setTarget(_0x14d1a2.position);
        ig.control.startShowTimer.start();
      },
      endShow: function () {
        wgl.over = this.win = true;
        this.endCam.lockedTarget = this.hole;
        this.endCam.rotationOffset = ig.util.iBetween(0xa, 0x15e);
        this.endCam.position.copyFrom(this.camera.position);
        this.endCam.position.y += 0x1;
        this.endCam.maxCameraSpeed = 0x3;
        this.scene.activeCamera = this.endCam;
        ig.control.overTimer.start();
      },
      worldToScreen: function (_0x1f02de) {
        return BABYLON.Vector3.Project(
          _0x1f02de.position,
          BABYLON.Matrix.Identity(),
          this.scene.getTransformMatrix(),
          this.scene.activeCamera.viewport.toGlobal(
            ig.system.width,
            ig.system.height
          )
        );
      },
    };
  });
ig.baked = true;
ig.module("plugins.splash-loader")
  .requires("impact.loader", "babylon.wgl")
  .defines(function () {
    ig.SplashLoader = ig.Loader.extend({
      tapToStartDivId: "tap-to-start",
      title: new ig.Image("media/graphics/sprites/ui/title.png"),
      bar0: new ig.Image("media/graphics/sprites/ui/bar0.png"),
      bar1: new ig.Image("media/graphics/sprites/ui/bar1.png"),
      checkWGL: false,
      init: function (_0x3f3943, _0x4f44bc) {
        this.parent(_0x3f3943, _0x4f44bc);
        ig.loader = this;
        try {
          $("#ajaxbar").css("background", "none");
        } catch (_0x3c1a83) {}
        ig.apiHandler.run("MJSPreroll");
        wgl.init();
      },
      end: function () {
        this._drawStatus = 0x1;
        this.draw();
        this.checkWGL = true;
      },
      tapToStartDiv: function (_0x487a96) {
        this.desktopCoverDIV = document.getElementById(this.tapToStartDivId);
        if (!this.desktopCoverDIV) {
          this.desktopCoverDIV = document.createElement("div");
          this.desktopCoverDIV.id = this.tapToStartDivId;
          this.desktopCoverDIV.setAttribute("class", "play");
          this.desktopCoverDIV.setAttribute(
            "style",
            "position: absolute; display: block; z-index: 999999; background-color: rgba(23, 32, 53, 0.7); visibility: visible; font-size: 10vmin; text-align: center; vertical-align: middle; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;"
          );
          this.desktopCoverDIV.innerHTML =
            "<div style='color:white;background-color: rgba(255, 255, 255, 0.3); border: 2px solid #fff; font-size:20px; border-radius: 5px; position: relative; float: left; top: 50%; left: 50%; transform: translate(-50%, -50%);'><div style='padding:20px 50px; font-family: montserrat;'>" +
            _STRINGS.Splash.TapToStart +
            "</div></div>";
          (
            document.getElementById("play").parentNode ||
            document.getElementById("ajaxbar")
          ).appendChild(this.desktopCoverDIV);
          try {
            if ("undefined" !== typeof ig.sizeHandler) {
              if ("undefined" !== typeof ig.sizeHandler.coreDivsToResize) {
                ig.sizeHandler.coreDivsToResize.push(
                  "#" + this.tapToStartDivId
                );
                if ("function" === typeof ig.sizeHandler.reorient) {
                  ig.sizeHandler.reorient();
                }
              }
            } else if ("undefined" !== typeof coreDivsToResize) {
              coreDivsToResize.push(this.tapToStartDivId);
              if ("function" === typeof sizeHandler) {
                sizeHandler();
              }
            }
          } catch (_0x13700e) {
            console.log(_0x13700e);
          }
          this.desktopCoverDIV.addEventListener("click", function () {
            ig.soundHandler.unlockWebAudio();
            this.setAttribute("style", "visibility: hidden;");
            if ("function" === typeof _0x487a96) {
              _0x487a96();
            }
          });
        }
      },
      drawCheck: 0x0,
      draw: function () {
        if (this.checkWGL && wgl.ready) {
          this.checkWGL = false;
          clearInterval(this._intervalId);
          if (_SETTINGS.TapToStartAudioUnlock.Enabled) {
            this.tapToStartDiv(function () {
              ig.system.setGame(MyGame);
            });
          } else {
            ig.system.setGame(MyGame);
          }
        } else {
          this._drawStatus += (this.status - this._drawStatus) / 0x5;
          if (0x2 > this.drawCheck) {
            this.drawCheck++;
          }
          this.calPos();
          ig.system.context.fillStyle = "#3f72c4";
          ig.system.context.fillRect(
            0x0,
            0x0,
            ig.system.width,
            ig.system.height
          );
          if (this.bar0.loaded && this.bar1.loaded) {
            var _0x44a64d = (ig.system.width - this.bar0.width) / 0x2;
            var _0x86b5ea = 0.72 * ig.system.height;
            var _0x597200 = this._drawStatus * this.bar1.width;
            var _0x288303 = this.bar1.height;
            this.bar0.draw(_0x44a64d, _0x86b5ea);
            this.bar1.draw(
              _0x44a64d,
              _0x86b5ea,
              0x0,
              0x0,
              _0x597200,
              _0x288303
            );
          }
          this.title.draw(this.titleX, this.titleY);
        }
      },
      calPos: function () {
        this.titleX = (ig.system.width - this.title.width) / 0x2;
        this.titleY = ig.system.height / 0x2 - this.title.height;
      },
    });
  });
ig.baked = true;
ig.module("plugins.tween")
  .requires("impact.entity")
  .defines(function () {
    if (!Array.prototype.indexOf) {
      Array.prototype.indexOf = function (_0x4cec6a) {
        for (var _0x3b44db = 0x0; _0x3b44db < this.length; ++_0x3b44db) {
          if (this[_0x3b44db] === _0x4cec6a) {
            return _0x3b44db;
          }
        }
        return -0x1;
      };
    }
    ig.Entity.prototype.tweens = [];
    ig.Entity.prototype._preTweenUpdate = ig.Entity.prototype.update;
    ig.Entity.prototype.update = function () {
      this._preTweenUpdate();
      if (0x0 < this.tweens.length) {
        var _0x5beb6c = [];
        for (var _0x2c4e31 = 0x0; _0x2c4e31 < this.tweens.length; _0x2c4e31++) {
          this.tweens[_0x2c4e31].update();
          if (!this.tweens[_0x2c4e31].complete) {
            _0x5beb6c.push(this.tweens[_0x2c4e31]);
          }
        }
        this.tweens = _0x5beb6c;
      }
    };
    ig.Entity.prototype.tween = function (_0x499788, _0x81f5b6, _0x58a26a) {
      _0x499788 = new ig.Tween(this, _0x499788, _0x81f5b6, _0x58a26a);
      this.tweens.push(_0x499788);
      return _0x499788;
    };
    ig.Entity.prototype.pauseTweens = function () {
      for (var _0x43d860 = 0x0; _0x43d860 < this.tweens.length; _0x43d860++) {
        this.tweens[_0x43d860].pause();
      }
    };
    ig.Entity.prototype.resumeTweens = function () {
      for (var _0x59a7a3 = 0x0; _0x59a7a3 < this.tweens.length; _0x59a7a3++) {
        this.tweens[_0x59a7a3].resume();
      }
    };
    ig.Entity.prototype.stopTweens = function (_0x3f7214) {
      for (var _0x277df4 = 0x0; _0x277df4 < this.tweens.length; _0x277df4++) {
        this.tweens[_0x277df4].stop(_0x3f7214);
      }
    };
    ig.Tween = function (_0x3c3b40, _0x1effb3, _0x50cb1a, _0xd28e1f) {
      var _0xabace1 = {};
      var _0x355b28 = {};
      var _0x5e554c = {};
      var _0x218011 = 0x0;
      var _0x272e53 = false;
      var _0x26e640 = false;
      var _0x2ffdcc = false;
      this.duration = _0x50cb1a;
      this.paused = this.complete = false;
      this.easing = ig.Tween.Easing.Linear.EaseNone;
      this.onComplete = false;
      this.loop = this.delay = 0x0;
      this.loopCount = -0x1;
      ig.merge(this, _0xd28e1f);
      this.loopNum = this.loopCount;
      this.chain = function (_0x4f2850) {
        _0x2ffdcc = _0x4f2850;
      };
      this.initEnd = function (_0x395c8a, _0x5b7ecb, _0x23a9ec) {
        if ("object" !== typeof _0x5b7ecb[_0x395c8a]) {
          _0x23a9ec[_0x395c8a] = _0x5b7ecb[_0x395c8a];
        } else {
          for (subprop in _0x5b7ecb[_0x395c8a]) {
            if (!_0x23a9ec[_0x395c8a]) {
              _0x23a9ec[_0x395c8a] = {};
            }
            this.initEnd(subprop, _0x5b7ecb[_0x395c8a], _0x23a9ec[_0x395c8a]);
          }
        }
      };
      this.initStart = function (_0x4618f9, _0x34d97c, _0xc48a38, _0x2bce46) {
        if ("object" !== typeof _0xc48a38[_0x4618f9]) {
          if ("undefined" !== typeof _0x34d97c[_0x4618f9]) {
            _0x2bce46[_0x4618f9] = _0xc48a38[_0x4618f9];
          }
        } else {
          for (subprop in _0xc48a38[_0x4618f9]) {
            if (!_0x2bce46[_0x4618f9]) {
              _0x2bce46[_0x4618f9] = {};
            }
            if ("undefined" !== typeof _0x34d97c[_0x4618f9]) {
              this.initStart(
                subprop,
                _0x34d97c[_0x4618f9],
                _0xc48a38[_0x4618f9],
                _0x2bce46[_0x4618f9]
              );
            }
          }
        }
      };
      this.start = function () {
        this.paused = this.complete = false;
        this.loopNum = this.loopCount;
        _0x218011 = 0x0;
        if (-0x1 == _0x3c3b40.tweens.indexOf(this)) {
          _0x3c3b40.tweens.push(this);
        }
        _0x26e640 = true;
        _0x272e53 = new ig.Timer();
        for (var _0x292e30 in _0x1effb3)
          this.initEnd(_0x292e30, _0x1effb3, _0x355b28);
        for (_0x292e30 in _0x355b28) {
          this.initStart(_0x292e30, _0x355b28, _0x3c3b40, _0xabace1);
          this.initDelta(_0x292e30, _0x5e554c, _0x3c3b40, _0x355b28);
        }
      };
      this.initDelta = function (_0x33f4a8, _0x50ce57, _0x57cc56, _0x552bb6) {
        if ("object" !== typeof _0x552bb6[_0x33f4a8]) {
          _0x50ce57[_0x33f4a8] = _0x552bb6[_0x33f4a8] - _0x57cc56[_0x33f4a8];
        } else {
          for (subprop in _0x552bb6[_0x33f4a8]) {
            if (!_0x50ce57[_0x33f4a8]) {
              _0x50ce57[_0x33f4a8] = {};
            }
            this.initDelta(
              subprop,
              _0x50ce57[_0x33f4a8],
              _0x57cc56[_0x33f4a8],
              _0x552bb6[_0x33f4a8]
            );
          }
        }
      };
      this.propUpdate = function (
        _0x54fe78,
        _0x7176a4,
        _0x5b6f13,
        _0x492d8d,
        _0x4a4aca
      ) {
        if ("object" !== typeof _0x5b6f13[_0x54fe78]) {
          _0x7176a4[_0x54fe78] =
            "undefined" != typeof _0x5b6f13[_0x54fe78]
              ? _0x5b6f13[_0x54fe78] + _0x492d8d[_0x54fe78] * _0x4a4aca
              : _0x7176a4[_0x54fe78];
        } else {
          for (subprop in _0x5b6f13[_0x54fe78])
            this.propUpdate(
              subprop,
              _0x7176a4[_0x54fe78],
              _0x5b6f13[_0x54fe78],
              _0x492d8d[_0x54fe78],
              _0x4a4aca
            );
        }
      };
      this.propSet = function (_0x14c269, _0x5892e8, _0x2e0abc) {
        if ("object" !== typeof _0x5892e8[_0x14c269]) {
          _0x2e0abc[_0x14c269] = _0x5892e8[_0x14c269];
        } else {
          for (subprop in _0x5892e8[_0x14c269]) {
            if (!_0x2e0abc[_0x14c269]) {
              _0x2e0abc[_0x14c269] = {};
            }
            this.propSet(subprop, _0x5892e8[_0x14c269], _0x2e0abc[_0x14c269]);
          }
        }
      };
      this.update = function () {
        if (!_0x26e640) {
          return false;
        }
        if (this.delay) {
          if (_0x272e53.delta() < this.delay) {
            return;
          }
          this.delay = 0x0;
          _0x272e53.reset();
        }
        if (this.paused || this.complete) {
          return false;
        }
        var _0xdf5c8c = (_0x272e53.delta() + _0x218011) / this.duration;
        var _0xdf5c8c = 0x1 < _0xdf5c8c ? 0x1 : _0xdf5c8c;
        var _0xca973f = this.easing(_0xdf5c8c);
        for (property in _0x5e554c)
          this.propUpdate(property, _0x3c3b40, _0xabace1, _0x5e554c, _0xca973f);
        if (0x1 <= _0xdf5c8c) {
          if (0x0 == this.loopNum || !this.loop) {
            this.complete = true;
            if (this.onComplete) {
              this.onComplete();
            }
            if (_0x2ffdcc) {
              _0x2ffdcc.start();
            }
            return false;
          }
          if (this.loop == ig.Tween.Loop.Revert) {
            for (property in _0xabace1)
              this.propSet(property, _0xabace1, _0x3c3b40);
            _0x218011 = 0x0;
            _0x272e53.reset();
            if (-0x1 != this.loopNum) {
              this.loopNum--;
            }
          } else {
            if (this.loop == ig.Tween.Loop.Reverse) {
              _0xdf5c8c = {};
              _0xca973f = {};
              ig.merge(_0xdf5c8c, _0x355b28);
              ig.merge(_0xca973f, _0xabace1);
              ig.merge(_0xabace1, _0xdf5c8c);
              ig.merge(_0x355b28, _0xca973f);
              for (property in _0x355b28)
                this.initDelta(property, _0x5e554c, _0x3c3b40, _0x355b28);
              _0x218011 = 0x0;
              _0x272e53.reset();
              if (-0x1 != this.loopNum) {
                this.loopNum--;
              }
            }
          }
        }
      };
      this.pause = function () {
        this.paused = true;
        if (_0x272e53 && _0x272e53.delta) {
          _0x218011 += _0x272e53.delta();
        }
      };
      this.resume = function () {
        this.paused = false;
        if (_0x272e53 && _0x272e53.reset) {
          _0x272e53.reset();
        }
      };
      this.stop = function (_0x5ddd24) {
        if (_0x5ddd24) {
          this.loop = this.complete = this.paused = false;
          _0x218011 += _0x50cb1a;
          this.update();
        }
        this.complete = true;
      };
    };
    ig.Tween.Loop = {
      Revert: 0x1,
      Reverse: 0x2,
    };
    ig.Tween.Easing = {
      Linear: {},
      Quadratic: {},
      Cubic: {},
      Quartic: {},
      Quintic: {},
      Sinusoidal: {},
      Exponential: {},
      Circular: {},
      Elastic: {},
      Back: {},
      Bounce: {},
    };
    ig.Tween.Easing.Linear.EaseNone = function (_0x5c8fa8) {
      return _0x5c8fa8;
    };
    ig.Tween.Easing.Quadratic.EaseIn = function (_0x180e84) {
      return _0x180e84 * _0x180e84;
    };
    ig.Tween.Easing.Quadratic.EaseOut = function (_0x4214a3) {
      return -_0x4214a3 * (_0x4214a3 - 0x2);
    };
    ig.Tween.Easing.Quadratic.EaseInOut = function (_0x163d4b) {
      return 0x1 > (_0x163d4b *= 0x2)
        ? 0.5 * _0x163d4b * _0x163d4b
        : -0.5 * (--_0x163d4b * (_0x163d4b - 0x2) - 0x1);
    };
    ig.Tween.Easing.Cubic.EaseIn = function (_0x5bad10) {
      return _0x5bad10 * _0x5bad10 * _0x5bad10;
    };
    ig.Tween.Easing.Cubic.EaseOut = function (_0x2ca741) {
      return --_0x2ca741 * _0x2ca741 * _0x2ca741 + 0x1;
    };
    ig.Tween.Easing.Cubic.EaseInOut = function (_0x4a2fc1) {
      return 0x1 > (_0x4a2fc1 *= 0x2)
        ? 0.5 * _0x4a2fc1 * _0x4a2fc1 * _0x4a2fc1
        : 0.5 * ((_0x4a2fc1 -= 0x2) * _0x4a2fc1 * _0x4a2fc1 + 0x2);
    };
    ig.Tween.Easing.Quartic.EaseIn = function (_0x4c1122) {
      return _0x4c1122 * _0x4c1122 * _0x4c1122 * _0x4c1122;
    };
    ig.Tween.Easing.Quartic.EaseOut = function (_0x4c0f66) {
      return -(--_0x4c0f66 * _0x4c0f66 * _0x4c0f66 * _0x4c0f66 - 0x1);
    };
    ig.Tween.Easing.Quartic.EaseInOut = function (_0x2fbd65) {
      return 0x1 > (_0x2fbd65 *= 0x2)
        ? 0.5 * _0x2fbd65 * _0x2fbd65 * _0x2fbd65 * _0x2fbd65
        : -0.5 * ((_0x2fbd65 -= 0x2) * _0x2fbd65 * _0x2fbd65 * _0x2fbd65 - 0x2);
    };
    ig.Tween.Easing.Quintic.EaseIn = function (_0x38246f) {
      return _0x38246f * _0x38246f * _0x38246f * _0x38246f * _0x38246f;
    };
    ig.Tween.Easing.Quintic.EaseOut = function (_0x1078b8) {
      return (
        (_0x1078b8 -= 0x1) * _0x1078b8 * _0x1078b8 * _0x1078b8 * _0x1078b8 + 0x1
      );
    };
    ig.Tween.Easing.Quintic.EaseInOut = function (_0xd99a53) {
      return 0x1 > (_0xd99a53 *= 0x2)
        ? 0.5 * _0xd99a53 * _0xd99a53 * _0xd99a53 * _0xd99a53 * _0xd99a53
        : 0.5 *
            ((_0xd99a53 -= 0x2) *
              _0xd99a53 *
              _0xd99a53 *
              _0xd99a53 *
              _0xd99a53 +
              0x2);
    };
    ig.Tween.Easing.Sinusoidal.EaseIn = function (_0xf1ac51) {
      return -Math.cos((_0xf1ac51 * Math.PI) / 0x2) + 0x1;
    };
    ig.Tween.Easing.Sinusoidal.EaseOut = function (_0x43d1d1) {
      return Math.sin((_0x43d1d1 * Math.PI) / 0x2);
    };
    ig.Tween.Easing.Sinusoidal.EaseInOut = function (_0x21ce1b) {
      return -0.5 * (Math.cos(Math.PI * _0x21ce1b) - 0x1);
    };
    ig.Tween.Easing.Exponential.EaseIn = function (_0x490f07) {
      return 0x0 == _0x490f07 ? 0x0 : Math.pow(0x2, 0xa * (_0x490f07 - 0x1));
    };
    ig.Tween.Easing.Exponential.EaseOut = function (_0x5ed07f) {
      return 0x1 == _0x5ed07f ? 0x1 : -Math.pow(0x2, -0xa * _0x5ed07f) + 0x1;
    };
    ig.Tween.Easing.Exponential.EaseInOut = function (_0x37b8d4) {
      return 0x0 == _0x37b8d4
        ? 0x0
        : 0x1 == _0x37b8d4
        ? 0x1
        : 0x1 > (_0x37b8d4 *= 0x2)
        ? 0.5 * Math.pow(0x2, 0xa * (_0x37b8d4 - 0x1))
        : 0.5 * (-Math.pow(0x2, -0xa * (_0x37b8d4 - 0x1)) + 0x2);
    };
    ig.Tween.Easing.Circular.EaseIn = function (_0x370662) {
      return -(Math.sqrt(0x1 - _0x370662 * _0x370662) - 0x1);
    };
    ig.Tween.Easing.Circular.EaseOut = function (_0x5a0908) {
      return Math.sqrt(0x1 - --_0x5a0908 * _0x5a0908);
    };
    ig.Tween.Easing.Circular.EaseInOut = function (_0x4d3767) {
      return 0x1 > (_0x4d3767 /= 0.5)
        ? -0.5 * (Math.sqrt(0x1 - _0x4d3767 * _0x4d3767) - 0x1)
        : 0.5 * (Math.sqrt(0x1 - (_0x4d3767 -= 0x2) * _0x4d3767) + 0x1);
    };
    ig.Tween.Easing.Elastic.EaseIn = function (_0x54fac4) {
      var _0x2832c4;
      var _0x2b76d4 = 0.1;
      var _0xbe4454 = 0.4;
      if (0x0 == _0x54fac4) {
        return 0x0;
      }
      if (0x1 == _0x54fac4) {
        return 0x1;
      }
      if (!_0xbe4454) {
        _0xbe4454 = 0.3;
      }
      if (!_0x2b76d4 || 0x1 > _0x2b76d4) {
        _0x2b76d4 = 0x1;
        _0x2832c4 = _0xbe4454 / 0x4;
      } else {
        _0x2832c4 = (_0xbe4454 / (0x2 * Math.PI)) * Math.asin(0x1 / _0x2b76d4);
      }
      return -(
        _0x2b76d4 *
        Math.pow(0x2, 0xa * (_0x54fac4 -= 0x1)) *
        Math.sin((0x2 * (_0x54fac4 - _0x2832c4) * Math.PI) / _0xbe4454)
      );
    };
    ig.Tween.Easing.Elastic.EaseOut = function (_0x345155) {
      var _0x39601a;
      var _0x237c9d = 0.1;
      var _0x2eef2c = 0.4;
      if (0x0 == _0x345155) {
        return 0x0;
      }
      if (0x1 == _0x345155) {
        return 0x1;
      }
      if (!_0x2eef2c) {
        _0x2eef2c = 0.3;
      }
      if (!_0x237c9d || 0x1 > _0x237c9d) {
        _0x237c9d = 0x1;
        _0x39601a = _0x2eef2c / 0x4;
      } else {
        _0x39601a = (_0x2eef2c / (0x2 * Math.PI)) * Math.asin(0x1 / _0x237c9d);
      }
      return (
        _0x237c9d *
          Math.pow(0x2, -0xa * _0x345155) *
          Math.sin((0x2 * (_0x345155 - _0x39601a) * Math.PI) / _0x2eef2c) +
        0x1
      );
    };
    ig.Tween.Easing.Elastic.EaseInOut = function (_0x5396dc) {
      var _0x28a54b;
      var _0x484ec3 = 0.1;
      var _0x402cfa = 0.4;
      if (0x0 == _0x5396dc) {
        return 0x0;
      }
      if (0x1 == _0x5396dc) {
        return 0x1;
      }
      if (!_0x402cfa) {
        _0x402cfa = 0.3;
      }
      if (!_0x484ec3 || 0x1 > _0x484ec3) {
        _0x484ec3 = 0x1;
        _0x28a54b = _0x402cfa / 0x4;
      } else {
        _0x28a54b = (_0x402cfa / (0x2 * Math.PI)) * Math.asin(0x1 / _0x484ec3);
      }
      return 0x1 > (_0x5396dc *= 0x2)
        ? -0.5 *
            _0x484ec3 *
            Math.pow(0x2, 0xa * (_0x5396dc -= 0x1)) *
            Math.sin((0x2 * (_0x5396dc - _0x28a54b) * Math.PI) / _0x402cfa)
        : 0.5 *
            _0x484ec3 *
            Math.pow(0x2, -0xa * (_0x5396dc -= 0x1)) *
            Math.sin((0x2 * (_0x5396dc - _0x28a54b) * Math.PI) / _0x402cfa) +
            0x1;
    };
    ig.Tween.Easing.Back.EaseIn = function (_0x129248) {
      return _0x129248 * _0x129248 * (2.70158 * _0x129248 - 1.70158);
    };
    ig.Tween.Easing.Back.EaseOut = function (_0x382527) {
      return (
        (_0x382527 -= 0x1) * _0x382527 * (2.70158 * _0x382527 + 1.70158) + 0x1
      );
    };
    ig.Tween.Easing.Back.EaseInOut = function (_0xc83c19) {
      return 0x1 > (_0xc83c19 *= 0x2)
        ? 0.5 * _0xc83c19 * _0xc83c19 * (3.5949095 * _0xc83c19 - 2.5949095)
        : 0.5 *
            ((_0xc83c19 -= 0x2) *
              _0xc83c19 *
              (3.5949095 * _0xc83c19 + 2.5949095) +
              0x2);
    };
    ig.Tween.Easing.Bounce.EaseIn = function (_0x4ab198) {
      return 0x1 - ig.Tween.Easing.Bounce.EaseOut(0x1 - _0x4ab198);
    };
    ig.Tween.Easing.Bounce.EaseOut = function (_0x513af3) {
      return (_0x513af3 /= 0x1) < 0.36363636363636365
        ? 7.5625 * _0x513af3 * _0x513af3
        : _0x513af3 < 0.7272727272727273
        ? 7.5625 * (_0x513af3 -= 0.5454545454545454) * _0x513af3 + 0.75
        : _0x513af3 < 0.9090909090909091
        ? 7.5625 * (_0x513af3 -= 0.8181818181818182) * _0x513af3 + 0.9375
        : 7.5625 * (_0x513af3 -= 0.9545454545454546) * _0x513af3 + 0.984375;
    };
    ig.Tween.Easing.Bounce.EaseInOut = function (_0x48f67e) {
      return 0.5 > _0x48f67e
        ? 0.5 * ig.Tween.Easing.Bounce.EaseIn(0x2 * _0x48f67e)
        : 0.5 * ig.Tween.Easing.Bounce.EaseOut(0x2 * _0x48f67e - 0x1) + 0.5;
    };
    ig.Tween.Interpolation = {
      Linear: function (_0xe8d9dc, _0x15e09e) {
        var _0xf283eb = _0xe8d9dc.length - 0x1;
        var _0x246896 = _0xf283eb * _0x15e09e;
        var _0x4161f1 = Math.floor(_0x246896);
        var _0x48dc0e = TWEEN.Interpolation.Utils.Linear;
        return 0x0 > _0x15e09e
          ? _0x48dc0e(_0xe8d9dc[0x0], _0xe8d9dc[0x1], _0x246896)
          : 0x1 < _0x15e09e
          ? _0x48dc0e(
              _0xe8d9dc[_0xf283eb],
              _0xe8d9dc[_0xf283eb - 0x1],
              _0xf283eb - _0x246896
            )
          : _0x48dc0e(
              _0xe8d9dc[_0x4161f1],
              _0xe8d9dc[
                _0x4161f1 + 0x1 > _0xf283eb ? _0xf283eb : _0x4161f1 + 0x1
              ],
              _0x246896 - _0x4161f1
            );
      },
    };
  });
ig.baked = true;
ig.module("plugins.patches.entity-patch")
  .requires("impact.entity")
  .defines(function () {
    ig.Entity.inject({
      handleMovementTrace: function (_0x2a5fbf) {
        this.standing = false;
        if (_0x2a5fbf.collision.y) {
          if (
            0x0 < this.bounciness &&
            Math.abs(this.vel.y) > this.minBounceVelocity
          ) {
            this.vel.y *= -this.bounciness;
          } else {
            if (0x0 < this.vel.y) {
              this.standing = true;
            }
            this.vel.y = 0x0;
          }
        }
        if (_0x2a5fbf.collision.x) {
          this.vel.x =
            0x0 < this.bounciness &&
            Math.abs(this.vel.x) > this.minBounceVelocity
              ? this.vel.x * -this.bounciness
              : 0x0;
        }
        if (_0x2a5fbf.collision.slope) {
          var _0x4e1eac = _0x2a5fbf.collision.slope;
          if (0x0 < this.bounciness) {
            var _0x4136de =
              this.vel.x * _0x4e1eac.nx + this.vel.y * _0x4e1eac.ny;
            this.vel.x =
              (this.vel.x - 0x2 * _0x4e1eac.nx * _0x4136de) * this.bounciness;
            this.vel.y =
              (this.vel.y - 0x2 * _0x4e1eac.ny * _0x4136de) * this.bounciness;
          } else {
            _0x4136de =
              (this.vel.x * _0x4e1eac.x + this.vel.y * _0x4e1eac.y) /
              (_0x4e1eac.x * _0x4e1eac.x + _0x4e1eac.y * _0x4e1eac.y);
            this.vel.x = _0x4e1eac.x * _0x4136de;
            this.vel.y = _0x4e1eac.y * _0x4136de;
            _0x4e1eac = Math.atan2(_0x4e1eac.x, _0x4e1eac.y);
            if (
              _0x4e1eac > this.slopeStanding.min &&
              _0x4e1eac < this.slopeStanding.max
            ) {
              this.standing = true;
            }
          }
        }
        this.pos.x = _0x2a5fbf.pos.x;
        this.pos.y = _0x2a5fbf.pos.y;
      },
    });
  });
ig.baked = true;
ig.module("plugins.tweens-handler")
  .requires("impact.entity", "plugins.tween", "plugins.patches.entity-patch")
  .defines(function () {
    if (!Array.prototype.indexOf) {
      Array.prototype.indexOf = function (_0xe726df) {
        for (var _0x36a251 = 0x0; _0x36a251 < this.length; ++_0x36a251) {
          if (this[_0x36a251] === _0xe726df) {
            return _0x36a251;
          }
        }
        return -0x1;
      };
    }
    ig.TweensHandler = ig.Class.extend({
      _tweens: [],
      _systemPausedTweens: [],
      init: function () {},
      getAll: function () {
        return this._tweens;
      },
      removeAll: function () {
        this._tweens = [];
      },
      add: function (_0xa795ff) {
        this._tweens.push(_0xa795ff);
      },
      remove: function (_0x5f2c64) {
        _0x5f2c64 = this._tweens.indexOf(_0x5f2c64);
        if (-0x1 !== _0x5f2c64) {
          this._tweens.splice(_0x5f2c64, 0x1);
        }
      },
      onSystemPause: function () {
        if (0x0 === this._tweens.length) {
          return false;
        }
        var _0x5297ed = 0x0;
        for (var _0x1bcb73 = null; _0x5297ed < this._tweens.length; ) {
          _0x1bcb73 = this._tweens[_0x5297ed];
          if (_0x1bcb73._isPlaying) {
            this._systemPausedTweens.push(_0x1bcb73);
            _0x1bcb73.pause();
          }
          _0x5297ed++;
        }
        return true;
      },
      onSystemResume: function () {
        if (0x0 === this._systemPausedTweens.length) {
          return false;
        }
        for (
          var _0xf2f1ac = 0x0;
          _0xf2f1ac < this._systemPausedTweens.length;

        ) {
          this._systemPausedTweens[_0xf2f1ac].resume();
          _0xf2f1ac++;
        }
        this._systemPausedTweens = [];
        return true;
      },
      update: function (_0x138db2) {
        if (0x0 === this._tweens.length) {
          return false;
        }
        var _0x3203ef = 0x0;
        for (
          _0x138db2 =
            undefined !== _0x138db2 ? _0x138db2 : ig.game.tweens.now();
          _0x3203ef < this._tweens.length;

        ) {
          if (
            this._tweens[_0x3203ef].update(_0x138db2) ||
            this._tweens[_0x3203ef].preserved
          ) {
            _0x3203ef++;
          } else {
            this._tweens.splice(_0x3203ef, 0x1);
          }
        }
        return true;
      },
      now: function () {
        return Date.now();
      },
    });
    ig.TweenDef = ig.Class.extend({
      _ent: null,
      preserved: false,
      _valuesStart: {},
      _valuesEnd: {},
      _valuesStartRepeat: {},
      _duration: 0x3e8,
      _repeat: 0x0,
      _yoyo: false,
      _isPlaying: false,
      _reversed: false,
      _delayTime: 0x0,
      _startTime: null,
      _pauseTime: null,
      _easingFunction: ig.Tween.Easing.Linear.EaseNone,
      _interpolationFunction: ig.Tween.Interpolation.Linear,
      _chainedTweens: [],
      _onStartCallback: null,
      _onStartCallbackFired: false,
      _onUpdateCallback: null,
      _onCompleteCallback: null,
      _onStopCallback: null,
      _onPauseCallback: null,
      _onResumeCallback: null,
      _currentElapsed: 0x0,
      init: function (_0x228209) {
        this._object = _0x228209;
      },
      to: function (_0x118cb5, _0x479232) {
        this._valuesEnd = _0x118cb5;
        if (undefined !== _0x479232) {
          this._duration = _0x479232;
        }
        return this;
      },
      start: function (_0x3abb45) {
        if (this._isPlaying) {
          return this;
        }
        ig.game.tweens.add(this);
        this._isPlaying = true;
        this._onStartCallbackFired = false;
        this._startTime =
          undefined !== _0x3abb45 ? _0x3abb45 : ig.game.tweens.now();
        this._startTime += this._delayTime;
        for (var _0x95f17d in this._valuesEnd) {
          if (this._valuesEnd[_0x95f17d] instanceof Array) {
            if (0x0 === this._valuesEnd[_0x95f17d].length) {
              continue;
            }
            this._valuesEnd[_0x95f17d] = [this._object[_0x95f17d]].concat(
              this._valuesEnd[_0x95f17d]
            );
          }
          if (undefined !== this._object[_0x95f17d]) {
            this._valuesStart[_0x95f17d] = this._object[_0x95f17d];
            if (false === this._valuesStart[_0x95f17d] instanceof Array) {
              this._valuesStart[_0x95f17d] *= 0x1;
            }
            this._valuesStartRepeat[_0x95f17d] =
              this._valuesStart[_0x95f17d] || 0x0;
          }
        }
        return this;
      },
      set: function (_0x17ad50) {
        ig.merge(this, _0x17ad50);
        return this;
      },
      stop: function () {
        if (!this._isPlaying) {
          return this;
        }
        ig.game.tweens.remove(this);
        this._isPlaying = false;
        if (null !== this._onStopCallback) {
          this._onStopCallback.call(this._object, this._object);
        }
        this.stopChainedTweens();
        return this;
      },
      pause: function () {
        if (!this._isPlaying) {
          return this;
        }
        ig.game.tweens.remove(this);
        this._isPlaying = false;
        this._pauseTime = ig.game.tweens.now();
        if (null !== this._onPauseCallback) {
          this._onPauseCallback.call(this._object, this._object);
        }
        return this;
      },
      resume: function () {
        if (this._isPlaying || !this._pauseTime) {
          return this;
        }
        var _0x253937 = ig.game.tweens.now() - this._pauseTime;
        this._startTime += _0x253937;
        ig.game.tweens.add(this);
        this._isPlaying = true;
        if (null !== this._onResumeCallback) {
          this._onResumeCallback.call(this._object, this._object);
        }
        this._pauseTime = null;
        return this;
      },
      end: function () {
        this.update(this._startTime + this._duration);
        return this;
      },
      stopChainedTweens: function () {
        var _0x167f77 = 0x0;
        for (
          var _0x2ca39f = this._chainedTweens.length;
          _0x167f77 < _0x2ca39f;
          _0x167f77++
        ) {
          this._chainedTweens[_0x167f77].stop();
        }
      },
      delay: function (_0x1b6d82) {
        this._delayTime = _0x1b6d82;
        return this;
      },
      repeat: function (_0x25d8cd) {
        this._repeat = _0x25d8cd;
        return this;
      },
      repeatDelay: function (_0x3e4d9f) {
        this._repeatDelayTime = _0x3e4d9f;
        return this;
      },
      yoyo: function (_0x296033) {
        this._yoyo = _0x296033;
        return this;
      },
      easing: function (_0x345ed8) {
        this._easingFunction = _0x345ed8;
        return this;
      },
      interpolation: function (_0x23ab38) {
        this._interpolationFunction = _0x23ab38;
        return this;
      },
      chain: function () {
        this._chainedTweens = arguments;
        return this;
      },
      onStart: function (_0x3eadb0) {
        this._onStartCallback = _0x3eadb0;
        return this;
      },
      onUpdate: function (_0x5c7d6d) {
        this._onUpdateCallback = _0x5c7d6d;
        return this;
      },
      onComplete: function (_0x486b46) {
        this._onCompleteCallback = _0x486b46;
        return this;
      },
      onStop: function (_0x3e01bb) {
        this._onStopCallback = _0x3e01bb;
        return this;
      },
      onPause: function (_0x2e34dd) {
        this._onPauseCallback = _0x2e34dd;
        return this;
      },
      onResume: function (_0x5b5aa1) {
        this._onResumeCallback = _0x5b5aa1;
        return this;
      },
      update: function (_0x182f9e) {
        var _0x3fd2ea;
        var _0x1e8f54;
        var _0x42ea7d;
        if (_0x182f9e < this._startTime) {
          return true;
        }
        if (false === this._onStartCallbackFired) {
          if (null !== this._onStartCallback) {
            this._onStartCallback.call(this._object, this._object);
          }
          this._onStartCallbackFired = true;
        }
        _0x1e8f54 = (_0x182f9e - this._startTime) / this._duration;
        this._currentElapsed = _0x1e8f54 = 0x1 < _0x1e8f54 ? 0x1 : _0x1e8f54;
        _0x42ea7d = this._easingFunction(_0x1e8f54);
        for (_0x3fd2ea in this._valuesEnd)
          if (undefined !== this._valuesStart[_0x3fd2ea]) {
            var _0x3f12cd = this._valuesStart[_0x3fd2ea] || 0x0;
            var _0x800b02 = this._valuesEnd[_0x3fd2ea];
            if (_0x800b02 instanceof Array) {
              this._object[_0x3fd2ea] = this._interpolationFunction(
                _0x800b02,
                _0x42ea7d
              );
            } else {
              if ("string" === typeof _0x800b02) {
                _0x800b02 =
                  "+" === _0x800b02.charAt(0x0) || "-" === _0x800b02.charAt(0x0)
                    ? _0x3f12cd + parseFloat(_0x800b02)
                    : parseFloat(_0x800b02);
              }
              if ("number" === typeof _0x800b02) {
                this._object[_0x3fd2ea] =
                  _0x3f12cd + (_0x800b02 - _0x3f12cd) * _0x42ea7d;
              }
            }
          }
        if (null !== this._onUpdateCallback) {
          this._onUpdateCallback.call(this._object, this._object, _0x42ea7d);
        }
        if (0x1 === _0x1e8f54) {
          if (0x0 < this._repeat) {
            if (isFinite(this._repeat)) {
              this._repeat--;
            }
            for (_0x3fd2ea in this._valuesStartRepeat) {
              if ("string" === typeof this._valuesEnd[_0x3fd2ea]) {
                this._valuesStartRepeat[_0x3fd2ea] =
                  _valuesStartRepeat[_0x3fd2ea] +
                  parseFloat(_valuesEnd[_0x3fd2ea]);
              }
              if (this._yoyo) {
                _0x1e8f54 = this._valuesStartRepeat[_0x3fd2ea];
                this._valuesStartRepeat[_0x3fd2ea] = this._valuesEnd[_0x3fd2ea];
                this._valuesEnd[_0x3fd2ea] = _0x1e8f54;
              }
              this._valuesStart[_0x3fd2ea] = this._valuesStartRepeat[_0x3fd2ea];
            }
            if (this._yoyo) {
              this._reversed = !this._reversed;
            }
            this._startTime =
              undefined !== this._repeatDelayTime
                ? _0x182f9e + this._repeatDelayTime
                : _0x182f9e + this._delayTime;
          } else {
            if (null !== this._onCompleteCallback) {
              this._onCompleteCallback.call(this._object, this._object);
            }
            _0x182f9e = 0x0;
            for (
              _0x3fd2ea = this._chainedTweens.length;
              _0x182f9e < _0x3fd2ea;
              _0x182f9e++
            ) {
              this._chainedTweens[_0x182f9e].start(
                this._startTime + this._duration
              );
            }
            return false;
          }
        }
        return true;
      },
    });
    var _0xb32dcb = [0x1];
    ig.Tween.Interpolation = {
      Linear: function (_0xb3d23c, _0x88fed8) {
        var _0x49197e = _0xb3d23c.length - 0x1;
        var _0x53d330 = _0x49197e * _0x88fed8;
        var _0x18bd26 = Math.floor(_0x53d330);
        var _0x27662a = ig.Tween.Interpolation.Utils.Linear;
        return 0x0 > _0x88fed8
          ? _0x27662a(_0xb3d23c[0x0], _0xb3d23c[0x1], _0x53d330)
          : 0x1 < _0x88fed8
          ? _0x27662a(
              _0xb3d23c[_0x49197e],
              _0xb3d23c[_0x49197e - 0x1],
              _0x49197e - _0x53d330
            )
          : _0x27662a(
              _0xb3d23c[_0x18bd26],
              _0xb3d23c[
                _0x18bd26 + 0x1 > _0x49197e ? _0x49197e : _0x18bd26 + 0x1
              ],
              _0x53d330 - _0x18bd26
            );
      },
      Bezier: function (_0x4e98d6, _0x117c87) {
        var _0x37a69f = 0x0;
        var _0x36309f = _0x4e98d6.length - 0x1;
        var _0x31c198 = Math.pow;
        var _0x1a100c = ig.Tween.Interpolation.Utils.Bernstein;
        for (var _0x4a5da8 = 0x0; _0x4a5da8 <= _0x36309f; _0x4a5da8++) {
          _0x37a69f +=
            _0x31c198(0x1 - _0x117c87, _0x36309f - _0x4a5da8) *
            _0x31c198(_0x117c87, _0x4a5da8) *
            _0x4e98d6[_0x4a5da8] *
            _0x1a100c(_0x36309f, _0x4a5da8);
        }
        return _0x37a69f;
      },
      CatmullRom: function (_0x2bb630, _0x40c87d) {
        var _0x439c87 = _0x2bb630.length - 0x1;
        var _0x4d0a3e = _0x439c87 * _0x40c87d;
        var _0x5ce144 = Math.floor(_0x4d0a3e);
        var _0x25d173 = ig.Tween.Interpolation.Utils.CatmullRom;
        return _0x2bb630[0x0] === _0x2bb630[_0x439c87]
          ? (0x0 > _0x40c87d &&
              (_0x5ce144 = Math.floor(
                (_0x4d0a3e = _0x439c87 * (0x1 + _0x40c87d))
              )),
            _0x25d173(
              _0x2bb630[(_0x5ce144 - 0x1 + _0x439c87) % _0x439c87],
              _0x2bb630[_0x5ce144],
              _0x2bb630[(_0x5ce144 + 0x1) % _0x439c87],
              _0x2bb630[(_0x5ce144 + 0x2) % _0x439c87],
              _0x4d0a3e - _0x5ce144
            ))
          : 0x0 > _0x40c87d
          ? _0x2bb630[0x0] -
            (_0x25d173(
              _0x2bb630[0x0],
              _0x2bb630[0x0],
              _0x2bb630[0x1],
              _0x2bb630[0x1],
              -_0x4d0a3e
            ) -
              _0x2bb630[0x0])
          : 0x1 < _0x40c87d
          ? _0x2bb630[_0x439c87] -
            (_0x25d173(
              _0x2bb630[_0x439c87],
              _0x2bb630[_0x439c87],
              _0x2bb630[_0x439c87 - 0x1],
              _0x2bb630[_0x439c87 - 0x1],
              _0x4d0a3e - _0x439c87
            ) -
              _0x2bb630[_0x439c87])
          : _0x25d173(
              _0x2bb630[_0x5ce144 ? _0x5ce144 - 0x1 : 0x0],
              _0x2bb630[_0x5ce144],
              _0x2bb630[
                _0x439c87 < _0x5ce144 + 0x1 ? _0x439c87 : _0x5ce144 + 0x1
              ],
              _0x2bb630[
                _0x439c87 < _0x5ce144 + 0x2 ? _0x439c87 : _0x5ce144 + 0x2
              ],
              _0x4d0a3e - _0x5ce144
            );
      },
      Utils: {
        Linear: function (_0x66a05d, _0x4fa2c0, _0xf964c1) {
          return (_0x4fa2c0 - _0x66a05d) * _0xf964c1 + _0x66a05d;
        },
        Bernstein: function (_0x1c42be, _0x4fa0ea) {
          var _0x47d0e0 = ig.Tween.Interpolation.Utils.Factorial;
          return (
            _0x47d0e0(_0x1c42be) /
            _0x47d0e0(_0x4fa0ea) /
            _0x47d0e0(_0x1c42be - _0x4fa0ea)
          );
        },
        Factorial: function (_0x396057) {
          var _0x389078 = 0x1;
          if (_0xb32dcb[_0x396057]) {
            return _0xb32dcb[_0x396057];
          }
          for (var _0x444027 = _0x396057; 0x1 < _0x444027; _0x444027--) {
            _0x389078 *= _0x444027;
          }
          return (_0xb32dcb[_0x396057] = _0x389078);
        },
        CatmullRom: function (
          _0xff7cff,
          _0x27c8db,
          _0x31ac89,
          _0xf4e8dc,
          _0x316748
        ) {
          _0xff7cff = 0.5 * (_0x31ac89 - _0xff7cff);
          _0xf4e8dc = 0.5 * (_0xf4e8dc - _0x27c8db);
          var _0x25b308 = _0x316748 * _0x316748;
          return (
            (0x2 * _0x27c8db - 0x2 * _0x31ac89 + _0xff7cff + _0xf4e8dc) *
              _0x316748 *
              _0x25b308 +
            (-0x3 * _0x27c8db + 0x3 * _0x31ac89 - 0x2 * _0xff7cff - _0xf4e8dc) *
              _0x25b308 +
            _0xff7cff * _0x316748 +
            _0x27c8db
          );
        },
      },
    };
  });
ig.baked = true;
ig.module("plugins.url-parameters").defines(function () {
  ig.UrlParameters = ig.Class.extend({
    init: function () {
      switch (getQueryVariable("iphone")) {
        case "true":
          ig.ua.iPhone = true;
          console.log("iPhone mode");
      }
      var _0x5727a3 = getQueryVariable("webview");
      if (_0x5727a3) {
        switch (_0x5727a3) {
          case "true":
            ig.ua.is_uiwebview = true;
            console.log("webview mode");
        }
      }
      if ((_0x5727a3 = getQueryVariable("debug"))) {
        switch (_0x5727a3) {
          case "true":
            ig.game.showDebugMenu();
            console.log("debug mode");
        }
      }
      switch (getQueryVariable("view")) {
        case "stats":
          ig.game.resetPlayerStats();
          ig.game.endGame();
      }
      getQueryVariable("ad");
    },
  });
});
ig.baked = true;
ig.module("plugins.director")
  .requires("impact.impact")
  .defines(function () {
    ig.Director = ig.Class.extend({
      init: function (_0xfe844b, _0x1fac35) {
        this.game = _0xfe844b;
        this.levels = [];
        this.currentLevel = 0x0;
        this.append(_0x1fac35);
      },
      loadLevel: function (_0xdce1bd) {
        for (var _0xee8c5f in ig.sizeHandler.dynamicClickableEntityDivs) {
          var _0x55a98e = ig.domHandler.getElementById("#" + _0xee8c5f);
          ig.domHandler.hide(_0x55a98e);
        }
        this.currentLevel = _0xdce1bd;
        this.game.loadLevel(this.levels[_0xdce1bd]);
        return true;
      },
      loadLevelWithoutEntities: function (_0x5270da) {
        this.currentLevel = _0x5270da;
        this.game.loadLevelWithoutEntities(this.levels[_0x5270da]);
        return true;
      },
      append: function (_0x308804) {
        newLevels = [];
        return "object" === typeof _0x308804
          ? (_0x308804.constructor === [].constructor
              ? (newLevels = _0x308804)
              : (newLevels[0x0] = _0x308804),
            (this.levels = this.levels.concat(newLevels)),
            true)
          : false;
      },
      nextLevel: function () {
        return this.currentLevel + 0x1 < this.levels.length
          ? this.loadLevel(this.currentLevel + 0x1)
          : false;
      },
      previousLevel: function () {
        return 0x0 <= this.currentLevel - 0x1
          ? this.loadLevel(this.currentLevel - 0x1)
          : false;
      },
      jumpTo: function (_0xf0a5be) {
        var _0x765b00 = null;
        for (i = 0x0; i < this.levels.length; i++) {
          if (this.levels[i] == _0xf0a5be) {
            _0x765b00 = i;
          }
        }
        return 0x0 <= _0x765b00 ? this.loadLevel(_0x765b00) : false;
      },
      firstLevel: function () {
        return this.loadLevel(0x0);
      },
      lastLevel: function () {
        return this.loadLevel(this.levels.length - 0x1);
      },
      reloadLevel: function () {
        return this.loadLevel(this.currentLevel);
      },
    });
  });
ig.baked = true;
ig.module("plugins.impact-storage")
  .requires("impact.game")
  .defines(function () {
    ig.Storage = ig.Class.extend({
      staticInstantiate: function () {
        return !ig.Storage.instance ? null : ig.Storage.instance;
      },
      init: function () {
        ig.Storage.instance = this;
      },
      isCapable: function () {
        return "undefined" !== typeof window.localStorage;
      },
      isSet: function (_0x11f39a) {
        return null !== this.get(_0x11f39a);
      },
      initUnset: function (_0x51a9eb, _0x70a1b7) {
        if (null === this.get(_0x51a9eb)) {
          this.set(_0x51a9eb, _0x70a1b7);
        }
      },
      get: function (_0x13838e) {
        if (!this.isCapable()) {
          return null;
        }
        try {
          return JSON.parse(localStorage.getItem(_0x13838e));
        } catch (_0x357b1f) {
          return window.localStorage.getItem(_0x13838e);
        }
      },
      getInt: function (_0x30a243) {
        return ~~this.get(_0x30a243);
      },
      getFloat: function (_0x594bfe) {
        return parseFloat(this.get(_0x594bfe));
      },
      getBool: function (_0x3ef1fd) {
        return !!this.get(_0x3ef1fd);
      },
      key: function (_0x56ac4a) {
        return this.isCapable() ? window.localStorage.key(_0x56ac4a) : null;
      },
      set: function (_0x51d4ac, _0x215b48) {
        if (!this.isCapable()) {
          return null;
        }
        try {
          window.localStorage.setItem(_0x51d4ac, JSON.stringify(_0x215b48));
        } catch (_0xa7a73d) {
          console.log(_0xa7a73d);
        }
      },
      setHighest: function (_0x533208, _0x214805) {
        if (_0x214805 > this.getFloat(_0x533208)) {
          this.set(_0x533208, _0x214805);
        }
      },
      remove: function (_0x501f1a) {
        if (!this.isCapable()) {
          return null;
        }
        window.localStorage.removeItem(_0x501f1a);
      },
      clear: function () {
        if (!this.isCapable()) {
          return null;
        }
        window.localStorage.clear();
      },
    });
  });
ig.baked = true;
ig.module("plugins.fullscreen")
  .requires(
    "impact.entity",
    "plugins.handlers.size-handler",
    "plugins.director"
  )
  .defines(function () {
    ig.Fullscreen = {
      enableFullscreenButton: true,
      _isEnabled: "notChecked",
      isEnabled: function () {
        if ("notChecked" == this._isEnabled) {
          this._isEnabled = !!(
            document.fullscreenEnabled ||
            document.mozFullScreenEnabled ||
            document.webkitFullscreenEnabled ||
            document.msFullscreenEnabled
          );
        }
        return this._isEnabled;
      },
      isFullscreen: function () {
        return !!(
          ig.Fullscreen.isEnabled() &&
          (document.fullscreenElement ||
            document.mozFullScreenElement ||
            document.webkitFullscreenElement ||
            document.msFullscreenElement)
        );
      },
      toggleFullscreen: function () {
        if (ig.Fullscreen.isFullscreen()) {
          ig.Fullscreen.exitFullscreen();
        } else {
          ig.Fullscreen.requestFullscreen();
        }
        ig.sizeHandler.orientationHandler();
      },
      requestFullscreen: function () {
        var _0x310bb3 = document.documentElement;
        if (_0x310bb3.requestFullscreen) {
          _0x310bb3.requestFullscreen();
        } else if (_0x310bb3.webkitRequestFullscreen) {
          _0x310bb3.webkitRequestFullscreen();
        } else if (_0x310bb3.mozRequestFullScreen) {
          _0x310bb3.mozRequestFullScreen();
        } else if (_0x310bb3.msRequestFullscreen) {
          _0x310bb3.msRequestFullscreen();
        }
      },
      exitFullscreen: function () {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      },
      divs: {},
    };
    ig.Director.inject({
      loadLevel: function (_0x5c388a) {
        var _0x1b65ae = ig.Fullscreen.divs;
        var _0x404330;
        for (_0x404330 in _0x1b65ae) {
          _0x1b65ae = ig.domHandler.getElementById("#" + _0x404330);
          ig.domHandler.hide(_0x1b65ae);
        }
        return this.parent(_0x5c388a);
      },
    });
    ig.FullscreenButton = ig.Entity.extend({
      enterImage: null,
      exitImage: null,
      isReady: false,
      isShown: true,
      zIndex: 0xf423f,
      identifier: null,
      prevPos: {
        x: 0x0,
        y: 0x0,
      },
      invisImagePath: "media/graphics/misc/invisible.png",
      init: function (_0xb0e06e, _0x5d7deb, _0x4dff8b) {
        this.parent(_0xb0e06e, _0x5d7deb, _0x4dff8b);
        if (ig.Fullscreen.isEnabled() && ig.Fullscreen.enableFullscreenButton) {
          if (this.enterImage.loaded) {
            this.initSize();
          } else {
            this.enterImage.loadCallback = function () {
              this.initSize();
            }.bind(this);
          }
          ig.btFullscreen = this;
        } else {
          this.kill();
          ig.btFullscreen = null;
        }
      },
      kill: function () {
        this.parent();
        var _0x247520 = ig.domHandler.getElementById("#" + this.identifier);
        if (_0x247520) {
          ig.domHandler.hide(_0x247520);
        }
      },
      show: function () {
        this.isShown = true;
        var _0x556e10 = ig.domHandler.getElementById("#" + this.identifier);
        if (_0x556e10) {
          ig.domHandler.show(_0x556e10);
        }
      },
      hide: function () {
        this.isShown = false;
        var _0xb29361 = ig.domHandler.getElementById("#" + this.identifier);
        if (_0xb29361) {
          ig.domHandler.hide(_0xb29361);
        }
      },
      initSize: function () {
        this.size.x = this.enterImage.width;
        this.size.y = this.enterImage.height;
        this.createClickableLayer();
        this.isReady = true;
        this.repos();
        ig.sizeHandler.resizeLayers();
      },
      createClickableLayer: function () {
        this.identifier = "fullscreen-button-layer";
        var _0x284362 = ig.domHandler.getElementById("#" + this.identifier);
        if (_0x284362) {
          ig.domHandler.show(_0x284362);
          ig.domHandler.attr(
            _0x284362,
            "onclick",
            "ig.Fullscreen.toggleFullscreen()"
          );
        } else {
          this.createClickableOutboundLayer();
        }
        ig.sizeHandler.dynamicClickableEntityDivs[this.identifier] = {};
        ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].width =
          this.size.x;
        ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].height =
          this.size.y;
        ig.sizeHandler.dynamicClickableEntityDivs[
          this.identifier
        ].entity_pos_x = this.pos.x;
        ig.sizeHandler.dynamicClickableEntityDivs[
          this.identifier
        ].entity_pos_y = this.pos.y;
      },
      repos: function () {
        var _0x39618d = this.pos.x;
        var _0x4c4ccc = this.pos.y;
        if (
          this.isReady &&
          !(this.prevPos.x === _0x39618d && this.prevPos.y === _0x4c4ccc)
        ) {
          ig.sizeHandler.dynamicClickableEntityDivs[this.identifier] = {};
          ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].width =
            this.size.x;
          ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].height =
            this.size.y;
          ig.sizeHandler.dynamicClickableEntityDivs[
            this.identifier
          ].entity_pos_x = this.pos.x;
          ig.sizeHandler.dynamicClickableEntityDivs[
            this.identifier
          ].entity_pos_y = this.pos.y;
          this.prevPos.x = _0x39618d;
          this.prevPos.y = _0x4c4ccc;
        }
      },
      draw: function () {
        var _0x143d37 = ig.system.context;
        _0x143d37.save();
        _0x143d37.setTransform(0x1, 0x0, 0x0, 0x1, 0x0, 0x0);
        if (this.isReady && this.isShown) {
          if (ig.Fullscreen.isFullscreen()) {
            this.exitImage.draw(this.pos.x, this.pos.y);
          } else {
            this.enterImage.draw(this.pos.x, this.pos.y);
          }
        }
        _0x143d37.restore();
      },
      createClickableOutboundLayer: function () {
        var _0x3a28c4 = this.identifier;
        var _0x179a23 = this.invisImagePath;
        var _0x3cf839 = ig.domHandler.create("div");
        ig.domHandler.attr(_0x3cf839, "id", _0x3a28c4);
        ig.domHandler.attr(
          _0x3cf839,
          "onclick",
          "ig.Fullscreen.toggleFullscreen()"
        );
        var _0x358993 = ig.domHandler.create("a");
        var _0x4338b2 = ig.domHandler.create("img");
        ig.domHandler.css(_0x4338b2, {
          width: "100%",
          height: "100%",
        });
        ig.domHandler.attr(_0x4338b2, "src", _0x179a23);
        _0x179a23 = Math.min(
          ig.sizeHandler.scaleRatioMultiplier.x,
          ig.sizeHandler.scaleRatioMultiplier.y
        );
        if (ig.ua.mobile) {
          var _0x31c2cc = ig.domHandler.getElementById("#canvas");
          var _0x1ab4e6 = ig.domHandler.getOffsets(_0x31c2cc);
          var _0x31c2cc = _0x1ab4e6.left;
          var _0x1ab4e6 = _0x1ab4e6.top;
          if (ig.sizeHandler.disableStretchToFitOnMobileFlag) {
            var _0x31c2cc =
              Math.floor(
                _0x31c2cc + this.pos.x * ig.sizeHandler.scaleRatioMultiplier.x
              ) + "px";
            var _0x1ab4e6 =
              Math.floor(
                _0x1ab4e6 + this.pos.y * ig.sizeHandler.scaleRatioMultiplier.y
              ) + "px";
            var _0x144af3 =
              Math.floor(this.size.x * ig.sizeHandler.scaleRatioMultiplier.x) +
              "px";
            var _0x179a23 =
              Math.floor(this.size.y * ig.sizeHandler.scaleRatioMultiplier.y) +
              "px";
          } else {
            _0x31c2cc =
              Math.floor(this.pos.x * ig.sizeHandler.sizeRatio.x) + "px";
            _0x1ab4e6 =
              Math.floor(this.pos.y * ig.sizeHandler.sizeRatio.y) + "px";
            _0x144af3 =
              Math.floor(this.size.x * ig.sizeHandler.sizeRatio.x) + "px";
            _0x179a23 =
              Math.floor(this.size.y * ig.sizeHandler.sizeRatio.y) + "px";
          }
        } else {
          _0x31c2cc = ig.domHandler.getElementById("#canvas");
          _0x1ab4e6 = ig.domHandler.getOffsets(_0x31c2cc);
          _0x31c2cc = _0x1ab4e6.left;
          _0x1ab4e6 = _0x1ab4e6.top;
          if (ig.sizeHandler.enableStretchToFitOnDesktopFlag) {
            _0x31c2cc =
              Math.floor(_0x31c2cc + this.pos.x * ig.sizeHandler.sizeRatio.x) +
              "px";
            _0x1ab4e6 =
              Math.floor(_0x1ab4e6 + this.pos.y * ig.sizeHandler.sizeRatio.y) +
              "px";
            _0x144af3 =
              Math.floor(this.size.x * ig.sizeHandler.sizeRatio.x) + "px";
            _0x179a23 =
              Math.floor(this.size.y * ig.sizeHandler.sizeRatio.y) + "px";
          } else {
            _0x31c2cc = Math.floor(_0x31c2cc + this.pos.x * _0x179a23) + "px";
            _0x1ab4e6 = Math.floor(_0x1ab4e6 + this.pos.y * _0x179a23) + "px";
            _0x144af3 = Math.floor(this.size.x * _0x179a23) + "px";
            _0x179a23 = Math.floor(this.size.y * _0x179a23) + "px";
          }
        }
        ig.domHandler.css(_0x3cf839, {
          float: "left",
          position: "absolute",
          left: _0x31c2cc,
          top: _0x1ab4e6,
          width: _0x144af3,
          height: _0x179a23,
          "z-index": 0x3,
        });
        ig.domHandler.addEvent(
          _0x3cf839,
          "mousemove",
          ig.input.mousemove.bind(ig.input),
          false
        );
        ig.domHandler.appendChild(_0x358993, _0x4338b2);
        ig.domHandler.appendChild(_0x3cf839, _0x358993);
        ig.domHandler.appendToBody(_0x3cf839);
        ig.Fullscreen.divs[_0x3a28c4] = {};
        ig.Fullscreen.divs[_0x3a28c4].width = this.size.x;
        ig.Fullscreen.divs[_0x3a28c4].height = this.size.y;
        ig.Fullscreen.divs[_0x3a28c4].entity_pos_x = this.pos.x;
        ig.Fullscreen.divs[_0x3a28c4].entity_pos_y = this.pos.y;
      },
    });
  });
ig.baked = true;
ig.module("game.plugin")
  .requires(
    "plugins.handlers.size-handler",
    "impact.game",
    "impact.entity",
    "plugins.director"
  )
  .defines(function () {
    ig.SizeHandler.inject({
      minH: 0x500,
      minW: 0x320,
      portraitMode: true,
      sizeCalcs: function () {
        var _0x42beba = window.innerWidth;
        var _0x516ae6 = window.innerHeight;
        var _0x5bc12b;
        var _0x5a17ef;
        this.r0 = this.minW / this.minH;
        if (_0x42beba / _0x516ae6 < this.r0) {
          _0x5bc12b = this.minW;
          _0x5a17ef = Math.round((_0x5bc12b / _0x42beba) * _0x516ae6);
        } else {
          _0x5a17ef = this.minH;
          _0x5bc12b = Math.round((_0x5a17ef / _0x516ae6) * _0x42beba);
        }
        if (ig.system) {
          this.dx = (ig.system.width - _0x5bc12b) / 0x2;
          this.dy = (ig.system.height - _0x5a17ef) / 0x2;
          ig.system.resize(_0x5bc12b, _0x5a17ef, this.scale);
        }
        this.windowSize = new Vector2(_0x42beba, _0x516ae6);
        this.scaleRatioMultiplier = new Vector2(
          _0x42beba / _0x5bc12b,
          _0x516ae6 / _0x5a17ef
        );
        this.desktop.actualResolution = new Vector2(_0x42beba, _0x516ae6);
        this.mobile.actualResolution = new Vector2(_0x42beba, _0x516ae6);
        this.desktop.actualSize = new Vector2(_0x42beba, _0x516ae6);
        this.mobile.actualSize = new Vector2(_0x42beba, _0x516ae6);
        if (ig.game) {
          ig.game.midX = ig.system.width / 0x2;
          ig.game.midY = ig.system.height / 0x2;
          ig.game.screen.x += this.dx;
          ig.game.screen.y += this.dy;
          ig.game.update();
          ig.game.draw();
          this.repositionEntities();
        } else if (ig.loader) {
          ig.loader.draw();
        }
      },
      repositionEntities: function () {
        if (ig.game) {
          var _0x515d3a = 0x0;
          for (
            var _0x28144f = ig.game.entities.length;
            _0x515d3a < _0x28144f;
            _0x515d3a++
          ) {
            var _0x22ecfa = ig.game.entities[_0x515d3a];
            if (_0x22ecfa && "function" === typeof _0x22ecfa.repos) {
              _0x22ecfa.repos();
            }
          }
        }
      },
    });
    ig.Game.inject({
      update: function () {
        this.parent();
        if (ig.input.pressed("click")) {
          var _0x406aa8 = null;
          for (
            var _0x1d54b6 = this.entities.length - 0x1;
            -0x1 < _0x1d54b6;
            _0x1d54b6--
          ) {
            var _0x48d8fd = this.entities[_0x1d54b6];
            if (
              _0x48d8fd.isClickable &&
              _0x48d8fd.underPointer() &&
              (!_0x406aa8 || _0x406aa8.zIndex < _0x48d8fd.zIndex)
            ) {
              _0x406aa8 = _0x48d8fd;
            }
          }
          if (_0x406aa8 && "function" === typeof _0x406aa8.clicked) {
            _0x406aa8.clicked();
          }
        }
        if (ig.input.released("click")) {
          _0x406aa8 = null;
          for (
            _0x1d54b6 = this.entities.length - 0x1;
            -0x1 < _0x1d54b6;
            _0x1d54b6--
          ) {
            _0x48d8fd = this.entities[_0x1d54b6];
            if (
              _0x48d8fd.isClickable &&
              _0x48d8fd.underPointer() &&
              (!_0x406aa8 || _0x406aa8.zIndex < _0x48d8fd.zIndex)
            ) {
              _0x406aa8 = _0x48d8fd;
            }
          }
          if (_0x406aa8 && "function" === typeof _0x406aa8.released) {
            _0x406aa8.released();
          }
        }
      },
      clearColor: false,
      draw: function () {
        ig.system.context.clearRect(
          0x0,
          0x0,
          ig.system.width,
          ig.system.height
        );
        this.parent();
      },
    });
    ig.Entity.inject({
      isClickable: false,
      zIndex: 0x1,
      size: {
        x: 0x3c,
        y: 0x3c,
      },
      underPointer: function () {
        var _0xd57b39 = ig.game.io.getClickPos();
        return this.containPoint({
          x: _0xd57b39.x + ig.game.screen.x,
          y: _0xd57b39.y + ig.game.screen.y,
        });
      },
      containPoint: function (_0x598a28) {
        var _0x3936cb = this.pos.x;
        var _0x4ee6a3 = _0x3936cb + this.size.x;
        var _0x541212 = this.pos.y;
        var _0x5d27ff = _0x541212 + this.size.y;
        return (
          _0x598a28.x > _0x3936cb &&
          _0x598a28.x < _0x4ee6a3 &&
          _0x598a28.y > _0x541212 &&
          _0x598a28.y < _0x5d27ff
        );
      },
      midX: function () {
        return this.pos.x + this.size.x / 0x2;
      },
      midY: function () {
        return this.pos.y + this.size.y / 0x2;
      },
      rightX: function () {
        return this.pos.x + this.size.x;
      },
      bottomY: function () {
        return this.pos.y + this.size.y;
      },
      center: function () {
        return {
          x: this.midX(),
          y: this.midY(),
        };
      },
    });
    ig.util = {
      pi2: 0x2 * Math.PI,
      pio2: Math.PI / 0x2,
      lerp: function (_0x190aff, _0x543c48, _0x599a98) {
        return _0x190aff + (_0x543c48 - _0x190aff) * _0x599a98;
      },
      pointInRect: function (_0x22402b, _0x3d3bd5) {
        return (
          _0x3d3bd5.x1 < _0x22402b.x &&
          _0x3d3bd5.x2 > _0x22402b.x &&
          _0x3d3bd5.z1 < _0x22402b.z &&
          _0x3d3bd5.z2 > _0x22402b.z
        );
      },
      drawImageScaled: function (_0x1ddd93) {
        ig.system.context.drawImage(
          _0x1ddd93.data,
          0x0,
          0x0,
          _0x1ddd93.width,
          _0x1ddd93.height,
          0x0,
          0x0,
          ig.system.width,
          ig.system.height
        );
      },
      distanceBetweenPoints: function (_0x2fac1e, _0x22a47d) {
        return Math.sqrt(
          Math.pow(_0x2fac1e.x - _0x22a47d.x, 0x2) +
            Math.pow(_0x2fac1e.y - _0x22a47d.y, 0x2)
        );
      },
      distanceBetween: function (_0x75baab, _0xde3b1a, _0x36179e, _0x335ee0) {
        return Math.sqrt(
          Math.pow(_0x36179e - _0x75baab, 0x2) +
            Math.pow(_0x335ee0 - _0xde3b1a, 0x2)
        );
      },
      angleBetweenPoints: function (_0x1e42cc, _0x38a4a8) {
        return Math.atan2(_0x38a4a8.y - _0x1e42cc.y, _0x38a4a8.x - _0x1e42cc.x);
      },
      angleBetween: function (_0x2148b1, _0x3aeea7, _0xcdf79a, _0x32cf52) {
        return Math.atan2(_0x32cf52 - _0x3aeea7, _0xcdf79a - _0x2148b1);
      },
      toRad: function (_0x597f6a) {
        return (_0x597f6a / 0xb4) * Math.PI;
      },
      toDeg: function (_0x1577c5) {
        return 0xb4 * (_0x1577c5 / Math.PI);
      },
      rBetween: function (_0x54c680, _0x3d7c77) {
        return _0x54c680 + Math.random() * (_0x3d7c77 - _0x54c680);
      },
      iBetween: function (_0x12395f, _0x38dda5) {
        return (
          _0x12395f + Math.floor(Math.random() * (_0x38dda5 - _0x12395f + 0x1))
        );
      },
      containPoint: function (_0x1b8974, _0xc8833e) {
        var _0x41d747;
        for (var _0x22d675 = 0x0; _0x22d675 < _0x1b8974.length; _0x22d675++) {
          var _0x3800c5 = _0x22d675 + 0x1;
          if (_0x3800c5 == _0x1b8974.length) {
            _0x3800c5 = 0x0;
          }
          var _0x590635 = _0x1b8974[_0x22d675];
          var _0x3800c5 = _0x1b8974[_0x3800c5];
          var _0x590635 =
            (_0xc8833e.y - _0x590635.y) * (_0x3800c5.x - _0x590635.x) -
            (_0xc8833e.x - _0x590635.x) * (_0x3800c5.y - _0x590635.y);
          if (0x0 == _0x590635) {
            break;
          }
          if (0x0 === _0x22d675) {
            _0x41d747 = _0x590635;
          } else {
            if (0x0 > _0x41d747 * _0x590635) {
              return false;
            }
          }
        }
        return true;
      },
      normalizeAngle: function (_0x5bf3ca) {
        _0x5bf3ca -= Math.floor(_0x5bf3ca / ig.util.pi2) * ig.util.pi2;
        if (0x0 > _0x5bf3ca) {
          _0x5bf3ca += ig.util.pi2;
        }
        return _0x5bf3ca;
      },
      pick: function (_0x2daee1) {
        var _0x2aedeb = Math.floor(Math.random() * _0x2daee1.length);
        return _0x2daee1.splice(_0x2aedeb, 0x1)[0x0];
      },
      rGet: function (_0x562142) {
        var _0x34f7ac = Math.floor(Math.random() * _0x562142.length);
        return _0x562142[_0x34f7ac];
      },
      max: function (_0x58a760, _0x95bd28) {
        if (_0x58a760 > _0x95bd28) {
          _0x58a760 = _0x95bd28;
        }
        return _0x58a760;
      },
      min: function (_0x946763, _0x191949) {
        if (_0x946763 < _0x191949) {
          _0x946763 = _0x191949;
        }
        return _0x946763;
      },
      shortAngleDist: function (_0x487795, _0x4e03dc) {
        var _0x2764cf = this.pi2;
        var _0xe6b2cc = (_0x4e03dc - _0x487795) % _0x2764cf;
        return ((0x2 * _0xe6b2cc) % _0x2764cf) - _0xe6b2cc;
      },
      angleLerp: function (_0x54b32e, _0xcf3b29, _0x1eccce) {
        return (
          _0x54b32e + this.shortAngleDist(_0x54b32e, _0xcf3b29) * _0x1eccce
        );
      },
      updateGradientColor: function (
        _0x2429af,
        _0x2c75a5,
        _0x4fd84b,
        _0x442d56
      ) {
        var _0x1accb9 = parseInt(_0x2429af.substr(0x0, 0x2), 0x10);
        var _0x5ad54b = parseInt(_0x2429af.substr(0x2, 0x2), 0x10);
        _0x2429af = parseInt(_0x2429af.substr(0x4, 0x2), 0x10);
        var _0x3c7296 = parseInt(_0x2c75a5.substr(0x0, 0x2), 0x10);
        var _0x147767 = parseInt(_0x2c75a5.substr(0x2, 0x2), 0x10);
        _0x2c75a5 = parseInt(_0x2c75a5.substr(0x4, 0x2), 0x10);
        _0x1accb9 = ((_0x3c7296 - _0x1accb9) * _0x4fd84b + _0x1accb9) / 0xff;
        _0x5ad54b = ((_0x147767 - _0x5ad54b) * _0x4fd84b + _0x5ad54b) / 0xff;
        _0x442d56.set(
          _0x1accb9,
          _0x5ad54b,
          ((_0x2c75a5 - _0x2429af) * _0x4fd84b + _0x2429af) / 0xff
        );
      },
    };
    ig.drawUtil = {
      fontStyle: function (_0x13d70c, _0x15877a, _0x348e07) {
        var _0x4d6216 = ig.system.context;
        _0x4d6216.font = _0x13d70c;
        _0x4d6216.fillStyle = _0x15877a;
        _0x4d6216.textAlign = _0x348e07;
      },
      strokeStyle: function (_0x38250a, _0x4b9b0e) {
        var _0x10205c = ig.system.context;
        _0x10205c.strokeStyle = _0x38250a;
        _0x10205c.lineWidth = _0x4b9b0e;
      },
      fillTextStroke: function (_0x335a12, _0x4e3a64, _0x3dd860) {
        var _0x149fb3 = ig.system.context;
        _0x149fb3.strokeText(_0x335a12, _0x4e3a64, _0x3dd860);
        _0x149fb3.fillText(_0x335a12, _0x4e3a64, _0x3dd860);
      },
      clearScreen: function (_0x563572) {
        var _0x19121f = ig.system.context;
        _0x19121f.fillStyle = _0x563572;
        _0x19121f.clearRect(0x0, 0x0, ig.system.width, ig.system.height);
      },
      fillScreen: function (_0x5a1efc) {
        var _0xfe4549 = ig.system.context;
        _0xfe4549.fillStyle = _0x5a1efc;
        _0xfe4549.fillRect(0x0, 0x0, ig.system.width, ig.system.height);
      },
      roundRect: function (
        _0x270414,
        _0x1b50d7,
        _0x56fc9b,
        _0xda307a,
        _0x27e551
      ) {
        var _0x17e91a = ig.system.context;
        _0x17e91a.beginPath();
        _0x17e91a.moveTo(_0x270414 + _0x27e551, _0x1b50d7);
        _0x17e91a.arcTo(
          _0x270414 + _0x56fc9b,
          _0x1b50d7,
          _0x270414 + _0x56fc9b,
          _0x1b50d7 + _0xda307a,
          _0x27e551
        );
        _0x17e91a.arcTo(
          _0x270414 + _0x56fc9b,
          _0x1b50d7 + _0xda307a,
          _0x270414,
          _0x1b50d7 + _0xda307a,
          _0x27e551
        );
        _0x17e91a.arcTo(
          _0x270414,
          _0x1b50d7 + _0xda307a,
          _0x270414,
          _0x1b50d7,
          _0x27e551
        );
        _0x17e91a.arcTo(
          _0x270414,
          _0x1b50d7,
          _0x270414 + _0x56fc9b,
          _0x1b50d7,
          _0x27e551
        );
        _0x17e91a.closePath();
        return _0x17e91a;
      },
    };
  });
ig.baked = true;
ig.module("plugins.astar").defines(function () {
  var _0xd242e3 = function () {
    function _0x134ca2(_0xcd97bb) {
      for (var _0xece9f7 = []; _0xcd97bb.parent; ) {
        _0xece9f7.unshift(_0xcd97bb);
        _0xcd97bb = _0xcd97bb.parent;
      }
      return _0xece9f7;
    }
    function _0x492d1e(_0x1532db, _0x3486d1) {
      _0x3486d1 = _0x3486d1 || {};
      this.nodes = [];
      this.diagonal = !!_0x3486d1.diagonal;
      this.grid = [];
      for (var _0x28fc4f = 0x0; _0x28fc4f < _0x1532db.length; _0x28fc4f++) {
        this.grid[_0x28fc4f] = [];
        var _0x164278 = 0x0;
        for (
          var _0x285d27 = _0x1532db[_0x28fc4f];
          _0x164278 < _0x285d27.length;
          _0x164278++
        ) {
          var _0x2860fd = new _0x3b0fbd(
            _0x28fc4f,
            _0x164278,
            _0x285d27[_0x164278]
          );
          this.grid[_0x28fc4f][_0x164278] = _0x2860fd;
          this.nodes.push(_0x2860fd);
        }
      }
      this.init();
    }
    function _0x3b0fbd(_0x49dd5a, _0x5238d2, _0x29e3c5) {
      this.x = _0x49dd5a;
      this.y = _0x5238d2;
      this.weight = _0x29e3c5;
    }
    function _0x28ec77(_0x41b8f1) {
      this.content = [];
      this.scoreFunction = _0x41b8f1;
    }
    var _0x21e4e8 = {
      search: function (_0x41f698, _0x136f4e, _0x25f4cb, _0x1fa17f) {
        _0x41f698.cleanDirty();
        _0x1fa17f = _0x1fa17f || {};
        var _0x558ac6 = _0x1fa17f.heuristic || _0x21e4e8.heuristics.manhattan;
        _0x1fa17f = _0x1fa17f.closest || false;
        var _0x42d99b = new _0x28ec77(function (_0x1ddd30) {
          return _0x1ddd30.f;
        });
        var _0x3707e5 = _0x136f4e;
        _0x136f4e.h = _0x558ac6(_0x136f4e, _0x25f4cb);
        _0x41f698.markDirty(_0x136f4e);
        for (_0x42d99b.push(_0x136f4e); 0x0 < _0x42d99b.size(); ) {
          _0x136f4e = _0x42d99b.pop();
          if (_0x136f4e === _0x25f4cb) {
            return _0x134ca2(_0x136f4e);
          }
          _0x136f4e.closed = true;
          var _0x22082d = _0x41f698.neighbors(_0x136f4e);
          var _0x1516b4 = 0x0;
          for (
            var _0x53d6fd = _0x22082d.length;
            _0x1516b4 < _0x53d6fd;
            ++_0x1516b4
          ) {
            var _0x5bb52b = _0x22082d[_0x1516b4];
            if (!_0x5bb52b.closed && !_0x5bb52b.isWall()) {
              var _0x22e3c6 = _0x136f4e.g + _0x5bb52b.getCost(_0x136f4e);
              var _0x2e7202 = _0x5bb52b.visited;
              if (!_0x2e7202 || _0x22e3c6 < _0x5bb52b.g) {
                _0x5bb52b.visited = true;
                _0x5bb52b.parent = _0x136f4e;
                _0x5bb52b.h = _0x5bb52b.h || _0x558ac6(_0x5bb52b, _0x25f4cb);
                _0x5bb52b.g = _0x22e3c6;
                _0x5bb52b.f = _0x5bb52b.g + _0x5bb52b.h;
                _0x41f698.markDirty(_0x5bb52b);
                if (
                  _0x1fa17f &&
                  (_0x5bb52b.h < _0x3707e5.h ||
                    (_0x5bb52b.h === _0x3707e5.h && _0x5bb52b.g < _0x3707e5.g))
                ) {
                  _0x3707e5 = _0x5bb52b;
                }
                if (_0x2e7202) {
                  _0x42d99b.rescoreElement(_0x5bb52b);
                } else {
                  _0x42d99b.push(_0x5bb52b);
                }
              }
            }
          }
        }
        return _0x1fa17f ? _0x134ca2(_0x3707e5) : [];
      },
      heuristics: {
        manhattan: function (_0x189a69, _0x12ad59) {
          var _0x332dcc = Math.abs(_0x12ad59.x - _0x189a69.x);
          var _0x56fcb8 = Math.abs(_0x12ad59.y - _0x189a69.y);
          return _0x332dcc + _0x56fcb8;
        },
        diagonal: function (_0x54233c, _0x29cdc2) {
          var _0x1db1fc = Math.sqrt(0x2);
          var _0x13db54 = Math.abs(_0x29cdc2.x - _0x54233c.x);
          var _0xc3c03d = Math.abs(_0x29cdc2.y - _0x54233c.y);
          return (
            0x1 * (_0x13db54 + _0xc3c03d) +
            (_0x1db1fc - 0x2) * Math.min(_0x13db54, _0xc3c03d)
          );
        },
      },
      cleanNode: function (_0x1ad9a3) {
        _0x1ad9a3.f = 0x0;
        _0x1ad9a3.g = 0x0;
        _0x1ad9a3.h = 0x0;
        _0x1ad9a3.visited = false;
        _0x1ad9a3.closed = false;
        _0x1ad9a3.parent = null;
      },
    };
    _0x492d1e.prototype.init = function () {
      this.dirtyNodes = [];
      for (var _0x22d5e2 = 0x0; _0x22d5e2 < this.nodes.length; _0x22d5e2++) {
        _0x21e4e8.cleanNode(this.nodes[_0x22d5e2]);
      }
    };
    _0x492d1e.prototype.cleanDirty = function () {
      for (
        var _0x8d2426 = 0x0;
        _0x8d2426 < this.dirtyNodes.length;
        _0x8d2426++
      ) {
        _0x21e4e8.cleanNode(this.dirtyNodes[_0x8d2426]);
      }
      this.dirtyNodes = [];
    };
    _0x492d1e.prototype.markDirty = function (_0x519a87) {
      this.dirtyNodes.push(_0x519a87);
    };
    _0x492d1e.prototype.neighbors = function (_0x527ac5) {
      var _0x3ef3d9 = [];
      var _0x591464 = _0x527ac5.x;
      _0x527ac5 = _0x527ac5.y;
      var _0x304dd2 = this.grid;
      if (_0x304dd2[_0x591464 - 0x1] && _0x304dd2[_0x591464 - 0x1][_0x527ac5]) {
        _0x3ef3d9.push(_0x304dd2[_0x591464 - 0x1][_0x527ac5]);
      }
      if (_0x304dd2[_0x591464 + 0x1] && _0x304dd2[_0x591464 + 0x1][_0x527ac5]) {
        _0x3ef3d9.push(_0x304dd2[_0x591464 + 0x1][_0x527ac5]);
      }
      if (_0x304dd2[_0x591464] && _0x304dd2[_0x591464][_0x527ac5 - 0x1]) {
        _0x3ef3d9.push(_0x304dd2[_0x591464][_0x527ac5 - 0x1]);
      }
      if (_0x304dd2[_0x591464] && _0x304dd2[_0x591464][_0x527ac5 + 0x1]) {
        _0x3ef3d9.push(_0x304dd2[_0x591464][_0x527ac5 + 0x1]);
      }
      if (this.diagonal) {
        if (
          _0x304dd2[_0x591464 - 0x1] &&
          _0x304dd2[_0x591464 - 0x1][_0x527ac5 - 0x1]
        ) {
          _0x3ef3d9.push(_0x304dd2[_0x591464 - 0x1][_0x527ac5 - 0x1]);
        }
        if (
          _0x304dd2[_0x591464 + 0x1] &&
          _0x304dd2[_0x591464 + 0x1][_0x527ac5 - 0x1]
        ) {
          _0x3ef3d9.push(_0x304dd2[_0x591464 + 0x1][_0x527ac5 - 0x1]);
        }
        if (
          _0x304dd2[_0x591464 - 0x1] &&
          _0x304dd2[_0x591464 - 0x1][_0x527ac5 + 0x1]
        ) {
          _0x3ef3d9.push(_0x304dd2[_0x591464 - 0x1][_0x527ac5 + 0x1]);
        }
        if (
          _0x304dd2[_0x591464 + 0x1] &&
          _0x304dd2[_0x591464 + 0x1][_0x527ac5 + 0x1]
        ) {
          _0x3ef3d9.push(_0x304dd2[_0x591464 + 0x1][_0x527ac5 + 0x1]);
        }
      }
      return _0x3ef3d9;
    };
    _0x492d1e.prototype.toString = function () {
      var _0x55bbbf = [];
      var _0x4ca846 = this.grid;
      for (var _0x17b4c2 = 0x0; _0x17b4c2 < _0x4ca846.length; _0x17b4c2++) {
        var _0x592abc = [];
        var _0x56cea4 = _0x4ca846[_0x17b4c2];
        for (var _0x187e08 = 0x0; _0x187e08 < _0x56cea4.length; _0x187e08++) {
          _0x592abc.push(_0x56cea4[_0x187e08].weight);
        }
        _0x55bbbf.push(_0x592abc.join(" "));
      }
      return _0x55bbbf.join("\n");
    };
    _0x3b0fbd.prototype.toString = function () {
      return "[" + this.x + " " + this.y + "]";
    };
    _0x3b0fbd.prototype.getCost = function (_0x59e5f4) {
      return _0x59e5f4 && _0x59e5f4.x != this.x && _0x59e5f4.y != this.y
        ? 1.41421 * this.weight
        : this.weight;
    };
    _0x3b0fbd.prototype.isWall = function () {
      return 0x0 === this.weight;
    };
    _0x28ec77.prototype = {
      push: function (_0x503b6b) {
        this.content.push(_0x503b6b);
        this.sinkDown(this.content.length - 0x1);
      },
      pop: function () {
        var _0x61a69f = this.content[0x0];
        var _0x317dbe = this.content.pop();
        if (0x0 < this.content.length) {
          this.content[0x0] = _0x317dbe;
          this.bubbleUp(0x0);
        }
        return _0x61a69f;
      },
      remove: function (_0x3b8e8c) {
        var _0x3fb91c = this.content.indexOf(_0x3b8e8c);
        var _0x3b7723 = this.content.pop();
        if (_0x3fb91c !== this.content.length - 0x1) {
          this.content[_0x3fb91c] = _0x3b7723;
          if (this.scoreFunction(_0x3b7723) < this.scoreFunction(_0x3b8e8c)) {
            this.sinkDown(_0x3fb91c);
          } else {
            this.bubbleUp(_0x3fb91c);
          }
        }
      },
      size: function () {
        return this.content.length;
      },
      rescoreElement: function (_0x27eb69) {
        this.sinkDown(this.content.indexOf(_0x27eb69));
      },
      sinkDown: function (_0x8a503f) {
        for (var _0x2cac49 = this.content[_0x8a503f]; 0x0 < _0x8a503f; ) {
          var _0x54c218 = ((_0x8a503f + 0x1) >> 0x1) - 0x1;
          var _0x1cbf1c = this.content[_0x54c218];
          if (this.scoreFunction(_0x2cac49) < this.scoreFunction(_0x1cbf1c)) {
            this.content[_0x54c218] = _0x2cac49;
            this.content[_0x8a503f] = _0x1cbf1c;
            _0x8a503f = _0x54c218;
          } else {
            break;
          }
        }
      },
      bubbleUp: function (_0x43a53c) {
        var _0x3f4067 = this.content.length;
        var _0x4d79b1 = this.content[_0x43a53c];
        for (var _0x18c146 = this.scoreFunction(_0x4d79b1); ; ) {
          var _0x442c5f = (_0x43a53c + 0x1) << 0x1;
          var _0x31d3ec = _0x442c5f - 0x1;
          var _0x1a5ea6 = null;
          var _0x24ff6b;
          if (_0x31d3ec < _0x3f4067) {
            _0x24ff6b = this.scoreFunction(this.content[_0x31d3ec]);
            if (_0x24ff6b < _0x18c146) {
              _0x1a5ea6 = _0x31d3ec;
            }
          }
          if (
            _0x442c5f < _0x3f4067 &&
            this.scoreFunction(this.content[_0x442c5f]) <
              (null === _0x1a5ea6 ? _0x18c146 : _0x24ff6b)
          ) {
            _0x1a5ea6 = _0x442c5f;
          }
          if (null !== _0x1a5ea6) {
            this.content[_0x43a53c] = this.content[_0x1a5ea6];
            this.content[_0x1a5ea6] = _0x4d79b1;
            _0x43a53c = _0x1a5ea6;
          } else {
            break;
          }
        }
      },
    };
    return {
      astar: _0x21e4e8,
      Graph: _0x492d1e,
    };
  };
  if ("object" === typeof module && "object" === typeof module.exports) {
    module.exports = _0xd242e3();
  } else if ("function" === typeof define && define.amd) {
    define([], _0xd242e3);
  } else {
    _0xd242e3 = _0xd242e3();
    window.astar = _0xd242e3.astar;
    window.Graph = _0xd242e3.Graph;
  }
});
this.START_BRANDING_SPLASH;
ig.baked = true;
ig.module("plugins.branding.splash")
  .requires("impact.impact", "impact.entity")
  .defines(function () {
    ig.BrandingSplash = ig.Class.extend({
      init: function () {
        ig.game.spawnEntity(EntityBranding, 0x0, 0x0);
        console.log("spawn branding");
      },
    });
    EntityBranding = ig.Entity.extend({
      autoUpdateScale: false,
      gravityFactor: 0x0,
      size: {
        x: 0x20,
        y: 0x20,
      },
      splash: new ig.Image("branding/splash1.png"),
      init: function (_0x241603, _0x4c0f19, _0x2d1a51) {
        this.parent(_0x241603, _0x4c0f19, _0x2d1a51);
        if (0x140 >= ig.system.width) {
          this.size.x = 0x140;
          this.size.y = 0xc8;
        } else {
          this.size.x = 0x1e0;
          this.size.y = 0xf0;
        }
        this.pos.x = (ig.system.width - this.size.x) / 0x2;
        this.pos.y = -this.size.y - 0xc8;
        this.endPosY = (ig.system.height - this.size.y) / 0x2;
        _0x241603 = this.tween(
          {
            pos: {
              y: this.endPosY,
            },
          },
          0.5,
          {
            easing: ig.Tween.Easing.Bounce.EaseIn,
          }
        );
        _0x4c0f19 = this.tween({}, 2.5, {
          onComplete: function () {
            ig.game.director.loadLevel(ig.game.director.currentLevel);
          },
        });
        _0x241603.chain(_0x4c0f19);
        _0x241603.start();
        this.currentAnim = this.anims.idle;
      },
      createClickableLayer: function () {
        console.log("Build clickable layer");
        this.checkClickableLayer(
          "branding-splash",
          _SETTINGS.Branding.Logo.Link,
          _SETTINGS.Branding.Logo.NewWindow
        );
      },
      doesClickableLayerExist: function (_0x3bde50) {
        for (k in dynamicClickableEntityDivs)
          if (k == _0x3bde50) {
            return true;
          }
        return false;
      },
      checkClickableLayer: function (_0x29e091, _0x1eef33, _0x2226dd) {
        if ("undefined" == typeof wm) {
          if (this.doesClickableLayerExist(_0x29e091)) {
            ig.game.showOverlay([_0x29e091]);
            $("#" + _0x29e091)
              .find("[href]")
              .attr("href", _0x1eef33);
          } else {
            this.createClickableOutboundLayer(
              _0x29e091,
              _0x1eef33,
              "media/graphics/misc/invisible.png",
              _0x2226dd
            );
          }
        }
      },
      createClickableOutboundLayer: function (
        _0x272874,
        _0x23416b,
        _0x22f0cd,
        _0x1f3c17
      ) {
        var _0x46e6ac = ig.$new("div");
        _0x46e6ac.id = _0x272874;
        document.body.appendChild(_0x46e6ac);
        _0x46e6ac = $("#" + _0x46e6ac.id);
        _0x46e6ac.css("float", "left");
        _0x46e6ac.css("position", "absolute");
        if (ig.ua.mobile) {
          var _0xf0e7e5 = window.innerHeight / mobileHeight;
          var _0x374744 = window.innerWidth / mobileWidth;
          _0x46e6ac.css("left", this.pos.x * _0x374744);
          _0x46e6ac.css("top", this.pos.y * _0xf0e7e5);
          _0x46e6ac.css("width", this.size.x * _0x374744);
          _0x46e6ac.css("height", this.size.y * _0xf0e7e5);
        } else {
          _0xf0e7e5 = w / 0x2 - destW / 0x2;
          _0x374744 = h / 0x2 - destH / 0x2;
          console.log(_0xf0e7e5, _0x374744);
          _0x46e6ac.css("left", _0xf0e7e5 + this.pos.x * multiplier);
          _0x46e6ac.css("top", _0x374744 + this.pos.y * multiplier);
          _0x46e6ac.css("width", this.size.x * multiplier);
          _0x46e6ac.css("height", this.size.y * multiplier);
        }
        if (_0x1f3c17) {
          _0x46e6ac.html(
            "<a target='_blank' href='" +
              _0x23416b +
              "'><img style='width:100%;height:100%' src='" +
              _0x22f0cd +
              "'></a>"
          );
        } else {
          _0x46e6ac.html(
            "<a href='" +
              _0x23416b +
              "'><img style='width:100%;height:100%' src='" +
              _0x22f0cd +
              "'></a>"
          );
        }
        dynamicClickableEntityDivs[_0x272874] = {};
        dynamicClickableEntityDivs[_0x272874].width = this.size.x * multiplier;
        dynamicClickableEntityDivs[_0x272874].height = this.size.y * multiplier;
        dynamicClickableEntityDivs[_0x272874].entity_pos_x = this.pos.x;
        dynamicClickableEntityDivs[_0x272874].entity_pos_y = this.pos.y;
      },
      draw: function () {
        ig.system.context.fillStyle = "#ffffff";
        ig.system.context.fillRect(0x0, 0x0, ig.system.width, ig.system.height);
        ig.system.context.fillStyle = "#000";
        ig.system.context.font = "12px Arial";
        ig.system.context.textAlign = "left";
        if (0x140 >= ig.system.width) {
          ig.system.context.fillText(
            "powered by MarketJS.com",
            ig.system.width - 0x96,
            ig.system.height - 0xf
          );
        } else {
          ig.system.context.fillText(
            "powered by MarketJS.com",
            ig.system.width - 0xa0,
            ig.system.height - 0xf
          );
        }
        this.parent();
        if (this.splash) {
          ig.system.context.drawImage(
            this.splash.data,
            0x0,
            0x0,
            this.splash.data.width,
            this.splash.data.height,
            this.pos.x,
            this.pos.y,
            this.size.x,
            this.size.y
          );
        }
      },
    });
  });
this.END_BRANDING_SPLASH;
ig.baked = true;
ig.module("game.entities.buttons.button")
  .requires("impact.entity")
  .defines(function () {
    EntityButton = ig.Entity.extend({
      collides: ig.Entity.COLLIDES.NEVER,
      image: new ig.Image("media/graphics/misc/invisible.png"),
      visible: true,
      isClickable: true,
      scale: 0x1,
      zIndex: 0x5,
      init: function (_0x357790, _0x204519, _0x2fd0c3) {
        this.parent(_0x357790, _0x204519, _0x2fd0c3);
        this.size.x = this.image.width;
        this.size.y = this.image.height;
        this.halfSize = {
          x: this.size.x / 0x2,
          y: this.size.y / 0x2,
        };
        if (!ig.global.wm) {
          this.repos();
          this.setup();
          this.scaleAnim = this.tween(
            {
              scale: 0.9,
            },
            0.04,
            {
              loop: ig.Tween.Loop.Reverse,
              loopCount: 0x1,
              onComplete: this.callback.bind(this),
            }
          );
          this.layer = ig.game.currentLayer;
          this.clickTime = ig.system.clock.delta();
        }
      },
      clicked: function () {
        if (this.visible) {
          var _0x29ba26 = this.clickTime;
          this.clickTime = ig.system.clock.delta();
          if (
            !(0.35 > this.clickTime - _0x29ba26) &&
            ig.game.currentLayer == this.layer
          ) {
            this.scaleAnim.start();
            this.playSFX();
          }
        }
      },
      playSFX: function () {
        ig.soundHandler.sfxPlayer.play("button");
      },
      draw: function () {
        if (this.visible) {
          var _0x1fbec9 = ig.system.context;
          _0x1fbec9.save();
          _0x1fbec9.translate(
            ig.system.getDrawPos(
              this.pos.x - ig.game.screen.x + this.halfSize.x
            ),
            ig.system.getDrawPos(
              this.pos.y - ig.game.screen.y + this.halfSize.y
            )
          );
          _0x1fbec9.scale(this.scale, this.scale);
          this.image.draw(-this.halfSize.x, -this.halfSize.y);
          _0x1fbec9.restore();
        }
      },
      update: function () {
        if (this.visible) {
          this.parent();
        }
      },
      setup: function () {},
      callback: function () {},
      repos: function () {},
    });
    EntityButtonFix = EntityButton.extend({
      angle: 0x0,
      underPointer: function () {
        var _0x8a2801 = ig.game.io.getClickPos();
        return this.containPoint(_0x8a2801);
      },
      draw: function () {
        if (this.visible) {
          var _0x37f497 = ig.system.context;
          _0x37f497.save();
          _0x37f497.translate(
            ig.system.getDrawPos(this.pos.x + this.halfSize.x),
            ig.system.getDrawPos(this.pos.y + this.halfSize.y)
          );
          _0x37f497.rotate(this.angle);
          if (this.animating) {
            this.scale = ig.home.scale;
          }
          _0x37f497.scale(this.scale, this.scale);
          this.image.draw(-this.halfSize.x, -this.halfSize.y);
          this.drawText(_0x37f497);
          _0x37f497.restore();
        }
      },
      drawText: function () {},
    });
    EntityButtonText = ig.Entity.extend({
      collides: ig.Entity.COLLIDES.NEVER,
      visible: true,
      isClickable: true,
      zIndex: 0x5,
      isClicked: false,
      text: "BUTTON",
      fontSize: 0x24,
      fillStyle: "#000",
      textY: 0x0,
      init: function (_0x3021b9, _0x328d81, _0x38e395) {
        this.parent(_0x3021b9, _0x328d81, _0x38e395);
        this.image = this.image1;
        this.size.x = this.image.width;
        this.size.y = this.image.height;
        this.halfSize = {
          x: this.size.x / 0x2,
          y: this.size.y / 0x2,
        };
        if (!ig.global.wm) {
          this.setup();
          this.repos();
          this.layer = ig.game.currentLayer;
          this.clickTime = ig.system.clock.delta();
          this.timer = new ig.Timer(0.15);
          this.timer.pause();
          this.scaleAnim = this.tween(
            {
              scale: 0.9,
            },
            0.04,
            {
              loop: ig.Tween.Loop.Reverse,
              loopCount: 0x1,
              onComplete: this.callback.bind(this),
            }
          );
          this.font = this.fontSize + "px text";
        }
      },
      clicked: function () {
        if (this.visible) {
          var _0x33378a = this.clickTime;
          this.clickTime = ig.system.clock.delta();
          if (
            !(0.35 > this.clickTime - _0x33378a) &&
            ig.game.currentLayer == this.layer
          ) {
            this.timer.unpause();
            this.isClicked = true;
            this.switchImage();
            this.scaleAnim.start();
          }
        }
      },
      playSFX: function () {
        ig.soundHandler.sfxPlayer.play("button");
      },
      switchImage: function () {
        this.image = this.isClicked ? this.image1 : this.image2;
      },
      draw: function () {
        if (this.visible) {
          var _0x34786a = ig.system.context;
          _0x34786a.save();
          _0x34786a.translate(
            ig.system.getDrawPos(
              this.pos.x.round() - ig.game.screen.x + this.halfSize.x
            ),
            ig.system.getDrawPos(
              this.pos.y - ig.game.screen.y + this.halfSize.y
            )
          );
          this.image.draw(-this.halfSize.x, -this.halfSize.y);
          _0x34786a.font = this.font;
          _0x34786a.fillStyle = this.fillStyle;
          _0x34786a.textAlign = "center";
          _0x34786a.fillText(this.text, 0x0, this.textY);
          _0x34786a.restore();
        }
      },
      setup: function () {},
      callback: function () {},
      repos: function () {},
    });
    EntityButtonPopup = EntityButtonFix.extend({
      update: function () {
        this.parent();
        this.pos.x = this.popup.midX() + this.dx;
        this.pos.y = this.popup.midY() + this.dy;
      },
      draw: function () {},
      drawImage: function () {
        if (this.visible) {
          var _0x2ac76a = ig.system.context;
          _0x2ac76a.save();
          _0x2ac76a.translate(
            ig.system.getDrawPos(this.dx + this.halfSize.x),
            ig.system.getDrawPos(this.dy + this.halfSize.y)
          );
          _0x2ac76a.scale(this.scale, this.scale);
          this.image.draw(-this.halfSize.x, -this.halfSize.y);
          this.drawText(_0x2ac76a);
          _0x2ac76a.restore();
        }
      },
      drawText: function () {},
    });
  });
ig.baked = true;
ig.module("plugins.clickable-div-layer")
  .requires("plugins.data.vector")
  .defines(function () {
    ClickableDivLayer = ig.Class.extend({
      pos: new Vector2(0x0, 0x0),
      size: new Vector2(0x0, 0x0),
      identifier: null,
      invisImagePath: "media/graphics/misc/invisible.png",
      init: function (_0x46bd96) {
        this.pos = new Vector2(_0x46bd96.pos.x, _0x46bd96.pos.y);
        this.size = new Vector2(_0x46bd96.size.x, _0x46bd96.size.y);
        var _0x387acb = "more-games";
        var _0x16302e = "https://www.v-geese.com";
        var _0x529fa1 = false;
        if (_0x46bd96.div_layer_name) {
          _0x387acb = _0x46bd96.div_layer_name;
        }
        if (_0x46bd96.link) {
          _0x16302e = _0x46bd96.link;
        }
        if (_0x46bd96.newWindow) {
          _0x529fa1 = _0x46bd96.newWindow;
        }
        this.createClickableLayer(_0x387acb, _0x16302e, _0x529fa1);
      },
      createClickableLayer: function (_0x2c89, _0x245fc4, _0x475f9a) {
        this.identifier = _0x2c89;
        var _0x510431 = ig.domHandler.getElementById("#" + _0x2c89);
        if (_0x510431) {
          ig.domHandler.show(_0x510431);
          ig.domHandler.attr(_0x510431, "href", _0x245fc4);
        } else {
          this.createClickableOutboundLayer(
            _0x2c89,
            _0x245fc4,
            this.invisImagePath,
            _0x475f9a
          );
        }
      },
      update: function (_0x572aae, _0x373f2d) {
        if (!(this.pos.x === _0x572aae && this.pos.y === _0x373f2d)) {
          this.updatePos(_0x572aae, _0x373f2d);
        }
      },
      updatePos: function (_0x4b8945, _0x44b8b4) {
        this.pos.x = _0x4b8945;
        this.pos.y = _0x44b8b4;
        ig.sizeHandler.dynamicClickableEntityDivs[this.identifier] = {};
        ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].width =
          this.size.x;
        ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].height =
          this.size.y;
        ig.sizeHandler.dynamicClickableEntityDivs[
          this.identifier
        ].entity_pos_x = this.pos.x;
        ig.sizeHandler.dynamicClickableEntityDivs[
          this.identifier
        ].entity_pos_y = this.pos.y;
      },
      createClickableOutboundLayer: function (
        _0x503892,
        _0x338e4b,
        _0x180e1c,
        _0x43c4ef
      ) {
        var _0xe38a66 = ig.domHandler.create("div");
        ig.domHandler.attr(_0xe38a66, "id", _0x503892);
        var _0x38cfe8 = ig.domHandler.create("a");
        ig.domHandler.addEvent(_0xe38a66, "mousedown", function (_0x25895f) {
          _0x25895f.preventDefault();
        });
        if (_0x43c4ef) {
          ig.domHandler.attr(_0x38cfe8, "href", _0x338e4b);
          ig.domHandler.attr(_0x38cfe8, "target", "_blank");
        } else {
          ig.domHandler.attr(_0x38cfe8, "href", _0x338e4b);
        }
        _0x338e4b = ig.domHandler.create("img");
        ig.domHandler.css(_0x338e4b, {
          width: "100%",
          height: "100%",
        });
        ig.domHandler.attr(_0x338e4b, "src", _0x180e1c);
        _0x180e1c = Math.min(
          ig.sizeHandler.scaleRatioMultiplier.x,
          ig.sizeHandler.scaleRatioMultiplier.y
        );
        if (ig.ua.mobile) {
          _0x43c4ef = ig.domHandler.getElementById("#canvas");
          var _0x231f73 = ig.domHandler.getOffsets(_0x43c4ef);
          _0x43c4ef = _0x231f73.left;
          _0x231f73 = _0x231f73.top;
          if (ig.sizeHandler.disableStretchToFitOnMobileFlag) {
            _0x43c4ef =
              Math.floor(
                _0x43c4ef + this.pos.x * ig.sizeHandler.scaleRatioMultiplier.x
              ) + "px";
            var _0x231f73 =
              Math.floor(
                _0x231f73 + this.pos.y * ig.sizeHandler.scaleRatioMultiplier.y
              ) + "px";
            var _0x4db43d =
              Math.floor(this.size.x * ig.sizeHandler.scaleRatioMultiplier.x) +
              "px";
            _0x180e1c =
              Math.floor(this.size.y * ig.sizeHandler.scaleRatioMultiplier.y) +
              "px";
          } else {
            _0x43c4ef =
              Math.floor(this.pos.x * ig.sizeHandler.sizeRatio.x) + "px";
            _0x231f73 =
              Math.floor(this.pos.y * ig.sizeHandler.sizeRatio.y) + "px";
            _0x4db43d =
              Math.floor(this.size.x * ig.sizeHandler.sizeRatio.x) + "px";
            _0x180e1c =
              Math.floor(this.size.y * ig.sizeHandler.sizeRatio.y) + "px";
          }
        } else {
          _0x43c4ef = ig.domHandler.getElementById("#canvas");
          _0x231f73 = ig.domHandler.getOffsets(_0x43c4ef);
          _0x43c4ef = _0x231f73.left;
          _0x231f73 = _0x231f73.top;
          _0x43c4ef = Math.floor(_0x43c4ef + this.pos.x * _0x180e1c) + "px";
          _0x231f73 =
            Math.floor(_0x231f73 + this.pos.y * _0x180e1c - ig.game.screen.y) +
            "px";
          _0x4db43d = Math.floor(this.size.x * _0x180e1c) + "px";
          _0x180e1c = Math.floor(this.size.y * _0x180e1c) + "px";
        }
        ig.domHandler.css(_0xe38a66, {
          float: "left",
          position: "absolute",
          left: _0x43c4ef,
          top: _0x231f73,
          width: _0x4db43d,
          height: _0x180e1c,
          "z-index": 0x3,
        });
        ig.domHandler.addEvent(
          _0xe38a66,
          "mousemove",
          ig.input.mousemove.bind(ig.input),
          false
        );
        ig.domHandler.appendChild(_0x38cfe8, _0x338e4b);
        ig.domHandler.appendChild(_0xe38a66, _0x38cfe8);
        ig.domHandler.appendToBody(_0xe38a66);
        ig.sizeHandler.dynamicClickableEntityDivs[_0x503892] = {};
        ig.sizeHandler.dynamicClickableEntityDivs[_0x503892].width =
          this.size.x;
        ig.sizeHandler.dynamicClickableEntityDivs[_0x503892].height =
          this.size.y;
        ig.sizeHandler.dynamicClickableEntityDivs[_0x503892].entity_pos_x =
          this.pos.x;
        ig.sizeHandler.dynamicClickableEntityDivs[_0x503892].entity_pos_y =
          this.pos.y;
      },
    });
  });
ig.baked = true;
ig.module("game.entities.buttons.button-branding-logo")
  .requires("game.entities.buttons.button", "plugins.clickable-div-layer")
  .defines(function () {
    EntityButtonBrandingLogo = EntityButtonText.extend({
      type: ig.Entity.TYPE.A,
      gravityFactor: 0x0,
      logo: new ig.AnimationSheet(
        "branding/logo.png",
        _SETTINGS.Branding.Logo.Width,
        _SETTINGS.Branding.Logo.Height
      ),
      zIndex: 0x2711,
      size: {
        x: 0x40,
        y: 0x42,
      },
      clickableLayer: null,
      link: null,
      newWindow: false,
      div_layer_name: "branding-logo",
      name: "brandinglogo",
      init: function (_0xe7306c, _0x3f514d, _0x3fd893) {
        this.parent(_0xe7306c, _0x3f514d, _0x3fd893);
        if (!ig.global.wm) {
          if ("undefined" == typeof wm) {
            if (_SETTINGS.Branding.Logo.Enabled) {
              this.size.x = _SETTINGS.Branding.Logo.Width;
              this.size.y = _SETTINGS.Branding.Logo.Height;
              this.anims.idle = new ig.Animation(this.logo, 0x0, [0x0], true);
              this.currentAnim = this.anims.idle;
              if (_0x3fd893 && _0x3fd893.centralize) {
                this.pos.x = ig.system.width / 0x2 - this.size.x / 0x2;
                console.log("centralize true ... centering branded logo ...");
              }
              if (_SETTINGS.Branding.Logo.LinkEnabled) {
                this.link = _SETTINGS.Branding.Logo.Link;
                this.newWindow = _SETTINGS.Branding.Logo.NewWindow;
                this.clickableLayer = new ClickableDivLayer(this);
              }
            } else {
              this.kill();
              return;
            }
          }
          this.div_layer_name = _0x3fd893.div_layer_name
            ? _0x3fd893.div_layer_name
            : "branding-logo";
        }
      },
      show: function () {
        var _0x4797eb = ig.domHandler.getElementById("#" + this.div_layer_name);
        ig.domHandler.show(_0x4797eb);
      },
      hide: function () {
        var _0x4915db = ig.domHandler.getElementById("#" + this.div_layer_name);
        ig.domHandler.hide(_0x4915db);
      },
      clicked: function () {},
      clicking: function () {},
      released: function () {},
    });
  });
ig.baked = true;
ig.module("game.entities.branding-logo-placeholder")
  .requires("impact.entity", "game.entities.buttons.button-branding-logo")
  .defines(function () {
    EntityBrandingLogoPlaceholder = ig.Entity.extend({
      gravityFactor: 0x0,
      size: {
        x: 0x20,
        y: 0x20,
      },
      _wmDrawBox: true,
      _wmBoxColor: "rgba(0, 0, 255, 0.7)",
      init: function (_0x3fd732, _0x3022f1, _0x109492) {
        this.parent(_0x3fd732, _0x3022f1, _0x109492);
        if (_0x109492) {
          console.log("settings found ... using that div layer name");
          _0x3fd732 = _0x109492.div_layer_name;
          console.log("settings.centralize:", _0x109492.centralize);
          switch (_0x109492.centralize) {
            case "true":
              console.log("centralize true");
              centralize = true;
              break;
            case "false":
              console.log("centralize false");
              centralize = false;
              break;
            default:
              console.log("default ... centralize false");
              centralize = false;
          }
        } else {
          _0x3fd732 = "branding-logo";
          centralize = false;
        }
        if ("undefined" == typeof wm) {
          if (_SETTINGS.Branding.Logo.Enabled) {
            try {
              ig.game.spawnEntity(
                EntityButtonBrandingLogo,
                this.pos.x,
                this.pos.y,
                {
                  div_layer_name: _0x3fd732,
                  centralize: centralize,
                }
              );
            } catch (_0x3b84f8) {
              console.log(_0x3b84f8);
            }
          }
          this.kill();
        }
      },
    });
  });
ig.baked = true;
ig.module("game.entities.buttons.button-more-games")
  .requires("game.entities.buttons.button", "plugins.clickable-div-layer")
  .defines(function () {
    EntityButtonMoreGames = EntityButtonFix.extend({
      image: new ig.Image("media/graphics/sprites/ui/btn-moregames.png"),
      clickableLayer: null,
      link: null,
      newWindow: false,
      div_layer_name: "more-games",
      name: "moregames",
      fontSize: 0x24,
      init: function (_0x55a492, _0x3c9dce, _0x23537f) {
        if (!ig.global.wm) {
          this.text = _STRINGS.Game.MoreGames;
        }
        this.parent(_0x55a492, _0x3c9dce, _0x23537f);
        if (!ig.global.wm) {
          this.div_layer_name = _0x23537f.div_layer_name
            ? _0x23537f.div_layer_name
            : "more-games";
          if (_SETTINGS.MoreGames.Enabled) {
            if (_SETTINGS.MoreGames.Link) {
              this.link = _SETTINGS.MoreGames.Link;
            }
            if (_SETTINGS.MoreGames.NewWindow) {
              this.newWindow = _SETTINGS.MoreGames.NewWindow;
            }
            this.clickableLayer = new ClickableDivLayer(this);
            this.repos();
            ig.sizeHandler.resizeLayers();
          } else {
            this.kill();
          }
        }
      },
      show: function () {
        var _0x536361 = ig.domHandler.getElementById("#" + this.div_layer_name);
        if (_0x536361) {
          ig.domHandler.show(_0x536361);
        }
      },
      hide: function () {
        var _0x5dae26 = ig.domHandler.getElementById("#" + this.div_layer_name);
        if (_0x5dae26) {
          ig.domHandler.hide(_0x5dae26);
        }
      },
      repos: function () {
        this.pos.x = ig.game.midX - this.halfSize.x - 0xe6;
        this.pos.y = ig.game.midY + 0xe6;
        if (this.clickableLayer) {
          this.clickableLayer.updatePos(this.pos.x, this.pos.y);
        }
      },
    });
  });
ig.baked = true;
ig.module("game.mjs-game")
  .requires(
    "plugins.patches.fps-limit-patch",
    "plugins.patches.timer-patch",
    "plugins.patches.user-agent-patch",
    "plugins.patches.webkit-image-smoothing-patch",
    "plugins.patches.windowfocus-onMouseDown-patch",
    "plugins.patches.input-patch",
    "plugins.data.vector",
    "plugins.data.color-rgb",
    "plugins.font.font-loader",
    "plugins.handlers.dom-handler",
    "plugins.handlers.size-handler",
    "plugins.handlers.api-handler",
    "plugins.handlers.visibility-handler",
    "plugins.audio.sound-handler",
    "plugins.io.io-manager",
    "plugins.io.storage-manager",
    "plugins.splash-loader",
    "plugins.tweens-handler",
    "plugins.url-parameters",
    "plugins.director",
    "plugins.impact-storage",
    "plugins.fullscreen",
    "game.plugin",
    "plugins.astar",
    "plugins.branding.splash",
    "game.entities.branding-logo-placeholder",
    "game.entities.buttons.button-more-games"
  )
  .defines(function () {
    MJSGame = ig.Game.extend({
      name: "MJS-Game",
      version: "0.0.0",
      frameworkVersion: "1.1.2",
      sessionData: {},
      io: null,
      paused: false,
      tweens: null,
      layers: {
        base: 0x0,
        popup: 0xa,
        buttonDisabled: 0x32,
      },
      map: "pool",
      level: 0x1,
      gravity: 0x12c,
      init: function () {
        this.tweens = new ig.TweensHandler();
        this.setupMarketJsGameCenter();
        this.io = new IoManager();
        this.setupUrlParams = new ig.UrlParameters();
        this.removeLoadingWheel();
        this.setupStorageManager();
      },
      initData: function () {
        return (this.sessionData = {
          sfx: 0x1,
          bgm: 0x1,
        });
      },
      setupMarketJsGameCenter: function () {
        if (_SETTINGS) {
          if (_SETTINGS.MarketJSGameCenter) {
            var _0x11d4e2 = ig.domHandler.getElementByClass(
              "gamecenter-activator"
            );
            if (
              _SETTINGS.MarketJSGameCenter.Activator.Enabled &&
              _SETTINGS.MarketJSGameCenter.Activator.Position
            ) {
              console.log("MarketJSGameCenter activator settings present ....");
              ig.domHandler.css(_0x11d4e2, {
                position: "absolute",
                left: _SETTINGS.MarketJSGameCenter.Activator.Position.Left,
                top: _SETTINGS.MarketJSGameCenter.Activator.Position.Top,
                "z-index": 0x3,
              });
            }
            ig.domHandler.show(_0x11d4e2);
          } else {
            console.log(
              "MarketJSGameCenter settings not defined in game settings"
            );
          }
        }
      },
      finalize: function () {
        this.start();
        ig.sizeHandler.reorient();
      },
      removeLoadingWheel: function () {
        try {
          $("#ajaxbar").css("background", "none");
        } catch (_0x4030e3) {
          console.log(_0x4030e3);
        }
      },
      showDebugMenu: function () {
        console.log("showing debug menu ...");
        ig.Entity._debugShowBoxes = true;
        $(".ig_debug").show();
      },
      start: function () {
        this.resetPlayerStats();
        this.director = new ig.Director(this, [LevelLevel1]);
        if (_SETTINGS.Branding.Splash.Enabled) {
          try {
            this.branding = new ig.BrandingSplash();
          } catch (_0x3f3755) {
            console.log(_0x3f3755);
            console.log("Loading original levels ...");
            this.director.loadLevel(this.director.currentLevel);
          }
        } else {
          this.director.loadLevel(this.director.currentLevel);
        }
        if (
          _SETTINGS.Branding.Splash.Enabled ||
          _SETTINGS.DeveloperBranding.Splash.Enabled
        ) {
          this.spawnEntity(EntityPointerSelector, 0x32, 0x32);
        }
      },
      fpsCount: function () {
        if (!this.fpsTimer) {
          this.fpsTimer = new ig.Timer(0x1);
        }
        if (this.fpsTimer && 0x0 > this.fpsTimer.delta()) {
          if (null != this.fpsCounter) {
            this.fpsCounter++;
          } else {
            this.fpsCounter = 0x0;
          }
        } else {
          ig.game.fps = this.fpsCounter;
          this.fpsCounter = 0x0;
          this.fpsTimer.reset();
        }
      },
      endGame: function () {
        console.log("End game");
        ig.soundHandler.bgmPlayer.stop();
        ig.apiHandler.run("MJSEnd");
      },
      resetPlayerStats: function () {
        ig.log("resetting player stats ...");
        this.playerStats = {
          id: this.playerStats ? this.playerStats.id : null,
        };
      },
      pauseGame: function () {
        ig.system.stopRunLoop.call(ig.system);
        ig.game.tweens.onSystemPause();
        ig.soundHandler.muteAll();
        if (ig.control) {
          ig.control.pauseGame();
        }
        console.log("Game Paused");
      },
      resumeGame: function () {
        ig.system.startRunLoop.call(ig.system);
        ig.game.tweens.onSystemResume();
        ig.soundHandler.unmuteAll();
        if (ig.control) {
          ig.control.resumeGame();
        }
        console.log("Game Resumed");
      },
      showOverlay: function (_0x340fd8) {
        for (i = 0x0; i < _0x340fd8.length; i++) {
          if ($("#" + _0x340fd8[i])) {
            $("#" + _0x340fd8[i]).show();
          }
          if (document.getElementById(_0x340fd8[i])) {
            document.getElementById(_0x340fd8[i]).style.visibility = "visible";
          }
        }
      },
      hideOverlay: function (_0x4b8135) {
        for (i = 0x0; i < _0x4b8135.length; i++) {
          if ($("#" + _0x4b8135[i])) {
            $("#" + _0x4b8135[i]).hide();
          }
          if (document.getElementById(_0x4b8135[i])) {
            document.getElementById(_0x4b8135[i]).style.visibility = "hidden";
          }
        }
      },
      clearCanvas: function (_0x497c0f, _0x429b22, _0x54fac3) {
        var _0x4c2786 = _0x497c0f.canvas;
        _0x497c0f.clearRect(0x0, 0x0, _0x429b22, _0x54fac3);
        _0x4c2786.style.display = "none";
        _0x4c2786.offsetHeight;
        _0x4c2786.style.display = "inherit";
      },
      drawDebug: function () {
        if (
          !ig.global.wm &&
          (this.debugEnable(),
          this.viewDebug &&
            ((ig.system.context.fillStyle = "#000000"),
            (ig.system.context.globalAlpha = 0.35),
            ig.system.context.fillRect(
              0x0,
              0x0,
              ig.system.width / 0x4,
              ig.system.height
            ),
            (ig.system.context.globalAlpha = 0x1),
            this.debug && 0x0 < this.debug.length))
        ) {
          for (i = 0x0; i < this.debug.length; i++) {
            ig.system.context.font = "10px Arial";
            ig.system.context.fillStyle = "#ffffff";
            ig.system.context.fillText(
              this.debugLine - this.debug.length + i + ": " + this.debug[i],
              0xa,
              0x32 + 0xa * i
            );
          }
        }
      },
      debugCL: function (_0x4970c5) {
        if (this.debug) {
          if (!(0x32 > this.debug.length)) {
            this.debug.splice(0x0, 0x1);
          }
          this.debug.push(_0x4970c5);
          this.debugLine++;
        } else {
          this.debug = [];
          this.debugLine = 0x1;
          this.debug.push(_0x4970c5);
        }
        console.log(_0x4970c5);
      },
      debugEnable: function () {
        if (ig.input.pressed("click")) {
          this.debugEnableTimer = new ig.Timer(0x2);
        }
        if (this.debugEnableTimer && 0x0 > this.debugEnableTimer.delta()) {
          if (ig.input.released("click")) {
            this.debugEnableTimer = null;
          }
        } else if (
          this.debugEnableTimer &&
          0x0 < this.debugEnableTimer.delta()
        ) {
          this.debugEnableTimer = null;
          this.viewDebug = !this.viewDebug;
        }
      },
      drawVersion: function () {
        if (
          "undefined" !== typeof _SETTINGS.Versioning &&
          null !== _SETTINGS.Versioning &&
          _SETTINGS.Versioning.DrawVersion
        ) {
          var _0xa8d17b = ig.system.context;
          fontSize = _SETTINGS.Versioning.FontSize;
          fontFamily = _SETTINGS.Versioning.FontFamily;
          fillStyle = _SETTINGS.Versioning.FillStyle;
          _0xa8d17b.save();
          _0xa8d17b.textBaseline = "bottom";
          _0xa8d17b.textAlign = "left";
          _0xa8d17b.font = fontSize + " " + fontFamily || "10px Arial";
          _0xa8d17b.fillStyle = fillStyle || "#ffffff";
          _0xa8d17b.fillText(
            "v" +
              _SETTINGS.Versioning.Version +
              "+build." +
              _SETTINGS.Versioning.Build,
            0xa,
            ig.system.height - 0xa
          );
          _0xa8d17b.restore();
        }
      },
    });
  });
ig.baked = true;
ig.module("game.entities.marketjs-splash")
  .requires("impact.entity")
  .defines(function () {
    EntityMarketJSSplash = ig.Entity.extend({
      logoImage: new ig.Image("media/graphics/vgeese/logo.png"),
      letterImage: new ig.Image("media/graphics/vgeese/letter-m.png"),
      brandingText: new ig.Image("media/graphics/vgeese/branding-text.png"),
      scale: {
        x: 0x1,
        y: 0x1,
      },
      init: function () {
        if (_SETTINGS.DeveloperBranding.Splash.Enabled) {
          this.updateScale();
          this.originX = 0x0;
          this.logo = {
            scale: 0.02,
            alpha: 0x0,
            x: -this.logoImage.width / 0x2,
            y: -this.logoImage.height / 0x2,
          };
          var _0x59fe39 = this.tween(
            {
              logo: {
                scale: 0x1,
                alpha: 0x1,
              },
            },
            0.48,
            {
              delay: 0.3,
              easing: ig.Tween.Easing.Back.EaseOut,
              onComplete: function () {
                ig.soundHandler.sfxPlayer.play("logosplash1");
                this.tween({}, 0.59, {
                  onComplete: function () {
                    ig.soundHandler.sfxPlayer.play("logosplash2");
                  },
                }).start();
              }.bind(this),
            }
          );
          this.letterM = {
            scale: 0.02,
            alpha: 0x0,
            x: -this.letterImage.width / 0x2,
            y: -this.letterImage.height / 0x2 - 0xa,
          };
          var _0x55aaac = this.tween(
            {
              letterM: {
                scale: 0x1,
                alpha: 0x1,
              },
            },
            0.48,
            {
              easing: ig.Tween.Easing.Back.EaseOut,
            }
          );
          this.text = {
            alpha: 0x1,
            x: -this.brandingText.width / 0x2,
            y: -this.brandingText.height / 0x2,
            coverW: 0x2 * this.brandingText.width,
            coverH: 0x2 * this.brandingText.height,
          };
          this.text.originX = -this.brandingText.width / 0x2 - 0x10e;
          this.text.cx = -this.text.coverW - 0x104;
          this.text.cy = -this.brandingText.height;
          var _0x503569 = this.tween(
            {
              originX: -0x1c2,
              logo: {
                scale: 0.82,
              },
              letterM: {
                scale: 0.82,
              },
              text: {
                originX: 0x96,
              },
            },
            0.78,
            {
              delay: 0.4,
              easing: ig.Tween.Easing.Back.EaseOut,
            }
          );
          var _0x2fc014 = this.tween(
            {
              logo: {
                alpha: 0x0,
              },
              letterM: {
                alpha: 0x0,
              },
              text: {
                alpha: 0x0,
              },
            },
            0.9,
            {
              delay: 1.5,
              onComplete: function () {
                this.goToMenu();
              }.bind(this),
            }
          );
          _0x59fe39.chain(_0x55aaac);
          _0x55aaac.chain(_0x503569);
          _0x503569.chain(_0x2fc014);
          _0x59fe39.start();
          this.tween({}, 0.25, {
            onComplete: function () {
              ig.soundHandler.sfxPlayer.play("logosplash1");
            },
          }).start();
        } else {
          this.goToMenu();
        }
      },
      goToMenu: function () {
        ig.soundHandler.sfxPlayer.soundList.logosplash1.mute(true);
        ig.soundHandler.sfxPlayer.soundList.logosplash2.mute(true);
        ig.soundHandler.bgmPlayer.play("background");
        ig.game.director.nextLevel();
        this.kill();
      },
      update: function () {
        if (0x0 < this.tweens.length) {
          var _0x467323 = [];
          for (
            var _0x3ac586 = 0x0;
            _0x3ac586 < this.tweens.length;
            _0x3ac586++
          ) {
            this.tweens[_0x3ac586].update();
            if (!this.tweens[_0x3ac586].complete) {
              _0x467323.push(this.tweens[_0x3ac586]);
            }
          }
          this.tweens = _0x467323;
        }
        this.updateScale();
      },
      draw: function () {
        var _0xc55024 = ig.system.context;
        _0xc55024.fillStyle = "#FFF";
        _0xc55024.fillRect(0x0, 0x0, ig.system.width, ig.system.height);
        _0xc55024.save();
        _0xc55024.translate(ig.system.width / 0x2, ig.system.height / 0x2);
        _0xc55024.scale(this.scale.x, this.scale.y);
        _0xc55024.imageSmoothingEnabled = true;
        _0xc55024.globalAlpha = this.text.alpha;
        this.brandingText.draw(this.text.originX + this.text.x, this.text.y);
        _0xc55024.globalAlpha = 0x1;
        _0xc55024.fillRect(
          this.text.cx,
          this.text.cy,
          this.originX - this.text.cx,
          this.text.coverH
        );
        _0xc55024.save();
        _0xc55024.globalAlpha = this.logo.alpha;
        _0xc55024.scale(this.logo.scale, this.logo.scale);
        this.logoImage.draw(this.originX + this.logo.x, this.logo.y);
        _0xc55024.restore();
        _0xc55024.save();
        _0xc55024.globalAlpha = this.letterM.alpha;
        _0xc55024.scale(this.letterM.scale, this.letterM.scale);
        this.letterImage.draw(this.originX + this.letterM.x, this.letterM.y);
        _0xc55024.restore();
        _0xc55024.restore();
      },
      updateScale: function () {
        if (!this.skipUpdateScale) {
          var _0x99d37a = window.innerWidth / window.innerHeight;
          var _0x194e47 = ig.system.height / 0x500;
          var _0x434b92 = ig.system.width / 0x500;
          if (ig.responsive) {
            this.scale.x = this.scale.y =
              0x1 < _0x99d37a ? _0x194e47 : _0x434b92;
          } else {
            if (
              ig.ua.mobile &&
              !ig.sizeHandler.disableStretchToFitOnMobileFlag
            ) {
              var _0x14801e = ig.system.width / ig.system.height;
              if (0x1 < _0x99d37a) {
                this.scale.x = (_0x14801e / _0x99d37a) * _0x194e47;
                this.scale.y = _0x194e47;
              } else {
                this.scale.x = _0x434b92;
                this.scale.y = (_0x99d37a / _0x14801e) * _0x434b92;
              }
            } else {
              this.skipUpdateScale = true;
              _0x434b92 = ig.system.width / 0x438;
              this.scale.x = this.scale.y =
                _0x194e47 < _0x434b92 ? _0x194e47 : _0x434b92;
            }
          }
          if (0x1 < this.scale.x) {
            this.scale.x = 0x1;
          }
          if (0x1 < this.scale.y) {
            this.scale.y = 0x1;
          }
        }
      },
    });
  });
ig.baked = true;
ig.module("game.levels.opening")
  .requires("impact.image", "game.entities.marketjs-splash")
  .defines(function () {
    LevelOpening = {
      entities: [
        {
          type: "EntityMarketJSSplash",
          x: 0x0,
          y: 0x0,
        },
      ],
      layer: [],
    };
  });
ig.baked = true;
ig.module("game.entities.popups.popup")
  .requires("impact.entity")
  .defines(function () {
    EntityPopup = ig.Entity.extend({
      collides: ig.Entity.COLLIDES.NEVER,
      image: new ig.Image("media/graphics/sprites/ui/panel.png"),
      scale: 0.01,
      delayShown: 0x0,
      overlayAlpha: 0x0,
      zIndex: 0x14,
      titleFont: "86px text",
      entities: [],
      showDt: 0.55,
      titleY: 0x55,
      layer: 0xa,
      init: function (_0x3ba7db, _0x3fd67d, _0xf5a4bc) {
        this.parent(_0x3ba7db, _0x3fd67d, _0xf5a4bc);
        this.size.x = this.image.width;
        this.size.y = this.image.height;
        this.halfSize = {
          x: this.size.x / 0x2,
          y: this.size.y / 0x2,
        };
        this.pos.x = ig.game.midX - this.halfSize.x;
        this.pos.y = -this.size.y - 0x32;
        this.savedLayer = ig.game.currentLayer;
        ig.game.currentLayer = this.layer;
        this.title = _STRINGS.Game.Settings;
        this.titleY -= this.halfSize.y;
        this.addEntities();
        ig.game.sortEntitiesDeferred();
        this.show();
      },
      addEntities: function () {},
      show: function () {
        this.tween(
          {
            pos: {
              y: ig.game.midY - this.halfSize.y,
            },
            overlayAlpha: 0.6,
            scale: 0x1,
          },
          this.showDt,
          {
            delay: this.delayShown,
            easing: ig.Tween.Easing.Back.EaseOut,
            onComplete: function () {
              this.callbackIn();
            }.bind(this),
          }
        ).start();
      },
      hide: function (_0x3ce2f3) {
        ig.game.currentLayer = ig.game.layers.buttonDisabled;
        this.tween(
          {
            pos: {
              y: -this.size.y - 0x32,
            },
            scale: 0.3,
            overlayAlpha: 0x0,
          },
          0.4,
          {
            easing: ig.Tween.Easing.Back.EaseIn,
            onComplete: function () {
              ig.game.currentLayer = this.savedLayer;
              this.callback(_0x3ce2f3);
              this.kill();
            }.bind(this),
          }
        ).start();
      },
      update: function () {
        if (0x0 < this.tweens.length) {
          var _0x3e5b5c = [];
          for (
            var _0x426a52 = 0x0;
            _0x426a52 < this.tweens.length;
            _0x426a52++
          ) {
            this.tweens[_0x426a52].update();
            if (!this.tweens[_0x426a52].complete) {
              _0x3e5b5c.push(this.tweens[_0x426a52]);
            }
          }
          this.tweens = _0x3e5b5c;
        }
      },
      draw: function () {
        var _0x488ccf = ig.system.context;
        _0x488ccf.save();
        _0x488ccf.setTransform(0x1, 0x0, 0x0, 0x1, 0x0, 0x0);
        _0x488ccf.fillStyle = "rgba(0,0,0," + this.overlayAlpha + ")";
        _0x488ccf.fillRect(0x0, 0x0, ig.system.width, ig.system.height);
        _0x488ccf.translate(
          ig.system.getDrawPos(this.pos.x + this.halfSize.x),
          ig.system.getDrawPos(this.pos.y + this.halfSize.y)
        );
        _0x488ccf.scale(this.scale, this.scale);
        this.image.draw(-this.halfSize.x, -this.halfSize.y);
        this.drawText(_0x488ccf);
        this.extraDraw(_0x488ccf);
        this.drawEntities(_0x488ccf);
        _0x488ccf.restore();
      },
      callback: function () {},
      callbackIn: function () {},
      extraDraw: function () {},
      drawText: function (_0x4454e5) {
        _0x4454e5.font = this.titleFont;
        _0x4454e5.textAlign = "center";
        _0x4454e5.fillStyle = "#FFF";
        _0x4454e5.fillText(this.title, 0x0, this.titleY);
      },
      drawEntities: function (_0x2cb4f) {
        for (
          var _0xfea89b = 0x0;
          _0xfea89b < this.entities.length;
          _0xfea89b++
        ) {
          this.entities[_0xfea89b].drawImage(_0x2cb4f);
        }
      },
      kill: function () {
        for (
          var _0x9556c0 = 0x0;
          _0x9556c0 < this.entities.length;
          _0x9556c0++
        ) {
          this.entities[_0x9556c0].kill();
        }
        if (this.btMoreGames) {
          this.btMoreGames.kill();
        }
        this.parent();
      },
      repos: function () {
        this.pos.x = ig.game.midX - this.halfSize.x;
        this.pos.y = ig.game.midY - this.halfSize.y;
      },
    });
  });
ig.baked = true;
ig.module("game.entities.popups.popup-tutorial")
  .requires("game.entities.popups.popup", "game.entities.buttons.button")
  .defines(function () {
    EntityPopupTutorial = EntityPopup.extend({
      tutorials: [
        new ig.Image("media/graphics/sprites/tutorial/tutorial1.png"),
        new ig.Image("media/graphics/sprites/tutorial/tutorial2.png"),
      ],
      pageId: 0x0,
      addEntities: function () {
        this.title = _STRINGS.Game.Tutorial;
        var _0x4be0fd = this.zIndex + 0x1;
        var _0x5e02ff = this.halfSize.y + 0xa;
        if (ig.home.btMoreGames) {
          ig.home.btMoreGames.hide();
        }
        var _0x2f9b5d = EntityButtonCloseTutorial;
        if (ig.game.load("tutorial")) {
          ig.game.save("tutorial", false);
          _0x2f9b5d = EntityButtonPlayTutorial;
        }
        this.entities.push(
          ig.game.spawnEntity(_0x2f9b5d, 0x0, 0x0, {
            popup: this,
            dx: -0x47,
            dy: _0x5e02ff,
            zIndex: _0x4be0fd,
          })
        );
        _0x5e02ff = -0x6e;
        _0x2f9b5d = 0x3ca > ig.system.width ? 0x64 : 0x0;
        this.arrowNext = ig.game.spawnEntity(EntityButtonArrowNext, 0x0, 0x0, {
          popup: this,
          dx: this.halfSize.x - _0x2f9b5d,
          dy: _0x5e02ff,
          zIndex: _0x4be0fd,
        });
        this.entities.push(this.arrowNext);
        this.arrowPrevious = ig.game.spawnEntity(
          EntityButtonArrowPrevious,
          0x0,
          0x0,
          {
            popup: this,
            dx: -this.halfSize.x - (0x6e - _0x2f9b5d),
            dy: _0x5e02ff,
            zIndex: _0x4be0fd,
            visible: false,
          }
        );
        this.entities.push(this.arrowPrevious);
        _0x4be0fd = this.tutorials[0x0];
        this.imageX = -_0x4be0fd.width / 0x2;
        this.imageY = -_0x4be0fd.height / 0x2 - 0x32;
        this.textY0 = _0x4be0fd.height / 0x2;
        this.textY1 = this.textY0 + 0x3c;
        this.text1 = _STRINGS.Game.Tutorial1Line1;
        this.text2 = _STRINGS.Game.Tutorial1Line2;
        this.titleY -= 0xc;
        this.tutorialImage = this.tutorials[0x0];
      },
      extraDraw: function (_0x33f0d7) {
        ig.drawUtil.fontStyle("bold 32px Arial", "#0154c2", "center");
        _0x33f0d7.fillText(this.text1, 0x0, this.textY0);
        _0x33f0d7.fillText(this.text2, 0x0, this.textY1);
        this.tutorialImage.draw(this.imageX, this.imageY);
      },
      next: function () {
        var _0x5b0aac = this.tutorials.length - 0x1;
        if (this.pageId < _0x5b0aac) {
          this.pageId++;
          this.tutorialImage = this.tutorials[this.pageId];
          if (this.pageId === _0x5b0aac) {
            this.arrowNext.visible = false;
          }
          this.arrowPrevious.visible = true;
          this.text1 =
            _STRINGS.Game["Tutorial" + (this.pageId + 0x1) + "Line1"];
          this.text2 =
            _STRINGS.Game["Tutorial" + (this.pageId + 0x1) + "Line2"];
        }
      },
      previous: function () {
        if (0x0 < this.pageId) {
          this.pageId--;
          this.tutorialImage = this.tutorials[this.pageId];
          if (0x0 === this.pageId) {
            this.arrowPrevious.visible = false;
          }
          this.arrowNext.visible = true;
          this.text1 =
            _STRINGS.Game["Tutorial" + (this.pageId + 0x1) + "Line1"];
          this.text2 =
            _STRINGS.Game["Tutorial" + (this.pageId + 0x1) + "Line2"];
        }
      },
      callback: function (_0x194962) {
        if ("play" === _0x194962) {
          ig.home.startGame();
        } else if (ig.home.btMoreGames) {
          ig.home.btMoreGames.show();
        }
      },
      repos: function () {
        this.parent();
        var _0x41352b = 0x3ca > ig.system.width ? 0x64 : 0x0;
        this.arrowNext.dx = this.halfSize.x - _0x41352b;
        this.arrowPrevious.dx = -this.halfSize.x - (0x6e - _0x41352b);
      },
    });
    EntityButtonCloseTutorial = EntityButtonPopup.extend({
      image: new ig.Image("media/graphics/sprites/ui/btn-home.png"),
      callback: function () {
        this.popup.hide("");
      },
    });
    EntityButtonPlayTutorial = EntityButtonPopup.extend({
      image: new ig.Image("media/graphics/sprites/ui/btn-resume.png"),
      callback: function () {
        this.popup.hide("play");
      },
    });
    EntityButtonArrowNext = EntityButtonPopup.extend({
      image: new ig.Image("media/graphics/sprites/ui/btn-arrow.png"),
      callback: function () {
        this.popup.next();
      },
    });
    EntityButtonArrowPrevious = EntityButtonArrowNext.extend({
      callback: function () {
        this.popup.previous();
      },
      drawImage: function () {
        if (this.visible) {
          var _0x1e85b8 = ig.system.context;
          _0x1e85b8.save();
          _0x1e85b8.translate(
            ig.system.getDrawPos(this.dx + this.halfSize.x),
            ig.system.getDrawPos(this.dy + this.halfSize.y)
          );
          _0x1e85b8.scale(-this.scale, this.scale);
          this.image.draw(-this.halfSize.x, -this.halfSize.y);
          _0x1e85b8.restore();
        }
      },
    });
  });
ig.baked = true;
ig.module("game.entities.buttons.button-play")
  .requires(
    "game.entities.buttons.button",
    "game.entities.popups.popup-tutorial"
  )
  .defines(function () {
    EntityButtonPlay = EntityButtonFix.extend({
      image: new ig.Image("media/graphics/sprites/ui/btn-play.png"),
      repos: function () {
        this.pos.x = ig.game.midX - this.halfSize.x;
        this.pos.y = ig.game.midY + 0x5a;
      },
      callback: function () {
        if (ig.game.load("tutorial")) {
          ig.game.spawnEntity(EntityPopupTutorial);
        } else {
          ig.home.startGame();
        }
      },
      update: function () {
        this.parent();
        if (ig.input.pressed("enter")) {
          this.callback();
        }
      },
    });
  });
ig.baked = true;
ig.module("game.entities.buttons.button-audio")
  .requires("game.entities.buttons.button")
  .defines(function () {
    EntityButtonAudio = EntityButtonPopup.extend({
      image1: new ig.Image("media/graphics/sprites/ui/sound-toggle-on.png"),
      image2: new ig.Image("media/graphics/sprites/ui/sound-toggle-off.png"),
      audioOn: 0x1,
      audioType: "sfx",
      text: "",
      fontSize: 0x30,
      textY: 0x4,
      init: function (_0x934af2, _0x3c30d4, _0x165a47) {
        this.image = this.image1;
        this.parent(_0x934af2, _0x3c30d4, _0x165a47);
        this.audioOn = ig.game.load(this.audioType);
        this.switchImage();
      },
      switchImage: function () {
        this.image = this.audioOn ? this.image1 : this.image2;
      },
      callback: function () {
        this.audioOn = !this.audioOn;
        this.switchImage();
        ig.game.save(this.audioType, this.audioOn);
        if ("sfx" == this.audioType) {
          if (this.audioOn) {
            ig.soundHandler.unmuteSFX();
          } else {
            ig.soundHandler.muteSFX();
          }
        } else if (this.audioOn) {
          ig.soundHandler.unmuteBGM();
        } else {
          ig.soundHandler.muteBGM();
        }
      },
      playSFX: function () {
        if ("bgm" === this.audioType || this.audioOn) {
          ig.soundHandler.sfxPlayer.play("button");
        }
      },
      underPointer: function () {
        var _0x594f1b = ig.game.io.getClickPos();
        return this.containPoint(_0x594f1b);
      },
    });
    EntityButtonBGM = EntityButtonAudio.extend({
      image1: new ig.Image("media/graphics/sprites/ui/music-toggle-on.png"),
      image2: new ig.Image("media/graphics/sprites/ui/music-toggle-off.png"),
      audioType: "bgm",
    });
  });
ig.baked = true;
ig.module("game.entities.popups.popup-confirmation")
  .requires("game.entities.popups.popup", "game.entities.buttons.button")
  .defines(function () {
    EntityPopupConfirmation = EntityPopup.extend({
      layer: 0x14,
      isRV: false,
      addEntities: function () {
        this.title = this.isRV
          ? _STRINGS.Game.Reward
          : _STRINGS.Game.Confirmation;
        var _0x532181 = this.zIndex + 0x1;
        var _0xbab8c5 = this.halfSize.y - 0xa0 - 0x3c;
        this.entities.push(
          ig.game.spawnEntity(
            this.isRV ? EntityButtonYesRV : EntityButtonYes,
            0x0,
            0x0,
            {
              popup: this,
              dx: -265.5,
              dy: _0xbab8c5,
              zIndex: _0x532181,
            }
          )
        );
        this.entities.push(
          ig.game.spawnEntity(EntityButtonNo, 0x0, 0x0, {
            popup: this,
            dx: 54.5,
            dy: _0xbab8c5,
            zIndex: _0x532181,
          })
        );
      },
      extraDraw: function (_0x506c30) {
        _0x506c30.strokeStyle = "#404040";
        _0x506c30.font = "75px text";
        _0x506c30.lineWidth = 0xa;
        _0x506c30.lineJoin = "round";
        _0x506c30.textAlign = "center";
        ig.control.drawText(_STRINGS.Game.NewGame, 0x0, -0x55);
        ig.control.drawText(_STRINGS.Game.NewGame2, 0x0, 0x1c);
      },
      callback: function (_0x119306) {
        switch (_0x119306) {
          case "Yes":
            if (ig.game.pausePopup) {
              ig.game.pausePopup.kill();
              ig.game.pausePopup = null;
            }
            ig.control.replay();
        }
      },
    });
    EntityButtonYes = EntityButtonPopup.extend({
      image: new ig.Image("media/graphics/sprites/ui/btn-yes.png"),
      callback: function () {
        this.popup.hide("Yes");
      },
    });
    EntityButtonNo = EntityButtonPopup.extend({
      image: new ig.Image("media/graphics/sprites/ui/btn-no.png"),
      callback: function () {
        this.popup.hide("No");
      },
    });
  });
ig.baked = true;
ig.module("game.entities.popups.popup-confirmation-home")
  .requires("game.entities.popups.popup-confirmation")
  .defines(function () {
    EntityPopupConfirmationHome = EntityPopupConfirmation.extend({
      addEntities: function () {
        this.parent();
        this.text = _STRINGS.Game.EndGame;
      },
      extraDraw: function (_0x5a7d29) {
        _0x5a7d29.strokeStyle = "#404040";
        _0x5a7d29.font = "75px text";
        _0x5a7d29.lineWidth = 0xa;
        _0x5a7d29.lineJoin = "round";
        _0x5a7d29.textAlign = "center";
        ig.control.drawText(this.text, 0x0, -0x1c);
      },
      callback: function (_0x405e48) {
        switch (_0x405e48) {
          case "Yes":
            if (ig.game.pausePopup) {
              ig.game.pausePopup.kill();
              ig.game.pausePopup = null;
            }
            ig.game.director.jumpTo(LevelHome);
        }
      },
    });
  });
ig.baked = true;
ig.module("game.entities.buttons.button-home")
  .requires(
    "game.entities.buttons.button",
    "game.entities.popups.popup-confirmation-home"
  )
  .defines(function () {
    EntityButtonHome = EntityButtonPopup.extend({
      image: new ig.Image("media/graphics/sprites/ui/btn-home.png"),
      callback: function () {
        if (wgl.over && (!wgl.win || wgl.holeId === ig.params.ballNum.length)) {
          this.popup.hide("home");
        } else {
          ig.game.spawnEntity(EntityPopupConfirmationHome);
          ig.game.pausePopup = this.popup;
        }
      },
    });
  });
ig.baked = true;
ig.module("game.entities.popups.popup-settings")
  .requires(
    "game.entities.popups.popup",
    "game.entities.buttons.button-audio",
    "game.entities.buttons.button-home"
  )
  .defines(function () {
    EntityPopupSettings = EntityPopup.extend({
      addEntities: function () {
        this.title = _STRINGS.Game.Settings;
        var _0x45e2ac = this.zIndex + 0x1;
        var _0x5e4577 = -72.5;
        var _0x5164ad = this.halfSize.y - 0xa0 - 0x53;
        if (ig.home.btMoreGames) {
          ig.home.btMoreGames.hide();
        }
        this.entities.push(
          ig.game.spawnEntity(EntityButtonBackSetting, 0x0, 0x0, {
            popup: this,
            dx: _0x5e4577,
            dy: _0x5164ad,
            zIndex: _0x45e2ac,
          })
        );
        _0x5e4577 = -72.5;
        this.entities.push(
          ig.game.spawnEntity(EntityButtonAudio, 0x0, 0x0, {
            popup: this,
            dx: _0x5e4577 + 0x73,
            dy: -0x8c,
            zIndex: _0x45e2ac,
          })
        );
        this.entities.push(
          ig.game.spawnEntity(EntityButtonBGM, 0x0, 0x0, {
            popup: this,
            dx: _0x5e4577 - 0x73,
            dy: -0x8c,
            zIndex: _0x45e2ac,
          })
        );
      },
      callback: function () {
        if (ig.home.btMoreGames) {
          ig.home.btMoreGames.show();
        }
      },
    });
    EntityButtonBackSetting = EntityButtonPopup.extend({
      image: new ig.Image("media/graphics/sprites/ui/btn-home.png"),
      callback: function () {
        this.popup.hide("");
      },
    });
  });
ig.baked = true;
ig.module("game.entities.buttons.button-settings")
  .requires(
    "game.entities.buttons.button",
    "game.entities.popups.popup-settings"
  )
  .defines(function () {
    EntityButtonSettings = EntityButtonFix.extend({
      image: new ig.Image("media/graphics/sprites/ui/btn-settings.png"),
      repos: function () {
        if (_SETTINGS.MoreGames.Enabled) {
          this.pos.x = ig.game.midX - this.halfSize.x + 0xe6;
          this.pos.y = ig.game.midY + 0xe6;
        } else {
          this.pos.x = ig.game.midX - this.halfSize.x;
          this.pos.y = ig.game.midY + 0x15e;
        }
      },
      callback: function () {
        ig.game.spawnEntity(EntityPopupSettings, 0x0, 0x0);
      },
    });
  });
ig.baked = true;
ig.module("game.entities.buttons.button-tutorial")
  .requires(
    "game.entities.buttons.button",
    "game.entities.popups.popup-tutorial"
  )
  .defines(function () {
    EntityButtonTutorial = EntityButtonFix.extend({
      image: new ig.Image("media/graphics/sprites/ui/btn-tut.png"),
      repos: function () {
        this.pos.x = ig.system.width - this.size.x - 0xf;
        this.pos.y = 0xf;
      },
      callback: function () {
        ig.game.spawnEntity(EntityPopupTutorial);
      },
    });
  });
ig.baked = true;
ig.module("game.entities.controls.home")
  .requires(
    "game.entities.buttons.button-play",
    "game.entities.buttons.button-settings",
    "game.entities.buttons.button-tutorial"
  )
  .defines(function () {
    EntityHome = ig.Entity.extend({
      imageTitle: new ig.Image("media/graphics/sprites/ui/title.png"),
      buttons: [],
      showTitle: true,
      init: function (_0x1ac3c6, _0x5cbccf, _0x50dd70) {
        this.parent(_0x1ac3c6, _0x5cbccf, _0x50dd70);
        ig.control = null;
        ig.home = this;
        wgl.processing = true;
        wgl.cameraEffect = true;
        wgl.holeId = 0x1;
        this.zIndex = ig.game.currentLayer = ig.game.layers.base;
        this.buttons.push(
          ig.game.spawnEntity(EntityButtonPlay, 0x0, 0x0, {
            scale: 0.01,
          })
        );
        this.buttons.push(
          ig.game.spawnEntity(EntityButtonSettings, 0x0, 0x0, {
            scale: 0.01,
          })
        );
        if (_SETTINGS.MoreGames.Enabled) {
          this.btMoreGames = ig.game.spawnEntity(
            EntityButtonMoreGames,
            0x0,
            0x0,
            {
              scale: 0.01,
            }
          );
          this.buttons.push(this.btMoreGames);
        }
        ig.game.spawnEntity(ig.FullscreenButton, 0xf, 0xf, {
          enterImage: new ig.Image("media/graphics/sprites/ui/btn-expand.png"),
          exitImage: new ig.Image("media/graphics/sprites/ui/btn-shrink.png"),
        });
        this.buttons.push(
          ig.game.spawnEntity(EntityButtonTutorial, 0x0, 0x0, {
            scale: 0.01,
          })
        );
        this.titleOffset = {
          x: -this.imageTitle.width / 0x2,
          y: -this.imageTitle.height / 0x2,
        };
        ig.game.sortEntitiesDeferred();
        this.repos();
        this.showUI();
      },
      showUI: function () {
        this.scale = 0.001;
        var _0x447314;
        for (
          var _0x32ca84 = 0x0;
          _0x32ca84 < this.buttons.length;
          _0x32ca84++
        ) {
          _0x447314 = this.buttons[_0x32ca84];
          _0x447314.visible = _0x447314.animating = true;
        }
        this.showTitle = true;
        this.tween(
          {
            scale: 0x1,
          },
          0.34,
          {
            easing: ig.Tween.Easing.Back.EaseOut,
            onComplete: function () {
              for (
                var _0x19ad74 = 0x0;
                _0x19ad74 < this.buttons.length;
                _0x19ad74++
              ) {
                this.buttons[_0x19ad74].animating = false;
              }
            }.bind(this),
          }
        ).start();
      },
      startGame: function () {
        for (
          var _0x442b19 = 0x0;
          _0x442b19 < this.buttons.length;
          _0x442b19++
        ) {
          this.buttons[_0x442b19].animating = true;
        }
        this.tween(
          {
            scale: 0.001,
          },
          0.34,
          {
            easing: ig.Tween.Easing.Back.EaseIn,
            onComplete: function () {
              this.showTitle = false;
              if (wgl.ready) {
                wgl.start();
                ig.game.director.jumpTo(LevelGame);
              }
            }.bind(this),
          }
        ).start();
      },
      update: function () {
        if (0x0 < this.tweens.length) {
          var _0x156763 = [];
          for (
            var _0x172545 = 0x0;
            _0x172545 < this.tweens.length;
            _0x172545++
          ) {
            this.tweens[_0x172545].update();
            if (!this.tweens[_0x172545].complete) {
              _0x156763.push(this.tweens[_0x172545]);
            }
          }
          this.tweens = _0x156763;
        }
      },
      draw: function () {
        if (this.showTitle) {
          var _0x338043 = ig.system.context;
          _0x338043.save();
          _0x338043.translate(ig.game.midX, this.titleY);
          _0x338043.scale(this.scale, this.scale);
          this.imageTitle.draw(this.titleOffset.x, this.titleOffset.y);
          _0x338043.restore();
        }
      },
      repos: function () {
        this.titleY = ig.game.midY + this.titleOffset.y;
      },
    });
  });
ig.baked = true;
ig.module("game.levels.home")
  .requires("game.entities.controls.home")
  .defines(function () {
    LevelHome = {
      entities: [
        {
          type: "EntityHome",
          x: 0x0,
          y: 0x0,
        },
      ],
      layer: [],
    };
  });
ig.baked = true;
ig.module("game.entities.objs.pool").defines(function () {
  ig.EntityPool = ig.Class.extend({
    type: null,
    bin: [],
    init: function (_0x5645bd) {
      this.type = _0x5645bd;
    },
    hide: function (_0xfb7a71) {
      _0xfb7a71.pos.x = _0xfb7a71.pos.y = -0x3e8;
      _0xfb7a71.hidden = true;
    },
    add: function (_0x583eb6) {
      this.bin.push(_0x583eb6);
      this.hide(_0x583eb6);
    },
    get: function () {
      var _0x4b0728;
      _0x4b0728 =
        0x0 < this.bin.length ? this.bin.pop() : ig.game.spawnEntity(this.type);
      _0x4b0728.hidden = false;
      return _0x4b0728;
    },
    drain: function () {
      this.bin.forEach(function (_0xb18cb7) {
        _0xb18cb7.kill();
      });
      this.bin = [];
    },
  });
});
ig.baked = true;
ig.module("game.entities.buttons.button-replay")
  .requires("game.entities.popups.popup-confirmation")
  .defines(function () {
    EntityButtonReplay = EntityButtonPopup.extend({
      image: new ig.Image("media/graphics/sprites/ui/btn-replay.png"),
      callback: function () {
        if (wgl.over) {
          this.popup.hide("replay");
        } else {
          ig.game.spawnEntity(EntityPopupConfirmation);
          ig.game.pausePopup = this.popup;
        }
      },
    });
  });
ig.baked = true;
ig.module("game.entities.buttons.button-next")
  .requires("game.entities.buttons.button")
  .defines(function () {
    EntityButtonNext = EntityButtonPopup.extend({
      image: new ig.Image("media/graphics/sprites/ui/btn-resume.png"),
      callback: function () {
        this.popup.hide("next");
      },
    });
  });
ig.baked = true;
ig.module("game.entities.popups.popup-pause")
  .requires(
    "game.entities.popups.popup",
    "game.entities.buttons.button-replay",
    "game.entities.buttons.button-home",
    "game.entities.buttons.button-next",
    "game.entities.buttons.button-audio"
  )
  .defines(function () {
    EntityPopupPause = EntityPopup.extend({
      delayShown: 0x0,
      addEntities: function () {
        wgl.forcedPause = true;
        ig.control.pauseGame();
        this.title = _STRINGS.Game.Pause;
        var _0x3d2e33 = this.zIndex + 0x1;
        var _0x39e28c = this.halfSize.y - 0xa0 - 0x5a;
        this.entities.push(
          ig.game.spawnEntity(EntityButtonReplay, 0x0, 0x0, {
            popup: this,
            dx: -72.5,
            dy: _0x39e28c,
            zIndex: _0x3d2e33,
          })
        );
        this.entities.push(
          ig.game.spawnEntity(EntityButtonNext, 0x0, 0x0, {
            popup: this,
            dx: 147.5,
            dy: _0x39e28c,
            zIndex: _0x3d2e33,
          })
        );
        this.entities.push(
          ig.game.spawnEntity(EntityButtonHome, 0x0, 0x0, {
            popup: this,
            dx: -292.5,
            dy: _0x39e28c,
            zIndex: _0x3d2e33,
          })
        );
        this.entities.push(
          ig.game.spawnEntity(EntityButtonAudio, 0x0, 0x0, {
            popup: this,
            dx: 42.5,
            dy: -0x8f,
            zIndex: _0x3d2e33,
          })
        );
        this.entities.push(
          ig.game.spawnEntity(EntityButtonBGM, 0x0, 0x0, {
            popup: this,
            dx: -187.5,
            dy: -0x8f,
            zIndex: _0x3d2e33,
          })
        );
        ig.game.sortEntitiesDeferred();
      },
      callback: function (_0xc3007f) {
        wgl.forcedPause = false;
        switch (_0xc3007f) {
          case "home":
            console.log(wgl.forcedPause);
            ig.game.director.jumpTo(LevelHome);
            break;
          case "replay":
            ig.control.replay();
            break;
          case "next":
            ig.control.resumeGame(true);
        }
      },
    });
  });
ig.baked = true;
ig.module("game.entities.buttons.button-pause")
  .requires("game.entities.buttons.button", "game.entities.popups.popup-pause")
  .defines(function () {
    EntityButtonPause = EntityButtonFix.extend({
      image: new ig.Image("media/graphics/sprites/ui/btn-pause.png"),
      zIndex: 0x11,
      repos: function () {
        this.pos.x = ig.system.width - this.size.x - 0xf;
        this.pos.y = 0xf;
      },
      released: function () {
        ig.control.inputHandler.released();
      },
      callback: function () {
        if (!wgl.gameOver) {
          ig.game.spawnEntity(EntityPopupPause);
        }
      },
    });
  });
ig.baked = true;
ig.module("game.entities.popups.popup-over")
  .requires(
    "game.entities.popups.popup",
    "game.entities.buttons.button-replay",
    "game.entities.buttons.button-home",
    "game.entities.buttons.button-next"
  )
  .defines(function () {
    EntityPopupOver = EntityPopup.extend({
      delayShown: 0x0,
      callbackIn: function () {
        wgl.forcedPause = false;
      },
      addEntities: function () {
        this.title = wgl.win
          ? wgl.holeId < ig.params.ballNum.length
            ? _STRINGS.Game.Complete.replace("#", wgl.holeId)
            : _STRINGS.Game.GameComplete
          : _STRINGS.Game.Over;
        var _0x50961a = this.zIndex + 0x1;
        var _0x3679f7 = this.halfSize.y - 0xa0 - 0x3c;
        this.entities.push(
          ig.game.spawnEntity(
            wgl.win && wgl.holeId < ig.params.ballNum.length
              ? EntityButtonNext
              : EntityButtonReplay,
            0x0,
            0x0,
            {
              popup: this,
              dx: 59.5,
              dy: _0x3679f7,
              zIndex: _0x50961a,
            }
          )
        );
        this.entities.push(
          ig.game.spawnEntity(EntityButtonHome, 0x0, 0x0, {
            popup: this,
            dx: -204.5,
            dy: _0x3679f7,
            zIndex: _0x50961a,
          })
        );
        ig.game.sortEntitiesDeferred();
        this.addText();
        ig.soundHandler.sfxPlayer.play(wgl.win ? "win" : "fail");
      },
      addText: function () {
        var _0x8ab97d = ig.control.score;
        this.scoreText = _0x8ab97d.toLocaleString();
        if (wgl.win && wgl.holeId < ig.params.ballNum.length) {
          this.scoreTextY = -0x1c;
        } else {
          var _0x5b5231 = ig.game.load("best");
          this.bestScore = false;
          if (_0x8ab97d > _0x5b5231) {
            ig.game.save("best", _0x8ab97d);
            this.bestScore = true;
          } else {
            this.bestText = _0x5b5231.toLocaleString();
          }
          this.scoreTextY = -0x50;
        }
      },
      extraDraw: function (_0x52ef4d) {
        _0x52ef4d.strokeStyle = "#404040";
        _0x52ef4d.font = "80px text";
        _0x52ef4d.lineWidth = 0xa;
        _0x52ef4d.lineJoin = "round";
        _0x52ef4d.textAlign = "left";
        ig.control.drawText(_STRINGS.Game.Score, -0xfa, this.scoreTextY);
        _0x52ef4d.textAlign = "right";
        ig.control.drawText(this.scoreText, 0xfa, this.scoreTextY);
        if (!wgl.win || wgl.holeId === ig.params.ballNum.length) {
          if (this.bestScore) {
            _0x52ef4d.textAlign = "center";
            ig.control.drawText(_STRINGS.Game.NewBest, 0x0, 0x1e);
          } else {
            _0x52ef4d.textAlign = "left";
            ig.control.drawText(_STRINGS.Game.Best, -0xfa, 0x1e);
            _0x52ef4d.textAlign = "right";
            ig.control.drawText(this.bestText, 0xfa, 0x1e);
          }
        }
      },
      callback: function (_0x4d7c48) {
        wgl.forcedPause = false;
        switch (_0x4d7c48) {
          case "home":
            ig.game.director.jumpTo(LevelHome);
            break;
          case "replay":
            ig.control.replay();
            break;
          case "next":
            ig.control.nextHole();
        }
      },
    });
  });
ig.baked = true;
ig.module("babylon.input-handler")
  .requires("impact.entity")
  .defines(function () {
    EntityInputHandler = ig.Entity.extend({
      isClickable: true,
      rotatingCamera: false,
      worldPos: {},
      init: function () {
        this.pivotPoint = new BABYLON.Vector3();
        this.savedCamPos = new BABYLON.Vector3();
        this.quat = new BABYLON.Quaternion();
        this.repos();
      },
      clicked: function () {
        if (!wgl.ball.isFired && !wgl.ball.ending && wgl.ball.isFocused) {
          var _0x52c0ab = ig.game.io.getClickPos();
          if (
            ig.util.distanceBetweenPoints(wgl.ball.screenPos, _0x52c0ab) <
            ig.params.focusRadius
          ) {
            this.getWglPos();
            _0x52c0ab = wgl.scene.pick(this.worldPos.x, this.worldPos.y);
            wgl.ball.resetControl();
            wgl.ball.aiming(_0x52c0ab);
            wgl.ball.arrow.isVisible =
              wgl.ball.aimLine.isVisible =
              wgl.ball.aimBall.isVisible =
                true;
            wgl.ball.arrow.visibility =
              wgl.ball.aimLine.visibility =
              wgl.ball.aimBall.visibility =
                0x0;
            wgl.ball.isFocused = false;
          } else {
            wgl.ball.lerpSpeed = 0.1;
            this.rotatingCamera = true;
            this.clickedPos = ig.game.io.getClickPos();
            this.savedCamPos.copyFrom(wgl.cameraTarget);
            this.pivotPoint.copyFrom(wgl.ball.mesh.position);
            this.pivotPoint.y = wgl.cameraY;
          }
        }
      },
      released: function () {
        if (wgl.ball.arrow.isVisible) {
          wgl.ball.arrow.isVisible =
            wgl.ball.aimLine.isVisible =
            wgl.ball.aimBall.isVisible =
              false;
          wgl.ball.fire();
        } else if (this.rotatingCamera) {
          this.rotatingCamera = false;
        }
        wgl.ball.lerpSpeed = 0.02;
        if (!wgl.ball.isFocused) {
          wgl.ball.isFocused = 0x0 === wgl.ball.arrow.visibility;
        }
      },
      repos: function () {
        this.size.x = ig.system.width;
        this.size.y = ig.system.height;
        this.pos.x = ig.game.screen.x;
        this.pos.y = ig.game.screen.y;
      },
      getWglPos: function () {
        var _0x2b7001 = ig.system.width;
        var _0x27b88d = ig.system.height;
        var _0x3c1bed =
          wgl.engine.getRenderWidth() * wgl.engine.getHardwareScalingLevel();
        var _0x5d230f =
          wgl.engine.getRenderHeight() * wgl.engine.getHardwareScalingLevel();
        var _0x2b7001 = _0x3c1bed / _0x2b7001;
        var _0x27b88d = _0x5d230f / _0x27b88d;
        var _0x5d230f = ig.game.io.getClickPos();
        this.worldPos.x = _0x5d230f.x * _0x2b7001;
        this.worldPos.y = _0x5d230f.y * _0x27b88d;
      },
      update: function () {
        if (wgl.ball.arrow.isVisible) {
          this.getWglPos();
          var _0x2bb269 = wgl.scene.pick(this.worldPos.x, this.worldPos.y);
          if (_0x2bb269.hit) {
            wgl.ball.aiming(_0x2bb269);
          }
        } else if (this.rotatingCamera) {
          _0x2bb269 = ig.game.io.getClickPos();
          BABYLON.Quaternion.RotationAxisToRef(
            BABYLON.Axis.Y,
            ((2.5 * (_0x2bb269.x - this.clickedPos.x)) / ig.system.width) *
              Math.PI,
            this.quat
          );
          this.savedCamPos.rotateByQuaternionAroundPointToRef(
            this.quat,
            this.pivotPoint,
            wgl.cameraTarget
          );
          _0x2bb269 = _0x2bb269.y - this.clickedPos.y;
          if (-0x12c > _0x2bb269) {
            _0x2bb269 = -0x12c;
          } else if (0x12c < _0x2bb269) {
            _0x2bb269 = 0x12c;
          }
          wgl.cameraY = wgl.cameraY0 * (1.3 + _0x2bb269 / 0x168);
          wgl.cameraTarget.y = wgl.cameraY;
        }
      },
      draw: function () {},
    });
  });
ig.baked = true;
ig.module("game.entities.objs.text")
  .requires("impact.entity")
  .defines(function () {
    EntityText = ig.Entity.extend({
      text: "Some Text",
      font: "100px text",
      fontSub: "80px text",
      zIndex: 0x6,
      fillColor: "green",
      strokeColor: "white",
      lineWidth: 0xa,
      align: "center",
      alpha: 0x0,
      hidden: true,
      pos: {
        x: -0xbb8,
        y: -0xbb8,
      },
      scale: 0.001,
      init: function () {
        this.pos.x = this.pos.y = -0xbb8;
        this.repos();
        ig.game.sortEntitiesDeferred();
      },
      show: function () {
        this.text = ig.util.rGet(_STRINGS.Game.Cheers);
        if (ig.control.usedExtraBall) {
          switch (ig.params.rewardBallNum - ig.control.ballLeft) {
            case 0x1:
              this.subText = _STRINGS.Game.Bogey;
              break;
            case 0x2:
              this.subText = _STRINGS.Game.DoubleBogey;
              break;
            case 0x3:
              this.subText = _STRINGS.Game.TripleBogey;
              break;
            default:
              this.subText = _STRINGS.Game.TriedHard;
          }
        } else {
          var _0xf60e97 = ig.control.ballTotal - ig.control.ballLeft;
          if (0x1 === _0xf60e97) {
            this.subText = _STRINGS.Game.HoleIn.replace("#", "1");
          } else {
            switch (ig.control.ballLeft) {
              case 0x0:
                this.subText = _STRINGS.Game.Par;
                break;
              case 0x1:
                this.subText = _STRINGS.Game.Birdie;
                break;
              case 0x2:
                this.subText = _STRINGS.Game.Eagle;
                break;
              case 0x3:
                this.subText = _STRINGS.Game.DoubleEagle;
                break;
              default:
                this.subText = _STRINGS.Game.HoleIn.replace("#", _0xf60e97);
            }
          }
        }
        this.bonusScore =
          "+" +
          (
            ig.params.score.holeBonus +
            ig.control.ballLeft * ig.params.score.ballLeft
          ).toLocaleString();
        this.scale = 0.001;
        this.tween(
          {
            scale: 0x1,
          },
          0.2,
          {
            onComplete: function () {
              this.tween(
                {
                  scale: 0.001,
                },
                0.2,
                {
                  delay: 0x2,
                  onComplete: function () {
                    this.hidden = true;
                  }.bind(this),
                }
              ).start();
            }.bind(this),
          }
        ).start();
        this.hidden = false;
      },
      update: function () {
        if (!this.hidden) {
          this.parent();
        }
      },
      draw: function () {
        if (!this.hidden) {
          var _0x2169a3 = ig.system.context;
          _0x2169a3.save();
          _0x2169a3.translate(ig.game.midX, this.textY);
          _0x2169a3.scale(this.scale, this.scale);
          _0x2169a3.font = this.font;
          _0x2169a3.fillStyle = this.fillColor;
          _0x2169a3.strokeStyle = this.strokeColor;
          _0x2169a3.textAlign = this.align;
          _0x2169a3.lineJoin = "round";
          _0x2169a3.lineWidth = this.lineWidth;
          ig.control.drawText(this.text, 0x0, 0x0);
          _0x2169a3.font = this.fontSub;
          _0x2169a3.lineWidth = 0x8;
          _0x2169a3.fillStyle = "orange";
          ig.control.drawText(this.subText, 0x0, 0x73);
          _0x2169a3.fillStyle = "#fc5858";
          ig.control.drawText(this.bonusScore, 0x0, 0xc8);
          _0x2169a3.restore();
        }
      },
      repos: function () {
        this.textY = ig.game.midY - 0xfa;
      },
    });
  });
ig.baked = true;
ig.module("game.entities.popups.popup-reward")
  .requires("game.entities.popups.popup-confirmation")
  .defines(function () {
    EntityPopupReward = EntityPopupConfirmation.extend({
      isRV: true,
      callbackIn: function () {
        wgl.paused = true;
      },
      addEntities: function () {
        this.parent();
        this.text = _STRINGS.Game.RewardMessage.replace(
          "#",
          ig.params.rewardBallNum
        );
      },
      extraDraw: function (_0x3dbbd5) {
        _0x3dbbd5.strokeStyle = "#404040";
        _0x3dbbd5.font = "75px text";
        _0x3dbbd5.lineWidth = 0xa;
        _0x3dbbd5.lineJoin = "round";
        _0x3dbbd5.textAlign = "center";
        ig.control.drawText(this.text, 0x0, -0x1c);
      },
      callback: function (_0x361d3d) {
        switch (_0x361d3d) {
          case "RVAd":
            this.showRewardedVideo();
            break;
          case "No":
            ig.control.over();
        }
      },
      showRewardedVideo: function () {
        ig.game.spawnEntity(EntityPopupAd, 0x0, 0x0, {
          callback: this.rewardedVideoResult.bind(this),
        });
      },
      rewardedVideoResult: function (_0x63df92) {
        if (_0x63df92) {
          ig.control.reward();
        } else {
          ig.control.over();
        }
      },
    });
    EntityButtonYesRV = EntityButtonPopup.extend({
      image: new ig.Image("media/graphics/sprites/ui/btn-yes-rv.png"),
      callback: function () {
        this.popup.hide("RVAd");
      },
    });
    EntityPopupAd = ig.Entity.extend({
      callback: null,
      zIndex: 0x19,
      alpha: 0x0,
      init: function (_0xd6ff74, _0x53a83d, _0xa7a25b) {
        this.parent(_0xd6ff74, _0x53a83d, _0xa7a25b);
        this.saveLayer = ig.game.currentLayer;
        ig.game.currentLayer = ig.game.layers.popup2;
        this.titleText = "REWARDED VIDEO AD";
        this.subText = "Rewarded in 3 second(s)...";
        this.timer = new ig.Timer(0x3);
        this.time = 0x3;
        this.repos();
        this.fade(0x1);
      },
      fade: function (_0x53c694) {
        this.tween(
          {
            alpha: _0x53c694,
          },
          0.25,
          {
            onComplete: function () {
              if (0x0 === _0x53c694) {
                ig.game.currentLayer = this.saveLayer;
                if (this.callback) {
                  this.callback(true);
                }
                this.kill();
              }
            }.bind(this),
          }
        ).start();
      },
      update: function () {
        this.parent();
        if (0x0 < this.time) {
          if (0x0 < this.timer.delta()) {
            this.time = 0x0;
            this.fade(0x0);
          } else {
            this.time = Math.ceil(-this.timer.delta());
          }
        }
      },
      draw: function () {
        var _0x470546 = ig.system.context;
        _0x470546.save();
        _0x470546.setTransform(0x1, 0x0, 0x0, 0x1, 0x0, 0x0);
        _0x470546.globalAlpha = this.alpha;
        _0x470546.fillStyle = "rgba(0,0,0,0.8)";
        _0x470546.fillRect(0x0, 0x0, ig.system.width, ig.system.height);
        _0x470546.textAlign = "center";
        _0x470546.font = "64px text";
        _0x470546.fillStyle = "#FF0";
        _0x470546.fillText(this.titleText, ig.game.midX, this.titleY);
        _0x470546.font = "40px text";
        _0x470546.fillStyle = "#FFF";
        _0x470546.fillText(
          "Rewarded in... " + this.time + " second(s)",
          ig.game.midX,
          this.subTextY
        );
        _0x470546.restore();
      },
      repos: function () {
        this.titleY = ig.game.midY - 0x23;
        this.subTextY = this.titleY + 0x50;
      },
    });
  });
ig.baked = true;
ig.module("game.entities.controls.game")
  .requires(
    "game.entities.objs.pool",
    "game.entities.buttons.button-pause",
    "game.entities.popups.popup-over",
    "babylon.input-handler",
    "game.entities.objs.text",
    "game.entities.popups.popup-reward"
  )
  .defines(function () {
    EntityGame = ig.Entity.extend({
      ball0: new ig.Image("media/graphics/sprites/ui/heart0.png"),
      ball1: new ig.Image("media/graphics/sprites/ui/heart.png"),
      score: 0x0,
      scoreText: "0",
      ballTotal: 0x3,
      ballLeft: 0x3,
      showRV: true,
      usedExtraBall: false,
      init: function (_0x17687e, _0x48e0ab, _0x21f39a) {
        this.parent(_0x17687e, _0x48e0ab, _0x21f39a);
        ig.control = this;
        ig.home = null;
        ig.game.currentLayer = ig.game.layers.base;
        wgl.forcedPause = false;
        this.ballLeft = this.ballTotal = ig.params.ballNum[wgl.holeId - 0x1];
        this.repos();
        this.text = ig.game.spawnEntity(EntityText);
        this.btPause = ig.game.spawnEntity(EntityButtonPause, 0x0, 0x0, {
          visible: false,
        });
        this.inputHandler = ig.game.spawnEntity(EntityInputHandler);
        this.resetTimer = new ig.Timeout(
          function () {
            ig.control["continue"]();
          },
          0.75,
          false,
          false
        );
        this.overTimer = new ig.Timeout(
          function () {
            ig.game.spawnEntity(EntityPopupOver, 0x0, 0x0);
          },
          2.5,
          false,
          false
        );
        this.focusTimer = new ig.Timeout(
          function () {
            wgl.ball.showFocus();
            ig.control.btPause.visible = true;
          },
          2.8,
          false,
          false
        );
        this.startShowTimer = new ig.Timeout(
          function () {
            wgl.ball.isFocused = ig.control.btPause.visible = false;
            wgl.restart(false, true);
            ig.control.focusTimer.reset(3.05);
          },
          3.05,
          false,
          false
        );
        wgl.startShow();
        wgl.ball.isFocused = false;
        this.updateHoleText();
      },
      over: function () {
        wgl.over = true;
        this.btPause.visible = false;
        ig.game.spawnEntity(EntityPopupOver, 0x0, 0x0);
      },
      replay: function () {
        this.score = 0x0;
        this.scoreText = "0";
        wgl.holeId = 0x1;
        this.updateHoleText();
        this.ballLeft = this.ballTotal = ig.params.ballNum[0x0];
        this.repos();
        wgl.cameraEffect = this.showRV = true;
        wgl.ball.isFocused =
          this.btPause.visible =
          this.usedExtraBall =
          wgl.forcedPause =
            false;
        ig.game.currentLayer = ig.game.layers.base;
        wgl.start();
        wgl.startShow();
      },
      reward: function () {
        this.ballLeft = ig.params.rewardBallNum;
        this.usedExtraBall = true;
        wgl.paused = wgl.over = wgl.win = false;
        wgl.ball.isFired = wgl.ball.ending = false;
        if (this.ballInArea) {
          wgl.ball.showFocus();
          this.ballInArea = false;
          this.btPause.visible = true;
        } else {
          this.resetTimer.pause();
          this["continue"]();
          wgl.ball.isFocused = this.btPause.visible = false;
        }
      },
      pauseTimers: function () {
        this.resetTimer.pause();
        this.overTimer.pause();
        this.focusTimer.pause();
        this.startShowTimer.pause();
      },
      resumeTimers: function () {
        this.resetTimer.resume();
        this.overTimer.resume();
        this.focusTimer.resume();
        this.startShowTimer.resume();
      },
      nextHole: function () {
        if (wgl.holeId < ig.params.ballNum.length) {
          wgl.holeId++;
        }
        this.updateHoleText();
        this.ballLeft = this.ballTotal = ig.params.ballNum[wgl.holeId - 0x1];
        this.repos();
        this.reset(true);
        this.btPause.visible = this.usedExtraBall = wgl.forcedPause = false;
        wgl.startShow();
      },
      updateHoleText: function () {
        this.holeText =
          _STRINGS.Game.Hole + wgl.holeId + " / " + ig.params.ballNum.length;
      },
      reset: function (_0x4eab85) {
        this.btPause.visible = true;
        wgl.ball.isFocused = false;
        if (_0x4eab85) {
          wgl.start();
        } else {
          _0x4eab85 =
            BABYLON.Vector3.Distance(
              wgl.ball.mesh.position,
              wgl.ball.startPos
            ) / 0x7;
          this.focusTimer.reset(_0x4eab85);
          wgl.restart();
        }
      },
      continue: function () {
        var _0x584ef2 =
          BABYLON.Vector3.Distance(wgl.ball.mesh.position, wgl.ball.startPos) /
          0x7;
        var _0x584ef2 = ig.util.max(_0x584ef2, 2.1);
        this.focusTimer.reset(_0x584ef2);
        wgl.restart(true);
      },
      pauseGame: function () {
        wgl.pause();
        this.pauseTimers();
      },
      resumeGame: function (_0x179673) {
        if (!("undefined" === typeof _0x179673 && wgl.forcedPause)) {
          wgl.resume();
          this.resumeTimers();
        }
      },
      fail: function () {
        if (this.checkBall()) {
          this.resetTimer.start();
        }
      },
      checkBall: function () {
        return 0x0 >= this.ballLeft
          ? (this.showRV
              ? (ig.game.spawnEntity(EntityPopupReward), (this.showRV = false))
              : this.over(),
            false)
          : true;
      },
      addScore: function (_0x4e2c97) {
        this.score += _0x4e2c97;
        this.scoreText = this.score.toLocaleString();
      },
      update: function () {},
      draw: function () {
        var _0x3ec26e = ig.system.context;
        if (wgl.ball.isFocused) {
          _0x3ec26e.save();
          _0x3ec26e.translate(wgl.ball.screenPos.x, wgl.ball.screenPos.y);
          _0x3ec26e.rotate(ig.system.clock.delta());
          _0x3ec26e.beginPath();
          _0x3ec26e.arc(0x0, 0x0, ig.params.focusRadius, 0x0, ig.util.pi2);
          _0x3ec26e.closePath();
          _0x3ec26e.strokeStyle = "white";
          _0x3ec26e.lineWidth = 0x4;
          _0x3ec26e.setLineDash([0xe, 0xe]);
          _0x3ec26e.stroke();
          _0x3ec26e.restore();
        }
        for (var _0x4580ea = 0x0; _0x4580ea < this.ballTotal; _0x4580ea++) {
          this.ball0.draw(this.ballX + 100 * _0x4580ea, this.ballY);
          if (_0x4580ea < this.ballLeft) {
            this.ball1.draw(this.ballX + 100 * _0x4580ea, this.ballY);
          }
        }
        _0x3ec26e.fillStyle = "white";
        _0x3ec26e.strokeStyle = "#0153c2";
        _0x3ec26e.lineWidth = 0xa;
        _0x3ec26e.lineJoin = "round";
        _0x3ec26e.font = "60px text";
        _0x3ec26e.textAlign = "left";
        this.drawText(this.holeText, 0x14, 0x3c);
        _0x3ec26e.font = "68px text";
        _0x3ec26e.textAlign = "center";
        this.drawText(this.scoreText, ig.game.midX, 0x3c);
      },
      repos: function () {
        wgl.ball.screenPos = wgl.worldToScreen(wgl.ball.mesh);
        this.scoreX = ig.game.midX + 0xf;
        this.ballX =
          ig.game.midX -
          (100 * (this.ballTotal - 0x1) + this.ball1.width) / 0x2;
        this.ballY = ig.system.height - 0x64;
      },
      drawText: function (_0x3d9f11, _0x36af7a, _0x18ec17) {
        ig.system.context.strokeText(_0x3d9f11, _0x36af7a, _0x18ec17);
        ig.system.context.fillText(_0x3d9f11, _0x36af7a, _0x18ec17);
      },
      formatTime: function (_0x17ac22) {
        _0x17ac22 = Math.ceil(_0x17ac22);
        var _0x19f46a = Math.floor(_0x17ac22 / 0x3c);
        var _0x19f46a =
          0xa > _0x19f46a
            ? "0" + _0x19f46a
            : "" + Math.floor(_0x19f46a / 0xa) + (_0x19f46a % 0xa);
        _0x17ac22 %= 0x3c;
        _0x17ac22 =
          0xa > _0x17ac22
            ? "0" + _0x17ac22
            : "" + Math.floor(_0x17ac22 / 0xa) + (_0x17ac22 % 0xa);
        return _0x19f46a + ":" + _0x17ac22;
      },
    });
  });
ig.baked = true;
ig.module("game.levels.game")
  .requires("game.entities.controls.game")
  .defines(function () {
    LevelGame = {
      entities: [
        {
          type: "EntityGame",
          x: -0x24,
          y: -0x34,
        },
      ],
      layer: [],
    };
  });
ig.baked = true;
ig.module("game.main")
  .requires(
    "game.mjs-game",
    "game.levels.opening",
    "game.levels.home",
    "game.levels.game"
  )
  .defines(function () {
    // 代码加密处
    // if (document.referrer.indexOf("marketjs.com") < 0) {
    //   if (top != self) {
    //     console.log("showing anti-piracy layer ...");
    //     $("#anti-piracy").show();
    //     top.location.replace(self.location.href);
    //   }
    // }
    MyGame = MJSGame.extend({
      name: "MJS-Mini-Golf-Saga",
      version: "1.0.1",
      frameworkVersion: "1.1.2",
      layers: {
        base: 0x0,
        popup: 0xa,
        popup2: 0x14,
        buttonDisabled: 0x32,
      },
      init: function () {
        ig.game.midX = ig.system.width / 0x2;
        ig.game.midY = ig.system.height / 0x2;
        ig.loader = null;
        this.parent();
        var _0x1c3bb6 = ig.game.load("bgm");
        if (!_0x1c3bb6) {
          ig.soundHandler.muteBGM();
        }
        var _0x7667e = ig.game.load("sfx");
        if (!_0x7667e) {
          ig.soundHandler.muteSFX();
        }
        this.finalize();
      },
      initData: function () {
        return (this.sessionData = {
          sfx: 0x1,
          bgm: 0x1,
          best: 0x0,
          tutorial: true,
        });
      },
      start: function () {
        this.director = new ig.Director(this, [
          // 不显示 marketjs
          // LevelOpening,
          LevelHome,
          LevelGame,
        ]);
        if (_SETTINGS.Branding.Splash.Enabled) {
          try {
            this.branding = new ig.BrandingSplash();
          } catch (_0x3692ff) {
            this.director.loadLevel(this.director.currentLevel);
          }
        } else {
          this.director.loadLevel(this.director.currentLevel);
        }
      },
      update: function () {
        this.parent();
        this.tweens.update(this.tweens.now());
      },
      draw: function () {
        this.parent();
        this.dctf();
      },
      dctf: function () {
        // 代码加密处
        ig.system.context.save();
        ig.system.context.font = "28px Arial";
        ig.system.context.textBaseline = "bottom";
        ig.system.context.textAlign = "right";
        ig.system.context.fillText(
          "For demo purposes only. Copyright MarketJS.com",
          ig.system.width - 1,
          ig.system.height - 1
        );
        ig.system.context.restore();
      },
    });
    ig.domHandler = null;
    ig.domHandler = new ig.DomHandler();
    ig.domHandler.forcedDeviceDetection();
    ig.domHandler.forcedDeviceRotation();
    ig.apiHandler = new ig.ApiHandler();
    ig.sizeHandler = new ig.SizeHandler(ig.domHandler);
    if (ig.ua.mobile) {
      ig.Sound.enabled = false;
      ig.main(
        "#canvas",
        MyGame,
        0x3c,
        ig.sizeHandler.mobile.actualResolution.x,
        ig.sizeHandler.mobile.actualResolution.y,
        ig.sizeHandler.scale,
        ig.SplashLoader
      );
      ig.sizeHandler.resize();
    } else {
      ig.main(
        "#canvas",
        MyGame,
        0x3c,
        ig.sizeHandler.desktop.actualResolution.x,
        ig.sizeHandler.desktop.actualResolution.y,
        ig.sizeHandler.scale,
        ig.SplashLoader
      );
    }
    ig.visibilityHandler = new ig.VisibilityHandler();
    ig.soundHandler = null;
    ig.soundHandler = new ig.SoundHandler();
    ig.sizeHandler.reorient();

    // 代码加密处
    // (window.dba = {}),
    //   (window.dba.dlwf = function () {
    //     window.alert(
    //       "Attempted software breach. Please contact support@marketjs.com"
    //     );
    //   }),
    //   Object.freeze(window.dba);
  });
