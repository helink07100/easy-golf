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
        ) => {
          __webpack_require__.r(__webpack_exports__);
          __webpack_require__.d(__webpack_exports__, {
            AbstractActionManager: () => AbstractActionManager,
          });
          var _Engines_constants__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__("../../../dev/core/src/Engines/constants.ts");

          var AbstractActionManager = /** @class */ (function () {
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
            Object.defineProperty(AbstractActionManager, "HasPickTriggers", {
              /**
               * Does exist one action manager with at least one pick trigger
               **/
              get: function () {
                for (var t in AbstractActionManager.Triggers) {
                  if (
                    Object.prototype.hasOwnProperty.call(
                      AbstractActionManager.Triggers,
                      t
                    )
                  ) {
                    var tAsInt = parseInt(t);
                    if (
                      tAsInt >=
                        _Engines_constants__WEBPACK_IMPORTED_MODULE_0__
                          .Constants.ACTION_OnPickTrigger &&
                      tAsInt <=
                        _Engines_constants__WEBPACK_IMPORTED_MODULE_0__
                          .Constants.ACTION_OnPickUpTrigger
                    ) {
                      return true;
                    }
                  }
                }
                return false;
              },
              enumerable: false,
              configurable: true,
            });
            /**
             * Does exist one action manager that handles actions of a given trigger
             * @param trigger defines the trigger to be tested
             * @returns a boolean indicating whether the trigger is handled by at least one action manager
             **/
            AbstractActionManager.HasSpecificTrigger = function (trigger) {
              for (var t in AbstractActionManager.Triggers) {
                if (
                  Object.prototype.hasOwnProperty.call(
                    AbstractActionManager.Triggers,
                    t
                  )
                ) {
                  var tAsInt = parseInt(t);
                  if (tAsInt === trigger) {
                    return true;
                  }
                }
              }
              return false;
            };
            /** Gets the list of active triggers */
            AbstractActionManager.Triggers = {};
            return AbstractActionManager;
          })();
        },
      };
    };
  }
);
