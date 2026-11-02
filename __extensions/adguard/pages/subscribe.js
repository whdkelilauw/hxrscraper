/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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
/* harmony export */   MessageType: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.MessageType),
/* harmony export */   sendMessage: () => (/* reexport safe */ _send_message__WEBPACK_IMPORTED_MODULE_1__.sendMessage)
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
/* unused harmony exports messageHasTypeField, messageHasTypeAndDataFields, MessageHandler */
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
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sendMessage: () => (/* binding */ sendMessage)
/* harmony export */ });
/* unused harmony export sendTabMessage */
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

/***/ "./Extension/src/content-script/subscribe.ts":
/*!***************************************************!*\
  !*** ./Extension/src/content-script/subscribe.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Subscribe: () => (/* binding */ Subscribe)
/* harmony export */ });
/* harmony import */ var core_js_modules_web_url_search_params_delete_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.url-search-params.delete.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/web.url-search-params.delete.js");
/* harmony import */ var core_js_modules_web_url_search_params_delete_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_delete_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_url_search_params_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.url-search-params.has.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/web.url-search-params.has.js");
/* harmony import */ var core_js_modules_web_url_search_params_has_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_has_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_url_search_params_size_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.url-search-params.size.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/web.url-search-params.size.js");
/* harmony import */ var core_js_modules_web_url_search_params_size_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_size_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/messages */ "./Extension/src/common/messages/index.ts");
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
 * This content script used to subscribe to filters clicking to links with specified format
 */ class Subscribe {
    /**
     * Add listener for subscription links in document
     */ static init() {
        if (!(document instanceof Document)) {
            return;
        }
        // Use pointerdown to handle both mouse clicks and touch events
        document.addEventListener('pointerdown', Subscribe.handleOnClickEvent);
    }
    /**
     * If event is subscription link click, intercepts it and sends
     * {@link MessageType.AddFilteringSubscription} message to background, else pass event.
     *
     * @param event - document mouse event
     */ static handleOnClickEvent(event) {
        // ignore right-click
        if (event.button === 2) {
            return;
        }
        const target = Subscribe.getAnchorElement(event);
        if (!target || !Subscribe.hasSubscriptionLink(target)) {
            return;
        }
        event.preventDefault();
        event.stopPropagation();
        const data = Subscribe.getSubscriptionData(target);
        if (!data) {
            return;
        }
        (0,_common_messages__WEBPACK_IMPORTED_MODULE_3__.sendMessage)({
            type: _common_messages__WEBPACK_IMPORTED_MODULE_3__.MessageType.AddFilteringSubscription,
            data
        });
    }
    /**
     * If event target is anchor element, returns it, else search anchor in parent nodes.
     *
     * @param e - document mouse event
     *
     * @returns anchor element or null, if target is not found
     */ static getAnchorElement(e) {
        let element = e.target;
        while(element){
            if (element instanceof HTMLAnchorElement) {
                break;
            }
            element = element instanceof Element ? element.parentNode : null;
        }
        return element;
    }
    /**
     * Checks if anchor element has subscription link.
     *
     * @param element - anchor element
     *
     * @returns true, if anchor element has subscription link, else returns false
     */ static hasSubscriptionLink(element) {
        const { host, protocol, pathname, href } = element;
        if (protocol === 'http:' || protocol === 'https:') {
            return host === 'subscribe.adblockplus.org' && pathname === '/';
        }
        return /^abp:\/*subscribe\/*\?/i.test(href) || /^adguard:\/*subscribe\/*\?/i.test(href);
    }
    /**
     * Parses payload from query string of anchor element.
     *
     * @param element - anchor element
     * @param element.search - link url query string
     *
     * @returns subscription data payload
     */ static getSubscriptionData({ search }) {
        const params = new URLSearchParams(search);
        const url = params.get('location');
        const title = params.get('title');
        if (!url) {
            return null;
        }
        return {
            url: url.trim(),
            title: (title || url).trim()
        };
    }
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

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/web.url-search-params.delete.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/web.url-search-params.delete.js ***!
  \********************************************************************************************************/
/***/ (() => {

throw new Error("Module parse failed: 'import' and 'export' may appear only with 'sourceType: module' (2:0)\nFile was processed with these loaders:\n * ./node_modules/.pnpm/swc-loader@0.2.3_@swc+core@_2ef6ed611e9853e5d172f6e6729aa225/node_modules/swc-loader/src/index.js\n * ./node_modules/.pnpm/source-map-loader@3.0.2_webpack@5.97.1_@swc+core@1.11.21_/node_modules/source-map-loader/dist/cjs.js\nYou may need an additional loader to handle the result of these loaders.\n| 'use strict';\n> import \"core-js/modules/web.url-search-params.delete.js\";\n| import \"core-js/modules/web.url-search-params.has.js\";\n| import \"core-js/modules/web.url-search-params.size.js\";");

/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/web.url-search-params.has.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/web.url-search-params.has.js ***!
  \*****************************************************************************************************/
/***/ (() => {

throw new Error("Module parse failed: 'import' and 'export' may appear only with 'sourceType: module' (2:0)\nFile was processed with these loaders:\n * ./node_modules/.pnpm/swc-loader@0.2.3_@swc+core@_2ef6ed611e9853e5d172f6e6729aa225/node_modules/swc-loader/src/index.js\n * ./node_modules/.pnpm/source-map-loader@3.0.2_webpack@5.97.1_@swc+core@1.11.21_/node_modules/source-map-loader/dist/cjs.js\nYou may need an additional loader to handle the result of these loaders.\n| 'use strict';\n> import \"core-js/modules/web.url-search-params.delete.js\";\n| import \"core-js/modules/web.url-search-params.has.js\";\n| import \"core-js/modules/web.url-search-params.size.js\";");

/***/ }),

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/web.url-search-params.size.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/web.url-search-params.size.js ***!
  \******************************************************************************************************/
/***/ (() => {

throw new Error("Module parse failed: 'import' and 'export' may appear only with 'sourceType: module' (2:0)\nFile was processed with these loaders:\n * ./node_modules/.pnpm/swc-loader@0.2.3_@swc+core@_2ef6ed611e9853e5d172f6e6729aa225/node_modules/swc-loader/src/index.js\n * ./node_modules/.pnpm/source-map-loader@3.0.2_webpack@5.97.1_@swc+core@1.11.21_/node_modules/source-map-loader/dist/cjs.js\nYou may need an additional loader to handle the result of these loaders.\n| 'use strict';\n> import \"core-js/modules/web.url-search-params.delete.js\";\n| import \"core-js/modules/web.url-search-params.has.js\";\n| import \"core-js/modules/web.url-search-params.size.js\";");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!********************************************!*\
  !*** ./Extension/pages/subscribe/index.js ***!
  \********************************************/
/* harmony import */ var _src_content_script_subscribe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/content-script/subscribe */ "./Extension/src/content-script/subscribe.ts");
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
_src_content_script_subscribe__WEBPACK_IMPORTED_MODULE_0__.Subscribe.init();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1lBQ2pDLENBQUM7WUFFRCxPQUFPL0MsVUFBVSxDQUFDL0MsYUFBYSxFQUFFMEYsY0FBYyxFQUFFekYsV0FBVyxDQUFDO1FBQy9ELENBQUM7UUFFRDtRQUNBO1FBQ0FpRyxNQUFNLEVBQUNDLE9BQU8sR0FBR3BHLFFBQVEsQ0FBQ0gsTUFBTSxDQUFDO0lBQ25DLENBQUMsTUFBTTtRQUNMc0csTUFBTSxFQUFDQyxPQUFPLEdBQUd4RyxVQUFVLENBQUN4RCxPQUFPO0lBQ3JDO0FBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOXJDRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDekJBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBOzs7OztXQ1ZBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBa0JDLEdBQzhEO0FBRS9EeUIsb0VBQVNBLENBQUN2QixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi9FeHRlbnNpb24vc3JjL2NvbW1vbi9tZXNzYWdlcy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi9FeHRlbnNpb24vc3JjL2NvbW1vbi9tZXNzYWdlcy9pbmRleC50cyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uL0V4dGVuc2lvbi9zcmMvY29tbW9uL21lc3NhZ2VzL21lc3NhZ2UtaGFuZGxlci50cyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uL0V4dGVuc2lvbi9zcmMvY29tbW9uL21lc3NhZ2VzL3NlbmQtbWVzc2FnZS50cyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uL0V4dGVuc2lvbi9zcmMvY29udGVudC1zY3JpcHQvc3Vic2NyaWJlLnRzIiwid2VicGFjazovL2Jyb3dzZXItZXh0ZW5zaW9uL2Jyb3dzZXItcG9seWZpbGwuanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vd2VicGFjay9ydW50aW1lL2FtZCBvcHRpb25zIiwid2VicGFjazovL2Jyb3dzZXItZXh0ZW5zaW9uL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Jyb3dzZXItZXh0ZW5zaW9uL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi93ZWJwYWNrL3J1bnRpbWUvaGFybW9ueSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL2Jyb3dzZXItZXh0ZW5zaW9uL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi9FeHRlbnNpb24vcGFnZXMvc3Vic2NyaWJlL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LTIwMjUgQWRndWFyZCBTb2Z0d2FyZSBMdGQuXG4gKlxuICogQGZpbGVcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEFkR3VhcmQgQnJvd3NlciBFeHRlbnNpb24gKGh0dHBzOi8vZ2l0aHViLmNvbS9BZGd1YXJkVGVhbS9BZGd1YXJkQnJvd3NlckV4dGVuc2lvbikuXG4gKlxuICogQWRHdWFyZCBCcm93c2VyIEV4dGVuc2lvbiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogQWRHdWFyZCBCcm93c2VyIEV4dGVuc2lvbiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBBZEd1YXJkIEJyb3dzZXIgRXh0ZW5zaW9uLiBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cblxuLyoqXG4gKiBJbXBvcnRhbnQ6IGRvIG5vdCB1c2Ugei5pbmZlck9mLCBiZWNhdXNlIGl0IGJyaW5ncyBhIGxvdCBvZiBzaWRlIGVmZmVjdHMgd2l0aFxuICogbWFueSBkZXBlbmRlbmNpZXMgdG8gdGhlIGJ1bmRsZS5cbiAqXG4gKiBBbHNvIHBsZWFzZSB0cnksIGlmIHBvc3NpYmxlLCB0byBub3QgaW1wb3J0IGhlcmUgZXh0ZXJuYWwgbW9kdWxlc1xuICogb3RoZXIgdGhhdCB0eXBlcy5cbiAqL1xuaW1wb3J0IHsgdHlwZSBXaW5kb3dzIH0gZnJvbSAnd2ViZXh0ZW5zaW9uLXBvbHlmaWxsJztcblxuaW1wb3J0IHsgdHlwZSBGb3J3YXJkRnJvbSB9IGZyb20gJy4uL2ZvcndhcmQnO1xuaW1wb3J0IHsgdHlwZSBTZXR0aW5nT3B0aW9uLCB0eXBlIFNldHRpbmdzIH0gZnJvbSAnLi4vLi4vYmFja2dyb3VuZC9zY2hlbWEvc2V0dGluZ3MnO1xuaW1wb3J0IHsgdHlwZSBDdXN0b21GaWx0ZXJNZXRhZGF0YSB9IGZyb20gJy4uLy4uL2JhY2tncm91bmQvc2NoZW1hL2N1c3RvbS1maWx0ZXItbWV0YWRhdGEnO1xuaW1wb3J0IHsgdHlwZSBOb3RpZmllclR5cGUgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgdHlwZSBBcHBlYXJhbmNlVGhlbWUgfSBmcm9tICcuLi9zZXR0aW5ncyc7XG5pbXBvcnQgeyB0eXBlIEZpbHRlcmluZ0xvZ1RhYkluZm8gfSBmcm9tICcuLi8uLi9iYWNrZ3JvdW5kL2FwaS9maWx0ZXJpbmctbG9nJztcbmltcG9ydCB7IHR5cGUgR2V0VGFiSW5mb0ZvclBvcHVwUmVzcG9uc2UgfSBmcm9tICcuLi8uLi9iYWNrZ3JvdW5kL3NlcnZpY2VzL3VpL3BvcHVwJztcbmltcG9ydCB7IHR5cGUgR2V0RmlsdGVyaW5nTG9nRGF0YVJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vYmFja2dyb3VuZC9zZXJ2aWNlcy9maWx0ZXJpbmctbG9nJztcbmltcG9ydCB7XG4gICAgdHlwZSBJUnVsZXNMaW1pdHMsXG4gICAgdHlwZSBNdjNMaW1pdHNDaGVja1Jlc3VsdCxcbiAgICB0eXBlIFN0YXRpY0xpbWl0c0NoZWNrUmVzdWx0LFxufSBmcm9tICcuLi8uLi9iYWNrZ3JvdW5kL3NlcnZpY2VzL3J1bGVzLWxpbWl0cy9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgdHlwZSBCbG9ja2luZ1BhZ2VJbml0QXBwRGF0YSwgdHlwZSBQYWdlSW5pdEFwcERhdGEgfSBmcm9tICcuLi8uLi9iYWNrZ3JvdW5kL3NlcnZpY2VzL3VpL21haW4nO1xuaW1wb3J0IHsgdHlwZSBFeHBvcnRNZXNzYWdlUmVzcG9uc2UsIHR5cGUgR2V0T3B0aW9uc0RhdGFSZXNwb25zZSB9IGZyb20gJy4uLy4uL2JhY2tncm91bmQvc2VydmljZXMvc2V0dGluZ3MvdHlwZXMnO1xuaW1wb3J0IHsgdHlwZSBDcmVhdGVFdmVudExpc3RlbmVyUmVzcG9uc2UgfSBmcm9tICcuLi8uLi9iYWNrZ3JvdW5kL3NlcnZpY2VzL2V2ZW50JztcbmltcG9ydCB7IHR5cGUgRmlsdGVyTWV0YWRhdGEgfSBmcm9tICcuLi8uLi9iYWNrZ3JvdW5kL2FwaS9maWx0ZXJzL21haW4nO1xuaW1wb3J0IHsgdHlwZSBHZXRBbGxvd2xpc3REb21haW5zUmVzcG9uc2UgfSBmcm9tICcuLi8uLi9iYWNrZ3JvdW5kL3NlcnZpY2VzL2FsbG93bGlzdCc7XG5pbXBvcnQgeyB0eXBlIEdldFVzZXJSdWxlc0VkaXRvckRhdGFSZXNwb25zZSwgdHlwZSBHZXRVc2VyUnVsZXNSZXNwb25zZSB9IGZyb20gJy4uLy4uL2JhY2tncm91bmQvc2VydmljZXMvdXNlcnJ1bGVzJztcbmltcG9ydCB7IHR5cGUgR2V0Q3VzdG9tRmlsdGVySW5mb1Jlc3VsdCB9IGZyb20gJy4uLy4uL2JhY2tncm91bmQvYXBpL2ZpbHRlcnMvY3VzdG9tJztcbmltcG9ydCB7IHR5cGUgTWFudWFsVXBkYXRlTWV0YWRhdGEgfSBmcm9tICcuLi8uLi9iYWNrZ3JvdW5kL3NlcnZpY2VzL2V4dGVuc2lvbi11cGRhdGUvdHlwZXMnO1xuaW1wb3J0IHsgdHlwZSBUZWxlbWV0cnlFdmVudE5hbWUsIHR5cGUgVGVsZW1ldHJ5U2NyZWVuTmFtZSB9IGZyb20gJy4uLy4uL2JhY2tncm91bmQvc2VydmljZXMvdGVsZW1ldHJ5JztcbmltcG9ydCB7IHR5cGUgVGVsZW1ldHJ5QWN0aW9uVG9TY3JlZW5NYXAgfSBmcm9tICcuLi8uLi9iYWNrZ3JvdW5kL3NlcnZpY2VzL3RlbGVtZXRyeS9lbnVtcyc7XG5cbmV4cG9ydCBjb25zdCBBUFBfTUVTU0FHRV9IQU5ETEVSX05BTUUgPSAnYXBwJztcblxuZXhwb3J0IHR5cGUgTWVzc2FnZUNvbW1vblByb3BzID0ge1xuICAgIGhhbmRsZXJOYW1lOiB0eXBlb2YgQVBQX01FU1NBR0VfSEFORExFUl9OQU1FO1xufTtcblxuLyoqXG4gKiBNZXNzYWdlIHR5cGVzIHVzZWQgZm9yIG1lc3NhZ2UgcGFzc2luZyBiZXR3ZWVuIGV4dGVuc2lvbiBjb250ZXh0c1xuICogKHBvcHVwLCBmaWx0ZXJpbmcgbG9nLCBjb250ZW50IHNjcmlwdHMsIGJhY2tncm91bmQpXG4gKi9cbmV4cG9ydCBlbnVtIE1lc3NhZ2VUeXBlIHtcbiAgICBDcmVhdGVFdmVudExpc3RlbmVyID0gJ2NyZWF0ZUV2ZW50TGlzdGVuZXInLFxuICAgIFJlbW92ZUxpc3RlbmVyID0gJ3JlbW92ZUxpc3RlbmVyJyxcbiAgICBPcGVuRXh0ZW5zaW9uU3RvcmUgPSAnb3BlbkV4dGVuc2lvblN0b3JlJyxcbiAgICBBZGRBbmRFbmFibGVGaWx0ZXIgPSAnYWRkQW5kRW5hYmxlRmlsdGVyJyxcbiAgICBBcHBseVNldHRpbmdzSnNvbiA9ICdhcHBseVNldHRpbmdzSnNvbicsXG4gICAgT3BlbkZpbHRlcmluZ0xvZyA9ICdvcGVuRmlsdGVyaW5nTG9nJyxcbiAgICBPcGVuRnVsbHNjcmVlblVzZXJSdWxlcyA9ICdvcGVuRnVsbHNjcmVlblVzZXJSdWxlcycsXG4gICAgVXBkYXRlRnVsbHNjcmVlblVzZXJSdWxlc1RoZW1lID0gJ3VwZGF0ZUZ1bGxzY3JlZW5Vc2VyUnVsZXNUaGVtZScsXG4gICAgUmVzZXRCbG9ja2VkQWRzQ291bnQgPSAncmVzZXRCbG9ja2VkQWRzQ291bnQnLFxuICAgIFJlc2V0U2V0dGluZ3MgPSAncmVzZXRTZXR0aW5ncycsXG4gICAgR2V0VXNlclJ1bGVzID0gJ2dldFVzZXJSdWxlcycsXG4gICAgU2F2ZVVzZXJSdWxlcyA9ICdzYXZlVXNlclJ1bGVzJyxcbiAgICBHZXRBbGxvd2xpc3REb21haW5zID0gJ2dldEFsbG93bGlzdERvbWFpbnMnLFxuICAgIFNhdmVBbGxvd2xpc3REb21haW5zID0gJ3NhdmVBbGxvd2xpc3REb21haW5zJyxcbiAgICBDaGVja0ZpbHRlcnNVcGRhdGUgPSAnY2hlY2tGaWx0ZXJzVXBkYXRlJyxcbiAgICBDaGVja0V4dGVuc2lvblVwZGF0ZU12MyA9ICdjaGVja0V4dGVuc2lvblVwZGF0ZU12MycsXG4gICAgVXBkYXRlRXh0ZW5zaW9uTXYzID0gJ3VwZGF0ZUV4dGVuc2lvbk12MycsXG4gICAgRGlzYWJsZUZpbHRlcnNHcm91cCA9ICdkaXNhYmxlRmlsdGVyc0dyb3VwJyxcbiAgICBEaXNhYmxlRmlsdGVyID0gJ2Rpc2FibGVGaWx0ZXInLFxuICAgIExvYWRDdXN0b21GaWx0ZXJJbmZvID0gJ2xvYWRDdXN0b21GaWx0ZXJJbmZvJyxcbiAgICBTdWJzY3JpYmVUb0N1c3RvbUZpbHRlciA9ICdzdWJzY3JpYmVUb0N1c3RvbUZpbHRlcicsXG4gICAgUmVtb3ZlQW50aUJhbm5lckZpbHRlciA9ICdyZW1vdmVBbnRpQmFubmVyRmlsdGVyJyxcbiAgICBHZXRJc0FwcEluaXRpYWxpemVkID0gJ2dldElzQXBwSW5pdGlhbGl6ZWQnLFxuICAgIEdldFRhYkluZm9Gb3JQb3B1cCA9ICdnZXRUYWJJbmZvRm9yUG9wdXAnLFxuICAgIENoYW5nZUFwcGxpY2F0aW9uRmlsdGVyaW5nUGF1c2VkID0gJ2NoYW5nZUFwcGxpY2F0aW9uRmlsdGVyaW5nUGF1c2VkJyxcbiAgICBPcGVuUnVsZXNMaW1pdHNUYWIgPSAnb3BlblJ1bGVzTGltaXRzVGFiJyxcbiAgICBPcGVuU2V0dGluZ3NUYWIgPSAnb3BlblNldHRpbmdzVGFiJyxcbiAgICBPcGVuQXNzaXN0YW50ID0gJ29wZW5Bc3Npc3RhbnQnLFxuICAgIE9wZW5BYnVzZVRhYiA9ICdvcGVuQWJ1c2VUYWInLFxuICAgIE9wZW5TaXRlUmVwb3J0VGFiID0gJ29wZW5TaXRlUmVwb3J0VGFiJyxcbiAgICBPcGVuQ29tcGFyZVBhZ2UgPSAnb3BlbkNvbXBhcmVQYWdlJyxcbiAgICBPcGVuQ2hyb21lRXh0ZW5zaW9uc1NldHRpbmdzUGFnZSA9ICdvcGVuQ2hyb21lRXh0ZW5zaW9uc1NldHRpbmdzUGFnZScsXG4gICAgT3BlbkV4dGVuc2lvbkRldGFpbHNQYWdlID0gJ29wZW5FeHRlbnNpb25EZXRhaWxzUGFnZScsXG4gICAgUmVzZXRVc2VyUnVsZXNGb3JQYWdlID0gJ3Jlc2V0VXNlclJ1bGVzRm9yUGFnZScsXG4gICAgUmVtb3ZlQWxsb3dsaXN0RG9tYWluID0gJ3JlbW92ZUFsbG93bGlzdERvbWFpbicsXG4gICAgQWRkQWxsb3dsaXN0RG9tYWluRm9yVGFiSWQgPSAnYWRkQWxsb3dsaXN0RG9tYWluRm9yVGFiSWQnLFxuICAgIEFkZEFsbG93bGlzdERvbWFpbkZvclVybCA9ICdhZGRBbGxvd2xpc3REb21haW5Gb3JVcmwnLFxuICAgIE9uT3BlbkZpbHRlcmluZ0xvZ1BhZ2UgPSAnb25PcGVuRmlsdGVyaW5nTG9nUGFnZScsXG4gICAgR2V0RmlsdGVyaW5nTG9nRGF0YSA9ICdnZXRGaWx0ZXJpbmdMb2dEYXRhJyxcbiAgICBJbml0aWFsaXplRnJhbWVTY3JpcHQgPSAnaW5pdGlhbGl6ZUZyYW1lU2NyaXB0JyxcbiAgICBJbml0aWFsaXplQmxvY2tpbmdQYWdlU2NyaXB0ID0gJ2luaXRpYWxpemVCbG9ja2luZ1BhZ2VTY3JpcHQnLFxuICAgIE9uQ2xvc2VGaWx0ZXJpbmdMb2dQYWdlID0gJ29uQ2xvc2VGaWx0ZXJpbmdMb2dQYWdlJyxcbiAgICBHZXRGaWx0ZXJpbmdJbmZvQnlUYWJJZCA9ICdnZXRGaWx0ZXJpbmdJbmZvQnlUYWJJZCcsXG4gICAgU3luY2hyb25pemVPcGVuVGFicyA9ICdzeW5jaHJvbml6ZU9wZW5UYWJzJyxcbiAgICBDbGVhckV2ZW50c0J5VGFiSWQgPSAnY2xlYXJFdmVudHNCeVRhYklkJyxcbiAgICBSZWZyZXNoUGFnZSA9ICdyZWZyZXNoUGFnZScsXG4gICAgQWRkVXNlclJ1bGUgPSAnYWRkVXNlclJ1bGUnLFxuICAgIFJlbW92ZVVzZXJSdWxlID0gJ3JlbW92ZVVzZXJSdWxlJyxcbiAgICBFbmFibGVGaWx0ZXJzR3JvdXAgPSAnZW5hYmxlRmlsdGVyc0dyb3VwJyxcbiAgICBOb3RpZnlMaXN0ZW5lcnMgPSAnbm90aWZ5TGlzdGVuZXJzJyxcbiAgICBBZGRMb25nTGl2ZWRDb25uZWN0aW9uID0gJ2FkZExvbmdMaXZlZENvbm5lY3Rpb24nLFxuICAgIEdldE9wdGlvbnNEYXRhID0gJ2dldE9wdGlvbnNEYXRhJyxcbiAgICBDaGFuZ2VVc2VyU2V0dGluZ3MgPSAnY2hhbmdlVXNlclNldHRpbmcnLFxuICAgIENoZWNrUmVxdWVzdEZpbHRlclJlYWR5ID0gJ2NoZWNrUmVxdWVzdEZpbHRlclJlYWR5JyxcbiAgICBPcGVuVGhhbmt5b3VQYWdlID0gJ29wZW5UaGFua1lvdVBhZ2UnLFxuICAgIE9wZW5TYWZlYnJvd3NpbmdUcnVzdGVkID0gJ29wZW5TYWZlYnJvd3NpbmdUcnVzdGVkJyxcbiAgICBHZXRTZWxlY3RvcnNBbmRTY3JpcHRzID0gJ2dldFNlbGVjdG9yc0FuZFNjcmlwdHMnLFxuICAgIENoZWNrUGFnZVNjcmlwdFdyYXBwZXJSZXF1ZXN0ID0gJ2NoZWNrUGFnZVNjcmlwdFdyYXBwZXJSZXF1ZXN0JyxcbiAgICBQcm9jZXNzU2hvdWxkQ29sbGFwc2UgPSAncHJvY2Vzc1Nob3VsZENvbGxhcHNlJyxcbiAgICBQcm9jZXNzU2hvdWxkQ29sbGFwc2VNYW55ID0gJ3Byb2Nlc3NTaG91bGRDb2xsYXBzZU1hbnknLFxuICAgIEFkZEZpbHRlcmluZ1N1YnNjcmlwdGlvbiA9ICdhZGRGaWx0ZXJTdWJzY3JpcHRpb24nLFxuICAgIFNldE5vdGlmaWNhdGlvblZpZXdlZCA9ICdzZXROb3RpZmljYXRpb25WaWV3ZWQnLFxuICAgIFNhdmVDc3NIaXRzU3RhdHMgPSAnc2F2ZUNzc0hpdFN0YXRzJyxcbiAgICBHZXRDb29raWVSdWxlcyA9ICdnZXRDb29raWVSdWxlcycsXG4gICAgU2F2ZUNvb2tpZUxvZ0V2ZW50ID0gJ3NhdmVDb29raWVSdWxlRXZlbnQnLFxuICAgIExvYWRTZXR0aW5nc0pzb24gPSAnbG9hZFNldHRpbmdzSnNvbicsXG4gICAgQWRkVXJsVG9UcnVzdGVkID0gJ2FkZFVybFRvVHJ1c3RlZCcsXG4gICAgU2V0UHJlc2VydmVMb2dTdGF0ZSA9ICdzZXRQcmVzZXJ2ZUxvZ1N0YXRlJyxcbiAgICBHZXRVc2VyUnVsZXNFZGl0b3JEYXRhID0gJ2dldFVzZXJSdWxlc0VkaXRvckRhdGEnLFxuICAgIEdldEVkaXRvclN0b3JhZ2VDb250ZW50ID0gJ2dldEVkaXRvclN0b3JhZ2VDb250ZW50JyxcbiAgICBTZXRFZGl0b3JTdG9yYWdlQ29udGVudCA9ICdzZXRFZGl0b3JTdG9yYWdlQ29udGVudCcsXG4gICAgU2V0RmlsdGVyaW5nTG9nV2luZG93U3RhdGUgPSAnc2V0RmlsdGVyaW5nTG9nV2luZG93U3RhdGUnLFxuICAgIEFwcEluaXRpYWxpemVkID0gJ2FwcEluaXRpYWxpemVkJyxcbiAgICBVcGRhdGVUb3RhbEJsb2NrZWQgPSAndXBkYXRlVG90YWxCbG9ja2VkJyxcbiAgICBTY3JpcHRsZXRDbG9zZVdpbmRvdyA9ICdzY3JpcHRsZXRDbG9zZVdpbmRvdycsXG4gICAgU2hvd1J1bGVMaW1pdHNBbGVydCA9ICdzaG93UnVsZUxpbWl0c0FsZXJ0JyxcbiAgICBTaG93QWxlcnRQb3B1cCA9ICdzaG93QWxlcnRQb3B1cCcsXG4gICAgU2hvd1ZlcnNpb25VcGRhdGVkUG9wdXAgPSAnc2hvd1ZlcnNpb25VcGRhdGVkUG9wdXAnLFxuICAgIFVwZGF0ZUxpc3RlbmVycyA9ICd1cGRhdGVMaXN0ZW5lcnMnLFxuICAgIFNldENvbnNlbnRlZEZpbHRlcnMgPSAnc2V0Q29uc2VudGVkRmlsdGVycycsXG4gICAgR2V0SXNDb25zZW50ZWRGaWx0ZXIgPSAnZ2V0SXNDb25zZW50ZWRGaWx0ZXInLFxuICAgIFNlbmRUZWxlbWV0cnlDdXN0b21FdmVudCA9ICdzZW5kVGVsZW1ldHJ5Q3VzdG9tRXZlbnQnLFxuICAgIFNlbmRUZWxlbWV0cnlQYWdlVmlld0V2ZW50ID0gJ3NlbmRUZWxlbWV0cnlQYWdlVmlld0V2ZW50JyxcbiAgICBBZGRUZWxlbWV0cnlPcGVuZWRQYWdlID0gJ2FkZFRlbGVtZXRyeU9wZW5lZFBhZ2UnLFxuICAgIFJlbW92ZVRlbGVtZXRyeU9wZW5lZFBhZ2UgPSAncmVtb3ZlVGVsZW1ldHJ5T3BlbmVkUGFnZScsXG4gICAgR2V0UnVsZXNMaW1pdHNDb3VudGVyc012MyA9ICdnZXRSdWxlc0xpbWl0c0NvdW50ZXJzTXYzJyxcbiAgICBDYW5FbmFibGVTdGF0aWNGaWx0ZXJNdjMgPSAnY2FuRW5hYmxlU3RhdGljRmlsdGVyTXYzJyxcbiAgICBDYW5FbmFibGVTdGF0aWNHcm91cE12MyA9ICdjYW5FbmFibGVTdGF0aWNHcm91cE12MycsXG4gICAgQ2xlYXJSdWxlc0xpbWl0c1dhcm5pbmdNdjMgPSAnY2xlYXJSdWxlc0xpbWl0c1dhcm5pbmdNdjMnLFxuICAgIFJlc3RvcmVGaWx0ZXJzTXYzID0gJ3Jlc3RvcmVGaWx0ZXJzTXYzJyxcbiAgICBDdXJyZW50TGltaXRzTXYzID0gJ2N1cnJlbnRMaW1pdHNNdjMnLFxufVxuXG5leHBvcnQgdHlwZSBBcHBseVNldHRpbmdzSnNvbk1lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuQXBwbHlTZXR0aW5nc0pzb247XG4gICAgZGF0YToge1xuICAgICAgICBqc29uOiBzdHJpbmc7XG4gICAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIExvYWRTZXR0aW5nc0pzb25NZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLkxvYWRTZXR0aW5nc0pzb247XG4gICAgZGF0YToge1xuICAgICAgICBqc29uOiBzdHJpbmc7XG4gICAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIEFkZEZpbHRlcmluZ1N1YnNjcmlwdGlvbk1lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuQWRkRmlsdGVyaW5nU3Vic2NyaXB0aW9uO1xuICAgIGRhdGE6IHtcbiAgICAgICAgdXJsOiBzdHJpbmc7XG4gICAgICAgIHRpdGxlPzogc3RyaW5nO1xuICAgIH07XG59O1xuXG5leHBvcnQgdHlwZSBDcmVhdGVFdmVudExpc3RlbmVyTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5DcmVhdGVFdmVudExpc3RlbmVyO1xuICAgIGRhdGE6IHtcbiAgICAgICAgZXZlbnRzOiBOb3RpZmllclR5cGVbXTtcbiAgICB9O1xufTtcblxuZXhwb3J0IHR5cGUgUmVtb3ZlTGlzdGVuZXJNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLlJlbW92ZUxpc3RlbmVyO1xuICAgIGRhdGE6IHtcbiAgICAgICAgbGlzdGVuZXJJZDogbnVtYmVyO1xuICAgIH07XG59O1xuXG5leHBvcnQgdHlwZSBHZXRJc0FwcEluaXRpYWxpemVkTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5HZXRJc0FwcEluaXRpYWxpemVkO1xufTtcblxuZXhwb3J0IHR5cGUgR2V0VGFiSW5mb0ZvclBvcHVwTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5HZXRUYWJJbmZvRm9yUG9wdXA7XG4gICAgZGF0YToge1xuICAgICAgICB0YWJJZDogbnVtYmVyO1xuICAgIH07XG59O1xuXG5leHBvcnQgdHlwZSBDaGFuZ2VBcHBsaWNhdGlvbkZpbHRlcmluZ1BhdXNlZE1lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuQ2hhbmdlQXBwbGljYXRpb25GaWx0ZXJpbmdQYXVzZWQ7XG4gICAgZGF0YToge1xuICAgICAgICBzdGF0ZTogYm9vbGVhbjtcbiAgICB9O1xufTtcblxuZXhwb3J0IHR5cGUgT3BlblJ1bGVzTGltaXRzVGFiTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5PcGVuUnVsZXNMaW1pdHNUYWI7XG59O1xuXG5leHBvcnQgdHlwZSBPcGVuU2V0dGluZ3NUYWJNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLk9wZW5TZXR0aW5nc1RhYjtcbn07XG5cbmV4cG9ydCB0eXBlIE9wZW5Bc3Npc3RhbnRNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLk9wZW5Bc3Npc3RhbnQ7XG59O1xuXG5leHBvcnQgdHlwZSBVcGRhdGVGdWxsc2NyZWVuVXNlclJ1bGVzVGhlbWVNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLlVwZGF0ZUZ1bGxzY3JlZW5Vc2VyUnVsZXNUaGVtZTtcbiAgICBkYXRhOiB7XG4gICAgICAgIHRoZW1lOiBBcHBlYXJhbmNlVGhlbWU7XG4gICAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIEFkZExvbmdMaXZlZENvbm5lY3Rpb25NZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLkFkZExvbmdMaXZlZENvbm5lY3Rpb247XG4gICAgZGF0YToge1xuICAgICAgICBldmVudHM6IE5vdGlmaWVyVHlwZVtdO1xuICAgIH07XG59O1xuXG5leHBvcnQgdHlwZSBOb3RpZnlMaXN0ZW5lcnNNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLk5vdGlmeUxpc3RlbmVycztcbiAgICBkYXRhOiBhbnk7XG59O1xuXG5leHBvcnQgdHlwZSBVcGRhdGVMaXN0ZW5lcnNNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLlVwZGF0ZUxpc3RlbmVycztcbn07XG5cbmV4cG9ydCB0eXBlIENoZWNrRmlsdGVyc1VwZGF0ZU1lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuQ2hlY2tGaWx0ZXJzVXBkYXRlO1xufTtcblxuZXhwb3J0IHR5cGUgQ2hlY2tFeHRlbnNpb25VcGRhdGVNZXNzYWdlTXYzID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLkNoZWNrRXh0ZW5zaW9uVXBkYXRlTXYzO1xufTtcblxuZXhwb3J0IHR5cGUgVXBkYXRlRXh0ZW5zaW9uTWVzc2FnZU12MyA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5VcGRhdGVFeHRlbnNpb25NdjM7XG4gICAgZGF0YToge1xuICAgICAgICBmcm9tOiBNYW51YWxVcGRhdGVNZXRhZGF0YVsncGFnZVRvT3BlbkFmdGVyUmVsb2FkJ107XG4gICAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIEdldEFsbG93bGlzdERvbWFpbnNNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLkdldEFsbG93bGlzdERvbWFpbnM7XG59O1xuXG5leHBvcnQgdHlwZSBSZXNldEJsb2NrZWRBZHNDb3VudE1lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuUmVzZXRCbG9ja2VkQWRzQ291bnQ7XG59O1xuXG5leHBvcnQgdHlwZSBPcGVuQ29tcGFyZVBhZ2VNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLk9wZW5Db21wYXJlUGFnZTtcbn07XG5cbmV4cG9ydCB0eXBlIE9wZW5DaHJvbWVFeHRlbnNpb25zU2V0dGluZ3NQYWdlTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5PcGVuQ2hyb21lRXh0ZW5zaW9uc1NldHRpbmdzUGFnZTtcbn07XG5cbmV4cG9ydCB0eXBlIE9wZW5FeHRlbnNpb25EZXRhaWxzUGFnZU1lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuT3BlbkV4dGVuc2lvbkRldGFpbHNQYWdlO1xufTtcblxuZXhwb3J0IHR5cGUgT3BlbkZ1bGxzY3JlZW5Vc2VyUnVsZXNNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLk9wZW5GdWxsc2NyZWVuVXNlclJ1bGVzO1xufTtcblxuZXhwb3J0IHR5cGUgT3BlbkV4dGVuc2lvblN0b3JlTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5PcGVuRXh0ZW5zaW9uU3RvcmU7XG59O1xuXG5leHBvcnQgdHlwZSBPcGVuRmlsdGVyaW5nTG9nTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5PcGVuRmlsdGVyaW5nTG9nO1xufTtcblxuZXhwb3J0IHR5cGUgT3BlbkFidXNlVGFiTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5PcGVuQWJ1c2VUYWI7XG4gICAgZGF0YToge1xuICAgICAgICB1cmw6IHN0cmluZztcbiAgICAgICAgZnJvbTogRm9yd2FyZEZyb207XG4gICAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIE9wZW5TaXRlUmVwb3J0VGFiTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5PcGVuU2l0ZVJlcG9ydFRhYjtcbiAgICBkYXRhOiB7XG4gICAgICAgIHVybDogc3RyaW5nO1xuICAgICAgICBmcm9tOiBGb3J3YXJkRnJvbTtcbiAgICB9O1xufTtcblxuZXhwb3J0IHR5cGUgT3BlblRoYW5reW91UGFnZU1lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuT3BlblRoYW5reW91UGFnZTtcbn07XG5cbmV4cG9ydCB0eXBlIEdldE9wdGlvbnNEYXRhTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5HZXRPcHRpb25zRGF0YTtcbn07XG5cbmV4cG9ydCB0eXBlIENoYW5nZVVzZXJTZXR0aW5nTWVzc2FnZTxUIGV4dGVuZHMgU2V0dGluZ09wdGlvbiA9IFNldHRpbmdPcHRpb24+ID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLkNoYW5nZVVzZXJTZXR0aW5ncztcbiAgICBkYXRhOiB7XG4gICAgICAgIGtleTogVDtcbiAgICAgICAgdmFsdWU6IFNldHRpbmdzW1RdO1xuICAgIH07XG59O1xuXG5leHBvcnQgdHlwZSBSZXNldFNldHRpbmdzTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5SZXNldFNldHRpbmdzO1xufTtcblxuZXhwb3J0IHR5cGUgQWRkQW5kRW5hYmxlRmlsdGVyTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5BZGRBbmRFbmFibGVGaWx0ZXI7XG4gICAgZGF0YToge1xuICAgICAgICBmaWx0ZXJJZDogbnVtYmVyO1xuICAgIH07XG59O1xuXG5leHBvcnQgdHlwZSBEaXNhYmxlRmlsdGVyTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5EaXNhYmxlRmlsdGVyO1xuICAgIGRhdGE6IHtcbiAgICAgICAgZmlsdGVySWQ6IG51bWJlcjtcbiAgICB9O1xufTtcblxuZXhwb3J0IHR5cGUgUmVtb3ZlQW50aUJhbm5lckZpbHRlck1lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuUmVtb3ZlQW50aUJhbm5lckZpbHRlcjtcbiAgICBkYXRhOiB7XG4gICAgICAgIGZpbHRlcklkOiBudW1iZXI7XG4gICAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIFNhdmVBbGxvd2xpc3REb21haW5zTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5TYXZlQWxsb3dsaXN0RG9tYWlucztcbiAgICBkYXRhOiB7XG4gICAgICAgIHZhbHVlOiBzdHJpbmc7XG4gICAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIFNhdmVVc2VyUnVsZXNNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLlNhdmVVc2VyUnVsZXM7XG4gICAgZGF0YToge1xuICAgICAgICB2YWx1ZTogc3RyaW5nO1xuICAgIH07XG59O1xuXG5leHBvcnQgdHlwZSBHZXRVc2VyUnVsZXNNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLkdldFVzZXJSdWxlcztcbn07XG5cbmV4cG9ydCB0eXBlIEdldFVzZXJSdWxlc0VkaXRvckRhdGFNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLkdldFVzZXJSdWxlc0VkaXRvckRhdGE7XG59O1xuXG5leHBvcnQgdHlwZSBBZGRVc2VyUnVsZU1lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuQWRkVXNlclJ1bGU7XG4gICAgZGF0YToge1xuICAgICAgICBydWxlVGV4dDogc3RyaW5nO1xuICAgIH07XG59O1xuXG5leHBvcnQgdHlwZSBSZW1vdmVVc2VyUnVsZU1lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuUmVtb3ZlVXNlclJ1bGU7XG4gICAgZGF0YToge1xuICAgICAgICBydWxlVGV4dDogc3RyaW5nO1xuICAgIH07XG59O1xuXG5leHBvcnQgdHlwZSBSZXNldFVzZXJSdWxlc0ZvclBhZ2VNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLlJlc2V0VXNlclJ1bGVzRm9yUGFnZTtcbiAgICBkYXRhOiB7XG4gICAgICAgIHVybDogc3RyaW5nO1xuICAgICAgICB0YWJJZDogbnVtYmVyO1xuICAgIH07XG59O1xuXG5leHBvcnQgdHlwZSBHZXRFZGl0b3JTdG9yYWdlQ29udGVudE1lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuR2V0RWRpdG9yU3RvcmFnZUNvbnRlbnQ7XG59O1xuXG5leHBvcnQgdHlwZSBTZXRFZGl0b3JTdG9yYWdlQ29udGVudE1lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuU2V0RWRpdG9yU3RvcmFnZUNvbnRlbnQ7XG4gICAgZGF0YToge1xuICAgICAgICBjb250ZW50OiBzdHJpbmc7XG4gICAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIEFkZEFsbG93bGlzdERvbWFpbkZvclRhYklkTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5BZGRBbGxvd2xpc3REb21haW5Gb3JUYWJJZDtcbiAgICBkYXRhOiB7XG4gICAgICAgIHRhYklkOiBudW1iZXI7XG4gICAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIEFkZEFsbG93bGlzdERvbWFpbkZvclVybE1lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuQWRkQWxsb3dsaXN0RG9tYWluRm9yVXJsO1xuICAgIGRhdGE6IHtcbiAgICAgICAgdXJsOiBzdHJpbmc7XG4gICAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIFJlbW92ZUFsbG93bGlzdERvbWFpbk1lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuUmVtb3ZlQWxsb3dsaXN0RG9tYWluO1xuICAgIGRhdGE6IHtcbiAgICAgICAgdGFiSWQ6IG51bWJlcjtcbiAgICAgICAgdGFiUmVmcmVzaDogYm9vbGVhbjtcbiAgICB9O1xufTtcblxuZXhwb3J0IHR5cGUgTG9hZEN1c3RvbUZpbHRlckluZm9NZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLkxvYWRDdXN0b21GaWx0ZXJJbmZvO1xuICAgIGRhdGE6IHtcbiAgICAgICAgdXJsOiBzdHJpbmc7XG4gICAgICAgIHRpdGxlPzogc3RyaW5nO1xuICAgIH07XG59O1xuXG5leHBvcnQgdHlwZSBDdXN0b21GaWx0ZXJTdWJzY3JpcHRpb25EYXRhID0ge1xuICAgIGN1c3RvbVVybDogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICB0cnVzdGVkOiBib29sZWFuO1xufTtcblxuZXhwb3J0IHR5cGUgU3Vic2NyaWJlVG9DdXN0b21GaWx0ZXJNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLlN1YnNjcmliZVRvQ3VzdG9tRmlsdGVyO1xuICAgIGRhdGE6IHtcbiAgICAgICAgZmlsdGVyOiBDdXN0b21GaWx0ZXJTdWJzY3JpcHRpb25EYXRhO1xuICAgIH07XG59O1xuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsaXplZE1lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuQXBwSW5pdGlhbGl6ZWQ7XG59O1xuXG5leHBvcnQgdHlwZSBVcGRhdGVUb3RhbEJsb2NrZWRNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLlVwZGF0ZVRvdGFsQmxvY2tlZDtcbiAgICBkYXRhOiB7XG4gICAgICAgIHRhYklkOiBudW1iZXI7XG4gICAgICAgIHRvdGFsQmxvY2tlZDogbnVtYmVyO1xuICAgICAgICB0b3RhbEJsb2NrZWRUYWI6IG51bWJlcjtcbiAgICB9O1xufTtcblxuZXhwb3J0IHR5cGUgQ2hlY2tSZXF1ZXN0RmlsdGVyUmVhZHlNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLkNoZWNrUmVxdWVzdEZpbHRlclJlYWR5O1xufTtcblxuZXhwb3J0IHR5cGUgR2V0RmlsdGVyaW5nTG9nRGF0YU1lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuR2V0RmlsdGVyaW5nTG9nRGF0YTtcbn07XG5cbmV4cG9ydCB0eXBlIFN5bmNocm9uaXplT3BlblRhYnNNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLlN5bmNocm9uaXplT3BlblRhYnM7XG59O1xuXG5leHBvcnQgdHlwZSBPcGVuRmlsdGVyaW5nTG9nUGFnZU1lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuT25PcGVuRmlsdGVyaW5nTG9nUGFnZTtcbn07XG5cbmV4cG9ydCB0eXBlIENsb3NlRmlsdGVyaW5nTG9nUGFnZU1lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuT25DbG9zZUZpbHRlcmluZ0xvZ1BhZ2U7XG59O1xuXG5leHBvcnQgdHlwZSBDbGVhckV2ZW50c0J5VGFiSWRNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLkNsZWFyRXZlbnRzQnlUYWJJZDtcbiAgICBkYXRhOiB7XG4gICAgICAgIHRhYklkOiBudW1iZXI7XG4gICAgICAgIGlnbm9yZVByZXNlcnZlTG9nPzogYm9vbGVhbjtcbiAgICB9O1xufTtcblxuZXhwb3J0IHR5cGUgU2V0UHJlc2VydmVMb2dTdGF0ZU1lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuU2V0UHJlc2VydmVMb2dTdGF0ZTtcbiAgICBkYXRhOiB7XG4gICAgICAgIHN0YXRlOiBib29sZWFuO1xuICAgIH07XG59O1xuXG5leHBvcnQgdHlwZSBTZXRGaWx0ZXJpbmdMb2dXaW5kb3dTdGF0ZU1lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuU2V0RmlsdGVyaW5nTG9nV2luZG93U3RhdGU7XG4gICAgZGF0YToge1xuICAgICAgICB3aW5kb3dTdGF0ZTogV2luZG93cy5DcmVhdGVDcmVhdGVEYXRhVHlwZTtcbiAgICB9O1xufTtcblxuZXhwb3J0IHR5cGUgUmVmcmVzaFBhZ2VNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLlJlZnJlc2hQYWdlO1xuICAgIGRhdGE6IHtcbiAgICAgICAgdGFiSWQ6IG51bWJlcjtcbiAgICB9O1xufTtcblxuZXhwb3J0IHR5cGUgR2V0RmlsdGVyaW5nSW5mb0J5VGFiSWRNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLkdldEZpbHRlcmluZ0luZm9CeVRhYklkO1xuICAgIGRhdGE6IHtcbiAgICAgICAgdGFiSWQ6IG51bWJlcjtcbiAgICB9O1xufTtcblxuZXhwb3J0IHR5cGUgRW5hYmxlRmlsdGVyc0dyb3VwTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5FbmFibGVGaWx0ZXJzR3JvdXA7XG4gICAgZGF0YToge1xuICAgICAgICBncm91cElkOiBudW1iZXI7XG4gICAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIERpc2FibGVGaWx0ZXJzR3JvdXBNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLkRpc2FibGVGaWx0ZXJzR3JvdXA7XG4gICAgZGF0YToge1xuICAgICAgICBncm91cElkOiBudW1iZXI7XG4gICAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIEluaXRpYWxpemVGcmFtZVNjcmlwdE1lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuSW5pdGlhbGl6ZUZyYW1lU2NyaXB0O1xufTtcblxuZXhwb3J0IHR5cGUgSW5pdGlhbGl6ZUJsb2NraW5nUGFnZVNjcmlwdCA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5Jbml0aWFsaXplQmxvY2tpbmdQYWdlU2NyaXB0O1xufTtcblxuZXhwb3J0IHR5cGUgU2V0Q29uc2VudGVkRmlsdGVyc01lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuU2V0Q29uc2VudGVkRmlsdGVycztcbiAgICBkYXRhOiB7XG4gICAgICAgIGZpbHRlcklkczogbnVtYmVyW107XG4gICAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIEdldElzQ29uc2VudGVkRmlsdGVyTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5HZXRJc0NvbnNlbnRlZEZpbHRlcjtcbiAgICBkYXRhOiB7XG4gICAgICAgIGZpbHRlcklkOiBudW1iZXI7XG4gICAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIE9wZW5TYWZlYnJvd3NpbmdUcnVzdGVkTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5PcGVuU2FmZWJyb3dzaW5nVHJ1c3RlZDtcbiAgICBkYXRhOiB7XG4gICAgICAgIHVybDogc3RyaW5nO1xuICAgIH07XG59O1xuXG5leHBvcnQgdHlwZSBBZGRVcmxUb1RydXN0ZWRNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLkFkZFVybFRvVHJ1c3RlZDtcbiAgICBkYXRhOiB7XG4gICAgICAgIHVybDogc3RyaW5nO1xuICAgIH07XG59O1xuXG5leHBvcnQgdHlwZSBTZXROb3RpZmljYXRpb25WaWV3ZWRNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLlNldE5vdGlmaWNhdGlvblZpZXdlZDtcbiAgICBkYXRhOiB7XG4gICAgICAgIHdpdGhEZWxheTogYm9vbGVhbjtcbiAgICB9O1xufTtcblxuZXhwb3J0IHR5cGUgU2NyaXB0bGV0Q2xvc2VXaW5kb3dNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLlNjcmlwdGxldENsb3NlV2luZG93O1xufTtcblxuZXhwb3J0IHR5cGUgU2hvd0FsZXJ0UG9wdXBNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLlNob3dBbGVydFBvcHVwO1xuICAgIGRhdGE6IHtcbiAgICAgICAgaXNBZGd1YXJkVGFiOiBib29sZWFuO1xuICAgICAgICB0aXRsZTogc3RyaW5nO1xuICAgICAgICB0ZXh0OiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgICAgICAgYWxlcnRTdHlsZXM6IHN0cmluZztcbiAgICAgICAgYWxlcnRDb250YWluZXJTdHlsZXM6IHN0cmluZztcbiAgICB9O1xufTtcblxuZXhwb3J0IHR5cGUgU2hvd1J1bGVMaW1pdHNBbGVydE1lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuU2hvd1J1bGVMaW1pdHNBbGVydDtcbiAgICBkYXRhOiB7XG4gICAgICAgIGlzQWRndWFyZFRhYjogYm9vbGVhbjtcbiAgICAgICAgbWFpblRleHQ6IHN0cmluZztcbiAgICAgICAgbGlua1RleHQ6IHN0cmluZztcbiAgICAgICAgYWxlcnRTdHlsZXM6IHN0cmluZztcbiAgICAgICAgYWxlcnRDb250YWluZXJTdHlsZXM6IHN0cmluZztcbiAgICB9O1xufTtcblxuZXhwb3J0IHR5cGUgU2hvd1ZlcnNpb25VcGRhdGVkUG9wdXBNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLlNob3dWZXJzaW9uVXBkYXRlZFBvcHVwO1xuICAgIGRhdGE6IHtcbiAgICAgICAgaXNBZGd1YXJkVGFiOiBib29sZWFuO1xuICAgICAgICB0aXRsZTogc3RyaW5nO1xuICAgICAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgICAgICBjaGFuZ2Vsb2dIcmVmOiBzdHJpbmc7XG4gICAgICAgIGNoYW5nZWxvZ1RleHQ6IHN0cmluZztcbiAgICAgICAgc2hvd1Byb21vTm90aWZpY2F0aW9uOiBib29sZWFuO1xuICAgICAgICBvZmZlcjogc3RyaW5nO1xuICAgICAgICBvZmZlckRlc2M6IHN0cmluZztcbiAgICAgICAgb2ZmZXJCdXR0b25UZXh0OiBzdHJpbmc7XG4gICAgICAgIG9mZmVyQnV0dG9uSHJlZjogc3RyaW5nO1xuICAgICAgICBvZmZlckJnSW1hZ2U6IHN0cmluZztcbiAgICAgICAgZGlzYWJsZU5vdGlmaWNhdGlvblRleHQ6IHN0cmluZztcbiAgICAgICAgYWxlcnRTdHlsZXM6IHN0cmluZztcbiAgICAgICAgaWZyYW1lU3R5bGVzOiBzdHJpbmc7XG4gICAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIFNlbmRUZWxlbWV0cnlQYWdlVmlld0V2ZW50TWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5TZW5kVGVsZW1ldHJ5UGFnZVZpZXdFdmVudDtcbiAgICBkYXRhOiB7XG4gICAgICAgIHNjcmVlbk5hbWU6IFRlbGVtZXRyeVNjcmVlbk5hbWU7XG4gICAgICAgIHBhZ2VJZDogc3RyaW5nO1xuICAgIH07XG59O1xuXG5leHBvcnQgdHlwZSBTZW5kVGVsZW1ldHJ5Q3VzdG9tRXZlbnRNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLlNlbmRUZWxlbWV0cnlDdXN0b21FdmVudDtcbiAgICBkYXRhOiB7XG4gICAgICAgIHNjcmVlbk5hbWU6IFRlbGVtZXRyeUFjdGlvblRvU2NyZWVuTWFwW1RlbGVtZXRyeUV2ZW50TmFtZV07XG4gICAgICAgIGV2ZW50TmFtZTogVGVsZW1ldHJ5RXZlbnROYW1lO1xuICAgIH07XG59O1xuXG5leHBvcnQgdHlwZSBBZGRUZWxlbWV0cnlPcGVuZWRQYWdlTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5BZGRUZWxlbWV0cnlPcGVuZWRQYWdlO1xufTtcblxuZXhwb3J0IHR5cGUgUmVtb3ZlVGVsZW1ldHJ5T3BlbmVkUGFnZU1lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuUmVtb3ZlVGVsZW1ldHJ5T3BlbmVkUGFnZTtcbiAgICBkYXRhOiB7XG4gICAgICAgIHBhZ2VJZDogc3RyaW5nO1xuICAgIH07XG59O1xuXG5leHBvcnQgdHlwZSBDYW5FbmFibGVTdGF0aWNGaWx0ZXJNdjNNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLkNhbkVuYWJsZVN0YXRpY0ZpbHRlck12MztcbiAgICBkYXRhOiB7XG4gICAgICAgIGZpbHRlcklkOiBudW1iZXI7XG4gICAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIENhbkVuYWJsZVN0YXRpY0dyb3VwTXYzTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5DYW5FbmFibGVTdGF0aWNHcm91cE12MztcbiAgICBkYXRhOiB7XG4gICAgICAgIGdyb3VwSWQ6IG51bWJlcjtcbiAgICB9O1xufTtcblxuZXhwb3J0IHR5cGUgQ3VycmVudExpbWl0c012M01lc3NhZ2UgPSB7XG4gICAgdHlwZTogTWVzc2FnZVR5cGUuQ3VycmVudExpbWl0c012Mztcbn07XG5cbmV4cG9ydCB0eXBlIFJlc3RvcmVGaWx0ZXJzTXYzTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5SZXN0b3JlRmlsdGVyc012Mztcbn07XG5cbmV4cG9ydCB0eXBlIENsZWFyUnVsZXNMaW1pdHNXYXJuaW5nTXYzTWVzc2FnZSA9IHtcbiAgICB0eXBlOiBNZXNzYWdlVHlwZS5DbGVhclJ1bGVzTGltaXRzV2FybmluZ012Mztcbn07XG5cbmV4cG9ydCB0eXBlIEdldFJ1bGVzTGltaXRzQ291bnRlcnNNdjNNZXNzYWdlID0ge1xuICAgIHR5cGU6IE1lc3NhZ2VUeXBlLkdldFJ1bGVzTGltaXRzQ291bnRlcnNNdjM7XG59O1xuXG4vLyBVbmlmaWVkIG1lc3NhZ2UgbWFwIHRoYXQgaW5jbHVkZXMgYm90aCBtZXNzYWdlIHN0cnVjdHVyZSBhbmQgcmVzcG9uc2UgdHlwZXNcbmV4cG9ydCB0eXBlIE1lc3NhZ2VNYXAgPSB7XG4gICAgW01lc3NhZ2VUeXBlLkNyZWF0ZUV2ZW50TGlzdGVuZXJdOiB7XG4gICAgICAgIG1lc3NhZ2U6IENyZWF0ZUV2ZW50TGlzdGVuZXJNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogQ3JlYXRlRXZlbnRMaXN0ZW5lclJlc3BvbnNlO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLkFkZExvbmdMaXZlZENvbm5lY3Rpb25dOiB7XG4gICAgICAgIG1lc3NhZ2U6IEFkZExvbmdMaXZlZENvbm5lY3Rpb25NZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogdm9pZDtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5BcHBseVNldHRpbmdzSnNvbl06IHtcbiAgICAgICAgbWVzc2FnZTogQXBwbHlTZXR0aW5nc0pzb25NZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogYm9vbGVhbjtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5Mb2FkU2V0dGluZ3NKc29uXToge1xuICAgICAgICBtZXNzYWdlOiBMb2FkU2V0dGluZ3NKc29uTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IEV4cG9ydE1lc3NhZ2VSZXNwb25zZTtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5BZGRGaWx0ZXJpbmdTdWJzY3JpcHRpb25dOiB7XG4gICAgICAgIG1lc3NhZ2U6IEFkZEZpbHRlcmluZ1N1YnNjcmlwdGlvbk1lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiB2b2lkO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLkdldElzQXBwSW5pdGlhbGl6ZWRdOiB7XG4gICAgICAgIG1lc3NhZ2U6IEdldElzQXBwSW5pdGlhbGl6ZWRNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogYm9vbGVhbjtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5HZXRUYWJJbmZvRm9yUG9wdXBdOiB7XG4gICAgICAgIG1lc3NhZ2U6IEdldFRhYkluZm9Gb3JQb3B1cE1lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiBHZXRUYWJJbmZvRm9yUG9wdXBSZXNwb25zZSB8IHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5DaGFuZ2VBcHBsaWNhdGlvbkZpbHRlcmluZ1BhdXNlZF06IHtcbiAgICAgICAgbWVzc2FnZTogQ2hhbmdlQXBwbGljYXRpb25GaWx0ZXJpbmdQYXVzZWRNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogdm9pZDtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5PcGVuUnVsZXNMaW1pdHNUYWJdOiB7XG4gICAgICAgIG1lc3NhZ2U6IE9wZW5SdWxlc0xpbWl0c1RhYk1lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiB2b2lkO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLk9wZW5TZXR0aW5nc1RhYl06IHtcbiAgICAgICAgbWVzc2FnZTogT3BlblNldHRpbmdzVGFiTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IHZvaWQ7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuT3BlbkFzc2lzdGFudF06IHtcbiAgICAgICAgbWVzc2FnZTogT3BlbkFzc2lzdGFudE1lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiB2b2lkO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLlVwZGF0ZUZ1bGxzY3JlZW5Vc2VyUnVsZXNUaGVtZV06IHtcbiAgICAgICAgbWVzc2FnZTogVXBkYXRlRnVsbHNjcmVlblVzZXJSdWxlc1RoZW1lTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IHZvaWQ7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuU3luY2hyb25pemVPcGVuVGFic106IHtcbiAgICAgICAgbWVzc2FnZTogU3luY2hyb25pemVPcGVuVGFic01lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiBGaWx0ZXJpbmdMb2dUYWJJbmZvW107XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuQ2hlY2tGaWx0ZXJzVXBkYXRlXToge1xuICAgICAgICBtZXNzYWdlOiBDaGVja0ZpbHRlcnNVcGRhdGVNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogRmlsdGVyTWV0YWRhdGFbXSB8IHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5DaGVja0V4dGVuc2lvblVwZGF0ZU12M106IHtcbiAgICAgICAgbWVzc2FnZTogQ2hlY2tFeHRlbnNpb25VcGRhdGVNZXNzYWdlTXYzO1xuICAgICAgICByZXNwb25zZTogdm9pZDtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5VcGRhdGVFeHRlbnNpb25NdjNdOiB7XG4gICAgICAgIG1lc3NhZ2U6IFVwZGF0ZUV4dGVuc2lvbk1lc3NhZ2VNdjM7XG4gICAgICAgIHJlc3BvbnNlOiB2b2lkO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLkdldEFsbG93bGlzdERvbWFpbnNdOiB7XG4gICAgICAgIG1lc3NhZ2U6IEdldEFsbG93bGlzdERvbWFpbnNNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogR2V0QWxsb3dsaXN0RG9tYWluc1Jlc3BvbnNlO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLk9wZW5FeHRlbnNpb25TdG9yZV06IHtcbiAgICAgICAgbWVzc2FnZTogT3BlbkV4dGVuc2lvblN0b3JlTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IHZvaWQ7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuT3BlbkNvbXBhcmVQYWdlXToge1xuICAgICAgICBtZXNzYWdlOiBPcGVuQ29tcGFyZVBhZ2VNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogdm9pZDtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5PcGVuQ2hyb21lRXh0ZW5zaW9uc1NldHRpbmdzUGFnZV06IHtcbiAgICAgICAgbWVzc2FnZTogT3BlbkNocm9tZUV4dGVuc2lvbnNTZXR0aW5nc1BhZ2VNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogdm9pZDtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5PcGVuRXh0ZW5zaW9uRGV0YWlsc1BhZ2VdOiB7XG4gICAgICAgIG1lc3NhZ2U6IE9wZW5FeHRlbnNpb25EZXRhaWxzUGFnZU1lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiB2b2lkO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLk9wZW5GdWxsc2NyZWVuVXNlclJ1bGVzXToge1xuICAgICAgICBtZXNzYWdlOiBPcGVuRnVsbHNjcmVlblVzZXJSdWxlc01lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiB2b2lkO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLlJlc2V0QmxvY2tlZEFkc0NvdW50XToge1xuICAgICAgICBtZXNzYWdlOiBSZXNldEJsb2NrZWRBZHNDb3VudE1lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiB2b2lkO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLk9wZW5GaWx0ZXJpbmdMb2ddOiB7XG4gICAgICAgIG1lc3NhZ2U6IE9wZW5GaWx0ZXJpbmdMb2dNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogdm9pZDtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5PcGVuQWJ1c2VUYWJdOiB7XG4gICAgICAgIG1lc3NhZ2U6IE9wZW5BYnVzZVRhYk1lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiB2b2lkO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLk9wZW5TaXRlUmVwb3J0VGFiXToge1xuICAgICAgICBtZXNzYWdlOiBPcGVuU2l0ZVJlcG9ydFRhYk1lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiB2b2lkO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLk9wZW5UaGFua3lvdVBhZ2VdOiB7XG4gICAgICAgIG1lc3NhZ2U6IE9wZW5UaGFua3lvdVBhZ2VNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogdm9pZDtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5HZXRPcHRpb25zRGF0YV06IHtcbiAgICAgICAgbWVzc2FnZTogR2V0T3B0aW9uc0RhdGFNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogR2V0T3B0aW9uc0RhdGFSZXNwb25zZTtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5DaGFuZ2VVc2VyU2V0dGluZ3NdOiB7XG4gICAgICAgIG1lc3NhZ2U6IENoYW5nZVVzZXJTZXR0aW5nTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IHZvaWQ7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuUmVzZXRTZXR0aW5nc106IHtcbiAgICAgICAgbWVzc2FnZTogUmVzZXRTZXR0aW5nc01lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiBib29sZWFuO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLkFkZEFuZEVuYWJsZUZpbHRlcl06IHtcbiAgICAgICAgbWVzc2FnZTogQWRkQW5kRW5hYmxlRmlsdGVyTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5EaXNhYmxlRmlsdGVyXToge1xuICAgICAgICBtZXNzYWdlOiBEaXNhYmxlRmlsdGVyTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IHZvaWQ7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuUmVtb3ZlQW50aUJhbm5lckZpbHRlcl06IHtcbiAgICAgICAgbWVzc2FnZTogUmVtb3ZlQW50aUJhbm5lckZpbHRlck1lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiB2b2lkO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLlNhdmVBbGxvd2xpc3REb21haW5zXToge1xuICAgICAgICBtZXNzYWdlOiBTYXZlQWxsb3dsaXN0RG9tYWluc01lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiB2b2lkO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLlNhdmVVc2VyUnVsZXNdOiB7XG4gICAgICAgIG1lc3NhZ2U6IFNhdmVVc2VyUnVsZXNNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogdm9pZDtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5HZXRVc2VyUnVsZXNdOiB7XG4gICAgICAgIG1lc3NhZ2U6IEdldFVzZXJSdWxlc01lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiBHZXRVc2VyUnVsZXNSZXNwb25zZTtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5HZXRVc2VyUnVsZXNFZGl0b3JEYXRhXToge1xuICAgICAgICBtZXNzYWdlOiBHZXRVc2VyUnVsZXNFZGl0b3JEYXRhTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IEdldFVzZXJSdWxlc0VkaXRvckRhdGFSZXNwb25zZTtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5BZGRVc2VyUnVsZV06IHtcbiAgICAgICAgbWVzc2FnZTogQWRkVXNlclJ1bGVNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogdm9pZDtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5SZW1vdmVVc2VyUnVsZV06IHtcbiAgICAgICAgbWVzc2FnZTogUmVtb3ZlVXNlclJ1bGVNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogdm9pZDtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5SZXNldFVzZXJSdWxlc0ZvclBhZ2VdOiB7XG4gICAgICAgIG1lc3NhZ2U6IFJlc2V0VXNlclJ1bGVzRm9yUGFnZU1lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiB2b2lkO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLkdldEVkaXRvclN0b3JhZ2VDb250ZW50XToge1xuICAgICAgICBtZXNzYWdlOiBHZXRFZGl0b3JTdG9yYWdlQ29udGVudE1lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuU2V0RWRpdG9yU3RvcmFnZUNvbnRlbnRdOiB7XG4gICAgICAgIG1lc3NhZ2U6IFNldEVkaXRvclN0b3JhZ2VDb250ZW50TWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IHZvaWQ7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuUmVtb3ZlQWxsb3dsaXN0RG9tYWluXToge1xuICAgICAgICBtZXNzYWdlOiBSZW1vdmVBbGxvd2xpc3REb21haW5NZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogdm9pZDtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5BZGRBbGxvd2xpc3REb21haW5Gb3JUYWJJZF06IHtcbiAgICAgICAgbWVzc2FnZTogQWRkQWxsb3dsaXN0RG9tYWluRm9yVGFiSWRNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogdm9pZDtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5BZGRBbGxvd2xpc3REb21haW5Gb3JVcmxdOiB7XG4gICAgICAgIG1lc3NhZ2U6IEFkZEFsbG93bGlzdERvbWFpbkZvclVybE1lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiB2b2lkO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLkxvYWRDdXN0b21GaWx0ZXJJbmZvXToge1xuICAgICAgICBtZXNzYWdlOiBMb2FkQ3VzdG9tRmlsdGVySW5mb01lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiBHZXRDdXN0b21GaWx0ZXJJbmZvUmVzdWx0O1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLlN1YnNjcmliZVRvQ3VzdG9tRmlsdGVyXToge1xuICAgICAgICBtZXNzYWdlOiBTdWJzY3JpYmVUb0N1c3RvbUZpbHRlck1lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiBDdXN0b21GaWx0ZXJNZXRhZGF0YTtcbiAgICB9O1xuICAgIC8vIFRoaXMgbWVzc2FnZSBpcyBzZW50IGZyb20gYmFja2dyb3VuZCBhbmQgaGFuZGxlZCBvbiBVSSBzaWRlLlxuICAgIFtNZXNzYWdlVHlwZS5BcHBJbml0aWFsaXplZF06IHtcbiAgICAgICAgbWVzc2FnZTogQXBwSW5pdGlhbGl6ZWRNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogbmV2ZXI7XG4gICAgfTtcbiAgICAvLyBUaGlzIG1lc3NhZ2UgaXMgc2VudCBmcm9tIGJhY2tncm91bmQgYW5kIGhhbmRsZWQgb24gVUkgc2lkZS5cbiAgICBbTWVzc2FnZVR5cGUuVXBkYXRlVG90YWxCbG9ja2VkXToge1xuICAgICAgICBtZXNzYWdlOiBVcGRhdGVUb3RhbEJsb2NrZWRNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogbmV2ZXI7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuR2V0RmlsdGVyaW5nTG9nRGF0YV06IHtcbiAgICAgICAgbWVzc2FnZTogR2V0RmlsdGVyaW5nTG9nRGF0YU1lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiBHZXRGaWx0ZXJpbmdMb2dEYXRhUmVzcG9uc2U7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuQ2hlY2tSZXF1ZXN0RmlsdGVyUmVhZHldOiB7XG4gICAgICAgIG1lc3NhZ2U6IENoZWNrUmVxdWVzdEZpbHRlclJlYWR5TWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IGJvb2xlYW47XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuT25PcGVuRmlsdGVyaW5nTG9nUGFnZV06IHtcbiAgICAgICAgbWVzc2FnZTogT3BlbkZpbHRlcmluZ0xvZ1BhZ2VNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogdm9pZDtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5PbkNsb3NlRmlsdGVyaW5nTG9nUGFnZV06IHtcbiAgICAgICAgbWVzc2FnZTogQ2xvc2VGaWx0ZXJpbmdMb2dQYWdlTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IHZvaWQ7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuQ2xlYXJFdmVudHNCeVRhYklkXToge1xuICAgICAgICBtZXNzYWdlOiBDbGVhckV2ZW50c0J5VGFiSWRNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogdm9pZDtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5TZXRQcmVzZXJ2ZUxvZ1N0YXRlXToge1xuICAgICAgICBtZXNzYWdlOiBTZXRQcmVzZXJ2ZUxvZ1N0YXRlTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IHZvaWQ7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuUmVmcmVzaFBhZ2VdOiB7XG4gICAgICAgIG1lc3NhZ2U6IFJlZnJlc2hQYWdlTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IHZvaWQ7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuR2V0RmlsdGVyaW5nSW5mb0J5VGFiSWRdOiB7XG4gICAgICAgIG1lc3NhZ2U6IEdldEZpbHRlcmluZ0luZm9CeVRhYklkTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IEZpbHRlcmluZ0xvZ1RhYkluZm8gfCB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuU2V0RmlsdGVyaW5nTG9nV2luZG93U3RhdGVdOiB7XG4gICAgICAgIG1lc3NhZ2U6IFNldEZpbHRlcmluZ0xvZ1dpbmRvd1N0YXRlTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IHZvaWQ7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuRW5hYmxlRmlsdGVyc0dyb3VwXToge1xuICAgICAgICBtZXNzYWdlOiBFbmFibGVGaWx0ZXJzR3JvdXBNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogbnVtYmVyW10gfCB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuRGlzYWJsZUZpbHRlcnNHcm91cF06IHtcbiAgICAgICAgbWVzc2FnZTogRGlzYWJsZUZpbHRlcnNHcm91cE1lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiB2b2lkO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLk9wZW5TYWZlYnJvd3NpbmdUcnVzdGVkXToge1xuICAgICAgICBtZXNzYWdlOiBPcGVuU2FmZWJyb3dzaW5nVHJ1c3RlZE1lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiB2b2lkO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLlNldE5vdGlmaWNhdGlvblZpZXdlZF06IHtcbiAgICAgICAgbWVzc2FnZTogU2V0Tm90aWZpY2F0aW9uVmlld2VkTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IFByb21pc2U8dm9pZD47XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuUmVtb3ZlTGlzdGVuZXJdOiB7XG4gICAgICAgIG1lc3NhZ2U6IFJlbW92ZUxpc3RlbmVyTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IHZvaWQ7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuU2NyaXB0bGV0Q2xvc2VXaW5kb3ddOiB7XG4gICAgICAgIG1lc3NhZ2U6IFNjcmlwdGxldENsb3NlV2luZG93TWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IHZvaWQ7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuU2hvd1J1bGVMaW1pdHNBbGVydF06IHtcbiAgICAgICAgbWVzc2FnZTogU2hvd1J1bGVMaW1pdHNBbGVydE1lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiBib29sZWFuO1xuICAgIH07XG4gICAgLy8gVGhpcyBtZXNzYWdlIGlzIHNlbnQgZnJvbSBiYWNrZ3JvdW5kIGFuZCBoYW5kbGVkIG9uIFVJIHNpZGUuXG4gICAgW01lc3NhZ2VUeXBlLk5vdGlmeUxpc3RlbmVyc106IHtcbiAgICAgICAgbWVzc2FnZTogTm90aWZ5TGlzdGVuZXJzTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IG5ldmVyO1xuICAgIH07XG4gICAgLy8gVGhpcyBtZXNzYWdlIGlzIHNlbnQgZnJvbSBiYWNrZ3JvdW5kIGFuZCBoYW5kbGVkIG9uIFVJIHNpZGUuXG4gICAgW01lc3NhZ2VUeXBlLlVwZGF0ZUxpc3RlbmVyc106IHtcbiAgICAgICAgbWVzc2FnZTogVXBkYXRlTGlzdGVuZXJzTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IG5ldmVyO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLlNob3dBbGVydFBvcHVwXToge1xuICAgICAgICBtZXNzYWdlOiBTaG93QWxlcnRQb3B1cE1lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiB2b2lkO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLlNob3dWZXJzaW9uVXBkYXRlZFBvcHVwXToge1xuICAgICAgICBtZXNzYWdlOiBTaG93VmVyc2lvblVwZGF0ZWRQb3B1cE1lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiBib29sZWFuO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLkdldElzQ29uc2VudGVkRmlsdGVyXToge1xuICAgICAgICBtZXNzYWdlOiBHZXRJc0NvbnNlbnRlZEZpbHRlck1lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiBib29sZWFuO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLlNldENvbnNlbnRlZEZpbHRlcnNdOiB7XG4gICAgICAgIG1lc3NhZ2U6IFNldENvbnNlbnRlZEZpbHRlcnNNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogdm9pZDtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5BZGRVcmxUb1RydXN0ZWRdOiB7XG4gICAgICAgIG1lc3NhZ2U6IEFkZFVybFRvVHJ1c3RlZE1lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiB2b2lkO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLlNlbmRUZWxlbWV0cnlQYWdlVmlld0V2ZW50XToge1xuICAgICAgICBtZXNzYWdlOiBTZW5kVGVsZW1ldHJ5UGFnZVZpZXdFdmVudE1lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiB2b2lkO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLlNlbmRUZWxlbWV0cnlDdXN0b21FdmVudF06IHtcbiAgICAgICAgbWVzc2FnZTogU2VuZFRlbGVtZXRyeUN1c3RvbUV2ZW50TWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IHZvaWQ7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuQWRkVGVsZW1ldHJ5T3BlbmVkUGFnZV06IHtcbiAgICAgICAgbWVzc2FnZTogQWRkVGVsZW1ldHJ5T3BlbmVkUGFnZU1lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiBzdHJpbmc7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuUmVtb3ZlVGVsZW1ldHJ5T3BlbmVkUGFnZV06IHtcbiAgICAgICAgbWVzc2FnZTogUmVtb3ZlVGVsZW1ldHJ5T3BlbmVkUGFnZU1lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiB2b2lkO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLkN1cnJlbnRMaW1pdHNNdjNdOiB7XG4gICAgICAgIG1lc3NhZ2U6IEN1cnJlbnRMaW1pdHNNdjNNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogTXYzTGltaXRzQ2hlY2tSZXN1bHQ7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuR2V0UnVsZXNMaW1pdHNDb3VudGVyc012M106IHtcbiAgICAgICAgbWVzc2FnZTogR2V0UnVsZXNMaW1pdHNDb3VudGVyc012M01lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiBJUnVsZXNMaW1pdHMgfCB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuQ2FuRW5hYmxlU3RhdGljRmlsdGVyTXYzXToge1xuICAgICAgICBtZXNzYWdlOiBDYW5FbmFibGVTdGF0aWNGaWx0ZXJNdjNNZXNzYWdlO1xuICAgICAgICByZXNwb25zZTogU3RhdGljTGltaXRzQ2hlY2tSZXN1bHQ7XG4gICAgfTtcbiAgICBbTWVzc2FnZVR5cGUuQ2FuRW5hYmxlU3RhdGljR3JvdXBNdjNdOiB7XG4gICAgICAgIG1lc3NhZ2U6IENhbkVuYWJsZVN0YXRpY0dyb3VwTXYzTWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IFN0YXRpY0xpbWl0c0NoZWNrUmVzdWx0O1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLlJlc3RvcmVGaWx0ZXJzTXYzXToge1xuICAgICAgICBtZXNzYWdlOiBSZXN0b3JlRmlsdGVyc012M01lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiB2b2lkO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLkNsZWFyUnVsZXNMaW1pdHNXYXJuaW5nTXYzXToge1xuICAgICAgICBtZXNzYWdlOiBDbGVhclJ1bGVzTGltaXRzV2FybmluZ012M01lc3NhZ2U7XG4gICAgICAgIHJlc3BvbnNlOiB2b2lkO1xuICAgIH07XG4gICAgW01lc3NhZ2VUeXBlLkluaXRpYWxpemVGcmFtZVNjcmlwdF06IHtcbiAgICAgICAgbWVzc2FnZTogSW5pdGlhbGl6ZUZyYW1lU2NyaXB0TWVzc2FnZTtcbiAgICAgICAgcmVzcG9uc2U6IFBhZ2VJbml0QXBwRGF0YTtcbiAgICB9O1xuICAgIFtNZXNzYWdlVHlwZS5Jbml0aWFsaXplQmxvY2tpbmdQYWdlU2NyaXB0XToge1xuICAgICAgICBtZXNzYWdlOiBJbml0aWFsaXplQmxvY2tpbmdQYWdlU2NyaXB0O1xuICAgICAgICByZXNwb25zZTogQmxvY2tpbmdQYWdlSW5pdEFwcERhdGE7XG4gICAgfTtcbn07XG5cbi8qKlxuICogSGVscGVyIHR5cGUgdG8gY2hlY2sgaWYgYSBnaXZlbiB0eXBlIGlzIGEgdmFsaWQgbWVzc2FnZSB0eXBlLlxuICovXG5leHBvcnQgdHlwZSBWYWxpZE1lc3NhZ2VUeXBlcyA9IGtleW9mIE1lc3NhZ2VNYXA7XG5cbi8qKlxuICogQWxsIG1lc3NhZ2VzIHRoYXQgY2FuIGJlIHNlbnQuXG4gKi9cbmV4cG9ydCB0eXBlIE1lc3NhZ2UgPSBNZXNzYWdlTWFwW1ZhbGlkTWVzc2FnZVR5cGVzXVsnbWVzc2FnZSddICYgTWVzc2FnZUNvbW1vblByb3BzO1xuXG4vKipcbiAqIEhlbHBlciB0eXBlIHRvIGV4dHJhY3QgdGhlIG1lc3NhZ2UgdHlwZSBmb3IgYSBnaXZlbiBtZXNzYWdlLlxuICovXG5leHBvcnQgdHlwZSBFeHRyYWN0ZWRNZXNzYWdlPFQ+ID0gRXh0cmFjdDxNZXNzYWdlLCB7IHR5cGU6IFQgfT47XG5cbi8qKlxuICogSGVscGVyIHR5cGUgdG8gZXh0cmFjdCB0aGUgcmVzcG9uc2UgdHlwZSBmb3IgYSBnaXZlbiBtZXNzYWdlIHR5cGVcbiAqL1xuZXhwb3J0IHR5cGUgRXh0cmFjdE1lc3NhZ2VSZXNwb25zZTxUIGV4dGVuZHMgVmFsaWRNZXNzYWdlVHlwZXM+ID0gTWVzc2FnZU1hcFtUXVsncmVzcG9uc2UnXTtcblxuLyoqXG4gKiBIZWxwZXIgdHlwZSB0byBleHRyYWN0IHRoZSBtZXNzYWdlIHR5cGUgZm9yIGEgZ2l2ZW4gbWVzc2FnZSB3aXRob3V0IGhhbmRsZXJOYW1lLlxuICovXG5leHBvcnQgdHlwZSBNZXNzYWdlV2l0aG91dEhhbmRsZXJOYW1lPFQ+ID0geyB0eXBlOiBUIH0gJiBPbWl0PEV4dHJhY3RlZE1lc3NhZ2U8VD4sICdoYW5kbGVyTmFtZSc+O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUtMjAyNSBBZGd1YXJkIFNvZnR3YXJlIEx0ZC5cbiAqXG4gKiBAZmlsZVxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgQWRHdWFyZCBCcm93c2VyIEV4dGVuc2lvbiAoaHR0cHM6Ly9naXRodWIuY29tL0FkZ3VhcmRUZWFtL0FkZ3VhcmRCcm93c2VyRXh0ZW5zaW9uKS5cbiAqXG4gKiBBZEd1YXJkIEJyb3dzZXIgRXh0ZW5zaW9uIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBBZEd1YXJkIEJyb3dzZXIgRXh0ZW5zaW9uIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIEFkR3VhcmQgQnJvd3NlciBFeHRlbnNpb24uIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuXG4vLyBTaW5jZSBleHBvcnRzIGZyb20gJy4vY29uc3RhbnRzJyBhcmU6IHRoZSBNZXNzYWdlVHlwZSBlbnVtIGFuZCBhIGxvdCBvZiB0eXBlcyxcbi8vIGFuZCBpbXBvcnRzIHRoZXJlIGFyZSB0eXBlcyBvbmx5LCBzbyBpdCBzaG91bGQgbm90IGFmZmVjdCBidW5kbGUgc2l6ZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG5leHBvcnQgKiBmcm9tICcuL2NvbnN0YW50cyc7XG5leHBvcnQgeyBzZW5kTWVzc2FnZSwgc2VuZFRhYk1lc3NhZ2UgfSBmcm9tICcuL3NlbmQtbWVzc2FnZSc7XG5leHBvcnQgeyBNZXNzYWdlSGFuZGxlciwgbWVzc2FnZUhhc1R5cGVGaWVsZCwgbWVzc2FnZUhhc1R5cGVBbmREYXRhRmllbGRzIH0gZnJvbSAnLi9tZXNzYWdlLWhhbmRsZXInO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUtMjAyNSBBZGd1YXJkIFNvZnR3YXJlIEx0ZC5cbiAqXG4gKiBAZmlsZVxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgQWRHdWFyZCBCcm93c2VyIEV4dGVuc2lvbiAoaHR0cHM6Ly9naXRodWIuY29tL0FkZ3VhcmRUZWFtL0FkZ3VhcmRCcm93c2VyRXh0ZW5zaW9uKS5cbiAqXG4gKiBBZEd1YXJkIEJyb3dzZXIgRXh0ZW5zaW9uIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBBZEd1YXJkIEJyb3dzZXIgRXh0ZW5zaW9uIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIEFkR3VhcmQgQnJvd3NlciBFeHRlbnNpb24uIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IGJyb3dzZXIsIHsgdHlwZSBSdW50aW1lIH0gZnJvbSAnd2ViZXh0ZW5zaW9uLXBvbHlmaWxsJztcblxuaW1wb3J0IHsgdHlwZSBFbmdpbmVNZXNzYWdlIH0gZnJvbSAnZW5naW5lJztcblxuaW1wb3J0IHtcbiAgICB0eXBlIE1lc3NhZ2VUeXBlLFxuICAgIHR5cGUgTWVzc2FnZSxcbiAgICB0eXBlIEV4dHJhY3RlZE1lc3NhZ2UsXG4gICAgdHlwZSBWYWxpZE1lc3NhZ2VUeXBlcyxcbiAgICB0eXBlIEV4dHJhY3RNZXNzYWdlUmVzcG9uc2UsXG4gICAgQVBQX01FU1NBR0VfSEFORExFUl9OQU1FLFxufSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbnR5cGUgTWVzc2FnZUxpc3RlbmVyPFQgZXh0ZW5kcyBWYWxpZE1lc3NhZ2VUeXBlcz4gPSAoXG4gICAgbWVzc2FnZTogRXh0cmFjdGVkTWVzc2FnZTxUPixcbiAgICBzZW5kZXI6IFJ1bnRpbWUuTWVzc2FnZVNlbmRlcixcbikgPT4gUHJvbWlzZTxFeHRyYWN0TWVzc2FnZVJlc3BvbnNlPFQ+PiB8IEV4dHJhY3RNZXNzYWdlUmVzcG9uc2U8VD47XG5cbi8qKlxuICogVHlwZSBndWFyZCBmb3IgbWVzc2FnZXMgdGhhdCBoYXZlIGEgJ3R5cGUnIGZpZWxkIHdpdGggcG9zc2libGUge0BsaW5rIE1lc3NhZ2VUeXBlfS5cbiAqXG4gKiBAbm90ZSBBZGRlZCB0byBubyBicmluZyBoZXJlIGh1Z2Ugem9kIGxpYnJhcnkuXG4gKlxuICogQHBhcmFtIG1lc3NhZ2UgVW5rbm93biBtZXNzYWdlLlxuICpcbiAqIEByZXR1cm5zIFRydWUgaWYgbWVzc2FnZSBoYXMgJ3R5cGUnIGZpZWxkIHdpdGggcG9zc2libGUge0BsaW5rIE1lc3NhZ2VUeXBlfS5cbiAqL1xuZXhwb3J0IGNvbnN0IG1lc3NhZ2VIYXNUeXBlRmllbGQgPSAobWVzc2FnZTogdW5rbm93bik6IG1lc3NhZ2UgaXMgeyB0eXBlOiBNZXNzYWdlVHlwZSB9ID0+IHtcbiAgICByZXR1cm4gdHlwZW9mIG1lc3NhZ2UgPT09ICdvYmplY3QnICYmIG1lc3NhZ2UgIT09IG51bGwgJiYgJ3R5cGUnIGluIG1lc3NhZ2U7XG59O1xuXG4vKipcbiAqIFR5cGUgZ3VhcmQgZm9yIG1lc3NhZ2VzIHRoYXQgaGF2ZSBhICd0eXBlJyBmaWVsZCBhbmQgJ2RhdGEnIGZpZWxkIGFuZCBsb29rcyBsaWtlIHtAbGluayBNZXNzYWdlfS5cbiAqXG4gKiBAbm90ZSBBZGRlZCB0byBubyBicmluZyBoZXJlIGh1Z2Ugem9kIGxpYnJhcnkuXG4gKlxuICogQHBhcmFtIG1lc3NhZ2UgVW5rbm93biBtZXNzYWdlLlxuICpcbiAqIEByZXR1cm5zIFRydWUgaWYgbWVzc2FnZSBoYXMgJ3R5cGUnIGFuZCAnZGF0YScgZmllbGRzIGFuZCBsb29rcyBsaWtlIHtAbGluayBNZXNzYWdlfS5cbiAqL1xuZXhwb3J0IGNvbnN0IG1lc3NhZ2VIYXNUeXBlQW5kRGF0YUZpZWxkcyA9IChtZXNzYWdlOiB1bmtub3duKTogbWVzc2FnZSBpcyBNZXNzYWdlID0+IHtcbiAgICByZXR1cm4gbWVzc2FnZUhhc1R5cGVGaWVsZChtZXNzYWdlKSAmJiAnZGF0YScgaW4gbWVzc2FnZTtcbn07XG5cbi8qKlxuICogQVBJIGZvciBoYW5kbGluZyBNZXNzYWdlcyB2aWEge0BsaW5rIGJyb3dzZXIucnVudGltZS5vbk1lc3NhZ2V9XG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBNZXNzYWdlSGFuZGxlciB7XG4gICAgcHJvdGVjdGVkIGxpc3RlbmVycyA9IG5ldyBNYXA8VmFsaWRNZXNzYWdlVHlwZXMsIE1lc3NhZ2VMaXN0ZW5lcjxWYWxpZE1lc3NhZ2VUeXBlcz4+KCk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVNZXNzYWdlID0gdGhpcy5oYW5kbGVNZXNzYWdlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIGluaXQoKTogdm9pZCB7XG4gICAgICAgIGJyb3dzZXIucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIodGhpcy5oYW5kbGVNZXNzYWdlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgbWVzc2FnZSBsaXN0ZW5lci5cbiAgICAgKiBMaXN0ZW5lcnMgbGltaXRlZCB0byAxIHBlciBtZXNzYWdlIHR5cGUgdG8gcHJldmVudCByYWNlXG4gICAgICogY29uZGl0aW9uIHdoaWxlIHJlc3BvbnNlIHByb2Nlc3NpbmcuXG4gICAgICpcbiAgICAgKiBUT0RPOiBpbXBsZW1lbnQgbGlzdGVuZXJzIHByaW9yaXR5IGV4ZWN1dGlvbiBzdHJhdGVneVxuICAgICAqXG4gICAgICogQHBhcmFtIHR5cGUgLSB7QGxpbmsgVmFsaWRNZXNzYWdlVHlwZXN9XG4gICAgICogQHBhcmFtIGxpc3RlbmVyIC0ge0BsaW5rIE1lc3NhZ2VMaXN0ZW5lcn1cbiAgICAgKlxuICAgICAqIEB0aHJvd3MgZXJyb3IsIGlmIG1lc3NhZ2UgbGlzdGVuZXIgYWxyZWFkeSBhZGRlZFxuICAgICAqL1xuICAgIHB1YmxpYyBhZGRMaXN0ZW5lcjxUIGV4dGVuZHMgVmFsaWRNZXNzYWdlVHlwZXM+KFxuICAgICAgICB0eXBlOiBULFxuICAgICAgICBsaXN0ZW5lcjogTWVzc2FnZUxpc3RlbmVyPFQ+LFxuICAgICk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5saXN0ZW5lcnMuaGFzKHR5cGUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE1lc3NhZ2UgaGFuZGxlcjogJHt0eXBlfSBsaXN0ZW5lciBoYXMgYWxyZWFkeSBiZWVuIHJlZ2lzdGVyZWRgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENhc3QgdGhyb3VnaCB1bmtub3duIHRvIGhlbHAgVFMgdW5kZXJzdGFuZCB0aGF0IHRoZSBsaXN0ZW5lciBpcyBvZlxuICAgICAgICAvLyB0aGUgY29ycmVjdCB0eXBlLiBJdCB3aWxsIGNoZWNrIHR5cGVzIGF0IGNvbXBpbGUgdGltZS5cbiAgICAgICAgdGhpcy5saXN0ZW5lcnMuc2V0KHR5cGUsIGxpc3RlbmVyIGFzIHVua25vd24gYXMgTWVzc2FnZUxpc3RlbmVyPFZhbGlkTWVzc2FnZVR5cGVzPik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBtZXNzYWdlIGxpc3RlbmVyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHR5cGUgLSB7QGxpbmsgVmFsaWRNZXNzYWdlVHlwZXN9XG4gICAgICovXG4gICAgcHVibGljIHJlbW92ZUxpc3RlbmVyPFQgZXh0ZW5kcyBWYWxpZE1lc3NhZ2VUeXBlcz4odHlwZTogVCk6IHZvaWQge1xuICAgICAgICB0aGlzLmxpc3RlbmVycy5kZWxldGUodHlwZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbGwgbGlzdGVuZXJzXG4gICAgICovXG4gICAgcHVibGljIHJlbW92ZUxpc3RlbmVycygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMuY2xlYXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiB0aGUgbWVzc2FnZSBpcyBvZiB0eXBlIHtAbGluayBNZXNzYWdlfS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBtZXNzYWdlIE1lc3NhZ2Ugb2YgYmFzaWMgdHlwZSB7QGxpbmsgTWVzc2FnZX0gb3Ige0BsaW5rIEVuZ2luZU1lc3NhZ2V9LlxuICAgICAqXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgbWVzc2FnZSBpcyBvZiB0eXBlIHtAbGluayBNZXNzYWdlfS5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgc3RhdGljIGlzVmFsaWRNZXNzYWdlVHlwZShtZXNzYWdlOiBNZXNzYWdlIHwgRW5naW5lTWVzc2FnZSk6IG1lc3NhZ2UgaXMgTWVzc2FnZSB7XG4gICAgICAgIHJldHVybiBtZXNzYWdlLmhhbmRsZXJOYW1lID09PSBBUFBfTUVTU0FHRV9IQU5ETEVSX05BTUUgJiYgJ3R5cGUnIGluIG1lc3NhZ2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlcyBkYXRhIGZyb20ge0BsaW5rIGJyb3dzZXIucnVudGltZS5vbk1lc3NhZ2V9IGFuZCBtYXRjaCBzcGVjaWZpZWQgbGlzdGVuZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSAtIHtAbGluayBNZXNzYWdlfVxuICAgICAqIEBwYXJhbSBzZW5kZXIgLSBBbiBvYmplY3QgY29udGFpbmluZyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgc2NyaXB0IGNvbnRleHQgdGhhdCBzZW50IGEgbWVzc2FnZSBvciByZXF1ZXN0LlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBoYW5kbGVNZXNzYWdlKFxuICAgICAgICBtZXNzYWdlOiBNZXNzYWdlIHwgdW5rbm93bixcbiAgICAgICAgc2VuZGVyOiBSdW50aW1lLk1lc3NhZ2VTZW5kZXJcbiAgICApOiBQcm9taXNlPHVua25vd24+IHwgdW5kZWZpbmVkO1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUtMjAyNSBBZGd1YXJkIFNvZnR3YXJlIEx0ZC5cbiAqXG4gKiBAZmlsZVxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgQWRHdWFyZCBCcm93c2VyIEV4dGVuc2lvbiAoaHR0cHM6Ly9naXRodWIuY29tL0FkZ3VhcmRUZWFtL0FkZ3VhcmRCcm93c2VyRXh0ZW5zaW9uKS5cbiAqXG4gKiBBZEd1YXJkIEJyb3dzZXIgRXh0ZW5zaW9uIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBBZEd1YXJkIEJyb3dzZXIgRXh0ZW5zaW9uIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIEFkR3VhcmQgQnJvd3NlciBFeHRlbnNpb24uIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuXG5pbXBvcnQgYnJvd3NlciBmcm9tICd3ZWJleHRlbnNpb24tcG9seWZpbGwnO1xuXG5pbXBvcnQge1xuICAgIHR5cGUgTWVzc2FnZVR5cGUsXG4gICAgdHlwZSBNZXNzYWdlV2l0aG91dEhhbmRsZXJOYW1lLFxuICAgIEFQUF9NRVNTQUdFX0hBTkRMRVJfTkFNRSxcbn0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG4vKipcbiAqIFRPRE86IENvbnNpZGVyIG1vdmluZyB0aGlzIGZpbGUgdG8gdGhlIGJhY2tncm91bmQgZm9sZGVyLCBiZWNhdXNlIGFsbCBtZXNzYWdlc1xuICogZnJvbSB0aGUgVUkgc2hvdWxkIGJlIHNlbmQgdmlhIG1ldGhvZHMgb2YgTWVzc2VuZ2VyIGNsYXNzIGluc3RlYWQgb2YgdXNpbmdcbiAqIGRpcmVjdGx5IHNlbmRNZXNzYWdlIHRvIHByb3BlciB0eXBlcyBjaGVja2luZy5cbiAqXG4gKiB7QGxpbmsgc2VuZE1lc3NhZ2V9IHNlbmRzIGFwcCBtZXNzYWdlIHZpYSB7QGxpbmsgYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlfSBhbmRcbiAqIGdldHMgcmVzcG9uc2UgZnJvbSBhbm90aGVyIGV4dGVuc2lvbiBwYWdlIG1lc3NhZ2UgaGFuZGxlclxuICpcbiAqIEBwYXJhbSBtZXNzYWdlIC0gcGFydGlhbCB7QGxpbmsgTWVzc2FnZX0gcmVjb3JkIHdpdGhvdXQge0BsaW5rIE1lc3NhZ2UuaGFuZGxlck5hbWV9IGZpZWxkXG4gKlxuICogQHJldHVybnMgbWVzc2FnZSBoYW5kbGVyIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZW5kTWVzc2FnZTxUIGV4dGVuZHMgTWVzc2FnZVR5cGU+KFxuICAgIG1lc3NhZ2U6IE1lc3NhZ2VXaXRob3V0SGFuZGxlck5hbWU8VD4sXG4pOiBQcm9taXNlPHVua25vd24+IHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYXdhaXQgYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgICAgICAgIGhhbmRsZXJOYW1lOiBBUFBfTUVTU0FHRV9IQU5ETEVSX05BTUUsXG4gICAgICAgICAgICAuLi5tZXNzYWdlLFxuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICB9XG59XG5cbi8qKlxuICoge0BsaW5rIHNlbmRUYWJNZXNzYWdlfSBzZW5kcyBtZXNzYWdlIHRvIHNwZWNpZmllZCB0YWIgdmlhIHtAbGluayBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2V9IGFuZFxuICogZ2V0cyByZXNwb25zZSBmcm9tIGl0XG4gKlxuICogQHBhcmFtIHRhYklkIC0gdGFiIGlkXG4gKiBAcGFyYW0gbWVzc2FnZSAtIHBhcnRpYWwge0BsaW5rIE1lc3NhZ2V9IHJlY29yZCB3aXRob3V0IHtAbGluayBNZXNzYWdlLmhhbmRsZXJOYW1lfSBmaWVsZFxuICpcbiAqIEByZXR1cm5zIHRhYiBtZXNzYWdlIGhhbmRsZXIgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlbmRUYWJNZXNzYWdlPFQgZXh0ZW5kcyBNZXNzYWdlVHlwZT4oXG4gICAgdGFiSWQ6IG51bWJlcixcbiAgICBtZXNzYWdlOiBNZXNzYWdlV2l0aG91dEhhbmRsZXJOYW1lPFQ+LFxuKTogUHJvbWlzZTx1bmtub3duPiB7XG4gICAgcmV0dXJuIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZSh0YWJJZCwge1xuICAgICAgICBoYW5kbGVyTmFtZTogQVBQX01FU1NBR0VfSEFORExFUl9OQU1FLFxuICAgICAgICAuLi5tZXNzYWdlLFxuICAgIH0pO1xufVxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUtMjAyNSBBZGd1YXJkIFNvZnR3YXJlIEx0ZC5cbiAqXG4gKiBAZmlsZVxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgQWRHdWFyZCBCcm93c2VyIEV4dGVuc2lvbiAoaHR0cHM6Ly9naXRodWIuY29tL0FkZ3VhcmRUZWFtL0FkZ3VhcmRCcm93c2VyRXh0ZW5zaW9uKS5cbiAqXG4gKiBBZEd1YXJkIEJyb3dzZXIgRXh0ZW5zaW9uIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBBZEd1YXJkIEJyb3dzZXIgRXh0ZW5zaW9uIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIEFkR3VhcmQgQnJvd3NlciBFeHRlbnNpb24uIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuXG5pbXBvcnQgeyBNZXNzYWdlVHlwZSwgc2VuZE1lc3NhZ2UgfSBmcm9tICcuLi9jb21tb24vbWVzc2FnZXMnO1xuXG5leHBvcnQgdHlwZSBTdWJzY3JpcHRpb25EYXRhID0ge1xuICAgIHVybDogc3RyaW5nO1xuICAgIHRpdGxlOiBzdHJpbmc7XG59O1xuXG4vKipcbiAqIFRoaXMgY29udGVudCBzY3JpcHQgdXNlZCB0byBzdWJzY3JpYmUgdG8gZmlsdGVycyBjbGlja2luZyB0byBsaW5rcyB3aXRoIHNwZWNpZmllZCBmb3JtYXRcbiAqL1xuZXhwb3J0IGNsYXNzIFN1YnNjcmliZSB7XG4gICAgLyoqXG4gICAgICogQWRkIGxpc3RlbmVyIGZvciBzdWJzY3JpcHRpb24gbGlua3MgaW4gZG9jdW1lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGluaXQoKTogdm9pZCB7XG4gICAgICAgIGlmICghKGRvY3VtZW50IGluc3RhbmNlb2YgRG9jdW1lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVc2UgcG9pbnRlcmRvd24gdG8gaGFuZGxlIGJvdGggbW91c2UgY2xpY2tzIGFuZCB0b3VjaCBldmVudHNcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCBTdWJzY3JpYmUuaGFuZGxlT25DbGlja0V2ZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJZiBldmVudCBpcyBzdWJzY3JpcHRpb24gbGluayBjbGljaywgaW50ZXJjZXB0cyBpdCBhbmQgc2VuZHNcbiAgICAgKiB7QGxpbmsgTWVzc2FnZVR5cGUuQWRkRmlsdGVyaW5nU3Vic2NyaXB0aW9ufSBtZXNzYWdlIHRvIGJhY2tncm91bmQsIGVsc2UgcGFzcyBldmVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBldmVudCAtIGRvY3VtZW50IG1vdXNlIGV2ZW50XG4gICAgICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgaGFuZGxlT25DbGlja0V2ZW50KGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgICAgIC8vIGlnbm9yZSByaWdodC1jbGlja1xuICAgICAgICBpZiAoZXZlbnQuYnV0dG9uID09PSAyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0YXJnZXQgPSBTdWJzY3JpYmUuZ2V0QW5jaG9yRWxlbWVudChldmVudCk7XG5cbiAgICAgICAgaWYgKCF0YXJnZXQgfHwgIVN1YnNjcmliZS5oYXNTdWJzY3JpcHRpb25MaW5rKHRhcmdldCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBTdWJzY3JpYmUuZ2V0U3Vic2NyaXB0aW9uRGF0YSh0YXJnZXQpO1xuXG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VuZE1lc3NhZ2Uoe1xuICAgICAgICAgICAgdHlwZTogTWVzc2FnZVR5cGUuQWRkRmlsdGVyaW5nU3Vic2NyaXB0aW9uLFxuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSWYgZXZlbnQgdGFyZ2V0IGlzIGFuY2hvciBlbGVtZW50LCByZXR1cm5zIGl0LCBlbHNlIHNlYXJjaCBhbmNob3IgaW4gcGFyZW50IG5vZGVzLlxuICAgICAqXG4gICAgICogQHBhcmFtIGUgLSBkb2N1bWVudCBtb3VzZSBldmVudFxuICAgICAqXG4gICAgICogQHJldHVybnMgYW5jaG9yIGVsZW1lbnQgb3IgbnVsbCwgaWYgdGFyZ2V0IGlzIG5vdCBmb3VuZFxuICAgICAqL1xuICAgIHByaXZhdGUgc3RhdGljIGdldEFuY2hvckVsZW1lbnQoZTogTW91c2VFdmVudCk6IEhUTUxBbmNob3JFbGVtZW50IHwgbnVsbCB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gZS50YXJnZXQ7XG5cbiAgICAgICAgd2hpbGUgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEFuY2hvckVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQgaW5zdGFuY2VvZiBFbGVtZW50ID8gZWxlbWVudC5wYXJlbnROb2RlIDogbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiBhbmNob3IgZWxlbWVudCBoYXMgc3Vic2NyaXB0aW9uIGxpbmsuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxlbWVudCAtIGFuY2hvciBlbGVtZW50XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB0cnVlLCBpZiBhbmNob3IgZWxlbWVudCBoYXMgc3Vic2NyaXB0aW9uIGxpbmssIGVsc2UgcmV0dXJucyBmYWxzZVxuICAgICAqL1xuICAgIHByaXZhdGUgc3RhdGljIGhhc1N1YnNjcmlwdGlvbkxpbmsoZWxlbWVudDogSFRNTEFuY2hvckVsZW1lbnQpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgaG9zdCxcbiAgICAgICAgICAgIHByb3RvY29sLFxuICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICBocmVmLFxuICAgICAgICB9ID0gZWxlbWVudDtcblxuICAgICAgICBpZiAocHJvdG9jb2wgPT09ICdodHRwOicgfHwgcHJvdG9jb2wgPT09ICdodHRwczonKSB7XG4gICAgICAgICAgICByZXR1cm4gaG9zdCA9PT0gJ3N1YnNjcmliZS5hZGJsb2NrcGx1cy5vcmcnICYmIHBhdGhuYW1lID09PSAnLyc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gL15hYnA6XFwvKnN1YnNjcmliZVxcLypcXD8vaS50ZXN0KGhyZWYpIHx8IC9eYWRndWFyZDpcXC8qc3Vic2NyaWJlXFwvKlxcPy9pLnRlc3QoaHJlZik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFyc2VzIHBheWxvYWQgZnJvbSBxdWVyeSBzdHJpbmcgb2YgYW5jaG9yIGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxlbWVudCAtIGFuY2hvciBlbGVtZW50XG4gICAgICogQHBhcmFtIGVsZW1lbnQuc2VhcmNoIC0gbGluayB1cmwgcXVlcnkgc3RyaW5nXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBzdWJzY3JpcHRpb24gZGF0YSBwYXlsb2FkXG4gICAgICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0U3Vic2NyaXB0aW9uRGF0YSh7IHNlYXJjaCB9OiBIVE1MQW5jaG9yRWxlbWVudCk6IFN1YnNjcmlwdGlvbkRhdGEgfCBudWxsIHtcbiAgICAgICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhzZWFyY2gpO1xuXG4gICAgICAgIGNvbnN0IHVybCA9IHBhcmFtcy5nZXQoJ2xvY2F0aW9uJyk7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gcGFyYW1zLmdldCgndGl0bGUnKTtcblxuICAgICAgICBpZiAoIXVybCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdXJsOiB1cmwudHJpbSgpLFxuICAgICAgICAgICAgdGl0bGU6ICh0aXRsZSB8fCB1cmwpLnRyaW0oKSxcbiAgICAgICAgfTtcbiAgICB9XG59XG4iLCIvKiB3ZWJleHRlbnNpb24tcG9seWZpbGwgLSB2MC4xMi4wIC0gVHVlIE1heSAxNCAyMDI0IDE4OjAxOjI5ICovXG4vKiAtKi0gTW9kZTogaW5kZW50LXRhYnMtbW9kZTogbmlsOyBqcy1pbmRlbnQtbGV2ZWw6IDIgLSotICovXG4vKiB2aW06IHNldCBzdHM9MiBzdz0yIGV0IHR3PTgwOiAqL1xuLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cblwidXNlIHN0cmljdFwiO1xuXG5pZiAoIShnbG9iYWxUaGlzLmNocm9tZSAmJiBnbG9iYWxUaGlzLmNocm9tZS5ydW50aW1lICYmIGdsb2JhbFRoaXMuY2hyb21lLnJ1bnRpbWUuaWQpKSB7XG4gIHRocm93IG5ldyBFcnJvcihcIlRoaXMgc2NyaXB0IHNob3VsZCBvbmx5IGJlIGxvYWRlZCBpbiBhIGJyb3dzZXIgZXh0ZW5zaW9uLlwiKTtcbn1cblxuaWYgKCEoZ2xvYmFsVGhpcy5icm93c2VyICYmIGdsb2JhbFRoaXMuYnJvd3Nlci5ydW50aW1lICYmIGdsb2JhbFRoaXMuYnJvd3Nlci5ydW50aW1lLmlkKSkge1xuICBjb25zdCBDSFJPTUVfU0VORF9NRVNTQUdFX0NBTExCQUNLX05PX1JFU1BPTlNFX01FU1NBR0UgPSBcIlRoZSBtZXNzYWdlIHBvcnQgY2xvc2VkIGJlZm9yZSBhIHJlc3BvbnNlIHdhcyByZWNlaXZlZC5cIjtcblxuICAvLyBXcmFwcGluZyB0aGUgYnVsayBvZiB0aGlzIHBvbHlmaWxsIGluIGEgb25lLXRpbWUtdXNlIGZ1bmN0aW9uIGlzIGEgbWlub3JcbiAgLy8gb3B0aW1pemF0aW9uIGZvciBGaXJlZm94LiBTaW5jZSBTcGlkZXJtb25rZXkgZG9lcyBub3QgZnVsbHkgcGFyc2UgdGhlXG4gIC8vIGNvbnRlbnRzIG9mIGEgZnVuY3Rpb24gdW50aWwgdGhlIGZpcnN0IHRpbWUgaXQncyBjYWxsZWQsIGFuZCBzaW5jZSBpdCB3aWxsXG4gIC8vIG5ldmVyIGFjdHVhbGx5IG5lZWQgdG8gYmUgY2FsbGVkLCB0aGlzIGFsbG93cyB0aGUgcG9seWZpbGwgdG8gYmUgaW5jbHVkZWRcbiAgLy8gaW4gRmlyZWZveCBuZWFybHkgZm9yIGZyZWUuXG4gIGNvbnN0IHdyYXBBUElzID0gZXh0ZW5zaW9uQVBJcyA9PiB7XG4gICAgLy8gTk9URTogYXBpTWV0YWRhdGEgaXMgYXNzb2NpYXRlZCB0byB0aGUgY29udGVudCBvZiB0aGUgYXBpLW1ldGFkYXRhLmpzb24gZmlsZVxuICAgIC8vIGF0IGJ1aWxkIHRpbWUgYnkgcmVwbGFjaW5nIHRoZSBmb2xsb3dpbmcgXCJpbmNsdWRlXCIgd2l0aCB0aGUgY29udGVudCBvZiB0aGVcbiAgICAvLyBKU09OIGZpbGUuXG4gICAgY29uc3QgYXBpTWV0YWRhdGEgPSB7XG4gICAgICBcImFsYXJtc1wiOiB7XG4gICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiY2xlYXJBbGxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiYm9va21hcmtzXCI6IHtcbiAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldENoaWxkcmVuXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFJlY2VudFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRTdWJUcmVlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFRyZWVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwibW92ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlVHJlZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZWFyY2hcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJicm93c2VyQWN0aW9uXCI6IHtcbiAgICAgICAgXCJkaXNhYmxlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJlbmFibGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcImdldEJhZGdlQmFja2dyb3VuZENvbG9yXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEJhZGdlVGV4dFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRQb3B1cFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRUaXRsZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJvcGVuUG9wdXBcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0QmFkZ2VCYWNrZ3JvdW5kQ29sb3JcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcInNldEJhZGdlVGV4dFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0SWNvblwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRQb3B1cFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0VGl0bGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJicm93c2luZ0RhdGFcIjoge1xuICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVDYWNoZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVDb29raWVzXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZURvd25sb2Fkc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVGb3JtRGF0YVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVIaXN0b3J5XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUxvY2FsU3RvcmFnZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVQYXNzd29yZHNcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlUGx1Z2luRGF0YVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXR0aW5nc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiY29tbWFuZHNcIjoge1xuICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiY29udGV4dE1lbnVzXCI6IHtcbiAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlQWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiY29va2llc1wiOiB7XG4gICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRBbGxDb29raWVTdG9yZXNcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInNldFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiZGV2dG9vbHNcIjoge1xuICAgICAgICBcImluc3BlY3RlZFdpbmRvd1wiOiB7XG4gICAgICAgICAgXCJldmFsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDIsXG4gICAgICAgICAgICBcInNpbmdsZUNhbGxiYWNrQXJnXCI6IGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInBhbmVsc1wiOiB7XG4gICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDMsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMyxcbiAgICAgICAgICAgIFwic2luZ2xlQ2FsbGJhY2tBcmdcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJlbGVtZW50c1wiOiB7XG4gICAgICAgICAgICBcImNyZWF0ZVNpZGViYXJQYW5lXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJkb3dubG9hZHNcIjoge1xuICAgICAgICBcImNhbmNlbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJkb3dubG9hZFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJlcmFzZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRGaWxlSWNvblwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJvcGVuXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJwYXVzZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVGaWxlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlc3VtZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZWFyY2hcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwic2hvd1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImV4dGVuc2lvblwiOiB7XG4gICAgICAgIFwiaXNBbGxvd2VkRmlsZVNjaGVtZUFjY2Vzc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJpc0FsbG93ZWRJbmNvZ25pdG9BY2Nlc3NcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImhpc3RvcnlcIjoge1xuICAgICAgICBcImFkZFVybFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJkZWxldGVBbGxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVsZXRlUmFuZ2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGVsZXRlVXJsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFZpc2l0c1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZWFyY2hcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImkxOG5cIjoge1xuICAgICAgICBcImRldGVjdExhbmd1YWdlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEFjY2VwdExhbmd1YWdlc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpdHlcIjoge1xuICAgICAgICBcImxhdW5jaFdlYkF1dGhGbG93XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJpZGxlXCI6IHtcbiAgICAgICAgXCJxdWVyeVN0YXRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJtYW5hZ2VtZW50XCI6IHtcbiAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcImdldFNlbGZcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0RW5hYmxlZFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJ1bmluc3RhbGxTZWxmXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJub3RpZmljYXRpb25zXCI6IHtcbiAgICAgICAgXCJjbGVhclwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcImdldFBlcm1pc3Npb25MZXZlbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInBhZ2VBY3Rpb25cIjoge1xuICAgICAgICBcImdldFBvcHVwXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFRpdGxlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImhpZGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcInNldEljb25cIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0UG9wdXBcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcInNldFRpdGxlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJzaG93XCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicGVybWlzc2lvbnNcIjoge1xuICAgICAgICBcImNvbnRhaW5zXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVxdWVzdFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicnVudGltZVwiOiB7XG4gICAgICAgIFwiZ2V0QmFja2dyb3VuZFBhZ2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0UGxhdGZvcm1JbmZvXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICB9LFxuICAgICAgICBcIm9wZW5PcHRpb25zUGFnZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZXF1ZXN0VXBkYXRlQ2hlY2tcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH0sXG4gICAgICAgIFwic2VuZE1lc3NhZ2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAzXG4gICAgICAgIH0sXG4gICAgICAgIFwic2VuZE5hdGl2ZU1lc3NhZ2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwic2V0VW5pbnN0YWxsVVJMXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJzZXNzaW9uc1wiOiB7XG4gICAgICAgIFwiZ2V0RGV2aWNlc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRSZWNlbnRseUNsb3NlZFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZXN0b3JlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJzdG9yYWdlXCI6IHtcbiAgICAgICAgXCJsb2NhbFwiOiB7XG4gICAgICAgICAgXCJjbGVhclwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJtYW5hZ2VkXCI6IHtcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEJ5dGVzSW5Vc2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJzeW5jXCI6IHtcbiAgICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Qnl0ZXNJblVzZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJ0YWJzXCI6IHtcbiAgICAgICAgXCJjYXB0dXJlVmlzaWJsZVRhYlwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGV0ZWN0TGFuZ3VhZ2VcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGlzY2FyZFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJkdXBsaWNhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZXhlY3V0ZVNjcmlwdFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0Q3VycmVudFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRab29tXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFpvb21TZXR0aW5nc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnb0JhY2tcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ29Gb3J3YXJkXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImhpZ2hsaWdodFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJpbnNlcnRDU1NcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwibW92ZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJxdWVyeVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZWxvYWRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcInJlbW92ZUNTU1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZW5kTWVzc2FnZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDNcbiAgICAgICAgfSxcbiAgICAgICAgXCJzZXRab29tXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9LFxuICAgICAgICBcInNldFpvb21TZXR0aW5nc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJ1cGRhdGVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInRvcFNpdGVzXCI6IHtcbiAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcIndlYk5hdmlnYXRpb25cIjoge1xuICAgICAgICBcImdldEFsbEZyYW1lc1wiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRGcmFtZVwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwid2ViUmVxdWVzdFwiOiB7XG4gICAgICAgIFwiaGFuZGxlckJlaGF2aW9yQ2hhbmdlZFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwid2luZG93c1wiOiB7XG4gICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICB9LFxuICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwiZ2V0Q3VycmVudFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZXRMYXN0Rm9jdXNlZFwiOiB7XG4gICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChPYmplY3Qua2V5cyhhcGlNZXRhZGF0YSkubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJhcGktbWV0YWRhdGEuanNvbiBoYXMgbm90IGJlZW4gaW5jbHVkZWQgaW4gYnJvd3Nlci1wb2x5ZmlsbFwiKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBIFdlYWtNYXAgc3ViY2xhc3Mgd2hpY2ggY3JlYXRlcyBhbmQgc3RvcmVzIGEgdmFsdWUgZm9yIGFueSBrZXkgd2hpY2ggZG9lc1xuICAgICAqIG5vdCBleGlzdCB3aGVuIGFjY2Vzc2VkLCBidXQgYmVoYXZlcyBleGFjdGx5IGFzIGFuIG9yZGluYXJ5IFdlYWtNYXBcbiAgICAgKiBvdGhlcndpc2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjcmVhdGVJdGVtXG4gICAgICogICAgICAgIEEgZnVuY3Rpb24gd2hpY2ggd2lsbCBiZSBjYWxsZWQgaW4gb3JkZXIgdG8gY3JlYXRlIHRoZSB2YWx1ZSBmb3IgYW55XG4gICAgICogICAgICAgIGtleSB3aGljaCBkb2VzIG5vdCBleGlzdCwgdGhlIGZpcnN0IHRpbWUgaXQgaXMgYWNjZXNzZWQuIFRoZVxuICAgICAqICAgICAgICBmdW5jdGlvbiByZWNlaXZlcywgYXMgaXRzIG9ubHkgYXJndW1lbnQsIHRoZSBrZXkgYmVpbmcgY3JlYXRlZC5cbiAgICAgKi9cbiAgICBjbGFzcyBEZWZhdWx0V2Vha01hcCBleHRlbmRzIFdlYWtNYXAge1xuICAgICAgY29uc3RydWN0b3IoY3JlYXRlSXRlbSwgaXRlbXMgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgc3VwZXIoaXRlbXMpO1xuICAgICAgICB0aGlzLmNyZWF0ZUl0ZW0gPSBjcmVhdGVJdGVtO1xuICAgICAgfVxuXG4gICAgICBnZXQoa2V5KSB7XG4gICAgICAgIGlmICghdGhpcy5oYXMoa2V5KSkge1xuICAgICAgICAgIHRoaXMuc2V0KGtleSwgdGhpcy5jcmVhdGVJdGVtKGtleSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1cGVyLmdldChrZXkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gb2JqZWN0IGlzIGFuIG9iamVjdCB3aXRoIGEgYHRoZW5gIG1ldGhvZCwgYW5kIGNhblxuICAgICAqIHRoZXJlZm9yZSBiZSBhc3N1bWVkIHRvIGJlaGF2ZSBhcyBhIFByb21pc2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0LlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB0aGVuYWJsZS5cbiAgICAgKi9cbiAgICBjb25zdCBpc1RoZW5hYmxlID0gdmFsdWUgPT4ge1xuICAgICAgcmV0dXJuIHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgdmFsdWUudGhlbiA9PT0gXCJmdW5jdGlvblwiO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuZCByZXR1cm5zIGEgZnVuY3Rpb24gd2hpY2gsIHdoZW4gY2FsbGVkLCB3aWxsIHJlc29sdmUgb3IgcmVqZWN0XG4gICAgICogdGhlIGdpdmVuIHByb21pc2UgYmFzZWQgb24gaG93IGl0IGlzIGNhbGxlZDpcbiAgICAgKlxuICAgICAqIC0gSWYsIHdoZW4gY2FsbGVkLCBgY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yYCBjb250YWlucyBhIG5vbi1udWxsIG9iamVjdCxcbiAgICAgKiAgIHRoZSBwcm9taXNlIGlzIHJlamVjdGVkIHdpdGggdGhhdCB2YWx1ZS5cbiAgICAgKiAtIElmIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQgd2l0aCBleGFjdGx5IG9uZSBhcmd1bWVudCwgdGhlIHByb21pc2UgaXNcbiAgICAgKiAgIHJlc29sdmVkIHRvIHRoYXQgdmFsdWUuXG4gICAgICogLSBPdGhlcndpc2UsIHRoZSBwcm9taXNlIGlzIHJlc29sdmVkIHRvIGFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIG9mIHRoZVxuICAgICAqICAgZnVuY3Rpb24ncyBhcmd1bWVudHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcHJvbWlzZVxuICAgICAqICAgICAgICBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgcmVzb2x1dGlvbiBhbmQgcmVqZWN0aW9uIGZ1bmN0aW9ucyBvZiBhXG4gICAgICogICAgICAgIHByb21pc2UuXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gcHJvbWlzZS5yZXNvbHZlXG4gICAgICogICAgICAgIFRoZSBwcm9taXNlJ3MgcmVzb2x1dGlvbiBmdW5jdGlvbi5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBwcm9taXNlLnJlamVjdFxuICAgICAqICAgICAgICBUaGUgcHJvbWlzZSdzIHJlamVjdGlvbiBmdW5jdGlvbi5cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbWV0YWRhdGFcbiAgICAgKiAgICAgICAgTWV0YWRhdGEgYWJvdXQgdGhlIHdyYXBwZWQgbWV0aG9kIHdoaWNoIGhhcyBjcmVhdGVkIHRoZSBjYWxsYmFjay5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IG1ldGFkYXRhLnNpbmdsZUNhbGxiYWNrQXJnXG4gICAgICogICAgICAgIFdoZXRoZXIgb3Igbm90IHRoZSBwcm9taXNlIGlzIHJlc29sdmVkIHdpdGggb25seSB0aGUgZmlyc3RcbiAgICAgKiAgICAgICAgYXJndW1lbnQgb2YgdGhlIGNhbGxiYWNrLCBhbHRlcm5hdGl2ZWx5IGFuIGFycmF5IG9mIGFsbCB0aGVcbiAgICAgKiAgICAgICAgY2FsbGJhY2sgYXJndW1lbnRzIGlzIHJlc29sdmVkLiBCeSBkZWZhdWx0LCBpZiB0aGUgY2FsbGJhY2tcbiAgICAgKiAgICAgICAgZnVuY3Rpb24gaXMgaW52b2tlZCB3aXRoIG9ubHkgYSBzaW5nbGUgYXJndW1lbnQsIHRoYXQgd2lsbCBiZVxuICAgICAqICAgICAgICByZXNvbHZlZCB0byB0aGUgcHJvbWlzZSwgd2hpbGUgYWxsIGFyZ3VtZW50cyB3aWxsIGJlIHJlc29sdmVkIGFzXG4gICAgICogICAgICAgIGFuIGFycmF5IGlmIG11bHRpcGxlIGFyZSBnaXZlbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtmdW5jdGlvbn1cbiAgICAgKiAgICAgICAgVGhlIGdlbmVyYXRlZCBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICBjb25zdCBtYWtlQ2FsbGJhY2sgPSAocHJvbWlzZSwgbWV0YWRhdGEpID0+IHtcbiAgICAgIHJldHVybiAoLi4uY2FsbGJhY2tBcmdzKSA9PiB7XG4gICAgICAgIGlmIChleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yKSB7XG4gICAgICAgICAgcHJvbWlzZS5yZWplY3QobmV3IEVycm9yKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IubWVzc2FnZSkpO1xuICAgICAgICB9IGVsc2UgaWYgKG1ldGFkYXRhLnNpbmdsZUNhbGxiYWNrQXJnIHx8XG4gICAgICAgICAgICAgICAgICAgKGNhbGxiYWNrQXJncy5sZW5ndGggPD0gMSAmJiBtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZyAhPT0gZmFsc2UpKSB7XG4gICAgICAgICAgcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrQXJnc1swXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrQXJncyk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfTtcblxuICAgIGNvbnN0IHBsdXJhbGl6ZUFyZ3VtZW50cyA9IChudW1BcmdzKSA9PiBudW1BcmdzID09IDEgPyBcImFyZ3VtZW50XCIgOiBcImFyZ3VtZW50c1wiO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHdyYXBwZXIgZnVuY3Rpb24gZm9yIGEgbWV0aG9kIHdpdGggdGhlIGdpdmVuIG5hbWUgYW5kIG1ldGFkYXRhLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiAgICAgICAgVGhlIG5hbWUgb2YgdGhlIG1ldGhvZCB3aGljaCBpcyBiZWluZyB3cmFwcGVkLlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBtZXRhZGF0YVxuICAgICAqICAgICAgICBNZXRhZGF0YSBhYm91dCB0aGUgbWV0aG9kIGJlaW5nIHdyYXBwZWQuXG4gICAgICogQHBhcmFtIHtpbnRlZ2VyfSBtZXRhZGF0YS5taW5BcmdzXG4gICAgICogICAgICAgIFRoZSBtaW5pbXVtIG51bWJlciBvZiBhcmd1bWVudHMgd2hpY2ggbXVzdCBiZSBwYXNzZWQgdG8gdGhlXG4gICAgICogICAgICAgIGZ1bmN0aW9uLiBJZiBjYWxsZWQgd2l0aCBmZXdlciB0aGFuIHRoaXMgbnVtYmVyIG9mIGFyZ3VtZW50cywgdGhlXG4gICAgICogICAgICAgIHdyYXBwZXIgd2lsbCByYWlzZSBhbiBleGNlcHRpb24uXG4gICAgICogQHBhcmFtIHtpbnRlZ2VyfSBtZXRhZGF0YS5tYXhBcmdzXG4gICAgICogICAgICAgIFRoZSBtYXhpbXVtIG51bWJlciBvZiBhcmd1bWVudHMgd2hpY2ggbWF5IGJlIHBhc3NlZCB0byB0aGVcbiAgICAgKiAgICAgICAgZnVuY3Rpb24uIElmIGNhbGxlZCB3aXRoIG1vcmUgdGhhbiB0aGlzIG51bWJlciBvZiBhcmd1bWVudHMsIHRoZVxuICAgICAqICAgICAgICB3cmFwcGVyIHdpbGwgcmFpc2UgYW4gZXhjZXB0aW9uLlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmdcbiAgICAgKiAgICAgICAgV2hldGhlciBvciBub3QgdGhlIHByb21pc2UgaXMgcmVzb2x2ZWQgd2l0aCBvbmx5IHRoZSBmaXJzdFxuICAgICAqICAgICAgICBhcmd1bWVudCBvZiB0aGUgY2FsbGJhY2ssIGFsdGVybmF0aXZlbHkgYW4gYXJyYXkgb2YgYWxsIHRoZVxuICAgICAqICAgICAgICBjYWxsYmFjayBhcmd1bWVudHMgaXMgcmVzb2x2ZWQuIEJ5IGRlZmF1bHQsIGlmIHRoZSBjYWxsYmFja1xuICAgICAqICAgICAgICBmdW5jdGlvbiBpcyBpbnZva2VkIHdpdGggb25seSBhIHNpbmdsZSBhcmd1bWVudCwgdGhhdCB3aWxsIGJlXG4gICAgICogICAgICAgIHJlc29sdmVkIHRvIHRoZSBwcm9taXNlLCB3aGlsZSBhbGwgYXJndW1lbnRzIHdpbGwgYmUgcmVzb2x2ZWQgYXNcbiAgICAgKiAgICAgICAgYW4gYXJyYXkgaWYgbXVsdGlwbGUgYXJlIGdpdmVuLlxuICAgICAqXG4gICAgICogQHJldHVybnMge2Z1bmN0aW9uKG9iamVjdCwgLi4uKil9XG4gICAgICogICAgICAgVGhlIGdlbmVyYXRlZCB3cmFwcGVyIGZ1bmN0aW9uLlxuICAgICAqL1xuICAgIGNvbnN0IHdyYXBBc3luY0Z1bmN0aW9uID0gKG5hbWUsIG1ldGFkYXRhKSA9PiB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gYXN5bmNGdW5jdGlvbldyYXBwZXIodGFyZ2V0LCAuLi5hcmdzKSB7XG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA8IG1ldGFkYXRhLm1pbkFyZ3MpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IGxlYXN0ICR7bWV0YWRhdGEubWluQXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWluQXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gbWV0YWRhdGEubWF4QXJncykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYXQgbW9zdCAke21ldGFkYXRhLm1heEFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1heEFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgaWYgKG1ldGFkYXRhLmZhbGxiYWNrVG9Ob0NhbGxiYWNrKSB7XG4gICAgICAgICAgICAvLyBUaGlzIEFQSSBtZXRob2QgaGFzIGN1cnJlbnRseSBubyBjYWxsYmFjayBvbiBDaHJvbWUsIGJ1dCBpdCByZXR1cm4gYSBwcm9taXNlIG9uIEZpcmVmb3gsXG4gICAgICAgICAgICAvLyBhbmQgc28gdGhlIHBvbHlmaWxsIHdpbGwgdHJ5IHRvIGNhbGwgaXQgd2l0aCBhIGNhbGxiYWNrIGZpcnN0LCBhbmQgaXQgd2lsbCBmYWxsYmFja1xuICAgICAgICAgICAgLy8gdG8gbm90IHBhc3NpbmcgdGhlIGNhbGxiYWNrIGlmIHRoZSBmaXJzdCBjYWxsIGZhaWxzLlxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MsIG1ha2VDYWxsYmFjayh7cmVzb2x2ZSwgcmVqZWN0fSwgbWV0YWRhdGEpKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGNiRXJyb3IpIHtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKGAke25hbWV9IEFQSSBtZXRob2QgZG9lc24ndCBzZWVtIHRvIHN1cHBvcnQgdGhlIGNhbGxiYWNrIHBhcmFtZXRlciwgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcImZhbGxpbmcgYmFjayB0byBjYWxsIGl0IHdpdGhvdXQgYSBjYWxsYmFjazogXCIsIGNiRXJyb3IpO1xuXG4gICAgICAgICAgICAgIHRhcmdldFtuYW1lXSguLi5hcmdzKTtcblxuICAgICAgICAgICAgICAvLyBVcGRhdGUgdGhlIEFQSSBtZXRob2QgbWV0YWRhdGEsIHNvIHRoYXQgdGhlIG5leHQgQVBJIGNhbGxzIHdpbGwgbm90IHRyeSB0b1xuICAgICAgICAgICAgICAvLyB1c2UgdGhlIHVuc3VwcG9ydGVkIGNhbGxiYWNrIGFueW1vcmUuXG4gICAgICAgICAgICAgIG1ldGFkYXRhLmZhbGxiYWNrVG9Ob0NhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgICAgICAgIG1ldGFkYXRhLm5vQ2FsbGJhY2sgPSB0cnVlO1xuXG4gICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKG1ldGFkYXRhLm5vQ2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRhcmdldFtuYW1lXSguLi5hcmdzKTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MsIG1ha2VDYWxsYmFjayh7cmVzb2x2ZSwgcmVqZWN0fSwgbWV0YWRhdGEpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogV3JhcHMgYW4gZXhpc3RpbmcgbWV0aG9kIG9mIHRoZSB0YXJnZXQgb2JqZWN0LCBzbyB0aGF0IGNhbGxzIHRvIGl0IGFyZVxuICAgICAqIGludGVyY2VwdGVkIGJ5IHRoZSBnaXZlbiB3cmFwcGVyIGZ1bmN0aW9uLiBUaGUgd3JhcHBlciBmdW5jdGlvbiByZWNlaXZlcyxcbiAgICAgKiBhcyBpdHMgZmlyc3QgYXJndW1lbnQsIHRoZSBvcmlnaW5hbCBgdGFyZ2V0YCBvYmplY3QsIGZvbGxvd2VkIGJ5IGVhY2ggb2ZcbiAgICAgKiB0aGUgYXJndW1lbnRzIHBhc3NlZCB0byB0aGUgb3JpZ2luYWwgbWV0aG9kLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICAgICAqICAgICAgICBUaGUgb3JpZ2luYWwgdGFyZ2V0IG9iamVjdCB0aGF0IHRoZSB3cmFwcGVkIG1ldGhvZCBiZWxvbmdzIHRvLlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IG1ldGhvZFxuICAgICAqICAgICAgICBUaGUgbWV0aG9kIGJlaW5nIHdyYXBwZWQuIFRoaXMgaXMgdXNlZCBhcyB0aGUgdGFyZ2V0IG9mIHRoZSBQcm94eVxuICAgICAqICAgICAgICBvYmplY3Qgd2hpY2ggaXMgY3JlYXRlZCB0byB3cmFwIHRoZSBtZXRob2QuXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gd3JhcHBlclxuICAgICAqICAgICAgICBUaGUgd3JhcHBlciBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgaW4gcGxhY2Ugb2YgYSBkaXJlY3QgaW52b2NhdGlvblxuICAgICAqICAgICAgICBvZiB0aGUgd3JhcHBlZCBtZXRob2QuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7UHJveHk8ZnVuY3Rpb24+fVxuICAgICAqICAgICAgICBBIFByb3h5IG9iamVjdCBmb3IgdGhlIGdpdmVuIG1ldGhvZCwgd2hpY2ggaW52b2tlcyB0aGUgZ2l2ZW4gd3JhcHBlclxuICAgICAqICAgICAgICBtZXRob2QgaW4gaXRzIHBsYWNlLlxuICAgICAqL1xuICAgIGNvbnN0IHdyYXBNZXRob2QgPSAodGFyZ2V0LCBtZXRob2QsIHdyYXBwZXIpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJveHkobWV0aG9kLCB7XG4gICAgICAgIGFwcGx5KHRhcmdldE1ldGhvZCwgdGhpc09iaiwgYXJncykge1xuICAgICAgICAgIHJldHVybiB3cmFwcGVyLmNhbGwodGhpc09iaiwgdGFyZ2V0LCAuLi5hcmdzKTtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBsZXQgaGFzT3duUHJvcGVydHkgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cbiAgICAvKipcbiAgICAgKiBXcmFwcyBhbiBvYmplY3QgaW4gYSBQcm94eSB3aGljaCBpbnRlcmNlcHRzIGFuZCB3cmFwcyBjZXJ0YWluIG1ldGhvZHNcbiAgICAgKiBiYXNlZCBvbiB0aGUgZ2l2ZW4gYHdyYXBwZXJzYCBhbmQgYG1ldGFkYXRhYCBvYmplY3RzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICAgICAqICAgICAgICBUaGUgdGFyZ2V0IG9iamVjdCB0byB3cmFwLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IFt3cmFwcGVycyA9IHt9XVxuICAgICAqICAgICAgICBBbiBvYmplY3QgdHJlZSBjb250YWluaW5nIHdyYXBwZXIgZnVuY3Rpb25zIGZvciBzcGVjaWFsIGNhc2VzLiBBbnlcbiAgICAgKiAgICAgICAgZnVuY3Rpb24gcHJlc2VudCBpbiB0aGlzIG9iamVjdCB0cmVlIGlzIGNhbGxlZCBpbiBwbGFjZSBvZiB0aGVcbiAgICAgKiAgICAgICAgbWV0aG9kIGluIHRoZSBzYW1lIGxvY2F0aW9uIGluIHRoZSBgdGFyZ2V0YCBvYmplY3QgdHJlZS4gVGhlc2VcbiAgICAgKiAgICAgICAgd3JhcHBlciBtZXRob2RzIGFyZSBpbnZva2VkIGFzIGRlc2NyaWJlZCBpbiB7QHNlZSB3cmFwTWV0aG9kfS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbbWV0YWRhdGEgPSB7fV1cbiAgICAgKiAgICAgICAgQW4gb2JqZWN0IHRyZWUgY29udGFpbmluZyBtZXRhZGF0YSB1c2VkIHRvIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVcbiAgICAgKiAgICAgICAgUHJvbWlzZS1iYXNlZCB3cmFwcGVyIGZ1bmN0aW9ucyBmb3IgYXN5bmNocm9ub3VzLiBBbnkgZnVuY3Rpb24gaW5cbiAgICAgKiAgICAgICAgdGhlIGB0YXJnZXRgIG9iamVjdCB0cmVlIHdoaWNoIGhhcyBhIGNvcnJlc3BvbmRpbmcgbWV0YWRhdGEgb2JqZWN0XG4gICAgICogICAgICAgIGluIHRoZSBzYW1lIGxvY2F0aW9uIGluIHRoZSBgbWV0YWRhdGFgIHRyZWUgaXMgcmVwbGFjZWQgd2l0aCBhblxuICAgICAqICAgICAgICBhdXRvbWF0aWNhbGx5LWdlbmVyYXRlZCB3cmFwcGVyIGZ1bmN0aW9uLCBhcyBkZXNjcmliZWQgaW5cbiAgICAgKiAgICAgICAge0BzZWUgd3JhcEFzeW5jRnVuY3Rpb259XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7UHJveHk8b2JqZWN0Pn1cbiAgICAgKi9cbiAgICBjb25zdCB3cmFwT2JqZWN0ID0gKHRhcmdldCwgd3JhcHBlcnMgPSB7fSwgbWV0YWRhdGEgPSB7fSkgPT4ge1xuICAgICAgbGV0IGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgIGxldCBoYW5kbGVycyA9IHtcbiAgICAgICAgaGFzKHByb3h5VGFyZ2V0LCBwcm9wKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3AgaW4gdGFyZ2V0IHx8IHByb3AgaW4gY2FjaGU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0KHByb3h5VGFyZ2V0LCBwcm9wLCByZWNlaXZlcikge1xuICAgICAgICAgIGlmIChwcm9wIGluIGNhY2hlKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVbcHJvcF07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCEocHJvcCBpbiB0YXJnZXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxldCB2YWx1ZSA9IHRhcmdldFtwcm9wXTtcblxuICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgLy8gVGhpcyBpcyBhIG1ldGhvZCBvbiB0aGUgdW5kZXJseWluZyBvYmplY3QuIENoZWNrIGlmIHdlIG5lZWQgdG8gZG9cbiAgICAgICAgICAgIC8vIGFueSB3cmFwcGluZy5cblxuICAgICAgICAgICAgaWYgKHR5cGVvZiB3cmFwcGVyc1twcm9wXSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgIC8vIFdlIGhhdmUgYSBzcGVjaWFsLWNhc2Ugd3JhcHBlciBmb3IgdGhpcyBtZXRob2QuXG4gICAgICAgICAgICAgIHZhbHVlID0gd3JhcE1ldGhvZCh0YXJnZXQsIHRhcmdldFtwcm9wXSwgd3JhcHBlcnNbcHJvcF0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChoYXNPd25Qcm9wZXJ0eShtZXRhZGF0YSwgcHJvcCkpIHtcbiAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhbiBhc3luYyBtZXRob2QgdGhhdCB3ZSBoYXZlIG1ldGFkYXRhIGZvci4gQ3JlYXRlIGFcbiAgICAgICAgICAgICAgLy8gUHJvbWlzZSB3cmFwcGVyIGZvciBpdC5cbiAgICAgICAgICAgICAgbGV0IHdyYXBwZXIgPSB3cmFwQXN5bmNGdW5jdGlvbihwcm9wLCBtZXRhZGF0YVtwcm9wXSk7XG4gICAgICAgICAgICAgIHZhbHVlID0gd3JhcE1ldGhvZCh0YXJnZXQsIHRhcmdldFtwcm9wXSwgd3JhcHBlcik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBUaGlzIGlzIGEgbWV0aG9kIHRoYXQgd2UgZG9uJ3Qga25vdyBvciBjYXJlIGFib3V0LiBSZXR1cm4gdGhlXG4gICAgICAgICAgICAgIC8vIG9yaWdpbmFsIG1ldGhvZCwgYm91bmQgdG8gdGhlIHVuZGVybHlpbmcgb2JqZWN0LlxuICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLmJpbmQodGFyZ2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSAhPT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgICAgICAgKGhhc093blByb3BlcnR5KHdyYXBwZXJzLCBwcm9wKSB8fFxuICAgICAgICAgICAgICAgICAgICAgIGhhc093blByb3BlcnR5KG1ldGFkYXRhLCBwcm9wKSkpIHtcbiAgICAgICAgICAgIC8vIFRoaXMgaXMgYW4gb2JqZWN0IHRoYXQgd2UgbmVlZCB0byBkbyBzb21lIHdyYXBwaW5nIGZvciB0aGUgY2hpbGRyZW5cbiAgICAgICAgICAgIC8vIG9mLiBDcmVhdGUgYSBzdWItb2JqZWN0IHdyYXBwZXIgZm9yIGl0IHdpdGggdGhlIGFwcHJvcHJpYXRlIGNoaWxkXG4gICAgICAgICAgICAvLyBtZXRhZGF0YS5cbiAgICAgICAgICAgIHZhbHVlID0gd3JhcE9iamVjdCh2YWx1ZSwgd3JhcHBlcnNbcHJvcF0sIG1ldGFkYXRhW3Byb3BdKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc093blByb3BlcnR5KG1ldGFkYXRhLCBcIipcIikpIHtcbiAgICAgICAgICAgIC8vIFdyYXAgYWxsIHByb3BlcnRpZXMgaW4gKiBuYW1lc3BhY2UuXG4gICAgICAgICAgICB2YWx1ZSA9IHdyYXBPYmplY3QodmFsdWUsIHdyYXBwZXJzW3Byb3BdLCBtZXRhZGF0YVtcIipcIl0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBXZSBkb24ndCBuZWVkIHRvIGRvIGFueSB3cmFwcGluZyBmb3IgdGhpcyBwcm9wZXJ0eSxcbiAgICAgICAgICAgIC8vIHNvIGp1c3QgZm9yd2FyZCBhbGwgYWNjZXNzIHRvIHRoZSB1bmRlcmx5aW5nIG9iamVjdC5cbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjYWNoZSwgcHJvcCwge1xuICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0W3Byb3BdO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2FjaGVbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0KHByb3h5VGFyZ2V0LCBwcm9wLCB2YWx1ZSwgcmVjZWl2ZXIpIHtcbiAgICAgICAgICBpZiAocHJvcCBpbiBjYWNoZSkge1xuICAgICAgICAgICAgY2FjaGVbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9LFxuXG4gICAgICAgIGRlZmluZVByb3BlcnR5KHByb3h5VGFyZ2V0LCBwcm9wLCBkZXNjKSB7XG4gICAgICAgICAgcmV0dXJuIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkoY2FjaGUsIHByb3AsIGRlc2MpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGRlbGV0ZVByb3BlcnR5KHByb3h5VGFyZ2V0LCBwcm9wKSB7XG4gICAgICAgICAgcmV0dXJuIFJlZmxlY3QuZGVsZXRlUHJvcGVydHkoY2FjaGUsIHByb3ApO1xuICAgICAgICB9LFxuICAgICAgfTtcblxuICAgICAgLy8gUGVyIGNvbnRyYWN0IG9mIHRoZSBQcm94eSBBUEksIHRoZSBcImdldFwiIHByb3h5IGhhbmRsZXIgbXVzdCByZXR1cm4gdGhlXG4gICAgICAvLyBvcmlnaW5hbCB2YWx1ZSBvZiB0aGUgdGFyZ2V0IGlmIHRoYXQgdmFsdWUgaXMgZGVjbGFyZWQgcmVhZC1vbmx5IGFuZFxuICAgICAgLy8gbm9uLWNvbmZpZ3VyYWJsZS4gRm9yIHRoaXMgcmVhc29uLCB3ZSBjcmVhdGUgYW4gb2JqZWN0IHdpdGggdGhlXG4gICAgICAvLyBwcm90b3R5cGUgc2V0IHRvIGB0YXJnZXRgIGluc3RlYWQgb2YgdXNpbmcgYHRhcmdldGAgZGlyZWN0bHkuXG4gICAgICAvLyBPdGhlcndpc2Ugd2UgY2Fubm90IHJldHVybiBhIGN1c3RvbSBvYmplY3QgZm9yIEFQSXMgdGhhdFxuICAgICAgLy8gYXJlIGRlY2xhcmVkIHJlYWQtb25seSBhbmQgbm9uLWNvbmZpZ3VyYWJsZSwgc3VjaCBhcyBgY2hyb21lLmRldnRvb2xzYC5cbiAgICAgIC8vXG4gICAgICAvLyBUaGUgcHJveHkgaGFuZGxlcnMgdGhlbXNlbHZlcyB3aWxsIHN0aWxsIHVzZSB0aGUgb3JpZ2luYWwgYHRhcmdldGBcbiAgICAgIC8vIGluc3RlYWQgb2YgdGhlIGBwcm94eVRhcmdldGAsIHNvIHRoYXQgdGhlIG1ldGhvZHMgYW5kIHByb3BlcnRpZXMgYXJlXG4gICAgICAvLyBkZXJlZmVyZW5jZWQgdmlhIHRoZSBvcmlnaW5hbCB0YXJnZXRzLlxuICAgICAgbGV0IHByb3h5VGFyZ2V0ID0gT2JqZWN0LmNyZWF0ZSh0YXJnZXQpO1xuICAgICAgcmV0dXJuIG5ldyBQcm94eShwcm94eVRhcmdldCwgaGFuZGxlcnMpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgc2V0IG9mIHdyYXBwZXIgZnVuY3Rpb25zIGZvciBhbiBldmVudCBvYmplY3QsIHdoaWNoIGhhbmRsZXNcbiAgICAgKiB3cmFwcGluZyBvZiBsaXN0ZW5lciBmdW5jdGlvbnMgdGhhdCB0aG9zZSBtZXNzYWdlcyBhcmUgcGFzc2VkLlxuICAgICAqXG4gICAgICogQSBzaW5nbGUgd3JhcHBlciBpcyBjcmVhdGVkIGZvciBlYWNoIGxpc3RlbmVyIGZ1bmN0aW9uLCBhbmQgc3RvcmVkIGluIGFcbiAgICAgKiBtYXAuIFN1YnNlcXVlbnQgY2FsbHMgdG8gYGFkZExpc3RlbmVyYCwgYGhhc0xpc3RlbmVyYCwgb3IgYHJlbW92ZUxpc3RlbmVyYFxuICAgICAqIHJldHJpZXZlIHRoZSBvcmlnaW5hbCB3cmFwcGVyLCBzbyB0aGF0ICBhdHRlbXB0cyB0byByZW1vdmUgYVxuICAgICAqIHByZXZpb3VzbHktYWRkZWQgbGlzdGVuZXIgd29yayBhcyBleHBlY3RlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RGVmYXVsdFdlYWtNYXA8ZnVuY3Rpb24sIGZ1bmN0aW9uPn0gd3JhcHBlck1hcFxuICAgICAqICAgICAgICBBIERlZmF1bHRXZWFrTWFwIG9iamVjdCB3aGljaCB3aWxsIGNyZWF0ZSB0aGUgYXBwcm9wcmlhdGUgd3JhcHBlclxuICAgICAqICAgICAgICBmb3IgYSBnaXZlbiBsaXN0ZW5lciBmdW5jdGlvbiB3aGVuIG9uZSBkb2VzIG5vdCBleGlzdCwgYW5kIHJldHJpZXZlXG4gICAgICogICAgICAgIGFuIGV4aXN0aW5nIG9uZSB3aGVuIGl0IGRvZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgICAqL1xuICAgIGNvbnN0IHdyYXBFdmVudCA9IHdyYXBwZXJNYXAgPT4gKHtcbiAgICAgIGFkZExpc3RlbmVyKHRhcmdldCwgbGlzdGVuZXIsIC4uLmFyZ3MpIHtcbiAgICAgICAgdGFyZ2V0LmFkZExpc3RlbmVyKHdyYXBwZXJNYXAuZ2V0KGxpc3RlbmVyKSwgLi4uYXJncyk7XG4gICAgICB9LFxuXG4gICAgICBoYXNMaXN0ZW5lcih0YXJnZXQsIGxpc3RlbmVyKSB7XG4gICAgICAgIHJldHVybiB0YXJnZXQuaGFzTGlzdGVuZXIod3JhcHBlck1hcC5nZXQobGlzdGVuZXIpKTtcbiAgICAgIH0sXG5cbiAgICAgIHJlbW92ZUxpc3RlbmVyKHRhcmdldCwgbGlzdGVuZXIpIHtcbiAgICAgICAgdGFyZ2V0LnJlbW92ZUxpc3RlbmVyKHdyYXBwZXJNYXAuZ2V0KGxpc3RlbmVyKSk7XG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgY29uc3Qgb25SZXF1ZXN0RmluaXNoZWRXcmFwcGVycyA9IG5ldyBEZWZhdWx0V2Vha01hcChsaXN0ZW5lciA9PiB7XG4gICAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFdyYXBzIGFuIG9uUmVxdWVzdEZpbmlzaGVkIGxpc3RlbmVyIGZ1bmN0aW9uIHNvIHRoYXQgaXQgd2lsbCByZXR1cm4gYVxuICAgICAgICogYGdldENvbnRlbnQoKWAgcHJvcGVydHkgd2hpY2ggcmV0dXJucyBhIGBQcm9taXNlYCByYXRoZXIgdGhhbiB1c2luZyBhXG4gICAgICAgKiBjYWxsYmFjayBBUEkuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IHJlcVxuICAgICAgICogICAgICAgIFRoZSBIQVIgZW50cnkgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgbmV0d29yayByZXF1ZXN0LlxuICAgICAgICovXG4gICAgICByZXR1cm4gZnVuY3Rpb24gb25SZXF1ZXN0RmluaXNoZWQocmVxKSB7XG4gICAgICAgIGNvbnN0IHdyYXBwZWRSZXEgPSB3cmFwT2JqZWN0KHJlcSwge30gLyogd3JhcHBlcnMgKi8sIHtcbiAgICAgICAgICBnZXRDb250ZW50OiB7XG4gICAgICAgICAgICBtaW5BcmdzOiAwLFxuICAgICAgICAgICAgbWF4QXJnczogMCxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgbGlzdGVuZXIod3JhcHBlZFJlcSk7XG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgY29uc3Qgb25NZXNzYWdlV3JhcHBlcnMgPSBuZXcgRGVmYXVsdFdlYWtNYXAobGlzdGVuZXIgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBXcmFwcyBhIG1lc3NhZ2UgbGlzdGVuZXIgZnVuY3Rpb24gc28gdGhhdCBpdCBtYXkgc2VuZCByZXNwb25zZXMgYmFzZWQgb25cbiAgICAgICAqIGl0cyByZXR1cm4gdmFsdWUsIHJhdGhlciB0aGFuIGJ5IHJldHVybmluZyBhIHNlbnRpbmVsIHZhbHVlIGFuZCBjYWxsaW5nIGFcbiAgICAgICAqIGNhbGxiYWNrLiBJZiB0aGUgbGlzdGVuZXIgZnVuY3Rpb24gcmV0dXJucyBhIFByb21pc2UsIHRoZSByZXNwb25zZSBpc1xuICAgICAgICogc2VudCB3aGVuIHRoZSBwcm9taXNlIGVpdGhlciByZXNvbHZlcyBvciByZWplY3RzLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7Kn0gbWVzc2FnZVxuICAgICAgICogICAgICAgIFRoZSBtZXNzYWdlIHNlbnQgYnkgdGhlIG90aGVyIGVuZCBvZiB0aGUgY2hhbm5lbC5cbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBzZW5kZXJcbiAgICAgICAqICAgICAgICBEZXRhaWxzIGFib3V0IHRoZSBzZW5kZXIgb2YgdGhlIG1lc3NhZ2UuXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCopfSBzZW5kUmVzcG9uc2VcbiAgICAgICAqICAgICAgICBBIGNhbGxiYWNrIHdoaWNoLCB3aGVuIGNhbGxlZCB3aXRoIGFuIGFyYml0cmFyeSBhcmd1bWVudCwgc2VuZHNcbiAgICAgICAqICAgICAgICB0aGF0IHZhbHVlIGFzIGEgcmVzcG9uc2UuXG4gICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgICAqICAgICAgICBUcnVlIGlmIHRoZSB3cmFwcGVkIGxpc3RlbmVyIHJldHVybmVkIGEgUHJvbWlzZSwgd2hpY2ggd2lsbCBsYXRlclxuICAgICAgICogICAgICAgIHlpZWxkIGEgcmVzcG9uc2UuIEZhbHNlIG90aGVyd2lzZS5cbiAgICAgICAqL1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIG9uTWVzc2FnZShtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xuICAgICAgICBsZXQgZGlkQ2FsbFNlbmRSZXNwb25zZSA9IGZhbHNlO1xuXG4gICAgICAgIGxldCB3cmFwcGVkU2VuZFJlc3BvbnNlO1xuICAgICAgICBsZXQgc2VuZFJlc3BvbnNlUHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgIHdyYXBwZWRTZW5kUmVzcG9uc2UgPSBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgZGlkQ2FsbFNlbmRSZXNwb25zZSA9IHRydWU7XG4gICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJlc3VsdCA9IGxpc3RlbmVyKG1lc3NhZ2UsIHNlbmRlciwgd3JhcHBlZFNlbmRSZXNwb25zZSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIHJlc3VsdCA9IFByb21pc2UucmVqZWN0KGVycik7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpc1Jlc3VsdFRoZW5hYmxlID0gcmVzdWx0ICE9PSB0cnVlICYmIGlzVGhlbmFibGUocmVzdWx0KTtcblxuICAgICAgICAvLyBJZiB0aGUgbGlzdGVuZXIgZGlkbid0IHJldHVybmVkIHRydWUgb3IgYSBQcm9taXNlLCBvciBjYWxsZWRcbiAgICAgICAgLy8gd3JhcHBlZFNlbmRSZXNwb25zZSBzeW5jaHJvbm91c2x5LCB3ZSBjYW4gZXhpdCBlYXJsaWVyXG4gICAgICAgIC8vIGJlY2F1c2UgdGhlcmUgd2lsbCBiZSBubyByZXNwb25zZSBzZW50IGZyb20gdGhpcyBsaXN0ZW5lci5cbiAgICAgICAgaWYgKHJlc3VsdCAhPT0gdHJ1ZSAmJiAhaXNSZXN1bHRUaGVuYWJsZSAmJiAhZGlkQ2FsbFNlbmRSZXNwb25zZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEEgc21hbGwgaGVscGVyIHRvIHNlbmQgdGhlIG1lc3NhZ2UgaWYgdGhlIHByb21pc2UgcmVzb2x2ZXNcbiAgICAgICAgLy8gYW5kIGFuIGVycm9yIGlmIHRoZSBwcm9taXNlIHJlamVjdHMgKGEgd3JhcHBlZCBzZW5kTWVzc2FnZSBoYXNcbiAgICAgICAgLy8gdG8gdHJhbnNsYXRlIHRoZSBtZXNzYWdlIGludG8gYSByZXNvbHZlZCBwcm9taXNlIG9yIGEgcmVqZWN0ZWRcbiAgICAgICAgLy8gcHJvbWlzZSkuXG4gICAgICAgIGNvbnN0IHNlbmRQcm9taXNlZFJlc3VsdCA9IChwcm9taXNlKSA9PiB7XG4gICAgICAgICAgcHJvbWlzZS50aGVuKG1zZyA9PiB7XG4gICAgICAgICAgICAvLyBzZW5kIHRoZSBtZXNzYWdlIHZhbHVlLlxuICAgICAgICAgICAgc2VuZFJlc3BvbnNlKG1zZyk7XG4gICAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgLy8gU2VuZCBhIEpTT04gcmVwcmVzZW50YXRpb24gb2YgdGhlIGVycm9yIGlmIHRoZSByZWplY3RlZCB2YWx1ZVxuICAgICAgICAgICAgLy8gaXMgYW4gaW5zdGFuY2Ugb2YgZXJyb3IsIG9yIHRoZSBvYmplY3QgaXRzZWxmIG90aGVyd2lzZS5cbiAgICAgICAgICAgIGxldCBtZXNzYWdlO1xuICAgICAgICAgICAgaWYgKGVycm9yICYmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yIHx8XG4gICAgICAgICAgICAgICAgdHlwZW9mIGVycm9yLm1lc3NhZ2UgPT09IFwic3RyaW5nXCIpKSB7XG4gICAgICAgICAgICAgIG1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZFwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZW5kUmVzcG9uc2Uoe1xuICAgICAgICAgICAgICBfX21veldlYkV4dGVuc2lvblBvbHlmaWxsUmVqZWN0X186IHRydWUsXG4gICAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgLy8gUHJpbnQgYW4gZXJyb3Igb24gdGhlIGNvbnNvbGUgaWYgdW5hYmxlIHRvIHNlbmQgdGhlIHJlc3BvbnNlLlxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBzZW5kIG9uTWVzc2FnZSByZWplY3RlZCByZXBseVwiLCBlcnIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIElmIHRoZSBsaXN0ZW5lciByZXR1cm5lZCBhIFByb21pc2UsIHNlbmQgdGhlIHJlc29sdmVkIHZhbHVlIGFzIGFcbiAgICAgICAgLy8gcmVzdWx0LCBvdGhlcndpc2Ugd2FpdCB0aGUgcHJvbWlzZSByZWxhdGVkIHRvIHRoZSB3cmFwcGVkU2VuZFJlc3BvbnNlXG4gICAgICAgIC8vIGNhbGxiYWNrIHRvIHJlc29sdmUgYW5kIHNlbmQgaXQgYXMgYSByZXNwb25zZS5cbiAgICAgICAgaWYgKGlzUmVzdWx0VGhlbmFibGUpIHtcbiAgICAgICAgICBzZW5kUHJvbWlzZWRSZXN1bHQocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZW5kUHJvbWlzZWRSZXN1bHQoc2VuZFJlc3BvbnNlUHJvbWlzZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBMZXQgQ2hyb21lIGtub3cgdGhhdCB0aGUgbGlzdGVuZXIgaXMgcmVwbHlpbmcuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHdyYXBwZWRTZW5kTWVzc2FnZUNhbGxiYWNrID0gKHtyZWplY3QsIHJlc29sdmV9LCByZXBseSkgPT4ge1xuICAgICAgaWYgKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IpIHtcbiAgICAgICAgLy8gRGV0ZWN0IHdoZW4gbm9uZSBvZiB0aGUgbGlzdGVuZXJzIHJlcGxpZWQgdG8gdGhlIHNlbmRNZXNzYWdlIGNhbGwgYW5kIHJlc29sdmVcbiAgICAgICAgLy8gdGhlIHByb21pc2UgdG8gdW5kZWZpbmVkIGFzIGluIEZpcmVmb3guXG4gICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS93ZWJleHRlbnNpb24tcG9seWZpbGwvaXNzdWVzLzEzMFxuICAgICAgICBpZiAoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvci5tZXNzYWdlID09PSBDSFJPTUVfU0VORF9NRVNTQUdFX0NBTExCQUNLX05PX1JFU1BPTlNFX01FU1NBR0UpIHtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yLm1lc3NhZ2UpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChyZXBseSAmJiByZXBseS5fX21veldlYkV4dGVuc2lvblBvbHlmaWxsUmVqZWN0X18pIHtcbiAgICAgICAgLy8gQ29udmVydCBiYWNrIHRoZSBKU09OIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBlcnJvciBpbnRvXG4gICAgICAgIC8vIGFuIEVycm9yIGluc3RhbmNlLlxuICAgICAgICByZWplY3QobmV3IEVycm9yKHJlcGx5Lm1lc3NhZ2UpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUocmVwbHkpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCB3cmFwcGVkU2VuZE1lc3NhZ2UgPSAobmFtZSwgbWV0YWRhdGEsIGFwaU5hbWVzcGFjZU9iaiwgLi4uYXJncykgPT4ge1xuICAgICAgaWYgKGFyZ3MubGVuZ3RoIDwgbWV0YWRhdGEubWluQXJncykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IGxlYXN0ICR7bWV0YWRhdGEubWluQXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWluQXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xuICAgICAgfVxuXG4gICAgICBpZiAoYXJncy5sZW5ndGggPiBtZXRhZGF0YS5tYXhBcmdzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYXQgbW9zdCAke21ldGFkYXRhLm1heEFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1heEFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3Qgd3JhcHBlZENiID0gd3JhcHBlZFNlbmRNZXNzYWdlQ2FsbGJhY2suYmluZChudWxsLCB7cmVzb2x2ZSwgcmVqZWN0fSk7XG4gICAgICAgIGFyZ3MucHVzaCh3cmFwcGVkQ2IpO1xuICAgICAgICBhcGlOYW1lc3BhY2VPYmouc2VuZE1lc3NhZ2UoLi4uYXJncyk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc3RhdGljV3JhcHBlcnMgPSB7XG4gICAgICBkZXZ0b29sczoge1xuICAgICAgICBuZXR3b3JrOiB7XG4gICAgICAgICAgb25SZXF1ZXN0RmluaXNoZWQ6IHdyYXBFdmVudChvblJlcXVlc3RGaW5pc2hlZFdyYXBwZXJzKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBydW50aW1lOiB7XG4gICAgICAgIG9uTWVzc2FnZTogd3JhcEV2ZW50KG9uTWVzc2FnZVdyYXBwZXJzKSxcbiAgICAgICAgb25NZXNzYWdlRXh0ZXJuYWw6IHdyYXBFdmVudChvbk1lc3NhZ2VXcmFwcGVycyksXG4gICAgICAgIHNlbmRNZXNzYWdlOiB3cmFwcGVkU2VuZE1lc3NhZ2UuYmluZChudWxsLCBcInNlbmRNZXNzYWdlXCIsIHttaW5BcmdzOiAxLCBtYXhBcmdzOiAzfSksXG4gICAgICB9LFxuICAgICAgdGFiczoge1xuICAgICAgICBzZW5kTWVzc2FnZTogd3JhcHBlZFNlbmRNZXNzYWdlLmJpbmQobnVsbCwgXCJzZW5kTWVzc2FnZVwiLCB7bWluQXJnczogMiwgbWF4QXJnczogM30pLFxuICAgICAgfSxcbiAgICB9O1xuICAgIGNvbnN0IHNldHRpbmdNZXRhZGF0YSA9IHtcbiAgICAgIGNsZWFyOiB7bWluQXJnczogMSwgbWF4QXJnczogMX0sXG4gICAgICBnZXQ6IHttaW5BcmdzOiAxLCBtYXhBcmdzOiAxfSxcbiAgICAgIHNldDoge21pbkFyZ3M6IDEsIG1heEFyZ3M6IDF9LFxuICAgIH07XG4gICAgYXBpTWV0YWRhdGEucHJpdmFjeSA9IHtcbiAgICAgIG5ldHdvcms6IHtcIipcIjogc2V0dGluZ01ldGFkYXRhfSxcbiAgICAgIHNlcnZpY2VzOiB7XCIqXCI6IHNldHRpbmdNZXRhZGF0YX0sXG4gICAgICB3ZWJzaXRlczoge1wiKlwiOiBzZXR0aW5nTWV0YWRhdGF9LFxuICAgIH07XG5cbiAgICByZXR1cm4gd3JhcE9iamVjdChleHRlbnNpb25BUElzLCBzdGF0aWNXcmFwcGVycywgYXBpTWV0YWRhdGEpO1xuICB9O1xuXG4gIC8vIFRoZSBidWlsZCBwcm9jZXNzIGFkZHMgYSBVTUQgd3JhcHBlciBhcm91bmQgdGhpcyBmaWxlLCB3aGljaCBtYWtlcyB0aGVcbiAgLy8gYG1vZHVsZWAgdmFyaWFibGUgYXZhaWxhYmxlLlxuICBtb2R1bGUuZXhwb3J0cyA9IHdyYXBBUElzKGNocm9tZSk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IGdsb2JhbFRoaXMuYnJvd3Nlcjtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uYW1kTyA9IHt9OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5obWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZSA9IE9iamVjdC5jcmVhdGUobW9kdWxlKTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCAnZXhwb3J0cycsIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdHNldDogKCkgPT4ge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdFUyBNb2R1bGVzIG1heSBub3QgYXNzaWduIG1vZHVsZS5leHBvcnRzIG9yIGV4cG9ydHMuKiwgVXNlIEVTTSBleHBvcnQgc3ludGF4LCBpbnN0ZWFkOiAnICsgbW9kdWxlLmlkKTtcblx0XHR9XG5cdH0pO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUtMjAyNSBBZGd1YXJkIFNvZnR3YXJlIEx0ZC5cbiAqXG4gKiBAZmlsZVxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgQWRHdWFyZCBCcm93c2VyIEV4dGVuc2lvbiAoaHR0cHM6Ly9naXRodWIuY29tL0FkZ3VhcmRUZWFtL0FkZ3VhcmRCcm93c2VyRXh0ZW5zaW9uKS5cbiAqXG4gKiBBZEd1YXJkIEJyb3dzZXIgRXh0ZW5zaW9uIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBBZEd1YXJkIEJyb3dzZXIgRXh0ZW5zaW9uIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIEFkR3VhcmQgQnJvd3NlciBFeHRlbnNpb24uIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuaW1wb3J0IHsgU3Vic2NyaWJlIH0gZnJvbSAnLi4vLi4vc3JjL2NvbnRlbnQtc2NyaXB0L3N1YnNjcmliZSc7XG5cblN1YnNjcmliZS5pbml0KCk7XG4iXSwibmFtZXMiOlsiQVBQX01FU1NBR0VfSEFORExFUl9OQU1FIiwiTWVzc2FnZVR5cGUiLCJzZW5kTWVzc2FnZSIsInNlbmRUYWJNZXNzYWdlIiwiTWVzc2FnZUhhbmRsZXIiLCJtZXNzYWdlSGFzVHlwZUZpZWxkIiwibWVzc2FnZUhhc1R5cGVBbmREYXRhRmllbGRzIiwiYnJvd3NlciIsIm1lc3NhZ2UiLCJpbml0IiwicnVudGltZSIsIm9uTWVzc2FnZSIsImFkZExpc3RlbmVyIiwiaGFuZGxlTWVzc2FnZSIsInR5cGUiLCJsaXN0ZW5lciIsImxpc3RlbmVycyIsImhhcyIsIkVycm9yIiwic2V0IiwicmVtb3ZlTGlzdGVuZXIiLCJkZWxldGUiLCJyZW1vdmVMaXN0ZW5lcnMiLCJjbGVhciIsImlzVmFsaWRNZXNzYWdlVHlwZSIsImhhbmRsZXJOYW1lIiwiY29uc3RydWN0b3IiLCJNYXAiLCJiaW5kIiwiZSIsInRhYklkIiwidGFicyIsIlN1YnNjcmliZSIsImRvY3VtZW50IiwiRG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlT25DbGlja0V2ZW50IiwiZXZlbnQiLCJidXR0b24iLCJ0YXJnZXQiLCJnZXRBbmNob3JFbGVtZW50IiwiaGFzU3Vic2NyaXB0aW9uTGluayIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiZGF0YSIsImdldFN1YnNjcmlwdGlvbkRhdGEiLCJBZGRGaWx0ZXJpbmdTdWJzY3JpcHRpb24iLCJlbGVtZW50IiwiSFRNTEFuY2hvckVsZW1lbnQiLCJFbGVtZW50IiwicGFyZW50Tm9kZSIsImhvc3QiLCJwcm90b2NvbCIsInBhdGhuYW1lIiwiaHJlZiIsInRlc3QiLCJzZWFyY2giLCJwYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJ1cmwiLCJnZXQiLCJ0aXRsZSIsInRyaW0iLCJnbG9iYWxUaGlzIiwiY2hyb21lIiwiaWQiLCJDSFJPTUVfU0VORF9NRVNTQUdFX0NBTExCQUNLX05PX1JFU1BPTlNFX01FU1NBR0UiLCJ3cmFwQVBJcyIsImV4dGVuc2lvbkFQSXMiLCJhcGlNZXRhZGF0YSIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJEZWZhdWx0V2Vha01hcCIsIldlYWtNYXAiLCJjcmVhdGVJdGVtIiwiaXRlbXMiLCJ1bmRlZmluZWQiLCJrZXkiLCJpc1RoZW5hYmxlIiwidmFsdWUiLCJ0aGVuIiwibWFrZUNhbGxiYWNrIiwicHJvbWlzZSIsIm1ldGFkYXRhIiwiY2FsbGJhY2tBcmdzIiwibGFzdEVycm9yIiwicmVqZWN0Iiwic2luZ2xlQ2FsbGJhY2tBcmciLCJyZXNvbHZlIiwicGx1cmFsaXplQXJndW1lbnRzIiwibnVtQXJncyIsIndyYXBBc3luY0Z1bmN0aW9uIiwibmFtZSIsImFzeW5jRnVuY3Rpb25XcmFwcGVyIiwiYXJncyIsIm1pbkFyZ3MiLCJtYXhBcmdzIiwiUHJvbWlzZSIsImZhbGxiYWNrVG9Ob0NhbGxiYWNrIiwiY2JFcnJvciIsImNvbnNvbGUiLCJ3YXJuIiwibm9DYWxsYmFjayIsIndyYXBNZXRob2QiLCJtZXRob2QiLCJ3cmFwcGVyIiwiUHJveHkiLCJhcHBseSIsInRhcmdldE1ldGhvZCIsInRoaXNPYmoiLCJjYWxsIiwiaGFzT3duUHJvcGVydHkiLCJGdW5jdGlvbiIsInByb3RvdHlwZSIsIndyYXBPYmplY3QiLCJ3cmFwcGVycyIsImNhY2hlIiwiY3JlYXRlIiwiaGFuZGxlcnMiLCJwcm94eVRhcmdldCIsInByb3AiLCJyZWNlaXZlciIsImRlZmluZVByb3BlcnR5IiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsImRlc2MiLCJSZWZsZWN0IiwiZGVsZXRlUHJvcGVydHkiLCJ3cmFwRXZlbnQiLCJ3cmFwcGVyTWFwIiwiaGFzTGlzdGVuZXIiLCJvblJlcXVlc3RGaW5pc2hlZFdyYXBwZXJzIiwib25SZXF1ZXN0RmluaXNoZWQiLCJyZXEiLCJ3cmFwcGVkUmVxIiwiZ2V0Q29udGVudCIsIm9uTWVzc2FnZVdyYXBwZXJzIiwic2VuZGVyIiwic2VuZFJlc3BvbnNlIiwiZGlkQ2FsbFNlbmRSZXNwb25zZSIsIndyYXBwZWRTZW5kUmVzcG9uc2UiLCJzZW5kUmVzcG9uc2VQcm9taXNlIiwicmVzcG9uc2UiLCJyZXN1bHQiLCJlcnIiLCJpc1Jlc3VsdFRoZW5hYmxlIiwic2VuZFByb21pc2VkUmVzdWx0IiwibXNnIiwiZXJyb3IiLCJfX21veldlYkV4dGVuc2lvblBvbHlmaWxsUmVqZWN0X18iLCJjYXRjaCIsIndyYXBwZWRTZW5kTWVzc2FnZUNhbGxiYWNrIiwicmVwbHkiLCJ3cmFwcGVkU2VuZE1lc3NhZ2UiLCJhcGlOYW1lc3BhY2VPYmoiLCJ3cmFwcGVkQ2IiLCJwdXNoIiwic3RhdGljV3JhcHBlcnMiLCJkZXZ0b29scyIsIm5ldHdvcmsiLCJvbk1lc3NhZ2VFeHRlcm5hbCIsInNldHRpbmdNZXRhZGF0YSIsInByaXZhY3kiLCJzZXJ2aWNlcyIsIndlYnNpdGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=