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
    return /******/ () => {
      // webpackBootstrap
      /******/ "use strict";
      /******/ var __webpack_modules__ = {
        /***/ "../../../dev/core/src/Actions/abstractActionManager.ts":
          /*!**************************************************************!*\
  !*** ../../../dev/core/src/Actions/abstractActionManager.ts ***!
  \**************************************************************/
          /***/ (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
          ) => {
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ AbstractActionManager: () =>
                /* binding */ AbstractActionManager,
              /* harmony export */
            });
            /* harmony import */ var _Engines_constants__WEBPACK_IMPORTED_MODULE_0__ =
              __webpack_require__(
                /*! ../Engines/constants */ "../../../dev/core/src/Engines/constants.ts"
              );

            /**
             * Abstract class used to decouple action Manager from scene and meshes.
             * Do not instantiate.
             * @see https://doc.babylonjs.com/features/featuresDeepDive/events/actions
             */
            var AbstractActionManager = /** @class */ function () {
              function AbstractActionManager() {
                /** Gets the cursor to use when hovering items */
                this.hoverCursor = "";
                /** Gets the list of actions */
                this.actions = [];
                /**
                 * Gets or sets a boolean indicating that the manager is recursive meaning that it can trigger action from children
                 */
                this.isRecursive = false;
                /**
                 * Gets or sets a boolean indicating if this ActionManager should be disposed once the last Mesh using it is disposed
                 */
                this.disposeWhenUnowned = true;
              }
              Object.defineProperty(AbstractActionManager, "HasTriggers", {
                /**
                 * Does exist one action manager with at least one trigger
                 **/
                get: function () {
                  for (var t in AbstractActionManager.Triggers) {
                    if (
                      Object.prototype.hasOwnProperty.call(
                        AbstractActionManager.Triggers,
                        t
                      )
                    ) {
                      return true;
                    }
                  }
                  return false;
                },
                enumerable: false,
                configurable: true,
              });
            };
          },
      };
    };
  }
);
