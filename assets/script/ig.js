(function () {
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
        if (
          this.loaded &&
          !(_0x145383 > this.width || _0x54d087 > this.height)
        ) {
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
        firstChar: 32,
        alpha: 1,
        letterSpacing: 1,
        lineSpacing: 0,
        onload: function (_0x171477) {
          this._loadMetrics(this.data);
          this.parent(_0x171477);
          this.height -= 2;
        },
        widthForString: function (_0x4c6181) {
          if (-1 !== _0x4c6181.indexOf("\n")) {
            _0x4c6181 = _0x4c6181.split("\n");
            var _0x3337e3 = 0;
            for (var _0xe8ee2a = 0; _0xe8ee2a < _0x4c6181.length; _0xe8ee2a++) {
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
          var _0x55897e = 0;
          for (var _0x20d216 = 0; _0x20d216 < _0x5721ad.length; _0x20d216++) {
            _0x55897e +=
              this.widthMap[_0x5721ad.charCodeAt(_0x20d216) - this.firstChar];
          }
          if (0 < _0x5721ad.length) {
            _0x55897e += this.letterSpacing * (_0x5721ad.length - 1);
          }
          return _0x55897e;
        },
        heightForString: function (_0x4d14f4) {
          return (
            _0x4d14f4.split("\n").length * (this.height + this.lineSpacing)
          );
        },
        draw: function (_0x4966f7, _0x48ced6, _0x3970d5, _0x4d9a34) {
          if ("string" != typeof _0x4966f7) {
            _0x4966f7 = _0x4966f7.toString();
          }
          if (-1 !== _0x4966f7.indexOf("\n")) {
            _0x4966f7 = _0x4966f7.split("\n");
            var _0x4278e6 = this.height + this.lineSpacing;
            for (
              var _0x38581c = 0x0;
              _0x38581c < _0x4966f7.length;
              _0x38581c++
            ) {
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
                _0x4d9a34 == ig.Font.ALIGN.CENTER ? _0x38581c / 2 : _0x38581c;
            }
            if (1 !== this.alpha) {
              ig.system.context.globalAlpha = this.alpha;
            }
            for (_0x38581c = 0; _0x38581c < _0x4966f7.length; _0x38581c++) {
              _0x4d9a34 = _0x4966f7.charCodeAt(_0x38581c);
              _0x48ced6 += this._drawChar(
                _0x4d9a34 - this.firstChar,
                _0x48ced6,
                _0x3970d5
              );
            }
            if (1 !== this.alpha) {
              ig.system.context.globalAlpha = 1;
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
            0,
            _0x49b11b.height - 1,
            _0x49b11b.width,
            1
          );
          var _0x33b118 = 0;
          for (var _0x946ba8 = 0; _0x946ba8 < _0x49b11b.width; _0x946ba8++) {
            var _0xca348c = 4 * _0x946ba8 + 3;
            if (0x7f < _0x2997e9.data[_0xca348c]) {
              _0x33b118++;
            } else if (0x80 > _0x2997e9.data[_0xca348c] && _0x33b118) {
              this.widthMap.push(_0x33b118);
              this.indices.push(_0x946ba8 - _0x33b118);
              _0x33b118 = 0;
            }
          }
          this.widthMap.push(_0x33b118);
          this.indices.push(_0x946ba8 - _0x33b118);
        },
      });
      ig.Font.ALIGN = {
        LEFT: 0,
        RIGHT: 1,
        CENTER: 2,
      };
    });
  ig.baked = true;
  ig.module("impact.sound").defines(function () {
    ig.SoundManager = ig.Class.extend({
      clips: {},
      volume: 1,
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
          ig.prefix +
          _0x3f4304.replace(/[^\.]+$/, this.format.ext) +
          ig.nocache;
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
          ig.prefix +
          _0x2159d5.replace(/[^\.]+$/, this.format.ext) +
          ig.nocache;
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
                _0xd4d8fd.removeEventListener(
                  "canplaythrough",
                  _0x11758f,
                  false
                );
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
        for (
          var _0x1ba5f5 = 0x0;
          _0x1ba5f5 < this.sources.length;
          _0x1ba5f5++
        ) {
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
        for (
          var _0x2bdaae = 0x0;
          _0x2bdaae < this.sources.length;
          _0x2bdaae++
        ) {
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
        0x5 <
          parseInt(navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[0x1]);
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
  ig.module("plugins.patches.webkit-image-smoothing-patch").defines(
    function () {
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
    }
  );
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
            if (
              "touchstart" == _0x3c6f2a.type ||
              "mousedown" == _0x3c6f2a.type
            ) {
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
            source: "assets/media/fonts/digitalt",
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
          for (
            var _0x48a2c9 = 0x0;
            _0x48a2c9 < this.fonts.length;
            _0x48a2c9++
          ) {
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
              //console.log("serving mobile version ...");
              ig.ua.mobile = true;
              break;
            case "desktop":
              //console.log("serving desktop version ...");
              ig.ua.mobile = false;
              break;
            default:
            //console.log("serving universal version ...");
          }
        } else {
          //console.log("serving universal version ...");
        }
      },
      forcedDeviceRotation: function () {
        var _0x4f7f0b = this.getQueryVariable("force-rotate");
        if (_0x4f7f0b) {
          switch (_0x4f7f0b) {
            case "portrait":
              //console.log("force rotate to portrait");
              window.orientation = 0x0;
              break;
            case "landscape":
              //console.log("force rotate to horizontal");
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
          //console.log("changing orientation ...");
          this.resize();
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
  ig.module("plugins.audio.howler-player").defines(function () {
    HowlerPlayer = ig.Class.extend({
      tagName: "HowlerPlayer",
      isMuted: false,
      soundList: {},
      init: function (_0x58e295) {
        for (var _0x3fe581 in _0x58e295) {
          var _0x41d83a = _0x58e295[_0x3fe581];
          this.soundList[_0x3fe581] = new Howl({
            src: ["assets/media/audio/" + _0x41d83a.path + ".mp3"],
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
          //console.log(_0x4cf04b);
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
            for (
              var _0x1ee150 = 0x0;
              _0x1ee150 < this.list.length;
              _0x1ee150++
            ) {
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
            for (
              _0x31b947 = 0x0;
              _0x31b947 < this.touches.length;
              _0x31b947++
            ) {
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
        for (
          var _0x4a2888 = 0x0;
          _0x4a2888 < this.touches.length;
          ++_0x4a2888
        ) {
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
        for (
          var _0x1e0fb0 = 0x0;
          _0x1e0fb0 < this.released.length;
          ++_0x1e0fb0
        ) {
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
              _0x557c80[_0x30d59e].identifier ===
              _0x12b321[_0x2e4b6e].identifier
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
            var _0x4dc294 = Math.max(
              Math.floor(_0x3c686e / this.tilesize),
              0x0
            );
            var _0x237340 = Math.min(
              Math.ceil((_0x3c686e + _0xb4ab63) / this.tilesize),
              this.height
            );
            _0x460f41 = Math.floor(
              (_0x2eaa70.pos.x + _0x5e7060) / this.tilesize
            );
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
            _0x52c2ad = Math.floor(
              (_0x2eaa70.pos.y + _0x5e7060) / this.tilesize
            );
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
            _0x396b2a = Math.sqrt(
              _0x2245cc * _0x2245cc + _0x1df839 * _0x1df839
            );
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
              this.preRenderedChunks[_0x5847b0][_0xd3fa9d] =
                this.preRenderChunk(
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
            for (
              var _0x2ece17 = _0x5520eb;
              _0x2ece17 < _0x348c67;
              _0x2ece17++
            ) {
              var _0x447558 =
                this.preRenderedChunks[_0x5de562 % _0x51a291][
                  _0x2ece17 % _0xcb7b6f
                ];
              var _0x3e09ff =
                -_0x493fd0 + _0x2ece17 * this.chunkSize - _0x3dc303;
              var _0x2bbcd0 =
                -_0x171e68 + _0x5de562 * this.chunkSize - _0x57d09b;
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
              _0x5929e2 =
                ((_0x5929e2 % this.height) + this.height) % this.height;
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
                _0x531a8e =
                  ((_0x531a8e % this.width) + this.width) % this.width;
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
          for (
            _0x37a1b2 = 0x0;
            _0x37a1b2 < _0x3c1810.layer.length;
            _0x37a1b2++
          ) {
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
              _0x5917df.anims =
                this.backgroundAnims[_0x1f8868.tilesetName] || {};
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
          this._rscreen.x =
            ig.system.getDrawPos(this.screen.x) / ig.system.scale;
          this._rscreen.y =
            ig.system.getDrawPos(this.screen.y) / ig.system.scale;
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
                Math.floor(
                  (_0xfa724e.pos.x + _0xfa724e.size.x) / this.cellSize
                ) + 0x1;
              var _0x5c9887 =
                Math.floor(
                  (_0xfa724e.pos.y + _0xfa724e.size.y) / this.cellSize
                ) + 0x1;
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
            //console.log("using fake storage");
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
                    this.config.encodingType ===
                      this.constants.EncrytionTypes.AES
                  );
                },
              },
              {
                key: "_isDESEncryptionType",
                value: function () {
                  return (
                    _0x17fa8c["default"] &&
                    this.config.encodingType ===
                      this.constants.EncrytionTypes.DES
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
                    this.config.encodingType ===
                      this.constants.EncrytionTypes.RC4
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
                    (this._isAES ||
                      this._isDES ||
                      this._isRabbit ||
                      this._isRC4)
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
                      _0x5b6e49 = _0x30de90.toString(
                        _0x25d251["default"]._Utf8
                      );
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
                    ? _0x505569 === this.utils.metaKey &&
                      this.getAllKeys().length
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
            for (
              var _0x3b9648 = 0x0;
              _0x3b9648 < _0x5f57a3.length;
              _0x3b9648++
            ) {
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
              keyNotProvided:
                "Secure LS: Key not provided. Aborting operation!",
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
                  var _0x5e8c1d = _0xf1776d
                    .update(_0x246b71)
                    .finalize(_0x49657d);
                  _0xf1776d.reset();
                  var _0x3b623e = _0x5e8c1d.words;
                  var _0x36921a = _0x3b623e.length;
                  var _0x51ce83 = _0x5e8c1d;
                  for (
                    var _0x4acbf1 = 0x1;
                    _0x4acbf1 < _0xb45413;
                    _0x4acbf1++
                  ) {
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
                  for (
                    var _0x21af20 = 0x0;
                    _0x21af20 < _0x3a989a;
                    _0x21af20++
                  ) {
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
                  for (
                    var _0x3b287d = 0x0;
                    _0x3b287d < _0x2d95e0;
                    _0x3b287d++
                  ) {
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
                  return _0x27aea4.parse(
                    unescape(encodeURIComponent(_0x2783e8))
                  );
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
                    return new _0x19c5ee.HMAC.init(
                      _0x474e9d,
                      _0x56ccc4
                    ).finalize(_0x2990aa);
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
                    _0x2895e6[_0x5dcced] =
                      0x0 | _0x148568[_0x399c7f + _0x5dcced];
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
                  for (
                    var _0x35805a = 0x0;
                    _0x35805a < _0x39d2e9;
                    _0x35805a++
                  ) {
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
                  _0x59b102 = this._keyStr.indexOf(
                    _0x16fcc0.charAt(_0x150f89++)
                  );
                  _0x38ee90 = this._keyStr.indexOf(
                    _0x16fcc0.charAt(_0x150f89++)
                  );
                  _0x4397dc = this._keyStr.indexOf(
                    _0x16fcc0.charAt(_0x150f89++)
                  );
                  _0x4470e7 = this._keyStr.indexOf(
                    _0x16fcc0.charAt(_0x150f89++)
                  );
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
                return _0x578a04._compress(
                  _0x57c161,
                  0x10,
                  function (_0x22907f) {
                    return _0x46b624(_0x22907f);
                  }
                );
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
                      for (
                        _0x2363ec = 0x0;
                        _0x2363ec < _0x26c70f;
                        _0x2363ec++
                      ) {
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
                  var _0x5e1435 =
                    0x4 * ((this._nRounds = _0x322a51 + 0x6) + 0x1);
                  var _0x194542 = (this._keySchedule = []);
                  for (
                    var _0x5a0dd7 = 0x0;
                    _0x5a0dd7 < _0x5e1435;
                    _0x5a0dd7++
                  ) {
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
                      (_0x51be07 | _0x1dfec3) <<
                      (0x18 - 0x8 * (_0x2f93c0 % 0x4));
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
                ((_0x1d1392 << _0x559ce0) |
                  (_0x1d1392 >>> (0x20 - _0x559ce0))) +
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
                ((_0x32d863 << _0x39a1d0) |
                  (_0x32d863 >>> (0x20 - _0x39a1d0))) +
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
                ((_0x51e9fb << _0x363f5a) |
                  (_0x51e9fb >>> (0x20 - _0x363f5a))) +
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
                ((_0x1a216e << _0x4152fb) |
                  (_0x1a216e >>> (0x20 - _0x4152fb))) +
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
                  var _0x21fe51 = _0x3b7259
                    .update(_0x22f7cd)
                    .finalize(_0x5d79d0);
                  _0x3b7259.reset();
                  for (
                    var _0x4d3575 = 0x1;
                    _0x4d3575 < _0x183ed9;
                    _0x4d3575++
                  ) {
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
                  return this.create(
                    this._ENC_XFORM_MODE,
                    _0x29e158,
                    _0x4f361a
                  );
                },
                createDecryptor: function (_0x12cf11, _0xc95254) {
                  return this.create(
                    this._DEC_XFORM_MODE,
                    _0x12cf11,
                    _0xc95254
                  );
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
                  var _0x440cbc = _0x366fc0.createEncryptor(
                    _0xcf6c5f,
                    _0x54b042
                  );
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
              var _0x3d0106 = (_0x2ff30b.PasswordBasedCipher = _0x1fc38a.extend(
                {
                  cfg: _0x1fc38a.cfg.extend({
                    kdf: _0x597512,
                  }),
                  encrypt: function (
                    _0x867b21,
                    _0x827ced,
                    _0x32da63,
                    _0x1ecb7a
                  ) {
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
                  decrypt: function (
                    _0x5a37fd,
                    _0x3d7415,
                    _0xdda89c,
                    _0x29ab33
                  ) {
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
                }
              ));
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
              0x22, 0x1a, 0x12, 0xa, 0x2, 0x3b, 0x33, 0x2b, 0x23, 0x1b, 0x13,
              0xb, 0x3, 0x3c, 0x34, 0x2c, 0x24, 0x3f, 0x37, 0x2f, 0x27, 0x1f,
              0x17, 0xf, 0x7, 0x3e, 0x36, 0x2e, 0x26, 0x1e, 0x16, 0xe, 0x6,
              0x3d, 0x35, 0x2d, 0x25, 0x1d, 0x15, 0xd, 0x5, 0x1c, 0x14, 0xc,
              0x4,
            ];
            var _0x1a23d1 = [
              0xe, 0x11, 0xb, 0x18, 0x1, 0x5, 0x3, 0x1c, 0xf, 0x6, 0x15, 0xa,
              0x17, 0x13, 0xc, 0x4, 0x1a, 0x8, 0x10, 0x7, 0x1b, 0x14, 0xd, 0x2,
              0x29, 0x34, 0x1f, 0x25, 0x2f, 0x37, 0x1e, 0x28, 0x33, 0x2d, 0x21,
              0x30, 0x2c, 0x31, 0x27, 0x38, 0x22, 0x35, 0x2e, 0x2a, 0x32, 0x24,
              0x1d, 0x20,
            ];
            var _0xa0b90f = [
              0x1, 0x2, 0x4, 0x6, 0x8, 0xa, 0xc, 0xe, 0xf, 0x11, 0x13, 0x15,
              0x17, 0x19, 0x1b, 0x1c,
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
              0xf8000001, 0x1f800000, 0x1f80000, 0x1f8000, 0x1f800, 0x1f80,
              0x1f8, 0x8000001f,
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
                          ((_0x1a23d1[_0xdad0fa + 0x18] - 0x1 + _0x29a7dc) %
                            0x1c)
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
                  (_0x54d025[0x0] >>> 0x0 < _0xe50221[0x0] >>> 0x0
                    ? 0x1
                    : 0x0)) |
                0x0;
              _0x54d025[0x2] =
                (_0x54d025[0x2] +
                  0x34d34d34 +
                  (_0x54d025[0x1] >>> 0x0 < _0xe50221[0x1] >>> 0x0
                    ? 0x1
                    : 0x0)) |
                0x0;
              _0x54d025[0x3] =
                (_0x54d025[0x3] +
                  0x4d34d34d +
                  (_0x54d025[0x2] >>> 0x0 < _0xe50221[0x2] >>> 0x0
                    ? 0x1
                    : 0x0)) |
                0x0;
              _0x54d025[0x4] =
                (_0x54d025[0x4] +
                  0xd34d34d3 +
                  (_0x54d025[0x3] >>> 0x0 < _0xe50221[0x3] >>> 0x0
                    ? 0x1
                    : 0x0)) |
                0x0;
              _0x54d025[0x5] =
                (_0x54d025[0x5] +
                  0x34d34d34 +
                  (_0x54d025[0x4] >>> 0x0 < _0xe50221[0x4] >>> 0x0
                    ? 0x1
                    : 0x0)) |
                0x0;
              _0x54d025[0x6] =
                (_0x54d025[0x6] +
                  0x4d34d34d +
                  (_0x54d025[0x5] >>> 0x0 < _0xe50221[0x5] >>> 0x0
                    ? 0x1
                    : 0x0)) |
                0x0;
              _0x54d025[0x7] =
                (_0x54d025[0x7] +
                  0xd34d34d3 +
                  (_0x54d025[0x6] >>> 0x0 < _0xe50221[0x6] >>> 0x0
                    ? 0x1
                    : 0x0)) |
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
                  var _0x7887ac =
                    (_0x35840a >>> 0x10) | (0xffff0000 & _0x489853);
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
      ig.Game.prototype.name = "V-Geese-Game";
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
                  ((_0x250d76 -= 0x2) * _0x250d76 * _0x250d76 * _0x250d76 -
                    0x2);
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
              ? 0.5 *
                  _0x2f5ba6 *
                  _0x2f5ba6 *
                  (3.5949095 * _0x2f5ba6 - 2.5949095)
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
              : 7.5625 * (_0x205acf -= 0.9545454545454546) * _0x205acf +
                0.984375;
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
                : (0x1 - Math.pow(0x2 - 0x2 * _0x555975, _0x1d9bfe)) / 0x2 +
                    0.5;
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
              (-0x3 * _0x4ca1a9 +
                0x3 * _0x1f6ba8 -
                0x2 * _0x40451f -
                _0x508d5c) *
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
              if (
                !this._yoyo &&
                "string" === typeof this._valuesEnd[_0x3bb666]
              ) {
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
      _0xe91f3d.prototype._handleRelativeValue = function (
        _0x8e00a8,
        _0xb24701
      ) {
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
      rewardBallNum: 3,
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
            "assets/media/babylon/flare.png",
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
          _0x40c7d0.emitRate = 160;
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
            "assets/media/babylon/flare.png",
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
          this.aimLine.material.emissiveColor = BABYLON.Color3.Yellow;
          this.aimLine.material.disableLighting = true;
          this.aimLine.isVisible = false;
          this.aimBall = wgl.scene.getMeshByName("AimBall");
          this.aimBall.material.depthFunction = BABYLON.Constants.ALWAYS;
          this.aimBall.material.disableLighting = true;
          this.aimBall.material.emissiveColor = BABYLON.Color3.Yellow;
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
            this.impostor.body
              .getCollisionObservable()
              .add(function (_0xcccada) {
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
              this.angleBetweenPoints(
                _0x44e389.pickedPoint,
                this.mesh.position
              );
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
          return Math.atan2(
            _0x568913.z - _0x5ab1b1.z,
            _0x568913.x - _0x5ab1b1.x
          );
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
          this.engine = new BABYLON.Engine(
            this.canvas,
            !ig.ua.mobile,
            {},
            true
          );
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
            "assets/media/babylon/",
            "scene.babylon",
            this.engine,
            function (scene) {
              this.scene = scene;
              console.log(scene);
              // scene.exportMeshToGltfAsync().then((glTF) => {
              //   // 将 glTF 数据保存为文件
              //   const fileName = "scene.gltf";
              //   const blob = new Blob([JSON.stringify(glTF)], {
              //     type: "application/json",
              //   });
              //   const link = document.createElement("a");
              //   link.href = URL.createObjectURL(blob);
              //   link.download = fileName;
              //   link.click();
              // });
              try {
                HavokPhysics().then(
                  function (_0x273c4a) {
                    this.havokInstance = _0x273c4a;
                    this.prepareScene();
                  }.bind(this)
                );
              } catch (_0x373dab) {
                //console.log(_0x373dab);
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
            "assets/media/babylon/skybox/skybox",
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
            "assets/media/babylon/waterbright.png",
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
          var _0x5c674b = new BABYLON.FollowCamera(
            "endCam",
            this.v3,
            wgl.scene
          );
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
          _0x14d1a2 = this.scene.getMeshByName(
            "lvl" + this.holeId + "-ballpos"
          );
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
        title: new ig.Image("assets/logo/logo-load.png"),
        bar0: new ig.Image("assets/media/graphics/sprites/ui/bar0.png"),
        bar1: new ig.Image("assets/media/graphics/sprites/ui/bar1.png"),
        checkWGL: false,
        init: function (_0x3f3943, _0x4f44bc) {
          this.parent(_0x3f3943, _0x4f44bc);
          ig.loader = this;
          try {
            $("#ajaxbar").css("background", "none");
          } catch (_0x3c1a83) {}
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
              STRINGS.Splash.TapToStart +
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
              //console.log(_0x13700e);
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
            if (SETTINGS.TapToStartAudioUnlock.Enabled) {
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
          for (
            var _0x2c4e31 = 0x0;
            _0x2c4e31 < this.tweens.length;
            _0x2c4e31++
          ) {
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
            this.propUpdate(
              property,
              _0x3c3b40,
              _0xabace1,
              _0x5e554c,
              _0xca973f
            );
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
          : -0.5 *
              ((_0x2fbd65 -= 0x2) * _0x2fbd65 * _0x2fbd65 * _0x2fbd65 - 0x2);
      };
      ig.Tween.Easing.Quintic.EaseIn = function (_0x38246f) {
        return _0x38246f * _0x38246f * _0x38246f * _0x38246f * _0x38246f;
      };
      ig.Tween.Easing.Quintic.EaseOut = function (_0x1078b8) {
        return (
          (_0x1078b8 -= 0x1) * _0x1078b8 * _0x1078b8 * _0x1078b8 * _0x1078b8 +
          0x1
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
          _0x2832c4 =
            (_0xbe4454 / (0x2 * Math.PI)) * Math.asin(0x1 / _0x2b76d4);
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
          _0x39601a =
            (_0x2eef2c / (0x2 * Math.PI)) * Math.asin(0x1 / _0x237c9d);
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
          _0x28a54b =
            (_0x402cfa / (0x2 * Math.PI)) * Math.asin(0x1 / _0x484ec3);
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
                    "+" === _0x800b02.charAt(0x0) ||
                    "-" === _0x800b02.charAt(0x0)
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
                  this._valuesStartRepeat[_0x3fd2ea] =
                    this._valuesEnd[_0x3fd2ea];
                  this._valuesEnd[_0x3fd2ea] = _0x1e8f54;
                }
                this._valuesStart[_0x3fd2ea] =
                  this._valuesStartRepeat[_0x3fd2ea];
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
              (-0x3 * _0x27c8db +
                0x3 * _0x31ac89 -
                0x2 * _0xff7cff -
                _0xf4e8dc) *
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
          //console.log("iPhone mode");
        }
        var _0x5727a3 = getQueryVariable("webview");
        if (_0x5727a3) {
          switch (_0x5727a3) {
            case "true":
              ig.ua.is_uiwebview = true;
            //console.log("webview mode");
          }
        }
        if ((_0x5727a3 = getQueryVariable("debug"))) {
          switch (_0x5727a3) {
            case "true":
              ig.game.showDebugMenu();
            //console.log("debug mode");
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
            //console.log(_0xa7a73d);
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
          return Math.atan2(
            _0x38a4a8.y - _0x1e42cc.y,
            _0x38a4a8.x - _0x1e42cc.x
          );
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
            _0x12395f +
            Math.floor(Math.random() * (_0x38dda5 - _0x12395f + 0x1))
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
                      (_0x5bb52b.h === _0x3707e5.h &&
                        _0x5bb52b.g < _0x3707e5.g))
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
        if (
          _0x304dd2[_0x591464 - 0x1] &&
          _0x304dd2[_0x591464 - 0x1][_0x527ac5]
        ) {
          _0x3ef3d9.push(_0x304dd2[_0x591464 - 0x1][_0x527ac5]);
        }
        if (
          _0x304dd2[_0x591464 + 0x1] &&
          _0x304dd2[_0x591464 + 0x1][_0x527ac5]
        ) {
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
  ig.module("game.entities.buttons.button")
    .requires("impact.entity")
    .defines(function () {
      EntityButton = ig.Entity.extend({
        collides: ig.Entity.COLLIDES.NEVER,
        image: new ig.Image("assets/media/graphics/misc/invisible.png"),
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
            var textContext = ig.system.context;
            textContext.save();
            textContext.translate(
              ig.system.getDrawPos(
                this.pos.x.round() - ig.game.screen.x + this.halfSize.x
              ),
              ig.system.getDrawPos(
                this.pos.y - ig.game.screen.y + this.halfSize.y
              )
            );
            this.image.draw(-this.halfSize.x, -this.halfSize.y);
            textContext.font = this.font;
            textContext.fillStyle = this.fillStyle;
            textContext.textAlign = "center";
            textContext.fillText(this.text, 0x0, this.textY);
            textContext.restore();
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
            var textContext = ig.system.context;
            textContext.save();
            textContext.translate(
              ig.system.getDrawPos(this.dx + this.halfSize.x),
              ig.system.getDrawPos(this.dy + this.halfSize.y)
            );
            textContext.scale(this.scale, this.scale);
            this.image.draw(-this.halfSize.x, -this.halfSize.y);
            this.drawText(textContext);
            textContext.restore();
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
        invisImagePath: "assets/media/graphics/misc/invisible.png",
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
                Math.floor(
                  this.size.x * ig.sizeHandler.scaleRatioMultiplier.x
                ) + "px";
              _0x180e1c =
                Math.floor(
                  this.size.y * ig.sizeHandler.scaleRatioMultiplier.y
                ) + "px";
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
              Math.floor(
                _0x231f73 + this.pos.y * _0x180e1c - ig.game.screen.y
              ) + "px";
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
  ig.module("game.entities.buttons.button-more-games")
    .requires("game.entities.buttons.button", "plugins.clickable-div-layer")
    .defines(function () {
      EntityButtonMoreGames = EntityButtonFix.extend({
        image: new ig.Image(
          "assets/media/graphics/sprites/ui/btn-moregames.png"
        ),
        clickableLayer: null,
        link: null,
        newWindow: false,
        div_layer_name: "more-games",
        name: "moregames",
        fontSize: 0x24,
        init: function (_0x55a492, _0x3c9dce, _0x23537f) {
          if (!ig.global.wm) {
            this.text = STRINGS.Game.MoreGames;
          }
          this.parent(_0x55a492, _0x3c9dce, _0x23537f);
          if (!ig.global.wm) {
            this.div_layer_name = _0x23537f.div_layer_name
              ? _0x23537f.div_layer_name
              : "more-games";
            if (SETTINGS.MoreGames.Enabled) {
              if (SETTINGS.MoreGames.Link) {
                this.link = SETTINGS.MoreGames.Link;
              }
              if (SETTINGS.MoreGames.NewWindow) {
                this.newWindow = SETTINGS.MoreGames.NewWindow;
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
          var _0x536361 = ig.domHandler.getElementById(
            "#" + this.div_layer_name
          );
          if (_0x536361) {
            ig.domHandler.show(_0x536361);
          }
        },
        hide: function () {
          var _0x5dae26 = ig.domHandler.getElementById(
            "#" + this.div_layer_name
          );
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
  ig.module("game.v-geese-game")
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
      "plugins.handlers.visibility-handler",
      "plugins.audio.sound-handler",
      "plugins.io.io-manager",
      "plugins.io.storage-manager",
      "plugins.splash-loader",
      "plugins.tweens-handler",
      "plugins.url-parameters",
      "plugins.director",
      "plugins.impact-storage",
      "game.plugin",
      "plugins.astar"
    )
    .defines(function () {
      VGeeseGame = ig.Game.extend({
        name: "V-Geese-Game",
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
          this.setupVGeeseGameCenter();
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
        setupVGeeseGameCenter: function () {
          if (SETTINGS) {
            if (SETTINGS.VGeeseGameCenter) {
              var _0x11d4e2 = ig.domHandler.getElementByClass(
                "gamecenter-activator"
              );
              if (
                SETTINGS.VGeeseGameCenter.Activator.Enabled &&
                SETTINGS.VGeeseGameCenter.Activator.Position
              ) {
                //console.log("VGeeseGameCenter activator settings present ....");
                ig.domHandler.css(_0x11d4e2, {
                  position: "absolute",
                  left: SETTINGS.VGeeseGameCenter.Activator.Position.Left,
                  top: SETTINGS.VGeeseGameCenter.Activator.Position.Top,
                  "z-index": 0x3,
                });
              }
              ig.domHandler.show(_0x11d4e2);
            } else {
              //console.log(
              // ("VGeeseGameCenter settings not defined in game settings");
              // );
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
            //console.log(_0x4030e3);
          }
        },
        showDebugMenu: function () {
          //console.log("showing debug menu ...");
          ig.Entity._debugShowBoxes = true;
          $(".ig_debug").show();
        },
        start: function () {
          this.resetPlayerStats();
          this.director = new ig.Director(this, [LevelLevel1]);
          if (SETTINGS.Branding.Splash.Enabled) {
            try {
              this.branding = new ig.BrandingSplash();
            } catch (_0x3f3755) {
              //console.log(_0x3f3755);
              //console.log("Loading original levels ...");
              this.director.loadLevel(this.director.currentLevel);
            }
          } else {
            this.director.loadLevel(this.director.currentLevel);
          }
          if (
            SETTINGS.Branding.Splash.Enabled ||
            SETTINGS.DeveloperBranding.Splash.Enabled
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
          //console.log("End game");
          ig.soundHandler.bgmPlayer.stop();
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
          //console.log("Game Paused");
        },
        resumeGame: function () {
          ig.system.startRunLoop.call(ig.system);
          ig.game.tweens.onSystemResume();
          ig.soundHandler.unmuteAll();
          if (ig.control) {
            ig.control.resumeGame();
          }
          //console.log("Game Resumed");
        },
        showOverlay: function (_0x340fd8) {
          for (i = 0x0; i < _0x340fd8.length; i++) {
            if ($("#" + _0x340fd8[i])) {
              $("#" + _0x340fd8[i]).show();
            }
            if (document.getElementById(_0x340fd8[i])) {
              document.getElementById(_0x340fd8[i]).style.visibility =
                "visible";
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
          //console.log(_0x4970c5);
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
            "undefined" !== typeof SETTINGS.Versioning &&
            null !== SETTINGS.Versioning &&
            SETTINGS.Versioning.DrawVersion
          ) {
            var _0xa8d17b = ig.system.context;
            fontSize = SETTINGS.Versioning.FontSize;
            fontFamily = SETTINGS.Versioning.FontFamily;
            fillStyle = SETTINGS.Versioning.FillStyle;
            _0xa8d17b.save();
            _0xa8d17b.textBaseline = "bottom";
            _0xa8d17b.textAlign = "left";
            _0xa8d17b.font = fontSize + " " + fontFamily || "10px Arial";
            _0xa8d17b.fillStyle = fillStyle || "#ffffff";
            _0xa8d17b.fillText(
              "v" +
                SETTINGS.Versioning.Version +
                "+build." +
                SETTINGS.Versioning.Build,
              0xa,
              ig.system.height - 0xa
            );
            _0xa8d17b.restore();
          }
        },
      });
    });
  ig.baked = true;

  ig.baked = true;
  ig.module("game.levels.opening")
    .requires("impact.image")
    .defines(function () {
      LevelOpening = {
        entities: [
          {
            type: "EntityVgeeseSplash",
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
        image: new ig.Image("assets/media/graphics/sprites/ui/panel.png"),
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
          this.title = STRINGS.Game.Settings;
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
          var textContext = ig.system.context;
          textContext.save();
          textContext.setTransform(1, 0, 0, 1, 0, 0);
          textContext.fillStyle = "rgba(0,0,0," + this.overlayAlpha + ")";
          textContext.fillRect(0, 0, ig.system.width, ig.system.height);
          textContext.translate(
            ig.system.getDrawPos(this.pos.x + this.halfSize.x),
            ig.system.getDrawPos(this.pos.y + this.halfSize.y)
          );
          textContext.scale(this.scale, this.scale);
          this.image.draw(-this.halfSize.x, -this.halfSize.y);
          this.drawText(textContext);
          this.extraDraw(textContext);
          this.drawEntities(textContext);
          textContext.restore();
        },
        callback: function () {},
        callbackIn: function () {},
        extraDraw: function () {},
        drawText: function (textContext) {
          textContext.font = this.titleFont;
          textContext.textAlign = "center";
          textContext.fillStyle = "#FFF";
          textContext.fillText(this.title, 0, this.titleY);
        },
        drawEntities: function (textContext) {
          for (var index = 0x0; index < this.entities.length; index++) {
            this.entities[index].drawImage(textContext);
          }
        },
        kill: function () {
          for (var index = 0x0; index < this.entities.length; index++) {
            this.entities[index].kill();
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
  // 教程-弹窗详情
  ig.module("game.entities.popups.popup-tutorial")
    .requires("game.entities.popups.popup", "game.entities.buttons.button")
    .defines(function () {
      EntityPopupTutorial = EntityPopup.extend({
        tutorials: [
          new ig.Image("assets/media/graphics/sprites/tutorial/tutorial1.png"),
          new ig.Image("assets/media/graphics/sprites/tutorial/tutorial2.png"),
        ],
        pageId: 0,
        addEntities: function () {
          this.title = STRINGS.Game.Tutorial;
          var _0x4be0fd = this.zIndex + 1;
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
          this.arrowNext = ig.game.spawnEntity(
            EntityButtonArrowNext,
            0x0,
            0x0,
            {
              popup: this,
              dx: this.halfSize.x - _0x2f9b5d,
              dy: _0x5e02ff,
              zIndex: _0x4be0fd,
            }
          );
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
          _0x4be0fd = this.tutorials[0];
          this.imageX = -_0x4be0fd.width / 0x2;
          this.imageY = -_0x4be0fd.height / 0x2 - 0x32;
          this.textY0 = _0x4be0fd.height / 0x2;
          this.textY1 = this.textY0 + 0x3c;
          this.text1 = STRINGS.Game.Tutorial1Line1;
          this.text2 = STRINGS.Game.Tutorial1Line2;
          this.titleY -= 0xc;
          this.tutorialImage = this.tutorials[0];
        },
        extraDraw: function (text) {
          ig.drawUtil.fontStyle("bold 32px Arial", "#0154c2", "center");
          text.fillText(this.text1, 0x0, this.textY0);
          text.fillText(this.text2, 0x0, this.textY1);
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
              STRINGS.Game["Tutorial" + (this.pageId + 0x1) + "Line1"];
            this.text2 =
              STRINGS.Game["Tutorial" + (this.pageId + 0x1) + "Line2"];
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
              STRINGS.Game["Tutorial" + (this.pageId + 0x1) + "Line1"];
            this.text2 =
              STRINGS.Game["Tutorial" + (this.pageId + 0x1) + "Line2"];
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
        image: new ig.Image("assets/media/graphics/sprites/ui/btn-home.png"),
        callback: function () {
          this.popup.hide("");
        },
      });
      EntityButtonPlayTutorial = EntityButtonPopup.extend({
        image: new ig.Image("assets/media/graphics/sprites/ui/btn-resume.png"),
        callback: function () {
          this.popup.hide("play");
        },
      });
      EntityButtonArrowNext = EntityButtonPopup.extend({
        image: new ig.Image("assets/media/graphics/sprites/ui/btn-arrow.png"),
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
        image: new ig.Image("assets/media/graphics/sprites/ui/btn-play.png"),
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
        image1: new ig.Image(
          "assets/media/graphics/sprites/ui/sound-toggle-on.png"
        ),
        image2: new ig.Image(
          "assets/media/graphics/sprites/ui/sound-toggle-off.png"
        ),
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
        image1: new ig.Image(
          "assets/media/graphics/sprites/ui/music-toggle-on.png"
        ),
        image2: new ig.Image(
          "assets/media/graphics/sprites/ui/music-toggle-off.png"
        ),
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
            ? STRINGS.Game.Reward
            : STRINGS.Game.Confirmation;
          var _0x532181 = this.zIndex + 1;
          var _0xbab8c5 = this.halfSize.y - 220;
          this.entities.push(
            ig.game.spawnEntity(
              this.isRV ? EntityButtonYesRV : EntityButtonYes,
              0,
              0,
              {
                popup: this,
                dx: -265.5,
                dy: _0xbab8c5,
                zIndex: _0x532181,
              }
            )
          );
          this.entities.push(
            ig.game.spawnEntity(EntityButtonNo, 0, 0, {
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
          ig.control.drawText(STRINGS.Game.NewGame, 0, -85);
          ig.control.drawText(STRINGS.Game.NewGame2, 0, 28);
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
        image: new ig.Image("assets/media/graphics/sprites/ui/btn-yes.png"),
        callback: function () {
          this.popup.hide("Yes");
        },
      });
      EntityButtonNo = EntityButtonPopup.extend({
        image: new ig.Image("assets/media/graphics/sprites/ui/btn-no.png"),
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
          this.text = STRINGS.Game.EndGame;
        },
        extraDraw: function (textContext) {
          textContext.strokeStyle = "#404040";
          textContext.font = "75px text";
          textContext.lineWidth = 0xa;
          textContext.lineJoin = "round";
          textContext.textAlign = "center";
          ig.control.drawText(this.text, 0, -28);
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
        image: new ig.Image("assets/media/graphics/sprites/ui/btn-home.png"),
        callback: function () {
          if (
            wgl.over &&
            (!wgl.win || wgl.holeId === ig.params.ballNum.length)
          ) {
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
          this.title = STRINGS.Game.Settings;
          var zIndex = this.zIndex + 1;
          var _0x5e4577 = -72.5;
          var _0x5164ad = this.halfSize.y - 160 - 0x53;
          if (ig.home.btMoreGames) {
            ig.home.btMoreGames.hide();
          }
          this.entities.push(
            ig.game.spawnEntity(EntityButtonBackSetting, 0x0, 0x0, {
              popup: this,
              dx: _0x5e4577,
              dy: _0x5164ad,
              zIndex: zIndex,
            })
          );
          _0x5e4577 = -72.5;
          this.entities.push(
            ig.game.spawnEntity(EntityButtonAudio, 0x0, 0x0, {
              popup: this,
              dx: _0x5e4577 + 0x73,
              dy: -0x8c,
              zIndex: zIndex,
            })
          );
          this.entities.push(
            ig.game.spawnEntity(EntityButtonBGM, 0, 0, {
              popup: this,
              dx: _0x5e4577 - 115,
              dy: -140,
              zIndex: zIndex,
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
        image: new ig.Image("assets/media/graphics/sprites/ui/btn-home.png"),
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
        image: new ig.Image(
          "assets/media/graphics/sprites/ui/btn-settings.png"
        ),
        repos: function () {
          if (SETTINGS.MoreGames.Enabled) {
            this.pos.x = ig.game.midX - this.halfSize.x + 0xe6;
            this.pos.y = ig.game.midY + 0xe6;
          } else {
            this.pos.x = ig.game.midX - this.halfSize.x;
            this.pos.y = ig.game.midY + 0x15e;
          }
        },
        callback: function () {
          ig.game.spawnEntity(EntityPopupSettings, 0, 0);
        },
      });
    });
  ig.baked = true;
  // 语言设置
  ig.module("game.entities.buttons.button-language")
    .requires(
      "plugins.impact-storage",
      "game.entities.popups.popup",
      "game.entities.buttons.button"
    )
    .defines(function () {
      // ig.Language = {
      //   isEnabled: function () {
      //     return SETTINGS.Language.show;
      //   },
      // };
      EntityLanguagePopup = EntityPopup.extend({
        pageId: 1000,
        addEntities: function () {
          this.text = SETTINGS.Language.Option.forEach((i) => i.label);
        },
        extraDraw: function (textContext) {
          textContext.font = "50px text";
          textContext.textAlign = "center";
          textContext.fillStyle = "#000000";

          this.text = SETTINGS.Language.Option.forEach((i, index) => {
            const ty = index < 3 ? 0 : 30;
            const tx = (index % 3) + 20;
            textContext.fillText(i.label, tx, ty);
          });
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
      EntityButtonLanguage = EntityButtonFix.extend({
        image: new ig.Image(
          "assets/media/graphics/sprites/ui/btn-language.png"
        ),
        repos: function () {
          this.pos.x = 0xf;
          this.pos.y = 0xf;
        },
        callback: function () {
          ig.game.spawnEntity(EntityLanguagePopup);
        },
      });
      EntityButtonCloseLanguage = EntityButtonPopup.extend({
        image: new ig.Image("assets/media/graphics/sprites/ui/btn-home.png"),
        callback: function () {
          this.popup.hide("");
        },
      });
    });
  ig.baked = true;
  // 教程-弹窗按钮
  ig.module("game.entities.buttons.button-tutorial")
    .requires(
      "game.entities.buttons.button",
      "game.entities.popups.popup-tutorial"
    )
    .defines(function () {
      EntityButtonTutorial = EntityButtonFix.extend({
        image: new ig.Image("assets/media/graphics/sprites/ui/btn-tut.png"),
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
      "game.entities.buttons.button-language",
      "game.entities.buttons.button-tutorial"
    )
    .defines(function () {
      EntityHome = ig.Entity.extend({
        imageTitle: new ig.Image("assets/logo/logo-in.png"),
        buttons: [],
        showTitle: true,
        init: function (_0x1ac3c6, _0x5cbccf, _0x50dd70) {
          this.parent(_0x1ac3c6, _0x5cbccf, _0x50dd70);
          ig.control = null;
          ig.home = this;
          wgl.processing = true;
          wgl.cameraEffect = true;
          wgl.holeId = 1;
          this.zIndex = ig.game.currentLayer = ig.game.layers.base;
          this.buttons.push(
            ig.game.spawnEntity(EntityButtonPlay, 0, 0, {
              scale: 0.01,
            })
          );
          this.buttons.push(
            ig.game.spawnEntity(EntityButtonSettings, 0, 0, {
              scale: 0.01,
            })
          );
          if (SETTINGS.MoreGames.Enabled) {
            this.btMoreGames = ig.game.spawnEntity(
              EntityButtonMoreGames,
              0,
              0,
              {
                scale: 0.01,
              }
            );
            this.buttons.push(this.btMoreGames);
          }
          this.buttons.push(
            ig.game.spawnEntity(EntityButtonTutorial, 0, 0, {
              scale: 0.01,
            })
          );
          if (SETTINGS.Language.show) {
            this.buttons.push(
              ig.game.spawnEntity(EntityButtonLanguage, 0, 0, {
                scale: 0.01,
              })
            );
          }
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
            var _0x32ca84 = 0;
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

                  // 插页式广告
                  SETTINGS.Ad.preloadedInterstitial
                    .showAsync()
                    .then(function () {
                      // 看完之后回调
                      //console.log("Interstitial watched!");
                    })
                    .catch(function (error) {
                      console.error(error.message);
                    });
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
          0x0 < this.bin.length
            ? this.bin.pop()
            : ig.game.spawnEntity(this.type);
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
  // 重新开始玩
  ig.module("game.entities.buttons.button-replay")
    .requires("game.entities.popups.popup-confirmation")
    .defines(function () {
      EntityButtonReplay = EntityButtonPopup.extend({
        image: new ig.Image("assets/media/graphics/sprites/ui/btn-replay.png"),
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
        image: new ig.Image("assets/media/graphics/sprites/ui/btn-resume.png"),
        callback: function () {
          this.popup.hide("next");
        },
      });
    });
  ig.baked = true;
  // 游戏暂停
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
          this.title = STRINGS.Game.Pause;
          var _0x3d2e33 = this.zIndex + 0x1;
          var _0x39e28c = this.halfSize.y - 160 - 0x5a;
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
              //console.log(wgl.forcedPause);
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
    .requires(
      "game.entities.buttons.button",
      "game.entities.popups.popup-pause"
    )
    .defines(function () {
      EntityButtonPause = EntityButtonFix.extend({
        image: new ig.Image("assets/media/graphics/sprites/ui/btn-pause.png"),
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
              ? STRINGS.Game.Complete.replace("#", wgl.holeId)
              : STRINGS.Game.GameComplete
            : STRINGS.Game.Over;
          var _0x50961a = this.zIndex + 0x1;
          var _0x3679f7 = this.halfSize.y - 160 - 60;
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
        extraDraw: function (textContext) {
          textContext.strokeStyle = "#404040";
          textContext.font = "80px text";
          textContext.lineWidth = 0xa;
          textContext.lineJoin = "round";
          textContext.textAlign = "left";
          ig.control.drawText(STRINGS.Game.Score, -0xfa, this.scoreTextY);
          textContext.textAlign = "right";
          ig.control.drawText(this.scoreText, 0xfa, this.scoreTextY);
          if (!wgl.win || wgl.holeId === ig.params.ballNum.length) {
            if (this.bestScore) {
              textContext.textAlign = "center";
              ig.control.drawText(STRINGS.Game.NewBest, 0x0, 0x1e);
            } else {
              textContext.textAlign = "left";
              ig.control.drawText(STRINGS.Game.Best, -0xfa, 0x1e);
              textContext.textAlign = "right";
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
          this.text = ig.util.rGet(STRINGS.Game.Cheers);
          if (ig.control.usedExtraBall) {
            switch (ig.params.rewardBallNum - ig.control.ballLeft) {
              case 0x1:
                this.subText = STRINGS.Game.Bogey;
                break;
              case 0x2:
                this.subText = STRINGS.Game.DoubleBogey;
                break;
              case 0x3:
                this.subText = STRINGS.Game.TripleBogey;
                break;
              default:
                this.subText = STRINGS.Game.TriedHard;
            }
          } else {
            var _0xf60e97 = ig.control.ballTotal - ig.control.ballLeft;
            if (0x1 === _0xf60e97) {
              this.subText = STRINGS.Game.HoleIn.replace("#", "1");
            } else {
              switch (ig.control.ballLeft) {
                case 0x0:
                  this.subText = STRINGS.Game.Par;
                  break;
                case 0x1:
                  this.subText = STRINGS.Game.Birdie;
                  break;
                case 0x2:
                  this.subText = STRINGS.Game.Eagle;
                  break;
                case 0x3:
                  this.subText = STRINGS.Game.DoubleEagle;
                  break;
                default:
                  this.subText = STRINGS.Game.HoleIn.replace("#", _0xf60e97);
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
  // 奖励视频
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
          this.text = STRINGS.Game.RewardMessage.replace(
            "#",
            ig.params.rewardBallNum
          );
        },
        extraDraw: function (textContext) {
          textContext.strokeStyle = "#404040";
          textContext.font = "75px text";
          textContext.lineWidth = 0xa;
          textContext.lineJoin = "round";
          textContext.textAlign = "center";
          ig.control.drawText(this.text, 0x0, -0x1c);
        },
        // 点击按钮以后回调，如果点yes,则观看奖励视频，否则回到首页
        callback: function (_0x361d3d) {
          switch (_0x361d3d) {
            case "RVAd":
              this.showRewardedVideo();
              break;
            case "No":
              ig.control.over();
          }
        },
        // 观看奖励视频
        showRewardedVideo: function () {
          // 加载奖励视频: 广告位ID,
          FBInstant.getRewardedVideoAsync("id")
            .then(function (rewarded) {
              // Load the Ad asynchronously
              SETTINGS.Ad.preloadedRewardedVideo = rewarded;
              return SETTINGS.Ad.preloadedRewardedVideo.loadAsync();
            })
            .then(function () {
              this.rewardedVideoWatch();
            })
            .catch(function (error) {
              console.error(
                "Rewarded Video failed to preload: " + error.message
              );
            });
        },

        // 是否已经观看
        rewardedVideoWatch: function () {
          SETTINGS.Ad.preloadedRewardedVideo
            .showAsync()
            .then(function () {
              // 看完之后回调
              ig.control.reward();
            })
            .catch(function (error) {
              console.error(error.message);
              ig.control.over();
            });
        },
      });
      EntityButtonYesRV = EntityButtonPopup.extend({
        image: new ig.Image("assets/media/graphics/sprites/ui/btn-yes-rv.png"),
        callback: function () {
          this.popup.hide("RVAd");
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
        ball0: new ig.Image("assets/media/graphics/sprites/ui/heart0.png"),
        ball1: new ig.Image("assets/media/graphics/sprites/ui/heart.png"),
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
          this.btPause = ig.game.spawnEntity(EntityButtonPause, 0, 0, {
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
              ig.game.spawnEntity(EntityPopupOver, 0, 0);
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
          wgl.cameraEffect = true;
          wgl.ball.isFocused =
            this.btPause.visible =
            this.usedExtraBall =
            wgl.forcedPause =
              false;
          ig.game.currentLayer = ig.game.layers.base;
          wgl.start();
          wgl.startShow();
        },
        // 奖励
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
            STRINGS.Game.Hole + wgl.holeId + " / " + ig.params.ballNum.length;
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
            BABYLON.Vector3.Distance(
              wgl.ball.mesh.position,
              wgl.ball.startPos
            ) / 0x7;
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
        // 每次失败都会检查球的个数
        fail: function () {
          if (this.checkBall()) {
            // 这段代码
            this.resetTimer.start();
          }
        },
        // 检查是否需要观看奖励视频
        checkBall: function () {
          if (this.ballLeft <= 0) {
            ig.game.spawnEntity(EntityPopupReward);
            return false;
          } else {
            return true;
          }
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
        drawText: function (text, _0x36af7a, _0x18ec17) {
          ig.system.context.strokeText(text, _0x36af7a, _0x18ec17);
          ig.system.context.fillText(text, _0x36af7a, _0x18ec17);
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
      "game.v-geese-game",
      "game.levels.opening",
      "game.levels.home",
      "game.levels.game"
    )
    .defines(function () {
      MyGame = VGeeseGame.extend({
        name: "Easy-Golf",
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
          this.director = new ig.Director(this, [LevelHome, LevelGame]);
          if (SETTINGS.Branding.Splash.Enabled) {
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
            "",
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
    });
})();
