(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === "object" && typeof module === "object")
    module.exports = factory();
  else if (typeof define === "function" && define.amd)
    define("babylonjs", [], factory);
  else if (typeof exports === "object") exports["babylonjs"] = factory();
  else root["BABYLON"] = factory();
})(
  typeof self !== "undefined"
    ? self
    : typeof global !== "undefined"
    ? global
    : this,
  () => {
    return () => {
      "use strict";
      var __webpack_modules__ = {
        "../../../dev/core/src/Actions/abstractActionManager.ts": (
          __unused_webpack_module,
          __webpack_exports__,
          __webpack_require__
        ) => {},
      };
      var __webpack_module_cache__ = {};
      function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== undefined) {
          return cachedModule.exports;
        }
        var module = (__webpack_module_cache__[moduleId] = {
          exports: {},
        });
        __webpack_modules__[moduleId](
          module,
          module.exports,
          __webpack_require__
        );
        return module.exports;
      }
      (() => {
        __webpack_require__.d = (exports, definition) => {
          for (var key in definition) {
            if (
              __webpack_require__.o(definition, key) &&
              !__webpack_require__.o(exports, key)
            ) {
              Object.defineProperty(exports, key, {
                enumerable: true,
                get: definition[key],
              });
            }
          }
        };
      })();
      (() => {
        __webpack_require__.g = (function () {
          if (typeof globalThis === "object") return globalThis;
          try {
            return this || new Function("return this")();
          } catch (e) {
            if (typeof window === "object") return window;
          }
        })();
      })();
      (() => {
        __webpack_require__.o = (obj, prop) =>
          Object.prototype.hasOwnProperty.call(obj, prop);
      })();
      (() => {
        __webpack_require__.r = (exports) => {
          if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
            Object.defineProperty(exports, Symbol.toStringTag, {
              value: "Module",
            });
          }
          Object.defineProperty(exports, "__esModule", {
            value: true,
          });
        };
      })();
      var __webpack_exports__ = {};
      (() => {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, {
          core: () => _lts_core_Legacy_legacy__WEBPACK_IMPORTED_MODULE_0__,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
        var _lts_core_Legacy_legacy__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__("../../../lts/core/src/Legacy/legacy.ts");
        const __WEBPACK_DEFAULT_EXPORT__ =
          _lts_core_Legacy_legacy__WEBPACK_IMPORTED_MODULE_0__;
      })();
      __webpack_exports__ = __webpack_exports__["default"];
      return __webpack_exports__;
    };
  }
);

// 'ParticleSystem,
//   Vector3,
//   Texture,
//   Color4,
//   Color3,
//   Constants,
//   MeshBuilder,
//   StandardMaterial,
//   CubeTexture,
//   Mesh,
//   TransformNode,
//   TrailMesh,
//   FollowCamera,
//   Matrix,
//   Quaternion,
//   PhysicsAggregate,
//   HemisphericLight,
//   PhysicsShapeType,
//   HavokPlugin,
//   Engine,
//   SceneLoader'
