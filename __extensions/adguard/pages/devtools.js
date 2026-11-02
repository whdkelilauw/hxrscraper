(self["webpackChunkbrowser_extension"] = self["webpackChunkbrowser_extension"] || []).push([["pages/devtools"],{

/***/ "./node_modules/.pnpm/webextension-polyfill@0.12.0/node_modules/webextension-polyfill/dist/browser-polyfill.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/webextension-polyfill@0.12.0/node_modules/webextension-polyfill/dist/browser-polyfill.js ***!
  \*********************************************************************************************************************/
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var core_js_modules_web_self_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.self.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/web.self.js");
/* harmony import */ var core_js_modules_web_self_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_self_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
 //# sourceMappingURL=browser-polyfill.js.map



(function(global, factory) {
    if (typeof define === "function" && __webpack_require__.amdO) {
        define("webextension-polyfill", [
            "module"
        ], factory);
    } else if (typeof exports !== "undefined") {
        factory(module);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod);
        global.browser = mod.exports;
    }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : undefined, function(module1) {
    /* webextension-polyfill - v0.12.0 - Tue May 14 2024 18:01:29 */ /* -*- Mode: indent-tabs-mode: nil; js-indent-level: 2 -*- */ /* vim: set sts=2 sw=2 et tw=80: */ /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */ "use strict";
    if (!(globalThis.chrome && globalThis.chrome.runtime && globalThis.chrome.runtime.id)) {
        throw new Error("This script should only be loaded in a browser extension.");
    }
    if (!(globalThis.browser && globalThis.browser.runtime && globalThis.browser.runtime.id)) {
        const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received.";
        // Wrapping the bulk of this polyfill in a one-time-use function is a minor
        // optimization for Firefox. Since Spidermonkey does not fully parse the
        // contents of a function until the first time it's called, and since it will
        // never actually need to be called, this allows the polyfill to be included
        // in Firefox nearly for free.
        const wrapAPIs = (extensionAPIs)=>{
            // NOTE: apiMetadata is associated to the content of the api-metadata.json file
            // at build time by replacing the following "include" with the content of the
            // JSON file.
            const apiMetadata = {
                "alarms": {
                    "clear": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "clearAll": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "get": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "getAll": {
                        "minArgs": 0,
                        "maxArgs": 0
                    }
                },
                "bookmarks": {
                    "create": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "get": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getChildren": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getRecent": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getSubTree": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getTree": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "move": {
                        "minArgs": 2,
                        "maxArgs": 2
                    },
                    "remove": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removeTree": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "search": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "update": {
                        "minArgs": 2,
                        "maxArgs": 2
                    }
                },
                "browserAction": {
                    "disable": {
                        "minArgs": 0,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    },
                    "enable": {
                        "minArgs": 0,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    },
                    "getBadgeBackgroundColor": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getBadgeText": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getPopup": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getTitle": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "openPopup": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "setBadgeBackgroundColor": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    },
                    "setBadgeText": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    },
                    "setIcon": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "setPopup": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    },
                    "setTitle": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    }
                },
                "browsingData": {
                    "remove": {
                        "minArgs": 2,
                        "maxArgs": 2
                    },
                    "removeCache": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removeCookies": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removeDownloads": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removeFormData": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removeHistory": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removeLocalStorage": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removePasswords": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removePluginData": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "settings": {
                        "minArgs": 0,
                        "maxArgs": 0
                    }
                },
                "commands": {
                    "getAll": {
                        "minArgs": 0,
                        "maxArgs": 0
                    }
                },
                "contextMenus": {
                    "remove": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removeAll": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "update": {
                        "minArgs": 2,
                        "maxArgs": 2
                    }
                },
                "cookies": {
                    "get": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getAll": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getAllCookieStores": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "remove": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "set": {
                        "minArgs": 1,
                        "maxArgs": 1
                    }
                },
                "devtools": {
                    "inspectedWindow": {
                        "eval": {
                            "minArgs": 1,
                            "maxArgs": 2,
                            "singleCallbackArg": false
                        }
                    },
                    "panels": {
                        "create": {
                            "minArgs": 3,
                            "maxArgs": 3,
                            "singleCallbackArg": true
                        },
                        "elements": {
                            "createSidebarPane": {
                                "minArgs": 1,
                                "maxArgs": 1
                            }
                        }
                    }
                },
                "downloads": {
                    "cancel": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "download": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "erase": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getFileIcon": {
                        "minArgs": 1,
                        "maxArgs": 2
                    },
                    "open": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    },
                    "pause": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removeFile": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "resume": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "search": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "show": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    }
                },
                "extension": {
                    "isAllowedFileSchemeAccess": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "isAllowedIncognitoAccess": {
                        "minArgs": 0,
                        "maxArgs": 0
                    }
                },
                "history": {
                    "addUrl": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "deleteAll": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "deleteRange": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "deleteUrl": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getVisits": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "search": {
                        "minArgs": 1,
                        "maxArgs": 1
                    }
                },
                "i18n": {
                    "detectLanguage": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getAcceptLanguages": {
                        "minArgs": 0,
                        "maxArgs": 0
                    }
                },
                "identity": {
                    "launchWebAuthFlow": {
                        "minArgs": 1,
                        "maxArgs": 1
                    }
                },
                "idle": {
                    "queryState": {
                        "minArgs": 1,
                        "maxArgs": 1
                    }
                },
                "management": {
                    "get": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getAll": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "getSelf": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "setEnabled": {
                        "minArgs": 2,
                        "maxArgs": 2
                    },
                    "uninstallSelf": {
                        "minArgs": 0,
                        "maxArgs": 1
                    }
                },
                "notifications": {
                    "clear": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "create": {
                        "minArgs": 1,
                        "maxArgs": 2
                    },
                    "getAll": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "getPermissionLevel": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "update": {
                        "minArgs": 2,
                        "maxArgs": 2
                    }
                },
                "pageAction": {
                    "getPopup": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getTitle": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "hide": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    },
                    "setIcon": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "setPopup": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    },
                    "setTitle": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    },
                    "show": {
                        "minArgs": 1,
                        "maxArgs": 1,
                        "fallbackToNoCallback": true
                    }
                },
                "permissions": {
                    "contains": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getAll": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "remove": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "request": {
                        "minArgs": 1,
                        "maxArgs": 1
                    }
                },
                "runtime": {
                    "getBackgroundPage": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "getPlatformInfo": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "openOptionsPage": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "requestUpdateCheck": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "sendMessage": {
                        "minArgs": 1,
                        "maxArgs": 3
                    },
                    "sendNativeMessage": {
                        "minArgs": 2,
                        "maxArgs": 2
                    },
                    "setUninstallURL": {
                        "minArgs": 1,
                        "maxArgs": 1
                    }
                },
                "sessions": {
                    "getDevices": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "getRecentlyClosed": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "restore": {
                        "minArgs": 0,
                        "maxArgs": 1
                    }
                },
                "storage": {
                    "local": {
                        "clear": {
                            "minArgs": 0,
                            "maxArgs": 0
                        },
                        "get": {
                            "minArgs": 0,
                            "maxArgs": 1
                        },
                        "getBytesInUse": {
                            "minArgs": 0,
                            "maxArgs": 1
                        },
                        "remove": {
                            "minArgs": 1,
                            "maxArgs": 1
                        },
                        "set": {
                            "minArgs": 1,
                            "maxArgs": 1
                        }
                    },
                    "managed": {
                        "get": {
                            "minArgs": 0,
                            "maxArgs": 1
                        },
                        "getBytesInUse": {
                            "minArgs": 0,
                            "maxArgs": 1
                        }
                    },
                    "sync": {
                        "clear": {
                            "minArgs": 0,
                            "maxArgs": 0
                        },
                        "get": {
                            "minArgs": 0,
                            "maxArgs": 1
                        },
                        "getBytesInUse": {
                            "minArgs": 0,
                            "maxArgs": 1
                        },
                        "remove": {
                            "minArgs": 1,
                            "maxArgs": 1
                        },
                        "set": {
                            "minArgs": 1,
                            "maxArgs": 1
                        }
                    }
                },
                "tabs": {
                    "captureVisibleTab": {
                        "minArgs": 0,
                        "maxArgs": 2
                    },
                    "create": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "detectLanguage": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "discard": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "duplicate": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "executeScript": {
                        "minArgs": 1,
                        "maxArgs": 2
                    },
                    "get": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getCurrent": {
                        "minArgs": 0,
                        "maxArgs": 0
                    },
                    "getZoom": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "getZoomSettings": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "goBack": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "goForward": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "highlight": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "insertCSS": {
                        "minArgs": 1,
                        "maxArgs": 2
                    },
                    "move": {
                        "minArgs": 2,
                        "maxArgs": 2
                    },
                    "query": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "reload": {
                        "minArgs": 0,
                        "maxArgs": 2
                    },
                    "remove": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "removeCSS": {
                        "minArgs": 1,
                        "maxArgs": 2
                    },
                    "sendMessage": {
                        "minArgs": 2,
                        "maxArgs": 3
                    },
                    "setZoom": {
                        "minArgs": 1,
                        "maxArgs": 2
                    },
                    "setZoomSettings": {
                        "minArgs": 1,
                        "maxArgs": 2
                    },
                    "update": {
                        "minArgs": 1,
                        "maxArgs": 2
                    }
                },
                "topSites": {
                    "get": {
                        "minArgs": 0,
                        "maxArgs": 0
                    }
                },
                "webNavigation": {
                    "getAllFrames": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "getFrame": {
                        "minArgs": 1,
                        "maxArgs": 1
                    }
                },
                "webRequest": {
                    "handlerBehaviorChanged": {
                        "minArgs": 0,
                        "maxArgs": 0
                    }
                },
                "windows": {
                    "create": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "get": {
                        "minArgs": 1,
                        "maxArgs": 2
                    },
                    "getAll": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "getCurrent": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "getLastFocused": {
                        "minArgs": 0,
                        "maxArgs": 1
                    },
                    "remove": {
                        "minArgs": 1,
                        "maxArgs": 1
                    },
                    "update": {
                        "minArgs": 2,
                        "maxArgs": 2
                    }
                }
            };
            if (Object.keys(apiMetadata).length === 0) {
                throw new Error("api-metadata.json has not been included in browser-polyfill");
            }
            /**
       * A WeakMap subclass which creates and stores a value for any key which does
       * not exist when accessed, but behaves exactly as an ordinary WeakMap
       * otherwise.
       *
       * @param {function} createItem
       *        A function which will be called in order to create the value for any
       *        key which does not exist, the first time it is accessed. The
       *        function receives, as its only argument, the key being created.
       */ class DefaultWeakMap extends WeakMap {
                get(key) {
                    if (!this.has(key)) {
                        this.set(key, this.createItem(key));
                    }
                    return super.get(key);
                }
                constructor(createItem, items = undefined){
                    super(items);
                    this.createItem = createItem;
                }
            }
            /**
       * Returns true if the given object is an object with a `then` method, and can
       * therefore be assumed to behave as a Promise.
       *
       * @param {*} value The value to test.
       * @returns {boolean} True if the value is thenable.
       */ const isThenable = (value)=>{
                return value && typeof value === "object" && typeof value.then === "function";
            };
            /**
       * Creates and returns a function which, when called, will resolve or reject
       * the given promise based on how it is called:
       *
       * - If, when called, `chrome.runtime.lastError` contains a non-null object,
       *   the promise is rejected with that value.
       * - If the function is called with exactly one argument, the promise is
       *   resolved to that value.
       * - Otherwise, the promise is resolved to an array containing all of the
       *   function's arguments.
       *
       * @param {object} promise
       *        An object containing the resolution and rejection functions of a
       *        promise.
       * @param {function} promise.resolve
       *        The promise's resolution function.
       * @param {function} promise.reject
       *        The promise's rejection function.
       * @param {object} metadata
       *        Metadata about the wrapped method which has created the callback.
       * @param {boolean} metadata.singleCallbackArg
       *        Whether or not the promise is resolved with only the first
       *        argument of the callback, alternatively an array of all the
       *        callback arguments is resolved. By default, if the callback
       *        function is invoked with only a single argument, that will be
       *        resolved to the promise, while all arguments will be resolved as
       *        an array if multiple are given.
       *
       * @returns {function}
       *        The generated callback function.
       */ const makeCallback = (promise, metadata)=>{
                return (...callbackArgs)=>{
                    if (extensionAPIs.runtime.lastError) {
                        promise.reject(new Error(extensionAPIs.runtime.lastError.message));
                    } else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) {
                        promise.resolve(callbackArgs[0]);
                    } else {
                        promise.resolve(callbackArgs);
                    }
                };
            };
            const pluralizeArguments = (numArgs)=>numArgs == 1 ? "argument" : "arguments";
            /**
       * Creates a wrapper function for a method with the given name and metadata.
       *
       * @param {string} name
       *        The name of the method which is being wrapped.
       * @param {object} metadata
       *        Metadata about the method being wrapped.
       * @param {integer} metadata.minArgs
       *        The minimum number of arguments which must be passed to the
       *        function. If called with fewer than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {integer} metadata.maxArgs
       *        The maximum number of arguments which may be passed to the
       *        function. If called with more than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {boolean} metadata.singleCallbackArg
       *        Whether or not the promise is resolved with only the first
       *        argument of the callback, alternatively an array of all the
       *        callback arguments is resolved. By default, if the callback
       *        function is invoked with only a single argument, that will be
       *        resolved to the promise, while all arguments will be resolved as
       *        an array if multiple are given.
       *
       * @returns {function(object, ...*)}
       *       The generated wrapper function.
       */ const wrapAsyncFunction = (name, metadata)=>{
                return function asyncFunctionWrapper(target, ...args) {
                    if (args.length < metadata.minArgs) {
                        throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
                    }
                    if (args.length > metadata.maxArgs) {
                        throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
                    }
                    return new Promise((resolve, reject)=>{
                        if (metadata.fallbackToNoCallback) {
                            // This API method has currently no callback on Chrome, but it return a promise on Firefox,
                            // and so the polyfill will try to call it with a callback first, and it will fallback
                            // to not passing the callback if the first call fails.
                            try {
                                target[name](...args, makeCallback({
                                    resolve,
                                    reject
                                }, metadata));
                            } catch (cbError) {
                                console.warn(`${name} API method doesn't seem to support the callback parameter, ` + "falling back to call it without a callback: ", cbError);
                                target[name](...args);
                                // Update the API method metadata, so that the next API calls will not try to
                                // use the unsupported callback anymore.
                                metadata.fallbackToNoCallback = false;
                                metadata.noCallback = true;
                                resolve();
                            }
                        } else if (metadata.noCallback) {
                            target[name](...args);
                            resolve();
                        } else {
                            target[name](...args, makeCallback({
                                resolve,
                                reject
                            }, metadata));
                        }
                    });
                };
            };
            /**
       * Wraps an existing method of the target object, so that calls to it are
       * intercepted by the given wrapper function. The wrapper function receives,
       * as its first argument, the original `target` object, followed by each of
       * the arguments passed to the original method.
       *
       * @param {object} target
       *        The original target object that the wrapped method belongs to.
       * @param {function} method
       *        The method being wrapped. This is used as the target of the Proxy
       *        object which is created to wrap the method.
       * @param {function} wrapper
       *        The wrapper function which is called in place of a direct invocation
       *        of the wrapped method.
       *
       * @returns {Proxy<function>}
       *        A Proxy object for the given method, which invokes the given wrapper
       *        method in its place.
       */ const wrapMethod = (target, method, wrapper)=>{
                return new Proxy(method, {
                    apply (targetMethod, thisObj, args) {
                        return wrapper.call(thisObj, target, ...args);
                    }
                });
            };
            let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
            /**
       * Wraps an object in a Proxy which intercepts and wraps certain methods
       * based on the given `wrappers` and `metadata` objects.
       *
       * @param {object} target
       *        The target object to wrap.
       *
       * @param {object} [wrappers = {}]
       *        An object tree containing wrapper functions for special cases. Any
       *        function present in this object tree is called in place of the
       *        method in the same location in the `target` object tree. These
       *        wrapper methods are invoked as described in {@see wrapMethod}.
       *
       * @param {object} [metadata = {}]
       *        An object tree containing metadata used to automatically generate
       *        Promise-based wrapper functions for asynchronous. Any function in
       *        the `target` object tree which has a corresponding metadata object
       *        in the same location in the `metadata` tree is replaced with an
       *        automatically-generated wrapper function, as described in
       *        {@see wrapAsyncFunction}
       *
       * @returns {Proxy<object>}
       */ const wrapObject = (target, wrappers = {}, metadata = {})=>{
                let cache = Object.create(null);
                let handlers = {
                    has (proxyTarget, prop) {
                        return prop in target || prop in cache;
                    },
                    get (proxyTarget, prop, receiver) {
                        if (prop in cache) {
                            return cache[prop];
                        }
                        if (!(prop in target)) {
                            return undefined;
                        }
                        let value = target[prop];
                        if (typeof value === "function") {
                            // This is a method on the underlying object. Check if we need to do
                            // any wrapping.
                            if (typeof wrappers[prop] === "function") {
                                // We have a special-case wrapper for this method.
                                value = wrapMethod(target, target[prop], wrappers[prop]);
                            } else if (hasOwnProperty(metadata, prop)) {
                                // This is an async method that we have metadata for. Create a
                                // Promise wrapper for it.
                                let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                                value = wrapMethod(target, target[prop], wrapper);
                            } else {
                                // This is a method that we don't know or care about. Return the
                                // original method, bound to the underlying object.
                                value = value.bind(target);
                            }
                        } else if (typeof value === "object" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) {
                            // This is an object that we need to do some wrapping for the children
                            // of. Create a sub-object wrapper for it with the appropriate child
                            // metadata.
                            value = wrapObject(value, wrappers[prop], metadata[prop]);
                        } else if (hasOwnProperty(metadata, "*")) {
                            // Wrap all properties in * namespace.
                            value = wrapObject(value, wrappers[prop], metadata["*"]);
                        } else {
                            // We don't need to do any wrapping for this property,
                            // so just forward all access to the underlying object.
                            Object.defineProperty(cache, prop, {
                                configurable: true,
                                enumerable: true,
                                get () {
                                    return target[prop];
                                },
                                set (value) {
                                    target[prop] = value;
                                }
                            });
                            return value;
                        }
                        cache[prop] = value;
                        return value;
                    },
                    set (proxyTarget, prop, value, receiver) {
                        if (prop in cache) {
                            cache[prop] = value;
                        } else {
                            target[prop] = value;
                        }
                        return true;
                    },
                    defineProperty (proxyTarget, prop, desc) {
                        return Reflect.defineProperty(cache, prop, desc);
                    },
                    deleteProperty (proxyTarget, prop) {
                        return Reflect.deleteProperty(cache, prop);
                    }
                };
                // Per contract of the Proxy API, the "get" proxy handler must return the
                // original value of the target if that value is declared read-only and
                // non-configurable. For this reason, we create an object with the
                // prototype set to `target` instead of using `target` directly.
                // Otherwise we cannot return a custom object for APIs that
                // are declared read-only and non-configurable, such as `chrome.devtools`.
                //
                // The proxy handlers themselves will still use the original `target`
                // instead of the `proxyTarget`, so that the methods and properties are
                // dereferenced via the original targets.
                let proxyTarget = Object.create(target);
                return new Proxy(proxyTarget, handlers);
            };
            /**
       * Creates a set of wrapper functions for an event object, which handles
       * wrapping of listener functions that those messages are passed.
       *
       * A single wrapper is created for each listener function, and stored in a
       * map. Subsequent calls to `addListener`, `hasListener`, or `removeListener`
       * retrieve the original wrapper, so that  attempts to remove a
       * previously-added listener work as expected.
       *
       * @param {DefaultWeakMap<function, function>} wrapperMap
       *        A DefaultWeakMap object which will create the appropriate wrapper
       *        for a given listener function when one does not exist, and retrieve
       *        an existing one when it does.
       *
       * @returns {object}
       */ const wrapEvent = (wrapperMap)=>({
                    addListener (target, listener, ...args) {
                        target.addListener(wrapperMap.get(listener), ...args);
                    },
                    hasListener (target, listener) {
                        return target.hasListener(wrapperMap.get(listener));
                    },
                    removeListener (target, listener) {
                        target.removeListener(wrapperMap.get(listener));
                    }
                });
            const onRequestFinishedWrappers = new DefaultWeakMap((listener)=>{
                if (typeof listener !== "function") {
                    return listener;
                }
                /**
         * Wraps an onRequestFinished listener function so that it will return a
         * `getContent()` property which returns a `Promise` rather than using a
         * callback API.
         *
         * @param {object} req
         *        The HAR entry object representing the network request.
         */ return function onRequestFinished(req) {
                    const wrappedReq = wrapObject(req, {} /* wrappers */ , {
                        getContent: {
                            minArgs: 0,
                            maxArgs: 0
                        }
                    });
                    listener(wrappedReq);
                };
            });
            const onMessageWrappers = new DefaultWeakMap((listener)=>{
                if (typeof listener !== "function") {
                    return listener;
                }
                /**
         * Wraps a message listener function so that it may send responses based on
         * its return value, rather than by returning a sentinel value and calling a
         * callback. If the listener function returns a Promise, the response is
         * sent when the promise either resolves or rejects.
         *
         * @param {*} message
         *        The message sent by the other end of the channel.
         * @param {object} sender
         *        Details about the sender of the message.
         * @param {function(*)} sendResponse
         *        A callback which, when called with an arbitrary argument, sends
         *        that value as a response.
         * @returns {boolean}
         *        True if the wrapped listener returned a Promise, which will later
         *        yield a response. False otherwise.
         */ return function onMessage(message, sender, sendResponse) {
                    let didCallSendResponse = false;
                    let wrappedSendResponse;
                    let sendResponsePromise = new Promise((resolve)=>{
                        wrappedSendResponse = function(response) {
                            didCallSendResponse = true;
                            resolve(response);
                        };
                    });
                    let result;
                    try {
                        result = listener(message, sender, wrappedSendResponse);
                    } catch (err) {
                        result = Promise.reject(err);
                    }
                    const isResultThenable = result !== true && isThenable(result);
                    // If the listener didn't returned true or a Promise, or called
                    // wrappedSendResponse synchronously, we can exit earlier
                    // because there will be no response sent from this listener.
                    if (result !== true && !isResultThenable && !didCallSendResponse) {
                        return false;
                    }
                    // A small helper to send the message if the promise resolves
                    // and an error if the promise rejects (a wrapped sendMessage has
                    // to translate the message into a resolved promise or a rejected
                    // promise).
                    const sendPromisedResult = (promise)=>{
                        promise.then((msg)=>{
                            // send the message value.
                            sendResponse(msg);
                        }, (error)=>{
                            // Send a JSON representation of the error if the rejected value
                            // is an instance of error, or the object itself otherwise.
                            let message;
                            if (error && (error instanceof Error || typeof error.message === "string")) {
                                message = error.message;
                            } else {
                                message = "An unexpected error occurred";
                            }
                            sendResponse({
                                __mozWebExtensionPolyfillReject__: true,
                                message
                            });
                        }).catch((err)=>{
                            // Print an error on the console if unable to send the response.
                            console.error("Failed to send onMessage rejected reply", err);
                        });
                    };
                    // If the listener returned a Promise, send the resolved value as a
                    // result, otherwise wait the promise related to the wrappedSendResponse
                    // callback to resolve and send it as a response.
                    if (isResultThenable) {
                        sendPromisedResult(result);
                    } else {
                        sendPromisedResult(sendResponsePromise);
                    }
                    // Let Chrome know that the listener is replying.
                    return true;
                };
            });
            const wrappedSendMessageCallback = ({ reject, resolve }, reply)=>{
                if (extensionAPIs.runtime.lastError) {
                    // Detect when none of the listeners replied to the sendMessage call and resolve
                    // the promise to undefined as in Firefox.
                    // See https://github.com/mozilla/webextension-polyfill/issues/130
                    if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) {
                        resolve();
                    } else {
                        reject(new Error(extensionAPIs.runtime.lastError.message));
                    }
                } else if (reply && reply.__mozWebExtensionPolyfillReject__) {
                    // Convert back the JSON representation of the error into
                    // an Error instance.
                    reject(new Error(reply.message));
                } else {
                    resolve(reply);
                }
            };
            const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args)=>{
                if (args.length < metadata.minArgs) {
                    throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
                }
                if (args.length > metadata.maxArgs) {
                    throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
                }
                return new Promise((resolve, reject)=>{
                    const wrappedCb = wrappedSendMessageCallback.bind(null, {
                        resolve,
                        reject
                    });
                    args.push(wrappedCb);
                    apiNamespaceObj.sendMessage(...args);
                });
            };
            const staticWrappers = {
                devtools: {
                    network: {
                        onRequestFinished: wrapEvent(onRequestFinishedWrappers)
                    }
                },
                runtime: {
                    onMessage: wrapEvent(onMessageWrappers),
                    onMessageExternal: wrapEvent(onMessageWrappers),
                    sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
                        minArgs: 1,
                        maxArgs: 3
                    })
                },
                tabs: {
                    sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
                        minArgs: 2,
                        maxArgs: 3
                    })
                }
            };
            const settingMetadata = {
                clear: {
                    minArgs: 1,
                    maxArgs: 1
                },
                get: {
                    minArgs: 1,
                    maxArgs: 1
                },
                set: {
                    minArgs: 1,
                    maxArgs: 1
                }
            };
            apiMetadata.privacy = {
                network: {
                    "*": settingMetadata
                },
                services: {
                    "*": settingMetadata
                },
                websites: {
                    "*": settingMetadata
                }
            };
            return wrapObject(extensionAPIs, staticWrappers, apiMetadata);
        };
        // The build process adds a UMD wrapper around this file, which makes the
        // `module` variable available.
        module1.exports = wrapAPIs(chrome);
    } else {
        module1.exports = globalThis.browser;
    }
});


/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.array.push.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.array.push.js ***!
  \*****************************************************************************************/
/***/ (() => {

throw new Error("Module parse failed: 'import' and 'export' may appear only with 'sourceType: module' (2:0)\nFile was processed with these loaders:\n * ./node_modules/.pnpm/swc-loader@0.2.3_@swc+core@_2ef6ed611e9853e5d172f6e6729aa225/node_modules/swc-loader/src/index.js\n * ./node_modules/.pnpm/source-map-loader@3.0.2_webpack@5.97.1_@swc+core@1.11.21_/node_modules/source-map-loader/dist/cjs.js\nYou may need an additional loader to handle the result of these loaders.\n| 'use strict';\n> import \"core-js/modules/es.array.push.js\";\n| import \"core-js/modules/es.error.cause.js\";\n| var $ = require('../internals/export');");

/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.error.cause.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.error.cause.js ***!
  \******************************************************************************************/
/***/ (() => {

throw new Error("Module parse failed: 'import' and 'export' may appear only with 'sourceType: module' (2:0)\nFile was processed with these loaders:\n * ./node_modules/.pnpm/swc-loader@0.2.3_@swc+core@_2ef6ed611e9853e5d172f6e6729aa225/node_modules/swc-loader/src/index.js\n * ./node_modules/.pnpm/source-map-loader@3.0.2_webpack@5.97.1_@swc+core@1.11.21_/node_modules/source-map-loader/dist/cjs.js\nYou may need an additional loader to handle the result of these loaders.\n| 'use strict';\n> import \"core-js/modules/es.error.cause.js\";\n| /* eslint-disable no-unused-vars -- required for functions `.length` */ var $ = require('../internals/export');\n| var globalThis = require('../internals/global-this');");

/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.reflect.to-string-tag.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.reflect.to-string-tag.js ***!
  \****************************************************************************************************/
/***/ (() => {

throw new Error("Module parse failed: 'import' and 'export' may appear only with 'sourceType: module' (2:0)\nFile was processed with these loaders:\n * ./node_modules/.pnpm/swc-loader@0.2.3_@swc+core@_2ef6ed611e9853e5d172f6e6729aa225/node_modules/swc-loader/src/index.js\n * ./node_modules/.pnpm/source-map-loader@3.0.2_webpack@5.97.1_@swc+core@1.11.21_/node_modules/source-map-loader/dist/cjs.js\nYou may need an additional loader to handle the result of these loaders.\n| 'use strict';\n> import \"core-js/modules/es.reflect.to-string-tag.js\";\n| var $ = require('../internals/export');\n| var globalThis = require('../internals/global-this');");

/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/web.self.js":
/*!************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/web.self.js ***!
  \************************************************************************************/
/***/ (() => {

throw new Error("Module parse failed: 'import' and 'export' may appear only with 'sourceType: module' (2:0)\nFile was processed with these loaders:\n * ./node_modules/.pnpm/swc-loader@0.2.3_@swc+core@_2ef6ed611e9853e5d172f6e6729aa225/node_modules/swc-loader/src/index.js\n * ./node_modules/.pnpm/source-map-loader@3.0.2_webpack@5.97.1_@swc+core@1.11.21_/node_modules/source-map-loader/dist/cjs.js\nYou may need an additional loader to handle the result of these loaders.\n| 'use strict';\n> import \"core-js/modules/es.error.cause.js\";\n| import \"core-js/modules/web.self.js\";\n| var $ = require('../internals/export');");

/***/ }),

/***/ "./Extension/pages/devtools/devtools.js":
/*!**********************************************!*\
  !*** ./Extension/pages/devtools/devtools.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webextension-polyfill */ "./node_modules/.pnpm/webextension-polyfill@0.12.0/node_modules/webextension-polyfill/dist/browser-polyfill.js");
/**
 * Copyright (c) 2015-2025 Adguard Software Ltd.
 *
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */ 
const createSidebarPane = async ()=>{
    // TODO: Try to move it to first cell
    const sidebar = await webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__["default"].devtools.panels.elements.createSidebarPane('AdGuard');
    sidebar.setHeight('400px');
    sidebar.setPage('../pages/devtools-elements-sidebar.html');
};
createSidebarPane();


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./Extension/pages/devtools/devtools.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDMEcsUUFBUSxDQUFDYSxNQUFNLENBQUNDLFFBQVEsQ0FBQ0gsaUJBQWlCLENBQUM7SUFFekVDLFFBQVFHLFNBQVMsQ0FBQztJQUNsQkgsUUFBUUksT0FBTyxDQUFDO0FBQ3BCO0FBRUFMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vYnJvd3Nlci1wb2x5ZmlsbC5qcyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uL0V4dGVuc2lvbi9wYWdlcy9kZXZ0b29scy9kZXZ0b29scy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiB3ZWJleHRlbnNpb24tcG9seWZpbGwgLSB2MC4xMi4wIC0gVHVlIE1heSAxNCAyMDI0IDE4OjAxOjI5ICovXG4vKiAtKi0gTW9kZTogaW5kZW50LXRhYnMtbW9kZTogbmlsOyBqcy1pbmRlbnQtbGV2ZWw6IDIgLSotICovXG4vKiB2aW06IHNldCBzdHM9MiBzdz0yIGV0IHR3PTgwOiAqL1xuLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cblwidXNlIHN0cmljdFwiO1xuXG5pZiAoIShnbG9iYWxUaGlzLmNocm9tZSAmJiBnbG9iYWxUaGlzLmNocm9tZS5ydW50aW1lICYmIGdsb2JhbFRoaXMuY2hyb21lLnJ1bnRpbWUuaWQpKSB7XG4gIHRocm93IG5ldyBFcnJvcihcIlRoaXMgc2NyaXB0IHNob3VsZCBvbmx5IGJlIGxvYWRlZCBpbiBhIGJyb3dzZXIgZXh0ZW5zaW9uLlwiKTtcbn1cblxuaWYgKCEoZ2xvYmFsVGhpcy5icm93c2VyICYmIGdsb2JhbFRoaXMuYnJvd3Nlci5ydW50aW1lICYmIGdsb2JhbFRoaXMuYnJvd3Nlci5ydW50aW1lLmlkKSkge1xuICBjb25zdCBDSFJPTUVfU0VORF9NRVNTQUdFX0NBTExCQUNLX05PX1JFU1BPTlNFX01FU1NBR0UgPSBcIlRoZSBtZXNzYWdlIHBvcnQgY2xvc2VkIGJlZm9yZSBhIHJlc3BvbnNlIHdhcyByZWNlaXZlZC5cIjtcblxuICAvLyBXcmFwcGluZyB0aGUgYnVsayBvZiB0aGlzIHBvbHlmaWxsIGluIGEgb25lLXRpbWUtdXNlIGZ1bmN0aW9uIGlzIGEgbWlub3JcbiAgLy8gb3B0aW1pemF0aW9uIGZvciBGaXJlZm94LiBTaW5jZSBTcGlkZXJtb25rZXkgZG9lcyBub3QgZnVsbHkgcGFyc2UgdGhlXG4gIC8vIGNvbnRlbnRzIG9mIGEgZnVuY3Rpb24gdW50aWwgdGhlIGZpcnN0IHRpbWUgaXQncyBjYWxsZWQsIGFuZCBzaW5jZSBpdCB3aWxsXG4gIC8vIG5ldmVyIGFjdHVhbGx5IG5lZWQgdG8gYmUgY2FsbGVkLCB0aGlzIGFsbG93cyB0aGUgcG9seWZpbGwgdG8gYmUgaW5jbHVkZWRcbiAgLy8gaW4gRmlyZWZveCBuZWFybHkgZm9yIGZyZWUuXG4gIGNvbnN0IHdyYXBBUElzID0gZXh0ZW5zaW9uQVBJcyA9PiB7XG4gICAgLy8gTk9URTogYXBpTWV0YWRhdGEgaXMgYXNzb2NpYXRlZCB0byB0aGUgY29udGVudCBvZiB0aGUgYXBpLW1ldGFkYXRhLmpzb24gZmlsZVxuICAgIC8vIGF0IGJ1aWxkIHRpbWUgYnkgcmVwbGFjaW5nIHRoZSBmb2xsb3dpbmcgXCJpbmNsdWRlXCIgd2l0aCB0aGUgY29udGVudCBvZiB0aGVcbiAgICAvLyBKU09OIGZpbGUuXG4gICAgY29uc3QgYXBpTWV0YWRhdGEgPSB7XG4gICAgICBcImFsYXJtc1wiOiB7XG4gICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiY2xlYXJBbGxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiYm9va21hcmtzXCI6IHtcbiAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldENoaWxkcmVuXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFJlY2VudFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRTdWJUcmVlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFRyZWVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwibW92ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlVHJlZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZWFyY2hcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJicm93c2VyQWN0aW9uXCI6IHtcbiAgICAgICAgXCJkaXNhYmxlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJlbmFibGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcImdldEJhZGdlQmFja2dyb3VuZENvbG9yXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEJhZGdlVGV4dFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRQb3B1cFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRUaXRsZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJvcGVuUG9wdXBcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0QmFkZ2VCYWNrZ3JvdW5kQ29sb3JcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcInNldEJhZGdlVGV4dFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0SWNvblwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRQb3B1cFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0VGl0bGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJicm93c2luZ0RhdGFcIjoge1xuICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVDYWNoZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVDb29raWVzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZURvd25sb2Fkc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVGb3JtRGF0YVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVIaXN0b3J5XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUxvY2FsU3RvcmFnZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVQYXNzd29yZHNcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlUGx1Z2luRGF0YVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXR0aW5nc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiY29tbWFuZHNcIjoge1xuICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiY29udGV4dE1lbnVzXCI6IHtcbiAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlQWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiY29va2llc1wiOiB7XG4gICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRBbGxDb29raWVTdG9yZXNcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInNldFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiZGV2dG9vbHNcIjoge1xuICAgICAgICBcImluc3BlY3RlZFdpbmRvd1wiOiB7XG4gICAgICAgICAgXCJldmFsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDIsXG4gICAgICAgICAgICBcInNpbmdsZUNhbGxiYWNrQXJnXCI6IGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInBhbmVsc1wiOiB7XG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDMsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMyxcbiAgICAgICAgICAgIFwic2luZ2xlQ2FsbGJhY2tBcmdcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJlbGVtZW50c1wiOiB7XG4gICAgICAgICAgICBcImNyZWF0ZVNpZGViYXJQYW5lXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJkb3dubG9hZHNcIjoge1xuICAgICAgICBcImNhbmNlbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJkb3dubG9hZFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJlcmFzZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRGaWxlSWNvblwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJvcGVuXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJwYXVzZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVGaWxlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlc3VtZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZWFyY2hcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwic2hvd1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImV4dGVuc2lvblwiOiB7XG4gICAgICAgIFwiaXNBbGxvd2VkRmlsZVNjaGVtZUFjY2Vzc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJpc0FsbG93ZWRJbmNvZ25pdG9BY2Nlc3NcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImhpc3RvcnlcIjoge1xuICAgICAgICBcImFkZFVybFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJkZWxldGVBbGxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVsZXRlUmFuZ2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVsZXRlVXJsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFZpc2l0c1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZWFyY2hcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImkxOG5cIjoge1xuICAgICAgICBcImRldGVjdExhbmd1YWdlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEFjY2VwdExhbmd1YWdlc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpdHlcIjoge1xuICAgICAgICBcImxhdW5jaFdlYkF1dGhGbG93XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJpZGxlXCI6IHtcbiAgICAgICAgXCJxdWVyeVN0YXRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJtYW5hZ2VtZW50XCI6IHtcbiAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcImdldFNlbGZcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0RW5hYmxlZFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJ1bmluc3RhbGxTZWxmXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJub3RpZmljYXRpb25zXCI6IHtcbiAgICAgICAgXCJjbGVhclwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcImdldFBlcm1pc3Npb25MZXZlbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInBhZ2VBY3Rpb25cIjoge1xuICAgICAgICBcImdldFBvcHVwXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFRpdGxlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImhpZGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcInNldEljb25cIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0UG9wdXBcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcInNldFRpdGxlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJzaG93XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicGVybWlzc2lvbnNcIjoge1xuICAgICAgICBcImNvbnRhaW5zXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVxdWVzdFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicnVudGltZVwiOiB7XG4gICAgICAgIFwiZ2V0QmFja2dyb3VuZFBhZ2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0UGxhdGZvcm1JbmZvXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcIm9wZW5PcHRpb25zUGFnZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZXF1ZXN0VXBkYXRlQ2hlY2tcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwic2VuZE1lc3NhZ2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAzXG4gICAgICAgIH0sXG4gICAgICAgIFwic2VuZE5hdGl2ZU1lc3NhZ2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0VW5pbnN0YWxsVVJMXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJzZXNzaW9uc1wiOiB7XG4gICAgICAgIFwiZ2V0RGV2aWNlc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRSZWNlbnRseUNsb3NlZFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZXN0b3JlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJzdG9yYWdlXCI6IHtcbiAgICAgICAgXCJsb2NhbFwiOiB7XG4gICAgICAgICAgXCJjbGVhclwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJtYW5hZ2VkXCI6IHtcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJzeW5jXCI6IHtcbiAgICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Qnl0ZXNJblVzZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ0YWJzXCI6IHtcbiAgICAgICAgXCJjYXB0dXJlVmlzaWJsZVRhYlwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGV0ZWN0TGFuZ3VhZ2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGlzY2FyZFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJkdXBsaWNhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZXhlY3V0ZVNjcmlwdFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0Q3VycmVudFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRab29tXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFpvb21TZXR0aW5nc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnb0JhY2tcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ29Gb3J3YXJkXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImhpZ2hsaWdodFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJpbnNlcnRDU1NcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwibW92ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJxdWVyeVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZWxvYWRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUNTU1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZW5kTWVzc2FnZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDNcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRab29tXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInNldFpvb21TZXR0aW5nc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInRvcFNpdGVzXCI6IHtcbiAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcIndlYk5hdmlnYXRpb25cIjoge1xuICAgICAgICBcImdldEFsbEZyYW1lc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRGcmFtZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwid2ViUmVxdWVzdFwiOiB7XG4gICAgICAgIFwiaGFuZGxlckJlaGF2aW9yQ2hhbmdlZFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwid2luZG93c1wiOiB7XG4gICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0Q3VycmVudFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRMYXN0Rm9jdXNlZFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChPYmplY3Qua2V5cyhhcGlNZXRhZGF0YSkubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJhcGktbWV0YWRhdGEuanNvbiBoYXMgbm90IGJlZW4gaW5jbHVkZWQgaW4gYnJvd3Nlci1wb2x5ZmlsbFwiKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIFdlYWtNYXAgc3ViY2xhc3Mgd2hpY2ggY3JlYXRlcyBhbmQgc3RvcmVzIGEgdmFsdWUgZm9yIGFueSBrZXkgd2hpY2ggZG9lc1xuICAgICAqIG5vdCBleGlzdCB3aGVuIGFjY2Vzc2VkLCBidXQgYmVoYXZlcyBleGFjdGx5IGFzIGFuIG9yZGluYXJ5IFdlYWtNYXBcbiAgICAgKiBvdGhlcndpc2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjcmVhdGVJdGVtXG4gICAgICogICAgICAgIEEgZnVuY3Rpb24gd2hpY2ggd2lsbCBiZSBjYWxsZWQgaW4gb3JkZXIgdG8gY3JlYXRlIHRoZSB2YWx1ZSBmb3IgYW55XG4gICAgICogICAgICAgIGtleSB3aGljaCBkb2VzIG5vdCBleGlzdCwgdGhlIGZpcnN0IHRpbWUgaXQgaXMgYWNjZXNzZWQuIFRoZVxuICAgICAqICAgICAgICBmdW5jdGlvbiByZWNlaXZlcywgYXMgaXRzIG9ubHkgYXJndW1lbnQsIHRoZSBrZXkgYmVpbmcgY3JlYXRlZC5cbiAgICAgKi9cbiAgICBjbGFzcyBEZWZhdWx0V2Vha01hcCBleHRlbmRzIFdlYWtNYXAge1xuICAgICAgY29uc3RydWN0b3IoY3JlYXRlSXRlbSwgaXRlbXMgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgc3VwZXIoaXRlbXMpO1xuICAgICAgICB0aGlzLmNyZWF0ZUl0ZW0gPSBjcmVhdGVJdGVtO1xuICAgICAgfVxuXG4gICAgICBnZXQoa2V5KSB7XG4gICAgICAgIGlmICghdGhpcy5oYXMoa2V5KSkge1xuICAgICAgICAgIHRoaXMuc2V0KGtleSwgdGhpcy5jcmVhdGVJdGVtKGtleSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1cGVyLmdldChrZXkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gb2JqZWN0IGlzIGFuIG9iamVjdCB3aXRoIGEgYHRoZW5gIG1ldGhvZCwgYW5kIGNhblxuICAgICAqIHRoZXJlZm9yZSBiZSBhc3N1bWVkIHRvIGJlaGF2ZSBhcyBhIFByb21pc2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0LlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB0aGVuYWJsZS5cbiAgICAgKi9cbiAgICBjb25zdCBpc1RoZW5hYmxlID0gdmFsdWUgPT4ge1xuICAgICAgcmV0dXJuIHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgdmFsdWUudGhlbiA9PT0gXCJmdW5jdGlvblwiO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuZCByZXR1cm5zIGEgZnVuY3Rpb24gd2hpY2gsIHdoZW4gY2FsbGVkLCB3aWxsIHJlc29sdmUgb3IgcmVqZWN0XG4gICAgICogdGhlIGdpdmVuIHByb21pc2UgYmFzZWQgb24gaG93IGl0IGlzIGNhbGxlZDpcbiAgICAgKlxuICAgICAqIC0gSWYsIHdoZW4gY2FsbGVkLCBgY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yYCBjb250YWlucyBhIG5vbi1udWxsIG9iamVjdCxcbiAgICAgKiAgIHRoZSBwcm9taXNlIGlzIHJlamVjdGVkIHdpdGggdGhhdCB2YWx1ZS5cbiAgICAgKiAtIElmIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQgd2l0aCBleGFjdGx5IG9uZSBhcmd1bWVudCwgdGhlIHByb21pc2UgaXNcbiAgICAgKiAgIHJlc29sdmVkIHRvIHRoYXQgdmFsdWUuXG4gICAgICogLSBPdGhlcndpc2UsIHRoZSBwcm9taXNlIGlzIHJlc29sdmVkIHRvIGFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIG9mIHRoZVxuICAgICAqICAgZnVuY3Rpb24ncyBhcmd1bWVudHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcHJvbWlzZVxuICAgICAqICAgICAgICBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgcmVzb2x1dGlvbiBhbmQgcmVqZWN0aW9uIGZ1bmN0aW9ucyBvZiBhXG4gICAgICogICAgICAgIHByb21pc2UuXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gcHJvbWlzZS5yZXNvbHZlXG4gICAgICogICAgICAgIFRoZSBwcm9taXNlJ3MgcmVzb2x1dGlvbiBmdW5jdGlvbi5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBwcm9taXNlLnJlamVjdFxuICAgICAqICAgICAgICBUaGUgcHJvbWlzZSdzIHJlamVjdGlvbiBmdW5jdGlvbi5cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbWV0YWRhdGFcbiAgICAgKiAgICAgICAgTWV0YWRhdGEgYWJvdXQgdGhlIHdyYXBwZWQgbWV0aG9kIHdoaWNoIGhhcyBjcmVhdGVkIHRoZSBjYWxsYmFjay5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IG1ldGFkYXRhLnNpbmdsZUNhbGxiYWNrQXJnXG4gICAgICogICAgICAgIFdoZXRoZXIgb3Igbm90IHRoZSBwcm9taXNlIGlzIHJlc29sdmVkIHdpdGggb25seSB0aGUgZmlyc3RcbiAgICAgKiAgICAgICAgYXJndW1lbnQgb2YgdGhlIGNhbGxiYWNrLCBhbHRlcm5hdGl2ZWx5IGFuIGFycmF5IG9mIGFsbCB0aGVcbiAgICAgKiAgICAgICAgY2FsbGJhY2sgYXJndW1lbnRzIGlzIHJlc29sdmVkLiBCeSBkZWZhdWx0LCBpZiB0aGUgY2FsbGJhY2tcbiAgICAgKiAgICAgICAgZnVuY3Rpb24gaXMgaW52b2tlZCB3aXRoIG9ubHkgYSBzaW5nbGUgYXJndW1lbnQsIHRoYXQgd2lsbCBiZVxuICAgICAqICAgICAgICByZXNvbHZlZCB0byB0aGUgcHJvbWlzZSwgd2hpbGUgYWxsIGFyZ3VtZW50cyB3aWxsIGJlIHJlc29sdmVkIGFzXG4gICAgICogICAgICAgIGFuIGFycmF5IGlmIG11bHRpcGxlIGFyZSBnaXZlbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtmdW5jdGlvbn1cbiAgICAgKiAgICAgICAgVGhlIGdlbmVyYXRlZCBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICBjb25zdCBtYWtlQ2FsbGJhY2sgPSAocHJvbWlzZSwgbWV0YWRhdGEpID0+IHtcbiAgICAgIHJldHVybiAoLi4uY2FsbGJhY2tBcmdzKSA9PiB7XG4gICAgICAgIGlmIChleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yKSB7XG4gICAgICAgICAgcHJvbWlzZS5yZWplY3QobmV3IEVycm9yKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IubWVzc2FnZSkpO1xuICAgICAgICB9IGVsc2UgaWYgKG1ldGFkYXRhLnNpbmdsZUNhbGxiYWNrQXJnIHx8XG4gICAgICAgICAgICAgICAgICAgKGNhbGxiYWNrQXJncy5sZW5ndGggPD0gMSAmJiBtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZyAhPT0gZmFsc2UpKSB7XG4gICAgICAgICAgcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrQXJnc1swXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrQXJncyk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfTtcblxuICAgIGNvbnN0IHBsdXJhbGl6ZUFyZ3VtZW50cyA9IChudW1BcmdzKSA9PiBudW1BcmdzID09IDEgPyBcImFyZ3VtZW50XCIgOiBcImFyZ3VtZW50c1wiO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHdyYXBwZXIgZnVuY3Rpb24gZm9yIGEgbWV0aG9kIHdpdGggdGhlIGdpdmVuIG5hbWUgYW5kIG1ldGFkYXRhLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiAgICAgICAgVGhlIG5hbWUgb2YgdGhlIG1ldGhvZCB3aGljaCBpcyBiZWluZyB3cmFwcGVkLlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBtZXRhZGF0YVxuICAgICAqICAgICAgICBNZXRhZGF0YSBhYm91dCB0aGUgbWV0aG9kIGJlaW5nIHdyYXBwZWQuXG4gICAgICogQHBhcmFtIHtpbnRlZ2VyfSBtZXRhZGF0YS5taW5BcmdzXG4gICAgICogICAgICAgIFRoZSBtaW5pbXVtIG51bWJlciBvZiBhcmd1bWVudHMgd2hpY2ggbXVzdCBiZSBwYXNzZWQgdG8gdGhlXG4gICAgICogICAgICAgIGZ1bmN0aW9uLiBJZiBjYWxsZWQgd2l0aCBmZXdlciB0aGFuIHRoaXMgbnVtYmVyIG9mIGFyZ3VtZW50cywgdGhlXG4gICAgICogICAgICAgIHdyYXBwZXIgd2lsbCByYWlzZSBhbiBleGNlcHRpb24uXG4gICAgICogQHBhcmFtIHtpbnRlZ2VyfSBtZXRhZGF0YS5tYXhBcmdzXG4gICAgICogICAgICAgIFRoZSBtYXhpbXVtIG51bWJlciBvZiBhcmd1bWVudHMgd2hpY2ggbWF5IGJlIHBhc3NlZCB0byB0aGVcbiAgICAgKiAgICAgICAgZnVuY3Rpb24uIElmIGNhbGxlZCB3aXRoIG1vcmUgdGhhbiB0aGlzIG51bWJlciBvZiBhcmd1bWVudHMsIHRoZVxuICAgICAqICAgICAgICB3cmFwcGVyIHdpbGwgcmFpc2UgYW4gZXhjZXB0aW9uLlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmdcbiAgICAgKiAgICAgICAgV2hldGhlciBvciBub3QgdGhlIHByb21pc2UgaXMgcmVzb2x2ZWQgd2l0aCBvbmx5IHRoZSBmaXJzdFxuICAgICAqICAgICAgICBhcmd1bWVudCBvZiB0aGUgY2FsbGJhY2ssIGFsdGVybmF0aXZlbHkgYW4gYXJyYXkgb2YgYWxsIHRoZVxuICAgICAqICAgICAgICBjYWxsYmFjayBhcmd1bWVudHMgaXMgcmVzb2x2ZWQuIEJ5IGRlZmF1bHQsIGlmIHRoZSBjYWxsYmFja1xuICAgICAqICAgICAgICBmdW5jdGlvbiBpcyBpbnZva2VkIHdpdGggb25seSBhIHNpbmdsZSBhcmd1bWVudCwgdGhhdCB3aWxsIGJlXG4gICAgICogICAgICAgIHJlc29sdmVkIHRvIHRoZSBwcm9taXNlLCB3aGlsZSBhbGwgYXJndW1lbnRzIHdpbGwgYmUgcmVzb2x2ZWQgYXNcbiAgICAgKiAgICAgICAgYW4gYXJyYXkgaWYgbXVsdGlwbGUgYXJlIGdpdmVuLlxuICAgICAqXG4gICAgICogQHJldHVybnMge2Z1bmN0aW9uKG9iamVjdCwgLi4uKil9XG4gICAgICogICAgICAgVGhlIGdlbmVyYXRlZCB3cmFwcGVyIGZ1bmN0aW9uLlxuICAgICAqL1xuICAgIGNvbnN0IHdyYXBBc3luY0Z1bmN0aW9uID0gKG5hbWUsIG1ldGFkYXRhKSA9PiB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gYXN5bmNGdW5jdGlvbldyYXBwZXIodGFyZ2V0LCAuLi5hcmdzKSB7XG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA8IG1ldGFkYXRhLm1pbkFyZ3MpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IGxlYXN0ICR7bWV0YWRhdGEubWluQXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWluQXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gbWV0YWRhdGEubWF4QXJncykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYXQgbW9zdCAke21ldGFkYXRhLm1heEFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1heEFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgaWYgKG1ldGFkYXRhLmZhbGxiYWNrVG9Ob0NhbGxiYWNrKSB7XG4gICAgICAgICAgICAvLyBUaGlzIEFQSSBtZXRob2QgaGFzIGN1cnJlbnRseSBubyBjYWxsYmFjayBvbiBDaHJvbWUsIGJ1dCBpdCByZXR1cm4gYSBwcm9taXNlIG9uIEZpcmVmb3gsXG4gICAgICAgICAgICAvLyBhbmQgc28gdGhlIHBvbHlmaWxsIHdpbGwgdHJ5IHRvIGNhbGwgaXQgd2l0aCBhIGNhbGxiYWNrIGZpcnN0LCBhbmQgaXQgd2lsbCBmYWxsYmFja1xuICAgICAgICAgICAgLy8gdG8gbm90IHBhc3NpbmcgdGhlIGNhbGxiYWNrIGlmIHRoZSBmaXJzdCBjYWxsIGZhaWxzLlxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MsIG1ha2VDYWxsYmFjayh7cmVzb2x2ZSwgcmVqZWN0fSwgbWV0YWRhdGEpKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGNiRXJyb3IpIHtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKGAke25hbWV9IEFQSSBtZXRob2QgZG9lc24ndCBzZWVtIHRvIHN1cHBvcnQgdGhlIGNhbGxiYWNrIHBhcmFtZXRlciwgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcImZhbGxpbmcgYmFjayB0byBjYWxsIGl0IHdpdGhvdXQgYSBjYWxsYmFjazogXCIsIGNiRXJyb3IpO1xuXG4gICAgICAgICAgICAgIHRhcmdldFtuYW1lXSguLi5hcmdzKTtcblxuICAgICAgICAgICAgICAvLyBVcGRhdGUgdGhlIEFQSSBtZXRob2QgbWV0YWRhdGEsIHNvIHRoYXQgdGhlIG5leHQgQVBJIGNhbGxzIHdpbGwgbm90IHRyeSB0b1xuICAgICAgICAgICAgICAvLyB1c2UgdGhlIHVuc3VwcG9ydGVkIGNhbGxiYWNrIGFueW1vcmUuXG4gICAgICAgICAgICAgIG1ldGFkYXRhLmZhbGxiYWNrVG9Ob0NhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgICAgICAgIG1ldGFkYXRhLm5vQ2FsbGJhY2sgPSB0cnVlO1xuXG4gICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKG1ldGFkYXRhLm5vQ2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRhcmdldFtuYW1lXSguLi5hcmdzKTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MsIG1ha2VDYWxsYmFjayh7cmVzb2x2ZSwgcmVqZWN0fSwgbWV0YWRhdGEpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogV3JhcHMgYW4gZXhpc3RpbmcgbWV0aG9kIG9mIHRoZSB0YXJnZXQgb2JqZWN0LCBzbyB0aGF0IGNhbGxzIHRvIGl0IGFyZVxuICAgICAqIGludGVyY2VwdGVkIGJ5IHRoZSBnaXZlbiB3cmFwcGVyIGZ1bmN0aW9uLiBUaGUgd3JhcHBlciBmdW5jdGlvbiByZWNlaXZlcyxcbiAgICAgKiBhcyBpdHMgZmlyc3QgYXJndW1lbnQsIHRoZSBvcmlnaW5hbCBgdGFyZ2V0YCBvYmplY3QsIGZvbGxvd2VkIGJ5IGVhY2ggb2ZcbiAgICAgKiB0aGUgYXJndW1lbnRzIHBhc3NlZCB0byB0aGUgb3JpZ2luYWwgbWV0aG9kLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICAgICAqICAgICAgICBUaGUgb3JpZ2luYWwgdGFyZ2V0IG9iamVjdCB0aGF0IHRoZSB3cmFwcGVkIG1ldGhvZCBiZWxvbmdzIHRvLlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IG1ldGhvZFxuICAgICAqICAgICAgICBUaGUgbWV0aG9kIGJlaW5nIHdyYXBwZWQuIFRoaXMgaXMgdXNlZCBhcyB0aGUgdGFyZ2V0IG9mIHRoZSBQcm94eVxuICAgICAqICAgICAgICBvYmplY3Qgd2hpY2ggaXMgY3JlYXRlZCB0byB3cmFwIHRoZSBtZXRob2QuXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gd3JhcHBlclxuICAgICAqICAgICAgICBUaGUgd3JhcHBlciBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgaW4gcGxhY2Ugb2YgYSBkaXJlY3QgaW52b2NhdGlvblxuICAgICAqICAgICAgICBvZiB0aGUgd3JhcHBlZCBtZXRob2QuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7UHJveHk8ZnVuY3Rpb24+fVxuICAgICAqICAgICAgICBBIFByb3h5IG9iamVjdCBmb3IgdGhlIGdpdmVuIG1ldGhvZCwgd2hpY2ggaW52b2tlcyB0aGUgZ2l2ZW4gd3JhcHBlclxuICAgICAqICAgICAgICBtZXRob2QgaW4gaXRzIHBsYWNlLlxuICAgICAqL1xuICAgIGNvbnN0IHdyYXBNZXRob2QgPSAodGFyZ2V0LCBtZXRob2QsIHdyYXBwZXIpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJveHkobWV0aG9kLCB7XG4gICAgICAgIGFwcGx5KHRhcmdldE1ldGhvZCwgdGhpc09iaiwgYXJncykge1xuICAgICAgICAgIHJldHVybiB3cmFwcGVyLmNhbGwodGhpc09iaiwgdGFyZ2V0LCAuLi5hcmdzKTtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBsZXQgaGFzT3duUHJvcGVydHkgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cbiAgICAvKipcbiAgICAgKiBXcmFwcyBhbiBvYmplY3QgaW4gYSBQcm94eSB3aGljaCBpbnRlcmNlcHRzIGFuZCB3cmFwcyBjZXJ0YWluIG1ldGhvZHNcbiAgICAgKiBiYXNlZCBvbiB0aGUgZ2l2ZW4gYHdyYXBwZXJzYCBhbmQgYG1ldGFkYXRhYCBvYmplY3RzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICAgICAqICAgICAgICBUaGUgdGFyZ2V0IG9iamVjdCB0byB3cmFwLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IFt3cmFwcGVycyA9IHt9XVxuICAgICAqICAgICAgICBBbiBvYmplY3QgdHJlZSBjb250YWluaW5nIHdyYXBwZXIgZnVuY3Rpb25zIGZvciBzcGVjaWFsIGNhc2VzLiBBbnlcbiAgICAgKiAgICAgICAgZnVuY3Rpb24gcHJlc2VudCBpbiB0aGlzIG9iamVjdCB0cmVlIGlzIGNhbGxlZCBpbiBwbGFjZSBvZiB0aGVcbiAgICAgKiAgICAgICAgbWV0aG9kIGluIHRoZSBzYW1lIGxvY2F0aW9uIGluIHRoZSBgdGFyZ2V0YCBvYmplY3QgdHJlZS4gVGhlc2VcbiAgICAgKiAgICAgICAgd3JhcHBlciBtZXRob2RzIGFyZSBpbnZva2VkIGFzIGRlc2NyaWJlZCBpbiB7QHNlZSB3cmFwTWV0aG9kfS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbbWV0YWRhdGEgPSB7fV1cbiAgICAgKiAgICAgICAgQW4gb2JqZWN0IHRyZWUgY29udGFpbmluZyBtZXRhZGF0YSB1c2VkIHRvIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVcbiAgICAgKiAgICAgICAgUHJvbWlzZS1iYXNlZCB3cmFwcGVyIGZ1bmN0aW9ucyBmb3IgYXN5bmNocm9ub3VzLiBBbnkgZnVuY3Rpb24gaW5cbiAgICAgKiAgICAgICAgdGhlIGB0YXJnZXRgIG9iamVjdCB0cmVlIHdoaWNoIGhhcyBhIGNvcnJlc3BvbmRpbmcgbWV0YWRhdGEgb2JqZWN0XG4gICAgICogICAgICAgIGluIHRoZSBzYW1lIGxvY2F0aW9uIGluIHRoZSBgbWV0YWRhdGFgIHRyZWUgaXMgcmVwbGFjZWQgd2l0aCBhblxuICAgICAqICAgICAgICBhdXRvbWF0aWNhbGx5LWdlbmVyYXRlZCB3cmFwcGVyIGZ1bmN0aW9uLCBhcyBkZXNjcmliZWQgaW5cbiAgICAgKiAgICAgICAge0BzZWUgd3JhcEFzeW5jRnVuY3Rpb259XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7UHJveHk8b2JqZWN0Pn1cbiAgICAgKi9cbiAgICBjb25zdCB3cmFwT2JqZWN0ID0gKHRhcmdldCwgd3JhcHBlcnMgPSB7fSwgbWV0YWRhdGEgPSB7fSkgPT4ge1xuICAgICAgbGV0IGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgIGxldCBoYW5kbGVycyA9IHtcbiAgICAgICAgaGFzKHByb3h5VGFyZ2V0LCBwcm9wKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3AgaW4gdGFyZ2V0IHx8IHByb3AgaW4gY2FjaGU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0KHByb3h5VGFyZ2V0LCBwcm9wLCByZWNlaXZlcikge1xuICAgICAgICAgIGlmIChwcm9wIGluIGNhY2hlKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVbcHJvcF07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCEocHJvcCBpbiB0YXJnZXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxldCB2YWx1ZSA9IHRhcmdldFtwcm9wXTtcblxuICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgLy8gVGhpcyBpcyBhIG1ldGhvZCBvbiB0aGUgdW5kZXJseWluZyBvYmplY3QuIENoZWNrIGlmIHdlIG5lZWQgdG8gZG9cbiAgICAgICAgICAgIC8vIGFueSB3cmFwcGluZy5cblxuICAgICAgICAgICAgaWYgKHR5cGVvZiB3cmFwcGVyc1twcm9wXSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgIC8vIFdlIGhhdmUgYSBzcGVjaWFsLWNhc2Ugd3JhcHBlciBmb3IgdGhpcyBtZXRob2QuXG4gICAgICAgICAgICAgIHZhbHVlID0gd3JhcE1ldGhvZCh0YXJnZXQsIHRhcmdldFtwcm9wXSwgd3JhcHBlcnNbcHJvcF0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChoYXNPd25Qcm9wZXJ0eShtZXRhZGF0YSwgcHJvcCkpIHtcbiAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhbiBhc3luYyBtZXRob2QgdGhhdCB3ZSBoYXZlIG1ldGFkYXRhIGZvci4gQ3JlYXRlIGFcbiAgICAgICAgICAgICAgLy8gUHJvbWlzZSB3cmFwcGVyIGZvciBpdC5cbiAgICAgICAgICAgICAgbGV0IHdyYXBwZXIgPSB3cmFwQXN5bmNGdW5jdGlvbihwcm9wLCBtZXRhZGF0YVtwcm9wXSk7XG4gICAgICAgICAgICAgIHZhbHVlID0gd3JhcE1ldGhvZCh0YXJnZXQsIHRhcmdldFtwcm9wXSwgd3JhcHBlcik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBUaGlzIGlzIGEgbWV0aG9kIHRoYXQgd2UgZG9uJ3Qga25vdyBvciBjYXJlIGFib3V0LiBSZXR1cm4gdGhlXG4gICAgICAgICAgICAgIC8vIG9yaWdpbmFsIG1ldGhvZCwgYm91bmQgdG8gdGhlIHVuZGVybHlpbmcgb2JqZWN0LlxuICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLmJpbmQodGFyZ2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSAhPT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgICAgICAgKGhhc093blByb3BlcnR5KHdyYXBwZXJzLCBwcm9wKSB8fFxuICAgICAgICAgICAgICAgICAgICAgIGhhc093blByb3BlcnR5KG1ldGFkYXRhLCBwcm9wKSkpIHtcbiAgICAgICAgICAgIC8vIFRoaXMgaXMgYW4gb2JqZWN0IHRoYXQgd2UgbmVlZCB0byBkbyBzb21lIHdyYXBwaW5nIGZvciB0aGUgY2hpbGRyZW5cbiAgICAgICAgICAgIC8vIG9mLiBDcmVhdGUgYSBzdWItb2JqZWN0IHdyYXBwZXIgZm9yIGl0IHdpdGggdGhlIGFwcHJvcHJpYXRlIGNoaWxkXG4gICAgICAgICAgICAvLyBtZXRhZGF0YS5cbiAgICAgICAgICAgIHZhbHVlID0gd3JhcE9iamVjdCh2YWx1ZSwgd3JhcHBlcnNbcHJvcF0sIG1ldGFkYXRhW3Byb3BdKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc093blByb3BlcnR5KG1ldGFkYXRhLCBcIipcIikpIHtcbiAgICAgICAgICAgIC8vIFdyYXAgYWxsIHByb3BlcnRpZXMgaW4gKiBuYW1lc3BhY2UuXG4gICAgICAgICAgICB2YWx1ZSA9IHdyYXBPYmplY3QodmFsdWUsIHdyYXBwZXJzW3Byb3BdLCBtZXRhZGF0YVtcIipcIl0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBXZSBkb24ndCBuZWVkIHRvIGRvIGFueSB3cmFwcGluZyBmb3IgdGhpcyBwcm9wZXJ0eSxcbiAgICAgICAgICAgIC8vIHNvIGp1c3QgZm9yd2FyZCBhbGwgYWNjZXNzIHRvIHRoZSB1bmRlcmx5aW5nIG9iamVjdC5cbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjYWNoZSwgcHJvcCwge1xuICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0W3Byb3BdO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2FjaGVbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0KHByb3h5VGFyZ2V0LCBwcm9wLCB2YWx1ZSwgcmVjZWl2ZXIpIHtcbiAgICAgICAgICBpZiAocHJvcCBpbiBjYWNoZSkge1xuICAgICAgICAgICAgY2FjaGVbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9LFxuXG4gICAgICAgIGRlZmluZVByb3BlcnR5KHByb3h5VGFyZ2V0LCBwcm9wLCBkZXNjKSB7XG4gICAgICAgICAgcmV0dXJuIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkoY2FjaGUsIHByb3AsIGRlc2MpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGRlbGV0ZVByb3BlcnR5KHByb3h5VGFyZ2V0LCBwcm9wKSB7XG4gICAgICAgICAgcmV0dXJuIFJlZmxlY3QuZGVsZXRlUHJvcGVydHkoY2FjaGUsIHByb3ApO1xuICAgICAgICB9LFxuICAgICAgfTtcblxuICAgICAgLy8gUGVyIGNvbnRyYWN0IG9mIHRoZSBQcm94eSBBUEksIHRoZSBcImdldFwiIHByb3h5IGhhbmRsZXIgbXVzdCByZXR1cm4gdGhlXG4gICAgICAvLyBvcmlnaW5hbCB2YWx1ZSBvZiB0aGUgdGFyZ2V0IGlmIHRoYXQgdmFsdWUgaXMgZGVjbGFyZWQgcmVhZC1vbmx5IGFuZFxuICAgICAgLy8gbm9uLWNvbmZpZ3VyYWJsZS4gRm9yIHRoaXMgcmVhc29uLCB3ZSBjcmVhdGUgYW4gb2JqZWN0IHdpdGggdGhlXG4gICAgICAvLyBwcm90b3R5cGUgc2V0IHRvIGB0YXJnZXRgIGluc3RlYWQgb2YgdXNpbmcgYHRhcmdldGAgZGlyZWN0bHkuXG4gICAgICAvLyBPdGhlcndpc2Ugd2UgY2Fubm90IHJldHVybiBhIGN1c3RvbSBvYmplY3QgZm9yIEFQSXMgdGhhdFxuICAgICAgLy8gYXJlIGRlY2xhcmVkIHJlYWQtb25seSBhbmQgbm9uLWNvbmZpZ3VyYWJsZSwgc3VjaCBhcyBgY2hyb21lLmRldnRvb2xzYC5cbiAgICAgIC8vXG4gICAgICAvLyBUaGUgcHJveHkgaGFuZGxlcnMgdGhlbXNlbHZlcyB3aWxsIHN0aWxsIHVzZSB0aGUgb3JpZ2luYWwgYHRhcmdldGBcbiAgICAgIC8vIGluc3RlYWQgb2YgdGhlIGBwcm94eVRhcmdldGAsIHNvIHRoYXQgdGhlIG1ldGhvZHMgYW5kIHByb3BlcnRpZXMgYXJlXG4gICAgICAvLyBkZXJlZmVyZW5jZWQgdmlhIHRoZSBvcmlnaW5hbCB0YXJnZXRzLlxuICAgICAgbGV0IHByb3h5VGFyZ2V0ID0gT2JqZWN0LmNyZWF0ZSh0YXJnZXQpO1xuICAgICAgcmV0dXJuIG5ldyBQcm94eShwcm94eVRhcmdldCwgaGFuZGxlcnMpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgc2V0IG9mIHdyYXBwZXIgZnVuY3Rpb25zIGZvciBhbiBldmVudCBvYmplY3QsIHdoaWNoIGhhbmRsZXNcbiAgICAgKiB3cmFwcGluZyBvZiBsaXN0ZW5lciBmdW5jdGlvbnMgdGhhdCB0aG9zZSBtZXNzYWdlcyBhcmUgcGFzc2VkLlxuICAgICAqXG4gICAgICogQSBzaW5nbGUgd3JhcHBlciBpcyBjcmVhdGVkIGZvciBlYWNoIGxpc3RlbmVyIGZ1bmN0aW9uLCBhbmQgc3RvcmVkIGluIGFcbiAgICAgKiBtYXAuIFN1YnNlcXVlbnQgY2FsbHMgdG8gYGFkZExpc3RlbmVyYCwgYGhhc0xpc3RlbmVyYCwgb3IgYHJlbW92ZUxpc3RlbmVyYFxuICAgICAqIHJldHJpZXZlIHRoZSBvcmlnaW5hbCB3cmFwcGVyLCBzbyB0aGF0ICBhdHRlbXB0cyB0byByZW1vdmUgYVxuICAgICAqIHByZXZpb3VzbHktYWRkZWQgbGlzdGVuZXIgd29yayBhcyBleHBlY3RlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RGVmYXVsdFdlYWtNYXA8ZnVuY3Rpb24sIGZ1bmN0aW9uPn0gd3JhcHBlck1hcFxuICAgICAqICAgICAgICBBIERlZmF1bHRXZWFrTWFwIG9iamVjdCB3aGljaCB3aWxsIGNyZWF0ZSB0aGUgYXBwcm9wcmlhdGUgd3JhcHBlclxuICAgICAqICAgICAgICBmb3IgYSBnaXZlbiBsaXN0ZW5lciBmdW5jdGlvbiB3aGVuIG9uZSBkb2VzIG5vdCBleGlzdCwgYW5kIHJldHJpZXZlXG4gICAgICogICAgICAgIGFuIGV4aXN0aW5nIG9uZSB3aGVuIGl0IGRvZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgICAqL1xuICAgIGNvbnN0IHdyYXBFdmVudCA9IHdyYXBwZXJNYXAgPT4gKHtcbiAgICAgIGFkZExpc3RlbmVyKHRhcmdldCwgbGlzdGVuZXIsIC4uLmFyZ3MpIHtcbiAgICAgICAgdGFyZ2V0LmFkZExpc3RlbmVyKHdyYXBwZXJNYXAuZ2V0KGxpc3RlbmVyKSwgLi4uYXJncyk7XG4gICAgICB9LFxuXG4gICAgICBoYXNMaXN0ZW5lcih0YXJnZXQsIGxpc3RlbmVyKSB7XG4gICAgICAgIHJldHVybiB0YXJnZXQuaGFzTGlzdGVuZXIod3JhcHBlck1hcC5nZXQobGlzdGVuZXIpKTtcbiAgICAgIH0sXG5cbiAgICAgIHJlbW92ZUxpc3RlbmVyKHRhcmdldCwgbGlzdGVuZXIpIHtcbiAgICAgICAgdGFyZ2V0LnJlbW92ZUxpc3RlbmVyKHdyYXBwZXJNYXAuZ2V0KGxpc3RlbmVyKSk7XG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgY29uc3Qgb25SZXF1ZXN0RmluaXNoZWRXcmFwcGVycyA9IG5ldyBEZWZhdWx0V2Vha01hcChsaXN0ZW5lciA9PiB7XG4gICAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFdyYXBzIGFuIG9uUmVxdWVzdEZpbmlzaGVkIGxpc3RlbmVyIGZ1bmN0aW9uIHNvIHRoYXQgaXQgd2lsbCByZXR1cm4gYVxuICAgICAgICogYGdldENvbnRlbnQoKWAgcHJvcGVydHkgd2hpY2ggcmV0dXJucyBhIGBQcm9taXNlYCByYXRoZXIgdGhhbiB1c2luZyBhXG4gICAgICAgKiBjYWxsYmFjayBBUEkuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IHJlcVxuICAgICAgICogICAgICAgIFRoZSBIQVIgZW50cnkgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgbmV0d29yayByZXF1ZXN0LlxuICAgICAgICovXG4gICAgICByZXR1cm4gZnVuY3Rpb24gb25SZXF1ZXN0RmluaXNoZWQocmVxKSB7XG4gICAgICAgIGNvbnN0IHdyYXBwZWRSZXEgPSB3cmFwT2JqZWN0KHJlcSwge30gLyogd3JhcHBlcnMgKi8sIHtcbiAgICAgICAgICBnZXRDb250ZW50OiB7XG4gICAgICAgICAgICBtaW5BcmdzOiAwLFxuICAgICAgICAgICAgbWF4QXJnczogMCxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgbGlzdGVuZXIod3JhcHBlZFJlcSk7XG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgY29uc3Qgb25NZXNzYWdlV3JhcHBlcnMgPSBuZXcgRGVmYXVsdFdlYWtNYXAobGlzdGVuZXIgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBXcmFwcyBhIG1lc3NhZ2UgbGlzdGVuZXIgZnVuY3Rpb24gc28gdGhhdCBpdCBtYXkgc2VuZCByZXNwb25zZXMgYmFzZWQgb25cbiAgICAgICAqIGl0cyByZXR1cm4gdmFsdWUsIHJhdGhlciB0aGFuIGJ5IHJldHVybmluZyBhIHNlbnRpbmVsIHZhbHVlIGFuZCBjYWxsaW5nIGFcbiAgICAgICAqIGNhbGxiYWNrLiBJZiB0aGUgbGlzdGVuZXIgZnVuY3Rpb24gcmV0dXJucyBhIFByb21pc2UsIHRoZSByZXNwb25zZSBpc1xuICAgICAgICogc2VudCB3aGVuIHRoZSBwcm9taXNlIGVpdGhlciByZXNvbHZlcyBvciByZWplY3RzLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7Kn0gbWVzc2FnZVxuICAgICAgICogICAgICAgIFRoZSBtZXNzYWdlIHNlbnQgYnkgdGhlIG90aGVyIGVuZCBvZiB0aGUgY2hhbm5lbC5cbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBzZW5kZXJcbiAgICAgICAqICAgICAgICBEZXRhaWxzIGFib3V0IHRoZSBzZW5kZXIgb2YgdGhlIG1lc3NhZ2UuXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCopfSBzZW5kUmVzcG9uc2VcbiAgICAgICAqICAgICAgICBBIGNhbGxiYWNrIHdoaWNoLCB3aGVuIGNhbGxlZCB3aXRoIGFuIGFyYml0cmFyeSBhcmd1bWVudCwgc2VuZHNcbiAgICAgICAqICAgICAgICB0aGF0IHZhbHVlIGFzIGEgcmVzcG9uc2UuXG4gICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgICAqICAgICAgICBUcnVlIGlmIHRoZSB3cmFwcGVkIGxpc3RlbmVyIHJldHVybmVkIGEgUHJvbWlzZSwgd2hpY2ggd2lsbCBsYXRlclxuICAgICAgICogICAgICAgIHlpZWxkIGEgcmVzcG9uc2UuIEZhbHNlIG90aGVyd2lzZS5cbiAgICAgICAqL1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIG9uTWVzc2FnZShtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xuICAgICAgICBsZXQgZGlkQ2FsbFNlbmRSZXNwb25zZSA9IGZhbHNlO1xuXG4gICAgICAgIGxldCB3cmFwcGVkU2VuZFJlc3BvbnNlO1xuICAgICAgICBsZXQgc2VuZFJlc3BvbnNlUHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgIHdyYXBwZWRTZW5kUmVzcG9uc2UgPSBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgZGlkQ2FsbFNlbmRSZXNwb25zZSA9IHRydWU7XG4gICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJlc3VsdCA9IGxpc3RlbmVyKG1lc3NhZ2UsIHNlbmRlciwgd3JhcHBlZFNlbmRSZXNwb25zZSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIHJlc3VsdCA9IFByb21pc2UucmVqZWN0KGVycik7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpc1Jlc3VsdFRoZW5hYmxlID0gcmVzdWx0ICE9PSB0cnVlICYmIGlzVGhlbmFibGUocmVzdWx0KTtcblxuICAgICAgICAvLyBJZiB0aGUgbGlzdGVuZXIgZGlkbid0IHJldHVybmVkIHRydWUgb3IgYSBQcm9taXNlLCBvciBjYWxsZWRcbiAgICAgICAgLy8gd3JhcHBlZFNlbmRSZXNwb25zZSBzeW5jaHJvbm91c2x5LCB3ZSBjYW4gZXhpdCBlYXJsaWVyXG4gICAgICAgIC8vIGJlY2F1c2UgdGhlcmUgd2lsbCBiZSBubyByZXNwb25zZSBzZW50IGZyb20gdGhpcyBsaXN0ZW5lci5cbiAgICAgICAgaWYgKHJlc3VsdCAhPT0gdHJ1ZSAmJiAhaXNSZXN1bHRUaGVuYWJsZSAmJiAhZGlkQ2FsbFNlbmRSZXNwb25zZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEEgc21hbGwgaGVscGVyIHRvIHNlbmQgdGhlIG1lc3NhZ2UgaWYgdGhlIHByb21pc2UgcmVzb2x2ZXNcbiAgICAgICAgLy8gYW5kIGFuIGVycm9yIGlmIHRoZSBwcm9taXNlIHJlamVjdHMgKGEgd3JhcHBlZCBzZW5kTWVzc2FnZSBoYXNcbiAgICAgICAgLy8gdG8gdHJhbnNsYXRlIHRoZSBtZXNzYWdlIGludG8gYSByZXNvbHZlZCBwcm9taXNlIG9yIGEgcmVqZWN0ZWRcbiAgICAgICAgLy8gcHJvbWlzZSkuXG4gICAgICAgIGNvbnN0IHNlbmRQcm9taXNlZFJlc3VsdCA9IChwcm9taXNlKSA9PiB7XG4gICAgICAgICAgcHJvbWlzZS50aGVuKG1zZyA9PiB7XG4gICAgICAgICAgICAvLyBzZW5kIHRoZSBtZXNzYWdlIHZhbHVlLlxuICAgICAgICAgICAgc2VuZFJlc3BvbnNlKG1zZyk7XG4gICAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgLy8gU2VuZCBhIEpTT04gcmVwcmVzZW50YXRpb24gb2YgdGhlIGVycm9yIGlmIHRoZSByZWplY3RlZCB2YWx1ZVxuICAgICAgICAgICAgLy8gaXMgYW4gaW5zdGFuY2Ugb2YgZXJyb3IsIG9yIHRoZSBvYmplY3QgaXRzZWxmIG90aGVyd2lzZS5cbiAgICAgICAgICAgIGxldCBtZXNzYWdlO1xuICAgICAgICAgICAgaWYgKGVycm9yICYmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yIHx8XG4gICAgICAgICAgICAgICAgdHlwZW9mIGVycm9yLm1lc3NhZ2UgPT09IFwic3RyaW5nXCIpKSB7XG4gICAgICAgICAgICAgIG1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZFwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZW5kUmVzcG9uc2Uoe1xuICAgICAgICAgICAgICBfX21veldlYkV4dGVuc2lvblBvbHlmaWxsUmVqZWN0X186IHRydWUsXG4gICAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgLy8gUHJpbnQgYW4gZXJyb3Igb24gdGhlIGNvbnNvbGUgaWYgdW5hYmxlIHRvIHNlbmQgdGhlIHJlc3BvbnNlLlxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBzZW5kIG9uTWVzc2FnZSByZWplY3RlZCByZXBseVwiLCBlcnIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIElmIHRoZSBsaXN0ZW5lciByZXR1cm5lZCBhIFByb21pc2UsIHNlbmQgdGhlIHJlc29sdmVkIHZhbHVlIGFzIGFcbiAgICAgICAgLy8gcmVzdWx0LCBvdGhlcndpc2Ugd2FpdCB0aGUgcHJvbWlzZSByZWxhdGVkIHRvIHRoZSB3cmFwcGVkU2VuZFJlc3BvbnNlXG4gICAgICAgIC8vIGNhbGxiYWNrIHRvIHJlc29sdmUgYW5kIHNlbmQgaXQgYXMgYSByZXNwb25zZS5cbiAgICAgICAgaWYgKGlzUmVzdWx0VGhlbmFibGUpIHtcbiAgICAgICAgICBzZW5kUHJvbWlzZWRSZXN1bHQocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZW5kUHJvbWlzZWRSZXN1bHQoc2VuZFJlc3BvbnNlUHJvbWlzZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBMZXQgQ2hyb21lIGtub3cgdGhhdCB0aGUgbGlzdGVuZXIgaXMgcmVwbHlpbmcuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHdyYXBwZWRTZW5kTWVzc2FnZUNhbGxiYWNrID0gKHtyZWplY3QsIHJlc29sdmV9LCByZXBseSkgPT4ge1xuICAgICAgaWYgKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IpIHtcbiAgICAgICAgLy8gRGV0ZWN0IHdoZW4gbm9uZSBvZiB0aGUgbGlzdGVuZXJzIHJlcGxpZWQgdG8gdGhlIHNlbmRNZXNzYWdlIGNhbGwgYW5kIHJlc29sdmVcbiAgICAgICAgLy8gdGhlIHByb21pc2UgdG8gdW5kZWZpbmVkIGFzIGluIEZpcmVmb3guXG4gICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS93ZWJleHRlbnNpb24tcG9seWZpbGwvaXNzdWVzLzEzMFxuICAgICAgICBpZiAoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvci5tZXNzYWdlID09PSBDSFJPTUVfU0VORF9NRVNTQUdFX0NBTExCQUNLX05PX1JFU1BPTlNFX01FU1NBR0UpIHtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yLm1lc3NhZ2UpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChyZXBseSAmJiByZXBseS5fX21veldlYkV4dGVuc2lvblBvbHlmaWxsUmVqZWN0X18pIHtcbiAgICAgICAgLy8gQ29udmVydCBiYWNrIHRoZSBKU09OIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBlcnJvciBpbnRvXG4gICAgICAgIC8vIGFuIEVycm9yIGluc3RhbmNlLlxuICAgICAgICByZWplY3QobmV3IEVycm9yKHJlcGx5Lm1lc3NhZ2UpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUocmVwbHkpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCB3cmFwcGVkU2VuZE1lc3NhZ2UgPSAobmFtZSwgbWV0YWRhdGEsIGFwaU5hbWVzcGFjZU9iaiwgLi4uYXJncykgPT4ge1xuICAgICAgaWYgKGFyZ3MubGVuZ3RoIDwgbWV0YWRhdGEubWluQXJncykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IGxlYXN0ICR7bWV0YWRhdGEubWluQXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWluQXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xuICAgICAgfVxuXG4gICAgICBpZiAoYXJncy5sZW5ndGggPiBtZXRhZGF0YS5tYXhBcmdzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYXQgbW9zdCAke21ldGFkYXRhLm1heEFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1heEFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3Qgd3JhcHBlZENiID0gd3JhcHBlZFNlbmRNZXNzYWdlQ2FsbGJhY2suYmluZChudWxsLCB7cmVzb2x2ZSwgcmVqZWN0fSk7XG4gICAgICAgIGFyZ3MucHVzaCh3cmFwcGVkQ2IpO1xuICAgICAgICBhcGlOYW1lc3BhY2VPYmouc2VuZE1lc3NhZ2UoLi4uYXJncyk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc3RhdGljV3JhcHBlcnMgPSB7XG4gICAgICBkZXZ0b29sczoge1xuICAgICAgICBuZXR3b3JrOiB7XG4gICAgICAgICAgb25SZXF1ZXN0RmluaXNoZWQ6IHdyYXBFdmVudChvblJlcXVlc3RGaW5pc2hlZFdyYXBwZXJzKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBydW50aW1lOiB7XG4gICAgICAgIG9uTWVzc2FnZTogd3JhcEV2ZW50KG9uTWVzc2FnZVdyYXBwZXJzKSxcbiAgICAgICAgb25NZXNzYWdlRXh0ZXJuYWw6IHdyYXBFdmVudChvbk1lc3NhZ2VXcmFwcGVycyksXG4gICAgICAgIHNlbmRNZXNzYWdlOiB3cmFwcGVkU2VuZE1lc3NhZ2UuYmluZChudWxsLCBcInNlbmRNZXNzYWdlXCIsIHttaW5BcmdzOiAxLCBtYXhBcmdzOiAzfSksXG4gICAgICB9LFxuICAgICAgdGFiczoge1xuICAgICAgICBzZW5kTWVzc2FnZTogd3JhcHBlZFNlbmRNZXNzYWdlLmJpbmQobnVsbCwgXCJzZW5kTWVzc2FnZVwiLCB7bWluQXJnczogMiwgbWF4QXJnczogM30pLFxuICAgICAgfSxcbiAgICB9O1xuICAgIGNvbnN0IHNldHRpbmdNZXRhZGF0YSA9IHtcbiAgICAgIGNsZWFyOiB7bWluQXJnczogMSwgbWF4QXJnczogMX0sXG4gICAgICBnZXQ6IHttaW5BcmdzOiAxLCBtYXhBcmdzOiAxfSxcbiAgICAgIHNldDoge21pbkFyZ3M6IDEsIG1heEFyZ3M6IDF9LFxuICAgIH07XG4gICAgYXBpTWV0YWRhdGEucHJpdmFjeSA9IHtcbiAgICAgIG5ldHdvcms6IHtcIipcIjogc2V0dGluZ01ldGFkYXRhfSxcbiAgICAgIHNlcnZpY2VzOiB7XCIqXCI6IHNldHRpbmdNZXRhZGF0YX0sXG4gICAgICB3ZWJzaXRlczoge1wiKlwiOiBzZXR0aW5nTWV0YWRhdGF9LFxuICAgIH07XG5cbiAgICByZXR1cm4gd3JhcE9iamVjdChleHRlbnNpb25BUElzLCBzdGF0aWNXcmFwcGVycywgYXBpTWV0YWRhdGEpO1xuICB9O1xuXG4gIC8vIFRoZSBidWlsZCBwcm9jZXNzIGFkZHMgYSBVTUQgd3JhcHBlciBhcm91bmQgdGhpcyBmaWxlLCB3aGljaCBtYWtlcyB0aGVcbiAgLy8gYG1vZHVsZWAgdmFyaWFibGUgYXZhaWxhYmxlLlxuICBtb2R1bGUuZXhwb3J0cyA9IHdyYXBBUElzKGNocm9tZSk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IGdsb2JhbFRoaXMuYnJvd3Nlcjtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LTIwMjUgQWRndWFyZCBTb2Z0d2FyZSBMdGQuXG4gKlxuICogQGZpbGVcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEFkR3VhcmQgQnJvd3NlciBFeHRlbnNpb24gKGh0dHBzOi8vZ2l0aHViLmNvbS9BZGd1YXJkVGVhbS9BZGd1YXJkQnJvd3NlckV4dGVuc2lvbikuXG4gKlxuICogQWRHdWFyZCBCcm93c2VyIEV4dGVuc2lvbiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogQWRHdWFyZCBCcm93c2VyIEV4dGVuc2lvbiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBBZEd1YXJkIEJyb3dzZXIgRXh0ZW5zaW9uLiBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cblxuaW1wb3J0IGJyb3dzZXIgZnJvbSAnd2ViZXh0ZW5zaW9uLXBvbHlmaWxsJztcblxuY29uc3QgY3JlYXRlU2lkZWJhclBhbmUgPSBhc3luYyAoKSA9PiB7XG4gICAgLy8gVE9ETzogVHJ5IHRvIG1vdmUgaXQgdG8gZmlyc3QgY2VsbFxuICAgIGNvbnN0IHNpZGViYXIgPSBhd2FpdCBicm93c2VyLmRldnRvb2xzLnBhbmVscy5lbGVtZW50cy5jcmVhdGVTaWRlYmFyUGFuZSgnQWRHdWFyZCcpO1xuXG4gICAgc2lkZWJhci5zZXRIZWlnaHQoJzQwMHB4Jyk7XG4gICAgc2lkZWJhci5zZXRQYWdlKCcuLi9wYWdlcy9kZXZ0b29scy1lbGVtZW50cy1zaWRlYmFyLmh0bWwnKTtcbn07XG5cbmNyZWF0ZVNpZGViYXJQYW5lKCk7XG4iXSwibmFtZXMiOlsiZ2xvYmFsVGhpcyIsImNocm9tZSIsInJ1bnRpbWUiLCJpZCIsIkVycm9yIiwiYnJvd3NlciIsIkNIUk9NRV9TRU5EX01FU1NBR0VfQ0FMTEJBQ0tfTk9fUkVTUE9OU0VfTUVTU0FHRSIsIndyYXBBUElzIiwiZXh0ZW5zaW9uQVBJcyIsImFwaU1ldGFkYXRhIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsIkRlZmF1bHRXZWFrTWFwIiwiV2Vha01hcCIsImNvbnN0cnVjdG9yIiwiY3JlYXRlSXRlbSIsIml0ZW1zIiwidW5kZWZpbmVkIiwiZ2V0Iiwia2V5IiwiaGFzIiwic2V0IiwiaXNUaGVuYWJsZSIsInZhbHVlIiwidGhlbiIsIm1ha2VDYWxsYmFjayIsInByb21pc2UiLCJtZXRhZGF0YSIsImNhbGxiYWNrQXJncyIsImxhc3RFcnJvciIsInJlamVjdCIsIm1lc3NhZ2UiLCJzaW5nbGVDYWxsYmFja0FyZyIsInJlc29sdmUiLCJwbHVyYWxpemVBcmd1bWVudHMiLCJudW1BcmdzIiwid3JhcEFzeW5jRnVuY3Rpb24iLCJuYW1lIiwiYXN5bmNGdW5jdGlvbldyYXBwZXIiLCJ0YXJnZXQiLCJhcmdzIiwibWluQXJncyIsIm1heEFyZ3MiLCJQcm9taXNlIiwiZmFsbGJhY2tUb05vQ2FsbGJhY2siLCJjYkVycm9yIiwiY29uc29sZSIsIndhcm4iLCJub0NhbGxiYWNrIiwid3JhcE1ldGhvZCIsIm1ldGhvZCIsIndyYXBwZXIiLCJQcm94eSIsImFwcGx5IiwidGFyZ2V0TWV0aG9kIiwidGhpc09iaiIsImNhbGwiLCJoYXNPd25Qcm9wZXJ0eSIsIkZ1bmN0aW9uIiwiYmluZCIsInByb3RvdHlwZSIsIndyYXBPYmplY3QiLCJ3cmFwcGVycyIsImNhY2hlIiwiY3JlYXRlIiwiaGFuZGxlcnMiLCJwcm94eVRhcmdldCIsInByb3AiLCJyZWNlaXZlciIsImRlZmluZVByb3BlcnR5IiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsImRlc2MiLCJSZWZsZWN0IiwiZGVsZXRlUHJvcGVydHkiLCJ3cmFwRXZlbnQiLCJ3cmFwcGVyTWFwIiwiYWRkTGlzdGVuZXIiLCJsaXN0ZW5lciIsImhhc0xpc3RlbmVyIiwicmVtb3ZlTGlzdGVuZXIiLCJvblJlcXVlc3RGaW5pc2hlZFdyYXBwZXJzIiwib25SZXF1ZXN0RmluaXNoZWQiLCJyZXEiLCJ3cmFwcGVkUmVxIiwiZ2V0Q29udGVudCIsIm9uTWVzc2FnZVdyYXBwZXJzIiwib25NZXNzYWdlIiwic2VuZGVyIiwic2VuZFJlc3BvbnNlIiwiZGlkQ2FsbFNlbmRSZXNwb25zZSIsIndyYXBwZWRTZW5kUmVzcG9uc2UiLCJzZW5kUmVzcG9uc2VQcm9taXNlIiwicmVzcG9uc2UiLCJyZXN1bHQiLCJlcnIiLCJpc1Jlc3VsdFRoZW5hYmxlIiwic2VuZFByb21pc2VkUmVzdWx0IiwibXNnIiwiZXJyb3IiLCJfX21veldlYkV4dGVuc2lvblBvbHlmaWxsUmVqZWN0X18iLCJjYXRjaCIsIndyYXBwZWRTZW5kTWVzc2FnZUNhbGxiYWNrIiwicmVwbHkiLCJ3cmFwcGVkU2VuZE1lc3NhZ2UiLCJhcGlOYW1lc3BhY2VPYmoiLCJ3cmFwcGVkQ2IiLCJwdXNoIiwic2VuZE1lc3NhZ2UiLCJzdGF0aWNXcmFwcGVycyIsImRldnRvb2xzIiwibmV0d29yayIsIm9uTWVzc2FnZUV4dGVybmFsIiwidGFicyIsInNldHRpbmdNZXRhZGF0YSIsImNsZWFyIiwicHJpdmFjeSIsInNlcnZpY2VzIiwid2Vic2l0ZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiY3JlYXRlU2lkZWJhclBhbmUiLCJzaWRlYmFyIiwicGFuZWxzIiwiZWxlbWVudHMiLCJzZXRIZWlnaHQiLCJzZXRQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==