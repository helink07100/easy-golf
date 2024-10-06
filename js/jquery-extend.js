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
(function () {
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
  window.ig = {
    game: null,
    debug: null,
    version: "1.24",
    global: window,
    modules: {},
    resources: [],
    ready: false,
    baked: false,
    nocache: "",
    ua: {},
    prefix: window.ImpactPrefix || "",
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
      ig.ua.pixelRatio = window.devicePixelRatio || 0x1;
      ig.ua.viewport = {
        width: window.innerWidth,
        height: window.innerHeight,
      };
      ig.ua.screen = {
        width: window.screen.availWidth * ig.ua.pixelRatio,
        height: window.screen.availHeight * ig.ua.pixelRatio,
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
        "ontouchstart" in window || window.navigator.msMaxTouchPoints;
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
          window.addEventListener("load", ig._DOMReady, false);
        }
      }
    },
  };
  ig.normalizeVendorAttribute(window, "requestAnimationFrame");
  if (window.requestAnimationFrame) {
    var _0x441635 = 0x1;
    var _0x24cb4a = {};
    window.ig.setAnimation = function (_0x1cdfff) {
      var _0x41b381 = _0x441635++;
      _0x24cb4a[_0x41b381] = true;
      var _0x46138 = function () {
        if (_0x24cb4a[_0x41b381]) {
          window.requestAnimationFrame(_0x46138);
          _0x1cdfff();
        }
      };
      window.requestAnimationFrame(_0x46138);
      return _0x41b381;
    };
    window.ig.clearAnimation = function (_0x20574c) {
      delete _0x24cb4a[_0x20574c];
    };
  } else {
    window.ig.setAnimation = function (_0x5143d4) {
      return window.setInterval(_0x5143d4, 16.666666666666668);
    };
    window.ig.clearAnimation = function (_0x2c9351) {
      window.clearInterval(_0x2c9351);
    };
  }
  var _0x24ca06 = false;
  var _0x1a1183 = /xyz/.test(function () {
    xyz;
  })
    ? /\bparent\b/
    : /.*/;
  var _0x1b200f = 0x0;
  window.ig.Class = function () {};
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
  window.ig.Class.extend = function (_0x2ae8d5) {
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
    _0x23059d.extend = window.ig.Class.extend;
    _0x23059d.inject = _0x74be24;
    _0x23059d.classId = _0x4d227d.classId = ++_0x1b200f;
    return _0x23059d;
  };
  if (window.ImpactMixin) {
    ig.merge(ig, window.ImpactMixin);
  }
})();
