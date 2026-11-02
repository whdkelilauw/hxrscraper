/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.array.push.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.array.push.js ***!
  \*****************************************************************************************/
/***/ (() => {

throw new Error("Module parse failed: 'import' and 'export' may appear only with 'sourceType: module' (2:0)\nFile was processed with these loaders:\n * ./node_modules/.pnpm/swc-loader@0.2.3_@swc+core@_2ef6ed611e9853e5d172f6e6729aa225/node_modules/swc-loader/src/index.js\n * ./node_modules/.pnpm/source-map-loader@3.0.2_webpack@5.97.1_@swc+core@1.11.21_/node_modules/source-map-loader/dist/cjs.js\nYou may need an additional loader to handle the result of these loaders.\n| 'use strict';\n> import \"core-js/modules/es.array.push.js\";\n| import \"core-js/modules/es.error.cause.js\";\n| var $ = require('../internals/export');");

/***/ }),

/***/ "./Extension/src/content-script/devtools/devtools-helper.js":
/*!******************************************************************!*\
  !*** ./Extension/src/content-script/devtools/devtools-helper.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DevToolsHelper: () => (/* binding */ DevToolsHelper)
/* harmony export */ });
/* harmony import */ var _devtools_rules_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./devtools-rules-constructor */ "./Extension/src/content-script/devtools/devtools-rules-constructor.js");
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
 * Helper object that provides methods used in devtools panel's code
 * Methods are invoked via inspectedWindow.eval function.
 * https://developer.chrome.com/extensions/devtools_inspectedWindow#method-eval
 *
 */ const DevToolsHelper = function() {
    const PREVIEW_STYLE_ID = 'adguard-preview-style';
    /**
     * Add rule preview.
     *
     * @param options Object {ruleText: 'ruleText'}
     */ const applyPreview = function(options) {
        const { ruleText } = options;
        const head = document.getElementsByTagName('head')[0];
        if (!head) {
            return;
        }
        const selector = _devtools_rules_constructor__WEBPACK_IMPORTED_MODULE_0__.DevToolsRulesConstructor.constructRuleCssSelector(ruleText);
        if (!selector) {
            return;
        }
        const style = document.createElement('style');
        style.setAttribute('type', 'text/css');
        style.setAttribute('id', PREVIEW_STYLE_ID);
        style.appendChild(document.createTextNode(`${selector} {display: none !important;}`));
        head.appendChild(style);
    };
    /**
     * Cancel early applied preview
     */ const cancelPreview = function() {
        const head = document.getElementsByTagName('head')[0];
        if (!head) {
            return;
        }
        const style = document.getElementById(PREVIEW_STYLE_ID);
        if (style) {
            head.removeChild(style);
        }
    };
    return {
        applyPreview,
        cancelPreview
    };
}();


/***/ }),

/***/ "./Extension/src/content-script/devtools/devtools-rules-constructor.js":
/*!*****************************************************************************!*\
  !*** ./Extension/src/content-script/devtools/devtools-rules-constructor.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DevToolsRulesConstructor: () => (/* binding */ DevToolsRulesConstructor)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/.pnpm/core-js@3.40.0/node_modules/core-js/modules/es.array.push.js");
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
 * DevTools rules constructor helper
 */ 
const DevToolsRulesConstructor = function() {
    const CSS_RULE_MARK = '##';
    const RULE_OPTIONS_MARK = '$';
    const URLBLOCK_ATTRIBUTES = [
        'src',
        'data'
    ];
    const linkHelper = document.createElement('a');
    /**
     * Constructs css selector for element using tag name, id and classed, like: tagName#id.class1.class2
     *
     * @param element Element
     * @param classList Override element classes (If classList is null, element classes will be used)
     * @param excludeTagName Omit tag name in selector
     * @param excludeId Omit element id in selector
     *
     * @returns {string}
     */ const makeDefaultCssFilter = function(element, classList, excludeTagName, excludeId) {
        let cssSelector = excludeTagName ? '' : element.tagName.toLowerCase();
        if (element.id && !excludeId) {
            cssSelector += `#${CSS.escape(element.id)}`;
        }
        cssSelector += constructClassCssSelectorByAND(classList || element.classList);
        return cssSelector;
    };
    /**
     * Constructs css selector for element using parent elements and nth-child (first-child, last-child) pseudo classes.
     *
     * @param element Element
     * @param options Construct options. For example: {excludeTagName: false, excludeId: false, classList: []}
     *
     * @returns {string}
     */ const makeCssNthChildFilter = function(element, options) {
        options = options || {};
        const { classList } = options;
        const excludeTagNameOverride = 'excludeTagName' in options;
        const { excludeTagName } = options;
        const excludeIdOverride = 'excludeId' in options;
        const { excludeId } = options;
        const path = [];
        let el = element;
        while(el.parentNode){
            const nodeName = el && el.nodeName ? el.nodeName.toUpperCase() : '';
            if (nodeName === 'BODY' && path.length === 0) {
                const bodySelector = makeDefaultCssFilter(el, classList, excludeTagNameOverride ? excludeTagName : false, excludeId);
                path.unshift(bodySelector);
                break;
            }
            if (nodeName === 'BODY') {
                break;
            }
            if (el.id) {
                /**
                 * Be default we don't include tag name and classes to selector for element with id attribute
                 */ let cssSelector = '';
                if (el === element) {
                    cssSelector = makeDefaultCssFilter(el, classList || [], excludeTagNameOverride ? excludeTagName : true, excludeIdOverride ? excludeId : false);
                } else {
                    cssSelector = makeDefaultCssFilter(el, [], true, false);
                }
                path.unshift(cssSelector);
                break;
            } else {
                let c = 1;
                for(let e = el; e.previousSibling; e = e.previousSibling){
                    if (e.previousSibling.nodeType === 1) {
                        c += 1;
                    }
                }
                let cldCount = 0;
                for(let i = 0; el.parentNode && i < el.parentNode.childNodes.length; i += 1){
                    cldCount += el.parentNode.childNodes[i].nodeType === 1 ? 1 : 0;
                }
                let ch;
                if (cldCount === 0 || cldCount === 1) {
                    ch = '';
                } else if (c === 1) {
                    ch = ':first-child';
                } else if (c === cldCount) {
                    ch = ':last-child';
                } else {
                    ch = `:nth-child(${c})`;
                }
                /**
                 * By default we include tag name and element classes to selector for element without id attribute
                 */ if (el === element) {
                    let p = makeDefaultCssFilter(el, classList, excludeTagNameOverride ? excludeTagName : false, excludeId);
                    p += ch;
                    path.unshift(p);
                } else {
                    path.unshift(makeDefaultCssFilter(el, el.classList, false, false) + ch);
                }
                el = el.parentNode;
            }
        }
        return path.join(' > ');
    };
    /**
     * Constructs css selector by combining classes by AND.
     *
     * @param classList
     *
     * @returns {string}
     */ const constructClassCssSelectorByAND = function(classList) {
        const selectors = [];
        if (classList) {
            for(let i = 0; i < classList.length; i += 1){
                selectors.push(`.${CSS.escape(classList[i])}`);
            }
        }
        return selectors.join('');
    };
    /**
     * Constructs css selector by combining classes by OR.
     *
     * @param classList
     *
     * @returns {string}
     */ const constructClassCssSelectorByOR = function(classList) {
        const selectors = [];
        if (classList) {
            for(let i = 0; i < classList.length; i += 1){
                selectors.push(`.${CSS.escape(classList[i])}`);
            }
        }
        return selectors.join(', ');
    };
    /**
     * Constructs element selector for matching elements that contain any of classes in original element
     * For example <el class="cl1 cl2 cl3"></el> => .cl1, .cl2, .cl3
     *
     * @param element Element
     * @param classList Override element classes (If classList is null, element classes will be used)
     *
     * @returns {string}
     */ const makeSimilarCssFilter = function(element, classList) {
        return constructClassCssSelectorByOR(classList || element.classList);
    };
    /**
     * Creates css rule text.
     *
     * @param element Element
     * @param options Construct options.
     * For example: {cssSelectorType: 'STRICT_FULL', excludeTagName: false, excludeId: false, classList: []}
     *
     * @returns {string}
     */ const constructCssRuleText = function(element, options) {
        if (!element) {
            return;
        }
        options = options || {};
        const cssSelectorType = options.cssSelectorType || 'STRICT_FULL';
        let selector;
        switch(cssSelectorType){
            case 'STRICT_FULL':
                selector = makeCssNthChildFilter(element, options);
                break;
            case 'STRICT':
                selector = makeDefaultCssFilter(element, options.classList, options.excludeTagName, options.excludeId);
                break;
            case 'SIMILAR':
                selector = makeSimilarCssFilter(element, options.classList, true);
                break;
            default:
        }
        return selector ? CSS_RULE_MARK + selector : '';
    };
    const isValidUrl = function(value) {
        if (value) {
            linkHelper.href = value;
            if (linkHelper.hostname) {
                return true;
            }
        }
        return false;
    };
    const haveUrlBlockParameter = function(element) {
        const value = getUrlBlockAttribute(element);
        return value && value !== '';
    };
    const haveClassAttribute = function(element) {
        return element.classList && element.classList.length > 0;
    };
    const haveIdAttribute = function(element) {
        return element.id && element.id.trim() !== '';
    };
    const cropDomain = function(url) {
        const domain = getUrl(url).host;
        return domain.replace('www.', '').replace(/:\d+/, '');
    };
    const getUrl = function(url) {
        const pattern = '^(([^:/\\?#]+):)?(//(([^:/\\?#]*)(?::([^/\\?#]*))?))?([^\\?#]*)(\\?([^#]*))?(#(.*))?$';
        const rx = new RegExp(pattern);
        const parts = rx.exec(url);
        return {
            host: parts[4] || '',
            path: parts[7] || ''
        };
    };
    const constructUrlBlockRuleText = function(element, urlBlockAttribute, oneDomain, domain) {
        if (!urlBlockAttribute) {
            return null;
        }
        let blockUrlRuleText = urlBlockAttribute.replace(/^http:\/\/(www\.)?/, '||');
        if (blockUrlRuleText.indexOf('.') === 0) {
            blockUrlRuleText = blockUrlRuleText.substring(1);
        }
        if (!oneDomain) {
            blockUrlRuleText = `${blockUrlRuleText + RULE_OPTIONS_MARK}domain=${domain}`;
        }
        return blockUrlRuleText;
    };
    const getUrlBlockAttribute = function(element) {
        if (!element || !element.getAttribute) {
            return null;
        }
        for(let i = 0; i < URLBLOCK_ATTRIBUTES.length; i += 1){
            const attr = URLBLOCK_ATTRIBUTES[i];
            const value = element.getAttribute(attr);
            if (isValidUrl(value)) {
                return value;
            }
        }
        return null;
    };
    /**
     * Returns detailed element info.
     *
     * @param element
     */ const getElementInfo = function(element) {
        // Convert attributes to array
        const attributes = [];
        const elementAttributes = element.attributes;
        if (elementAttributes) {
            for(let i = 0; i < elementAttributes.length; i += 1){
                const attr = elementAttributes[i];
                attributes.push({
                    name: attr.name,
                    value: attr.value
                });
            }
        }
        return {
            tagName: element.tagName,
            attributes,
            urlBlockAttributeValue: getUrlBlockAttribute(element),
            haveUrlBlockParameter: haveUrlBlockParameter(element),
            haveClassAttribute: haveClassAttribute(element),
            haveIdAttribute: haveIdAttribute(element)
        };
    };
    /**
     * Constructs css selector for specified rule.
     *
     * @param ruleText rule text
     *
     * @returns {string} css style selector
     */ const constructRuleCssSelector = function(ruleText) {
        if (!ruleText) {
            return null;
        }
        const index = ruleText.indexOf(CSS_RULE_MARK);
        const optionsIndex = ruleText.indexOf(RULE_OPTIONS_MARK);
        if (index >= 0) {
            return ruleText.substring(index + CSS_RULE_MARK.length, optionsIndex >= 0 ? optionsIndex : ruleText.length);
        }
        let s = ruleText.substring(0, optionsIndex);
        s = s.replace(/[\|]|[\^]/g, '');
        if (isValidUrl(s)) {
            return `[src*="${s}"]`;
        }
        return null;
    };
    /**
     * Constructs adguard rule text from element node and specified options.
     *
     * var options = {
     *  urlBlockAttribute: url mask,
     *  isBlockOneDomain: boolean,
     *  url: url,
     *  attributes: attributesSelectorText,
     *  ruleType: (URL, CSS)
     *  cssSelectorType: (STRICT_FULL, STRICT, SIMILAR),
     *  excludeTagName: false, (Exclude element tag name from selector)
     *  excludeId: false, (Exclude element identifier from selector)
     *  classList: [] (Override element classes (If classList is null, element classes will be used))
     * }
     *
     * @param element
     * @param options
     *
     * @returns {*}
     */ const constructRuleText = function(element, options) {
        const croppedDomain = cropDomain(options.url);
        const { ruleType } = options;
        if (ruleType === 'URL') {
            const blockUrlRuleText = constructUrlBlockRuleText(element, options.urlMask, options.isBlockOneDomain, croppedDomain);
            if (blockUrlRuleText) {
                return blockUrlRuleText;
            }
        }
        let result;
        if (ruleType === 'CSS') {
            result = constructCssRuleText(element, options);
            // Append html attributes to css selector
            if (options.attributes) {
                result = (result || CSS_RULE_MARK + result) + options.attributes;
            }
        }
        if (!options.isBlockOneDomain) {
            result = croppedDomain + result;
        }
        return result;
    };
    return {
        getElementInfo,
        constructRuleCssSelector,
        constructRuleText
    };
}();


/***/ }),

/***/ "./Extension/src/content-script/devtools/devtools.js":
/*!***********************************************************!*\
  !*** ./Extension/src/content-script/devtools/devtools.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   devtools: () => (/* binding */ devtools)
/* harmony export */ });
/* harmony import */ var _devtools_rules_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./devtools-rules-constructor */ "./Extension/src/content-script/devtools/devtools-rules-constructor.js");
/* harmony import */ var _devtools_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./devtools-helper */ "./Extension/src/content-script/devtools/devtools-helper.js");
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

const init = ()=>{
    window.DevToolsRulesConstructor = _devtools_rules_constructor__WEBPACK_IMPORTED_MODULE_0__.DevToolsRulesConstructor;
    window.DevToolsHelper = _devtools_helper__WEBPACK_IMPORTED_MODULE_1__.DevToolsHelper;
};
const devtools = {
    init
};


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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/*!*****************************************************!*\
  !*** ./Extension/pages/content-script-end/index.js ***!
  \*****************************************************/
/* harmony import */ var _src_content_script_devtools_devtools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/content-script/devtools/devtools */ "./Extension/src/content-script/devtools/devtools.js");
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
 * !IMPORTANT Only chrome based browsers support devtools, we cut off devtools for other browsers
 *
 * TODO: We can merge content-script-end and content-script-start into one file,
 * because content-script-end has 50kb while content-script-start has 500kb - so
 * it would not significantly increase the size of the content-script file.
 */ 
_src_content_script_devtools_devtools__WEBPACK_IMPORTED_MODULE_0__.devtools.init();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBMEU7QUFDMUUsMkVBQVEsUSIsInNvdXJjZXMiOlsid2VicGFjazovL2Jyb3dzZXItZXh0ZW5zaW9uLy4vRXh0ZW5zaW9uL3NyYy9jb250ZW50LXNjcmlwdC9kZXZ0b29scy9kZXZ0b29scy1oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi9FeHRlbnNpb24vc3JjL2NvbnRlbnQtc2NyaXB0L2RldnRvb2xzL2RldnRvb2xzLXJ1bGVzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovL2Jyb3dzZXItZXh0ZW5zaW9uLy4vRXh0ZW5zaW9uL3NyYy9jb250ZW50LXNjcmlwdC9kZXZ0b29scy9kZXZ0b29scy5qcyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uL0V4dGVuc2lvbi9wYWdlcy9jb250ZW50LXNjcmlwdC1lbmQvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUtMjAyNSBBZGd1YXJkIFNvZnR3YXJlIEx0ZC5cbiAqXG4gKiBAZmlsZVxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgQWRHdWFyZCBCcm93c2VyIEV4dGVuc2lvbiAoaHR0cHM6Ly9naXRodWIuY29tL0FkZ3VhcmRUZWFtL0FkZ3VhcmRCcm93c2VyRXh0ZW5zaW9uKS5cbiAqXG4gKiBBZEd1YXJkIEJyb3dzZXIgRXh0ZW5zaW9uIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBBZEd1YXJkIEJyb3dzZXIgRXh0ZW5zaW9uIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIEFkR3VhcmQgQnJvd3NlciBFeHRlbnNpb24uIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuXG5pbXBvcnQgeyBEZXZUb29sc1J1bGVzQ29uc3RydWN0b3IgfSBmcm9tICcuL2RldnRvb2xzLXJ1bGVzLWNvbnN0cnVjdG9yJztcblxuLyoqXG4gKiBIZWxwZXIgb2JqZWN0IHRoYXQgcHJvdmlkZXMgbWV0aG9kcyB1c2VkIGluIGRldnRvb2xzIHBhbmVsJ3MgY29kZVxuICogTWV0aG9kcyBhcmUgaW52b2tlZCB2aWEgaW5zcGVjdGVkV2luZG93LmV2YWwgZnVuY3Rpb24uXG4gKiBodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2V4dGVuc2lvbnMvZGV2dG9vbHNfaW5zcGVjdGVkV2luZG93I21ldGhvZC1ldmFsXG4gKlxuICovXG5leHBvcnQgY29uc3QgRGV2VG9vbHNIZWxwZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IFBSRVZJRVdfU1RZTEVfSUQgPSAnYWRndWFyZC1wcmV2aWV3LXN0eWxlJztcblxuICAgIC8qKlxuICAgICAqIEFkZCBydWxlIHByZXZpZXcuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBPYmplY3Qge3J1bGVUZXh0OiAncnVsZVRleHQnfVxuICAgICAqL1xuICAgIGNvbnN0IGFwcGx5UHJldmlldyA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IHsgcnVsZVRleHQgfSA9IG9wdGlvbnM7XG5cbiAgICAgICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gICAgICAgIGlmICghaGVhZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSBEZXZUb29sc1J1bGVzQ29uc3RydWN0b3IuY29uc3RydWN0UnVsZUNzc1NlbGVjdG9yKHJ1bGVUZXh0KTtcbiAgICAgICAgaWYgKCFzZWxlY3Rvcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9jc3MnKTtcbiAgICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKCdpZCcsIFBSRVZJRVdfU1RZTEVfSUQpO1xuICAgICAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgJHtzZWxlY3Rvcn0ge2Rpc3BsYXk6IG5vbmUgIWltcG9ydGFudDt9YCkpO1xuXG4gICAgICAgIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDYW5jZWwgZWFybHkgYXBwbGllZCBwcmV2aWV3XG4gICAgICovXG4gICAgY29uc3QgY2FuY2VsUHJldmlldyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gICAgICAgIGlmICghaGVhZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoUFJFVklFV19TVFlMRV9JRCk7XG4gICAgICAgIGlmIChzdHlsZSkge1xuICAgICAgICAgICAgaGVhZC5yZW1vdmVDaGlsZChzdHlsZSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYXBwbHlQcmV2aWV3LFxuICAgICAgICBjYW5jZWxQcmV2aWV3LFxuICAgIH07XG59KSgpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUtMjAyNSBBZGd1YXJkIFNvZnR3YXJlIEx0ZC5cbiAqXG4gKiBAZmlsZVxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgQWRHdWFyZCBCcm93c2VyIEV4dGVuc2lvbiAoaHR0cHM6Ly9naXRodWIuY29tL0FkZ3VhcmRUZWFtL0FkZ3VhcmRCcm93c2VyRXh0ZW5zaW9uKS5cbiAqXG4gKiBBZEd1YXJkIEJyb3dzZXIgRXh0ZW5zaW9uIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBBZEd1YXJkIEJyb3dzZXIgRXh0ZW5zaW9uIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBhbG9uZyB3aXRoIEFkR3VhcmQgQnJvd3NlciBFeHRlbnNpb24uIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuXG4vKipcbiAqIERldlRvb2xzIHJ1bGVzIGNvbnN0cnVjdG9yIGhlbHBlclxuICovXG5leHBvcnQgY29uc3QgRGV2VG9vbHNSdWxlc0NvbnN0cnVjdG9yID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBDU1NfUlVMRV9NQVJLID0gJyMjJztcbiAgICBjb25zdCBSVUxFX09QVElPTlNfTUFSSyA9ICckJztcblxuICAgIGNvbnN0IFVSTEJMT0NLX0FUVFJJQlVURVMgPSBbJ3NyYycsICdkYXRhJ107XG5cbiAgICBjb25zdCBsaW5rSGVscGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0cyBjc3Mgc2VsZWN0b3IgZm9yIGVsZW1lbnQgdXNpbmcgdGFnIG5hbWUsIGlkIGFuZCBjbGFzc2VkLCBsaWtlOiB0YWdOYW1lI2lkLmNsYXNzMS5jbGFzczJcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbGVtZW50IEVsZW1lbnRcbiAgICAgKiBAcGFyYW0gY2xhc3NMaXN0IE92ZXJyaWRlIGVsZW1lbnQgY2xhc3NlcyAoSWYgY2xhc3NMaXN0IGlzIG51bGwsIGVsZW1lbnQgY2xhc3NlcyB3aWxsIGJlIHVzZWQpXG4gICAgICogQHBhcmFtIGV4Y2x1ZGVUYWdOYW1lIE9taXQgdGFnIG5hbWUgaW4gc2VsZWN0b3JcbiAgICAgKiBAcGFyYW0gZXhjbHVkZUlkIE9taXQgZWxlbWVudCBpZCBpbiBzZWxlY3RvclxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBjb25zdCBtYWtlRGVmYXVsdENzc0ZpbHRlciA9IGZ1bmN0aW9uIChlbGVtZW50LCBjbGFzc0xpc3QsIGV4Y2x1ZGVUYWdOYW1lLCBleGNsdWRlSWQpIHtcbiAgICAgICAgbGV0IGNzc1NlbGVjdG9yID0gZXhjbHVkZVRhZ05hbWUgPyAnJyA6IGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAoZWxlbWVudC5pZCAmJiAhZXhjbHVkZUlkKSB7XG4gICAgICAgICAgICBjc3NTZWxlY3RvciArPSBgIyR7Q1NTLmVzY2FwZShlbGVtZW50LmlkKX1gO1xuICAgICAgICB9XG4gICAgICAgIGNzc1NlbGVjdG9yICs9IGNvbnN0cnVjdENsYXNzQ3NzU2VsZWN0b3JCeUFORChjbGFzc0xpc3QgfHwgZWxlbWVudC5jbGFzc0xpc3QpO1xuICAgICAgICByZXR1cm4gY3NzU2VsZWN0b3I7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdHMgY3NzIHNlbGVjdG9yIGZvciBlbGVtZW50IHVzaW5nIHBhcmVudCBlbGVtZW50cyBhbmQgbnRoLWNoaWxkIChmaXJzdC1jaGlsZCwgbGFzdC1jaGlsZCkgcHNldWRvIGNsYXNzZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxlbWVudCBFbGVtZW50XG4gICAgICogQHBhcmFtIG9wdGlvbnMgQ29uc3RydWN0IG9wdGlvbnMuIEZvciBleGFtcGxlOiB7ZXhjbHVkZVRhZ05hbWU6IGZhbHNlLCBleGNsdWRlSWQ6IGZhbHNlLCBjbGFzc0xpc3Q6IFtdfVxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBjb25zdCBtYWtlQ3NzTnRoQ2hpbGRGaWx0ZXIgPSBmdW5jdGlvbiAoZWxlbWVudCwgb3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgICAgICBjb25zdCB7IGNsYXNzTGlzdCB9ID0gb3B0aW9ucztcblxuICAgICAgICBjb25zdCBleGNsdWRlVGFnTmFtZU92ZXJyaWRlID0gJ2V4Y2x1ZGVUYWdOYW1lJyBpbiBvcHRpb25zO1xuICAgICAgICBjb25zdCB7IGV4Y2x1ZGVUYWdOYW1lIH0gPSBvcHRpb25zO1xuXG4gICAgICAgIGNvbnN0IGV4Y2x1ZGVJZE92ZXJyaWRlID0gJ2V4Y2x1ZGVJZCcgaW4gb3B0aW9ucztcbiAgICAgICAgY29uc3QgeyBleGNsdWRlSWQgfSA9IG9wdGlvbnM7XG5cbiAgICAgICAgY29uc3QgcGF0aCA9IFtdO1xuICAgICAgICBsZXQgZWwgPSBlbGVtZW50O1xuICAgICAgICB3aGlsZSAoZWwucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgY29uc3Qgbm9kZU5hbWUgPSBlbCAmJiBlbC5ub2RlTmFtZSA/IGVsLm5vZGVOYW1lLnRvVXBwZXJDYXNlKCkgOiAnJztcbiAgICAgICAgICAgIGlmIChub2RlTmFtZSA9PT0gJ0JPRFknICYmIHBhdGgubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYm9keVNlbGVjdG9yID0gbWFrZURlZmF1bHRDc3NGaWx0ZXIoXG4gICAgICAgICAgICAgICAgICAgIGVsLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3QsXG4gICAgICAgICAgICAgICAgICAgIGV4Y2x1ZGVUYWdOYW1lT3ZlcnJpZGUgPyBleGNsdWRlVGFnTmFtZSA6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBleGNsdWRlSWQsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBwYXRoLnVuc2hpZnQoYm9keVNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChub2RlTmFtZSA9PT0gJ0JPRFknKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZWwuaWQpIHtcbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBCZSBkZWZhdWx0IHdlIGRvbid0IGluY2x1ZGUgdGFnIG5hbWUgYW5kIGNsYXNzZXMgdG8gc2VsZWN0b3IgZm9yIGVsZW1lbnQgd2l0aCBpZCBhdHRyaWJ1dGVcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBsZXQgY3NzU2VsZWN0b3IgPSAnJztcbiAgICAgICAgICAgICAgICBpZiAoZWwgPT09IGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgY3NzU2VsZWN0b3IgPSBtYWtlRGVmYXVsdENzc0ZpbHRlcihcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0IHx8IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhjbHVkZVRhZ05hbWVPdmVycmlkZSA/IGV4Y2x1ZGVUYWdOYW1lIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4Y2x1ZGVJZE92ZXJyaWRlID8gZXhjbHVkZUlkIDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY3NzU2VsZWN0b3IgPSBtYWtlRGVmYXVsdENzc0ZpbHRlcihlbCwgW10sIHRydWUsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0aC51bnNoaWZ0KGNzc1NlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IGMgPSAxO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGUgPSBlbDsgZS5wcmV2aW91c1NpYmxpbmc7IGUgPSBlLnByZXZpb3VzU2libGluZykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZS5wcmV2aW91c1NpYmxpbmcubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxldCBjbGRDb3VudCA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGVsLnBhcmVudE5vZGUgJiYgaSA8IGVsLnBhcmVudE5vZGUuY2hpbGROb2Rlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICBjbGRDb3VudCArPSBlbC5wYXJlbnROb2RlLmNoaWxkTm9kZXNbaV0ubm9kZVR5cGUgPT09IDEgPyAxIDogMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZXQgY2g7XG4gICAgICAgICAgICAgICAgaWYgKGNsZENvdW50ID09PSAwIHx8IGNsZENvdW50ID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoID0gJyc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoID0gJzpmaXJzdC1jaGlsZCc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjID09PSBjbGRDb3VudCkge1xuICAgICAgICAgICAgICAgICAgICBjaCA9ICc6bGFzdC1jaGlsZCc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2ggPSBgOm50aC1jaGlsZCgke2N9KWA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogQnkgZGVmYXVsdCB3ZSBpbmNsdWRlIHRhZyBuYW1lIGFuZCBlbGVtZW50IGNsYXNzZXMgdG8gc2VsZWN0b3IgZm9yIGVsZW1lbnQgd2l0aG91dCBpZCBhdHRyaWJ1dGVcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBpZiAoZWwgPT09IGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHAgPSBtYWtlRGVmYXVsdENzc0ZpbHRlcihcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhjbHVkZVRhZ05hbWVPdmVycmlkZSA/IGV4Y2x1ZGVUYWdOYW1lIDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBleGNsdWRlSWQsXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHAgKz0gY2g7XG4gICAgICAgICAgICAgICAgICAgIHBhdGgudW5zaGlmdChwKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwYXRoLnVuc2hpZnQobWFrZURlZmF1bHRDc3NGaWx0ZXIoZWwsIGVsLmNsYXNzTGlzdCwgZmFsc2UsIGZhbHNlKSArIGNoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlbCA9IGVsLnBhcmVudE5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGguam9pbignID4gJyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdHMgY3NzIHNlbGVjdG9yIGJ5IGNvbWJpbmluZyBjbGFzc2VzIGJ5IEFORC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBjbGFzc0xpc3RcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgY29uc3QgY29uc3RydWN0Q2xhc3NDc3NTZWxlY3RvckJ5QU5EID0gZnVuY3Rpb24gKGNsYXNzTGlzdCkge1xuICAgICAgICBjb25zdCBzZWxlY3RvcnMgPSBbXTtcbiAgICAgICAgaWYgKGNsYXNzTGlzdCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjbGFzc0xpc3QubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcnMucHVzaChgLiR7Q1NTLmVzY2FwZShjbGFzc0xpc3RbaV0pfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZWxlY3RvcnMuam9pbignJyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdHMgY3NzIHNlbGVjdG9yIGJ5IGNvbWJpbmluZyBjbGFzc2VzIGJ5IE9SLlxuICAgICAqXG4gICAgICogQHBhcmFtIGNsYXNzTGlzdFxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBjb25zdCBjb25zdHJ1Y3RDbGFzc0Nzc1NlbGVjdG9yQnlPUiA9IGZ1bmN0aW9uIChjbGFzc0xpc3QpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0b3JzID0gW107XG4gICAgICAgIGlmIChjbGFzc0xpc3QpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2xhc3NMaXN0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3JzLnB1c2goYC4ke0NTUy5lc2NhcGUoY2xhc3NMaXN0W2ldKX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VsZWN0b3JzLmpvaW4oJywgJyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdHMgZWxlbWVudCBzZWxlY3RvciBmb3IgbWF0Y2hpbmcgZWxlbWVudHMgdGhhdCBjb250YWluIGFueSBvZiBjbGFzc2VzIGluIG9yaWdpbmFsIGVsZW1lbnRcbiAgICAgKiBGb3IgZXhhbXBsZSA8ZWwgY2xhc3M9XCJjbDEgY2wyIGNsM1wiPjwvZWw+ID0+IC5jbDEsIC5jbDIsIC5jbDNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbGVtZW50IEVsZW1lbnRcbiAgICAgKiBAcGFyYW0gY2xhc3NMaXN0IE92ZXJyaWRlIGVsZW1lbnQgY2xhc3NlcyAoSWYgY2xhc3NMaXN0IGlzIG51bGwsIGVsZW1lbnQgY2xhc3NlcyB3aWxsIGJlIHVzZWQpXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGNvbnN0IG1ha2VTaW1pbGFyQ3NzRmlsdGVyID0gZnVuY3Rpb24gKGVsZW1lbnQsIGNsYXNzTGlzdCkge1xuICAgICAgICByZXR1cm4gY29uc3RydWN0Q2xhc3NDc3NTZWxlY3RvckJ5T1IoY2xhc3NMaXN0IHx8IGVsZW1lbnQuY2xhc3NMaXN0KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBjc3MgcnVsZSB0ZXh0LlxuICAgICAqXG4gICAgICogQHBhcmFtIGVsZW1lbnQgRWxlbWVudFxuICAgICAqIEBwYXJhbSBvcHRpb25zIENvbnN0cnVjdCBvcHRpb25zLlxuICAgICAqIEZvciBleGFtcGxlOiB7Y3NzU2VsZWN0b3JUeXBlOiAnU1RSSUNUX0ZVTEwnLCBleGNsdWRlVGFnTmFtZTogZmFsc2UsIGV4Y2x1ZGVJZDogZmFsc2UsIGNsYXNzTGlzdDogW119XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGNvbnN0IGNvbnN0cnVjdENzc1J1bGVUZXh0ID0gZnVuY3Rpb24gKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgY29uc3QgY3NzU2VsZWN0b3JUeXBlID0gb3B0aW9ucy5jc3NTZWxlY3RvclR5cGUgfHwgJ1NUUklDVF9GVUxMJztcblxuICAgICAgICBsZXQgc2VsZWN0b3I7XG4gICAgICAgIHN3aXRjaCAoY3NzU2VsZWN0b3JUeXBlKSB7XG4gICAgICAgICAgICBjYXNlICdTVFJJQ1RfRlVMTCc6XG4gICAgICAgICAgICAgICAgc2VsZWN0b3IgPSBtYWtlQ3NzTnRoQ2hpbGRGaWx0ZXIoZWxlbWVudCwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdTVFJJQ1QnOlxuICAgICAgICAgICAgICAgIHNlbGVjdG9yID0gbWFrZURlZmF1bHRDc3NGaWx0ZXIoZWxlbWVudCwgb3B0aW9ucy5jbGFzc0xpc3QsIG9wdGlvbnMuZXhjbHVkZVRhZ05hbWUsIG9wdGlvbnMuZXhjbHVkZUlkKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1NJTUlMQVInOlxuICAgICAgICAgICAgICAgIHNlbGVjdG9yID0gbWFrZVNpbWlsYXJDc3NGaWx0ZXIoZWxlbWVudCwgb3B0aW9ucy5jbGFzc0xpc3QsIHRydWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc2VsZWN0b3IgPyBDU1NfUlVMRV9NQVJLICsgc2VsZWN0b3IgOiAnJztcbiAgICB9O1xuXG4gICAgY29uc3QgaXNWYWxpZFVybCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIGxpbmtIZWxwZXIuaHJlZiA9IHZhbHVlO1xuICAgICAgICAgICAgaWYgKGxpbmtIZWxwZXIuaG9zdG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGF2ZVVybEJsb2NrUGFyYW1ldGVyID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBnZXRVcmxCbG9ja0F0dHJpYnV0ZShlbGVtZW50KTtcbiAgICAgICAgcmV0dXJuIHZhbHVlICYmIHZhbHVlICE9PSAnJztcbiAgICB9O1xuXG4gICAgY29uc3QgaGF2ZUNsYXNzQXR0cmlidXRlID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuY2xhc3NMaXN0ICYmIGVsZW1lbnQuY2xhc3NMaXN0Lmxlbmd0aCA+IDA7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhdmVJZEF0dHJpYnV0ZSA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LmlkICYmIGVsZW1lbnQuaWQudHJpbSgpICE9PSAnJztcbiAgICB9O1xuXG4gICAgY29uc3QgY3JvcERvbWFpbiA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgY29uc3QgZG9tYWluID0gZ2V0VXJsKHVybCkuaG9zdDtcbiAgICAgICAgcmV0dXJuIGRvbWFpbi5yZXBsYWNlKCd3d3cuJywgJycpLnJlcGxhY2UoLzpcXGQrLywgJycpO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRVcmwgPSBmdW5jdGlvbiAodXJsKSB7XG4gICAgICAgIGNvbnN0IHBhdHRlcm4gPSAnXigoW146L1xcXFw/I10rKTopPygvLygoW146L1xcXFw/I10qKSg/OjooW14vXFxcXD8jXSopKT8pKT8oW15cXFxcPyNdKikoXFxcXD8oW14jXSopKT8oIyguKikpPyQnO1xuICAgICAgICBjb25zdCByeCA9IG5ldyBSZWdFeHAocGF0dGVybik7XG4gICAgICAgIGNvbnN0IHBhcnRzID0gcnguZXhlYyh1cmwpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBob3N0OiBwYXJ0c1s0XSB8fCAnJyxcbiAgICAgICAgICAgIHBhdGg6IHBhcnRzWzddIHx8ICcnLFxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBjb25zdCBjb25zdHJ1Y3RVcmxCbG9ja1J1bGVUZXh0ID0gZnVuY3Rpb24gKGVsZW1lbnQsIHVybEJsb2NrQXR0cmlidXRlLCBvbmVEb21haW4sIGRvbWFpbikge1xuICAgICAgICBpZiAoIXVybEJsb2NrQXR0cmlidXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBibG9ja1VybFJ1bGVUZXh0ID0gdXJsQmxvY2tBdHRyaWJ1dGUucmVwbGFjZSgvXmh0dHA6XFwvXFwvKHd3d1xcLik/LywgJ3x8Jyk7XG4gICAgICAgIGlmIChibG9ja1VybFJ1bGVUZXh0LmluZGV4T2YoJy4nKSA9PT0gMCkge1xuICAgICAgICAgICAgYmxvY2tVcmxSdWxlVGV4dCA9IGJsb2NrVXJsUnVsZVRleHQuc3Vic3RyaW5nKDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFvbmVEb21haW4pIHtcbiAgICAgICAgICAgIGJsb2NrVXJsUnVsZVRleHQgPSBgJHtibG9ja1VybFJ1bGVUZXh0ICsgUlVMRV9PUFRJT05TX01BUkt9ZG9tYWluPSR7ZG9tYWlufWA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYmxvY2tVcmxSdWxlVGV4dDtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0VXJsQmxvY2tBdHRyaWJ1dGUgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBpZiAoIWVsZW1lbnQgfHwgIWVsZW1lbnQuZ2V0QXR0cmlidXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgVVJMQkxPQ0tfQVRUUklCVVRFUy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgY29uc3QgYXR0ciA9IFVSTEJMT0NLX0FUVFJJQlVURVNbaV07XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHIpO1xuICAgICAgICAgICAgaWYgKGlzVmFsaWRVcmwodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgZGV0YWlsZWQgZWxlbWVudCBpbmZvLlxuICAgICAqXG4gICAgICogQHBhcmFtIGVsZW1lbnRcbiAgICAgKi9cbiAgICBjb25zdCBnZXRFbGVtZW50SW5mbyA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIC8vIENvbnZlcnQgYXR0cmlidXRlcyB0byBhcnJheVxuICAgICAgICBjb25zdCBhdHRyaWJ1dGVzID0gW107XG4gICAgICAgIGNvbnN0IGVsZW1lbnRBdHRyaWJ1dGVzID0gZWxlbWVudC5hdHRyaWJ1dGVzO1xuICAgICAgICBpZiAoZWxlbWVudEF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudEF0dHJpYnV0ZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhdHRyID0gZWxlbWVudEF0dHJpYnV0ZXNbaV07XG4gICAgICAgICAgICAgICAgYXR0cmlidXRlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogYXR0ci5uYW1lLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYXR0ci52YWx1ZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0YWdOYW1lOiBlbGVtZW50LnRhZ05hbWUsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzLFxuICAgICAgICAgICAgdXJsQmxvY2tBdHRyaWJ1dGVWYWx1ZTogZ2V0VXJsQmxvY2tBdHRyaWJ1dGUoZWxlbWVudCksXG4gICAgICAgICAgICBoYXZlVXJsQmxvY2tQYXJhbWV0ZXI6IGhhdmVVcmxCbG9ja1BhcmFtZXRlcihlbGVtZW50KSxcbiAgICAgICAgICAgIGhhdmVDbGFzc0F0dHJpYnV0ZTogaGF2ZUNsYXNzQXR0cmlidXRlKGVsZW1lbnQpLFxuICAgICAgICAgICAgaGF2ZUlkQXR0cmlidXRlOiBoYXZlSWRBdHRyaWJ1dGUoZWxlbWVudCksXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdHMgY3NzIHNlbGVjdG9yIGZvciBzcGVjaWZpZWQgcnVsZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBydWxlVGV4dCBydWxlIHRleHRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IGNzcyBzdHlsZSBzZWxlY3RvclxuICAgICAqL1xuICAgIGNvbnN0IGNvbnN0cnVjdFJ1bGVDc3NTZWxlY3RvciA9IGZ1bmN0aW9uIChydWxlVGV4dCkge1xuICAgICAgICBpZiAoIXJ1bGVUZXh0KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGluZGV4ID0gcnVsZVRleHQuaW5kZXhPZihDU1NfUlVMRV9NQVJLKTtcbiAgICAgICAgY29uc3Qgb3B0aW9uc0luZGV4ID0gcnVsZVRleHQuaW5kZXhPZihSVUxFX09QVElPTlNfTUFSSyk7XG5cbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICAgIHJldHVybiBydWxlVGV4dC5zdWJzdHJpbmcoaW5kZXggKyBDU1NfUlVMRV9NQVJLLmxlbmd0aCwgb3B0aW9uc0luZGV4ID49IDAgPyBvcHRpb25zSW5kZXggOiBydWxlVGV4dC5sZW5ndGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHMgPSBydWxlVGV4dC5zdWJzdHJpbmcoMCwgb3B0aW9uc0luZGV4KTtcbiAgICAgICAgcyA9IHMucmVwbGFjZSgvW1xcfF18W1xcXl0vZywgJycpO1xuXG4gICAgICAgIGlmIChpc1ZhbGlkVXJsKHMpKSB7XG4gICAgICAgICAgICByZXR1cm4gYFtzcmMqPVwiJHtzfVwiXWA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0cyBhZGd1YXJkIHJ1bGUgdGV4dCBmcm9tIGVsZW1lbnQgbm9kZSBhbmQgc3BlY2lmaWVkIG9wdGlvbnMuXG4gICAgICpcbiAgICAgKiB2YXIgb3B0aW9ucyA9IHtcbiAgICAgKiAgdXJsQmxvY2tBdHRyaWJ1dGU6IHVybCBtYXNrLFxuICAgICAqICBpc0Jsb2NrT25lRG9tYWluOiBib29sZWFuLFxuICAgICAqICB1cmw6IHVybCxcbiAgICAgKiAgYXR0cmlidXRlczogYXR0cmlidXRlc1NlbGVjdG9yVGV4dCxcbiAgICAgKiAgcnVsZVR5cGU6IChVUkwsIENTUylcbiAgICAgKiAgY3NzU2VsZWN0b3JUeXBlOiAoU1RSSUNUX0ZVTEwsIFNUUklDVCwgU0lNSUxBUiksXG4gICAgICogIGV4Y2x1ZGVUYWdOYW1lOiBmYWxzZSwgKEV4Y2x1ZGUgZWxlbWVudCB0YWcgbmFtZSBmcm9tIHNlbGVjdG9yKVxuICAgICAqICBleGNsdWRlSWQ6IGZhbHNlLCAoRXhjbHVkZSBlbGVtZW50IGlkZW50aWZpZXIgZnJvbSBzZWxlY3RvcilcbiAgICAgKiAgY2xhc3NMaXN0OiBbXSAoT3ZlcnJpZGUgZWxlbWVudCBjbGFzc2VzIChJZiBjbGFzc0xpc3QgaXMgbnVsbCwgZWxlbWVudCBjbGFzc2VzIHdpbGwgYmUgdXNlZCkpXG4gICAgICogfVxuICAgICAqXG4gICAgICogQHBhcmFtIGVsZW1lbnRcbiAgICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgICAqXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgY29uc3QgY29uc3RydWN0UnVsZVRleHQgPSBmdW5jdGlvbiAoZWxlbWVudCwgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBjcm9wcGVkRG9tYWluID0gY3JvcERvbWFpbihvcHRpb25zLnVybCk7XG5cbiAgICAgICAgY29uc3QgeyBydWxlVHlwZSB9ID0gb3B0aW9ucztcblxuICAgICAgICBpZiAocnVsZVR5cGUgPT09ICdVUkwnKSB7XG4gICAgICAgICAgICBjb25zdCBibG9ja1VybFJ1bGVUZXh0ID0gY29uc3RydWN0VXJsQmxvY2tSdWxlVGV4dChcbiAgICAgICAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgICAgICAgIG9wdGlvbnMudXJsTWFzayxcbiAgICAgICAgICAgICAgICBvcHRpb25zLmlzQmxvY2tPbmVEb21haW4sXG4gICAgICAgICAgICAgICAgY3JvcHBlZERvbWFpbixcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoYmxvY2tVcmxSdWxlVGV4dCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBibG9ja1VybFJ1bGVUZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJlc3VsdDtcblxuICAgICAgICBpZiAocnVsZVR5cGUgPT09ICdDU1MnKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBjb25zdHJ1Y3RDc3NSdWxlVGV4dChlbGVtZW50LCBvcHRpb25zKTtcblxuICAgICAgICAgICAgLy8gQXBwZW5kIGh0bWwgYXR0cmlidXRlcyB0byBjc3Mgc2VsZWN0b3JcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAocmVzdWx0IHx8IENTU19SVUxFX01BUksgKyByZXN1bHQpICsgb3B0aW9ucy5hdHRyaWJ1dGVzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFvcHRpb25zLmlzQmxvY2tPbmVEb21haW4pIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGNyb3BwZWREb21haW4gKyByZXN1bHQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRFbGVtZW50SW5mbyxcbiAgICAgICAgY29uc3RydWN0UnVsZUNzc1NlbGVjdG9yLFxuICAgICAgICBjb25zdHJ1Y3RSdWxlVGV4dCxcbiAgICB9O1xufSkoKTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LTIwMjUgQWRndWFyZCBTb2Z0d2FyZSBMdGQuXG4gKlxuICogQGZpbGVcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEFkR3VhcmQgQnJvd3NlciBFeHRlbnNpb24gKGh0dHBzOi8vZ2l0aHViLmNvbS9BZGd1YXJkVGVhbS9BZGd1YXJkQnJvd3NlckV4dGVuc2lvbikuXG4gKlxuICogQWRHdWFyZCBCcm93c2VyIEV4dGVuc2lvbiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogQWRHdWFyZCBCcm93c2VyIEV4dGVuc2lvbiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBBZEd1YXJkIEJyb3dzZXIgRXh0ZW5zaW9uLiBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cblxuaW1wb3J0IHsgRGV2VG9vbHNSdWxlc0NvbnN0cnVjdG9yIH0gZnJvbSAnLi9kZXZ0b29scy1ydWxlcy1jb25zdHJ1Y3Rvcic7XG5pbXBvcnQgeyBEZXZUb29sc0hlbHBlciB9IGZyb20gJy4vZGV2dG9vbHMtaGVscGVyJztcblxuY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgICB3aW5kb3cuRGV2VG9vbHNSdWxlc0NvbnN0cnVjdG9yID0gRGV2VG9vbHNSdWxlc0NvbnN0cnVjdG9yO1xuICAgIHdpbmRvdy5EZXZUb29sc0hlbHBlciA9IERldlRvb2xzSGVscGVyO1xufTtcblxuZXhwb3J0IGNvbnN0IGRldnRvb2xzID0ge1xuICAgIGluaXQsXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNS0yMDI1IEFkZ3VhcmQgU29mdHdhcmUgTHRkLlxuICpcbiAqIEBmaWxlXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBBZEd1YXJkIEJyb3dzZXIgRXh0ZW5zaW9uIChodHRwczovL2dpdGh1Yi5jb20vQWRndWFyZFRlYW0vQWRndWFyZEJyb3dzZXJFeHRlbnNpb24pLlxuICpcbiAqIEFkR3VhcmQgQnJvd3NlciBFeHRlbnNpb24gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIEFkR3VhcmQgQnJvd3NlciBFeHRlbnNpb24gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggQWRHdWFyZCBCcm93c2VyIEV4dGVuc2lvbi4gSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovIC8qKlxuICogIUlNUE9SVEFOVCBPbmx5IGNocm9tZSBiYXNlZCBicm93c2VycyBzdXBwb3J0IGRldnRvb2xzLCB3ZSBjdXQgb2ZmIGRldnRvb2xzIGZvciBvdGhlciBicm93c2Vyc1xuICpcbiAqIFRPRE86IFdlIGNhbiBtZXJnZSBjb250ZW50LXNjcmlwdC1lbmQgYW5kIGNvbnRlbnQtc2NyaXB0LXN0YXJ0IGludG8gb25lIGZpbGUsXG4gKiBiZWNhdXNlIGNvbnRlbnQtc2NyaXB0LWVuZCBoYXMgNTBrYiB3aGlsZSBjb250ZW50LXNjcmlwdC1zdGFydCBoYXMgNTAwa2IgLSBzb1xuICogaXQgd291bGQgbm90IHNpZ25pZmljYW50bHkgaW5jcmVhc2UgdGhlIHNpemUgb2YgdGhlIGNvbnRlbnQtc2NyaXB0IGZpbGUuXG4gKi8gaW1wb3J0IHsgZGV2dG9vbHMgfSBmcm9tICcuLi8uLi9zcmMvY29udGVudC1zY3JpcHQvZGV2dG9vbHMvZGV2dG9vbHMnO1xuZGV2dG9vbHMuaW5pdCgpOyJdLCJuYW1lcyI6WyJEZXZUb29sc1J1bGVzQ29uc3RydWN0b3IiLCJEZXZUb29sc0hlbHBlciIsIlBSRVZJRVdfU1RZTEVfSUQiLCJhcHBseVByZXZpZXciLCJvcHRpb25zIiwicnVsZVRleHQiLCJoZWFkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInNlbGVjdG9yIiwiY29uc3RydWN0UnVsZUNzc1NlbGVjdG9yIiwic3R5bGUiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsImNhbmNlbFByZXZpZXciLCJnZXRFbGVtZW50QnlJZCIsInJlbW92ZUNoaWxkIiwiQ1NTX1JVTEVfTUFSSyIsIlJVTEVfT1BUSU9OU19NQVJLIiwiVVJMQkxPQ0tfQVRUUklCVVRFUyIsImxpbmtIZWxwZXIiLCJtYWtlRGVmYXVsdENzc0ZpbHRlciIsImVsZW1lbnQiLCJjbGFzc0xpc3QiLCJleGNsdWRlVGFnTmFtZSIsImV4Y2x1ZGVJZCIsImNzc1NlbGVjdG9yIiwidGFnTmFtZSIsInRvTG93ZXJDYXNlIiwiaWQiLCJDU1MiLCJlc2NhcGUiLCJjb25zdHJ1Y3RDbGFzc0Nzc1NlbGVjdG9yQnlBTkQiLCJtYWtlQ3NzTnRoQ2hpbGRGaWx0ZXIiLCJleGNsdWRlVGFnTmFtZU92ZXJyaWRlIiwiZXhjbHVkZUlkT3ZlcnJpZGUiLCJwYXRoIiwiZWwiLCJwYXJlbnROb2RlIiwibm9kZU5hbWUiLCJ0b1VwcGVyQ2FzZSIsImxlbmd0aCIsImJvZHlTZWxlY3RvciIsInVuc2hpZnQiLCJjIiwiZSIsInByZXZpb3VzU2libGluZyIsIm5vZGVUeXBlIiwiY2xkQ291bnQiLCJpIiwiY2hpbGROb2RlcyIsImNoIiwicCIsImpvaW4iLCJzZWxlY3RvcnMiLCJwdXNoIiwiY29uc3RydWN0Q2xhc3NDc3NTZWxlY3RvckJ5T1IiLCJtYWtlU2ltaWxhckNzc0ZpbHRlciIsImNvbnN0cnVjdENzc1J1bGVUZXh0IiwiY3NzU2VsZWN0b3JUeXBlIiwiaXNWYWxpZFVybCIsInZhbHVlIiwiaHJlZiIsImhvc3RuYW1lIiwiaGF2ZVVybEJsb2NrUGFyYW1ldGVyIiwiZ2V0VXJsQmxvY2tBdHRyaWJ1dGUiLCJoYXZlQ2xhc3NBdHRyaWJ1dGUiLCJoYXZlSWRBdHRyaWJ1dGUiLCJ0cmltIiwiY3JvcERvbWFpbiIsInVybCIsImRvbWFpbiIsImdldFVybCIsImhvc3QiLCJyZXBsYWNlIiwicGF0dGVybiIsInJ4IiwiUmVnRXhwIiwicGFydHMiLCJleGVjIiwiY29uc3RydWN0VXJsQmxvY2tSdWxlVGV4dCIsInVybEJsb2NrQXR0cmlidXRlIiwib25lRG9tYWluIiwiYmxvY2tVcmxSdWxlVGV4dCIsImluZGV4T2YiLCJzdWJzdHJpbmciLCJnZXRBdHRyaWJ1dGUiLCJhdHRyIiwiZ2V0RWxlbWVudEluZm8iLCJhdHRyaWJ1dGVzIiwiZWxlbWVudEF0dHJpYnV0ZXMiLCJuYW1lIiwidXJsQmxvY2tBdHRyaWJ1dGVWYWx1ZSIsImluZGV4Iiwib3B0aW9uc0luZGV4IiwicyIsImNvbnN0cnVjdFJ1bGVUZXh0IiwiY3JvcHBlZERvbWFpbiIsInJ1bGVUeXBlIiwidXJsTWFzayIsImlzQmxvY2tPbmVEb21haW4iLCJyZXN1bHQiLCJpbml0Iiwid2luZG93IiwiZGV2dG9vbHMiXSwic291cmNlUm9vdCI6IiJ9