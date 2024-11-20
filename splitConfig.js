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
    };
  }
);
