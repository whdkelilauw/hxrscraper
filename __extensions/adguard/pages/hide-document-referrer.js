/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/.pnpm/@adguard+tswebextension@3.2.19_@adguard+re2-wasm@1.2.0/node_modules/@adguard/tswebextension/dist/common/stealth-helper.js":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@adguard+tswebextension@3.2.19_@adguard+re2-wasm@1.2.0/node_modules/@adguard/tswebextension/dist/common/stealth-helper.js ***!
  \******************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ StealthHelper)
/* harmony export */ });
// Disable vi coverage for this file, because it will insert
// line comments, and code to count lines covered by tests, for example:
// /* istanbul ignore next */
// cov_uqm40oh03().f[0]++;
// cov_uqm40oh03().s[2]++;
// And we cannot test these strings correctly, because the names of these
// functions with counters are generated at runtime
/* istanbul ignore file */ /**
 * This module applies stealth actions in page context.
 */ class StealthHelper {
    /**
     * Sends a Global Privacy Control DOM signal.
     */ static setDomSignal() {
        try {
            if ('globalPrivacyControl' in Navigator.prototype) {
                return;
            }
            Object.defineProperty(Navigator.prototype, 'globalPrivacyControl', {
                get: ()=>true,
                configurable: true,
                enumerable: true
            });
        } catch (ex) {
        // Ignore
        }
    }
    /**
     * Hides document referrer by returning the current document's origin.
     */ static hideDocumentReferrer() {
        const origDescriptor = Object.getOwnPropertyDescriptor(Document.prototype, 'referrer');
        if (!origDescriptor || !origDescriptor.get || !origDescriptor.configurable) {
            return;
        }
        const returnCurrentOriginFunc = ()=>{
            // Return the origin dynamically each time it's accessed
            return document.location.origin;
        };
        // Protect getter from native code check (important!)
        // Use the original getter's toString for this protection.
        returnCurrentOriginFunc.toString = origDescriptor.get.toString.bind(origDescriptor.get);
        Object.defineProperty(Document.prototype, 'referrer', {
            get: returnCurrentOriginFunc
        });
    }
}



/***/ }),

/***/ "./node_modules/.pnpm/@adguard+tswebextension@3.2.19_@adguard+re2-wasm@1.2.0/node_modules/@adguard/tswebextension/dist/hide-document-referrer.mv3.js":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@adguard+tswebextension@3.2.19_@adguard+re2-wasm@1.2.0/node_modules/@adguard/tswebextension/dist/hide-document-referrer.mv3.js ***!
  \***********************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _common_stealth_helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/stealth-helper.js */ "./node_modules/.pnpm/@adguard+tswebextension@3.2.19_@adguard+re2-wasm@1.2.0/node_modules/@adguard/tswebextension/dist/common/stealth-helper.js");

/**
 * @typedef {import('../background/services/stealth-service').StealthService} StealthService
 */ /**
 * @file
 * IMPORTANT: This file should be listed inside 'sideEffects' field
 * in the package.json, because it has side effects: we do not export anything
 * from it outside, just evaluate the code (via injection).
 *
 * We will inject this script dynamically via `scripting.registerContentScripts`
 * inside {@link StealthService.setContentScript}.
 */ _common_stealth_helper_js__WEBPACK_IMPORTED_MODULE_0__.S.hideDocumentReferrer();


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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*********************************************************!*\
  !*** ./Extension/pages/hide-document-referrer/index.ts ***!
  \*********************************************************/
/* harmony import */ var _adguard_tswebextension_mv3_hide_document_referrer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @adguard/tswebextension/mv3/hide-document-referrer */ "./node_modules/.pnpm/@adguard+tswebextension@3.2.19_@adguard+re2-wasm@1.2.0/node_modules/@adguard/tswebextension/dist/hide-document-referrer.mv3.js");
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
 * We do not inject this scripts manually from extension, because it will be
 * dynamically registered and unregistered by the tswebextension when the
 * stealth option is enabled/disabled.
 */ 

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvaGlkZS1kb2N1bWVudC1yZWZlcnJlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsNERBQTREO0FBQzVELHdFQUF3RTtBQUN4RSw2QkFBNkI7QUFDN0IsMEJBQTBCO0FBQzFCLDBCQUEwQjtBQUMxQix5RUFBeUU7QUFDekUsbURBQW1EO0FBQ25ELHdCQUF3QixHQUN4Qjs7Q0FFQyxHQUNELE1BQU1BO0lBQ0Y7O0tBRUMsR0FDRCxPQUFPQyxlQUFlO1FBQ2xCLElBQUk7WUFDQSxJQUFJLDBCQUEwQkMsVUFBVUMsU0FBUyxFQUFFO2dCQUMvQztZQUNKO1lBQ0FDLE9BQU9DLGNBQWMsQ0FBQ0gsVUFBVUMsU0FBUyxFQUFFLHdCQUF3QjtnQkFDL0RHLEtBQUssSUFBTTtnQkFDWEMsY0FBYztnQkFDZEMsWUFBWTtZQUNoQjtRQUNKLEVBQ0EsT0FBT0MsSUFBSTtRQUNQLFNBQVM7UUFDYjtJQUNKO0lBQ0E7O0tBRUMsR0FDRCxPQUFPQyx1QkFBdUI7UUFDMUIsTUFBTUMsaUJBQWlCUCxPQUFPUSx3QkFBd0IsQ0FBQ0MsU0FBU1YsU0FBUyxFQUFFO1FBQzNFLElBQUksQ0FBQ1Esa0JBQWtCLENBQUNBLGVBQWVMLEdBQUcsSUFBSSxDQUFDSyxlQUFlSixZQUFZLEVBQUU7WUFDeEU7UUFDSjtRQUNBLE1BQU1PLDBCQUEwQjtZQUM1Qix3REFBd0Q7WUFDeEQsT0FBT0MsU0FBU0MsUUFBUSxDQUFDQyxNQUFNO1FBQ25DO1FBQ0EscURBQXFEO1FBQ3JELDBEQUEwRDtRQUMxREgsd0JBQXdCSSxRQUFRLEdBQUdQLGVBQWVMLEdBQUcsQ0FBQ1ksUUFBUSxDQUFDQyxJQUFJLENBQUNSLGVBQWVMLEdBQUc7UUFDdEZGLE9BQU9DLGNBQWMsQ0FBQ1EsU0FBU1YsU0FBUyxFQUFFLFlBQVk7WUFDbERHLEtBQUtRO1FBQ1Q7SUFDSjtBQUNKO0FBRThCOzs7Ozs7Ozs7Ozs7QUNuRGtDO0FBRWhFOztDQUVDLEdBQ0Q7Ozs7Ozs7O0NBUUMsR0FDRGQsd0RBQWFBLENBQUNVLG9CQUFvQjs7Ozs7OztVQ2RsQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FrQkMsR0FFRDs7OztDQUlDLEdBQzJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvLnBucG0vQGFkZ3VhcmQrdHN3ZWJleHRlbnNpb25AMy4yLjE5X0BhZGd1YXJkK3JlMi13YXNtQDEuMi4wL25vZGVfbW9kdWxlcy9AYWRndWFyZC90c3dlYmV4dGVuc2lvbi9kaXN0L2NvbW1vbi9zdGVhbHRoLWhlbHBlci5qcyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy8ucG5wbS9AYWRndWFyZCt0c3dlYmV4dGVuc2lvbkAzLjIuMTlfQGFkZ3VhcmQrcmUyLXdhc21AMS4yLjAvbm9kZV9tb2R1bGVzL0BhZGd1YXJkL3Rzd2ViZXh0ZW5zaW9uL2Rpc3QvaGlkZS1kb2N1bWVudC1yZWZlcnJlci5tdjMuanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Jyb3dzZXItZXh0ZW5zaW9uL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi9FeHRlbnNpb24vcGFnZXMvaGlkZS1kb2N1bWVudC1yZWZlcnJlci9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEaXNhYmxlIHZpIGNvdmVyYWdlIGZvciB0aGlzIGZpbGUsIGJlY2F1c2UgaXQgd2lsbCBpbnNlcnRcbi8vIGxpbmUgY29tbWVudHMsIGFuZCBjb2RlIHRvIGNvdW50IGxpbmVzIGNvdmVyZWQgYnkgdGVzdHMsIGZvciBleGFtcGxlOlxuLy8gLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbi8vIGNvdl91cW00MG9oMDMoKS5mWzBdKys7XG4vLyBjb3ZfdXFtNDBvaDAzKCkuc1syXSsrO1xuLy8gQW5kIHdlIGNhbm5vdCB0ZXN0IHRoZXNlIHN0cmluZ3MgY29ycmVjdGx5LCBiZWNhdXNlIHRoZSBuYW1lcyBvZiB0aGVzZVxuLy8gZnVuY3Rpb25zIHdpdGggY291bnRlcnMgYXJlIGdlbmVyYXRlZCBhdCBydW50aW1lXG4vKiBpc3RhbmJ1bCBpZ25vcmUgZmlsZSAqL1xuLyoqXG4gKiBUaGlzIG1vZHVsZSBhcHBsaWVzIHN0ZWFsdGggYWN0aW9ucyBpbiBwYWdlIGNvbnRleHQuXG4gKi9cbmNsYXNzIFN0ZWFsdGhIZWxwZXIge1xuICAgIC8qKlxuICAgICAqIFNlbmRzIGEgR2xvYmFsIFByaXZhY3kgQ29udHJvbCBET00gc2lnbmFsLlxuICAgICAqL1xuICAgIHN0YXRpYyBzZXREb21TaWduYWwoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoJ2dsb2JhbFByaXZhY3lDb250cm9sJyBpbiBOYXZpZ2F0b3IucHJvdG90eXBlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE5hdmlnYXRvci5wcm90b3R5cGUsICdnbG9iYWxQcml2YWN5Q29udHJvbCcsIHtcbiAgICAgICAgICAgICAgICBnZXQ6ICgpID0+IHRydWUsXG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgIC8vIElnbm9yZVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEhpZGVzIGRvY3VtZW50IHJlZmVycmVyIGJ5IHJldHVybmluZyB0aGUgY3VycmVudCBkb2N1bWVudCdzIG9yaWdpbi5cbiAgICAgKi9cbiAgICBzdGF0aWMgaGlkZURvY3VtZW50UmVmZXJyZXIoKSB7XG4gICAgICAgIGNvbnN0IG9yaWdEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihEb2N1bWVudC5wcm90b3R5cGUsICdyZWZlcnJlcicpO1xuICAgICAgICBpZiAoIW9yaWdEZXNjcmlwdG9yIHx8ICFvcmlnRGVzY3JpcHRvci5nZXQgfHwgIW9yaWdEZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJldHVybkN1cnJlbnRPcmlnaW5GdW5jID0gKCkgPT4ge1xuICAgICAgICAgICAgLy8gUmV0dXJuIHRoZSBvcmlnaW4gZHluYW1pY2FsbHkgZWFjaCB0aW1lIGl0J3MgYWNjZXNzZWRcbiAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5sb2NhdGlvbi5vcmlnaW47XG4gICAgICAgIH07XG4gICAgICAgIC8vIFByb3RlY3QgZ2V0dGVyIGZyb20gbmF0aXZlIGNvZGUgY2hlY2sgKGltcG9ydGFudCEpXG4gICAgICAgIC8vIFVzZSB0aGUgb3JpZ2luYWwgZ2V0dGVyJ3MgdG9TdHJpbmcgZm9yIHRoaXMgcHJvdGVjdGlvbi5cbiAgICAgICAgcmV0dXJuQ3VycmVudE9yaWdpbkZ1bmMudG9TdHJpbmcgPSBvcmlnRGVzY3JpcHRvci5nZXQudG9TdHJpbmcuYmluZChvcmlnRGVzY3JpcHRvci5nZXQpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRG9jdW1lbnQucHJvdG90eXBlLCAncmVmZXJyZXInLCB7XG4gICAgICAgICAgICBnZXQ6IHJldHVybkN1cnJlbnRPcmlnaW5GdW5jLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IFN0ZWFsdGhIZWxwZXIgYXMgUyB9O1xuIiwiaW1wb3J0IHsgUyBhcyBTdGVhbHRoSGVscGVyIH0gZnJvbSAnLi9jb21tb24vc3RlYWx0aC1oZWxwZXIuanMnO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL2JhY2tncm91bmQvc2VydmljZXMvc3RlYWx0aC1zZXJ2aWNlJykuU3RlYWx0aFNlcnZpY2V9IFN0ZWFsdGhTZXJ2aWNlXG4gKi9cbi8qKlxuICogQGZpbGVcbiAqIElNUE9SVEFOVDogVGhpcyBmaWxlIHNob3VsZCBiZSBsaXN0ZWQgaW5zaWRlICdzaWRlRWZmZWN0cycgZmllbGRcbiAqIGluIHRoZSBwYWNrYWdlLmpzb24sIGJlY2F1c2UgaXQgaGFzIHNpZGUgZWZmZWN0czogd2UgZG8gbm90IGV4cG9ydCBhbnl0aGluZ1xuICogZnJvbSBpdCBvdXRzaWRlLCBqdXN0IGV2YWx1YXRlIHRoZSBjb2RlICh2aWEgaW5qZWN0aW9uKS5cbiAqXG4gKiBXZSB3aWxsIGluamVjdCB0aGlzIHNjcmlwdCBkeW5hbWljYWxseSB2aWEgYHNjcmlwdGluZy5yZWdpc3RlckNvbnRlbnRTY3JpcHRzYFxuICogaW5zaWRlIHtAbGluayBTdGVhbHRoU2VydmljZS5zZXRDb250ZW50U2NyaXB0fS5cbiAqL1xuU3RlYWx0aEhlbHBlci5oaWRlRG9jdW1lbnRSZWZlcnJlcigpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNS0yMDI1IEFkZ3VhcmQgU29mdHdhcmUgTHRkLlxuICpcbiAqIEBmaWxlXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBBZEd1YXJkIEJyb3dzZXIgRXh0ZW5zaW9uIChodHRwczovL2dpdGh1Yi5jb20vQWRndWFyZFRlYW0vQWRndWFyZEJyb3dzZXJFeHRlbnNpb24pLlxuICpcbiAqIEFkR3VhcmQgQnJvd3NlciBFeHRlbnNpb24gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIEFkR3VhcmQgQnJvd3NlciBFeHRlbnNpb24gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggQWRHdWFyZCBCcm93c2VyIEV4dGVuc2lvbi4gSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5cbi8qKlxuICogV2UgZG8gbm90IGluamVjdCB0aGlzIHNjcmlwdHMgbWFudWFsbHkgZnJvbSBleHRlbnNpb24sIGJlY2F1c2UgaXQgd2lsbCBiZVxuICogZHluYW1pY2FsbHkgcmVnaXN0ZXJlZCBhbmQgdW5yZWdpc3RlcmVkIGJ5IHRoZSB0c3dlYmV4dGVuc2lvbiB3aGVuIHRoZVxuICogc3RlYWx0aCBvcHRpb24gaXMgZW5hYmxlZC9kaXNhYmxlZC5cbiAqL1xuaW1wb3J0ICdAYWRndWFyZC90c3dlYmV4dGVuc2lvbi9tdjMvaGlkZS1kb2N1bWVudC1yZWZlcnJlcic7XG4iXSwibmFtZXMiOlsiU3RlYWx0aEhlbHBlciIsInNldERvbVNpZ25hbCIsIk5hdmlnYXRvciIsInByb3RvdHlwZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsImV4IiwiaGlkZURvY3VtZW50UmVmZXJyZXIiLCJvcmlnRGVzY3JpcHRvciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIkRvY3VtZW50IiwicmV0dXJuQ3VycmVudE9yaWdpbkZ1bmMiLCJkb2N1bWVudCIsImxvY2F0aW9uIiwib3JpZ2luIiwidG9TdHJpbmciLCJiaW5kIiwiUyJdLCJzb3VyY2VSb290IjoiIn0=