(self["webpackChunkbrowser_extension"] = self["webpackChunkbrowser_extension"] || []).push([["pages/devtools-elements-sidebar"],{

/***/ "./Extension/src/common/messages/constants.ts":
/*!****************************************************!*\
  !*** ./Extension/src/common/messages/constants.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APP_MESSAGE_HANDLER_NAME: () => (/* binding */ APP_MESSAGE_HANDLER_NAME),
/* harmony export */   MessageType: () => (/* binding */ MessageType)
/* harmony export */ });
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
 */ /**
 * Important: do not use z.inferOf, because it brings a lot of side effects with
 * many dependencies to the bundle.
 *
 * Also please try, if possible, to not import here external modules
 * other that types.
 */ const APP_MESSAGE_HANDLER_NAME = 'app';
/**
 * Message types used for message passing between extension contexts
 * (popup, filtering log, content scripts, background)
 */ var MessageType = /*#__PURE__*/ function(MessageType) {
    MessageType["CreateEventListener"] = "createEventListener";
    MessageType["RemoveListener"] = "removeListener";
    MessageType["OpenExtensionStore"] = "openExtensionStore";
    MessageType["AddAndEnableFilter"] = "addAndEnableFilter";
    MessageType["ApplySettingsJson"] = "applySettingsJson";
    MessageType["OpenFilteringLog"] = "openFilteringLog";
    MessageType["OpenFullscreenUserRules"] = "openFullscreenUserRules";
    MessageType["UpdateFullscreenUserRulesTheme"] = "updateFullscreenUserRulesTheme";
    MessageType["ResetBlockedAdsCount"] = "resetBlockedAdsCount";
    MessageType["ResetSettings"] = "resetSettings";
    MessageType["GetUserRules"] = "getUserRules";
    MessageType["SaveUserRules"] = "saveUserRules";
    MessageType["GetAllowlistDomains"] = "getAllowlistDomains";
    MessageType["SaveAllowlistDomains"] = "saveAllowlistDomains";
    MessageType["CheckFiltersUpdate"] = "checkFiltersUpdate";
    MessageType["CheckExtensionUpdateMv3"] = "checkExtensionUpdateMv3";
    MessageType["UpdateExtensionMv3"] = "updateExtensionMv3";
    MessageType["DisableFiltersGroup"] = "disableFiltersGroup";
    MessageType["DisableFilter"] = "disableFilter";
    MessageType["LoadCustomFilterInfo"] = "loadCustomFilterInfo";
    MessageType["SubscribeToCustomFilter"] = "subscribeToCustomFilter";
    MessageType["RemoveAntiBannerFilter"] = "removeAntiBannerFilter";
    MessageType["GetIsAppInitialized"] = "getIsAppInitialized";
    MessageType["GetTabInfoForPopup"] = "getTabInfoForPopup";
    MessageType["ChangeApplicationFilteringPaused"] = "changeApplicationFilteringPaused";
    MessageType["OpenRulesLimitsTab"] = "openRulesLimitsTab";
    MessageType["OpenSettingsTab"] = "openSettingsTab";
    MessageType["OpenAssistant"] = "openAssistant";
    MessageType["OpenAbuseTab"] = "openAbuseTab";
    MessageType["OpenSiteReportTab"] = "openSiteReportTab";
    MessageType["OpenComparePage"] = "openComparePage";
    MessageType["OpenChromeExtensionsSettingsPage"] = "openChromeExtensionsSettingsPage";
    MessageType["OpenExtensionDetailsPage"] = "openExtensionDetailsPage";
    MessageType["ResetUserRulesForPage"] = "resetUserRulesForPage";
    MessageType["RemoveAllowlistDomain"] = "removeAllowlistDomain";
    MessageType["AddAllowlistDomainForTabId"] = "addAllowlistDomainForTabId";
    MessageType["AddAllowlistDomainForUrl"] = "addAllowlistDomainForUrl";
    MessageType["OnOpenFilteringLogPage"] = "onOpenFilteringLogPage";
    MessageType["GetFilteringLogData"] = "getFilteringLogData";
    MessageType["InitializeFrameScript"] = "initializeFrameScript";
    MessageType["InitializeBlockingPageScript"] = "initializeBlockingPageScript";
    MessageType["OnCloseFilteringLogPage"] = "onCloseFilteringLogPage";
    MessageType["GetFilteringInfoByTabId"] = "getFilteringInfoByTabId";
    MessageType["SynchronizeOpenTabs"] = "synchronizeOpenTabs";
    MessageType["ClearEventsByTabId"] = "clearEventsByTabId";
    MessageType["RefreshPage"] = "refreshPage";
    MessageType["AddUserRule"] = "addUserRule";
    MessageType["RemoveUserRule"] = "removeUserRule";
    MessageType["EnableFiltersGroup"] = "enableFiltersGroup";
    MessageType["NotifyListeners"] = "notifyListeners";
    MessageType["AddLongLivedConnection"] = "addLongLivedConnection";
    MessageType["GetOptionsData"] = "getOptionsData";
    MessageType["ChangeUserSettings"] = "changeUserSetting";
    MessageType["CheckRequestFilterReady"] = "checkRequestFilterReady";
    MessageType["OpenThankyouPage"] = "openThankYouPage";
    MessageType["OpenSafebrowsingTrusted"] = "openSafebrowsingTrusted";
    MessageType["GetSelectorsAndScripts"] = "getSelectorsAndScripts";
    MessageType["CheckPageScriptWrapperRequest"] = "checkPageScriptWrapperRequest";
    MessageType["ProcessShouldCollapse"] = "processShouldCollapse";
    MessageType["ProcessShouldCollapseMany"] = "processShouldCollapseMany";
    MessageType["AddFilteringSubscription"] = "addFilterSubscription";
    MessageType["SetNotificationViewed"] = "setNotificationViewed";
    MessageType["SaveCssHitsStats"] = "saveCssHitStats";
    MessageType["GetCookieRules"] = "getCookieRules";
    MessageType["SaveCookieLogEvent"] = "saveCookieRuleEvent";
    MessageType["LoadSettingsJson"] = "loadSettingsJson";
    MessageType["AddUrlToTrusted"] = "addUrlToTrusted";
    MessageType["SetPreserveLogState"] = "setPreserveLogState";
    MessageType["GetUserRulesEditorData"] = "getUserRulesEditorData";
    MessageType["GetEditorStorageContent"] = "getEditorStorageContent";
    MessageType["SetEditorStorageContent"] = "setEditorStorageContent";
    MessageType["SetFilteringLogWindowState"] = "setFilteringLogWindowState";
    MessageType["AppInitialized"] = "appInitialized";
    MessageType["UpdateTotalBlocked"] = "updateTotalBlocked";
    MessageType["ScriptletCloseWindow"] = "scriptletCloseWindow";
    MessageType["ShowRuleLimitsAlert"] = "showRuleLimitsAlert";
    MessageType["ShowAlertPopup"] = "showAlertPopup";
    MessageType["ShowVersionUpdatedPopup"] = "showVersionUpdatedPopup";
    MessageType["UpdateListeners"] = "updateListeners";
    MessageType["SetConsentedFilters"] = "setConsentedFilters";
    MessageType["GetIsConsentedFilter"] = "getIsConsentedFilter";
    MessageType["SendTelemetryCustomEvent"] = "sendTelemetryCustomEvent";
    MessageType["SendTelemetryPageViewEvent"] = "sendTelemetryPageViewEvent";
    MessageType["AddTelemetryOpenedPage"] = "addTelemetryOpenedPage";
    MessageType["RemoveTelemetryOpenedPage"] = "removeTelemetryOpenedPage";
    MessageType["GetRulesLimitsCountersMv3"] = "getRulesLimitsCountersMv3";
    MessageType["CanEnableStaticFilterMv3"] = "canEnableStaticFilterMv3";
    MessageType["CanEnableStaticGroupMv3"] = "canEnableStaticGroupMv3";
    MessageType["ClearRulesLimitsWarningMv3"] = "clearRulesLimitsWarningMv3";
    MessageType["RestoreFiltersMv3"] = "restoreFiltersMv3";
    MessageType["CurrentLimitsMv3"] = "currentLimitsMv3";
    return MessageType;
}({});


/***/ }),

/***/ "./Extension/src/common/messages/index.ts":
/*!************************************************!*\
  !*** ./Extension/src/common/messages/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APP_MESSAGE_HANDLER_NAME: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.APP_MESSAGE_HANDLER_NAME),
/* harmony export */   MessageType: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.MessageType),
/* harmony export */   messageHasTypeAndDataFields: () => (/* reexport safe */ _message_handler__WEBPACK_IMPORTED_MODULE_2__.messageHasTypeAndDataFields),
/* harmony export */   messageHasTypeField: () => (/* reexport safe */ _message_handler__WEBPACK_IMPORTED_MODULE_2__.messageHasTypeField)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./Extension/src/common/messages/constants.ts");
/* harmony import */ var _send_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./send-message */ "./Extension/src/common/messages/send-message.ts");
/* harmony import */ var _message_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message-handler */ "./Extension/src/common/messages/message-handler.ts");
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
 */ // Since exports from './constants' are: the MessageType enum and a lot of types,
// and imports there are types only, so it should not affect bundle size
// eslint-disable-next-line no-restricted-syntax





/***/ }),

/***/ "./Extension/src/common/messages/message-handler.ts":
/*!**********************************************************!*\
  !*** ./Extension/src/common/messages/message-handler.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   messageHasTypeAndDataFields: () => (/* binding */ messageHasTypeAndDataFields),
/* harmony export */   messageHasTypeField: () => (/* binding */ messageHasTypeField)
/* harmony export */ });
/* unused harmony export MessageHandler */
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webextension-polyfill */ "./node_modules/.pnpm/webextension-polyfill@0.12.0/node_modules/webextension-polyfill/dist/browser-polyfill.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./Extension/src/common/messages/constants.ts");
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
 */ function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}



/**
 * Type guard for messages that have a 'type' field with possible {@link MessageType}.
 *
 * @note Added to no bring here huge zod library.
 *
 * @param message Unknown message.
 *
 * @returns True if message has 'type' field with possible {@link MessageType}.
 */ const messageHasTypeField = (message)=>{
    return typeof message === 'object' && message !== null && 'type' in message;
};
/**
 * Type guard for messages that have a 'type' field and 'data' field and looks like {@link Message}.
 *
 * @note Added to no bring here huge zod library.
 *
 * @param message Unknown message.
 *
 * @returns True if message has 'type' and 'data' fields and looks like {@link Message}.
 */ const messageHasTypeAndDataFields = (message)=>{
    return messageHasTypeField(message) && 'data' in message;
};
/**
 * API for handling Messages via {@link browser.runtime.onMessage}
 */ class MessageHandler {
    init() {
        webextension_polyfill__WEBPACK_IMPORTED_MODULE_1__["default"].runtime.onMessage.addListener(this.handleMessage);
    }
    /**
     * Add message listener.
     * Listeners limited to 1 per message type to prevent race
     * condition while response processing.
     *
     * TODO: implement listeners priority execution strategy
     *
     * @param type - {@link ValidMessageTypes}
     * @param listener - {@link MessageListener}
     *
     * @throws error, if message listener already added
     */ addListener(type, listener) {
        if (this.listeners.has(type)) {
            throw new Error(`Message handler: ${type} listener has already been registered`);
        }
        // Cast through unknown to help TS understand that the listener is of
        // the correct type. It will check types at compile time.
        this.listeners.set(type, listener);
    }
    /**
     * Removes message listener.
     *
     * @param type - {@link ValidMessageTypes}
     */ removeListener(type) {
        this.listeners.delete(type);
    }
    /**
     * Removes all listeners
     */ removeListeners() {
        this.listeners.clear();
    }
    /**
     * Check if the message is of type {@link Message}.
     *
     * @param message Message of basic type {@link Message} or {@link EngineMessage}.
     *
     * @returns True if the message is of type {@link Message}.
     */ static isValidMessageType(message) {
        return message.handlerName === _constants__WEBPACK_IMPORTED_MODULE_2__.APP_MESSAGE_HANDLER_NAME && 'type' in message;
    }
    constructor(){
        _define_property(this, "listeners", new Map());
        this.handleMessage = this.handleMessage.bind(this);
    }
}


/***/ }),

/***/ "./Extension/src/common/messages/send-message.ts":
/*!*******************************************************!*\
  !*** ./Extension/src/common/messages/send-message.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony exports sendMessage, sendTabMessage */
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webextension-polyfill */ "./node_modules/.pnpm/webextension-polyfill@0.12.0/node_modules/webextension-polyfill/dist/browser-polyfill.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./Extension/src/common/messages/constants.ts");
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

/**
 * TODO: Consider moving this file to the background folder, because all messages
 * from the UI should be send via methods of Messenger class instead of using
 * directly sendMessage to proper types checking.
 *
 * {@link sendMessage} sends app message via {@link browser.runtime.sendMessage} and
 * gets response from another extension page message handler
 *
 * @param message - partial {@link Message} record without {@link Message.handlerName} field
 *
 * @returns message handler response
 */ async function sendMessage(message) {
    try {
        return await webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__["default"].runtime.sendMessage({
            handlerName: _constants__WEBPACK_IMPORTED_MODULE_1__.APP_MESSAGE_HANDLER_NAME,
            ...message
        });
    } catch (e) {
    // do nothing
    }
}
/**
 * {@link sendTabMessage} sends message to specified tab via {@link browser.tabs.sendMessage} and
 * gets response from it
 *
 * @param tabId - tab id
 * @param message - partial {@link Message} record without {@link Message.handlerName} field
 *
 * @returns tab message handler response
 */ async function sendTabMessage(tabId, message) {
    return webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__["default"].tabs.sendMessage(tabId, {
        handlerName: _constants__WEBPACK_IMPORTED_MODULE_1__.APP_MESSAGE_HANDLER_NAME,
        ...message
    });
}


/***/ }),

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

/***/ "./Extension/pages/devtools/devtools-elements-sidebar.js":
/*!***************************************************************!*\
  !*** ./Extension/pages/devtools/devtools-elements-sidebar.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _src_pages_devtools_elements_sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/pages/devtools-elements-sidebar */ "./Extension/src/pages/devtools-elements-sidebar.js");
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
_src_pages_devtools_elements_sidebar__WEBPACK_IMPORTED_MODULE_0__.devtoolsElementsSidebar.init();


/***/ }),

/***/ "./Extension/src/pages/devtools-elements-sidebar.js":
/*!**********************************************************!*\
  !*** ./Extension/src/pages/devtools-elements-sidebar.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   devtoolsElementsSidebar: () => (/* binding */ devtoolsElementsSidebar)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var _common_messages_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/messages/index */ "./Extension/src/common/messages/index.ts");
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
 */ /* eslint-disable no-nested-ternary */ 

const browser = window.browser || chrome;
const devtoolsElementsSidebar = (()=>{
    const initPanel = function() {
        initTheme();
        initElements();
        bindEvents();
        const onElementSelected = function() {
            browser.devtools.inspectedWindow.eval('DevToolsRulesConstructor.getElementInfo($0)', {
                useContentScriptContext: true
            }, (info)=>{
                if (!info) {
                    return;
                }
                // Sort attributes
                info.attributes.sort((a1, a2)=>{
                    const i1 = a1.name === 'id' ? 0 : a1.name === 'class' ? 1 : 2;
                    const i2 = a2.name === 'id' ? 0 : a2.name === 'class' ? 1 : 2;
                    return i1 - i2;
                });
                window.selectedElementInfo = info;
                updateRule();
                handleShowBlockSettings(info.haveUrlBlockParameter, info.haveClassAttribute && !info.haveIdAttribute);
                setupAttributesInfo(info);
            });
        };
        const onPageChanged = function() {
            document.getElementById('preview-rule-button').value = 'Preview';
            delete window.adguardDevToolsPreview;
        };
        if (browser.devtools) {
            browser.devtools.panels.elements.onSelectionChanged.addListener(onElementSelected);
            browser.devtools.network.onNavigated.addListener(onPageChanged);
        }
        onElementSelected();
    };
    const initTheme = function() {
        const theme = browser.devtools.panels.themeName;
        if (theme === 'dark') {
            document.body.classList.add('-theme-with-dark-background');
        }
    };
    const initElements = function() {
        document.querySelector('#block-by-url-checkbox').checked = false;
        document.querySelector('#create-full-css-path').checked = false;
        document.querySelector('#one-domain-checkbox').checked = true;
        document.querySelector('#filter-rule-text').value = '';
        const placeholder = document.getElementById('attributes-block');
        while(placeholder.firstChild){
            placeholder.removeChild(placeholder.firstChild);
        }
    };
    const updateRule = function() {
        getInspectedPageUrl((url)=>{
            updateFilterRuleInput(window.selectedElementInfo, url);
        });
    };
    const bindEvents = function() {
        const previewRuleButton = document.getElementById('preview-rule-button');
        previewRuleButton.addEventListener('click', (e)=>{
            e.preventDefault();
            if (window.selectedElementInfo) {
                if (window.adguardDevToolsPreview) {
                    // Remove preview
                    cancelPreview();
                    previewRuleButton.value = 'Preview';
                    delete window.adguardDevToolsPreview;
                    return;
                }
                const ruleText = document.getElementById('filter-rule-text').value;
                if (!ruleText) {
                    return;
                }
                applyPreview(ruleText);
                previewRuleButton.value = 'Cancel preview';
                window.adguardDevToolsPreview = true;
            }
        });
        document.getElementById('add-rule-button').addEventListener('click', (e)=>{
            e.preventDefault();
            if (window.selectedElementInfo) {
                addRuleForElement();
            }
        });
        const updateRuleBlocks = document.querySelectorAll('.update-rule-block');
        updateRuleBlocks.forEach((block)=>{
            block.addEventListener('click', ()=>{
                updatePanelElements();
                updateRule();
            });
        });
        document.getElementById('select-attributes-checkbox').addEventListener('click', (e)=>{
            const { checked } = e.currentTarget;
            const attributeCheckBoxes = document.querySelectorAll('.attribute-check-box');
            attributeCheckBoxes.forEach((el)=>{
                el.checked = checked;
            });
            updatePanelElements();
            updateRule();
        });
    };
    const updatePanelElements = function() {
        const checkboxes = document.querySelectorAll('#one-domain-checkbox, #create-full-css-path, .attribute-check-box');
        // All checkboxes should be disabled if block by url is checked
        if (document.querySelector('#block-by-url-checkbox').checked) {
            checkboxes.forEach((checkbox)=>{
                checkbox.setAttribute('disabled', 'disabled');
            });
        } else {
            checkboxes.forEach((checkbox)=>{
                checkbox.removeAttribute('disabled');
            });
        }
    };
    const handleShowBlockSettings = function(showBlockByUrl, createFullCssPath) {
        if (showBlockByUrl) {
            document.querySelector('#block-by-url-checkbox-block').style.display = 'block';
        } else {
            document.querySelector('#block-by-url-checkbox').checked = false;
            document.querySelector('#block-by-url-checkbox-block').style.display = 'none';
        }
        if (createFullCssPath) {
            document.querySelector('#create-full-css-path-block').style.display = 'block';
            document.querySelector('#create-full-css-path').checked = false;
        } else {
            document.querySelector('#create-full-css-path').checked = true;
            document.querySelector('#create-full-css-path-block').style.display = 'none';
        }
    };
    const setupAttributesInfo = function(info) {
        const placeholder = document.getElementById('attributes-block');
        while(placeholder.firstChild){
            placeholder.removeChild(placeholder.firstChild);
        }
        const createAttributeElement = (attributeName, attributeValue, defaultChecked)=>{
            const checked = defaultChecked ? 'checked="true"' : '';
            const elHtml = `
                    <li class="parent">
                        <input class="enabled-button attribute-check-box" type="checkbox" id="attribute-check-box-${attributeName}" ${checked}>
                        <span class="webkit-css-property">${attributeName}</span>:
                        <span class="value attribute-check-box-value">${attributeValue}</span>
                    </li>
            `;
            const tmpEl = document.createElement('div');
            tmpEl.innerHTML = elHtml;
            return tmpEl.firstElementChild;
        };
        if (info.tagName) {
            placeholder.appendChild(createAttributeElement('tag', info.tagName.toLowerCase(), true));
        }
        for(let i = 0; i < info.attributes.length; i += 1){
            const attribute = info.attributes[i];
            if (attribute.name === 'class' && attribute.value) {
                const split = attribute.value.split(' ');
                for(let j = 0; j < split.length; j += 1){
                    const value = split[j];
                    if (value) {
                        placeholder.appendChild(createAttributeElement(attribute.name, value, true));
                    }
                }
            } else {
                placeholder.appendChild(createAttributeElement(attribute.name, attribute.value, attribute.name === 'id'));
            }
        }
        if (placeholder.childNodes.length > 2) {
            document.querySelector('#select-attributes-checkbox').style.display = 'inline';
        } else {
            document.querySelector('#select-attributes-checkbox').style.display = 'none';
        }
    };
    const getInspectedPageUrl = function(callback) {
        browser.devtools.inspectedWindow.eval('document.location && document.location.href', (result)=>{
            callback(result);
        });
    };
    const updateFilterRuleInput = function(info, url) {
        const isBlockByUrl = document.querySelector('#block-by-url-checkbox').checked;
        const createFullCssPath = document.querySelector('#create-full-css-path').checked;
        const isBlockOneDomain = document.querySelector('#one-domain-checkbox').checked;
        let includeTagName = true;
        let includeElementId = true;
        const selectedClasses = [];
        let attributesSelector = '';
        document.querySelectorAll('.attribute-check-box').forEach((el)=>{
            if (el) {
                const attrName = el.id.substring('attribute-check-box-'.length);
                if (attrName === 'tag') {
                    includeTagName = el.checked;
                } else if (attrName === 'id') {
                    includeElementId = el.checked;
                } else if (el.checked) {
                    const attrValue = el.parentNode.querySelector('.attribute-check-box-value').innerText;
                    if (attrName === 'class') {
                        selectedClasses.push(attrValue);
                    } else {
                        attributesSelector += `[${attrName}="${attrValue}"]`;
                    }
                }
            }
        });
        const options = {
            urlMask: info.urlBlockAttributeValue,
            isBlockOneDomain: !isBlockOneDomain,
            url,
            ruleType: isBlockByUrl ? 'URL' : 'CSS',
            cssSelectorType: createFullCssPath ? 'STRICT_FULL' : 'STRICT',
            attributes: attributesSelector,
            excludeTagName: !includeTagName,
            excludeId: !includeElementId,
            classList: selectedClasses
        };
        const func = `DevToolsRulesConstructor.constructRuleText($0, ${JSON.stringify(options)});`;
        browser.devtools.inspectedWindow.eval(func, {
            useContentScriptContext: true
        }, (result)=>{
            if (result) {
                document.getElementById('filter-rule-text').value = result;
            }
        });
    };
    const applyPreview = function(ruleText) {
        const func = `DevToolsHelper.applyPreview(${JSON.stringify({
            ruleText
        })});`;
        browser.devtools.inspectedWindow.eval(func, {
            useContentScriptContext: true
        });
    };
    const cancelPreview = function() {
        const func = 'DevToolsHelper.cancelPreview();';
        browser.devtools.inspectedWindow.eval(func, {
            useContentScriptContext: true
        });
    };
    /**
     * Adds userrule via background page
     * We add rule via background page to mitigate vulnerabilities
     * related with messages from content script
     *
     * @param {string} ruleText
     *
     * @returns {Promise<void>}
     */ const addRule = async (ruleText)=>{
        return browser.runtime.sendMessage({
            handlerName: _common_messages_index__WEBPACK_IMPORTED_MODULE_1__.APP_MESSAGE_HANDLER_NAME,
            type: _common_messages_index__WEBPACK_IMPORTED_MODULE_1__.MessageType.AddUserRule,
            data: {
                ruleText
            }
        });
    };
    const addRuleForElement = async ()=>{
        if (window.adguardDevToolsPreview) {
            // Remove preview
            cancelPreview();
        }
        const ruleText = document.getElementById('filter-rule-text').value;
        if (!ruleText) {
            return;
        }
        await addRule(ruleText);
        applyPreview(ruleText);
        delete window.selectedElementInfo;
        initElements();
    };
    const init = ()=>{
        document.addEventListener('DOMContentLoaded', ()=>{
            initPanel();
        });
    };
    return {
        init
    };
})();


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./Extension/pages/devtools/devtools-elements-sidebar.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvZGV2dG9vbHMtZWxlbWVudHMtc2lkZWJhci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQWtCQyxHQUVEOzs7Ozs7Q0FNQyxHQTJCTSxNQUFNQSwyQkFBMkIsTUFBTTtBQU05Qzs7O0NBR0MsR0FDTSx5Q0FBS0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1dBQUFBO01BNEZYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzSkQ7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQWtCQyxHQUVELGlGQUFpRjtBQUNqRix3RUFBd0U7QUFDeEUsZ0RBQWdEO0FBQ3BCO0FBQ2lDO0FBQ3dDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QnJHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FrQkM7Ozs7Ozs7Ozs7Ozs7QUF5SEE7QUF4SDZEO0FBV3pDO0FBT3JCOzs7Ozs7OztDQVFDLEdBQ00sTUFBTUksc0JBQXNCLENBQUNHO0lBQ2hDLE9BQU8sT0FBT0EsWUFBWSxZQUFZQSxZQUFZLFFBQVEsVUFBVUE7QUFDeEUsRUFBRTtBQUVGOzs7Ozs7OztDQVFDLEdBQ00sTUFBTUYsOEJBQThCLENBQUNFO0lBQ3hDLE9BQU9ILG9CQUFvQkcsWUFBWSxVQUFVQTtBQUNyRCxFQUFFO0FBRUY7O0NBRUMsR0FDTSxNQUFlSjtJQU9YSyxPQUFhO1FBQ2hCRiw2REFBT0EsQ0FBQ0csT0FBTyxDQUFDQyxTQUFTLENBQUNDLFdBQVcsQ0FBQyxJQUFJLENBQUNDLGFBQWE7SUFDNUQ7SUFFQTs7Ozs7Ozs7Ozs7S0FXQyxHQUNELFlBQ0lDLElBQU8sRUFDUEMsUUFBNEIsRUFDeEI7UUFDSixJQUFJLElBQUksQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUNILE9BQU87WUFDMUIsTUFBTSxJQUFJSSxNQUFNLENBQUMsaUJBQWlCLEVBQUVKLEtBQUsscUNB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QUNIcEk7SUFDSjtBQUNKLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uL0V4dGVuc2lvbi9zcmMvY29tbW9uL21lc3NhZ2VzL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uL0V4dGVuc2lvbi9zcmMvY29tbW9uL21lc3NhZ2VzL2luZGV4LnRzIiwid2VicGFjazovL2Jyb3dzZXItZXh0ZW5zaW9uLy4vRXh0ZW5zaW9uL3NyYy9jb21tb24vbWVzc2FnZXMvbWVzc2FnZS1oYW5kbGVyLnRzIiwid2VicGFjazovL2Jyb3dzZXItZXh0ZW5zaW9uLy4vRXh0ZW5zaW9uL3NyYy9jb21tb24vbWVzc2FnZXMvc2VuZC1tZXNzYWdlLnRzIiwid2VicGFjazovL2Jyb3dzZXItZXh0ZW5zaW9uL2Jyb3dzZXItcG9seWZpbGwuanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi9FeHRlbnNpb24vcGFnZXMvZGV2dG9vbHMvZGV2dG9vbHMtZWxlbWVudHMtc2lkZWJhci5qcyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uL0V4dGVuc2lvbi9zcmMvcGFnZXMvZGV2dG9vbHMtZWxlbWVudHMtc2lkZWJhci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNS0yMDI1IEFkZ3VhcmQgU29mdHdhcmUgTHRkLlxuICpcbiAqIEBmaWxlXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBBZEd1YXJkIEJyb3dzZXIgRXh0ZW5zaW9uIChodHRwczovL2dpdGh1Yi5jb20vQWRndWFyZFRlYW0vQWRndWFyZEJyb3dzZXJFeHRlbnNpb24pLlxuICpcbiAqIEFkR3VhcmQgQnJvd3NlciBFeHRlbnNpb24gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIEFkR3VhcmQgQnJvd3NlciBFeHRlbnNpb24gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggQWRHdWFyZCBCcm93c2VyIEV4dGVuc2lvbi4gSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5cbi8qKlxuICogSW1wb3J0YW50OiBkbyBub3QgdXNlIHouaW5mZXJPZiwgYmVjYXVzZSBpdCBicmluZ3MgYSBsb3Qgb2Ygc2lkZSBlZmZlY3RzIHdpdGhcbiAqIG1hbnkgZGVwZW5kZW5jaWVzIHRvIHRoZSBidW5kbGUuXG4gKlxuICogQWxzbyBwbGVhc2UgdHJ5LCBpZiBwb3NzaWJsZSwgdG8gbm90IGltcG9ydCBoZXJlIGV4dGVybmFsIG1vZHVsZXNcbiAqIG90aGVyIHRoYXQgdHlwZXMuXG4gKi9cbmltcG9ydCB7IHR5cGUgV2luZG93cyB9IGZyb20gJ3dlYmV4dGVuc2lvbi1wb2x5ZmlsbCc7XG5cbmltcG9ydCB7IHR5cGUgRm9yd2FyZEZyb20gfSBmcm9tICcuLi9mb3J3YXJkJztcbmltcG9ydCB7IHR5cGUgU2V0dGluZ09wdGlvbiwgdHlwZSBTZXR0aW5ncyB9IGZyb20gJy4uLy4uL2JhY2tncm91bmQvc2NoZW1hL3NldHRpbmdzJztcbmltcG9ydCB7IHR5cGUgQ3VzdG9tRmlsdGVyTWV0YWRhdGEgfSBmcm9tICcuLi8uLi9iYWNrZ3JvdW5kL3NjaGVtYS9jdXN0b20tZmlsdGVyLW1ldGFkYXRhJztcbmltcG9ydCB7IHR5cGUgTm90aWZpZXJUeXBlIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IHR5cGUgQXBwZWFyYW5jZVRoZW1lIH0gZnJvbSAnLi4vc2V0dGluZ3MnO1xuaW1wb3J0IHsgdHlwZSBGaWx0ZXJpbmdMb2dUYWJJbmZvIH0gZnJvbSAnLi4vLi4vYmFja2dyb3VuZC9hcGkvZmlsdGVyaW5nLWxvZyc7XG5pbXBvcnQgeyB0eXBlIEdldFRhYkluZm9Gb3JQb3B1cFJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vYmFja2dyb3VuZC9zZXJ2aWNlcy91aS9wb3B1cCc7XG5pbXBvcnQgeyB0eXBlIEdldEZpbHRlcmluZ0xvZ0RhdGFSZXNwb25zZSB9IGZyb20gJy4uLy4uL2JhY2tncm91bmQvc2VydmljZXMvZmlsdGVyaW5nLWxvZyc7XG5pbXBvcnQge1xuICAgIHR5cGUgSVJ1bGVzTGltaXRzLFxuICAgIHR5cGUgTXYzTGltaXRzQ2hlY2tSZXN1bHQsXG4gICAgdHlwZSBTdGF0aWNMaW1pdHNDaGVja1Jlc3VsdCxcbn0gZnJvbSAnLi4vLi4vYmFja2dyb3VuZC9zZXJ2aWNlcy9ydWxlcy1saW1pdHMvaW50ZXJmYWNlJztcbmltcG9ydCB7IHR5cGUgQmxvY2tpbmdQYWdlSW5pdEFwcERhdGEsIHR5cGUgUGFnZUluaXRBcHBEYXRhIH0gZnJvbSAnLi4vLi4vYmFja2dyb3VuZC9zZXJ2aWNlcy91aS9tYWluJztcbmltcG9ydCB7IHR5cGUgRXhwb3J0TWVzc2FnZVJlc3BvbnNlLCB0eXBlIEdldE9wdGlvbnNEYXRhUmVzcG9uc2UgfSBmcm9tICcuLi8uLi9iYWNrZ3JvdW5kL3NlcnZpY2VzL3NldHRpbmdzL3R5cGVzJztcbmltcG9ydCB7IHR5cGUgQ3JlYXRlRXZlbnRMaXN0ZW5lclJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vYmFja2dyb3VuZC9zZXJ2aWNlcy9ldmVudCc7XG5pbXBvcnQgeyB0eXBlIEZpbHRlck1ldGFkYXRhIH0gZnJvbSAnLi4vLi4vYmFja2dyb3VuZC9hcGkvZmlsdGVycy9tYWluJztcbmltcG9ydCB7IHR5cGUgR2V0QWxsb3dsaXN0RG9tYWluc1Jlc3BvbnNlIH0gZnJvbSAnLi4vLi4vYmFja2dyb3VuZC9zZXJ2aWNlcy9hbGxvd2xpc3QnO1xuaW1wb3J0IHsgdHlwZSBHZXRVc2VyUnVsZXNFZGl0b3JEYXRhUmVzcG9uc2UsIHR5cGUgR2V0VXNlclJ1bGVzUmVzcG9uc2UgfSBmcm9tICcuLi8uLi9iYWNrZ3JvdW5kL3NlcnZpY2VzL3VzZXJydWxlcyc7XG5pbXBvcnQgeyB0eXBlIEdldEN1c3RvbUZpbHRlckluZm9SZXN1bHQgfSBmcm9tICcuLi8uLi9iYWNrZ3JvdW5kL2FwaS9maWx0ZXJzL2N1c3RvbSc7XG5pbXBvcnQgeyB0eXBlIE1hbnVhbFVwZGF0ZU1ldGFkYXRhIH0gZnJvbSAnLi4vLi4vYmFja2dyb3VuZC9zZXJ2aWNlcy9leHRlbnNpb24tdXBkYXRlL3R5cGVzJztcbmltcG9ydCB7IHR5cGUgVGVsZW1ldHJ5RXZlbnROYW1lLCB0eXBlIFRlbGVtZXRyeVNjcmVlbk5hbWUgfSBmcm9tICcuLi8uLi9iYWNrZ3JvdW5kL3NlcnZpY2VzL3RlbGVtZXRyeSc7XG5pbXBvcnQgeyB0eXBlIFRlbGVtZXRyeUFjdGlvblRvU2NyZWVuTWFwIH0gZnJvbSAnLi4vLi4vYmFja2dyb3VuZC9zZXJ2aWNlcy90ZWxlbWV0cnkvZW51bXMnO1xuXG5leHBvcnQgY29uc3QgQVBQX01FU1NBR0VfSEFORExFUl9OQU1FID0gJ2FwcCc7XG5cbmV4cG9ydCB0eXBlIE1lc3NhZ2VDb21tb25Qcm9wcyA9IHtcbiAgICBoYW5kbGVyTmFtZTogdHlwZW9mIEFQUF9NRVNTQUdFX0hBTkRMRVJfTkFNRTtcbn07XG5cbi8qKlxuICogTWVzc2FnZSB0eXBlcyB1c2VkIGZvciBtZXNzYWdlIHBhc3NpbmcgYmV0d2VlbiBleHRlbnNpb24gY29udGV4dHNcbiAqIChwb3B1cCwgZmlsdGVyaW5nIGxvZywgY29udGVudCBzY3JpcHRzLCBiYWNrZ3JvdW5kKVxuICovXG5leHBvcnQgZW51bSBNZXNzYWdlVHlwZSB7XG4gICAgQ3JlYXRlRXZlbnRMaXN0ZW5lciA9ICdjcmVhdGVFdmVudExpc3RlbmVyJyxcbiAgICBSZW1vdmVMaXN0ZW5lciA9ICdyZW1vdmVMaXN0ZW5lcicsXG4gICAgT3BlbkV4dGVuc2lvblN0b3JlID0gJ29wZW5FeHRlbnNpb25TdG9yZScsXG4gICAgQWRkQW5kRW5hYmxlRmlsdGVyID0gJ2FkZEFuZEVuYWJsZUZpbHRlcicsXG4gICAgQXBwbHlTZXR0aW5nc0pzb24gPSAnYXBwbHlTZXR0aW5nc0pzb24nLFxuICAgIE9wZW5GaWx0ZXJpbmdMb2cgPSAnb3BlbkZpbHRlcmluZ0xvZycsXG4gICAgT3BlbkZ1bGxzY3JlZW5Vc2VyUnVsZXMgPSAnb3BlbkZ1bGxzY3JlZW5Vc2VyUnVsZXMnLFxuICAgIFVwZGF0ZUZ1bGxzY3JlZW5Vc2VyUnVsZXNUaGVtZSA9ICd1cGRhdGVGdWxsc2NyZWVuVXNlclJ1bGVzVGhlbWUnLFxuICAgIFJlc2V0QmxvY2tlZEFkc0NvdW50ID0gJ3Jlc2V0QmxvY2tlZEFkc0NvdW50JyxcbiAgICBSZXNldFNldHRpbmdzID0gJ3Jlc2V0U2V0dGluZ3MnLFxuICAgIEdldFVzZXJSdWxlcyA9ICdnZXRVc2VyUnVsZXMnLFxuICAgIFNhdmVVc2VyUnVsZXMgPSAnc2F2ZVVzZXJSdWxlcycsXG4gICAgR2V0QWxsb3dsaXN0RG9tYWlucyA9ICdnZXRBbGxvd2xpc3REb21haW5zJyxcbiAgICBTYXZlQWxsb3dsaXN0RG9tYWlucyA9ICdzYXZlQWxsb3dsaXN0RG9tYWlucycsXG4gICAgQ2hlY2tGaWx0ZXJzVXBkYXRlID0gJ2NoZWNrRmlsdGVyc1VwZGF0ZScsXG4gICAgQ2hlY2tFeHRlbnNpb25VcGRhdGVNdjMgPSAnY2hlY2tFeHRlbnNpb25VcGRhdGVNdjMnLFxuICAgIFVwZGF0ZUV4dGVuc2lvbk12MyA9ICd1cGRhdGVFeHRlbnNpb25NdjMnLFxuICAgIERpc2FibGVGaWx0ZXJzR3JvdXAgPSAnZGlzYWJsZUZpbHRlcnNHcm91cCcsXG4gICAgRGlzYWJsZUZpbHRlciA9ICdkaXNhYmxlRmlsdGVyJyxcbiAgICBMb2FkQ3VzdG9tRmlsdGVySW5mbyA9ICdsb2FkQ3VzdG9tRmlsdGVySW5mbycsXG4gICAgU3Vic2NyaWJlVG9DdXN0b21GaWx0ZXIgPSAnc3Vic2NyaWJlVG9DdXN0b21GaWx0ZXInLFxuICAgIFJlbW92ZUFudGlCYW5uZXJGaWx0ZXIgPSAncmVtb3ZlQW50aUJhbm5lckZpbHRlcicsXG4gICAgR2V0SXNBcHBJbml0aWFsaXplZCA9ICdnZXRJc0FwcEluaXRpYWxpemVkJyxcbiAgICBHZXRUYWJJbmZvRm9yUG9wdXAgPSAnZ2V0VGFiSW5mb0ZvclBvcHVwJyxcbiAgICBDaGFuZ2VBcHBsaWNhdGlvbkZpbHRlcmluZ1BhdXNlZCA9ICdjaGFuZ2VBcHBsaWNhdGlvbkZpbHRlcmluZ1BhdXNlZCcsXG4gICAgT3BlblJ1bGVzTGltaXRzVGFiID0gJ29wZW5SdWxlc0xpbWl0c1RhYicsXG4gICAgT3BlblNldHRpbmdzVGFiID0gJ29wZW5TZXR0aW5nc1RhYicsXG4gICAgT3BlbkFzc2lzdGFudCA9ICdvcGVuQXNzaXN0YW50JyxcbiAgICBPcGVuQWJ1c2VUYWIgPSAnb3BlbkFidXNlVGFiJyxcbiAgICBPcGVuU2l0ZVJlcG9ydFRhYiA9ICdvcGVuU2l0ZVJlcG9ydFRhYicsXG4gICAgT3BlbkNvbXBhcmVQYWdlID0gJ29wZW5Db21wYXJlUGFnZScsXG4gICAgT3BlbkNocm9tZUV4dGVuc2lvbnNTZXR0aW5nc1BhZ2UgPSAnb3BlbkNocm9tZUV4dGVuc2lvbnNTZXR0aW5nc1BhZ2UnLFxuICAgIE9wZW5FeHRlbnNpb25EZXRhaWxzUGFnZSA9ICdvcGVuRXh0ZW5zaW9uRGV0YWlsc1BhZ2UnLFxuICAgIFJlc2V0VXNlclJ1bGVzRm9yUGFnZSA9ICdyZXNldFVzZXJSdWxlc0ZvclBhZ2UnLFxuICAgIFJlbW92ZUFsbG93bGlzdERvbWFpbiA9ICdyZW1vdmVBbGxvd2xpc3REb21haW4nLFxuICAgIEFkZEFsbG93bGlzdERvbWFpbkZvclRhYklkID0gJ2FkZEFsbG93bGlzdERvbWFpbkZvclRhYklkJyxcbiAgICBBZGRBbGxvd2xpc3REb21haW5Gb3JVcmwgPSAnYWRkQWxsb3dsaXN0RG9tYWluRm9yVXJsJyxcbiAgICBPbk9wZW5GaWx0ZXJpbmdMb2dQYWdlID0gJ29uT3BlbkZpbHRlcmluZ0xvZ1BhZ2UnLFxuICAgIEdldEZpbHRlcmluZ0xvZ0RhdGEgPSAnZ2V0RmlsdGVyaW5nTG9nRGF0YScsXG4gICAgSW5pdGlhbGl6ZUZyYW1lU2NyaXB0ID0gJ2luaXRpYWxpemVGcmFtZVNjcmlwdCcsXG4gICAgSW5pdGlhbGl6ZUJsb2NraW5nUGFnZVNjcmlwdCA9ICdpbml0aWFsaXplQmxvY2tpbmdQYWdlU2NyaXB0JyxcbiAgICBPbkNsb3NlRmlsdGVyaW5nTG9nUGFnZSA9ICdvbkNsb3NlRmlsdGVyaW5nTG9nUGFnZScsXG4gICAgR2V0RmlsdGVyaW5nSW5mb0J5VGFiSWQgPSAnZ2V0RmlsdGVyaW5nSW5mb0J5VGFiSWQnLFxuICAgIFN5bmNocm9uaXplT3BlblRhYnMgPSAnc3luY2hyb25pemVPcGVuVGFicycsXG4gICAgQ2xlYXJFdmVudHNCeVRhYklkID0gJ2NsZWFyRXZlbnRzQnlUYWJJZCcsXG4gICAgUmVmcmVzaFBhZ2UgPSAncmVmcmVzaFBhZ2UnLFxuICAgIEFkZFVzZXJSdWxlID0gJ2FkZFVzZXJSdWxlJyxcbiAgICBSZW1vdmVVc2VyUnVsZSA9ICdyZW1vdmVVc2VyUnVsZScsXG4gICAgRW5hYmxlRmlsdGVyc0dyb3VwID0gJ2VuYWJsZUZpbHRlcnNHcm91cCcsXG4gICAgTm90aWZ5TGlzdGVuZXJzID0gJ25vdGlmeUxpc3RlbmVycycsXG4gICAgQWRkTG9uZ0xpdmVkQ29ubmVjdGlvbiA9ICdhZGRMb25nTGl2ZWRDb25uZWN0aW9uJyxcbiAgICBHZXRPcHRpb25zRGF0YSA9ICdnZXRPcHRpb25zRGF0YScsXG4gICAgQ2hhbmdlVXNlclNldHRpbmdzID0gJ2NoYW5nZVVzZXJTZXR0aW5nJyxcbiAgICBDaGVja1JlcXVlc3RGaWx0ZXJSZWFkeSA9ICdjaGVja1JlcXVlc3RGaWx0ZXJSZWFkeScsXG4gICAgT3BlblRoYW5reW91UGFnZSA9ICdvcGVuVGhhbmtZb3VQYWdlJyxcbiAgICBPcGVuU2FmZWJyb3dzaW5nVHJ1c3RlZCA9ICdvcGVuU2FmZWJyb3dzaW5nVHJ1c3RlZCcsXG4gICAgR2V0U2VsZWN0b3JzQW5kU2NyaXB0cyA9ICdnZXRTZWxlY3RvcnNBbmRTY3JpcHRzJyxcbiAgICBDaGVja1BhZ2VTY3JpcHRXcmFwcGVyUmVxdWVzdCA9ICdjaGVja1BhZ2VTY3JpcHRXcmFwcGVyUmVxdWVzdCcsXG4gICAgUHJvY2Vzc1Nob3VsZENvbGxhcHNlID0gJ3Byb2Nlc3NTaG91bGRDb2xsYXBzZScsXG4gICAgUHJvY2Vzc1Nob3VsZENvbGxhcHNlTWFueSA9ICdwcm9jZXNzU2hvdWxkQ29sbGFwc2VNYW55JyxcbiAgICBBZGRGaWx0ZXJpbmdTdWJzY3JpcHRpb24gPSAnYWRkRmlsdGVyU3Vic2NyaXB0aW9uJyxcbiAgICBTZXROb3RpZmljYXRpb25WaWV3ZWQgPSAnc2V0Tm90aWZpY2F0aW9uVmlld2VkJyxcbiAgICBTYXZlQ3NzSGl0c1N0YXRzID0gJ3NhdmVDc3NIaXRTdGF0cycsXG4gICAgR2V0Q29va2llUnVsZXMgPSAnZ2V0Q29va2llUnVsZXMnLFxuICAgIFNhdmVDb29raWVMb2dFdmVudCA9ICdzYXZlQ29va2llUnVsZUV2ZW50JyxcbiAgICBMb2FkU2V0dGluZ3NKc29uID0gJ2xvYWRTZXR0aW5nc0pzb24nLFxuICAgIEFkZFVybFRvVHJ1c3RlZCA9ICdhZGRVcmxUb1RydXN0ZWQnLFxuICAgIFNldFByZXNlcnZlTG9nU3RhdGUgPSAnc2V0UHJlc2VydmVMb2dTdGF0ZScsXG4gICAgR2V0VXNlclJ1bGVzRWRpdG9yRGF0YSA9ICdnZXRVc2VyUnVsZXNFZGl0b3JEYXRhJyxcbiAgICBHZXRFZGl0b3JTdG9yYWdlQ29udGVudCA9ICdnZXRFZGl0b3JTdG9yYWdlQ29udGVudCcsXG4gICAgU2V0RWRpdG9yU3RvcmFnZUNvbnRlbnQgPSAnc2V0RWRpdG9yU3RvcmFnZUNvbnRlbnQnLFxuICAgIFNldEZpbHRlcmluZ0xvZ1dpbmRvd1N0YXRlID0gJ3NldEZpbHRlcmluZ0xvZ1dpbmRvd1N0YXRlJyxcbiAgICBBcHBJbml0aWFsaXplZCA9ICdhcHBJbml0aWFsaXplZCcsXG4gICAgVXBkYXRlVG90YWxCbG9ja2VkID0gJ3VwZGF0ZVRvdGFsQmxvY2tlZCcsXG4gICAgU2NyaXB0bGV0Q2xvc2VXaW5kb3cgPSAnc2NyaXB0bGV0Q2xvc2VXaW5kb3cnLFxuICAgIFNob3dSdWxlTGltaXRzQWxlcnQgPSAnc2hvd1J1bGVMaW1pdHNBbGVydCcsXG4gICAgU2hvd0FsZXJ0UG9wdXAgPSAnc2hvd0FsZXJ0UG9wdXAnLFxuICAgIFNob3dWZXJzaW9uVXBkYXRlZFBvcHVwID0gJ3Nob3dWZXJzaW9uVXBkYXRlZFBvcHVwJyxcbiAgICBVcGRhdGVMaXN0ZW5lcnMgPSAndXBkYXRlTGlzdGVuZXJzJyxcbiAgICBTZXRDb25zZW50ZWRGaWx0ZXJzID0gJ3NldENvbnNlbnRlZEZpbHRlcnMnLFxuICAgIEdldElzQ29uc2VudGVkRmlsdGVyID0gJ2dldElzQ29uc2VudGVkRmlsdGVyJyxcbiAgICBTZW5kVGVsZW1ldHJ5Q3VzdG9tRXZlbnQgPSAnc2VuZFRlbGVtZXRyeUN1c3RvbUV2ZW50JyxcbiAgICBTZW5kVGVsZW1ldHJ5UGFnZVZpZXdFdmVudCA9ICdzZW5kVGVsZW1ldHJ5UGFnZVZpZXdFdmVudCcsXG4gICAgQWRkVGVsZW1ldHJ5T3BlbmVkUGFnZSA9ICdhZGRUZWxlbWV0cnlPcGVuZWRQYWdlJyxcbiAgICBSZW1vdmVUZWxlbWV0cnlPcGVuZWRQYWdlID0gJ3JlbW92ZVRlbGVtZXRyeU9wZW5lZFBhZ2UnLFxuICAgIEdldFJ1bGVzTGltaXRzQ291bnRlcnNNdjMgPSAnZ2V0UnVsZXNMaW1pdHNDb3VudGVyc012MycsXG4gICAgQ2FuRW5hYmxlU3RhdGljRmlsdGVyTXYzID0gJ2NhbkVuYWJsZVN0YXRpY0ZpbHRlck12MycsXG4gICAgQ2FuRW5hYmxlU3RhdGljR3JvdXBNdjMgPSAnY2FuRW5hYmxlU3RhdGljR3JvdXBNdjMnLFxuICAgIENsZWFyUnVsZXNMaW1pdHNXYXJuaW5nTXYzID0gJ2NsZWFyUnVsZXNMaW1pdHNXYXJuaW5nTXYzJyxcbiAgICBSZXN0b3JlRmlsdGVyc012MyA9ICdyZXN0b3JlRmlsdGVyc012MycsXG4gICAgQ3VycmVudExpbWl0c012MyA9ICdjdXJyZW50TGltaXRzTXYzJyxcbn1cblxuZXhwb3J0IHR5cGUgQXBwbHlTZXR0aW5nc0pzb25NZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLkFwcGx5U2V0dGluZ3NKc29uO1xuICAgIGRhdGE6IHtcbiAgICAgICAganNvbjogc3RyaW5nO1xuICAgIH07XG59O1xuXG5leHBvcnQgdHlwZSBMb2FkU2V0dGluZ3NKc29uTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5Mb2FkU2V0dGluZ3NKc29uO1xuICAgIGRhdGE6IHtcbiAgICAgICAganNvbjogc3RyaW5nO1xuICAgIH07XG59O1xuXG5leHBvcnQgdHlwZSBBZGRGaWx0ZXJpbmdTdWJzY3JpcHRpb25NZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLkFkZEZpbHRlcmluZ1N1YnNjcmlwdGlvbjtcbiAgICBkYXRhOiB7XG4gICAgICAgIHVybDogc3RyaW5nO1xuICAgICAgICB0aXRsZT86IHN0cmluZztcbiAgICB9O1xufTtcblxuZXhwb3J0IHR5cGUgQ3JlYXRlRXZlbnRMaXN0ZW5lck1lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuQ3JlYXRlRXZlbnRMaXN0ZW5lcjtcbiAgICBkYXRhOiB7XG4gICAgICAgIGV2ZW50czogTm90aWZpZXJUeXBlW107XG4gICAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIFJlbW92ZUxpc3RlbmVyTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5SZW1vdmVMaXN0ZW5lcjtcbiAgICBkYXRhOiB7XG4gICAgICAgIGxpc3RlbmVySWQ6IG51bWJlcjtcbiAgICB9O1xufTtcblxuZXhwb3J0IHR5cGUgR2V0SXNBcHBJbml0aWFsaXplZE1lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuR2V0SXNBcHBJbml0aWFsaXplZDtcbn07XG5cbmV4cG9ydCB0eXBlIEdldFRhYkluZm9Gb3JQb3B1cE1lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuR2V0VGFiSW5mb0ZvclBvcHVwO1xuICAgIGRhdGE6IHtcbiAgICAgICAgdGFiSWQ6IG51bWJlcjtcbiAgICB9O1xufTtcblxuZXhwb3J0IHR5cGUgQ2hhbmdlQXBwbGljYXRpb25GaWx0ZXJpbmdQYXVzZWRNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLkNoYW5nZUFwcGxpY2F0aW9uRmlsdGVyaW5nUGF1c2VkO1xuICAgIGRhdGE6IHtcbiAgICAgICAgc3RhdGU6IGJvb2xlYW47XG4gICAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIE9wZW5SdWxlc0xpbWl0c1RhYk1lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuT3BlblJ1bGVzTGltaXRzVGFiO1xufTtcblxuZXhwb3J0IHR5cGUgT3BlblNldHRpbmdzVGFiTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5PcGVuU2V0dGluZ3NUYWI7XG59O1xuXG5leHBvcnQgdHlwZSBPcGVuQXNzaXN0YW50TWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5PcGVuQXNzaXN0YW50O1xufTtcblxuZXhwb3J0IHR5cGUgVXBkYXRlRnVsbHNjcmVlblVzZXJSdWxlc1RoZW1lTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5VcGRhdGVGdWxsc2NyZWVuVXNlclJ1bGVzVGhlbWU7XG4gICAgZGF0YToge1xuICAgICAgICB0aGVtZTogQXBwZWFyYW5jZVRoZW1lO1xuICAgIH07XG59O1xuXG5leHBvcnQgdHlwZSBBZGRMb25nTGl2ZWRDb25uZWN0aW9uTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5BZGRMb25nTGl2ZWRDb25uZWN0aW9uO1xuICAgIGRhdGE6IHtcbiAgICAgICAgZXZlbnRzOiBOb3RpZmllclR5cGVbXTtcbiAgICB9O1xufTtcblxuZXhwb3J0IHR5cGUgTm90aWZ5TGlzdGVuZXJzTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5Ob3RpZnlMaXN0ZW5lcnM7XG4gICAgZGF0YTogYW55O1xufTtcblxuZXhwb3J0IHR5cGUgVXBkYXRlTGlzdGVuZXJzTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5VcGRhdGVMaXN0ZW5lcnM7XG59O1xuXG5leHBvcnQgdHlwZSBDaGVja0ZpbHRlcnNVcGRhdGVNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLkNoZWNrRmlsdGVyc1VwZGF0ZTtcbn07XG5cbmV4cG9ydCB0eXBlIENoZWNrRXh0ZW5zaW9uVXBkYXRlTWVzc2FnZU12MyA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5DaGVja0V4dGVuc2lvblVwZGF0ZU12Mztcbn07XG5cbmV4cG9ydCB0eXBlIFVwZGF0ZUV4dGVuc2lvbk1lc3NhZ2VNdjMgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuVXBkYXRlRXh0ZW5zaW9uTXYzO1xuICAgIGRhdGE6IHtcbiAgICAgICAgZnJvbTogTWFudWFsVXBkYXRlTWV0YWRhdGFbJ3BhZ2VUb09wZW5BZnRlclJlbG9hZCddO1xuICAgIH07XG59O1xuXG5leHBvcnQgdHlwZSBHZXRBbGxvd2xpc3REb21haW5zTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5HZXRBbGxvd2xpc3REb21haW5zO1xufTtcblxuZXhwb3J0IHR5cGUgUmVzZXRCbG9ja2VkQWRzQ291bnRNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLlJlc2V0QmxvY2tlZEFkc0NvdW50O1xufTtcblxuZXhwb3J0IHR5cGUgT3BlbkNvbXBhcmVQYWdlTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5PcGVuQ29tcGFyZVBhZ2U7XG59O1xuXG5leHBvcnQgdHlwZSBPcGVuQ2hyb21lRXh0ZW5zaW9uc1NldHRpbmdzUGFnZU1lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuT3BlbkNocm9tZUV4dGVuc2lvbnNTZXR0aW5nc1BhZ2U7XG59O1xuXG5leHBvcnQgdHlwZSBPcGVuRXh0ZW5zaW9uRGV0YWlsc1BhZ2VNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLk9wZW5FeHRlbnNpb25EZXRhaWxzUGFnZTtcbn07XG5cbmV4cG9ydCB0eXBlIE9wZW5GdWxsc2NyZWVuVXNlclJ1bGVzTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5PcGVuRnVsbHNjcmVlblVzZXJSdWxlcztcbn07XG5cbmV4cG9ydCB0eXBlIE9wZW5FeHRlbnNpb25TdG9yZU1lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuT3BlbkV4dGVuc2lvblN0b3JlO1xufTtcblxuZXhwb3J0IHR5cGUgT3BlbkZpbHRlcmluZ0xvZ01lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuT3BlbkZpbHRlcmluZ0xvZztcbn07XG5cbmV4cG9ydCB0eXBlIE9wZW5BYnVzZVRhYk1lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuT3BlbkFidXNlVGFiO1xuICAgIGRhdGE6IHtcbiAgICAgICAgdXJsOiBzdHJpbmc7XG4gICAgICAgIGZyb206IEZvcndhcmRGcm9tO1xuICAgIH07XG59O1xuXG5leHBvcnQgdHlwZSBPcGVuU2l0ZVJlcG9ydFRhYk1lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuT3BlblNpdGVSZXBvcnRUYWI7XG4gICAgZGF0YToge1xuICAgICAgICB1cmw6IHN0cmluZztcbiAgICAgICAgZnJvbTogRm9yd2FyZEZyb207XG4gICAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIE9wZW5UaGFua3lvdVBhZ2VNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLk9wZW5UaGFua3lvdVBhZ2U7XG59O1xuXG5leHBvcnQgdHlwZSBHZXRPcHRpb25zRGF0YU1lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuR2V0T3B0aW9uc0RhdGE7XG59O1xuXG5leHBvcnQgdHlwZSBDaGFuZ2VVc2VyU2V0dGluZ01lc3NhZ2U8VCBleHRlbmRzIFNldHRpbmdPcHRpb24gPSBTZXR0aW5nT3B0aW9uPiA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5DaGFuZ2VVc2VyU2V0dGluZ3M7XG4gICAgZGF0YToge1xuICAgICAgICBrZXk6IFQ7XG4gICAgICAgIHZhbHVlOiBTZXR0aW5nc1tUXTtcbiAgICB9O1xufTtcblxuZXhwb3J0IHR5cGUgUmVzZXRTZXR0aW5nc01lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuUmVzZXRTZXR0aW5ncztcbn07XG5cbmV4cG9ydCB0eXBlIEFkZEFuZEVuYWJsZUZpbHRlck1lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuQWRkQW5kRW5hYmxlRmlsdGVyO1xuICAgIGRhdGE6IHtcbiAgICAgICAgZmlsdGVySWQ6IG51bWJlcjtcbiAgICB9O1xufTtcblxuZXhwb3J0IHR5cGUgRGlzYWJsZUZpbHRlck1lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuRGlzYWJsZUZpbHRlcjtcbiAgICBkYXRhOiB7XG4gICAgICAgIGZpbHRlcklkOiBudW1iZXI7XG4gICAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIFJlbW92ZUFudGlCYW5uZXJGaWx0ZXJNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLlJlbW92ZUFudGlCYW5uZXJGaWx0ZXI7XG4gICAgZGF0YToge1xuICAgICAgICBmaWx0ZXJJZDogbnVtYmVyO1xuICAgIH07XG59O1xuXG5leHBvcnQgdHlwZSBTYXZlQWxsb3dsaXN0RG9tYWluc01lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuU2F2ZUFsbG93bGlzdERvbWFpbnM7XG4gICAgZGF0YToge1xuICAgICAgICB2YWx1ZTogc3RyaW5nO1xuICAgIH07XG59O1xuXG5leHBvcnQgdHlwZSBTYXZlVXNlclJ1bGVzTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5TYXZlVXNlclJ1bGVzO1xuICAgIGRhdGE6IHtcbiAgICAgICAgdmFsdWU6IHN0cmluZztcbiAgICB9O1xufTtcblxuZXhwb3J0IHR5cGUgR2V0VXNlclJ1bGVzTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5HZXRVc2VyUnVsZXM7XG59O1xuXG5leHBvcnQgdHlwZSBHZXRVc2VyUnVsZXNFZGl0b3JEYXRhTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5HZXRVc2VyUnVsZXNFZGl0b3JEYXRhO1xufTtcblxuZXhwb3J0IHR5cGUgQWRkVXNlclJ1bGVNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLkFkZFVzZXJSdWxlO1xuICAgIGRhdGE6IHtcbiAgICAgICAgcnVsZVRleHQ6IHN0cmluZztcbiAgICB9O1xufTtcblxuZXhwb3J0IHR5cGUgUmVtb3ZlVXNlclJ1bGVNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLlJlbW92ZVVzZXJSdWxlO1xuICAgIGRhdGE6IHtcbiAgICAgICAgcnVsZVRleHQ6IHN0cmluZztcbiAgICB9O1xufTtcblxuZXhwb3J0IHR5cGUgUmVzZXRVc2VyUnVsZXNGb3JQYWdlTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5SZXNldFVzZXJSdWxlc0ZvclBhZ2U7XG4gICAgZGF0YToge1xuICAgICAgICB1cmw6IHN0cmluZztcbiAgICAgICAgdGFiSWQ6IG51bWJlcjtcbiAgICB9O1xufTtcblxuZXhwb3J0IHR5cGUgR2V0RWRpdG9yU3RvcmFnZUNvbnRlbnRNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLkdldEVkaXRvclN0b3JhZ2VDb250ZW50O1xufTtcblxuZXhwb3J0IHR5cGUgU2V0RWRpdG9yU3RvcmFnZUNvbnRlbnRNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLlNldEVkaXRvclN0b3JhZ2VDb250ZW50O1xuICAgIGRhdGE6IHtcbiAgICAgICAgY29udGVudDogc3RyaW5nO1xuICAgIH07XG59O1xuXG5leHBvcnQgdHlwZSBBZGRBbGxvd2xpc3REb21haW5Gb3JUYWJJZE1lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuQWRkQWxsb3dsaXN0RG9tYWluRm9yVGFiSWQ7XG4gICAgZGF0YToge1xuICAgICAgICB0YWJJZDogbnVtYmVyO1xuICAgIH07XG59O1xuXG5leHBvcnQgdHlwZSBBZGRBbGxvd2xpc3REb21haW5Gb3JVcmxNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLkFkZEFsbG93bGlzdERvbWFpbkZvclVybDtcbiAgICBkYXRhOiB7XG4gICAgICAgIHVybDogc3RyaW5nO1xuICAgIH07XG59O1xuXG5leHBvcnQgdHlwZSBSZW1vdmVBbGxvd2xpc3REb21haW5NZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLlJlbW92ZUFsbG93bGlzdERvbWFpbjtcbiAgICBkYXRhOiB7XG4gICAgICAgIHRhYklkOiBudW1iZXI7XG4gICAgICAgIHRhYlJlZnJlc2g6IGJvb2xlYW47XG4gICAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIExvYWRDdXN0b21GaWx0ZXJJbmZvTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5Mb2FkQ3VzdG9tRmlsdGVySW5mbztcbiAgICBkYXRhOiB7XG4gICAgICAgIHVybDogc3RyaW5nO1xuICAgICAgICB0aXRsZT86IHN0cmluZztcbiAgICB9O1xufTtcblxuZXhwb3J0IHR5cGUgQ3VzdG9tRmlsdGVyU3Vic2NyaXB0aW9uRGF0YSA9IHtcbiAgICBjdXN0b21Vcmw6IHN0cmluZztcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgdHJ1c3RlZDogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCB0eXBlIFN1YnNjcmliZVRvQ3VzdG9tRmlsdGVyTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5TdWJzY3JpYmVUb0N1c3RvbUZpbHRlcjtcbiAgICBkYXRhOiB7XG4gICAgICAgIGZpbHRlcjogQ3VzdG9tRmlsdGVyU3Vic2NyaXB0aW9uRGF0YTtcbiAgICB9O1xufTtcblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbGl6ZWRNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLkFwcEluaXRpYWxpemVkO1xufTtcblxuZXhwb3J0IHR5cGUgVXBkYXRlVG90YWxCbG9ja2VkTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5VcGRhdGVUb3RhbEJsb2NrZWQ7XG4gICAgZGF0YToge1xuICAgICAgICB0YWJJZDogbnVtYmVyO1xuICAgICAgICB0b3RhbEJsb2NrZWQ6IG51bWJlcjtcbiAgICAgICAgdG90YWxCbG9ja2VkVGFiOiBudW1iZXI7XG4gICAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIENoZWNrUmVxdWVzdEZpbHRlclJlYWR5TWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5DaGVja1JlcXVlc3RGaWx0ZXJSZWFkeTtcbn07XG5cbmV4cG9ydCB0eXBlIEdldEZpbHRlcmluZ0xvZ0RhdGFNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLkdldEZpbHRlcmluZ0xvZ0RhdGE7XG59O1xuXG5leHBvcnQgdHlwZSBTeW5jaHJvbml6ZU9wZW5UYWJzTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5TeW5jaHJvbml6ZU9wZW5UYWJzO1xufTtcblxuZXhwb3J0IHR5cGUgT3BlbkZpbHRlcmluZ0xvZ1BhZ2VNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLk9uT3BlbkZpbHRlcmluZ0xvZ1BhZ2U7XG59O1xuXG5leHBvcnQgdHlwZSBDbG9zZUZpbHRlcmluZ0xvZ1BhZ2VNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLk9uQ2xvc2VGaWx0ZXJpbmdMb2dQYWdlO1xufTtcblxuZXhwb3J0IHR5cGUgQ2xlYXJFdmVudHNCeVRhYklkTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5DbGVhckV2ZW50c0J5VGFiSWQ7XG4gICAgZGF0YToge1xuICAgICAgICB0YWJJZDogbnVtYmVyO1xuICAgICAgICBpZ25vcmVQcmVzZXJ2ZUxvZz86IGJvb2xlYW47XG4gICAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIFNldFByZXNlcnZlTG9nU3RhdGVNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLlNldFByZXNlcnZlTG9nU3RhdGU7XG4gICAgZGF0YToge1xuICAgICAgICBzdGF0ZTogYm9vbGVhbjtcbiAgICB9O1xufTtcblxuZXhwb3J0IHR5cGUgU2V0RmlsdGVyaW5nTG9nV2luZG93U3RhdGVNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLlNldEZpbHRlcmluZ0xvZ1dpbmRvd1N0YXRlO1xuICAgIGRhdGE6IHtcbiAgICAgICAgd2luZG93U3RhdGU6IFdpbmRvd3MuQ3JlYXRlQ3JlYXRlRGF0YVR5cGU7XG4gICAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIFJlZnJlc2hQYWdlTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5SZWZyZXNoUGFnZTtcbiAgICBkYXRhOiB7XG4gICAgICAgIHRhYklkOiBudW1iZXI7XG4gICAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIEdldEZpbHRlcmluZ0luZm9CeVRhYklkTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5HZXRGaWx0ZXJpbmdJbmZvQnlUYWJJZDtcbiAgICBkYXRhOiB7XG4gICAgICAgIHRhYklkOiBudW1iZXI7XG4gICAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIEVuYWJsZUZpbHRlcnNHcm91cE1lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuRW5hYmxlRmlsdGVyc0dyb3VwO1xuICAgIGRhdGE6IHtcbiAgICAgICAgZ3JvdXBJZDogbnVtYmVyO1xuICAgIH07XG59O1xuXG5leHBvcnQgdHlwZSBEaXNhYmxlRmlsdGVyc0dyb3VwTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5EaXNhYmxlRmlsdGVyc0dyb3VwO1xuICAgIGRhdGE6IHtcbiAgICAgICAgZ3JvdXBJZDogbnVtYmVyO1xuICAgIH07XG59O1xuXG5leHBvcnQgdHlwZSBJbml0aWFsaXplRnJhbWVTY3JpcHRNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLkluaXRpYWxpemVGcmFtZVNjcmlwdDtcbn07XG5cbmV4cG9ydCB0eXBlIEluaXRpYWxpemVCbG9ja2luZ1BhZ2VTY3JpcHQgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuSW5pdGlhbGl6ZUJsb2NraW5nUGFnZVNjcmlwdDtcbn07XG5cbmV4cG9ydCB0eXBlIFNldENvbnNlbnRlZEZpbHRlcnNNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLlNldENvbnNlbnRlZEZpbHRlcnM7XG4gICAgZGF0YToge1xuICAgICAgICBmaWx0ZXJJZHM6IG51bWJlcltdO1xuICAgIH07XG59O1xuXG5leHBvcnQgdHlwZSBHZXRJc0NvbnNlbnRlZEZpbHRlck1lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuR2V0SXNDb25zZW50ZWRGaWx0ZXI7XG4gICAgZGF0YToge1xuICAgICAgICBmaWx0ZXJJZDogbnVtYmVyO1xuICAgIH07XG59O1xuXG5leHBvcnQgdHlwZSBPcGVuU2FmZWJyb3dzaW5nVHJ1c3RlZE1lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuT3BlblNhZmVicm93c2luZ1RydXN0ZWQ7XG4gICAgZGF0YToge1xuICAgICAgICB1cmw6IHN0cmluZztcbiAgICB9O1xufTtcblxuZXhwb3J0IHR5cGUgQWRkVXJsVG9UcnVzdGVkTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5BZGRVcmxUb1RydXN0ZWQ7XG4gICAgZGF0YToge1xuICAgICAgICB1cmw6IHN0cmluZztcbiAgICB9O1xufTtcblxuZXhwb3J0IHR5cGUgU2V0Tm90aWZpY2F0aW9uVmlld2VkTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5TZXROb3RpZmljYXRpb25WaWV3ZWQ7XG4gICAgZGF0YToge1xuICAgICAgICB3aXRoRGVsYXk6IGJvb2xlYW47XG4gICAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIFNjcmlwdGxldENsb3NlV2luZG93TWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5TY3JpcHRsZXRDbG9zZVdpbmRvdztcbn07XG5cbmV4cG9ydCB0eXBlIFNob3dBbGVydFBvcHVwTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5TaG93QWxlcnRQb3B1cDtcbiAgICBkYXRhOiB7XG4gICAgICAgIGlzQWRndWFyZFRhYjogYm9vbGVhbjtcbiAgICAgICAgdGl0bGU6IHN0cmluZztcbiAgICAgICAgdGV4dDogc3RyaW5nIHwgc3RyaW5nW107XG4gICAgICAgIGFsZXJ0U3R5bGVzOiBzdHJpbmc7XG4gICAgICAgIGFsZXJ0Q29udGFpbmVyU3R5bGVzOiBzdHJpbmc7XG4gICAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIFNob3dSdWxlTGltaXRzQWxlcnRNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLlNob3dSdWxlTGltaXRzQWxlcnQ7XG4gICAgZGF0YToge1xuICAgICAgICBpc0FkZ3VhcmRUYWI6IGJvb2xlYW47XG4gICAgICAgIG1haW5UZXh0OiBzdHJpbmc7XG4gICAgICAgIGxpbmtUZXh0OiBzdHJpbmc7XG4gICAgICAgIGFsZXJ0U3R5bGVzOiBzdHJpbmc7XG4gICAgICAgIGFsZXJ0Q29udGFpbmVyU3R5bGVzOiBzdHJpbmc7XG4gICAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIFNob3dWZXJzaW9uVXBkYXRlZFBvcHVwTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5TaG93VmVyc2lvblVwZGF0ZWRQb3B1cDtcbiAgICBkYXRhOiB7XG4gICAgICAgIGlzQWRndWFyZFRhYjogYm9vbGVhbjtcbiAgICAgICAgdGl0bGU6IHN0cmluZztcbiAgICAgICAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgICAgICAgY2hhbmdlbG9nSHJlZjogc3RyaW5nO1xuICAgICAgICBjaGFuZ2Vsb2dUZXh0OiBzdHJpbmc7XG4gICAgICAgIHNob3dQcm9tb05vdGlmaWNhdGlvbjogYm9vbGVhbjtcbiAgICAgICAgb2ZmZXI6IHN0cmluZztcbiAgICAgICAgb2ZmZXJEZXNjOiBzdHJpbmc7XG4gICAgICAgIG9mZmVyQnV0dG9uVGV4dDogc3RyaW5nO1xuICAgICAgICBvZmZlckJ1dHRvbkhyZWY6IHN0cmluZztcbiAgICAgICAgb2ZmZXJCZ0ltYWdlOiBzdHJpbmc7XG4gICAgICAgIGRpc2FibGVOb3RpZmljYXRpb25UZXh0OiBzdHJpbmc7XG4gICAgICAgIGFsZXJ0U3R5bGVzOiBzdHJpbmc7XG4gICAgICAgIGlmcmFtZVN0eWxlczogc3RyaW5nO1xuICAgIH07XG59O1xuXG5leHBvcnQgdHlwZSBTZW5kVGVsZW1ldHJ5UGFnZVZpZXdFdmVudE1lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuU2VuZFRlbGVtZXRyeVBhZ2VWaWV3RXZlbnQ7XG4gICAgZGF0YToge1xuICAgICAgICBzY3JlZW5OYW1lOiBUZWxlbWV0cnlTY3JlZW5OYW1lO1xuICAgICAgICBwYWdlSWQ6IHN0cmluZztcbiAgICB9O1xufTtcblxuZXhwb3J0IHR5cGUgU2VuZFRlbGVtZXRyeUN1c3RvbUV2ZW50TWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5TZW5kVGVsZW1ldHJ5Q3VzdG9tRXZlbnQ7XG4gICAgZGF0YToge1xuICAgICAgICBzY3JlZW5OYW1lOiBUZWxlbWV0cnlBY3Rpb25Ub1NjcmVlbk1hcFtUZWxlbWV0cnlFdmVudE5hbWVdO1xuICAgICAgICBldmVudE5hbWU6IFRlbGVtZXRyeUV2ZW50TmFtZTtcbiAgICB9O1xufTtcblxuZXhwb3J0IHR5cGUgQWRkVGVsZW1ldHJ5T3BlbmVkUGFnZU1lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuQWRkVGVsZW1ldHJ5T3BlbmVkUGFnZTtcbn07XG5cbmV4cG9ydCB0eXBlIFJlbW92ZVRlbGVtZXRyeU9wZW5lZFBhZ2VNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLlJlbW92ZVRlbGVtZXRyeU9wZW5lZFBhZ2U7XG4gICAgZGF0YToge1xuICAgICAgICBwYWdlSWQ6IHN0cmluZztcbiAgICB9O1xufTtcblxuZXhwb3J0IHR5cGUgQ2FuRW5hYmxlU3RhdGljRmlsdGVyTXYzTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5DYW5FbmFibGVTdGF0aWNGaWx0ZXJNdjM7XG4gICAgZGF0YToge1xuICAgICAgICBmaWx0ZXJJZDogbnVtYmVyO1xuICAgIH07XG59O1xuXG5leHBvcnQgdHlwZSBDYW5FbmFibGVTdGF0aWNHcm91cE12M01lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuQ2FuRW5hYmxlU3RhdGljR3JvdXBNdjM7XG4gICAgZGF0YToge1xuICAgICAgICBncm91cElkOiBudW1iZXI7XG4gICAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIEN1cnJlbnRMaW1pdHNNdjNNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLkN1cnJlbnRMaW1pdHNNdjM7XG59O1xuXG5leHBvcnQgdHlwZSBSZXN0b3JlRmlsdGVyc012M01lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuUmVzdG9yZUZpbHRlcnNNdjM7XG59O1xuXG5leHBvcnQgdHlwZSBDbGVhclJ1bGVzTGltaXRzV2FybmluZ012M01lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuQ2xlYXJSdWxlc0xpbWl0c1dhcm5pbmdNdjM7XG59O1xuXG5leHBvcnQgdHlwZSBHZXRSdWxlc0xpbWl0c0NvdW50ZXJzTXYzTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5HZXRSdWxlc0xpbWl0c0NvdW50ZXJzTXYzO1xufTtcblxuLy8gVW5pZmllZCBtZXNzYWdlIG1hcCB0aGF0IGluY2x1ZGVzIGJvdGggbWVzc2FnZSBzdHJ1Y3R1cmUgYW5kIHJlc3BvbnNlIHR5cGVzXG5leHBvcnQgdHlwZSBNZXNzYWdlTWFwID0ge1xuICAgIFtNZXNzYWdlVHlwZS5DcmVhdGVFdmVudExpc3RlbmVyXToge1xuICAgICAgICBtZXNzYWdlOiBDcmVhdGVFdmVudExpc3RlbmVyTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IENyZWF0ZUV2ZW50TGlzdGVuZXJSZXNwb25zZTtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5BZGRMb25nTGl2ZWRDb25uZWN0aW9uXToge1xuICAgICAgICBtZXNzYWdlOiBBZGRMb25nTGl2ZWRDb25uZWN0aW9uTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IHZvaWQ7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuQXBwbHlTZXR0aW5nc0pzb25dOiB7XG4gICAgICAgIG1lc3NhZ2U6IEFwcGx5U2V0dGluZ3NKc29uTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IGJvb2xlYW47XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuTG9hZFNldHRpbmdzSnNvbl06IHtcbiAgICAgICAgbWVzc2FnZTogTG9hZFNldHRpbmdzSnNvbk1lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiBFeHBvcnRNZXNzYWdlUmVzcG9uc2U7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuQWRkRmlsdGVyaW5nU3Vic2NyaXB0aW9uXToge1xuICAgICAgICBtZXNzYWdlOiBBZGRGaWx0ZXJpbmdTdWJzY3JpcHRpb25NZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogdm9pZDtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5HZXRJc0FwcEluaXRpYWxpemVkXToge1xuICAgICAgICBtZXNzYWdlOiBHZXRJc0FwcEluaXRpYWxpemVkTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IGJvb2xlYW47XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuR2V0VGFiSW5mb0ZvclBvcHVwXToge1xuICAgICAgICBtZXNzYWdlOiBHZXRUYWJJbmZvRm9yUG9wdXBNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogR2V0VGFiSW5mb0ZvclBvcHVwUmVzcG9uc2UgfCB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuQ2hhbmdlQXBwbGljYXRpb25GaWx0ZXJpbmdQYXVzZWRdOiB7XG4gICAgICAgIG1lc3NhZ2U6IENoYW5nZUFwcGxpY2F0aW9uRmlsdGVyaW5nUGF1c2VkTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IHZvaWQ7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuT3BlblJ1bGVzTGltaXRzVGFiXToge1xuICAgICAgICBtZXNzYWdlOiBPcGVuUnVsZXNMaW1pdHNUYWJNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogdm9pZDtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5PcGVuU2V0dGluZ3NUYWJdOiB7XG4gICAgICAgIG1lc3NhZ2U6IE9wZW5TZXR0aW5nc1RhYk1lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiB2b2lkO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLk9wZW5Bc3Npc3RhbnRdOiB7XG4gICAgICAgIG1lc3NhZ2U6IE9wZW5Bc3Npc3RhbnRNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogdm9pZDtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5VcGRhdGVGdWxsc2NyZWVuVXNlclJ1bGVzVGhlbWVdOiB7XG4gICAgICAgIG1lc3NhZ2U6IFVwZGF0ZUZ1bGxzY3JlZW5Vc2VyUnVsZXNUaGVtZU1lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiB2b2lkO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLlN5bmNocm9uaXplT3BlblRhYnNdOiB7XG4gICAgICAgIG1lc3NhZ2U6IFN5bmNocm9uaXplT3BlblRhYnNNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogRmlsdGVyaW5nTG9nVGFiSW5mb1tdO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLkNoZWNrRmlsdGVyc1VwZGF0ZV06IHtcbiAgICAgICAgbWVzc2FnZTogQ2hlY2tGaWx0ZXJzVXBkYXRlTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IEZpbHRlck1ldGFkYXRhW10gfCB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuQ2hlY2tFeHRlbnNpb25VcGRhdGVNdjNdOiB7XG4gICAgICAgIG1lc3NhZ2U6IENoZWNrRXh0ZW5zaW9uVXBkYXRlTWVzc2FnZU12MztcbiAgICAgICAgcmVzcG9uc2U6IHZvaWQ7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuVXBkYXRlRXh0ZW5zaW9uTXYzXToge1xuICAgICAgICBtZXNzYWdlOiBVcGRhdGVFeHRlbnNpb25NZXNzYWdlTXYzO1xuICAgICAgICByZXNwb25zZTogdm9pZDtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5HZXRBbGxvd2xpc3REb21haW5zXToge1xuICAgICAgICBtZXNzYWdlOiBHZXRBbGxvd2xpc3REb21haW5zTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IEdldEFsbG93bGlzdERvbWFpbnNSZXNwb25zZTtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5PcGVuRXh0ZW5zaW9uU3RvcmVdOiB7XG4gICAgICAgIG1lc3NhZ2U6IE9wZW5FeHRlbnNpb25TdG9yZU1lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiB2b2lkO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLk9wZW5Db21wYXJlUGFnZV06IHtcbiAgICAgICAgbWVzc2FnZTogT3BlbkNvbXBhcmVQYWdlTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IHZvaWQ7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuT3BlbkNocm9tZUV4dGVuc2lvbnNTZXR0aW5nc1BhZ2VdOiB7XG4gICAgICAgIG1lc3NhZ2U6IE9wZW5DaHJvbWVFeHRlbnNpb25zU2V0dGluZ3NQYWdlTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IHZvaWQ7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuT3BlbkV4dGVuc2lvbkRldGFpbHNQYWdlXToge1xuICAgICAgICBtZXNzYWdlOiBPcGVuRXh0ZW5zaW9uRGV0YWlsc1BhZ2VNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogdm9pZDtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5PcGVuRnVsbHNjcmVlblVzZXJSdWxlc106IHtcbiAgICAgICAgbWVzc2FnZTogT3BlbkZ1bGxzY3JlZW5Vc2VyUnVsZXNNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogdm9pZDtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5SZXNldEJsb2NrZWRBZHNDb3VudF06IHtcbiAgICAgICAgbWVzc2FnZTogUmVzZXRCbG9ja2VkQWRzQ291bnRNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogdm9pZDtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5PcGVuRmlsdGVyaW5nTG9nXToge1xuICAgICAgICBtZXNzYWdlOiBPcGVuRmlsdGVyaW5nTG9nTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IHZvaWQ7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuT3BlbkFidXNlVGFiXToge1xuICAgICAgICBtZXNzYWdlOiBPcGVuQWJ1c2VUYWJNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogdm9pZDtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5PcGVuU2l0ZVJlcG9ydFRhYl06IHtcbiAgICAgICAgbWVzc2FnZTogT3BlblNpdGVSZXBvcnRUYWJNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogdm9pZDtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5PcGVuVGhhbmt5b3VQYWdlXToge1xuICAgICAgICBtZXNzYWdlOiBPcGVuVGhhbmt5b3VQYWdlTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IHZvaWQ7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuR2V0T3B0aW9uc0RhdGFdOiB7XG4gICAgICAgIG1lc3NhZ2U6IEdldE9wdGlvbnNEYXRhTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IEdldE9wdGlvbnNEYXRhUmVzcG9uc2U7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuQ2hhbmdlVXNlclNldHRpbmdzXToge1xuICAgICAgICBtZXNzYWdlOiBDaGFuZ2VVc2VyU2V0dGluZ01lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiB2b2lkO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLlJlc2V0U2V0dGluZ3NdOiB7XG4gICAgICAgIG1lc3NhZ2U6IFJlc2V0U2V0dGluZ3NNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogYm9vbGVhbjtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5BZGRBbmRFbmFibGVGaWx0ZXJdOiB7XG4gICAgICAgIG1lc3NhZ2U6IEFkZEFuZEVuYWJsZUZpbHRlck1lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuRGlzYWJsZUZpbHRlcl06IHtcbiAgICAgICAgbWVzc2FnZTogRGlzYWJsZUZpbHRlck1lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiB2b2lkO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLlJlbW92ZUFudGlCYW5uZXJGaWx0ZXJdOiB7XG4gICAgICAgIG1lc3NhZ2U6IFJlbW92ZUFudGlCYW5uZXJGaWx0ZXJNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogdm9pZDtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5TYXZlQWxsb3dsaXN0RG9tYWluc106IHtcbiAgICAgICAgbWVzc2FnZTogU2F2ZUFsbG93bGlzdERvbWFpbnNNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogdm9pZDtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5TYXZlVXNlclJ1bGVzXToge1xuICAgICAgICBtZXNzYWdlOiBTYXZlVXNlclJ1bGVzTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IHZvaWQ7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuR2V0VXNlclJ1bGVzXToge1xuICAgICAgICBtZXNzYWdlOiBHZXRVc2VyUnVsZXNNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogR2V0VXNlclJ1bGVzUmVzcG9uc2U7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuR2V0VXNlclJ1bGVzRWRpdG9yRGF0YV06IHtcbiAgICAgICAgbWVzc2FnZTogR2V0VXNlclJ1bGVzRWRpdG9yRGF0YU1lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiBHZXRVc2VyUnVsZXNFZGl0b3JEYXRhUmVzcG9uc2U7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuQWRkVXNlclJ1bGVdOiB7XG4gICAgICAgIG1lc3NhZ2U6IEFkZFVzZXJSdWxlTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IHZvaWQ7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuUmVtb3ZlVXNlclJ1bGVdOiB7XG4gICAgICAgIG1lc3NhZ2U6IFJlbW92ZVVzZXJSdWxlTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IHZvaWQ7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuUmVzZXRVc2VyUnVsZXNGb3JQYWdlXToge1xuICAgICAgICBtZXNzYWdlOiBSZXNldFVzZXJSdWxlc0ZvclBhZ2VNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogdm9pZDtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5HZXRFZGl0b3JTdG9yYWdlQ29udGVudF06IHtcbiAgICAgICAgbWVzc2FnZTogR2V0RWRpdG9yU3RvcmFnZUNvbnRlbnRNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLlNldEVkaXRvclN0b3JhZ2VDb250ZW50XToge1xuICAgICAgICBtZXNzYWdlOiBTZXRFZGl0b3JTdG9yYWdlQ29udGVudE1lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiB2b2lkO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLlJlbW92ZUFsbG93bGlzdERvbWFpbl06IHtcbiAgICAgICAgbWVzc2FnZTogUmVtb3ZlQWxsb3dsaXN0RG9tYWluTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IHZvaWQ7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuQWRkQWxsb3dsaXN0RG9tYWluRm9yVGFiSWRdOiB7XG4gICAgICAgIG1lc3NhZ2U6IEFkZEFsbG93bGlzdERvbWFpbkZvclRhYklkTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IHZvaWQ7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuQWRkQWxsb3dsaXN0RG9tYWluRm9yVXJsXToge1xuICAgICAgICBtZXNzYWdlOiBBZGRBbGxvd2xpc3REb21haW5Gb3JVcmxNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogdm9pZDtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5Mb2FkQ3VzdG9tRmlsdGVySW5mb106IHtcbiAgICAgICAgbWVzc2FnZTogTG9hZEN1c3RvbUZpbHRlckluZm9NZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogR2V0Q3VzdG9tRmlsdGVySW5mb1Jlc3VsdDtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5TdWJzY3JpYmVUb0N1c3RvbUZpbHRlcl06IHtcbiAgICAgICAgbWVzc2FnZTogU3Vic2NyaWJlVG9DdXN0b21GaWx0ZXJNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogQ3VzdG9tRmlsdGVyTWV0YWRhdGE7XG4gICAgfTtcbiAgICAvLyBUaGlzIG1lc3NhZ2UgaXMgc2VudCBmcm9tIGJhY2tncm91bmQgYW5kIGhhbmRsZWQgb24gVUkgc2lkZS5cbiAgICBbTWVzc2FnZVR5cGUuQXBwSW5pdGlhbGl6ZWRdOiB7XG4gICAgICAgIG1lc3NhZ2U6IEFwcEluaXRpYWxpemVkTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IG5ldmVyO1xuICAgIH07XG4gICAgLy8gVGhpcyBtZXNzYWdlIGlzIHNlbnQgZnJvbSBiYWNrZ3JvdW5kIGFuZCBoYW5kbGVkIG9uIFVJIHNpZGUuXG4gICAgW01lc3NhZ2VUeXBlLlVwZGF0ZVRvdGFsQmxvY2tlZF06IHtcbiAgICAgICAgbWVzc2FnZTogVXBkYXRlVG90YWxCbG9ja2VkTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IG5ldmVyO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLkdldEZpbHRlcmluZ0xvZ0RhdGFdOiB7XG4gICAgICAgIG1lc3NhZ2U6IEdldEZpbHRlcmluZ0xvZ0RhdGFNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogR2V0RmlsdGVyaW5nTG9nRGF0YVJlc3BvbnNlO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLkNoZWNrUmVxdWVzdEZpbHRlclJlYWR5XToge1xuICAgICAgICBtZXNzYWdlOiBDaGVja1JlcXVlc3RGaWx0ZXJSZWFkeU1lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiBib29sZWFuO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLk9uT3BlbkZpbHRlcmluZ0xvZ1BhZ2VdOiB7XG4gICAgICAgIG1lc3NhZ2U6IE9wZW5GaWx0ZXJpbmdMb2dQYWdlTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IHZvaWQ7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuT25DbG9zZUZpbHRlcmluZ0xvZ1BhZ2VdOiB7XG4gICAgICAgIG1lc3NhZ2U6IENsb3NlRmlsdGVyaW5nTG9nUGFnZU1lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiB2b2lkO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLkNsZWFyRXZlbnRzQnlUYWJJZF06IHtcbiAgICAgICAgbWVzc2FnZTogQ2xlYXJFdmVudHNCeVRhYklkTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IHZvaWQ7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuU2V0UHJlc2VydmVMb2dTdGF0ZV06IHtcbiAgICAgICAgbWVzc2FnZTogU2V0UHJlc2VydmVMb2dTdGF0ZU1lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiB2b2lkO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLlJlZnJlc2hQYWdlXToge1xuICAgICAgICBtZXNzYWdlOiBSZWZyZXNoUGFnZU1lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiB2b2lkO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLkdldEZpbHRlcmluZ0luZm9CeVRhYklkXToge1xuICAgICAgICBtZXNzYWdlOiBHZXRGaWx0ZXJpbmdJbmZvQnlUYWJJZE1lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiBGaWx0ZXJpbmdMb2dUYWJJbmZvIHwgdW5kZWZpbmVkO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLlNldEZpbHRlcmluZ0xvZ1dpbmRvd1N0YXRlXToge1xuICAgICAgICBtZXNzYWdlOiBTZXRGaWx0ZXJpbmdMb2dXaW5kb3dTdGF0ZU1lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiB2b2lkO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLkVuYWJsZUZpbHRlcnNHcm91cF06IHtcbiAgICAgICAgbWVzc2FnZTogRW5hYmxlRmlsdGVyc0dyb3VwTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IG51bWJlcltdIHwgdW5kZWZpbmVkO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLkRpc2FibGVGaWx0ZXJzR3JvdXBdOiB7XG4gICAgICAgIG1lc3NhZ2U6IERpc2FibGVGaWx0ZXJzR3JvdXBNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogdm9pZDtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5PcGVuU2FmZWJyb3dzaW5nVHJ1c3RlZF06IHtcbiAgICAgICAgbWVzc2FnZTogT3BlblNhZmVicm93c2luZ1RydXN0ZWRNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogdm9pZDtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5TZXROb3RpZmljYXRpb25WaWV3ZWRdOiB7XG4gICAgICAgIG1lc3NhZ2U6IFNldE5vdGlmaWNhdGlvblZpZXdlZE1lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiBQcm9taXNlPHZvaWQ+O1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLlJlbW92ZUxpc3RlbmVyXToge1xuICAgICAgICBtZXNzYWdlOiBSZW1vdmVMaXN0ZW5lck1lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiB2b2lkO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLlNjcmlwdGxldENsb3NlV2luZG93XToge1xuICAgICAgICBtZXNzYWdlOiBTY3JpcHRsZXRDbG9zZVdpbmRvd01lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiB2b2lkO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLlNob3dSdWxlTGltaXRzQWxlcnRdOiB7XG4gICAgICAgIG1lc3NhZ2U6IFNob3dSdWxlTGltaXRzQWxlcnRNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogYm9vbGVhbjtcbiAgICB9O1xuICAgIC8vIFRoaXMgbWVzc2FnZSBpcyBzZW50IGZyb20gYmFja2dyb3VuZCBhbmQgaGFuZGxlZCBvbiBVSSBzaWRlLlxuICAgIFtNZXNzYWdlVHlwZS5Ob3RpZnlMaXN0ZW5lcnNdOiB7XG4gICAgICAgIG1lc3NhZ2U6IE5vdGlmeUxpc3RlbmVyc01lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiBuZXZlcjtcbiAgICB9O1xuICAgIC8vIFRoaXMgbWVzc2FnZSBpcyBzZW50IGZyb20gYmFja2dyb3VuZCBhbmQgaGFuZGxlZCBvbiBVSSBzaWRlLlxuICAgIFtNZXNzYWdlVHlwZS5VcGRhdGVMaXN0ZW5lcnNdOiB7XG4gICAgICAgIG1lc3NhZ2U6IFVwZGF0ZUxpc3RlbmVyc01lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiBuZXZlcjtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5TaG93QWxlcnRQb3B1cF06IHtcbiAgICAgICAgbWVzc2FnZTogU2hvd0FsZXJ0UG9wdXBNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogdm9pZDtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5TaG93VmVyc2lvblVwZGF0ZWRQb3B1cF06IHtcbiAgICAgICAgbWVzc2FnZTogU2hvd1ZlcnNpb25VcGRhdGVkUG9wdXBNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogYm9vbGVhbjtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5HZXRJc0NvbnNlbnRlZEZpbHRlcl06IHtcbiAgICAgICAgbWVzc2FnZTogR2V0SXNDb25zZW50ZWRGaWx0ZXJNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogYm9vbGVhbjtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5TZXRDb25zZW50ZWRGaWx0ZXJzXToge1xuICAgICAgICBtZXNzYWdlOiBTZXRDb25zZW50ZWRGaWx0ZXJzTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IHZvaWQ7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuQWRkVXJsVG9UcnVzdGVkXToge1xuICAgICAgICBtZXNzYWdlOiBBZGRVcmxUb1RydXN0ZWRNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogdm9pZDtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5TZW5kVGVsZW1ldHJ5UGFnZVZpZXdFdmVudF06IHtcbiAgICAgICAgbWVzc2FnZTogU2VuZFRlbGVtZXRyeVBhZ2VWaWV3RXZlbnRNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogdm9pZDtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5TZW5kVGVsZW1ldHJ5Q3VzdG9tRXZlbnRdOiB7XG4gICAgICAgIG1lc3NhZ2U6IFNlbmRUZWxlbWV0cnlDdXN0b21FdmVudE1lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiB2b2lkO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLkFkZFRlbGVtZXRyeU9wZW5lZFBhZ2VdOiB7XG4gICAgICAgIG1lc3NhZ2U6IEFkZFRlbGVtZXRyeU9wZW5lZFBhZ2VNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogc3RyaW5nO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLlJlbW92ZVRlbGVtZXRyeU9wZW5lZFBhZ2VdOiB7XG4gICAgICAgIG1lc3NhZ2U6IFJlbW92ZVRlbGVtZXRyeU9wZW5lZFBhZ2VNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogdm9pZDtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5DdXJyZW50TGltaXRzTXYzXToge1xuICAgICAgICBtZXNzYWdlOiBDdXJyZW50TGltaXRzTXYzTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IE12M0xpbWl0c0NoZWNrUmVzdWx0O1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLkdldFJ1bGVzTGltaXRzQ291bnRlcnNNdjNdOiB7XG4gICAgICAgIG1lc3NhZ2U6IEdldFJ1bGVzTGltaXRzQ291bnRlcnNNdjNNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogSVJ1bGVzTGltaXRzIHwgdW5kZWZpbmVkO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLkNhbkVuYWJsZVN0YXRpY0ZpbHRlck12M106IHtcbiAgICAgICAgbWVzc2FnZTogQ2FuRW5hYmxlU3RhdGljRmlsdGVyTXYzTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IFN0YXRpY0xpbWl0c0NoZWNrUmVzdWx0O1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLkNhbkVuYWJsZVN0YXRpY0dyb3VwTXYzXToge1xuICAgICAgICBtZXNzYWdlOiBDYW5FbmFibGVTdGF0aWNHcm91cE12M01lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiBTdGF0aWNMaW1pdHNDaGVja1Jlc3VsdDtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5SZXN0b3JlRmlsdGVyc012M106IHtcbiAgICAgICAgbWVzc2FnZTogUmVzdG9yZUZpbHRlcnNNdjNNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogdm9pZDtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5DbGVhclJ1bGVzTGltaXRzV2FybmluZ012M106IHtcbiAgICAgICAgbWVzc2FnZTogQ2xlYXJSdWxlc0xpbWl0c1dhcm5pbmdNdjNNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogdm9pZDtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5Jbml0aWFsaXplRnJhbWVTY3JpcHRdOiB7XG4gICAgICAgIG1lc3NhZ2U6IEluaXRpYWxpemVGcmFtZVNjcmlwdE1lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiBQYWdlSW5pdEFwcERhdGE7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuSW5pdGlhbGl6ZUJsb2NraW5nUGFnZVNjcmlwdF06IHtcbiAgICAgICAgbWVzc2FnZTogSW5pdGlhbGl6ZUJsb2NraW5nUGFnZVNjcmlwdDtcbiAgICAgICAgcmVzcG9uc2U6IEJsb2NraW5nUGFnZUluaXRBcHBEYXRhO1xuICAgIH07XG59O1xuXG4vKipcbiAqIEhlbHBlciB0eXBlIHRvIGNoZWNrIGlmIGEgZ2l2ZW4gdHlwZSBpcyBhIHZhbGlkIG1lc3NhZ2UgdHlwZS5cbiAqL1xuZXhwb3J0IHR5cGUgVmFsaWRNZXNzYWdlVHlwZXMgPSBrZXlvZiBNZXNzYWdlTWFwO1xuXG4vKipcbiAqIEFsbCBtZXNzYWdlcyB0aGF0IGNhbiBiZSBzZW50LlxuICovXG5leHBvcnQgdHlwZSBNZXNzYWdlID0gTWVzc2FnZU1hcFtWYWxpZE1lc3NhZ2VUeXBlc11bJ21lc3NhZ2UnXSAmIE1lc3NhZ2VDb21tb25Qcm9wcztcblxuLyoqXG4gKiBIZWxwZXIgdHlwZSB0byBleHRyYWN0IHRoZSBtZXNzYWdlIHR5cGUgZm9yIGEgZ2l2ZW4gbWVzc2FnZS5cbiAqL1xuZXhwb3J0IHR5cGUgRXh0cmFjdGVkTWVzc2FnZTxUPiA9IEV4dHJhY3Q8TWVzc2FnZSwgeyB0eXBlOiBUIH0+O1xuXG4vKipcbiAqIEhlbHBlciB0eXBlIHRvIGV4dHJhY3QgdGhlIHJlc3BvbnNlIHR5cGUgZm9yIGEgZ2l2ZW4gbWVzc2FnZSB0eXBlXG4gKi9cbmV4cG9ydCB0eXBlIEV4dHJhY3RNZXNzYWdlUmVzcG9uc2U8VCBleHRlbmRzIFZhbGlkTWVzc2FnZVR5cGVzPiA9IE1lc3NhZ2VNYXBbVF1bJ3Jlc3BvbnNlJ107XG5cbi8qKlxuICogSGVscGVyIHR5cGUgdG8gZXh0cmFjdCB0aGUgbWVzc2FnZSB0eXBlIGZvciBhIGdpdmVuIG1lc3NhZ2Ugd2l0aG91dCBoYW5kbGVyTmFtZS5cbiAqL1xuZXhwb3J0IHR5cGUgTWVzc2FnZVdpdGhvdXRIYW5kbGVyTmFtZTxUPiA9IHsgdHlwZTogVCB9ICYgT21pdDxFeHRyYWN0ZWRNZXNzYWdlPFQ+LCAnaGFuZGxlck5hbWUnPjtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LTIwMjUgQWRndWFyZCBTb2Z0d2FyZSBMdGQuXG4gKlxuICogQGZpbGVcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEFkR3VhcmQgQnJvd3NlciBFeHRlbnNpb24gKGh0dHBzOi8vZ2l0aHViLmNvbS9BZGd1YXJkVGVhbS9BZGd1YXJkQnJvd3NlckV4dGVuc2lvbikuXG4gKlxuICogQWRHdWFyZCBCcm93c2VyIEV4dGVuc2lvbiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogQWRHdWFyZCBCcm93c2VyIEV4dGVuc2lvbiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBBZEd1YXJkIEJyb3dzZXIgRXh0ZW5zaW9uLiBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cblxuLy8gU2luY2UgZXhwb3J0cyBmcm9tICcuL2NvbnN0YW50cycgYXJlOiB0aGUgTWVzc2FnZVR5cGUgZW51bSBhbmQgYSBsb3Qgb2YgdHlwZXMsXG4vLyBhbmQgaW1wb3J0cyB0aGVyZSBhcmUgdHlwZXMgb25seSwgc28gaXQgc2hvdWxkIG5vdCBhZmZlY3QgYnVuZGxlIHNpemVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuZXhwb3J0ICogZnJvbSAnLi9jb25zdGFudHMnO1xuZXhwb3J0IHsgc2VuZE1lc3NhZ2UsIHNlbmRUYWJNZXNzYWdlIH0gZnJvbSAnLi9zZW5kLW1lc3NhZ2UnO1xuZXhwb3J0IHsgTWVzc2FnZUhhbmRsZXIsIG1lc3NhZ2VIYXNUeXBlRmllbGQsIG1lc3NhZ2VIYXNUeXBlQW5kRGF0YUZpZWxkcyB9IGZyb20gJy4vbWVzc2FnZS1oYW5kbGVyJztcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LTIwMjUgQWRndWFyZCBTb2Z0d2FyZSBMdGQuXG4gKlxuICogQGZpbGVcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEFkR3VhcmQgQnJvd3NlciBFeHRlbnNpb24gKGh0dHBzOi8vZ2l0aHViLmNvbS9BZGd1YXJkVGVhbS9BZGd1YXJkQnJvd3NlckV4dGVuc2lvbikuXG4gKlxuICogQWRHdWFyZCBCcm93c2VyIEV4dGVuc2lvbiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogQWRHdWFyZCBCcm93c2VyIEV4dGVuc2lvbiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBBZEd1YXJkIEJyb3dzZXIgRXh0ZW5zaW9uLiBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cbmltcG9ydCBicm93c2VyLCB7IHR5cGUgUnVudGltZSB9IGZyb20gJ3dlYmV4dGVuc2lvbi1wb2x5ZmlsbCc7XG5cbmltcG9ydCB7IHR5cGUgRW5naW5lTWVzc2FnZSB9IGZyb20gJ2VuZ2luZSc7XG5cbmltcG9ydCB7XG4gICAgdHlwZSBNZXNzYWdlVHlwZSxcbiAgICB0eXBlIE1lc3NhZ2UsXG4gICAgdHlwZSBFeHRyYWN0ZWRNZXNzYWdlLFxuICAgIHR5cGUgVmFsaWRNZXNzYWdlVHlwZXMsXG4gICAgdHlwZSBFeHRyYWN0TWVzc2FnZVJlc3BvbnNlLFxuICAgIEFQUF9NRVNTQUdFX0hBTkRMRVJfTkFNRSxcbn0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG50eXBlIE1lc3NhZ2VMaXN0ZW5lcjxUIGV4dGVuZHMgVmFsaWRNZXNzYWdlVHlwZXM+ID0gKFxuICAgIG1lc3NhZ2U6IEV4dHJhY3RlZE1lc3NhZ2U8VD4sXG4gICAgc2VuZGVyOiBSdW50aW1lLk1lc3NhZ2VTZW5kZXIsXG4pID0+IFByb21pc2U8RXh0cmFjdE1lc3NhZ2VSZXNwb25zZTxUPj4gfCBFeHRyYWN0TWVzc2FnZVJlc3BvbnNlPFQ+O1xuXG4vKipcbiAqIFR5cGUgZ3VhcmQgZm9yIG1lc3NhZ2VzIHRoYXQgaGF2ZSBhICd0eXBlJyBmaWVsZCB3aXRoIHBvc3NpYmxlIHtAbGluayBNZXNzYWdlVHlwZX0uXG4gKlxuICogQG5vdGUgQWRkZWQgdG8gbm8gYnJpbmcgaGVyZSBodWdlIHpvZCBsaWJyYXJ5LlxuICpcbiAqIEBwYXJhbSBtZXNzYWdlIFVua25vd24gbWVzc2FnZS5cbiAqXG4gKiBAcmV0dXJucyBUcnVlIGlmIG1lc3NhZ2UgaGFzICd0eXBlJyBmaWVsZCB3aXRoIHBvc3NpYmxlIHtAbGluayBNZXNzYWdlVHlwZX0uXG4gKi9cbmV4cG9ydCBjb25zdCBtZXNzYWdlSGFzVHlwZUZpZWxkID0gKG1lc3NhZ2U6IHVua25vd24pOiBtZXNzYWdlIGlzIHsgdHlwZTogTWVzc2FnZVR5cGUgfSA9PiB7XG4gICAgcmV0dXJuIHR5cGVvZiBtZXNzYWdlID09PSAnb2JqZWN0JyAmJiBtZXNzYWdlICE9PSBudWxsICYmICd0eXBlJyBpbiBtZXNzYWdlO1xufTtcblxuLyoqXG4gKiBUeXBlIGd1YXJkIGZvciBtZXNzYWdlcyB0aGF0IGhhdmUgYSAndHlwZScgZmllbGQgYW5kICdkYXRhJyBmaWVsZCBhbmQgbG9va3MgbGlrZSB7QGxpbmsgTWVzc2FnZX0uXG4gKlxuICogQG5vdGUgQWRkZWQgdG8gbm8gYnJpbmcgaGVyZSBodWdlIHpvZCBsaWJyYXJ5LlxuICpcbiAqIEBwYXJhbSBtZXNzYWdlIFVua25vd24gbWVzc2FnZS5cbiAqXG4gKiBAcmV0dXJucyBUcnVlIGlmIG1lc3NhZ2UgaGFzICd0eXBlJyBhbmQgJ2RhdGEnIGZpZWxkcyBhbmQgbG9va3MgbGlrZSB7QGxpbmsgTWVzc2FnZX0uXG4gKi9cbmV4cG9ydCBjb25zdCBtZXNzYWdlSGFzVHlwZUFuZERhdGFGaWVsZHMgPSAobWVzc2FnZTogdW5rbm93bik6IG1lc3NhZ2UgaXMgTWVzc2FnZSA9PiB7XG4gICAgcmV0dXJuIG1lc3NhZ2VIYXNUeXBlRmllbGQobWVzc2FnZSkgJiYgJ2RhdGEnIGluIG1lc3NhZ2U7XG59O1xuXG4vKipcbiAqIEFQSSBmb3IgaGFuZGxpbmcgTWVzc2FnZXMgdmlhIHtAbGluayBicm93c2VyLnJ1bnRpbWUub25NZXNzYWdlfVxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTWVzc2FnZUhhbmRsZXIge1xuICAgIHByb3RlY3RlZCBsaXN0ZW5lcnMgPSBuZXcgTWFwPFZhbGlkTWVzc2FnZVR5cGVzLCBNZXNzYWdlTGlzdGVuZXI8VmFsaWRNZXNzYWdlVHlwZXM+PigpO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlTWVzc2FnZSA9IHRoaXMuaGFuZGxlTWVzc2FnZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbml0KCk6IHZvaWQge1xuICAgICAgICBicm93c2VyLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKHRoaXMuaGFuZGxlTWVzc2FnZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIG1lc3NhZ2UgbGlzdGVuZXIuXG4gICAgICogTGlzdGVuZXJzIGxpbWl0ZWQgdG8gMSBwZXIgbWVzc2FnZSB0eXBlIHRvIHByZXZlbnQgcmFjZVxuICAgICAqIGNvbmRpdGlvbiB3aGlsZSByZXNwb25zZSBwcm9jZXNzaW5nLlxuICAgICAqXG4gICAgICogVE9ETzogaW1wbGVtZW50IGxpc3RlbmVycyBwcmlvcml0eSBleGVjdXRpb24gc3RyYXRlZ3lcbiAgICAgKlxuICAgICAqIEBwYXJhbSB0eXBlIC0ge0BsaW5rIFZhbGlkTWVzc2FnZVR5cGVzfVxuICAgICAqIEBwYXJhbSBsaXN0ZW5lciAtIHtAbGluayBNZXNzYWdlTGlzdGVuZXJ9XG4gICAgICpcbiAgICAgKiBAdGhyb3dzIGVycm9yLCBpZiBtZXNzYWdlIGxpc3RlbmVyIGFscmVhZHkgYWRkZWRcbiAgICAgKi9cbiAgICBwdWJsaWMgYWRkTGlzdGVuZXI8VCBleHRlbmRzIFZhbGlkTWVzc2FnZVR5cGVzPihcbiAgICAgICAgdHlwZTogVCxcbiAgICAgICAgbGlzdGVuZXI6IE1lc3NhZ2VMaXN0ZW5lcjxUPixcbiAgICApOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubGlzdGVuZXJzLmhhcyh0eXBlKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNZXNzYWdlIGhhbmRsZXI6ICR7dHlwZX0gbGlzdGVuZXIgaGFzIGFscmVhZHkgYmVlbiByZWdpc3RlcmVkYCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDYXN0IHRocm91Z2ggdW5rbm93biB0byBoZWxwIFRTIHVuZGVyc3RhbmQgdGhhdCB0aGUgbGlzdGVuZXIgaXMgb2ZcbiAgICAgICAgLy8gdGhlIGNvcnJlY3QgdHlwZS4gSXQgd2lsbCBjaGVjayB0eXBlcyBhdCBjb21waWxlIHRpbWUuXG4gICAgICAgIHRoaXMubGlzdGVuZXJzLnNldCh0eXBlLCBsaXN0ZW5lciBhcyB1bmtub3duIGFzIE1lc3NhZ2VMaXN0ZW5lcjxWYWxpZE1lc3NhZ2VUeXBlcz4pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgbWVzc2FnZSBsaXN0ZW5lci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB0eXBlIC0ge0BsaW5rIFZhbGlkTWVzc2FnZVR5cGVzfVxuICAgICAqL1xuICAgIHB1YmxpYyByZW1vdmVMaXN0ZW5lcjxUIGV4dGVuZHMgVmFsaWRNZXNzYWdlVHlwZXM+KHR5cGU6IFQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMuZGVsZXRlKHR5cGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYWxsIGxpc3RlbmVyc1xuICAgICAqL1xuICAgIHB1YmxpYyByZW1vdmVMaXN0ZW5lcnMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdGhlIG1lc3NhZ2UgaXMgb2YgdHlwZSB7QGxpbmsgTWVzc2FnZX0uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSBNZXNzYWdlIG9mIGJhc2ljIHR5cGUge0BsaW5rIE1lc3NhZ2V9IG9yIHtAbGluayBFbmdpbmVNZXNzYWdlfS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIG1lc3NhZ2UgaXMgb2YgdHlwZSB7QGxpbmsgTWVzc2FnZX0uXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBpc1ZhbGlkTWVzc2FnZVR5cGUobWVzc2FnZTogTWVzc2FnZSB8IEVuZ2luZU1lc3NhZ2UpOiBtZXNzYWdlIGlzIE1lc3NhZ2Uge1xuICAgICAgICByZXR1cm4gbWVzc2FnZS5oYW5kbGVyTmFtZSA9PT0gQVBQX01FU1NBR0VfSEFORExFUl9OQU1FICYmICd0eXBlJyBpbiBtZXNzYWdlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgZGF0YSBmcm9tIHtAbGluayBicm93c2VyLnJ1bnRpbWUub25NZXNzYWdlfSBhbmQgbWF0Y2ggc3BlY2lmaWVkIGxpc3RlbmVyLlxuICAgICAqXG4gICAgICogQHBhcmFtIG1lc3NhZ2UgLSB7QGxpbmsgTWVzc2FnZX1cbiAgICAgKiBAcGFyYW0gc2VuZGVyIC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHNjcmlwdCBjb250ZXh0IHRoYXQgc2VudCBhIG1lc3NhZ2Ugb3IgcmVxdWVzdC5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgaGFuZGxlTWVzc2FnZShcbiAgICAgICAgbWVzc2FnZTogTWVzc2FnZSB8IHVua25vd24sXG4gICAgICAgIHNlbmRlcjogUnVudGltZS5NZXNzYWdlU2VuZGVyXG4gICAgKTogUHJvbWlzZTx1bmtub3duPiB8IHVuZGVmaW5lZDtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LTIwMjUgQWRndWFyZCBTb2Z0d2FyZSBMdGQuXG4gKlxuICogQGZpbGVcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEFkR3VhcmQgQnJvd3NlciBFeHRlbnNpb24gKGh0dHBzOi8vZ2l0aHViLmNvbS9BZGd1YXJkVGVhbS9BZGd1YXJkQnJvd3NlckV4dGVuc2lvbikuXG4gKlxuICogQWRHdWFyZCBCcm93c2VyIEV4dGVuc2lvbiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogQWRHdWFyZCBCcm93c2VyIEV4dGVuc2lvbiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBBZEd1YXJkIEJyb3dzZXIgRXh0ZW5zaW9uLiBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cblxuaW1wb3J0IGJyb3dzZXIgZnJvbSAnd2ViZXh0ZW5zaW9uLXBvbHlmaWxsJztcblxuaW1wb3J0IHtcbiAgICB0eXBlIE1lc3NhZ2VUeXBlLFxuICAgIHR5cGUgTWVzc2FnZVdpdGhvdXRIYW5kbGVyTmFtZSxcbiAgICBBUFBfTUVTU0FHRV9IQU5ETEVSX05BTUUsXG59IGZyb20gJy4vY29uc3RhbnRzJztcblxuLyoqXG4gKiBUT0RPOiBDb25zaWRlciBtb3ZpbmcgdGhpcyBmaWxlIHRvIHRoZSBiYWNrZ3JvdW5kIGZvbGRlciwgYmVjYXVzZSBhbGwgbWVzc2FnZXNcbiAqIGZyb20gdGhlIFVJIHNob3VsZCBiZSBzZW5kIHZpYSBtZXRob2RzIG9mIE1lc3NlbmdlciBjbGFzcyBpbnN0ZWFkIG9mIHVzaW5nXG4gKiBkaXJlY3RseSBzZW5kTWVzc2FnZSB0byBwcm9wZXIgdHlwZXMgY2hlY2tpbmcuXG4gKlxuICoge0BsaW5rIHNlbmRNZXNzYWdlfSBzZW5kcyBhcHAgbWVzc2FnZSB2aWEge0BsaW5rIGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZX0gYW5kXG4gKiBnZXRzIHJlc3BvbnNlIGZyb20gYW5vdGhlciBleHRlbnNpb24gcGFnZSBtZXNzYWdlIGhhbmRsZXJcbiAqXG4gKiBAcGFyYW0gbWVzc2FnZSAtIHBhcnRpYWwge0BsaW5rIE1lc3NhZ2V9IHJlY29yZCB3aXRob3V0IHtAbGluayBNZXNzYWdlLmhhbmRsZXJOYW1lfSBmaWVsZFxuICpcbiAqIEByZXR1cm5zIG1lc3NhZ2UgaGFuZGxlciByZXNwb25zZVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VuZE1lc3NhZ2U8VCBleHRlbmRzIE1lc3NhZ2VUeXBlPihcbiAgICBtZXNzYWdlOiBNZXNzYWdlV2l0aG91dEhhbmRsZXJOYW1lPFQ+LFxuKTogUHJvbWlzZTx1bmtub3duPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IGJyb3dzZXIucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gICAgICAgICAgICBoYW5kbGVyTmFtZTogQVBQX01FU1NBR0VfSEFORExFUl9OQU1FLFxuICAgICAgICAgICAgLi4ubWVzc2FnZSxcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgfVxufVxuXG4vKipcbiAqIHtAbGluayBzZW5kVGFiTWVzc2FnZX0gc2VuZHMgbWVzc2FnZSB0byBzcGVjaWZpZWQgdGFiIHZpYSB7QGxpbmsgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlfSBhbmRcbiAqIGdldHMgcmVzcG9uc2UgZnJvbSBpdFxuICpcbiAqIEBwYXJhbSB0YWJJZCAtIHRhYiBpZFxuICogQHBhcmFtIG1lc3NhZ2UgLSBwYXJ0aWFsIHtAbGluayBNZXNzYWdlfSByZWNvcmQgd2l0aG91dCB7QGxpbmsgTWVzc2FnZS5oYW5kbGVyTmFtZX0gZmllbGRcbiAqXG4gKiBAcmV0dXJucyB0YWIgbWVzc2FnZSBoYW5kbGVyIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZW5kVGFiTWVzc2FnZTxUIGV4dGVuZHMgTWVzc2FnZVR5cGU+KFxuICAgIHRhYklkOiBudW1iZXIsXG4gICAgbWVzc2FnZTogTWVzc2FnZVdpdGhvdXRIYW5kbGVyTmFtZTxUPixcbik6IFByb21pc2U8dW5rbm93bj4ge1xuICAgIHJldHVybiBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiSWQsIHtcbiAgICAgICAgaGFuZGxlck5hbWU6IEFQUF9NRVNTQUdFX0hBTkRMRVJfTkFNRSxcbiAgICAgICAgLi4ubWVzc2FnZSxcbiAgICB9KTtcbn1cbiIsIi8qIHdlYmV4dGVuc2lvbi1wb2x5ZmlsbCAtIHYwLjEyLjAgLSBUdWUgTWF5IDE0IDIwMjQgMTg6MDE6MjkgKi9cbi8qIC0qLSBNb2RlOiBpbmRlbnQtdGFicy1tb2RlOiBuaWw7IGpzLWluZGVudC1sZXZlbDogMiAtKi0gKi9cbi8qIHZpbTogc2V0IHN0cz0yIHN3PTIgZXQgdHc9ODA6ICovXG4vKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmlmICghKGdsb2JhbFRoaXMuY2hyb21lICYmIGdsb2JhbFRoaXMuY2hyb21lLnJ1bnRpbWUgJiYgZ2xvYmFsVGhpcy5jaHJvbWUucnVudGltZS5pZCkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBzY3JpcHQgc2hvdWxkIG9ubHkgYmUgbG9hZGVkIGluIGEgYnJvd3NlciBleHRlbnNpb24uXCIpO1xufVxuXG5pZiAoIShnbG9iYWxUaGlzLmJyb3dzZXIgJiYgZ2xvYmFsVGhpcy5icm93c2VyLnJ1bnRpbWUgJiYgZ2xvYmFsVGhpcy5icm93c2VyLnJ1bnRpbWUuaWQpKSB7XG4gIGNvbnN0IENIUk9NRV9TRU5EX01FU1NBR0VfQ0FMTEJBQ0tfTk9fUkVTUE9OU0VfTUVTU0FHRSA9IFwiVGhlIG1lc3NhZ2UgcG9ydCBjbG9zZWQgYmVmb3JlIGEgcmVzcG9uc2Ugd2FzIHJlY2VpdmVkLlwiO1xuXG4gIC8vIFdyYXBwaW5nIHRoZSBidWxrIG9mIHRoaXMgcG9seWZpbGwgaW4gYSBvbmUtdGltZS11c2UgZnVuY3Rpb24gaXMgYSBtaW5vclxuICAvLyBvcHRpbWl6YXRpb24gZm9yIEZpcmVmb3guIFNpbmNlIFNwaWRlcm1vbmtleSBkb2VzIG5vdCBmdWxseSBwYXJzZSB0aGVcbiAgLy8gY29udGVudHMgb2YgYSBmdW5jdGlvbiB1bnRpbCB0aGUgZmlyc3QgdGltZSBpdCdzIGNhbGxlZCwgYW5kIHNpbmNlIGl0IHdpbGxcbiAgLy8gbmV2ZXIgYWN0dWFsbHkgbmVlZCB0byBiZSBjYWxsZWQsIHRoaXMgYWxsb3dzIHRoZSBwb2x5ZmlsbCB0byBiZSBpbmNsdWRlZFxuICAvLyBpbiBGaXJlZm94IG5lYXJseSBmb3IgZnJlZS5cbiAgY29uc3Qgd3JhcEFQSXMgPSBleHRlbnNpb25BUElzID0+IHtcbiAgICAvLyBOT1RFOiBhcGlNZXRhZGF0YSBpcyBhc3NvY2lhdGVkIHRvIHRoZSBjb250ZW50IG9mIHRoZSBhcGktbWV0YWRhdGEuanNvbiBmaWxlXG4gICAgLy8gYXQgYnVpbGQgdGltZSBieSByZXBsYWNpbmcgdGhlIGZvbGxvd2luZyBcImluY2x1ZGVcIiB3aXRoIHRoZSBjb250ZW50IG9mIHRoZVxuICAgIC8vIEpTT04gZmlsZS5cbiAgICBjb25zdCBhcGlNZXRhZGF0YSA9IHtcbiAgICAgIFwiYWxhcm1zXCI6IHtcbiAgICAgICAgXCJjbGVhclwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJjbGVhckFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJib29rbWFya3NcIjoge1xuICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0Q2hpbGRyZW5cIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0UmVjZW50XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFN1YlRyZWVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0VHJlZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJtb3ZlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVUcmVlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInNlYXJjaFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImJyb3dzZXJBY3Rpb25cIjoge1xuICAgICAgICBcImRpc2FibGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcImVuYWJsZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QmFkZ2VCYWNrZ3JvdW5kQ29sb3JcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QmFkZ2VUZXh0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFBvcHVwXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFRpdGxlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcIm9wZW5Qb3B1cFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRCYWRnZUJhY2tncm91bmRDb2xvclwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0QmFkZ2VUZXh0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRJY29uXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInNldFBvcHVwXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRUaXRsZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImJyb3dzaW5nRGF0YVwiOiB7XG4gICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUNhY2hlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUNvb2tpZXNcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlRG93bmxvYWRzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUZvcm1EYXRhXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUhpc3RvcnlcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlTG9jYWxTdG9yYWdlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZVBhc3N3b3Jkc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVQbHVnaW5EYXRhXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInNldHRpbmdzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJjb21tYW5kc1wiOiB7XG4gICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJjb250ZXh0TWVudXNcIjoge1xuICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVBbGxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJjb29raWVzXCI6IHtcbiAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEFsbENvb2tpZVN0b3Jlc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJkZXZ0b29sc1wiOiB7XG4gICAgICAgIFwiaW5zcGVjdGVkV2luZG93XCI6IHtcbiAgICAgICAgICBcImV2YWxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMixcbiAgICAgICAgICAgIFwic2luZ2xlQ2FsbGJhY2tBcmdcIjogZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicGFuZWxzXCI6IHtcbiAgICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMyxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAzLFxuICAgICAgICAgICAgXCJzaW5nbGVDYWxsYmFja0FyZ1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImVsZW1lbnRzXCI6IHtcbiAgICAgICAgICAgIFwiY3JlYXRlU2lkZWJhclBhbmVcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImRvd25sb2Fkc1wiOiB7XG4gICAgICAgIFwiY2FuY2VsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImRvd25sb2FkXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImVyYXNlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEZpbGVJY29uXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcIm9wZW5cIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcInBhdXNlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUZpbGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVzdW1lXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInNlYXJjaFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJzaG93XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiZXh0ZW5zaW9uXCI6IHtcbiAgICAgICAgXCJpc0FsbG93ZWRGaWxlU2NoZW1lQWNjZXNzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcImlzQWxsb3dlZEluY29nbml0b0FjY2Vzc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiaGlzdG9yeVwiOiB7XG4gICAgICAgIFwiYWRkVXJsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImRlbGV0ZUFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJkZWxldGVSYW5nZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJkZWxldGVVcmxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0VmlzaXRzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInNlYXJjaFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiaTE4blwiOiB7XG4gICAgICAgIFwiZGV0ZWN0TGFuZ3VhZ2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QWNjZXB0TGFuZ3VhZ2VzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJpZGVudGl0eVwiOiB7XG4gICAgICAgIFwibGF1bmNoV2ViQXV0aEZsb3dcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImlkbGVcIjoge1xuICAgICAgICBcInF1ZXJ5U3RhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcIm1hbmFnZW1lbnRcIjoge1xuICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0U2VsZlwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRFbmFibGVkXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInVuaW5zdGFsbFNlbGZcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcIm5vdGlmaWNhdGlvbnNcIjoge1xuICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0UGVybWlzc2lvbkxldmVsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicGFnZUFjdGlvblwiOiB7XG4gICAgICAgIFwiZ2V0UG9wdXBcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0VGl0bGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiaGlkZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0SWNvblwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRQb3B1cFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0VGl0bGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcInNob3dcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJwZXJtaXNzaW9uc1wiOiB7XG4gICAgICAgIFwiY29udGFpbnNcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZXF1ZXN0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJydW50aW1lXCI6IHtcbiAgICAgICAgXCJnZXRCYWNrZ3JvdW5kUGFnZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRQbGF0Zm9ybUluZm9cIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwib3Blbk9wdGlvbnNQYWdlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcInJlcXVlc3RVcGRhdGVDaGVja1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZW5kTWVzc2FnZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDNcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZW5kTmF0aXZlTWVzc2FnZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRVbmluc3RhbGxVUkxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInNlc3Npb25zXCI6IHtcbiAgICAgICAgXCJnZXREZXZpY2VzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFJlY2VudGx5Q2xvc2VkXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlc3RvcmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInN0b3JhZ2VcIjoge1xuICAgICAgICBcImxvY2FsXCI6IHtcbiAgICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Qnl0ZXNJblVzZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIm1hbmFnZWRcIjoge1xuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Qnl0ZXNJblVzZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInN5bmNcIjoge1xuICAgICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRCeXRlc0luVXNlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInRhYnNcIjoge1xuICAgICAgICBcImNhcHR1cmVWaXNpYmxlVGFiXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJkZXRlY3RMYW5ndWFnZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJkaXNjYXJkXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImR1cGxpY2F0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJleGVjdXRlU2NyaXB0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRDdXJyZW50XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcImdldFpvb21cIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0Wm9vbVNldHRpbmdzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdvQmFja1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnb0ZvcndhcmRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiaGlnaGxpZ2h0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImluc2VydENTU1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtb3ZlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInF1ZXJ5XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbG9hZFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlQ1NTXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInNlbmRNZXNzYWdlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogM1xuICAgICAgICB9LFxuICAgICAgICBcInNldFpvb21cIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0Wm9vbVNldHRpbmdzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwidG9wU2l0ZXNcIjoge1xuICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwid2ViTmF2aWdhdGlvblwiOiB7XG4gICAgICAgIFwiZ2V0QWxsRnJhbWVzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEZyYW1lXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ3ZWJSZXF1ZXN0XCI6IHtcbiAgICAgICAgXCJoYW5kbGVyQmVoYXZpb3JDaGFuZ2VkXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ3aW5kb3dzXCI6IHtcbiAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRDdXJyZW50XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldExhc3RGb2N1c2VkXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKE9iamVjdC5rZXlzKGFwaU1ldGFkYXRhKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcImFwaS1tZXRhZGF0YS5qc29uIGhhcyBub3QgYmVlbiBpbmNsdWRlZCBpbiBicm93c2VyLXBvbHlmaWxsXCIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgV2Vha01hcCBzdWJjbGFzcyB3aGljaCBjcmVhdGVzIGFuZCBzdG9yZXMgYSB2YWx1ZSBmb3IgYW55IGtleSB3aGljaCBkb2VzXG4gICAgICogbm90IGV4aXN0IHdoZW4gYWNjZXNzZWQsIGJ1dCBiZWhhdmVzIGV4YWN0bHkgYXMgYW4gb3JkaW5hcnkgV2Vha01hcFxuICAgICAqIG90aGVyd2lzZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNyZWF0ZUl0ZW1cbiAgICAgKiAgICAgICAgQSBmdW5jdGlvbiB3aGljaCB3aWxsIGJlIGNhbGxlZCBpbiBvcmRlciB0byBjcmVhdGUgdGhlIHZhbHVlIGZvciBhbnlcbiAgICAgKiAgICAgICAga2V5IHdoaWNoIGRvZXMgbm90IGV4aXN0LCB0aGUgZmlyc3QgdGltZSBpdCBpcyBhY2Nlc3NlZC4gVGhlXG4gICAgICogICAgICAgIGZ1bmN0aW9uIHJlY2VpdmVzLCBhcyBpdHMgb25seSBhcmd1bWVudCwgdGhlIGtleSBiZWluZyBjcmVhdGVkLlxuICAgICAqL1xuICAgIGNsYXNzIERlZmF1bHRXZWFrTWFwIGV4dGVuZHMgV2Vha01hcCB7XG4gICAgICBjb25zdHJ1Y3RvcihjcmVhdGVJdGVtLCBpdGVtcyA9IHVuZGVmaW5lZCkge1xuICAgICAgICBzdXBlcihpdGVtcyk7XG4gICAgICAgIHRoaXMuY3JlYXRlSXRlbSA9IGNyZWF0ZUl0ZW07XG4gICAgICB9XG5cbiAgICAgIGdldChrZXkpIHtcbiAgICAgICAgaWYgKCF0aGlzLmhhcyhrZXkpKSB7XG4gICAgICAgICAgdGhpcy5zZXQoa2V5LCB0aGlzLmNyZWF0ZUl0ZW0oa2V5KSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VwZXIuZ2V0KGtleSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBvYmplY3QgaXMgYW4gb2JqZWN0IHdpdGggYSBgdGhlbmAgbWV0aG9kLCBhbmQgY2FuXG4gICAgICogdGhlcmVmb3JlIGJlIGFzc3VtZWQgdG8gYmVoYXZlIGFzIGEgUHJvbWlzZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3QuXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHRoZW5hYmxlLlxuICAgICAqL1xuICAgIGNvbnN0IGlzVGhlbmFibGUgPSB2YWx1ZSA9PiB7XG4gICAgICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSBcImZ1bmN0aW9uXCI7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW5kIHJldHVybnMgYSBmdW5jdGlvbiB3aGljaCwgd2hlbiBjYWxsZWQsIHdpbGwgcmVzb2x2ZSBvciByZWplY3RcbiAgICAgKiB0aGUgZ2l2ZW4gcHJvbWlzZSBiYXNlZCBvbiBob3cgaXQgaXMgY2FsbGVkOlxuICAgICAqXG4gICAgICogLSBJZiwgd2hlbiBjYWxsZWQsIGBjaHJvbWUucnVudGltZS5sYXN0RXJyb3JgIGNvbnRhaW5zIGEgbm9uLW51bGwgb2JqZWN0LFxuICAgICAqICAgdGhlIHByb21pc2UgaXMgcmVqZWN0ZWQgd2l0aCB0aGF0IHZhbHVlLlxuICAgICAqIC0gSWYgdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aXRoIGV4YWN0bHkgb25lIGFyZ3VtZW50LCB0aGUgcHJvbWlzZSBpc1xuICAgICAqICAgcmVzb2x2ZWQgdG8gdGhhdCB2YWx1ZS5cbiAgICAgKiAtIE90aGVyd2lzZSwgdGhlIHByb21pc2UgaXMgcmVzb2x2ZWQgdG8gYW4gYXJyYXkgY29udGFpbmluZyBhbGwgb2YgdGhlXG4gICAgICogICBmdW5jdGlvbidzIGFyZ3VtZW50cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwcm9taXNlXG4gICAgICogICAgICAgIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSByZXNvbHV0aW9uIGFuZCByZWplY3Rpb24gZnVuY3Rpb25zIG9mIGFcbiAgICAgKiAgICAgICAgcHJvbWlzZS5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBwcm9taXNlLnJlc29sdmVcbiAgICAgKiAgICAgICAgVGhlIHByb21pc2UncyByZXNvbHV0aW9uIGZ1bmN0aW9uLlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IHByb21pc2UucmVqZWN0XG4gICAgICogICAgICAgIFRoZSBwcm9taXNlJ3MgcmVqZWN0aW9uIGZ1bmN0aW9uLlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBtZXRhZGF0YVxuICAgICAqICAgICAgICBNZXRhZGF0YSBhYm91dCB0aGUgd3JhcHBlZCBtZXRob2Qgd2hpY2ggaGFzIGNyZWF0ZWQgdGhlIGNhbGxiYWNrLlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmdcbiAgICAgKiAgICAgICAgV2hldGhlciBvciBub3QgdGhlIHByb21pc2UgaXMgcmVzb2x2ZWQgd2l0aCBvbmx5IHRoZSBmaXJzdFxuICAgICAqICAgICAgICBhcmd1bWVudCBvZiB0aGUgY2FsbGJhY2ssIGFsdGVybmF0aXZlbHkgYW4gYXJyYXkgb2YgYWxsIHRoZVxuICAgICAqICAgICAgICBjYWxsYmFjayBhcmd1bWVudHMgaXMgcmVzb2x2ZWQuIEJ5IGRlZmF1bHQsIGlmIHRoZSBjYWxsYmFja1xuICAgICAqICAgICAgICBmdW5jdGlvbiBpcyBpbnZva2VkIHdpdGggb25seSBhIHNpbmdsZSBhcmd1bWVudCwgdGhhdCB3aWxsIGJlXG4gICAgICogICAgICAgIHJlc29sdmVkIHRvIHRoZSBwcm9taXNlLCB3aGlsZSBhbGwgYXJndW1lbnRzIHdpbGwgYmUgcmVzb2x2ZWQgYXNcbiAgICAgKiAgICAgICAgYW4gYXJyYXkgaWYgbXVsdGlwbGUgYXJlIGdpdmVuLlxuICAgICAqXG4gICAgICogQHJldHVybnMge2Z1bmN0aW9ufVxuICAgICAqICAgICAgICBUaGUgZ2VuZXJhdGVkIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgICAqL1xuICAgIGNvbnN0IG1ha2VDYWxsYmFjayA9IChwcm9taXNlLCBtZXRhZGF0YSkgPT4ge1xuICAgICAgcmV0dXJuICguLi5jYWxsYmFja0FyZ3MpID0+IHtcbiAgICAgICAgaWYgKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IpIHtcbiAgICAgICAgICBwcm9taXNlLnJlamVjdChuZXcgRXJyb3IoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvci5tZXNzYWdlKSk7XG4gICAgICAgIH0gZWxzZSBpZiAobWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmcgfHxcbiAgICAgICAgICAgICAgICAgICAoY2FsbGJhY2tBcmdzLmxlbmd0aCA8PSAxICYmIG1ldGFkYXRhLnNpbmdsZUNhbGxiYWNrQXJnICE9PSBmYWxzZSkpIHtcbiAgICAgICAgICBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2tBcmdzWzBdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2tBcmdzKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9O1xuXG4gICAgY29uc3QgcGx1cmFsaXplQXJndW1lbnRzID0gKG51bUFyZ3MpID0+IG51bUFyZ3MgPT0gMSA/IFwiYXJndW1lbnRcIiA6IFwiYXJndW1lbnRzXCI7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgd3JhcHBlciBmdW5jdGlvbiBmb3IgYSBtZXRob2Qgd2l0aCB0aGUgZ2l2ZW4gbmFtZSBhbmQgbWV0YWRhdGEuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqICAgICAgICBUaGUgbmFtZSBvZiB0aGUgbWV0aG9kIHdoaWNoIGlzIGJlaW5nIHdyYXBwZWQuXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG1ldGFkYXRhXG4gICAgICogICAgICAgIE1ldGFkYXRhIGFib3V0IHRoZSBtZXRob2QgYmVpbmcgd3JhcHBlZC5cbiAgICAgKiBAcGFyYW0ge2ludGVnZXJ9IG1ldGFkYXRhLm1pbkFyZ3NcbiAgICAgKiAgICAgICAgVGhlIG1pbmltdW0gbnVtYmVyIG9mIGFyZ3VtZW50cyB3aGljaCBtdXN0IGJlIHBhc3NlZCB0byB0aGVcbiAgICAgKiAgICAgICAgZnVuY3Rpb24uIElmIGNhbGxlZCB3aXRoIGZld2VyIHRoYW4gdGhpcyBudW1iZXIgb2YgYXJndW1lbnRzLCB0aGVcbiAgICAgKiAgICAgICAgd3JhcHBlciB3aWxsIHJhaXNlIGFuIGV4Y2VwdGlvbi5cbiAgICAgKiBAcGFyYW0ge2ludGVnZXJ9IG1ldGFkYXRhLm1heEFyZ3NcbiAgICAgKiAgICAgICAgVGhlIG1heGltdW0gbnVtYmVyIG9mIGFyZ3VtZW50cyB3aGljaCBtYXkgYmUgcGFzc2VkIHRvIHRoZVxuICAgICAqICAgICAgICBmdW5jdGlvbi4gSWYgY2FsbGVkIHdpdGggbW9yZSB0aGFuIHRoaXMgbnVtYmVyIG9mIGFyZ3VtZW50cywgdGhlXG4gICAgICogICAgICAgIHdyYXBwZXIgd2lsbCByYWlzZSBhbiBleGNlcHRpb24uXG4gICAgICogQHBhcmFtIHtib29sZWFufSBtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZ1xuICAgICAqICAgICAgICBXaGV0aGVyIG9yIG5vdCB0aGUgcHJvbWlzZSBpcyByZXNvbHZlZCB3aXRoIG9ubHkgdGhlIGZpcnN0XG4gICAgICogICAgICAgIGFyZ3VtZW50IG9mIHRoZSBjYWxsYmFjaywgYWx0ZXJuYXRpdmVseSBhbiBhcnJheSBvZiBhbGwgdGhlXG4gICAgICogICAgICAgIGNhbGxiYWNrIGFyZ3VtZW50cyBpcyByZXNvbHZlZC4gQnkgZGVmYXVsdCwgaWYgdGhlIGNhbGxiYWNrXG4gICAgICogICAgICAgIGZ1bmN0aW9uIGlzIGludm9rZWQgd2l0aCBvbmx5IGEgc2luZ2xlIGFyZ3VtZW50LCB0aGF0IHdpbGwgYmVcbiAgICAgKiAgICAgICAgcmVzb2x2ZWQgdG8gdGhlIHByb21pc2UsIHdoaWxlIGFsbCBhcmd1bWVudHMgd2lsbCBiZSByZXNvbHZlZCBhc1xuICAgICAqICAgICAgICBhbiBhcnJheSBpZiBtdWx0aXBsZSBhcmUgZ2l2ZW4uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7ZnVuY3Rpb24ob2JqZWN0LCAuLi4qKX1cbiAgICAgKiAgICAgICBUaGUgZ2VuZXJhdGVkIHdyYXBwZXIgZnVuY3Rpb24uXG4gICAgICovXG4gICAgY29uc3Qgd3JhcEFzeW5jRnVuY3Rpb24gPSAobmFtZSwgbWV0YWRhdGEpID0+IHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiBhc3luY0Z1bmN0aW9uV3JhcHBlcih0YXJnZXQsIC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIDwgbWV0YWRhdGEubWluQXJncykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYXQgbGVhc3QgJHttZXRhZGF0YS5taW5BcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5taW5BcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYXJncy5sZW5ndGggPiBtZXRhZGF0YS5tYXhBcmdzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBtb3N0ICR7bWV0YWRhdGEubWF4QXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWF4QXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICBpZiAobWV0YWRhdGEuZmFsbGJhY2tUb05vQ2FsbGJhY2spIHtcbiAgICAgICAgICAgIC8vIFRoaXMgQVBJIG1ldGhvZCBoYXMgY3VycmVudGx5IG5vIGNhbGxiYWNrIG9uIENocm9tZSwgYnV0IGl0IHJldHVybiBhIHByb21pc2Ugb24gRmlyZWZveCxcbiAgICAgICAgICAgIC8vIGFuZCBzbyB0aGUgcG9seWZpbGwgd2lsbCB0cnkgdG8gY2FsbCBpdCB3aXRoIGEgY2FsbGJhY2sgZmlyc3QsIGFuZCBpdCB3aWxsIGZhbGxiYWNrXG4gICAgICAgICAgICAvLyB0byBub3QgcGFzc2luZyB0aGUgY2FsbGJhY2sgaWYgdGhlIGZpcnN0IGNhbGwgZmFpbHMuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncywgbWFrZUNhbGxiYWNrKHtyZXNvbHZlLCByZWplY3R9LCBtZXRhZGF0YSkpO1xuICAgICAgICAgICAgfSBjYXRjaCAoY2JFcnJvcikge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7bmFtZX0gQVBJIG1ldGhvZCBkb2Vzbid0IHNlZW0gdG8gc3VwcG9ydCB0aGUgY2FsbGJhY2sgcGFyYW1ldGVyLCBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmFsbGluZyBiYWNrIHRvIGNhbGwgaXQgd2l0aG91dCBhIGNhbGxiYWNrOiBcIiwgY2JFcnJvcik7XG5cbiAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MpO1xuXG4gICAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgQVBJIG1ldGhvZCBtZXRhZGF0YSwgc28gdGhhdCB0aGUgbmV4dCBBUEkgY2FsbHMgd2lsbCBub3QgdHJ5IHRvXG4gICAgICAgICAgICAgIC8vIHVzZSB0aGUgdW5zdXBwb3J0ZWQgY2FsbGJhY2sgYW55bW9yZS5cbiAgICAgICAgICAgICAgbWV0YWRhdGEuZmFsbGJhY2tUb05vQ2FsbGJhY2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgbWV0YWRhdGEubm9DYWxsYmFjayA9IHRydWU7XG5cbiAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAobWV0YWRhdGEubm9DYWxsYmFjaykge1xuICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MpO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncywgbWFrZUNhbGxiYWNrKHtyZXNvbHZlLCByZWplY3R9LCBtZXRhZGF0YSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBXcmFwcyBhbiBleGlzdGluZyBtZXRob2Qgb2YgdGhlIHRhcmdldCBvYmplY3QsIHNvIHRoYXQgY2FsbHMgdG8gaXQgYXJlXG4gICAgICogaW50ZXJjZXB0ZWQgYnkgdGhlIGdpdmVuIHdyYXBwZXIgZnVuY3Rpb24uIFRoZSB3cmFwcGVyIGZ1bmN0aW9uIHJlY2VpdmVzLFxuICAgICAqIGFzIGl0cyBmaXJzdCBhcmd1bWVudCwgdGhlIG9yaWdpbmFsIGB0YXJnZXRgIG9iamVjdCwgZm9sbG93ZWQgYnkgZWFjaCBvZlxuICAgICAqIHRoZSBhcmd1bWVudHMgcGFzc2VkIHRvIHRoZSBvcmlnaW5hbCBtZXRob2QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gICAgICogICAgICAgIFRoZSBvcmlnaW5hbCB0YXJnZXQgb2JqZWN0IHRoYXQgdGhlIHdyYXBwZWQgbWV0aG9kIGJlbG9uZ3MgdG8uXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gbWV0aG9kXG4gICAgICogICAgICAgIFRoZSBtZXRob2QgYmVpbmcgd3JhcHBlZC4gVGhpcyBpcyB1c2VkIGFzIHRoZSB0YXJnZXQgb2YgdGhlIFByb3h5XG4gICAgICogICAgICAgIG9iamVjdCB3aGljaCBpcyBjcmVhdGVkIHRvIHdyYXAgdGhlIG1ldGhvZC5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB3cmFwcGVyXG4gICAgICogICAgICAgIFRoZSB3cmFwcGVyIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCBpbiBwbGFjZSBvZiBhIGRpcmVjdCBpbnZvY2F0aW9uXG4gICAgICogICAgICAgIG9mIHRoZSB3cmFwcGVkIG1ldGhvZC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQcm94eTxmdW5jdGlvbj59XG4gICAgICogICAgICAgIEEgUHJveHkgb2JqZWN0IGZvciB0aGUgZ2l2ZW4gbWV0aG9kLCB3aGljaCBpbnZva2VzIHRoZSBnaXZlbiB3cmFwcGVyXG4gICAgICogICAgICAgIG1ldGhvZCBpbiBpdHMgcGxhY2UuXG4gICAgICovXG4gICAgY29uc3Qgd3JhcE1ldGhvZCA9ICh0YXJnZXQsIG1ldGhvZCwgd3JhcHBlcikgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm94eShtZXRob2QsIHtcbiAgICAgICAgYXBwbHkodGFyZ2V0TWV0aG9kLCB0aGlzT2JqLCBhcmdzKSB7XG4gICAgICAgICAgcmV0dXJuIHdyYXBwZXIuY2FsbCh0aGlzT2JqLCB0YXJnZXQsIC4uLmFyZ3MpO1xuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGxldCBoYXNPd25Qcm9wZXJ0eSA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICAgIC8qKlxuICAgICAqIFdyYXBzIGFuIG9iamVjdCBpbiBhIFByb3h5IHdoaWNoIGludGVyY2VwdHMgYW5kIHdyYXBzIGNlcnRhaW4gbWV0aG9kc1xuICAgICAqIGJhc2VkIG9uIHRoZSBnaXZlbiBgd3JhcHBlcnNgIGFuZCBgbWV0YWRhdGFgIG9iamVjdHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gICAgICogICAgICAgIFRoZSB0YXJnZXQgb2JqZWN0IHRvIHdyYXAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gW3dyYXBwZXJzID0ge31dXG4gICAgICogICAgICAgIEFuIG9iamVjdCB0cmVlIGNvbnRhaW5pbmcgd3JhcHBlciBmdW5jdGlvbnMgZm9yIHNwZWNpYWwgY2FzZXMuIEFueVxuICAgICAqICAgICAgICBmdW5jdGlvbiBwcmVzZW50IGluIHRoaXMgb2JqZWN0IHRyZWUgaXMgY2FsbGVkIGluIHBsYWNlIG9mIHRoZVxuICAgICAqICAgICAgICBtZXRob2QgaW4gdGhlIHNhbWUgbG9jYXRpb24gaW4gdGhlIGB0YXJnZXRgIG9iamVjdCB0cmVlLiBUaGVzZVxuICAgICAqICAgICAgICB3cmFwcGVyIG1ldGhvZHMgYXJlIGludm9rZWQgYXMgZGVzY3JpYmVkIGluIHtAc2VlIHdyYXBNZXRob2R9LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IFttZXRhZGF0YSA9IHt9XVxuICAgICAqICAgICAgICBBbiBvYmplY3QgdHJlZSBjb250YWluaW5nIG1ldGFkYXRhIHVzZWQgdG8gYXV0b21hdGljYWxseSBnZW5lcmF0ZVxuICAgICAqICAgICAgICBQcm9taXNlLWJhc2VkIHdyYXBwZXIgZnVuY3Rpb25zIGZvciBhc3luY2hyb25vdXMuIEFueSBmdW5jdGlvbiBpblxuICAgICAqICAgICAgICB0aGUgYHRhcmdldGAgb2JqZWN0IHRyZWUgd2hpY2ggaGFzIGEgY29ycmVzcG9uZGluZyBtZXRhZGF0YSBvYmplY3RcbiAgICAgKiAgICAgICAgaW4gdGhlIHNhbWUgbG9jYXRpb24gaW4gdGhlIGBtZXRhZGF0YWAgdHJlZSBpcyByZXBsYWNlZCB3aXRoIGFuXG4gICAgICogICAgICAgIGF1dG9tYXRpY2FsbHktZ2VuZXJhdGVkIHdyYXBwZXIgZnVuY3Rpb24sIGFzIGRlc2NyaWJlZCBpblxuICAgICAqICAgICAgICB7QHNlZSB3cmFwQXN5bmNGdW5jdGlvbn1cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtQcm94eTxvYmplY3Q+fVxuICAgICAqL1xuICAgIGNvbnN0IHdyYXBPYmplY3QgPSAodGFyZ2V0LCB3cmFwcGVycyA9IHt9LCBtZXRhZGF0YSA9IHt9KSA9PiB7XG4gICAgICBsZXQgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgbGV0IGhhbmRsZXJzID0ge1xuICAgICAgICBoYXMocHJveHlUYXJnZXQsIHByb3ApIHtcbiAgICAgICAgICByZXR1cm4gcHJvcCBpbiB0YXJnZXQgfHwgcHJvcCBpbiBjYWNoZTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQocHJveHlUYXJnZXQsIHByb3AsIHJlY2VpdmVyKSB7XG4gICAgICAgICAgaWYgKHByb3AgaW4gY2FjaGUpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWNoZVtwcm9wXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIShwcm9wIGluIHRhcmdldCkpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGV0IHZhbHVlID0gdGFyZ2V0W3Byb3BdO1xuXG4gICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAvLyBUaGlzIGlzIGEgbWV0aG9kIG9uIHRoZSB1bmRlcmx5aW5nIG9iamVjdC4gQ2hlY2sgaWYgd2UgbmVlZCB0byBkb1xuICAgICAgICAgICAgLy8gYW55IHdyYXBwaW5nLlxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHdyYXBwZXJzW3Byb3BdID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgLy8gV2UgaGF2ZSBhIHNwZWNpYWwtY2FzZSB3cmFwcGVyIGZvciB0aGlzIG1ldGhvZC5cbiAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwTWV0aG9kKHRhcmdldCwgdGFyZ2V0W3Byb3BdLCB3cmFwcGVyc1twcm9wXSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhhc093blByb3BlcnR5KG1ldGFkYXRhLCBwcm9wKSkge1xuICAgICAgICAgICAgICAvLyBUaGlzIGlzIGFuIGFzeW5jIG1ldGhvZCB0aGF0IHdlIGhhdmUgbWV0YWRhdGEgZm9yLiBDcmVhdGUgYVxuICAgICAgICAgICAgICAvLyBQcm9taXNlIHdyYXBwZXIgZm9yIGl0LlxuICAgICAgICAgICAgICBsZXQgd3JhcHBlciA9IHdyYXBBc3luY0Z1bmN0aW9uKHByb3AsIG1ldGFkYXRhW3Byb3BdKTtcbiAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwTWV0aG9kKHRhcmdldCwgdGFyZ2V0W3Byb3BdLCB3cmFwcGVyKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBtZXRob2QgdGhhdCB3ZSBkb24ndCBrbm93IG9yIGNhcmUgYWJvdXQuIFJldHVybiB0aGVcbiAgICAgICAgICAgICAgLy8gb3JpZ2luYWwgbWV0aG9kLCBib3VuZCB0byB0aGUgdW5kZXJseWluZyBvYmplY3QuXG4gICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuYmluZCh0YXJnZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsICYmXG4gICAgICAgICAgICAgICAgICAgICAoaGFzT3duUHJvcGVydHkod3JhcHBlcnMsIHByb3ApIHx8XG4gICAgICAgICAgICAgICAgICAgICAgaGFzT3duUHJvcGVydHkobWV0YWRhdGEsIHByb3ApKSkge1xuICAgICAgICAgICAgLy8gVGhpcyBpcyBhbiBvYmplY3QgdGhhdCB3ZSBuZWVkIHRvIGRvIHNvbWUgd3JhcHBpbmcgZm9yIHRoZSBjaGlsZHJlblxuICAgICAgICAgICAgLy8gb2YuIENyZWF0ZSBhIHN1Yi1vYmplY3Qgd3JhcHBlciBmb3IgaXQgd2l0aCB0aGUgYXBwcm9wcmlhdGUgY2hpbGRcbiAgICAgICAgICAgIC8vIG1ldGFkYXRhLlxuICAgICAgICAgICAgdmFsdWUgPSB3cmFwT2JqZWN0KHZhbHVlLCB3cmFwcGVyc1twcm9wXSwgbWV0YWRhdGFbcHJvcF0pO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzT3duUHJvcGVydHkobWV0YWRhdGEsIFwiKlwiKSkge1xuICAgICAgICAgICAgLy8gV3JhcCBhbGwgcHJvcGVydGllcyBpbiAqIG5hbWVzcGFjZS5cbiAgICAgICAgICAgIHZhbHVlID0gd3JhcE9iamVjdCh2YWx1ZSwgd3JhcHBlcnNbcHJvcF0sIG1ldGFkYXRhW1wiKlwiXSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFdlIGRvbid0IG5lZWQgdG8gZG8gYW55IHdyYXBwaW5nIGZvciB0aGlzIHByb3BlcnR5LFxuICAgICAgICAgICAgLy8gc28ganVzdCBmb3J3YXJkIGFsbCBhY2Nlc3MgdG8gdGhlIHVuZGVybHlpbmcgb2JqZWN0LlxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNhY2hlLCBwcm9wLCB7XG4gICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXRbcHJvcF07XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjYWNoZVtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSxcblxuICAgICAgICBzZXQocHJveHlUYXJnZXQsIHByb3AsIHZhbHVlLCByZWNlaXZlcikge1xuICAgICAgICAgIGlmIChwcm9wIGluIGNhY2hlKSB7XG4gICAgICAgICAgICBjYWNoZVtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGVmaW5lUHJvcGVydHkocHJveHlUYXJnZXQsIHByb3AsIGRlc2MpIHtcbiAgICAgICAgICByZXR1cm4gUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eShjYWNoZSwgcHJvcCwgZGVzYyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGVsZXRlUHJvcGVydHkocHJveHlUYXJnZXQsIHByb3ApIHtcbiAgICAgICAgICByZXR1cm4gUmVmbGVjdC5kZWxldGVQcm9wZXJ0eShjYWNoZSwgcHJvcCk7XG4gICAgICAgIH0sXG4gICAgICB9O1xuXG4gICAgICAvLyBQZXIgY29udHJhY3Qgb2YgdGhlIFByb3h5IEFQSSwgdGhlIFwiZ2V0XCIgcHJveHkgaGFuZGxlciBtdXN0IHJldHVybiB0aGVcbiAgICAgIC8vIG9yaWdpbmFsIHZhbHVlIG9mIHRoZSB0YXJnZXQgaWYgdGhhdCB2YWx1ZSBpcyBkZWNsYXJlZCByZWFkLW9ubHkgYW5kXG4gICAgICAvLyBub24tY29uZmlndXJhYmxlLiBGb3IgdGhpcyByZWFzb24sIHdlIGNyZWF0ZSBhbiBvYmplY3Qgd2l0aCB0aGVcbiAgICAgIC8vIHByb3RvdHlwZSBzZXQgdG8gYHRhcmdldGAgaW5zdGVhZCBvZiB1c2luZyBgdGFyZ2V0YCBkaXJlY3RseS5cbiAgICAgIC8vIE90aGVyd2lzZSB3ZSBjYW5ub3QgcmV0dXJuIGEgY3VzdG9tIG9iamVjdCBmb3IgQVBJcyB0aGF0XG4gICAgICAvLyBhcmUgZGVjbGFyZWQgcmVhZC1vbmx5IGFuZCBub24tY29uZmlndXJhYmxlLCBzdWNoIGFzIGBjaHJvbWUuZGV2dG9vbHNgLlxuICAgICAgLy9cbiAgICAgIC8vIFRoZSBwcm94eSBoYW5kbGVycyB0aGVtc2VsdmVzIHdpbGwgc3RpbGwgdXNlIHRoZSBvcmlnaW5hbCBgdGFyZ2V0YFxuICAgICAgLy8gaW5zdGVhZCBvZiB0aGUgYHByb3h5VGFyZ2V0YCwgc28gdGhhdCB0aGUgbWV0aG9kcyBhbmQgcHJvcGVydGllcyBhcmVcbiAgICAgIC8vIGRlcmVmZXJlbmNlZCB2aWEgdGhlIG9yaWdpbmFsIHRhcmdldHMuXG4gICAgICBsZXQgcHJveHlUYXJnZXQgPSBPYmplY3QuY3JlYXRlKHRhcmdldCk7XG4gICAgICByZXR1cm4gbmV3IFByb3h5KHByb3h5VGFyZ2V0LCBoYW5kbGVycyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBzZXQgb2Ygd3JhcHBlciBmdW5jdGlvbnMgZm9yIGFuIGV2ZW50IG9iamVjdCwgd2hpY2ggaGFuZGxlc1xuICAgICAqIHdyYXBwaW5nIG9mIGxpc3RlbmVyIGZ1bmN0aW9ucyB0aGF0IHRob3NlIG1lc3NhZ2VzIGFyZSBwYXNzZWQuXG4gICAgICpcbiAgICAgKiBBIHNpbmdsZSB3cmFwcGVyIGlzIGNyZWF0ZWQgZm9yIGVhY2ggbGlzdGVuZXIgZnVuY3Rpb24sIGFuZCBzdG9yZWQgaW4gYVxuICAgICAqIG1hcC4gU3Vic2VxdWVudCBjYWxscyB0byBgYWRkTGlzdGVuZXJgLCBgaGFzTGlzdGVuZXJgLCBvciBgcmVtb3ZlTGlzdGVuZXJgXG4gICAgICogcmV0cmlldmUgdGhlIG9yaWdpbmFsIHdyYXBwZXIsIHNvIHRoYXQgIGF0dGVtcHRzIHRvIHJlbW92ZSBhXG4gICAgICogcHJldmlvdXNseS1hZGRlZCBsaXN0ZW5lciB3b3JrIGFzIGV4cGVjdGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtEZWZhdWx0V2Vha01hcDxmdW5jdGlvbiwgZnVuY3Rpb24+fSB3cmFwcGVyTWFwXG4gICAgICogICAgICAgIEEgRGVmYXVsdFdlYWtNYXAgb2JqZWN0IHdoaWNoIHdpbGwgY3JlYXRlIHRoZSBhcHByb3ByaWF0ZSB3cmFwcGVyXG4gICAgICogICAgICAgIGZvciBhIGdpdmVuIGxpc3RlbmVyIGZ1bmN0aW9uIHdoZW4gb25lIGRvZXMgbm90IGV4aXN0LCBhbmQgcmV0cmlldmVcbiAgICAgKiAgICAgICAgYW4gZXhpc3Rpbmcgb25lIHdoZW4gaXQgZG9lcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAgICovXG4gICAgY29uc3Qgd3JhcEV2ZW50ID0gd3JhcHBlck1hcCA9PiAoe1xuICAgICAgYWRkTGlzdGVuZXIodGFyZ2V0LCBsaXN0ZW5lciwgLi4uYXJncykge1xuICAgICAgICB0YXJnZXQuYWRkTGlzdGVuZXIod3JhcHBlck1hcC5nZXQobGlzdGVuZXIpLCAuLi5hcmdzKTtcbiAgICAgIH0sXG5cbiAgICAgIGhhc0xpc3RlbmVyKHRhcmdldCwgbGlzdGVuZXIpIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldC5oYXNMaXN0ZW5lcih3cmFwcGVyTWFwLmdldChsaXN0ZW5lcikpO1xuICAgICAgfSxcblxuICAgICAgcmVtb3ZlTGlzdGVuZXIodGFyZ2V0LCBsaXN0ZW5lcikge1xuICAgICAgICB0YXJnZXQucmVtb3ZlTGlzdGVuZXIod3JhcHBlck1hcC5nZXQobGlzdGVuZXIpKTtcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBjb25zdCBvblJlcXVlc3RGaW5pc2hlZFdyYXBwZXJzID0gbmV3IERlZmF1bHRXZWFrTWFwKGxpc3RlbmVyID0+IHtcbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gbGlzdGVuZXI7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogV3JhcHMgYW4gb25SZXF1ZXN0RmluaXNoZWQgbGlzdGVuZXIgZnVuY3Rpb24gc28gdGhhdCBpdCB3aWxsIHJldHVybiBhXG4gICAgICAgKiBgZ2V0Q29udGVudCgpYCBwcm9wZXJ0eSB3aGljaCByZXR1cm5zIGEgYFByb21pc2VgIHJhdGhlciB0aGFuIHVzaW5nIGFcbiAgICAgICAqIGNhbGxiYWNrIEFQSS5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gcmVxXG4gICAgICAgKiAgICAgICAgVGhlIEhBUiBlbnRyeSBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBuZXR3b3JrIHJlcXVlc3QuXG4gICAgICAgKi9cbiAgICAgIHJldHVybiBmdW5jdGlvbiBvblJlcXVlc3RGaW5pc2hlZChyZXEpIHtcbiAgICAgICAgY29uc3Qgd3JhcHBlZFJlcSA9IHdyYXBPYmplY3QocmVxLCB7fSAvKiB3cmFwcGVycyAqLywge1xuICAgICAgICAgIGdldENvbnRlbnQ6IHtcbiAgICAgICAgICAgIG1pbkFyZ3M6IDAsXG4gICAgICAgICAgICBtYXhBcmdzOiAwLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBsaXN0ZW5lcih3cmFwcGVkUmVxKTtcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICBjb25zdCBvbk1lc3NhZ2VXcmFwcGVycyA9IG5ldyBEZWZhdWx0V2Vha01hcChsaXN0ZW5lciA9PiB7XG4gICAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFdyYXBzIGEgbWVzc2FnZSBsaXN0ZW5lciBmdW5jdGlvbiBzbyB0aGF0IGl0IG1heSBzZW5kIHJlc3BvbnNlcyBiYXNlZCBvblxuICAgICAgICogaXRzIHJldHVybiB2YWx1ZSwgcmF0aGVyIHRoYW4gYnkgcmV0dXJuaW5nIGEgc2VudGluZWwgdmFsdWUgYW5kIGNhbGxpbmcgYVxuICAgICAgICogY2FsbGJhY2suIElmIHRoZSBsaXN0ZW5lciBmdW5jdGlvbiByZXR1cm5zIGEgUHJvbWlzZSwgdGhlIHJlc3BvbnNlIGlzXG4gICAgICAgKiBzZW50IHdoZW4gdGhlIHByb21pc2UgZWl0aGVyIHJlc29sdmVzIG9yIHJlamVjdHMuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHsqfSBtZXNzYWdlXG4gICAgICAgKiAgICAgICAgVGhlIG1lc3NhZ2Ugc2VudCBieSB0aGUgb3RoZXIgZW5kIG9mIHRoZSBjaGFubmVsLlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IHNlbmRlclxuICAgICAgICogICAgICAgIERldGFpbHMgYWJvdXQgdGhlIHNlbmRlciBvZiB0aGUgbWVzc2FnZS5cbiAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24oKil9IHNlbmRSZXNwb25zZVxuICAgICAgICogICAgICAgIEEgY2FsbGJhY2sgd2hpY2gsIHdoZW4gY2FsbGVkIHdpdGggYW4gYXJiaXRyYXJ5IGFyZ3VtZW50LCBzZW5kc1xuICAgICAgICogICAgICAgIHRoYXQgdmFsdWUgYXMgYSByZXNwb25zZS5cbiAgICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAgICogICAgICAgIFRydWUgaWYgdGhlIHdyYXBwZWQgbGlzdGVuZXIgcmV0dXJuZWQgYSBQcm9taXNlLCB3aGljaCB3aWxsIGxhdGVyXG4gICAgICAgKiAgICAgICAgeWllbGQgYSByZXNwb25zZS4gRmFsc2Ugb3RoZXJ3aXNlLlxuICAgICAgICovXG4gICAgICByZXR1cm4gZnVuY3Rpb24gb25NZXNzYWdlKG1lc3NhZ2UsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XG4gICAgICAgIGxldCBkaWRDYWxsU2VuZFJlc3BvbnNlID0gZmFsc2U7XG5cbiAgICAgICAgbGV0IHdyYXBwZWRTZW5kUmVzcG9uc2U7XG4gICAgICAgIGxldCBzZW5kUmVzcG9uc2VQcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgd3JhcHBlZFNlbmRSZXNwb25zZSA9IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBkaWRDYWxsU2VuZFJlc3BvbnNlID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCByZXN1bHQ7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmVzdWx0ID0gbGlzdGVuZXIobWVzc2FnZSwgc2VuZGVyLCB3cmFwcGVkU2VuZFJlc3BvbnNlKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgcmVzdWx0ID0gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGlzUmVzdWx0VGhlbmFibGUgPSByZXN1bHQgIT09IHRydWUgJiYgaXNUaGVuYWJsZShyZXN1bHQpO1xuXG4gICAgICAgIC8vIElmIHRoZSBsaXN0ZW5lciBkaWRuJ3QgcmV0dXJuZWQgdHJ1ZSBvciBhIFByb21pc2UsIG9yIGNhbGxlZFxuICAgICAgICAvLyB3cmFwcGVkU2VuZFJlc3BvbnNlIHN5bmNocm9ub3VzbHksIHdlIGNhbiBleGl0IGVhcmxpZXJcbiAgICAgICAgLy8gYmVjYXVzZSB0aGVyZSB3aWxsIGJlIG5vIHJlc3BvbnNlIHNlbnQgZnJvbSB0aGlzIGxpc3RlbmVyLlxuICAgICAgICBpZiAocmVzdWx0ICE9PSB0cnVlICYmICFpc1Jlc3VsdFRoZW5hYmxlICYmICFkaWRDYWxsU2VuZFJlc3BvbnNlKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQSBzbWFsbCBoZWxwZXIgdG8gc2VuZCB0aGUgbWVzc2FnZSBpZiB0aGUgcHJvbWlzZSByZXNvbHZlc1xuICAgICAgICAvLyBhbmQgYW4gZXJyb3IgaWYgdGhlIHByb21pc2UgcmVqZWN0cyAoYSB3cmFwcGVkIHNlbmRNZXNzYWdlIGhhc1xuICAgICAgICAvLyB0byB0cmFuc2xhdGUgdGhlIG1lc3NhZ2UgaW50byBhIHJlc29sdmVkIHByb21pc2Ugb3IgYSByZWplY3RlZFxuICAgICAgICAvLyBwcm9taXNlKS5cbiAgICAgICAgY29uc3Qgc2VuZFByb21pc2VkUmVzdWx0ID0gKHByb21pc2UpID0+IHtcbiAgICAgICAgICBwcm9taXNlLnRoZW4obXNnID0+IHtcbiAgICAgICAgICAgIC8vIHNlbmQgdGhlIG1lc3NhZ2UgdmFsdWUuXG4gICAgICAgICAgICBzZW5kUmVzcG9uc2UobXNnKTtcbiAgICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICAvLyBTZW5kIGEgSlNPTiByZXByZXNlbnRhdGlvbiBvZiB0aGUgZXJyb3IgaWYgdGhlIHJlamVjdGVkIHZhbHVlXG4gICAgICAgICAgICAvLyBpcyBhbiBpbnN0YW5jZSBvZiBlcnJvciwgb3IgdGhlIG9iamVjdCBpdHNlbGYgb3RoZXJ3aXNlLlxuICAgICAgICAgICAgbGV0IG1lc3NhZ2U7XG4gICAgICAgICAgICBpZiAoZXJyb3IgJiYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgfHxcbiAgICAgICAgICAgICAgICB0eXBlb2YgZXJyb3IubWVzc2FnZSA9PT0gXCJzdHJpbmdcIikpIHtcbiAgICAgICAgICAgICAgbWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBtZXNzYWdlID0gXCJBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbmRSZXNwb25zZSh7XG4gICAgICAgICAgICAgIF9fbW96V2ViRXh0ZW5zaW9uUG9seWZpbGxSZWplY3RfXzogdHJ1ZSxcbiAgICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAvLyBQcmludCBhbiBlcnJvciBvbiB0aGUgY29uc29sZSBpZiB1bmFibGUgdG8gc2VuZCB0aGUgcmVzcG9uc2UuXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHNlbmQgb25NZXNzYWdlIHJlamVjdGVkIHJlcGx5XCIsIGVycik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gSWYgdGhlIGxpc3RlbmVyIHJldHVybmVkIGEgUHJvbWlzZSwgc2VuZCB0aGUgcmVzb2x2ZWQgdmFsdWUgYXMgYVxuICAgICAgICAvLyByZXN1bHQsIG90aGVyd2lzZSB3YWl0IHRoZSBwcm9taXNlIHJlbGF0ZWQgdG8gdGhlIHdyYXBwZWRTZW5kUmVzcG9uc2VcbiAgICAgICAgLy8gY2FsbGJhY2sgdG8gcmVzb2x2ZSBhbmQgc2VuZCBpdCBhcyBhIHJlc3BvbnNlLlxuICAgICAgICBpZiAoaXNSZXN1bHRUaGVuYWJsZSkge1xuICAgICAgICAgIHNlbmRQcm9taXNlZFJlc3VsdChyZXN1bHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbmRQcm9taXNlZFJlc3VsdChzZW5kUmVzcG9uc2VQcm9taXNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIExldCBDaHJvbWUga25vdyB0aGF0IHRoZSBsaXN0ZW5lciBpcyByZXBseWluZy5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgY29uc3Qgd3JhcHBlZFNlbmRNZXNzYWdlQ2FsbGJhY2sgPSAoe3JlamVjdCwgcmVzb2x2ZX0sIHJlcGx5KSA9PiB7XG4gICAgICBpZiAoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvcikge1xuICAgICAgICAvLyBEZXRlY3Qgd2hlbiBub25lIG9mIHRoZSBsaXN0ZW5lcnMgcmVwbGllZCB0byB0aGUgc2VuZE1lc3NhZ2UgY2FsbCBhbmQgcmVzb2x2ZVxuICAgICAgICAvLyB0aGUgcHJvbWlzZSB0byB1bmRlZmluZWQgYXMgaW4gRmlyZWZveC5cbiAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL3dlYmV4dGVuc2lvbi1wb2x5ZmlsbC9pc3N1ZXMvMTMwXG4gICAgICAgIGlmIChleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yLm1lc3NhZ2UgPT09IENIUk9NRV9TRU5EX01FU1NBR0VfQ0FMTEJBQ0tfTk9fUkVTUE9OU0VfTUVTU0FHRSkge1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IubWVzc2FnZSkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHJlcGx5ICYmIHJlcGx5Ll9fbW96V2ViRXh0ZW5zaW9uUG9seWZpbGxSZWplY3RfXykge1xuICAgICAgICAvLyBDb252ZXJ0IGJhY2sgdGhlIEpTT04gcmVwcmVzZW50YXRpb24gb2YgdGhlIGVycm9yIGludG9cbiAgICAgICAgLy8gYW4gRXJyb3IgaW5zdGFuY2UuXG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IocmVwbHkubWVzc2FnZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZShyZXBseSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHdyYXBwZWRTZW5kTWVzc2FnZSA9IChuYW1lLCBtZXRhZGF0YSwgYXBpTmFtZXNwYWNlT2JqLCAuLi5hcmdzKSA9PiB7XG4gICAgICBpZiAoYXJncy5sZW5ndGggPCBtZXRhZGF0YS5taW5BcmdzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYXQgbGVhc3QgJHttZXRhZGF0YS5taW5BcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5taW5BcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChhcmdzLmxlbmd0aCA+IG1ldGFkYXRhLm1heEFyZ3MpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBtb3N0ICR7bWV0YWRhdGEubWF4QXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWF4QXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCB3cmFwcGVkQ2IgPSB3cmFwcGVkU2VuZE1lc3NhZ2VDYWxsYmFjay5iaW5kKG51bGwsIHtyZXNvbHZlLCByZWplY3R9KTtcbiAgICAgICAgYXJncy5wdXNoKHdyYXBwZWRDYik7XG4gICAgICAgIGFwaU5hbWVzcGFjZU9iai5zZW5kTWVzc2FnZSguLi5hcmdzKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBzdGF0aWNXcmFwcGVycyA9IHtcbiAgICAgIGRldnRvb2xzOiB7XG4gICAgICAgIG5ldHdvcms6IHtcbiAgICAgICAgICBvblJlcXVlc3RGaW5pc2hlZDogd3JhcEV2ZW50KG9uUmVxdWVzdEZpbmlzaGVkV3JhcHBlcnMpLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHJ1bnRpbWU6IHtcbiAgICAgICAgb25NZXNzYWdlOiB3cmFwRXZlbnQob25NZXNzYWdlV3JhcHBlcnMpLFxuICAgICAgICBvbk1lc3NhZ2VFeHRlcm5hbDogd3JhcEV2ZW50KG9uTWVzc2FnZVdyYXBwZXJzKSxcbiAgICAgICAgc2VuZE1lc3NhZ2U6IHdyYXBwZWRTZW5kTWVzc2FnZS5iaW5kKG51bGwsIFwic2VuZE1lc3NhZ2VcIiwge21pbkFyZ3M6IDEsIG1heEFyZ3M6IDN9KSxcbiAgICAgIH0sXG4gICAgICB0YWJzOiB7XG4gICAgICAgIHNlbmRNZXNzYWdlOiB3cmFwcGVkU2VuZE1lc3NhZ2UuYmluZChudWxsLCBcInNlbmRNZXNzYWdlXCIsIHttaW5BcmdzOiAyLCBtYXhBcmdzOiAzfSksXG4gICAgICB9LFxuICAgIH07XG4gICAgY29uc3Qgc2V0dGluZ01ldGFkYXRhID0ge1xuICAgICAgY2xlYXI6IHttaW5BcmdzOiAxLCBtYXhBcmdzOiAxfSxcbiAgICAgIGdldDoge21pbkFyZ3M6IDEsIG1heEFyZ3M6IDF9LFxuICAgICAgc2V0OiB7bWluQXJnczogMSwgbWF4QXJnczogMX0sXG4gICAgfTtcbiAgICBhcGlNZXRhZGF0YS5wcml2YWN5ID0ge1xuICAgICAgbmV0d29yazoge1wiKlwiOiBzZXR0aW5nTWV0YWRhdGF9LFxuICAgICAgc2VydmljZXM6IHtcIipcIjogc2V0dGluZ01ldGFkYXRhfSxcbiAgICAgIHdlYnNpdGVzOiB7XCIqXCI6IHNldHRpbmdNZXRhZGF0YX0sXG4gICAgfTtcblxuICAgIHJldHVybiB3cmFwT2JqZWN0KGV4dGVuc2lvbkFQSXMsIHN0YXRpY1dyYXBwZXJzLCBhcGlNZXRhZGF0YSk7XG4gIH07XG5cbiAgLy8gVGhlIGJ1aWxkIHByb2Nlc3MgYWRkcyBhIFVNRCB3cmFwcGVyIGFyb3VuZCB0aGlzIGZpbGUsIHdoaWNoIG1ha2VzIHRoZVxuICAvLyBgbW9kdWxlYCB2YXJpYWJsZSBhdmFpbGFibGUuXG4gIG1vZHVsZS5leHBvcnRzID0gd3JhcEFQSXMoY2hyb21lKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gZ2xvYmFsVGhpcy5icm93c2VyO1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUtMjAyNSBBZGd1YXJkIFNvZnR3YXJlIEx0ZC5cbiAqXG4gKiBAZmlsZVxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgQWRHdWFyZCBCcm93c2VyIEV4dGVuc2lvbiAoaHR0cHM6Ly9naXRodWIuY29tL0FkZ3VhcmRUZWFtL0FkZ3VhcmRCcm93c2VyRXh0ZW5zaW9uKS5cbiAqXG4gKiBBZEd1YXJkIEJyb3dzZXIgRXh0ZW5zaW9uIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBBZEd1YXJkIEJyb3dzZXIgRXh0ZW5zaW9uIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIEFkR3VhcmQgQnJvd3NlciBFeHRlbnNpb24uIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuXG5pbXBvcnQgeyBkZXZ0b29sc0VsZW1lbnRzU2lkZWJhciB9IGZyb20gJy4uLy4uL3NyYy9wYWdlcy9kZXZ0b29scy1lbGVtZW50cy1zaWRlYmFyJztcblxuZGV2dG9vbHNFbGVtZW50c1NpZGViYXIuaW5pdCgpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUtMjAyNSBBZGd1YXJkIFNvZnR3YXJlIEx0ZC5cbiAqXG4gKiBAZmlsZVxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgQWRHdWFyZCBCcm93c2VyIEV4dGVuc2lvbiAoaHR0cHM6Ly9naXRodWIuY29tL0FkZ3VhcmRUZWFtL0FkZ3VhcmRCcm93c2VyRXh0ZW5zaW9uKS5cbiAqXG4gKiBBZEd1YXJkIEJyb3dzZXIgRXh0ZW5zaW9uIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBBZEd1YXJkIEJyb3dzZXIgRXh0ZW5zaW9uIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIEFkR3VhcmQgQnJvd3NlciBFeHRlbnNpb24uIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1uZXN0ZWQtdGVybmFyeSAqL1xuXG5pbXBvcnQgeyBNZXNzYWdlVHlwZSwgQVBQX01FU1NBR0VfSEFORExFUl9OQU1FIH0gZnJvbSAnLi4vY29tbW9uL21lc3NhZ2VzL2luZGV4JztcblxuY29uc3QgYnJvd3NlciA9IHdpbmRvdy5icm93c2VyIHx8IGNocm9tZTtcblxuZXhwb3J0IGNvbnN0IGRldnRvb2xzRWxlbWVudHNTaWRlYmFyID0gKCgpID0+IHtcbiAgICBjb25zdCBpbml0UGFuZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGluaXRUaGVtZSgpO1xuICAgICAgICBpbml0RWxlbWVudHMoKTtcbiAgICAgICAgYmluZEV2ZW50cygpO1xuXG4gICAgICAgIGNvbnN0IG9uRWxlbWVudFNlbGVjdGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgYnJvd3Nlci5kZXZ0b29scy5pbnNwZWN0ZWRXaW5kb3cuZXZhbCgnRGV2VG9vbHNSdWxlc0NvbnN0cnVjdG9yLmdldEVsZW1lbnRJbmZvKCQwKScsIHtcbiAgICAgICAgICAgICAgICB1c2VDb250ZW50U2NyaXB0Q29udGV4dDogdHJ1ZSxcbiAgICAgICAgICAgIH0sIChpbmZvKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFpbmZvKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBTb3J0IGF0dHJpYnV0ZXNcbiAgICAgICAgICAgICAgICBpbmZvLmF0dHJpYnV0ZXMuc29ydCgoYTEsIGEyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGkxID0gYTEubmFtZSA9PT0gJ2lkJyA/IDAgOiAoYTEubmFtZSA9PT0gJ2NsYXNzJyA/IDEgOiAyKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaTIgPSBhMi5uYW1lID09PSAnaWQnID8gMCA6IChhMi5uYW1lID09PSAnY2xhc3MnID8gMSA6IDIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaTEgLSBpMjtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHdpbmRvdy5zZWxlY3RlZEVsZW1lbnRJbmZvID0gaW5mbztcblxuICAgICAgICAgICAgICAgIHVwZGF0ZVJ1bGUoKTtcbiAgICAgICAgICAgICAgICBoYW5kbGVTaG93QmxvY2tTZXR0aW5ncyhcbiAgICAgICAgICAgICAgICAgICAgaW5mby5oYXZlVXJsQmxvY2tQYXJhbWV0ZXIsXG4gICAgICAgICAgICAgICAgICAgIGluZm8uaGF2ZUNsYXNzQXR0cmlidXRlICYmICFpbmZvLmhhdmVJZEF0dHJpYnV0ZSxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHNldHVwQXR0cmlidXRlc0luZm8oaW5mbyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBvblBhZ2VDaGFuZ2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXZpZXctcnVsZS1idXR0b24nKS52YWx1ZSA9ICdQcmV2aWV3JztcbiAgICAgICAgICAgIGRlbGV0ZSB3aW5kb3cuYWRndWFyZERldlRvb2xzUHJldmlldztcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoYnJvd3Nlci5kZXZ0b29scykge1xuICAgICAgICAgICAgYnJvd3Nlci5kZXZ0b29scy5wYW5lbHMuZWxlbWVudHMub25TZWxlY3Rpb25DaGFuZ2VkLmFkZExpc3RlbmVyKG9uRWxlbWVudFNlbGVjdGVkKTtcbiAgICAgICAgICAgIGJyb3dzZXIuZGV2dG9vbHMubmV0d29yay5vbk5hdmlnYXRlZC5hZGRMaXN0ZW5lcihvblBhZ2VDaGFuZ2VkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9uRWxlbWVudFNlbGVjdGVkKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGluaXRUaGVtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgdGhlbWUgPSBicm93c2VyLmRldnRvb2xzLnBhbmVscy50aGVtZU5hbWU7XG4gICAgICAgIGlmICh0aGVtZSA9PT0gJ2RhcmsnKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJy10aGVtZS13aXRoLWRhcmstYmFja2dyb3VuZCcpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGluaXRFbGVtZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Jsb2NrLWJ5LXVybC1jaGVja2JveCcpLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZS1mdWxsLWNzcy1wYXRoJykuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb25lLWRvbWFpbi1jaGVja2JveCcpLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmlsdGVyLXJ1bGUtdGV4dCcpLnZhbHVlID0gJyc7XG5cbiAgICAgICAgY29uc3QgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXR0cmlidXRlcy1ibG9jaycpO1xuICAgICAgICB3aGlsZSAocGxhY2Vob2xkZXIuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgcGxhY2Vob2xkZXIucmVtb3ZlQ2hpbGQocGxhY2Vob2xkZXIuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgdXBkYXRlUnVsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZ2V0SW5zcGVjdGVkUGFnZVVybCgodXJsKSA9PiB7XG4gICAgICAgICAgICB1cGRhdGVGaWx0ZXJSdWxlSW5wdXQod2luZG93LnNlbGVjdGVkRWxlbWVudEluZm8sIHVybCk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBiaW5kRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBwcmV2aWV3UnVsZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2aWV3LXJ1bGUtYnV0dG9uJyk7XG4gICAgICAgIHByZXZpZXdSdWxlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgaWYgKHdpbmRvdy5zZWxlY3RlZEVsZW1lbnRJbmZvKSB7XG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5hZGd1YXJkRGV2VG9vbHNQcmV2aWV3KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBwcmV2aWV3XG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbFByZXZpZXcoKTtcbiAgICAgICAgICAgICAgICAgICAgcHJldmlld1J1bGVCdXR0b24udmFsdWUgPSAnUHJldmlldyc7XG5cbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHdpbmRvdy5hZGd1YXJkRGV2VG9vbHNQcmV2aWV3O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgcnVsZVRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsdGVyLXJ1bGUtdGV4dCcpLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICghcnVsZVRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhcHBseVByZXZpZXcocnVsZVRleHQpO1xuXG4gICAgICAgICAgICAgICAgcHJldmlld1J1bGVCdXR0b24udmFsdWUgPSAnQ2FuY2VsIHByZXZpZXcnO1xuXG4gICAgICAgICAgICAgICAgd2luZG93LmFkZ3VhcmREZXZUb29sc1ByZXZpZXcgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXJ1bGUtYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBpZiAod2luZG93LnNlbGVjdGVkRWxlbWVudEluZm8pIHtcbiAgICAgICAgICAgICAgICBhZGRSdWxlRm9yRWxlbWVudCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCB1cGRhdGVSdWxlQmxvY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnVwZGF0ZS1ydWxlLWJsb2NrJyk7XG4gICAgICAgIHVwZGF0ZVJ1bGVCbG9ja3MuZm9yRWFjaCgoYmxvY2spID0+IHtcbiAgICAgICAgICAgIGJsb2NrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHVwZGF0ZVBhbmVsRWxlbWVudHMoKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVSdWxlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdC1hdHRyaWJ1dGVzLWNoZWNrYm94JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBjaGVja2VkIH0gPSBlLmN1cnJlbnRUYXJnZXQ7XG5cbiAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZUNoZWNrQm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXR0cmlidXRlLWNoZWNrLWJveCcpO1xuICAgICAgICAgICAgYXR0cmlidXRlQ2hlY2tCb3hlcy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICAgICAgICAgIGVsLmNoZWNrZWQgPSBjaGVja2VkO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHVwZGF0ZVBhbmVsRWxlbWVudHMoKTtcbiAgICAgICAgICAgIHVwZGF0ZVJ1bGUoKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHVwZGF0ZVBhbmVsRWxlbWVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGNoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICAgICAgJyNvbmUtZG9tYWluLWNoZWNrYm94LCAjY3JlYXRlLWZ1bGwtY3NzLXBhdGgsIC5hdHRyaWJ1dGUtY2hlY2stYm94JyxcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBBbGwgY2hlY2tib3hlcyBzaG91bGQgYmUgZGlzYWJsZWQgaWYgYmxvY2sgYnkgdXJsIGlzIGNoZWNrZWRcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNibG9jay1ieS11cmwtY2hlY2tib3gnKS5jaGVja2VkKSB7XG4gICAgICAgICAgICBjaGVja2JveGVzLmZvckVhY2goKGNoZWNrYm94KSA9PiB7XG4gICAgICAgICAgICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGVja2JveGVzLmZvckVhY2goKGNoZWNrYm94KSA9PiB7XG4gICAgICAgICAgICAgICAgY2hlY2tib3gucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlU2hvd0Jsb2NrU2V0dGluZ3MgPSBmdW5jdGlvbiAoc2hvd0Jsb2NrQnlVcmwsIGNyZWF0ZUZ1bGxDc3NQYXRoKSB7XG4gICAgICAgIGlmIChzaG93QmxvY2tCeVVybCkge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Jsb2NrLWJ5LXVybC1jaGVja2JveC1ibG9jaycpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Jsb2NrLWJ5LXVybC1jaGVja2JveCcpLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNibG9jay1ieS11cmwtY2hlY2tib3gtYmxvY2snKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjcmVhdGVGdWxsQ3NzUGF0aCkge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZS1mdWxsLWNzcy1wYXRoLWJsb2NrJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlLWZ1bGwtY3NzLXBhdGgnKS5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlLWZ1bGwtY3NzLXBhdGgnKS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUtZnVsbC1jc3MtcGF0aC1ibG9jaycpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0dXBBdHRyaWJ1dGVzSW5mbyA9IGZ1bmN0aW9uIChpbmZvKSB7XG4gICAgICAgIGNvbnN0IHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F0dHJpYnV0ZXMtYmxvY2snKTtcblxuICAgICAgICB3aGlsZSAocGxhY2Vob2xkZXIuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgcGxhY2Vob2xkZXIucmVtb3ZlQ2hpbGQocGxhY2Vob2xkZXIuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjcmVhdGVBdHRyaWJ1dGVFbGVtZW50ID0gKGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVZhbHVlLCBkZWZhdWx0Q2hlY2tlZCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2hlY2tlZCA9IGRlZmF1bHRDaGVja2VkID8gJ2NoZWNrZWQ9XCJ0cnVlXCInIDogJyc7XG5cbiAgICAgICAgICAgIGNvbnN0IGVsSHRtbCA9IGBcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicGFyZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJlbmFibGVkLWJ1dHRvbiBhdHRyaWJ1dGUtY2hlY2stYm94XCIgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJhdHRyaWJ1dGUtY2hlY2stYm94LSR7YXR0cmlidXRlTmFtZX1cIiAke2NoZWNrZWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ3ZWJraXQtY3NzLXByb3BlcnR5XCI+JHthdHRyaWJ1dGVOYW1lfTwvc3Bhbj46XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZhbHVlIGF0dHJpYnV0ZS1jaGVjay1ib3gtdmFsdWVcIj4ke2F0dHJpYnV0ZVZhbHVlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIGA7XG5cbiAgICAgICAgICAgIGNvbnN0IHRtcEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0bXBFbC5pbm5lckhUTUwgPSBlbEh0bWw7XG4gICAgICAgICAgICByZXR1cm4gdG1wRWwuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGluZm8udGFnTmFtZSkge1xuICAgICAgICAgICAgcGxhY2Vob2xkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlQXR0cmlidXRlRWxlbWVudCgndGFnJywgaW5mby50YWdOYW1lLnRvTG93ZXJDYXNlKCksIHRydWUpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5mby5hdHRyaWJ1dGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGUgPSBpbmZvLmF0dHJpYnV0ZXNbaV07XG5cbiAgICAgICAgICAgIGlmIChhdHRyaWJ1dGUubmFtZSA9PT0gJ2NsYXNzJyAmJiBhdHRyaWJ1dGUudmFsdWUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzcGxpdCA9IGF0dHJpYnV0ZS52YWx1ZS5zcGxpdCgnICcpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc3BsaXQubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBzcGxpdFtqXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7IC8vIFNraXAgZW1wdHkgdmFsdWVzLiBMaWtlICdjbGFzczEgY2xhc3MyICAgJ1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlQXR0cmlidXRlRWxlbWVudChhdHRyaWJ1dGUubmFtZSwgdmFsdWUsIHRydWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlQXR0cmlidXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlLm5hbWUgPT09ICdpZCcsXG4gICAgICAgICAgICAgICAgKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGxhY2Vob2xkZXIuY2hpbGROb2Rlcy5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0LWF0dHJpYnV0ZXMtY2hlY2tib3gnKS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0LWF0dHJpYnV0ZXMtY2hlY2tib3gnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGdldEluc3BlY3RlZFBhZ2VVcmwgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgYnJvd3Nlci5kZXZ0b29scy5pbnNwZWN0ZWRXaW5kb3cuZXZhbCgnZG9jdW1lbnQubG9jYXRpb24gJiYgZG9jdW1lbnQubG9jYXRpb24uaHJlZicsIChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrKHJlc3VsdCk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCB1cGRhdGVGaWx0ZXJSdWxlSW5wdXQgPSBmdW5jdGlvbiAoaW5mbywgdXJsKSB7XG4gICAgICAgIGNvbnN0IGlzQmxvY2tCeVVybCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNibG9jay1ieS11cmwtY2hlY2tib3gnKS5jaGVja2VkO1xuICAgICAgICBjb25zdCBjcmVhdGVGdWxsQ3NzUGF0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUtZnVsbC1jc3MtcGF0aCcpLmNoZWNrZWQ7XG4gICAgICAgIGNvbnN0IGlzQmxvY2tPbmVEb21haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb25lLWRvbWFpbi1jaGVja2JveCcpLmNoZWNrZWQ7XG5cbiAgICAgICAgbGV0IGluY2x1ZGVUYWdOYW1lID0gdHJ1ZTtcbiAgICAgICAgbGV0IGluY2x1ZGVFbGVtZW50SWQgPSB0cnVlO1xuICAgICAgICBjb25zdCBzZWxlY3RlZENsYXNzZXMgPSBbXTtcbiAgICAgICAgbGV0IGF0dHJpYnV0ZXNTZWxlY3RvciA9ICcnO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXR0cmlidXRlLWNoZWNrLWJveCcpLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhdHRyTmFtZSA9IGVsLmlkLnN1YnN0cmluZygnYXR0cmlidXRlLWNoZWNrLWJveC0nLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgaWYgKGF0dHJOYW1lID09PSAndGFnJykge1xuICAgICAgICAgICAgICAgICAgICBpbmNsdWRlVGFnTmFtZSA9IGVsLmNoZWNrZWQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhdHRyTmFtZSA9PT0gJ2lkJykge1xuICAgICAgICAgICAgICAgICAgICBpbmNsdWRlRWxlbWVudElkID0gZWwuY2hlY2tlZDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVsLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXR0clZhbHVlID0gZWwucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuYXR0cmlidXRlLWNoZWNrLWJveC12YWx1ZScpLmlubmVyVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHJOYW1lID09PSAnY2xhc3MnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZENsYXNzZXMucHVzaChhdHRyVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlc1NlbGVjdG9yICs9IGBbJHthdHRyTmFtZX09XCIke2F0dHJWYWx1ZX1cIl1gO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgdXJsTWFzazogaW5mby51cmxCbG9ja0F0dHJpYnV0ZVZhbHVlLFxuICAgICAgICAgICAgaXNCbG9ja09uZURvbWFpbjogIWlzQmxvY2tPbmVEb21haW4sXG4gICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICBydWxlVHlwZTogaXNCbG9ja0J5VXJsID8gJ1VSTCcgOiAnQ1NTJyxcbiAgICAgICAgICAgIGNzc1NlbGVjdG9yVHlwZTogY3JlYXRlRnVsbENzc1BhdGggPyAnU1RSSUNUX0ZVTEwnIDogJ1NUUklDVCcsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiBhdHRyaWJ1dGVzU2VsZWN0b3IsXG4gICAgICAgICAgICBleGNsdWRlVGFnTmFtZTogIWluY2x1ZGVUYWdOYW1lLFxuICAgICAgICAgICAgZXhjbHVkZUlkOiAhaW5jbHVkZUVsZW1lbnRJZCxcbiAgICAgICAgICAgIGNsYXNzTGlzdDogc2VsZWN0ZWRDbGFzc2VzLFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGZ1bmMgPSBgRGV2VG9vbHNSdWxlc0NvbnN0cnVjdG9yLmNvbnN0cnVjdFJ1bGVUZXh0KCQwLCAke0pTT04uc3RyaW5naWZ5KG9wdGlvbnMpfSk7YDtcbiAgICAgICAgYnJvd3Nlci5kZXZ0b29scy5pbnNwZWN0ZWRXaW5kb3cuZXZhbChmdW5jLCB7XG4gICAgICAgICAgICB1c2VDb250ZW50U2NyaXB0Q29udGV4dDogdHJ1ZSxcbiAgICAgICAgfSwgKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXItcnVsZS10ZXh0JykudmFsdWUgPSByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBhcHBseVByZXZpZXcgPSBmdW5jdGlvbiAocnVsZVRleHQpIHtcbiAgICAgICAgY29uc3QgZnVuYyA9IGBEZXZUb29sc0hlbHBlci5hcHBseVByZXZpZXcoJHtKU09OLnN0cmluZ2lmeSh7IHJ1bGVUZXh0IH0pfSk7YDtcbiAgICAgICAgYnJvd3Nlci5kZXZ0b29scy5pbnNwZWN0ZWRXaW5kb3cuZXZhbChmdW5jLCB7IHVzZUNvbnRlbnRTY3JpcHRDb250ZXh0OiB0cnVlIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBjYW5jZWxQcmV2aWV3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBmdW5jID0gJ0RldlRvb2xzSGVscGVyLmNhbmNlbFByZXZpZXcoKTsnO1xuICAgICAgICBicm93c2VyLmRldnRvb2xzLmluc3BlY3RlZFdpbmRvdy5ldmFsKGZ1bmMsIHsgdXNlQ29udGVudFNjcmlwdENvbnRleHQ6IHRydWUgfSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFkZHMgdXNlcnJ1bGUgdmlhIGJhY2tncm91bmQgcGFnZVxuICAgICAqIFdlIGFkZCBydWxlIHZpYSBiYWNrZ3JvdW5kIHBhZ2UgdG8gbWl0aWdhdGUgdnVsbmVyYWJpbGl0aWVzXG4gICAgICogcmVsYXRlZCB3aXRoIG1lc3NhZ2VzIGZyb20gY29udGVudCBzY3JpcHRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBydWxlVGV4dFxuICAgICAqXG4gICAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gICAgICovXG4gICAgY29uc3QgYWRkUnVsZSA9IGFzeW5jIChydWxlVGV4dCkgPT4ge1xuICAgICAgICByZXR1cm4gYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgICAgICAgIGhhbmRsZXJOYW1lOiBBUFBfTUVTU0FHRV9IQU5ETEVSX05BTUUsXG4gICAgICAgICAgICB0eXBlOiBNZXNzYWdlVHlwZS5BZGRVc2VyUnVsZSxcbiAgICAgICAgICAgIGRhdGE6IHsgcnVsZVRleHQgfSxcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGFkZFJ1bGVGb3JFbGVtZW50ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBpZiAod2luZG93LmFkZ3VhcmREZXZUb29sc1ByZXZpZXcpIHtcbiAgICAgICAgICAgIC8vIFJlbW92ZSBwcmV2aWV3XG4gICAgICAgICAgICBjYW5jZWxQcmV2aWV3KCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBydWxlVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXItcnVsZS10ZXh0JykudmFsdWU7XG4gICAgICAgIGlmICghcnVsZVRleHQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IGFkZFJ1bGUocnVsZVRleHQpO1xuXG4gICAgICAgIGFwcGx5UHJldmlldyhydWxlVGV4dCk7XG4gICAgICAgIGRlbGV0ZSB3aW5kb3cuc2VsZWN0ZWRFbGVtZW50SW5mbztcbiAgICAgICAgaW5pdEVsZW1lbnRzKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICBpbml0UGFuZWwoKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGluaXQsXG4gICAgfTtcbn0pKCk7XG4iXSwibmFtZXMiOlsiQVBQX01FU1NBR0VfSEFORExFUl9OQU1FIiwiTWVzc2FnZVR5cGUiLCJzZW5kTWVzc2FnZSIsInNlbmRUYWJNZXNzYWdlIiwiTWVzc2FnZUhhbmRsZXIiLCJtZXNzYWdlSGFzVHlwZUZpZWxkIiwibWVzc2FnZUhhc1R5cGVBbmREYXRhRmllbGRzIiwiYnJvd3NlciIsIm1lc3NhZ2UiLCJpbml0IiwicnVudGltZSIsIm9uTWVzc2FnZSIsImFkZExpc3RlbmVyIiwiaGFuZGxlTWVzc2FnZSIsInR5cGUiLCJsaXN0ZW5lciIsImxpc3RlbmVycyIsImhhcyIsIkVycm9yIiwic2V0IiwicmVtb3ZlTGlzdGVuZXIiLCJkZWxldGUiLCJyZW1vdmVMaXN0ZW5lcnMiLCJjbGVhciIsImlzVmFsaWRNZXNzYWdlVHlwZSIsImhhbmRsZXJOYW1lIiwiY29uc3RydWN0b3IiLCJNYXAiLCJiaW5kIiwiZSIsInRhYklkIiwidGFicyIsImdsb2JhbFRoaXMiLCJjaHJvbWUiLCJpZCIsIkNIUk9NRV9TRU5EX01FU1NBR0VfQ0FMTEJBQ0tfTk9fUkVTUE9OU0VfTUVTU0FHRSIsIndyYXBBUElzIiwiZXh0ZW5zaW9uQVBJcyIsImFwaU1ldGFkYXRhIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsIkRlZmF1bHRXZWFrTWFwIiwiV2Vha01hcCIsImNyZWF0ZUl0ZW0iLCJpdGVtcyIsInVuZGVmaW5lZCIsImdldCIsImtleSIsImlzVGhlbmFibGUiLCJ2YWx1ZSIsInRoZW4iLCJtYWtlQ2FsbGJhY2siLCJwcm9taXNlIiwibWV0YWRhdGEiLCJjYWxsYmFja0FyZ3MiLCJsYXN0RXJyb3IiLCJyZWplY3QiLCJzaW5nbGVDYWxsYmFja0FyZyIsInJlc29sdmUiLCJwbHVyYWxpemVBcmd1bWVudHMiLCJudW1BcmdzIiwid3JhcEFzeW5jRnVuY3Rpb24iLCJuYW1lIiwiYXN5bmNGdW5jdGlvbldyYXBwZXIiLCJ0YXJnZXQiLCJhcmdzIiwibWluQXJncyIsIm1heEFyZ3MiLCJQcm9taXNlIiwiZmFsbGJhY2tUb05vQ2FsbGJhY2siLCJjYkVycm9yIiwiY29uc29sZSIsIndhcm4iLCJub0NhbGxiYWNrIiwid3JhcE1ldGhvZCIsIm1ldGhvZCIsIndyYXBwZXIiLCJQcm94eSIsImFwcGx5IiwidGFyZ2V0TWV0aG9kIiwidGhpc09iaiIsImNhbGwiLCJoYXNPd25Qcm9wZXJ0eSIsIkZ1bmN0aW9uIiwicHJvdG90eXBlIiwid3JhcE9iamVjdCIsIndyYXBwZXJzIiwiY2FjaGUiLCJjcmVhdGUiLCJoYW5kbGVycyIsInByb3h5VGFyZ2V0IiwicHJvcCIsInJlY2VpdmVyIiwiZGVmaW5lUHJvcGVydHkiLCJjb25maWd1cmFibGUiLCJlbnVtZXJhYmxlIiwiZGVzYyIsIlJlZmxlY3QiLCJkZWxldGVQcm9wZXJ0eSIsIndyYXBFdmVudCIsIndyYXBwZXJNYXAiLCJoYXNMaXN0ZW5lciIsIm9uUmVxdWVzdEZpbmlzaGVkV3JhcHBlcnMiLCJvblJlcXVlc3RGaW5pc2hlZCIsInJlcSIsIndyYXBwZWRSZXEiLCJnZXRDb250ZW50Iiwib25NZXNzYWdlV3JhcHBlcnMiLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiLCJkaWRDYWxsU2VuZFJlc3BvbnNlIiwid3JhcHBlZFNlbmRSZXNwb25zZSIsInNlbmRSZXNwb25zZVByb21pc2UiLCJyZXNwb25zZSIsInJlc3VsdCIsImVyciIsImlzUmVzdWx0VGhlbmFibGUiLCJzZW5kUHJvbWlzZWRSZXN1bHQiLCJtc2ciLCJlcnJvciIsIl9fbW96V2ViRXh0ZW5zaW9uUG9seWZpbGxSZWplY3RfXyIsImNhdGNoIiwid3JhcHBlZFNlbmRNZXNzYWdlQ2FsbGJhY2siLCJyZXBseSIsIndyYXBwZWRTZW5kTWVzc2FnZSIsImFwaU5hbWVzcGFjZU9iaiIsIndyYXBwZWRDYiIsInB1c2giLCJzdGF0aWNXcmFwcGVycyIsImRldnRvb2xzIiwibmV0d29yayIsIm9uTWVzc2FnZUV4dGVybmFsIiwic2V0dGluZ01ldGFkYXRhIiwicHJpdmFjeSIsInNlcnZpY2VzIiwid2Vic2l0ZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiZGV2dG9vbHNFbGVtZW50c1NpZGViYXIiLCJ3aW5kb3ciLCJpbml0UGFuZWwiLCJpbml0VGhlbWUiLCJpbml0RWxlbWVudHMiLCJiaW5kRXZlbnRzIiwib25FbGVtZW50U2VsZWN0ZWQiLCJpbnNwZWN0ZWRXaW5kb3ciLCJldmFsIiwidXNlQ29udGVudFNjcmlwdENvbnRleHQiLCJpbmZvIiwiYXR0cmlidXRlcyIsInNvcnQiLCJhMSIsImEyIiwiaTEiLCJpMiIsInNlbGVjdGVkRWxlbWVudEluZm8iLCJ1cGRhdGVSdWxlIiwiaGFuZGxlU2hvd0Jsb2NrU2V0dGluZ3MiLCJoYXZlVXJsQmxvY2tQYXJhbWV0ZXIiLCJoYXZlQ2xhc3NBdHRyaWJ1dGUiLCJoYXZlSWRBdHRyaWJ1dGUiLCJzZXR1cEF0dHJpYnV0ZXNJbmZvIiwib25QYWdlQ2hhbmdlZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGd1YXJkRGV2VG9vbHNQcmV2aWV3IiwicGFuZWxzIiwiZWxlbWVudHMiLCJvblNlbGVjdGlvbkNoYW5nZWQiLCJvbk5hdmlnYXRlZCIsInRoZW1lIiwidGhlbWVOYW1lIiwiYm9keSIsImNsYXNzTGlzdCIsImFkZCIsInF1ZXJ5U2VsZWN0b3IiLCJjaGVja2VkIiwicGxhY2Vob2xkZXIiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJnZXRJbnNwZWN0ZWRQYWdlVXJsIiwidXJsIiwidXBkYXRlRmlsdGVyUnVsZUlucHV0IiwicHJldmlld1J1bGVCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwicHJldmVudERlZmF1bHQiLCJjYW5jZWxQcmV2aWV3IiwicnVsZVRleHQiLCJhcHBseVByZXZpZXciLCJhZGRSdWxlRm9yRWxlbWVudCIsInVwZGF0ZVJ1bGVCbG9ja3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImJsb2NrIiwidXBkYXRlUGFuZWxFbGVtZW50cyIsImN1cnJlbnRUYXJnZXQiLCJhdHRyaWJ1dGVDaGVja0JveGVzIiwiZWwiLCJjaGVja2JveGVzIiwiY2hlY2tib3giLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJzaG93QmxvY2tCeVVybCIsImNyZWF0ZUZ1bGxDc3NQYXRoIiwic3R5bGUiLCJkaXNwbGF5IiwiY3JlYXRlQXR0cmlidXRlRWxlbWVudCIsImF0dHJpYnV0ZU5hbWUiLCJhdHRyaWJ1dGVWYWx1ZSIsImRlZmF1bHRDaGVja2VkIiwiZWxIdG1sIiwidG1wRWwiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJ0YWdOYW1lIiwiYXBwZW5kQ2hpbGQiLCJ0b0xvd2VyQ2FzZSIsImkiLCJhdHRyaWJ1dGUiLCJzcGxpdCIsImoiLCJjaGlsZE5vZGVzIiwiY2FsbGJhY2siLCJpc0Jsb2NrQnlVcmwiLCJpc0Jsb2NrT25lRG9tYWluIiwiaW5jbHVkZVRhZ05hbWUiLCJpbmNsdWRlRWxlbWVudElkIiwic2VsZWN0ZWRDbGFzc2VzIiwiYXR0cmlidXRlc1NlbGVjdG9yIiwiYXR0ck5hbWUiLCJzdWJzdHJpbmciLCJhdHRyVmFsdWUiLCJwYXJlbnROb2RlIiwiaW5uZXJUZXh0Iiwib3B0aW9ucyIsInVybE1hc2siLCJ1cmxCbG9ja0F0dHJpYnV0ZVZhbHVlIiwicnVsZVR5cGUiLCJjc3NTZWxlY3RvclR5cGUiLCJleGNsdWRlVGFnTmFtZSIsImV4Y2x1ZGVJZCIsImZ1bmMiLCJKU09OIiwic3RyaW5naWZ5IiwiYWRkUnVsZSIsIkFkZFVzZXJSdWxlIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=