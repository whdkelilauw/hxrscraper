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

/***/ "./node_modules/.pnpm/@adguard+tswebextension@3.2.19_@adguard+re2-wasm@1.2.0/node_modules/@adguard/tswebextension/dist/gpc.mv3.js":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@adguard+tswebextension@3.2.19_@adguard+re2-wasm@1.2.0/node_modules/@adguard/tswebextension/dist/gpc.mv3.js ***!
  \****************************************************************************************************************************************/
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
 */ _common_stealth_helper_js__WEBPACK_IMPORTED_MODULE_0__.S.setDomSignal();


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
/*!**************************************!*\
  !*** ./Extension/pages/gpc/index.ts ***!
  \**************************************/
/* harmony import */ var _adguard_tswebextension_mv3_gpc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @adguard/tswebextension/mv3/gpc */ "./node_modules/.pnpm/@adguard+tswebextension@3.2.19_@adguard+re2-wasm@1.2.0/node_modules/@adguard/tswebextension/dist/gpc.mv3.js");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvZ3BjLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSw0REFBNEQ7QUFDNUQsd0VBQXdFO0FBQ3hFLDZCQUE2QjtBQUM3QiwwQkFBMEI7QUFDMUIsMEJBQTBCO0FBQzFCLHlFQUF5RTtBQUN6RSxtREFBbUQ7QUFDbkQsd0JBQXdCLEdBQ3hCOztDQUVDLEdBQ0QsTUFBTUE7SUFDRjs7S0FFQyxHQUNELE9BQU9DLGVBQWU7UUFDbEIsSUFBSTtZQUNBLElBQUksMEJBQTBCQyxVQUFVQyxTQUFTLEVBQUU7Z0JBQy9DO1lBQ0o7WUFDQUMsT0FBT0MsY0FBYyxDQUFDSCxVQUFVQyxTQUFTLEVBQUUsd0JBQXdCO2dCQUMvREcsS0FBSyxJQUFNO2dCQUNYQyxjQUFjO2dCQUNkQyxZQUFZO1lBQ2hCO1FBQ0osRUFDQSxPQUFPQyxJQUFJO1FBQ1AsU0FBUztRQUNiO0lBQ0o7SUFDQTs7S0FFQyxHQUNELE9BQU9DLHVCQUF1QjtRQUMxQixNQUFNQyxpQkFBaUJQLE9BQU9RLHdCQUF3QixDQUFDQyxTQUFTVixTQUFTLEVBQUU7UUFDM0UsSUFBSSxDQUFDUSxrQkFBa0IsQ0FBQ0EsZUFBZUwsR0FBRyxJQUFJLENBQUNLLGVBQWVKLFlBQVksRUFBRTtZQUN4RTtRQUNKO1FBQ0EsTUFBTU8sMEJBQTBCO1lBQzVCLHdEQUF3RDtZQUN4RCxPQUFPQyxTQUFTQyxRQUFRLENBQUNDLE1BQU07UUFDbkM7UUFDQSxxREFBcUQ7UUFDckQsMERBQTBEO1FBQzFESCx3QkFBd0JJLFFBQVEsR0FBR1AsZUFBZUwsR0FBRyxDQUFDWSxRQUFRLENBQUNDLElBQUksQ0FBQ1IsZUFBZUwsR0FBRztRQUN0RkYsT0FBT0MsY0FBYyxDQUFDUSxTQUFTVixTQUFTLEVBQUUsWUFBWTtZQUNsREcsS0FBS1E7UUFDVDtJQUNKO0FBQ0o7QUFFOEI7Ozs7Ozs7Ozs7OztBQ25Ea0M7QUFFaEU7O0NBRUMsR0FDRDs7Ozs7Ozs7Q0FRQyxHQUNEZCx3REFBYUEsQ0FBQ0MsWUFBWTs7Ozs7OztVQ2QxQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FrQkMsR0FFRDs7OztDQUlDLEdBQ3dDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvLnBucG0vQGFkZ3VhcmQrdHN3ZWJleHRlbnNpb25AMy4yLjE5X0BhZGd1YXJkK3JlMi13YXNtQDEuMi4wL25vZGVfbW9kdWxlcy9AYWRndWFyZC90c3dlYmV4dGVuc2lvbi9kaXN0L2NvbW1vbi9zdGVhbHRoLWhlbHBlci5qcyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy8ucG5wbS9AYWRndWFyZCt0c3dlYmV4dGVuc2lvbkAzLjIuMTlfQGFkZ3VhcmQrcmUyLXdhc21AMS4yLjAvbm9kZV9tb2R1bGVzL0BhZGd1YXJkL3Rzd2ViZXh0ZW5zaW9uL2Rpc3QvZ3BjLm12My5qcyIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1leHRlbnNpb24vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9icm93c2VyLWV4dGVuc2lvbi8uL0V4dGVuc2lvbi9wYWdlcy9ncGMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRGlzYWJsZSB2aSBjb3ZlcmFnZSBmb3IgdGhpcyBmaWxlLCBiZWNhdXNlIGl0IHdpbGwgaW5zZXJ0XG4vLyBsaW5lIGNvbW1lbnRzLCBhbmQgY29kZSB0byBjb3VudCBsaW5lcyBjb3ZlcmVkIGJ5IHRlc3RzLCBmb3IgZXhhbXBsZTpcbi8vIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4vLyBjb3ZfdXFtNDBvaDAzKCkuZlswXSsrO1xuLy8gY292X3VxbTQwb2gwMygpLnNbMl0rKztcbi8vIEFuZCB3ZSBjYW5ub3QgdGVzdCB0aGVzZSBzdHJpbmdzIGNvcnJlY3RseSwgYmVjYXVzZSB0aGUgbmFtZXMgb2YgdGhlc2Vcbi8vIGZ1bmN0aW9ucyB3aXRoIGNvdW50ZXJzIGFyZSBnZW5lcmF0ZWQgYXQgcnVudGltZVxuLyogaXN0YW5idWwgaWdub3JlIGZpbGUgKi9cbi8qKlxuICogVGhpcyBtb2R1bGUgYXBwbGllcyBzdGVhbHRoIGFjdGlvbnMgaW4gcGFnZSBjb250ZXh0LlxuICovXG5jbGFzcyBTdGVhbHRoSGVscGVyIHtcbiAgICAvKipcbiAgICAgKiBTZW5kcyBhIEdsb2JhbCBQcml2YWN5IENvbnRyb2wgRE9NIHNpZ25hbC5cbiAgICAgKi9cbiAgICBzdGF0aWMgc2V0RG9tU2lnbmFsKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKCdnbG9iYWxQcml2YWN5Q29udHJvbCcgaW4gTmF2aWdhdG9yLnByb3RvdHlwZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOYXZpZ2F0b3IucHJvdG90eXBlLCAnZ2xvYmFsUHJpdmFjeUNvbnRyb2wnLCB7XG4gICAgICAgICAgICAgICAgZ2V0OiAoKSA9PiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICAvLyBJZ25vcmVcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBIaWRlcyBkb2N1bWVudCByZWZlcnJlciBieSByZXR1cm5pbmcgdGhlIGN1cnJlbnQgZG9jdW1lbnQncyBvcmlnaW4uXG4gICAgICovXG4gICAgc3RhdGljIGhpZGVEb2N1bWVudFJlZmVycmVyKCkge1xuICAgICAgICBjb25zdCBvcmlnRGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoRG9jdW1lbnQucHJvdG90eXBlLCAncmVmZXJyZXInKTtcbiAgICAgICAgaWYgKCFvcmlnRGVzY3JpcHRvciB8fCAhb3JpZ0Rlc2NyaXB0b3IuZ2V0IHx8ICFvcmlnRGVzY3JpcHRvci5jb25maWd1cmFibGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXR1cm5DdXJyZW50T3JpZ2luRnVuYyA9ICgpID0+IHtcbiAgICAgICAgICAgIC8vIFJldHVybiB0aGUgb3JpZ2luIGR5bmFtaWNhbGx5IGVhY2ggdGltZSBpdCdzIGFjY2Vzc2VkXG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQubG9jYXRpb24ub3JpZ2luO1xuICAgICAgICB9O1xuICAgICAgICAvLyBQcm90ZWN0IGdldHRlciBmcm9tIG5hdGl2ZSBjb2RlIGNoZWNrIChpbXBvcnRhbnQhKVxuICAgICAgICAvLyBVc2UgdGhlIG9yaWdpbmFsIGdldHRlcidzIHRvU3RyaW5nIGZvciB0aGlzIHByb3RlY3Rpb24uXG4gICAgICAgIHJldHVybkN1cnJlbnRPcmlnaW5GdW5jLnRvU3RyaW5nID0gb3JpZ0Rlc2NyaXB0b3IuZ2V0LnRvU3RyaW5nLmJpbmQob3JpZ0Rlc2NyaXB0b3IuZ2V0KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KERvY3VtZW50LnByb3RvdHlwZSwgJ3JlZmVycmVyJywge1xuICAgICAgICAgICAgZ2V0OiByZXR1cm5DdXJyZW50T3JpZ2luRnVuYyxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgeyBTdGVhbHRoSGVscGVyIGFzIFMgfTtcbiIsImltcG9ydCB7IFMgYXMgU3RlYWx0aEhlbHBlciB9IGZyb20gJy4vY29tbW9uL3N0ZWFsdGgtaGVscGVyLmpzJztcblxuLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9iYWNrZ3JvdW5kL3NlcnZpY2VzL3N0ZWFsdGgtc2VydmljZScpLlN0ZWFsdGhTZXJ2aWNlfSBTdGVhbHRoU2VydmljZVxuICovXG4vKipcbiAqIEBmaWxlXG4gKiBJTVBPUlRBTlQ6IFRoaXMgZmlsZSBzaG91bGQgYmUgbGlzdGVkIGluc2lkZSAnc2lkZUVmZmVjdHMnIGZpZWxkXG4gKiBpbiB0aGUgcGFja2FnZS5qc29uLCBiZWNhdXNlIGl0IGhhcyBzaWRlIGVmZmVjdHM6IHdlIGRvIG5vdCBleHBvcnQgYW55dGhpbmdcbiAqIGZyb20gaXQgb3V0c2lkZSwganVzdCBldmFsdWF0ZSB0aGUgY29kZSAodmlhIGluamVjdGlvbikuXG4gKlxuICogV2Ugd2lsbCBpbmplY3QgdGhpcyBzY3JpcHQgZHluYW1pY2FsbHkgdmlhIGBzY3JpcHRpbmcucmVnaXN0ZXJDb250ZW50U2NyaXB0c2BcbiAqIGluc2lkZSB7QGxpbmsgU3RlYWx0aFNlcnZpY2Uuc2V0Q29udGVudFNjcmlwdH0uXG4gKi9cblN0ZWFsdGhIZWxwZXIuc2V0RG9tU2lnbmFsKCk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LTIwMjUgQWRndWFyZCBTb2Z0d2FyZSBMdGQuXG4gKlxuICogQGZpbGVcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIEFkR3VhcmQgQnJvd3NlciBFeHRlbnNpb24gKGh0dHBzOi8vZ2l0aHViLmNvbS9BZGd1YXJkVGVhbS9BZGd1YXJkQnJvd3NlckV4dGVuc2lvbikuXG4gKlxuICogQWRHdWFyZCBCcm93c2VyIEV4dGVuc2lvbiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogQWRHdWFyZCBCcm93c2VyIEV4dGVuc2lvbiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogYWxvbmcgd2l0aCBBZEd1YXJkIEJyb3dzZXIgRXh0ZW5zaW9uLiBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cblxuLyoqXG4gKiBXZSBkbyBub3QgaW5qZWN0IHRoaXMgc2NyaXB0cyBtYW51YWxseSBmcm9tIGV4dGVuc2lvbiwgYmVjYXVzZSBpdCB3aWxsIGJlXG4gKiBkeW5hbWljYWxseSByZWdpc3RlcmVkIGFuZCB1bnJlZ2lzdGVyZWQgYnkgdGhlIHRzd2ViZXh0ZW5zaW9uIHdoZW4gdGhlXG4gKiBzdGVhbHRoIG9wdGlvbiBpcyBlbmFibGVkL2Rpc2FibGVkLlxuICovXG5pbXBvcnQgJ0BhZGd1YXJkL3Rzd2ViZXh0ZW5zaW9uL212My9ncGMnO1xuIl0sIm5hbWVzIjpbIlN0ZWFsdGhIZWxwZXIiLCJzZXREb21TaWduYWwiLCJOYXZpZ2F0b3IiLCJwcm90b3R5cGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsImNvbmZpZ3VyYWJsZSIsImVudW1lcmFibGUiLCJleCIsImhpZGVEb2N1bWVudFJlZmVycmVyIiwib3JpZ0Rlc2NyaXB0b3IiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJEb2N1bWVudCIsInJldHVybkN1cnJlbnRPcmlnaW5GdW5jIiwiZG9jdW1lbnQiLCJsb2NhdGlvbiIsIm9yaWdpbiIsInRvU3RyaW5nIiwiYmluZCIsIlMiXSwic291cmNlUm9vdCI6IiJ9